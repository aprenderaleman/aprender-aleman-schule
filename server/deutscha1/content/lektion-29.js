// Lektion 29 · Sprechen Teil 3 — Bitten formulieren
//
// Bloque 2 (Prüfungstraining — Sprechen). Con una tarjeta de imagen, pedir
// algo y reaccionar: möchten / Können Sie … / Gib mir bitte … (enlaza con las
// lecciones 12 y 14). Cierre del bloque 2: tabla-síntesis de las 4 partes.

export default {
  spec: ['Bloque 2', 'Prüfungsstrategie', 'Niveau A1', 'Prüfungsrelevanz: Sprechen'],
  h1: 'Sprechen Teil 3 — Bitten formulieren',
  lead: '~~La última parte del examen: tarjetas con imágenes. Pides algo — y reaccionas a la petición de otro.~~',

  content: [
    // ── Lernziele ─────────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'mit einer Bildkarte eine **Bitte** formulieren',
        'höflich bitten: *Ich möchte …* — *Können Sie …?* — *Gib mir bitte …*',
        'auf Bitten reagieren: *Ja, gern.* — *Hier bitte.* — *Tut mir leid.*',
      ],
    },

    { type: 'rule' },

    // ── Kernwortschatz ────────────────────────────────────────────
    {
      type: 'wortschatz',
      eyebrow: 'Kernwortschatz — Bitten & Reaktionen',
      items: [
        { wort: 'die Bitte, -n', kollokation: 'eine Bitte formulieren', es: 'la petición' },
        { wort: 'geben', kollokation: 'Gib mir bitte den Stift.', es: 'dar' },
        { wort: 'können', kollokation: 'Können Sie mir helfen?', es: 'poder' },
        { wort: 'möchten', kollokation: 'Ich möchte ein Wasser.', es: 'querer (cortés)' },
        { wort: 'öffnen', kollokation: 'Öffnen Sie bitte das Fenster.', es: 'abrir' },
        { wort: 'helfen', kollokation: 'Hilf mir bitte!', es: 'ayudar' },
        { wort: 'gern', kollokation: 'Ja, gern!', es: 'con mucho gusto' },
        { wort: 'Tut mir leid.', kollokation: 'Tut mir leid, ich habe keinen Stift.', es: 'lo siento' },
      ],
    },

    { type: 'rule' },

    // ── Erklärung ─────────────────────────────────────────────────
    {
      type: 'steps',
      eyebrow: 'Erklärung — In 3 Schritten',
      steps: [
        {
          badge: 'Bild',
          titel: 'Das Bild verstehen',
          text: 'Auf der Karte ist **ein Bild**, zum Beispiel ein Stift. Deine Aufgabe: eine **Bitte** mit diesem Ding. ~~¿Qué pedirías con ese objeto? Eso es todo.~~',
        },
        {
          badge: '3 Wege',
          titel: 'Drei Wege zur Bitte',
          text: '1) __Ich **möchte** bitte einen Stift.__ ~~(möchten, lección 12)~~ · 2) __**Können** Sie mir bitte einen Stift geben?__ · 3) __**Gib** mir bitte einen Stift.__ ~~(imperativo, lección 14)~~ — Immer mit **bitte**!',
        },
        {
          badge: 'Reaktion',
          titel: 'Auf Bitten reagieren',
          text: 'Positiv: __Ja, gern.__ · __Hier bitte.__ ~~(aquí tienes)~~ · __Kein Problem.__ — Negativ: __Tut mir leid, ich habe keinen Stift.__',
        },
      ],
    },
    {
      type: 'redemittel',
      eyebrow: 'Erklärung — Redemittel',
      gruppen: [
        {
          fn: 'Bitten',
          saetze: [
            { satz: 'Ich möchte bitte …', gloss: 'Quisiera…, por favor.' },
            { satz: 'Können Sie mir bitte … geben?', gloss: '¿Puede darme…? (formal: Sie)' },
            { satz: 'Gib mir bitte … / Hilf mir bitte!', gloss: 'Dame… / ¡Ayúdame! (a un candidato: du)' },
          ],
        },
        {
          fn: 'Reagieren',
          saetze: [
            { satz: 'Ja, gern. / Kein Problem.', gloss: 'Sí, claro. / Sin problema.' },
            { satz: 'Hier bitte.', gloss: 'Aquí tienes. / Tenga.' },
            { satz: 'Tut mir leid, ich habe kein/keinen …', gloss: 'Lo siento, no tengo…' },
          ],
        },
      ],
    },

    { type: 'rule' },

    // ── Beispiele ─────────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele — Mini-Dialoge',
      kicker: 'Typische Bildkarten',
      titel: 'Bitte und Reaktion',
      items: [
        { text: 'Bild „Stift“ — Gib mir bitte deinen Stift. — Hier bitte.', gl: '— Dame tu boli, por favor. — Aquí tienes.' },
        { text: 'Bild „Fenster“ — Können Sie bitte das Fenster öffnen? — Ja, gern.', gl: '— ¿Puede abrir la ventana? — Sí, claro.' },
        { text: 'Bild „Wasser“ — Ich möchte bitte ein Glas Wasser. — Hier bitte.', gl: '— Quisiera un vaso de agua. — Aquí tiene.' },
        { text: 'Bild „Handy“ — Kannst du mir bitte dein Handy geben? — Tut mir leid, mein Handy ist zu Hause.', gl: '— ¿Me dejas tu móvil? — Lo siento, está en casa.' },
      ],
    },

    { type: 'rule' },

    // ── Übungen ───────────────────────────────────────────────────
    {
      type: 'uebung',
      eyebrow: 'Anwendung — Übung 1 · Reaktion zuordnen',
      frage: 'Welche Reaktion passt? ~~Empareja: a) Hier bitte. b) Ja, gern. c) Tut mir leid, ich habe keinen Kuli.~~',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Gib mir bitte das Buch.',
        'Können Sie bitte das Fenster öffnen?',
        'Hast du einen Kuli für mich?',
      ],
      loesungen: [
        'Gib mir bitte das Buch. — **a) Hier bitte.**',
        'Können Sie bitte das Fenster öffnen? — **b) Ja, gern.**',
        'Hast du einen Kuli für mich? — **c) Tut mir leid, ich habe keinen Kuli.**',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 2 · Bitten bilden',
      frage: 'Formuliere eine Bitte zum Bild. ~~Usa el patrón indicado.~~',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Bild „Buch“ — mit *Können Sie …*',
        'Bild „Kaffee“ — mit *Ich möchte …*',
        'Bild „Tür“ — mit Imperativ (du)',
      ],
      loesungen: [
        '**Können Sie** mir bitte das Buch **geben**?',
        '**Ich möchte** bitte einen Kaffee.',
        '**Öffne** bitte die Tür! ~~(o: Schließ bitte die Tür — según la situación)~~',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 3 · Produzieren — Mini-Dialog',
      frage: 'Bild „Wasser“. Schreibe die Bitte **und** die Reaktion. ~~Las dos líneas del diálogo.~~',
      loesungLabel: 'Mögliche Lösung',
      loesung: '*— Ich möchte bitte ein Glas Wasser. — Hier bitte!* ~~También valen: „Können Sie mir bitte ein Wasser geben?“ o „Gib mir bitte das Wasser.“ — cualquier petición correcta con „bitte“.~~',
    },

    { type: 'rule' },

    // ── Prüfungsbezug ─────────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Sprechen · Teil 3',
      titel: 'Bitte und Reaktion in der Gruppe',
      anweisung: 'So läuft Teil 3: Du zeigst deine Bildkarte und bittest einen Kandidaten — er reagiert. Ergänze.',
      absaetze: [
        'Deine Karte: Bild „Stift“. Du sagst: „{1}“',
        'Ein Kandidat zeigt dir ein Bild „Fenster“ und sagt: „Öffne bitte das Fenster.“ Du reagierst: „{2}“',
      ],
      loesungLabel: 'Mögliche Lösung',
      loesungen: [
        '{1} **Gib mir bitte deinen Stift.** ~~(o „Können Sie mir bitte einen Stift geben?“)~~',
        '{2} **Ja, gern.** ~~(o „Kein Problem.“)~~',
      ],
      kommentar: 'Wie viele Bildkarten genau? Das steht im **offiziellen Modellsatz** vom Prüfungsanbieter.',
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Eine **einfache Bitte mit „bitte“** ist immer richtig: *Gib mir bitte …* funktioniert mit fast jedem Bild. ~~Y a la petición del otro reacciona SIEMPRE — «Ja, gern» ya puntúa.~~',
    },

    { type: 'rule' },

    // ── Abschluss — cierre del Bloque 2 ───────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung — Die ganze Prüfung',
      kopf: ['Teil', 'Zeit', 'Was machst du?'],
      zeilen: [
        ['Hören', 'ca. 20 Min.', 'Gespräche & Ansagen · Durchsagen'],
        ['Lesen', 'ca. 25 Min.', 'Notizen & Anzeigen · Schilder & Aushänge'],
        ['Schreiben', 'ca. 20 Min.', 'Formular ausfüllen · kurzer Text (~30 Wörter)'],
        ['Sprechen', 'ca. 15 Min.', 'in der Gruppe: Vorstellung · Fragen · Bitten'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich kann mit einer Bildkarte eine Bitte formulieren — immer mit „bitte“.',
        'Ich kenne die drei Wege: möchten, Können Sie …?, Imperativ.',
        'Ich kann auf Bitten reagieren: Ja, gern. / Hier bitte. / Tut mir leid.',
        'Ich kenne alle 4 Teile der Prüfung.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Damit ist das **Prüfungstraining komplett**. Ab der nächsten Lektion kommen die Themen — zuerst **„Persönliche Angaben & Familie“**: Vater, Mutter, Kinder … ~~el vocabulario para hablar de tu vida.~~',
    },
  ],
}
