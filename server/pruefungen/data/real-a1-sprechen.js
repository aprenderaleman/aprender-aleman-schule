/**
 * Deutsch A1 — SPRECHEN · Prüfung (pool «real»)
 *
 * Gleiche Struktur wie der Übungssatz (Modellsatz 1):
 *   Teil 1: Monolog mit sechs Stichwörtern
 *           30 Sekunden Vorbereitung, bis zu 90 Sekunden Sprechzeit · 25 Punkte
 *
 * 5 Minuten, max. 25 Punkte. Bestanden ab 15/25.
 * Die Aufgabe ist neu und kommt im Übungssatz nicht vor.
 */

export const realA1SprechenExams = [
  {
    id: 'real-a1-sprechen-1',
    provider: 'goethe',
    level: 'A1',
    module: 'sprechen',
    pool: 'real',
    title: 'Deutsch A1 — Sprechen · Prüfung',
    description: 'Erzähle auf Deutsch von dir und deinem Alltag — die Aussprache wird nicht automatisch bewertet.',
    durationMinutes: 5,
    maxScore: 25,
    passScore: 15,
    parts: [
      {
        id: 'teil-1',
        title: 'Teil 1 — Von sich erzählen',
        kind: 'speaking-task',
        instructions:
          'Erzähle auf Deutsch von dir und deinem Alltag. Sprich frei und in vollständigen Sätzen. Du hast 30 Sekunden Vorbereitungszeit und bis zu 90 Sekunden zum Sprechen.',
        taskType: 'Monolog: Familie und Alltag',
        taskPrompt:
          'Erzähle von dir. Sprich über deine Familie, deine Wohnung, deinen Tag, Essen und Trinken, dein Wochenende und das Deutschlernen.',
        bullets: [
          'Familie',
          'Wohnung oder Haus',
          'Mein Tag (Arbeit / Schule)',
          'Essen und Trinken',
          'Wochenende',
          'Deutsch lernen',
        ],
        preparationSeconds: 30,
        maxRecordSeconds: 90,
        maxScore: 25,
      },
    ],
  },
]
