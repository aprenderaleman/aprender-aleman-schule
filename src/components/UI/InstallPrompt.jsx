import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Download, X, Share2 } from 'lucide-react'
import { useDevice } from '../../hooks/useDevice'

const DISMISS_KEY = 'pwa_install_dismissed_at'
const REPROMPT_DAYS = 14

/**
 * Prompts the user to install the PWA. Two modes:
 *  - Android/Chrome/Edge: uses the native beforeinstallprompt event
 *  - iOS Safari: shows a custom card with the manual "Add to Home Screen"
 *    instructions, since iOS doesn't expose an install prompt
 *
 * Only shows once every 14 days after dismissal, and never on installed
 * (standalone) instances.
 */
export default function InstallPrompt() {
  const { isStandalone, isIOS, isMobile } = useDevice()
  const [deferredPrompt, setDeferredPrompt] = useState(null)
  const [showIos, setShowIos] = useState(false)

  useEffect(() => {
    if (isStandalone) return
    const dismissedAt = parseInt(localStorage.getItem(DISMISS_KEY) || '0', 10)
    const repromptAfter = dismissedAt + REPROMPT_DAYS * 24 * 60 * 60 * 1000
    if (Date.now() < repromptAfter) return

    // Android / desktop Chrome / Edge: capture the beforeinstallprompt
    const onBeforeInstall = (e) => {
      e.preventDefault()
      setDeferredPrompt(e)
    }
    window.addEventListener('beforeinstallprompt', onBeforeInstall)

    // iOS: show our own card after a short delay
    if (isIOS && isMobile) {
      const t = setTimeout(() => setShowIos(true), 4000)
      return () => {
        clearTimeout(t)
        window.removeEventListener('beforeinstallprompt', onBeforeInstall)
      }
    }
    return () => window.removeEventListener('beforeinstallprompt', onBeforeInstall)
  }, [isStandalone, isIOS, isMobile])

  const dismiss = () => {
    localStorage.setItem(DISMISS_KEY, String(Date.now()))
    setDeferredPrompt(null)
    setShowIos(false)
  }

  const accept = async () => {
    if (!deferredPrompt) return
    await deferredPrompt.prompt()
    await deferredPrompt.userChoice
    dismiss()
  }

  if (isStandalone) return null
  const visible = !!deferredPrompt || showIos

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 320 }}
          className="fixed bottom-[calc(5rem+env(safe-area-inset-bottom,0px))] md:bottom-6 left-3 right-3 md:left-auto md:right-6 md:w-[380px] z-40"
        >
          <div className="bg-card border border-border rounded-2xl shadow-xl p-4 flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-warm/15 flex items-center justify-center shrink-0">
              <Download size={20} className="text-warm" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-bold text-foreground text-sm">Schule installieren</p>
              {isIOS ? (
                <p className="text-xs text-muted-foreground leading-relaxed mt-0.5">
                  Tippe auf <Share2 size={12} className="inline mx-0.5" /> und dann auf
                  &nbsp;„Zum Home-Bildschirm“ — wie eine echte App.
                </p>
              ) : (
                <p className="text-xs text-muted-foreground mt-0.5">
                  Installiere Schule für schnelleren Zugriff und Offline-Übungen.
                </p>
              )}
              {!isIOS && (
                <button
                  onClick={accept}
                  className="mt-2 px-4 py-1.5 rounded-full bg-warm text-warm-foreground text-xs font-bold tap"
                >
                  Installieren
                </button>
              )}
            </div>
            <button
              onClick={dismiss}
              aria-label="Schließen"
              className="text-muted-foreground hover:text-foreground p-1 -m-1"
            >
              <X size={16} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
