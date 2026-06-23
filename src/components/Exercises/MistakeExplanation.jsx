import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Lightbulb, Loader2 } from 'lucide-react'

const API_URL = import.meta.env.VITE_API_URL || ''

function getAuthHeaders() {
  const token = localStorage.getItem('auth_token')
  return {
    'Content-Type': 'application/json',
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  }
}

/**
 * Inline "why was this wrong?" explainer.
 *
 * Fires POST /api/ai/explain-mistake on mount. The backend memoises by
 * (exerciseId, qIndex, userAnswer, correctAnswer) so identical wrong
 * answers from other students return instantly with no API cost.
 *
 * Renders nothing if the call fails — the surrounding "Richtig: X" line
 * is still useful on its own, so a flaky network shouldn't show an error.
 */
export default function MistakeExplanation({
  exerciseId,
  qIndex,
  level,
  question,
  userAnswer,
  correctAnswer,
  context, // optional text/transcript to ground the explanation
}) {
  const [state, setState] = useState('loading') // loading | done | failed
  const [text, setText] = useState('')

  useEffect(() => {
    let cancelled = false
    async function run() {
      try {
        const res = await fetch(`${API_URL}/api/ai/explain-mistake`, {
          method: 'POST',
          headers: getAuthHeaders(),
          body: JSON.stringify({
            exerciseId, qIndex, level,
            question, userAnswer, correctAnswer, context,
          }),
        })
        if (!res.ok) throw new Error('explain failed')
        const json = await res.json()
        if (cancelled) return
        setText(json.explanation || '')
        setState('done')
      } catch {
        if (!cancelled) setState('failed')
      }
    }
    run()
    return () => { cancelled = true }
  }, [exerciseId, qIndex, userAnswer, correctAnswer])

  if (state === 'failed') return null

  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      className="mt-3 rounded-lg bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 p-3"
      role="status"
    >
      <div className="flex items-start gap-2">
        <Lightbulb size={16} className="text-amber-500 shrink-0 mt-0.5" />
        <div className="flex-1 min-w-0">
          {state === 'loading' ? (
            <p className="text-xs text-amber-700 dark:text-amber-300 flex items-center gap-1.5">
              <Loader2 size={12} className="animate-spin" />
              Erklärung wird vorbereitet …
            </p>
          ) : (
            <p className="text-sm text-amber-900 dark:text-amber-100 leading-relaxed whitespace-pre-wrap">
              {text}
            </p>
          )}
        </div>
      </div>
    </motion.div>
  )
}
