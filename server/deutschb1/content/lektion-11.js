// Lektion 11 · Komparativ & Superlativ
//
// Bloque 1 · Grammatik & Struktur — sigue el estándar de lektion-08.js:
// 8 secciones (FORMAT.md), nivel B1, máximo apoyo en español.

export default {
  spec: ['Bloque 1', 'Grammatik & Struktur', 'Niveau B1', 'Prüfungsrelevanz: Schreiben & Sprechen'],
  h1: 'Komparativ & Superlativ',
  lead: 'Vergleichen auf Deutsch: schnell → schnell**er** → am schnell**sten**. ~~En alemán nunca se dice «mehr schnell».~~',

  content: [
    // ── Lernziele ─────────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'den Komparativ (-er) und den Superlativ (am -sten) bilden',
        'die wichtigsten unregelmäßigen Formen kennen (gut, gern, viel)',
        'richtig vergleichen mit **als** und **so … wie**',
      ],
    },

    { type: 'rule' },

    // ── Kernwortschatz ────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Kernwortschatz — die wichtigsten Formen',
      kopf: ['Grundform', 'Komparativ', 'Superlativ'],
      zeilen: [
        ['schnell', 'schneller', 'am schnellsten'],
        ['alt', '**ä**lter', 'am **ä**ltesten'],
        ['groß', 'gr**ö**ßer', 'am gr**ö**ßten'],
        ['jung', 'j**ü**nger', 'am j**ü**ngsten'],
        ['teuer', 'teurer', 'am teuersten'],
        ['hoch', 'h**ö**her', 'am h**ö**chsten'],
        ['gut', '**besser**', 'am **besten**'],
        ['gern', '**lieber**', 'am **liebsten**'],
        ['viel', '**mehr**', 'am **meisten**'],
      ],
    },

    { type: 'rule' },

    // ── Erklärung ─────────────────────────────────────────────────
    {
      type: 'steps',
      eyebrow: 'Erklärung — die Formen',
      steps: [
        {
          badge: '-er',
          titel: 'Komparativ',
          text: 'Adjektiv + __-er__ — immer, auch bei langen Adjektiven: interessant**er**. ~~Nunca «mehr + adjetivo»: «más rápido» NO es «mehr schnell», es «schneller».~~\nKurze Adjektive mit a/o/u bekommen oft __Umlaut__: alt → **ä**lter, groß → gr**ö**ßer.',
        },
        {
          badge: 'am -sten',
          titel: 'Superlativ',
          text: '__am + Adjektiv + -sten__: am schnellsten, am billigsten.\nNach -t, -d, -s, -z → __-esten__: am ält**esten**, am heiß**esten**. Ausnahme: groß → am gr**ö**ßten.\nVor dem Nomen mit Artikel: der schnellst**e** Zug ~~(con terminación de adjetivo, Lektion 10)~~.',
        },
        {
          badge: 'als / wie',
          titel: 'Der Vergleich',
          text: 'Unterschied → Komparativ + __als__.\nGleichheit → __so__ + Grundform + __wie__.',
        },
      ],
    },
    {
      type: 'vergleich',
      titel: 'als oder wie?',
      zeilen: [
        { satz: 'Berlin ist größer **als** Madrid.', label: 'Unterschied → als ~~«más que» → als, NUNCA wie~~' },
        { satz: 'Das Sofa ist **so** bequem **wie** das Bett.', label: 'Gleichheit → so … wie ~~«tan cómodo como»~~' },
      ],
    },
    {
      type: 'prose',
      card: true,
      absaetze: [
        '**Achtung:** *„Er ist größer **wie** ich“* hörst du auch von Deutschen — es ist trotzdem **falsch**. Nach dem Komparativ steht immer ==als==. In der Prüfung kostet *wie* hier Punkte.',
      ],
    },

    { type: 'rule' },

    // ── Beispiele ─────────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele',
      items: [
        { text: 'Mein Bruder ist älter **als** ich.', gl: '— Umlaut + als' },
        { text: 'Dieses Handy ist billiger **als** das andere.', gl: '— Komparativ + als' },
        { text: 'Sie ist genauso nett **wie** ihre Schwester.', gl: '— Gleichheit → wie' },
        { text: 'Ich trinke **lieber** Tee als Kaffee.', gl: '~~«prefiero» → lieber~~' },
        { text: '**Am liebsten** esse ich Pizza.', gl: '~~«lo que más me gusta»~~' },
        { text: 'Im Sommer sind die Tage **am längsten**.', gl: '— Superlativ' },
        { text: 'Der ICE ist der schnellst**e** Zug in Deutschland.', gl: '— Superlativ vor dem Nomen' },
      ],
    },

    { type: 'rule' },

    // ── Übungen ───────────────────────────────────────────────────
    {
      type: 'uebung',
      eyebrow: 'Anwendung — Übung 1 · Erkennen',
      frage: 'Richtig oder falsch?',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Mein Auto ist schneller wie deins.',
        'Sie ist so groß wie ihr Bruder.',
        'Dieses Hotel ist mehr billig.',
        'Ich esse am liebsten Pasta.',
      ],
      loesungen: [
        '**Falsch** → schneller **als** deins ~~(comparativo → als)~~',
        '**Richtig** — Gleichheit → so … wie',
        '**Falsch** → **billiger** ~~(nunca mehr + adjetivo)~~',
        '**Richtig** — gern → lieber → am liebsten',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 2 · Formen bilden',
      frage: 'Komparativ und Superlativ?',
      loesungLabel: 'Lösung',
      aufgaben: [
        'alt → ___ → ___',
        'gut → ___ → ___',
        'gern → ___ → ___',
        'groß → ___ → ___',
      ],
      loesungen: [
        'alt → **älter** → **am ältesten** ~~(Umlaut + -esten tras -t)~~',
        'gut → **besser** → **am besten**',
        'gern → **lieber** → **am liebsten**',
        'groß → **größer** → **am größten**',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 3 · Selbst bilden',
      frage: 'Vergleiche …',
      loesungLabel: 'Lösung',
      aufgaben: [
        '… deine Stadt mit Berlin. ~~(Komparativ + als)~~',
        '… zwei Getränke. ~~(so … wie oder lieber … als)~~',
      ],
      loesungen: [
        'Meine Stadt ist ruhiger **als** Berlin. ~~Vale cualquier adjetivo: kleiner, schöner, wärmer als …~~',
        'Cola ist **so** süß **wie** Limonade. / Ich trinke **lieber** Wasser **als** Cola. ~~Ambas estructuras son correctas.~~',
      ],
    },

    { type: 'rule' },

    // ── Prüfungsbezug ─────────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Schreiben Teil 2 · Forumsbeitrag',
      titel: '2 Lücken',
      anweisung: 'Im Forumsbeitrag begründest du deine Meinung — oft mit einem Vergleich. Ergänze:',
      absaetze: [
        '„Ich fahre {1} mit dem Fahrrad {2} mit dem Auto — das ist billiger und gesünder.“',
      ],
      optionen: ['(1) gern → Komparativ', '(2) als oder wie?'],
      loesungLabel: 'Lösung',
      loesungen: [
        '{1} **lieber** — gern → lieber ~~(«prefiero ir en bici»)~~.',
        '{2} **als** — nach dem Komparativ immer *als*, nie *wie*.',
      ],
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Beim **Sprechen Teil 1 (Gemeinsam etwas planen)** überzeugst du mit Vergleichen: *„Das Café ist **besser als** das Restaurant — es ist **billiger** und liegt **näher** am Bahnhof.“* Zwei Komparative pro Vorschlag, und deine Argumentation steht.',
    },

    { type: 'rule' },

    // ── Abschluss ─────────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Form', 'Regel'],
      zeilen: [
        ['Komparativ', 'Adjektiv + **-er** (nie „mehr + Adjektiv“)'],
        ['Superlativ', '**am** + Adjektiv + **-sten**'],
        ['Umlaut', 'alt → älter · groß → größer · jung → jünger'],
        ['unregelmäßig', 'gut → besser → am besten · gern → lieber → am liebsten · viel → mehr → am meisten'],
        ['Unterschied', 'Komparativ + **als**'],
        ['Gleichheit', '**so** … **wie**'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich bilde den Komparativ mit -er und den Superlativ mit am -sten.',
        'Ich kenne die unregelmäßigen Formen von gut, gern und viel.',
        'Ich benutze als für Unterschiede und so … wie für Gleichheit.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: '*Der ICE ist der schnellste Zug.* Und wenn du mehr sagen willst? *Der Zug, **der** nach Berlin fährt, ist am schnellsten.* Ganze Sätze, die ein Nomen beschreiben — **Relativsätze** — sind das Thema der nächsten Lektion.',
    },
  ],
}
