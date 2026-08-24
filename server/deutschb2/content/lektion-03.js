// Lektion 03 · Diagnose B2 — Standortbestimmung
//
// Bloque 0 «Einführung» — autodiagnóstico: B1 vs. B2, tres mini-tests
// con remisión a las lecciones 4-17, tabla can-do por módulo y el plan
// de los 5 bloques del curso.

export default {
  spec: ['Bloque 0', 'Einführung', 'Niveau B2', 'Prüfungsrelevanz: Standortbestimmung'],
  h1: 'Diagnose B2 — Standortbestimmung',
  lead: 'Bevor der Kurs startet: ehrlich testen, wo du stehst — und daraus deinen persönlichen Weg durch die 42 Lektionen ableiten.',

  content: [
    // ── Lernziele ─────────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'den Unterschied zwischen B1 und B2 an konkreten Beispielen erkennen',
        'mit drei Mini-Tests deine Lücken in Grammatik, Wortschatz und Schreiben finden',
        'dich pro Modul realistisch einschätzen (Kann-ich-das-Tabelle)',
        'deinen Weg durch die fünf Blöcke des Kurses planen',
      ],
    },

    { type: 'rule' },

    // ── Kernwortschatz ────────────────────────────────────────────
    {
      type: 'wortschatz',
      eyebrow: 'Kernwortschatz — über das Lernen sprechen',
      items: [
        { wort: 'die Standortbestimmung, -en', kollokation: 'eine ehrliche Standortbestimmung machen', es: 'el diagnóstico inicial' },
        { wort: 'einschätzen', kollokation: 'das eigene Niveau realistisch einschätzen', es: 'evaluar, estimar' },
        { wort: 'die Stärke, -n', kollokation: 'seine Stärken kennen', es: 'el punto fuerte' },
        { wort: 'die Schwäche, -n', kollokation: 'an einer Schwäche arbeiten', es: 'el punto débil' },
        { wort: 'die Lücke, -n', kollokation: 'eine Lücke schließen', es: 'la laguna' },
        { wort: 'auffrischen', kollokation: 'die Grammatik auffrischen', es: 'refrescar' },
        { wort: 'der Fortschritt, -e', kollokation: 'sichtbare Fortschritte machen', es: 'el progreso' },
        { wort: 'das Lernziel, -e', kollokation: 'sich ein klares Lernziel setzen', es: 'el objetivo de aprendizaje' },
        { wort: 'gezielt', kollokation: 'gezielt üben statt alles wiederholen', es: 'de forma selectiva' },
        { wort: 'der Lernplan, ·pläne', kollokation: 'einen realistischen Lernplan erstellen', es: 'el plan de estudio' },
      ],
    },

    { type: 'rule' },

    // ── Erklärung ─────────────────────────────────────────────────
    {
      type: 'prose',
      eyebrow: 'Erklärung — warum eine Diagnose?',
      absaetze: [
        'Wer B2 vorbereitet, hat **keine Zeit, alles zu wiederholen**. Eine Standortbestimmung zeigt dir, wo deine Lücken sind — damit du __gezielt__ übst. Deshalb bekommt in dieser Lektion jede Lösung einen Wegweiser: **„Fehler? → Lektion N“**.',
      ],
    },
    {
      type: 'tabelle',
      eyebrow: 'Erklärung — was B1 von B2 unterscheidet',
      kopf: ['Bereich', 'B1', 'B2'],
      zeilen: [
        ['Sätze verbinden', 'weil, aber, deshalb', 'obwohl, trotzdem, je … desto, zweiteilige Konnektoren'],
        ['Hypothesen & Höflichkeit', '„vielleicht“, „ich möchte“', 'Konjunktiv II: „Es wäre besser, wenn …“'],
        ['Passiv', 'einfaches Präsens-Passiv', 'Passiv mit Modalverben, Passiversatzformen'],
        ['Themen', 'Alltag: Familie, Hobbys, Reisen', 'abstrakter: Arbeitswelt, Medien, Umwelt — mit Pro & Contra'],
        ['Texte', 'kurze, einfache Mitteilungen', 'strukturierte Texte mit begründetem Standpunkt'],
      ],
    },
    {
      type: 'vergleich',
      titel: 'Dieselbe Meinung — zwei Niveaus',
      zeilen: [
        { satz: 'Homeoffice ist gut, weil man Zeit spart. Aber manchmal ist es auch schlecht.', label: 'B1 — einfache Sätze, weil + aber' },
        { satz: 'Obwohl man im Homeoffice viel Zeit spart, würde ich nicht jeden Tag zu Hause arbeiten — der Kontakt zu den Kollegen lässt sich kaum ersetzen.', label: 'B2 — obwohl, Konjunktiv II, Passiversatz' },
      ],
    },
    {
      type: 'prose',
      eyebrow: 'Erklärung — so funktioniert die Diagnose',
      absaetze: [
        'Unten warten **drei Mini-Tests**: Grammatik, Wortschatz und ein kurzer Schreibtext. Arbeite sie **ohne Hilfsmittel** durch und schau erst dann in die Lösungen. ~~No es un examen: un fallo aquí es información valiosa, no un problema.~~',
      ],
    },

    { type: 'rule' },

    // ── Beispiele ─────────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele — woran du B2-Strukturen erkennst',
      kicker: 'Radar',
      titel: 'Vier typische B2-Sätze',
      items: [
        { text: 'Wenn ich das **gewusst hätte**, **wäre** ich früher **gekommen**.', gl: '— Konjunktiv II der Vergangenheit → Lektion 8' },
        { text: 'Die Ministerin sagte, die Reform **sei** notwendig.', gl: '— indirekte Rede → Lektion 9' },
        { text: 'Die **steigenden** Mieten sind ein **viel diskutiertes** Problem.', gl: '— Partizip als Attribut → Lektion 13' },
        { text: '**Beim Lesen** der E-Mail fiel mir der Fehler auf.', gl: '— Nominalisierung → Lektion 16' },
      ],
    },

    { type: 'rule' },

    // ── Übungen: die drei Mini-Tests ──────────────────────────────
    {
      type: 'uebung',
      eyebrow: 'Anwendung — Mini-Test 1 · Grammatik',
      frage: 'Wähle oder ergänze. Jede Lösung zeigt dir: Fehler? → dann diese Lektion zuerst.',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Ich komme später, ___ ich noch einen Termin habe. ~~a) denn · b) weil · c) deshalb~~',
        'Ich mache den Kurs, ___ mein Deutsch besser wird. ~~a) damit · b) um · c) weil~~',
        '___ mehr du übst, ___ sicherer wirst du. ~~(completa)~~',
        'Wenn ich mehr Zeit ___, ___ ich jeden Tag lernen. ~~(haben / lernen — irreal)~~',
        'Das Formular muss bis Montag ___ werden. ~~(ausfüllen)~~',
        'Der Kollege, ___ ___ ich das Projekt mache, kommt aus Peru. ~~(mit)~~',
        'Ich warte schon seit Tagen ___ deine Antwort. ~~a) auf · b) für · c) an~~',
      ],
      loesungen: [
        '**b) weil** — das Verb steht am Ende („… habe“); nach *denn* stünde es auf Position 2. Fehler? → **Lektion 4**',
        '**a) damit** — anderes Subjekt („mein Deutsch“), also kein *um … zu*. Fehler? → **Lektion 5**',
        '**Je** mehr du übst, **desto** sicherer wirst du. Fehler? → **Lektion 6**',
        'Wenn ich mehr Zeit **hätte**, **würde** ich jeden Tag **lernen**. Fehler? → **Lektion 7**',
        'Das Formular muss bis Montag **ausgefüllt** werden. Fehler? → **Lektion 11**',
        'Der Kollege, **mit dem** ich das Projekt mache … Fehler? → **Lektion 12**',
        '**a) auf** — *warten auf* + Akkusativ. ~~No es «esperar por».~~ Fehler? → **Lektion 15**',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 2 · Mini-Test Wortschatz',
      frage: 'Typische B2-Kollokationen — welche Variante ist richtig?',
      loesungLabel: 'Lösung',
      aufgaben: [
        'eine Entscheidung ___ ~~a) machen · b) treffen~~',
        'Welches Wort passt nicht? ~~Gehalt – Lohn – Miete – Einkommen~~',
        'sich ___ eine Stelle bewerben ~~a) für · b) um~~',
        'die Vor- und ___ abwägen ~~(completa)~~',
        '___ meiner Meinung nach / Meiner Meinung ___ … — wie heißt es richtig?',
      ],
      loesungen: [
        '**b) treffen** — eine Entscheidung *treffen*. ~~Calco típico de «tomar/hacer una decisión»: nunca «machen».~~',
        '**Miete** — die anderen drei bezeichnen Geld, das man *bekommt*; die Miete *bezahlt* man.',
        '**b) um** — sich *um* eine Stelle bewerben.',
        'die Vor- und **Nachteile** abwägen — die Grundformel jeder B2-Argumentation.',
        '**Meiner Meinung nach** … — ohne Präposition davor. ~~«Según mi opinión» ≠ *nach meiner Meinung nach*: la trampa es doblar la preposición.~~',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 3 · Mini-Test Schreiben',
      frage: 'Stell dich in einem Lernforum vor (60–80 Wörter): Wer bist du? Warum lernst du Deutsch? Was ist dein Ziel mit dem B2? Nutze mindestens zwei Konnektoren.',
      loesungLabel: 'Mögliche Lösung',
      loesung: 'Hallo zusammen! Ich heiße Lucía und komme aus Valencia. Ich arbeite als Krankenschwester und lerne seit zwei Jahren Deutsch, **weil** ich in Deutschland arbeiten möchte. Für die Berufsanerkennung brauche ich das Zertifikat B2, **deshalb** bereite ich mich jetzt intensiv vor. **Obwohl** die Grammatik manchmal schwierig ist, macht mir die Sprache viel Spaß. Mein Ziel ist es, die Prüfung im Sommer zu bestehen! *(62 Wörter)* ~~Autoevalúa: ¿verbo al final tras «weil/obwohl»? ¿Inversión tras «deshalb»? ¿60-80 palabras? Si algo falló → Lektionen 4 y 28.~~',
    },

    { type: 'rule' },

    // ── Prüfungsbezug ─────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Prüfungsbezug — Selbsteinschätzung pro Modul',
      kopf: ['Modul', 'Kann ich das schon? — bewerte dich: ✓ / teils / ✗'],
      zeilen: [
        ['Lesen', 'Ich verstehe längere Artikel im Detail und erkenne Meinungen und Standpunkte.'],
        ['Hören', 'Ich folge Interviews, Diskussionen und einem Vortrag in normalem Tempo.'],
        ['Schreiben', 'Ich schreibe einen strukturierten Forumsbeitrag (~150 Wörter) mit begründeter Meinung.'],
        ['Sprechen', 'Ich halte einen kurzen Vortrag und diskutiere spontan mit einem Partner.'],
      ],
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Sei bei der Selbsteinschätzung **streng** — ein zu optimistisches „✓“ kostet dich am Prüfungstag Punkte. Notiere dein Ergebnis von heute und **wiederhole die Diagnose nach Block 2**: Der sichtbare Fortschritt ist die beste Motivation.',
    },

    { type: 'rule' },

    // ── Abschluss ─────────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung — dein Weg durch den Kurs',
      kopf: ['Block', 'Lektionen', 'Inhalt'],
      zeilen: [
        ['0 · Einführung', '1–3', 'Prüfung, digitales Format, Diagnose — hier bist du jetzt'],
        ['1 · Grammatik & Struktur', '4–17', 'die komplette B2-Grammatik, von Konnektoren bis Genitiv-Präpositionen'],
        ['2 · Prüfungsstrategie', '18–32', 'jedes Modul Teil für Teil: Lesen, Hören, Schreiben, Sprechen'],
        ['3 · Themenfelder & Wortschatz', '33–40', 'die acht großen Prüfungsthemen mit Wortschatz und Redemitteln'],
        ['4 · Prüfungssimulation', '41–42', 'zwei komplette Simulationen mit Korrektur und Strategien'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich kann an Beispielen erklären, was B2 von B1 unterscheidet.',
        'Ich habe die drei Mini-Tests gemacht und weiß, welche Lektionen ich zuerst brauche.',
        'Ich habe mich pro Modul ehrlich eingeschätzt.',
        'Ich kenne die fünf Blöcke des Kurses und habe einen Lernplan.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Jetzt geht es richtig los: **Lektion 4, „Konnektoren I“** — die Modelllektion des Kurses. An ihr siehst du, wie jede Lektion der Methode aufgebaut ist: Wortschatz, Erklärung, Beispiele, Übungen und Prüfungsbezug. Inhaltlich lernst du dort, Grund, Einräumung und Folge mit der richtigen Verbstellung zu verbinden.',
    },
  ],
}
