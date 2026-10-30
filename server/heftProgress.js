// Registro de los Übungshefte: qué hizo cada alumno, con qué nota y cuándo.
//
// Sirve de prueba para la garantía de nivel, así que:
//   · el servidor recalcula la nota a partir de las respuestas (no se fía del
//     navegador) y hace él la corrección con IA de Schreiben y Sprechen;
//   · cada entrega se guarda en schule_heft_submissions y nunca se modifica;
//   · el personal docente no genera registros (tampoco «ver como alumno»,
//     que ya lo bloquea blockIfReadOnly).
//
// Un cuaderno está HECHO con todas sus partes entregadas y al menos un 50 % en
// las partes de corrección automática (mejor intento de cada parte). Una vez
// hecho, sigue hecho aunque el alumno lo repita y saque menos.

export const HEFT_MIN_PCT = 50
export const HEFT_GUARANTEE_PCT = 80   // % de cuadernos del nivel (informativo por ahora)

const KURSE = ['deutscha1', 'deutscha2', 'deutschb1', 'deutschb2', 'deutschc1']
const kursOfLevel = level => `deutsch${String(level || '').toLowerCase()}`
const heftModule = kurs => import(`./${kurs}/heft/index.js`)

// ─── Corrección (la misma lógica que HeftBody.jsx) ───────────────────
const norm = s => String(s ?? '').trim().toLowerCase().replace(/\s+/g, ' ')
const sinPunkt = s => norm(String(s).replace(/[.?!,]/g, ''))

export function itemCorrect(item, value) {
  if (value === undefined || value === null) return false
  switch (item.typ) {
    case 'mc': case 'korrektur': case 'rf': return value === item.loesung
    case 'luecke': return Object.keys(item.loesungen).every(n => norm(value?.[n]) === norm(item.loesungen[n]))
    case 'satzbau': {
      if (!Array.isArray(value)) return false
      const built = sinPunkt(value.join(' '))
      return [item.loesung, ...(item.alt || [])].some(l => sinPunkt(l) === built)
    }
    case 'zuordnen': return item.links.every(l => norm(value?.[l]) === norm(item.loesung[l]))
    default: return false
  }
}

const cleanField = s => norm(s).replace(/[\s\-/.,:]/g, '')
export function fieldCorrect(feld, value) {
  const v = cleanField(value)
  return (feld.erwartet || []).some(e => {
    const n = cleanField(e)
    return v === n || (v.length >= 4 && (n.includes(v) || v.includes(n)))
  })
}

const isProductive = teil => teil.typ === 'sprechen' || (teil.typ === 'schreiben' && teil.variante !== 'formular')

/** Nota de una parte de corrección automática: { score, maxScore }. */
export function gradeAutoTeil(teil, responses) {
  const r = responses || {}
  if (teil.typ === 'schreiben') {
    const felder = teil.felder || []
    return { score: felder.filter(f => fieldCorrect(f, r[f.id])).length, maxScore: felder.length }
  }
  const items = teil.items || []
  return { score: items.filter((it, i) => itemCorrect(it, r[i])).length, maxScore: items.length }
}

// Consigna para la IA, igual que la construía el cliente (misma clave de caché).
const plain = t => String(t || '').replace(/~~[^~]*~~/g, '').replace(/\*\*|__|==/g, '').replace(/\s+/g, ' ').trim()
const aufgabeText = teil => [plain(teil.anweisung), plain(teil.aufgabe)].filter(Boolean).join('\n') +
  (teil.punkte?.length ? '\n\nPunkte:\n' + teil.punkte.map(p => `- ${plain(p)}`).join('\n') : '')

const countWords = s => { const t = String(s || '').trim(); return t ? t.split(/\s+/).length : 0 }
const parseJson = v => { if (v == null || typeof v !== 'string') return v; try { return JSON.parse(v) } catch { return null } }

export function setupHeftProgress(app, { pool, authMiddleware, deutschC1RoleGate, subscriptionMiddleware, blockIfReadOnly, staffOnly, isExamStaff, aiRateLimit, aiDailyCap, gradeSchreibenCore, gradeSprechenCore, ANTHROPIC_API_KEY }) {
  ;(async () => {
    try {
      await pool.query(`
        CREATE TABLE IF NOT EXISTS schule_heft_submissions (
          id BIGINT AUTO_INCREMENT PRIMARY KEY,
          userId VARCHAR(191) NOT NULL,
          kurs VARCHAR(16) NOT NULL,
          lessonId INT NOT NULL,
          teil INT NOT NULL,
          typ VARCHAR(16) NOT NULL,
          score INT DEFAULT NULL,
          maxScore INT DEFAULT NULL,
          aiTotal INT DEFAULT NULL,
          inputMode VARCHAR(12) DEFAULT NULL,
          responses JSON DEFAULT NULL,
          createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
          INDEX idx_user_lesson (userId, kurs, lessonId)
        )
      `)
      await pool.query(`
        CREATE TABLE IF NOT EXISTS schule_heft_progress (
          userId VARCHAR(191) NOT NULL,
          kurs VARCHAR(16) NOT NULL,
          lessonId INT NOT NULL,
          partsDone INT NOT NULL DEFAULT 0,
          partsTotal INT NOT NULL DEFAULT 0,
          autoPct INT DEFAULT NULL,
          completedAt DATETIME DEFAULT NULL,
          updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
          PRIMARY KEY (userId, kurs, lessonId),
          INDEX idx_user_completed (userId, kurs, completedAt)
        )
      `)
    } catch (e) { console.error('[heft] schema:', e.message) }
  })()

  // Mejor resultado de cada parte, a partir de las entregas.
  async function partsOf(userId, kurs, lessonId) {
    const [rows] = await pool.query(
      'SELECT teil, score, maxScore, aiTotal FROM schule_heft_submissions WHERE userId = ? AND kurs = ? AND lessonId = ?',
      [userId, kurs, lessonId]
    )
    const parts = {}
    for (const r of rows) {
      const p = parts[r.teil] || (parts[r.teil] = { attempts: 0 })
      p.attempts++
      if (r.maxScore != null && (p.score == null || Number(r.score) > p.score)) { p.score = Number(r.score); p.maxScore = Number(r.maxScore) }
      if (r.aiTotal != null && (p.aiTotal == null || Number(r.aiTotal) > p.aiTotal)) p.aiTotal = Number(r.aiTotal)
    }
    return parts
  }

  async function readProgress(userId, kurs, lessonId, heft) {
    const parts = await partsOf(userId, kurs, lessonId)
    const [st] = await pool.query(
      'SELECT partsDone, partsTotal, autoPct, completedAt FROM schule_heft_progress WHERE userId = ? AND kurs = ? AND lessonId = ? LIMIT 1',
      [userId, kurs, lessonId]
    )
    return { ...(st[0] || { partsDone: 0, partsTotal: heft.teile.length, autoPct: null, completedAt: null }), minPct: HEFT_MIN_PCT, parts }
  }

  /** Recalcula y guarda el estado del cuaderno a partir de sus entregas. */
  async function refreshProgress(userId, kurs, lessonId, heft) {
    const parts = await partsOf(userId, kurs, lessonId)
    const total = heft.teile.length
    const done = heft.teile.filter((_, i) => parts[i]).length
    const auto = Object.values(parts).filter(p => p.maxScore > 0)
    const sum = auto.reduce((s, p) => s + p.maxScore, 0)
    const autoPct = sum > 0 ? Math.round(auto.reduce((s, p) => s + p.score, 0) / sum * 100) : null
    const complete = done === total && (autoPct == null || autoPct >= HEFT_MIN_PCT)
    // completedAt solo se fija la primera vez: lo ya logrado no se pierde.
    await pool.query(
      `INSERT INTO schule_heft_progress (userId, kurs, lessonId, partsDone, partsTotal, autoPct, completedAt)
       VALUES (?, ?, ?, ?, ?, ?, ${complete ? 'NOW()' : 'NULL'})
       ON DUPLICATE KEY UPDATE partsDone = VALUES(partsDone), partsTotal = VALUES(partsTotal), autoPct = VALUES(autoPct),
         completedAt = COALESCE(completedAt, VALUES(completedAt))`,
      [userId, kurs, lessonId, done, total, autoPct]
    )
    return readProgress(userId, kurs, lessonId, heft)
  }

  /** Resumen de un nivel para la garantía, cert-status y b2c. */
  async function levelSummary(userId, level) {
    const kurs = kursOfLevel(level)
    if (!KURSE.includes(kurs)) return null
    const { HEFTE } = await heftModule(kurs)
    const total = Object.keys(HEFTE).length
    const [rows] = await pool.query(
      'SELECT COUNT(*) AS n FROM schule_heft_progress WHERE userId = ? AND kurs = ? AND completedAt IS NOT NULL',
      [String(userId), kurs]
    )
    const done = Number(rows[0]?.n || 0)
    const pct = total > 0 ? Math.round((done / total) * 100) : 0
    return { done, total, pct, threshold: HEFT_GUARANTEE_PCT, met: pct >= HEFT_GUARANTEE_PCT }
  }

  // Corrección con IA con su tope diario: solo para Schreiben y Sprechen.
  const loadTeil = kurs => async (req, res, next) => {
    const { getHeft } = await heftModule(kurs)
    const heft = getHeft(parseInt(req.params.id))
    const teil = heft?.teile?.[parseInt(req.params.t)]
    if (!teil) return res.status(404).json({ error: 'Parte no encontrada.' })
    req.heft = heft
    req.heftTeil = teil
    next()
  }
  const capIfProductive = (mw) => (req, res, next) => (isProductive(req.heftTeil) ? mw(req, res, next) : next())

  for (const kurs of KURSE) {
    // Estado de todos los cuadernos del curso (menú lateral y tarjetas).
    app.get(`/api/${kurs}/heft-progress`, authMiddleware, deutschC1RoleGate, subscriptionMiddleware, async (req, res) => {
      try {
        const [rows] = await pool.query(
          'SELECT lessonId, partsDone, partsTotal, autoPct, completedAt FROM schule_heft_progress WHERE userId = ? AND kurs = ?',
          [String(req.user.id), kurs]
        )
        res.json({ lessons: Object.fromEntries(rows.map(r => [r.lessonId, r])) })
      } catch (err) {
        console.error('[heft] progress list:', err.message)
        res.status(500).json({ error: 'Error al consultar el progreso.' })
      }
    })

    // Estado de un cuaderno, parte por parte.
    app.get(`/api/${kurs}/heft/:id/progress`, authMiddleware, deutschC1RoleGate, subscriptionMiddleware, async (req, res) => {
      try {
        const { getHeft } = await heftModule(kurs)
        const id = parseInt(req.params.id)
        const heft = getHeft(id)
        if (!heft) return res.status(404).json({ error: 'Kein Übungsheft für diese Lektion.' })
        if (isExamStaff(req.user.role)) return res.json({ staff: true, partsDone: 0, partsTotal: heft.teile.length, parts: {}, minPct: HEFT_MIN_PCT })
        res.json(await readProgress(String(req.user.id), kurs, id, heft))
      } catch (err) {
        console.error('[heft] progress:', err.message)
        res.status(500).json({ error: 'Error al consultar el progreso.' })
      }
    })

    // Entrega de una parte. Responde con la nota calculada aquí.
    app.post(`/api/${kurs}/heft/:id/teil/:t`,
      authMiddleware, deutschC1RoleGate, subscriptionMiddleware, blockIfReadOnly,
      loadTeil(kurs),
      capIfProductive(aiRateLimit), capIfProductive(aiDailyCap),
      async (req, res) => {
        try {
          const id = parseInt(req.params.id), t = parseInt(req.params.t)
          const { heftTeil: teil, heft } = req
          const staff = isExamStaff(req.user.role)
          let row
          let feedback = null

          if (isProductive(teil)) {
            const speaking = teil.typ === 'sprechen'
            const text = String(req.body?.text || '').trim().slice(0, 20000)
            const min = speaking ? 3 : (teil.minWoerter || 10)
            if (countWords(text) < min) return res.status(400).json({ error: `Mindestens ${min} Wörter.`, code: 'too_short' })
            if (!ANTHROPIC_API_KEY) return res.status(503).json({ error: 'Korrektur gerade nicht verfügbar.', code: 'grading_unavailable' })
            const who = { userId: req.user.id, userName: req.user.fullName || 'Student' }
            const level = kurs.replace('deutsch', '').toUpperCase()
            const durationSeconds = Math.max(0, Math.min(3600, parseInt(req.body?.durationSeconds) || 0))
            feedback = speaking
              ? await gradeSprechenCore({ level, taskType: 'Übungsheft', taskPrompt: aufgabeText(teil), transcript: text, durationSeconds }, who)
              : await gradeSchreibenCore({ level, taskType: 'Übungsheft', taskPrompt: aufgabeText(teil), submission: text, minWords: teil.minWoerter }, who)
            row = {
              aiTotal: Math.max(0, Math.min(100, Number(feedback?.total) || 0)),
              inputMode: speaking ? (req.body?.mode === 'escrito' ? 'escrito' : 'voz') : 'texto',
              responses: { text, ...(speaking ? { durationSeconds } : {}) },
            }
          } else {
            const responses = req.body?.responses && typeof req.body.responses === 'object' ? req.body.responses : {}
            if (JSON.stringify(responses).length > 64000) return res.status(413).json({ error: 'Respuesta demasiado grande.' })
            row = { ...gradeAutoTeil(teil, responses), responses }
          }

          // El personal docente prueba el cuaderno sin dejar registro.
          if (staff) return res.json({ ok: true, staff: true, score: row.score ?? null, maxScore: row.maxScore ?? null, feedback })

          const userId = String(req.user.id)
          await pool.query(
            `INSERT INTO schule_heft_submissions (userId, kurs, lessonId, teil, typ, score, maxScore, aiTotal, inputMode, responses)
             VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [userId, kurs, id, t, teil.typ, row.score ?? null, row.maxScore ?? null, row.aiTotal ?? null, row.inputMode ?? null, JSON.stringify(row.responses)]
          )
          const progress = await refreshProgress(userId, kurs, id, heft)
          res.json({ ok: true, score: row.score ?? null, maxScore: row.maxScore ?? null, feedback, progress })
        } catch (err) {
          console.error('[heft] submit:', err.message)
          res.status(500).json({ error: 'No se pudo guardar. Inténtalo de nuevo.' })
        }
      })
  }

  // ─── Equipo docente: consultar a un alumno ───────────────────────────
  app.get('/api/admin/hefte', authMiddleware, staffOnly, async (req, res) => {
    try {
      const email = String(req.query.email || '').trim().toLowerCase()
      if (!email) return res.status(400).json({ error: 'Indica un correo.' })
      const [users] = await pool.query('SELECT id, fullName, email FROM users WHERE email = ? LIMIT 1', [email])
      const user = users[0]
      if (!user) return res.status(404).json({ error: 'Alumno no encontrado.' })
      const [rows] = await pool.query(
        'SELECT kurs, lessonId, partsDone, partsTotal, autoPct, completedAt FROM schule_heft_progress WHERE userId = ? ORDER BY kurs, lessonId',
        [String(user.id)]
      )
      const kurse = []
      for (const kurs of KURSE) {
        const { HEFTE } = await heftModule(kurs)
        const lessons = rows.filter(r => r.kurs === kurs)
        kurse.push({
          kurs,
          level: kurs.replace('deutsch', '').toUpperCase(),
          total: Object.keys(HEFTE).length,
          done: lessons.filter(l => l.completedAt).length,
          lessons,
        })
      }
      res.json({ student: { id: user.id, name: user.fullName, email: user.email }, threshold: HEFT_GUARANTEE_PCT, kurse })
    } catch (err) {
      console.error('[heft] admin list:', err.message)
      res.status(500).json({ error: 'Error al consultar los cuadernos.' })
    }
  })

  // Las entregas de un cuaderno: la prueba en sí.
  app.get('/api/admin/hefte/:userId/:kurs/:lessonId', authMiddleware, staffOnly, async (req, res) => {
    try {
      const { userId, kurs } = req.params
      if (!KURSE.includes(kurs)) return res.status(404).json({ error: 'Curso no encontrado.' })
      const lessonId = parseInt(req.params.lessonId)
      const [rows] = await pool.query(
        `SELECT id, teil, typ, score, maxScore, aiTotal, inputMode, responses, createdAt
           FROM schule_heft_submissions WHERE userId = ? AND kurs = ? AND lessonId = ? ORDER BY createdAt, id`,
        [userId, kurs, lessonId]
      )
      res.json({ submissions: rows.map(r => ({ ...r, responses: parseJson(r.responses) })) })
    } catch (err) {
      console.error('[heft] admin detail:', err.message)
      res.status(500).json({ error: 'Error al consultar las entregas.' })
    }
  })

  return { levelSummary }
}
