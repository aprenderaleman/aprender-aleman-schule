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
        { typ: 'satzbau', woerter: ['fährt', 'Berlin', 'Er', 'nach'], loesung: 'Er fährt nach Berlin.', alt: ['Nach Berlin fährt er.'] },
        { typ: 'satzbau', woerter: ['ein', 'Sie', 'Buch', 'liest'], loesung: 'Sie liest ein Buch.' },
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
      typ: 'hoeren',
      titel: 'Hören',
      anweisung: 'Hör die Nachricht. Richtig oder falsch? ~~(Escucha el mensaje. ¿Verdadero o falso?)~~',
      audio: {
        transcript: 'Hallo Oma, hier ist Felix. Wir sind jetzt in Wien. Papa liest die Zeitung, und Lisa schläft noch. Ich esse einen Apfel. Heute Abend sehen wir einen Film. Morgen fahren wir nicht nach Hause, wir fahren nach Salzburg. Wir nehmen den Bus um acht Uhr. Tschüs, Oma!',
      },
      items: [
        { typ: 'rf', aussage: 'Lisa liest die Zeitung.', loesung: false },
        { typ: 'mc', frage: 'Felix fährt morgen …', optionen: ['nach Hause', 'nach Wien', 'nach Salzburg'], loesung: 2 },
        { typ: 'rf', aussage: 'Felix nimmt den Bus um acht Uhr.', loesung: true },
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
    {
      typ: 'sprechen',
      titel: 'Sprechen',
      anweisung: 'Sprich über dich und eine Person. Sprich 45 Sekunden. ~~(Habla de ti y de otra persona. Habla 45 segundos.)~~',
      aufgabe: 'Welche Sprachen sprichst du? Was isst du gern? Und dein Freund oder deine Freundin? Sag vier Sätze. ~~(¿Qué idiomas hablas? ¿Qué te gusta comer? ¿Y tu amigo o tu amiga? Di cuatro frases.)~~',
      punkte: ['deine Sprachen', 'Was isst du gern?', 'Bus, Zug oder Auto?', 'dein Freund oder deine Freundin: Er / Sie spricht …'],
      redemittel: ['Ich spreche … und ein bisschen …', 'Ich esse gern …', 'Ich nehme den …', 'Mein Freund / Meine Freundin spricht …'],
      maxSekunden: 45,
      beispielLoesung: 'Ich spreche Spanisch und ein bisschen Deutsch. Ich esse gern Pizza. Ich nehme jeden Tag den Bus. Meine Freundin Sofia spricht Englisch. Sie fährt mit dem Auto.',
    },
  ],
}
