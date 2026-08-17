// Push notifications wiring for the Capacitor shell. No-op on web
// (browser push is handled by the PWA service worker separately).
//
// Flow on native:
//   1. On login (or app boot with existing session), request permission.
//   2. On grant, receive FCM/APNs token from the plugin.
//   3. POST it to /api/notifications/register-token so the backend can
//      target the user with server-initiated pushes.
//   4. Handle taps: `pushNotificationActionPerformed` navigates to the
//      deep link stored in the notification's `data.route`.

import { isNative } from './platform'

const API_URL = import.meta.env.VITE_API_URL || ''

async function postToken(token, platform) {
  const jwt = localStorage.getItem('auth_token')
  if (!jwt) return
  try {
    await fetch(`${API_URL}/api/notifications/register-token`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${jwt}` },
      body: JSON.stringify({ token, platform }),
    })
  } catch {
    // Fail silent — no push is better than a crashed app.
  }
}

let initDone = false

/**
 * Register the device with FCM/APNs and wire tap-through navigation.
 * Safe to call multiple times — only runs once.
 */
export async function initPushNotifications() {
  if (!isNative() || initDone) return
  initDone = true

  try {
    const { PushNotifications } = await import('@capacitor/push-notifications')
    const { Capacitor } = await import('@capacitor/core')
    const platform = Capacitor.getPlatform() // 'ios' | 'android'

    const perm = await PushNotifications.checkPermissions()
    if (perm.receive !== 'granted') {
      const req = await PushNotifications.requestPermissions()
      if (req.receive !== 'granted') return
    }

    await PushNotifications.register()

    PushNotifications.addListener('registration', ({ value }) => {
      postToken(value, platform)
    })

    PushNotifications.addListener('registrationError', (err) => {
      console.warn('[push] registration error:', err?.error)
    })

    // Tap → navigate to the route the backend embedded in data.route
    PushNotifications.addListener('pushNotificationActionPerformed', (event) => {
      const route = event?.notification?.data?.route
      if (route && typeof route === 'string' && route.startsWith('/')) {
        window.history.pushState({}, '', route)
        window.dispatchEvent(new PopStateEvent('popstate'))
      }
    })
  } catch (e) {
    console.warn('[push] init failed:', e?.message)
  }
}
