import React, { createContext, useContext, useState, useEffect } from 'react'
import { getItem, setItem } from '../utils/storage'

const ThemeContext = createContext(null)

export function ThemeProvider({ children }) {
  // Dark mode is the default. Only light if the user has explicitly opted out.
  const [darkMode, setDarkMode] = useState(() => {
    const stored = getItem('dark_mode')
    return stored === null || stored === undefined ? true : !!stored
  })

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    setItem('dark_mode', darkMode)
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
