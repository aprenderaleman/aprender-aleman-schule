/**
 * Goethe-Zertifikat C2 — Sprechen
 *
 * Offiziell: 2 Teile, ~15 min.
 *   Teil 1: Vortrag zu einem komplexen Thema (~5–7 min)
 *   Teil 2: Diskussion / Aushandeln auf hohem Niveau
 *
 * Kompakte monologische Version: anspruchsvoller Vortrag.
 */

export const goetheC2SprechenExams = [
  {
    id: 'goethe-c2-sprechen-modellsatz-1',
    provider: 'goethe',
    level: 'C2',
    module: 'sprechen',
    title: 'Goethe C2 — Sprechen · Modellsatz 1',
    description: 'Komplexer Vortrag zu einem gesellschaftlich relevanten Thema.',
    durationMinutes: 15,
    maxScore: 50,
    passScore: 30,
    parts: [
      {
        id: 'teil-1',
        title: 'Teil 1 — Komplexer Vortrag',
        kind: 'speaking-task',
        instructions:
          'Halte einen anspruchsvollen, gut strukturierten Vortrag. Du hast 3 Minuten Vorbereitungszeit und bis zu 6 Minuten zum Sprechen.',
        taskType: 'Monolog: Komplexer Vortrag (C2)',
        taskPrompt:
          'Thema: „Künstliche Intelligenz und die Zukunft der Demokratie". Halte einen analytisch anspruchsvollen Vortrag mit klar erkennbarer Struktur, präziser Sprache und einem differenzierten Standpunkt.',
        bullets: [
          'Skizziere die aktuelle Relevanz des Themas (z. B. Deepfakes, algorithmische Öffentlichkeit, Wahlbeeinflussung).',
          'Beleuchte mindestens zwei gegensätzliche Perspektiven differenziert.',
          'Diskutiere ein konkretes Fallbeispiel oder eine aktuelle Entwicklung.',
          'Setze dich mit den stärksten Gegenargumenten auseinander.',
          'Schließe mit einer pointierten These und einem Aufruf zum Diskurs.',
        ],
        preparationSeconds: 180,
        maxRecordSeconds: 360,
        maxScore: 50,
      },
    ],
  },
]
