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

    // ── Übungen ───────────────────────────────────────────────────
    {
      type: 'uebung',
      eyebrow: 'Anwendung — Übung 1 · Erkennen',
      frage: 'Welches Paar passt? Wähle nach der Bedeutung.',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Er isst ___ Fleisch ___ Fisch — er ist Veganer. ~~(ninguno de los dos)~~',
        'Das Praktikum war ___ anstrengend, ___ sehr lehrreich. ~~(concesión)~~',
        '___ du bezahlst jetzt, ___ du bekommst eine Rechnung. ~~(alternativa)~~',
        'Sie ist ___ freundlich, ___ auch sehr kompetent. ~~(no solo … sino)~~',
      ],
      loesungen: [
        'Er isst **weder** Fleisch **noch** Fisch.',
        'Das Praktikum war **zwar** anstrengend, **aber** sehr lehrreich.',
        '**Entweder** du bezahlst jetzt, **oder** du bekommst eine Rechnung.',
        'Sie ist **nicht nur** freundlich, **sondern auch** sehr kompetent.',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 2 · je … desto bilden',
      frage: 'Verbinde die Sätze mit *je … desto*.',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Man übt viel. Man macht wenige Fehler.',
        'Das Wetter ist gut. Viele Leute sitzen draußen.',
        'Ich stehe früh auf. Ich schaffe viel.',
      ],
      loesungen: [
        '**Je mehr** man **übt**, **desto weniger** Fehler **macht** man.',
        '**Je besser** das Wetter **ist**, **desto mehr** Leute **sitzen** draußen.',
        '**Je früher** ich **aufstehe**, **desto mehr schaffe** ich.',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 3 · Produzieren',
      frage: 'Schreibe zum Thema „Online-Kurse“ je einen Satz mit den angegebenen Paaren.',
      loesungLabel: 'Mögliche Lösung',
      aufgaben: [
        'einerseits … andererseits',
        'sowohl … als auch',
        'je … desto',
      ],
      loesungen: [
        '**Einerseits** sind Online-Kurse flexibel, **andererseits** fehlt der direkte Kontakt. ~~(cualquier par de argumentos opuestos vale)~~',
        'Online-Kurse eignen sich **sowohl** für Berufstätige **als auch** für Studierende.',
        '**Je interaktiver** ein Online-Kurs **ist**, **desto mehr lernt** man. ~~(válida toda frase con Nebensatz + inversión)~~',
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
