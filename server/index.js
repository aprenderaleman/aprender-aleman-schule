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
// Parse JSON for all routes except Stripe webhook + Sprechen audio upload (need raw body)
app.use((req, res, next) => {
  if (req.originalUrl === '/api/stripe/webhook') return next()
  if (req.originalUrl === '/api/pruefungen/transcribe-sprechen') return next()
  if (req.originalUrl === '/api/chat/transcribe') return next()
  if (req.originalUrl === '/api/ai/transcribe-speaking') return next()
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
const FREE_LESSONS_LIMIT = 30
const FREE_LESSONS_PASS_PCT = 70
// Bonus lessons granted when the user completes the Explorer Challenge (≥1 exercise in each of the 5 skill types)
const EXPLORER_CHALLENGE_ID = 'explorer_challenge'
const EXPLORER_CHALLENGE_BONUS = 10

// Helper: get the list of distinct skill types the user has completed at least one exercise in
async function getExplorerSkills(userId) {
  try {
    const [rows] = await pool.query(
      "SELECT DISTINCT exerciseType FROM schule_exercise_results WHERE userId = ?",
      [userId]
    )
    return rows.map(r => r.exerciseType).filter(Boolean)
  } catch (e) {
    console.error('getExplorerSkills error:', e.message)
    return []
  }
}

// Helper: has the user claimed the Explorer Challenge bonus?
async function hasExplorerBonus(userId) {
  try {
    const [rows] = await pool.query(
      'SELECT 1 FROM schule_achievements WHERE userId = ? AND achievementId = ? LIMIT 1',
      [userId, EXPLORER_CHALLENGE_ID]
    )
    return rows.length > 0
  } catch (e) {
    console.error('hasExplorerBonus error:', e.message)
    return false
  }
}

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
  // Explorer Challenge bonus: +10 free lessons once the user has claimed all 5 skills
  const bonusLessons = (paid || isSso) ? 0 : ((await hasExplorerBonus(userId)) ? EXPLORER_CHALLENGE_BONUS : 0)
  const effectiveLimit = FREE_LESSONS_LIMIT + bonusLessons
  const freeLessonsRemaining = Math.max(0, effectiveLimit - lessonsPassed)
  const freeAccess = !paid && !isSso && lessonsPassed < effectiveLimit

  return {
    status: sub.subscriptionStatus,
    trialEndsAt: sub.trialEndsAt, // legacy, no longer used for gating
    trialActive: freeAccess, // alias so legacy UI keeps working
    paid,
    ssoUser: isSso,
    hasAccess: isSso || paid || freeAccess,
    lessonsPassed,
    freeLessonsLimit: effectiveLimit,
    freeLessonsBaseLimit: FREE_LESSONS_LIMIT,
    freeLessonsBonus: bonusLessons,
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

    // Use transaction with FK checks disabled to handle circular dependency
    // (students.userId → users.id AND users.studentId → students.id)
    const conn = await pool.getConnection()
    await conn.beginTransaction()
    try {
      await conn.query('SET FOREIGN_KEY_CHECKS=0')

      // Create user record
      await conn.query(
        'INSERT INTO users (id, fullName, email, password, role, status, studentId, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
        [userId, fullName.trim(), email.trim().toLowerCase(), hashedPassword, 'student', 'active', studentId, now, now]
      )

      // Create student record
      await conn.query(
        'INSERT INTO students (id, level, userId, classType) VALUES (?, ?, ?, ?)',
        [studentId, 'a1', userId, 'group']
      )

      await conn.query('SET FOREIGN_KEY_CHECKS=1')

      // Create initial progress
      await conn.query(
        'INSERT INTO schule_progress (userId) VALUES (?)',
        [userId]
      )

      // Create subscription with 5-day free trial
      const trialEndsAt2 = new Date(Date.now() + 5 * 24 * 60 * 60 * 1000)
      await conn.query(
        'INSERT INTO schule_subscriptions (userId, trialEndsAt, subscriptionStatus, ssoUser) VALUES (?, ?, ?, ?)',
        [userId, trialEndsAt2, 'trialing', 0]
      )

      await conn.commit()
      conn.release()
    } catch (txErr) {
      await conn.rollback()
      conn.release()
      throw txErr
    }

    const trialEndsAt = new Date(Date.now() + 5 * 24 * 60 * 60 * 1000)

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
        speaking: p.skillSpeaking || 0,
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
    const skillCol = { grammar: 'skillGrammar', reading: 'skillReading', listening: 'skillListening', writing: 'skillWriting', speaking: 'skillSpeaking' }[exerciseType] || 'skillGrammar'

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

// ─── EXPLORER CHALLENGE: STATUS ──────────────────────
// Returns which of the 5 skill types the user has tried, whether the challenge
// is completed, and whether the +10 lesson bonus has already been claimed.
const EXPLORER_SKILLS = ['grammar', 'reading', 'listening', 'writing', 'speaking']

app.get('/api/explorer-challenge', authMiddleware, async (req, res) => {
  try {
    const userId = req.user.id
    const done = await getExplorerSkills(userId)
    const skillsDone = EXPLORER_SKILLS.filter(s => done.includes(s))
    const completed = skillsDone.length >= EXPLORER_SKILLS.length
    const claimed = await hasExplorerBonus(userId)
    res.json({
      skills: EXPLORER_SKILLS,
      skillsDone,
      completed,
      claimed,
      bonus: EXPLORER_CHALLENGE_BONUS,
    })
  } catch (err) {
    console.error('Explorer challenge status error:', err)
    res.status(500).json({ error: 'Error al obtener el reto explorador.' })
  }
})

// ─── EXPLORER CHALLENGE: CLAIM BONUS ─────────────────
// Awards +10 free lessons once the user has completed ≥1 exercise in each
// of the 5 skill types. Tracked via the schule_achievements table.
app.post('/api/explorer-challenge/claim', authMiddleware, async (req, res) => {
  try {
    const userId = req.user.id
    const alreadyClaimed = await hasExplorerBonus(userId)
    if (alreadyClaimed) {
      return res.json({ ok: true, alreadyClaimed: true, bonus: EXPLORER_CHALLENGE_BONUS })
    }
    const done = await getExplorerSkills(userId)
    const missing = EXPLORER_SKILLS.filter(s => !done.includes(s))
    if (missing.length > 0) {
      return res.status(400).json({ error: 'Challenge noch nicht abgeschlossen.', missing })
    }
    await pool.query(
      'INSERT IGNORE INTO schule_achievements (userId, achievementId) VALUES (?, ?)',
      [userId, EXPLORER_CHALLENGE_ID]
    )
    res.json({ ok: true, alreadyClaimed: false, bonus: EXPLORER_CHALLENGE_BONUS })
  } catch (err) {
    console.error('Explorer challenge claim error:', err)
    res.status(500).json({ error: 'Error al reclamar bonificación.' })
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
          speaking: prog.skillSpeaking || 0,
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

// ─── AUTO-CREATE FINANCIAL TRACKING TABLES ──────────
;(async () => {
  try {
    // Ads agent logs
    await pool.query(`
      CREATE TABLE IF NOT EXISTS schule_ads_agent_logs (
        id INT AUTO_INCREMENT PRIMARY KEY,
        timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
        status ENUM('success','error') DEFAULT 'success',
        summary TEXT,
        changes JSON,
        recommendations JSON,
        metrics JSON,
        INDEX idx_timestamp (timestamp)
      )
    `)
    // Monthly financial snapshots for tracking
    await pool.query(`
      CREATE TABLE IF NOT EXISTS schule_financial_snapshots (
        id INT AUTO_INCREMENT PRIMARY KEY,
        month VARCHAR(7) NOT NULL,
        revenue DECIMAL(10,2) DEFAULT 0,
        adSpend DECIMAL(10,2) DEFAULT 0,
        activeSubscribers INT DEFAULT 0,
        newSubscribers INT DEFAULT 0,
        canceled INT DEFAULT 0,
        trialUsers INT DEFAULT 0,
        conversions INT DEFAULT 0,
        impressions INT DEFAULT 0,
        clicks INT DEFAULT 0,
        cpa DECIMAL(10,2) DEFAULT 0,
        ctr DECIMAL(5,3) DEFAULT 0,
        createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
        updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        UNIQUE INDEX idx_month (month)
      )
    `)
    // Uploaded Google Ads CSV reports
    await pool.query(`
      CREATE TABLE IF NOT EXISTS schule_ads_reports (
        id INT AUTO_INCREMENT PRIMARY KEY,
        uploadedAt DATETIME DEFAULT CURRENT_TIMESTAMP,
        reportDate VARCHAR(10),
        campaignName VARCHAR(255),
        adGroupName VARCHAR(255),
        keyword VARCHAR(255),
        matchType VARCHAR(50),
        impressions INT DEFAULT 0,
        clicks INT DEFAULT 0,
        costMicros BIGINT DEFAULT 0,
        conversions DECIMAL(10,2) DEFAULT 0,
        conversionValue DECIMAL(10,2) DEFAULT 0,
        ctr DECIMAL(8,4) DEFAULT 0,
        avgCpc DECIMAL(10,2) DEFAULT 0,
        rawRow JSON,
        INDEX idx_date (reportDate),
        INDEX idx_campaign (campaignName)
      )
    `)
    console.log('Financial tracking tables ready')
  } catch (err) {
    console.error('Financial tables error:', err.message)
  }
})()

// ─── CSV PARSER HELPER ──────────────────────────────
function parseGoogleAdsCsv(csvText) {
  const lines = csvText.trim().split(/\r?\n/)
  if (lines.length < 2) return []
  // Skip summary rows at top (Google Ads exports sometimes have them)
  let headerIdx = 0
  for (let i = 0; i < lines.length; i++) {
    // Find the header row: typically contains "Campaign" or "Day" or "Date"
    if (/campaign|Campaign|Kampagne|Date|Day|Tag|Datum/i.test(lines[i]) && lines[i].includes(',')) {
      headerIdx = i
      break
    }
  }
  const headers = lines[headerIdx].split(',').map(h => h.trim().replace(/^"|"$/g, ''))
  const rows = []
  for (let i = headerIdx + 1; i < lines.length; i++) {
    const line = lines[i].trim()
    if (!line || line.startsWith('Total') || line.startsWith('Gesamt')) continue
    // Simple CSV split (handles quoted values with commas)
    const values = []
    let current = '', inQuotes = false
    for (const ch of line) {
      if (ch === '"') { inQuotes = !inQuotes; continue }
      if (ch === ',' && !inQuotes) { values.push(current.trim()); current = ''; continue }
      current += ch
    }
    values.push(current.trim())
    if (values.length < headers.length) continue
    const obj = {}
    headers.forEach((h, idx) => { obj[h] = values[idx] || '' })
    rows.push(obj)
  }
  return rows
}

function normalizeAdsRow(row) {
  // Map common Google Ads CSV column names (EN/DE) to our schema
  const find = (keys) => {
    for (const k of keys) {
      const match = Object.keys(row).find(h => h.toLowerCase().replace(/[^a-z]/g, '') === k.toLowerCase().replace(/[^a-z]/g, ''))
      if (match) return row[match]
    }
    return ''
  }
  const cost = find(['Cost', 'Kosten', 'cost']) || '0'
  const costNum = parseFloat(cost.replace(/[^0-9.,\-]/g, '').replace(',', '.')) || 0
  return {
    reportDate: find(['Day', 'Date', 'Tag', 'Datum', 'day', 'date']) || '',
    campaignName: find(['Campaign', 'Kampagne', 'campaignname', 'CampaignName']) || '',
    adGroupName: find(['AdGroup', 'Adgroup', 'AdGroupName', 'Anzeigengruppe', 'adgroup']) || '',
    keyword: find(['Keyword', 'SearchTerm', 'Suchbegriff', 'keyword']) || '',
    matchType: find(['MatchType', 'Matchtype', 'Keyword match type', 'Übereinstimmungstyp']) || '',
    impressions: parseInt(String(find(['Impressions', 'Impr', 'Impressionen', 'impressions'])).replace(/[^0-9]/g, '')) || 0,
    clicks: parseInt(String(find(['Clicks', 'Klicks', 'clicks'])).replace(/[^0-9]/g, '')) || 0,
    costMicros: Math.round(costNum * 1_000_000),
    conversions: parseFloat(String(find(['Conversions', 'Conv', 'Konversionen', 'conversions'])).replace(/[^0-9.,]/g, '').replace(',', '.')) || 0,
    conversionValue: parseFloat(String(find(['ConversionValue', 'Conv.value', 'Conversionvalue', 'Konversionswert'])).replace(/[^0-9.,]/g, '').replace(',', '.')) || 0,
    ctr: parseFloat(String(find(['CTR', 'ctr'])).replace(/[^0-9.,]/g, '').replace(',', '.')) || 0,
    avgCpc: parseFloat(String(find(['AvgCPC', 'Avg.CPC', 'CPC', 'avgcpc', 'DurchschnCPC'])).replace(/[^0-9.,]/g, '').replace(',', '.')) || 0,
  }
}

// ─── AI PROXY ────────────────────────────────────────
const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY
const OPENAI_API_KEY = process.env.OPENAI_API_KEY

function getSystemPrompt(userName, userLevel) {
  return `Du bist ein Deutschlehrer für spanischsprachige Studenten. Der Student heißt ${userName} und hat das Niveau ${userLevel}.

WICHTIGE SPRACHREGELN:
- Schreibe 95% auf Deutsch (Feedback, Kommentare, Erklärungen, Ermutigung)
- Nur 5% auf Spanisch: kurze Übersetzungen von schwierigen Grammatikbegriffen in Klammern
- Sei ermutigend, klar und pädagogisch präzise
- Sprich den Studenten immer mit seinem Namen an: ${userName}
- Passe die Sprache dem Niveau ${userLevel} an — einfaches Deutsch für A1/A2, komplexeres für B1/B2/C1`
}

async function callAnthropicRaw(model, system, messages, maxTokens = 1024) {
  if (!ANTHROPIC_API_KEY) throw new Error('ANTHROPIC_API_KEY not configured')

  const maxRetries = 3
  for (let attempt = 0; attempt < maxRetries; attempt++) {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'x-api-key': ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01',
        'content-type': 'application/json',
      },
      body: JSON.stringify({ model, max_tokens: maxTokens, system, messages }),
    })

    if (response.ok) {
      const data = await response.json()
      return data.content[0].text
    }

    // Retry on 529 (overloaded) or 500
    if ((response.status === 529 || response.status === 500) && attempt < maxRetries - 1) {
      const wait = (attempt + 1) * 2000
      console.log(`Anthropic ${response.status}, retrying in ${wait}ms (attempt ${attempt + 1}/${maxRetries})`)
      await new Promise(r => setTimeout(r, wait))
      continue
    }

    const err = await response.text()
    throw new Error(`Anthropic API error ${response.status}: ${err}`)
  }
}

async function callAnthropic(messages, userName, userLevel, maxTokens = 1024) {
  return callAnthropicRaw('claude-sonnet-4-20250514', getSystemPrompt(userName, userLevel), messages, maxTokens)
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

// ─── SPEAKING EXERCISE: TRANSCRIBE ──────────────────
app.post(
  '/api/ai/transcribe-speaking',
  express.raw({ type: ['audio/*', 'application/octet-stream'], limit: '15mb' }),
  authMiddleware,
  subscriptionMiddleware,
  aiRateLimit,
  async (req, res) => {
    try {
      if (!OPENAI_API_KEY) return res.status(503).json({ error: 'Transkriptionsdienst nicht verfügbar.' })
      if (!Buffer.isBuffer(req.body) || req.body.length === 0) {
        return res.status(400).json({ error: 'Leere Audiodatei.' })
      }

      const contentType = req.headers['content-type'] || 'audio/webm'
      const ext = contentType.includes('mp3') ? 'mp3'
        : contentType.includes('wav') ? 'wav'
        : contentType.includes('ogg') ? 'ogg'
        : contentType.includes('mp4') || contentType.includes('m4a') ? 'm4a'
        : 'webm'

      const formData = new FormData()
      formData.append('file', new Blob([req.body], { type: contentType }), `speaking.${ext}`)
      formData.append('model', 'whisper-1')
      formData.append('language', 'de')
      formData.append('response_format', 'json')

      const r = await fetch('https://api.openai.com/v1/audio/transcriptions', {
        method: 'POST',
        headers: { Authorization: `Bearer ${OPENAI_API_KEY}` },
        body: formData,
      })

      if (!r.ok) {
        const errText = await r.text()
        console.error('Whisper speaking error:', r.status, errText)
        return res.status(502).json({ error: 'Transkriptionsfehler.' })
      }
      const data = await r.json()
      res.json({ transcript: data.text || '' })
    } catch (err) {
      console.error('Transcribe speaking error:', err.message)
      res.status(500).json({ error: 'Fehler bei der Transkription.' })
    }
  }
)

// ─── SPEAKING EXERCISE: EVALUATE ────────────────────
app.post('/api/ai/evaluate-speaking', authMiddleware, subscriptionMiddleware, aiRateLimit, async (req, res) => {
  try {
    if (!OPENAI_API_KEY) return res.status(503).json({ error: 'KI-Dienst nicht verfügbar.' })
    const { prompt: taskPrompt, transcript, level, durationSeconds } = req.body
    if (!taskPrompt || !transcript) {
      return res.status(400).json({ error: 'Fehlende Daten.' })
    }

    const wordCount = String(transcript).trim().split(/\s+/).filter(Boolean).length
    const userName = req.user.fullName || req.user.name || 'Student'

    const systemPrompt = `Du bist ein erfahrener Deutschlehrer, der mündliche Antworten von Schülern bewertet. Du arbeitest mit einem automatischen Transkript (Whisper) — du kannst Aussprache nicht direkt hören. Bewerte Inhalt, Wortschatz, Grammatik und Kohärenz. Sei ermutigend aber ehrlich. Antworte NUR mit gültigem JSON.`

    const userMessage = `Bewerte diese mündliche Antwort von ${userName} (Niveau ${level || 'A1'}).

AUFGABE: ${taskPrompt}

DAUER: ${durationSeconds || '?'} Sekunden | WÖRTER: ${wordCount}

TRANSKRIPT:
"""
${transcript}
"""

Antworte NUR mit gültigem JSON (kein Markdown, kein Codeblock):
{
  "score": 7,
  "grammar_errors": [{"error": "fehlerhafte Stelle", "correction": "Korrektur", "explanation": "kurze Erklärung"}],
  "vocabulary_suggestions": [{"word": "verwendetes Wort", "better_alternative": "bessere Alternative", "reason": "Grund"}],
  "pronunciation_tips": ["Tipp zur Aussprache basierend auf typischen Fehlern im Transkript"],
  "positive_aspects": "Was gut gemacht wurde (1-2 Sätze)",
  "fluency_feedback": "Feedback zum Sprachfluss und zur Kohärenz (1-2 Sätze)",
  "overall_comment": "Ermutigender Gesamtkommentar (1-2 Sätze)"
}
Bewertung von 0-10. Kein Text außerhalb des JSONs.`

    const reply = await callOpenAIChat(systemPrompt, [{ role: 'user', content: userMessage }], 1200)
    const jsonMatch = reply.match(/\{[\s\S]*\}/)
    if (!jsonMatch) return res.status(500).json({ error: 'Fehler bei der KI-Antwort.' })
    const result = JSON.parse(jsonMatch[0])
    res.json(result)
  } catch (err) {
    console.error('Evaluate speaking error:', err.message)
    res.status(500).json({ error: 'Fehler bei der Bewertung.' })
  }
})

// ═══════════════════════════════════════════════════════
// ─── ADMIN: FINANCES DASHBOARD ──────────────────────
// ═══════════════════════════════════════════════════════
app.get('/api/admin/finances', authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const period = req.query.period || '6months'
    const monthsBack = period === '3months' ? 3 : period === '6months' ? 6 : period === '12months' ? 12 : 36

    // ── STRIPE DATA ──
    let stripeData = { mrr: 0, mrrChange: 0, activeSubscribers: 0, trialUsers: 0, totalRevenue: 0, avgRevenuePerUser: 0, churnRate: 0, canceledThisMonth: 0 }
    let recentPayments = []

    // Subscription counts from DB
    const [activeSubs] = await pool.query("SELECT COUNT(*) as n FROM schule_subscriptions WHERE subscriptionStatus = 'active'")
    const [trialSubs] = await pool.query("SELECT COUNT(*) as n FROM schule_subscriptions WHERE subscriptionStatus = 'trialing'")
    const [canceledThisMonth] = await pool.query(
      "SELECT COUNT(*) as n FROM schule_subscriptions WHERE subscriptionStatus = 'canceled' AND updatedAt >= DATE_FORMAT(NOW(), '%Y-%m-01')"
    )
    const [pastDueSubs] = await pool.query("SELECT COUNT(*) as n FROM schule_subscriptions WHERE subscriptionStatus = 'past_due'")
    const [totalPayingEver] = await pool.query(
      "SELECT COUNT(*) as n FROM schule_subscriptions WHERE stripeSubscriptionId IS NOT NULL"
    )

    const activeCount = activeSubs[0].n
    const trialCount = trialSubs[0].n
    const canceledCount = canceledThisMonth[0].n
    const pricePerMonth = 15 // €15/month
    const mrr = activeCount * pricePerMonth

    // Calculate MRR change (compare with last month active count from snapshot)
    const [lastMonthSnap] = await pool.query(
      "SELECT activeSubscribers FROM schule_financial_snapshots WHERE month < DATE_FORMAT(NOW(), '%Y-%m') ORDER BY month DESC LIMIT 1"
    )
    const lastMonthActive = lastMonthSnap[0]?.activeSubscribers || 0
    const mrrChange = lastMonthActive > 0 ? ((activeCount - lastMonthActive) / lastMonthActive) * 100 : 0

    // Churn rate = canceled this month / (active last month + new this month)
    const [newThisMonth] = await pool.query(
      "SELECT COUNT(*) as n FROM schule_subscriptions WHERE subscriptionStatus = 'active' AND updatedAt >= DATE_FORMAT(NOW(), '%Y-%m-01')"
    )
    const churnBase = lastMonthActive + newThisMonth[0].n
    const churnRate = churnBase > 0 ? (canceledCount / churnBase) * 100 : 0

    stripeData = {
      mrr,
      mrrChange: parseFloat(mrrChange.toFixed(1)),
      activeSubscribers: activeCount,
      trialUsers: trialCount,
      totalRevenue: 0,
      avgRevenuePerUser: 0,
      churnRate: parseFloat(churnRate.toFixed(1)),
      canceledThisMonth: canceledCount,
    }

    // Fetch real data from Stripe API if configured
    if (stripe) {
      try {
        // Total revenue from Stripe balance transactions
        const charges = await stripe.charges.list({ limit: 100 })
        let totalRev = 0
        recentPayments = charges.data.slice(0, 20).map(c => {
          if (c.status === 'succeeded') totalRev += c.amount
          return {
            date: new Date(c.created * 1000).toISOString(),
            name: c.billing_details?.name || '',
            email: c.billing_details?.email || c.receipt_email || '',
            amount: c.amount,
            status: c.status === 'succeeded' ? 'succeeded' : c.status === 'failed' ? 'failed' : 'pending',
            type: 'Abo',
          }
        })
        stripeData.totalRevenue = totalRev / 100
        stripeData.avgRevenuePerUser = totalPayingEver[0].n > 0 ? (totalRev / 100) / totalPayingEver[0].n : 0
      } catch (stripeErr) {
        console.error('Stripe finance fetch error:', stripeErr.message)
      }
    }

    // ── MONTHLY BREAKDOWN ──
    const [snapshots] = await pool.query(
      "SELECT * FROM schule_financial_snapshots ORDER BY month DESC LIMIT ?",
      [monthsBack]
    )
    const monthly = snapshots.reverse().map(s => ({
      month: s.month,
      revenue: parseFloat(s.revenue) || 0,
      adSpend: parseFloat(s.adSpend) || 0,
      activeSubscribers: s.activeSubscribers || 0,
      newSubscribers: s.newSubscribers || 0,
      canceled: s.canceled || 0,
    }))

    // If no snapshots yet, create current month snapshot
    if (snapshots.length === 0) {
      const currentMonth = new Date().toISOString().slice(0, 7)
      await pool.query(
        `INSERT INTO schule_financial_snapshots (month, revenue, activeSubscribers, newSubscribers, canceled, trialUsers)
         VALUES (?, ?, ?, ?, ?, ?)
         ON DUPLICATE KEY UPDATE revenue=VALUES(revenue), activeSubscribers=VALUES(activeSubscribers), trialUsers=VALUES(trialUsers), updatedAt=NOW()`,
        [currentMonth, stripeData.totalRevenue, activeCount, newThisMonth[0].n, canceledCount, trialCount]
      )
      monthly.push({
        month: currentMonth,
        revenue: stripeData.totalRevenue,
        adSpend: 0,
        activeSubscribers: activeCount,
        newSubscribers: newThisMonth[0].n,
        canceled: canceledCount,
      })
    }

    // ── SUBSCRIPTION STATUS BREAKDOWN ──
    const [statusCounts] = await pool.query(
      "SELECT subscriptionStatus as status, COUNT(*) as count FROM schule_subscriptions GROUP BY subscriptionStatus"
    )
    const statusMap = { active: 'Aktiv', trialing: 'Probezeitraum', past_due: 'Überfällig', canceled: 'Gekündigt', none: 'Keine' }
    const statusBreakdown = statusCounts.map(s => ({ status: statusMap[s.status] || s.status, count: s.count }))

    // ── OVERVIEW CALCULATIONS ──
    const totalRevenue = monthly.reduce((sum, m) => sum + m.revenue, 0) || stripeData.totalRevenue
    const totalAdSpend = monthly.reduce((sum, m) => sum + m.adSpend, 0)
    const netProfit = totalRevenue - totalAdSpend
    const roas = totalAdSpend > 0 ? totalRevenue / totalAdSpend : 0
    const avgLtv = totalPayingEver[0].n > 0 ? totalRevenue / totalPayingEver[0].n : 0

    res.json({
      stripe: stripeData,
      monthly,
      subscriptions: { statusBreakdown },
      overview: {
        totalRevenue,
        totalAdSpend,
        netProfit,
        roas,
        avgLtv,
        payingUsers: totalPayingEver[0].n,
      },
      recentPayments,
    })
  } catch (err) {
    console.error('Admin finances error:', err)
    res.status(500).json({ error: 'Fehler beim Laden der Finanzdaten.' })
  }
})

// ─── ADMIN: UPLOAD ADS CSV REPORT ───────────────────
app.post('/api/admin/ads-report/upload', authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const { csvData } = req.body
    if (!csvData || typeof csvData !== 'string') {
      return res.status(400).json({ error: 'csvData (string) wird benötigt.' })
    }
    const rawRows = parseGoogleAdsCsv(csvData)
    if (rawRows.length === 0) {
      return res.status(400).json({ error: 'Keine gültigen Zeilen in der CSV gefunden. Überprüfe das Format.' })
    }
    const normalized = rawRows.map(r => normalizeAdsRow(r))
    let inserted = 0
    for (const row of normalized) {
      if (!row.reportDate && !row.campaignName) continue
      await pool.query(
        `INSERT INTO schule_ads_reports (reportDate, campaignName, adGroupName, keyword, matchType, impressions, clicks, costMicros, conversions, conversionValue, ctr, avgCpc, rawRow)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [row.reportDate, row.campaignName, row.adGroupName, row.keyword, row.matchType,
         row.impressions, row.clicks, row.costMicros, row.conversions, row.conversionValue,
         row.ctr, row.avgCpc, JSON.stringify(rawRows[inserted] || {})]
      )
      inserted++
    }

    // Update financial snapshots with ad spend data
    const monthsInReport = [...new Set(normalized.filter(r => r.reportDate).map(r => r.reportDate.slice(0, 7)))]
    for (const month of monthsInReport) {
      const monthRows = normalized.filter(r => r.reportDate?.startsWith(month))
      const totalSpend = monthRows.reduce((s, r) => s + r.costMicros, 0) / 1_000_000
      const totalConv = monthRows.reduce((s, r) => s + r.conversions, 0)
      const totalImpr = monthRows.reduce((s, r) => s + r.impressions, 0)
      const totalClicks = monthRows.reduce((s, r) => s + r.clicks, 0)
      const cpa = totalConv > 0 ? totalSpend / totalConv : 0
      const ctr = totalImpr > 0 ? (totalClicks / totalImpr) * 100 : 0
      await pool.query(
        `INSERT INTO schule_financial_snapshots (month, adSpend, conversions, impressions, clicks, cpa, ctr)
         VALUES (?, ?, ?, ?, ?, ?, ?)
         ON DUPLICATE KEY UPDATE adSpend=VALUES(adSpend), conversions=VALUES(conversions),
           impressions=VALUES(impressions), clicks=VALUES(clicks), cpa=VALUES(cpa), ctr=VALUES(ctr), updatedAt=NOW()`,
        [month, totalSpend.toFixed(2), Math.round(totalConv), totalImpr, totalClicks, cpa.toFixed(2), ctr.toFixed(3)]
      )
    }

    res.json({ ok: true, rowsImported: inserted, months: monthsInReport })
  } catch (err) {
    console.error('CSV upload error:', err)
    res.status(500).json({ error: 'Fehler beim Import: ' + err.message })
  }
})

// ─── ADMIN: ADS METRICS (from uploaded CSV data) ────
app.get('/api/admin/ads-metrics', authMiddleware, adminMiddleware, async (req, res) => {
  try {
    // Check if we have any uploaded data
    const [countResult] = await pool.query('SELECT COUNT(*) as n FROM schule_ads_reports')
    const hasData = countResult[0].n > 0

    if (!hasData) {
      return res.json({ hasData: false, currentMonth: {}, dailyMetrics: [], campaigns: [] })
    }

    // Current month metrics
    const today = new Date()
    const currentMonth = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}`

    const [monthlyAgg] = await pool.query(
      `SELECT SUM(costMicros) as totalCost, SUM(impressions) as totalImpr, SUM(clicks) as totalClicks,
              SUM(conversions) as totalConv
       FROM schule_ads_reports WHERE reportDate LIKE ?`, [`${currentMonth}%`]
    )
    const m = monthlyAgg[0] || {}
    const spend = (parseInt(m.totalCost) || 0) / 1_000_000
    const impressions = parseInt(m.totalImpr) || 0
    const clicks = parseInt(m.totalClicks) || 0
    const conversions = parseFloat(m.totalConv) || 0
    const cpa = conversions > 0 ? spend / conversions : 0
    const ctr = impressions > 0 ? (clicks / impressions) * 100 : 0

    // Previous month for comparison
    const prevDate = new Date(today.getFullYear(), today.getMonth() - 1, 1)
    const prevMonth = `${prevDate.getFullYear()}-${String(prevDate.getMonth() + 1).padStart(2, '0')}`
    const [prevAgg] = await pool.query(
      `SELECT SUM(costMicros) as totalCost FROM schule_ads_reports WHERE reportDate LIKE ?`, [`${prevMonth}%`]
    )
    const prevSpend = (parseInt(prevAgg[0]?.totalCost) || 0) / 1_000_000
    const changeVsPrev = prevSpend > 0 ? ((spend - prevSpend) / prevSpend) * 100 : 0

    // Daily metrics (last 30 days)
    const thirtyDaysAgo = new Date(today.getTime() - 30 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10)
    const [dailyRows] = await pool.query(
      `SELECT reportDate as date, SUM(costMicros) as cost, SUM(impressions) as impr, SUM(clicks) as cl, SUM(conversions) as conv
       FROM schule_ads_reports WHERE reportDate >= ? GROUP BY reportDate ORDER BY reportDate`, [thirtyDaysAgo]
    )
    const dailyMetrics = dailyRows.map(d => ({
      date: d.date,
      spend: parseFloat(((parseInt(d.cost) || 0) / 1_000_000).toFixed(2)),
      impressions: parseInt(d.impr) || 0,
      clicks: parseInt(d.cl) || 0,
      conversions: parseFloat(d.conv) || 0,
    }))

    // Campaign breakdown
    const [campaignRows] = await pool.query(
      `SELECT campaignName, SUM(costMicros) as cost, SUM(impressions) as impr, SUM(clicks) as cl, SUM(conversions) as conv
       FROM schule_ads_reports WHERE reportDate LIKE ? GROUP BY campaignName ORDER BY cost DESC`, [`${currentMonth}%`]
    )
    const campaigns = campaignRows.map(c => ({
      name: c.campaignName,
      spend: parseFloat(((parseInt(c.cost) || 0) / 1_000_000).toFixed(2)),
      impressions: parseInt(c.impr) || 0,
      clicks: parseInt(c.cl) || 0,
      conversions: parseFloat(c.conv) || 0,
      cpa: parseFloat(c.conv) > 0 ? parseFloat(((parseInt(c.cost) / 1_000_000) / parseFloat(c.conv)).toFixed(2)) : 0,
    }))

    // Last upload date
    const [lastUpload] = await pool.query('SELECT MAX(uploadedAt) as lastDate FROM schule_ads_reports')

    res.json({
      hasData: true,
      lastUpload: lastUpload[0]?.lastDate || null,
      currentMonth: {
        spend: parseFloat(spend.toFixed(2)),
        impressions, clicks,
        conversions: Math.round(conversions),
        cpa: parseFloat(cpa.toFixed(2)),
        ctr: parseFloat(ctr.toFixed(2)),
        changeVsPrev: parseFloat(changeVsPrev.toFixed(1)),
      },
      dailyMetrics,
      campaigns,
    })
  } catch (err) {
    console.error('Ads metrics error:', err.message)
    res.json({ hasData: false, error: err.message, currentMonth: {}, dailyMetrics: [], campaigns: [] })
  }
})

// ─── ADMIN: ADS AGENT LOGS ──────────────────────────
app.get('/api/admin/ads-agent/logs', authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const [logs] = await pool.query(
      'SELECT * FROM schule_ads_agent_logs ORDER BY timestamp DESC LIMIT 30'
    )
    res.json(logs.map(l => ({
      ...l,
      changes: typeof l.changes === 'string' ? JSON.parse(l.changes) : l.changes,
      recommendations: typeof l.recommendations === 'string' ? JSON.parse(l.recommendations) : l.recommendations,
      metrics: typeof l.metrics === 'string' ? JSON.parse(l.metrics) : l.metrics,
    })))
  } catch (err) {
    console.error('Agent logs error:', err)
    res.json([])
  }
})

// ─── ADMIN: RUN AI AD AGENT (CSV-based, propose only) ─
app.post('/api/admin/ads-agent/run', authMiddleware, adminMiddleware, async (req, res) => {
  try {
    if (!OPENAI_API_KEY) return res.status(503).json({ error: 'OpenAI nicht konfiguriert.' })

    // 1. Gather metrics from uploaded CSV data
    const today = new Date()
    const todayStr = today.toISOString().slice(0, 10)
    const currentMonth = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}`
    const sevenDaysAgo = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10)

    // Monthly totals from uploaded data
    const [monthAgg] = await pool.query(
      `SELECT SUM(costMicros) as cost, SUM(impressions) as impr, SUM(clicks) as cl, SUM(conversions) as conv
       FROM schule_ads_reports WHERE reportDate LIKE ?`, [`${currentMonth}%`]
    )
    const mSpend = (parseInt(monthAgg[0]?.cost) || 0) / 1_000_000
    const mImpr = parseInt(monthAgg[0]?.impr) || 0
    const mClicks = parseInt(monthAgg[0]?.cl) || 0
    const mConv = parseFloat(monthAgg[0]?.conv) || 0

    // Campaign breakdown (last 7 days)
    const [campaignRows] = await pool.query(
      `SELECT campaignName, SUM(costMicros) as cost, SUM(impressions) as impr, SUM(clicks) as cl, SUM(conversions) as conv
       FROM schule_ads_reports WHERE reportDate >= ? GROUP BY campaignName ORDER BY cost DESC`, [sevenDaysAgo]
    )

    // Top keywords (last 7 days)
    const [kwRows] = await pool.query(
      `SELECT keyword, matchType, SUM(costMicros) as cost, SUM(impressions) as impr, SUM(clicks) as cl, SUM(conversions) as conv
       FROM schule_ads_reports WHERE reportDate >= ? AND keyword != '' GROUP BY keyword, matchType ORDER BY cost DESC LIMIT 30`, [sevenDaysAgo]
    )

    // Previous month for comparison
    const prevDate = new Date(today.getFullYear(), today.getMonth() - 1, 1)
    const prevMonth = `${prevDate.getFullYear()}-${String(prevDate.getMonth() + 1).padStart(2, '0')}`
    const [prevAgg] = await pool.query(
      `SELECT SUM(costMicros) as cost, SUM(conversions) as conv FROM schule_ads_reports WHERE reportDate LIKE ?`, [`${prevMonth}%`]
    )
    const prevSpend = (parseInt(prevAgg[0]?.cost) || 0) / 1_000_000
    const prevConv = parseFloat(prevAgg[0]?.conv) || 0

    const metrics = {
      monthlySpend: mSpend.toFixed(2),
      monthlyImpressions: mImpr,
      monthlyClicks: mClicks,
      monthlyConversions: Math.round(mConv),
      monthlyCPA: mConv > 0 ? (mSpend / mConv).toFixed(2) : 'N/A',
      monthlyCTR: mImpr > 0 ? ((mClicks / mImpr) * 100).toFixed(2) + '%' : '0%',
      previousMonth: { spend: prevSpend.toFixed(2), conversions: Math.round(prevConv) },
      campaigns: campaignRows.map(c => ({
        name: c.campaignName,
        spend: ((parseInt(c.cost) || 0) / 1_000_000).toFixed(2),
        impressions: parseInt(c.impr) || 0,
        clicks: parseInt(c.cl) || 0,
        conversions: parseFloat(c.conv) || 0,
        cpa: parseFloat(c.conv) > 0 ? ((parseInt(c.cost) / 1_000_000) / parseFloat(c.conv)).toFixed(2) : 'N/A',
      })),
      topKeywords: kwRows.map(k => ({
        keyword: k.keyword,
        matchType: k.matchType,
        spend: ((parseInt(k.cost) || 0) / 1_000_000).toFixed(2),
        clicks: parseInt(k.cl) || 0,
        conversions: parseFloat(k.conv) || 0,
      })),
    }

    // Platform stats
    const [activeSubs] = await pool.query("SELECT COUNT(*) as n FROM schule_subscriptions WHERE subscriptionStatus = 'active'")
    const [trialSubs] = await pool.query("SELECT COUNT(*) as n FROM schule_subscriptions WHERE subscriptionStatus = 'trialing'")
    metrics.activeSubscribers = activeSubs[0].n
    metrics.trialUsers = trialSubs[0].n
    metrics.pricePerMonth = 15

    // 2. AI Analysis — propose only, no auto-apply
    const systemPrompt = `Du bist ein Google Ads Optimierungs-Agent für "Schule – Aprender Alemán", eine Online-Plattform zum Deutschlernen (Zielgruppe: Spanischsprachige).
Preis: €15/Monat. Ziel: 200 zahlende Nutzer/Monat bei minimalem CPA.

Deine Aufgabe:
1. Analysiere die hochgeladenen Google Ads Metriken (CSV-Daten)
2. Identifiziere Probleme und Chancen
3. SCHLAGE konkrete Änderungen VOR — du kannst KEINE Änderungen direkt durchführen
4. Gib strategische Empfehlungen mit konkreten Zahlen

Antworte NUR mit gültigem JSON:
{
  "summary": "Kurze Zusammenfassung der Analyse (2-3 Sätze auf Deutsch)",
  "proposedChanges": ["Liste konkreter vorgeschlagener Änderungen, die der Admin manuell umsetzen soll"],
  "recommendations": ["Strategische Empfehlungen für die nächste Woche"],
  "budgetSuggestions": [{"campaignName": "...", "currentSpend": 10, "suggestedBudget": 12, "reason": "..."}],
  "keywordSuggestions": [{"action": "pausieren|Gebot erhöhen|Gebot senken|hinzufügen", "keyword": "...", "reason": "..."}]
}`

    const userMessage = `Hier sind die aktuellen Metriken aus dem hochgeladenen CSV-Bericht:\n\n${JSON.stringify(metrics, null, 2)}\n\nAnalysiere die Performance und schlage Optimierungen vor. Du kannst KEINE Änderungen direkt durchführen — schlage sie nur vor.`

    const aiReply = await callOpenAIChat(systemPrompt, [{ role: 'user', content: userMessage }], 2000)
    const jsonMatch = aiReply.match(/\{[\s\S]*\}/)
    let agentResult = { summary: aiReply, proposedChanges: [], recommendations: [] }

    if (jsonMatch) {
      try {
        agentResult = JSON.parse(jsonMatch[0])
      } catch {}
    }

    // 3. Save log (no auto-apply, only proposals)
    const logEntry = {
      status: 'success',
      summary: agentResult.summary || 'Analyse abgeschlossen',
      changes: JSON.stringify(agentResult.proposedChanges || agentResult.changes || []),
      recommendations: JSON.stringify(agentResult.recommendations || []),
      metrics: JSON.stringify(metrics),
    }

    await pool.query(
      'INSERT INTO schule_ads_agent_logs (status, summary, changes, recommendations, metrics) VALUES (?, ?, ?, ?, ?)',
      [logEntry.status, logEntry.summary, logEntry.changes, logEntry.recommendations, logEntry.metrics]
    )

    res.json({
      timestamp: new Date().toISOString(),
      status: 'success',
      summary: agentResult.summary,
      proposedChanges: agentResult.proposedChanges || agentResult.changes || [],
      recommendations: agentResult.recommendations || [],
      budgetSuggestions: agentResult.budgetSuggestions || [],
      keywordSuggestions: agentResult.keywordSuggestions || [],
    })
  } catch (err) {
    console.error('Agent run error:', err)
    try {
      await pool.query(
        'INSERT INTO schule_ads_agent_logs (status, summary) VALUES (?, ?)',
        ['error', `Agent-Fehler: ${err.message}`]
      )
    } catch {}
    res.status(500).json({ error: 'Agent-Fehler: ' + err.message })
  }
})

// ─── ADMIN: UPDATE MONTHLY FINANCIAL SNAPSHOT (cron-friendly) ───
app.post('/api/admin/finances/snapshot', authMiddleware, adminMiddleware, async (req, res) => {
  try {
    const currentMonth = new Date().toISOString().slice(0, 7)
    const [activeSubs] = await pool.query("SELECT COUNT(*) as n FROM schule_subscriptions WHERE subscriptionStatus = 'active'")
    const [trialSubs] = await pool.query("SELECT COUNT(*) as n FROM schule_subscriptions WHERE subscriptionStatus = 'trialing'")
    const [canceledThisMonth] = await pool.query(
      "SELECT COUNT(*) as n FROM schule_subscriptions WHERE subscriptionStatus = 'canceled' AND updatedAt >= DATE_FORMAT(NOW(), '%Y-%m-01')"
    )
    const [newThisMonth] = await pool.query(
      "SELECT COUNT(*) as n FROM schule_subscriptions WHERE subscriptionStatus = 'active' AND updatedAt >= DATE_FORMAT(NOW(), '%Y-%m-01')"
    )

    const revenue = activeSubs[0].n * 15 // €15/month per subscriber

    await pool.query(
      `INSERT INTO schule_financial_snapshots (month, revenue, activeSubscribers, newSubscribers, canceled, trialUsers)
       VALUES (?, ?, ?, ?, ?, ?)
       ON DUPLICATE KEY UPDATE revenue=VALUES(revenue), activeSubscribers=VALUES(activeSubscribers),
         newSubscribers=VALUES(newSubscribers), canceled=VALUES(canceled), trialUsers=VALUES(trialUsers), updatedAt=NOW()`,
      [currentMonth, revenue, activeSubs[0].n, newThisMonth[0].n, canceledThisMonth[0].n, trialSubs[0].n]
    )

    res.json({ ok: true, month: currentMonth })
  } catch (err) {
    console.error('Snapshot error:', err)
    res.status(500).json({ error: err.message })
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

// TRANSCRIBE Sprechen audio with OpenAI Whisper
// Body: raw binary audio (webm/ogg/mp3/wav). Header: Content-Type: audio/<format>
app.post(
  '/api/pruefungen/transcribe-sprechen',
  express.raw({ type: ['audio/*', 'application/octet-stream'], limit: '15mb' }),
  authMiddleware,
  subscriptionMiddleware,
  aiRateLimit,
  async (req, res) => {
    try {
      if (!OPENAI_API_KEY) return res.status(503).json({ error: 'Servicio de transcripción no disponible.' })
      if (!Buffer.isBuffer(req.body) || req.body.length === 0) {
        return res.status(400).json({ error: 'Audio vacío.' })
      }
      if (req.body.length > 15 * 1024 * 1024) {
        return res.status(413).json({ error: 'Audio demasiado grande (máx 15 MB).' })
      }

      const contentType = req.headers['content-type'] || 'audio/webm'
      const ext = contentType.includes('mp3') ? 'mp3'
        : contentType.includes('wav') ? 'wav'
        : contentType.includes('ogg') ? 'ogg'
        : contentType.includes('mp4') || contentType.includes('m4a') ? 'm4a'
        : 'webm'

      const formData = new FormData()
      formData.append('file', new Blob([req.body], { type: contentType }), `recording.${ext}`)
      formData.append('model', 'whisper-1')
      formData.append('language', 'de')
      formData.append('response_format', 'json')

      const r = await fetch('https://api.openai.com/v1/audio/transcriptions', {
        method: 'POST',
        headers: { Authorization: `Bearer ${OPENAI_API_KEY}` },
        body: formData,
      })

      if (!r.ok) {
        const errText = await r.text()
        console.error('Whisper error:', r.status, errText)
        return res.status(502).json({ error: 'Error de transcripción.' })
      }
      const data = await r.json()
      res.json({ transcript: data.text || '' })
    } catch (err) {
      console.error('Transcribe error:', err.message)
      res.status(500).json({ error: 'Error al transcribir el audio.' })
    }
  }
)

// GRADE Sprechen submission (transcript) with Claude using Goethe rubric
app.post('/api/pruefungen/grade-sprechen', authMiddleware, subscriptionMiddleware, aiRateLimit, async (req, res) => {
  try {
    if (!ANTHROPIC_API_KEY) return res.status(503).json({ error: 'Servicio de IA no disponible.' })
    const { level, taskType, taskPrompt, transcript, durationSeconds } = req.body
    if (!level || !taskPrompt || !transcript) {
      return res.status(400).json({ error: 'Faltan datos.' })
    }

    const wordCount = String(transcript).trim().split(/\s+/).filter(Boolean).length
    const userName = req.user.fullName || 'Student'

    const message = `Du bist offizieller Prüfer für das Goethe-Zertifikat ${level} Modul Sprechen. Du bewertest die TRANSKRIPTION einer mündlichen Antwort.

WICHTIG: Du kannst keine Aussprache, Intonation oder Sprechflüssigkeit direkt hören — du arbeitest nur mit dem Transkript. Bewerte deshalb NUR Inhalt, Wortschatz, Strukturen und Kohärenz. Erwähne im Kommentar, dass Aussprache nicht automatisch bewertet werden konnte.

AUFGABE (${taskType || 'Sprechaufgabe'}):
${taskPrompt}

DAUER: ${durationSeconds || '?'} Sekunden | WÖRTER: ${wordCount}

TRANSKRIPT (automatisch erstellt mit Whisper, kann kleine Fehler enthalten):
"""
${transcript}
"""

Bewerte nach 4 Kriterien (jeweils 0-25 Punkte, Gesamt max. 100):
1. Erfüllung der Aufgabe (Wurden alle Punkte angesprochen?)
2. Kohärenz (Logischer Aufbau, Verknüpfungen)
3. Wortschatz (Bandbreite, Angemessenheit)
4. Strukturen (Grammatik soweit aus dem Transkript erkennbar)

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
    {"original": "exakte Stelle aus dem Transkript", "correction": "Korrektur", "explanation": "kurze Erklärung", "severity": "low|medium|high"}
  ],
  "strengths": ["Was gut gemacht wurde"],
  "improvements": ["Konkreter Verbesserungsvorschlag"],
  "overall": "Gesamtkommentar (2-3 Sätze, ermutigend; weise darauf hin, dass Aussprache nicht automatisch bewertet wurde)"
}

passed = true wenn total >= 60.`

    const text = await callAnthropic([{ role: 'user', content: message }], userName, level, 2500)
    const jsonMatch = text.match(/\{[\s\S]*\}/)
    if (!jsonMatch) return res.status(500).json({ error: 'Error al procesar respuesta de IA.' })
    const result = JSON.parse(jsonMatch[0])
    res.json(result)
  } catch (err) {
    console.error('Grade Sprechen error:', err.message)
    res.status(500).json({ error: 'Error al evaluar el oral.' })
  }
})

// ─── CHATBOT (OpenAI GPT-4o-mini) ───────────────────
function getChatSystemPrompt(mode, userName, userLevel) {
  if (mode === 'support') {
    return `Du bist der Support-Assistent von "Schule – Aprender Alemán", einer Plattform zum Deutschlernen.

SPRACHREGELN:
- Antworte IMMER auf Deutsch. Das ist eine Deutsch-Lernplattform.
- Wenn du erkennst, dass der Nutzer eine andere Muttersprache hat (z.B. Spanisch, Englisch, Französisch, Türkisch...), dann füge KURZE Übersetzungen schwieriger Wörter in Klammern in seiner Muttersprache hinzu.
- Für Niveau A1/A2: Verwende einfaches Deutsch mit mehr Übersetzungen.
- Für Niveau B1+: Verwende normales Deutsch mit weniger Übersetzungen.

Der Nutzer heißt ${userName} und hat das Niveau ${userLevel}.

PLATTFORM-INFORMATIONEN:
- Bereiche: Dashboard, Übungen (Grammatik, Lesen, Schreiben, Hören), Karteikarten, Prüfungen (Goethe A1-C2), Fortschritt, Erfolge
- Die Übungen haben 4 Typen: Grammatik, Lesen, Schreiben und Hören
- Die Goethe-Prüfungen simulieren das offizielle Format mit 4 Modulen: Lesen, Hören, Schreiben und Sprechen
- Zum Bestehen braucht man ≥60% in jedem Modul
- Das Abonnement kostet 15€/Monat und beinhaltet unbegrenzten Zugang
- Neue Nutzer haben 5 Tage kostenlose Testphase
- Die ersten 10 Lektionen mit ≥70% sind gratis
- Die Karteikarten nutzen Spaced Repetition zum Vokabellernen
- Der Fortschritt wird automatisch gespeichert
- Die App funktioniert im Browser (Desktop und Mobil)
- Bei schweren technischen Problemen: info@aprender-aleman.de

REGELN:
- Wenn du etwas nicht weißt, sage, dass man info@aprender-aleman.de kontaktieren soll
- Erfinde keine Funktionen, die nicht existieren
- Sei kurz: maximal 3-4 Sätze pro Antwort
- Wenn nach Deutsch-Grammatik/Vokabeln gefragt wird, empfehle den "Deutsch-Tutor"-Modus`
  }
  return `Du bist ein freundlicher und geduldiger Deutschlehrer auf der Plattform "Schule – Aprender Alemán". Deine Schüler kommen aus der ganzen Welt.

Der Schüler heißt ${userName} und hat das Niveau ${userLevel}.

SPRACHREGELN:
- Antworte IMMER auf Deutsch. Du bist ein Deutschlehrer — deine Aufgabe ist es, Deutsch zu lehren.
- Wenn der Schüler in einer anderen Sprache schreibt (z.B. Spanisch, Englisch, Französisch, Türkisch, Arabisch...), erkenne seine Muttersprache und füge KURZE Übersetzungen schwieriger Begriffe in Klammern in seiner Sprache hinzu.
- Für A1/A2: einfaches Deutsch + mehr Übersetzungen in der Muttersprache des Schülers
- Für B1/B2: normales Deutsch + wenige Übersetzungen
- Für C1/C2: fast nur Deutsch, kaum Übersetzungen

REGELN:
- Erkläre Grammatik klar und mit Beispielen
- Korrigiere Fehler freundlich und erkläre warum
- Verwende Tabellen für Konjugationen und Deklinationen wenn nötig
- Gib Übungsbeispiele wenn der Schüler fragt
- Du kannst über alle Themen der deutschen Sprache sprechen: Grammatik, Wortschatz, Aussprache, Kultur, Redewendungen, Prüfungsvorbereitung
- Halte Antworten kompakt: maximal 6-8 Sätze, außer bei Tabellen oder Erklärungen
- Sei ermutigend und motivierend
- Wenn der Schüler technische Fragen zur App stellt, empfehle den Modus "Soporte"`
}

async function callOpenAIChat(systemPrompt, messages, maxTokens = 512) {
  if (!OPENAI_API_KEY) throw new Error('OPENAI_API_KEY not configured')

  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${OPENAI_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'gpt-4o-mini',
      max_tokens: maxTokens,
      messages: [
        { role: 'system', content: systemPrompt },
        ...messages,
      ],
    }),
  })

  if (!response.ok) {
    const err = await response.text()
    throw new Error(`OpenAI API error ${response.status}: ${err}`)
  }

  const data = await response.json()
  return data.choices[0].message.content
}

app.post('/api/chat', authMiddleware, aiRateLimit, async (req, res) => {
  try {
    if (!OPENAI_API_KEY) return res.status(503).json({ error: 'Servicio de IA no disponible.' })

    const { message, mode, history } = req.body
    if (!message) return res.status(400).json({ error: 'Mensaje vacío.' })

    const userName = req.user.fullName || req.user.name || 'Estudiante'
    const userLevel = req.user.level || 'A1'
    const systemPrompt = getChatSystemPrompt(mode, userName, userLevel)

    const chatMessages = []
    if (Array.isArray(history)) {
      for (const msg of history.slice(-18)) {
        if (msg.role === 'user' || msg.role === 'assistant') {
          chatMessages.push({ role: msg.role, content: msg.content })
        }
      }
    }
    if (chatMessages.length === 0 || chatMessages[chatMessages.length - 1].content !== message) {
      chatMessages.push({ role: 'user', content: message })
    }

    const reply = await callOpenAIChat(systemPrompt, chatMessages, 512)
    res.json({ reply })
  } catch (err) {
    console.error('Chat error:', err)
    res.status(500).json({ error: 'Error al procesar el mensaje.' })
  }
})

// ─── CHATBOT: TRANSCRIBE (Whisper) ──────────────────
app.post(
  '/api/chat/transcribe',
  express.raw({ type: ['audio/*', 'application/octet-stream'], limit: '10mb' }),
  authMiddleware,
  aiRateLimit,
  async (req, res) => {
    try {
      if (!OPENAI_API_KEY) return res.status(503).json({ error: 'Servicio no disponible.' })
      if (!Buffer.isBuffer(req.body) || req.body.length === 0) return res.status(400).json({ error: 'Audio vacío.' })

      const contentType = req.headers['content-type'] || 'audio/webm'
      const ext = contentType.includes('mp3') ? 'mp3' : contentType.includes('wav') ? 'wav' : contentType.includes('ogg') ? 'ogg' : 'webm'

      const formData = new FormData()
      formData.append('file', new Blob([req.body], { type: contentType }), `chat.${ext}`)
      formData.append('model', 'whisper-1')
      formData.append('language', 'de')
      formData.append('response_format', 'json')

      const r = await fetch('https://api.openai.com/v1/audio/transcriptions', {
        method: 'POST',
        headers: { Authorization: `Bearer ${OPENAI_API_KEY}` },
        body: formData,
      })
      if (!r.ok) throw new Error(`Whisper ${r.status}`)
      const data = await r.json()
      res.json({ transcript: data.text || '' })
    } catch (err) {
      console.error('Chat transcribe error:', err.message)
      res.status(500).json({ error: 'Error al transcribir.' })
    }
  }
)

// ─── CHATBOT: VOICE (Transcribe → GPT → TTS) ───────
app.post('/api/chat/voice', authMiddleware, aiRateLimit, async (req, res) => {
  try {
    if (!OPENAI_API_KEY) return res.status(503).json({ error: 'Servicio no disponible.' })

    const { message, mode, history, voice } = req.body
    if (!message) return res.status(400).json({ error: 'Mensaje vacío.' })

    const userName = req.user.fullName || req.user.name || 'Estudiante'
    const userLevel = req.user.level || 'A1'

    const systemPrompt = mode === 'support'
      ? `Du bist der Support-Assistent von "Schule". Antworte IMMER auf Deutsch (kurz, 2-3 Sätze). Der Nutzer ist ${userName}, Niveau ${userLevel}. Wenn du seine Muttersprache erkennst, füge kurze Übersetzungen in Klammern hinzu. Themen: Übungen, Abo (15€/Monat, 5 Tage gratis), Goethe-Prüfungen A1-C2, Karteikarten, Fortschritt. Bei Problemen: info@aprender-aleman.de`
      : `Du bist ein freundlicher Deutschlehrer. Der Schüler heißt ${userName}, Niveau ${userLevel}. WICHTIG: Antworte IMMER auf Deutsch, KURZ (2-3 Sätze) — das ist ein Sprachgespräch. Wenn du die Muttersprache des Schülers erkennst, füge kurze Übersetzungen in Klammern hinzu. Für A1/A2: einfaches Deutsch + mehr Übersetzungen. Für B1+: normales Deutsch. Korrigiere Fehler freundlich. Sei natürlich und gesprächig.`

    const chatMessages = []
    if (Array.isArray(history)) {
      for (const msg of history.slice(-14)) {
        if (msg.role === 'user' || msg.role === 'assistant') {
          chatMessages.push({ role: msg.role, content: msg.content })
        }
      }
    }
    if (!chatMessages.length || chatMessages[chatMessages.length - 1].content !== message) {
      chatMessages.push({ role: 'user', content: message })
    }

    const reply = await callOpenAIChat(systemPrompt, chatMessages, 256)

    // Generate TTS with OpenAI
    const ttsVoice = voice || 'onyx'
    const ttsRes = await fetch('https://api.openai.com/v1/audio/speech', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'tts-1',
        input: reply,
        voice: ttsVoice,
        response_format: 'mp3',
        speed: 1.0,
      }),
    })
    if (!ttsRes.ok) {
      // Return text even if TTS fails
      console.error('TTS error:', ttsRes.status)
      return res.json({ reply, audioBase64: null })
    }

    const audioBuffer = Buffer.from(await ttsRes.arrayBuffer())
    const audioBase64 = audioBuffer.toString('base64')

    res.json({ reply, audioBase64 })
  } catch (err) {
    console.error('Voice chat error:', err)
    res.status(500).json({ error: 'Error en la conversación por voz.' })
  }
})

// ─── CHATBOT: TTS ONLY ─────────────────────────────
app.post('/api/chat/tts', authMiddleware, aiRateLimit, async (req, res) => {
  try {
    if (!OPENAI_API_KEY) return res.status(503).json({ error: 'TTS no disponible.' })

    const { text, voice } = req.body
    if (!text) return res.status(400).json({ error: 'Texto vacío.' })

    // Limit to 500 chars to control cost
    const truncated = text.slice(0, 500)

    const ttsRes = await fetch('https://api.openai.com/v1/audio/speech', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'tts-1',
        input: truncated,
        voice: voice || 'onyx',
        response_format: 'mp3',
        speed: 1.0,
      }),
    })
    if (!ttsRes.ok) throw new Error(`TTS ${ttsRes.status}`)

    const audioBuffer = Buffer.from(await ttsRes.arrayBuffer())
    res.json({ audioBase64: audioBuffer.toString('base64') })
  } catch (err) {
    console.error('TTS error:', err)
    res.status(500).json({ error: 'Error al generar audio.' })
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

// ─── AUTO-MIGRATION: Add skillSpeaking column if missing ───
;(async () => {
  try {
    await pool.query("ALTER TABLE schule_progress ADD COLUMN skillSpeaking INT DEFAULT 0")
    console.log('Added skillSpeaking column to schule_progress')
  } catch (err) {
    // Column already exists — ignore
    if (!err.message.includes('Duplicate column')) {
      console.error('Migration warning:', err.message)
    }
  }
})()

const PORT = process.env.PORT || process.env.API_PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
