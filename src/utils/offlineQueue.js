// Offline queue for POSTs that shouldn't be lost when the alumno is
// without connection (typical case: end an exercise in the subway).
//
// Design goals:
//   • Zero API change for callers — they use queuePost() the same way
//     they'd use fetch(). Returns a Promise that resolves immediately if
//     online (POST fires now) or when the queue drains later.
//   • Persist across restarts. Uses localStorage (web) / Preferences
//     (native via ../utils/storage) so a browser close doesn't lose data.
//   • Auto-flush when navigator.online fires OR when the app resumes
//     (Capacitor App resume listener).

import { getRaw, setRaw } from './storage'

const KEY = 'schule_offline_queue_v1'
const API_URL = import.meta.env.VITE_API_URL || ''

let inFlight = false

async function loadQueue() {
  const raw = await getRaw(KEY)
  if (!raw) return []
  try { return JSON.parse(raw) || [] } catch { return [] }
}

async function saveQueue(q) {
  await setRaw(KEY, JSON.stringify(q))
}

/**
 * Send now if online, otherwise persist for later replay.
 * The queued call is fire-and-forget — the caller shouldn't await it,
 * because the result may arrive minutes later. Any inline UX (score
 * screen, XP toast) has to work off the local state, not the response.
 */
export async function queuePost(path, body, { skipIfOnline = false } = {}) {
  const token = localStorage.getItem('auth_token')
  const online = navigator.onLine

  if (online && !skipIfOnline) {
    try {
      await fetch(`${API_URL}${path}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        body: JSON.stringify(body),
      })
      return { queued: false }
    } catch {
      // Fall through — persist and retry later
    }
  }

  const q = await loadQueue()
  q.push({
    path,
    body,
    token,
    createdAt: Date.now(),
  })
  await saveQueue(q)
  return { queued: true, size: q.length }
}

/**
 * Drain the queue in order. Skips failed items and keeps them for the
 * next flush. Called on network reconnect + on app resume.
 */
export async function flushQueue() {
  if (inFlight) return
  if (!navigator.onLine) return
  inFlight = true
  try {
    let q = await loadQueue()
    const remaining = []
    for (const item of q) {
      try {
        const res = await fetch(`${API_URL}${item.path}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            ...(item.token ? { Authorization: `Bearer ${item.token}` } : {}),
          },
          body: JSON.stringify(item.body),
        })
        // 4xx (except 401/429) means the payload is bad — drop it, no
        // point in retrying forever. 401 means the token expired since
        // the queue was created — also drop, alumno will resend on
        // next successful login.
        if (res.ok || (res.status >= 400 && res.status < 500 && res.status !== 429)) continue
        remaining.push(item)
      } catch {
        // Network error — keep for next attempt
        remaining.push(item)
      }
    }
    await saveQueue(remaining)
  } finally {
    inFlight = false
  }
}

/**
 * Init: register listeners. Call once at boot.
 */
export function initOfflineQueue() {
  if (typeof window === 'undefined') return
  window.addEventListener('online', () => { flushQueue() })
  // Try once at boot in case we came back online while the app was closed.
  if (navigator.onLine) flushQueue()

  // Native: also flush when the app resumes from background.
  import('./platform').then(({ isNative }) => {
    if (!isNative()) return
    import('@capacitor/app').then(({ App }) => {
      App.addListener('appStateChange', ({ isActive }) => {
        if (isActive) flushQueue()
      })
    }).catch(() => {})
  })
}

export async function queueSize() {
  const q = await loadQueue()
  return q.length
}
