import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { RefreshCw } from 'lucide-react'
import { haptics } from '../../utils/haptics'

const TRIGGER = 70 // px to trigger
const MAX = 110    // visual cap

/**
 * Pull-to-refresh wrapper. Wraps a scroll container; when the user pulls
 * down past TRIGGER px from the top, calls `onRefresh`. Animates a
 * spinner that pulses/rotates with the pull distance.
 *
 * Usage:
 *   <PullToRefresh onRefresh={async () => { await refetch() }}>
 *     <main> ... </main>
 *   </PullToRefresh>
 */
export default function PullToRefresh({ onRefresh, children, disabled = false }) {
  const [pull, setPull] = useState(0)
  const [refreshing, setRefreshing] = useState(false)
  const startY = useRef(null)
  const armedRef = useRef(false)

  const onTouchStart = (e) => {
    if (disabled || refreshing) return
    // Only arm if the document is scrolled to the very top
    if (window.scrollY > 0) { armedRef.current = false; return }
    startY.current = e.touches[0].clientY
    armedRef.current = true
  }

  const onTouchMove = (e) => {
    if (!armedRef.current || disabled || refreshing) return
    const dy = e.touches[0].clientY - startY.current
    if (dy <= 0) return
    // Apply easing as it gets pulled further (rubber band feel)
    const eased = Math.min(MAX, dy * 0.55)
    setPull(eased)
    if (eased > 0) {
      // Prevent native overscroll-bounce showing through
      if (e.cancelable) e.preventDefault()
    }
  }

  const onTouchEnd = async () => {
    if (!armedRef.current || disabled || refreshing) { setPull(0); return }
    armedRef.current = false
    if (pull >= TRIGGER) {
      haptics.success()
      setRefreshing(true)
      setPull(60)
      try { await onRefresh?.() } catch { /* swallow */ }
      setRefreshing(false)
    }
    setPull(0)
  }

  const progress = Math.min(1, pull / TRIGGER)
  const visible = pull > 4 || refreshing

  return (
    <div
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      onTouchCancel={() => { armedRef.current = false; setPull(0) }}
    >
      {/* Spinner indicator */}
      {visible && (
        <motion.div
          className="fixed top-0 inset-x-0 z-30 flex justify-center pointer-events-none"
          style={{ transform: `translateY(${pull}px)` }}
          animate={{ opacity: visible ? 1 : 0 }}
        >
          <div className="mt-2 w-10 h-10 rounded-full bg-card border border-border shadow-md flex items-center justify-center">
            <RefreshCw
              size={18}
              className={refreshing ? 'text-warm animate-spin' : progress >= 1 ? 'text-warm' : 'text-muted-foreground'}
              style={{ transform: refreshing ? undefined : `rotate(${progress * 270}deg)` }}
            />
          </div>
        </motion.div>
      )}
      {/* Content gets pushed slightly while pulling */}
      <div
        style={{ transform: `translateY(${refreshing ? 40 : pull}px)`, transition: refreshing ? 'transform 200ms' : (pull === 0 ? 'transform 250ms' : 'none') }}
      >
        {children}
      </div>
    </div>
  )
}
