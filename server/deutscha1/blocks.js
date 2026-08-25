// Deutsch A1 — Kursgerüst (preparación del examen A1).
//
// Estructura definida por Gelfis en curso-a1.html (2026-08-25): 37 lecciones
// en 5 bloques. La lección modelo es la 04 (Personalpronomen & sein).

export const A1_BLOCKS = [
  { n: '0', name: 'Einführung',                 range: [1, 3] },
  { n: '1', name: 'Grammatik & Struktur',       range: [4, 16] },
  { n: '2', name: 'Prüfungsstrategie',          range: [17, 29] },
  { n: '3', name: 'Themenfelder & Wortschatz',  range: [30, 35] },
  { n: '4', name: 'Prüfungssimulation',         range: [36, 37] },
]

// Índice 0 = lección 1. El orden ES el id.
export const A1_TITLES = [
  'Das Zertifikat A1 im Überblick',
  'Prüfungsformat & Antwortbogen',
  'Diagnose A1 — Standortbestimmung',
  'Personalpronomen & das Verb „sein“',
  '„haben“ & Präsens regelmäßiger Verben',
  'Unregelmäßige Verben',
  'W-Fragen & Ja/Nein-Fragen',
  'Artikel & Genus (der/die/das)',
  'Der Akkusativ (den/einen)',
  'Negation — nicht & kein',
  'Possessivartikel',
  'Modalverben — können, möchten, müssen',
  'Trennbare Verben',
  'Imperativ',
  'Plural der Nomen',
  'Zahlen, Uhrzeit & Datum',
  'Modul Hören — Überblick',
  'Hören: Gespräche & Ansagen',
  'Hören: Durchsagen',
  'Modul Lesen — Überblick',
  'Lesen: Notizen & Anzeigen',
  'Lesen: Schilder & Aushänge',
  'Modul Schreiben — Überblick',
  'Schreiben Teil 1 — Formular ausfüllen',
  'Schreiben Teil 2 — Kurzer persönlicher Text',
  'Modul Sprechen — Überblick',
  'Sprechen Teil 1 — Sich vorstellen',
  'Sprechen Teil 2 — Fragen stellen & antworten',
  'Sprechen Teil 3 — Bitten formulieren',
  'Persönliche Angaben & Familie',
  'Zahlen, Zeit & Termine',
  'Essen & Einkaufen',
  'Wohnung & Möbel',
  'Tagesablauf & Hobbys',
  'Beruf & Alltag',
  'Prüfungssimulation 1 + Korrektur',
  'Prüfungssimulation 2 + Strategien',
]

export const A1_LESSON_COUNT = A1_TITLES.length

export function blockOf(id) {
  return A1_BLOCKS.find(b => id >= b.range[0] && id <= b.range[1]) || null
}
