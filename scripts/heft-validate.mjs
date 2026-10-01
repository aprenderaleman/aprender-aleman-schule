// Valida los hefts de un curso: claves, bancos, estructura.
// Uso: node scripts/heft-validate.mjs [a1|a2|b1|b2|c1] [--full]   (por defecto: a1)
//   --full exige las 5 partes (grammatik · lesen · hoeren · schreiben · sprechen).
import fs from 'node:fs'
import { speechSegments } from '../server/realExam.js'
const kurs = (process.argv[2] || 'a1').toLowerCase()
const full = process.argv.includes('--full')
if (!/^(a1|a2|b1|b2|c1)$/.test(kurs)) { console.error('curso inválido: ' + kurs); process.exit(1) }
// La heurística anti-Nebensatz en instrucciones solo aplica a los básicos:
// desde B1 las consignas pueden llevar subordinadas sencillas.
const basico = /^a/.test(kurs)
// Palabras del transcript de Hören por nivel (mín, máx).
const HOER_LEN = { a1: [25, 65], a2: [45, 95], b1: [75, 145], b2: [105, 185], c1: [135, 225] }[kurs]
const HOER_ITEMS = basico ? 3 : 4
const dir = new URL(`../server/deutsch${kurs}/heft/`, import.meta.url)
let problems = 0
let withHoeren = 0, withSprechen = 0
const P = m => { problems++; console.log('⚠ ' + m) }
const ORDER = ['grammatik', 'lesen', 'hoeren', 'schreiben', 'sprechen']
const files = fs.readdirSync(dir).filter(f => /^heft-\d+\.js$/.test(f)).sort()

function checkItems(f, items) {
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
      for (const alt of it.alt || []) {
        const c = String(alt).replace(/[.?!,]/g,'').toLowerCase().split(/\s+/).sort().join('|')
        if (c !== a) P(`${tag}: alt "${alt}" no usa exactamente las mismas palabras`)
      }
    } else if (it.typ === 'zuordnen') {
      for (const li of it.links || []) {
        if (!it.loesung?.[li]) P(`${tag}: "${li}" sin pareja`)
        else if (!(it.rechts||[]).includes(it.loesung[li])) P(`${tag}: pareja de "${li}" no está en rechts`)
      }
    } else P(`${tag}: tipo desconocido`)
  }
}

for (const f of files) {
  const h = (await import(new URL(f, dir))).default
  const teile = h.teile || []
  const typen = teile.map(t => t.typ)
  // Partes obligatorias + orden fijo
  for (const req of ['grammatik', 'lesen', 'schreiben']) if (!typen.includes(req)) P(`${f}: falta la parte ${req}`)
  if (typen.some(t => !ORDER.includes(t))) P(`${f}: parte desconocida (${typen.join(', ')})`)
  if (new Set(typen).size !== typen.length) P(`${f}: partes repetidas`)
  if (typen.join() !== [...typen].sort((a, b) => ORDER.indexOf(a) - ORDER.indexOf(b)).join()) P(`${f}: orden de partes debe ser ${ORDER.join(' · ')}`)
  const by = t => teile.find(x => x.typ === t)
  const g = by('grammatik'), l = by('lesen'), ho = by('hoeren'), s = by('schreiben'), sp = by('sprechen')
  if (full && (!ho || !sp)) P(`${f}: faltan ${[!ho && 'hoeren', !sp && 'sprechen'].filter(Boolean).join(' y ')}`)

  if ((g?.items || []).length < 7) P(`${f}: grammatik con ${(g?.items||[]).length} items (<7)`)
  if ((l?.items || []).length !== 4) P(`${f}: lesen con ${(l?.items||[]).length} items (≠4)`)
  if (l && !l.text) P(`${f}: lesen sin texto`)
  checkItems(f, [...(g?.items || []), ...(l?.items || [])])

  if (s?.variante === 'formular') {
    for (const fe of s.felder || []) if (!fe.erwartet?.length) P(`${f}: campo ${fe.id} sin erwartet`)
  } else if (s?.variante === 'text') {
    if (!s.aufgabe || !s.minWoerter || !s.beispielLoesung) P(`${f}: schreiben-text incompleto`)
  } else if (s) P(`${f}: variante schreiben desconocida`)

  if (ho) {
    withHoeren++
    const tr = String(ho.audio?.transcript || '')
    // Palabras que se OYEN (las etiquetas de hablante no se pronuncian).
    const spoken = speechSegments(tr).map(sg => sg.text).join(' ').trim()
    const n = spoken ? spoken.split(/\s+/).length : 0
    if (!tr) P(`${f}: hoeren sin audio.transcript`)
    else if (n < HOER_LEN[0] || n > HOER_LEN[1]) P(`${f}: transcript de ${n} palabras (rango ${HOER_LEN[0]}-${HOER_LEN[1]})`)
    if (ho.audio?.audioUrl) P(`${f}: hoeren no debe llevar audioUrl (lo pone el servidor)`)
    if (/\b(z\. ?B\.|Dr\.|ca\.|usw\.|bzw\.|d\. ?h\.)/.test(tr)) P(`${f}: transcript con abreviatura (se lee en voz alta)`)
    if (/\([^)]*\)/.test(tr)) P(`${f}: transcript con paréntesis (no se pueden leer)`)
    const its = ho.items || []
    if (its.length !== HOER_ITEMS) P(`${f}: hoeren con ${its.length} items (deben ser ${HOER_ITEMS})`)
    if (its.some(it => it.typ !== 'rf' && it.typ !== 'mc')) P(`${f}: hoeren solo admite items rf y mc`)
    checkItems(f + ' [hoeren]', its)
    const rf = its.filter(it => it.typ === 'rf').map(it => it.loesung)
    if (rf.length >= 3 && (rf.every(Boolean) || rf.every(v => !v))) P(`${f}: hoeren con todas las rf iguales`)
  }
  if (sp) {
    withSprechen++
    if (!sp.aufgabe) P(`${f}: sprechen sin aufgabe`)
    if (!Array.isArray(sp.punkte) || sp.punkte.length < 2 || sp.punkte.length > 4) P(`${f}: sprechen necesita 2-4 punkte`)
    if (!Number.isInteger(sp.maxSekunden) || sp.maxSekunden < 20 || sp.maxSekunden > 180) P(`${f}: sprechen maxSekunden fuera de 20-180`)
    if (!sp.beispielLoesung) P(`${f}: sprechen sin beispielLoesung`)
  }

  // instrucciones con Nebensatz-señales (heurística, solo A1/A2)
  if (basico) for (const t of teile) {
    for (const txt of [t.anweisung, t.typ === 'sprechen' ? t.aufgabe : null]) {
      if (/,\s*(weil|dass|wenn|obwohl|damit)\b/.test(txt || '')) P(`${f}: consigna con Nebensatz: "${(txt||'').slice(0,50)}"`)
    }
  }
}
console.log(`\n${files.length} hefts · con Hören ${withHoeren} · con Sprechen ${withSprechen} · ${problems} problemas`)
