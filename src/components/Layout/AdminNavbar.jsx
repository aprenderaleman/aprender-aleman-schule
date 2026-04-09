import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Moon, Sun, Menu, X, LayoutDashboard, Users, LogOut, BookOpen } from 'lucide-react'
import { useAuth } from '../../context/AuthContext'
import { useTheme } from '../../context/ThemeContext'

const adminLinks = [
  { to: '/admin', icon: <LayoutDashboard size={18} />, label: 'Panel', exact: true },
  { to: '/admin/usuarios', icon: <Users size={18} />, label: 'Estudiantes' },
  { to: '/dashboard', icon: <BookOpen size={18} />, label: 'Ver App' },
]

export default function AdminNavbar() {
  const { user, logout } = useAuth()
  const { darkMode, toggleDarkMode } = useTheme()
  const location = useLocation()
  const navigate = useNavigate()
  const [mobileOpen, setMobileOpen] = useState(false)

  const isActive = (link) => link.exact
    ? location.pathname === link.to
    : location.pathname.startsWith(link.to)

  return (
    <nav className="sticky top-0 z-40 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <Link to="/admin" className="flex items-center gap-2 group">
            <img src="/logo.svg" alt="Logo" className="w-9 h-9" />
            <div className="hidden sm:block">
              <span className="font-extrabold text-orange-500 text-lg group-hover:text-orange-600 transition-colors">Admin</span>
              <span className="text-xs text-gray-400 ml-2">Aprender-Aleman.de</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {adminLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                  isActive(link)
                    ? 'bg-orange-500 text-white shadow-sm'
                    : 'text-gray-600 dark:text-gray-300 hover:bg-orange-50 dark:hover:bg-gray-800'
                }`}
              >
                {link.icon}
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <span className="hidden sm:block text-sm font-medium text-gray-500 dark:text-gray-400 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 px-3 py-1 rounded-full">
              SuperAdmin
            </span>
            <button onClick={toggleDarkMode} className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300">
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => { logout(); navigate('/') }}
              className="hidden md:flex items-center gap-1.5 p-2 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 text-gray-500 hover:text-red-500 transition-colors"
            >
              <LogOut size={18} />
            </button>
            <button
              onClick={() => setMobileOpen(p => !p)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-700"
          >
            <div className="px-4 py-3 flex flex-col gap-1">
              {adminLinks.map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm font-medium ${
                    isActive(link) ? 'bg-orange-500 text-white' : 'text-gray-700 dark:text-gray-200 hover:bg-orange-50'
                  }`}
                >
                  {link.icon}
                  {link.label}
                </Link>
              ))}
              <button
                onClick={() => { logout(); navigate('/') }}
                className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm font-medium text-red-500 hover:bg-red-50 mt-1"
              >
                <LogOut size={18} /> Cerrar sesión
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
