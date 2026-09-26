// Lektion 09 · Konjunktiv I — indirekte Rede
//
// Bloque 1 «Grammatik & Struktur». Sigue el estándar de la lección
// modelo 04 (docs/deutschb2/KANON.md + docs/deutschc1/FORMAT.md).
// Enfoque B2: comprensión prioritaria (prensa, Lesen), producción limitada.

export default {
  spec: ['Bloque 1', 'Grammatik & Struktur', 'Niveau B2', 'Prüfungsrelevanz: Lesen (Verstehen im Fokus)'],
  h1: 'Konjunktiv I',
  lead: 'Er sei krank, er habe keine Zeit: die Form, mit der Zeitungen und Nachrichten wiedergeben, was andere gesagt haben — im B2 vor allem zum Erkennen.',

  content: [
    // ── Lernziele ─────────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'den Konjunktiv I in Presse- und Nachrichtentexten erkennen und als *wiedergegebene Aussage* lesen',
        'einfache Aussagen indirekt wiedergeben: *er sei, er habe, er könne*',
        'verstehen, wann auf den Konjunktiv II ausgewichen wird (*sie hätten* statt *sie haben*)',
      ],
    },

    { type: 'rule' },

    // ── Kernwortschatz ────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Kernwortschatz',
      kopf: ['Direkte Rede', 'Indirekte Rede', 'Hinweis'],
      zeilen: [
        ['er ist', 'er sei', 'la forma más frecuente en prensa'],
        ['er hat', 'er habe', ''],
        ['er kann', 'er könne', ''],
        ['er muss', 'er müsse', ''],
        ['er will', 'er wolle', ''],
        ['er wird', 'er werde', 'también futuro: er werde kommen'],
        ['sie sind', 'sie seien', ''],
        ['sie haben', 'sie hätten', 'K I = Indikativ → Ausweichen auf K II'],
        ['er hat gesagt', 'er habe gesagt', 'pasado: habe/sei + Partizip II'],
        ['er ist gekommen', 'er sei gekommen', ''],
      ],
    },

    { type: 'rule' },

    // ── Erklärung ─────────────────────────────────────────────────
    {
      type: 'prose',
      eyebrow: 'Erklärung — Distanz durch Grammatik',
      absaetze: [
        'Mit dem Konjunktiv I signalisiert ein Text: **Das behauptet jemand — ich berichte nur.** Deshalb steht er überall in Zeitungen, Nachrichten und Berichten. ~~Ojo: no tiene NADA que ver con el subjuntivo español. «Dijo que estaba enfermo» va en indicativo en español; el alemán usa aquí su forma especial: *Er sagte, er **sei** krank.*~~',
      ],
    },
    {
      type: 'steps',
      steps: [
        {
          badge: 'Bildung',
          titel: 'Verbstamm + e — wichtig ist die 3. Person',
          text: 'Konjunktiv I = Infinitivstamm + *-e*: __er komme, er wisse, er wolle__. Unregelmäßig nur __sein__: *er sei, sie seien*. Für das B2 reicht die **3. Person** — sie ist die Form der Presse. Vergangenheit immer mit __habe/sei + Partizip II__: *Er sagte, er **habe** nichts **gewusst**.*',
        },
        {
          badge: 'Ausweichen',
          titel: 'Wenn K I wie Indikativ aussieht → K II',
          text: 'Im Plural ist der Konjunktiv I oft **identisch mit dem Indikativ** (*sie haben* = *sie haben*). Dann weicht man auf den __Konjunktiv II__ aus: *Die Mitarbeiter sagten, sie **hätten** keine Information bekommen.* So bleibt sichtbar, dass es indirekte Rede ist.',
        },
        {
          badge: 'B2-Strategie',
          titel: 'Verstehen zuerst, Produzieren dosiert',
          text: 'Im Modul **Lesen** ist die Kernfrage: __Fakt oder wiedergegebene Aussage?__ Siehst du *sei, habe, könne* oder *laut/zufolge*, ist es eine Behauptung einer Person — nicht unbedingt die Meinung des Autors. Beim **Schreiben** genügt auf B2: *Er sagte, dass er krank **ist**/**sei*** — die dass-Variante mit Indikativ ist akzeptabel, ein einfaches *er sei/er habe* bringt Extrapunkte.',
        },
      ],
    },

    { type: 'rule' },

    // ── Beispiele ─────────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele — Gegenwart',
      kicker: 'Gegenwart',
      titel: 'so berichtet die Presse',
      items: [
        { text: 'Der Minister erklärte, die Lage **sei** stabil.', gl: '— «dijo que la situación estaba estable»' },
        { text: 'Die Firma teilte mit, sie **habe** keine offenen Stellen.', gl: '' },
        { text: 'Der Experte betonte, man **könne** viel Energie sparen.', gl: '' },
        { text: 'Die Bürgermeisterin sagte, sie **wolle** mehr Radwege bauen.', gl: '' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'Vergangenheit & Zukunft',
      titel: 'habe/sei + Partizip II · werde + Infinitiv',
      items: [
        { text: 'Er sagte, er **habe** von nichts **gewusst**.', gl: '— pasado con habe' },
        { text: 'Sie erklärte, sie **sei** erst gestern **angekommen**.', gl: '— pasado con sei (verbo con sein)' },
        { text: 'Der Chef kündigte an, man **werde** die Preise nicht erhöhen — sie **würden** stabil bleiben.', gl: '— futuro: werde; en plural, würden (sie werden = indicativo)' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'Ausweichform',
      titel: 'Plural → Konjunktiv II',
      items: [
        { text: 'Die Nachbarn sagten, sie **hätten** nichts gehört.', gl: '— *sie haben* parecería indicativo' },
        { text: 'Die Studierenden erklärten, sie **kämen** mit dem Online-Format gut zurecht.', gl: '' },
      ],
    },
    {
      type: 'vergleich',
      titel: 'Fakt oder Behauptung? — genau das fragt die Prüfung',
      zeilen: [
        { satz: 'Die Miete in Großstädten ist stark gestiegen.', label: 'Indikativ: el autor lo presenta como hecho' },
        { satz: 'Laut dem Verband sei die Miete stark gestiegen.', label: 'Konjunktiv I: alguien lo afirma — el autor toma distancia' },
        { satz: 'Er sagte, dass er keine Zeit hat.', label: 'coloquial con dass + Indikativ — aceptable en B2' },
      ],
    },

    { type: 'rule' },

    // ── Mehr Beispiele ────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Mehr Beispiele',
      kicker: 'direkt → indirekt',
      titel: 'Aus der direkten in die indirekte Rede',
      items: [
        { text: 'Die Ärztin: „Die Operation ist gut verlaufen.“ → Die Ärztin sagte, die Operation **sei** gut **verlaufen**.', gl: '— pasado con sei' },
        { text: 'Der Vermieter: „Ich habe den Handwerker schon bestellt.“ → Er erklärte, er **habe** den Handwerker schon **bestellt**.', gl: '— pasado con habe' },
        { text: 'Die Trainerin: „Das Team muss mehr trainieren.“ → Sie meinte, das Team **müsse** mehr trainieren.', gl: '— müsse' },
        { text: 'Die Eltern: „Wir haben keine Information bekommen.“ → Die Eltern kritisierten, sie **hätten** keine Information bekommen.', gl: '— plural: hätten en lugar de haben' },
        { text: 'Der Bürgermeister: „Die Stadt wird ein neues Hallenbad bauen.“ → Er kündigte an, die Stadt **werde** ein neues Hallenbad bauen.', gl: '— futuro con werde' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'Presse',
      titel: 'So klingt es in den Nachrichten',
      items: [
        { text: '**Laut** Polizei **gebe** es keine Verletzten.', gl: '— laut: indica la fuente' },
        { text: 'Einem Sprecher **zufolge** **wolle** das Unternehmen 200 neue Stellen schaffen.', gl: '— zufolge va detrás del sustantivo' },
        { text: 'Die Gewerkschaft behauptet, die Löhne **seien** seit Jahren zu niedrig.', gl: '— el periodista toma distancia' },
        { text: 'Der Minister versicherte, er **wisse** nichts von den Problemen.', gl: '— wisse = K I de wissen' },
        { text: 'Anwohner berichten, sie **könnten** nachts wegen des Lärms nicht schlafen.', gl: '— sie können = indicativo → könnten' },
      ],
    },

    { type: 'rule' },

    // ── Prüfungsbezug ─────────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Modul Lesen · Kommentar & Standpunkt',
      titel: 'Wer sagt was?',
      anweisung: 'Lies den Ausschnitt aus einem Kommentar und entscheide: Ist die Aussage die Position des Autors oder eine wiedergegebene Behauptung?',
      absaetze: [
        'Die Stadtverwaltung verteidigt das neue Parkkonzept: Die Innenstadt **sei** dadurch deutlich ruhiger geworden, und die Geschäfte **hätten** sogar mehr Kundschaft. Wer jedoch morgens durch die Nebenstraßen fährt, sieht ein anderes Bild: Dort stehen die Autos dichter als je zuvor.',
      ],
      optionen: [
        '(1) „Die Innenstadt ist ruhiger geworden“ — a) Position des Autors · b) Behauptung der Stadtverwaltung',
        '(2) „Die Geschäfte haben mehr Kundschaft“ — a) Position des Autors · b) Behauptung der Stadtverwaltung',
        '(3) „In den Nebenstraßen stehen die Autos dichter“ — a) Position des Autors · b) Behauptung der Stadtverwaltung',
      ],
      loesungLabel: 'Lösung',
      loesungen: [
        '{1} **b)** — *sei* zeigt: Der Autor gibt nur wieder, was die Verwaltung behauptet.',
        '{2} **b)** — *hätten* (Ausweichform im Plural) — ebenfalls wiedergegebene Behauptung.',
        '{3} **a)** — Indikativ (*stehen*): Das ist die eigene Beobachtung des Autors, sein Gegenargument.',
      ],
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Im **Lesen** (Kommentare, Meinungstexte) markiert der Konjunktiv I fremde Positionen — oft genau die, von denen sich der Autor distanziert. Unterstreiche *sei, habe, könne, laut, zufolge*: Danach kommt fast immer die Gegenposition mit Indikativ. Diese Technik löst viele Zuordnungsaufgaben.',
    },

    { type: 'rule' },

    // ── Abschluss ─────────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Zeit', 'Form (3. Person)', 'Beispiel'],
      zeilen: [
        ['Gegenwart', 'er sei · er habe · er könne', 'Er sagte, er sei krank.'],
        ['Vergangenheit', 'habe/sei + Partizip II', 'Er habe nichts gewusst.'],
        ['Zukunft', 'werde + Infinitiv', 'Man werde die Preise nicht erhöhen.'],
        ['K I = Indikativ', 'Ausweichen auf K II', 'Sie sagten, sie hätten nichts gehört.'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich erkenne *sei, habe, könne* in Texten als wiedergegebene Aussage — nicht als Meinung des Autors.',
        'Ich kann einfache Aussagen in der 3. Person indirekt wiedergeben.',
        'Ich weiß, warum in *sie hätten* der Konjunktiv II steht.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Vom Berichten zum Beschreiben von Vorgängen: Die nächste Lektion behandelt das **Passiv** — *wird gebaut* und *ist gebaut* — und klärt, wann das Deutsche Passiv benutzt, wo das Spanische „se“ sagt.',
    },
  ],
}
