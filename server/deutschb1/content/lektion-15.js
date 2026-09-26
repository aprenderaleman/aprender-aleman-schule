// Lektion 15 · Passiv — Präsens & Präteritum

export default {
  spec: ['Bloque 1', 'Grammatik & Struktur', 'Niveau B1', 'Prüfungsrelevanz: Lesen & Schreiben'],
  h1: 'Passiv — Präsens & Präteritum',
  lead: '**werden + Partizip II**: *Das Haus wird gebaut.* ~~Cuando importa la acción, no quién la hace.~~',

  content: [
    // ── Lernziele ─────────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'das Passiv Präsens bilden (*wird gebaut*)',
        'das Passiv Präteritum bilden (*wurde gebaut*)',
        'entscheiden, wann Passiv, wann **man** passt',
      ],
    },

    { type: 'rule' },

    // ── Kernwortschatz ────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Kernwortschatz',
      items: [
        { text: 'typische Passiv-Verben: **bauen, reparieren, renovieren, schließen, öffnen, kontrollieren, sperren, liefern**', gl: '~~el vocabulario de avisos y carteles: wird geöffnet, wurde gesperrt…~~' },
      ],
    },
    {
      type: 'tabelle',
      kopf: ['werden (Präsens)', 'werden (Präteritum)'],
      zeilen: [
        ['ich werde', 'ich wurde'],
        ['du wirst', 'du wurdest'],
        ['er/sie/es **wird**', 'er/sie/es **wurde**'],
        ['wir werden', 'wir wurden'],
        ['ihr werdet', 'ihr wurdet'],
        ['sie/Sie werden', 'sie/Sie wurden'],
      ],
    },

    { type: 'rule' },

    // ── Erklärung ─────────────────────────────────────────────────
    {
      type: 'steps',
      eyebrow: 'Erklärung — so baust du das Passiv',
      steps: [
        {
          badge: 'Präsens',
          titel: 'wird + Partizip II',
          text: '__werden__ auf Position 2, __Partizip II__ am Ende:\n__Das Haus **wird gebaut**.__ ~~se construye / se está construyendo~~',
        },
        {
          badge: 'Präteritum',
          titel: 'wurde + Partizip II',
          text: 'Für die Vergangenheit nimmst du __wurde__:\n__Das Haus **wurde** 1990 **gebaut**.__ ~~se construyó~~',
        },
        {
          badge: 'Wozu?',
          titel: 'Die Person ist nicht wichtig',
          text: 'Aktiv: *Der Chef schließt das Büro.* → Passiv: __Das Büro **wird geschlossen**.__\nDas Passiv steht in __Prozessen, Regeln und offiziellen Mitteilungen__ — wer es macht, ist egal.',
        },
      ],
    },
    {
      type: 'prose',
      card: true,
      absaetze: [
        '**Für Hispanohablantes:** ~~El español dice «se»: se habla alemán, se cerró la tienda. El alemán tiene dos caminos:~~ **man** ~~(hablado, activo)~~: *Hier spricht **man** Deutsch.* — oder **Passiv** ~~(escrito, formal)~~: *Hier **wird** Deutsch **gesprochen**.* ~~Nunca traduzcas «se» con «sich»:~~ ~~*Hier sich spricht Deutsch* es un error típico.~~',
        '**Achtung mit *werden*:** *Das Haus **wird gebaut*** = Passiv ~~(se construye)~~, aber *Ich **werde** bauen* = Futur ~~(voy a construir)~~. Der Unterschied: Passiv hat ein **Partizip II**, Futur einen **Infinitiv**.',
      ],
    },

    { type: 'rule' },

    // ── Beispiele ─────────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele',
      kicker: 'Präsens',
      titel: 'Prozesse & Schilder',
      items: [
        { text: 'Die Wohnung **wird** gerade **renoviert**.', gl: '~~se está reformando~~' },
        { text: 'Das Brot **wird** jeden Morgen frisch **gebacken**.' },
        { text: 'Hier **wird** Deutsch **gesprochen**.', gl: '— typisches Schild' },
        { text: 'Die Tickets **werden** am Eingang **kontrolliert**.' },
      ],
    },
    {
      type: 'vergleich',
      titel: 'man ↔ Passiv — derselbe Inhalt, zwei Register',
      zeilen: [
        { satz: 'Hier baut man ein Hotel.', label: 'man + Aktiv — gesprochen, informell' },
        { satz: 'Hier wird ein Hotel gebaut.', label: 'Passiv — Schilder, Zeitungen, Briefe' },
        { satz: 'Man schloss die Straße.', label: 'möglich, aber selten' },
        { satz: 'Die Straße wurde geschlossen.', label: 'Passiv Präteritum — die übliche Form' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'Präteritum',
      titel: 'Vergangenheit & Mitteilungen',
      items: [
        { text: 'Die Schule **wurde** 1985 **gebaut**.', gl: '~~se construyó~~' },
        { text: 'Mein Fahrrad **wurde** letzte Woche **repariert**.' },
        { text: 'Der Termin **wurde** auf Montag **verschoben**.', gl: '— typische E-Mail-Info' },
        { text: 'Die Straße **wurde** wegen eines Unfalls **gesperrt**.', gl: '— wegen + Genitiv aus Lektion 14' },
      ],
    },

    { type: 'rule' },

    // ── Mehr Beispiele ────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Mehr Beispiele',
      kicker: 'Präsens',
      titel: 'Was passiert gerade?',
      items: [
        { text: 'Im Supermarkt **werden** die Regale jeden Morgen **gefüllt**.', gl: '— Plural → werden' },
        { text: 'Die Post **wird** am Samstag um 12 Uhr **geschlossen**.', gl: '— typisches Schild' },
        { text: 'Hier **wird** gerade eine neue Brücke **gebaut**.', gl: '~~se está construyendo~~' },
        { text: 'Die Pakete **werden** meistens am Vormittag **geliefert**.' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'Präteritum',
      titel: 'Was ist passiert?',
      items: [
        { text: 'Das Museum **wurde** letztes Jahr **renoviert**.', gl: '~~se renovó~~' },
        { text: 'Wegen des Schnees **wurde** die Autobahn **gesperrt**.', gl: '— wegen + Genitiv + Passiv' },
        { text: 'Früher **wurde** in diesem Haus Brot **gebacken**.', gl: '— heute ist hier ein Café' },
        { text: 'Ich **werde** das Formular morgen **ausfüllen**. — Das Formular **wurde** schon **ausgefüllt**.', gl: '— Futur (Infinitiv) ↔ Passiv (Partizip II)' },
      ],
    },

    { type: 'rule' },

    // ── Prüfungsbezug ─────────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Lesen · Teil 4–5 (Anweisungen & formelle Texte)',
      titel: 'Mitteilung verstehen',
      anweisung: 'Offizielle Mitteilungen stehen fast immer im Passiv. Lies und beantworte:',
      absaetze: [
        '„Liebe Kundinnen und Kunden, unser Geschäft **wird** ab Montag **umgebaut**. Bestellungen **werden** weiter online **angenommen** und **wurden** bisher immer innerhalb von zwei Tagen **geliefert**.“',
        'Frage: Kann man während des Umbaus etwas bestellen?',
      ],
      loesungLabel: 'Lösung',
      loesungen: [
        '**Ja** — Bestellungen werden weiter online angenommen.',
        'Strategie: Beim Passiv fragst du ==Was passiert?== — nicht *wer* es macht. ~~No busques al sujeto-persona: no lo hay.~~',
      ],
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'In **Lesen Teil 4–5** gibt es sehr viel Passiv: *wird geschlossen, wurde verschoben, wird gesperrt*. Wenn du **wird/wurde + Partizip II** sofort als „algo se hace / se hizo“ liest, sparst du wertvolle Zeit — und die brauchst du bei 65 Minuten für fünf Teile.',
    },

    { type: 'rule' },

    // ── Abschluss ─────────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Zeit', 'Form', 'Beispiel'],
      zeilen: [
        ['Präsens', 'wird + Partizip II', 'Das Haus wird gebaut.'],
        ['Präteritum', 'wurde + Partizip II', 'Das Haus wurde gebaut.'],
        ['gesprochen', 'man + Aktiv', 'Man baut das Haus.'],
        ['Nicht verwechseln', 'werde + Infinitiv = Futur', 'Ich werde bauen.'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich kann das Passiv im Präsens bilden (wird + Partizip II).',
        'Ich kann das Passiv im Präteritum bilden (wurde + Partizip II).',
        'Ich weiß, wann man und wann das Passiv besser passt.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Das Partizip II steht beim Passiv am Satzende. Auch der **Infinitiv** wandert oft ans Ende — mit einem kleinen Wort davor: **zu**. *Ich versuche, jeden Tag Deutsch **zu lernen**.* Wann *zu* steht und wann nicht, klärt die nächste Lektion.',
    },
  ],
}
