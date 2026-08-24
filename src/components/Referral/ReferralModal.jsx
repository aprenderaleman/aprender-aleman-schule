import React, { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Gift, Copy, Check, MessageCircle } from 'lucide-react'

/**
 * Reusable modal for the referral pitch. Two entry points:
 *   1. Manual click on the header button   (title="Regala una clase — gana 3")
 *   2. Auto-open after a victory event      (title="🎉 ¡{logro}!")
 *
 * The auto-open frequency cap lives outside this component (see the
 * ReferralPopupListener). This component just renders.
 */
export default function ReferralModal({ open, onClose, data, title, subtitle }) {
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (!open) setCopied(false)
  }, [open])

  if (!data) return null

  const link = data.link || ''
  const invited = data.invited_count || 0
  const earned = data.classes_earned || 0

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(link)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Manual fallback for browsers without clipboard permission
      window.prompt('Copiá el enlace:', link)
    }
  }

  const waMessage = `¡Estoy aprendiendo alemán en Aprender-Alemán! 😊 Si te inscribes con mi enlace te regalan una clase: ${link}`
  const waHref = `https://wa.me/?text=${encodeURIComponent(waMessage)}`

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm flex items-end sm:items-start justify-center p-3 sm:p-4 overflow-y-auto"
          onClick={onClose}
        >
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 40, opacity: 0 }}
            transition={{ type: 'spring', damping: 25 }}
            onClick={e => e.stopPropagation()}
            className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 w-full max-w-md p-6 sm:my-auto"
          >
            <button
              onClick={onClose}
              aria-label="Cerrar"
              className="absolute top-3 right-3 p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500"
            >
              <X size={16} />
            </button>

            {/* Header */}
            <div className="text-center mb-4">
              <div className="inline-flex w-14 h-14 rounded-full bg-gradient-to-br from-orange-400 to-amber-500 items-center justify-center mb-3 shadow-md">
                <Gift size={24} className="text-white" />
              </div>
              <h3 className="text-lg font-extrabold text-gray-800 dark:text-gray-100">
                {title || 'Regala una clase — gana 3'}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-1 leading-relaxed">
                {subtitle || 'Invita a un amigo: él recibe una clase de regalo al inscribirse y tú ganas 3 clases 1 a 1 gratis.'}
              </p>
            </div>

            {/* Contador */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="rounded-xl bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 p-3 text-center">
                <p className="text-2xl font-extrabold text-orange-600 dark:text-orange-300">{invited}</p>
                <p className="text-[11px] text-orange-700 dark:text-orange-400 font-semibold uppercase tracking-wide">Invitados</p>
              </div>
              <div className="rounded-xl bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 p-3 text-center">
                <p className="text-2xl font-extrabold text-emerald-600 dark:text-emerald-300">{earned}</p>
                <p className="text-[11px] text-emerald-700 dark:text-emerald-400 font-semibold uppercase tracking-wide">Clases ganadas</p>
              </div>
            </div>

            {/* Link + Copy */}
            <div className="mb-3">
              <label className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wide">Tu enlace</label>
              <div className="mt-1 flex items-center gap-2">
                <input
                  type="text"
                  readOnly
                  value={link}
                  onFocus={e => e.target.select()}
                  className="flex-1 min-w-0 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 px-3 py-2 text-xs text-gray-700 dark:text-gray-200 font-mono truncate"
                />
                <button
                  onClick={copyLink}
                  aria-label="Copiar enlace"
                  className={
                    'shrink-0 inline-flex items-center gap-1 rounded-lg px-3 py-2 text-xs font-bold transition ' +
                    (copied
                      ? 'bg-emerald-500 text-white'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-200')
                  }
                >
                  {copied ? <><Check size={12} /> Copiado</> : <><Copy size={12} /> Copiar</>}
                </button>
              </div>
            </div>

            {/* WhatsApp share */}
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] text-white font-bold py-3 hover:bg-[#20bd5a] transition shadow-md"
            >
              <MessageCircle size={18} /> Compartir por WhatsApp
            </a>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  )
}
