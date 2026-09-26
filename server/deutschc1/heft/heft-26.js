// Übungsheft C1 — Lektion 26: Modul Sprechen — Überblick
export default {
  lektion: 26,
  titel: 'Übungsheft — Modul Sprechen im Überblick',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Bearbeite die Aufgaben zur Sprache der mündlichen Prüfung. Achte auf feste Verbindungen, reflexive Verben, Relativsätze beim Umschreiben und auf die Redemittel, mit denen du Zeit gewinnst, dich korrigierst und auf deinen Partner eingehst.',
      items: [
        {
          typ: 'luecke',
          text: 'Mitten im Vortrag {1} die Kandidatin ins Stocken, fing sich aber rasch wieder und {2} das fehlende Wort geschickt.',
          bank: ['geriet', 'fiel', 'umschrieb', 'versprach'],
          loesungen: { 1: 'geriet', 2: 'umschrieb' },
        },
        {
          typ: 'luecke',
          text: 'Entschuldigung, ich habe {1} versprochen — ich {2} natürlich den Staat, nicht die Stadt.',
          bank: ['mich', 'mir', 'meinte', 'glaubte'],
          loesungen: { 1: 'mich', 2: 'meinte' },
        },
        {
          typ: 'luecke',
          text: 'Mir fällt das genaue Wort gerade nicht ein — ich meine das Gerät, {1} man Kaffeebohnen zerkleinert, also eine kleine Maschine, {2} Mahlwerk man auf fein oder grob einstellen kann.',
          bank: ['mit dem', 'mit der', 'deren', 'dessen'],
          loesungen: { 1: 'mit dem', 2: 'deren' },
        },
        {
          typ: 'mc',
          frage: 'Welche Formulierung eignet sich, um nach einer schwierigen Nachfrage Zeit zu gewinnen?',
          optionen: [
            'Könnten Sie mir bitte das richtige Wort dafür nennen?',
            'Das ist eine interessante Frage — da muss ich kurz überlegen.',
            'Entschuldigung, ich habe mich versprochen.',
          ],
          loesung: 1,
        },
        {
          typ: 'mc',
          frage: 'In der Diskussion antwortet dein Partner nur knapp und verstummt dann. Welche Reaktion zeigt am ehesten Interaktionskompetenz?',
          optionen: [
            'Du ergreifst das Wort und führst deinen eigenen Standpunkt ausführlich weiter aus.',
            'Du wartest schweigend, bis er von sich aus wieder etwas beiträgt.',
            'Du stellst ihm eine konkrete Frage, die an seinen letzten Redebeitrag anknüpft.',
          ],
          loesung: 2,
        },
        {
          typ: 'korrektur',
          optionen: ['Ich habe mich versprochen, pünktlich zu sein.', 'Ich habe versprochen, pünktlich zu sein.'],
          loesung: 1,
          warum: '«Prometer» es **versprechen** sin reflexivo. **sich versprechen** significa equivocarse al hablar (un lapsus), y no admite un infinitivo con *zu*.',
        },
        {
          typ: 'korrektur',
          optionen: ['Im Gespräch gingen die beiden Kandidaten kaum miteinander ein.', 'Im Gespräch gingen die beiden Kandidaten kaum aufeinander ein.'],
          loesung: 1,
          warum: 'La construcción es **auf jemanden eingehen** (responder a lo que dice el otro); en reciprocidad: **aufeinander eingehen**.',
        },
        {
          typ: 'korrektur',
          optionen: ['Sie gibt die mündliche Prüfung im Juni.', 'Sie legt die mündliche Prüfung im Juni ab.'],
          loesung: 1,
          warum: '«Hacer/presentarse a un examen» es **eine Prüfung ablegen** (o, más coloquial, *machen*). *eine Prüfung geben* es un calco del español y no existe en ese sentido.',
        },
        {
          typ: 'zuordnen',
          links: ['einen Vortrag', 'sich Stichwörter', 'die Vorbereitungszeit', 'einen Redebeitrag', 'auf Nachfragen'],
          rechts: ['halten', 'notieren', 'nutzen', 'leisten', 'reagieren'],
          loesung: {
            'einen Vortrag': 'halten',
            'sich Stichwörter': 'notieren',
            'die Vorbereitungszeit': 'nutzen',
            'einen Redebeitrag': 'leisten',
            'auf Nachfragen': 'reagieren',
          },
        },
        {
          typ: 'satzbau',
          woerter: ['geht', 'Genauer', 'Kosten', 'es', 'gesagt', 'um', 'mir', 'die'],
          loesung: 'Genauer gesagt geht es mir um die Kosten.',
          alt: ['Genauer gesagt, es geht mir um die Kosten.', 'Es geht mir, genauer gesagt, um die Kosten.'],
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies den Bericht über die Erfahrungen einer Prüferin und entscheide, welche Antwort dem Text entspricht bzw. ob die Aussage richtig oder falsch ist.',
      textTitel: 'Bericht: Was in der mündlichen Prüfung wirklich zählt',
      text: 'Seit elf Jahren nimmt Henrike Olsen mündliche Prüfungen ab, und die häufigste Sorge der Kandidatinnen und Kandidaten kennt sie genau: einen stärkeren Partner zu erwischen. „Diese Angst ist unbegründet“, sagt sie. „Wir vergleichen niemanden mit seinem Gegenüber, sondern jeden mit den Kriterien.“ Eher schade sich selbst, wer den Partner übertrumpfen wolle und ihm kaum Raum lasse; in der Diskussion werde schließlich gerade bewertet, ob man aufeinander eingehe.\nAuch Versprecher hält Olsen für weit weniger gravierend, als viele glauben. Wer sich korrigiere, zeige ja, dass er die Regel kenne. Problematisch werde es erst, wenn jemand nach jedem Fehler ins Stocken gerate und den Satz dreimal neu beginne — dann leide die Flüssigkeit, und die Gliederung des Vortrags gehe verloren.\nEinen Rat gibt sie allen mit auf den Weg: die Vorbereitungszeit nicht zum Ausformulieren zu nutzen. Wer ganze Sätze notiere, lese sie am Ende nur ab und verliere den Blickkontakt zu den Prüfenden. Ein paar Stichwörter genügten vollauf. Und wenn einem ein Wort fehle? „Umschreiben, ohne zu zögern. Eine gelungene Umschreibung ist oft eindrucksvoller als das Wort selbst.“',
      items: [
        {
          typ: 'mc',
          frage: 'Wie beurteilt Olsen die Sorge, einen stärkeren Partner zu haben?',
          optionen: [
            'Sie hält sie für berechtigt, weil der stärkere Partner das Niveau der Diskussion vorgibt.',
            'Sie hält sie für unbegründet, da jeder für sich an den Kriterien gemessen wird.',
            'Sie empfiehlt, einen stärkeren Partner durch besonders lange eigene Beiträge auszugleichen.',
          ],
          loesung: 1,
        },
        { typ: 'rf', aussage: 'Laut Olsen wirkt sich jede Selbstkorrektur negativ auf die Bewertung aus.', loesung: false },
        {
          typ: 'mc',
          frage: 'Wann wird ein Versprecher nach Olsens Darstellung zum Problem?',
          optionen: [
            'Wenn er ein grammatisches Thema betrifft, das auf dem C1-Niveau vorausgesetzt wird.',
            'Wenn sich der Kandidat dafür ausführlich bei den Prüfenden entschuldigt.',
            'Wenn der Kandidat nach Fehlern immer wieder stockt und neu ansetzt.',
          ],
          loesung: 2,
        },
        { typ: 'rf', aussage: 'Olsen rät, in der Vorbereitungszeit lediglich einige Stichwörter zu notieren.', loesung: true },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'text',
      titel: 'Schreiben',
      anweisung: 'Verfasse eine Stellungnahme (mindestens 80 Wörter). Gliedere deinen Text erkennbar, verknüpfe die Argumente mit passenden Konnektoren und schließe mit einem begründeten Fazit.',
      aufgabe: 'In einem Onlineforum zur Prüfungsvorbereitung wird darüber diskutiert, ob die mündliche Prüfung besser als Einzelprüfung statt als Paarprüfung abgelegt werden sollte. Nimm dazu Stellung.',
      punkte: [
        'Erläutere, welche Vorteile die Paarprüfung für die Kandidaten bietet.',
        'Gehe auf mögliche Nachteile oder Risiken dieses Formats ein.',
        'Formuliere deine eigene Position und begründe sie.',
      ],
      minWoerter: 80,
      beispielLoesung: 'Für die Paarprüfung spricht vor allem, dass sie einer echten Gesprächssituation deutlich näherkommt als ein Einzelgespräch mit den Prüfenden. Wer aufeinander eingehen, nachfragen und das Wort abgeben muss, zeigt eine Kompetenz, die im Alltag unverzichtbar ist. Hinzu kommt, dass sich viele Kandidaten in Gegenwart eines Partners weniger beobachtet fühlen.\nAllerdings birgt das Format auch Risiken. Ein sehr dominanter oder sehr stiller Partner kann den Gesprächsverlauf erschweren, und manche geraten gerade dann ins Stocken, wenn sie sich mit anderen vergleichen.\nNach meiner Einschätzung überwiegen dennoch die Vorteile, zumal jeder Kandidat einzeln an den Kriterien gemessen wird. Wer die Paarprüfung als gemeinsame Aufgabe versteht, kann von ihr nur profitieren.',
    },
  ],
}
