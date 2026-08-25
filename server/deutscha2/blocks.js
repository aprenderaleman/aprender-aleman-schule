// Deutsch A2 — Kursgerüst (preparación del Goethe-Zertifikat A2).
//
// Estructura definida por Gelfis en curso-a2.html (2026-08-25): 40 lecciones
// en 5 bloques. La lección modelo es la 04 (Perfekt).

export const A2_BLOCKS = [
  { n: '0', name: 'Einführung',                 range: [1, 3] },
  { n: '1', name: 'Grammatik & Struktur',       range: [4, 17] },
  { n: '2', name: 'Prüfungsstrategie',          range: [18, 30] },
  { n: '3', name: 'Themenfelder & Wortschatz',  range: [31, 38] },
  { n: '4', name: 'Prüfungssimulation',         range: [39, 40] },
]

// Índice 0 = lección 1. El orden ES el id.
export const A2_TITLES = [
  'Das Goethe-Zertifikat A2 im Überblick',
  'Das digitale Prüfungsformat (CBT)',
  'Diagnose A2 — Standortbestimmung',
  'Perfekt — haben oder sein',
  'Präteritum — war, hatte, Modalverben',
  'Modalverben — können, müssen, wollen …',
  'Trennbare Verben',
  'Akkusativ & Akkusativpräpositionen',
  'Dativ & Dativpräpositionen',
  'Wechselpräpositionen — Wo? / Wohin?',
  'Possessivartikel',
  'Personalpronomen — Akkusativ & Dativ',
  'Komparativ & Superlativ',
  'Konnektoren — und, oder, aber, denn, deshalb',
  'Nebensätze — weil, dass, wenn',
  'Imperativ',
  'Reflexive Verben',
  'Modul Lesen — Überblick',
  'Lesen: Kurze Texte & E-Mails',
  'Lesen: Anzeigen zuordnen',
  'Modul Hören — Überblick',
  'Hören: Kurze Texte & Durchsagen',
  'Hören: Gespräche',
  'Modul Schreiben — Überblick & Bewertung',
  'Schreiben Teil 1 — Kurze Mitteilung',
  'Schreiben Teil 2 — E-Mail & Einladung',
  'Modul Sprechen — Überblick & Bewertung',
  'Sprechen Teil 1 — Fragen stellen & beantworten',
  'Sprechen Teil 2 — Von sich erzählen',
  'Sprechen Teil 3 — Gemeinsam etwas planen',
  'Familie & Freunde',
  'Wohnen & Möbel',
  'Essen & Einkaufen',
  'Arbeit & Beruf',
  'Freizeit & Hobbys',
  'Reisen & Verkehr',
  'Gesundheit & Körper',
  'Tagesablauf & Zeit',
  'Prüfungssimulation 1 + Korrektur',
  'Prüfungssimulation 2 + Strategien',
]

export const A2_LESSON_COUNT = A2_TITLES.length

export function blockOf(id) {
  return A2_BLOCKS.find(b => id >= b.range[0] && id <= b.range[1]) || null
}
