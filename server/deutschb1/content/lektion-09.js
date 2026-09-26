// Lektion 09 · Verben mit Präpositionen
//
// Bloque 1 · Grammatik & Struktur — sigue el estándar de lektion-08.js:
// 8 secciones (FORMAT.md), nivel B1, máximo apoyo en español.

export default {
  spec: ['Bloque 1', 'Grammatik & Struktur', 'Niveau B1', 'Prüfungsrelevanz: alle Module'],
  h1: 'Verben mit Präpositionen',
  lead: 'Viele Verben haben eine feste Präposition: **warten auf**, **träumen von** … ~~Verbo + preposición + caso se aprenden juntos, como una sola palabra.~~',

  content: [
    // ── Lernziele ─────────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'die wichtigsten Verben mit Präposition und ihrem Kasus kennen',
        'nach Sachen mit *wo(r)+Präposition* fragen (Worauf? Wovon?)',
        'auf Sachen mit *da(r)+Präposition* antworten (darauf, davon)',
      ],
    },

    { type: 'rule' },

    // ── Kernwortschatz ────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Kernwortschatz — mit Akkusativ',
      kopf: ['Verb + Präposition', 'Bedeutung'],
      zeilen: [
        ['warten auf', 'esperar a ~~«a» → auf~~'],
        ['denken an', 'pensar en ~~«en» → an, no in~~'],
        ['sich freuen auf', 'alegrarse por algo futuro'],
        ['sich freuen über', 'alegrarse por algo presente'],
        ['sich ärgern über', 'enfadarse por'],
        ['sprechen über', 'hablar de'],
        ['sich interessieren für', 'interesarse por'],
        ['danken für', 'dar las gracias por'],
        ['bitten um', 'pedir (un favor)'],
        ['sich kümmern um', 'ocuparse de'],
      ],
    },
    {
      type: 'tabelle',
      kopf: ['Verb + Präposition (Dativ)', 'Bedeutung'],
      zeilen: [
        ['träumen von', 'soñar con ~~¡«con» → von, nunca mit!~~'],
        ['erzählen von', 'contar (algo) de'],
        ['anfangen mit', 'empezar con'],
        ['aufhören mit', 'dejar de'],
        ['teilnehmen an', 'participar en ~~«en» → an + Dat.~~'],
        ['Angst haben vor', 'tener miedo de'],
        ['fragen nach', 'preguntar por'],
      ],
    },

    { type: 'rule' },

    // ── Erklärung ─────────────────────────────────────────────────
    {
      type: 'steps',
      eyebrow: 'Erklärung — so funktioniert es',
      steps: [
        {
          badge: 'Verb + Präp',
          titel: 'Feste Einheit',
          text: 'Verb, Präposition und Kasus bilden __eine Einheit__ — sie ändert sich nie.\n__Ich warte **auf den** Bus.__ ~~Apréndelo como un pack: warten + auf + Akk.~~',
        },
        {
          badge: 'Wo(r)…?',
          titel: 'Frage nach Sachen',
          text: 'Sache → __wo + Präposition__: **Worauf** wartest du? **Wovon** träumst du?\nPerson → Präposition + wen/wem: **Auf wen** wartest du?',
        },
        {
          badge: 'Da(r)…',
          titel: 'Antwort auf Sachen',
          text: 'Sache → __da + Präposition__: Ich warte **darauf**. Wir sprechen morgen **darüber**.\nBei Vokal kommt ein **r** dazwischen: wo**r**auf, da**r**an, da**r**über.',
        },
      ],
    },
    {
      type: 'prose',
      card: true,
      absaetze: [
        '**Achtung, Spanisch-Falle:** *träumen* geht mit **von** ~~soñar CON → von, no mit~~, *teilnehmen* mit **an** ~~participar EN → an~~ und *denken* mit **an** ~~pensar EN → an, no in~~. Die spanische Präposition hilft hier fast nie — lerne die deutsche mit.',
      ],
    },

    { type: 'rule' },

    // ── Beispiele ─────────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele',
      items: [
        { text: 'Ich warte **auf den** Bus.', gl: '— warten auf + Akk.' },
        { text: 'Wir freuen uns **auf das** Wochenende.', gl: '~~algo que viene → auf~~' },
        { text: 'Ich freue mich **über das** Geschenk.', gl: '~~algo que ya tienes → über~~' },
        { text: 'Sie träumt **von einem** Haus am Meer.', gl: '— träumen von + Dat.' },
        { text: 'Er nimmt **an einem** Deutschkurs teil.', gl: '— teilnehmen an + Dat.' },
        { text: 'Kannst du dich **um die** Kinder kümmern?', gl: '— sich kümmern um + Akk.' },
      ],
    },
    {
      type: 'beispiele',
      titel: 'Fragen und Antworten',
      items: [
        { text: '**Worauf** wartest du? — Auf die Straßenbahn.', gl: '— Sache → wo(r)+Präp.' },
        { text: '**Auf wen** wartest du? — Auf meinen Bruder.', gl: '— Person → Präp. + wen/wem' },
        { text: 'Kommst du zur Party? — Ja, ich freue mich schon **darauf**!', gl: '— Sache → da(r)+Präp.' },
      ],
    },

    { type: 'rule' },

    // ── Mehr Beispiele ────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Mehr Beispiele',
      titel: 'Verb + Präposition im Alltag',
      items: [
        { text: 'Paula ärgert sich **über den** Lärm im Haus.', gl: '— sich ärgern über + Akk.' },
        { text: 'Ich danke dir **für die** Hilfe beim Umzug.', gl: '— danken für + Akk.' },
        { text: 'Der Kunde fragt **nach dem** Preis.', gl: '— fragen nach + Dat.' },
        { text: 'Mein Vater hat **mit dem** Rauchen aufgehört.', gl: '— aufhören mit + Dat. (dejar de)' },
        { text: 'Kinder haben oft Angst **vor dem** Arzt.', gl: '— Angst haben vor + Dat.' },
        { text: 'Darf ich dich **um einen** Gefallen bitten?', gl: '— bitten um + Akk.' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'wo(r)- / da(r)-',
      titel: 'Fragen und Antworten',
      items: [
        { text: '**Wovon** erzählt der Film? — Er erzählt **von** einer Familie in Wien.', gl: '— Sache → wo(r)+Präp.' },
        { text: '**Mit wem** hast du gesprochen? — Mit meiner Lehrerin.', gl: '— Person → Präp. + wem' },
        { text: 'Hast du an den Termin gedacht? — Ja, ich habe **daran** gedacht.', gl: '— an + Vokal → daran' },
        { text: '**Wofür** interessierst du dich? — **Für** Fotografie.', gl: '— wofür (sin r: f es consonante)' },
        { text: 'Hast du schon mit den Hausaufgaben angefangen? — Ja, gerade habe ich **damit** angefangen.', gl: '— anfangen mit → damit' },
      ],
    },

    { type: 'rule' },

    // ── Prüfungsbezug ─────────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Schreiben Teil 1 · informelle E-Mail',
      titel: '2 Lücken',
      anweisung: 'In der informellen E-Mail brauchst du diese Verben ständig. Ergänze die Präpositionen:',
      absaetze: [
        '„Ich freue mich schon sehr {1} deinen Besuch! Hast du auch schon {2} unser Konzert gedacht?“',
      ],
      optionen: ['(1) sich freuen + ? (Besuch kommt noch)', '(2) denken + ?'],
      loesungLabel: 'Lösung',
      loesungen: [
        '{1} **auf** — sich freuen **auf** + Akk.: der Besuch kommt erst noch.',
        '{2} **an** — denken **an** + Akk. ~~pensar EN → an~~',
      ],
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Beim **Sprechen Teil 2 (Präsentation)** und **Teil 3 (Feedback)** sind diese Verben Gold wert: *„Heute spreche ich **über** das Thema …“*, *„Ich interessiere mich sehr **für** …“*, *„Danke **für** deine Präsentation!“*',
    },

    { type: 'rule' },

    // ── Abschluss ─────────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Regel', 'Beispiel'],
      zeilen: [
        ['Verb + Präp. + Kasus = Einheit', 'warten **auf** + Akk.'],
        ['Frage nach Sachen', '**Worauf** wartest du?'],
        ['Frage nach Personen', '**Auf wen** wartest du?'],
        ['Antwort auf Sachen', 'Ich warte **darauf**.'],
        ['Präposition mit Vokal → r', 'wo**r**auf, da**r**über, da**r**an'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich kenne die wichtigsten Verben mit Präposition und ihrem Kasus.',
        'Ich frage nach Sachen mit wo(r)+Präposition und nach Personen mit Präposition + wen/wem.',
        'Ich antworte auf Sachen mit da(r)+Präposition.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: '*Ich warte auf den Bus* — aber auf welchen? *Auf den **letzten** Bus.* Sobald ein Adjektiv vor dem Nomen steht, braucht es eine Endung: **der rote Pullover, ein kleines Problem**. Die Adjektivdeklination ist das Thema der nächsten Lektion.',
    },
  ],
}
