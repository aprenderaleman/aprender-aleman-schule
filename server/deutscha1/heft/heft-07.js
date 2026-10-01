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
      typ: 'hoeren',
      titel: 'Hören',
      anweisung: 'Hör das Gespräch. Was ist richtig? ~~(Escucha la conversación. ¿Qué es correcto?)~~',
      audio: {
        transcript: 'Frau: Pedro, wer ist das?\nMann: Das ist mein Freund Karl.\nFrau: Woher kommt er?\nMann: Er kommt aus Wien.\nFrau: Wohnt er auch in Wien?\nMann: Nein, er wohnt jetzt in Zürich.\nFrau: Was macht er in Zürich?\nMann: Er lernt Englisch.\nFrau: Und wann kommt er?\nMann: Er kommt am Sonntag.',
      },
      items: [
        { typ: 'rf', aussage: 'Karl wohnt jetzt in Wien.', loesung: false },
        { typ: 'mc', frage: 'Was macht Karl in Zürich?', optionen: ['Er lernt Deutsch.', 'Er macht Sport.', 'Er lernt Englisch.'], loesung: 2 },
        { typ: 'rf', aussage: 'Karl kommt am Sonntag.', loesung: true },
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
    {
      typ: 'sprechen',
      titel: 'Sprechen',
      anweisung: 'Antworte auf die Fragen. Sprich 40 Sekunden. ~~(Responde a las preguntas. Habla 40 segundos.)~~',
      aufgabe: 'Eine Person im Kurs fragt dich. Antworte im ganzen Satz. Stell dann auch eine Frage. ~~(Una persona del curso te pregunta. Responde con frases completas. Después haz tú también una pregunta.)~~',
      punkte: ['Wie heißt du?', 'Woher kommst du? Wo wohnst du?', 'Sprichst du Englisch?', 'deine Frage: Und du? …'],
      redemittel: ['Ich heiße …', 'Ich komme aus …', 'Ich wohne in …', 'Ja, ich spreche … / Nein, ich spreche …'],
      maxSekunden: 40,
      beispielLoesung: 'Ich heiße Lucía. Ich komme aus Argentinien. Ich wohne jetzt in Frankfurt. Ja, ich spreche Englisch und ein bisschen Deutsch. Und du? Woher kommst du?',
    },
  ],
}
