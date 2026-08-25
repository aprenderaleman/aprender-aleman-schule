// Lektion 28 · Schreiben Teil 2 — Forumsbeitrag (Meinung)
//
// Bloque 2 (Prüfungsstrategie) — der Meinungstext (~80 Wörter, empf.
// 25 Min.): Bauplan Meinung → Grund → Beispiel → Schluss, Redemittel
// der Meinungsäußerung, kommentiertes Musterbeispiel (81 Wörter) und
// komplette Prüfungsaufgabe mit Möglicher Lösung (81 Wörter).

export default {
  spec: ['Bloque 2', 'Prüfungsstrategie', 'Niveau B1', 'Prüfungsrelevanz: Schreiben Teil 2 (~80 Wörter · 25 Min.)'],
  h1: 'Schreiben Teil 2 — Forumsbeitrag (Meinung)',
  lead: 'Du liest ein Thema im Forum und schreibst deine Meinung — mit **Grund, eigenem Beispiel und Schluss**. ~~No se evalúa tu opinión, sino tu alemán.~~',

  content: [
    // ── Lernziele ─────────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'einen Forumsbeitrag von ~80 Wörtern mit dem Bauplan Meinung → Grund → Beispiel → Schluss schreiben',
        'Meinungs-Redemittel sicher verwenden (*Ich finde, dass …* / *Meiner Meinung nach …*)',
        'die eigene Meinung mit *weil*, *denn* und *deshalb* begründen',
      ],
    },

    { type: 'rule' },

    // ── Kernwortschatz ────────────────────────────────────────────
    {
      type: 'wortschatz',
      eyebrow: 'Kernwortschatz',
      items: [
        { wort: 'die Meinung', kollokation: 'meiner Meinung nach', es: 'la opinión' },
        { wort: 'der Vorteil', kollokation: 'ein großer Vorteil ist, dass …', es: 'la ventaja' },
        { wort: 'der Nachteil', kollokation: 'auch Nachteile haben', es: 'la desventaja' },
        { wort: 'der Grund', kollokation: 'einen Grund nennen', es: 'la razón' },
        { wort: 'die Erfahrung', kollokation: 'die Erfahrung machen, dass …', es: 'la experiencia' },
        { wort: 'zustimmen', kollokation: 'ich stimme dir zu', es: 'estar de acuerdo (con alguien)' },
        { wort: 'einverstanden sein', kollokation: 'damit bin ich einverstanden', es: 'estar de acuerdo (con algo)' },
        { wort: 'finden', kollokation: 'ich finde das Thema wichtig', es: 'opinar, parecer(le a uno)' },
        { wort: 'das Thema', kollokation: 'zum Thema passen', es: 'el tema' },
        { wort: 'günstig', kollokation: 'günstiger als im Geschäft', es: 'barato, económico' },
        { wort: 'insgesamt', kollokation: 'insgesamt finde ich …', es: 'en conjunto, en general' },
      ],
      hinweis: '~~«Estoy de acuerdo» tiene dos traducciones: con una persona, ich stimme dir/Ihnen zu; con una idea, ich bin einverstanden. No existe un calco directo del español.~~',
    },

    { type: 'rule' },

    // ── Erklärung ─────────────────────────────────────────────────
    {
      type: 'prose',
      eyebrow: 'Erklärung',
      card: true,
      titel: 'Das Aufgabenformat',
      absaetze: [
        'Du liest eine kurze Aussage aus einem Online-Forum — z. B. über Einkaufen, Handys, Sport oder Familie — und schreibst deine **Meinung dazu (~80 Wörter)**. Empfohlen sind **25 Minuten**, die meisten davon zum Denken: Du brauchst **eine Meinung, einen Grund und ein eigenes Beispiel** — mehr nicht. Anders als in Teil 1 und 3 gibt es hier **keine Anrede und keinen Gruß**: Du schreibst für alle, nicht an eine Person.',
      ],
    },
    {
      type: 'steps',
      eyebrow: 'Erklärung — der Bauplan',
      steps: [
        {
          titel: 'Meinung',
          text: 'Sag klar, was du denkst: *__Ich finde, dass …__ / __Meiner Meinung nach …__* Ein Einstiegssatz zum Thema davor wirkt natürlich: *Das Thema finde ich sehr interessant, denn …*',
        },
        {
          titel: 'Grund',
          text: 'Begründe mit __weil__, __denn__ oder __deshalb__: *…, weil man Zeit spart.* Ein guter Grund ist mehr wert als drei halbe.',
        },
        {
          titel: 'Eigenes Beispiel',
          text: 'Erzähl eine __eigene Erfahrung im Perfekt__: *Ich habe zum Beispiel letzten Monat …* ~~Lo más fácil de escribir — y lo que más convence.~~',
        },
        {
          titel: 'Schluss',
          text: 'Ein Satz zum Abschluss: *__Insgesamt__ finde ich, dass …* / *__Deshalb__ meine ich: …*',
        },
      ],
    },
    {
      type: 'redemittel',
      eyebrow: 'Redemittel für Teil 2',
      gruppen: [
        {
          fn: 'Meinung sagen',
          saetze: [
            { satz: 'Ich finde / Ich glaube, dass …' },
            { satz: 'Meiner Meinung nach ist …', gloss: '~~sin coma detrás y con el verbo justo después: Meiner Meinung nach IST…~~' },
            { satz: 'Ich bin der Meinung, dass …' },
          ],
        },
        {
          fn: 'Begründen',
          saetze: [
            { satz: '…, weil man viel Zeit spart.' },
            { satz: 'Ein großer Vorteil ist, dass …' },
            { satz: 'Deshalb / Aus diesem Grund …' },
          ],
        },
        {
          fn: 'Beispiel geben',
          saetze: [
            { satz: 'Zum Beispiel habe ich letztes Jahr …' },
            { satz: 'Ich habe die Erfahrung gemacht, dass …' },
            { satz: 'Bei mir ist das so: …' },
          ],
        },
        {
          fn: 'Abschließen',
          saetze: [
            { satz: 'Insgesamt finde ich, dass …' },
            { satz: 'Für mich ist klar: …' },
            { satz: 'Trotzdem sollte man …' },
          ],
        },
      ],
    },

    { type: 'rule' },

    // ── Beispiele + Musterbeispiel ────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele — die vier Bausteine im Satz',
      items: [
        { text: '**Meinung:** *Ich finde, **dass** Online-Kurse praktisch **sind**.*', gl: '— tras dass, el verbo al final' },
        { text: '**Grund:** *…, **weil** man zu Hause lernen **kann**.*' },
        { text: '**Beispiel:** *Ich habe **zum Beispiel** letztes Jahr einen Online-Kurs gemacht.*' },
        { text: '**Schluss:** ***Insgesamt** finde ich Online-Kurse eine gute Idee.*' },
        { text: '*Meiner Meinung nach **ist** das eine gute Idee.*', gl: '— ~~sin coma tras «Meiner Meinung nach» y el verbo en posición 2~~' },
      ],
    },
    {
      type: 'modell',
      eyebrow: 'Musterbeispiel — kommentiert',
      thema: 'Forumsbeitrag „Einkaufen im Internet — gut oder schlecht?“',
      woerter: '81 Wörter',
      absaetze: [
        '==Das Thema finde ich sehr interessant,== denn ich kaufe oft im Internet ein.',
        '==Meiner Meinung nach== hat Online-Shopping viele Vorteile. Man spart Zeit, und die Preise sind oft günstiger als im Geschäft.',
        'Ich habe ==zum Beispiel== letzten Monat einen Laptop online gekauft. Er war billiger, und er kam schon nach zwei Tagen.',
        '==Trotzdem finde ich, dass== man Kleidung besser im Geschäft kauft, weil man sie anprobieren kann.',
        '==Insgesamt== ist Online-Shopping für mich aber eine gute Sache, wenn man ein bisschen aufpasst.',
      ],
      annotationen: [
        { tag: 'Einstieg', text: 'Bezug zum Thema + persönliche Verbindung (*denn ich kaufe oft …*) — keine Anrede nötig.' },
        { tag: 'Meinung + Grund', text: '*Meiner Meinung nach* + Verb direkt danach; zwei einfache Gründe (*Zeit, Preise*).' },
        { tag: 'Beispiel', text: 'Eigene Erfahrung im Perfekt (*habe … gekauft*) — konkret: Laptop, zwei Tage.' },
        { tag: 'Gegenseite', text: '*Trotzdem* zeigt: Du kannst auch die andere Seite sehen — gut für Kohärenz und Wortschatz.' },
        { tag: 'Schluss', text: '*Insgesamt* + klares Fazit. 81 Wörter — fertig.' },
      ],
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Teil 2 hat die meiste Zeit (**25 Minuten**), weil das Denken dauert — nicht das Schreiben. Nimm die **erste Meinung, die dir einfällt**: Bewertet wird deine Sprache, nicht deine Position. Ein Satz Meinung + ein Grund + ein Beispiel + ein Schluss sind schon ~80 Wörter.',
    },

    { type: 'rule' },

    // ── Übungen ───────────────────────────────────────────────────
    {
      type: 'uebung',
      eyebrow: 'Anwendung — Übung 1 · Erkennen',
      frage: 'Meinung, Grund, Beispiel oder Schluss?',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Meiner Meinung nach ist Fast Food ungesund.',
        'Letzte Woche habe ich mit meiner Tochter zusammen gekocht.',
        'Insgesamt finde ich: Kochen muss jeder lernen.',
        'Selbst kochen ist billiger, denn Fertiggerichte kosten viel.',
      ],
      loesungen: [
        '**Meinung** — Signal: *Meiner Meinung nach*.',
        '**Beispiel** — eigene Erfahrung im Perfekt.',
        '**Schluss** — Signal: *Insgesamt*.',
        '**Grund** — Signal: *denn* + Begründung.',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 2 · Verbinden',
      frage: 'Verbinde die Sätze mit dem Wort in Klammern. Achte auf die Verbposition!',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Ich fahre gern Fahrrad. Es ist gesund. ~~(weil)~~',
        'Das Ticket ist teuer. Ich fahre oft mit dem Bus. ~~(trotzdem)~~',
        'Ich glaube: Sport macht den Kopf frei. ~~(dass)~~',
      ],
      loesungen: [
        'Ich fahre gern Fahrrad**, weil** es gesund **ist**. ~~verbo al final~~',
        'Das Ticket ist teuer. **Trotzdem fahre ich** oft mit dem Bus. ~~tras trotzdem, el verbo va inmediatamente (posición 2)~~',
        'Ich glaube**, dass** Sport den Kopf frei **macht**.',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 3 · Produzieren',
      frage: 'Thema: „Hausaufgaben in der Sprachschule — sinnvoll oder nicht?“ Schreib eine Meinung mit Grund, ein eigenes Beispiel und einen Schluss (drei bis vier Sätze).',
      loesungLabel: 'Mögliche Lösung',
      loesung: '*Ich finde, dass Hausaufgaben sinnvoll sind, weil man den Stoff zu Hause noch einmal wiederholt. Ich habe zum Beispiel durch die Hausaufgaben viele neue Wörter gelernt. Deshalb mache ich sie fast immer.* — Die Gegenmeinung ist genauso gut, solange Grund und Beispiel dabei sind.',
    },

    { type: 'rule' },

    // ── Prüfungsbezug ─────────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Schreiben · Teil 2 · komplette Aufgabe',
      titel: 'Forumsbeitrag „Auto in der Stadt“ · ca. 80 Wörter · 25 Minuten',
      anweisung: 'Bearbeite die Aufgabe unter Echtbedingungen und vergleiche erst danach mit der Lösung.',
      absaetze: [
        'In einem Online-Forum lesen Sie eine Meinung zum Thema „Braucht man in der Stadt ein eigenes Auto?“. Schreiben Sie Ihre Meinung dazu (ca. 80 Wörter). Begründen Sie sie und geben Sie ein Beispiel aus Ihrer Erfahrung.',
      ],
      loesungLabel: 'Mögliche Lösung (81 Wörter)',
      loesungen: [
        '*Ich finde diese Frage sehr interessant, weil ich selbst in einer großen Stadt wohne.*',
        '*Meiner Meinung nach braucht man dort kein eigenes Auto. Busse und Bahnen fahren fast überall hin, und Parkplätze sind teuer und schwer zu finden.*',
        '*Ich habe zum Beispiel mein Auto vor zwei Jahren verkauft. Seitdem fahre ich mit dem Fahrrad zur Arbeit und spare viel Geld.*',
        '*Nur für Familien mit kleinen Kindern ist ein Auto vielleicht praktisch.*',
        '*Für mich ist das Leben ohne Auto aber einfacher geworden.*',
      ],
      kommentar: 'Der Bauplan trägt den Text: Einstieg mit persönlichem Bezug → Meinung + zwei Gründe → eigenes Beispiel im Perfekt → kurzer Blick auf die Gegenseite (*Nur für Familien …*) → Fazit. Auch „Ja, man braucht ein Auto“ wäre eine perfekte Lösung — mit Grund und Beispiel.',
    },

    { type: 'rule' },

    // ── Abschluss ─────────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Baustein', 'So geht es'],
      zeilen: [
        ['Bauplan', 'Meinung → Grund → Beispiel → Schluss'],
        ['Meinung', 'Ich finde/glaube, dass … · Meiner Meinung nach + Verb'],
        ['Grund', 'weil / denn / deshalb — einer reicht'],
        ['Beispiel', 'eigene Erfahrung im Perfekt (zum Beispiel …)'],
        ['Rahmen', '~80 Wörter · 25 Minuten · ohne Anrede und Gruß'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich schreibe einen Forumsbeitrag mit Meinung, Grund, Beispiel und Schluss.',
        'Ich benutze Meinungs-Redemittel wie *Ich finde, dass …* und *Meiner Meinung nach …* korrekt.',
        'Ich begründe meine Meinung mit weil, denn oder deshalb — mit richtiger Verbposition.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Bleibt der kürzeste Text des Moduls: die **formelle E-Mail (Teil 3)** — nur ~40 Wörter, aber an eine Lehrerin, einen Chef oder ein Amt. Die nächste Lektion zeigt dir das Sie-Register, die formelle Anrede und die höfliche Bitte mit *Könnten Sie …?*',
    },
  ],
}
