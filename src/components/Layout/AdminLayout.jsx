import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Moon, Sun, Menu, X, LayoutDashboard, Users, LogOut, BookOpen, ChevronLeft, Settings } from 'lucide-react'
import { useAuth } from '../../context/AuthContext'
import { useTheme } from '../../context/ThemeContext'

const sidebarLinks = [
  { to: '/admin', icon: LayoutDashboard, label: 'Dashboard', exact: true },
  { to: '/admin/usuarios', icon: Users, label: 'Schüler' },
]

const bottomLinks = [
  { to: '/dashboard', icon: BookOpen, label: 'App ansehen (Schüler)' },
]

export default function AdminLayout({ children }) {
  const { user, logout } = useAuth()
  const { darkMode, toggleDarkMode } = useTheme()
  const location = useLocation()
  const navigate = useNavigate()
  const [collapsed, setCollapsed] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  const isActive = (link) => link.exact
    ? location.pathname === link.to
    : location.pathname.startsWith(link.to)

  const SidebarContent = ({ mobile = false }) => (
    <div className="flex flex-col h-full">
      {/* Logo */}
      <div className={`flex items-center ${collapsed && !mobile ? 'justify-center' : 'gap-3'} px-4 h-16 border-b border-gray-200 dark:border-gray-700 shrink-0`}>
        <img src="/logo.svg" alt="Logo" className="w-9 h-9 shrink-0" />
        {(!collapsed || mobile) && (
          <div>
            <p className="font-extrabold text-orange-500 text-sm leading-tight">Schule</p>
            <p className="text-[10px] text-gray-400 font-medium">Administrationsbereich</p>
          </div>
        )}
      </div>

      {/* Nav links */}
      <div className="flex-1 py-4 px-3 space-y-1 overflow-y-auto">
        <p className={`text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2 ${collapsed && !mobile ? 'text-center' : 'px-2'}`}>
          {collapsed && !mobile ? '•••' : 'Hauptmenü'}
        </p>
        {sidebarLinks.map(link => {
          const Icon = link.icon
          const active = isActive(link)
          return (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => mobile && setMobileOpen(false)}
              className={`flex items-center ${collapsed && !mobile ? 'justify-center' : 'gap-3'} px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                active
                  ? 'bg-orange-500 text-white shadow-md shadow-orange-200 dark:shadow-orange-900/30'
                  : 'text-gray-600 dark:text-gray-300 hover:bg-orange-50 dark:hover:bg-gray-800 hover:text-orange-600'
              }`}
              title={collapsed && !mobile ? link.label : undefined}
            >
              <Icon size={20} className="shrink-0" />
              {(!collapsed || mobile) && <span>{link.label}</span>}
            </Link>
          )
        })}

        <div className="!mt-6">
          <p className={`text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2 ${collapsed && !mobile ? 'text-center' : 'px-2'}`}>
            {collapsed && !mobile ? '•••' : 'Sonstiges'}
          </p>
          {bottomLinks.map(link => {
            const Icon = link.icon
            return (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => mobile && setMobileOpen(false)}
                className={`flex items-center ${collapsed && !mobile ? 'justify-center' : 'gap-3'} px-3 py-2.5 rounded-xl text-sm font-medium text-gray-600 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-800 hover:text-blue-600 transition-all`}
                title={collapsed && !mobile ? link.label : undefined}
              >
                <Icon size={20} className="shrink-0" />
                {(!collapsed || mobile) && <span>{link.label}</span>}
              </Link>
            )
          })}
        </div>
      </div>

      {/* User info + collapse */}
      <div className="border-t border-gray-200 dark:border-gray-700 px-3 py-3 shrink-0">
        {(!collapsed || mobile) && (
          <div className="flex items-center gap-3 px-2 mb-3">
            <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0">
              {user?.name?.[0]?.toUpperCase() || 'A'}
            </div>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-gray-800 dark:text-gray-100 truncate">{user?.name || 'Admin'}</p>
              <p className="text-[10px] text-red-500 font-bold">{user?.role === 'superadmin' ? 'SuperAdmin' : 'Admin'}</p>
            </div>
          </div>
        )}

        <button
          onClick={() => { logout(); navigate('/') }}
          className={`flex items-center ${collapsed && !mobile ? 'justify-center' : 'gap-3'} w-full px-3 py-2 rounded-xl text-sm font-medium text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-all`}
          title={collapsed && !mobile ? 'Abmelden' : undefined}
        >
          <LogOut size={18} className="shrink-0" />
          {(!collapsed || mobile) && <span>Abmelden</span>}
        </button>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex">
      {/* Desktop sidebar */}
      <aside className={`hidden lg:flex flex-col ${collapsed ? 'w-[72px]' : 'w-64'} bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 transition-all duration-300 fixed top-0 left-0 h-screen z-30`}>
        <SidebarContent />
        <button
          onClick={() => setCollapsed(c => !c)}
          className="absolute -right-3 top-20 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full p-1 shadow-sm hover:bg-orange-50 dark:hover:bg-gray-700 transition-colors"
          aria-label={collapsed ? 'Seitenleiste ausklappen' : 'Seitenleiste einklappen'}
        >
          <ChevronLeft size={14} className={`text-gray-400 transition-transform ${collapsed ? 'rotate-180' : ''}`} />
        </button>
      </aside>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-40 lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.aside
              initial={{ x: -280 }}
              animate={{ x: 0 }}
              exit={{ x: -280 }}
              transition={{ type: 'spring', damping: 25 }}
              className="fixed top-0 left-0 w-[280px] h-screen bg-white dark:bg-gray-800 z-50 lg:hidden shadow-xl"
            >
              <SidebarContent mobile />
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Main content area */}
      <div className={`flex-1 ${collapsed ? 'lg:ml-[72px]' : 'lg:ml-64'} transition-all duration-300`}>
        {/* Top bar */}
        <header className="sticky top-0 z-20 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 h-14 flex items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300"
              aria-label="Menü öffnen"
            >
              <Menu size={20} />
            </button>
            <h2 className="text-sm font-semibold text-gray-500 dark:text-gray-400">
              {location.pathname === '/admin' && 'Dashboard'}
              {location.pathname === '/admin/usuarios' && 'Schülerverwaltung'}
              {location.pathname.startsWith('/admin/usuarios/') && location.pathname !== '/admin/usuarios' && 'Schülerdetails'}
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button onClick={toggleDarkMode} className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500 dark:text-gray-300">
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </header>

        {/* Page content */}
        <main className="p-4 sm:p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  )
}
