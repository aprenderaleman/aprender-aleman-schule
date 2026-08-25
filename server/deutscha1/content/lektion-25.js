// Lektion 25 · Schreiben Teil 2 — Kurzer persönlicher Text
//
// Bloque 2 (Prüfungstraining) · Der ~30-Wörter-Text: 3 Punkte der Aufgabe,
// Anrede/Gruß, wiederverwendbare Sätze, Modelltext + neue Aufgabe.
// Schließt den Schreiben-Block mit der Synthese beider Teile.

export default {
  spec: ['Bloque 2', 'Prüfungsstrategie', 'Niveau A1', 'Prüfungsrelevanz: Schreiben · Teil 2'],
  h1: 'Schreiben Teil 2 — Kurzer persönlicher Text',
  lead: '~~Tu primer texto propio en alemán: un e-mail o postal de~~ **ca. 30 Wörter** ~~— disculparte, preguntar o informar. Con 3 puntos, saludo y despedida está hecho.~~',

  content: [
    // ── Lernziele ─────────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'alle ==3 Punkte der Aufgabe== im Text haben — jeder Punkt ein Satz',
        'Anrede und Gruß richtig schreiben: *Liebe/r …,* und *Viele Grüße*',
        'einen Text von ca. 30 Wörtern mit festen Bausteinen schreiben',
      ],
    },

    { type: 'rule' },

    // ── Kernwortschatz ────────────────────────────────────────────
    {
      type: 'wortschatz',
      eyebrow: 'Kernwortschatz — E-Mail & Karte',
      items: [
        { wort: 'die E-Mail', kollokation: 'eine E-Mail schreiben', es: 'el correo, el e-mail' },
        { wort: 'die Karte', kollokation: 'eine Karte aus Berlin', es: 'la postal' },
        { wort: 'die Anrede', kollokation: 'die Anrede: Liebe Anna,', es: 'el saludo inicial' },
        { wort: 'der Gruß', kollokation: 'Viele Grüße + Name', es: 'la despedida' },
        { wort: 'leider', kollokation: 'ich kann leider nicht kommen', es: 'por desgracia' },
        { wort: 'krank', kollokation: 'ich bin krank', es: 'enfermo/a' },
        { wort: 'die Hausaufgaben', kollokation: 'Was sind die Hausaufgaben?', es: 'los deberes' },
        { wort: 'einladen', kollokation: 'Ich lade dich ein!', es: 'invitar' },
        { wort: 'besuchen', kollokation: 'Besuchst du mich?', es: 'visitar' },
      ],
    },

    { type: 'rule' },

    // ── Erklärung ─────────────────────────────────────────────────
    {
      type: 'steps',
      eyebrow: 'Erklärung — Der Bauplan',
      steps: [
        {
          titel: 'Lies die 3 Punkte der Aufgabe',
          text: 'Die Aufgabe gibt dir 3 Punkte. __Jeder Punkt = ein kurzer Satz.__ Fehlt einer, fehlen Punkte — ~~aunque tu alemán sea perfecto~~.',
        },
        {
          titel: 'Anrede mit Komma',
          text: '__Liebe Anna,__ ~~(a una mujer)~~ · __Lieber Tom,__ ~~(a un hombre)~~. Nach der Anrede: **Komma** — und die nächste Zeile beginnt **klein**: *Liebe Anna, ich …* ~~En español: «Querida Ana:» con dos puntos; en alemán, coma y minúscula. Error clásico del primer día.~~',
        },
        {
          titel: 'Drei kurze Sätze im Präsens',
          text: 'Subjekt + Verb auf __Position 2__ + Rest. ~~Recuerda: los sustantivos (Kurs, Stadt, Grüße) van con mayúscula.~~',
        },
        {
          titel: 'Gruß + Name',
          text: '__Viele Grüße__ (oder *Liebe Grüße*) und dein Name — ohne Punkt, ohne Komma.',
        },
      ],
    },

    { type: 'rule' },

    // ── Beispiele: Redemittel + Modelltext ────────────────────────
    {
      type: 'redemittel',
      eyebrow: 'Beispiele — Deine Bausteine',
      gruppen: [
        {
          fn: 'Anrede & Gruß',
          saetze: [
            { satz: 'Liebe Frau Weber, … / Lieber Tom, …', gloss: 'saludo — coma, nunca dos puntos' },
            { satz: 'Viele Grüße / Liebe Grüße + Name', gloss: 'despedida fija — apréndela tal cual' },
          ],
        },
        {
          fn: 'sich entschuldigen ~~(disculparse)~~',
          saetze: [
            { satz: 'Ich kann leider nicht kommen.', gloss: 'por desgracia no puedo ir' },
            { satz: 'Ich bin krank.', gloss: 'estoy enfermo/a' },
          ],
        },
        {
          fn: 'fragen ~~(preguntar)~~',
          saetze: [
            { satz: 'Was sind die Hausaufgaben?', gloss: '¿cuáles son los deberes?' },
            { satz: 'Können Sie mir bitte schreiben?', gloss: '¿puede escribirme, por favor?' },
          ],
        },
        {
          fn: 'informieren & einladen ~~(informar e invitar)~~',
          saetze: [
            { satz: 'Ich mache einen Deutschkurs in Berlin.', gloss: 'hago un curso de alemán en Berlín' },
            { satz: 'Möchtest du mich besuchen?', gloss: '¿quieres visitarme?' },
          ],
        },
      ],
    },
    {
      type: 'modell',
      eyebrow: 'Beispiele — Modelltext',
      thema: 'E-Mail an die Kursleiterin: Sie können am Montag nicht zum Deutschkurs kommen. Schreiben Sie: 1. Sie kommen nicht. 2. Warum? 3. Fragen Sie nach den Hausaufgaben.',
      woerter: 'genau 30 Wörter',
      absaetze: [
        'Liebe Frau Weber,',
        'ich kann am Montag leider nicht zum Deutschkurs kommen. Ich bin krank. Was sind die Hausaufgaben? Können Sie mir bitte eine E-Mail schreiben?',
        'Viele Grüße\nAna López',
      ],
      annotationen: [
        { tag: 'Anrede', text: '„Liebe Frau Weber,“ — Komma, kein Doppelpunkt. Danach klein weiter: „ich kann …“' },
        { tag: 'Punkt 1 + 2', text: 'Sie kommt nicht (Satz 1) und warum: „Ich bin krank.“ (Satz 2)' },
        { tag: 'Punkt 3', text: 'Die Frage nach den Hausaufgaben — mit „Sie“ (formell).' },
        { tag: 'Gruß', text: '„Viele Grüße“ + Name — immer gleich.' },
      ],
    },

    { type: 'rule' },

    // ── Übungen ───────────────────────────────────────────────────
    {
      type: 'uebung',
      eyebrow: 'Anwendung — Übung 1 · Die richtige Reihenfolge',
      frage: 'Ordne die E-Mail. ~~(Ordena las partes.)~~ a) Viele Grüße – Paco — b) Liebe Anna, — c) ich komme am Samstag nach Madrid. Hast du Zeit?',
      loesungLabel: 'Lösung',
      loesung: '**b → c → a** — erst die Anrede, dann der Text, dann der Gruß.',
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 2 · Korrigiere',
      frage: 'Jeder Satz hat einen Fehler vom ersten Tag. ~~(Cada línea tiene un error típico.)~~',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Liebe Anna: Ich komme am Samstag.',
        'ich habe eine frage.',
        'Viele grüße\nMarta',
      ],
      loesungen: [
        'Liebe Anna**,** **i**ch komme am Samstag. ~~(coma tras el saludo y minúscula después)~~',
        '**I**ch habe eine **F**rage. ~~(inicio de frase y sustantivo con mayúscula)~~',
        'Viele **G**rüße\nMarta ~~(«Grüße» es sustantivo → mayúscula; y sin coma antes del nombre)~~',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 3 · Anrede und Gruß',
      frage: 'Ergänze Anrede und Gruß.',
      loesungLabel: 'Lösung',
      aufgaben: [
        'E-Mail an deine Freundin Carla: ___ Carla, … ',
        'E-Mail an deinen Freund Tom: ___ Tom, …',
        'Am Ende: ___ ___ + dein Name',
      ],
      loesungen: [
        '**Liebe** Carla, ~~(a una mujer: Liebe)~~',
        '**Lieber** Tom, ~~(a un hombre: Lieber)~~',
        '**Viele Grüße** + dein Name',
      ],
    },

    { type: 'rule' },

    // ── Prüfungsbezug ─────────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Schreiben · Teil 2',
      titel: 'Karte aus Berlin',
      anweisung: 'Schreiben Sie eine Karte an Ihre Freundin Maria (ca. 30 Wörter). Schreiben Sie zu allen 3 Punkten:',
      absaetze: [
        '1. Was machen Sie in Berlin?\n2. Wie sind der Kurs und die Stadt?\n3. Laden Sie Maria ein.',
      ],
      loesungLabel: 'Mögliche Lösung',
      loesungen: [
        'Liebe Maria,\nich mache einen Deutschkurs in Berlin. Der Kurs ist super und die Stadt ist sehr schön. Möchtest du mich am Wochenende besuchen?\nViele Grüße\nCarlos *(27 Wörter)*',
      ],
      kommentar: 'Alle 3 Punkte sind da, Anrede und Gruß auch — 27 Wörter reichen für „ca. 30“. Gültige Varianten: *Komm mich doch besuchen!* / *Liebe Grüße*. Wichtig ist nur: ==3 Punkte + verständlich==.',
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Zähl die **Punkte**, nicht die Wörter — 27 oder 33 Wörter sind kein Problem. Lerne Anrede und Gruß **auswendig**: schon 5 Wörter geschenkt.',
    },

    { type: 'rule' },

    // ── Abschluss ─────────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung — Das ganze Modul Schreiben',
      kopf: ['Teil', 'Aufgabe', 'Strategie'],
      zeilen: [
        ['Teil 1', 'Formular ausfüllen', 'Daten stehen im Text — nichts erfinden, kein Feld leer'],
        ['Teil 2', 'Text mit ca. 30 Wörtern', '3 Punkte + Anrede (Komma!) + „Viele Grüße“'],
        ['Zeit', 'ca. 20 Minuten', 'erst Teil 1, dann Teil 2'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich schreibe zu allen 3 Punkten der Aufgabe je einen Satz.',
        'Ich schreibe die Anrede mit Komma und den Gruß richtig.',
        'Ich kann einen Text von ca. 30 Wörtern schreiben (E-Mail oder Karte).',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Das Schreiben ist komplett! Jetzt kommt das **Modul Sprechen** — die einzige Prüfung **in der Gruppe**: du stellst dich vor, stellst Fragen und formulierst Bitten. Die gute Nachricht: deine Vorstellung aus Lektion 4 ist schon die halbe erste Aufgabe.',
    },
  ],
}
