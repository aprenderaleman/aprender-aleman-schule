import { useEffect, useRef } from 'react'

/**
 * Keeps the screen on while the component is mounted. Used during long
 * exercises and exams so the device doesn't dim mid-activity.
 *
 * Falls back gracefully on browsers without Wake Lock API support.
 *
 *   useWakeLock(active = true)
 */
export function useWakeLock(active = true) {
  const sentinelRef = useRef(null)

  useEffect(() => {
    if (!active) return
    if (typeof navigator === 'undefined' || !('wakeLock' in navigator)) return

    let cancelled = false
    const acquire = async () => {
      try {
        const sentinel = await navigator.wakeLock.request('screen')
        if (cancelled) {
          sentinel.release().catch(() => {})
          return
        }
        sentinelRef.current = sentinel
        // Auto re-acquire if the system released it (e.g. tab hidden then visible)
        sentinel.addEventListener('release', () => { sentinelRef.current = null })
      } catch {
        // Permission denied or not allowed in current state — ignore
      }
    }

    acquire()

    // Re-acquire when the tab becomes visible again
    const onVisibility = () => {
      if (document.visibilityState === 'visible' && !sentinelRef.current) acquire()
    }
    document.addEventListener('visibilitychange', onVisibility)

    return () => {
      cancelled = true
      document.removeEventListener('visibilitychange', onVisibility)
      sentinelRef.current?.release().catch(() => {})
      sentinelRef.current = null
    }
  }, [active])
}
