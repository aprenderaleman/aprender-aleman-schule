// Übungsheft B1 — Lektion 19: Lesen Teil 1: Blogs & E-Mails
export default {
  lektion: 19,
  titel: 'Übungsheft — Lesen Teil 1',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Achte auf die kleinen Wörter: Präposition, Zeit und Signalwörter. Wähle oder ergänze.',
      items: [
        { typ: 'mc', frage: 'Ich freue mich schon ___ die Ferien im August.', optionen: ['auf', 'über', 'an'], loesung: 0 },
        { typ: 'mc', frage: 'Das Paket ist gestern gekommen: Lukas freut sich sehr ___ das Geschenk von seiner Oma.', optionen: ['auf', 'für', 'über'], loesung: 2 },
        { typ: 'mc', frage: 'Amira wohnt ___ drei Jahren in Köln.', optionen: ['vor', 'seit', 'für'], loesung: 1 },
        {
          typ: 'luecke',
          text: 'Liebe Nora, ich bin im März nach Bremen {1}. {2} fühle ich mich hier sehr wohl. Aber ich {3} meine Freunde in Sevilla.',
          bank: ['umgezogen', 'umziehen', 'Inzwischen', 'Früher', 'vermisse', 'empfehle'],
          loesungen: { 1: 'umgezogen', 2: 'Inzwischen', 3: 'vermisse' },
        },
        {
          typ: 'luecke',
          text: 'In meinem neuen {1} {2} ich über meine {3} in Deutschland.',
          bank: ['Blogeintrag', 'Betreff', 'berichte', 'empfehle', 'Erfahrungen'],
          loesungen: { 1: 'Blogeintrag', 2: 'berichte', 3: 'Erfahrungen' },
        },
        {
          typ: 'zuordnen',
          links: ['früher', 'inzwischen', 'nicht mehr', 'noch nicht', 'leider'],
          rechts: ['in der Vergangenheit', 'jetzt, nach einiger Zeit', 'vorher ja, jetzt nein', 'bis jetzt nein, später vielleicht', 'Das ist schade.'],
          loesung: {
            'früher': 'in der Vergangenheit',
            'inzwischen': 'jetzt, nach einiger Zeit',
            'nicht mehr': 'vorher ja, jetzt nein',
            'noch nicht': 'bis jetzt nein, später vielleicht',
            'leider': 'Das ist schade.',
          },
        },
        { typ: 'satzbau', woerter: ['empfehlen', 'Kurs', 'dir', 'Ich', 'sehr', 'diesen', 'kann'], loesung: 'Ich kann dir diesen Kurs sehr empfehlen.' },
        { typ: 'satzbau', woerter: ['arbeitet', 'Bäckerei', 'Seit', 'einer', 'Tim', 'in', 'Januar'], loesung: 'Seit Januar arbeitet Tim in einer Bäckerei.' },
        {
          typ: 'korrektur',
          optionen: ['Ich lerne seit zwei Jahren Deutsch.', 'Ich habe seit zwei Jahren Deutsch gelernt.'],
          loesung: 0,
          warum: 'Con **seit** para algo que todavía continúa, el alemán usa **Präsens**. En español dices «llevo dos años aprendiendo»; no pases al Perfekt.',
        },
        {
          typ: 'korrektur',
          optionen: ['Ich freue mich auf deine E-Mail von gestern.', 'Ich freue mich über deine E-Mail von gestern.'],
          loesung: 1,
          warum: 'La e-mail ya llegó → **sich freuen über**. **auf** solo para algo que todavía va a venir (*auf die Ferien*).',
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies die E-Mail. Löse dann die vier Aufgaben. Achte auf die Signalwörter.',
      textTitel: 'Betreff: Endlich Neuigkeiten aus Graz',
      text: 'Liebe Carla, entschuldige, dass ich so lange nicht geschrieben habe! Seit August wohne ich jetzt in Graz. Ich bin wegen meines Studiums umgezogen. Am Anfang war alles neu, und ich habe meine Familie sehr vermisst. Inzwischen habe ich eine nette WG gefunden: Ich wohne mit zwei Studentinnen zusammen. Früher bin ich jeden Tag mit dem Bus gefahren, aber jetzt nehme ich das Fahrrad. Das ist billiger und gesünder! Leider habe ich noch keinen Nebenjob gefunden, deshalb ist das Geld manchmal knapp. Ich freue mich schon auf die Weihnachtsferien, denn dann komme ich nach Hause. Hast du dann Zeit für einen Kaffee? Und kannst du mir ein gutes Buch empfehlen? Ich lese hier abends viel. Viele Grüße, Jonas',
      items: [
        { typ: 'rf', aussage: 'Jonas ist für sein Studium nach Graz gezogen.', loesung: true },
        { typ: 'rf', aussage: 'Jonas fährt immer noch jeden Tag mit dem Bus.', loesung: false },
        {
          typ: 'mc',
          frage: 'Was schreibt Jonas über einen Nebenjob?',
          optionen: ['Er arbeitet schon in einem Café.', 'Er hat noch keinen Nebenjob.', 'Er braucht keinen Nebenjob.'],
          loesung: 1,
        },
        {
          typ: 'mc',
          frage: 'Worauf freut sich Jonas?',
          optionen: ['auf die Weihnachtsferien zu Hause', 'auf ein Buch von Carla', 'auf seine neue WG'],
          loesung: 0,
        },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'text',
      titel: 'Schreiben',
      anweisung: 'Schreib eine E-Mail mit mindestens 40 Wörtern. Denk an Anrede und Gruß.',
      aufgabe: 'Du bist vor drei Monaten in eine neue Stadt umgezogen. Schreib einer Freundin oder einem Freund eine E-Mail.',
      punkte: ['Wie war der Anfang in der neuen Stadt?', 'Was ist inzwischen besser?', 'Worauf freust du dich?'],
      minWoerter: 40,
      beispielLoesung: 'Liebe Mia, seit drei Monaten wohne ich jetzt in Leipzig. Am Anfang war es schwer, weil alles neu war. Ich habe euch alle sehr vermisst. Inzwischen habe ich eine nette Kollegin gefunden, und wir gehen oft zusammen joggen. Ich freue mich schon auf deinen Besuch im Mai! Ich kann dir hier ein tolles Café empfehlen. Viele Grüße, Pablo',
    },
  ],
}
