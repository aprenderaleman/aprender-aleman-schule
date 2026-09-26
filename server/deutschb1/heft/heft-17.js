// Übungsheft B1 — Lektion 17: Reflexive Verben & Verben mit Kasus
export default {
  lektion: 17,
  titel: 'Übungsheft — Reflexive Verben & Verben mit Kasus',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Akkusativ oder Dativ? Wähle die richtige Form oder ergänze die Sätze.',
      items: [
        { typ: 'mc', frage: 'Kannst du ___ bitte beim Umzug helfen?', optionen: ['mich', 'mir', 'meiner'], loesung: 1 },
        { typ: 'mc', frage: 'Ich freue mich schon ___ die Ferien im August.', optionen: ['auf', 'über', 'für'], loesung: 0 },
        {
          typ: 'luecke',
          text: 'Beeil {1}, Jonas! Wir treffen {2} um acht mit Lea.',
          bank: ['dich', 'dir', 'uns', 'euch'],
          loesungen: { 1: 'dich', 2: 'uns' },
        },
        {
          typ: 'luecke',
          text: 'Zuerst wasche ich {1} die Hände. Dann ziehe ich {2} an und gehe los.',
          bank: ['mich', 'mir', 'sich'],
          loesungen: { 1: 'mir', 2: 'mich' },
        },
        {
          typ: 'luecke',
          text: 'Interessierst du dich {1} Kunst? — Ja! Ich habe mich gestern sehr {2} dein Geschenk gefreut. Das Kunstbuch ist toll!',
          bank: ['für', 'über', 'auf', 'an'],
          loesungen: { 1: 'für', 2: 'über' },
        },
        {
          typ: 'zuordnen',
          links: ['Ich danke', 'Wem gehört', 'Ich freue', 'Wir treffen', 'Beeil'],
          rechts: ['Ihnen für Ihre Hilfe.', 'diese Jacke?', 'mich auf das Konzert.', 'uns morgen mit Tim.', 'dich, der Zug fährt gleich!'],
          loesung: {
            'Ich danke': 'Ihnen für Ihre Hilfe.',
            'Wem gehört': 'diese Jacke?',
            'Ich freue': 'mich auf das Konzert.',
            'Wir treffen': 'uns morgen mit Tim.',
            'Beeil': 'dich, der Zug fährt gleich!',
          },
        },
        {
          typ: 'satzbau',
          woerter: ['an', 'Kurs', 'mich', 'Ich', 'den', 'heute', 'für', 'melde'],
          loesung: 'Ich melde mich heute für den Kurs an.',
          alt: ['Ich melde mich für den Kurs heute an.'],
        },
        { typ: 'satzbau', woerter: ['gut', 'Kleid', 'mir', 'Das', 'gefällt', 'sehr', 'rote'], loesung: 'Das rote Kleid gefällt mir sehr gut.' },
        {
          typ: 'korrektur',
          optionen: ['Ich helfe dich beim Umzug.', 'Ich helfe dir beim Umzug.'],
          loesung: 1,
          warum: '*Helfen* pide siempre **dativo**: *Ich helfe **dir***. La «a» de «ayudar a alguien» engaña.',
        },
        {
          typ: 'korrektur',
          optionen: ['Mir gefällt der Film sehr.', 'Ich gefalle der Film sehr.'],
          loesung: 0,
          warum: 'Como «gustar»: el **film es el sujeto** y la persona va en **dativo** (*mir*). *Ich gefalle* = «yo gusto».',
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies die E-Mail vom Kulturverein. Löse dann die vier Aufgaben.',
      textTitel: 'E-Mail: Ihre Anfrage zum Fotokurs',
      text: 'Sehr geehrte Frau Álvarez,\nvielen Dank für Ihre E-Mail. Wir freuen uns, dass Sie sich für unseren Fotokurs interessieren. Der Kurs beginnt am 5. Oktober und findet jeden Donnerstag von 18 bis 20 Uhr statt. Wir treffen uns im Raum 12 im ersten Stock. Bitte melden Sie sich bis zum 20. September online an. Eine Kamera brauchen Sie nicht: Die Kameras gehören dem Verein, und Sie können sie im Kurs benutzen. Unser Kursleiter, Herr Brandt, hilft Ihnen gern, wenn Sie Fragen haben. Die Teilnehmer vom letzten Jahr waren sehr zufrieden – besonders der Ausflug in den Stadtpark hat allen gefallen. Wir danken Ihnen für Ihr Interesse und freuen uns auf Sie!\nMit freundlichen Grüßen\nKatrin Sommer, Kulturverein Lindenhof',
      items: [
        { typ: 'rf', aussage: 'Der Fotokurs ist einmal pro Woche am Abend.', loesung: true },
        {
          typ: 'mc',
          frage: 'Bis wann muss sich Frau Álvarez anmelden?',
          optionen: ['bis zum 5. Oktober', 'bis zum 20. September', 'bis zum ersten Donnerstag'],
          loesung: 1,
        },
        { typ: 'rf', aussage: 'Frau Álvarez muss eine eigene Kamera mitbringen.', loesung: false },
        {
          typ: 'mc',
          frage: 'Was hat den Teilnehmern im letzten Jahr besonders gefallen?',
          optionen: ['der Raum im ersten Stock', 'die Kameras des Vereins', 'der Ausflug in den Stadtpark'],
          loesung: 2,
        },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'text',
      titel: 'Schreiben',
      anweisung: 'Schreib eine E-Mail mit mindestens 40 Wörtern. Denk an Anrede und Gruß.',
      aufgabe: 'Deine Freundin Nora hat dir zum Geburtstag ein Buch geschenkt. Schreib ihr eine E-Mail.',
      punkte: [
        'Bedank dich für das Geschenk. Wie gefällt es dir?',
        'Erzähl: Worauf freust du dich in den nächsten Wochen?',
        'Schlag vor, wann und wo ihr euch treffen könnt.',
      ],
      minWoerter: 40,
      beispielLoesung: 'Liebe Nora, vielen Dank für das tolle Buch! Es gefällt mir sehr, ich habe schon die Hälfte gelesen. Ich freue mich schon auf die Sommerferien, denn ich fahre mit meiner Schwester ans Meer. Wollen wir uns vorher treffen? Hast du am Samstag Zeit? Wir könnten uns um drei Uhr im Café am Markt treffen. Liebe Grüße, Samira',
    },
  ],
}
