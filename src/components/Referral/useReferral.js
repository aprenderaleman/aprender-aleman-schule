import { useEffect, useState } from 'react'

const API_URL = import.meta.env.VITE_API_URL || ''
const CACHE_KEY = 'schule_referral_cache_v1'
const CACHE_TTL_MS = 15 * 60 * 1000

/**
 * Fetches referral data for the current alumno. Returns:
 *   null      — still loading, or fail-silent (no referral available)
 *   { code, link, invited_count, classes_earned }
 *
 * The endpoint (/api/referral) already gates by ssoUser/b2c, so if we get
 * a real object back we know the user is an academy student. Non-academy
 * users just see nothing.
 */
export default function useReferral() {
  const [data, setData] = useState(null)

  useEffect(() => {
    const token = localStorage.getItem('auth_token')
    if (!token) return

    // Cache localStorage 15 min — evita golpear el endpoint en cada mount
    try {
      const raw = localStorage.getItem(CACHE_KEY)
      if (raw) {
        const parsed = JSON.parse(raw)
        if (parsed.expiresAt > Date.now() && parsed.value) {
          setData(parsed.value)
          return
        }
      }
    } catch {}

    let cancelled = false
    fetch(`${API_URL}/api/referral`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(r => r.ok ? r.json() : null)
      .then(j => {
        if (cancelled) return
        if (j && j.available && j.code) {
          setData(j)
          try {
            localStorage.setItem(CACHE_KEY, JSON.stringify({
              value: j, expiresAt: Date.now() + CACHE_TTL_MS,
            }))
          } catch {}
        }
      })
      .catch(() => { /* fail silent */ })

    return () => { cancelled = true }
  }, [])

  return data
}

export function clearReferralCache() {
  try { localStorage.removeItem(CACHE_KEY) } catch {}
}
