import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { WifiOff, CloudUpload } from 'lucide-react'
import { useDevice } from '../../hooks/useDevice'
import { queueSize } from '../../utils/offlineQueue'

/**
 * Combined status banner:
 *   • Offline → amber "sin conexión" bar at the top
 *   • Online + queue.length > 0 → brief blue "sincronizando N…" bar for
 *     ~3s to reassure the alumno that their offline exercises are being
 *     uploaded now
 */
export default function NetworkStatus() {
  const { isOnline } = useDevice()
  const [pending, setPending] = useState(0)
  const [showSync, setShowSync] = useState(false)

  // Poll the queue size on load + when connectivity flips
  useEffect(() => {
    let cancelled = false
    const tick = async () => {
      const n = await queueSize()
      if (!cancelled) setPending(n)
    }
    tick()
    const interval = setInterval(tick, 5000)
    return () => { cancelled = true; clearInterval(interval) }
  }, [isOnline])

  // When we come back online AND there's a queue, show the sync banner
  useEffect(() => {
    if (isOnline && pending > 0) {
      setShowSync(true)
      const t = setTimeout(() => setShowSync(false), 4000)
      return () => clearTimeout(t)
    }
  }, [isOnline, pending])

  return (
    <AnimatePresence>
      {!isOnline && (
        <motion.div
          key="offline"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 350 }}
          className="fixed top-0 inset-x-0 z-[60] bg-amber-500 text-amber-950 px-4 py-2 text-center text-xs font-bold flex items-center justify-center gap-2 pt-safe"
          role="status"
          aria-live="polite"
        >
          <WifiOff size={14} />
          Sin conexión — tus respuestas se guardan y se envían al volver la red
        </motion.div>
      )}
      {isOnline && showSync && (
        <motion.div
          key="sync"
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -40, opacity: 0 }}
          className="fixed top-0 inset-x-0 z-[60] bg-blue-500 text-white px-4 py-2 text-center text-xs font-bold flex items-center justify-center gap-2 pt-safe"
          role="status"
          aria-live="polite"
        >
          <CloudUpload size={14} className="animate-pulse" />
          Sincronizando {pending} ejercicio{pending === 1 ? '' : 's'} pendiente{pending === 1 ? '' : 's'}…
        </motion.div>
      )}
    </AnimatePresence>
  )
}
