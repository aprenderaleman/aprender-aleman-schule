// Contador de items pendientes en la cola SRS. Lo usa el sidebar como
// badge sobre "Wiederholung". Se refresca al montar y cuando un ejercicio
// se completa (evento 'srs-changed').
import { useEffect, useState } from 'react'

const API_URL = import.meta.env.VITE_API_URL || ''
const CHANGED_EVENT = 'srs-changed'

export const notifySrsChanged = () => window.dispatchEvent(new Event(CHANGED_EVENT))

export function useSrsCount(enabled = true) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!enabled) { setCount(0); return undefined }
    let alive = true
    const load = () => {
      const token = localStorage.getItem('auth_token')
      if (!token) return
      fetch(`${API_URL}/api/srs/count`, { headers: { Authorization: `Bearer ${token}` } })
        .then(r => r.ok ? r.json() : null)
        .then(d => { if (alive && d) setCount(Number(d.count) || 0) })
        .catch(() => { /* badge opcional */ })
    }
    load()
    window.addEventListener(CHANGED_EVENT, load)
    return () => { alive = false; window.removeEventListener(CHANGED_EVENT, load) }
  }, [enabled])

  return count
}
