// Übungsheft C1 — Lektion 03: Nominalstil vs. Verbalstil
export default {
  lektion: 3,
  titel: 'Übungsheft — Nominalstil vs. Verbalstil',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Verdichte die verbalen Aussagen im Nominalstil. Wähle Präposition und Nominalisierung so, dass die Bedeutung erhalten bleibt, und achte auf den Kasus.',
      items: [
        {
          typ: 'luecke',
          text: 'Weil die Nachfrage stark zugenommen hatte, wurden die Preise erhöht. → {1} der starken {2} der Nachfrage wurden die Preise erhöht.',
          bank: ['Aufgrund', 'Zunahme', 'Trotz', 'Zunehmung'],
          loesungen: { 1: 'Aufgrund', 2: 'Zunahme' },
        },
        {
          typ: 'luecke',
          text: 'Wenn alle Unterlagen vorliegen, wird der Antrag bearbeitet. → {1} {2} aller Unterlagen wird der Antrag bearbeitet.',
          bank: ['Bei', 'Vorliegen', 'Durch', 'Vorliegung'],
          loesungen: { 1: 'Bei', 2: 'Vorliegen' },
        },
        {
          typ: 'luecke',
          text: 'Obgleich die Lage kritisch war, hielt die Regierung an ihrem Plan fest. → {1} der kritischen Lage hielt die Regierung an ihrem Plan fest. Damit die Qualität verbessert wird, werden Tests eingeführt. → {2} Verbesserung der Qualität werden Tests eingeführt.',
          bank: ['Ungeachtet', 'Zur', 'Infolge', 'Zum'],
          loesungen: { 1: 'Ungeachtet', 2: 'Zur' },
        },
        {
          typ: 'mc',
          frage: 'Indem man die Abläufe digitalisiert, spart das Unternehmen Zeit. → ___ spart das Unternehmen Zeit.',
          optionen: ['Mit Digitalisieren der Abläufe', 'Durch die Digitalisierung der Abläufe', 'Bei der Digitalisierung von den Abläufen'],
          loesung: 1,
        },
        {
          typ: 'korrektur',
          optionen: ['Wegen dem Rückgang der Verkaufszahlen wurden Stellen abgebaut.', 'Wegen des Rückgangs der Verkaufszahlen wurden Stellen abgebaut.'],
          loesung: 1,
          warum: 'En registro escrito *wegen* rige **genitivo**: *des Rückgangs* (masculino, con -s). *Wegen dem* es coloquial y en C1 resta puntos.',
        },
        {
          typ: 'korrektur',
          optionen: ['Die Teilnahme an der Konferenz ist für Mitglieder kostenlos.', 'Die Teilnahme in der Konferenz ist für Mitglieder kostenlos.'],
          loesung: 0,
          warum: 'La nominalización conserva la preposición del verbo: *teilnehmen **an*** → *die Teilnahme **an***. «Participación en» induce al calco *in*.',
        },
        {
          typ: 'mc',
          frage: 'Man prüft den Antrag sorgfältig. → Die sorgfältige Prüfung ___ dauert etwa zwei Wochen.',
          optionen: ['den Antrag', 'des Antrags', 'für den Antrag'],
          loesung: 1,
        },
        {
          typ: 'zuordnen',
          links: ['obwohl', 'indem', 'nachdem', 'falls', 'damit'],
          rechts: ['trotz', 'durch', 'nach', 'im Falle', 'zwecks'],
          loesung: {
            'obwohl': 'trotz',
            'indem': 'durch',
            'nachdem': 'nach',
            'falls': 'im Falle',
            'damit': 'zwecks',
          },
        },
        {
          typ: 'korrektur',
          optionen: ['Die Stadt hat die Einführung von einer Umweltzone beschlossen.', 'Die Stadt hat die Einführung einer Umweltzone beschlossen.'],
          loesung: 1,
          warum: 'Con artículo, el complemento de la nominalización va en **genitivo** (*einer Umweltzone*). *von* + dativo solo sustituye al genitivo cuando no hay artículo: *die Einführung von Umweltzonen*.',
        },
        {
          typ: 'luecke',
          text: 'Die {1} des Projekts verzögerte sich {2} fehlender Fachkräfte; eine {3} externer Beratung kam aus Kostengründen nicht infrage.',
          bank: ['Durchführung', 'infolge', 'Inanspruchnahme', 'Teilnahme', 'ungeachtet'],
          loesungen: { 1: 'Durchführung', 2: 'infolge', 3: 'Inanspruchnahme' },
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies den Auszug aus einem Zeitungsartikel und entscheide, welche Lösung dem Text entspricht.',
      textTitel: 'Artikelauszug: Zwei Jahre verkehrsberuhigte Innenstadt',
      text: 'Zwei Jahre nach Einführung der verkehrsberuhigten Zone in der Kasseler Innenstadt zieht die Stadtverwaltung eine überwiegend positive Bilanz. Nach Auswertung aktueller Messdaten verzeichnet sie einen Rückgang des Autoverkehrs um knapp ein Drittel; gleichzeitig ist eine deutliche Zunahme des Rad- und Fußverkehrs zu beobachten. Ungeachtet anfänglicher Proteste des Einzelhandels hat sich auch die Lage der Geschäfte stabilisiert: Nach einem Umsatzeinbruch im ersten Halbjahr liegen die Verkaufszahlen inzwischen wieder auf dem Niveau vor Beginn des Projekts. Kritik gibt es dennoch. Anwohnerinnen und Anwohner der angrenzenden Viertel beklagen eine Verlagerung des Verkehrs in ihre Straßen. Zur Entlastung dieser Gebiete plant die Stadt die Durchführung eines weiteren Pilotprojekts, bei dem Durchgangsverkehr in Wohnstraßen durch Poller unterbunden werden soll. Die Teilnahme an den begleitenden Bürgerversammlungen war bislang allerdings gering. Bei Vorliegen aller Ergebnisse soll der Stadtrat im kommenden Frühjahr über eine dauerhafte Ausweitung der Zone entscheiden. Die Inanspruchnahme zusätzlicher Fördermittel des Landes ist dabei ausdrücklich vorgesehen, heißt es aus dem Rathaus.',
      items: [
        { typ: 'rf', aussage: 'Die Geschäfte in der Innenstadt verzeichnen inzwischen wieder ähnliche Verkaufszahlen wie vor dem Projekt.', loesung: true },
        {
          typ: 'mc',
          frage: 'Worüber beklagen sich die Bewohner der Nachbarviertel?',
          optionen: ['über fehlende Parkplätze für Anwohner', 'über die geringe Beteiligung an den Bürgerversammlungen', 'über zusätzlichen Verkehr in ihren eigenen Straßen'],
          loesung: 2,
        },
        {
          typ: 'mc',
          frage: 'Was sagt der Text über die Bürgerversammlungen?',
          optionen: ['Sie haben die Ausweitung der Zone bereits beschlossen.', 'Sie stießen bislang auf geringes Interesse.', 'Sie werden mit Mitteln des Landes finanziert.'],
          loesung: 1,
        },
        { typ: 'rf', aussage: 'Bei einer Ausweitung der Zone will die Stadt ausdrücklich auf Geld vom Land verzichten.', loesung: false },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'text',
      titel: 'Schreiben',
      anweisung: 'Schreib einen Leserbrief von mindestens 80 Wörtern. Setze dabei zwei bis drei Nominalphrasen bewusst ein — nicht mehr.',
      aufgabe: 'Der Stadtrat will die verkehrsberuhigte Zone aus dem Artikel in Teil 2 dauerhaft auf weitere Viertel ausweiten. Nimm in einem Leserbrief an die Lokalzeitung Stellung zu diesem Vorhaben.',
      punkte: [
        'Fasse die geplante Maßnahme knapp zusammen.',
        'Wäge Vorteile und Nachteile für Anwohner und Einzelhandel gegeneinander ab.',
        'Formuliere eine begründete Empfehlung an den Stadtrat.',
      ],
      minWoerter: 80,
      beispielLoesung: 'Sehr geehrte Damen und Herren, in Ihrem Artikel berichten Sie über die geplante Ausweitung der verkehrsberuhigten Zone. Als Anwohnerin der Innenstadt begrüße ich dieses Vorhaben grundsätzlich: Seit Einführung der Zone ist die Luft spürbar sauberer, und meine Kinder fahren wieder mit dem Rad zur Schule. Allerdings darf man die Sorgen der angrenzenden Viertel nicht ignorieren, denn wenn sich der Verkehr lediglich verlagert, ist niemandem geholfen. Auch der Einzelhandel braucht Planungssicherheit. Deshalb empfehle ich dem Stadtrat, die Zone erst nach Auswertung des Pilotprojekts auszuweiten und die Anwohner frühzeitig einzubeziehen. Zur Stärkung des Einzelhandels wären zudem günstige Parkplätze am Rand der Innenstadt sinnvoll. Mit freundlichen Grüßen Ana Kovač',
    },
  ],
}
