import React, { useState, useEffect } from 'react'
import { Gift } from 'lucide-react'
import useReferral from './useReferral'
import ReferralModal from './ReferralModal'

// Una vez que el alumno cierra el popup de referidos con la X, no le
// aparece nunca más automáticamente. Si quiere reabrirlo lo hace desde
// el botón del header (que siempre funciona).
const DISMISSED_KEY = 'schule_referral_popup_dismissed'

function isDismissed() {
  try { return localStorage.getItem(DISMISSED_KEY) === '1' } catch { return false }
}

function markDismissed() {
  try { localStorage.setItem(DISMISSED_KEY, '1') } catch {}
}

/**
 * Two things bundled:
 *  1. The fixed header button ("🎁 Regala una clase — gana 3") that opens
 *     the modal manually.
 *  2. A listener for victory events (achievement-unlocked in the app)
 *     that auto-opens the same modal, with a 1/month cap per user.
 *
 * Renders nothing at all if the endpoint returned "not available" — that
 * covers both non-academy Schule users and a b2c outage.
 */
export default function ReferralButton() {
  const referral = useReferral()
  const [open, setOpen] = useState(false)
  const [source, setSource] = useState('button') // 'button' | { title, subtitle }

  // Auto-popup en victorias — pero SOLO si el alumno nunca lo cerró.
  useEffect(() => {
    const onVictory = (e) => {
      if (!referral) return
      if (isDismissed()) return
      const label = e?.detail?.label || 'Nuevo logro'
      setSource({
        title: `🎉 ¡${label}!`,
        subtitle: '¿Conoces a alguien que también quiera lograrlo? Regálale una clase 👇',
      })
      setOpen(true)
    }
    window.addEventListener('referral-victory', onVictory)
    return () => window.removeEventListener('referral-victory', onVictory)
  }, [referral])

  // Cerrar con la X marca el flag permanente — no reaparece hasta que el
  // alumno lo abra manualmente desde el header.
  const handleClose = (fromAutoPopup) => {
    setOpen(false)
    // Solo marcamos dismissed si venía del auto-popup (source es objeto).
    // Si cerró el modal que él mismo abrió con el botón, no lo marcamos.
    if (typeof source === 'object') markDismissed()
  }

  if (!referral) return null // fail-silent: sin referidos, sin rastro

  const openManual = () => {
    setSource('button')
    setOpen(true)
  }

  return (
    <>
      <button
        type="button"
        onClick={openManual}
        aria-label="Regala una clase — gana 3"
        className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-orange-400 to-amber-500 text-white text-xs font-bold hover:shadow-md transition"
      >
        <Gift size={13} />
        <span className="hidden lg:inline">Regala una clase — gana 3</span>
        <span className="lg:hidden">Regala 1, gana 3</span>
      </button>
      {/* Mobile compact button (icon-only) */}
      <button
        type="button"
        onClick={openManual}
        aria-label="Regala una clase — gana 3"
        className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-to-r from-orange-400 to-amber-500 text-white hover:shadow-md transition"
      >
        <Gift size={16} />
      </button>

      <ReferralModal
        open={open}
        onClose={handleClose}
        data={referral}
        title={typeof source === 'object' ? source.title : undefined}
        subtitle={typeof source === 'object' ? source.subtitle : undefined}
      />
    </>
  )
}
