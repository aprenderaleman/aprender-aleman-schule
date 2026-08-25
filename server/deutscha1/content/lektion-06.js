// Lektion 06 · Unregelmäßige Verben im Präsens
//
// Bloque 1 «Grammatik & Struktur». Sigue la lección modelo lektion-04.js:
// 8 secciones, frases mínimas, traducción casi constante.

export default {
  spec: ['Bloque 1', 'Grammatik & Struktur', 'Niveau A1', 'Prüfungsrelevanz: Sprechen · Hören'],
  h1: 'Unregelmäßige Verben',
  lead: '~~Algunos verbos cambian la vocal:~~ *sprechen* → **du sprichst, er spricht**. ~~Solo en „du“ y „er/sie/es“ — el resto es normal.~~',

  content: [
    // ── Lernziele ─────────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'die wichtigsten unregelmäßigen Verben kennen (sprechen, essen, fahren …)',
        'wissen: nur *du* und *er/sie/es* ändern den Vokal',
        'sagen, welche Sprachen du sprichst',
      ],
    },

    { type: 'rule' },

    // ── Kernwortschatz ────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Kernwortschatz — 7 wichtige Verben',
      kopf: ['Verb', 'du', 'er / sie / es', 'Bedeutung'],
      zeilen: [
        ['sprechen', 'sprichst', 'spricht', 'hablar'],
        ['essen', 'isst', 'isst', 'comer'],
        ['lesen', 'liest', 'liest', 'leer'],
        ['sehen', 'siehst', 'sieht', 'ver'],
        ['fahren', 'fährst', 'fährt', 'ir (en vehículo)'],
        ['schlafen', 'schläfst', 'schläft', 'dormir'],
        ['nehmen', 'nimmst', 'nimmt', 'tomar, coger'],
      ],
    },

    { type: 'rule' },

    // ── Erklärung ─────────────────────────────────────────────────
    {
      type: 'steps',
      eyebrow: 'Erklärung',
      steps: [
        {
          badge: 'nur du + er',
          titel: 'Nur zwei Formen ändern sich',
          text: 'ich spreche, wir sprechen, ihr sprecht — alles normal. Nur: __du **sprichst**, er **spricht**__. ~~(solo „tú“ y „él/ella“ cambian la vocal; el resto sigue la regla de la lección 5)~~',
        },
        {
          badge: 'e → i / ie',
          titel: 'e wird i oder ie',
          text: 'sprechen → du spr**i**chst · essen → er **i**sst · nehmen → er n**imm**t ~~(nehmen cambia también la consonante)~~ · lesen → sie l**ie**st · sehen → er s**ie**ht',
        },
        {
          badge: 'a → ä',
          titel: 'a bekommt zwei Punkte',
          text: 'fahren → du f**ä**hrst, er f**ä**hrt · schlafen → sie schl**ä**ft ~~(la „a“ gana diéresis — se llama Umlaut)~~',
        },
        {
          badge: '⚠ Fehler',
          titel: 'Der typische Fehler',
          text: '*Er sprecht Deutsch.* ✗ → __Er **spricht** Deutsch.__ ✓ · *Sie fahrt nach Berlin.* ✗ → __Sie **fährt** nach Berlin.__ ✓',
        },
      ],
    },

    { type: 'rule' },

    // ── Beispiele ─────────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele',
      items: [
        { text: 'Ich **spreche** Spanisch.', gl: '— Hablo español.' },
        { text: '**Sprichst** du Deutsch?', gl: '— ¿Hablas alemán?' },
        { text: 'Er **isst** eine Pizza.', gl: '— Él come una pizza.' },
        { text: 'Sie **liest** ein Buch.', gl: '— Ella lee un libro.' },
        { text: 'Er **fährt** nach Berlin.', gl: '— Él va a Berlín.' },
        { text: 'Das Kind **schläft**.', gl: '— El niño duerme.' },
        { text: 'Sie **nimmt** den Bus.', gl: '— Ella toma el bus.' },
      ],
    },

    { type: 'rule' },

    // ── Übungen ───────────────────────────────────────────────────
    {
      type: 'uebung',
      eyebrow: 'Anwendung — Übung 1 · Richtig oder falsch?',
      frage: 'Wähle die richtige Form.',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Er (sprecht / spricht) Englisch.',
        'Du (fahrst / fährst) nach Wien.',
        'Sie (lest / liest) gern.',
        'Ich (spreche / sprich) Spanisch.',
      ],
      loesungen: [
        'Er **spricht** Englisch.',
        'Du **fährst** nach Wien.',
        'Sie **liest** gern.',
        'Ich **spreche** Spanisch. ~~(„ich“ nunca cambia la vocal)~~',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 2 · Verben ergänzen',
      frage: 'Ergänze das Verb in der richtigen Form.',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Du ___ Pizza. (essen)',
        'Er ___ den Zug. (nehmen)',
        'Das Baby ___ . (schlafen)',
        '___ du den Film? (sehen)',
      ],
      loesungen: [
        'Du **isst** Pizza.',
        'Er **nimmt** den Zug.',
        'Das Baby **schläft**.',
        '**Siehst** du den Film?',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 3 · Über eine Person',
      frage: 'Schreibe 3 Sätze über einen Freund / eine Freundin (er/sie): sprechen, essen, fahren.',
      loesungLabel: 'Muster',
      loesung: '*Meine Freundin spricht Englisch. Sie isst gern Pizza. Sie fährt mit dem Bus.*',
    },

    { type: 'rule' },

    // ── Prüfungsbezug ─────────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Sprechen · Teil 1',
      titel: 'Sprachen',
      anweisung: 'Im Sprechen Teil 1 sagst du, welche Sprachen du sprichst. Ergänze sprechen:',
      absaetze: [
        '„Ich {1} Spanisch und Englisch. — Welche Sprachen {2} du? — Meine Frau {3} auch Spanisch.“',
      ],
      loesungLabel: 'Lösung',
      loesungen: [
        '{1} Ich **spreche** Spanisch und Englisch.',
        '{2} Welche Sprachen **sprichst** du?',
        '{3} Meine Frau **spricht** auch Spanisch.',
      ],
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: '„Welche Sprachen sprechen Sie?“ kommt fast immer. Antworte im ganzen Satz: **Ich spreche Spanisch und ein bisschen Deutsch.** ~~(«un poco de alemán» — frase comodín que siempre queda bien)~~',
    },

    { type: 'rule' },

    // ── Abschluss ─────────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Wechsel', 'Verben'],
      zeilen: [
        ['e → i', 'sprechen (spricht) · essen (isst) · nehmen (nimmt)'],
        ['e → ie', 'lesen (liest) · sehen (sieht)'],
        ['a → ä', 'fahren (fährt) · schlafen (schläft)'],
        ['kein Wechsel', 'ich · wir · ihr · sie/Sie ~~(solo cambian „du“ y „er/sie/es“)~~'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich kenne die 7 Verben mit Vokalwechsel.',
        'Ich weiß: Nur „du“ und „er/sie/es“ ändern den Vokal.',
        'Ich sage richtig: er spricht, sie fährt, es schläft.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Du kannst jetzt Sätze bilden — Zeit für **Fragen**! In der nächsten Lektion lernst du die W-Fragen (*Wo? Woher? Wie?*) und die Ja/Nein-Fragen: *Kommst du aus Spanien?*',
    },
  ],
}
