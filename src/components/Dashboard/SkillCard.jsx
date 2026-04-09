import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import ProgressBar from '../UI/ProgressBar'

const skillConfig = {
  grammar: { icon: '📚', label: 'Gramática', color: 'blue', type: 'grammar', desc: 'Verbos, casos, sintaxis' },
  reading: { icon: '📖', label: 'Lectura', color: 'green', type: 'reading', desc: 'Comprensión de textos' },
  listening: { icon: '🎧', label: 'Audición', color: 'purple', type: 'listening', desc: 'Comprensión oral' },
  writing: { icon: '✍️', label: 'Escritura', color: 'pink', type: 'writing', desc: 'Producción escrita' },
}

const bgColors = {
  blue: 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800',
  green: 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800',
  purple: 'bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800',
  pink: 'bg-pink-50 dark:bg-pink-900/20 border-pink-200 dark:border-pink-800',
}

export default function SkillCard({ skill, score = 0, index = 0 }) {
  const config = skillConfig[skill]
  if (!config) return null

  const level = score >= 80 ? 'Avanzado' : score >= 50 ? 'Intermedio' : score >= 20 ? 'Básico' : 'Principiante'

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <Link
        to={`/ejercicios?tipo=${config.type}`}
        className={`block p-5 rounded-2xl border-2 ${bgColors[config.color]} hover:shadow-md transition-all duration-200 group`}
        aria-label={`Ir a ejercicios de ${config.label}`}
      >
        <div className="flex items-center gap-3 mb-3">
          <span className="text-3xl">{config.icon}</span>
          <div>
            <h3 className="font-bold text-gray-800 dark:text-gray-100 group-hover:text-orange-600 transition-colors">
              {config.label}
            </h3>
            <p className="text-xs text-gray-500 dark:text-gray-400">{config.desc}</p>
          </div>
          <span className="ml-auto text-xs font-semibold text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-700 px-2 py-0.5 rounded-full">
            {level}
          </span>
        </div>
        <ProgressBar value={score} max={100} color={config.color} showPercent={true} height="sm" />
      </Link>
    </motion.div>
  )
}
