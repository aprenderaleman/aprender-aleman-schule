/**
 * Deutsch A1 — LESEN · Prüfung (pool «real»)
 *
 * Gleiche Struktur wie der Übungssatz (Modellsatz 1):
 *   Teil 1: Kurze Mitteilungen (5 Aufgaben, richtig/falsch)
 *   Teil 2: Kleinanzeigen (5 Zuordnungen, 6 Anzeigen)
 *   Teil 3: Schilder und Aushänge (5 Aufgaben, richtig/falsch)
 *   Teil 4: Kurze Texte (5 Aufgaben, a/b/c)
 *
 * 20 Aufgaben, 25 Minuten, je 1 Punkt. Bestanden ab 12/20.
 * Alle Texte und Aufgaben sind neu und kommen im Übungssatz nicht vor.
 */

export const realA1LesenExams = [
  {
    id: 'real-a1-lesen-1',
    provider: 'goethe',
    level: 'A1',
    module: 'lesen',
    pool: 'real',
    title: 'Deutsch A1 — Lesen · Prüfung',
    description: 'Kompletter Leseteil auf Niveau A1. 20 Aufgaben in 25 Minuten.',
    durationMinutes: 25,
    maxScore: 20,
    passScore: 12,
    parts: [
      {
        id: 'teil1',
        title: 'Teil 1',
        instructions: 'Lies die zwei Texte und die fünf Aussagen. Sind die Aussagen richtig oder falsch?',
        context: {
          type: 'multi-text',
          content: [
            {
              label: 'E-Mail von Jonas',
              text: `Lieber Felix,
wie geht es dir? Ich wohne jetzt in Leipzig. Meine neue Wohnung ist klein, aber sehr hell. Sie hat zwei Zimmer. Am Freitag mache ich eine Party. Sie beginnt um 20 Uhr. Kannst du kommen? Essen und Getränke habe ich schon. Bring bitte nur Musik mit! Du kannst auch bei mir schlafen.

Viele Grüße
Jonas`,
            },
            {
              label: 'SMS von Mia',
              text: `Hallo Papa! Der Bus fährt heute nicht. Ich nehme die Straßenbahn und bin erst um 18 Uhr zu Hause. Kannst du bitte mit dem Hund in den Park gehen? Danke! Mia`,
            },
          ],
        },
        questions: [
          { type: 'true-false', id: 'rq1', statement: 'Die neue Wohnung von Jonas ist groß.', correct: false, points: 1 },
          { type: 'true-false', id: 'rq2', statement: 'Die Party von Jonas beginnt um 20 Uhr.', correct: true, points: 1 },
          { type: 'true-false', id: 'rq3', statement: 'Felix soll Getränke mitbringen.', correct: false, points: 1 },
          { type: 'true-false', id: 'rq4', statement: 'Mia fährt heute mit dem Bus nach Hause.', correct: false, points: 1 },
          { type: 'true-false', id: 'rq5', statement: 'Mia kommt heute um sechs Uhr abends nach Hause.', correct: true, points: 1 },
        ],
      },
      {
        id: 'teil2',
        title: 'Teil 2',
        instructions: 'Lies die Aufgaben und die Anzeigen. Welche Anzeige passt zu welcher Person? Es gibt eine Anzeige zu viel.',
        questions: [
          {
            type: 'matching',
            id: 'rq6',
            instructions: 'Ordne jeder Person die passende Anzeige zu.',
            items: [
              { id: 'p1', text: 'Herr Yilmaz braucht einen Kühlschrank für seine Küche.' },
              { id: 'p2', text: 'Nina möchte am Sonntag mit ihren Kindern in den Zoo gehen.' },
              { id: 'p3', text: 'Paul (30 Jahre alt) möchte schwimmen lernen.' },
              { id: 'p4', text: 'Frau Sommer sucht einen Friseur in der Nähe vom Bahnhof.' },
              { id: 'p5', text: 'Olgas Auto ist kaputt. Sie sucht eine Werkstatt.' },
            ],
            targets: [
              { id: 'a', text: 'Autowerkstatt Brandt: Reparaturen für alle Autos, schnell und günstig. Mo–Sa 7–18 Uhr. Tel. 0351 44556' },
              { id: 'b', text: 'Schwimmkurs für Erwachsene im Hallenbad Nord. Immer dienstags um 19 Uhr. 10 Stunden: 90 €.' },
              { id: 'c', text: 'Verkaufe Waschmaschine, 3 Jahre alt, wie neu. 150 €. Tel. 0172 3344' },
              { id: 'd', text: 'Tierpark Waldau: Sonntag ist Familientag! Kinder bis 12 Jahre zahlen keinen Eintritt. Geöffnet 9–18 Uhr.' },
              { id: 'e', text: 'Verkaufe Kühlschrank, weiß, 1,40 m hoch, 2 Jahre alt. Nur 80 €. Tel. 0160 7788' },
              { id: 'f', text: 'Salon Haarmonie am Bahnhof: Damen, Herren und Kinder. Schneiden ab 19 €. Di–Sa 9–18 Uhr.' },
            ],
            correct: { p1: 'e', p2: 'd', p3: 'b', p4: 'f', p5: 'a' },
            pointsPerItem: 1,
          },
        ],
      },
      {
        id: 'teil3',
        title: 'Teil 3',
        instructions: 'Lies die Texte und die fünf Aussagen. Sind die Aussagen richtig oder falsch?',
        context: {
          type: 'multi-text',
          content: [
            { label: 'Aushang im Wohnhaus', text: 'Liebe Nachbarn! Am Donnerstag, 8. Juni, gibt es von 9 bis 12 Uhr kein Wasser. Bitte parken Sie an diesem Tag nicht im Hof.' },
            { label: 'Schild im Museum', text: 'Fotografieren verboten! Taschen und Rucksäcke bitte an der Garderobe abgeben. Die Garderobe ist kostenlos.' },
            { label: 'Aushang in der Bäckerei', text: 'Neu ab Juli: Wir haben jetzt auch am Sonntag geöffnet, von 8 bis 11 Uhr. Frische Brötchen für Ihr Frühstück!' },
          ],
        },
        questions: [
          { type: 'true-false', id: 'rq7', statement: 'Am Donnerstagvormittag gibt es im Haus kein Wasser.', correct: true, points: 1 },
          { type: 'true-false', id: 'rq8', statement: 'Am Donnerstag dürfen die Nachbarn im Hof parken.', correct: false, points: 1 },
          { type: 'true-false', id: 'rq9', statement: 'Im Museum darf man Fotos machen.', correct: false, points: 1 },
          { type: 'true-false', id: 'rq10', statement: 'Die Garderobe im Museum kostet nichts.', correct: true, points: 1 },
          { type: 'true-false', id: 'rq11', statement: 'Am Sonntag ist die Bäckerei bis 11 Uhr offen.', correct: true, points: 1 },
        ],
      },
      {
        id: 'teil4',
        title: 'Teil 4',
        instructions: 'Lies die Anzeigen und die Aufgaben. Wähle die richtige Lösung a, b oder c.',
        questions: [
          {
            type: 'multiple-choice',
            id: 'rq12',
            prompt: 'An einem Kino lesen Sie: „Kinotag am Dienstag: alle Filme nur 6 €“. Wann kosten die Filme nur 6 €?',
            options: [
              { id: 'a', text: 'Jeden Tag.' },
              { id: 'b', text: 'Nur am Wochenende.' },
              { id: 'c', text: 'Am Dienstag.' },
            ],
            correct: 'c',
            points: 1,
          },
          {
            type: 'multiple-choice',
            id: 'rq13',
            prompt: 'An einem Parkplatz steht: „Parken nur für Gäste vom Hotel Seeblick“. Wer darf hier parken?',
            options: [
              { id: 'a', text: 'Alle Autofahrer.' },
              { id: 'b', text: 'Nur Hotelgäste.' },
              { id: 'c', text: 'Nur Taxis.' },
            ],
            correct: 'b',
            points: 1,
          },
          {
            type: 'multiple-choice',
            id: 'rq14',
            prompt: 'In der Sprachschule lesen Sie: „Der Kurs A1 ist heute in Raum 12, nicht in Raum 8“. Wo ist der Kurs heute?',
            options: [
              { id: 'a', text: 'In Raum 12.' },
              { id: 'b', text: 'In Raum 8.' },
              { id: 'c', text: 'Heute ist kein Kurs.' },
            ],
            correct: 'a',
            points: 1,
          },
          {
            type: 'multiple-choice',
            id: 'rq15',
            prompt: 'An der Haltestelle steht: „Automat kaputt. Fahrkarten bitte beim Fahrer kaufen“. Wo bekommen Sie eine Fahrkarte?',
            options: [
              { id: 'a', text: 'Am Automaten.' },
              { id: 'b', text: 'Im Internet.' },
              { id: 'c', text: 'Beim Fahrer.' },
            ],
            correct: 'c',
            points: 1,
          },
          {
            type: 'multiple-choice',
            id: 'rq16',
            prompt: 'Im Zug lesen Sie: „In diesem Wagen bitte nicht telefonieren!“ Was sollen Sie hier nicht machen?',
            options: [
              { id: 'a', text: 'Mit dem Handy telefonieren.' },
              { id: 'b', text: 'Ein Buch lesen.' },
              { id: 'c', text: 'Etwas essen.' },
            ],
            correct: 'a',
            points: 1,
          },
        ],
      },
    ],
  },
]
