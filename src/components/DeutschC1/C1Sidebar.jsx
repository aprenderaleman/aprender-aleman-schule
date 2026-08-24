import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

const pad = n => String(n).padStart(2, '0')

/**
 * Menú lateral del curso: 40 lecciones agrupadas en 5 bloques.
 *
 * En ≥860px es una columna fija; por debajo se pliega y se abre como drawer
 * desde la topbar (la transición vive en deutschc1.css, que respeta
 * prefers-reduced-motion).
 */
export default function C1Sidebar({ kurs, blocks, lessons, activeId, onNavigate, panelRef }) {
  const activeRef = useRef(null)

  // Mantener la lección activa a la vista al saltar de una a otra.
  useEffect(() => {
    activeRef.current?.scrollIntoView({ block: 'nearest' })
  }, [activeId])

  return (
    <aside className="c1-sidebar" id="c1-sidebar" aria-label="Kursnavigation" ref={panelRef}>
      <div className="c1-brand">
        <div className="c1-kicker">Aprender-Aleman.de</div>
        <h1>{kurs.name}</h1>
        <div className="c1-sub">{kurs.sub || `Kompletter Vorbereitungskurs · ${lessons.length} Lektionen`}</div>
        <Link to="/dashboard" className="c1-back">‹ Dashboard</Link>
      </div>

      <nav className="c1-nav">
        {blocks.map(b => (
          <div className="c1-group" key={b.n}>
            <div className="c1-group-label">
              <b>Bloque {b.n}</b> · {b.name}
            </div>
            {lessons
              .filter(l => l.id >= b.range[0] && l.id <= b.range[1])
              .map(l => {
                const active = l.id === activeId
                return (
                  <Link
                    key={l.id}
                    to={`${kurs.base}/${l.id}`}
                    ref={active ? activeRef : null}
                    onClick={onNavigate}
                    aria-current={active ? 'page' : undefined}
                    className={
                      'c1-link' + (active ? ' is-active' : '') + (l.ready ? ' is-ready' : '')
                    }
                  >
                    <span className="c1-num">{pad(l.id)}</span>
                    <span className="c1-lt">{l.titel}</span>
                  </Link>
                )
              })}
          </div>
        ))}
      </nav>
    </aside>
  )
}
