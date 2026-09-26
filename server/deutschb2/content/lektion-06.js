// Lektion 06 · Zweiteilige Konnektoren
//
// Bloque 1 «Grammatik & Struktur». Sigue el estándar de la lección
// modelo 04 (docs/deutschb2/KANON.md + docs/deutschc1/FORMAT.md).

export default {
  spec: ['Bloque 1', 'Grammatik & Struktur', 'Niveau B2', 'Prüfungsrelevanz: Schreiben & Sprechen'],
  h1: 'Zweiteilige Konnektoren',
  lead: 'Sieben feste Paare — von sowohl … als auch bis je … desto — die zwei Informationen elegant verbinden und in der Prüfung Strukturpunkte bringen.',

  content: [
    // ── Lernziele ─────────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'die sieben wichtigsten zweiteiligen Konnektoren und ihre Bedeutung sicher zuordnen',
        'die Sonderstruktur von *je … desto* korrekt bilden: Nebensatz + Inversion',
        'typische Fehler vermeiden: doppelte Verneinung bei *weder … noch*, falsche Verbstellung nach *desto*',
      ],
    },

    { type: 'rule' },

    // ── Kernwortschatz ────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Kernwortschatz',
      kopf: ['Konnektorenpaar', 'Bedeutung', 'Syntax-Hinweis'],
      zeilen: [
        ['sowohl … als auch', 'tanto … como', 'verbindet zwei positive Elemente'],
        ['nicht nur … sondern auch', 'no solo … sino también', 'Komma vor *sondern*'],
        ['weder … noch', 'ni … ni', 'schon negativ → kein extra *nicht/kein*'],
        ['entweder … oder', 'o … o', '*entweder* auch auf Position 1 möglich'],
        ['zwar … aber', 'es cierto que … pero', 'Einräumung; *zwar* auf Position 1 → Inversion'],
        ['je … desto/umso', 'cuanto más … más', 'je + Nebensatz · desto + Inversion'],
        ['einerseits … andererseits', 'por un lado … por otro', 'auf Position 1 → Inversion'],
      ],
    },

    { type: 'rule' },

    // ── Erklärung ─────────────────────────────────────────────────
    {
      type: 'prose',
      eyebrow: 'Erklärung — Paare mit fester Position',
      absaetze: [
        'Zweiteilige Konnektoren bestehen aus **zwei Teilen in zwei Satzhälften**. Die meisten verbinden einfach zwei Wörter oder Satzteile — nur *je … desto* baut eine eigene Satzstruktur. ~~Buena noticia: cinco de los siete funcionan casi igual que en español.~~',
      ],
    },
    {
      type: 'steps',
      steps: [
        {
          badge: 'addieren',
          titel: 'Aufzählen und ausschließen',
          text: '**sowohl … als auch** (beides), **nicht nur … sondern auch** (beides, mit Steigerung), **weder … noch** (keins von beiden), **entweder … oder** (nur eins). Wichtig: __weder … noch ist schon negativ__ — ohne zusätzliches *nicht* oder *kein*. ~~En español dices «no tengo ni tiempo ni dinero» — en alemán la negación extra sobra: *Ich habe weder Zeit noch Geld.*~~',
        },
        {
          badge: 'abwägen',
          titel: 'Einräumen und gegenüberstellen',
          text: '**zwar … aber** räumt etwas ein und widerspricht dann: __Das Hotel ist zwar teuer, aber sehr gut.__ Steht *zwar* am Satzanfang → Inversion. **einerseits … andererseits** stellt zwei Seiten neutral nebeneinander — perfekt für die Diskussion: __Einerseits spart man Zeit, andererseits kostet es viel.__',
        },
        {
          badge: 'je … desto',
          titel: 'Die Sonderstruktur',
          text: 'Zwei Komparative, zwei Regeln: __je + Komparativ + Nebensatz__ (Verb ans Ende), dann __desto/umso + Komparativ + Inversion__ (Verb sofort danach): **Je mehr** du **übst**, **desto sicherer wirst** du. ~~«Cuanto más practicas, más seguro te vuelves» — la primera mitad es Nebensatz, la segunda lleva el verbo justo tras el comparativo.~~',
        },
      ],
    },

    { type: 'rule' },

    // ── Beispiele ─────────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele — Aufzählen & Ausschließen',
      kicker: 'additiv / alternativ',
      titel: 'beides, keins oder nur eins',
      items: [
        { text: 'Sie spricht **sowohl** Spanisch **als auch** Deutsch.', gl: '— tanto … como' },
        { text: 'Der Kurs ist **nicht nur** günstig, **sondern auch** sehr praktisch.', gl: '— con coma antes de sondern' },
        { text: 'Ich habe **weder** Zeit **noch** Lust.', gl: '— sin nicht/kein adicional' },
        { text: '**Entweder** wir fahren mit dem Zug, **oder** wir nehmen das Auto.', gl: '' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'konzessiv / abwägend',
      titel: 'einräumen und gegenüberstellen',
      items: [
        { text: 'Die Wohnung ist **zwar** klein, **aber** sehr zentral.', gl: '— es cierto que … pero' },
        { text: '**Zwar** regnet es, **aber** wir gehen trotzdem raus.', gl: '— zwar en posición 1 → inversión' },
        { text: '**Einerseits** möchte ich sparen, **andererseits** brauche ich einen neuen Laptop.', gl: '— por un lado … por otro' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'je … desto',
      titel: 'zwei Komparative, eine Logik',
      items: [
        { text: '**Je mehr** du **übst**, **desto sicherer wirst** du.', gl: '— Nebensatz + Inversion' },
        { text: '**Je früher** wir **buchen**, **desto günstiger ist** der Flug.', gl: '' },
        { text: '**Je länger** ich in Deutschland **lebe**, **umso besser verstehe** ich die Kultur.', gl: '— umso = desto' },
      ],
    },
    {
      type: 'vergleich',
      titel: 'je … desto — richtig und falsch',
      zeilen: [
        { satz: 'Je mehr ich lerne, desto besser werden meine Noten.', label: 'korrekt: je + Verb Ende · desto + Komparativ + Verb' },
        { satz: 'Je mehr ich lerne, desto meine Noten werden besser. ✗', label: 'falsch: nach desto + Komparativ kommt sofort das Verb' },
        { satz: 'Je mehr lerne ich … ✗', label: 'falsch: der je-Satz ist ein Nebensatz — Verb ans Ende' },
      ],
    },

    { type: 'rule' },

    // ── Mehr Beispiele ────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Mehr Beispiele',
      titel: 'Zweiteilige Konnektoren im Alltag',
      items: [
        { text: '**Sowohl** die Hin- **als auch** die Rückfahrt sind im Preis enthalten.', gl: '— tanto … como' },
        { text: 'Das Hotel liegt **nicht nur** zentral, **sondern** ist **auch** erstaunlich ruhig.', gl: '— coma antes de sondern' },
        { text: 'Im Kühlschrank sind **weder** Milch **noch** Eier.', gl: '— sin kein adicional' },
        { text: '**Entweder** du meldest dich heute an, **oder** der Platz geht an jemand anderen.', gl: '— solo una de las dos opciones' },
        { text: '**Zwar ist** die Miete hoch, **aber** dafür brauche ich kein Auto.', gl: '— zwar en posición 1 → inversión' },
        { text: '**Je** öfter wir Deutsch **sprechen**, **umso** weniger Angst **haben** wir vor Fehlern.', gl: '— umso = desto' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'In der Diskussion',
      titel: 'Argumente abwägen',
      items: [
        { text: '**Einerseits** ist das Auto bequem, **andererseits** belastet es die Umwelt.', gl: '— dos lados, sin tomar partido' },
        { text: 'Homeoffice spart **zwar** Zeit, **aber** Arbeit und Freizeit lassen sich schwerer trennen.', gl: '— concedo … pero' },
        { text: 'Die Reform betrifft **nicht nur** die Schüler, **sondern auch** die Lehrkräfte und Eltern.', gl: '— ampliar el argumento' },
        { text: '**Je** mehr Menschen das Fahrrad **nutzen**, **desto** sicherer **müssen** die Radwege sein.', gl: '— Nebensatz + inversión' },
      ],
    },

    { type: 'rule' },

    // ── Prüfungsbezug ─────────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Prüfungsformat · Auswahlaufgabe',
      titel: '3 Lücken',
      anweisung: 'So sieht das im Prüfungsformat aus: das passende Konnektorenpaar ergänzen.',
      absaetze: [
        'Homeoffice hat {1} Vorteile, aber auch klare Nachteile. Man spart {2} den Arbeitsweg als auch Bürokosten. {3} mehr Tage man jedoch zu Hause arbeitet, desto weniger Kontakt hat man zum Team.',
      ],
      optionen: [
        '(1) a) zwar · b) weder · c) entweder',
        '(2) a) nicht nur · b) sowohl · c) einerseits',
        '(3) a) Umso · b) Desto · c) Je',
      ],
      loesungLabel: 'Lösung',
      loesungen: [
        '{1} **a) zwar** — die Einräumung, die das folgende *aber* ankündigt.',
        '{2} **b) sowohl** — das Paar schließt mit *als auch*.',
        '{3} **c) Je** — der erste Teil des Paars *je … desto* leitet den Nebensatz ein.',
      ],
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Ein sauberer *je … desto*-Satz und ein *einerseits … andererseits* gehören in jeden **Forumsbeitrag** und in die **Diskussion** — die Prüfer werten sie direkt unter „Strukturen“. Aber nur, wenn die Verbstellung stimmt: ein falsches *je … desto* fällt mehr auf als gar keins.',
    },

    { type: 'rule' },

    // ── Abschluss ─────────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Funktion', 'Paar', 'Merkregel'],
      zeilen: [
        ['beides', 'sowohl … als auch · nicht nur … sondern auch', 'Komma vor *sondern*'],
        ['keins / eins von beiden', 'weder … noch · entweder … oder', 'weder … noch ohne extra Negation'],
        ['einräumen / abwägen', 'zwar … aber · einerseits … andererseits', 'auf Position 1 → Inversion'],
        ['proportional', 'je … desto/umso', 'je + Verb Ende · desto + Komparativ + Verb'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich ordne jedem Paar die richtige Bedeutung zu.',
        'Ich bilde *je … desto*-Sätze mit Nebensatz und Inversion.',
        'Ich setze nach *weder … noch* keine zusätzliche Verneinung.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Mit den Konnektoren steht das Gerüst der Argumentation. Jetzt kommt das wichtigste Verbthema des B2: der **Konjunktiv II** — irreale Bedingungen, Wünsche und höfliche Bitten, von *wäre* und *hätte* bis *würde*.',
    },
  ],
}
