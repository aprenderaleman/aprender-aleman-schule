// Übungsheft A1 — Lektion 22: Lesen: Schilder & Aushänge
// Bloque 2 (Prüfungsstrategie): Teil 1 = Training (Schilder-Botschaften + kein/verboten).
export default {
  lektion: 22,
  titel: 'Übungsheft — Lesen: Schilder & Aushänge',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Training',
      anweisung: 'Trainiere die Strategie: Was sagt das Schild? Lies und antworte. ~~(Entrena la estrategia: ¿qué dice el letrero? Lee y responde.)~~',
      items: [
        {
          typ: 'mc',
          frage: '„Ziehen“ steht an der Tür. Was machst du?',
          optionen: ['Ich ziehe die Tür.', 'Ich drücke die Tür.'],
          loesung: 0,
        },
        {
          typ: 'mc',
          frage: 'Auf dem Schild steht: „Eintritt frei“. Was bedeutet das?',
          optionen: ['Der Eintritt kostet nichts.', 'Der Eingang ist geschlossen.'],
          loesung: 0,
        },
        {
          typ: 'mc',
          frage: 'Schild: „Kein Eingang — bitte Eingang B benutzen“. Was machst du?',
          optionen: ['Ich benutze Eingang B.', 'Ich gehe hier in das Geschäft.'],
          loesung: 0,
        },
        {
          typ: 'zuordnen',
          links: ['geöffnet', 'Ziehen', 'der Eingang'],
          rechts: ['geschlossen', 'Drücken', 'der Ausgang'],
          loesung: {
            'geöffnet': 'geschlossen',
            'Ziehen': 'Drücken',
            'der Eingang': 'der Ausgang',
          },
        },
        {
          typ: 'rf',
          aussage: 'Schild: „Rauchen verboten“ — Man kann hier rauchen.',
          loesung: false,
        },
        {
          typ: 'rf',
          aussage: 'Schild: „Kasse 3 geöffnet“ — An Kasse 3 kann man zahlen.',
          loesung: true,
        },
        {
          typ: 'rf',
          aussage: 'Schild: „Supermarkt Mayer — Sonntag geschlossen“ — Am Sonntag kann man hier einkaufen.',
          loesung: false,
        },
        {
          typ: 'rf',
          aussage: 'Aushang: „Am Montag von 8 bis 12 Uhr kein Wasser.“ — Ab 12 Uhr gibt es wieder Wasser.',
          loesung: true,
        },
        {
          typ: 'luecke',
          text: 'Das Geschäft ist Mo-Fr {1} — da kann man einkaufen. Am Sonntag ist es {2} — da kann man nicht einkaufen.',
          bank: ['geöffnet', 'geschlossen', 'verboten'],
          loesungen: { 1: 'geöffnet', 2: 'geschlossen' },
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies den Aushang. Richtig oder falsch? ~~(Lee el aviso. ¿Verdadero o falso?)~~',
      textTitel: 'Aushang an der Stadtbibliothek',
      text: 'Information: Die Bibliothek ist am Montag geschlossen. Von Dienstag bis Freitag sind wir von 9 bis 18 Uhr geöffnet, am Samstag von 9 bis 13 Uhr. Der Eingang am Parkplatz ist kaputt — bitte benutzen Sie den Eingang am Markt. Bei Fragen: Tel. 030 55 66 77. Ihre Stadtbibliothek',
      items: [
        { typ: 'rf', aussage: 'Die Bibliothek ist am Montag geöffnet.', loesung: false },
        { typ: 'rf', aussage: 'Am Samstag ist die Bibliothek von 9 bis 13 Uhr geöffnet.', loesung: true },
        {
          typ: 'mc',
          frage: 'Der Eingang am Parkplatz ist kaputt. Was machst du?',
          optionen: ['Ich benutze den Eingang am Markt.', 'Ich benutze den Eingang am Parkplatz.'],
          loesung: 0,
        },
        {
          typ: 'mc',
          frage: 'Am Mittwoch ist die Bibliothek geöffnet bis …',
          optionen: ['18 Uhr', '13 Uhr', '9 Uhr'],
          loesung: 0,
        },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'formular',
      titel: 'Schreiben',
      anweisung: 'Lies den Text. Ergänze das Formular. ~~(Lee el texto. Completa el formulario.)~~',
      quelle: 'Frau Elena Petrova möchte eine Karte für die Stadtbibliothek. Sie kommt aus Bulgarien. Sie wohnt in der Parkstraße 9 in Hamburg. Ihre Telefonnummer ist 040 12 34 987.',
      felder: [
        { id: 'name', label: 'Name', erwartet: ['Elena Petrova', 'Petrova'] },
        { id: 'land', label: 'Land', erwartet: ['Bulgarien'] },
        { id: 'strasse', label: 'Straße', erwartet: ['Parkstraße 9', 'Parkstraße'] },
        { id: 'wohnort', label: 'Wohnort', erwartet: ['Hamburg'] },
        { id: 'telefon', label: 'Telefonnummer', erwartet: ['040 12 34 987', '0401234987'] },
      ],
    },
  ],
}
