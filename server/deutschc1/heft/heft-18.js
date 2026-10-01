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
      typ: 'hoeren',
      titel: 'Hören',
      anweisung: 'Du hörst einen Ausschnitt aus einer Podiumsdiskussion. Entscheide, welche Antwort dem Gehörten entspricht bzw. ob die Aussage richtig oder falsch ist. Achte darauf, wer welche Position vertritt.',
      audio: {
        transcript: 'Moderatorin: Herzlich willkommen zu unserer Podiumsdiskussion über verständliche Behördensprache. Herr Professor Albers, Sie haben amtliche Schreiben untersucht. Was macht sie so schwer lesbar?\nProfessor: Meist nicht die Fachwörter, sondern die fehlenden Verbindungen zwischen den Sätzen. In unserer Stichprobe von vierhundert Bescheiden fehlte in jedem dritten ein erkennbarer roter Faden. Da steht eine Forderung, und erst zwei Absätze später folgt die Begründung.\nModeratorin: Frau Demir, Sie leiten ein Bürgeramt. Trifft Sie diese Kritik?\nExpertin: Teilweise. Unsere Schreiben müssen vor Gericht bestehen, deshalb übernehmen wir viele Formulierungen aus dem Gesetz. Dennoch haben wir vor zwei Jahren begonnen, unsere Vorlagen zu überarbeiten. Seitdem ist die Zahl der telefonischen Rückfragen um ein Viertel gesunken.\nProfessor: Das deckt sich mit unseren Befunden. Allerdings genügt es nicht, lange Sätze zu kürzen. Wer nur kürzt, zerreißt oft gerade die Anschlüsse, auf die der Leser angewiesen ist.\nExpertin: Diese Erfahrung haben wir auch gemacht. Unsere ersten Entwürfe bestanden aus lauter kurzen Hauptsätzen und wirkten wie eine Liste von Befehlen. Erst als wir Konnektoren wie deshalb oder trotzdem wieder einfügten, kamen die Texte bei den Bürgern besser an.\nModeratorin: Was kostet eine solche Überarbeitung?\nExpertin: Vor allem Zeit. Für fünfzig Vorlagen haben wir anderthalb Jahre gebraucht, nicht sechs Monate, wie ursprünglich geplant.',
      },
      items: [
        {
          typ: 'mc',
          frage: 'Worin sieht Professor Albers die Hauptursache dafür, dass amtliche Schreiben schwer lesbar sind?',
          optionen: ['in der großen Zahl von Fachwörtern', 'in fehlenden Verbindungen zwischen den Sätzen', 'in Formulierungen, die aus Gesetzen übernommen werden'],
          loesung: 1,
        },
        { typ: 'rf', aussage: 'Seit das Bürgeramt von Frau Demir seine Vorlagen überarbeitet, sind die telefonischen Rückfragen um ein Viertel zurückgegangen.', loesung: true },
        {
          typ: 'mc',
          frage: 'Welche Erfahrung machte das Bürgeramt mit seinen ersten Entwürfen?',
          optionen: ['Die vielen kurzen Hauptsätze wirkten wie eine Reihe von Befehlen.', 'Die Texte hielten einer gerichtlichen Prüfung nicht stand.', 'Die Texte kamen bei den Bürgern auf Anhieb gut an.'],
          loesung: 0,
        },
        { typ: 'rf', aussage: 'Die Überarbeitung der fünfzig Vorlagen war wie geplant nach sechs Monaten abgeschlossen.', loesung: false },
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
    {
      typ: 'sprechen',
      titel: 'Sprechen',
      anweisung: 'Halte einen strukturierten Vortrag (etwa zweieinhalb Minuten). Kündige deine Gliederung an und mache die Übergänge zwischen den Teilen hörbar, sodass deine Zuhörer dem roten Faden mühelos folgen können.',
      aufgabe: 'Halte vor einem Publikum, das du siezt, einen strukturierten Vortrag von etwa zweieinhalb Minuten zum Thema „Massentourismus — Segen oder Fluch für beliebte Reiseziele?“. Kündige deine Gliederung an, mache die Übergänge zwischen den Teilen hörbar und knüpfe im Fazit an deine Einleitung an.',
      punkte: [
        'Führe in das Thema ein und kündige den Aufbau deines Vortrags an.',
        'Stelle dar, was der Tourismus beliebten Reisezielen bringt und womit er sie belastet, und veranschauliche beides jeweils mit einem Beispiel.',
        'Ziehe ein begründetes Fazit und knüpfe dabei an deine Einleitung an.',
      ],
      redemittel: ['Mein Vortrag gliedert sich in drei Teile: …', 'Damit komme ich zum zweiten Punkt.', 'Diesen Vorteilen stehen allerdings … gegenüber.', 'Wie eingangs erwähnt, …', 'Daraus ergibt sich für mich folgendes Fazit: …'],
      maxSekunden: 150,
      beispielLoesung: 'Sehr geehrte Damen und Herren, wer im Sommer durch die Altstadt von Venedig oder Dubrovnik geht, kommt stellenweise kaum noch voran. Ist der Massentourismus für solche Orte ein Segen oder ein Fluch? Mein Vortrag gliedert sich in drei Teile: Zunächst zeige ich, was beliebte Reiseziele dem Tourismus verdanken, danach, welchen Preis sie dafür zahlen, und am Ende ziehe ich ein Fazit.\nBeginnen wir mit den Vorteilen. Der Tourismus schafft Arbeitsplätze, und zwar gerade dort, wo es sonst kaum welche gäbe. In dem Küstenort, aus dem meine Familie stammt, lebt inzwischen fast jeder zweite Haushalt von den Gästen; ohne sie wären die Jüngeren längst weggezogen. Hinzu kommt, dass viele Städte ihre historischen Bauten nur dank dieser Einnahmen erhalten können.\nDamit komme ich zum zweiten Punkt. Diesen Vorteilen stehen allerdings erhebliche Belastungen gegenüber. Am schwersten wiegt die Verdrängung der Einheimischen: Wo Wohnungen an Feriengäste vermietet werden, steigen die Mieten, und der Bäcker an der Ecke weicht dem Andenkenladen. Außerdem leidet die Umwelt unter Müll und Wasserknappheit. So droht der Tourismus genau das zu zerstören, was die Besucher einmal angelockt hat.\nWas folgt daraus? Wie eingangs erwähnt, kommt man in manchen Altstädten kaum noch voran, und davon haben weder die Bewohner noch die Gäste etwas. Ein Fluch ist der Tourismus meines Erachtens dennoch nicht, sofern man ihn steuert: durch Obergrenzen für Ferienwohnungen, durch Gebühren für Tagesgäste und durch Angebote außerhalb der Hochsaison. Daraus ergibt sich für mich folgendes Fazit: Entscheidend ist nicht, ob Gäste kommen, sondern wie viele und zu welchen Bedingungen. Ich danke Ihnen für Ihre Aufmerksamkeit.',
    },
  ],
}
