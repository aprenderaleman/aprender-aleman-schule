import React from 'react'
import { Link } from 'react-router-dom'
import { GraduationCap, Zap } from 'lucide-react'
import { useAuth } from '../../context/AuthContext'

export default function TrialBanner() {
  const { user } = useAuth()

  if (!user || !user.subscription) return null

  const { subscription } = user

  // SSO users or paid users don't see banner
  if (subscription.ssoUser || subscription.paid) return null

  // XP-based trial: user keeps access until they reach the XP limit
  const limit = subscription.freeXpLimit ?? subscription.freeLessonsLimit ?? 10000
  const earned = subscription.xpEarned ?? subscription.lessonsPassed ?? 0
  const remaining = subscription.xpRemaining ?? subscription.freeLessonsRemaining
  if (remaining === undefined || remaining === null) return null

  // No more free XP left → user already sees the paywall, no banner needed
  if (remaining <= 0) return null

  const progress = Math.min(100, Math.round((earned / limit) * 100))
  const urgent = remaining <= 500

  return (
    <div className={`${urgent ? 'bg-red-500' : 'bg-gradient-to-r from-indigo-600 to-purple-600'} text-white text-center py-2.5 px-3 sm:px-4 text-xs sm:text-sm font-medium`}>
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 flex-wrap">
        <GraduationCap size={16} className="shrink-0" />
        <span>
          Kostenlose Testphase: <strong>{earned.toLocaleString('de-DE')}</strong> / {limit.toLocaleString('de-DE')} XP ({progress}%)
        </span>
        <Link
          to="/pricing"
          className="inline-flex items-center gap-1 bg-white/20 hover:bg-white/30 px-3 py-1.5 rounded-full text-xs font-bold transition-colors"
        >
          <Zap size={14} /> Abonnieren
        </Link>
      </div>
    </div>
  )
}
