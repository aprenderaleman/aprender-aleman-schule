// Lektion 11 · Passiv mit Modalverben & Passiversatzformen
//
// Bloque 1 «Grammatik & Struktur». Sigue el estándar de la lección
// modelo 04 (docs/deutschb2/KANON.md + docs/deutschc1/FORMAT.md).

export default {
  spec: ['Bloque 1', 'Grammatik & Struktur', 'Niveau B2', 'Prüfungsrelevanz: Lesen & Schreiben'],
  h1: 'Passiv mit Modalverben & Passiversatzformen',
  lead: 'Muss gemacht werden, lässt sich machen, ist zu machen, ist machbar: vier Wege, dasselbe zu sagen — und alle vier stehen in formellen B2-Texten.',

  content: [
    // ── Lernziele ─────────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'das Passiv mit Modalverben bilden: *muss gemacht werden, konnte repariert werden*',
        'die vier Passiversatzformen erkennen: *man*, *sich lassen*, *sein + zu + Infinitiv*, *-bar*',
        'zwischen den Formen umformen und das passende Register wählen',
      ],
    },

    { type: 'rule' },

    // ── Kernwortschatz ────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Kernwortschatz',
      kopf: ['Struktur', 'Beispiel', 'Bedeutung'],
      zeilen: [
        ['Modalverb + P II + werden', 'Der Fehler muss behoben werden.', 'hay que / debe hacerse'],
        ['Präteritum: musste/konnte + P II + werden', 'Das Auto konnte repariert werden.', 'pudo repararse'],
        ['man + Aktiv', 'Man kann das Problem lösen.', '«se» impersonal'],
        ['sich lassen + Infinitiv', 'Das Problem lässt sich lösen.', 'se puede (posibilidad)'],
        ['sein + zu + Infinitiv', 'Das Formular ist auszufüllen.', 'debe / puede hacerse (formal)'],
        ['Adjektiv auf -bar', 'Das Problem ist lösbar.', 'soluble, realizable (posibilidad)'],
      ],
    },

    { type: 'rule' },

    // ── Erklärung ─────────────────────────────────────────────────
    {
      type: 'prose',
      eyebrow: 'Erklärung — Modalverb rein, werden ans Ende',
      absaetze: [
        'Kommt ein **Modalverb** ins Passiv, bleibt es konjugiert auf Position 2; am Satzende steht __Partizip II + werden__: *Der Antrag **muss** bis Freitag **eingereicht werden**.* Im Präteritum ändert sich nur das Modalverb: *Das Auto **konnte** noch **repariert werden**.* Im Nebensatz rückt das Modalverb ganz nach hinten: *…, dass der Antrag eingereicht **werden muss**.*',
      ],
    },
    {
      type: 'steps',
      steps: [
        {
          badge: 'man',
          titel: 'man + Aktiv — die einfachste Alternative',
          text: 'Neutral und immer korrekt: __Man muss den Antrag einreichen.__ = *Der Antrag muss eingereicht werden.* ~~Es el equivalente más directo del «se» impersonal español — y tu salvavidas si el Passiv se complica.~~',
        },
        {
          badge: 'lässt sich',
          titel: 'sich lassen + Infinitiv — können im Passiv',
          text: 'Bedeutet immer **Möglichkeit** (= kann + P II + werden): __Das Problem lässt sich lösen.__ Präteritum: __Der Termin ließ sich nicht verschieben.__ Sehr häufig im gesprochenen und geschriebenen B2-Deutsch.',
        },
        {
          badge: 'sein + zu',
          titel: 'sein + zu + Infinitiv und -bar — das formelle Register',
          text: '__sein + zu + Infinitiv__ bedeutet je nach Kontext **müssen** oder **können**: *Das Formular **ist** vollständig **auszufüllen**.* (= muss) · *Der Lärm **ist** kaum **zu ertragen**.* (= kann kaum). Adjektive auf __-bar__ drücken Möglichkeit aus: __machbar, lösbar, erreichbar, bezahlbar__. Beide Formen prägen Regeltexte und Anzeigen — genau die Textsorte von Lesen Teil 5.',
        },
      ],
    },

    { type: 'rule' },

    // ── Beispiele ─────────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele — Passiv mit Modalverben',
      kicker: 'Modalverb + Passiv',
      titel: 'müssen, können, dürfen im Passiv',
      items: [
        { text: 'Die Miete **muss** bis zum dritten Werktag **überwiesen werden**.', gl: '— hay que transferir' },
        { text: 'Das Gerät **kann** kostenlos **umgetauscht werden**.', gl: '' },
        { text: 'Im Treppenhaus **dürfen** keine Fahrräder **abgestellt werden**.', gl: '— prohibición formal' },
        { text: 'Der Schaden **konnte** schnell **behoben werden**.', gl: '— Präteritum' },
        { text: 'Der Chef sagt, dass die Berichte heute **abgegeben werden müssen**.', gl: '— Nebensatz: modal al final' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'Ersatzformen',
      titel: 'vier Wege zum selben Ziel',
      items: [
        { text: '**Man** kann den Vertrag online kündigen.', gl: '— «se puede» con man' },
        { text: 'Der Vertrag **lässt sich** online **kündigen**.', gl: '— sich lassen = Möglichkeit' },
        { text: 'Der Vertrag **ist** schriftlich **zu kündigen**.', gl: '— sein + zu = aquí obligación' },
        { text: 'Der Fehler ist leicht **vermeidbar**.', gl: '— -bar = posibilidad' },
      ],
    },
    {
      type: 'vergleich',
      titel: 'Eine Regel, vier Register — „el casco es obligatorio“',
      zeilen: [
        { satz: 'Ein Helm muss getragen werden.', label: 'Passiv mit Modalverb — neutral-formell' },
        { satz: 'Man muss einen Helm tragen.', label: 'man + Aktiv — neutral, gesprochen' },
        { satz: 'Ein Helm ist zu tragen.', label: 'sein + zu — Schild, Hausordnung, Vorschrift' },
        { satz: 'Ohne Helm lässt sich hier nicht arbeiten.', label: 'sich lassen — Möglichkeit, etwas informeller' },
      ],
    },

    { type: 'rule' },

    // ── Übungen ───────────────────────────────────────────────────
    {
      type: 'uebung',
      eyebrow: 'Anwendung — Übung 1 · Erkennen',
      frage: 'Was steckt dahinter: *müssen* oder *können*?',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Der Antrag ist bis zum 15. März einzureichen.',
        'Diese Frage lässt sich leicht beantworten.',
        'Das Ziel ist mit wenig Geld erreichbar.',
        'Die Sicherheitshinweise sind unbedingt zu beachten.',
      ],
      loesungen: [
        '**müssen** — der Antrag muss eingereicht werden. ~~(plazo oficial)~~',
        '**können** — die Frage kann leicht beantwortet werden.',
        '**können** — das Ziel kann erreicht werden. ~~(-bar = posibilidad)~~',
        '**müssen** — die Hinweise müssen beachtet werden. ~~(*unbedingt* refuerza la obligación)~~',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 2 · Umformen',
      frage: 'Bilde das Passiv mit Modalverb.',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Man muss die Fenster regelmäßig putzen.',
        'Man kann das Ticket am Automaten kaufen.',
        'Man durfte die Dokumente nicht kopieren. ~~(Präteritum)~~',
      ],
      loesungen: [
        'Die Fenster **müssen** regelmäßig **geputzt werden**.',
        'Das Ticket **kann** am Automaten **gekauft werden**.',
        'Die Dokumente **durften** nicht **kopiert werden**.',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 3 · Produzieren',
      frage: 'Formuliere die Regel dreimal um: „Die Bewerbung kann per E-Mail geschickt werden.“',
      loesungLabel: 'Mögliche Lösung',
      aufgaben: [
        'mit man',
        'mit sich lassen',
        'mit einem Adjektiv auf -bar ~~(pista: per E-Mail … möglich → versendbar)~~',
      ],
      loesungen: [
        '**Man** kann die Bewerbung per E-Mail schicken.',
        'Die Bewerbung **lässt sich** per E-Mail **schicken**.',
        'Die Bewerbung ist per E-Mail **versendbar**. ~~(también válido: Der Versand per E-Mail ist möglich.)~~',
      ],
    },

    { type: 'rule' },

    // ── Prüfungsbezug ─────────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Modul Lesen · formeller Regeltext',
      titel: 'Hausordnung verstehen',
      anweisung: 'In Lesen Teil 5 begegnen dir genau solche Sätze. Was bedeuten die markierten Formen: Pflicht oder Möglichkeit?',
      absaetze: [
        'Aus der Hausordnung: „Die Mülltonnen **sind** jeweils dienstags **bereitzustellen** {1}. Reparaturen **lassen sich** über das Online-Portal **melden** {2}. Schäden am Gebäude **müssen** der Verwaltung unverzüglich **gemeldet werden** {3}.“',
      ],
      optionen: [
        '(1) a) Pflicht · b) Möglichkeit',
        '(2) a) Pflicht · b) Möglichkeit',
        '(3) a) Pflicht · b) Möglichkeit',
      ],
      loesungLabel: 'Lösung',
      loesungen: [
        '{1} **a) Pflicht** — *sein + zu* in einer Hausordnung = müssen. ~~(los cubos DEBEN sacarse el martes)~~',
        '{2} **b) Möglichkeit** — *sich lassen* = können. ~~(se PUEDEN comunicar por el portal)~~',
        '{3} **a) Pflicht** — *müssen + gemeldet werden*, verstärkt durch *unverzüglich*. ~~(de inmediato)~~',
      ],
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'In **Lesen Teil 5** entscheidet oft genau diese Frage: Pflicht oder Möglichkeit? Merk dir: *sein + zu* in Vorschriften = fast immer **müssen**; *sich lassen* und *-bar* = immer **können**. Und in der formellen Nachricht hebt ein Satz wie *Das Problem konnte bisher nicht gelöst werden* dein Niveau sofort.',
    },

    { type: 'rule' },

    // ── Abschluss ─────────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Form', 'Bedeutung', 'Register'],
      zeilen: [
        ['muss/kann + P II + werden', 'Pflicht / Möglichkeit', 'neutral-formell'],
        ['man + Aktiv', 'beide', 'neutral, gesprochen'],
        ['sich lassen + Infinitiv', 'nur können', 'neutral'],
        ['sein + zu + Infinitiv', 'müssen oder können (Kontext!)', 'formell, Vorschriften'],
        ['-bar', 'nur können', 'formell, kompakt'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich bilde das Passiv mit Modalverb: *muss gemacht werden*, auch im Präteritum und im Nebensatz.',
        'Ich erkenne, ob *sein + zu* im Kontext müssen oder können bedeutet.',
        'Ich kann eine Regel mit *man*, *sich lassen* und *-bar* umformulieren.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Damit ist das Verbsystem des B2 komplett. Als Nächstes rückt das Nomen in den Fokus: **komplexe Relativsätze** — mit Relativpronomen im Genitiv (*dessen, deren*) und mit Präposition (*mit dem, auf die*).',
    },
  ],
}
