// Übungsheft C1 — Lektion 40: Prüfungssimulation 2 + Strategien
export default {
  lektion: 40,
  titel: 'Übungsheft — Generalprobe 2: Gesamtwiederholung',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Abschließende Gesamtwiederholung: Gerundivum und Wortbildung, Konnektoren der Schriftsprache, Konjunktiv II der Vergangenheit, Relativsätze, Modalpartikeln, Nominalstil, Rektion und Kollokationen. Entscheide dich jeweils für die Lösung, die grammatisch korrekt ist und in den Kontext passt.',
      items: [
        {
          typ: 'luecke',
          text: 'Die {1} Kosten übersteigen das Budget deutlich, und eine tragfähige Lösung ist bislang nicht {2}.',
          bank: ['zu erwartenden', 'zu erwartende', 'absehbar', 'absehend'],
          loesungen: { 1: 'zu erwartenden', 2: 'absehbar' },
        },
        {
          typ: 'luecke',
          text: 'Wir verzichten vorerst auf die Investition, {1} die Zinsen ohnehin gerade steigen. {2} sich die Marktlage nicht grundlegend ändert, bleibt es bei dieser Entscheidung.',
          bank: ['zumal', 'Sofern', 'indem', 'Obwohl'],
          loesungen: { 1: 'zumal', 2: 'Sofern' },
        },
        {
          typ: 'mc',
          frage: 'Hätte man die Warnungen rechtzeitig ernst genommen, ___ der Schaden vermieden werden können.',
          optionen: ['wäre', 'würde', 'hätte'],
          loesung: 2,
        },
        {
          typ: 'mc',
          frage: 'Sie hat die Prüfung mit Auszeichnung bestanden, ___ niemand ernsthaft bezweifelt hatte.',
          optionen: ['was', 'das', 'welches'],
          loesung: 0,
        },
        {
          typ: 'mc',
          frage: 'Warum hast du ___ nichts gesagt? Wir hätten dir gern geholfen.',
          optionen: ['ja', 'denn', 'halt'],
          loesung: 1,
          warum: 'En preguntas con palabra interrogativa la partícula típica es **denn** (interés, ligero reproche); *ja* y *halt* solo aparecen en oraciones enunciativas.',
        },
        {
          typ: 'luecke',
          text: 'Die Folgen des Eingriffs sind kaum {1}, und die Sanierungskosten gelten schon jetzt als nahezu {2}.',
          bank: ['absehbar', 'unbezahlbar', 'absichtlich', 'unbezahlt'],
          loesungen: { 1: 'absehbar', 2: 'unbezahlbar' },
        },
        {
          typ: 'luecke',
          text: 'Das Unternehmen kündigte die {1} von 200 Stellen an; als Grund nannte es die anhaltende {2} der Nachfrage.',
          bank: ['Streichung', 'Abschwächung', 'Beseitigung'],
          loesungen: { 1: 'Streichung', 2: 'Abschwächung' },
        },
        {
          typ: 'korrektur',
          optionen: ['Je länger die Verhandlungen dauern, desto teurer das Projekt wird.', 'Je länger die Verhandlungen dauern, desto teurer wird das Projekt.'],
          loesung: 1,
          warum: 'Tras **desto/umso** + comparativo va el verbo conjugado en segunda posición (orden de oración principal), no al final.',
        },
        {
          typ: 'korrektur',
          optionen: ['Das Konzept bedarf einer gründlichen Überarbeitung.', 'Das Konzept bedarf eine gründliche Überarbeitung.'],
          loesung: 0,
          warum: '**bedürfen** rige genitivo: *einer gründlichen Überarbeitung bedürfen*.',
        },
        {
          typ: 'zuordnen',
          links: ['Maßnahmen', 'eine grundsätzliche Frage', 'Bedenken', 'einen Vertrag', 'breiten Anklang'],
          rechts: ['ergreifen', 'aufwerfen', 'äußern', 'schließen', 'finden'],
          loesung: {
            'Maßnahmen': 'ergreifen',
            'eine grundsätzliche Frage': 'aufwerfen',
            'Bedenken': 'äußern',
            'einen Vertrag': 'schließen',
            'breiten Anklang': 'finden',
          },
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies das Essayfragment und entscheide, welche Antwort der Position des Autors entspricht bzw. ob die Aussage richtig oder falsch ist.',
      textTitel: 'Essayfragment: Vom Wert des Scheiterns',
      text: 'Wer eine Fremdsprache als Erwachsener lernt, macht eine Erfahrung, die im Berufsleben selten geworden ist: Er scheitert, und zwar täglich. Man verwechselt Artikel, verfehlt die richtige Präposition, bleibt mitten im Satz stecken. Gerade darin, so meine These, liegt der eigentliche Gewinn des Sprachenlernens.\nIn vielen Unternehmen ist zwar von einer „Fehlerkultur“ die Rede, doch gelebt wird sie kaum. Fehler werden kaschiert statt analysiert; wer Schwächen zugibt, gilt schnell als inkompetent. Das Klassenzimmer dagegen ist ein geschützter Raum, in dem Fehler nicht nur erlaubt, sondern notwendig sind. Denn ohne das Wagnis, einen Satz zu beginnen, dessen Ende man noch nicht kennt, gibt es keinen Fortschritt.\nMan mag einwenden, dass Fehler in einer Sprachprüfung durchaus Punkte kosten. Das ist richtig — und doch verwechselt dieser Einwand Mittel und Zweck. Die Prüfung misst, was man am Ende kann; wie man dorthin gelangt, entscheidet sich vorher, in unzähligen missglückten Versuchen. Wer sich aus Angst vor Fehlern nur noch in sicheren, einfachen Sätzen bewegt, wird nie über ein bestimmtes Niveau hinauskommen. Mut zum Irrtum ist daher keine pädagogische Floskel, sondern eine Lernstrategie.',
      items: [
        {
          typ: 'mc',
          frage: 'Worin sieht der Autor den eigentlichen Gewinn des Sprachenlernens im Erwachsenenalter?',
          optionen: ['In der beruflichen Qualifikation, die ein Sprachnachweis mit sich bringt.', 'In der Erfahrung des alltäglichen Scheiterns, die im Berufsleben selten geworden ist.', 'In der Möglichkeit, sich im Kurs mit Gleichgesinnten auszutauschen.'],
          loesung: 1,
        },
        { typ: 'rf', aussage: 'Nach Ansicht des Autors wird in vielen Unternehmen eine offene Fehlerkultur tatsächlich praktiziert.', loesung: false },
        {
          typ: 'mc',
          frage: 'Wie geht der Autor mit dem Einwand um, dass Fehler in Prüfungen Punkte kosten?',
          optionen: ['Er räumt ihn ein, hält ihn aber für eine Verwechslung von Mittel und Zweck.', 'Er weist ihn als sachlich unzutreffend zurück.', 'Er fordert, Prüfungen künftig fehlertoleranter zu bewerten.'],
          loesung: 0,
        },
        { typ: 'rf', aussage: 'Der Autor warnt davor, sich aus Vorsicht auf einfache Satzstrukturen zu beschränken.', loesung: true },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'text',
      titel: 'Schreiben',
      anweisung: 'Verfasse ein formelles Schreiben (mindestens 80 Wörter). Achte auf einen sachlichen, höflich-bestimmten Ton, eine klare Gliederung und die im formellen Brief üblichen Anrede- und Grußformeln.',
      aufgabe: 'Du hast an einem dreitägigen Weiterbildungsseminar teilgenommen, das in wesentlichen Punkten nicht der Ausschreibung entsprach: Statt der angekündigten Fachreferentin sprang kurzfristig eine Vertretung ein, und ein ganzer Programmpunkt entfiel ersatzlos. Schreibe an den Veranstalter.',
      punkte: [
        'Lege den Sachverhalt dar und benenne die Abweichungen von der Ausschreibung.',
        'Erläutere, welche Folgen diese Abweichungen für dich hatten.',
        'Fordere eine angemessene Lösung, etwa eine teilweise Erstattung, und setze eine Frist.',
      ],
      minWoerter: 80,
      beispielLoesung: 'Sehr geehrte Damen und Herren,\nvom 12. bis 14. März habe ich an Ihrem Seminar „Projektmanagement kompakt“ teilgenommen. Leider muss ich feststellen, dass die Veranstaltung in wesentlichen Punkten nicht Ihrer Ausschreibung entsprach.\nZum einen wurde die angekündigte Fachreferentin ohne vorherige Information durch eine Vertretung ersetzt, die mit den Inhalten erkennbar wenig vertraut war. Zum anderen entfiel das Modul zur Budgetplanung ersatzlos — gerade dieser Programmpunkt war für meine Anmeldung ausschlaggebend, da ich ab dem Sommer die Verantwortung für die Kostenplanung in meiner Abteilung übernehme.\nAngesichts dieser Mängel halte ich eine Erstattung von mindestens einem Drittel der Seminargebühr für angemessen. Ich bitte Sie, mir bis zum 15. April mitzuteilen, wie Sie in dieser Angelegenheit verfahren werden.\nMit freundlichen Grüßen\nDragana Petrović',
    },
  ],
}
