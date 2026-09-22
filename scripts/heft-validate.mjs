// Valida todos los hefts del A1: claves, bancos, estructura.
import fs from 'node:fs'
const dir = new URL('../server/deutscha1/heft/', import.meta.url)
let problems = 0
const P = m => { problems++; console.log('⚠ ' + m) }
const files = fs.readdirSync(dir).filter(f => /^heft-\d+\.js$/.test(f)).sort()
for (const f of files) {
  const h = (await import(new URL(f, dir))).default
  const id = f.match(/\d+/)[0]
  if (!h.teile || h.teile.length !== 3) P(`${f}: debe tener 3 Teile`)
  const [g, l, s] = h.teile || []
  if (g?.typ !== 'grammatik') P(`${f}: Teil 1 debe ser grammatik`)
  if (l?.typ !== 'lesen') P(`${f}: Teil 2 debe ser lesen`)
  if (s?.typ !== 'schreiben') P(`${f}: Teil 3 debe ser schreiben`)
  const items = [...(g?.items || []), ...(l?.items || [])]
  if ((g?.items || []).length < 7) P(`${f}: grammatik con ${(g?.items||[]).length} items (<7)`)
  if ((l?.items || []).length !== 4) P(`${f}: lesen con ${(l?.items||[]).length} items (≠4)`)
  if (l && !l.text) P(`${f}: lesen sin texto`)
  for (const [i, it] of items.entries()) {
    const tag = `${f} item ${i} (${it.typ})`
    if (it.typ === 'mc' || it.typ === 'korrektur') {
      if (!(Number.isInteger(it.loesung) && it.loesung >= 0 && it.loesung < (it.optionen||[]).length)) P(`${tag}: loesung fuera de optionen`)
      if (new Set(it.optionen).size !== (it.optionen||[]).length) P(`${tag}: opciones duplicadas`)
    } else if (it.typ === 'rf') {
      if (typeof it.loesung !== 'boolean') P(`${tag}: rf sin booleano`)
    } else if (it.typ === 'luecke') {
      const gaps = [...String(it.text).matchAll(/\{(\d+)\}/g)].map(m => m[1])
      for (const n of gaps) if (!it.loesungen?.[n]) P(`${tag}: hueco {${n}} sin solución`)
      for (const [n, w] of Object.entries(it.loesungen || {})) if (!(it.bank||[]).includes(w)) P(`${tag}: solución "${w}" no está en bank`)
    } else if (it.typ === 'satzbau') {
      const a = (it.woerter||[]).map(w=>w.toLowerCase()).sort().join('|')
      const b = String(it.loesung||'').replace(/[.?!,]/g,'').toLowerCase().split(/\s+/).sort().join('|')
      if (a !== b) P(`${tag}: woerter ≠ palabras de loesung`)
    } else if (it.typ === 'zuordnen') {
      for (const li of it.links || []) {
        if (!it.loesung?.[li]) P(`${tag}: "${li}" sin pareja`)
        else if (!(it.rechts||[]).includes(it.loesung[li])) P(`${tag}: pareja de "${li}" no está en rechts`)
      }
    } else P(`${tag}: tipo desconocido`)
  }
  if (s?.variante === 'formular') {
    for (const fe of s.felder || []) if (!fe.erwartet?.length) P(`${f}: campo ${fe.id} sin erwartet`)
  } else if (s?.variante === 'text') {
    if (!s.aufgabe || !s.minWoerter || !s.beispielLoesung) P(`${f}: schreiben-text incompleto`)
  } else P(`${f}: variante schreiben desconocida`)
  // instrucciones con Nebensatz-señales (heurística)
  for (const t of h.teile || []) {
    if (/,\s*(weil|dass|wenn|obwohl|damit)\b/.test(t.anweisung || '')) P(`${f}: anweisung con Nebensatz: "${(t.anweisung||'').slice(0,50)}"`)
  }
}
console.log(`\n${files.length} hefts · ${problems} problemas`)
