import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { CheckCircle, XCircle, AlertCircle, Info } from 'lucide-react'

const icons = {
  success: <CheckCircle className="text-green-500 shrink-0" size={20} />,
  error: <XCircle className="text-red-500 shrink-0" size={20} />,
  warning: <AlertCircle className="text-yellow-500 shrink-0" size={20} />,
  info: <Info className="text-blue-500 shrink-0" size={20} />,
}

const borders = {
  success: 'border-l-4 border-green-500',
  error: 'border-l-4 border-red-500',
  warning: 'border-l-4 border-yellow-500',
  info: 'border-l-4 border-blue-500',
}

/**
 * Position-responsive toast.
 *  - Mobile: top center, slides down from top
 *  - Desktop: top-right, slides in from the right
 *
 * Both adapt automatically via Tailwind responsive classes — no JS check needed.
 */
export default function Toast({ toast }) {
  return (
    <AnimatePresence>
      {toast && (
        <motion.div
          key={toast.id}
          initial={{ opacity: 0, x: 0, y: -40 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          exit={{ opacity: 0, x: 20, y: -10 }}
          transition={{ type: 'spring', damping: 28, stiffness: 350 }}
          className={
            // Mobile: top center via inset + transform; Desktop: top-right
            'fixed z-[100] flex items-center gap-3 bg-card ' +
            (borders[toast.type] || borders.info) +
            ' rounded-xl shadow-xl px-5 py-3 min-w-[280px] max-w-[420px] ' +
            'top-4 left-1/2 -translate-x-1/2 ' +
            'md:left-auto md:translate-x-0 md:right-6 md:top-6 ' +
            'pt-safe'
          }
          style={{ paddingTop: 'max(0.75rem, env(safe-area-inset-top, 0px))' }}
          role="alert"
          aria-live="polite"
        >
          {icons[toast.type] || icons.info}
          <p className="text-sm font-medium text-foreground">{toast.message}</p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
