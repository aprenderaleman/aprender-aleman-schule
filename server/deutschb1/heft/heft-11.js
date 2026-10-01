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
      typ: 'hoeren',
      titel: 'Hören',
      anweisung: 'Nina und Paul planen ihren Urlaub. Hör die Diskussion und löse die vier Aufgaben.',
      audio: {
        transcript: 'Frau: Schau mal, Paul, ich habe zwei Angebote für unseren Urlaub gefunden: ein Hotel am Meer und eine Ferienwohnung in den Bergen.\nMann: Was ist denn billiger, Nina?\nFrau: Die Ferienwohnung. Sie kostet siebzig Euro pro Nacht, das Hotel neunzig. Aber im Hotel ist das Frühstück schon dabei.\nMann: Hm. Ich finde, die Wohnung ist trotzdem die bessere Wahl. Sie ist größer, und wir können selbst kochen.\nFrau: Stimmt, aber am Meer ist das Wetter wärmer. Und je wärmer es ist, desto besser kann ich mich erholen.\nMann: In den Bergen ist es aber ruhiger. Im Sommer wird es am Meer immer voller.\nFrau: Das ist wahr. Und was machen wir im Urlaub am liebsten? Wandern!\nMann: Genau. Das Wichtigste ist für mich die Ruhe.\nFrau: Also gut, dann buche ich die Ferienwohnung.',
      },
      items: [
        {
          typ: 'mc',
          frage: 'Was kostet das Hotel pro Nacht?',
          optionen: ['70 Euro', '79 Euro', '90 Euro'],
          loesung: 2,
        },
        { typ: 'rf', aussage: 'In der Ferienwohnung ist das Frühstück im Preis dabei.', loesung: false },
        { typ: 'rf', aussage: 'Paul findet es in den Bergen ruhiger als am Meer.', loesung: true },
        {
          typ: 'mc',
          frage: 'Wofür entscheiden sich Nina und Paul am Ende?',
          optionen: ['für das Hotel am Meer', 'für die Ferienwohnung in den Bergen', 'für einen Urlaub zu Hause'],
          loesung: 1,
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
    {
      typ: 'sprechen',
      titel: 'Sprechen',
      anweisung: 'Vergleiche und sag deine Meinung. Sprich ungefähr 75 Sekunden.',
      aufgabe: 'Online einkaufen oder im Geschäft: Was findest du besser? Vergleiche beide Möglichkeiten.',
      punkte: [
        'Vergleiche Preis, Zeit und Auswahl.',
        'Erzähl von einer eigenen Erfahrung.',
        'Sag am Ende: Was ist für dich das Wichtigste?',
      ],
      redemittel: ['… ist billiger / bequemer als …', 'Je teurer …, desto …', 'Am liebsten kaufe ich …', 'Das Wichtigste ist für mich …'],
      maxSekunden: 75,
      beispielLoesung: 'Ich kaufe lieber online ein als im Geschäft. Online ist die Auswahl größer, und die Preise sind oft niedriger. Außerdem ist es bequemer, weil ich nicht in die Stadt fahren muss. Aber es gibt auch Nachteile: Im Geschäft kann ich die Sachen sofort mitnehmen, online muss ich länger warten. Letzten Monat habe ich Schuhe bestellt, und sie waren zu klein. Im Geschäft passiert mir das nicht. Je teurer ein Produkt ist, desto lieber gehe ich ins Geschäft. Das Wichtigste ist für mich aber die Zeit. Deshalb kaufe ich die meisten Sachen online.',
    },
  ],
}
