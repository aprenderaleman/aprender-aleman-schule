import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import {
  ArrowLeft, RefreshCw, AlertTriangle, CheckCircle2, Clock, Video, Lock,
  Check, X, RotateCcw, Send, Info,
} from 'lucide-react'
import {
  API_URL, MODUL, fmtDate, fmtDuration, reviewFetch, notifyReviewsChanged,
} from '../../utils/examReviews'

const QUEUE = '/revision-examenes'
const isProductive = (p) => p.kind === 'writing-task' || p.kind === 'speaking-task'
const countWords = (t) => String(t || '').trim().split(/\s+/).filter(Boolean).length

const EVENT_LABEL = {
  'camera-lost': 'Cámara perdida',
  'camera-restored': 'Cámara recuperada',
  'upload-failed': 'Fallo al subir la grabación',
}
const EVENT_FLAGGED = ['camera-lost', 'upload-failed']

const card = 'bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-4 sm:p-5'
const h3 = 'text-xs font-bold uppercase tracking-wide text-gray-500 dark:text-gray-400 mb-1.5'
const detailsCls = 'rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/40'
const summaryCls = 'cursor-pointer select-none px-3 py-2.5 text-sm font-bold text-gray-700 dark:text-gray-200'

/** Notas iniciales de una tarea: las del profe, si no las de la IA, si no 0. */
function initialScores(part, criteria) {
  const src = part.teacher?.scores || part.ai?.scores || {}
  return Object.fromEntries(criteria.map(c => [c.key, String(Number.isFinite(Number(src[c.key])) ? Number(src[c.key]) : 0)]))
}

/** Lee los cuatro campos de una tarea. valid=false si alguno no es 0–max. */
function readScores(values, criteria) {
  let valid = true
  let total = 0
  const scores = {}
  for (const c of criteria) {
    const raw = values?.[c.key]
    const v = raw === '' || raw == null ? NaN : Number(raw)
    if (!Number.isFinite(v) || v < 0 || v > c.max) { valid = false; continue }
    scores[c.key] = Math.round(v)
    total += scores[c.key]
  }
  return { valid, total, scores }
}

function Pill({ tone = 'gray', children }) {
  const tones = {
    gray: 'text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-700',
    amber: 'text-amber-700 dark:text-amber-300 bg-amber-50 dark:bg-amber-900/30',
    green: 'text-green-700 dark:text-green-300 bg-green-50 dark:bg-green-900/30',
    red: 'text-red-600 dark:text-red-300 bg-red-50 dark:bg-red-900/30',
    purple: 'text-purple-700 dark:text-purple-300 bg-purple-50 dark:bg-purple-900/30',
  }
  return <span className={`inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-full ${tones[tone]}`}>{children}</span>
}

/** Filas pregunta · respuesta · correcta · ✓/✗. En móvil se apilan. */
function AnswerRows({ rows, firstLabel }) {
  const grid = 'sm:grid sm:grid-cols-[minmax(0,2fr)_minmax(0,1.3fr)_minmax(0,1.3fr)_2rem] sm:gap-3 sm:items-start'
  return (
    <div className="rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden text-sm">
      <div className={`hidden ${grid} px-3 py-2 bg-gray-50 dark:bg-gray-900/40 text-xs font-bold text-gray-500 dark:text-gray-400`} aria-hidden="true">
        <span>{firstLabel}</span><span>Respuesta del alumno</span><span>Correcta</span><span />
      </div>
      <ul>
        {rows.map((r, i) => (
          <li
            key={i}
            className={
              `${grid} px-3 py-2.5 border-t border-gray-100 dark:border-gray-700 first:border-t-0 sm:first:border-t break-words ` +
              (r.ok ? '' : 'bg-red-50 dark:bg-red-900/20')
            }
          >
            <div className="min-w-0 text-gray-800 dark:text-gray-100">
              {r.frage}
              {r.audioTranscript && (
                <details className="mt-1">
                  <summary className="cursor-pointer text-xs font-bold text-purple-600 dark:text-purple-300">Transcripción del audio</summary>
                  <p className="mt-1 text-xs text-gray-600 dark:text-gray-300 whitespace-pre-wrap">{r.audioTranscript}</p>
                </details>
              )}
            </div>
            <div className="min-w-0 mt-1 sm:mt-0 text-gray-700 dark:text-gray-200">
              <span className="sm:hidden text-xs font-bold text-gray-500 dark:text-gray-400">Alumno: </span>{r.antwort}
            </div>
            <div className="min-w-0 text-gray-700 dark:text-gray-200">
              <span className="sm:hidden text-xs font-bold text-gray-500 dark:text-gray-400">Correcta: </span>{r.loesung}
            </div>
            <div className="mt-1 sm:mt-0">
              {r.ok
                ? <Check size={16} className="text-green-600" aria-label="Correcta" />
                : <X size={16} className="text-red-600" aria-label="Incorrecta" />}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

function ProductivePart({ part, criteria, values, readOnly, onChange, onReset }) {
  const speaking = part.kind === 'speaking-task'
  const { valid, total } = readScores(values, criteria)
  const points = Math.round((total / 100) * (Number(part.possible) || 0))
  const ai = part.ai
  const differs = !!ai?.scores && criteria.some(c => Number(values?.[c.key]) !== Number(ai.scores[c.key]))
  const words = countWords(part.text)

  return (
    <div className="space-y-4">
      <div>
        <h3 className={h3}>Consigna</h3>
        <p className="text-sm text-gray-800 dark:text-gray-100 whitespace-pre-wrap break-words">{part.taskPrompt || '—'}</p>
      </div>

      <div>
        <h3 className={h3}>
          {speaking ? 'Respuesta oral del alumno' : 'Texto del alumno'}
          <span className="ml-2 normal-case font-semibold">
            {words} {words === 1 ? 'palabra' : 'palabras'}
            {part.minWords ? ` (mínimo ${part.minWords})` : ''}
            {speaking && part.durationSeconds ? ` · ${fmtDuration(part.durationSeconds)}` : ''}
          </span>
        </h3>

        {speaking && (
          part.audioUrl ? (
            <audio controls preload="none" src={`${API_URL}${part.audioUrl}`} className="w-full mb-2" />
          ) : (
            <p className="mb-2 flex items-start gap-2 text-sm font-semibold text-amber-700 dark:text-amber-300 bg-amber-50 dark:bg-amber-900/30 rounded-xl px-3 py-2">
              <AlertTriangle size={15} className="shrink-0 mt-0.5" />
              No hay audio guardado: solo está la transcripción automática.
            </p>
          )
        )}

        {part.skipped ? (
          <p className="text-sm italic text-gray-500 dark:text-gray-400">El alumno no respondió esta tarea.</p>
        ) : (
          <p className="text-sm text-gray-800 dark:text-gray-100 whitespace-pre-wrap break-words rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/40 p-3">
            {part.text || '(vacío)'}
          </p>
        )}
        {speaking && (
          <p className="mt-1.5 text-xs text-gray-500 dark:text-gray-400">
            La transcripción la genera el navegador del alumno y puede contener errores: guíate por el audio.
          </p>
        )}
        {part.error && (
          <p className="mt-2 text-sm font-semibold text-red-600 dark:text-red-300">Error de la corrección automática: {part.error}</p>
        )}
      </div>

      <div className="rounded-xl border border-purple-200 dark:border-purple-800 bg-purple-50/60 dark:bg-purple-900/20 p-3 sm:p-4">
        <h3 className={h3}>Corrección de la IA</h3>
        {ai?.scores ? (
          <>
            <p className="text-sm text-gray-800 dark:text-gray-100">
              {criteria.map(c => `${c.label} ${ai.scores[c.key] ?? '–'}/${c.max}`).join(' · ')}
            </p>
            <p className="text-sm font-bold text-gray-800 dark:text-gray-100 mt-1">
              Total {ai.total ?? criteria.reduce((s, c) => s + (Number(ai.scores[c.key]) || 0), 0)}/100
            </p>
            {Array.isArray(ai.errors) && ai.errors.length > 0 && (
              <ul className="mt-3 space-y-2">
                {ai.errors.map((e, i) => (
                  <li key={i} className="text-sm break-words">
                    <span className="line-through text-red-600 dark:text-red-300">{e.original}</span>
                    <span className="mx-1.5 text-gray-400" aria-hidden="true">→</span>
                    <span className="font-semibold text-green-700 dark:text-green-300">{e.correction}</span>
                    {e.explanation && <span className="block text-xs text-gray-600 dark:text-gray-300 mt-0.5">{e.explanation}</span>}
                  </li>
                ))}
              </ul>
            )}
            {(ai.overall || ai.feedback) && (
              <p className="mt-3 text-sm text-gray-700 dark:text-gray-200 whitespace-pre-wrap break-words">{ai.overall || ai.feedback}</p>
            )}
            {[['Puntos fuertes', ai.strengths], ['A mejorar', ai.improvements]].map(([title, list]) => (
              Array.isArray(list) && list.length > 0 && (
                <div key={title} className="mt-3">
                  <p className="text-xs font-bold text-gray-600 dark:text-gray-300">{title}</p>
                  <ul className="mt-1 list-disc pl-5 space-y-0.5 text-sm text-gray-700 dark:text-gray-200 break-words">
                    {list.map((t, i) => <li key={i}>{String(t)}</li>)}
                  </ul>
                </div>
              )
            ))}
          </>
        ) : (
          <p className="text-sm text-gray-600 dark:text-gray-300">La IA no puntuó esta tarea.</p>
        )}
      </div>

      {!readOnly && (
        <fieldset className="rounded-xl border-2 border-orange-200 dark:border-orange-800 p-3 sm:p-4">
          <legend className="px-1 text-xs font-bold uppercase tracking-wide text-orange-600 dark:text-orange-300">Tu nota</legend>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {criteria.map(c => {
              const id = `score-${part.partId}-${c.key}`
              const raw = values?.[c.key] ?? ''
              const n = raw === '' ? NaN : Number(raw)
              const bad = !Number.isFinite(n) || n < 0 || n > c.max
              return (
                <div key={c.key}>
                  <label htmlFor={id} className="block text-xs font-bold text-gray-600 dark:text-gray-300 mb-1">
                    {c.label} <span className="font-semibold text-gray-400">/ {c.max}</span>
                  </label>
                  <input
                    id={id}
                    type="number"
                    inputMode="numeric"
                    min={0}
                    max={c.max}
                    step={1}
                    value={raw}
                    aria-invalid={bad}
                    onChange={e => onChange(part.partId, c.key, e.target.value)}
                    className={
                      'w-full px-3 py-2.5 rounded-xl border-2 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 text-base font-bold tabular-nums focus:outline-none focus:border-purple-500 ' +
                      (bad ? 'border-red-400' : 'border-gray-200 dark:border-gray-700')
                    }
                  />
                </div>
              )
            })}
          </div>
          <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-2" aria-live="polite">
            {valid ? (
              <p className="text-sm font-bold text-gray-800 dark:text-gray-100">
                Total {total}/100 → {points}/{part.possible} puntos
              </p>
            ) : (
              <p className="text-sm font-bold text-red-600 dark:text-red-300">Cada criterio debe estar entre 0 y 25.</p>
            )}
            {ai?.scores && (differs
              ? <Pill tone="amber">Distinta de la IA</Pill>
              : <Pill tone="gray">Igual que la IA</Pill>)}
            {ai?.scores && (
              <button
                type="button"
                onClick={() => onReset(part)}
                disabled={!differs}
                className="ml-auto inline-flex items-center gap-1.5 px-3 py-2 rounded-xl border-2 border-gray-200 dark:border-gray-700 text-xs font-bold text-gray-600 dark:text-gray-300 hover:border-purple-300 disabled:opacity-50"
              >
                <RotateCcw size={13} /> Restablecer nota de la IA
              </button>
            )}
          </div>
        </fieldset>
      )}

      {readOnly && (
        <p className="text-sm font-bold text-gray-800 dark:text-gray-100">
          Nota {part.teacher ? `del profesor (${part.teacher.by || 'Profesor'})` : 'actual'}: {part.earned}/{part.possible} puntos
        </p>
      )}
    </div>
  )
}

/**
 * Detalle de un intento: todo lo que hizo el alumno, la corrección de la IA
 * y, si lleva Schreiben/Sprechen, el editor de la nota y el botón de confirmar.
 */
export default function ExamReviewDetail() {
  const { attemptId } = useParams()
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [scores, setScores] = useState({})
  const [note, setNote] = useState('')
  const [saving, setSaving] = useState(false)
  const [saveError, setSaveError] = useState('')
  const [result, setResult] = useState(null)
  const [showVideo, setShowVideo] = useState(false)
  const [resend, setResend] = useState({ busy: false, b2c: null, error: '' })

  const load = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const d = await reviewFetch(`/api/admin/pruefungen/reviews/${encodeURIComponent(attemptId)}`)
      const criteria = d.criteria || []
      setScores(Object.fromEntries((d.parts || []).filter(isProductive).map(p => [p.partId, initialScores(p, criteria)])))
      setNote(d.attempt?.reviewNote || '')
      setData(d)
    } catch (e) {
      setData(null)
      setError({ status: e.status, message: e.status === 404 ? 'Examen no encontrado' : (e.message || 'No se pudo cargar el examen.') })
    }
    setLoading(false)
  }, [attemptId])

  useEffect(() => {
    setResult(null)
    setSaveError('')
    setShowVideo(false)
    setResend({ busy: false, b2c: null, error: '' })
    load()
  }, [load])

  const attempt = data?.attempt
  const criteria = data?.criteria || []
  const parts = data?.parts || []
  const productive = useMemo(() => parts.filter(isProductive), [parts])

  // Nota final en vivo. El backend no manda `earned` de las partes de
  // preguntas, así que los puntos de respuesta cerrada salen de la nota
  // actual menos lo que hoy valen las tareas productivas.
  const live = useMemo(() => {
    if (!attempt) return null
    const closed = attempt.score - productive.reduce((s, p) => s + (Number(p.earned) || 0), 0)
    let valid = true
    let prod = 0
    for (const p of productive) {
      const r = readScores(scores[p.partId], criteria)
      if (!r.valid) valid = false
      prod += Math.round((r.total / 100) * (Number(p.possible) || 0))
    }
    const score = closed + prod
    const max = attempt.maxScore || 1
    return { valid, score, max, pct: Math.round((score / max) * 100), passed: score / max >= attempt.passPct / 100 }
  }, [attempt, productive, scores, criteria])

  const onChange = (partId, key, value) => {
    setScores(prev => ({ ...prev, [partId]: { ...prev[partId], [key]: value } }))
  }
  const onReset = (part) => {
    if (!part.ai?.scores) return
    setScores(prev => ({
      ...prev,
      [part.partId]: Object.fromEntries(criteria.map(c => [c.key, String(Number(part.ai.scores[c.key]) || 0)])),
    }))
  }

  const confirm = async () => {
    if (!live?.valid || saving) return
    const already = attempt.status === 'confirmed'
    const msg = already
      ? `¿Guardar los cambios? La nota quedará en ${live.score}/${live.max} (${live.pct} %).`
      : `¿Confirmar la nota ${live.score}/${live.max} (${live.pct} %) y enviar el resultado al alumno?`
    if (!window.confirm(msg)) return
    setSaving(true)
    setSaveError('')
    setResult(null)
    try {
      const tasks = Object.fromEntries(productive.map(p => [p.partId, readScores(scores[p.partId], criteria).scores]))
      const res = await reviewFetch(`/api/admin/pruefungen/reviews/${attempt.attemptId}/confirm`, {
        method: 'POST',
        body: { tasks, note: note.trim() },
      })
      setResult(res)
      setResend({ busy: false, b2c: null, error: '' })
      notifyReviewsChanged()
      await load()
    } catch (e) {
      setSaveError(e.message || 'No se pudo confirmar la nota.')
    }
    setSaving(false)
  }

  const resendNotice = async () => {
    setResend({ busy: true, b2c: null, error: '' })
    try {
      const res = await reviewFetch(`/api/admin/pruefungen/reviews/${attempt.attemptId}/resend-level-passed`, { method: 'POST' })
      setResend({ busy: false, b2c: res.b2c || null, error: '' })
    } catch (e) {
      setResend({ busy: false, b2c: null, error: e.message || 'No se pudo reenviar el aviso.' })
    }
  }

  const back = (
    <Link to={QUEUE} className="inline-flex items-center gap-1.5 text-sm font-bold text-purple-600 dark:text-purple-300 hover:underline">
      <ArrowLeft size={15} /> Volver a la cola
    </Link>
  )

  if (loading && !data) {
    return (
      <div className="flex items-center justify-center py-32">
        <RefreshCw className="animate-spin text-orange-500" size={32} />
      </div>
    )
  }

  if (error || !data) {
    return (
      <div>
        {back}
        <div role="alert" className="mt-4 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-10 text-center">
          <AlertTriangle size={28} className="mx-auto text-amber-500 mb-3" />
          <p className="font-bold text-gray-800 dark:text-gray-100">{error?.message || 'No se pudo cargar el examen.'}</p>
          {error?.status !== 404 && (
            <button
              type="button"
              onClick={load}
              className="mt-4 inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border-2 border-gray-200 dark:border-gray-700 text-sm font-bold text-gray-600 dark:text-gray-300 hover:border-purple-300"
            >
              <RefreshCw size={14} /> Reintentar
            </button>
          )}
        </div>
      </div>
    )
  }

  const legacy = attempt.status === 'legacy'
  const confirmed = attempt.status === 'confirmed'
  const editable = productive.length > 0 && !legacy
  const readOnly = !editable || attempt.frozen
  const events = data.supervision?.events || []
  const videoUrl = data.supervision?.videoUrl

  // Aviso de nivel aprobado: el de esta confirmación o el que ya constaba sin entregar.
  const lpBase = result?.levelPassed
    ? { level: result.levelPassed.level, status: result.levelPassed.b2c?.status, detail: result.levelPassed.b2c?.detail }
    : data.levelPassed && data.levelPassed.b2cStatus !== 'ok'
      ? { level: attempt.level, status: data.levelPassed.b2cStatus, detail: data.levelPassed.b2cDetail }
      : null
  const lp = lpBase && resend.b2c ? { ...lpBase, status: resend.b2c.status, detail: resend.b2c.detail } : lpBase

  return (
    <div className="space-y-4">
      {back}

      {/* Cabecera */}
      <header className={card}>
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div className="min-w-0">
            <h1 className="text-xl sm:text-2xl font-extrabold text-gray-800 dark:text-gray-100 break-words">{data.student?.name || '—'}</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 break-all">{data.student?.email}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {attempt.status === 'pending' && <Pill tone="amber">Pendiente de revisión</Pill>}
            {confirmed && attempt.auto && <Pill tone="gray">Confirmado · automático</Pill>}
            {confirmed && !attempt.auto && (
              <Pill tone="green">
                <CheckCircle2 size={12} /> Confirmado por {attempt.reviewedByName || 'Profesor'} el {fmtDate(attempt.reviewedAt)}
              </Pill>
            )}
            {legacy && <Pill tone="gray">Anterior al sistema de revisión</Pill>}
            {attempt.frozen && <Pill tone="purple"><Lock size={12} /> Congelado</Pill>}
          </div>
        </div>

        <p className="mt-3 text-sm font-bold text-purple-600 dark:text-purple-300">
          {attempt.level} · {MODUL[attempt.module] || attempt.module}
          <span className="ml-2 font-semibold text-gray-500 dark:text-gray-400">{attempt.examTitle}</span>
        </p>

        <dl className="mt-3 grid grid-cols-2 lg:grid-cols-4 gap-3 text-sm">
          <div>
            <dt className="text-xs font-bold text-gray-500 dark:text-gray-400">Entregado</dt>
            <dd className="text-gray-800 dark:text-gray-100 inline-flex items-center gap-1"><Clock size={12} /> {fmtDate(attempt.finishedAt)}</dd>
          </div>
          <div>
            <dt className="text-xs font-bold text-gray-500 dark:text-gray-400">Duración</dt>
            <dd className="text-gray-800 dark:text-gray-100">{fmtDuration(attempt.durationSeconds)}</dd>
          </div>
          <div>
            <dt className="text-xs font-bold text-gray-500 dark:text-gray-400">Nota IA</dt>
            <dd className="text-gray-800 dark:text-gray-100 font-bold">{attempt.aiScore}/{attempt.maxScore} ({attempt.aiPercentage}%)</dd>
          </div>
          <div>
            <dt className="text-xs font-bold text-gray-500 dark:text-gray-400">Nota actual</dt>
            <dd className={'font-bold ' + (attempt.passed ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-300')}>
              {attempt.score}/{attempt.maxScore} ({attempt.percentage}%) · {attempt.passed ? 'aprobado' : 'no aprobado'}
            </dd>
          </div>
        </dl>

        {!editable && (
          <p className="mt-4 flex items-start gap-2 text-sm font-semibold text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-900/40 rounded-xl px-3 py-2.5">
            <Info size={15} className="shrink-0 mt-0.5" />
            {legacy
              ? 'Este examen es anterior al sistema de revisión: se muestra solo para consulta.'
              : 'Corrección automática: no necesita revisión.'}
          </p>
        )}
      </header>

      {/* Nivel aprobado */}
      {lp && (
        <section
          role="status"
          className={
            'rounded-2xl border-2 p-4 sm:p-5 ' +
            (lp.status === 'ok'
              ? 'border-green-300 dark:border-green-700 bg-green-50 dark:bg-green-900/20'
              : 'border-amber-300 dark:border-amber-700 bg-amber-50 dark:bg-amber-900/20')
          }
        >
          <p className="text-lg font-extrabold text-gray-800 dark:text-gray-100">🎓 Nivel {lp.level} aprobado</p>
          {lp.status === 'ok' ? (
            <p className="mt-1 text-sm text-gray-700 dark:text-gray-200">Aviso entregado: certificado en marcha.</p>
          ) : (
            <>
              <p className="mt-1 text-sm text-gray-700 dark:text-gray-200">
                El aviso para emitir el certificado no se entregó
                {lp.status ? ` (${lp.status}${lp.detail ? `: ${lp.detail}` : ''})` : ''}.
                Puedes reenviarlo ahora; si sigue fallando, avisa a administración para emitir el certificado desde el CRM.
              </p>
              <button
                type="button"
                onClick={resendNotice}
                disabled={resend.busy}
                className="mt-3 inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-600 text-white text-sm font-bold hover:bg-amber-700 disabled:opacity-60"
              >
                <RefreshCw size={14} className={resend.busy ? 'animate-spin' : ''} /> Reenviar aviso
              </button>
            </>
          )}
          {resend.error && <p role="alert" className="mt-2 text-sm font-semibold text-red-600 dark:text-red-300">{resend.error}</p>}
        </section>
      )}

      {/* Supervisión */}
      {(videoUrl || events.length > 0) && (
        <section className={card} aria-labelledby="sup-title">
          <h2 id="sup-title" className="text-base font-extrabold text-gray-800 dark:text-gray-100 flex items-center gap-2 mb-3">
            <Video size={18} className="text-purple-600" /> Supervisión
          </h2>
          {videoUrl && (
            <details className={detailsCls} onToggle={e => setShowVideo(e.currentTarget.open)}>
              <summary className={summaryCls}>Vídeo de la cámara</summary>
              <div className="px-3 pb-3">
                {showVideo && (
                  <video
                    controls
                    preload="none"
                    src={`${API_URL}${videoUrl}`}
                    className="w-full max-w-2xl rounded-xl border border-gray-200 dark:border-gray-700 bg-black"
                  />
                )}
              </div>
            </details>
          )}
          {events.length > 0 && (
            <ul className="mt-3 space-y-1.5">
              {events.map((e, i) => {
                const flagged = EVENT_FLAGGED.includes(e.type)
                return (
                  <li
                    key={i}
                    className={
                      'flex flex-wrap items-center gap-x-2 gap-y-0.5 text-sm rounded-lg px-3 py-1.5 ' +
                      (flagged
                        ? 'bg-amber-50 dark:bg-amber-900/30 text-amber-800 dark:text-amber-200 font-bold'
                        : 'text-gray-600 dark:text-gray-300')
                    }
                  >
                    {flagged && <AlertTriangle size={13} className="shrink-0" />}
                    <span>{EVENT_LABEL[e.type] || e.type}</span>
                    <span className="text-xs font-semibold opacity-75">{fmtDate(e.at)}</span>
                  </li>
                )
              })}
            </ul>
          )}
        </section>
      )}

      {/* Partes */}
      {parts.map(part => (
        <section key={part.partId} className={card}>
          <h2 className="text-base font-extrabold text-gray-800 dark:text-gray-100 break-words">{part.title}</h2>
          {part.instructions && (
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400 whitespace-pre-wrap break-words">{part.instructions}</p>
          )}

          <div className="mt-3 space-y-3">
            {Array.isArray(part.texts) && part.texts.length > 0 && (
              <details className={detailsCls}>
                <summary className={summaryCls}>Textos de lectura ({part.texts.length})</summary>
                <div className="px-3 pb-3 space-y-3">
                  {part.texts.map((t, i) => (
                    <div key={i}>
                      {t.label && <p className="text-xs font-bold text-gray-500 dark:text-gray-400">{t.label}</p>}
                      <p className="text-sm text-gray-800 dark:text-gray-100 whitespace-pre-wrap break-words">{t.text}</p>
                    </div>
                  ))}
                </div>
              </details>
            )}

            {part.audioTranscript && (
              <details className={detailsCls}>
                <summary className={summaryCls}>Transcripción del audio</summary>
                <p className="px-3 pb-3 text-sm text-gray-800 dark:text-gray-100 whitespace-pre-wrap break-words">{part.audioTranscript}</p>
              </details>
            )}

            {part.sourceText && (
              <details className={detailsCls}>
                <summary className={summaryCls}>Texto de partida</summary>
                <p className="px-3 pb-3 text-sm text-gray-800 dark:text-gray-100 whitespace-pre-wrap break-words">{part.sourceText}</p>
              </details>
            )}

            {Array.isArray(part.questions) && part.questions.length > 0 && (
              <AnswerRows rows={part.questions} firstLabel="Pregunta" />
            )}

            {part.kind === 'formular' && (
              <>
                {Array.isArray(part.fields) && part.fields.length > 0
                  ? <AnswerRows rows={part.fields.map(f => ({ frage: f.label, antwort: f.antwort, loesung: f.loesung, ok: f.ok }))} firstLabel="Campo" />
                  : <p className="text-sm italic text-gray-500 dark:text-gray-400">Sin respuestas en el formulario.</p>}
                <p className="text-sm font-bold text-gray-800 dark:text-gray-100">{part.earned}/{part.possible} puntos</p>
              </>
            )}

            {isProductive(part) && (
              <ProductivePart
                part={part}
                criteria={criteria}
                values={scores[part.partId]}
                readOnly={readOnly}
                onChange={onChange}
                onReset={onReset}
              />
            )}
          </div>
        </section>
      ))}

      {/* Nota final y confirmación */}
      {editable && live && (
        <section className="bg-white dark:bg-gray-800 rounded-2xl border-2 border-purple-300 dark:border-purple-700 p-4 sm:p-5" aria-labelledby="final-title">
          <h2 id="final-title" className="text-base font-extrabold text-gray-800 dark:text-gray-100">Nota final del examen</h2>

          <div className="mt-2 flex flex-wrap items-center gap-3" aria-live="polite">
            {live.valid ? (
              <>
                <p className="text-2xl font-extrabold text-gray-800 dark:text-gray-100 tabular-nums">
                  {live.score}/{live.max} <span className="text-lg">({live.pct}%)</span>
                </p>
                <Pill tone={live.passed ? 'green' : 'red'}>{live.passed ? 'Aprobado' : 'No aprobado'}</Pill>
                <span className="text-xs text-gray-500 dark:text-gray-400">Se aprueba con el {attempt.passPct}%</span>
              </>
            ) : (
              <p className="text-sm font-bold text-red-600 dark:text-red-300">Revisa las notas: cada criterio debe estar entre 0 y 25.</p>
            )}
          </div>

          <label htmlFor="review-note" className="block mt-4 text-sm font-bold text-gray-700 dark:text-gray-200">
            Comentario para el alumno (opcional)
          </label>
          <textarea
            id="review-note"
            rows={4}
            maxLength={4000}
            value={note}
            disabled={attempt.frozen}
            onChange={e => setNote(e.target.value)}
            className="mt-1 w-full px-3 py-2.5 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-sm text-gray-800 dark:text-gray-100 focus:outline-none focus:border-purple-500 disabled:opacity-60"
          />

          {attempt.frozen && (
            <p className="mt-3 flex items-start gap-2 text-sm font-semibold text-purple-700 dark:text-purple-300 bg-purple-50 dark:bg-purple-900/30 rounded-xl px-3 py-2.5">
              <Lock size={15} className="shrink-0 mt-0.5" />
              Este examen ya se usó para emitir un certificado y su nota no puede cambiarse.
            </p>
          )}

          {saveError && (
            <p role="alert" className="mt-3 flex items-start gap-2 text-sm font-semibold text-red-700 dark:text-red-300 bg-red-50 dark:bg-red-900/30 rounded-xl px-3 py-2.5">
              <AlertTriangle size={15} className="shrink-0 mt-0.5" /> {saveError}
            </p>
          )}

          {result && (
            <p role="status" className="mt-3 flex items-start gap-2 text-sm font-semibold text-green-700 dark:text-green-300 bg-green-50 dark:bg-green-900/30 rounded-xl px-3 py-2.5">
              <CheckCircle2 size={15} className="shrink-0 mt-0.5" />
              <span>
                Nota guardada: {result.score}/{result.maxScore} ({result.percentage}%) · {result.passed ? 'aprobado' : 'no aprobado'}.{' '}
                {result.studentNotified
                  ? 'Se ha avisado al alumno por correo.'
                  : 'El alumno ya había recibido su resultado: no se le ha vuelto a avisar.'}
              </span>
            </p>
          )}

          <button
            type="button"
            onClick={confirm}
            disabled={attempt.frozen || saving || !live.valid}
            className="mt-4 w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-purple-600 text-white text-base font-bold hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {saving ? <RefreshCw size={16} className="animate-spin" /> : <Send size={16} />}
            {confirmed ? 'Guardar cambios' : 'Confirmar y enviar resultado al alumno'}
          </button>
        </section>
      )}

      <div className="pt-2">{back}</div>
    </div>
  )
}
