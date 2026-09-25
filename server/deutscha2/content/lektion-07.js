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
        { text: 'Der Zug **kommt** um 9:15 Uhr in Köln **an**.', gl: '— ankommen: llega' },
        { text: 'Ich **mache** das Fenster nicht **auf** — es ist zu kalt.', gl: '— negación: nicht antes del prefijo' },
      ],
    },

    { type: 'rule' },

    // ── Mehr Beispiele ────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Mehr Beispiele',
      titel: 'Ein Tag mit trennbaren Verben',
      items: [
        { text: 'Ich **stehe** am Sonntag erst um 10 Uhr **auf**.', gl: '— los domingos me levanto a las 10' },
        { text: 'Meine Frau **kauft** immer freitags **ein**.', gl: '— hace la compra siempre los viernes' },
        { text: 'Das Konzert **fängt** gleich **an** — schnell!', gl: '— el concierto empieza ya' },
        { text: 'Abends **sehen** wir eine Stunde **fern**.', gl: '— por la noche vemos la tele una hora' },
        { text: '**Machst** du bitte die Tür **auf**? Ich habe keine Hand frei.', gl: '— ¿me abres la puerta, por favor?' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'Modal & Perfekt',
      titel: 'Getrennt oder zusammen?',
      items: [
        { text: 'Ich **will** heute Abend meine Eltern **anrufen**.', gl: '— con modal: infinitivo entero al final' },
        { text: 'Karla **ist** heute um 5 Uhr **aufgestanden**.', gl: '— Perfekt: auf-ge-standen' },
        { text: 'Wir **haben** für das Wochenende **eingekauft**.', gl: '— Perfekt: ein-ge-kauft' },
        { text: '**Kommst** du **mit**? — Ich **kann** leider nicht **mitkommen**.', gl: '— separado sin modal, junto con modal' },
        { text: 'Der Zug **ist** pünktlich in Bonn **angekommen**.', gl: '— an-ge-kommen, con sein (movimiento)' },
      ],
    },

    { type: 'rule' },

    // ── Prüfungsbezug ─────────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Schreiben · Kurze Mitteilung',
      titel: 'SMS an eine Freundin',
      anweisung: 'Im Schreiben (Teil 1) schreibst du eine kurze Nachricht (~20-30 Wörter). Trennbare Verben brauchst du fast immer. Ergänze: ~~(Completa:)~~',
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
      text: 'Im **Hören** kommt die wichtige Information oft **erst am Satzende**: „Der Zug fährt heute nicht **ab**“ ~~(¡el ab del final cambia todo el sentido!)~~. Hör immer **bis zum Satzende** — erst dann antwortest du.',
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
