// Übungsheft A2 — Lektion 13: Komparativ & Superlativ
export default {
  lektion: 13,
  titel: 'Übungsheft — Komparativ & Superlativ',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Wähle oder ergänze die richtige Form. ~~(Elige o completa la forma correcta.)~~',
      items: [
        { typ: 'mc', frage: 'Berlin ist ___ als Bonn.', optionen: ['am größten', 'größer', 'mehr groß'], loesung: 1 },
        { typ: 'mc', frage: 'Kaffee schmeckt mir ___ als Tee.', optionen: ['besser', 'gut', 'am besten'], loesung: 0 },
        { typ: 'mc', frage: 'Was isst du am ___?', optionen: ['lieber', 'gern', 'liebsten'], loesung: 2 },
        {
          typ: 'luecke',
          text: 'Mein Bruder ist 30, ich bin 25. Er ist {1} als ich. Aber ich bin 1,90 Meter groß und er nur 1,80 Meter. Ich bin {2} als er.',
          bank: ['älter', 'größer', 'alt'],
          loesungen: { 1: 'älter', 2: 'größer' },
        },
        {
          typ: 'luecke',
          text: 'Ich trinke gern Tee, aber Kaffee trinke ich {1} als Tee. Wasser ist mein Lieblingsgetränk. Das trinke ich {2}.',
          bank: ['lieber', 'am liebsten', 'gerner'],
          loesungen: { 1: 'lieber', 2: 'am liebsten' },
        },
        { typ: 'satzbau', woerter: ['so', 'ist', 'Mein', 'Auto', 'alt', 'wie', 'dein', 'Auto'], loesung: 'Mein Auto ist so alt wie dein Auto.' },
        { typ: 'satzbau', woerter: ['Am', 'schwimme', 'liebsten', 'ich', 'im', 'See'], loesung: 'Am liebsten schwimme ich im See.' },
        {
          typ: 'zuordnen',
          links: ['gut', 'gern', 'viel', 'alt'],
          rechts: ['besser', 'lieber', 'mehr', 'älter'],
          loesung: { 'gut': 'besser', 'gern': 'lieber', 'viel': 'mehr', 'alt': 'älter' },
        },
        {
          typ: 'korrektur',
          optionen: ['Madrid ist mehr groß als Toledo.', 'Madrid ist größer als Toledo.'],
          loesung: 1,
          warum: '«más grande» NO es *mehr groß* — el comparativo es UNA palabra: **größer**. ~~(adjetivo + -er, a menudo con Umlaut.)~~',
        },
        {
          typ: 'korrektur',
          optionen: ['Ich bin so alt wie du.', 'Ich bin so alt als du.'],
          loesung: 0,
          warum: 'Igualdad = **so … wie**: *so alt wie du*. ~~(als solo va con el comparativo: älter als.)~~',
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies den Text. Richtig oder falsch? ~~(Lee el texto. ¿Verdadero o falso?)~~',
      textTitel: 'Anzeige: Café Sonnenblick',
      text: 'Neu am Marktplatz: Café Sonnenblick! Unser Café ist jetzt größer als früher und viel schöner. Der Kaffee kostet nur 2 Euro — im Café am Bahnhof kostet er mehr. Am Samstag ist Kuchentag: Der Apfelkuchen schmeckt am besten, sagen unsere Gäste. Die Kinder trinken am liebsten unseren Kakao. Wir sind jung, schnell und freundlich — so gut wie bei Oma, aber schneller! Öffnungszeiten: Montag bis Sonntag, 8 bis 18 Uhr.',
      items: [
        { typ: 'rf', aussage: 'Das Café ist jetzt kleiner als früher.', loesung: false },
        {
          typ: 'mc',
          frage: 'Was kostet der Kaffee im Café Sonnenblick?',
          optionen: ['2 Euro', 'mehr als im Café am Bahnhof', '8 Euro'],
          loesung: 0,
        },
        { typ: 'rf', aussage: 'Die Gäste sagen: Der Apfelkuchen schmeckt am besten.', loesung: true },
        {
          typ: 'mc',
          frage: 'Was trinken die Kinder am liebsten?',
          optionen: ['Kaffee', 'Kakao', 'Tee'],
          loesung: 1,
        },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'text',
      titel: 'Schreiben',
      anweisung: 'Schreib eine E-Mail an deine Freundin Carmen. ~~(Escribe un correo a tu amiga Carmen.)~~',
      aufgabe: 'Thema: deine Stadt. Schreib zu allen drei Punkten.',
      punkte: [
        'Was gefällt dir in deiner Stadt am besten?',
        'Vergleiche: Ist deine Stadt größer oder kleiner als Madrid?',
        'Was machst du dort am liebsten?',
      ],
      minWoerter: 25,
      beispielLoesung: 'Liebe Carmen, ich wohne in Málaga. Am besten gefällt mir das Meer. Málaga ist kleiner als Madrid, aber der Winter ist schöner — es ist nicht so kalt wie in Madrid. Am liebsten gehe ich mit meiner Schwester ans Meer. Viele Grüße, Lucía',
    },
  ],
}
