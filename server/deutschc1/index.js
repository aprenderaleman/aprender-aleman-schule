// Deutsch C1 — capa de acceso al curso.
//
// El contenido vive AQUÍ, en el servidor, y nunca en el bundle de Vite:
// este es el único gate real en un SPA. Sin sesión + rol válido no se
// devuelve ni el índice de títulos (ver las rutas /api/deutschc1/* en
// server/index.js).

import { C1_BLOCKS, C1_TITLES, C1_LESSON_COUNT, C1_GESCHICHTEN, blockOf } from './blocks.js'
import { CONTENT } from './content/index.js'

export { C1_LESSON_COUNT }

// Índice del curso: metadatos de las 40 lecciones, sin contenido.
// Alimenta el sidebar y el pager.
export function getCourseIndex() {
  return {
    blocks: [...C1_BLOCKS, { n: 'G', name: 'Geschichten', range: [91, 90 + C1_GESCHICHTEN.length] }],
    lessons: C1_TITLES.map((titel, i) => {
      const id = i + 1
      const b = blockOf(id)
      return {
        id,
        titel,
        block: b ? b.n : null,
        blockName: b ? b.name : null,
        ready: Boolean(CONTENT[id]),
      }
    }).concat(C1_GESCHICHTEN.map(g => ({
      id: g.id,
      titel: g.titel,
      block: 'G',
      blockName: 'Geschichten',
      ready: Boolean(CONTENT[g.id]),
    }))),
  }
}

// Lección completa. Devuelve null si el id está fuera de rango.
// Si la lección aún no tiene contenido, devuelve solo los metadatos con
// ready:false — el cliente pinta el estado "Inhalt in Vorbereitung".
export function getLesson(id) {
  const gi = C1_GESCHICHTEN.findIndex(g => g.id === id)
  if (!Number.isInteger(id) || (gi === -1 && (id < 1 || id > C1_LESSON_COUNT))) return null

  const b = gi === -1 ? blockOf(id) : null
  const base = gi !== -1
    ? {
        id,
        titel: C1_GESCHICHTEN[gi].titel,
        block: 'G',
        blockName: 'Geschichten',
        blockStart: gi === 0,
        prev: gi > 0 ? { id: C1_GESCHICHTEN[gi - 1].id, titel: C1_GESCHICHTEN[gi - 1].titel } : null,
        next: gi < C1_GESCHICHTEN.length - 1 ? { id: C1_GESCHICHTEN[gi + 1].id, titel: C1_GESCHICHTEN[gi + 1].titel } : null,
      }
    : {
        id,
        titel: C1_TITLES[id - 1],
        block: b ? b.n : null,
        blockName: b ? b.name : null,
        // Primera lección de su bloque → el cliente muestra la ilustración de portada
        blockStart: b ? id === b.range[0] : false,
        prev: id > 1 ? { id: id - 1, titel: C1_TITLES[id - 2] } : null,
        next: id < C1_LESSON_COUNT ? { id: id + 1, titel: C1_TITLES[id] } : null,
      }

  const full = CONTENT[id]
  if (!full) return { ...base, ready: false }

  return { ...base, ready: true, spec: full.spec, h1: full.h1, lead: full.lead, content: full.content }
}
