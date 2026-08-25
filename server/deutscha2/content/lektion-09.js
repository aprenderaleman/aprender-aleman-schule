// Lektion 09 · Dativ & Dativpräpositionen

export default {
  spec: ['Bloque 1', 'Grammatik & Struktur', 'Niveau A2', 'Prüfungsrelevanz: alle Module'],
  h1: 'Der Dativ',
  lead: '~~El tercer caso del alemán:~~ **dem, der, dem** — ~~lo necesitas para decir «a quién»:~~ __Ich helfe **meiner Mutter**.__',

  content: [
    // ── Lernziele ─────────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'die Dativformen *dem, der, dem, den + -n* benutzen',
        'Verben mit Dativ kennen: *helfen, danken, gefallen, gehören*',
        'die Präpositionen *mit, nach, aus, zu, von, bei, seit* mit Dativ benutzen',
      ],
    },

    { type: 'rule' },

    // ── Kernwortschatz ────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Kernwortschatz — Verben mit Dativ',
      kopf: ['Verb', 'Beispiel', 'Bedeutung'],
      zeilen: [
        ['helfen', 'Ich helfe dir.', 'ayudar (a alguien)'],
        ['danken', 'Ich danke Ihnen.', 'dar las gracias'],
        ['gefallen', 'Das gefällt mir.', 'gustar'],
        ['gehören', 'Das gehört mir.', 'pertenecer (ser de)'],
        ['antworten', 'Er antwortet dem Lehrer.', 'responder'],
        ['schmecken', 'Die Pizza schmeckt mir.', 'saber bien / gustar (comida)'],
      ],
    },
    {
      type: 'prose',
      absaetze: ['~~Estos verbos van SIEMPRE con dativo — apréndelos como pareja: helfen + Dativ.~~'],
    },

    { type: 'rule' },

    // ── Erklärung ─────────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Erklärung — die Formen',
      kopf: ['', 'Nominativ', 'Dativ ~~(dativo)~~'],
      zeilen: [
        ['Maskulin', 'der / ein Mann', '**dem** / ein**em** Mann'],
        ['Feminin', 'die / eine Frau', '**der** / ein**er** Frau'],
        ['Neutrum', 'das / ein Kind', '**dem** / ein**em** Kind'],
        ['Plural', 'die Kinder', '**den** Kinder**n**'],
      ],
    },
    {
      type: 'steps',
      eyebrow: 'Erklärung — so funktioniert der Dativ',
      steps: [
        {
          badge: 'Wem?',
          titel: 'Die Frage',
          text: 'Der Dativ antwortet auf die Frage __Wem?__ ~~(¿a quién?)~~\n__Wem hilfst du? — **Meiner Mutter**.__',
        },
        {
          badge: 'Verben',
          titel: 'Verben mit Dativ',
          text: 'Nach *helfen, danken, gefallen, gehören* steht immer der Dativ.\n__Ich helfe **meinem Bruder**. Der Film gefällt **mir**.__ ~~Ojo: «ayudo a mi madre» NO es *Ich helfe meine Mutter* — es *Ich helfe meiner Mutter*.~~',
        },
        {
          badge: 'Präp.',
          titel: 'Präpositionen mit Dativ',
          text: '__mit, nach, aus, zu, von, bei, seit__ — nach diesen Präpositionen ~~(preposiciones)~~ steht IMMER der Dativ.\n__Ich fahre **mit dem** Bus **zu meiner** Oma.__',
        },
        {
          badge: 'mir/dir',
          titel: 'Pronomen',
          text: 'ich → __mir__, du → __dir__. ~~(me/a mí, te/a ti)~~\n__Kannst du **mir** helfen? — Ja, ich helfe **dir**.__',
        },
      ],
    },

    { type: 'rule' },

    // ── Beispiele ─────────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele',
      items: [
        { text: 'Ich helfe **meiner Mutter** in der Küche.', gl: '— helfen + Dativ' },
        { text: 'Das Auto gehört **meinem Vater**.', gl: '— gehören + Dativ' },
        { text: 'Wir fahren **mit dem** Zug **nach** Berlin.', gl: '— mit + Dativ' },
        { text: 'Sie kommt **aus der** Schweiz und wohnt **bei einer** Freundin.', gl: '— aus / bei + Dativ' },
        { text: '**Seit einem** Jahr lerne ich Deutsch.', gl: '— seit + Dativ (desde hace)' },
      ],
    },

    { type: 'rule' },

    // ── Übungen ───────────────────────────────────────────────────
    {
      type: 'uebung',
      eyebrow: 'Anwendung — Übung 1 · Dativ erkennen',
      frage: 'dem, der oder den? Ergänze den Artikel. ~~(Completa el artículo en dativo.)~~',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Ich danke ___ Lehrer. (der Lehrer)',
        'Das Handy gehört ___ Frau. (die Frau)',
        'Er hilft ___ Kind. (das Kind)',
        'Sie dankt ___ Eltern. (die Eltern, Plural)',
      ],
      loesungen: [
        'Ich danke **dem** Lehrer.',
        'Das Handy gehört **der** Frau.',
        'Er hilft **dem** Kind.',
        'Sie dankt **den** Eltern. ~~(Plural: den + -n)~~',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 2 · Präpositionen anwenden',
      frage: 'Ergänze die Endung.',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Ich fahre mit d___ Bus. (der Bus)',
        'Er kommt aus ein___ kleinen Stadt. (die Stadt)',
        'Wir gehen zu unser___ Oma. (die Oma)',
        'Sie wohnt bei ihr___ Bruder. (der Bruder)',
      ],
      loesungen: [
        'Ich fahre mit **dem** Bus.',
        'Er kommt aus **einer** kleinen Stadt.',
        'Wir gehen zu **unserer** Oma.',
        'Sie wohnt bei **ihrem** Bruder.',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 3 · Sätze produzieren',
      frage: 'Übersetze. ~~(Traduce — cuidado con el dativo.)~~',
      loesungLabel: 'Mögliche Lösung',
      aufgaben: [
        'Ayudo a mi madre.',
        'El libro es de mi hermano. (gehören)',
        'Voy en coche a la escuela. (mit / zu)',
      ],
      loesungen: [
        'Ich helfe **meiner Mutter**.',
        'Das Buch gehört **meinem Bruder**.',
        'Ich fahre **mit dem** Auto **zur** Schule. ~~(zu + der = zur)~~',
      ],
    },

    { type: 'rule' },

    // ── Prüfungsbezug ─────────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Schreiben · E-Mail',
      titel: 'Dativ in der E-Mail',
      anweisung: 'In der Prüfung schreibst du oft, mit wem und zu wem du gehst. Ergänze die Artikel:',
      absaetze: [
        '„Lieber Tom, ich fahre am Samstag mit {1} Zug zu {2} Tante nach Hamburg. Kommst du mit?“',
      ],
      optionen: ['(1) der Zug', '(2) meine Tante'],
      loesungLabel: 'Lösung',
      loesungen: [
        '{1} mit **dem** Zug ~~(mit + Dativ)~~',
        '{2} zu **meiner** Tante ~~(zu + Dativ)~~',
      ],
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Lerne die Präpositionen als Reim: **mit, nach, aus, zu, von, bei, seit** — immer Dativ! ~~Recítalo como una lista rítmica. En el examen te da la respuesta automáticamente, sin pensar.~~',
    },

    { type: 'rule' },

    // ── Abschluss ─────────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Regel', 'Beispiel'],
      zeilen: [
        ['Dativ: dem / der / dem / den + -n', 'Ich helfe dem Kind.'],
        ['Verben mit Dativ: helfen, danken, gefallen, gehören', 'Das gefällt mir.'],
        ['mit, nach, aus, zu, von, bei, seit → Dativ', 'mit dem Bus, bei meiner Oma'],
        ['Pronomen: mir, dir', 'Kannst du mir helfen?'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich kenne die Dativformen dem, der, dem, den + -n.',
        'Ich benutze helfen, danken, gefallen und gehören mit Dativ.',
        'Ich weiß: nach mit, nach, aus, zu, von, bei, seit steht immer der Dativ.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Einige Präpositionen sind kompliziert: *in, an, auf* … stehen mal mit Dativ, mal mit Akkusativ. **Wo?** oder **Wohin?** — das ist die Frage. ~~Las «preposiciones cambiantes» son el tema de la próxima lección.~~',
    },
  ],
}
