import React, { useEffect, useMemo, useState, useCallback } from 'react'
import { createPortal } from 'react-dom'
import C1LessonBody from './C1LessonBody'

/**
 * Modo presentación para proyectar una lección en clase.
 *
 * Toma el array `content` de la lección y lo divide en slides. Estrategia:
 * cada bloque es una slide. Los separadores `rule` se descartan (son solo
 * visuales en modo lectura). Si una slide no entra, scrollea internamente.
 *
 * Navegación: ←/→, espacio/retroceso, Home/End. ESC sale. Click en los
 * laterales también avanza/retrocede. En móvil swipe.
 *
 * Diseño: dark por defecto (sala a oscuras + proyector), fuente grande,
 * sin chrome. Reusa C1LessonBody para que los bloques se vean igual que
 * en la lección — incluyendo los Lückentext interactivos.
 */
export default function PresentationMode({ lesson, base, open, onClose }) {
  const slides = useMemo(() => {
    const content = lesson?.content || []
    return content.filter(b => b && b.type !== 'rule')
  }, [lesson])

  const [idx, setIdx] = useState(0)
  const total = slides.length

  const prev = useCallback(() => setIdx(i => Math.max(0, i - 1)), [])
  const next = useCallback(() => setIdx(i => Math.min(total - 1, i + 1)), [total])

  // Reset al abrir
  useEffect(() => { if (open) setIdx(0) }, [open])

  // Keyboard nav + Fullscreen al abrir
  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') { onClose(); return }
      if (e.key === 'ArrowRight' || e.key === 'PageDown' || e.key === ' ') { e.preventDefault(); next() }
      else if (e.key === 'ArrowLeft' || e.key === 'PageUp' || e.key === 'Backspace') { e.preventDefault(); prev() }
      else if (e.key === 'Home') setIdx(0)
      else if (e.key === 'End') setIdx(total - 1)
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    // Fullscreen request best-effort; ignoramos si el navegador lo bloquea
    try {
      if (document.documentElement.requestFullscreen && !document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(() => {})
      }
    } catch { /* no-op */ }
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
      try {
        if (document.fullscreenElement) document.exitFullscreen().catch(() => {})
      } catch { /* no-op */ }
    }
  }, [open, next, prev, onClose, total])

  // Swipe en móvil
  const touchRef = React.useRef({ x: 0, y: 0 })
  const onTouchStart = (e) => {
    const t = e.touches[0]
    touchRef.current = { x: t.clientX, y: t.clientY }
  }
  const onTouchEnd = (e) => {
    const t = e.changedTouches[0]
    const dx = t.clientX - touchRef.current.x
    const dy = t.clientY - touchRef.current.y
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) {
      if (dx < 0) next(); else prev()
    }
  }

  if (!open || total === 0) return null

  const current = slides[idx]
  const slideContent = [current]
  const progress = ((idx + 1) / total) * 100

  return createPortal(
    <div
      className="c1-pres"
      role="dialog"
      aria-modal="true"
      aria-label={`Präsentation: ${lesson?.titel || ''}`}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div className="c1-pres-bar" aria-hidden="true">
        <div className="c1-pres-bar-fill" style={{ width: `${progress}%` }} />
      </div>

      <header className="c1-pres-head">
        <div className="c1-pres-title">
          <span className="c1-pres-chip">{lesson?.titel || ''}</span>
        </div>
        <div className="c1-pres-meta">
          <span className="c1-pres-count">{idx + 1} / {total}</span>
          <button
            type="button"
            onClick={onClose}
            className="c1-pres-btn"
            aria-label="Präsentation beenden (ESC)"
            title="ESC"
          >
            ✕
          </button>
        </div>
      </header>

      {/* Zonas click laterales para avanzar/retroceder sin tocar el contenido */}
      <button
        type="button"
        aria-label="Vorherige Slide"
        className="c1-pres-nav c1-pres-nav--prev"
        onClick={prev}
        disabled={idx === 0}
      >
        ‹
      </button>
      <button
        type="button"
        aria-label="Nächste Slide"
        className="c1-pres-nav c1-pres-nav--next"
        onClick={next}
        disabled={idx === total - 1}
      >
        ›
      </button>

      <main className="c1-pres-stage">
        <div className="c1-pres-slide c1-prose">
          <C1LessonBody content={slideContent} base={base} />
        </div>
      </main>

      <footer className="c1-pres-foot" aria-hidden="true">
        <span>← → navegar · ESC salir</span>
      </footer>
    </div>,
    document.body,
  )
}
