// Lektion 19 · Lesen: Artikel & Detailverständnis (Teil 1–2)
//
// Bloque 2 «Prüfungsstrategie» — segunda lección del módulo Lesen.
// Sigue el canon fijado en lektion-18.js: Teil 1–2 = Artikel mit
// Auswahlaufgaben a/b/c, ca. 25 Minuten.

export default {
  spec: ['Bloque 2', 'Prüfungsstrategie', 'Niveau B2', 'Prüfungsrelevanz: Lesen Teil 1–2'],
  h1: 'Lesen: Artikel & Detailverständnis',
  lead: 'Teil 1–2 des Moduls Lesen: lange Artikel, Auswahlaufgaben a/b/c — und die drei Sorten von Distraktoren, die dich in die Falle locken wollen.',

  content: [
    // ── Lernziele ─────────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'die Methode „unterstreichen → Textstelle finden → paraphrasieren“ anwenden',
        'die drei Distraktor-Typen erkennen: Wortfalle, Sinnumkehr, „steht nicht im Text“',
        'einen B2-Artikel mit Auswahlaufgaben in ca. 25 Minuten sicher lösen',
      ],
    },

    { type: 'rule' },

    // ── Kernwortschatz ────────────────────────────────────────────
    {
      type: 'wortschatz',
      eyebrow: 'Kernwortschatz — Aufgabe & Artikel',
      items: [
        { wort: 'die Auswahlaufgabe, -n', kollokation: 'bei jeder Auswahlaufgabe a, b oder c ankreuzen', es: 'la pregunta de selección' },
        { wort: 'der Distraktor, -en', kollokation: 'den Distraktor ausschließen', es: 'el distractor (opción trampa)' },
        { wort: 'unterstreichen', kollokation: 'die Schlüsselwörter in der Frage unterstreichen', es: 'subrayar' },
        { wort: 'das Schlüsselwort, -¨er', kollokation: 'nach Schlüsselwörtern suchen', es: 'la palabra clave' },
        { wort: 'die Textstelle, -n', kollokation: 'die passende Textstelle finden', es: 'el pasaje del texto' },
        { wort: 'belegen', kollokation: 'die Antwort mit dem Text belegen', es: 'justificar, probar' },
        { wort: 'ausschließen', kollokation: 'zwei Optionen ausschließen', es: 'descartar' },
        { wort: 'die Umfrage, -n', kollokation: 'laut einer aktuellen Umfrage', es: 'la encuesta' },
        { wort: 'die Mehrheit, -en', kollokation: 'die deutliche Mehrheit der Befragten', es: 'la mayoría' },
        { wort: 'der/die Beschäftigte, -n', kollokation: 'die Beschäftigten einer Firma', es: 'el empleado, la empleada' },
        { wort: 'sich beziehen auf + Akk.', kollokation: 'Die Frage bezieht sich auf Absatz 2.', es: 'referirse a' },
        { wort: 'im Gegensatz zu + Dat.', kollokation: 'im Gegensatz zur ersten Aussage', es: 'a diferencia de' },
      ],
    },

    { type: 'rule' },

    // ── Erklärung ─────────────────────────────────────────────────
    {
      type: 'prose',
      eyebrow: 'Erklärung — so funktioniert Teil 1–2',
      absaetze: [
        'In Teil 1–2 liest du **Artikel aus Zeitungen oder Zeitschriften** (ca. 300–450 Wörter) zu Alltagsthemen: Arbeit, Konsum, Wohnen, Gesundheit. Zu jedem Artikel gibt es Auswahlaufgaben mit **drei Optionen (a/b/c)** — genau eine ist richtig. Wichtig: Die Fragen folgen **in der Regel der Reihenfolge des Textes**. Frage 3 beantwortet sich also fast immer zwischen der Textstelle von Frage 2 und der von Frage 4.',
      ],
    },
    {
      type: 'steps',
      eyebrow: 'Erklärung — die Methode in vier Schritten',
      steps: [
        {
          titel: 'Frage lesen, Schlüsselwörter unterstreichen',
          text: 'Lies zuerst die Frage (noch nicht die Optionen!) und unterstreiche die __Schlüsselwörter__: Wer? Was? Laut wem?',
        },
        {
          titel: 'Die Textstelle finden',
          text: 'Suche im Text die Stelle, die zur Frage passt. Nutze die __Reihenfolge der Fragen__ als Landkarte — du musst nie den ganzen Text neu lesen.',
        },
        {
          titel: 'Erst paraphrasieren, dann vergleichen',
          text: 'Formuliere die Textstelle __mit eigenen Worten__, bevor du die Optionen ansiehst. Dann wähle die Option, die deiner Paraphrase entspricht.',
        },
        {
          titel: 'Die anderen zwei aktiv ausschließen',
          text: 'Sicher bist du erst, wenn du sagen kannst, __warum a und c falsch__ sind — nicht nur, warum b richtig klingt.',
        },
      ],
    },
    {
      type: 'tabelle',
      eyebrow: 'Erklärung — die drei Distraktor-Typen',
      kopf: ['Typ', 'So funktioniert die Falle', 'Gegenmittel'],
      zeilen: [
        ['Wortfalle', 'Die Option wiederholt ein auffälliges Wort aus dem Text — aber in einem anderen Zusammenhang.', 'Nie eine Option wählen, *nur weil* ein Textwort darin steht.'],
        ['Sinnumkehr', 'Die Option dreht die Aussage um: *viele* → *alle*, *steigt* → *sinkt*, es fehlt eine Negation.', 'Auf Mengenwörter und Negationen achten: *nur, kaum, die wenigsten*.'],
        ['Steht nicht im Text', 'Die Option klingt plausibel und ist vielleicht sogar wahr — aber der Text sagt es nicht.', 'Frage dich: *Kann ich das mit einer Textstelle belegen?*'],
      ],
    },
    {
      type: 'prose',
      absaetze: [
        '~~Ojo, hispanohablantes: en el examen no cuenta lo que es verdad en el mundo, sino lo que dice el texto. „Seguro que es así" no es un argumento — *belegen oder ausschließen*.~~',
      ],
    },

    { type: 'rule' },

    // ── Beispiele ─────────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele — jede Falle einmal in Aktion',
      kicker: 'Distraktoren',
      titel: 'Textstelle vs. Option',
      items: [
        { text: 'Text: „Das **Gehalt** spielt bei der Jobwahl weiter eine große Rolle.“ → Distraktor: „Das **Gehalt** ist unwichtig geworden.“', gl: '— Wortfalle + inversión: misma palabra, sentido contrario' },
        { text: 'Text: „**Die wenigsten** möchten komplett zu Hause arbeiten.“ → Distraktor: „**Die meisten** möchten nur noch zu Hause arbeiten.“', gl: '— Sinnumkehr: die wenigsten ≠ die meisten' },
        { text: 'Text: „Die Firma führte feste Bürotage ein.“ → Richtige Aussage: „Die Beschäftigten müssen an bestimmten Tagen anwesend sein.“', gl: '— la correcta es paráfrasis, sin repetir palabras' },
      ],
    },

    { type: 'rule' },

    // ── Übungen ───────────────────────────────────────────────────
    {
      type: 'uebung',
      eyebrow: 'Anwendung — Übung 1 · Erkennen',
      frage: 'Welcher Distraktor-Typ ist das: Wortfalle, Sinnumkehr oder „steht nicht im Text“?',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Text: „Kaum ein Kunde nutzt den neuen Service.“ — Option: „Der neue Service wird viel genutzt.“',
        'Text: „Die Stadt plant einen neuen Radweg am Fluss.“ — Option: „Der Radweg am Fluss ist bei Touristen beliebt.“',
        'Text: „Der Kurs kostet für Studierende nichts.“ — Option: „Studierende interessieren sich nicht für den Kurs.“ ~~(fíjate en *nichts* / *nicht*)~~',
      ],
      loesungen: [
        '**Sinnumkehr** — *kaum ein* (casi nadie) wird zu *viel genutzt*.',
        '**Steht nicht im Text** — der Radweg ist erst geplant; über Touristen sagt der Text nichts.',
        '**Wortfalle** — *nichts kosten* (gratis) hat mit *sich nicht interessieren* nichts zu tun; nur das kleine Wort lockt.',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 2 · Anwenden',
      frage: 'Paraphrasiere zuerst die Textstelle, wähle dann die richtige Option — und begründe.',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Textstelle: „Wer täglich eine Stunde pendelt, gewinnt im Homeoffice pro Woche fast einen halben Arbeitstag.“ — a) Pendler sparen im Homeoffice viel Zeit. · b) Im Homeoffice arbeitet man einen halben Tag weniger.',
        'Textstelle: „Ganz ohne Werbung kommt kaum eine Zeitung aus.“ — a) Zeitungen verzichten heute auf Werbung. · b) Fast alle Zeitungen brauchen Werbung.',
      ],
      loesungen: [
        '**a** — Paraphrase: die Fahrtzeit fällt weg → Zeitgewinn. Option b ist eine Wortfalle: „ein halber Tag“ bezieht sich auf gesparte Fahrtzeit, nicht auf weniger Arbeit.',
        '**b** — „kaum eine kommt ohne … aus“ = fast alle brauchen es. Option a ist die Sinnumkehr.',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 3 · Produzieren',
      frage: 'Baue selbst eine Aufgabe: Schreibe zu der Textstelle eine richtige Aussage (Paraphrase) und einen Distraktor (Wortfalle oder Sinnumkehr).',
      loesungLabel: 'Mögliche Lösung',
      aufgaben: [
        'Textstelle: „Immer mehr junge Leute verzichten auf ein eigenes Auto und teilen sich stattdessen Fahrzeuge über Carsharing-Apps.“',
      ],
      loesungen: [
        'Richtige Aussage: **„Das eigene Auto wird für junge Menschen unwichtiger.“** — Distraktor (Sinnumkehr): **„Immer mehr junge Leute kaufen sich ein eigenes Auto.“** ~~Cualquier par funciona si la correcta reformula y la trampa repite palabras o invierte el sentido.~~',
      ],
    },

    { type: 'rule' },

    // ── Prüfungsbezug ─────────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Modul Lesen · Teil 1–2',
      titel: 'Artikel mit 5 Auswahlaufgaben (ca. 350 Wörter)',
      anweisung: 'Lies den Artikel und kreuze bei jeder Aufgabe die richtige Lösung an: a, b oder c. Zeitlimit für die Übung: 12 Minuten. Die Fragen folgen der Reihenfolge des Textes.',
      absaetze: [
        '**Zurück ins Büro? Der Streit ums Homeoffice**',
        'Während der Pandemie wurde das Homeoffice für Millionen von Beschäftigten in Deutschland zum Alltag: Küchentisch statt Konferenzraum, Videocall statt Meeting. Was zuerst als Notlösung begann, wollen viele heute nicht mehr hergeben. Doch inzwischen rufen immer mehr Unternehmen ihre Mitarbeiterinnen und Mitarbeiter zurück ins Büro — und darüber ist ein Streit entstanden, der beide Seiten beschäftigt.',
        'Die Argumente der Firmen klingen zunächst überzeugend: Wer zusammen im Büro sitzt, tauscht sich spontan aus, entwickelt schneller neue Ideen und fühlt sich dem Team stärker verbunden. Vor allem neue Beschäftigte, so argumentieren viele Personalabteilungen, lernen die Abläufe und die Kultur einer Firma kaum kennen, wenn sie die Kolleginnen und Kollegen nur auf dem Bildschirm sehen. Einige große Konzerne haben deshalb feste Bürotage eingeführt: Ein Versicherungsunternehmen etwa verlangt seit Januar wieder mindestens drei Anwesenheitstage pro Woche — wer sich ohne Grund nicht daran hält, muss mit einem Gespräch mit dem Vorgesetzten rechnen.',
        'Die Beschäftigten sehen das anders. In Umfragen erklärt eine deutliche Mehrheit, zu Hause konzentrierter zu arbeiten als im lauten Großraumbüro; fast zwei Drittel nennen die Ruhe als wichtigsten Vorteil. Dazu kommt die gesparte Fahrtzeit: Wer täglich eine Stunde pendelt, gewinnt im Homeoffice pro Woche fast einen halben Arbeitstag. Besonders Eltern schätzen die Möglichkeit, Beruf und Familie flexibler zu verbinden. Ganz auf das Büro verzichten möchten allerdings die wenigsten — die meisten wünschen sich eine Mischung aus beiden Welten.',
        'Genau dahin entwickelt sich der Kompromiss: hybride Modelle mit zwei oder drei festen Bürotagen pro Woche. Fachleute betonen jedoch, dass solche Modelle nur funktionieren, wenn die Regeln klar sind. Wenn die Hälfte des Teams zu Hause bleibt und die andere Hälfte im Büro sitzt, ohne dass Termine abgestimmt werden, entsteht schnell Frust auf beiden Seiten.',
        'Sicher scheint nur eines: Die Zeiten, in denen alle jeden Tag im Büro saßen, kommen so schnell nicht zurück. Zu deutlich sind die Vorteile, die beide Seiten in den letzten Jahren kennengelernt haben. Firmen, die den Streit klug lösen, dürften im Wettbewerb um Fachkräfte einen klaren Vorteil haben — denn für viele Bewerberinnen und Bewerber ist die Frage nach dem Homeoffice heute so wichtig wie die nach dem Gehalt.',
      ],
      optionen: [
        '(1) Nach der Pandemie … — a) möchten viele Beschäftigte das Homeoffice behalten · b) arbeiten alle wieder täglich im Büro · c) gilt das Homeoffice weiter nur als Notlösung',
        '(2) Die Firmen meinen, dass … — a) neue Mitarbeiter am Bildschirm schneller lernen · b) die Zusammenarbeit im Büro besser funktioniert · c) Videocalls Ideen schneller entwickeln',
        '(3) Die Mehrheit der Beschäftigten … — a) möchte komplett zu Hause arbeiten · b) arbeitet im Großraumbüro am konzentriertesten · c) wünscht sich eine Kombination aus Büro und Homeoffice',
        '(4) Hybride Modelle funktionieren laut Fachleuten nur, wenn … — a) es klare Regeln gibt · b) das ganze Team im Büro sitzt · c) alle Termine zu Hause stattfinden',
        '(5) Am Ende sagt der Text: … — a) Bald arbeiten wieder alle täglich im Büro. · b) Flexible Firmen finden leichter Personal. · c) Das Gehalt ist für Bewerber unwichtig geworden.',
      ],
      loesungLabel: 'Lösung mit Begründung',
      loesungen: [
        '(1) **a** — „wollen viele heute nicht mehr hergeben“ = möchten es behalten. c ist die Wortfalle: „Notlösung“ steht im Text, aber nur für den Anfang („begann als“).',
        '(2) **b** — Austausch, Ideen, Teamgefühl = die Zusammenarbeit funktioniert besser. a ist eine Sinnumkehr: am Bildschirm lernen neue Beschäftigte die Firma **kaum** kennen.',
        '(3) **c** — „die meisten wünschen sich eine Mischung“ = Kombination. a widerspricht „die wenigsten“, b widerspricht „zu Hause konzentrierter“.',
        '(4) **a** — „nur …, wenn die Regeln klar sind“ = klare Regeln nötig. b und c stehen nicht im Text — das Beispiel mit den zwei Hälften illustriert nur das Problem.',
        '(5) **b** — „Vorteil im Wettbewerb um Fachkräfte“ = finden leichter Personal. c ist die klassische Wortfalle: „Gehalt“ kommt vor, aber als Vergleich („so wichtig wie“), nicht als „unwichtig“.',
      ],
      kommentar: 'Zähle nach: In jeder Aufgabe war mindestens ein Distraktor eine Wortfalle oder eine Sinnumkehr. Wenn du die Textstelle **zuerst paraphrasierst**, verlieren diese Fallen ihre Kraft.',
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Plane für Teil 1–2 **ca. 25 Minuten** — das ist der längste Block des Moduls. Pro Frage hast du also gut zwei Minuten. Wenn du nach zwei Minuten zwischen zwei Optionen schwankst: die wahrscheinlichere ankreuzen, markieren, weitergehen. Am Ende bleibt der 5-Minuten-Puffer zum Zurückkommen.',
    },

    { type: 'rule' },

    // ── Abschluss ─────────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Schritt', 'Das machst du konkret'],
      zeilen: [
        ['1 · Unterstreichen', 'Schlüsselwörter der Frage markieren — Optionen noch ignorieren'],
        ['2 · Finden', 'Textstelle suchen; Fragenreihenfolge = Textreihenfolge'],
        ['3 · Paraphrasieren', 'Textstelle mit eigenen Worten fassen, dann Optionen vergleichen'],
        ['4 · Ausschließen', 'Wortfalle, Sinnumkehr, „steht nicht im Text“ benennen'],
        ['Zeit', 'ca. 25 Min. für Teil 1–2, gut 2 Min. pro Frage'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich lese erst die Frage, unterstreiche Schlüsselwörter und suche dann die Textstelle.',
        'Ich paraphrasiere die Textstelle, bevor ich die Optionen ansehe.',
        'Ich kann bei jeder falschen Option sagen, welcher Distraktor-Typ sie ist.',
        'Ich wähle nie eine Option nur deshalb, weil ein Wort aus dem Text darin vorkommt.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'In Teil 1–2 vergleichst du Aussagen mit **einem** Text. In der nächsten Lektion wird es mehrstimmig: In **Teil 3** äußern mehrere Personen ihre Meinung — und du musst zuordnen, wer was sagt, obwohl die Aussagen nie die Wörter der Personen wiederholen.',
    },
  ],
}
