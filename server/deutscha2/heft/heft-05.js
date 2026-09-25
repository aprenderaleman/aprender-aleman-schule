// Übungsheft A2 — Lektion 05: Präteritum: war, hatte & Co.
export default {
  lektion: 5,
  titel: 'Übungsheft — war, hatte & Co.',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Wähle die richtige Form. ~~(Elige la forma correcta.)~~',
      items: [
        { typ: 'mc', frage: 'Gestern ___ ich krank.', optionen: ['war', 'hatte', 'bin'], loesung: 0 },
        { typ: 'mc', frage: 'Wir ___ leider keine Zeit.', optionen: ['waren', 'hatte', 'hatten'], loesung: 2 },
        { typ: 'mc', frage: '___ du gestern im Büro? — Nein, ich hatte frei.', optionen: ['Warst', 'Hattest', 'Bist'], loesung: 0 },
        {
          typ: 'luecke',
          text: 'Als Kind {1} Bruno viel Zeit. Er {2} jeden Tag im Park. Heute {3} er wenig Zeit.',
          bank: ['hatte', 'war', 'hat', 'ist'],
          loesungen: { 1: 'hatte', 2: 'war', 3: 'hat' },
        },
        {
          typ: 'luecke',
          text: 'Ich war gestern krank. Ich {1} leider nicht kommen. Der Arzt hat gesagt: „Bleiben Sie im Bett!“ Ich {2} den ganzen Tag im Bett bleiben.',
          bank: ['konnte', 'musste', 'wollte'],
          loesungen: { 1: 'konnte', 2: 'musste' },
        },
        { typ: 'satzbau', woerter: ['Warst', 'du', 'am', 'Wochenende', 'zu', 'Hause'], loesung: 'Warst du am Wochenende zu Hause?' },
        { typ: 'satzbau', woerter: ['Wir', 'wollten', 'ins', 'Kino', 'gehen'], loesung: 'Wir wollten ins Kino gehen.' },
        {
          typ: 'zuordnen',
          links: ['ich bin', 'ich habe', 'ich kann', 'ich muss', 'es gibt'],
          rechts: ['ich war', 'ich hatte', 'ich konnte', 'ich musste', 'es gab'],
          loesung: {
            'ich bin': 'ich war',
            'ich habe': 'ich hatte',
            'ich kann': 'ich konnte',
            'ich muss': 'ich musste',
            'es gibt': 'es gab',
          },
        },
        {
          typ: 'korrektur',
          optionen: ['Ich war 10 Jahre alt.', 'Ich hatte 10 Jahre.'],
          loesung: 0,
          warum: 'La edad va con **sein**, también en el pasado: ich **war** 10 Jahre alt. ~~(«Tenía 10 años» no se traduce con hatte.)~~',
        },
        {
          typ: 'korrektur',
          optionen: ['Ich habe gestern müde.', 'Ich war gestern müde.'],
          loesung: 1,
          warum: '«Estaba cansado» = ich **war** müde — con sein, no con haben. ~~(*müde* es un adjetivo, va con el verbo sein.)~~',
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies die E-Mail. Richtig oder falsch? ~~(Lee el correo. ¿Verdadero o falso?)~~',
      textTitel: 'E-Mail von Teresa',
      text: 'Liebe Marisol, gestern war ein schwieriger Tag! Ich wollte um 7 Uhr zur Arbeit fahren, aber der Zug hatte 40 Minuten Verspätung. Im Büro war es dann sehr stressig: Wir hatten ein Problem mit dem Computer und ich konnte nicht drucken. Am Abend war ich sehr müde. Aber es gab auch etwas Schönes: Meine Kollegin hat einen Kuchen gekauft — er war super! Wie war dein Tag? Liebe Grüße, Teresa',
      items: [
        { typ: 'rf', aussage: 'Der Zug hatte Verspätung.', loesung: true },
        { typ: 'rf', aussage: 'Im Büro war es ruhig.', loesung: false },
        { typ: 'mc', frage: 'Was konnte Teresa nicht machen?', optionen: ['drucken', 'essen', 'fahren'], loesung: 0 },
        { typ: 'rf', aussage: 'Die Kollegin hat einen Kuchen gekauft.', loesung: true },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'text',
      titel: 'Schreiben',
      anweisung: 'Schreib 25-35 Wörter. ~~(Escribe 25-35 palabras.)~~',
      aufgabe: 'Gestern war ein besonderer Tag. Schreib einen kurzen Text.',
      punkte: [
        'Wo warst du gestern?',
        'Wie war der Tag?',
        'Was hast du gemacht?',
      ],
      minWoerter: 25,
      beispielLoesung: 'Gestern war ich in Valencia. Der Tag war sehr schön. Meine Tante und ich hatten viel Zeit und haben zusammen Paella gekocht. Am Abend konnte ich leider nicht lange bleiben. Ich musste früh nach Hause fahren.',
    },
  ],
}
