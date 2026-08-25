// Lektion 15 · Plural der Nomen
//
// Bloque 1 · Grammatik & Struktur — los patrones frecuentes del plural,
// «no hay regla fiable → aprende el plural con la palabra», die para todos.

export default {
  spec: ['Bloque 1', 'Grammatik & Struktur', 'Niveau A1', 'Prüfungsrelevanz: Lesen · Schreiben'],
  h1: 'Plural der Nomen',
  lead: '~~Un libro, dos libros… en alemán no es tan fácil:~~ **ein Buch, zwei Bücher**. ~~Los patrones más frecuentes — y la regla de oro: aprende el plural con la palabra.~~',

  content: [
    // ── Lernziele ─────────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'die häufigsten Pluralmuster kennen (-e, -en, -er, -s, Umlaut)',
        'wissen: im Plural ist der Artikel immer *die*',
        'den Plural zusammen mit dem Wort lernen: *das Buch, die Bücher*',
      ],
    },

    { type: 'rule' },

    // ── Kernwortschatz ────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Kernwortschatz — die fünf Muster',
      kopf: ['Muster', 'Singular → Plural', 'Bedeutung'],
      zeilen: [
        ['**-e**', 'der Tisch → die Tisch**e** · der Stuhl → die St**ü**hl**e**', 'mesa(s) · silla(s)'],
        ['**-(e)n**', 'die Lampe → die Lampe**n** · die Frau → die Frau**en**', 'lámpara(s) · mujer(es)'],
        ['**-er**', 'das Kind → die Kind**er** · das Buch → die B**ü**ch**er**', 'niño(s) · libro(s)'],
        ['**-s**', 'das Auto → die Auto**s** · das Handy → die Handy**s**', 'coche(s) · móvil(es)'],
        ['**Umlaut**', 'der Apfel → die **Ä**pfel · der Bruder → die Br**ü**der', 'manzana(s) · hermano(s)'],
      ],
    },

    { type: 'rule' },

    // ── Erklärung ─────────────────────────────────────────────────
    {
      type: 'steps',
      eyebrow: 'Erklärung',
      steps: [
        {
          badge: 'keine Regel',
          titel: 'Es gibt keine sichere Regel',
          text: 'Welches Muster ein Wort nimmt, __kann man nicht sicher wissen__. Darum: lerne jedes Wort so: __das Buch, die Bücher__. ~~(no hay regla fiable — memoriza el plural junto con la palabra y su artículo)~~',
        },
        {
          badge: 'immer die',
          titel: 'Im Plural: immer die',
          text: 'Der, die oder das — egal: __im Plural ist der Artikel immer *die*__. *der Tisch → **die** Tische · das Kind → **die** Kinder.* ~~(die para TODOS los plurales)~~',
        },
        {
          badge: 'Tendenzen',
          titel: 'Zwei kleine Hilfen',
          text: 'Wörter auf __-e__ nehmen fast immer __-n__ (*die Lampe → die Lampen*). Internationale Wörter nehmen oft __-s__ (*das Auto → die Autos*). ~~(dos tendencias útiles, no reglas absolutas)~~',
        },
      ],
    },

    { type: 'rule' },

    // ── Beispiele ─────────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele',
      items: [
        { text: 'Ich habe zwei **Brüder** und drei **Schwestern**.', gl: '— Tengo dos hermanos y tres hermanas.' },
        { text: 'Die **Kinder** spielen im Park.', gl: '— Los niños juegan en el parque.' },
        { text: 'Wir kaufen vier **Stühle** und einen Tisch.', gl: '— Compramos cuatro sillas y una mesa.' },
        { text: 'Die **Äpfel** kosten 2 Euro.', gl: '— Las manzanas cuestan 2 euros.' },
        { text: 'Zwei **Kaffees**, bitte!', gl: '— ¡Dos cafés, por favor!' },
        { text: 'Die **Bücher** sind neu.', gl: '— Los libros son nuevos. (das Buch → die Bücher)' },
      ],
    },

    { type: 'rule' },

    // ── Übungen ───────────────────────────────────────────────────
    {
      type: 'uebung',
      eyebrow: 'Anwendung — Übung 1 · Plural erkennen',
      frage: 'Singular oder Plural? ~~(¿Singular o plural?)~~',
      loesungLabel: 'Lösung',
      aufgaben: [
        'die Bücher',
        'die Lampe',
        'die Kinder',
        'die Frau',
      ],
      loesungen: [
        'die Bücher — **Plural** ~~(das Buch → die Bücher)~~',
        'die Lampe — **Singular** ~~(el plural es „die Lampen“)~~',
        'die Kinder — **Plural** ~~(das Kind → die Kinder)~~',
        'die Frau — **Singular** ~~(el plural es „die Frauen“)~~',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 2 · Plural bilden',
      frage: 'Wie heißt der Plural? ~~(Escribe el plural con „die“.)~~',
      loesungLabel: 'Lösung',
      aufgaben: [
        'der Tisch → ___',
        'das Auto → ___',
        'der Apfel → ___',
        'die Frau → ___',
        'das Kind → ___',
      ],
      loesungen: [
        'der Tisch → **die Tische**',
        'das Auto → **die Autos**',
        'der Apfel → **die Äpfel**',
        'die Frau → **die Frauen**',
        'das Kind → **die Kinder**',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 3 · Deine Einkaufsliste',
      frage: 'Schreibe eine Einkaufsliste mit 3 Sachen im Plural. ~~(Escribe una lista de la compra con 3 cosas en plural.)~~',
      loesungLabel: 'Muster',
      loesung: '*Ich kaufe: sechs Äpfel, zwei Lampen und drei Bücher.* ~~Vale cualquier lista — lo importante: los plurales correctos.~~',
    },

    { type: 'rule' },

    // ── Prüfungsbezug ─────────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Lesen · Anzeigen',
      titel: 'Eine Anzeige verstehen',
      anweisung: 'Im Lesen gibt es kurze Anzeigen. Lies die Anzeige und kreuze an: richtig oder falsch?',
      absaetze: [
        '„**Zu verkaufen:** 4 Stühle (40 €), 2 Lampen (15 €), 1 Tisch (50 €). Telefon: 030 – 55 12 78“',
        '{1} Die Anzeige verkauft vier Tische.',
      ],
      optionen: ['richtig', 'falsch'],
      loesungLabel: 'Lösung',
      loesungen: [
        '{1} **falsch** — sie verkauft vier **Stühle** und einen Tisch. ~~El plural te da la información clave: ¿cuántos y de qué?~~',
      ],
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Lerne jedes Nomen als **Trio**: Artikel + Wort + Plural — *das Buch, die Bücher*. ~~Anota siempre las tres cosas en tu vocabulario. En Lesen y Schreiben, confundir singular y plural es un fallo típico y evitable.~~',
    },

    { type: 'rule' },

    // ── Abschluss ─────────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Regel', 'Beispiel'],
      zeilen: [
        ['5 Muster: -e, -(e)n, -er, -s, Umlaut', 'Tische · Frauen · Kinder · Autos · Äpfel'],
        ['Plural-Artikel: immer **die**', 'der Tisch → **die** Tische'],
        ['Plural mit dem Wort lernen', '**das Buch, die Bücher**'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich kenne die fünf Pluralmuster (-e, -en, -er, -s, Umlaut).',
        'Ich weiß: im Plural ist der Artikel immer „die“.',
        'Ich lerne neue Wörter mit Artikel und Plural: „das Buch, die Bücher“.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Zwei Stühle, drei Lampen — für den Plural brauchst du **Zahlen**. In der nächsten Lektion lernst du die Zahlen bis 100, die **Uhrzeit** (*halb zehn!*) und das Datum — das Herzstück vom Hören. Damit ist der Grammatik-Block komplett.',
    },
  ],
}
