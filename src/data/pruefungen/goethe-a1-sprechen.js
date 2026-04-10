/**
 * Goethe-Zertifikat A1 — Sprechen
 *
 * Offiziell: 3 Teile, ~15 min, Paarprüfung.
 *   Teil 1: Sich vorstellen
 *   Teil 2: Informationen erfragen und geben
 *   Teil 3: Bitten formulieren und reagieren
 *
 * Unsere Version (kompakt, monologisch): 1 Aufgabe „Sich vorstellen".
 * Weitere Aufgaben können später ergänzt werden.
 */

export const goetheA1SprechenExams = [
  {
    id: 'goethe-a1-sprechen-modellsatz-1',
    provider: 'goethe',
    level: 'A1',
    module: 'sprechen',
    title: 'Goethe A1 — Sprechen · Modellsatz 1',
    description: 'Stelle dich auf Deutsch vor — Aussprache nicht automatisch bewertet.',
    durationMinutes: 5,
    maxScore: 25,
    passScore: 15,
    parts: [
      {
        id: 'teil-1',
        title: 'Teil 1 — Sich vorstellen',
        kind: 'speaking-task',
        instructions:
          'Stelle dich auf Deutsch vor. Sprich frei und vollständige Sätze. Du hast 30 Sekunden Vorbereitungszeit und bis zu 90 Sekunden zum Sprechen.',
        taskType: 'Monolog: Selbstvorstellung',
        taskPrompt:
          'Stelle dich vor. Sprich über deinen Namen, dein Alter, dein Land, deine Sprachen, deinen Beruf und deine Hobbys.',
        bullets: [
          'Name',
          'Alter',
          'Land / Wohnort',
          'Sprachen',
          'Beruf oder Studium',
          'Hobbys',
        ],
        preparationSeconds: 30,
        maxRecordSeconds: 90,
        maxScore: 25,
      },
    ],
  },
]
