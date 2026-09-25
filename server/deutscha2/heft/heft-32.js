// Übungsheft A2 — Lektion 32: Wohnen & Möbel
export default {
  lektion: 32,
  titel: 'Übungsheft — Wohnen & Möbel',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Wähle die richtige Form. ~~(Elige la forma correcta.)~~',
      items: [
        { typ: 'mc', frage: 'Das Sofa steht ___ Wohnzimmer.', optionen: ['im', 'in', 'am'], loesung: 0 },
        { typ: 'mc', frage: 'Es ist spät. Ich gehe jetzt ___.', optionen: ['zu Hause', 'nach Hause', 'in Hause'], loesung: 1 },
        {
          typ: 'luecke',
          text: 'Die Lampe steht {1} dem Sofa. Wir frühstücken {2} dem Balkon.',
          bank: ['neben', 'auf', 'unter'],
          loesungen: { 1: 'neben', 2: 'auf' },
        },
        {
          typ: 'luecke',
          text: 'Ich koche in der {1}. Ich schlafe im {2}.',
          bank: ['Küche', 'Schlafzimmer', 'Bad'],
          loesungen: { 1: 'Küche', 2: 'Schlafzimmer' },
        },
        { typ: 'satzbau', woerter: ['hat', 'Die', 'Wohnung', 'drei', 'Zimmer'], loesung: 'Die Wohnung hat drei Zimmer.' },
        { typ: 'satzbau', woerter: ['steht', 'Das', 'Bett', 'im', 'Schlafzimmer'], loesung: 'Das Bett steht im Schlafzimmer.' },
        {
          typ: 'zuordnen',
          links: ['die Küche', 'das Bad', 'das Schlafzimmer', 'das Wohnzimmer'],
          rechts: ['Hier koche ich.', 'Hier dusche ich.', 'Hier schlafe ich.', 'Hier sehe ich fern.'],
          loesung: {
            'die Küche': 'Hier koche ich.',
            'das Bad': 'Hier dusche ich.',
            'das Schlafzimmer': 'Hier schlafe ich.',
            'das Wohnzimmer': 'Hier sehe ich fern.',
          },
        },
        {
          typ: 'korrektur',
          optionen: ['Ich gehe nach Hause.', 'Ich gehe zu Hause.'],
          loesung: 0,
          warum: 'Mit Bewegung ~~(movimiento)~~ heißt es **nach Hause**: *Ich gehe nach Hause.* — *zu Hause* = ohne Bewegung: *Ich bin zu Hause.* ~~(«voy A casa» ≠ «estoy EN casa»)~~',
        },
        {
          typ: 'korrektur',
          optionen: ['Wir haben nicht einen Garten.', 'Wir haben keinen Garten.'],
          loesung: 1,
          warum: 'Ein Nomen mit *ein* negierst du mit **kein**: *keinen Garten*. ~~(«No tenemos jardín» — no se dice «nicht einen».)~~',
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies die Anzeige. Richtig oder falsch? Wähle bei den Fragen die richtige Antwort. ~~(Lee el anuncio. ¿Verdadero o falso? En las preguntas, elige la respuesta correcta.)~~',
      textTitel: 'Anzeige: Wohnung in Leipzig',
      text: 'Schöne 3-Zimmer-Wohnung in Leipzig! Die Wohnung hat eine große Küche, ein Bad und einen Balkon. Sie ist hell und sehr ruhig. Ein Supermarkt ist direkt neben dem Haus. Die Möbel bleiben in der Wohnung: ein Bett, ein Schrank und ein Sofa. Die Miete ist 650 Euro plus Nebenkosten. Die Wohnung ist frei ab 1. Oktober. Haben Sie Interesse? Rufen Sie Frau Sommer an: 0341 445566.',
      items: [
        { typ: 'rf', aussage: 'Die Wohnung hat einen Balkon.', loesung: true },
        {
          typ: 'mc',
          frage: 'Wie hoch ist die Miete?',
          optionen: ['560 Euro plus Nebenkosten', '650 Euro plus Nebenkosten', '680 Euro plus Nebenkosten'],
          loesung: 1,
        },
        { typ: 'rf', aussage: 'Die Wohnung ist laut.', loesung: false },
        {
          typ: 'mc',
          frage: 'Welche Möbel bleiben in der Wohnung?',
          optionen: ['ein Bett, ein Schrank und ein Sofa', 'ein Tisch und vier Stühle', 'nur eine Lampe'],
          loesung: 0,
        },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'formular',
      titel: 'Schreiben',
      anweisung: 'Lies den Text. Ergänze das Formular. ~~(Lee el texto. Completa el formulario.)~~',
      quelle: 'Hallo! Ich heiße Sofía Ramos und wohne jetzt in Dresden. Meine neue Wohnung hat drei Zimmer und einen Balkon. Die Miete ist 580 Euro. Mein Lieblingszimmer ist die Küche.',
      felder: [
        { id: 'name', label: 'Name', erwartet: ['Sofía Ramos', 'Sofia Ramos', 'Ramos'] },
        { id: 'stadt', label: 'Stadt', erwartet: ['Dresden'] },
        { id: 'zimmer', label: 'Wie viele Zimmer?', erwartet: ['3', 'drei', 'drei Zimmer', '3 Zimmer'] },
        { id: 'miete', label: 'Miete', erwartet: ['580 Euro', '580'] },
        { id: 'lieblingszimmer', label: 'Lieblingszimmer', erwartet: ['die Küche', 'Küche'] },
      ],
    },
  ],
}
