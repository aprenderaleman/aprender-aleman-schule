/**
 * Goethe-Zertifikat B1 — Sprechen
 *
 * Offiziell: 3 Teile, ~15 min, Paarprüfung.
 *   Teil 1: Gemeinsam etwas planen
 *   Teil 2: Ein Thema präsentieren
 *   Teil 3: Über ein Thema sprechen / Diskussion
 *
 * Kompakte monologische Version: Präsentation + Stellungnahme.
 */

export const goetheB1SprechenExams = [
  {
    id: 'goethe-b1-sprechen-modellsatz-1',
    provider: 'goethe',
    level: 'B1',
    module: 'sprechen',
    title: 'Goethe B1 — Sprechen · Modellsatz 1',
    description: 'Präsentation eines Themas und Stellungnahme.',
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
          'Präsentation zum Thema „Soziale Medien im Alltag". Strukturiere deinen Vortrag mit Einleitung, Hauptteil und Schluss. Gehe dabei auf folgende Punkte ein:',
        bullets: [
          'Stelle das Thema kurz vor.',
          'Erzähle von deinen persönlichen Erfahrungen mit sozialen Medien.',
          'Beschreibe Vorteile und Nachteile.',
          'Wie ist die Situation in deinem Heimatland?',
          'Schließe mit deiner persönlichen Meinung.',
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
          'Vorschlag: „Schüler sollten im Unterricht keine Smartphones benutzen dürfen." Was hältst du davon? Begründe deine Meinung.',
        bullets: [
          'Was denkst du über den Vorschlag?',
          'Nenne zwei Argumente dafür oder dagegen.',
          'Gib ein konkretes Beispiel aus deiner Erfahrung.',
          'Wie ist es in deinem Heimatland geregelt?',
          'Schließe mit einer klaren Position.',
        ],
        preparationSeconds: 45,
        maxRecordSeconds: 120,
        maxScore: 25,
      },
    ],
  },
]
