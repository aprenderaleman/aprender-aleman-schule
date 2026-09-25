// Übungsheft A2 — Lektion 21: Das Modul Hören — Überblick
export default {
  lektion: 21,
  titel: 'Übungsheft — Das Modul Hören',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Wähle die richtige Antwort oder Form. ~~(Elige la respuesta o la forma correcta.)~~',
      items: [
        {
          typ: 'mc',
          frage: '„Achtung an Gleis 5: Der Zug nach München hat zehn Minuten Verspätung.“ — Wo hörst du das?',
          optionen: ['im Supermarkt', 'am Bahnhof', 'im Radio'],
          loesung: 1,
        },
        {
          typ: 'mc',
          frage: '„Hallo, hier ist Paula. Ruf mich bitte zurück!“ — Was ist das?',
          optionen: ['eine Nachricht auf dem Anrufbeantworter', 'eine Durchsage am Bahnhof', 'ein Gespräch im Café'],
          loesung: 0,
        },
        {
          typ: 'mc',
          frage: 'Du hörst: „Die Tasche kostet sechzig Euro.“ — Was kostet sie?',
          optionen: ['16 Euro', '66 Euro', '60 Euro'],
          loesung: 2,
        },
        {
          typ: 'luecke',
          text: 'Achtung, eine {1}! Der Zug nach Hamburg fährt heute nicht von Gleis 3, sondern von {2} 9.',
          bank: ['Durchsage', 'Gleis', 'Termin'],
          loesungen: { 1: 'Durchsage', 2: 'Gleis' },
        },
        {
          typ: 'luecke',
          text: 'Guten Tag, hier ist die Praxis Dr. Klein. Sie haben am Dienstag einen {1} bei uns. Leider müssen wir die {2} ändern: Kommen Sie bitte um 11 Uhr, nicht um 9 Uhr.',
          bank: ['Termin', 'Uhrzeit', 'Gleis', 'Ansage'],
          loesungen: { 1: 'Termin', 2: 'Uhrzeit' },
        },
        {
          typ: 'satzbau',
          woerter: ['hörst', 'Text', 'oft', 'du', 'den', 'Wie'],
          loesung: 'Wie oft hörst du den Text?',
        },
        {
          typ: 'satzbau',
          woerter: ['beginnt', 'wie', 'Uhr', 'das', 'Um', 'viel', 'Konzert'],
          loesung: 'Um wie viel Uhr beginnt das Konzert?',
        },
        {
          typ: 'zuordnen',
          links: ['dreizehn', 'dreißig', 'siebzehn', 'siebzig', 'fünfzehn'],
          rechts: ['13', '30', '17', '70', '15'],
          loesung: {
            'dreizehn': '13',
            'dreißig': '30',
            'siebzehn': '17',
            'siebzig': '70',
            'fünfzehn': '15',
          },
        },
        {
          typ: 'korrektur',
          optionen: ['Ich habe die Durchsage nicht geverstanden.', 'Ich habe die Durchsage nicht verstanden.'],
          loesung: 1,
          warum: 'Los verbos con **ver-** no llevan *ge-* en el Perfekt: *verstanden*. ~~(verstehen → verstanden, nunca «geverstanden»)~~',
        },
        {
          typ: 'korrektur',
          optionen: ['Der Kurs beginnt nicht um 9 Uhr, sondern um 10 Uhr.', 'Der Kurs beginnt nicht um 9 Uhr, aber um 10 Uhr.'],
          loesung: 0,
          warum: 'Después de una negación, «sino» es **sondern**, no *aber*. ~~(nicht …, sondern … = no …, sino …)~~',
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies den Zettel. Löse die 4 Aufgaben. ~~(Lee la nota. Resuelve las 4 tareas.)~~',
      textTitel: 'Zettel von Papa',
      text: 'Liebe Jana, heute waren drei Nachrichten auf dem Anrufbeantworter. Die Praxis Dr. Schulte hat angerufen: Dein Termin ist nicht am Mittwoch, sondern am Donnerstag um 15 Uhr. Dann hat Onkel Ricardo angerufen. Er kommt am Samstag mit dem Zug aus Bremen. Der Zug kommt um 11.40 Uhr an, auf Gleis 6. Kannst du ihn abholen? Ich muss leider arbeiten. Und die Bibliothek sagt: Dein Buch ist da. Bis heute Abend! Papa',
      items: [
        { typ: 'rf', aussage: 'Janas Termin ist am Mittwoch.', loesung: false },
        { typ: 'rf', aussage: 'Onkel Ricardo kommt am Samstag mit dem Zug.', loesung: true },
        {
          typ: 'mc',
          frage: 'Auf welchem Gleis kommt der Zug an?',
          optionen: ['Gleis 4', 'Gleis 6', 'Gleis 16'],
          loesung: 1,
        },
        {
          typ: 'mc',
          frage: 'Was soll Jana am Samstag machen?',
          optionen: ['Onkel Ricardo am Bahnhof abholen', 'in der Praxis arbeiten', 'ein Buch kaufen'],
          loesung: 0,
        },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'text',
      titel: 'Schreiben',
      anweisung: 'Schreib eine Nachricht (ca. 25-35 Wörter). ~~(Escribe un mensaje de unas 25-35 palabras.)~~',
      aufgabe: 'Du bist im Zug nach Köln. Du hörst eine Durchsage: Der Zug hat 40 Minuten Verspätung. Deine Freundin Clara holt dich am Bahnhof ab. Schreib ihr eine Nachricht.',
      punkte: [
        'Sag: Der Zug hat Verspätung. ~~(di que el tren lleva retraso)~~',
        'Schreib die neue Uhrzeit und das Gleis. ~~(escribe la nueva hora y el andén)~~',
        'Wo wartet Clara? Mach einen Vorschlag. ~~(propón dónde puede esperar Clara)~~',
      ],
      minWoerter: 25,
      beispielLoesung: 'Hallo Clara, ich habe gerade eine Durchsage gehört: Mein Zug hat leider 40 Minuten Verspätung. Ich komme erst um 18.10 Uhr an, auf Gleis 4. Warte doch im Café am Bahnhof!\nBis später\nLukas',
    },
  ],
}
