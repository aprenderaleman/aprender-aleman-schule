// Lektion 20 · Lesen: Meinungen zuordnen (Teil 3)
//
// Bloque 2 «Prüfungsstrategie» — tercera lección del módulo Lesen.
// Sigue el canon fijado en lektion-18.js: Teil 3 = mehrere Personen
// äußern ihre Meinung, Aussagen zuordnen, ca. 12 Minuten.

export default {
  spec: ['Bloque 2', 'Prüfungsstrategie', 'Niveau B2', 'Prüfungsrelevanz: Lesen Teil 3'],
  h1: 'Lesen: Meinungen zuordnen',
  lead: 'Teil 3 des Moduls Lesen: Mehrere Personen äußern ihre Meinung, du ordnest Aussagen zu — und die Aussage wiederholt nie die Wörter des Textes.',

  content: [
    // ── Lernziele ─────────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'die Kernmeinung einer Person in wenigen Worten zusammenfassen (pro, contra, teils-teils)',
        'Meinungssprache auf B2-Niveau sicher erkennen: finden, halten für, bezweifeln …',
        'Aussagen über Paraphrasen zuordnen — auch wenn kein einziges Wort übereinstimmt',
      ],
    },

    { type: 'rule' },

    // ── Kernwortschatz ────────────────────────────────────────────
    {
      type: 'wortschatz',
      eyebrow: 'Kernwortschatz — Meinungssprache',
      items: [
        { wort: 'finden', kollokation: 'Ich finde das Modell sinnvoll.', es: 'encontrar, parecer(le a uno)' },
        { wort: 'halten für + Akk.', kollokation: 'Ich halte das für eine gute Idee.', es: 'considerar (algo como)' },
        { wort: 'der Ansicht sein', kollokation: 'Ich bin der Ansicht, dass …', es: 'ser de la opinión' },
        { wort: 'überzeugt sein von + Dat.', kollokation: 'Ich bin von dem Vorschlag überzeugt.', es: 'estar convencido de' },
        { wort: 'bezweifeln', kollokation: 'Ich bezweifle, dass das funktioniert.', es: 'dudar (de que)' },
        { wort: 'befürworten', kollokation: 'Die Mehrheit befürwortet das Modell.', es: 'estar a favor de, apoyar' },
        { wort: 'ablehnen', kollokation: 'Sie lehnt den Vorschlag entschieden ab.', es: 'rechazar' },
        { wort: 'dagegen / dafür sein', kollokation: 'Ich bin grundsätzlich dagegen.', es: 'estar en contra / a favor' },
        { wort: 'zustimmen + Dat.', kollokation: 'Ich stimme ihr in diesem Punkt zu.', es: 'estar de acuerdo con' },
        { wort: 'skeptisch', kollokation: 'Er bleibt skeptisch, was die Kosten angeht.', es: 'escéptico' },
        { wort: 'aus meiner Sicht', kollokation: 'Aus meiner Sicht überwiegen die Vorteile.', es: 'desde mi punto de vista' },
        { wort: 'einerseits … andererseits', kollokation: 'Einerseits praktisch, andererseits teuer.', es: 'por un lado … por otro' },
      ],
      hinweis: '~~Dos trampas para hispanohablantes: *zustimmen* rige dativo („Ich stimme dir zu“, no *stimme dich*), y *halten für* va con acusativo y sin „als“: „Ich halte das für richtig“ — no calques «lo tengo como…».~~',
    },

    { type: 'rule' },

    // ── Erklärung ─────────────────────────────────────────────────
    {
      type: 'prose',
      eyebrow: 'Erklärung — so funktioniert Teil 3',
      absaetze: [
        'In Teil 3 äußern sich **mehrere Personen** kurz zu einem Alltagsthema — wie in einer Leserbrief-Spalte oder einem Online-Forum. Deine Aufgabe: Du bekommst eine Liste von **Aussagen** und ordnest jeder Aussage die passende Person zu. Das genaue Verhältnis von Personen und Aussagen siehst du im **offiziellen Modellsatz**; rechne in der Regel damit, dass eine Person zu **mehr als einer Aussage** passen kann.',
        'Die goldene Regel dieses Teils: **Die Aussage wiederholt nie die Wörter der Person.** Wenn Person und Aussage dasselbe auffällige Wort enthalten, ist das eher ein Warnsignal als ein Beweis. Gesucht wird immer die ==inhaltliche Übereinstimmung== — die Paraphrase.',
      ],
    },
    {
      type: 'steps',
      eyebrow: 'Erklärung — die Methode',
      steps: [
        {
          titel: 'Aussagen zuerst lesen',
          text: 'Lies die Aussagen __vor__ den Texten und fasse jede in zwei, drei eigene Worte: Worum geht es — Kosten? Familie? Machbarkeit?',
        },
        {
          titel: 'Pro Person die Kernmeinung notieren',
          text: 'Lies Person für Person und notiere am Rand: __dafür / dagegen / teils-teils__ plus das Hauptargument. Mehr brauchst du nicht.',
        },
        {
          titel: 'Über den Inhalt zuordnen, nicht über Wörter',
          text: 'Vergleiche deine Notizen mit den Aussagen. Passt die __Idee__? Dann zuordnen — auch wenn kein Wort übereinstimmt.',
        },
        {
          titel: 'Den Rest per Ausschluss lösen',
          text: 'Bleiben am Ende zwei unsichere Aussagen, hilft die Frage: __Welche Person hat dieses Thema überhaupt erwähnt?__ Meist bleibt nur eine übrig.',
        },
      ],
    },

    { type: 'rule' },

    // ── Beispiele ─────────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele — Person ↔ Aussage',
      kicker: 'Paraphrasen',
      titel: 'Dieselbe Meinung, null gemeinsame Wörter',
      items: [
        { text: 'Person: „Ich halte Online-Bewertungen für **unzuverlässig** — viele sind gekauft.“ → Aussage: „Man kann Bewertungen im Internet **nicht immer trauen**.“', gl: '— unzuverlässig ≈ nicht trauen können' },
        { text: 'Person: „**Einerseits** spare ich mit der App Zeit, **andererseits** macht sie mich abhängig.“ → Aussage: „Die App hat **Vor- und Nachteile**.“', gl: '— einerseits/andererseits = teils-teils' },
        { text: 'Person: „Ich **bezweifle**, dass sich daran etwas ändert.“ → Aussage: „Die Person **glaubt nicht** an eine Verbesserung.“', gl: '— bezweifeln = nicht glauben' },
      ],
    },

    { type: 'rule' },

    // ── Übungen ───────────────────────────────────────────────────
    {
      type: 'uebung',
      eyebrow: 'Anwendung — Übung 1 · Erkennen',
      frage: 'Pro, contra oder teils-teils? Bestimme die Haltung.',
      loesungLabel: 'Lösung',
      aufgaben: [
        '„Ich kann dem Vorschlag wenig abgewinnen — er löst das eigentliche Problem nicht.“',
        '„Grundsätzlich eine gute Sache, aber die Umsetzung überzeugt mich noch nicht.“',
        '„Endlich passiert etwas! Ich habe lange auf so eine Regelung gewartet.“',
        '„Ob das klappt? Ich habe da so meine Zweifel.“',
      ],
      loesungen: [
        '**contra** — „wenig abgewinnen können“ = etwas nicht gut finden.',
        '**teils-teils** — Zustimmung im Prinzip („grundsätzlich gut“), Kritik am Detail („aber“).',
        '**pro** — Freude und Ungeduld signalisieren klare Zustimmung.',
        '**skeptisch/contra** — „seine Zweifel haben“ = bezweifeln.',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 2 · Zuordnen im Kleinen',
      frage: 'Welche Aussage passt zu welcher Person? Eine Aussage passt zu niemandem.',
      loesungLabel: 'Lösung',
      aufgaben: [
        '**Person A:** „Seit die Innenstadt autofrei ist, kaufe ich wieder gern dort ein — man hört sogar die Vögel.“ · **Person B:** „Ohne Parkplätze bleiben die Kunden weg; einige Geschäfte haben schon geschlossen.“\n**Aussage 1:** Die Regelung schadet dem Handel. · **Aussage 2:** Das Einkaufen ist angenehmer geworden. · **Aussage 3:** Die Stadt sollte mehr Busse einsetzen.',
      ],
      loesungen: [
        '**Aussage 1 → B** (geschlossene Geschäfte = Schaden für den Handel) · **Aussage 2 → A** („kaufe wieder gern dort ein“ = angenehmer) · **Aussage 3 → niemand**: Busse erwähnt keine der beiden Personen — klassischer Distraktor über plausibles Weltwissen.',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 3 · Produzieren',
      frage: 'Formuliere deine Meinung zum Thema „Hausaufgaben abschaffen?“ dreimal — jedes Mal mit einem anderen Ausdruck aus dem Kernwortschatz.',
      loesungLabel: 'Mögliche Lösung',
      aufgaben: [
        'Nutze z. B. *halten für*, *bezweifeln*, *einerseits … andererseits*.',
      ],
      loesungen: [
        '**Ich halte** Hausaufgaben **für** sinnvoll, wenn sie kurz sind. — **Ich bezweifle**, dass Kinder ohne Übung zu Hause genug lernen. — **Einerseits** kosten Hausaufgaben Freizeit, **andererseits** festigen sie den Stoff. ~~Cualquier contenido vale; lo que se evalúa es la estructura del Meinungsausdruck.~~',
      ],
    },

    { type: 'rule' },

    // ── Prüfungsbezug ─────────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Modul Lesen · Teil 3',
      titel: 'Vier Meinungen, sechs Aussagen — Thema: die Vier-Tage-Woche',
      anweisung: 'Vier Personen äußern sich zur Vier-Tage-Woche. Ordne jeder Aussage (1–6) die passende Person zu. Eine Person kann mehrmals passen. Zeitlimit für die Übung: 10 Minuten.',
      absaetze: [
        '**Katrin, 39, Teamleiterin:** „Wir haben die Vier-Tage-Woche ein Jahr lang getestet, und ich war selbst überrascht: Die Ergebnisse waren besser als vorher. Meine Leute kommen erholter zur Arbeit, sind konzentrierter und verschwenden weniger Zeit in endlosen Meetings. Ich halte das Modell deshalb für einen Gewinn — auch für die Firma. Aus meiner Sicht schafft ein ausgeruhtes Team in vier Tagen schlicht mehr als ein müdes in fünf. Auch die Krankmeldungen sind bei uns spürbar zurückgegangen.“',
        '**Ben, 27, Krankenpfleger:** „Ich finde die Diskussion ehrlich gesagt etwas weltfremd. In meinem Beruf kann man ein Krankenhaus nicht einfach freitags zumachen. Wenn alle nur noch vier Tage arbeiten, brauchen wir noch mehr Personal — und das fehlt jetzt schon. Ich bin nicht grundsätzlich dagegen, aber die Debatte wird von Leuten geführt, die am Schreibtisch sitzen. Für Pflege, Handel oder Gastronomie funktioniert dieses Modell so einfach nicht. Solange niemand erklärt, wer dann die Schichten übernimmt, bleibt das für mich Theorie.“',
        '**Silvia, 52, Unternehmerin:** „Als Chefin eines kleinen Handwerksbetriebs mit acht Angestellten sage ich klar: Für uns rechnet sich das nicht. Die Aufträge verschwinden ja nicht, nur weil ein Arbeitstag wegfällt. Entweder ich stelle zusätzliche Leute ein, die ich bezahlen muss, oder meine Kunden warten noch länger auf ihre Termine. Beides kann ich mir nicht leisten. Große Konzerne mögen solche Experimente verkraften — kleine Betriebe wie meiner nicht. Und es ärgert mich, dass darüber kaum jemand spricht.“',
        '**Tobias, 31, IT-Angestellter:** „Ich bin grundsätzlich dafür — endlich hätte ich mehr Zeit für meine Tochter und für Sport. Aber ich bezweifle, dass es reicht, einfach einen Tag zu streichen. Wenn ich dieselbe Arbeit in vier Tagen schaffen muss, steigt der Druck, und am Ende bin ich gestresster als vorher. Das Modell überzeugt mich nur, wenn auch das Arbeitspensum sinkt. Sonst tauschen wir einen freien Tag gegen vier sehr lange. Meine Firma diskutiert das Modell gerade — genau diesen Punkt spreche ich dort immer wieder an.“',
      ],
      optionen: [
        '(1) Wer gut erholt ist, leistet in kürzerer Zeit mehr.',
        '(2) Für bestimmte Berufsgruppen ist das Modell unrealistisch.',
        '(3) Ein freier Tag allein genügt nicht — auch die Menge der Arbeit muss sinken.',
        '(4) Für kleinere Betriebe ist das Modell wirtschaftlich nicht machbar.',
        '(5) Das Modell verbessert die Balance zwischen Beruf und Privatleben.',
        '(6) Wer etwas in Auftrag gibt, muss möglicherweise länger warten.',
      ],
      loesungLabel: 'Lösung mit Begründung',
      loesungen: [
        '(1) **Katrin** — „ein ausgeruhtes Team schafft in vier Tagen mehr als ein müdes in fünf“ = erholt → mehr Leistung. Reine Paraphrase, kein gemeinsames Wort.',
        '(2) **Ben** — „für Pflege, Handel oder Gastronomie funktioniert das Modell nicht“ = bestimmte Berufsgruppen. Achtung: Ben ist *nicht grundsätzlich dagegen* — teils-teils.',
        '(3) **Tobias** — „überzeugt mich nur, wenn auch das Arbeitspensum sinkt“ = die Arbeitsmenge muss kleiner werden.',
        '(4) **Silvia** — „für uns rechnet sich das nicht … kann ich mir nicht leisten“ = wirtschaftlich nicht machbar.',
        '(5) **Tobias** — „mehr Zeit für meine Tochter und für Sport“ = Beruf und Privatleben besser vereinbaren. Katrin spricht über Leistung, nicht über Privatleben — nicht verwechseln.',
        '(6) **Silvia** — „meine Kunden warten noch länger auf ihre Termine“ = längere Wartezeiten für Auftraggeber.',
      ],
      kommentar: 'Zwei Personen (Silvia, Tobias) passen doppelt, eine Zuordnung war teils-teils (Ben). Genau diese Mischung ist typisch: Wer nur „pro oder contra“ notiert, verliert die feinen Fälle — notiere immer auch das **Hauptargument**.',
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Plane für Teil 3 **ca. 12 Minuten**. Der schnellste Weg: Aussagen zuerst, dann pro Person eine Randnotiz (Haltung + Argument), dann zuordnen. Und misstraue Aussagen, die ein auffälliges Wort aus einem der Texte wiederholen — die inhaltlich richtige Zuordnung teilt fast nie den Wortlaut.',
    },

    { type: 'rule' },

    // ── Abschluss ─────────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Prinzip', 'Konkret'],
      zeilen: [
        ['Reihenfolge', 'Aussagen zuerst lesen, dann die Personen'],
        ['Notiz pro Person', 'dafür / dagegen / teils-teils + Hauptargument'],
        ['Zuordnung', 'über die Idee (Paraphrase), nie über gemeinsame Wörter'],
        ['Warnsignal', 'gleiches auffälliges Wort in Text und Aussage'],
        ['Zeit', 'ca. 12 Min. — Rest per Ausschlussverfahren'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich fasse die Meinung einer Person in wenigen Worten zusammen (Haltung + Argument).',
        'Ich erkenne Meinungssprache wie *halten für*, *bezweifeln*, *befürworten* sofort.',
        'Ich ordne über Paraphrasen zu und misstraue wörtlichen Übereinstimmungen.',
        'Ich erkenne teils-teils-Meinungen an Signalen wie *einerseits … andererseits* und *aber*.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'In Teil 3 sagen die Personen ihre Meinung direkt. In **Teil 4** wird es subtiler: Ein einziger Verfasser schreibt einen **Kommentar** — und seine Haltung versteckt sich in Wertungen, Konnektoren und manchmal in leiser Ironie. Genau das lernst du in der nächsten Lektion zu entschlüsseln.',
    },
  ],
}
