// Übungsheft A1 — Lektion 09: Der Akkusativ (den/einen)
export default {
  lektion: 9,
  titel: 'Übungsheft — Akkusativ (den/einen)',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Wähle die richtige Form. ~~(Elige la forma correcta.)~~',
      items: [
        { typ: 'mc', frage: 'Ich kaufe ___ Apfel.', optionen: ['einen', 'ein', 'eine'], loesung: 0 },
        { typ: 'mc', frage: 'Das ist ___ Lehrer.', optionen: ['der', 'den'], loesung: 0 },
        { typ: 'mc', frage: 'Es gibt hier ___ Supermarkt.', optionen: ['einen', 'ein'], loesung: 0 },
        {
          typ: 'luecke',
          text: 'Ich habe {1} Hund. Ich brauche {2} Lampe. Er kauft {3} Auto.',
          bank: ['einen', 'eine', 'ein'],
          loesungen: { 1: 'einen', 2: 'eine', 3: 'ein' },
        },
        {
          typ: 'luecke',
          text: 'Ich trinke {1} Kaffee. Sie isst {2} Brot.',
          bank: ['einen', 'das', 'eine'],
          loesungen: { 1: 'einen', 2: 'das' },
        },
        { typ: 'satzbau', woerter: ['einen', 'Ich', 'Bruder', 'habe'], loesung: 'Ich habe einen Bruder.' },
        { typ: 'satzbau', woerter: ['hier', 'einen', 'gibt', 'Es', 'Park'], loesung: 'Es gibt hier einen Park.', alt: ['Hier gibt es einen Park.'] },
        {
          typ: 'zuordnen',
          links: ['Apfel (der)', 'Banane (die)', 'Brot (das)', 'Hund (der)'],
          rechts: ['einen', 'eine', 'ein', 'einen'],
          loesung: { 'Apfel (der)': 'einen', 'Banane (die)': 'eine', 'Brot (das)': 'ein', 'Hund (der)': 'einen' },
        },
        {
          typ: 'korrektur',
          optionen: ['Ich habe einen Hund.', 'Ich habe ein Hund.'],
          loesung: 0,
          warum: 'Con *haben*, el masculino cambia: ein → **einen**: *einen Hund*. ~~(Solo el masculino cambia.)~~',
        },
        {
          typ: 'korrektur',
          optionen: ['Das ist der Lehrer.', 'Das ist den Lehrer.'],
          loesung: 0,
          warum: 'Con **sein** no hay cambio: *Das ist der Lehrer*. ~~(El cambio der → den solo va con haben, kaufen, trinken…)~~',
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies den Text. Richtig oder falsch? ~~(Lee el texto. ¿Verdadero o falso?)~~',
      textTitel: 'Zettel von Nina',
      text: 'Hallo Leo! Ich mache heute das Essen. Wir brauchen einen Salat, ein Brot und einen Käse. Kaufst du das? Es gibt einen Supermarkt am Bahnhof. Ich trinke gern Tee — wir haben aber nur Kaffee. Kaufst du auch einen Tee? Danke! Nina',
      items: [
        { typ: 'rf', aussage: 'Nina macht heute das Essen.', loesung: true },
        { typ: 'rf', aussage: 'Der Supermarkt ist am Park.', loesung: false },
        {
          typ: 'mc',
          frage: 'Was trinkt Nina gern?',
          optionen: ['Tee', 'Kaffee', 'Milch'],
          loesung: 0,
        },
        { typ: 'rf', aussage: 'Nina und Leo brauchen einen Salat, ein Brot und einen Käse.', loesung: true },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'text',
      titel: 'Schreiben',
      anweisung: 'Schreib 3 Sätze. ~~(Escribe 3 frases.)~~',
      aufgabe: 'Was kaufst, trinkst und isst du? Schreib 3 Sätze mit ein, eine oder einen. ~~(¿Qué compras, bebes y comes? Escribe 3 frases con ein, eine o einen.)~~',
      punkte: [
        'kaufen: Ich kaufe …',
        'trinken: Ich trinke …',
        'essen: Ich esse …',
      ],
      minWoerter: 15,
      beispielLoesung: 'Ich kaufe einen Apfel und eine Banane. Ich trinke einen Kaffee. Ich esse ein Brötchen und einen Salat.',
    },
  ],
}
