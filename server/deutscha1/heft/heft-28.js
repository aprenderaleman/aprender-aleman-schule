// Übungsheft A1 — Lektion 28: Sprechen Teil 2 — Fragen stellen & antworten
export default {
  lektion: 28,
  titel: 'Übungsheft — Sprechen Teil 2',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Training',
      anweisung: 'Trainiere die Fragen. Wähle, ergänze und ordne. ~~(Entrena las preguntas. Elige, completa y ordena.)~~',
      items: [
        {
          typ: 'mc',
          frage: '„Trinkst du Tee?“ — Was für eine Frage ist das?',
          optionen: ['Ja/Nein-Frage', 'W-Frage'],
          loesung: 0,
        },
        {
          typ: 'mc',
          frage: 'Karte „Essen: Pizza“ — Welche Frage passt?',
          optionen: ['Isst du gern Pizza?', 'Wo wohnst du?', 'Wann stehst du auf?'],
          loesung: 0,
        },
        {
          typ: 'mc',
          frage: 'Karte „Wohnen: Stadt“ — Welche Frage passt?',
          optionen: ['Wo wohnst du?', 'Was isst du zum Frühstück?', 'Trinkst du Milch?'],
          loesung: 0,
        },
        {
          typ: 'luecke',
          text: '{1} isst du zum Frühstück? — {2} wohnst du? — {3} stehst du auf?',
          bank: ['Was', 'Wo', 'Wann', 'Wer'],
          loesungen: { 1: 'Was', 2: 'Wo', 3: 'Wann' },
        },
        { typ: 'satzbau', woerter: ['am', 'du', 'machst', 'Wochenende', 'was'], loesung: 'Was machst du am Wochenende?' },
        { typ: 'satzbau', woerter: ['gern', 'du', 'Kaffee', 'trinkst'], loesung: 'Trinkst du gern Kaffee?' },
        {
          typ: 'zuordnen',
          links: ['Was isst du zum Frühstück?', 'Wo kaufst du Obst?', 'Wann stehst du auf?', 'Hast du ein Hobby?'],
          rechts: ['Ich esse Brot.', 'Auf dem Markt.', 'Um 7 Uhr.', 'Ja, ich schwimme gern.'],
          loesung: {
            'Was isst du zum Frühstück?': 'Ich esse Brot.',
            'Wo kaufst du Obst?': 'Auf dem Markt.',
            'Wann stehst du auf?': 'Um 7 Uhr.',
            'Hast du ein Hobby?': 'Ja, ich schwimme gern.',
          },
        },
        {
          typ: 'korrektur',
          optionen: ['Wo wohnst du?', 'Wo du wohnst?'],
          loesung: 0,
          warum: 'In der W-Frage steht das **Verb** auf Position 2: *Wo **wohnst** du?* ~~(W-Wort + verbo + du — el verbo va segundo.)~~',
        },
        {
          typ: 'korrektur',
          optionen: ['Hast du Kinder?', 'Du hast Kinder?'],
          loesung: 0,
          warum: 'Die Ja/Nein-Frage beginnt mit dem **Verb**: ***Hast** du …?* ~~(En la pregunta de sí/no el verbo va primero — no vale solo la entonación como en español.)~~',
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies das Interview. Richtig oder falsch? ~~(Lee la entrevista. ¿Verdadero o falso?)~~',
      textTitel: 'Interview mit Jonas',
      text: 'Die Kurszeitung fragt, Jonas antwortet.\n— Was isst du zum Frühstück?\n— Ich esse Müsli und trinke Tee.\n— Was machst du in der Freizeit?\n— Ich spiele Fußball und höre Musik.\n— Wann stehst du auf?\n— Um halb sieben. Aber am Wochenende stehe ich um zehn Uhr auf!',
      items: [
        { typ: 'rf', aussage: 'Jonas trinkt Kaffee zum Frühstück.', loesung: false },
        { typ: 'rf', aussage: 'Jonas spielt Fußball in der Freizeit.', loesung: true },
        {
          typ: 'mc',
          frage: 'Wann steht Jonas am Wochenende auf?',
          optionen: ['um zehn Uhr', 'um halb sieben', 'um sieben Uhr'],
          loesung: 0,
        },
        {
          typ: 'mc',
          frage: 'Was isst Jonas zum Frühstück?',
          optionen: ['Brot', 'Müsli', 'Pizza'],
          loesung: 1,
        },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'formular',
      titel: 'Schreiben',
      anweisung: 'Lies den Text. Ergänze das Formular. ~~(Lee el texto. Completa el formulario.)~~',
      quelle: 'Hallo! Ich heiße Sofía Blanco und bin 24 Jahre alt. Ich komme aus Uruguay und wohne in Leipzig, Parkstraße 8. Mein Hobby ist Tennis. Meine Telefonnummer ist 0341 778812.',
      felder: [
        { id: 'name', label: 'Name', erwartet: ['Sofía Blanco', 'Blanco', 'Sofia Blanco'] },
        { id: 'alter', label: 'Alter', erwartet: ['24', '24 Jahre'] },
        { id: 'strasse', label: 'Straße', erwartet: ['Parkstraße 8', 'Parkstraße'] },
        { id: 'hobby', label: 'Hobby', erwartet: ['Tennis'] },
        { id: 'telefon', label: 'Telefonnummer', erwartet: ['0341 778812', '0341778812'] },
      ],
    },
  ],
}
