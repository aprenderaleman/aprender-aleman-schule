// Lektion 16 · Zahlen, Uhrzeit & Datum
//
// Bloque 1 · Grammatik & Struktur — números 0-100 (decenas invertidas),
// la hora informal y oficial, días/meses, am/im/um. Cierre del bloque
// con mini-texto modelo anotado. Vital para Hören.

export default {
  spec: ['Bloque 1', 'Grammatik & Struktur', 'Niveau A1', 'Prüfungsrelevanz: Hören · Sprechen'],
  h1: 'Zahlen, Uhrzeit & Datum',
  lead: '~~Números, hora y fecha — lo que más se oye en el Hören. Y la trampa estrella:~~ **halb zehn** ~~son las~~ **9:30**, ~~no las 10:30.~~',

  content: [
    // ── Lernziele ─────────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'die Zahlen von 0 bis 100 (*einundzwanzig!*)',
        'die Uhrzeit sagen und verstehen: *halb zehn = 9:30*',
        'Tage, Monate und Termine: *am Montag, im Mai, um 8 Uhr*',
      ],
    },

    { type: 'rule' },

    // ── Kernwortschatz ────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Kernwortschatz — Zahlen 0–100',
      kopf: ['Zahlen', 'Deutsch', 'Achtung'],
      zeilen: [
        ['0–12', 'null, eins, zwei, drei, vier, fünf, sechs, sieben, acht, neun, zehn, elf, zwölf', '~~irregulares: apréndelos de memoria~~'],
        ['13–19', 'dreizehn, vierzehn, fünfzehn, sechzehn, siebzehn, achtzehn, neunzehn', 'Zahl + **zehn** ~~(ojo: **sech**zehn, **sieb**zehn — no „sechszehn/siebenzehn“)~~'],
        ['20, 30 … 90', 'zwanzig, dreißig, vierzig, fünfzig, sechzig, siebzig, achtzig, neunzig', 'Endung **-zig** ~~(dreißig con ß; y cortos: **sech**zig, **sieb**zig)~~'],
        ['21, 32 …', '**einundzwanzig** (21), **zweiunddreißig** (32)', '~~¡invertido! uno-y-veinte = 21~~'],
        ['100', 'hundert', ''],
      ],
    },

    { type: 'rule' },

    // ── Erklärung ─────────────────────────────────────────────────
    {
      type: 'steps',
      eyebrow: 'Erklärung',
      steps: [
        {
          badge: 'invertiert',
          titel: 'Die Zehner sind invertiert',
          text: '21 = __ein-und-zwanzig__ ~~(literalmente „uno y veinte“)~~. Zuerst die kleine Zahl, dann die große: 45 = __fünfundvierzig__. ~~En el Hören oirás „fünfundvierzig“ y tu cerebro querrá escribir 54 — entrena la inversión.~~',
        },
        {
          badge: 'halb!',
          titel: 'Uhrzeit informell: halb zehn = 9:30',
          text: '__halb zehn = 9:30__ ~~(„media hora HACIA las diez“, no „diez y media“)~~. Auch: *Viertel nach neun* (9:15) · *Viertel vor zehn* (9:45).',
        },
        {
          badge: 'offiziell',
          titel: 'Uhrzeit offiziell: mit 24 Stunden',
          text: 'Im Radio und am Bahnhof: __neun Uhr dreißig__ (9:30), __zwanzig Uhr fünfzehn__ (20:15). ~~(hora + Uhr + minutos, en formato 24 h)~~',
        },
        {
          badge: 'am · im · um',
          titel: 'Termine: am, im, um',
          text: '__am__ + Tag: *am Montag* · __im__ + Monat: *im Mai* · __um__ + Uhrzeit: *um 8 Uhr*. ~~(tres preposiciones, tres usos — memoriza el trío am/im/um)~~',
        },
      ],
    },

    { type: 'rule' },

    // ── Beispiele ─────────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele',
      items: [
        { text: 'Ich bin **einundzwanzig** Jahre alt.', gl: '— Tengo 21 años.' },
        { text: 'Der Kurs beginnt um **halb neun**.', gl: '— El curso empieza a las 8:30. (¡no a las 9:30!)' },
        { text: 'Es ist **Viertel nach sieben**.', gl: '— Son las 7:15.' },
        { text: 'Der Zug fährt um **neun Uhr dreißig**.', gl: '— El tren sale a las 9:30. (hora oficial)' },
        { text: '**Am Montag** habe ich Deutschkurs.', gl: '— El lunes tengo curso de alemán.' },
        { text: '**Im Mai** habe ich Geburtstag.', gl: '— En mayo es mi cumpleaños.' },
        { text: 'Meine Telefonnummer ist **null eins sieben sechs** …', gl: '— Mi número de teléfono es 0176… (cifra por cifra)' },
      ],
    },

    { type: 'rule' },

    // ── Übungen ───────────────────────────────────────────────────
    {
      type: 'uebung',
      eyebrow: 'Anwendung — Übung 1 · Zahlen schreiben',
      frage: 'Schreibe die Zahlen in Worten. ~~(Escribe los números en letras.)~~',
      loesungLabel: 'Lösung',
      aufgaben: [
        '17 = ___',
        '21 = ___',
        '35 = ___',
        '68 = ___',
      ],
      loesungen: [
        '17 = **siebzehn**',
        '21 = **einundzwanzig** ~~(uno-y-veinte)~~',
        '35 = **fünfunddreißig**',
        '68 = **achtundsechzig**',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 2 · Wie spät ist es?',
      frage: 'Schreibe die Uhrzeit informell. ~~(Di la hora en forma informal.)~~',
      loesungLabel: 'Lösung',
      aufgaben: [
        '9:30 = halb ___',
        '7:15 = Viertel ___ sieben',
        '10:45 = Viertel ___ elf',
        '14:30 (informell) = ___',
      ],
      loesungen: [
        '9:30 = **halb zehn** ~~(media hacia las 10)~~',
        '7:15 = Viertel **nach** sieben',
        '10:45 = Viertel **vor** elf',
        '14:30 = **halb drei** ~~(informal se usa el formato de 12 horas)~~',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 3 · Deine Woche',
      frage: 'Schreibe 3 Sätze mit am, im und um. ~~(Escribe 3 frases con am, im, um.)~~',
      loesungLabel: 'Muster',
      loesung: '*Am Dienstag habe ich Deutschkurs. Der Kurs beginnt um halb sieben. Im August mache ich die Prüfung.* ~~Vale cualquier día, hora y mes — revisa el trío am/im/um.~~',
    },

    { type: 'rule' },

    // ── Prüfungsbezug ─────────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Hören · Durchsagen',
      titel: 'Eine Durchsage verstehen',
      anweisung: 'Im Hören gibt es kurze Durchsagen — fast immer mit Zahlen und Uhrzeiten. Lies die Durchsage und ergänze die Notiz:',
      absaetze: [
        '„Der Zug nach Berlin fährt heute um **neun Uhr dreißig** von Gleis **acht**.“',
        'Notiz: Zug nach Berlin — Abfahrt: {1} Uhr · Gleis: {2}',
      ],
      loesungLabel: 'Lösung',
      loesungen: [
        '{1} **9:30** ~~(neun Uhr dreißig — hora oficial)~~',
        '{2} **8** ~~(Gleis acht = vía 8)~~',
      ],
      kommentar: '~~Así son las Durchsagen del examen: número, hora, vía. Practica con el Modellsatz oficial.~~',
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Im Hören sind Zahlen und Uhrzeiten **überall**: Preise, Gleise, Telefonnummern, Termine. Trainiere besonders **halb** (*halb zehn = 9:30*) und die **invertierten Zehner** (*fünfundvierzig = 45, nicht 54*). ~~Son los dos errores que más puntos cuestan en el Hören.~~',
    },

    { type: 'rule' },

    // ── Abschluss: mini-texto modelo + resumen ────────────────────
    {
      type: 'modell',
      eyebrow: 'Zusammenfassung — dein Modelltext',
      thema: 'Sich vorstellen — mit Zahlen, Uhrzeit und Datum',
      woerter: '~25 Wörter',
      absaetze: [
        'Ich heiße Ana und bin **einundzwanzig** Jahre alt. Mein Deutschkurs beginnt **am Montag** **um halb neun**. **Im August** mache ich die Prüfung.',
      ],
      annotationen: [
        { tag: 'Zahl', text: '*einundzwanzig* = 21 — ~~decena invertida: uno-y-veinte~~' },
        { tag: 'Uhrzeit', text: '*um halb neun* = a las 8:30 — ~~halb + la hora siguiente~~' },
        { tag: 'Termine', text: '*am* Montag · *im* August — ~~am + día, im + mes, um + hora~~' },
      ],
    },
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Thema', 'Muster'],
      zeilen: [
        ['Zehner invertiert', '21 = **einundzwanzig**'],
        ['Uhrzeit informell', '9:30 = **halb zehn** · 9:15 = Viertel nach neun'],
        ['Uhrzeit offiziell', '9:30 = **neun Uhr dreißig**'],
        ['Termine', '**am** Montag · **im** Mai · **um** 8 Uhr'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich kenne die Zahlen von 0 bis 100 — auch einundzwanzig (21).',
        'Ich verstehe die Uhrzeit: halb zehn = 9:30, Viertel nach/vor.',
        'Ich benutze am, im und um richtig: am Montag, im Mai, um 8 Uhr.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Der Grammatik-Block ist komplett — du hast jetzt alle Werkzeuge für einfache Sätze. Ab der nächsten Lektion geht es um **Strategie**: das **Modul Hören**. Die Prüfung beginnt genau damit — und du weißt schon, worauf du hören musst: Zahlen, Uhrzeiten, Termine.',
    },
  ],
}
