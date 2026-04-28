import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Home, BookOpen, Layers, GraduationCap, BarChart2, User, MessageCircle } from 'lucide-react'
import { useAuth } from '../../context/AuthContext'
import Tooltip from '../UI/Tooltip'

const items = [
  { to: '/dashboard',  icon: Home,           label: 'Dashboard',     shortcut: 'g d' },
  { to: '/ejercicios', icon: BookOpen,       label: 'Übungen',       shortcut: 'g e' },
  { to: '/flashcards', icon: Layers,         label: 'Karteikarten',  shortcut: 'g k' },
  { to: '/pruefungen', icon: GraduationCap,  label: 'Prüfungen',     shortcut: 'g p' },
  { to: '/progreso',   icon: BarChart2,      label: 'Fortschritt',   shortcut: 'g f' },
  { to: '/perfil',     icon: User,           label: 'Profil',        shortcut: 'g u' },
]

/**
 * Persistent left rail for power users — only visible on xl+ screens.
 * Doesn't replace the topbar (Navbar); it complements it for one-click
 * navigation without going through the topbar links.
 *
 * Hidden on:
 *   - Mobile (use MobileTabBar)
 *   - Auth pages, landing, pricing (no chrome)
 *   - Full-screen routes (exercise/exam player)
 */
export default function DesktopRail() {
  const { user } = useAuth()
  const location = useLocation()

  if (!user) return null
  if (user.role === 'admin' || user.role === 'superadmin') return null // admin has its own sidebar

  const path = location.pathname
  const hidden = (
    path === '/' ||
    path === '/login' ||
    path === '/registro' ||
    path === '/pricing' ||
    path === '/auto-login' ||
    /^\/ejercicio\//.test(path) ||
    /^\/pruefung\//.test(path)
  )
  if (hidden) return null

  return (
    <aside
      className="hidden xl:flex fixed left-0 top-0 bottom-0 w-14 z-30 flex-col items-center gap-1 py-4 bg-card/80 backdrop-blur-md border-r border-border pt-safe"
      aria-label="Schnellnavigation"
    >
      <Link to="/dashboard" className="mb-3" aria-label="Schule home">
        <img src="/logo.svg" alt="" className="w-9 h-9" aria-hidden="true" />
      </Link>

      <nav className="flex flex-col gap-1 flex-1">
        {items.map(({ to, icon: Icon, label, shortcut }) => {
          const active = path === to || path.startsWith(to + '/')
          return (
            <Tooltip key={to} content={label} shortcut={shortcut} side="right">
              <Link
                to={to}
                aria-label={label}
                aria-current={active ? 'page' : undefined}
                className="relative w-10 h-10 flex items-center justify-center rounded-xl tap focus-visible:ring-2 focus-visible:ring-warm focus-visible:outline-none transition-colors"
              >
                {active && (
                  <motion.span
                    layoutId="rail-active"
                    transition={{ type: 'spring', damping: 25, stiffness: 350 }}
                    className="absolute inset-0 bg-warm/15 rounded-xl"
                  />
                )}
                <Icon
                  size={20}
                  strokeWidth={active ? 2.4 : 2}
                  className={active ? 'text-warm relative z-10' : 'text-muted-foreground hover:text-foreground relative z-10'}
                />
              </Link>
            </Tooltip>
          )
        })}
      </nav>

      <Tooltip content="Hans öffnen" shortcut="⌘ /" side="right">
        <button
          onClick={() => document.querySelector('[aria-label="Chat öffnen"]')?.click()}
          aria-label="Hans öffnen"
          className="w-10 h-10 flex items-center justify-center rounded-xl bg-warm/15 hover:bg-warm/25 text-warm tap"
        >
          <MessageCircle size={20} />
        </button>
      </Tooltip>
    </aside>
  )
}
