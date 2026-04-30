import React from 'react'
import { motion } from 'framer-motion'
import { Wrench } from 'lucide-react'

/**
 * Standalone maintenance page. Renders without backend, no router context
 * needed. Branded with the same Schule colors so it doesn't feel like a
 * generic 503 page.
 */
export default function MaintenancePage({ retrying = false, onRetry }) {
  return (
    <div className="min-h-screen-d flex items-center justify-center px-4 py-8 bg-gradient-to-br from-orange-50 via-white to-amber-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        className="max-w-md text-center"
      >
        <div className="inline-flex items-center gap-2 mb-8">
          <img src="/logo.svg" alt="Schule" className="w-12 h-12" />
          <span className="font-extrabold text-orange-500 text-3xl">Schule</span>
        </div>

        <motion.div
          animate={{ rotate: [0, -8, 8, -8, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
          className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-warm/15 flex items-center justify-center"
        >
          <Wrench size={40} className="text-warm" />
        </motion.div>

        <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-800 dark:text-gray-100 mb-3">
          Schule wird gerade gewartet
        </h1>

        <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-2">
          Wir arbeiten an einer Verbesserung und sind in Kürze wieder da.
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-500 mb-8">
          Estamos haciendo mejoras y volvemos en breve.
        </p>

        <button
          type="button"
          onClick={onRetry}
          disabled={retrying}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-warm text-warm-foreground font-bold text-sm hover:opacity-90 disabled:opacity-50 transition-opacity"
        >
          {retrying ? (
            <>
              <span className="inline-block w-3 h-3 rounded-full border-2 border-warm-foreground/40 border-t-warm-foreground animate-spin" />
              Prüfe…
            </>
          ) : (
            'Erneut versuchen'
          )}
        </button>

        <p className="mt-8 text-xs text-gray-400">
          Diese Seite aktualisiert sich automatisch, sobald wir wieder online sind.
        </p>
      </motion.div>
    </div>
  )
}
