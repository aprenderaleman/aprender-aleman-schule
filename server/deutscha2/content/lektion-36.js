// Lektion 36 · Reisen & Verkehr
//
// Bloque 3 (temático): transportes con mit + Dativ (→ Lektion 9),
// billete, preguntar el camino, hotel básico.

export default {
  spec: ['Bloque 3', 'Themenfelder & Wortschatz', 'Niveau A2', 'Prüfungsrelevanz: Hören & Sprechen'],
  h1: 'Reisen & Verkehr',
  lead: '~~Viajar en alemán:~~ **mit dem Zug fahren**, eine Fahrkarte kaufen und fragen: **Wie komme ich zum Bahnhof?**',

  content: [
    // ── Lernziele ─────────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'sagen, wie du fährst: *mit dem Bus, mit dem Zug*',
        'eine Fahrkarte kaufen und nach dem Weg fragen',
        'einfache Sätze im Hotel benutzen',
      ],
    },

    { type: 'rule' },

    // ── Kernwortschatz ────────────────────────────────────────────
    {
      type: 'wortschatz',
      eyebrow: 'Kernwortschatz — Reisen',
      items: [
        { wort: 'die Reise, -n', kollokation: 'eine Reise machen', es: 'el viaje' },
        { wort: 'der Urlaub', kollokation: 'in Urlaub fahren', es: 'las vacaciones' },
        { wort: 'der Zug, -¨e', kollokation: 'mit dem Zug fahren', es: 'el tren' },
        { wort: 'der Bus, -se', kollokation: 'mit dem Bus fahren', es: 'el autobús' },
        { wort: 'das Flugzeug', kollokation: 'mit dem Flugzeug fliegen', es: 'el avión' },
        { wort: 'der Bahnhof', kollokation: 'am Bahnhof', es: 'la estación (de tren)' },
        { wort: 'die Haltestelle', kollokation: 'an der Haltestelle warten', es: 'la parada' },
        { wort: 'die Fahrkarte, -n', kollokation: 'eine Fahrkarte kaufen', es: 'el billete' },
        { wort: 'das Gleis, -e', kollokation: 'auf Gleis 5', es: 'la vía / el andén' },
        { wort: 'umsteigen', kollokation: 'in Köln umsteigen', es: 'hacer transbordo' },
        { wort: 'das Hotel, -s', kollokation: 'im Hotel', es: 'el hotel' },
        { wort: 'das Zimmer, -', kollokation: 'ein Zimmer reservieren', es: 'la habitación' },
      ],
      hinweis: '~~En Hören salen muchos „Durchsagen“ (avisos por megafonía): Gleis, Zug, umsteigen…~~',
    },

    { type: 'rule' },

    // ── Erklärung ─────────────────────────────────────────────────
    {
      type: 'steps',
      eyebrow: 'Erklärung — drei Situationen',
      steps: [
        {
          badge: 'mit dem',
          titel: 'Wie fährst du?',
          text: '~~«en tren» / «en bus» =~~ __**mit dem** Zug__, __**mit dem** Bus__ — *mit* + Dativ ~~(Lektion 9)~~.\n__Ich fahre **mit dem Zug** nach Berlin.__ ~~Nunca~~ *in Zug* ~~— ese calco no existe.~~',
        },
        {
          badge: 'Ticket',
          titel: 'Am Bahnhof',
          text: 'So kaufst du eine Fahrkarte: __**Eine Fahrkarte nach** München, bitte.__ — __**Einfach oder hin und zurück?**__ ~~(¿solo ida o ida y vuelta?)~~\nWichtige Frage: __**Wann fährt** der Zug?__',
        },
        {
          badge: 'der Weg',
          titel: 'Nach dem Weg fragen',
          text: 'Zwei einfache Fragen: __**Wo ist** der Bahnhof?__ und __**Wie komme ich zum** Hotel?__ ~~(¿cómo llego a…?)~~\nAntworten: __**links** ~~(izquierda)~~, **rechts** ~~(derecha)~~, **geradeaus** ~~(todo recto)~~.__',
        },
      ],
    },

    { type: 'rule' },

    // ── Beispiele ─────────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele',
      items: [
        { text: 'Wir machen im August **eine Reise nach** Spanien.', gl: '' },
        { text: 'Ich fahre **mit dem Bus** zur Arbeit.', gl: '— mit + Dativ' },
        { text: 'Der Zug fährt **auf Gleis 5** ab.', gl: '' },
        { text: 'Sie müssen **in Köln umsteigen**.', gl: '— típico de Durchsagen' },
        { text: 'Entschuldigung, **wie komme ich zum** Bahnhof?', gl: '' },
        { text: 'Ich habe **ein Zimmer reserviert**.', gl: '— en el hotel' },
      ],
    },
    {
      type: 'redemittel',
      eyebrow: 'Redemittel — unterwegs',
      gruppen: [
        {
          fn: 'Am Schalter & im Hotel',
          saetze: [
            { satz: 'Eine Fahrkarte nach Berlin, bitte. Hin und zurück.' },
            { satz: 'Wann fährt der nächste Zug?', gloss: 'el próximo tren' },
            { satz: 'Wie komme ich zum Hotel Adler?' },
            { satz: 'Ich habe ein Zimmer reserviert. Mein Name ist …' },
          ],
        },
      ],
    },

    { type: 'rule' },

    // ── Übungen ───────────────────────────────────────────────────
    {
      type: 'uebung',
      eyebrow: 'Anwendung — Übung 1 · Was passt?',
      frage: 'Welches Wort passt? Fahrkarte · Gleis · Haltestelle · Zimmer.',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Der Zug fährt auf ___ 3.',
        'Ich warte an der ___ auf den Bus.',
        'Im Hotel möchte ich ein ___ reservieren.',
        'Am Bahnhof kaufe ich eine ___ .',
      ],
      loesungen: [
        'Der Zug fährt auf **Gleis** 3.',
        'Ich warte an der **Haltestelle** auf den Bus.',
        'Im Hotel möchte ich ein **Zimmer** reservieren.',
        'Am Bahnhof kaufe ich eine **Fahrkarte**.',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 2 · mit dem … ergänzen',
      frage: 'Ergänze: mit dem Zug · mit dem Bus · mit dem Flugzeug · zum.',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Ich fliege ___ nach Mallorca.',
        'Wir fahren ___ nach Hamburg. Die Fahrt dauert vier Stunden.',
        'Er fährt jeden Tag ___ zur Schule.',
        'Wie komme ich ___ Bahnhof?',
      ],
      loesungen: [
        'Ich fliege **mit dem Flugzeug** nach Mallorca.',
        'Wir fahren **mit dem Zug** nach Hamburg.',
        'Er fährt jeden Tag **mit dem Bus** zur Schule.',
        'Wie komme ich **zum** Bahnhof? ~~(zu + dem = zum)~~',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 3 · Produzieren',
      frage: 'Schreib 4-5 Sätze über deinen letzten Urlaub (ca. 30 Wörter): Wohin? Wie? Was hast du gemacht?',
      loesungLabel: 'Mögliche Lösung',
      loesung:
        'Im Sommer bin ich nach Berlin gefahren. Ich bin mit dem Zug gefahren. Das Hotel war klein, aber schön. Ich habe viel gesehen und Fotos gemacht. Der Urlaub war super! ~~(Importante: Perfekt + un transporte con „mit dem“.)~~',
    },

    { type: 'rule' },

    // ── Prüfungsbezug ─────────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Schreiben · Teil 2 (E-Mail)',
      titel: 'Besuch planen (~30-40 Wörter)',
      anweisung: 'Du besuchst am Samstag deine Freundin Lena in München. Schreib ihr eine E-Mail: Wann kommst du an? Wie fährst du? Was möchtet ihr zusammen machen?',
      absaetze: [
        'Denk an **Anrede** ~~(saludo)~~ und **Gruß** ~~(despedida)~~ — dafür gibt es Punkte!',
      ],
      loesungLabel: 'Mögliche Lösung',
      loesungen: [
        'Liebe Lena, ich komme am Samstag um 11 Uhr an. Ich fahre mit dem Zug. Kannst du zum Bahnhof kommen? Am Nachmittag können wir ins Kino gehen. Ich freue mich! Viele Grüße, Marta ~~(33 palabras — responde a las tres preguntas.)~~',
      ],
      kommentar: 'Drei Fragen = drei kurze Antworten. Mehr musst du nicht schreiben.',
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Im **Hören** kommen oft **Durchsagen** am Bahnhof: Hör auf die Zahlen — **Gleis**, **Uhrzeit**, **Verspätung** ~~(retraso)~~. Übe mit dem offiziellen Modellsatz.',
    },

    { type: 'rule' },

    // ── Abschluss ─────────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Funktion', 'So sagst du es'],
      zeilen: [
        ['transporte', 'mit dem Zug / Bus / Auto fahren'],
        ['billete', 'Eine Fahrkarte nach …, bitte. Hin und zurück.'],
        ['el camino', 'Wo ist …? / Wie komme ich zum …?'],
        ['hotel', 'Ich habe ein Zimmer reserviert.'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich sage mit *mit dem …*, wie ich fahre.',
        'Ich kaufe eine Fahrkarte und frage nach dem Weg.',
        'Ich schreibe eine kurze E-Mail über eine Reise.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Auf Reisen wird man manchmal krank. In der nächsten Lektion lernst du **Gesundheit & Körper**: beim Arzt sagen, was wehtut — und warum „constipado“ auf Deutsch **nicht** *konstipiert* heißt.',
    },
  ],
}
