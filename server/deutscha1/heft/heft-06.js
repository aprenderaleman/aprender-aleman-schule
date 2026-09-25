// Übungsheft A1 — Lektion 06: Unregelmäßige Verben im Präsens
export default {
  lektion: 6,
  titel: 'Übungsheft — Unregelmäßige Verben',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Wähle die richtige Form. ~~(Elige la forma correcta.)~~',
      items: [
        { typ: 'mc', frage: 'Er ___ Deutsch.', optionen: ['spricht', 'sprecht', 'spreche'], loesung: 0 },
        { typ: 'mc', frage: 'Du ___ nach Wien.', optionen: ['fährst', 'fahrst', 'fahrt'], loesung: 0 },
        {
          typ: 'luecke',
          text: 'Die Kinder {1}. Lena {2} ein Buch. Paul {3} eine Pizza.',
          bank: ['schlafen', 'liest', 'isst', 'esse'],
          loesungen: { 1: 'schlafen', 2: 'liest', 3: 'isst' },
        },
        {
          typ: 'luecke',
          text: 'Ich {1} Spanisch. Er {2} den Bus.',
          bank: ['spreche', 'nimmt', 'spricht'],
          loesungen: { 1: 'spreche', 2: 'nimmt' },
        },
        { typ: 'satzbau', woerter: ['fährt', 'Berlin', 'er', 'nach'], loesung: 'Er fährt nach Berlin.' },
        { typ: 'satzbau', woerter: ['ein', 'sie', 'Buch', 'liest'], loesung: 'Sie liest ein Buch.' },
        {
          typ: 'zuordnen',
          links: ['sprechen', 'essen', 'fahren', 'sehen'],
          rechts: ['du sprichst', 'du isst', 'du fährst', 'du siehst'],
          loesung: {
            'sprechen': 'du sprichst',
            'essen': 'du isst',
            'fahren': 'du fährst',
            'sehen': 'du siehst',
          },
        },
        {
          typ: 'korrektur',
          optionen: ['Er spricht Englisch.', 'Er sprecht Englisch.'],
          loesung: 0,
          warum: 'sprechen cambia la vocal en du y er/sie/es: **er spricht**. ~~(e → i, solo en esas dos formas.)~~',
        },
        {
          typ: 'korrektur',
          optionen: ['Ich spreche Spanisch.', 'Ich sprich Spanisch.'],
          loesung: 0,
          warum: '**ich** nunca cambia la vocal: *ich spreche*. ~~(Solo „du“ y „er/sie/es“ cambian.)~~',
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies den Text. Richtig oder falsch? ~~(Lee el texto. ¿Verdadero o falso?)~~',
      textTitel: 'Notiz für Tim',
      text: 'Hallo Tim! Ich fahre heute nach Bonn. Ich nehme den Zug um 9 Uhr. Papa schläft noch. Das Baby isst um 12 Uhr und schläft dann. Du isst heute Pizza, okay? Bis heute Abend! Deine Mia',
      items: [
        { typ: 'rf', aussage: 'Mia fährt heute nach Bonn.', loesung: true },
        { typ: 'rf', aussage: 'Mia nimmt den Bus.', loesung: false },
        { typ: 'rf', aussage: 'Das Baby isst um 12 Uhr.', loesung: true },
        {
          typ: 'mc',
          frage: 'Was isst Tim heute?',
          optionen: ['Pizza', 'Salat'],
          loesung: 0,
        },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'formular',
      titel: 'Schreiben',
      anweisung: 'Lies den Text. Ergänze das Formular. ~~(Lee el texto. Completa el formulario.)~~',
      quelle: 'Das ist Diego. Er kommt aus Chile. Er wohnt jetzt in Köln. Er spricht Spanisch und Englisch. Er isst gern Pizza. Er fährt mit dem Bus.',
      felder: [
        { id: 'name', label: 'Name', erwartet: ['Diego'] },
        { id: 'land', label: 'Land', erwartet: ['Chile'] },
        { id: 'stadt', label: 'Stadt jetzt', erwartet: ['Köln'] },
        { id: 'sprachen', label: 'Sprachen', erwartet: ['Spanisch und Englisch', 'Spanisch, Englisch'] },
        { id: 'essen', label: 'Isst gern', erwartet: ['Pizza'] },
      ],
    },
  ],
}
