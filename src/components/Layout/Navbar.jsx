import React from 'react'
import { Link } from 'react-router-dom'
import { Moon, Sun, Zap, Search, Menu } from 'lucide-react'
import { useAuth } from '../../context/AuthContext'
import { useTheme } from '../../context/ThemeContext'
import { useProgress } from '../../context/ProgressContext'
import { useSidebar } from '../../context/SidebarContext'
import Tooltip from '../UI/Tooltip'
import Logo from '../UI/Logo'
import ReferralButton from '../Referral/ReferralButton'

const LEVEL_XP = { A1: 500, A2: 1000, B1: 2000, B2: 3500, C1: 5000 }

/**
 * Top bar — slim header used together with AppSidebar.
 *
 *  - Mobile (< md): hamburger button + logo + XP + dark mode toggle
 *  - Desktop (md+): no logo or nav (the sidebar has those) — just utilities
 *    on the right (Cmd+K trigger, XP badge, dark mode toggle)
 */
export default function Navbar() {
  const { user } = useAuth()
  const { darkMode, toggleDarkMode } = useTheme()
  const { progress } = useProgress()
  const { toggle: toggleSidebar } = useSidebar()

  if (!user) return null

  const xp = progress.xp || 0
  const level = user.level || 'A1'
  const levelXP = LEVEL_XP[level] || 500
  const levelPct = Math.min(100, Math.round((xp / levelXP) * 100))

  return (
    <nav className="sticky top-0 z-40 bg-card/95 backdrop-blur-md border-b border-border shadow-sm pt-safe">
      <div className="px-4 sm:px-6">
        <div className="flex items-center gap-3 md:gap-6 h-14 md:h-16">

          {/* Left: hamburger (mobile) + brand */}
          <button
            type="button"
            onClick={toggleSidebar}
            aria-label="Menü öffnen"
            className="md:hidden p-2 -ml-1 rounded-lg hover:bg-muted text-muted-foreground hover:text-foreground transition-colors focus-visible:ring-2 focus-visible:ring-warm focus-visible:outline-none"
          >
            <Menu size={22} />
          </button>
          <Link to="/dashboard" className="flex items-center gap-2 shrink-0">
            <Logo size={28} className="md:hidden" />
            <Logo size={32} className="hidden md:inline-flex" />
            <span className="font-extrabold text-warm text-lg md:text-xl leading-tight">
              SCHULE
              <span className="hidden lg:inline text-foreground/70 font-semibold text-xs ml-2">
                — Dein Online-Klassenraum
              </span>
            </span>
          </Link>

          {/* Level progress (desktop) */}
          <Tooltip content={`${xp} / ${levelXP} XP zum Abschluss von Niveau ${level}`} side="bottom">
            <div className="hidden md:flex items-center gap-3 flex-1 max-w-md">
              <span className="shrink-0 px-2 py-0.5 rounded-md bg-warm/15 text-warm text-xs font-extrabold tracking-wide">
                {level}
              </span>
              <div className="flex-1 h-2 rounded-full bg-muted overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-warm to-orange-600 rounded-full transition-all"
                  style={{ width: `${levelPct}%` }}
                />
              </div>
              <span className="shrink-0 text-xs font-semibold text-muted-foreground tabular-nums">
                {xp} / {levelXP}
              </span>
            </div>
          </Tooltip>

          {/* Right: utilities */}
          <div className="flex items-center gap-2 ml-auto">
            <ReferralButton />
            {/* Cmd+K trigger — desktop only */}
            <Tooltip content="Befehl ausführen" shortcut="⌘ K">
              <button
                type="button"
                onClick={() => {
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
              <div className="flex items-center gap-1 bg-warm/15 text-warm px-2.5 sm:px-3 py-1.5 rounded-full text-xs sm:text-sm font-bold">
                <Zap size={13} />
                <span>{progress.xp || 0}</span>
                <span className="hidden sm:inline">XP</span>
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
          </div>
        </div>
      </div>
    </nav>
  )
}
