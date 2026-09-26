import React, { useMemo, useRef, useState } from 'react'
import { renderInline } from './inline.jsx'
import { useAuth } from '../../context/AuthContext'

const API_URL = import.meta.env.VITE_API_URL || ''

// ─── utilidades ──────────────────────────────────────────────────────
const norm = s => String(s || '').trim().toLowerCase().replace(/\s+/g, ' ')

// Barajado estable por semilla — cambia con cada "Nochmal üben" pero no
// entre renders (evita que las opciones salten al responder).
function shuffled(arr, seed) {
  const a = [...arr]
  let s = seed + a.length * 7
  for (let i = a.length - 1; i > 0; i--) {
    s = (s * 9301 + 49297) % 233280
    const j = Math.floor((s / 233280) * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

// satzbau: la clave más las alternativas igual de válidas (orden libre del
// Mittelfeld, etc.). La puntuación no cuenta.
const sinPunkt = s => norm(String(s).replace(/[.?!,]/g, ''))
const satzOk = (item, built) => [item.loesung, ...(item.alt || [])].some(l => sinPunkt(l) === sinPunkt(built))

// ─── ítems ───────────────────────────────────────────────────────────

function ItemMC({ item, value, onChange, checked, seed }) {
  const opts = useMemo(() => shuffled(item.optionen.map((o, i) => ({ o, i })), seed), [item, seed])
  const frage = item.frage || item.aussage
  return (
    <div className="c1-heft-item">
      <p className="c1-heft-frage">{renderInline(frage)}</p>
      <div className="c1-heft-opts">
        {opts.map(({ o, i }) => {
          const sel = value === i
          const cls = 'c1-heft-opt' +
            (sel ? ' is-sel' : '') +
            (checked && sel ? (i === item.loesung ? ' is-ok' : ' is-bad') : '') +
            (checked && !sel && i === item.loesung ? ' is-ok' : '')
          return (
            <button key={i} type="button" className={cls} onClick={() => onChange(i)} disabled={checked}>
              {o}
            </button>
          )
        })}
      </div>
    </div>
  )
}

function ItemRF({ item, value, onChange, checked }) {
  return (
    <div className="c1-heft-item">
      <p className="c1-heft-frage">{renderInline(item.aussage)}</p>
      <div className="c1-heft-opts">
        {[true, false].map(v => {
          const sel = value === v
          const cls = 'c1-heft-opt' +
            (sel ? ' is-sel' : '') +
            (checked && sel ? (v === item.loesung ? ' is-ok' : ' is-bad') : '') +
            (checked && !sel && v === item.loesung ? ' is-ok' : '')
          return (
            <button key={String(v)} type="button" className={cls} onClick={() => onChange(v)} disabled={checked}>
              {v ? 'Richtig' : 'Falsch'}
            </button>
          )
        })}
      </div>
    </div>
  )
}

function ItemLuecke({ item, value, onChange, checked, seed }) {
  const bank = useMemo(() => shuffled(item.bank, seed), [item, seed])
  const val = value || {}
  const parts = String(item.text).split(/(\{\d+\})/g)
  return (
    <div className="c1-heft-item">
      <p className="c1-heft-frage c1-heft-lueckentext">
        {parts.map((p, i) => {
          const m = /^\{(\d+)\}$/.exec(p)
          if (!m) return <React.Fragment key={i}>{renderInline(p)}</React.Fragment>
          const n = parseInt(m[1])
          const state = checked ? (norm(val[n]) === norm(item.loesungen[n]) ? ' is-ok' : ' is-bad') : ''
          return (
            <select
              key={i}
              className={'c1-pa-select' + state}
              value={val[n] || ''}
              onChange={e => onChange({ ...val, [n]: e.target.value })}
              disabled={checked}
              aria-label={`Lücke ${n}`}
            >
              <option value="">— {n} —</option>
              {bank.map((w, j) => <option key={j} value={w}>{w}</option>)}
            </select>
          )
        })}
      </p>
      {checked && Object.keys(item.loesungen).some(n => norm(val[n]) !== norm(item.loesungen[n])) && (
        <p className="c1-heft-sol">✓ {Object.entries(item.loesungen).map(([n, w]) => `(${n}) ${w}`).join(' · ')}</p>
      )}
    </div>
  )
}

function ItemSatzbau({ item, value, onChange, checked, seed, gl }) {
  const start = useMemo(() => shuffled(item.woerter, seed), [item, seed])
  const chosen = value || []
  const rest = useMemo(() => {
    const pool = [...start]
    for (const w of chosen) {
      const i = pool.indexOf(w)
      if (i !== -1) pool.splice(i, 1)
    }
    return pool
  }, [start, chosen])
  const built = chosen.join(' ')
  const ok = checked && satzOk(item, built)
  const istFrage = String(item.loesung).trim().endsWith('?')
  return (
    <div className="c1-heft-item">
      <p className="c1-heft-frage">
        {istFrage
          ? <>Bau die Frage.{gl && <> <span className="c1-gl">~ Ordena la pregunta.</span></>}</>
          : <>Bau den Satz.{gl && <> <span className="c1-gl">~ Ordena la frase.</span></>}</>}
      </p>
      <div className={'c1-heft-satz' + (checked ? (ok ? ' is-ok' : ' is-bad') : '')}>
        {chosen.length === 0 ? <span className="c1-heft-satz-leer">…</span> : chosen.map((w, i) => (
          <button key={i} type="button" className="c1-heft-chip is-sel" disabled={checked}
            onClick={() => onChange(chosen.filter((_, j) => j !== i))}>{w}</button>
        ))}
      </div>
      <div className="c1-heft-opts">
        {rest.map((w, i) => (
          <button key={i} type="button" className="c1-heft-chip" disabled={checked}
            onClick={() => onChange([...chosen, w])}>{w}</button>
        ))}
      </div>
      {checked && !ok && <p className="c1-heft-sol">✓ {item.loesung}</p>}
    </div>
  )
}

function ItemZuordnen({ item, value, onChange, checked, seed, gl }) {
  const rechts = useMemo(() => shuffled([...new Set(item.rechts)], seed), [item, seed])
  const val = value || {}
  return (
    <div className="c1-heft-item">
      <p className="c1-heft-frage">Was passt zusammen?{gl && <> <span className="c1-gl">~ Empareja.</span></>}</p>
      <div className="c1-heft-zuordnen">
        {item.links.map((l, i) => {
          const state = checked ? (norm(val[l]) === norm(item.loesung[l]) ? ' is-ok' : ' is-bad') : ''
          return (
            <div key={i} className="c1-heft-paar">
              <span>{l}</span>
              <select className={'c1-pa-select' + state} value={val[l] || ''} disabled={checked}
                onChange={e => onChange({ ...val, [l]: e.target.value })} aria-label={l}>
                <option value="">—</option>
                {rechts.map((r, j) => <option key={j} value={r}>{r}</option>)}
              </select>
              {checked && norm(val[l]) !== norm(item.loesung[l]) && <span className="c1-heft-sol">✓ {item.loesung[l]}</span>}
            </div>
          )
        })}
      </div>
    </div>
  )
}

function ItemKorrektur({ item, value, onChange, checked, gl }) {
  return (
    <div className="c1-heft-item">
      <p className="c1-heft-frage">Was ist richtig?{gl && <> <span className="c1-gl">~ ¿Cuál es correcta?</span></>}</p>
      <div className="c1-heft-opts c1-heft-opts-col">
        {item.optionen.map((o, i) => {
          const sel = value === i
          const cls = 'c1-heft-opt' +
            (sel ? ' is-sel' : '') +
            (checked && sel ? (i === item.loesung ? ' is-ok' : ' is-bad') : '') +
            (checked && !sel && i === item.loesung ? ' is-ok' : '')
          return (
            <button key={i} type="button" className={cls} onClick={() => onChange(i)} disabled={checked}>
              {o}
            </button>
          )
        })}
      </div>
      {checked && item.warum && <p className="c1-heft-sol">{renderInline(item.warum)}</p>}
    </div>
  )
}

function itemCorrect(item, value) {
  if (value === undefined || value === null) return false
  switch (item.typ) {
    case 'mc': case 'korrektur': return value === item.loesung
    case 'rf': return value === item.loesung
    case 'luecke': return Object.keys(item.loesungen).every(n => norm(value?.[n]) === norm(item.loesungen[n]))
    case 'satzbau': return satzOk(item, (value || []).join(' '))
    case 'zuordnen': return item.links.every(l => norm(value?.[l]) === norm(item.loesung[l]))
    default: return false
  }
}

function renderItem(item, props) {
  switch (item.typ) {
    case 'mc': return <ItemMC {...props} item={item} />
    case 'rf': return <ItemRF {...props} item={item} />
    case 'luecke': return <ItemLuecke {...props} item={item} />
    case 'satzbau': return <ItemSatzbau {...props} item={item} />
    case 'zuordnen': return <ItemZuordnen {...props} item={item} />
    case 'korrektur': return <ItemKorrektur {...props} item={item} />
    default: return null
  }
}

// ─── Teile ───────────────────────────────────────────────────────────

function TeilItems({ teil, seed, gl }) {
  const [values, setValues] = useState({})
  const [checked, setChecked] = useState(false)
  const items = teil.items || []
  const answered = items.every((it, i) => {
    const v = values[i]
    if (it.typ === 'luecke') return v && Object.keys(it.loesungen).every(n => v[n])
    if (it.typ === 'zuordnen') return v && it.links.every(l => v[l])
    if (it.typ === 'satzbau') return Array.isArray(v) && v.length === it.woerter.length
    return v !== undefined
  })
  const score = items.filter((it, i) => itemCorrect(it, values[i])).length
  return (
    <>
      {teil.text && (
        <div className="c1-modell">
          {teil.textTitel && <div className="c1-mhead"><span>{teil.textTitel}</span></div>}
          <div className="c1-mbody c1-heft-lesetext">{renderInline(teil.text)}</div>
        </div>
      )}
      {items.map((it, i) => (
        <React.Fragment key={i}>
          {renderItem(it, {
            seed: seed + i,
            value: values[i],
            checked,
            gl,
            onChange: v => setValues(prev => ({ ...prev, [i]: v })),
          })}
        </React.Fragment>
      ))}
      <div className="c1-pa-actions">
        <button type="button" className="c1-pa-btn c1-pa-btn--primary" disabled={!answered || checked}
          onClick={() => setChecked(true)}>
          Prüfen
        </button>
        <button type="button" className="c1-pa-btn" onClick={() => { setValues({}); setChecked(false) }}>
          Zurücksetzen
        </button>
        {checked && <span className="c1-pa-score" aria-live="polite">{score} / {items.length} richtig</span>}
      </div>
    </>
  )
}

function TeilFormular({ teil }) {
  const [vals, setVals] = useState({})
  const [checked, setChecked] = useState(false)
  // Teléfonos, fechas y códigos: "030 12 34" = "030-1234" = "0301234".
  const clean = s => norm(s).replace(/[\s\-/.,:]/g, '')
  const ok = f => {
    const v = clean(vals[f.id])
    return (f.erwartet || []).some(e => {
      const n = clean(e)
      return v === n || (v.length >= 4 && (n.includes(v) || v.includes(n)))
    })
  }
  const score = teil.felder.filter(ok).length
  return (
    <>
      <div className="c1-modell">
        <div className="c1-mhead"><span>Information</span></div>
        <div className="c1-mbody c1-heft-lesetext">{renderInline(teil.quelle)}</div>
      </div>
      <div className="c1-heft-formular">
        {teil.felder.map(f => (
          <label key={f.id} className="c1-heft-feld">
            <span>{f.label}</span>
            <input
              type="text"
              className={'c1-heft-input' + (checked ? (ok(f) ? ' is-ok' : ' is-bad') : '')}
              value={vals[f.id] || ''}
              disabled={checked}
              onChange={e => setVals(prev => ({ ...prev, [f.id]: e.target.value }))}
            />
            {checked && !ok(f) && <span className="c1-heft-sol">✓ {f.erwartet[0]}</span>}
          </label>
        ))}
      </div>
      <div className="c1-pa-actions">
        <button type="button" className="c1-pa-btn c1-pa-btn--primary" disabled={checked}
          onClick={() => setChecked(true)}>Prüfen</button>
        <button type="button" className="c1-pa-btn" onClick={() => { setVals({}); setChecked(false) }}>Zurücksetzen</button>
        {checked && <span className="c1-pa-score">{score} / {teil.felder.length} richtig</span>}
      </div>
    </>
  )
}

function TeilSchreibenText({ teil, level }) {
  const { getToken } = useAuth()
  const [text, setText] = useState('')
  const [busy, setBusy] = useState(false)
  const [fb, setFb] = useState(null)
  const [error, setError] = useState(null)
  const words = text.trim() ? text.trim().split(/\s+/).length : 0

  const korrigieren = async () => {
    setBusy(true); setError(null)
    try {
      const res = await fetch(`${API_URL}/api/pruefungen/grade-schreiben`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${getToken()}` },
        body: JSON.stringify({
          level,
          taskType: 'Übungsheft',
          taskPrompt: teil.aufgabe + (teil.punkte ? '\n\nPunkte:\n' + teil.punkte.map(p => `- ${p}`).join('\n') : ''),
          submission: text.trim(),
          minWords: teil.minWoerter,
        }),
      })
      if (!res.ok) throw new Error('Korrektur nicht möglich. Versuch es später.')
      setFb(await res.json())
    } catch (e) {
      setError(e.message)
    } finally {
      setBusy(false)
    }
  }

  return (
    <>
      <div className="c1-impuls">
        <p className="c1-q">{renderInline(teil.aufgabe)}</p>
        {teil.punkte?.length > 0 && (
          <ol>{teil.punkte.map((p, i) => <li key={i}>{renderInline(p)}</li>)}</ol>
        )}
      </div>
      <textarea
        className="c1-heft-textarea"
        rows={5}
        placeholder="Schreib hier…"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <div className="c1-pa-actions">
        <button type="button" className="c1-pa-btn c1-pa-btn--primary"
          disabled={busy || words < (teil.minWoerter || 10)}
          onClick={korrigieren}>
          {busy ? 'Wird korrigiert…' : 'Korrigieren lassen'}
        </button>
        <span className="c1-pa-score">{words} Wörter{teil.minWoerter ? ` · min. ${teil.minWoerter}` : ''}</span>
      </div>
      {error && <p className="c1-heft-sol">{error}</p>}
      {fb && (
        <div className="c1-card c1-heft-feedback">
          <p className="c1-heft-fb-total">✓ Korrektur: <strong>{fb.total} / 100</strong></p>
          {fb.overall && <p>{fb.overall}</p>}
          {Array.isArray(fb.errors) && fb.errors.length > 0 && (
            <ul className="c1-heft-fb-fehler">
              {fb.errors.map((e, i) => (
                <li key={i}><s>{e.original}</s> → <strong>{e.correction}</strong>{e.explanation ? ` — ${e.explanation}` : ''}</li>
              ))}
            </ul>
          )}
          {teil.beispielLoesung && (
            <details className="c1-ueb" style={{ marginTop: 12 }}>
              <summary>Beispiel</summary>
              <div className="c1-sol c1-prose"><p>{renderInline(teil.beispielLoesung)}</p></div>
            </details>
          )}
        </div>
      )}
    </>
  )
}

// ─── cuerpo del cuaderno ─────────────────────────────────────────────

export default function HeftBody({ heft, level = 'A1' }) {
  const [runde, setRunde] = useState(1)
  const seedBase = useRef(Math.floor(Math.random() * 100000))
  const seed = seedBase.current + runde * 131

  const ICONS = { grammatik: '🧩', lesen: '📖', schreiben: '✍️' }
  // Glosas españolas de la interfaz solo en los niveles básicos (A1/A2):
  // a partir de B1 el alumno lee las consignas en alemán sin apoyo.
  const gl = /^A/.test(level)
  return (
    <div key={runde}>
      {heft.teile.map((teil, t) => (
        <section key={t}>
          <div className="c1-eyebrow"><span className="c1-ico">{ICONS[teil.typ] || '📝'}</span>{teil.titel}</div>
          {teil.anweisung && <p className="c1-heft-anweisung">{renderInline(teil.anweisung)}</p>}
          {teil.typ === 'schreiben'
            ? (teil.variante === 'formular' ? <TeilFormular teil={teil} /> : <TeilSchreibenText teil={teil} level={level} />)
            : <TeilItems teil={teil} seed={seed + t * 1000} gl={gl} />}
          {t < heft.teile.length - 1 && <hr className="c1-rule" />}
        </section>
      ))}
      <hr className="c1-rule" />
      <div className="c1-pa-actions">
        <button type="button" className="c1-pa-btn" onClick={() => setRunde(r => r + 1)}>
          🔄 Nochmal üben{gl && <> <span className="c1-gl">~ practicar otra vez</span></>}
        </button>
      </div>
    </div>
  )
}
