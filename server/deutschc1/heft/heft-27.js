// Übungsheft C1 — Lektion 27: Sprechen Teil 1 — Der Vortrag
export default {
  lektion: 27,
  titel: 'Übungsheft — Der Vortrag',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Bearbeite die Aufgaben zur Sprache des mündlichen Vortrags. Achte auf feste Verb-Nomen-Verbindungen, die Rektion der Verben, hörbare Gliederungssignale und den Unterschied zwischen geschriebenem und gesprochenem Stil.',
      items: [
        {
          typ: 'luecke',
          text: 'Zunächst {1} ich auf die Vorteile ein, anschließend auf die Risiken, und zum Schluss {2} ich ein kurzes Fazit.',
          bank: ['gehe', 'komme', 'ziehe', 'halte'],
          loesungen: { 1: 'gehe', 2: 'ziehe' },
        },
        {
          typ: 'luecke',
          text: 'Lassen Sie mich diesen {1} an einem Beispiel aus meinem Heimatland {2}.',
          bank: ['Aspekt', 'Tendenz', 'veranschaulichen', 'anführen'],
          loesungen: { 1: 'Aspekt', 2: 'veranschaulichen' },
        },
        {
          typ: 'luecke',
          text: 'Abschließend lässt sich {1}, dass in vielen Branchen eine deutliche {2} zum hybriden Arbeiten zu beobachten ist.',
          bank: ['festhalten', 'ziehen', 'Tendenz', 'Wandel'],
          loesungen: { 1: 'festhalten', 2: 'Tendenz' },
        },
        {
          typ: 'mc',
          frage: 'Welche Formulierung eignet sich am besten für einen mündlichen Vortrag?',
          optionen: [
            'Die Zunahme der Inanspruchnahme digitaler Dienstleistungen durch ältere Menschen ist zu beobachten.',
            'Immer mehr ältere Menschen nutzen digitale Angebote — und das hat Folgen.',
            'Ältere Menschen nutzen digitale Angebote, weil, also, das ist so, dass es immer mehr werden.',
          ],
          loesung: 1,
        },
        {
          typ: 'mc',
          frage: 'Mit welchem Satz markierst du hörbar den Übergang zum zweiten Hauptpunkt?',
          optionen: [
            'So viel zu den Vorteilen — nun zu den Schattenseiten.',
            'Abschließend lässt sich festhalten, dass es auch Schattenseiten gibt.',
            'Ich möchte heute über die Schattenseiten sprechen.',
          ],
          loesung: 0,
        },
        {
          typ: 'mc',
          frage: 'Die Prüferin fragt nach genauen Zahlen, die du nicht kennst. Welche Reaktion entspricht der empfohlenen Strategie?',
          optionen: [
            'Ich schätze, es sind ungefähr 73 Prozent — so genau weiß das ohnehin niemand.',
            'Zu dieser Frage möchte ich mich lieber nicht äußern.',
            'Dazu habe ich keine genauen Zahlen, aber meine Einschätzung ist, dass der Anteil wächst.',
          ],
          loesung: 2,
        },
        {
          typ: 'korrektur',
          optionen: ['Um diese These zu stützen, möchte ich ein Beispiel anführen.', 'Um diese These zu stützen, möchte ich ein Beispiel führen.'],
          loesung: 0,
          warum: '«Aducir/citar un ejemplo» es **ein Beispiel anführen**. *führen* sin prefijo no forma esta colocación.',
        },
        {
          typ: 'korrektur',
          optionen: ['Auf diesem Punkt gehe ich gleich noch näher ein.', 'Auf diesen Punkt gehe ich gleich noch näher ein.'],
          loesung: 1,
          warum: '**eingehen auf** rige **acusativo**: *auf diesen Punkt*. El dativo (*auf diesem*) es un error típico con las preposiciones de doble régimen.',
        },
        {
          typ: 'korrektur',
          optionen: ['Ich möchte Ihnen heute das Thema Ehrenamt exponieren.', 'Ich möchte Ihnen heute das Thema Ehrenamt vorstellen.'],
          loesung: 1,
          warum: '«Exponer un tema» es **ein Thema vorstellen/darstellen**. *exponieren* significa «exponer a un peligro» o «poner en primer plano» (*sich politisch exponieren*): falso amigo.',
        },
        {
          typ: 'satzbau',
          woerter: ['eingegangen', 'vorhin', 'Darauf', 'kurz', 'ich', 'nur', 'bin'],
          loesung: 'Darauf bin ich vorhin nur kurz eingegangen.',
          alt: [
            'Ich bin vorhin nur kurz darauf eingegangen.',
            'Ich bin darauf vorhin nur kurz eingegangen.',
            'Ich bin vorhin darauf nur kurz eingegangen.',
            'Vorhin bin ich darauf nur kurz eingegangen.',
            'Vorhin bin ich nur kurz darauf eingegangen.',
          ],
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies die Rezension eines Ratgebers und entscheide, welche Antwort dem Text entspricht bzw. ob die Aussage richtig oder falsch ist.',
      textTitel: 'Rezension: „Vier Minuten, ein Gedanke“',
      text: 'Wer einen Ratgeber zum freien Sprechen aufschlägt, erwartet meist eine Sammlung von Tricks gegen Lampenfieber. Marion Achterbergs „Vier Minuten, ein Gedanke“ verweigert sich dieser Erwartung auf wohltuende Weise. Die Autorin, die seit Jahren Rhetorikkurse leitet, rückt stattdessen die Struktur in den Mittelpunkt: Wer wisse, wohin er wolle, verliere auch unter Druck selten den Faden.\nÜberzeugend ist vor allem das Kapitel über die angekündigte Gliederung. Achterberg veranschaulicht an zahlreichen Mitschnitten, wie wenige Sätze zu Beginn einen Vortrag für das Publikum überschaubar machen — und zugleich dem Sprecher selbst Halt geben. Ebenso lesenswert sind ihre Hinweise zu Beispielen: Ein einziges konkretes Erlebnis, so ihre These, wirke nachhaltiger als jede Statistik.\nWeniger gelungen ist der Abschnitt über Nachfragen. Hier bleibt die Autorin merkwürdig allgemein und beschränkt sich auf den Rat, ruhig zu bleiben; wie man eine Antwort geschickt an den eigenen Vortrag anbindet, erfährt man nicht. Auch ein gewisser Hang zu Wiederholungen trübt den Gesamteindruck.\nDennoch: Wer sich auf eine mündliche Prüfung oder eine berufliche Präsentation vorbereitet, findet hier einen klar gegliederten, praxisnahen Begleiter — ein Buch, das selbst vorführt, was es lehrt.',
      items: [
        { typ: 'rf', aussage: 'Laut Rezension steht im Ratgeber der Umgang mit Lampenfieber im Vordergrund.', loesung: false },
        {
          typ: 'mc',
          frage: 'Was hebt der Rezensent am Kapitel über die Gliederung besonders hervor?',
          optionen: [
            'Die angekündigte Gliederung biete den Zuhörern wie dem Sprecher Orientierung.',
            'Die Autorin verzichte auf Mitschnitte und stütze sich stattdessen auf Statistiken.',
            'Eine Gliederung solle nach Ansicht der Autorin erst im Fazit offengelegt werden.',
          ],
          loesung: 0,
        },
        {
          typ: 'mc',
          frage: 'Was kritisiert der Rezensent?',
          optionen: [
            'Die Autorin überschätze die Wirkung persönlicher Beispiele.',
            'Das Buch richte sich ausschließlich an Prüfungskandidaten.',
            'Der Umgang mit Nachfragen werde nur oberflächlich behandelt.',
          ],
          loesung: 2,
        },
        { typ: 'rf', aussage: 'Der Rezensent empfiehlt das Buch trotz einiger Schwächen.', loesung: true },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'text',
      titel: 'Schreiben',
      anweisung: 'Verfasse eine Textzusammenfassung mit Kommentar (mindestens 80 Wörter). Gib die Aussagen der Rezension sachlich und in eigenen Worten wieder, kennzeichne fremde Positionen sprachlich und trenne sie klar von deiner eigenen Einschätzung.',
      aufgabe: 'Fasse die Rezension aus Teil 2 zusammen und nimm anschließend Stellung zu der Frage, was beim freien Sprechen tatsächlich am meisten hilft.',
      punkte: [
        'Gib den zentralen Ansatz des Ratgebers wieder.',
        'Nenne die Stärken und Schwächen, die der Rezensent hervorhebt.',
        'Kommentiere, welche Strategie dir persönlich beim Vortragen am meisten hilft, und begründe deine Einschätzung.',
      ],
      minWoerter: 80,
      beispielLoesung: 'Die Rezension bespricht einen Ratgeber zum freien Sprechen, der sich weniger mit Lampenfieber als mit der Struktur eines Vortrags befasst. Nach Ansicht der Autorin verliert nur selten den Faden, wer sein Ziel kennt. Der Rezensent lobt insbesondere das Kapitel über die angekündigte Gliederung sowie die Hinweise zum Einsatz konkreter Beispiele. Kritisch sieht er hingegen, dass der Umgang mit Nachfragen nur oberflächlich behandelt wird und sich manches wiederholt. Insgesamt empfiehlt er das Buch dennoch.\nMeiner Erfahrung nach trifft der Ansatz des Buches zu: Seit ich zu Beginn jedes Vortrags die Gliederung ankündige, gerate ich kaum noch ins Stocken. Allerdings würde ich ergänzen, dass Nachfragen gezielt geübt werden müssen, da sie sich nicht vorbereiten lassen.',
    },
  ],
}
