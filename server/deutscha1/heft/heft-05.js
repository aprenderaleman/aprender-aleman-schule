// Übungsheft A1 — Lektion 05: „haben" & Präsens regelmäßiger Verben
export default {
  lektion: 5,
  titel: 'Übungsheft — „haben" & regelmäßige Verben',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Wähle oder schreibe die richtige Form. ~~(Elige o escribe la forma correcta.)~~',
      items: [
        { typ: 'mc', frage: 'Ich ___ eine Frage.', optionen: ['habe', 'hast', 'hat'], loesung: 0 },
        { typ: 'mc', frage: 'Du ___ Zeit.', optionen: ['hast', 'habe', 'habt'], loesung: 0 },
        {
          typ: 'luecke',
          text: 'Wir {1} in Madrid. Paul {2} aus Berlin. Ihr {3} Deutsch.',
          bank: ['wohnen', 'kommt', 'lernt', 'wohnt'],
          loesungen: { 1: 'wohnen', 2: 'kommt', 3: 'lernt' },
        },
        {
          typ: 'luecke',
          text: 'Ich {1} Sport. Du {2} ein Auto.',
          bank: ['mache', 'hast', 'habt'],
          loesungen: { 1: 'mache', 2: 'hast' },
        },
        { typ: 'satzbau', woerter: ['wohne', 'ich', 'in', 'Berlin'], loesung: 'Ich wohne in Berlin.' },
        { typ: 'satzbau', woerter: ['Hunger', 'wir', 'haben'], loesung: 'Wir haben Hunger.' },
        {
          typ: 'zuordnen',
          links: ['ich', 'du', 'er / sie / es', 'ihr'],
          rechts: ['habe', 'hast', 'hat', 'habt'],
          loesung: { 'ich': 'habe', 'du': 'hast', 'er / sie / es': 'hat', 'ihr': 'habt' },
        },
        {
          typ: 'korrektur',
          optionen: ['Er wohnt in Berlin.', 'Er wohn in Berlin.'],
          loesung: 0,
          warum: 'er/sie/es hat immer **-t**: *er wohnt, sie lernt*. ~~(El error nº 1: olvidar la -t de él/ella.)~~',
        },
        {
          typ: 'korrektur',
          optionen: ['Ich bin 30 Jahre alt.', 'Ich habe 30 Jahre.'],
          loesung: 0,
          warum: 'La edad en alemán va con **sein**: *Ich bin 30 Jahre alt*. ~~(«Tengo 30 años» no se traduce con haben.)~~',
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies den Text. Richtig oder falsch? ~~(Lee el texto. ¿Verdadero o falso?)~~',
      textTitel: 'E-Mail von Pablo',
      text: 'Hallo Lena! Ich bin Pablo und ich komme aus Chile. Ich wohne jetzt in Hamburg. Ich lerne Deutsch und ich habe viele Fragen! Meine Frau lernt auch Deutsch. Wir machen Sport. Ich habe zwei Kinder. Sie lernen Englisch. Und du? Was machst du? Viele Grüße, Pablo',
      items: [
        { typ: 'rf', aussage: 'Pablo kommt aus Chile.', loesung: true },
        { typ: 'rf', aussage: 'Pablo wohnt in Chile.', loesung: false },
        {
          typ: 'mc',
          frage: 'Wer lernt auch Deutsch?',
          optionen: ['die Frau von Pablo', 'die Kinder von Pablo', 'Lena'],
          loesung: 0,
        },
        { typ: 'rf', aussage: 'Die Kinder lernen Englisch.', loesung: true },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'text',
      titel: 'Schreiben',
      anweisung: 'Schreib 3 Sätze über dich. ~~(Escribe 3 frases sobre ti.)~~',
      aufgabe: 'Über dich: Wo wohnst du? Was lernst du? Was hast du? ~~(Sobre ti: ¿dónde vives? ¿qué aprendes? ¿qué tienes?)~~',
      punkte: [
        'wohnen: Ich wohne in …',
        'lernen: Ich lerne …',
        'haben: Ich habe …',
      ],
      minWoerter: 12,
      beispielLoesung: 'Ich wohne in Lima. Ich lerne Deutsch. Ich habe zwei Kinder und ein Auto.',
    },
  ],
}
