/**
 * Goethe-Zertifikat A2 — Sprechen
 *
 * Offiziell: 3 Teile, ~15 min, Paarprüfung.
 *   Teil 1: Über sich sprechen (Fragen beantworten)
 *   Teil 2: Aus dem Alltag erzählen
 *   Teil 3: Etwas gemeinsam aushandeln
 *
 * Kompakte monologische Version: 2 Aufgaben.
 */

export const goetheA2SprechenExams = [
  {
    id: 'goethe-a2-sprechen-modellsatz-1',
    provider: 'goethe',
    level: 'A2',
    module: 'sprechen',
    title: 'Goethe A2 — Sprechen · Modellsatz 1',
    description: 'Über sich sprechen und aus dem Alltag erzählen.',
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
          'Wie heißt du und wie alt bist du?',
          'Wo wohnst du und wie wohnst du (Wohnung/Haus, mit wem)?',
          'Was machst du beruflich oder was studierst du?',
          'Welche Sprachen sprichst du?',
          'Was machst du gern in deiner Freizeit?',
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
          'Erzähle über das vorgegebene Thema. Du hast 45 Sekunden Vorbereitungszeit und bis zu 120 Sekunden zum Sprechen.',
        taskType: 'Monolog: Alltagsthema',
        taskPrompt:
          'Thema: „Mein letzter Urlaub". Erzähle ausführlich darüber. Gehe dabei auf folgende Punkte ein:',
        bullets: [
          'Wohin bist du gefahren?',
          'Mit wem warst du dort?',
          'Wie lange warst du dort?',
          'Was hast du gemacht?',
          'Hat es dir gefallen? Warum (nicht)?',
        ],
        preparationSeconds: 45,
        maxRecordSeconds: 120,
        maxScore: 25,
      },
    ],
  },
]
