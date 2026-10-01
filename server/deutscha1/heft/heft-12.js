// Übungsheft A1 — Lektion 12: Modalverben — können, möchten, müssen
export default {
  lektion: 12,
  titel: 'Übungsheft — Modalverben',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Wähle, ergänze oder ordne. ~~(Elige, completa u ordena.)~~',
      items: [
        { typ: 'mc', frage: 'Er ___ heute nicht kommen.', optionen: ['kann', 'kannt', 'könnt'], loesung: 0 },
        { typ: 'mc', frage: '___ Sie etwas trinken?', optionen: ['Möchten', 'Möchtet', 'Möchte'], loesung: 0 },
        {
          typ: 'luecke',
          text: 'Ich {1} heute leider nicht kommen. Ich {2} arbeiten.',
          bank: ['kann', 'muss', 'kannst'],
          loesungen: { 1: 'kann', 2: 'muss' },
        },
        {
          typ: 'luecke',
          text: 'Herr Ruiz {1} sehr gut Deutsch sprechen. Seine Kinder {2} auch Deutsch lernen.',
          bank: ['kann', 'möchten', 'müsst'],
          loesungen: { 1: 'kann', 2: 'möchten' },
        },
        { typ: 'satzbau', woerter: ['einen', 'trinken', 'Ich', 'Kaffee', 'möchte'], loesung: 'Ich möchte einen Kaffee trinken.' },
        { typ: 'satzbau', woerter: ['du', 'bitte', 'Kannst', 'helfen', 'mir'], loesung: 'Kannst du mir bitte helfen?' },
        {
          typ: 'zuordnen',
          links: ['ich (können)', 'du (müssen)', 'er (möchten)', 'wir (müssen)', 'ihr (können)'],
          rechts: ['kann', 'musst', 'möchte', 'müssen', 'könnt'],
          loesung: {
            'ich (können)': 'kann',
            'du (müssen)': 'musst',
            'er (möchten)': 'möchte',
            'wir (müssen)': 'müssen',
            'ihr (können)': 'könnt',
          },
        },
        {
          typ: 'korrektur',
          optionen: ['Ich möchte Kaffee trinken.', 'Ich möchte trinken Kaffee.'],
          loesung: 0,
          warum: 'El infinitivo va **al final**: *Ich möchte Kaffee **trinken**.* ~~(En español van juntos, en alemán se separan.)~~',
        },
        {
          typ: 'korrektur',
          optionen: ['Er kann sehr gut kochen.', 'Er kannt sehr gut kochen.'],
          loesung: 0,
          warum: 'La 3.ª persona va **sin -t**: *er **kann***, como *ich kann*. ~~(No existe «er kannt».)~~',
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies die Anzeige. Richtig oder falsch? ~~(Lee el anuncio. ¿Verdadero o falso?)~~',
      textTitel: 'Anzeige — Café Sonne',
      text: 'Neu in der Stadt: das Café Sonne! Sie können hier Kaffee und Tee trinken. Möchten Sie etwas essen? Wir haben Kuchen und Brot. Sie müssen nicht viel bezahlen — ein Kaffee kostet zwei Euro. Kinder können hier spielen. Wir sind auch am Samstag und am Sonntag da.',
      items: [
        { typ: 'rf', aussage: 'Sie können im Café Sonne Tee trinken.', loesung: true },
        { typ: 'rf', aussage: 'Das Café hat keinen Kuchen.', loesung: false },
        {
          typ: 'mc',
          frage: 'Was kostet ein Kaffee?',
          optionen: ['zwei Euro', 'drei Euro', 'zehn Euro'],
          loesung: 0,
        },
        { typ: 'rf', aussage: 'Kinder können im Café spielen.', loesung: true },
      ],
    },
    {
      typ: 'hoeren',
      titel: 'Hören',
      anweisung: 'Hör die Ansage. Was ist richtig? ~~(Escucha el aviso. ¿Qué es correcto?)~~',
      audio: {
        transcript: 'Guten Tag! Heute machen wir einen Test. Sie müssen bitte den Ausweis zeigen. Sie können mit Kugelschreiber schreiben, aber nicht mit Bleistift. Sie haben zwanzig Minuten Zeit. Nein, nicht zwanzig! Sie haben dreißig Minuten. Möchten Sie etwas trinken? Ein Wasser können Sie hier trinken. Aber Sie können hier leider nicht essen.',
      },
      items: [
        { typ: 'rf', aussage: 'Sie müssen den Ausweis zeigen.', loesung: true },
        { typ: 'rf', aussage: 'Sie können mit Bleistift schreiben.', loesung: false },
        { typ: 'mc', frage: 'Wie viel Zeit haben Sie?', optionen: ['zwanzig Minuten', 'dreizehn Minuten', 'dreißig Minuten'], loesung: 2 },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'formular',
      titel: 'Schreiben',
      anweisung: 'Lies den Text. Ergänze das Formular. ~~(Lee el texto. Completa el formulario.)~~',
      quelle: 'Guten Tag! Ich heiße Pablo Vargas und ich bin 35 Jahre alt. Ich komme aus Mexiko und wohne in Frankfurt. Ich kann schon ein bisschen Deutsch sprechen. Ich möchte den Deutschkurs am Abend machen. Meine Telefonnummer ist 0157 2233448.',
      felder: [
        { id: 'name', label: 'Name', erwartet: ['Pablo Vargas', 'Vargas'] },
        { id: 'alter', label: 'Alter', erwartet: ['35', '35 Jahre'] },
        { id: 'land', label: 'Land', erwartet: ['Mexiko'] },
        { id: 'kurs', label: 'Kurs am', erwartet: ['Abend', 'am Abend'] },
        { id: 'telefon', label: 'Telefonnummer', erwartet: ['0157 2233448', '01572233448'] },
      ],
    },
    {
      typ: 'sprechen',
      titel: 'Sprechen',
      anweisung: 'Sprich 30 Sekunden. ~~(Habla 30 segundos.)~~',
      aufgabe: 'Du bist im Café. Was möchtest du? Bestell mit „Ich möchte …“. ~~(Estás en el café. ¿Qué quieres? Pide con «Ich möchte …».)~~',
      punkte: ['etwas trinken', 'etwas essen', 'bezahlen'],
      redemittel: ['Ich möchte bestellen, bitte.', 'Ich möchte einen … trinken.', 'Ich möchte ein … essen.', 'Ich möchte bitte …'],
      maxSekunden: 30,
      beispielLoesung: 'Guten Tag! Ich möchte bestellen, bitte. Ich möchte einen Kaffee trinken. Und ich möchte ein Brötchen essen. Danke! Ich möchte jetzt bitte bezahlen.',
    },
  ],
}
