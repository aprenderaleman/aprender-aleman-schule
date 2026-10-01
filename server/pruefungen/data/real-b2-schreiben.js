/**
 * Deutsch B2 — Schreiben · Prüfung (Pool «real»)
 *
 * Gleiche Struktur wie der Modellsatz (2 Teile, 75 min):
 *   Teil 1: Forumsbeitrag mit Stellungnahme (~150 Wörter)
 *   Teil 2: Formelle Beschwerde-E-Mail (~100 Wörter)
 */

export const realB2SchreibenExams = [
  {
    id: 'real-b2-schreiben-1',
    provider: 'goethe',
    level: 'B2',
    module: 'schreiben',
    pool: 'real',
    title: 'Deutsch B2 — Schreiben · Prüfung',
    description: 'Forumsbeitrag mit Stellungnahme und formelle Beschwerde-E-Mail auf B2-Niveau.',
    durationMinutes: 75,
    maxScore: 50,
    passScore: 30,
    parts: [
      {
        id: 'teil-1',
        title: 'Teil 1 — Stellungnahme',
        kind: 'writing-task',
        instructions:
          'In einem Online-Forum wird darüber diskutiert, ob die Vier-Tage-Woche bei vollem Lohn für alle Beschäftigten eingeführt werden sollte. Schreibe einen Forumsbeitrag, in dem du deine Meinung äußerst und begründest. Schreibe etwa 150 Wörter.',
        taskType: 'Forumsbeitrag mit Stellungnahme',
        taskPrompt:
          'Schreibe einen Beitrag für das Forum „Arbeitswelt im Wandel“, in dem du Stellung zur Frage „Vier-Tage-Woche für alle?“ nimmst. Behandle alle Punkte ausführlich.',
        bullets: [
          'Lege dar, ob du die Vier-Tage-Woche befürwortest oder ablehnst.',
          'Begründe deine Haltung mit mindestens zwei Argumenten.',
          'Greife ein Argument der Gegenseite auf und widerlege es.',
          'Beende deinen Beitrag mit einem eigenen Vorschlag oder einem kurzen Ausblick.',
        ],
        minWords: 150,
        maxScore: 25,
      },
      {
        id: 'teil-2',
        title: 'Teil 2 — Formelle Beschwerde',
        kind: 'writing-task',
        instructions:
          'Du hast bei einem Reiseveranstalter eine einwöchige Städtereise nach Wien gebucht. Das Hotel entsprach nicht der Beschreibung im Katalog, und die Reiseleitung war vor Ort nicht erreichbar. Schreibe nach deiner Rückkehr eine formelle Beschwerde-E-Mail an den Reiseveranstalter. Schreibe etwa 100 Wörter.',
        taskType: 'Formelle Beschwerde-E-Mail',
        taskPrompt:
          'Schreibe eine Beschwerde-E-Mail an die Kundenbetreuung des Reiseveranstalters. Behandle alle Punkte und achte auf einen formellen Stil.',
        bullets: [
          'Nenne die wichtigsten Angaben zur Buchung (Reisezeitraum, Buchungsnummer, Reiseziel).',
          'Schildere, welche Mängel du im Hotel festgestellt hast.',
          'Berichte, was du vor Ort unternommen hast, um das Problem zu lösen.',
          'Verlange eine angemessene Entschädigung (z. B. eine teilweise Erstattung des Reisepreises).',
        ],
        minWords: 100,
        maxScore: 25,
      },
    ],
  },
]
