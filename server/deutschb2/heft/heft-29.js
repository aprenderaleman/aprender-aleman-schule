// Übungsheft B2 — Lektion 29: Schreiben Teil 2 — Die formelle Nachricht
export default {
  lektion: 29,
  titel: 'Übungsheft — Die formelle Nachricht',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Sie-Register, höflicher Konjunktiv II und die feste Architektur der Nachricht: Wähle jeweils die Lösung, die in einer formellen Nachricht korrekt ist.',
      items: [
        {
          typ: 'luecke',
          text: 'Leider muss ich Ihnen {1}, dass ich am Montag nicht an der Besprechung {2} kann.',
          bank: ['mitteilen', 'teilnehmen', 'absagen', 'assistieren'],
          loesungen: { 1: 'mitteilen', 2: 'teilnehmen' },
        },
        {
          typ: 'luecke',
          text: 'Könnten wir den Termin auf Freitag {1}? Falls das nicht geht, hätte ich noch eine andere {2}: ein kurzes Telefonat am Donnerstag.',
          bank: ['verschieben', 'absagen', 'Lösung', 'Grund'],
          loesungen: { 1: 'verschieben', 2: 'Lösung' },
        },
        {
          typ: 'luecke',
          text: 'Ich {1} Ihnen sehr dankbar, wenn Sie mir die Unterlagen bis Mittwoch schicken {2}.',
          bank: ['wäre', 'würde', 'könnten', 'konnten'],
          loesungen: { 1: 'wäre', 2: 'könnten' },
        },
        {
          typ: 'mc',
          frage: 'Welcher Anfang einer formellen Nachricht ist korrekt?',
          optionen: [
            'Sehr geehrte Frau Sommer: Ich wohne seit zwei Jahren …',
            'Sehr geehrter Frau Sommer, ich wohne seit zwei Jahren …',
            'Sehr geehrte Frau Sommer, ich wohne seit zwei Jahren …',
          ],
          loesung: 2,
        },
        {
          typ: 'mc',
          frage: 'Welche Formulierung passt in eine formelle Nachricht an die Vermieterin?',
          optionen: [
            'Könnten Sie mir bitte einen neuen Termin anbieten?',
            'Ich will einen neuen Termin.',
            'Geben Sie mir endlich einen neuen Termin!',
          ],
          loesung: 0,
        },
        {
          typ: 'mc',
          frage: '„Ich möchte Ihnen mitteilen, dass ich zum 30. Juni aus der Wohnung ausziehe.“ Um welchen Nachrichtentyp handelt es sich?',
          optionen: ['eine Bitte', 'eine Mitteilung', 'eine Entschuldigung mit Lösung'],
          loesung: 1,
        },
        {
          typ: 'zuordnen',
          links: [
            'Sehr geehrter Herr Brandt,',
            'Leider muss ich Ihnen mitteilen, dass …',
            'Könnten Sie mir bitte die Unterlagen schicken?',
            'Vielen Dank für Ihr Verständnis.',
            'Mit freundlichen Grüßen',
          ],
          rechts: ['Anrede', 'Anlass', 'Bitte', 'Dank zum Schluss', 'Grußformel'],
          loesung: {
            'Sehr geehrter Herr Brandt,': 'Anrede',
            'Leider muss ich Ihnen mitteilen, dass …': 'Anlass',
            'Könnten Sie mir bitte die Unterlagen schicken?': 'Bitte',
            'Vielen Dank für Ihr Verständnis.': 'Dank zum Schluss',
            'Mit freundlichen Grüßen': 'Grußformel',
          },
        },
        {
          typ: 'korrektur',
          optionen: ['Nächste Woche assistiere ich an dem Seminar.', 'Nächste Woche nehme ich an dem Seminar teil.'],
          loesung: 1,
          warum: '«Asistir a» se dice **teilnehmen an** + dativo; *assistieren* significa ayudar como asistente.',
        },
        {
          typ: 'korrektur',
          optionen: ['Ich würde gern wissen, wann beginnt der Kurs.', 'Ich würde gern wissen, wann der Kurs beginnt.'],
          loesung: 1,
          warum: 'Tras *Ich würde gern wissen* viene una **pregunta indirecta**: el verbo conjugado va al **final** (*wann der Kurs beginnt*).',
        },
        {
          typ: 'satzbau',
          woerter: ['verschieben', 'bitte', 'Könnten', 'Termin', 'auf', 'Sie', 'den', 'Freitag'],
          loesung: 'Könnten Sie den Termin bitte auf Freitag verschieben?',
          alt: ['Könnten Sie bitte den Termin auf Freitag verschieben?', 'Könnten Sie den Termin auf Freitag bitte verschieben?'],
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies die E-Mail an die Hausverwaltung und löse die Aufgaben.',
      textTitel: 'E-Mail von Samir Haddad an die Hausverwaltung',
      text: 'Sehr geehrte Frau Kowalski, ich wohne seit März in der Wohnung 3B in der Lindenstraße 12 und schreibe Ihnen wegen der Waschmaschine im Keller. Leider funktioniert sie seit über einer Woche nicht mehr, und mehrere Nachbarn haben mir erzählt, dass sie Ihnen das Problem bereits gemeldet haben. Bisher hat sich jedoch niemand bei uns gemeldet. Für meine Familie ist die Situation schwierig: Wir haben zwei kleine Kinder und müssen unsere Wäsche zurzeit bei meiner Schwester waschen, die am anderen Ende der Stadt wohnt. Könnten Sie bitte so bald wie möglich einen Techniker schicken? Ich würde außerdem gern wissen, ob die Hausverwaltung die Kosten für die Reparatur übernimmt. Für einen Termin erreichen Sie mich nachmittags unter 0151 4433221. Am Donnerstag bin ich allerdings den ganzen Tag bei einer Fortbildung. Vielen Dank im Voraus für Ihre Hilfe. Mit freundlichen Grüßen Samir Haddad',
      items: [
        { typ: 'rf', aussage: 'Samir ist der Erste, der der Hausverwaltung das Problem mit der Waschmaschine meldet.', loesung: false },
        {
          typ: 'mc',
          frage: 'Warum ist die Situation für Samirs Familie besonders schwierig?',
          optionen: [
            'Seine Schwester kann der Familie nicht mehr helfen.',
            'Die Familie muss die Wäsche weit entfernt bei einer Verwandten waschen.',
            'Die Kinder sind krank und brauchen viel saubere Wäsche.',
          ],
          loesung: 1,
        },
        {
          typ: 'mc',
          frage: 'Was möchte Samir außer einem schnellen Techniker-Termin noch wissen?',
          optionen: [
            'ob die Hausverwaltung die Reparatur bezahlt',
            'wann die Nachbarn den Schaden gemeldet haben',
            'ob er selbst eine neue Waschmaschine kaufen soll',
          ],
          loesung: 0,
        },
        { typ: 'rf', aussage: 'Am Donnerstag nimmt Samir an einer Fortbildung teil.', loesung: true },
      ],
    },
    {
      typ: 'hoeren',
      titel: 'Hören',
      anweisung: 'Du hörst ein Telefongespräch mit einer Personalabteilung. Löse die Aufgaben.',
      audio: {
        transcript: 'Frau: Personalabteilung, Hartmann, guten Tag.\nMann: Guten Tag, Frau Hartmann, hier spricht Daniel Novak. Ich habe am Mittwoch um zehn Uhr ein Vorstellungsgespräch bei Ihnen. Leider muss ich Ihnen mitteilen, dass ich an diesem Tag nicht kommen kann.\nFrau: Oh, das ist schade. Darf ich nach dem Grund fragen?\nMann: Selbstverständlich. Mein jetziger Arbeitgeber schickt mich kurzfristig zu einer Schulung nach Köln. Ich möchte mich dafür entschuldigen. Wäre es möglich, den Termin zu verschieben?\nFrau: Einen Moment bitte. Am Donnerstag ist unsere Abteilungsleiterin leider nicht im Haus. Ich könnte Ihnen den Freitag anbieten, und zwar um halb neun.\nMann: Freitag passt mir sehr gut. Müsste ich dafür noch etwas mitbringen?\nFrau: Ihre Unterlagen haben wir bereits. Bringen Sie bitte nur Ihren Ausweis mit, den brauchen Sie am Empfang.\nMann: In Ordnung. Könnten Sie mir den neuen Termin vielleicht noch schriftlich bestätigen?\nFrau: Gern, Sie bekommen heute noch eine E-Mail von mir.\nMann: Vielen Dank für Ihr Verständnis, Frau Hartmann. Auf Wiederhören.',
      },
      items: [
        {
          typ: 'mc',
          frage: 'Warum kann Herr Novak am Mittwoch nicht kommen?',
          optionen: [
            'Er hat einen dringenden Arzttermin.',
            'Er muss zu einer Schulung nach Köln fahren.',
            'Er hat ein Vorstellungsgespräch bei einer anderen Firma.',
          ],
          loesung: 1,
        },
        { typ: 'rf', aussage: 'Am Donnerstag ist ein Gespräch nicht möglich, weil die Abteilungsleiterin fehlt.', loesung: true },
        {
          typ: 'mc',
          frage: 'Was soll Herr Novak zum Gespräch mitbringen?',
          optionen: ['seine Bewerbungsunterlagen', 'eine schriftliche Bestätigung', 'seinen Ausweis'],
          loesung: 2,
        },
        { typ: 'rf', aussage: 'Herr Novak soll den neuen Termin selbst per E-Mail bestätigen.', loesung: false },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'text',
      titel: 'Schreiben',
      anweisung: 'Schreib eine formelle E-Mail mit mindestens 60 Wörtern und geh auf alle drei Punkte ein. Halte das Sie-Register durch und achte auf Anrede und Grußformel.',
      aufgabe: 'Du hast dich für einen Erste-Hilfe-Kurs am Samstag angemeldet, kannst aber nicht teilnehmen. Schreib der Kursleiterin, Frau Yilmaz, eine E-Mail.',
      punkte: [
        'Nenne den Grund und entschuldige dich für die Absage.',
        'Bitte höflich um einen Ersatztermin (Konjunktiv II).',
        'Schlag eine Lösung vor, falls es keinen Ersatztermin gibt.',
      ],
      minWoerter: 60,
      beispielLoesung: 'Sehr geehrte Frau Yilmaz, leider muss ich Ihnen mitteilen, dass ich am Samstag nicht am Erste-Hilfe-Kurs teilnehmen kann, weil meine Firma mich kurzfristig zu einer Messe nach Hamburg schickt. Bitte entschuldigen Sie die späte Absage. Könnten Sie mir bitte sagen, ob es im nächsten Monat einen weiteren Termin gibt? Falls das nicht möglich ist, würde ich meinen Platz gern an eine Kollegin weitergeben, die sich ebenfalls für den Kurs interessiert. Über eine kurze Antwort würde ich mich sehr freuen. Mit freundlichen Grüßen Lucía Romero',
    },
    {
      typ: 'sprechen',
      titel: 'Sprechen',
      anweisung: 'Sprich eine formelle Nachricht auf den Anrufbeantworter. Sprich höchstens 90 Sekunden und halte das Sie-Register durch.',
      aufgabe: 'Du gehst für drei Monate beruflich ins Ausland und möchtest deine Wohnung in dieser Zeit untervermieten. Dein Vermieter, Herr Brandt, ist telefonisch nicht zu erreichen. Hinterlass ihm auf dem Anrufbeantworter eine formelle Nachricht im Sie-Register (höchstens 90 Sekunden).',
      punkte: [
        'Nenne deinen Namen und den Grund deines Anrufs.',
        'Bitte ihn höflich um seine Erlaubnis (Konjunktiv II).',
        'Sag, wann er dich erreichen kann, und bedank dich.',
      ],
      redemittel: [
        'Guten Tag, Herr Brandt, hier spricht …',
        'Ich rufe an, weil …',
        'Wäre es möglich, dass …?',
        'Sie erreichen mich …',
        'Über einen kurzen Rückruf würde ich mich sehr freuen.',
      ],
      maxSekunden: 90,
      beispielLoesung: 'Guten Tag, Herr Brandt, hier spricht Pablo Serrano, Ihr Mieter aus der Gartenstraße acht. Ich rufe an, weil ich Ihnen etwas mitteilen und Sie um etwas bitten möchte. Meine Firma schickt mich von März bis Mai für ein Projekt nach Lissabon. In dieser Zeit würde ich meine Wohnung gern untervermieten, damit sie nicht drei Monate leer steht. Eine Kollegin von mir, Frau Weber, sucht gerade für genau diesen Zeitraum eine Unterkunft. Sie ist sehr zuverlässig und würde sich gern persönlich bei Ihnen vorstellen. Wäre es möglich, dass Sie mir dafür Ihre Erlaubnis geben? Selbstverständlich könnte ich Ihnen alles auch noch schriftlich schicken. Sie erreichen mich heute und morgen ab siebzehn Uhr unter dieser Nummer. Über einen kurzen Rückruf würde ich mich sehr freuen. Vielen Dank im Voraus und auf Wiederhören.',
    },
  ],
}
