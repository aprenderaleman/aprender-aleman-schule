// Übungsheft B2 — Lektion 02: Das digitale Prüfungsformat (CBT)
export default {
  lektion: 2,
  titel: 'Übungsheft — Prüfung am Computer',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Hier übst du die Sprache der Prüfung am Bildschirm. Wähle die passende Lösung oder ergänze die Lücken.',
      items: [
        { typ: 'mc', frage: 'Um eine Antwort auszuwählen, musst du sie mit der Maus ___.', optionen: ['scrollen', 'anklicken', 'tippen'], loesung: 1 },
        { typ: 'mc', frage: 'Der Lesetext ist lang: Du musst nach unten ___, um das Ende zu sehen.', optionen: ['markieren', 'tippen', 'scrollen'], loesung: 2 },
        {
          typ: 'luecke',
          text: 'Beim Hören trägst du eigene {1}. Die {2} läuft oben rechts auf dem {3} mit.',
          bank: ['Kopfhörer', 'Restzeit', 'Bildschirm', 'Tastatur', 'Eingabefeld'],
          loesungen: { 1: 'Kopfhörer', 2: 'Restzeit', 3: 'Bildschirm' },
        },
        {
          typ: 'luecke',
          text: 'Deinen Text tippst du direkt {1} Eingabefeld. Wichtige Zahlen hebst du {2} dem Markierungswerkzeug hervor. Das ß liegt auf der deutschen Tastatur rechts {3} der Null.',
          bank: ['ins', 'mit', 'neben', 'am', 'über'],
          loesungen: { 1: 'ins', 2: 'mit', 3: 'neben' },
        },
        {
          typ: 'zuordnen',
          links: ['mit dem Stift unterstreichen', 'eine Lösung ankreuzen', 'mit der Hand schreiben', 'auf die Wanduhr schauen', 'im Heft umblättern'],
          rechts: ['mit dem Werkzeug markieren', 'die Lösung anklicken', 'ins Eingabefeld tippen', 'die Restzeit am Bildschirm prüfen', 'nach unten scrollen'],
          loesung: {
            'mit dem Stift unterstreichen': 'mit dem Werkzeug markieren',
            'eine Lösung ankreuzen': 'die Lösung anklicken',
            'mit der Hand schreiben': 'ins Eingabefeld tippen',
            'auf die Wanduhr schauen': 'die Restzeit am Bildschirm prüfen',
            'im Heft umblättern': 'nach unten scrollen',
          },
        },
        { typ: 'mc', frage: 'Deine Antworten ___ erst am Ende der Zeit endgültig gespeichert.', optionen: ['werden', 'wird', 'haben'], loesung: 0 },
        {
          typ: 'satzbau',
          woerter: ['später', 'damit', 'Ich', 'kann', 'Aufgabe', 'zurückkommen', 'die', 'ich', 'markiere'],
          loesung: 'Ich markiere die Aufgabe, damit ich später zurückkommen kann.',
          alt: ['Damit ich später zurückkommen kann, markiere ich die Aufgabe.'],
        },
        {
          typ: 'satzbau',
          woerter: ['Tastatur', 'ein', 'Hause', 'Stell', 'deutsche', 'zu', 'die'],
          loesung: 'Stell zu Hause die deutsche Tastatur ein.',
          alt: ['Stell die deutsche Tastatur zu Hause ein.'],
        },
        {
          typ: 'korrektur',
          optionen: ['Klicke in die richtige Antwort.', 'Klicke die richtige Antwort an.'],
          loesung: 1,
          warum: '«Hacer clic en algo» = **etwas anklicken** o **auf etwas klicken**, nunca *in*.',
        },
        {
          typ: 'korrektur',
          optionen: ['Die Restzeit siehst du oben rechts auf dem Bildschirm.', 'Die Restzeit siehst du oben rechts in dem Bildschirm.'],
          loesung: 0,
          warum: '«En la pantalla» = **auf dem Bildschirm** (o *am Bildschirm*). *In dem Bildschirm* sería «dentro del aparato».',
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies den Artikelauszug. Entscheide dann, welche Lösung dem Text entspricht.',
      textTitel: 'Artikelauszug: Prüfung am Computer — was Teilnehmende berichten',
      text: 'Immer mehr Sprachprüfungen finden inzwischen am Computer statt. Das betrifft die Module Lesen, Hören und Schreiben; die mündliche Prüfung wird weiterhin von zwei Prüfenden durchgeführt. Viele Teilnehmende sind zunächst skeptisch. „Ich hatte Angst, dass ich mit der deutschen Tastatur zu langsam bin“, erzählt die Studentin Ana Ruiz. Sie hat deshalb vier Wochen lang jeden Abend zwanzig Minuten getippt. „Am Prüfungstag habe ich das ß sofort gefunden.“ Besonders positiv bewerten viele das Hören: Jeder trägt eigene Kopfhörer und kann die Lautstärke selbst einstellen. Früher hörten alle das Audio über einen Lautsprecher, und Geräusche im Raum störten oft. Kritik gibt es trotzdem. Der Ingenieur Farid Haddad vermisst den Stift: „Auf Papier unterstreiche ich einfach schneller.“ Die Kursleiterin Maren Holt rät deshalb, das Markierungswerkzeug schon vor der Prüfung zu trainieren. Ihr wichtigster Tipp: „Behalten Sie die Restzeit im Blick, aber schauen Sie nicht jede Minute darauf.“',
      items: [
        { typ: 'rf', aussage: 'Auch die mündliche Prüfung findet am Computer statt.', loesung: false },
        { typ: 'rf', aussage: 'Ana Ruiz hat vor der Prüfung regelmäßig mit deutscher Tastatur geübt.', loesung: true },
        {
          typ: 'mc',
          frage: 'Was gefällt vielen Teilnehmenden am digitalen Hören?',
          optionen: ['Sie hören jedes Audio zweimal.', 'Sie können die Lautstärke selbst regeln.', 'Alle hören das Audio über einen Lautsprecher.'],
          loesung: 1,
        },
        {
          typ: 'mc',
          frage: 'Was rät Maren Holt?',
          optionen: ['das Markierungswerkzeug vor der Prüfung zu trainieren', 'wichtige Stellen auf Papier zu unterstreichen', 'jede Minute auf die Restzeit zu schauen'],
          loesung: 0,
        },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'text',
      titel: 'Schreiben',
      anweisung: 'Schreib einen Forumsbeitrag mit mindestens 60 Wörtern. Begründe deine Meinung.',
      aufgabe: 'In einem Forum für Deutschlernende lautet die Frage der Woche: „Prüfung am Computer oder auf Papier — was ist besser?“ Schreib einen Beitrag.',
      punkte: [
        'Sag, welches Format du bevorzugst, und begründe deine Meinung.',
        'Nenne einen Vorteil und einen Nachteil des digitalen Formats.',
        'Gib den anderen einen Tipp zur Vorbereitung.',
      ],
      minWoerter: 60,
      beispielLoesung: 'Hallo zusammen,\nich finde die Prüfung am Computer besser, weil ich schneller tippe als schreibe. Ein großer Vorteil ist, dass man Texte sauber korrigieren und Absätze umstellen kann. Auch beim Hören hilft es, dass jeder eigene Kopfhörer hat. Ein Nachteil ist allerdings, dass man nicht mit dem Stift unterstreichen kann. Deshalb sollte man das Markierungswerkzeug vorher gut kennen. Mein Tipp: Stellt zu Hause die deutsche Tastatur ein und tippt jeden Tag ein paar Sätze mit ä, ö, ü und ß.\nViele Grüße\nKemal',
    },
  ],
}
