// Lektion 05 · Konjunktiv I — indirekte Rede

export default {
  spec: ['Bloque 1', 'Sprachliche Konsolidierung', 'C1', 'Prüfungsrelevanz: Hören · Schreiben'],
  h1: 'Konjunktiv I — indirekte Rede',
  lead: 'Aussagen anderer distanziert und korrekt wiedergeben — unverzichtbar für Berichte und Zusammenfassungen.',

  content: [
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'den Konjunktiv I bilden (er sei, er habe, er könne)',
        'Aussagen in die indirekte Rede übertragen',
        'bei Formengleichheit korrekt auf Konjunktiv II ausweichen',
      ],
    },

    { type: 'rule' },

    {
      type: 'prose',
      eyebrow: 'Erklärung',
      card: true,
      absaetze: [
        'Der Konjunktiv I gibt Gesagtes wieder, **ohne dass sich der Sprecher damit identifiziert**. Grundformen: **sein → er sei**, **haben → er habe**, **können → er könne**. Ist der Konjunktiv I mit dem Indikativ identisch (v. a. im Plural: *sie haben*), weicht man auf den **Konjunktiv II** aus: *sie hätten*.',
      ],
    },

    {
      type: 'beispiele',
      eyebrow: 'Zeitverschiebung',
      items: [
        { text: '„Ich bin müde.“ → Er sagt, er **sei** müde.', gl: '— Gegenwart' },
        { text: '„Ich hatte keine Zeit.“ → Er sagt, er **habe** keine Zeit **gehabt**.', gl: '— Vergangenheit' },
        { text: '„Ich werde helfen.“ → Er sagt, er **werde** helfen.', gl: '— Zukunft' },
        { text: '„Wir haben keine Zeit.“ → Sie sagen, sie **hätten** keine Zeit.', gl: '— Ausweichen auf Konj. II' },
      ],
    },

    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Im **Hören/Lesen** musst du wiedergeben, *was jemand sagt*; im **Diskussionsbeitrag** wirkt „Kritiker behaupten, das *sei* …“ souverän. Der häufigste Fehler ist das fehlende Ausweichen auf Konj. II bei Formengleichheit.',
    },

    { type: 'rule' },

    {
      type: 'uebung',
      eyebrow: 'Übung',
      frage: 'Setze in die indirekte Rede.',
      aufgaben: [
        'Der Minister: „Die Steuern sinken.“',
        'Sie: „Ich habe den Termin vergessen.“',
      ],
      loesungen: [
        'Der Minister sagt, die Steuern **würden sinken** / **sänken**.',
        'Sie sagt, sie **habe** den Termin **vergessen**.',
      ],
    },
  ],
}
