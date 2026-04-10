import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ALL_ACHIEVEMENTS } from '../../utils/achievements'
import Badge from '../UI/Badge'

export default function RecentBadges({ earnedIds = [] }) {
  const recent = earnedIds
    .slice(-4)
    .map(id => ALL_ACHIEVEMENTS.find(a => a.id === id))
    .filter(Boolean)
    .reverse()

  return (
    <div className="card">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-bold text-gray-800 dark:text-gray-100">Neueste Erfolge</h3>
        <Link to="/logros" className="text-xs text-orange-500 hover:text-orange-600 font-semibold transition-colors">
          Alle anzeigen →
        </Link>
      </div>

      {recent.length === 0 ? (
        <div className="text-center py-4">
          <span className="text-4xl">🏅</span>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            Schließe Übungen ab, um Erfolge freizuschalten
          </p>
        </div>
      ) : (
        <div className="flex gap-4 flex-wrap">
          {recent.map((ach, i) => (
            <motion.div
              key={ach.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
            >
              <Badge icon={ach.icon} title={ach.title} color={ach.color} />
            </motion.div>
          ))}
        </div>
      )}
    </div>
  )
}
