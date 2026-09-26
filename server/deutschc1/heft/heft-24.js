// Übungsheft C1 — Lektion 24: Schreiben Teil 1 — Der Diskussionsbeitrag
export default {
  lektion: 24,
  titel: 'Übungsheft — Der Diskussionsbeitrag',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Bearbeite die Aufgaben zur Sprache der Argumentation. Achte auf feste Verbindungen, die Rektion der Verben und die Redemittel des Abwägens.',
      items: [
        {
          typ: 'luecke',
          text: 'Die {1} der Reform verweisen darauf, dass die Verwaltungskosten sinken würden; {2} hingegen wenden ein, dass die Qualität der Beratung darunter leide.',
          bank: ['Befürworter', 'Kritiker', 'Standpunkte', 'Maßnahmen'],
          loesungen: { 1: 'Befürworter', 2: 'Kritiker' },
        },
        {
          typ: 'luecke',
          text: 'Dieses Argument lässt sich leicht {1}, denn die zugrunde liegenden Zahlen sind veraltet. Ich {2} daher für einen Mittelweg.',
          bank: ['entkräften', 'plädiere', 'überwiege', 'abwägen'],
          loesungen: { 1: 'entkräften', 2: 'plädiere' },
        },
        {
          typ: 'zuordnen',
          links: ['eine These', 'wirksame Maßnahmen', 'einen Mittelweg', 'Vor- und Nachteile gegeneinander', 'sich kritisch mit einem Thema'],
          rechts: ['aufstellen', 'ergreifen', 'wählen', 'abwägen', 'auseinandersetzen'],
          loesung: { 'eine These': 'aufstellen', 'wirksame Maßnahmen': 'ergreifen', 'einen Mittelweg': 'wählen', 'Vor- und Nachteile gegeneinander': 'abwägen', 'sich kritisch mit einem Thema': 'auseinandersetzen' },
        },
        {
          typ: 'mc',
          frage: 'Zwar trifft es zu, dass die Umstellung anfangs teuer ist, ___ rechnet sie sich langfristig.',
          optionen: ['obwohl', 'dennoch', 'trotz'],
          loesung: 1,
        },
        {
          typ: 'mc',
          frage: 'Dieses Argument ___ an Gewicht, wenn man bedenkt, dass die Erhebung nur zwei Monate umfasste.',
          optionen: ['büßt', 'verliert', 'nimmt'],
          loesung: 1,
        },
        {
          typ: 'luecke',
          text: 'Ein pauschales Verbot wäre verfehlt, {1} digitale Kompetenzen im Berufsleben zunehmend unverzichtbar werden. Es {2} der Schule die Chance, einen verantwortungsvollen Umgang überhaupt zu vermitteln.',
          bank: ['zumal', 'nähme', 'obwohl', 'entkräftete'],
          loesungen: { 1: 'zumal', 2: 'nähme' },
        },
        {
          typ: 'korrektur',
          optionen: ['Nach meiner Meinung nach ist ein generelles Verbot unverhältnismäßig.', 'Meiner Meinung nach ist ein generelles Verbot unverhältnismäßig.'],
          loesung: 1,
          warum: '*nach* aparece **una sola vez**: pospuesto (*Meiner Meinung nach*) o antepuesto (*Nach meiner Meinung*). La doble preposición es un calco de «según mi opinión».',
        },
        {
          typ: 'korrektur',
          optionen: ['Befürworter verweisen zu Recht auf die sinkenden Unfallzahlen.', 'Befürworter verweisen zu Recht an die sinkenden Unfallzahlen.'],
          loesung: 0,
          warum: '*verweisen* («aducir, remitir a») rige **auf** + acusativo.',
        },
        {
          typ: 'korrektur',
          optionen: ['Der Beitrag setzt sich gründlich über die Einwände auseinander.', 'Der Beitrag setzt sich gründlich mit den Einwänden auseinander.'],
          loesung: 1,
          warum: '*sich auseinandersetzen* va siempre con **mit** + dativo. *über* es interferencia de «discutir sobre».',
        },
        {
          typ: 'satzbau',
          woerter: ['überwiegen', 'Sicht', 'Alles', 'die', 'in', 'meiner', 'allem', 'aus', 'Vorteile'],
          loesung: 'Alles in allem überwiegen aus meiner Sicht die Vorteile.',
          alt: ['Alles in allem überwiegen die Vorteile aus meiner Sicht.'],
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies das Essayfragment. Entscheide, welche Antwort dem Text entspricht bzw. ob die Aussage richtig oder falsch ist.',
      textTitel: 'Essayfragment: Wählen mit sechzehn?',
      text: 'Kaum eine demokratiepolitische Streitfrage wird so zuverlässig wiederbelebt wie die nach dem Wahlalter. Die Befürworter einer Absenkung auf sechzehn Jahre verweisen darauf, dass Jugendliche von politischen Entscheidungen — man denke an Rente oder Klimaschutz — am längsten betroffen seien. Wer die Folgen trage, müsse auch mitbestimmen dürfen. Kritiker wenden ein, Sechzehnjährigen fehle die nötige Reife; zudem seien sie leichter zu beeinflussen.\nZwar ist der zweite Einwand nicht völlig aus der Luft gegriffen. Er verliert jedoch an Gewicht, wenn man bedenkt, dass sich auch Erwachsene keineswegs immun gegen Stimmungsmache zeigen. Stichhaltiger erscheint mir ein Argument, das in der Debatte selten fällt: Wer mit sechzehn zum ersten Mal wählt, lebt meist noch im Elternhaus und geht zur Schule — dort kann politische Bildung unmittelbar ansetzen. Erfahrungen aus Ländern, in denen bereits ab sechzehn gewählt wird, deuten darauf hin, dass junge Erstwähler nicht seltener, sondern eher häufiger zur Wahl gehen.\nIch plädiere daher für die Absenkung — allerdings nicht als isolierte Maßnahme. Ohne einen Politikunterricht, der diesen Namen verdient, bliebe sie eine symbolische Geste.',
      items: [
        { typ: 'rf', aussage: 'Die Befürworter argumentieren, Jugendliche seien von politischen Entscheidungen besonders lange betroffen.', loesung: true },
        {
          typ: 'mc',
          frage: 'Wie geht der Verfasser mit dem Einwand um, Sechzehnjährige seien leicht zu beeinflussen?',
          optionen: ['Er weist ihn als völlig haltlos zurück.', 'Er gesteht ihm einen wahren Kern zu, relativiert ihn aber durch den Vergleich mit Erwachsenen.', 'Er macht ihn sich zu eigen und spricht sich deshalb gegen die Absenkung aus.'],
          loesung: 1,
        },
        {
          typ: 'mc',
          frage: 'Welches Argument hält der Verfasser für besonders überzeugend?',
          optionen: ['Bei sechzehnjährigen Erstwählern kann die politische Bildung in der Schule unmittelbar ansetzen.', 'Jugendliche tragen die Folgen politischer Entscheidungen am längsten.', 'Sechzehnjährige interessieren sich stärker für Politik als Erwachsene.'],
          loesung: 0,
        },
        { typ: 'rf', aussage: 'Der Verfasser hält die Absenkung des Wahlalters für sich genommen für ausreichend.', loesung: false },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'text',
      titel: 'Schreiben',
      anweisung: 'Verfasse einen Diskussionsbeitrag mit mindestens 80 Wörtern. Wäge sichtbar ab, entkräfte mindestens ein Gegenargument mit einer Konzession und setze pro Absatz höchstens ein Redemittel aus der Lektion ein.',
      aufgabe: 'Im Forum einer überregionalen Zeitung wird die Frage diskutiert: „Sollten große Supermärkte gesetzlich verpflichtet werden, unverkaufte Lebensmittel zu spenden?“ Schreibe einen Beitrag.',
      punkte: [
        'Führe in die Streitfrage ein und erläutere, warum sie derzeit an Bedeutung gewinnt.',
        'Nenne ein Argument für die Spendenpflicht und ein Gegenargument und wäge beide gegeneinander ab.',
        'Beziehe begründet Position, gern in Form eines Mittelwegs.',
      ],
      minWoerter: 80,
      beispielLoesung: 'Kaum ein Thema wird derzeit so kontrovers diskutiert wie die Frage, ob große Supermärkte verpflichtet werden sollten, unverkaufte Lebensmittel zu spenden. Angesichts der Mengen, die täglich im Müll landen, ist diese Debatte längst überfällig.\nEin gewichtiges Argument für eine solche Pflicht ist die Verschwendung selbst: Einwandfreie Lebensmittel wegzuwerfen, während andere Menschen auf Unterstützung angewiesen sind, lässt sich ethisch kaum rechtfertigen. Kritiker wenden ein, dass gemeinnützige Ausgabestellen schon heute an ihre logistischen Grenzen stoßen. Zwar trifft dieser Einwand zu, dennoch spricht er nicht gegen die Pflicht, sondern für eine bessere Ausstattung der Abnehmer.\nIch plädiere daher für einen Mittelweg: eine Spendenpflicht für große Märkte, verbunden mit staatlicher Förderung für Transport und Kühlung. Nur so wird aus einer guten Absicht eine wirksame Maßnahme.',
    },
  ],
}
