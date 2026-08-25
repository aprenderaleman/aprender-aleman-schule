// Lektion 33 · Essen & Einkaufen
//
// Bloque 3 (temático): alimentos, la compra, pedir en el café
// (Ich hätte gern … / Die Rechnung, bitte), precios. «Tengo hambre» = Ich habe Hunger.

export default {
  spec: ['Bloque 3', 'Themenfelder & Wortschatz', 'Niveau A2', 'Prüfungsrelevanz: Sprechen & Schreiben'],
  h1: 'Essen & Einkaufen',
  lead: '~~Comer, comprar y pedir en el café — con la frase estrella del examen:~~ **Ich hätte gern …** ~~(quisiera…)~~',

  content: [
    // ── Lernziele ─────────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'Lebensmittel kennen und einkaufen ~~(los alimentos)~~',
        'im Café bestellen: *Ich hätte gern einen Kaffee.*',
        'nach Preisen fragen und Preise verstehen',
      ],
    },

    { type: 'rule' },

    // ── Kernwortschatz ────────────────────────────────────────────
    {
      type: 'wortschatz',
      eyebrow: 'Kernwortschatz — Essen & Einkaufen',
      items: [
        { wort: 'das Brot', kollokation: 'frisches Brot kaufen', es: 'el pan' },
        { wort: 'der Käse', kollokation: 'Brot mit Käse', es: 'el queso' },
        { wort: 'das Obst', kollokation: 'Obst und Gemüse', es: 'la fruta' },
        { wort: 'das Gemüse', kollokation: 'Gemüse ist gesund.', es: 'la verdura' },
        { wort: 'das Fleisch', kollokation: 'Ich esse kein Fleisch.', es: 'la carne' },
        { wort: 'die Milch', kollokation: 'ein Liter Milch', es: 'la leche' },
        { wort: 'das Wasser', kollokation: 'ein Glas Wasser', es: 'el agua' },
        { wort: 'der Kaffee', kollokation: 'eine Tasse Kaffee', es: 'el café' },
        { wort: 'der Supermarkt', kollokation: 'im Supermarkt einkaufen', es: 'el supermercado' },
        { wort: 'kosten', kollokation: 'Was kostet das?', es: 'costar' },
        { wort: 'der Hunger', kollokation: 'Hunger haben', es: 'el hambre' },
        { wort: 'die Rechnung', kollokation: 'Die Rechnung, bitte!', es: 'la cuenta' },
      ],
      hinweis: '~~einkaufen = hacer la compra (separable: Ich kaufe ein); kaufen = comprar una cosa concreta.~~',
    },

    { type: 'rule' },

    // ── Erklärung ─────────────────────────────────────────────────
    {
      type: 'steps',
      eyebrow: 'Erklärung — drei Situationen',
      steps: [
        {
          badge: 'Hunger',
          titel: 'Hunger und Durst — mit haben',
          text: '~~Como en español «tener hambre»:~~ __Ich **habe** Hunger. Ich **habe** Durst.__ ~~(sed)~~ Nie mit sein: ~~no digas~~ *Ich bin Hunger*. Danach: __Ich möchte etwas essen / trinken.__',
        },
        {
          badge: 'Café',
          titel: 'Im Café oder Restaurant bestellen',
          text: 'Die wichtigste Formel: __**Ich hätte gern** einen Kaffee und ein Wasser.__ ~~(quisiera — mucho más amable que „Ich will“)~~ Am Ende: __**Die Rechnung**, bitte!__ — __Zusammen oder getrennt?__ ~~(¿juntos o por separado?)~~',
        },
        {
          badge: '€',
          titel: 'Preise fragen und sagen',
          text: '__**Was kostet** das Brot?__ — __Es kostet **zwei Euro fünfzig** (2,50 €).__ Plural: __Was **kosten** die Tomaten?__ ~~El precio se dice seguido: zwei Euro fünfzig, sin «con».~~',
        },
      ],
    },

    { type: 'rule' },

    // ── Beispiele ─────────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele',
      items: [
        { text: 'Ich **habe** Hunger — wollen wir etwas essen?', gl: '— con haben' },
        { text: 'Ich kaufe im Supermarkt Obst, Gemüse und Milch.', gl: '' },
        { text: '**Ich hätte gern** einen Kaffee, bitte.', gl: '— Akkusativ: einen' },
        { text: 'Was kostet der Käse? — 3,20 Euro.', gl: '' },
        { text: 'Wir möchten bezahlen. Die Rechnung, bitte!', gl: '' },
      ],
    },
    {
      type: 'redemittel',
      eyebrow: 'Redemittel — im Café',
      gruppen: [
        {
          fn: 'Bestellen & bezahlen',
          saetze: [
            { satz: 'Ich hätte gern einen Kaffee.', gloss: 'quisiera' },
            { satz: 'Für mich ein Wasser, bitte.' },
            { satz: 'Was kostet der Kuchen?' },
            { satz: 'Die Rechnung, bitte! — Zusammen oder getrennt?', gloss: '¿juntos o por separado?' },
          ],
        },
      ],
    },

    { type: 'rule' },

    // ── Übungen ───────────────────────────────────────────────────
    {
      type: 'uebung',
      eyebrow: 'Anwendung — Übung 1 · Was passt nicht?',
      frage: 'Ein Wort passt nicht. Welches?',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Obst – Gemüse – Brot – Rechnung',
        'Kaffee – Milch – Käse – Wasser',
        'Supermarkt – Café – Restaurant – Fleisch',
        'kaufen – kosten – schlafen – bezahlen',
      ],
      loesungen: [
        '**Rechnung** ~~(no es un alimento)~~',
        '**Käse** ~~(los otros se beben)~~',
        '**Fleisch** ~~(los otros son lugares)~~',
        '**schlafen** ~~(no tiene que ver con comprar)~~',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 2 · Dialog im Café',
      frage: 'Ergänze: hätte · kostet · Rechnung · habe.',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Ich ___ Hunger. Gehen wir ins Café?',
        'Ich ___ gern einen Kaffee und ein Stück Kuchen.',
        'Was ___ der Kuchen? — 3 Euro.',
        'Wir möchten bezahlen. Die ___, bitte!',
      ],
      loesungen: [
        'Ich **habe** Hunger. Gehen wir ins Café?',
        'Ich **hätte** gern einen Kaffee und ein Stück Kuchen.',
        'Was **kostet** der Kuchen? — 3 Euro.',
        'Wir möchten bezahlen. Die **Rechnung**, bitte!',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 3 · Produzieren',
      frage: 'Du gehst einkaufen. Schreib 4-5 Sätze (ca. 30 Wörter): Wo kaufst du ein? Was kaufst du? Was kostet etwas?',
      loesungLabel: 'Mögliche Lösung',
      loesung:
        'Am Samstag kaufe ich im Supermarkt ein. Ich kaufe Brot, Käse, Obst und zwei Liter Milch. Ein Kilo Äpfel kostet nur zwei Euro. Fleisch kaufe ich nicht, ich esse kein Fleisch. ~~(Vale cualquier texto con 3-4 alimentos y un precio.)~~',
    },

    { type: 'rule' },

    // ── Prüfungsbezug ─────────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Schreiben · Teil 1',
      titel: 'Kurze Mitteilung: der Einkauf',
      anweisung: 'Dein Freund kommt heute zum Abendessen, aber du bist noch bei der Arbeit. Schreib ihm eine SMS (20-30 Wörter): Er soll einkaufen. Was braucht ihr? Wann kommst du?',
      absaetze: [
        'Denk an: **alle drei Punkte** beantworten.',
      ],
      loesungLabel: 'Mögliche Lösung',
      loesungen: [
        'Hallo Tom, ich bin noch bei der Arbeit. Kaufst du bitte Brot, Käse und eine Flasche Wasser? Ich komme um sieben nach Hause. Bis später!',
      ],
      kommentar: 'In Teil 1 zählt: **alle Punkte beantworten** und kurz bleiben. Du-Form und einfache Sätze sind perfekt.',
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Im **Hören** kommen oft Durchsagen im Supermarkt mit Preisen. Übe die Zahlen bis 100: *neunundneunzig Cent* — ~~los números al revés (neun-und-neunzig = 99) son la trampa típica.~~',
    },

    { type: 'rule' },

    // ── Abschluss ─────────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Funktion', 'So sagst du es'],
      zeilen: [
        ['tengo hambre / sed', 'Ich habe Hunger. / Ich habe Durst.'],
        ['pedir', 'Ich hätte gern einen Kaffee.'],
        ['preguntar el precio', 'Was kostet …? — Es kostet 2,50 Euro.'],
        ['pagar', 'Die Rechnung, bitte! Zusammen oder getrennt?'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich kaufe mit 10 Lebensmittel-Wörtern ein.',
        'Ich bestelle im Café mit Ich hätte gern …',
        'Ich frage nach dem Preis und verstehe die Antwort.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Einkaufen, kochen, essen — und morgen früh? Da geht es **zur Arbeit**. In der nächsten Lektion lernst du **Arbeit & Beruf**: die Berufe, deine Arbeit und die Arbeitszeiten.',
    },
  ],
}
