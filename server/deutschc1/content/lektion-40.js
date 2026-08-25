// Lektion 40 · Prüfungssimulation 2 + Strategien
//
// Bloque 4 «Prüfungssimulation» — segundo simulacro (más difícil) y CIERRE
// DEL CURSO. Esqueleto de 8 secciones adaptado: las Übungen son el simulacro
// (Satzeinsetzung · Sprechen-Vortrag · Schreiben Teil 2); el Prüfungsbezug
// es el plan de los últimos 7 días + checklist del día del examen; el
// Abschluss es especial de fin de curso (mapa de repaso, can-dos globales,
// despedida sin enlace a lección siguiente).

export default {
  spec: ['Bloque 4', 'Prüfungssimulation', 'Niveau C1', 'Prüfungsrelevanz: Alle vier Module'],
  h1: 'Prüfungssimulation 2 + Strategien',
  lead: 'Die letzte Lektion: eine zweite, härtere Generalprobe — inklusive Sprechen —, der Plan für die letzten sieben Tage und die Strategie für den Prüfungstag.',

  content: [
    // ── 2. Lernziele ──────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'Am Ende hast du eine zweite, anspruchsvollere Simulation absolviert — mit Satzeinsetzung, Vortrag und formeller Nachricht.',
        'Du bereitest einen Sprechen-Vortrag mit Leitfaden vor und antizipierst die wahrscheinlichen Nachfragen.',
        'Du planst die letzten sieben Tage vor der Prüfung Tag für Tag — und den Prüfungstag mit einer Checkliste.',
        'Du weißt, welche Lektion du bei welchem hartnäckigen Fehler wiederholst und wie es nach dem C1 weitergeht.',
      ],
    },

    { type: 'rule' },

    // ── 3. Kernwortschatz ─────────────────────────────────────────
    {
      type: 'wortschatz',
      eyebrow: 'Kernwortschatz',
      items: [
        { wort: 'der Antwortbogen', kollokation: 'Lösungen auf den Antwortbogen übertragen', es: 'hoja de respuestas' },
        { wort: 'die Bearbeitungszeit', kollokation: 'die Bearbeitungszeit im Blick behalten', es: 'tiempo disponible' },
        { wort: 'das Zeitmanagement', kollokation: 'konsequentes Zeitmanagement', es: 'gestión del tiempo' },
        { wort: 'die Prüfungsangst', kollokation: 'mit Prüfungsangst umgehen', es: 'ansiedad ante el examen' },
        { wort: 'der Ablauf', kollokation: 'der Ablauf des Prüfungstages', es: 'desarrollo, transcurso' },
        { wort: 'die Aufsicht', kollokation: 'den Anweisungen der Aufsicht folgen', es: 'persona que vigila el examen' },
        { wort: 'der Lichtbildausweis', kollokation: 'einen gültigen Lichtbildausweis vorlegen', es: 'documento de identidad con foto' },
        { wort: 'die Bestehensgrenze', kollokation: 'die Bestehensgrenze von 60 Punkten', es: 'nota mínima para aprobar' },
        { wort: 'die Wiederholung', kollokation: 'die Wiederholung einzelner Module', es: 'repetición' },
        { wort: 'die Erholung', kollokation: 'bewusste Erholung einplanen', es: 'descanso, recuperación' },
        { wort: 'das Durchhaltevermögen', kollokation: 'Durchhaltevermögen beweisen', es: 'perseverancia, aguante' },
        { wort: 'die Zuversicht', kollokation: 'mit Zuversicht in die Prüfung gehen', es: 'confianza, optimismo' },
      ],
      hinweis: 'Merk dir die Kollokationen des Prüfungstages als feste Einheiten: *einen Lichtbildausweis **vorlegen***, *Lösungen auf den Antwortbogen **übertragen***, *den Anweisungen der Aufsicht **folgen***. Und die wichtigste Zahl zum Schluss: **60 von 100** — jedes Modul wird einzeln bewertet, und jedes lässt sich einzeln wiederholen.',
    },

    { type: 'rule' },

    // ── 4. Erklärung: die zweite Generalprobe ─────────────────────
    {
      type: 'prose',
      eyebrow: 'Erklärung',
      card: true,
      titel: 'Was diesmal anders ist',
      absaetze: [
        'Die zweite Simulation rückt näher an den Ernstfall. **Erstens die Aufgaben:** Die Satzeinsetzung prüft Textlogik statt Wortwissen, der Vortrag zwingt dich zum freien Sprechen, die formelle Nachricht verlangt das Register, das in der Eile am schnellsten verrutscht. **Zweitens der Rahmen:** Diesmal simulierst du den kompletten Prüfungstag am Stück — mit Pausen, Antwortbogen und allem, was dazugehört.',
        'Nutze deine **Fehlerkartei aus Lektion 39** als Kompass: Bevor du beginnst, lies deine zwei häufigsten Fehlertypen noch einmal durch. Und nach der Simulation korrigierst du wieder mit der Vier-Kriterien-Rubrik — sie ist ab jetzt dein Standardwerkzeug. ~~La segunda pasada mide el progreso: compara los resultados con los de la lección 39, no con la perfección.~~',
      ],
    },

    {
      type: 'steps',
      eyebrow: 'Erklärung — Der komplette Prüfungstag als Ablauf',
      steps: [
        {
          badge: 'Block 1',
          titel: 'Lesen — 65 Minuten',
          text: 'Frisch beginnen, __Uhrzeit pro Teil notieren__. Die letzten fünf Minuten gehören dem Übertragen auf den Antwortbogen.',
        },
        {
          badge: 'Pause',
          titel: '15 Minuten',
          text: 'Aufstehen, Wasser trinken, __nicht über die Lösungen grübeln__ — das vergangene Modul ist abgegeben.',
        },
        {
          badge: 'Block 2',
          titel: 'Hören — ca. 40 Minuten',
          text: 'Aussagen __vor__ dem Hören lesen; verpasste Items sofort loslassen. Auch hier: erst denken, dann übertragen.',
        },
        {
          badge: 'Pause',
          titel: '30–45 Minuten',
          text: 'Etwas Leichtes essen. Wer mit leerem oder vollem Magen schreibt, schreibt schlechter.',
        },
        {
          badge: 'Block 3',
          titel: 'Schreiben — 75 Minuten',
          text: 'Empfohlene Teilung: __40 Minuten Teil 1, 30 Minuten Teil 2__ — plus fünf Minuten Schlusskontrolle am Ende (40/30/5 wie in Lektion 23).',
        },
        {
          badge: 'Extra',
          titel: 'Sprechen — an einem anderen Tag',
          text: 'Wie im echten Leben: Das Sprechen findet oft __an einem separaten Termin__ statt. Mit Partner oder Aufnahmegerät, ca. 15 Minuten, laut und im Ganzen.',
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
        { text: '**Ein unbekanntes Wort blockiert dich.** → Weiterlesen. Kein Item hängt an einem einzigen Wort; die Bedeutung ergibt sich fast immer aus dem Kontext.', gl: '— wer stehen bleibt, verliert Zeit und Faden' },
        { text: '**Ein Leseteil frisst zu viel Zeit.** → Vorläufige Antwort setzen, Aufgabe markieren, weitergehen — und nur zurückkommen, wenn am Ende Zeit bleibt.' },
        { text: '**Beim Hören ein Item verpasst.** → Sofort loslassen. Wer dem verpassten Item nachhängt, verliert auch das nächste — aus einem Fehler werden zwei.', gl: '— die Aufnahme wartet nicht; dein Kopf muss vorn bleiben' },
        { text: '**Ein Sprecher ist schwer zu verstehen.** → Orientiere dich an Haltung und Wertung (zustimmend? skeptisch? ironisch?) statt an Einzelwörtern — genau das fragen die Items.' },
        { text: '**Du bist unsicher.** → Trotzdem ankreuzen. Es gibt keine Minuspunkte: Ein leeres Feld ist sicher falsch, eine begründete Vermutung nicht.' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'produktiv',
      titel: 'Schreiben & Sprechen: wenn es klemmt',
      items: [
        { text: '**Noch zehn Minuten, kein Schluss in Sicht.** → Fazit in zwei Sätzen: Position wiederholen + ein Ausblick. Ein kurzer Schluss kostet wenig, ein fehlender viel.', gl: '— Erfüllung der Aufgabe verlangt alle Teile, auch den Schluss' },
        { text: '**Ein Wort fällt dir nicht ein.** → Paraphrasieren statt wörtlich übersetzen: *das Gerät, mit dem man …* klingt nach C1; eine wörtliche Übertragung aus dem Spanischen nach Risiko.' },
        { text: '**Blackout im Vortrag.** → Zeit gewinnen mit einer Struktur-Floskel: „Lassen Sie mich das an einem Beispiel verdeutlichen …“ — während du sprichst, sortiert sich der Kopf.' },
        { text: '**Die Nachfrage nicht verstanden.** → Höflich zurückfragen: „Verstehe ich Sie richtig, dass Sie nach … fragen?“ — das ist gesprächskompetentes C1, kein Makel.', gl: '— ~~Pedir aclaración con elegancia puntúa; responder a otra pregunta, no.~~' },
        { text: '**Keine Zeit für die Schlusskontrolle.** → Die fünf Minuten sind nicht verhandelbar — und du prüfst nur deine zwei Fehlertypen aus der Fehlerkartei, nichts anderes.' },
      ],
    },

    { type: 'rule' },

    // ── 6. Übungen = die Simulation ───────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Anwendung — Übung 1 · Lesen',
      modul: 'Lesen · Satzeinsetzung (empfohlen: 15 Minuten)',
      titel: 'Simulation · 6 Sätze einsetzen',
      anweisung: 'Aus dem folgenden Text wurden sechs Sätze entfernt. Setze die Sätze a–f an die richtigen Stellen {1} bis {6}. Achte auf Verweiswörter (*das, sie, dort, dem*), Konnektoren und die thematische Logik — hier zählt Textverständnis, nicht Wortwissen.',
      absaetze: [
        'Immer häufiger erleben europäische Städte beides innerhalb weniger Wochen: wochenlange Hitze und sintflutartige Regenfälle. {1} Stadtplanerinnen und Stadtplaner setzen deshalb zunehmend auf ein Konzept, das sich „Schwammstadt“ nennt. Die Idee ist einfach: Eine Stadt soll Wasser aufnehmen und speichern wie ein Schwamm, statt es möglichst schnell in die Kanalisation abzuleiten. {2} Dazu zählen begrünte Dächer, entsiegelte Plätze und unterirdische Speicherbecken. Bei Starkregen nehmen diese Elemente große Wassermengen auf. {3} So kühlen Verdunstung und Vegetation die überhitzten Straßenzüge ab. Vorreiter wie Kopenhagen zeigen, dass sich der Umbau rechnet. {4} Kritiker wenden allerdings ein, dass der Umbau bestehender Viertel teuer und langwierig sei. {5} Wer heute eine Straße ohnehin aufreißen müsse, so ihre Antwort, könne sie auch gleich klimafest gestalten. {6} Die Schwammstadt ist damit kein ferner Traum, sondern eine Frage politischer Prioritäten.',
      ],
      optionen: [
        'a) In Trockenperioden geben sie das gespeicherte Wasser dann nach und nach wieder ab.',
        'b) Die herkömmliche Infrastruktur ist auf solche Extreme nicht ausgelegt.',
        'c) Befürworter halten dem entgegen, dass sich viele Maßnahmen in ohnehin geplante Sanierungen integrieren ließen.',
        'd) Umgesetzt wird das mit einer ganzen Reihe unterschiedlicher Maßnahmen.',
        'e) Dort spart die Stadt inzwischen Millionen, die früher für Schäden nach Überschwemmungen fällig wurden.',
        'f) Einige deutsche Kommunen haben entsprechende Vorgaben bereits in ihre Bauleitplanung aufgenommen.',
      ],
      loesungen: [
        '{1} **b** — *solche Extreme* verweist zurück auf „Hitze und sintflutartige Regenfälle“; das *deshalb* im Folgesatz braucht genau diese Problemdiagnose.',
        '{2} **d** — *das* nimmt „die Idee“ auf; das folgende *Dazu zählen* setzt voraus, dass vorher von **Maßnahmen** die Rede war.',
        '{3} **a** — *sie* = „diese Elemente“; das Paar Starkregen/Trockenperioden bildet den Gegensatz, und das *So* danach knüpft an die Verdunstung an.',
        '{4} **e** — *Dort* = Kopenhagen; „spart Millionen“ konkretisiert das vorangehende „rechnet sich“.',
        '{5} **c** — *halten dem entgegen* antwortet auf die Kritiker; das *ihre Antwort* im Folgesatz bezieht sich auf die Befürworter.',
        '{6} **f** — der konkrete Umsetzungsschritt vor dem Fazit; *damit* im Schlusssatz zieht die Bilanz aus dieser Entwicklung.',
      ],
      kommentar: 'Merke die Methode: **Erst die Verweiswörter in den Sätzen a–f markieren** (*sie, dort, das, dem*), dann für jede Lücke prüfen, was davor und danach steht. Ein Satz passt nur, wenn er in **beide** Richtungen anschließt.',
    },

    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Übung 2 · Sprechen',
      modul: 'Sprechen · Teil 1 · Vortrag (ca. 4 Minuten)',
      titel: 'Simulation · Vortrag vorbereiten und halten',
      anweisung: 'Bereite den Vortrag mit Stichwortzettel vor (max. 15 Minuten Vorbereitung, wie in der Prüfung). Halte ihn dann **laut und am Stück** — mit Partner oder Aufnahmegerät. Sprich frei vom Stichwortzettel, lies nicht ab.',
      absaetze: [
        '**Thema: „Brauchen wir in Zukunft noch Bargeld?“** Halten Sie einen Vortrag (ca. 4 Minuten). Gehen Sie dabei auf folgende Punkte ein: **die aktuelle Situation beschreiben** · **Vor- und Nachteile des Bargelds abwägen** · **ein Beispiel aus Ihrem Heimatland geben** · **Ihre persönliche Einschätzung begründen**.',
      ],
      loesungLabel: 'Musterleitfaden (Stichpunkte für den Zettel)',
      loesungen: [
        '**Einstieg:** rhetorische Frage — „Wann haben Sie zuletzt bar bezahlt?“ — und These andeuten, ohne sie schon zu verraten.',
        '**Situation:** Karten- und Handyzahlung nehmen überall zu; Schweden fast bargeldlos, Deutschland traditionell bargeldfreundlich — die Spannbreite selbst ist das Interessante.',
        '**Pro Bargeld:** Anonymität und Datenschutz · Teilhabe älterer Menschen und von Menschen ohne Konto · spürbare Ausgabenkontrolle.',
        '**Pro digital:** Bequemlichkeit und Tempo · geringere Kosten für Handel und Banken · weniger Schwarzarbeit und Steuerhinterziehung.',
        '**Beispiel Heimatland:** eine konkrete Alltagsszene (Markt, Trinkgeld, Bus) — sie sagt mehr als jede Statistik.',
        '**Fazit:** eigene Einschätzung mit einer Begründung + Ausblick: „Entscheidend wird sein, ob …“',
      ],
      kommentar: 'Nimm dich auf und höre die Aufnahme mit der Rubrik im Kopf: Habe ich alle vier Punkte behandelt (Erfüllung)? Führen Überleitungen durch den Vortrag (Kohärenz)? Vermeide ich Wiederholungen (Wortschatz)? Baue ich auch komplexe Sätze (Strukturen)?',
    },

    {
      type: 'uebung',
      eyebrow: 'Übung 2 · Nachfragen antizipieren',
      frage: 'Nach dem Vortrag folgen in der Prüfung Nachfragen — vom Partner und von den Prüfenden. Bereite auf jede der fünf wahrscheinlichen Nachfragen eine Antwort von zwei bis drei Sätzen vor und sprich sie laut.',
      aufgaben: [
        'Wie ist die Situation in Ihrem Heimatland?',
        'Was würde ein bargeldloser Alltag für ältere Menschen bedeuten?',
        'Sehen Sie Risiken für den Datenschutz?',
        'Könnten Sie sich persönlich ein Leben ganz ohne Bargeld vorstellen?',
        'Sollte der Staat eine Obergrenze für Barzahlungen einführen?',
      ],
      loesungLabel: 'Mögliche Antworten (Kurzform)',
      loesungen: [
        '„In Spanien wird zwar fast überall Kartenzahlung akzeptiert, auf Märkten und in Bars bleibt Bargeld aber selbstverständlich. Eine vollständige Abschaffung kann ich mir dort mittelfristig nicht vorstellen.“ ~~Adapta el país, claro — pero la estructura «zwar … aber» es oro para las Nachfragen.~~',
        '„Für viele Ältere wäre das eine echte Hürde, weil digitale Bezahlverfahren Vertrauen und Übung voraussetzen. Ein Übergang müsste deshalb von Schulungen und Alternativen begleitet werden.“',
        '„Durchaus — jede digitale Zahlung hinterlässt Daten, aus denen sich Bewegungs- und Konsumprofile erstellen lassen. Umso wichtiger wären strenge gesetzliche Grenzen für deren Verwendung.“',
        '„Im Alltag vermutlich ja, da ich schon heute fast alles digital bezahle. Ganz verzichten möchte ich dennoch nicht — Bargeld bleibt eine Reserve für Ausnahmesituationen.“',
        '„Eine Obergrenze halte ich für vertretbar, sofern sie hoch genug angesetzt ist, um den Alltag nicht zu betreffen. Sie träfe vor allem Geldwäsche, nicht den normalen Einkauf.“',
      ],
    },

    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Übung 3 · Schreiben',
      modul: 'Schreiben · Teil 2 · Formelle Nachricht (~120 Wörter, 30 Min. empfohlen)',
      titel: 'Simulation · Formelle Nachricht',
      anweisung: 'Schreibe von Hand, Timer auf 30 Minuten. Alle vier Leitpunkte müssen vorkommen; achte auf Anrede, Registerkonsequenz und Grußformel. Korrigiere danach mit der Rubrik aus Lektion 39.',
      absaetze: [
        'Sie haben sich verbindlich für die interne Fortbildung **„Projektmanagement kompakt“ am 12. März** angemeldet. Nun wurde für denselben Tag kurzfristig ein wichtiger Kundentermin angesetzt, den Sie nicht verschieben können. Schreiben Sie eine Nachricht (ca. 120 Wörter) an die Leiterin der Personalabteilung, Frau Dr. Krämer: **Informieren Sie über die Absage und den Grund** · **drücken Sie Ihr Bedauern aus** · **bitten Sie um einen Nachholtermin** · **machen Sie einen Alternativvorschlag**.',
      ],
      loesungLabel: 'Mögliche Lösung (ca. 120 Wörter)',
      loesungen: [
        '**Betreff:** Fortbildung „Projektmanagement kompakt“ am 12. März — Absage und Bitte um Nachholtermin',
        'Sehr geehrte Frau Dr. Krämer,',
        'leider muss ich Ihnen mitteilen, dass ich an der oben genannten Fortbildung, zu der ich verbindlich angemeldet bin, nicht teilnehmen kann. Für denselben Tag wurde kurzfristig ein Termin mit einem wichtigen Kunden angesetzt, den ich als Projektverantwortlicher nicht verschieben kann.',
        'Ich bedaure diese Überschneidung sehr, da die Inhalte der Fortbildung für meine derzeitigen Aufgaben von großer Bedeutung sind. Wäre es möglich, mich für den nächsten Durchgang im Juni vorzumerken? Alternativ würde ich gern erfahren, ob sich einzelne Module online nachholen lassen.',
        'Für Ihr Verständnis danke ich Ihnen im Voraus und stehe für Rückfragen jederzeit zur Verfügung.',
        'Mit freundlichen Grüßen\nJavier Morales',
      ],
      kommentar: 'Registerkontrolle in drei Fragen: Steht die richtige **Anrede** (kein „Hallo“)? Trägt der **Konjunktiv II** die Bitten (*Wäre es möglich …*, *würde ich gern erfahren*)? Schließt eine vollständige **Grußformel**? Ein einziges „Hallo“ oder „Liebe Grüße“ verrät das Register — und das Kriterium „Erfüllung der Aufgabe“ misst genau das.',
    },

    { type: 'rule' },

    // ── 7. Prüfungsbezug: die letzte Woche + der Prüfungstag ──────
    {
      type: 'tabelle',
      eyebrow: 'Prüfungsbezug — Countdown: die letzten sieben Tage',
      kopf: ['Tag', 'Fokus', 'Konkret'],
      zeilen: [
        ['Tag 7', 'Generalprobe 2', 'diese Simulation komplett — mit Pausen und Antwortbogen'],
        ['Tag 6', 'Korrektur', 'Rubrik anwenden, Fehlerkartei aktualisieren, Ergebnis mit Lektion 39 vergleichen'],
        ['Tag 5', 'Schwächstes Modul', 'gezielt eine Lektion aus dem Reparatur-Plan (siehe unten) wiederholen'],
        ['Tag 4', 'Schreiben', 'je einmal Teil 1 und Teil 2 unter Zeit — nur diese 75 Minuten, nicht mehr'],
        ['Tag 3', 'Hören + Sprechen', 'ein Hörtext, danach den Vortrag noch einmal laut — aufnehmen und anhören'],
        ['Tag 2', 'Nur Wiederholung', 'Redemittel, Konnektoren, Fehlerkartei — **nichts Neues mehr lernen**'],
        ['Tag 1', 'Erholung', 'halber Tag frei, Unterlagen und Ausweis richten, früh schlafen'],
      ],
    },
    {
      type: 'steps',
      eyebrow: 'Prüfungsbezug — Checkliste für den Prüfungstag',
      steps: [
        {
          badge: 'Vorabend',
          titel: 'Alles bereitlegen',
          text: '__Lichtbildausweis__, Einladung bzw. Anmeldebestätigung, zwei Stifte, Wasser, Snack. Anfahrt prüfen — mit Puffer.',
        },
        {
          badge: 'Morgens',
          titel: 'Routine statt Panik',
          text: 'Normal frühstücken, __nichts mehr wiederholen__ außer der obersten Karte der Fehlerkartei. Früh losfahren.',
        },
        {
          badge: 'Vor Ort',
          titel: 'Ankommen',
          text: '30 Minuten vorher da sein, Anweisungen der Aufsicht folgen, Handy abgeben. Tief durchatmen: __Anspannung ist Konzentration__, die noch kein Ziel hat.',
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
      text: 'Die wirksamste Strategie gegen Prüfungsangst ist arithmetisch: Du brauchst **60 Punkte, nicht 100**. Du darfst im Lesen einen ganzen Teil verpatzen und trotzdem bestehen. Wer um Perfektion kämpft, verkrampft; wer um 60 Punkte spielt, bleibt beweglich — und holt am Ende meist deutlich mehr.',
    },

    { type: 'rule' },

    // ── 8. Abschluss: Kursende ────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung — Dein Reparatur-Plan',
      kopf: ['Wenn dieser Fehler bleibt …', 'dann wiederhole …'],
      zeilen: [
        ['Verdichtung fällt schwer, Nominalphrasen unsicher', 'Lektion 3 (Nominalstil)'],
        ['Passiv und Ersatzformen verrutschen', 'Lektion 4 (Passiv)'],
        ['Konjunktiv I/II falsch oder vermieden', 'Lektionen 5–6 (Konjunktiv)'],
        ['Satzbau monoton, Konnektoren einseitig', 'Lektionen 10–12 (Konnektoren, Relativsätze)'],
        ['Zeitnot oder Ratlosigkeit im Lesen', 'Lektionen 16–19 (Modul Lesen)'],
        ['Details und Meinungen im Hören verpasst', 'Lektionen 20–22 (Modul Hören)'],
        ['Schreiben: Struktur oder Kriterien verfehlt', 'Lektionen 23–25 + 39 (Schreiben, Selbstkorrektur)'],
        ['Sprechen: Aufbau, Redemittel, Nachfragen', 'Lektionen 26–28 (Modul Sprechen)'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck — Der ganze Kurs',
      items: [
        'Ich verstehe lange, anspruchsvolle Texte und erkenne auch implizite Bedeutungen — unter Zeitdruck.',
        'Ich folge Vorträgen, Interviews und Diskussionen und entnehme Hauptaussagen wie Details.',
        'Ich schreibe in 75 Minuten einen strukturierten Diskussionsbeitrag (~230 Wörter) und eine formelle Nachricht (~120 Wörter) im richtigen Register.',
        'Ich halte einen freien Vortrag, diskutiere flexibel und reagiere souverän auf Nachfragen.',
        'Ich kenne meine typischen Fehler, kann sie benennen — und weiß, in welcher Lektion die Reparatur steht.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick — Zum Abschluss',
      text: 'Hier endet der Kurs — **40 Lektionen, vier Module, ein Ziel**. Du hast nicht nur Grammatik und Aufgabenformate gelernt, sondern das Wichtigste: dich selbst zu korrigieren. Melde dich jetzt zur Prüfung an, solange alles frisch ist — Wartezeit ist der natürliche Feind der Vorbereitung. Und danach? Lass das Deutsche nicht wieder los: ein Podcast beim Frühstück, ein Roman auf dem Nachttisch, ein Tandempartner, vielleicht der Schritt Richtung **Zertifikat C2**. Das C1 öffnet dir Universitäten und Arbeitgeber im ganzen deutschsprachigen Raum — aber was du wirklich mitnimmst, ist eine Sprache, in der du inzwischen denken, streiten und überzeugen kannst. **Viel Erfolg am Prüfungstag — du bist bereit.**',
    },
  ],
}
