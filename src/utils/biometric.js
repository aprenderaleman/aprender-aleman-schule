// Biometric re-unlock. Web = no-op. Native = Face ID / Touch ID / Android
// biometric prompt to restore the JWT on app relaunch without asking the
// alumno for a magic link every 30 days.
//
// Contract:
//   • On successful magic-link login → offerToEnable(jwt) once
//     (asks user "¿usar Face ID para próxima vez?", persists jwt + flag)
//   • On boot → tryUnlock() returns the jwt or null. Call BEFORE
//     rendering the login page.

import { isNative } from './platform'
import { getRaw, setRaw, removeRaw } from './storage'

const JWT_KEY = 'schule_biometric_jwt'
const ENABLED_KEY = 'schule_biometric_enabled'

export async function biometricAvailable() {
  if (!isNative()) return false
  try {
    const { BiometricAuth } = await import('@aparajita/capacitor-biometric-auth')
    const info = await BiometricAuth.checkBiometry()
    return !!info?.isAvailable
  } catch { return false }
}

export async function isBiometricUnlockEnabled() {
  if (!isNative()) return false
  const v = await getRaw(ENABLED_KEY)
  return v === '1'
}

/**
 * Ask the alumno once if they want to enable biometric unlock. If they
 * accept, we store the JWT under a biometric-protected key so we can
 * restore it on next app open.
 */
export async function offerToEnable(jwt) {
  if (!isNative() || !jwt) return
  if (!(await biometricAvailable())) return
  if (await isBiometricUnlockEnabled()) return

  const accept = window.confirm(
    '¿Querés activar Face ID/Touch ID para no tener que iniciar sesión cada vez?'
  )
  if (!accept) return

  try {
    const { BiometricAuth } = await import('@aparajita/capacitor-biometric-auth')
    // First-time enrollment gate — user must authenticate before we save.
    await BiometricAuth.authenticate({
      reason: 'Activá Face ID para iniciar sesión más rápido',
      cancelTitle: 'Cancelar',
    })
    await setRaw(JWT_KEY, jwt)
    await setRaw(ENABLED_KEY, '1')
  } catch {
    // User cancelled or biometric failed — just don't enable.
  }
}

/**
 * Boot-time unlock. If enabled, prompt biometric; on success return the
 * JWT so AuthContext can restore the session. Returns null if biometric
 * is disabled, unsupported, or the user cancels.
 */
export async function tryUnlock() {
  if (!isNative()) return null
  if (!(await isBiometricUnlockEnabled())) return null
  try {
    const { BiometricAuth } = await import('@aparajita/capacitor-biometric-auth')
    await BiometricAuth.authenticate({
      reason: 'Iniciá sesión con Face ID',
      cancelTitle: 'Usar otro método',
      allowDeviceCredential: true,
    })
    return await getRaw(JWT_KEY)
  } catch {
    return null
  }
}

export async function disableBiometricUnlock() {
  await removeRaw(JWT_KEY)
  await removeRaw(ENABLED_KEY)
}
