/**
 * Goethe-Zertifikat A1 — Hören
 *
 * Official structure (3 Teile, 15 items, 20 min, pass = 60% = 9 / 15):
 *   Teil 1: 6 kurze Hörtexte. Mehrfachauswahl (a/b/c). 2x hören.
 *   Teil 2: 4 Durchsagen. Richtig / Falsch. 1x hören.
 *   Teil 3: 5 kurze Gespräche. Mehrfachauswahl (a/b/c). 2x hören.
 *
 * Audio files live under /public/audio/pruefungen/<exam-id>/...
 * If audioUrl is missing, the player shows a placeholder + transcript.
 */

export const goetheA1HoerenExams = [
  {
    id: 'goethe-a1-hoeren-modellsatz-1',
    provider: 'goethe',
    level: 'A1',
    module: 'hoeren',
    title: 'Goethe A1 — Hören · Modellsatz 1',
    description: 'Vollständiger Hörverstehen-Test im offiziellen Goethe A1-Format.',
    durationMinutes: 20,
    maxScore: 15,
    passScore: 9,
    parts: [
      /* ─────────── TEIL 1 ─────────── */
      {
        id: 'teil-1',
        title: 'Teil 1',
        instructions:
          'Du hörst sechs kurze Texte. Du hörst jeden Text zweimal. Wähle die richtige Lösung a, b oder c.',
        questions: [
          {
            id: 'h1-1',
            type: 'multiple-choice',
            audio: {
              audioUrl: null,
              allowedPlays: 2,
              label: 'Aufgabe 1',
              transcript:
                'Frau am Bahnhof: „Entschuldigung, wann fährt der nächste Zug nach München?“\nMann: „Der nächste Zug nach München fährt um zehn Uhr fünfundvierzig von Gleis sieben.“',
            },
            prompt: 'Wann fährt der Zug nach München?',
            options: [
              { id: 'a', text: 'Um 10:15 Uhr' },
              { id: 'b', text: 'Um 10:45 Uhr' },
              { id: 'c', text: 'Um 11:45 Uhr' },
            ],
            correct: 'b',
            points: 1,
          },
          {
            id: 'h1-2',
            type: 'multiple-choice',
            audio: {
              audioUrl: null,
              allowedPlays: 2,
              label: 'Aufgabe 2',
              transcript:
                'Anrufbeantworter: „Hallo Tom, hier ist Maria. Wir treffen uns morgen nicht im Café, sondern bei mir zu Hause. Ich koche Spaghetti. Bis morgen!“',
            },
            prompt: 'Wo treffen sich Tom und Maria morgen?',
            options: [
              { id: 'a', text: 'Im Café' },
              { id: 'b', text: 'Im Restaurant' },
              { id: 'c', text: 'Bei Maria zu Hause' },
            ],
            correct: 'c',
            points: 1,
          },
          {
            id: 'h1-3',
            type: 'multiple-choice',
            audio: {
              audioUrl: null,
              allowedPlays: 2,
              label: 'Aufgabe 3',
              transcript:
                'Verkäuferin: „Das macht zusammen acht Euro fünfzig.“\nKundin: „Hier bitte, zehn Euro.“\nVerkäuferin: „Danke, und ein Euro fünfzig zurück.“',
            },
            prompt: 'Wie viel kostet der Einkauf?',
            options: [
              { id: 'a', text: '8,15 Euro' },
              { id: 'b', text: '8,50 Euro' },
              { id: 'c', text: '10,00 Euro' },
            ],
            correct: 'b',
            points: 1,
          },
          {
            id: 'h1-4',
            type: 'multiple-choice',
            audio: {
              audioUrl: null,
              allowedPlays: 2,
              label: 'Aufgabe 4',
              transcript:
                'Wetterbericht: „Und nun das Wetter für morgen, Mittwoch: Im Norden regnet es den ganzen Tag. Im Süden scheint die Sonne, aber es ist kalt — nur acht Grad.“',
            },
            prompt: 'Wie ist das Wetter morgen im Süden?',
            options: [
              { id: 'a', text: 'Es regnet.' },
              { id: 'b', text: 'Es schneit.' },
              { id: 'c', text: 'Die Sonne scheint, aber es ist kalt.' },
            ],
            correct: 'c',
            points: 1,
          },
          {
            id: 'h1-5',
            type: 'multiple-choice',
            audio: {
              audioUrl: null,
              allowedPlays: 2,
              label: 'Aufgabe 5',
              transcript:
                'Mutter: „Lisa, wo ist mein Handy?“\nLisa: „Ich glaube, es liegt auf dem Tisch im Wohnzimmer.“\nMutter: „Nein, da ist es nicht.“\nLisa: „Dann schau in der Küche, neben dem Kühlschrank.“',
            },
            prompt: 'Wo soll Lisas Mutter ihr Handy suchen?',
            options: [
              { id: 'a', text: 'Auf dem Tisch im Wohnzimmer' },
              { id: 'b', text: 'In der Küche neben dem Kühlschrank' },
              { id: 'c', text: 'Im Schlafzimmer' },
            ],
            correct: 'b',
            points: 1,
          },
          {
            id: 'h1-6',
            type: 'multiple-choice',
            audio: {
              audioUrl: null,
              allowedPlays: 2,
              label: 'Aufgabe 6',
              transcript:
                'Lehrer: „Morgen schreiben wir den Mathetest. Bringt bitte einen Bleistift, ein Lineal und einen Taschenrechner mit. Bücher braucht ihr nicht.“',
            },
            prompt: 'Was sollen die Schüler morgen NICHT mitbringen?',
            options: [
              { id: 'a', text: 'Einen Bleistift' },
              { id: 'b', text: 'Einen Taschenrechner' },
              { id: 'c', text: 'Bücher' },
            ],
            correct: 'c',
            points: 1,
          },
        ],
      },

      /* ─────────── TEIL 2 ─────────── */
      {
        id: 'teil-2',
        title: 'Teil 2',
        instructions:
          'Du hörst vier Durchsagen. Du hörst jede Durchsage einmal. Sind die Aussagen richtig oder falsch?',
        questions: [
          {
            id: 'h2-1',
            type: 'true-false',
            audio: {
              audioUrl: null,
              allowedPlays: 1,
              label: 'Aufgabe 7 — Durchsage im Kaufhaus',
              transcript:
                '„Liebe Kundinnen und Kunden, unser Kaufhaus schließt heute um neunzehn Uhr. Bitte bringen Sie Ihre Einkäufe zur Kasse. Vielen Dank für Ihren Besuch.“',
            },
            statement: 'Das Kaufhaus schließt heute um 19:00 Uhr.',
            correct: true,
            points: 1,
          },
          {
            id: 'h2-2',
            type: 'true-false',
            audio: {
              audioUrl: null,
              allowedPlays: 1,
              label: 'Aufgabe 8 — Durchsage am Bahnhof',
              transcript:
                '„Achtung an Gleis fünf. Der ICE 78 nach Hamburg fährt heute mit zehn Minuten Verspätung. Wir bitten um Ihr Verständnis.“',
            },
            statement: 'Der Zug nach Hamburg fährt pünktlich.',
            correct: false,
            points: 1,
          },
          {
            id: 'h2-3',
            type: 'true-false',
            audio: {
              audioUrl: null,
              allowedPlays: 1,
              label: 'Aufgabe 9 — Durchsage im Schwimmbad',
              transcript:
                '„Liebe Gäste, das Schwimmbad schließt in zwanzig Minuten. Bitte verlassen Sie langsam das Wasser. Morgen sind wir ab acht Uhr wieder für Sie da.“',
            },
            statement: 'Das Schwimmbad öffnet morgen um 8:00 Uhr.',
            correct: true,
            points: 1,
          },
          {
            id: 'h2-4',
            type: 'true-false',
            audio: {
              audioUrl: null,
              allowedPlays: 1,
              label: 'Aufgabe 10 — Durchsage im Bus',
              transcript:
                '„Nächste Haltestelle: Hauptbahnhof. Umsteigen zur U-Bahn-Linie U1 und U6 sowie zu den Straßenbahnlinien 12 und 18.“',
            },
            statement: 'Am Hauptbahnhof kann man in die U2 umsteigen.',
            correct: false,
            points: 1,
          },
        ],
      },

      /* ─────────── TEIL 3 ─────────── */
      {
        id: 'teil-3',
        title: 'Teil 3',
        instructions:
          'Du hörst fünf kurze Gespräche. Du hörst jedes Gespräch zweimal. Wähle die richtige Lösung a, b oder c.',
        questions: [
          {
            id: 'h3-1',
            type: 'multiple-choice',
            audio: {
              audioUrl: null,
              allowedPlays: 2,
              label: 'Aufgabe 11',
              transcript:
                'Mann: „Was möchten Sie trinken?“\nFrau: „Einen Kaffee mit Milch, bitte. Und ein Glas Wasser.“\nMann: „Möchten Sie auch etwas essen?“\nFrau: „Nein danke, nur die Getränke.“',
            },
            prompt: 'Was bestellt die Frau?',
            options: [
              { id: 'a', text: 'Einen Kaffee, Wasser und ein Stück Kuchen' },
              { id: 'b', text: 'Einen Kaffee mit Milch und ein Glas Wasser' },
              { id: 'c', text: 'Nur einen Kaffee ohne Milch' },
            ],
            correct: 'b',
            points: 1,
          },
          {
            id: 'h3-2',
            type: 'multiple-choice',
            audio: {
              audioUrl: null,
              allowedPlays: 2,
              label: 'Aufgabe 12',
              transcript:
                'Sohn: „Mama, wann kommt Papa nach Hause?“\nMutter: „Heute kommt er später, erst um halb acht. Er hat noch eine Besprechung.“',
            },
            prompt: 'Wann kommt der Vater nach Hause?',
            options: [
              { id: 'a', text: 'Um 7:00 Uhr' },
              { id: 'b', text: 'Um 7:30 Uhr' },
              { id: 'c', text: 'Um 8:00 Uhr' },
            ],
            correct: 'b',
            points: 1,
          },
          {
            id: 'h3-3',
            type: 'multiple-choice',
            audio: {
              audioUrl: null,
              allowedPlays: 2,
              label: 'Aufgabe 13',
              transcript:
                'Frau: „Hallo, ich möchte einen Termin beim Zahnarzt.“\nSekretärin: „Ja, gerne. Geht es am Donnerstag um vierzehn Uhr?“\nFrau: „Donnerstag ist schlecht. Haben Sie auch am Freitag einen Termin?“\nSekretärin: „Ja, am Freitag um zehn Uhr.“\nFrau: „Perfekt, das passt mir.“',
            },
            prompt: 'Wann hat die Frau einen Termin beim Zahnarzt?',
            options: [
              { id: 'a', text: 'Donnerstag um 14:00 Uhr' },
              { id: 'b', text: 'Freitag um 10:00 Uhr' },
              { id: 'c', text: 'Freitag um 14:00 Uhr' },
            ],
            correct: 'b',
            points: 1,
          },
          {
            id: 'h3-4',
            type: 'multiple-choice',
            audio: {
              audioUrl: null,
              allowedPlays: 2,
              label: 'Aufgabe 14',
              transcript:
                'Tourist: „Entschuldigung, wo ist die Post?“\nPassant: „Gehen Sie hier geradeaus, dann die zweite Straße links. Die Post ist neben der Apotheke.“',
            },
            prompt: 'Wo ist die Post?',
            options: [
              { id: 'a', text: 'Geradeaus, erste Straße rechts' },
              { id: 'b', text: 'Geradeaus, zweite Straße links, neben der Apotheke' },
              { id: 'c', text: 'Hinter dem Bahnhof' },
            ],
            correct: 'b',
            points: 1,
          },
          {
            id: 'h3-5',
            type: 'multiple-choice',
            audio: {
              audioUrl: null,
              allowedPlays: 2,
              label: 'Aufgabe 15',
              transcript:
                'Verkäufer: „Kann ich Ihnen helfen?“\nKundin: „Ja, ich suche einen Pullover in Größe achtunddreißig.“\nVerkäufer: „Welche Farbe möchten Sie?“\nKundin: „Blau oder schwarz, bitte.“\nVerkäufer: „Dieser blaue Pullover hier kostet fünfundvierzig Euro.“',
            },
            prompt: 'Wie viel kostet der blaue Pullover?',
            options: [
              { id: 'a', text: '35 Euro' },
              { id: 'b', text: '45 Euro' },
              { id: 'c', text: '55 Euro' },
            ],
            correct: 'b',
            points: 1,
          },
        ],
      },
    ],
  },
]
