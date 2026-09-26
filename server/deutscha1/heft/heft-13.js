// Übungsheft A1 — Lektion 13: Trennbare Verben
export default {
  lektion: 13,
  titel: 'Übungsheft — Trennbare Verben',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Wähle, ergänze oder ordne. ~~(Elige, completa u ordena.)~~',
      items: [
        { typ: 'mc', frage: 'Ich stehe um 7 Uhr ___. (aufstehen)', optionen: ['auf', 'an', 'ein'], loesung: 0 },
        { typ: 'mc', frage: 'Der Kurs fängt um 9 Uhr ___. (anfangen)', optionen: ['an', 'auf', 'mit'], loesung: 0 },
        { typ: 'mc', frage: 'Ich möchte heute Abend ___.', optionen: ['fernsehen', 'sehen fern', 'fern sehen'], loesung: 0 },
        {
          typ: 'luecke',
          text: 'Ich kaufe am Samstag {1}. Dann rufe ich meine Mutter {2}. Am Abend sehe ich {3}.',
          bank: ['ein', 'an', 'fern', 'auf'],
          loesungen: { 1: 'ein', 2: 'an', 3: 'fern' },
        },
        { typ: 'satzbau', woerter: ['stehe', 'um', 'Ich', 'auf', '7', 'Uhr'], loesung: 'Ich stehe um 7 Uhr auf.', alt: ['Um 7 Uhr stehe ich auf.'] },
        { typ: 'satzbau', woerter: ['du', 'mit', 'Kommst'], loesung: 'Kommst du mit?' },
        {
          typ: 'zuordnen',
          links: ['aufstehen', 'einkaufen', 'anrufen', 'fernsehen', 'zumachen'],
          rechts: ['levantarse', 'hacer la compra', 'llamar por teléfono', 'ver la tele', 'cerrar'],
          loesung: {
            'aufstehen': 'levantarse',
            'einkaufen': 'hacer la compra',
            'anrufen': 'llamar por teléfono',
            'fernsehen': 'ver la tele',
            'zumachen': 'cerrar',
          },
        },
        {
          typ: 'korrektur',
          optionen: ['Ich rufe dich morgen an.', 'Ich anrufe dich morgen.'],
          loesung: 0,
          warum: 'El prefijo se separa y va **al final**: *Ich rufe … **an**.* ~~(Verbo en posición 2, prefijo cierra la frase.)~~',
        },
        {
          typ: 'korrektur',
          optionen: ['Ich möchte heute einkaufen.', 'Ich möchte heute kaufen ein.'],
          loesung: 0,
          warum: 'Con **möchten** el infinitivo va **entero** al final: *einkaufen*. ~~(Con modal, el verbo no se separa.)~~',
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies das Plakat. Richtig oder falsch? ~~(Lee el cartel. ¿Verdadero o falso?)~~',
      textTitel: 'Plakat — Kino im Park',
      text: 'Kino im Park — am Samstag! Der Film fängt um 20 Uhr an. Der Park macht um 19 Uhr auf. Eine Karte kostet 5 Euro. Kinder sehen den Film gratis. Möchten Sie mitkommen? Sie können uns anrufen: 030 44 55 66.',
      items: [
        { typ: 'rf', aussage: 'Der Film fängt um 19 Uhr an.', loesung: false },
        { typ: 'rf', aussage: 'Der Park macht um 19 Uhr auf.', loesung: true },
        {
          typ: 'mc',
          frage: 'Was kostet eine Karte?',
          optionen: ['5 Euro', '15 Euro', '50 Euro'],
          loesung: 0,
        },
        { typ: 'rf', aussage: 'Das Kino ist am Sonntag.', loesung: false },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'text',
      titel: 'Schreiben',
      anweisung: 'Schreib 4 Sätze. ~~(Escribe 4 frases.)~~',
      aufgabe: 'Dein Tag: Schreib 4 Sätze mit trennbaren Verben. ~~(Tu día: escribe 4 frases con verbos separables.)~~',
      punkte: [
        'Wann stehst du auf? ~~(¿Cuándo te levantas?)~~',
        'Wann kaufst du ein? ~~(¿Cuándo haces la compra?)~~',
        'Was machst du am Abend? ~~(¿Qué haces por la noche?)~~',
      ],
      minWoerter: 15,
      beispielLoesung: 'Ich stehe um 8 Uhr auf. Am Nachmittag kaufe ich im Supermarkt ein. Am Abend rufe ich meine Freundin an. Dann sehe ich fern.',
    },
  ],
}
