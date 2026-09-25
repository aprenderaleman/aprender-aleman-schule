// Lektion 35 · Freizeit & Hobbys
//
// Bloque 3 (temático): hobbys con gern, quedar con amigos (→ Sprechen T3),
// el fin de semana en Perfekt (→ Lektion 4).

export default {
  spec: ['Bloque 3', 'Themenfelder & Wortschatz', 'Niveau A2', 'Prüfungsrelevanz: Sprechen & Schreiben'],
  h1: 'Freizeit & Hobbys',
  lead: '~~De esto se habla en TODAS las partes del examen:~~ **Was machst du in deiner Freizeit?** — ~~aquí aprendes a responder.~~',

  content: [
    // ── Lernziele ─────────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'über Hobbys sprechen: *Ich spiele gern Fußball.*',
        'mit Freunden etwas planen: *Wollen wir ins Kino gehen?*',
        'über das Wochenende im Perfekt erzählen',
      ],
    },

    { type: 'rule' },

    // ── Kernwortschatz ────────────────────────────────────────────
    {
      type: 'wortschatz',
      eyebrow: 'Kernwortschatz — Freizeit',
      items: [
        { wort: 'die Freizeit', kollokation: 'in der Freizeit', es: 'el tiempo libre' },
        { wort: 'das Hobby, -s', kollokation: 'Mein Hobby ist Musik.', es: 'el hobby, la afición' },
        { wort: 'der Fußball', kollokation: 'Fußball spielen', es: 'el fútbol' },
        { wort: 'das Schwimmbad', kollokation: 'ins Schwimmbad gehen', es: 'la piscina' },
        { wort: 'das Kino', kollokation: 'ins Kino gehen', es: 'el cine' },
        { wort: 'die Musik', kollokation: 'Musik hören', es: 'la música' },
        { wort: 'das Fahrrad', kollokation: 'Fahrrad fahren', es: 'la bicicleta' },
        { wort: 'der Freund / die Freundin', kollokation: 'Freunde treffen', es: 'el amigo / la amiga' },
        { wort: 'das Wochenende', kollokation: 'am Wochenende', es: 'el fin de semana' },
        { wort: 'lesen', kollokation: 'ein Buch lesen', es: 'leer' },
        { wort: 'schwimmen', kollokation: 'schwimmen gehen', es: 'nadar' },
        { wort: 'wandern', kollokation: 'in den Bergen wandern', es: 'hacer senderismo' },
      ],
      hinweis: '~~Aprende cada hobby con su verbo: spielen, hören, fahren, gehen…~~',
    },

    { type: 'rule' },

    // ── Erklärung ─────────────────────────────────────────────────
    {
      type: 'steps',
      eyebrow: 'Erklärung — drei Situationen',
      steps: [
        {
          badge: 'gern',
          titel: 'Sagen, was du magst',
          text: '__gern__ steht **nach dem Verb**. ~~«Me gusta jugar al fútbol» =~~ __Ich spiele **gern** Fußball.__\n~~Nunca digas~~ *Ich mag spielen Fußball* ~~— ese calco es el error nº 1.~~',
        },
        {
          badge: 'planen',
          titel: 'Mit Freunden etwas planen',
          text: 'So verabredest du dich: __**Wollen wir** am Samstag ins Kino **gehen**?__ — __Ja, **gute Idee**!__\n~~Así es exactamente Sprechen Teil 3 (planear algo juntos).~~',
        },
        {
          badge: 'Perfekt',
          titel: 'Vom Wochenende erzählen',
          text: 'Was ist passiert? → **Perfekt** ~~(Lektion 4)~~: __Am Samstag **habe** ich Fußball **gespielt**. Am Sonntag **bin** ich schwimmen **gegangen**.__',
        },
      ],
    },

    { type: 'rule' },

    // ── Beispiele ─────────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele',
      items: [
        { text: 'Ich höre **gern** Musik.', gl: '— gern después del verbo' },
        { text: 'Mein Hobby ist **Lesen**.', gl: '' },
        { text: 'Am Wochenende **treffe** ich meine Freunde.', gl: '' },
        { text: '**Wollen wir** zusammen Fahrrad fahren?', gl: '— propuesta' },
        { text: 'Ich **bin** am Sonntag ins Schwimmbad **gegangen**.', gl: '— Perfekt' },
        { text: 'Ich spiele **lieber** Gitarre als Klavier.', gl: '— gern → lieber' },
        { text: 'Kommst du mit ins Kino? — Nein, ich habe leider **keine Zeit**.', gl: '— decir que no con cortesía' },
      ],
    },
    {
      type: 'redemittel',
      eyebrow: 'Redemittel — etwas vorschlagen',
      gruppen: [
        {
          fn: 'Vorschlagen & reagieren',
          saetze: [
            { satz: 'Hast du am Samstag Zeit?', gloss: '¿tienes tiempo el sábado?' },
            { satz: 'Wollen wir ins Kino gehen?' },
            { satz: 'Ja, gute Idee!' },
            { satz: 'Leider kann ich nicht. Vielleicht am Sonntag?', gloss: 'por desgracia no puedo' },
          ],
        },
      ],
    },

    { type: 'rule' },

    // ── Mehr Beispiele ────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Mehr Beispiele',
      titel: 'Hobbys mit gern',
      items: [
        { text: 'Ich spiele **gern** Gitarre, mein Bruder hört **lieber** Musik.', gl: '— Me gusta tocar la guitarra; mi hermano prefiere escuchar música.' },
        { text: 'Meine Schwester **liest gern** Bücher.', gl: '— A mi hermana le gusta leer libros.' },
        { text: 'Wir **wandern gern** in den Bergen.', gl: '— Nos gusta hacer senderismo en la montaña.' },
        { text: '**Triffst** du am Wochenende deine Freunde?', gl: '— ¿Quedas con tus amigos el fin de semana?' },
        { text: 'Mein Hobby ist **Schwimmen** — ich gehe oft ins Schwimmbad.', gl: '— Mi hobby es nadar: voy mucho a la piscina.' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'Planen & erzählen',
      titel: 'Vom Kino bis zum Wochenende',
      items: [
        { text: '**Wollen wir** am Freitag Fußball spielen?', gl: '— ¿Jugamos al fútbol el viernes?' },
        { text: 'Gute Idee! **Hast du** um fünf Uhr **Zeit**?', gl: '— ¡Buena idea! ¿Tienes tiempo a las cinco?' },
        { text: 'Leider kann ich nicht — **vielleicht am Sonntag**?', gl: '— Por desgracia no puedo, ¿quizás el domingo?' },
        { text: 'Am Samstag **habe** ich Musik **gehört** und ein Buch **gelesen**.', gl: '— El sábado escuché música y leí un libro. (Perfekt)' },
        { text: 'Am Sonntag **sind** wir Fahrrad **gefahren**.', gl: '— El domingo montamos en bici. (fahren → sein)' },
      ],
    },

    { type: 'rule' },

    // ── Prüfungsbezug ─────────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Sprechen · Teil 3',
      titel: 'Gemeinsam etwas planen',
      anweisung: 'Ihr wollt am Wochenende zusammen etwas machen. Plant: Was? Wann? Wo trefft ihr euch?',
      absaetze: [
        'Themenvorschlag: **ins Schwimmbad gehen**.',
      ],
      loesungLabel: 'Mögliche Lösung',
      loesungen: [
        'A: Wollen wir am Samstag ins Schwimmbad gehen?',
        'B: Gute Idee! Um wie viel Uhr?',
        'A: Um drei Uhr. Wir treffen uns am Eingang. ~~(la entrada)~~',
        'B: Super, bis Samstag!',
      ],
      kommentar: '**Frage + Antwort + Reaktion** — mehr brauchst du nicht. Kurze Sätze sind okay!',
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Bereite **drei Hobbys mit Verb** vor (*Ich spiele gern …, Ich höre gern …, Ich gehe gern …*). Die Frage nach der Freizeit kommt im **Sprechen Teil 2** fast immer.',
    },

    { type: 'rule' },

    // ── Abschluss ─────────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Funktion', 'So sagst du es'],
      zeilen: [
        ['mögen (aficiones)', 'Ich spiele **gern** Fußball.'],
        ['vorschlagen', 'Wollen wir ins Kino gehen?'],
        ['reagieren', 'Gute Idee! / Leider kann ich nicht.'],
        ['erzählen (pasado)', 'Ich habe … gespielt. / Ich bin … gegangen.'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich sage mit *gern*, was meine Hobbys sind.',
        'Ich schlage etwas vor und reagiere auf Vorschläge.',
        'Ich erzähle im Perfekt von meinem Wochenende.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Am Wochenende bleibt man nicht immer zu Hause — manchmal macht man eine **Reise**. In der nächsten Lektion lernst du **Reisen & Verkehr**: mit dem Zug fahren, eine Fahrkarte kaufen und nach dem Weg fragen.',
    },
  ],
}
