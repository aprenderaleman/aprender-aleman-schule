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
  try {
    localStorage.removeItem(key)
  } catch {}
}

export function clearAll() {
  try {
    localStorage.clear()
  } catch {}
}
