// Lektion 25 · Schreiben Teil 1 — Kurze Mitteilung
//
// Bloque 2 (Prüfungstraining — Schreiben). La nota breve (~20-30 Wörter) a un
// amigo o colega: qué + cuándo + saludo. Modelo comentado de 28 palabras
// (recuento verificado) y tarea nueva con Mögliche Lösung de 25 palabras.

export default {
  spec: ['Bloque 2', 'Prüfungstraining — Schreiben', 'Niveau A2', 'Prüfungsrelevanz: Schreiben Teil 1'],
  h1: 'Schreiben Teil 1 — Kurze Mitteilung',
  lead: 'Eine SMS oder Notiz an einen Freund oder Kollegen, **ca. 20-30 Wörter**: ~~qué pasa, cuándo, y un saludo. Con el plan de esta lección la escribes en 10 minutos.~~',

  content: [
    // ── Lernziele ─────────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'eine kurze Mitteilung mit Anrede und Gruß schreiben',
        'zu jedem Punkt der Aufgabe einen Satz schreiben',
        'absagen, um etwas bitten und einen neuen Termin vorschlagen',
      ],
    },

    { type: 'rule' },

    // ── Kernwortschatz ────────────────────────────────────────────
    {
      type: 'wortschatz',
      eyebrow: 'Kernwortschatz',
      items: [
        { wort: 'absagen', kollokation: 'einen Termin absagen', es: 'cancelar / decir que no' },
        { wort: 'leider', kollokation: 'Ich kann leider nicht.', es: 'por desgracia' },
        { wort: 'der Termin', kollokation: 'einen neuen Termin vorschlagen', es: 'la cita' },
        { wort: 'die Zeit', kollokation: 'Ich habe um 15 Uhr Zeit.', es: 'tiempo (libre)' },
        { wort: 'krank', kollokation: 'Ich bin krank.', es: 'enfermo/a' },
        { wort: 'später', kollokation: 'Ich komme später.', es: 'más tarde' },
        { wort: 'mitbringen', kollokation: 'Kannst du Milch mitbringen?', es: 'traer (consigo)' },
        { wort: 'warten', kollokation: 'Warte bitte nicht auf mich.', es: 'esperar' },
        { wort: 'der Schlüssel', kollokation: 'Der Schlüssel ist beim Nachbarn.', es: 'la llave' },
      ],
    },

    { type: 'rule' },

    // ── Erklärung ─────────────────────────────────────────────────
    {
      type: 'steps',
      eyebrow: 'Erklärung — So baust du die Mitteilung',
      steps: [
        {
          badge: 'Anrede',
          titel: 'Hallo + Name + Komma',
          text: '__Hallo Marco,__ — mit **Komma**, danach schreibst du klein weiter. ~~Nada de «Hola Marco:» — el dos puntos español es un error clásico.~~',
        },
        {
          badge: 'Inhalt',
          titel: 'Ein Satz pro Punkt',
          text: 'Die Aufgabe hat Punkte ~~(p. ej.: cancela — di por qué — propón otra fecha)~~. Schreib zu jedem Punkt **einen kurzen Satz**: __was__ passiert und __wann__.',
        },
        {
          badge: 'Gruß',
          titel: 'Gruß + Name',
          text: 'Am Ende: __Viele Grüße__ und dein Name. Fertig — mehr braucht eine SMS nicht.',
        },
      ],
    },

    { type: 'rule' },

    // ── Beispiele: Redemittel ─────────────────────────────────────
    {
      type: 'redemittel',
      eyebrow: 'Beispiele — Redemittel',
      gruppen: [
        {
          fn: 'absagen + Grund ~~(cancelar y dar el motivo)~~',
          saetze: [
            { satz: 'Ich kann leider nicht kommen.' },
            { satz: 'Ich bin krank. / Ich muss arbeiten.' },
          ],
        },
        {
          fn: 'einen neuen Termin vorschlagen',
          saetze: [
            { satz: 'Können wir am Samstag …?' },
            { satz: 'Hast du am Freitag Zeit?' },
          ],
        },
        {
          fn: 'um etwas bitten',
          saetze: [
            { satz: 'Kannst du bitte … mitbringen?' },
            { satz: 'Warte bitte nicht auf mich.' },
          ],
        },
        {
          fn: 'informieren',
          saetze: [
            { satz: 'Ich komme heute später.' },
            { satz: 'Der Schlüssel ist beim Nachbarn.' },
          ],
        },
      ],
    },

    // ── Beispiele: Modelltext ─────────────────────────────────────
    {
      type: 'prose',
      card: true,
      titel: 'Die Aufgabe',
      absaetze: [
        'Du kannst heute nicht zum Fußball kommen. Schreib deinem Freund Marco eine SMS: **Sag ab** — sag, **warum** — schlag einen **neuen Termin** vor.',
      ],
    },
    {
      type: 'modell',
      eyebrow: 'Beispiele — Modelltext',
      thema: 'SMS an einen Freund: Fußball absagen',
      woerter: '28 Wörter',
      absaetze: [
        '==Hallo Marco,== ich kann heute leider ==nicht zum Fußball kommen==, denn ==ich muss arbeiten==. ==Können wir am Samstag spielen?== Ich habe um 15 Uhr Zeit.\n==Viele Grüße==\nAna',
      ],
      annotationen: [
        { tag: 'Anrede', text: '„Hallo Marco,“ — Komma, danach klein weiter ~~(no «Hola Marco:»)~~' },
        { tag: 'Punkt 1', text: 'absagen: „ich kann … nicht zum Fußball kommen“' },
        { tag: 'Punkt 2', text: 'warum: „ich muss arbeiten“' },
        { tag: 'Punkt 3', text: 'neuer Termin als Frage: „Können wir am Samstag spielen?“' },
        { tag: 'Gruß', text: '„Viele Grüße“ + Name — fertig' },
      ],
    },

    { type: 'rule' },

    // ── Übungen ───────────────────────────────────────────────────
    {
      type: 'uebung',
      eyebrow: 'Anwendung — Übung 1 · Welcher Punkt?',
      frage: 'Absagen, Grund oder neuer Termin — was macht der Satz?',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Ich kann leider nicht kommen.',
        'Ich bin krank.',
        'Hast du am Sonntag Zeit?',
      ],
      loesungen: [
        '**absagen**',
        '**Grund** ~~(el motivo)~~',
        '**neuer Termin**',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 2 · Sätze bauen',
      frage: 'Bilde die Sätze für deine Mitteilung.',
      loesungLabel: 'Lösung',
      aufgaben: [
        '(ich / leider / nicht kommen / kann)',
        '(du / bitte / Milch / kannst / mitbringen / ?)',
        '(wir / am Freitag / können / telefonieren / ?)',
      ],
      loesungen: [
        'Ich **kann** leider nicht **kommen**.',
        '**Kannst** du bitte Milch **mitbringen**?',
        '**Können** wir am Freitag **telefonieren**? ~~(en la pregunta, el verbo va primero)~~',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 3 · Die Mitteilung ordnen',
      frage: 'Bring die vier Teile in die richtige Reihenfolge. ~~(ordena las cuatro partes)~~',
      loesungLabel: 'Lösung',
      aufgaben: [
        'a) Können wir morgen zusammen lernen?  ·  b) Viele Grüße Carla  ·  c) Hallo Ines,  ·  d) ich kann heute nicht zum Kurs kommen, ich bin krank.',
      ],
      loesungen: [
        '**c → d → a → b:** „Hallo Ines, ich kann heute nicht zum Kurs kommen, ich bin krank. Können wir morgen zusammen lernen?\nViele Grüße\nCarla“',
      ],
    },

    { type: 'rule' },

    // ── Prüfungsbezug ─────────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Schreiben · Teil 1',
      titel: 'Notiz an eine Kollegin',
      anweisung: 'Du bist krank. Schreib deiner Kollegin Laura eine Mitteilung (ca. 20-30 Wörter): Du kommst heute nicht — sag, warum — bitte sie, den Chef zu informieren.',
      absaetze: [
        'Schreib zu **allen drei Punkten**. Vergiss Anrede und Gruß nicht!',
      ],
      loesungLabel: 'Mögliche Lösung',
      loesungen: [
        '„Hallo Laura, ich bin krank und komme heute nicht ins Büro. Kannst du bitte den Chef informieren? Morgen bin ich wieder da.\nViele Grüße\nAna“ *(25 Wörter)*',
      ],
      kommentar: 'Alle drei Punkte sind da. Auch andere Sätze sind richtig — z. B. „Ich habe Fieber.“ als Grund oder „Sag bitte dem Chef Bescheid.“ als Bitte.',
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Zähl nicht jedes Wort! Schreib zu jedem Punkt **einen Satz** plus Anrede und Gruß — dann hast du automatisch ca. 20-30 Wörter. ~~Con una frase por punto, la longitud sale sola.~~',
    },

    { type: 'rule' },

    // ── Abschluss ─────────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Baustein', 'So geht es'],
      zeilen: [
        ['Anrede', '„Hallo + Name,“ — mit Komma'],
        ['Inhalt', 'ein kurzer Satz pro Punkt (was + wann)'],
        ['Gruß', '„Viele Grüße“ + dein Name'],
        ['Länge', 'ca. 20-30 Wörter'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich schreibe eine Mitteilung mit Anrede, Inhalt und Gruß.',
        'Ich schreibe zu jedem Punkt der Aufgabe einen Satz.',
        'Ich kann absagen, bitten und einen Termin vorschlagen.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Teil 1 sitzt! In der nächsten Lektion kommt **Teil 2**: die E-Mail und die Einladung — etwas länger (ca. 30-40 Wörter) und mit der Anrede **Liebe / Lieber**.',
    },
  ],
}
