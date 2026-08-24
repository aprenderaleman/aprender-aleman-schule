// Lektion 04 · Konnektoren I — Grund, Einräumung, Folge
//
// ═══ LECCIÓN MODELO del curso B2 — migrada de curso-b2.html ═══
// Fija el estándar para las otras 41: mismas 8 secciones que el C1
// (docs/deutschc1/FORMAT.md), con el Kernwortschatz adaptado al tema
// cuando es más útil como tabla que como lista de palabras.

export default {
  spec: ['Bloque 1', 'Grammatik & Struktur', 'Niveau B2', 'Prüfungsrelevanz: alle Module'],
  h1: 'Konnektoren I',
  lead: 'Sätze logisch verbinden: Grund (kausal), Einräumung (konzessiv) und Folge (konsekutiv) — und den Konnektor an die richtige Verbstellung koppeln.',

  content: [
    // ── Lernziele ─────────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'kausale, konzessive und konsekutive Sätze sicher bilden',
        'Konjunktion, Subjunktion und Verbindungsadverb an der Verbstellung erkennen',
        'den passenden Konnektor auswählen und korrekt interpungieren',
      ],
    },

    { type: 'rule' },

    // ── Kernwortschatz ────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Kernwortschatz',
      kopf: ['Konnektor', 'Bedeutung', 'Typ & Verbstellung'],
      zeilen: [
        ['weil / da', 'porque / dado que', 'Subjunktion → Verb ans Ende'],
        ['denn', 'porque (pues)', 'Konjunktion → Verb Position 2'],
        ['deshalb / daher', 'por eso', 'Adverb → Inversion'],
        ['obwohl', 'aunque', 'Subjunktion → Verb ans Ende'],
        ['trotzdem / dennoch', 'aun así / sin embargo', 'Adverb → Inversion'],
        ['sodass / so … dass', 'de modo que', 'Subjunktion → Verb ans Ende'],
        ['folglich', 'por consiguiente', 'Adverb → Inversion'],
      ],
    },

    { type: 'rule' },

    // ── Erklärung ─────────────────────────────────────────────────
    {
      type: 'prose',
      eyebrow: 'Erklärung — die drei Typen',
      absaetze: [
        'Ein Konnektor verbindet nicht nur Bedeutungen, er **bestimmt auch die Wortstellung**. ~~La clave del B2: cada tipo coloca el verbo en un sitio distinto.~~',
      ],
    },
    {
      type: 'steps',
      steps: [
        {
          badge: 'Verb 2',
          titel: 'Konjunktion (Position 0)',
          text: 'Verbindet zwei Hauptsätze; das Verb bleibt an __Position 2__. Typisch: **denn**.\n__Ich bleibe zu Hause, denn ich bin krank.__',
        },
        {
          badge: 'Verb Ende',
          titel: 'Subjunktion (Nebensatz)',
          text: 'Leitet einen Nebensatz ein; das Verb rutscht __ans Ende__. Typisch: **weil, da, obwohl, sodass**.\n__Ich bleibe zu Hause, weil ich krank bin.__',
        },
        {
          badge: 'Inversion',
          titel: 'Verbindungsadverb (Position 1)',
          text: 'Steht auf Position 1 → __Verb vor Subjekt__. Typisch: **deshalb, trotzdem, folglich**.\n__Ich bin krank, deshalb bleibe ich zu Hause.__',
        },
      ],
    },

    { type: 'rule' },

    // ── Beispiele ─────────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele — Die drei Bedeutungen',
      kicker: 'kausal',
      titel: 'Grund — „¿por qué?“',
      items: [
        { text: 'Ich lerne Deutsch, **weil** ich in Wien studieren **möchte**.', gl: '— Nebensatz, verbo al final' },
        { text: 'Ich lerne Deutsch, **denn** ich **möchte** in Wien studieren.', gl: '— Hauptsatz, verbo 2º' },
        { text: 'Ich möchte in Wien studieren, **deshalb lerne** ich Deutsch.', gl: '— adverbio, inversión' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'konzessiv',
      titel: 'Einräumung — „aunque / a pesar de“',
      items: [
        { text: 'Ich gehe joggen, **obwohl** es **regnet**.', gl: '— Nebensatz, verbo al final' },
        { text: 'Es regnet. **Trotzdem gehe** ich joggen.', gl: '— adverbio, inversión' },
        { text: '**Trotz** des Regens gehe ich joggen.', gl: '— Präposition + Genitiv' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'konsekutiv',
      titel: 'Folge — „así que / de modo que“',
      items: [
        { text: 'Es regnete stark, **sodass** wir zu Hause **blieben**.', gl: '— Nebensatz, verbo al final' },
        { text: 'Es war **so** kalt, **dass** wir zu Hause **blieben**.', gl: '— so + Adjektiv … dass' },
      ],
    },
    {
      type: 'vergleich',
      titel: 'Der große Vergleich — misma idea, tres estructuras',
      zeilen: [
        { satz: 'Ich bleibe zu Hause, weil ich krank bin.', label: 'Subjunktion → Verb ans Ende' },
        { satz: 'Ich bleibe zu Hause, denn ich bin krank.', label: 'Konjunktion → Verb Position 2' },
        { satz: 'Ich bin krank, deshalb bleibe ich zu Hause.', label: 'Adverb → Inversion' },
      ],
    },

    { type: 'rule' },

    // ── Übungen ───────────────────────────────────────────────────
    {
      type: 'uebung',
      eyebrow: 'Anwendung — Übung 1 · Erkennen',
      frage: 'Bestimme den Typ: kausal, konzessiv oder konsekutiv.',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Ich bleibe zu Hause, weil ich müde bin.',
        'Es war so kalt, dass wir umkehrten.',
        'Obwohl er wenig lernt, besteht er die Prüfung.',
        'Es regnet. Trotzdem gehen wir spazieren.',
      ],
      loesungen: [
        '**kausal** (weil)',
        '**konsekutiv** (so … dass)',
        '**konzessiv** (obwohl)',
        '**konzessiv** (trotzdem)',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 2 · Verbinden',
      frage: 'Nutze den passenden Konnektor.',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Er ging zur Arbeit. Er war krank. ~~(Einräumung)~~',
        'Es schneite die ganze Nacht. Die Straßen waren gesperrt. ~~(Folge)~~',
        'Es war spät. Wir gingen nach Hause. ~~(Adverb)~~',
      ],
      loesungen: [
        'Er ging zur Arbeit, **obwohl** er krank **war**.',
        'Es schneite die ganze Nacht, **sodass** die Straßen gesperrt **waren**.',
        'Es war spät, **deshalb gingen** wir nach Hause.',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 3 · Umformen',
      frage: 'Von der Präposition zum Nebensatz.',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Wegen des Staus kam ich zu spät. → ~~(weil …)~~',
        'Trotz der Kälte gingen wir spazieren. → ~~(obwohl …)~~',
      ],
      loesungen: [
        '**Weil** es einen Stau **gab**, kam ich zu spät.',
        '**Obwohl** es kalt **war**, gingen wir spazieren.',
      ],
    },

    { type: 'rule' },

    // ── Prüfungsbezug ─────────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Prüfungsformat · Auswahlaufgabe',
      titel: '3 Lücken',
      anweisung: 'So sieht das im Prüfungsformat aus: den passenden Konnektor einsetzen (Auswahl).',
      absaetze: [
        'Viele Studierende arbeiten neben dem Studium, {1} sie ihren Lebensunterhalt finanzieren müssen. {2} bleibt oft wenig Zeit zum Lernen. Ein Nebenjob ist {3} nützlich, weil er praktische Erfahrung bringt.',
      ],
      optionen: [
        '(1) a) weil · b) obwohl · c) trotzdem',
        '(2) a) Weil · b) Deshalb · c) Obwohl',
        '(3) a) sodass · b) trotzdem · c) folglich',
      ],
      loesungLabel: 'Lösung',
      loesungen: [
        '{1} **a) weil** — Grund, Verb ans Ende (… finanzieren müssen).',
        '{2} **b) Deshalb** — Folge, Inversion (Deshalb bleibt …).',
        '{3} **b) trotzdem** — Einräumung (… ist trotzdem nützlich).',
      ],
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Im **Schreiben** (Forumsbeitrag) und im **Sprechen** heben *obwohl, trotzdem, deshalb* das Kriterium „Strukturen“. Häufigster Fehler: die Verbstellung — nach *weil/obwohl* das Verb ans Ende, nach *deshalb/trotzdem* Inversion. ~~No calques el orden del español.~~',
    },

    { type: 'rule' },

    // ── Abschluss ─────────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Bedeutung', 'Nebensatz (Verb Ende)', 'Adverb (Inversion)', 'Präposition'],
      zeilen: [
        ['kausal', 'weil, da', 'deshalb, daher', 'wegen + Gen.'],
        ['konzessiv', 'obwohl', 'trotzdem, dennoch', 'trotz + Gen.'],
        ['konsekutiv', 'sodass, so … dass', 'folglich, also', '—'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich wähle den passenden Konnektor nach der Bedeutung (Grund / Einräumung / Folge).',
        'Nach *weil* und *obwohl* setze ich das Verb ans Ende.',
        'Nach *deshalb* und *trotzdem* beachte ich die Inversion.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Grund, Einräumung und Folge sind die Basis der Argumentation. In der nächsten Lektion kommen die übrigen Bedeutungen dazu: **final** (Zweck), **temporal** (Zeit) und **konditional** (Bedingung) — mit denselben drei Verbstellungsregeln.',
    },
  ],
}
