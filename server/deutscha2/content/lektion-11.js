// Lektion 11 · Possessivartikel

export default {
  spec: ['Bloque 1', 'Grammatik & Struktur', 'Niveau A2', 'Prüfungsrelevanz: alle Module'],
  h1: 'Possessivartikel — mein, dein, sein …',
  lead: '~~Los posesivos (mi, tu, su …):~~ **mein, dein, sein, ihr, unser, euer, Ihr** — ~~con las mismas terminaciones que~~ *ein*.',

  content: [
    // ── Lernziele ─────────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'alle Possessivartikel kennen: *mein, dein, sein, ihr, unser, euer, Ihr*',
        'die richtigen Endungen benutzen: *meine Mutter, meinen Bruder*',
        'den Unterschied *sein* / *ihr* verstehen ~~(los dos «su»)~~',
      ],
    },

    { type: 'rule' },

    // ── Kernwortschatz ────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Kernwortschatz — die Possessivartikel',
      kopf: ['Person', 'Possessivartikel', 'Bedeutung'],
      zeilen: [
        ['ich', 'mein', 'mi'],
        ['du', 'dein', 'tu'],
        ['er / es', '**sein**', 'su (de él)'],
        ['sie', '**ihr**', 'su (de ella)'],
        ['wir', 'unser', 'nuestro'],
        ['ihr', 'euer', 'vuestro'],
        ['sie (Plural)', 'ihr', 'su (de ellos)'],
        ['Sie (formal)', 'Ihr', 'su (de usted)'],
      ],
    },
    {
      type: 'prose',
      absaetze: ['~~«Su» tiene DOS traducciones: sein (de él) e ihr (de ella). ¡La trampa más típica del hispanohablante!~~'],
    },

    { type: 'rule' },

    // ── Erklärung ─────────────────────────────────────────────────
    {
      type: 'steps',
      eyebrow: 'Erklärung — die Endungen',
      steps: [
        {
          badge: 'wie ein',
          titel: 'Gleiche Endungen wie ein',
          text: 'Possessivartikel haben die __Endungen von ein__: *ein Bruder → **mein** Bruder*, *eine Mutter → **meine** Mutter*, *ein Auto → **mein** Auto*. Plural: **meine** Eltern.',
        },
        {
          badge: 'Akk.',
          titel: 'Akkusativ: -en beim Maskulinum',
          text: 'Nur maskulin ändert sich: __meinen, deinen, seinen__ … ~~(como einen)~~\n__Ich besuche **meinen** Bruder und **meine** Schwester.__',
        },
        {
          badge: 'sein/ihr',
          titel: 'Wer ist der Besitzer?',
          text: 'Wichtig ist der __Besitzer__ ~~(el dueño)~~, nicht das Nomen: Peter → **sein** Auto, **seine** Mutter. Anna → **ihr** Auto, **ihre** Mutter. ~~En español los dos son «su coche» — en alemán primero pregunta: ¿de él o de ella?~~',
        },
        {
          badge: 'euer',
          titel: 'Achtung: euer → eure',
          text: 'Mit Endung verliert *euer* das zweite e: __eure__ Mutter, __euren__ Bruder ~~(no *euere*)~~.',
        },
      ],
    },

    { type: 'rule' },

    // ── Beispiele ─────────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele',
      items: [
        { text: 'Das ist **meine** Familie: **mein** Vater, **meine** Mutter und **meine** zwei Brüder.', gl: '— wie ein/eine' },
        { text: 'Ich besuche am Sonntag **meinen** Opa.', gl: '— Akkusativ maskulin: -en' },
        { text: 'Das ist Peter und das ist **seine** Frau.', gl: '— Besitzer = er → sein' },
        { text: 'Das ist Anna und das ist **ihr** Mann.', gl: '— Besitzer = sie → ihr' },
        { text: 'Wie heißt **eure** Lehrerin? — **Unsere** Lehrerin heißt Frau Berg.', gl: '— euer → eure' },
      ],
    },

    { type: 'rule' },

    // ── Übungen ───────────────────────────────────────────────────
    {
      type: 'uebung',
      eyebrow: 'Anwendung — Übung 1 · Endungen erkennen',
      frage: 'mein, meine oder meinen? Ergänze.',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Das ist ___ Schwester. (die Schwester)',
        'Das ist ___ Auto. (das Auto)',
        'Ich liebe ___ Bruder. (der Bruder, Akkusativ)',
        '___ Eltern wohnen in Madrid. (die Eltern, Plural)',
      ],
      loesungen: [
        'Das ist **meine** Schwester.',
        'Das ist **mein** Auto.',
        'Ich liebe **meinen** Bruder. ~~(Akkusativ maskulin)~~',
        '**Meine** Eltern wohnen in Madrid.',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 2 · sein oder ihr?',
      frage: 'Wer ist der Besitzer? Ergänze sein- oder ihr-.',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Das ist Maria. ___ Hund heißt Rex.',
        'Das ist Jonas. ___ Schwester ist 12.',
        'Anna sucht ___ Handy.',
        'Herr Meier und ___ Frau kommen heute.',
      ],
      loesungen: [
        'Das ist Maria. **Ihr** Hund heißt Rex. ~~(de ella)~~',
        'Das ist Jonas. **Seine** Schwester ist 12. ~~(de él)~~',
        'Anna sucht **ihr** Handy.',
        'Herr Meier und **seine** Frau kommen heute.',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 3 · Über die Familie schreiben',
      frage: 'Schreibe drei Sätze über deine Familie. Benutze mein-.',
      loesungLabel: 'Mögliche Lösung',
      aufgaben: [
        '(dein Vater — Name?)',
        '(deine Mutter — Beruf?)',
        '(dein Bruder / deine Schwester — Alter?)',
      ],
      loesungen: [
        '**Mein** Vater heißt Carlos.',
        '**Meine** Mutter ist Lehrerin.',
        '**Mein** Bruder ist 15 Jahre alt. ~~También correcto: Meine Schwester ist … / Ich habe keinen Bruder.~~',
      ],
    },

    { type: 'rule' },

    // ── Prüfungsbezug ─────────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Sprechen · Von sich erzählen',
      titel: 'Thema Familie',
      anweisung: 'In Teil 2 erzählst du oft von deiner Familie. Ergänze die Possessivartikel:',
      absaetze: [
        '„{1} Familie ist klein. {2} Mutter heißt Elena und {3} Bruder studiert in Sevilla.“',
      ],
      optionen: ['(1) ich → ?', '(2) ich → ?', '(3) ich → ?'],
      loesungLabel: 'Lösung',
      loesungen: [
        '{1} **Meine** Familie ist klein.',
        '{2} **Meine** Mutter heißt Elena.',
        '{3} **mein** Bruder studiert in Sevilla.',
      ],
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Das Thema **Familie** kommt in der Prüfung fast sicher. Bereite **fünf Sätze mit mein-** vor. ~~Y memoriza la regla de oro: ¿de él? → sein. ¿De ella? → ihr. No mires el sustantivo, mira al dueño.~~',
    },

    { type: 'rule' },

    // ── Abschluss ─────────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Regel', 'Beispiel'],
      zeilen: [
        ['Endungen wie ein/eine', 'mein Bruder, meine Mutter, mein Auto'],
        ['Akkusativ maskulin: -en', 'Ich besuche meinen Opa.'],
        ['er → sein / sie → ihr', 'Peter: sein Auto · Anna: ihr Auto'],
        ['euer + Endung = eur-', 'eure Mutter, euren Bruder'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich kenne alle Possessivartikel von mein bis Ihr.',
        'Ich benutze die Endungen richtig: meine Mutter, meinen Bruder.',
        'Ich unterscheide sein (de él) und ihr (de ella).',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Statt *mein Bruder* immer zu wiederholen, sagst du einfach **er** oder **ihn**. ~~Los pronombres personales («lo veo», «me ayuda»)~~ — **mich, dich, ihn, mir, dir, ihm** — sind das Thema der nächsten Lektion.',
    },
  ],
}
