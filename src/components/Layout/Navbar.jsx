import React from 'react'
import { Link } from 'react-router-dom'
import { Moon, Sun, Zap, Search, Menu } from 'lucide-react'
import { useAuth } from '../../context/AuthContext'
import { useTheme } from '../../context/ThemeContext'
import { useProgress } from '../../context/ProgressContext'
import { useSidebar } from '../../context/SidebarContext'
import Tooltip from '../UI/Tooltip'

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

  return (
    <nav className="sticky top-0 z-30 bg-card/95 backdrop-blur-md border-b border-border shadow-sm pt-safe md:pl-60">
      <div className="px-4 sm:px-6 md:pl-6">
        <div className="flex items-center justify-between h-14 md:h-16">

          {/* Left: hamburger (mobile only) + logo (mobile only) */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              type="button"
              onClick={toggleSidebar}
              aria-label="Menü öffnen"
              className="p-2 -ml-1 rounded-lg hover:bg-muted text-muted-foreground hover:text-foreground transition-colors focus-visible:ring-2 focus-visible:ring-warm focus-visible:outline-none"
            >
              <Menu size={22} />
            </button>
            <Link to="/dashboard" className="flex items-center gap-2">
              <img src="/logo.svg" alt="Schule" className="w-8 h-8" />
              <span className="font-extrabold text-warm text-lg">Schule</span>
            </Link>
          </div>

          {/* Spacer on desktop — sidebar has the logo, so we need empty space */}
          <div className="hidden md:block flex-1" />

          {/* Right: utilities */}
          <div className="flex items-center gap-2">
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
