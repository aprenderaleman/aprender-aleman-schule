import React, { useState, useCallback, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Button from '../UI/Button'
import LoadingSpinner from '../UI/LoadingSpinner'
import { evaluateWriting } from '../../utils/ai'
import { AlertCircle, CheckCircle, Lightbulb, BookOpen, Star, ThumbsUp } from 'lucide-react'

// Clave de autosave por (userId, exerciseId). Si el alumno comparte navegador
// con alguien, su userId cambia y no leemos el borrador del otro. Si no hay
// user, cae a 'anon' — mejor que perder el texto.
function draftKey(exerciseId) {
  let userId = 'anon'
  try {
    const u = JSON.parse(localStorage.getItem('auth_user') || 'null')
    if (u?.id) userId = u.id
  } catch { /* ignore */ }
  return `writing-draft:${userId}:${exerciseId}`
}

function loadDraft(exerciseId) {
  try {
    const raw = localStorage.getItem(draftKey(exerciseId))
    if (!raw) return null
    return JSON.parse(raw)   // { text, failedAt? }
  } catch { return null }
}

function saveDraft(exerciseId, data) {
  try { localStorage.setItem(draftKey(exerciseId), JSON.stringify(data)) } catch { /* quota, ignore */ }
}

function clearDraft(exerciseId) {
  try { localStorage.removeItem(draftKey(exerciseId)) } catch { /* ignore */ }
}

export default function WritingExercise({ exercise, userName, userLevel, onComplete }) {
  // Precargar el borrador en el estado inicial (lazy init) para evitar un
  // flash de textarea vacio antes del useEffect.
  const [text, setText] = useState(() => loadDraft(exercise.id)?.text || '')
  const [feedback, setFeedback] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [submitted, setSubmitted] = useState(false)
  const [restored, setRestored] = useState(() => !!loadDraft(exercise.id)?.text)
  // Para evitar que el auto-reintento se dispare en el primer render si el
  // alumno acaba de entrar — solo reintentamos si veniamos de un fallo.
  const autoRetryRef = useRef(loadDraft(exercise.id)?.failedAt || null)

  const wordCount = text.trim().split(/\s+/).filter(Boolean).length
  const meetsMinimum = wordCount >= (exercise.minWords || 20)

  // Autosave: cada vez que el alumno escribe, persistimos el texto en
  // localStorage. Jeaneth reporto que su texto se perdia cuando la IA
  // fallaba — ahora, aunque falle y cierre el navegador, al volver al
  // ejercicio el texto esta ahi.
  useEffect(() => {
    if (submitted) return
    if (!text) { clearDraft(exercise.id); return }
    saveDraft(exercise.id, { text, failedAt: autoRetryRef.current })
  }, [text, submitted, exercise.id])

  // Un solo reintento automatico antes de rendirnos. Cuando la corrección
  // falla, NO avanzamos al siguiente ejercicio con score 0 — el alumno se
  // quedaba sin feedback y sin entender por que le puntuaron mal. En su
  // lugar mostramos boton "Erneut prüfen" y solo llamamos a onComplete
  // cuando el alumno explicitamente aprieta "Weiter" (asi lee el feedback).
  const runEval = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      let result = await evaluateWriting(userName, userLevel, exercise.prompt, text)
      if (!result) {
        // 1 retry — Haiku a veces devuelve JSON malformado en el primer intento
        result = await evaluateWriting(userName, userLevel, exercise.prompt, text)
      }
      if (result) {
        setFeedback(result)
        setSubmitted(true)
        autoRetryRef.current = null
        // Mantenemos el draft hasta que el alumno aprete "Weiter". Si cierra
        // antes, al volver recupera texto + reintenta auto.
        saveDraft(exercise.id, { text })
      } else {
        throw new Error('No feedback returned')
      }
    } catch {
      // Marcamos el draft como "fallido" para que al volver reintentemos auto.
      autoRetryRef.current = new Date().toISOString()
      saveDraft(exercise.id, { text, failedAt: autoRetryRef.current })
      setError('Die Bewertung konnte nicht geladen werden. Dein Text ist auf diesem Gerät gespeichert — versuche es erneut oder komm später zurück.')
    }
    setLoading(false)
  }, [text, userName, userLevel, exercise])

  // Auto-reintento al montar: si venimos de un fallo previo (draft con
  // failedAt), relanzamos el eval sin que el alumno tenga que apretar nada.
  // Solo una vez por mount y solo si el texto cumple minimo.
  const didAutoRetry = useRef(false)
  useEffect(() => {
    if (didAutoRetry.current) return
    if (!autoRetryRef.current) return
    if (!meetsMinimum) return
    if (submitted || loading) return
    didAutoRetry.current = true
    runEval()
  }, [meetsMinimum, submitted, loading, runEval])

  const handleContinue = useCallback(() => {
    // Recien aca reportamos el resultado hacia arriba. Adjuntamos feedback
    // para que se persista en historial y el alumno pueda revisarlo en
    // Fortschritt. Y limpiamos el draft — ya se guardo en el historial.
    if (!feedback) return
    clearDraft(exercise.id)
    const score = Math.round((feedback.score / 10) * 100)
    onComplete({ score, feedback })
  }, [feedback, onComplete, exercise.id])

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
          onChange={(e) => {
            if (submitted) return
            setText(e.target.value)
            if (restored) setRestored(false)
          }}
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

      {/* Aviso cuando recuperamos un borrador — para que el alumno sepa
          que no empieza en blanco. Se oculta en cuanto edita. */}
      {restored && !submitted && !loading && (
        <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-3 flex items-start gap-2">
          <CheckCircle size={16} className="text-amber-600 shrink-0 mt-0.5" />
          <p className="text-sm text-amber-800 dark:text-amber-200">
            Dein Entwurf wurde wiederhergestellt. Du kannst weitermachen oder den Text ändern.
            <button
              type="button"
              onClick={() => { setText(''); setRestored(false); clearDraft(exercise.id); autoRetryRef.current = null }}
              className="ml-2 underline font-semibold hover:text-amber-900"
            >
              Von vorn beginnen
            </button>
          </p>
        </div>
      )}

      {loading && (
        <div className="flex flex-col items-center gap-3 py-6">
          <LoadingSpinner message="Der Lehrer korrigiert deine Antwort..." />
        </div>
      )}

      {error && (
        <div className="bg-red-50 dark:bg-red-900/30 border border-red-300 rounded-xl p-4 space-y-3">
          <div className="flex items-start gap-3">
            <AlertCircle size={18} className="text-red-500 shrink-0 mt-0.5" />
            <p className="text-sm text-red-700 dark:text-red-300">{error}</p>
          </div>
          <Button onClick={runEval} variant="primary" className="w-full">
            Erneut prüfen
          </Button>
        </div>
      )}

      {!submitted && !loading && !error && (
        <Button onClick={runEval} disabled={!meetsMinimum} variant="primary" className="w-full">
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

            {feedback.model_answer && (
              <details className="bg-indigo-50 dark:bg-indigo-900/20 rounded-xl p-4 border border-indigo-200 dark:border-indigo-800">
                <summary className="font-bold text-indigo-700 dark:text-indigo-300 flex items-center gap-2 cursor-pointer">
                  <BookOpen size={16} /> Musterantwort — so könnte es aussehen
                </summary>
                <p className="mt-3 text-sm text-gray-700 dark:text-gray-200 leading-relaxed whitespace-pre-line italic border-l-2 border-indigo-300 dark:border-indigo-700 pl-3">
                  {feedback.model_answer}
                </p>
                <p className="mt-2 text-xs text-indigo-600/70 dark:text-indigo-300/70">
                  Vergleiche deinen Text damit — nicht abschreiben, sondern Ideen und Strukturen lernen.
                </p>
              </details>
            )}

            <Button onClick={handleContinue} variant="primary" className="w-full">
              Weiter
            </Button>

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}