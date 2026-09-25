// Lektion 04 · Perfekt — haben oder sein
//
// ═══ LECCIÓN MODELO del curso A2 — migrada de curso-a2.html ═══
// Fija el estándar para las otras 39: 8 secciones (FORMAT.md), nivel A2
// con máximo apoyo en español, tablas de vocabulario con significado.

export default {
  spec: ['Bloque 1', 'Grammatik & Struktur', 'Niveau A2', 'Prüfungsrelevanz: alle Module'],
  h1: 'Das Perfekt',
  lead: '~~Así se habla del pasado en alemán:~~ mit **haben** oder **sein** + Partizip II. ~~Es la forma más importante del A2.~~',

  content: [
    // ── Lernziele ─────────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'das Perfekt mit *haben* und *sein* bilden',
        'das Partizip II wichtiger Verben kennen',
        'über Vergangenes sprechen und schreiben',
      ],
    },

    { type: 'rule' },

    // ── Kernwortschatz ────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Kernwortschatz — Partizip II',
      kopf: ['Infinitiv', 'Partizip II', 'Bedeutung'],
      zeilen: [
        ['machen', 'gemacht', 'hacer'],
        ['kaufen', 'gekauft', 'comprar'],
        ['arbeiten', 'gearbeitet', 'trabajar'],
        ['essen', 'gegessen', 'comer'],
        ['trinken', 'getrunken', 'beber'],
        ['gehen', 'gegangen', 'ir (a pie)'],
        ['fahren', 'gefahren', 'ir (en vehículo)'],
        ['sein', 'gewesen', 'ser / estar'],
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
          text: 'Fast alle Verben bilden das Perfekt mit __haben__. ~~(la mayoría)~~\n__Ich **habe** Pizza **gegessen**.__',
        },
        {
          badge: 'sein',
          titel: 'Bewegung & Veränderung',
          text: '__sein__ bei Bewegung (*gehen, fahren, kommen, fliegen*) und Zustandsänderung (*aufstehen, einschlafen*) — plus *sein/bleiben/werden*.\n__Ich **bin** nach Berlin **gefahren**.__',
        },
        {
          badge: 'Satzklammer',
          titel: 'Wortstellung',
          text: '__haben/sein__ auf Position 2, __Partizip II am Ende__. ~~(el participio va al final)~~\n__Ich **habe** gestern viel **gearbeitet**.__',
        },
      ],
    },

    { type: 'rule' },

    // ── Beispiele ─────────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele',
      items: [
        { text: 'Wir **haben** Deutsch **gelernt**.', gl: '— haben (aprender)' },
        { text: 'Sie **ist** um 7 Uhr **aufgestanden**.', gl: '— sein (levantarse = cambio de estado)' },
        { text: 'Ich **habe** einen Kaffee **getrunken**.', gl: '— haben' },
        { text: 'Er **ist** nach Hause **gekommen**.', gl: '— sein (movimiento)' },
        { text: '**Hast** du das Buch schon **gelesen**? — Nein, noch nicht.', gl: '— pregunta: haben en posición 1' },
        { text: 'Meine Eltern **sind** am Sonntag zu Hause **geblieben**.', gl: '— bleiben → siempre sein' },
        { text: 'Ich **habe** heute nicht **gearbeitet**.', gl: '— negación: nicht antes del participio' },
      ],
    },

    { type: 'rule' },

    // ── Mehr Beispiele ────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Mehr Beispiele',
      titel: 'haben oder sein?',
      items: [
        { text: 'Ich **habe** am Montag lange **gearbeitet**.', gl: '— haben: la mayoría de los verbos' },
        { text: 'Rosa **ist** gestern nach Sevilla **geflogen**.', gl: '— sein: movimiento (volar)' },
        { text: 'Wir **haben** auf dem Markt Obst **gekauft**.', gl: '— haben' },
        { text: 'Das Kind **ist** früh **eingeschlafen**.', gl: '— sein: cambio de estado (dormirse)' },
        { text: '**Seid** ihr zu Fuß **gekommen**?', gl: '— pregunta con sein en posición 1' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'Satzklammer',
      titel: 'Das Partizip ans Ende',
      items: [
        { text: 'Ich **habe** heute Morgen nur einen Kaffee **getrunken**.', gl: '— haben en posición 2, participio al final' },
        { text: 'Am Sonntag **sind** wir im Park spazieren **gegangen**.', gl: '— sein: movimiento' },
        { text: '**Hast** du am Wochenende Fußball **gespielt**?', gl: '— pregunta: Hast du … gespielt?' },
        { text: 'Wir **haben** das Essen noch nicht **gemacht**.', gl: '— nicht va antes del participio' },
      ],
    },

    { type: 'rule' },

    // ── Prüfungsbezug ─────────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Schreiben · E-Mail',
      titel: '2 Sätze',
      anweisung: 'Im Schreiben erzählst du oft von gestern oder vom Wochenende. Ergänze: ~~(Completa:)~~',
      absaetze: [
        '„Liebe Anna, am Samstag {1} ich einen Ausflug {1}. Wir {2} an den See {2}.“',
      ],
      optionen: ['(1) machen', '(2) fahren'],
      loesungLabel: 'Lösung',
      loesungen: [
        '{1} … **habe** ich einen Ausflug **gemacht**.',
        '{2} Wir **sind** an den See **gefahren**. ~~(Bewegung → sein)~~',
      ],
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Beim **Sprechen (Von sich erzählen)** fragt man oft nach dem Wochenende. Übe **fünf Sätze im Perfekt** über deinen letzten Tag — dann bist du vorbereitet. ~~Aprende de memoria si un verbo va con haben o sein.~~',
    },

    { type: 'rule' },

    // ── Abschluss ─────────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Hilfsverb', 'Wann?', 'Beispiel'],
      zeilen: [
        ['haben', 'die meisten Verben', 'Ich habe gegessen.'],
        ['sein', 'Bewegung / Veränderung / sein, bleiben, werden', 'Ich bin gefahren.'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich bilde das Perfekt mit haben oder sein + Partizip II.',
        'Ich weiß, wann ich sein benutze (Bewegung / Veränderung).',
        'Ich stelle das Partizip II ans Satzende (Satzklammer).',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Mit dem Perfekt erzählst du, **was passiert ist**. Für *sein*, *haben* und die Modalverben benutzt man in der Vergangenheit aber meist eine andere Form: **war, hatte, konnte** … Das ist das Thema der nächsten Lektion.',
    },
  ],
}
