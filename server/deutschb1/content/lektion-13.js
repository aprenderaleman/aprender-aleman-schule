// Lektion 13 · Konjunktiv II — höfliche Bitten & Wünsche

export default {
  spec: ['Bloque 1', 'Grammatik & Struktur', 'Niveau B1', 'Prüfungsrelevanz: Sprechen & Schreiben'],
  h1: 'Konjunktiv II — höfliche Bitten & Wünsche',
  lead: 'Mit **würde, hätte, wäre, könnte** klingst du höflich. ~~Es el «podría / me gustaría» del alemán.~~',

  content: [
    // ── Lernziele ─────────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'höfliche Bitten mit *Könnten Sie …?* und *Würdest du …?* formulieren',
        'Wünsche mit *Ich würde gern …* und *Ich hätte gern …* ausdrücken',
        'die vier Formen **würde, hätte, wäre, könnte** richtig konjugieren',
      ],
    },

    { type: 'rule' },

    // ── Kernwortschatz ────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Kernwortschatz',
      items: [
        { text: '**würde** ~~(haría)~~ · **hätte** ~~(tendría)~~ · **wäre** ~~(sería/estaría)~~ · **könnte** ~~(podría)~~' },
      ],
    },
    {
      type: 'tabelle',
      kopf: ['', 'würde', 'hätte', 'wäre', 'könnte'],
      zeilen: [
        ['ich', 'würde', 'hätte', 'wäre', 'könnte'],
        ['du', 'würdest', 'hättest', 'wärst', 'könntest'],
        ['er/sie/es', 'würde', 'hätte', 'wäre', 'könnte'],
        ['wir/sie/Sie', 'würden', 'hätten', 'wären', 'könnten'],
        ['ihr', 'würdet', 'hättet', 'wärt', 'könntet'],
      ],
    },
    {
      type: 'beispiele',
      titel: 'Feste Wendungen',
      items: [
        { text: 'Ich **hätte gern** einen Kaffee.', gl: '~~quisiera / me pondría~~' },
        { text: 'Ich **würde gern** mitkommen.', gl: '~~me gustaría~~' },
        { text: '**Könnten Sie** mir bitte helfen?', gl: '~~¿podría usted…?~~' },
        { text: '**Wäre** es möglich, …?', gl: '~~¿sería posible…?~~' },
      ],
    },

    { type: 'rule' },

    // ── Erklärung ─────────────────────────────────────────────────
    {
      type: 'steps',
      eyebrow: 'Erklärung — so funktioniert es',
      steps: [
        {
          badge: 'Regel 1',
          titel: 'würde + Infinitiv',
          text: 'Die Normalform für fast alle Verben: __würde__ auf Position 2, __Infinitiv__ am Ende.\n__Ich **würde** dich gern **besuchen**.__ ~~Como «me gustaría + infinitivo».~~',
        },
        {
          badge: 'Regel 2',
          titel: 'haben, sein, können — eigene Formen',
          text: 'Diese drei Verben benutzen ihre kurze Form: __hätte, wäre, könnte__.\nNicht *„würde haben“*, sondern: __Ich **hätte** eine Frage.__',
        },
        {
          badge: 'Regel 3',
          titel: 'Höflichkeit',
          text: 'Direkt: *Hilf mir!* → Höflich: __**Könntest du** mir helfen?__\nIm Alltag, im Geschäft und in der Prüfung ist die höfliche Form fast immer besser.',
        },
      ],
    },
    {
      type: 'prose',
      card: true,
      absaetze: [
        '**Typischer Fehler:** ~~En español dices «¿puedes ayudarme?» y suena normal. En alemán,~~ *Kannst du mir helfen?* ~~es correcto pero directo; con desconocidos usa siempre~~ **Könnten Sie mir helfen?** ~~— Konjunktiv II + Sie.~~',
        '**Noch nicht B1:** Wünsche über die Vergangenheit (*Ich hätte das gemacht* ~~= lo habría hecho~~) kommen erst im Niveau B2.',
      ],
    },

    { type: 'rule' },

    // ── Beispiele ─────────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele',
      kicker: 'Funktion 1',
      titel: 'Höfliche Bitten',
      items: [
        { text: '**Könnten Sie** das bitte wiederholen?', gl: '— im Kurs, im Amt' },
        { text: '**Würdest du** mir dein Fahrrad leihen?', gl: '— unter Freunden' },
        { text: '**Hätten Sie** heute noch einen Termin frei?', gl: '— beim Arzt' },
        { text: '**Wäre** es möglich, das Fenster zu öffnen?', gl: '— sehr höflich' },
      ],
    },
    {
      type: 'vergleich',
      titel: 'Direkt ↔ höflich',
      zeilen: [
        { satz: 'Gib mir das Salz!', label: 'direkt — klingt wie ein Befehl' },
        { satz: 'Würdest du mir bitte das Salz geben?', label: 'höflich — Konjunktiv II + bitte' },
        { satz: 'Ich will einen Termin.', label: 'direkt — im Amt zu hart' },
        { satz: 'Ich hätte gern einen Termin.', label: 'höflich — so sagt man es wirklich' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'Funktion 2',
      titel: 'Wünsche',
      items: [
        { text: 'Ich **hätte gern** ein Kilo Tomaten.', gl: '— beim Einkaufen' },
        { text: 'Ich **würde gern** am Samstag kommen.', gl: '— Termin vorschlagen' },
        { text: 'Wir **würden** lieber **ins** Kino **gehen**.', gl: '~~preferiríamos~~' },
        { text: 'Ich **wäre** jetzt gern am Meer.', gl: '~~ojalá estuviera…~~' },
      ],
    },

    { type: 'rule' },

    // ── Übungen ───────────────────────────────────────────────────
    {
      type: 'uebung',
      eyebrow: 'Anwendung — Übung 1 · Erkennen',
      frage: 'Bitte oder Wunsch?',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Könntest du das Licht ausmachen?',
        'Ich würde gern mehr Deutsch sprechen.',
        'Hätten Sie einen Stift für mich?',
        'Ich wäre gern schon im Urlaub.',
      ],
      loesungen: [
        '**Bitte** ~~(petición a otra persona)~~',
        '**Wunsch** ~~(deseo propio)~~',
        '**Bitte** — höfliche Frage mit *Hätten Sie …?*',
        '**Wunsch** — mit *wäre gern*',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 2 · Höflich machen',
      frage: 'Formuliere die direkten Sätze höflich um.',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Helfen Sie mir! → ___',
        'Ich will einen Tee. → ___',
        'Mach das Fenster zu! → ___',
      ],
      loesungen: [
        '**Könnten Sie** mir bitte **helfen**?',
        'Ich **hätte gern** einen Tee.',
        '**Würdest du** bitte das Fenster **zumachen**? ~~(o: Könntest du…?)~~',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 3 · Selbst bilden',
      frage: 'Schreib je einen Satz …',
      loesungLabel: 'Mögliche Lösung',
      aufgaben: [
        '… eine höfliche Bitte an deinen Nachbarn ~~(la música está muy alta)~~',
        '… einen Wunsch für das Wochenende',
      ],
      loesungen: [
        '**Könnten Sie** die Musik bitte leiser machen? ~~También vale: Würden Sie…? / Wäre es möglich, dass…?~~',
        'Ich **würde** am Wochenende **gern** einen Ausflug **machen**. ~~Cualquier deseo con würde gern / hätte gern es correcto.~~',
      ],
    },

    { type: 'rule' },

    // ── Prüfungsbezug ─────────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Schreiben · Teil 3 (formelle E-Mail, ~40 Wörter)',
      titel: '2 Lücken',
      anweisung: 'In der formellen E-Mail bittest du oft höflich um etwas. Ergänze:',
      absaetze: [
        '„Sehr geehrte Frau Weber, ich {1} am Donnerstag leider keine Zeit. {2} wir den Termin auf Freitag verschieben? Mit freundlichen Grüßen …“',
      ],
      optionen: ['(1) haben → Konjunktiv II', '(2) können → Konjunktiv II'],
      loesungLabel: 'Lösung',
      loesungen: [
        '{1} **hätte** — eigene Form von *haben*.',
        '{2} **Könnten** — höfliche Frage, Verb auf Position 1.',
      ],
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Beim **Sprechen Teil 1 (Gemeinsam etwas planen)** sind diese Formen Gold wert: *„Wir **könnten** uns um drei treffen.“ — „Ich **würde** lieber später kommen.“* So machst du Vorschläge und reagierst höflich — genau das bewerten die Prüfer.',
    },

    { type: 'rule' },

    // ── Abschluss ─────────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Funktion', 'Form', 'Beispiel'],
      zeilen: [
        ['Bitte (Sie)', 'Könnten Sie …?', 'Könnten Sie mir helfen?'],
        ['Bitte (du)', 'Würdest du …?', 'Würdest du mir helfen?'],
        ['Wunsch', 'würde gern + Inf.', 'Ich würde gern reisen.'],
        ['Wunsch (haben)', 'hätte gern', 'Ich hätte gern einen Kaffee.'],
        ['höfliche Frage', 'Wäre es möglich …?', 'Wäre es möglich, später zu kommen?'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich kann mit *Könnten Sie …?* und *Würdest du …?* höflich um etwas bitten.',
        'Ich kann Wünsche mit *würde gern* und *hätte gern* ausdrücken.',
        'Ich benutze *hätte, wäre, könnte* statt *würde haben/sein/können*.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Mit dem Konjunktiv II klingst du höflich — perfekt für E-Mails und Gespräche. In formellen Texten brauchst du aber noch etwas anderes: den **Genitiv** (*wegen des Wetters, die Adresse des Hotels*). Der ist das Thema der nächsten Lektion.',
    },
  ],
}
