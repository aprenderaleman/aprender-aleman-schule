/**
 * Goethe-Zertifikat C1 — Schreiben
 *
 * Offiziell: 2 Teile, 75 min, max 100 Punkte, pass = 60.
 *   Teil 1: Strukturierter Aufsatz / Stellungnahme (~250 Wörter)
 *   Teil 2: Formelle E-Mail / Beschwerde / Bewerbung (~150 Wörter)
 */

export const goetheC1SchreibenExams = [
  {
    id: 'goethe-c1-schreiben-modellsatz-1',
    provider: 'goethe',
    level: 'C1',
    module: 'schreiben',
    title: 'Goethe C1 — Schreiben · Modellsatz 1',
    description: 'Aufsatz und formelle Bewerbung im C1-Format mit anspruchsvollen Kriterien.',
    durationMinutes: 75,
    maxScore: 50,
    passScore: 30,
    parts: [
      {
        id: 'teil-1',
        title: 'Teil 1 — Strukturierter Aufsatz',
        kind: 'writing-task',
        instructions:
          'Schreibe einen Aufsatz zum Thema „Künstliche Intelligenz im Alltag — Fluch oder Segen?“. Berücksichtige dabei verschiedene Perspektiven, formuliere eine eigene These und untermauere sie mit Argumenten. Schreibe etwa 250 Wörter.',
        taskType: 'Strukturierter Aufsatz',
        taskPrompt:
          'Verfasse einen gut strukturierten Aufsatz, der die folgenden Aspekte behandelt. Achte auf eine klare Einleitung, einen logisch aufgebauten Hauptteil und einen Schluss.',
        bullets: [
          'Skizziere kurz die aktuelle Bedeutung von KI im Alltag (z. B. Smart Home, Sprachassistenten, soziale Medien).',
          'Stelle mindestens zwei Vorteile und zwei Nachteile gegenüber.',
          'Diskutiere die Folgen für Bildung, Arbeit oder soziale Beziehungen.',
          'Formuliere eine eigene These und begründe sie ausführlich.',
          'Schließe mit einer Schlussfolgerung oder einer offenen Frage zur weiteren Diskussion.',
        ],
        minWords: 250,
        maxScore: 30,
      },
      {
        id: 'teil-2',
        title: 'Teil 2 — Formelle Bewerbung',
        kind: 'writing-task',
        instructions:
          'Du hast in einer Fachzeitschrift eine Stellenanzeige als Projektkoordinator(in) für ein internationales Bildungsprojekt gesehen. Schreibe ein formelles Bewerbungsschreiben. Schreibe etwa 150 Wörter.',
        taskType: 'Formelle Bewerbung',
        taskPrompt:
          'Verfasse ein formelles Bewerbungsschreiben an die HR-Leiterin Frau Dr. Schwarz, in dem du die folgenden Punkte ansprichst.',
        bullets: [
          'Beziehe dich auf die Anzeige und erkläre dein Interesse an der Stelle.',
          'Stelle deine fachliche Qualifikation und Berufserfahrung dar.',
          'Beschreibe persönliche Stärken, die für die Position relevant sind.',
          'Begründe, warum gerade du der/die richtige Kandidat(in) bist.',
          'Bitte um ein persönliches Gespräch und schließe formell.',
        ],
        minWords: 150,
        maxScore: 20,
      },
    ],
  },
]
