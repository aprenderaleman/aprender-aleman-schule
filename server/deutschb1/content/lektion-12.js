// Lektion 12 · Relativsätze
//
// Bloque 1 · Grammatik & Struktur — sigue el estándar de lektion-08.js:
// 8 secciones (FORMAT.md), nivel B1, máximo apoyo en español.

export default {
  spec: ['Bloque 1', 'Grammatik & Struktur', 'Niveau B1', 'Prüfungsrelevanz: alle Module'],
  h1: 'Relativsätze',
  lead: 'Ein Nebensatz, **der** ein Nomen genauer beschreibt: Der Mann, **der** dort steht, ist mein Chef. ~~Como «que» en español — pero con coma obligatoria y el verbo al final.~~',

  content: [
    // ── Lernziele ─────────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'Relativsätze mit *der/die/das* im Nominativ, Akkusativ und Dativ bilden',
        'die zwei festen Regeln anwenden: Komma + Verb am Ende',
        '**wo** für Orte verwenden',
      ],
    },

    { type: 'rule' },

    // ── Kernwortschatz ────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Kernwortschatz — die Relativpronomen',
      kopf: ['', 'maskulin', 'feminin', 'neutral', 'Plural'],
      zeilen: [
        ['Nominativ', 'der', 'die', 'das', 'die'],
        ['Akkusativ', 'den', 'die', 'das', 'die'],
        ['Dativ', 'dem', 'der', 'dem', '**denen**'],
      ],
    },
    {
      type: 'beispiele',
      items: [
        { text: 'Fast wie der bestimmte Artikel — nur **denen** (Dativ Plural) ist neu.', gl: '~~Solo una forma que memorizar de verdad: denen.~~' },
      ],
    },

    { type: 'rule' },

    // ── Erklärung ─────────────────────────────────────────────────
    {
      type: 'steps',
      eyebrow: 'Erklärung — in drei Schritten',
      steps: [
        {
          badge: 'Genus',
          titel: 'Vom Nomen davor',
          text: 'Genus und Numerus kommen __vom Nomen__, das du beschreibst:\n__**der** Mann, der … · **die** Frau, die … · **die** Leute, die …__',
        },
        {
          badge: 'Kasus',
          titel: 'Aus dem Relativsatz',
          text: 'Der Kasus kommt aus der __Rolle im Relativsatz__: Subjekt → Nominativ, Akkusativobjekt → Akkusativ, Dativobjekt → Dativ. ~~En español «que» sirve para todo; en alemán el pronombre cambia según su función.~~\n__der Mann, **den** ich sehe__ ~~(yo veo A él → Akk.)~~',
        },
        {
          badge: 'Komma + Verb',
          titel: 'Die zwei festen Regeln',
          text: '__Komma__ immer vor dem Relativsatz, __Verb ans Ende__:\n__Der Mann, der dort **steht**, ist mein Chef.__ ~~En español la coma no siempre va; en alemán SIEMPRE.~~',
        },
      ],
    },
    {
      type: 'prose',
      card: true,
      absaetze: [
        '**wo für Orte:** Das ist die Stadt, **wo** ich geboren bin. ~~Para lugares, «wo» es la opción fácil y correcta en B1.~~ Auch bei Cafés, Schulen, Ländern: *das Café, wo wir uns getroffen haben*.',
      ],
    },

    { type: 'rule' },

    // ── Beispiele ─────────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele',
      kicker: 'Nominativ & Akkusativ',
      items: [
        { text: 'Der Mann, **der** neben mir wohnt, ist sehr nett.', gl: '— Subjekt → Nom.' },
        { text: 'Das Kind, **das** dort spielt, ist meine Tochter.', gl: '— Subjekt → Nom.' },
        { text: 'Der Film, **den** wir gestern gesehen haben, war super.', gl: '— Objekt → Akk.' },
        { text: 'Die Pizza, **die** du bestellt hast, kommt gleich.', gl: '— Objekt → Akk.' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'Dativ & wo',
      items: [
        { text: 'Der Freund, **dem** ich geholfen habe, wohnt in Köln.', gl: '— helfen + Dat.' },
        { text: 'Die Leute, **denen** ich schreibe, antworten schnell.', gl: '— Dat. Plural → denen!' },
        { text: 'Das Café, **wo** wir uns getroffen haben, hat jetzt zu.', gl: '— Ort → wo' },
      ],
    },

    { type: 'rule' },

    // ── Übungen ───────────────────────────────────────────────────
    {
      type: 'uebung',
      eyebrow: 'Anwendung — Übung 1 · Erkennen',
      frage: 'Welcher Kasus — und warum?',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Die Frau, die dort arbeitet, ist meine Nachbarin.',
        'Das Buch, das ich gerade lese, ist spannend.',
        'Der Mann, dem das Auto gehört, ist nicht da.',
      ],
      loesungen: [
        '**Nominativ** — *die* ist Subjekt ~~(ella trabaja)~~',
        '**Akkusativ** — *das* ist Objekt ~~(yo leo el libro)~~',
        '**Dativ** — *gehören* + Dat. ~~(el coche le pertenece A él)~~',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 2 · Pronomen einsetzen',
      frage: 'der, den, denen oder wo?',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Das ist der Lehrer, ___ sehr gut erklärt.',
        'Wie heißt der Film, ___ du mir empfohlen hast?',
        'Das sind die Nachbarn, ___ ich oft helfe.',
        'Das ist das Restaurant, ___ wir immer essen.',
      ],
      loesungen: [
        '**der** — Subjekt → Nominativ maskulin',
        '**den** — Objekt → Akkusativ maskulin',
        '**denen** — helfen + Dat., Plural',
        '**wo** — Ort ~~(= in dem)~~',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 3 · Sätze verbinden',
      frage: 'Mach aus zwei Sätzen einen — mit Relativsatz.',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Ich habe einen Kuchen gebacken. **Er** schmeckt sehr gut.',
        'Das ist meine Kollegin. Ich mag **sie** sehr.',
      ],
      loesungen: [
        'Ich habe einen Kuchen gebacken, **der** sehr gut schmeckt. ~~(er = Subjekt → der; verbo al final)~~',
        'Das ist meine Kollegin, **die** ich sehr mag. ~~(sie = Objekt → die, Akk. fem.)~~',
      ],
    },

    { type: 'rule' },

    // ── Prüfungsbezug ─────────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Schreiben Teil 1 · informelle E-Mail',
      titel: '2 Lücken',
      anweisung: 'Relativsätze machen deine E-Mail persönlicher. Ergänze:',
      absaetze: [
        '„Danke für das Buch, {1} du mir geschenkt hast! Kennst du noch das Café, {2} wir letzten Sommer waren?“',
      ],
      optionen: ['(1) das Buch → Objekt', '(2) das Café → Ort'],
      loesungLabel: 'Lösung',
      loesungen: [
        '{1} **das** — Akkusativ neutral: du hast **das Buch** geschenkt.',
        '{2} **wo** — Ort ~~(= in dem)~~: wir waren **im Café**.',
      ],
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Beim **Sprechen Teil 2 (Präsentation)** ist ein Relativsatz der perfekte Einstieg: *„Ich spreche heute über ein Thema, **das** mich sehr interessiert.“* Ein Satz, den du auswendig lernen kannst — und der sofort B1-Niveau zeigt.',
    },

    { type: 'rule' },

    // ── Abschluss ─────────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Frage', 'Antwort'],
      zeilen: [
        ['Genus & Numerus?', 'vom Nomen davor (der Mann → der/den/dem)'],
        ['Kasus?', 'aus der Rolle im Relativsatz (Subjekt/Objekt)'],
        ['Formen?', 'wie der Artikel — Ausnahme: **denen** (Dat. Pl.)'],
        ['Immer?', '**Komma** + **Verb am Ende**'],
        ['Orte?', '**wo** (= in dem / in der)'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich bilde Relativsätze mit der/die/das im Nominativ, Akkusativ und Dativ.',
        'Ich setze immer ein Komma und stelle das Verb ans Ende.',
        'Ich benutze wo für Orte.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Es gibt auch Relativpronomen im Genitiv (*dessen/deren*) — das ist B2-Stoff, den du hier nur zu erkennen brauchst. Mit Relativsätzen kannst du jetzt Nomen präzise beschreiben. In der nächsten Lektion lernst du, höflich zu klingen: der **Konjunktiv II** — *Könnten Sie …?, Ich hätte gern …* — für höfliche Bitten und Wünsche.',
    },
  ],
}
