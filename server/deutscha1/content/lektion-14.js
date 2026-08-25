// Lektion 14 · Imperativ
//
// Bloque 1 · Grammatik & Struktur — las formas du y Sie del imperativo;
// entender el imperativo ES entender las consignas del examen.

export default {
  spec: ['Bloque 1', 'Grammatik & Struktur', 'Niveau A1', 'Prüfungsrelevanz: alle Prüfungsteile'],
  h1: 'Imperativ',
  lead: '~~Pedir y mandar:~~ **Komm! Warten Sie bitte!** ~~Y la clave del examen: todas las consignas~~ (*Kreuzen Sie an!*) ~~son imperativos.~~',

  content: [
    // ── Lernziele ─────────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'den Imperativ mit *du* bilden: *Komm! Warte!*',
        'den Imperativ mit *Sie* bilden: *Kommen Sie! Entschuldigen Sie!*',
        'die Anweisungen in der Prüfung verstehen: *Kreuzen Sie an! Schreiben Sie!*',
      ],
    },

    { type: 'rule' },

    // ── Kernwortschatz ────────────────────────────────────────────
    {
      type: 'wortschatz',
      eyebrow: 'Kernwortschatz — Imperativ im Alltag und in der Prüfung',
      items: [
        { wort: 'kommen', kollokation: 'Komm! / Kommen Sie!', es: 'venir' },
        { wort: 'warten', kollokation: 'Warte! / Warten Sie bitte!', es: 'esperar' },
        { wort: 'entschuldigen', kollokation: 'Entschuldigen Sie!', es: 'disculpar' },
        { wort: 'helfen', kollokation: 'Helfen Sie mir bitte!', es: 'ayudar' },
        { wort: 'ankreuzen', kollokation: 'Kreuzen Sie an!', es: 'marcar con una cruz' },
        { wort: 'schreiben', kollokation: 'Schreiben Sie!', es: 'escribir' },
        { wort: 'lesen', kollokation: 'Lesen Sie den Text!', es: 'leer' },
        { wort: 'hören', kollokation: 'Hören Sie!', es: 'escuchar' },
        { wort: 'ergänzen', kollokation: 'Ergänzen Sie!', es: 'completar' },
      ],
      hinweis: '~~Las cinco últimas son consignas reales del examen — apréndelas tal cual.~~',
    },

    { type: 'rule' },

    // ── Erklärung ─────────────────────────────────────────────────
    {
      type: 'steps',
      eyebrow: 'Erklärung',
      steps: [
        {
          badge: 'du-Form',
          titel: 'Imperativ mit du: ohne du, ohne -st',
          text: '*du kommst* → __Komm!__ · *du wartest* → __Warte!__ ~~(quita el pronombre „du“ y la terminación -st; el verbo va primero)~~',
        },
        {
          badge: 'Sie-Form',
          titel: 'Imperativ mit Sie: Verb + Sie',
          text: '__Kommen Sie!__ · __Warten Sie!__ · __Entschuldigen Sie!__ ~~(forma de usted: infinitivo + Sie — es la forma de las consignas del examen)~~',
        },
        {
          badge: 'bitte',
          titel: 'Mit bitte ist es höflich',
          text: '__Bitte__ macht den Imperativ freundlich: *Warten Sie **bitte**!* · *Bitte komm!* ~~(sin „bitte“ suena a orden seca — úsalo casi siempre)~~',
        },
        {
          badge: 'trennbar',
          titel: 'Trennbare Verben: Präfix am Ende',
          text: 'Auch im Imperativ geht das Präfix ans Ende: *Kreuzen Sie **an**!* · *Steh **auf**!* ~~(como en la Lektion 13)~~',
        },
      ],
    },

    { type: 'rule' },

    // ── Beispiele ─────────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele',
      kicker: 'Alltag',
      titel: 'Mit du und mit Sie',
      items: [
        { text: '**Komm** bitte!', gl: '— ¡Ven, por favor! (informal)' },
        { text: '**Warte** einen Moment!', gl: '— ¡Espera un momento!' },
        { text: '**Kommen Sie** bitte!', gl: '— ¡Venga, por favor! (formal)' },
        { text: '**Entschuldigen Sie**, wo ist der Bahnhof?', gl: '— Disculpe, ¿dónde está la estación?' },
        { text: '**Helfen Sie** mir bitte!', gl: '— ¡Ayúdeme, por favor!' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'Prüfung',
      titel: 'Die Anweisungen im Examen',
      items: [
        { text: '**Kreuzen Sie an**: richtig oder falsch.', gl: '— Marque con una cruz: correcto o falso.' },
        { text: '**Schreiben Sie** einen Text (ca. 30 Wörter).', gl: '— Escriba un texto (unas 30 palabras).' },
        { text: '**Lesen Sie** die Texte und die Aufgaben.', gl: '— Lea los textos y las tareas.' },
        { text: '**Hören Sie** und **ergänzen Sie**.', gl: '— Escuche y complete.' },
      ],
    },

    { type: 'rule' },

    // ── Übungen ───────────────────────────────────────────────────
    {
      type: 'uebung',
      eyebrow: 'Anwendung — Übung 1 · du-Form',
      frage: 'Bilde den Imperativ mit du. ~~(Forma el imperativo informal.)~~',
      loesungLabel: 'Lösung',
      aufgaben: [
        'du kommst → ___ !',
        'du wartest → ___ !',
        'du schreibst → ___ !',
        'du stehst auf → ___ !',
      ],
      loesungen: [
        '**Komm!**',
        '**Warte!**',
        '**Schreib!**',
        '**Steh auf!** ~~(prefijo al final)~~',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 2 · Sie-Form',
      frage: 'Bilde den Imperativ mit Sie und bitte. ~~(Forma el imperativo formal con „bitte“.)~~',
      loesungLabel: 'Lösung',
      aufgaben: [
        'kommen → ___ !',
        'warten → ___ !',
        'helfen (mir) → ___ !',
      ],
      loesungen: [
        '**Kommen Sie bitte!**',
        '**Warten Sie bitte!**',
        '**Helfen Sie mir bitte!**',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 3 · Höfliche Bitten',
      frage: 'Situation: Du bist neu in der Stadt. Schreibe 2 höfliche Bitten mit Sie. ~~(Escribe 2 peticiones corteses.)~~',
      loesungLabel: 'Muster',
      loesung: '*Entschuldigen Sie, helfen Sie mir bitte! · Warten Sie bitte einen Moment!* ~~Cualquier petición con „Verb + Sie + bitte“ es correcta.~~',
    },

    { type: 'rule' },

    // ── Prüfungsbezug ─────────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Alle Prüfungsteile · Anweisungen',
      titel: 'Anweisungen verstehen',
      anweisung: 'Alle Aufgaben in der Prüfung beginnen mit einem Imperativ. Was bedeuten die Anweisungen? Ordne zu:',
      absaetze: [
        '{1} „Kreuzen Sie an.“ · {2} „Ergänzen Sie das Formular.“ · {3} „Lesen Sie zuerst die Aufgaben.“',
      ],
      optionen: [
        'a) Complete el formulario.',
        'b) Lea primero las tareas.',
        'c) Marque con una cruz.',
      ],
      loesungLabel: 'Lösung',
      loesungen: [
        '{1} → c) Marque con una cruz.',
        '{2} → a) Complete el formulario.',
        '{3} → b) Lea primero las tareas.',
      ],
      kommentar: '~~Quien entiende las consignas no pierde puntos por hacer la tarea equivocada.~~',
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Lerne die Anweisungen **auswendig**: *Kreuzen Sie an! Schreiben Sie! Lesen Sie! Hören Sie! Ergänzen Sie!* ~~En el examen no hay tiempo para descifrar la consigna — tienes que reconocerla de un vistazo. Los detalles exactos, en el Modellsatz oficial.~~',
    },

    { type: 'rule' },

    // ── Abschluss ─────────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Form', 'Muster'],
      zeilen: [
        ['du', '**Komm!** · **Warte!** · **Steh auf!**'],
        ['Sie', '**Kommen Sie!** · **Entschuldigen Sie!**'],
        ['höflich', 'Warten Sie **bitte**!'],
        ['Prüfung', '**Kreuzen Sie an!** · **Schreiben Sie!**'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich bilde den Imperativ mit du: „Komm! Warte!“',
        'Ich bilde den Imperativ mit Sie: „Kommen Sie bitte!“',
        'Ich verstehe die Anweisungen der Prüfung: „Kreuzen Sie an! Schreiben Sie!“',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Du kannst jetzt Bitten formulieren — genau das brauchst du später im Sprechen. Vorher fehlt noch ein Baustein: **der Plural**. *Ein Buch, zwei Bücher?* In der nächsten Lektion lernst du die Muster — und warum man den Plural am besten **mit dem Wort zusammen** lernt.',
    },
  ],
}
