import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { renderInline } from './inline'

const pad = n => String(n).padStart(2, '0')

/**
 * Renderiza el array `content` de una lección.
 *
 * Cada bloque es un objeto plano que viene del servidor; aquí se elige el
 * componente. Añadir un tipo nuevo = añadir un `case`. Nunca se inyecta HTML.
 */

// Icono fijo por sección. Se decide aquí, centralizado, y no en cada
// lección: así las 40 quedan uniformes y cambiar un icono es una línea.
const SECTION_ICONS = [
  ['lernziele', '🎯'],
  ['kernwortschatz', '📖'],
  ['wortschatz', '📖'],
  ['erklärung', '💡'],
  ['beispiele', '🔍'],
  ['anwendung', '✍️'],
  ['übung', '✍️'],
  ['prüfungsbezug', '🎓'],
  ['prüfungsaufgabe', '🎓'],
  ['zusammenfassung', '📌'],
  ['selbstcheck', '✅'],
  ['ausblick', '➡️'],
]

function iconFor(text) {
  const t = String(text || '').toLowerCase()
  const hit = SECTION_ICONS.find(([k]) => t.startsWith(k))
  return hit ? hit[1] : null
}

function Eyebrow({ children }) {
  if (!children) return null
  const icon = iconFor(children)
  return (
    <p className="c1-eyebrow">
      {icon && <span className="c1-ico" aria-hidden="true">{icon}</span>}
      {children}
    </p>
  )
}

// Título de card con chip de categoría — .cardt / .k del HTML de referencia
function CardTitle({ titel, kicker }) {
  if (!titel && !kicker) return null
  return (
    <h4 className="c1-cardt">
      {kicker && <span className="c1-k">{kicker}</span>}
      {titel}
    </h4>
  )
}

function Prose({ block }) {
  const body = (
    <div className="c1-prose">
      <CardTitle titel={block.titel} kicker={block.kicker} />
      {block.absaetze.map((p, i) => <p key={i}>{renderInline(p)}</p>)}
    </div>
  )
  return (
    <>
      <Eyebrow>{block.eyebrow}</Eyebrow>
      {block.card ? <div className="c1-card">{body}</div> : body}
    </>
  )
}

function Lernziele({ block }) {
  return (
    <>
      <Eyebrow>{block.eyebrow}</Eyebrow>
      <ul className="c1-ziele">
        {block.items.map((it, i) => <li key={i}>{renderInline(it)}</li>)}
      </ul>
    </>
  )
}

// ul.ex — lista de ejemplos con marcador ›, alemán en negrita y glosa gris.
// Siempre dentro de una card; opcionalmente con título y chip de categoría.
function Beispiele({ block }) {
  return (
    <>
      <Eyebrow>{block.eyebrow}</Eyebrow>
      <div className="c1-card">
        <CardTitle titel={block.titel} kicker={block.kicker} />
        <ul className="c1-ex">
          {block.items.map((it, i) => (
            <li key={i}>
              {renderInline(it.text)}
              {it.gl && <> <span className="c1-gl">{renderInline(it.gl)}</span></>}
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

// table.ktable — primera columna en mono dorado, cabecera navy
function Tabelle({ block }) {
  return (
    <>
      <Eyebrow>{block.eyebrow}</Eyebrow>
      <div className="c1-tablewrap">
        <table className="c1-ktable">
          <thead>
            <tr>{block.kopf.map((h, i) => <th key={i}>{h}</th>)}</tr>
          </thead>
          <tbody>
            {block.zeilen.map((row, i) => (
              <tr key={i}>
                {row.map((cell, j) => (
                  <td key={j} className={j === 0 ? 'c1-k' : undefined}>{renderInline(cell)}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {block.hinweis && <p className="c1-ws-hinweis">{renderInline(block.hinweis)}</p>}
    </>
  )
}

// Caja navy: una misma afirmación en varias formas, con etiqueta bajo cada fila
function Vergleich({ block }) {
  return (
    <>
      <Eyebrow>{block.eyebrow}</Eyebrow>
      <div className="c1-vergleich">
        <div className="c1-vt">{block.titel}</div>
        {block.zeilen.map((z, i) => (
          <div className="c1-row" key={i}>
            <b>{renderInline(z.satz)}</b>
            <span className="c1-t">{z.label}</span>
          </div>
        ))}
      </div>
    </>
  )
}

// Pasos numerados, o con etiqueta de texto si el paso trae `badge`
function Steps({ block }) {
  return (
    <>
      <Eyebrow>{block.eyebrow}</Eyebrow>
      <div className="c1-steps">
        {block.steps.map((s, i) => (
          <div className="c1-step" key={i}>
            {s.badge
              ? <span className="c1-badge">{s.badge}</span>
              : <div className="c1-idx" aria-hidden="true">{pad(i + 1)}</div>}
            <div>
              <h4>{s.titel}</h4>
              <p>{renderInline(s.text)}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

function Redemittel({ block }) {
  return (
    <>
      <Eyebrow>{block.eyebrow}</Eyebrow>
      <div className="c1-rm-grid">
        {block.gruppen.map((g, i) => (
          <div className="c1-rm" key={i}>
            <div className="c1-fn">{g.fn}</div>
            <ul>
              {g.saetze.map((s, j) => (
                <li key={j}>
                  <em>{s.satz}</em>
                  {s.gloss && <> <span className="c1-gl">{s.gloss}</span></>}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  )
}

function Modell({ block }) {
  return (
    <>
      <Eyebrow>{block.eyebrow}</Eyebrow>
      <div className="c1-modell">
        <div className="c1-mhead">
          <span>{block.thema}</span>
          <span className="c1-wc">{block.woerter}</span>
        </div>
        <div className="c1-mbody">
          {block.absaetze.map((p, i) => <p key={i}>{renderInline(p)}</p>)}
        </div>
      </div>
      {block.annotationen?.length > 0 && (
        <div className="c1-annot">
          {block.annotationen.map((a, i) => (
            <div className="c1-a" key={i}>
              <span className="c1-tag">{a.tag}</span>
              <p>{renderInline(a.text)}</p>
            </div>
          ))}
        </div>
      )}
    </>
  )
}

function Tipp({ block }) {
  return (
    <div className="c1-tipp">
      <div className="c1-lab">{block.label || 'Prüfungstipp'}</div>
      <p>{renderInline(block.text)}</p>
    </div>
  )
}

// Enunciado + ejercicios (párrafo suelto o lista numerada) + solución plegable
function Uebung({ block }) {
  return (
    <>
      <Eyebrow>{block.eyebrow}</Eyebrow>
      <div className="c1-impuls">
        <p className="c1-q">{renderInline(block.frage)}</p>
        {block.aufgabe && <p className="c1-aufgabe">{renderInline(block.aufgabe)}</p>}
        {block.aufgaben?.length > 0 && (
          <ol>{block.aufgaben.map((a, i) => <li key={i}>{renderInline(a)}</li>)}</ol>
        )}
      </div>
      {(block.loesung || block.loesungen?.length > 0) && (
        <details className="c1-ueb">
          <summary>{block.loesungLabel || 'Musterlösung'}</summary>
          <div className="c1-sol c1-prose">
            {block.loesung && <p>{renderInline(block.loesung)}</p>}
            {block.loesungen?.length > 0 && (
              <ol>{block.loesungen.map((l, i) => <li key={i}>{renderInline(l)}</li>)}</ol>
            )}
          </div>
        </details>
      )}
    </>
  )
}

// Kernwortschatz — palabra con artículo, colocación típica, significado
function Wortschatz({ block }) {
  return (
    <>
      <Eyebrow>{block.eyebrow || 'Kernwortschatz'}</Eyebrow>
      <div className="c1-tablewrap">
        <table className="c1-ktable c1-ws">
          <thead>
            <tr><th>Wort</th><th>Kollokation</th><th>Bedeutung</th></tr>
          </thead>
          <tbody>
            {block.items.map((w, i) => (
              <tr key={i}>
                <td className="c1-k">{w.wort}</td>
                <td>{renderInline(w.kollokation)}</td>
                <td className="c1-ws-es">{w.es}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {block.hinweis && <p className="c1-ws-hinweis">{renderInline(block.hinweis)}</p>}
    </>
  )
}

// Extrae la palabra correcta para cada hueco a partir de `loesungen`, que
// vienen como strings tipo:  "{3} **Während** — temporal + Genitiv…"
// Devuelve un mapa { 1: 'wegen', 2: 'Einführung', … }.
//
// Si el formato de una linea no encaja (autor uso otro estilo, o el bloque
// no es de opciones), la lucha correspondiente queda sin correcta y el
// alumno puede elegir pero no recibe verde/rojo — la Musterlösung sigue
// visible como fallback.
function parseGapAnswers(loesungen) {
  const map = {}
  if (!Array.isArray(loesungen)) return map
  for (const line of loesungen) {
    if (typeof line !== 'string') continue
    // { N }  seguido opcionalmente por espacios y luego **palabra** o __palabra__
    const m = line.match(/\{(\d{1,2})\}\s*(?:\*\*([^*]+?)\*\*|__([^_]+?)__|([A-Za-zÄÖÜäöüß][A-Za-zÄÖÜäöüß-]*))/)
    if (m) {
      const idx = parseInt(m[1], 10)
      const word = (m[2] || m[3] || m[4] || '').trim()
      if (word) map[idx] = word
    }
  }
  return map
}

// Renderiza un párrafo del Lückentext reemplazando cada {N} por un <select>
// con las opciones. Reusa la logica de marcas de `renderInline` para el
// resto del texto, pero con nuestra propia función que intercepta {N}.
function renderInteractiveParagraph(text, selects, keyPrefix) {
  // Mismo TOKEN que inline.jsx, replicado aca para no filtrar componentes UI
  // dentro del helper puro. Manejamos {N} nosotros; el resto lo delegamos.
  const TOKEN = /(\*\*.+?\*\*|__.+?__|==.+?==|~~.+?~~|\*.+?\*|\{\d{1,2}\})/g
  return text.split(TOKEN).map((part, i) => {
    if (!part) return null
    const key = `${keyPrefix}-${i}`
    const gapMatch = /^\{(\d{1,2})\}$/.exec(part)
    if (gapMatch) {
      const idx = parseInt(gapMatch[1], 10)
      return <React.Fragment key={key}>{selects(idx)}</React.Fragment>
    }
    // Delegamos al renderer estandar el resto de marcas — pasar el trozo
    // como texto completo hace que renderInline aplique su propia lógica.
    return <React.Fragment key={key}>{renderInline(part)}</React.Fragment>
  })
}

// Prüfungsbezug — mini-tarea con el formato real del examen.
// Cuando hay opciones + soluciones parseables, los huecos {N} se vuelven
// dropdowns interactivos con validación verde/rojo. Fallback: modo lectura.
function Pruefungsaufgabe({ block }) {
  const answers = React.useMemo(() => parseGapAnswers(block.loesungen), [block.loesungen])
  const gapNumbers = React.useMemo(() => {
    if (!block.absaetze) return []
    const found = new Set()
    for (const p of block.absaetze) {
      const matches = String(p).matchAll(/\{(\d{1,2})\}/g)
      for (const m of matches) found.add(parseInt(m[1], 10))
    }
    return [...found].sort((a, b) => a - b)
  }, [block.absaetze])

  // Interactivo SOLO cuando `optionen` es un banco de palabras de verdad:
  // entradas sin prefijo "(N)" (eso son pistas por hueco o formato de examen
  // a)b)c)) y que contienen la respuesta correcta de CADA hueco. En cualquier
  // otro caso, modo lectura — antes el dropdown ofrecía las pistas como si
  // fueran respuestas y la validación nunca podía acertar.
  const interactive = React.useMemo(() => {
    if (!block.optionen?.length || !gapNumbers.length) return false
    const opts = block.optionen.map(o => String(o).trim())
    if (opts.some(o => /^\(\d{1,2}\)/.test(o))) return false
    const bank = new Set(opts.map(o => o.toLowerCase()))
    return gapNumbers.every(n => answers[n] && bank.has(answers[n].trim().toLowerCase()))
  }, [block.optionen, gapNumbers, answers])

  const [choices, setChoices] = useState({})   // { 1: 'wegen', 2: 'Einführung', … }
  const [checked, setChecked] = useState(false)

  const setChoice = (idx, val) => {
    setChoices(prev => ({ ...prev, [idx]: val }))
    if (checked) setChecked(false)  // el alumno cambia una respuesta → resetear estado
  }

  const results = React.useMemo(() => {
    if (!checked) return {}
    const r = {}
    for (const n of gapNumbers) {
      const correct = answers[n]
      const chosen = choices[n]
      if (correct && chosen) {
        r[n] = chosen.trim().toLowerCase() === correct.trim().toLowerCase() ? 'ok' : 'bad'
      } else {
        r[n] = 'empty'
      }
    }
    return r
  }, [checked, choices, gapNumbers, answers])

  const allAnswered = interactive && gapNumbers.every(n => choices[n])
  const correctCount = React.useMemo(
    () => gapNumbers.filter(n => results[n] === 'ok').length,
    [gapNumbers, results]
  )

  const renderSelect = (idx) => {
    const val = choices[idx] || ''
    const state = results[idx]
    const cls = 'c1-pa-select' + (state === 'ok' ? ' c1-pa-select--ok' : state === 'bad' ? ' c1-pa-select--bad' : '')
    return (
      <select
        className={cls}
        value={val}
        onChange={e => setChoice(idx, e.target.value)}
        aria-label={`Lücke ${idx}`}
      >
        <option value="">— {idx} —</option>
        {block.optionen.map((o, i) => (
          <option key={i} value={o}>{o}</option>
        ))}
      </select>
    )
  }

  return (
    <>
      <Eyebrow>{block.eyebrow || 'Prüfungsbezug'}</Eyebrow>
      <div className="c1-modell c1-pa">
        <div className="c1-mhead">
          <span>{block.modul}</span>
          <span className="c1-wc">{block.titel}</span>
        </div>
        <div className="c1-mbody">
          {block.anweisung && <p className="c1-pa-anweisung">{renderInline(block.anweisung)}</p>}
          {block.absaetze?.map((p, i) => (
            <p key={i}>
              {interactive
                ? renderInteractiveParagraph(p, renderSelect, `pa-${i}`)
                : renderInline(p)}
            </p>
          ))}
          {block.optionen?.length > 0 && (
            <ul className="c1-pa-optionen" aria-label="Verfügbare Optionen">
              {block.optionen.map((o, i) => <li key={i}>{renderInline(o)}</li>)}
            </ul>
          )}

          {interactive && (
            <div className="c1-pa-actions">
              <button
                type="button"
                className="c1-pa-btn c1-pa-btn--primary"
                disabled={!allAnswered}
                onClick={() => setChecked(true)}
              >
                Antworten prüfen
              </button>
              <button
                type="button"
                className="c1-pa-btn"
                onClick={() => { setChoices({}); setChecked(false) }}
              >
                Zurücksetzen
              </button>
              {checked && (
                <span className="c1-pa-score" aria-live="polite">
                  {correctCount} / {gapNumbers.length} richtig
                </span>
              )}
            </div>
          )}
        </div>
      </div>
      {block.loesungen?.length > 0 && (
        <details className="c1-ueb" open={checked && interactive && correctCount < gapNumbers.length}>
          <summary>{block.loesungLabel || 'Lösung'}</summary>
          <div className="c1-sol c1-prose">
            <ol>{block.loesungen.map((l, i) => <li key={i}>{renderInline(l)}</li>)}</ol>
            {block.kommentar && <p className="c1-pa-kommentar">{renderInline(block.kommentar)}</p>}
          </div>
        </details>
      )}
    </>
  )
}

// Selbstcheck — casillas "Kann ich schon…?". Estado solo en memoria.
function Selbstcheck({ block }) {
  const [done, setDone] = useState(() => block.items.map(() => false))
  const toggle = i => setDone(d => d.map((v, j) => (j === i ? !v : v)))
  return (
    <>
      <Eyebrow>{block.eyebrow || 'Selbstcheck'}</Eyebrow>
      <ul className="c1-check">
        {block.items.map((it, i) => (
          <li key={i} className={done[i] ? 'is-done' : undefined}>
            <label>
              <input type="checkbox" checked={done[i]} onChange={() => toggle(i)} />
              <span>{renderInline(it)}</span>
            </label>
          </li>
        ))}
      </ul>
    </>
  )
}

// Ausblick — cómo enlaza con la lección siguiente
function Ausblick({ block, next, base }) {
  return (
    <>
      <Eyebrow>{block.eyebrow || 'Ausblick'}</Eyebrow>
      <div className="c1-ausblick">
        <p>{renderInline(block.text)}</p>
        {next && (
          <Link to={`${base}/${next.id}`} className="c1-ausblick-link">
            Weiter zu {pad(next.id)} · {next.titel} ›
          </Link>
        )}
      </div>
    </>
  )
}

export default function C1LessonBody({ content, next, base }) {
  return (
    <>
      {content.map((block, i) => {
        switch (block.type) {
          case 'wortschatz':       return <Wortschatz       block={block} key={i} />
          case 'pruefungsaufgabe': return <Pruefungsaufgabe block={block} key={i} />
          case 'selbstcheck':      return <Selbstcheck      block={block} key={i} />
          case 'ausblick':         return <Ausblick         block={block} next={next} base={base} key={i} />
          case 'rule':       return <hr className="c1-rule" key={i} />
          case 'lernziele':  return <Lernziele  block={block} key={i} />
          case 'prose':      return <Prose      block={block} key={i} />
          case 'beispiele':  return <Beispiele  block={block} key={i} />
          case 'tabelle':    return <Tabelle    block={block} key={i} />
          case 'vergleich':  return <Vergleich  block={block} key={i} />
          case 'steps':      return <Steps      block={block} key={i} />
          case 'redemittel': return <Redemittel block={block} key={i} />
          case 'modell':     return <Modell     block={block} key={i} />
          case 'tipp':       return <Tipp       block={block} key={i} />
          case 'uebung':     return <Uebung     block={block} key={i} />
          default:           return null
        }
      })}
    </>
  )
}
