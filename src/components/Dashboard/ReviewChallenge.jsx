import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Star, Gift, Sparkles } from 'lucide-react'
import { useAuth } from '../../context/AuthContext'

const API_URL = import.meta.env.VITE_API_URL || ''

function getAuthHeaders() {
  const token = localStorage.getItem('auth_token')
  return {
    'Content-Type': 'application/json',
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  }
}

/**
 * Dashboard CTA shown to trial users who haven't left a review yet.
 * Clicking the card opens the existing ReviewPrompt by clearing its
 * dismissal flag and dispatching a custom event.
 */
export default function ReviewChallenge() {
  const { user } = useAuth()
  const [hasReview, setHasReview] = useState(null) // null = loading

  useEffect(() => {
    if (!user?.id) return
    let cancelled = false
    fetch(`${API_URL}/api/reviews/me`, { headers: getAuthHeaders() })
      .then(r => r.json())
      .then(data => { if (!cancelled) setHasReview(!!data?.review) })
      .catch(() => { if (!cancelled) setHasReview(false) })
    return () => { cancelled = true }
  }, [user?.id])

  // Only for trial users that haven't reviewed yet
  const sub = user?.subscription
  const onTrial = sub && !sub.paid && !sub.ssoUser
  if (!onTrial) return null
  if (hasReview !== false) return null

  const openReview = () => {
    if (user?.id) localStorage.removeItem(`review_prompt_${user.id}`)
    window.dispatchEvent(new CustomEvent('open-review-prompt'))
  }

  return (
    <motion.button
      type="button"
      onClick={openReview}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative overflow-hidden w-full text-left rounded-2xl bg-gradient-to-br from-violet-600 via-fuchsia-600 to-pink-600 p-5 sm:p-6 shadow-lg mb-6 hover:shadow-xl transition-shadow"
    >
      <div className="absolute -top-16 -right-16 w-48 h-48 bg-white/10 rounded-full blur-2xl" />
      <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-white/5 rounded-full blur-2xl" />

      <div className="relative flex items-center gap-4">
        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-white/15 backdrop-blur-sm flex items-center justify-center border border-white/20 shrink-0">
          <Star size={24} className="text-yellow-200 fill-yellow-200" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="inline-flex items-center gap-1.5 bg-white/15 text-white/90 text-[10px] sm:text-xs font-bold px-2 py-0.5 rounded-full uppercase tracking-wider mb-1">
            <Sparkles size={11} /> Bonus
          </div>
          <h3 className="text-white font-extrabold text-base sm:text-lg leading-tight">
            Bewerte Schule und hol dir <span className="text-yellow-200">+2.000 XP</span> gratis
          </h3>
          <p className="text-white/80 text-xs sm:text-sm mt-0.5">
            Eine kurze Bewertung — und dein kostenloses Limit steigt von 10.000 auf 12.000 XP.
          </p>
        </div>
        <div className="hidden sm:flex w-11 h-11 rounded-full bg-white text-fuchsia-700 items-center justify-center shrink-0 shadow-md">
          <Gift size={20} />
        </div>
      </div>
    </motion.button>
  )
}
