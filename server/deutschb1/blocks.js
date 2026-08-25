// Deutsch B1 — Kursgerüst (preparación del Goethe-Zertifikat B1).
//
// Estructura definida por Gelfis en curso-b1.html (2026-08-25): 43 lecciones
// en 5 bloques. La lección modelo es la 08 (Wechselpräpositionen).

export const B1_BLOCKS = [
  { n: '0', name: 'Einführung',                 range: [1, 3] },
  { n: '1', name: 'Grammatik & Struktur',       range: [4, 17] },
  { n: '2', name: 'Prüfungsstrategie',          range: [18, 33] },
  { n: '3', name: 'Themenfelder & Wortschatz',  range: [34, 41] },
  { n: '4', name: 'Prüfungssimulation',         range: [42, 43] },
]

// Índice 0 = lección 1. El orden ES el id.
export const B1_TITLES = [
  'Das Goethe-Zertifikat B1 im Überblick',
  'Das digitale Prüfungsformat (CBT)',
  'Diagnose B1 — Standortbestimmung',
  'Konnektoren I — weil, denn, deshalb',
  'Konnektoren II — obwohl, trotzdem, wenn, als',
  'Perfekt — haben oder sein',
  'Präteritum — war, hatte & Erzählform',
  'Wechselpräpositionen — Wo? / Wohin?',
  'Verben mit Präpositionen',
  'Adjektivdeklination',
  'Komparativ & Superlativ',
  'Relativsätze',
  'Konjunktiv II — höfliche Bitten & Wünsche',
  'Genitiv & Präpositionen mit Genitiv',
  'Passiv — Präsens & Präteritum',
  'Infinitiv mit zu / um … zu',
  'Reflexive Verben & Verben mit Kasus',
  'Modul Lesen — Überblick',
  'Lesen: Blogs & E-Mails (Teil 1)',
  'Lesen: Anzeigen zuordnen (Teil 2)',
  'Lesen: Meinungen & Kommentare (Teil 3)',
  'Lesen: Anweisungen & formelle Texte (Teil 4–5)',
  'Modul Hören — Überblick',
  'Hören: Durchsagen & kurze Texte (Teil 1–2)',
  'Hören: Gespräch & Diskussion (Teil 3–4)',
  'Modul Schreiben — Überblick & Bewertung',
  'Schreiben Teil 1 — Informelle E-Mail',
  'Schreiben Teil 2 — Forumsbeitrag (Meinung)',
  'Schreiben Teil 3 — Formelle E-Mail',
  'Modul Sprechen — Überblick & Bewertung',
  'Sprechen Teil 1 — Gemeinsam etwas planen',
  'Sprechen Teil 2 — Präsentation',
  'Sprechen Teil 3 — Feedback geben & Fragen',
  'Arbeit & Beruf',
  'Wohnen & Alltag',
  'Gesundheit & Körper',
  'Reisen & Verkehr',
  'Freizeit & Medien',
  'Bildung & Lernen',
  'Einkaufen & Konsum',
  'Umwelt & Natur',
  'Prüfungssimulation 1 + Korrektur',
  'Prüfungssimulation 2 + Strategien',
]

export const B1_LESSON_COUNT = B1_TITLES.length

export function blockOf(id) {
  return B1_BLOCKS.find(b => id >= b.range[0] && id <= b.range[1]) || null
}
