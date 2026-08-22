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

function Prose({ block }) {
  const body = (
    <div className="c1-prose">
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

function Steps({ block }) {
  return (
    <>
      <Eyebrow>{block.eyebrow}</Eyebrow>
      <div className="c1-steps">
        {block.steps.map((s, i) => (
          <div className="c1-step" key={i}>
            <div className="c1-idx" aria-hidden="true">{pad(i + 1)}</div>
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

function Uebung({ block }) {
  return (
    <>
      <Eyebrow>{block.eyebrow}</Eyebrow>
      <div className="c1-impuls">
        <p className="c1-q">{renderInline(block.frage)}</p>
        {block.aufgabe && <p className="c1-aufgabe">{renderInline(block.aufgabe)}</p>}
      </div>
      {block.loesung && (
        <details className="c1-ueb">
          <summary>Musterlösung</summary>
          <div className="c1-sol c1-prose">
            <p>{renderInline(block.loesung)}</p>
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
