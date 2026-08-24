// Deutsch B2 — Kursgerüst (Goethe-Zertifikat B2).
//
// TEMARIO PROPUESTO, editable: cambiar un título aquí basta, ninguna lección
// lo referencia por texto. Misma estructura probada del C1: 5 bloques,
// 40 lecciones, estándar de 8 secciones (docs/deutschc1/FORMAT.md).
//
// ⚠ Antes de redactar el bloque 2 (Prüfungsstrategie): verificar los datos
// del formato del examen B2 contra el Modellsatz oficial del Goethe-Institut
// y fijar el canon (Teile, tiempos, recuentos de palabras) en la lección 1,
// como se hizo en el C1.

export const B2_BLOCKS = [
  { n: '0', name: 'Einführung',                 range: [1, 2] },
  { n: '1', name: 'Sprachliche Konsolidierung', range: [3, 15] },
  { n: '2', name: 'Prüfungsstrategie',          range: [16, 28] },
  { n: '3', name: 'Themenfelder',               range: [29, 38] },
  { n: '4', name: 'Prüfungssimulation',         range: [39, 40] },
]

// Índice 0 = lección 1. El orden ES el id.
export const B2_TITLES = [
  'Das Goethe-Zertifikat B2 im Überblick',
  'Diagnose B2 — Standortbestimmung',
  'Satzbau & Verbstellung im Überblick',
  'Das Passiv in allen Zeiten',
  'Konjunktiv II — höflich und irreal',
  'Indirekte Rede im Alltag',
  'Relativsätze sicher bilden',
  'Infinitiv mit zu & Verbergänzungen',
  'Verben mit Präpositionen',
  'Konnektoren: Grund, Folge, Gegensatz',
  'Zweiteilige Konnektoren',
  'Adjektivdeklination kompakt',
  'Partizipien als Adjektive',
  'Nomen-Verb-Verbindungen — Einstieg',
  'Wortbildung & Wortfamilien',
  'Modul Lesen — Überblick',
  'Lesen: Meinungen zuordnen',
  'Lesen: Detailverstehen',
  'Lesen: Anzeigen & Alltagstexte',
  'Modul Hören — Überblick',
  'Hören: Gespräche & Interviews',
  'Hören: Vorträge & Diskussionen',
  'Modul Schreiben — Überblick',
  'Schreiben Teil 1 — Forumsbeitrag',
  'Schreiben Teil 2 — Formelle Nachricht',
  'Modul Sprechen — Überblick',
  'Sprechen Teil 1 — Der Vortrag',
  'Sprechen Teil 2 — Die Diskussion',
  'Wohnen & Zusammenleben',
  'Reisen & Mobilität',
  'Konsum & Werbung',
  'Arbeit & Beruf',
  'Lernen & Weiterbildung',
  'Gesundheit & Sport',
  'Digitale Welt & Medien',
  'Umwelt & Nachhaltigkeit',
  'Kultur & Freizeit',
  'Gesellschaft & Ehrenamt',
  'Prüfungssimulation 1 + Korrektur',
  'Prüfungssimulation 2 + Strategien',
]

export const B2_LESSON_COUNT = B2_TITLES.length

export function blockOf(id) {
  return B2_BLOCKS.find(b => id >= b.range[0] && id <= b.range[1]) || null
}
