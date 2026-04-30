// ─────────────────────────────────────────────────────────────────────
// Migra estudiantes desde Supabase (PostgreSQL) → MySQL (Hetzner VPS)
//
// Uso:
//   1. npm i pg mysql2 bcryptjs
//   2. Setear ambas connection strings:
//      $env:PG_URL="postgresql://postgres:PW@db.<proj>.supabase.co:5432/postgres"
//      $env:MYSQL_URL="mysql://aprenderaleman:PW@77.42.22.34:3307/aprenderaleman"
//   3. (Opcional) DRY_RUN=1 para ver qué haría sin escribir:
//      $env:DRY_RUN="1"
//   4. node scripts/migrate-supabase-to-mysql.mjs
//
// IMPORTANTE: Editar la sección MAPPING después de inspeccionar Supabase
// con scripts/inspect-supabase.mjs
// ─────────────────────────────────────────────────────────────────────

import pg from 'pg'
import mysql from 'mysql2/promise'
import bcrypt from 'bcryptjs'
import { randomUUID } from 'node:crypto'

const PG_URL    = process.env.PG_URL
const MYSQL_URL = process.env.MYSQL_URL
const DRY_RUN   = process.env.DRY_RUN === '1'

if (!PG_URL || !MYSQL_URL) {
  console.error('Necesito PG_URL y MYSQL_URL como env vars.')
  process.exit(1)
}

// ═══════════════════════════════════════════════════════════════════════
// MAPPING — EDITAR DESPUÉS DE INSPECCIONAR SUPABASE
// ═══════════════════════════════════════════════════════════════════════
//
// Caso 1: Supabase usa auth.users (built-in auth) + tabla profiles
//   SUPABASE_QUERY abajo tiene que hacer JOIN entre auth.users y profiles
//
// Caso 2: Supabase tiene tabla 'users' custom igual a la actual
//   SUPABASE_QUERY = SELECT id, fullName, email, password, role, status FROM users
//
// Caso 3: Otra estructura — adaptar el SELECT y el rowToUser
//
// El password merece especial atención:
//   - Si Supabase usa auth.users, los passwords están encriptados con un hash
//     que el backend de SCHULE NO sabe leer (bcrypt sí, pero Supabase usa
//     un schema propio). En ese caso vamos a generar un password random y
//     forzar reset por mail al primer login.
//   - Si la tabla users tiene passwords en bcrypt limpio, los copiamos tal cual.
//   - Si están en otro algoritmo, hay que decidir caso por caso.

const SUPABASE_QUERY = `
  -- TODO: ajustar según el schema real de Supabase.
  -- Default: asume tabla 'users' compatible.
  SELECT
    id,
    "fullName" AS full_name,
    email,
    password,
    role,
    status,
    "studentId" AS student_id,
    "createdAt" AS created_at
  FROM users
  WHERE role = 'student' AND status = 'active'
`

// Convierte una fila de Supabase a la estructura que MySQL espera.
// Si el password no es un bcrypt válido, lo reemplaza por un placeholder
// y marca al usuario para reset (campo TODO: agregar columna needsReset?).
function rowToUser(r) {
  const id          = r.id || randomUUID()
  const fullName    = r.full_name || r.fullName || r.name || 'Schüler'
  const email       = String(r.email || '').trim().toLowerCase()
  const role        = r.role || 'student'
  const status      = r.status || 'active'
  const studentId   = r.student_id || r.studentId || null
  const createdAt   = r.created_at ? new Date(r.created_at) : new Date()

  // Si el password parece bcrypt ($2a$ / $2b$ / $2y$) lo conservamos
  let password = r.password || ''
  if (!/^\$2[aby]\$/.test(password)) {
    // Generar un placeholder bcrypt — usuario tendrá que resetear
    const placeholder = bcrypt.hashSync(randomUUID(), 10)
    password = placeholder
  }

  return {
    id,
    fullName: String(fullName).trim().slice(0, 191),
    email,
    password,
    role,
    status,
    studentId,
    createdAt,
    updatedAt: new Date(),
  }
}

// Si la tabla 'students' también está en Supabase, mapeamos también.
// Si no, dejamos studentId=NULL en users y SCHULE crea student record on-demand.
const STUDENTS_QUERY = `
  -- TODO: ajustar
  SELECT id, level, "userId" AS user_id, "classType" AS class_type
  FROM students
`

function rowToStudent(r) {
  return {
    id: r.id || randomUUID(),
    level: (r.level || 'a1').toLowerCase(),
    userId: r.user_id || r.userId,
    classType: r.class_type || r.classType || null,
  }
}

// ═══════════════════════════════════════════════════════════════════════
// EJECUCIÓN
// ═══════════════════════════════════════════════════════════════════════

async function run() {
  console.log(DRY_RUN ? '🟡 DRY RUN — no se escribe nada\n' : '🔴 LIVE MODE — escribiendo en MySQL\n')

  const pgClient = new pg.Client({ connectionString: PG_URL, ssl: { rejectUnauthorized: false } })
  await pgClient.connect()
  console.log('✓ Conectado a Supabase')

  const mysqlConn = await mysql.createConnection(MYSQL_URL)
  console.log('✓ Conectado a MySQL\n')

  // ── 1. Cargar usuarios desde Supabase ──
  console.log('1/4 Leyendo users desde Supabase…')
  const { rows: pgUsers } = await pgClient.query(SUPABASE_QUERY)
  console.log(`   → ${pgUsers.length} users encontrados`)

  // ── 2. Cargar students (si existe la tabla) ──
  let pgStudents = []
  try {
    console.log('2/4 Leyendo students desde Supabase…')
    const r = await pgClient.query(STUDENTS_QUERY)
    pgStudents = r.rows
    console.log(`   → ${pgStudents.length} students encontrados`)
  } catch (e) {
    console.log(`   (omitido: ${e.message})`)
  }

  // ── 3. Mapear a structuras MySQL ──
  console.log('3/4 Mapeando schema…')
  const usersMapped    = pgUsers.map(rowToUser)
  const studentsMapped = pgStudents.map(rowToStudent)

  // Detectar duplicados de email
  const emails = new Set()
  const dups = []
  for (const u of usersMapped) {
    if (emails.has(u.email)) dups.push(u.email)
    emails.add(u.email)
  }
  if (dups.length > 0) {
    console.warn(`   ⚠️  ${dups.length} emails duplicados — se importará solo el primero`)
  }

  if (DRY_RUN) {
    console.log('\nDRY RUN — primeros 3 users mapeados:')
    console.log(JSON.stringify(usersMapped.slice(0, 3).map(u => ({ ...u, password: '<bcrypt>' })), null, 2))
    console.log(`\nTotal a importar: ${usersMapped.length} users + ${studentsMapped.length} students`)
    await pgClient.end()
    await mysqlConn.end()
    return
  }

  // ── 4. Insertar en MySQL (idempotente con INSERT IGNORE) ──
  console.log('4/4 Insertando en MySQL…')

  // Disable FK checks for the bulk insert (orden flexible)
  await mysqlConn.query('SET FOREIGN_KEY_CHECKS=0')

  let usersInserted = 0
  for (const u of usersMapped) {
    try {
      await mysqlConn.execute(
        `INSERT IGNORE INTO users (id, fullName, email, password, role, status, studentId, createdAt, updatedAt)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [u.id, u.fullName, u.email, u.password, u.role, u.status, u.studentId, u.createdAt, u.updatedAt]
      )
      usersInserted++
    } catch (e) {
      console.error(`   ✗ user ${u.email}: ${e.message}`)
    }
  }
  console.log(`   ✓ ${usersInserted}/${usersMapped.length} users insertados`)

  let studentsInserted = 0
  for (const s of studentsMapped) {
    try {
      await mysqlConn.execute(
        `INSERT IGNORE INTO students (id, level, userId, classType) VALUES (?, ?, ?, ?)`,
        [s.id, s.level, s.userId, s.classType]
      )
      studentsInserted++
    } catch (e) {
      console.error(`   ✗ student ${s.id}: ${e.message}`)
    }
  }
  console.log(`   ✓ ${studentsInserted}/${studentsMapped.length} students insertados`)

  await mysqlConn.query('SET FOREIGN_KEY_CHECKS=1')

  // ── 5. Crear schule_progress + schule_subscriptions vacíos para cada student ──
  console.log('\nBackfill schule_progress + schule_subscriptions…')
  for (const u of usersMapped) {
    if (u.role !== 'student' && u.role !== 'schule_student') continue
    try {
      await mysqlConn.execute(
        `INSERT IGNORE INTO schule_progress (userId) VALUES (?)`,
        [u.id]
      )
      await mysqlConn.execute(
        `INSERT IGNORE INTO schule_subscriptions (userId, trialEndsAt, subscriptionStatus, ssoUser)
         VALUES (?, DATE_ADD(NOW(), INTERVAL 100 YEAR), 'active', 1)`,
        [u.id]
      )
    } catch (e) {
      // Las tablas se autocrean al iniciar el backend — si fallan acá, correr backend primero.
    }
  }

  console.log('\n✓ Migración completa.\n')
  console.log('Próximos pasos:')
  console.log('  1. Cambiá DB_HOST/DB_PORT/etc en Coolify api-schule')
  console.log('  2. Restart del backend')
  console.log('  3. Test login con un estudiante de la lista')

  await pgClient.end()
  await mysqlConn.end()
}

run().catch(err => {
  console.error('FATAL:', err)
  process.exit(1)
})
