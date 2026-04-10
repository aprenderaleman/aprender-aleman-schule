import React, { useState, useEffect, useMemo, useRef } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Clock, ArrowLeft, ArrowRight, CheckCircle2, XCircle, Trophy,
  AlertTriangle, BookOpen, Play, RotateCcw, ChevronRight,
  Headphones, Volume2, Eye, EyeOff
} from 'lucide-react'
import Navbar from '../components/Layout/Navbar'
import { useAuth } from '../context/AuthContext'
import { getExamById, gradeObjectiveExam } from '../data/pruefungen'

const API_URL = import.meta.env.VITE_API_URL || ''

/* ==========================
   Helpers
   ========================== */
function formatTime(secs) {
  if (secs < 0) secs = 0
  const m = Math.floor(secs / 60)
  const s = secs % 60
  return `${m}:${s.toString().padStart(2, '0')}`
}

function flatQuestions(exam) {
  const list = []
  for (const part of exam.parts) {
    for (const q of part.questions) list.push({ ...q, _part: part })
  }
  return list
}

/* ==========================
   Main Player
   ========================== */
export default function PruefungPlayer() {
  const { examId } = useParams()
  const navigate = useNavigate()
  const { getToken } = useAuth()
  const exam = useMemo(() => getExamById(examId), [examId])

  const [phase, setPhase] = useState('intro') // intro | running | results
  const [responses, setResponses] = useState({})
  const [partIdx, setPartIdx] = useState(0)
  const [secondsLeft, setSecondsLeft] = useState(0)
  const [attemptId, setAttemptId] = useState(null)
  const [grading, setGrading] = useState(false)
  const [result, setResult] = useState(null)
  const [error, setError] = useState(null)
  const timerRef = useRef(null)

  if (!exam) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <Navbar />
        <div className="max-w-2xl mx-auto px-4 py-20 text-center">
          <AlertTriangle size={48} className="text-orange-500 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">Prüfung nicht gefunden</h1>
          <p className="text-gray-500 dark:text-gray-400 mb-6">Diese Prüfung existiert nicht oder wurde noch nicht veröffentlicht.</p>
          <Link to="/pruefungen" className="inline-flex items-center gap-2 px-5 py-2.5 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition">
            <ArrowLeft size={16} /> Zurück zu Prüfungen
          </Link>
        </div>
      </div>
    )
  }

  /* Start countdown when phase becomes 'running' */
  useEffect(() => {
    if (phase !== 'running') return
    timerRef.current = setInterval(() => {
      setSecondsLeft(s => {
        if (s <= 1) {
          clearInterval(timerRef.current)
          handleSubmit() // auto-submit when time runs out
          return 0
        }
        return s - 1
      })
    }, 1000)
    return () => clearInterval(timerRef.current)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase])

  /* Warn before leaving during exam */
  useEffect(() => {
    if (phase !== 'running') return
    const handler = (e) => { e.preventDefault(); e.returnValue = '' }
    window.addEventListener('beforeunload', handler)
    return () => window.removeEventListener('beforeunload', handler)
  }, [phase])

  const startExam = async () => {
    setError(null)
    try {
      const res = await fetch(`${API_URL}/api/pruefungen/attempts`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${getToken()}` },
        body: JSON.stringify({
          provider: exam.provider,
          level: exam.level,
          module: exam.module,
          examId: exam.id,
          mode: 'simulation',
        }),
      })
      if (!res.ok) {
        const err = await res.json().catch(() => ({}))
        throw new Error(err.error || 'Konnte nicht starten')
      }
      const data = await res.json()
      setAttemptId(data.attemptId)
      setSecondsLeft(exam.durationMinutes * 60)
      setPhase('running')
      setPartIdx(0)
      setResponses({})
      window.scrollTo(0, 0)
    } catch (err) {
      setError(err.message)
    }
  }

  const handleSubmit = async () => {
    if (timerRef.current) clearInterval(timerRef.current)
    setGrading(true)
    setError(null)
    try {
      const grading = gradeObjectiveExam(exam, responses)
      // Save to backend
      if (attemptId) {
        await fetch(`${API_URL}/api/pruefungen/attempts/${attemptId}/finish`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${getToken()}` },
          body: JSON.stringify({
            score: grading.score,
            maxScore: grading.maxScore,
            responses,
            feedback: { detail: grading.detail },
          }),
        })
      }
      setResult(grading)
      setPhase('results')
      window.scrollTo(0, 0)
    } catch (err) {
      setError(err.message || 'Fehler beim Abgeben')
    } finally {
      setGrading(false)
    }
  }

  const setAnswer = (qid, value) => {
    setResponses(prev => ({ ...prev, [qid]: value }))
  }

  const totalQuestions = useMemo(() => flatQuestions(exam).length, [exam])
  const answeredCount = useMemo(() => {
    let n = 0
    for (const q of flatQuestions(exam)) {
      const r = responses[q.id]
      if (q.type === 'matching') {
        if (r && Object.keys(r).length === Object.keys(q.correct).length) n++
      } else if (r !== undefined) {
        n++
      }
    }
    return n
  }, [exam, responses])

  /* ───── INTRO PHASE ───── */
  if (phase === 'intro') {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <Navbar />
        <main className="max-w-3xl mx-auto px-4 py-10">
          <Link to="/pruefungen" className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-indigo-600 mb-6">
            <ArrowLeft size={14} /> Zurück
          </Link>
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-white dark:bg-gray-800 rounded-2xl border-2 border-indigo-200 dark:border-indigo-800 p-6 md:p-8">
            <div className="inline-flex items-center gap-2 bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 px-3 py-1 rounded-full text-xs font-bold mb-3">
              <BookOpen size={12} /> Goethe-Zertifikat {exam.level} · {moduleLabel(exam.module)}
            </div>
            <h1 className="text-2xl md:text-3xl font-extrabold text-gray-800 dark:text-gray-100 mb-2">{exam.title}</h1>
            {exam.description && <p className="text-gray-500 dark:text-gray-400 mb-6">{exam.description}</p>}

            <div className="grid grid-cols-3 gap-3 mb-6">
              <Stat label="Dauer" value={`${exam.durationMinutes} min`} />
              <Stat label="Aufgaben" value={totalQuestions} />
              <Stat label="Bestanden ab" value={`${exam.passScore}/${exam.maxScore}`} />
            </div>

            <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-4 mb-6">
              <p className="text-sm font-bold text-amber-700 dark:text-amber-300 mb-2 flex items-center gap-2">
                <AlertTriangle size={14} /> Vor dem Start lesen
              </p>
              <ul className="text-sm text-amber-800 dark:text-amber-200 space-y-1 list-disc list-inside">
                <li>Du hast {exam.durationMinutes} Minuten Zeit. Der Test endet automatisch.</li>
                <li>Beantworte alle Aufgaben — falsche Antworten zählen 0 Punkte, nicht negativ.</li>
                <li>Das Schließen des Tabs unterbricht die Prüfung NICHT.</li>
                <li>Du kannst zwischen den Teilen frei wechseln, bevor du abgibst.</li>
              </ul>
            </div>

            {error && <div className="bg-red-50 border border-red-200 text-red-700 rounded-xl p-3 mb-4 text-sm">{error}</div>}

            <button
              onClick={startExam}
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold py-4 rounded-2xl text-lg hover:from-indigo-700 hover:to-purple-700 transition shadow-lg"
            >
              <Play size={20} /> Prüfung starten
            </button>
          </motion.div>
        </main>
      </div>
    )
  }

  /* ───── RESULTS PHASE ───── */
  if (phase === 'results' && result) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <Navbar />
        <main className="max-w-3xl mx-auto px-4 py-10">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className={`rounded-2xl p-8 mb-6 text-white ${result.passed ? 'bg-gradient-to-br from-green-500 to-emerald-600' : 'bg-gradient-to-br from-orange-500 to-red-600'}`}>
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="text-sm font-bold uppercase tracking-wide opacity-90">Ergebnis</p>
                <h1 className="text-3xl md:text-4xl font-extrabold">{result.passed ? 'Bestanden!' : 'Nicht bestanden'}</h1>
              </div>
              {result.passed ? <Trophy size={48} className="opacity-90" /> : <AlertTriangle size={48} className="opacity-90" />}
            </div>
            <div className="flex items-baseline gap-2 mb-3">
              <span className="text-6xl font-extrabold">{result.score}</span>
              <span className="text-2xl opacity-80">/ {result.maxScore}</span>
              <span className="text-2xl opacity-80 ml-2">({result.percentage}%)</span>
            </div>
            <div className="h-3 bg-white/20 rounded-full overflow-hidden">
              <div className="h-full bg-white" style={{ width: `${result.percentage}%` }} />
            </div>
            <p className="text-sm opacity-90 mt-3">
              {result.passed
                ? `Glückwunsch! Du hast die Bestehensgrenze von ${exam.passScore}/${exam.maxScore} überschritten.`
                : `Du brauchst mindestens ${exam.passScore}/${exam.maxScore} (60%), um zu bestehen. Schau dir die Lösungen an und versuche es noch einmal.`}
            </p>
          </motion.div>

          {/* Per-question feedback */}
          <h2 className="font-bold text-gray-800 dark:text-gray-100 text-lg mb-3">Detaillierte Lösungen</h2>
          <div className="space-y-4 mb-6">
            {exam.parts.map((part) => (
              <div key={part.id} className="bg-white dark:bg-gray-800 rounded-2xl p-5 border border-gray-200 dark:border-gray-700">
                <h3 className="font-bold text-gray-800 dark:text-gray-100 mb-3">{part.title}</h3>
                <div className="space-y-2">
                  {part.questions.map((q) => {
                    const detail = result.detail.find(d => d.questionId === q.id)
                    return <ResultRow key={q.id} question={q} detail={detail} />
                  })}
                </div>
              </div>
            ))}
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => { setPhase('intro'); setResult(null); setResponses({}); setAttemptId(null) }}
              className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border-2 border-indigo-300 text-indigo-600 font-bold hover:bg-indigo-50"
            >
              <RotateCcw size={16} /> Wiederholen
            </button>
            <button
              onClick={() => navigate('/pruefungen')}
              className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-indigo-600 text-white font-bold hover:bg-indigo-700"
            >
              Zurück zum Dashboard <ChevronRight size={16} />
            </button>
          </div>
        </main>
      </div>
    )
  }

  /* ───── RUNNING PHASE ───── */
  const part = exam.parts[partIdx]
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Sticky header with timer + progress */}
      <header className="sticky top-0 z-30 bg-white/95 dark:bg-gray-900/95 backdrop-blur border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-wide font-bold">{exam.title}</p>
            <p className="text-sm text-gray-700 dark:text-gray-200 font-semibold">{part.title} · {answeredCount}/{totalQuestions} beantwortet</p>
          </div>
          <div className={`flex items-center gap-2 px-4 py-2 rounded-xl font-bold text-sm ${
            secondsLeft < 60 ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300' : 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300'
          }`}>
            <Clock size={16} /> {formatTime(secondsLeft)}
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-6">
        {/* Part navigation pills */}
        <div className="flex flex-wrap gap-2 mb-6">
          {exam.parts.map((p, i) => (
            <button
              key={p.id}
              onClick={() => setPartIdx(i)}
              className={`px-3 py-1.5 rounded-full text-xs font-bold transition ${
                i === partIdx
                  ? 'bg-indigo-600 text-white shadow'
                  : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-indigo-300'
              }`}
            >
              {p.title}
            </button>
          ))}
        </div>

        <PartView part={part} responses={responses} setAnswer={setAnswer} />

        {/* Bottom navigation */}
        <div className="flex items-center justify-between gap-3 mt-8">
          <button
            onClick={() => setPartIdx(i => Math.max(0, i - 1))}
            disabled={partIdx === 0}
            className="flex items-center gap-1 px-4 py-2.5 rounded-xl text-sm font-bold text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 disabled:opacity-30"
          >
            <ArrowLeft size={16} /> Vorheriger Teil
          </button>
          {partIdx < exam.parts.length - 1 ? (
            <button
              onClick={() => { setPartIdx(i => i + 1); window.scrollTo(0, 0) }}
              className="flex items-center gap-1 px-5 py-2.5 rounded-xl text-sm font-bold bg-indigo-600 text-white hover:bg-indigo-700"
            >
              Nächster Teil <ArrowRight size={16} />
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              disabled={grading}
              className="flex items-center gap-1 px-6 py-2.5 rounded-xl text-sm font-bold bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:from-green-700 hover:to-emerald-700 shadow-md disabled:opacity-60"
            >
              {grading ? 'Wird abgegeben…' : 'Prüfung abgeben'} <CheckCircle2 size={16} />
            </button>
          )}
        </div>
      </main>
    </div>
  )
}

/* ==========================
   Subcomponents
   ========================== */
function Stat({ label, value }) {
  return (
    <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-3 text-center">
      <p className="text-xs text-gray-500 dark:text-gray-400 font-semibold">{label}</p>
      <p className="text-lg font-extrabold text-gray-800 dark:text-gray-100">{value}</p>
    </div>
  )
}

function moduleLabel(m) {
  return { lesen: 'Lesen', hoeren: 'Hören', schreiben: 'Schreiben', sprechen: 'Sprechen' }[m] || m
}

function PartView({ part, responses, setAnswer }) {
  return (
    <motion.div key={part.id} initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
      {/* Instructions */}
      <div className="bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800 rounded-xl p-4">
        <p className="text-sm text-indigo-800 dark:text-indigo-200 font-medium">{part.instructions}</p>
      </div>

      {/* Context (reading texts) */}
      {part.context && <ContextView ctx={part.context} />}

      {/* Questions */}
      {part.questions.map((q, idx) => (
        <div key={q.id} className="space-y-3">
          {q.audio && <AudioContext ctx={{ type: 'audio', ...q.audio }} />}
          <QuestionRenderer
            q={q}
            idx={idx}
            value={responses[q.id]}
            onChange={(v) => setAnswer(q.id, v)}
          />
        </div>
      ))}
    </motion.div>
  )
}

function ContextView({ ctx }) {
  if (ctx.type === 'multi-text' && Array.isArray(ctx.content)) {
    return (
      <div className="space-y-4">
        {ctx.content.map((item, i) => (
          <div key={i} className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-5">
            {item.label && <p className="text-xs text-gray-500 dark:text-gray-400 font-bold uppercase tracking-wide mb-2">{item.label}</p>}
            <div className="text-sm text-gray-800 dark:text-gray-100 whitespace-pre-line leading-relaxed">{item.text}</div>
          </div>
        ))}
      </div>
    )
  }
  if (ctx.type === 'audio') {
    return <AudioContext ctx={ctx} />
  }
  return null
}

function AudioContext({ ctx }) {
  const allowed = ctx.allowedPlays || 1
  const [playsLeft, setPlaysLeft] = useState(allowed)
  const [showTranscript, setShowTranscript] = useState(false)
  const audioRef = useRef(null)

  const handlePlay = () => {
    if (playsLeft <= 0) {
      if (audioRef.current) audioRef.current.pause()
      return
    }
  }
  const handleEnded = () => {
    setPlaysLeft(p => Math.max(0, p - 1))
  }

  return (
    <div className="bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 border-2 border-indigo-200 dark:border-indigo-800 rounded-2xl p-5">
      <div className="flex items-center justify-between mb-3">
        <p className="text-sm font-bold text-indigo-800 dark:text-indigo-200 flex items-center gap-2">
          <Headphones size={16} /> {ctx.label || 'Hörtext'}
        </p>
        <div className="flex items-center gap-2 text-xs">
          <span className={`px-2 py-1 rounded-full font-bold ${playsLeft > 0 ? 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300' : 'bg-gray-200 text-gray-500'}`}>
            <Volume2 size={12} className="inline mr-1" />
            {playsLeft}/{allowed}{allowed === 1 ? ' x hören' : ' Wiedergaben'}
          </span>
        </div>
      </div>

      {ctx.audioUrl ? (
        <audio
          ref={audioRef}
          src={ctx.audioUrl}
          controls
          controlsList="nodownload noplaybackrate"
          onPlay={handlePlay}
          onEnded={handleEnded}
          className="w-full"
        />
      ) : (
        <div className="bg-white/60 dark:bg-gray-800/60 rounded-xl p-4 text-center">
          <p className="text-xs text-gray-600 dark:text-gray-300 italic">
            Audio wird gerade aufgenommen. Bis dahin kannst du das Transkript lesen.
          </p>
        </div>
      )}

      {ctx.transcript && (
        <div className="mt-3">
          <button
            type="button"
            onClick={() => setShowTranscript(s => !s)}
            className="text-xs font-bold text-indigo-700 dark:text-indigo-300 hover:underline flex items-center gap-1"
          >
            {showTranscript ? <EyeOff size={12} /> : <Eye size={12} />}
            {showTranscript ? 'Transkript verstecken' : (ctx.audioUrl ? 'Transkript anzeigen' : 'Transkript lesen')}
          </button>
          {showTranscript && (
            <div className="mt-2 bg-white dark:bg-gray-800 border border-indigo-100 dark:border-indigo-900 rounded-xl p-4 text-sm text-gray-800 dark:text-gray-100 whitespace-pre-line leading-relaxed">
              {ctx.transcript}
            </div>
          )}
        </div>
      )}
    </div>
  )
}

function QuestionRenderer({ q, idx, value, onChange }) {
  if (q.type === 'true-false') {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-5">
        <p className="text-sm text-gray-800 dark:text-gray-100 mb-3">
          <span className="font-bold text-indigo-600 mr-1">{idx + 1}.</span> {q.statement}
        </p>
        <div className="flex gap-2">
          {[true, false].map(v => (
            <button
              key={v.toString()}
              onClick={() => onChange(v)}
              className={`flex-1 py-2.5 rounded-xl text-sm font-bold border-2 transition ${
                value === v
                  ? v ? 'bg-green-500 text-white border-green-500' : 'bg-red-500 text-white border-red-500'
                  : 'bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-300 border-gray-200 dark:border-gray-600 hover:border-indigo-300'
              }`}
            >
              {v ? 'Richtig' : 'Falsch'}
            </button>
          ))}
        </div>
      </div>
    )
  }

  if (q.type === 'multiple-choice') {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-5">
        <p className="text-sm text-gray-800 dark:text-gray-100 mb-4">
          <span className="font-bold text-indigo-600 mr-1">{idx + 1}.</span> {q.prompt}
        </p>
        <div className="space-y-2">
          {q.options.map(opt => (
            <button
              key={opt.id}
              onClick={() => onChange(opt.id)}
              className={`w-full text-left p-3 rounded-xl border-2 text-sm transition ${
                value === opt.id
                  ? 'bg-indigo-50 dark:bg-indigo-900/30 border-indigo-500 text-indigo-800 dark:text-indigo-200 font-semibold'
                  : 'bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-200 hover:border-indigo-300'
              }`}
            >
              <span className="font-bold mr-2">{opt.id})</span> {opt.text}
            </button>
          ))}
        </div>
      </div>
    )
  }

  if (q.type === 'matching') {
    const value0 = value || {}
    return (
      <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-5">
        {q.instructions && <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">{q.instructions}</p>}
        <div className="space-y-4">
          {q.items.map((item, i) => (
            <div key={item.id} className="border-l-4 border-indigo-400 pl-3">
              <p className="text-sm text-gray-800 dark:text-gray-100 mb-2">
                <span className="font-bold text-indigo-600 mr-1">{i + 1}.</span> {item.text}
              </p>
              <select
                value={value0[item.id] || ''}
                onChange={(e) => onChange({ ...value0, [item.id]: e.target.value || undefined })}
                className="w-full px-3 py-2 rounded-lg border-2 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-900 text-sm text-gray-800 dark:text-gray-100 focus:border-indigo-500 outline-none"
              >
                <option value="">— Anzeige wählen —</option>
                {q.targets.map(t => (
                  <option key={t.id} value={t.id}>{t.id}) {t.text.slice(0, 80)}{t.text.length > 80 ? '…' : ''}</option>
                ))}
              </select>
            </div>
          ))}
        </div>

        <details className="mt-4 text-xs text-gray-500 dark:text-gray-400">
          <summary className="cursor-pointer font-semibold hover:text-indigo-600">Alle Anzeigen vollständig anzeigen</summary>
          <div className="mt-3 space-y-2">
            {q.targets.map(t => (
              <div key={t.id} className="bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
                <span className="font-bold mr-2">{t.id})</span>{t.text}
              </div>
            ))}
          </div>
        </details>
      </div>
    )
  }

  return null
}

function ResultRow({ question, detail }) {
  if (!detail) return null
  if (detail.type === 'matching') {
    return (
      <div className="text-sm">
        <p className="font-semibold text-gray-700 dark:text-gray-200 mb-1">{question.id}: {detail.earned}/{detail.possible} Punkte</p>
        <div className="space-y-1 text-xs">
          {Object.entries(detail.items).map(([itemId, info]) => {
            const item = question.items.find(i => i.id === itemId)
            const correctTarget = question.targets.find(t => t.id === info.correct)
            return (
              <div key={itemId} className={`pl-3 border-l-2 ${info.ok ? 'border-green-400' : 'border-red-400'}`}>
                <span className="font-medium">{item?.text}</span>
                <br />
                <span className={info.ok ? 'text-green-600' : 'text-red-600'}>
                  {info.ok ? '✓' : '✗'} Richtig: <strong>{info.correct})</strong> {correctTarget?.text.slice(0, 60)}…
                </span>
              </div>
            )
          })}
        </div>
      </div>
    )
  }

  const isCorrect = detail.ok
  return (
    <div className={`flex items-start gap-2 text-sm py-1.5 ${isCorrect ? 'text-green-700 dark:text-green-300' : 'text-red-700 dark:text-red-300'}`}>
      {isCorrect ? <CheckCircle2 size={16} className="mt-0.5 shrink-0" /> : <XCircle size={16} className="mt-0.5 shrink-0" />}
      <div className="flex-1">
        <p className="font-medium text-gray-800 dark:text-gray-100">
          {question.statement || question.prompt}
        </p>
        {!isCorrect && (
          <p className="text-xs mt-0.5">
            Deine Antwort: <strong>{formatAnswer(question, detail.user)}</strong> · Richtig: <strong>{formatAnswer(question, detail.correct)}</strong>
          </p>
        )}
      </div>
    </div>
  )
}

function formatAnswer(q, val) {
  if (val === null || val === undefined) return '—'
  if (q.type === 'true-false') return val === true ? 'Richtig' : 'Falsch'
  if (q.type === 'multiple-choice') {
    const opt = q.options.find(o => o.id === val)
    return opt ? `${val}) ${opt.text}` : val
  }
  return String(val)
}
