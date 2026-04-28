import React, { useEffect, useState } from 'react'
import { Command } from 'cmdk'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import {
  Search, Home, BookOpen, Layers, GraduationCap, BarChart2, User,
  MessageCircle, Sun, Moon, LogOut, CreditCard, Trophy, Sparkles,
  Settings, Star,
} from 'lucide-react'
import { useAuth } from '../../context/AuthContext'
import { useTheme } from '../../context/ThemeContext'
import { haptics } from '../../utils/haptics'

/**
 * Native-style command palette (Cmd+K / Ctrl+K).
 * Fuzzy-search across navigation, actions, and settings.
 */
export default function CommandPalette() {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()
  const { user, logout } = useAuth()
  const { darkMode, toggleDarkMode } = useTheme()

  // Global Cmd+K / Ctrl+K toggle
  useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setOpen(o => !o)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const run = (fn) => {
    haptics.tap()
    setOpen(false)
    // Defer to allow palette to close before navigating
    setTimeout(fn, 0)
  }

  const isAdmin = user?.role === 'admin' || user?.role === 'superadmin'

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm flex items-start justify-center pt-[15vh] px-4"
          onClick={() => setOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.96, y: -8, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.98, opacity: 0 }}
            transition={{ type: 'spring', damping: 28, stiffness: 380 }}
            onClick={e => e.stopPropagation()}
            className="w-full max-w-xl bg-card rounded-2xl shadow-2xl border border-border overflow-hidden"
          >
            <Command label="Befehl ausführen">
              <div className="flex items-center gap-3 px-4 py-3 border-b border-border">
                <Search size={18} className="text-muted-foreground shrink-0" />
                <Command.Input
                  autoFocus
                  placeholder="Suchen oder Befehl ausführen…"
                  className="flex-1 bg-transparent outline-none text-foreground text-base placeholder:text-muted-foreground"
                />
                <kbd className="hidden sm:inline-flex items-center px-2 py-0.5 text-[11px] font-bold text-muted-foreground bg-muted rounded border border-border">
                  ESC
                </kbd>
              </div>

              <Command.List className="max-h-[60vh] overflow-y-auto p-2">
                <Command.Empty className="text-center py-8 text-sm text-muted-foreground">
                  Keine Treffer
                </Command.Empty>

                {!isAdmin && user && (
                  <Command.Group heading="Navigation" className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground px-2 py-1.5">
                    <Item icon={Home}        label="Dashboard"      shortcut="g d" onSelect={() => run(() => navigate('/dashboard'))} />
                    <Item icon={BookOpen}    label="Übungen"        shortcut="g e" onSelect={() => run(() => navigate('/ejercicios'))} />
                    <Item icon={Layers}      label="Karteikarten"   shortcut="g k" onSelect={() => run(() => navigate('/flashcards'))} />
                    <Item icon={GraduationCap} label="Prüfungen"    shortcut="g p" onSelect={() => run(() => navigate('/pruefungen'))} />
                    <Item icon={BarChart2}   label="Fortschritt"    shortcut="g f" onSelect={() => run(() => navigate('/progreso'))} />
                    <Item icon={Trophy}      label="Erfolge"                       onSelect={() => run(() => navigate('/logros'))} />
                    <Item icon={User}        label="Profil"         shortcut="g u" onSelect={() => run(() => navigate('/perfil'))} />
                  </Command.Group>
                )}

                {isAdmin && (
                  <Command.Group heading="Admin" className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground px-2 py-1.5">
                    <Item icon={Home}      label="Admin Dashboard" onSelect={() => run(() => navigate('/admin'))} />
                    <Item icon={User}      label="Schüler"         onSelect={() => run(() => navigate('/admin/usuarios'))} />
                    <Item icon={CreditCard} label="Finanzen"       onSelect={() => run(() => navigate('/admin/finanzen'))} />
                    <Item icon={Star}      label="Bewertungen"     onSelect={() => run(() => navigate('/admin/bewertungen'))} />
                  </Command.Group>
                )}

                {user && (
                  <Command.Group heading="Aktionen" className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground px-2 py-1.5 mt-1">
                    <Item icon={MessageCircle} label="Hans öffnen" shortcut="⌘ /" onSelect={() => run(() => {
                      // Open the chatbot — find its floating button and click it
                      document.querySelector('[aria-label="Chat öffnen"]')?.click()
                    })} />
                    <Item icon={Sparkles}      label="Zufallsübung starten" onSelect={() => run(() => navigate('/ejercicios'))} />
                    <Item icon={CreditCard}    label="Abonnement / Pricing" onSelect={() => run(() => navigate('/pricing'))} />
                  </Command.Group>
                )}

                <Command.Group heading="Einstellungen" className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground px-2 py-1.5 mt-1">
                  <Item
                    icon={darkMode ? Sun : Moon}
                    label={darkMode ? 'Hellen Modus aktivieren' : 'Dunklen Modus aktivieren'}
                    shortcut="⌘ ⇧ L"
                    onSelect={() => run(() => toggleDarkMode())}
                  />
                  {user && (
                    <Item icon={LogOut} label="Abmelden" onSelect={() => run(() => { logout(); navigate('/') })} />
                  )}
                </Command.Group>
              </Command.List>

              <div className="hidden sm:flex items-center justify-between px-4 py-2 border-t border-border bg-muted/30 text-[11px] text-muted-foreground">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1">
                    <Kbd>↑</Kbd><Kbd>↓</Kbd> Navigieren
                  </span>
                  <span className="flex items-center gap-1">
                    <Kbd>↵</Kbd> Auswählen
                  </span>
                </div>
                <span className="flex items-center gap-1">
                  <Kbd>{navigator.platform.includes('Mac') ? '⌘' : 'Ctrl'}</Kbd><Kbd>K</Kbd> Öffnen
                </span>
              </div>
            </Command>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function Item({ icon: Icon, label, shortcut, onSelect }) {
  return (
    <Command.Item
      value={label}
      onSelect={onSelect}
      className="flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer text-sm text-foreground data-[selected=true]:bg-warm/15 data-[selected=true]:text-foreground transition-colors"
    >
      {Icon && <Icon size={16} className="text-muted-foreground shrink-0" />}
      <span className="flex-1">{label}</span>
      {shortcut && (
        <span className="flex items-center gap-1">
          {shortcut.split(' ').map((k, i) => <Kbd key={i}>{k}</Kbd>)}
        </span>
      )}
    </Command.Item>
  )
}

function Kbd({ children }) {
  return (
    <kbd className="inline-flex items-center justify-center min-w-[1.25rem] h-5 px-1 text-[10px] font-bold text-muted-foreground bg-muted rounded border border-border">
      {children}
    </kbd>
  )
}
