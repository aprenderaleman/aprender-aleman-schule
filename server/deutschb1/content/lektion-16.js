// Lektion 16 · Infinitiv mit zu / um … zu

export default {
  spec: ['Bloque 1', 'Grammatik & Struktur', 'Niveau B1', 'Prüfungsrelevanz: Schreiben & Sprechen'],
  h1: 'Infinitiv mit zu / um … zu',
  lead: '*Ich versuche, Deutsch **zu lernen** — **um** in Deutschland **zu arbeiten**.* ~~Cuándo va «zu» y cómo se dice «para + infinitivo».~~',

  content: [
    // ── Lernziele ─────────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'wissen, nach welchen Verben **zu + Infinitiv** steht',
        'wissen, wann **kein zu** steht (Modalverben, *möchten*, *gehen*)',
        'einen Zweck mit **um … zu** ausdrücken ~~(«para + infinitivo»)~~',
      ],
    },

    { type: 'rule' },

    // ── Kernwortschatz ────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Kernwortschatz — Verben & Ausdrücke mit zu',
      kopf: ['mit zu + Infinitiv', 'Bedeutung'],
      zeilen: [
        ['versuchen', 'intentar'],
        ['vergessen', 'olvidar'],
        ['anfangen / aufhören', 'empezar / dejar de'],
        ['vorhaben', 'tener planeado'],
        ['Lust haben', 'tener ganas'],
        ['Zeit haben', 'tener tiempo'],
        ['Es ist wichtig / schwer …', 'es importante / difícil…'],
      ],
    },

    { type: 'rule' },

    // ── Erklärung ─────────────────────────────────────────────────
    {
      type: 'steps',
      eyebrow: 'Erklärung — drei Regeln',
      steps: [
        {
          badge: 'mit zu',
          titel: 'Verb + zu + Infinitiv am Ende',
          text: 'Nach Verben wie __versuchen, vergessen, anfangen__ und Ausdrücken wie __Lust haben__:\n__Ich habe Lust, ins Kino **zu gehen**.__\nBei trennbaren Verben steht *zu* __in der Mitte__: __ein**zu**kaufen, an**zu**rufen__.',
        },
        {
          badge: 'ohne zu',
          titel: 'Modalverben, möchten, gehen',
          text: 'Nach __können, müssen, wollen, dürfen, sollen__, nach __möchten__ und nach __gehen__ steht der Infinitiv **ohne zu**:\n__Ich kann schwimmen. · Ich möchte schlafen. · Wir gehen einkaufen.__',
        },
        {
          badge: 'um … zu',
          titel: 'Zweck — „para + infinitivo“',
          text: '__**um** … **zu** + Infinitiv__ nennt das Ziel:\n__Ich lerne Deutsch, **um** in Berlin **zu** arbeiten.__ ~~aprendo alemán para trabajar…~~\nBedingung: dieselbe Person in beiden Satzteilen.',
        },
        {
          badge: 'Komma',
          titel: 'Das Komma',
          text: 'Vor __um … zu__ steht __immer__ ein Komma. Vor einfachem *zu + Infinitiv* mit Ergänzung ist es üblich und immer korrekt: __Ich versuche**,** früh aufzustehen.__',
        },
      ],
    },
    {
      type: 'prose',
      card: true,
      absaetze: [
        '**Typischer Fehler:** ~~«para» no es «für». Para decir «para + infinitivo» el alemán usa~~ **um … zu**, nie ~~*für zu lernen*~~: *Ich bin hier, **um** Deutsch **zu lernen**.* ~~Y «empiezo a trabajar» se dice~~ *Ich fange an, zu arbeiten* ~~— anfangen + zu, sin traducir la «a» del español.~~',
      ],
    },

    { type: 'rule' },

    // ── Beispiele ─────────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele',
      kicker: 'Gruppe 1',
      titel: 'zu + Infinitiv',
      items: [
        { text: 'Ich versuche, jeden Tag Vokabeln **zu lernen**.' },
        { text: 'Vergiss nicht, Brot **zu kaufen**!', gl: '~~no olvides comprar pan~~' },
        { text: 'Hast du Lust, mit uns **zu kommen**?' },
        { text: 'Ich habe vor, am Wochenende **einzukaufen**.', gl: '— trennbar: ein**zu**kaufen' },
        { text: 'Es ist wichtig, pünktlich **zu sein**.' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'Gruppe 2',
      titel: 'ohne zu',
      items: [
        { text: 'Ich muss heute lange **arbeiten**.', gl: '— Modalverb' },
        { text: 'Möchtest du etwas **trinken**?', gl: '— möchten' },
        { text: 'Wir gehen morgen **schwimmen**.', gl: '— gehen + Infinitiv' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'Gruppe 3',
      titel: 'um … zu',
      items: [
        { text: 'Ich spare, **um** ein Auto **zu kaufen**.', gl: '~~ahorro para comprar…~~' },
        { text: 'Sie macht einen Kurs, **um** besser Deutsch **zu sprechen**.' },
        { text: '**Um** gesund **zu bleiben**, mache ich viel Sport.', gl: '— um…zu auch am Anfang möglich' },
      ],
    },

    { type: 'rule' },

    // ── Mehr Beispiele ────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Mehr Beispiele',
      titel: 'Pläne, Ziele & gute Vorsätze',
      items: [
        { text: 'Ich **habe vor**, nächstes Jahr in Zürich **zu studieren**.', gl: '— vorhaben + zu' },
        { text: 'Paula **hat aufgehört**, Fleisch **zu essen**.', gl: '~~Paula ha dejado de comer carne~~' },
        { text: 'Wir **haben** leider keine **Zeit**, dich am Bahnhof **abzuholen**.', gl: '— trennbar: ab**zu**holen' },
        { text: 'Im Winter **ist es schwer**, früh **aufzustehen**.', gl: '— auf**zu**stehen' },
        { text: 'Er **geht** freitags mit Kollegen **essen**, **um** sie besser **kennenzulernen**.', gl: '— gehen ohne zu · um … zu mit trennbarem Verb' },
        { text: '**Um** Geld **zu sparen**, **versucht** Leonie, weniger online **zu kaufen**.', gl: '— um … zu am Anfang + versuchen + zu' },
      ],
    },

    { type: 'rule' },

    // ── Prüfungsbezug ─────────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Schreiben · Teil 2 (Forumsbeitrag, ~80 Wörter)',
      titel: '3 Lücken',
      anweisung: 'Im Forumsbeitrag begründest du deine Meinung — perfekt für um … zu. Ergänze:',
      absaetze: [
        '„Ich finde Sprachkurse wichtig. Viele Leute machen einen Kurs, {1} schneller Deutsch {2} lernen. Ich versuche auch, jeden Tag ein bisschen {3} üben.“',
      ],
      optionen: ['(1) Zweck-Wort', '(2) und (3) dasselbe kleine Wort'],
      loesungLabel: 'Lösung',
      loesungen: [
        '{1} **um** — Zweck: ~~para aprender más rápido~~.',
        '{2} **zu** — der zweite Teil von *um … zu*.',
        '{3} **zu** — nach *versuchen* steht zu + Infinitiv.',
      ],
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Beim **Sprechen Teil 2 (Präsentation)** wirkt *um … zu* sofort strukturiert: *„**Um** das Thema besser **zu erklären**, habe ich drei Punkte vorbereitet.“* Ein einziger um…zu-Satz pro Text (E-Mail, Forum, Vortrag) hebt dein Niveau — die Prüfer bewerten *Strukturen* als eigenes Kriterium.',
    },

    { type: 'rule' },

    // ── Abschluss ─────────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Struktur', 'Wann?', 'Beispiel'],
      zeilen: [
        ['zu + Infinitiv', 'versuchen, vergessen, Lust/Zeit haben …', 'Ich versuche, zu lernen.'],
        ['ohne zu', 'Modalverben, möchten, gehen', 'Ich muss lernen.'],
        ['um … zu', 'Zweck (para + infinitivo)', 'Ich lerne, um zu bestehen.'],
        ['trennbare Verben', 'zu in der Mitte', 'einzukaufen, anzurufen'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich weiß, nach welchen Verben zu + Infinitiv steht.',
        'Ich benutze nach Modalverben, möchten und gehen keinen zu-Infinitiv.',
        'Ich kann einen Zweck mit um … zu ausdrücken — mit Komma.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Du kennst jetzt Verben, die einen Infinitiv „mitnehmen“. Viele Verben nehmen aber etwas anderes mit: ein **sich** (*sich freuen, sich treffen*) oder einen festen Kasus (*helfen + Dativ*). Das ist das Thema der nächsten Lektion — der letzten Grammatik-Lektion dieses Blocks.',
    },
  ],
}
