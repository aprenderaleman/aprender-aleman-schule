/**
 * Deutsch C1 — Sprechen · Prüfung (Pool «real»)
 *
 * Gleiche Struktur wie der Modellsatz (kompakte monologische Version):
 *   Teil 1: Vortrag
 *   Teil 2: Diskussionsbeitrag
 */

export const realC1SprechenExams = [
  {
    id: 'real-c1-sprechen-1',
    provider: 'goethe',
    level: 'C1',
    module: 'sprechen',
    pool: 'real',
    title: 'Deutsch C1 — Sprechen · Prüfung',
    description: 'Differenzierter Vortrag und Diskussionsbeitrag zu einer kontroversen These.',
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
          'Thema: „Mehrsprachigkeit in der Gesellschaft – Bereicherung oder Überforderung?“ Halte einen klar gegliederten Vortrag, in dem du unterschiedliche Sichtweisen einbeziehst und zu einem begründeten Standpunkt gelangst.',
        bullets: [
          'Leite das Thema ein und zeige auf, weshalb es für die heutige Gesellschaft von Bedeutung ist.',
          'Stelle mindestens zwei gegensätzliche Sichtweisen dar (z. B. kulturelle und wirtschaftliche Chancen vs. Anforderungen an Schule und Verwaltung).',
          'Veranschauliche deine Ausführungen anhand eines konkreten Beispiels oder Falls.',
          'Setze dich mit möglichen Einwänden auseinander.',
          'Runde den Vortrag mit einer klaren, zugespitzten eigenen Position ab.',
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
          'These: „Der Konsumverzicht des Einzelnen ist wirkungslos; nur strenge politische Vorgaben können die Umwelt schützen.“ Nimm differenziert Stellung und setze dich mit möglichen Gegenargumenten auseinander.',
        bullets: [
          'Lege deinen Standpunkt klar und differenziert dar.',
          'Führe mindestens zwei stichhaltige Argumente an.',
          'Nimm einen möglichen Einwand auf und widerlege ihn.',
          'Stütze dich auf eine eigene Beobachtung oder ein Forschungsergebnis.',
          'Beende deinen Beitrag mit einem prägnanten Schlusswort.',
        ],
        preparationSeconds: 60,
        maxRecordSeconds: 180,
        maxScore: 25,
      },
    ],
  },
]
