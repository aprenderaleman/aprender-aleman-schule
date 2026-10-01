// Servicio de exámenes (Prüfungen). TODO el contenido de los exámenes vive
// en el servidor (server/pruefungen/data): el cliente recibe el examen SIN
// claves y toda la corrección ocurre aquí.
//
// Dos pools por (nivel, módulo):
//   • 'simulation' — simulacros: práctica ilimitada, con soluciones al final.
//   • 'real'       — examen real: preguntas no vistas, cuenta para el
//                    certificado, sin soluciones (solo nota por Teil).
//
// Muros del examen real, para que el resultado valga para la garantía:
//   • Nivel: solo el del alumno.
//   • Preparación: hay que haber sacado ≥ READINESS_MIN_SIM_PCT en un
//     simulacro de ese módulo (quien se presenta, está listo para aprobar).
//   • Cooldown 24 h y máximo 3 intentos terminados por módulo.
//   • Duración: durationMinutes (+ gracia). Lesen/Schreiben llevan un 15 %
//     extra sobre el tiempo oficial — nadie debe suspender por el reloj.
//   • Corrección 100 % en servidor (objetiva + IA para Schreiben/Sprechen).
//   • Congelado: un intento usado para un certificado no se vuelve a corregir.

import { PRUEFUNGEN_EXAMS } from './pruefungen/data/index.js'

export const REAL_ATTEMPT_COOLDOWN_HOURS = 24
export const REAL_ATTEMPT_LIFETIME_CAP = 3
export const REAL_DURATION_GRACE_SECONDS = 5 * 60
export const PRUEFUNG_PASS_PCT = 60
export const READINESS_MIN_SIM_PCT = 65
const TIME_BONUS = { lesen: 1.15, schreiben: 1.15 }

const LEVEL_MODULES = ['lesen', 'hoeren', 'schreiben', 'sprechen']
const EXAMS = new Map(PRUEFUNGEN_EXAMS.map(e => [e.id, e]))

// ─── Aprobado de NIVEL (garantía) ──────────────────────────────────────
// A1/A2 — como el examen oficial, prueba global: los módulos compensan
//   (media ≥60 % y ningún módulo <40 %).
// B1–C2 — por módulo (≥60 %), con una compensación ligera: UN módulo entre
//   50 y 59 % se da por bueno si la media de los cuatro es ≥65 %.
export const COMPENSATION_LEVELS = ['A1', 'A2']
export const COMPENSATION_MIN_MODULE_PCT = 40
export const LIGHT_COMPENSATION = { minModulePct: 50, avgPct: 65, maxModules: 1 }

function compensationRule(level) {
  return COMPENSATION_LEVELS.includes(String(level).toUpperCase())
    ? { kind: 'global', minModulePct: COMPENSATION_MIN_MODULE_PCT, avgPct: PRUEFUNG_PASS_PCT }
    : { kind: 'light', ...LIGHT_COMPENSATION }
}

// modules: { lesen: { bestPct, passed } | null, … } — mejores intentos reales.
export function levelPassStatus(level, modules) {
  const passedCount = LEVEL_MODULES.filter(m => modules?.[m]?.passed).length
  const pcts = LEVEL_MODULES.map(m => modules?.[m]?.bestPct)
  const allAttempted = pcts.every(p => p != null)
  const avgPct = allAttempted ? Math.round(pcts.reduce((s, p) => s + Number(p), 0) / pcts.length) : null
  const rule = compensationRule(level)
  let compensated = false
  if (passedCount < LEVEL_MODULES.length && allAttempted) {
    if (rule.kind === 'global') {
      compensated = pcts.every(p => Number(p) >= rule.minModulePct) && avgPct >= rule.avgPct
    } else {
      const failing = LEVEL_MODULES.filter(m => !modules[m]?.passed)
      compensated = failing.length <= rule.maxModules
        && failing.every(m => Number(modules[m].bestPct) >= rule.minModulePct)
        && avgPct >= rule.avgPct
    }
  }
  return {
    passedCount,
    allPassed: passedCount === LEVEL_MODULES.length || compensated,
    compensated,
    avgPct,
    compensation: rule,
  }
}

// ─── Catálogo y contenido ──────────────────────────────────────────────
export const poolOf = exam => exam.pool || 'simulation'
export const getExam = id => EXAMS.get(id) || null

export function effectiveDuration(exam) {
  const d = exam.durationMinutes || 0
  return Math.ceil(d * (TIME_BONUS[exam.module] || 1))
}

// Compatibilidad con el código que pedía el «spec» del examen.
export function examSpec(examId) {
  const exam = EXAMS.get(examId)
  return exam ? { ...exam, durationMinutes: effectiveDuration(exam) } : null
}

function countItems(exam) {
  let n = 0
  for (const part of exam.parts || []) {
    if (Array.isArray(part.questions)) {
      for (const q of part.questions) n += q.type === 'matching' ? Object.keys(q.correct || {}).length : 1
    } else if (part.kind === 'formular') n += (part.fields || []).length
    else if (part.kind === 'writing-task' || part.kind === 'speaking-task') n += 1
  }
  return n
}

// Clips de audio de un examen: { clipId → { transcript, staticUrl } }.
export function audioClips(exam) {
  const clips = {}
  for (const part of exam.parts || []) {
    if (part.context?.type === 'audio') clips[part.id] = { transcript: part.context.transcript, staticUrl: part.context.audioUrl || null }
    for (const q of part.questions || []) {
      if (q.audio) clips[q.id] = { transcript: q.audio.transcript, staticUrl: q.audio.audioUrl || null }
    }
  }
  return clips
}

// Divide un transcript en intervenciones para sintetizarlo con varias voces.
// Una línea «Etiqueta: texto» (1-3 palabras con mayúscula inicial) es un
// hablante y la etiqueta NO se pronuncia; el resto lo lee el narrador.
// «Achtung: Der Zug …» y similares se quedan enteros.
// Devuelve [{ speaker, voice, text }].
// Palabras que abren una frase con dos puntos sin ser un hablante.
const NOT_A_SPEAKER = /^(Achtung|Hinweis|Wichtig|Bitte|Übrigens|Also|Kurz|Beispiel|Frage|Antwort|Tipp|Vorsicht|Thema|Uhrzeit|Preis|Datum|Ort|Zeit)$/
const FEMALE_ROLE = /^(Frau|Mutter|Tochter|Schwester|Oma|Tante|Freundin|Dame)\b/
const MALE_ROLE = /^(Mann|Herr|Vater|Sohn|Bruder|Opa|Onkel|Freund|Junge|Reisender|Arzt|Gast|Chef|Kunde|Student)\b/
const FEMALE_NAMES = new Set('Nele Jana Nadine Sabine Miriam Helena Anna Lena Laura Julia Sara Sarah Maria Lisa Paula Mia Emma Sofia Sophie Carla Lucía Lucia Eva Clara Marie Hanna Hannah Katrin Petra Monika Claudia Andrea Daniela Stefanie Nina Aylin Selin Fatma Elif Ines Marta Elena Carmen Rita Leyla Amira Greta Ida Johanna Katharina Christina Susanne Birgit Heike Ute Mira Maren Ivana Sofía Olga Elisa Lea Leonie Emilia Charlotte Luisa Nora Vera Karin Sandra Tanja Anja Silke Renate Ursula Martina Angelika Barbara Kerstin Melanie Jasmin Yasemin Zeynep Aisha Nadia Irina Natalia Ana Isabel Pilar Valentina Camila Alba Marina Carolin Franziska Theresa Antonia Frieda Merle Ronja Pia Svenja Meike Jule Elke Doris Gabi Ella Amelie Judith Esther Ruth Linda Vanessa Jessica Kira Alina Dana Tina Britta Wiebke Annika Rosa Ayse Hatice Dilara Malika'.split(' '))
const MALE_NAMES = new Set('Sven Emre Jakob Felix Tobias Jonas Paul Tom Max Leon Lukas Tim Jan Peter Thomas Michael Stefan Andreas Markus Daniel David Karim Mehmet Ali Marco Luis Carlos Mateo Deniz Ben Finn Noah Tarek Tarik Yusuf Samir Rashid Diego Pablo Javier Miguel Klaus Jürgen Uwe Hans Dieter Martin Benjamin Florian Sebastian Christian Alexander Moritz Niklas Simon Oliver Frank Ralf Marc Leo Karl Georg Lars Ole Malte Till Erik Henrik Jens Kai Nils Timo Fabian Dominik Patrick Philipp Robert Richard Walter Werner Günter Horst Rolf Bernd Holger Matthias Johannes Julian Elias Emil Anton Theo Oskar Konstantin Vincent Raphael Adrian Rafael Sergio Andrés Jorge Juan José Pedro Antonio Manuel Fernando Alejandro Omar Hassan Ahmed Mustafa Murat Can Kemal Ivan Igor Pavel Marek Piotr Luca Matteo Nico Hannes Henning Torsten Volker Norbert Achim Bastian Björn Carsten Dirk Gerd Heiko Ingo Jochen Lutz Manfred Olaf Rainer Udo Wolfgang Arne Levi Milan Samuel Aaron'.split(' '))
const VOICES_F = ['nova', 'shimmer']
const VOICES_M = ['onyx', 'echo']
const NARRATOR_VOICE = 'alloy'

function genderOf(label) {
  const first = label.split(/\s+/)[0]
  if (FEMALE_ROLE.test(label) || FEMALE_NAMES.has(first)) return 'f'
  if (MALE_ROLE.test(label) || MALE_NAMES.has(first)) return 'm'
  if (/in$/.test(first) && first.length >= 6) return 'f'      // Kundin, Ärztin, Moderatorin…
  if (/(er|ar|or|eur|ant|ent)$/.test(first)) return 'm'       // Verkäufer, Bibliothekar, Moderator…
  return null                                                  // Ansage, Anrufbeantworter…
}

// Un monólogo sin etiquetas en el que quien habla se presenta («hier ist
// Felix», «Mein Name ist Elena Ruiz», «hier spricht Frau Wendt») lo lee una
// voz de su género y no el narrador neutro.
function monologueVoice(text) {
  const m = String(text).slice(0, 220).match(/\b(?:[Hh]ier (?:ist|spricht)|[Ii]ch bin|[Ii]ch heiße|[Mm]ein Name ist)\s+(?:(Herr|Frau)\s+)?([A-ZÄÖÜ][a-zäöüßáéíóú]+)/)
  if (!m) return null
  const g = m[1] ? (m[1] === 'Frau' ? 'f' : 'm') : FEMALE_NAMES.has(m[2]) ? 'f' : MALE_NAMES.has(m[2]) ? 'm' : null
  return g === 'f' ? VOICES_F[0] : g === 'm' ? VOICES_M[0] : null
}

export function speechSegments(transcript) {
  const lines = String(transcript || '').split(/\n+/).map(l => l.trim()).filter(Boolean)
  const labelOf = line => {
    const m = line.match(/^([A-ZÄÖÜ][A-Za-zÄÖÜäöüß.\- ]{0,28}?):\s+(.+)$/)
    return m && m[1].trim().split(/\s+/).length <= 3 ? { label: m[1].trim(), text: m[2] } : null
  }
  const isSpeaker = label => !NOT_A_SPEAKER.test(label)

  const voices = {}
  let nf = 0, nm = 0, alt = 0
  const voiceFor = label => {
    if (!voices[label]) {
      const g = genderOf(label) || (alt++ % 2 === 0 ? 'f' : 'm')
      voices[label] = g === 'f' ? VOICES_F[nf++ % VOICES_F.length] : VOICES_M[nm++ % VOICES_M.length]
    }
    return voices[label]
  }

  const segs = []
  for (const line of lines) {
    const p = labelOf(line)
    const speaker = p && isSpeaker(p.label) ? p.label : null
    const text = (speaker ? p.text : line).replace(/[„“”"«»]/g, '').trim()
    if (!text) continue
    const voice = speaker ? voiceFor(speaker) : NARRATOR_VOICE
    const last = segs[segs.length - 1]
    if (last && last.speaker === speaker) last.text += ' ' + text
    else segs.push({ speaker, voice, text })
  }
  if (segs.length && segs.every(sg => !sg.speaker)) {
    const v = monologueVoice(segs[0].text)
    if (v) for (const sg of segs) sg.voice = v
  }
  return segs
}

// ¿Tiene clips que hay que sintetizar (sin mp3 estático en el frontend)?
export const needsGeneratedAudio = exam => Object.values(audioClips(exam)).some(c => !c.staticUrl)

// Examen real de un (nivel, módulo). `usable(exam)` deja descartar los que
// aún no pueden servirse (p. ej. Hören sin audio generable). Si no hay
// examen real propio, se usa el simulacro como hasta ahora.
export function realExamFor(level, module, usable = () => true) {
  const lvl = String(level).toUpperCase()
  const all = PRUEFUNGEN_EXAMS.filter(e => e.level === lvl && e.module === module)
  return all.find(e => poolOf(e) === 'real' && usable(e)) || all.find(e => poolOf(e) === 'simulation') || null
}

export function catalogEntry(exam) {
  return {
    id: exam.id,
    level: exam.level,
    module: exam.module,
    pool: poolOf(exam),
    title: exam.title,
    description: exam.description || '',
    durationMinutes: effectiveDuration(exam),
    maxScore: exam.maxScore,
    passScore: exam.passScore,
    items: countItems(exam),
    parts: (exam.parts || []).length,
  }
}

export function catalog(usable = () => true) {
  // Los exámenes del pool real solo aparecen si pueden servirse.
  return PRUEFUNGEN_EXAMS.filter(e => poolOf(e) === 'simulation' || usable(e)).map(catalogEntry)
}

// El examen tal como lo ve el alumno: sin claves ni transcripciones.
// audioUrlFor(examId, clipId) → URL del audio sintetizado en servidor.
export function publicExam(exam, audioUrlFor) {
  const stripAudio = (a, clipId) => {
    if (!a) return a
    const { transcript, ...rest } = a
    return { ...rest, audioUrl: a.audioUrl || audioUrlFor(exam.id, clipId) }
  }
  return {
    ...catalogEntry(exam),
    provider: exam.provider,
    parts: (exam.parts || []).map(part => {
      const out = { ...part }
      if (part.context?.type === 'audio') out.context = stripAudio(part.context, part.id)
      if (Array.isArray(part.questions)) {
        out.questions = part.questions.map(q => {
          const { correct, ...rest } = q
          if (q.audio) rest.audio = stripAudio(q.audio, q.id)
          return rest
        })
      }
      if (Array.isArray(part.fields)) out.fields = part.fields.map(({ expected, ...rest }) => rest)
      return out
    }),
  }
}

// ─── Corrección ────────────────────────────────────────────────────────
// Sin mayúsculas, espacios repetidos ni puntuación suelta alrededor de las palabras.
const normF = s => String(s ?? '').toLowerCase().replace(/[,;]+/g, ' ').replace(/\s+/g, ' ').trim().replace(/[.!]+$/, '')

// Mismo texto de consigna para la IA en todos los caminos (clave de caché).
export function productiveTaskPrompt(part) {
  return part.taskPrompt + (part.bullets ? '\n\nPunkte:\n' + part.bullets.map(b => `- ${b}`).join('\n') : '')
}

/**
 * Corrige un examen entero. `gradeAI(kind, { level, taskType, taskPrompt,
 * text, minWords, durationSeconds })` → corrección IA ({ total 0-100, … }).
 * Devuelve { score, maxScore, detail } con el detalle completo (incluye
 * soluciones: quien llame decide qué enseña al alumno).
 */
export async function gradeExam(exam, responses, gradeAI) {
  const r = responses || {}
  let score = 0
  let maxScore = 0
  const detail = []

  for (const part of exam.parts || []) {
    if (Array.isArray(part.questions)) {
      for (const q of part.questions) {
        const userAnswer = r[q.id]
        if (q.type === 'matching') {
          const pp = q.pointsPerItem || 1
          const itemIds = Object.keys(q.correct || {})
          const items = {}
          let ok = 0
          for (const itemId of itemIds) {
            const good = !!userAnswer && userAnswer[itemId] === q.correct[itemId]
            if (good) ok++
            items[itemId] = { user: userAnswer?.[itemId] ?? null, correct: q.correct[itemId], ok: good }
          }
          score += ok * pp
          maxScore += itemIds.length * pp
          detail.push({ partId: part.id, questionId: q.id, type: 'matching', earned: ok * pp, possible: itemIds.length * pp, items })
        } else {
          const pts = q.points || 1
          const good = userAnswer === q.correct
          maxScore += pts
          if (good) score += pts
          detail.push({ partId: part.id, questionId: q.id, type: q.type, user: userAnswer ?? null, correct: q.correct, ok: good, earned: good ? pts : 0, possible: pts })
        }
      }
    }

    if (part.kind === 'formular') {
      // `expected` es una lista de variantes. Vale la exacta o una respuesta que
      // la contiene como palabras completas («Lindenstraße 24, Leipzig»). Un
      // trozo («1998» para una fecha) u otra cifra («17.10.» por «7.10.») no.
      const vals = r[part.id] || {}
      let earned = 0
      let possible = 0
      const fields = []
      for (const f of part.fields || []) {
        const pts = f.points || 1
        possible += pts
        const v = normF(vals[f.id])
        const variants = Array.isArray(f.expected) ? f.expected : [f.expected]
        const good = !!v && variants.some(exp => {
          const e = normF(exp)
          if (!e) return false
          return v === e || ` ${v} `.includes(` ${e} `)
        })
        if (good) earned += pts
        fields.push({ id: f.id, label: f.label, user: vals[f.id] || '', expected: f.expected, ok: good, points: pts })
      }
      score += earned
      maxScore += possible
      detail.push({ partId: part.id, type: 'formular', earned, possible, fields })
    }

    if (part.kind === 'writing-task' || part.kind === 'speaking-task') {
      const possible = part.maxScore || 25
      maxScore += possible
      const raw = r[part.id]
      const text = part.kind === 'writing-task' ? String(raw || '').trim() : String(raw?.transcript || '').trim()
      const base = { partId: part.id, type: part.kind, possible }
      if (!text) {
        detail.push(part.kind === 'speaking-task' && raw
          ? { ...base, earned: 0, error: 'Keine Sprache erkannt.' }
          : { ...base, earned: 0, skipped: true })
        continue
      }
      const ai = await gradeAI(part.kind, {
        level: exam.level,
        taskType: part.taskType,
        taskPrompt: productiveTaskPrompt(part),
        text,
        minWords: part.minWords,
        durationSeconds: raw?.durationSeconds || 0,
      })
      const total = Math.max(0, Math.min(100, Number(ai?.total) || 0))
      const earned = Math.round((total / 100) * possible)
      score += earned
      detail.push(part.kind === 'speaking-task'
        ? { ...base, earned, transcript: text, durationSeconds: raw?.durationSeconds || 0, ai }
        : { ...base, earned, ai })
    }
  }
  return { score, maxScore, detail }
}

// Nota por Teil — lo único de la parte objetiva que se enseña en modo real.
export function partScores(exam, detail) {
  return (exam.parts || []).map(part => {
    const rows = detail.filter(d => d.partId === part.id)
    return {
      partId: part.id,
      title: part.title,
      earned: rows.reduce((s, d) => s + (d.earned || 0), 0),
      possible: rows.reduce((s, d) => s + (d.possible || 0), 0),
    }
  })
}

// Detalle que puede ver el alumno. Simulacro: todo (aprende de las soluciones).
// Real: sin claves — solo la corrección IA de Schreiben/Sprechen; así un
// reintento no se aprueba memorizando.
export function studentDetail(mode, detail) {
  if (mode !== 'real') return detail
  return detail.filter(d => d.type === 'writing-task' || d.type === 'speaking-task')
}

// ─── Muros del examen real ─────────────────────────────────────────────
/**
 * Gatekeeper antes de crear un intento mode='real'. Devuelve null si puede,
 * o { status, error, code } para responder tal cual. El personal (profes,
 * admin) no pasa por el filtro de preparación para poder revisar el examen.
 */
export async function assertCanStartRealAttempt({ pool, userId, level, module, userLevel, isStaff = false }) {
  const declaredLevel = String(level || '').toUpperCase()
  const currentLevel = String(userLevel || 'A1').toUpperCase()
  if (!isStaff && declaredLevel !== currentLevel) {
    return {
      status: 403,
      error: `Solo puedes rendir el examen real de tu nivel actual (${currentLevel}). Cambia de nivel antes de intentar ${declaredLevel}.`,
    }
  }

  if (!isStaff) {
    const best = await bestSimulationPct({ pool, userId, level: declaredLevel, module })
    if (best == null || best < READINESS_MIN_SIM_PCT) {
      return {
        status: 403,
        code: 'not_ready',
        error: best == null
          ? `Antes del examen real, haz el simulacro de este módulo y consigue al menos un ${READINESS_MIN_SIM_PCT} %.`
          : `Tu mejor simulacro en este módulo es ${best} %. Necesitas al menos un ${READINESS_MIN_SIM_PCT} % para desbloquear el examen real.`,
      }
    }
  }

  // Cooldown: 24 h desde el último intento real (empezado o terminado)
  const [recent] = await pool.query(
    `SELECT id, startedAt
       FROM schule_pruefungen_attempts
      WHERE userId = ? AND level = ? AND module = ? AND mode = 'real'
        AND startedAt > DATE_SUB(NOW(), INTERVAL ? HOUR)
      ORDER BY startedAt DESC
      LIMIT 1`,
    [userId, declaredLevel, module, REAL_ATTEMPT_COOLDOWN_HOURS]
  )
  if (recent.length > 0) {
    return {
      status: 429,
      error: 'Debes esperar 24 h entre intentos reales del mismo módulo. Puedes hacer un simulacro mientras tanto.',
      code: 'cooldown_active',
    }
  }

  // Máximo de intentos terminados por módulo
  const [finished] = await pool.query(
    `SELECT COUNT(*) AS n
       FROM schule_pruefungen_attempts
      WHERE userId = ? AND level = ? AND module = ?
        AND mode = 'real' AND finishedAt IS NOT NULL`,
    [userId, declaredLevel, module]
  )
  if ((finished[0]?.n || 0) >= REAL_ATTEMPT_LIFETIME_CAP) {
    return {
      status: 403,
      error: `Alcanzaste el máximo de ${REAL_ATTEMPT_LIFETIME_CAP} intentos reales para este módulo. Contacta con la academia si necesitas una excepción.`,
      code: 'lifetime_cap_reached',
    }
  }

  return null
}

// Mejor simulacro terminado del alumno en un módulo (o null si no hay).
export async function bestSimulationPct({ pool, userId, level, module }) {
  const [rows] = await pool.query(
    `SELECT MAX(score / NULLIF(maxScore, 0) * 100) AS bestPct
       FROM schule_pruefungen_attempts
      WHERE userId = ? AND level = ? AND module = ? AND mode = 'simulation'
        AND finishedAt IS NOT NULL AND maxScore > 0`,
    [userId, String(level).toUpperCase(), module]
  )
  const v = rows[0]?.bestPct
  return v == null ? null : Math.round(Number(v))
}

/** ¿Sigue el intento dentro del tiempo permitido (duración + gracia)? */
export function withinTimeLimit(attemptRow, spec) {
  const started = new Date(attemptRow.startedAt).getTime()
  const elapsed = Math.max(0, (Date.now() - started) / 1000)
  const limit = ((spec?.durationMinutes || 999) * 60) + REAL_DURATION_GRACE_SECONDS
  return elapsed <= limit
}
