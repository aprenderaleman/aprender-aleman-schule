// Übungsheft A1 — Lektion 17: Modul Hören — Überblick
// Bloque 2 (Prüfungsstrategie): Teil 1 = Training der Strategie, keine neue Grammatik.
export default {
  lektion: 17,
  titel: 'Übungsheft — Modul Hören: Überblick',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Training',
      anweisung: 'Trainiere die Hören-Strategie. Lies und antworte. ~~(Entrena la estrategia de Hören. Lee y responde.)~~',
      items: [
        {
          typ: 'mc',
          frage: '„Achtung am Gleis 2: Der Zug nach Bonn hat 10 Minuten Verspätung.“ — Was ist das?',
          optionen: ['eine Durchsage', 'ein Gespräch', 'eine Nachricht auf dem Anrufbeantworter'],
          loesung: 0,
        },
        {
          typ: 'mc',
          frage: '„Hallo, hier ist Nina. Ruf mich bitte zurück!“ — Wo hörst du das?',
          optionen: ['auf dem Anrufbeantworter', 'am Bahnhof', 'im Supermarkt'],
          loesung: 0,
        },
        {
          typ: 'mc',
          frage: '„— Was möchten Sie trinken? — Einen Tee, bitte.“ — Was ist das?',
          optionen: ['ein Gespräch', 'eine Durchsage'],
          loesung: 0,
        },
        {
          typ: 'zuordnen',
          links: ['Wann beginnt der Film?', 'Wie ist die Telefonnummer?', 'Wie heißt die Lehrerin?', 'Wo ist der Deutschkurs?'],
          rechts: ['eine Uhrzeit', 'eine Zahl', 'einen Namen', 'einen Ort'],
          loesung: {
            'Wann beginnt der Film?': 'eine Uhrzeit',
            'Wie ist die Telefonnummer?': 'eine Zahl',
            'Wie heißt die Lehrerin?': 'einen Namen',
            'Wo ist der Deutschkurs?': 'einen Ort',
          },
        },
        { typ: 'rf', aussage: 'Im Hören musst du jedes Wort verstehen.', loesung: false },
        { typ: 'rf', aussage: 'Du liest zuerst die Aufgaben. Dann hörst du den Text.', loesung: true },
        {
          typ: 'rf',
          aussage: 'Transkript: „Hallo Frau Marker, hier ist die Praxis Doktor Steinke. Ihr Termin ist am Dienstag um 9 Uhr.“ — Der Termin ist um 10 Uhr.',
          loesung: false,
        },
        { typ: 'rf', aussage: 'Nicht sicher? Du kreuzt trotzdem an — es gibt keine Minuspunkte.', loesung: true },
        {
          typ: 'luecke',
          text: 'Am Ende kommen alle Lösungen auf den {1}. Nicht sicher? Du musst trotzdem {2}.',
          bank: ['Antwortbogen', 'ankreuzen', 'Durchsage'],
          loesungen: { 1: 'Antwortbogen', 2: 'ankreuzen' },
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies den Text. Richtig oder falsch? ~~(Lee el texto. ¿Verdadero o falso?)~~',
      textTitel: 'E-Mail von Carlos',
      text: 'Hallo Ana, mein Deutschkurs ist super. Wir üben jetzt Hören. Die Lehrerin sagt: Zuerst die Aufgaben lesen, dann hören. Heute üben wir Durchsagen am Bahnhof. Ich verstehe nicht jedes Wort — aber das ist normal. Am Freitag machen wir den Modellsatz mit Audio. Bis bald! Carlos',
      items: [
        { typ: 'rf', aussage: 'Carlos übt jetzt Hören.', loesung: true },
        { typ: 'rf', aussage: 'Carlos versteht jedes Wort.', loesung: false },
        {
          typ: 'mc',
          frage: 'Was üben sie heute?',
          optionen: ['Durchsagen', 'Gespräche', 'Ansagen am Telefon'],
          loesung: 0,
        },
        {
          typ: 'mc',
          frage: 'Wann machen sie den Modellsatz?',
          optionen: ['am Freitag', 'am Montag', 'heute'],
          loesung: 0,
        },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'text',
      titel: 'Schreiben',
      anweisung: 'Schreib eine Nachricht. ~~(Escribe un mensaje.)~~',
      aufgabe: 'Du rufst deinen Freund Leo an. Er ist nicht da. Schreib deine Nachricht für den Anrufbeantworter. ~~(Llamas a tu amigo Leo. No está. Escribe tu mensaje para el contestador.)~~',
      punkte: [
        'Wer bist du?',
        'Warum rufst du an? (ein Termin, ein Problem …)',
        'Was muss Leo machen? (zurückrufen …)',
      ],
      minWoerter: 15,
      beispielLoesung: 'Hallo Leo, hier ist Marta. Wir haben morgen einen Termin um 10 Uhr. Ruf mich bitte zurück!',
    },
  ],
}
