// Übungsheft B2 — Lektion 38: Wohnen & Zusammenleben
export default {
  lektion: 38,
  titel: 'Übungsheft — Wohnen & Zusammenleben',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Wohnungssuche, Mietvertrag und Hausordnung: Wähle die passende Lösung.',
      items: [
        {
          typ: 'luecke',
          text: 'Die {1} beträgt 650 Euro im Monat, die {2} für Heizung und Wasser kommen noch dazu.',
          bank: ['Kaltmiete', 'Nebenkosten', 'Kaution', 'Anzeige'],
          loesungen: { 1: 'Kaltmiete', 2: 'Nebenkosten' },
        },
        {
          typ: 'luecke',
          text: 'Frau Albers {1} die kleine Wohnung unter dem Dach an Studierende. Seit März {2} Leon dort ein Zimmer.',
          bank: ['vermietet', 'mietet', 'unterschreibt', 'zieht'],
          loesungen: { 1: 'vermietet', 2: 'mietet' },
        },
        {
          typ: 'luecke',
          text: 'Ich habe {1} eine Anzeige geantwortet und gleich einen Termin {2} Besichtigung vereinbart.',
          bank: ['auf', 'zur', 'für', 'an'],
          loesungen: { 1: 'auf', 2: 'zur' },
        },
        {
          typ: 'mc',
          frage: 'Wer in diesem Haus wohnt, muss sich an die Hausordnung ___.',
          optionen: ['achten', 'halten', 'richten'],
          loesung: 1,
        },
        {
          typ: 'mc',
          frage: 'Zwischen 22 und 6 Uhr müssen alle Mieter die Ruhezeiten ___.',
          optionen: ['behalten', 'festhalten', 'einhalten'],
          loesung: 2,
        },
        {
          typ: 'mc',
          frage: 'Laut Hausordnung ___ Fahrräder ausschließlich im Hof abzustellen.',
          optionen: ['sind', 'haben', 'werden'],
          loesung: 0,
        },
        {
          typ: 'zuordnen',
          links: ['den Mietvertrag', 'die Kaution', 'in eine WG', 'auf eine Anzeige', 'sich gut mit den Nachbarn'],
          rechts: ['unterschreiben', 'zurückbekommen', 'ziehen', 'antworten', 'verstehen'],
          loesung: {
            'den Mietvertrag': 'unterschreiben',
            'die Kaution': 'zurückbekommen',
            'in eine WG': 'ziehen',
            'auf eine Anzeige': 'antworten',
            'sich gut mit den Nachbarn': 'verstehen',
          },
        },
        {
          typ: 'korrektur',
          optionen: ['Wir haben die Wohnung von einem älteren Ehepaar vermietet.', 'Wir haben die Wohnung von einem älteren Ehepaar gemietet.'],
          loesung: 1,
          warum: 'Quien paga el alquiler **mietet**; solo el propietario **vermietet** (da en alquiler).',
        },
        {
          typ: 'korrektur',
          optionen: ['Letztes Jahr bin ich nach Köln umgezogen.', 'Letztes Jahr habe ich mich nach Köln umgezogen.'],
          loesung: 0,
          warum: '«Mudarse» no es reflexivo: **umziehen** con *sein*. *Sich umziehen* significa «cambiarse de ropa».',
        },
        {
          typ: 'satzbau',
          woerter: ['du', 'Mietvertrag', 'Bevor', 'den', 'unterschreibst', 'lies', 'ihn', 'genau'],
          loesung: 'Bevor du den Mietvertrag unterschreibst, lies ihn genau.',
          alt: ['Bevor du ihn unterschreibst, lies den Mietvertrag genau.', 'Lies den Mietvertrag genau, bevor du ihn unterschreibst.', 'Lies ihn genau, bevor du den Mietvertrag unterschreibst.'],
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies den Auszug aus einem Zeitungsartikel und löse die Aufgaben.',
      textTitel: 'Zimmer gegen Hilfe: Wenn Jung und Alt zusammenziehen',
      text: 'In vielen Universitätsstädten ist die Wohnungssuche für Studierende ein Albtraum: Auf ein WG-Zimmer kommen oft Dutzende Bewerber, und die Kaltmiete für ein kleines Apartment ist schnell höher, als der Nebenjob einbringt. Gleichzeitig leben viele ältere Menschen allein in großen Wohnungen. Ein Modell, das inzwischen in mehreren Städten angeboten wird, bringt beide Seiten zusammen: Studierende wohnen bei Senioren und zahlen statt Miete nur die Nebenkosten. Dafür helfen sie im Alltag — sie kaufen ein, tragen Getränkekisten oder erklären das Smartphone. Als Faustregel gilt: eine Stunde Hilfe pro Monat für jeden Quadratmeter Wohnfläche. Pflege gehört ausdrücklich nicht dazu. Die 81-jährige Gerda Maurer aus Freiburg ist begeistert: „Seit nachts jemand im Haus ist, fühle ich mich viel sicherer.“ Ihr Mitbewohner Kwame, der Informatik studiert, schätzt vor allem die Ruhe. Ganz ohne Konflikte geht es aber nicht: Wer unterschiedliche Vorstellungen von Ordnung oder Ruhezeiten hat, sollte das vor dem Einzug klären. Deshalb organisieren die Vermittler zuerst ein Kennenlerngespräch.',
      items: [
        {
          typ: 'mc',
          frage: 'Was zahlen die Studierenden in diesem Modell?',
          optionen: ['Die halbe Kaltmiete.', 'Nur die Nebenkosten.', 'Einen festen Betrag pro Quadratmeter.'],
          loesung: 1,
        },
        { typ: 'rf', aussage: 'Zu den Aufgaben der Studierenden gehört auch die Pflege.', loesung: false },
        { typ: 'rf', aussage: 'Vor dem Einzug lernen sich beide Seiten in einem Gespräch kennen.', loesung: true },
        {
          typ: 'mc',
          frage: 'Was gefällt Gerda Maurer an dem Modell besonders?',
          optionen: ['Sie fühlt sich sicherer.', 'Sie spart viel Geld.', 'Sie bekommt Hilfe bei der Pflege.'],
          loesung: 0,
        },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'text',
      titel: 'Schreiben',
      anweisung: 'Schreib eine formelle E-Mail mit mindestens 60 Wörtern und geh auf alle drei Punkte ein.',
      aufgabe: 'Du hast eine Anzeige für eine Zweizimmerwohnung gelesen: 720 Euro Kaltmiete, Nebenkosten und Kaution „nach Vereinbarung“. Schreib an den Vermieter, Herrn Brandt.',
      punkte: [
        'Stell dich kurz vor und erklär, warum du umziehen möchtest.',
        'Frag nach der Höhe der Nebenkosten und der Kaution.',
        'Schlag einen Termin zur Besichtigung vor.',
      ],
      minWoerter: 60,
      beispielLoesung: 'Sehr geehrter Herr Brandt, mit großem Interesse habe ich Ihre Anzeige für die Zweizimmerwohnung gelesen. Mein Name ist Lucía Ortega, ich bin 29 Jahre alt und arbeite als Physiotherapeutin. Da ich ab Juni eine neue Stelle in Ihrer Stadt antrete, suche ich eine ruhige Wohnung in der Nähe. Bevor ich mich bewerbe, hätte ich zwei Fragen: Wie hoch sind die Nebenkosten ungefähr, und wie viele Kaltmieten beträgt die Kaution? Außerdem würde ich die Wohnung gern besichtigen. Wäre ein Termin am kommenden Samstagvormittag möglich? Über eine Antwort würde ich mich sehr freuen. Mit freundlichen Grüßen, Lucía Ortega',
    },
  ],
}
