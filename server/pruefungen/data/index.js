import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { goetheA1LesenExams } from './goethe-a1-lesen.js'
import { goetheA1HoerenExams } from './goethe-a1-hoeren.js'
import { goetheA1SchreibenExams } from './goethe-a1-schreiben.js'
import { goetheA1SprechenExams } from './goethe-a1-sprechen.js'
import { goetheA2LesenExams } from './goethe-a2-lesen.js'
import { goetheA2HoerenExams } from './goethe-a2-hoeren.js'
import { goetheA2SchreibenExams } from './goethe-a2-schreiben.js'
import { goetheA2SprechenExams } from './goethe-a2-sprechen.js'
import { goetheB1LesenExams } from './goethe-b1-lesen.js'
import { goetheB1HoerenExams } from './goethe-b1-hoeren.js'
import { goetheB1SchreibenExams } from './goethe-b1-schreiben.js'
import { goetheB1SprechenExams } from './goethe-b1-sprechen.js'
import { goetheB2LesenExams } from './goethe-b2-lesen.js'
import { goetheB2HoerenExams } from './goethe-b2-hoeren.js'
import { goetheB2SchreibenExams } from './goethe-b2-schreiben.js'
import { goetheB2SprechenExams } from './goethe-b2-sprechen.js'
import { goetheC1LesenExams } from './goethe-c1-lesen.js'
import { goetheC1HoerenExams } from './goethe-c1-hoeren.js'
import { goetheC1SchreibenExams } from './goethe-c1-schreiben.js'
import { goetheC1SprechenExams } from './goethe-c1-sprechen.js'
import { goetheC2LesenExams } from './goethe-c2-lesen.js'
import { goetheC2HoerenExams } from './goethe-c2-hoeren.js'
import { goetheC2SchreibenExams } from './goethe-c2-schreiben.js'
import { goetheC2SprechenExams } from './goethe-c2-sprechen.js'

/**
 * Master index of all Prüfungen exams.
 * To add a new module/level, import the array and append below.
 */
export const PRUEFUNGEN_EXAMS = [
  ...goetheA1LesenExams,
  ...goetheA1HoerenExams,
  ...goetheA1SchreibenExams,
  ...goetheA1SprechenExams,
  ...goetheA2LesenExams,
  ...goetheA2HoerenExams,
  ...goetheA2SchreibenExams,
  ...goetheA2SprechenExams,
  ...goetheB1LesenExams,
  ...goetheB1HoerenExams,
  ...goetheB1SchreibenExams,
  ...goetheB1SprechenExams,
  ...goetheB2LesenExams,
  ...goetheB2HoerenExams,
  ...goetheB2SchreibenExams,
  ...goetheB2SprechenExams,
  ...goetheC1LesenExams,
  ...goetheC1HoerenExams,
  ...goetheC1SchreibenExams,
  ...goetheC1SprechenExams,
  ...goetheC2LesenExams,
  ...goetheC2HoerenExams,
  ...goetheC2SchreibenExams,
  ...goetheC2SprechenExams,
]

/** Group exams by level + module for quick lookup. */
// Pool «real»: cada real-<nivel>-<módulo>.js del directorio exporta un array
// con el examen real de ese módulo (preguntas que no salen en simulacros).
// Se descubren solos: añadir un archivo basta para publicarlo.
const DATA_DIR = path.dirname(fileURLToPath(import.meta.url))
for (const file of fs.readdirSync(DATA_DIR).filter(f => /^real-[a-c][12]-\w+\.js$/.test(f)).sort()) {
  const mod = await import(pathToFileURL(path.join(DATA_DIR, file)).href)
  for (const exams of Object.values(mod)) if (Array.isArray(exams)) PRUEFUNGEN_EXAMS.push(...exams)
}

export function getExamById(id) {
  return PRUEFUNGEN_EXAMS.find(e => e.id === id) || null
}
