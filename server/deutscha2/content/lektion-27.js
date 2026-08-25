// Lektion 27 · Modul Sprechen — Überblick & Bewertung
//
// Bloque 2 (examen) — abre la miniserie de Sprechen (27-30):
// formato de la prueba oral, qué se evalúa, pronunciación básica
// para hispanohablantes y frases de emergencia.

export default {
  spec: ['Bloque 2', 'Modul Sprechen', 'Niveau A2', 'Prüfungsrelevanz: Sprechen'],
  h1: 'Sprechen — Überblick & Bewertung',
  lead: '~~La prueba oral dura unos 15 minutos y se hace en pareja.~~ Drei Teile, einfache Sätze — **man muss dich verstehen**, mehr nicht.',

  content: [
    // ── Lernziele ─────────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'die drei Teile der mündlichen Prüfung kennen',
        'wissen, was die Prüfer bewerten ~~(qué puntúan)~~',
        'drei Aussprache-Regeln für Spanischsprecher anwenden',
        'Notfall-Sätze benutzen: *Wie bitte? Noch einmal, bitte.*',
      ],
    },

    { type: 'rule' },

    // ── Kernwortschatz ────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Kernwortschatz — die mündliche Prüfung',
      kopf: ['Deutsch', 'Beispiel', 'Bedeutung'],
      zeilen: [
        ['die Prüfung', 'Die Prüfung dauert 15 Minuten.', 'el examen'],
        ['der Partner / die Partnerin', 'Ich spreche mit meiner Partnerin.', 'el/la compañero/a'],
        ['die Frage', 'Ich stelle eine Frage.', 'la pregunta'],
        ['die Antwort', 'Ich gebe eine Antwort.', 'la respuesta'],
        ['erzählen', 'Ich erzähle von meiner Familie.', 'contar, hablar de'],
        ['planen', 'Wir planen etwas zusammen.', 'planear'],
        ['wiederholen', 'Können Sie das wiederholen?', 'repetir'],
        ['die Aussprache', 'Meine Aussprache ist okay.', 'la pronunciación'],
      ],
    },

    { type: 'rule' },

    // ── Erklärung 1: die drei Teile ───────────────────────────────
    {
      type: 'steps',
      eyebrow: 'Erklärung — die drei Teile',
      steps: [
        {
          badge: 'Teil 1',
          titel: 'Fragen stellen & beantworten',
          text: 'Du stellst deinem Partner Fragen zu Alltagsthemen und antwortest. ~~(preguntas cotidianas: comida, casa, trabajo…)~~ → Lektion 28.',
        },
        {
          badge: 'Teil 2',
          titel: 'Von sich erzählen',
          text: 'Du erzählst von dir: Familie, Beruf, Hobbys, Tagesablauf. ~~(un mini-monólogo sobre ti)~~ → Lektion 29.',
        },
        {
          badge: 'Teil 3',
          titel: 'Gemeinsam etwas planen',
          text: 'Du planst mit deinem Partner etwas Einfaches, z. B. einen Kinobesuch. ~~(hay que llegar a un plan juntos)~~ → Lektion 30.',
        },
      ],
    },

    // ── Erklärung 2: Bewertung ────────────────────────────────────
    {
      type: 'prose',
      eyebrow: 'Erklärung — was bewerten die Prüfer?',
      card: true,
      titel: 'Verstehen ist wichtiger als perfekt sein',
      absaetze: [
        'Die zentrale Frage der Prüfer: **Versteht man dich?** Ein kleiner Fehler ist kein Problem. ~~Un error de artículo no suspende a nadie.~~',
        'Auf A2 sind **einfache, kurze Sätze** richtig und gut: Subjekt, __Verb auf Position 2__, fertig. ~~No intentes frases largas «como en español» — frase corta y clara gana puntos.~~',
        'Wichtig sind auch: du **reagierst** auf deinen Partner und deine **Aussprache** ist klar.',
      ],
    },

    // ── Erklärung 3: Aussprache ───────────────────────────────────
    {
      type: 'steps',
      eyebrow: 'Erklärung — Aussprache: 3 Punkte für Spanischsprecher',
      steps: [
        {
          badge: 'a / aa',
          titel: 'Lange und kurze Vokale',
          text: 'Deutsch unterscheidet lange und kurze Vokale: __Stadt__ (kurz) ↔ __Staat__ (lang). ~~En español no existe esta diferencia — escucha y copia.~~',
        },
        {
          badge: 'h',
          titel: 'Das h spricht man!',
          text: 'Am Wortanfang hört man das __h__: __Haus, haben, heute__. ~~No es muda como en español: sopla un poco de aire.~~',
        },
        {
          badge: 'Akzent',
          titel: 'Der Wortakzent',
          text: 'Der Akzent liegt meist auf der **ersten Silbe**: __AR-beit, WO-che__. ~~En español solemos acentuar más tarde: di ÁR-beit, no ar-BÉIT.~~',
        },
      ],
    },

    { type: 'rule' },

    // ── Beispiele + Redemittel ────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele — Aussprache üben',
      items: [
        { text: '**Stadt** ↔ **Staat**', gl: '— a corta / a larga' },
        { text: '**bitten** ↔ **bieten**', gl: '— i corta / i larga' },
        { text: '**H**aus, **h**eute, **h**aben', gl: '— la h se pronuncia' },
        { text: '**ZIM**-mer, **AR**-beit, **HO**-bby', gl: '— acento en la primera sílaba' },
      ],
    },
    {
      type: 'redemittel',
      eyebrow: 'Redemittel — Notfall-Sätze',
      gruppen: [
        {
          fn: 'Wenn du etwas nicht verstehst ~~(frases de emergencia — apréndelas de memoria)~~',
          saetze: [
            { satz: 'Wie bitte?', gloss: '¿cómo dice?' },
            { satz: 'Noch einmal, bitte.', gloss: 'otra vez, por favor' },
            { satz: 'Können Sie das bitte wiederholen?', gloss: '¿puede repetirlo?' },
            { satz: 'Können Sie bitte langsamer sprechen?', gloss: '¿más despacio?' },
          ],
        },
      ],
    },

    { type: 'rule' },

    // ── Übungen ───────────────────────────────────────────────────
    {
      type: 'uebung',
      eyebrow: 'Anwendung — Übung 1 · Welcher Teil?',
      frage: 'Teil 1, 2 oder 3?',
      loesungLabel: 'Lösung',
      aufgaben: [
        '„Ich habe zwei Schwestern und wohne in Madrid.“',
        '„Wollen wir am Samstag kochen?“ — „Gute Idee!“',
        '„Was isst du zum Frühstück?“ — „Brot mit Käse.“',
      ],
      loesungen: [
        '**Teil 2** — von sich erzählen',
        '**Teil 3** — gemeinsam etwas planen',
        '**Teil 1** — Fragen stellen & beantworten',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 2 · Lang oder kurz?',
      frage: 'Ist der Vokal lang oder kurz? Sprich laut!',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Staat',
        'kommen',
        'Name',
        'bitte',
      ],
      loesungen: [
        'Staat → **lang** (aa)',
        'kommen → **kurz** ~~(doble consonante detrás = vocal corta)~~',
        'Name → **lang**',
        'bitte → **kurz**',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 3 · Produzieren — reagieren',
      frage: 'Dein Partner spricht zu schnell. Was sagst du? Schreib zwei Sätze.',
      loesungLabel: 'Mögliche Lösung',
      loesung: '„**Wie bitte?** Können Sie bitte **langsamer sprechen**?“ ~~También vale:~~ „Noch einmal, bitte.“ / „Können Sie das bitte wiederholen?“',
    },

    { type: 'rule' },

    // ── Prüfungsbezug ─────────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Sprechen · alle Teile',
      titel: 'Nicht verstanden — was nun?',
      anweisung: 'In der Prüfung verstehst du eine Frage nicht. Ergänze den Notfall-Satz:',
      absaetze: [
        'Prüfer: „Was machen Sie in Ihrer Freizeit?“\nDu: „{1}“\nPrüfer: „Was machen Sie in Ihrer Frei-zeit?“\nDu: „Ah! Ich spiele Fußball.“',
      ],
      loesungLabel: 'Lösung',
      loesungen: [
        '{1} **Wie bitte? Können Sie das bitte wiederholen?** ~~Preguntar no resta puntos — quedarse callado, sí.~~',
      ],
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Im Modellsatz auf der Goethe-Website siehst du die Prüfung **mit Video**. Schau ihn dir einmal ganz an — dann weißt du genau, was dich erwartet.',
    },

    { type: 'rule' },

    // ── Abschluss ─────────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Punkt', 'Das Wichtigste'],
      zeilen: [
        ['Format', 'ca. 15 Minuten, in der Regel zu zweit, 3 Teile'],
        ['Bewertung', 'Versteht man dich? Einfach + klar = gut'],
        ['Aussprache', 'lange/kurze Vokale · h sprechen · Akzent vorne'],
        ['Notfall', '„Wie bitte?“ · „Noch einmal, bitte.“'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich kenne die drei Teile der mündlichen Prüfung.',
        'Ich weiß: einfache, klare Sätze sind auf A2 genug.',
        'Ich kenne drei Aussprache-Regeln für Spanischsprecher.',
        'Ich kann sagen: „Wie bitte? Noch einmal, bitte.“',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Jetzt kennst du das Format. In der nächsten Lektion trainieren wir **Teil 1**: Fragen stellen und beantworten — mit den wichtigsten **W-Fragen**.',
    },
  ],
}
