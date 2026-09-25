// Lektion 15 · Nebensätze — weil, dass, wenn
//
// Bloque 1 · Grammatik & Struktur — LA regla estrella del A2:
// el verbo al final. weil (causa), dass (opinión), wenn (condición/tiempo).

export default {
  spec: ['Bloque 1', 'Grammatik & Struktur', 'Niveau A2', 'Prüfungsrelevanz: alle Module'],
  h1: 'Nebensätze: weil, dass, wenn',
  lead: '~~La regla estrella del A2:~~ nach **weil, dass, wenn** steht das Verb **am Ende**. ~~Quien domina esto, ya suena a alemán de verdad.~~',

  content: [
    // ── Lernziele ─────────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'Nebensätze ~~(oraciones subordinadas)~~ mit *weil*, *dass* und *wenn* bilden',
        'die Regel anwenden: **Verb am Ende** + Komma',
        'den typischen Fehler vermeiden ~~(evitar)~~: *weil ich bin müde* ❌',
      ],
    },

    { type: 'rule' },

    // ── Kernwortschatz ────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Kernwortschatz — Wörter für Nebensätze',
      kopf: ['Wort', 'Beispiel', 'Bedeutung'],
      zeilen: [
        ['weil', '…, weil ich müde bin.', 'porque'],
        ['dass', 'Ich glaube, dass …', 'que'],
        ['wenn', 'Wenn es regnet, …', 'si / cuando'],
        ['glauben', 'Ich glaube, dass …', 'creer'],
        ['finden', 'Ich finde, dass …', 'opinar / parecer'],
        ['hoffen', 'Ich hoffe, dass …', 'esperar'],
        ['müde', 'Ich bin müde.', 'cansado'],
        ['das Komma', 'vor weil, dass, wenn', 'la coma'],
      ],
    },

    { type: 'rule' },

    // ── Erklärung ─────────────────────────────────────────────────
    {
      type: 'steps',
      eyebrow: 'Erklärung — die wichtigste Regel',
      steps: [
        {
          badge: 'Regel',
          titel: 'Verb am Ende + Komma',
          text: 'Im __Nebensatz__ ~~(oración subordinada)~~ steht das konjugierte Verb __ganz am Ende__. Vor *weil, dass, wenn* steht **immer ein Komma**.\n__Ich bleibe zu Hause, weil ich müde **bin**.__',
        },
        {
          badge: 'weil',
          titel: 'Der Grund',
          text: '__weil__ = ~~porque.~~ **Der Klassiker-Fehler:** ~~en español el orden no cambia («porque estoy cansado») — en alemán sí:~~\n❌ *weil ich **bin** müde* → ✓ __weil ich müde **bin**__',
        },
        {
          badge: 'dass',
          titel: 'Nach Meinungen',
          text: '__dass__ = ~~que.~~ Nach *ich glaube / ich finde / ich hoffe*:\n__Ich finde, dass Berlin schön **ist**.__',
        },
        {
          badge: 'wenn',
          titel: 'Bedingung & Zeit',
          text: '__wenn__ = ~~si / cuando.~~ Der *wenn*-Satz steht vorne? Dann beginnt der Hauptsatz mit dem **Verb**:\n__**Wenn** es **regnet**, **bleibe** ich zu Hause.__ ~~(verbo, coma, verbo — chocan en el medio)~~',
        },
      ],
    },
    {
      type: 'vergleich',
      eyebrow: 'Erklärung — denn vs. weil',
      titel: 'Zwei Wörter für „porque“',
      zeilen: [
        { satz: 'Ich bleibe zu Hause, **denn** ich **bin** krank.', label: 'denn (Lektion 14) — Wortstellung normal' },
        { satz: 'Ich bleibe zu Hause, **weil** ich krank **bin**.', label: 'weil — Verb am Ende' },
      ],
    },

    { type: 'rule' },

    // ── Beispiele ─────────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele',
      items: [
        { text: 'Ich lerne Deutsch, **weil** ich in Wien **arbeite**.', gl: '— porque' },
        { text: 'Er kommt nicht, **weil** er keine Zeit **hat**.', gl: '— verbo al final' },
        { text: 'Ich glaube, **dass** der Kurs gut **ist**.', gl: '— creo que' },
        { text: 'Ich hoffe, **dass** du kommen **kannst**.', gl: '— modal también al final' },
        { text: '**Wenn** ich Zeit **habe**, **koche** ich gern.', gl: '— si tengo tiempo' },
        { text: 'Ich rufe an, **wenn** der Zug **ankommt**.', gl: '— cuando llegue el tren' },
      ],
    },

    { type: 'rule' },

    // ── Mehr Beispiele ────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Mehr Beispiele',
      titel: 'weil & dass',
      items: [
        { text: 'Tomás trinkt einen Kaffee, **weil** er sehr müde **ist**.', gl: '— weil: verbo al final' },
        { text: 'Wir bleiben heute zu Hause, **weil** es stark **regnet**.', gl: '— porque llueve mucho' },
        { text: 'Ich finde, **dass** das Buch sehr spannend **ist**.', gl: '— opino que' },
        { text: 'Meine Mutter glaubt, **dass** ich zu viel **arbeite**.', gl: '— cree que' },
        { text: 'Wir hoffen, **dass** ihr am Sonntag **kommt**.', gl: '— esperamos que' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'wenn',
      titel: 'Der wenn-Satz vorne oder hinten',
      items: [
        { text: '**Wenn** ich müde **bin**, **gehe** ich früh ins Bett.', gl: '— verbo, coma, verbo' },
        { text: '**Wenn** das Wetter schön **ist**, **fahren** wir an den See.', gl: '— si hace buen tiempo' },
        { text: '**Wenn** Lea Zeit **hat**, **kocht** sie für ihre Familie.', gl: '— la principal empieza con el verbo' },
        { text: 'Ich lese gern, **wenn** die Kinder **schlafen**.', gl: '— wenn detrás: la principal no cambia' },
        { text: 'Ich bin glücklich, **wenn** meine Freunde zu Besuch **kommen**.', gl: '— cuando vienen de visita' },
      ],
    },

    { type: 'rule' },

    // ── Prüfungsbezug ─────────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Schreiben · E-Mail',
      titel: 'Absagen mit weil',
      anweisung: 'In der Prüfung musst du oft absagen und einen Grund nennen. Ergänze:',
      absaetze: [
        '„Lieber Tom, ich kann am Samstag leider nicht kommen, {1} (ich / arbeiten / müssen). Ich hoffe, {2} (wir / uns bald / sehen). Viele Grüße!“',
      ],
      optionen: ['(1) weil-Satz', '(2) dass-Satz'],
      loesungLabel: 'Lösung',
      loesungen: [
        '{1} …, **weil** ich arbeiten **muss**. ~~(los dos verbos al final, el conjugado el último)~~',
        '{2} Ich hoffe, **dass** wir uns bald **sehen**.',
      ],
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Ein **weil-Satz** in der E-Mail und ein **Ich glaube, dass …** beim Sprechen — das zeigt dem Prüfer sofort A2-Niveau. ~~Repite en voz alta diez frases con «weil … bin/habe» hasta que el verbo al final te salga solo.~~',
    },

    { type: 'rule' },

    // ── Abschluss ─────────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Wort', 'Funktion', 'Beispiel'],
      zeilen: [
        ['weil', 'Grund (porque)', '…, weil ich müde bin.'],
        ['dass', 'nach glauben/finden/hoffen (que)', 'Ich glaube, dass es regnet.'],
        ['wenn', 'Bedingung / Zeit (si, cuando)', 'Wenn es regnet, bleibe ich hier.'],
        ['Regel', 'Verb am Ende + Komma', 'immer im Nebensatz'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich stelle das Verb im Nebensatz ans Ende.',
        'Ich benutze weil, dass und wenn mit Komma.',
        'Ich sage nie mehr *weil ich bin müde*.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Du kannst jetzt erklären, begründen und Bedingungen ~~(condiciones)~~ nennen. In der nächsten Lektion lernst du **Anweisungen und Bitten** auf Deutsch: **Komm! Iss! Kommen Sie bitte!** — der Imperativ.',
    },
  ],
}
