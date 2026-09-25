// Deutsch B2 — capa de acceso al curso. Misma arquitectura que deutschc1:
// el contenido vive en el servidor y solo sale por la API autenticada.

import { A2_BLOCKS, A2_TITLES, A2_LESSON_COUNT, A2_GESCHICHTEN, blockOf } from './blocks.js'
import { CONTENT } from './content/index.js'
import { hasHeft } from './heft/index.js'

export { A2_LESSON_COUNT }

export function getCourseIndex() {
  return {
    blocks: [...A2_BLOCKS, { n: 'G', name: 'Geschichten', range: [91, 90 + A2_GESCHICHTEN.length] }],
    lessons: A2_TITLES.map((titel, i) => {
      const id = i + 1
      const b = blockOf(id)
      return {
        id,
        titel,
        block: b ? b.n : null,
        blockName: b ? b.name : null,
        ready: Boolean(CONTENT[id]),
        heft: hasHeft(id),
      }
    }).concat(A2_GESCHICHTEN.map(g => ({
      id: g.id,
      titel: g.titel,
      block: 'G',
      blockName: 'Geschichten',
      ready: Boolean(CONTENT[g.id]),
    }))),
  }
}

export function getLesson(id) {
  const gi = A2_GESCHICHTEN.findIndex(g => g.id === id)
  if (!Number.isInteger(id) || (gi === -1 && (id < 1 || id > A2_LESSON_COUNT))) return null

  const b = gi === -1 ? blockOf(id) : null
  const base = gi !== -1
    ? {
        id,
        titel: A2_GESCHICHTEN[gi].titel,
        block: 'G',
        blockName: 'Geschichten',
        blockStart: gi === 0,
        prev: gi > 0 ? { id: A2_GESCHICHTEN[gi - 1].id, titel: A2_GESCHICHTEN[gi - 1].titel } : null,
        next: gi < A2_GESCHICHTEN.length - 1 ? { id: A2_GESCHICHTEN[gi + 1].id, titel: A2_GESCHICHTEN[gi + 1].titel } : null,
      }
    : {
        id,
        titel: A2_TITLES[id - 1],
        block: b ? b.n : null,
        blockName: b ? b.name : null,
        blockStart: b ? id === b.range[0] : false,
        prev: id > 1 ? { id: id - 1, titel: A2_TITLES[id - 2] } : null,
        next: id < A2_LESSON_COUNT ? { id: id + 1, titel: A2_TITLES[id] } : null,
      }

  const full = CONTENT[id]
  if (!full) return { ...base, ready: false }

  return { ...base, heft: hasHeft(id), ready: true, spec: full.spec, h1: full.h1, lead: full.lead, content: full.content }
}
