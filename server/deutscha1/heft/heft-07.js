// Übungsheft A1 — Lektion 07: W-Fragen & Ja/Nein-Fragen
export default {
  lektion: 7,
  titel: 'Übungsheft — W-Fragen & Ja/Nein-Fragen',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Wähle die richtige Form. ~~(Elige la forma correcta.)~~',
      items: [
        { typ: 'mc', frage: '___ wohnst du? — In Sevilla.', optionen: ['Wo', 'Woher', 'Wer'], loesung: 0 },
        { typ: 'mc', frage: '___ kommst du? — Aus Mexiko.', optionen: ['Woher', 'Wo', 'Was'], loesung: 0 },
        { typ: 'mc', frage: '___ alt bist du? — 30.', optionen: ['Wie', 'Was', 'Wann'], loesung: 0 },
        {
          typ: 'luecke',
          text: '{1} ist das? — Das ist Anna. {2} machst du? — Sport.',
          bank: ['Wer', 'Was', 'Wo'],
          loesungen: { 1: 'Wer', 2: 'Was' },
        },
        { typ: 'satzbau', woerter: ['du', 'Woher', 'kommst'], loesung: 'Woher kommst du?' },
        { typ: 'satzbau', woerter: ['Sie', 'Kinder', 'Haben'], loesung: 'Haben Sie Kinder?' },
        {
          typ: 'zuordnen',
          links: ['wer', 'wo', 'woher', 'wann', 'wie'],
          rechts: ['¿quién?', '¿dónde?', '¿de dónde?', '¿cuándo?', '¿cómo?'],
          loesung: {
            'wer': '¿quién?',
            'wo': '¿dónde?',
            'woher': '¿de dónde?',
            'wann': '¿cuándo?',
            'wie': '¿cómo?',
          },
        },
        {
          typ: 'korrektur',
          optionen: ['Kommst du aus Spanien?', 'Du kommst aus Spanien?'],
          loesung: 0,
          warum: 'La pregunta de ja/nein empieza con el **Verb**: *Kommst du…?* ~~(En español preguntas solo con la entonación — en alemán el verbo va primero.)~~',
        },
        {
          typ: 'korrektur',
          optionen: ['Wo wohnst du?', 'Wo du wohnst?'],
          loesung: 0,
          warum: 'En la W-Frage el verbo va en **Position 2**: *Wo wohnst du?* ~~(Palabra-W primero, verbo segundo.)~~',
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies den Text. Richtig oder falsch? ~~(Lee el texto. ¿Verdadero o falso?)~~',
      textTitel: 'Anzeige: Deutschkurs',
      text: 'Neu in Berlin? Lernst du Deutsch? Unser Kurs beginnt am Montag. Wer? Frau Schmidt, Lehrerin aus Wien. Wo? Kursraum 2, Gartenstraße 5. Wann? Montag und Mittwoch, 18 Uhr. Wie viel kostet das? 20 Euro pro Monat. Hast du Fragen? Telefon: 030 445566.',
      items: [
        { typ: 'rf', aussage: 'Der Kurs beginnt am Montag.', loesung: true },
        { typ: 'rf', aussage: 'Frau Schmidt kommt aus Berlin.', loesung: false },
        {
          typ: 'mc',
          frage: 'Wie viel kostet der Kurs?',
          optionen: ['20 Euro pro Monat', '18 Euro pro Monat', '5 Euro pro Monat'],
          loesung: 0,
        },
        {
          typ: 'mc',
          frage: 'Wann ist der Kurs?',
          optionen: ['Montag und Mittwoch, 18 Uhr', 'Montag und Freitag, 20 Uhr'],
          loesung: 0,
        },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'text',
      titel: 'Schreiben',
      anweisung: 'Schreib 3 Fragen. ~~(Escribe 3 preguntas.)~~',
      aufgabe: 'Eine neue Person ist im Kurs. Schreib 3 Fragen an die Person. ~~(Una persona nueva llega al curso. Escríbele 3 preguntas.)~~',
      punkte: [
        'eine Frage mit wo oder woher',
        'eine Frage mit wie',
        'eine Ja/Nein-Frage: das Verb zuerst',
      ],
      minWoerter: 12,
      beispielLoesung: 'Wo wohnst du? Wie alt bist du? Sprichst du Englisch? Hast du Kinder?',
    },
  ],
}
