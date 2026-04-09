import React from 'react'
import { motion } from 'framer-motion'

export default function ProgressBar({ value = 0, max = 100, color = 'orange', label, showPercent = true, height = 'md' }) {
  const pct = Math.min(100, Math.max(0, (value / max) * 100))

  const colors = {
    orange: 'from-orange-400 to-orange-600',
    blue: 'from-blue-400 to-blue-600',
    green: 'from-green-400 to-green-600',
    purple: 'from-purple-400 to-purple-600',
    pink: 'from-pink-400 to-pink-600',
    yellow: 'from-yellow-400 to-yellow-500',
  }

  const heights = {
    sm: 'h-2',
    md: 'h-3',
    lg: 'h-4',
    xl: 'h-5',
  }

  return (
    <div className="w-full">
      {(label || showPercent) && (
        <div className="flex justify-between items-center mb-1">
          {label && <span className="text-sm font-medium text-gray-600 dark:text-gray-300">{label}</span>}
          {showPercent && <span className="text-sm font-bold text-orange-500">{Math.round(pct)}%</span>}
        </div>
      )}
      <div className={`w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden ${heights[height]}`}>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className={`${heights[height]} rounded-full bg-gradient-to-r ${colors[color]}`}
          role="progressbar"
          aria-valuenow={Math.round(pct)}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>
    </div>
  )
}
