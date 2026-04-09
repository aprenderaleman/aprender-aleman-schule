import React from 'react'
import { motion } from 'framer-motion'

export default function LoadingSpinner({ message = 'Cargando...', fullScreen = false }) {
  const content = (
    <div className="flex flex-col items-center gap-4">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-orange-200 rounded-full" />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-0 w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full"
        />
        <span className="absolute inset-0 flex items-center justify-center text-2xl">🇩🇪</span>
      </div>
      {message && (
        <p className="text-gray-600 dark:text-gray-300 font-medium text-center max-w-xs animate-pulse">
          {message}
        </p>
      )}
    </div>
  )

  if (fullScreen) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
        {content}
      </div>
    )
  }

  return (
    <div className="flex items-center justify-center py-12">
      {content}
    </div>
  )
}

export function InlineSpinner({ size = 20 }) {
  return (
    <motion.svg
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className="inline-block"
    >
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
    </motion.svg>
  )
}
