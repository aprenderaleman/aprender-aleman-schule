/**
 * Goethe-Zertifikat B1 — Schreiben
 *
 * Official structure (3 Teile, 60 min, max 100 Punkte, pass = 60):
 *   Teil 1: Persönliche E-Mail (~80 Wörter)
 *   Teil 2: Forumsbeitrag / Meinungstext (~80 Wörter)
 *   Teil 3: Halbformelle Mitteilung (~40 Wörter)
 */

export const goetheB1SchreibenExams = [
  {
    id: 'goethe-b1-schreiben-modellsatz-1',
    provider: 'goethe',
    level: 'B1',
    module: 'schreiben',
    title: 'Goethe B1 — Schreiben · Modellsatz 1',
    description: 'Drei Schreibaufgaben (privat, Meinung, halbformell) im offiziellen Goethe B1-Format.',
    durationMinutes: 60,
    maxScore: 60,
    passScore: 36,
    parts: [
      {
        id: 'teil-1',
        title: 'Teil 1 — Persönliche E-Mail',
        kind: 'writing-task',
        instructions:
          'Eine Freundin in Deutschland hat dich eingeladen, sie im Sommer zu besuchen. Schreibe eine E-Mail. Behandle alle drei Punkte. Schreibe etwa 80 Wörter. Vergiss Anrede, Einleitung und Gruß nicht.',
        taskType: 'Persönliche E-Mail an eine Freundin',
        taskPrompt:
          'Schreibe deiner Freundin Lisa eine E-Mail über ihre Einladung. Behandle alle drei Punkte ausführlich.',
        bullets: [
          'Bedanke dich für die Einladung und erkläre, warum du dich darüber freust.',
          'Sage, wann du kommen kannst und wie lange du bleiben möchtest.',
          'Frage, was du mitbringen sollst und was ihr während deines Besuchs unternehmen könnt.',
        ],
        minWords: 80,
        maxScore: 25,
      },
      {
        id: 'teil-2',
        title: 'Teil 2 — Forumsbeitrag',
        kind: 'writing-task',
        instructions:
          'In einem deutschen Online-Forum diskutieren Leute über das Thema „Sollten Kinder erst ab 14 Jahren ein eigenes Smartphone besitzen?“. Schreibe deine Meinung zu dem Thema. Schreibe etwa 80 Wörter. Begründe deine Meinung mit Beispielen.',
        taskType: 'Forumsbeitrag',
        taskPrompt:
          'Schreibe einen Forumsbeitrag, in dem du deine Meinung zum Thema „Smartphones für Kinder erst ab 14 Jahren?“ äußerst. Behandle die folgenden Punkte.',
        bullets: [
          'Sage, ob du dafür oder dagegen bist.',
          'Nenne mindestens zwei Gründe für deine Meinung.',
          'Beschreibe ein eigenes Beispiel oder eine Erfahrung.',
        ],
        minWords: 80,
        maxScore: 25,
      },
      {
        id: 'teil-3',
        title: 'Teil 3 — Halbformelle Nachricht',
        kind: 'writing-task',
        instructions:
          'Du wolltest morgen an einem Sprachkurs teilnehmen, kannst aber nicht kommen. Schreibe eine halbformelle Nachricht an deine Lehrerin Frau Schmidt. Schreibe etwa 40 Wörter. Vergiss Anrede und Gruß nicht.',
        taskType: 'Halbformelle E-Mail an eine Lehrerin',
        taskPrompt: 'Schreibe Frau Schmidt eine kurze E-Mail. Behandle die folgenden Punkte.',
        bullets: [
          'Entschuldige dich, dass du morgen nicht zum Kurs kommen kannst.',
          'Erkläre kurz den Grund.',
          'Frage, ob du die Hausaufgaben für die nächste Stunde bekommen kannst.',
        ],
        minWords: 40,
        maxScore: 10,
      },
    ],
  },
]
