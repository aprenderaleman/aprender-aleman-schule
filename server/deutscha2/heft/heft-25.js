// Übungsheft A2 — Lektion 25: Schreiben Teil 1 — Kurze Mitteilung
export default {
  lektion: 25,
  titel: 'Übungsheft — Schreiben Teil 1: Kurze Mitteilung',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Wähle die richtige Antwort oder Form. ~~(Elige la respuesta o la forma correcta.)~~',
      items: [
        {
          typ: 'mc',
          frage: 'Du schreibst einem Freund. Welche Anrede ist richtig?',
          optionen: ['Hallo Marco:', 'Hallo Marco,', 'hallo marco'],
          loesung: 1,
        },
        {
          typ: 'mc',
          frage: 'Was passt? „Ich komme heute ___.“',
          optionen: ['später', 'der Termin', 'die Zeit'],
          loesung: 0,
        },
        {
          typ: 'luecke',
          text: 'Hallo Marco, ich kann heute {1} nicht kommen, denn ich bin {2}. Können wir am Samstag {3}?',
          bank: ['leider', 'krank', 'spielen', 'später'],
          loesungen: { 1: 'leider', 2: 'krank', 3: 'spielen' },
        },
        {
          typ: 'luecke',
          text: 'Der {1} ist beim Nachbarn. Ich komme heute {2}. Warte bitte nicht auf {3}.',
          bank: ['Schlüssel', 'später', 'mich', 'Termin'],
          loesungen: { 1: 'Schlüssel', 2: 'später', 3: 'mich' },
        },
        {
          typ: 'satzbau',
          woerter: ['kannst', 'nicht', 'Warum', 'du', 'kommen'],
          loesung: 'Warum kannst du nicht kommen?',
        },
        {
          typ: 'satzbau',
          woerter: ['Milch', 'du', 'mitbringen', 'Kannst'],
          loesung: 'Kannst du Milch mitbringen?',
        },
        {
          typ: 'zuordnen',
          links: ['absagen', 'der Grund', 'der neue Termin', 'bitten'],
          rechts: ['Ich kann leider nicht kommen.', 'Ich bin krank.', 'Hast du am Freitag Zeit?', 'Warte bitte nicht auf mich.'],
          loesung: {
            'absagen': 'Ich kann leider nicht kommen.',
            'der Grund': 'Ich bin krank.',
            'der neue Termin': 'Hast du am Freitag Zeit?',
            'bitten': 'Warte bitte nicht auf mich.',
          },
        },
        {
          typ: 'korrektur',
          optionen: ['Ich muss arbeiten.', 'Ich muss zu arbeiten.'],
          loesung: 0,
          warum: 'Tras un verbo modal, el infinitivo va **sin zu**: *Ich muss arbeiten.* ~~(«tengo que trabajar» — el que no se traduce)~~',
        },
        {
          typ: 'korrektur',
          optionen: ['Ich habe in Samstag Zeit.', 'Ich habe am Samstag Zeit.'],
          loesung: 1,
          warum: 'Los días de la semana van con **am**: *am Samstag*. ~~(«en sábado» ≠ in — con días siempre am)~~',
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies den Text. Löse die 4 Aufgaben. ~~(Lee el texto. Resuelve las 4 tareas.)~~',
      textTitel: 'Blog: Ein schwieriger Tag',
      text: 'Heute war ein schwieriger Tag! Am Morgen war ich beim Arzt, denn ich bin seit Montag krank. Danach habe ich meinen Deutschkurs abgesagt. Um zwei Uhr habe ich meine Schlüssel gesucht — sie waren in meiner Jacke! Am Nachmittag hat meine Kollegin auf mich gewartet, aber ich bin zu spät gekommen. Morgen habe ich einen neuen Termin beim Arzt. Ich hoffe, nächste Woche ist alles besser. Wie war euer Tag? Eure Mia',
      items: [
        { typ: 'rf', aussage: 'Mia ist seit Montag krank.', loesung: true },
        { typ: 'rf', aussage: 'Sie war heute im Deutschkurs.', loesung: false },
        {
          typ: 'mc',
          frage: 'Wo waren die Schlüssel?',
          optionen: ['in der Jacke', 'beim Arzt', 'bei der Kollegin'],
          loesung: 0,
        },
        {
          typ: 'mc',
          frage: 'Wann hat sie den neuen Termin beim Arzt?',
          optionen: ['heute', 'morgen', 'nächste Woche'],
          loesung: 1,
        },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'text',
      titel: 'Schreiben',
      anweisung: 'Schreib eine kurze Mitteilung (ca. 25-35 Wörter). ~~(Escribe una nota breve de unas 25-35 palabras.)~~',
      aufgabe: 'Du kannst morgen nicht zum Deutschkurs kommen. Schreib deiner Freundin Pilar eine Mitteilung.',
      punkte: [
        'Sag ab. ~~(cancela)~~',
        'Schreib den Grund. ~~(escribe el motivo)~~',
        'Bitte Pilar um die Hausaufgaben. ~~(pídele los deberes)~~',
      ],
      minWoerter: 25,
      beispielLoesung: 'Hallo Pilar, ich kann morgen leider nicht zum Deutschkurs kommen, denn ich habe einen Termin beim Arzt. Kannst du mir bitte die Hausaufgaben schicken? Vielen Dank! Wir sehen uns am Montag.\nViele Grüße\nAndrés',
    },
  ],
}
