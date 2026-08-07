// Reads every exam in src/data/pruefungen/ and writes a compact JSON at
// server/pruefungen-answers.json containing only the answer keys +
// durations + max scores. This is what the backend uses to score real
// exams server-side (see server/index.js — grading of mode='real').
//
// Run automatically before every `vite build` via the "prebuild" script
// in package.json, so the developer never needs to remember it.

import { PRUEFUNGEN_EXAMS } from '../src/data/pruefungen/index.js'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const OUT = path.resolve(__dirname, '..', 'server', 'pruefungen-answers.json')

function compactPart(part) {
  const out = { id: part.id, kind: part.kind || 'questions' }
  if (Array.isArray(part.questions)) {
    out.questions = part.questions.map(q => {
      if (q.type === 'matching') {
        return {
          id: q.id,
          type: 'matching',
          correct: q.correct,
          pointsPerItem: q.pointsPerItem || 1,
        }
      }
      return {
        id: q.id,
        type: q.type,
        correct: q.correct,
        points: q.points || 1,
      }
    })
  }
  if (Array.isArray(part.fields)) {
    out.fields = part.fields.map(f => ({
      id: f.id,
      expected: f.expected,
      points: f.points || 1,
    }))
  }
  // Speaking / writing parts have no correct answer — the AI grades them.
  if (part.kind === 'speaking-task' || part.kind === 'writing-task') {
    out.maxScore = part.maxScore || 25
    out.taskPrompt = part.taskPrompt || null
  }
  return out
}

const manifest = {}
for (const exam of PRUEFUNGEN_EXAMS) {
  manifest[exam.id] = {
    id: exam.id,
    level: exam.level,
    module: exam.module,
    maxScore: exam.maxScore,
    passScore: exam.passScore,
    durationMinutes: exam.durationMinutes || null,
    parts: (exam.parts || []).map(compactPart),
  }
}

fs.mkdirSync(path.dirname(OUT), { recursive: true })
fs.writeFileSync(OUT, JSON.stringify(manifest, null, 2))
console.log(`✓ pruefungen-answers.json: ${Object.keys(manifest).length} exams (${(fs.statSync(OUT).size / 1024).toFixed(1)} KB)`)
