// Übungsheft C1 — Lektion 39: Prüfungssimulation 1 + Korrektur
export default {
  lektion: 39,
  titel: 'Übungsheft — Generalprobe 1: Gesamtwiederholung',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Gesamtwiederholung des C1-Kurses: Nominalstil, Präpositionen mit Genitiv, Konnektoren, indirekte Rede, subjektive Modalverben, Partizipialattribute, Passiversatzformen, Relativsätze und Funktionsverbgefüge. Wähle jeweils die Lösung, die grammatisch korrekt ist und dem Kontext entspricht.',
      items: [
        {
          typ: 'luecke',
          text: 'Nach dem erfolgreichen {1} der Verhandlungen und eingehender {2} aller Einwände wurde der Vertrag schließlich unterzeichnet.',
          bank: ['Abschluss', 'Prüfung', 'Schließung'],
          loesungen: { 1: 'Abschluss', 2: 'Prüfung' },
        },
        {
          typ: 'luecke',
          text: '{1} aller Bedenken hält die Stadt an ihren Plänen fest: {2} eines Neubaus soll die alte Brücke nun saniert werden.',
          bank: ['Ungeachtet', 'Anstelle', 'Infolge', 'Mittels'],
          loesungen: { 1: 'Ungeachtet', 2: 'Anstelle' },
        },
        {
          typ: 'luecke',
          text: 'Die geplante Reform ist {1} kostspielig, {2} auch sozial unausgewogen.',
          bank: ['nicht nur', 'sondern', 'weder', 'doch'],
          loesungen: { 1: 'nicht nur', 2: 'sondern' },
        },
        {
          typ: 'mc',
          frage: 'In welchem Satz ist die Ersatzform mit Konjunktiv II in der indirekten Rede normgerecht erforderlich?',
          optionen: ['Der Autor behauptet, er hätte neue Daten.', 'Die Autorin behauptet, sie hätte neue Daten.', 'Die Forschenden behaupten, sie hätten neue Daten.'],
          loesung: 2,
        },
        {
          typ: 'mc',
          frage: 'Der Minister ___ von den Zahlungen gewusst haben — so berichten jedenfalls mehrere Zeitungen übereinstimmend.',
          optionen: ['soll', 'will', 'muss'],
          loesung: 0,
        },
        {
          typ: 'luecke',
          text: 'Die von der Regierung im vergangenen Jahr {1} Maßnahmen haben die {2} Erwartungen bei Weitem nicht erfüllt.',
          bank: ['beschlossenen', 'beschließenden', 'hochgesteckten', 'hochsteckenden'],
          loesungen: { 1: 'beschlossenen', 2: 'hochgesteckten' },
        },
        {
          typ: 'korrektur',
          optionen: ['Die Frage lässt sich nicht ohne Weiteres beantwortet werden.', 'Die Frage lässt sich nicht ohne Weiteres beantworten.'],
          loesung: 1,
          warum: '*sich lassen* + infinitivo activo ya tiene valor pasivo-modal (= *kann beantwortet werden*); no se combina con *werden*.',
        },
        {
          typ: 'luecke',
          text: 'Die Autorin, {1} jüngster Roman in mehrere Sprachen übersetzt wurde, liest morgen im Literaturhaus, {2} Programm diesmal besonders vielfältig ist.',
          bank: ['deren', 'dessen', 'derer', 'die'],
          loesungen: { 1: 'deren', 2: 'dessen' },
        },
        {
          typ: 'zuordnen',
          links: ['in Frage stellen', 'zur Verfügung stellen', 'in Kauf nehmen', 'zum Ausdruck bringen', 'in Erwägung ziehen'],
          rechts: ['bezweifeln', 'bereitstellen', 'hinnehmen', 'ausdrücken', 'erwägen'],
          loesung: {
            'in Frage stellen': 'bezweifeln',
            'zur Verfügung stellen': 'bereitstellen',
            'in Kauf nehmen': 'hinnehmen',
            'zum Ausdruck bringen': 'ausdrücken',
            'in Erwägung ziehen': 'erwägen',
          },
        },
        {
          typ: 'satzbau',
          woerter: ['lohnt', 'teuer', 'Zwar', 'sich', 'er', 'doch', 'Plan', 'ist', 'der'],
          loesung: 'Zwar ist der Plan teuer, doch er lohnt sich.',
          alt: ['Zwar ist der Plan teuer, doch lohnt er sich.'],
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies den Artikelauszug und entscheide, welche Antwort dem Text entspricht bzw. ob die Aussage richtig oder falsch ist.',
      textTitel: 'Artikelauszug: Weniger Stunden, gleiche Leistung?',
      text: 'Seit einem Jahr erprobt die Verwaltung einer mittelgroßen Stadt in Nordhessen die Viertagewoche: Bei vollem Lohn arbeiten rund 150 Beschäftigte 36 statt 40 Stunden, verteilt auf vier Tage. Die nun vorgelegte Zwischenbilanz fällt überwiegend positiv aus. Die Zahl der Krankheitstage sei deutlich zurückgegangen, heißt es im Bericht, und offene Stellen ließen sich schneller besetzen als zuvor. Die Bürgerinnen und Bürger hätten von den verlängerten Öffnungszeiten an den verbleibenden Tagen sogar profitiert.\nGanz so eindeutig, wie die Stadtspitze es darstellt, ist das Ergebnis allerdings nicht. Da die Teilnahme freiwillig war, dürften sich vor allem besonders motivierte Beschäftigte gemeldet haben — ein Umstand, der die Aussagekraft der Zahlen erheblich schmälert. Zudem räumt der Bericht ein, dass in zwei Abteilungen Überstunden angefallen sind, die in der Bilanz nicht auftauchen.\nDie Personalvertretung fordert dennoch, das Modell auf die gesamte Verwaltung auszuweiten. Der Kämmerer mahnt hingegen zur Vorsicht: Bevor man eine solche Entscheidung treffe, müsse eine unabhängige Auswertung vorliegen, die auch die Kosten für zusätzliches Personal berücksichtige.',
      items: [
        { typ: 'rf', aussage: 'Die Beschäftigten im Modellversuch verdienen weniger als vor dessen Beginn.', loesung: false },
        {
          typ: 'mc',
          frage: 'Warum ist die Aussagekraft der Zwischenbilanz dem Artikel zufolge eingeschränkt?',
          optionen: ['Weil der Versuch zu kurz gelaufen ist, um verlässliche Aussagen über Krankheitstage zu treffen.', 'Weil die Bilanz nicht von der Stadtspitze, sondern von der Personalvertretung erstellt wurde.', 'Weil sich vermutlich vor allem überdurchschnittlich motivierte Beschäftigte freiwillig gemeldet haben.'],
          loesung: 2,
        },
        { typ: 'rf', aussage: 'Laut Bericht sind in einigen Abteilungen Überstunden angefallen, die in der Bilanz nicht berücksichtigt wurden.', loesung: true },
        {
          typ: 'mc',
          frage: 'Welche Haltung nimmt der Kämmerer ein?',
          optionen: ['Er lehnt die Viertagewoche grundsätzlich ab, weil sie zu teuer sei.', 'Er will vor einer Ausweitung eine unabhängige Auswertung abwarten, die auch Personalkosten einbezieht.', 'Er befürwortet eine sofortige Ausweitung, sofern die Beschäftigten zustimmen.'],
          loesung: 1,
        },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'text',
      titel: 'Schreiben',
      anweisung: 'Verfasse eine Textzusammenfassung mit Kommentar (mindestens 80 Wörter). Gib die Positionen des Artikels in indirekter Rede wieder und trenne Zusammenfassung und eigene Meinung deutlich voneinander.',
      aufgabe: 'Fasse den Artikelauszug „Weniger Stunden, gleiche Leistung?“ aus Teil 2 zusammen und nimm anschließend Stellung zur Frage, ob die Viertagewoche auf die gesamte Verwaltung ausgeweitet werden sollte.',
      punkte: [
        'Gib die wichtigsten Ergebnisse der Zwischenbilanz sachlich wieder.',
        'Stelle die Einwände und die Positionen von Personalvertretung und Kämmerer dar.',
        'Beziehe begründet Stellung und formuliere eine Empfehlung.',
      ],
      minWoerter: 80,
      beispielLoesung: 'Der Artikel berichtet über einen einjährigen Modellversuch zur Viertagewoche in einer Stadtverwaltung in Nordhessen. Laut Zwischenbilanz sei die Zahl der Krankheitstage deutlich gesunken, offene Stellen ließen sich schneller besetzen, und auch die Bürger hätten von längeren Öffnungszeiten profitiert. Der Autor gibt jedoch zu bedenken, dass sich vermutlich vor allem motivierte Beschäftigte freiwillig gemeldet hätten; zudem seien Überstunden in der Bilanz nicht erfasst. Während die Personalvertretung eine Ausweitung fordere, verlange der Kämmerer zunächst eine unabhängige Auswertung.\nMeines Erachtens ist die Position des Kämmerers überzeugender. Die Ergebnisse sind zwar ermutigend, doch solange die Stichprobe verzerrt ist, lässt sich kaum abschätzen, wie das Modell in allen Abteilungen wirken würde. Ich plädiere daher für eine zweite, wissenschaftlich begleitete Testphase, bevor eine endgültige Entscheidung getroffen wird.',
    },
  ],
}
