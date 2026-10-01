// Übungsheft A2 — Lektion 06: Die Modalverben
export default {
  lektion: 6,
  titel: 'Übungsheft — Modalverben',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Wähle das richtige Modalverb. ~~(Elige el verbo modal correcto.)~~',
      items: [
        { typ: 'mc', frage: 'Ich ___ einen Kaffee, bitte.', optionen: ['möchte', 'muss', 'darf'], loesung: 0 },
        { typ: 'mc', frage: 'Er ___ heute lange arbeiten. Er hat viel zu tun.', optionen: ['darf', 'muss', 'kann'], loesung: 1 },
        { typ: 'mc', frage: 'Wir ___ im Sommer nach Chile fahren.', optionen: ['wollen', 'will', 'willst'], loesung: 0 },
        {
          typ: 'luecke',
          text: 'Anna {1} sehr gut kochen. Aber heute hat sie keine Zeit. Der Chef sagt: Anna {2} bis 20 Uhr arbeiten. Und im Büro {3} man nicht essen — das ist die Regel.',
          bank: ['kann', 'will', 'muss', 'darf'],
          loesungen: { 1: 'kann', 2: 'muss', 3: 'darf' },
        },
        {
          typ: 'luecke',
          text: 'Hier {1} man nicht rauchen. Aber draußen {2} du rauchen.',
          bank: ['darf', 'kannst', 'willst'],
          loesungen: { 1: 'darf', 2: 'kannst' },
        },
        { typ: 'satzbau', woerter: ['Ich', 'kann', 'heute', 'nicht', 'kommen'], loesung: 'Ich kann heute nicht kommen.' },
        { typ: 'satzbau', woerter: ['Musst', 'du', 'am', 'Samstag', 'arbeiten'], loesung: 'Musst du am Samstag arbeiten?' },
        {
          typ: 'zuordnen',
          links: ['können', 'müssen', 'dürfen', 'möchten', 'sollen'],
          rechts: ['saber, poder', 'tener que', 'tener permiso', 'desear (cortés)', 'deber (consejo)'],
          loesung: {
            'können': 'saber, poder',
            'müssen': 'tener que',
            'dürfen': 'tener permiso',
            'möchten': 'desear (cortés)',
            'sollen': 'deber (consejo)',
          },
        },
        {
          typ: 'korrektur',
          optionen: ['Ich will essen Pizza.', 'Ich will Pizza essen.'],
          loesung: 1,
          warum: 'El infinitivo va **al final** (Satzklammer): Ich will Pizza **essen**. ~~(En español los dos verbos van juntos; en alemán, separados.)~~',
        },
        {
          typ: 'korrektur',
          optionen: ['Er kann gut kochen.', 'Er kannt gut kochen.'],
          loesung: 0,
          warum: 'Los modales no llevan **-t** en er/sie/es: er **kann**. ~~(ich kann y er kann son iguales — no inventes *kannt*.)~~',
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies die Anzeige. Richtig oder falsch? ~~(Lee el anuncio. ¿Verdadero o falso?)~~',
      textTitel: 'Anzeige: Schwimmkurs im Sportzentrum Nord',
      text: 'Sie können nicht schwimmen? Kein Problem! Das Sportzentrum Nord hat neue Kurse für Erwachsene. Der Kurs ist am Dienstag und am Donnerstag von 19 bis 20 Uhr und kostet 60 Euro im Monat. Sie brauchen nur eine Badehose oder einen Badeanzug. Achtung: Im Schwimmbad darf man nicht essen und nicht rauchen. Sie möchten einen Platz? Dann müssen Sie schnell sein — die Kurse sind klein. Telefon: 030 5566778.',
      items: [
        { typ: 'rf', aussage: 'Der Kurs ist am Montag und am Mittwoch.', loesung: false },
        { typ: 'rf', aussage: 'Der Kurs kostet 60 Euro im Monat.', loesung: true },
        { typ: 'mc', frage: 'Was darf man im Schwimmbad nicht machen?', optionen: ['essen und rauchen', 'schwimmen und lernen', 'fragen und sprechen'], loesung: 0 },
        { typ: 'rf', aussage: 'Die Kurse sind groß.', loesung: false },
      ],
    },
    {
      typ: 'hoeren',
      titel: 'Hören',
      anweisung: 'Hör den Text aus dem Radio. Was ist richtig? ~~(Escucha el texto de la radio. ¿Qué es correcto?)~~',
      audio: {
        transcript: 'Und jetzt ein Tipp für alle Leute in Dresden. Ab Montag ist die neue Stadtbibliothek geöffnet. Dort können Sie Bücher lesen, Musik hören und am Computer arbeiten. Sie möchten Bücher mit nach Hause nehmen? Dann brauchen Sie einen Ausweis. Er kostet nicht zwanzig, sondern zwölf Euro im Jahr. Kinder müssen nichts bezahlen. Im Lesesaal darf man nicht telefonieren und nicht essen. Aber im Café können Sie Kaffee trinken und Kuchen essen. Die Bibliothek ist von Montag bis Samstag geöffnet, immer von zehn bis neunzehn Uhr.',
      },
      items: [
        { typ: 'mc', frage: 'Was kostet der Ausweis im Jahr?', optionen: ['zwölf Euro', 'zwanzig Euro', 'zwei Euro'], loesung: 0 },
        { typ: 'rf', aussage: 'Kinder müssen für den Ausweis auch bezahlen.', loesung: false },
        { typ: 'rf', aussage: 'Am Sonntag ist die Bibliothek geschlossen.', loesung: true },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'formular',
      titel: 'Schreiben',
      anweisung: 'Lies den Text. Ergänze das Formular. ~~(Lee el texto. Completa el formulario.)~~',
      quelle: 'Hallo! Ich heiße Andrés Molina und ich bin 29 Jahre alt. Ich möchte den Schwimmkurs am Dienstag machen. Ich kann noch nicht schwimmen. Meine Telefonnummer ist 0157 8899001.',
      felder: [
        { id: 'name', label: 'Name', erwartet: ['Andrés Molina', 'Molina'] },
        { id: 'alter', label: 'Alter', erwartet: ['29', '29 Jahre'] },
        { id: 'kurstag', label: 'Kurstag', erwartet: ['Dienstag', 'am Dienstag'] },
        { id: 'schwimmen', label: 'Kann er schwimmen?', erwartet: ['nein', 'Nein', 'noch nicht'] },
        { id: 'telefon', label: 'Telefonnummer', erwartet: ['0157 8899001', '01578899001'] },
      ],
    },
    {
      typ: 'sprechen',
      titel: 'Sprechen',
      anweisung: 'Sprich eine Nachricht für eine Freundin. Sprich 60 Sekunden. ~~(Graba un mensaje para una amiga. Habla 60 segundos.)~~',
      aufgabe: 'Deine Freundin Lena möchte am Samstag mit dir ins Kino gehen. Du kannst am Samstag nicht. Sprich eine Nachricht für Lena.',
      punkte: [
        'Was musst du am Samstag machen?',
        'Wann kannst du?',
        'Was möchtest du mit Lena machen?',
      ],
      redemittel: ['Am Samstag kann ich leider nicht.', 'Ich muss …', 'Wollen wir …?', 'Ich möchte lieber …'],
      maxSekunden: 60,
      beispielLoesung: 'Hallo Lena! Danke für deine Nachricht. Am Samstag kann ich leider nicht ins Kino gehen. Ich muss bis acht Uhr arbeiten und dann soll ich noch meine Mutter anrufen. Aber am Sonntag habe ich Zeit. Wollen wir am Sonntag zusammen ins Kino gehen? Ich kann um fünf Uhr kommen. Oder möchtest du lieber einen Kaffee trinken? Wir können auch zuerst im Park spazieren gehen. Schreib mir bitte! Tschüs!',
    },
  ],
}
