// Übungsheft B2 — Lektion 34: Bildung & Studium
export default {
  lektion: 34,
  titel: 'Übungsheft — Bildung & Studium',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Bildung, Ausbildung oder Studium? Wähle das passende Wort, die richtige Präposition oder die korrekte Kollokation.',
      items: [
        {
          typ: 'luecke',
          text: 'Nach dem Abitur hat Jonas eine {1} zum Elektroniker gemacht, seine Schwester hat dagegen ein {2} in Chemie begonnen.',
          bank: ['Ausbildung', 'Studium', 'Bildung', 'Vorlesung'],
          loesungen: { 1: 'Ausbildung', 2: 'Studium' },
        },
        {
          typ: 'luecke',
          text: 'Wer bei der Prüfung {1}, darf sie im nächsten Semester wiederholen. Wer sie schon beim ersten Versuch {2}, bekommt sofort sein Zeugnis.',
          bank: ['durchfällt', 'besteht', 'besucht', 'studiert'],
          loesungen: { 1: 'durchfällt', 2: 'besteht' },
        },
        {
          typ: 'luecke',
          text: 'Viele Studierende klagen {1} den Prüfungsstress. Manche haben so große Angst {2} schlechten Noten, dass sie kaum noch schlafen.',
          bank: ['über', 'vor', 'auf', 'an'],
          loesungen: { 1: 'über', 2: 'vor' },
        },
        {
          typ: 'mc',
          frage: 'Ein Azubi lernt die Theorie in der ___ und die Praxis im Betrieb.',
          optionen: ['Berufsschule', 'Vorlesung', 'Weiterbildung'],
          loesung: 0,
        },
        {
          typ: 'mc',
          frage: 'Nach sechs Jahren hat Selin ihr Medizinstudium endlich ___.',
          optionen: ['bekommen', 'besucht', 'abgeschlossen'],
          loesung: 2,
        },
        {
          typ: 'mc',
          frage: 'Innerhalb ___ ersten Studienjahres muss man alle Grundlagenprüfungen bestehen.',
          optionen: ['dem', 'des', 'den'],
          loesung: 1,
        },
        {
          typ: 'zuordnen',
          links: ['eine Vorlesung', 'eine Prüfung', 'eine gute Note', 'ein Fach', 'an einer Weiterbildung'],
          rechts: ['besuchen', 'bestehen', 'bekommen', 'studieren', 'teilnehmen'],
          loesung: {
            'eine Vorlesung': 'besuchen',
            'eine Prüfung': 'bestehen',
            'eine gute Note': 'bekommen',
            'ein Fach': 'studieren',
            'an einer Weiterbildung': 'teilnehmen',
          },
        },
        {
          typ: 'korrektur',
          optionen: ['Nach der Schule möchte ich eine Karriere in Jura studieren.', 'Nach der Schule möchte ich Jura studieren.'],
          loesung: 1,
          warum: '«Estudiar una carrera» = **ein Fach studieren**. *Die Karriere* es la carrera profesional, no los estudios.',
        },
        {
          typ: 'korrektur',
          optionen: ['Jedes Kind hat ein Recht auf Ausbildung, deshalb gibt es die Schulpflicht.', 'Jedes Kind hat ein Recht auf Bildung, deshalb gibt es die Schulpflicht.'],
          loesung: 1,
          warum: 'La educación en general es **die Bildung**; *die Ausbildung* es la formación profesional. «Derecho a la educación» = **Recht auf Bildung**.',
        },
        {
          typ: 'satzbau',
          woerter: ['übernommen', 'nach', 'Er', 'Betrieb', 'der', 'wurde', 'vom', 'Ausbildung'],
          loesung: 'Er wurde nach der Ausbildung vom Betrieb übernommen.',
          alt: ['Er wurde vom Betrieb nach der Ausbildung übernommen.', 'Nach der Ausbildung wurde er vom Betrieb übernommen.'],
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies den Forumsbeitrag und löse die Aufgaben.',
      textTitel: 'Forum „Wege nach der Schule“ — Beitrag von Malte, 24',
      text: 'Nach dem Abitur war für mich klar: Ich studiere. Meine Eltern haben beide einen Hochschulabschluss, und eine Ausbildung kam für sie gar nicht in Frage. Also habe ich mich für Maschinenbau eingeschrieben. Die Vorlesungen waren überfüllt, der Stoff war sehr theoretisch, und vor jeder Prüfung habe ich kaum geschlafen. Im vierten Semester bin ich zum zweiten Mal in Mathematik durchgefallen — da habe ich die Reißleine gezogen. Heute mache ich eine Ausbildung zum Mechatroniker in einem mittelgroßen Betrieb. Drei Tage pro Woche arbeite ich in der Werkstatt, zwei Tage gehe ich in die Berufsschule. Zum ersten Mal verstehe ich, wofür ich lerne, und meine Noten sind deutlich besser als an der Uni. Außerdem verdiene ich mein eigenes Geld. Mein Chef hat mir schon angeboten, mich nach der Abschlussprüfung zu übernehmen. Ein Studium schließe ich trotzdem nicht aus: Irgendwann möchte ich vielleicht berufsbegleitend studieren. Mein Rat an alle, die gerade zweifeln: Hört nicht nur auf eure Eltern, sondern auch auf euch selbst!',
      items: [
        { typ: 'rf', aussage: 'Maltes Eltern haben ihn von Anfang an bei der Entscheidung für eine Ausbildung unterstützt.', loesung: false },
        {
          typ: 'mc',
          frage: 'Warum hat Malte sein Studium abgebrochen?',
          optionen: [
            'Er konnte sich das Studium finanziell nicht mehr leisten.',
            'Er hatte eine wichtige Prüfung zweimal nicht bestanden.',
            'Ein Betrieb hatte ihm eine feste Stelle angeboten.',
          ],
          loesung: 1,
        },
        { typ: 'rf', aussage: 'Malte verbringt pro Woche mehr Zeit im Betrieb als in der Berufsschule.', loesung: true },
        {
          typ: 'mc',
          frage: 'Wie denkt Malte heute über ein Studium?',
          optionen: [
            'Er will nie wieder an eine Hochschule gehen.',
            'Er will es direkt nach der Abschlussprüfung in Vollzeit fortsetzen.',
            'Er kann sich vorstellen, später neben dem Beruf zu studieren.',
          ],
          loesung: 2,
        },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'text',
      titel: 'Schreiben',
      anweisung: 'Schreib eine formelle E-Mail mit mindestens 60 Wörtern und geh auf alle drei Punkte ein.',
      aufgabe: 'Du arbeitest seit drei Jahren in einer mittelgroßen Firma und möchtest eine berufsbegleitende Weiterbildung machen. Schreib eine E-Mail an Frau Kramer aus der Personalabteilung.',
      punkte: [
        'Beschreib die Weiterbildung (Inhalt, Dauer, Kosten).',
        'Begründe, warum sie für dich und für die Firma nützlich ist.',
        'Bitte um die Übernahme der Kosten oder um eine andere Form der Unterstützung.',
      ],
      minWoerter: 60,
      beispielLoesung: 'Sehr geehrte Frau Kramer, ich möchte ab Oktober eine berufsbegleitende Weiterbildung im Bereich Projektmanagement machen. Der Kurs dauert sechs Monate, findet jeweils am Freitagnachmittag und am Samstag statt und kostet insgesamt 2.400 Euro. Am Ende steht eine Prüfung mit einem anerkannten Abschluss. Da ich in unserer Abteilung immer häufiger Projekte koordiniere, würde die Firma direkt von meinen neuen Kenntnissen profitieren. Ich wäre Ihnen daher sehr dankbar, wenn die Firma die Kosten ganz oder teilweise übernehmen könnte. Alternativ würde mir auch helfen, wenn ich freitags früher gehen dürfte. Über einen Gesprächstermin würde ich mich freuen. Mit freundlichen Grüßen, Diego Ramírez',
    },
  ],
}
