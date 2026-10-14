// Revisión docente de los exámenes reales.
//
// Flujo: el alumno entrega → la IA corrige → el intento queda
//   · 'confirmed' al instante si es Lesen/Hören (corrección exacta), o
//   · 'pending' si lleva Schreiben/Sprechen: el alumno ve «en revisión» y un
//     profe revisa texto, audio y rúbrica, ajusta la nota y confirma.
// Solo las notas confirmadas cuentan para el certificado. Cuando el nivel
// queda aprobado con notas confirmadas se avisa a b2c (que emite el
// certificado) y a administración.
//
// Los intentos anteriores a este sistema tienen reviewStatus NULL y cuentan
// como confirmados (ver REVIEW_COUNTS_SQL en realExam.js).

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import cron from 'node-cron'
import jwt from 'jsonwebtoken'
import * as b2c from './b2cClient.js'
import {
  getExam, partScores, studentDetail, productiveTaskPrompt, levelPassStatus,
  PRUEFUNG_PASS_PCT, REVIEW_COUNTS_SQL,
} from './realExam.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const MODULES = ['lesen', 'hoeren', 'schreiben', 'sprechen']
const MODULE_LABEL = { lesen: 'Lesen', hoeren: 'Hören', schreiben: 'Schreiben', sprechen: 'Sprechen' }
const CRITERIA = ['erfuellung', 'kohaerenz', 'wortschatz', 'strukturen']
const CRITERIA_LABEL = { erfuellung: 'Erfüllung', kohaerenz: 'Kohärenz', wortschatz: 'Wortschatz', strukturen: 'Strukturen' }

// Audios de Sprechen: carpeta propia (la de vídeo se purga a los 30 días).
// IMPORTANTE (Coolify): volumen persistente en EXAM_AUDIO_DIR.
const EXAM_AUDIO_DIR = process.env.EXAM_AUDIO_DIR || path.join(__dirname, 'exam-audio')
const EXAM_AUDIO_TTL_DAYS = Number(process.env.EXAM_AUDIO_TTL_DAYS || 365)
const AUDIO_MAX_BYTES = 25 * 1024 * 1024
const AUDIO_TYPES = { 'audio/webm': 'webm', 'audio/ogg': 'ogg', 'audio/mp4': 'm4a', 'audio/mpeg': 'mp3', 'audio/wav': 'wav' }
const AUDIO_MIME = Object.fromEntries(Object.entries(AUDIO_TYPES).map(([m, e]) => [e, m]))
const SAFE_ID = /^[\w-]{1,40}$/

const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]))
const pct = (score, max) => (Number(max) > 0 ? Math.round((Number(score) / Number(max)) * 100) : 0)
const parseJson = v => { if (v == null) return null; if (typeof v !== 'string') return v; try { return JSON.parse(v) } catch { return null } }

export function setupExamReview(app, { pool, authMiddleware, subscriptionMiddleware, blockIfReadOnly, staffOnly, express, JWT_SECRET, sendEmail, recordingPath, eventsPath, isExamStaff }) {
  try { fs.mkdirSync(EXAM_AUDIO_DIR, { recursive: true }) } catch (e) { console.error('[review] mkdir:', e.message) }

  // ─── Esquema ─────────────────────────────────────────────────────────
  ;(async () => {
    const add = async sql => { try { await pool.query(sql) } catch { /* ya existe */ } }
    await add(`ALTER TABLE schule_pruefungen_attempts ADD COLUMN reviewStatus VARCHAR(16) DEFAULT NULL`)
    await add(`ALTER TABLE schule_pruefungen_attempts ADD COLUMN aiScore DECIMAL(5,2) DEFAULT NULL`)
    await add(`ALTER TABLE schule_pruefungen_attempts ADD COLUMN reviewedBy VARCHAR(191) DEFAULT NULL`)
    await add(`ALTER TABLE schule_pruefungen_attempts ADD COLUMN reviewedByName VARCHAR(191) DEFAULT NULL`)
    await add(`ALTER TABLE schule_pruefungen_attempts ADD COLUMN reviewedAt DATETIME DEFAULT NULL`)
    await add(`ALTER TABLE schule_pruefungen_attempts ADD COLUMN reviewNote TEXT DEFAULT NULL`)
    await add(`ALTER TABLE schule_pruefungen_attempts ADD INDEX idx_review (reviewStatus, finishedAt)`)
    try {
      // Un aviso por (alumno, nivel): cuándo aprobó el nivel y qué dijo b2c.
      await pool.query(`
        CREATE TABLE IF NOT EXISTS schule_level_passed (
          id INT AUTO_INCREMENT PRIMARY KEY,
          userId VARCHAR(191) NOT NULL,
          level VARCHAR(8) NOT NULL,
          passedAt DATETIME DEFAULT CURRENT_TIMESTAMP,
          snapshot JSON DEFAULT NULL,
          b2cStatus VARCHAR(24) NOT NULL DEFAULT 'pending',
          b2cDetail VARCHAR(255) DEFAULT NULL,
          b2cNotifiedAt DATETIME DEFAULT NULL,
          UNIQUE KEY uniq_user_level (userId, level)
        )
      `)
    } catch (e) { console.error('[review] schema:', e.message) }
  })()

  // ─── Utilidades ──────────────────────────────────────────────────────
  const audioFile = (attemptId, partId, ext) => path.join(EXAM_AUDIO_DIR, `attempt-${attemptId}.${partId}.${ext}`)
  async function findAudio(attemptId, partId) {
    for (const ext of Object.values(AUDIO_TYPES)) {
      const f = audioFile(attemptId, partId, ext)
      const st = await fs.promises.stat(f).catch(() => null)
      if (st) return { file: f, ext, size: st.size }
    }
    return null
  }
  const frontendBase = () => String(process.env.FRONTEND_URL || 'https://schule.aprender-aleman.de').split(',')[0].trim().replace(/\/$/, '')

  async function userById(userId) {
    const [rows] = await pool.query('SELECT id, fullName, email, role, level FROM users WHERE id = ? LIMIT 1', [userId])
    return rows[0] || null
  }

  // Quién recibe los avisos de administración: EXAM_RESULTS_EMAIL (lista
  // separada por comas) o, si no está, todos los superadmin.
  async function adminRecipients() {
    const env = String(process.env.EXAM_RESULTS_EMAIL || '').split(',').map(s => s.trim()).filter(Boolean)
    if (env.length) return env
    const [rows] = await pool.query(`SELECT email FROM users WHERE role = 'superadmin' AND email IS NOT NULL`)
    return [...new Set(rows.map(r => String(r.email || '').trim()).filter(Boolean))]
  }
  async function mailAdmins(subject, html, text) {
    for (const to of await adminRecipients()) {
      try { await sendEmail({ to, subject, html, text }) } catch (e) { console.error('[review] mail admin:', e.message) }
    }
  }

  // ─── Qué guarda el intento al entregarse ─────────────────────────────
  /** Estado inicial de revisión de un intento recién corregido. */
  function initialReviewStatus({ mode, exam, role }) {
    if (mode !== 'real' || isExamStaff(role)) return null
    const productive = (exam.parts || []).some(p => p.kind === 'writing-task' || p.kind === 'speaking-task')
    return productive ? 'pending' : 'confirmed'
  }

  // ─── Examen legible (correo y vista de revisión) ─────────────────────
  const optionText = (q, id) => {
    if (id == null || id === '') return '—'
    const o = (q.options || []).find(x => x.id === id)
    return o ? `${id}) ${o.text}` : String(id)
  }
  const tf = v => (v === true ? 'Richtig' : v === false ? 'Falsch' : '—')

  /** Filas {frage, antwort, loesung, ok} de una pregunta cerrada. */
  function questionRows(q, d) {
    if (q.type === 'matching') {
      return (q.items || []).map(it => {
        const r = d?.items?.[it.id] || {}
        return { frage: it.text, antwort: optionText(q, r.user), loesung: optionText(q, r.correct ?? q.correct?.[it.id]), ok: !!r.ok }
      })
    }
    if (q.type === 'true-false') {
      return [{ frage: q.statement || q.prompt || '', antwort: tf(d?.user), loesung: tf(q.correct), ok: !!d?.ok }]
    }
    return [{ frage: q.prompt || q.statement || '', antwort: optionText(q, d?.user), loesung: optionText(q, q.correct), ok: !!d?.ok }]
  }

  /**
   * El examen con las respuestas del alumno, parte por parte. Es lo que ve
   * el profe y lo que va (en texto) al correo de administración.
   */
  function reviewParts(exam, responses, detail) {
    const r = responses || {}
    const byQ = Object.fromEntries((detail || []).filter(d => d.questionId).map(d => [d.questionId, d]))
    const byPart = id => (detail || []).find(d => d.partId === id && !d.questionId)
    return (exam.parts || []).map(part => {
      const out = { partId: part.id, title: part.title, kind: part.kind || 'questions', instructions: part.instructions || '' }
      if (part.context?.type === 'audio') out.audioTranscript = part.context.transcript || ''
      else if (part.context?.content) out.texts = part.context.content.map(c => ({ label: c.label || '', text: c.text || '' }))
      if (Array.isArray(part.questions)) {
        out.questions = part.questions.flatMap(q => {
          const rows = questionRows(q, byQ[q.id])
          if (q.audio?.transcript && rows[0]) rows[0].audioTranscript = q.audio.transcript
          return rows.map(row => ({ questionId: q.id, ...row }))
        })
      }
      if (part.kind === 'formular') {
        const d = byPart(part.id)
        out.sourceText = part.sourceText || ''
        out.fields = (d?.fields || []).map(f => ({ label: f.label, antwort: f.user || '—', loesung: [].concat(f.expected || []).join(' / '), ok: !!f.ok, points: f.points }))
        out.earned = d?.earned || 0
        out.possible = d?.possible || 0
      }
      if (part.kind === 'writing-task' || part.kind === 'speaking-task') {
        const d = byPart(part.id) || {}
        out.taskPrompt = productiveTaskPrompt(part)
        out.minWords = part.minWords || null
        out.text = part.kind === 'writing-task' ? String(r[part.id] || '') : String(d.transcript || r[part.id]?.transcript || '')
        out.durationSeconds = d.durationSeconds || r[part.id]?.durationSeconds || 0
        out.possible = d.possible || part.maxScore || 25
        out.earned = d.earned || 0
        out.ai = d.ai || null
        out.teacher = d.teacher || null
        out.skipped = !!d.skipped
        out.error = d.error || null
      }
      return out
    })
  }

  function partsAsText(parts) {
    const L = []
    for (const p of parts) {
      L.push('', `━━ ${p.title} ━━`)
      if (p.instructions) L.push(p.instructions)
      for (const q of p.questions || []) {
        L.push('', `• ${q.frage}`, `  Respuesta: ${q.antwort}  ${q.ok ? '✓' : '✗'}`)
        if (!q.ok) L.push(`  Correcta:  ${q.loesung}`)
      }
      for (const f of p.fields || []) {
        L.push(`• ${f.label}: ${f.antwort}  ${f.ok ? '✓' : `✗ (correcto: ${f.loesung})`}`)
      }
      if (p.kind === 'writing-task' || p.kind === 'speaking-task') {
        L.push('', 'Tarea:', p.taskPrompt, '', p.kind === 'writing-task' ? 'Texto del alumno:' : `Transcripción (${p.durationSeconds || 0} s):`)
        L.push(p.skipped ? '(sin respuesta)' : p.error ? `(${p.error})` : p.text || '(vacío)')
        if (p.ai?.scores) {
          L.push('', `Nota IA: ${p.ai.total}/100 → ${p.earned}/${p.possible} puntos`)
          L.push(CRITERIA.map(c => `${CRITERIA_LABEL[c]} ${p.ai.scores[c] ?? '–'}/25`).join(' · '))
          for (const e of (p.ai.errors || []).slice(0, 8)) L.push(`  – „${e.original}“ → „${e.correction}“${e.explanation ? ` (${e.explanation})` : ''}`)
          if (p.ai.overall) L.push(String(p.ai.overall))
        }
      }
    }
    return L.join('\n')
  }

  // ─── Avisos ──────────────────────────────────────────────────────────
  /** Correo a administración con el examen entero en texto. */
  async function notifyFinished(attemptId) {
    try {
      const [rows] = await pool.query('SELECT * FROM schule_pruefungen_attempts WHERE id = ? LIMIT 1', [attemptId])
      const a = rows[0]
      if (!a || a.mode !== 'real' || !a.reviewStatus) return
      const exam = getExam(a.examId)
      if (!exam) return
      const user = await userById(a.userId)
      const detail = parseJson(a.feedback)?.detail || []
      const parts = reviewParts(exam, parseJson(a.responses), detail)
      const p = pct(a.score, a.maxScore)
      const pending = a.reviewStatus === 'pending'
      const link = `${frontendBase()}/revision-examenes/${a.id}`
      const head = [
        `Alumno: ${user?.fullName || '—'} <${user?.email || '—'}>`,
        `Examen: ${a.level} · ${MODULE_LABEL[a.module] || a.module} (${exam.title})`,
        `Nota de la corrección automática: ${Number(a.score)}/${Number(a.maxScore)} (${p} %) — ${p >= PRUEFUNG_PASS_PCT ? 'aprobado' : 'no aprobado'}`,
        `Duración: ${Math.round((a.durationSeconds || 0) / 60)} min`,
        pending ? 'Estado: PENDIENTE DE REVISIÓN por un profesor. El alumno ve «en revisión».' : 'Estado: confirmado automáticamente (respuesta cerrada).',
        `Revisar: ${link}`,
      ].join('\n')
      const text = `${head}\n${partsAsText(parts)}\n`
      const html = `<div style="font-family:system-ui,Segoe UI,Arial,sans-serif;font-size:14px;line-height:1.5;color:#111">
<p><a href="${esc(link)}">Abrir en la revisión de exámenes</a></p>
<pre style="white-space:pre-wrap;font-family:inherit;margin:0">${esc(text)}</pre></div>`
      await mailAdmins(`${pending ? '[Revisar] ' : ''}Examen ${a.level} ${MODULE_LABEL[a.module] || a.module} — ${user?.fullName || user?.email || a.userId} — ${p} %`, html, text)
    } catch (e) { console.error('[review] notifyFinished:', e.message) }
  }

  /** Correo al alumno: su resultado confirmado ya está disponible. */
  async function notifyStudentConfirmed(a, user) {
    if (!user?.email) return
    const p = pct(a.score, a.maxScore)
    const ok = p >= PRUEFUNG_PASS_PCT
    const link = `${frontendBase()}/pruefungen/ergebnis/${a.id}`
    const mod = MODULE_LABEL[a.module] || a.module
    const text = [
      `Hola ${user.fullName || ''}:`,
      '',
      `Tu examen ${a.level} · ${mod} ya está revisado por tu profesor.`,
      `Resultado: ${Number(a.score)}/${Number(a.maxScore)} puntos (${p} %) — ${ok ? 'aprobado' : 'no aprobado'}.`,
      a.reviewNote ? `\nComentario del profesor:\n${a.reviewNote}` : '',
      '',
      `Puedes ver la corrección completa aquí: ${link}`,
      '',
      'Aprender-Aleman.de',
    ].filter(l => l !== null).join('\n')
    const html = `<div style="font-family:system-ui,Segoe UI,Arial,sans-serif;font-size:15px;line-height:1.55;color:#111;max-width:560px">
<p>Hola ${esc(user.fullName || '')}:</p>
<p>Tu examen <strong>${esc(a.level)} · ${esc(mod)}</strong> ya está revisado por tu profesor.</p>
<p style="font-size:17px"><strong>${Number(a.score)}/${Number(a.maxScore)} puntos (${p} %)</strong> — ${ok ? 'aprobado ✅' : 'no aprobado'}</p>
${a.reviewNote ? `<p><strong>Comentario del profesor</strong><br>${esc(a.reviewNote).replace(/\n/g, '<br>')}</p>` : ''}
<p><a href="${esc(link)}">Ver la corrección completa</a></p>
<p style="color:#666">Aprender-Aleman.de</p></div>`
    try { await sendEmail({ to: user.email, subject: `Tu resultado: ${a.level} ${mod} — ${p} %`, html, text }) } catch (e) { console.error('[review] mail student:', e.message) }
  }

  // ─── Nivel aprobado → b2c ────────────────────────────────────────────
  async function confirmedModules(userId, level) {
    const [rows] = await pool.query(
      `SELECT module, MAX(score / NULLIF(maxScore, 0) * 100) AS bestPct, MAX(passed) AS everPassed
         FROM schule_pruefungen_attempts
        WHERE userId = ? AND level = ? AND mode = 'real'
          AND finishedAt IS NOT NULL AND maxScore > 0 AND ${REVIEW_COUNTS_SQL}
        GROUP BY module`,
      [userId, level]
    )
    const modules = Object.fromEntries(MODULES.map(m => [m, null]))
    for (const r of rows) {
      if (!MODULES.includes(r.module)) continue
      modules[r.module] = { bestPct: Math.round(Number(r.bestPct) || 0), passed: !!r.everPassed }
    }
    return modules
  }

  async function sendLevelPassedToB2c(row, user) {
    const snapshot = parseJson(row.snapshot) || {}
    let status = 'ok', detail = null
    try {
      await b2c.call('/api/internal/schule/level-passed', {
        method: 'POST',
        body: { email: user.email, fullName: user.fullName, level: row.level, passedAt: row.passedAt, ...snapshot },
      })
    } catch (e) {
      // Sin configurar o endpoint inexistente: no se reintenta solo (b2c
      // puede seguir consultando /api/internal/student/progress).
      status = e.code === 'NOT_CONFIGURED' ? 'not_configured'
        : e.code === 'B2C_5XX' || e.code === 'B2C_TIMEOUT' ? 'retry'
        : 'failed'
      detail = String(e.message || '').slice(0, 250)
    }
    await pool.query(
      'UPDATE schule_level_passed SET b2cStatus = ?, b2cDetail = ?, b2cNotifiedAt = NOW() WHERE id = ?',
      [status, detail, row.id]
    )
    return { status, detail }
  }

  /** Tras cada nota confirmada: ¿queda aprobado el nivel? Avisa una sola vez. */
  async function checkLevelPassed(userId, level) {
    try {
      const modules = await confirmedModules(userId, level)
      const st = levelPassStatus(level, modules)
      if (!st.allPassed) return null
      const [exists] = await pool.query('SELECT id FROM schule_level_passed WHERE userId = ? AND level = ? LIMIT 1', [userId, level])
      if (exists.length) return null
      const snapshot = { modules, avgPct: st.avgPct, compensated: st.compensated }
      const [ins] = await pool.query(
        'INSERT INTO schule_level_passed (userId, level, snapshot) VALUES (?, ?, ?)',
        [userId, level, JSON.stringify(snapshot)]
      )
      const user = await userById(userId)
      const row = { id: ins.insertId, userId, level, passedAt: new Date().toISOString(), snapshot }
      const b2cRes = user ? await sendLevelPassedToB2c(row, user) : { status: 'failed', detail: 'usuario no encontrado' }
      const lines = [
        `${user?.fullName || '—'} <${user?.email || '—'}> ha aprobado el nivel ${level} con todas las notas confirmadas.`,
        '',
        ...MODULES.map(m => `${MODULE_LABEL[m]}: ${modules[m] ? modules[m].bestPct + ' %' : '—'}`),
        `Media: ${st.avgPct} %${st.compensated ? ' (aprobado por compensación)' : ''}`,
        '',
        b2cRes.status === 'ok'
          ? 'Aviso enviado a b2c: el certificado se genera allí.'
          : `Aviso a b2c NO entregado (${b2cRes.status}${b2cRes.detail ? ': ' + b2cRes.detail : ''}). Emite el certificado desde el CRM o reenvía el aviso desde la revisión de exámenes.`,
      ]
      await mailAdmins(`🎓 Nivel ${level} aprobado — ${user?.fullName || user?.email || userId}`,
        `<pre style="white-space:pre-wrap;font-family:system-ui,Segoe UI,Arial,sans-serif;font-size:14px">${esc(lines.join('\n'))}</pre>`, lines.join('\n'))
      return { ...row, b2c: b2cRes }
    } catch (e) { console.error('[review] checkLevelPassed:', e.message); return null }
  }

  // Reintento horario de los avisos que b2c no pudo recibir (5xx / timeout).
  cron.schedule('20 * * * *', async () => {
    try {
      const [rows] = await pool.query(`SELECT * FROM schule_level_passed WHERE b2cStatus = 'retry' AND passedAt > DATE_SUB(NOW(), INTERVAL 7 DAY) LIMIT 20`)
      for (const row of rows) {
        const user = await userById(row.userId)
        if (user) await sendLevelPassedToB2c(row, user)
      }
    } catch (e) { console.error('[review] b2c retry:', e.message) }
  })

  /** Lo que el servidor hace después de responder al alumno. */
  function afterFinish(attemptId, { userId, level, reviewStatus }) {
    if (!reviewStatus) return
    setImmediate(async () => {
      await notifyFinished(attemptId)
      if (reviewStatus === 'confirmed') await checkLevelPassed(userId, level)
    })
  }

  // ─── Alumno: subir el audio de una tarea de Sprechen ─────────────────
  app.post('/api/pruefungen/attempts/:id/speaking-audio/:partId',
    authMiddleware, subscriptionMiddleware, blockIfReadOnly,
    express.raw({ type: [...Object.keys(AUDIO_TYPES), 'application/octet-stream'], limit: '26mb' }),
    async (req, res) => {
      try {
        const attemptId = parseInt(req.params.id)
        const partId = String(req.params.partId || '')
        if (!Number.isInteger(attemptId) || !SAFE_ID.test(partId)) return res.status(400).json({ error: 'Petición inválida.' })
        const [rows] = await pool.query(
          'SELECT id, userId, examId, mode, finishedAt, frozenAt FROM schule_pruefungen_attempts WHERE id = ? LIMIT 1', [attemptId]
        )
        const a = rows[0]
        if (!a) return res.status(404).json({ error: 'Intento no encontrado.' })
        if (a.userId !== req.user.id) return res.status(403).json({ error: 'No autorizado.' })
        if (a.mode !== 'real') return res.status(400).json({ error: 'Solo se guarda el audio de los exámenes reales.' })
        if (a.finishedAt || a.frozenAt) return res.status(409).json({ error: 'El examen ya está entregado.' })
        const part = (getExam(a.examId)?.parts || []).find(p => p.id === partId && p.kind === 'speaking-task')
        if (!part) return res.status(404).json({ error: 'Tarea no encontrada.' })
        if (!Buffer.isBuffer(req.body) || req.body.length === 0) return res.status(400).json({ error: 'Audio vacío.' })
        if (req.body.length > AUDIO_MAX_BYTES) return res.status(413).json({ error: 'Audio demasiado grande.' })
        const type = String(req.headers['content-type'] || '').split(';')[0].trim().toLowerCase()
        const ext = AUDIO_TYPES[type] || 'webm'
        // Una grabación por tarea: la nueva sustituye a la anterior.
        for (const e of Object.values(AUDIO_TYPES)) await fs.promises.unlink(audioFile(attemptId, partId, e)).catch(() => {})
        await fs.promises.writeFile(audioFile(attemptId, partId, ext), req.body)
        res.json({ ok: true, bytes: req.body.length })
      } catch (err) {
        console.error('speaking-audio error:', err)
        res.status(500).json({ error: 'Error al guardar el audio.' })
      }
    })

  // Detalle de una tarea para el alumno: con el título de la parte y, en
  // Schreiben, su propio texto (para leerlo junto a la corrección).
  function withPartInfo(d, exam, responses) {
    const part = (exam?.parts || []).find(p => p.id === d.partId)
    if (!part || d.questionId) return d
    return {
      ...d,
      title: part.title,
      ...(part.kind === 'writing-task' ? { text: String(responses?.[part.id] || '') } : {}),
    }
  }

  // ─── Alumno: resultado de un intento propio ──────────────────────────
  app.get('/api/pruefungen/attempts/:id/result', authMiddleware, subscriptionMiddleware, async (req, res) => {
    try {
      const attemptId = parseInt(req.params.id)
      const [rows] = await pool.query('SELECT * FROM schule_pruefungen_attempts WHERE id = ? LIMIT 1', [attemptId])
      const a = rows[0]
      if (!a) return res.status(404).json({ error: 'Intento no encontrado.' })
      if (a.userId !== req.user.id) return res.status(403).json({ error: 'No autorizado.' })
      if (!a.finishedAt) return res.status(409).json({ error: 'Este examen no está entregado.' })
      const exam = getExam(a.examId)
      const base = { attemptId: a.id, level: a.level, module: a.module, mode: a.mode, title: exam?.title || '', finishedAt: a.finishedAt }
      if (a.reviewStatus === 'pending') return res.json({ ...base, inReview: true })
      const detail = parseJson(a.feedback)?.detail || []
      const responses = parseJson(a.responses) || {}
      res.json({
        ...base,
        inReview: false,
        score: Number(a.score), maxScore: Number(a.maxScore),
        percentage: pct(a.score, a.maxScore),
        passed: !!a.passed,
        partScores: exam ? partScores(exam, detail) : [],
        detail: studentDetail(a.mode, detail).map(d => withPartInfo(d, exam, responses)),
        reviewed: a.reviewStatus === 'confirmed' && !!a.reviewedAt,
        reviewNote: a.reviewNote || null,
        reviewedAt: a.reviewedAt || null,
      })
    } catch (err) {
      console.error('attempt result error:', err)
      res.status(500).json({ error: 'Error al consultar el resultado.' })
    }
  })

  // ─── Equipo docente: cola de revisión ────────────────────────────────
  app.get('/api/admin/pruefungen/reviews', authMiddleware, staffOnly, async (req, res) => {
    try {
      const status = ['pending', 'confirmed', 'all'].includes(req.query.status) ? req.query.status : 'pending'
      const where = status === 'all' ? 'reviewStatus IS NOT NULL' : 'reviewStatus = ?'
      const [rows] = await pool.query(
        `SELECT id, userId, level, module, examId, startedAt, finishedAt, score, maxScore, aiScore, passed,
                durationSeconds, reviewStatus, reviewedByName, reviewedAt, frozenAt
           FROM schule_pruefungen_attempts
          WHERE mode = 'real' AND finishedAt IS NOT NULL AND ${where}
          ORDER BY (reviewStatus = 'pending') DESC, finishedAt DESC
          LIMIT 200`,
        status === 'all' ? [] : [status]
      )
      const userIds = [...new Set(rows.map(r => r.userId))]
      const [users] = userIds.length ? await pool.query('SELECT id, fullName, email FROM users WHERE id IN (?)', [userIds]) : [[]]
      const byId = Object.fromEntries(users.map(u => [u.id, u]))
      const [counts] = await pool.query(
        `SELECT COUNT(*) AS n FROM schule_pruefungen_attempts WHERE mode = 'real' AND finishedAt IS NOT NULL AND reviewStatus = 'pending'`
      )
      res.json({
        pendingCount: Number(counts[0]?.n || 0),
        reviews: rows.map(r => ({
          attemptId: r.id,
          student: { name: byId[r.userId]?.fullName || '—', email: byId[r.userId]?.email || '' },
          level: r.level, module: r.module, examTitle: getExam(r.examId)?.title || r.examId,
          finishedAt: r.finishedAt, durationSeconds: r.durationSeconds,
          status: r.reviewStatus,
          // Lesen/Hören se confirman solos: no hay revisor.
          auto: r.reviewStatus === 'confirmed' && !r.reviewedAt,
          aiPct: pct(r.aiScore ?? r.score, r.maxScore),
          finalPct: r.reviewStatus === 'confirmed' ? pct(r.score, r.maxScore) : null,
          passed: r.reviewStatus === 'confirmed' ? !!r.passed : null,
          reviewedByName: r.reviewedByName || null, reviewedAt: r.reviewedAt || null,
          frozen: !!r.frozenAt,
        })),
      })
    } catch (err) {
      console.error('reviews list error:', err)
      res.status(500).json({ error: 'Error al listar los exámenes.' })
    }
  })

  // Un intento entero para revisarlo: preguntas, respuestas, soluciones,
  // textos, audios, vídeo de supervisión y corrección de la IA.
  app.get('/api/admin/pruefungen/reviews/:id', authMiddleware, staffOnly, async (req, res) => {
    try {
      const attemptId = parseInt(req.params.id)
      const [rows] = await pool.query(`SELECT * FROM schule_pruefungen_attempts WHERE id = ? AND mode = 'real' LIMIT 1`, [attemptId])
      const a = rows[0]
      if (!a || !a.finishedAt) return res.status(404).json({ error: 'Examen no encontrado.' })
      const exam = getExam(a.examId)
      if (!exam) return res.status(404).json({ error: 'El examen ya no existe en el catálogo.' })
      const user = await userById(a.userId)
      const feedback = parseJson(a.feedback) || {}
      const parts = reviewParts(exam, parseJson(a.responses), feedback.detail || [])

      // Tokens cortos para <audio>/<video> (no mandan cabecera Authorization).
      for (const p of parts) {
        if (p.kind !== 'speaking-task') continue
        const found = await findAudio(a.id, p.partId)
        p.audioUrl = found
          ? `/api/admin/pruefungen/reviews/${a.id}/audio/${p.partId}?t=${jwt.sign({ scope: 'spk', a: a.id, p: p.partId }, JWT_SECRET, { expiresIn: '2h' })}`
          : null
      }
      const hasVideo = !!(await fs.promises.stat(recordingPath(a.id)).catch(() => null))
      const events = await fs.promises.readFile(eventsPath(a.id), 'utf8')
        .then(t => t.trim().split('\n').filter(Boolean).map(l => JSON.parse(l))).catch(() => [])
      const [lp] = await pool.query('SELECT passedAt, b2cStatus, b2cDetail FROM schule_level_passed WHERE userId = ? AND level = ? LIMIT 1', [a.userId, a.level])

      res.json({
        attempt: {
          attemptId: a.id, level: a.level, module: a.module, examId: a.examId, examTitle: exam.title,
          startedAt: a.startedAt, finishedAt: a.finishedAt, durationSeconds: a.durationSeconds,
          score: Number(a.score), maxScore: Number(a.maxScore), percentage: pct(a.score, a.maxScore),
          aiScore: a.aiScore != null ? Number(a.aiScore) : Number(a.score),
          aiPercentage: pct(a.aiScore ?? a.score, a.maxScore),
          passed: !!a.passed, passPct: PRUEFUNG_PASS_PCT,
          status: a.reviewStatus || 'legacy',
          auto: a.reviewStatus === 'confirmed' && !a.reviewedAt,
          reviewedByName: a.reviewedByName || null, reviewedAt: a.reviewedAt || null, reviewNote: a.reviewNote || '',
          frozen: !!a.frozenAt,
        },
        student: { name: user?.fullName || '—', email: user?.email || '' },
        parts,
        supervision: {
          videoUrl: hasVideo ? `/api/admin/pruefungen/recordings/${a.id}/video?t=${jwt.sign({ scope: 'rec', a: a.id }, JWT_SECRET, { expiresIn: '2h' })}` : null,
          events,
          client: feedback.supervision || null,
        },
        levelPassed: lp[0] || null,
        criteria: CRITERIA.map(k => ({ key: k, label: CRITERIA_LABEL[k], max: 25 })),
      })
    } catch (err) {
      console.error('review detail error:', err)
      res.status(500).json({ error: 'Error al cargar el examen.' })
    }
  })

  // Audio de una tarea de Sprechen (token corto de alcance 'spk').
  app.get('/api/admin/pruefungen/reviews/:id/audio/:partId', async (req, res) => {
    try {
      let payload
      try { payload = jwt.verify(String(req.query.t || ''), JWT_SECRET) } catch { payload = null }
      const id = parseInt(req.params.id)
      const partId = String(req.params.partId || '')
      if (!payload || payload.scope !== 'spk' || payload.a !== id || payload.p !== partId || !SAFE_ID.test(partId)) {
        return res.status(401).json({ error: 'No autorizado.' })
      }
      const found = await findAudio(id, partId)
      if (!found) return res.status(404).json({ error: 'Audio no encontrado.' })
      const type = AUDIO_MIME[found.ext] || 'application/octet-stream'
      const range = /^bytes=(\d*)-(\d*)$/.exec(req.headers.range || '')
      if (range && (range[1] || range[2])) {
        const start = range[1] ? parseInt(range[1]) : 0
        const end = range[2] ? Math.min(parseInt(range[2]), found.size - 1) : found.size - 1
        if (start >= found.size) return res.status(416).set('Content-Range', `bytes */${found.size}`).end()
        res.status(206).set({ 'Content-Range': `bytes ${start}-${end}/${found.size}`, 'Accept-Ranges': 'bytes', 'Content-Length': end - start + 1, 'Content-Type': type })
        fs.createReadStream(found.file, { start, end }).pipe(res)
      } else {
        res.set({ 'Content-Length': found.size, 'Content-Type': type, 'Accept-Ranges': 'bytes', 'Cache-Control': 'private, no-store' })
        fs.createReadStream(found.file).pipe(res)
      }
    } catch (err) {
      console.error('review audio error:', err)
      res.status(500).json({ error: 'Error al servir el audio.' })
    }
  })

  // Confirmar (o corregir) la nota. Body:
  //   { tasks: { [partId]: { erfuellung, kohaerenz, wortschatz, strukturen } }, note }
  // Las tareas que no vengan conservan la nota de la IA. La nota de las
  // partes de respuesta cerrada no se toca.
  app.post('/api/admin/pruefungen/reviews/:id/confirm', authMiddleware, staffOnly, async (req, res) => {
    try {
      const attemptId = parseInt(req.params.id)
      const [rows] = await pool.query(`SELECT * FROM schule_pruefungen_attempts WHERE id = ? AND mode = 'real' LIMIT 1`, [attemptId])
      const a = rows[0]
      if (!a || !a.finishedAt) return res.status(404).json({ error: 'Examen no encontrado.' })
      if (a.frozenAt) return res.status(409).json({ error: 'Este examen ya se usó para emitir un certificado y no puede cambiarse.' })
      if (!a.reviewStatus) return res.status(409).json({ error: 'Este examen es anterior al sistema de revisión.' })
      const exam = getExam(a.examId)
      if (!exam) return res.status(404).json({ error: 'El examen ya no existe en el catálogo.' })

      const feedback = parseJson(a.feedback) || {}
      const detail = Array.isArray(feedback.detail) ? feedback.detail : []
      const tasks = req.body?.tasks && typeof req.body.tasks === 'object' ? req.body.tasks : {}
      const note = String(req.body?.note || '').trim().slice(0, 4000)

      for (const part of exam.parts || []) {
        if (part.kind !== 'writing-task' && part.kind !== 'speaking-task') continue
        const input = tasks[part.id]
        if (!input) continue
        const scores = {}
        for (const c of CRITERIA) {
          const v = Number(input[c])
          if (!Number.isFinite(v) || v < 0 || v > 25) return res.status(400).json({ error: `Nota inválida en ${CRITERIA_LABEL[c]} (0–25).` })
          scores[c] = Math.round(v)
        }
        const total = CRITERIA.reduce((s, c) => s + scores[c], 0)
        let d = detail.find(x => x.partId === part.id && !x.questionId)
        if (!d) { d = { partId: part.id, type: part.kind, possible: part.maxScore || 25, earned: 0 }; detail.push(d) }
        d.teacher = { scores, total, by: req.user.fullName || req.user.email || 'Profesor', at: new Date().toISOString() }
        d.earned = Math.round((total / 100) * (d.possible || part.maxScore || 25))
      }

      const score = detail.reduce((s, d) => s + (Number(d.earned) || 0), 0)
      const maxScore = Number(a.maxScore) || detail.reduce((s, d) => s + (Number(d.possible) || 0), 0) || 1
      const passed = (score / maxScore) >= (PRUEFUNG_PASS_PCT / 100) ? 1 : 0
      const firstConfirmation = a.reviewStatus !== 'confirmed'

      await pool.query(
        `UPDATE schule_pruefungen_attempts
            SET score = ?, passed = ?, feedback = ?, reviewStatus = 'confirmed',
                reviewedBy = ?, reviewedByName = ?, reviewedAt = NOW(), reviewNote = ?
          WHERE id = ?`,
        [score, passed, JSON.stringify({ ...feedback, detail }), String(req.user.id), req.user.fullName || req.user.email || null, note || null, attemptId]
      )

      const user = await userById(a.userId)
      const updated = { ...a, score, maxScore, passed, reviewNote: note }
      if (firstConfirmation) await notifyStudentConfirmed(updated, user)
      const levelPassed = await checkLevelPassed(a.userId, a.level)

      res.json({
        ok: true, score, maxScore, percentage: pct(score, maxScore), passed: !!passed,
        studentNotified: firstConfirmation,
        levelPassed: levelPassed ? { level: a.level, b2c: levelPassed.b2c } : null,
      })
    } catch (err) {
      console.error('review confirm error:', err)
      res.status(500).json({ error: 'Error al confirmar la nota.' })
    }
  })

  // Reenviar a b2c el aviso de nivel aprobado (si falló la primera vez).
  app.post('/api/admin/pruefungen/reviews/:id/resend-level-passed', authMiddleware, staffOnly, async (req, res) => {
    try {
      const [rows] = await pool.query('SELECT userId, level FROM schule_pruefungen_attempts WHERE id = ? LIMIT 1', [parseInt(req.params.id)])
      const a = rows[0]
      if (!a) return res.status(404).json({ error: 'Examen no encontrado.' })
      const [lp] = await pool.query('SELECT * FROM schule_level_passed WHERE userId = ? AND level = ? LIMIT 1', [a.userId, a.level])
      if (!lp.length) return res.status(404).json({ error: 'Este alumno aún no tiene el nivel aprobado.' })
      const user = await userById(a.userId)
      if (!user) return res.status(404).json({ error: 'Alumno no encontrado.' })
      res.json({ ok: true, b2c: await sendLevelPassedToB2c(lp[0], user) })
    } catch (err) {
      console.error('resend level-passed error:', err)
      res.status(500).json({ error: 'Error al reenviar el aviso.' })
    }
  })

  // ─── Retención de audios ─────────────────────────────────────────────
  async function purgeOldAudio() {
    try {
      const files = await fs.promises.readdir(EXAM_AUDIO_DIR).catch(() => [])
      const cutoff = Date.now() - EXAM_AUDIO_TTL_DAYS * 24 * 60 * 60 * 1000
      let n = 0
      for (const f of files) {
        const p = path.join(EXAM_AUDIO_DIR, f)
        const st = await fs.promises.stat(p).catch(() => null)
        if (st && st.mtime.getTime() < cutoff) { await fs.promises.unlink(p).catch(() => {}); n++ }
      }
      if (n) console.log(`[review] purgados ${n} audios de más de ${EXAM_AUDIO_TTL_DAYS} días`)
    } catch (e) { console.error('[review] purge:', e.message) }
  }
  cron.schedule('25 4 * * *', purgeOldAudio)
  purgeOldAudio()

  return { initialReviewStatus, afterFinish, checkLevelPassed }
}
