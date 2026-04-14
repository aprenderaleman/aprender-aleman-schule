import React, { useState, useRef, useCallback, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Button from '../UI/Button'
import LoadingSpinner from '../UI/LoadingSpinner'
import { AlertCircle, CheckCircle, Lightbulb, Mic, Square, Play, RotateCcw, ThumbsUp, Star, BookOpen } from 'lucide-react'

const API_URL = import.meta.env.VITE_API_URL || ''

function getAuthHeaders() {
  const token = localStorage.getItem('auth_token')
  return {
    'Content-Type': 'application/json',
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  }
}

function getSupportedMimeType() {
  const types = ['audio/webm', 'audio/ogg', 'audio/mp4', 'audio/wav']
  for (const type of types) {
    if (typeof MediaRecorder !== 'undefined' && MediaRecorder.isTypeSupported(type)) return type
  }
  return 'audio/webm'
}

export default function SpeakingExercise({ exercise, userName, userLevel, onComplete }) {
  const [phase, setPhase] = useState('idle') // idle | recording | recorded | transcribing | grading | done
  const [audioBlob, setAudioBlob] = useState(null)
  const [audioUrl, setAudioUrl] = useState(null)
  const [transcript, setTranscript] = useState('')
  const [feedback, setFeedback] = useState(null)
  const [error, setError] = useState(null)
  const [recordingTime, setRecordingTime] = useState(0)
  const recorderRef = useRef(null)
  const chunksRef = useRef([])
  const timerRef = useRef(null)
  const streamRef = useRef(null)

  const minSeconds = exercise.minSeconds || 15

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
      if (streamRef.current) streamRef.current.getTracks().forEach(t => t.stop())
      if (audioUrl) URL.revokeObjectURL(audioUrl)
    }
  }, [audioUrl])

  const formatTime = (s) => `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`

  const startRecording = useCallback(async () => {
    try {
      setError(null)
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      streamRef.current = stream
      const mimeType = getSupportedMimeType()
      const recorder = new MediaRecorder(stream, { mimeType })
      chunksRef.current = []

      recorder.ondataavailable = (e) => {
        if (e.data.size > 0) chunksRef.current.push(e.data)
      }

      recorder.onstop = () => {
        const blob = new Blob(chunksRef.current, { type: mimeType })
        setAudioBlob(blob)
        if (audioUrl) URL.revokeObjectURL(audioUrl)
        setAudioUrl(URL.createObjectURL(blob))
        setPhase('recorded')
        stream.getTracks().forEach(t => t.stop())
      }

      recorderRef.current = recorder
      recorder.start(200)
      setRecordingTime(0)
      setPhase('recording')
      timerRef.current = setInterval(() => setRecordingTime(t => t + 1), 1000)
    } catch (err) {
      setError('Mikrofon nicht verfügbar. Bitte erlaube den Zugriff auf das Mikrofon.')
    }
  }, [audioUrl])

  const stopRecording = useCallback(() => {
    if (recorderRef.current && recorderRef.current.state === 'recording') {
      recorderRef.current.stop()
    }
    if (timerRef.current) {
      clearInterval(timerRef.current)
      timerRef.current = null
    }
  }, [])

  const resetRecording = useCallback(() => {
    if (audioUrl) URL.revokeObjectURL(audioUrl)
    setAudioBlob(null)
    setAudioUrl(null)
    setTranscript('')
    setFeedback(null)
    setError(null)
    setRecordingTime(0)
    setPhase('idle')
  }, [audioUrl])

  const submitRecording = useCallback(async () => {
    if (!audioBlob) return
    setError(null)

    // Step 1: Transcribe
    setPhase('transcribing')
    try {
      const token = localStorage.getItem('auth_token')
      const arrayBuf = await audioBlob.arrayBuffer()
      const transcribeRes = await fetch(`${API_URL}/api/ai/transcribe-speaking`, {
        method: 'POST',
        headers: {
          'Content-Type': audioBlob.type || 'audio/webm',
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        body: arrayBuf,
      })
      if (!transcribeRes.ok) throw new Error('Transkription fehlgeschlagen')
      const { transcript: text } = await transcribeRes.json()

      if (!text || text.trim().length < 3) {
        setError('Keine Sprache erkannt. Bitte sprich deutlicher und versuche es erneut.')
        setPhase('recorded')
        return
      }

      setTranscript(text)

      // Step 2: Grade
      setPhase('grading')
      const gradeRes = await fetch(`${API_URL}/api/ai/evaluate-speaking`, {
        method: 'POST',
        headers: getAuthHeaders(),
        body: JSON.stringify({
          prompt: exercise.prompt,
          transcript: text,
          level: exercise.level,
          durationSeconds: recordingTime,
        }),
      })
      if (!gradeRes.ok) throw new Error('Bewertung fehlgeschlagen')
      const result = await gradeRes.json()

      setFeedback(result)
      setPhase('done')
      const score = Math.round((result.score / 10) * 100)
      onComplete({ score, feedback: result })
    } catch (err) {
      console.error('Speaking submit error:', err)
      setError('Fehler bei der Bewertung. Bitte versuche es erneut.')
      // Give fallback score based on duration
      const fallbackScore = Math.min(100, Math.round((recordingTime / (minSeconds * 2)) * 60))
      setPhase('done')
      onComplete({ score: fallbackScore, feedback: null })
    }
  }, [audioBlob, exercise, recordingTime, minSeconds, onComplete])

  const meetsMinimum = recordingTime >= minSeconds

  return (
    <div className="space-y-5">
      {/* Prompt */}
      <div className="bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20 rounded-2xl p-5 border border-teal-200 dark:border-teal-800">
        <div className="flex items-start gap-3">
          <BookOpen size={20} className="text-teal-500 mt-0.5 shrink-0" />
          <div>
            <p className="font-semibold text-gray-800 dark:text-gray-100 mb-2">Sprechaufgabe</p>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{exercise.prompt}</p>
            <p className="text-xs text-teal-500 font-semibold mt-2">Mindestens {minSeconds} Sekunden sprechen</p>
          </div>
        </div>
      </div>

      {/* Hints */}
      {exercise.hints && exercise.hints.length > 0 && (
        <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-xl p-4 border border-yellow-200 dark:border-yellow-800">
          <div className="flex items-center gap-2 mb-2">
            <Lightbulb size={16} className="text-yellow-500" />
            <span className="text-xs font-bold text-yellow-700 dark:text-yellow-300 uppercase">Nützliche Ausdrücke</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {exercise.hints.map((hint, i) => (
              <span
                key={i}
                className="text-xs bg-yellow-100 dark:bg-yellow-800/50 text-yellow-800 dark:text-yellow-200 px-2.5 py-1 rounded-lg"
              >
                {hint}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Recording area */}
      {phase !== 'done' && (
        <div className="bg-white dark:bg-gray-800 rounded-2xl border-2 border-gray-200 dark:border-gray-600 p-4 sm:p-6">
          <div className="flex flex-col items-center gap-4">
            {/* Timer display */}
            <div className={`text-2xl sm:text-3xl font-mono font-bold ${phase === 'recording' ? 'text-red-500' : 'text-gray-400'}`}>
              {formatTime(recordingTime)}
            </div>

            {/* Recording indicator */}
            {phase === 'recording' && (
              <div className="flex items-center gap-2 text-sm text-red-500">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
                Aufnahme läuft...
              </div>
            )}

            {/* Duration bar */}
            <div className="w-full max-w-xs">
              <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-1000 ${meetsMinimum ? 'bg-green-500' : 'bg-orange-400'}`}
                  style={{ width: `${Math.min(100, (recordingTime / minSeconds) * 100)}%` }}
                />
              </div>
              <div className="flex justify-between mt-1">
                <span className={`text-xs ${meetsMinimum ? 'text-green-600 font-semibold' : 'text-gray-400'}`}>
                  {meetsMinimum ? '✓ Mindestdauer erreicht' : `Min. ${minSeconds}s`}
                </span>
                <span className="text-xs text-gray-400">{recordingTime}s</span>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex items-center gap-3">
              {phase === 'idle' && (
                <button
                  onClick={startRecording}
                  className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-teal-500 to-cyan-500 text-white hover:shadow-lg hover:scale-105 transition-all duration-200"
                  aria-label="Aufnahme starten"
                >
                  <Mic className="w-7 h-7" />
                </button>
              )}

              {phase === 'recording' && (
                <button
                  onClick={stopRecording}
                  className="flex items-center justify-center w-16 h-16 rounded-full bg-red-500 text-white animate-pulse hover:bg-red-600 transition-all duration-200"
                  aria-label="Aufnahme stoppen"
                >
                  <Square className="w-6 h-6" />
                </button>
              )}

              {phase === 'recorded' && (
                <>
                  <button
                    onClick={resetRecording}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors text-sm font-medium"
                  >
                    <RotateCcw size={16} />
                    Nochmal aufnehmen
                  </button>
                  <Button onClick={submitRecording} variant="primary" className="flex items-center gap-2">
                    <Play size={16} />
                    Zur KI-Bewertung senden
                  </Button>
                </>
              )}
            </div>

            {/* Playback */}
            {audioUrl && phase === 'recorded' && (
              <div className="w-full max-w-sm mt-2">
                <p className="text-xs text-gray-400 text-center mb-2">Deine Aufnahme anhören:</p>
                <audio controls src={audioUrl} className="w-full h-10" />
              </div>
            )}

            {/* Idle hint */}
            {phase === 'idle' && (
              <p className="text-xs text-gray-400 text-center">Drücke den Mikrofon-Button und sprich auf Deutsch</p>
            )}
          </div>
        </div>
      )}

      {/* Loading states */}
      {phase === 'transcribing' && (
        <div className="flex flex-col items-center gap-3 py-6">
          <LoadingSpinner message="Deine Sprache wird erkannt..." />
        </div>
      )}

      {phase === 'grading' && (
        <div className="flex flex-col items-center gap-3 py-6">
          <LoadingSpinner message="Der Lehrer bewertet deine Antwort..." />
        </div>
      )}

      {/* Error */}
      {error && (
        <div className="bg-red-50 dark:bg-red-900/30 border border-red-300 rounded-xl p-4 flex items-start gap-3">
          <AlertCircle size={18} className="text-red-500 shrink-0 mt-0.5" />
          <p className="text-sm text-red-700 dark:text-red-300">{error}</p>
        </div>
      )}

      {/* Transcript */}
      {transcript && (
        <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700">
          <p className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase mb-2">Dein Transkript</p>
          <p className="text-sm text-gray-700 dark:text-gray-200 leading-relaxed italic">„{transcript}"</p>
        </div>
      )}

      {/* Feedback */}
      <AnimatePresence>
        {feedback && phase === 'done' && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            {/* Score */}
            <div className="bg-gradient-to-r from-teal-500 to-cyan-600 rounded-2xl p-5 text-white text-center">
              <p className="text-sm font-semibold opacity-90 mb-1">Deine Punktzahl</p>
              <p className="text-5xl font-extrabold">
                {feedback.score}
                <span className="text-2xl opacity-70">/10</span>
              </p>
              <p className="text-sm opacity-90 mt-2 italic">{feedback.overall_comment}</p>
            </div>

            {/* Positive aspects */}
            {feedback.positive_aspects && (
              <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-xl p-4 border border-emerald-200 dark:border-emerald-800">
                <p className="font-bold text-emerald-700 dark:text-emerald-300 mb-2 flex items-center gap-2">
                  <ThumbsUp size={16} /> Das hast du gut gemacht
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{feedback.positive_aspects}</p>
              </div>
            )}

            {/* Pronunciation tips */}
            {feedback.pronunciation_tips && feedback.pronunciation_tips.length > 0 && (
              <div className="bg-teal-50 dark:bg-teal-900/20 rounded-xl p-4 border border-teal-200 dark:border-teal-800">
                <p className="font-bold text-teal-700 dark:text-teal-300 mb-3 flex items-center gap-2">
                  <Mic size={16} /> Aussprache-Tipps
                </p>
                <div className="space-y-2">
                  {feedback.pronunciation_tips.map((tip, i) => (
                    <div key={i} className="text-sm bg-white dark:bg-gray-800 rounded-lg p-3 border border-teal-100 dark:border-teal-900">
                      <p className="text-gray-700 dark:text-gray-200">{tip}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Grammar errors */}
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

            {/* Vocabulary suggestions */}
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

            {/* Fluency feedback */}
            {feedback.fluency_feedback && (
              <div className="bg-violet-50 dark:bg-violet-900/20 rounded-xl p-4 border border-violet-200 dark:border-violet-800">
                <p className="font-bold text-violet-700 dark:text-violet-300 mb-2 flex items-center gap-2">
                  <CheckCircle size={16} /> Sprachfluss
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{feedback.fluency_feedback}</p>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
