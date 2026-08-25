// Lektion 20 · Modul Hören — Überblick

export default {
  spec: ['Bloque 2', 'Prüfungsstrategie', 'Niveau C1', 'Modul Hören · ca. 40 Minuten · 4 Teile'],
  h1: 'Modul Hören — Überblick',
  lead: 'Vier Hörtexte, meist nur ein einziger Durchlauf, keine Rückspultaste: Im Modul Hören entscheidet die Vorbereitung der Sekunden vor dem Audio — und ein Plan für den Moment, in dem du den Faden verlierst.',

  content: [
    // ── 2. Lernziele ──────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'Am Ende kennst du die vier Teile des Moduls, ihre Textsorten und die Fertigkeit, die jeder misst.',
        'Du nutzt die Einlesezeit systematisch: Fragen lesen, Schlüsselwörter markieren, Erwartungen bilden.',
        'Du machst Notizen in Stichworten, ohne den laufenden Text zu verlieren — und weißt genau, was zu tun ist, wenn du den Faden doch verlierst.',
        'Du trainierst mit Transkripten so, dass die Übung dem einmaligen Hören möglichst nahekommt.',
      ],
    },

    { type: 'rule' },

    // ── 3. Kernwortschatz ─────────────────────────────────────────
    {
      type: 'wortschatz',
      eyebrow: 'Kernwortschatz — Die Sprache des Hörmoduls',
      items: [
        { wort: 'der Hörtext', kollokation: 'den Hörtext nur einmal hören', es: 'audio, texto oral' },
        { wort: 'der Sprecher / die Sprecherin', kollokation: 'die Meinung der Sprecherin wiedergeben', es: 'hablante' },
        { wort: 'die Äußerung', kollokation: 'eine Äußerung richtig zuordnen', es: 'declaración, enunciado' },
        { wort: 'die Hauptaussage', kollokation: 'die Hauptaussage eines Beitrags erfassen', es: 'idea principal' },
        { wort: 'die Einlesezeit', kollokation: 'die Einlesezeit für die Aufgaben nutzen', es: 'tiempo previo para leer los ítems' },
        { wort: 'sich Notizen machen', kollokation: 'sich beim Hören Notizen machen', es: 'tomar notas' },
        { wort: 'das Stichwort', kollokation: 'in Stichwörtern notieren', es: 'palabra clave' },
        { wort: 'mitkommen', kollokation: 'beim schnellen Sprechtempo mitkommen', es: 'seguir el ritmo' },
        { wort: 'den Faden verlieren', kollokation: 'kurz den Faden verlieren', es: 'perder el hilo' },
        { wort: 'verpassen', kollokation: 'eine Information verpassen', es: 'perderse (una información)' },
        { wort: 'entnehmen', kollokation: 'dem Gespräch eine Information entnehmen', es: 'extraer (de lo oído)' },
        { wort: 'das Transkript', kollokation: 'mit dem Transkript arbeiten', es: 'transcripción' },
        { wort: 'abdecken', kollokation: 'die Lösungen mit einem Blatt abdecken', es: 'tapar' },
        { wort: 'in Echtzeit', kollokation: 'ein Transkript in Echtzeit lesen', es: 'en tiempo real' },
      ],
      hinweis: 'Das Verb **mitkommen** ist dein Freund und dein Feind: *Ich bin nicht mitgekommen* heißt nicht *no vine con ellos*, sondern ==ich konnte nicht folgen==. ~~Falso amigo de manual para hispanohablantes.~~',
    },

    { type: 'rule' },

    // ── 4. Erklärung ──────────────────────────────────────────────
    {
      type: 'prose',
      eyebrow: 'Erklärung',
      card: true,
      titel: 'Das Modul im Überblick — und seine besondere Härte',
      absaetze: [
        'Das Modul Hören dauert **circa 40 Minuten**, umfasst **vier Teile** und bringt **100 Punkte** (bestanden ab 60). Die Besonderheit gegenüber dem Lesen: **Die meisten Texte laufen nur ein einziges Mal.** Es gibt kein Zurückblättern, kein zweites Nachschauen — was vorbei ist, ist vorbei. Nur der Vortrag am Ende wird zweimal gespielt. Vor jedem Teil bekommst du eine kurze **Einlesezeit** für die Aufgaben; geantwortet wird während des Hörens.',
        'Daraus folgt die Grundhaltung des Moduls: **Hören ist hier kein passives Verstehen, sondern aktives Erwarten.** Wer die Fragen kennt, bevor das Audio startet, hört gezielt — wer sie erst während des Hörens entziffert, hört immer einen Satz hinterher. Die Einlesezeit ist deshalb kein Vorspann, sondern der strategisch wichtigste Abschnitt des Moduls.',
      ],
    },

    {
      type: 'tabelle',
      eyebrow: 'Erklärung — Die vier Teile im Überblick',
      kopf: ['Teil', 'Text & Hördurchgänge', 'Das misst er'],
      zeilen: [
        ['Teil 1', 'Podcast / lockeres Gespräch, mehrere Abschnitte · einmal', 'globales und selektives Verstehen: Themen, Kernaussagen'],
        ['Teil 2', 'Interview mit einer Fachperson · einmal', 'Detailverstehen: Positionen, Begründungen, Nuancen'],
        ['Teil 3', 'Diskussion mit mehreren Beteiligten · einmal', 'Meinungen erkennen und den richtigen Personen zuordnen'],
        ['Teil 4', 'Vortrag / Präsentation · zweimal', 'Struktur und Detail eines monologischen Fachtextes'],
      ],
    },

    {
      type: 'steps',
      eyebrow: 'Erklärung — Vor, während und nach dem Hören',
      steps: [
        {
          badge: 'davor',
          titel: 'Die Einlesezeit auspressen',
          text: 'Lies jede Aufgabe und markiere __ein bis zwei Schlüsselwörter__ pro Item (Namen, Zahlen, Meinungsbegriffe). Bilde Erwartungen: Worum wird es gehen, welche Antworttypen sind plausibel? __Die Items folgen fast immer der Reihenfolge des Hörtextes__ — dein Finger wandert mit.',
        },
        {
          badge: 'währenddessen',
          titel: 'Mit dem Text mitgehen, sofort antworten',
          text: 'Kreuze an, __sobald__ du die Antwort hörst — nicht erst am Ende. Notizen nur in Stichworten und nur, wo die Aufgabe es braucht (Zahlen, Namen, Gegensätze). __Schreiben darf das Hören nie überholen:__ Wer mitschreibt wie ein Protokollant, verpasst den nächsten Satz.',
        },
        {
          badge: 'Faden weg?',
          titel: 'Das Notfallprotokoll',
          text: 'Du hast eine Frage verpasst? __Gib sie sofort auf__ — markiere sie mit einem Punkt, spring zum nächsten Item und such im laufenden Text den Anschluss (Sprecherwechsel, neue Unterfrage, Signalwort). Am Ende rätst du bei allen markierten Items: __Es gibt keine Minuspunkte.__ Die tödliche Reaktion ist das Grübeln — es kostet nicht eine Frage, sondern drei.',
        },
        {
          badge: 'danach',
          titel: 'Übertragen und loslassen',
          text: 'Nach jedem Teil: offene Items entscheiden, Antworten kontrollieren, __dann den Teil mental abschließen__. Wer im Kopf noch bei Teil 2 ist, verliert die Einlesezeit von Teil 3.',
        },
      ],
    },

    {
      type: 'prose',
      card: true,
      titel: 'Training ohne Audio: die Transkript-Methode dieses Kurses',
      absaetze: [
        'Ein ehrliches Wort vorab: **Dieser Kurs enthält keine Audiodateien.** Die Hörübungen der Lektionen 20-22 arbeiten deshalb mit **Transkripten** — verschriftlichten Hörtexten, die ausdrücklich als solche gekennzeichnet sind. Das ist kein vollwertiger Ersatz, aber ein erstaunlich wirksames Werkzeug, wenn du drei Regeln einhältst: **Erstens:** Lies das Transkript __in Echtzeit__ — zügig, von oben nach unten, ohne zurückzuspringen; eine verpasste Zeile ist verpasst, wie im Audio. **Zweitens:** Decke die Lösungen __vollständig ab__, bis du geantwortet hast. **Drittens:** Beantworte die Aufgaben __während__ des Lesens, nicht danach.',
        'So trainierst du genau die Fähigkeiten, die das Modul prüft: Erwartungen bilden, Signale erkennen, unter Zeitdruck entscheiden. Was das Transkript nicht liefert — Sprechtempo, Aussprache, Hintergrundgeräusche —, holst du dir zusätzlich: mit den **offiziellen Modellsätzen** (mit echten Audios frei verfügbar) und mit deutschsprachigen Podcasts und Nachrichtenformaten. ~~La regla de oro: transcripción para la estrategia, audio real para el oído. Necesitas ambos.~~',
      ],
    },

    { type: 'rule' },

    // ── 5. Beispiele ──────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele — Aufgabensprache im Hören',
      kicker: 'Anweisung',
      titel: 'Was die Hör-Aufgaben wirklich fragen',
      items: [
        { text: '**„Was sagt die Sprecherin über … ?“** — Gefragt ist ==ihre== Aussage, nicht die des Moderators und nicht die referierte Meinung Dritter.', gl: '' },
        { text: '**„Welche Aussage trifft zu?“** — Genau eine Option deckt sich mit dem Gehörten; die anderen verdrehen, übertreiben oder erfinden.', gl: '' },
        { text: '**„Wer vertritt die folgende Position?“** — Zuordnungsformat wie in Lesen Teil 4, nur in Echtzeit: Du brauchst Positionszeilen im Kopf.', gl: '' },
        { text: '**„Was ist das Hauptthema des Beitrags?“** — Globalfrage: Antworte nach dem Gesamteindruck, nicht nach dem ersten Satz — Einstiege sind oft Anekdoten.', gl: '' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'Notiztechnik',
      titel: 'Vom gehörten Satz zum Stichwort',
      items: [
        { text: 'Gehört: *„Wir haben die Zahl der Ausleihen innerhalb von zwei Jahren fast verdoppelt, von 60.000 auf 115.000.“* → Notiz: **Ausleihen 60→115T / 2 J.**', gl: '' },
        { text: 'Gehört: *„Ich war anfangs strikt dagegen, inzwischen sehe ich es deutlich entspannter.“* → Notiz: **früher contra → jetzt offen** — Meinungswandel ist ein Lieblingsitem der Prüfung.', gl: '' },
        { text: 'Gehört: *„Das Problem ist weniger das Geld als das fehlende Personal.“* → Notiz: **nicht Geld, sondern Personal** — die Gegenüberstellung ist die Antwort.', gl: '~~Anota la estructura *no X sino Y*: es la forma favorita de los distractores.~~' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'Distraktoren',
      titel: 'Die typischen Fallen des Hörens',
      items: [
        { text: '**Die korrigierte Zahl:** *„Das betrifft rund 30 Prozent — nein, warte, nach der neuen Erhebung sogar 40.“* → Die Option „30 Prozent“ ist die Falle; ==die Korrektur gilt==.', gl: '' },
        { text: '**Die zitierte Meinung:** *„Viele sagen ja, das Büro sei tot. Das halte ich für Unsinn.“* → Die Option „Der Sprecher hält das Büro für überholt“ ist falsch — er zitiert die Ansicht, um sie zu verwerfen.', gl: '' },
        { text: '**Das aufgeschnappte Wort:** Eine Option wiederholt ein auffälliges Wort aus dem Audio (*Pilotprojekt*), hängt aber eine falsche Aussage daran. Wortwiedererkennung ist keine Antwort.', gl: '' },
        { text: '**Die halbe Wahrheit:** *„Das Angebot gilt zunächst nur in drei Städten.“* → Option „Das Angebot gilt bundesweit“ scheitert am ==zunächst nur== — Einschränkungswörter entscheiden.', gl: '' },
      ],
    },

    { type: 'rule' },

    // ── 6. Übungen ────────────────────────────────────────────────
    {
      type: 'uebung',
      eyebrow: 'Anwendung — Übung 1 · Erkennen',
      frage: 'Zu welchem Teil des Moduls Hören passt die Beschreibung — Teil 1, 2, 3 oder 4?',
      aufgaben: [
        'Drei Gäste und eine Moderatorin streiten über Videoüberwachung; du entscheidest, wer welche Position vertritt.',
        'Eine Wissenschaftlerin erklärt im Gespräch mit einem Journalisten ihre Forschung; die Items fragen nach Details und Begründungen.',
        'Du hörst den Text als einzigen im Modul zweimal.',
        'Mehrere kurze Gesprächsabschnitte zu Alltagsthemen; die Items zielen auf die Kernaussage jedes Abschnitts.',
        'Der Text ist monologisch und folgt einer angekündigten Gliederung.',
      ],
      loesungen: [
        '**Teil 3** — Diskussion mit Positionszuordnung.',
        '**Teil 2** — Interview mit Detailverstehen.',
        '**Teil 4** — nur der Vortrag wird zweimal gespielt.',
        '**Teil 1** — Podcast/Gespräch mit globalem und selektivem Verstehen.',
        '**Teil 4** — der Vortrag; seine Gliederung ist deine Landkarte (Lektion 22).',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 2 · Anwenden',
      frage: 'Verdichte die gehörten Sätze zu Notizen von höchstens fünf Wörtern — so, dass die prüfungsrelevante Information erhalten bleibt.',
      aufgaben: [
        '„Wir hatten mit etwa zweihundert Anmeldungen gerechnet, am Ende waren es über sechshundert.“',
        '„Grundsätzlich begrüße ich den Vorstoß, auch wenn mir das Tempo Sorgen macht.“',
        '„Der Umsatz ist nicht etwa eingebrochen, wie oft behauptet wird — er stagniert lediglich.“',
        '„Früher haben wir alles ausgedruckt; heute läuft die komplette Abstimmung digital.“',
      ],
      loesungen: [
        '**erwartet 200 → 600+** — die Differenz zwischen Erwartung und Ergebnis ist das Item.',
        '**pro, aber Tempo Sorge** — Zustimmung mit Einschränkung; beide Hälften notieren.',
        '**nicht Einbruch, nur Stagnation** — die Struktur *nicht X, sondern Y* ist die halbe Miete gegen den Distraktor.',
        '**früher Papier → heute digital** — der Zeitkontrast trägt die Aussage. ~~Flechas y abreviaturas valen más que frases: nadie evalúa tus notas.~~',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 3 · Produzieren',
      frage: 'Generalprobe der Transkript-Methode. Decke zuerst die Lösung ab. Lies dann das Transkript **einmal in Echtzeit** — zügig, ohne zurückzuspringen — und beantworte dabei die zwei Fragen: **1.** Warum wurde das Projekt anfangs belächelt? **2.** Woran misst die Sprecherin den Erfolg?\n\n**Transkript** ~~(esto sería audio en el examen)~~: *„Als wir vor vier Jahren die erste Reparaturwerkstatt im Stadtteilzentrum eröffnet haben, hat man uns belächelt — Reparieren galt als Nostalgie, als Hobby für Bastler, ehrlich gesagt. Heute kommen jede Woche an die achtzig Leute: Studentinnen mit kaputten Kopfhörern, Rentner mit vierzig Jahre alten Toastern. Für mich ist aber gar nicht die Besucherzahl der eigentliche Erfolg. Entscheidend ist, dass die Hälfte von ihnen wiederkommt — und irgendwann nicht mehr fragt, ob sich die Reparatur lohnt, sondern wie sie geht.“*',
      loesung: '**1.** Reparieren galt als **Nostalgie, als Bastler-Hobby** — nicht als ernsthaftes Konzept.\n**2.** Nicht an der Besucherzahl, sondern daran, dass **die Hälfte wiederkommt und sich die Frage verschiebt**: von *lohnt sich das?* zu *wie geht das?* — also am veränderten Verhalten.\n**Auswertung deiner Generalprobe:** Hast du bei Frage 2 „achtzig Leute pro Woche“ geantwortet? Dann hat der Distraktor funktioniert — die Sprecherin entwertet die Zahl selbst (*„gar nicht die Besucherzahl“*). Hast du zurückgelesen? Im Audio gäbe es diese Möglichkeit nicht — beim nächsten Transkript strenger sein.',
    },

    { type: 'rule' },

    // ── 7. Prüfungsbezug ──────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Hören · Teil 1 · Podcast (Transkript)',
      titel: 'Aufgabe im Prüfungsformat · ein Abschnitt, drei Items',
      anweisung: 'Simulation mit Transkript: Nimm dir 45 Sekunden Einlesezeit für die drei Aufgaben unten. Decke die Lösungen ab. Lies dann das Transkript einmal in Echtzeit und kreuze währenddessen an. Im echten Teil 1 hörst du mehrere solcher Abschnitte — jeden nur einmal.',
      absaetze: [
        '**Transkript** ~~(en el examen: audio, una sola escucha)~~ — **Moderator:** „Digital Detox — also der bewusste Verzicht aufs Smartphone — boomt. Sarah, du hast das Selbstexperiment gemacht: vier Wochen ohne soziale Medien. Wie war das?“ — **Sarah:** „Die ersten Tage waren ehrlich gesagt unangenehm — ich habe ständig zum Handy gegriffen, aus reinem Reflex. Interessant wurde es ab der zweiten Woche: Ich habe wieder ganze Bücher gelesen und deutlich besser geschlafen. Aber ich will das gar nicht romantisieren. Mir ist auch klar geworden, wie viel Organisatorisches bei uns über diese Kanäle läuft — ich habe zwei Verabredungen schlicht verpasst, weil die Absprachen in Gruppenchats liefen. Mein Fazit ist deshalb nicht der große Ausstieg. Ich habe die Apps wieder, aber sie dürfen sich nicht mehr melden — Push-Nachrichten aus, feste Zeiten am Abend. Der Verzicht war für mich der Umweg zu einem vernünftigen Umgang.“',
      ],
      optionen: [
        '1 · Wie erlebte Sarah die Anfangsphase des Experiments? — a) Sie genoss die Ruhe von Beginn an. — b) Sie griff aus Gewohnheit immer wieder zum Handy. — c) Sie brach das Experiment nach wenigen Tagen ab.',
        '2 · Welchen Nachteil nennt Sarah? — a) Sie verpasste Verabredungen, die über Chats organisiert wurden. — b) Sie schlief schlechter als vorher. — c) Ihre Freunde reagierten mit Unverständnis.',
        '3 · Was ist Sarahs Fazit? — a) Sie hat soziale Medien endgültig aufgegeben. — b) Sie nutzt die Apps wieder, aber mit festen Regeln. — c) Sie hält Digital Detox für sinnlos.',
      ],
      loesungen: [
        '1 **b** — *„ich habe ständig zum Handy gegriffen, aus reinem Reflex“*. Option a widerspricht dem *unangenehm*; c erfindet einen Abbruch.',
        '2 **a** — *„zwei Verabredungen schlicht verpasst, weil die Absprachen in Gruppenchats liefen“*. Option b kehrt das Gehörte um (sie schlief **besser**) — der klassische Umkehr-Distraktor.',
        '3 **b** — *„Ich habe die Apps wieder, aber sie dürfen sich nicht mehr melden … feste Zeiten“*. Option a wäre nur richtig, wenn du das *„nicht der große Ausstieg“* verpasst hättest; c scheitert an ihrer positiven Bilanz.',
      ],
      kommentar: 'Beachte die Reihenfolge: Item 1 zielt auf den Anfang, Item 3 auf das Fazit — wie im echten Modul. Und sieh dir Item 2 an: Der Distraktor b benutzt Wörter aus dem Audio (*schlafen*), dreht aber die Richtung um. Genau dafür hast du in der Einlesezeit *Nachteil* als Schlüsselwort markiert.',
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Trainiere die Einlesezeit als eigene Disziplin: Nimm dir bei jeder Übung **maximal 60 Sekunden**, um die Items zu markieren und Erwartungen zu bilden — und beobachte, wie sich deine Trefferquote verändert. Und höre täglich zehn Minuten echtes Deutsch (Nachrichten-Podcast, Interview) **ohne Transkript**: Strategie lernst du hier, das Ohr trainierst du dort.',
    },

    { type: 'rule' },

    // ── 8. Abschluss ──────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Das bleibt', 'Konkret'],
      zeilen: [
        ['4 Teile, ca. 40 Minuten, 100 Punkte', 'Podcast · Interview · Diskussion · Vortrag (nur dieser zweimal)'],
        ['Einlesezeit = Strategiezeit', 'Items lesen, Schlüsselwörter markieren, Erwartungen bilden'],
        ['Items folgen dem Textverlauf', 'sofort ankreuzen, der Finger wandert mit'],
        ['Faden verloren?', 'Item aufgeben, markieren, Anschluss suchen, am Ende raten'],
        ['Transkript-Training', 'in Echtzeit lesen, Lösungen abdecken, nie zurückspringen'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich kann die vier Hörteile mit Textsorte und geprüfter Fertigkeit benennen.',
        'Ich nutze die Einlesezeit für Schlüsselwörter und Erwartungen — nicht zum bloßen Durchlesen.',
        'Ich notiere in Stichworten und habe ein Notfallprotokoll für den verlorenen Faden.',
        'Ich trainiere mit Transkripten in Echtzeit und ergänze regelmäßig echtes Hörmaterial.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Jetzt geht es in die Formate. Zuerst die **gesprächigen**: Podcast und Interview leben von den Eigenheiten des gesprochenen Deutsch — Füllwörter, Selbstkorrekturen, Reformulierungen, vorsichtig verpackte Meinungen. In der nächsten Lektion lernst du, diese Signale zu lesen: Sie verraten dir, wo die prüfungsrelevante Information wirklich steht.',
    },
  ],
}
