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

    // ── Übungen ───────────────────────────────────────────────────
    {
      type: 'uebung',
      eyebrow: 'Anwendung — Übung 1 · Wo oder Wohin?',
      frage: 'Dativ oder Akkusativ? ~~(Pregunta primero: ¿posición o movimiento?)~~',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Die Lampe steht auf ___ Tisch. (der Tisch)',
        'Ich hänge das Bild an ___ Wand. (die Wand)',
        'Er sitzt vor ___ Computer. (der Computer)',
        'Wir fahren in ___ Stadt. (die Stadt)',
      ],
      loesungen: [
        'Die Lampe steht auf **dem** Tisch. ~~(Wo? → Dativ)~~',
        'Ich hänge das Bild an **die** Wand. ~~(Wohin? → Akkusativ)~~',
        'Er sitzt vor **dem** Computer. ~~(Wo? → Dativ)~~',
        'Wir fahren in **die** Stadt. ~~(Wohin? → Akkusativ)~~',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 2 · legen oder liegen?',
      frage: 'Wähle das richtige Verb und den richtigen Artikel.',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Das Handy (liegt / legt) auf (dem / den) Bett.',
        'Ich (liege / lege) den Schlüssel auf (dem / den) Tisch.',
        'Die Schuhe (stehen / stellen) unter (dem / den) Stuhl.',
      ],
      loesungen: [
        'Das Handy **liegt** auf **dem** Bett.',
        'Ich **lege** den Schlüssel auf **den** Tisch.',
        'Die Schuhe **stehen** unter **dem** Stuhl.',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 3 · Sätze produzieren',
      frage: 'Antworte mit einem ganzen Satz. Benutze die Kurzformen.',
      loesungLabel: 'Mögliche Lösung',
      aufgaben: [
        'Wohin gehst du heute Abend? (das Kino)',
        'Wo warst du am Sonntag? (das Schwimmbad)',
        'Wohin fahrt ihr im Sommer? (das Meer)',
      ],
      loesungen: [
        'Ich gehe heute Abend **ins** Kino. ~~(in + das)~~',
        'Ich war am Sonntag **im** Schwimmbad. ~~(in + dem)~~',
        'Wir fahren im Sommer **ans** Meer. ~~(an + das)~~',
      ],
    },

    { type: 'rule' },

    // ── Prüfungsbezug ─────────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Sprechen · Gemeinsam etwas planen',
      titel: 'Wohin gehen wir?',
      anweisung: 'In Teil 3 plant ihr zusammen. Da brauchst du Wohin-Sätze. Ergänze:',
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
      text: 'Du sagst jetzt, wo etwas ist. Aber wie sagst du, dass etwas **dir** gehört? *Mein Haus, deine Familie, sein Auto* … Die **Possessivartikel** ~~(los posesivos: mi, tu, su)~~ sind das Thema der nächsten Lektion.',
    },
  ],
}
