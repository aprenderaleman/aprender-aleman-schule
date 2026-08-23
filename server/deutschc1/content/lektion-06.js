// Lektion 06 · Konjunktiv II

export default {
  spec: ['Bloque 1', 'Sprachliche Konsolidierung', 'C1', 'Prüfungsrelevanz: Schreiben · Sprechen'],
  h1: 'Konjunktiv II',
  lead: 'Höflichkeit, Hypothese und Irrealität — die Feinmechanik, an der sich ein echtes C1 zeigt.',

  content: [
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'Konjunktiv II der Gegenwart und Vergangenheit bilden',
        'irreale Bedingungs-, Wunsch- und Vergleichssätze formulieren',
        'Höflichkeit und Distanz sprachlich ausdrücken',
      ],
    },

    { type: 'rule' },

    {
      type: 'prose',
      eyebrow: 'Erklärung',
      card: true,
      absaetze: [
        'Gegenwart: meist **würde + Infinitiv**; starke Verben oft mit eigener Form (*wäre, hätte, käme, ginge*). Vergangenheit: **hätte / wäre + Partizip II**.',
      ],
    },

    {
      type: 'beispiele',
      eyebrow: 'Funktionen',
      items: [
        { text: '**Könnten** Sie …? / Ich **hätte** gern …', gl: '— Höflichkeit' },
        { text: 'Wenn ich reich **wäre**, **würde** ich reisen.', gl: '— irreale Bedingung (Gegenwart)' },
        { text: 'Wenn ich das gewusst **hätte**, **hätte** ich anders gehandelt.', gl: '— irreale Bedingung (Vergangenheit)' },
        { text: '**Hätte** ich doch früher angefangen!', gl: '— irrealer Wunsch' },
        { text: 'Er tut so, **als ob** er alles **wüsste**.', gl: '— irrealer Vergleich' },
      ],
    },

    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: '*als ob* + Konj. II und der Konj. II der Vergangenheit sind typische C1-Marker. Häufiger Fehler: *würde* mit *hätte/wäre* kombinieren — es heißt **„hätte“**, nicht „würde haben“.',
    },

    { type: 'rule' },

    {
      type: 'uebung',
      eyebrow: 'Übung',
      frage: 'Ergänze im Konjunktiv II.',
      aufgaben: [
        'Wenn ich Zeit (haben), (kommen) ich.',
        'Er spricht, als ob er ein Experte (sein).',
        'Wenn du mich gefragt (haben), (helfen) ich dir. ~(Vergangenheit)~',
      ],
      loesungen: [
        'Wenn ich Zeit **hätte**, **käme** ich / **würde** ich **kommen**.',
        '… als ob er ein Experte **wäre**.',
        'Wenn du mich gefragt **hättest**, **hätte** ich dir **geholfen**.',
      ],
    },
  ],
}
