import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Moon, Sun, Menu, X, BookOpen, BarChart2, User, Trophy, Home, LogOut, Zap, Layers } from 'lucide-react'
import { useAuth } from '../../context/AuthContext'
import { useTheme } from '../../context/ThemeContext'
import { useProgress } from '../../context/ProgressContext'

const navLinks = [
  { to: '/dashboard', icon: <Home size={18} />, label: 'Start' },
  { to: '/ejercicios', icon: <BookOpen size={18} />, label: 'Übungen' },
  { to: '/flashcards', icon: <Layers size={18} />, label: 'Karteikarten' },
  { to: '/progreso', icon: <BarChart2 size={18} />, label: 'Fortschritt' },
  { to: '/logros', icon: <Trophy size={18} />, label: 'Erfolge' },
  { to: '/perfil', icon: <User size={18} />, label: 'Profil' },
]

export default function Navbar() {
  const { user, logout } = useAuth()
  const { darkMode, toggleDarkMode } = useTheme()
  const { progress } = useProgress()
  const location = useLocation()
  const navigate = useNavigate()
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  if (!user) return null

  return (
    <nav className="sticky top-0 z-40 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/dashboard" className="flex items-center gap-2 group">
            <img src="/logo.svg" alt="Schule Logo" className="w-9 h-9" />
            <span className="font-extrabold text-orange-500 text-lg hidden sm:block group-hover:text-orange-600 transition-colors">
              Schule
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                aria-label={link.label}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-150 ${
                  location.pathname === link.to
                    ? 'bg-orange-500 text-white shadow-sm'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-orange-50 dark:hover:bg-gray-800 hover:text-orange-600'
                }`}
              >
                {link.icon}
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-2">
            {/* XP badge */}
            <div className="hidden sm:flex items-center gap-1 bg-orange-50 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 px-3 py-1.5 rounded-full text-sm font-bold">
              <Zap size={14} />
              {progress.xp} XP
            </div>

            {/* Dark mode toggle */}
            <button
              onClick={toggleDarkMode}
              aria-label={darkMode ? 'Hellen Modus aktivieren' : 'Dunklen Modus aktivieren'}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300 transition-colors"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Logout */}
            <button
              onClick={handleLogout}
              aria-label="Abmelden"
              className="hidden md:flex items-center gap-1.5 p-2 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 text-gray-500 hover:text-red-500 transition-colors"
            >
              <LogOut size={18} />
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileOpen(prev => !prev)}
              aria-label="Menü öffnen"
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-700"
          >
            <div className="px-4 py-3 flex flex-col gap-1">
              <div className="flex items-center gap-2 mb-2 pb-2 border-b border-gray-100 dark:border-gray-700">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {user.name[0].toUpperCase()}
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-800 dark:text-gray-100">{user.name}</p>
                  <p className="text-xs text-orange-500 font-bold flex items-center gap-1"><Zap size={11} />{progress.xp} XP</p>
                </div>
              </div>
              {navLinks.map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                    location.pathname === link.to
                      ? 'bg-orange-500 text-white'
                      : 'text-gray-700 dark:text-gray-200 hover:bg-orange-50 dark:hover:bg-gray-800'
                  }`}
                >
                  {link.icon}
                  {link.label}
                </Link>
              ))}
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm font-medium text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-all mt-1"
              >
                <LogOut size={18} />
                Abmelden
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
