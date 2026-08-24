// Lektion 05 · Konnektoren II — final, temporal, konditional
//
// Bloque 1 «Grammatik & Struktur». Sigue el estándar de la lección
// modelo 04 (docs/deutschb2/KANON.md + docs/deutschc1/FORMAT.md).

export default {
  spec: ['Bloque 1', 'Grammatik & Struktur', 'Niveau B2', 'Prüfungsrelevanz: alle Module'],
  h1: 'Konnektoren II',
  lead: 'Zweck (final), Zeit (temporal) und Bedingung (konditional): die zweite Hälfte der Konnektoren — wieder fest an ihre Verbstellung gekoppelt.',

  content: [
    // ── Lernziele ─────────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'finale Sätze mit *damit* und *um … zu* bilden und richtig zwischen beiden wählen',
        'temporale Nebensätze mit *bevor, nachdem, während, seit(dem), bis* korrekt bauen — inklusive Zeitenfolge bei *nachdem*',
        'Bedingungen mit *wenn, falls, sofern* formulieren und im Register unterscheiden',
      ],
    },

    { type: 'rule' },

    // ── Kernwortschatz ────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Kernwortschatz',
      kopf: ['Konnektor', 'Bedeutung', 'Typ & Verbstellung'],
      zeilen: [
        ['damit', 'para que', 'Subjunktion → Verb ans Ende'],
        ['um … zu + Infinitiv', 'para (mismo sujeto)', 'Infinitivkonstruktion → zu + Inf. am Ende'],
        ['bevor', 'antes de (que)', 'Subjunktion → Verb ans Ende'],
        ['nachdem', 'después de (que)', 'Subjunktion → Verb ans Ende + Zeitenfolge'],
        ['während', 'mientras', 'Subjunktion → Verb ans Ende'],
        ['seit / seitdem', 'desde que', 'Subjunktion → Verb ans Ende'],
        ['bis', 'hasta que', 'Subjunktion → Verb ans Ende'],
        ['wenn', 'si / cuando', 'Subjunktion → Verb ans Ende'],
        ['falls / sofern', 'en caso de que / siempre que', 'Subjunktion → Verb ans Ende'],
      ],
    },

    { type: 'rule' },

    // ── Erklärung ─────────────────────────────────────────────────
    {
      type: 'prose',
      eyebrow: 'Erklärung — drei neue Bedeutungen, eine alte Regel',
      absaetze: [
        'Alle Konnektoren dieser Lektion sind **Subjunktionen**: Sie leiten einen Nebensatz ein, das Verb geht **ans Ende**. Neu ist nur die Bedeutung — und zwei Sonderregeln: die Wahl zwischen *damit* und *um … zu* sowie die Zeitenfolge bei *nachdem*.',
      ],
    },
    {
      type: 'steps',
      steps: [
        {
          badge: 'final',
          titel: 'Zweck: damit oder um … zu?',
          text: 'Haben Haupt- und Nebensatz **dasselbe Subjekt**, nimm __um … zu + Infinitiv__ — ohne eigenes Subjekt, ohne konjugiertes Verb: __Ich lerne, um zu bestehen.__ Bei **zwei verschiedenen Subjekten** ist nur **damit** möglich: __Ich spreche langsam, damit ihr mich versteht.__ ~~«para que» pide subjuntivo en español; en alemán no existe eso: tras *damit* va indicativo normal.~~',
        },
        {
          badge: 'temporal',
          titel: 'Zeit: vorher, nachher, gleichzeitig',
          text: '**bevor** (vorher), **während** (gleichzeitig), **bis** (Endpunkt), **seit(dem)** (Anfangspunkt, dauert an — im Deutschen mit __Präsens__: *Seit ich hier wohne, …*). Sonderfall **nachdem**: Der Nebensatz liegt einen Zeitschritt **vor** dem Hauptsatz → __Plusquamperfekt + Präteritum__ oder __Perfekt + Präsens__.',
        },
        {
          badge: 'konditional',
          titel: 'Bedingung: wenn, falls, sofern',
          text: '**wenn** ist der Standard (Bedingung *und* Zeit), **falls** betont, dass etwas nur vielleicht eintritt, **sofern** ist formell ~~(«siempre y cuando»)~~. Reale Bedingung = Indikativ Präsens auf beiden Seiten: __Wenn ich Zeit habe, helfe ich dir.__',
        },
      ],
    },

    { type: 'rule' },

    // ── Beispiele ─────────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele — Zweck',
      kicker: 'final',
      titel: 'damit / um … zu — „¿para qué?“',
      items: [
        { text: 'Ich lerne jeden Tag, **um** die Prüfung **zu bestehen**.', gl: '— mismo sujeto → um … zu' },
        { text: 'Wir nehmen ein Taxi, **um** pünktlich **anzukommen**.', gl: '— verbo separable: an**zu**kommen' },
        { text: 'Ich spreche langsam, **damit** alle mich **verstehen**.', gl: '— dos sujetos → damit' },
        { text: 'Sie macht das Fenster zu, **damit** es nicht kalt **wird**.', gl: '— Verb ans Ende' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'temporal',
      titel: 'Zeit — „¿cuándo?“',
      items: [
        { text: '**Nachdem** ich gegessen **hatte**, ging ich spazieren.', gl: '— Plusquamperfekt → Präteritum' },
        { text: '**Nachdem** er die Prüfung bestanden **hat**, sucht er eine Stelle.', gl: '— Perfekt → Präsens' },
        { text: '**Bevor** du gehst, schließ bitte das Fenster.', gl: '' },
        { text: '**Während** er arbeitet, hört er Musik.', gl: '' },
        { text: '**Seitdem** sie in Hamburg **wohnt**, fährt sie mit dem Rad.', gl: '— alemán: presente, no pasado' },
        { text: 'Wir warten, **bis** der Regen **aufhört**.', gl: '' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'konditional',
      titel: 'Bedingung — „¿bajo qué condición?“',
      items: [
        { text: '**Wenn** ich Zeit **habe**, helfe ich dir.', gl: '' },
        { text: '**Falls** es Probleme **gibt**, rufen Sie mich bitte an.', gl: '— posibilidad remota' },
        { text: '**Sofern** alle einverstanden **sind**, beginnen wir morgen.', gl: '— registro formal' },
      ],
    },
    {
      type: 'vergleich',
      titel: 'damit oder um … zu? — la decisión en dos segundos',
      zeilen: [
        { satz: 'Ich mache einen Kurs, um mein Deutsch zu verbessern.', label: 'dasselbe Subjekt → um … zu' },
        { satz: 'Ich erkläre es noch einmal, damit ihr es versteht.', label: 'zwei Subjekte → nur damit' },
        { satz: 'Ich lerne, damit ich bestehe. → besser: Ich lerne, um zu bestehen.', label: 'damit ist hier korrekt, aber um … zu ist eleganter' },
      ],
    },

    { type: 'rule' },

    // ── Übungen ───────────────────────────────────────────────────
    {
      type: 'uebung',
      eyebrow: 'Anwendung — Übung 1 · Erkennen',
      frage: 'Bestimme den Typ: final, temporal oder konditional.',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Falls der Zug Verspätung hat, nimm den Bus.',
        'Nachdem er angekommen war, rief er sofort an.',
        'Sie spart jeden Monat, um im Sommer zu verreisen.',
        'Während wir aßen, klingelte das Telefon.',
      ],
      loesungen: [
        '**konditional** (falls)',
        '**temporal** (nachdem + Plusquamperfekt)',
        '**final** (um … zu)',
        '**temporal** (während)',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 2 · damit oder um … zu?',
      frage: 'Verbinde die Sätze mit der passenden Finalkonstruktion.',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Ich gehe früh ins Bett. Ich will morgen fit sein.',
        'Der Lehrer wiederholt die Regel. Die Schüler sollen sie verstehen.',
        'Wir sparen Strom. Die Rechnung soll niedriger werden.',
      ],
      loesungen: [
        'Ich gehe früh ins Bett, **um** morgen fit **zu sein**. ~~(mismo sujeto)~~',
        'Der Lehrer wiederholt die Regel, **damit** die Schüler sie **verstehen**. ~~(dos sujetos)~~',
        'Wir sparen Strom, **damit** die Rechnung niedriger **wird**.',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 3 · Produzieren',
      frage: 'Verbinde mit dem angegebenen Temporalkonnektor — achte bei *nachdem* auf die Zeitenfolge.',
      loesungLabel: 'Mögliche Lösung',
      aufgaben: [
        'Ich bestand die Prüfung. Danach feierte ich mit Freunden. ~~(nachdem)~~',
        'Zuerst gehe ich einkaufen. Dann koche ich. ~~(bevor)~~',
        'Sie wohnt in Berlin. Seit dieser Zeit spricht sie viel besser Deutsch. ~~(seitdem)~~',
      ],
      loesungen: [
        '**Nachdem** ich die Prüfung bestanden **hatte**, feierte ich mit Freunden. ~~(Plusquamperfekt → Präteritum)~~',
        '**Bevor** ich koche, gehe ich einkaufen. ~~(también válido: Ich gehe einkaufen, bevor ich koche.)~~',
        '**Seitdem** sie in Berlin wohnt, spricht sie viel besser Deutsch.',
      ],
    },

    { type: 'rule' },

    // ── Prüfungsbezug ─────────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Prüfungsformat · Auswahlaufgabe',
      titel: '3 Lücken',
      anweisung: 'So sieht das im Prüfungsformat aus: den passenden Konnektor auswählen.',
      absaetze: [
        'Viele Berufstätige machen einen Sprachkurs, {1} beruflich weiterzukommen. {2} sie sich anmelden, sollten sie ihr Niveau testen lassen. {3} der Kurs online stattfindet, spart man außerdem den Anfahrtsweg.',
      ],
      optionen: [
        '(1) a) damit · b) um · c) weil',
        '(2) a) Bevor · b) Nachdem · c) Bis',
        '(3) a) Während · b) Nachdem · c) Sofern',
      ],
      loesungLabel: 'Lösung',
      loesungen: [
        '{1} **b) um** — dasselbe Subjekt, der Satz endet auf *weiterzukommen* (zu + Infinitiv).',
        '{2} **a) Bevor** — logische Reihenfolge: erst testen, dann anmelden.',
        '{3} **c) Sofern** — Bedingung im formellen Register.',
      ],
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Im **Schreiben** (Forumsbeitrag) zeigt *um … zu* mehr Struktur als zwei Hauptsätze. Zwei typische Fehler kosten Punkte: ~~el calco *für zu lernen* («para aprender»)~~ — richtig ist **um zu lernen** — und die vergessene Zeitenfolge nach **nachdem**.',
    },

    { type: 'rule' },

    // ── Abschluss ─────────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Bedeutung', 'Konnektoren', 'Besonderheit'],
      zeilen: [
        ['final', 'damit · um … zu', 'dasselbe Subjekt → um … zu'],
        ['temporal', 'bevor, nachdem, während, seit(dem), bis', 'nachdem → Zeitenfolge'],
        ['konditional', 'wenn, falls, sofern', 'sofern = formell'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich wähle *um … zu* bei gleichem Subjekt und *damit* bei zwei Subjekten.',
        'Nach *nachdem* benutze ich Plusquamperfekt + Präteritum (oder Perfekt + Präsens).',
        'Ich kann Bedingungen mit *wenn*, *falls* und *sofern* im passenden Register formulieren.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Damit sind die einteiligen Konnektoren komplett. In der nächsten Lektion kommen die **zweiteiligen Konnektoren** — *sowohl … als auch*, *je … desto*, *zwar … aber* — die im Schreiben und Sprechen sofort das Kriterium „Strukturen“ heben.',
    },
  ],
}
