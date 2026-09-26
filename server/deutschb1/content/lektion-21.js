// Lektion 21 · Lesen Teil 3: Meinungen & Kommentare
//
// Bloque 2 «Prüfungsstrategie» — módulo Lesen (canon interno: Lektion 18).
// Teil 3: kurze Meinungen zu einem Thema → dafür/dagegen/teils-teils, ca. 15 Min.

export default {
  spec: ['Bloque 2', 'Prüfungsstrategie', 'Niveau B1', 'Prüfungsrelevanz: Lesen Teil 3'],
  h1: 'Lesen Teil 3: Meinungen & Kommentare',
  lead: 'Mehrere Personen, ein Thema — und deine Frage: Ist die Person **dafür, dagegen oder teils-teils**? ~~A favor, en contra… o un poco de ambos.~~',

  content: [
    // ── Lernziele ─────────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'Meinungssprache erkennen: *finden, glauben, für/gegen sein, meiner Meinung nach*',
        'Kommentare als **dafür**, **dagegen** oder **teils-teils** einordnen',
        'Signalwörter wie *aber, trotzdem, einerseits … andererseits* richtig deuten',
        'Teil 3 in ca. 15 Minuten lösen',
      ],
    },

    { type: 'rule' },

    // ── Kernwortschatz ────────────────────────────────────────────
    {
      type: 'wortschatz',
      eyebrow: 'Kernwortschatz — Meinungssprache B1',
      items: [
        { wort: 'die Meinung, -en', kollokation: 'meiner Meinung nach', es: 'la opinión (en mi opinión)' },
        { wort: 'finden', kollokation: 'Ich finde es gut, dass …', es: 'opinar, parecer (me parece)' },
        { wort: 'glauben', kollokation: 'Ich glaube, das bringt nichts.', es: 'creer' },
        { wort: 'dafür sein', kollokation: 'Ich bin dafür.', es: 'estar a favor' },
        { wort: 'dagegen sein', kollokation: 'Ich bin total dagegen.', es: 'estar en contra' },
        { wort: 'der Vorteil, -e', kollokation: 'ein großer Vorteil', es: 'la ventaja' },
        { wort: 'der Nachteil, -e', kollokation: 'Nachteile sehen', es: 'la desventaja' },
        { wort: 'zustimmen + Dat.', kollokation: 'Ich stimme dir zu.', es: 'estar de acuerdo con' },
        { wort: 'einerseits … andererseits', kollokation: 'Einerseits ja, andererseits …', es: 'por un lado … por otro' },
        { wort: 'trotzdem', kollokation: 'Trotzdem bin ich dagegen.', es: 'aun así, sin embargo' },
        { wort: 'es kommt darauf an', kollokation: 'Es kommt darauf an, wann.', es: 'depende' },
      ],
      hinweis: '**zustimmen** braucht Dativ und keine Präposition: *Ich stimme **dir** zu.* ~~«Estar de acuerdo CON alguien» — en alemán sin «con»: ich stimme dir zu, no «mit dir».~~',
    },

    { type: 'rule' },

    // ── Erklärung ─────────────────────────────────────────────────
    {
      type: 'steps',
      eyebrow: 'Erklärung — drei Kategorien, eine Methode',
      steps: [
        {
          badge: 'dafür',
          titel: 'Positiv',
          text: 'Die Person sieht vor allem __Vorteile__: *„eine super Idee“, „ich bin dafür“, „das finde ich richtig“*.',
        },
        {
          badge: 'dagegen',
          titel: 'Negativ',
          text: 'Die Person sieht vor allem __Nachteile__: *„das bringt nichts“, „ich bin dagegen“, „das finde ich falsch“*.',
        },
        {
          badge: 'teils-teils',
          titel: 'Beides',
          text: 'Die Person sieht __Vorteile und Nachteile__ und entscheidet sich nicht klar: *„einerseits … andererseits“, „es kommt darauf an“, „ja, aber nur wenn …“*.',
        },
      ],
    },
    {
      type: 'prose',
      card: true,
      titel: 'Die wichtigste Regel: Was nach „aber“ kommt, zählt',
      absaetze: [
        'Viele Kommentare beginnen freundlich — und drehen dann: „Klar, praktisch wäre das schon, **aber** ich bin trotzdem dagegen.“ → Die Person ist **dagegen**. ~~Lo que va después de «aber» pesa más que lo de antes.~~',
        'Deshalb: Lies jeden Kommentar **bis zum Ende**. „Einerseits … andererseits“ **ohne** klare Entscheidung = teils-teils.',
      ],
    },

    { type: 'rule' },

    // ── Beispiele ─────────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele — Mini-Kommentare einordnen',
      kicker: 'dafür · dagegen · teils-teils',
      titel: 'Woran erkennst du es?',
      items: [
        { text: '„Endlich! Darauf warte ich schon seit Jahren. Super!“', gl: '— dafür: pura aprobación' },
        { text: '„Ich verstehe die Idee, aber sie löst das Problem nicht.“', gl: '— dagegen: el «aber» decide' },
        { text: '„Einerseits spart das Zeit, andererseits kostet es viel Geld. Schwierig.“', gl: '— teils-teils: sin decisión' },
        { text: '„Meiner Meinung nach nur Nachteile — ich bin klar dagegen.“', gl: '— dagegen: explícito' },
      ],
    },
    {
      type: 'beispiele',
      titel: 'Vorsicht: positiv klingende Wörter, negative Meinung',
      items: [
        { text: '„**Nett gemeint**, aber in der Praxis funktioniert das nie.“', gl: '— dagegen, aunque empiece amable' },
        { text: '„**Im Prinzip** eine gute Idee — nur leider viel zu teuer.“', gl: '— dagegen: «im Prinzip» + «leider» = no' },
      ],
    },

    { type: 'rule' },

    // ── Mehr Beispiele ────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Mehr Beispiele',
      kicker: 'dafür · dagegen · teils-teils',
      titel: 'Noch mehr Kommentare einordnen',
      items: [
        { text: '„Ich **stimme** Herrn Lenz **zu**: Mehr Grün in der Stadt ist wichtig.“', gl: '— dafür · zustimmen + Dativ' },
        { text: '„Ich **glaube** nicht, dass mehr Parkplätze helfen.“', gl: '— dagegen' },
        { text: '„Das Projekt kostet viel Geld. **Trotzdem** finde ich es richtig.“', gl: '— dafür: «trotzdem» lleva de vuelta al sí' },
        { text: '„Ein **Vorteil** ist der Preis, ein **Nachteil** die lange Fahrt. **Es kommt darauf an**, wie oft man fährt.“', gl: '— teils-teils' },
        { text: '„**Meiner Meinung nach** ist das reine Geldverschwendung.“', gl: '— dagegen: explícito' },
        { text: '„**Einerseits** mehr Freizeit, **andererseits** weniger Geld — ich weiß es wirklich nicht.“', gl: '— teils-teils: sin decisión' },
      ],
    },

    { type: 'rule' },

    // ── Prüfungsbezug ─────────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Lesen · Teil 3',
      titel: 'Komplette Übung: 5 Kommentare zu einem Thema',
      anweisung: 'In einem Online-Forum diskutieren Leserinnen und Leser über die Frage: „Sollen Geschäfte auch am Sonntag öffnen?“ Lies die Kommentare 1–5. Ist die Person dafür, dagegen oder teils-teils? Zeit: ca. 15 Minuten.',
      absaetze: [
        '**(1) Tanja, 29:** Ich arbeite samstags im Krankenhaus — der Sonntag ist mein einziger freier Tag. Für Leute wie mich wäre das eine riesige Hilfe. Ich verstehe die Kritik nicht: Niemand muss ja sonntags einkaufen, aber alle könnten.',
        '**(2) Murat, 45:** Ich habe selbst zwanzig Jahre im Einzelhandel gearbeitet. Die Verkäuferinnen und Verkäufer brauchen einen festen freien Tag mit ihren Familien. Ein offener Sonntag klingt bequem, aber er wird auf dem Rücken der Angestellten organisiert. Von mir ein klares Nein.',
        '**(3) Elena, 34:** Schwierige Frage. Einerseits wäre es praktisch, sonntags einkaufen zu können. Andererseits ist der ruhige Sonntag etwas Besonderes, das ich nicht verlieren möchte. Vielleicht wäre ein offener Sonntag pro Monat ein guter Mittelweg.',
        '**(4) Ben, 52:** Klar, bequem wäre das. Aber brauchen wir wirklich noch mehr Konsum? Sechs Tage Einkaufen reichen völlig. Wenn man nicht planen kann, hilft auch ein siebter Tag nicht.',
        '**(5) Rosa, 61:** Ich bin dafür! In vielen Ländern ist das normal, und die Innenstädte sind sonntags voller Leben statt leer. Das bringt den Cafés und kleinen Läden Kunden — und der Stadt neue Arbeitsplätze.',
      ],
      optionen: [
        '(1) Tanja → dafür / dagegen / teils-teils',
        '(2) Murat → dafür / dagegen / teils-teils',
        '(3) Elena → dafür / dagegen / teils-teils',
        '(4) Ben → dafür / dagegen / teils-teils',
        '(5) Rosa → dafür / dagegen / teils-teils',
      ],
      loesungLabel: 'Lösung mit Begründung',
      loesungen: [
        '(1) **Dafür.** „wäre das eine riesige Hilfe“ + sie verteidigt die Idee gegen Kritik.',
        '(2) **Dagegen.** Erst Verständnis („klingt bequem“), dann das entscheidende **aber** — und am Ende explizit: „ein klares Nein“.',
        '(3) **Teils-teils.** „Einerseits … andererseits“ ohne klare Entscheidung; sie sucht einen „Mittelweg“.',
        '(4) **Dagegen.** Der Anfang klingt positiv („Klar, bequem wäre das“), aber nach dem **Aber** kommen nur Argumente dagegen. ~~La trampa clásica: empieza amable, termina en contra.~~',
        '(5) **Dafür.** Explizit „Ich bin dafür!“ + zwei Vorteile (lebendige Innenstadt, Arbeitsplätze).',
      ],
      kommentar: 'Merke: Die Kommentare 2 und 4 beginnen mit Verständnis für die Gegenseite — die Meinung steht am **Ende**.',
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Unterstreiche in jedem Kommentar **ein** Wort, das die Meinung trägt (*Nein, dafür, Mittelweg …*). Bei Zeitdruck entscheidest du dann mit diesem Wort — und mit der Regel: **Nach „aber“ steht die Wahrheit.**',
    },

    { type: 'rule' },

    // ── Abschluss ─────────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Kategorie', 'Typische Signale'],
      zeilen: [
        ['dafür', 'ich bin dafür · super Idee · endlich · nur Vorteile'],
        ['dagegen', 'ich bin dagegen · bringt nichts · klares Nein · „aber“ + Kritik'],
        ['teils-teils', 'einerseits … andererseits · es kommt darauf an · Mittelweg'],
        ['Regel', 'bis zum Ende lesen — was nach „aber“ kommt, zählt'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich erkenne Meinungssprache: finden, glauben, für/gegen sein, meiner Meinung nach.',
        'Ich ordne Kommentare als dafür, dagegen oder teils-teils ein.',
        'Ich lese bis zum Ende und achte auf „aber“, „trotzdem“, „einerseits … andererseits“.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Persönliche Meinungen kannst du jetzt lesen. In der nächsten Lektion kommt das Gegenteil: **offizielle Sprache** — Hausordnungen, Aushänge, Briefe vom Amt. Dort schreibt niemand „ich finde“; dort heißt es „der Müll **ist zu trennen**“. Was das bedeutet, lernst du in Teil 4–5.',
    },
  ],
}
