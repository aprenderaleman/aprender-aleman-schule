// Lektion 25 · Hören Teil 2–3 — Interview & Diskussion
//
// Bloque 2 — Modul Hören. Respeta el canon de la Lektion 23:
// ca. 40 min, 4 Teile; detalles finos en genérico + Modellsatz.
// Práctica central: Interview-Transkript (~190 palabras) con selección.

export default {
  spec: ['Bloque 2', 'Modul Hören · Teil 2–3', 'Niveau B2', 'Prüfungsrelevanz: Hören'],
  h1: 'Hören Teil 2 & 3: Interview & Diskussion',
  lead: 'Mehrere Stimmen, echte Meinungen — oft vorsichtig verpackt. Hier lernst du, die Sprecher auseinanderzuhalten, nuancierte Standpunkte zu erkennen und die Frage „Wer sagt was?“ sicher zu beantworten.',

  content: [
    // ── Lernziele ─────────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'in Interview und Diskussion die Stimmen auseinanderhalten und Aussagen zuordnen',
        'abgeschwächte und indirekte Meinungen erkennen (*eigentlich, schon, na ja*)',
        'Paraphrasen durchschauen: die Aufgabe sagt es anders als der Text',
      ],
    },

    { type: 'rule' },

    // ── Kernwortschatz ────────────────────────────────────────────
    {
      type: 'wortschatz',
      eyebrow: 'Kernwortschatz — Gesprächsmarker & Meinung',
      items: [
        { wort: 'also', kollokation: '„Also, ich sehe das so: …“', es: 'pues, o sea (¡no „también“!)' },
        { wort: 'na ja', kollokation: '„Na ja, so einfach ist das nicht.“', es: 'bueno… (duda, matiz)' },
        { wort: 'ehrlich gesagt', kollokation: '„Ehrlich gesagt halte ich wenig davon.“', es: 'sinceramente' },
        { wort: 'eigentlich', kollokation: '„Eigentlich funktioniert das gut.“', es: 'en realidad, en el fondo' },
        { wort: 'schon', kollokation: '„Das stimmt schon, aber …“', es: 'sí que… (concesivo)' },
        { wort: 'allerdings', kollokation: '„Allerdings gibt es ein Problem.“', es: 'sin embargo, eso sí' },
        { wort: 'zustimmen', kollokation: 'da stimme ich Ihnen zu', es: 'estar de acuerdo' },
        { wort: 'widersprechen', kollokation: 'da muss ich widersprechen', es: 'contradecir, discrepar' },
        { wort: 'der Standpunkt, -e', kollokation: 'einen klaren Standpunkt vertreten', es: 'postura, punto de vista' },
        { wort: 'halten von', kollokation: 'viel / wenig von etwas halten', es: 'opinar (bien/mal) de algo' },
        { wort: 'die Anmoderation, -en', kollokation: 'die Gäste in der Anmoderation vorstellen', es: 'presentación inicial' },
      ],
      hinweis: '**also** significa „pues / o sea / por lo tanto“ — nunca „también“ (das heißt auf Deutsch *auch*). ~~Trampa doble para quien sabe inglés: el „also“ inglés tampoco tiene nada que ver.~~',
    },

    { type: 'rule' },

    // ── Erklärung ─────────────────────────────────────────────────
    {
      type: 'prose',
      eyebrow: 'Erklärung — zwei Formate, eine Kunst',
      absaetze: [
        'In **Teil 2** hörst du ein **Interview**: Ein Moderator fragt, ein Gast antwortet. Die Fragen sind deine Gliederung; die Aufgaben folgen in der Regel der **Reihenfolge des Gesprächs**. In **Teil 3** diskutieren **mehrere Personen** mit verschiedenen Positionen; die klassische Aufgabe heißt „**Wer sagt was?**“.',
      ],
    },
    {
      type: 'steps',
      eyebrow: 'Erklärung — Wer sagt was? Die Stimmen verankern',
      steps: [
        {
          titel: 'Anmoderation nutzen',
          text: 'Am Anfang werden die Personen **vorgestellt**: Name + Rolle. Notiere sofort Kürzel, z. B. __M = Moderator, K = Frau Kaya, B = Herr Braun__.',
        },
        {
          titel: 'Stimmen an Merkmalen festmachen',
          text: 'Männlich/weiblich, ruhig/energisch — und die Funktion: __Wer fragt, ist der Moderator__; seine Sätze sind selten die gesuchte Aussage.',
        },
        {
          titel: 'Das Satzende zählt',
          text: 'Diskussionen leben von „__Ja, aber …__“: erst Zustimmung, dann die eigentliche Meinung. Die Position steht meist **nach dem aber**.',
        },
      ],
    },
    {
      type: 'prose',
      eyebrow: 'Erklärung — nuancierte Meinungen & Paraphrasen',
      card: true,
      titel: 'Was wirklich gemeint ist',
      absaetze: [
        'Sprecher sagen selten platt „Das ist falsch“. Sie **schwächen ab**: *„Das stimmt schon, aber …“* ist ein höflicher **Widerspruch**; *„Ich weiß nicht, ob …“* ist **Skepsis**; *„na ja“* kündigt fast immer einen **Einwand** an. Und die Aufgaben **paraphrasieren**: Du hörst *„Ohne Auto komme ich hier nicht zur Arbeit“* — die Aufgabe schreibt *„X hält das Auto für unverzichtbar“*. Suche die **Bedeutung**, nicht das Wort.',
      ],
    },

    { type: 'rule' },

    // ── Beispiele ─────────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele — Gesprächsmarker',
      kicker: 'Marker',
      titel: 'Kleine Wörter, große Signale',
      items: [
        { text: '„**Also**, ich fasse mal zusammen: …“', gl: '— estructura o conclusión, no „también“' },
        { text: '„**Na ja**, ganz so einfach ist es leider nicht.“', gl: '— viene un pero' },
        { text: '„**Eigentlich** wollte ich absagen — aber dann kam alles anders.“', gl: '— plan original + contraste' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'Meinung',
      titel: 'Zustimmen und widersprechen — mit Nuance',
      items: [
        { text: '„Das stimmt **schon**, **aber** in der Praxis sieht es anders aus.“', gl: '— cortesía + discrepancia real' },
        { text: '„**Da ist was dran** — trotzdem bin ich dagegen.“' },
        { text: '„Das sehe ich **ein bisschen anders**.“', gl: '— suave en la forma, firme en el fondo' },
      ],
    },

    { type: 'rule' },

    // ── Übungen ───────────────────────────────────────────────────
    {
      type: 'uebung',
      eyebrow: 'Anwendung — Übung 1 · Erkennen',
      frage: 'Was signalisiert der Sprecher wirklich: Zustimmung, Widerspruch oder Skepsis?',
      loesungLabel: 'Lösung',
      aufgaben: [
        '„Na ja, ich weiß nicht, ob das die Lösung ist.“',
        '„Das stimmt schon, aber die Kosten wären enorm.“',
        '„Ehrlich gesagt halte ich wenig von dem Vorschlag.“',
      ],
      loesungen: [
        '**Skepsis** — „na ja“ + „ich weiß nicht, ob“ = Zweifel, höflich verpackt.',
        '**Widerspruch** — die Zustimmung ist nur Höflichkeit; die Meinung steht nach dem *aber*.',
        '**Ablehnung** — offen und direkt (*wenig halten von*).',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 2 · Anwenden — Wer sagt was?',
      frage: 'Lies die Mini-Diskussion **einmal** in normalem Tempo ~~(en el examen: audio)~~ und ordne die Aussagen zu: **Frau Kaya** oder **Herr Braun**?\n\n**Transkript — Diskussion:** „*Moderator:* Frau Kaya, Herr Braun — soll unsere Innenstadt autofrei werden? — *Frau Kaya:* Unbedingt. Für mich ist die Luftqualität das wichtigste Argument: weniger Autos, weniger Abgase — davon profitieren alle. — *Herr Braun:* Das stimmt schon, aber denken Sie an den Einzelhandel. Wenn die Kunden nicht mehr mit dem Auto kommen können, kaufen sie im Internet — und die Geschäfte verlieren. — *Frau Kaya:* Dafür gibt es doch Parkhäuser am Rand. — *Herr Braun:* Na ja. Vielleicht wäre ein Kompromiss besser: autofreie Wochenenden — und unter der Woche bleibt alles offen.“',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Diese Person hält die Luftqualität für das wichtigste Argument.',
        'Diese Person befürchtet Nachteile für die Geschäfte.',
        'Diese Person schlägt einen Kompromiss vor.',
      ],
      loesungen: [
        '**Frau Kaya** — „Für mich ist die Luftqualität das wichtigste Argument.“',
        '**Herr Braun** — „… und die Geschäfte verlieren.“ Sein „Das stimmt schon“ ist **keine** Zustimmung.',
        '**Herr Braun** — „Vielleicht wäre ein Kompromiss besser …“',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 3 · Produzieren — nuanciert widersprechen',
      frage: 'Jemand sagt: „Homeoffice sollte für alle Pflicht sein.“ Formuliere einen höflichen, nuancierten Widerspruch in 2-3 Sätzen. Benutze mindestens zwei Marker aus dieser Lektion (*das stimmt schon, aber / ehrlich gesagt / na ja / allerdings*).',
      loesung: '**Mögliche Lösung:** „Das stimmt schon, Homeoffice hat viele Vorteile. Ehrlich gesagt halte ich eine Pflicht aber für falsch — nicht jeder kann zu Hause konzentriert arbeiten.“ — Gültig ist jede Variante mit höflicher Teilzustimmung, klarem Einwand nach *aber/allerdings* und korrekter Verbstellung. Das trainiert zugleich das Modul Sprechen.',
    },

    { type: 'rule' },

    // ── Prüfungsbezug ─────────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Modul Hören · Teil 2 (Trainingsformat)',
      titel: 'Interview: Arbeiten im Homeoffice',
      anweisung: 'Lies zuerst die drei Aufgaben, dann das Transkript **einmal** in normalem Tempo ~~(en el examen: audio)~~. Wähle die richtige Lösung.',
      absaetze: [
        '„*Moderator:* Frau Vogel, Sie beraten Firmen beim Thema Homeoffice. Man hört ja sehr Unterschiedliches: Arbeiten wir zu Hause nun produktiver oder nicht? — *Frau Vogel:* Na ja, so pauschal kann man das nicht sagen. Es gibt Menschen, die zu Hause konzentrierter arbeiten, weil das Großraumbüro sie stört. Andere brauchen die feste Struktur. Die Produktivität hängt also weniger vom Ort ab als von der Person.',
        '*Moderator:* Und die Teamarbeit? Viele Chefs klagen, dass der Austausch fehlt. — *Frau Vogel:* Das stimmt schon — aber nicht so, wie man denkt. Besprechungen funktionieren per Video eigentlich gut. Was wirklich fehlt, sind die informellen Gespräche: die kurze Frage an der Kaffeemaschine, die spontane Idee auf dem Flur. Genau daraus entstehen oft die besten Lösungen.',
        '*Moderator:* Was empfehlen Sie den Firmen konkret? — *Frau Vogel:* Ehrlich gesagt halte ich wenig von Extremen. Wer alle zurück ins Büro zwingt, verliert gute Leute; wer das Büro ganz abschafft, verliert das Team. Ich empfehle eine Mischung: feste gemeinsame Tage im Büro — und flexible Tage zu Hause.“',
      ],
      optionen: [
        '(1) Frau Vogel meint: Im Homeoffice … a) arbeiten alle produktiver · b) hängt die Produktivität von der Person ab · c) sinkt die Produktivität',
        '(2) Bei der Teamarbeit fehlen laut Frau Vogel vor allem … a) die Videokonferenzen · b) die informellen Gespräche · c) die festen Besprechungen',
        '(3) Den Firmen empfiehlt sie … a) die Rückkehr aller ins Büro · b) eine Mischung aus Büro und Homeoffice · c) die Abschaffung des Büros',
      ],
      loesungLabel: 'Lösung',
      loesungen: [
        '(1) **b)** — „Die Produktivität hängt also weniger vom Ort ab als von der Person.“ Das „na ja“ kündigt die differenzierte Antwort an.',
        '(2) **b)** — „Was wirklich fehlt, sind die informellen Gespräche.“ Das „stimmt schon — aber“ korrigiert die Chefs, statt zuzustimmen.',
        '(3) **b)** — „Ich empfehle eine Mischung.“ a) und c) nennt sie nur als abgelehnte Extreme.',
      ],
      kommentar: 'Alle drei Lösungen stehen **nach** einem Marker (*na ja / das stimmt schon, aber / ehrlich gesagt*). Wer die Marker kennt, weiß, wo die Antwort beginnt.',
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Bei „Wer sagt was?“ verführen die Aufgaben mit Wörtern, die **eine andere Person** benutzt hat. Verankere die Stimmen in der Anmoderation (Kürzel notieren!) und entscheide erst am **Satzende** — die echte Meinung kommt fast immer nach dem *aber*.',
    },

    { type: 'rule' },

    // ── Abschluss ─────────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Signal', 'Bedeutung im Gespräch'],
      zeilen: [
        ['also', 'strukturiert, fasst zusammen — nie „también“'],
        ['na ja', 'Zweifel oder Einwand kommt'],
        ['das stimmt schon, aber …', 'höflicher Widerspruch — Meinung nach dem aber'],
        ['ehrlich gesagt', 'jetzt kommt die offene Meinung'],
        ['Wer fragt …', '… ist der Moderator — selten die gesuchte Aussage'],
        ['Aufgabe ≠ Wortlaut', 'Aufgaben paraphrasieren: Bedeutung suchen, nicht Wörter'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich verankere die Sprecher in der Anmoderation und notiere Kürzel.',
        'Ich erkenne an *na ja, schon, eigentlich, ehrlich gesagt*, was wirklich gemeint ist.',
        'Ich entscheide erst am Satzende — die Position steht meist nach dem *aber*.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Vom Dialog zum Monolog: In der nächsten Lektion kommt **Teil 4, der Vortrag** — eine einzige Stimme, dafür lang und dicht. Deine Werkzeuge dort: **Signalwörter der Struktur** (*zunächst, außerdem, abschließend*) und der rote Faden der Argumentation. Danach ziehen wir die Bilanz des ganzen Moduls.',
    },
  ],
}
