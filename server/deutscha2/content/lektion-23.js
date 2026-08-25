// Lektion 23 · Hören: Gespräche
//
// Bloque 2 (Prüfungstraining). Cierra el módulo Hören (canon: Lektion 21).
// Práctica con un Gespräch-Transkript (~100 palabras) e ítems con solución.
// Cierre: tabla-síntesis de todo el módulo. Ausblick → 24 «Modul Schreiben».

export default {
  spec: ['Bloque 2', 'Prüfungstraining — Hören', 'Niveau A2', 'Prüfungsrelevanz: Hören'],
  h1: 'Hören: Gespräche',
  lead: '~~Conversaciones cotidianas: quién dice qué — y cuál es la decisión FINAL.~~ **Achtung:** „Nein, lieber am Samstag!“ — die Korrektur zählt.',

  content: [
    // ── Lernziele ─────────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'Alltagsgespräche verstehen: einkaufen, Termine, Pläne',
        'verstehen, **wer** was sagt',
        'Korrekturen erkennen: „nein, lieber …“, „nicht …, sondern …“',
        'bis zum Ende hören — die letzte Information zählt',
      ],
    },

    { type: 'rule' },

    // ── Kernwortschatz ────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Kernwortschatz — Gespräche',
      kopf: ['Wort', 'Beispiel', 'Bedeutung'],
      zeilen: [
        ['sich treffen', 'Wann treffen wir uns?', 'quedar, encontrarse'],
        ['passen', 'Passt es dir am Freitag?', 'venir bien'],
        ['lieber', 'lieber am Samstag', 'mejor, preferiblemente'],
        ['leider', 'Das geht leider nicht.', 'por desgracia'],
        ['einkaufen', 'einkaufen gehen', 'hacer la compra'],
        ['anrufen', 'Ich rufe dich an.', 'llamar por teléfono'],
        ['mitbringen', 'Was bringst du mit?', 'traer, llevar'],
        ['die Idee', 'Gute Idee!', 'idea'],
      ],
    },

    { type: 'rule' },

    // ── Erklärung ─────────────────────────────────────────────────
    {
      type: 'prose',
      eyebrow: 'Erklärung — Welche Gespräche hörst du?',
      card: true,
      titel: 'Zwei Personen, ein Alltagsthema',
      absaetze: [
        'Im Modul Hören gibt es auch __Gespräche__: zwei Freunde planen das Wochenende, jemand kauft ein, zwei Personen machen einen Termin am Telefon. Die Fragen dazu sind typisch A2: **Was kauft die Frau? Wann treffen sie sich? Wohin fahren sie?**',
        'Oft fragt die Aufgabe nach **einer** Person: „Was macht **der Mann**?“ Achte darauf, wer spricht. ~~(en el audio distingues las voces; en el Transkript te ayudan los nombres)~~',
      ],
    },
    {
      type: 'steps',
      eyebrow: 'Erklärung — Die Korrektur: die wichtigste Falle',
      steps: [
        {
          badge: '1',
          titel: 'Erster Vorschlag',
          text: '„Gehen wir am **Freitag** ins Kino?“ ~~(la primera información suele ser la trampa)~~',
        },
        {
          badge: '2',
          titel: 'Korrektur',
          text: '„Am Freitag kann ich **leider** nicht. **Lieber** am Samstag.“ — Signalwörter: __nein__, __leider__, __lieber__, __besser__, __sondern__.',
        },
        {
          badge: '3',
          titel: 'Entscheidung am Ende',
          text: '„Okay, dann am **Samstag**!“ → Die Antwort ist **Samstag**, nicht Freitag. Höre immer **bis zum Ende**.',
        },
      ],
    },

    { type: 'rule' },

    // ── Beispiele ─────────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele — Die Korrektur im Dialog',
      items: [
        { text: '„— Treffen wir uns um **vier**? — Besser um **fünf**.“', gl: '— Entscheidung: 17 Uhr' },
        { text: '„— Kaufst du Brot? — Nein, Brot haben wir noch. Aber **Milch**!“', gl: '— er kauft Milch, kein Brot' },
        { text: '„— Fahren wir mit dem Bus? — Nein, **lieber mit dem Fahrrad**.“', gl: '— mit dem Fahrrad' },
      ],
    },

    { type: 'rule' },

    // ── Übungen ───────────────────────────────────────────────────
    {
      type: 'uebung',
      eyebrow: 'Anwendung — Übung 1 · Die finale Information',
      frage: 'Was ist die Entscheidung am Ende?',
      loesungLabel: 'Lösung',
      aufgaben: [
        '„— Kommst du um drei? — Um drei geht es nicht, aber um vier.“',
        '„— Ist das Konzert am Montag? — Nein, am Dienstag.“',
        '„— Zwei Kilo Tomaten, bitte. — Gern. Sonst noch etwas? — Ja, ein Brot.“',
      ],
      loesungen: [
        'Um **vier** (16 Uhr).',
        'Am **Dienstag**.',
        '**Tomaten und Brot** — die zweite Frage bringt mehr Information.',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 2 · Im Geschäft',
      frage: 'Lies das Transkript **einmal**. ~~(en el examen: audio)~~ Richtig oder falsch?',
      aufgabe: '**Transkript — im Geschäft:**\n**Verkäufer:** „Guten Tag, kann ich Ihnen helfen?“\n**Frau:** „Ja, ich suche eine Jacke.“\n**Verkäufer:** „Diese blaue Jacke kostet 60 Euro. Aber heute ist sie im Angebot: nur 45 Euro.“\n**Frau:** „Toll, dann nehme ich sie!“',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Die Frau sucht eine Jacke.',
        'Die Jacke kostet heute 60 Euro.',
      ],
      loesungen: [
        '**Richtig.**',
        '**Falsch** — heute kostet sie **45 Euro** (Angebot). ~~(oyes los dos precios: vale el último)~~',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 3 · Das große Gespräch',
      frage: 'Lies die 4 Fragen zuerst. Dann lies das Transkript **nur einmal** — oder lass es dir vorlesen.',
      aufgabe: '**Transkript — am Telefon (ca. 100 Wörter):**\n**Lena:** „Hallo Paul! Wollen wir am Wochenende etwas machen?“\n**Paul:** „Gute Idee! Gehen wir am Samstag ins Schwimmbad?“\n**Lena:** „Am Samstag kann ich leider nicht. Da besuche ich meine Oma. Lieber am Sonntag.“\n**Paul:** „Okay, dann am Sonntag. Treffen wir uns um zehn?“\n**Lena:** „Hmm, besser um halb elf. Ich muss vorher noch einkaufen.“\n**Paul:** „Gut, um halb elf am Eingang. Bringst du etwas zu essen mit?“\n**Lena:** „Ja, ich mache Sandwiches. Und du kaufst die Getränke, okay?“\n**Paul:** „Machen wir. Bis Sonntag!“',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Wann gehen sie ins Schwimmbad?',
        'Um wie viel Uhr treffen sie sich?',
        'Was macht Lena am Samstag?',
        'Wer kauft die Getränke?',
      ],
      loesungen: [
        'Am **Sonntag** — Samstag geht nicht. ~~(la corrección manda)~~',
        'Um **halb elf = 10.30 Uhr** — nicht um zehn.',
        'Sie besucht ihre **Oma**.',
        '**Paul** kauft die Getränke, Lena macht die Sandwiches.',
      ],
    },

    { type: 'rule' },

    // ── Prüfungsbezug ─────────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Hören · Gespräche',
      titel: 'Was kauft der Mann?',
      anweisung: 'Lies die Frage und die Optionen, dann das Transkript **einmal**. ~~(en el examen: audio)~~',
      absaetze: [
        '**Frau:** „Kaufst du bitte Käse und Tomaten?“\n**Mann:** „Käse haben wir doch noch. Ich kaufe Tomaten — und Brot, das haben wir nicht mehr.“',
      ],
      optionen: ['a) Käse und Tomaten', 'b) Tomaten und Brot', 'c) Käse und Brot'],
      loesungLabel: 'Lösung',
      loesungen: [
        '**b) Tomaten und Brot** — Käse haben sie noch, also kauft er keinen.',
      ],
      kommentar: 'Typisch A2: Du hörst **alle drei** Wörter (Käse, Tomaten, Brot). Nur die Entscheidung am Ende zählt.',
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Im Gespräch kommen oft **alle** Wörter aus den Optionen a, b und c vor! Höre auf die Signalwörter **nein, leider, lieber, besser, sondern** — nach ihnen kommt fast immer die richtige Antwort.',
    },

    { type: 'rule' },

    // ── Abschluss ─────────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung — das ganze Modul Hören',
      kopf: ['Texttyp', 'Typische Frage', 'Strategie'],
      zeilen: [
        ['Durchsage (Bahnhof, Geschäft)', 'Wann? Wo? Wie viel?', 'auf Zahlen & Uhrzeiten achten — halb zehn = 9.30'],
        ['Anrufbeantworter', 'Wann ist der Termin?', 'die neue Information notieren'],
        ['Radio / kurze Texte', 'Was ist das Thema?', 'Aufgaben vor dem Hören lesen'],
        ['Gespräch', 'Wer? Was? Wann?', 'bis zum Ende hören — die Korrektur zählt'],
        ['Alle Teile', '—', 'nicht blockieren, weiter zur nächsten Aufgabe'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich verstehe einfache Alltagsgespräche.',
        'Ich erkenne Korrekturen (nein, leider, lieber, sondern).',
        'Ich höre bis zum Ende — die letzte Information zählt.',
        'Ich kenne die Strategie für das ganze Modul Hören.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Das Modul Hören ist geschafft! ~~Ya tienes la estrategia completa para la comprensión oral.~~ Jetzt schreibst du selbst: In der nächsten Lektion beginnt das **Modul Schreiben** — kurze Mitteilungen und E-Mails, genau wie in der Prüfung.',
    },
  ],
}
