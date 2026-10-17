import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Bot, X, ArrowRight } from 'lucide-react'

const API_URL = import.meta.env.VITE_API_URL || ''

// Hans proactivo: pide al servidor una sugerencia contextual segun el
// patron de errores del alumno (ultimos 14 dias) y la muestra en el
// Dashboard. Si no hay nada, no renderiza nada — no quita espacio.
//
// El alumno puede descartar la sugerencia con la X; se guarda en
// localStorage por 24h asi que no vuelve a aparecer hoy. Si el tema
// cambia (otro patron detectado), vuelve a mostrarse.
export default function HansSuggestion() {
  const [data, setData] = useState(null)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem('auth_token')
    if (!token) return
    fetch(`${API_URL}/api/hans/suggestion`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(r => r.ok ? r.json() : null)
      .then(d => {
        if (!d?.suggestion) return
        // Check dismiss cache
        try {
          const key = `hans-dismiss:${d.topic || 'default'}`
          const raw = localStorage.getItem(key)
          if (raw && Date.now() - Number(raw) < 24 * 3600 * 1000) {
            setDismissed(true)
            return
          }
        } catch { /* ignore */ }
        setData(d)
      })
      .catch(() => { /* silent */ })
  }, [])

  const handleDismiss = () => {
    setDismissed(true)
    if (data?.topic) {
      try { localStorage.setItem(`hans-dismiss:${data.topic}`, String(Date.now())) }
      catch { /* ignore */ }
    }
  }

  if (!data?.suggestion || dismissed) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        className="relative bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20 border border-orange-200 dark:border-orange-800 rounded-2xl p-5 mb-6"
      >
        <button
          onClick={handleDismiss}
          aria-label="Vorschlag ausblenden"
          className="absolute top-3 right-3 p-1.5 rounded-lg text-gray-400 hover:bg-white/50 dark:hover:bg-black/20 hover:text-gray-600"
        >
          <X size={14} />
        </button>
        <div className="flex items-start gap-3 pr-6">
          <div className="shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-amber-500 flex items-center justify-center text-white shadow-md">
            <Bot size={20} />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-bold uppercase tracking-wide text-orange-600 dark:text-orange-400 mb-1">
              Hans
            </p>
            <p className="text-sm text-gray-700 dark:text-gray-200 leading-relaxed">
              {data.suggestion}
            </p>
            {data.cta?.href && (
              <Link
                to={data.cta.href}
                className="mt-3 inline-flex items-center gap-1.5 bg-orange-500 text-white text-sm font-bold px-4 py-2 rounded-lg hover:bg-orange-600 transition"
              >
                {data.cta.label || 'Jetzt üben'} <ArrowRight size={14} />
              </Link>
            )}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
