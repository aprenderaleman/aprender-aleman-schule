// Zertifikat C1 — Kursgerüst.
//
// Los 5 bloques y los 40 títulos del curso. Este archivo es la ÚNICA fuente
// de verdad del índice: el sidebar, el pager y el endpoint /api/deutschc1
// se derivan de aquí.
//
// Vive en server/ a propósito: el contenido del curso NO debe viajar en el
// bundle público de Vite (ver server/deutschc1/index.js).

export const C1_BLOCKS = [
  { n: '0', name: 'Einführung',                 range: [1, 2] },
  { n: '1', name: 'Sprachliche Konsolidierung', range: [3, 15] },
  { n: '2', name: 'Prüfungsstrategie',          range: [16, 28] },
  { n: '3', name: 'Themenfelder',               range: [29, 38] },
  { n: '4', name: 'Prüfungssimulation',         range: [39, 40] },
]

// Índice 0 = lección 1. El orden ES el id.
export const C1_TITLES = [
  'Das Zertifikat C1 im Überblick',
  'Diagnose C1 — Standortbestimmung',
  'Nominalstil vs. Verbalstil',
  'Das Passiv & Passiversatzformen',
  'Konjunktiv I — indirekte Rede',
  'Konjunktiv II — irreale Sätze',
  'Erweiterte Partizipialattribute',
  'Funktionsverbgefüge',
  'Präpositionen mit Genitiv',
  'Konnektoren der Schriftsprache',
  'Zweiteilige Konnektoren',
  'Relativsätze komplex',
  'Modalverben subjektiv',
  'Modalpartikeln',
  'Wortbildung & Kollokationen',
  'Modul Lesen — Überblick',
  'Lesen: Lückentext',
  'Lesen: Satzeinsetzung',
  'Lesen: Zuordnung Aussagen–Autoren',
  'Modul Hören — Überblick',
  'Hören: Podcast & Interview',
  'Hören: Diskussion & Vortrag',
  'Modul Schreiben — Überblick',
  'Schreiben Teil 1 — Diskussionsbeitrag',
  'Schreiben Teil 2 — Formelle Nachricht',
  'Modul Sprechen — Überblick',
  'Sprechen Teil 1 — Der Vortrag',
  'Sprechen Teil 2 — Die Diskussion',
  'Bildung & Ausbildung',
  'Umwelt & Klimawandel',
  'Digitalisierung & KI',
  'Arbeitswelt & Work-Life-Balance',
  'Medien & soziale Netzwerke',
  'Sprache & Gesellschaft',
  'Gesundheit & Ernährung',
  'Migration & Integration',
  'Wissenschaft & Forschung',
  'Globalisierung & Wirtschaft',
  'Prüfungssimulation 1 + Korrektur',
  'Prüfungssimulation 2 + Strategien',
]

export const C1_LESSON_COUNT = C1_TITLES.length

export function blockOf(id) {
  return C1_BLOCKS.find(b => id >= b.range[0] && id <= b.range[1]) || null
}

// Geschichten — lectura graduada (ids 91-95). La historia de María continúa
// de curso en curso; cada capítulo usa solo el vocabulario y la gramática de
// los bloques ya vistos (canon extraído de las lecciones).
export const C1_GESCHICHTEN = [
  { id: 91, titel: 'Geschichte 1 — Die Einladung nach München' },
  { id: 92, titel: 'Geschichte 2 — Alte Freunde, neue Fragen' },
  { id: 93, titel: 'Geschichte 3 — Das Manuskript' },
  { id: 94, titel: 'Geschichte 4 — Eine öffentliche Debatte' },
  { id: 95, titel: 'Geschichte 5 — Was bleibt' },
]
