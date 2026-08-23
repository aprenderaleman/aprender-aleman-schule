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
 *   __texto__   término alemán destacado
 *
 * Las marcas anidan: `__Das Haus **wird gebaut**.__` funciona.
 * Un salto de línea (\n) se convierte en <br>.
 */

const TOKEN = /(\*\*.+?\*\*|__.+?__|==.+?==|~.+?~|\*.+?\*)/g

function renderSegment(text, keyPrefix) {
  return text.split(TOKEN).map((part, i) => {
    if (!part) return null
    const key = `${keyPrefix}-${i}`
    const inner = (open, close) => renderSegment(part.slice(open, close), key)

    if (part.length > 4 && part.startsWith('**') && part.endsWith('**')) {
      return <strong key={key}>{inner(2, -2)}</strong>
    }
    if (part.length > 4 && part.startsWith('__') && part.endsWith('__')) {
      return <span className="c1-de" key={key}>{inner(2, -2)}</span>
    }
    if (part.length > 4 && part.startsWith('==') && part.endsWith('==')) {
      return <mark key={key}>{inner(2, -2)}</mark>
    }
    if (part.length > 2 && part.startsWith('~') && part.endsWith('~')) {
      return <span className="c1-muted" key={key}>{inner(1, -1)}</span>
    }
    if (part.length > 2 && part.startsWith('*') && part.endsWith('*')) {
      return <em key={key}>{inner(1, -1)}</em>
    }
    return <React.Fragment key={key}>{part}</React.Fragment>
  })
}

export function renderInline(text) {
  if (typeof text !== 'string') return text

  const lines = text.split('\n')
  return lines.map((line, i) => (
    <React.Fragment key={`l${i}`}>
      {i > 0 && <br />}
      {renderSegment(line, `l${i}`)}
    </React.Fragment>
  ))
}
