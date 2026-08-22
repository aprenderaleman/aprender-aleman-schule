import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Home, BookOpen, Layers, GraduationCap, BarChart2, Trophy, User,
  Target, CreditCard, LogOut, X, Zap, Bot, ExternalLink,
} from 'lucide-react'
import { useAuth } from '../../context/AuthContext'
import { useProgress } from '../../context/ProgressContext'
import { useSidebar } from '../../context/SidebarContext'
import { haptics } from '../../utils/haptics'
import Logo from '../UI/Logo'

const NAV_ITEMS = [
  { to: '/dashboard',     icon: Home,           label: 'Dashboard' },
  { to: '/ejercicios',    icon: BookOpen,       label: 'Übungen' },
  { to: '/flashcards',    icon: Layers,         label: 'Karteikarten' },
  { to: '/pruefungen',    icon: GraduationCap,  label: 'Prüfungen' },
  { to: '/test-de-nivel', icon: Target,         label: 'Niveau-Test' },
  { to: '/progreso',      icon: BarChart2,      label: 'Fortschritt' },
  { to: '/logros',        icon: Trophy,         label: 'Erfolge' },
  { href: 'https://hans.aprender-aleman.de', icon: Bot, label: 'Hans (KI-Lehrer)', external: true },
]

const SECONDARY_ITEMS = [
  { to: '/perfil',  icon: User,        label: 'Profil' },
  { to: '/pricing', icon: CreditCard,  label: 'Abonnement' },
]

/**
 * Single-source navigation for the student-facing app.
 *
 * Behaviour:
 *  - md+ (≥768px): always visible as a 240px fixed left rail
 *  - <md: hidden by default; opens as a slide-in drawer when the hamburger
 *    in the navbar dispatches `toggle` via SidebarContext
 *
 * Hidden for:
 *  - Logged-out users
 *  - Routes inside /admin/* (AdminLayout owns those with its own sidebar)
 *  - Public routes (landing, login, register, pricing, auto-login, level test)
 *  - Full-screen routes (exercise/exam player)
 *
 * Admins/superadmins SEE this sidebar when they navigate to student pages
 * (e.g. /dashboard, /ejercicios) — only the actual /admin/* routes use the
 * separate AdminLayout chrome.
 */
export default function AppSidebar() {
  const { user, logout } = useAuth()
  const { progress } = useProgress()
  const { isOpen, close } = useSidebar()
  const location = useLocation()
  const navigate = useNavigate()

  if (!user) return null

  const path = location.pathname
  const hidden = (
    path === '/' ||
    path === '/login' ||
    path === '/registro' ||
    path === '/pricing' ||
    path === '/auto-login' ||
    path === '/test-de-nivel' ||
    path === '/niveau-test' ||
    /^\/admin(\/|$)/.test(path) ||
    /^\/ejercicio\//.test(path) ||
    /^\/pruefung\//.test(path) ||
    /^\/deutschc1(\/|$)/.test(path)
  )
  if (hidden) return null

  const handleLogout = () => {
    close()
    logout()
    navigate('/')
  }

  const handleNavClick = () => {
    haptics.tap()
    close()
  }

  // ─── Sidebar content (shared between desktop + mobile drawer) ──────
  const SidebarBody = ({ inDrawer = false }) => (
    <div className="h-full flex flex-col">
      {/* Drawer header (mobile only) */}
      {inDrawer && (
        <div className="px-5 pt-5 pb-3 flex items-center justify-between">
          <Link to="/dashboard" onClick={handleNavClick} className="flex items-center gap-2">
            <Logo size={32} />
            <span className="font-extrabold text-warm text-xl tracking-tight">Schule</span>
          </Link>
          <button
            onClick={close}
            aria-label="Menü schließen"
            className="p-1.5 rounded-lg hover:bg-muted text-muted-foreground"
          >
            <X size={18} />
          </button>
        </div>
      )}

      {/* User card */}
      <div className="mx-3 mb-3 rounded-xl border border-border bg-muted/30 p-3 flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-warm to-orange-600 flex items-center justify-center text-warm-foreground font-bold text-sm shrink-0">
          {user.name?.[0]?.toUpperCase() || 'S'}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-foreground truncate">{user.name}</p>
          <div className="flex items-center gap-1 text-xs text-warm font-bold">
            <Zap size={11} />
            {progress.xp || 0} XP · {user.level || 'A1'}
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="flex-1 overflow-y-auto px-3 space-y-0.5" aria-label="Hauptnavigation">
        {NAV_ITEMS.map(({ to, href, icon: Icon, label, external }) => {
          const active = !external && (path === to || path.startsWith(to + '/'))
          const className =
            'relative flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ' +
            (active
              ? 'bg-warm/15 text-warm font-bold'
              : 'text-muted-foreground hover:bg-muted hover:text-foreground')

          if (external) {
            return (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleNavClick}
                className={className}
              >
                <Icon size={18} strokeWidth={2} className="shrink-0" />
                <span className="flex-1">{label}</span>
                <ExternalLink size={12} className="opacity-60 shrink-0" />
              </a>
            )
          }

          return (
            <Link
              key={to}
              to={to}
              onClick={handleNavClick}
              aria-current={active ? 'page' : undefined}
              className={className}
            >
              {active && (
                <motion.span
                  layoutId="appsidebar-active"
                  transition={{ type: 'spring', damping: 25, stiffness: 350 }}
                  className="absolute left-0 top-1.5 bottom-1.5 w-1 bg-warm rounded-r-full"
                />
              )}
              <Icon size={18} strokeWidth={active ? 2.4 : 2} className="shrink-0" />
              <span>{label}</span>
            </Link>
          )
        })}

        <div className="my-3 mx-3 h-px bg-border" />

        {SECONDARY_ITEMS.map(({ to, icon: Icon, label }) => {
          const active = path === to || path.startsWith(to + '/')
          return (
            <Link
              key={to}
              to={to}
              onClick={handleNavClick}
              aria-current={active ? 'page' : undefined}
              className={
                'flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ' +
                (active
                  ? 'bg-warm/15 text-warm font-bold'
                  : 'text-muted-foreground hover:bg-muted hover:text-foreground')
              }
            >
              <Icon size={18} className="shrink-0" />
              <span>{label}</span>
            </Link>
          )
        })}
      </nav>

      {/* Footer: logout */}
      <div className="px-3 pb-4 pt-2 border-t border-border">
        <button
          type="button"
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-muted-foreground hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
        >
          <LogOut size={18} className="shrink-0" />
          <span>Abmelden</span>
        </button>
      </div>
    </div>
  )

  return (
    <>
      {/* Desktop: fixed left rail, 240px */}
      <aside
        className="hidden md:flex fixed left-0 top-16 bottom-0 w-60 z-30 flex-col bg-card border-r border-border pt-3"
        aria-label="Hauptnavigation"
      >
        <SidebarBody />
      </aside>

      {/* Mobile drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={close}
              className="md:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
              aria-hidden="true"
            />
            {/* Drawer */}
            <motion.aside
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 320 }}
              role="dialog"
              aria-modal="true"
              aria-label="Hauptnavigation"
              className="md:hidden fixed left-0 top-0 bottom-0 w-72 max-w-[85vw] z-50 bg-card border-r border-border shadow-2xl pt-safe"
            >
              <SidebarBody inDrawer />
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
