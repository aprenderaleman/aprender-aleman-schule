import React from 'react'
import { renderInline } from './inline'

const pad = n => String(n).padStart(2, '0')

/**
 * Renderiza el array `content` de una lección.
 *
 * Cada bloque es un objeto plano que viene del servidor; aquí se elige el
 * componente. Añadir un tipo nuevo = añadir un `case`. Nunca se inyecta HTML.
 */

function Eyebrow({ children }) {
  if (!children) return null
  return <p className="c1-eyebrow">{children}</p>
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

export default function C1LessonBody({ content }) {
  return (
    <>
      {content.map((block, i) => {
        switch (block.type) {
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
