// Übungsheft A1 — Lektion 33: Wohnung & Möbel
export default {
  lektion: 33,
  titel: 'Übungsheft — Wohnung & Möbel',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Wähle die richtige Form. ~~(Elige la forma correcta.)~~',
      items: [
        { typ: 'mc', frage: 'Meine Wohnung ___ drei Zimmer.', optionen: ['hat', 'ist', 'habt'], loesung: 0 },
        { typ: 'mc', frage: 'Ich koche ___ Küche.', optionen: ['in der', 'im', 'in das'], loesung: 0 },
        {
          typ: 'luecke',
          text: 'Das ist meine Wohnung. Sie {1} klein, aber schön. Das Bett ist {2} Schlafzimmer.',
          bank: ['ist', 'im', 'hat'],
          loesungen: { 1: 'ist', 2: 'im' },
        },
        {
          typ: 'luecke',
          text: 'Ich wohne in der {1} 12. Meine {2} ist Gartenstraße 12, Berlin.',
          bank: ['Gartenstraße', 'Adresse', 'Wohnung'],
          loesungen: { 1: 'Gartenstraße', 2: 'Adresse' },
        },
        { typ: 'satzbau', woerter: ['Wohnung', 'drei', 'meine', 'Zimmer', 'hat'], loesung: 'Meine Wohnung hat drei Zimmer.' },
        { typ: 'satzbau', woerter: ['deine', 'ist', 'Adresse', 'wie'], loesung: 'Wie ist deine Adresse?' },
        {
          typ: 'zuordnen',
          links: ['Küche', 'Bett', 'Tisch', 'Schrank', 'Wohnung'],
          rechts: ['die', 'das', 'der', 'der', 'die'],
          loesung: { 'Küche': 'die', 'Bett': 'das', 'Tisch': 'der', 'Schrank': 'der', 'Wohnung': 'die' },
        },
        {
          typ: 'korrektur',
          optionen: ['Meine Adresse ist Gartenstraße 12.', 'Meine Adresse ist 12 Gartenstraße.'],
          loesung: 0,
          warum: 'En alemán el número va DESPUÉS del nombre de la calle: *Gartenstraße 12*. ~~(Al revés que en muchos países.)~~',
        },
        {
          typ: 'korrektur',
          optionen: ['Das Bett ist im Schlafzimmer.', 'Das Bett ist in der Schlafzimmer.'],
          loesung: 0,
          warum: '**das** Schlafzimmer → **im** Schlafzimmer. ~~(«in der» solo con palabras en die: in der Küche.)~~',
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies die Anzeige. Richtig oder falsch? ~~(Lee el anuncio. ¿Verdadero o falso?)~~',
      textTitel: 'Anzeige: Wohnung in Leipzig',
      text: 'Schöne Wohnung in Leipzig, Blumenstraße 3. Die Wohnung hat zwei Zimmer, eine Küche und ein Bad. Das Wohnzimmer ist groß, das Schlafzimmer ist klein. Die Möbel sind neu: ein Bett, ein Tisch und ein Schrank. Die Wohnung kostet 450 Euro. Telefon: 0341 998877.',
      items: [
        { typ: 'rf', aussage: 'Die Wohnung hat drei Zimmer.', loesung: false },
        { typ: 'rf', aussage: 'Das Wohnzimmer ist groß.', loesung: true },
        {
          typ: 'mc',
          frage: 'Was kostet die Wohnung?',
          optionen: ['450 Euro', '540 Euro', '415 Euro'],
          loesung: 0,
        },
        { typ: 'rf', aussage: 'Die Wohnung ist in der Blumenstraße 3.', loesung: true },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'text',
      titel: 'Schreiben',
      anweisung: 'Schreib 3-4 Sätze über deine Wohnung. ~~(Escribe 3-4 frases sobre tu vivienda.)~~',
      aufgabe: 'Beschreibe deine Wohnung oder dein Haus.',
      punkte: [
        'Wo wohnst du? (Stadt) ~~(¿Dónde vives?)~~',
        'Wie viele Zimmer hat deine Wohnung? ~~(¿Cuántas habitaciones tiene?)~~',
        'Ein Möbelstück: neu, groß oder klein? ~~(Un mueble: ¿nuevo, grande o pequeño?)~~',
      ],
      minWoerter: 20,
      beispielLoesung: 'Ich wohne in einer kleinen Wohnung in Sevilla. Meine Wohnung hat zwei Zimmer, eine Küche und ein Bad. Das Bett ist neu und das Wohnzimmer ist sehr schön.',
    },
  ],
}
