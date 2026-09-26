// Übungsheft C1 — Lektion 16: Modul Lesen — Überblick
export default {
  lektion: 16,
  titel: 'Übungsheft — Modul Lesen im Überblick',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Bearbeite die Aufgaben rund um die Sprache der Aufgabenstellungen. Achte auf Rektion, feste Verbindungen und Konnektoren und entscheide dich jeweils für die einzige normgerechte Lösung.',
      items: [
        {
          typ: 'luecke',
          text: 'Jede Antwort muss sich mit einer Textstelle {1} lassen. Wer eine Information nicht dem Text {2}, sondern seinem Weltwissen, fällt leicht auf einen Distraktor {3}.',
          bank: ['belegen', 'entnimmt', 'herein', 'zutrifft', 'an'],
          loesungen: { 1: 'belegen', 2: 'entnimmt', 3: 'herein' },
        },
        {
          typ: 'luecke',
          text: '{1} der knappen Bearbeitungszeit empfiehlt es sich, schwierige Aufgaben zunächst nur zu markieren. {2} gezielten Scannings lassen sich Zahlen und Namen dagegen in Sekunden auffinden.',
          bank: ['Angesichts', 'Mittels', 'Trotz'],
          loesungen: { 1: 'Angesichts', 2: 'Mittels' },
        },
        {
          typ: 'luecke',
          text: 'Die Option wiederholt {1} Wörter aus dem Text, {2} verdreht sie deren Aussage. Da es keine Minuspunkte gibt, lohnt es sich, am Ende jede offene Aufgabe {3}.',
          bank: ['zwar', 'doch', 'anzukreuzen', 'ankreuzen', 'weder'],
          loesungen: { 1: 'zwar', 2: 'doch', 3: 'anzukreuzen' },
        },
        {
          typ: 'mc',
          frage: 'Markiere die Textstelle, ___ sich deine Antwort stützt.',
          optionen: ['auf die', 'auf der', 'an die'],
          loesung: 0,
        },
        {
          typ: 'mc',
          frage: 'Welche der folgenden Aussagen ___ auf die Autorin zu?',
          optionen: ['stimmt', 'passt', 'trifft'],
          loesung: 2,
        },
        {
          typ: 'mc',
          frage: 'Im Text heißt es: „Die Kritik ist nicht unberechtigt.“ Welche Aussage gibt diese Stelle sinngemäß wieder?',
          optionen: ['Die Kritik ist völlig unbegründet.', 'Die Kritik hat durchaus ihre Berechtigung.', 'Die Kritik ist rechtlich nicht zulässig.'],
          loesung: 1,
        },
        {
          typ: 'korrektur',
          optionen: ['Die gewählte Antwort entspricht zum Text.', 'Die gewählte Antwort entspricht dem Text.'],
          loesung: 1,
          warum: '**entsprechen** rige dativo directo, sin preposición: *etwas entspricht dem Text*. El *zum* es calco de «corresponder a».',
        },
        {
          typ: 'korrektur',
          optionen: ['Ich weiß nicht, welche Option zutrifft.', 'Ich weiß nicht, welche Option trifft zu.'],
          loesung: 0,
          warum: 'En la subordinada interrogativa indirecta el verbo va al final y el prefijo separable se une a él: *welche Option **zutrifft***.',
        },
        {
          typ: 'zuordnen',
          links: ['Zahlen und Namen gezielt suchen', 'Thema und Aufbau eines Textes erfassen', 'eine Belegstelle Wort für Wort prüfen', 'eine Aussage mit eigenen Worten wiedergeben', 'die Lösungen auf den Antwortbogen schreiben'],
          rechts: ['scannen', 'überfliegen', 'detailliert lesen', 'paraphrasieren', 'übertragen'],
          loesung: {
            'Zahlen und Namen gezielt suchen': 'scannen',
            'Thema und Aufbau eines Textes erfassen': 'überfliegen',
            'eine Belegstelle Wort für Wort prüfen': 'detailliert lesen',
            'eine Aussage mit eigenen Worten wiedergeben': 'paraphrasieren',
            'die Lösungen auf den Antwortbogen schreiben': 'übertragen',
          },
        },
        {
          typ: 'satzbau',
          woerter: ['folgen', 'fast', 'Die', 'dem', 'immer', 'Aufgaben', 'Textverlauf'],
          loesung: 'Die Aufgaben folgen fast immer dem Textverlauf.',
          alt: ['Die Aufgaben folgen dem Textverlauf fast immer.'],
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies den Bericht. Entscheide, welche Antwort dem Text entspricht bzw. ob die Aussage richtig oder falsch ist. Stütze dich ausschließlich auf den Text.',
      textTitel: 'Bericht: Wer zuerst die Aufgaben liest, gewinnt Zeit',
      text: 'Ein Forscherteam aus Leipzig hat untersucht, wie Erwachsene in Sprachprüfungen mit längeren Sachtexten umgehen. Mithilfe von Blickbewegungsmessungen wurde erfasst, welche Abschnitte die 120 Teilnehmenden wie lange betrachteten. Das Ergebnis überrascht nur auf den ersten Blick: Wer den Text von Anfang an Wort für Wort las, erzielte im Durchschnitt deutlich weniger Punkte als jene, die zunächst die Aufgaben überflogen und anschließend gezielt nach den entscheidenden Textstellen suchten. Die gründlichen Leser scheiterten dabei meist nicht an der Sprache, sondern an der Zeit: Fast die Hälfte von ihnen konnte die letzten Aufgaben gar nicht mehr bearbeiten.\nStudienleiterin Małgorzata Weiß warnt allerdings davor, daraus ein Patentrezept abzuleiten. Wer nur noch nach Schlüsselwörtern suche, falle umso leichter auf Distraktoren herein, die genau diese Wörter aufgriffen, deren Aussage aber verdrehten. Entscheidend sei der Wechsel der Techniken: erst ein rascher Überblick, dann das genaue Lesen der Belegstelle. Auffällig war zudem, dass Teilnehmende mit geringerem Wortschatz vom strategischen Vorgehen stärker profitierten als sprachlich fortgeschrittene. Strategie, so Weiß, könne fehlende Sprachkenntnisse zwar nicht ersetzen, wohl aber verhindern, dass vorhandene verschenkt würden.',
      items: [
        { typ: 'rf', aussage: 'Die Teilnehmenden, die von Anfang an Wort für Wort lasen, scheiterten vor allem an sprachlichen Schwierigkeiten.', loesung: false },
        {
          typ: 'mc',
          frage: 'Wovor warnt Małgorzata Weiß?',
          optionen: ['davor, Texte in der Prüfung überhaupt noch vollständig zu lesen', 'vor einem Vorgehen, das sich allein auf die Suche nach Schlüsselwörtern stützt', 'vor Aufgaben, die nicht der Reihenfolge des Textes folgen'],
          loesung: 1,
        },
        {
          typ: 'mc',
          frage: 'Was trifft laut Bericht auf Teilnehmende mit geringerem Wortschatz zu?',
          optionen: ['Sie profitierten vom strategischen Vorgehen stärker als sprachlich Fortgeschrittene.', 'Sie konnten fehlende Sprachkenntnisse durch Strategie vollständig ausgleichen.', 'Sie lasen die Texte häufiger Wort für Wort als die übrigen Teilnehmenden.'],
          loesung: 0,
        },
        { typ: 'rf', aussage: 'Fast die Hälfte der gründlichen Leser kam nicht mehr bis zu den letzten Aufgaben.', loesung: true },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'text',
      titel: 'Schreiben',
      anweisung: 'Verfasse eine Stellungnahme (mindestens 80 Wörter). Gib fremde Positionen sinngemäß wieder, statt sie wörtlich zu übernehmen, und verknüpfe deine Argumente mit passenden Konnektoren.',
      aufgabe: 'In einem Onlineforum zur Prüfungsvorbereitung wird die These diskutiert: „Im Modul Lesen entscheidet die Strategie, nicht der Wortschatz.“ Schreibe einen Forumsbeitrag, in dem du Stellung nimmst.',
      punkte: [
        'Gib die These und ihren Hintergrund kurz mit eigenen Worten wieder.',
        'Wäge Argumente für beide Seiten ab und beziehe dich dabei auf die Ergebnisse des Berichts.',
        'Formuliere eine begründete eigene Position und einen konkreten Rat für Prüfungskandidaten.',
      ],
      minWoerter: 80,
      beispielLoesung: 'In diesem Forum wird behauptet, im Modul Lesen komme es vor allem auf die richtige Strategie an, während der Wortschatz eine untergeordnete Rolle spiele. Für diese These spricht eine Studie aus Leipzig: Teilnehmende, die zunächst die Aufgaben überflogen und dann gezielt nach Belegstellen suchten, schnitten deutlich besser ab als diejenigen, die den Text Wort für Wort lasen. Dennoch halte ich die These in ihrer Zuspitzung für problematisch. Wer eine Belegstelle zwar findet, sie aber sprachlich nicht versteht, fällt trotz aller Technik auf Distraktoren herein. Meiner Ansicht nach ergänzen sich beide Faktoren: Strategie verhindert, dass vorhandene Kenntnisse verschenkt werden, ersetzt sie aber nicht. Prüfungskandidaten würde ich daher raten, ihren Wortschatz kontinuierlich auszubauen und zugleich jeden Übungstest mit laufender Uhr zu bearbeiten.',
    },
  ],
}
