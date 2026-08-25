// Lektion 07 · W-Fragen & Ja/Nein-Fragen
//
// Bloque 1 «Grammatik & Struktur». Sigue la lección modelo lektion-04.js:
// 8 secciones, frases mínimas, traducción casi constante.

export default {
  spec: ['Bloque 1', 'Grammatik & Struktur', 'Niveau A1', 'Prüfungsrelevanz: Sprechen · Hören'],
  h1: 'W-Fragen & Ja/Nein-Fragen',
  lead: '~~Dos formas de preguntar:~~ **Wo wohnst du?** ~~(con palabra-W)~~ · **Wohnst du in Berlin?** ~~(verbo primero — respuesta ja/nein).~~',

  content: [
    // ── Lernziele ─────────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'die W-Wörter kennen (wer, was, wo, woher, wann, wie)',
        'W-Fragen bilden: W-Wort + Verb auf Position 2',
        'Ja/Nein-Fragen bilden: das Verb zuerst',
      ],
    },

    { type: 'rule' },

    // ── Kernwortschatz ────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Kernwortschatz — W-Wörter',
      kopf: ['W-Wort', 'Beispiel', 'Bedeutung'],
      zeilen: [
        ['wer', 'Wer ist das?', '¿quién?'],
        ['was', 'Was machst du?', '¿qué?'],
        ['wo', 'Wo wohnst du?', '¿dónde?'],
        ['woher', 'Woher kommst du?', '¿de dónde?'],
        ['wann', 'Wann kommst du?', '¿cuándo?'],
        ['wie', 'Wie heißt du?', '¿cómo?'],
        ['wie viel', 'Wie viel kostet das?', '¿cuánto?'],
        ['wie alt', 'Wie alt bist du?', '¿cuántos años?'],
      ],
    },

    { type: 'rule' },

    // ── Erklärung ─────────────────────────────────────────────────
    {
      type: 'steps',
      eyebrow: 'Erklärung',
      steps: [
        {
          badge: 'Position 2',
          titel: 'W-Frage: das Verb bleibt auf Position 2',
          text: '__Wo **wohnst** du?__ · __Woher **kommen** Sie?__ ~~(palabra-W primero, verbo segundo — como en las frases normales)~~',
        },
        {
          badge: 'Position 1',
          titel: 'Ja/Nein-Frage: das Verb zuerst!',
          text: '__**Bist** du aus Spanien?__ · __**Kommst** du aus Peru?__ · __**Hast** du Kinder?__ ~~(el verbo salta al principio; en alemán solo hay un signo „?“, al final)~~',
        },
        {
          badge: 'ja / nein',
          titel: 'Die Antwort',
          text: '„Kommst du aus Chile?“ — __Ja__, ich komme aus Chile. / __Nein__, ich komme aus Peru. ~~(existe un tercero, „doch“, para decir «sí» a una pregunta negativa — de momento solo su nombre)~~',
        },
        {
          badge: '⚠ Fehler',
          titel: 'Der typische Fehler',
          text: '*Du kommst aus Spanien?* ✗ ~~(preguntar solo con entonación, como en español)~~ → __**Kommst** du aus Spanien?__ ✓ ~~(en alemán el verbo DEBE ir primero)~~',
        },
      ],
    },

    { type: 'rule' },

    // ── Beispiele ─────────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele',
      kicker: 'Fragetyp 1',
      titel: 'W-Fragen',
      items: [
        { text: 'Wie **heißt** du?', gl: '— ¿Cómo te llamas?' },
        { text: 'Wo **wohnen** Sie?', gl: '— ¿Dónde vive usted?' },
        { text: 'Was **machst** du?', gl: '— ¿Qué haces?' },
        { text: 'Wie alt **bist** du?', gl: '— ¿Cuántos años tienes?' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'Fragetyp 2',
      titel: 'Ja/Nein-Fragen',
      items: [
        { text: '**Bist** du Studentin?', gl: '— ¿Eres estudiante? → Ja. / Nein.' },
        { text: '**Sprichst** du Englisch?', gl: '— ¿Hablas inglés?' },
        { text: '**Haben** Sie Kinder?', gl: '— ¿Tiene usted hijos?' },
        { text: '**Wohnt** ihr in Madrid?', gl: '— ¿Vivís en Madrid?' },
      ],
    },

    { type: 'rule' },

    // ── Übungen ───────────────────────────────────────────────────
    {
      type: 'uebung',
      eyebrow: 'Anwendung — Übung 1 · W-Wörter',
      frage: 'Welches W-Wort passt?',
      loesungLabel: 'Lösung',
      aufgaben: [
        '___ kommst du? — Aus Mexiko.',
        '___ wohnst du? — In Sevilla.',
        '___ alt bist du? — 30.',
        '___ ist das? — Das ist Anna.',
      ],
      loesungen: [
        '**Woher** kommst du? — Aus Mexiko.',
        '**Wo** wohnst du? — In Sevilla.',
        '**Wie** alt bist du? — 30.',
        '**Wer** ist das? — Das ist Anna.',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 2 · Ja/Nein-Fragen bilden',
      frage: 'Mach eine Ja/Nein-Frage. ~~(el verbo primero)~~',
      loesungLabel: 'Lösung',
      aufgaben: [
        'du / kommen / aus Spanien',
        'Sie / haben / Kinder',
        'du / sprechen / Deutsch',
        'ihr / wohnen / in Madrid',
      ],
      loesungen: [
        '**Kommst** du aus Spanien?',
        '**Haben** Sie Kinder?',
        '**Sprichst** du Deutsch?',
        '**Wohnt** ihr in Madrid?',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 3 · Deine Fragen',
      frage: 'Schreibe 3 Fragen an eine neue Person im Kurs.',
      loesungLabel: 'Muster',
      loesung: '*Wie heißt du? Woher kommst du? Sprichst du Englisch?* ~~(valen todas las W-Fragen y Ja/Nein-Fragen correctas)~~',
    },

    { type: 'rule' },

    // ── Prüfungsbezug ─────────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Sprechen · Teil 2',
      titel: 'Fragen stellen & antworten',
      anweisung: 'Im Sprechen Teil 2 bekommst du eine Wortkarte und stellst eine Frage dazu. Bilde eine Frage pro Karte:',
      absaetze: [
        'Karte „wohnen“: {1} · Karte „Sprachen“: {2} · Karte „Alter“: {3}',
      ],
      loesungLabel: 'Lösung',
      loesungen: [
        '{1} **Wo wohnst du?** / Wo wohnen Sie?',
        '{2} **Sprichst du Englisch?** / Welche Sprachen sprichst du?',
        '{3} **Wie alt bist du?**',
      ],
      kommentar: 'W-Frage oder Ja/Nein-Frage — beides ist okay. Wichtig: die Frage muss zur Karte passen. ~~(vale cualquier pregunta correcta que encaje con la tarjeta)~~',
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Im Sprechen Teil 2 zählen Frage **und** Antwort. Übe Paare: „Wo wohnst du?“ — „Ich wohne in …“. ~~Prepara pregunta y respuesta para cada tema típico: Name, Land, Wohnort, Sprachen, Beruf, Hobby.~~',
    },

    { type: 'rule' },

    // ── Abschluss ─────────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Fragetyp', 'Verb', 'Beispiel'],
      zeilen: [
        ['W-Frage', 'Position 2', '**Wo** wohnst du?'],
        ['Ja/Nein-Frage', 'Position 1', '**Wohnst** du in Berlin?'],
        ['Antwort', 'ja / nein', 'Ja, ich wohne in Berlin.'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich kenne wer, was, wo, woher, wann, wie.',
        'Ich stelle W-Fragen mit dem Verb auf Position 2.',
        'Ich stelle Ja/Nein-Fragen mit dem Verb zuerst.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Fragen und Antworten — check! Jetzt kommen die Nomen: Auf Deutsch hat jedes Nomen einen Artikel — **der, die** oder **das**. Warum heißt es „das Mädchen“? Das lernst du in der nächsten Lektion.',
    },
  ],
}
