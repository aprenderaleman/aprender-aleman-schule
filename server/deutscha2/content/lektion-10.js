// Lektion 10 · Wechselpräpositionen — Wo? / Wohin?

export default {
  spec: ['Bloque 1', 'Grammatik & Struktur', 'Niveau A2', 'Prüfungsrelevanz: alle Module'],
  h1: 'Wechselpräpositionen — Wo? oder Wohin?',
  lead: '~~Nueve preposiciones cambian de caso:~~ **Wo?** ~~(¿dónde?)~~ → Dativ, **Wohin?** ~~(¿adónde?)~~ → Akkusativ.',

  content: [
    // ── Lernziele ─────────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'die 9 Wechselpräpositionen kennen',
        'die Frage stellen: *Wo?* → Dativ, *Wohin?* → Akkusativ',
        'die Verbpaare *legen/liegen, stellen/stehen* benutzen',
        'die Kurzformen *am, im, ans, ins* benutzen',
      ],
    },

    { type: 'rule' },

    // ── Kernwortschatz ────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Kernwortschatz — die 9 Wechselpräpositionen',
      kopf: ['Präposition', 'Bedeutung', 'Beispiel'],
      zeilen: [
        ['in', 'en, dentro de', 'in der Küche'],
        ['an', 'en, junto a, pegado a', 'an der Wand'],
        ['auf', 'sobre, encima de', 'auf dem Tisch'],
        ['über', 'por encima de', 'über dem Sofa'],
        ['unter', 'debajo de', 'unter dem Bett'],
        ['vor', 'delante de', 'vor der Tür'],
        ['hinter', 'detrás de', 'hinter dem Haus'],
        ['neben', 'al lado de', 'neben dem Fenster'],
        ['zwischen', 'entre', 'zwischen den Stühlen'],
      ],
    },

    { type: 'rule' },

    // ── Erklärung ─────────────────────────────────────────────────
    {
      type: 'steps',
      eyebrow: 'Erklärung — die Regel',
      steps: [
        {
          badge: 'Wo?',
          titel: 'Position → Dativ',
          text: '__Wo?__ ~~(¿dónde está?)~~ — keine Bewegung, nur Position → **Dativ**.\n__Das Buch liegt **auf dem** Tisch.__',
        },
        {
          badge: 'Wohin?',
          titel: 'Richtung → Akkusativ',
          text: '__Wohin?__ ~~(¿adónde va?)~~ — Bewegung zu einem Ziel → **Akkusativ**.\n__Ich lege das Buch **auf den** Tisch.__',
        },
        {
          badge: 'Verben',
          titel: 'legen / liegen · stellen / stehen',
          text: '__legen__ ~~(poner tumbado)~~ und __stellen__ ~~(poner de pie)~~ = Aktion → Wohin? + Akkusativ.\n__liegen__ ~~(estar tumbado)~~ und __stehen__ ~~(estar de pie)~~ = Position → Wo? + Dativ.',
        },
        {
          badge: 'Kurz',
          titel: 'Kurzformen',
          text: 'an + dem = __am__ · in + dem = __im__ · an + das = __ans__ · in + das = __ins__.\n__Ich bin **im** Kino. / Ich gehe **ins** Kino.__',
        },
      ],
    },

    { type: 'rule' },

    // ── Beispiele ─────────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele — immer im Paar',
      items: [
        { text: 'Wo ist die Katze? — **Unter dem** Sofa.', gl: '— Position → Dativ' },
        { text: 'Wohin läuft die Katze? — **Unter das** Sofa.', gl: '— Bewegung → Akkusativ' },
        { text: 'Ich stelle die Flasche **in den** Kühlschrank.', gl: '— stellen → Akkusativ' },
        { text: 'Die Flasche steht **im** Kühlschrank.', gl: '— stehen → Dativ (in + dem = im)' },
        { text: 'Wir gehen **ans** Meer.', gl: '— an + das = ans' },
        { text: 'Das Bild hängt **an der** Wand.', gl: '— Wo? → Dativ' },
      ],
    },

    { type: 'rule' },

    // ── Mehr Beispiele ────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Mehr Beispiele',
      titel: 'Wo? — Position mit Dativ',
      items: [
        { text: 'Die Schuhe stehen **unter dem** Bett.', gl: '— unter + Dativ' },
        { text: 'Der Kalender hängt **neben der** Tür.', gl: '— neben + Dativ' },
        { text: 'Das Restaurant liegt direkt **am** Bahnhof.', gl: '— an + dem = am' },
        { text: '**Zwischen dem** Sofa und **dem** Fenster steht eine Lampe.', gl: '— zwischen + Dativ' },
        { text: 'Wir sitzen **im** Garten **hinter dem** Haus.', gl: '— in / hinter + Dativ' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'Wohin?',
      titel: 'Bewegung mit Akkusativ',
      items: [
        { text: 'Ich lege die Zeitung **auf den** Stuhl.', gl: '— legen → Akkusativ' },
        { text: 'Stell die Milch bitte **in den** Kühlschrank!', gl: '— stellen → Akkusativ' },
        { text: 'Wir fahren am Sonntag **ans** Meer.', gl: '— an + das = ans' },
        { text: 'Die Kinder laufen **hinter das** Haus.', gl: '— Bewegung → Akkusativ' },
        { text: 'Er hängt die Jacke **über den** Stuhl.', gl: '— hängen (Aktion) → Akkusativ' },
      ],
    },

    { type: 'rule' },

    // ── Prüfungsbezug ─────────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Sprechen · Gemeinsam etwas planen',
      titel: 'Wohin gehen wir?',
      anweisung: 'Im Sprechen (Teil 3) plant ihr zusammen. Da brauchst du Wohin-Sätze. Ergänze: ~~(Completa:)~~',
      absaetze: [
        '„Gehen wir am Samstag {1} Park? — Gute Idee! Und danach {2} Café am Markt.“',
      ],
      optionen: ['(1) in + der Park', '(2) in + das Café'],
      loesungLabel: 'Lösung',
      loesungen: [
        '{1} Gehen wir am Samstag **in den** Park? ~~(Wohin? → Akkusativ)~~',
        '{2} Und danach **ins** Café am Markt. ~~(in + das = ins)~~',
      ],
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Stell dir immer die Frage: **Wo?** oder **Wohin?** ~~Un truco: si en español puedes preguntar «¿adónde?», es Akkusativ. Si preguntas «¿dónde está?», es Dativ.~~ Mit *sein, liegen, stehen, wohnen* → fast immer **Wo? + Dativ**.',
    },

    { type: 'rule' },

    // ── Abschluss ─────────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Frage', 'Kasus', 'Beispiel'],
      zeilen: [
        ['Wo? (Position)', 'Dativ', 'Das Buch liegt auf dem Tisch.'],
        ['Wohin? (Bewegung)', 'Akkusativ', 'Ich lege das Buch auf den Tisch.'],
        ['legen, stellen (Aktion)', 'Akkusativ', 'Ich stelle die Tasse in den Schrank.'],
        ['liegen, stehen (Position)', 'Dativ', 'Die Tasse steht im Schrank.'],
        ['Kurzformen', 'am, im, ans, ins', 'im Kino / ins Kino'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich kenne die 9 Wechselpräpositionen.',
        'Ich frage Wo? (→ Dativ) oder Wohin? (→ Akkusativ).',
        'Ich benutze legen/liegen und stellen/stehen richtig.',
        'Ich benutze die Kurzformen am, im, ans, ins.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Du sagst jetzt, wo etwas ist. Aber wem gehört es? *Mein Haus, deine Familie, sein Auto* … Die **Possessivartikel** ~~(los posesivos: mi, tu, su)~~ sind das Thema der nächsten Lektion.',
    },
  ],
}
