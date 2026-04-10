/**
 * Goethe-Zertifikat A1 — LESEN (Modellsätze)
 *
 * Official structure (Start Deutsch 1):
 *   Teil 1: Kurze Mitteilungen (5 questions, true/false)
 *   Teil 2: Kleinanzeigen (5 matching questions)
 *   Teil 3: Notizen, Schilder, Anzeigen (5 questions, true/false)
 *   Teil 4: Kurze Anzeigen (5 questions, multiple choice)
 *
 * Total: 20 items, 25 minutes
 * Each item = 1 point. Pass = 15/25 (60%).
 *
 * Content is original, modeled after public Modellsätze structure (no copyrighted text reuse).
 */

export const goetheA1LesenExams = [
  /* =============== MODELLSATZ 1 =============== */
  {
    id: 'goethe-a1-lesen-01',
    provider: 'goethe',
    level: 'A1',
    module: 'lesen',
    title: 'Modellsatz 1 — Lesen',
    description: 'Kompletter Leseteil des Goethe A1. 20 Aufgaben in 25 Minuten.',
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
              label: 'E-Mail von Anna',
              text: `Liebe Sabine,
wie geht es dir? Mir geht es gut. Nächste Woche habe ich Urlaub. Ich fahre mit meinem Mann nach München. Wir bleiben drei Tage. Am Samstag besuchen wir das Deutsche Museum. Am Sonntag gehen wir in den Englischen Garten. Hast du Lust mitzukommen? Wir treffen uns am Samstag um 10 Uhr vor dem Museum.

Viele Grüße
Anna`,
            },
            {
              label: 'SMS von Tom',
              text: `Hi Lisa! Ich bin im Supermarkt. Brauchst du etwas? Ich kaufe Brot, Milch und Käse. Wir essen heute Abend bei mir um 19 Uhr. Komm nicht zu spät! Tom`,
            },
          ],
        },
        questions: [
          { type: 'true-false', id: 'q1', statement: 'Anna fährt allein nach München.', correct: false, points: 1 },
          { type: 'true-false', id: 'q2', statement: 'Anna und ihr Mann bleiben drei Tage in München.', correct: true, points: 1 },
          { type: 'true-false', id: 'q3', statement: 'Sabine soll am Samstag um 10 Uhr vor dem Museum sein.', correct: true, points: 1 },
          { type: 'true-false', id: 'q4', statement: 'Tom kauft Wasser im Supermarkt.', correct: false, points: 1 },
          { type: 'true-false', id: 'q5', statement: 'Tom und Lisa essen um sieben Uhr abends.', correct: true, points: 1 },
        ],
      },
      {
        id: 'teil2',
        title: 'Teil 2',
        instructions: 'Lies die Aufgaben und die Anzeigen. Welche Anzeige passt zu welcher Person? Es gibt eine Anzeige zu viel.',
        questions: [
          {
            type: 'matching',
            id: 'q6',
            instructions: 'Ordne jeder Person die passende Anzeige zu.',
            items: [
              { id: 'p1', text: 'Marco sucht ein Fahrrad für seinen Sohn (8 Jahre alt).' },
              { id: 'p2', text: 'Frau Weber möchte am Wochenende ins Konzert gehen.' },
              { id: 'p3', text: 'Lukas braucht einen günstigen Deutschkurs am Abend.' },
              { id: 'p4', text: 'Familie Schmidt sucht eine 3-Zimmer-Wohnung in München.' },
              { id: 'p5', text: 'Sara möchte einen gebrauchten Laptop kaufen.' },
            ],
            targets: [
              { id: 'a', text: 'Sprachschule Aktiv: Deutschkurse, Mo–Fr 18–20 Uhr, ab 89 €/Monat. Tel. 089 123456' },
              { id: 'b', text: 'Verkaufe Kinderfahrrad, blau, 20 Zoll, sehr guter Zustand. 75 €. Tel. 0176 5555' },
              { id: 'c', text: 'Schöne Wohnung in München-Schwabing, 3 Zimmer, 78 m², 1.450 € warm. Ab Mai frei.' },
              { id: 'd', text: 'Yoga-Kurs für Anfänger, jeden Dienstag, 19 Uhr. Erste Stunde gratis!' },
              { id: 'e', text: 'Klassikkonzert im Gasteig, Samstag 20 Uhr. Tickets ab 25 €. www.gasteig.de' },
              { id: 'f', text: 'Verkaufe Laptop Lenovo, 2 Jahre alt, 256 GB SSD, 8 GB RAM. 350 €. Bei Interesse: laptop@mail.de' },
            ],
            correct: { p1: 'b', p2: 'e', p3: 'a', p4: 'c', p5: 'f' },
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
            { label: 'Schild im Park', text: 'Achtung: Hunde an der Leine führen! Geöffnet täglich von 7:00 bis 21:00 Uhr.' },
            { label: 'Aushang Apotheke', text: 'Die Apotheke ist am Montag, 15. Mai, geschlossen. Notdienst: Stadtapotheke, Hauptstraße 5.' },
            { label: 'Hinweis Bibliothek', text: 'Die Bibliothek bleibt vom 1. bis 15. August wegen Renovierung geschlossen. Bücher bitte vorher zurückgeben.' },
          ],
        },
        questions: [
          { type: 'true-false', id: 'q7', statement: 'Hunde dürfen im Park frei laufen.', correct: false, points: 1 },
          { type: 'true-false', id: 'q8', statement: 'Der Park ist von 7 bis 21 Uhr offen.', correct: true, points: 1 },
          { type: 'true-false', id: 'q9', statement: 'Die Apotheke ist am 15. Mai geschlossen.', correct: true, points: 1 },
          { type: 'true-false', id: 'q10', statement: 'Die Bibliothek schließt für eine Woche.', correct: false, points: 1 },
          { type: 'true-false', id: 'q11', statement: 'Man muss die Bücher vor der Renovierung zurückbringen.', correct: true, points: 1 },
        ],
      },
      {
        id: 'teil4',
        title: 'Teil 4',
        instructions: 'Lies die Anzeigen und die Aufgaben. Wähle die richtige Lösung a, b oder c.',
        questions: [
          {
            type: 'multiple-choice',
            id: 'q12',
            prompt: 'In einem Restaurant lesen Sie: "Mittagsmenü 12–14 Uhr, nur 8,50 €". Wann gibt es das Mittagsmenü?',
            options: [
              { id: 'a', text: 'Den ganzen Tag.' },
              { id: 'b', text: 'Von 12 bis 14 Uhr.' },
              { id: 'c', text: 'Nach 14 Uhr.' },
            ],
            correct: 'b',
            points: 1,
          },
          {
            type: 'multiple-choice',
            id: 'q13',
            prompt: 'Auf einem Bahnhofsschild steht: "Gleis 5 — ICE 521 nach Hamburg, Abfahrt 14:32". Wohin fährt der Zug?',
            options: [
              { id: 'a', text: 'Nach München.' },
              { id: 'b', text: 'Nach Hamburg.' },
              { id: 'c', text: 'Nach Berlin.' },
            ],
            correct: 'b',
            points: 1,
          },
          {
            type: 'multiple-choice',
            id: 'q14',
            prompt: 'In der Schule lesen Sie: "Am Freitag fällt der Deutschunterricht aus." Was bedeutet das?',
            options: [
              { id: 'a', text: 'Am Freitag gibt es Deutschunterricht.' },
              { id: 'b', text: 'Am Freitag gibt es keinen Deutschunterricht.' },
              { id: 'c', text: 'Der Deutschunterricht ist länger als sonst.' },
            ],
            correct: 'b',
            points: 1,
          },
          {
            type: 'multiple-choice',
            id: 'q15',
            prompt: 'Im Supermarkt sehen Sie: "Angebot der Woche: Äpfel 1 kg nur 1,49 €". Was kostet ein Kilo Äpfel?',
            options: [
              { id: 'a', text: '1,49 €' },
              { id: 'b', text: '14,90 €' },
              { id: 'c', text: '1,99 €' },
            ],
            correct: 'a',
            points: 1,
          },
          {
            type: 'multiple-choice',
            id: 'q16',
            prompt: 'An der Tür eines Geschäfts steht: "Wegen Inventur am 3. März geschlossen." Was bedeutet das?',
            options: [
              { id: 'a', text: 'Das Geschäft ist am 3. März offen.' },
              { id: 'b', text: 'Das Geschäft ist am 3. März zu.' },
              { id: 'c', text: 'Das Geschäft schließt für immer.' },
            ],
            correct: 'b',
            points: 1,
          },
        ],
      },
    ],
  },

  /* =============== MODELLSATZ 2 =============== */
  {
    id: 'goethe-a1-lesen-02',
    provider: 'goethe',
    level: 'A1',
    module: 'lesen',
    title: 'Modellsatz 2 — Lesen',
    description: 'Zweite komplette Leseprüfung. Themen: Familie, Reisen, Einkaufen.',
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
              label: 'E-Mail von Peter',
              text: `Hallo Mama,
ich bin gut in Berlin angekommen. Die Reise mit dem Zug hat sechs Stunden gedauert. Mein Zimmer im Hotel ist klein, aber sehr schön. Es gibt einen Balkon mit Blick auf den Park. Heute Abend treffe ich Maria, eine Kollegin aus dem Büro. Wir essen zusammen in einem italienischen Restaurant.

Bis bald,
Peter`,
            },
            {
              label: 'WhatsApp von Julia',
              text: `Liebe Sandra! Mein neues Auto ist endlich da! Es ist rot und hat vier Türen. Am Wochenende fahre ich damit zu meinen Eltern nach Hamburg. Hast du Lust mitzukommen? Ich fahre Freitag um 16 Uhr los. Sag mir Bescheid! Julia`,
            },
          ],
        },
        questions: [
          { type: 'true-false', id: 'q1', statement: 'Peter ist mit dem Auto nach Berlin gefahren.', correct: false, points: 1 },
          { type: 'true-false', id: 'q2', statement: 'Peters Hotelzimmer hat einen Balkon.', correct: true, points: 1 },
          { type: 'true-false', id: 'q3', statement: 'Peter isst heute Abend allein.', correct: false, points: 1 },
          { type: 'true-false', id: 'q4', statement: 'Julias Auto ist rot.', correct: true, points: 1 },
          { type: 'true-false', id: 'q5', statement: 'Julia fährt am Samstag nach Hamburg.', correct: false, points: 1 },
        ],
      },
      {
        id: 'teil2',
        title: 'Teil 2',
        instructions: 'Lies die Aufgaben und die Anzeigen. Welche Anzeige passt zu welcher Person?',
        questions: [
          {
            type: 'matching',
            id: 'q6',
            instructions: 'Ordne jeder Person die passende Anzeige zu. Es gibt eine Anzeige zu viel.',
            items: [
              { id: 'p1', text: 'Anna sucht einen Ferienjob im Sommer.' },
              { id: 'p2', text: 'Herr Bauer braucht Hilfe beim Umzug.' },
              { id: 'p3', text: 'Mia möchte Klavier lernen.' },
              { id: 'p4', text: 'Familie Klein sucht ein Restaurant für eine Geburtstagsfeier.' },
              { id: 'p5', text: 'Tobias möchte einen gebrauchten Fernseher kaufen.' },
            ],
            targets: [
              { id: 'a', text: 'Restaurant Bella Roma: Großer Saal für Familienfeiern bis 50 Personen. Reservierung: 030 7654321' },
              { id: 'b', text: 'Klavierunterricht für Anfänger und Fortgeschrittene. 25 €/Stunde. Tel. 0157 9988' },
              { id: 'c', text: 'Sommer-Babysitter gesucht! Juli–August, 4 Std/Tag, 10 €/Std. Familie Müller, 089 4444' },
              { id: 'd', text: 'Tanzstunden Salsa & Bachata, jeden Donnerstag, 20 Uhr. Probestunde gratis!' },
              { id: 'e', text: 'Verkaufe Smart-TV Samsung 50 Zoll, 1 Jahr alt, 280 €. Email: tv@mail.de' },
              { id: 'f', text: 'Umzugshelfer mit eigenem Transporter, 35 €/Std. Schnell und günstig. 0176 11223' },
            ],
            correct: { p1: 'c', p2: 'f', p3: 'b', p4: 'a', p5: 'e' },
            pointsPerItem: 1,
          },
        ],
      },
      {
        id: 'teil3',
        title: 'Teil 3',
        instructions: 'Lies die Schilder und Aushänge und entscheide: Sind die Aussagen richtig oder falsch?',
        context: {
          type: 'multi-text',
          content: [
            { label: 'Aushang Schwimmbad', text: 'Schwimmbad geschlossen vom 1. bis 14. Juli wegen Reinigung. Das Außenbecken bleibt geöffnet.' },
            { label: 'Schild im Bus', text: 'Bitte kein Essen und keine Getränke im Bus! Tickets vor Fahrtbeginn entwerten.' },
            { label: 'Aushang in der Schule', text: 'Elternabend Klasse 5b: Mittwoch, 12. Oktober, 19:00 Uhr im Klassenzimmer. Anmeldung nicht nötig.' },
          ],
        },
        questions: [
          { type: 'true-false', id: 'q7', statement: 'Im Juli ist nur das Innenbecken zu.', correct: true, points: 1 },
          { type: 'true-false', id: 'q8', statement: 'Im Bus darf man Wasser trinken.', correct: false, points: 1 },
          { type: 'true-false', id: 'q9', statement: 'Tickets müssen vor der Fahrt entwertet werden.', correct: true, points: 1 },
          { type: 'true-false', id: 'q10', statement: 'Für den Elternabend muss man sich anmelden.', correct: false, points: 1 },
          { type: 'true-false', id: 'q11', statement: 'Der Elternabend findet am Mittwochabend statt.', correct: true, points: 1 },
        ],
      },
      {
        id: 'teil4',
        title: 'Teil 4',
        instructions: 'Lies die Texte und wähle die richtige Lösung a, b oder c.',
        questions: [
          {
            type: 'multiple-choice',
            id: 'q12',
            prompt: 'In einem Cafe lesen Sie: "Frühstück bis 11 Uhr". Bis wann können Sie frühstücken?',
            options: [
              { id: 'a', text: 'Bis 10 Uhr.' },
              { id: 'b', text: 'Bis 11 Uhr.' },
              { id: 'c', text: 'Bis 12 Uhr.' },
            ],
            correct: 'b',
            points: 1,
          },
          {
            type: 'multiple-choice',
            id: 'q13',
            prompt: 'Auf einem Brief steht: "Empfänger unbekannt — zurück an Absender". Was passiert mit dem Brief?',
            options: [
              { id: 'a', text: 'Er wird zugestellt.' },
              { id: 'b', text: 'Er kommt zurück zum Absender.' },
              { id: 'c', text: 'Er wird weggeworfen.' },
            ],
            correct: 'b',
            points: 1,
          },
          {
            type: 'multiple-choice',
            id: 'q14',
            prompt: 'In einem Geschäft steht: "Sale! Alles -30%". Was bedeutet das?',
            options: [
              { id: 'a', text: 'Alles kostet 30 €.' },
              { id: 'b', text: 'Es gibt 30% Rabatt auf alles.' },
              { id: 'c', text: 'Nur 30 Artikel sind im Angebot.' },
            ],
            correct: 'b',
            points: 1,
          },
          {
            type: 'multiple-choice',
            id: 'q15',
            prompt: 'Auf der Tür der Bibliothek lesen Sie: "Mo–Fr 9–18 Uhr, Sa 10–14 Uhr, So geschlossen". Wann können Sie am Sonntag in die Bibliothek?',
            options: [
              { id: 'a', text: 'Am Sonntag ist die Bibliothek geschlossen.' },
              { id: 'b', text: 'Von 10 bis 14 Uhr.' },
              { id: 'c', text: 'Von 9 bis 18 Uhr.' },
            ],
            correct: 'a',
            points: 1,
          },
          {
            type: 'multiple-choice',
            id: 'q16',
            prompt: 'In einer SMS lesen Sie: "Treffen verschoben auf morgen, 17 Uhr". Was bedeutet das?',
            options: [
              { id: 'a', text: 'Das Treffen findet heute um 17 Uhr statt.' },
              { id: 'b', text: 'Das Treffen ist abgesagt.' },
              { id: 'c', text: 'Das Treffen ist morgen um 17 Uhr.' },
            ],
            correct: 'c',
            points: 1,
          },
        ],
      },
    ],
  },

  /* =============== MODELLSATZ 3 =============== */
  {
    id: 'goethe-a1-lesen-03',
    provider: 'goethe',
    level: 'A1',
    module: 'lesen',
    title: 'Modellsatz 3 — Lesen',
    description: 'Dritte Leseprüfung. Themen: Arbeit, Freizeit, Gesundheit.',
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
              label: 'E-Mail an die Schule',
              text: `Sehr geehrte Frau Schmidt,
mein Sohn Lukas ist krank und kann heute nicht in die Schule kommen. Er hat Fieber und Halsschmerzen. Der Arzt sagt, er muss zwei Tage zu Hause bleiben. Bitte geben Sie mir die Hausaufgaben für Mathematik und Deutsch.

Mit freundlichen Grüßen
Karin Müller`,
            },
            {
              label: 'Notiz von Markus',
              text: `Hi Lisa, ich gehe heute Abend ins Fitnessstudio. Möchtest du mitkommen? Wir treffen uns um 19 Uhr direkt vor dem Eingang. Bring deine Sportsachen mit. Nach dem Training können wir noch einen Salat essen. Markus`,
            },
          ],
        },
        questions: [
          { type: 'true-false', id: 'q1', statement: 'Lukas geht heute zur Schule.', correct: false, points: 1 },
          { type: 'true-false', id: 'q2', statement: 'Lukas muss zwei Tage zu Hause bleiben.', correct: true, points: 1 },
          { type: 'true-false', id: 'q3', statement: 'Frau Müller will Hausaufgaben für Englisch.', correct: false, points: 1 },
          { type: 'true-false', id: 'q4', statement: 'Markus und Lisa treffen sich im Fitnessstudio.', correct: true, points: 1 },
          { type: 'true-false', id: 'q5', statement: 'Nach dem Training essen sie eine Pizza.', correct: false, points: 1 },
        ],
      },
      {
        id: 'teil2',
        title: 'Teil 2',
        instructions: 'Welche Anzeige passt zu welcher Person? Es gibt eine Anzeige zu viel.',
        questions: [
          {
            type: 'matching',
            id: 'q6',
            instructions: 'Ordne jeder Person die passende Anzeige zu.',
            items: [
              { id: 'p1', text: 'Eva sucht einen Job als Kellnerin am Wochenende.' },
              { id: 'p2', text: 'Herr Lopez braucht einen Zahnarzt mit Notdienst.' },
              { id: 'p3', text: 'Carla möchte einen Hund aus dem Tierheim adoptieren.' },
              { id: 'p4', text: 'Familie Becker sucht ein Hotel mit Schwimmbad in Italien.' },
              { id: 'p5', text: 'Stefan möchte einen Spanischkurs für Anfänger besuchen.' },
            ],
            targets: [
              { id: 'a', text: 'Hotel Sole, Sardinien: Familienzimmer, großes Schwimmbad, Frühstück inklusive. Ab 95 €/Nacht.' },
              { id: 'b', text: 'Tierheim Süd: Hunde und Katzen suchen ein neues Zuhause. Besuche jeden Samstag 14–17 Uhr.' },
              { id: 'c', text: 'Café am Markt sucht Kellner/in für Sa & So, 8 Std/Tag, 12 €/Std. Bewerbung an cafe@markt.de' },
              { id: 'd', text: 'Yoga im Park, jeden Sonntag um 10 Uhr. Kostenlos. Bring deine Matte mit!' },
              { id: 'e', text: 'Volkshochschule: Spanisch A1 ab 5. September, Mo & Mi 18–19:30, 110 €/Semester' },
              { id: 'f', text: 'Zahnarztpraxis Dr. Weber: Notdienst 24/7, Tel. 0800 ZAHNARZT' },
            ],
            correct: { p1: 'c', p2: 'f', p3: 'b', p4: 'a', p5: 'e' },
            pointsPerItem: 1,
          },
        ],
      },
      {
        id: 'teil3',
        title: 'Teil 3',
        instructions: 'Lies die Notizen und Schilder. Sind die Aussagen richtig oder falsch?',
        context: {
          type: 'multi-text',
          content: [
            { label: 'Aushang Arztpraxis', text: 'Praxis Dr. Klein: Mo, Di, Do 8–18 Uhr · Mi, Fr 8–13 Uhr · Termine bitte telefonisch vereinbaren.' },
            { label: 'Schild Park', text: 'Spielplatz für Kinder bis 12 Jahre. Eltern haften für ihre Kinder. Geöffnet bis Sonnenuntergang.' },
            { label: 'Notiz Kollege', text: 'Hallo Tom, das Meeting heute Nachmittag um 15 Uhr ist abgesagt. Neuer Termin: Donnerstag, 14:30 Uhr. Bringe bitte deinen Bericht mit. Frank' },
          ],
        },
        questions: [
          { type: 'true-false', id: 'q7', statement: 'Die Praxis Dr. Klein ist am Mittwoch nachmittag offen.', correct: false, points: 1 },
          { type: 'true-false', id: 'q8', statement: 'Man kann ohne Termin in die Praxis kommen.', correct: false, points: 1 },
          { type: 'true-false', id: 'q9', statement: 'Auf dem Spielplatz dürfen auch 14-jährige spielen.', correct: false, points: 1 },
          { type: 'true-false', id: 'q10', statement: 'Das Meeting heute findet nicht statt.', correct: true, points: 1 },
          { type: 'true-false', id: 'q11', statement: 'Tom soll am Donnerstag den Bericht mitbringen.', correct: true, points: 1 },
        ],
      },
      {
        id: 'teil4',
        title: 'Teil 4',
        instructions: 'Lies die kurzen Texte und wähle die richtige Antwort a, b oder c.',
        questions: [
          {
            type: 'multiple-choice',
            id: 'q12',
            prompt: 'Im Krankenhaus lesen Sie: "Besuchszeiten täglich 14–19 Uhr". Wann kann man Patienten besuchen?',
            options: [
              { id: 'a', text: 'Nur am Wochenende.' },
              { id: 'b', text: 'Jeden Tag von 14 bis 19 Uhr.' },
              { id: 'c', text: 'Jeden Tag von 9 bis 14 Uhr.' },
            ],
            correct: 'b',
            points: 1,
          },
          {
            type: 'multiple-choice',
            id: 'q13',
            prompt: 'Auf einer Eintrittskarte steht: "Konzert am 15.06., Einlass ab 19 Uhr, Beginn 20 Uhr". Wann startet das Konzert?',
            options: [
              { id: 'a', text: 'Um 19 Uhr.' },
              { id: 'b', text: 'Um 20 Uhr.' },
              { id: 'c', text: 'Um 21 Uhr.' },
            ],
            correct: 'b',
            points: 1,
          },
          {
            type: 'multiple-choice',
            id: 'q14',
            prompt: 'Im Aufzug lesen Sie: "Bei Feuer: Treppe benutzen!". Was sollen Sie bei Feuer tun?',
            options: [
              { id: 'a', text: 'Den Aufzug nehmen.' },
              { id: 'b', text: 'Die Treppe nehmen.' },
              { id: 'c', text: 'Im Aufzug bleiben.' },
            ],
            correct: 'b',
            points: 1,
          },
          {
            type: 'multiple-choice',
            id: 'q15',
            prompt: 'Auf einer Packung Tabletten steht: "1 Tablette dreimal täglich". Wie oft am Tag sollen Sie eine Tablette nehmen?',
            options: [
              { id: 'a', text: 'Einmal.' },
              { id: 'b', text: 'Zweimal.' },
              { id: 'c', text: 'Dreimal.' },
            ],
            correct: 'c',
            points: 1,
          },
          {
            type: 'multiple-choice',
            id: 'q16',
            prompt: 'In einer E-Mail lesen Sie: "Antwort bis Freitag erforderlich". Was bedeutet das?',
            options: [
              { id: 'a', text: 'Sie müssen bis Freitag antworten.' },
              { id: 'b', text: 'Sie bekommen am Freitag eine Antwort.' },
              { id: 'c', text: 'Es ist keine Antwort nötig.' },
            ],
            correct: 'a',
            points: 1,
          },
        ],
      },
    ],
  },
]
