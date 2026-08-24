// Lektion 30 · Modul Sprechen — Überblick & Bewertung
//
// Bloque 2 — abre el módulo Sprechen (Lektionen 30-32). Canon: Paarprüfung
// ca. 15 Minuten + 15 Minuten Vorbereitungszeit; T1 Vortrag ~4 Min. +
// Nachfragen, T2 Diskussion ~5 Min.; Kriterien + Aussprache. Detalles finos
// → genérico + remisión al Modellsatz. Foco especial: los fallos de
// Aussprache típicos de hispanohablantes.

export default {
  spec: ['Bloque 2', 'Modul Sprechen', 'Niveau B2', 'Prüfungsrelevanz: Sprechen'],
  h1: 'Modul Sprechen — Überblick & Bewertung',
  lead: 'Ca. 15 Minuten zu zweit, davor 15 Minuten Vorbereitung: der Ablauf Minute für Minute, die Bewertungskriterien — und die Aussprachefehler, die Spanischsprachige die meisten Punkte kosten.',

  content: [
    // ── Lernziele ─────────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'den Ablauf der Paarprüfung (Vorbereitung, Teil 1, Teil 2) sicher beschreiben',
        'die 15 Minuten Vorbereitungszeit in einen brauchbaren Stichwortzettel verwandeln',
        'die Bewertungskriterien kennen — inklusive Aussprache mit deinen typischen Stolpersteinen',
        'Blockaden mit Strategien überbrücken, statt zu verstummen',
      ],
    },

    { type: 'rule' },

    // ── Kernwortschatz ────────────────────────────────────────────
    {
      type: 'wortschatz',
      eyebrow: 'Kernwortschatz — die Sprache der Prüfung',
      items: [
        { wort: 'die Paarprüfung, -en', kollokation: 'die Paarprüfung mit einem anderen Kandidaten ablegen', es: 'examen oral en pareja' },
        { wort: 'die Vorbereitungszeit', kollokation: 'die Vorbereitungszeit voll ausnutzen', es: 'tiempo de preparación' },
        { wort: 'der Stichwortzettel, -', kollokation: 'einen Stichwortzettel schreiben und benutzen', es: 'hoja de notas' },
        { wort: 'das Stichwort, -wörter', kollokation: 'nur Stichwörter notieren, keine Sätze', es: 'palabra clave' },
        { wort: 'der Vortrag, -träge', kollokation: 'einen kurzen Vortrag halten', es: 'presentación, exposición' },
        { wort: 'die Nachfrage, -n', kollokation: 'ruhig auf Nachfragen reagieren', es: 'pregunta de seguimiento' },
        { wort: 'die Prüfenden (Pl.)', kollokation: 'Blickkontakt mit den Prüfenden halten', es: 'los examinadores' },
        { wort: 'die Aussprache', kollokation: 'an der Aussprache arbeiten', es: 'pronunciación' },
        { wort: 'der Wortakzent, -e', kollokation: 'den Wortakzent richtig setzen', es: 'acento de palabra' },
        { wort: 'betonen', kollokation: 'die erste Silbe betonen', es: 'acentuar' },
        { wort: 'die Satzmelodie, -n', kollokation: 'die Satzmelodie am Satzende senken', es: 'entonación' },
        { wort: 'flüssig', kollokation: 'flüssig, aber nicht fehlerfrei sprechen', es: 'con fluidez' },
      ],
      hinweis: 'Merke den Unterschied: der **Vortrag** ist deine Präsentation in Teil 1, die **Nachfrage** kommt danach. ~~Y ojo: „die Prüfenden“ son los examinadores; tu compañero de examen es „der Partner / die Partnerin“.~~',
    },

    { type: 'rule' },

    // ── Erklärung ─────────────────────────────────────────────────
    {
      type: 'prose',
      eyebrow: 'Erklärung — das Modul auf einen Blick',
      absaetze: [
        'Das Modul Sprechen ist eine **Paarprüfung**: Du sprichst zusammen mit einem anderen Kandidaten vor zwei Prüfenden — das einzige Modul, das auch beim digitalen Format **präsenzbasiert** bleibt. Die Prüfung selbst dauert **ca. 15 Minuten** für das Paar; davor hast du **15 Minuten Vorbereitungszeit** in einem separaten Raum. Dein Stichwortzettel darf mit in die Prüfung — er ist dein wichtigstes Werkzeug, wenn du ihn richtig baust.',
      ],
    },
    {
      type: 'tabelle',
      eyebrow: 'Erklärung — der Ablauf Minute für Minute',
      kopf: ['Phase', 'Dauer', 'Was passiert'],
      zeilen: [
        ['Vorbereitung', '15 Min.', 'Du bekommst die Aufgabenblätter für Teil 1 und Teil 2 und schreibst deinen Stichwortzettel — allein, vor der Prüfung.'],
        ['Begrüßung', 'ca. 1 Min.', 'Kurzes Warm-up mit den Prüfenden (Name, Herkunft) — dient in der Regel nur zum Ankommen.'],
        ['Teil 1 — Kandidat/in A', 'ca. 4 Min. + Nachfragen', 'A hält den Vortrag über ein Alltagsthema; danach stellen Partner und Prüfende Nachfragen.'],
        ['Teil 1 — Kandidat/in B', 'ca. 4 Min. + Nachfragen', 'B hält den eigenen Vortrag — zu einem anderen Thema.'],
        ['Teil 2', 'ca. 5 Min.', 'Diskussion zu zweit: eine Alltagsfrage besprechen und zu einem gemeinsamen Ergebnis kommen.'],
      ],
    },
    {
      type: 'steps',
      eyebrow: 'Erklärung — die 15 Minuten Vorbereitung',
      steps: [
        {
          badge: '3 Min.',
          titel: 'Beide Aufgaben lesen',
          text: 'Lies zuerst **beide** Blätter: das Vortragsthema für Teil 1 und die Diskussionsfrage für Teil 2. So verteilst du deine Zeit bewusst, statt am Ende ohne Plan für Teil 2 dazustehen.',
        },
        {
          badge: '8 Min.',
          titel: 'Gerüst für den Vortrag bauen',
          text: 'Notiere ein Skelett: __Einleitung → 2-3 Punkte mit je einem eigenen Beispiel → Fazit__. Nur **Stichwörter**, nie ausformulierte Sätze. ~~Si escribes frases completas, acabarás leyéndolas — y leer en voz alta suena monótono y baja la nota.~~',
        },
        {
          badge: '4 Min.',
          titel: 'Teil 2 andenken + Redemittel notieren',
          text: 'Sammle zur Diskussionsfrage je __zwei Argumente pro Seite__ und schreib dir 2-3 Redemittel auf, die du sicher beherrschst („Da hast du recht, aber …“). Mehr braucht Teil 2 nicht an Vorbereitung — er lebt vom Reagieren.',
        },
      ],
    },
    {
      type: 'tabelle',
      eyebrow: 'Erklärung — so wirst du bewertet',
      kopf: ['Kriterium', 'Was die Prüfenden hören wollen'],
      zeilen: [
        ['Erfüllung & Interaktion', 'Aufgabe komplett bearbeitet; in Teil 2 echtes Eingehen auf den Partner mit gemeinsamem Ergebnis'],
        ['Kohärenz & Flüssigkeit', 'roter Faden, hörbare Verbindungswörter, keine langen Abbrüche'],
        ['Wortschatz', 'Spektrum und Präzision — B2-Redemittel statt immer nur „gut“ und „schlecht“'],
        ['Strukturen', 'Nebensätze und Konnektoren mit korrekter Verbstellung'],
        ['Aussprache', 'verständlich, klarer Wortakzent, natürliche Satzmelodie — ein Akzent ist erlaubt, Unverständlichkeit nicht'],
      ],
    },

    { type: 'rule' },

    // ── Beispiele ─────────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele — Aussprache: die vier Stolpersteine',
      kicker: 'Vokale',
      titel: 'Lang oder kurz? Das Deutsche unterscheidet',
      items: [
        { text: 'der **Staat** (lang) ↔ die **Stadt** (kurz) · **bieten** ↔ **bitten** · der **Ofen** ↔ **offen**', gl: '— el español no distingue vocal larga/corta; el alemán cambia el significado' },
        { text: 'Faustregel: Doppelkonsonant → kurzer Vokal (bi**tt**en, o**ff**en); Dehnungs-h oder Doppelvokal → langer Vokal (Ba**h**n, B**oo**t).' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'h-Laut',
      titel: 'Das h am Silbenanfang wird gesprochen',
      items: [
        { text: '**H**aus, **h**eute, **h**undert — das h ist ein hörbarer Hauch, sonst wird aus *Haus* das Wort *aus*.', gl: '— ni la h muda del español ni la jota fuerte: solo aire' },
        { text: 'Aber nach Vokal ist h stumm und dehnt nur: fa**h**ren, se**h**en, Ba**h**n.' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'Wortakzent',
      titel: 'Die betonte Silbe entscheidet',
      items: [
        { text: '**AR**beit, **EIN**kaufen (trennbares Präfix betont) — aber ver**STE**hen, be**ZAH**len (untrennbares Präfix unbetont).' },
        { text: 'stud**IE**ren, organis**IE**ren — Verben auf *-ieren* betonen immer das *ie*.' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'Satzmelodie',
      titel: 'Aussagen fallen, Ja/Nein-Fragen steigen',
      items: [
        { text: 'Ich arbeite gern im Team. ↘ — die Stimme geht am Ende **runter**; sonst klingt jede Aussage wie eine unsichere Frage.' },
        { text: 'Arbeitest du gern im Team? ↗ — nur Ja/Nein-Fragen steigen; W-Fragen fallen wie Aussagen. ↘' },
      ],
    },
    {
      type: 'redemittel',
      eyebrow: 'Redemittel — Strategien gegen Blockaden',
      gruppen: [
        {
          fn: 'Zeit gewinnen',
          saetze: [
            { satz: 'Also, ich würde sagen, …' },
            { satz: 'Das ist eine interessante Frage. Ich überlege kurz.' },
          ],
        },
        {
          fn: 'Wort fehlt? Umschreiben',
          saetze: [
            { satz: 'Ich meine das Gerät, mit dem man … kann.', gloss: 'perífrasis: describe la función' },
            { satz: 'Mir fällt das Wort gerade nicht ein — ich meine so etwas wie …' },
          ],
        },
        {
          fn: 'Nicht verstanden?',
          saetze: [
            { satz: 'Könntest du das bitte wiederholen?' },
            { satz: 'Was meinst du genau damit?' },
          ],
        },
        {
          fn: 'Partner einbeziehen',
          saetze: [
            { satz: 'Wie siehst du das?' },
            { satz: 'Bist du auch der Meinung, dass …?' },
          ],
        },
      ],
    },

    { type: 'rule' },

    // ── Übungen ───────────────────────────────────────────────────
    {
      type: 'uebung',
      eyebrow: 'Anwendung — Übung 1 · Erkennen',
      frage: 'Welches Kriterium leidet hier am meisten — Erfüllung/Interaktion, Flüssigkeit, Strukturen oder Aussprache?',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Ein Kandidat liest seinen Vortrag Wort für Wort vom Zettel ab.',
        'Eine Kandidatin sagt: „Ich möchte sprechen über meine Erfahrung.“',
        'Ein Kandidat redet in der Diskussion drei Minuten allein, ohne den Partner einzubeziehen.',
        'Eine Kandidatin spricht „Stadt“ und „Staat“ völlig gleich aus.',
      ],
      loesungen: [
        '**Flüssigkeit (und Aussprache)** — Abgelesenes klingt monoton; der Vortrag muss frei mit Stichwörtern gehalten werden.',
        '**Strukturen** — Verbstellung: „Ich möchte **über meine Erfahrung sprechen**.“ ~~Calco del español „quiero hablar sobre…“.~~',
        '**Erfüllung/Interaktion** — Teil 2 bewertet das Gespräch; ein Monolog verfehlt die Aufgabe.',
        '**Aussprache** — Vokallänge: *Stadt* kurz, *Staat* lang.',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 2 · Anwenden',
      frage: 'Markiere die betonte Silbe (sprich die Wörter laut!).',
      loesungLabel: 'Lösung',
      aufgaben: [
        'einkaufen',
        'bezahlen',
        'studieren',
        'Nachfrage',
        'verstehen',
      ],
      loesungen: [
        '**EIN**kaufen — trennbares Präfix wird betont.',
        'be**ZAH**len — untrennbares Präfix bleibt unbetont.',
        'stud**IE**ren — *-ieren* betont das *ie*.',
        '**NACH**frage — Nomen mit Präfix: Akzent vorn.',
        'ver**STE**hen — untrennbares Präfix unbetont.',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 3 · Produzieren',
      frage: 'Simuliere die Vorbereitungszeit: Stell dir einen Timer auf 15 Minuten und schreibe zum Vortragsthema „Feste oder flexible Arbeitszeiten?“ einen Stichwortzettel mit maximal 25 Wörtern (Gerüst: Einleitung → 2 Punkte + Beispiele → Meinung → Fazit).',
      loesung: '**Mögliche Lösung:** „Einl.: Arbeitszeit — wichtig für alle / P1: fest → klare Struktur, Feierabend (Bsp. Vater) / P2: flexibel → Familie, Pendeln (Bsp. Homeoffice-Freundin) / Meinung: flexibel + Kernzeiten / Fazit + Fragen?“ — Jede andere Gliederung ist gültig, solange sie **Stichwörter statt Sätze** enthält, 2-3 Punkte mit eigenem Beispiel plant und mit Meinung und Fazit endet.',
    },

    { type: 'rule' },

    // ── Prüfungsbezug ─────────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Modul Sprechen · Vorbereitungszeit',
      titel: 'Welcher Zettel besteht?',
      anweisung: 'Zwei Kandidaten haben sich auf dasselbe Vortragsthema vorbereitet: „Braucht man heute noch ein eigenes Auto?“ Vergleiche die Zettel: Welcher funktioniert in der Prüfung — und warum?',
      absaetze: [
        '**Zettel A:** „Guten Tag, ich möchte heute über das Thema Auto sprechen. Erstens ist ein eigenes Auto sehr praktisch, weil man damit jederzeit überall hinfahren kann. Zweitens ist ein Auto aber auch sehr teuer, denn man muss Versicherung und Benzin bezahlen …“ *(ausformulierter Text, ca. 180 Wörter)*',
        '**Zettel B:** „Einl.: Auto — noch nötig? / P1: praktisch → Land, Familie (Bsp. mein Onkel) / P2: teuer + Umwelt → Carsharing, ÖPNV / Meinung: Stadt nein, Land ja / Fazit + Fragen?“',
      ],
      loesungLabel: 'Lösung',
      loesungen: [
        '**Zettel B.** Er ist in 15 Minuten realistisch zu schaffen, zwingt zum **freien Sprechen** und lässt Blickkontakt zu — ein kurzer Blick genügt, um den nächsten Punkt zu finden.',
        '**Zettel A** führt fast automatisch zum Ablesen: Die Augen kleben am Papier, die Satzmelodie wird flach — das kostet bei Flüssigkeit **und** Aussprache. Außerdem ist ein ganzer Text in 15 Minuten kaum zu schreiben, und für Teil 2 bleibt keine Zeit.',
      ],
      kommentar: 'Die Prüfenden sehen deinen Zettel nicht als Fehler — aber sie hören sofort, ob du sprichst oder vorliest.',
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Trainiere die Vorbereitung wie die Prüfung selbst: **15 Minuten, Timer, ein Zettel** — wer zu Hause immer 40 Minuten plant, gerät am Prüfungstag in Stress. Und zur Aussprache: Dein Akzent muss nicht verschwinden. ==Verständlich und flüssig schlägt perfekt und stockend== — genau so bewerten es die Kriterien.',
    },

    { type: 'rule' },

    // ── Abschluss ─────────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Baustein', 'Das Wichtigste'],
      zeilen: [
        ['Format', 'Paarprüfung, ca. 15 Min. — plus 15 Min. Vorbereitung mit Stichwortzettel'],
        ['Teil 1', 'Vortrag ca. 4 Min. + Nachfragen — jeder Kandidat mit eigenem Thema'],
        ['Teil 2', 'Diskussion ca. 5 Min. — das gemeinsame Ergebnis gehört zur Aufgabe'],
        ['Bewertung', 'Erfüllung & Interaktion · Kohärenz & Flüssigkeit · Wortschatz · Strukturen · Aussprache'],
        ['Aussprache-Fokus', 'Vokallänge · hörbares h · Wortakzent · fallende Satzmelodie'],
        ['Punkte', '100 Punkte, bestanden ab 60 — wie in jedem Modul'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich kann den Ablauf der Sprechprüfung Phase für Phase beschreiben.',
        'Ich nutze die 15 Minuten für einen Stichwortzettel — ohne ganze Sätze.',
        'Ich kenne die Bewertungskriterien und meine persönlichen Aussprache-Stolpersteine.',
        'Ich habe Redemittel parat, um Blockaden zu überbrücken, statt zu schweigen.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Der Überblick steht — jetzt wird trainiert. In der nächsten Lektion baust du den **Vortrag für Teil 1**: Einleitung, zwei bis drei Punkte mit eigenem Beispiel, Fazit — dazu die mündlichen Signalwörter und die Technik, mit der du Nachfragen souverän beantwortest.',
    },
  ],
}
