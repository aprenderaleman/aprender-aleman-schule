import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Eye, LogOut } from 'lucide-react'
import { useAuth } from '../../context/AuthContext'

/**
 * Persistent banner mostrado cuando un teacher está viendo como alumno
 * vía impersonation. Siempre pinned al top, sobre todo lo demás. El
 * botón "Salir" cierra la sesión → vuelve al teacher a b2c.
 *
 * Read-only mode se refleja en el copy: "Modo solo lectura" —
 * cualquier acción que intente mutar estado devuelve 403 y el frontend
 * puede mostrar un toast (los componentes pueden inspeccionar
 * user.readOnly y esconder botones de mutación proactivamente).
 */
export default function ImpersonationBanner() {
  const { user, logout } = useAuth()

  if (!user?.impersonating) return null

  const teacher = user.impersonatedBy || {}
  const teacherName = teacher.fullName || teacher.email || 'Profesor'
  const studentName = user.name || user.fullName || user.email

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -60, opacity: 0 }}
        className="fixed top-0 inset-x-0 z-[70] bg-gradient-to-r from-fuchsia-600 to-purple-700 text-white shadow-lg pt-safe"
        role="status"
      >
        <div className="max-w-5xl mx-auto px-3 sm:px-4 py-2 flex items-center gap-3">
          <Eye size={16} className="shrink-0" />
          <div className="flex-1 min-w-0 text-xs sm:text-sm">
            <span className="font-bold">{teacherName}</span>
            <span className="opacity-90">
              {' '}está viendo como <strong>{studentName}</strong>
              {user.readOnly ? ' · solo lectura' : ''}
            </span>
          </div>
          <button
            onClick={logout}
            className="shrink-0 inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-white/20 hover:bg-white/30 transition text-xs font-bold"
          >
            <LogOut size={12} /> Salir
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
