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
]
