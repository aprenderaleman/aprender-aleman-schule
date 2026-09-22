// Übungsheft A1 — Lektion 30: Persönliche Angaben & Familie
export default {
  lektion: 30,
  titel: 'Übungsheft — Persönliche Angaben & Familie',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Wähle oder ergänze die richtige Form. ~~(Elige o completa la forma correcta.)~~',
      items: [
        {
          typ: 'zuordnen',
          links: ['Vorname', 'Familienname', 'Adresse', 'Geburtsdatum', 'Eltern'],
          rechts: ['Ana', 'García', 'Gartenstraße 5, Berlin', '12.05.1995', 'Vater und Mutter'],
          loesung: {
            'Vorname': 'Ana',
            'Familienname': 'García',
            'Adresse': 'Gartenstraße 5, Berlin',
            'Geburtsdatum': '12.05.1995',
            'Eltern': 'Vater und Mutter',
          },
        },
        {
          typ: 'luecke',
          text: '{1} Bruder heißt Luis. {2} Schwester wohnt in Lima.',
          bank: ['Mein', 'Meine', 'Dein'],
          loesungen: { 1: 'Mein', 2: 'Meine' },
        },
        {
          typ: 'luecke',
          text: 'Ich bin nicht verheiratet, ich bin {1}. Meine {2} wohnen in Spanien: mein Vater und meine Mutter.',
          bank: ['ledig', 'Eltern', 'Kinder'],
          loesungen: { 1: 'ledig', 2: 'Eltern' },
        },
        {
          typ: 'mc',
          frage: 'Formular: „Wohnort“ — Was schreibst du?',
          optionen: ['Berlin', 'Gartenstraße 5', '12.05.1995'],
          loesung: 0,
        },
        {
          typ: 'mc',
          frage: 'Formular: „Geburtsdatum“ — Was schreibst du?',
          optionen: ['12.05.1995', '0176 554433', 'García'],
          loesung: 0,
        },
        { typ: 'mc', frage: 'Ich habe ___ Bruder und eine Schwester.', optionen: ['einen', 'ein', 'eine'], loesung: 0 },
        { typ: 'satzbau', woerter: ['wohnen', 'Eltern', 'in', 'meine', 'Spanien'], loesung: 'Meine Eltern wohnen in Spanien.' },
        { typ: 'satzbau', woerter: ['Kinder', 'Sie', 'haben'], loesung: 'Haben Sie Kinder?' },
        {
          typ: 'korrektur',
          optionen: ['Mein Bruder heißt Luis.', 'Meine Bruder heißt Luis.'],
          loesung: 0,
          warum: '*Bruder* ist maskulin: **mein** Bruder. ~~(mein para masculino y neutro, meine para femenino y plural.)~~',
        },
        {
          typ: 'korrektur',
          optionen: ['Ich habe zwei Kinder.', 'Ich habe zwei Kinders.'],
          loesung: 0,
          warum: 'Der Plural von *das Kind* ist **die Kinder** — ohne -s. ~~(El plural alemán casi nunca se hace con -s como en español.)~~',
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies die E-Mail. Richtig oder falsch? ~~(Lee el e-mail. ¿Verdadero o falso?)~~',
      textTitel: 'E-Mail von Diego',
      text: 'Hallo Anna,\nich wohne jetzt in Bern. Meine Adresse ist Seestraße 12. Meine Familie ist noch in Mexiko: meine Eltern und meine zwei Schwestern. Mein Bruder Pablo wohnt in Madrid. Er ist verheiratet und hat ein Kind. Ich bin ledig. Besuchst du mich im Sommer?\nViele Grüße\nDiego',
      items: [
        { typ: 'rf', aussage: 'Diego wohnt in Bern.', loesung: true },
        { typ: 'rf', aussage: 'Diegos Eltern wohnen in Madrid.', loesung: false },
        {
          typ: 'mc',
          frage: 'Wer ist verheiratet?',
          optionen: ['Pablo', 'Diego', 'Anna'],
          loesung: 0,
        },
        {
          typ: 'mc',
          frage: 'Wie viele Schwestern hat Diego?',
          optionen: ['eine', 'zwei', 'drei'],
          loesung: 1,
        },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'formular',
      titel: 'Schreiben',
      anweisung: 'Lies den Text. Ergänze das Formular. ~~(Lee el texto. Completa el formulario.)~~',
      quelle: 'Guten Tag! Mein Name ist Rosa Fernández. Mein Geburtsdatum ist der 3. April 1992. Ich komme aus Kolumbien und wohne in Bremen, Hafenstraße 20. Ich bin verheiratet und habe ein Kind.',
      felder: [
        { id: 'familienname', label: 'Familienname', erwartet: ['Fernández', 'Fernandez'] },
        { id: 'vorname', label: 'Vorname', erwartet: ['Rosa'] },
        { id: 'geburtsdatum', label: 'Geburtsdatum', erwartet: ['3. April 1992', '03.04.1992', '3.4.1992'] },
        { id: 'wohnort', label: 'Wohnort', erwartet: ['Bremen'] },
        { id: 'strasse', label: 'Straße', erwartet: ['Hafenstraße 20', 'Hafenstraße'] },
      ],
    },
  ],
}
