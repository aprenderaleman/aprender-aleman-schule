import { useEffect, useState } from 'react'

/**
 * Detects mobile viewport, standalone (installed PWA), iOS, and online status.
 * Single source of truth so components don't repeat the same media-query glue.
 */
export function useDevice() {
  const [state, setState] = useState(() => ({
    isMobile: typeof window !== 'undefined' ? window.matchMedia('(max-width: 767px)').matches : false,
    isStandalone: typeof window !== 'undefined' && (
      window.matchMedia('(display-mode: standalone)').matches ||
      window.navigator.standalone === true
    ),
    isIOS: typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent),
    isOnline: typeof navigator !== 'undefined' ? navigator.onLine : true,
  }))

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)')
    const onResize = () => setState(s => ({ ...s, isMobile: mq.matches }))
    const onOnline  = () => setState(s => ({ ...s, isOnline: true }))
    const onOffline = () => setState(s => ({ ...s, isOnline: false }))

    mq.addEventListener?.('change', onResize)
    window.addEventListener('online', onOnline)
    window.addEventListener('offline', onOffline)
    return () => {
      mq.removeEventListener?.('change', onResize)
      window.removeEventListener('online', onOnline)
      window.removeEventListener('offline', onOffline)
    }
  }, [])

  return state
}
