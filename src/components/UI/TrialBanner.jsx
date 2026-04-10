import React from 'react'
import { Link } from 'react-router-dom'
import { Clock, Zap } from 'lucide-react'
import { useAuth } from '../../context/AuthContext'

export default function TrialBanner() {
  const { user } = useAuth()

  if (!user || !user.subscription) return null

  const { subscription } = user

  // SSO users or paid users don't see banner
  if (subscription.ssoUser || subscription.paid) return null

  // Only show for trialing users
  if (subscription.status !== 'trialing') return null

  const trialEnd = new Date(subscription.trialEndsAt)
  const now = new Date()
  const daysLeft = Math.max(0, Math.ceil((trialEnd - now) / (1000 * 60 * 60 * 24)))

  if (daysLeft <= 0) return null

  const urgent = daysLeft <= 2

  return (
    <div className={`${urgent ? 'bg-red-500' : 'bg-gradient-to-r from-orange-500 to-amber-500'} text-white text-center py-2 px-4 text-sm font-medium`}>
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 flex-wrap">
        <Clock size={14} />
        <span>
          {daysLeft === 1
            ? 'Du hast noch 1 Tag kostenlose Testphase.'
            : `Du hast noch ${daysLeft} Tage kostenlose Testphase.`}
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
