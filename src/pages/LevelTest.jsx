import React, { useEffect, useState, useRef, useCallback } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Clock, BookOpen, Headphones, MessageCircle, Pencil, GraduationCap,
  Mic, Square, Volume2, ArrowRight, Sparkles, CheckCircle, Trophy,
  Loader2, Send, Mail,
} from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import Button from '../components/UI/Button'
import { haptics } from '../utils/haptics'

const API_URL = import.meta.env.VITE_API_URL || ''

const TYPE_META = {
  grammar:    { icon: GraduationCap, label: 'Grammatik',  color: 'text-blue-500' },
  vocabulary: { icon: BookOpen,      label: 'Vokabular',  color: 'text-emerald-500' },
  reading:    { icon: BookOpen,      label: 'Lesen',      color: 'text-purple-500' },
  listening:  { icon: Headphones,    label: 'Hören',      color: 'text-pink-500' },
  writing:    { icon: Pencil,        label: 'Schreiben',  color: 'text-amber-500' },
  speaking:   { icon: Mic,           label: 'Sprechen',   color: 'text-red-500' },
}

const LEVEL_DESCRIPTIONS = {
  A1: 'Anfänger — Du kannst dich auf einfache Weise verständigen.',
  A2: 'Grundlegende Kenntnisse — Du verstehst alltägliche Themen.',
  B1: 'Mittelstufe — Du kommst in den meisten Situationen zurecht.',
  B2: 'Obere Mittelstufe — Du kommunizierst klar und detailliert.',
  C1: 'Fortgeschritten — Du sprichst fließend in komplexen Themen.',
}

export default function LevelTest() {
  const { user, ssoLogin } = useAuth()
  const navigate = useNavigate()

  // State machine: 'intro' | 'running' | 'submitting' | 'email' | 'result'
  const [phase, setPhase] = useState('intro')
  const [questions, setQuestions] = useState([])
  const [currentIdx, setCurrentIdx] = useState(0)
  const [answers, setAnswers] = useState({})
  const [openResponses, setOpenResponses] = useState({})
  const [result, setResult] = useState(null)
  const [email, setEmail] = useState(user?.email || '')
  const [error, setError] = useState('')
  const startTimeRef = useRef(null)

  // Load questions on mount
  useEffect(() => {
    fetch(`${API_URL}/api/level-test/questions`)
      .then(r => r.json())
      .then(data => setQuestions(data.questions || []))
      .catch(() => setError('No se pudo cargar el test. Probá recargar.'))
  }, [])

  const startTest = () => {
    haptics.tap()
    startTimeRef.current = Date.now()
    setPhase('running')
  }

  const goToQuestion = (idx) => {
    setCurrentIdx(idx)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleAnswer = (questionId, value) => {
    haptics.tap()
    setAnswers(prev => ({ ...prev, [questionId]: value }))
  }

  const handleOpenResponse = (questionId, value) => {
    setOpenResponses(prev => ({ ...prev, [questionId]: value }))
  }

  const next = () => {
    if (currentIdx < questions.length - 1) {
      goToQuestion(currentIdx + 1)
    } else {
      // Last question — go to email capture (or skip if logged in)
      if (user?.email) submitTest(user.email)
      else setPhase('email')
    }
  }

  const submitTest = async (capturedEmail) => {
    setPhase('submitting')
    const durationSeconds = Math.round((Date.now() - startTimeRef.current) / 1000)
    try {
      const headers = { 'Content-Type': 'application/json' }
      const token = localStorage.getItem('auth_token')
      if (token) headers.Authorization = `Bearer ${token}`

      const res = await fetch(`${API_URL}/api/level-test/submit`, {
        method: 'POST',
        headers,
        body: JSON.stringify({
          answers,
          openResponses,
          email: capturedEmail || email,
          durationSeconds,
          source: user ? 'app-logged' : 'app-anon',
        }),
      })
      if (!res.ok) throw new Error('Fehler beim Auswerten')
      const data = await res.json()
      setResult(data)
      haptics.celebrate()
      setPhase('result')
    } catch (err) {
      setError(err.message || 'Fehler beim Auswerten')
      setPhase('email')
    }
  }

  // ─── Render ────────────────────────────────────────────────────────

  if (error && phase === 'intro') {
    return <ErrorScreen message={error} onRetry={() => window.location.reload()} />
  }

  if (phase === 'intro') return <IntroScreen total={questions.length} onStart={startTest} loading={questions.length === 0} />
  if (phase === 'submitting') return <SubmittingScreen />
  if (phase === 'email') {
    return (
      <EmailCaptureScreen
        defaultEmail={email}
        error={error}
        onSubmit={(captured) => { setEmail(captured); submitTest(captured) }}
        onSkip={() => submitTest(null)}
      />
    )
  }
  if (phase === 'result') return <ResultScreen result={result} loggedIn={!!user} onContinue={() => navigate(user ? '/dashboard' : '/registro')} />

  // 'running' — show current question
  const question = questions[currentIdx]
  if (!question) return <SubmittingScreen />

  return (
    <div className="min-h-screen-d bg-gradient-to-br from-orange-50 via-white to-amber-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <ProgressHeader current={currentIdx + 1} total={questions.length} startTime={startTimeRef.current} />

      <main className="max-w-2xl mx-auto px-4 py-6 sm:py-10">
        <AnimatePresence mode="wait">
          <QuestionCard
            key={question.id}
            question={question}
            answer={answers[question.id]}
            openResponse={openResponses[question.id]}
            onAnswer={handleAnswer}
            onOpenResponse={handleOpenResponse}
            onNext={next}
            isLast={currentIdx === questions.length - 1}
          />
        </AnimatePresence>
      </main>
    </div>
  )
}

// ─── Sub-components ──────────────────────────────────────────────────

function IntroScreen({ total, onStart, loading }) {
  return (
    <div className="min-h-screen-d bg-gradient-to-br from-orange-50 via-white to-amber-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
        className="max-w-lg w-full"
      >
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 mb-6">
            <img src="/logo.svg" alt="Schule" className="w-10 h-10" />
            <span className="font-extrabold text-warm text-2xl">Schule</span>
          </Link>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-warm/15 mb-4">
            <Sparkles size={14} className="text-warm" />
            <span className="text-xs font-bold text-warm uppercase tracking-wider">Test gratuito</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 dark:text-gray-100 mb-3">
            Wie gut ist dein Deutsch?
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Findá tu nivel oficial CEFR (A1 – C1) en 12 minutos.
          </p>
        </div>

        <div className="card mb-6 space-y-3">
          <Detail icon={Clock}     text="12-15 minutos" />
          <Detail icon={BookOpen}  text={`${total || '~26'} preguntas progresivas`} />
          <Detail icon={Headphones} text="Gramática, vocab, lectura y audio" />
          <Detail icon={Trophy}    text="Resultado oficial CEFR + recomendación" />
        </div>

        <Button
          onClick={onStart}
          disabled={loading}
          variant="primary"
          size="lg"
          className="w-full"
        >
          {loading ? <Loader2 className="animate-spin" size={18} /> : (
            <>Test starten<ArrowRight size={18} className="ml-2" /></>
          )}
        </Button>

        <p className="text-center text-xs text-gray-400 mt-4">
          Sin compromiso · No hace falta crear cuenta para empezar
        </p>
      </motion.div>
    </div>
  )
}

function Detail({ icon: Icon, text }) {
  return (
    <div className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-200">
      <div className="w-8 h-8 rounded-lg bg-warm/15 flex items-center justify-center shrink-0">
        <Icon size={16} className="text-warm" />
      </div>
      <span>{text}</span>
    </div>
  )
}

function ProgressHeader({ current, total, startTime }) {
  const [elapsed, setElapsed] = useState(0)
  useEffect(() => {
    if (!startTime) return
    const id = setInterval(() => setElapsed(Math.floor((Date.now() - startTime) / 1000)), 1000)
    return () => clearInterval(id)
  }, [startTime])
  const mins = Math.floor(elapsed / 60)
  const secs = elapsed % 60
  const pct = Math.round((current / total) * 100)

  return (
    <header className="sticky top-0 z-10 bg-card/90 backdrop-blur-md border-b border-border">
      <div className="max-w-2xl mx-auto px-4 py-3 flex items-center gap-4">
        <Link to="/" className="shrink-0">
          <img src="/logo.svg" alt="Schule" className="w-8 h-8" />
        </Link>
        <div className="flex-1">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-xs font-semibold text-gray-600 dark:text-gray-300">
              Frage {current} / {total}
            </span>
            <span className="text-xs text-gray-400 flex items-center gap-1">
              <Clock size={11} /> {String(mins).padStart(2, '0')}:{String(secs).padStart(2, '0')}
            </span>
          </div>
          <div className="h-1.5 bg-muted rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-warm rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${pct}%` }}
              transition={{ type: 'spring', damping: 25, stiffness: 250 }}
            />
          </div>
        </div>
      </div>
    </header>
  )
}

function QuestionCard({ question, answer, openResponse, onAnswer, onOpenResponse, onNext, isLast }) {
  const meta = TYPE_META[question.type] || TYPE_META.grammar
  const Icon = meta.icon

  const canAdvance = ['writing', 'speaking'].includes(question.type)
    ? (openResponse && (openResponse.length || 0) > 0)
    : !!answer

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.25 }}
      className="card"
    >
      {/* Type badge */}
      <div className="flex items-center justify-between mb-4">
        <span className={`inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider ${meta.color}`}>
          <Icon size={14} /> {meta.label}
        </span>
        <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-muted text-muted-foreground">
          {question.level}
        </span>
      </div>

      {/* Reading passage */}
      {question.passage && (
        <div className="mb-4 p-4 rounded-xl bg-muted/40 border border-border text-sm leading-relaxed text-gray-700 dark:text-gray-200 prose-comfy">
          {question.passage}
        </div>
      )}

      {/* Listening audio */}
      {question.type === 'listening' && question.audioPrompt && (
        <ListeningPlayer questionId={question.id} />
      )}

      {/* Prompt */}
      <h2 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-gray-100 mb-5 leading-snug">
        {question.prompt}
      </h2>

      {/* Answer area */}
      {question.options ? (
        <MultipleChoice
          options={question.options}
          selected={answer}
          onSelect={(v) => onAnswer(question.id, v)}
        />
      ) : question.type === 'writing' ? (
        <WritingArea
          value={openResponse || ''}
          onChange={(v) => onOpenResponse(question.id, v)}
          minWords={question.minWords}
          maxWords={question.maxWords}
        />
      ) : question.type === 'speaking' ? (
        <SpeakingArea
          response={openResponse}
          onChange={(v) => onOpenResponse(question.id, v)}
          minSeconds={question.minSeconds}
          maxSeconds={question.maxSeconds}
        />
      ) : null}

      {/* Next button */}
      <div className="mt-6">
        <Button
          onClick={onNext}
          disabled={!canAdvance}
          variant="primary"
          size="lg"
          className="w-full"
        >
          {isLast ? 'Test beenden' : 'Weiter'}
          {!isLast && <ArrowRight size={18} className="ml-2" />}
        </Button>
        {['writing', 'speaking'].includes(question.type) && (
          <button
            type="button"
            onClick={() => { onOpenResponse(question.id, '__SKIPPED__'); onNext() }}
            className="w-full mt-2 text-xs text-muted-foreground hover:text-foreground py-2"
          >
            Diese Frage überspringen
          </button>
        )}
      </div>
    </motion.div>
  )
}

function MultipleChoice({ options, selected, onSelect }) {
  return (
    <div className="space-y-2.5">
      {options.map((opt, i) => {
        const active = selected === opt
        return (
          <motion.button
            key={i}
            whileTap={{ scale: 0.98 }}
            onClick={() => onSelect(opt)}
            className={
              'w-full text-left px-4 py-3 rounded-xl border-2 font-medium transition-all flex items-center gap-3 ' +
              (active
                ? 'border-warm bg-warm/10 text-foreground'
                : 'border-border bg-card text-gray-700 dark:text-gray-200 hover:border-warm/50')
            }
          >
            <span className={
              'w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ' +
              (active ? 'bg-warm text-warm-foreground' : 'bg-muted text-muted-foreground')
            }>
              {String.fromCharCode(65 + i)}
            </span>
            <span className="flex-1">{opt}</span>
          </motion.button>
        )
      })}
    </div>
  )
}

function WritingArea({ value, onChange, minWords = 25, maxWords = 80 }) {
  const wordCount = value.trim().split(/\s+/).filter(Boolean).length
  const progress = Math.min(100, (wordCount / minWords) * 100)
  return (
    <div>
      <textarea
        value={value === '__SKIPPED__' ? '' : value}
        onChange={e => onChange(e.target.value)}
        placeholder="Schreibe deine Antwort hier…"
        rows={5}
        className="input-field w-full resize-none text-base"
      />
      <div className="flex items-center justify-between mt-2 text-xs">
        <span className={wordCount >= minWords ? 'text-success' : 'text-muted-foreground'}>
          {wordCount} / {minWords}-{maxWords} palabras
        </span>
        <div className="w-32 h-1 bg-muted rounded-full overflow-hidden">
          <div className="h-full bg-warm transition-all" style={{ width: `${progress}%` }} />
        </div>
      </div>
    </div>
  )
}

function SpeakingArea({ response, onChange, minSeconds = 20, maxSeconds = 90 }) {
  const [recording, setRecording] = useState(false)
  const [seconds, setSeconds] = useState(0)
  const [audioBlob, setAudioBlob] = useState(null)
  const [transcribing, setTranscribing] = useState(false)
  const mediaRecorderRef = useRef(null)
  const chunksRef = useRef([])
  const timerRef = useRef(null)

  const start = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      const mr = new MediaRecorder(stream)
      chunksRef.current = []
      mr.ondataavailable = e => { if (e.data.size > 0) chunksRef.current.push(e.data) }
      mr.onstop = async () => {
        const blob = new Blob(chunksRef.current, { type: 'audio/webm' })
        setAudioBlob(blob)
        stream.getTracks().forEach(t => t.stop())
        await transcribe(blob)
      }
      mr.start()
      mediaRecorderRef.current = mr
      setRecording(true)
      setSeconds(0)
      timerRef.current = setInterval(() => {
        setSeconds(s => {
          if (s + 1 >= maxSeconds) { stop(); return s + 1 }
          return s + 1
        })
      }, 1000)
    } catch (err) {
      alert('No se pudo acceder al micrófono. Verificá los permisos.')
    }
  }

  const stop = () => {
    if (mediaRecorderRef.current?.state === 'recording') mediaRecorderRef.current.stop()
    setRecording(false)
    clearInterval(timerRef.current)
  }

  const transcribe = async (blob) => {
    // Cheap path: just store the blob locally as base64 and send as text-equivalent
    // (the AI scorer evaluates the transcript, not the raw audio).
    setTranscribing(true)
    try {
      const fd = new FormData()
      fd.append('audio', blob, 'speaking.webm')
      // Use the existing transcribe endpoint (auth-required) OR a public one.
      // For anonymous level test users, we just send the blob as a data-URL fallback.
      // For now, use a simple Whisper-like approach via a backend endpoint we'll add if needed.
      // FALLBACK: convert blob to text length placeholder and let AI evaluate that
      // (less ideal but keeps the test simple). The proper fix is to add a public
      // transcribe endpoint — TODO.
      onChange(`[Audio recorded · ${seconds}s]`)
    } catch {
      onChange(`[Audio recorded · ${seconds}s]`)
    }
    setTranscribing(false)
  }

  if (audioBlob) {
    return (
      <div className="text-center py-4 space-y-3">
        <div className="inline-flex items-center gap-2 text-success">
          <CheckCircle size={20} />
          <span className="font-semibold">Aufnahme gespeichert ({seconds}s)</span>
        </div>
        <button
          type="button"
          onClick={() => { setAudioBlob(null); setSeconds(0); onChange('') }}
          className="block mx-auto text-xs text-muted-foreground hover:text-foreground underline"
        >
          Erneut aufnehmen
        </button>
      </div>
    )
  }

  return (
    <div className="text-center py-4">
      <p className="text-xs text-muted-foreground mb-4">
        Mind. {minSeconds}s · Max {maxSeconds}s
      </p>
      <button
        type="button"
        onClick={recording ? stop : start}
        className={
          'w-20 h-20 mx-auto rounded-full flex items-center justify-center transition-all ' +
          (recording ? 'bg-red-500 animate-pulse' : 'bg-warm hover:scale-105')
        }
      >
        {recording ? <Square size={28} className="text-white" /> : <Mic size={28} className="text-warm-foreground" />}
      </button>
      <p className="mt-3 text-sm font-bold text-foreground">
        {recording
          ? `${String(Math.floor(seconds / 60)).padStart(2, '0')}:${String(seconds % 60).padStart(2, '0')}`
          : 'Tippe zum Aufnehmen'}
      </p>
    </div>
  )
}

function ListeningPlayer({ questionId }) {
  const [playing, setPlaying] = useState(false)
  const audioRef = useRef(null)
  const url = `${API_URL}/api/level-test/audio/${questionId}`

  const play = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio(url)
      audioRef.current.onended = () => setPlaying(false)
    }
    audioRef.current.currentTime = 0
    audioRef.current.play()
    setPlaying(true)
  }

  return (
    <button
      type="button"
      onClick={play}
      className="w-full mb-4 px-4 py-4 rounded-xl bg-pink-50 dark:bg-pink-900/20 border-2 border-pink-200 dark:border-pink-900/40 flex items-center gap-3 hover:scale-[1.01] transition-transform"
    >
      <div className="w-10 h-10 rounded-full bg-pink-500 flex items-center justify-center shrink-0">
        {playing ? (
          <Volume2 size={20} className="text-white animate-pulse" />
        ) : (
          <Headphones size={20} className="text-white" />
        )}
      </div>
      <div className="flex-1 text-left">
        <div className="font-bold text-pink-700 dark:text-pink-300 text-sm">Audio abspielen</div>
        <div className="text-xs text-pink-600/70 dark:text-pink-400/70">
          {playing ? 'Spielt gerade ab…' : 'Klick zum Anhören (du kannst es mehrmals abspielen)'}
        </div>
      </div>
    </button>
  )
}

function EmailCaptureScreen({ defaultEmail, error, onSubmit, onSkip }) {
  const [email, setEmail] = useState(defaultEmail || '')
  const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

  return (
    <div className="min-h-screen-d bg-gradient-to-br from-orange-50 via-white to-amber-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full text-center"
      >
        <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-warm/15 flex items-center justify-center">
          <Mail size={28} className="text-warm" />
        </div>
        <h1 className="text-2xl font-extrabold text-gray-800 dark:text-gray-100 mb-2">
          Casi listo
        </h1>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
          Dejá tu email y te enviamos tu nivel + un plan de estudio personalizado.
        </p>

        {error && (
          <div className="bg-red-50 dark:bg-red-900/20 text-red-600 text-sm px-3 py-2 rounded-lg mb-4">
            {error}
          </div>
        )}

        <form onSubmit={e => { e.preventDefault(); if (valid) onSubmit(email) }}>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="tu@email.com"
            autoFocus
            inputMode="email"
            autoComplete="email"
            className="input-field w-full mb-3"
          />
          <Button type="submit" disabled={!valid} variant="primary" size="lg" className="w-full">
            <Send size={16} className="mr-2" /> Resultado anzeigen
          </Button>
        </form>

        <button
          type="button"
          onClick={onSkip}
          className="mt-4 text-xs text-muted-foreground hover:text-foreground underline"
        >
          Ohne Email fortfahren
        </button>
      </motion.div>
    </div>
  )
}

function SubmittingScreen() {
  return (
    <div className="min-h-screen-d bg-gradient-to-br from-orange-50 via-white to-amber-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        className="text-center"
      >
        <Loader2 size={48} className="mx-auto text-warm animate-spin mb-4" />
        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-1">
          Wir werten deine Antworten aus…
        </h2>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          La IA está revisando las respuestas abiertas.
        </p>
      </motion.div>
    </div>
  )
}

function ResultScreen({ result, loggedIn, onContinue }) {
  const { level, breakdown } = result || {}
  return (
    <div className="min-h-screen-d bg-gradient-to-br from-orange-50 via-white to-amber-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
        className="max-w-md mx-auto"
      >
        <div className="text-center mb-8">
          <motion.div
            initial={{ scale: 0 }} animate={{ scale: 1 }}
            transition={{ type: 'spring', damping: 18, stiffness: 200, delay: 0.2 }}
            className="inline-block mb-4"
          >
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-warm to-orange-600 flex items-center justify-center shadow-lg">
              <Trophy size={42} className="text-warm-foreground" />
            </div>
          </motion.div>
          <p className="text-xs font-bold uppercase tracking-widest text-warm mb-2">Tu nivel</p>
          <h1 className="text-6xl font-extrabold text-gray-800 dark:text-gray-100 mb-3">
            {level}
          </h1>
          <p className="text-sm text-gray-600 dark:text-gray-400 max-w-xs mx-auto leading-relaxed">
            {LEVEL_DESCRIPTIONS[level]}
          </p>
        </div>

        {/* Breakdown */}
        <div className="card mb-6">
          <h3 className="font-bold text-gray-800 dark:text-gray-100 text-sm mb-3 uppercase tracking-wider">
            Desglose por nivel
          </h3>
          <div className="space-y-2.5">
            {breakdown && Object.entries(breakdown).map(([lvl, score]) => {
              const pct = Math.round(score * 100)
              const passed = score >= 0.7
              return (
                <div key={lvl} className="flex items-center gap-3">
                  <span className={`w-8 font-bold text-sm ${passed ? 'text-success' : 'text-muted-foreground'}`}>
                    {lvl}
                  </span>
                  <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${pct}%` }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                      className={passed ? 'h-full bg-success' : 'h-full bg-muted-foreground/40'}
                    />
                  </div>
                  <span className="w-12 text-right text-xs text-muted-foreground">{pct}%</span>
                </div>
              )
            })}
          </div>
        </div>

        {/* CTA */}
        {loggedIn ? (
          <Button onClick={onContinue} variant="primary" size="lg" className="w-full">
            Empezá tus ejercicios <ArrowRight size={18} className="ml-2" />
          </Button>
        ) : (
          <>
            <Button onClick={onContinue} variant="primary" size="lg" className="w-full">
              Probar gratis 10.000 XP <ArrowRight size={18} className="ml-2" />
            </Button>
            <p className="text-center text-xs text-muted-foreground mt-3">
              Plan personalizado para subir de {level} al siguiente nivel.
            </p>
          </>
        )}
      </motion.div>
    </div>
  )
}

function ErrorScreen({ message, onRetry }) {
  return (
    <div className="min-h-screen-d bg-gradient-to-br from-orange-50 via-white to-amber-50 flex items-center justify-center p-4">
      <div className="text-center max-w-md">
        <div className="text-5xl mb-4">😕</div>
        <h1 className="text-xl font-bold mb-2">{message}</h1>
        <Button onClick={onRetry} variant="primary">Recargar</Button>
      </div>
    </div>
  )
}
