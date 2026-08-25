// Deutsch C1 — capa de acceso al curso.
//
// El contenido vive AQUÍ, en el servidor, y nunca en el bundle de Vite:
// este es el único gate real en un SPA. Sin sesión + rol válido no se
// devuelve ni el índice de títulos (ver las rutas /api/deutschc1/* en
// server/index.js).

import { C1_BLOCKS, C1_TITLES, C1_LESSON_COUNT, blockOf } from './blocks.js'
import { CONTENT } from './content/index.js'

export { C1_LESSON_COUNT }

// Índice del curso: metadatos de las 40 lecciones, sin contenido.
// Alimenta el sidebar y el pager.
export function getCourseIndex() {
  return {
    blocks: C1_BLOCKS,
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
    }),
  }
}

// Lección completa. Devuelve null si el id está fuera de rango.
// Si la lección aún no tiene contenido, devuelve solo los metadatos con
// ready:false — el cliente pinta el estado "Inhalt in Vorbereitung".
export function getLesson(id) {
  if (!Number.isInteger(id) || id < 1 || id > C1_LESSON_COUNT) return null

  const b = blockOf(id)
  const base = {
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
