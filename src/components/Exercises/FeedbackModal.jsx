import React, { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { X, AlertCircle, CheckCircle, Star, ThumbsUp, Lightbulb } from 'lucide-react'

/**
 * Muestra el feedback estructurado (score + fallos + sugerencias) que
 * devuelve Haiku para writing/speaking. Se usa desde el visor de historial
 * en Fortschritt para que el alumno pueda repasar sus errores viejos.
 *
 * `feedback` es el JSON persistido en schule_exercise_results.feedback.
 */
export default function FeedbackModal({ open, onClose, feedback, title }) {
  useEffect(() => {
    if (!open) return
    const onEsc = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onEsc)
    return () => window.removeEventListener('keydown', onEsc)
  }, [open, onClose])

  if (!feedback) return null

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm flex items-start justify-center p-3 sm:p-6 overflow-y-auto"
          onClick={onClose}
        >
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 30, opacity: 0 }}
            onClick={e => e.stopPropagation()}
            className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 w-full max-w-lg my-auto"
          >
            <div className="sticky top-0 z-10 flex items-center justify-between px-5 py-3 bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 rounded-t-2xl">
              <h3 className="font-bold text-gray-800 dark:text-gray-100 truncate">
                {title || 'Feedback'}
              </h3>
              <button
                onClick={onClose}
                aria-label="Cerrar"
                className="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500"
              >
                <X size={16} />
              </button>
            </div>

            <div className="p-5 space-y-4">
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-4 text-white text-center">
                <p className="text-xs font-semibold opacity-90 mb-1">Punktzahl</p>
                <p className="text-4xl font-extrabold">
                  {feedback.score}
                  <span className="text-xl opacity-70">/10</span>
                </p>
                {feedback.overall_comment && (
                  <p className="text-xs opacity-90 mt-2 italic">{feedback.overall_comment}</p>
                )}
              </div>

              {feedback.positive_aspects && (
                <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-xl p-4 border border-emerald-200 dark:border-emerald-800">
                  <p className="font-bold text-emerald-700 dark:text-emerald-300 mb-2 flex items-center gap-2 text-sm">
                    <ThumbsUp size={14} /> Das hast du gut gemacht
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{feedback.positive_aspects}</p>
                </div>
              )}

              {feedback.grammar_errors?.length > 0 && (
                <div className="bg-red-50 dark:bg-red-900/20 rounded-xl p-4 border border-red-200 dark:border-red-800">
                  <p className="font-bold text-red-700 dark:text-red-300 mb-3 flex items-center gap-2 text-sm">
                    <AlertCircle size={14} /> Grammatikfehler
                  </p>
                  <div className="space-y-2">
                    {feedback.grammar_errors.map((e, i) => (
                      <div key={i} className="text-sm bg-white dark:bg-gray-800 rounded-lg p-3 border border-red-100 dark:border-red-900">
                        <div className="flex items-start gap-2 flex-wrap mb-1">
                          <span className="line-through text-red-500 font-medium">{e.error}</span>
                          <span className="text-gray-400">→</span>
                          <span className="text-green-600 dark:text-green-400 font-bold">{e.correction}</span>
                        </div>
                        {e.explanation && (
                          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{e.explanation}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {feedback.vocabulary_suggestions?.length > 0 && (
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4 border border-blue-200 dark:border-blue-800">
                  <p className="font-bold text-blue-700 dark:text-blue-300 mb-3 flex items-center gap-2 text-sm">
                    <Star size={14} /> Wortschatz verbessern
                  </p>
                  <div className="space-y-2">
                    {feedback.vocabulary_suggestions.map((s, i) => (
                      <div key={i} className="text-sm bg-white dark:bg-gray-800 rounded-lg p-3 border border-blue-100 dark:border-blue-900">
                        <div className="flex items-start gap-2 flex-wrap mb-1">
                          <span className="text-gray-500 dark:text-gray-400 font-medium">{s.word}</span>
                          <span className="text-blue-400">→</span>
                          <span className="text-blue-600 dark:text-blue-300 font-bold">{s.better_alternative}</span>
                        </div>
                        {s.reason && (
                          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{s.reason}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {feedback.pronunciation_tips?.length > 0 && (
                <div className="bg-amber-50 dark:bg-amber-900/20 rounded-xl p-4 border border-amber-200 dark:border-amber-800">
                  <p className="font-bold text-amber-700 dark:text-amber-300 mb-2 flex items-center gap-2 text-sm">
                    <Lightbulb size={14} /> Aussprache
                  </p>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1 list-disc list-inside">
                    {feedback.pronunciation_tips.map((t, i) => (<li key={i}>{t}</li>))}
                  </ul>
                </div>
              )}

              {(feedback.structure_feedback || feedback.fluency_feedback) && (
                <div className="bg-violet-50 dark:bg-violet-900/20 rounded-xl p-4 border border-violet-200 dark:border-violet-800">
                  <p className="font-bold text-violet-700 dark:text-violet-300 mb-2 flex items-center gap-2 text-sm">
                    <CheckCircle size={14} /> {feedback.fluency_feedback ? 'Sprachfluss' : 'Textstruktur'}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    {feedback.fluency_feedback || feedback.structure_feedback}
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  )
}
