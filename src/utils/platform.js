import { Capacitor } from '@capacitor/core'

/**
 * Feature-detect wrappers so components can behave slightly differently
 * on the native app vs the web build — without sprinkling `Capacitor`
 * checks everywhere.
 *
 *   isNative()   → running inside the Capacitor shell (iOS or Android)
 *   isIOS()      → native iOS specifically
 *   isAndroid()  → native Android
 *   isWeb()      → normal browser (PWA or otherwise)
 *
 * Rules of thumb:
 *   • Hide Stripe / payment CTAs when isIOS() to comply with App Store
 *   • Prefer native plugins (speech, TTS, biometrics) when isNative()
 *   • Register push tokens on boot when isNative()
 */

export function isNative() {
  try { return Capacitor.isNativePlatform() } catch { return false }
}

export function platform() {
  try { return Capacitor.getPlatform() } catch { return 'web' }
}

export function isIOS() { return platform() === 'ios' }
export function isAndroid() { return platform() === 'android' }
export function isWeb() { return platform() === 'web' }
