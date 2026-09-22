// Lektion 33 · Essen & Einkaufen
//
// Bloque 3 (temático). Diferencia frente al A1 (Lektion 32 allí): «Hunger
// haben» y «Was kostet das?» son solo repaso de una línea. Núcleo A2:
// Mengen & Verpackungen (Packung, Dose, Flasche, Kilo), Preise vergleichen
// mit Komparativ (→ Lektion 13), Tisch reservieren / Ich hätte gern,
// reklamieren & umtauschen (stimmt so, Kassenbon).

export default {
  spec: ['Bloque 3', 'Themenfelder & Wortschatz', 'Niveau A2', 'Prüfungsrelevanz: Sprechen & Schreiben'],
  h1: 'Essen & Einkaufen',
  lead: '~~Comprar y comer en nivel A2: cantidades y envases, comparar precios, reservar mesa — y reclamar:~~ **„Ich möchte das umtauschen.“**',

  content: [
    // ── Lernziele ─────────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'mit Mengen und Verpackungen einkaufen: *eine Packung Nudeln, eine Dose Tomaten*',
        'Preise und Produkte vergleichen: *billiger als, am liebsten*',
        'im Restaurant: reservieren, bestellen, bezahlen: *Stimmt so!*',
        'reklamieren und umtauschen: *Ich möchte das umtauschen.*',
      ],
    },
    {
      type: 'prose',
      absaetze: ['**Wiederholung aus dem A1:** *Ich habe Hunger / Durst* · *Was kostet das?* · die Lebensmittel *(Brot, Milch, Käse …)*. ~~Eso ya lo dominas — hoy toca la capa A2.~~'],
    },

    { type: 'rule' },

    // ── Kernwortschatz ────────────────────────────────────────────
    {
      type: 'wortschatz',
      eyebrow: 'Kernwortschatz — Einkaufen & Restaurant',
      items: [
        { wort: 'die Packung, -en', kollokation: 'eine Packung Nudeln', es: 'el paquete' },
        { wort: 'die Dose, -n', kollokation: 'eine Dose Tomaten', es: 'la lata' },
        { wort: 'die Flasche, -n', kollokation: 'eine Flasche Öl', es: 'la botella' },
        { wort: 'das Kilo', kollokation: 'ein Kilo Kartoffeln', es: 'el kilo' },
        { wort: 'billig ↔ teuer', kollokation: 'billiger als …', es: 'barato ↔ caro' },
        { wort: 'das Angebot, -e', kollokation: 'Der Käse ist im Angebot.', es: 'la oferta' },
        { wort: 'der Markt', kollokation: 'auf dem Markt einkaufen', es: 'el mercado' },
        { wort: 'reservieren', kollokation: 'einen Tisch reservieren', es: 'reservar' },
        { wort: 'bestellen', kollokation: 'Wir möchten bestellen.', es: 'pedir (en el restaurante)' },
        { wort: 'die Rechnung, -en', kollokation: 'Die Rechnung, bitte — stimmt so!', es: 'la cuenta' },
        { wort: 'umtauschen', kollokation: 'Ich möchte das umtauschen.', es: 'cambiar, devolver' },
        { wort: 'der Kassenbon, -s', kollokation: 'Haben Sie den Kassenbon?', es: 'el tique de compra' },
      ],
      hinweis: '~~umtauschen es separable: Ich tausche die Jacke um. Y «stimmt so» = «así está bien»: redondeas la cuenta y dejas propina.~~',
    },

    { type: 'rule' },

    // ── Erklärung ─────────────────────────────────────────────────
    {
      type: 'steps',
      eyebrow: 'Erklärung — vier Situationen',
      steps: [
        {
          badge: 'Mengen',
          titel: 'Mengen und Verpackungen',
          text: 'Menge + Nomen, ohne „von“: __eine **Packung** Nudeln__ · __eine **Dose** Tomaten__ · __eine **Flasche** Öl__ · __ein **Kilo** Kartoffeln__. ~~(un paquete DE pasta — en alemán sin «de»)~~',
        },
        {
          badge: 'billiger',
          titel: 'Preise vergleichen — mit dem Komparativ',
          text: 'Mit dem __Komparativ__ ~~(Lektion 13)~~ vergleichst du: __Das Obst ist auf dem Markt **frischer**, aber im Supermarkt **billiger**.__ Dein Favorit: __**Am liebsten** kaufe ich auf dem Markt ein.__',
        },
        {
          badge: 'Restaurant',
          titel: 'Reservieren, bestellen, bezahlen',
          text: '__Ich möchte einen Tisch für zwei Personen **reservieren**.__ Bestellen: __**Ich hätte gern** die Tomatensuppe.__ ~~(quisiera — la fórmula estrella)~~ Bezahlen: __Die Rechnung, bitte!__ — __Zwanzig Euro, **stimmt so**!__ ~~(quédese el cambio)~~',
        },
        {
          badge: 'Reklamation',
          titel: 'Reklamieren und umtauschen',
          text: 'Etwas ist nicht okay? __Entschuldigung, **das ist zu viel**.__ · __Die Suppe ist **kalt**.__ Im Geschäft: __Ich möchte die Jacke **umtauschen**.__ — __Haben Sie den **Kassenbon**?__',
        },
      ],
    },

    { type: 'rule' },

    // ── Beispiele ─────────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele',
      items: [
        { text: 'Ich hätte gern eine **Packung** Nudeln und zwei **Dosen** Tomaten.', gl: '— Mengen ohne „de“' },
        { text: 'Die Äpfel sind heute **im Angebot** — nur 1,99 Euro das Kilo.', gl: '' },
        { text: 'Auf dem Markt ist das Gemüse **frischer als** im Supermarkt.', gl: '— Komparativ' },
        { text: 'Ich möchte einen Tisch für vier Personen **reservieren** — für Samstag, 20 Uhr.', gl: '' },
        { text: 'Das macht 18,50 Euro. — Zwanzig Euro, **stimmt so**!', gl: '— con propina' },
        { text: 'Ich möchte diese Jacke **umtauschen**, sie ist **zu klein**.', gl: '' },
      ],
    },
    {
      type: 'redemittel',
      eyebrow: 'Redemittel — im Restaurant & im Geschäft',
      gruppen: [
        {
          fn: 'Im Restaurant',
          saetze: [
            { satz: 'Ich möchte einen Tisch für zwei Personen reservieren.' },
            { satz: 'Ich hätte gern das Schnitzel und ein Wasser.', gloss: 'quisiera' },
            { satz: 'Die Rechnung, bitte! — Zwanzig Euro, stimmt so!', gloss: 'quédese el cambio' },
          ],
        },
        {
          fn: 'Reklamieren & umtauschen',
          saetze: [
            { satz: 'Entschuldigung, das ist zu viel. / Die Suppe ist kalt.', gloss: 'es demasiado' },
            { satz: 'Ich möchte das umtauschen. Hier ist der Kassenbon.', gloss: 'quiero cambiarlo' },
          ],
        },
      ],
    },

    { type: 'rule' },

    // ── Übungen ───────────────────────────────────────────────────
    {
      type: 'uebung',
      eyebrow: 'Anwendung — Übung 1 · Packung, Dose, Flasche oder Kilo?',
      frage: 'Welche Menge passt?',
      loesungLabel: 'Lösung',
      aufgaben: [
        'eine ___ Nudeln',
        'eine ___ Öl',
        'eine ___ Thunfisch ~~(atún)~~',
        'ein ___ Kartoffeln',
      ],
      loesungen: [
        'eine **Packung** Nudeln',
        'eine **Flasche** Öl',
        'eine **Dose** Thunfisch',
        'ein **Kilo** Kartoffeln',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 2 · Im Restaurant',
      frage: 'Ergänze: reservieren · hätte · stimmt · umtauschen.',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Ich möchte einen Tisch für zwei Personen ___ .',
        'Ich ___ gern die Tomatensuppe und ein Wasser.',
        'Das macht 18,50 Euro. — Zwanzig Euro, ___ so!',
        'Die Jacke ist zu klein. Ich möchte sie ___ .',
      ],
      loesungen: [
        'Ich möchte einen Tisch für zwei Personen **reservieren**.',
        'Ich **hätte** gern die Tomatensuppe und ein Wasser.',
        'Das macht 18,50 Euro. — Zwanzig Euro, **stimmt** so!',
        'Die Jacke ist zu klein. Ich möchte sie **umtauschen**.',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 3 · Produzieren',
      frage: 'Vergleiche Markt und Supermarkt (4-5 Sätze, ca. 35 Wörter): Wo kaufst du ein? Was ist dort billiger oder frischer? Was kaufst du am liebsten?',
      loesungLabel: 'Mögliche Lösung',
      loesung:
        'Ich kaufe **am liebsten** auf dem Markt ein. Das Obst ist dort **frischer als** im Supermarkt. Aber der Supermarkt ist **billiger**: Eine Packung Nudeln kostet nur 99 Cent. Käse kaufe ich nur im Angebot. ~~(Lo que mira el corrector: dos comparativos y una cantidad tipo Packung/Kilo.)~~',
    },

    { type: 'rule' },

    // ── Prüfungsbezug ─────────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Schreiben · Teil 1',
      titel: 'Kurze Mitteilung: der Einkauf',
      anweisung: 'Dein Freund kommt heute zum Abendessen, aber du bist noch bei der Arbeit. Schreib ihm eine SMS (20-30 Wörter): Er soll einkaufen — was genau (mit Mengen)? Wann kommst du?',
      absaetze: [
        'Denk an: **alle Punkte beantworten** — und benutze Mengenangaben.',
      ],
      loesungLabel: 'Mögliche Lösung',
      loesungen: [
        'Hallo Tom, ich bin noch bei der Arbeit. Kaufst du bitte eine Packung Nudeln, eine Dose Tomaten und eine Flasche Öl? Ich komme um sieben. Bis später!',
      ],
      kommentar: 'Mengenangaben wie **eine Packung Nudeln** zeigen dem Korrektor sofort A2-Wortschatz.',
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Im **Hören** kommen oft Supermarkt-Durchsagen: *„Heute im **Angebot**: Äpfel, das Kilo nur 1,99 Euro!“* Übe Preise und Mengen zusammen — ~~(los números van al revés: neun-und-neunzig = 99).~~',
    },

    { type: 'rule' },

    // ── Abschluss ─────────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Funktion', 'So sagst du es'],
      zeilen: [
        ['Mengen & Verpackungen', 'eine Packung Nudeln · eine Dose Tomaten · ein Kilo Kartoffeln'],
        ['vergleichen', 'billiger / frischer als … · Am liebsten kaufe ich …'],
        ['Restaurant', 'einen Tisch reservieren · Ich hätte gern … · Stimmt so!'],
        ['reklamieren & umtauschen', 'Das ist zu viel. · Ich möchte das umtauschen. (+ Kassenbon)'],
        ['Wiederholung A1', 'Ich habe Hunger. · Was kostet das?'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich kaufe mit Mengen ein: eine Packung, eine Dose, ein Kilo.',
        'Ich vergleiche Preise und Produkte: billiger als, am liebsten.',
        'Ich reserviere einen Tisch und bestelle mit Ich hätte gern …',
        'Ich kann reklamieren und etwas umtauschen.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Einkaufen, kochen, essen — und morgen früh? Da geht es **zur Arbeit**. In der nächsten Lektion lernst du **Arbeit & Beruf**: die Berufe, deine Arbeit und die Arbeitszeiten.',
    },
  ],
}
