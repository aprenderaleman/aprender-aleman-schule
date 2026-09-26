// Übungsheft B2 — Lektion 35: Umwelt & Nachhaltigkeit
export default {
  lektion: 35,
  titel: 'Übungsheft — Umwelt & Nachhaltigkeit',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Müll, Pfand, Energie und Konsum: Ergänze die passenden Wörter und Präpositionen und entscheide, welche Formulierung korrekt ist.',
      items: [
        {
          typ: 'luecke',
          text: 'Wer leere Mehrwegflaschen zum Automaten {1}, bekommt das Pfand zurück. Außerdem versuchen wir, auf unnötige Verpackung zu {2}.',
          bank: ['zurückbringt', 'verzichten', 'senken', 'trennt'],
          loesungen: { 1: 'zurückbringt', 2: 'verzichten' },
        },
        {
          typ: 'luecke',
          text: 'Seit wir überall LED-Lampen haben, ist unser {1} deutlich gesunken. Die {2} der Luft in der Innenstadt ist dagegen immer noch zu hoch.',
          bank: ['Stromverbrauch', 'Verschmutzung', 'Gewohnheit', 'Verpackung'],
          loesungen: { 1: 'Stromverbrauch', 2: 'Verschmutzung' },
        },
        {
          typ: 'luecke',
          text: 'Immer mehr Menschen achten beim Einkaufen {1} Nachhaltigkeit. Altpapier gehört übrigens {2} die blaue Tonne.',
          bank: ['auf', 'in', 'an', 'zu'],
          loesungen: { 1: 'auf', 2: 'in' },
        },
        {
          typ: 'mc',
          frage: 'Jeden Abend ___ der Müll in unserer WG sorgfältig getrennt.',
          optionen: ['wird', 'hat', 'worden'],
          loesung: 0,
        },
        {
          typ: 'mc',
          frage: 'Die Stadt will die Luftverschmutzung ___, indem sie mehr Busse einsetzt.',
          optionen: ['verzichten', 'verringern', 'zurückbringen'],
          loesung: 1,
        },
        {
          typ: 'mc',
          frage: 'Lukas kauft fast nur regionale Produkte, ___ sie etwas teurer sind.',
          optionen: ['weil', 'damit', 'obwohl'],
          loesung: 2,
        },
        {
          typ: 'zuordnen',
          links: ['den Müll', 'auf Verpackung', 'eine Gewohnheit', 'die Umwelt', 'mit öffentlichen Verkehrsmitteln'],
          rechts: ['trennen', 'verzichten', 'ändern', 'schützen', 'fahren'],
          loesung: {
            'den Müll': 'trennen',
            'auf Verpackung': 'verzichten',
            'eine Gewohnheit': 'ändern',
            'die Umwelt': 'schützen',
            'mit öffentlichen Verkehrsmitteln': 'fahren',
          },
        },
        {
          typ: 'korrektur',
          optionen: ['Die Kontamination der Flüsse ist in den letzten Jahren zurückgegangen.', 'Die Verschmutzung der Flüsse ist in den letzten Jahren zurückgegangen.'],
          loesung: 1,
          warum: '«Contaminación» (de ríos, aire…) = **die Verschmutzung**. *Die Kontamination* es un tecnicismo y suena raro en el examen.',
        },
        {
          typ: 'korrektur',
          optionen: ['Ich verzichte seit Jahren auf Plastiktüten.', 'Ich verzichte seit Jahren Plastiktüten.'],
          loesung: 0,
          warum: '**verzichten auf** + acusativo: la preposición es obligatoria, igual que en «renunciar a».',
        },
        {
          typ: 'satzbau',
          woerter: ['wäre', 'zu', 'Ein', 'Fleisch', 'erster', 'essen', 'Schritt', 'weniger'],
          loesung: 'Ein erster Schritt wäre, weniger Fleisch zu essen.',
          alt: ['Weniger Fleisch zu essen wäre ein erster Schritt.'],
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies den Leserbrief und löse die Aufgaben.',
      textTitel: 'Leserbrief: Biotonne für alle — gut gemeint, schlecht gemacht',
      text: 'Zum Artikel „Biotonne wird Pflicht“: Ab dem nächsten Jahr soll jeder Haushalt in unserer Stadt eine braune Tonne bekommen — und dafür 40 Euro im Jahr zusätzlich bezahlen. Ich trenne meinen Müll seit über zwanzig Jahren, und selbstverständlich gehören Essensreste nicht in den Restmüll. Trotzdem halte ich die neue Regel für schlecht durchdacht. In meinem Mehrfamilienhaus gibt es schon jetzt kaum Platz für die vorhandenen Tonnen; wo eine weitere stehen soll, weiß niemand. Außerdem kompostieren viele Nachbarn mit Garten ihre Abfälle längst selbst. Warum sollen ausgerechnet sie für eine Tonne zahlen, die sie gar nicht brauchen? Umweltschutz funktioniert nur, wenn die Menschen mitmachen — und das tun sie eher, wenn man sie überzeugt, statt sie zu zwingen. Mein Vorschlag: Die Stadt sollte Haushalte mit eigenem Kompost von der Gebühr befreien und für alle anderen zusätzliche Sammelstellen im Viertel einrichten. So würden wir die Menge an Bioabfall im Restmüll senken, ohne die Bürger zu verärgern. Gerhard Lindqvist, Nordstadt',
      items: [
        {
          typ: 'mc',
          frage: 'Wie steht der Verfasser grundsätzlich zur Mülltrennung?',
          optionen: [
            'Er hält sie für überflüssig.',
            'Er trennt seinen Müll seit Langem und hält das für richtig.',
            'Er meint, dass nur Haushalte mit Garten den Müll trennen sollten.',
          ],
          loesung: 1,
        },
        { typ: 'rf', aussage: 'Im Haus des Verfassers ist genug Platz für eine zusätzliche Tonne.', loesung: false },
        { typ: 'rf', aussage: 'Der Verfasser glaubt, dass man beim Umweltschutz mit Überzeugung mehr erreicht als mit Zwang.', loesung: true },
        {
          typ: 'mc',
          frage: 'Was schlägt der Verfasser vor?',
          optionen: [
            'Die Biotonne sollte für alle Haushalte kostenlos sein.',
            'Die Stadt sollte ganz auf die Biotonne verzichten.',
            'Wer selbst kompostiert, sollte keine Gebühr bezahlen müssen.',
          ],
          loesung: 2,
        },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'text',
      titel: 'Schreiben',
      anweisung: 'Schreib einen Forumsbeitrag mit mindestens 60 Wörtern und geh auf alle drei Punkte ein.',
      aufgabe: 'In einem Online-Forum deiner Stadt wird diskutiert: „Sollte die Innenstadt für private Autos gesperrt werden?“',
      punkte: [
        'Sag deine Meinung und begründe sie.',
        'Nenne ein Gegenargument und reagiere darauf.',
        'Mach einen konkreten Vorschlag, wie man ohne Auto in die Innenstadt kommt.',
      ],
      minWoerter: 60,
      beispielLoesung: 'Ich finde, dass die Innenstadt für private Autos gesperrt werden sollte. Der Verkehr verursacht viel Lärm und Verschmutzung, und auf den Straßen ist kaum Platz für Fußgänger und Radfahrer. Es stimmt zwar, dass viele Geschäfte Angst haben, Kunden zu verlieren, aber in anderen Städten hat sich gezeigt, dass autofreie Zonen sogar mehr Menschen anziehen. Wichtig ist nur, dass es gute Alternativen gibt. Ein erster Schritt wäre, die öffentlichen Verkehrsmittel am Wochenende günstiger zu machen und am Stadtrand große Parkplätze mit Busanschluss zu bauen. So müsste niemand auf seinen Einkaufsbummel verzichten.',
    },
  ],
}
