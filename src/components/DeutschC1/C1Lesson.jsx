import React from 'react'
import { Link } from 'react-router-dom'
import C1LessonBody from './C1LessonBody'

const pad = n => String(n).padStart(2, '0')

/**
 * Sello de examen: las coordenadas en monoespaciada sobre el título.
 * Es el elemento de identidad del curso — el primer campo (el módulo) va
 * en dorado, los separadores en línea fina.
 */
function ExamStamp({ spec }) {
  if (!spec?.length) return null
  return (
    <div className="c1-spec">
      {spec.map((s, i) => (
        <React.Fragment key={i}>
          {i > 0 && <span className="c1-sep" aria-hidden="true">/</span>}
          <span className={i === 0 ? 'c1-mod' : undefined}>{s}</span>
        </React.Fragment>
      ))}
    </div>
  )
}

function Pager({ prev, next }) {
  return (
    <nav className="c1-pager" aria-label="Lektionen">
      {prev ? (
        <Link to={`/deutschc1/${prev.id}`} className="c1-prev">
          <span className="c1-dir">‹ Vorherige Lektion</span>
          <span className="c1-lt">{pad(prev.id)} · {prev.titel}</span>
        </Link>
      ) : (
        <span className="c1-disabled c1-prev" aria-hidden="true">
          <span className="c1-dir">‹ Vorherige</span>
          <span className="c1-lt">—</span>
        </span>
      )}
      {next ? (
        <Link to={`/deutschc1/${next.id}`} className="c1-next">
          <span className="c1-dir">Nächste Lektion ›</span>
          <span className="c1-lt">{pad(next.id)} · {next.titel}</span>
        </Link>
      ) : (
        <span className="c1-disabled c1-next" aria-hidden="true">
          <span className="c1-dir">Nächste ›</span>
          <span className="c1-lt">—</span>
        </span>
      )}
    </nav>
  )
}

export default function C1Lesson({ lesson }) {
  return (
    <div className="c1-wrap">
      {lesson.ready ? (
        <>
          <ExamStamp spec={lesson.spec} />
          <h2 className="c1-title">{lesson.h1 || lesson.titel}</h2>
          {lesson.lead && <p className="c1-lead">{lesson.lead}</p>}
          <hr className="c1-rule" />
          <C1LessonBody content={lesson.content || []} />
        </>
      ) : (
        <div className="c1-placeholder">
          <div className="c1-pk">Bloque {lesson.block} · {lesson.blockName}</div>
          <h2>{pad(lesson.id)} — {lesson.titel}</h2>
          <p>
            Diese Lektion wird nach demselben Aufbau erstellt: Lernziele, Kernteil,
            Anwendung mit Lösung und Prüfungsbezug — durchgehend auf Deutsch.
          </p>
          <span className="c1-badge">Inhalt in Vorbereitung</span>
        </div>
      )}

      <Pager prev={lesson.prev} next={lesson.next} />
    </div>
  )
}
