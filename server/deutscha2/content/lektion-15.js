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
        'den typischen Fehler vermeiden: *weil ich bin müde* ❌',
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
      eyebrow: 'Erklärung — die Star-Regel',
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
          text: '__wenn__ = ~~si / cuando.~~ Steht der *wenn*-Satz vorne, beginnt der Hauptsatz mit dem **Verb**:\n__**Wenn** es **regnet**, **bleibe** ich zu Hause.__ ~~(verbo, coma, verbo — chocan en el medio)~~',
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

    // ── Übungen ───────────────────────────────────────────────────
    {
      type: 'uebung',
      eyebrow: 'Anwendung — Übung 1 · Richtig oder falsch?',
      frage: 'Wo steht das Verb richtig? Korrigiere die falschen Sätze.',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Ich bleibe zu Hause, weil ich bin müde.',
        'Ich glaube, dass das Hotel teuer ist.',
        'Er lernt Deutsch, weil er wohnt in Berlin.',
      ],
      loesungen: [
        '❌ → Ich bleibe zu Hause, weil ich müde **bin**. ~~(el error típico del hispanohablante)~~',
        '✓ Richtig — das Verb *ist* steht am Ende.',
        '❌ → Er lernt Deutsch, weil er in Berlin **wohnt**.',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 2 · Sätze verbinden',
      frage: 'Verbinde mit weil oder dass. ~~No olvides la coma.~~',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Ich fahre mit dem Bus. + Mein Auto ist kaputt. (weil)',
        'Ich finde: Der Film ist langweilig. (dass)',
        'Sie ist glücklich. + Sie hat Urlaub. (weil)',
      ],
      loesungen: [
        'Ich fahre mit dem Bus, **weil** mein Auto kaputt **ist**.',
        'Ich finde, **dass** der Film langweilig **ist**.',
        'Sie ist glücklich, **weil** sie Urlaub **hat**.',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 3 · Wenn-Sätze produzieren',
      frage: 'Ergänze die Sätze frei.',
      loesungLabel: 'Mögliche Lösung',
      aufgaben: [
        'Wenn das Wetter schön ist, …',
        'Ich bin glücklich, wenn …',
      ],
      loesungen: [
        'Wenn das Wetter schön ist, **gehe ich** in den Park. ~~(el principal empieza con verbo)~~',
        'Ich bin glücklich, wenn meine Familie zu Besuch **kommt**. ~~(vale todo lo que tenga el verbo al final)~~',
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
      text: 'Ein **weil-Satz** in der E-Mail und ein **Ich glaube, dass …** beim Sprechen — mehr brauchst du nicht, um im A2 zu glänzen. ~~Repite en voz alta diez frases con «weil … bin/habe» hasta que el verbo al final te salga solo.~~',
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
      text: 'Du kannst jetzt erklären, begründen und Bedingungen nennen. In der nächsten Lektion lernst du, wie man auf Deutsch **Anweisungen und Bitten** gibt: **Komm! Iss! Kommen Sie bitte!** — der Imperativ.',
    },
  ],
}
