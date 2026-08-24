// Deutsch B2 — Kursgerüst (preparación del Goethe-Zertifikat B2).
//
// Estructura definida por Gelfis en curso-b2.html (2026-08-24): 42 lecciones
// en 5 bloques. La lección modelo es la 04 (Konnektoren I).
//
// Formato del examen implícito en los títulos del bloque 2 — al redactarlo,
// verificar contra el Modellsatz oficial y fijar el canon en la lección 1:
// Lesen 5 Teile · Hören 4 Teile · Schreiben 2 Teile (Forumsbeitrag +
// formelle Nachricht) · Sprechen 2 Teile (Vortrag + Diskussion) · CBT.

export const B2_BLOCKS = [
  { n: '0', name: 'Einführung',               range: [1, 3] },
  { n: '1', name: 'Grammatik & Struktur',     range: [4, 17] },
  { n: '2', name: 'Prüfungsstrategie',        range: [18, 32] },
  { n: '3', name: 'Themenfelder & Wortschatz', range: [33, 40] },
  { n: '4', name: 'Prüfungssimulation',       range: [41, 42] },
]

// Índice 0 = lección 1. El orden ES el id.
export const B2_TITLES = [
  'Das Goethe-Zertifikat B2 im Überblick',
  'Das digitale Prüfungsformat (CBT)',
  'Diagnose B2 — Standortbestimmung',
  'Konnektoren I — Grund, Einräumung, Folge',
  'Konnektoren II — final, temporal, konditional',
  'Zweiteilige Konnektoren',
  'Konjunktiv II — irreale Bedingungen & Wünsche',
  'Konjunktiv II der Vergangenheit',
  'Konjunktiv I — indirekte Rede',
  'Vorgangs- & Zustandspassiv',
  'Passiv mit Modalverben & Passiversatzformen',
  'Relativsätze komplex',
  'Adjektivdeklination & Partizip als Attribut',
  'Infinitivsätze mit zu',
  'Verben mit Präpositionen & Präpositionaladverbien',
  'Nominalisierung ↔ Verbalisierung',
  'Präpositionen mit Genitiv',
  'Modul Lesen — Überblick',
  'Lesen: Artikel & Detailverständnis (Teil 1–2)',
  'Lesen: Meinungen zuordnen (Teil 3)',
  'Lesen: Kommentar & Standpunkt (Teil 4)',
  'Lesen: formeller Regeltext (Teil 5)',
  'Modul Hören — Überblick',
  'Hören: Gespräche & Ansagen (Teil 1)',
  'Hören: Interview & Diskussion (Teil 2–3)',
  'Hören: Vortrag (Teil 4)',
  'Modul Schreiben — Überblick & Bewertung',
  'Schreiben Teil 1 — Forumsbeitrag',
  'Schreiben Teil 2 — Formelle Nachricht',
  'Modul Sprechen — Überblick & Bewertung',
  'Sprechen Teil 1 — Vortrag + Nachfragen',
  'Sprechen Teil 2 — Diskussion mit dem Partner',
  'Arbeit & Beruf',
  'Bildung & Studium',
  'Umwelt & Nachhaltigkeit',
  'Gesundheit & Ernährung',
  'Medien & Digitalisierung',
  'Wohnen & Zusammenleben',
  'Konsum & Geld',
  'Reisen & Mobilität',
  'Prüfungssimulation 1 + Korrektur',
  'Prüfungssimulation 2 + Strategien',
]

export const B2_LESSON_COUNT = B2_TITLES.length

export function blockOf(id) {
  return B2_BLOCKS.find(b => id >= b.range[0] && id <= b.range[1]) || null
}
