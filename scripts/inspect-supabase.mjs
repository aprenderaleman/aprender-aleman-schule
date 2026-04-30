// ─────────────────────────────────────────────────────────────────────
// Inspecciona el schema de Supabase sin tocar nada.
// Imprime: tablas, columnas, conteos, primeros registros (sin passwords).
//
// Uso:
//   1. npm i pg
//   2. Setear PG_URL como env var ANTES de correr:
//      Windows PowerShell:
//        $env:PG_URL="postgresql://postgres:PASSWORD@db.mtemnkmxajaluocfekbx.supabase.co:5432/postgres"
//      Linux/Mac:
//        export PG_URL="postgresql://postgres:PASSWORD@db.mtemnkmxajaluocfekbx.supabase.co:5432/postgres"
//   3. node scripts/inspect-supabase.mjs
//
// Cómo obtener PG_URL:
//   Supabase Dashboard → Settings → Database → Connection string → "URI"
//   (Usar la "Direct connection" o "Session pooler", NO la transaction pooler)
// ─────────────────────────────────────────────────────────────────────

import pg from 'pg'

const PG_URL = process.env.PG_URL
if (!PG_URL) {
  console.error('❌ Falta PG_URL. Setealo con la connection string de Supabase.')
  console.error('   Supabase Dashboard → Settings → Database → Connection string')
  process.exit(1)
}

const client = new pg.Client({
  connectionString: PG_URL,
  ssl: { rejectUnauthorized: false },
})

const SENSITIVE = ['password', 'pass', 'pwd', 'secret', 'token', 'api_key']
function redact(row) {
  const out = {}
  for (const [k, v] of Object.entries(row)) {
    if (SENSITIVE.some(s => k.toLowerCase().includes(s))) out[k] = '<redacted>'
    else if (typeof v === 'string' && v.length > 80) out[k] = v.slice(0, 80) + '…'
    else out[k] = v
  }
  return out
}

async function run() {
  console.log('Conectando a Supabase…')
  await client.connect()
  console.log('✓ Conectado\n')

  // Listar tablas en el schema public
  const { rows: tables } = await client.query(`
    SELECT table_name
    FROM information_schema.tables
    WHERE table_schema = 'public'
    ORDER BY table_name
  `)
  console.log(`=== Tablas en schema 'public' (${tables.length}) ===`)
  tables.forEach(t => console.log(`  - ${t.table_name}`))
  console.log()

  // Para cada tabla relevante, mostrar columnas + count + sample row
  const candidates = ['users', 'students', 'profiles', 'auth_users', 'estudiantes', 'student', 'usuario']
  const interesting = tables
    .map(t => t.table_name)
    .filter(n => candidates.some(c => n.toLowerCase().includes(c)))

  if (interesting.length === 0) {
    console.log('⚠️  No encontré tablas con nombres de usuario/estudiante.')
    console.log('   Pasale por env var: TABLES="tabla1,tabla2"')
    if (process.env.TABLES) interesting.push(...process.env.TABLES.split(','))
  }

  for (const tbl of interesting) {
    console.log(`\n=== Tabla: ${tbl} ===`)

    // Columnas
    const { rows: cols } = await client.query(`
      SELECT column_name, data_type, is_nullable, column_default
      FROM information_schema.columns
      WHERE table_schema = 'public' AND table_name = $1
      ORDER BY ordinal_position
    `, [tbl])

    console.log('Columnas:')
    cols.forEach(c => {
      const nullable = c.is_nullable === 'YES' ? '?' : ''
      console.log(`  - ${c.column_name}${nullable}: ${c.data_type}${c.column_default ? ` = ${c.column_default}` : ''}`)
    })

    // Conteo
    try {
      const { rows: cnt } = await client.query(`SELECT COUNT(*) AS n FROM "${tbl}"`)
      console.log(`Total filas: ${cnt[0].n}`)
    } catch (e) {
      console.log(`(no se pudo contar: ${e.message})`)
    }

    // Sample row (1 fila, datos sensibles redactados)
    try {
      const { rows: sample } = await client.query(`SELECT * FROM "${tbl}" LIMIT 1`)
      if (sample.length > 0) {
        console.log('Ejemplo de fila:')
        console.log(JSON.stringify(redact(sample[0]), null, 2))
      }
    } catch (e) {
      console.log(`(no se pudo leer ejemplo: ${e.message})`)
    }
  }

  // ¿Existe Supabase auth schema?
  const { rows: authSchema } = await client.query(`
    SELECT 1 FROM information_schema.schemata WHERE schema_name = 'auth'
  `)
  if (authSchema.length > 0) {
    console.log('\n=== Supabase auth schema detectado ===')
    try {
      const { rows: authUsers } = await client.query(`
        SELECT COUNT(*) AS n FROM auth.users
      `)
      console.log(`auth.users → ${authUsers[0].n} filas`)
    } catch (e) {
      console.log(`(no hay permiso para leer auth.users: ${e.message})`)
    }
  }

  await client.end()
  console.log('\n✓ Done.')
}

run().catch(err => {
  console.error('ERROR:', err.message)
  process.exit(1)
})
