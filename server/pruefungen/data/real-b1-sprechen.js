/**
 * Deutsch B1 — Sprechen · Prüfung (Pool «real»)
 *
 * Gleiche Struktur wie der Modellsatz (kompakte monologische Version):
 *   Teil 1: Präsentation
 *   Teil 2: Stellungnahme
 */

export const realB1SprechenExams = [
  {
    id: 'real-b1-sprechen-1',
    provider: 'goethe',
    level: 'B1',
    module: 'sprechen',
    pool: 'real',
    title: 'Deutsch B1 — Sprechen · Prüfung',
    description: 'Kurze Präsentation und Stellungnahme zu einem Vorschlag.',
    durationMinutes: 10,
    maxScore: 50,
    passScore: 30,
    parts: [
      {
        id: 'teil-1',
        title: 'Teil 1 — Präsentation',
        kind: 'speaking-task',
        instructions:
          'Halte eine kleine Präsentation zu dem Thema. Du hast 60 Sekunden Vorbereitungszeit und bis zu 3 Minuten zum Sprechen.',
        taskType: 'Monolog: Präsentation',
        taskPrompt:
          'Präsentation zum Thema „Haustiere in der Stadt“. Gliedere deinen Vortrag in Einleitung, Hauptteil und Schluss. Sprich dabei über folgende Punkte:',
        bullets: [
          'Nenne dein Thema und sage kurz, worüber du sprechen wirst.',
          'Berichte von eigenen Erfahrungen mit Haustieren (bei dir, in deiner Familie oder bei Freunden).',
          'Nenne Vorteile und Nachteile von Haustieren in der Stadt.',
          'Erzähle, welche Rolle Haustiere in deinem Heimatland spielen.',
          'Sage zum Schluss, was du selbst über das Thema denkst.',
        ],
        preparationSeconds: 60,
        maxRecordSeconds: 180,
        maxScore: 25,
      },
      {
        id: 'teil-2',
        title: 'Teil 2 — Stellungnahme',
        kind: 'speaking-task',
        instructions:
          'Nimm zu dem folgenden Vorschlag Stellung. Du hast 45 Sekunden Vorbereitungszeit und bis zu 2 Minuten zum Sprechen.',
        taskType: 'Monolog: Stellungnahme',
        taskPrompt:
          'Vorschlag: „Supermärkte sollten Obst und Gemüse nur noch ohne Plastikverpackung verkaufen.“ Wie findest du diese Idee? Begründe deine Meinung.',
        bullets: [
          'Sage, ob du den Vorschlag gut oder schlecht findest.',
          'Begründe deine Meinung mit zwei Argumenten.',
          'Erzähle von einer eigenen Erfahrung beim Einkaufen.',
          'Berichte, wie man in deinem Heimatland mit Verpackungen umgeht.',
          'Fasse am Ende deine Meinung in einem Satz zusammen.',
        ],
        preparationSeconds: 45,
        maxRecordSeconds: 120,
        maxScore: 25,
      },
    ],
  },
]
