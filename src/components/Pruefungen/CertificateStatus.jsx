import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Trophy, Check, Clock, Lock, BookOpen, Headphones, PenLine, Mic } from 'lucide-react'

const API_URL = import.meta.env.VITE_API_URL || ''

const MODULE_META = {
  lesen:     { label: 'Lesen',     Icon: BookOpen,   color: 'text-blue-500' },
  hoeren:    { label: 'Hören',     Icon: Headphones, color: 'text-purple-500' },
  schreiben: { label: 'Schreiben', Icon: PenLine,    color: 'text-pink-500' },
  sprechen:  { label: 'Sprechen',  Icon: Mic,        color: 'text-teal-500' },
}

function timeUntil(iso) {
  if (!iso) return null
  const ms = new Date(iso).getTime() - Date.now()
  if (ms <= 0) return null
  const h = Math.floor(ms / 3600000)
  const m = Math.floor((ms % 3600000) / 60000)
  return h > 0 ? `${h} h ${m} min` : `${m} min`
}

function useCertStatus() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const token = localStorage.getItem('auth_token')
    if (!token) { setLoading(false); return }
    let cancelled = false
    fetch(`${API_URL}/api/pruefungen/cert-status`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(r => r.ok ? r.json() : null)
      .then(j => { if (!cancelled) { setData(j); setLoading(false) } })
      .catch(() => { if (!cancelled) setLoading(false) })
    return () => { cancelled = true }
  }, [])

  return { data, loading }
}

/**
 * Top-of-page banner for the Prüfungen route. Shows the student where
 * they stand on the certificate — 4 module tiles + path progress bar +
 * the eligibility verdict.
 *
 * The child <ModuleStatus> is exported below and reused by pages that
 * need to show a single module's status (e.g. the exam start screen).
 */
export default function CertificateStatus() {
  const { data, loading } = useCertStatus()
  if (loading || !data) return null

  const { level, modules, passedCount, path, eligibleForCertificate } = data

  return (
    <motion.section
      initial={{ opacity: 0, y: -6 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-6 rounded-2xl border-2 border-indigo-200 dark:border-indigo-800 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 p-5"
    >
      <div className="flex items-start justify-between gap-4 mb-4">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 dark:text-indigo-300 uppercase tracking-wide mb-1">
            <Trophy size={12} /> Camino al certificado
          </div>
          <h2 className="text-lg sm:text-xl font-extrabold text-gray-800 dark:text-gray-100">
            Nivel {level} · {passedCount} / 4 módulos aprobados
          </h2>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
            Solo los exámenes en modo <strong>real</strong> cuentan para el certificado.
          </p>
        </div>
        {eligibleForCertificate && (
          <span className="shrink-0 inline-flex items-center gap-1 text-xs font-bold px-3 py-1 rounded-full bg-emerald-500 text-white shadow-sm">
            <Check size={12} /> Elegible
          </span>
        )}
      </div>

      {/* 4 module tiles */}
      <div className="grid grid-cols-4 gap-2 mb-4">
        {['lesen', 'hoeren', 'schreiben', 'sprechen'].map(key => {
          const m = modules[key]
          const meta = MODULE_META[key]
          const Icon = meta.Icon
          const passed = m?.passed
          return (
            <div
              key={key}
              className={
                'rounded-xl border-2 p-2.5 text-center transition ' +
                (passed
                  ? 'border-emerald-400 bg-emerald-50 dark:bg-emerald-900/20'
                  : m?.bestPct != null
                    ? 'border-amber-300 bg-amber-50 dark:bg-amber-900/10'
                    : 'border-gray-200 dark:border-gray-700 bg-white/60 dark:bg-gray-800/40')
              }
            >
              <Icon size={16} className={`mx-auto mb-1 ${passed ? 'text-emerald-600' : meta.color}`} />
              <p className="text-xs font-bold text-gray-800 dark:text-gray-100">{meta.label}</p>
              <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-0.5">
                {m?.bestPct != null ? `${m.bestPct}%` : '—'}
              </p>
            </div>
          )
        })}
      </div>

      {/* Path progress */}
      <div>
        <div className="flex items-center justify-between text-xs mb-1">
          <span className="text-gray-600 dark:text-gray-300 font-medium">Ruta {level}: {path.pct}%</span>
          <span className="text-gray-400">Meta {path.threshold}%</span>
        </div>
        <div className="h-2 rounded-full bg-white/60 dark:bg-gray-800/40 overflow-hidden">
          <div
            className={`h-full ${path.pct >= path.threshold ? 'bg-emerald-500' : 'bg-indigo-500'}`}
            style={{ width: `${Math.min(100, path.pct)}%` }}
          />
        </div>
      </div>
    </motion.section>
  )
}

/**
 * Compact status pill for a single module — used inside the exam start
 * screen so the student sees "quedan 2 intentos" or "próximo intento
 * disponible en 3h" BEFORE hitting the Start button.
 */
export function ModuleStatus({ level, module }) {
  const [status, setStatus] = useState(null)

  useEffect(() => {
    if (!module) return
    const token = localStorage.getItem('auth_token')
    if (!token) return
    let cancelled = false
    fetch(`${API_URL}/api/pruefungen/cert-status`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(r => r.ok ? r.json() : null)
      .then(j => { if (!cancelled) setStatus(j?.modules?.[module] || null) })
      .catch(() => {})
    return () => { cancelled = true }
  }, [module, level])

  if (!status) return null
  const waitStr = timeUntil(status.nextAvailableAt)

  return (
    <div className="rounded-xl border border-purple-200 dark:border-purple-800 bg-purple-50 dark:bg-purple-900/20 px-3 py-2.5 text-xs text-purple-800 dark:text-purple-200 space-y-1">
      <div className="flex items-center gap-2">
        <Trophy size={13} className="text-purple-500" />
        <span className="font-bold">Modo real</span>
      </div>
      <p>Intentos: <strong>{status.attempts} / 3</strong> ({status.attemptsLeft} restantes)</p>
      {status.passed && (
        <p className="text-emerald-700 dark:text-emerald-300 font-bold inline-flex items-center gap-1">
          <Check size={12} /> Ya aprobado ({status.bestPct}%)
        </p>
      )}
      {waitStr && (
        <p className="inline-flex items-center gap-1">
          <Clock size={12} /> Próximo intento en <strong>{waitStr}</strong>
        </p>
      )}
      {!status.canStartRealNow && !waitStr && status.attemptsLeft === 0 && (
        <p className="inline-flex items-center gap-1 text-red-700 dark:text-red-300 font-bold">
          <Lock size={12} /> Sin más intentos — contactá con la academia
        </p>
      )}
    </div>
  )
}

export { useCertStatus }
