// Lektion 08 · Konjunktiv II der Vergangenheit
//
// Bloque 1 «Grammatik & Struktur». Sigue el estándar de la lección
// modelo 04 (docs/deutschb2/KANON.md + docs/deutschc1/FORMAT.md).

export default {
  spec: ['Bloque 1', 'Grammatik & Struktur', 'Niveau B2', 'Prüfungsrelevanz: Schreiben & Sprechen'],
  h1: 'Konjunktiv II der Vergangenheit',
  lead: 'Hätte ich das gewusst! Verpasste Chancen, Vorwürfe und Beinahe-Unfälle — alles mit nur zwei Bausteinen: hätte oder wäre + Partizip II.',

  content: [
    // ── Lernziele ─────────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'den Konjunktiv II der Vergangenheit mit *hätte/wäre + Partizip II* bilden',
        'irreale Bedingungen der Vergangenheit formulieren: *Wenn ich das gewusst hätte, wäre ich …*',
        'Vorwürfe (*Du hättest … sollen!*) und *beinahe/fast*-Sätze korrekt einsetzen',
      ],
    },

    { type: 'rule' },

    // ── Kernwortschatz ────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Kernwortschatz',
      kopf: ['Struktur', 'Bedeutung', 'Beispiel'],
      zeilen: [
        ['hätte + Partizip II', 'habría hecho', 'Ich hätte das gemacht.'],
        ['wäre + Partizip II', 'habría ido (verbos con sein)', 'Ich wäre gekommen.'],
        ['hätte + Infinitiv + sollen', 'debería haber …', 'Du hättest anrufen sollen.'],
        ['hätte + Infinitiv + können', 'podría haber …', 'Wir hätten früher buchen können.'],
        ['hätte + Infinitiv + müssen', 'tendría que haber …', 'Ich hätte mehr lernen müssen.'],
        ['beinahe / fast + K II Verg.', 'por poco / casi', 'Ich wäre beinahe gefallen.'],
        ['an deiner Stelle', 'yo en tu lugar', 'An deiner Stelle hätte ich gefragt.'],
      ],
    },

    { type: 'rule' },

    // ── Erklärung ─────────────────────────────────────────────────
    {
      type: 'prose',
      eyebrow: 'Erklärung — nur zwei Hilfsverben',
      absaetze: [
        'Für die irreale Vergangenheit gibt es im Deutschen **genau eine Struktur**: __hätte oder wäre + Partizip II__. Die Wahl folgt derselben Regel wie im Perfekt: Verben mit *sein* (Bewegung, Veränderung) → **wäre**, alle anderen → **hätte**. ~~El error número uno del hispanohablante: calcar «habría hecho» como *würde haben gemacht* o *würde gemacht haben*. Esa forma NO existe en este uso — di siempre **hätte gemacht**.~~',
      ],
    },
    {
      type: 'steps',
      steps: [
        {
          badge: 'Bedingung',
          titel: 'Irreale Bedingung der Vergangenheit',
          text: 'Beide Satzhälften stehen im K II der Vergangenheit: __Wenn ich das gewusst hätte, wäre ich nicht gekommen.__ Es ist zu spät — die Vergangenheit lässt sich nicht ändern, deshalb ist alles irreal.',
        },
        {
          badge: 'Vorwurf',
          titel: 'Vorwürfe und Ratschläge im Nachhinein',
          text: 'Mit Modalverb entsteht der __Doppelinfinitiv__: hätte + Infinitiv + Modalverb, beide am Ende. __Du hättest mich anrufen **sollen**!__ (Vorwurf) · __Wir hätten früher losfahren **können**.__ (verpasste Möglichkeit). Kein Partizip vom Modalverb — *hättest gesollt* klingt falsch.',
        },
        {
          badge: 'beinahe',
          titel: 'beinahe / fast — die Beinahe-Katastrophe',
          text: 'Etwas ist **nicht** passiert, aber es war knapp → K II der Vergangenheit, ohne wenn-Satz: __Ich wäre beinahe zu spät gekommen.__ ~~Contraste fuerte con el español: «casi me caigo» va en presente; el alemán exige *Ich wäre fast gefallen* — pasado irreal, porque al final NO pasó.~~',
        },
      ],
    },

    { type: 'rule' },

    // ── Beispiele ─────────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele — Irreale Vergangenheit',
      kicker: 'Bedingung',
      titel: 'was gewesen wäre — „si hubiera … habría“',
      items: [
        { text: '**Wenn** ich das **gewusst hätte**, **wäre** ich nicht **gekommen**.', gl: '' },
        { text: '**Wenn** du dich beworben **hättest**, **hättest** du die Stelle **bekommen**.', gl: '' },
        { text: '**Hätte** ich den Wecker gehört, **hätte** ich den Zug nicht **verpasst**.', gl: '— sin wenn: verbo en posición 1' },
        { text: '**Wären** wir früher **losgefahren**, **hätten** wir keinen Stau **gehabt**.', gl: '' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'Vorwurf',
      titel: 'Vorwürfe & Rat im Nachhinein',
      items: [
        { text: 'Du **hättest** mich **anrufen sollen**!', gl: '— ¡deberías haberme llamado!' },
        { text: 'Ihr **hättet** das Angebot **annehmen müssen**.', gl: '— Doppelinfinitiv al final' },
        { text: 'An deiner Stelle **hätte** ich den Vertrag genau **gelesen**.', gl: '— yo en tu lugar' },
        { text: 'Das **hättest** du mir früher **sagen können**!', gl: '' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'beinahe / fast',
      titel: 'es war knapp',
      items: [
        { text: 'Ich **wäre beinahe** zu spät zur Prüfung **gekommen**.', gl: '— casi llego tarde (¡pero no!)' },
        { text: 'Wir **hätten fast** den Flug **verpasst**.', gl: '' },
        { text: 'Sie **wäre fast** auf dem Eis **ausgerutscht**.', gl: '' },
      ],
    },
    {
      type: 'vergleich',
      titel: 'Gegenwart oder Vergangenheit? — dos irreales, dos formas',
      zeilen: [
        { satz: 'Wenn ich Zeit hätte, würde ich kommen.', label: 'irreal GEGENWART: todavía es posible en teoría' },
        { satz: 'Wenn ich Zeit gehabt hätte, wäre ich gekommen.', label: 'irreal VERGANGENHEIT: ya no tiene remedio' },
        { satz: 'Ich würde gemacht haben … ✗', label: 'falsch: «habría hecho» = hätte gemacht' },
      ],
    },

    { type: 'rule' },

    // ── Mehr Beispiele ────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Mehr Beispiele',
      titel: 'Verpasste Chancen im Alltag',
      items: [
        { text: '**Wenn** wir den Wetterbericht **gelesen hätten**, **wären** wir nicht ohne Schirm **losgegangen**.', gl: '— irreale Bedingung der Vergangenheit' },
        { text: '**Hätte** Paula das Angebot **angenommen**, **wäre** sie ins Ausland **gezogen**.', gl: '— sin wenn: verbo en posición 1' },
        { text: 'Ohne deine Hilfe **hätte** ich den Umzug nie **geschafft**.', gl: '— ohne …: la condición va implícita' },
        { text: 'Der Hausmeister **hätte** die Heizung schon im Oktober **reparieren müssen**.', gl: '— Doppelinfinitiv al final' },
        { text: 'Das Kind **wäre beinahe** vom Fahrrad **gefallen**.', gl: '— casi se cae (pero no se cayó)' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'Im Beruf',
      titel: 'Rückblick auf ein schwieriges Projekt',
      items: [
        { text: '**Wenn** wir die Kunden früher **informiert hätten**, **hätten** sie sich nicht **beschwert**.', gl: '' },
        { text: 'Die Firma **hätte** mehr Personal **einstellen sollen**.', gl: '— crítica: debería haber …' },
        { text: 'An Ihrer Stelle **hätte** ich die Präsentation **verschoben**.', gl: '— consejo a posteriori, registro formal' },
        { text: 'Das Projekt **wäre fast** am Budget **gescheitert**.', gl: '— fast + wäre: por poco fracasa' },
        { text: 'Mit etwas mehr Zeit **hätten** wir das besser **machen können**.', gl: '— posibilidad desaprovechada' },
      ],
    },

    { type: 'rule' },

    // ── Prüfungsbezug ─────────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Prüfungsformat · Auswahlaufgabe',
      titel: '3 Lücken',
      anweisung: 'So sieht das im Prüfungsformat aus: die korrekte Vergangenheitsform des Konjunktivs II auswählen.',
      absaetze: [
        'Gestern hätte ich fast einen wichtigen Termin verpasst — ich {1} beinahe im Büro eingeschlafen. Mein Kollege meinte, ich {2} früher ins Bett gehen sollen. Er hat recht: Wenn ich mehr {3}, wäre mir das nicht passiert.',
      ],
      optionen: [
        '(1) a) hätte · b) wäre · c) würde',
        '(2) a) hätte · b) wäre · c) habe',
        '(3) a) geschlafen hätte · b) geschlafen wäre · c) schlafen würde',
      ],
      loesungLabel: 'Lösung',
      loesungen: [
        '{1} **b) wäre** — *einschlafen* bildet das Perfekt mit *sein* → wäre eingeschlafen.',
        '{2} **a) hätte** — Vorwurf mit Doppelinfinitiv: *hätte … gehen sollen*.',
        '{3} **a) geschlafen hätte** — *schlafen* bildet das Perfekt mit *haben*; im Nebensatz steht das konjugierte *hätte* ganz am Ende.',
      ],
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Im **Sprechen** (Diskussion) und im **Forumsbeitrag** wirkt ein Satz wie *Man hätte früher reagieren müssen* sofort B2-reif. Kontrolliere zwei Dinge: richtiges Hilfsverb (*wäre* bei Bewegung/Veränderung) und den Doppelinfinitiv am Satzende — und streiche jedes *würde haben* aus deinem Kopf.',
    },

    { type: 'rule' },

    // ── Abschluss ─────────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Funktion', 'Muster', 'Beispiel'],
      zeilen: [
        ['irreale Bedingung', 'Wenn + hätte/wäre + P II, hätte/wäre + P II', 'Wenn ich das gewusst hätte, wäre ich gegangen.'],
        ['Vorwurf', 'hätte + Infinitiv + sollen/müssen', 'Du hättest anrufen sollen!'],
        ['verpasste Möglichkeit', 'hätte + Infinitiv + können', 'Wir hätten fragen können.'],
        ['beinahe-Ereignis', 'beinahe/fast + hätte/wäre + P II', 'Ich wäre fast gefallen.'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich bilde die irreale Vergangenheit mit *hätte/wäre + Partizip II* — nie mit *würde haben*.',
        'Ich wähle das Hilfsverb nach der Perfekt-Regel: Bewegung/Veränderung → wäre.',
        'Ich formuliere Vorwürfe mit *hätte + Infinitiv + sollen* und beinahe-Sätze mit *fast/beinahe*.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Der Konjunktiv II ist damit komplett. Sein kleiner Bruder wartet schon: der **Konjunktiv I** der indirekten Rede — die Form, mit der Zeitungen berichten, was andere gesagt haben (*er sei, er habe*). Im B2 musst du ihn vor allem **erkennen**.',
    },
  ],
}
