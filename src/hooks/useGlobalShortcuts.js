import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTheme } from '../context/ThemeContext'

/**
 * Listens for global "go to" shortcuts (Vim/Linear style):
 *   g d  → /dashboard
 *   g e  → /ejercicios
 *   g k  → /flashcards
 *   g p  → /pruefungen
 *   g f  → /progreso
 *   g u  → /perfil
 *   ?    → help (TODO)
 *   Cmd/Ctrl + Shift + L → toggle dark mode
 *
 * Skips when user is typing in an input/textarea/contenteditable.
 */
export function useGlobalShortcuts() {
  const navigate = useNavigate()
  const { toggleDarkMode } = useTheme()

  useEffect(() => {
    let leader = null  // 'g' state
    let leaderTimeout = null

    const isTyping = (target) => {
      if (!target) return false
      const tag = target.tagName
      return tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT' || target.isContentEditable
    }

    const onKey = (e) => {
      // Cmd/Ctrl + Shift + L → toggle theme
      if ((e.metaKey || e.ctrlKey) && e.shiftKey && (e.key === 'L' || e.key === 'l')) {
        e.preventDefault()
        toggleDarkMode()
        return
      }

      // Skip the rest if a modifier is held (let browser/OS handle)
      if (e.metaKey || e.ctrlKey || e.altKey) return
      // Skip if focus is in a text field
      if (isTyping(e.target)) return

      // Leader key: 'g'
      if (leader === null && e.key === 'g') {
        leader = 'g'
        clearTimeout(leaderTimeout)
        leaderTimeout = setTimeout(() => { leader = null }, 1000)
        return
      }

      if (leader === 'g') {
        const map = {
          d: '/dashboard',
          e: '/ejercicios',
          k: '/flashcards',
          p: '/pruefungen',
          f: '/progreso',
          u: '/perfil',
        }
        const path = map[e.key.toLowerCase()]
        leader = null
        clearTimeout(leaderTimeout)
        if (path) {
          e.preventDefault()
          navigate(path)
        }
      }
    }

    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
      clearTimeout(leaderTimeout)
    }
  }, [navigate, toggleDarkMode])
}
