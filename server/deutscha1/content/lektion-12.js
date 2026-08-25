// Lektion 12 · Modalverben — können, möchten, müssen
//
// Bloque 1 — Grammatik & Struktur. Estándar de la lección modelo 04.
// Solo los tres modales del A1. Clave doble: ich/er sin -t (ich kann) y el
// infinitivo al FINAL. möchten como fórmula de cortesía → Sprechen Teil 3.

export default {
  spec: ['Bloque 1', 'Grammatik & Struktur', 'Niveau A1', 'Prüfungsrelevanz: Sprechen · Hören'],
  h1: 'Modalverben — können, möchten, müssen',
  lead: '**können** ~~(poder)~~, **möchten** ~~(querer, con cortesía)~~, **müssen** ~~(tener que)~~ — ~~tres verbos, una regla de oro: el otro verbo va~~ **al final**.',

  content: [
    // ── Lernziele ─────────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        '*können, möchten, müssen* konjugieren (ich kann, ich möchte, ich muss)',
        'den Infinitiv ~~(el otro verbo)~~ ans **Ende** stellen',
        'mit **möchten** höflich bitten und bestellen',
      ],
    },

    { type: 'rule' },

    // ── Kernwortschatz ────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Kernwortschatz — die drei Modalverben',
      kopf: ['Pronomen', 'können ~~(poder)~~', 'möchten ~~(querer)~~', 'müssen ~~(tener que)~~'],
      zeilen: [
        ['ich', '**kann**', '**möchte**', '**muss**'],
        ['du', 'kannst', 'möchtest', 'musst'],
        ['er / sie / es', '**kann** ~~(¡sin -t!)~~', '**möchte**', '**muss**'],
        ['wir', 'können', 'möchten', 'müssen'],
        ['ihr', 'könnt', 'möchtet', 'müsst'],
        ['sie / Sie', 'können', 'möchten', 'müssen'],
      ],
    },
    {
      type: 'wortschatz',
      eyebrow: 'Kernwortschatz — typische Kombinationen',
      items: [
        { wort: 'können + Sprache', kollokation: 'Ich kann Deutsch sprechen.', es: 'saber/poder' },
        { wort: 'möchten + Essen', kollokation: 'Ich möchte einen Kaffee trinken.', es: 'querría, me gustaría' },
        { wort: 'müssen + Arbeit', kollokation: 'Ich muss heute arbeiten.', es: 'tener que' },
        { wort: 'helfen', kollokation: 'Können Sie mir helfen?', es: 'ayudar' },
        { wort: 'bestellen', kollokation: 'Ich möchte bestellen, bitte.', es: 'pedir (en un café)' },
        { wort: 'bitte', kollokation: 'Ein Wasser, bitte!', es: 'por favor' },
      ],
      hinweis: '~~Ojo:~~ __ich kann__, __er kann__ — ~~la 1.ª y la 3.ª persona son iguales y SIN terminación. No digas «er kannt».~~',
    },

    { type: 'rule' },

    // ── Erklärung ─────────────────────────────────────────────────
    {
      type: 'steps',
      eyebrow: 'Erklärung',
      steps: [
        {
          badge: 'Bedeutung',
          titel: 'Drei Verben, drei Ideen',
          text: '__können__ = ~~poder, saber hacer~~ · __möchten__ = ~~querría (deseo cortés)~~ · __müssen__ = ~~tener que, obligación~~.',
        },
        {
          badge: 'Ende!',
          titel: 'Der Infinitiv geht ans Ende',
          text: 'Das Modalverb steht auf Position 2, der Infinitiv **am Ende**: __Ich möchte Kaffee **trinken**.__ · __Ich muss heute **arbeiten**.__ ~~En español van juntos («quiero beber café») — en alemán se separan.~~',
        },
        {
          badge: 'höflich',
          titel: 'möchten = deine Höflichkeitsformel',
          text: '__Ich möchte …, bitte.__ ~~es la fórmula mágica para pedir cualquier cosa~~ — im Café, im Geschäft, in der Prüfung: *Ich möchte ein Wasser, bitte.* Auch als Frage: *Können Sie das bitte wiederholen?* ~~(¿puede repetir?)~~',
        },
      ],
    },

    { type: 'rule' },

    // ── Beispiele ─────────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele',
      items: [
        { text: 'Ich **kann** ein bisschen Deutsch **sprechen**.', gl: '— Sé hablar un poco de alemán.' },
        { text: '**Kannst** du mir bitte **helfen**?', gl: '— ¿Puedes ayudarme, por favor?' },
        { text: 'Ich **möchte** einen Kaffee **trinken**.', gl: '— Querría tomar un café.' },
        { text: '**Möchten** Sie etwas **essen**?', gl: '— ¿Quiere usted comer algo?' },
        { text: 'Ich **muss** morgen früh **arbeiten**.', gl: '— Mañana tengo que trabajar temprano.' },
        { text: 'Wir **müssen** jetzt **gehen**.', gl: '— Tenemos que irnos ya.' },
      ],
    },

    { type: 'rule' },

    // ── Übungen ───────────────────────────────────────────────────
    {
      type: 'uebung',
      eyebrow: 'Anwendung — Übung 1 · Konjugation',
      frage: 'Ergänze die richtige Form.',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Ich ___ Spanisch und Englisch. (können)',
        'Er ___ heute arbeiten. (müssen)',
        '___ du einen Tee? (möchten)',
        'Wir ___ am Samstag kommen. (können)',
      ],
      loesungen: [
        'Ich **kann** Spanisch und Englisch.',
        'Er **muss** heute arbeiten. ~~(sin -t)~~',
        '**Möchtest** du einen Tee?',
        'Wir **können** am Samstag kommen.',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 2 · Der Infinitiv ans Ende',
      frage: 'Bilde den Satz. Der Infinitiv geht ans Ende. ~~(Ordena la frase.)~~',
      loesungLabel: 'Lösung',
      aufgaben: [
        'ich / möchten / trinken / einen Kaffee',
        'du / können / helfen / mir / ?',
        'wir / müssen / lernen / Deutsch',
      ],
      loesungen: [
        'Ich **möchte** einen Kaffee **trinken**.',
        '**Kannst** du mir **helfen**?',
        'Wir **müssen** Deutsch **lernen**.',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 3 · Höflich bitten',
      frage: 'Schreibe 3 höfliche Sätze mit möchten oder können + bitte. ~~(3 peticiones corteses.)~~',
      loesungLabel: 'Muster',
      loesung: '*Ich möchte ein Wasser, bitte. Können Sie das bitte wiederholen? Ich möchte bitte bezahlen.* ~~Cualquier petición vale — con «bitte» y el infinitivo al final.~~',
    },

    { type: 'rule' },

    // ── Prüfungsbezug ─────────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Sprechen · Teil 3',
      titel: 'Bitten formulieren',
      anweisung: 'Im Sprechen Teil 3 bekommst du Bildkarten und formulierst eine Bitte ~~(una petición)~~. Ergänze:',
      absaetze: [
        'Bildkarte „Wasser“: „Ich {1} ein Wasser, bitte.“',
        'Bildkarte „Fenster“: „{2} Sie bitte das Fenster öffnen?“',
      ],
      loesungLabel: 'Lösung',
      loesungen: [
        '{1} Ich **möchte** ein Wasser, bitte.',
        '{2} **Können** Sie bitte das Fenster öffnen?',
      ],
      kommentar: '~~Estas dos plantillas — «Ich möchte …, bitte» y «Können Sie bitte … + infinitivo?» — resuelven casi cualquier tarjeta del Teil 3.~~',
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Lerne **zwei Formeln auswendig**: *Ich möchte …, bitte.* und *Können Sie bitte …?* Auch super für die ganze Prüfung: *Können Sie das bitte **wiederholen**?* ~~— la frase de emergencia si no entiendes al examinador.~~',
    },

    { type: 'rule' },

    // ── Abschluss ─────────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Regel', 'Beispiel'],
      zeilen: [
        ['ich/er: **kann · möchte · muss** ~~(sin -t)~~', 'Er **kann** gut kochen.'],
        ['Infinitiv ans **Ende**', 'Ich möchte Kaffee **trinken**.'],
        ['höflich: möchten + bitte', 'Ich **möchte** ein Wasser, **bitte**.'],
        ['Bitte als Frage: Können Sie …?', '**Können** Sie mir bitte **helfen**?'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich konjugiere können, möchten und müssen (ich kann, möchte, muss).',
        'Ich stelle den Infinitiv ans Ende des Satzes.',
        'Ich kann mit möchten höflich bitten und bestellen.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Der Infinitiv am Ende — dieses Muster kommt gleich wieder! In der nächsten Lektion lernst du die **trennbaren Verben**: *aufstehen, einkaufen, anrufen* — Verben, die sich teilen: *Ich stehe um 7 Uhr **auf**.*',
    },
  ],
}
