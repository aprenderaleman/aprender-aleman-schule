// Lektion 05 · „haben“ & Präsens regelmäßiger Verben
//
// Bloque 1 «Grammatik & Struktur». Sigue la lección modelo lektion-04.js:
// 8 secciones, frases mínimas, traducción casi constante.

export default {
  spec: ['Bloque 1', 'Grammatik & Struktur', 'Niveau A1', 'Prüfungsrelevanz: Sprechen · Schreiben'],
  h1: '„haben“ & regelmäßige Verben',
  lead: '~~El segundo superverbo —~~ **haben** ~~(tener)— y la regla de oro del presente: las terminaciones~~ **-e, -st, -t, -en, -t, -en**.',

  content: [
    // ── Lernziele ─────────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'das Verb *haben* konjugieren',
        'regelmäßige Verben im Präsens bilden (wohnen, machen, lernen, kommen)',
        'sagen, wo du wohnst und was du machst',
      ],
    },

    { type: 'rule' },

    // ── Kernwortschatz ────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Kernwortschatz — haben',
      kopf: ['Pronomen', 'haben', 'Bedeutung'],
      zeilen: [
        ['ich', 'habe', 'yo tengo'],
        ['du', 'hast', 'tú tienes'],
        ['er / sie / es', 'hat', 'él/ella tiene'],
        ['wir', 'haben', 'nosotros tenemos'],
        ['ihr', 'habt', 'vosotros tenéis'],
        ['sie / Sie', 'haben', 'ellos tienen / usted tiene'],
      ],
    },
    {
      type: 'tabelle',
      eyebrow: 'Kernwortschatz — regelmäßige Verben',
      kopf: ['Pronomen', 'Endung', 'wohnen (vivir)'],
      zeilen: [
        ['ich', '-e', 'wohne'],
        ['du', '-st', 'wohnst'],
        ['er / sie / es', '-t', 'wohnt'],
        ['wir', '-en', 'wohnen'],
        ['ihr', '-t', 'wohnt'],
        ['sie / Sie', '-en', 'wohnen'],
      ],
    },

    { type: 'rule' },

    // ── Erklärung ─────────────────────────────────────────────────
    {
      type: 'steps',
      eyebrow: 'Erklärung',
      steps: [
        {
          badge: 'haben',
          titel: 'haben — fast regelmäßig',
          text: '__Ich **habe** eine Frage.__ · __Ich **habe** Hunger.__ ~~(tengo una pregunta / tengo hambre)~~ Achtung: du **hast**, er **hat** — ohne „b“.',
        },
        {
          badge: 'Stamm + Endung',
          titel: 'So funktioniert jedes regelmäßige Verb',
          text: 'wohnen → Stamm __wohn-__ + Endung: ich wohn**e**, du wohn**st**, er wohn**t** … ~~(raíz + terminación — esta regla vale para miles de verbos)~~',
        },
        {
          badge: '⚠ -t',
          titel: 'Der Star-Fehler: er/sie/es ohne -t',
          text: '*Er wohn in Berlin.* ✗ → __Er wohn**t** in Berlin.__ ✓ ~~(nunca olvides la -t de él/ella — el error nº 1 del primer día)~~',
        },
        {
          badge: '⚠ Alter',
          titel: '„Tengo X años“ — nicht mit haben!',
          text: 'Das Alter sagst du auf Deutsch mit __sein__: __Ich **bin** 25 Jahre alt.__ ~~(con „sein“, como en la lección 4 — nunca „Ich habe 25 Jahre“)~~',
        },
      ],
    },

    { type: 'rule' },

    // ── Beispiele ─────────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele',
      items: [
        { text: 'Ich **habe** eine Frage.', gl: '— Tengo una pregunta.' },
        { text: 'Wir **haben** Hunger.', gl: '— Tenemos hambre.' },
        { text: 'Ich **wohne** in Madrid.', gl: '— Vivo en Madrid.' },
        { text: 'Du **lernst** Deutsch.', gl: '— Aprendes alemán.' },
        { text: 'Er **kommt** aus Spanien.', gl: '— Él viene de España.' },
        { text: 'Was **machst** du?', gl: '— ¿Qué haces?' },
      ],
    },

    { type: 'rule' },

    // ── Übungen ───────────────────────────────────────────────────
    {
      type: 'uebung',
      eyebrow: 'Anwendung — Übung 1 · haben konjugieren',
      frage: 'Ergänze die richtige Form von haben.',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Ich ___ eine Frage.',
        'Du ___ Zeit.',
        'Er ___ Hunger.',
        'Ihr ___ ein Auto.',
      ],
      loesungen: [
        'Ich **habe** eine Frage.',
        'Du **hast** Zeit.',
        'Er **hat** Hunger.',
        'Ihr **habt** ein Auto.',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 2 · Regelmäßige Verben',
      frage: 'Ergänze das Verb in der richtigen Form.',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Ich ___ in Berlin. (wohnen)',
        'Du ___ Deutsch. (lernen)',
        'Er ___ aus Chile. (kommen)',
        'Wir ___ Sport. (machen)',
      ],
      loesungen: [
        'Ich **wohne** in Berlin.',
        'Du **lernst** Deutsch.',
        'Er **kommt** aus Chile. ~~(¡con -t!)~~',
        'Wir **machen** Sport.',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 3 · Über dich',
      frage: 'Schreibe 3 Sätze: Wo wohnst du? Was lernst du? Was hast du?',
      loesungLabel: 'Muster',
      loesung: '*Ich wohne in Bogotá. Ich lerne Deutsch. Ich habe zwei Kinder.*',
    },

    { type: 'rule' },

    // ── Prüfungsbezug ─────────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Sprechen · Teil 1',
      titel: 'Sich vorstellen — mehr sagen',
      anweisung: 'Nach „Ich bin …“ sagst du im Sprechen Teil 1 auch, wo du wohnst und was du machst. Ergänze:',
      absaetze: [
        '„Ich {1} in Lima. Ich {2} Deutsch. Ich {3} zwei Kinder.“',
      ],
      loesungLabel: 'Lösung',
      loesungen: [
        '{1} Ich **wohne** in Lima.',
        '{2} Ich **lerne** Deutsch.',
        '{3} Ich **habe** zwei Kinder.',
      ],
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Mit *sein*, *haben* und den Endungen -e/-st/-t sagst du fast alles im Sprechen Teil 1: **Ich bin … Ich wohne … Ich lerne … Ich habe …** ~~Cuatro arranques de frase = tu presentación completa.~~',
    },

    { type: 'rule' },

    // ── Abschluss ─────────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Verb', 'Formen'],
      zeilen: [
        ['haben', 'ich **habe** · du **hast** · er **hat** · wir **haben** · ihr **habt** · sie **haben**'],
        ['wohnen (regelmäßig)', 'ich wohn**e** · du wohn**st** · er wohn**t** · wir wohn**en** · ihr wohn**t** · sie wohn**en**'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich konjugiere „haben“ richtig (habe, hast, hat …).',
        'Ich kenne die Endungen -e, -st, -t, -en, -t, -en.',
        'Ich vergesse das -t nicht: er wohnt, sie lernt.',
        'Ich sage mein Alter mit „sein“: Ich bin 25 Jahre alt.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Die Endungen kennst du jetzt. Aber einige wichtige Verben ändern auch ihren **Vokal**: *du sprichst, er fährt, sie isst*. Diese unregelmäßigen Verben lernst du in der nächsten Lektion.',
    },
  ],
}
