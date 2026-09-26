// Übungsheft B1 — Lektion 27: Schreiben Teil 1 — Informelle E-Mail
export default {
  lektion: 27,
  titel: 'Übungsheft — Informelle E-Mail',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Hier übst du Sätze für die informelle E-Mail. Wähle die richtige Form oder ergänze.',
      items: [
        { typ: 'mc', frage: 'Ich habe mich sehr ___ deine Einladung gefreut.', optionen: ['auf', 'für', 'über'], loesung: 2 },
        { typ: 'mc', frage: 'Hast du Lust, am Sonntag ins Kino ___?', optionen: ['gehen', 'zu gehen', 'zu gehst'], loesung: 1 },
        { typ: 'mc', frage: 'Soll ich zur Party einen Kuchen ___?', optionen: ['mitbringen', 'mitgebracht', 'bringe mit'], loesung: 0 },
        {
          typ: 'luecke',
          text: 'Bei mir gibt es eine {1}: Ich habe eine neue Stelle! Davon muss ich dir unbedingt {2}.',
          bank: ['Neuigkeit', 'Neuigkeiten', 'erzählen', 'erzähle'],
          loesungen: { 1: 'Neuigkeit', 2: 'erzählen' },
        },
        {
          typ: 'luecke',
          text: 'Wir {1} uns um sieben vor dem Kino. Hoffentlich {2} es! Sag mir bitte kurz {3}.',
          bank: ['treffen', 'trefft', 'klappt', 'klappen', 'Bescheid'],
          loesungen: { 1: 'treffen', 2: 'klappt', 3: 'Bescheid' },
        },
        {
          typ: 'zuordnen',
          links: ['Liebe Julia,', 'Danke für deine E-Mail!', 'Stell dir vor: Ich habe eine neue Wohnung!', 'Wie wäre es am Samstag?', 'Viele Grüße'],
          rechts: ['Anrede', 'reagieren', 'erzählen', 'vorschlagen', 'Gruß'],
          loesung: {
            'Liebe Julia,': 'Anrede',
            'Danke für deine E-Mail!': 'reagieren',
            'Stell dir vor: Ich habe eine neue Wohnung!': 'erzählen',
            'Wie wäre es am Samstag?': 'vorschlagen',
            'Viele Grüße': 'Gruß',
          },
        },
        {
          typ: 'satzbau',
          woerter: ['uns', 'vor', 'Ich', 'treffen', 'dass', 'am', 'schlage', 'wir', 'Samstag'],
          loesung: 'Ich schlage vor, dass wir uns am Samstag treffen.',
        },
        { typ: 'satzbau', woerter: ['es', 'nächsten', 'Wie', 'Wochenende', 'am', 'wäre'], loesung: 'Wie wäre es am nächsten Wochenende?' },
        {
          typ: 'korrektur',
          optionen: ['Liebe Paul, danke für deine E-Mail!', 'Lieber Paul, danke für deine E-Mail!'],
          loesung: 1,
          warum: 'La Anrede concuerda con el género: **Lieber** Paul, **Liebe** Anna.',
        },
        {
          typ: 'korrektur',
          optionen: ['Soll ich zur Party einen Salat mitbringen?', 'Soll ich zur Party einen Salat nehmen?'],
          loesung: 0,
          warum: '«Llevar algo a una fiesta» = **mitbringen**. *Nehmen* significa «tomar, coger».',
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies die E-Mail von Tomás. Löse dann die vier Aufgaben.',
      textTitel: 'E-Mail an Aylin',
      text: 'Liebe Aylin,\nvielen Dank für deine Einladung zur Party in deiner neuen Wohnung! Ich habe mich riesig gefreut. Leider kann ich am Freitag nicht kommen, weil meine Schwester an dem Abend aus Chile ankommt. Ich muss sie um 21 Uhr vom Flughafen abholen. Aber stell dir vor: Sie bleibt drei Wochen bei mir! Hast du Lust, uns nächste Woche zu treffen? Dann lernst du sie kennen, und ich sehe endlich deine Wohnung. Ich schlage Sonntag zum Frühstück vor. Ich bringe frische Brötchen mit. Sag mir einfach kurz Bescheid, ob das klappt.\nLiebe Grüße\nTomás',
      items: [
        { typ: 'rf', aussage: 'Tomás kommt nicht zur Party, weil er arbeiten muss.', loesung: false },
        { typ: 'rf', aussage: 'Die Schwester von Tomás wohnt einige Wochen bei ihm.', loesung: true },
        {
          typ: 'mc',
          frage: 'Was schlägt Tomás vor?',
          optionen: ['ein Treffen am Freitagabend', 'ein gemeinsames Frühstück am Sonntag', 'einen Ausflug zum Flughafen'],
          loesung: 1,
        },
        {
          typ: 'mc',
          frage: 'Was möchte Tomás mitbringen?',
          optionen: ['Brötchen', 'einen Kuchen', 'Blumen'],
          loesung: 0,
        },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'text',
      titel: 'Schreiben',
      anweisung: 'Schreib eine E-Mail mit mindestens 40 Wörtern. Denk an Anrede und Gruß.',
      aufgabe: 'Dein Freund Jannik schreibt dir: Er hat die B1-Prüfung bestanden und macht am Samstag eine kleine Feier. Antworte ihm.',
      punkte: [
        'Reagiere auf seine Nachricht.',
        'Erzähl eine Neuigkeit von dir.',
        'Frag, ob du etwas mitbringen sollst.',
      ],
      minWoerter: 40,
      beispielLoesung: 'Lieber Jannik,\nherzlichen Glückwunsch! Toll, dass du die Prüfung bestanden hast. Natürlich komme ich am Samstag gern.\nBei mir gibt es auch eine Neuigkeit: Stell dir vor, ich habe einen Platz im Fotokurs bekommen!\nSoll ich etwas mitbringen, vielleicht einen Salat? Sag mir einfach kurz Bescheid.\nViele Grüße\nNora',
    },
  ],
}
