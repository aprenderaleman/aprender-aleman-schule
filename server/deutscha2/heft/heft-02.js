// Übungsheft A2 — Lektion 02: Das digitale Prüfungsformat (CBT)
export default {
  lektion: 2,
  titel: 'Übungsheft — Die digitale Prüfung',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Wähle die richtige Form. ~~(Elige la forma correcta.)~~',
      items: [
        { typ: 'mc', frage: 'Der Text steht auf dem ___ .', optionen: ['Kopfhörer', 'Maus', 'Bildschirm'], loesung: 2 },
        { typ: 'mc', frage: 'Ich tippe meine E-Mail mit der ___ .', optionen: ['Tastatur', 'Zeit', 'Taste'], loesung: 0 },
        {
          typ: 'luecke',
          text: 'Beim Hören trage ich {1}. Ich höre den Text und {2} auf die richtige Antwort.',
          bank: ['Kopfhörer', 'klicke', 'markiere'],
          loesungen: { 1: 'Kopfhörer', 2: 'klicke' },
        },
        {
          typ: 'luecke',
          text: 'Meine E-Mail {1} ich mit der Tastatur. Die {2} sehe ich oben auf dem Bildschirm.',
          bank: ['tippe', 'Zeit', 'Maus'],
          loesungen: { 1: 'tippe', 2: 'Zeit' },
        },
        { typ: 'satzbau', woerter: ['Ich', 'klicke', 'auf', 'die', 'richtige', 'Antwort'], loesung: 'Ich klicke auf die richtige Antwort.' },
        { typ: 'satzbau', woerter: ['Wo', 'ist', 'die', 'Taste', 'für', 'ß'], loesung: 'Wo ist die Taste für ß?' },
        {
          typ: 'zuordnen',
          links: ['klicken', 'tippen', 'markieren', 'tragen'],
          rechts: ['mit der Maus auf „weiter“', 'die E-Mail mit der Tastatur', 'Antwort a, b oder c', 'Kopfhörer'],
          loesung: {
            'klicken': 'mit der Maus auf „weiter“',
            'tippen': 'die E-Mail mit der Tastatur',
            'markieren': 'Antwort a, b oder c',
            'tragen': 'Kopfhörer',
          },
        },
        {
          typ: 'korrektur',
          optionen: ['Ich schreibe im Computer.', 'Ich schreibe am Computer.'],
          loesung: 1,
          warum: '«En el ordenador» = **am** Computer. ~~(No traduzcas «en» siempre con *in* — aquí el alemán usa an + dem = am.)~~',
        },
        {
          typ: 'korrektur',
          optionen: ['Die Zeit läuft auf dem Bildschirm.', 'Die Zeit lauft auf dem Bildschirm.'],
          loesung: 0,
          warum: '*laufen* cambia la vocal en er/sie/es: die Zeit **läuft**. ~~(Verbo irregular con Umlaut, como ya viste en el A1.)~~',
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies die Anzeige. Richtig oder falsch? ~~(Lee el anuncio. ¿Verdadero o falso?)~~',
      textTitel: 'Anzeige: Fit am Computer',
      text: 'Digitale Prüfung? Kein Problem! Das Lernstudio Ideal hat einen neuen Kurs: „Fit am Computer“. Du lernst: schnell tippen, ä, ö, ü und ß schreiben und mit der Maus markieren. Der Kurs ist am Samstag von 10 bis 13 Uhr und kostet 15 Euro. Die Gruppen sind klein — maximal sechs Personen. Du brauchst keinen eigenen Computer, wir haben alles im Kursraum. Anmeldung per E-Mail: kurs@lernstudio-ideal.de',
      items: [
        { typ: 'rf', aussage: 'Der Kurs ist am Sonntag.', loesung: false },
        { typ: 'rf', aussage: 'Der Kurs kostet 15 Euro.', loesung: true },
        { typ: 'mc', frage: 'Wie viele Personen sind maximal in der Gruppe?', optionen: ['drei', 'zehn', 'sechs'], loesung: 2 },
        { typ: 'rf', aussage: 'Du brauchst einen eigenen Computer.', loesung: false },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'formular',
      titel: 'Schreiben',
      anweisung: 'Lies den Text. Ergänze das Formular. ~~(Lee el texto. Completa el formulario.)~~',
      quelle: 'Guten Tag! Mein Name ist Renata Silva. Ich komme aus Portugal und wohne jetzt in Frankfurt. Ich möchte den Kurs „Fit am Computer“ am Samstag machen. Meine E-Mail-Adresse ist renata.silva@post.de.',
      felder: [
        { id: 'name', label: 'Name', erwartet: ['Renata Silva', 'Silva'] },
        { id: 'land', label: 'Land', erwartet: ['Portugal'] },
        { id: 'stadt', label: 'Stadt jetzt', erwartet: ['Frankfurt'] },
        { id: 'kurstag', label: 'Kurstag', erwartet: ['Samstag', 'am Samstag'] },
        { id: 'email', label: 'E-Mail-Adresse', erwartet: ['renata.silva@post.de'] },
      ],
    },
  ],
}
