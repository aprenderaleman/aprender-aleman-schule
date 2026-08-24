// Lektion 03 · Nominalstil vs. Verbalstil
//
// ═══ LECCIÓN MODELO — estándar de 8 secciones para todo el curso ═══
//
//   1. Kopf            spec + h1 + lead
//   2. Lernziele       3-4 objetivos can-do ("Am Ende kannst du…")
//   3. Kernwortschatz  10-14 palabras con artículo, Kollokation y significado
//   4. Erklärung       regla clara + contraste; varios bloques (prose/steps/tabelle)
//   5. Beispiele       abundantes, agrupados por función, con glosa mínima
//   6. Übungen         3 de dificultad creciente: erkennen → umformen → produzieren
//   7. Prüfungsbezug   mini-tarea con formato real del examen + Prüfungstipp
//   8. Abschluss       Zusammenfassung (tabelle) + Selbstcheck + Ausblick
//
// Marcado inline: **negrita** *cursiva* ==resaltado== ~~atenuado~~ __término__ {1} hueco

export default {
  spec: ['Bloque 1', 'Sprachliche Konsolidierung', 'Niveau C1', 'Prüfungsrelevanz: Lesen Teil 2 · Schreiben'],
  h1: 'Nominalstil vs. Verbalstil',
  lead: 'Vom Verb zum Substantiv: die Verdichtung, die geschriebenes C1-Deutsch von gesprochenem unterscheidet — und die der Lückentext gezielt abfragt.',

  content: [
    // ── 2. Lernziele ──────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'Am Ende kannst du verbale Nebensätze in nominale Präpositionalphrasen umformen — und umgekehrt.',
        'Du erkennst die fünf Grundmuster der Nominalisierung (Infinitiv, -ung, -heit/-keit, Partizip, Adjektiv) und bildest sie sicher.',
        'Du wählst die richtige Präposition zur Bedeutung (kausal, temporal, konditional, modal, konzessiv, final).',
        'Du setzt den Nominalstil im Schreiben bewusst und dosiert ein, ohne den Text zu überladen.',
      ],
    },

    { type: 'rule' },

    // ── 3. Kernwortschatz ─────────────────────────────────────────
    {
      type: 'wortschatz',
      eyebrow: 'Kernwortschatz',
      items: [
        { wort: 'die Verdichtung', kollokation: 'die Verdichtung von Informationen', es: 'condensación' },
        { wort: 'die Nominalisierung', kollokation: 'eine Nominalisierung bilden', es: 'nominalización' },
        { wort: 'die Umformung', kollokation: 'eine Umformung vornehmen', es: 'transformación' },
        { wort: 'die Durchführung', kollokation: 'die Durchführung eines Projekts', es: 'realización, ejecución' },
        { wort: 'die Einführung', kollokation: 'die Einführung neuer Regeln', es: 'introducción' },
        { wort: 'die Zunahme', kollokation: 'die Zunahme der Nachfrage', es: 'aumento' },
        { wort: 'der Rückgang', kollokation: 'der Rückgang der Verkaufszahlen', es: 'descenso, retroceso' },
        { wort: 'die Prüfung', kollokation: 'nach Prüfung des Antrags', es: 'examen, revisión' },
        { wort: 'die Beendigung', kollokation: 'nach Beendigung der Sitzung', es: 'finalización' },
        { wort: 'die Ankunft', kollokation: 'bei Ihrer Ankunft', es: 'llegada' },
        { wort: 'die Teilnahme', kollokation: 'die Teilnahme an einer Konferenz', es: 'participación' },
        { wort: 'das Vorliegen', kollokation: 'bei Vorliegen aller Unterlagen', es: 'existencia, disponibilidad' },
        { wort: 'die Inanspruchnahme', kollokation: 'die Inanspruchnahme einer Leistung', es: 'uso, recurso a (un servicio)' },
        { wort: 'ungeachtet', kollokation: 'ungeachtet aller Warnungen', es: 'a pesar de (registro elevado)' },
      ],
      hinweis: 'Nominalisierungen auf **-ung** sind immer feminin; substantivierte Infinitive (**das Schreiben**) immer neutral. Merke dir jedes Wort **mit seiner Präposition**: *die Teilnahme **an***, *der Rückgang **der** Zahlen*.',
    },

    { type: 'rule' },

    // ── 4. Erklärung ──────────────────────────────────────────────
    {
      type: 'prose',
      eyebrow: 'Erklärung',
      card: true,
      titel: 'Was ist Nominalstil — und wozu?',
      absaetze: [
        'Der **Verbalstil** trägt die Information im Verb: *Weil die Preise steigen, kaufen die Leute weniger.* Der **Nominalstil** verlagert sie ins Substantiv: *Aufgrund steigender Preise kaufen die Leute weniger.* Ein ganzer Nebensatz wird zu einer **Präpositionalphrase** — kürzer, dichter, unpersönlicher.',
        'Genau diese Verdichtung kennzeichnet Fachtexte, Berichte, Verwaltungssprache und Zeitungskommentare. Auf C1 musst du sie in beide Richtungen beherrschen: **lesen** (den Nebensatz hinter der Phrase erkennen) und **schreiben** (gezielt verdichten, wo es den Text hebt). ~~Es el registro que separa un B2 sólido de un C1 real.~~',
      ],
    },

    {
      type: 'steps',
      eyebrow: 'Erklärung — Die fünf Bildungsmuster',
      steps: [
        {
          badge: 'Infinitiv',
          titel: 'Substantivierter Infinitiv → das …',
          text: 'Immer Neutrum, meist ohne Artikel in der Phrase. __lesen → das Lesen__, __ankommen → das Ankommen__. Bezeichnet den Vorgang als Ganzes.',
        },
        {
          badge: '-ung',
          titel: 'Verbstamm + -ung → die …',
          text: 'Das häufigste Muster, immer feminin. __prüfen → die Prüfung__, __einführen → die Einführung__, __durchführen → die Durchführung__.',
        },
        {
          badge: '-heit / -keit',
          titel: 'Adjektiv + -heit/-keit → die …',
          text: 'Aus Eigenschaften werden Zustände. __sicher → die Sicherheit__, __möglich → die Möglichkeit__, __abhängig → die Abhängigkeit__.',
        },
        {
          badge: 'Ablaut',
          titel: 'Eigene Nomen ohne Suffix',
          text: 'Viele starke Verben haben ein eigenes Nomen. __zunehmen → die Zunahme__, __zurückgehen → der Rückgang__, __ankommen → die Ankunft__, __teilnehmen → die Teilnahme__. Diese musst du **lernen**, nicht ableiten.',
        },
        {
          badge: 'Partizip',
          titel: 'Partizip/Adjektiv als Nomen → der/die/das …',
          text: 'Personen und Abstrakta: __angestellt → der/die Angestellte__, __neu → das Neue__, __wesentlich → das Wesentliche__. Dekliniert wie ein Adjektiv.',
        },
      ],
    },

    {
      type: 'prose',
      card: true,
      titel: 'Was passiert mit Subjekt und Objekt?',
      absaetze: [
        'Beim Verdichten verschwinden die Satzglieder nicht — sie **wandern in den Genitiv oder in eine Präposition**.',
        '**Das Objekt wird zum Genitiv:** *Man prüft **den Antrag*** → *die Prüfung **des Antrags***. **Das Subjekt wird zum Genitiv oder zu „durch“:** *Die Preise steigen* → *das Steigen **der Preise***; *Der Staat greift ein* → *der Eingriff **des Staates*** / *ein Eingriff **durch den Staat***. **Adverbien werden zu Adjektiven:** *stark steigen* → *ein **starker** Anstieg*. **Verb-Präpositionen bleiben erhalten:** *an etwas teilnehmen* → *die Teilnahme **an** etwas*.',
      ],
    },

    {
      type: 'tabelle',
      eyebrow: 'Erklärung — Präposition nach Bedeutung',
      kopf: ['Bedeutung', 'Nebensatz (verbal)', 'Präposition (nominal)'],
      zeilen: [
        ['kausal', 'weil, da', 'wegen · aufgrund · infolge + Gen. · dank + Dat./Gen.'],
        ['temporal (nach)', 'nachdem', 'nach + Dat.'],
        ['temporal (vor)', 'bevor, ehe', 'vor + Dat.'],
        ['temporal (gleichzeitig)', 'während, als', 'während + Gen. · bei + Dat.'],
        ['temporal (seit)', 'seit(dem)', 'seit + Dat.'],
        ['konditional', 'wenn, falls', 'bei + Dat. · im Falle + Gen.'],
        ['modal (Mittel)', 'indem, dadurch dass', 'durch + Akk. · mittels + Gen.'],
        ['modal (ohne)', 'ohne dass', 'ohne + Akk.'],
        ['konzessiv', 'obwohl, obgleich', 'trotz + Gen. · ungeachtet + Gen.'],
        ['final', 'damit, um … zu', 'zu + Dat. · zwecks + Gen. · für + Akk.'],
        ['adversativ', 'anstatt dass', 'anstelle + Gen. · statt + Gen.'],
      ],
    },

    {
      type: 'prose',
      card: true,
      titel: 'Wann ist Nominalstil richtig — und wann falsch?',
      absaetze: [
        '**Richtig:** in Berichten, Zusammenfassungen, Anträgen, formellen Nachrichten, im Hauptteil eines Diskussionsbeitrags, wenn zwei Gedanken elegant verbunden werden sollen. **Falsch:** in Dialogen, in persönlichen Beispielen, in der Einleitung und im Fazit, wo Klarheit zählt — und überall dort, wo drei Genitive hintereinander stehen würden (*die Prüfung der Durchführung der Maßnahmen*).',
        'Faustregel für die Prüfung: **ein bis zwei Nominalphrasen pro Absatz**, nie mehr. Der Nominalstil ist ein Gewürz, kein Hauptgericht. ~~Una por párrafo eleva el registro; tres lo hacen ilegible.~~',
      ],
    },

    { type: 'rule' },

    // ── 5. Beispiele ──────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele — nach Funktion',
      kicker: 'kausal',
      titel: 'Grund',
      items: [
        { text: '**Weil die Preise steigen**, sinkt der Konsum. → **Aufgrund steigender Preise** sinkt der Konsum.', gl: '— weil → aufgrund + Gen.; Adverbiale → Adjektiv' },
        { text: '**Da viele Mitarbeiter krank waren**, fiel die Sitzung aus. → **Wegen zahlreicher Krankheitsfälle** fiel die Sitzung aus.', gl: '— hier muss der Inhalt neu gefasst werden: *krank sein* → *Krankheitsfall*' },
        { text: '**Weil es stark geregnet hatte**, wurde die Straße gesperrt. → **Infolge starker Regenfälle** wurde die Straße gesperrt.', gl: '— *infolge* betont die Folge, typisch für Berichte' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'temporal',
      titel: 'Zeit',
      items: [
        { text: '**Nachdem man den Antrag geprüft hat**, wird entschieden. → **Nach Prüfung des Antrags** wird entschieden.', gl: '— nachdem → nach; Objekt → Genitiv' },
        { text: '**Bevor das Projekt beginnt**, wird ein Plan erstellt. → **Vor Projektbeginn** wird ein Plan erstellt.', gl: '— oft als Kompositum: *Projektbeginn*' },
        { text: '**Während die Verhandlungen liefen**, schwiegen beide Seiten. → **Während der Verhandlungen** schwiegen beide Seiten.', gl: '— *während* bleibt, wird aber zur Präposition + Gen.' },
        { text: '**Seit die Regel eingeführt wurde**, gibt es weniger Unfälle. → **Seit Einführung der Regel** gibt es weniger Unfälle.' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'konditional',
      titel: 'Bedingung',
      items: [
        { text: '**Wenn Sie ankommen**, melden Sie sich bitte. → **Bei Ihrer Ankunft** melden Sie sich bitte.', gl: '— wenn → bei + Dat.' },
        { text: '**Falls alle Unterlagen vorliegen**, wird der Antrag bearbeitet. → **Bei Vorliegen aller Unterlagen** wird der Antrag bearbeitet.', gl: '— Verwaltungsdeutsch in Reinform' },
        { text: '**Wenn es zu einem Unfall kommt**, rufen Sie diese Nummer. → **Im Falle eines Unfalls** rufen Sie diese Nummer.' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'modal',
      titel: 'Art und Weise, Mittel',
      items: [
        { text: '**Indem man den Prozess optimiert**, spart man Kosten. → **Durch die Optimierung des Prozesses** spart man Kosten.', gl: '— indem → durch + Akk.' },
        { text: 'Er ging, **ohne dass er sich verabschiedete**. → Er ging **ohne Verabschiedung**.' },
        { text: '**Dadurch, dass man Solarzellen installiert**, senkt man die Stromkosten. → **Mittels Installation von Solarzellen** senkt man die Stromkosten.', gl: '— *mittels* + Gen. (oder *von* + Dat. im Plural ohne Artikel)' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'konzessiv · final',
      titel: 'Einräumung und Zweck',
      items: [
        { text: '**Obwohl man gewarnt hatte**, fuhr er los. → **Trotz aller Warnungen** fuhr er los.', gl: '— obwohl → trotz + Gen.' },
        { text: '**Obgleich die Lage kritisch war**, blieb sie ruhig. → **Ungeachtet der kritischen Lage** blieb sie ruhig.', gl: '— *ungeachtet*: gehobener als *trotz*' },
        { text: '**Damit die Qualität verbessert wird**, führen wir Tests ein. → **Zur Verbesserung der Qualität** führen wir Tests ein.', gl: '— damit → zu + Dat. (zur = zu der)' },
        { text: 'Wir schreiben, **um den Termin zu bestätigen**. → Wir schreiben **zwecks Terminbestätigung**.', gl: '— *zwecks* + Gen.: sehr formell, nur in Nachrichten' },
      ],
    },

    { type: 'rule' },

    // ── 6. Übungen ────────────────────────────────────────────────
    {
      type: 'uebung',
      eyebrow: 'Anwendung — Übung 1 · Erkennen',
      frage: 'Welche Sätze stehen im Nominalstil? Markiere die Nominalphrase und nenne den Nebensatz, der dahintersteckt.',
      aufgaben: [
        'Nach Abschluss der Verhandlungen wurde der Vertrag unterzeichnet.',
        'Obwohl das Wetter schlecht war, fand das Konzert statt.',
        'Bei Nichteinhaltung der Frist verfällt der Anspruch.',
        'Die Regierung hat beschlossen, die Steuern zu senken.',
        'Durch den Einsatz moderner Technik konnten die Kosten gesenkt werden.',
      ],
      loesungen: [
        '**Nominal** — *Nach Abschluss der Verhandlungen* = *Nachdem die Verhandlungen abgeschlossen worden waren*.',
        '**Verbal** — Nebensatz mit *obwohl*. Nominal wäre: *Trotz des schlechten Wetters*.',
        '**Nominal** — *Bei Nichteinhaltung der Frist* = *Wenn die Frist nicht eingehalten wird*. ~~Nota la negación incorporada al sustantivo: *Nicht* + *Einhaltung*.~~',
        '**Verbal** — Infinitivsatz. Nominal wäre: *Die Regierung hat die Senkung der Steuern beschlossen*.',
        '**Nominal** — *Durch den Einsatz moderner Technik* = *Indem man moderne Technik einsetzte*.',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 2 · Umformen',
      frage: 'Forme den Nebensatz in eine Nominalphrase um. Achte auf Präposition, Kasus und Genitiv.',
      aufgaben: [
        'Weil das Wetter schlecht war, wurde das Spiel abgesagt.',
        'Nachdem die Sitzung beendet war, gingen alle nach Hause.',
        'Wenn Sie Fragen haben, wenden Sie sich an die Rezeption.',
        'Obwohl die Kosten hoch sind, wird das Projekt fortgesetzt.',
        'Indem man die Abläufe digitalisiert, spart die Firma Zeit.',
        'Damit die Mitarbeiter geschult werden, wurde ein Kurs eingerichtet.',
      ],
      loesungen: [
        '**Wegen des schlechten Wetters** wurde das Spiel abgesagt.',
        '**Nach Beendigung der Sitzung** gingen alle nach Hause.',
        '**Bei Fragen** wenden Sie sich an die Rezeption. ~~Observa cuánto se acorta: todo el Nebensatz cabe en dos palabras.~~',
        '**Trotz der hohen Kosten** wird das Projekt fortgesetzt.',
        '**Durch die Digitalisierung der Abläufe** spart die Firma Zeit.',
        '**Zur Schulung der Mitarbeiter** wurde ein Kurs eingerichtet.',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 3 · Produzieren',
      frage: 'Schreibe den folgenden Absatz so um, dass er **genau zwei** Nominalphrasen enthält — nicht mehr. Entscheide selbst, welche Stellen sich eignen.',
      aufgabe: '*Nachdem die Stadt ein neues Verkehrskonzept eingeführt hatte, nahm der Autoverkehr im Zentrum deutlich ab. Obwohl einige Händler protestierten, blieb die Stadtverwaltung bei ihrer Entscheidung. Indem sie die Parkgebühren erhöhte, finanzierte sie zusätzliche Buslinien.*',
      loesung: '**Mögliche Lösung** (andere Kombinationen sind richtig, solange es genau zwei Nominalphrasen sind):\n*Nach der Einführung eines neuen Verkehrskonzepts nahm der Autoverkehr im Zentrum deutlich ab. Obwohl einige Händler protestierten, blieb die Stadtverwaltung bei ihrer Entscheidung. Durch die Erhöhung der Parkgebühren finanzierte sie zusätzliche Buslinien.*\n~~El segundo Satz se queda verbal a propósito: tres nominalizaciones seguidas serían pesadas. Esa dosificación es exactamente lo que evalúa el criterio „Strukturen“.~~',
    },

    { type: 'rule' },

    // ── 7. Prüfungsbezug ──────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Lesen · Teil 2 · Lückentext',
      titel: 'Mini-Aufgabe · 6 Lücken',
      anweisung: 'Im echten Teil 2 fehlen in einem Text Wörter, die du aus einer Liste einsetzt. Genau hier werden Nominalisierungen und ihre Präpositionen getestet. Wähle für jede Lücke das passende Wort aus der Liste — jede Option wird genau einmal gebraucht.',
      absaetze: [
        'Die Stadt Freiburg gilt {1} ihrer konsequenten Verkehrspolitik als Vorbild. Seit der {2} einer autofreien Innenstadt im Jahr 1973 ist der Anteil des Radverkehrs stetig gestiegen. {3} der Planung wurden Anwohner und Händler eingebunden, {4} anfänglicher Widerstände. {5} den Ausbau des Straßenbahnnetzes konnte der Autoverkehr weiter reduziert werden. Bei {6} des Konzepts auf andere Städte zeigen sich jedoch Grenzen.',
      ],
      optionen: ['Übertragung', 'ungeachtet', 'Einführung', 'wegen', 'Durch', 'Während'],
      loesungen: [
        '{1} **wegen** — kausal + Genitiv (*ihrer Verkehrspolitik*)',
        '{2} **Einführung** — *die Einführung* + Genitiv, nach *seit der*',
        '{3} **Während** — temporal + Genitiv (*der Planung*)',
        '{4} **ungeachtet** — konzessiv + Genitiv (*anfänglicher Widerstände*)',
        '{5} **Durch** — modal + Akkusativ (*den Ausbau*)',
        '{6} **Übertragung** — *bei* + Nominalisierung + Genitiv (*des Konzepts*)',
      ],
      kommentar: 'Strategie: Schau zuerst auf den **Kasus des folgenden Nomens**. Ein Genitiv nach der Lücke (*ihrer, der, anfänglicher, des*) verrät fast immer eine Genitivpräposition oder eine Nominalisierung.',
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Im **Lesen** lies jede Nominalphrase als versteckten Nebensatz — dann verstehst du auch dichte Fachtexte. Im **Schreiben** hebt der Nominalstil das Kriterium „Strukturen“, aber nur dosiert: **eine Phrase pro Absatz** zeigt Können, drei zeigen Unsicherheit. Und prüfe nach jedem Genitiv, ob er wirklich Genitiv ist — *wegen dem* kostet Punkte.',
    },

    { type: 'rule' },

    // ── 8. Abschluss ──────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Das bleibt', 'Beispiel'],
      zeilen: [
        ['Nebensatz → Präposition + Nominalisierung', 'weil die Preise steigen → aufgrund steigender Preise'],
        ['Objekt/Subjekt → Genitiv', 'den Antrag prüfen → die Prüfung des Antrags'],
        ['Adverb → Adjektiv', 'stark steigen → ein starker Anstieg'],
        ['-ung = feminin · Infinitiv = neutral', 'die Einführung · das Lesen'],
        ['Dosis: 1-2 pro Absatz', 'Gewürz, kein Hauptgericht'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich kann einen *weil-*, *nachdem-*, *wenn-*, *indem-* oder *obwohl-*Satz in eine Nominalphrase umformen.',
        'Ich weiß, welche Präposition zu welcher Bedeutung gehört, und welchen Kasus sie verlangt.',
        'Ich erkenne in einem Lesetext die Nominalphrase und kann sie gedanklich „zurückübersetzen“.',
        'Ich setze in meinem eigenen Text höchstens ein bis zwei Nominalphrasen pro Absatz ein.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Der Nominalstil rückt das **Was** in den Vordergrund und lässt das **Wer** verschwinden. Genau dasselbe leistet das **Passiv** — nur mit Verben statt Substantiven. In der nächsten Lektion lernst du das Passiv und seine Ersatzformen als zweites großes Werkzeug der unpersönlichen, sachlichen Sprache kennen.',
    },
  ],
}
