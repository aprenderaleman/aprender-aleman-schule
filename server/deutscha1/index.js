// Deutsch B2 — capa de acceso al curso. Misma arquitectura que deutschc1:
// el contenido vive en el servidor y solo sale por la API autenticada.

import { A1_BLOCKS, A1_TITLES, A1_LESSON_COUNT, blockOf } from './blocks.js'
import { CONTENT } from './content/index.js'

export { A1_LESSON_COUNT }

export function getCourseIndex() {
  return {
    blocks: A1_BLOCKS,
    lessons: A1_TITLES.map((titel, i) => {
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

export function getLesson(id) {
  if (!Number.isInteger(id) || id < 1 || id > A1_LESSON_COUNT) return null

  const b = blockOf(id)
  const base = {
    id,
    titel: A1_TITLES[id - 1],
    block: b ? b.n : null,
    blockName: b ? b.name : null,
    blockStart: b ? id === b.range[0] : false,
    prev: id > 1 ? { id: id - 1, titel: A1_TITLES[id - 2] } : null,
    next: id < A1_LESSON_COUNT ? { id: id + 1, titel: A1_TITLES[id] } : null,
  }

  const full = CONTENT[id]
  if (!full) return { ...base, ready: false }

  return { ...base, ready: true, spec: full.spec, h1: full.h1, lead: full.lead, content: full.content }
}
