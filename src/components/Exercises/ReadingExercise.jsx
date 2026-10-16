import React, { useState, useCallback, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Button from '../UI/Button'
import { BookOpen, CheckCircle, XCircle } from 'lucide-react'
import { translateWord } from '../../utils/ai'
import MistakeExplanation from './MistakeExplanation'

// Draft persistente por (userId, exerciseId). Si el alumno responde 2 de 10
// y cierra la pestaña, al volver recupera lo respondido en vez de perderlo.
// Nada aqui marca el ejercicio como completado — solo guarda estado parcial.
function draftKey(exerciseId) {
  let uid = 'anon'
  try {
    const u = JSON.parse(localStorage.getItem('auth_user') || 'null')
    if (u?.id) uid = u.id
  } catch { /* ignore */ }
  return `ex-draft:reading:${uid}:${exerciseId}`
}
function loadDraft(exerciseId) {
  try { return JSON.parse(localStorage.getItem(draftKey(exerciseId)) || 'null') } catch { return null }
}
function saveDraft(exerciseId, data) {
  try { localStorage.setItem(draftKey(exerciseId), JSON.stringify(data)) } catch { /* quota */ }
}
function clearDraft(exerciseId) {
  try { localStorage.removeItem(draftKey(exerciseId)) } catch { /* ignore */ }
}

export default function ReadingExercise({ exercise, userName, onComplete }) {
  const [answers, setAnswers] = useState(() => loadDraft(exercise.id)?.answers || {})
  const [submitted, setSubmitted] = useState(false)
  const [tooltip, setTooltip] = useState({ word: '', translation: '', visible: false })
  const [loadingWord, setLoadingWord] = useState(null)
  const [restored, setRestored] = useState(() => {
    const d = loadDraft(exercise.id)
    return !!(d?.answers && Object.keys(d.answers).length > 0)
  })

  // Autosave de respuestas parciales
  useEffect(() => {
    if (submitted) return
    if (Object.keys(answers).length === 0) { clearDraft(exercise.id); return }
    saveDraft(exercise.id, { answers })
  }, [answers, submitted, exercise.id])

  const handleWordClick = useCallback(async (word) => {
    const clean = word.replace(/[.,!?;:]/g, '')
    const vocabEntry = exercise.vocabulary?.find(v => v.word.toLowerCase() === clean.toLowerCase())

    if (vocabEntry) {
      setTooltip({ word: clean, translation: vocabEntry.translation, defDe: vocabEntry.defDe, visible: true })
      setTimeout(() => setTooltip(t => ({ ...t, visible: false })), 3000)
      return
    }

    setLoadingWord(clean)
    try {
      const translation = await translateWord(clean)
      if (translation) {
        setTooltip({ word: clean, translation, visible: true })
        setTimeout(() => setTooltip(t => ({ ...t, visible: false })), 3000)
      }
    } catch { }
    setLoadingWord(null)
  }, [exercise.vocabulary])

  const allAnswered = exercise.questions.every((_, i) => answers[i] !== undefined)

  const handleSubmit = () => {
    // Defensa en profundidad: aunque el boton tenga disabled, si por algun
    // motivo se dispara con respuestas parciales no mostramos resultados
    // (sino se marcaria el ejercicio como completo con score inflado).
    if (!allAnswered) return
    setSubmitted(true)
  }

  // Called only when the student clicks "Weiter" after reviewing the
  // per-question feedback (and any AI explanations) — so we don't switch
  // them to the result screen before they had a chance to learn.
  const handleContinue = () => {
    if (!allAnswered) return
    let correct = 0
    exercise.questions.forEach((q, i) => {
      if (answers[i] === q.answer) correct++
    })
    const score = Math.round((correct / exercise.questions.length) * 100)
    clearDraft(exercise.id)
    onComplete({ score, correct, total: exercise.questions.length })
  }

  return (
    <div className="space-y-6">
      {/* Reading text */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-5 border border-blue-200 dark:border-blue-800">
        <div className="flex items-center gap-2 mb-3">
          <BookOpen size={18} className="text-blue-500" />
          <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">Deutscher Text — Tippe auf ein Wort, um die Übersetzung zu sehen</span>
        </div>
        <p className="text-gray-800 dark:text-gray-100 leading-relaxed text-base prose-comfy">
          {exercise.text.split(' ').map((word, i) => (
            <span key={i}>
              <button
                onClick={() => handleWordClick(word)}
                className={`hover:bg-blue-200 dark:hover:bg-blue-700 rounded px-0.5 transition-colors cursor-pointer ${loadingWord === word.replace(/[.,!?;:]/g, '') ? 'animate-pulse text-blue-500' : ''}`}
              >
                {word}
              </button>
              {' '}
            </span>
          ))}
        </p>
      </div>

      {/* Tooltip */}
      <AnimatePresence>
        {tooltip.visible && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="fixed top-20 left-1/2 -translate-x-1/2 z-50 bg-gray-900 text-white px-4 py-2 rounded-xl shadow-xl text-sm"
          >
            <strong>{tooltip.word}</strong> = {tooltip.translation}
            {tooltip.defDe && <span className="block text-xs text-gray-300 mt-0.5">{tooltip.defDe}</span>}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Vocabulary list */}
      {exercise.vocabulary && exercise.vocabulary.length > 0 && (
        <div className="bg-white dark:bg-gray-700 rounded-xl p-4 border border-gray-200 dark:border-gray-600">
          <p className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2">Wichtiger Wortschatz</p>
          <div className="flex flex-wrap gap-2">
            {exercise.vocabulary.map((v, i) => (
              <span key={i} className="text-xs bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-2 py-1 rounded-lg">
                <strong>{v.word}</strong> → {v.translation}
                {v.defDe && <span className="block text-[11px] opacity-70">{v.defDe}</span>}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Banner cuando recuperamos un intento parcial */}
      {restored && !submitted && (
        <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-3 flex items-start gap-2">
          <CheckCircle size={16} className="text-amber-600 shrink-0 mt-0.5" />
          <p className="text-sm text-amber-800 dark:text-amber-200">
            Du setzt eine Übung fort. Deine bisherigen Antworten sind wiederhergestellt.
            <button
              type="button"
              onClick={() => { setAnswers({}); setRestored(false); clearDraft(exercise.id) }}
              className="ml-2 underline font-semibold hover:text-amber-900"
            >
              Von vorn beginnen
            </button>
          </p>
        </div>
      )}

      {/* Questions */}
      <div className="space-y-5">
        {exercise.questions.map((q, qi) => (
          <div key={qi} className="bg-white dark:bg-gray-700 rounded-xl p-4 border border-gray-200 dark:border-gray-600">
            <p className="font-semibold text-gray-800 dark:text-gray-100 mb-3">
              {qi + 1}. {q.question}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {q.options.map((opt, oi) => {
                let cls = 'border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-600 hover:border-orange-400'
                if (submitted) {
                  if (opt === q.answer) cls = 'border-2 border-green-500 bg-green-50 dark:bg-green-900/30'
                  else if (opt === answers[qi]) cls = 'border-2 border-red-400 bg-red-50 dark:bg-red-900/30'
                  else cls = 'border border-gray-200 dark:border-gray-600 opacity-50'
                } else if (answers[qi] === opt) {
                  cls = 'border-2 border-orange-500 bg-orange-50 dark:bg-orange-900/30'
                }
                return (
                  <button
                    key={oi}
                    onClick={() => {
                      if (submitted) return
                      setAnswers(prev => ({ ...prev, [qi]: opt }))
                      if (restored) setRestored(false)
                    }}
                    disabled={submitted}
                    className={`p-2.5 rounded-lg text-sm font-medium text-left text-gray-700 dark:text-gray-200 transition-all ${cls}`}
                  >
                    {opt}
                  </button>
                )
              })}
            </div>
            {submitted && (
              <>
                <p className={`mt-2 text-xs font-semibold flex items-center gap-1 ${answers[qi] === q.answer ? 'text-green-600' : 'text-red-500'}`}>
                  {answers[qi] === q.answer ? <><CheckCircle size={14} /> Richtig!</> : <><XCircle size={14} /> Richtig: {q.answer}</>}
                </p>
                {answers[qi] && answers[qi] !== q.answer && (
                  <MistakeExplanation
                    exerciseId={exercise.id}
                    qIndex={qi}
                    level={exercise.level}
                    question={q.question}
                    userAnswer={answers[qi]}
                    correctAnswer={q.answer}
                    context={exercise.text}
                  />
                )}
              </>
            )}
          </div>
        ))}
      </div>

      {!submitted ? (
        <Button onClick={handleSubmit} disabled={!allAnswered} variant="primary" className="w-full">
          Antworten absenden
        </Button>
      ) : (
        <Button onClick={handleContinue} variant="primary" className="w-full">
          Weiter zur Auswertung →
        </Button>
      )}
    </div>
  )
}
