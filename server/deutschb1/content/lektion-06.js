// Lektion 06 · Perfekt — haben oder sein

export default {
  spec: ['Bloque 1', 'Grammatik & Struktur', 'Niveau B1', 'Prüfungsrelevanz: alle Module'],
  h1: 'Perfekt — haben oder sein',
  lead: 'Die Vergangenheit im Gespräch: **haben** oder **sein** + Partizip II am Satzende. ~~«He ido» es *ich bin gegangen* — nunca *habe gegangen*.~~',

  content: [
    // ── Lernziele ─────────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'das Perfekt mit *haben* oder *sein* bilden',
        'das Partizip II bilden (regelmäßig, unregelmäßig, trennbar, -ieren)',
        'das Partizip ans Satzende stellen',
      ],
    },

    { type: 'rule' },

    // ── Kernwortschatz ────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Kernwortschatz',
      kopf: ['Infinitiv', 'Partizip II', 'Auxiliar'],
      zeilen: [
        ['machen', 'gemacht', 'haben'],
        ['kaufen', 'gekauft', 'haben'],
        ['sehen', 'gesehen', 'haben'],
        ['essen', 'gegessen', 'haben'],
        ['einkaufen', 'eingekauft', 'haben'],
        ['telefonieren', 'telefoniert', 'haben'],
        ['gehen', 'gegangen', 'sein'],
        ['fahren', 'gefahren', 'sein'],
        ['kommen', 'gekommen', 'sein'],
        ['aufstehen', 'aufgestanden', 'sein'],
        ['bleiben', 'geblieben', 'sein'],
        ['passieren', 'passiert', 'sein'],
      ],
    },

    { type: 'rule' },

    // ── Erklärung ─────────────────────────────────────────────────
    {
      type: 'steps',
      eyebrow: 'Erklärung — haben oder sein?',
      steps: [
        {
          badge: 'haben',
          titel: 'Die meisten Verben',
          text: 'Der Normalfall — fast alle Verben, besonders mit Objekt. ~~En caso de duda, haben es la apuesta segura.~~\n__Ich **habe** eine Pizza **gegessen**.__',
        },
        {
          badge: 'sein',
          titel: 'Bewegung & Veränderung',
          text: 'Bewegung von A nach B ~~(¿me muevo a otro sitio?)~~: *gehen, fahren, fliegen, kommen* — und Zustandswechsel ~~(¿cambio de estado?)~~: *aufstehen, einschlafen*. Dazu drei Spezialfälle: **bleiben, sein, passieren**.\n__Ich **bin** nach Hause **gegangen**.__',
        },
      ],
    },
    {
      type: 'tabelle',
      eyebrow: 'Erklärung — das Partizip II',
      kopf: ['Typ', 'Muster', 'Beispiel'],
      zeilen: [
        ['regelmäßig', 'ge- + Stamm + -t', 'machen → **ge**mach**t**'],
        ['unregelmäßig', 'ge- + Stamm + -en', 'sehen → **ge**seh**en** ~~(a menudo cambia la vocal: gegangen)~~'],
        ['trennbar', 'ge- in der Mitte', 'einkaufen → ein**ge**kauft'],
        ['-ieren', 'ohne ge-', 'telefonieren → telefoniert'],
      ],
    },
    {
      type: 'prose',
      card: true,
      absaetze: [
        '**Die Satzklammer:** *haben/sein* steht auf Position 2, das Partizip __ganz am Ende__ — alles andere dazwischen. __Ich **habe** gestern im Supermarkt **eingekauft**.__ ~~En español los dos van juntos («he comprado») — en alemán se abren como un paréntesis.~~',
        '**Der typische Fehler:** ~~En español TODO el pasado va con «haber»: he ido, he venido, he estado.~~ Auf Deutsch nicht: *„ich habe gegangen“* ✗ → **ich bin gegangen** ✓. Bewegung und Veränderung nehmen immer **sein**.',
      ],
    },

    { type: 'rule' },

    // ── Beispiele ─────────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele',
      kicker: 'haben',
      titel: 'Der Normalfall',
      items: [
        { text: 'Ich **habe** einen Film **gesehen**.', gl: '— unregelmäßig' },
        { text: 'Wir **haben** am Samstag **eingekauft**.', gl: '— trennbar: ein-ge-kauft' },
        { text: '**Hast** du schon mit ihr **telefoniert**?', gl: '— -ieren, ohne ge-' },
        { text: 'Ich **habe** den ganzen Tag **gearbeitet**.', gl: '— regelmäßig: ge…t' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'sein',
      titel: 'Bewegung & Veränderung',
      items: [
        { text: 'Ich **bin** um sieben **aufgestanden**.', gl: '— Zustandswechsel' },
        { text: 'Wir **sind** nach Berlin **gefahren**.', gl: '— Bewegung A → B' },
        { text: 'Er **ist** zu Hause **geblieben**.', gl: '— Spezialfall bleiben' },
        { text: 'Was **ist passiert**?', gl: '— ¿qué ha pasado?' },
        { text: 'Meine Eltern **sind** gestern Abend **angekommen**.', gl: '— trennbar + Bewegung' },
      ],
    },
    {
      type: 'vergleich',
      titel: 'haben oder sein — derselbe Tag, zwei Auxiliare',
      zeilen: [
        { satz: 'Ich habe im Café einen Kaffee getrunken.', label: 'kein Ortswechsel → haben' },
        { satz: 'Danach bin ich ins Büro gegangen.', label: 'Bewegung → sein' },
      ],
    },

    { type: 'rule' },

    // ── Übungen ───────────────────────────────────────────────────
    {
      type: 'uebung',
      eyebrow: 'Anwendung — Übung 1 · Erkennen',
      frage: 'haben oder sein?',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Wir ___ gestern Pizza gegessen.',
        'Lena ___ mit dem Zug nach Hamburg gefahren.',
        'Ich ___ das Fenster geöffnet.',
        'Er ___ erst um Mitternacht eingeschlafen.',
      ],
      loesungen: [
        '**haben** — essen: kein Ortswechsel, mit Objekt.',
        '**ist** — fahren: Bewegung A → B.',
        '**habe** — öffnen: normales Verb mit Objekt.',
        '**ist** — einschlafen: Zustandswechsel ~~(despierto → dormido)~~.',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 2 · Partizip bilden',
      frage: 'Bilde den Perfekt-Satz.',
      loesungLabel: 'Lösung',
      aufgaben: [
        'ich / gestern / lange / arbeiten',
        'wir / am Sonntag / spät / aufstehen',
        'er / die Reise / online / reservieren',
      ],
      loesungen: [
        'Ich **habe** gestern lange **gearbeitet**. ~~(regular: ge…t)~~',
        'Wir **sind** am Sonntag spät **aufgestanden**. ~~(trennbar + cambio de estado → sein)~~',
        'Er **hat** die Reise online **reserviert**. ~~(-ieren: sin ge-)~~',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 3 · Selbst erzählen',
      frage: 'Was hast du gestern gemacht? Drei Sätze — mindestens einer mit *sein*.',
      loesungLabel: 'Mögliche Lösung',
      aufgaben: [
        'Satz 1: der Morgen · Satz 2: der Tag · Satz 3: der Abend',
      ],
      loesungen: [
        'Ich **bin** um acht **aufgestanden**. Dann **habe** ich im Büro **gearbeitet**. Am Abend **bin** ich mit einer Freundin ins Kino **gegangen**. ~~Vale cualquier historia — comprueba el auxiliar y el participio al final.~~',
      ],
    },

    { type: 'rule' },

    // ── Prüfungsbezug ─────────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Schreiben · Teil 1 (informelle E-Mail)',
      titel: '2 Lücken',
      anweisung: 'In der E-Mail (~80 Wörter) erzählst du fast immer, was du gemacht hast — im Perfekt. Ergänze das Auxiliar:',
      absaetze: [
        '„Am Samstag {1} wir an den See gefahren und {2} dort gegrillt. Es war super!“',
      ],
      optionen: ['(1) fahren = Bewegung', '(2) grillen = normales Verb'],
      loesungLabel: 'Lösung',
      loesungen: [
        '{1} **sind** — fahren: Bewegung → sein.',
        '{2} **haben** — grillen: kein Ortswechsel → haben.',
      ],
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Das Perfekt ist **die** Vergangenheitsform der B1-Prüfung: in der E-Mail (Schreiben Teil 1), in der Präsentation (Sprechen Teil 2: *„Ich habe die Erfahrung gemacht, dass …“*) und in fast jedem Hörtext. Lern die Partizipien der Kernwortschatz-Tabelle auswendig — sie decken den Alltag ab.',
    },

    { type: 'rule' },

    // ── Abschluss ─────────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Frage', 'Antwort'],
      zeilen: [
        ['Auxiliar?', 'haben (Normalfall) · sein (Bewegung, Veränderung, bleiben, passieren)'],
        ['Partizip II?', 'ge…t / ge…en · trennbar: ein**ge**kauft · -ieren: ohne ge-'],
        ['Position?', 'Auxiliar auf Position 2, Partizip am Satzende'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich wähle bei Bewegung und Veränderung automatisch *sein*.',
        'Ich bilde das Partizip II auch bei trennbaren und -ieren-Verben richtig.',
        'Ich stelle das Partizip immer ans Satzende.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Eine Ausnahme bleibt: *„ich bin gewesen“* und *„ich habe gehabt“* sagt im Alltag fast niemand. Dafür gibt es **war** und **hatte** — und in Geschichten und Zeitungstexten liest du eine ganz eigene Erzählform. Das **Präteritum** ist das Thema der nächsten Lektion.',
    },
  ],
}
