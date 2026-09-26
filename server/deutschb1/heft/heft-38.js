// Übungsheft B1 — Lektion 38: Freizeit & Medien
export default {
  lektion: 38,
  titel: 'Übungsheft — Freizeit & Medien',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Achte auf trennbare und reflexive Verben: Ich sehe fern. Wir treffen uns. Löse dann die Aufgaben.',
      items: [
        { typ: 'mc', frage: 'Abends ___ ich meistens eine Stunde fern.', optionen: ['sehe', 'fernsehe', 'sieht'], loesung: 0 },
        { typ: 'mc', frage: 'Am Samstag kann ich nicht. Wie wäre es ___ Sonntag?', optionen: ['für', 'mit', 'an'], loesung: 1 },
        { typ: 'mc', frage: 'Carlos spielt seit zwei Jahren ___ Verein Handball.', optionen: ['in', 'auf dem', 'im'], loesung: 2 },
        {
          typ: 'luecke',
          text: 'Am Wochenende {1} ich mich mit Freunden. Wir {2} oft etwas zusammen. Meistens gehen wir {3} Kino.',
          bank: ['treffe', 'trifft', 'unternehmen', 'ins', 'im'],
          loesungen: { 1: 'treffe', 2: 'unternehmen', 3: 'ins' },
        },
        {
          typ: 'luecke',
          text: 'Lena schaut in der Bahn immer auf ihr {1}. Sie schreibt {2} an ihre Freundinnen oder streamt eine {3}.',
          bank: ['Handy', 'Fernseher', 'Nachrichten', 'Serie', 'Verein'],
          loesungen: { 1: 'Handy', 2: 'Nachrichten', 3: 'Serie' },
        },
        {
          typ: 'luecke',
          text: 'Tim {1} vor, dass wir am Samstag wandern. Leider {2} ich an dem Tag nicht. Ich habe schon eine {3} mit Ana.',
          bank: ['schlägt', 'schlage', 'kann', 'Verabredung', 'Freizeit'],
          loesungen: { 1: 'schlägt', 2: 'kann', 3: 'Verabredung' },
        },
        {
          typ: 'zuordnen',
          links: ['fernsehen', 'sich verabreden', 'vorschlagen', 'unternehmen', 'die Freizeit'],
          rechts: ['ein Programm im Fernsehen ansehen', 'mit Freunden einen Termin ausmachen', 'eine Idee nennen', 'etwas zusammen machen', 'die Zeit ohne Arbeit'],
          loesung: {
            'fernsehen': 'ein Programm im Fernsehen ansehen',
            'sich verabreden': 'mit Freunden einen Termin ausmachen',
            'vorschlagen': 'eine Idee nennen',
            'unternehmen': 'etwas zusammen machen',
            'die Freizeit': 'die Zeit ohne Arbeit',
          },
        },
        { typ: 'satzbau', woerter: ['wir', 'uns', 'Samstag', 'Wollen', 'am', 'treffen'], loesung: 'Wollen wir uns am Samstag treffen?' },
        {
          typ: 'korrektur',
          optionen: ['Ich sehe abends fern.', 'Ich fernsehe abends.'],
          loesung: 0,
          warum: '**fernsehen** es separable: *fern* va al final (*Ich sehe abends fern*). Que en español sea «ver la tele» no cambia la regla.',
        },
        {
          typ: 'korrektur',
          optionen: ['Ich treffe am Freitag mit Paula.', 'Ich treffe mich am Freitag mit Paula.'],
          loesung: 1,
          warum: 'Con *mit* el verbo es reflexivo: **sich treffen mit** (*quedar con*). Sin *mit*: *Ich treffe Paula.*',
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies die Anzeige. Löse dann die vier Aufgaben.',
      textTitel: 'Anzeige: Laufgruppe sucht neue Mitglieder',
      text: 'Du läufst gern, aber allein macht es dir keinen Spaß? Dann komm zu uns! Wir sind eine kleine Laufgruppe im Sportverein Grünwald. Wir treffen uns jeden Dienstag und Donnerstag um 7 Uhr am Eingang vom Stadtpark. Dann laufen wir etwa eine Stunde, mal schneller, mal langsamer. Anfänger sind herzlich willkommen, denn bei uns muss niemand schnell sein. Das erste Training ist kostenlos. Danach kostet die Mitgliedschaft im Verein 8 Euro im Monat. Einmal im Monat unternehmen wir auch etwas zusammen: Wir frühstücken nach dem Training oder gehen am Wochenende wandern. Hast du Lust? Dann schick vorher eine kurze Nachricht an Jana Petrović über die Webseite des Vereins. So wissen wir, dass du kommst, und warten auf dich.',
      items: [
        { typ: 'rf', aussage: 'Die Laufgruppe trifft sich zweimal pro Woche.', loesung: true },
        {
          typ: 'mc',
          frage: 'Wo beginnt das Training?',
          optionen: ['vor der Sporthalle', 'am Eingang vom Stadtpark', 'bei Jana zu Hause'],
          loesung: 1,
        },
        { typ: 'rf', aussage: 'In der Gruppe muss man schon schnell laufen können.', loesung: false },
        {
          typ: 'mc',
          frage: 'Was kostet das erste Training?',
          optionen: ['nichts', '8 Euro', '8 Euro im Monat'],
          loesung: 0,
        },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'formular',
      titel: 'Schreiben',
      anweisung: 'Lies die Nachricht an das Freizeitzentrum. Ergänze dann das Anmeldeformular.',
      quelle: 'Hallo, ich heiße Karim Haddad und bin 29 Jahre alt. Ich möchte mich für den Fotokurs anmelden. Am liebsten komme ich am Mittwochabend, weil ich tagsüber arbeite. Eine eigene Kamera habe ich schon. Meine E-Mail-Adresse ist karim.haddad@beispiel.de.',
      felder: [
        { id: 'name', label: 'Name', erwartet: ['Karim Haddad', 'Haddad'] },
        { id: 'alter', label: 'Alter', erwartet: ['29', '29 Jahre', '29 Jahre alt'] },
        { id: 'kurs', label: 'Kurs', erwartet: ['Fotokurs', 'der Fotokurs', 'den Fotokurs'] },
        { id: 'termin', label: 'Wunschtermin', erwartet: ['Mittwochabend', 'am Mittwochabend', 'Mittwoch', 'Mittwoch abends', 'mittwochs'] },
        { id: 'kamera', label: 'Eigene Kamera? (ja/nein)', erwartet: ['ja'] },
      ],
    },
  ],
}
