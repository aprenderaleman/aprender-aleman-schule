/**
 * Learning Path — predetermined ordered route of exercises per level.
 *
 * Pattern: blocks of 5 by skill type, rotating in a fixed order so the
 * student never does too many of the same type in a row.
 *
 *   Block 1: 5 grammar
 *   Block 2: 5 reading
 *   Block 3: 5 listening
 *   Block 4: 5 writing
 *   Block 5: 5 speaking
 *   Block 6: next 5 grammar  (etc.)
 *
 * The path keeps consuming exercises in this rotation until every exercise
 * of the level is included. If a type runs out before others, the rotation
 * skips it and continues with what's left.
 *
 * Each level has its own independent path. Path is deterministic given the
 * EXERCISES catalog — same input → same order, every render.
 */

import { EXERCISES, LEVELS } from './exercises'

const BLOCK_SIZE = 5
const TYPE_ORDER = ['grammar', 'reading', 'listening', 'writing', 'speaking']

function buildPathForLevel(level) {
  // Group exercises by type, preserving catalog order within each type
  const buckets = Object.fromEntries(TYPE_ORDER.map(t => [t, []]))
  for (const ex of EXERCISES) {
    if (ex.level !== level) continue
    if (!buckets[ex.type]) continue
    buckets[ex.type].push(ex)
  }

  const path = []
  // Keep cycling through types, taking BLOCK_SIZE of each, until all empty
  let safety = 0
  while (TYPE_ORDER.some(t => buckets[t].length > 0)) {
    for (const type of TYPE_ORDER) {
      const bucket = buckets[type]
      if (bucket.length === 0) continue
      const block = bucket.splice(0, BLOCK_SIZE)
      path.push(...block)
    }
    if (++safety > 50) break // shouldn't happen, paranoid guard
  }

  return path.map((ex, idx) => ({
    id: ex.id,
    type: ex.type,
    title: ex.title,
    xp: ex.xp,
    unit: ex.unit,
    index: idx,
    level,
  }))
}

// Pre-compute every level's path once at module load
export const LEVEL_PATHS = Object.fromEntries(
  LEVELS.map(level => [level, buildPathForLevel(level)])
)

/**
 * Returns the path for the given level, or [] if level is unknown.
 */
export function getPath(level) {
  return LEVEL_PATHS[level] || []
}

/**
 * Given a list of completedExerciseIds, return the next un-done node in the
 * path for the user's level — the one they should tackle next. Returns null
 * if the entire path is complete.
 */
export function getNextNode(level, completedIds) {
  const set = new Set(completedIds || [])
  const path = getPath(level)
  return path.find(node => !set.has(node.id)) || null
}

/**
 * Per-level progress summary for the user.
 */
export function getLevelProgress(level, completedIds) {
  const path = getPath(level)
  const set = new Set(completedIds || [])
  const done = path.filter(n => set.has(n.id)).length
  const total = path.length
  const pct = total === 0 ? 0 : Math.round((done / total) * 100)
  return { done, total, pct, complete: done === total && total > 0 }
}

/**
 * Milestones along the path. Currently 25/50/75/100% checkpoints with bonus
 * XP — purely informational here, awarded server-side later.
 */
export function getMilestones(level) {
  const total = getPath(level).length
  if (total === 0) return []
  return [
    { at: Math.ceil(total * 0.25), label: '25%', bonusXP: 100 },
    { at: Math.ceil(total * 0.50), label: '50%', bonusXP: 200 },
    { at: Math.ceil(total * 0.75), label: '75%', bonusXP: 300 },
    { at: total,                    label: '100%', bonusXP: 500 },
  ]
}
