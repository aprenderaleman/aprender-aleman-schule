// Übungsheft B2 — Lektion 16: Nominalisierung ↔ Verbalisierung
export default {
  lektion: 16,
  titel: 'Übungsheft — Nominalisierung ↔ Verbalisierung',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Verbal oder nominal? Wähle die passende Form und achte auf Genus, Kasus und Präposition.',
      items: [
        {
          typ: 'luecke',
          text: '{1} Kochen höre ich gern Podcasts, aber {2} Lernen habe ich mir extra einen ruhigen Schreibtisch gekauft.',
          bank: ['Beim', 'zum', 'Zum', 'beim'],
          loesungen: { 1: 'Beim', 2: 'zum' },
        },
        {
          typ: 'luecke',
          text: 'Das Sommerfest findet {1} Regen im Gemeindesaal statt. {2} des Streiks fahren heute allerdings kaum Busse.',
          bank: ['bei', 'Wegen', 'beim', 'Bei'],
          loesungen: { 1: 'bei', 2: 'Wegen' },
        },
        {
          typ: 'luecke',
          text: 'Vielen Dank für Ihre {1} als Projektleiterin. Nach der {2} Ihrer Unterlagen melden wir uns. Wenn alles passt, erhalten Sie eine {3} zum Vorstellungsgespräch.',
          bank: ['Bewerbung', 'Prüfung', 'Einladung', 'Anmeldung', 'Lösung'],
          loesungen: { 1: 'Bewerbung', 2: 'Prüfung', 3: 'Einladung' },
        },
        { typ: 'mc', frage: '___ Rauchen ist im gesamten Gebäude verboten.', optionen: ['Der', 'Die', 'Das'], loesung: 2 },
        { typ: 'mc', frage: 'Wegen ___ Verspätung des Zuges habe ich den Arzttermin verpasst.', optionen: ['die', 'der', 'den'], loesung: 1 },
        {
          typ: 'mc',
          frage: '„Bei Fragen wenden Sie sich bitte an das Sekretariat.“ Welcher Satz hat dieselbe Bedeutung?',
          optionen: [
            'Wenn Sie Fragen haben, wenden Sie sich bitte an das Sekretariat.',
            'Weil Sie Fragen haben, wendet sich das Sekretariat an Sie.',
            'Obwohl Sie Fragen haben, wenden Sie sich bitte an das Sekretariat.',
          ],
          loesung: 0,
        },
        {
          typ: 'korrektur',
          optionen: ['Für Lernen brauche ich absolute Ruhe.', 'Zum Lernen brauche ich absolute Ruhe.'],
          loesung: 1,
          warum: '«Para + infinitivo» en versión nominal es **zum** + Infinitiv, no *für*.',
        },
        {
          typ: 'korrektur',
          optionen: ['Weil es stark regnete, blieben wir zu Hause.', 'Wegen es stark regnete, blieben wir zu Hause.'],
          loesung: 0,
          warum: '*Wegen* es preposición y va con un Nomen (*wegen des Regens*); para una oración subordinada («porque llovía») necesitas **weil**.',
        },
        {
          typ: 'korrektur',
          optionen: ['Nach dem Prüfung gehen wir etwas trinken.', 'Nach der Prüfung gehen wir etwas trinken.'],
          loesung: 1,
          warum: 'Los Nomen en **-ung** son siempre femeninos: *die Prüfung* → Dativ **der** Prüfung, aunque «el examen» sea masculino.',
        },
        {
          typ: 'zuordnen',
          links: ['wenn es regnet', 'weil sich der Zug verspätet', 'während wir umziehen', 'um zu lernen', 'wenn Sie Fragen haben'],
          rechts: ['zum Lernen', 'bei Fragen', 'wegen der Verspätung des Zuges', 'bei Regen', 'während des Umzugs'],
          loesung: {
            'wenn es regnet': 'bei Regen',
            'weil sich der Zug verspätet': 'wegen der Verspätung des Zuges',
            'während wir umziehen': 'während des Umzugs',
            'um zu lernen': 'zum Lernen',
            'wenn Sie Fragen haben': 'bei Fragen',
          },
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies den Leserbrief. Entscheide, welche Aussage dem Text entspricht.',
      textTitel: 'Leserbrief: Neue Regeln in der Stadtbibliothek',
      text: 'Zu Ihrem Artikel „Mehr Ruhe in der Stadtbibliothek“ möchte ich Folgendes sagen: Ich bin seit Jahren Stammgast, und zum Lernen gibt es für mich keinen besseren Ort. Die neuen Regeln finde ich allerdings nur teilweise sinnvoll. Dass die Nutzung der Gruppenräume ab Juni nur nach vorheriger Anmeldung möglich ist, verstehe ich gut: Bisher gab es bei der Suche nach einem freien Raum ständig Streit. Auch das Verbot von Telefongesprächen im Lesesaal ist vernünftig. Unverständlich finde ich dagegen die Schließung des Cafés. Wegen der fehlenden Pausenmöglichkeit verlassen viele Studierende mittags das Gebäude und kommen nicht mehr zurück. Außerdem wurde die Gebühr bei Verspätung von einem auf zwei Euro pro Tag erhöht — für Schülerinnen und Schüler ist das viel Geld. Mein Vorschlag: Die Bibliothek sollte das Café wenigstens am Wochenende öffnen und bei Jugendlichen unter 18 Jahren auf die höhere Gebühr verzichten. Beim Lesen der neuen Hausordnung hatte ich nämlich den Eindruck, dass niemand an die jüngeren Nutzer gedacht hat. Lukas Brenner',
      items: [
        { typ: 'rf', aussage: 'Lukas kann nachvollziehen, warum man die Gruppenräume künftig reservieren muss.', loesung: true },
        {
          typ: 'mc',
          frage: 'Welche Folge hat die Schließung des Cafés laut Lukas?',
          optionen: [
            'Im Lesesaal wird seitdem mehr telefoniert.',
            'Die Gruppenräume sind mittags ständig besetzt.',
            'Viele Studierende gehen mittags und kommen nicht wieder.',
          ],
          loesung: 2,
        },
        { typ: 'rf', aussage: 'Die Gebühr bei Verspätung ist für alle Nutzer gleich geblieben.', loesung: false },
        {
          typ: 'mc',
          frage: 'Was schlägt Lukas vor?',
          optionen: [
            'das Telefonverbot im Lesesaal wieder abzuschaffen',
            'das Café zumindest am Wochenende zu öffnen',
            'die Gruppenräume wieder ohne Anmeldung freizugeben',
          ],
          loesung: 1,
        },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'text',
      titel: 'Schreiben',
      anweisung: 'Schreib eine formelle E-Mail mit mindestens 60 Wörtern. Verwende mindestens zwei nominale Wendungen (z. B. bei …, wegen …, zum …, nach der …).',
      aufgabe: 'Deine Sprachschule führt neue Regeln ein: Die Anmeldung für Kurse ist nur noch online möglich, Handys sind im Unterricht verboten, und bei kurzfristiger Absage einer Einzelstunde wird eine Gebühr von 20 Euro fällig. Schreib der Schulleitung eine E-Mail und nimm Stellung.',
      punkte: [
        'Nenne eine Regel, die du sinnvoll findest, und begründe deine Meinung.',
        'Beschreibe ein Problem, das durch eine der Regeln entstehen kann.',
        'Mach einen konkreten Vorschlag zur Verbesserung.',
      ],
      minWoerter: 60,
      beispielLoesung: 'Betreff: Neue Regeln an der Sprachschule — Sehr geehrte Damen und Herren, vielen Dank für die Information über die neuen Regeln. Das Handyverbot im Unterricht finde ich sinnvoll, denn beim Lernen lenkt das Handy nur ab. Die Gebühr bei kurzfristiger Absage sehe ich dagegen kritisch: Wegen einer plötzlichen Erkrankung kann jeder einmal eine Stunde absagen müssen. Auch die reine Online-Anmeldung ist für ältere Teilnehmende ohne Computer schwierig. Ich schlage daher vor, bei Krankheit mit ärztlichem Attest auf die Gebühr zu verzichten und zur Anmeldung weiterhin auch das Sekretariat zu öffnen. Mit freundlichen Grüßen, Amira Haddad',
    },
  ],
}
