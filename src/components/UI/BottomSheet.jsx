import React, { useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useFocusTrap } from '../../hooks/useFocusTrap'

/**
 * Native-style bottom sheet. Drag down to dismiss. Backdrop click also
 * dismisses. Respects safe-area-inset-bottom. Use instead of <Modal /> for
 * mobile-first UI.
 */
export default function BottomSheet({ open, onClose, children, title, snapHeight = 'auto' }) {
  const sheetRef = useRef(null)
  useFocusTrap(sheetRef, open)
  // Lock body scroll while open
  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = prev }
  }, [open])

  // ESC closes
  useEffect(() => {
    if (!open) return
    const handler = e => { if (e.key === 'Escape') onClose?.() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [open, onClose])

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
            aria-hidden="true"
          />
          {/* Sheet */}
          <motion.div
            ref={sheetRef}
            role="dialog"
            aria-modal="true"
            aria-label={title}
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 350, mass: 0.6 }}
            drag="y"
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={{ top: 0, bottom: 0.4 }}
            onDragEnd={(_, info) => {
              if (info.offset.y > 100 || info.velocity.y > 500) onClose?.()
            }}
            className="fixed bottom-0 inset-x-0 z-50 bg-card rounded-t-3xl shadow-2xl border-t border-border max-h-[90dvh] overflow-hidden flex flex-col"
            style={{ height: snapHeight }}
          >
            {/* Drag handle */}
            <div className="pt-2 pb-1 flex justify-center cursor-grab active:cursor-grabbing">
              <div className="w-10 h-1 rounded-full bg-muted-foreground/30" />
            </div>

            {title && (
              <h3 className="px-5 pt-2 pb-3 text-lg font-bold text-foreground border-b border-border">
                {title}
              </h3>
            )}

            <div className="flex-1 overflow-y-auto p-5 pb-safe-4">
              {children}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
