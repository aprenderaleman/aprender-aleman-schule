// Übungsheft B1 — Lektion 33: Sprechen Teil 3 — Feedback geben & Fragen
export default {
  lektion: 33,
  titel: 'Übungsheft — Feedback & Fragen',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Hier übst du Sätze für Feedback, Fragen und Antworten. Wähle die richtige Form oder ergänze.',
      items: [
        { typ: 'mc', frage: 'Danke ___ deine Präsentation!', optionen: ['für', 'über', 'von'], loesung: 0 },
        { typ: 'mc', frage: 'Mir hat gefallen, dass du viele Beispiele ___.', optionen: ['hast genannt', 'nennen', 'genannt hast'], loesung: 2 },
        { typ: 'mc', frage: 'Das Thema hat ___ sehr gut gefallen.', optionen: ['mich', 'mir', 'ich'], loesung: 1 },
        {
          typ: 'luecke',
          text: 'Ich habe eine {1}: Kannst du das genauer {2}?',
          bank: ['Frage', 'erklären', 'erklärst', 'Antwort'],
          loesungen: { 1: 'Frage', 2: 'erklären' },
        },
        {
          typ: 'luecke',
          text: '{1} gesagt weiß ich das nicht {2}, aber ich {3}, in Spanien ist es billiger.',
          bank: ['Ehrlich', 'genau', 'glaube', 'spannend', 'gern'],
          loesungen: { 1: 'Ehrlich', 2: 'genau', 3: 'glaube' },
        },
        {
          typ: 'zuordnen',
          links: ['Danke für deine Präsentation!', 'Das war ein spannendes Thema.', 'Wie oft machst du das?', 'Das weiß ich nicht genau, aber ich glaube …', 'Da hast du recht.'],
          rechts: ['danken', 'etwas Positives sagen', 'eine Frage stellen', 'auf eine Frage antworten', 'zustimmen'],
          loesung: {
            'Danke für deine Präsentation!': 'danken',
            'Das war ein spannendes Thema.': 'etwas Positives sagen',
            'Wie oft machst du das?': 'eine Frage stellen',
            'Das weiß ich nicht genau, aber ich glaube …': 'auf eine Frage antworten',
            'Da hast du recht.': 'zustimmen',
          },
        },
        { typ: 'satzbau', woerter: ['jeden', 'dass', 'Du', 'joggst', 'gesagt', 'du', 'Tag', 'hast'], loesung: 'Du hast gesagt, dass du jeden Tag joggst.' },
        { typ: 'satzbau', woerter: ['ein', 'hast', 'dass', 'Mir', 'Beispiel', 'gefallen', 'du', 'gebracht', 'hat'], loesung: 'Mir hat gefallen, dass du ein Beispiel gebracht hast.' },
        {
          typ: 'korrektur',
          optionen: ['Ich habe eine Frage gestellt.', 'Ich habe eine Frage gemacht.'],
          loesung: 0,
          warum: '«Hacer una pregunta» = eine Frage **stellen**, no *machen*.',
        },
        {
          typ: 'korrektur',
          optionen: ['Ich antworte die Frage.', 'Ich beantworte die Frage.'],
          loesung: 1,
          warum: '**beantworten** + Akkusativ, o bien *antworten* **auf** + Akk.: *Ich antworte auf die Frage.*',
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies die Zeitungsnotiz. Richtig oder falsch? Oder welche Lösung passt?',
      textTitel: 'Sprachcafé: Präsentieren und Fragen stellen',
      text: 'Jeden ersten Donnerstag im Monat treffen sich in der Stadtbibliothek Menschen, die Deutsch lernen. Beim letzten Treffen hat die Kolumbianerin Valentina Ríos über das Thema „Kaffee in meinem Heimatland“ gesprochen. Nach ihrer Präsentation haben sich die Zuhörer bedankt und viele Fragen gestellt. „Am Anfang war ich nervös, aber die Fragen waren sehr freundlich“, erzählt Valentina. „Bei einer Frage wusste ich die Antwort nicht genau. Da habe ich einfach gesagt: Ich glaube, …“ Der Leiter des Sprachcafés, Herr Albers, findet das Feedback besonders wichtig: „Man lernt viel, wenn andere sagen, was ihnen gefallen hat.“ Das nächste Treffen findet am 6. November um 19 Uhr statt. Die Teilnahme ist kostenlos, eine Anmeldung ist nicht nötig.',
      items: [
        { typ: 'rf', aussage: 'Das Sprachcafé findet einmal im Monat statt.', loesung: true },
        { typ: 'rf', aussage: 'Valentina war während der ganzen Präsentation ruhig.', loesung: false },
        {
          typ: 'mc',
          frage: 'Was sagt Herr Albers über das Feedback?',
          optionen: ['Man kann viel davon lernen.', 'Es ist oft zu kritisch.', 'Es ist nur für Anfänger wichtig.'],
          loesung: 0,
        },
        {
          typ: 'mc',
          frage: 'Was muss man für das nächste Treffen tun?',
          optionen: ['sich vorher anmelden', 'eine Präsentation vorbereiten', 'nichts – man kann einfach kommen'],
          loesung: 2,
        },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'text',
      titel: 'Schreiben',
      anweisung: 'Schreib eine Nachricht mit mindestens 40 Wörtern. Denk an Anrede und Gruß.',
      aufgabe: 'Dein Kurskollege Samuel hat im Deutschkurs über „Sport im Alltag“ präsentiert. Er möchte von dir ein kurzes Feedback. Schreib ihm eine Nachricht.',
      punkte: [
        'Bedank dich für die Präsentation.',
        'Schreib, was dir besonders gefallen hat.',
        'Stell ihm eine Frage zum Thema.',
      ],
      minWoerter: 40,
      beispielLoesung: 'Lieber Samuel,\nvielen Dank für deine Präsentation, das war ein spannendes Thema! Mir hat besonders gefallen, dass du von deinem Alltag erzählt hast. Das Beispiel mit dem Fahrrad war sehr gut. Ich habe noch eine Frage: Fährst du auch im Winter jeden Tag mit dem Fahrrad zur Arbeit?\nViele Grüße\nAna',
    },
  ],
}
