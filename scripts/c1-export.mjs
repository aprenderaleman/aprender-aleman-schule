// Exporta el curso C1 a un único HTML estático y legible.
//
//   node scripts/c1-export.mjs            → docs/deutschc1/Kurs-C1.html (todas las publicadas)
//   node scripts/c1-export.mjs 3 4 10     → docs/deutschc1/Kurs-C1.html (solo esas)
//   node scripts/c1-export.mjs --out x.html 3
//
// Usa los MISMOS componentes React que la app (C1Lesson, C1LessonBody) vía
// renderToStaticMarkup, así lo que se lee en el HTML es exactamente lo que
// se verá publicado. Sirve para dos cosas: revisar el texto del curso entero
// sin abrir la app, y enseñar una lección modelo antes de producir el resto.

import path from 'node:path'
import fs from 'node:fs'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { build } from 'esbuild'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')

let args = process.argv.slice(2)

// --kurs c1|b2 (por defecto c1)
let kurs = 'c1'
const ki = args.indexOf('--kurs')
if (ki !== -1) { kurs = args[ki + 1]; args.splice(ki, 2) }
const KURSE = {
  c1: { dir: 'deutschc1', name: 'Deutsch C1' },
  b2: { dir: 'deutschb2', name: 'Deutsch B2' },
  b1: { dir: 'deutschb1', name: 'Deutsch B1' },
  a2: { dir: 'deutscha2', name: 'Deutsch A2' },
}
if (!KURSE[kurs]) { console.error(`kurs desconocido: ${kurs}`); process.exit(1) }
const K = KURSE[kurs]

let out = path.join(ROOT, 'docs', K.dir, `Kurs-${kurs.toUpperCase()}.html`)
const oi = args.indexOf('--out')
if (oi !== -1) { out = path.resolve(args[oi + 1]); args.splice(oi, 2) }
const onlyIds = args.map(Number).filter(Number.isInteger)

// 1. Bundle de un entry SSR efímero (JSX → JS) con esbuild
const tmp = path.join(ROOT, 'node_modules', '.cache', 'c1-export-entry.mjs')
fs.mkdirSync(path.dirname(tmp), { recursive: true })

await build({
  stdin: {
    contents: `
      import React from 'react'
      import { renderToStaticMarkup } from 'react-dom/server'
      import { MemoryRouter } from 'react-router-dom'
      import C1Lesson from './src/components/DeutschC1/C1Lesson.jsx'
      export function render(lesson, kurs) {
        return renderToStaticMarkup(
          React.createElement(MemoryRouter, null, React.createElement(C1Lesson, { lesson, kurs }))
        )
      }
    `,
    resolveDir: ROOT,
    loader: 'jsx',
  },
  bundle: true,
  platform: 'node',
  format: 'esm',
  jsx: 'automatic',
  outfile: tmp,
  logLevel: 'silent',
  // react/react-dom son CJS con requires dinámicos: que los cargue Node
  external: ['react', 'react-dom', 'react-dom/server', 'react-router-dom'],
})

// react-router avisa de useLayoutEffect en SSR; aquí no hay hidratación, es ruido
const origError = console.error
console.error = (...a) => { if (!String(a[0]).includes('useLayoutEffect')) origError(...a) }

const { render } = await import(pathToFileURL(tmp).href)
const { getCourseIndex, getLesson } = await import(pathToFileURL(path.join(ROOT, 'server', K.dir, 'index.js')).href)

// 2. Qué lecciones exportar
const index = getCourseIndex()
const ids = onlyIds.length ? onlyIds : index.lessons.filter(l => l.ready).map(l => l.id)
const lessons = ids.map(getLesson).filter(Boolean)

// 3. CSS: el del curso + los tokens de tema que normalmente pone index.css
const courseCss = fs.readFileSync(path.join(ROOT, 'src/components/DeutschC1/deutschc1.css'), 'utf8')
const tokens = `
  :root { --background: 250 244 234; --foreground: 34 38 51; --card: 255 251 244;
          --muted: 243 235 222; --muted-foreground: 107 100 88; --border: 230 218 197; }
  * { box-sizing: border-box; } body { margin: 0; }
  .x-toc { max-width: 760px; margin: 0 auto; padding: 48px 40px 0; }
  .x-toc h1 { font-family: var(--c1-serif); font-weight: 500; font-size: 30px; color: var(--c1-heading); margin: 0 0 6px; }
  .x-toc p { color: var(--c1-muted); margin: 0 0 18px; font-size: 14px; }
  .x-toc ol { margin: 0; padding-left: 22px; columns: 2; gap: 32px; font-size: 14.5px; }
  .x-toc a { color: var(--c1-heading); text-decoration: none; } .x-toc a:hover { text-decoration: underline; }
  .x-sep { height: 6px; background: var(--c1-ink); margin: 64px 0 0; }
  .x-wc { font-family: var(--c1-mono); font-size: 11px; color: var(--c1-muted); letter-spacing: .08em; text-transform: uppercase; max-width: 760px; margin: 12px auto 0; padding: 0 40px; }
`

const pad = n => String(n).padStart(2, '0')
const wordCount = html => html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().split(' ').length

const body = lessons.map(l => {
  const html = render(l, { base: `/${K.dir}`, artBase: '/deutschc1', name: K.name })
  return `<div class="x-sep" id="l${l.id}"></div><div class="x-wc">Lektion ${pad(l.id)} · ${wordCount(html)} Wörter</div>${html}`
}).join('\n')

const toc = `<div class="x-toc"><h1>${K.name} — Aprender-Aleman.de</h1>
<p>${lessons.length} von ${index.lessons.length} Lektionen · exportiert zur Durchsicht</p>
<ol>${lessons.map(l => `<li value="${l.id}"><a href="#l${l.id}">${l.titel}</a></li>`).join('')}</ol></div>`

const doc = `<!DOCTYPE html><html lang="de"><head><meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${K.name} — Kurs (Export)</title>
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Newsreader:opsz,wght@6..72,400;6..72,500;6..72,600&family=IBM+Plex+Mono:wght@400;500;600&display=swap">
<style>${tokens}\n${courseCss}</style></head>
<body class="c1">${toc}${body}</body></html>`

fs.mkdirSync(path.dirname(out), { recursive: true })
fs.writeFileSync(out, doc)
console.log(`→ ${path.relative(ROOT, out)}  (${lessons.length} Lektionen: ${ids.join(', ')})`)
