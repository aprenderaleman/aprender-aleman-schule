import React, { useCallback, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ClipboardCheck, RefreshCw, Clock, ChevronRight, AlertTriangle, Lock } from 'lucide-react'
import { useAuth } from '../../context/AuthContext'
import { MODUL, fmtDate, fmtDay, reviewFetch, notifyReviewsChanged } from '../../utils/examReviews'

const TABS = [
  { key: 'pending', label: 'Pendientes' },
  { key: 'confirmed', label: 'Confirmados' },
  { key: 'all', label: 'Todos' },
]

const EMPTY = {
  pending: 'No hay exámenes pendientes de revisión.',
  confirmed: 'Todavía no hay exámenes confirmados.',
  all: 'Todavía no se ha entregado ningún examen.',
}

/**
 * Cola de revisión de exámenes para el equipo docente. Los exámenes con
 * Schreiben/Sprechen quedan «pendientes» hasta que un profe confirma la nota.
 */
export default function ExamReviews() {
  const { user } = useAuth()
  const [tab, setTab] = useState('pending')
  const [data, setData] = useState(null)
  const [pendingCount, setPendingCount] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const load = useCallback(async (status) => {
    setLoading(true)
    setError('')
    try {
      const d = await reviewFetch(`/api/admin/pruefungen/reviews?status=${status}`)
      setData(d)
      setPendingCount(Number(d.pendingCount) || 0)
      notifyReviewsChanged()
    } catch (e) {
      setData(null)
      setError(e.message || 'No se pudo cargar la lista.')
    }
    setLoading(false)
  }, [])

  useEffect(() => { load(tab) }, [load, tab])

  const reviews = data?.reviews || []
  const isAdmin = user?.role === 'admin' || user?.role === 'superadmin'

  return (
    <div>
      <div className="flex flex-wrap items-start justify-between gap-3 mb-5">
        <div className="min-w-0">
          <h1 className="text-2xl font-extrabold text-gray-800 dark:text-gray-100 flex items-center gap-2">
            <ClipboardCheck size={22} className="text-purple-600 shrink-0" /> Revisión de exámenes
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Los exámenes con Schreiben o Sprechen esperan aquí hasta que un profesor confirma la nota.
            El alumno ve «en revisión» mientras tanto.
          </p>
          {isAdmin && (
            <Link to="/admin" className="inline-block mt-1 text-xs font-bold text-purple-600 dark:text-purple-300 hover:underline">
              ← Volver a administración
            </Link>
          )}
        </div>
        <button
          type="button"
          onClick={() => load(tab)}
          disabled={loading}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border-2 border-gray-200 dark:border-gray-700 text-sm font-bold text-gray-600 dark:text-gray-300 hover:border-purple-300 disabled:opacity-60"
        >
          <RefreshCw size={14} className={loading ? 'animate-spin' : ''} /> Recargar
        </button>
      </div>

      <div role="tablist" aria-label="Filtrar exámenes" className="flex gap-2 mb-4 overflow-x-auto pb-1">
        {TABS.map(t => {
          const active = tab === t.key
          return (
            <button
              key={t.key}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => setTab(t.key)}
              className={
                'shrink-0 px-4 py-2.5 rounded-xl text-sm font-bold border-2 transition-colors ' +
                (active
                  ? 'bg-purple-600 border-purple-600 text-white'
                  : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:border-purple-300')
              }
            >
              {t.label}{t.key === 'pending' && pendingCount != null ? ` (${pendingCount})` : ''}
            </button>
          )
        })}
      </div>

      {error && (
        <div role="alert" className="mb-4 flex items-start gap-2 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-300 rounded-2xl p-4 text-sm font-semibold">
          <AlertTriangle size={16} className="shrink-0 mt-0.5" /> {error}
        </div>
      )}

      {loading && !data && (
        <div className="flex items-center justify-center py-24">
          <RefreshCw className="animate-spin text-orange-500" size={32} />
        </div>
      )}

      {!loading && !error && reviews.length === 0 && (
        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-10 text-center text-gray-500 dark:text-gray-400">
          {EMPTY[tab]}
        </div>
      )}

      {reviews.length > 0 && (
        <ul className={'space-y-3 ' + (loading ? 'opacity-60' : '')}>
          {reviews.map(r => {
            const pending = r.status === 'pending'
            return (
              <li key={r.attemptId}>
                <Link
                  to={`/revision-examenes/${r.attemptId}`}
                  className={
                    'block bg-white dark:bg-gray-800 rounded-2xl border-2 p-4 transition-colors hover:border-purple-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 ' +
                    (pending ? 'border-amber-300 dark:border-amber-700' : 'border-gray-200 dark:border-gray-700')
                  }
                >
                  <div className="flex items-center gap-3">
                    <div className="flex-1 min-w-0 grid gap-x-4 gap-y-2 md:grid-cols-[minmax(0,1.6fr)_minmax(0,1.2fr)_minmax(0,1.4fr)] md:items-center">
                      <div className="min-w-0">
                        <p className="font-bold text-gray-800 dark:text-gray-100 truncate">{r.student?.name || '—'}</p>
                        <p className="text-xs text-gray-400 truncate">{r.student?.email}</p>
                      </div>

                      <div className="min-w-0 text-xs text-gray-500 dark:text-gray-400">
                        <p className="font-bold text-sm text-purple-600 dark:text-purple-300">
                          {r.level} · {MODUL[r.module] || r.module}
                        </p>
                        <p className="inline-flex items-center gap-1 mt-0.5"><Clock size={11} /> {fmtDate(r.finishedAt)}</p>
                      </div>

                      <div className="min-w-0 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs">
                        <span className="text-gray-500 dark:text-gray-400">
                          IA <strong className="text-gray-700 dark:text-gray-200">{r.aiPct}%</strong>
                        </span>
                        {pending ? (
                          <span className="inline-flex items-center font-bold text-amber-700 dark:text-amber-300 bg-amber-50 dark:bg-amber-900/30 px-2.5 py-1 rounded-full">
                            Pendiente
                          </span>
                        ) : (
                          <>
                            <span className={
                              'inline-flex items-center font-bold px-2.5 py-1 rounded-full ' +
                              (r.passed
                                ? 'text-green-700 dark:text-green-300 bg-green-50 dark:bg-green-900/30'
                                : 'text-red-600 dark:text-red-300 bg-red-50 dark:bg-red-900/30')
                            }>
                              Final {r.finalPct}% · {r.passed ? 'aprobado' : 'no aprobado'}
                            </span>
                            <span className="text-gray-500 dark:text-gray-400 w-full md:w-auto">
                              {r.auto
                                ? 'automático'
                                : `${r.reviewedByName || 'Profesor'}${r.reviewedAt ? ` · ${fmtDay(r.reviewedAt)}` : ''}`}
                            </span>
                          </>
                        )}
                        {r.frozen && (
                          <span className="inline-flex items-center gap-1 font-bold text-gray-500 dark:text-gray-400" title="Usado para emitir un certificado">
                            <Lock size={11} /> congelado
                          </span>
                        )}
                      </div>
                    </div>
                    <ChevronRight size={18} className="shrink-0 text-gray-400" aria-hidden="true" />
                  </div>
                </Link>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}
