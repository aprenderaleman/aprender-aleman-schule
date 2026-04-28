import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { WifiOff } from 'lucide-react'
import { useDevice } from '../../hooks/useDevice'

/**
 * Persistent banner that appears when the device goes offline. Auto-hides
 * when connection returns.
 */
export default function NetworkStatus() {
  const { isOnline } = useDevice()

  return (
    <AnimatePresence>
      {!isOnline && (
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 350 }}
          className="fixed top-0 inset-x-0 z-[60] bg-amber-500 text-amber-950 px-4 py-2 text-center text-xs font-bold flex items-center justify-center gap-2 pt-safe"
          role="status"
          aria-live="polite"
        >
          <WifiOff size={14} />
          Keine Internetverbindung — du arbeitest offline
        </motion.div>
      )}
    </AnimatePresence>
  )
}
