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
        { text: 'Damals **war** ich 10 Jahre alt.', gl: '— «tenía 10 años» = *ich war 10 Jahre alt* ¡con sein!' },
        { text: '**Warst** du gestern im Büro? — Nein, ich **hatte** frei.', gl: '— pregunta: Warst du …?' },
        { text: 'Wir **wollten** ins Kino gehen, aber wir **mussten** arbeiten.', gl: '— wollten / mussten' },
      ],
    },

    { type: 'rule' },

    // ── Mehr Beispiele ────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Mehr Beispiele',
      titel: 'war & hatte im Alltag',
      items: [
        { text: 'Das Wetter **war** am Montag furchtbar.', gl: '— El lunes hizo un tiempo horrible.' },
        { text: 'Ich **hatte** gestern viel Stress im Büro.', gl: '— Ayer tuve mucho estrés en la oficina.' },
        { text: '**Wart** ihr schon in Wien? — Ja, im Mai.', gl: '— ¿Ya habéis estado en Viena? — Sí, en mayo.' },
        { text: 'Der Supermarkt **hatte** kein frisches Brot.', gl: '— El súper no tenía pan fresco.' },
        { text: 'Es **gab** am Bahnhof ein Problem.', gl: '— Hubo un problema en la estación.' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'konnte, musste & Co.',
      titel: 'Modalverben gestern',
      items: [
        { text: 'Ich **wollte** schwimmen gehen, aber das Bad **war** zu.', gl: '— Quería ir a nadar, pero la piscina estaba cerrada.' },
        { text: 'Leo **musste** am Samstag arbeiten.', gl: '— Leo tuvo que trabajar el sábado.' },
        { text: 'Wir **konnten** das Konzert nicht sehen — es **gab** keine Karten.', gl: '— No pudimos ver el concierto: no había entradas.' },
        { text: 'Als Kind **durfte** ich keinen Kaffee trinken.', gl: '— De niño no podía (no me dejaban) tomar café.' },
        { text: 'Ich **konnte** gestern nicht schlafen. Heute bin ich müde.', gl: '— No pude dormir; hoy estoy cansado.' },
      ],
    },

    { type: 'rule' },

    // ── Prüfungsbezug ─────────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Schreiben · E-Mail',
      titel: 'Warum warst du nicht da?',
      anweisung: 'Im Schreiben (Teil 2) erklärst du oft ein Problem von gestern. Ergänze: ~~(Completa:)~~',
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
