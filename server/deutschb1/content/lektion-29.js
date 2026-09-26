// Lektion 29 · Schreiben Teil 3 — Formelle E-Mail
//
// Bloque 2 (Prüfungsstrategie) — die kurze formelle E-Mail (~40 Wörter,
// empf. 15 Min.): Sie-Register, formelle Anrede, Entschuldigung/Bitte
// mit Grund, Konjunktiv II der Höflichkeit (Könnten Sie…?). Musterbeispiel
// (44 Wörter), Prüfungsaufgabe mit Möglicher Lösung (40 Wörter) und die
// Synthese-Tabelle der drei Teile. Schließt das Schreib-Modul ab.

export default {
  spec: ['Bloque 2', 'Prüfungsstrategie', 'Niveau B1', 'Prüfungsrelevanz: Schreiben Teil 3 (~40 Wörter · 15 Min.)'],
  h1: 'Schreiben Teil 3 — Formelle E-Mail',
  lead: 'Die kürzeste Aufgabe des Moduls: **~40 Wörter** an eine Lehrerin, einen Chef oder ein Amt — im Sie-Register, mit Grund und höflicher Bitte.',

  content: [
    // ── Lernziele ─────────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'eine kurze formelle E-Mail (~40 Wörter) mit Anrede, Grund und Gruß schreiben',
        'das Sie-Register durchhalten (*Sie, Ihnen, Ihr* — immer groß)',
        'höflich bitten mit *Könnten Sie …?* und *Ich würde gern …*',
      ],
    },

    { type: 'rule' },

    // ── Kernwortschatz ────────────────────────────────────────────
    {
      type: 'wortschatz',
      eyebrow: 'Kernwortschatz',
      items: [
        { wort: 'sich entschuldigen', kollokation: 'sich für das Fehlen entschuldigen', es: 'disculparse' },
        { wort: 'absagen', kollokation: 'einen Termin absagen', es: 'cancelar, anular' },
        { wort: 'verschieben', kollokation: 'den Termin verschieben', es: 'aplazar' },
        { wort: 'teilnehmen an + Dat.', kollokation: 'an der Besprechung teilnehmen', es: 'asistir a, participar en' },
        { wort: 'die Besprechung', kollokation: 'eine wichtige Besprechung', es: 'la reunión' },
        { wort: 'der Termin', kollokation: 'einen Termin beim Arzt haben', es: 'la cita' },
        { wort: 'leider', kollokation: 'leider kann ich nicht kommen', es: 'lamentablemente' },
        { wort: 'dringend', kollokation: 'ein dringender Termin', es: 'urgente' },
        { wort: 'das Fehlen', kollokation: 'mein Fehlen entschuldigen', es: 'la ausencia' },
        { wort: 'im Voraus', kollokation: 'vielen Dank im Voraus', es: 'de antemano' },
        { wort: 'möglich', kollokation: 'Wäre es möglich, …?', es: 'posible' },
      ],
      hinweis: '~~«Asistir a una reunión»~~ heißt **an einer Besprechung teilnehmen** — das Verb *assistieren* bedeutet „jemandem helfen“. ~~Falso amigo clásico del examen.~~',
    },

    { type: 'rule' },

    // ── Erklärung ─────────────────────────────────────────────────
    {
      type: 'prose',
      eyebrow: 'Erklärung',
      card: true,
      titel: 'Das Aufgabenformat',
      absaetze: [
        'Typische Situationen: Du kannst nicht zum **Kurs** kommen, musst einen **Termin absagen** oder bittest ein **Amt** um eine Information. Ziel: **~40 Wörter in 15 Minuten** — Anrede, zwei bis drei Sätze, Gruß. Der Inhalt ist einfach; entscheidend ist das **Register**: Eine perfekte E-Mail im du-Ton erfüllt hier die Aufgabe nicht (Kriterium *Erfüllung*).',
      ],
    },
    {
      type: 'steps',
      eyebrow: 'Erklärung — die Struktur',
      steps: [
        {
          titel: 'Anrede',
          text: '__Sehr geehrte Frau Weber,__ / __Sehr geehrter Herr Braun,__ / ohne Namen: __Sehr geehrte Damen und Herren,__ — mit **Komma**, danach **klein** weiter. ~~Otra vez: nada de dos puntos como en «Estimada Sra. Weber:».~~',
        },
        {
          titel: 'Grund',
          text: '__leider + weil__: *Leider kann ich am Montag nicht zum Kurs kommen, weil ich einen Termin beim Arzt habe.* Ein Satz — mehr Platz hast du nicht.',
        },
        {
          titel: 'Entschuldigung oder Bitte',
          text: '*__Bitte entschuldigen Sie__ mein Fehlen.* / *__Könnten Sie__ mir bitte die Hausaufgaben schicken?*',
        },
        {
          titel: 'Gruß',
          text: '__Mit freundlichen Grüßen__ + Name in der nächsten Zeile — ohne Komma nach dem Gruß.',
        },
      ],
    },
    {
      type: 'prose',
      card: true,
      titel: 'Höflich mit Konjunktiv II',
      absaetze: [
        'Drei Formen machen jede Bitte höflich: **könnte, würde, wäre**. Vergleiche: *Können Sie mir helfen?* ist korrekt — *__Könnten__ Sie mir bitte helfen?* ist höflicher. Statt *Ich will einen neuen Termin* schreibst du *Ich __würde gern__ einen neuen Termin vereinbaren* oder fragst: *__Wäre__ es möglich, den Termin zu verschieben?* ~~Es el «podría / querría / sería posible» del alemán.~~',
      ],
    },
    {
      type: 'redemittel',
      eyebrow: 'Redemittel für Teil 3',
      gruppen: [
        {
          fn: 'Anrede & Gruß',
          saetze: [
            { satz: 'Sehr geehrte Frau … , / Sehr geehrter Herr … ,' },
            { satz: 'Sehr geehrte Damen und Herren,', gloss: '~~cuando no conoces el nombre (p. ej. un Amt)~~' },
            { satz: 'Mit freundlichen Grüßen + Name' },
          ],
        },
        {
          fn: 'Absagen & Entschuldigen',
          saetze: [
            { satz: 'Leider kann ich am … nicht kommen, weil …' },
            { satz: 'Bitte entschuldigen Sie mein Fehlen / die Verspätung.' },
            { satz: 'Ich muss den Termin leider absagen.' },
          ],
        },
        {
          fn: 'Höflich bitten',
          saetze: [
            { satz: 'Könnten Sie mir bitte … schicken / mitteilen?' },
            { satz: 'Wäre es möglich, den Termin zu verschieben?' },
            { satz: 'Ich würde gern einen neuen Termin vereinbaren.' },
          ],
        },
      ],
    },

    { type: 'rule' },

    // ── Beispiele + Musterbeispiel ────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele — vom du zum Sie',
      items: [
        { text: '**du:** *Kannst du mir helfen?* → **Sie:** ***Könnten Sie** mir bitte helfen?*' },
        { text: '**du:** *Sag mir Bescheid!* → **Sie:** *Bitte **geben Sie** mir kurz Bescheid.*' },
        { text: '**du:** *Sorry, ich komme nicht.* → **Sie:** *Leider kann ich nicht kommen. Bitte **entschuldigen Sie**.*', gl: '— kein *sorry*, kein *Hallo*, keine Smileys in Teil 3' },
      ],
    },
    {
      type: 'modell',
      eyebrow: 'Musterbeispiel — kommentiert',
      thema: 'Entschuldigung an die Kurslehrerin',
      woerter: '44 Wörter',
      absaetze: [
        '==Sehr geehrte Frau Weber,==',
        '==leider== kann ich am Montag nicht zum Deutschkurs kommen, ==weil== ich einen wichtigen Termin beim Arzt habe. ==Bitte entschuldigen Sie== mein Fehlen.',
        '==Könnten Sie== mir bitte die Hausaufgaben per E-Mail schicken?',
        'Vielen Dank im Voraus.',
        '==Mit freundlichen Grüßen==\nAna Torres',
      ],
      annotationen: [
        { tag: 'Anrede', text: 'Formell mit Komma — danach klein weiter (*leider …*).' },
        { tag: 'Grund', text: '*Leider* + Hauptsatz + *weil*-Satz: Absage und Grund in einem Satz.' },
        { tag: 'Entschuldigung', text: '*Bitte entschuldigen Sie mein Fehlen* — die Standardformel für den Kurs.' },
        { tag: 'Bitte', text: '*Könnten Sie …?* — Konjunktiv II macht die Bitte höflich.' },
        { tag: 'Gruß', text: '*Mit freundlichen Grüßen* + Name. 44 Wörter — genau richtig.' },
      ],
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Lerne **Anrede und Gruß auswendig** — *Sehr geehrte Frau …,* und *Mit freundlichen Grüßen* sind schon ~8 der 40 Wörter, garantiert fehlerfrei. Kontrolliere am Ende nur eins besonders: **Sie, Ihnen, Ihr immer groß**.',
    },

    { type: 'rule' },

    // ── Mehr Beispiele ────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Mehr Beispiele',
      kicker: 'Kernwortschatz',
      titel: 'Sätze für die formelle E-Mail',
      items: [
        { text: 'Leider muss ich den **Termin** am Donnerstag **absagen**.', gl: '— absagen' },
        { text: '**Wäre** es **möglich**, die **Besprechung** auf Freitag zu **verschieben**?', gl: '— höflich bitten' },
        { text: 'Ich möchte mich für mein **Fehlen** am Montag **entschuldigen**.' },
        { text: 'Leider kann ich nicht **am** Elternabend **teilnehmen**, weil mein Sohn krank ist.', gl: '~~asistir a = teilnehmen an + Dativ~~' },
        { text: 'Ich habe morgen früh einen **dringenden** Termin bei der Bank.' },
        { text: 'Könnten Sie mir bitte die Unterlagen schicken? Vielen Dank **im Voraus**.', gl: '— Bitte + Dank' },
      ],
    },
    {
      type: 'modell',
      eyebrow: 'Noch ein Musterbeispiel — kurz',
      thema: 'Verspätung — E-Mail an den Chef, Herrn Roth',
      absaetze: [
        '==Sehr geehrter Herr Roth,==',
        '==leider== komme ich morgen etwa 30 Minuten später ins Büro, ==weil== ich einen Termin bei der Bank habe. ==Bitte entschuldigen Sie== die Verspätung.',
        '==Mit freundlichen Grüßen==\nElena Ruiz',
      ],
    },

    { type: 'rule' },

    // ── Prüfungsbezug ─────────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Schreiben · Teil 3 · komplette Aufgabe',
      titel: 'Formelle E-Mail „Teambesprechung“ · ca. 40 Wörter · 15 Minuten',
      anweisung: 'Bearbeite die Aufgabe wie in der Prüfung: mit Uhr und ohne Hilfe. Vergleiche erst danach mit der Lösung.',
      absaetze: [
        'Sie haben morgen einen dringenden Termin beim Zahnarzt und können nicht an der Teambesprechung teilnehmen. Schreiben Sie an Ihre Chefin, Frau Klein (ca. 40 Wörter): Entschuldigen Sie sich höflich und nennen Sie den Grund.',
      ],
      loesungLabel: 'Mögliche Lösung (40 Wörter)',
      loesungen: [
        '*Sehr geehrte Frau Klein,*',
        '*leider kann ich morgen nicht an der Teambesprechung teilnehmen, weil ich einen dringenden Termin beim Zahnarzt habe. Bitte entschuldigen Sie das.*',
        '*Ich würde später gern eine Kollegin nach den Informationen fragen.*',
        '*Mit freundlichen Grüßen\nLuis Romero*',
      ],
      kommentar: 'Alles drin auf 40 Wörtern: Anrede → Absage mit Grund (*leider … weil …*) → Entschuldigung → ein Extra-Satz mit Lösung (*Ich würde … fragen* — Konjunktiv II) → Gruß. Und richtig: *an der Besprechung **teilnehmen***, nicht *assistieren*.',
    },

    { type: 'rule' },

    // ── Abschluss ─────────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung — die drei Teile im Vergleich',
      kopf: ['Teil', 'Empfänger', 'Register', 'Anrede → Gruß'],
      zeilen: [
        ['Teil 1 · E-Mail', 'Freundin / Freund', 'du (klein)', 'Liebe/r … → Viele Grüße'],
        ['Teil 2 · Forum', 'öffentlich, alle', 'neutral (ich / man)', 'ohne Anrede und Gruß'],
        ['Teil 3 · E-Mail', 'Lehrerin, Chef, Amt', 'Sie (immer groß)', 'Sehr geehrte/r … → Mit freundlichen Grüßen'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich schreibe eine formelle E-Mail von ~40 Wörtern mit Anrede, Grund und Gruß.',
        'Ich halte das Sie-Register durch und schreibe Sie, Ihnen, Ihr groß.',
        'Ich bitte höflich mit Könnten Sie …?, Wäre es möglich …? und Ich würde gern …',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Damit ist das Modul Schreiben komplett: drei Texte, drei Register, ein Zeitplan. Als Nächstes wechseln wir das Medium — das **Modul Sprechen**: die Paarprüfung mit gemeinsam planen, Präsentation und Feedback. Die nächste Lektion gibt dir den Überblick über den Ablauf und die Bewertung.',
    },
  ],
}
