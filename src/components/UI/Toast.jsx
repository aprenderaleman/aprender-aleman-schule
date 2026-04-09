import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { CheckCircle, XCircle, AlertCircle, Info } from 'lucide-react'

const icons = {
  success: <CheckCircle className="text-green-500" size={20} />,
  error: <XCircle className="text-red-500" size={20} />,
  warning: <AlertCircle className="text-yellow-500" size={20} />,
  info: <Info className="text-blue-500" size={20} />,
}

const borders = {
  success: 'border-l-4 border-green-500',
  error: 'border-l-4 border-red-500',
  warning: 'border-l-4 border-yellow-500',
  info: 'border-l-4 border-blue-500',
}

export default function Toast({ toast }) {
  return (
    <AnimatePresence>
      {toast && (
        <motion.div
          key={toast.id}
          initial={{ opacity: 0, y: -60, x: '50%' }}
          animate={{ opacity: 1, y: 0, x: '50%' }}
          exit={{ opacity: 0, y: -60, x: '50%' }}
          className={`fixed top-4 right-1/2 z-[100] flex items-center gap-3 bg-white dark:bg-gray-800 ${borders[toast.type] || borders.info} rounded-xl shadow-xl px-5 py-3 min-w-[280px] max-w-[400px]`}
          role="alert"
          aria-live="polite"
        >
          {icons[toast.type] || icons.info}
          <p className="text-sm font-medium text-gray-800 dark:text-gray-100">{toast.message}</p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
