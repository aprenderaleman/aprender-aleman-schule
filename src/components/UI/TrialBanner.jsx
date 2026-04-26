import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { GraduationCap, Zap, AlertTriangle, X } from 'lucide-react'
import { useAuth } from '../../context/AuthContext'

// XP thresholds for progressive warnings
const SOFT_THRESHOLD   = 7000   // gentle nudge
const STRONG_THRESHOLD = 9000   // more prominent
const URGENT_THRESHOLD = 9500   // urgent + countdown
const HARD_LIMIT       = 10000

export default function TrialBanner() {
  const { user } = useAuth()
  const [dismissed7k, setDismissed7k] = useState(false)
  const [dismissed9k, setDismissed9k] = useState(false)

  // Reset dismissals if user crosses a new threshold
  useEffect(() => {
    if (!user?.id) return
    const key7 = `trial_dismissed_7k_${user.id}`
    const key9 = `trial_dismissed_9k_${user.id}`
    setDismissed7k(localStorage.getItem(key7) === '1')
    setDismissed9k(localStorage.getItem(key9) === '1')
  }, [user?.id])

  if (!user || !user.subscription) return null
  const { subscription } = user

  // SSO users or paid users don't see the banner
  if (subscription.ssoUser || subscription.paid) return null

  const limit = subscription.freeXpLimit ?? subscription.freeLessonsLimit ?? HARD_LIMIT
  const earned = subscription.xpEarned ?? subscription.lessonsPassed ?? 0
  const remaining = subscription.xpRemaining ?? subscription.freeLessonsRemaining

  if (remaining === undefined || remaining === null) return null
  // Out of free XP → user already sees the paywall, no banner needed
  if (remaining <= 0) return null

  const progress = Math.min(100, Math.round((earned / limit) * 100))

  // Determine which tier of warning to show
  let tier = null
  if (earned >= URGENT_THRESHOLD) tier = 'urgent'
  else if (earned >= STRONG_THRESHOLD && !dismissed9k) tier = 'strong'
  else if (earned >= SOFT_THRESHOLD && !dismissed7k) tier = 'soft'

  if (!tier) return null

  const dismiss = () => {
    if (tier === 'soft') {
      localStorage.setItem(`trial_dismissed_7k_${user.id}`, '1')
      setDismissed7k(true)
    } else if (tier === 'strong') {
      localStorage.setItem(`trial_dismissed_9k_${user.id}`, '1')
      setDismissed9k(true)
    }
    // Urgent banner cannot be dismissed
  }

  const styles = {
    soft: {
      bg: 'bg-gradient-to-r from-indigo-600 to-purple-600',
      icon: GraduationCap,
      cta: 'Pläne ansehen',
    },
    strong: {
      bg: 'bg-gradient-to-r from-amber-500 to-orange-600',
      icon: Zap,
      cta: 'Jetzt abonnieren',
    },
    urgent: {
      bg: 'bg-gradient-to-r from-red-600 to-rose-700',
      icon: AlertTriangle,
      cta: 'Plan wählen',
    },
  }
  const cfg = styles[tier]
  const Icon = cfg.icon

  return (
    <AnimatePresence>
      <motion.div
        key={tier}
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -40, opacity: 0 }}
        className={`${cfg.bg} text-white text-xs sm:text-sm font-medium`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-4 py-2.5">
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <Icon size={16} className="shrink-0" />

            {tier === 'soft' && (
              <span>
                Du hast schon <strong>{earned.toLocaleString('de-DE')} XP</strong> erreicht — gut gemacht! Noch <strong>{remaining.toLocaleString('de-DE')} XP</strong> kostenlos.
              </span>
            )}

            {tier === 'strong' && (
              <span>
                ⚡ Nur noch <strong>{remaining.toLocaleString('de-DE')} XP</strong> kostenlos. Sichere dir jetzt deinen Zugang für nur 15&thinsp;€/Monat.
              </span>
            )}

            {tier === 'urgent' && (
              <div className="flex items-center gap-3 flex-wrap justify-center">
                <span className="font-bold">
                  Letzte {remaining.toLocaleString('de-DE')} XP gratis!
                </span>
                <div className="flex items-center gap-2 min-w-[180px]">
                  <div className="flex-1 h-2 bg-white/20 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${progress}%` }}
                      transition={{ duration: 0.6 }}
                      className="h-full bg-white"
                    />
                  </div>
                  <span className="text-[11px] font-bold whitespace-nowrap">{progress}%</span>
                </div>
              </div>
            )}

            <Link
              to="/pricing"
              className="inline-flex items-center gap-1 bg-white/20 hover:bg-white/30 px-3 py-1.5 rounded-full text-xs font-bold transition-colors shrink-0"
            >
              <Zap size={14} /> {cfg.cta}
            </Link>

            {tier !== 'urgent' && (
              <button
                onClick={dismiss}
                className="text-white/70 hover:text-white shrink-0"
                aria-label="Hinweis ausblenden"
              >
                <X size={14} />
              </button>
            )}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
