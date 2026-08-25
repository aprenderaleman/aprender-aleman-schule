// Lektion 32 · Wohnen & Möbel
//
// Bloque 3 (temático): la casa y los muebles con Wo? + Dativ (→ Lektion 10),
// mi habitación favorita, zu Hause / nach Hause.

export default {
  spec: ['Bloque 3', 'Themenfelder & Wortschatz', 'Niveau A2', 'Prüfungsrelevanz: Sprechen & Schreiben'],
  h1: 'Wohnen & Möbel',
  lead: '~~Otro clásico del examen:~~ **Wie wohnst du?** — ~~el piso, las habitaciones y los muebles, con el „Wo?“ + dativo de la Lektion 10.~~',

  content: [
    // ── Lernziele ─────────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'die Wohnung beschreiben: *Wir haben drei Zimmer.*',
        'sagen, wo die Möbel stehen: *Das Sofa steht im Wohnzimmer.*',
        'über das Lieblingszimmer sprechen ~~(tu habitación favorita)~~',
      ],
    },

    { type: 'rule' },

    // ── Kernwortschatz ────────────────────────────────────────────
    {
      type: 'wortschatz',
      eyebrow: 'Kernwortschatz — Wohnung & Möbel',
      items: [
        { wort: 'die Wohnung', kollokation: 'eine kleine Wohnung', es: 'el piso, el apartamento' },
        { wort: 'das Haus', kollokation: 'Wir wohnen in einem Haus.', es: 'la casa' },
        { wort: 'das Zimmer', kollokation: 'Die Wohnung hat drei Zimmer.', es: 'la habitación, el cuarto' },
        { wort: 'die Küche', kollokation: 'in der Küche kochen', es: 'la cocina' },
        { wort: 'das Wohnzimmer', kollokation: 'im Wohnzimmer fernsehen', es: 'el salón' },
        { wort: 'das Schlafzimmer', kollokation: 'Das Schlafzimmer ist klein.', es: 'el dormitorio' },
        { wort: 'das Bad', kollokation: 'Das Bad hat kein Fenster.', es: 'el (cuarto de) baño' },
        { wort: 'der Balkon', kollokation: 'auf dem Balkon sitzen', es: 'el balcón' },
        { wort: 'der Tisch', kollokation: 'am Tisch essen', es: 'la mesa' },
        { wort: 'das Bett', kollokation: 'im Bett liegen', es: 'la cama' },
        { wort: 'der Schrank', kollokation: 'Die Kleidung ist im Schrank.', es: 'el armario' },
        { wort: 'das Sofa', kollokation: 'auf dem Sofa sitzen', es: 'el sofá' },
      ],
      hinweis: '~~Truco de género: todo lo que termina en -zimmer es das; los muebles suelen ser der (der Tisch, der Schrank) — ¡pero das Bett y das Sofa!~~',
    },

    { type: 'rule' },

    // ── Erklärung ─────────────────────────────────────────────────
    {
      type: 'steps',
      eyebrow: 'Erklärung — drei Situationen',
      steps: [
        {
          badge: 'wohnen',
          titel: 'Sagen, wie du wohnst',
          text: '__Ich wohne **in einer Wohnung** / **in einem Haus**.__ Dann beschreibst du sie: __Die Wohnung hat **drei Zimmer**, eine Küche und ein Bad. Sie ist **hell** ~~(luminosa)~~ und **ruhig**.__',
        },
        {
          badge: 'Wo?',
          titel: 'Wo stehen die Möbel?',
          text: 'Frage __Wo?__ → **Dativ** ~~(Wechselpräpositionen, Lektion 10)~~: __Das Bett steht **im** Schlafzimmer. Die Lampe steht **neben dem** Sofa.__ Merk dir: in dem = **im**, an dem = **am**.',
        },
        {
          badge: 'zu Hause',
          titel: 'Achtung: zu Hause / nach Hause',
          text: '~~«En casa» (sin movimiento):~~ __Ich bin **zu Hause**.__ ~~«A casa» (con movimiento):~~ __Ich gehe **nach Hause**.__ ~~Error típico: *Ich gehe zu Hause* — para el movimiento es nach Hause.~~',
        },
      ],
    },

    { type: 'rule' },

    // ── Beispiele ─────────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele',
      items: [
        { text: 'Wir wohnen in einer Wohnung mit drei Zimmern.', gl: '' },
        { text: 'Das Sofa steht **im** Wohnzimmer.', gl: '— Wo? → Dativ' },
        { text: 'Der Schrank steht **neben dem** Bett.', gl: '' },
        { text: 'Mein Lieblingszimmer ist die Küche, weil wir dort zusammen essen.', gl: '— weil: verbo al final' },
        { text: 'Am Abend bin ich gern zu Hause.', gl: '' },
      ],
    },
    {
      type: 'redemittel',
      eyebrow: 'Redemittel — die Wohnung beschreiben',
      gruppen: [
        {
          fn: 'Über die Wohnung sprechen',
          saetze: [
            { satz: 'Ich wohne in einer Wohnung. / Ich wohne in einem Haus.' },
            { satz: 'Die Wohnung hat drei Zimmer und einen Balkon.' },
            { satz: 'Mein Lieblingszimmer ist das Wohnzimmer.', gloss: 'mi habitación favorita' },
            { satz: 'Die Wohnung ist hell und ruhig.', gloss: 'luminoso y tranquilo' },
          ],
        },
      ],
    },

    { type: 'rule' },

    // ── Übungen ───────────────────────────────────────────────────
    {
      type: 'uebung',
      eyebrow: 'Anwendung — Übung 1 · Welches Zimmer?',
      frage: 'Ergänze: Küche, Schlafzimmer, Bad, Wohnzimmer.',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Hier kochst du: in der ___.',
        'Hier schläfst du: im ___.',
        'Hier duschst du: im ___.',
        'Hier siehst du fern: im ___.',
      ],
      loesungen: [
        'Hier kochst du: in der **Küche**.',
        'Hier schläfst du: im **Schlafzimmer**.',
        'Hier duschst du: im **Bad**.',
        'Hier siehst du fern: im **Wohnzimmer**.',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 2 · Wo? — Ergänze die Präposition',
      frage: 'Ergänze: im · auf dem · neben dem.',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Das Bett steht ___ Schlafzimmer.',
        'Wir frühstücken ___ Balkon.',
        'Die Lampe steht ___ Sofa.',
        'Meine Kleidung ist ___ Schrank.',
      ],
      loesungen: [
        'Das Bett steht **im** Schlafzimmer.',
        'Wir frühstücken **auf dem** Balkon.',
        'Die Lampe steht **neben dem** Sofa.',
        'Meine Kleidung ist **im** Schrank. ~~(Wo? → Dativ)~~',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 3 · Produzieren',
      frage: 'Beschreib dein Lieblingszimmer (4-5 Sätze, ca. 30 Wörter): Welches Zimmer ist es? Was steht dort? Warum magst du es?',
      loesungLabel: 'Mögliche Lösung',
      loesung:
        'Mein Lieblingszimmer ist das Wohnzimmer. Es ist groß und hell. Das Sofa steht am Fenster, und neben dem Sofa steht eine Lampe. Dort höre ich am Abend Musik, weil es ruhig ist. ~~(Vale cualquier texto con 1-2 lugares en dativo y un weil.)~~',
    },

    { type: 'rule' },

    // ── Prüfungsbezug ─────────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Schreiben · Teil 2',
      titel: 'E-Mail: die neue Wohnung',
      anweisung: 'Du bist umgezogen ~~(te has mudado)~~. Schreib deinem Freund Jonas eine E-Mail (30-40 Wörter): Wie ist die neue Wohnung? Wie viele Zimmer hat sie? Was gefällt dir?',
      absaetze: [
        'Denk an: **Anrede** — Inhaltspunkte — **Gruß**.',
      ],
      loesungLabel: 'Mögliche Lösung',
      loesungen: [
        'Lieber Jonas,',
        'ich habe eine neue Wohnung! Sie hat drei Zimmer, eine Küche und einen Balkon. Mein Lieblingszimmer ist das Wohnzimmer — es ist groß und hell. Besuchst du mich am Samstag?',
        'Viele Grüße, Ana',
      ],
      kommentar: '**Anrede, alle Inhaltspunkte, Gruß** — mehr braucht die A2-E-Mail nicht. Kurze Hauptsätze sind völlig okay.',
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Lern die Zimmer-Wörter gleich **mit im / in der**: *im Bad, in der Küche, im Wohnzimmer*. So machst du im Schreiben automatisch keine Dativ-Fehler.',
    },

    { type: 'rule' },

    // ── Abschluss ─────────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Funktion', 'So sagst du es'],
      zeilen: [
        ['wohnen', 'Ich wohne in einer Wohnung / in einem Haus.'],
        ['die Zimmer', 'die Küche, das Bad, das Wohnzimmer, das Schlafzimmer'],
        ['Wo? → Dativ', 'Das Sofa steht im Wohnzimmer.'],
        ['en casa / a casa', 'zu Hause sein · nach Hause gehen'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich beschreibe meine Wohnung mit drei Sätzen.',
        'Ich sage mit Dativ, wo die Möbel stehen.',
        'Ich benutze zu Hause und nach Hause richtig.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Die Wohnung ist fertig — jetzt fehlt das **Essen**! In der nächsten Lektion lernst du **Essen & Einkaufen**: im Supermarkt, im Café bestellen und die wichtigste Frage: *Was kostet das?*',
    },
  ],
}
