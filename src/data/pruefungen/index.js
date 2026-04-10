import { goetheA1LesenExams } from './goethe-a1-lesen'
import { goetheA1HoerenExams } from './goethe-a1-hoeren'

/**
 * Master index of all Prüfungen exams.
 * To add a new module/level, import the array and append below.
 */
export const PRUEFUNGEN_EXAMS = [
  ...goetheA1LesenExams,
  ...goetheA1HoerenExams,
]

/** Group exams by level + module for quick lookup. */
export function getExamsFor(level, module) {
  return PRUEFUNGEN_EXAMS.filter(e => e.level === level && e.module === module)
}

/** Get a single exam by id, or null. */
export function getExamById(id) {
  return PRUEFUNGEN_EXAMS.find(e => e.id === id) || null
}

/** Returns true if any content exists for that level + module. */
export function hasContent(level, module) {
  return PRUEFUNGEN_EXAMS.some(e => e.level === level && e.module === module)
}

/** Counts available exams per module for a given level. */
export function countsByModule(level) {
  const counts = { lesen: 0, hoeren: 0, schreiben: 0, sprechen: 0 }
  for (const e of PRUEFUNGEN_EXAMS) {
    if (e.level === level) counts[e.module]++
  }
  return counts
}

/**
 * Compute total max score and a flat list of all answer keys for a Lesen/Hören exam.
 * Used by the player to score automatically.
 */
export function getAnswerKey(exam) {
  const key = []
  for (const part of exam.parts) {
    for (const q of part.questions) {
      if (q.type === 'matching') {
        key.push({ id: q.id, type: 'matching', correct: q.correct, pointsPerItem: q.pointsPerItem || 1 })
      } else {
        key.push({ id: q.id, type: q.type, correct: q.correct, points: q.points || 1 })
      }
    }
  }
  return key
}

/**
 * Score a Lesen/Hören submission.
 * responses = { questionId: answer }
 *   - true-false: answer is true|false
 *   - multiple-choice: answer is 'a'|'b'|'c'|'d'
 *   - matching: answer is { itemId: targetId }
 */
export function gradeObjectiveExam(exam, responses) {
  let score = 0
  let maxScore = 0
  const detail = []

  for (const part of exam.parts) {
    for (const q of part.questions) {
      const userAnswer = responses?.[q.id]

      if (q.type === 'matching') {
        const total = Object.keys(q.correct).length
        const pp = q.pointsPerItem || 1
        maxScore += total * pp
        let correctCount = 0
        const itemDetail = {}
        for (const itemId of Object.keys(q.correct)) {
          const ok = userAnswer && userAnswer[itemId] === q.correct[itemId]
          if (ok) {
            correctCount++
            score += pp
          }
          itemDetail[itemId] = { user: userAnswer?.[itemId] ?? null, correct: q.correct[itemId], ok }
        }
        detail.push({
          partId: part.id,
          questionId: q.id,
          type: 'matching',
          earned: correctCount * pp,
          possible: total * pp,
          items: itemDetail,
        })
      } else {
        const pts = q.points || 1
        maxScore += pts
        const ok = userAnswer === q.correct
        if (ok) score += pts
        detail.push({
          partId: part.id,
          questionId: q.id,
          type: q.type,
          user: userAnswer ?? null,
          correct: q.correct,
          ok,
          earned: ok ? pts : 0,
          possible: pts,
        })
      }
    }
  }

  const percentage = maxScore > 0 ? Math.round((score / maxScore) * 100) : 0
  const passed = percentage >= 60
  return { score, maxScore, percentage, passed, detail }
}
