// Lektion 06 · Modalverben — können, müssen, wollen …
//
// Bloque 1 «Grammatik & Struktur». Sigue el estándar de lektion-04.js:
// 8 secciones (FORMAT.md), nivel A2, máximo apoyo en español.

export default {
  spec: ['Bloque 1', 'Grammatik & Struktur', 'Niveau A2', 'Prüfungsrelevanz: alle Module'],
  h1: 'Die Modalverben',
  lead: '**können, müssen, wollen, dürfen, sollen, möchten** — ~~seis verbos pequeños que cambian el sentido de la frase:~~ poder, tener que, querer …',

  content: [
    // ── Lernziele ─────────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'die sechs Modalverben im Präsens konjugieren',
        'das zweite Verb ans Satzende stellen (Satzklammer)',
        'höflich sagen, was du willst: *ich möchte …*',
      ],
    },

    { type: 'rule' },

    // ── Kernwortschatz ────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Kernwortschatz — die sechs Modalverben',
      kopf: ['Modalverb', 'Beispiel', 'Bedeutung'],
      zeilen: [
        ['können', 'Ich kann schwimmen.', 'poder / saber hacer algo'],
        ['müssen', 'Ich muss arbeiten.', 'tener que'],
        ['wollen', 'Ich will schlafen.', 'querer'],
        ['dürfen', 'Ich darf hier parken.', 'poder (tener permiso)'],
        ['sollen', 'Ich soll mehr Sport machen.', 'deber (consejo, encargo)'],
        ['möchten', 'Ich möchte einen Kaffee.', 'quisiera / me gustaría'],
      ],
    },

    { type: 'rule' },

    // ── Erklärung ─────────────────────────────────────────────────
    {
      type: 'steps',
      eyebrow: 'Erklärung — so funktionieren Modalverben',
      steps: [
        {
          badge: 'Form',
          titel: 'ich und er/sie/es ohne Endung',
          text: 'Modalverben sind besonders: __ich kann — du kannst — er kann__. **ich** und **er/sie/es** sind **gleich**, ohne *-t*. ~~(no digas *er kannt* ni *er könnt*)~~ Im Plural kommt der Vokal vom Infinitiv zurück: __ich kann → wir können__, __ich muss → wir müssen__.',
        },
        {
          badge: 'Klammer',
          titel: 'Das zweite Verb ans Ende',
          text: 'Das Modalverb steht auf __Position 2__, das zweite Verb im __Infinitiv am Satzende__ — das ist die **Satzklammer**. ~~(en español van juntos: «quiero comer»; en alemán, separados)~~\n__Ich **will** heute Abend Pizza **essen**.__',
        },
        {
          badge: 'möchten',
          titel: 'Die höfliche Form',
          text: '__möchten__ ist die höfliche Form von *wollen*. ~~«Ich will einen Kaffee» suena brusco; en la cafetería di:~~ __Ich **möchte** einen Kaffee, bitte.__',
        },
        {
          badge: 'Achtung',
          titel: '«puedo» = können oder dürfen?',
          text: '~~El español «puedo» son DOS verbos alemanes:~~ __können__ = Fähigkeit ~~(sé / soy capaz)~~, __dürfen__ = Erlaubnis ~~(tengo permiso)~~.\n__Ich **kann** schwimmen.__ vs. __**Darf** ich hier schwimmen?__',
        },
      ],
    },
    {
      type: 'tabelle',
      eyebrow: 'Erklärung — Konjugation im Präsens',
      kopf: ['Person', 'können', 'müssen', 'wollen', 'dürfen', 'sollen', 'möchten'],
      zeilen: [
        ['ich / er, sie, es', 'kann', 'muss', 'will', 'darf', 'soll', 'möchte'],
        ['du', 'kannst', 'musst', 'willst', 'darfst', 'sollst', 'möchtest'],
        ['wir / sie, Sie', 'können', 'müssen', 'wollen', 'dürfen', 'sollen', 'möchten'],
        ['ihr', 'könnt', 'müsst', 'wollt', 'dürft', 'sollt', 'möchtet'],
      ],
    },

    { type: 'rule' },

    // ── Beispiele ─────────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele',
      items: [
        { text: 'Er **kann** sehr gut **kochen**.', gl: '— habilidad: sabe cocinar' },
        { text: 'Ich **muss** morgen früh **aufstehen**.', gl: '— obligación' },
        { text: '**Darf** man hier **rauchen**?', gl: '— permiso, no habilidad' },
        { text: 'Wir **möchten** einen Tisch **reservieren**.', gl: '— forma cortés' },
        { text: 'Du **sollst** deine Oma **anrufen**.', gl: '— encargo: alguien lo pide' },
        { text: 'Hier **darf** man nicht **parken**.', gl: '— prohibición: nicht dürfen' },
        { text: '**Kannst** du mir bitte **helfen**?', gl: '— pregunta: modal en posición 1' },
      ],
    },

    { type: 'rule' },

    // ── Mehr Beispiele ────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Mehr Beispiele',
      titel: 'Modalverben im Alltag',
      items: [
        { text: 'Ich **muss** heute noch Hausaufgaben machen.', gl: '— obligación: müssen' },
        { text: 'Meine Tochter **kann** schon Rad fahren.', gl: '— habilidad: ya sabe montar en bici' },
        { text: '**Möchten** Sie einen Tee oder einen Kaffee?', gl: '— oferta cortés con möchten' },
        { text: 'Man **darf** im Kurs Wasser trinken, aber nicht essen.', gl: '— permiso y prohibición' },
        { text: 'Der Arzt sagt: Ich **soll** mehr schlafen.', gl: '— consejo del médico → sollen' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'Satzklammer',
      titel: 'Das zweite Verb wartet am Ende',
      items: [
        { text: 'Wir **wollen** am Sonntag einen Kuchen **backen**.', gl: '— el infinitivo cierra la frase' },
        { text: '**Kannst** du morgen früher **kommen**?', gl: '— pregunta: modal en posición 1' },
        { text: 'Ihr **müsst** die Wörter jeden Tag **lernen**.', gl: '— ihr müsst, con Umlaut' },
        { text: 'Ich **möchte** im August nach Kolumbien **fliegen**.', gl: '— deseo + infinitivo al final' },
        { text: 'Hier **darf** man nur langsam **fahren**.', gl: '— norma de tráfico con dürfen' },
      ],
    },

    { type: 'rule' },

    // ── Prüfungsbezug ─────────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Sprechen · Etwas planen',
      titel: 'Zusammen ins Kino',
      anweisung: 'Im Sprechen (Teil 3) planst du etwas mit deinem Partner. Modalverben sind hier sehr wichtig. Ergänze: ~~(Completa:)~~',
      absaetze: [
        '„{1} wir am Freitag ins Kino gehen? — Freitag {2} ich leider arbeiten. {3} du am Samstag Zeit?“',
      ],
      optionen: ['(1) wollen', '(2) müssen', '(3) haben'],
      loesungLabel: 'Lösung',
      loesungen: [
        '{1} **Wollen** wir am Freitag ins Kino gehen? ~~(«Wollen wir …?» = ¿qué tal si …?)~~',
        '{2} Freitag **muss** ich leider arbeiten.',
        '{3} **Hast** du am Samstag Zeit?',
      ],
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Lerne drei Sätze auswendig: „**Wollen wir** …?“ ~~(proponer)~~, „Ich **kann** leider nicht.“ ~~(rechazar)~~, „Ich **möchte** lieber …“ ~~(preferir)~~. Damit löst du fast jede Planungsaufgabe im **Sprechen**.',
    },

    { type: 'rule' },

    // ── Abschluss ─────────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Modalverb', 'Funktion', 'Beispiel'],
      zeilen: [
        ['können', 'Fähigkeit', 'Ich kann schwimmen.'],
        ['dürfen', 'Erlaubnis', 'Darf ich fragen?'],
        ['müssen', 'Pflicht', 'Ich muss arbeiten.'],
        ['wollen / möchten', 'Wunsch (direkt / höflich)', 'Ich möchte einen Tee.'],
        ['sollen', 'Rat, Auftrag', 'Du sollst Oma anrufen.'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich konjugiere die Modalverben im Präsens (ich kann, er kann).',
        'Ich stelle den Infinitiv ans Satzende.',
        'Ich unterscheide können (habilidad) und dürfen (permiso) — und benutze möchten für Wünsche.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Die Satzklammer kennst du jetzt: __Ich muss früh **aufstehen**.__ Aber *aufstehen* ist ein besonderes Verb — ohne Modalverb trennt es sich: __Ich **stehe** früh **auf**.__ Diese **trennbaren Verben** sind das Thema der nächsten Lektion.',
    },
  ],
}
