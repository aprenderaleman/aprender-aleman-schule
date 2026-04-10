import React from 'react'
import { motion } from 'framer-motion'

export default function StreakCounter({ streak = 0 }) {
  const days = Array.from({ length: 7 }, (_, i) => i)

  return (
    <div className="card">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-bold text-gray-800 dark:text-gray-100">Aktuelle Serie</h3>
        <motion.div
          animate={streak > 0 ? { scale: [1, 1.1, 1] } : {}}
          transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
          className="flex items-center gap-1 bg-orange-50 dark:bg-orange-900/30 px-3 py-1 rounded-full"
        >
          <span className="text-xl">🔥</span>
          <span className="font-extrabold text-orange-500 text-xl">{streak}</span>
          <span className="text-xs text-orange-400 font-semibold">Tage</span>
        </motion.div>
      </div>

      <div className="flex gap-2 justify-between">
        {days.map((day) => {
          const isActive = day < streak % 7 || streak >= 7
          const isToday = day === Math.min(streak - 1, 6)
          return (
            <div key={day} className="flex flex-col items-center gap-1">
              <motion.div
                animate={isToday ? { scale: [1, 1.15, 1] } : {}}
                transition={{ duration: 1.5, repeat: Infinity }}
                className={`w-9 h-9 rounded-xl flex items-center justify-center text-sm font-bold transition-all ${
                  isActive
                    ? 'bg-gradient-to-br from-orange-400 to-orange-600 text-white shadow-md'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-400 dark:text-gray-500'
                }`}
              >
                {isActive ? '🔥' : '○'}
              </motion.div>
              <span className="text-xs text-gray-400 dark:text-gray-500">
                {['M', 'D', 'M', 'D', 'F', 'S', 'S'][day]}
              </span>
            </div>
          )
        })}
      </div>

      {streak === 0 && (
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-3 text-center">
          Mach heute deine erste Übung, um deine Serie zu starten!
        </p>
      )}
      {streak >= 7 && (
        <p className="text-xs text-orange-600 dark:text-orange-400 mt-3 text-center font-semibold">
          Beeindruckend! {streak} Tage in Folge! 🏆
        </p>
      )}
    </div>
  )
}
