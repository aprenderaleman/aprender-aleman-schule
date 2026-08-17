// Bridges between the React app and the Capacitor shell. Loaded once at
// boot from App.jsx — do nothing if we're in a plain browser.

import { isNative, isAndroid } from './platform'

let bridgeReady = false

/**
 * Wire hardware Android back button so it navigates instead of
 * closing the app on the first press. Two behaviours:
 *   • If the router can go back → history.back()
 *   • If we're at the root → show a "press again to exit" toast, and
 *     exit only if pressed twice within 2s (native pattern)
 */
async function wireBackButton() {
  if (!isAndroid()) return
  const { App } = await import('@capacitor/app')
  let lastPress = 0
  App.addListener('backButton', ({ canGoBack }) => {
    if (canGoBack) {
      window.history.back()
      return
    }
    const now = Date.now()
    if (now - lastPress < 2000) {
      App.exitApp()
    } else {
      lastPress = now
      // Simple toast — could plug into the app's Toast component later
      const el = document.createElement('div')
      el.textContent = 'Presiona atrás de nuevo para salir'
      Object.assign(el.style, {
        position: 'fixed', bottom: '80px', left: '50%',
        transform: 'translateX(-50%)', background: '#0F2847',
        color: 'white', padding: '10px 16px', borderRadius: '12px',
        fontSize: '14px', zIndex: 99999, opacity: '0.95',
      })
      document.body.appendChild(el)
      setTimeout(() => el.remove(), 1800)
    }
  })
}

/**
 * Deep link handling. Register a handler so `schule://exam/xxx` (from
 * a push notification, WhatsApp share, etc.) opens the right screen.
 * Format: schule://<path>?<query>  →  we navigate to /<path>?<query>.
 */
async function wireDeepLinks() {
  const { App } = await import('@capacitor/app')
  App.addListener('appUrlOpen', (event) => {
    try {
      const url = new URL(event.url)
      // Strip protocol + host → keep just path + query
      const target = url.pathname + url.search + url.hash
      if (target && target !== '/') {
        // Use pushState so React Router picks it up naturally
        window.history.pushState({}, '', target)
        // Trigger a popstate so any listener re-syncs
        window.dispatchEvent(new PopStateEvent('popstate'))
      }
    } catch { /* malformed URL, ignore */ }
  })
}

/**
 * Set the status bar to match the theme background so alumnos don't see
 * a white bar over the warm cream header on iOS / Android.
 */
async function wireStatusBar() {
  try {
    const { StatusBar, Style } = await import('@capacitor/status-bar')
    // Follow dark/light system-wise. Fallback to Default if not supported.
    await StatusBar.setStyle({ style: Style.Default }).catch(() => {})
  } catch { /* status bar plugin absent, ignore */ }
}

/**
 * Hide the splash screen once React has rendered its first meaningful
 * paint. Capacitor auto-hides after ~1.5s but we can drop it earlier.
 */
async function hideSplashWhenReady() {
  try {
    const { SplashScreen } = await import('@capacitor/splash-screen')
    // Wait for the next paint, then hide
    requestAnimationFrame(() => {
      requestAnimationFrame(() => SplashScreen.hide().catch(() => {}))
    })
  } catch {}
}

export async function initNativeBridge() {
  if (!isNative() || bridgeReady) return
  bridgeReady = true
  await Promise.all([
    wireBackButton(),
    wireDeepLinks(),
    wireStatusBar(),
    hideSplashWhenReady(),
  ])
  // Push notifications: only try to register if we already have a JWT.
  // Fresh users trigger it later from AuthContext once they log in.
  if (localStorage.getItem('auth_token')) {
    try {
      const { initPushNotifications } = await import('./pushNotifications')
      initPushNotifications()
    } catch {}
  }
}
