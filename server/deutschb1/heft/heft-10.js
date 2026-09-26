// Übungsheft B1 — Lektion 10: Adjektivdeklination
export default {
  lektion: 10,
  titel: 'Übungsheft — Adjektivdeklination',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Schau zuerst auf den Artikel: der/die/das, ein/kein oder kein Artikel? Wähle dann die Endung.',
      items: [
        { typ: 'mc', frage: 'Ich kaufe den ___ Mantel.', optionen: ['schwarze', 'schwarzen', 'schwarzer'], loesung: 1 },
        { typ: 'mc', frage: 'Wir haben leider ein ___ Problem.', optionen: ['kleine', 'kleinen', 'kleines'], loesung: 2 },
        { typ: 'mc', frage: 'Zum Frühstück trinkt Jonas gern ___ Tee.', optionen: ['heißen', 'heißer', 'heiße'], loesung: 0 },
        {
          typ: 'luecke',
          text: 'Mein {1} Nachbar hat ein {2} Auto. Er fährt jeden Tag mit dem {3} Auto zur Arbeit.',
          bank: ['neuer', 'neues', 'rotes', 'rote', 'roten'],
          loesungen: { 1: 'neuer', 2: 'rotes', 3: 'roten' },
        },
        {
          typ: 'luecke',
          text: 'Emma sucht eine {1} Wohnung mit einem {2} Balkon. Die Wohnung darf nicht zu {3} sein.',
          bank: ['günstige', 'günstigen', 'großen', 'großem', 'teuer', 'teure'],
          loesungen: { 1: 'günstige', 2: 'großen', 3: 'teuer' },
        },
        {
          typ: 'luecke',
          text: 'Im Café Sonne gibt es {1} Kuchen mit {2} Sahne und {3} Brot.',
          bank: ['leckeren', 'leckerer', 'frischer', 'frischen', 'warmes', 'warme'],
          loesungen: { 1: 'leckeren', 2: 'frischer', 3: 'warmes' },
        },
        {
          typ: 'zuordnen',
          links: ['der klein__ Hund', 'ein klein__ Hund (Nom.)', 'ein klein__ Kind', 'mit kalt__ Wasser', 'mit dem klein__ Kind'],
          rechts: ['-e', '-er', '-es', '-em', '-en'],
          loesung: {
            'der klein__ Hund': '-e',
            'ein klein__ Hund (Nom.)': '-er',
            'ein klein__ Kind': '-es',
            'mit kalt__ Wasser': '-em',
            'mit dem klein__ Kind': '-en',
          },
        },
        { typ: 'satzbau', woerter: ['Kleid', 'trägt', 'rotes', 'heute', 'ein', 'Aylin'], loesung: 'Aylin trägt heute ein rotes Kleid.', alt: ['Heute trägt Aylin ein rotes Kleid.'] },
        {
          typ: 'korrektur',
          optionen: ['Der Pullover ist rote.', 'Der Pullover ist rot.'],
          loesung: 1,
          warum: 'Después de **sein** el adjetivo **no lleva terminación**. En español concuerda (*es roja*); en alemán no.',
        },
        {
          typ: 'korrektur',
          optionen: ['Ich habe einen neuen Computer gekauft.', 'Ich habe ein neuer Computer gekauft.'],
          loesung: 0,
          warum: '*Computer* es masculino y aquí es objeto → **Akkusativ: einen neu-en**. El error típico es dejar la forma del nominativo.',
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies die Anzeige. Löse dann die vier Aufgaben.',
      textTitel: 'Anzeige: Wir ziehen um – günstige Möbel',
      text: 'Wir ziehen Ende Oktober nach Leipzig und verkaufen deshalb einige Möbel. Ein großer Esstisch aus hellem Holz, 1,80 Meter lang, in sehr gutem Zustand: 120 Euro. Dazu gibt es vier alte Stühle mit blauen Kissen, zusammen 60 Euro. Außerdem verkaufen wir ein kleines weißes Regal für 25 Euro. Es hat ein paar kleine Kratzer, aber es ist noch stabil. Das rote Sofa ist leider schon weg. Die Möbel stehen im dritten Stock, und es gibt keinen Aufzug. Sie müssen also alles selbst nach unten tragen und mit einem eigenen Auto abholen. Wir liefern nicht. Sie können die Möbel am Samstag zwischen 10 und 14 Uhr ansehen. Bitte schreiben Sie vorher eine kurze Nachricht. Familie Okafor',
      items: [
        { typ: 'rf', aussage: 'Der Esstisch ist aus dunklem Holz.', loesung: false },
        {
          typ: 'mc',
          frage: 'Was kostet das weiße Regal?',
          optionen: ['60 Euro', '25 Euro', '120 Euro'],
          loesung: 1,
        },
        { typ: 'rf', aussage: 'Das rote Sofa kann man nicht mehr kaufen.', loesung: true },
        {
          typ: 'mc',
          frage: 'Wie kommen die Möbel zum Käufer?',
          optionen: ['Der Käufer holt sie mit dem eigenen Auto ab.', 'Familie Okafor liefert sie.', 'Man bringt sie mit dem Aufzug nach unten.'],
          loesung: 0,
        },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'formular',
      titel: 'Schreiben',
      anweisung: 'Lies die Nachricht an das Fundbüro. Ergänze dann das Formular.',
      quelle: 'Guten Tag, mein Name ist Tomasz Nowak. Ich habe gestern Abend im Bus 42 meinen Rucksack verloren. Es ist ein kleiner grüner Rucksack mit einem schwarzen Reißverschluss. Darin sind eine blaue Jacke und ein altes Handy. Bitte rufen Sie mich an, wenn Sie ihn finden!',
      felder: [
        { id: 'name', label: 'Name', erwartet: ['Tomasz Nowak', 'Nowak'] },
        { id: 'gegenstand', label: 'Verlorener Gegenstand', erwartet: ['Rucksack', 'ein Rucksack', 'ein kleiner grüner Rucksack', 'kleiner grüner Rucksack', 'grüner Rucksack'] },
        { id: 'farbe', label: 'Rucksack — Farbe', erwartet: ['grün'] },
        { id: 'ort', label: 'Wo verloren?', erwartet: ['im Bus 42', 'Bus 42', 'im Bus', 'Bus Nummer 42'] },
        { id: 'jacke', label: 'Jacke — Farbe', erwartet: ['blau'] },
      ],
    },
  ],
}
