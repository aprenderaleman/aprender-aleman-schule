// Übungsheft A1 — Lektion 15: Plural der Nomen
export default {
  lektion: 15,
  titel: 'Übungsheft — Plural',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Wähle, ergänze oder ordne. ~~(Elige, completa u ordena.)~~',
      items: [
        { typ: 'mc', frage: 'das Buch → die ___', optionen: ['Bücher', 'Buchs', 'Buche'], loesung: 0 },
        { typ: 'mc', frage: 'der Apfel → die ___', optionen: ['Äpfel', 'Apfels', 'Apfeln'], loesung: 0 },
        { typ: 'mc', frage: 'die Lampe → die ___', optionen: ['Lampen', 'Lampes', 'Lampe'], loesung: 0 },
        {
          typ: 'luecke',
          text: 'Ich habe einen {1} und drei {2}.',
          bank: ['Bruder', 'Schwestern', 'Schwester'],
          loesungen: { 1: 'Bruder', 2: 'Schwestern' },
        },
        {
          typ: 'luecke',
          text: 'der Tisch → {1} Tische · das Kind → {2} Kinder',
          bank: ['die', 'der', 'das'],
          loesungen: { 1: 'die', 2: 'die' },
        },
        { typ: 'satzbau', woerter: ['spielen', 'Die', 'im', 'Kinder', 'Park'], loesung: 'Die Kinder spielen im Park.', alt: ['Im Park spielen die Kinder.'] },
        { typ: 'satzbau', woerter: ['sind', 'Bücher', 'Die', 'neu'], loesung: 'Die Bücher sind neu.' },
        {
          typ: 'zuordnen',
          links: ['der Tisch', 'die Frau', 'das Auto', 'das Kind', 'der Bruder'],
          rechts: ['die Tische', 'die Frauen', 'die Autos', 'die Kinder', 'die Brüder'],
          loesung: {
            'der Tisch': 'die Tische',
            'die Frau': 'die Frauen',
            'das Auto': 'die Autos',
            'das Kind': 'die Kinder',
            'der Bruder': 'die Brüder',
          },
        },
        {
          typ: 'korrektur',
          optionen: ['Ich habe zwei Brüder.', 'Ich habe zwei Bruders.'],
          loesung: 0,
          warum: 'El plural alemán no siempre lleva -s: *der Bruder → die **Brüder*** (Umlaut). ~~(Aprende el plural con la palabra.)~~',
        },
        {
          typ: 'korrektur',
          optionen: ['Die Kinder sind klein.', 'Das Kinder sind klein.'],
          loesung: 0,
          warum: 'En plural el artículo es siempre **die**: *das Kind → **die** Kinder*. ~~(die para TODOS los plurales.)~~',
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies die Notiz. Richtig oder falsch? ~~(Lee la nota. ¿Verdadero o falso?)~~',
      textTitel: 'Notiz von Mama',
      text: 'Hallo Paul! Bitte kauf heute ein: sechs Äpfel, vier Bananen und zwei Brote. Kauf bitte keine Tomaten — wir haben noch drei! Am Samstag kaufen wir zwei Stühle und eine Lampe. Die Stühle sind nicht teuer. Danke! Ruf mich bitte an. Mama',
      items: [
        { typ: 'rf', aussage: 'Mama möchte sechs Äpfel.', loesung: true },
        { typ: 'rf', aussage: 'Sie haben keine Tomaten.', loesung: false },
        {
          typ: 'mc',
          frage: 'Was kaufen sie am Samstag?',
          optionen: ['zwei Stühle und eine Lampe', 'zwei Lampen und einen Stuhl', 'einen Tisch'],
          loesung: 0,
        },
        { typ: 'rf', aussage: 'Die Stühle sind teuer.', loesung: false },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'text',
      titel: 'Schreiben',
      anweisung: 'Schreib 3 Sätze. ~~(Escribe 3 frases.)~~',
      aufgabe: 'Du machst eine Party. Was kaufst du? ~~(Haces una fiesta. ¿Qué compras?)~~',
      punkte: [
        'Kaufe 3 Sachen im Plural. ~~(Compra 3 cosas en plural.)~~',
        'Benutze Zahlen: zwei, drei, vier … ~~(Usa números.)~~',
        'Was kaufst du nicht? ~~(¿Qué no compras?)~~',
      ],
      minWoerter: 14,
      beispielLoesung: 'Ich mache am Samstag eine Party. Ich kaufe zehn Äpfel, sechs Bananen und zwei Kuchen. Ich kaufe keine Tomaten — wir haben noch vier.',
    },
  ],
}
