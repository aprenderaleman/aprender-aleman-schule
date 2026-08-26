import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useParams, Navigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import { useFocusTrap } from '../../hooks/useFocusTrap'
import C1Sidebar from './C1Sidebar'
import C1Lesson from './C1Lesson'
import './deutschc1.css'

const API_URL = import.meta.env.VITE_API_URL || ''
const pad = n => String(n).padStart(2, '0')

/**
 * Página genérica de curso por niveles (C1, B2, …).
 *
 * Recibe toda la identidad por `kurs`:
 *   { name, sub, base, api, total, defaultLesson, artBase }
 * Los wrappers src/pages/DeutschC1.jsx y DeutschB2.jsx solo definen su config.
 * El contenido llega siempre por la API autenticada — nada en el bundle.
 */

function State({ kicker, titel, children }) {
  return (
    <div className="c1-wrap">
      <div className="c1-state">
        <div className="c1-pk">{kicker}</div>
        <h2>{titel}</h2>
        <p>{children}</p>
      </div>
    </div>
  )
}

export default function KursSeite({ kurs }) {
  const { id } = useParams()
  const { getToken } = useAuth()

  const lessonId = Number(id)
  const validId = Number.isInteger(lessonId) && lessonId >= 1 && lessonId <= kurs.total

  const [index, setIndex] = useState(null)
  const [lesson, setLesson] = useState(null)
  const [error, setError] = useState(null)
  const [navOpen, setNavOpen] = useState(false)

  // Tema propio del curso: oscuro por defecto; la preferencia se recuerda
  // por navegador (solo el tema — el progreso sigue sin persistirse).
  const [theme, setTheme] = useState(() => {
    try { return localStorage.getItem('kurs-theme') === 'light' ? 'light' : 'dark' }
    catch { return 'dark' }
  })
  const toggleTheme = () => setTheme(t => {
    const next = t === 'dark' ? 'light' : 'dark'
    try { localStorage.setItem('kurs-theme', next) } catch { /* modo privado */ }
    return next
  })

  const mainRef = useRef(null)
  const sidebarRef = useRef(null)
  useFocusTrap(sidebarRef, navOpen)

  const fetchJson = useCallback(async (path) => {
    const res = await fetch(`${API_URL}${path}`, {
      headers: { Authorization: `Bearer ${getToken()}` },
    })
    if (!res.ok) {
      const err = new Error('request_failed')
      err.status = res.status
      throw err
    }
    return res.json()
  }, [getToken])

  // Índice del curso — una sola vez.
  useEffect(() => {
    let cancelled = false
    fetchJson(`${kurs.api}/index`)
      .then(data => { if (!cancelled) setIndex(data) })
      .catch(err => { if (!cancelled) setError(err.status || 'network') })
    return () => { cancelled = true }
  }, [fetchJson, kurs.api])

  // Lección actual.
  useEffect(() => {
    if (!validId) return
    let cancelled = false
    setLesson(null)
    setError(null)   // un fallo puntual no debe dejar el curso bloqueado
    fetchJson(`${kurs.api}/lessons/${lessonId}`)
      .then(data => { if (!cancelled) setLesson(data) })
      .catch(err => { if (!cancelled) setError(err.status || 'network') })
    return () => { cancelled = true }
  }, [fetchJson, kurs.api, lessonId, validId])

  // Al cambiar de lección: cerrar el drawer, subir y mover el foco al contenido.
  useEffect(() => {
    if (!lesson) return
    setNavOpen(false)
    window.scrollTo(0, 0)
    mainRef.current?.focus({ preventScroll: true })
  }, [lesson])

  // Escape cierra el drawer.
  useEffect(() => {
    if (!navOpen) return
    const onKey = e => { if (e.key === 'Escape') setNavOpen(false) }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [navOpen])

  // Título del documento — ayuda al compartir y al historial.
  useEffect(() => {
    if (!lesson) return
    document.title = `${pad(lesson.id)} · ${lesson.titel} — ${kurs.name} · Aprender-Aleman.de`
    return () => { document.title = 'Schule - Dein Online-Klassenraum' }
  }, [lesson, kurs.name])

  if (!validId) return <Navigate to={`${kurs.base}/${kurs.defaultLesson}`} replace />

  const closeNav = () => setNavOpen(false)

  let body
  if (error === 401) {
    body = (
      <State kicker="Sitzung abgelaufen" titel="Bitte erneut anmelden">
        Deine Sitzung ist abgelaufen. Lade die Seite neu, um dich wieder anzumelden.
      </State>
    )
  } else if (error === 403) {
    body = (
      <State kicker="Kein Zugriff" titel="Dieser Kurs ist reserviert">
        Dieser Kurs steht nur aktiven Teilnehmerinnen und Teilnehmern der Akademie
        sowie den Lehrkräften offen.
      </State>
    )
  } else if (error) {
    body = (
      <State kicker="Fehler" titel="Der Kurs konnte nicht geladen werden">
        Bitte prüfe deine Verbindung und lade die Seite neu.
      </State>
    )
  } else if (!lesson) {
    body = <State kicker={kurs.name} titel="Lektion wird geladen…">Einen Moment bitte.</State>
  } else {
    body = <C1Lesson lesson={lesson} kurs={kurs} />
  }

  return (
    <div className="c1" data-c1-theme={theme}>
      <div className={'c1-app' + (navOpen ? ' is-nav-open' : '')}>
        {index && (
          <C1Sidebar
            kurs={kurs}
            blocks={index.blocks}
            lessons={index.lessons}
            activeId={lessonId}
            onNavigate={closeNav}
            panelRef={sidebarRef}
            theme={theme}
            onToggleTheme={toggleTheme}
          />
        )}

        <div className="c1-scrim" onClick={closeNav} aria-hidden="true" />

        <div className="c1-main">
          <div className="c1-topbar">
            <button
              type="button"
              className="c1-menu-btn"
              aria-expanded={navOpen}
              aria-controls="c1-sidebar"
              onClick={() => setNavOpen(o => !o)}
            >
              ☰ Lektionen
            </button>
            <span className="c1-t-title">
              {lesson ? `${pad(lesson.id)} · ${lesson.titel}` : kurs.name}
            </span>
          </div>

          <main id="main" ref={mainRef} tabIndex={-1}>
            {body}
          </main>
        </div>
      </div>
    </div>
  )
}
