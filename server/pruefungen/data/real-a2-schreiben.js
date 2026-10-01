/**
 * Deutsch A2 — SCHREIBEN · Prüfung (pool «real»)
 *
 * Gleiche Struktur wie der Übungssatz (Modellsatz 1):
 *   Teil 1: Kurze informelle Mitteilung (~30 Wörter) · 15 Punkte
 *   Teil 2: Formelle Mitteilung (~30 Wörter) · 15 Punkte
 *
 * 30 Minuten, max. 30 Punkte. Bestanden ab 18/30.
 * Beide Aufgaben sind neu und kommen im Übungssatz nicht vor.
 */

export const realA2SchreibenExams = [
  {
    id: 'real-a2-schreiben-1',
    provider: 'goethe',
    level: 'A2',
    module: 'schreiben',
    pool: 'real',
    title: 'Deutsch A2 — Schreiben · Prüfung',
    description: 'Zwei Schreibaufgaben (informell und formell) auf Niveau A2.',
    durationMinutes: 30,
    maxScore: 30,
    passScore: 18,
    parts: [
      {
        id: 'teil-1',
        title: 'Teil 1 — Informelle Mitteilung',
        kind: 'writing-task',
        instructions:
          'Du bist vor zwei Wochen nach Freiburg gezogen. Dein Freund Jonas möchte wissen, wie es dir geht. Schreibe ihm eine Nachricht. Behandle alle drei Punkte. Schreibe etwa 30 Wörter. Vergiss Anrede und Gruß nicht.',
        taskType: 'Kurznachricht (SMS) an einen Freund',
        taskPrompt: 'Schreibe Jonas eine Nachricht aus deiner neuen Stadt. Behandle alle drei Punkte.',
        bullets: [
          'Schreibe, wie dir die neue Stadt gefällt.',
          'Erzähle, was du am Wochenende gemacht hast.',
          'Frage, wann er dich besuchen kann.',
        ],
        minWords: 30,
        maxScore: 15,
      },
      {
        id: 'teil-2',
        title: 'Teil 2 — Formelle Mitteilung',
        kind: 'writing-task',
        instructions:
          'Du möchtest im Juli mit deiner Familie Urlaub an der Ostsee machen und hast im Internet eine Ferienwohnung gefunden. Schreibe eine E-Mail an die Vermieterin, Frau Hansen. Behandle alle drei Punkte. Schreibe etwa 30 Wörter. Vergiss Anrede und Gruß nicht.',
        taskType: 'Formelle E-Mail an eine Vermieterin',
        taskPrompt:
          'Du interessierst dich für die Ferienwohnung „Seeblick“ in Rostock. Schreibe eine formelle E-Mail an die Vermieterin, Frau Hansen, und behandle alle drei Punkte.',
        bullets: [
          'Frage, ob die Wohnung in der ersten Woche im Juli noch frei ist.',
          'Frage, ob es am Haus einen Parkplatz gibt.',
          'Frage, ob du deinen Hund mitbringen darfst.',
        ],
        minWords: 30,
        maxScore: 15,
      },
    ],
  },
]
