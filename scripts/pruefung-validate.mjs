// Valida los exámenes del pool «real» contra su simulacro gemelo:
// misma estructura (partes, tipos, nº de ítems, puntos, duración) y claves sanas.
// Uso: node scripts/pruefung-validate.mjs [archivo real-*.js …]  (sin args: todos)
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const DIR = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', 'server', 'pruefungen', 'data')
let problems = 0
const P = m => { problems++; console.log('⚠ ' + m) }

const args = process.argv.slice(2)
const files = (args.length ? args.map(a => path.basename(a)) : fs.readdirSync(DIR).filter(f => /^real-[a-c][12]-\w+\.js$/.test(f))).sort()

const shape = e => (e.parts || []).map(p => ({
  kind: p.kind || 'questions',
  ctx: p.context?.type || null,
  q: (p.questions || []).map(q => q.type === 'matching'
    ? `matching:${Object.keys(q.correct || {}).length}x${q.pointsPerItem || 1}/${(q.targets || []).length}`
    : `${q.type}:${q.points || 1}${q.type === 'multiple-choice' ? '/' + (q.options || []).length : ''}`),
  fields: (p.fields || []).map(f => f.points || 1),
  maxScore: p.maxScore || null,
}))

for (const f of files) {
  const m = f.match(/^real-([a-c][12])-(\w+)\.js$/)
  if (!m) { P(`${f}: nombre inesperado`); continue }
  const [, lvl, mod] = m
  let real, model
  try {
    real = Object.values(await import(pathToFileURL(path.join(DIR, f))))[0]?.[0]
    model = Object.values(await import(pathToFileURL(path.join(DIR, `goethe-${lvl}-${mod}.js`))))[0]?.[0]
  } catch (e) { P(`${f}: no se pudo importar — ${e.message}`); continue }
  if (!real) { P(`${f}: no exporta un array con un examen`); continue }
  const tag = `${f}`
  if (real.id !== `real-${lvl}-${mod}-1`) P(`${tag}: id debe ser real-${lvl}-${mod}-1 (es ${real.id})`)
  if (real.pool !== 'real') P(`${tag}: falta pool: 'real'`)
  if (real.level !== lvl.toUpperCase() || real.module !== mod) P(`${tag}: level/module incorrectos`)
  for (const k of ['durationMinutes', 'maxScore', 'passScore']) if (real[k] !== model[k]) P(`${tag}: ${k} ${real[k]} ≠ modelo ${model[k]}`)
  const a = JSON.stringify(shape(real)), b = JSON.stringify(shape(model))
  if (a !== b) {
    P(`${tag}: estructura distinta al modelo`)
    shape(model).forEach((mp, i) => { const rp = shape(real)[i]; if (JSON.stringify(mp) !== JSON.stringify(rp)) console.log(`    Teil ${i + 1}\n      modelo: ${JSON.stringify(mp)}\n      real:   ${JSON.stringify(rp)}`) })
  }
  const ids = new Set()
  const tf = []
  const mcPos = []
  for (const p of real.parts || []) {
    if (!p.title || !p.instructions) P(`${tag} ${p.id}: falta title/instructions`)
    if (mod === 'hoeren') {
      const partAudio = p.context?.type === 'audio'
      if (partAudio && !p.context.transcript) P(`${tag} ${p.id}: audio de parte sin transcript`)
      if (partAudio && p.context.audioUrl) P(`${tag} ${p.id}: no pongas audioUrl (lo genera el servidor)`)
    }
    for (const q of p.questions || []) {
      if (ids.has(q.id)) P(`${tag}: id repetido ${q.id}`); ids.add(q.id)
      if (!/^r/.test(q.id)) P(`${tag}: el id ${q.id} debe empezar por «r»`)
      if (q.audio) { if (!q.audio.transcript) P(`${tag} ${q.id}: audio sin transcript`); if (q.audio.audioUrl) P(`${tag} ${q.id}: no pongas audioUrl`) }
      if (q.type === 'true-false') { if (typeof q.correct !== 'boolean') P(`${tag} ${q.id}: correct no booleano`); tf.push(q.correct) }
      else if (q.type === 'multiple-choice') {
        const optIds = (q.options || []).map(o => o.id)
        if (!optIds.includes(q.correct)) P(`${tag} ${q.id}: correct «${q.correct}» no está en options`)
        if (new Set((q.options || []).map(o => o.text)).size !== optIds.length) P(`${tag} ${q.id}: opciones duplicadas`)
        mcPos.push(q.correct)
      } else if (q.type === 'matching') {
        const tIds = (q.targets || []).map(t => t.id), iIds = (q.items || []).map(i => i.id)
        for (const [it, tg] of Object.entries(q.correct || {})) {
          if (!iIds.includes(it)) P(`${tag} ${q.id}: correct usa ítem inexistente ${it}`)
          if (!tIds.includes(tg)) P(`${tag} ${q.id}: correct apunta a target inexistente ${tg}`)
        }
        if (iIds.some(i => !(i in (q.correct || {})))) P(`${tag} ${q.id}: ítems sin solución`)
      } else P(`${tag} ${q.id}: tipo desconocido ${q.type}`)
    }
    for (const fd of p.fields || []) if (!Array.isArray(fd.expected) || !fd.expected.length) P(`${tag} ${p.id}/${fd.id}: expected debe ser lista no vacía`)
    if ((p.kind === 'writing-task' || p.kind === 'speaking-task') && !p.taskPrompt) P(`${tag} ${p.id}: falta taskPrompt`)
  }
  if (tf.length >= 4 && (tf.every(Boolean) || tf.every(v => !v))) P(`${tag}: todas las richtig/falsch iguales`)
  if (tf.length >= 6) { const t = tf.filter(Boolean).length / tf.length; if (t < 0.3 || t > 0.7) P(`${tag}: richtig/falsch desequilibrado (${Math.round(t * 100)} % richtig)`) }
  if (mcPos.length >= 6) { const c = {}; mcPos.forEach(x => c[x] = (c[x] || 0) + 1); if (Math.max(...Object.values(c)) / mcPos.length > 0.55) P(`${tag}: la misma letra es correcta en más de la mitad de las MC (${JSON.stringify(c)})`) }
  if (/goethe|telc|testdaf|ösd/i.test(JSON.stringify(real).replace(/"provider":"goethe"/g, ''))) P(`${tag}: menciona una institución prohibida`)
  console.log(`${f}: ${ids.size} preguntas, ${(real.parts || []).length} Teile`)
}
console.log(`\n${files.length} exámenes reales · ${problems} problemas`)
process.exit(problems ? 1 : 0)
