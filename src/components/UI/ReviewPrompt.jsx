import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, X, Send, Heart } from 'lucide-react'
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
 * Review prompt modal. Shows once per user after they've completed at least
 * 5 exercises and haven't already submitted a review.
 *
 * Props:
 *  - exerciseHistory: array from ProgressContext (used to check threshold)
 */
export default function ReviewPrompt({ exerciseHistory = [] }) {
  const { user, showToast } = useAuth()
  const [open, setOpen] = useState(false)
  const [rating, setRating] = useState(0)
  const [hovered, setHovered] = useState(0)
  const [comment, setComment] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (!user?.id) return
    if (exerciseHistory.length < 5) return

    const dismissedKey = `review_prompt_${user.id}`
    if (localStorage.getItem(dismissedKey)) return

    // Check backend for an existing review
    let cancelled = false
    fetch(`${API_URL}/api/reviews/me`, { headers: getAuthHeaders() })
      .then(r => r.json())
      .then(data => {
        if (cancelled) return
        if (data.review) {
          // Already reviewed — don't ask again
          localStorage.setItem(dismissedKey, '1')
          return
        }
        // Delay slightly so it doesn't feel intrusive
        setTimeout(() => !cancelled && setOpen(true), 1200)
      })
      .catch(() => {})
    return () => { cancelled = true }
  }, [user?.id, exerciseHistory.length])

  const dismiss = () => {
    if (user?.id) localStorage.setItem(`review_prompt_${user.id}`, '1')
    setOpen(false)
  }

  const submit = async () => {
    if (rating === 0 || submitting) return
    setSubmitting(true)
    try {
      const res = await fetch(`${API_URL}/api/reviews`, {
        method: 'POST',
        headers: getAuthHeaders(),
        body: JSON.stringify({ rating, comment: comment.trim() }),
      })
      if (res.ok) {
        if (user?.id) localStorage.setItem(`review_prompt_${user.id}`, '1')
        setDone(true)
        showToast?.('Danke für dein Feedback! 🙌', 'success')
        setTimeout(() => setOpen(false), 2000)
      } else {
        const j = await res.json().catch(() => ({}))
        showToast?.(j.error || 'Fehler beim Senden.', 'error')
      }
    } catch {
      showToast?.('Verbindungsfehler.', 'error')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-end sm:items-center justify-center p-3 sm:p-4"
          onClick={dismiss}
        >
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 40, opacity: 0 }}
            transition={{ type: 'spring', damping: 25 }}
            onClick={e => e.stopPropagation()}
            className="bg-card rounded-2xl shadow-2xl border border-border w-full max-w-md p-6 relative"
          >
            <button
              onClick={dismiss}
              className="absolute top-3 right-3 p-1.5 rounded-lg hover:bg-muted text-muted-foreground"
              aria-label="Schließen"
            >
              <X size={18} />
            </button>

            {done ? (
              <div className="text-center py-6">
                <div className="w-14 h-14 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-3">
                  <Heart size={28} className="text-success" />
                </div>
                <h3 className="font-extrabold text-lg text-foreground mb-1">Danke!</h3>
                <p className="text-sm text-muted-foreground">Dein Feedback hilft uns, besser zu werden.</p>
              </div>
            ) : (
              <>
                <div className="text-center mb-4">
                  <div className="text-3xl mb-2">⭐</div>
                  <h3 className="font-extrabold text-lg text-foreground mb-1">Wie findest du Schule?</h3>
                  <p className="text-sm text-muted-foreground">Deine Meinung hilft uns, die App zu verbessern.</p>
                </div>

                {/* Stars */}
                <div className="flex items-center justify-center gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map(n => {
                    const active = n <= (hovered || rating)
                    return (
                      <button
                        key={n}
                        type="button"
                        onMouseEnter={() => setHovered(n)}
                        onMouseLeave={() => setHovered(0)}
                        onClick={() => setRating(n)}
                        className="p-1 transition-transform hover:scale-110"
                        aria-label={`${n} Sterne`}
                      >
                        <Star
                          size={36}
                          className={active ? 'fill-warm text-warm' : 'text-muted-foreground/40'}
                        />
                      </button>
                    )
                  })}
                </div>

                {/* Comment */}
                <textarea
                  value={comment}
                  onChange={e => setComment(e.target.value.slice(0, 500))}
                  placeholder={rating >= 4
                    ? 'Was gefällt dir am meisten? (optional, wird vielleicht öffentlich angezeigt)'
                    : 'Wie können wir besser werden? (optional)'
                  }
                  rows={3}
                  className="input-field w-full resize-none text-sm mb-3"
                />
                <p className="text-[11px] text-muted-foreground text-right mb-4">{comment.length}/500</p>

                <div className="flex gap-2">
                  <button
                    onClick={dismiss}
                    className="flex-1 px-4 py-2.5 rounded-xl border border-border text-foreground text-sm font-semibold hover:bg-muted transition-colors"
                  >
                    Später
                  </button>
                  <button
                    onClick={submit}
                    disabled={rating === 0 || submitting}
                    className="flex-1 px-4 py-2.5 rounded-xl bg-warm text-warm-foreground text-sm font-bold hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-1.5"
                  >
                    <Send size={14} />
                    {submitting ? 'Senden…' : 'Senden'}
                  </button>
                </div>

                {rating >= 4 && (
                  <p className="text-[11px] text-muted-foreground text-center mt-3">
                    Bei 4+ Sternen erscheint dein Kommentar (mit Vorname) auf der Startseite.
                  </p>
                )}
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
