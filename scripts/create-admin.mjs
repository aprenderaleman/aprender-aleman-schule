// Crea (o actualiza) un superadmin SCHULE en la DB MySQL del VPS.
// Lo corre el usuario directamente; el password de la DB nunca sale de su máquina.
//
// Uso (PowerShell):
//   $env:DB_PASS="<el password de la DB>"
//   node scripts/create-admin.mjs
//
// Uso (Git Bash):
//   DB_PASS="<el password de la DB>" node scripts/create-admin.mjs
//
// Variables opcionales (con defaults):
//   ADMIN_EMAIL    (default: aprenderaleman2026@gmail.com)
//   ADMIN_PASSWORD (default: aprenderaleman)
//   ADMIN_NAME     (default: Super Admin)
//   ADMIN_ROLE     (default: superadmin)
//   DB_HOST        (default: 77.42.22.34)
//   DB_PORT        (default: 3307)
//   DB_USER        (default: aprenderaleman)
//   DB_NAME        (default: aprenderaleman)

import mysql from 'mysql2/promise'
import bcrypt from 'bcryptjs'
import { randomUUID } from 'node:crypto'

const cfg = {
  host:     process.env.DB_HOST     || '77.42.22.34',
  port:     parseInt(process.env.DB_PORT || '3307', 10),
  user:     process.env.DB_USER     || 'aprenderaleman',
  password: process.env.DB_PASS,
  database: process.env.DB_NAME     || 'aprenderaleman',
  connectTimeout: 8000,
}

if (!cfg.password) {
  console.error('❌ Falta DB_PASS — pasalo como env var antes de correr.')
  console.error('   PowerShell:  $env:DB_PASS="..."')
  console.error('   Git Bash:    DB_PASS="..." node scripts/create-admin.mjs')
  process.exit(1)
}

const adminEmail    = (process.env.ADMIN_EMAIL    || 'aprenderaleman2026@gmail.com').toLowerCase()
const adminPassword = process.env.ADMIN_PASSWORD || 'aprenderaleman'
const adminName     = process.env.ADMIN_NAME     || 'Super Admin'
const adminRole     = process.env.ADMIN_ROLE     || 'superadmin'

async function main() {
  console.log(`Conectando a ${cfg.host}:${cfg.port}…`)
  const conn = await mysql.createConnection(cfg)
  console.log('✓ Conectado\n')

  // Hash bcrypt cost 10
  const passwordHash = await bcrypt.hash(adminPassword, 10)

  // ¿Ya existe?
  const [existing] = await conn.execute(
    'SELECT id, role, status FROM users WHERE email = ? LIMIT 1',
    [adminEmail]
  )

  if (existing.length === 0) {
    const id = randomUUID()
    await conn.execute(
      `INSERT INTO users
         (id, email, fullName, password, role, status, b2cRole, createdAt, updatedAt)
       VALUES (?, ?, ?, ?, ?, 'active', ?, NOW(), NOW())`,
      [id, adminEmail, adminName, passwordHash, adminRole, adminRole]
    )
    console.log(`✅ Creado:`)
    console.log(`   id:    ${id}`)
    console.log(`   email: ${adminEmail}`)
    console.log(`   role:  ${adminRole}`)
  } else {
    await conn.execute(
      `UPDATE users SET
         fullName = ?,
         password = ?,
         role     = ?,
         status   = 'active',
         b2cRole  = ?,
         updatedAt = NOW()
       WHERE email = ?`,
      [adminName, passwordHash, adminRole, adminRole, adminEmail]
    )
    console.log(`✅ Actualizado (ya existía):`)
    console.log(`   id:    ${existing[0].id}`)
    console.log(`   email: ${adminEmail}`)
    console.log(`   role:  ${adminRole} (antes: ${existing[0].role})`)
    console.log(`   status: active (antes: ${existing[0].status})`)
  }

  // Verificación final
  const [check] = await conn.execute(
    'SELECT id, email, role, status, b2cUserId FROM users WHERE email = ?',
    [adminEmail]
  )
  console.log('\nEstado en DB:')
  console.table(check)

  if (check[0].b2cUserId == null) {
    console.log('\n💡 b2cUserId es NULL → el cron diario no va a tocar esta cuenta.')
    console.log('   Es una cuenta SCHULE-only, exactamente lo que querías.')
  }

  console.log(`\nPróximo paso: ir a https://schule.aprender-aleman.de/login`)
  console.log(`               tipear ${adminEmail}`)
  console.log(`               recibir el magic link y entrar.`)

  await conn.end()
}

main().catch(err => {
  console.error('FATAL:', err.message)
  if (err.code === 'ETIMEDOUT' || err.code === 'ECONNREFUSED') {
    console.error('  → revisá DB_HOST/DB_PORT y que MySQL esté corriendo.')
  }
  if (err.code === 'ER_ACCESS_DENIED_ERROR') {
    console.error('  → el password DB_PASS es incorrecto.')
  }
  if (err.code === 'ER_NO_SUCH_TABLE') {
    console.error('  → la tabla users no existe. Restartá el backend en Coolify para que corra las migraciones.')
  }
  process.exit(1)
})
