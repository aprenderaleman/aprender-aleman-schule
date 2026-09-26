// Übungsheft B1 — Lektion 15: Passiv — Präsens & Präteritum
export default {
  lektion: 15,
  titel: 'Übungsheft — Passiv',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Frag nicht: Wer macht es? Frag: Was passiert? Wähle dann die richtige Form.',
      items: [
        { typ: 'mc', frage: 'Die Wohnung ___ gerade renoviert.', optionen: ['wird', 'werden', 'wurden'], loesung: 0 },
        { typ: 'mc', frage: 'Die Schule ___ 1985 gebaut.', optionen: ['wird', 'wurde', 'würde'], loesung: 1 },
        {
          typ: 'mc',
          frage: 'Welcher Satz steht im Passiv?',
          optionen: ['Ich werde morgen einkaufen.', 'Das Paket wird morgen geliefert.', 'Mein Bruder wird Lehrer.'],
          loesung: 1,
        },
        {
          typ: 'luecke',
          text: 'Hier {1} jetzt ein neues Hotel {2}. Die alte Post {3} letztes Jahr geschlossen.',
          bank: ['wird', 'wurde', 'gebaut', 'bauen', 'werden'],
          loesungen: { 1: 'wird', 2: 'gebaut', 3: 'wurde' },
        },
        {
          typ: 'luecke',
          text: 'Normalerweise {1} die Tickets am Eingang {2}. Aber gestern {3} sie nicht kontrolliert.',
          bank: ['werden', 'wurden', 'kontrolliert', 'kontrollieren', 'wird'],
          loesungen: { 1: 'werden', 2: 'kontrolliert', 3: 'wurden' },
        },
        {
          typ: 'luecke',
          text: 'Man spricht hier Deutsch. = Hier {1} Deutsch {2}.',
          bank: ['wird', 'werden', 'gesprochen', 'sprechen'],
          loesungen: { 1: 'wird', 2: 'gesprochen' },
        },
        {
          typ: 'zuordnen',
          links: ['Man repariert das Auto.', 'Man reparierte das Auto.', 'Man öffnet die Türen um 9 Uhr.', 'Man sperrte die Straßen.', 'Man liefert die Möbel am Montag.'],
          rechts: ['Die Straßen wurden gesperrt.', 'Das Auto wird repariert.', 'Die Möbel werden am Montag geliefert.', 'Das Auto wurde repariert.', 'Die Türen werden um 9 Uhr geöffnet.'],
          loesung: {
            'Man repariert das Auto.': 'Das Auto wird repariert.',
            'Man reparierte das Auto.': 'Das Auto wurde repariert.',
            'Man öffnet die Türen um 9 Uhr.': 'Die Türen werden um 9 Uhr geöffnet.',
            'Man sperrte die Straßen.': 'Die Straßen wurden gesperrt.',
            'Man liefert die Möbel am Montag.': 'Die Möbel werden am Montag geliefert.',
          },
        },
        { typ: 'satzbau', woerter: ['verschoben', 'auf', 'Termin', 'wurde', 'Der', 'Montag'], loesung: 'Der Termin wurde auf Montag verschoben.' },
        {
          typ: 'korrektur',
          optionen: ['Hier sich spricht Deutsch.', 'Hier wird Deutsch gesprochen.'],
          loesung: 1,
          warum: 'El «se» impersonal del español **no es sich**. En alemán dices *man spricht* o, más formal, el **Passiv**: *wird … gesprochen*.',
        },
        {
          typ: 'korrektur',
          optionen: ['Das Haus wurde 1990 gebaut.', 'Das Haus wurde gebaut 1990.'],
          loesung: 0,
          warum: '*wurde* va en posición 2 y el **Partizip II siempre al final**. En español «se construyó en 1990» junta los verbos; en alemán forman un paréntesis.',
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies den Beitrag im Forum. Löse dann die vier Aufgaben.',
      textTitel: 'Forum „Unser Viertel“ — Beitrag von Lena',
      text: 'Hallo zusammen! Wisst ihr schon, was in der Bahnhofstraße passiert? Das alte Kino wird gerade umgebaut. Es wurde 1962 eröffnet und war lange geschlossen. Jetzt wird dort ein Kulturzentrum mit Café gebaut. Letzte Woche wurden die alten Sitze abgeholt, und gestern wurde das Dach repariert. Auf dem Plakat steht: Das Zentrum wird im Mai eröffnet. Es werden auch Kurse angeboten, zum Beispiel Tanzen, Malen und Deutsch für Anfänger. Leider wird die Straße während der Arbeiten jeden Vormittag gesperrt. Die Busse fahren deshalb eine andere Strecke. Ich finde das Projekt toll! In unserem Viertel gibt es zu wenig Orte für junge Leute. Was meint ihr? Viele Grüße, Lena',
      items: [
        { typ: 'rf', aussage: 'Das Kino wurde 1962 eröffnet.', loesung: true },
        {
          typ: 'mc',
          frage: 'Was wird im alten Kino gebaut?',
          optionen: ['ein Hotel', 'ein Kulturzentrum mit Café', 'eine neue Bushaltestelle'],
          loesung: 1,
        },
        { typ: 'rf', aussage: 'Die Straße wird während der Arbeiten den ganzen Tag gesperrt.', loesung: false },
        {
          typ: 'mc',
          frage: 'Was wurde gestern gemacht?',
          optionen: ['Das Dach wurde repariert.', 'Die Sitze wurden abgeholt.', 'Das Zentrum wurde eröffnet.'],
          loesung: 0,
        },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'text',
      titel: 'Schreiben',
      anweisung: 'Schreib einen Forumsbeitrag mit mindestens 40 Wörtern. Benutze das Passiv mindestens dreimal.',
      aufgabe: 'In deiner Straße ist in den letzten Monaten viel passiert. Schreib einen kurzen Beitrag für das Forum „Unser Viertel“.',
      punkte: [
        'Was wurde in deiner Straße gebaut oder renoviert?',
        'Was wird im Moment gemacht?',
        'Wie findest du die Veränderungen? Begründe kurz.',
      ],
      minWoerter: 40,
      beispielLoesung: 'Hallo zusammen! In meiner Straße ist viel passiert. Im Frühling wurde der Spielplatz renoviert, und im Sommer wurden neue Bäume gepflanzt. Im Moment wird die alte Bäckerei umgebaut. Dort wird bald ein kleiner Supermarkt eröffnet. Ich finde das super, weil ich jetzt nicht mehr so weit zum Einkaufen fahren muss. Nur der Lärm am Morgen stört mich. Viele Grüße, Deniz',
    },
  ],
}
