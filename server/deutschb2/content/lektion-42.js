// Lektion 42 · Prüfungssimulation 2 + Strategien
//
// Bloque 4 «Prüfungssimulation» — segundo simulacro y CIERRE DEL CURSO B2.
// Esqueleto de 8 secciones adaptado: las Übungen son el simulacro
// (Lesen Teil 3 · Sprechen-Vortrag · Schreiben Teil 2); el Prüfungsbezug es
// el plan de los últimos 7 días + checklist del día del examen digital
// (enlaza con la Lektion 2); el Abschluss es especial de fin de curso
// (Reparatur-Plan, Selbstcheck global, despedida sin lección siguiente).

export default {
  spec: ['Bloque 4', 'Prüfungssimulation', 'Niveau B2', 'Prüfungsrelevanz: alle vier Module'],
  h1: 'Prüfungssimulation 2 + Strategien',
  lead: 'Die letzte Lektion: eine zweite Generalprobe — diesmal mit Sprechen —, der Plan für die letzten sieben Tage und die Checkliste für den Prüfungstag.',

  content: [
    // ── 2. Lernziele ──────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'Am Ende hast du eine zweite Simulation absolviert — mit Meinungen zuordnen, Vortrag und formeller Nachricht.',
        'Du bereitest einen Sprechen-Vortrag mit Stichwortzettel vor und antizipierst die wahrscheinlichen Nachfragen.',
        'Du planst die letzten sieben Tage vor der Prüfung Tag für Tag — und den Prüfungstag mit einer Checkliste.',
        'Du weißt, welche Lektion du bei welchem hartnäckigen Fehler wiederholst — und wie es nach dem B2 weitergeht.',
      ],
    },

    { type: 'rule' },

    // ── 3. Kernwortschatz: der Prüfungstag ────────────────────────
    {
      type: 'wortschatz',
      eyebrow: 'Kernwortschatz',
      items: [
        { wort: 'die Anmeldung', kollokation: 'die Anmeldung zur Prüfung rechtzeitig erledigen', es: 'la inscripción' },
        { wort: 'der Lichtbildausweis', kollokation: 'einen gültigen Lichtbildausweis mitbringen', es: 'el documento de identidad con foto' },
        { wort: 'die Aufsicht', kollokation: 'den Anweisungen der Aufsicht folgen', es: 'la persona que vigila el examen' },
        { wort: 'die Bearbeitungszeit', kollokation: 'die Bearbeitungszeit im Blick behalten', es: 'el tiempo disponible' },
        { wort: 'das Zeitmanagement', kollokation: 'das Zeitmanagement vorher trainieren', es: 'la gestión del tiempo' },
        { wort: 'der Bildschirm', kollokation: 'die Aufgaben am Bildschirm lesen', es: 'la pantalla' },
        { wort: 'die Kopfhörer (Pl.)', kollokation: 'die Kopfhörer vor dem Hören testen', es: 'los auriculares' },
        { wort: 'die Prüfungsangst', kollokation: 'mit Prüfungsangst umgehen lernen', es: 'la ansiedad ante el examen' },
        { wort: 'die Bestehensgrenze', kollokation: 'die Bestehensgrenze von 60 Punkten kennen', es: 'la nota mínima para aprobar' },
        { wort: 'die Wiederholung', kollokation: 'die Wiederholung einzelner Module', es: 'la repetición (de un módulo)' },
        { wort: 'die Erholung', kollokation: 'am Tag davor bewusste Erholung einplanen', es: 'el descanso' },
        { wort: 'die Zuversicht', kollokation: 'mit Zuversicht in die Prüfung gehen', es: 'la confianza, el optimismo' },
      ],
      hinweis: 'Merk dir die Kollokationen des Prüfungstages als feste Einheiten: *einen Lichtbildausweis **mitbringen***, *den Anweisungen der Aufsicht **folgen***, *die Kopfhörer **testen***. Und die wichtigste Zahl: **60 von 100** — jedes Modul wird einzeln bewertet, und jedes lässt sich einzeln wiederholen.',
    },

    { type: 'rule' },

    // ── 4. Erklärung: die zweite Generalprobe ─────────────────────
    {
      type: 'prose',
      eyebrow: 'Erklärung',
      card: true,
      titel: 'Was diesmal anders ist',
      absaetze: [
        'Die zweite Simulation rückt näher an den Ernstfall. **Erstens die Aufgaben:** Meinungen zuordnen prüft, ob du Standpunkte hinter den Wörtern erkennst; der Vortrag zwingt dich zum freien Sprechen; die formelle Nachricht verlangt das Register, das unter Zeitdruck am schnellsten verrutscht. **Zweitens der Rahmen:** Diesmal simulierst du den kompletten Prüfungstag am Stück — mit Pausen, am Bildschirm, wie in Lektion 2 beschrieben.',
        'Nutze deine **Fehlerliste aus Lektion 41** als Kompass: Lies vor dem Start deine zwei häufigsten Fehlertypen noch einmal durch, und korrigiere danach wieder mit der Vier-Kriterien-Rubrik. ~~La segunda pasada mide el progreso: compara los resultados con los de la lección 41, no con la perfección.~~',
      ],
    },

    {
      type: 'steps',
      eyebrow: 'Erklärung — Der komplette Prüfungstag als Ablauf',
      steps: [
        {
          badge: 'Block 1',
          titel: 'Lesen — 65 Minuten',
          text: 'Frisch beginnen, __Zeit pro Teil notieren__ (Richtwert aus Lektion 18: erst die Artikel, dann Meinungen, Kommentar, Regeltext — mit Puffer am Ende).',
        },
        {
          badge: 'Pause',
          titel: '15 Minuten',
          text: 'Aufstehen, Wasser trinken, __nicht über die Lösungen grübeln__ — das abgegebene Modul ist abgegeben.',
        },
        {
          badge: 'Block 2',
          titel: 'Hören — ca. 40 Minuten',
          text: 'Aussagen __vor__ dem Hören lesen; verpasste Items sofort loslassen — sonst verlierst du auch das nächste.',
        },
        {
          badge: 'Pause',
          titel: '30 Minuten',
          text: 'Etwas Leichtes essen. Wer mit leerem oder ganz vollem Magen schreibt, schreibt schlechter.',
        },
        {
          badge: 'Block 3',
          titel: 'Schreiben — 75 Minuten',
          text: 'Empfohlene Teilung: __50 Minuten Forumsbeitrag, 25 Minuten formelle Nachricht__ — inklusive fünf Minuten Schlusskontrolle pro Text.',
        },
        {
          badge: 'Extra',
          titel: 'Sprechen — an einem anderen Tag',
          text: 'Wie oft auch in der echten Prüfung: __ein separater Termin__. Mit Partner oder Aufnahmegerät, 15 Minuten Vorbereitung, dann laut und am Stück.',
        },
      ],
    },

    { type: 'rule' },

    // ── 5. Beispiele: Strategien im Einsatz ───────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele — Strategien im Einsatz',
      kicker: 'rezeptiv',
      titel: 'Lesen & Hören: wenn es klemmt',
      items: [
        { text: '**Ein unbekanntes Wort blockiert dich.** → Weiterlesen. Kein Item hängt an einem einzigen Wort; die Bedeutung ergibt sich fast immer aus dem Kontext.' },
        { text: '**Ein Leseteil frisst zu viel Zeit.** → Vorläufige Antwort setzen, Aufgabe markieren, weitergehen — zurückkommen nur, wenn am Ende Zeit bleibt.' },
        { text: '**Beim Hören ein Item verpasst.** → Sofort loslassen. Wer dem verpassten Item nachhängt, verpasst auch das nächste — aus einem Fehler werden zwei.', gl: '— el audio no espera; tu cabeza tiene que ir siempre delante' },
        { text: '**Du bist unsicher.** → Trotzdem anklicken. Es gibt keine Minuspunkte: Ein leeres Feld ist sicher falsch, eine begründete Vermutung nicht.' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'produktiv',
      titel: 'Schreiben & Sprechen: wenn es klemmt',
      items: [
        { text: '**Noch zehn Minuten, kein Schluss in Sicht.** → Fazit in zwei Sätzen: Meinung wiederholen + ein Vorschlag. Ein kurzer Schluss kostet wenig, ein fehlender viel.' },
        { text: '**Ein Wort fällt dir nicht ein.** → Umschreiben statt übersetzen: *das Gerät, mit dem man …* ist gutes B2; ein wörtlich übersetztes spanisches Wort ist ein Risiko.' },
        { text: '**Blackout im Vortrag.** → Zeit gewinnen mit einer Floskel: „Dazu möchte ich ein Beispiel geben …“ — während du sprichst, sortiert sich der Kopf.' },
        { text: '**Die Nachfrage nicht verstanden.** → Höflich zurückfragen: „Könnten Sie die Frage bitte wiederholen?“ — das ist völlig normal und kostet keine Punkte.', gl: '— pedir que repitan con elegancia puntúa; responder a otra pregunta, no' },
      ],
    },

    { type: 'rule' },

    // ── 6. Übungen = die Simulation ───────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Anwendung — Übung 1 · Lesen',
      modul: 'Lesen · Teil 3 · Meinungen zuordnen (empfohlen: 12 Minuten)',
      titel: 'Simulation · 4 Meinungen, 6 Aussagen',
      anweisung: 'Vier Personen äußern sich in einem Online-Forum zum Thema **„E-Scooter in der Stadt“**. Welche Person vertritt welche Aussage? Jede Aussage passt zu genau einer Person; eine Person kann zu mehreren Aussagen passen. Timer auf 12 Minuten.',
      absaetze: [
        '**a) Jonas (28):** Ich nutze E-Scooter fast täglich für die letzte Strecke zwischen U-Bahn und Büro. Für mich sind sie die perfekte Ergänzung zu Bus und Bahn: schnell, flexibel, und ich muss kein eigenes Fahrzeug besitzen. Klar, manche stellen die Roller rücksichtslos ab — aber deswegen gleich alles verbieten? Das wäre übertrieben.',
        '**b) Maria (54):** Ich sehe die Roller vor allem als Risiko. Sie fahren viel zu schnell zwischen den Fußgängern, und meine Mutter wäre schon zweimal fast umgefahren worden. Außerdem habe ich den Eindruck, dass viele damit gar nicht zur Arbeit fahren, sondern zum Spaß durch die Innenstadt rollen — wie mit einem neuen Spielzeug.',
        '**c) Tarek (35):** Alle reden davon, wie umweltfreundlich E-Scooter sind. Die Wahrheit sieht anders aus: Viele Roller halten nur kurze Zeit, und nachts sammeln Transporter sie zum Aufladen ein. Wer wirklich etwas für das Klima tun will, geht zu Fuß oder nimmt das Fahrrad. Solange sich daran nichts ändert, bleibe ich skeptisch.',
        '**d) Lena (19):** Als Studentin kann ich mir kein Auto leisten, und der Roller ist oft die schnellste Lösung. Auf breiten Radwegen fühle ich mich damit sicher — wo sie fehlen, wird es allerdings unangenehm. Die Städte sollten deshalb mehr Radwege bauen und feste Parkzonen einrichten. Dann würden die Roller auch niemanden mehr stören.',
      ],
      optionen: [
        '1. E-Scooter sind eine sinnvolle Ergänzung zum öffentlichen Nahverkehr.',
        '2. E-Scooter sind weniger umweltfreundlich, als viele glauben.',
        '3. Von den Rollern geht eine Gefahr für Fußgänger aus.',
        '4. Feste Parkzonen würden viele Probleme lösen.',
        '5. Ob man sich auf dem Roller sicher fühlt, hängt von den Wegen ab.',
        '6. Viele nutzen die Roller nicht im Alltag, sondern zum Vergnügen.',
      ],
      loesungLabel: 'Lösung mit Begründung',
      loesungen: [
        '1. **a** — „die perfekte Ergänzung zu Bus und Bahn“. *Ergänzung zum Nahverkehr* ist die Umformulierung von „Bus und Bahn“ — Teil 3 arbeitet fast immer mit Synonymen, nie mit denselben Wörtern.',
        '2. **c** — „Alle reden davon, wie umweltfreundlich … Die Wahrheit sieht anders aus.“ Genau das heißt *weniger umweltfreundlich, als viele glauben*.',
        '3. **b** — „viel zu schnell zwischen den Fußgängern“, „fast umgefahren worden“.',
        '4. **d** — „feste Parkzonen einrichten. Dann würden die Roller auch niemanden mehr stören.“ Vorsicht: Auch Jonas erwähnt das Abstellen — aber er **fordert** nichts, er verteidigt die Roller.',
        '5. **d** — „Auf breiten Radwegen fühle ich mich damit sicher — wo sie fehlen, wird es allerdings unangenehm.“',
        '6. **b** — „gar nicht zur Arbeit …, sondern zum Spaß durch die Innenstadt“ — *zum Vergnügen* ist das Synonym für *zum Spaß*.',
      ],
      kommentar: 'Die Methode für Teil 3: **Erst in jeder Aussage das Schlüsselwort markieren** (Ergänzung, Umwelt, Gefahr, Parkzonen, sicher, Vergnügen), dann die Texte nach **Synonymen** absuchen. Wer nach identischen Wörtern sucht, tappt in die Falle.',
    },

    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Übung 2 · Sprechen',
      modul: 'Sprechen · Teil 1 · Vortrag (ca. 4 Minuten, 15 Minuten Vorbereitung)',
      titel: 'Simulation · Vortrag vorbereiten und halten',
      anweisung: 'Bereite den Vortrag mit Stichwortzettel vor (maximal 15 Minuten, wie in der Prüfung). Halte ihn dann **laut und am Stück** — mit Partner oder Aufnahmegerät. Sprich frei vom Zettel, lies nicht ab.',
      absaetze: [
        '**Thema: „Eine Fremdsprache lernen — welche Möglichkeiten gibt es?“** Halten Sie einen Vortrag (ca. 4 Minuten): **Beschreiben Sie verschiedene Möglichkeiten** · **nennen Sie Vor- und Nachteile** · **berichten Sie von eigenen Erfahrungen** · **begründen Sie Ihre Meinung**.',
      ],
      loesungLabel: 'Musterleitfaden (Stichpunkte für den Zettel)',
      loesungen: [
        '**Einstieg:** persönliche Brücke — „Ich lerne selbst seit einigen Jahren Deutsch, deshalb habe ich fast alles ausprobiert …“',
        '**Möglichkeiten:** Sprachkurs vor Ort · Apps und Online-Kurse · Tandempartner · ein Aufenthalt im Land selbst.',
        '**Vorteile/Nachteile Kurs:** feste Termine und eine Lehrkraft, die korrigiert — aber teurer und weniger flexibel.',
        '**Vorteile/Nachteile App:** jederzeit und günstig — aber niemand korrigiert dich, und viele hören nach drei Wochen auf.',
        '**Eigene Erfahrung:** eine konkrete Szene erzählen (der erste Smalltalk auf Deutsch, ein Missverständnis, ein Erfolg).',
        '**Fazit:** die Mischung entscheidet — z. B. Kurs plus Tandem — und Regelmäßigkeit schlägt Intensität: „Lieber jeden Tag zwanzig Minuten als einmal pro Woche drei Stunden.“',
      ],
      kommentar: 'Nimm dich auf und höre die Aufnahme mit der Rubrik im Kopf: alle vier Punkte behandelt (Erfüllung)? Überleitungen zwischen den Teilen (Kohärenz)? Wiederholungen vermieden (Wortschatz)? Auch Nebensätze gebaut (Strukturen)? Dazu kommt im Sprechen die **Aussprache** — verständlich zählt, nicht akzentfrei.',
    },

    {
      type: 'uebung',
      eyebrow: 'Übung 2 · Sprechen — Nachfragen antizipieren',
      frage: 'Nach dem Vortrag folgen in der Prüfung Nachfragen — vom Partner und von den Prüfenden. Bereite auf jede der vier wahrscheinlichen Nachfragen eine Antwort von zwei bis drei Sätzen vor und sprich sie laut.',
      aufgaben: [
        'Welche Methode empfehlen Sie Menschen, die sehr wenig Zeit haben?',
        'Kann man eine Sprache nur mit einer App lernen?',
        'Wie wichtig ist ein Aufenthalt in dem Land, dessen Sprache man lernt?',
        'Was war für Sie persönlich am schwierigsten beim Deutschlernen?',
      ],
      loesungLabel: 'Mögliche Antworten (Kurzform)',
      loesungen: [
        '„Wer wenig Zeit hat, sollte kurze, feste Routinen einbauen — zum Beispiel jeden Morgen zehn Minuten mit einer App und einen Podcast auf dem Arbeitsweg. Entscheidend ist die Regelmäßigkeit, nicht die Dauer.“',
        '„Für den Anfang ja, für mehr eher nicht. Eine App trainiert Wortschatz gut, aber sie korrigiert weder die Aussprache noch freie Sätze — dafür braucht man echte Gespräche.“',
        '„Sehr wichtig, aber kein Muss. Ein Aufenthalt beschleunigt alles, weil man die Sprache den ganzen Tag hört. Wer nicht reisen kann, holt sich das Land nach Hause: Serien, Radio, Tandempartner.“',
        '„Am schwierigsten war für mich die Verbstellung, weil sie im Spanischen ganz anders funktioniert. Geholfen hat mir, meine typischen Fehler zu sammeln und gezielt zu wiederholen.“ ~~Adapta la respuesta a tu experiencia — pero fíjate en la estructura: afirmación + porque + ejemplo.~~',
      ],
    },

    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Übung 3 · Schreiben',
      modul: 'Schreiben · Teil 2 · Formelle Nachricht (~100 Wörter, empfohlen: 25 Minuten)',
      titel: 'Simulation · Formelle Nachricht',
      anweisung: 'Tippe am Computer (ohne Rechtschreibkorrektur), Timer auf 25 Minuten. Alle vier Leitpunkte müssen vorkommen; achte auf Anrede, formelles Register und Grußformel. Korrigiere danach mit der Rubrik aus Lektion 41.',
      absaetze: [
        'Sie arbeiten bei der Firma Weber & Söhne. Am Donnerstag findet eine wichtige **Teambesprechung** statt, aber Sie haben am selben Tag einen Termin beim Facharzt, den Sie nicht verschieben können. Schreiben Sie eine Nachricht (ca. 100 Wörter) an Ihre Abteilungsleiterin, Frau Berger: **Sagen Sie Ihre Teilnahme ab und nennen Sie den Grund** · **drücken Sie Ihr Bedauern aus** · **bitten Sie um die wichtigsten Informationen aus der Besprechung** · **machen Sie einen Vorschlag, wie Sie das Verpasste nachholen**.',
      ],
      loesungLabel: 'Mögliche Lösung (ca. 100 Wörter)',
      loesungen: [
        '**Betreff:** Teambesprechung am Donnerstag — Absage meiner Teilnahme',
        'Sehr geehrte Frau Berger,',
        'leider kann ich an der Teambesprechung am Donnerstag nicht teilnehmen, da ich einen Termin beim Facharzt habe, den ich schon vor zwei Monaten vereinbart habe und nicht verschieben kann.',
        'Das tut mir sehr leid, weil in der Besprechung das neue Projekt vorgestellt wird. Könnten Sie mir das Protokoll und die Präsentation danach zuschicken? Gern komme ich auch am Freitag kurz in Ihr Büro, damit Sie mich über die wichtigsten Punkte informieren können. Falls es hilfreich ist, übergebe ich meine Aufgaben vorher an Herrn Roth.',
        'Vielen Dank für Ihr Verständnis.',
        'Mit freundlichen Grüßen\nLucía Fernández',
      ],
      kommentar: 'Registerkontrolle in drei Fragen: Steht die richtige **Anrede** (kein „Hallo Frau Berger“)? Trägt der **Konjunktiv II** die Bitte (*Könnten Sie …*)? Schließt eine vollständige **Grußformel** (kein „LG“)? Ein einziges „Hallo“ verrät das Register — und genau das misst das Kriterium „Erfüllung“.',
    },

    { type: 'rule' },

    // ── 7. Prüfungsbezug: die letzte Woche + der Prüfungstag ──────
    {
      type: 'tabelle',
      eyebrow: 'Prüfungsbezug — Countdown: die letzten sieben Tage',
      kopf: ['Tag', 'Fokus', 'Konkret'],
      zeilen: [
        ['Tag 7', 'Generalprobe 2', 'diese Simulation komplett — am Stück, mit Pausen, möglichst am Bildschirm'],
        ['Tag 6', 'Korrektur', 'Rubrik anwenden, Fehlerliste aktualisieren, Ergebnis mit Lektion 41 vergleichen'],
        ['Tag 5', 'Schwächstes Modul', 'gezielt eine Lektion aus dem Reparatur-Plan (siehe unten) wiederholen'],
        ['Tag 4', 'Schreiben', 'je einmal Teil 1 und Teil 2 unter Zeit — nur diese 75 Minuten, nicht mehr'],
        ['Tag 3', 'Hören + Sprechen', 'ein Hörtext, danach den Vortrag noch einmal laut — aufnehmen und anhören'],
        ['Tag 2', 'Nur Wiederholung', 'Redemittel, Konnektoren, Fehlerliste — **nichts Neues mehr lernen**'],
        ['Tag 1', 'Erholung', 'halber Tag frei, Unterlagen und Ausweis richten, früh schlafen'],
      ],
    },
    {
      type: 'steps',
      eyebrow: 'Prüfungsbezug — Checkliste für den (digitalen) Prüfungstag',
      steps: [
        {
          badge: 'Vorabend',
          titel: 'Alles bereitlegen',
          text: '__Lichtbildausweis__, Anmeldebestätigung, Wasser, Snack. Anfahrt prüfen — mit Puffer.',
        },
        {
          badge: 'Morgens',
          titel: 'Routine statt Panik',
          text: 'Normal frühstücken, __nichts mehr wiederholen__ außer den zwei obersten Punkten der Fehlerliste. Früh losfahren.',
        },
        {
          badge: 'Vor Ort',
          titel: 'Ankommen — auch technisch',
          text: '30 Minuten vorher da sein, Handy abgeben, Anweisungen der Aufsicht folgen. Im digitalen Format: __Kopfhörer testen__ und die Einführung am Bildschirm in Ruhe anschauen — du kennst das alles schon aus Lektion 2.',
        },
        {
          badge: 'Während',
          titel: 'Modul für Modul',
          text: 'Jedes Modul ist ein eigener Wettkampf. Was abgegeben ist, ist abgegeben — __in der Pause wird nicht verglichen__, auch nicht mit anderen Kandidaten.',
        },
        {
          badge: 'Danach',
          titel: 'Abschließen',
          text: 'Nicht grübeln. Die Bestehensgrenze liegt bei __60 von 100 pro Modul__ — und selbst im schlimmsten Fall wiederholst du nur ein einzelnes Modul, nie alles.',
        },
      ],
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Die beste Strategie gegen Prüfungsangst ist Mathematik: Du brauchst **60 Punkte, nicht 100**. Du darfst im Lesen einen ganzen Teil verpatzen und trotzdem bestehen. Wer um Perfektion kämpft, verkrampft; wer um 60 Punkte spielt, bleibt ruhig — und holt am Ende meist deutlich mehr.',
    },

    { type: 'rule' },

    // ── 8. Abschluss: Kursende ────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung — Dein Reparatur-Plan',
      kopf: ['Wenn dieser Fehler bleibt …', 'dann wiederhole …'],
      zeilen: [
        ['Verbstellung nach Konnektoren unsicher', 'Lektionen 4–6 (Konnektoren)'],
        ['Konjunktiv falsch oder vermieden', 'Lektionen 7–9 (Konjunktiv II & indirekte Rede)'],
        ['Passiv verrutscht', 'Lektionen 10–11 (Passiv)'],
        ['Relativsätze & Adjektivendungen fehlerhaft', 'Lektionen 12–13'],
        ['Infinitivsätze, Präpositionen oder Nominalstil wackelig', 'Lektionen 14–17'],
        ['Zeitnot oder Ratlosigkeit im Lesen', 'Lektionen 18–22 (Modul Lesen)'],
        ['Details und Meinungen im Hören verpasst', 'Lektionen 23–26 (Modul Hören)'],
        ['Schreiben: Aufbau, Register oder Kriterien verfehlt', 'Lektionen 27–29 + 41 (Schreiben & Selbstkorrektur)'],
        ['Sprechen: Vortrag, Nachfragen, Diskussion', 'Lektionen 30–32 (Modul Sprechen)'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck — Der ganze Kurs',
      items: [
        'Lesen: Ich verstehe Artikel, Meinungen und formelle Texte und löse die fünf Teile in 65 Minuten.',
        'Hören: Ich folge Gesprächen, Interviews, Diskussionen und Vorträgen und entnehme Hauptaussagen wie Details.',
        'Schreiben: Ich schreibe in 75 Minuten einen Forumsbeitrag (~150 Wörter) und eine formelle Nachricht (~100 Wörter) im richtigen Register.',
        'Sprechen: Ich halte einen Vortrag, reagiere auf Nachfragen und diskutiere mit einem Partner.',
        'Ich kenne meine typischen Fehler, kann sie benennen — und weiß, in welcher Lektion die Reparatur steht.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick — Zum Abschluss',
      text: 'Hier endet der Kurs — **42 Lektionen, vier Module, ein Ziel: das Zertifikat B2**. Herzlichen Glückwunsch, dass du bis hierher gekommen bist. Melde dich jetzt zur Prüfung an, solange alles frisch ist — Wartezeit ist der natürliche Feind der Vorbereitung. Und danach? Lass das Deutsche nicht wieder los: ein Podcast beim Frühstück, eine Serie auf Deutsch statt mit Untertiteln, ein Tandempartner — Immersion ist ab jetzt dein bester Lehrer. Wenn du weitergehen willst: Auf Aprender-Aleman.de wartet unser **Deutsch-C1-Kurs** (unter /deutschc1) mit demselben System auf dich. Das B2 öffnet dir Studium und Beruf im deutschsprachigen Raum — aber was du wirklich mitnimmst, ist eine Sprache, in der du inzwischen erzählen, argumentieren und überzeugen kannst. **Viel Erfolg am Prüfungstag — du bist bereit.**',
    },
  ],
}
