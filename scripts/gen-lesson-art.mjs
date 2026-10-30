// Genera src/components/DeutschC1/lessonArtData.json a partir de las imágenes
// de public/kurs-art/<nivel>/ (NN.webp = cabecera, NN-b.webp = dentro de la
// lección). Uso: node scripts/gen-lesson-art.mjs
import fs from 'node:fs'
import path from 'node:path'
import { pathToFileURL } from 'node:url'

const ROOT = path.resolve(import.meta.dirname, '..')
const ART = path.join(ROOT, 'public/kurs-art')

// El tamaño va turnándose por lección, para que no se repita. Las dos primeras
// imágenes de muestra se generaron con otra proporción: se fijan aquí.
const SIZES = ['s', 'l', 'm']   // id % 3
const FIXED = { 'a1/33': 'l', 'b1/12': 'm' }

// La imagen interior va en la primera sección con texto corrido, donde el
// texto puede rodearla.
function midSection(content) {
  const secs = [[]]
  for (const b of content || []) {
    if (b.type === 'rule') secs.push([])
    else secs[secs.length - 1].push(b.type)
  }
  const real = secs.filter(s => s.length > 0)
  const i = real.findIndex((s, n) => n > 0 && (s.includes('prose') || s.includes('steps')))
  return i > 0 ? i : 1
}

const out = {}
let hero = 0, mid = 0
for (const nivel of ['a1', 'a2', 'b1', 'b2', 'c1']) {
  const dir = path.join(ART, nivel)
  for (const f of fs.readdirSync(dir).filter(x => /^\d+\.webp$/.test(x)).sort()) {
    const id = parseInt(f)
    const key = `${nivel}/${id}`
    const size = FIXED[key] || SIZES[id % 3]
    const entry = { hero: `/kurs-art/${nivel}/${f}`, size }
    hero++
    const b = f.replace('.webp', '-b.webp')
    if (fs.existsSync(path.join(dir, b))) {
      const nn = String(id).padStart(2, '0')
      const lesson = (await import(pathToFileURL(path.join(ROOT, `server/deutsch${nivel}/content/lektion-${nn}.js`)))).default
      entry.mid = { src: `/kurs-art/${nivel}/${b}`, sec: midSection(lesson.content), size: size === 's' ? 'm' : 's' }
      mid++
    }
    out[key] = entry
  }
}
fs.writeFileSync(path.join(ROOT, 'src/components/DeutschC1/lessonArtData.json'), JSON.stringify(out, null, 0).replace(/\},/g, '},\n') + '\n')
console.log(`${hero} cabeceras, ${mid} interiores`)
