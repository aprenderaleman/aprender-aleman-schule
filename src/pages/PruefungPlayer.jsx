import React, { useState, useEffect, useMemo, useRef } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Clock, ArrowLeft, ArrowRight, CheckCircle2, XCircle, Trophy,
  AlertTriangle, BookOpen, Play, RotateCcw, ChevronRight,
  Headphones, Volume2, Eye, EyeOff, Mic, Square, Loader2, Pause
} from 'lucide-react'
import Navbar from '../components/Layout/Navbar'
import { useAuth } from '../context/AuthContext'
import { useWakeLock } from '../hooks/useWakeLock'
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
    if (Array.isArray(part.questions)) {
      for (const q of part.questions) list.push({ ...q, _part: part })
    }
  }
  return list
}

function countTotalItems(exam) {
  let n = 0
  for (const part of exam.parts) {
    if (Array.isArray(part.questions)) n += part.questions.length
    else if (part.kind === 'formular') n += part.fields.length
    else if (part.kind === 'writing-task') n += 1
    else if (part.kind === 'speaking-task') n += 1
  }
  return n
}

function countAnswered(exam, responses) {
  let n = 0
  for (const part of exam.parts) {
    if (Array.isArray(part.questions)) {
      for (const q of part.questions) {
        const r = responses[q.id]
        if (q.type === 'matching') {
          if (r && Object.keys(r).length === Object.keys(q.correct).length) n++
        } else if (r !== undefined) {
          n++
        }
      }
    } else if (part.kind === 'formular') {
      const v = responses[part.id] || {}
      for (const f of part.fields) if ((v[f.id] || '').trim()) n++
    } else if (part.kind === 'writing-task') {
      if ((responses[part.id] || '').trim()) n++
    } else if (part.kind === 'speaking-task') {
      const v = responses[part.id]
      if (v && (v.blob || v.transcript)) n++
    }
  }
  return n
}

/* ==========================
   Main Player
   ========================== */
export default function PruefungPlayer() {
  const { examId } = useParams()
  const navigate = useNavigate()
  const { getToken } = useAuth()
  const exam = useMemo(() => getExamById(examId), [examId])

  // Keep the screen awake during the exam
  useWakeLock(!!exam)

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
      // Objective grading (Lesen / Hören questions)
      const objective = gradeObjectiveExam(exam, responses)

      // Subjective + formular grading
      const writingFeedback = {}
      let extraScore = 0
      let extraMax = 0
      let combinedDetail = [...objective.detail]

      for (const part of exam.parts) {
        if (part.kind === 'formular') {
          const userVals = responses[part.id] || {}
          let earned = 0
          const fieldDetails = []
          for (const f of part.fields) {
            const userVal = (userVals[f.id] || '').trim().toLowerCase()
            const ok = (f.expected || []).some(exp => {
              const e = String(exp).trim().toLowerCase()
              return userVal === e || (userVal && e.includes(userVal)) || (userVal && userVal.includes(e))
            })
            if (ok) earned += f.points || 1
            fieldDetails.push({ id: f.id, label: f.label, user: userVals[f.id] || '', expected: f.expected, ok, points: f.points || 1 })
          }
          const possible = part.fields.reduce((s, f) => s + (f.points || 1), 0)
          extraScore += earned
          extraMax += possible
          combinedDetail.push({
            partId: part.id,
            type: 'formular',
            earned,
            possible,
            fields: fieldDetails,
          })
        }

        if (part.kind === 'speaking-task') {
          const v = responses[part.id]
          const possible = part.maxScore || 25
          extraMax += possible
          if (!v || !v.blob) {
            combinedDetail.push({
              partId: part.id,
              type: 'speaking-task',
              earned: 0,
              possible,
              skipped: true,
            })
            continue
          }
          try {
            // Transcribe
            const tRes = await fetch(`${API_URL}/api/pruefungen/transcribe-sprechen`, {
              method: 'POST',
              headers: {
                'Content-Type': v.mimeType || 'audio/webm',
                Authorization: `Bearer ${getToken()}`,
              },
              body: v.blob,
            })
            if (!tRes.ok) throw new Error('Transkription fehlgeschlagen')
            const { transcript } = await tRes.json()

            // Persist transcript on response (so it survives serialization)
            v.transcript = transcript

            if (!transcript || !transcript.trim()) {
              combinedDetail.push({
                partId: part.id,
                type: 'speaking-task',
                earned: 0,
                possible,
                error: 'Keine Sprache erkannt.',
              })
              continue
            }

            // Grade
            const gRes = await fetch(`${API_URL}/api/pruefungen/grade-sprechen`, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${getToken()}` },
              body: JSON.stringify({
                level: exam.level,
                taskType: part.taskType,
                taskPrompt: part.taskPrompt + (part.bullets ? '\n\nPunkte:\n' + part.bullets.map(b => `- ${b}`).join('\n') : ''),
                transcript,
                durationSeconds: v.durationSeconds || 0,
              }),
            })
            if (!gRes.ok) throw new Error('KI-Bewertung fehlgeschlagen')
            const aiResult = await gRes.json()
            const earned = Math.round((aiResult.total / 100) * possible)
            extraScore += earned
            writingFeedback[part.id] = aiResult
            combinedDetail.push({
              partId: part.id,
              type: 'speaking-task',
              earned,
              possible,
              transcript,
              durationSeconds: v.durationSeconds || 0,
              ai: aiResult,
            })
          } catch (e) {
            combinedDetail.push({
              partId: part.id,
              type: 'speaking-task',
              earned: 0,
              possible,
              error: e.message,
            })
          }
        }

        if (part.kind === 'writing-task') {
          const submission = (responses[part.id] || '').trim()
          const possible = part.maxScore || 25
          extraMax += possible
          if (!submission) {
            combinedDetail.push({
              partId: part.id,
              type: 'writing-task',
              earned: 0,
              possible,
              skipped: true,
            })
            continue
          }
          // Call AI grader
          try {
            const res = await fetch(`${API_URL}/api/pruefungen/grade-schreiben`, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${getToken()}` },
              body: JSON.stringify({
                level: exam.level,
                taskType: part.taskType,
                taskPrompt: part.taskPrompt + (part.bullets ? '\n\nPunkte:\n' + part.bullets.map(b => `- ${b}`).join('\n') : ''),
                submission,
                minWords: part.minWords,
              }),
            })
            if (!res.ok) throw new Error('AI-Bewertung fehlgeschlagen')
            const aiResult = await res.json()
            // Map AI total (0-100) to part.maxScore
            const earned = Math.round((aiResult.total / 100) * possible)
            extraScore += earned
            writingFeedback[part.id] = aiResult
            combinedDetail.push({
              partId: part.id,
              type: 'writing-task',
              earned,
              possible,
              ai: aiResult,
            })
          } catch (e) {
            combinedDetail.push({
              partId: part.id,
              type: 'writing-task',
              earned: 0,
              possible,
              error: e.message,
            })
          }
        }
      }

      const totalScore = objective.score + extraScore
      const totalMax = objective.maxScore + extraMax
      const percentage = totalMax > 0 ? Math.round((totalScore / totalMax) * 100) : 0
      const passed = percentage >= 60
      const finalResult = {
        score: totalScore,
        maxScore: totalMax,
        percentage,
        passed,
        detail: combinedDetail,
        writingFeedback,
      }

      // Save to backend (strip Blobs from speaking-task responses)
      const cleanResponses = {}
      for (const k of Object.keys(responses)) {
        const v = responses[k]
        if (v && typeof v === 'object' && v.blob instanceof Blob) {
          cleanResponses[k] = {
            transcript: v.transcript || '',
            durationSeconds: v.durationSeconds || 0,
            mimeType: v.mimeType || null,
          }
        } else {
          cleanResponses[k] = v
        }
      }
      if (attemptId) {
        await fetch(`${API_URL}/api/pruefungen/attempts/${attemptId}/finish`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${getToken()}` },
          body: JSON.stringify({
            score: finalResult.score,
            maxScore: finalResult.maxScore,
            responses: cleanResponses,
            feedback: { detail: combinedDetail, writingFeedback },
          }),
        })
      }
      setResult(finalResult)
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

  const totalQuestions = useMemo(() => countTotalItems(exam), [exam])
  const answeredCount = useMemo(() => countAnswered(exam, responses), [exam, responses])

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
            {exam.parts.map((part) => {
              const partDetail = result.detail.find(d => d.partId === part.id && (d.type === 'formular' || d.type === 'writing-task' || d.type === 'speaking-task'))
              return (
                <div key={part.id} className="bg-white dark:bg-gray-800 rounded-2xl p-5 border border-gray-200 dark:border-gray-700">
                  <h3 className="font-bold text-gray-800 dark:text-gray-100 mb-3">{part.title}</h3>
                  {/* Objective questions */}
                  {Array.isArray(part.questions) && (
                    <div className="space-y-2">
                      {part.questions.map((q) => {
                        const detail = result.detail.find(d => d.questionId === q.id)
                        return <ResultRow key={q.id} question={q} detail={detail} />
                      })}
                    </div>
                  )}
                  {/* Formular feedback */}
                  {part.kind === 'formular' && partDetail && (
                    <FormularResult part={part} detail={partDetail} />
                  )}
                  {/* Writing-task feedback */}
                  {part.kind === 'writing-task' && partDetail && (
                    <WritingTaskResult part={part} detail={partDetail} submission={result && (result.responses || {})[part.id]} />
                  )}
                  {/* Speaking-task feedback */}
                  {part.kind === 'speaking-task' && partDetail && (
                    <SpeakingTaskResult part={part} detail={partDetail} />
                  )}
                </div>
              )
            })}
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
        {error && <div className="bg-red-50 border border-red-200 text-red-700 rounded-xl p-3 mb-4 text-sm">{error}</div>}
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

      {/* Specialized part kinds (Schreiben/Sprechen) */}
      {part.kind === 'formular' && (
        <FormularView part={part} value={responses[part.id] || {}} onChange={(v) => setAnswer(part.id, v)} />
      )}
      {part.kind === 'writing-task' && (
        <WritingTaskView part={part} value={responses[part.id] || ''} onChange={(v) => setAnswer(part.id, v)} />
      )}
      {part.kind === 'speaking-task' && (
        <SpeakingTaskView part={part} value={responses[part.id] || null} onChange={(v) => setAnswer(part.id, v)} />
      )}

      {/* Default: questions array (Lesen/Hören) */}
      {part.questions && part.questions.map((q, idx) => (
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

function FormularView({ part, value, onChange }) {
  return (
    <div className="space-y-4">
      {/* Source text */}
      {part.sourceText && (
        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-5">
          <p className="text-xs text-gray-500 dark:text-gray-400 font-bold uppercase tracking-wide mb-2">Informationsquelle</p>
          <div className="text-sm text-gray-800 dark:text-gray-100 whitespace-pre-line leading-relaxed">{part.sourceText}</div>
        </div>
      )}

      {/* Form fields */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl border-2 border-indigo-200 dark:border-indigo-800 p-5">
        {part.formTitle && <h3 className="font-bold text-gray-800 dark:text-gray-100 mb-4 text-center">{part.formTitle}</h3>}
        <div className="space-y-3">
          {part.fields.map((f) => (
            <div key={f.id} className="flex flex-col">
              <label className="text-xs font-semibold text-gray-600 dark:text-gray-300 mb-1">{f.label}</label>
              <input
                type="text"
                value={value[f.id] || ''}
                onChange={(e) => onChange({ ...value, [f.id]: e.target.value })}
                className="w-full px-3 py-2 rounded-lg border-2 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-900 text-sm text-gray-800 dark:text-gray-100 focus:border-indigo-500 outline-none"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function WritingTaskView({ part, value, onChange }) {
  const wordCount = value.trim() ? value.trim().split(/\s+/).filter(Boolean).length : 0
  const meetsMin = wordCount >= (part.minWords || 0)
  return (
    <div className="space-y-4">
      <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-5">
        <p className="text-xs text-gray-500 dark:text-gray-400 font-bold uppercase tracking-wide mb-2">{part.taskType || 'Schreibaufgabe'}</p>
        <p className="text-sm text-gray-800 dark:text-gray-100 mb-4">{part.taskPrompt}</p>
        {part.bullets && part.bullets.length > 0 && (
          <ul className="space-y-1.5 text-sm text-gray-700 dark:text-gray-200 list-disc list-inside">
            {part.bullets.map((b, i) => <li key={i}>{b}</li>)}
          </ul>
        )}
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-2xl border-2 border-indigo-200 dark:border-indigo-800 p-5">
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Schreibe hier deinen Text…"
          rows={12}
          className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-900 text-sm text-gray-800 dark:text-gray-100 focus:border-indigo-500 outline-none resize-y leading-relaxed"
        />
        <div className="flex items-center justify-between mt-2 text-xs">
          <span className={`font-bold ${meetsMin ? 'text-green-600 dark:text-green-400' : 'text-orange-600 dark:text-orange-400'}`}>
            {wordCount} Wörter {part.minWords ? `· min. ${part.minWords}` : ''}
          </span>
          {meetsMin && <span className="text-green-600 dark:text-green-400">✓ Mindestlänge erreicht</span>}
        </div>
      </div>
    </div>
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

function FormularResult({ part, detail }) {
  return (
    <div>
      <p className="font-semibold text-gray-700 dark:text-gray-200 text-sm mb-2">{detail.earned}/{detail.possible} Punkte</p>
      <div className="space-y-2 text-sm">
        {detail.fields.map((f) => (
          <div key={f.id} className={`flex items-start gap-2 pl-3 border-l-2 ${f.ok ? 'border-green-400' : 'border-red-400'}`}>
            {f.ok ? <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-green-600" /> : <XCircle size={16} className="mt-0.5 shrink-0 text-red-600" />}
            <div>
              <p className="font-medium text-gray-800 dark:text-gray-100">{f.label}</p>
              <p className="text-xs text-gray-600 dark:text-gray-300">
                Deine Antwort: <strong>{f.user || '—'}</strong>
                {!f.ok && <> · Erwartet: <strong>{Array.isArray(f.expected) ? f.expected[0] : f.expected}</strong></>}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function WritingTaskResult({ part, detail }) {
  if (detail.skipped) {
    return <p className="text-sm text-orange-600 dark:text-orange-400">Du hast diese Aufgabe nicht beantwortet (0 Punkte).</p>
  }
  if (detail.error) {
    return <p className="text-sm text-red-600 dark:text-red-400">Fehler bei der KI-Bewertung: {detail.error}</p>
  }
  const ai = detail.ai
  if (!ai) return null

  const criteria = [
    { key: 'erfuellung', label: 'Erfüllung', max: 25 },
    { key: 'kohaerenz', label: 'Kohärenz', max: 25 },
    { key: 'wortschatz', label: 'Wortschatz', max: 25 },
    { key: 'strukturen', label: 'Strukturen', max: 25 },
  ]

  return (
    <div className="space-y-4">
      <div className="flex items-baseline gap-2">
        <span className="text-2xl font-extrabold text-gray-800 dark:text-gray-100">{detail.earned}</span>
        <span className="text-sm text-gray-500">/ {detail.possible} Punkte · KI-Gesamtwertung {ai.total}/100</span>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        {criteria.map(c => (
          <div key={c.key} className="bg-gray-50 dark:bg-gray-700 rounded-lg p-2 text-center">
            <p className="text-[10px] text-gray-500 dark:text-gray-400 font-bold uppercase">{c.label}</p>
            <p className="text-lg font-extrabold text-indigo-600 dark:text-indigo-300">{ai.scores?.[c.key] ?? 0}/{c.max}</p>
          </div>
        ))}
      </div>

      {ai.overall && (
        <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-xl p-3 text-sm text-indigo-900 dark:text-indigo-100">
          {ai.overall}
        </div>
      )}

      {Array.isArray(ai.errors) && ai.errors.length > 0 && (
        <div>
          <p className="text-xs font-bold text-gray-600 dark:text-gray-300 uppercase mb-2">Fehler</p>
          <div className="space-y-2">
            {ai.errors.map((e, i) => (
              <div key={i} className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-2 text-xs">
                <p className="text-red-700 dark:text-red-300"><span className="line-through">{e.original}</span> → <strong>{e.correction}</strong></p>
                {e.explanation && <p className="text-red-600 dark:text-red-400 mt-0.5">{e.explanation}</p>}
              </div>
            ))}
          </div>
        </div>
      )}

      {Array.isArray(ai.strengths) && ai.strengths.length > 0 && (
        <div>
          <p className="text-xs font-bold text-green-700 dark:text-green-400 uppercase mb-1">Stärken</p>
          <ul className="text-xs text-gray-700 dark:text-gray-200 list-disc list-inside space-y-0.5">
            {ai.strengths.map((s, i) => <li key={i}>{s}</li>)}
          </ul>
        </div>
      )}

      {Array.isArray(ai.improvements) && ai.improvements.length > 0 && (
        <div>
          <p className="text-xs font-bold text-orange-700 dark:text-orange-400 uppercase mb-1">Verbesserungen</p>
          <ul className="text-xs text-gray-700 dark:text-gray-200 list-disc list-inside space-y-0.5">
            {ai.improvements.map((s, i) => <li key={i}>{s}</li>)}
          </ul>
        </div>
      )}
    </div>
  )
}

/* ==========================
   Sprechen: recorder + feedback
   ========================== */
function pickRecorderMime() {
  if (typeof MediaRecorder === 'undefined') return ''
  const candidates = [
    'audio/webm;codecs=opus',
    'audio/webm',
    'audio/ogg;codecs=opus',
    'audio/ogg',
    'audio/mp4',
  ]
  for (const t of candidates) {
    if (MediaRecorder.isTypeSupported(t)) return t
  }
  return ''
}

function SpeakingTaskView({ part, value, onChange }) {
  // Phases: idle | preparing | recording | recorded
  const initialPhase = value && value.blob ? 'recorded' : 'idle'
  const [phase, setPhase] = useState(initialPhase)
  const [secondsLeft, setSecondsLeft] = useState(0)
  const [error, setError] = useState(null)
  const mediaRecorderRef = useRef(null)
  const streamRef = useRef(null)
  const chunksRef = useRef([])
  const startedAtRef = useRef(0)
  const tickRef = useRef(null)
  const audioUrl = useMemo(() => {
    if (value && value.blob) return URL.createObjectURL(value.blob)
    return null
  }, [value && value.blob])

  // Cleanup blob URL on unmount/change
  useEffect(() => {
    return () => { if (audioUrl) URL.revokeObjectURL(audioUrl) }
  }, [audioUrl])

  // Cleanup mic stream on unmount
  useEffect(() => {
    return () => {
      if (streamRef.current) streamRef.current.getTracks().forEach(t => t.stop())
      if (tickRef.current) clearInterval(tickRef.current)
    }
  }, [])

  const startPreparation = () => {
    setError(null)
    if (!part.preparationSeconds) return startRecording()
    setPhase('preparing')
    setSecondsLeft(part.preparationSeconds)
    if (tickRef.current) clearInterval(tickRef.current)
    tickRef.current = setInterval(() => {
      setSecondsLeft(s => {
        if (s <= 1) {
          clearInterval(tickRef.current)
          startRecording()
          return 0
        }
        return s - 1
      })
    }, 1000)
  }

  const skipPreparation = () => {
    if (tickRef.current) clearInterval(tickRef.current)
    startRecording()
  }

  const startRecording = async () => {
    setError(null)
    try {
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        throw new Error('Dein Browser unterstützt keine Audioaufnahme.')
      }
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      streamRef.current = stream
      const mimeType = pickRecorderMime()
      const mr = new MediaRecorder(stream, mimeType ? { mimeType } : undefined)
      mediaRecorderRef.current = mr
      chunksRef.current = []
      mr.ondataavailable = (e) => { if (e.data && e.data.size > 0) chunksRef.current.push(e.data) }
      mr.onstop = () => {
        const blob = new Blob(chunksRef.current, { type: mimeType || 'audio/webm' })
        const durationSeconds = Math.max(1, Math.round((Date.now() - startedAtRef.current) / 1000))
        onChange({ blob, mimeType: mimeType || 'audio/webm', durationSeconds })
        setPhase('recorded')
        if (streamRef.current) {
          streamRef.current.getTracks().forEach(t => t.stop())
          streamRef.current = null
        }
      }
      mr.start()
      startedAtRef.current = Date.now()
      setPhase('recording')
      const limit = part.maxRecordSeconds || 120
      setSecondsLeft(limit)
      if (tickRef.current) clearInterval(tickRef.current)
      tickRef.current = setInterval(() => {
        setSecondsLeft(s => {
          if (s <= 1) {
            clearInterval(tickRef.current)
            stopRecording()
            return 0
          }
          return s - 1
        })
      }, 1000)
    } catch (err) {
      setError(err.message || 'Fehler beim Mikrofon-Zugriff.')
      setPhase('idle')
    }
  }

  const stopRecording = () => {
    if (tickRef.current) clearInterval(tickRef.current)
    const mr = mediaRecorderRef.current
    if (mr && mr.state !== 'inactive') mr.stop()
  }

  const reset = () => {
    if (tickRef.current) clearInterval(tickRef.current)
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(t => t.stop())
      streamRef.current = null
    }
    onChange(null)
    setPhase('idle')
    setSecondsLeft(0)
    setError(null)
  }

  return (
    <div className="space-y-4">
      {/* Task prompt */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-5">
        <p className="text-xs text-gray-500 dark:text-gray-400 font-bold uppercase tracking-wide mb-2">{part.taskType || 'Sprechaufgabe'}</p>
        <p className="text-sm text-gray-800 dark:text-gray-100 mb-4">{part.taskPrompt}</p>
        {part.bullets && part.bullets.length > 0 && (
          <ul className="space-y-1.5 text-sm text-gray-700 dark:text-gray-200 list-disc list-inside">
            {part.bullets.map((b, i) => <li key={i}>{b}</li>)}
          </ul>
        )}
        <div className="mt-4 flex flex-wrap gap-2 text-xs">
          {part.preparationSeconds ? (
            <span className="bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 px-2 py-1 rounded-full font-bold">
              Vorbereitung: {part.preparationSeconds}s
            </span>
          ) : null}
          <span className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 px-2 py-1 rounded-full font-bold">
            Max. Aufnahme: {part.maxRecordSeconds || 120}s
          </span>
        </div>
      </div>

      {/* Recorder */}
      <div className="bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 border-2 border-indigo-200 dark:border-indigo-800 rounded-2xl p-6">
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 rounded-xl p-3 mb-4 text-sm">{error}</div>
        )}

        {phase === 'idle' && (
          <div className="text-center">
            <Mic size={40} className="mx-auto mb-3 text-indigo-500" />
            <p className="text-sm text-gray-700 dark:text-gray-200 mb-4">
              Klicke auf <strong>Start</strong>, um die Aufnahme vorzubereiten. Du brauchst Zugang zum Mikrofon.
            </p>
            <button
              onClick={startPreparation}
              className="inline-flex items-center gap-2 bg-indigo-600 text-white font-bold px-6 py-3 rounded-xl hover:bg-indigo-700 transition shadow"
            >
              <Play size={16} /> Start
            </button>
          </div>
        )}

        {phase === 'preparing' && (
          <div className="text-center">
            <p className="text-xs text-amber-700 dark:text-amber-300 font-bold uppercase tracking-wide mb-2">Vorbereitung</p>
            <p className="text-5xl font-extrabold text-amber-600 dark:text-amber-400 mb-3">{secondsLeft}s</p>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">Lies die Aufgabe und überlege dir, was du sagen möchtest.</p>
            <button
              onClick={skipPreparation}
              className="inline-flex items-center gap-2 bg-indigo-600 text-white font-bold px-5 py-2.5 rounded-xl hover:bg-indigo-700 transition"
            >
              <Mic size={16} /> Jetzt aufnehmen
            </button>
          </div>
        )}

        {phase === 'recording' && (
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 px-3 py-1 rounded-full font-bold text-xs mb-3 animate-pulse">
              <span className="w-2 h-2 bg-red-500 rounded-full" /> AUFNAHME LÄUFT
            </div>
            <p className="text-5xl font-extrabold text-red-600 dark:text-red-400 mb-3">{secondsLeft}s</p>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">Sprich klar und deutlich auf Deutsch.</p>
            <button
              onClick={stopRecording}
              className="inline-flex items-center gap-2 bg-red-600 text-white font-bold px-6 py-3 rounded-xl hover:bg-red-700 transition shadow"
            >
              <Square size={16} /> Aufnahme beenden
            </button>
          </div>
        )}

        {phase === 'recorded' && value && (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <p className="text-sm font-bold text-green-700 dark:text-green-300 flex items-center gap-2">
                <CheckCircle2 size={16} /> Aufnahme bereit ({value.durationSeconds || 0}s)
              </p>
              <button
                onClick={reset}
                className="text-xs font-bold text-indigo-600 dark:text-indigo-300 hover:underline flex items-center gap-1"
              >
                <RotateCcw size={12} /> Neu aufnehmen
              </button>
            </div>
            {audioUrl && (
              <audio
                src={audioUrl}
                controls
                controlsList="nodownload"
                className="w-full"
              />
            )}
            <p className="text-xs text-gray-500 dark:text-gray-400 italic">
              Beim Abgeben wird die Aufnahme automatisch transkribiert und mit KI bewertet.
              Aussprache kann nicht automatisch beurteilt werden.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

function SpeakingTaskResult({ part, detail }) {
  if (detail.skipped) {
    return <p className="text-sm text-orange-600 dark:text-orange-400">Du hast keine Aufnahme abgegeben (0 Punkte).</p>
  }
  if (detail.error) {
    return <p className="text-sm text-red-600 dark:text-red-400">Fehler: {detail.error}</p>
  }
  const ai = detail.ai
  if (!ai) return null

  const criteria = [
    { key: 'erfuellung', label: 'Erfüllung', max: 25 },
    { key: 'kohaerenz', label: 'Kohärenz', max: 25 },
    { key: 'wortschatz', label: 'Wortschatz', max: 25 },
    { key: 'strukturen', label: 'Strukturen', max: 25 },
  ]

  return (
    <div className="space-y-4">
      <div className="flex items-baseline gap-2">
        <span className="text-2xl font-extrabold text-gray-800 dark:text-gray-100">{detail.earned}</span>
        <span className="text-sm text-gray-500">/ {detail.possible} Punkte · KI-Gesamtwertung {ai.total}/100 · {detail.durationSeconds || 0}s</span>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        {criteria.map(c => (
          <div key={c.key} className="bg-gray-50 dark:bg-gray-700 rounded-lg p-2 text-center">
            <p className="text-[10px] text-gray-500 dark:text-gray-400 font-bold uppercase">{c.label}</p>
            <p className="text-lg font-extrabold text-indigo-600 dark:text-indigo-300">{ai.scores?.[c.key] ?? 0}/{c.max}</p>
          </div>
        ))}
      </div>

      {detail.transcript && (
        <details className="bg-gray-50 dark:bg-gray-700 rounded-xl p-3 text-sm">
          <summary className="cursor-pointer font-bold text-gray-700 dark:text-gray-200">Transkript anzeigen</summary>
          <p className="mt-2 text-gray-700 dark:text-gray-200 whitespace-pre-line italic">"{detail.transcript}"</p>
        </details>
      )}

      {ai.overall && (
        <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-xl p-3 text-sm text-indigo-900 dark:text-indigo-100">
          {ai.overall}
        </div>
      )}

      {Array.isArray(ai.errors) && ai.errors.length > 0 && (
        <div>
          <p className="text-xs font-bold text-gray-600 dark:text-gray-300 uppercase mb-2">Fehler</p>
          <div className="space-y-2">
            {ai.errors.map((e, i) => (
              <div key={i} className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-2 text-xs">
                <p className="text-red-700 dark:text-red-300"><span className="line-through">{e.original}</span> → <strong>{e.correction}</strong></p>
                {e.explanation && <p className="text-red-600 dark:text-red-400 mt-0.5">{e.explanation}</p>}
              </div>
            ))}
          </div>
        </div>
      )}

      {Array.isArray(ai.strengths) && ai.strengths.length > 0 && (
        <div>
          <p className="text-xs font-bold text-green-700 dark:text-green-400 uppercase mb-1">Stärken</p>
          <ul className="text-xs text-gray-700 dark:text-gray-200 list-disc list-inside space-y-0.5">
            {ai.strengths.map((s, i) => <li key={i}>{s}</li>)}
          </ul>
        </div>
      )}

      {Array.isArray(ai.improvements) && ai.improvements.length > 0 && (
        <div>
          <p className="text-xs font-bold text-orange-700 dark:text-orange-400 uppercase mb-1">Verbesserungen</p>
          <ul className="text-xs text-gray-700 dark:text-gray-200 list-disc list-inside space-y-0.5">
            {ai.improvements.map((s, i) => <li key={i}>{s}</li>)}
          </ul>
        </div>
      )}
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
