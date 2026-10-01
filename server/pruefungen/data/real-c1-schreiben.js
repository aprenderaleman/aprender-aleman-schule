/**
 * Deutsch C1 — Schreiben · Prüfung (Pool «real»)
 *
 * Gleiche Struktur wie der Modellsatz (2 Teile, 75 min):
 *   Teil 1: Strukturierter Aufsatz (~230 Wörter)
 *   Teil 2: Formelles Bewerbungsschreiben (~150 Wörter)
 */

export const realC1SchreibenExams = [
  {
    id: 'real-c1-schreiben-1',
    provider: 'goethe',
    level: 'C1',
    module: 'schreiben',
    pool: 'real',
    title: 'Deutsch C1 — Schreiben · Prüfung',
    description: 'Erörternder Aufsatz und formelles Bewerbungsschreiben auf C1-Niveau.',
    durationMinutes: 75,
    maxScore: 50,
    passScore: 30,
    parts: [
      {
        id: 'teil-1',
        title: 'Teil 1 — Strukturierter Aufsatz',
        kind: 'writing-task',
        instructions:
          'Schreibe einen Aufsatz zum Thema „Massentourismus – Wirtschaftsmotor oder Belastung für Mensch und Umwelt?“. Beziehe unterschiedliche Sichtweisen ein, entwickle eine eigene These und stütze sie mit Argumenten. Schreibe etwa 230 Wörter.',
        taskType: 'Strukturierter Aufsatz',
        taskPrompt:
          'Verfasse einen klar gegliederten Aufsatz, in dem du auf die folgenden Aspekte eingehst. Achte auf eine Einleitung, einen schlüssig aufgebauten Hauptteil und einen Schluss.',
        bullets: [
          'Umreiße kurz, welche Rolle der Tourismus heute für beliebte Reiseziele spielt (z. B. Altstädte, Küstenorte, Naturschutzgebiete).',
          'Wäge mindestens zwei positive und zwei negative Auswirkungen gegeneinander ab.',
          'Erörtere die Konsequenzen für die Einheimischen, den Wohnungsmarkt oder die Umwelt.',
          'Entwickle eine eigene These und begründe sie eingehend.',
          'Beende den Aufsatz mit einem Fazit oder einem Ausblick auf mögliche Lösungsansätze.',
        ],
        minWords: 230,
        maxScore: 30,
      },
      {
        id: 'teil-2',
        title: 'Teil 2 — Formelle Bewerbung',
        kind: 'writing-task',
        instructions:
          'Du hast auf einem Online-Stellenportal eine Anzeige gelesen: Eine gemeinnützige Umweltstiftung in Hamburg sucht eine Referentin bzw. einen Referenten für Öffentlichkeitsarbeit. Schreibe ein formelles Bewerbungsschreiben. Schreibe etwa 150 Wörter.',
        taskType: 'Formelle Bewerbung',
        taskPrompt:
          'Verfasse ein formelles Bewerbungsschreiben an den Leiter der Personalabteilung, Herrn Dr. Lindner, in dem du auf die folgenden Punkte eingehst.',
        bullets: [
          'Nimm Bezug auf die Stellenanzeige und lege dar, was dich an der Aufgabe reizt.',
          'Erläutere deine Ausbildung und deine einschlägige Berufserfahrung.',
          'Hebe persönliche Stärken hervor, die dir bei dieser Tätigkeit zugutekommen.',
          'Zeige auf, welchen Beitrag du zur Arbeit der Stiftung leisten könntest.',
          'Bitte um ein Vorstellungsgespräch und schließe formell.',
        ],
        minWords: 150,
        maxScore: 20,
      },
    ],
  },
]
