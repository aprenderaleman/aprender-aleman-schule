// Übungsheft B1 — Lektion 41: Umwelt & Natur
export default {
  lektion: 41,
  titel: 'Übungsheft — Umwelt & Natur',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Wetter, Müll und Natur: Wähle das richtige Wort oder die richtige Form.',
      items: [
        { typ: 'mc', frage: 'Im August ___ es in Sevilla oft sehr heiß.', optionen: ['macht', 'ist', 'hat'], loesung: 1 },
        { typ: 'mc', frage: 'Kannst du bitte das Fenster zumachen? ___ ist kalt.', optionen: ['Ich', 'Mich', 'Mir'], loesung: 2 },
        {
          typ: 'mc',
          frage: 'Wir bleiben heute zu Hause, ___ es den ganzen Tag regnet.',
          optionen: ['weil', 'denn', 'deshalb'],
          loesung: 0,
        },
        {
          typ: 'luecke',
          text: 'Papier kommt in {1} blaue Tonne. Die leeren Flaschen stehen schon neben {2} Tür. Am Sonntag fahren wir an {3} See.',
          bank: ['die', 'der', 'dem', 'den', 'das'],
          loesungen: { 1: 'die', 2: 'der', 3: 'den' },
        },
        {
          typ: 'luecke',
          text: 'Vergiss nicht, die Flaschen zum Automaten {1}. {2} bekommst du das Pfand nicht zurück.',
          bank: ['zurückzubringen', 'zurückbringen', 'Sonst', 'Deshalb', 'Trotzdem'],
          loesungen: { 1: 'zurückzubringen', 2: 'Sonst' },
        },
        {
          typ: 'luecke',
          text: 'Leider regnet es heute. Wenn das Wetter besser {1}, {2} wir einen Ausflug in den Wald machen.',
          bank: ['wäre', 'war', 'würden', 'hätten'],
          loesungen: { 1: 'wäre', 2: 'würden' },
        },
        {
          typ: 'zuordnen',
          links: ['das Pfand', 'die Jahreszeit', 'der Ausflug', 'wandern', 'die Umwelt'],
          rechts: [
            'Geld, das man für eine leere Flasche zurückbekommt',
            'Frühling, Sommer, Herbst oder Winter',
            'eine kleine Reise für einen Tag',
            'lange zu Fuß in der Natur gehen',
            'Luft, Wasser, Pflanzen und Tiere um uns herum',
          ],
          loesung: {
            'das Pfand': 'Geld, das man für eine leere Flasche zurückbekommt',
            'die Jahreszeit': 'Frühling, Sommer, Herbst oder Winter',
            'der Ausflug': 'eine kleine Reise für einen Tag',
            'wandern': 'lange zu Fuß in der Natur gehen',
            'die Umwelt': 'Luft, Wasser, Pflanzen und Tiere um uns herum',
          },
        },
        {
          typ: 'satzbau',
          woerter: ['getrennt', 'wird', 'In', 'Müll', 'der', 'Deutschland'],
          loesung: 'In Deutschland wird der Müll getrennt.',
        },
        {
          typ: 'korrektur',
          optionen: ['Heute macht es sehr heiß.', 'Heute ist es sehr heiß.'],
          loesung: 1,
          warum: 'El calor no se «hace» en alemán: **es ist heiß / kalt**. *Es macht heiß* es un calco del español.',
        },
        {
          typ: 'korrektur',
          optionen: ['Wir sind drei Stunden im Wald gewandert.', 'Wir haben drei Stunden im Wald gewandert.'],
          loesung: 0,
          warum: '**wandern** es un verbo de movimiento → Perfekt con **sein**: *wir sind gewandert*.',
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies den Beitrag im Forum. Löse dann die vier Aufgaben.',
      textTitel: 'Forum „Neu in Deutschland“ — Beitrag von Kenji',
      text: 'Als ich vor einem Jahr nach Deutschland gekommen bin, war die Mülltrennung für mich sehr kompliziert. Bei uns zu Hause kam fast alles in eine Tonne. Hier gibt es vier: Papier, Bioabfall, Verpackungen und Restmüll. Glas muss man sogar selbst zum Container bringen. Am Anfang habe ich oft Fehler gemacht, aber meine Nachbarin hat mir alles geduldig erklärt. Heute finde ich das System gut, weil es für die Umwelt wichtig ist. Nur das Pfand ärgert mich manchmal: Ich sammle die Flaschen in der Küche, und bald habe ich dort keinen Platz mehr. Mein Tipp für alle Neuen: Bringt die Flaschen jede Woche zum Automaten im Supermarkt. Das Geld bekommt ihr dann an der Kasse zurück.',
      items: [
        { typ: 'rf', aussage: 'In Kenjis Heimat hat man den Müll genauso getrennt wie in Deutschland.', loesung: false },
        {
          typ: 'mc',
          frage: 'Wer hat Kenji am Anfang geholfen?',
          optionen: ['ein Kollege', 'seine Nachbarin', 'der Hausmeister'],
          loesung: 1,
        },
        { typ: 'rf', aussage: 'Kenji findet die Mülltrennung heute sinnvoll.', loesung: true },
        {
          typ: 'mc',
          frage: 'Was stört Kenji am Pfand?',
          optionen: ['Die Flaschen brauchen viel Platz in der Küche.', 'Er bekommt zu wenig Geld zurück.', 'Der Automat ist oft kaputt.'],
          loesung: 0,
        },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'text',
      titel: 'Schreiben',
      anweisung: 'Schreib eine E-Mail mit mindestens 40 Wörtern. Denk an Anrede und Gruß.',
      aufgabe: 'Deine Freundin Hanna möchte dich im Frühling besuchen. Sie fragt: „Wie ist das Wetter bei euch, und was können wir draußen machen?“ Schreib ihr eine E-Mail.',
      punkte: [
        'Beschreib das Wetter im Frühling bei dir.',
        'Schlag einen Ausflug in die Natur vor.',
        'Schreib, was sie mitbringen soll.',
      ],
      minWoerter: 40,
      beispielLoesung: 'Liebe Hanna,\nich freue mich sehr auf deinen Besuch! Im Frühling ist das Wetter bei uns meistens schön: Die Sonne scheint, und es ist schon warm, aber nicht zu heiß. Wir könnten einen Ausflug in die Berge machen und dort wandern. Der Wald ist im April besonders grün. Bring bitte gute Schuhe und eine Regenjacke mit, denn manchmal regnet es auch.\nBis bald und liebe Grüße\nLucía',
    },
  ],
}
