// Übungsheft C1 — Lektion 11: Zweiteilige Konnektoren
export default {
  lektion: 11,
  titel: 'Übungsheft — Zweiteilige Konnektoren',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Bearbeite die Aufgaben zu den zweiteiligen Konnektoren. Achte auf den festen Partner jedes Paares, auf die Verbkongruenz und auf die Wortstellung in beiden Teilsätzen.',
      items: [
        {
          typ: 'luecke',
          text: 'Weder der Antrag {1} die Begründung überzeugt die Kommission. Je länger sich die Verhandlungen hinziehen, {2} geringer werden die Aussichten auf eine Einigung.',
          bank: ['noch', 'desto', 'als auch', 'sondern'],
          loesungen: { 1: 'noch', 2: 'desto' },
        },
        {
          typ: 'luecke',
          text: 'Sowohl das Land als auch die Kommunen {1} ihre Unterstützung zugesagt. Entweder die Verlegerin oder die beiden Lektoren {2} die Schlusskorrektur.',
          bank: ['haben', 'hat', 'übernehmen', 'übernimmt'],
          loesungen: { 1: 'haben', 2: 'übernehmen' },
          warum: 'Con *sowohl … als auch* el verbo va en **plural**; el singular solo se admite cuando ambos sujetos están en singular, y aquí *die Kommunen* es plural. Con *entweder … oder* decide el sujeto más cercano: *die beiden Lektoren* → *übernehmen*.',
        },
        {
          typ: 'luecke',
          text: 'Die Börsen reagierten auf die Nachricht {1} euphorisch, bald panisch. Sie nahm die Einladung an — {2} aus Neugier, halb aus Pflichtgefühl.',
          bank: ['bald', 'halb', 'teils', 'mal'],
          loesungen: { 1: 'bald', 2: 'halb' },
        },
        {
          typ: 'mc',
          frage: 'Nicht nur die Miete, sondern auch die Nebenkosten ___ im kommenden Jahr.',
          optionen: ['steigt', 'steigen', 'steige'],
          loesung: 1,
          warum: 'Con *nicht nur … sondern auch* el verbo concuerda con el sujeto **más cercano**: *die Nebenkosten* → *steigen*. El primer sujeto (*die Miete*) no decide.',
        },
        {
          typ: 'mc',
          frage: 'Welcher Satz ist korrekt gebaut?',
          optionen: ['Nicht nur ist die Lage ernst, sondern auch es fehlt an Zeit.', 'Nicht nur die Lage ernst ist, sondern es fehlt auch an Zeit.', 'Nicht nur ist die Lage ernst, sondern es fehlt auch an Zeit.'],
          loesung: 2,
        },
        {
          typ: 'mc',
          frage: 'Welches Paar passt am besten in einen Zeitungskommentar? „Die Regierung wirkte in der Krise ___ entschlossen, ___ ratlos.“',
          optionen: ['mal … mal', 'bald … bald', 'entweder … oder'],
          loesung: 1,
        },
        {
          typ: 'korrektur',
          optionen: ['Weder der Bürgermeister noch sein Stellvertreter hat sich nicht dazu geäußert.', 'Weder der Bürgermeister noch sein Stellvertreter hat sich dazu geäußert.'],
          loesung: 1,
          warum: '*Weder … noch* ya es negativo: un *nicht* o *kein* adicional sobra y convierte la frase en una doble negación.',
        },
        {
          typ: 'korrektur',
          optionen: ['Zwar ist das Konzept überzeugend, aber die Finanzierung fehlt.', 'Zwar das Konzept ist überzeugend, aber die Finanzierung fehlt.'],
          loesung: 0,
          warum: '*Zwar* en posición 1 cuenta como elemento del Vorfeld: el verbo va **justo detrás** (*ist das Konzept*).',
        },
        {
          typ: 'korrektur',
          optionen: ['Je früher wir planen, desto weniger Probleme wir haben.', 'Je früher wir planen, desto weniger Probleme haben wir.'],
          loesung: 1,
          warum: '*Je* abre una subordinada (verbo al final), pero *desto* + comparativo ocupa la posición 1 de la principal: después viene **el verbo** (*haben wir*).',
        },
        {
          typ: 'satzbau',
          woerter: ['informiert', 'er', 'noch', 'Weder', 'zugestimmt', 'war', 'hatte', 'er'],
          loesung: 'Weder war er informiert, noch hatte er zugestimmt.',
          alt: ['Weder hatte er zugestimmt, noch war er informiert.'],
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies die Rezension. Entscheide, welche Antwort dem Text entspricht bzw. ob die Aussage richtig oder falsch ist.',
      textTitel: 'Rezension: „Das Haus am Fluss“ von Katrin Albers',
      text: 'Mit ihrem zweiten Roman legt Katrin Albers ein Buch vor, das sowohl Bewunderung als auch Ratlosigkeit hinterlässt. Erzählt wird die Geschichte einer Familie, die über drei Generationen in einem Dorf an der Oder lebt. Nicht nur gelingt es der Autorin, die Flusslandschaft in eindringlichen Bildern heraufzubeschwören, sondern sie findet auch für jede Figur einen eigenen Ton. Die Großmutter spricht bald zärtlich, bald schneidend; der Enkel schwankt zwischen Trotz und Heimweh.\nJe tiefer man in die Familiengeschichte eintaucht, desto deutlicher zeigt sich allerdings die Schwäche des Romans: Weder werden die zahlreichen Andeutungen aufgelöst, noch erfährt man, warum der Vater einst spurlos verschwand. Zwar mag man der Autorin zugutehalten, dass sie bewusst Leerstellen lässt, aber auf fast vierhundert Seiten wirkt diese Zurückhaltung eher wie Unentschlossenheit. Man legt das Buch halb bewegt, halb verärgert aus der Hand.\nStärken und Schwächen halten sich somit die Waage. Wer sprachlich anspruchsvolle Prosa schätzt, wird von diesem Roman entweder begeistert sein oder ihn nach hundert Seiten beiseitelegen — eine dritte Möglichkeit scheint es kaum zu geben.',
      items: [
        { typ: 'rf', aussage: 'Die Rezension lobt vor allem, wie die Familiengeschichte am Ende aufgelöst wird.', loesung: false },
        {
          typ: 'mc',
          frage: 'Was hebt die Rezension als besondere Stärke des Romans hervor?',
          optionen: ['die spannende, überraschungsreiche Handlung', 'die bildhafte Landschaftsdarstellung und die individuelle Stimme der Figuren', 'den knappen, auf das Wesentliche reduzierten Umfang'],
          loesung: 1,
        },
        {
          typ: 'mc',
          frage: 'Wie bewertet die Rezension die Leerstellen im Roman letztlich?',
          optionen: ['als gelungenes Stilmittel, das die Leserschaft zum Mitdenken anregt', 'als unvermeidliche Folge der Erzählung über drei Generationen', 'eher als Ausdruck von Unentschlossenheit'],
          loesung: 2,
        },
        { typ: 'rf', aussage: 'Der Rezension zufolge dürfte der Roman die Leserschaft eher polarisieren als gleichgültig lassen.', loesung: true },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'text',
      titel: 'Schreiben',
      anweisung: 'Verfasse eine Zusammenfassung mit Kommentar (mindestens 80 Wörter). Verwende mindestens zwei verschiedene zweiteilige Konnektoren, einen davon mit stilistischer Inversion.',
      aufgabe: 'Für den Blog deines Lesekreises sollst du die Rezension zu „Das Haus am Fluss“ zusammenfassen und kommentieren, ob sie dich neugierig auf den Roman macht.',
      punkte: [
        'Gib Gegenstand und Gesamturteil der Rezension in wenigen Sätzen wieder.',
        'Stelle die genannten Stärken und Schwächen einander gegenüber.',
        'Nimm Stellung: Würdest du den Roman lesen? Begründe deine Entscheidung.',
      ],
      minWoerter: 80,
      beispielLoesung: 'Die Rezension bespricht Katrin Albers’ zweiten Roman, der die Geschichte einer Familie über drei Generationen in einem Dorf an der Oder erzählt. Das Urteil fällt gemischt aus: Stärken und Schwächen halten sich die Waage.\nGelobt werden sowohl die eindringlichen Landschaftsbilder als auch die eigenständige Stimme jeder Figur. Kritisiert wird hingegen, dass die zahlreichen Andeutungen unaufgelöst bleiben, was auf fast vierhundert Seiten unentschlossen wirke.\nMich macht die Besprechung durchaus neugierig. Nicht nur schätze ich Romane, die sprachlich anspruchsvoll sind, sondern ich habe auch nichts gegen offene Enden — im Gegenteil. Je weniger ein Buch erklärt, desto länger beschäftigt es mich. Ich werde den Roman daher lesen und mir selbst ein Urteil bilden.',
    },
  ],
}
