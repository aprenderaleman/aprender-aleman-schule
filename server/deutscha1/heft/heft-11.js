// Übungsheft A1 — Lektion 11: Possessivartikel
export default {
  lektion: 11,
  titel: 'Übungsheft — Possessivartikel',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Wähle, ergänze oder ordne. ~~(Elige, completa u ordena.)~~',
      items: [
        { typ: 'mc', frage: 'Wie heißt ___ Vater? (du)', optionen: ['dein', 'deine', 'deinen'], loesung: 0 },
        { typ: 'mc', frage: 'Wir haben ein Auto. ___ Auto ist neu.', optionen: ['Unser', 'Unsere', 'Euer'], loesung: 0 },
        { typ: 'mc', frage: 'Das ist Paul. Wie heißt ___ Schwester?', optionen: ['seine', 'ihre', 'sein'], loesung: 0 },
        {
          typ: 'luecke',
          text: 'Das ist meine Freundin Sofia. {1} Bruder wohnt in Lima. Und das ist Marco. {2} Frau heißt Julia.',
          bank: ['Ihr', 'Seine', 'Sein'],
          loesungen: { 1: 'Ihr', 2: 'Seine' },
        },
        {
          typ: 'luecke',
          text: 'Frau Weber, wie ist {1} Name? Und wie ist {2} Telefonnummer?',
          bank: ['Ihr', 'Ihre', 'Sein'],
          loesungen: { 1: 'Ihr', 2: 'Ihre' },
        },
        { typ: 'satzbau', woerter: ['wohnen', 'Meine', 'in', 'Eltern', 'Sevilla'], loesung: 'Meine Eltern wohnen in Sevilla.', alt: ['In Sevilla wohnen meine Eltern.'] },
        { typ: 'satzbau', woerter: ['dein', 'heißt', 'Wie', 'Bruder'], loesung: 'Wie heißt dein Bruder?' },
        {
          typ: 'zuordnen',
          links: ['ich', 'du', 'er', 'sie (= ella)', 'wir', 'Sie (= usted)'],
          rechts: ['mein/meine', 'dein/deine', 'sein/seine', 'ihr/ihre', 'unser/unsere', 'Ihr/Ihre'],
          loesung: {
            'ich': 'mein/meine',
            'du': 'dein/deine',
            'er': 'sein/seine',
            'sie (= ella)': 'ihr/ihre',
            'wir': 'unser/unsere',
            'Sie (= usted)': 'Ihr/Ihre',
          },
        },
        {
          typ: 'korrektur',
          optionen: ['Das ist Ana. Ihr Bruder heißt Luis.', 'Das ist Ana. Sein Bruder heißt Luis.'],
          loesung: 0,
          warum: 'El posesivo depende del **dueño**: Ana es mujer → **ihr**. ~~(él → sein, ella → ihr — «su» español no distingue, el alemán sí.)~~',
        },
        {
          typ: 'korrektur',
          optionen: ['Meine Mutter heißt Carmen.', 'Mein Mutter heißt Carmen.'],
          loesung: 0,
          warum: '*die Mutter* es femenino → terminación **-e**: **meine** Mutter. ~~(die-Wort o plural → -e.)~~',
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies die Notiz. Richtig oder falsch? ~~(Lee la nota. ¿Verdadero o falso?)~~',
      textTitel: 'Notiz von Lena',
      text: 'Hallo Tom! Meine Familie kommt am Sonntag. Meine Eltern sind schon hier. Mein Bruder Jan und seine Frau Julia sind auch da. Ihre Kinder sind klein und sehr nett. Meine Schwester Mia kommt nicht — sie arbeitet am Sonntag. Kommst du auch? Deine Lena',
      items: [
        { typ: 'rf', aussage: 'Die Familie von Lena kommt am Sonntag.', loesung: true },
        { typ: 'rf', aussage: 'Julia ist die Schwester von Jan.', loesung: false },
        {
          typ: 'mc',
          frage: 'Wer arbeitet am Sonntag?',
          optionen: ['Mia', 'Julia', 'Lena'],
          loesung: 0,
        },
        { typ: 'rf', aussage: 'Die Kinder von Jan und Julia sind klein.', loesung: true },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'text',
      titel: 'Schreiben',
      anweisung: 'Schreib 4 Sätze. ~~(Escribe 4 frases.)~~',
      aufgabe: 'Schreib über deine Familie. Benutze mein/meine. ~~(Escribe sobre tu familia. Usa mein/meine.)~~',
      punkte: [
        'Wie heißt dein Vater / deine Mutter? ~~(¿Cómo se llama tu padre / tu madre?)~~',
        'Hast du einen Bruder oder eine Schwester? ~~(¿Tienes hermanos?)~~',
        'Wo wohnt deine Familie? ~~(¿Dónde vive tu familia?)~~',
      ],
      minWoerter: 16,
      beispielLoesung: 'Meine Mutter heißt Rosa und mein Vater heißt Pedro. Ich habe einen Bruder. Sein Name ist Juan und er ist 20 Jahre alt. Meine Familie wohnt in Valencia.',
    },
  ],
}
