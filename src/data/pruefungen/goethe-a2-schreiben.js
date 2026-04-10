/**
 * Goethe-Zertifikat A2 — Schreiben
 *
 * Official structure (2 Teile, ~30 min, max 30 points, pass = 18 / 30):
 *   Teil 1: Kurze Mitteilung (~30 Wörter), informell
 *   Teil 2: Antwort auf eine Anzeige / formelle Mitteilung (~30 Wörter)
 */

export const goetheA2SchreibenExams = [
  {
    id: 'goethe-a2-schreiben-modellsatz-1',
    provider: 'goethe',
    level: 'A2',
    module: 'schreiben',
    title: 'Goethe A2 — Schreiben · Modellsatz 1',
    description: 'Zwei Schreibaufgaben (informell und formell) im offiziellen Goethe A2-Format.',
    durationMinutes: 30,
    maxScore: 30,
    passScore: 18,
    parts: [
      {
        id: 'teil-1',
        title: 'Teil 1 — Informelle Mitteilung',
        kind: 'writing-task',
        instructions:
          'Du warst beim Arzt und konntest deinen Freund Leon nicht treffen. Schreibe ihm eine Nachricht. Behandle alle drei Punkte. Schreibe etwa 30 Wörter. Vergiss Anrede und Gruß nicht.',
        taskType: 'WhatsApp / SMS an einen Freund',
        taskPrompt: 'Schreibe Leon eine Nachricht über dein verpasstes Treffen. Behandle alle drei Punkte.',
        bullets: [
          'Entschuldige dich, dass du nicht gekommen bist.',
          'Erkläre, warum du beim Arzt warst.',
          'Schlage einen neuen Termin vor.',
        ],
        minWords: 30,
        maxScore: 15,
      },
      {
        id: 'teil-2',
        title: 'Teil 2 — Formelle Mitteilung',
        kind: 'writing-task',
        instructions:
          'Du hast ein Fitnessstudio im Internet gefunden und möchtest mehr Informationen. Schreibe eine E-Mail an das Fitnessstudio. Behandle alle drei Punkte. Schreibe etwa 30 Wörter. Vergiss Anrede und Gruß nicht.',
        taskType: 'Formelle E-Mail an ein Fitnessstudio',
        taskPrompt:
          'Du interessierst dich für das „FitClub München“. Schreibe eine formelle E-Mail an das Fitnessstudio und behandle alle drei Punkte.',
        bullets: [
          'Frage nach den Öffnungszeiten am Wochenende.',
          'Frage, wie viel ein Monatsabonnement kostet.',
          'Frage, ob es eine kostenlose Probestunde gibt.',
        ],
        minWords: 30,
        maxScore: 15,
      },
    ],
  },
]
