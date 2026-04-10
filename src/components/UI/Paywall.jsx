import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Lock, Zap, ArrowRight } from 'lucide-react'

export default function Paywall() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center max-w-md"
      >
        <div className="bg-orange-100 dark:bg-orange-900/30 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
          <Lock size={36} className="text-orange-500" />
        </div>
        <h2 className="text-2xl font-extrabold text-gray-800 dark:text-gray-100 mb-3">
          Du hast deine 10 kostenlosen Lektionen genutzt
        </h2>
        <p className="text-gray-500 dark:text-gray-400 mb-6">
          Abonniere jetzt, um unbegrenzt weiter Deutsch zu lernen — Übungen, Karteikarten, Prüfungssimulation, KI-Bewertung und vieles mehr.
        </p>
        <Link
          to="/pricing"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold text-lg px-8 py-4 rounded-xl hover:shadow-lg hover:scale-[1.02] transition-all"
        >
          <Zap size={20} />
          Pläne ansehen
          <ArrowRight size={18} />
        </Link>
        <p className="text-xs text-gray-400 mt-4">Nur 15&euro;/Monat. Jederzeit kündbar.</p>
      </motion.div>
    </div>
  )
}
