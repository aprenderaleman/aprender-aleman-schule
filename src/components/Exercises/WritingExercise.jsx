import React, { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Button from '../UI/Button'
import LoadingSpinner from '../UI/LoadingSpinner'
import { evaluateWriting } from '../../utils/ai'
import { AlertCircle, CheckCircle, Lightbulb, BookOpen, Star, ThumbsUp } from 'lucide-react'

export default function WritingExercise({ exercise, userName, userLevel, onComplete }) {
  const [text, setText] = useState('')
  const [feedback, setFeedback] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [submitted, setSubmitted] = useState(false)

  const wordCount = text.trim().split(/\s+/).filter(Boolean).length
  const meetsMinimum = wordCount >= (exercise.minWords || 20)

  const handleSubmit = useCallback(async () => {
    if (!meetsMinimum) return
    setLoading(true)
    setError(null)
    try {
      const result = await evaluateWriting(userName, userLevel, exercise.prompt, text)
      if (result) {
        setFeedback(result)
        setSubmitted(true)
        const score = Math.round((result.score / 10) * 100)
        onComplete({ score, feedback: result })
      } else {
        throw new Error('No feedback returned')
      }
    } catch (err) {
      setError('Die Bewertung konnte nicht geladen werden. Bitte versuche es erneut. (No se pudo evaluar tu texto.)')
      const fallbackScore = Math.min(100, Math.round((wordCount / (exercise.minWords * 1.5)) * 70))
      setSubmitted(true)
      onComplete({ score: fallbackScore, feedback: null })
    }
    setLoading(false)
  }, [text, userName, userLevel, exercise, meetsMinimum, wordCount, onComplete])

  return (
    <div className="space-y-5">

      <div className="bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20 rounded-2xl p-5 border border-pink-200 dark:border-pink-800">
        <div className="flex items-start gap-3">
          <BookOpen size={20} className="text-pink-500 mt-0.5 shrink-0" />
          <div>
            <p className="font-semibold text-gray-800 dark:text-gray-100 mb-2">Schreibaufgabe</p>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{exercise.prompt}</p>
            <p className="text-xs text-pink-500 font-semibold mt-2">Mindestens {exercise.minWords} Wörter</p>
          </div>
        </div>
      </div>

      {exercise.hints && exercise.hints.length > 0 && (
        <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-xl p-4 border border-yellow-200 dark:border-yellow-800">
          <div className="flex items-center gap-2 mb-2">
            <Lightbulb size={16} className="text-yellow-500" />
            <span className="text-xs font-bold text-yellow-700 dark:text-yellow-300 uppercase">Nützliche Ausdrücke</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {exercise.hints.map((hint, i) => (
              <button
                key={i}
                onClick={() => !submitted && setText(prev => prev + (prev ? ' ' : '') + hint)}
                disabled={submitted}
                className="text-xs bg-yellow-100 dark:bg-yellow-800/50 text-yellow-800 dark:text-yellow-200 px-2.5 py-1 rounded-lg hover:bg-yellow-200 transition-colors disabled:cursor-default"
              >
                {hint}
              </button>
            ))}
          </div>
        </div>
      )}

      <div>
        <textarea
          value={text}
          onChange={(e) => !submitted && setText(e.target.value)}
          disabled={submitted || loading}
          placeholder="Schreibe deinen Text hier auf Deutsch..."
          aria-label="Schreibbereich auf Deutsch"
          rows={8}
          className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:border-pink-400 outline-none transition-colors bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 placeholder-gray-400 resize-y text-sm leading-relaxed disabled:opacity-70"
        />
        <div className="flex justify-between items-center mt-1 px-1">
          <span className={`text-xs font-medium ${meetsMinimum ? 'text-green-600' : 'text-gray-400'}`}>
            {wordCount} / {exercise.minWords} Wörter
          </span>
          {meetsMinimum && <span className="text-xs text-green-500 font-semibold">Bereit zum Senden</span>}
        </div>
      </div>

      {loading && (
        <div className="flex flex-col items-center gap-3 py-6">
          <LoadingSpinner message="Der Lehrer korrigiert deine Antwort..." />
        </div>
      )}

      {error && (
        <div className="bg-red-50 dark:bg-red-900/30 border border-red-300 rounded-xl p-4 flex items-start gap-3">
          <AlertCircle size={18} className="text-red-500 shrink-0 mt-0.5" />
          <p className="text-sm text-red-700 dark:text-red-300">{error}</p>
        </div>
      )}

      {!submitted && !loading && (
        <Button onClick={handleSubmit} disabled={!meetsMinimum} variant="primary" className="w-full">
          Zur KI-Bewertung senden
        </Button>
      )}

      <AnimatePresence>
        {feedback && submitted && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >

            <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-5 text-white text-center">
              <p className="text-sm font-semibold opacity-90 mb-1">Deine Punktzahl</p>
              <p className="text-5xl font-extrabold">
                {feedback.score}
                <span className="text-2xl opacity-70">/10</span>
              </p>
              <p className="text-sm opacity-90 mt-2 italic">{feedback.overall_comment}</p>
            </div>

            {feedback.positive_aspects && (
              <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-xl p-4 border border-emerald-200 dark:border-emerald-800">
                <p className="font-bold text-emerald-700 dark:text-emerald-300 mb-2 flex items-center gap-2">
                  <ThumbsUp size={16} /> Das hast du gut gemacht
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{feedback.positive_aspects}</p>
              </div>
            )}

            {feedback.grammar_errors && feedback.grammar_errors.length > 0 && (
              <div className="bg-red-50 dark:bg-red-900/20 rounded-xl p-4 border border-red-200 dark:border-red-800">
                <p className="font-bold text-red-700 dark:text-red-300 mb-3 flex items-center gap-2">
                  <AlertCircle size={16} /> Grammatikfehler
                </p>
                <div className="space-y-3">
                  {feedback.grammar_errors.map((e, i) => (
                    <div key={i} className="text-sm bg-white dark:bg-gray-800 rounded-lg p-3 border border-red-100 dark:border-red-900">
                      <div className="flex items-start gap-2 flex-wrap mb-1">
                        <span className="line-through text-red-500 font-medium">{e.error}</span>
                        <span className="text-gray-400">&#8594;</span>
                        <span className="text-green-600 dark:text-green-400 font-bold">{e.correction}</span>
                      </div>
                      <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed mt-1">{e.explanation}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {feedback.vocabulary_suggestions && feedback.vocabulary_suggestions.length > 0 && (
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4 border border-blue-200 dark:border-blue-800">
                <p className="font-bold text-blue-700 dark:text-blue-300 mb-3 flex items-center gap-2">
                  <Star size={16} /> Wortschatz verbessern
                </p>
                <div className="space-y-3">
                  {feedback.vocabulary_suggestions.map((s, i) => (
                    <div key={i} className="text-sm bg-white dark:bg-gray-800 rounded-lg p-3 border border-blue-100 dark:border-blue-900">
                      <div className="flex items-start gap-2 flex-wrap mb-1">
                        <span className="text-gray-500 dark:text-gray-400 font-medium">{s.word}</span>
                        <span className="text-blue-400">&#8594;</span>
                        <span className="text-blue-600 dark:text-blue-300 font-bold">{s.better_alternative}</span>
                      </div>
                      <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed mt-1">{s.reason}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {feedback.structure_feedback && (
              <div className="bg-violet-50 dark:bg-violet-900/20 rounded-xl p-4 border border-violet-200 dark:border-violet-800">
                <p className="font-bold text-violet-700 dark:text-violet-300 mb-2 flex items-center gap-2">
                  <CheckCircle size={16} /> Textstruktur
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{feedback.structure_feedback}</p>
              </div>
            )}

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}