import React from 'react'
import { motion } from 'framer-motion'

export default function Badge({ icon, title, description, color = 'from-orange-400 to-orange-600', locked = false, small = false }) {
  return (
    <motion.div
      whileHover={{ scale: locked ? 1 : 1.05 }}
      className={`relative flex flex-col items-center ${small ? 'gap-1' : 'gap-2'} ${locked ? 'opacity-40 grayscale' : ''}`}
      title={locked ? 'Erfolg gesperrt' : title}
    >
      <div className={`${small ? 'w-12 h-12 text-2xl' : 'w-16 h-16 text-3xl'} rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center shadow-lg`}>
        {locked ? '🔒' : icon}
      </div>
      {!small && (
        <>
          <span className="text-xs font-bold text-center text-gray-700 dark:text-gray-200 max-w-[80px] leading-tight">{title}</span>
          {description && <span className="text-xs text-center text-gray-500 dark:text-gray-400 max-w-[100px] leading-tight">{description}</span>}
        </>
      )}
    </motion.div>
  )
}

export function LevelBadge({ level }) {
  const colors = {
    A1: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
    A2: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
    B1: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
    B2: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200',
    C1: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
  }
  return (
    <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${colors[level] || colors.A1}`}>
      {level}
    </span>
  )
}

export function TypeBadge({ type }) {
  const config = {
    grammar: { label: 'Grammatik', cls: 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300' },
    reading: { label: 'Lesen', cls: 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300' },
    listening: { label: 'Hören', cls: 'bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300' },
    writing: { label: 'Schreiben', cls: 'bg-pink-100 text-pink-700 dark:bg-pink-900 dark:text-pink-300' },
  }
  const c = config[type] || config.grammar
  return (
    <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${c.cls}`}>
      {c.label}
    </span>
  )
}
