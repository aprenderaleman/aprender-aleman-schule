// Lektion 07 · Erweiterte Partizipialattribute
//
// Estándar de 8 secciones — véase docs/deutschc1/FORMAT.md y lektion-03.js (modelo)

export default {
  spec: ['Bloque 1', 'Sprachliche Konsolidierung', 'Niveau C1', 'Prüfungsrelevanz: Lesen Teil 1-2 · Schreiben'],
  h1: 'Erweiterte Partizipialattribute',
  lead: 'Ein ganzer Relativsatz, eingeklemmt zwischen Artikel und Nomen: die Konstruktion, die wissenschaftliche Texte so dicht macht — und die du im Lesen sekundenschnell entschlüsseln musst.',

  content: [
    // ── 2. Lernziele ──────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'Am Ende kannst du Partizip I und Partizip II als Attribut korrekt deuten: aktiv-gleichzeitig oder passiv-abgeschlossen.',
        'Du löst erweiterte Attribute (*der von vielen Experten kritisierte Bericht*) in Relativsätze auf — und baust umgekehrt Relativsätze zu Attributen um.',
        'Du beherrschst das Gerundivum *zu + Partizip I* (*die zu lösenden Probleme*) und seine Bedeutung müssen/können.',
        'Du liest dichte Sachtexte schneller, weil du die Klammer Artikel … Nomen sofort erkennst.',
      ],
    },

    { type: 'rule' },

    // ── 3. Kernwortschatz ─────────────────────────────────────────
    {
      type: 'wortschatz',
      eyebrow: 'Kernwortschatz',
      items: [
        { wort: 'vorliegend', kollokation: 'die vorliegende Studie', es: 'el presente (estudio, informe)' },
        { wort: 'betreffend', kollokation: 'die betreffenden Personen', es: 'en cuestión, afectado' },
        { wort: 'entsprechend', kollokation: 'entsprechende Maßnahmen ergreifen', es: 'correspondiente, oportuno' },
        { wort: 'geltend', kollokation: 'nach geltendem Recht', es: 'vigente' },
        { wort: 'sogenannt', kollokation: 'der sogenannte Fachkräftemangel', es: 'llamado, denominado' },
        { wort: 'anstehend', kollokation: 'die anstehenden Reformen', es: 'pendiente, próximo' },
        { wort: 'zunehmend', kollokation: 'von zunehmender Bedeutung', es: 'creciente' },
        { wort: 'bevorstehend', kollokation: 'die bevorstehende Prüfung', es: 'inminente' },
        { wort: 'umstritten', kollokation: 'eine höchst umstrittene These', es: 'controvertido' },
        { wort: 'veröffentlichen', kollokation: 'eine kürzlich veröffentlichte Untersuchung', es: 'publicar' },
        { wort: 'erwähnen', kollokation: 'der bereits erwähnte Aspekt', es: 'mencionar' },
        { wort: 'das Attribut', kollokation: 'ein erweitertes Attribut auflösen', es: 'atributo, complemento del nombre' },
        { wort: 'auflösen', kollokation: 'eine Konstruktion in einen Nebensatz auflösen', es: 'deshacer, transformar' },
      ],
      hinweis: 'Die ersten acht sind **lexikalisierte Partizipien** — im Sachtext so häufig, dass du sie wie normale Adjektive lernen solltest. *Die vorliegende Studie* und *nach geltendem Recht* gehören zum Grundinventar jedes Lesetexts auf C1.',
    },

    { type: 'rule' },

    // ── 4. Erklärung ──────────────────────────────────────────────
    {
      type: 'prose',
      eyebrow: 'Erklärung',
      card: true,
      titel: 'Die Klammer vor dem Nomen',
      absaetze: [
        'Das Deutsche kann einen kompletten Relativsatz **vor** das Nomen packen: *der Bericht, der von vielen Experten scharf kritisiert wurde* → *der **von vielen Experten scharf kritisierte** Bericht*. Zwischen Artikel und Nomen entsteht eine Klammer, in der alles Platz hat, was das Partizip regiert: Agens, Adverbien, Objekte, Orts- und Zeitangaben.',
        'Lesestrategie in drei Schritten: **1.** Artikel finden, dem kein Nomen folgt. **2.** Zum Nomen springen — es kommt direkt nach dem Partizip. **3.** Die Mitte als eigenen Satz lesen. ~~El español pone todo esto DETRÁS del nombre („el informe duramente criticado por muchos expertos“); el alemán lo pone delante — por eso el artículo parece „huérfano“ hasta que llega el nombre. No te detengas: salta al nombre y vuelve.~~',
      ],
    },

    {
      type: 'steps',
      eyebrow: 'Erklärung — Die vier Typen',
      steps: [
        {
          badge: 'Partizip I',
          titel: 'Partizip I — aktiv und gleichzeitig',
          text: 'Infinitiv + __-d__, dekliniert wie ein Adjektiv: *die **steigenden** Preise* = *die Preise, die **steigen***. Das Nomen **tut** etwas, und zwar jetzt gerade. ~~No equivale al gerundio español como forma verbal: „los precios subiendo“ no existe — aquí es un adjetivo pleno.~~',
        },
        {
          badge: 'Partizip II',
          titel: 'Partizip II transitiv — passiv und abgeschlossen',
          text: 'Bei transitiven Verben bedeutet das Attribut ein **Passiv**: *der **kritisierte** Bericht* = *der Bericht, der **kritisiert wurde/worden ist*** — oder Zustandspassiv: *die **geschlossene** Tür* = *die Tür, die geschlossen **ist***.',
        },
        {
          badge: 'P II intransitiv',
          titel: 'Partizip II intransitiv — aktiv und vollzogen',
          text: 'Bei intransitiven Verben mit **sein-Perfekt** ist die Bedeutung **aktiv**: *die **angekommenen** Gäste* = *die Gäste, die angekommen **sind***; *das **gescheiterte** Projekt* = *das Projekt, das gescheitert **ist***. Kein Passiv — es gibt ja kein Objekt.',
        },
        {
          badge: 'zu + P I',
          titel: 'Gerundivum — zu + Partizip I',
          text: '__zu__ + Partizip I bedeutet **müssen** oder **können** im Passiv: *die **zu lösenden** Probleme* = *die Probleme, die gelöst werden **müssen*** = *die Probleme, die **zu lösen sind***. Das ist die attributive Schwester von *sein + zu* aus Lektion 4. Bei trennbaren Verben wandert *zu* hinein: *die **einzureichenden** Unterlagen*.',
        },
      ],
    },

    {
      type: 'tabelle',
      eyebrow: 'Erklärung — Attribut ↔ Relativsatz',
      kopf: ['Attribut', 'Relativsatz', 'Bedeutung'],
      zeilen: [
        ['die steigenden Preise', 'die Preise, die steigen', 'aktiv, gleichzeitig'],
        ['der kritisierte Bericht', 'der Bericht, der kritisiert wurde', 'passiv, abgeschlossen'],
        ['die angekommenen Gäste', 'die Gäste, die angekommen sind', 'aktiv, vollzogen (sein-Perfekt)'],
        ['die zu lösenden Probleme', 'die Probleme, die gelöst werden müssen', 'passivische Notwendigkeit'],
        ['die zu erwartende Kritik', 'die Kritik, die zu erwarten ist', 'passivische Möglichkeit/Erwartung'],
      ],
    },

    {
      type: 'prose',
      card: true,
      titel: 'Die Erweiterung — und das richtige Maß beim Schreiben',
      absaetze: [
        'Erweitert wird nach links: Alles, was im Relativsatz zwischen Pronomen und Verb steht, rückt vor das Partizip — in derselben Reihenfolge. *Der Bericht, der **letzte Woche von einer unabhängigen Kommission** veröffentlicht wurde* → *der **letzte Woche von einer unabhängigen Kommission veröffentlichte** Bericht*. Das Agens erscheint mit **von**, das Partizip trägt die normale **Adjektivendung**.',
        'Im **Lesen** ist das eine Entschlüsselungskompetenz; im **Schreiben** ein Gewürz: **Ein** gut gebautes erweitertes Attribut pro Text zeigt Souveränität (*die im letzten Absatz genannten Argumente*). Mehr als zwei wirken gestelzt — der Relativsatz bleibt oft die klarere Wahl.',
      ],
    },

    { type: 'rule' },

    // ── 5. Beispiele ──────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele — nach Typ',
      kicker: 'Partizip I',
      titel: 'Aktiv und gleichzeitig',
      items: [
        { text: 'Die **wachsende** Zahl der Studierenden stellt die Universitäten vor Probleme.', gl: '= die Zahl, die wächst' },
        { text: 'Für Pendler ist der **stetig zunehmende** Verkehr eine tägliche Belastung.' },
        { text: 'Die **an dem Projekt arbeitenden** Fachleute kommen aus fünf Ländern.', gl: '= die Fachleute, die an dem Projekt arbeiten' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'Partizip II',
      titel: 'Abgeschlossen — passiv oder vollzogen',
      items: [
        { text: 'Das **geplante** Einkaufszentrum stößt auf Widerstand.', gl: '= das Zentrum, das geplant wird/worden ist' },
        { text: 'Die **im Jahr 2020 eingeführte** Regelung gilt bis heute.' },
        { text: 'Die **zu spät eingetroffenen** Teilnehmer mussten draußen warten.', gl: '= die Teilnehmer, die zu spät eingetroffen sind — aktiv!' },
        { text: 'Das **an mangelnder Finanzierung gescheiterte** Vorhaben wird nun neu aufgelegt.' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'erweitert',
      titel: 'Die volle Klammer',
      items: [
        { text: 'Der **von vielen Experten scharf kritisierte** Bericht wurde zurückgezogen.', gl: '= der Bericht, der von vielen Experten scharf kritisiert wurde' },
        { text: 'Die **seit Jahren von der Forschung geforderte** Reform lässt weiter auf sich warten.' },
        { text: 'Ein **erst kürzlich in Deutschland zugelassenes** Medikament weckt große Hoffnungen.', gl: '— Lies: Artikel *Ein* … springe zu *Medikament* … dann die Mitte' },
        { text: 'Die **durch den Sturm beschädigten und noch nicht reparierten** Leitungen bleiben abgeschaltet.', gl: '— auch zwei Partizipien können sich eine Klammer teilen' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'Gerundivum',
      titel: 'zu + Partizip I',
      items: [
        { text: 'Die **zu erledigenden** Aufgaben stehen auf der Liste.', gl: '= die Aufgaben, die erledigt werden müssen' },
        { text: 'Die **bis Freitag einzureichenden** Unterlagen finden Sie im Anhang.', gl: '— trennbares Verb: ein**zu**reichend' },
        { text: 'Der **nicht zu unterschätzende** Aufwand spricht gegen diese Lösung.', gl: '= der Aufwand, der nicht unterschätzt werden darf/kann' },
        { text: 'Die **von der Kommission noch zu prüfenden** Anträge liegen seit Wochen bereit.', gl: '— auch das Gerundivum lässt sich erweitern: Agens + Adverb in der Klammer' },
      ],
    },

    { type: 'rule' },

    // ── 6. Übungen ────────────────────────────────────────────────
    {
      type: 'uebung',
      eyebrow: 'Anwendung — Übung 1 · Erkennen',
      frage: 'Markiere das Partizipialattribut, nenne sein Bezugsnomen und bestimme den Typ (P I, P II passiv, P II aktiv-vollzogen, Gerundivum).',
      aufgaben: [
        'Die im Bericht genannten Zahlen stammen aus dem Vorjahr.',
        'Die noch zu klärenden Fragen betreffen vor allem die Finanzierung.',
        'Der seit Monaten andauernde Streik legt den Verkehr lahm.',
        'Die aus dem Ausland zurückgekehrten Fachkräfte finden schnell Arbeit.',
        'Nach geltendem Recht ist dieses Vorgehen zulässig.',
      ],
      loesungen: [
        '*im Bericht genannten* → **Zahlen**; **P II passiv**: die Zahlen, die im Bericht genannt werden.',
        '*noch zu klärenden* → **Fragen**; **Gerundivum**: die Fragen, die noch geklärt werden müssen.',
        '*seit Monaten andauernde* → **Streik**; **P I**: der Streik, der seit Monaten andauert.',
        '*aus dem Ausland zurückgekehrten* → **Fachkräfte**; **P II aktiv-vollzogen**: die Fachkräfte, die zurückgekehrt sind (*zurückkehren* bildet das Perfekt mit *sein*).',
        '*geltendem* → **Recht**; **P I**, lexikalisiert: das Recht, das gilt.',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 2 · Umformen',
      frage: 'Aufgaben 1-3: Löse das Attribut in einen Relativsatz auf. Aufgaben 4-6: Baue den Relativsatz zum Partizipialattribut um.',
      aufgaben: [
        'Die von der Regierung angekündigten Steuersenkungen bleiben aus.',
        'Die auf dem Kongress diskutierten Ergebnisse werden bald veröffentlicht.',
        'Die dringend zu sanierenden Schulen stehen auf einer Prioritätenliste.',
        'Der Vortrag, der gestern von einer bekannten Klimaforscherin gehalten wurde, war ausgebucht.',
        'Die Kosten, die ständig steigen, gefährden das Projekt.',
        'Die Anträge, die bis Monatsende bearbeitet werden müssen, stapeln sich.',
      ],
      loesungen: [
        'Die Steuersenkungen, **die von der Regierung angekündigt wurden**, bleiben aus.',
        'Die Ergebnisse, **die auf dem Kongress diskutiert wurden**, werden bald veröffentlicht.',
        'Die Schulen, **die dringend saniert werden müssen**, stehen auf einer Prioritätenliste. ~~El Gerundivum esconde un „deber ser“: no lo traduzcas como simple pasiva.~~',
        'Der **gestern von einer bekannten Klimaforscherin gehaltene** Vortrag war ausgebucht.',
        'Die **ständig steigenden** Kosten gefährden das Projekt.',
        'Die **bis Monatsende zu bearbeitenden** Anträge stapeln sich.',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 3 · Produzieren',
      frage: 'Verbinde jedes Satzpaar zu **einem** Satz mit erweitertem Partizipialattribut. Entscheide selbst, welcher Satz zum Attribut wird.',
      aufgabe: '*1. Eine Studie wurde letzte Woche veröffentlicht. Die Studie sorgt für Diskussionen.*\n*2. Immer mehr Beschäftigte arbeiten im Homeoffice. Diese Beschäftigten wünschen sich klarere Regeln.*\n*3. Mehrere Probleme müssen noch gelöst werden. Die Probleme betreffen den Datenschutz.*',
      loesung: '**Mögliche Lösung** (Wortstellung in der Klammer kann leicht variieren):\n*1. Die **letzte Woche veröffentlichte** Studie sorgt für Diskussionen.*\n*2. Die **im Homeoffice arbeitenden** Beschäftigten wünschen sich klarere Regeln.*\n*3. Die **noch zu lösenden** Probleme betreffen den Datenschutz.*\nGültig ist auch die Gegenrichtung mit Relativsatz — aber die Aufgabe verlangt das Attribut. Prüfe zum Schluss immer die **Adjektivendung** des Partizips: Sie richtet sich nach Artikel, Genus und Kasus des Bezugsnomens.',
    },

    { type: 'rule' },

    // ── 7. Prüfungsbezug ──────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Lesen · Teil 1 · Sachtext',
      titel: 'Mini-Aufgabe · Dichte entschlüsseln',
      anweisung: 'Im Lesen entscheidet oft ein einziges Partizipialattribut darüber, ob eine Aussage richtig oder falsch ist. Lies den Absatz und entscheide für jede Aussage: richtig oder falsch?',
      absaetze: [
        'Die von einem internationalen Forschungsteam über zehn Jahre hinweg erhobenen Daten zeichnen ein differenziertes Bild: Während die in Ballungsräumen lebende Bevölkerung ihre Alltagswege zunehmend mit dem Rad zurücklegt, bleibt das Auto in ländlichen Regionen das dominierende Verkehrsmittel. Die von der Politik zu ziehenden Konsequenzen liegen für die Autoren auf der Hand: Der weiter auszubauende Nahverkehr dürfe sich nicht auf die Großstädte beschränken.',
      ],
      optionen: [
        '1. Das Forschungsteam hat die Daten innerhalb eines Jahres erhoben.',
        '2. Menschen in Großstädten fahren immer häufiger mit dem Rad.',
        '3. Die Politik hat die Konsequenzen aus der Studie bereits gezogen.',
      ],
      loesungen: [
        '{1} **Falsch** — *die über zehn Jahre hinweg erhobenen Daten*: Die Zeitangabe steckt in der Klammer.',
        '{2} **Richtig** — *die in Ballungsräumen lebende Bevölkerung* = die Bevölkerung, die in Ballungsräumen lebt; *zunehmend* bestätigt „immer häufiger“.',
        '{3} **Falsch** — *die zu ziehenden Konsequenzen* ist ein Gerundivum: Sie **müssen erst noch** gezogen werden. Wer das Attribut als Vergangenheit liest, tappt genau in die gestellte Falle.',
      ],
      kommentar: 'Strategie: Bei jeder richtig/falsch-Aussage zum Detail lohnt der Blick in die Klammer — **Zeitangaben, Agens und das kleine *zu*** verstecken sich dort. Ein Gerundivum bedeutet immer Zukunft/Notwendigkeit, nie Abgeschlossenheit.',
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Trainiere die Auflösung als Reflex: Artikel ohne Nomen → **zum Nomen springen**, Mitte als Satz lesen. Im **Schreiben** genügt ein einziges gut sitzendes Attribut (*die oben genannten Gründe*, *die zu erwartenden Kosten*) als Strukturen-Beweis. Und merke: **zu + Partizip I = muss/kann noch geschehen** — der Lückentext und die richtig/falsch-Aufgaben leben von genau dieser Verwechslungsgefahr.',
    },

    { type: 'rule' },

    // ── 8. Abschluss ──────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Das bleibt', 'Beispiel'],
      zeilen: [
        ['P I = aktiv, gleichzeitig', 'die steigenden Preise = Preise, die steigen'],
        ['P II transitiv = passiv, abgeschlossen', 'der kritisierte Bericht = wurde kritisiert'],
        ['P II intransitiv (sein) = aktiv, vollzogen', 'die angekommenen Gäste = sind angekommen'],
        ['zu + P I = muss/kann + Passiv', 'die zu lösenden Probleme = müssen gelöst werden'],
        ['Erweiterung füllt die Klammer Artikel…Nomen', 'der von Experten scharf kritisierte Bericht'],
        ['Lesen: Artikel → Nomen → Mitte als Satz', 'Ein … Medikament … erst kürzlich zugelassen'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich bestimme bei jedem Partizipialattribut, ob es aktiv, passiv oder notwendig-passivisch (Gerundivum) zu lesen ist.',
        'Ich löse erweiterte Attribute flüssig in Relativsätze auf — auch bei langen Klammern.',
        'Ich baue umgekehrt einen Relativsatz in ein korrekt dekliniertes Attribut um.',
        'Ich setze im eigenen Text höchstens ein bis zwei erweiterte Attribute gezielt ein.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Partizipialattribute verdichten ganze Sätze zu einer Nominalgruppe — ganz im Geist des Nominalstils. Die nächste Lektion bleibt in diesem Register und nimmt sich die **Funktionsverbgefüge** vor: feste Verb-Nomen-Verbindungen wie *eine Entscheidung treffen* oder *zur Verfügung stellen*, die formelle Texte prägen und die man nicht wörtlich übersetzen darf.',
    },
  ],
}
