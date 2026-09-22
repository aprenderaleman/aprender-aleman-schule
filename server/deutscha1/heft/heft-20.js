// Übungsheft A1 — Lektion 20: Modul Lesen — Überblick
// Bloque 2 (Prüfungsstrategie): Teil 1 = Training (Textsorten + Strategie).
export default {
  lektion: 20,
  titel: 'Übungsheft — Modul Lesen: Überblick',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Training',
      anweisung: 'Trainiere die Lesen-Strategie. Lies die Mini-Texte und antworte. ~~(Entrena la estrategia de Lesen. Lee los minitextos y responde.)~~',
      items: [
        {
          typ: 'mc',
          frage: '„Zu verkaufen: Tisch, nur 30 Euro. Tel. 030 11 22 33“ — Was ist das?',
          optionen: ['eine Anzeige', 'eine Notiz', 'ein Schild'],
          loesung: 0,
        },
        {
          typ: 'mc',
          frage: '„Heute geschlossen“ — Was ist das?',
          optionen: ['ein Schild', 'eine E-Mail', 'eine Anzeige'],
          loesung: 0,
        },
        {
          typ: 'mc',
          frage: '„Hallo Lena, ich komme um 19 Uhr. Bis später!“ — Was ist das?',
          optionen: ['eine Notiz', 'eine Anzeige', 'ein Aushang'],
          loesung: 0,
        },
        {
          typ: 'zuordnen',
          links: ['die Notiz', 'die Anzeige', 'das Schild', 'der Aushang'],
          rechts: ['„Ich komme um 18 Uhr.“', '„Fahrrad, nur 50 Euro.“', '„Geschlossen“', '„Am Montag kein Wasser.“'],
          loesung: {
            'die Notiz': '„Ich komme um 18 Uhr.“',
            'die Anzeige': '„Fahrrad, nur 50 Euro.“',
            'das Schild': '„Geschlossen“',
            'der Aushang': '„Am Montag kein Wasser.“',
          },
        },
        { typ: 'rf', aussage: 'Im Lesen musst du jedes Wort verstehen.', loesung: false },
        { typ: 'rf', aussage: 'Du liest zuerst die Aufgabe, dann den Text.', loesung: true },
        {
          typ: 'mc',
          frage: 'Notiz: „Der Kurs ist im Raum 2, nicht im Raum 5.“ — Wo ist der Kurs?',
          optionen: ['im Raum 2', 'im Raum 5'],
          loesung: 0,
        },
        {
          typ: 'rf',
          aussage: 'Anzeige: „Deutschkurs am Abend, montags 19-21 Uhr, 40 Euro pro Monat.“ — Der Kurs kostet 40 Euro pro Monat.',
          loesung: true,
        },
        {
          typ: 'rf',
          aussage: 'Anzeige: „Deutschkurs montags 19-21 Uhr.“ — Der Kurs ist am Dienstag.',
          loesung: false,
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies die Anzeige. Richtig oder falsch? ~~(Lee el anuncio. ¿Verdadero o falso?)~~',
      textTitel: 'Anzeige: Deutschkurs für Anfänger',
      text: 'Deutschkurs für Anfänger! Unser Kurs beginnt am 5. Oktober. Wir lernen dienstags und donnerstags von 18 bis 20 Uhr, im Raum 4. Der Kurs kostet 45 Euro pro Monat. Die Bücher sind gratis. Bitte bis 1. Oktober anrufen: Sprachschule Nord, Tel. 040 33 44 55.',
      items: [
        { typ: 'rf', aussage: 'Der Kurs beginnt am 1. Oktober.', loesung: false },
        { typ: 'rf', aussage: 'Der Kurs ist dienstags und donnerstags.', loesung: true },
        {
          typ: 'mc',
          frage: 'Wie viel kostet der Kurs?',
          optionen: ['45 Euro pro Monat', '45 Euro pro Woche', '20 Euro pro Monat'],
          loesung: 0,
        },
        {
          typ: 'mc',
          frage: 'Wo ist der Kurs?',
          optionen: ['im Raum 4', 'im Raum 18', 'im Raum 40'],
          loesung: 0,
        },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'formular',
      titel: 'Schreiben',
      anweisung: 'Lies den Text. Ergänze das Formular. ~~(Lee el texto. Completa el formulario.)~~',
      quelle: 'Guten Tag! Ich heiße Rosa Marino und ich komme aus Italien. Ich wohne jetzt in Hamburg, in der Hafenstraße 22. Ich möchte den Deutschkurs am Abend machen. Meine Telefonnummer ist 040 66 77 889.',
      felder: [
        { id: 'name', label: 'Name', erwartet: ['Rosa Marino', 'Marino'] },
        { id: 'land', label: 'Land', erwartet: ['Italien'] },
        { id: 'stadt', label: 'Stadt jetzt', erwartet: ['Hamburg'] },
        { id: 'strasse', label: 'Straße', erwartet: ['Hafenstraße 22', 'Hafenstraße'] },
        { id: 'telefon', label: 'Telefonnummer', erwartet: ['040 66 77 889', '04066 77889', '0406677889'] },
      ],
    },
  ],
}
