// Lektion 05 · Präteritum — war, hatte, Modalverben
//
// Bloque 1 «Grammatik & Struktur». Sigue el estándar de lektion-04.js:
// 8 secciones (FORMAT.md), nivel A2, máximo apoyo en español.

export default {
  spec: ['Bloque 1', 'Grammatik & Struktur', 'Niveau A2', 'Prüfungsrelevanz: alle Module'],
  h1: 'Präteritum: war, hatte & Co.',
  lead: '~~Para «era / estaba / tenía / podía» no se usa el Perfekt:~~ **sein**, **haben** und die Modalverben haben eine eigene Vergangenheitsform — **war, hatte, konnte** …',

  content: [
    // ── Lernziele ─────────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        '*war* und *hatte* in allen Formen benutzen',
        'die Modalverben in der Vergangenheit kennen (*konnte, musste, wollte, durfte*)',
        'wissen, wann Präteritum ~~(pasado simple)~~ und wann Perfekt',
      ],
    },

    { type: 'rule' },

    // ── Kernwortschatz ────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Kernwortschatz — Präsens → Präteritum',
      kopf: ['Präsens', 'Präteritum', 'Bedeutung'],
      zeilen: [
        ['ich bin', 'ich war', 'yo era / estaba'],
        ['ich habe', 'ich hatte', 'yo tenía'],
        ['ich kann', 'ich konnte', 'yo podía / sabía'],
        ['ich muss', 'ich musste', 'yo tenía que'],
        ['ich will', 'ich wollte', 'yo quería'],
        ['ich darf', 'ich durfte', 'yo podía (tenía permiso)'],
        ['es gibt', 'es gab', 'había'],
      ],
    },

    { type: 'rule' },

    // ── Erklärung ─────────────────────────────────────────────────
    {
      type: 'steps',
      eyebrow: 'Erklärung — wann Präteritum?',
      steps: [
        {
          badge: 'Regel',
          titel: 'Perfekt für fast alles — aber nicht hier',
          text: 'In Lektion 4 hast du das Perfekt gelernt. Bei __sein__, __haben__ und den __Modalverben__ benutzt man in der Vergangenheit aber fast immer das **Präteritum** — auch beim Sprechen. ~~Di «ich war», no «ich bin gewesen».~~',
        },
        {
          badge: 'Endung',
          titel: 'ich und er/sie/es sind gleich',
          text: 'Alle diese Formen enden gleich: __ich war — du warst — er war__ · __ich hatte — du hattest — er hatte__. **ich** und **er/sie/es** haben **dieselbe Form**. ~~(la 1.ª y la 3.ª persona son idénticas)~~',
        },
        {
          badge: 'Modal',
          titel: 'konnte, musste, wollte, durfte',
          text: 'Die Modalverben verlieren den Umlaut: __können → konnte__, __müssen → musste__, __dürfen → durfte__. Das zweite Verb steht am Ende: __Ich **konnte** gestern nicht **kommen**.__',
        },
      ],
    },
    {
      type: 'tabelle',
      eyebrow: 'Erklärung — war und hatte komplett',
      kopf: ['Person', 'sein → war', 'haben → hatte'],
      zeilen: [
        ['ich / er, sie, es', 'war', 'hatte'],
        ['du', 'warst', 'hattest'],
        ['wir / sie, Sie', 'waren', 'hatten'],
        ['ihr', 'wart', 'hattet'],
      ],
    },

    { type: 'rule' },

    // ── Beispiele ─────────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele',
      items: [
        { text: 'Gestern **war** ich zu Hause.', gl: '— «estaba»: war, no *bin gewesen*' },
        { text: 'Wir **hatten** keine Zeit.', gl: '— «no teníamos tiempo»' },
        { text: 'Ich **war** krank und **konnte** nicht arbeiten.', gl: '— podía → konnte' },
        { text: 'Als Kind **durfte** er nicht lange fernsehen.', gl: '— permiso → durfte' },
        { text: 'Mit 10 Jahren **war** ich sehr klein.', gl: '— «tenía 10 años» = *ich war 10* ¡con sein!' },
      ],
    },

    { type: 'rule' },

    // ── Übungen ───────────────────────────────────────────────────
    {
      type: 'uebung',
      eyebrow: 'Anwendung — Übung 1 · war oder hatte?',
      frage: 'Ergänze war oder hatte in der richtigen Form.',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Gestern ___ ich müde.',
        'Wir ___ viel Arbeit.',
        '___ du am Wochenende zu Hause?',
        'Er ___ keinen Hunger.',
      ],
      loesungen: [
        'Gestern **war** ich müde.',
        'Wir **hatten** viel Arbeit.',
        '**Warst** du am Wochenende zu Hause?',
        'Er **hatte** keinen Hunger.',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 2 · Modalverben in die Vergangenheit',
      frage: 'Setze das Modalverb ins Präteritum.',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Ich kann nicht kommen. → Gestern …',
        'Sie muss arbeiten. → Am Montag …',
        'Wir wollen ins Kino gehen. → Letzte Woche …',
      ],
      loesungen: [
        'Gestern **konnte** ich nicht kommen.',
        'Am Montag **musste** sie arbeiten.',
        'Letzte Woche **wollten** wir ins Kino gehen.',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 3 · Über gestern schreiben',
      frage: 'Schreibe die Sätze in der Vergangenheit. ~~Mezcla: war/hatte/Modalverben en Präteritum, el resto en Perfekt.~~',
      loesungLabel: 'Lösung',
      aufgaben: [
        '(ich / gestern / krank / sein)',
        '(ich / nicht / arbeiten / können)',
        '(ich / einen Tee / trinken)',
      ],
      loesungen: [
        'Ich **war** gestern krank. ~~(sein → Präteritum)~~',
        'Ich **konnte** nicht arbeiten. ~~(Modalverb → Präteritum)~~',
        'Ich **habe** einen Tee **getrunken**. ~~(verbo normal → Perfekt)~~',
      ],
    },

    { type: 'rule' },

    // ── Prüfungsbezug ─────────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Schreiben · E-Mail',
      titel: 'Warum warst du nicht da?',
      anweisung: 'Im Schreiben (Teil 2) erklärst du oft, warum etwas nicht möglich war. Ergänze:',
      absaetze: [
        '„Lieber Tom, ich {1} gestern leider krank und {2} nicht zum Kurs kommen. {3} du Zeit am Samstag?“',
      ],
      optionen: ['(1) sein', '(2) können', '(3) haben'],
      loesungLabel: 'Lösung',
      loesungen: [
        '{1} ich **war** gestern leider krank',
        '{2} und **konnte** nicht zum Kurs kommen',
        '{3} **Hast** du Zeit am Samstag? ~~(la pregunta es sobre ahora → Präsens)~~',
      ],
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Im **Hören** hörst du oft *war*, *hatte* und *musste* in Durchsagen und Gesprächen — z. B. „Der Zug **hatte** Verspätung“. Lerne die drei Wörter **war, hatte, konnte** wie Vokabeln. ~~En español «era» y «estaba» son dos verbos; en alemán los dos son war.~~',
    },

    { type: 'rule' },

    // ── Abschluss ─────────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Verb', 'Vergangenheit', 'Beispiel'],
      zeilen: [
        ['sein / haben', 'Präteritum: war / hatte', 'Ich war müde. Ich hatte Zeit.'],
        ['Modalverben', 'Präteritum: konnte, musste, wollte, durfte', 'Ich musste arbeiten.'],
        ['alle anderen Verben', 'Perfekt (Lektion 4)', 'Ich habe gearbeitet.'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich benutze war und hatte in allen Formen.',
        'Ich kenne konnte, musste, wollte und durfte.',
        'Ich weiß: sein, haben, Modalverben → Präteritum; andere Verben → Perfekt.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Du kennst jetzt *konnte* und *musste* — die Vergangenheit der **Modalverben**. In der nächsten Lektion lernst du alle sechs Modalverben im Präsens richtig benutzen: **können, müssen, wollen, dürfen, sollen, möchten**.',
    },
  ],
}
