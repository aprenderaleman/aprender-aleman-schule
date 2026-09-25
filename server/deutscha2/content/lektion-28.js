// Lektion 28 · Sprechen Teil 1 — Fragen stellen & beantworten
//
// Bloque 2 (examen) — W-Fragen y preguntas de sí/no sobre temas
// cotidianos: formular pregunta Y respuesta, con mini-diálogos modelo.

export default {
  spec: ['Bloque 2', 'Modul Sprechen', 'Niveau A2', 'Prüfungsrelevanz: Sprechen Teil 1'],
  h1: 'Sprechen Teil 1 — Fragen stellen & beantworten',
  lead: '~~En el Teil 1 preguntas tú y respondes tú.~~ Mit den **W-Fragen** und den **Ja/Nein-Fragen** schaffst du beides.',

  content: [
    // ── Lernziele ─────────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'W-Fragen bilden: *Wer? Was? Wo? Wann? Wie?*',
        'Ja/Nein-Fragen bilden ~~(preguntas de sí o no)~~',
        'auf Fragen kurz und klar antworten',
      ],
    },

    { type: 'rule' },

    // ── Kernwortschatz ────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Kernwortschatz — die W-Fragen',
      kopf: ['W-Wort', 'Beispiel', 'Bedeutung'],
      zeilen: [
        ['Wer?', 'Wer ist das?', '¿quién?'],
        ['Was?', 'Was isst du gern?', '¿qué?'],
        ['Wo?', 'Wo wohnst du?', '¿dónde?'],
        ['Woher?', 'Woher kommst du?', '¿de dónde?'],
        ['Wann?', 'Wann stehst du auf?', '¿cuándo?'],
        ['Wie?', 'Wie heißt du?', '¿cómo?'],
        ['Wie viel(e)?', 'Wie viele Kinder hast du?', '¿cuánto(s)?'],
        ['Warum?', 'Warum lernst du Deutsch?', '¿por qué?'],
      ],
    },

    { type: 'rule' },

    // ── Erklärung ─────────────────────────────────────────────────
    {
      type: 'steps',
      eyebrow: 'Erklärung — zwei Fragetypen, eine Antwort',
      steps: [
        {
          badge: 'W-Frage',
          titel: 'W-Wort + Verb + du/Sie …?',
          text: 'Das W-Wort steht vorne, das __Verb auf Position 2__. ~~(el verbo va segundo, como siempre)~~\n__**Wo** *wohnst* du?__ — __**Was** *machst* du am Wochenende?__',
        },
        {
          badge: 'Ja/Nein',
          titel: 'Verb zuerst!',
          text: 'Bei Ja/Nein-Fragen steht das __Verb auf Position 1__. ~~En español solo cambia la entonación; en alemán el verbo salta al principio.~~\n__*Hast* du Kinder?__ — __*Trinkst* du Kaffee?__',
        },
        {
          badge: 'Antwort',
          titel: 'Kurz und mit Verb',
          text: 'Antworte mit einem **kurzen, ganzen Satz**: __Ich wohne in Sevilla.__ Bei Ja/Nein-Fragen: __Ja, ich trinke gern Kaffee.__ / __Nein, ich habe keine Kinder.__',
        },
      ],
    },

    { type: 'rule' },

    // ── Beispiele + Redemittel ────────────────────────────────────
    {
      type: 'redemittel',
      eyebrow: 'Redemittel — Frage und Antwort',
      gruppen: [
        {
          fn: 'Fragen zu Alltagsthemen',
          saetze: [
            { satz: 'Was isst du zum Frühstück?', gloss: 'comida' },
            { satz: 'Wo arbeitest du?', gloss: 'trabajo' },
            { satz: 'Wann stehst du auf?', gloss: 'rutina' },
            { satz: 'Hast du ein Hobby?', gloss: 'tiempo libre' },
          ],
        },
        {
          fn: 'Antworten',
          saetze: [
            { satz: 'Ich esse Brot mit Käse.' },
            { satz: 'Ich arbeite in einem Büro.' },
            { satz: 'Ich stehe um 7 Uhr auf.' },
            { satz: 'Ja, ich spiele Fußball.' },
          ],
        },
      ],
    },
    {
      type: 'modell',
      eyebrow: 'Beispiele — zwei Mini-Dialoge',
      thema: 'Teil 1: Thema „Essen“ und Thema „Wohnen“',
      woerter: '32 Wörter',
      absaetze: [
        'A: „**Was** trinkst du zum Frühstück?“\nB: „Ich trinke Kaffee mit Milch. **Und du?**“\nA: „Ich trinke Tee.“',
        'B: „**Wo** wohnst du?“\nA: „Ich wohne in Valencia, in einer Wohnung.“\nB: „**Wohnst du** allein?“\nA: „Nein, mit meiner Familie.“',
      ],
      annotationen: [
        { tag: 'Und du?', text: '~~Devuelve la pregunta — así el diálogo fluye y sumas puntos.~~' },
        { tag: 'Verb vorne', text: '„**Wohnst** du allein?“ — Ja/Nein-Frage: Verb auf Position 1.' },
        { tag: 'kurz + klar', text: 'Die Antworten sind ein Satz. Das reicht auf A2 völlig.' },
      ],
    },

    { type: 'rule' },

    // ── Mehr Beispiele ────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Mehr Beispiele',
      titel: 'W-Fragen und Antworten',
      items: [
        { text: '„**Wie** heißt du?“ — „Ich heiße Leyla.“', gl: '— ¿cómo te llamas?' },
        { text: '„**Woher** kommst du?“ — „Aus Ecuador.“', gl: '— origen → woher' },
        { text: '„**Wann** frühstückst du?“ — „Um halb acht.“', gl: '— rutina: a las 7.30' },
        { text: '„**Warum** lernst du Deutsch?“ — „Ich arbeite bald in Wien.“', gl: '— la respuesta puede ser simple' },
        { text: '„**Wie viele** Sprachen sprichst du?“ — „Drei.“', gl: '— ¿cuántas?' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'Ja/Nein-Fragen',
      titel: 'Das Verb springt nach vorne',
      items: [
        { text: '„**Arbeitest** du am Wochenende?“ — „Nein, zum Glück nicht.“', gl: '— verbo primero' },
        { text: '„**Hast** du Haustiere?“ — „Ja, eine Katze.“', gl: '— pregunta de sí/no' },
        { text: '„**Trinkst** du Tee oder Kaffee?“ — „Lieber Kaffee. Und du?“', gl: '— devuelve la pregunta' },
        { text: '„**Kochst** du gern?“ — „Ja, sehr gern!“', gl: '— responde con una frase corta' },
      ],
    },

    { type: 'rule' },

    // ── Prüfungsbezug ─────────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Sprechen · Teil 1',
      titel: 'Fragekarte',
      anweisung: 'In der Regel bekommst du Karten mit einem Thema und einem Wort. Bilde daraus Frage und Antwort. Thema: „Tagesablauf“, Wort: „Frühstück“.',
      absaetze: [
        'Deine Frage: „{1}“\nDeine Antwort: „{2}“',
      ],
      loesungLabel: 'Mögliche Lösung',
      loesungen: [
        '{1} **Was isst du zum Frühstück?** ~~o «Wann frühstückst du?» — vale toda pregunta correcta con esa palabra~~',
        '{2} **Ich esse Brot und trinke einen Kaffee.**',
      ],
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Lern für jedes Alltagsthema ~~(comida, casa, trabajo, tiempo libre, familia)~~ **eine Frage + eine Antwort** auswendig. Mit 10 fertigen Mini-Dialogen bist du für Teil 1 komplett vorbereitet.',
    },

    { type: 'rule' },

    // ── Abschluss ─────────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Fragetyp', 'Wortstellung', 'Beispiel'],
      zeilen: [
        ['W-Frage', 'W-Wort + Verb + Subjekt', 'Wo wohnst du?'],
        ['Ja/Nein-Frage', 'Verb + Subjekt', 'Hast du Kinder?'],
        ['Antwort', 'kurzer, ganzer Satz', 'Ich wohne in Köln.'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich bilde W-Fragen mit dem Verb auf Position 2.',
        'Ich bilde Ja/Nein-Fragen mit dem Verb auf Position 1.',
        'Ich antworte kurz und klar — und frage zurück: „Und du?“',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Fragen und Antworten kannst du jetzt. In **Teil 2** sprichst du länger allein: **von dir erzählen** — Familie, Beruf, Hobbys. Das üben wir in der nächsten Lektion.',
    },
  ],
}
