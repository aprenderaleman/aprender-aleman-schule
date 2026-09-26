// Übungsheft C1 — Lektion 17: Lesen: Der Lückentext (Teil 2)
export default {
  lektion: 17,
  titel: 'Übungsheft — Der Lückentext',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Arbeite wie im Lückentext der Prüfung: Bestimme zuerst Wortart, Kasus und Verbstellung, prüfe dann Logik und Kollokation und entscheide dich für die einzige normgerechte Lösung.',
      items: [
        {
          typ: 'luecke',
          text: '{1} die Wortliste zwölf Wörter enthält, kommen für eine einzelne Lücke meist nur zwei oder drei infrage. {2} lohnt es sich, vor jeder inhaltlichen Überlegung die Wortart zu bestimmen.',
          bank: ['Obwohl', 'Deshalb', 'Denn', 'Trotzdem', 'Weil'],
          loesungen: { 1: 'Obwohl', 2: 'Deshalb' },
        },
        {
          typ: 'luecke',
          text: '{1} des knappen Zeitbudgets solltest du an keiner Lücke hängen bleiben. {2} gezieltes Filtern lassen sich die meisten Kandidaten rasch ausschließen.',
          bank: ['Angesichts', 'Durch', 'Trotz', 'Mit'],
          loesungen: { 1: 'Angesichts', 2: 'Durch' },
        },
        {
          typ: 'luecke',
          text: 'Wer die {1} eines Verbs kennt, weiß sofort, welche Präposition folgen muss. Steht nach der Lücke ein Nomen, verrät sein {2}, welche Präpositionen überhaupt infrage kommen.',
          bank: ['Rektion', 'Kasus', 'Wortart', 'Verbstellung'],
          loesungen: { 1: 'Rektion', 2: 'Kasus' },
        },
        {
          typ: 'mc',
          frage: 'Weil die Nachfrage deutlich zurückgegangen ist, wurde das Angebot gekürzt. → Aufgrund des deutlichen ___ der Nachfrage wurde das Angebot gekürzt.',
          optionen: ['Rückgangs', 'Rückgang', 'Rückgehen'],
          loesung: 0,
        },
        {
          typ: 'mc',
          frage: 'Beide Kandidaten klingen ähnlich; ___ passt nur einer von ihnen grammatisch in die Lücke.',
          optionen: ['obgleich', 'gleichwohl', 'wohingegen'],
          loesung: 1,
        },
        {
          typ: 'mc',
          frage: 'Mehrere Fachleute haben erhebliche Bedenken gegen das Vorhaben ___.',
          optionen: ['gesagt', 'gemacht', 'geäußert'],
          loesung: 2,
        },
        {
          typ: 'korrektur',
          optionen: ['Die Maßnahme hat erheblich für die Senkung der Kosten beigetragen.', 'Die Maßnahme hat erheblich zur Senkung der Kosten beigetragen.'],
          loesung: 1,
          warum: 'La rección es **zu etwas beitragen** (*zur Senkung*); *für* es calco de «contribuir para».',
        },
        {
          typ: 'korrektur',
          optionen: ['Obwohl die Studie klein ist, liefert sie wertvolle Hinweise.', 'Trotzdem die Studie klein ist, liefert sie wertvolle Hinweise.'],
          loesung: 0,
          warum: 'En la norma escrita **trotzdem** es un adverbio (el verbo va justo detrás: *Trotzdem liefert sie …*); como subjunción solo aparece en registro coloquial. Para una subordinada con verbo final se necesita **obwohl**.',
        },
        {
          typ: 'zuordnen',
          links: ['Kritik', 'Maßnahmen', 'Konsequenzen', 'eine Rolle', 'zur Verfügung', 'eine Studie'],
          rechts: ['üben', 'ergreifen', 'ziehen', 'spielen', 'stehen', 'durchführen'],
          loesung: {
            'Kritik': 'üben',
            'Maßnahmen': 'ergreifen',
            'Konsequenzen': 'ziehen',
            'eine Rolle': 'spielen',
            'zur Verfügung': 'stehen',
            'eine Studie': 'durchführen',
          },
        },
        {
          typ: 'satzbau',
          woerter: ['kommen', 'Welche', 'für', 'Wörter', 'diese', 'Lücke', 'infrage'],
          loesung: 'Welche Wörter kommen für diese Lücke infrage?',
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies die Rezension. Entscheide, welche Antwort dem Text entspricht bzw. ob die Aussage richtig oder falsch ist. Unterscheide dabei zwischen der Position der Buchautorin und der Einschätzung der Rezension.',
      textTitel: 'Rezension: „Zwischen den Zeilen“ — ein Ratgeber zum Lückentext',
      text: 'Wer sich auf eine Sprachprüfung vorbereitet, stößt auf eine Flut von Ratgebern. Henrike Aldags schmaler Band „Zwischen den Zeilen“ hebt sich wohltuend davon ab, weil er sich auf eine einzige Aufgabe konzentriert: den Lückentext. Aldag, die viele Jahre als Prüferin tätig war, vertritt eine klare These: Der Lückentext sei weniger ein Lese- als ein Grammatiktest. Wer vor jeder inhaltlichen Überlegung Wortart, Kasus und Verbstellung bestimme, könne die meisten Kandidaten der Wortliste in Sekunden ausschließen. Überzeugend sind vor allem die Kapitel zu Konnektoren und Präpositionen, in denen die Autorin zahlreiche Beispiele Schritt für Schritt auflöst.\nWeniger gelungen ist der Abschnitt über Kollokationen. Hier beschränkt sich Aldag auf lange Listen, ohne zu zeigen, wie man feste Verbindungen im Zusammenhang erkennt — gerade dort, wo die grammatische Analyse an ihre Grenzen stößt, hätte man sich mehr Anleitung gewünscht. Auch der Anspruch, jeder Lückentext lasse sich in acht Minuten lösen, dürfte manche Leser eher entmutigen als anspornen. Dennoch: Wer das Buch gründlich durcharbeitet, wird dem Lückentext in der Prüfung mit deutlich mehr Gelassenheit begegnen.',
      items: [
        { typ: 'rf', aussage: 'Die Buchautorin hält den Lückentext in erster Linie für eine Prüfung des Leseverstehens.', loesung: false },
        {
          typ: 'mc',
          frage: 'Was bemängelt die Rezension am Abschnitt über Kollokationen?',
          optionen: ['Er enthält zu wenige Beispiele für feste Verbindungen.', 'Er zeigt nicht, wie man Kollokationen im Kontext erkennt.', 'Er widerspricht den Kapiteln über Präpositionen.'],
          loesung: 1,
        },
        {
          typ: 'mc',
          frage: 'Wie beurteilt die Rezension die Zeitvorgabe von acht Minuten?',
          optionen: ['Sie sei für geübte Leser zu großzügig bemessen.', 'Sie entspreche genau den Vorgaben der Prüfung.', 'Sie könne auf manche Leser eher demotivierend wirken.'],
          loesung: 2,
        },
        { typ: 'rf', aussage: 'Henrike Aldag verfügt über langjährige Erfahrung als Prüferin.', loesung: true },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'text',
      titel: 'Schreiben',
      anweisung: 'Verfasse eine formelle E-Mail (mindestens 80 Wörter). Achte auf eine angemessene Anrede und Grußformel, einen sachlichen Ton und eine klare Gliederung deines Anliegens.',
      aufgabe: 'Du besuchst an deiner Sprachschule einen Vorbereitungskurs für das Zertifikat C1. Schreibe an die Kursleiterin, Frau Dr. Okonkwo, und regst an, den Lückentext im Kurs gezielter zu trainieren.',
      punkte: [
        'Schildere, welche Schwierigkeiten du und andere Teilnehmende beim Lückentext haben.',
        'Unterbreite einen konkreten Vorschlag, wie dieser Prüfungsteil im Unterricht geübt werden könnte.',
        'Bitte um eine Rückmeldung und schließe mit einer angemessenen Grußformel.',
      ],
      minWoerter: 80,
      beispielLoesung: 'Sehr geehrte Frau Dr. Okonkwo,\nzunächst möchte ich mich für Ihren abwechslungsreichen Unterricht bedanken. Mit Blick auf die Prüfung erlaube ich mir jedoch eine Anregung. Wie mehreren anderen Teilnehmenden bereitet mir der Lückentext nach wie vor große Schwierigkeiten: Wir verlieren zu viel Zeit, weil wir die Lücken intuitiv statt systematisch füllen, und scheitern häufig an der Rektion von Verben und an festen Kollokationen.\nDaher würde ich vorschlagen, jede Woche einen Lückentext unter Prüfungsbedingungen zu bearbeiten und anschließend gemeinsam zu besprechen, welche Indizien — Kasus, Verbstellung, Bezugswort — zur Lösung geführt haben. Ergänzend könnten wir eine Liste der wichtigsten Kollokationen anlegen.\nÜber eine kurze Rückmeldung, ob sich dieser Vorschlag umsetzen ließe, würde ich mich sehr freuen.\nMit freundlichen Grüßen\nLucía Fernández',
    },
  ],
}
