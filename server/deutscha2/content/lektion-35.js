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

    // ── Übungen ───────────────────────────────────────────────────
    {
      type: 'uebung',
      eyebrow: 'Anwendung — Übung 1 · Welches Verb passt?',
      frage: 'Ergänze das Verb: spielen, hören, fahren, gehen.',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Musik ___',
        'Fußball ___',
        'Fahrrad ___',
        'ins Kino ___',
      ],
      loesungen: [
        'Musik **hören**',
        'Fußball **spielen**',
        'Fahrrad **fahren**',
        'ins Kino **gehen**',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 2 · Sätze ergänzen',
      frage: 'Ergänze: gern · wollen · bin · habe.',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Ich lese ___ Bücher.',
        '___ wir am Freitag schwimmen gehen?',
        'Am Samstag ___ ich Freunde getroffen.',
        'Am Sonntag ___ ich in den Bergen gewandert.',
      ],
      loesungen: [
        'Ich lese **gern** Bücher.',
        '**Wollen** wir am Freitag schwimmen gehen?',
        'Am Samstag **habe** ich Freunde getroffen.',
        'Am Sonntag **bin** ich in den Bergen gewandert. ~~(Bewegung → sein)~~',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 3 · Produzieren',
      frage: 'Schreib 4-5 Sätze über dein Wochenende (ca. 30 Wörter): Was hast du gemacht? Mit wem?',
      loesungLabel: 'Mögliche Lösung',
      loesung:
        'Am Samstag habe ich lange geschlafen. Dann habe ich mit meinem Freund Fußball gespielt. Am Abend sind wir ins Kino gegangen. Am Sonntag habe ich Musik gehört und ein Buch gelesen. ~~(Vale cualquier texto con 2-3 verbos en Perfekt y un „gern“ o una actividad de la lista.)~~',
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
