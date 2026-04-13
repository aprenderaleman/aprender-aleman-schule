import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import ProgressBar from '../UI/ProgressBar'

const skillConfig = {
  grammar: { icon: '📚', label: 'Grammatik', color: 'blue', type: 'grammar', desc: 'Verben, Fälle, Syntax' },
  reading: { icon: '📖', label: 'Lesen', color: 'green', type: 'reading', desc: 'Textverständnis' },
  listening: { icon: '🎧', label: 'Hören', color: 'purple', type: 'listening', desc: 'Hörverständnis' },
  writing: { icon: '✍️', label: 'Schreiben', color: 'pink', type: 'writing', desc: 'Schriftlicher Ausdruck' },
  speaking: { icon: '🎤', label: 'Sprechen', color: 'teal', type: 'speaking', desc: 'Mündlicher Ausdruck' },
}

const bgColors = {
  blue: 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800',
  green: 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800',
  purple: 'bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800',
  pink: 'bg-pink-50 dark:bg-pink-900/20 border-pink-200 dark:border-pink-800',
  teal: 'bg-teal-50 dark:bg-teal-900/20 border-teal-200 dark:border-teal-800',
}

export default function SkillCard({ skill, score = 0, index = 0 }) {
  const config = skillConfig[skill]
  if (!config) return null

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <Link
        to={`/ejercicios?tipo=${config.type}`}
        className={`block p-5 rounded-2xl border-2 ${bgColors[config.color]} hover:shadow-md transition-all duration-200 group`}
        aria-label={`Zu ${config.label}-Übungen gehen`}
      >
        <div className="flex items-center gap-3 mb-3">
          <span className="text-3xl shrink-0">{config.icon}</span>
          <div className="min-w-0 flex-1">
            <h3 className="font-bold text-sm text-gray-800 dark:text-gray-100 group-hover:text-orange-600 transition-colors">
              {config.label}
            </h3>
            <p className="text-[10px] text-gray-500 dark:text-gray-400">{config.desc}</p>
          </div>
        </div>
        <ProgressBar value={score} max={100} color={config.color} showPercent={true} height="sm" />
      </Link>
    </motion.div>
  )
}
