// Übungsheft C1 — Lektion 09: Präpositionen mit Genitiv
export default {
  lektion: 9,
  titel: 'Übungsheft — Präpositionen mit Genitiv',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Bearbeite die Aufgaben zu den Genitivpräpositionen. Kläre zuerst die logische Beziehung, prüfe dann das Register und zuletzt die Kasusmarkierung.',
      items: [
        {
          typ: 'luecke',
          text: '{1} der anhaltenden Trockenheit rechnen die Landwirte mit erheblichen Ernteausfällen; die Regierung hält jedoch {2} aller Warnungen an ihren Plänen fest.',
          bank: ['Aufgrund', 'ungeachtet', 'Anlässlich', 'zwecks'],
          loesungen: { 1: 'Aufgrund', 2: 'ungeachtet' },
        },
        {
          typ: 'luecke',
          text: 'Der Antrag ist {1} eines Monats einzureichen. Anfragen, die {2} der Geschäftszeiten eingehen, werden erst am folgenden Werktag bearbeitet.',
          bank: ['innerhalb', 'außerhalb', 'während', 'anhand'],
          loesungen: { 1: 'innerhalb', 2: 'außerhalb' },
        },
        {
          typ: 'luecke',
          text: 'Mangels {1} Beweise wurde das Verfahren eingestellt; die Staatsanwaltschaft will es jedoch {2} neuer Erkenntnisse wieder aufnehmen.',
          bank: ['eindeutiger', 'eindeutigen', 'aufgrund', 'mittels'],
          loesungen: { 1: 'eindeutiger', 2: 'aufgrund' },
        },
        {
          typ: 'mc',
          frage: 'Wir bitten Sie um eine kurze Rückmeldung ___ weiterer Planung.',
          optionen: ['anlässlich', 'seitens', 'zwecks'],
          loesung: 2,
        },
        {
          typ: 'mc',
          frage: '___ des 50-jährigen Bestehens lädt der Verein zu einem Empfang ins Rathaus ein.',
          optionen: ['Aufgrund', 'Anlässlich', 'Infolge'],
          loesung: 1,
        },
        {
          typ: 'mc',
          frage: 'Welche Formulierung passt stilistisch am besten in einen argumentativen Essay?',
          optionen: ['Angesichts der steigenden Emissionen sollte der Nahverkehr ausgebaut werden.', 'Zwecks Senkung der Emissionen sollte der Nahverkehr ausgebaut werden.', 'Wegen dem Anstieg der Emissionen sollte der Nahverkehr ausgebaut werden.'],
          loesung: 0,
        },
        {
          typ: 'korrektur',
          optionen: ['Trotz dem schlechten Wetter fand das Konzert unter freiem Himmel statt.', 'Trotz des schlechten Wetters fand das Konzert unter freiem Himmel statt.'],
          loesung: 1,
          warum: 'En la lengua hablada se oye *trotz dem*, pero por escrito rige el **genitivo** siempre que pueda marcarse: *trotz des Wetters*.',
        },
        {
          typ: 'korrektur',
          optionen: ['Dank des Unfalls kam es auf der Autobahn zu langen Staus.', 'Infolge des Unfalls kam es auf der Autobahn zu langen Staus.'],
          loesung: 1,
          warum: '*dank* («gracias a») solo introduce causas **positivas**; para consecuencias negativas usa *infolge*, *aufgrund* o *wegen*.',
        },
        {
          typ: 'korrektur',
          optionen: ['Bezüglich Ihrer Anfrage vom 4. März teilen wir Ihnen Folgendes mit.', 'Bezüglich Ihre Anfrage vom 4. März teilen wir Ihnen Folgendes mit.'],
          loesung: 0,
          warum: 'El español une con un «de» invariable; en alemán el genitivo debe marcarse en el determinante: *bezüglich **Ihrer** Anfrage*.',
        },
        {
          typ: 'zuordnen',
          links: ['anhand', 'anlässlich', 'seitens', 'hinsichtlich', 'ungeachtet'],
          rechts: ['konkreter Beispiele erläutern', 'des Jubiläums einen Festakt ausrichten', 'der Geschäftsführung wurde eine Prüfung zugesagt', 'der Finanzierung besteht noch Klärungsbedarf', 'aller Proteste am Zeitplan festhalten'],
          loesung: {
            'anhand': 'konkreter Beispiele erläutern',
            'anlässlich': 'des Jubiläums einen Festakt ausrichten',
            'seitens': 'der Geschäftsführung wurde eine Prüfung zugesagt',
            'hinsichtlich': 'der Finanzierung besteht noch Klärungsbedarf',
            'ungeachtet': 'aller Proteste am Zeitplan festhalten',
          },
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies die Rezension. Entscheide, welche Antwort dem Text entspricht bzw. ob die Aussage richtig oder falsch ist.',
      textTitel: 'Rezension: „Die Stadt der kurzen Wege“',
      text: 'Mit „Die Stadt der kurzen Wege“ legt die Stadtplanerin Miriam Okafor ein Buch vor, das angesichts überfüllter Straßen und steigender Mieten zur rechten Zeit erscheint. Ihre These: Städte sollten so gestaltet werden, dass alle wichtigen Einrichtungen innerhalb einer Viertelstunde zu Fuß erreichbar sind. Anhand zahlreicher Beispiele aus Kopenhagen, Wien und Barcelona zeigt sie, wie sich bestehende Viertel auf diese Weise umbauen lassen.\nÜberzeugend ist das Buch vor allem dort, wo Okafor konkret wird. Hinsichtlich der Umsetzung scheut sie keine unbequemen Fragen: Wer bezahlt den Umbau? Und was geschieht mit Geschäften, die aufgrund wegfallender Parkplätze Kundschaft verlieren? Ihre Antworten sind differenziert, wenngleich nicht immer erschöpfend.\nSchwächer fällt der Schlussteil aus. Mangels eigener Daten stützt sich die Autorin dort fast ausschließlich auf Studien aus Großstädten; ob ihr Modell auch in ländlichen Regionen funktioniert, bleibt offen. Zudem wiederholt sie manche Argumente, obwohl diese längst überzeugend begründet sind, was die Lektüre unnötig in die Länge zieht.\nDennoch: Wer sich für die Zukunft unserer Städte interessiert, findet hier eine anregende und gut lesbare Grundlage für jede weitere Diskussion.',
      items: [
        {
          typ: 'mc',
          frage: 'Worauf stützt die Autorin ihre These im Hauptteil vor allem?',
          optionen: ['auf eigene Erhebungen in mehreren Städten', 'auf Beispiele aus verschiedenen europäischen Städten', 'auf Umfragen unter Geschäftsleuten'],
          loesung: 1,
        },
        { typ: 'rf', aussage: 'Laut Rezension beantwortet die Autorin die Fragen zur Umsetzung erschöpfend.', loesung: false },
        {
          typ: 'mc',
          frage: 'Welche Schwäche sieht die Rezension im Schlussteil?',
          optionen: ['Die Kosten des Umbaus werden ausgeblendet.', 'Die Beispiele stammen ausschließlich aus einer einzigen Stadt.', 'Ob das Modell auf ländliche Regionen übertragbar ist, bleibt ungeklärt.'],
          loesung: 2,
        },
        { typ: 'rf', aussage: 'Trotz einiger Mängel empfiehlt die Rezension das Buch.', loesung: true },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'text',
      titel: 'Schreiben',
      anweisung: 'Verfasse eine Stellungnahme von mindestens 80 Wörtern. Leite deine Argumente mit passenden Genitivpräpositionen ein und achte auf das Register.',
      aufgabe: 'Eine Wochenzeitung druckt die Rezension ab und fragt ihre Leserschaft: „Ist die Stadt der kurzen Wege auch ein Modell für kleinere Städte?“ Schreib eine Stellungnahme.',
      punkte: [
        'Gib das Konzept der „Stadt der kurzen Wege“ knapp mit eigenen Worten wieder.',
        'Wäge hinsichtlich kleinerer Städte Chancen und Hindernisse gegeneinander ab.',
        'Formuliere eine begründete Position und verwende dabei mindestens drei verschiedene Genitivpräpositionen.',
      ],
      minWoerter: 80,
      beispielLoesung: 'Das Konzept der „Stadt der kurzen Wege“ sieht vor, dass Geschäfte, Schulen und Ärzte innerhalb einer Viertelstunde zu Fuß erreichbar sind.\nAuf den ersten Blick scheinen kleinere Städte dafür ideal: Aufgrund ihrer überschaubaren Größe liegen viele Einrichtungen ohnehin nah beieinander. Angesichts der zunehmenden Schließung von Läden und Arztpraxen droht jedoch gerade dort der umgekehrte Trend. Hinzu kommt, dass mangels eines dichten Busnetzes viele Menschen auf das Auto angewiesen bleiben.\nIch halte das Modell dennoch für übertragbar — allerdings nur, wenn die Kommunen gezielt in Ortskerne investieren. Ungeachtet aller Hindernisse wäre eine lebendige Mitte für kleinere Städte ein großer Gewinn.',
    },
  ],
}
