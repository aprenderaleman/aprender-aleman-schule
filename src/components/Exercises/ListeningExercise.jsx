import React, { useState, useCallback, useRef } from 'react'
import { motion } from 'framer-motion'
import Button from '../UI/Button'
import { Volume2, Eye, EyeOff, CheckCircle, XCircle } from 'lucide-react'

export default function ListeningExercise({ exercise, userName, onComplete }) {
  const [answers, setAnswers] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [showTranscript, setShowTranscript] = useState(false)
  const [speaking, setSpeaking] = useState(false)
  const utteranceRef = useRef(null)

  const speak = useCallback(() => {
    if (!('speechSynthesis' in window)) {
      alert('Tu navegador no soporta síntesis de voz. Lee la transcripción.')
      setShowTranscript(true)
      return
    }
    window.speechSynthesis.cancel()
    const utterance = new SpeechSynthesisUtterance(exercise.audioText)
    utterance.lang = 'de-DE'
    utterance.rate = 0.85
    utterance.pitch = 1

    const voices = window.speechSynthesis.getVoices()
    const germanVoice = voices.find(v => v.lang.startsWith('de'))
    if (germanVoice) utterance.voice = germanVoice

    utterance.onstart = () => setSpeaking(true)
    utterance.onend = () => setSpeaking(false)
    utterance.onerror = () => {
      setSpeaking(false)
      setShowTranscript(true)
    }

    utteranceRef.current = utterance
    window.speechSynthesis.speak(utterance)
  }, [exercise.audioText])

  const handleSubmit = () => {
    let correct = 0
    exercise.questions.forEach((q, i) => {
      if (answers[i] === q.answer) correct++
    })
    const score = Math.round((correct / exercise.questions.length) * 100)
    setSubmitted(true)
    onComplete({ score, correct, total: exercise.questions.length })
  }

  const allAnswered = exercise.questions.every((_, i) => answers[i] !== undefined)

  return (
    <div className="space-y-6">
      {/* Audio player */}
      <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl p-6 border border-purple-200 dark:border-purple-800 text-center">
        <p className="text-sm font-semibold text-purple-600 dark:text-purple-400 mb-4">
          Escucha el audio y responde las preguntas
        </p>
        <motion.button
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.05 }}
          onClick={speak}
          disabled={speaking}
          aria-label="Reproducir audio"
          className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto shadow-lg transition-all ${speaking ? 'bg-purple-600 animate-pulse' : 'bg-purple-500 hover:bg-purple-600'}`}
        >
          <Volume2 size={36} className="text-white" />
        </motion.button>
        {speaking && (
          <p className="text-sm text-purple-600 dark:text-purple-400 mt-3 animate-pulse font-medium">
            🎧 Reproduciendo...
          </p>
        )}
        <p className="text-xs text-gray-400 mt-2">Puedes escucharlo varias veces</p>
      </div>

      {/* Transcript toggle */}
      <div className="flex justify-center">
        <button
          onClick={() => setShowTranscript(prev => !prev)}
          className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-orange-500 transition-colors"
          aria-label={showTranscript ? 'Ocultar transcripción' : 'Ver transcripción'}
        >
          {showTranscript ? <EyeOff size={16} /> : <Eye size={16} />}
          {showTranscript ? 'Ocultar transcripción' : 'Ver transcripción (ayuda)'}
        </button>
      </div>

      {showTranscript && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4 border border-gray-200 dark:border-gray-600"
        >
          <p className="text-xs font-bold text-gray-500 uppercase mb-2">Transcripción</p>
          <p className="text-gray-700 dark:text-gray-200 text-sm leading-relaxed italic">{exercise.audioText}</p>
        </motion.div>
      )}

      {/* Questions */}
      <div className="space-y-4">
        {exercise.questions.map((q, qi) => (
          <div key={qi} className="bg-white dark:bg-gray-700 rounded-xl p-4 border border-gray-200 dark:border-gray-600">
            <p className="font-semibold text-gray-800 dark:text-gray-100 mb-3">
              {qi + 1}. {q.question}
            </p>
            <div className="grid grid-cols-2 gap-2">
              {q.options.map((opt, oi) => {
                let cls = 'border border-gray-200 dark:border-gray-600 hover:border-purple-400'
                if (submitted) {
                  if (opt === q.answer) cls = 'border-2 border-green-500 bg-green-50 dark:bg-green-900/30'
                  else if (opt === answers[qi]) cls = 'border-2 border-red-400 bg-red-50 dark:bg-red-900/30'
                  else cls = 'border border-gray-200 dark:border-gray-600 opacity-50'
                } else if (answers[qi] === opt) {
                  cls = 'border-2 border-purple-500 bg-purple-50 dark:bg-purple-900/30'
                }
                return (
                  <button
                    key={oi}
                    onClick={() => !submitted && setAnswers(prev => ({ ...prev, [qi]: opt }))}
                    disabled={submitted}
                    className={`p-2.5 rounded-lg text-sm text-left font-medium text-gray-700 dark:text-gray-200 transition-all ${cls}`}
                  >
                    {opt}
                  </button>
                )
              })}
            </div>
            {submitted && (
              <p className={`mt-2 text-xs font-semibold flex items-center gap-1 ${answers[qi] === q.answer ? 'text-green-600' : 'text-red-500'}`}>
                {answers[qi] === q.answer ? <><CheckCircle size={14} /> ¡Correcto!</> : <><XCircle size={14} /> Correcto: {q.answer}</>}
              </p>
            )}
          </div>
        ))}
      </div>

      {!submitted && (
        <Button onClick={handleSubmit} disabled={!allAnswered} variant="primary" className="w-full">
          Enviar respuestas
        </Button>
      )}
    </div>
  )
}
