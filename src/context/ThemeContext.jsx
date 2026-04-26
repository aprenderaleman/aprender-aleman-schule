import React, { createContext, useContext, useState, useEffect } from 'react'
import { getItem, setItem, removeItem } from '../utils/storage'

const ThemeContext = createContext(null)

// Bump this when the default should be re-applied to all users
// (e.g. design-system change). Old preferences under previous keys are wiped.
const THEME_STORAGE_KEY = 'dark_mode_v2'
const LEGACY_KEYS = ['dark_mode']

export function ThemeProvider({ children }) {
  // Dark mode is the default. Only light if the user has explicitly opted out
  // since the v2 storage key was introduced.
  const [darkMode, setDarkMode] = useState(() => {
    // Wipe legacy keys so old preferences don't carry over
    LEGACY_KEYS.forEach(k => removeItem(k))
    const stored = getItem(THEME_STORAGE_KEY)
    return stored === null || stored === undefined ? true : !!stored
  })

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    setItem(THEME_STORAGE_KEY, darkMode)
  }, [darkMode])

  const toggleDarkMode = () => setDarkMode(prev => !prev)

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider')
  return ctx
}
