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

    // ── Mehr Beispiele ────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Mehr Beispiele',
      titel: 'du, ihr, Sie',
      items: [
        { text: '**Nimm** bitte den Schirm mit!', gl: '— du: nehmen → Nimm! (e → i)' },
        { text: '**Lies** den Text und **sprich** dann mit deinem Partner!', gl: '— du: lesen → Lies!, sprechen → Sprich!' },
        { text: 'Kinder, **esst** euer Gemüse!', gl: '— ihr: sin pronombre' },
        { text: '**Wartet** bitte hier! Ich komme gleich.', gl: '— ihr: igual que en presente' },
        { text: '**Sprechen Sie** bitte etwas langsamer!', gl: '— Sie: cortesía' },
        { text: '**Gehen Sie** bis zur Ampel und dann rechts!', gl: '— Wegbeschreibung (indicaciones)' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'bitte',
      titel: 'Bitten & Ratschläge im Alltag',
      items: [
        { text: '**Mach** eine Pause und **trink** einen Tee!', gl: '— consejo (forma du)' },
        { text: '**Kommt** doch am Samstag zu uns!', gl: '— invitación (forma ihr)' },
        { text: '**Essen Sie** weniger Zucker und **gehen Sie** viel spazieren!', gl: '— consejo del médico (Sie)' },
        { text: '**Komm** bitte nicht zu spät!', gl: '— con nicht, la forma no cambia' },
        { text: '**Macht** bitte das Fenster **zu**!', gl: '— el prefijo separable va al final' },
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
      text: '„**Dusch dich!**“ — Moment: Was macht das *dich* da? Manche Verben brauchen noch ein Pronomen: *sich duschen, sich freuen, sich treffen*. Die **reflexiven Verben** sind das letzte Grammatik-Thema in diesem Block.',
    },
  ],
}
