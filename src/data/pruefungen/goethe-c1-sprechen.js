/**
 * Goethe-Zertifikat C1 — Sprechen
 *
 * Offiziell: 2 Teile, ~15 min, Paarprüfung.
 *   Teil 1: Vortrag aus mehreren Quellen (~4 min)
 *   Teil 2: Diskussion / Aushandeln
 *
 * Kompakte monologische Version: Vortrag mit Materialien + Stellungnahme.
 */

export const goetheC1SprechenExams = [
  {
    id: 'goethe-c1-sprechen-modellsatz-1',
    provider: 'goethe',
    level: 'C1',
    module: 'sprechen',
    title: 'Goethe C1 — Sprechen · Modellsatz 1',
    description: 'Anspruchsvoller Vortrag und Diskussionsbeitrag.',
    durationMinutes: 15,
    maxScore: 50,
    passScore: 30,
    parts: [
      {
        id: 'teil-1',
        title: 'Teil 1 — Vortrag',
        kind: 'speaking-task',
        instructions:
          'Halte einen strukturierten Vortrag zum Thema. Du hast 2 Minuten Vorbereitungszeit und bis zu 4 Minuten zum Sprechen.',
        taskType: 'Monolog: Vortrag (C1)',
        taskPrompt:
          'Thema: „Lebenslanges Lernen — Chance oder Druck?" Halte einen gut strukturierten Vortrag, in dem du verschiedene Perspektiven berücksichtigst und einen begründeten Standpunkt entwickelst.',
        bullets: [
          'Führe das Thema ein und erläutere seine gesellschaftliche Relevanz.',
          'Beleuchte mindestens zwei kontrastierende Perspektiven (z. B. berufliche Notwendigkeit vs. persönliche Bereicherung).',
          'Stelle ein konkretes Beispiel oder eine Fallgeschichte vor.',
          'Gehe auf mögliche Gegenargumente ein.',
          'Schließe mit einer pointierten persönlichen Position.',
        ],
        preparationSeconds: 120,
        maxRecordSeconds: 240,
        maxScore: 25,
      },
      {
        id: 'teil-2',
        title: 'Teil 2 — Diskussionsbeitrag',
        kind: 'speaking-task',
        instructions:
          'Reagiere differenziert auf die folgende These. Du hast 60 Sekunden Vorbereitungszeit und bis zu 3 Minuten zum Sprechen.',
        taskType: 'Monolog: Diskussionsbeitrag (C1)',
        taskPrompt:
          'These: „Homeoffice ist langfristig schlecht für Karriere und Teamgeist." Nimm differenziert Stellung und reagiere auf mögliche Gegenargumente.',
        bullets: [
          'Formuliere deine Position klar und nuanciert.',
          'Nenne mindestens zwei begründete Argumente.',
          'Greife ein mögliches Gegenargument auf und entkräfte es.',
          'Verweise auf eine konkrete Erfahrung oder Studie.',
          'Schließe mit einem überzeugenden Fazit.',
        ],
        preparationSeconds: 60,
        maxRecordSeconds: 180,
        maxScore: 25,
      },
    ],
  },
]
