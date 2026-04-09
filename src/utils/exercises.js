import { A1_EXERCISES } from '../data/a1.js'
import { A2_EXERCISES } from '../data/a2.js'
import { B1_EXERCISES } from '../data/b1.js'
import { B2_EXERCISES } from '../data/b2.js'
import { C1_EXERCISES } from '../data/c1.js'
import { A1_EXTRA_EXERCISES, A2_EXTRA_EXERCISES } from '../data/extra-reading-listening-writing.js'
import { B1_EXTRA_EXERCISES, B2_EXTRA_EXERCISES } from '../data/extra-b1b2.js'
import { C1_EXTRA_EXERCISES } from '../data/extra-c1.js'

export const EXERCISES = [
  ...A1_EXERCISES, ...A1_EXTRA_EXERCISES,
  ...A2_EXERCISES, ...A2_EXTRA_EXERCISES,
  ...B1_EXERCISES, ...B1_EXTRA_EXERCISES,
  ...B2_EXERCISES, ...B2_EXTRA_EXERCISES,
  ...C1_EXERCISES, ...C1_EXTRA_EXERCISES,
]

export function getExercisesByLevel(level) {
  return EXERCISES.filter(e => e.level === level)
}

export function getExercisesByType(type) {
  return EXERCISES.filter(e => e.type === type)
}

export function getExercisesByLevelAndType(level, type) {
  return EXERCISES.filter(e => e.level === level && e.type === type)
}

export function getExerciseById(id) {
  return EXERCISES.find(e => e.id === id)
}

export function getExercisesByUnit(level, unit) {
  return EXERCISES.filter(e => e.level === level && e.unit === unit)
}

export const LEVELS = ['A1', 'A2', 'B1', 'B2', 'C1']

export const EXERCISE_TYPES = [
  { key: 'grammar', label: 'Grammatik', icon: '📚', color: 'blue' },
  { key: 'reading', label: 'Lesen', icon: '📖', color: 'green' },
  { key: 'listening', label: 'Hören', icon: '🎧', color: 'purple' },
  { key: 'writing', label: 'Schreiben', icon: '✍️', color: 'pink' },
]
