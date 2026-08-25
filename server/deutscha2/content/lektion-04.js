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
      ],
    },

    { type: 'rule' },

    // ── Übungen ───────────────────────────────────────────────────
    {
      type: 'uebung',
      eyebrow: 'Anwendung — Übung 1 · haben oder sein?',
      frage: 'Ergänze haben oder sein.',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Ich ___ ein Buch gelesen.',
        'Wir ___ ins Kino gegangen.',
        'Sie ___ einen Brief geschrieben.',
        'Er ___ nach Spanien geflogen.',
      ],
      loesungen: [
        'Ich **habe** ein Buch gelesen.',
        'Wir **sind** ins Kino gegangen. ~~(Bewegung)~~',
        'Sie **hat** einen Brief geschrieben.',
        'Er **ist** nach Spanien geflogen. ~~(Bewegung)~~',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 2 · Partizip II bilden',
      frage: 'Wie heißt das Partizip II?',
      loesungLabel: 'Lösung',
      aufgaben: [
        'kaufen → ich habe …',
        'essen → ich habe …',
        'fahren → ich bin …',
      ],
      loesungen: [
        'ich habe **gekauft**',
        'ich habe **gegessen**',
        'ich bin **gefahren**',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 3 · Satz im Perfekt bilden',
      frage: 'Bilde Sätze im Perfekt.',
      loesungLabel: 'Lösung',
      aufgaben: [
        '(ich / gestern / Fußball / spielen)',
        '(wir / am Wochenende / nach München / fahren)',
      ],
      loesungen: [
        'Ich **habe** gestern Fußball **gespielt**.',
        'Wir **sind** am Wochenende nach München **gefahren**.',
      ],
    },

    { type: 'rule' },

    // ── Prüfungsbezug ─────────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Schreiben · E-Mail',
      titel: '2 Sätze',
      anweisung: 'Im Schreiben erzählst du oft, was du gemacht hast. Ergänze:',
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
