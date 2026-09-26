// Übungsheft B2 — Lektion 39: Konsum & Geld
export default {
  lektion: 39,
  titel: 'Übungsheft — Konsum & Geld',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Einkaufen, Reklamieren und Geld: Wähle die passende Lösung.',
      items: [
        {
          typ: 'luecke',
          text: 'Ich habe die Bestellung schon am Montag {1}, aber das Paket ist noch nicht da — ich warte immer noch auf die {2}.',
          bank: ['aufgegeben', 'Lieferung', 'eingereicht', 'Rücksendung'],
          loesungen: { 1: 'aufgegeben', 2: 'Lieferung' },
        },
        {
          typ: 'luecke',
          text: 'Letzten Monat habe ich viel zu viel Geld für Kleidung {1}. Deshalb habe ich dieses Wochenende ganz ohne Kosten im Park {2}.',
          bank: ['ausgegeben', 'verbracht', 'gespart', 'verdient'],
          loesungen: { 1: 'ausgegeben', 2: 'verbracht' },
        },
        {
          typ: 'luecke',
          text: 'Frau Novak hat sich {1} die kaputte Waschmaschine beschwert und {2} Kundenservice eine Reklamation eingereicht.',
          bank: ['über', 'von', 'beim', 'am'],
          loesungen: { 1: 'über', 2: 'beim' },
        },
        {
          typ: 'mc',
          frage: 'Im Schlussverkauf bekommt man auf fast alles zwanzig Prozent ___.',
          optionen: ['Rabatt', 'Rechnung', 'Rücksendung'],
          loesung: 0,
        },
        {
          typ: 'mc',
          frage: 'Je mehr Werbung man sieht, ___ mehr Geld gibt man aus.',
          optionen: ['als', 'desto', 'wie'],
          loesung: 1,
        },
        {
          typ: 'mc',
          frage: 'Der Betrag ___ Ihnen innerhalb von 14 Tagen erstattet.',
          optionen: ['hat', 'ist', 'wird'],
          loesung: 2,
        },
        {
          typ: 'zuordnen',
          links: ['eine Bestellung', 'eine Reklamation', 'einen Pullover', 'den Kassenbon', 'für den Urlaub'],
          rechts: ['aufgeben', 'einreichen', 'umtauschen', 'aufbewahren', 'sparen'],
          loesung: {
            'eine Bestellung': 'aufgeben',
            'eine Reklamation': 'einreichen',
            'einen Pullover': 'umtauschen',
            'den Kassenbon': 'aufbewahren',
            'für den Urlaub': 'sparen',
          },
        },
        {
          typ: 'korrektur',
          optionen: ['Ich habe mich über die späte Lieferung beschwert.', 'Ich habe mich von der späten Lieferung beschwert.'],
          loesung: 0,
          warum: '**sich beschweren über** + Akkusativ; *von* es un calco de «quejarse de».',
        },
        {
          typ: 'korrektur',
          optionen: ['Am Samstag habe ich drei Stunden im Einkaufszentrum ausgegeben.', 'Am Samstag habe ich drei Stunden im Einkaufszentrum verbracht.'],
          loesung: 1,
          warum: '«Gastar/pasar tiempo» = **Zeit verbringen**; *ausgeben* solo se usa con dinero.',
        },
        {
          typ: 'satzbau',
          woerter: ['dass', 'feststellen', 'Ware', 'ist', 'Leider', 'ich', 'beschädigt', 'musste', 'die'],
          loesung: 'Leider musste ich feststellen, dass die Ware beschädigt ist.',
          alt: ['Ich musste leider feststellen, dass die Ware beschädigt ist.'],
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies den Kommentar und löse die Aufgaben.',
      textTitel: 'Kommentar: Gratis zurückschicken? Das hat seinen Preis',
      text: 'Kostenlose Rücksendungen gelten vielen als selbstverständlich. Man bestellt die Jeans in drei Größen, behält eine und schickt den Rest zurück — bequemer geht es kaum. Doch gratis ist daran nichts. Jede Rücksendung muss transportiert, geprüft und neu verpackt werden, und einen Teil der Ware können die Händler gar nicht mehr verkaufen. Diese Kosten stecken längst in den Preisen, die alle Kunden bezahlen — auch diejenigen, die nie etwas zurückschicken. Hinzu kommen lange Transportwege und Verpackungsmüll. Ich halte es deshalb für richtig, dass immer mehr Händler eine kleine Gebühr verlangen. Ein Verbot kostenloser Rücksendungen fordere ich aber nicht: Wer ein defektes Produkt reklamiert, darf dafür selbstverständlich nichts zahlen. Es geht um die Gewohnheit, das eigene Wohnzimmer als Umkleidekabine zu nutzen. Zwei oder drei Euro pro Paket würden viele dazu bringen, vor dem Kauf genauer zu überlegen. Und vielleicht probiert der eine oder andere die Jeans dann wieder im Geschäft an — gleich um die Ecke. — Henrik Sommer',
      items: [
        {
          typ: 'mc',
          frage: 'Welche Position vertritt der Autor?',
          optionen: ['Rücksendungen sollten grundsätzlich verboten werden.', 'Eine kleine Gebühr für Rücksendungen ist sinnvoll.', 'Die Händler sollten ihre Preise senken.'],
          loesung: 1,
        },
        { typ: 'rf', aussage: 'Laut dem Kommentar bezahlen auch Kunden, die nichts zurückschicken, die Kosten der Rücksendungen mit.', loesung: true },
        { typ: 'rf', aussage: 'Der Autor meint, dass man auch für die Reklamation defekter Ware zahlen sollte.', loesung: false },
        {
          typ: 'mc',
          frage: 'Was erhofft sich der Autor von der Gebühr?',
          optionen: ['Dass die Kunden vor dem Kauf genauer überlegen.', 'Dass die Händler mehr Gewinn machen.', 'Dass die Kunden häufiger online bestellen.'],
          loesung: 0,
        },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'text',
      titel: 'Schreiben',
      anweisung: 'Schreib eine Stellungnahme mit mindestens 60 Wörtern und geh auf alle drei Punkte ein.',
      aufgabe: 'Auf der Website eines Verbrauchermagazins wird diskutiert: „Sollte Werbung, die sich an Kinder richtet, verboten werden?“ Schreib deine Stellungnahme.',
      punkte: [
        'Äußere deine Meinung und begründe sie.',
        'Nenne ein Argument für und eines gegen ein Verbot.',
        'Beschreib, wie die Situation in deinem Heimatland ist.',
      ],
      minWoerter: 60,
      beispielLoesung: 'Meiner Meinung nach sollte Werbung für Kinder stark eingeschränkt werden, denn Kinder lassen sich besonders leicht von Werbung beeinflussen. Sie verstehen oft nicht, dass ein Clip nur verkaufen will, und bitten ihre Eltern danach ständig um neues Spielzeug oder Süßigkeiten. Andererseits gehört Werbung zum Alltag, und ein komplettes Verbot wäre schwer zu kontrollieren, vor allem im Internet. Besser wäre es, wenn Kinder schon in der Schule lernen, wie Werbung funktioniert. In Chile, wo ich aufgewachsen bin, dürfen ungesunde Lebensmittel nicht mehr mit Comicfiguren beworben werden. Ich finde, das ist ein guter Kompromiss.',
    },
  ],
}
