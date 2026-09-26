// Übungsheft B1 — Lektion 34: Arbeit & Beruf
export default {
  lektion: 34,
  titel: 'Übungsheft — Arbeit & Beruf',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Übe den Wortschatz der Arbeit. Achte besonders auf Präpositionen und feste Verbindungen.',
      items: [
        { typ: 'mc', frage: 'Ich arbeite ___ Koch in einem Restaurant.', optionen: ['wie', 'als', 'als ein'], loesung: 1 },
        {
          typ: 'luecke',
          text: 'Lukas sucht eine neue {1}. Er möchte mehr {2}, denn sein {3} ist zu niedrig.',
          bank: ['Stelle', 'verdienen', 'Gehalt', 'Termin', 'Kollegen'],
          loesungen: { 1: 'Stelle', 2: 'verdienen', 3: 'Gehalt' },
        },
        { typ: 'mc', frage: 'Können wir den Termin ___ Donnerstag verschieben?', optionen: ['in', 'an', 'auf'], loesung: 2 },
        {
          typ: 'zuordnen',
          links: ['das Geld für einen Monat Arbeit', 'die freie Zeit nach der Arbeit', 'eine Person, die mit dir arbeitet', 'ein Treffen im Büro zu einem Thema', 'die Nachricht „Ich bin krank.“'],
          rechts: ['das Gehalt', 'der Feierabend', 'die Kollegin', 'die Besprechung', 'die Krankmeldung'],
          loesung: {
            'das Geld für einen Monat Arbeit': 'das Gehalt',
            'die freie Zeit nach der Arbeit': 'der Feierabend',
            'eine Person, die mit dir arbeitet': 'die Kollegin',
            'ein Treffen im Büro zu einem Thema': 'die Besprechung',
            'die Nachricht „Ich bin krank.“': 'die Krankmeldung',
          },
        },
        { typ: 'mc', frage: 'Heute bleibe ich länger im Büro. Ich muss Überstunden ___.', optionen: ['machen', 'tun', 'geben'], loesung: 0 },
        {
          typ: 'luecke',
          text: 'Ich bewerbe mich {1} die Stelle. Morgen spreche ich {2} der Chefin. Die Besprechung beginnt schon {3} zehn Minuten.',
          bank: ['um', 'mit', 'in', 'zu', 'an'],
          loesungen: { 1: 'um', 2: 'mit', 3: 'in' },
        },
        { typ: 'satzbau', woerter: ['beworben', 'die', 'Ich', 'um', 'mich', 'Stelle', 'habe'], loesung: 'Ich habe mich um die Stelle beworben.' },
        {
          typ: 'korrektur',
          optionen: ['Ich arbeite wie Krankenpflegerin.', 'Ich arbeite als Krankenpflegerin.'],
          loesung: 1,
          warum: '«Trabajo **como** enfermera» → **als**, nunca *wie* (*wie* compara: *Sie arbeitet wie eine Maschine*). Y sin artículo.',
        },
        { typ: 'satzbau', woerter: ['krank', 'weil', 'Ich', 'bleibe', 'ich', 'zu', 'heute', 'Hause', 'bin'], loesung: 'Ich bleibe heute zu Hause, weil ich krank bin.' },
        {
          typ: 'korrektur',
          optionen: ['Ich verdiene 2000 Euro im Monat.', 'Ich gewinne 2000 Euro im Monat.'],
          loesung: 0,
          warum: '«Ganar» dinero con el trabajo es **verdienen**. *Gewinnen* es ganar un premio, la lotería o un partido.',
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies die Stellenanzeige. Löse dann die vier Aufgaben.',
      textTitel: 'Stellenanzeige: Verkäufer/in gesucht',
      text: 'Die Bäckerei Sonnenkorn in Freiburg sucht ab 1. März eine Verkäuferin oder einen Verkäufer in Teilzeit (25 Stunden pro Woche). Ihre Aufgaben: Sie beraten unsere Kunden, verkaufen Brot und Kuchen und halten den Laden sauber. Die Arbeit beginnt früh: Unser Geschäft öffnet um 6 Uhr, deshalb fangen Sie um 5.30 Uhr an. Dafür haben Sie schon um 12 Uhr Feierabend. Am Samstag arbeiten Sie nur jede zweite Woche, sonntags ist die Bäckerei geschlossen. Überstunden gibt es bei uns selten. Wir bieten ein gutes Gehalt, ein nettes Team und jeden Tag ein kostenloses Frühstück. Erfahrung im Verkauf ist schön, aber nicht nötig. Wichtig sind uns Freundlichkeit und gute Deutschkenntnisse. Bewerben Sie sich bis zum 15. Februar per E-Mail bei unserer Chefin, Frau Brandt.',
      items: [
        { typ: 'rf', aussage: 'Die Stelle ist eine Vollzeitstelle.', loesung: false },
        {
          typ: 'mc',
          frage: 'Wann hat die neue Verkäuferin Feierabend?',
          optionen: ['um 5.30 Uhr', 'um 6 Uhr', 'um 12 Uhr'],
          loesung: 2,
        },
        { typ: 'rf', aussage: 'Man muss nicht jeden Samstag arbeiten.', loesung: true },
        {
          typ: 'mc',
          frage: 'Was ist für die Stelle wirklich wichtig?',
          optionen: ['Erfahrung im Verkauf', 'Freundlichkeit und gute Deutschkenntnisse', 'viele Überstunden'],
          loesung: 1,
        },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'formular',
      titel: 'Schreiben',
      anweisung: 'Lies die E-Mail an die Chefin. Ergänze dann das Formular für die Krankmeldung.',
      quelle: 'Sehr geehrte Frau Keller, leider kann ich heute nicht zur Arbeit kommen. Ich habe hohes Fieber und starke Halsschmerzen. Ich gehe heute um 10 Uhr zum Arzt und schicke Ihnen danach die Krankschreibung. Die Besprechung mit Herrn Yilmaz um 14 Uhr müssen wir leider verschieben. Mit freundlichen Grüßen, Samuel Osei (Abteilung Einkauf)',
      felder: [
        { id: 'name', label: 'Name', erwartet: ['Samuel Osei', 'Osei'] },
        { id: 'abteilung', label: 'Abteilung', erwartet: ['Einkauf', 'Abteilung Einkauf'] },
        { id: 'grund', label: 'Grund', erwartet: ['hohes Fieber und starke Halsschmerzen', 'Fieber und Halsschmerzen', 'krank', 'Fieber', 'Halsschmerzen'] },
        { id: 'arzt', label: 'Arzttermin (Uhrzeit)', erwartet: ['um 10 Uhr', '10 Uhr', '10:00', '10.00', '10:00 Uhr', '10'] },
        { id: 'verschieben', label: 'Welcher Termin wird verschoben?', erwartet: ['die Besprechung mit Herrn Yilmaz um 14 Uhr', 'die Besprechung mit Herrn Yilmaz', 'Besprechung mit Herrn Yilmaz', 'Besprechung', 'die Besprechung', 'Besprechung um 14 Uhr'] },
      ],
    },
  ],
}
