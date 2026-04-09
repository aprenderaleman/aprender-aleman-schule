import React, { useMemo } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Zap, Play, Trophy, Flame } from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import { useProgress } from '../context/ProgressContext'
import Navbar from '../components/Layout/Navbar'
import SkillCard from '../components/Dashboard/SkillCard'
import StreakCounter from '../components/Dashboard/StreakCounter'
import RecentBadges from '../components/Dashboard/RecentBadges'
import ProgressBar from '../components/UI/ProgressBar'
import Toast from '../components/UI/Toast'
import { EXERCISES } from '../utils/exercises'

const LEVEL_XP = { A1: 500, A2: 1000, B1: 2000, B2: 3500, C1: 5000 }
const SKILLS = ['grammar', 'reading', 'listening', 'writing']

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
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <Toast toast={toast} />

      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Greeting */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <h1 className="text-3xl font-extrabold text-gray-800 dark:text-gray-100">
            Hola, <span className="text-orange-500">{user?.name}</span>! 👋
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1 text-lg">
            Sigues en nivel <span className="font-bold text-orange-500">{user?.level}</span>. ¡Vamos a practicar!
          </p>
        </motion.div>

        {/* Top stats row */}
        <motion.div variants={container} initial="hidden" animate="show" className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {/* XP + Level Progress */}
          <motion.div variants={item} className="card md:col-span-2">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Zap size={20} className="text-orange-500" />
                <span className="font-bold text-gray-800 dark:text-gray-100">Progreso de nivel</span>
              </div>
              <span className="text-sm font-semibold text-orange-500 bg-orange-50 dark:bg-orange-900/30 px-2 py-1 rounded-full">
                {progress.xp} XP
              </span>
            </div>
            <ProgressBar value={levelProgress} color="orange" showPercent />
            <p className="text-xs text-gray-400 mt-2">
              {progress.xp} / {levelXP} XP para completar nivel {user?.level}
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
                <p className="text-white/80 text-sm font-medium">Continúa donde lo dejaste</p>
                <p className="text-white font-bold text-lg mt-0.5">{lastExercise.title}</p>
                <p className="text-white/70 text-xs mt-0.5 capitalize">{lastExercise.type} · Nivel {lastExercise.level}</p>
              </div>
              <button
                onClick={() => navigate(`/ejercicio/${lastExercise.id}`)}
                aria-label="Continuar último ejercicio"
                className="bg-white text-orange-500 font-bold px-5 py-2.5 rounded-xl hover:bg-orange-50 transition-colors flex items-center gap-2 shadow"
              >
                <Play size={16} />
                Continuar
              </button>
            </div>
          </motion.div>
        )}

        {/* Skills grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
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
              Inicio rápido
            </h2>
            <div className="grid grid-cols-2 gap-3">
              {[
                { type: 'grammar',   label: 'Gramática', emoji: '📚', color: 'bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300' },
                { type: 'reading',   label: 'Lectura',   emoji: '📖', color: 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300' },
                { type: 'listening', label: 'Audición',  emoji: '🎧', color: 'bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300' },
                { type: 'writing',   label: 'Escritura', emoji: '✍️', color: 'bg-pink-50 dark:bg-pink-900/20 text-pink-700 dark:text-pink-300' },
              ].map(({ type, label, emoji, color }) => (
                  <button
                    key={type}
                    onClick={() => navigate(`/ejercicios?tipo=${type}`)}
                    aria-label={`Empezar ejercicio de ${label}`}
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

        {/* Hans - Virtual Teacher */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="mt-6"
        >
          <a
            href="https://hans.aprender-aleman.de"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-5 hover:shadow-xl transition-all group"
          >
            <div className="flex items-center gap-4">
              <div className="bg-white/20 rounded-xl p-3 text-4xl shrink-0">
                🤖
              </div>
              <div className="flex-1">
                <h3 className="text-white font-bold text-lg group-hover:text-yellow-200 transition-colors">
                  ¡Practica con Hans! 🇩🇪
                </h3>
                <p className="text-white/80 text-sm mt-1">
                  Tu profesor virtual de alemán disponible <strong>24/7</strong>. Conversa, pregunta dudas y practica con inteligencia artificial.
                </p>
              </div>
              <div className="text-white/60 group-hover:text-white transition-colors shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
              </div>
            </div>
          </a>
        </motion.div>

        {/* Stats summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-6 grid grid-cols-3 gap-4"
        >
          {[
            { label: 'Ejercicios completados', value: progress.completedExercises?.length || 0, icon: Trophy },
            { label: 'XP total ganado',         value: progress.xp || 0,                        icon: Zap },
            { label: 'Días de racha',            value: progress.streak || 0,                    icon: Flame },
          ].map(({ label, value, icon: Icon }) => (
            <div key={label} className="card text-center">
              <Icon size={24} className="text-orange-500 mx-auto mb-2" />
              <p className="text-2xl font-extrabold text-gray-800 dark:text-gray-100">{value}</p>
              <p className="text-xs text-gray-400 mt-0.5">{label}</p>
            </div>
          ))}
        </motion.div>
      </main>
    </div>
  )
}
