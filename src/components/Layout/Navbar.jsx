import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Moon, Sun, BookOpen, BarChart2, User, GraduationCap, Home, LogOut, Zap, Layers, Search } from 'lucide-react'
import { useAuth } from '../../context/AuthContext'
import { useTheme } from '../../context/ThemeContext'
import { useProgress } from '../../context/ProgressContext'
import Tooltip from '../UI/Tooltip'

const navLinks = [
  { to: '/dashboard', icon: <Home size={18} />, label: 'Start' },
  { to: '/ejercicios', icon: <BookOpen size={18} />, label: 'Übungen' },
  { to: '/flashcards', icon: <Layers size={18} />, label: 'Karteikarten' },
  { to: '/pruefungen', icon: <GraduationCap size={18} />, label: 'Prüfungen', highlight: true },
  { to: '/progreso', icon: <BarChart2 size={18} />, label: 'Fortschritt' },
  { to: '/perfil', icon: <User size={18} />, label: 'Profil' },
]

export default function Navbar() {
  const { user, logout } = useAuth()
  const { darkMode, toggleDarkMode } = useTheme()
  const { progress } = useProgress()
  const location = useLocation()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  if (!user) return null

  return (
    <nav className="sticky top-0 z-40 bg-card/95 backdrop-blur-md border-b border-border shadow-sm pt-safe">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14 md:h-16">
          {/* Logo */}
          <Link to="/dashboard" className="flex items-center gap-2 group">
            <img src="/logo.svg" alt="Schule Logo" className="w-9 h-9" />
            <span className="font-extrabold text-orange-500 text-lg hidden sm:block group-hover:text-orange-600 transition-colors">
              Schule
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(link => {
              const active = location.pathname === link.to || location.pathname.startsWith(link.to + '/')
              const baseClass = 'flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-150'
              let stateClass
              if (active) {
                stateClass = link.highlight
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-sm'
                  : 'bg-orange-500 text-white shadow-sm'
              } else if (link.highlight) {
                stateClass = 'text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 ring-1 ring-indigo-200 dark:ring-indigo-800'
              } else {
                stateClass = 'text-gray-600 dark:text-gray-300 hover:bg-orange-50 dark:hover:bg-gray-800 hover:text-orange-600'
              }
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  aria-label={link.label}
                  className={`${baseClass} ${stateClass}`}
                >
                  {link.icon}
                  {link.label}
                </Link>
              )
            })}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-2">
            {/* Cmd+K trigger — desktop only */}
            <Tooltip content="Befehl ausführen" shortcut="⌘ K">
              <button
                type="button"
                onClick={() => {
                  // Synthesize Cmd+K to open the palette
                  window.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', metaKey: true, ctrlKey: true, bubbles: true }))
                }}
                aria-label="Befehl ausführen"
                className="hidden md:inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-muted/60 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors text-sm focus-visible:ring-2 focus-visible:ring-warm focus-visible:outline-none"
              >
                <Search size={14} />
                <span>Suchen…</span>
                <kbd className="text-[10px] font-bold ml-2 px-1.5 py-0.5 bg-card rounded border border-border">⌘K</kbd>
              </button>
            </Tooltip>

            {/* XP badge */}
            <Tooltip content="Erfahrungspunkte" side="bottom">
              <div className="hidden sm:flex items-center gap-1 bg-orange-50 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 px-3 py-1.5 rounded-full text-sm font-bold">
                <Zap size={14} />
                {progress.xp} XP
              </div>
            </Tooltip>

            {/* Dark mode toggle */}
            <Tooltip content={darkMode ? 'Hellen Modus' : 'Dunklen Modus'} shortcut="⌘ ⇧ L">
              <button
                onClick={toggleDarkMode}
                aria-label={darkMode ? 'Hellen Modus aktivieren' : 'Dunklen Modus aktivieren'}
                className="p-2 rounded-lg hover:bg-muted text-muted-foreground hover:text-foreground transition-colors focus-visible:ring-2 focus-visible:ring-warm focus-visible:outline-none"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </Tooltip>

            {/* Logout */}
            <Tooltip content="Abmelden">
              <button
                onClick={handleLogout}
                aria-label="Abmelden"
                className="hidden md:flex items-center gap-1.5 p-2 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 text-muted-foreground hover:text-red-500 transition-colors focus-visible:ring-2 focus-visible:ring-red-400 focus-visible:outline-none"
              >
                <LogOut size={18} />
              </button>
            </Tooltip>
          </div>
        </div>
      </div>

    </nav>
  )
}
