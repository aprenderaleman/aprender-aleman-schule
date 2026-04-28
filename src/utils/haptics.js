// Tiny haptic feedback wrapper. No-op on devices without vibration support.
// Use distinct patterns so users learn what each means.
const can = typeof navigator !== 'undefined' && typeof navigator.vibrate === 'function'

export const haptics = {
  // Tap on a button / minor interaction
  tap:     () => can && navigator.vibrate(10),
  // Light positive feedback (correct answer, claim bonus)
  success: () => can && navigator.vibrate([15, 30, 15]),
  // Mistake / invalid action
  error:   () => can && navigator.vibrate([40, 30, 40]),
  // Big celebration (level up, achievement)
  celebrate: () => can && navigator.vibrate([20, 40, 20, 40, 60]),
  // Selection change in a picker
  select:  () => can && navigator.vibrate(5),
}
