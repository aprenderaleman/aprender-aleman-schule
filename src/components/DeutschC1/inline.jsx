import React from 'react'

/**
 * Marcado inline mínimo para el contenido de las lecciones C1.
 *
 * El contenido llega del servidor como datos, no como HTML, así que no hay
 * dangerouslySetInnerHTML en ninguna parte del curso. A cambio, los strings
 * admiten cinco marcas para no tener que escribir árboles de nodos a mano:
 *
 *   **texto**   negrita (color de titular)
 *   *texto*     cursiva
 *   ==texto==   resaltado dorado (mark)
 *   ~texto~     texto atenuado (glosa en español, aclaraciones)
 *   __texto__   término alemán destacado dentro de un paso
 *
 * No anidan. Si necesitas algo más rico, añade un tipo de bloque nuevo en
 * C1LessonBody en vez de complicar esto.
 */

const TOKEN = /(\*\*.+?\*\*|__.+?__|==.+?==|~.+?~|\*.+?\*)/g

export function renderInline(text) {
  if (typeof text !== 'string') return text

  return text.split(TOKEN).map((part, i) => {
    if (!part) return null
    if (part.length > 4 && part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i}>{part.slice(2, -2)}</strong>
    }
    if (part.length > 4 && part.startsWith('__') && part.endsWith('__')) {
      return <span className="c1-de" key={i}>{part.slice(2, -2)}</span>
    }
    if (part.length > 4 && part.startsWith('==') && part.endsWith('==')) {
      return <mark key={i}>{part.slice(2, -2)}</mark>
    }
    if (part.length > 2 && part.startsWith('~') && part.endsWith('~')) {
      return <span className="c1-muted" key={i}>{part.slice(1, -1)}</span>
    }
    if (part.length > 2 && part.startsWith('*') && part.endsWith('*')) {
      return <em key={i}>{part.slice(1, -1)}</em>
    }
    return <React.Fragment key={i}>{part}</React.Fragment>
  })
}
