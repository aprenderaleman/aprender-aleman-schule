// ─────────────────────────────────────────────────────────────────────
// Migra desde Supabase (PostgreSQL) → MySQL (Hetzner VPS)
//
// Mapeo basado en el schema real de aprender-aleman.de en Supabase:
//   public.users      → users
//   public.students   → students  (solo donde schule_access = true)
//   schule_*          → autocreadas por el backend al iniciar
//
// Uso:
//   1. npm i pg mysql2 bcryptjs
//   2. Setear ambas connection strings:
//      $env:PG_URL="postgresql://postgres:PW@db.<proj>.supabase.co:5432/postgres"
//      $env:MYSQL_URL="mysql://aprenderaleman:PW@77.42.22.34:3307/aprenderaleman"
//   3. (Opcional) DRY_RUN para ver qué haría sin escribir:
//      $env:DRY_RUN="1"
//   4. node scripts/migrate-supabase-to-mysql.mjs
// ─────────────────────────────────────────────────────────────────────

import pg from 'pg'
import mysql from 'mysql2/promise'
import { randomUUID } from 'node:crypto'

const PG_URL    = process.env.PG_URL
const MYSQL_URL = process.env.MYSQL_URL
const DRY_RUN   = process.env.DRY_RUN === '1'

if (!PG_URL || !MYSQL_URL) {
  console.error('Necesito PG_URL y MYSQL_URL como env vars.')
  process.exit(1)
}

// ═══════════════════════════════════════════════════════════════════════
// QUERIES — basadas en el schema real
// ═══════════════════════════════════════════════════════════════════════

// Migrar TODOS los users activos (incluye admins/teachers/students).
// Necesario para que admin UI y SSO funcionen completos.
const Q_USERS = `
  SELECT
    id::text                AS id,
    email,
    password_hash           AS password,
    role::text              AS role,
    full_name               AS fullName,
    active,
    created_at              AS createdAt,
    updated_at              AS updatedAt
  FROM public.users
  WHERE active = true
  ORDER BY created_at
`

// Migrar students solo si tienen schule_access habilitado y user activo.
const Q_STUDENTS = `
  SELECT
    s.id::text              AS id,
    s.user_id::text         AS userId,
    s.current_level::text   AS level,
    s.subscription_type::text AS subscriptionType,
    s.subscription_status::text AS subscriptionStatus,
    s.schule_access         AS schuleAccess,
    s.stripe_customer_id    AS stripeCustomerId,
    s.stripe_subscription_id AS stripeSubscriptionId,
    s.created_at            AS createdAt
  FROM public.students s
  JOIN public.users u ON u.id = s.user_id
  WHERE u.active = true AND s.schule_access = true
`

// ═══════════════════════════════════════════════════════════════════════
// HELPERS DE MAPPING
// ═══════════════════════════════════════════════════════════════════════

function mapUser(r) {
  return {
    id:        r.id,
    fullName:  String(r.fullname || r.full_name || 'Schüler').trim().slice(0, 191),
    email:     String(r.email || '').trim().toLowerCase(),
    password:  r.password,                           // bcrypt hash, copiar tal cual
    role:      r.role || 'student',
    status:    r.active ? 'active' : 'inactive',
    studentId: null,                                 // se setea después en el paso 3
    createdAt: r.createdat || new Date(),
    updatedAt: r.updatedat || new Date(),
  }
}

function mapStudent(r) {
  // Levels en Supabase: 'A0','A1','A2','B1','B2','C1','C2'
  // MySQL espera lowercase: 'a1','a2','b1','b2','c1','c2'
  let level = (r.level || 'A1').toLowerCase()
  if (level === 'a0') level = 'a1'  // A0 no existe en SCHULE — empiezan en A1

  return {
    id:        r.id,
    userId:    r.userid,
    level,
    classType: r.subscriptiontype || 'group',  // 'individual' / 'group' / etc
    stripeCustomerId:     r.stripecustomerid || null,
    stripeSubscriptionId: r.stripesubscriptionid || null,
  }
}

// ═══════════════════════════════════════════════════════════════════════
// EJECUCIÓN
// ═══════════════════════════════════════════════════════════════════════

async function run() {
  console.log(DRY_RUN ? '🟡 DRY RUN — no se escribe nada\n' : '🔴 LIVE MODE — escribiendo en MySQL\n')

  const pgClient = new pg.Client({
    connectionString: PG_URL,
    ssl: { rejectUnauthorized: false },
  })
  await pgClient.connect()
  console.log('✓ Conectado a Supabase')

  const mysqlConn = await mysql.createConnection(MYSQL_URL)
  console.log('✓ Conectado a MySQL\n')

  // ── 1. Leer users de Supabase ──
  console.log('1/5 Leyendo public.users…')
  const { rows: pgUsers } = await pgClient.query(Q_USERS)
  console.log(`   → ${pgUsers.length} users activos\n`)

  // ── 2. Leer students con schule_access ──
  console.log('2/5 Leyendo public.students (schule_access=true)…')
  const { rows: pgStudents } = await pgClient.query(Q_STUDENTS)
  console.log(`   → ${pgStudents.length} students con acceso a SCHULE\n`)

  // ── 3. Mapear schemas ──
  console.log('3/5 Mapeando…')
  const usersMapped    = pgUsers.map(mapUser)
  const studentsMapped = pgStudents.map(mapStudent)

  // Build user→student lookup para el paso final (setear users.studentId)
  const userIdToStudentId = new Map()
  for (const s of studentsMapped) userIdToStudentId.set(s.userId, s.id)

  // Aplicar studentId al user correspondiente
  for (const u of usersMapped) {
    const sid = userIdToStudentId.get(u.id)
    if (sid) u.studentId = sid
  }

  // Detectar duplicados de email
  const emailSeen = new Set()
  const dupEmails = []
  for (const u of usersMapped) {
    if (emailSeen.has(u.email)) dupEmails.push(u.email)
    emailSeen.add(u.email)
  }
  if (dupEmails.length > 0) {
    console.warn(`   ⚠️  ${dupEmails.length} emails duplicados — solo el primero se importa`)
  }

  // Stats por rol
  const byRole = usersMapped.reduce((acc, u) => {
    acc[u.role] = (acc[u.role] || 0) + 1
    return acc
  }, {})
  console.log(`   Users por rol:`, byRole)
  console.log(`   ${studentsMapped.length} students serán importados\n`)

  if (DRY_RUN) {
    console.log('DRY RUN — primeros 3 users (passwords censurados):')
    console.log(JSON.stringify(usersMapped.slice(0, 3).map(u => ({
      ...u,
      password: u.password ? `<${u.password.slice(0, 7)}…>` : null
    })), null, 2))
    console.log('\nDRY RUN — primeros 3 students:')
    console.log(JSON.stringify(studentsMapped.slice(0, 3), null, 2))
    await pgClient.end()
    await mysqlConn.end()
    return
  }

  // ── 4. Insertar en MySQL ──
  console.log('4/5 Insertando en MySQL…')
  await mysqlConn.query('SET FOREIGN_KEY_CHECKS=0')

  // 4a. Users
  let usersInserted = 0
  for (const u of usersMapped) {
    try {
      await mysqlConn.execute(
        `INSERT INTO users (id, fullName, email, password, role, status, studentId, createdAt, updatedAt)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
         ON DUPLICATE KEY UPDATE
           fullName=VALUES(fullName), role=VALUES(role), status=VALUES(status),
           studentId=VALUES(studentId), updatedAt=VALUES(updatedAt)`,
        [u.id, u.fullName, u.email, u.password, u.role, u.status, u.studentId, u.createdAt, u.updatedAt]
      )
      usersInserted++
    } catch (e) {
      console.error(`   ✗ user ${u.email}: ${e.message}`)
    }
  }
  console.log(`   ✓ ${usersInserted}/${usersMapped.length} users`)

  // 4b. Students
  let studentsInserted = 0
  for (const s of studentsMapped) {
    try {
      await mysqlConn.execute(
        `INSERT INTO students (id, level, userId, classType)
         VALUES (?, ?, ?, ?)
         ON DUPLICATE KEY UPDATE level=VALUES(level), classType=VALUES(classType)`,
        [s.id, s.level, s.userId, s.classType]
      )
      studentsInserted++
    } catch (e) {
      console.error(`   ✗ student ${s.id}: ${e.message}`)
    }
  }
  console.log(`   ✓ ${studentsInserted}/${studentsMapped.length} students`)

  await mysqlConn.query('SET FOREIGN_KEY_CHECKS=1')

  // ── 5. Backfill schule_subscriptions + schule_progress ──
  console.log('\n5/5 Creando schule_subscriptions + schule_progress…')
  let subsCreated = 0
  let progressCreated = 0
  for (const u of usersMapped) {
    if (u.role !== 'student') continue
    try {
      // Subscription: SSO user con acceso completo (los students de la academia
      // pagan por la academia, no por SCHULE específicamente)
      await mysqlConn.execute(
        `INSERT IGNORE INTO schule_subscriptions
           (userId, trialEndsAt, subscriptionStatus, ssoUser, stripeCustomerId, stripeSubscriptionId)
         VALUES (?, DATE_ADD(NOW(), INTERVAL 100 YEAR), 'active', 1, ?, ?)`,
        [
          u.id,
          studentsMapped.find(s => s.userId === u.id)?.stripeCustomerId || null,
          studentsMapped.find(s => s.userId === u.id)?.stripeSubscriptionId || null,
        ]
      )
      subsCreated++
      await mysqlConn.execute(
        `INSERT IGNORE INTO schule_progress (userId) VALUES (?)`,
        [u.id]
      )
      progressCreated++
    } catch (e) {
      console.error(`   ✗ backfill ${u.email}: ${e.message}`)
    }
  }
  console.log(`   ✓ ${subsCreated} schule_subscriptions, ${progressCreated} schule_progress`)

  console.log('\n✓ Migración completa.\n')
  console.log('Resumen:')
  console.log(`  - Users:                  ${usersInserted}`)
  console.log(`    └─ por rol: ${JSON.stringify(byRole)}`)
  console.log(`  - Students (SCHULE):      ${studentsInserted}`)
  console.log(`  - schule_subscriptions:   ${subsCreated}`)
  console.log(`  - schule_progress:        ${progressCreated}`)
  console.log('\nPróximos pasos:')
  console.log('  1. Cambiar DB_HOST/DB_PORT/etc en Coolify api-schule')
  console.log('  2. Restart del backend')
  console.log('  3. Test login: usar email + password de un estudiante migrado')

  await pgClient.end()
  await mysqlConn.end()
}

run().catch(err => {
  console.error('FATAL:', err)
  process.exit(1)
})
