// Übungsheft B1 — Lektion 11: Komparativ & Superlativ
export default {
  lektion: 11,
  titel: 'Übungsheft — Komparativ & Superlativ',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Vergleiche richtig. Achte vor dem Nomen auch auf die Endung.',
      items: [
        { typ: 'mc', frage: 'Meine Wohnung ist zu klein. Ich suche eine ___ Wohnung.', optionen: ['größere', 'größeren', 'größer'], loesung: 0 },
        { typ: 'mc', frage: 'Je früher du buchst, ___ billiger ist das Ticket.', optionen: ['als', 'desto', 'wie'], loesung: 1 },
        { typ: 'mc', frage: 'Die Mieten in unserer Stadt werden ___.', optionen: ['immer mehr teuer', 'mehr teurer', 'immer teurer'], loesung: 2 },
        {
          typ: 'luecke',
          text: 'Das war der {1} Tag in diesem Sommer. Ich bin mit meinem {2} Freund ans Meer gefahren. Das Wetter war viel {3} als letztes Jahr.',
          bank: ['schönste', 'schönsten', 'besten', 'bester', 'besser', 'gut'],
          loesungen: { 1: 'schönste', 2: 'besten', 3: 'besser' },
        },
        {
          typ: 'luecke',
          text: 'Gibt es keinen {1} Tarif? Dieser ist {2} als mein alter Tarif. Am {3} war das Angebot von gestern.',
          bank: ['billigeren', 'billigerer', 'teurer', 'teuerer', 'günstigsten', 'günstigste'],
          loesungen: { 1: 'billigeren', 2: 'teurer', 3: 'günstigsten' },
        },
        {
          typ: 'luecke',
          text: 'Je mehr ich {1}, {2} sicherer {3} ich beim Sprechen.',
          bank: ['übe', 'üben', 'desto', 'als', 'werde'],
          loesungen: { 1: 'übe', 2: 'desto', 3: 'werde' },
        },
        {
          typ: 'zuordnen',
          links: ['gut', 'gern', 'viel', 'hoch', 'nah'],
          rechts: ['besser', 'lieber', 'mehr', 'höher', 'näher'],
          loesung: { 'gut': 'besser', 'gern': 'lieber', 'viel': 'mehr', 'hoch': 'höher', 'nah': 'näher' },
        },
        { typ: 'satzbau', woerter: ['Kollegen', 'an', 'sind', 'Das', 'Job', 'die', 'meinem', 'Beste'], loesung: 'Das Beste an meinem Job sind die Kollegen.' },
        {
          typ: 'korrektur',
          optionen: ['Mein Bruder ist größer wie ich.', 'Mein Bruder ist größer als ich.'],
          loesung: 1,
          warum: 'Después del comparativo va siempre **als** (*más alto que*). *wie* solo con igualdad: **so groß wie**.',
        },
        {
          typ: 'korrektur',
          optionen: ['Je billiger das Hotel ist, desto zufriedener bin ich.', 'Je billiger das Hotel ist, desto ich bin zufriedener.'],
          loesung: 0,
          warum: 'Tras **desto** + comparativo, el verbo va **justo después**: *desto zufriedener **bin** ich*. No se copia el orden español.',
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies den Forumsbeitrag. Löse dann die vier Aufgaben.',
      textTitel: 'Forum „Wohnen heute“ — Stadt oder Land?',
      text: 'Kerstin_77 schreibt: Vor zwei Jahren bin ich mit meiner Familie von München in ein kleines Dorf gezogen. Die Miete ist hier viel niedriger, und unser Haus ist größer als die alte Wohnung. Das Beste ist aber der große Garten: Die Kinder spielen fast jeden Tag draußen. Natürlich gibt es auch Nachteile. Der Weg zur Arbeit ist länger, ich fahre jetzt 50 Minuten mit dem Auto. Und die Busse fahren nur selten. Je älter meine Kinder werden, desto wichtiger wird dieses Problem, denn sie wollen am Wochenende in die Stadt. Trotzdem bin ich hier zufriedener als in München. Am meisten vermisse ich eigentlich nur die kleinen Cafés in meinem alten Viertel.',
      items: [
        { typ: 'rf', aussage: 'Im Dorf ist die Miete niedriger als in München.', loesung: true },
        {
          typ: 'mc',
          frage: 'Was ist für Kerstin das Beste am Dorf?',
          optionen: ['der kurze Weg zur Arbeit', 'der große Garten', 'die guten Busverbindungen'],
          loesung: 1,
        },
        { typ: 'rf', aussage: 'Die Busse im Dorf fahren sehr oft.', loesung: false },
        {
          typ: 'mc',
          frage: 'Was vermisst Kerstin am meisten?',
          optionen: ['die Cafés in ihrem alten Viertel', 'ihre alte Wohnung', 'ihre Arbeit in München'],
          loesung: 0,
        },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'text',
      titel: 'Schreiben',
      anweisung: 'Schreib einen Forumsbeitrag mit mindestens 40 Wörtern.',
      aufgabe: 'Im Forum „Alltag in der Stadt“ ist die Frage: Fahrrad oder Auto — was ist in der Stadt besser? Schreib deine Meinung.',
      punkte: [
        'Vergleiche Fahrrad und Auto (Komparativ + als).',
        'Schreib einen Satz mit je … desto.',
        'Sag, was für dich das Wichtigste ist.',
      ],
      minWoerter: 40,
      beispielLoesung: 'Ich finde, in der Stadt ist das Fahrrad die bessere Wahl. Mit dem Rad bin ich oft schneller als mit dem Auto, weil ich nicht im Stau stehe. Außerdem ist es viel billiger. Je mehr Leute Rad fahren, desto sauberer wird die Luft. Das Wichtigste ist für mich aber, dass ich jeden Tag ein bisschen Sport mache. Viele Grüße, Daniel',
    },
  ],
}
