// Übungsheft C1 — Lektion 18: Lesen: Satzeinsetzung (Teil 3)
export default {
  lektion: 18,
  titel: 'Übungsheft — Die Satzeinsetzung',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Prüfe bei jeder Aufgabe die Kohäsionssignale — Pronomen, Pronominaladverbien, Konnektoren, Wiederaufnahme — und entscheide, welche Lösung an den Kontext grammatisch und logisch anschließt.',
      items: [
        {
          typ: 'luecke',
          text: 'Die Stadt hat ein neues Parkkonzept beschlossen. {1} sollen vor allem die Anwohner profitieren. Kritiker weisen allerdings {2} hin, dass die Innenstadt für Besucher an Attraktivität verlieren könnte.',
          bank: ['Davon', 'darauf', 'Dafür', 'daran'],
          loesungen: { 1: 'Davon', 2: 'darauf' },
        },
        {
          typ: 'luecke',
          text: 'Die Ganztagsschule verspricht mehr individuelle Förderung. {1} fehlt es vielerorts an qualifiziertem Personal. {2} bleiben zahlreiche Angebote hinter den Erwartungen der Eltern zurück.',
          bank: ['Allerdings', 'Folglich', 'Andernfalls', 'Zuvor'],
          loesungen: { 1: 'Allerdings', 2: 'Folglich' },
        },
        {
          typ: 'luecke',
          text: 'Ein herausgelöster Satz {1} häufig eine bestimmte Erwähnung im Vorsatz voraus. Das Pronomen „sie“ etwa {2} auf ein feminines oder plurales Bezugswort.',
          bank: ['setzt', 'verweist', 'knüpft', 'schiebt'],
          loesungen: { 1: 'setzt', 2: 'verweist' },
        },
        {
          typ: 'mc',
          frage: 'Vorsatz: „Der Stadtrat hat den Bau einer neuen Umgehungsstraße beschlossen.“ Welcher Anschlusssatz ist kohäsiv stimmig?',
          optionen: ['Es soll die Innenstadt vom Durchgangsverkehr entlasten.', 'Diese sollen die Innenstadt vom Durchgangsverkehr entlasten.', 'Sie soll die Innenstadt vom Durchgangsverkehr entlasten.'],
          loesung: 2,
        },
        {
          typ: 'mc',
          frage: 'Vorsatz: „Seit einem Jahr setzt die Klinik auf ein digitales Terminsystem.“ Welcher Satz führt die Themenprogression stimmig fort?',
          optionen: ['Auch die Cafeteria wurde im vergangenen Jahr modernisiert.', 'Dieses System hat die Wartezeiten spürbar verkürzt.', 'Ein System hat die Wartezeiten spürbar verkürzt.'],
          loesung: 1,
        },
        {
          typ: 'mc',
          frage: 'Die sichtbaren grammatischen Verbindungen zwischen Sätzen — Pronomen, Artikel, Konnektoren — bezeichnet man als ___.',
          optionen: ['Kohäsion', 'Kohärenz', 'Themenprogression'],
          loesung: 0,
        },
        {
          typ: 'korrektur',
          optionen: ['Die Kritiker bemängeln die hohen Kosten. Zudem bezweifeln sie den ökologischen Nutzen.', 'Die Kritiker bemängeln die hohen Kosten. Zudem bezweifeln den ökologischen Nutzen.'],
          loesung: 0,
          warum: 'El alemán no omite el pronombre sujeto como el español («Además dudan…»): hace falta **sie**, que además es la señal de cohesión que remite a *die Kritiker*.',
        },
        {
          typ: 'korrektur',
          optionen: ['Der zweite Absatz knüpft mit dem vorangehenden Gedanken an.', 'Der zweite Absatz knüpft an den vorangehenden Gedanken an.'],
          loesung: 1,
          warum: 'La rección es **anknüpfen an** + acusativo; «enlazar *con*» induce el calco *mit*.',
        },
        {
          typ: 'zuordnen',
          links: ['Dennoch …', 'Deshalb …', 'Dazu zählt …', 'Dort …', 'Beide Vorwürfe …'],
          rechts: ['davor ein Sachverhalt, der eigentlich dagegen spricht', 'davor eine Ursache oder ein Grund', 'davor eine Kategorie, die Beispiele zulässt', 'davor die Nennung eines Ortes oder einer Einrichtung', 'davor genau zwei Kritikpunkte'],
          loesung: {
            'Dennoch …': 'davor ein Sachverhalt, der eigentlich dagegen spricht',
            'Deshalb …': 'davor eine Ursache oder ein Grund',
            'Dazu zählt …': 'davor eine Kategorie, die Beispiele zulässt',
            'Dort …': 'davor die Nennung eines Ortes oder einer Einrichtung',
            'Beide Vorwürfe …': 'davor genau zwei Kritikpunkte',
          },
        },
        {
          typ: 'satzbau',
          woerter: ['verweist', 'Das', 'auf', 'den', 'Pronomen', 'vorangehenden', 'Satz'],
          loesung: 'Das Pronomen verweist auf den vorangehenden Satz.',
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies das Essayfragment. Entscheide, welche Antwort dem Text entspricht bzw. ob die Aussage richtig oder falsch ist. Achte darauf, worauf sich Verweise im Text beziehen.',
      textTitel: 'Essayfragment: Vom Verlust des roten Fadens',
      text: 'Wer heute liest, liest in Fragmenten. Nachrichten erreichen uns als Schlagzeilen, Argumente als Kurzbeiträge, die kaum mehr als zwei Sätze umfassen. Man könnte meinen, das sei lediglich eine Frage der Länge. Doch mit der Länge verschwindet etwas Grundsätzlicheres: der Zusammenhang. Ein Text, der über mehrere Absätze eine These entwickelt, setzt voraus, dass sein Leser sich erinnert — an das Bezugswort, auf das ein Pronomen verweist, an den Einwand, den ein „dennoch“ aufgreift. Diese Fäden sind unscheinbar, aber sie tragen das Denken.\nDie Sprachwissenschaftlerin Johanna Brecht hat in diesem Zusammenhang von einer „Entwöhnung vom Anschluss“ gesprochen: Wer nur noch isolierte Sätze konsumiere, verlerne, Übergänge überhaupt wahrzunehmen. Ich halte diese Diagnose für zu pessimistisch. Gerade junge Leser bewegen sich virtuos zwischen Formaten; sie springen, verknüpfen, vergleichen. Was ihnen fehlt, ist nicht die Fähigkeit, sondern die Übung, einem Gedanken länger zu folgen, als es bequem ist. Das freilich lässt sich trainieren — mit Texten, die ihren roten Faden nicht verstecken, sondern ihn dem Leser zumuten.',
      items: [
        { typ: 'rf', aussage: 'Der Verfasser führt den Verlust des Zusammenhangs allein auf die geringere Länge der Texte zurück.', loesung: false },
        {
          typ: 'mc',
          frage: 'Welche Haltung nimmt der Verfasser gegenüber Johanna Brecht ein?',
          optionen: ['Er hält ihre Einschätzung für zu düster und sieht eher ein Übungsdefizit.', 'Er teilt ihre Diagnose uneingeschränkt.', 'Er bestreitet, dass sich das Leseverhalten überhaupt verändert hat.'],
          loesung: 0,
        },
        {
          typ: 'mc',
          frage: 'Worauf bezieht sich im ersten Absatz die Wendung „Diese Fäden“?',
          optionen: ['auf die Schlagzeilen und Kurzbeiträge', 'auf die Thesen, die ein Text über mehrere Absätze entwickelt', 'auf die Verweise zwischen Sätzen, etwa durch Pronomen und Konnektoren'],
          loesung: 2,
        },
        { typ: 'rf', aussage: 'Nach Ansicht des Verfassers lässt sich die Fähigkeit, längeren Gedankengängen zu folgen, durch Übung stärken.', loesung: true },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'text',
      titel: 'Schreiben',
      anweisung: 'Verfasse eine Textzusammenfassung mit Kommentar (mindestens 80 Wörter). Achte auf stimmige Übergänge: Verknüpfe deine Sätze durch Konnektoren, Pronomen und Wiederaufnahmen.',
      aufgabe: 'Fasse das Essayfragment „Vom Verlust des roten Fadens“ für einen Lesekreis zusammen und nimm anschließend Stellung.',
      punkte: [
        'Gib die Ausgangsthese des Essays und die Position von Johanna Brecht mit eigenen Worten wieder.',
        'Stelle die Gegenposition des Verfassers dar, ohne seine Formulierungen wörtlich zu übernehmen.',
        'Kommentiere die Frage auf der Grundlage deiner eigenen Leseerfahrung.',
      ],
      minWoerter: 80,
      beispielLoesung: 'Das Essayfragment befasst sich mit der Frage, wie sich das Lesen in Zeiten kurzer Textformate verändert. Der Verfasser geht davon aus, dass mit der Länge der Texte auch der Zusammenhang verloren gehe, also jene unscheinbaren Verweise, die Sätze miteinander verbinden. Die Sprachwissenschaftlerin Johanna Brecht verschärft diese Beobachtung: Wer nur noch einzelne Sätze lese, verliere die Fähigkeit, Übergänge wahrzunehmen. Dieser Einschätzung widerspricht der Verfasser jedoch. Seiner Ansicht nach fehle jungen Lesern nicht die Kompetenz, sondern lediglich die Übung, längeren Gedankengängen zu folgen.\nIch teile diese Sichtweise weitgehend. Auch mir fällt es nach einem Tag voller Kurznachrichten schwer, mich auf einen langen Artikel einzulassen. Nach einigen Seiten stellt sich die Konzentration jedoch meist wieder ein. Gerade deshalb halte ich regelmäßiges Lesen längerer Texte für unverzichtbar.',
    },
  ],
}
