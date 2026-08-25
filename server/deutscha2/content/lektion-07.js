// Lektion 07 · Trennbare Verben
//
// Bloque 1 «Grammatik & Struktur». Sigue el estándar de lektion-04.js:
// 8 secciones (FORMAT.md), nivel A2, máximo apoyo en español.

export default {
  spec: ['Bloque 1', 'Grammatik & Struktur', 'Niveau A2', 'Prüfungsrelevanz: alle Module'],
  h1: 'Trennbare Verben',
  lead: '**aufstehen, anrufen, einkaufen** … ~~Verbos que se parten en dos: el prefijo salta al final de la frase.~~ __Ich **stehe** um 7 Uhr **auf**.__',

  content: [
    // ── Lernziele ─────────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'wichtige trennbare Verben ~~(verbos separables)~~ kennen',
        'das Präfix ~~(prefijo)~~ ans Satzende stellen',
        'trennbare Verben mit Modalverben und im Perfekt benutzen',
      ],
    },

    { type: 'rule' },

    // ── Kernwortschatz ────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Kernwortschatz — trennbare Verben',
      kopf: ['Verb', 'Beispiel', 'Bedeutung'],
      zeilen: [
        ['auf·stehen', 'Ich stehe um 7 Uhr auf.', 'levantarse'],
        ['an·rufen', 'Ich rufe dich morgen an.', 'llamar por teléfono'],
        ['ein·kaufen', 'Wir kaufen am Samstag ein.', 'hacer la compra'],
        ['mit·kommen', 'Kommst du mit?', 'venir con, acompañar'],
        ['zurück·kommen', 'Er kommt um 8 Uhr zurück.', 'volver'],
        ['fern·sehen', 'Abends sehe ich fern.', 'ver la tele'],
        ['an·fangen', 'Der Kurs fängt um 9 Uhr an.', 'empezar'],
        ['auf·machen', 'Mach bitte das Fenster auf!', 'abrir'],
      ],
    },

    { type: 'rule' },

    // ── Erklärung ─────────────────────────────────────────────────
    {
      type: 'steps',
      eyebrow: 'Erklärung — das Präfix wandert',
      steps: [
        {
          badge: 'Präsens',
          titel: 'Präfix ans Ende',
          text: 'Im Präsens trennt sich das Verb: das Verb auf __Position 2__, das __Präfix am Satzende__. ~~(en español no existe nada parecido)~~\n__auf·stehen → Ich **stehe** jeden Tag früh **auf**.__',
        },
        {
          badge: 'Modal',
          titel: 'Mit Modalverb: wieder zusammen',
          text: 'Mit einem Modalverb (Lektion 6) steht der __ganze Infinitiv__ am Ende — **nicht** getrennt.\n__Ich **muss** früh **aufstehen**.__ ~~(no: *Ich muss früh stehen auf*)~~',
        },
        {
          badge: 'Perfekt',
          titel: 'Im Perfekt: -ge- in der Mitte',
          text: 'Im Perfekt (Lektion 4) geht __-ge-__ **zwischen** Präfix und Verb: __auf**ge**standen, ein**ge**kauft, an**ge**rufen__.\n__Ich **bin** um 7 Uhr **aufgestanden**.__',
        },
        {
          badge: 'Achtung',
          titel: 'Im Wörterbuch: ein Wort!',
          text: '~~Error típico: oyes «Ich stehe … auf» y buscas *stehen* en el diccionario — y no cuadra.~~ Suche immer das **ganze Verb**: __aufstehen__, nicht *stehen*. Siehst du am Satzende ein kleines Wort wie *auf, an, ein, mit, zurück* — es ist ein Präfix!',
        },
      ],
    },

    { type: 'rule' },

    // ── Beispiele ─────────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele',
      items: [
        { text: 'Der Film **fängt** um 20 Uhr **an**.', gl: '— anfangen: empieza' },
        { text: '**Rufst** du mich heute Abend **an**?', gl: '— anrufen, también en preguntas' },
        { text: 'Ich **kann** heute nicht **mitkommen**.', gl: '— con modal: junto al final' },
        { text: 'Wir **haben** im Supermarkt **eingekauft**.', gl: '— Perfekt: ein-ge-kauft' },
        { text: 'Sie **ist** spät **zurückgekommen**.', gl: '— movimiento → sein (Lektion 4)' },
      ],
    },

    { type: 'rule' },

    // ── Übungen ───────────────────────────────────────────────────
    {
      type: 'uebung',
      eyebrow: 'Anwendung — Übung 1 · Präfix erkennen',
      frage: 'Wo ist das Präfix? Schreibe den Infinitiv. ~~Busca la palabrita del final y únela al verbo.~~',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Ich stehe um 6 Uhr auf. → Infinitiv: …',
        'Der Kurs fängt gleich an. → Infinitiv: …',
        'Abends sehen wir fern. → Infinitiv: …',
      ],
      loesungen: [
        '**aufstehen** ~~(no *stehen*)~~',
        '**anfangen**',
        '**fernsehen**',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 2 · Sätze bauen',
      frage: 'Bilde Sätze im Präsens. Verb auf Position 2, Präfix ans Ende.',
      loesungLabel: 'Lösung',
      aufgaben: [
        '(ich / meine Mutter / heute / anrufen)',
        '(wir / am Samstag / einkaufen)',
        '(du / mitkommen / ?)',
      ],
      loesungen: [
        'Ich **rufe** meine Mutter heute **an**.',
        'Wir **kaufen** am Samstag **ein**.',
        '**Kommst** du **mit**?',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 3 · Mit Modalverb und im Perfekt',
      frage: 'Schreibe den Satz neu: erst mit müssen, dann im Perfekt.',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Ich stehe früh auf. → mit *müssen*: … → im Perfekt: …',
        'Er kauft ein. → mit *müssen*: … → im Perfekt: …',
      ],
      loesungen: [
        'Ich **muss** früh **aufstehen**. → Ich **bin** früh **aufgestanden**.',
        'Er **muss einkaufen**. → Er **hat eingekauft**.',
      ],
    },

    { type: 'rule' },

    // ── Prüfungsbezug ─────────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Schreiben · Kurze Mitteilung',
      titel: 'SMS an eine Freundin',
      anweisung: 'In Schreiben Teil 1 schreibst du eine kurze Nachricht (~20-30 Wörter). Trennbare Verben brauchst du fast immer. Ergänze:',
      absaetze: [
        '„Hallo Maria! Der Deutschkurs {1} morgen schon um 8 Uhr {1}. Ich {2} dich heute Abend {2}. Bis später!“',
      ],
      optionen: ['(1) anfangen', '(2) anrufen'],
      loesungLabel: 'Lösung',
      loesungen: [
        '{1} Der Deutschkurs **fängt** morgen schon um 8 Uhr **an**.',
        '{2} Ich **rufe** dich heute Abend **an**. ~~(el prefijo cierra la frase)~~',
      ],
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Im **Hören** kommt die wichtige Information oft **erst am Satzende**: „Der Zug fährt heute nicht **ab**“ ~~(¡el ab del final cambia todo el sentido!)~~. Höre immer **bis zum Ende** des Satzes, bevor du antwortest.',
    },

    { type: 'rule' },

    // ── Abschluss ─────────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Situation', 'Regel', 'Beispiel'],
      zeilen: [
        ['Präsens', 'Präfix am Satzende', 'Ich stehe früh auf.'],
        ['mit Modalverb', 'Infinitiv zusammen am Ende', 'Ich muss früh aufstehen.'],
        ['Perfekt', '-ge- in der Mitte', 'Ich bin früh aufgestanden.'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich kenne wichtige trennbare Verben (aufstehen, anrufen, einkaufen …).',
        'Ich stelle das Präfix im Präsens ans Satzende.',
        'Ich benutze trennbare Verben mit Modalverben und im Perfekt (aufgestanden).',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Du sagst jetzt: __Ich rufe **meine Mutter** an.__ Aber warum *meine Mutter* und nicht *mein Mutter*? Und warum heißt es __Ich sehe **den** Mann__? Das ist der **Akkusativ** — das Thema der nächsten Lektion.',
    },
  ],
}
