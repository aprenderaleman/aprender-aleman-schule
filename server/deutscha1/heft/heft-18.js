// Übungsheft A1 — Lektion 18: Hören: Gespräche & Ansagen
// Bloque 2 (Prüfungsstrategie): Teil 1 = Training der Korrektur-Strategie.
export default {
  lektion: 18,
  titel: 'Übungsheft — Hören: Gespräche & Ansagen',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Training',
      anweisung: 'Trainiere die Strategie. Lies jedes Transkript nur einmal. Dann antworte. ~~(Entrena la estrategia. Lee cada transcripción solo una vez. Luego responde.)~~',
      items: [
        {
          typ: 'mc',
          frage: 'Transkript: „— Treffen wir uns um sechs? — Nein, lieber um sieben.“ — Wann treffen sie sich?',
          optionen: ['um 7 Uhr', 'um 6 Uhr'],
          loesung: 0,
        },
        {
          typ: 'mc',
          frage: 'Transkript: „— Kommst du am Montag? — Montag geht leider nicht. Geht auch Dienstag? — Ja, Dienstag passt gut.“ — Wann kommt sie?',
          optionen: ['am Dienstag', 'am Montag'],
          loesung: 0,
        },
        {
          typ: 'mc',
          frage: 'Transkript: „— Kaufst du Brot? — Brot haben wir noch. Ich kaufe Milch.“ — Was kauft er?',
          optionen: ['Milch', 'Brot', 'Milch und Brot'],
          loesung: 0,
        },
        {
          typ: 'zuordnen',
          links: ['„Hallo, hier ist Paul.“', '„Der Termin geht leider nicht.“', '„Ruf mich bitte zurück!“'],
          rechts: ['Wer?', 'Warum?', 'Was tun?'],
          loesung: {
            '„Hallo, hier ist Paul.“': 'Wer?',
            '„Der Termin geht leider nicht.“': 'Warum?',
            '„Ruf mich bitte zurück!“': 'Was tun?',
          },
        },
        { typ: 'rf', aussage: 'Die erste Zahl im Gespräch ist immer die Lösung.', loesung: false },
        { typ: 'rf', aussage: '„Lieber“ und „leider“ sind Signalwörter für eine Korrektur.', loesung: true },
        {
          typ: 'rf',
          aussage: 'Transkript: „Hallo Herr Braun, hier ist die Praxis Doktor Winter. Ihr Termin am Freitag um 10 Uhr geht leider nicht. Können Sie um 12 Uhr kommen?“ — Der neue Termin ist um 12 Uhr.',
          loesung: true,
        },
        {
          typ: 'mc',
          frage: 'Du hörst eine Telefonnummer. Was machst du?',
          optionen: ['Ich schreibe sie sofort auf.', 'Ich warte bis zum Ende.'],
          loesung: 0,
        },
        {
          typ: 'luecke',
          text: 'Anna ist nicht da. Paul spricht auf den Anrufbeantworter: „Hier ist Paul. Ich habe eine {1} für dich. Ruf mich bitte {2}!“',
          bank: ['Nachricht', 'zurück', 'lieber'],
          loesungen: { 1: 'Nachricht', 2: 'zurück' },
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies den Text. Richtig oder falsch? ~~(Lee el texto. ¿Verdadero o falso?)~~',
      textTitel: 'Notiz von Tim',
      text: 'Hallo Sara, unser Kino-Abend morgen: Der Film um 18 Uhr passt leider nicht. Wir treffen uns lieber um 20 Uhr. Das Kino ist am Markt. Ich kaufe die Tickets. Bring bitte Schokolade mit! Bis morgen, Tim',
      items: [
        { typ: 'rf', aussage: 'Sie treffen sich um 18 Uhr.', loesung: false },
        { typ: 'rf', aussage: 'Das Kino ist am Markt.', loesung: true },
        {
          typ: 'mc',
          frage: 'Wer kauft die Tickets?',
          optionen: ['Tim', 'Sara'],
          loesung: 0,
        },
        {
          typ: 'mc',
          frage: 'Was muss Sara mitbringen?',
          optionen: ['Schokolade', 'die Tickets', 'Milch'],
          loesung: 0,
        },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'formular',
      titel: 'Schreiben',
      anweisung: 'Lies die Nachricht. Ergänze das Formular. ~~(Lee el mensaje. Completa el formulario.)~~',
      quelle: 'Hallo Frau López, hier ist die Zahnarztpraxis Doktor Sommer. Ihr Termin am Dienstag geht leider nicht. Bitte kommen Sie am Donnerstag um 11 Uhr. Unsere Telefonnummer ist 030 22 88 461. Bitte rufen Sie zurück. Auf Wiederhören!',
      felder: [
        { id: 'wer', label: 'Wer ruft an?', erwartet: ['Zahnarztpraxis Doktor Sommer', 'die Zahnarztpraxis Doktor Sommer', 'Praxis Doktor Sommer', 'die Zahnarztpraxis'] },
        { id: 'tag', label: 'Neuer Termin: Tag', erwartet: ['Donnerstag', 'am Donnerstag'] },
        { id: 'uhrzeit', label: 'Neuer Termin: Uhrzeit', erwartet: ['11 Uhr', 'um 11 Uhr', '11'] },
        { id: 'telefon', label: 'Telefonnummer', erwartet: ['030 22 88 461', '0302288461'] },
        { id: 'tun', label: 'Frau López muss …', erwartet: ['zurückrufen', 'anrufen', 'rufen Sie zurück', 'sie muss zurückrufen'] },
      ],
    },
  ],
}
