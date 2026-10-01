/**
 * Deutsch B2 — Sprechen · Prüfung (Pool «real»)
 *
 * Gleiche Struktur wie der Modellsatz (kompakte monologische Version):
 *   Teil 1: Vortrag
 *   Teil 2: Diskussionsbeitrag
 */

export const realB2SprechenExams = [
  {
    id: 'real-b2-sprechen-1',
    provider: 'goethe',
    level: 'B2',
    module: 'sprechen',
    pool: 'real',
    title: 'Deutsch B2 — Sprechen · Prüfung',
    description: 'Strukturierter Vortrag und Diskussionsbeitrag zu einem gesellschaftlichen Thema.',
    durationMinutes: 12,
    maxScore: 50,
    passScore: 30,
    parts: [
      {
        id: 'teil-1',
        title: 'Teil 1 — Vortrag',
        kind: 'speaking-task',
        instructions:
          'Halte einen strukturierten Vortrag zum Thema. Du hast 90 Sekunden Vorbereitungszeit und bis zu 4 Minuten zum Sprechen.',
        taskType: 'Monolog: Vortrag',
        taskPrompt:
          'Vortrag zum Thema „Vor- und Nachteile des Einkaufens im Internet“. Gliedere deinen Vortrag deutlich (Einleitung, Hauptteil, Schluss). Gehe dabei auf folgende Punkte ein:',
        bullets: [
          'Leite das Thema ein und zeige, warum es heute viele Menschen betrifft.',
          'Erläutere mindestens zwei Vorteile und veranschauliche sie mit Beispielen.',
          'Erläutere mindestens zwei Nachteile und veranschauliche sie mit Beispielen.',
          'Berichte von deinen eigenen Gewohnheiten oder von der Situation in deinem Heimatland.',
          'Ziehe am Ende ein begründetes Fazit.',
        ],
        preparationSeconds: 90,
        maxRecordSeconds: 240,
        maxScore: 25,
      },
      {
        id: 'teil-2',
        title: 'Teil 2 — Diskussionsbeitrag',
        kind: 'speaking-task',
        instructions:
          'Reagiere auf den folgenden Diskussionspunkt. Du hast 60 Sekunden Vorbereitungszeit und bis zu 2,5 Minuten zum Sprechen.',
        taskType: 'Monolog: Diskussionsbeitrag',
        taskPrompt:
          'Diskussionspunkt: „Busse und Bahnen sollten in allen Städten kostenlos sein.“ Nimm Stellung und gehe auf mögliche Gegenargumente ein.',
        bullets: [
          'Stelle deinen Standpunkt knapp dar.',
          'Führe zwei überzeugende Argumente an.',
          'Gehe auf einen möglichen Einwand ein.',
          'Veranschauliche deine Meinung mit einem konkreten Beispiel.',
          'Beende deinen Beitrag mit einer klaren Empfehlung.',
        ],
        preparationSeconds: 60,
        maxRecordSeconds: 150,
        maxScore: 25,
      },
    ],
  },
]
