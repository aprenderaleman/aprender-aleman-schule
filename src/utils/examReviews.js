// Utilidades compartidas de la «Revisión de exámenes» (equipo docente).
import { useEffect, useState } from 'react'

export const API_URL = import.meta.env.VITE_API_URL || ''

export const STAFF_REVIEW_ROLES = ['teacher', 'admin', 'superadmin']
export const isReviewStaff = (role) => STAFF_REVIEW_ROLES.includes(role)

export const MODUL = { lesen: 'Lesen', hoeren: 'Hören', schreiben: 'Schreiben', sprechen: 'Sprechen' }

export const fmtDate = (d) => (d ? new Date(d).toLocaleString('es-ES', { dateStyle: 'medium', timeStyle: 'short' }) : '—')
export const fmtDay = (d) => (d ? new Date(d).toLocaleDateString('es-ES', { dateStyle: 'medium' }) : '—')
export const fmtDuration = (s) => {
  const n = Math.max(0, Math.round(Number(s) || 0))
  if (!n) return '—'
  const m = Math.floor(n / 60)
  const r = n % 60
  return m ? `${m} min${r ? ` ${r} s` : ''}` : `${r} s`
}

/** fetch con el token del usuario. Lanza un Error con .status si no es 2xx. */
export async function reviewFetch(path, { method = 'GET', body } = {}) {
  const token = localStorage.getItem('auth_token')
  const res = await fetch(`${API_URL}${path}`, {
    method,
    headers: {
      Authorization: `Bearer ${token}`,
      ...(body !== undefined ? { 'Content-Type': 'application/json' } : {}),
    },
    body: body !== undefined ? JSON.stringify(body) : undefined,
  })
  const json = await res.json().catch(() => null)
  if (!res.ok) {
    const err = new Error(json?.error || `Error ${res.status}`)
    err.status = res.status
    throw err
  }
  return json
}

// Las páginas avisan con este evento cuando cambia la cola (p. ej. al
// confirmar una nota) para que el contador de la navegación se refresque.
const CHANGED_EVENT = 'exam-reviews-changed'
export const notifyReviewsChanged = () => window.dispatchEvent(new Event(CHANGED_EVENT))

/** Nº de exámenes pendientes de revisión. null si no es staff o aún no se sabe. */
export function usePendingExamReviews(role) {
  const enabled = isReviewStaff(role)
  const [count, setCount] = useState(null)

  useEffect(() => {
    if (!enabled) { setCount(null); return undefined }
    let alive = true
    const load = () => {
      reviewFetch('/api/admin/pruefungen/reviews?status=pending')
        .then(d => { if (alive) setCount(Number(d?.pendingCount) || 0) })
        .catch(() => { /* el contador es opcional */ })
    }
    load()
    window.addEventListener(CHANGED_EVENT, load)
    return () => { alive = false; window.removeEventListener(CHANGED_EVENT, load) }
  }, [enabled])

  return count
}
