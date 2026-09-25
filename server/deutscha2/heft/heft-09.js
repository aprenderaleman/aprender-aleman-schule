// Übungsheft A2 — Lektion 09: Dativ & Dativpräpositionen
export default {
  lektion: 9,
  titel: 'Übungsheft — Der Dativ',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Wähle oder ergänze die richtige Form. ~~(Elige o completa la forma correcta.)~~',
      items: [
        { typ: 'mc', frage: 'Ich danke ___ Lehrer.', optionen: ['den', 'dem', 'das'], loesung: 1 },
        { typ: 'mc', frage: 'Das Handy gehört ___ Frau.', optionen: ['der', 'die', 'das'], loesung: 0 },
        {
          typ: 'luecke',
          text: 'Ich fahre mit {1} Zug nach Hamburg. Dort wohne ich bei {2} Freundin.',
          bank: ['dem', 'einer', 'den', 'die'],
          loesungen: { 1: 'dem', 2: 'einer' },
        },
        {
          typ: 'luecke',
          text: 'Er hilft {1} Kind und dankt {2} Eltern.',
          bank: ['dem', 'den', 'der'],
          loesungen: { 1: 'dem', 2: 'den' },
        },
        { typ: 'satzbau', woerter: ['meiner', 'helfe', 'Ich', 'Mutter'], loesung: 'Ich helfe meiner Mutter.' },
        { typ: 'satzbau', woerter: ['einem', 'lerne', 'ich', 'Seit', 'Jahr', 'Deutsch'], loesung: 'Seit einem Jahr lerne ich Deutsch.', alt: ['Ich lerne seit einem Jahr Deutsch.'] },
        {
          typ: 'zuordnen',
          links: ['der Bruder', 'die Schwester', 'das Kind', 'die Kinder (Plural)'],
          rechts: ['dem Bruder', 'der Schwester', 'dem Kind', 'den Kindern'],
          loesung: { 'der Bruder': 'dem Bruder', 'die Schwester': 'der Schwester', 'das Kind': 'dem Kind', 'die Kinder (Plural)': 'den Kindern' },
        },
        {
          typ: 'korrektur',
          optionen: ['Ich helfe meine Mutter.', 'Ich helfe meiner Mutter.'],
          loesung: 1,
          warum: '**helfen** va con Dativ: *Ich helfe meiner Mutter*. ~~(«Ayudo A mi madre» — ese «a» en alemán es dativo, no acusativo.)~~',
        },
        {
          typ: 'korrektur',
          optionen: ['Die Pizza schmeckt mir.', 'Die Pizza schmeckt mich.'],
          loesung: 0,
          warum: '**schmecken** y **gefallen** van con Dativ: *Das schmeckt **mir***. ~~(«me gusta» → mir, nunca mich.)~~',
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies den Text. Richtig oder falsch? ~~(Lee el texto. ¿Verdadero o falso?)~~',
      textTitel: 'Anzeige: Deutschkurs mit Frau Kraus',
      text: 'Deutsch lernen? Ich helfe gern! Ich heiße Petra Kraus und ich gebe seit einem Jahr Deutschkurse in Bonn. Der Kurs ist am Montag und am Mittwoch, von 18 bis 19 Uhr. Wir lernen mit Musik und mit Spielen — das gefällt den Schülern sehr. Eine Stunde kostet 15 Euro. Du findest den Kursraum bei der Post. Komm mit einem Freund — dann kostet die Stunde nur 12 Euro! Ruf an: 0228 445566.',
      items: [
        { typ: 'rf', aussage: 'Frau Kraus gibt seit einem Monat Deutschkurse.', loesung: false },
        {
          typ: 'mc',
          frage: 'Wann ist der Kurs?',
          optionen: ['am Montag und am Mittwoch', 'am Montag und am Freitag', 'nur am Mittwoch'],
          loesung: 0,
        },
        { typ: 'rf', aussage: 'Der Kursraum ist bei der Post.', loesung: true },
        {
          typ: 'mc',
          frage: 'Du kommst mit einem Freund. Was kostet eine Stunde?',
          optionen: ['15 Euro', '18 Euro', '12 Euro'],
          loesung: 2,
        },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'text',
      titel: 'Schreiben',
      anweisung: 'Schreib eine kurze E-Mail an deinen Freund Mateo. ~~(Escribe un correo corto a tu amigo Mateo.)~~',
      aufgabe: 'Thema: dein Alltag. Schreib zu allen drei Punkten.',
      punkte: [
        'Mit wem wohnst du?',
        'Wie fährst du zum Deutschkurs?',
        'Wem hilfst du zu Hause?',
      ],
      minWoerter: 25,
      beispielLoesung: 'Hallo Mateo, ich wohne mit meiner Schwester in Bilbao. Zum Deutschkurs fahre ich mit dem Bus. Der Kurs ist bei der Bibliothek. Zu Hause helfe ich meiner Mutter und meinem Vater. Viele Grüße, Rosa',
    },
  ],
}
