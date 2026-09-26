// Übungsheft B2 — Lektion 41: Prüfungssimulation 1 + Korrektur
export default {
  lektion: 41,
  titel: 'Übungsheft — Prüfungssimulation 1',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Gemischte Wiederholung der B2-Grammatik: Wähle jeweils die passende Lösung.',
      items: [
        {
          typ: 'luecke',
          text: 'Die Wohnung war {1} günstig {2} zentral gelegen, deshalb haben wir sofort den Mietvertrag unterschrieben.',
          bank: ['sowohl', 'als auch', 'weder', 'noch'],
          loesungen: { 1: 'sowohl', 2: 'als auch' },
        },
        {
          typ: 'luecke',
          text: 'Wenn ich früher losgefahren {1}, {2} ich den Anschluss nicht verpasst.',
          bank: ['wäre', 'hätte', 'würde', 'war'],
          loesungen: { 1: 'wäre', 2: 'hätte' },
        },
        {
          typ: 'luecke',
          text: 'Der Antrag muss bis Freitag {1} werden. Die Frist lässt sich leider nicht {2}.',
          bank: ['eingereicht', 'verlängern', 'verlängert', 'einreichen'],
          loesungen: { 1: 'eingereicht', 2: 'verlängern' },
        },
        {
          typ: 'luecke',
          text: '{1} des schlechten Wetters fand das Konzert statt, {2} die Veranstalter hatten ein großes Zelt aufgebaut.',
          bank: ['Trotz', 'Wegen', 'denn', 'weil'],
          loesungen: { 1: 'Trotz', 2: 'denn' },
        },
        {
          typ: 'mc',
          frage: 'Der Sprecher erklärte, das Unternehmen ___ zu weiteren Gesprächen bereit.',
          optionen: ['sei', 'seien', 'sein'],
          loesung: 0,
        },
        {
          typ: 'mc',
          frage: 'Das ist die Kollegin, ___ Hilfe ich das Projekt rechtzeitig abschließen konnte.',
          optionen: ['mit dessen', 'mit der', 'mit deren'],
          loesung: 2,
        },
        {
          typ: 'zuordnen',
          links: ['weil es regnet', 'obwohl es regnet', 'wenn es regnet', 'während es regnet', 'bevor es regnet'],
          rechts: ['wegen des Regens', 'trotz des Regens', 'bei Regen', 'während des Regens', 'vor dem Regen'],
          loesung: {
            'weil es regnet': 'wegen des Regens',
            'obwohl es regnet': 'trotz des Regens',
            'wenn es regnet': 'bei Regen',
            'während es regnet': 'während des Regens',
            'bevor es regnet': 'vor dem Regen',
          },
        },
        {
          typ: 'korrektur',
          optionen: ['Das von vielen Touristen besuchte Museum schließt im Winter.', 'Das von vielen Touristen besuchende Museum schließt im Winter.'],
          loesung: 0,
          warum: 'El museo **es visitado** (sentido pasivo) → Partizip II **besuchte**; *besuchende* (Partizip I) diría que el museo visita.',
        },
        {
          typ: 'korrektur',
          optionen: ['Es ist wichtig, beim Reisen rechtzeitig zu umsteigen.', 'Es ist wichtig, beim Reisen rechtzeitig umzusteigen.'],
          loesung: 1,
          warum: 'Con verbos separables el **zu** va entre prefijo y raíz: **umzusteigen**.',
        },
        {
          typ: 'satzbau',
          woerter: ['anrufen', 'hättest', 'Du', 'sollen', 'früher', 'mich'],
          loesung: 'Du hättest mich früher anrufen sollen.',
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies den Kommentar und löse die Aufgaben.',
      textTitel: 'Kommentar: Ein Jahr autofreie Innenstadt',
      text: 'Seit einem Jahr ist die Innenstadt von Kornbach am Wochenende autofrei — und die Bilanz fällt gemischter aus, als die Stadtverwaltung behauptet. Zwar sind die Straßen ruhiger geworden, und auf den Plätzen, die früher als Parkflächen genutzt wurden, sitzen heute Familien in der Sonne. Doch viele Einzelhändler klagen über sinkende Umsätze. Besonders ältere Kundinnen und Kunden, die nicht mehr gut zu Fuß sind, kaufen inzwischen lieber im Einkaufszentrum am Stadtrand ein. Die Stadt verweist darauf, dass die Busse samstags nun im Zehn-Minuten-Takt fahren. Das ist ein richtiger Schritt, reicht aber nicht aus. Wer schwere Einkäufe nach Hause tragen muss, braucht mehr als einen häufigen Bus. Sinnvoll wäre ein Lieferservice, der von den Geschäften gemeinsam organisiert und von der Stadt finanziell unterstützt wird. Die autofreie Innenstadt sollte also nicht abgeschafft, sondern verbessert werden. Sonst droht ein gut gemeintes Projekt an seinen eigenen Schwächen zu scheitern.',
      items: [
        {
          typ: 'mc',
          frage: 'Wie bewertet der Autor die Bilanz nach einem Jahr?',
          optionen: ['Als durchweg positiv.', 'Als weniger eindeutig, als die Stadt sie darstellt.', 'Als eindeutig negativ.'],
          loesung: 1,
        },
        { typ: 'rf', aussage: 'Manche ältere Menschen kaufen seit der Umstellung lieber am Stadtrand ein.', loesung: true },
        { typ: 'rf', aussage: 'Der Autor hält den dichteren Bustakt für eine ausreichende Lösung.', loesung: false },
        {
          typ: 'mc',
          frage: 'Was schlägt der Autor vor?',
          optionen: ['Autos wieder in die Innenstadt zu lassen.', 'Am Stadtrand mehr Parkplätze zu bauen.', 'Einen gemeinsamen Lieferservice der Geschäfte einzurichten.'],
          loesung: 2,
        },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'text',
      titel: 'Schreiben',
      anweisung: 'Schreib einen Forumsbeitrag mit mindestens 60 Wörtern und geh auf alle drei Punkte ein.',
      aufgabe: 'Im Online-Forum deiner Lokalzeitung wird diskutiert, ob die Innenstadt deiner Stadt dauerhaft autofrei werden soll. Beteilige dich an der Diskussion.',
      punkte: [
        'Äußere deine Meinung und begründe sie.',
        'Nenne einen Vorteil und einen Nachteil einer autofreien Innenstadt.',
        'Mach einen Vorschlag, wie man die Nachteile verringern könnte.',
      ],
      minWoerter: 60,
      beispielLoesung: 'Ich bin grundsätzlich für eine autofreie Innenstadt, weil sie die Lebensqualität deutlich erhöhen würde. Ein großer Vorteil ist, dass die Luft sauberer wird und die Straßen wieder den Menschen gehören: Kinder könnten sicher spielen, und Cafés hätten mehr Platz. Andererseits dürfen wir nicht vergessen, dass ältere und kranke Menschen auf das Auto angewiesen sind. Deshalb schlage ich vor, dass die Busse häufiger fahren und dass es einen günstigen Lieferservice für schwere Einkäufe gibt. Außerdem sollten Menschen mit Behinderung weiterhin mit dem Auto in die Innenstadt fahren dürfen. So hätten am Ende alle etwas davon.',
    },
  ],
}
