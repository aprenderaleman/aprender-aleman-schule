import React from 'react'
import { motion } from 'framer-motion'
import { Zap, Flame, Brain, BookOpen, Headphones, PenLine, Mic, Trophy, TrendingUp } from 'lucide-react'
import {
  RadialBarChart, RadialBar, ResponsiveContainer,
  BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid,
  LineChart, Line, Legend,
} from 'recharts'
import { useAuth } from '../context/AuthContext'
import { useProgress } from '../context/ProgressContext'
import Navbar from '../components/Layout/Navbar'
import ProgressBar from '../components/UI/ProgressBar'

const SKILL_META = {
  grammar:   { label: 'Grammatik',  icon: Brain,      color: '#f97316' },
  reading:   { label: 'Lesen',      icon: BookOpen,   color: '#3b82f6' },
  listening: { label: 'Hören',      icon: Headphones, color: '#8b5cf6' },
  writing:   { label: 'Schreiben',  icon: PenLine,    color: '#22c55e' },
  speaking:  { label: 'Sprechen',   icon: Mic,        color: '#14b8a6' },
}

const LEVEL_XP = { A1: 500, A2: 1000, B1: 2000, B2: 3500, C1: 5000 }

export default function Progress() {
  const { user }   = useAuth()
  const { progress } = useProgress()

  const levelXP       = LEVEL_XP[user?.level] || 500
  const levelProgress = Math.min(100, Math.round((progress.xp / levelXP) * 100))

  // Last 7 days activity
  const activityData = React.useMemo(() => {
    const days = []
    for (let i = 6; i >= 0; i--) {
      const date = new Date(Date.now() - i * 86400000)
      const dateStr = date.toISOString().split('T')[0]
      const xpDay = (progress.exerciseHistory || [])
        .filter(h => h.date?.startsWith(dateStr))
        .reduce((sum, h) => sum + (h.xpEarned || 0), 0)
      days.push({
        day: date.toLocaleDateString('de-DE', { weekday: 'short' }),
        XP: xpDay,
      })
    }
    return days
  }, [progress.exerciseHistory])

  // Skill radial data
  const skillRadialData = Object.entries(SKILL_META).map(([key, meta]) => ({
    name: meta.label,
    value: progress.skillScores?.[key] || 0,
    fill: meta.color,
  }))

  // Exercise type breakdown
  const typeBreakdown = React.useMemo(() => {
    const counts = { grammar: 0, reading: 0, listening: 0, writing: 0, speaking: 0 }
    ;(progress.exerciseHistory || []).forEach(h => {
      if (counts[h.type] !== undefined) counts[h.type]++
    })
    return Object.entries(counts).map(([type, count]) => ({
      name: SKILL_META[type]?.label || type,
      Übungen: count,
      fill: SKILL_META[type]?.color,
    }))
  }, [progress.exerciseHistory])

  const stats = [
    { label: 'Gesamt-XP', value: progress.xp || 0, icon: Zap, color: 'text-orange-500' },
    { label: 'Aktuelle Serie', value: `${progress.streak || 0} Tage`, icon: Flame, color: 'text-red-500' },
    { label: 'Übungen', value: progress.completedExercises?.length || 0, icon: Trophy, color: 'text-yellow-500' },
    { label: 'Niveau', value: user?.level || 'A1', icon: TrendingUp, color: 'text-green-500' },
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <main id="main" className="max-w-7xl xl:pl-20 mx-auto px-4 sm:px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-extrabold text-gray-800 dark:text-gray-100">Mein Fortschritt</h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">Dein Lernverlauf, {user?.name}.</p>
        </div>

        {/* Stats cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map(({ label, value, icon: Icon, color }) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="card text-center"
            >
              <Icon size={28} className={`${color} mx-auto mb-2`} />
              <p className="text-2xl font-extrabold text-gray-800 dark:text-gray-100">{value}</p>
              <p className="text-xs text-gray-400 mt-0.5">{label}</p>
            </motion.div>
          ))}
        </div>

        {/* Level progress */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="card mb-6"
        >
          <h2 className="font-bold text-gray-800 dark:text-gray-100 mb-4 text-lg">Fortschritt Niveau {user?.level}</h2>
          <ProgressBar value={levelProgress} color="orange" showPercent height="lg" />
          <p className="text-sm text-gray-400 mt-2">{progress.xp} / {levelXP} XP</p>
        </motion.div>

        {/* Charts row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* XP last 7 days */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="card"
          >
            <h2 className="font-bold text-gray-800 dark:text-gray-100 mb-4">XP der letzten 7 Tage</h2>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={activityData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="day" tick={{ fontSize: 12, fill: '#9ca3af' }} />
                <YAxis tick={{ fontSize: 12, fill: '#9ca3af' }} />
                <Tooltip
                  contentStyle={{ background: '#1f2937', border: 'none', borderRadius: 8, color: '#f9fafb' }}
                />
                <Bar dataKey="XP" fill="#f97316" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Skill breakdown bar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="card"
          >
            <h2 className="font-bold text-gray-800 dark:text-gray-100 mb-4">Übungen nach Typ</h2>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={typeBreakdown} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis type="number" tick={{ fontSize: 12, fill: '#9ca3af' }} />
                <YAxis dataKey="name" type="category" tick={{ fontSize: 12, fill: '#9ca3af' }} width={70} />
                <Tooltip
                  contentStyle={{ background: '#1f2937', border: 'none', borderRadius: 8, color: '#f9fafb' }}
                />
                <Bar dataKey="Übungen" radius={[0, 6, 6, 0]}>
                  {typeBreakdown.map((entry, idx) => (
                    <rect key={idx} fill={entry.fill} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </motion.div>
        </div>

        {/* Skills detail */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="card mb-6"
        >
          <h2 className="font-bold text-gray-800 dark:text-gray-100 mb-5 text-lg">Fertigkeiten nach Bereich</h2>
          <div className="space-y-5">
            {Object.entries(SKILL_META).map(([key, meta]) => {
              const Icon = meta.icon
              const val = progress.skillScores?.[key] || 0
              return (
                <div key={key}>
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2">
                      <Icon size={16} style={{ color: meta.color }} />
                      <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">{meta.label}</span>
                    </div>
                    <span className="text-sm font-bold text-gray-500">{Math.round(val)}%</span>
                  </div>
                  <div className="h-2.5 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${val}%` }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                      className="h-full rounded-full"
                      style={{ backgroundColor: meta.color }}
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </motion.div>

        {/* Recent history */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="card"
        >
          <h2 className="font-bold text-gray-800 dark:text-gray-100 mb-4 text-lg">Letzte Aktivitäten</h2>
          {progress.exerciseHistory?.length > 0 ? (
            <div className="space-y-2">
              {progress.exerciseHistory.slice(0, 10).map((h, i) => {
                const meta = SKILL_META[h.type]
                const Icon = meta?.icon || Brain
                return (
                  <div key={i} className="flex items-center justify-between py-2 border-b border-gray-100 dark:border-gray-700 last:border-0">
                    <div className="flex items-center gap-3">
                      <div className="p-1.5 rounded-lg" style={{ backgroundColor: meta?.color + '20' }}>
                        <Icon size={14} style={{ color: meta?.color }} />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-700 dark:text-gray-200">{h.exerciseId}</p>
                        <p className="text-xs text-gray-400 capitalize">{meta?.label || h.type}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-bold text-gray-700 dark:text-gray-200">{h.score}%</p>
                      <p className="text-xs text-orange-500">+{h.xpEarned} XP</p>
                    </div>
                  </div>
                )
              })}
            </div>
          ) : (
            <p className="text-gray-400 text-sm">Du hast noch keine Übung abgeschlossen.</p>
          )}
        </motion.div>
      </main>
    </div>
  )
}
