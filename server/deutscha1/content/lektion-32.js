// Lektion 32 · Essen & Einkaufen
//
// Bloque 3 (Themenfelder & Wortschatz): alimentos básicos, im Supermarkt,
// im Café, cantidades simples. Error clave: «tengo hambre» → Ich habe Hunger.

export default {
  spec: ['Bloque 3', 'Themenfelder & Wortschatz', 'Niveau A1', 'Prüfungsrelevanz: Sprechen · Lesen'],
  h1: 'Essen & Einkaufen',
  lead: '~~Comer y comprar: los alimentos básicos, el supermercado y el café —~~ **„Ich möchte einen Kaffee, bitte!“**',

  content: [
    // ── Lernziele ─────────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'Lebensmittel benennen: Brot, Milch, Käse …',
        'im Café bestellen: *Ich möchte … , bitte.*',
        'Mengen verstehen: ein Kilo, ein Liter, 100 Gramm',
      ],
    },

    { type: 'rule' },

    // ── Kernwortschatz ────────────────────────────────────────────
    {
      type: 'wortschatz',
      eyebrow: 'Kernwortschatz',
      items: [
        { wort: 'das Brot', kollokation: 'Brot kaufen', es: 'el pan' },
        { wort: 'das Wasser', kollokation: 'ein Wasser, bitte', es: 'el agua' },
        { wort: 'der Kaffee', kollokation: 'ein Kaffee mit Milch', es: 'el café' },
        { wort: 'die Milch', kollokation: 'ein Liter Milch', es: 'la leche' },
        { wort: 'der Apfel (die Äpfel)', kollokation: 'ein Kilo Äpfel', es: 'la manzana' },
        { wort: 'der Käse', kollokation: '100 Gramm Käse', es: 'el queso' },
        { wort: 'der Supermarkt', kollokation: 'im Supermarkt', es: 'el supermercado' },
        { wort: 'das Café', kollokation: 'Wir sind im Café.', es: 'la cafetería' },
        { wort: 'einkaufen', kollokation: 'Ich kaufe im Supermarkt ein.', es: 'hacer la compra' },
        { wort: 'der Hunger', kollokation: 'Ich habe Hunger.', es: 'el hambre' },
        { wort: 'der Durst', kollokation: 'Ich habe Durst.', es: 'la sed' },
        { wort: 'die Rechnung', kollokation: 'Die Rechnung, bitte!', es: 'la cuenta' },
      ],
      hinweis: '~~«Tengo hambre» =~~ Ich **habe** Hunger ~~— con *haben*, nunca con *sein*.~~',
    },

    { type: 'rule' },

    // ── Erklärung ─────────────────────────────────────────────────
    {
      type: 'prose',
      eyebrow: 'Erklärung',
      card: true,
      kicker: 'Situation 1',
      titel: 'Im Supermarkt — Mengen',
      absaetze: [
        '~~Las cantidades van directas, SIN „de“:~~ __ein Kilo Äpfel__ ~~(un kilo de manzanas)~~ · __ein Liter Milch__ · __100 Gramm Käse__ · __eine Flasche Wasser__ ~~(una botella de agua). Nunca digas~~ *~ein Kilo VON Äpfel~* ~~— ese „von“ es un calco del español.~~',
      ],
    },
    {
      type: 'prose',
      card: true,
      kicker: 'Situation 2',
      titel: 'Im Café bestellen',
      absaetze: [
        '~~Para pedir usa siempre~~ __Ich möchte … , bitte.__ ~~(quisiera…, la forma cortés):~~ *Ich möchte einen Kaffee, bitte.* ~~Luego:~~ __Was kostet das?__ ~~y al final:~~ __Die Rechnung, bitte!__ ~~o simplemente~~ __Zahlen, bitte!__ ~~(la cuenta, por favor).~~',
      ],
    },
    {
      type: 'prose',
      card: true,
      kicker: 'Achtung — Fehler',
      titel: 'Hunger und Durst — mit haben',
      absaetze: [
        '~~En alemán el hambre y la sed se TIENEN, como en español — pero sin artículo:~~ __Ich habe Hunger.__ · __Ich habe Durst.__ ~~El error típico es calcar «estoy hambriento» y decir~~ *~Ich bin Hunger~* ~~— incorrecto. Siempre con~~ **haben**.',
      ],
    },

    { type: 'rule' },

    // ── Beispiele ─────────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele',
      items: [
        { text: 'Ich **habe Hunger**. Ich esse ein Brot.', gl: '— Tengo hambre. Como un pan.' },
        { text: 'Ich **habe Durst**. Ich trinke Wasser.', gl: '— Tengo sed. Bebo agua.' },
        { text: 'Ich **möchte** einen Kaffee, **bitte**.', gl: '— Quisiera un café, por favor.' },
        { text: 'Ich kaufe **ein Kilo Äpfel** und **einen Liter Milch**.', gl: '— Compro un kilo de manzanas y un litro de leche. («einen»: der Liter en acusativo)' },
        { text: '**Was kostet** der Käse? — 2 Euro 80.', gl: '— ¿Cuánto cuesta el queso? — 2,80 €.' },
        { text: '**Die Rechnung, bitte!** — Das macht 7 Euro 50.', gl: '— ¡La cuenta, por favor! — Son 7,50 €.' },
      ],
    },
    {
      type: 'redemittel',
      eyebrow: 'Redemittel — Im Café & im Supermarkt',
      gruppen: [
        {
          fn: 'So bestellst und bezahlst du',
          saetze: [
            { satz: 'Ich möchte einen Kaffee, bitte.', gloss: 'Quisiera un café, por favor.' },
            { satz: 'Ein Wasser, bitte.', gloss: 'Un agua, por favor.' },
            { satz: 'Was kostet das?', gloss: '¿Cuánto cuesta?' },
            { satz: 'Die Rechnung, bitte! / Zahlen, bitte!', gloss: '¡La cuenta, por favor!' },
            { satz: 'Wo ist das Brot?', gloss: '¿Dónde está el pan? (en el súper)' },
          ],
        },
      ],
    },

    { type: 'rule' },

    // ── Übungen ───────────────────────────────────────────────────
    {
      type: 'uebung',
      eyebrow: 'Anwendung — Übung 1 · Wortschatz',
      frage: 'Wie heißt das auf Deutsch? ~~(Con artículo.)~~',
      loesungLabel: 'Lösung',
      aufgaben: [
        'el pan → ___',
        'la leche → ___',
        'el queso → ___',
        'la cuenta → ___',
      ],
      loesungen: [
        'el pan → **das Brot**',
        'la leche → **die Milch**',
        'el queso → **der Käse**',
        'la cuenta → **die Rechnung**',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 2 · Ergänzen',
      frage: 'Ergänze: Hunger · Durst · möchte · kostet.',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Ich habe ___ . Ich esse eine Pizza.',
        'Ich habe ___ . Ich trinke ein Wasser.',
        'Ich ___ einen Kaffee, bitte.',
        'Was ___ das Brot?',
      ],
      loesungen: [
        'Ich habe **Hunger**. Ich esse eine Pizza.',
        'Ich habe **Durst**. Ich trinke ein Wasser.',
        'Ich **möchte** einen Kaffee, bitte.',
        'Was **kostet** das Brot?',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 3 · Im Café',
      frage: 'Schreibe einen Mini-Dialog im Café (ca. 20-30 Wörter): bestellen, Preis, Rechnung. ~~(Pide algo, pregunta el precio, pide la cuenta.)~~',
      loesungLabel: 'Mögliche Lösung',
      loesung: '*— Guten Tag! Ich möchte einen Kaffee und ein Wasser, bitte.\n— Gern. Noch etwas?\n— Nein, danke. Was kostet das?\n— Das macht 5 Euro 20.\n— Die Rechnung, bitte!* ~~(Vale cualquier diálogo con „Ich möchte …, bitte“ + una pregunta de precio.)~~',
    },

    { type: 'rule' },

    // ── Prüfungsbezug ─────────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Sprechen · Teil 3',
      titel: 'Bitten formulieren',
      anweisung: 'Im Sprechen Teil 3 bekommst du Bildkarten und formulierst eine Bitte. Ergänze. ~~(Con tarjetas de imagen formulas un ruego o petición.)~~',
      absaetze: [
        'Bildkarte „Wasser“: „{1} Sie mir bitte ein Wasser.“',
        'Bildkarte „Brot“: „Ich {2} ein Brot, bitte.“',
      ],
      loesungLabel: 'Lösung',
      loesungen: [
        '{1} **Geben** Sie mir bitte ein Wasser. ~~(deme, por favor…)~~',
        '{2} Ich **möchte** ein Brot, bitte.',
      ],
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Im Sprechen Teil 3 reicht eine **einfache Bitte mit „bitte“**: *Ein Wasser, bitte!* ~~No necesitas frases complicadas: algo corto + „bitte“ ya es una petición correcta y puntúa.~~',
    },

    { type: 'rule' },

    // ── Abschluss ─────────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Situation', 'Satz'],
      zeilen: [
        ['Hunger / Durst', 'Ich **habe** Hunger. · Ich **habe** Durst.'],
        ['Bestellen', 'Ich möchte einen Kaffee, **bitte**.'],
        ['Preis', 'Was kostet das? — Das macht 5 Euro 20.'],
        ['Bezahlen', 'Die Rechnung, bitte! / Zahlen, bitte!'],
        ['Mengen', 'ein Kilo Äpfel · ein Liter Milch ~~(sin „de“)~~'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich kenne die wichtigsten Lebensmittel (Brot, Milch, Käse …).',
        'Ich kann im Café bestellen und bezahlen.',
        'Ich sage richtig: Ich **habe** Hunger / Durst.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Essen, trinken, einkaufen — ~~con esto sobrevives el día a día.~~ In der nächsten Lektion kommt dein Zuhause: die **Wohnung** und die Möbel — *Meine Wohnung hat drei Zimmer.* Und deine Adresse für das Formular.',
    },
  ],
}
