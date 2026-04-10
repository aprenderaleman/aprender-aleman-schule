/**
 * Goethe-Zertifikat A2 — Hören
 *
 * Official structure (4 Teile, 20 items, ~30 min, pass = 12 / 20):
 *   Teil 1: 5 kurze Hörtexte, MC, 2x hören
 *   Teil 2: 5 Durchsagen / kurze Texte, R/F, 1x hören
 *   Teil 3: 5 Mini-Dialoge, MC, 1x hören
 *   Teil 4: längeres Interview, R/F, 2x hören (5 Items)
 */

export const goetheA2HoerenExams = [
  {
    id: 'goethe-a2-hoeren-modellsatz-1',
    provider: 'goethe',
    level: 'A2',
    module: 'hoeren',
    title: 'Goethe A2 — Hören · Modellsatz 1',
    description: 'Vollständiger Hörverstehen-Test im offiziellen Goethe A2-Format.',
    durationMinutes: 30,
    maxScore: 20,
    passScore: 12,
    parts: [
      /* ─────────── TEIL 1 ─────────── */
      {
        id: 'teil-1',
        title: 'Teil 1',
        instructions: 'Du hörst fünf kurze Texte. Du hörst jeden Text zweimal. Wähle die richtige Lösung a, b oder c.',
        questions: [
          {
            id: 'a2h1-1',
            type: 'multiple-choice',
            audio: {
              audioUrl: null,
              allowedPlays: 2,
              label: 'Aufgabe 1',
              transcript:
                'Anrufbeantworter: „Hallo Klaus, hier ist Martin. Wir treffen uns morgen nicht im Restaurant „Zum goldenen Hirsch“, sondern im italienischen Restaurant in der Hauptstraße. Bring bitte deine Schwester mit. Bis morgen um 19 Uhr!“',
            },
            prompt: 'Wo treffen sich Klaus und Martin morgen?',
            options: [
              { id: 'a', text: 'Im Restaurant „Zum goldenen Hirsch“' },
              { id: 'b', text: 'Im italienischen Restaurant in der Hauptstraße' },
              { id: 'c', text: 'Bei Klaus zu Hause' },
            ],
            correct: 'b',
            points: 1,
          },
          {
            id: 'a2h1-2',
            type: 'multiple-choice',
            audio: {
              audioUrl: null,
              allowedPlays: 2,
              label: 'Aufgabe 2',
              transcript:
                'Wetterbericht: „Und nun das Wetter für das kommende Wochenende: Am Samstag erwarten uns Temperaturen um die 25 Grad und viel Sonne. Am Sonntag wird es kühler — etwa 18 Grad — und es regnet zeitweise.“',
            },
            prompt: 'Wie wird das Wetter am Sonntag?',
            options: [
              { id: 'a', text: 'Sonnig und 25 Grad' },
              { id: 'b', text: 'Kühler und manchmal Regen' },
              { id: 'c', text: 'Es schneit' },
            ],
            correct: 'b',
            points: 1,
          },
          {
            id: 'a2h1-3',
            type: 'multiple-choice',
            audio: {
              audioUrl: null,
              allowedPlays: 2,
              label: 'Aufgabe 3',
              transcript:
                'Verkäuferin: „Die roten Schuhe in Größe 39 haben wir leider nicht mehr. Aber in Größe 38 oder 40 sind sie noch da.“\nKundin: „Hmm, dann nehme ich sie in Größe 38.“',
            },
            prompt: 'Welche Größe nimmt die Kundin?',
            options: [
              { id: 'a', text: 'Größe 38' },
              { id: 'b', text: 'Größe 39' },
              { id: 'c', text: 'Größe 40' },
            ],
            correct: 'a',
            points: 1,
          },
          {
            id: 'a2h1-4',
            type: 'multiple-choice',
            audio: {
              audioUrl: null,
              allowedPlays: 2,
              label: 'Aufgabe 4',
              transcript:
                'Kollege: „Maria, kommst du heute mit ins Kino? Wir wollen den neuen Film um 20 Uhr sehen.“\nMaria: „Heute geht es leider nicht, ich habe einen Arzttermin. Aber morgen Abend hätte ich Zeit.“',
            },
            prompt: 'Warum kommt Maria heute nicht mit?',
            options: [
              { id: 'a', text: 'Sie muss arbeiten.' },
              { id: 'b', text: 'Sie hat einen Arzttermin.' },
              { id: 'c', text: 'Sie mag den Film nicht.' },
            ],
            correct: 'b',
            points: 1,
          },
          {
            id: 'a2h1-5',
            type: 'multiple-choice',
            audio: {
              audioUrl: null,
              allowedPlays: 2,
              label: 'Aufgabe 5',
              transcript:
                'Hotelrezeption: „Guten Tag. Ich hätte gerne ein Doppelzimmer für zwei Nächte, von Freitag bis Sonntag.“\nRezeptionistin: „Mit Frühstück oder ohne?“\n„Mit Frühstück, bitte.“\n„Das macht 180 Euro für die zwei Nächte.“',
            },
            prompt: 'Wie viel kostet das Zimmer insgesamt?',
            options: [
              { id: 'a', text: '90 Euro' },
              { id: 'b', text: '180 Euro' },
              { id: 'c', text: '360 Euro' },
            ],
            correct: 'b',
            points: 1,
          },
        ],
      },

      /* ─────────── TEIL 2 ─────────── */
      {
        id: 'teil-2',
        title: 'Teil 2',
        instructions: 'Du hörst fünf Durchsagen oder kurze Texte. Du hörst jeden Text einmal. Sind die Aussagen richtig oder falsch?',
        questions: [
          {
            id: 'a2h2-1',
            type: 'true-false',
            audio: {
              audioUrl: null,
              allowedPlays: 1,
              label: 'Aufgabe 6 — Durchsage am Bahnhof',
              transcript:
                '„Achtung an Gleis 9. Der ICE 723 nach Frankfurt fährt heute aus technischen Gründen nicht. Die Reisenden werden gebeten, auf den nächsten Zug um 14:30 Uhr von Gleis 7 auszuweichen.“',
            },
            statement: 'Der ICE 723 nach Frankfurt fährt mit Verspätung.',
            correct: false,
            points: 1,
          },
          {
            id: 'a2h2-2',
            type: 'true-false',
            audio: {
              audioUrl: null,
              allowedPlays: 1,
              label: 'Aufgabe 7 — Durchsage im Museum',
              transcript:
                '„Liebe Besucher, wir möchten Sie informieren, dass das Museum heute bereits um 17 Uhr schließt. Der letzte Einlass ist um 16 Uhr. Wir wünschen Ihnen noch einen schönen Besuch.“',
            },
            statement: 'Das Museum schließt heute früher als sonst.',
            correct: true,
            points: 1,
          },
          {
            id: 'a2h2-3',
            type: 'true-false',
            audio: {
              audioUrl: null,
              allowedPlays: 1,
              label: 'Aufgabe 8 — Verkehrsmeldung',
              transcript:
                '„Auf der Autobahn A8 zwischen München und Salzburg gibt es einen Stau von 12 Kilometern. Grund ist ein Unfall bei Rosenheim. Autofahrer sollten die Strecke wenn möglich umfahren.“',
            },
            statement: 'Auf der A8 gibt es einen Stau wegen Bauarbeiten.',
            correct: false,
            points: 1,
          },
          {
            id: 'a2h2-4',
            type: 'true-false',
            audio: {
              audioUrl: null,
              allowedPlays: 1,
              label: 'Aufgabe 9 — Anrufbeantworter Praxis',
              transcript:
                '„Sie sind verbunden mit der Praxis Dr. Müller. Unsere Sprechzeiten sind Montag bis Freitag von 8 bis 12 Uhr und 14 bis 18 Uhr. Im Notfall wählen Sie bitte den ärztlichen Bereitschaftsdienst unter 116 117.“',
            },
            statement: 'Die Praxis ist am Samstag geschlossen.',
            correct: true,
            points: 1,
          },
          {
            id: 'a2h2-5',
            type: 'true-false',
            audio: {
              audioUrl: null,
              allowedPlays: 1,
              label: 'Aufgabe 10 — Durchsage im Schwimmbad',
              transcript:
                '„Liebe Gäste, das Außenbecken ist heute wegen Reinigungsarbeiten leider geschlossen. Das Innenbecken und die Sauna sind wie gewohnt geöffnet. Wir bitten um Ihr Verständnis.“',
            },
            statement: 'Heute ist nur das Außenbecken geöffnet.',
            correct: false,
            points: 1,
          },
        ],
      },

      /* ─────────── TEIL 3 ─────────── */
      {
        id: 'teil-3',
        title: 'Teil 3',
        instructions: 'Du hörst fünf kurze Gespräche. Du hörst jedes Gespräch einmal. Wähle die richtige Lösung a, b oder c.',
        questions: [
          {
            id: 'a2h3-1',
            type: 'multiple-choice',
            audio: {
              audioUrl: null,
              allowedPlays: 1,
              label: 'Aufgabe 11',
              transcript:
                'Frau: „Was möchtest du am Wochenende machen?“\nMann: „Ich würde gerne wandern gehen, wenn das Wetter gut ist. Sonst können wir auch ins Schwimmbad fahren.“',
            },
            prompt: 'Was möchte der Mann bei gutem Wetter machen?',
            options: [
              { id: 'a', text: 'Wandern gehen' },
              { id: 'b', text: 'Ins Schwimmbad fahren' },
              { id: 'c', text: 'Zu Hause bleiben' },
            ],
            correct: 'a',
            points: 1,
          },
          {
            id: 'a2h3-2',
            type: 'multiple-choice',
            audio: {
              audioUrl: null,
              allowedPlays: 1,
              label: 'Aufgabe 12',
              transcript:
                'Sohn: „Mama, ich finde meine Brille nicht.“\nMutter: „Hast du im Wohnzimmer geschaut? Ich glaube, sie liegt auf dem kleinen Tisch neben dem Sofa.“',
            },
            prompt: 'Wo ist die Brille des Sohnes?',
            options: [
              { id: 'a', text: 'Im Schlafzimmer' },
              { id: 'b', text: 'Auf dem Tisch neben dem Sofa' },
              { id: 'c', text: 'In der Küche' },
            ],
            correct: 'b',
            points: 1,
          },
          {
            id: 'a2h3-3',
            type: 'multiple-choice',
            audio: {
              audioUrl: null,
              allowedPlays: 1,
              label: 'Aufgabe 13',
              transcript:
                'Tourist: „Entschuldigung, wo finde ich die Touristeninformation?“\nPassant: „Gehen Sie hier geradeaus, dann an der Ampel rechts. Die Touristeninformation ist im großen Gebäude mit der gelben Fassade.“',
            },
            prompt: 'Wo ist die Touristeninformation?',
            options: [
              { id: 'a', text: 'Geradeaus, dann links' },
              { id: 'b', text: 'Geradeaus, dann an der Ampel rechts' },
              { id: 'c', text: 'Hinter dem Bahnhof' },
            ],
            correct: 'b',
            points: 1,
          },
          {
            id: 'a2h3-4',
            type: 'multiple-choice',
            audio: {
              audioUrl: null,
              allowedPlays: 1,
              label: 'Aufgabe 14',
              transcript:
                'Mann: „Was hast du heute Abend vor?“\nFrau: „Eigentlich wollte ich Tennis spielen, aber meine Freundin hat abgesagt. Jetzt bleibe ich zu Hause und schaue einen Film.“',
            },
            prompt: 'Was macht die Frau heute Abend?',
            options: [
              { id: 'a', text: 'Sie spielt Tennis.' },
              { id: 'b', text: 'Sie geht ins Kino.' },
              { id: 'c', text: 'Sie schaut zu Hause einen Film.' },
            ],
            correct: 'c',
            points: 1,
          },
          {
            id: 'a2h3-5',
            type: 'multiple-choice',
            audio: {
              audioUrl: null,
              allowedPlays: 1,
              label: 'Aufgabe 15',
              transcript:
                'Kollege: „Wann ist eigentlich die nächste Besprechung?“\nKollegin: „Die war ursprünglich am Donnerstag, aber sie wurde auf Freitag um 10 Uhr verschoben.“',
            },
            prompt: 'Wann findet die Besprechung statt?',
            options: [
              { id: 'a', text: 'Donnerstag um 10 Uhr' },
              { id: 'b', text: 'Freitag um 10 Uhr' },
              { id: 'c', text: 'Freitag um 14 Uhr' },
            ],
            correct: 'b',
            points: 1,
          },
        ],
      },

      /* ─────────── TEIL 4 ─────────── */
      {
        id: 'teil-4',
        title: 'Teil 4',
        instructions: 'Du hörst ein Interview. Du hörst das Interview zweimal. Sind die Aussagen 16-20 richtig oder falsch?',
        context: {
          type: 'audio',
          audioUrl: null,
          allowedPlays: 2,
          label: 'Interview mit der Köchin Sarah Weiß',
          transcript:
            `Moderator: Guten Tag, Frau Weiß. Sie sind seit zehn Jahren Köchin in einem bekannten Restaurant in Hamburg. Wie sind Sie zu diesem Beruf gekommen?

Sarah Weiß: Eigentlich wollte ich Tierärztin werden. Aber mit 18 habe ich ein Praktikum in einem Restaurant gemacht und mich sofort verliebt — in das Kochen, meine ich! Danach habe ich eine Ausbildung zur Köchin gemacht.

Moderator: Was gefällt Ihnen am meisten an Ihrem Beruf?

Sarah Weiß: Die Kreativität. Ich kann jeden Tag neue Gerichte ausprobieren und mit frischen Zutaten arbeiten. Was ich nicht so mag, sind die langen Arbeitszeiten — ich arbeite oft bis Mitternacht.

Moderator: Was kochen Sie am liebsten zu Hause?

Sarah Weiß: Zu Hause koche ich tatsächlich sehr einfach. Meistens Pasta oder Salat. Nach einem langen Arbeitstag möchte ich nichts Kompliziertes mehr machen.

Moderator: Haben Sie einen Tipp für Hobbyköche?

Sarah Weiß: Ja, ein wichtiger Tipp: Verwendet immer frische Zutaten vom Markt, nicht aus dem Supermarkt. Das macht den größten Unterschied beim Geschmack.

Moderator: Vielen Dank für das Gespräch, Frau Weiß!`,
        },
        questions: [
          { id: 'a2h4-1', type: 'true-false', statement: 'Sarah Weiß wollte zuerst Ärztin für Menschen werden.', correct: false, points: 1 },
          { id: 'a2h4-2', type: 'true-false', statement: 'Ihr gefällt am Beruf besonders, dass sie kreativ sein kann.', correct: true, points: 1 },
          { id: 'a2h4-3', type: 'true-false', statement: 'Sie arbeitet oft bis spät in die Nacht.', correct: true, points: 1 },
          { id: 'a2h4-4', type: 'true-false', statement: 'Zu Hause kocht sie meistens komplizierte Gerichte.', correct: false, points: 1 },
          { id: 'a2h4-5', type: 'true-false', statement: 'Sie empfiehlt, Zutaten vom Markt zu kaufen.', correct: true, points: 1 },
        ],
      },
    ],
  },
]
