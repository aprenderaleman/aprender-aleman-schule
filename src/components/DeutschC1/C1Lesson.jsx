import React from 'react'
import { Link } from 'react-router-dom'
import C1LessonBody from './C1LessonBody'
import { renderInline } from './inline'
import { lessonArt } from './lessonArt'
import './deutschc1-v2.css'

// Rediseño visual en pruebas: ?diseno=2 lo activa (y se recuerda en este
// navegador), ?diseno=1 vuelve al actual. El resto de usuarios no lo ve.
function useDisenoV2() {
  try {
    const q = new URLSearchParams(window.location.search).get('diseno')
    if (q === '2') localStorage.setItem('kurs-diseno', '2')
    if (q === '1') localStorage.removeItem('kurs-diseno')
    return localStorage.getItem('kurs-diseno') === '2'
  } catch { return false }
}

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

function Pager({ prev, next, base }) {
  return (
    <nav className="c1-pager" aria-label="Lektionen">
      {prev ? (
        <Link to={`${base}/${prev.id}`} className="c1-prev">
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
        <Link to={`${base}/${next.id}`} className="c1-next">
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

export default function C1Lesson({ lesson, kurs }) {
  const v2 = useDisenoV2()
  const art = v2 ? lessonArt(kurs, lesson.id) : null
  return (
    <div className={'c1-wrap' + (v2 ? ' c1-v2' : '')} data-block={v2 ? lesson.block : undefined}>
      {lesson.ready ? (
        <>
          {art?.hero && <img className="c1-hero" src={art.hero} alt="" />}
          {lesson.blockStart && lesson.block !== 'G' && !art?.hero && (
            <img
              className="c1-block-art"
              src={`${kurs.artBase}/block-${lesson.block}.svg`}
              alt=""
              loading="lazy"
            />
          )}
          <ExamStamp spec={lesson.spec} />
          <h2 className="c1-title">{lesson.h1 || lesson.titel}</h2>
          {lesson.lead && <p className="c1-lead">{renderInline(lesson.lead)}</p>}
          <hr className="c1-rule" />
          <C1LessonBody content={lesson.content || []} next={lesson.next} base={kurs.base} v2={v2} art={art} />
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

      {lesson.heft && (
        <Link to={`${kurs.base}/${lesson.id}/heft`} className="c1-heft-card">
          <div className="c1-hc-k">📝 Übungsheft</div>
          <div className="c1-hc-t">Jetzt üben: Aufgaben zu dieser Lektion</div>
          <div className="c1-hc-s">Grammatik · Lesen · Schreiben — mit Korrektur{/A[12]/.test(kurs.name) ? ' (practica lo aprendido)' : ''}</div>
        </Link>
      )}
      <Pager prev={lesson.prev} next={lesson.next} base={kurs.base} />
    </div>
  )
}
