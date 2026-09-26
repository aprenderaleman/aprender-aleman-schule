// Übungsheft B1 — Lektion 29: Schreiben Teil 3 — Formelle E-Mail
export default {
  lektion: 29,
  titel: 'Übungsheft — Formelle E-Mail',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Hier übst du die Sprache der formellen E-Mail. Wähle oder ergänze das passende Wort.',
      items: [
        { typ: 'mc', frage: 'Leider kann ich morgen nicht ___ der Besprechung teilnehmen.', optionen: ['bei', 'an', 'in'], loesung: 1 },
        { typ: 'mc', frage: '___ es möglich, den Termin zu verschieben?', optionen: ['Würde', 'Könnte', 'Wäre'], loesung: 2 },
        {
          typ: 'luecke',
          text: 'Sehr geehrte Frau Lang, {1} kann ich am Freitag nicht zum Kurs kommen, {2} ich einen Termin beim Arzt habe. Bitte entschuldigen Sie mein {3}.',
          bank: ['leider', 'weil', 'Fehlen', 'deshalb', 'Termin'],
          loesungen: { 1: 'leider', 2: 'weil', 3: 'Fehlen' },
        },
        {
          typ: 'luecke',
          text: 'Leider kann ich am Montag nicht kommen. {1} es möglich, den Termin auf Mittwoch zu {2}? Vielen Dank im {3}.',
          bank: ['Wäre', 'verschieben', 'Voraus', 'absagen', 'Könnte'],
          loesungen: { 1: 'Wäre', 2: 'verschieben', 3: 'Voraus' },
        },
        {
          typ: 'zuordnen',
          links: ['Kannst du mir helfen?', 'Hallo Tom,', 'Viele Grüße', 'Sorry!', 'Ich will einen Termin.'],
          rechts: ['Könnten Sie mir bitte helfen?', 'Sehr geehrter Herr Kuhn,', 'Mit freundlichen Grüßen', 'Bitte entschuldigen Sie.', 'Ich würde gern einen Termin vereinbaren.'],
          loesung: {
            'Kannst du mir helfen?': 'Könnten Sie mir bitte helfen?',
            'Hallo Tom,': 'Sehr geehrter Herr Kuhn,',
            'Viele Grüße': 'Mit freundlichen Grüßen',
            'Sorry!': 'Bitte entschuldigen Sie.',
            'Ich will einen Termin.': 'Ich würde gern einen Termin vereinbaren.',
          },
        },
        {
          typ: 'satzbau',
          woerter: ['schicken', 'mir', 'die', 'Könnten', 'bitte', 'Hausaufgaben', 'Sie'],
          loesung: 'Könnten Sie mir bitte die Hausaufgaben schicken?',
          alt: ['Könnten Sie mir die Hausaufgaben bitte schicken?'],
        },
        {
          typ: 'satzbau',
          woerter: ['an', 'teilnehmen', 'ich', 'Besprechung', 'Leider', 'nicht', 'der', 'kann'],
          loesung: 'Leider kann ich nicht an der Besprechung teilnehmen.',
          alt: ['Leider kann ich an der Besprechung nicht teilnehmen.'],
        },
        {
          typ: 'korrektur',
          optionen: ['Ich kann leider nicht an der Besprechung teilnehmen.', 'Ich kann leider nicht an der Besprechung assistieren.'],
          loesung: 0,
          warum: '«Asistir a una reunión» = **an einer Besprechung teilnehmen**. *Assistieren* significa «ayudar a alguien»: falso amigo.',
        },
        {
          typ: 'korrektur',
          optionen: ['Sehr geehrte Frau Weber: Leider kann ich heute nicht kommen.', 'Sehr geehrte Frau Weber, leider kann ich heute nicht kommen.'],
          loesung: 1,
          warum: 'Tras la Anrede va **coma** y se sigue en **minúscula**. Los dos puntos de «Estimada Sra. Weber:» no se usan en alemán.',
        },
        {
          typ: 'korrektur',
          optionen: ['Könnten Sie mir bitte Ihre Telefonnummer geben?', 'Könnten sie mir bitte ihre Telefonnummer geben?'],
          loesung: 0,
          warum: 'En el registro formal **Sie, Ihnen, Ihr** van siempre con mayúscula. En minúscula, *sie/ihre* significa «ella» o «ellos».',
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies die E-Mail der Sprachschule. Löse dann die vier Aufgaben.',
      textTitel: 'E-Mail: Ihr Termin für den Einstufungstest',
      text: 'Sehr geehrter Herr Mendes, vielen Dank für Ihre Anmeldung zum Deutschkurs B1. Leider müssen wir Ihren Termin für den Einstufungstest verschieben, weil unsere Lehrerin am Dienstag krank ist. Der neue Termin ist am Donnerstag, 14. März, um 10 Uhr. Wäre das für Sie möglich? Bitte geben Sie uns bis Montag Bescheid. Wenn Sie am Donnerstag nicht teilnehmen können, sagen Sie den Termin bitte rechtzeitig ab. Wir bieten dann noch einen Termin am Samstagvormittag an. Bitte bringen Sie zum Test Ihren Ausweis und einen Kugelschreiber mit. Das Wörterbuch dürfen Sie leider nicht benutzen. Vielen Dank im Voraus für Ihre Antwort. Mit freundlichen Grüßen, Katrin Albers, Sekretariat',
      items: [
        { typ: 'rf', aussage: 'Der Test findet nicht am Dienstag statt, weil die Lehrerin krank ist.', loesung: true },
        { typ: 'rf', aussage: 'Herr Mendes soll bis Donnerstag antworten.', loesung: false },
        {
          typ: 'mc',
          frage: 'Was passiert, wenn Herr Mendes am Donnerstag nicht kann?',
          optionen: ['Er muss den Kurs absagen.', 'Er kann am Samstag kommen.', 'Er macht den Test zu Hause.'],
          loesung: 1,
        },
        {
          typ: 'mc',
          frage: 'Was muss Herr Mendes mitbringen?',
          optionen: ['seinen Ausweis und einen Kugelschreiber', 'ein Wörterbuch und einen Kugelschreiber', 'seine Anmeldung und ein Foto'],
          loesung: 0,
        },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'text',
      titel: 'Schreiben',
      anweisung: 'Schreib eine formelle E-Mail mit mindestens 40 Wörtern. Denk an Anrede und Gruß.',
      aufgabe: 'Du hast morgen einen Termin für einen Test in der Sprachschule, aber du kannst nicht kommen. Schreib an die Sekretärin, Frau Albers.',
      punkte: [
        'Entschuldige dich und nenne den Grund.',
        'Bitte höflich um einen neuen Termin.',
        'Schreib, wann du Zeit hast.',
      ],
      minWoerter: 40,
      beispielLoesung: 'Sehr geehrte Frau Albers,\nleider kann ich morgen nicht zum Test kommen, weil ich einen dringenden Termin beim Arzt habe. Bitte entschuldigen Sie das. Wäre es möglich, den Test auf nächste Woche zu verschieben? Am Dienstag und am Mittwoch habe ich den ganzen Tag Zeit.\nVielen Dank im Voraus.\nMit freundlichen Grüßen\nNuria Castillo',
    },
  ],
}
