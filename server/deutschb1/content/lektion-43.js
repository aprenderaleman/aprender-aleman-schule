// Lektion 43 · Prüfungssimulation 2 + Strategien
//
// Bloque 4 «Prüfungssimulation» — segundo simulacro y CIERRE DEL CURSO B1.
// Las Übungen son el simulacro (Lesen Teil 2 · Sprechen-Präsentation ·
// Schreiben Teil 3); el Prüfungsbezug es el plan de los últimos 7 días +
// checklist del día del examen; el Abschluss es especial de fin de curso
// (Reparatur-Plan con lecciones reales, Selbstcheck global, despedida).

export default {
  spec: ['Bloque 4', 'Prüfungssimulation', 'Niveau B1', 'Prüfungsrelevanz: alle vier Module'],
  h1: 'Prüfungssimulation 2 + Strategien',
  lead: 'Die letzte Lektion: eine zweite Generalprobe — diesmal mit Sprechen —, der Plan für die letzten sieben Tage und die Checkliste für den Prüfungstag.',

  content: [
    // ── Lernziele ─────────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'eine zweite Simulation machen: Anzeigen zuordnen, Präsentation, formelle E-Mail',
        'eine Präsentation vorbereiten und wahrscheinliche Fragen des Partners antizipieren',
        'die letzten sieben Tage vor der Prüfung Tag für Tag planen',
        'wissen, welche Lektion du bei welchem Fehler wiederholst — und wie es nach dem B1 weitergeht',
      ],
    },

    { type: 'rule' },

    // ── Kernwortschatz: der Prüfungstag ───────────────────────────
    {
      type: 'wortschatz',
      eyebrow: 'Kernwortschatz — der Prüfungstag',
      items: [
        { wort: 'die Anmeldung, -en', kollokation: 'die Anmeldung rechtzeitig machen', es: 'la inscripción' },
        { wort: 'der Ausweis, -e', kollokation: 'den Ausweis oder Pass mitbringen', es: 'el documento de identidad' },
        { wort: 'die Aufsicht', kollokation: 'auf die Aufsicht hören', es: 'la persona que vigila el examen' },
        { wort: 'pünktlich', kollokation: 'pünktlich am Prüfungszentrum sein', es: 'puntual' },
        { wort: 'die Checkliste, -n', kollokation: 'die Checkliste am Vorabend prüfen', es: 'la lista de control' },
        { wort: 'die Kopfhörer (Pl.)', kollokation: 'die Kopfhörer vor dem Hören testen', es: 'los auriculares' },
        { wort: 'die Prüfungsangst', kollokation: 'mit Prüfungsangst umgehen', es: 'los nervios ante el examen' },
        { wort: 'wiederholen', kollokation: 'die Redemittel noch einmal wiederholen', es: 'repasar' },
        { wort: 'sich ausruhen', kollokation: 'sich am Tag davor ausruhen', es: 'descansar' },
        { wort: 'schaffen', kollokation: 'Du schaffst das!', es: 'lograrlo, conseguirlo' },
        { wort: 'der Erfolg', kollokation: 'viel Erfolg bei der Prüfung!', es: 'el éxito' },
      ],
      hinweis: 'Die wichtigste Zahl zum Schluss: **60 von 100** pro Modul — und jedes Modul kannst du **einzeln** wiederholen. ~~No necesitas la perfección: necesitas 60 puntos.~~',
    },

    { type: 'rule' },

    // ── Erklärung: die zweite Generalprobe ────────────────────────
    {
      type: 'prose',
      eyebrow: 'Erklärung — was diesmal anders ist',
      card: true,
      titel: 'Näher am Ernstfall',
      absaetze: [
        'Die zweite Simulation rückt näher an den Prüfungstag: Diesmal übst du auch das **Sprechen** — laut, am Stück, mit Partner oder Handy-Aufnahme. Und wenn du kannst, simulierst du den **ganzen Tag am Stück**, mit Pausen, wie unten im Ablauf.',
        'Nimm deine **Fehlerliste aus Lektion 42** als Kompass: Lies vor dem Start deine zwei häufigsten Fehler noch einmal durch, und korrigiere danach wieder mit der Vier-Kriterien-Rubrik. ~~La segunda pasada mide tu progreso: compárala con la lección 42, no con la perfección.~~',
      ],
    },
    {
      type: 'steps',
      eyebrow: 'Erklärung — der Prüfungstag als Ablauf',
      steps: [
        {
          badge: 'Block 1',
          titel: 'Lesen — 65 Minuten',
          text: 'Frisch beginnen, __Zeit pro Teil im Blick behalten__ — nicht in einem Text „wohnen bleiben“.',
        },
        {
          badge: 'Pause',
          titel: '10–15 Minuten',
          text: 'Aufstehen, Wasser trinken, __nicht über die Lösungen grübeln__.',
        },
        {
          badge: 'Block 2',
          titel: 'Hören — ca. 40 Minuten',
          text: 'Aufgaben __vor__ dem Hören lesen; ein verpasstes Item sofort loslassen — sonst verlierst du auch das nächste.',
        },
        {
          badge: 'Block 3',
          titel: 'Schreiben — 60 Minuten',
          text: 'Empfohlene Teilung: __20 + 25 + 15 Minuten__ für E-Mail, Forumsbeitrag und formelle E-Mail — mit Mini-Korrektur am Ende.',
        },
        {
          badge: 'Extra',
          titel: 'Sprechen — an einem anderen Tag',
          text: 'Wie oft in der echten Prüfung: __ein separater Termin__. Präsentation laut halten, aufnehmen, anhören.',
        },
      ],
    },

    { type: 'rule' },

    // ── Beispiele: Strategien im Einsatz ──────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele — wenn es klemmt',
      kicker: 'Lesen & Hören',
      titel: 'Ruhig bleiben, weitermachen',
      items: [
        { text: '**Ein unbekanntes Wort blockiert dich.** → Weiterlesen. Keine Aufgabe hängt an einem einzigen Wort.' },
        { text: '**Beim Hören etwas verpasst.** → Sofort loslassen und zur nächsten Aufgabe.', gl: '— el audio no espera; tu cabeza va siempre delante' },
        { text: '**Du bist unsicher.** → Trotzdem ankreuzen. Es gibt keine Minuspunkte.' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'Schreiben & Sprechen',
      titel: 'Einfach lösen statt perfekt scheitern',
      items: [
        { text: '**Ein Wort fällt dir nicht ein.** → Umschreiben: *das Ding, mit dem man schreibt* ist besser als ein spanisches Wort.' },
        { text: '**Blackout in der Präsentation.** → Zeit gewinnen: „Dazu gebe ich ein Beispiel …“ — beim Sprechen sortiert sich der Kopf.' },
        { text: '**Frage nicht verstanden.** → Höflich nachfragen: „Können Sie das bitte wiederholen?“ — das kostet keine Punkte.', gl: '— pedir que repitan con educación puntúa; responder a otra pregunta, no' },
      ],
    },

    { type: 'rule' },

    // ── Übungen = die Simulation ──────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Anwendung — Übung 1 · Lesen',
      modul: 'Lesen · Teil 2 · Anzeigen zuordnen (empfohlen: 10 Minuten)',
      titel: 'Simulation · 4 Personen, 6 Anzeigen',
      anweisung: 'Welche Anzeige passt zu welcher Person? Jede Person passt zu **genau einer** Anzeige; zwei Anzeigen bleiben übrig. Timer auf 10 Minuten.',
      absaetze: [
        '**Die Personen:**\n1. Ana arbeitet bis 18 Uhr und möchte danach Deutsch lernen.\n2. Jorge sucht eine günstige Wohnung mit zwei Zimmern.\n3. Marta möchte am Wochenende mit anderen zusammen Sport machen.\n4. Luis braucht ein Fahrrad, hat aber wenig Geld.',
        '**Die Anzeigen:**\n**a)** Intensivkurs Deutsch B1 — jeden Vormittag von 9 bis 12 Uhr, kleine Gruppen, Start jeden Monat.\n**b)** Volkshochschule: Deutsch B1 am Abend — dienstags und donnerstags, 19 bis 21 Uhr, Einstieg jederzeit möglich.\n**c)** Vermiete 2-Zimmer-Wohnung, 58 m², ruhige Lage, nur 450 Euro warm — direkt vom Eigentümer.\n**d)** Fahrrad-Center Lindenfeld: große Auswahl an neuen Rädern ab 599 Euro, Finanzierung möglich.\n**e)** Verkaufe mein Damenrad, drei Jahre alt, guter Zustand, neue Bremsen — für nur 80 Euro.\n**f)** Lauftreff im Stadtpark — jeden Samstag um 10 Uhr, alle Niveaus willkommen, kostenlos.',
      ],
      optionen: [
        '1. Ana → ?',
        '2. Jorge → ?',
        '3. Marta → ?',
        '4. Luis → ?',
      ],
      loesungLabel: 'Lösung mit Begründung',
      loesungen: [
        '1. **b** — Ana kann erst **nach 18 Uhr**: „am Abend … 19 bis 21 Uhr“. Falle a: Der Intensivkurs ist am **Vormittag** — da arbeitet sie.',
        '2. **c** — „2-Zimmer-Wohnung … nur 450 Euro“: zwei Zimmer und günstig.',
        '3. **f** — „jeden **Samstag** … Lauftreff“: Sport, in der Gruppe, am Wochenende.',
        '4. **e** — „drei Jahre alt … für nur 80 Euro“: gebraucht und billig. Falle d: neue Räder „ab 599 Euro“ — zu teuer für Luis.',
        'Übrig bleiben **a** und **d** — die beiden Anzeigen, die fast passen, aber eine Bedingung verfehlen: die Uhrzeit oder den Preis.',
      ],
      kommentar: 'Die Methode für Teil 2: Markiere in jeder Situation das **Schlüsselwort** (abends, günstig, Wochenende, wenig Geld) und such in den Anzeigen das **Synonym**. Die Falsch-Anzeigen sehen ähnlich aus — aber ein Detail passt nicht.',
    },

    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Übung 2 · Sprechen',
      modul: 'Sprechen · Teil 2 · Präsentation (ca. 3 Minuten)',
      titel: 'Simulation · Präsentation vorbereiten und halten',
      anweisung: 'Bereite die Präsentation mit Stichwörtern vor — schreib **keine ganzen Sätze** auf den Zettel. Halte sie dann **laut und am Stück**, mit Partner oder Handy-Aufnahme.',
      absaetze: [
        '**Thema: „Einkaufen im Internet — gut oder schlecht?“** Präsentiere das Thema (ca. 3 Minuten): Stelle das Thema vor, berichte von deinen Erfahrungen und von der Situation in deinem Heimatland, nenne Vor- und Nachteile und sag deine Meinung. Bedanke dich am Schluss.',
      ],
      loesungLabel: 'Musterleitfaden (Stichpunkte für den Zettel)',
      loesungen: [
        '**Einstieg:** „Ich möchte heute über das Thema Einkaufen im Internet sprechen.“',
        '**Meine Erfahrungen:** Kleidung und Bücher online, Lebensmittel im Supermarkt — ein konkretes Beispiel erzählen.',
        '**Mein Heimatland:** „In meinem Heimatland bestellen besonders junge Leute viel online …“',
        '**Vorteile:** bequem, oft billiger, man kann rund um die Uhr einkaufen.',
        '**Nachteile:** man kann nichts anprobieren, viele Pakete gehen zurück, kleine Geschäfte verlieren Kunden.',
        '**Meinung + Schluss:** „Ich finde Online-Shopping praktisch, aber ich kaufe lieber im Geschäft, weil … — Vielen Dank fürs Zuhören! Habt ihr Fragen?“',
      ],
      kommentar: 'Hör dir die Aufnahme mit der Rubrik im Kopf an: alle Teile behandelt (Erfüllung)? Überleitungen (Kohärenz)? Wiederholungen vermieden (Wortschatz)? Auch *weil*-Sätze gebaut (Strukturen)? Dazu kommt beim Sprechen die **Aussprache** — verständlich zählt, nicht akzentfrei.',
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 2 · Sprechen — Fragen antizipieren',
      frage: 'Nach der Präsentation stellen dir Partner und Prüfer Fragen (Teil 3). Bereite auf jede der drei wahrscheinlichen Fragen eine Antwort mit zwei bis drei Sätzen vor und sprich sie laut.',
      aufgaben: [
        'Kaufst du selbst oft im Internet ein?',
        'Was kauft man deiner Meinung nach besser im Geschäft?',
        'Ist Online-Shopping in deinem Heimatland auch so beliebt?',
      ],
      loesungLabel: 'Mögliche Antworten (Kurzform)',
      loesungen: [
        '„Ja, ungefähr einmal im Monat. Ich bestelle vor allem Bücher, weil sie online oft billiger sind. Kleidung kaufe ich lieber im Geschäft.“',
        '„Schuhe und Kleidung, weil man sie anprobieren muss. Auch frische Lebensmittel kaufe ich lieber selbst — ich möchte das Obst sehen.“',
        '„Ja, besonders in den großen Städten. Auf dem Land ist es schwieriger, weil die Pakete länger brauchen.“ ~~Adapta el contenido a tu experiencia — pero copia la estructura: respuesta + weil + ejemplo.~~',
      ],
    },

    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Übung 3 · Schreiben',
      modul: 'Schreiben · Teil 3 · Formelle E-Mail (~40 Wörter, empfohlen: 15 Minuten)',
      titel: 'Simulation · Formelle E-Mail',
      anweisung: 'Tippe am Computer, Timer auf 15 Minuten. Achte auf **Anrede, höfliches Register und Grußformel** — genau das prüft Teil 3. Korrigiere danach mit der Rubrik aus Lektion 42.',
      absaetze: [
        'Sie haben am Donnerstag einen Termin bei Ihrer Vermieterin, Frau Weber. Sie können aber nicht kommen. Schreiben Sie eine E-Mail (ca. 40 Wörter): **Entschuldigen Sie sich höflich** · **nennen Sie den Grund** · **bitten Sie um einen neuen Termin**.',
      ],
      loesungLabel: 'Mögliche Lösung (genau 40 Wörter)',
      loesungen: [
        'Sehr geehrte Frau Weber,',
        'leider kann ich am Donnerstag nicht zu unserem Termin kommen, weil ich arbeiten muss. Bitte entschuldigen Sie das. Könnten wir einen neuen Termin finden? Nächste Woche habe ich am Vormittag Zeit.',
        'Mit freundlichen Grüßen\nLuis García',
      ],
      kommentar: 'Registerkontrolle in drei Fragen: richtige **Anrede** (kein „Hallo Frau Weber“)? Höfliche Bitte mit **Könnten Sie / Könnten wir** (Lektion 13)? Vollständige **Grußformel** (kein „LG“)? Ein einziges „Hallo“ verrät das falsche Register.',
    },

    { type: 'rule' },

    // ── Prüfungsbezug: die letzte Woche + der Prüfungstag ─────────
    {
      type: 'tabelle',
      eyebrow: 'Prüfungsbezug — Countdown: die letzten sieben Tage',
      kopf: ['Tag', 'Fokus', 'Konkret'],
      zeilen: [
        ['Tag 7', 'Generalprobe 2', 'diese Simulation komplett — am Stück, mit Pausen, möglichst am Bildschirm'],
        ['Tag 6', 'Korrektur', 'Rubrik anwenden, Fehlerliste aktualisieren, mit Lektion 42 vergleichen'],
        ['Tag 5', 'Schwächstes Modul', 'eine Lektion aus dem Reparatur-Plan (siehe unten) wiederholen'],
        ['Tag 4', 'Schreiben', 'die drei Teile einmal unter Zeit — nur diese 60 Minuten, nicht mehr'],
        ['Tag 3', 'Hören + Sprechen', 'ein Hörtext, danach die Präsentation noch einmal laut — aufnehmen und anhören'],
        ['Tag 2', 'Nur Wiederholung', 'Redemittel, Konnektoren, Fehlerliste — **nichts Neues mehr lernen**'],
        ['Tag 1', 'Ausruhen', 'halber Tag frei, Ausweis und Unterlagen richten, früh schlafen'],
      ],
    },
    {
      type: 'steps',
      eyebrow: 'Prüfungsbezug — Checkliste für den Prüfungstag',
      steps: [
        {
          badge: 'Vorabend',
          titel: 'Alles bereitlegen',
          text: '__Ausweis__, Anmeldebestätigung, Wasser, Snack. Weg zum Prüfungszentrum prüfen — mit Zeitpuffer.',
        },
        {
          badge: 'Morgens',
          titel: 'Routine statt Panik',
          text: 'Normal frühstücken, __nichts mehr lernen__ außer den zwei obersten Punkten der Fehlerliste. Früh losfahren.',
        },
        {
          badge: 'Vor Ort',
          titel: 'Ankommen — auch technisch',
          text: '30 Minuten vorher da sein, Handy abgeben, auf die Aufsicht hören. Im digitalen Format: __Kopfhörer testen__ — du kennst das alles aus Lektion 2.',
        },
        {
          badge: 'Während',
          titel: 'Modul für Modul',
          text: 'Was abgegeben ist, ist abgegeben — __in der Pause wird nicht verglichen__, auch nicht mit anderen Kandidaten.',
        },
        {
          badge: 'Danach',
          titel: 'Loslassen',
          text: 'Nicht grübeln: bestanden ab __60 von 100 pro Modul__ — und im schlimmsten Fall wiederholst du nur ein einzelnes Modul, nie alles.',
        },
      ],
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Die beste Medizin gegen Prüfungsangst ist Mathematik: Du brauchst **60 Punkte, nicht 100**. Du darfst Fehler machen und trotzdem bestehen. Wer um Perfektion kämpft, wird nervös; wer um 60 Punkte spielt, bleibt ruhig — und holt am Ende meist viel mehr.',
    },

    { type: 'rule' },

    // ── Abschluss: Kursende ───────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung — dein Reparatur-Plan',
      kopf: ['Wenn dieser Fehler bleibt …', 'dann wiederhole …'],
      zeilen: [
        ['Verbstellung nach weil, obwohl, deshalb', 'Lektionen 4–5 (Konnektoren)'],
        ['Perfekt mit haben oder sein, Präteritum', 'Lektionen 6–7'],
        ['Wo?/Wohin?, Verben mit Präpositionen', 'Lektionen 8–9'],
        ['Adjektivendungen, Vergleiche', 'Lektionen 10–11'],
        ['Relativsätze, höfliche Bitten, Passiv & Co.', 'Lektionen 12–17'],
        ['Zeitnot oder Ratlosigkeit im Lesen', 'Lektionen 18–22 (Modul Lesen)'],
        ['Details im Hören verpasst', 'Lektionen 23–25 (Modul Hören)'],
        ['Schreiben: Aufbau, Register, Kriterien', 'Lektionen 26–29 + 42 (Schreiben & Selbstkorrektur)'],
        ['Sprechen: Planen, Präsentation, Feedback', 'Lektionen 30–33 (Modul Sprechen)'],
        ['Wortschatz zu einem Thema fehlt', 'Lektionen 34–41 (Themenfelder)'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck — der ganze Kurs',
      items: [
        'Lesen: Ich verstehe Blogs, Anzeigen, Meinungen und formelle Texte und schaffe die fünf Teile in 65 Minuten.',
        'Hören: Ich verstehe Durchsagen, Gespräche und Diskussionen und finde die Hauptinformationen.',
        'Schreiben: Ich schreibe in 60 Minuten die informelle E-Mail, den Forumsbeitrag und die formelle E-Mail im richtigen Register.',
        'Sprechen: Ich plane etwas mit einem Partner, halte eine Präsentation und reagiere auf Fragen.',
        'Ich kenne meine typischen Fehler — und weiß, in welcher Lektion die Reparatur steht.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick — zum Abschluss',
      text: 'Hier endet der Kurs — **43 Lektionen, vier Module, ein Ziel: das Zertifikat B1**. Herzlichen Glückwunsch, dass du bis hierher gekommen bist! Melde dich jetzt zur Prüfung an, solange alles frisch ist — lange Wartezeit ist der Feind der Vorbereitung. Und lass das Deutsche danach nicht wieder los: ein Podcast beim Frühstück, eine Serie auf Deutsch mit Untertiteln, ein Tandempartner — **Immersion** ist ab jetzt dein bester Lehrer. Wenn du weitergehen willst: Auf Aprender-Aleman.de wartet unser **Deutsch-B2-Kurs** (unter /deutschb2) mit demselben System auf dich. Mit B1 kannst du in Deutschland leben, arbeiten und deinen Alltag auf Deutsch führen — **viel Erfolg am Prüfungstag, du schaffst das!**',
    },
  ],
}
