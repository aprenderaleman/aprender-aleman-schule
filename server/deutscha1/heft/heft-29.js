// Übungsheft A1 — Lektion 29: Sprechen Teil 3 — Bitten formulieren
export default {
  lektion: 29,
  titel: 'Übungsheft — Sprechen Teil 3',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Training',
      anweisung: 'Trainiere die Bitten und die Reaktionen. Wähle, ergänze und ordne. ~~(Entrena las peticiones y las reacciones. Elige, completa y ordena.)~~',
      items: [
        {
          typ: 'mc',
          frage: 'Bildkarte „Fenster“ — Welche Bitte passt?',
          optionen: ['Können Sie bitte das Fenster öffnen?', 'Was kostet das Fenster?', 'Wo ist das Fenster?'],
          loesung: 0,
        },
        {
          typ: 'mc',
          frage: '„Gib mir bitte das Buch.“ — Welche Reaktion passt?',
          optionen: ['Hier bitte.', 'Ich wohne in Bonn.', 'Wie bitte heißt du?'],
          loesung: 0,
        },
        {
          typ: 'mc',
          frage: '„Hast du einen Stift für mich?“ — Du hast keinen Stift. Was sagst du?',
          optionen: ['Tut mir leid, ich habe keinen Stift.', 'Ja, gern.', 'Hier bitte.'],
          loesung: 0,
        },
        {
          typ: 'luecke',
          text: 'Ich {1} bitte ein Glas Wasser. — {2} Sie mir bitte helfen? — {3} mir bitte den Stift.',
          bank: ['möchte', 'Können', 'Gib', 'Ist'],
          loesungen: { 1: 'möchte', 2: 'Können', 3: 'Gib' },
        },
        { typ: 'satzbau', woerter: ['mir', 'Sie', 'helfen', 'bitte', 'können'], loesung: 'Können Sie mir bitte helfen?' },
        { typ: 'satzbau', woerter: ['einen', 'bitte', 'ich', 'Kaffee', 'möchte'], loesung: 'Ich möchte bitte einen Kaffee.' },
        {
          typ: 'zuordnen',
          links: ['Gib mir bitte deinen Stift.', 'Hast du ein Handy für mich?', 'Ich möchte bitte ein Glas Wasser.', 'Kannst du mir bitte helfen?'],
          rechts: ['Hier bitte, mein Stift.', 'Tut mir leid, mein Handy ist zu Hause.', 'Ja, gern. Hier ist das Wasser.', 'Kein Problem, ich helfe dir.'],
          loesung: {
            'Gib mir bitte deinen Stift.': 'Hier bitte, mein Stift.',
            'Hast du ein Handy für mich?': 'Tut mir leid, mein Handy ist zu Hause.',
            'Ich möchte bitte ein Glas Wasser.': 'Ja, gern. Hier ist das Wasser.',
            'Kannst du mir bitte helfen?': 'Kein Problem, ich helfe dir.',
          },
        },
        {
          typ: 'korrektur',
          optionen: ['Öffne bitte das Fenster.', 'Öffnest bitte das Fenster.'],
          loesung: 0,
          warum: 'Imperativ mit du: **ohne -st** — *Öffne!* ~~(El imperativo con du pierde la terminación -st.)~~',
        },
        {
          typ: 'korrektur',
          optionen: ['Können Sie mir bitte das Buch geben?', 'Können Sie mir das Buch?'],
          loesung: 0,
          warum: 'Mit *können* braucht der Satz ein zweites **Verb** am Ende: *… **geben**?* ~~(Con können, el verbo principal va al final — no se omite como en «¿me puede el libro?».)~~',
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies die Notiz. Richtig oder falsch? ~~(Lee la nota. ¿Verdadero o falso?)~~',
      textTitel: 'Notiz von Tim',
      text: 'Hallo Lena,\nich bin heute im Deutschkurs. Kannst du mir bitte helfen? Öffne bitte das Fenster in der Küche. Und gib mir bitte morgen dein Buch — mein Buch ist zu Hause bei meinen Eltern. Vielen Dank!\nBis morgen\nTim',
      items: [
        { typ: 'rf', aussage: 'Tim ist heute im Deutschkurs.', loesung: true },
        { typ: 'rf', aussage: 'Tims Buch ist im Deutschkurs.', loesung: false },
        {
          typ: 'mc',
          frage: 'Was öffnet Lena?',
          optionen: ['das Fenster in der Küche', 'die Tür', 'das Buch'],
          loesung: 0,
        },
        {
          typ: 'mc',
          frage: 'Was gibt Lena Tim morgen?',
          optionen: ['ein Handy', 'ihr Buch', 'ein Glas Wasser'],
          loesung: 1,
        },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'text',
      titel: 'Schreiben',
      anweisung: 'Schreib zwei Mini-Dialoge: Bitte und Reaktion. ~~(Escribe dos minidiálogos: petición y reacción.)~~',
      aufgabe: 'Bildkarte „Buch“ und Bildkarte „Tür“. Schreib für jede Karte eine Bitte und eine Reaktion — immer mit „bitte“!',
      punkte: [
        'Karte „Buch“: eine Bitte + eine Reaktion',
        'Karte „Tür“: eine Bitte + eine Reaktion',
        'Benutze möchten, Können Sie …? oder den Imperativ',
      ],
      minWoerter: 12,
      beispielLoesung: '— Gib mir bitte dein Buch. — Hier bitte!\n— Können Sie bitte die Tür öffnen? — Ja, gern.',
    },
  ],
}
