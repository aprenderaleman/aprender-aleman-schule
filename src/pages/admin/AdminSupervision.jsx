import React, { useEffect, useState, useCallback } from 'react'
import { Video, RefreshCw, AlertTriangle, CheckCircle2, Clock } from 'lucide-react'

const API_URL = import.meta.env.VITE_API_URL || ''

function getAuthHeaders() {
  const token = localStorage.getItem('auth_token')
  return { Authorization: `Bearer ${token}` }
}

const fmtSize = (b) => (b > 1024 * 1024 ? `${(b / 1024 / 1024).toFixed(1)} MB` : `${Math.round(b / 1024)} KB`)
const fmtDate = (d) => (d ? new Date(d).toLocaleString('es-ES', { dateStyle: 'medium', timeStyle: 'short' }) : '—')
const MODUL = { lesen: 'Lesen', hoeren: 'Hören', schreiben: 'Schreiben', sprechen: 'Sprechen' }

/**
 * Grabaciones de cámara de los exámenes en modo real.
 * Lista lo que hay en el servidor (se borra solo a los N días) y permite
 * reproducir cada vídeo en línea. Un intento con eventos «camera-lost»
 * o «upload-failed» se resalta: es el que merece revisión humana.
 */
export default function AdminSupervision() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [openId, setOpenId] = useState(null)

  const load = useCallback(async () => {
    setLoading(true)
    try {
      const res = await fetch(`${API_URL}/api/admin/pruefungen/recordings`, { headers: getAuthHeaders() })
      if (res.ok) setData(await res.json())
    } catch { /* ignore */ }
    setLoading(false)
  }, [])

  useEffect(() => { load() }, [load])

  if (loading) {
    return (
      <div className="flex items-center justify-center py-32">
        <RefreshCw className="animate-spin text-orange-500" size={32} />
      </div>
    )
  }

  const recordings = data?.recordings || []

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-extrabold text-gray-800 dark:text-gray-100 flex items-center gap-2">
            <Video size={22} className="text-purple-600" /> Supervisión de exámenes
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Grabaciones de cámara de los exámenes en modo real. Se eliminan automáticamente
            a los {data?.ttlDays ?? 30} días.
          </p>
        </div>
        <button
          onClick={load}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border-2 border-gray-200 dark:border-gray-700 text-sm font-bold text-gray-600 dark:text-gray-300 hover:border-purple-300"
        >
          <RefreshCw size={14} /> Actualizar
        </button>
      </div>

      {recordings.length === 0 && (
        <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-10 text-center text-gray-500 dark:text-gray-400">
          No hay grabaciones todavía. Aparecerán aquí cuando un alumno rinda un examen en modo real.
        </div>
      )}

      <div className="space-y-3">
        {recordings.map((r) => {
          const flagged = r.events.some(e => e.type === 'camera-lost' || e.type === 'upload-failed')
          const a = r.attempt
          const pct = a?.score != null && a?.maxScore ? Math.round((a.score / a.maxScore) * 100) : null
          return (
            <div
              key={r.attemptId}
              className={
                'bg-white dark:bg-gray-800 rounded-2xl border-2 p-4 ' +
                (flagged ? 'border-red-300 dark:border-red-800' : 'border-gray-200 dark:border-gray-700')
              }
            >
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                <div className="flex-1 min-w-[220px]">
                  <p className="font-bold text-gray-800 dark:text-gray-100">
                    {a?.user?.name || 'Alumno desconocido'}
                    <span className="ml-2 text-xs font-semibold text-gray-400">{a?.user?.email}</span>
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 flex items-center gap-2 flex-wrap">
                    <span className="font-bold text-purple-600 dark:text-purple-300">
                      {a ? `${a.level} · ${MODUL[a.module] || a.module}` : `Intento #${r.attemptId}`}
                    </span>
                    <span className="inline-flex items-center gap-1"><Clock size={11} /> {fmtDate(a?.startedAt)}</span>
                    <span>{fmtSize(r.sizeBytes)}</span>
                    {pct != null && (
                      <span className={pct >= 60 ? 'text-green-600 font-bold' : 'text-orange-600 font-bold'}>
                        {a.score}/{a.maxScore} ({pct}%)
                      </span>
                    )}
                  </p>
                </div>

                {flagged ? (
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/30 px-2.5 py-1 rounded-full">
                    <AlertTriangle size={12} /> Revisar ({r.events.map(e => e.type).join(', ')})
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/30 px-2.5 py-1 rounded-full">
                    <CheckCircle2 size={12} /> Sin incidencias
                  </span>
                )}

                <button
                  onClick={() => setOpenId(openId === r.attemptId ? null : r.attemptId)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-purple-600 text-white text-xs font-bold hover:bg-purple-700"
                >
                  <Video size={13} /> {openId === r.attemptId ? 'Cerrar' : 'Ver vídeo'}
                </button>
              </div>

              {openId === r.attemptId && (
                <video
                  controls
                  preload="metadata"
                  src={`${API_URL}${r.streamPath}`}
                  className="mt-4 w-full max-w-2xl rounded-xl border border-gray-200 dark:border-gray-700 bg-black"
                />
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
