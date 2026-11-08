// Cuenta los ejercicios de la ruta por nivel (ids «g-b1-12», «r-a2-3»…) en
// src/data y los guarda en server/exerciseTotals.json, que es lo que usa la
// API para el % de la ruta (el contenedor de la API no lleva src/).
//
//   node scripts/exercise-totals.mjs          → actualiza el JSON
//   node scripts/exercise-totals.mjs --check  → falla si está desfasado
//                                               (se ejecuta antes de cada build)
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const dataDir = path.join(root, 'src/data')
const outFile = path.join(root, 'server/exerciseTotals.json')

const ids = { A1: new Set(), A2: new Set(), B1: new Set(), B2: new Set(), C1: new Set() }
for (const f of fs.readdirSync(dataDir).filter(f => f.endsWith('.js'))) {
  const src = fs.readFileSync(path.join(dataDir, f), 'utf8')
  for (const m of src.matchAll(/id:\s*'([grlws]-(a1|a2|b1|b2|c1)-\d+)'/g)) ids[m[2].toUpperCase()].add(m[1])
}
const totals = Object.fromEntries(Object.entries(ids).map(([l, s]) => [l, s.size]))

if (process.argv.includes('--check')) {
  const saved = fs.existsSync(outFile) ? JSON.parse(fs.readFileSync(outFile, 'utf8')) : {}
  const diff = Object.keys(totals).filter(l => saved[l] !== totals[l])
  if (diff.length) {
    console.error(`✗ server/exerciseTotals.json desfasado (${diff.map(l => `${l}: ${saved[l]} → ${totals[l]}`).join(', ')}).`)
    console.error('  Ejecuta «node scripts/exercise-totals.mjs», haz commit y redeploy de la API.')
    process.exit(1)
  }
  console.log('✓ Totales de la ruta al día:', JSON.stringify(totals))
} else {
  fs.writeFileSync(outFile, JSON.stringify(totals, null, 2) + '\n')
  console.log('Guardado server/exerciseTotals.json:', JSON.stringify(totals))
}
