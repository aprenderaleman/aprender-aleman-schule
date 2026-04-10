import express from 'express'
import cors from 'cors'
import mysql from 'mysql2/promise'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import Stripe from 'stripe'
import dotenv from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url'

dotenv.config()

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const app = express()

// CORS: restrict to allowed origins
const ALLOWED_ORIGINS = process.env.ALLOWED_ORIGINS
  ? process.env.ALLOWED_ORIGINS.split(',')
  : ['http://localhost:5173', 'http://localhost:3001']
app.use(cors({
  origin: (origin, cb) => {
    if (!origin || ALLOWED_ORIGINS.includes(origin)) cb(null, true)
    else cb(new Error('CORS not allowed'))
  },
  credentials: true,
}))
// Parse JSON for all routes except Stripe webhook (needs raw body)
app.use((req, res, next) => {
  if (req.originalUrl === '/api/stripe/webhook') return next()
  express.json({ limit: '50kb' })(req, res, next)
})

// Rate limiting for login
const loginAttempts = new Map()
function loginRateLimit(req, res, next) {
  const ip = req.ip
  const now = Date.now()
  const window = 15 * 60 * 1000 // 15 min
  const max = 10
  const attempts = loginAttempts.get(ip) || []
  const recent = attempts.filter(t => now - t < window)
  if (recent.length >= max) {
    return res.status(429).json({ error: 'Demasiados intentos. Espera 15 minutos.' })
  }
  recent.push(now)
  loginAttempts.set(ip, recent)
  next()
}

// Rate limiting for AI calls
const aiAttempts = new Map()
function aiRateLimit(req, res, next) {
  const userId = req.user?.id || req.ip
  const now = Date.now()
  const window = 60 * 1000 // 1 min
  const max = 10
  const attempts = aiAttempts.get(userId) || []
  const recent = attempts.filter(t => now - t < window)
  if (recent.length >= max) {
    return res.status(429).json({ error: 'Demasiadas solicitudes de IA. Espera un minuto.' })
  }
  recent.push(now)
  aiAttempts.set(userId, recent)
  next()
}

// Clean up rate limit maps every 30 minutes
setInterval(() => {
  const now = Date.now()
  for (const [ip, attempts] of loginAttempts) {
    const recent = attempts.filter(t => now - t < 15 * 60 * 1000)
    if (recent.length === 0) loginAttempts.delete(ip)
    else loginAttempts.set(ip, recent)
  }
  for (const [id, attempts] of aiAttempts) {
    const recent = attempts.filter(t => now - t < 60 * 1000)
    if (recent.length === 0) aiAttempts.delete(id)
    else aiAttempts.set(id, recent)
  }
}, 30 * 60 * 1000)

// Validate required env vars
const JWT_SECRET = process.env.JWT_SECRET
if (!JWT_SECRET) { console.error('FATAL: JWT_SECRET not set in .env'); process.exit(1) }

// Database connection pool
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || '3307'),
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
})

// ─── STRIPE SETUP ────────────────────────────────────
const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY
const STRIPE_WEBHOOK_SECRET = process.env.STRIPE_WEBHOOK_SECRET
const STRIPE_PRICE_ID = process.env.STRIPE_PRICE_ID // monthly 15€ price
const stripe = STRIPE_SECRET_KEY ? new Stripe(STRIPE_SECRET_KEY) : null

// Auto-create schule_subscriptions table
;(async () => {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS schule_subscriptions (
        id INT AUTO_INCREMENT PRIMARY KEY,
        userId VARCHAR(191) NOT NULL UNIQUE,
        trialEndsAt DATETIME NOT NULL,
        subscriptionStatus ENUM('trialing','active','past_due','canceled','none') DEFAULT 'trialing',
        stripeCustomerId VARCHAR(255) DEFAULT NULL,
        stripeSubscriptionId VARCHAR(255) DEFAULT NULL,
        ssoUser TINYINT(1) DEFAULT 0,
        createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
        updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        INDEX idx_userId (userId),
        INDEX idx_stripeCustomerId (stripeCustomerId)
      )
    `)
  } catch (err) {
    console.error('Failed to create schule_subscriptions table:', err.message)
  }
})()

// Auto-create Prüfungen tables
;(async () => {
  try {
    // User exam preparation plan (one per user)
    await pool.query(`
      CREATE TABLE IF NOT EXISTS schule_pruefungen_plans (
        id INT AUTO_INCREMENT PRIMARY KEY,
        userId VARCHAR(191) NOT NULL UNIQUE,
        provider VARCHAR(32) NOT NULL DEFAULT 'goethe',
        level VARCHAR(8) NOT NULL,
        examDate DATE DEFAULT NULL,
        createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
        updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        INDEX idx_userId (userId)
      )
    `)
    // Each attempt at a simulation/practice (one row per started attempt)
    await pool.query(`
      CREATE TABLE IF NOT EXISTS schule_pruefungen_attempts (
        id INT AUTO_INCREMENT PRIMARY KEY,
        userId VARCHAR(191) NOT NULL,
        provider VARCHAR(32) NOT NULL DEFAULT 'goethe',
        level VARCHAR(8) NOT NULL,
        module VARCHAR(16) NOT NULL,
        examId VARCHAR(64) NOT NULL,
        mode ENUM('practice','simulation') NOT NULL DEFAULT 'simulation',
        startedAt DATETIME DEFAULT CURRENT_TIMESTAMP,
        finishedAt DATETIME DEFAULT NULL,
        score DECIMAL(5,2) DEFAULT NULL,
        maxScore DECIMAL(5,2) DEFAULT NULL,
        passed TINYINT(1) DEFAULT NULL,
        durationSeconds INT DEFAULT NULL,
        responses JSON DEFAULT NULL,
        feedback JSON DEFAULT NULL,
        INDEX idx_user_module (userId, module),
        INDEX idx_user_level (userId, level),
        INDEX idx_user_finished (userId, finishedAt)
      )
    `)
  } catch (err) {
    console.error('Failed to create Pruefungen tables:', err.message)
  }
})()

// Free-lessons threshold: a "lesson passed" = exercise or exam attempt with score >= 70%
const FREE_LESSONS_LIMIT = 10
const FREE_LESSONS_PASS_PCT = 70

// Helper: count distinct lessons passed by a user (exercises + exam attempts)
async function countPassedLessons(userId) {
  try {
    const [exRows] = await pool.query(
      'SELECT COUNT(DISTINCT exerciseId) AS n FROM schule_exercise_results WHERE userId = ? AND score >= ?',
      [userId, FREE_LESSONS_PASS_PCT]
    )
    let count = exRows[0]?.n || 0
    try {
      const [examRows] = await pool.query(
        'SELECT COUNT(DISTINCT examId) AS n FROM schule_pruefungen_attempts WHERE userId = ? AND maxScore > 0 AND (score / maxScore) * 100 >= ?',
        [userId, FREE_LESSONS_PASS_PCT]
      )
      count += examRows[0]?.n || 0
    } catch (e) {
      // table may not exist on first boot
    }
    return count
  } catch (e) {
    console.error('countPassedLessons error:', e.message)
    return 0
  }
}

// Helper: get user subscription status
async function getSubscriptionInfo(userId) {
  const [rows] = await pool.query('SELECT * FROM schule_subscriptions WHERE userId = ?', [userId])
  if (rows.length === 0) return null
  const sub = rows[0]
  const paid = sub.subscriptionStatus === 'active'
  const isSso = sub.ssoUser === 1

  // Count free lessons used (only relevant if not paid/SSO)
  const lessonsPassed = (paid || isSso) ? 0 : await countPassedLessons(userId)
  const freeLessonsRemaining = Math.max(0, FREE_LESSONS_LIMIT - lessonsPassed)
  const freeAccess = !paid && !isSso && lessonsPassed < FREE_LESSONS_LIMIT

  return {
    status: sub.subscriptionStatus,
    trialEndsAt: sub.trialEndsAt, // legacy, no longer used for gating
    trialActive: freeAccess, // alias so legacy UI keeps working
    paid,
    ssoUser: isSso,
    hasAccess: isSso || paid || freeAccess,
    lessonsPassed,
    freeLessonsLimit: FREE_LESSONS_LIMIT,
    freeLessonsRemaining,
    stripeCustomerId: sub.stripeCustomerId,
    stripeSubscriptionId: sub.stripeSubscriptionId,
  }
}

// Middleware: require active subscription or trial
function subscriptionMiddleware(req, res, next) {
  // Admins always have access
  if (req.user?.role === 'superadmin' || req.user?.role === 'admin') return next()

  // Check subscription asynchronously
  getSubscriptionInfo(req.user.id).then(sub => {
    if (!sub) {
      return res.status(403).json({ error: 'subscription_required', message: 'Suscripción requerida.' })
    }
    if (!sub.hasAccess) {
      return res.status(403).json({ error: 'subscription_expired', message: 'Tu prueba ha terminado. Suscríbete para continuar.' })
    }
    req.subscription = sub
    next()
  }).catch(err => {
    console.error('Subscription check error:', err)
    res.status(500).json({ error: 'Error al verificar suscripción.' })
  })
}

// Middleware to verify JWT token
function authMiddleware(req, res, next) {
  const header = req.headers.authorization
  if (!header || !header.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'No autorizado' })
  }
  try {
    const decoded = jwt.verify(header.slice(7), JWT_SECRET)
    req.user = decoded
    next()
  } catch {
    return res.status(401).json({ error: 'Token inválido o expirado' })
  }
}

// ─── LOGIN ────────────────────────────────────────────
app.post('/api/auth/login', loginRateLimit, async (req, res) => {
  try {
    const { email, password } = req.body
    if (!email || !password) {
      return res.status(400).json({ error: 'Email y contraseña son obligatorios.' })
    }

    // Find user by email
    const [users] = await pool.query(
      'SELECT u.id, u.fullName, u.email, u.password, u.role, u.status, u.studentId, s.level, s.classType FROM users u LEFT JOIN students s ON u.studentId = s.id WHERE u.email = ? LIMIT 1',
      [email.trim().toLowerCase()]
    )

    if (users.length === 0) {
      return res.status(401).json({ error: 'Correo o contraseña incorrectos.' })
    }

    const user = users[0]

    // Check if account is active
    if (user.status !== 'active') {
      return res.status(403).json({ error: 'Tu cuenta está inactiva. Contacta al soporte.' })
    }

    // Verify password with bcrypt
    const valid = await bcrypt.compare(password, user.password)
    if (!valid) {
      return res.status(401).json({ error: 'Correo o contraseña incorrectos.' })
    }

    // Generate JWT
    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
        fullName: user.fullName,
        role: user.role,
        studentId: user.studentId,
        level: user.level ? user.level.toUpperCase() : 'A1',
      },
      JWT_SECRET,
      { expiresIn: '30d' }
    )

    // Get subscription info
    let subscription = null
    if (user.role === 'student') {
      const sub = await getSubscriptionInfo(user.id)
      if (sub) {
        subscription = { status: sub.status, trialEndsAt: sub.trialEndsAt, trialActive: sub.trialActive, paid: sub.paid, ssoUser: sub.ssoUser, hasAccess: sub.hasAccess }
      }
    }

    res.json({
      token,
      user: {
        id: user.id,
        name: user.fullName,
        email: user.email,
        role: user.role,
        level: user.level ? user.level.toUpperCase() : 'A1',
        studentId: user.studentId,
        classType: user.classType,
        subscription,
      },
    })
  } catch (err) {
    console.error('Login error:', err)
    res.status(500).json({ error: 'Error interno del servidor.' })
  }
})

// ─── VERIFY TOKEN / GET CURRENT USER ──────────────────
app.get('/api/auth/me', authMiddleware, async (req, res) => {
  try {
    const [users] = await pool.query(
      'SELECT u.id, u.fullName, u.email, u.role, u.status, u.studentId, s.level, s.classType FROM users u LEFT JOIN students s ON u.studentId = s.id WHERE u.id = ? LIMIT 1',
      [req.user.id]
    )

    if (users.length === 0) {
      return res.status(404).json({ error: 'Usuario no encontrado.' })
    }

    const user = users[0]

    // Block inactive users immediately (e.g. deactivated from the other app)
    if (user.status !== 'active') {
      return res.status(403).json({ error: 'Tu cuenta está inactiva. Contacta al soporte.' })
    }

    // Auto-create schule_progress if missing (e.g. user registered on the other app)
    await pool.query('INSERT IGNORE INTO schule_progress (userId) VALUES (?)', [user.id])

    // Get subscription info
    let subscription = null
    if (user.role === 'student') {
      subscription = await getSubscriptionInfo(user.id)
      // Auto-create subscription record for SSO users (from aprender-aleman.de) who don't have one
      if (!subscription) {
        // Check if user came via SSO by looking if they existed before schule app
        // SSO users are those with studentId already set from the other app
        // For now, they'll get a record created when they first use SSO
      }
    }

    res.json({
      id: user.id,
      name: user.fullName,
      email: user.email,
      role: user.role,
      level: user.level ? user.level.toUpperCase() : 'A1',
      studentId: user.studentId,
      classType: user.classType,
      subscription: subscription ? {
        status: subscription.status,
        trialEndsAt: subscription.trialEndsAt,
        trialActive: subscription.trialActive,
        paid: subscription.paid,
        ssoUser: subscription.ssoUser,
        hasAccess: subscription.hasAccess,
      } : null,
    })
  } catch (err) {
    console.error('Me error:', err)
    res.status(500).json({ error: 'Error interno del servidor.' })
  }
})

// ─── SSO: AUTO-LOGIN BY USER ID ───────────────────────
// The main app (app.aprender-aleman.de) calls this to generate a one-time SSO token,
// then redirects the student to the new app with that token in the URL.
//
// Step 1: Main app backend calls POST /api/auth/sso-token { userId }
// Step 2: This returns a short-lived JWT
// Step 3: Main app redirects to: https://nueva-app.com/auto-login?token=JWT
// Step 4: New app frontend reads token, calls GET /api/auth/sso-verify?token=JWT
// Step 5: New app gets back user data + session token

// Generate SSO token (called by main app backend)
app.post('/api/auth/sso-token', async (req, res) => {
  try {
    const { userId, secret } = req.body

    // Verify shared secret so only the main app can generate SSO tokens
    const SSO_SECRET = process.env.SSO_SECRET
    if (!SSO_SECRET) return res.status(500).json({ error: 'SSO no configurado.' })
    if (secret !== SSO_SECRET) {
      return res.status(403).json({ error: 'Acceso denegado.' })
    }

    if (!userId) {
      return res.status(400).json({ error: 'userId es obligatorio.' })
    }

    // Verify user exists and is active
    const [users] = await pool.query(
      'SELECT u.id, u.fullName, u.email, u.role, u.status, u.studentId, s.level FROM users u LEFT JOIN students s ON u.studentId = s.id WHERE u.id = ? AND u.status = ? LIMIT 1',
      [userId, 'active']
    )

    if (users.length === 0) {
      return res.status(404).json({ error: 'Usuario no encontrado o inactivo.' })
    }

    // Generate short-lived SSO token (5 minutes)
    const ssoToken = jwt.sign(
      { userId: users[0].id, sso: true },
      JWT_SECRET,
      { expiresIn: '5m' }
    )

    res.json({ ssoToken })
  } catch (err) {
    console.error('SSO token error:', err)
    res.status(500).json({ error: 'Error interno del servidor.' })
  }
})

// Verify SSO token and return session (called by new app frontend)
app.get('/api/auth/sso-verify', async (req, res) => {
  try {
    const { token } = req.query
    if (!token) {
      return res.status(400).json({ error: 'Token es obligatorio.' })
    }

    // Verify the SSO token
    let decoded
    try {
      decoded = jwt.verify(token, JWT_SECRET)
    } catch {
      return res.status(401).json({ error: 'Token SSO inválido o expirado.' })
    }

    if (!decoded.sso || !decoded.userId) {
      return res.status(401).json({ error: 'Token no es un token SSO válido.' })
    }

    // Fetch user data
    const [users] = await pool.query(
      'SELECT u.id, u.fullName, u.email, u.role, u.status, u.studentId, s.level, s.classType FROM users u LEFT JOIN students s ON u.studentId = s.id WHERE u.id = ? LIMIT 1',
      [decoded.userId]
    )

    if (users.length === 0 || users[0].status !== 'active') {
      return res.status(404).json({ error: 'Usuario no encontrado o inactivo.' })
    }

    const user = users[0]

    // Auto-create or update subscription for SSO users (free access)
    await pool.query(
      `INSERT INTO schule_subscriptions (userId, trialEndsAt, subscriptionStatus, ssoUser)
       VALUES (?, DATE_ADD(NOW(), INTERVAL 100 YEAR), 'active', 1)
       ON DUPLICATE KEY UPDATE ssoUser = 1, subscriptionStatus = 'active'`,
      [user.id]
    )

    // Generate a long-lived session token for the new app
    const sessionToken = jwt.sign(
      {
        id: user.id,
        email: user.email,
        fullName: user.fullName,
        role: user.role,
        studentId: user.studentId,
        level: user.level ? user.level.toUpperCase() : 'A1',
      },
      JWT_SECRET,
      { expiresIn: '30d' }
    )

    res.json({
      token: sessionToken,
      user: {
        id: user.id,
        name: user.fullName,
        email: user.email,
        role: user.role,
        level: user.level ? user.level.toUpperCase() : 'A1',
        studentId: user.studentId,
        classType: user.classType,
        subscription: { status: 'active', trialActive: false, paid: false, ssoUser: true, hasAccess: true },
      },
    })
  } catch (err) {
    console.error('SSO verify error:', err)
    res.status(500).json({ error: 'Error interno del servidor.' })
  }
})

// ─── REGISTER ────────────────────────────────────────
app.post('/api/auth/register', loginRateLimit, async (req, res) => {
  try {
    const { fullName, email, password } = req.body
    if (!fullName || !email || !password) {
      return res.status(400).json({ error: 'Nombre, email y contraseña son obligatorios.' })
    }
    if (password.length < 6) {
      return res.status(400).json({ error: 'La contraseña debe tener al menos 6 caracteres.' })
    }

    // Check if email exists
    const [existing] = await pool.query('SELECT id FROM users WHERE email = ? LIMIT 1', [email.trim().toLowerCase()])
    if (existing.length > 0) {
      return res.status(409).json({ error: 'Este correo ya está registrado.' })
    }

    // Generate UUIDs (matching Prisma format)
    const { randomUUID } = await import('crypto')
    const userId = randomUUID()
    const studentId = randomUUID()
    const hashedPassword = await bcrypt.hash(password, 10)
    const now = new Date()

    // Create student record first
    await pool.query(
      'INSERT INTO students (id, level, userId, classType) VALUES (?, ?, ?, ?)',
      [studentId, 'a1', userId, 'group']
    )

    // Create user record
    await pool.query(
      'INSERT INTO users (id, fullName, email, password, role, status, studentId, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
      [userId, fullName.trim(), email.trim().toLowerCase(), hashedPassword, 'student', 'active', studentId, now, now]
    )

    // Create initial progress
    await pool.query(
      'INSERT INTO schule_progress (userId) VALUES (?)',
      [userId]
    )

    // Create subscription with 5-day free trial
    const trialEndsAt = new Date(Date.now() + 5 * 24 * 60 * 60 * 1000)
    await pool.query(
      'INSERT INTO schule_subscriptions (userId, trialEndsAt, subscriptionStatus, ssoUser) VALUES (?, ?, ?, ?)',
      [userId, trialEndsAt, 'trialing', 0]
    )

    // Generate JWT
    const token = jwt.sign(
      { id: userId, email: email.trim().toLowerCase(), fullName: fullName.trim(), role: 'student', studentId, level: 'A1' },
      JWT_SECRET,
      { expiresIn: '30d' }
    )

    res.status(201).json({
      token,
      user: {
        id: userId, name: fullName.trim(), email: email.trim().toLowerCase(), role: 'student', level: 'A1', studentId, classType: 'group',
        subscription: { status: 'trialing', trialEndsAt, trialActive: true, paid: false, ssoUser: false, hasAccess: true },
      },
    })
  } catch (err) {
    console.error('Register error:', err)
    res.status(500).json({ error: 'Error al registrar usuario.' })
  }
})

// ─── PROGRESS: GET ───────────────────────────────────
app.get('/api/progress', authMiddleware, subscriptionMiddleware, async (req, res) => {
  try {
    const userId = req.user.id

    // Get or create progress
    let [rows] = await pool.query('SELECT * FROM schule_progress WHERE userId = ?', [userId])
    if (rows.length === 0) {
      await pool.query('INSERT INTO schule_progress (userId) VALUES (?)', [userId])
      ;[rows] = await pool.query('SELECT * FROM schule_progress WHERE userId = ?', [userId])
    }
    const p = rows[0]

    // Get completed exercises
    const [results] = await pool.query(
      'SELECT exerciseId, exerciseType, score, perfect, xpEarned, completedAt FROM schule_exercise_results WHERE userId = ? ORDER BY completedAt DESC',
      [userId]
    )

    // Get achievements
    const [achievements] = await pool.query(
      'SELECT achievementId, earnedAt FROM schule_achievements WHERE userId = ?',
      [userId]
    )

    res.json({
      xp: p.xp,
      streak: p.streak,
      lastActivityDate: p.lastActivityDate,
      perfectStreak: p.perfectStreak,
      skillScores: {
        grammar: p.skillGrammar,
        reading: p.skillReading,
        listening: p.skillListening,
        writing: p.skillWriting,
      },
      completedExercises: [...new Set(results.map(r => r.exerciseId))],
      exerciseHistory: results.map(r => ({
        exerciseId: r.exerciseId,
        type: r.exerciseType,
        score: r.score,
        perfect: !!r.perfect,
        xpEarned: r.xpEarned,
        completedAt: r.completedAt,
      })),
      achievements: achievements.map(a => a.achievementId),
    })
  } catch (err) {
    console.error('Get progress error:', err)
    res.status(500).json({ error: 'Error al obtener progreso.' })
  }
})

// ─── PROGRESS: RECORD EXERCISE ───────────────────────
app.post('/api/progress/exercise', authMiddleware, subscriptionMiddleware, async (req, res) => {
  try {
    const userId = req.user.id
    const { exerciseId, exerciseType, score, perfect, xpEarned, timeSpent } = req.body
    if (!exerciseId || score === undefined) {
      return res.status(400).json({ error: 'Faltan datos del ejercicio.' })
    }

    // Insert exercise result
    await pool.query(
      'INSERT INTO schule_exercise_results (userId, exerciseId, exerciseType, score, perfect, xpEarned, timeSpent) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [userId, exerciseId, exerciseType || 'grammar', score, perfect ? 1 : 0, xpEarned || 0, timeSpent || 0]
    )

    // Update progress totals
    const skillCol = { grammar: 'skillGrammar', reading: 'skillReading', listening: 'skillListening', writing: 'skillWriting' }[exerciseType] || 'skillGrammar'

    // Calculate new skill score (average of last 20 exercises of this type)
    const [recentScores] = await pool.query(
      'SELECT score FROM schule_exercise_results WHERE userId = ? AND exerciseType = ? ORDER BY completedAt DESC LIMIT 20',
      [userId, exerciseType]
    )
    const avgScore = Math.round(recentScores.reduce((sum, r) => sum + r.score, 0) / recentScores.length)

    // Update streak
    const today = new Date().toISOString().split('T')[0]
    const [prog] = await pool.query('SELECT lastActivityDate, streak, perfectStreak FROM schule_progress WHERE userId = ?', [userId])
    let newStreak = 1
    let newPerfectStreak = perfect ? 1 : 0
    if (prog.length > 0) {
      const last = prog[0].lastActivityDate ? new Date(prog[0].lastActivityDate).toISOString().split('T')[0] : null
      if (last === today) {
        newStreak = prog[0].streak
        newPerfectStreak = perfect ? prog[0].perfectStreak + 1 : 0
      } else {
        const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0]
        newStreak = last === yesterday ? prog[0].streak + 1 : 1
        newPerfectStreak = perfect ? prog[0].perfectStreak + 1 : 0
      }
    }

    await pool.query(
      `UPDATE schule_progress SET xp = xp + ?, streak = ?, perfectStreak = ?, lastActivityDate = ?, ${skillCol} = ? WHERE userId = ?`,
      [xpEarned || 0, newStreak, newPerfectStreak, today, avgScore, userId]
    )

    res.json({ ok: true, streak: newStreak, perfectStreak: newPerfectStreak })
  } catch (err) {
    console.error('Record exercise error:', err)
    res.status(500).json({ error: 'Error al guardar resultado.' })
  }
})

// ─── PROGRESS: SAVE ACHIEVEMENT ──────────────────────
app.post('/api/progress/achievement', authMiddleware, async (req, res) => {
  try {
    const { achievementId } = req.body
    if (!achievementId) return res.status(400).json({ error: 'Falta achievementId.' })

    await pool.query(
      'INSERT IGNORE INTO schule_achievements (userId, achievementId) VALUES (?, ?)',
      [req.user.id, achievementId]
    )
    res.json({ ok: true })
  } catch (err) {
    console.error('Achievement error:', err)
    res.status(500).json({ error: 'Error al guardar logro.' })
  }
})

// ─── ADMIN MIDDLEWARE ─────────────────────────────────
function adminMiddleware(req, res, next) {
  if (req.user?.role !== 'superadmin' && req.user?.role !== 'admin') {
    return res.status(403).json({ error: 'Acceso denegado. Se requiere rol de administrador.' })
  }
  next()
}

// ─── ADMIN: DASHBOARD STATS ─────────────────────────
app.get('/api/admin/stats', authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const [totalUsers] = await pool.query("SELECT COUNT(*) as n FROM users WHERE role = 'student'")
    const [activeUsers] = await pool.query("SELECT COUNT(*) as n FROM users WHERE role = 'student' AND status = 'active'")
    const [inactiveUsers] = await pool.query("SELECT COUNT(*) as n FROM users WHERE role = 'student' AND status = 'inactive'")

    // Users by level
    const [byLevel] = await pool.query(
      "SELECT UPPER(s.level) as level, COUNT(*) as count FROM students s JOIN users u ON s.userId = u.id WHERE u.role = 'student' AND u.status = 'active' GROUP BY s.level"
    )

    // Exercise activity last 30 days
    const [activityByDay] = await pool.query(
      "SELECT DATE(completedAt) as date, COUNT(*) as exercises, COUNT(DISTINCT userId) as users FROM schule_exercise_results WHERE completedAt >= DATE_SUB(NOW(), INTERVAL 30 DAY) GROUP BY DATE(completedAt) ORDER BY date"
    )

    // Top exercisers
    const [topStudents] = await pool.query(
      `SELECT u.fullName as name, u.email, UPPER(s.level) as level, p.xp, p.streak, p.skillGrammar, p.skillReading, p.skillListening, p.skillWriting,
        (SELECT COUNT(*) FROM schule_exercise_results r WHERE r.userId = u.id) as exerciseCount
      FROM schule_progress p
      JOIN users u ON u.id = p.userId
      LEFT JOIN students s ON u.studentId = s.id
      WHERE u.role = 'student'
      ORDER BY p.xp DESC LIMIT 10`
    )

    // Exercise type distribution
    const [byType] = await pool.query(
      "SELECT exerciseType as type, COUNT(*) as count FROM schule_exercise_results GROUP BY exerciseType"
    )

    // Average scores by type
    const [avgScores] = await pool.query(
      "SELECT exerciseType as type, ROUND(AVG(score)) as avg_score FROM schule_exercise_results GROUP BY exerciseType"
    )

    // New registrations last 30 days
    const [registrationsByDay] = await pool.query(
      "SELECT DATE(createdAt) as date, COUNT(*) as count FROM users WHERE role = 'student' AND createdAt >= DATE_SUB(NOW(), INTERVAL 30 DAY) GROUP BY DATE(createdAt) ORDER BY date"
    )

    // Total XP across platform
    const [totalXP] = await pool.query("SELECT COALESCE(SUM(xp), 0) as total FROM schule_progress")

    // Total exercises completed
    const [totalExercises] = await pool.query("SELECT COUNT(*) as n FROM schule_exercise_results")

    res.json({
      totalUsers: totalUsers[0].n,
      activeUsers: activeUsers[0].n,
      inactiveUsers: inactiveUsers[0].n,
      totalXP: totalXP[0].total,
      totalExercises: totalExercises[0].n,
      byLevel,
      activityByDay,
      topStudents,
      byType,
      avgScores,
      registrationsByDay,
    })
  } catch (err) {
    console.error('Admin stats error:', err)
    res.status(500).json({ error: 'Error al obtener estadísticas.' })
  }
})

// ─── ADMIN: LIST USERS ──────────────────────────────
app.get('/api/admin/users', authMiddleware, adminMiddleware, async (req, res) => {
  try {
    // Auto-create schule_progress for any users missing it (e.g. registered on the other app)
    await pool.query(
      'INSERT IGNORE INTO schule_progress (userId) SELECT u.id FROM users u LEFT JOIN schule_progress p ON p.userId = u.id WHERE p.id IS NULL'
    )

    const { search, level, status, page = 1, limit = 50 } = req.query
    const offset = (parseInt(page) - 1) * parseInt(limit)

    let where = "WHERE u.role = 'student'"
    const params = []

    if (search) {
      where += " AND (u.fullName LIKE ? OR u.email LIKE ?)"
      params.push(`%${search}%`, `%${search}%`)
    }
    if (level && level !== 'Todos') {
      where += " AND UPPER(s.level) = ?"
      params.push(level.toUpperCase())
    }
    if (status && status !== 'Todos') {
      where += " AND u.status = ?"
      params.push(status)
    }

    const [countResult] = await pool.query(
      `SELECT COUNT(*) as total FROM users u LEFT JOIN students s ON u.studentId = s.id ${where}`,
      params
    )

    const [users] = await pool.query(
      `SELECT u.id, u.fullName, u.email, u.role, u.status, u.createdAt, u.studentId,
        UPPER(s.level) as level, s.classType,
        COALESCE(p.xp, 0) as xp, COALESCE(p.streak, 0) as streak,
        COALESCE(p.skillGrammar, 0) as skillGrammar, COALESCE(p.skillReading, 0) as skillReading,
        COALESCE(p.skillListening, 0) as skillListening, COALESCE(p.skillWriting, 0) as skillWriting,
        p.lastActivityDate,
        (SELECT COUNT(*) FROM schule_exercise_results r WHERE r.userId = u.id) as exerciseCount
      FROM users u
      LEFT JOIN students s ON u.studentId = s.id
      LEFT JOIN schule_progress p ON p.userId = u.id
      ${where}
      ORDER BY u.createdAt DESC
      LIMIT ? OFFSET ?`,
      [...params, parseInt(limit), offset]
    )

    res.json({ users, total: countResult[0].total, page: parseInt(page), limit: parseInt(limit) })
  } catch (err) {
    console.error('Admin list users error:', err)
    res.status(500).json({ error: 'Error al listar usuarios.' })
  }
})

// ─── ADMIN: GET USER DETAIL ─────────────────────────
app.get('/api/admin/users/:userId', authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const { userId } = req.params

    const [users] = await pool.query(
      `SELECT u.id, u.fullName, u.email, u.role, u.status, u.createdAt, u.studentId,
        UPPER(s.level) as level, s.classType
      FROM users u
      LEFT JOIN students s ON u.studentId = s.id
      WHERE u.id = ? LIMIT 1`,
      [userId]
    )
    if (users.length === 0) return res.status(404).json({ error: 'Usuario no encontrado.' })

    const [progress] = await pool.query('SELECT * FROM schule_progress WHERE userId = ?', [userId])

    const [results] = await pool.query(
      'SELECT exerciseId, exerciseType, score, perfect, xpEarned, timeSpent, completedAt FROM schule_exercise_results WHERE userId = ? ORDER BY completedAt DESC LIMIT 200',
      [userId]
    )

    const [achievements] = await pool.query(
      'SELECT achievementId, earnedAt FROM schule_achievements WHERE userId = ?',
      [userId]
    )

    // Activity by day (last 60 days)
    const [activityByDay] = await pool.query(
      'SELECT DATE(completedAt) as date, COUNT(*) as count, ROUND(AVG(score)) as avgScore FROM schule_exercise_results WHERE userId = ? AND completedAt >= DATE_SUB(NOW(), INTERVAL 60 DAY) GROUP BY DATE(completedAt) ORDER BY date',
      [userId]
    )

    // Score distribution by type
    const [scoreByType] = await pool.query(
      'SELECT exerciseType as type, ROUND(AVG(score)) as avgScore, COUNT(*) as count FROM schule_exercise_results WHERE userId = ? GROUP BY exerciseType',
      [userId]
    )

    const user = users[0]
    const prog = progress[0] || {}

    res.json({
      user: {
        ...user,
        xp: prog.xp || 0,
        streak: prog.streak || 0,
        perfectStreak: prog.perfectStreak || 0,
        lastActivityDate: prog.lastActivityDate,
        skillScores: {
          grammar: prog.skillGrammar || 0,
          reading: prog.skillReading || 0,
          listening: prog.skillListening || 0,
          writing: prog.skillWriting || 0,
        },
      },
      exerciseResults: results,
      achievements: achievements.map(a => a.achievementId),
      activityByDay,
      scoreByType,
    })
  } catch (err) {
    console.error('Admin user detail error:', err)
    res.status(500).json({ error: 'Error al obtener usuario.' })
  }
})

// ─── ADMIN: UPDATE USER ─────────────────────────────
app.patch('/api/admin/users/:userId', authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const { userId } = req.params
    const { fullName, email, status, level, password } = req.body

    if (fullName) await pool.query('UPDATE users SET fullName = ?, updatedAt = NOW() WHERE id = ?', [fullName, userId])
    if (email) await pool.query('UPDATE users SET email = ?, updatedAt = NOW() WHERE id = ?', [email.trim().toLowerCase(), userId])
    if (status && ['active', 'inactive'].includes(status)) await pool.query('UPDATE users SET status = ?, updatedAt = NOW() WHERE id = ?', [status, userId])
    if (password) {
      const hash = await bcrypt.hash(password, 10)
      await pool.query('UPDATE users SET password = ?, updatedAt = NOW() WHERE id = ?', [hash, userId])
    }
    if (level && ['a1', 'a2', 'b1', 'b2', 'c1', 'c2'].includes(level.toLowerCase())) {
      const [stu] = await pool.query('SELECT id FROM students WHERE userId = ?', [userId])
      if (stu.length > 0) {
        await pool.query('UPDATE students SET level = ? WHERE userId = ?', [level.toLowerCase(), userId])
      }
    }

    res.json({ ok: true })
  } catch (err) {
    console.error('Admin update user error:', err)
    res.status(500).json({ error: 'Error al actualizar usuario.' })
  }
})

// ─── ADMIN: DELETE USER ─────────────────────────────
app.delete('/api/admin/users/:userId', authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const { userId } = req.params
    // Don't allow deleting superadmin
    const [u] = await pool.query('SELECT role FROM users WHERE id = ?', [userId])
    if (u.length > 0 && u[0].role === 'superadmin') {
      return res.status(403).json({ error: 'No se puede eliminar al superadmin.' })
    }
    // Delete cascade: progress, results, achievements are FK cascaded
    await pool.query('DELETE FROM schule_achievements WHERE userId = ?', [userId])
    await pool.query('DELETE FROM schule_exercise_results WHERE userId = ?', [userId])
    await pool.query('DELETE FROM schule_progress WHERE userId = ?', [userId])
    await pool.query('DELETE FROM students WHERE userId = ?', [userId])
    await pool.query('DELETE FROM users WHERE id = ?', [userId])
    res.json({ ok: true })
  } catch (err) {
    console.error('Admin delete user error:', err)
    res.status(500).json({ error: 'Error al eliminar usuario.' })
  }
})

// ─── ADMIN: CREATE USER ─────────────────────────────
app.post('/api/admin/users', authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const { fullName, email, password, level, status } = req.body
    if (!fullName || !email || !password) {
      return res.status(400).json({ error: 'Nombre, email y contraseña son obligatorios.' })
    }
    const [existing] = await pool.query('SELECT id FROM users WHERE email = ?', [email.trim().toLowerCase()])
    if (existing.length > 0) return res.status(409).json({ error: 'Este correo ya está registrado.' })

    const { randomUUID } = await import('crypto')
    const userId = randomUUID()
    const studentId = randomUUID()
    const hash = await bcrypt.hash(password, 10)
    const now = new Date()

    await pool.query('INSERT INTO students (id, level, userId, classType) VALUES (?, ?, ?, ?)',
      [studentId, (level || 'a1').toLowerCase(), userId, 'group'])
    await pool.query('INSERT INTO users (id, fullName, email, password, role, status, studentId, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
      [userId, fullName.trim(), email.trim().toLowerCase(), hash, 'student', status || 'active', studentId, now, now])
    await pool.query('INSERT INTO schule_progress (userId) VALUES (?)', [userId])

    res.status(201).json({ ok: true, userId })
  } catch (err) {
    console.error('Admin create user error:', err)
    res.status(500).json({ error: 'Error al crear usuario.' })
  }
})

// ─── HEALTH CHECK ─────────────────────────────────────
app.get('/api/health', async (req, res) => {
  try {
    await pool.query('SELECT 1')
    res.json({ status: 'ok', db: 'connected' })
  } catch {
    res.status(500).json({ status: 'error', db: 'disconnected' })
  }
})

// ─── AI PROXY ────────────────────────────────────────
const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY

function getSystemPrompt(userName, userLevel) {
  return `Du bist ein Deutschlehrer für spanischsprachige Studenten. Der Student heißt ${userName} und hat das Niveau ${userLevel}.

WICHTIGE SPRACHREGELN:
- Schreibe 95% auf Deutsch (Feedback, Kommentare, Erklärungen, Ermutigung)
- Nur 5% auf Spanisch: kurze Übersetzungen von schwierigen Grammatikbegriffen in Klammern
- Sei ermutigend, klar und pädagogisch präzise
- Sprich den Studenten immer mit seinem Namen an: ${userName}
- Passe die Sprache dem Niveau ${userLevel} an — einfaches Deutsch für A1/A2, komplexeres für B1/B2/C1`
}

async function callAnthropic(messages, userName, userLevel, maxTokens = 1024) {
  if (!ANTHROPIC_API_KEY) throw new Error('ANTHROPIC_API_KEY not configured')

  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'x-api-key': ANTHROPIC_API_KEY,
      'anthropic-version': '2023-06-01',
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      model: 'claude-sonnet-4-20250514',
      max_tokens: maxTokens,
      system: getSystemPrompt(userName, userLevel),
      messages,
    }),
  })

  if (!response.ok) {
    const err = await response.text()
    throw new Error(`Anthropic API error ${response.status}: ${err}`)
  }

  const data = await response.json()
  return data.content[0].text
}

// Evaluate writing exercise
app.post('/api/ai/evaluate-writing', authMiddleware, aiRateLimit, async (req, res) => {
  try {
    if (!ANTHROPIC_API_KEY) return res.status(503).json({ error: 'Servicio de IA no disponible.' })

    const { prompt: taskPrompt, submission, userName, userLevel } = req.body
    if (!taskPrompt || !submission) return res.status(400).json({ error: 'Faltan datos.' })

    const message = `Bewerte diesen deutschen Schreibaufsatz von ${userName || 'Student'} (Niveau ${userLevel || 'A1'}).

Schreibaufgabe: ${taskPrompt}
Einreichung des Studenten: ${submission}

Gib detailliertes, konstruktives Feedback. Antworte NUR mit gültigem JSON:
{
  "score": 7,
  "grammar_errors": [{"error": "Fehlerhafte Stelle", "correction": "Korrektur", "explanation": "Erklärung"}],
  "vocabulary_suggestions": [{"word": "Wort", "better_alternative": "Bessere Alternative", "reason": "Grund"}],
  "structure_feedback": "Feedback zur Textstruktur",
  "positive_aspects": "Was gut gemacht wurde",
  "overall_comment": "Gesamtkommentar"
}
Bewertung von 0-10. Kein Text außerhalb des JSONs.`

    const text = await callAnthropic([{ role: 'user', content: message }], userName || 'Student', userLevel || 'A1', 1500)
    const jsonMatch = text.match(/\{[\s\S]*\}/)
    const result = jsonMatch ? JSON.parse(jsonMatch[0]) : null
    if (!result) return res.status(500).json({ error: 'Error al procesar respuesta de IA.' })
    res.json(result)
  } catch (err) {
    console.error('AI evaluate error:', err.message)
    res.status(500).json({ error: 'Error al evaluar escritura.' })
  }
})

// Grammar explanation
app.post('/api/ai/grammar-explanation', authMiddleware, aiRateLimit, async (req, res) => {
  try {
    if (!ANTHROPIC_API_KEY) return res.status(503).json({ error: 'Servicio de IA no disponible.' })

    const { topic, userName, userLevel } = req.body
    if (!topic) return res.status(400).json({ error: 'Falta el tema.' })

    const prompt = `Erkläre dieses deutsche Grammatikthema für ${userName || 'Student'} (Niveau ${userLevel || 'A1'}): "${topic}".
Schreibe auf Deutsch. Gib 2-3 Beispiele auf Deutsch. Schwierige Grammatikbegriffe kannst du kurz auf Spanisch in Klammern erklären. Maximal 150 Wörter.`

    const text = await callAnthropic([{ role: 'user', content: prompt }], userName || 'Student', userLevel || 'A1', 400)
    res.json({ explanation: text })
  } catch (err) {
    console.error('AI grammar error:', err.message)
    res.status(500).json({ error: 'Error al generar explicación.' })
  }
})

// ─── STRIPE: CREATE CHECKOUT SESSION ─────────────────
app.post('/api/stripe/create-checkout', authMiddleware, async (req, res) => {
  try {
    if (!stripe || !STRIPE_PRICE_ID) {
      return res.status(503).json({ error: 'Stripe no está configurado.' })
    }

    const userId = req.user.id
    const [users] = await pool.query('SELECT email, fullName FROM users WHERE id = ?', [userId])
    if (users.length === 0) return res.status(404).json({ error: 'Usuario no encontrado.' })

    const { email, fullName } = users[0]

    // Check if user already has a Stripe customer
    const [subs] = await pool.query('SELECT stripeCustomerId FROM schule_subscriptions WHERE userId = ?', [userId])
    let customerId = subs[0]?.stripeCustomerId

    if (!customerId) {
      const customer = await stripe.customers.create({ email, name: fullName, metadata: { userId } })
      customerId = customer.id
      await pool.query(
        'UPDATE schule_subscriptions SET stripeCustomerId = ? WHERE userId = ?',
        [customerId, userId]
      )
    }

    const frontendUrl = process.env.FRONTEND_URL || 'https://schule.aprender-aleman.de'
    const session = await stripe.checkout.sessions.create({
      customer: customerId,
      mode: 'subscription',
      line_items: [{ price: STRIPE_PRICE_ID, quantity: 1 }],
      success_url: `${frontendUrl}/dashboard?payment=success`,
      cancel_url: `${frontendUrl}/pricing?payment=canceled`,
      metadata: { userId },
      subscription_data: { metadata: { userId } },
    })

    res.json({ url: session.url })
  } catch (err) {
    console.error('Stripe checkout error:', err.message)
    res.status(500).json({ error: 'Error al crear sesión de pago.' })
  }
})

// ─── STRIPE: CUSTOMER PORTAL ─────────────────────────
app.post('/api/stripe/portal', authMiddleware, async (req, res) => {
  try {
    if (!stripe) return res.status(503).json({ error: 'Stripe no está configurado.' })

    const [subs] = await pool.query('SELECT stripeCustomerId FROM schule_subscriptions WHERE userId = ?', [req.user.id])
    if (!subs[0]?.stripeCustomerId) {
      return res.status(400).json({ error: 'No tienes una suscripción activa.' })
    }

    const frontendUrl = process.env.FRONTEND_URL || 'https://schule.aprender-aleman.de'
    const session = await stripe.billingPortal.sessions.create({
      customer: subs[0].stripeCustomerId,
      return_url: `${frontendUrl}/perfil`,
    })

    res.json({ url: session.url })
  } catch (err) {
    console.error('Stripe portal error:', err.message)
    res.status(500).json({ error: 'Error al abrir portal de facturación.' })
  }
})

// ─── STRIPE: GET SUBSCRIPTION STATUS ─────────────────
app.get('/api/subscription', authMiddleware, async (req, res) => {
  try {
    const sub = await getSubscriptionInfo(req.user.id)
    if (!sub) {
      return res.json({ status: 'none', hasAccess: false, trialActive: false, paid: false, ssoUser: false })
    }
    res.json({
      status: sub.status,
      trialEndsAt: sub.trialEndsAt,
      trialActive: sub.trialActive,
      paid: sub.paid,
      ssoUser: sub.ssoUser,
      hasAccess: sub.hasAccess,
    })
  } catch (err) {
    console.error('Subscription status error:', err)
    res.status(500).json({ error: 'Error al obtener estado de suscripción.' })
  }
})

// ─── PRÜFUNGEN ────────────────────────────────────────

// GET current user's exam plan
app.get('/api/pruefungen/plan', authMiddleware, subscriptionMiddleware, async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM schule_pruefungen_plans WHERE userId = ? LIMIT 1', [req.user.id])
    if (rows.length === 0) return res.json({ plan: null })
    const plan = rows[0]

    // Aggregate progress per module from finished attempts
    const [attempts] = await pool.query(
      `SELECT module, MAX(score / NULLIF(maxScore,0) * 100) AS bestPct, COUNT(*) AS totalAttempts
       FROM schule_pruefungen_attempts
       WHERE userId = ? AND finishedAt IS NOT NULL AND maxScore > 0
       GROUP BY module`,
      [req.user.id]
    )
    const progress = { lesen: 0, hoeren: 0, schreiben: 0, sprechen: 0 }
    for (const row of attempts) {
      progress[row.module] = Math.round(Number(row.bestPct) || 0)
    }

    res.json({
      plan: {
        provider: plan.provider,
        level: plan.level,
        examDate: plan.examDate,
        createdAt: plan.createdAt,
        progress,
      },
    })
  } catch (err) {
    console.error('Get plan error:', err)
    res.status(500).json({ error: 'Error al obtener el plan.' })
  }
})

// CREATE/UPDATE exam plan
app.post('/api/pruefungen/plan', authMiddleware, subscriptionMiddleware, async (req, res) => {
  try {
    const { provider = 'goethe', level, examDate } = req.body
    const ALLOWED_LEVELS = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2']
    if (!ALLOWED_LEVELS.includes(level)) {
      return res.status(400).json({ error: 'Nivel inválido.' })
    }
    let date = null
    if (examDate) {
      const d = new Date(examDate)
      if (isNaN(d.getTime())) return res.status(400).json({ error: 'Fecha inválida.' })
      date = d.toISOString().split('T')[0]
    }
    await pool.query(
      `INSERT INTO schule_pruefungen_plans (userId, provider, level, examDate)
       VALUES (?, ?, ?, ?)
       ON DUPLICATE KEY UPDATE provider = VALUES(provider), level = VALUES(level), examDate = VALUES(examDate), updatedAt = NOW()`,
      [req.user.id, provider, level, date]
    )
    res.json({ ok: true })
  } catch (err) {
    console.error('Save plan error:', err)
    res.status(500).json({ error: 'Error al guardar el plan.' })
  }
})

// DELETE exam plan
app.delete('/api/pruefungen/plan', authMiddleware, subscriptionMiddleware, async (req, res) => {
  try {
    await pool.query('DELETE FROM schule_pruefungen_plans WHERE userId = ?', [req.user.id])
    res.json({ ok: true })
  } catch (err) {
    console.error('Delete plan error:', err)
    res.status(500).json({ error: 'Error al eliminar el plan.' })
  }
})

// START a new attempt — returns attempt id and server-side timestamp for fair timing
app.post('/api/pruefungen/attempts', authMiddleware, subscriptionMiddleware, async (req, res) => {
  try {
    const { provider = 'goethe', level, module, examId, mode = 'simulation' } = req.body
    if (!level || !module || !examId) {
      return res.status(400).json({ error: 'Faltan datos.' })
    }
    const [result] = await pool.query(
      `INSERT INTO schule_pruefungen_attempts (userId, provider, level, module, examId, mode)
       VALUES (?, ?, ?, ?, ?, ?)`,
      [req.user.id, provider, level, module, examId, mode]
    )
    res.json({ attemptId: result.insertId, startedAt: new Date().toISOString() })
  } catch (err) {
    console.error('Start attempt error:', err)
    res.status(500).json({ error: 'Error al iniciar el intento.' })
  }
})

// FINISH attempt — saves score, responses, feedback
app.post('/api/pruefungen/attempts/:id/finish', authMiddleware, subscriptionMiddleware, async (req, res) => {
  try {
    const attemptId = parseInt(req.params.id)
    const { score, maxScore, responses, feedback } = req.body
    if (typeof score !== 'number' || typeof maxScore !== 'number' || maxScore <= 0) {
      return res.status(400).json({ error: 'Datos de puntuación inválidos.' })
    }
    // Verify ownership
    const [rows] = await pool.query('SELECT userId, startedAt FROM schule_pruefungen_attempts WHERE id = ? LIMIT 1', [attemptId])
    if (rows.length === 0) return res.status(404).json({ error: 'Intento no encontrado.' })
    if (rows[0].userId !== req.user.id) return res.status(403).json({ error: 'No autorizado.' })

    const durationSec = Math.round((Date.now() - new Date(rows[0].startedAt).getTime()) / 1000)
    const passed = (score / maxScore) >= 0.6 ? 1 : 0 // Goethe: 60% to pass

    await pool.query(
      `UPDATE schule_pruefungen_attempts
       SET finishedAt = NOW(), score = ?, maxScore = ?, passed = ?, durationSeconds = ?, responses = ?, feedback = ?
       WHERE id = ?`,
      [score, maxScore, passed, durationSec, JSON.stringify(responses || null), JSON.stringify(feedback || null), attemptId]
    )
    res.json({ ok: true, score, maxScore, passed: !!passed, percentage: Math.round((score / maxScore) * 100) })
  } catch (err) {
    console.error('Finish attempt error:', err)
    res.status(500).json({ error: 'Error al finalizar el intento.' })
  }
})

// LIST recent attempts for current user
app.get('/api/pruefungen/attempts', authMiddleware, subscriptionMiddleware, async (req, res) => {
  try {
    const { module, level, limit = 20 } = req.query
    const filters = ['userId = ?']
    const params = [req.user.id]
    if (module) { filters.push('module = ?'); params.push(module) }
    if (level) { filters.push('level = ?'); params.push(level) }
    const lim = Math.min(parseInt(limit) || 20, 100)
    const [rows] = await pool.query(
      `SELECT id, provider, level, module, examId, mode, startedAt, finishedAt, score, maxScore, passed, durationSeconds
       FROM schule_pruefungen_attempts
       WHERE ${filters.join(' AND ')}
       ORDER BY startedAt DESC
       LIMIT ${lim}`,
      params
    )
    res.json({ attempts: rows })
  } catch (err) {
    console.error('List attempts error:', err)
    res.status(500).json({ error: 'Error al obtener los intentos.' })
  }
})

// GRADE Schreiben submission with Claude using Goethe rubric
app.post('/api/pruefungen/grade-schreiben', authMiddleware, subscriptionMiddleware, aiRateLimit, async (req, res) => {
  try {
    if (!ANTHROPIC_API_KEY) return res.status(503).json({ error: 'Servicio de IA no disponible.' })
    const { level, taskType, taskPrompt, submission, minWords } = req.body
    if (!level || !taskPrompt || !submission) {
      return res.status(400).json({ error: 'Faltan datos.' })
    }

    const wordCount = submission.trim().split(/\s+/).filter(Boolean).length
    const userName = req.user.fullName || 'Student'

    const message = `Du bist offizieller Prüfer für das Goethe-Zertifikat ${level}. Bewerte diesen Schreibteil nach der offiziellen Goethe-Bewertungsskala.

AUFGABE (${taskType || 'Schreibaufgabe'}):
${taskPrompt}

MINDESTWORTANZAHL: ${minWords || '?'} | TATSÄCHLICH: ${wordCount} Wörter

EINREICHUNG DES STUDENTEN:
"""
${submission}
"""

Bewerte nach den 4 offiziellen Goethe-Kriterien (jeweils 0-25 Punkte, Gesamt max. 100):
1. Erfüllung der Aufgabe (Inhaltliche Vollständigkeit, Textsortenadäquatheit)
2. Kohärenz (Textaufbau, Verknüpfung der Sätze)
3. Wortschatz (Bandbreite und Korrektheit)
4. Strukturen (Grammatik, Syntax, morphologische Korrektheit)

Antworte AUSSCHLIESSLICH mit gültigem JSON, ohne Markdown-Codeblock:
{
  "scores": {
    "erfuellung": 20,
    "kohaerenz": 18,
    "wortschatz": 15,
    "strukturen": 17
  },
  "total": 70,
  "passed": true,
  "wordCount": ${wordCount},
  "errors": [
    {"original": "exakte Stelle aus dem Text", "correction": "Korrektur", "explanation": "kurze Erklärung", "severity": "low|medium|high"}
  ],
  "strengths": ["Was gut gemacht wurde, in 1-2 Sätzen"],
  "improvements": ["Konkreter Verbesserungsvorschlag"],
  "overall": "Gesamtkommentar (2-3 Sätze, ermutigend aber präzise)"
}

passed = true wenn total >= 60.`

    const text = await callAnthropic([{ role: 'user', content: message }], userName, level, 2500)
    const jsonMatch = text.match(/\{[\s\S]*\}/)
    if (!jsonMatch) return res.status(500).json({ error: 'Error al procesar respuesta de IA.' })
    const result = JSON.parse(jsonMatch[0])
    res.json(result)
  } catch (err) {
    console.error('Grade Schreiben error:', err.message)
    res.status(500).json({ error: 'Error al evaluar el escrito.' })
  }
})

// ─── STRIPE: WEBHOOK ─────────────────────────────────
// IMPORTANT: This must use raw body, not JSON parsed
app.post('/api/stripe/webhook', express.raw({ type: 'application/json' }), async (req, res) => {
  if (!stripe || !STRIPE_WEBHOOK_SECRET) return res.status(400).send('Webhook not configured')

  let event
  try {
    event = stripe.webhooks.constructEvent(req.body, req.headers['stripe-signature'], STRIPE_WEBHOOK_SECRET)
  } catch (err) {
    console.error('Webhook signature verification failed:', err.message)
    return res.status(400).send(`Webhook Error: ${err.message}`)
  }

  try {
    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object
        const userId = session.metadata?.userId
        if (userId && session.subscription) {
          await pool.query(
            `UPDATE schule_subscriptions SET subscriptionStatus = 'active', stripeSubscriptionId = ?, stripeCustomerId = ?, updatedAt = NOW() WHERE userId = ?`,
            [session.subscription, session.customer, userId]
          )
        }
        break
      }
      case 'customer.subscription.updated': {
        const subscription = event.data.object
        const userId = subscription.metadata?.userId
        const status = subscription.status // active, past_due, canceled, etc.
        if (userId) {
          const mappedStatus = ['active', 'trialing'].includes(status) ? status
            : status === 'past_due' ? 'past_due'
            : status === 'canceled' ? 'canceled'
            : 'none'
          await pool.query(
            `UPDATE schule_subscriptions SET subscriptionStatus = ?, updatedAt = NOW() WHERE userId = ?`,
            [mappedStatus, userId]
          )
        }
        break
      }
      case 'customer.subscription.deleted': {
        const subscription = event.data.object
        const userId = subscription.metadata?.userId
        if (userId) {
          await pool.query(
            `UPDATE schule_subscriptions SET subscriptionStatus = 'canceled', stripeSubscriptionId = NULL, updatedAt = NOW() WHERE userId = ?`,
            [userId]
          )
        }
        break
      }
      case 'invoice.payment_failed': {
        const invoice = event.data.object
        const subId = invoice.subscription
        if (subId) {
          await pool.query(
            `UPDATE schule_subscriptions SET subscriptionStatus = 'past_due', updatedAt = NOW() WHERE stripeSubscriptionId = ?`,
            [subId]
          )
        }
        break
      }
    }
  } catch (err) {
    console.error('Webhook handler error:', err)
  }

  res.json({ received: true })
})

// ─── SERVE FRONTEND IN PRODUCTION ────────────────────
const distPath = path.join(__dirname, '..', 'dist')
app.use(express.static(distPath))
app.get('/{*splat}', (req, res, next) => {
  if (req.path.startsWith('/api')) return next()
  res.sendFile(path.join(distPath, 'index.html'))
})

const PORT = process.env.PORT || process.env.API_PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
