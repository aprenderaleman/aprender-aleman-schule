import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Trophy, AlertTriangle, Clock, CheckCircle2, ArrowLeft, Loader2, UserCheck } from 'lucide-react'
import Navbar from '../components/Layout/Navbar'
import { useAuth } from '../context/AuthContext'

const API_URL = import.meta.env.VITE_API_URL || ''

const MODUL = { lesen: 'Lesen', hoeren: 'Hören', schreiben: 'Schreiben', sprechen: 'Sprechen' }
const CRITERIA = [
  { key: 'erfuellung', label: 'Erfüllung' },
  { key: 'kohaerenz', label: 'Kohärenz' },
  { key: 'wortschatz', label: 'Wortschatz' },
  { key: 'strukturen', label: 'Strukturen' },
]
const fmtDate = d => (d ? new Date(d).toLocaleDateString('es-ES', { dateStyle: 'long' }) : '')

/**
 * Resultado de un examen real ya entregado. Mientras un profesor no confirme
 * la nota de Schreiben/Sprechen, el alumno solo ve «En revisión».
 */
export default function PruefungErgebnis() {
  const { attemptId } = useParams()
  const { getToken } = useAuth()
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    let cancelled = false
    setData(null); setError(null)
    fetch(`${API_URL}/api/pruefungen/attempts/${attemptId}/result`, { headers: { Authorization: `Bearer ${getToken()}` } })
      .then(async r => {
        const j = await r.json().catch(() => ({}))
        if (cancelled) return
        if (!r.ok) setError(j.error || 'No se pudo cargar el resultado.')
        else setData(j)
      })
      .catch(() => { if (!cancelled) setError('No se pudo cargar el resultado.') })
    return () => { cancelled = true }
  }, [attemptId])

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="max-w-3xl mx-auto px-4 py-8">
        <Link to="/pruefungen" className="inline-flex items-center gap-1 text-sm font-bold text-purple-700 dark:text-purple-300 hover:underline mb-4">
          <ArrowLeft size={14} /> Prüfungen
        </Link>

        {!data && !error && (
          <div className="flex justify-center py-24"><Loader2 className="animate-spin text-purple-500" size={32} /></div>
        )}
        {error && (
          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-300 rounded-2xl p-5 text-sm">{error}</div>
        )}

        {data?.inReview && (
          <div className="rounded-2xl p-8 text-white bg-gradient-to-br from-indigo-500 to-purple-600">
            <p className="text-sm font-bold uppercase tracking-wide opacity-90">{data.level} · {MODUL[data.module] || data.module}</p>
            <h1 className="text-3xl font-extrabold mt-1 flex items-center gap-3"><Clock size={30} /> En revisión</h1>
            <p className="mt-4 opacity-95">
              Tu examen está entregado. Tu profesor lo está revisando; verás aquí la nota cuando la confirme
              y te avisaremos por correo electrónico.
            </p>
          </div>
        )}

        {data && !data.inReview && <Result data={data} />}
      </main>
    </div>
  )
}

function Result({ data }) {
  const ok = data.passed
  return (
    <>
      <div className={`rounded-2xl p-8 mb-6 text-white ${ok ? 'bg-gradient-to-br from-green-500 to-emerald-600' : 'bg-gradient-to-br from-orange-500 to-red-600'}`}>
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide opacity-90">{data.level} · {MODUL[data.module] || data.module}</p>
            <h1 className="text-3xl md:text-4xl font-extrabold">{ok ? 'Bestanden!' : 'Nicht bestanden'}</h1>
            <p className="text-sm opacity-90 mt-1">{data.title}{data.finishedAt ? ` · ${fmtDate(data.finishedAt)}` : ''}</p>
          </div>
          {ok ? <Trophy size={44} className="opacity-90 shrink-0" /> : <AlertTriangle size={44} className="opacity-90 shrink-0" />}
        </div>
        <p className="mt-4">
          <span className="text-5xl font-extrabold">{data.score}</span>
          <span className="text-2xl opacity-80"> / {data.maxScore}</span>
          <span className="text-xl opacity-80 ml-2">({data.percentage}%)</span>
        </p>
        {data.reviewed && (
          <p className="mt-3 text-sm font-bold inline-flex items-center gap-2 bg-white/15 rounded-full px-3 py-1">
            <UserCheck size={14} /> Nota confirmada por tu profesor{data.reviewedAt ? ` · ${fmtDate(data.reviewedAt)}` : ''}
          </p>
        )}
      </div>

      {data.reviewNote && (
        <section className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-5 mb-6">
          <h2 className="text-sm font-extrabold text-gray-800 dark:text-gray-100 mb-2">Comentario de tu profesor</h2>
          <p className="text-sm text-gray-700 dark:text-gray-200 whitespace-pre-line">{data.reviewNote}</p>
        </section>
      )}

      {data.partScores?.length > 0 && (
        <section className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-5 mb-6">
          <h2 className="text-sm font-extrabold text-gray-800 dark:text-gray-100 mb-3">Ergebnis pro Teil</h2>
          <ul className="space-y-2">
            {data.partScores.map(p => (
              <li key={p.partId} className="flex items-center justify-between text-sm">
                <span className="text-gray-700 dark:text-gray-200">{p.title}</span>
                <span className="font-bold text-gray-800 dark:text-gray-100">{p.earned} / {p.possible}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {(data.detail || []).map(d => <TaskFeedback key={d.partId} d={d} />)}
    </>
  )
}

/** Corrección de una tarea de Schreiben o Sprechen. */
function TaskFeedback({ d }) {
  const ai = d.ai
  // Si el profesor ajustó la nota, manda la suya.
  const scores = d.teacher?.scores || ai?.scores || null
  return (
    <section className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-5 mb-6 space-y-4">
      <div className="flex items-baseline justify-between gap-3">
        <h2 className="text-base font-extrabold text-gray-800 dark:text-gray-100">{d.title || 'Aufgabe'}</h2>
        <p className="text-sm text-gray-600 dark:text-gray-300"><strong className="text-xl text-gray-800 dark:text-gray-100">{d.earned}</strong> / {d.possible} Punkte</p>
      </div>

      {d.skipped && !d.teacher && <p className="text-sm text-orange-600 dark:text-orange-400">No entregaste esta tarea (0 puntos).</p>}

      {scores && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {CRITERIA.map(c => (
            <div key={c.key} className="bg-gray-50 dark:bg-gray-700 rounded-lg p-2 text-center">
              <p className="text-[10px] text-gray-500 dark:text-gray-400 font-bold uppercase">{c.label}</p>
              <p className="text-lg font-extrabold text-indigo-600 dark:text-indigo-300">{scores[c.key] ?? 0}/25</p>
            </div>
          ))}
        </div>
      )}
      {d.teacher && (
        <p className="text-xs text-emerald-700 dark:text-emerald-300 inline-flex items-center gap-1">
          <CheckCircle2 size={13} /> Puntuación revisada por {d.teacher.by || 'tu profesor'}
        </p>
      )}

      {(d.text || d.transcript) && (
        <details className="bg-gray-50 dark:bg-gray-700 rounded-xl p-3 text-sm">
          <summary className="cursor-pointer font-bold text-gray-700 dark:text-gray-200">{d.text ? 'Dein Text' : 'Transkript'}</summary>
          <p className="mt-2 text-gray-700 dark:text-gray-200 whitespace-pre-line">{d.text || d.transcript}</p>
        </details>
      )}

      {ai?.overall && (
        <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-xl p-3 text-sm text-indigo-900 dark:text-indigo-100">{ai.overall}</div>
      )}

      {Array.isArray(ai?.errors) && ai.errors.length > 0 && (
        <div>
          <p className="text-xs font-bold text-gray-600 dark:text-gray-300 uppercase mb-2">Fehler</p>
          <div className="space-y-2">
            {ai.errors.map((e, i) => (
              <div key={i} className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-2 text-xs">
                <p className="text-red-700 dark:text-red-300"><span className="line-through">{e.original}</span> → <strong>{e.correction}</strong></p>
                {e.explanation && <p className="text-red-600 dark:text-red-400 mt-0.5">{e.explanation}</p>}
              </div>
            ))}
          </div>
        </div>
      )}

      {Array.isArray(ai?.strengths) && ai.strengths.length > 0 && (
        <div>
          <p className="text-xs font-bold text-green-700 dark:text-green-400 uppercase mb-1">Stärken</p>
          <ul className="text-xs text-gray-700 dark:text-gray-200 list-disc list-inside space-y-0.5">
            {ai.strengths.map((s, i) => <li key={i}>{s}</li>)}
          </ul>
        </div>
      )}
      {Array.isArray(ai?.improvements) && ai.improvements.length > 0 && (
        <div>
          <p className="text-xs font-bold text-amber-700 dark:text-amber-400 uppercase mb-1">Tipps</p>
          <ul className="text-xs text-gray-700 dark:text-gray-200 list-disc list-inside space-y-0.5">
            {ai.improvements.map((s, i) => <li key={i}>{s}</li>)}
          </ul>
        </div>
      )}
    </section>
  )
}
