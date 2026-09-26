// Lektion 32 · Sprechen Teil 2 — Präsentation
//
// Bloque 2 · Modul Sprechen. Präsentation von ca. 3 Minuten über ein
// Alltagsthema, Gerüst in 5 Schritten (Einleitung → Erfahrungen →
// Heimatland Pro/Contra → Meinung → Schluss), Redemittel pro Schritt,
// kommentierter Modellvortrag, Vorbereitung von 2 Themen.

export default {
  spec: ['Bloque 2', 'Prüfungsstrategie', 'Niveau B1', 'Prüfungsrelevanz: Sprechen'],
  h1: 'Sprechen Teil 2 — Präsentation',
  lead: 'Drei Minuten über ein Alltagsthema — mit einem festen Gerüst aus **fünf Schritten**. ~~No improvises la estructura: llévala aprendida de casa.~~',

  content: [
    // ── Lernziele ─────────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'die Präsentation mit dem 5-Schritte-Gerüst aufbauen',
        'für jeden Schritt feste Redemittel benutzen',
        'zu Hause zwei Themen komplett vorbereiten',
      ],
    },

    { type: 'rule' },

    // ── Kernwortschatz ────────────────────────────────────────────
    {
      type: 'wortschatz',
      eyebrow: 'Kernwortschatz',
      items: [
        { wort: 'das Thema, Themen', kollokation: 'ein Thema vorstellen', es: 'tema' },
        { wort: 'die Einleitung', kollokation: 'mit der Einleitung beginnen', es: 'introducción' },
        { wort: 'die Erfahrung, -en', kollokation: 'gute Erfahrungen machen', es: 'experiencia' },
        { wort: 'das Heimatland', kollokation: 'in meinem Heimatland', es: 'país de origen' },
        { wort: 'der Vorteil, -e', kollokation: 'Ein Vorteil ist, dass …', es: 'ventaja' },
        { wort: 'der Nachteil, -e', kollokation: 'Ein Nachteil ist, dass …', es: 'desventaja, inconveniente' },
        { wort: 'die Meinung', kollokation: 'meiner Meinung nach', es: 'opinión' },
        { wort: 'der Schluss', kollokation: 'zum Schluss', es: 'final, conclusión' },
        { wort: 'die Folie, -n', kollokation: 'Auf der Folie steht das Thema.', es: 'diapositiva' },
        { wort: 'vorbereiten', kollokation: 'zwei Themen vorbereiten', es: 'preparar' },
        { wort: 'zuhören', kollokation: 'Danke fürs Zuhören!', es: 'escuchar (con atención)' },
      ],
    },

    { type: 'rule' },

    // ── Erklärung ─────────────────────────────────────────────────
    {
      type: 'steps',
      eyebrow: 'Erklärung — das Gerüst in fünf Schritten',
      steps: [
        {
          titel: 'Einleitung',
          text: 'Nenn dein Thema in einem Satz: __„Ich möchte heute über das Thema … sprechen.“__',
        },
        {
          titel: 'Meine Erfahrungen',
          text: 'Erzähl persönlich: Was machst du? Seit wann? Ein **konkretes Beispiel** wirkt besser als Theorie.',
        },
        {
          titel: 'Situation in meinem Heimatland: Pro & Contra',
          text: 'Beschreib, wie es in deinem Heimatland ist, und nenn **einen Vorteil und einen Nachteil**. ~~La fórmula mínima: situación + una ventaja + un inconveniente.~~',
        },
        {
          titel: 'Meine Meinung',
          text: '__„Meiner Meinung nach ist …“__ — ein bis zwei Sätze reichen.',
        },
        {
          titel: 'Schluss',
          text: 'Signalisier klar das Ende und bedank dich: __„Das war meine Präsentation. Danke fürs Zuhören!“__ Danach kommen die Fragen (Teil 3).',
        },
      ],
    },
    {
      type: 'prose',
      card: true,
      absaetze: [
        '**Achtung, typischer Fehler:** Nach *Meiner Meinung nach* kommt **sofort das Verb**: „Meiner Meinung nach **ist** Onlineshopping praktisch.“ ~~Calco del español «En mi opinión, esto es…»: no pongas coma ni sujeto primero — *Meiner Meinung nach, das ist…* es el error clásico.~~',
        'Drei Minuten sind kürzer, als du denkst: ca. **30–40 Sekunden pro Schritt** reichen. Im offiziellen Modellsatz siehst du die Schritte auf Folien vorgegeben — du musst sie nur **füllen** können.',
      ],
    },

    { type: 'rule' },

    // ── Beispiele / Redemittel + Modell ───────────────────────────
    {
      type: 'redemittel',
      eyebrow: 'Beispiele — Redemittel pro Schritt',
      gruppen: [
        {
          fn: 'Schritt 1 · Einleitung',
          saetze: [
            { satz: 'Ich möchte heute über das Thema „…“ sprechen.' },
            { satz: 'Mein Thema ist: … Das finde ich interessant, weil …' },
          ],
        },
        {
          fn: 'Schritt 2 · Erfahrungen',
          saetze: [
            { satz: 'Ich habe damit gute/schlechte Erfahrungen gemacht.' },
            { satz: 'Zum Beispiel …', gloss: '~~un mini-ejemplo da vida a la presentación~~' },
          ],
        },
        {
          fn: 'Schritt 3 · Heimatland + Pro/Contra',
          saetze: [
            { satz: 'In meinem Heimatland ist das so: …' },
            { satz: 'Ein Vorteil ist, dass …' },
            { satz: 'Ein Nachteil ist, dass …' },
          ],
        },
        {
          fn: 'Schritt 4 · Meinung',
          saetze: [
            { satz: 'Meiner Meinung nach ist/sind …' },
          ],
        },
        {
          fn: 'Schritt 5 · Schluss',
          saetze: [
            { satz: 'Das war meine Präsentation. Danke fürs Zuhören!' },
          ],
        },
      ],
    },
    {
      type: 'modell',
      eyebrow: 'Beispiele — Modellvortrag',
      thema: '„Einkaufen im Internet“ — Präsentation in fünf Schritten',
      woerter: 'ca. 3 Minuten',
      absaetze: [
        'Ich möchte heute über das Thema „Einkaufen im Internet“ sprechen. Das Thema finde ich interessant, weil ich selbst oft online einkaufe.',
        'Ich habe damit gute Erfahrungen gemacht. Ich bestelle zum Beispiel Bücher und Kleidung im Internet, meistens abends auf dem Sofa. Letzte Woche habe ich Schuhe bestellt — sie waren nach zwei Tagen da.',
        'In meinem Heimatland kaufen auch immer mehr Menschen online ein. Ein Vorteil ist, dass es oft billiger ist und man rund um die Uhr einkaufen kann. Ein Nachteil ist, dass viele kleine Geschäfte Probleme bekommen. Und manchmal passt die Kleidung nicht — dann muss man alles zurückschicken.',
        'Meiner Meinung nach ist Einkaufen im Internet sehr praktisch, aber wir sollten auch die Geschäfte in unserer Stadt unterstützen. Ich versuche, beides zu machen.',
        'Zum Schluss möchte ich sagen: Onlineshopping gehört heute zum Alltag — man muss es nur richtig benutzen. Das war meine Präsentation. Danke fürs Zuhören!',
      ],
      annotationen: [
        { tag: 'Schritt 1', text: 'Thema + **ein** Satz, warum es dich interessiert. Nicht mehr.' },
        { tag: 'Schritt 2', text: 'Das Mini-Beispiel („Schuhe, nach zwei Tagen da“) bringt Leben in den Vortrag.' },
        { tag: 'Schritt 3', text: 'Die Formel: Situation + **ein Vorteil** + **ein Nachteil**.' },
        { tag: 'Schritt 4 + 5', text: '„Meiner Meinung nach **ist** …“ — Verb sofort. Der Schluss signalisiert klar das Ende.' },
      ],
    },

    { type: 'rule' },

    // ── Mehr Beispiele ────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Mehr Beispiele',
      titel: 'Ein Satz für jeden Schritt',
      items: [
        { text: 'Ich möchte heute über das **Thema** „Reisen mit dem Zug“ sprechen.', gl: '— Schritt 1: Einleitung' },
        { text: 'Mit Sprach-Apps habe ich gute **Erfahrungen** gemacht.', gl: '— Schritt 2: eigene Erfahrung' },
        { text: 'In meinem **Heimatland** fahren viele Menschen mit dem Auto zur Arbeit.', gl: '— Schritt 3: Situation' },
        { text: 'Ein **Vorteil** ist, dass man flexibel ist. Ein **Nachteil** ist, dass es oft Stau gibt.', gl: '— Schritt 3: Pro & Contra, Verb am Ende' },
        { text: '**Meiner Meinung nach** ist der Zug die beste Lösung.', gl: '— Schritt 4: Verb sofort' },
        { text: 'Das war meine Präsentation. Danke fürs **Zuhören**!', gl: '— Schritt 5: Schluss' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'Vorbereitung',
      titel: 'So bereitest du dich vor',
      items: [
        { text: 'Ich **bereite** zu Hause zwei Themen **vor**.', gl: '— nicht erst in der Prüfung' },
        { text: 'Auf der ersten **Folie** steht nur der Titel.', gl: '— kurz und klar' },
        { text: 'Nach der **Einleitung** erzähle ich ein kurzes Beispiel aus meinem Alltag.', gl: '— das macht den Vortrag lebendig' },
        { text: 'Zum **Schluss** sage ich meine **Meinung** noch einmal in einem Satz.', gl: '— ein klares Ende' },
      ],
    },

    { type: 'rule' },

    // ── Modell: Stichwortplan ─────────────────────────────────────
    {
      type: 'modell',
      eyebrow: 'Modell — ein Stichwortplan',
      thema: 'Thema „Fast Food“ — eine Zeile pro Schritt ~~(solo palabras clave, sin frases completas)~~',
      absaetze: [
        '**1 Einleitung:** Thema Fast Food',
        '**2 Erfahrungen:** freitags Pizza mit Freunden',
        '**3 Heimatland + Pro/Contra:** viele Burger-Restaurants; Vorteil: schnell und billig; Nachteil: ungesund',
        '**4 Meinung:** okay, aber nicht jeden Tag',
        '**5 Schluss:** Danke fürs Zuhören!',
      ],
    },

    { type: 'rule' },

    // ── Prüfungsbezug ─────────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Sprechen · Teil 2',
      titel: 'Präsentation vorbereiten',
      anweisung: 'So sieht die Aufgabe im Examen aus. Bereite die Präsentation mit dem 5-Schritte-Gerüst vor:',
      absaetze: [
        '**Thema:** „Immer erreichbar — das Handy im Alltag“\nStell dein Thema vor. Berichte von deinen Erfahrungen, beschreib die Situation in deinem Heimatland mit Vor- und Nachteilen und sag am Ende deine Meinung.',
      ],
      loesungLabel: 'Mögliche Lösung (Stichwortplan)',
      loesungen: [
        '**1 Einleitung:** Thema Handy im Alltag — benutze es jeden Tag.',
        '**2 Erfahrung:** morgens Nachrichten, in der U-Bahn Musik, abends Videos — ca. drei Stunden pro Tag.',
        '**3 Heimatland + Pro/Contra:** fast alle haben ein Smartphone; Vorteil: immer Kontakt mit Familie und Freunden; Nachteil: man ist nie richtig frei.',
        '**4 Meinung:** Meiner Meinung nach ist das Handy sehr praktisch, aber wir brauchen auch Pausen.',
        '**5 Schluss:** Das war meine Präsentation. Danke fürs Zuhören!',
      ],
      kommentar: 'Sprich jeden Punkt in zwei bis drei Sätzen aus — dann bist du bei ca. drei Minuten.',
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Lern **keine Sätze auswendig** — lern das Gerüst und die Redemittel. Auswendig gelernte Texte klingen unnatürlich, und wenn ein Wort fehlt, blockierst du. Üb stattdessen **laut und mit der Uhr**.',
    },

    { type: 'rule' },

    // ── Abschluss ─────────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Schritt', 'Redemittel'],
      zeilen: [
        ['1 · Einleitung', 'Ich möchte über das Thema „…“ sprechen.'],
        ['2 · Erfahrungen', 'Ich habe gute Erfahrungen gemacht. Zum Beispiel …'],
        ['3 · Heimatland ±', 'Ein Vorteil ist, dass … · Ein Nachteil ist, dass …'],
        ['4 · Meinung', 'Meiner Meinung nach ist …'],
        ['5 · Schluss', 'Das war meine Präsentation. Danke fürs Zuhören!'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich baue meine Präsentation mit den fünf Schritten auf.',
        'Ich habe für jeden Schritt ein Redemittel parat.',
        'Nach „Meiner Meinung nach“ setze ich das Verb sofort.',
        'Ich habe zwei Themen mit Stichwortplan vorbereitet und laut geübt.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Deine Präsentation ist fertig — aber das Modul noch nicht: Danach reagiert dein Partner auf dich, und du auf ihn. **Feedback geben und Fragen stellen** ist Teil 3 — das Thema der nächsten Lektion, mit der du das Modul Sprechen komplett hast.',
    },
  ],
}
