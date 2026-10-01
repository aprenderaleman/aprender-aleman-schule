/**
 * Deutsch A1 — Hören · Prüfung (pool «real»)
 *
 * Gleiche Struktur wie der Modellsatz (3 Teile, 15 Items, 20 min, bestanden = 9 / 15):
 *   Teil 1: 6 kurze Hörtexte. Mehrfachauswahl (a/b/c). 2x hören.
 *   Teil 2: 4 Durchsagen. Richtig / Falsch. 1x hören.
 *   Teil 3: 5 kurze Gespräche. Mehrfachauswahl (a/b/c). 2x hören.
 *
 * Kein audioUrl: Der Server erzeugt das Audio aus dem transcript.
 */

export const realA1HoerenExams = [
  {
    id: 'real-a1-hoeren-1',
    provider: 'goethe',
    level: 'A1',
    module: 'hoeren',
    pool: 'real',
    title: 'Deutsch A1 — Hören · Prüfung',
    description: 'Hörverstehens-Prüfung auf Niveau A1: drei Teile mit fünfzehn Aufgaben.',
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
            id: 'rh1-1',
            type: 'multiple-choice',
            audio: {
              allowedPlays: 2,
              label: 'Aufgabe 1',
              transcript:
                'Mann: „Guten Tag, wann beginnt heute Abend der Film?“\nFrau: „Der Film beginnt um zwanzig Uhr fünfzehn in Saal drei.“',
            },
            prompt: 'Wann beginnt der Film?',
            options: [
              { id: 'a', text: 'Um 20:15 Uhr' },
              { id: 'b', text: 'Um 20:50 Uhr' },
              { id: 'c', text: 'Um 21:15 Uhr' },
            ],
            correct: 'a',
            points: 1,
          },
          {
            id: 'rh1-2',
            type: 'multiple-choice',
            audio: {
              allowedPlays: 2,
              label: 'Aufgabe 2',
              transcript:
                'Anrufbeantworter: „Hallo Jonas, hier ist Paula. Ich komme am Samstag nicht mit dem Bus, sondern mit dem Fahrrad. Das Wetter ist so schön. Bis Samstag!“',
            },
            prompt: 'Wie kommt Paula am Samstag?',
            options: [
              { id: 'a', text: 'Mit dem Bus' },
              { id: 'b', text: 'Mit dem Auto' },
              { id: 'c', text: 'Mit dem Fahrrad' },
            ],
            correct: 'c',
            points: 1,
          },
          {
            id: 'rh1-3',
            type: 'multiple-choice',
            audio: {
              allowedPlays: 2,
              label: 'Aufgabe 3',
              transcript:
                'Verkäufer: „Vier Brötchen und ein Brot. Das macht fünf Euro zwanzig.“\nKunde: „Hier sind sechs Euro.“\nVerkäufer: „Danke, und achtzig Cent zurück.“',
            },
            prompt: 'Wie viel kostet der Einkauf in der Bäckerei?',
            options: [
              { id: 'a', text: '5,12 Euro' },
              { id: 'b', text: '5,20 Euro' },
              { id: 'c', text: '6,00 Euro' },
            ],
            correct: 'b',
            points: 1,
          },
          {
            id: 'rh1-4',
            type: 'multiple-choice',
            audio: {
              allowedPlays: 2,
              label: 'Aufgabe 4',
              transcript:
                'Ansage: „Hier ist die Sprachschule am Markt. Unser Büro ist am Montag und am Dienstag von neun bis dreizehn Uhr geöffnet, am Donnerstag von vierzehn bis achtzehn Uhr. Am Mittwoch ist das Büro geschlossen.“',
            },
            prompt: 'Wann ist das Büro am Donnerstag geöffnet?',
            options: [
              { id: 'a', text: 'Von 9 bis 13 Uhr' },
              { id: 'b', text: 'Von 14 bis 18 Uhr' },
              { id: 'c', text: 'Am Donnerstag ist das Büro geschlossen.' },
            ],
            correct: 'b',
            points: 1,
          },
          {
            id: 'rh1-5',
            type: 'multiple-choice',
            audio: {
              allowedPlays: 2,
              label: 'Aufgabe 5',
              transcript:
                'Frau: „Sven, was machen wir am Sonntag? Gehen wir schwimmen?“\nSven: „Nein, das Schwimmbad ist am Sonntag zu. Wir können im Park Fußball spielen.“\nFrau: „Gute Idee! Das machen wir.“',
            },
            prompt: 'Was machen Sven und die Frau am Sonntag?',
            options: [
              { id: 'a', text: 'Sie gehen schwimmen.' },
              { id: 'b', text: 'Sie gehen ins Kino.' },
              { id: 'c', text: 'Sie spielen im Park Fußball.' },
            ],
            correct: 'c',
            points: 1,
          },
          {
            id: 'rh1-6',
            type: 'multiple-choice',
            audio: {
              allowedPlays: 2,
              label: 'Aufgabe 6',
              transcript:
                'Ärztin: „Herr Kaya, nehmen Sie die Tabletten bitte dreimal am Tag, immer nach dem Essen. Trinken Sie viel Wasser und Tee. Kaffee trinken Sie bitte nicht.“',
            },
            prompt: 'Was soll Herr Kaya NICHT trinken?',
            options: [
              { id: 'a', text: 'Kaffee' },
              { id: 'b', text: 'Tee' },
              { id: 'c', text: 'Wasser' },
            ],
            correct: 'a',
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
            id: 'rh2-1',
            type: 'true-false',
            audio: {
              allowedPlays: 1,
              label: 'Aufgabe 7 — Durchsage im Supermarkt',
              transcript:
                '„Liebe Kundinnen und Kunden, heute haben wir ein Angebot. Ein Kilo Äpfel kostet nur einen Euro neunzig. Sie finden die Äpfel gleich am Eingang, bei Obst und Gemüse.“',
            },
            statement: 'Ein Kilo Äpfel kostet heute 1,19 Euro.',
            correct: false,
            points: 1,
          },
          {
            id: 'rh2-2',
            type: 'true-false',
            audio: {
              allowedPlays: 1,
              label: 'Aufgabe 8 — Durchsage am Flughafen',
              transcript:
                '„Achtung, bitte. Der Flug nach Wien startet heute nicht von Ausgang zwölf, sondern von Ausgang zwanzig. Bitte gehen Sie jetzt zu Ausgang zwanzig.“',
            },
            statement: 'Der Flug nach Wien startet von Ausgang 20.',
            correct: true,
            points: 1,
          },
          {
            id: 'rh2-3',
            type: 'true-false',
            audio: {
              allowedPlays: 1,
              label: 'Aufgabe 9 — Durchsage im Zug',
              transcript:
                '„Liebe Fahrgäste, in wenigen Minuten sind wir in Köln Hauptbahnhof. Dieser Zug endet dort. Bitte steigen Sie alle aus und vergessen Sie Ihr Gepäck nicht.“',
            },
            statement: 'In Köln müssen alle Fahrgäste aussteigen.',
            correct: true,
            points: 1,
          },
          {
            id: 'rh2-4',
            type: 'true-false',
            audio: {
              allowedPlays: 1,
              label: 'Aufgabe 10 — Durchsage im Zoo',
              transcript:
                '„Liebe Besucherinnen und Besucher, unser Restaurant ist heute leider geschlossen. Getränke und Eis bekommen Sie am Kiosk neben dem Eingang.“',
            },
            statement: 'Das Restaurant im Zoo ist heute geöffnet.',
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
            id: 'rh3-1',
            type: 'multiple-choice',
            audio: {
              allowedPlays: 2,
              label: 'Aufgabe 11',
              transcript:
                'Frau: „Was bist du von Beruf, Emre?“\nEmre: „Ich bin Koch in einem Hotel. Und du?“\nFrau: „Ich arbeite jetzt als Lehrerin. Aber früher war ich Verkäuferin.“',
            },
            prompt: 'Was ist die Frau jetzt von Beruf?',
            options: [
              { id: 'a', text: 'Köchin' },
              { id: 'b', text: 'Lehrerin' },
              { id: 'c', text: 'Verkäuferin' },
            ],
            correct: 'b',
            points: 1,
          },
          {
            id: 'rh3-2',
            type: 'multiple-choice',
            audio: {
              allowedPlays: 2,
              label: 'Aufgabe 12',
              transcript:
                'Tochter: „Papa, wann fahren wir morgen zu Oma?“\nVater: „Wir frühstücken um halb zehn. Und um Viertel nach zehn fahren wir los.“',
            },
            prompt: 'Wann fährt die Familie zur Oma?',
            options: [
              { id: 'a', text: 'Um 9:30 Uhr' },
              { id: 'b', text: 'Um 10:15 Uhr' },
              { id: 'c', text: 'Um 10:45 Uhr' },
            ],
            correct: 'b',
            points: 1,
          },
          {
            id: 'rh3-3',
            type: 'multiple-choice',
            audio: {
              allowedPlays: 2,
              label: 'Aufgabe 13',
              transcript:
                'Frau: „Guten Tag, ich möchte für heute Abend einen Tisch reservieren, für vier Personen.“\nKellner: „Gern. Um neunzehn Uhr?“\nFrau: „Ja, das ist gut. Ach nein, Entschuldigung: Wir sind fünf Personen. Meine Schwester kommt auch.“\nKellner: „Kein Problem. Ein Tisch für fünf Personen um neunzehn Uhr.“',
            },
            prompt: 'Für wie viele Personen reserviert die Frau den Tisch?',
            options: [
              { id: 'a', text: 'Für drei Personen' },
              { id: 'b', text: 'Für vier Personen' },
              { id: 'c', text: 'Für fünf Personen' },
            ],
            correct: 'c',
            points: 1,
          },
          {
            id: 'rh3-4',
            type: 'multiple-choice',
            audio: {
              allowedPlays: 2,
              label: 'Aufgabe 14',
              transcript:
                'Mann: „Guten Tag. Ist die Wohnung noch frei?“\nVermieterin: „Ja. Sie hat zwei Zimmer, eine Küche und ein Bad. Die Wohnung ist im dritten Stock.“\nMann: „Schön. Kann ich sie morgen sehen?“\nVermieterin: „Ja, gern.“',
            },
            prompt: 'Wie viele Zimmer hat die Wohnung?',
            options: [
              { id: 'a', text: 'Zwei Zimmer' },
              { id: 'b', text: 'Drei Zimmer' },
              { id: 'c', text: 'Vier Zimmer' },
            ],
            correct: 'a',
            points: 1,
          },
          {
            id: 'rh3-5',
            type: 'multiple-choice',
            audio: {
              allowedPlays: 2,
              label: 'Aufgabe 15',
              transcript:
                'Frau: „Guten Tag, ich möchte den Yogakurs machen. Wann ist der Kurs?“\nMann: „Immer am Dienstag um achtzehn Uhr.“\nFrau: „Und was kostet der Kurs?“\nMann: „Dreißig Euro im Monat.“',
            },
            prompt: 'Wie viel kostet der Yogakurs im Monat?',
            options: [
              { id: 'a', text: '13 Euro' },
              { id: 'b', text: '18 Euro' },
              { id: 'c', text: '30 Euro' },
            ],
            correct: 'c',
            points: 1,
          },
        ],
      },
    ],
  },
]
