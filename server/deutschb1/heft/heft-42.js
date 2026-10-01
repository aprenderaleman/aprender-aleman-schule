// Übungsheft B1 — Lektion 42: Prüfungssimulation 1 + Korrektur
export default {
  lektion: 42,
  titel: 'Übungsheft — Wiederholung B1 (1)',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Wiederholung: Hier übst du die wichtigsten B1-Strukturen gemischt. Löse die Aufgaben.',
      items: [
        {
          typ: 'mc',
          frage: 'Ich lerne jeden Tag Deutsch, ___ ich im Juni die Prüfung machen will.',
          optionen: ['denn', 'weil', 'trotzdem'],
          loesung: 1,
        },
        { typ: 'mc', frage: 'Als Kind ___ ich keinen eigenen Computer.', optionen: ['hatte', 'hat', 'hätte'], loesung: 0 },
        {
          typ: 'luecke',
          text: 'Ich hänge das Bild an {1} Wand. Jetzt hängt es an {2} Wand über {3} Sofa.',
          bank: ['die', 'der', 'dem', 'das', 'den'],
          loesungen: { 1: 'die', 2: 'der', 3: 'dem' },
        },
        {
          typ: 'luecke',
          text: 'Wir wohnen in einer {1} Wohnung mit einem {2} Garten. Das {3} Haus hat nur zwei Stockwerke.',
          bank: ['kleine', 'kleinen', 'kleiner', 'kleines'],
          loesungen: { 1: 'kleinen', 2: 'kleinen', 3: 'kleine' },
        },
        {
          typ: 'luecke',
          text: 'Der Mann, {1} neben mir wohnt, ist Arzt. Die Kinder, mit {2} ich oft spiele, sind seine Söhne. Das Buch, {3} er mir geliehen hat, ist spannend.',
          bank: ['der', 'denen', 'das', 'die', 'dem'],
          loesungen: { 1: 'der', 2: 'denen', 3: 'das' },
        },
        {
          typ: 'luecke',
          text: 'Du bist immer so müde. An deiner Stelle {1} ich früher schlafen gehen. Es ist wichtig, genug Pausen {2}.',
          bank: ['würde', 'werde', 'zu machen', 'machen'],
          loesungen: { 1: 'würde', 2: 'zu machen' },
        },
        {
          typ: 'satzbau',
          woerter: ['geliefert', 'morgen', 'Das', 'wird', 'Paket'],
          loesung: 'Das Paket wird morgen geliefert.',
        },
        {
          typ: 'satzbau',
          woerter: ['stattfindet', 'ob', 'heute', 'Ich', 'nicht', 'Kurs', 'weiß', 'der'],
          loesung: 'Ich weiß nicht, ob der Kurs heute stattfindet.',
        },
        {
          typ: 'korrektur',
          optionen: ['Ich bin gestern früh nach Hause gegangen.', 'Ich habe gestern früh nach Hause gegangen.'],
          loesung: 0,
          warum: '**gehen** indica movimiento de un lugar a otro → Perfekt con **sein**: *ich bin gegangen*.',
        },
        {
          typ: 'korrektur',
          optionen: ['Ich freue mich für das Wochenende.', 'Ich freue mich auf das Wochenende.'],
          loesung: 1,
          warum: 'Alegrarse por algo **futuro** = **sich freuen auf** + Akk. *sich freuen für* = alegrarse por otra persona.',
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies die Meldung aus der Zeitung. Löse dann die vier Aufgaben.',
      textTitel: 'Zeitungsnotiz: Neue Bibliothek im Stadtteil Nord',
      text: 'Nach zwei Jahren Bauzeit wurde am Montag die neue Stadtteilbibliothek in der Lindenstraße eröffnet. Das Gebäude, das früher eine Schule war, hat jetzt einen hellen Lesesaal, einen Raum für Kinder und ein kleines Café. Besonders stolz ist die Leiterin, Frau Sommer, auf die langen Öffnungszeiten: Von Dienstag bis Samstag ist die Bibliothek von 10 bis 20 Uhr geöffnet, montags bleibt sie geschlossen. Die Anmeldung ist für Kinder und Jugendliche kostenlos, Erwachsene zahlen zwölf Euro im Jahr. Wer sich bis Ende des Monats anmeldet, bekommt außerdem einen Gutschein für das Café. Am Samstag gibt es ein Fest mit Musik und einer Lesung für Kinder. Der Eintritt ist frei.',
      items: [
        { typ: 'rf', aussage: 'Das Gebäude der Bibliothek war früher eine Schule.', loesung: true },
        {
          typ: 'mc',
          frage: 'Wann ist die Bibliothek geschlossen?',
          optionen: ['am Dienstag', 'am Samstag', 'am Montag'],
          loesung: 2,
        },
        { typ: 'rf', aussage: 'Erwachsene können die Bibliothek kostenlos nutzen.', loesung: false },
        {
          typ: 'mc',
          frage: 'Was bekommt man, wenn man sich bis Ende des Monats anmeldet?',
          optionen: ['einen Gutschein für das Café', 'ein kostenloses Buch', 'eine Eintrittskarte für das Fest'],
          loesung: 0,
        },
      ],
    },
    {
      typ: 'hoeren',
      titel: 'Hören',
      anweisung: 'Du nimmst an einer Stadtführung teil. Hör zu und löse die vier Aufgaben.',
      audio: {
        transcript: 'Herzlich willkommen zu unserer Führung durch die Altstadt. Mein Name ist Katrin, und ich begleite Sie heute. Wir stehen hier vor dem alten Rathaus. Es wurde nicht, wie viele denken, im Mittelalter gebaut, sondern erst vor etwa zweihundert Jahren. Der Bürgermeister arbeitet heute woanders, im Gebäude ist jetzt das Stadtmuseum. Gleich gehen wir zusammen weiter zum Marktplatz und danach zur Kirche. Dort können Sie auf den Turm steigen. Das kostet drei Euro, für Kinder nur einen Euro fünfzig. Die Führung dauert insgesamt neunzig Minuten, wir sind also gegen halb fünf wieder hier. Am Ende haben Sie noch Zeit für einen Kaffee am Fluss. Eine Bitte habe ich noch. Bleiben Sie bitte zusammen, denn in den engen Straßen verliert man sich schnell. Haben Sie noch Fragen? Dann gehen wir los.',
      },
      items: [
        {
          typ: 'mc',
          frage: 'Wann wurde das alte Rathaus gebaut?',
          optionen: ['im Mittelalter', 'vor ungefähr 200 Jahren', 'vor ungefähr 20 Jahren'],
          loesung: 1,
        },
        { typ: 'rf', aussage: 'Im alten Rathaus befindet sich heute ein Museum.', loesung: true },
        {
          typ: 'mc',
          frage: 'Was bezahlt ein Erwachsener für den Turm?',
          optionen: ['3 Euro', '1,50 Euro', '5 Euro'],
          loesung: 0,
        },
        { typ: 'rf', aussage: 'Die Führung dauert eine halbe Stunde.', loesung: false },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'formular',
      titel: 'Schreiben',
      anweisung: 'Lies die Nachricht an die Sprachschule. Ergänze dann das Anmeldeformular.',
      quelle: 'Hallo, ich heiße Oksana Kovalenko und möchte mich für den Vorbereitungskurs B1 anmelden. Tagsüber arbeite ich, deshalb kann ich nur abends. Ich wohne in der Gartenstraße 14 in 60311 Frankfurt. Sie erreichen mich per E-Mail unter o.kovalenko@beispiel.de.',
      felder: [
        { id: 'nachname', label: 'Nachname', erwartet: ['Kovalenko'] },
        { id: 'vorname', label: 'Vorname', erwartet: ['Oksana'] },
        { id: 'kurszeit', label: 'Kurszeit (vormittags / abends)', erwartet: ['abends', 'am Abend'] },
        { id: 'strasse', label: 'Straße und Hausnummer', erwartet: ['Gartenstraße 14', 'Gartenstr. 14'] },
        { id: 'email', label: 'E-Mail', erwartet: ['o.kovalenko@beispiel.de'] },
      ],
    },
    {
      typ: 'sprechen',
      titel: 'Sprechen',
      anweisung: 'Halte eine kurze Präsentation wie in der Prüfung. Du hast 90 Sekunden Zeit.',
      aufgabe: 'Halte eine kurze Präsentation wie im zweiten Teil der mündlichen Prüfung. Dein Thema ist: „Mit dem Fahrrad zur Arbeit — eine gute Idee?“',
      punkte: [
        'Stell das Thema vor.',
        'Erzähl von deinen eigenen Erfahrungen.',
        'Nenne einen Vorteil und einen Nachteil.',
        'Sag deine Meinung und bedanke dich.',
      ],
      redemittel: ['Ich möchte heute über das Thema … sprechen.', 'Ich selbst habe die Erfahrung gemacht, dass …', 'Ein Vorteil ist … Ein Nachteil ist aber …', 'Vielen Dank fürs Zuhören.'],
      maxSekunden: 90,
      beispielLoesung: 'Ich möchte heute über das Thema „Mit dem Fahrrad zur Arbeit“ sprechen. Zuerst erzähle ich von meinen Erfahrungen, dann nenne ich Vor- und Nachteile, und am Ende sage ich meine Meinung. Ich selbst fahre seit zwei Jahren mit dem Rad ins Büro. Früher habe ich den Bus genommen und stand oft im Stau. Ein großer Vorteil ist, dass man sich jeden Tag bewegt. Außerdem ist das Fahrrad billig und gut für die Umwelt. Ein Nachteil ist aber das Wetter: Wenn es regnet oder schneit, macht es wirklich keinen Spaß. Und in manchen Städten gibt es zu wenige Radwege, das ist gefährlich. Ich finde trotzdem, dass das Fahrrad eine sehr gute Idee ist, wenn der Weg nicht zu lang ist. Vielen Dank fürs Zuhören.',
    },
  ],
}
