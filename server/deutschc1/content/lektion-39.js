// Lektion 39 · Prüfungssimulation 1 + Korrektur
//
// Bloque 4 «Prüfungssimulation» — primer simulacro guiado y autocorregible.
// Esqueleto de 8 secciones adaptado: las tres Übungen SON las partes del
// simulacro (Lesen · Hören · Schreiben Teil 1); el Prüfungsbezug enseña a
// corregirse con los 4 criterios oficiales.

export default {
  spec: ['Bloque 4', 'Prüfungssimulation', 'Niveau C1', 'Prüfungsrelevanz: Alle vier Module'],
  h1: 'Prüfungssimulation 1 + Korrektur',
  lead: 'Die erste Generalprobe: drei Originalaufgaben unter echten Bedingungen — und danach der wichtigste Schritt, den die meisten auslassen: die eigene Korrektur.',

  content: [
    // ── 2. Lernziele ──────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'Am Ende kannst du eine Prüfungssimulation zu Hause unter realen Bedingungen durchführen — mit Timer, ohne Wörterbuch, in der richtigen Reihenfolge.',
        'Du bearbeitest je eine Originalaufgabe aus Lesen, Hören und Schreiben unter Zeitdruck.',
        'Du bewertest deinen eigenen Text mit den vier offiziellen Kriterien und einer vereinfachten Rubrik.',
        'Du benennst deine typischen Fehler mit den passenden Fachbegriffen und legst eine Fehlerkartei an.',
      ],
    },

    { type: 'rule' },

    // ── 3. Kernwortschatz ─────────────────────────────────────────
    {
      type: 'wortschatz',
      eyebrow: 'Kernwortschatz',
      items: [
        { wort: 'die Selbstkorrektur', kollokation: 'Zeit für die Selbstkorrektur einplanen', es: 'autocorrección' },
        { wort: 'das Bewertungskriterium', kollokation: 'die vier Bewertungskriterien anwenden', es: 'criterio de evaluación' },
        { wort: 'der Ausdrucksfehler', kollokation: 'einen Ausdrucksfehler anstreichen', es: 'error de expresión, de léxico' },
        { wort: 'die Wortstellung', kollokation: 'die Wortstellung im Nebensatz prüfen', es: 'orden de palabras' },
        { wort: 'der Bezugsfehler', kollokation: 'ein Bezugsfehler beim Pronomen', es: 'error de referencia' },
        { wort: 'die Kongruenz', kollokation: 'die Kongruenz zwischen Subjekt und Verb', es: 'concordancia' },
        { wort: 'der Kasusfehler', kollokation: 'ein Kasusfehler nach Präposition', es: 'error de caso' },
        { wort: 'das Genus', kollokation: 'das Genus eines Substantivs nachschlagen', es: 'género gramatical' },
        { wort: 'der Flüchtigkeitsfehler', kollokation: 'Flüchtigkeitsfehler unterlaufen jedem', es: 'error por descuido' },
        { wort: 'die Zeichensetzung', kollokation: 'die Zeichensetzung vor „dass“ prüfen', es: 'puntuación' },
        { wort: 'der Verstoß', kollokation: 'ein Verstoß gegen die Verbstellung', es: 'infracción (contra una regla)' },
        { wort: 'die Fehlerkartei', kollokation: 'eine persönliche Fehlerkartei führen', es: 'fichero de errores' },
        { wort: 'die Generalprobe', kollokation: 'eine Generalprobe unter Realbedingungen', es: 'ensayo general' },
      ],
      hinweis: 'Das ist die Sprache, in der du **über deine eigenen Fehler sprichst**. Wer seinen Fehler benennen kann (*Kasusfehler nach „wegen“*, *Verstoß gegen die Verbendstellung*), korrigiert ihn doppelt so schnell — und macht ihn seltener wieder.',
    },

    { type: 'rule' },

    // ── 4. Erklärung: die Simulation ──────────────────────────────
    {
      type: 'prose',
      eyebrow: 'Erklärung',
      card: true,
      titel: 'Warum eine Generalprobe — und warum zu Hause?',
      absaetze: [
        'Bestehen ist nicht nur eine Frage der **Kompetenz**, sondern auch der **Kondition**: 65 Minuten konzentriert lesen, direkt danach 40 Minuten hören, dann 75 Minuten schreiben — das muss der Kopf trainiert haben. Eine Simulation deckt genau die Schwächen auf, die einzelne Übungen verbergen: Zeitnot im dritten Leseteil, Konzentrationslöcher beim Hören, ein Schluss, der in Eile entsteht.',
        'Entscheidend ist die **Ehrlichkeit der Bedingungen**. Eine Simulation mit Wörterbuch, Pausen nach Belieben und Blick auf die Lösungen misst nichts. ~~Un simulacro «blando» te da una nota falsa — y la sorpresa te la llevas el día del examen.~~ Diese Lektion liefert dir drei Aufgaben; die Spielregeln stehen unten.',
      ],
    },

    {
      type: 'tabelle',
      eyebrow: 'Erklärung — Die Module unter realen Bedingungen',
      kopf: ['Modul', 'Zeit', 'Umfang', 'So simulierst du es zu Hause'],
      zeilen: [
        ['Lesen', '65 Min.', '4 Teile', 'Timer stellen, Aufgabe ausdrucken, Antworten auf ein separates Blatt übertragen'],
        ['Hören', 'ca. 40 Min.', '4 Teile', 'Audio bzw. vorgelesenes Transkript nur so oft hören, wie es die Prüfung erlaubt — Teile 1–3 einmal, nur den Vortrag (Teil 4) zweimal'],
        ['Schreiben', '75 Min.', '2 Aufgaben', 'von Hand schreiben, durchstreichen statt radieren, Wörter erst am Ende zählen'],
        ['Sprechen', 'ca. 15 Min.', 'Vortrag + Diskussion zu zweit', 'mit Partner oder Aufnahmegerät — kommt in Lektion 40 an die Reihe'],
      ],
    },

    {
      type: 'steps',
      eyebrow: 'Erklärung — Die fünf Spielregeln',
      steps: [
        {
          titel: 'Zeitfenster blocken',
          text: 'Reserviere einen ungestörten Vormittag. __Handy aus__, Tür zu, Timer sichtbar auf dem Tisch — nicht auf dem Handy.',
        },
        {
          titel: 'Keine Hilfsmittel',
          text: 'Kein Wörterbuch, keine Notizen, keine Übersetzungs-App. Erlaubt ist, was im Prüfungsraum liegt: __Stift und Papier__.',
        },
        {
          titel: 'Reihenfolge einhalten',
          text: 'Wie am Prüfungstag: __Lesen → Hören → Schreiben__, dazwischen höchstens zehn Minuten Pause. Die Ermüdung gehört zur Messung.',
        },
        {
          titel: 'Nichts nachschlagen, nichts zurückspulen',
          text: 'Was du nicht weißt, entscheidest du trotzdem — __ein leeres Feld ist immer null Punkte__, eine begründete Vermutung nicht.',
        },
        {
          titel: 'Heute abheften, morgen korrigieren',
          text: 'Nach der Simulation: alles weglegen. Die Korrektur folgt __am nächsten Tag mit frischem Blick__ — wie ein Prüfer, nicht wie ein Autor.',
        },
      ],
    },

    { type: 'rule' },

    // ── 5. Beispiele: die Fehlertypen ─────────────────────────────
    {
      type: 'prose',
      eyebrow: 'Beispiele — Die Fehlertypen im Überblick',
      card: true,
      titel: 'Kenne deinen Gegner, bevor du korrigierst',
      absaetze: [
        'Bevor du unten in die Simulation gehst, kalibriere dein Auge: Das sind die **Fehlertypen, die spanischsprachige C1-Kandidaten am häufigsten Punkte kosten** — geordnet nach Kategorie. In der Korrekturphase wirst du jeden gefundenen Fehler einer dieser Kategorien zuordnen.',
      ],
    },
    {
      type: 'beispiele',
      kicker: 'Ausdruck',
      titel: 'Falsche Freunde und Lehnübersetzungen',
      items: [
        { text: '*Ich habe an dem Kongress ==assistiert==.* → *Ich habe an dem Kongress **teilgenommen**.*', gl: '— *assistieren* heißt „helfen“; klassischer falscher Freund von *asistir*' },
        { text: '*Wir müssen endlich eine Entscheidung ==nehmen==.* → *… eine Entscheidung **treffen**.*', gl: '— Kollokation: *tomar una decisión* lässt sich nicht Wort für Wort übertragen' },
        { text: '*Man muss auch die Kosten ==in Betracht nehmen==.* → *… **in Betracht ziehen** / **berücksichtigen**.*', gl: '— das Funktionsverbgefüge verlangt *ziehen* (Lektion 8)' },
        { text: '*Darf ich eine Frage ==machen==?* → *Darf ich eine Frage **stellen**?*' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'Wortstellung',
      titel: 'Verbposition — der teuerste Fehler',
      items: [
        { text: '*…, weil die Regierung ==hat== zu spät reagiert.* → *…, weil die Regierung zu spät reagiert **hat**.*', gl: '— Verbendstellung im Nebensatz, ausnahmslos' },
        { text: '*Deshalb ==die Politik muss== handeln.* → *Deshalb **muss die Politik** handeln.*', gl: '— besetzt ein Adverb Position 1, folgt sofort das finite Verb (Inversion)' },
        { text: '*Er ist ==mit dem Zug gestern== gefahren.* → *Er ist **gestern mit dem Zug** gefahren.*', gl: '— Angabenfolge: temporal vor modal (te-ka-mo-lo)' },
        { text: '*…, dass man ==kann== das Problem lösen.* → *…, dass man das Problem lösen **kann**.*' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'Bezug & Kongruenz',
      titel: 'Wer bezieht sich worauf?',
      items: [
        { text: '*Die Regierung hat reagiert, aber ==sie haben== zu lange gewartet.* → *… aber **sie hat** zu lange gewartet.*', gl: '— Kollektiva sind im Deutschen Singular. ~~En español «el gobierno han…» también suena mal — aquí el plural mental viene de «ellos».~~' },
        { text: '*der Kollege, ==den== ich oft geholfen habe* → *der Kollege, **dem** ich oft geholfen habe*', gl: '— das Relativpronomen übernimmt den Kasus seines Verbs: *helfen* + Dativ' },
        { text: '*Jeder der Teilnehmer ==haben== ein Zertifikat erhalten.* → *Jeder der Teilnehmer **hat** …*', gl: '— *jeder* zählt, nicht das Genitivattribut daneben' },
        { text: '*Als Anna ihre Chefin traf, war ==sie== nervös.* → *Als Anna ihre Chefin traf, war **Anna** nervös.* (oder umformulieren)', gl: '— Bezugsfehler: ein mehrdeutiges Pronomen kostet Punkte bei der Kohärenz' },
      ],
    },

    { type: 'rule' },

    // ── 6. Übungen = die Simulation ───────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Anwendung — Übung 1 · Lesen',
      modul: 'Lesen · Teil 2 · Lückentext (empfohlen: 12 Minuten)',
      titel: 'Simulation · 8 Lücken',
      anweisung: 'Lies den Text und wähle für jede Lücke das passende Wort aus der Liste. **Zwei Wörter bleiben übrig.** Timer auf 12 Minuten — das entspricht dem Tempo des echten Moduls.',
      absaetze: [
        'Ehrenamtliches Engagement gilt {1} als Kitt der Gesellschaft. Millionen Menschen setzen sich in ihrer Freizeit für andere ein, {2} dafür eine Bezahlung zu erwarten. {3} einer aktuellen Studie engagiert sich fast jeder dritte Erwachsene regelmäßig. Dennoch klagen viele Vereine über einen {4} an Nachwuchs. Das liegt {5} daran, dass sich die Formen des Engagements gewandelt haben: Statt sich langfristig an einen Verein zu binden, bevorzugen Jüngere projektbezogene Einsätze. {6} dieser Entwicklung müssen die Organisationen umdenken. Wer Freiwillige gewinnen will, muss ihnen Gestaltungsspielräume {7} und flexible Zeitmodelle anbieten. Andernfalls {8} das Ehrenamt Gefahr, an gesellschaftlicher Bedeutung zu verlieren.',
      ],
      optionen: ['Angesichts', 'einräumen', 'gemeinhin', 'gerät', 'Laut', 'läuft', 'Mangel', 'nicht zuletzt', 'ohne', 'Zufolge'],
      loesungen: [
        '{1} **gemeinhin** — feste Verbindung *gilt gemeinhin als* („allgemein, üblicherweise“). *Nicht zuletzt* wäre hier grammatisch denkbar, wird aber in {5} zwingend gebraucht — solche Konkurrenzen löst du im Teil 2 immer über das Gesamtbild',
        '{2} **ohne** — *ohne … zu* + Infinitiv: der modale Infinitivsatz',
        '{3} **Laut** — *laut* + Dativ steht vor dem Nomen; das Distraktorwort *zufolge* wäre nachgestellt (*einer Studie zufolge*)',
        '{4} **Mangel** — *der Mangel an* + Dativ; die Präposition *an* nach der Lücke verrät das Nomen',
        '{5} **nicht zuletzt** — „vor allem, unter anderem“; typische schriftsprachliche Wendung vor *daran, dass*',
        '{6} **Angesichts** — Genitivpräposition (*dieser Entwicklung*), kausal-situativ',
        '{7} **einräumen** — Kollokation: *jemandem Spielräume einräumen*; Verbendstellung nach *muss … und*',
        '{8} **läuft** — Funktionsverbgefüge *Gefahr laufen*; das Distraktorwort *gerät* bräuchte *in Gefahr*',
      ],
      kommentar: 'Übrig bleiben **Zufolge** und **gerät** — beide scheitern an der Grammatik, nicht an der Bedeutung. Genau so arbeiten die Distraktoren im echten Teil 2: Prüfe immer Stellung, Kasus und Kollokation, nie nur den Sinn.',
    },

    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Übung 2 · Hören',
      modul: 'Hören · Teil 4 · Vortrag (wird zweimal gehört)',
      titel: 'Simulation · 5 Aussagen',
      anweisung: 'Lass dir das folgende Transkript von jemandem **in normalem Tempo vorlesen** — oder nimm es selbst auf und höre die Aufnahme einen Tag später. Höre genau zweimal, wie im echten Teil 4 — dem einzigen Teil, der zweimal gespielt wird —, und nicht öfter. Entscheide dann bei jeder Aussage: richtig oder falsch? Lies die Aussagen **vor** dem Hören.',
      absaetze: [
        '**Transkript (ca. 240 Wörter):** Meine Damen und Herren, wenn heute ein Toaster kaputtgeht, landet er meistens im Müll — obwohl oft nur ein Kabel oder ein Schalter defekt ist. Genau hier setzen die sogenannten Repair-Cafés an, über die ich heute sprechen möchte.\nDie Idee stammt aus den Niederlanden: 2009 eröffnete in Amsterdam das erste Repair-Café, ein offener Treffpunkt, an dem ehrenamtliche Fachleute gemeinsam mit den Besuchern defekte Alltagsgegenstände reparieren. Das Konzept hat sich seither weltweit verbreitet; allein im deutschsprachigen Raum gibt es heute weit über tausend solcher Initiativen.\nInteressant ist, warum die Menschen kommen. Anders als man vermuten könnte, steht das Sparen für die meisten nicht im Vordergrund. In Befragungen nennen die Besucherinnen und Besucher an erster Stelle den Wunsch, Ressourcen zu schonen und der Wegwerfmentalität etwas entgegenzusetzen — und gleich danach die Freude am gemeinsamen Tüfteln. Das Repair-Café ist eben auch ein sozialer Ort.\nAllerdings stoßen die Initiativen an Grenzen, für die sie selbst nichts können. Viele Geräte sind so konstruiert, dass man sie ohne Spezialwerkzeug gar nicht öffnen kann, und für ältere Modelle sind schlicht keine Ersatzteile mehr erhältlich. Etwa jede dritte Reparatur scheitert aus genau diesem Grund.\nDeshalb bleibt es nicht bei der Praxis: Aus der Bewegung ist eine politische Forderung erwachsen — das Recht auf Reparatur. Hersteller sollen verpflichtet werden, Ersatzteile und Anleitungen bereitzustellen. Ich halte diese Forderung für überfällig. Denn eine Gesellschaft, die reparieren kann, was sie besitzt, konsumiert nicht nur nachhaltiger — sie versteht ihre Dinge auch wieder.',
      ],
      optionen: [
        '1. Die meisten Besucher kommen laut der Referentin in erster Linie, um Geld zu sparen.',
        '2. Das erste Repair-Café wurde 2009 in den Niederlanden eröffnet.',
        '3. Im deutschsprachigen Raum gibt es einige hundert Repair-Cafés.',
        '4. Rund ein Drittel der Reparaturen scheitert an der Konstruktion der Geräte oder an fehlenden Ersatzteilen.',
        '5. Die Referentin steht der Forderung nach einem Recht auf Reparatur skeptisch gegenüber.',
      ],
      loesungen: [
        '1. **Falsch** — das Sparen steht „nicht im Vordergrund“; an erster Stelle: Ressourcen schonen, dann die Freude am Tüfteln.',
        '2. **Richtig** — „2009 eröffnete in Amsterdam das erste Repair-Café.“',
        '3. **Falsch** — es sind „weit über tausend“. Achtung: Die Aussage klingt plausibel; geprüft wird die exakte Größenordnung.',
        '4. **Richtig** — „Etwa jede dritte Reparatur scheitert aus genau diesem Grund“ — und „dieser Grund“ verweist auf Konstruktion und Ersatzteile.',
        '5. **Falsch** — sie hält die Forderung „für überfällig“, ist also klar dafür. Meinungsfragen entscheiden sich fast immer an **einem** wertenden Wort.',
      ],
      kommentar: 'Aussage 4 testet einen **Bezug**: Du musst „aus genau diesem Grund“ auf den Satz davor beziehen. Dieselbe Fähigkeit — Referenzen auflösen — brauchst du beim Lesen und in deiner eigenen Korrektur (Bezugsfehler!).',
    },

    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Übung 3 · Schreiben',
      modul: 'Schreiben · Teil 1 · Diskussionsbeitrag (~230 Wörter, 40 Min. empfohlen)',
      titel: 'Simulation · Diskussionsbeitrag',
      anweisung: 'Schreibe von Hand, ohne Hilfsmittel, Timer auf 40 Minuten. Vergleiche erst **nach** der eigenen Korrektur (siehe unten) mit der Mögliche-Lösung.',
      absaetze: [
        'Sie lesen in einem Online-Forum eine Diskussion zum Thema **„Sollten innereuropäische Kurzstreckenflüge verboten werden?“** Schreiben Sie einen Diskussionsbeitrag (ca. 230 Wörter), in dem Sie **Ihre Meinung darlegen**, **Argumente für und gegen ein Verbot abwägen**, **eigene Erfahrungen oder Beispiele einbringen** und **ein Fazit ziehen**.',
      ],
      loesungLabel: 'Mögliche Lösung (ca. 230 Wörter)',
      loesungen: [
        'Kaum ein Thema zeigt den Konflikt zwischen Klimaschutz und persönlicher Freiheit so deutlich wie die Frage, ob innereuropäische Kurzstreckenflüge verboten werden sollten. Ich meine: Ein Verbot klingt radikal, ist aber in vielen Fällen der richtige Weg.',
        'Für ein Verbot spricht vor allem die Klimabilanz. Gerade auf kurzen Strecken ist das Flugzeug pro Kopf mit Abstand das schädlichste Verkehrsmittel, obwohl häufig eine schnelle Alternative auf der Schiene existiert. Wo ein Zug das Ziel in unter vier Stunden erreicht, lässt sich ein Flug kaum noch rechtfertigen. Hinzu kommt, dass Fliegen durch Steuerprivilegien künstlich billig bleibt — von fairem Wettbewerb zwischen den Verkehrsmitteln kann also keine Rede sein. Frankreich hat zudem vorgemacht, dass ein solches Verbot politisch durchsetzbar ist.',
        'Kritiker wenden ein, ein Verbot bevormunde die Bürger und treffe Regionen ohne gute Bahnanbindung besonders hart. Dieser Einwand ist berechtigt — er spricht jedoch nicht gegen das Verbot selbst, sondern für einen massiven Ausbau des Schienennetzes. Solange Bahnfahren teurer und unbequemer ist als Fliegen, setzt man mit Verboten allein am falschen Ende an.',
        'Aus eigener Erfahrung kann ich sagen: Seit ich für Strecken unter tausend Kilometern konsequent den Zug nehme, empfinde ich das Reisen als entspannter, nicht als Verzicht. Ein Verbot von Kurzstreckenflügen sollte deshalb kommen — allerdings flankiert von günstigen und verlässlichen Zugverbindungen. Erst dann wird aus einem Verbot ein echter Fortschritt, den auch die Mehrheit mitträgt — und kein Symbol, über das sich alle nur ärgern.',
      ],
      kommentar: 'Auch eine klare **Gegenposition** ist völlig gültig — bewertet wird nicht deine Meinung, sondern Erfüllung, Kohärenz, Wortschatz und Strukturen. Beachte die Dosierung: pro Absatz ein bis zwei gehobene Strukturen (Konjunktiv der Redewiedergabe: *bevormunde*, Nominalphrase: *Ausbau des Schienennetzes*), nicht mehr.',
    },

    { type: 'rule' },

    // ── 7. Prüfungsbezug: die Selbstkorrektur ─────────────────────
    {
      type: 'prose',
      eyebrow: 'Prüfungsbezug — Die Selbstkorrektur',
      card: true,
      titel: 'Korrigiere wie ein Prüfer: drei Durchgänge',
      absaetze: [
        'Am Tag nach der Simulation korrigierst du in drei Durchgängen. **Erster Durchgang — als Prüfer lesen:** Bewerte deinen Text mit der Rubrik unten, Kriterium für Kriterium, und vergib je 0 bis 5 Punkte. **Zweiter Durchgang — Fehlerjagd:** Geh den Text Satz für Satz durch und markiere jeden Fehler mit seiner Kategorie (Kasus, Wortstellung, Bezug, Ausdruck, Kongruenz). **Dritter Durchgang — Fehlerkartei:** Übertrage jeden Fehler mit korrigierter Version auf eine Karte. ~~Cada error entra una sola vez en el fichero — el objetivo es no volver a verlo nunca.~~',
      ],
    },
    {
      type: 'tabelle',
      eyebrow: 'Prüfungsbezug — Vereinfachte Rubrik (je 0–5 Punkte)',
      kopf: ['Kriterium', 'Leitfrage bei der Selbstkorrektur', 'Warnsignal'],
      zeilen: [
        ['Erfüllung der Aufgabe', 'Habe ich alle Punkte der Aufgabe behandelt — im richtigen Format, Register und Umfang?', 'ein Leitpunkt fehlt · Wortzahl deutlich unter der Vorgabe · Forum-Beitrag klingt wie ein Brief'],
        ['Kohärenz', 'Führt ein roter Faden durch den Text? Verbinden Konnektoren die Absätze? Sind alle Verweise eindeutig?', 'Gedankensprünge · mehrdeutige Pronomen (Bezugsfehler) · jeder Satz beginnt gleich'],
        ['Wortschatz', 'Ist der Wortschatz präzise, variiert und dem Thema angemessen?', 'Wiederholungen (dreimal *wichtig*) · vage Verben (*machen*, *sein*) · wörtliche Übertragungen aus dem Spanischen'],
        ['Strukturen', 'Nutze ich C1-Strukturen korrekt — Nominalstil, Passiv, Konjunktiv, komplexe Nebensätze?', 'nur Hauptsätze · Kasusfehler nach Präpositionen · Verstöße gegen die Verbstellung'],
      ],
    },
    {
      type: 'modell',
      eyebrow: 'Prüfungsbezug — Korrigierter Lernertext',
      thema: 'Auszug aus einem Diskussionsbeitrag zum selben Thema — mit sechs typischen Fehlern spanischsprachiger Kandidaten',
      woerter: 'Auszug, ca. 65 Wörter · Fehler markiert, darunter kommentiert',
      absaetze: [
        'Meiner Meinung nach ==das Verbot ist== eine gute Idee. ==Wegen dem Klimawandel== müssen wir schnell handeln, und die Politik kann nicht mehr warten. Viele Menschen fliegen nur, weil die Tickets ==sind billiger== als eine Bahnfahrt. Das ist ein Problem, ==die== wir nicht länger ignorieren dürfen. Deshalb sollte man die Bahnpreise senken und mehr Nachtzüge ==realisieren==. Ich bin sicher, dass die Mehrheit diese Maßnahme ==unterstützen==.',
      ],
      annotationen: [
        { tag: 'Wortstellung · Position 2', text: '*Meiner Meinung nach* besetzt Position 1 — danach folgt sofort das finite Verb: **„Meiner Meinung nach ist das Verbot eine gute Idee.“** ~~En español el orden no cambia tras «en mi opinión» — en alemán, siempre.~~' },
        { tag: 'Kasusfehler', text: '*wegen* verlangt den Genitiv: **„Wegen des Klimawandels“**. *Wegen dem* ist gesprochene Sprache und kostet im Schreiben Punkte.' },
        { tag: 'Wortstellung · Nebensatz', text: 'Nach *weil* steht das finite Verb am Ende: **„weil die Tickets billiger sind“**.' },
        { tag: 'Bezugsfehler · Relativpronomen', text: '*das Problem* ist Neutrum — das Relativpronomen muss sich danach richten: **„ein Problem, das wir nicht länger ignorieren dürfen“**.' },
        { tag: 'Ausdrucksfehler', text: '*realisieren* heißt „verwirklichen“ oder „bemerken“, passt hier aber nicht zur Kollokation: **„mehr Nachtzüge einführen“** (oder *einrichten*).' },
        { tag: 'Kongruenz', text: '*die Mehrheit* ist Singular: **„dass die Mehrheit diese Maßnahme unterstützt“**.' },
      ],
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Reserviere in der echten Prüfung die **letzten fünf Minuten** jeder Schreibaufgabe für eine Mini-Selbstkorrektur — aber prüfe dann nur deine **zwei häufigsten Fehlerkategorien** aus der Fehlerkartei, nicht alles. Wer in fünf Minuten „den ganzen Text“ prüft, findet nichts; wer gezielt nach Verbstellung und Kasus sucht, findet fast immer zwei Fehler. Zwei korrigierte Fehler können beim Kriterium „Strukturen“ den Unterschied machen.',
    },

    { type: 'rule' },

    // ── 8. Abschluss ──────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Das bleibt', 'Konkret'],
      zeilen: [
        ['Simulation = reale Bedingungen', 'Timer, kein Wörterbuch, Reihenfolge Lesen → Hören → Schreiben'],
        ['Kein Feld bleibt leer', 'eine begründete Vermutung ist besser als null Punkte'],
        ['Korrektur erst am Folgetag', 'mit frischem Blick — als Prüfer, nicht als Autor'],
        ['Vier Kriterien, je 0–5 Punkte', 'Erfüllung · Kohärenz · Wortschatz · Strukturen'],
        ['Fehler bekommen Namen', 'Kasus, Wortstellung, Bezug, Ausdruck, Kongruenz'],
        ['Fehlerkartei führen', 'jeder Fehler einmal — mit korrigierter Version daneben'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich habe die drei Simulationsaufgaben unter Zeitdruck und ohne Hilfsmittel bearbeitet.',
        'Ich habe meinen Diskussionsbeitrag mit der Vier-Kriterien-Rubrik bewertet.',
        'Ich kann jeden gefundenen Fehler einer Kategorie zuordnen und mit dem Fachbegriff benennen.',
        'Meine Fehlerkartei ist angelegt — mit meinen zwei häufigsten Fehlertypen ganz oben.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Die erste Generalprobe hat dir gezeigt, **wo** du stehst; die Fehlerkartei zeigt dir, **woran** du arbeitest. In der letzten Lektion folgt die zweite, anspruchsvollere Simulation — mit Satzeinsetzung, einem kompletten Vortrag fürs Sprechen und der formellen Nachricht. Dazu bekommst du den Plan für die letzten sieben Tage vor der Prüfung und die Checkliste für den Prüfungstag selbst.',
    },
  ],
}
