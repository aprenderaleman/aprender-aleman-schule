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

      <main className="max-w-6xl mx-auto px-4 py-8 flex-1 w-full">
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
                {progress.xp} XP
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

        {/* Hans - Virtual Teacher CTA (HERO) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8"
        >
          <a
            href="https://hans.aprender-aleman.de"
            target="_blank"
            rel="noopener noreferrer"
            className="block relative overflow-hidden bg-gradient-to-br from-indigo-700 via-purple-700 to-pink-600 rounded-3xl p-8 md:p-10 hover:shadow-2xl hover:scale-[1.005] transition-all group border-2 border-white/10"
          >
            {/* Decorative animated gradient orbs */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-pink-400/30 to-purple-500/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-gradient-to-br from-blue-400/30 to-indigo-500/20 rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-yellow-400/10 rounded-full blur-2xl animate-pulse" />

            {/* "NEW" ribbon */}
            <div className="absolute top-5 right-5 md:top-7 md:right-7 flex items-center gap-1.5 bg-yellow-400 text-yellow-900 text-[10px] md:text-xs font-extrabold px-3 py-1.5 rounded-full uppercase tracking-widest shadow-lg animate-pulse">
              <Sparkles size={12} /> KI 24/7
            </div>

            <div className="relative flex flex-col md:flex-row items-center gap-6 md:gap-8">
              {/* Big robot avatar with glow */}
              <div className="relative shrink-0">
                <div className="absolute inset-0 bg-white/20 rounded-full blur-2xl scale-110 group-hover:scale-125 transition-transform" />
                <div className="relative w-28 h-28 md:w-36 md:h-36 bg-gradient-to-br from-white/30 to-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-7xl md:text-8xl border-2 border-white/20 shadow-2xl group-hover:scale-110 transition-transform">
                  🤖
                </div>
                {/* Pulse indicator */}
                <div className="absolute bottom-2 right-2 w-5 h-5 md:w-6 md:h-6 bg-green-400 rounded-full border-4 border-white shadow-lg">
                  <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-75" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 text-center md:text-left">
                <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-full px-3 py-1 mb-3 border border-white/20">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-white/90 text-xs font-semibold uppercase tracking-wider">Jetzt online</span>
                </div>
                <h2 className="text-white font-extrabold text-3xl md:text-4xl leading-tight mb-2">
                  Triff <span className="text-yellow-300">Hans</span> 👋
                </h2>
                <p className="text-white/90 text-lg md:text-xl font-semibold mb-2">
                  Dein virtueller Deutschlehrer — rund um die Uhr verfügbar
                </p>
                <p className="text-white/75 text-sm md:text-base leading-relaxed mb-5 max-w-2xl">
                  Unterhalte dich mit Hans per <strong className="text-white">Text oder Sprache</strong>. Er korrigiert deine Aussprache, erklärt Grammatik, beantwortet Fragen und hilft dir beim Üben natürlicher Konversationen — wann immer du willst.
                </p>

                {/* Feature chips */}
                <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-5">
                  <div className="inline-flex items-center gap-1.5 bg-white/15 backdrop-blur-sm text-white text-xs md:text-sm font-semibold px-3 py-1.5 rounded-full border border-white/20">
                    <MessageCircle size={14} /> Textchat
                  </div>
                  <div className="inline-flex items-center gap-1.5 bg-white/15 backdrop-blur-sm text-white text-xs md:text-sm font-semibold px-3 py-1.5 rounded-full border border-white/20">
                    <Mic size={14} /> Sprachchat
                  </div>
                  <div className="inline-flex items-center gap-1.5 bg-white/15 backdrop-blur-sm text-white text-xs md:text-sm font-semibold px-3 py-1.5 rounded-full border border-white/20">
                    <Clock size={14} /> 24/7 verfügbar
                  </div>
                  <div className="inline-flex items-center gap-1.5 bg-white/15 backdrop-blur-sm text-white text-xs md:text-sm font-semibold px-3 py-1.5 rounded-full border border-white/20">
                    <Sparkles size={14} /> KI-gestützt
                  </div>
                </div>

                {/* CTA button */}
                <div className="inline-flex items-center gap-2 bg-white text-purple-700 text-base md:text-lg font-extrabold px-6 py-3 rounded-2xl shadow-xl group-hover:shadow-2xl group-hover:scale-105 transition-all">
                  <MessageCircle size={20} />
                  Jetzt mit Hans sprechen
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </a>
        </motion.div>

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
              <p className="text-2xl font-extrabold text-gray-800 dark:text-gray-100">{value}</p>
              <p className="text-xs text-gray-400 mt-0.5">{label}</p>
            </div>
          ))}
        </motion.div>
      </main>
      <Footer />
    </div>
  )
}
