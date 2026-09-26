// Übungsheft B2 — Lektion 24: Hören Teil 1: Gespräche & Ansagen
export default {
  lektion: 24,
  titel: 'Übungsheft — Gespräche & Ansagen',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Uhrzeiten, Zahlen und Planänderungen: Entscheide, welche Information gilt, und ergänze die typischen Formulierungen aus Ansagen.',
      items: [
        { typ: 'mc', frage: 'Du hörst: „Der Zug nach Rostock fährt heute um halb neun.“ Wann fährt der Zug?', optionen: ['um 9.30 Uhr', 'um 8.30 Uhr', 'um 8.50 Uhr'], loesung: 1 },
        { typ: 'mc', frage: 'Du hörst: „Die Führung beginnt nicht um 15 Uhr, sondern erst um Viertel vor fünf.“ Wann beginnt die Führung?', optionen: ['um 15 Uhr', 'um 17.15 Uhr', 'um 16.45 Uhr'], loesung: 2 },
        {
          typ: 'luecke',
          text: 'Der Yogakurs {1} heute leider aus, weil die Trainerin krank ist. Die nächste Stunde {2} wie geplant am Donnerstag statt.',
          bank: ['fällt', 'findet', 'sagt', 'verschiebt'],
          loesungen: { 1: 'fällt', 2: 'findet' },
        },
        {
          typ: 'luecke',
          text: 'Frau Kaya kann am Montag nicht zum Zahnarzt und muss ihren Termin {1}. Sie ruft in der Praxis an und fragt, ob man ihn {2} Mittwoch verschieben kann.',
          bank: ['absagen', 'ausfallen', 'auf', 'nach'],
          loesungen: { 1: 'absagen', 2: 'auf' },
        },
        {
          typ: 'luecke',
          text: 'Sie {1} uns montags bis freitags bis 18 Uhr. Bitte {2} Sie sich bei Fragen unter der angegebenen Nummer.',
          bank: ['erreichen', 'melden', 'rufen', 'sagen'],
          loesungen: { 1: 'erreichen', 2: 'melden' },
        },
        {
          typ: 'zuordnen',
          links: ['halb acht', 'Viertel nach acht', 'Viertel vor acht', 'zwanzig nach sieben', 'fünf vor halb acht'],
          rechts: ['7.45 Uhr', '7.25 Uhr', '8.15 Uhr', '7.30 Uhr', '7.20 Uhr'],
          loesung: {
            'halb acht': '7.30 Uhr',
            'Viertel nach acht': '8.15 Uhr',
            'Viertel vor acht': '7.45 Uhr',
            'zwanzig nach sieben': '7.20 Uhr',
            'fünf vor halb acht': '7.25 Uhr',
          },
        },
        {
          typ: 'zuordnen',
          links: ['vierzehn', 'vierzig', 'fünfundvierzig', 'vierundfünfzig'],
          rechts: ['54', '14', '45', '40'],
          loesung: { 'vierzehn': '14', 'vierzig': '40', 'fünfundvierzig': '45', 'vierundfünfzig': '54' },
        },
        {
          typ: 'korrektur',
          optionen: ['Der Kurs sagt heute ab.', 'Der Kurs fällt heute aus.'],
          loesung: 1,
          warum: 'Si el sujeto es el evento, se usa **ausfallen**; *absagen* lo hace una persona: *Die Lehrerin sagt den Kurs ab.*',
        },
        {
          typ: 'korrektur',
          optionen: ['Die Besprechung wurde auf Freitag verschoben.', 'Die Besprechung wurde für Freitag verschoben.'],
          loesung: 0,
          warum: '«Aplazar al viernes» es **verschieben auf** + Akkusativ, no *für*.',
        },
        {
          typ: 'satzbau',
          woerter: ['aus', 'Sprechstunde', 'leider', 'Montag', 'fällt', 'am', 'Die'],
          loesung: 'Die Sprechstunde fällt am Montag leider aus.',
          alt: ['Die Sprechstunde fällt leider am Montag aus.'],
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies den Artikelauszug. Entscheide, welche Aussage dem Text entspricht.',
      textTitel: 'Lokalnachrichten: Stadtfest mit neuem Programm',
      text: 'Wegen der angekündigten Unwetter hat die Stadt das Programm des diesjährigen Stadtfests kurzfristig geändert. Die Eröffnung findet nicht wie geplant am Freitagabend statt, sondern erst am Samstag um halb elf auf dem Rathausplatz. Der Flohmarkt, der ursprünglich für Samstag angekündigt war, wird auf Sonntag verschoben und beginnt um neun Uhr. Ganz ausfallen muss leider das Feuerwerk: Die Veranstalter halten es bei starkem Wind für zu gefährlich. Stattdessen spielt am Samstagabend ab Viertel nach acht eine regionale Band im Kulturhaus. Karten dafür gibt es nicht an der Abendkasse, sondern ausschließlich im Bürgerbüro; sie kosten vierzehn Euro. Wer bereits ein Ticket für das Feuerwerk gekauft hat, bekommt das Geld zurück oder kann es gegen eine Konzertkarte tauschen. Das Bürgerbüro ist dafür am Freitag ausnahmsweise bis 19 Uhr geöffnet. Aktuelle Änderungen gibt die Stadt außerdem über ihre Webseite und per Durchsage auf dem Festgelände bekannt.',
      items: [
        {
          typ: 'mc',
          frage: 'Wann wird das Stadtfest eröffnet?',
          optionen: ['am Freitagabend', 'am Samstag um 10.30 Uhr', 'am Samstag um 11.30 Uhr'],
          loesung: 1,
        },
        { typ: 'rf', aussage: 'Der Flohmarkt findet wie geplant am Samstag statt.', loesung: false },
        {
          typ: 'mc',
          frage: 'Was gilt für die Konzertkarten?',
          optionen: ['Man bekommt sie nur im Bürgerbüro.', 'Man kann sie an der Abendkasse kaufen.', 'Sie kosten vierzig Euro.'],
          loesung: 0,
        },
        { typ: 'rf', aussage: 'Wer schon ein Ticket für das Feuerwerk hat, kann sein Geld zurückbekommen.', loesung: true },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'text',
      titel: 'Schreiben',
      anweisung: 'Schreib eine Beschwerde mit mindestens 60 Wörtern. Denk an Betreff, Anrede und Gruß.',
      aufgabe: 'Du hast bei der Sprachschule Lindner einen Abendkurs gebucht. Gestern hast du nur durch eine kurze Nachricht auf deinem Anrufbeantworter erfahren, dass der Kurs ab sofort nicht mehr um 18 Uhr, sondern um 16 Uhr stattfindet. Schreib der Sprachschule eine E-Mail und beschwere dich.',
      punkte: [
        'Beschreibe, welche Änderung dir wie mitgeteilt wurde.',
        'Erkläre, welche Folgen die Änderung für dich hat.',
        'Fordere eine Lösung: einen anderen Kurs oder die Erstattung der Gebühr.',
      ],
      minWoerter: 60,
      beispielLoesung: 'Betreff: Kurzfristige Änderung meines Abendkurses — Sehr geehrte Damen und Herren, im März habe ich bei Ihnen den Abendkurs Deutsch B2 gebucht, der dienstags um 18 Uhr stattfinden sollte. Gestern habe ich auf meinem Anrufbeantworter erfahren, dass der Kurs ab sofort bereits um 16 Uhr beginnt. Eine schriftliche Mitteilung habe ich nicht bekommen. Da ich bis 17 Uhr arbeite, kann ich den Kurs zu dieser Zeit leider nicht besuchen. Ich bitte Sie deshalb, mir einen gleichwertigen Kurs am Abend anzubieten. Sollte das nicht möglich sein, erwarte ich die Erstattung der vollen Kursgebühr. Ich freue mich auf Ihre baldige Antwort. Mit freundlichen Grüßen, Luis Ferreira',
    },
  ],
}
