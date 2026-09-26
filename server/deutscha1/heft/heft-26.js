// Übungsheft A1 — Lektion 26: Modul Sprechen — Überblick
export default {
  lektion: 26,
  titel: 'Übungsheft — Modul Sprechen',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Training',
      anweisung: 'Kennst du das Sprechen? Wähle, ordne und ergänze. ~~(¿Conoces el examen oral? Elige, ordena y completa.)~~',
      items: [
        {
          typ: 'mc',
          frage: '„Ich heiße Omar und komme aus Syrien.“ — Welcher Teil ist das?',
          optionen: ['Teil 1', 'Teil 2', 'Teil 3'],
          loesung: 0,
        },
        {
          typ: 'mc',
          frage: '„Gib mir bitte den Stift.“ — Welcher Teil ist das?',
          optionen: ['Teil 3', 'Teil 1', 'Teil 2'],
          loesung: 0,
        },
        {
          typ: 'luecke',
          text: 'Wir sprechen in der {1}. In Teil 2 ziehe ich eine {2} und stelle eine {3}.',
          bank: ['Gruppe', 'Karte', 'Frage', 'Antwort'],
          loesungen: { 1: 'Gruppe', 2: 'Karte', 3: 'Frage' },
        },
        {
          typ: 'mc',
          frage: 'Du verstehst die Frage nicht. Was sagst du?',
          optionen: ['Wie bitte?', 'Auf Wiedersehen!', 'Ja, gern.'],
          loesung: 0,
        },
        {
          typ: 'mc',
          frage: 'Der Prüfer spricht sehr schnell. Was sagst du?',
          optionen: ['Langsamer, bitte.', 'Tschüss!', 'Hier bitte.'],
          loesung: 0,
        },
        {
          typ: 'zuordnen',
          links: ['Wie heißt du?', 'Wo wohnst du?', 'Trinkst du Kaffee?', 'Wie bitte?'],
          rechts: ['Ich heiße Ana.', 'Ich wohne in Bonn.', 'Ja, gern.', 'Noch einmal: Wo wohnst du?'],
          loesung: {
            'Wie heißt du?': 'Ich heiße Ana.',
            'Wo wohnst du?': 'Ich wohne in Bonn.',
            'Trinkst du Kaffee?': 'Ja, gern.',
            'Wie bitte?': 'Noch einmal: Wo wohnst du?',
          },
        },
        {
          typ: 'zuordnen',
          links: ['W wie in „wohnen“', 'Z wie in „zwei“', 'ei wie in „nein“', 'ie wie in „sieben“'],
          rechts: ['/v/', '/ts/', '„ai“', '„i“ (lang)'],
          loesung: {
            'W wie in „wohnen“': '/v/',
            'Z wie in „zwei“': '/ts/',
            'ei wie in „nein“': '„ai“',
            'ie wie in „sieben“': '„i“ (lang)',
          },
        },
        { typ: 'satzbau', woerter: ['bitte', 'einmal', 'Noch'], loesung: 'Noch einmal, bitte.', alt: ['Bitte noch einmal.'] },
        { typ: 'satzbau', woerter: ['nicht', 'Ich', 'verstehe'], loesung: 'Ich verstehe nicht.' },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies den Aushang. Richtig oder falsch? ~~(Lee el cartel. ¿Verdadero o falso?)~~',
      textTitel: 'Aushang — Sprachschule Sonne',
      text: 'Information für alle Kandidaten:\nDie Prüfung ist am Freitag. Das Sprechen ist um 10 Uhr im Raum 3. Sie sprechen in der Gruppe, nicht allein. Das Sprechen hat drei Teile. Bitte kommen Sie um 9:45 Uhr. Haben Sie eine Frage? Telefon: 089 332211.',
      items: [
        { typ: 'rf', aussage: 'Das Sprechen ist um 10 Uhr.', loesung: true },
        { typ: 'rf', aussage: 'Die Kandidaten sprechen allein.', loesung: false },
        {
          typ: 'mc',
          frage: 'Wie viele Teile hat das Sprechen?',
          optionen: ['drei', 'zwei', 'vier'],
          loesung: 0,
        },
        {
          typ: 'mc',
          frage: 'Wann kommen die Kandidaten?',
          optionen: ['um 10:15 Uhr', 'um 9:45 Uhr', 'am Samstag'],
          loesung: 1,
        },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'formular',
      titel: 'Schreiben',
      anweisung: 'Lies den Text. Ergänze das Formular. ~~(Lee el texto. Completa el formulario.)~~',
      quelle: 'Guten Tag! Ich heiße Karim Haddad. Ich bin 29 Jahre alt und komme aus Marokko. Ich wohne in Frankfurt. Meine Telefonnummer ist 069 442211. Ich mache die Prüfung am Freitag.',
      felder: [
        { id: 'name', label: 'Name', erwartet: ['Karim Haddad', 'Haddad'] },
        { id: 'alter', label: 'Alter', erwartet: ['29', '29 Jahre'] },
        { id: 'land', label: 'Land', erwartet: ['Marokko'] },
        { id: 'wohnort', label: 'Wohnort', erwartet: ['Frankfurt'] },
        { id: 'telefon', label: 'Telefonnummer', erwartet: ['069 442211', '069442211'] },
      ],
    },
  ],
}
