import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate, Link } from 'react-router-dom'
import {
  GraduationCap, ArrowRight, ArrowLeft, Calendar, Target,
  CheckCircle2, Clock, BookOpen, Headphones, PenLine, Mic,
  Sparkles, Trophy, Flame, Loader2, Lock, Play
} from 'lucide-react'
import Navbar from '../components/Layout/Navbar'
import Footer from '../components/Layout/Footer'
import { useAuth } from '../context/AuthContext'
import { getExamsFor, countsByModule } from '../data/pruefungen'

const API_URL = import.meta.env.VITE_API_URL || ''

const LEVELS = [
  { code: 'A1', title: 'Goethe-Zertifikat A1', subtitle: 'Start Deutsch 1', desc: 'Absoluter Anfänger. Du kannst dich vorstellen und einfache Fragen stellen.', color: 'from-green-500 to-emerald-500', border: 'border-green-300' },
  { code: 'A2', title: 'Goethe-Zertifikat A2', subtitle: 'Start Deutsch 2', desc: 'Grundlegende Konversation. Alltagssituationen meistern.', color: 'from-teal-500 to-cyan-500', border: 'border-teal-300' },
  { code: 'B1', title: 'Goethe-Zertifikat B1', subtitle: 'Zertifikat Deutsch', desc: 'Mittelstufe. Wichtig für Aufenthaltstitel und Einbürgerung in Deutschland.', color: 'from-blue-500 to-indigo-500', border: 'border-blue-300', popular: true },
  { code: 'B2', title: 'Goethe-Zertifikat B2', subtitle: 'Mittelstufenprüfung', desc: 'Obere Mittelstufe. Zugang zu Studienkollegs und qualifizierten Berufen.', color: 'from-purple-500 to-fuchsia-500', border: 'border-purple-300' },
  { code: 'C1', title: 'Goethe-Zertifikat C1', subtitle: 'Oberstufenprüfung', desc: 'Fortgeschritten. Voraussetzung für ein Studium an deutschen Universitäten.', color: 'from-orange-500 to-red-500', border: 'border-orange-300' },
  { code: 'C2', title: 'Goethe-Zertifikat C2', subtitle: 'Großes Deutsches Sprachdiplom', desc: 'Höchstes Niveau. Annähernd muttersprachliche Kompetenz.', color: 'from-rose-500 to-pink-600', border: 'border-rose-300' },
]
const LEVEL_BY_CODE = Object.fromEntries(LEVELS.map(l => [l.code, l]))

const MODULES = [
  { id: 'lesen', label: 'Lesen', icon: BookOpen, color: 'text-blue-500', bg: 'bg-blue-50 dark:bg-blue-900/20', desc: 'Textverständnis' },
  { id: 'hoeren', label: 'Hören', icon: Headphones, color: 'text-purple-500', bg: 'bg-purple-50 dark:bg-purple-900/20', desc: 'Hörverständnis' },
  { id: 'schreiben', label: 'Schreiben', icon: PenLine, color: 'text-green-500', bg: 'bg-green-50 dark:bg-green-900/20', desc: 'Schriftlicher Ausdruck' },
  { id: 'sprechen', label: 'Sprechen', icon: Mic, color: 'text-orange-500', bg: 'bg-orange-50 dark:bg-orange-900/20', desc: 'Mündlicher Ausdruck' },
]

export default function Pruefungen() {
  const { getToken } = useAuth()
  const [plan, setPlan] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchPlan = async () => {
    try {
      const res = await fetch(`${API_URL}/api/pruefungen/plan`, {
        headers: { Authorization: `Bearer ${getToken()}` },
      })
      if (!res.ok) throw new Error('Konnte den Plan nicht laden')
      const data = await res.json()
      setPlan(data.plan)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => { fetchPlan() }, [])

  const handleSavePlan = async (newPlan) => {
    setLoading(true)
    try {
      const res = await fetch(`${API_URL}/api/pruefungen/plan`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${getToken()}` },
        body: JSON.stringify({ provider: 'goethe', level: newPlan.level.code, examDate: newPlan.examDate }),
      })
      if (!res.ok) throw new Error('Konnte den Plan nicht speichern')
      await fetchPlan()
    } catch (err) {
      setError(err.message)
      setLoading(false)
    }
  }

  const handleResetPlan = async () => {
    setLoading(true)
    try {
      await fetch(`${API_URL}/api/pruefungen/plan`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${getToken()}` },
      })
      setPlan(null)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <Loader2 size={32} className="animate-spin text-indigo-500" />
        </div>
      </div>
    )
  }

  if (plan) return <PruefungsDashboard plan={plan} onReset={handleResetPlan} onRefresh={fetchPlan} />
  return <PruefungsWizard onComplete={handleSavePlan} initialError={error} />
}

/* ==========================
   WIZARD
   ========================== */
function PruefungsWizard({ onComplete, initialError }) {
  const [step, setStep] = useState(1)
  const [level, setLevel] = useState(null)
  const [examDate, setExamDate] = useState('')
  const [noDate, setNoDate] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const canContinue = (step === 1 && level) || (step === 2 && (examDate || noDate))

  const handleFinish = async () => {
    setSubmitting(true)
    await onComplete({ level, examDate: noDate ? null : examDate })
    setSubmitting(false)
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
      <Navbar />
      <main className="flex-1 max-w-4xl w-full mx-auto px-4 py-8 md:py-12">
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mb-8 text-center">
          <div className="inline-flex items-center gap-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 px-4 py-1.5 rounded-full text-sm font-bold mb-4">
            <Sparkles size={14} /> NEU · Prüfungsvorbereitung
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-800 dark:text-gray-100 mb-3">
            Bereit für dein <span className="text-indigo-600">Goethe-Zertifikat</span>?
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            In 3 Schritten erstellen wir deinen persönlichen Vorbereitungsplan — mit echten Simulationsprüfungen, KI-Korrektur und allen 4 Modulen.
          </p>
        </motion.div>

        {/* Stepper */}
        <div className="flex items-center justify-center gap-2 mb-10">
          {[1, 2, 3].map((s) => (
            <React.Fragment key={s}>
              <div className={`flex items-center justify-center w-10 h-10 rounded-full font-bold text-sm transition-all ${
                step >= s ? 'bg-indigo-600 text-white shadow-md' : 'bg-gray-200 dark:bg-gray-700 text-gray-500'
              }`}>
                {step > s ? <CheckCircle2 size={18} /> : s}
              </div>
              {s < 3 && <div className={`w-10 md:w-20 h-1 rounded ${step > s ? 'bg-indigo-600' : 'bg-gray-200 dark:bg-gray-700'}`} />}
            </React.Fragment>
          ))}
        </div>

        {initialError && (
          <div className="max-w-md mx-auto bg-red-50 border border-red-200 text-red-700 rounded-xl p-3 mb-6 text-sm">
            {initialError}
          </div>
        )}

        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div key="s1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
              <h2 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-gray-100 mb-1 text-center">Welches Niveau?</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 text-center mb-6">Wähle dein Zielzertifikat</p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {LEVELS.map((l) => {
                  const selected = level?.code === l.code
                  return (
                    <button
                      key={l.code}
                      onClick={() => setLevel(l)}
                      className={`relative text-left p-5 rounded-2xl border-2 transition-all ${
                        selected
                          ? `${l.border} bg-gradient-to-br ${l.color} text-white shadow-lg scale-[1.02]`
                          : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-indigo-300 hover:shadow-md'
                      }`}
                    >
                      {l.popular && !selected && (
                        <span className="absolute -top-2 right-3 bg-orange-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">Beliebt</span>
                      )}
                      <div className={`text-3xl font-extrabold mb-1 ${selected ? 'text-white' : 'text-indigo-600 dark:text-indigo-400'}`}>{l.code}</div>
                      <div className={`font-bold text-sm mb-1 ${selected ? 'text-white' : 'text-gray-800 dark:text-gray-100'}`}>{l.subtitle}</div>
                      <p className={`text-xs leading-relaxed ${selected ? 'text-white/90' : 'text-gray-500 dark:text-gray-400'}`}>{l.desc}</p>
                    </button>
                  )
                })}
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div key="s2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
              <h2 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-gray-100 mb-1 text-center">Wann ist deine Prüfung?</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 text-center mb-6">Wir erstellen einen Lernplan basierend auf der verfügbaren Zeit</p>

              <div className="max-w-md mx-auto space-y-4">
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border-2 border-gray-200 dark:border-gray-700">
                  <label className="flex items-center gap-2 text-sm font-bold text-gray-700 dark:text-gray-300 mb-3">
                    <Calendar size={16} className="text-indigo-500" /> Prüfungsdatum
                  </label>
                  <input
                    type="date"
                    value={examDate}
                    onChange={(e) => { setExamDate(e.target.value); setNoDate(false) }}
                    min={new Date().toISOString().split('T')[0]}
                    disabled={noDate}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 dark:bg-gray-900 text-gray-800 dark:text-gray-100 focus:border-indigo-500 focus:outline-none disabled:opacity-50"
                  />
                </div>

                <div className="text-center text-sm text-gray-400">— oder —</div>

                <button
                  onClick={() => { setNoDate(!noDate); if (!noDate) setExamDate('') }}
                  className={`w-full p-4 rounded-2xl border-2 transition-all font-semibold text-sm ${
                    noDate
                      ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300'
                      : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:border-indigo-300'
                  }`}
                >
                  Ich habe noch kein Datum festgelegt
                </button>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div key="s3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
              <h2 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-gray-100 mb-1 text-center">Alles bereit!</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 text-center mb-6">Bestätige deine Auswahl, um zu starten</p>

              <div className="max-w-md mx-auto bg-white dark:bg-gray-800 rounded-2xl p-6 border-2 border-indigo-200 dark:border-indigo-800">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-indigo-100 dark:bg-indigo-900/40 rounded-xl p-2.5">
                      <GraduationCap size={20} className="text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide font-semibold">Zertifikat</p>
                      <p className="font-bold text-gray-800 dark:text-gray-100">{level?.title}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-indigo-100 dark:bg-indigo-900/40 rounded-xl p-2.5">
                      <Calendar size={20} className="text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide font-semibold">Prüfungsdatum</p>
                      <p className="font-bold text-gray-800 dark:text-gray-100">
                        {noDate ? 'Noch nicht festgelegt' : new Date(examDate).toLocaleDateString('de-DE', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}
                      </p>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-gray-100 dark:border-gray-700">
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-2 font-semibold uppercase tracking-wide">Was dich erwartet</p>
                    <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1.5">
                      <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-green-500" /> 4 Module: Lesen, Hören, Schreiben, Sprechen</li>
                      <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-green-500" /> Echte Simulationsprüfungen mit Zeitlimit</li>
                      <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-green-500" /> KI-Korrektur nach offizieller Goethe-Skala</li>
                      <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-green-500" /> Persönlicher Lernplan</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex items-center justify-between mt-10 max-w-md mx-auto">
          <button
            onClick={() => setStep((s) => Math.max(1, s - 1))}
            disabled={step === 1}
            className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl font-semibold text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 disabled:opacity-30 disabled:cursor-not-allowed transition"
          >
            <ArrowLeft size={16} /> Zurück
          </button>
          {step < 3 ? (
            <button
              onClick={() => setStep((s) => Math.min(3, s + 1))}
              disabled={!canContinue}
              className="flex items-center gap-1.5 px-6 py-2.5 rounded-xl font-bold text-sm bg-indigo-600 text-white hover:bg-indigo-700 disabled:bg-gray-300 dark:disabled:bg-gray-700 disabled:cursor-not-allowed transition shadow-md"
            >
              Weiter <ArrowRight size={16} />
            </button>
          ) : (
            <button
              onClick={handleFinish}
              disabled={submitting}
              className="flex items-center gap-1.5 px-6 py-2.5 rounded-xl font-bold text-sm bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 transition shadow-lg disabled:opacity-60"
            >
              {submitting ? <Loader2 size={16} className="animate-spin" /> : <Sparkles size={16} />} Plan starten
            </button>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}

/* ==========================
   PRÜFUNGS-DASHBOARD
   ========================== */
function PruefungsDashboard({ plan, onReset, onRefresh }) {
  const navigate = useNavigate()
  const levelMeta = LEVEL_BY_CODE[plan.level] || LEVEL_BY_CODE.A1
  const progress = plan.progress || { lesen: 0, hoeren: 0, schreiben: 0, sprechen: 0 }
  const totalProgress = Math.round((progress.lesen + progress.hoeren + progress.schreiben + progress.sprechen) / 4)
  const counts = countsByModule(plan.level)

  const daysLeft = plan.examDate
    ? Math.max(0, Math.ceil((new Date(plan.examDate) - new Date()) / (1000 * 60 * 60 * 24)))
    : null

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
      <Navbar />
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="flex items-start justify-between gap-4 flex-wrap">
            <div>
              <div className="inline-flex items-center gap-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 px-3 py-1 rounded-full text-xs font-bold mb-2">
                <GraduationCap size={12} /> Mein Vorbereitungsplan
              </div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 dark:text-gray-100">{levelMeta.title}</h1>
              <p className="text-gray-500 dark:text-gray-400 mt-1">{levelMeta.subtitle}</p>
            </div>
            <button
              onClick={onReset}
              className="text-xs text-gray-400 hover:text-red-500 underline underline-offset-2"
            >
              Plan zurücksetzen
            </button>
          </div>
        </div>

        {/* Top stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-gradient-to-br from-indigo-600 to-purple-700 text-white rounded-2xl p-5 shadow-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold uppercase tracking-wide opacity-90">{daysLeft !== null ? 'Bis zur Prüfung' : 'Zeit zum Lernen'}</span>
              <Calendar size={18} className="opacity-90" />
            </div>
            <div className="text-4xl font-extrabold">
              {daysLeft !== null ? daysLeft : '∞'}
              {daysLeft !== null && <span className="text-base font-semibold opacity-80 ml-1">Tage</span>}
            </div>
            <p className="text-xs opacity-80 mt-1">
              {plan.examDate
                ? new Date(plan.examDate).toLocaleDateString('de-DE', { day: 'numeric', month: 'long', year: 'numeric' })
                : 'Kein festes Datum'}
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }} className="bg-white dark:bg-gray-800 rounded-2xl p-5 border-2 border-gray-100 dark:border-gray-700">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold uppercase tracking-wide text-gray-500 dark:text-gray-400">Vorbereitung</span>
              <Target size={18} className="text-indigo-500" />
            </div>
            <div className="text-4xl font-extrabold text-indigo-600 dark:text-indigo-400">{totalProgress}<span className="text-base font-semibold text-gray-400 ml-1">%</span></div>
            <div className="mt-2 h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-indigo-500 to-purple-500" style={{ width: `${totalProgress}%` }} />
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-white dark:bg-gray-800 rounded-2xl p-5 border-2 border-gray-100 dark:border-gray-700">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold uppercase tracking-wide text-gray-500 dark:text-gray-400">Verfügbare Module</span>
              <Sparkles size={18} className="text-orange-500" />
            </div>
            <div className="text-4xl font-extrabold text-gray-800 dark:text-gray-100">
              {Object.values(counts).filter(n => n > 0).length}<span className="text-base font-semibold text-gray-400 ml-1">/ 4</span>
            </div>
            <p className="text-xs text-gray-400 mt-1">{counts.lesen + counts.hoeren + counts.schreiben + counts.sprechen} Simulationen bereit</p>
          </motion.div>
        </div>

        {/* Modules with simulacros */}
        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-4">Die 4 Module</h2>
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          {MODULES.map((m, i) => {
            const Icon = m.icon
            const score = progress[m.id] || 0
            const exams = getExamsFor(plan.level, m.id)
            const hasContent = exams.length > 0
            return (
              <motion.div
                key={m.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.05 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-5 border-2 border-gray-100 dark:border-gray-700 hover:border-indigo-200 dark:hover:border-indigo-800 transition"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className={`p-3 rounded-2xl ${m.bg}`}>
                    <Icon size={22} className={m.color} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-gray-800 dark:text-gray-100">{m.label}</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{m.desc}</p>
                  </div>
                  {hasContent ? (
                    <span className="text-[10px] font-bold uppercase tracking-wide bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300 px-2 py-0.5 rounded-full">
                      {exams.length} bereit
                    </span>
                  ) : (
                    <span className="text-[10px] font-bold uppercase tracking-wide bg-gray-100 text-gray-500 dark:bg-gray-700 dark:text-gray-400 px-2 py-0.5 rounded-full flex items-center gap-1">
                      <Lock size={10} /> Bald
                    </span>
                  )}
                </div>
                <div className="h-1.5 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden mb-3">
                  <div className="h-full bg-indigo-500" style={{ width: `${score}%` }} />
                </div>
                <p className="text-xs text-gray-400 mb-3">{score}% bereit</p>

                {/* Exam list */}
                {hasContent && (
                  <div className="space-y-2 pt-2 border-t border-gray-100 dark:border-gray-700">
                    {exams.map(ex => (
                      <Link
                        key={ex.id}
                        to={`/pruefungen/${ex.id}`}
                        className="flex items-center justify-between gap-2 p-2.5 rounded-xl bg-gray-50 dark:bg-gray-700/50 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 group transition"
                      >
                        <div className="min-w-0">
                          <p className="text-sm font-semibold text-gray-800 dark:text-gray-100 truncate">{ex.title}</p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            {ex.durationMinutes} min · {ex.maxScore} Punkte
                          </p>
                        </div>
                        <Play size={14} className="text-indigo-500 shrink-0 group-hover:translate-x-0.5 transition-transform" />
                      </Link>
                    ))}
                  </div>
                )}
              </motion.div>
            )
          })}
        </div>

        {/* Coming soon banner if not all modules ready */}
        {Object.values(counts).filter(n => n > 0).length < 4 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="bg-indigo-50 dark:bg-indigo-900/20 border-2 border-dashed border-indigo-200 dark:border-indigo-800 rounded-2xl p-6 text-center">
            <Sparkles size={28} className="text-indigo-500 mx-auto mb-2" />
            <h3 className="font-bold text-indigo-700 dark:text-indigo-300 mb-1">Weitere Module werden vorbereitet</h3>
            <p className="text-sm text-indigo-600/80 dark:text-indigo-400/80 max-w-lg mx-auto">
              Wir arbeiten an den restlichen Modulen für {plan.level} mit KI-Korrektur. Du wirst benachrichtigt, sobald sie verfügbar sind.
            </p>
          </motion.div>
        )}
      </main>
      <Footer />
    </div>
  )
}
