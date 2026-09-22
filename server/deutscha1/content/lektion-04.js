// Lektion 04 · Personalpronomen & das Verb „sein“
//
// ═══ LECCIÓN MODELO del curso A1 — migrada de curso-a1.html ═══
// Fija el estándar para las otras 36: 8 secciones (FORMAT.md), el nivel
// más elemental del catálogo: frases mínimas, traducción casi constante.

export default {
  spec: ['Bloque 1', 'Grammatik & Struktur', 'Niveau A1', 'Prüfungsrelevanz: Sprechen · Schreiben'],
  h1: 'Personalpronomen & „sein“',
  lead: '~~Tu primera frase en alemán:~~ **„Ich bin …“**. ~~Los pronombres personales y el verbo más importante —~~ *sein* ~~(ser/estar).~~',

  content: [
    // ── Lernziele ─────────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'die Personalpronomen kennen (ich, du, er, sie …)',
        'das Verb *sein* konjugieren',
        'sich vorstellen: Name, Herkunft, Alter',
      ],
    },

    { type: 'rule' },

    // ── Kernwortschatz ────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Kernwortschatz — sein',
      kopf: ['Pronomen', 'sein', 'Bedeutung'],
      zeilen: [
        ['ich', 'bin', 'yo soy/estoy'],
        ['du', 'bist', 'tú eres/estás'],
        ['er / sie / es', 'ist', 'él/ella es'],
        ['wir', 'sind', 'nosotros somos'],
        ['ihr', 'seid', 'vosotros sois'],
        ['sie / Sie', 'sind', 'ellos son / usted es'],
      ],
    },

    { type: 'rule' },

    // ── Erklärung ─────────────────────────────────────────────────
    {
      type: 'steps',
      eyebrow: 'Erklärung',
      steps: [
        {
          badge: 'unregelmäßig',
          titel: 'sein ist besonders',
          text: 'Das Verb *sein* ist unregelmäßig — __am besten auswendig lernen__. ~~(apréndelo de memoria)~~',
        },
        {
          badge: 'Position 2',
          titel: 'Das Verb steht auf Position 2',
          text: '__Ich **bin** Anna.__ · __Woher **bist** du?__ ~~(el verbo va en 2ª posición)~~',
        },
        {
          badge: 'Sie / du',
          titel: 'Höflich oder informell',
          text: '__Sie__ (usted, formal) · __du__ (tú, informal). ~~Con desconocidos usa „Sie“.~~',
        },
      ],
    },

    { type: 'rule' },

    // ── Beispiele ─────────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele',
      items: [
        { text: 'Ich **bin** Carlos.', gl: '— Soy Carlos.' },
        { text: 'Ich **bin** aus Mexiko.', gl: '— Soy de México.' },
        { text: 'Ich **bin** 25 Jahre alt.', gl: '— Tengo 25 años. (lit. soy de 25 años)' },
        { text: 'Wir **sind** Studenten.', gl: '— Somos estudiantes.' },
        { text: '**Sind** Sie Frau Müller?', gl: '— ¿Es usted la Sra. Müller?' },
      ],
    },

    { type: 'rule' },

    // ── Mehr Beispiele ────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Mehr Beispiele',
      titel: 'Fragen und Antworten mit sein',
      items: [
        { text: '**Bist** du aus Spanien? — Ja, ich **bin** aus Madrid.', gl: '— ¿Eres de España? — Sí, soy de Madrid.' },
        { text: 'Wer **ist** das? — Das **ist** Herr Schmidt.', gl: '— ¿Quién es? — Es el Sr. Schmidt.' },
        { text: 'Wie alt **bist** du? — Ich **bin** 30 Jahre alt.', gl: '— ¿Cuántos años tienes? — Tengo 30 años.' },
        { text: '**Seid** ihr aus Chile? — Ja, wir **sind** aus Santiago.', gl: '— ¿Sois de Chile? — Sí, somos de Santiago.' },
        { text: 'Sie **ist** Lehrerin.', gl: '— Ella es profesora. (¡sin artículo en alemán!)' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'du oder Sie?',
      titel: 'Informell und formell',
      items: [
        { text: 'Wer **bist** du?', gl: '— ¿Quién eres? (informal)' },
        { text: 'Wer **sind** Sie?', gl: '— ¿Quién es usted? (formal)' },
        { text: '**Sind** Sie aus Deutschland?', gl: '— ¿Es usted de Alemania?' },
        { text: 'Du **bist** nett.', gl: '— Eres simpático/a.' },
      ],
    },

    { type: 'rule' },

    // ── Prüfungsbezug ─────────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Sprechen · Teil 1',
      titel: 'Sich vorstellen',
      anweisung: 'Im Sprechen Teil 1 musst du dich vorstellen. Ergänze mit sein:',
      absaetze: [
        '„Ich {1} Ana. Ich {2} aus Kolumbien. Ich {3} 30 Jahre alt.“',
      ],
      loesungLabel: 'Lösung',
      loesungen: [
        '{1} Ich **bin** Ana.',
        '{2} Ich **bin** aus Kolumbien.',
        '{3} Ich **bin** 30 Jahre alt.',
      ],
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Die erste Aufgabe im Sprechen ist **„Sich vorstellen“**. Lerne deine Vorstellung **auswendig**: Name, Land, Alter, Sprachen, Beruf, Hobby. ~~Prepara y memoriza tu presentación — es lo primero que te piden.~~',
    },

    { type: 'rule' },

    // ── Abschluss ─────────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Singular', 'Plural'],
      zeilen: [
        ['ich **bin** · du **bist** · er/sie/es **ist**', 'wir **sind** · ihr **seid** · sie/Sie **sind**'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich kenne die Personalpronomen (ich, du, er, sie, wir, ihr, sie/Sie).',
        'Ich konjugiere „sein“ richtig (bin, bist, ist, sind, seid, sind).',
        'Ich kann mich vorstellen: Name, Herkunft, Alter.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Mit *sein* sagst du, **wer du bist**. Mit dem zweiten Superverb — **haben** — sagst du, **was du hast**: *Ich habe eine Frage.* Dazu lernst du in der nächsten Lektion auch die normalen Verben im Präsens.',
    },
  ],
}
