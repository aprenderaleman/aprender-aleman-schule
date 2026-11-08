import React, { useState } from 'react'
import { BookCheck, Search, RefreshCw, CheckCircle2, Circle, ChevronDown } from 'lucide-react'
import { reviewFetch, fmtDate } from '../../utils/examReviews'

const TYP = { grammatik: 'Grammatik', lesen: 'Lesen', hoeren: 'Hören', schreiben: 'Schreiben', sprechen: 'Sprechen' }

/**
 * Cuadernos de un alumno (equipo docente): cuáles hizo, con qué nota y sus
 * entregas. Es la prueba para la garantía de nivel.
 */
export default function HeftStudents() {
  const [email, setEmail] = useState('')
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const buscar = async (e) => {
    e.preventDefault()
    if (!email.trim()) return
    setLoading(true); setError(null); setData(null)
    try {
      setData(await reviewFetch(`/api/admin/hefte?email=${encodeURIComponent(email.trim())}`))
    } catch (err) {
      setError(err.message)
    }
    setLoading(false)
  }

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-2xl font-extrabold text-gray-800 dark:text-gray-100 flex items-center gap-2">
        <BookCheck size={22} className="text-emerald-600" /> Cuadernos de un alumno
      </h1>
      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 mb-5">
        Qué Übungshefte ha completado, con qué nota y qué entregó. Un cuaderno cuenta con todas sus partes
        entregadas y al menos un 50 % en las de corrección automática.
      </p>

      <form onSubmit={buscar} className="flex gap-2 mb-6">
        <input
          type="email"
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="correo@del-alumno.com"
          aria-label="Correo del alumno"
          className="flex-1 min-w-0 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-4 py-3 text-sm text-gray-800 dark:text-gray-100"
        />
        <button type="submit" disabled={loading} className="inline-flex items-center gap-2 bg-emerald-600 text-white font-bold px-5 py-3 rounded-xl hover:bg-emerald-700 disabled:opacity-60">
          {loading ? <RefreshCw size={16} className="animate-spin" /> : <Search size={16} />} Buscar
        </button>
      </form>

      {error && <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-300 rounded-xl p-4 text-sm">{error}</div>}

      {data && (
        <>
          <p className="font-bold text-gray-800 dark:text-gray-100">{data.student.name || '—'}</p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{data.student.email}</p>
          <div className="space-y-4">
            {data.kurse.filter(k => k.lessons.length > 0).map(k => <KursBlock key={k.kurs} k={k} userId={data.student.id} />)}
            {data.kurse.every(k => k.lessons.length === 0) && (
              <p className="text-sm text-gray-500 dark:text-gray-400">Este alumno todavía no ha entregado ningún cuaderno.</p>
            )}
          </div>
        </>
      )}
    </div>
  )
}

function KursBlock({ k, userId }) {
  const pct = k.total ? Math.round((k.done / k.total) * 100) : 0
  return (
    <section className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-5">
      <div className="flex items-baseline justify-between gap-3 mb-2">
        <h2 className="font-extrabold text-gray-800 dark:text-gray-100">{k.level}</h2>
        <p className="text-sm text-gray-600 dark:text-gray-300"><strong>{k.done} / {k.total}</strong> ({pct} %)</p>
      </div>
      <div className="h-2 rounded-full bg-gray-100 dark:bg-gray-700 overflow-hidden mb-4">
        <div className="h-full bg-emerald-500" style={{ width: `${pct}%` }} />
      </div>
      <ul className="divide-y divide-gray-100 dark:divide-gray-700">
        {k.lessons.map(l => <LessonRow key={l.lessonId} l={l} kurs={k.kurs} userId={userId} />)}
      </ul>
    </section>
  )
}

function LessonRow({ l, kurs, userId }) {
  const [subs, setSubs] = useState(null)
  const [open, setOpen] = useState(false)
  const [error, setError] = useState(null)
  const toggle = async () => {
    setOpen(o => !o)
    if (subs || open) return
    try {
      const j = await reviewFetch(`/api/admin/hefte/${encodeURIComponent(userId)}/${kurs}/${l.lessonId}`)
      setSubs(j.submissions)
    } catch (err) {
      setError(err.message)
    }
  }
  return (
    <li className="py-2">
      <button type="button" onClick={toggle} aria-expanded={open} className="w-full flex items-center gap-3 text-left text-sm text-gray-700 dark:text-gray-200">
        {l.completedAt ? <CheckCircle2 size={18} className="text-emerald-600 shrink-0" /> : <Circle size={18} className="text-gray-300 shrink-0" />}
        <span className="font-semibold">Lektion {l.lessonId}</span>
        <span className="text-gray-500 dark:text-gray-400 min-w-0 truncate">
          {l.partsDone}/{l.partsTotal} partes{l.autoPct != null ? ` · ${l.autoPct} %` : ''}{l.completedAt ? ` · ${fmtDate(l.completedAt)}` : ''}
        </span>
        <ChevronDown size={16} className={`ml-auto shrink-0 transition ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="mt-2 ml-7 space-y-2">
          {error && <p className="text-sm text-red-600">{error}</p>}
          {!subs && !error && <p className="text-sm text-gray-500">Cargando…</p>}
          {subs?.map(s => (
            <div key={s.id} className="rounded-lg bg-gray-50 dark:bg-gray-700/50 p-3 text-sm text-gray-700 dark:text-gray-200">
              <p className="font-semibold">
                {TYP[s.typ] || s.typ}
                {s.maxScore != null && ` · ${s.score}/${s.maxScore}`}
                {s.aiTotal != null && ` · IA ${s.aiTotal}/100`}
                {s.inputMode === 'escrito' && ' · respuesta escrita (sin micrófono)'}
                {s.inputMode === 'voz' && ' · hablado'}
                <span className="font-normal text-gray-500 dark:text-gray-400"> · {fmtDate(s.createdAt)}</span>
              </p>
              {s.responses?.text && <p className="mt-1 whitespace-pre-line">{s.responses.text}</p>}
            </div>
          ))}
        </div>
      )}
    </li>
  )
}
