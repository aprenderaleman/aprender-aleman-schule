// Lektion 16 · Imperativ
//
// Bloque 1 · Grammatik & Struktur — órdenes y peticiones:
// du (Komm!), ihr (Kommt!), Sie (Kommen Sie!) + bitte para suavizar.

export default {
  spec: ['Bloque 1', 'Grammatik & Struktur', 'Niveau A2', 'Prüfungsrelevanz: Hören & Schreiben'],
  h1: 'Der Imperativ',
  lead: '~~Pedir, aconsejar, dar indicaciones:~~ **Komm! Kommt! Kommen Sie!** ~~Tres formas — y con~~ **bitte** ~~suena siempre amable.~~',

  content: [
    // ── Lernziele ─────────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'den Imperativ für *du*, *ihr* und *Sie* bilden',
        'Anweisungen im Alltag verstehen: Wegbeschreibung, Rezept, Ratschlag',
        'Bitten mit **bitte** freundlich machen',
      ],
    },

    { type: 'rule' },

    // ── Kernwortschatz ────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Kernwortschatz — Imperativformen',
      kopf: ['Infinitiv', 'du', 'ihr', 'Sie', 'Bedeutung'],
      zeilen: [
        ['kommen', 'Komm!', 'Kommt!', 'Kommen Sie!', 'venir'],
        ['gehen', 'Geh!', 'Geht!', 'Gehen Sie!', 'ir'],
        ['machen', 'Mach!', 'Macht!', 'Machen Sie!', 'hacer'],
        ['warten', 'Warte!', 'Wartet!', 'Warten Sie!', 'esperar'],
        ['nehmen', 'Nimm!', 'Nehmt!', 'Nehmen Sie!', 'tomar / coger'],
        ['essen', 'Iss!', 'Esst!', 'Essen Sie!', 'comer'],
        ['lesen', 'Lies!', 'Lest!', 'Lesen Sie!', 'leer'],
        ['sprechen', 'Sprich!', 'Sprecht!', 'Sprechen Sie!', 'hablar'],
      ],
    },

    { type: 'rule' },

    // ── Erklärung ─────────────────────────────────────────────────
    {
      type: 'steps',
      eyebrow: 'Erklärung — drei Formen',
      steps: [
        {
          badge: 'du',
          titel: 'Ohne Pronomen, ohne -st',
          text: 'Nimm die __du-Form__ und streiche __-st__ und das Pronomen: *du kommst* → **Komm!** ~~(NO: *Kommst!*)~~\nVerben mit **e → i** behalten den Wechsel: *du isst* → **Iss!**, *du nimmst* → **Nimm!**',
        },
        {
          badge: 'ihr',
          titel: 'Wie die ihr-Form',
          text: 'Die __ihr-Form__ ohne Pronomen: *ihr kommt* → **Kommt!**, *ihr esst* → **Esst!** ~~(la más fácil: no cambia nada)~~',
        },
        {
          badge: 'Sie',
          titel: 'Verb + Sie',
          text: 'Infinitiv + __Sie__ — wie eine Frage, aber mit Ausrufezeichen: **Kommen Sie!**, **Warten Sie!** ~~(la forma de cortesía, siempre con Sie detrás)~~',
        },
        {
          badge: 'bitte',
          titel: 'Freundlich bleiben',
          text: 'Mit __bitte__ klingt jeder Imperativ höflich: **Warte bitte!** · **Kommen Sie bitte herein!** ~~Sin bitte, una orden puede sonar brusca.~~',
        },
      ],
    },

    { type: 'rule' },

    // ── Beispiele ─────────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele — Imperativ im Alltag',
      items: [
        { text: '**Gehen Sie** geradeaus und **nehmen Sie** die zweite Straße links!', gl: '— Wegbeschreibung (indicaciones)' },
        { text: '**Schneide** die Tomaten und **koch** die Nudeln!', gl: '— Rezept (receta, forma du)' },
        { text: '**Trink** viel Wasser und **schlaf** früh!', gl: '— Ratschlag (consejo)' },
        { text: '**Macht** bitte die Bücher auf!', gl: '— im Kurs (forma ihr)' },
        { text: '**Warten Sie** bitte einen Moment!', gl: '— höflich (cortesía)' },
        { text: '**Steigen Sie** am Hauptbahnhof **aus**!', gl: '— Durchsage (el prefijo separable va al final)' },
      ],
    },

    { type: 'rule' },

    // ── Übungen ───────────────────────────────────────────────────
    {
      type: 'uebung',
      eyebrow: 'Anwendung — Übung 1 · Welche Form ist das?',
      frage: 'du, ihr oder Sie?',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Kommen Sie bitte um 9 Uhr!',
        'Iss dein Brot!',
        'Wartet hier!',
        'Sprich bitte lauter!',
      ],
      loesungen: [
        '**Sie** — Verb + Sie ~~(cortesía)~~',
        '**du** — ohne Pronomen, e → i',
        '**ihr** — wie die ihr-Form ohne Pronomen',
        '**du** — e → i: *du sprichst* → Sprich!',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 2 · Imperativ bilden',
      frage: 'Bilde den Imperativ.',
      loesungLabel: 'Lösung',
      aufgaben: [
        '(du / nehmen) ___ den Bus!',
        '(ihr / machen) ___ die Tür zu!',
        '(Sie / sprechen) ___ bitte langsam!',
        '(du / lesen) ___ den Text!',
      ],
      loesungen: [
        '**Nimm** den Bus! ~~(e → i, sin -st)~~',
        '**Macht** die Tür zu!',
        '**Sprechen Sie** bitte langsam!',
        '**Lies** den Text!',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 3 · Ratschläge geben',
      frage: 'Dein Freund ist immer müde. Gib zwei Ratschläge mit dem du-Imperativ.',
      loesungLabel: 'Mögliche Lösung',
      aufgaben: [
        'Ratschlag 1: …',
        'Ratschlag 2: …',
      ],
      loesungen: [
        '**Geh** früh ins Bett! ~~(u otro consejo con forma du)~~',
        '**Trink** weniger Kaffee am Abend!',
      ],
    },

    { type: 'rule' },

    // ── Prüfungsbezug ─────────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Schreiben · Kurze Mitteilung',
      titel: 'SMS mit Bitte',
      anweisung: 'In Teil 1 (SMS/Notiz, ~20-30 Wörter) bittest du oft um etwas. Ergänze den Imperativ:',
      absaetze: [
        '„Hallo Tim, ich komme heute später. {1} (kaufen, du) bitte Milch und Brot! Und {2} (warten, du) nicht mit dem Essen! Bis später!“',
      ],
      loesungLabel: 'Lösung',
      loesungen: [
        '{1} **Kauf** bitte Milch und Brot!',
        '{2} **warte** nicht mit dem Essen! ~~(con bitte o nicht, la forma no cambia)~~',
      ],
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Im **Hören** kommen Durchsagen mit Sie-Imperativ: „**Steigen Sie** bitte aus!“, „**Gehen Sie** zu Gleis 5!“. Hör auf das **Verb am Anfang** — dann weißt du sofort: das ist eine Anweisung. ~~En las notas del Schreiben, un «Kauf bitte…» te ahorra palabras y suena natural.~~',
    },

    { type: 'rule' },

    // ── Abschluss ─────────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Form', 'Regel', 'Beispiel'],
      zeilen: [
        ['du', 'du-Form ohne -st, ohne Pronomen', 'Komm! · Iss!'],
        ['ihr', 'ihr-Form ohne Pronomen', 'Kommt! · Esst!'],
        ['Sie', 'Infinitiv + Sie', 'Kommen Sie!'],
        ['höflich', '+ bitte', 'Warte bitte!'],
        ['Alltag', 'Wegbeschreibung · Rezept · Ratschlag', 'Geh! · Schneide! · Trink!'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich bilde den Imperativ für du, ihr und Sie.',
        'Ich erkenne Anweisungen in Durchsagen und Wegbeschreibungen.',
        'Ich mache Bitten mit bitte freundlich.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: '„**Dusch dich!**“ — Moment: Was macht das *dich* da? Manche Verben brauchen ein extra Pronomen: *sich duschen, sich freuen, sich treffen*. Die **reflexiven Verben** sind das letzte Grammatik-Thema dieses Blocks.',
    },
  ],
}
