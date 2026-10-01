/**
 * Deutsch A2 — SPRECHEN · Prüfung (pool «real»)
 *
 * Gleiche Struktur wie der Übungssatz (Modellsatz 1):
 *   Teil 1: Persönliche Fragen beantworten
 *           30 Sekunden Vorbereitung, bis zu 90 Sekunden Sprechzeit · 25 Punkte
 *   Teil 2: Über ein Alltagsthema erzählen
 *           45 Sekunden Vorbereitung, bis zu 120 Sekunden Sprechzeit · 25 Punkte
 *
 * 8 Minuten, max. 50 Punkte. Bestanden ab 30/50.
 * Beide Aufgaben sind neu und kommen im Übungssatz nicht vor.
 */

export const realA2SprechenExams = [
  {
    id: 'real-a2-sprechen-1',
    provider: 'goethe',
    level: 'A2',
    module: 'sprechen',
    pool: 'real',
    title: 'Deutsch A2 — Sprechen · Prüfung',
    description: 'Fragen zur Person beantworten und von einem Fest erzählen.',
    durationMinutes: 8,
    maxScore: 50,
    passScore: 30,
    parts: [
      {
        id: 'teil-1',
        title: 'Teil 1 — Über sich sprechen',
        kind: 'speaking-task',
        instructions:
          'Beantworte die Fragen über dich. Du hast 30 Sekunden Vorbereitungszeit und bis zu 90 Sekunden zum Sprechen.',
        taskType: 'Monolog: Persönliche Fragen',
        taskPrompt:
          'Beantworte die folgenden Fragen ausführlich:',
        bullets: [
          'Woher kommst du? Wie ist deine Heimatstadt?',
          'Wer gehört zu deiner Familie?',
          'Wie kommst du zur Arbeit, zur Schule oder zur Universität?',
          'Was isst und trinkst du gern?',
          'Seit wann lernst du Deutsch und warum?',
        ],
        preparationSeconds: 30,
        maxRecordSeconds: 90,
        maxScore: 25,
      },
      {
        id: 'teil-2',
        title: 'Teil 2 — Aus dem Alltag erzählen',
        kind: 'speaking-task',
        instructions:
          'Sprich über das vorgegebene Thema. Du hast 45 Sekunden Vorbereitungszeit und bis zu 120 Sekunden zum Sprechen.',
        taskType: 'Monolog: Alltagsthema',
        taskPrompt:
          'Thema: „Ein schönes Fest“. Erzähle ausführlich von einem Fest, das du gefeiert hast (zum Beispiel ein Geburtstag oder eine Hochzeit). Gehe dabei auf folgende Punkte ein:',
        bullets: [
          'Welches Fest war das?',
          'Wo habt ihr gefeiert?',
          'Wer war dabei?',
          'Was habt ihr gegessen und getrunken?',
          'Was hat dir besonders gut gefallen? Warum?',
        ],
        preparationSeconds: 45,
        maxRecordSeconds: 120,
        maxScore: 25,
      },
    ],
  },
]
