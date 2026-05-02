import React, { useMemo } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Zap, Play, Trophy, Flame, Layers, MessageCircle, Mic, Sparkles, Clock, ArrowRight, Video, Users, ExternalLink } from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import { useProgress } from '../context/ProgressContext'
import Navbar from '../components/Layout/Navbar'
import Footer from '../components/Layout/Footer'
import SkillCard from '../components/Dashboard/SkillCard'
import StreakCounter from '../components/Dashboard/StreakCounter'
import RecentBadges from '../components/Dashboard/RecentBadges'
import ExplorerChallenge from '../components/Dashboard/ExplorerChallenge'
import ReviewPrompt from '../components/UI/ReviewPrompt'
import AnimatedNumber from '../components/UI/AnimatedNumber'
import ProgressBar from '../components/UI/ProgressBar'
import Toast from '../components/UI/Toast'
import { EXERCISES } from '../utils/exercises'

const LEVEL_XP = { A1: 500, A2: 1000, B1: 2000, B2: 3500, C1: 5000 }
const SKILLS = ['grammar', 'reading', 'listening', 'writing', 'speaking']

export default function Dashboard() {
  const { user, toast } = useAuth()
  const { progress } = useProgress()
  const navigate = useNavigate()

  const levelXP = LEVEL_XP[user?.level] || 500
  const levelProgress = Math.min(100, Math.round((progress.xp / levelXP) * 100))

  const lastExercise = useMemo(() => {
    if (!progress.exerciseHistory?.length) return null
    const lastId = progress.exerciseHistory[0]?.exerciseId
    return EXERCISES.find(e => e.id === lastId)
  }, [progress.exerciseHistory])

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  }
  const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
      <Navbar />
      <Toast toast={toast} />
      <ReviewPrompt exerciseHistory={progress.exerciseHistory || []} />

      <main id="main" className="max-w-7xl xl:pl-20 mx-auto px-4 sm:px-6 py-8 flex-1 w-full">
        {/* Greeting */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <h1 className="text-3xl font-extrabold text-gray-800 dark:text-gray-100">
            Hallo, <span className="text-orange-500">{user?.name}</span>! 👋
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1 text-lg">
            Du bist auf Niveau <span className="font-bold text-orange-500">{user?.level}</span>. Lass uns üben!
          </p>
        </motion.div>

        {/* Top stats row */}
        <motion.div variants={container} initial="hidden" animate="show" className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {/* XP + Level Progress */}
          <motion.div variants={item} className="card md:col-span-2">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Zap size={20} className="text-orange-500" />
                <span className="font-bold text-gray-800 dark:text-gray-100">Niveau-Fortschritt</span>
              </div>
              <span className="text-sm font-semibold text-orange-500 bg-orange-50 dark:bg-orange-900/30 px-2 py-1 rounded-full">
                <AnimatedNumber value={progress.xp || 0} /> XP
              </span>
            </div>
            <ProgressBar value={levelProgress} color="orange" showPercent />
            <p className="text-xs text-gray-400 mt-2">
              {progress.xp} / {levelXP} XP zum Abschluss von Niveau {user?.level}
            </p>
          </motion.div>

          {/* Streak */}
          <motion.div variants={item}>
            <StreakCounter streak={progress.streak} />
          </motion.div>
        </motion.div>

        {/* Continue button */}
        {lastExercise && (
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="mb-6">
            <div className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl p-5 flex items-center justify-between shadow-lg">
              <div>
                <p className="text-white/80 text-sm font-medium">Mach dort weiter, wo du aufgehört hast</p>
                <p className="text-white font-bold text-lg mt-0.5">{lastExercise.title}</p>
                <p className="text-white/70 text-xs mt-0.5 capitalize">{lastExercise.type} · Niveau {lastExercise.level}</p>
              </div>
              <button
                onClick={() => navigate(`/ejercicio/${lastExercise.id}`)}
                aria-label="Letzte Übung fortsetzen"
                className="bg-white text-orange-500 font-bold px-5 py-2.5 rounded-xl hover:bg-orange-50 transition-colors flex items-center gap-2 shadow"
              >
                <Play size={16} />
                Weiter
              </button>
            </div>
          </motion.div>
        )}

        {/* Explorer Challenge (trial users only) */}
        <ExplorerChallenge />

        {/* Level test CTA */}
        <Link
          to="/test-de-nivel"
          className="block mb-6 group rounded-2xl border-2 border-dashed border-warm/40 bg-warm/5 hover:bg-warm/10 transition-colors p-4"
        >
          <div className="flex items-center gap-4">
            <div className="w-11 h-11 rounded-xl bg-warm/15 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
              <span className="text-xl">🎯</span>
            </div>
            <div className="flex-1">
              <p className="font-bold text-foreground text-sm">Wie ist dein echtes Niveau?</p>
              <p className="text-xs text-muted-foreground mt-0.5">
                Kostenloser Test (12 Min) · CEFR A1-C1 · Persönlicher Plan
              </p>
            </div>
            <ArrowRight size={18} className="text-warm group-hover:translate-x-1 transition-transform" />
          </div>
        </Link>

        {/* Skills grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-8">
          {SKILLS.map((skill, idx) => (
            <SkillCard
              key={skill}
              skill={skill}
              score={progress.skillScores?.[skill] || 0}
              index={idx}
            />
          ))}
        </div>

        {/* Bottom row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Quick start */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="card"
          >
            <h2 className="font-bold text-gray-800 dark:text-gray-100 text-lg mb-4 flex items-center gap-2">
              <Play size={18} className="text-orange-500" />
              Schnellstart
            </h2>
            <div className="grid grid-cols-2 gap-3">
              {[
                { type: 'grammar',   label: 'Grammatik', emoji: '📚', color: 'bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300' },
                { type: 'reading',   label: 'Lesen',     emoji: '📖', color: 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300' },
                { type: 'listening', label: 'Hören',     emoji: '🎧', color: 'bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300' },
                { type: 'writing',   label: 'Schreiben', emoji: '✍️', color: 'bg-pink-50 dark:bg-pink-900/20 text-pink-700 dark:text-pink-300' },
              ].map(({ type, label, emoji, color }) => (
                  <button
                    key={type}
                    onClick={() => navigate(`/ejercicios?tipo=${type}`)}
                    aria-label={`${label}-Übung starten`}
                    className={`${color} rounded-xl p-4 text-left hover:opacity-80 transition-opacity`}
                  >
                    <span className="text-2xl block mb-2">{emoji}</span>
                    <p className="font-semibold text-sm">{label}</p>
                  </button>
              ))}
            </div>
          </motion.div>

          {/* Recent badges */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}>
            <RecentBadges earnedIds={progress.achievements || []} />
          </motion.div>
        </div>

        {/* Flashcards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="mt-6"
        >
          <Link
            to="/flashcards"
            className="block bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl p-5 hover:shadow-xl transition-all group"
          >
            <div className="flex items-center gap-4">
              <div className="bg-white/20 rounded-xl p-3 shrink-0">
                <Layers size={28} className="text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-white font-bold text-lg group-hover:text-yellow-200 transition-colors">
                  Karteikarten 🇩🇪
                </h3>
                <p className="text-white/80 text-sm mt-1">
                  Lerne Vokabeln mit verteilter Wiederholung im Anki-Stil. Themen nach Niveau: Essen, Arbeit, Reisen und mehr.
                </p>
              </div>
            </div>
          </Link>
        </motion.div>

        {/* Hans CTA — temporarily disabled (out of service) */}

        {/* CTA: Live classes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="mt-6"
        >
          <a
            href="https://aprender-aleman.de/de"
            target="_blank"
            rel="noopener noreferrer"
            className="group block relative overflow-hidden rounded-2xl bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 p-5 sm:p-6 shadow-lg hover:shadow-xl transition-all"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

            <div className="relative flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/15 backdrop-blur-sm rounded-2xl flex items-center justify-center shrink-0 border border-white/20 group-hover:scale-110 transition-transform">
                <Video size={32} className="text-white sm:w-10 sm:h-10" />
              </div>
              <div className="flex-1 text-center sm:text-left">
                <div className="inline-flex items-center gap-1.5 bg-white/15 text-white/90 text-[10px] sm:text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider mb-2">
                  <Users size={12} /> Live-Unterricht
                </div>
                <h3 className="text-white font-extrabold text-lg sm:text-xl leading-tight mb-1">
                  Lerne Deutsch mit <span className="text-yellow-300">muttersprachlichen Lehrern</span>
                </h3>
                <p className="text-white/80 text-sm leading-relaxed max-w-xl">
                  Ergänze dein Selbststudium mit Live-Unterricht per Video. Kleine Gruppen, flexible Zeiten, echte Konversation.
                </p>
              </div>
              <div className="inline-flex items-center gap-2 bg-white text-emerald-700 text-sm sm:text-base font-extrabold px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all shrink-0">
                Mehr erfahren
                <ExternalLink size={16} className="group-hover:translate-x-0.5 transition-transform" />
              </div>
            </div>
          </a>
        </motion.div>

        {/* Stats summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4"
        >
          {[
            { label: 'Abgeschlossene Übungen', value: progress.completedExercises?.length || 0, icon: Trophy },
            { label: 'Gesamt-XP',              value: progress.xp || 0,                        icon: Zap },
            { label: 'Serien-Tage',            value: progress.streak || 0,                    icon: Flame },
          ].map(({ label, value, icon: Icon }) => (
            <div key={label} className="card text-center">
              <Icon size={24} className="text-orange-500 mx-auto mb-2" />
              <p className="text-2xl font-extrabold text-gray-800 dark:text-gray-100">
                <AnimatedNumber value={value} />
              </p>
              <p className="text-xs text-gray-400 mt-0.5">{label}</p>
            </div>
          ))}
        </motion.div>
      </main>
      <Footer />
    </div>
  )
}
