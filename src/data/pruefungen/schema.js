/**
 * SCHEMA: Goethe Prüfungen content
 *
 * An "exam" is one full simulation for a specific level + module.
 * Each exam has multiple "parts" (Teil 1, Teil 2, ...) following the official Goethe structure.
 * Each part has multiple "questions" of a given type.
 *
 * --- Common shapes ---
 *
 * Exam = {
 *   id: string,                  // unique, e.g. "goethe-a1-lesen-01"
 *   provider: 'goethe',
 *   level: 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2',
 *   module: 'lesen' | 'hoeren' | 'schreiben' | 'sprechen',
 *   title: string,               // shown in card list, e.g. "Modellsatz 1"
 *   description?: string,
 *   durationMinutes: number,     // official time limit
 *   maxScore: number,            // total points possible (Goethe usually 25 per module on A1, scaled)
 *   passScore: number,           // 60% of maxScore
 *   parts: Part[],
 * }
 *
 * Part = {
 *   id: string,                  // e.g. "teil1"
 *   title: string,               // "Teil 1"
 *   instructions: string,        // German instructions shown to student
 *   questions: Question[],
 * }
 *
 * --- LESEN question types ---
 *
 * QuestionTrueFalse = {
 *   type: 'true-false',
 *   id: string,
 *   text?: string,               // the reading text (optional, if shared by part it's on Part.context)
 *   statement: string,           // the claim to evaluate
 *   correct: true | false,
 *   points: number,              // usually 1
 * }
 *
 * QuestionMultipleChoice = {
 *   type: 'multiple-choice',
 *   id: string,
 *   prompt: string,
 *   options: { id: 'a'|'b'|'c'|'d', text: string }[],
 *   correct: 'a'|'b'|'c'|'d',
 *   points: number,
 * }
 *
 * QuestionMatching = {
 *   type: 'matching',
 *   id: string,
 *   instructions?: string,
 *   items: { id: string, text: string }[],         // e.g. people / situations
 *   targets: { id: string, text: string }[],       // e.g. ads / texts (one extra is "x: keine Lösung")
 *   correct: { [itemId: string]: string },         // map item -> target
 *   pointsPerItem: number,
 * }
 *
 * --- HÖREN question types ---
 *
 * Same as Lesen plus:
 *
 * Part.audio = {
 *   url: string,                 // public URL or /audio/... in /public folder
 *   plays: 1 | 2,                // how many times student can play (per official rules)
 *   transcript?: string,         // hidden until after grading
 * }
 *
 * --- Lesen Part.context ---
 *
 * For Lesen Teil 1/2/3 etc. each part can carry shared text:
 *   Part.context = { type: 'text' | 'email' | 'ad' | 'multi-ads', content: string | string[] }
 */

export const QUESTION_TYPES = {
  TRUE_FALSE: 'true-false',
  MULTIPLE_CHOICE: 'multiple-choice',
  MATCHING: 'matching',
}

export const PASS_THRESHOLD = 0.6 // 60% to pass any module
