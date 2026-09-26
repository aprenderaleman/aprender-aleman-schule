// Übungsheft B2 — Lektion 07: Konjunktiv II — irreale Bedingungen & Wünsche
export default {
  lektion: 7,
  titel: 'Übungsheft — Konjunktiv II',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Real oder irreal? Ergänze die passende Form und achte auf die eigenen Konjunktiv-II-Formen von sein, haben und den Modalverben.',
      items: [
        {
          typ: 'luecke',
          text: 'Wenn Jana mehr Geld {1}, {2} sie sich eine größere Wohnung in der Innenstadt mieten.',
          bank: ['hätte', 'würde', 'wäre', 'hat'],
          loesungen: { 1: 'hätte', 2: 'würde' },
        },
        {
          typ: 'luecke',
          text: 'Guten Tag, ich {1} gern einen Termin für nächste Woche. {2} Sie mir vielleicht zwei Vorschläge per E-Mail schicken?',
          bank: ['hätte', 'Könnten', 'würde', 'Wären'],
          loesungen: { 1: 'hätte', 2: 'Könnten' },
        },
        {
          typ: 'luecke',
          text: 'Wenn es in unserem Dorf einen Bahnhof {1}, {2} ich nicht jeden Tag mit dem Auto zur Arbeit fahren. Und wenn ich {3}, wo man in der Stadt günstig parken kann, wäre alles viel leichter.',
          bank: ['gäbe', 'müsste', 'wüsste', 'käme'],
          loesungen: { 1: 'gäbe', 2: 'müsste', 3: 'wüsste' },
        },
        { typ: 'mc', frage: 'Wenn ich du ___, würde ich das Angebot sofort annehmen.', optionen: ['wäre', 'hätte', 'würde'], loesung: 0 },
        { typ: 'mc', frage: '___ ich nur schon mit der Prüfung fertig!', optionen: ['Hätte', 'Würde', 'Wäre'], loesung: 2 },
        { typ: 'mc', frage: 'Wenn der Zug nicht so oft Verspätung ___, würden mehr Pendler ihn nehmen.', optionen: ['hatte', 'hätte', 'hat'], loesung: 1 },
        {
          typ: 'korrektur',
          optionen: ['Ich würde gern ein Zimmer für zwei Nächte.', 'Ich hätte gern ein Zimmer für zwei Nächte.'],
          loesung: 1,
          warum: '«Quisiera una habitación» se dice **Ich hätte gern …**. *würde gern* necesita un infinitivo al final (*Ich würde gern ein Zimmer buchen*).',
        },
        {
          typ: 'korrektur',
          optionen: ['Wenn ich doch mehr Freizeit hätte!', 'Wenn ich doch mehr Freizeit habe!'],
          loesung: 0,
          warum: 'Un deseo irreal («¡ojalá tuviera!») exige **Konjunktiv II**: *hätte*. Con el indicativo *habe* la frase no expresa ningún deseo.',
        },
        {
          typ: 'korrektur',
          optionen: ['Ich wäre froh, wenn du mich morgen anrufen würdest.', 'Ich wäre froh, wenn du würdest mich morgen anrufen.'],
          loesung: 0,
          warum: 'En la subordinada con *wenn*, **würde** va al final, detrás del infinitivo: *…, wenn du mich anrufen würdest*.',
        },
        {
          typ: 'satzbau',
          woerter: ['das', 'grillen', 'Wäre', 'würden', 'besser', 'wir', 'Wetter'],
          loesung: 'Wäre das Wetter besser, würden wir grillen.',
          alt: ['Wir würden grillen, wäre das Wetter besser.'],
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies den Forumsbeitrag. Entscheide, welche Aussage dem Text entspricht.',
      textTitel: 'Forumsbeitrag: Was wäre, wenn ich freitags frei hätte?',
      text: 'Seit Wochen diskutieren wir in der Firma über die Viertagewoche, und ich frage mich ständig: Was wäre, wenn ich freitags frei hätte? Ich würde endlich wieder regelmäßig Klavier spielen, und meine Eltern auf dem Land könnte ich viel öfter besuchen. Mein Chef ist leider skeptisch. Er meint, wenn alle nur vier Tage arbeiten würden, wäre das Büro am Freitag oft nicht ausreichend besetzt. Ganz unrecht hat er nicht: In unserer Abteilung müssten wir die Aufgaben neu verteilen, und manche Kollegen wären vermutlich gestresster als jetzt. Trotzdem glaube ich, dass sich ein Versuch lohnen würde. Wenn man ausgeruhter wäre, würde man konzentrierter arbeiten und weniger Fehler machen. Deshalb meine Frage an euch: Hat jemand Erfahrung damit? Könntet ihr mir erzählen, wie eure Firma die Viertagewoche organisiert hat? Wenn ich ein paar gute Argumente hätte, würde ich meinem Chef nächste Woche einen Probemonat vorschlagen. — Malte, 38',
      items: [
        { typ: 'rf', aussage: 'Malte hat freitags bereits frei.', loesung: false },
        {
          typ: 'mc',
          frage: 'Welche Sorge hat Maltes Chef?',
          optionen: ['Die Mitarbeitenden würden weniger verdienen.', 'Am Freitag wären zu wenige Leute im Büro.', 'Die Kunden würden sich beschweren.'],
          loesung: 1,
        },
        { typ: 'rf', aussage: 'Malte gibt zu, dass die Viertagewoche auch Nachteile hätte.', loesung: true },
        {
          typ: 'mc',
          frage: 'Was möchte Malte von den anderen im Forum wissen?',
          optionen: ['wie andere Firmen die Viertagewoche organisiert haben', 'wie er mit seinem Chef besser auskommen könnte', 'ob er sich eine neue Stelle suchen sollte'],
          loesung: 0,
        },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'text',
      titel: 'Schreiben',
      anweisung: 'Schreib eine formelle E-Mail mit mindestens 60 Wörtern. Denk an Betreff, Anrede und Gruß.',
      aufgabe: 'In deinem Wohnhaus gibt es keinen Abstellraum für Fahrräder, deshalb stehen viele Räder im Treppenhaus. Schreib der Hausverwaltung eine E-Mail mit einem Vorschlag.',
      punkte: [
        'Beschreibe, was sich ändern würde, wenn es einen Fahrradraum gäbe.',
        'Schlag vor, wie die Bewohner dabei helfen könnten.',
        'Bitte höflich um eine Antwort (Könnten Sie …? / Ich wäre Ihnen dankbar, wenn …).',
      ],
      minWoerter: 60,
      beispielLoesung: 'Betreff: Vorschlag für einen Fahrradraum — Sehr geehrte Damen und Herren, ich wohne seit zwei Jahren in der Lindenstraße 14 und möchte Ihnen einen Vorschlag machen. Zurzeit stehen viele Fahrräder im Treppenhaus, weil es keinen Abstellraum gibt. Wenn es im Keller einen Fahrradraum gäbe, wäre das Treppenhaus frei, und niemand müsste sein Rad in die Wohnung tragen. Der alte Lagerraum neben der Waschküche wäre dafür ideal. Die Bewohner könnten ihn an einem Samstag gemeinsam aufräumen, sodass kaum Kosten entstehen würden. Könnten Sie mir mitteilen, ob das möglich wäre? Ich wäre Ihnen sehr dankbar, wenn Sie sich bis Ende des Monats melden würden. Mit freundlichen Grüßen, Leonie Brandt',
    },
  ],
}
