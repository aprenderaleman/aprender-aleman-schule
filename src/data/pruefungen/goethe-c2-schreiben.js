/**
 * Goethe-Zertifikat C2 — Schreiben
 *
 * Offiziell: 80 min, max 100 Punkte, pass = 60.
 *   Aufsatz / Stellungnahme zu einem komplexen Thema (~350 Wörter).
 */

export const goetheC2SchreibenExams = [
  {
    id: 'goethe-c2-schreiben-modellsatz-1',
    provider: 'goethe',
    level: 'C2',
    module: 'schreiben',
    title: 'Goethe C2 — Schreiben · Modellsatz 1',
    description: 'Anspruchsvolle Stellungnahme zu einem gesellschaftlich relevanten Thema.',
    durationMinutes: 80,
    maxScore: 50,
    passScore: 30,
    parts: [
      {
        id: 'teil-1',
        title: 'Teil 1 — Komplexe Stellungnahme',
        kind: 'writing-task',
        instructions:
          'In einer renommierten Wochenzeitung wird das Thema „Wie viel Privatsphäre braucht eine demokratische Gesellschaft?“ diskutiert. Verfasse einen analytischen Beitrag, in dem du die Frage differenziert untersuchst und einen begründeten Standpunkt entwickelst. Schreibe etwa 350 Wörter.',
        taskType: 'Analytischer Zeitungsbeitrag',
        taskPrompt:
          'Verfasse einen anspruchsvollen, gut strukturierten Beitrag, der die folgenden Aspekte behandelt. Achte auf Differenzierung, eine sprachlich präzise Argumentation und einen erkennbaren Aufbau (Einleitung, Hauptteil, Schluss).',
        bullets: [
          'Skizziere zunächst, warum das Thema gerade jetzt relevant ist (z. B. digitale Überwachung, Datenökonomie, KI).',
          'Beleuchte mindestens zwei unterschiedliche Perspektiven (z. B. Sicherheit vs. Freiheit, individueller Schutz vs. öffentliches Interesse).',
          'Diskutiere ein konkretes Beispiel oder eine aktuelle Entwicklung.',
          'Nimm einen begründeten Standpunkt ein und stelle dich möglichen Gegenargumenten.',
          'Schließe mit einer pointierten These oder einem Aufruf zum öffentlichen Diskurs.',
        ],
        minWords: 350,
        maxScore: 50,
      },
    ],
  },
]
