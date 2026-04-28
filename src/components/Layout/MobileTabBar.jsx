import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Home, BookOpen, Layers, GraduationCap, User } from 'lucide-react'
import { useAuth } from '../../context/AuthContext'
import { haptics } from '../../utils/haptics'

const tabs = [
  { to: '/dashboard',  icon: Home,           label: 'Start' },
  { to: '/ejercicios', icon: BookOpen,       label: 'Übungen' },
  { to: '/flashcards', icon: Layers,         label: 'Karten' },
  { to: '/pruefungen', icon: GraduationCap,  label: 'Prüfungen' },
  { to: '/perfil',     icon: User,           label: 'Profil' },
]

/**
 * Native-style bottom tab bar. Visible only on small viewports (md breakpoint
 * is the cutoff). Sits fixed at the bottom, respects safe-area-inset, hides
 * itself when no user is logged in.
 */
export default function MobileTabBar() {
  const { user } = useAuth()
  const location = useLocation()

  if (!user) return null

  // Hide on full-screen experiences (exercise player, exam player) where the
  // tab bar would steal vertical space and break immersion.
  const hidden = (
    /^\/ejercicio\//.test(location.pathname) ||
    /^\/pruefung\//.test(location.pathname) ||
    /^\/auto-login/.test(location.pathname)
  )
  if (hidden) return null

  return (
    <>
      {/* Spacer keeps content from sitting underneath the bar */}
      <div className="md:hidden h-16 pb-safe" aria-hidden="true" />

      <nav
        className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-card/95 backdrop-blur-md border-t border-border pb-safe shadow-[0_-4px_20px_-6px_rgba(0,0,0,0.1)]"
        aria-label="Hauptnavigation"
      >
        <ul className="flex items-stretch h-16">
          {tabs.map(({ to, icon: Icon, label }) => {
            const active = location.pathname === to || location.pathname.startsWith(to + '/')
            return (
              <li key={to} className="flex-1">
                <Link
                  to={to}
                  onClick={() => haptics.tap()}
                  aria-label={label}
                  aria-current={active ? 'page' : undefined}
                  className="relative h-full flex flex-col items-center justify-center gap-0.5 tap"
                >
                  {active && (
                    <motion.span
                      layoutId="tabbar-active"
                      transition={{ type: 'spring', damping: 25, stiffness: 350 }}
                      className="absolute top-0 inset-x-3 h-0.5 bg-warm rounded-b-full"
                    />
                  )}
                  <Icon
                    size={22}
                    strokeWidth={active ? 2.5 : 2}
                    className={active ? 'text-warm' : 'text-muted-foreground'}
                  />
                  <span
                    className={
                      'text-[10px] font-semibold tracking-tight ' +
                      (active ? 'text-warm' : 'text-muted-foreground')
                    }
                  >
                    {label}
                  </span>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </>
  )
}
