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
      typ: 'hoeren',
      titel: 'Hören',
      anweisung: 'Hör den kurzen Vortrag und löse die Aufgaben.',
      audio: {
        transcript: 'Liebe Studierende, herzlich willkommen zum Infoabend der Studienberatung. Mein Name ist Vera Lindner, ich bin Psychologin, und mein Thema heute ist der Prüfungsstress. Im letzten Semester haben wir an unserer Hochschule eine Umfrage gemacht. Fast zwei Drittel der Befragten gaben an, vor Prüfungen schlecht zu schlafen. Interessant ist, wovor die meisten Angst haben, nämlich nicht vor den schriftlichen Prüfungen, sondern vor den mündlichen. Was können Sie tun? Fangen Sie früh an und lernen Sie regelmäßig, statt in den letzten Nächten alles nachzuholen. Wer vier Wochen vorher beginnt und jeden Tag zwei Stunden lernt, besteht eher als jemand, der drei Tage lang durcharbeitet. Lernen Sie außerdem nicht nur allein. In einer kleinen Gruppe merken Sie schnell, was Sie wirklich verstanden haben. Und wenn die Angst zu groß wird, kommen Sie zu uns. Die Beratung ist kostenlos, und Sie brauchen dafür keinen Termin. Unsere offene Sprechstunde findet jeden Dienstag von vierzehn bis sechzehn Uhr statt.',
      },
      items: [
        { typ: 'rf', aussage: 'Laut der Umfrage schläft mehr als die Hälfte der Befragten vor Prüfungen schlecht.', loesung: true },
        {
          typ: 'mc',
          frage: 'Wovor haben die meisten Befragten Angst?',
          optionen: ['vor schriftlichen Prüfungen', 'vor mündlichen Prüfungen', 'vor Prüfungen in der Gruppe'],
          loesung: 1,
        },
        {
          typ: 'mc',
          frage: 'Welchen Zeitplan empfiehlt Frau Lindner?',
          optionen: [
            'zwei Wochen vorher beginnen und täglich vier Stunden lernen',
            'drei Tage vorher beginnen und durcharbeiten',
            'vier Wochen vorher beginnen und täglich zwei Stunden lernen',
          ],
          loesung: 2,
        },
        { typ: 'rf', aussage: 'Für die Beratung muss man vorher einen Termin vereinbaren.', loesung: false },
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
    {
      typ: 'sprechen',
      titel: 'Sprechen',
      anweisung: 'Halte einen kurzen Vortrag. Sprich etwa zwei Minuten.',
      aufgabe: 'In deinem Sprachkurs hält jede Person einen kurzen Vortrag über ein Bildungsthema. Dein Thema lautet: „Nach der Schule — Ausbildung oder Studium?“ Halte deinen Vortrag (etwa zwei Minuten, klar gegliedert).',
      punkte: [
        'Nenne je einen Vorteil der Ausbildung und des Studiums.',
        'Berichte, welchen Weg du selbst oder jemand aus deinem Umfeld gegangen ist.',
        'Sag, was du einem jungen Menschen raten würdest, und begründe es.',
      ],
      redemittel: [
        'In meinem Vortrag geht es um …',
        'Für eine Ausbildung spricht, dass …',
        'Ein Studium hat dagegen den Vorteil, dass …',
        'Ich selbst habe …',
        'Deshalb würde ich raten, …',
      ],
      maxSekunden: 120,
      beispielLoesung: 'In meinem Vortrag geht es um die Frage, ob man nach der Schule besser eine Ausbildung macht oder studiert. Zuerst vergleiche ich beide Wege, dann erzähle ich von meiner Familie, und zum Schluss gebe ich einen Rat. Für eine Ausbildung spricht, dass man von Anfang an Geld verdient und die Praxis direkt im Betrieb lernt. Nach etwa drei Jahren hat man einen anerkannten Abschluss und oft schon eine feste Stelle. Ein Studium hat dagegen den Vorteil, dass man später mehr Möglichkeiten hat und in vielen Berufen ein höheres Gehalt bekommt. Allerdings dauert es länger und ist ziemlich theoretisch. Ich selbst habe in Kolumbien Wirtschaft studiert und erst nach dem Abschluss gemerkt, wie wenig praktische Erfahrung ich hatte. Mein Bruder hat dagegen eine Ausbildung zum Elektriker gemacht und war mit zwanzig schon unabhängig. Deshalb würde ich jungen Menschen raten, sich zu fragen, wie sie am besten lernen: lieber praktisch oder lieber theoretisch. Beide Wege sind gut, wenn sie zur Person passen. Vielen Dank fürs Zuhören.',
    },
  ],
}
