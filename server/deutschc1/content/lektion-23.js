// Lektion 23 · Modul Schreiben — Überblick
//
// Bloque 2 «Prüfungsstrategie». Öffnet die vierteilige Strecke zu den
// produktiven Modulen: 23 Überblick Schreiben → 24 Teil 1 → 25 Teil 2 →
// 26-28 Sprechen. Estándar de 8 secciones (vgl. lektion-03.js).

export default {
  spec: ['Bloque 2', 'Prüfungsstrategie', 'Niveau C1', 'Prüfungsrelevanz: Schreiben (75 Min · 2 Aufgaben)'],
  h1: 'Modul Schreiben — Überblick',
  lead: 'Zwei Texte, 75 Minuten, vier Kriterien: Wer das Modul als Ganzes versteht, schreibt nicht schneller — er schreibt gezielter.',

  content: [
    // ── 2. Lernziele ──────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'Am Ende kennst du beide Schreibaufgaben im Detail: Textsorte, Wortzahl, Leitpunkte und typische Themen.',
        'Du teilst die 75 Minuten bewusst ein (40 / 30 / 5) und hältst diesen Plan auch unter Druck durch.',
        'Du weißt, was jedes der vier Bewertungskriterien konkret misst — und was eine Note A von einer Note D unterscheidet.',
        'Du wendest in den letzten fünf Minuten eine feste Revisionscheckliste an, die genau die Fehler abfängt, die Spanischsprachige die meisten Punkte kosten.',
      ],
    },

    { type: 'rule' },

    // ── 3. Kernwortschatz ─────────────────────────────────────────
    {
      type: 'wortschatz',
      eyebrow: 'Kernwortschatz',
      items: [
        { wort: 'die Aufgabenstellung', kollokation: 'die Aufgabenstellung genau lesen', es: 'enunciado de la tarea' },
        { wort: 'der Leitpunkt', kollokation: 'alle Leitpunkte abdecken', es: 'punto guía obligatorio' },
        { wort: 'der Diskussionsbeitrag', kollokation: 'einen Diskussionsbeitrag verfassen', es: 'aportación a un debate ~~no es «discusión» en sentido de pelea~~' },
        { wort: 'die formelle Nachricht', kollokation: 'eine formelle Nachricht an die Verwaltung', es: 'mensaje formal' },
        { wort: 'das Bewertungskriterium', kollokation: 'die vier Bewertungskriterien erfüllen', es: 'criterio de evaluación' },
        { wort: 'die Erfüllung', kollokation: 'die Erfüllung der Aufgabe', es: 'cumplimiento (de la tarea)' },
        { wort: 'die Kohärenz', kollokation: 'die Kohärenz des Textes sichern', es: 'coherencia, hilo lógico' },
        { wort: 'der rote Faden', kollokation: 'den roten Faden nicht verlieren', es: 'hilo conductor' },
        { wort: 'die Gliederung', kollokation: 'eine Gliederung in Stichpunkten anlegen', es: 'esquema, estructura' },
        { wort: 'der Entwurf', kollokation: 'auf den Entwurf verzichten, direkt schreiben', es: 'borrador' },
        { wort: 'die Zeiteinteilung', kollokation: 'an der Zeiteinteilung scheitern', es: 'gestión del tiempo' },
        { wort: 'die Überarbeitung', kollokation: 'fünf Minuten für die Überarbeitung reservieren', es: 'revisión final' },
        { wort: 'die Wortzahl', kollokation: 'die vorgegebene Wortzahl einhalten', es: 'número de palabras' },
        { wort: 'der Verstoß', kollokation: 'ein Verstoß gegen das Register', es: 'infracción, falta contra algo' },
      ],
      hinweis: 'Achtung, falscher Freund: **der Beitrag** ist hier die *aportación* zu einer Diskussion — nicht die Mitgliedsgebühr und schon gar nicht ein „Pago“. Und **die Aufgabenstellung** verlangt die Präposition *in*: *In der Aufgabenstellung steht, dass…*',
    },

    { type: 'rule' },

    // ── 4. Erklärung ──────────────────────────────────────────────
    {
      type: 'prose',
      eyebrow: 'Erklärung',
      card: true,
      titel: 'Das Modul in Zahlen',
      absaetze: [
        'Das Modul Schreiben dauert **75 Minuten** und besteht aus **zwei Aufgaben**, die beide verpflichtend sind: In **Teil 1** schreibst du einen __Diskussionsbeitrag__ von etwa **230 Wörtern** für ein Online-Forum — du wägst Argumente ab und beziehst Position. In **Teil 2** verfasst du eine __formelle Nachricht__ von etwa **120 Wörtern** — eine Beschwerde, Anfrage, Bitte oder Entschuldigung in einer halboffiziellen Situation.',
        'Beide Texte werden mit denselben **vier Kriterien** bewertet, jeweils auf einer Skala von **A (sehr gut) bis E (ungenügend)**. Insgesamt sind 100 Punkte möglich; bestanden hast du ab 60. Da das Zertifikat C1 modular ist, kannst du das Modul Schreiben notfalls einzeln wiederholen — aber mit der richtigen Strategie brauchst du das nicht.',
      ],
    },

    {
      type: 'tabelle',
      eyebrow: 'Erklärung — Die zwei Aufgaben im Vergleich',
      kopf: ['', 'Teil 1 · Diskussionsbeitrag', 'Teil 2 · Formelle Nachricht'],
      zeilen: [
        ['Textsorte', 'Forumsbeitrag: argumentativ, abwägend', 'Nachricht/E-Mail: adressatenbezogen, höflich'],
        ['Umfang', '~230 Wörter', '~120 Wörter'],
        ['Zeit (empfohlen)', '40 Minuten', '30 Minuten'],
        ['Register', 'sachlich-neutral, schriftsprachlich', 'formell, Sie-Form, Konjunktiv II'],
        ['Typische Themen', 'Arbeit, Bildung, Digitalisierung, Umwelt', 'Kurs, Wohnung, Arbeitsplatz, Reklamation'],
        ['Kern der Aufgabe', 'Pro und Contra + eigene Position', 'alle Leitpunkte + richtiger Ton'],
      ],
    },

    {
      type: 'steps',
      eyebrow: 'Erklärung — Die Zeiteinteilung 40 / 30 / 5',
      steps: [
        {
          badge: 'Min. 0–40',
          titel: 'Teil 1: der Diskussionsbeitrag',
          text: 'Fünf Minuten planen (__Streitfrage__ notieren, je zwei Stichwörter pro Leitpunkt), dann **30 Minuten am Stück schreiben**, fünf Minuten Wortzahl und Absätze kontrollieren. Wer ohne Plan startet, streicht später ganze Absätze — das kostet mehr Zeit als jede Gliederung.',
        },
        {
          badge: 'Min. 40–70',
          titel: 'Teil 2: die formelle Nachricht',
          text: 'Der Text ist kürzer, aber dichter: Jeder der Leitpunkte muss erkennbar vorkommen. Zwei Minuten planen (Anlass? Adressat? Ziel?), zwanzig Minuten schreiben, den Rest für Anrede, Grußformel und Register prüfen.',
        },
        {
          badge: 'Min. 70–75',
          titel: 'Überarbeitung — die wertvollsten fünf Minuten',
          text: 'Nicht neu lesen, um den Inhalt zu genießen, sondern **gezielt jagen**: Genus und Endungen, Kommas, Verbstellung. Die Checkliste unten ist dein Werkzeug. ~~Estos cinco minutos suelen valer más nota que los últimos diez de redacción.~~',
        },
      ],
    },

    {
      type: 'tabelle',
      eyebrow: 'Erklärung — Die vier Bewertungskriterien',
      kopf: ['Kriterium', 'Das hebt die Note', 'Das senkt die Note'],
      zeilen: [
        ['Erfüllung der Aufgabe', 'alle Leitpunkte behandelt, Textsorte und Register getroffen, Wortzahl eingehalten', 'ein Leitpunkt fehlt, Thema verfehlt, Text deutlich zu kurz, falsches Register'],
        ['Kohärenz', 'klare Absätze, Konnektoren verbinden die Gedanken, roter Faden erkennbar', 'Gedankensprünge, immer nur *und/aber*, keine Absatzstruktur'],
        ['Wortschatz', 'präzise, variierte Lexik; feste Kollokationen; kaum Wiederholungen', 'Grundwortschatz, Wortwiederholungen, falsche Freunde, unpassende Wörter'],
        ['Strukturen', 'komplexe Sätze korrekt: Nebensätze, Passiv, Konjunktiv II, Nominalphrasen', 'nur Hauptsätze — oder komplexe Sätze voller Fehler in Verbstellung und Kasus'],
      ],
    },

    {
      type: 'prose',
      card: true,
      titel: 'Was A bis E wirklich bedeutet',
      absaetze: [
        'Die Prüfenden vergeben pro Kriterium eine Buchstabennote: **A** = durchgehend gelungen, **B** = überwiegend gelungen, **C** = teilweise gelungen, **D** = kaum gelungen, **E** = durchgehend misslungen. Entscheidend ist: Die Kriterien sind **unabhängig**. Ein Text mit brillantem Wortschatz, der einen Leitpunkt ignoriert, bekommt bei „Erfüllung“ trotzdem ein C oder schlechter.',
        'Daraus folgt die wichtigste strategische Regel des Moduls: **Erst die Aufgabe erfüllen, dann glänzen.** Ein solider Text, der alle Leitpunkte abdeckt und sauber gegliedert ist, schlägt einen eleganten Text mit Lücken. Fehler in Grammatik und Lexik kosten weniger als vergessene Inhalte — sie betreffen nur je ein Kriterium, ein fehlender Leitpunkt drückt gleich mehrere.',
      ],
    },

    {
      type: 'steps',
      eyebrow: 'Erklärung — Revisionscheckliste für die letzten fünf Minuten',
      steps: [
        {
          badge: 'Genus',
          titel: 'Artikel und Endungen',
          text: 'Prüfe jedes Nomen mit Artikel oder Adjektiv: *das Problem, das Thema, das System* (nicht *der/die*), *ein interessantes Thema*. Genusfehler sind der häufigste Punktefresser bei Spanischsprachigen, weil *el problema, el tema, el sistema* maskulin sind.',
        },
        {
          badge: 'Komma',
          titel: 'Kommasetzung',
          text: 'Im Deutschen steht **vor jedem Nebensatz ein Komma**: vor *dass, weil, obwohl, wenn* — immer, ohne Ausnahme. ~~En español «creo que» va sin coma; en alemán «Ich glaube, dass» la lleva obligatoriamente.~~ Dafür gibt es **kein Komma nach Adverbien am Satzanfang** (*Deshalb sollten wir…*, nicht *Deshalb, sollten wir…*).',
        },
        {
          badge: 'Verb',
          titel: 'Verbstellung',
          text: 'Hauptsatz: Verb auf **Position 2**, auch nach *deshalb, außerdem, trotzdem*. Nebensatz: Verb **ans Ende** (*…, weil die Kosten gestiegen **sind***). Suche gezielt nach *dass*- und *weil*-Sätzen und kontrolliere das Satzende.',
        },
        {
          badge: 'Extra',
          titel: 'Großschreibung und Register',
          text: 'Alle Nomen groß, *Sie/Ihnen/Ihr* in der Nachricht groß. Keine Umgangssprache (*super, echt, halt*) in formellen Texten. Zum Schluss: Wortzahl grob zählen — Zeilen mal Wörter pro Zeile genügt.',
        },
      ],
    },

    { type: 'rule' },

    // ── 5. Beispiele ──────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele — was die Kriterien konkret sehen',
      kicker: 'Kohärenz',
      titel: 'Verbinden statt aneinanderreihen',
      items: [
        { text: '**Schwach:** *Homeoffice hat Vorteile. Es hat auch Nachteile. Ich finde es gut.* → **Stark:** *Homeoffice bietet unbestreitbare Vorteile, bringt **jedoch** auch Risiken mit sich. **Insgesamt überwiegen** aus meiner Sicht die Chancen.*', gl: '— Konnektoren und ein wertendes Fazit stiften den roten Faden' },
        { text: '**Schwach:** *Und dann gibt es noch das Problem mit den Kosten.* → **Stark:** ***Hinzu kommt** ein finanzieller Aspekt: die Kosten.*', gl: '— *hinzu kommt* signalisiert: hier folgt ein weiteres Argument' },
        { text: '**Schwach:** *Aber viele sagen das Gegenteil.* → **Stark:** ***Dem steht allerdings entgegen**, dass viele Betroffene das Gegenteil berichten.*' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'Wortschatz',
      titel: 'Präzision statt Allzweckwörter',
      items: [
        { text: '**Schwach:** *Das ist ein großes Problem.* → **Stark:** *Das stellt eine **erhebliche Herausforderung** dar.*', gl: '— *darstellen* + präzises Adjektiv statt *sein* + *groß*' },
        { text: '**Schwach:** *Man muss etwas machen.* → **Stark:** *Es müssen **konkrete Maßnahmen ergriffen** werden.*', gl: '— die Kollokation *Maßnahmen ergreifen* ist pures C1' },
        { text: '**Schwach:** *Ich habe an dem Kurs assistiert.* → **Stark:** *Ich habe **an dem Kurs teilgenommen**.*', gl: '— ~~«asistir a» = teilnehmen an; assistieren = ayudar como asistente~~' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'Strukturen',
      titel: 'Komplexität, die sich lohnt',
      items: [
        { text: '**Schwach:** *Die Regierung verbietet das. Viele sind dagegen.* → **Stark:** ***Obwohl** die Regierung ein Verbot plant, **regt sich** in der Bevölkerung Widerstand.*' },
        { text: '**Schwach:** *Man kann das Problem lösen, wenn man mehr investiert.* → **Stark:** ***Durch höhere Investitionen** ließe sich das Problem lösen.*', gl: '— Nominalphrase + *sich lassen* als Passiversatz: zwei C1-Strukturen in einem Satz' },
        { text: '**Schwach:** *Bitte antworten Sie schnell.* → **Stark:** *Für eine baldige Rückmeldung **wäre ich Ihnen dankbar**.*', gl: '— Konjunktiv II der Höflichkeit, unverzichtbar in Teil 2' },
      ],
    },

    { type: 'rule' },

    // ── 6. Übungen ────────────────────────────────────────────────
    {
      type: 'uebung',
      eyebrow: 'Anwendung — Übung 1 · Erkennen',
      frage: 'Welches Bewertungskriterium leidet in jeder Situation am stärksten: Erfüllung der Aufgabe, Kohärenz, Wortschatz oder Strukturen?',
      aufgaben: [
        'Der Beitrag behandelt drei Leitpunkte glänzend — den vierten gar nicht.',
        'Der Text besteht fast nur aus Hauptsätzen, die mit *und* oder *aber* verbunden sind.',
        'Die Nachricht an die Hausverwaltung beginnt mit „Hallo Leute“ und endet mit „LG“.',
        'In jedem zweiten Satz steht *wichtig*, *gut* oder *Problem*.',
        'Die Nebensätze sind ambitioniert, aber das Verb steht fast nie am Ende.',
      ],
      loesungen: [
        '**Erfüllung der Aufgabe** — ein fehlender Leitpunkt drückt dieses Kriterium sofort, egal wie gut der Rest ist.',
        '**Strukturen** (und mittelbar Kohärenz) — es fehlt die syntaktische Vielfalt: Nebensätze, Passiv, Konnektoren.',
        '**Erfüllung der Aufgabe** — das Register gehört zur Textsorte; ein Duz-Ton in einer formellen Nachricht ist ein Aufgabenverstoß, kein bloßer Stilfehler.',
        '**Wortschatz** — Wiederholungen und Allzweckwörter zeigen fehlende lexikalische Bandbreite.',
        '**Strukturen** — komplexe Sätze zählen nur, wenn sie korrekt sind; systematische Verbstellungsfehler wiegen schwerer als einfache, richtige Sätze.',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 2 · Anwenden',
      frage: 'Hier sind sechs Sätze mit typischen Fehlern von Spanischsprachigen. Korrigiere sie — jeder Satz enthält genau einen Fehler.',
      aufgaben: [
        'Ich hoffe dass Sie mir weiterhelfen können.',
        'Das ist ein sehr interessante Thema.',
        'Obwohl es gibt viele Vorteile, bleibe ich skeptisch.',
        'Wegen dem schlechten Wetter wurde die Veranstaltung abgesagt.',
        'Am Ende, ich denke, dass ein Kompromiss nötig ist.',
        'Ich möchte gern teilnehmen an dem Seminar.',
      ],
      loesungen: [
        'Ich hoffe**,** dass Sie mir weiterhelfen können. — Komma vor *dass*, immer.',
        'Das ist ein sehr interessante**s** Thema. — *das Thema*: Neutrum, trotz ~~«el tema»~~.',
        'Obwohl es viele Vorteile **gibt**, bleibe ich skeptisch. — Verb ans Ende des Nebensatzes.',
        'Wegen **des schlechten Wetters** wurde die Veranstaltung abgesagt. — *wegen* + Genitiv; *wegen dem* kostet auf C1 Punkte.',
        '**Am Ende denke ich**, dass ein Kompromiss nötig ist. — kein Komma nach der Angabe, Verb auf Position 2. ~~Calco de «Al final, yo creo que…».~~',
        'Ich möchte gern **an dem Seminar teilnehmen**. — der Infinitiv schließt die Satzklammer; die Präpositionalphrase steht davor.',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 3 · Produzieren',
      frage: 'Erstelle deinen persönlichen Fünf-Minuten-Revisionsplan: fünf Prüfschritte in fester Reihenfolge, jeder als Imperativsatz mit einem konkreten Suchauftrag.',
      aufgabe: 'Formuliere die fünf Schritte so, dass du sie in der Prüfung mechanisch abarbeiten kannst — nicht „Grammatik prüfen“, sondern „Suche X und kontrolliere Y“.',
      loesung: '**Mögliche Lösung** (deine Reihenfolge darf abweichen, solange Leitpunkte und die drei Fehlerjagden vorkommen):\n1. *Lies die Aufgabenstellung erneut und hake jeden Leitpunkt im Text ab.*\n2. *Suche jedes „dass“, „weil“ und „obwohl“ — steht davor ein Komma und das Verb am Ende?*\n3. *Prüfe jeden Satzanfang mit „deshalb/außerdem/trotzdem“ — steht das Verb direkt danach?*\n4. *Kontrolliere die Artikel der zehn wichtigsten Nomen deines Textes, besonders „das Problem“, „das Thema“, „das Ziel“.*\n5. *Zähle die Wörter grob und prüfe Anrede, Grußformel und Sie-Großschreibung in Teil 2.*',
    },

    { type: 'rule' },

    // ── 7. Prüfungsbezug ──────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Schreiben · Simulation der Überarbeitungsphase',
      titel: 'Fehlersuche unter Zeitdruck · 6 Fehler',
      anweisung: 'So sieht die Realität der letzten fünf Minuten aus: Vor dir liegt ein Ausschnitt aus einem Diskussionsbeitrag. Er enthält **sechs Fehler** — Verbstellung, Komma, Genus und einen falschen Freund. Finde und korrigiere sie mit der Checkliste dieser Lektion.',
      absaetze: [
        'Ich bin überzeugt, dass die Digitalisierung hat unsere Arbeitswelt grundlegend verändert. Viele Beschäftigte profitieren von der neuen Flexibilität aber andere fühlen sich überfordert. Der Problem ist, dass ältere Arbeitnehmer oft keine ausreichende Unterstützung erhalten. Deshalb die Unternehmen sollten verpflichtende Schulungen anbieten. Ich habe selbst an einem solchen Kurs assistiert und dabei viel gelernt. Zusammenfassend, die Weiterbildung ist eine Investition in die Zukunft.',
      ],
      loesungen: [
        '*…dass die Digitalisierung unsere Arbeitswelt grundlegend **verändert hat**.* — Verb ans Ende des *dass*-Satzes.',
        '*…von der neuen Flexibilität**,** aber andere…* — Komma vor *aber*, wenn es Sätze verbindet.',
        '***Das** Problem ist…* — *das Problem*, Neutrum.',
        '*Deshalb **sollten die Unternehmen** verpflichtende Schulungen anbieten.* — Verb auf Position 2 nach *deshalb*.',
        '*Ich habe selbst an einem solchen Kurs **teilgenommen**…* — ~~assistieren = ayudar; «asistir a un curso» = an einem Kurs teilnehmen~~.',
        '*Zusammenfassend **ist die Weiterbildung** eine Investition…* — kein Komma nach *zusammenfassend*, Verb auf Position 2.',
      ],
      kommentar: 'Merke dir das Suchmuster: **erst die Nebensatz-Signale** (*dass, weil, obwohl* → Komma davor? Verb am Ende?), **dann die Satzanfänge** (Adverb → Verb direkt danach?), **zuletzt Artikel und falsche Freunde**. Drei Durchgänge mit je einem Fokus sind schneller und gründlicher als ein einziger „Alles-Durchgang“.',
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Beginne immer mit **Teil 1** — er bringt mehr Punkte und braucht den frischen Kopf. Aber setze dir ein hartes Limit: Bei Minute 40 wechselst du zu Teil 2, **auch wenn Teil 1 nicht perfekt ist**. Ein fehlender Schlusssatz in Teil 1 kostet wenig; eine fehlende halbe Nachricht in Teil 2 kostet ein ganzes Kriterienpaket.',
    },

    { type: 'rule' },

    // ── 8. Abschluss ──────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Das bleibt', 'Konkret'],
      zeilen: [
        ['2 Aufgaben, 75 Minuten', 'Diskussionsbeitrag ~230 W. + formelle Nachricht ~120 W.'],
        ['Zeitplan 40 / 30 / 5', 'hartes Limit bei Minute 40 — dann Teil 2'],
        ['4 Kriterien, Skala A–E', 'Erfüllung · Kohärenz · Wortschatz · Strukturen'],
        ['Goldene Regel', 'erst alle Leitpunkte erfüllen, dann glänzen'],
        ['Revisionsfokus', 'Genus (*das Problem*) · Komma vor Nebensätzen · Verb Position 2 / Satzende'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich kann beide Schreibaufgaben mit Textsorte, Wortzahl und Register beschreiben.',
        'Ich habe einen festen Zeitplan (40/30/5) und weiß, warum das Limit bei Minute 40 unverhandelbar ist.',
        'Ich kann zu jedem der vier Kriterien nennen, was die Note hebt und was sie senkt.',
        'Ich habe eine persönliche Revisionscheckliste, die Genus, Komma und Verbstellung systematisch abjagt.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Der Überblick steht — jetzt wird gebaut. Die nächste Lektion nimmt sich **Teil 1, den Diskussionsbeitrag**, im Detail vor: die Vier-Schritte-Struktur von der Einleitung bis zum Fazit, die Redemittel des Abwägens und ein kommentiertes Musterbeispiel, an dem du siehst, wie 230 Wörter alle vier Kriterien gleichzeitig bedienen.',
    },
  ],
}
