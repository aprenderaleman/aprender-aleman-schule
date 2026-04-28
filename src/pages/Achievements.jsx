import React from 'react'
import { motion } from 'framer-motion'
import { Lock } from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import { useProgress } from '../context/ProgressContext'
import Navbar from '../components/Layout/Navbar'
import { ALL_ACHIEVEMENTS } from '../utils/achievements'
const ACHIEVEMENT_DEFS = ALL_ACHIEVEMENTS.map(a => ({ ...a, emoji: a.icon, label: a.title }))

export default function Achievements() {
  const { user }     = useAuth()
  const { progress } = useProgress()
  const earned = progress.achievements || []

  const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.07 } } }
  const item = { hidden: { opacity: 0, scale: 0.8 }, show: { opacity: 1, scale: 1 } }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <main id="main" className="max-w-5xl xl:pl-20 mx-auto px-4 sm:px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-extrabold text-gray-800 dark:text-gray-100">Erfolge</h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">
            {user?.name}, du hast{' '}
            <span className="font-bold text-orange-500">{earned.length}</span>
            {' '}von{' '}
            <span className="font-bold">{ACHIEVEMENT_DEFS.length}</span> Erfolgen freigeschaltet.
          </p>
        </div>

        {/* Progress bar */}
        <div className="card mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-semibold text-gray-600 dark:text-gray-300">Erfolgsfortschritt</span>
            <span className="text-sm font-bold text-orange-500">
              {Math.round((earned.length / ACHIEVEMENT_DEFS.length) * 100)}%
            </span>
          </div>
          <div className="h-3 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${(earned.length / ACHIEVEMENT_DEFS.length) * 100}%` }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="h-full bg-gradient-to-r from-orange-400 to-amber-500 rounded-full"
            />
          </div>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {ACHIEVEMENT_DEFS.map(ach => {
            const isEarned = earned.includes(ach.id)
            return (
              <motion.div
                key={ach.id}
                variants={item}
                className={`card relative transition-all ${
                  isEarned
                    ? 'ring-2 ring-yellow-400 shadow-yellow-100 dark:shadow-none'
                    : 'opacity-60 grayscale'
                }`}
              >
                {isEarned && (
                  <div className="absolute -top-2 -right-2 bg-yellow-400 text-xs font-bold px-2 py-0.5 rounded-full text-gray-800 shadow">
                    ✓ Erhalten
                  </div>
                )}
                <div className="text-4xl mb-3">{ach.emoji}</div>
                <h3 className="font-bold text-gray-800 dark:text-gray-100 text-base">{ach.label}</h3>
                <p className="text-sm text-gray-400 mt-1">{ach.description}</p>
                {!isEarned && (
                  <div className="flex items-center gap-1 mt-3 text-xs text-gray-400">
                    <Lock size={12} />
                    Gesperrt
                  </div>
                )}
              </motion.div>
            )
          })}
        </motion.div>
      </main>
    </div>
  )
}
