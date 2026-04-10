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

  // Only show during free-lessons phase
  const limit = subscription.freeLessonsLimit ?? 10
  const remaining = subscription.freeLessonsRemaining
  if (remaining === undefined || remaining === null) return null

  // No more free lessons left → user already sees the paywall, no banner needed
  if (remaining <= 0) return null

  const urgent = remaining <= 2

  return (
    <div className={`${urgent ? 'bg-red-500' : 'bg-gradient-to-r from-indigo-600 to-purple-600'} text-white text-center py-2 px-4 text-sm font-medium`}>
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 flex-wrap">
        <GraduationCap size={14} />
        <span>
          {remaining === 1
            ? `Du hast noch 1 von ${limit} kostenlosen Lektionen übrig.`
            : `Du hast noch ${remaining} von ${limit} kostenlosen Lektionen übrig.`}
        </span>
        <Link
          to="/pricing"
          className="inline-flex items-center gap-1 bg-white/20 hover:bg-white/30 px-3 py-0.5 rounded-full text-xs font-bold transition-colors"
        >
          <Zap size={12} /> Jetzt abonnieren
        </Link>
      </div>
    </div>
  )
}
