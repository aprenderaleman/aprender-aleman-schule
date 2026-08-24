// Lektion 07 · Konjunktiv II — irreale Bedingungen & Wünsche
//
// Bloque 1 «Grammatik & Struktur». Sigue el estándar de la lección
// modelo 04 (docs/deutschb2/KANON.md + docs/deutschc1/FORMAT.md).

export default {
  spec: ['Bloque 1', 'Grammatik & Struktur', 'Niveau B2', 'Prüfungsrelevanz: Schreiben & Sprechen'],
  h1: 'Konjunktiv II',
  lead: 'Was wäre, wenn? Irreale Bedingungen, Wünsche und höfliche Bitten — mit würde + Infinitiv und den Formen, die jeder auswendig können muss: wäre, hätte, könnte.',

  content: [
    // ── Lernziele ─────────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'den Konjunktiv II mit *würde + Infinitiv* und mit den eigenen Formen (*wäre, hätte, könnte …*) bilden',
        'irreale Bedingungssätze der Gegenwart formulieren: *Wenn ich Zeit hätte, würde ich …*',
        'Wünsche (*Wenn ich doch …!*) und höfliche Bitten (*Könnten Sie …?*) sicher einsetzen',
      ],
    },

    { type: 'rule' },

    // ── Kernwortschatz ────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Kernwortschatz',
      kopf: ['Indikativ', 'Konjunktiv II', 'Bedeutung'],
      zeilen: [
        ['ich bin', 'ich wäre', 'sería / fuera'],
        ['ich habe', 'ich hätte', 'tendría / tuviera'],
        ['ich kann', 'ich könnte', 'podría'],
        ['ich muss', 'ich müsste', 'debería / tendría que'],
        ['ich darf', 'ich dürfte', 'podría (permiso); probablemente'],
        ['ich soll', 'ich sollte', 'debería (consejo)'],
        ['ich komme', 'ich käme', 'vendría'],
        ['ich gehe', 'ich ginge', 'iría'],
        ['ich weiß', 'ich wüsste', 'sabría'],
        ['es gibt', 'es gäbe', 'habría'],
        ['alle anderen Verben', 'würde + Infinitiv', 'forma estándar'],
      ],
    },

    { type: 'rule' },

    // ── Erklärung ─────────────────────────────────────────────────
    {
      type: 'prose',
      eyebrow: 'Erklärung — eine Form für zwei spanische',
      absaetze: [
        'Der Konjunktiv II markiert das **Irreale**: Etwas ist nicht so, aber man stellt es sich vor. ~~Ojo al contraste clave: donde el español reparte «si tuviera» (subjuntivo) e «iría» (condicional), el alemán usa UNA sola forma en las dos mitades: *Wenn ich Zeit **hätte**, **würde** ich gehen.* No busques un «subjuntivo alemán» distinto del condicional — es la misma forma.~~',
      ],
    },
    {
      type: 'steps',
      steps: [
        {
          badge: 'Form 1',
          titel: 'würde + Infinitiv — der Standard',
          text: 'Für die meisten Verben: __würde__ auf Position 2, Infinitiv ans Ende. __Ich würde mehr reisen.__ Im Nebensatz wandert *würde* ans Ende: __…, wenn ich mehr reisen würde.__',
        },
        {
          badge: 'Form 2',
          titel: 'Eigene Formen — Pflicht bei sein, haben, Modalverben',
          text: 'Bei **sein, haben** und den **Modalverben** klingt *würde* falsch — hier braucht es die eigene Form: __wäre, hätte, könnte, müsste, dürfte, sollte__. Häufige starke Verben haben auch eine: __käme, ginge, wüsste, gäbe__. Merkmal: Präteritum + Umlaut + *-e*.',
        },
        {
          badge: 'Gebrauch',
          titel: 'Drei Funktionen im B2',
          text: '**1. Irreale Bedingung:** __Wenn ich reich wäre, würde ich weniger arbeiten.__ **2. Wunsch** mit *doch/nur* (+ Ausrufezeichen): __Wenn ich doch mehr Zeit hätte!__ / __Hätte ich nur mehr Zeit!__ **3. Höflichkeit:** __Könnten Sie mir helfen? Ich hätte gern einen Termin.__',
        },
      ],
    },

    { type: 'rule' },

    // ── Beispiele ─────────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele — Irreale Bedingungen',
      kicker: 'irreale Bedingung',
      titel: 'Gegenwart — „si tuviera … haría“',
      items: [
        { text: '**Wenn** ich mehr Zeit **hätte**, **würde** ich einen Sprachkurs **machen**.', gl: '' },
        { text: '**Wenn** die Wohnung billiger **wäre**, **würden** wir sie sofort **nehmen**.', gl: '' },
        { text: '**Wenn** es keine Prüfung **gäbe**, **wäre** ich entspannter.', gl: '— es gäbe = habría' },
        { text: '**Wüsste** ich die Antwort, **würde** ich sie dir **sagen**.', gl: '— sin wenn: verbo en posición 1' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'Wunsch',
      titel: 'Wünsche — „¡ojalá …!“',
      items: [
        { text: '**Wenn** ich **doch** schon B2 **hätte**!', gl: '— doch/nur obligatorio en el deseo' },
        { text: '**Wäre** das Wochenende **nur** länger!', gl: '' },
        { text: '**Wenn** wir **doch nur** am Meer **wohnen würden**!', gl: '' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'Höflichkeit',
      titel: 'höfliche Bitten — im Alltag und in der formellen Nachricht',
      items: [
        { text: '**Könnten** Sie das bitte wiederholen?', gl: '— ¿podría …?' },
        { text: 'Ich **hätte** gern einen Termin am Freitag.', gl: '— quisiera' },
        { text: '**Wären** Sie so nett, mir die Unterlagen zu schicken?', gl: '' },
        { text: 'Ich **würde** vorschlagen, dass wir uns um zehn treffen.', gl: '' },
      ],
    },
    {
      type: 'vergleich',
      titel: 'real oder irreal? — derselbe Satz, zwei Welten',
      zeilen: [
        { satz: 'Wenn ich Zeit habe, helfe ich dir.', label: 'real: Indikativ — es posible' },
        { satz: 'Wenn ich Zeit hätte, würde ich dir helfen.', label: 'irreal: Konjunktiv II — ahora no la tengo' },
        { satz: 'Wenn ich Zeit haben würde … ✗', label: 'stilistisch falsch: bei haben/sein/Modalverben die eigene Form' },
      ],
    },

    { type: 'rule' },

    // ── Übungen ───────────────────────────────────────────────────
    {
      type: 'uebung',
      eyebrow: 'Anwendung — Übung 1 · Erkennen',
      frage: 'Real oder irreal? Und welche Funktion: Bedingung, Wunsch oder Höflichkeit?',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Wenn der Bus pünktlich kommt, schaffe ich den Zug.',
        'Könnten Sie mir bitte das Formular schicken?',
        'Wenn ich doch in Spanien wäre!',
        'Wenn er weniger arbeiten würde, hätte er mehr Energie.',
      ],
      loesungen: [
        '**real** — Bedingung im Indikativ.',
        '**irreal** in der Form — Funktion: **höfliche Bitte**.',
        '**irreal** — **Wunsch** (doch + Ausrufezeichen).',
        '**irreal** — **Bedingung** in der Gegenwart.',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 2 · Umformen',
      frage: 'Mach aus der Realität einen irrealen Bedingungssatz.',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Ich habe kein Auto, deshalb fahre ich mit dem Bus.',
        'Er ist nicht fit, deshalb macht er nicht beim Marathon mit.',
        'Wir wissen die Adresse nicht, deshalb fragen wir nach.',
      ],
      loesungen: [
        '**Wenn** ich ein Auto **hätte**, **würde** ich nicht mit dem Bus **fahren**.',
        '**Wenn** er fit **wäre**, **würde** er beim Marathon **mitmachen**.',
        '**Wenn** wir die Adresse **wüssten**, **würden** wir nicht **nachfragen**.',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 3 · Produzieren',
      frage: 'Formuliere frei: zwei Wünsche und eine höfliche Bitte an deinen Vermieter.',
      loesungLabel: 'Mögliche Lösung',
      aufgaben: [
        'Wunsch: mehr Freizeit',
        'Wunsch: eine größere Wohnung',
        'Bitte: die Heizung reparieren',
      ],
      loesungen: [
        '**Wenn** ich **doch** mehr Freizeit **hätte**! ~~(o: Hätte ich nur mehr Freizeit!)~~',
        '**Wenn** unsere Wohnung **nur** größer **wäre**!',
        '**Könnten** Sie bitte die Heizung reparieren lassen? ~~(también: Wären Sie so nett, … / Ich wäre Ihnen dankbar, wenn …)~~',
      ],
    },

    { type: 'rule' },

    // ── Prüfungsbezug ─────────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Prüfungsformat · Auswahlaufgabe',
      titel: '3 Lücken',
      anweisung: 'So sieht das im Prüfungsformat aus: die passende Konjunktiv-II-Form auswählen.',
      absaetze: [
        'Sehr geehrte Frau Berger, ich {1} Sie bitten, den Kurstermin zu verschieben. Wenn der Unterricht abends {2}, könnte ich regelmäßig teilnehmen. Ich {3} mich sehr über eine kurze Rückmeldung freuen.',
      ],
      optionen: [
        '(1) a) hätte · b) würde · c) wäre',
        '(2) a) stattfand · b) stattfinden würde · c) stattfände würde',
        '(3) a) würde · b) hätte · c) wüsste',
      ],
      loesungLabel: 'Lösung',
      loesungen: [
        '{1} **b) würde** — *ich würde Sie bitten* ist die höfliche Standardformel; vor dem Infinitiv *bitten* passen *hätte* und *wäre* nicht.',
        '{2} **b) stattfinden würde** — irreale Bedingung; im Nebensatz steht *würde* ganz am Ende. *stattfand* wäre reales Präteritum, *stattfände würde* verdoppelt die Form.',
        '{3} **a) würde** — *ich würde mich freuen*: fester Schluss der formellen Nachricht.',
      ],
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'In der **formellen Nachricht** (Schreiben Teil 2) sind *Ich würde Sie bitten …*, *Könnten Sie …* und *Ich wäre Ihnen dankbar, wenn …* fast Pflicht — sie zählen bei „Wortschatz“ und „Strukturen“ zugleich. ~~Y recuerda: *würde haben* y *würde sein* delatan al hispanohablante — di **hätte** y **wäre**.~~',
    },

    { type: 'rule' },

    // ── Abschluss ─────────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Funktion', 'Muster', 'Beispiel'],
      zeilen: [
        ['irreale Bedingung', 'Wenn + K II …, würde + Inf.', 'Wenn ich Zeit hätte, würde ich kommen.'],
        ['Wunsch', 'Wenn … doch/nur + K II!', 'Wenn ich doch mehr Zeit hätte!'],
        ['Höflichkeit', 'könnte / hätte gern / wäre', 'Könnten Sie mir helfen?'],
        ['Formregel', 'sein, haben, Modalverben → eigene Form', 'wäre, hätte, könnte — nicht würde sein'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich bilde den Konjunktiv II mit *würde* und kenne die eigenen Formen auswendig.',
        'Ich formuliere irreale Bedingungssätze der Gegenwart korrekt.',
        'Ich benutze *Könnten Sie …* und *Ich hätte gern …* für höfliche Bitten.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Bis jetzt war alles Gegenwart. Die nächste Lektion blickt zurück: der **Konjunktiv II der Vergangenheit** — *hätte gemacht, wäre gegangen* — für verpasste Chancen, Vorwürfe und Beinahe-Katastrophen.',
    },
  ],
}
