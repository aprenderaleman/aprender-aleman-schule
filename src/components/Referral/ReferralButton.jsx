import React, { useState } from 'react'
import { Gift } from 'lucide-react'
import useReferral from './useReferral'
import ReferralModal from './ReferralModal'

/**
 * Solo el botón manual del header. NO hay auto-popup en ningún caso
 * (múltiples alumnos reportaron que el pop-up bloqueaba ejercicios).
 * Si el alumno quiere ver referidos, aprieta el botón. Punto.
 *
 * Renders nothing at all if the endpoint returned "not available" — that
 * covers both non-academy Schule users and a b2c outage.
 */
export default function ReferralButton() {
  const referral = useReferral()
  const [open, setOpen] = useState(false)

  if (!referral) return null // fail-silent: sin referidos, sin rastro

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
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
        onClick={() => setOpen(true)}
        aria-label="Regala una clase — gana 3"
        className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-to-r from-orange-400 to-amber-500 text-white hover:shadow-md transition"
      >
        <Gift size={16} />
      </button>

      <ReferralModal
        open={open}
        onClose={() => setOpen(false)}
        data={referral}
      />
    </>
  )
}
