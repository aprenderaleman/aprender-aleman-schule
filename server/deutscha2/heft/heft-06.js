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
  ],
}
