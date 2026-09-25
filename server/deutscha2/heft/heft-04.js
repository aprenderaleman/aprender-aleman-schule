// Übungsheft A2 — Lektion 04: Das Perfekt
export default {
  lektion: 4,
  titel: 'Übungsheft — Das Perfekt',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Wähle die richtige Form. ~~(Elige la forma correcta.)~~',
      items: [
        { typ: 'mc', frage: 'Ich ___ ein Buch gelesen.', optionen: ['bin', 'habe', 'hat'], loesung: 1 },
        { typ: 'mc', frage: 'Wir ___ nach Berlin gefahren.', optionen: ['sind', 'haben', 'seid'], loesung: 0 },
        { typ: 'mc', frage: '___ du das Buch schon gelesen?', optionen: ['Hast', 'Bist', 'Habt'], loesung: 0 },
        {
          typ: 'luecke',
          text: 'Gestern {1} ich Pizza {2}. Danach {3} wir ins Kino {4}.',
          bank: ['habe', 'gegessen', 'sind', 'gegangen', 'bin'],
          loesungen: { 1: 'habe', 2: 'gegessen', 3: 'sind', 4: 'gegangen' },
        },
        {
          typ: 'luecke',
          text: 'Amira hat auf dem Markt Obst {1}. Zu Hause hat sie einen Tee {2}.',
          bank: ['gekauft', 'getrunken', 'gegangen'],
          loesungen: { 1: 'gekauft', 2: 'getrunken' },
        },
        { typ: 'satzbau', woerter: ['getrunken', 'einen', 'Ich', 'Kaffee', 'habe'], loesung: 'Ich habe einen Kaffee getrunken.' },
        { typ: 'satzbau', woerter: ['Bist', 'du', 'nach', 'Hause', 'gekommen'], loesung: 'Bist du nach Hause gekommen?' },
        {
          typ: 'zuordnen',
          links: ['machen', 'essen', 'fahren', 'sein', 'trinken'],
          rechts: ['gemacht', 'gegessen', 'gefahren', 'gewesen', 'getrunken'],
          loesung: {
            'machen': 'gemacht',
            'essen': 'gegessen',
            'fahren': 'gefahren',
            'sein': 'gewesen',
            'trinken': 'getrunken',
          },
        },
        {
          typ: 'korrektur',
          optionen: ['Ich bin ins Büro gegangen.', 'Ich habe ins Büro gegangen.'],
          loesung: 0,
          warum: 'Movimiento → Perfekt con **sein**: ich **bin** gegangen. ~~(«He ido» te empuja a *haben*, pero gehen va siempre con sein.)~~',
        },
        {
          typ: 'korrektur',
          optionen: ['Ich habe gekauft ein Brot.', 'Ich habe ein Brot gekauft.'],
          loesung: 1,
          warum: 'El **Partizip II** va al final de la frase: Ich habe ein Brot **gekauft**. ~~(No copies el orden del español «he comprado un pan».)~~',
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies den Blogeintrag. Richtig oder falsch? ~~(Lee la entrada de blog. ¿Verdadero o falso?)~~',
      textTitel: 'Blog: Mein Wochenende in Hamburg',
      text: 'Was für ein Wochenende! Am Samstag bin ich mit meiner Schwester nach Hamburg gefahren. Wir haben den Hafen gesehen und viele Fotos gemacht. Mittags haben wir Fisch gegessen — sehr lecker! Danach sind wir durch die Stadt gegangen und ich habe ein T-Shirt gekauft. Am Abend sind wir ins Hotel gegangen und haben Tee getrunken. Am Sonntag sind wir spät nach Hause gekommen. — Diego',
      items: [
        { typ: 'rf', aussage: 'Diego ist mit seiner Schwester nach Hamburg gefahren.', loesung: true },
        { typ: 'mc', frage: 'Was haben sie mittags gegessen?', optionen: ['Pizza', 'Fisch', 'Salat'], loesung: 1 },
        { typ: 'rf', aussage: 'Diego hat eine Jacke gekauft.', loesung: false },
        { typ: 'rf', aussage: 'Am Sonntag sind sie früh nach Hause gekommen.', loesung: false },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'formular',
      titel: 'Schreiben',
      anweisung: 'Lies den Text. Ergänze das Formular. ~~(Lee el texto. Completa el formulario.)~~',
      quelle: 'Hallo! Ich bin Valeria Rojas. Am Sonntag habe ich einen Ausflug nach Potsdam gemacht. Ich bin mit dem Zug gefahren. Der Ausflug hat 20 Euro gekostet. Am Abend bin ich um 21 Uhr nach Hause gekommen.',
      felder: [
        { id: 'name', label: 'Name', erwartet: ['Valeria Rojas', 'Rojas'] },
        { id: 'tag', label: 'Tag', erwartet: ['Sonntag', 'am Sonntag'] },
        { id: 'stadt', label: 'Stadt', erwartet: ['Potsdam'] },
        { id: 'transport', label: 'Zug oder Bus?', erwartet: ['Zug', 'mit dem Zug'] },
        { id: 'preis', label: 'Preis', erwartet: ['20 Euro', '20'] },
      ],
    },
  ],
}
