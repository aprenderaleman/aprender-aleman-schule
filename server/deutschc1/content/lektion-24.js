// Lektion 24 · Schreiben Teil 1 — Der Diskussionsbeitrag
//
// Ausbau der Kurzversion (curso-c1.html) auf den Standard der 8 Secciones.
// Erhalten geblieben: die Vier-Schritte-Struktur, die Redemittel-Gruppen und
// das kommentierte Musterbeispiel „Smartphone-Verbot". Neu: Kernwortschatz
// der Argumentation, erweiterte Redemittel, drei Übungen (zweites Thema:
// Ehrenamt) und Prüfungsbezug mit kompletter Aufgabe + Mögliche Lösung.

export default {
  spec: ['Bloque 2', 'Prüfungsstrategie', 'Niveau C1', 'Prüfungsrelevanz: Schreiben Teil 1 (~230 Wörter · 40 Min)'],
  h1: 'Schreiben Teil 1 — Der Diskussionsbeitrag',
  lead: 'Einen Standpunkt in einem Online-Forum abwägen, begründen und überzeugend formulieren — die große Schreibaufgabe des Moduls.',

  content: [
    // ── 2. Lernziele ──────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'Am Ende kannst du einen vollständigen Diskussionsbeitrag von ~230 Wörtern in 40 Minuten planen, schreiben und prüfen.',
        'Du wägst Pro und Contra sichtbar ab und beziehst eine begründete eigene Position — der Kern des Kriteriums „Erfüllung der Aufgabe“.',
        'Du setzt für jede Textfunktion (einleiten, argumentieren, entkräften, schließen) passende C1-Redemittel ein, ohne den Text damit zu überladen.',
        'Du beherrschst den Kernwortschatz der Argumentation mit seinen festen Kollokationen und Präpositionen.',
      ],
    },

    { type: 'rule' },

    // ── 3. Kernwortschatz ─────────────────────────────────────────
    {
      type: 'wortschatz',
      eyebrow: 'Kernwortschatz — die Sprache der Argumentation',
      items: [
        { wort: 'die Streitfrage', kollokation: 'die Streitfrage benennen', es: 'cuestión polémica' },
        { wort: 'der Standpunkt', kollokation: 'einen Standpunkt vertreten', es: 'postura, punto de vista' },
        { wort: 'die These', kollokation: 'eine These aufstellen', es: 'tesis, afirmación' },
        { wort: 'abwägen', kollokation: 'Vor- und Nachteile gegeneinander abwägen', es: 'sopesar' },
        { wort: 'der Befürworter', kollokation: 'die Befürworter argumentieren, dass…', es: 'partidario, defensor' },
        { wort: 'der Kritiker', kollokation: 'Kritiker wenden ein, dass…', es: 'crítico, detractor' },
        { wort: 'einwenden', kollokation: 'gegen diese Sichtweise lässt sich einwenden…', es: 'objetar' },
        { wort: 'entkräften', kollokation: 'ein Argument entkräften', es: 'rebatir, desmontar' },
        { wort: 'überwiegen', kollokation: 'die Vorteile überwiegen deutlich', es: 'predominar, pesar más' },
        { wort: 'plädieren für', kollokation: 'für einen Mittelweg plädieren', es: 'abogar por' },
        { wort: 'die Maßnahme', kollokation: 'wirksame Maßnahmen ergreifen', es: 'medida' },
        { wort: 'der Mittelweg', kollokation: 'einen Mittelweg wählen', es: 'término medio, vía intermedia' },
        { wort: 'sich auseinandersetzen mit', kollokation: 'sich kritisch mit einem Thema auseinandersetzen', es: 'analizar a fondo, confrontarse con' },
        { wort: 'stichhaltig', kollokation: 'ein stichhaltiges Argument', es: 'sólido, concluyente (argumento)' },
      ],
      hinweis: 'Vorsicht mit ~~«discutir»~~: **diskutieren** heißt sachlich debattieren; wer sich zankt, **streitet**. Und bei *Meiner Ansicht/Meinung nach…* steht das *nach* nur **am Ende**, nie zusätzlich davor — ~~«según mi opinión» produce el calco erróneo *nach meiner Meinung nach*~~.',
    },

    { type: 'rule' },

    // ── 4. Erklärung ──────────────────────────────────────────────
    {
      type: 'prose',
      eyebrow: 'Erklärung',
      card: true,
      titel: 'Das Aufgabenformat',
      absaetze: [
        'Du liest einen kurzen Forumsbeitrag oder eine Meldung zu einer aktuellen __Streitfrage__ und schreibst dazu einen eigenen Beitrag von etwa **230 Wörtern**. Die Aufgabenstellung nennt **Leitpunkte**, die dein Text erkennbar behandeln muss — typischerweise: die Bedeutung des Themas erläutern, Argumente für beide Seiten nennen, die eigene Meinung begründen und Erfahrungen oder Beispiele einbringen.',
        'Bewertet wird der Text mit den vier Kriterien aus Lektion 23. Für Teil 1 heißt das konkret: **Erfüllung** = alle Leitpunkte plus echtes Abwägen; **Kohärenz** = klar getrennte Absätze mit Konnektoren; **Wortschatz** = die Lexik der Argumentation statt *gut/schlecht/wichtig*; **Strukturen** = Nebensätze, Passiv, gelegentlich eine Nominalphrase. Plane **40 Minuten**: fünf fürs Gliedern, dreißig fürs Schreiben, fünf fürs Prüfen.',
      ],
    },

    {
      type: 'steps',
      eyebrow: 'Erklärung — Die Struktur in vier Schritten',
      steps: [
        {
          titel: 'Einleitung',
          text: '__Bezug zum Thema__ herstellen und die Streitfrage benennen, ohne die eigene Meinung vorwegzunehmen. *„In letzter Zeit wird häufig darüber diskutiert, ob…“* Zwei bis drei Sätze genügen — die Einleitung ist Rampe, nicht Bühne.',
        },
        {
          titel: 'Hauptteil — Pro & Contra',
          text: 'Mindestens __ein Argument dafür und eines dagegen__, jedes mit Beispiel oder Beleg gestützt. **Das Abwägen ist der Kern der Aufgabe**: Wer nur eine Seite beleuchtet, verliert bei „Erfüllung der Aufgabe“, egal wie elegant er schreibt.',
        },
        {
          titel: 'Eigene Position',
          text: 'Einen __begründeten Standpunkt__ beziehen — gern einen differenzierten Mittelweg, der beide Seiten ernst nimmt. Die Begründung zählt mehr als die Meinung selbst: *Meiner Ansicht nach…, denn/da…*',
        },
        {
          titel: 'Schluss',
          text: '__Fazit__ ziehen und mit einem Ausblick oder Appell enden. Der Schluss wiederholt nicht den Hauptteil, sondern verdichtet ihn in einem Gedanken.',
        },
      ],
    },

    {
      type: 'prose',
      card: true,
      titel: 'Abwägen heißt nicht schwanken',
      absaetze: [
        'Ein häufiges Missverständnis: „Pro und Contra“ bedeutet nicht, unentschieden zu bleiben. Die Prüfung will sehen, dass du **die Gegenposition kennst und trotzdem klar Stellung beziehst**. Das stärkste Muster ist die Konzession: *Zwar trifft es zu, dass…, dennoch überwiegen…* — du räumst dem Gegenargument einen echten Platz ein und entkräftest es dann.',
        'Zweites Missverständnis: mehr Argumente = bessere Note. Das Gegenteil stimmt. **Zwei entwickelte Argumente** (Behauptung → Begründung → Beispiel) bringen mehr als fünf aufgezählte. ~~En 230 palabras no caben cinco argumentos desarrollados; caben dos buenos y una posición clara.~~',
      ],
    },

    {
      type: 'redemittel',
      eyebrow: 'Redemittel nach Funktion',
      gruppen: [
        {
          fn: 'Einleiten',
          saetze: [
            { satz: 'In letzter Zeit wird häufig darüber diskutiert, ob…' },
            { satz: 'Kaum ein Thema wird derzeit so kontrovers debattiert wie…' },
            { satz: 'Die Frage, ob…, gewinnt zunehmend an Bedeutung.' },
          ],
        },
        {
          fn: 'Argument anführen + Beispiel',
          saetze: [
            { satz: 'Ein gewichtiges Argument dafür ist…, denn…' },
            { satz: 'Das zeigt sich (unter anderem) daran, dass…' },
            { satz: 'Befürworter verweisen zu Recht darauf, dass…', gloss: '~~verweisen auf + Akk.: remitir a, aducir~~' },
          ],
        },
        {
          fn: 'Gegenargument einbringen',
          saetze: [
            { satz: 'Dem ist jedoch entgegenzuhalten, dass…' },
            { satz: 'Kritiker wenden ein, dass…' },
            { satz: 'Auf der anderen Seite darf man nicht übersehen, dass…' },
          ],
        },
        {
          fn: 'Abwägen und entkräften',
          saetze: [
            { satz: 'Zwar trifft es zu, dass…, dennoch…' },
            { satz: 'So berechtigt dieser Einwand ist — er greift zu kurz, weil…' },
            { satz: 'Dieses Argument verliert an Gewicht, wenn man bedenkt, dass…' },
          ],
        },
        {
          fn: 'Position beziehen',
          saetze: [
            { satz: 'Meiner Ansicht nach spricht vieles dafür, dass…' },
            { satz: 'Ich plädiere daher für einen Mittelweg: …' },
            { satz: 'Aus eigener Erfahrung kann ich bestätigen, dass…' },
          ],
        },
        {
          fn: 'Schließen',
          saetze: [
            { satz: 'Zusammenfassend lässt sich sagen, dass…' },
            { satz: 'Alles in allem überwiegen aus meiner Sicht die Vorteile/Nachteile.' },
            { satz: 'Es bleibt zu hoffen, dass…' },
          ],
        },
      ],
    },

    { type: 'rule' },

    // ── 5. Beispiele + Musterbeispiel ─────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele — vom B2-Satz zum C1-Satz',
      kicker: 'Argumentieren',
      titel: 'Behauptung → Begründung → Beleg',
      items: [
        { text: '**B2:** *Sport ist gesund. Das wissen alle.* → **C1:** *Regelmäßige Bewegung **beugt** nachweislich zahlreichen Erkrankungen **vor** — das belegen inzwischen unzählige Studien.*', gl: '— *vorbeugen* + Dat., *belegen*: die Lexik trägt das Argument' },
        { text: '**B2:** *Viele Leute finden das gut.* → **C1:** *Diese Position **findet** in der Bevölkerung **breite Zustimmung**.*' },
        { text: '**B2:** *Das ist schlecht für die Umwelt.* → **C1:** *Dies **belastet** die Umwelt **erheblich** und **steht** dem Klimaziel **entgegen**.*' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'Konzession',
      titel: 'Zugeben — und trotzdem gewinnen',
      items: [
        { text: '*Zwar **erfordert** die Umstellung anfangs hohe Investitionen, **dennoch** rechnet sie sich langfristig.*', gl: '— *zwar … dennoch*: die klassische Konzessionsklammer' },
        { text: '*So verständlich die Sorge um Arbeitsplätze ist — sie **darf** den notwendigen Wandel **nicht aufhalten**.*', gl: '— Konzession ohne Konnektor, über die Satzmelodie: sehr C1' },
        { text: '*Selbst wenn man die Kosten außer Acht lässt, **bleibt** das organisatorische Problem **bestehen**.*' },
      ],
    },

    {
      type: 'modell',
      eyebrow: 'Musterbeispiel — kommentiert',
      thema: 'Thema: Smartphone-Verbot an Schulen',
      woerter: '208 Wörter',
      absaetze: [
        '==In vielen Ländern wird derzeit intensiv darüber diskutiert, ob== Smartphones an Schulen verboten werden sollten. Während einige Bundesländer bereits klare Regeln erlassen haben, überlassen andere die Entscheidung den einzelnen Schulen. Die Antwort fällt keineswegs so eindeutig aus, wie beide Lager behaupten.',
        '==Ein gewichtiges Argument für== ein Verbot ist die Konzentration der Lernenden. Studien zeigen, dass ständige Benachrichtigungen die Aufmerksamkeit erheblich beeinträchtigen — wer alle fünf Minuten aufs Display schaut, verarbeitet den Unterrichtsstoff nur oberflächlich. Lehrkräfte berichten zudem, dass schon die bloße Anwesenheit des Geräts auf dem Tisch die Gedanken abschweifen lässt.',
        '==Dem ist jedoch entgegenzuhalten, dass== Smartphones ein wertvolles Lernwerkzeug sein können, ==zumal== digitale Kompetenzen in Ausbildung und Beruf zunehmend unverzichtbar werden. Ein pauschales Verbot nähme der Schule die Chance, verantwortungsvollen Umgang überhaupt zu vermitteln — genau die Kompetenz also, die später überall verlangt wird.',
        '==Meiner Ansicht nach== sollte man deshalb einen Mittelweg wählen: Handys bleiben im Unterricht grundsätzlich ausgeschaltet, dürfen aber für konkrete Lernaufgaben gezielt eingesetzt werden. An meiner eigenen Schule hat ein solches Modell die Diskussionen spürbar beruhigt und den Unterricht zugleich merklich entlastet.',
        '==Zusammenfassend lässt sich sagen, dass== weder ein striktes Verbot noch uneingeschränkte Nutzung die beste Lösung ist. Entscheidend ist nicht das Gerät, sondern der verantwortungsvolle Umgang mit digitalen Medien — und genau den muss Schule lehren.',
      ],
      annotationen: [
        { tag: 'Einleitung', text: 'Bezug + Streitfrage; der zweite Satz kündigt das Abwägen an, ohne die Meinung zu verraten.' },
        { tag: 'Pro + Beleg', text: 'Behauptung → Studie → konkretisierendes Beispiel („alle fünf Minuten“). Ein Argument, voll entwickelt.' },
        { tag: 'Contra', text: 'Gegenargument mit dem C1-Konnektor *zumal* und einem Konjunktiv II (*nähme*) — Strukturen-Punkte.' },
        { tag: 'Position', text: 'Begründeter Mittelweg + eigene Erfahrung: deckt gleich zwei typische Leitpunkte ab.' },
        { tag: 'Schluss', text: 'Fazit verdichtet den Text in einer Pointe, statt ihn zu wiederholen.' },
      ],
    },

    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Plane für Teil 1 etwa **40 der 75 Minuten**. Baue sichtbar **ein Gegenargument** ein — fehlt das Abwägen, sinkt „Erfüllung der Aufgabe“ unweigerlich. Halte die Wortzahl (±10 % sind unkritisch) und setze pro Absatz **genau ein** Redemittel aus dieser Lektion ein: Das wirkt souverän; drei pro Absatz wirken auswendig gelernt.',
    },

    { type: 'rule' },

    // ── 6. Übungen ────────────────────────────────────────────────
    {
      type: 'uebung',
      eyebrow: 'Anwendung — Übung 1 · Erkennen',
      frage: 'Ein Diskussionsbeitrag ist in Einzelsätze zerfallen. Ordne jeden Satz seiner Funktion zu: Einleitung, Pro-Argument, Gegenargument, Position oder Schluss.',
      aufgaben: [
        '„Alles in allem sollte Wohnraum kein Spekulationsobjekt sein.“',
        '„Ob der Staat die Mieten deckeln sollte, wird derzeit heftig debattiert.“',
        '„Kritiker wenden ein, dass ein Mietendeckel den Wohnungsbau bremst, weil Investoren abwandern.“',
        '„Ich plädiere daher für eine Deckelung, die Neubauten ausdrücklich ausnimmt.“',
        '„Ein gewichtiges Argument dafür ist der Schutz einkommensschwacher Haushalte vor Verdrängung.“',
      ],
      loesungen: [
        '**Schluss** — *alles in allem* signalisiert das Fazit.',
        '**Einleitung** — die Streitfrage wird benannt, ohne Position zu beziehen.',
        '**Gegenargument** — *Kritiker wenden ein* + Begründung mit *weil*.',
        '**Position** — *ich plädiere für* + differenzierender Zusatz (der Mittelweg!).',
        '**Pro-Argument** — *ein gewichtiges Argument dafür ist* + konkreter Nutzen.',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 2 · Umformen',
      frage: 'Thema „Sollte ehrenamtliches Engagement für Jugendliche verpflichtend sein?“ — hebe die B2-Sätze mit den Redemitteln dieser Lektion auf C1-Niveau.',
      aufgaben: [
        'Viele Leute reden jetzt über Pflicht-Ehrenamt für Jugendliche.',
        'Ehrenamt ist gut, weil man Verantwortung lernt.',
        'Aber manche sagen, Pflicht und Freiwilligkeit passen nicht zusammen.',
        'Das stimmt ein bisschen, aber trotzdem ist die Idee gut.',
        'Ich finde, ein Pflichtjahr mit freier Auswahl ist am besten.',
      ],
      loesungen: [
        '*In letzter Zeit wird häufig darüber diskutiert, ob ehrenamtliches Engagement für Jugendliche verpflichtend sein sollte.*',
        '*Ein gewichtiges Argument dafür ist, dass junge Menschen früh Verantwortung übernehmen und dabei Empathie entwickeln.*',
        '*Kritiker wenden allerdings ein, dass sich Verpflichtung und Freiwilligkeit grundsätzlich widersprechen — erzwungenes Engagement sei kein Engagement.* ~~El Konjunktiv I (*sei*) marca que reproduces el argumento ajeno.~~',
        '*Zwar trifft dieser Einwand einen wunden Punkt, dennoch zeigt die Erfahrung, dass viele Jugendliche erst durch den Anstoß von außen ihre Begeisterung entdecken.*',
        '*Ich plädiere daher für ein verpflichtendes Engagementjahr, bei dem die Jugendlichen den Einsatzbereich frei wählen können.*',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 3 · Produzieren',
      frage: 'Schreibe zum Ehrenamts-Thema einen vollständigen Kurzbeitrag (~130 Wörter): Einleitung, ein Pro-Argument mit Beispiel, ein Gegenargument, begründete Position. Nutze die Sätze aus Übung 2 als Steinbruch, aber forme einen zusammenhängenden Text mit Konnektoren.',
      aufgabe: 'Prüfe am Ende mit der Checkliste aus Lektion 23: Kommas vor Nebensätzen, Verbstellung, Genus.',
      loesung: '**Mögliche Lösung** (ca. 130 Wörter — dein Text darf inhaltlich abweichen, solange alle vier Funktionen erkennbar sind):\n*In letzter Zeit wird häufig darüber diskutiert, ob ehrenamtliches Engagement für Jugendliche verpflichtend sein sollte. Ein gewichtiges Argument dafür ist der soziale Zusammenhalt: Wer früh Verantwortung übernimmt, entwickelt Empathie und ein stärkeres Gemeinschaftsgefühl. Das zeigt sich daran, dass Jugendliche mit ehrenamtlicher Erfahrung später deutlich häufiger gesellschaftlich aktiv bleiben — sei es im Sportverein, in der Nachbarschaftshilfe oder im Umweltschutz. Kritiker wenden allerdings ein, dass erzwungenes Engagement seinen Kern verliere — Freiwilligkeit lasse sich nicht verordnen. Zwar trifft dieser Einwand einen wunden Punkt, dennoch entdecken viele junge Menschen ihre Begeisterung erst durch einen Anstoß von außen; das bestätigen die Erfahrungen der Freiwilligendienste seit Jahren. Ich plädiere daher für ein verpflichtendes Engagementjahr mit frei wählbarem Einsatzbereich: Die Pflicht öffnet die Tür, die Wahlfreiheit sorgt dafür, dass daraus echtes, dauerhaftes Engagement entstehen kann.*',
    },

    { type: 'rule' },

    // ── 7. Prüfungsbezug ──────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Schreiben · Teil 1 · komplette Aufgabe',
      titel: 'Diskussionsbeitrag „Vier-Tage-Woche“ · ca. 230 Wörter · 40 Minuten',
      anweisung: 'Bearbeite die Aufgabe unter Echtbedingungen: 5 Minuten gliedern, 30 Minuten schreiben, 5 Minuten prüfen. Vergleiche erst danach mit der Lösung.',
      absaetze: [
        'Im Forum einer Wirtschaftszeitung lesen Sie: **„Immer mehr Unternehmen testen die Vier-Tage-Woche bei vollem Lohn. Ein Modell für alle — oder ein Privileg für wenige?“**\nSchreiben Sie einen Diskussionsbeitrag (ca. 230 Wörter). Gehen Sie dabei auf folgende Punkte ein:\n• Erläutern Sie, warum das Thema aktuell so intensiv diskutiert wird.\n• Nennen Sie Argumente für und gegen die Vier-Tage-Woche.\n• Begründen Sie Ihre eigene Position.\n• Beziehen Sie eigene Erfahrungen oder Beispiele ein.',
      ],
      loesungen: [
        '*Kaum ein arbeitspolitisches Thema wird derzeit so leidenschaftlich diskutiert wie die Vier-Tage-Woche bei vollem Lohnausgleich — kein Wunder, denn nach Jahren von Fachkräftemangel und Homeoffice-Debatten steht die Arbeitswelt ohnehin vor einem grundlegenden Umbruch.*',
        '*Ein gewichtiges Argument für das Modell ist die Gesundheit der Beschäftigten. Studien aus Island und Großbritannien zeigen, dass vier Arbeitstage Stress und Krankenstände deutlich reduzieren, ohne dass die Produktivität sinkt: Ausgeruhte Mitarbeiter arbeiten nachweislich konzentrierter und machen deutlich weniger Fehler.*',
        '*Dem ist jedoch entgegenzuhalten, dass sich das Modell keineswegs auf alle Branchen übertragen lässt. In der Pflege, im Handel oder im Bildungswesen kann Arbeit nicht einfach verdichtet werden, zumal dort schon heute Personal fehlt. Kritiker wenden zudem ein, dass gerade kleinere Betriebe die entstehenden Mehrkosten kaum tragen könnten.*',
        '*Meiner Ansicht nach sollte die Vier-Tage-Woche deshalb nicht flächendeckend vorgeschrieben, sondern branchenweise erprobt werden. Wo Arbeit vor allem am Schreibtisch stattfindet, spricht wenig dagegen; wo Menschen rund um die Uhr versorgt werden, braucht es andere Entlastungen. Aus eigener Erfahrung weiß ich, wie sehr schon ein einziger zusätzlicher freier Tag die Motivation und die Konzentration für die gesamte restliche Woche steigert.*',
        '*Zusammenfassend lässt sich sagen, dass die Vier-Tage-Woche kein Allheilmittel ist, wohl aber ein vielversprechendes Instrument. Statt über ein Entweder-oder zu streiten, sollten Politik und Unternehmen den Mut haben, flexible Modelle zuzulassen und ehrlich zu evaluieren — die Arbeitswelt von morgen wird ohnehin vielfältiger sein als die von gestern.*',
      ],
      loesungLabel: 'Mögliche Lösung (ca. 230 Wörter)',
      kommentar: 'Beachte die Punkteverteilung: Absatz 1 erledigt Leitpunkt 1 (Aktualität), Absätze 2–3 das Abwägen, Absatz 4 Position **und** Erfahrung, Absatz 5 das Fazit. Jeder Leitpunkt hat seinen festen Ort — genau das prüft „Erfüllung der Aufgabe“. Deine Argumente dürfen völlig andere sein; die Architektur sollte dieselbe bleiben.',
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Nummeriere beim Lesen der Aufgabe die **Leitpunkte 1–4 direkt auf dem Aufgabenblatt** und notiere hinter jeden ein Stichwort. Nach dem Schreiben hakst du sie ab. Der häufigste Punktverlust in Teil 1 ist kein Grammatikfehler, sondern ein schlicht **vergessener Leitpunkt** — meist der mit der eigenen Erfahrung.',
    },

    { type: 'rule' },

    // ── 8. Abschluss ──────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Das bleibt', 'Konkret'],
      zeilen: [
        ['Vier Schritte', 'Einleitung → Pro & Contra → Position → Schluss'],
        ['Abwägen ist Pflicht', 'mind. ein entwickeltes Gegenargument, dann entkräften'],
        ['Zwei gute statt fünf flache', 'Behauptung → Begründung → Beispiel'],
        ['Ein Redemittel pro Absatz', 'souverän statt auswendig gelernt'],
        ['Leitpunkte nummerieren', 'auf dem Aufgabenblatt markieren, am Ende abhaken'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich kann einen Diskussionsbeitrag in 40 Minuten nach der Vier-Schritte-Struktur schreiben.',
        'Ich baue ein echtes Gegenargument ein und entkräfte es mit einer Konzession (*zwar … dennoch*).',
        'Ich verfüge für jede Textfunktion über mindestens zwei Redemittel und setze sie dosiert ein.',
        'Ich kontrolliere am Ende systematisch, ob alle Leitpunkte behandelt sind.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Vom öffentlichen Forum zur persönlichen Adresse: In der nächsten Lektion steht **Teil 2, die formelle Nachricht**, im Mittelpunkt — halb so lang, aber mit eigenen Fallen: das durchgehaltene Sie-Register, der Konjunktiv II der Höflichkeit und vier Nachrichtentypen von der Beschwerde bis zur Entschuldigung.',
    },
  ],
}
