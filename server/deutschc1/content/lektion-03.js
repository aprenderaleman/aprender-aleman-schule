// Lektion 03 · Nominalstil vs. Verbalstil
//
// Marcado inline: **negrita**  *cursiva*  ==resaltado==  ~atenuado~  __término__

export default {
  spec: ['Bloque 1', 'Sprachliche Konsolidierung', 'C1', 'Prüfungsrelevanz: Lesen · Schreiben'],
  h1: 'Nominalstil vs. Verbalstil',
  lead: 'Vom Verb zum Substantiv: die Verdichtung, die geschriebenes C1-Deutsch von gesprochenem unterscheidet.',

  content: [
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'verbale Aussagen in den Nominalstil umformen und umgekehrt',
        'typische Muster erkennen: Präposition + Nominalisierung statt Nebensatz',
        'den Nominalstil bewusst und maßvoll einsetzen',
      ],
    },

    { type: 'rule' },

    {
      type: 'prose',
      eyebrow: 'Erklärung',
      card: true,
      absaetze: [
        'Der Nominalstil **verdichtet** Informationen: Ein ganzer Nebensatz wird zu einer Präpositionalphrase. Er ist typisch für die geschriebene, fachliche Sprache. Grundmuster: **Nebensatz (verbal) → Präposition + Nominalisierung**.',
      ],
    },

    {
      type: 'tabelle',
      kopf: ['Verbal (Nebensatz)', 'Nominal (Präposition + Nomen)'],
      zeilen: [
        ['weil', 'wegen / aufgrund + Gen.'],
        ['nachdem', 'nach + Dat.'],
        ['wenn / falls', 'bei + Dat.'],
        ['indem', 'durch + Akk.'],
        ['obwohl', 'trotz + Gen.'],
      ],
    },

    {
      type: 'beispiele',
      eyebrow: 'Beispiele — Umformung',
      items: [
        { text: '**Weil die Preise steigen**, … → **Aufgrund steigender Preise** …' },
        { text: '**Nachdem man den Antrag geprüft hat**, … → **Nach Prüfung des Antrags** …' },
        { text: '**Wenn Sie ankommen**, … → **Bei Ihrer Ankunft** …' },
        { text: '**Indem man den Prozess optimiert**, … → **Durch die Optimierung des Prozesses** …' },
      ],
    },

    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Im **Lesen-Lückentext** werden Nominalisierungen und ihre Präpositionen gezielt getestet. Im **Schreiben** hebt ein angemessener Nominalstil das Kriterium „Strukturen“ — aber *zu viel* Nominalstil wirkt schwerfällig. ~Busca el equilibrio, no la sobrecarga.~',
    },

    { type: 'rule' },

    {
      type: 'uebung',
      eyebrow: 'Übung',
      frage: 'Formuliere im Nominalstil.',
      aufgaben: [
        'Weil das Wetter schlecht war, wurde das Spiel abgesagt.',
        'Nachdem die Sitzung beendet war, gingen alle nach Hause.',
        'Weil die Nachfrage steigt, muss mehr produziert werden.',
      ],
      loesungen: [
        '**Wegen des schlechten Wetters** wurde das Spiel abgesagt.',
        '**Nach Beendigung der Sitzung** gingen alle nach Hause.',
        '**Aufgrund der steigenden Nachfrage** muss mehr produziert werden.',
      ],
    },
  ],
}
