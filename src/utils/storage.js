// Storage helpers.
//
// Legacy sync API (JSON-parsed): getItem / setItem / removeItem / clearAll
//   Used across the app. Web-only, synchronous. Values are auto-JSON-ified.
//
// Native-portable async API: getRaw / setRaw / removeRaw
//   New callers that need to work identically on the Capacitor native
//   shell should use these — they hit @capacitor/preferences under the
//   hood when isNative(), and localStorage on web. Raw = string values.

import { isNative } from './platform'

// ─── Legacy synchronous JSON helpers (unchanged behaviour) ─────────
export function getItem(key) {
  try {
    const val = localStorage.getItem(key)
    return val ? JSON.parse(val) : null
  } catch {
    return null
  }
}

export function setItem(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value))
  } catch (e) {
    console.warn('localStorage setItem failed:', e)
  }
}

export function removeItem(key) {
  try { localStorage.removeItem(key) } catch {}
}

export function clearAll() {
  try { localStorage.clear() } catch {}
}

// ─── Native-portable async helpers ─────────────────────────────────
let prefs = null
async function getPrefs() {
  if (!isNative()) return null
  if (prefs) return prefs
  const mod = await import('@capacitor/preferences')
  prefs = mod.Preferences
  return prefs
}

export async function setRaw(key, value) {
  if (isNative()) {
    const p = await getPrefs()
    await p.set({ key, value: String(value ?? '') })
  } else {
    try { localStorage.setItem(key, String(value ?? '')) } catch {}
  }
}

export async function getRaw(key) {
  if (isNative()) {
    const p = await getPrefs()
    const { value } = await p.get({ key })
    return value ?? null
  }
  try { return localStorage.getItem(key) } catch { return null }
}

export async function removeRaw(key) {
  if (isNative()) {
    const p = await getPrefs()
    await p.remove({ key })
  } else {
    try { localStorage.removeItem(key) } catch {}
  }
}
