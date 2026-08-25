// Lektion 05 · Konnektoren II — obwohl, trotzdem, wenn, als

export default {
  spec: ['Bloque 1', 'Grammatik & Struktur', 'Niveau B1', 'Prüfungsrelevanz: alle Module'],
  h1: 'Konnektoren II — obwohl, trotzdem, wenn, als',
  lead: '**obwohl** und **trotzdem** für den Gegensatz — und das klassische Problem: ~~«cuando»~~ heißt mal **wenn**, mal **als**.',

  content: [
    // ── Lernziele ─────────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'Gegensätze mit *obwohl* und *trotzdem* ausdrücken',
        '*wenn* und *als* richtig unterscheiden',
        'die Verbstellung im Nebensatz sicher anwenden',
      ],
    },

    { type: 'rule' },

    // ── Kernwortschatz ────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Kernwortschatz',
      kopf: ['Konnektor', 'Spanisch', 'Verb'],
      zeilen: [
        ['obwohl', 'aunque', 'am Ende'],
        ['trotzdem', 'aun así / sin embargo', 'Inversion'],
        ['wenn', 'cuando (repetido / futuro) · si', 'am Ende'],
        ['als', 'cuando (una vez / una etapa del pasado)', 'am Ende'],
        ['immer wenn / jedes Mal', 'siempre que / cada vez que', 'am Ende'],
      ],
    },
    {
      type: 'beispiele',
      titel: 'Nützliche Zeitwörter dazu',
      items: [
        { text: '**damals** ~~(en aquella época)~~ · **früher** ~~(antes)~~ · **als Kind** ~~(de niño/a)~~' },
      ],
    },

    { type: 'rule' },

    // ── Erklärung ─────────────────────────────────────────────────
    {
      type: 'steps',
      eyebrow: 'Erklärung — Teil 1: der Gegensatz',
      steps: [
        {
          badge: 'Verb Ende',
          titel: 'obwohl — aunque (Nebensatz)',
          text: 'Etwas passiert, __obwohl__ es einen Grund dagegen gibt. Verb ans Ende — wie bei *weil*.\n__Ich gehe joggen, obwohl es **regnet**.__',
        },
        {
          badge: 'Inversion',
          titel: 'trotzdem — aun así (Hauptsatz)',
          text: 'Dieselbe Idee von der anderen Seite: erst der Grund, dann __trotzdem + Verb + Subjekt__ — wie bei *deshalb*.\n__Es regnet. Trotzdem **gehe ich** joggen.__',
        },
      ],
    },
    {
      type: 'steps',
      eyebrow: 'Erklärung — Teil 2: wenn oder als?',
      steps: [
        {
          badge: 'als',
          titel: 'Vergangenheit, einmal',
          text: 'Einmalige Situation oder Zeitraum __in der Vergangenheit__. ~~¿Pasó una sola vez? ¿O fue una etapa (la infancia, los años en X)? → als~~\n__Als ich 18 **war**, habe ich meinen ersten Job bekommen.__',
        },
        {
          badge: 'wenn',
          titel: 'Alles andere',
          text: 'Wiederholung ~~(siempre que)~~, Gegenwart, Zukunft — und auch die Bedingung ~~(si)~~.\n__Wenn ich Zeit **habe**, koche ich selbst.__',
        },
      ],
    },
    {
      type: 'prose',
      card: true,
      absaetze: [
        '**Der typische Fehler:** ~~En español «cuando» sirve para todo — en alemán no.~~ *„Wenn ich ein Kind war“* ✗ → **Als** ich ein Kind war ✓ ~~(la infancia es UNA etapa del pasado)~~. Faustregel: **Vergangenheit + einmal → als. Der Rest → wenn.**',
      ],
    },

    { type: 'rule' },

    // ── Beispiele ─────────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele',
      kicker: 'Gegensatz',
      titel: 'obwohl & trotzdem',
      items: [
        { text: '**Obwohl** ich müde **bin**, gehe ich zum Deutschkurs.', gl: '— verbo al final' },
        { text: 'Das Restaurant war teuer. **Trotzdem war** es jeden Abend voll.', gl: '— inversión' },
        { text: 'Er hat wenig Zeit, **trotzdem hilft** er mir immer.', gl: '— aun así' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'Zeit',
      titel: 'wenn & als',
      items: [
        { text: '**Wenn** ich in Berlin **bin**, besuche ich immer meine Tante.', gl: '— repetido → wenn' },
        { text: '**Wenn** es morgen **regnet**, bleiben wir zu Hause.', gl: '— futuro / condición → wenn' },
        { text: '**Als** wir in Spanien **gelebt haben**, waren wir oft am Meer.', gl: '— etapa pasada → als' },
        { text: '**Als** der Bus **kam**, habe ich dich gesehen.', gl: '— una vez en el pasado → als' },
      ],
    },
    {
      type: 'vergleich',
      titel: 'wenn oder als? — der direkte Vergleich',
      zeilen: [
        { satz: 'Als ich meine Oma zum letzten Mal besucht habe, hat sie viel erzählt.', label: 'einmal, Vergangenheit → als' },
        { satz: 'Immer wenn ich meine Oma besuche, backt sie einen Kuchen.', label: 'Wiederholung → wenn' },
      ],
    },

    { type: 'rule' },

    // ── Übungen ───────────────────────────────────────────────────
    {
      type: 'uebung',
      eyebrow: 'Anwendung — Übung 1 · Erkennen',
      frage: 'wenn oder als?',
      loesungLabel: 'Lösung',
      aufgaben: [
        '___ ich klein war, hatte ich einen Hund.',
        '___ ich Kopfschmerzen habe, trinke ich viel Wasser.',
        '___ wir letztes Jahr in Wien waren, hat es geschneit.',
        '___ du morgen kommst, koche ich für uns.',
      ],
      loesungen: [
        '**Als** — Zeitraum in der Vergangenheit ~~(la infancia)~~.',
        '**Wenn** — Wiederholung ~~(siempre que)~~.',
        '**Als** — einmal, Vergangenheit ~~(el año pasado, un viaje)~~.',
        '**Wenn** — Zukunft / Bedingung ~~(si / cuando vengas)~~.',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 2 · Umformen',
      frage: 'Sag es mit dem anderen Konnektor.',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Ich habe wenig Geld. Trotzdem gehe ich ins Konzert. ~~(obwohl)~~',
        'Obwohl das Wetter schlecht ist, machen wir ein Picknick. ~~(trotzdem)~~',
      ],
      loesungen: [
        'Ich gehe ins Konzert, **obwohl** ich wenig Geld **habe**. ~~El verbo pasa al final.~~',
        'Das Wetter ist schlecht. **Trotzdem machen** wir ein Picknick. ~~Inversión tras trotzdem.~~',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 3 · Selbst bilden',
      frage: 'Ergänze die Sätze über dein Leben.',
      loesungLabel: 'Mögliche Lösung',
      aufgaben: [
        '**Als** ich ein Kind war, …',
        '**Wenn** ich Stress habe, …',
        'Deutsch ist schwer. **Trotzdem** …',
      ],
      loesungen: [
        'Als ich ein Kind war, **habe ich** viel Fußball **gespielt**.',
        'Wenn ich Stress habe, **höre ich** Musik.',
        'Trotzdem **lerne ich** jeden Tag. ~~Cualquier contenido vale — comprueba solo la posición del verbo.~~',
      ],
    },

    { type: 'rule' },

    // ── Prüfungsbezug ─────────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Schreiben · Teil 1 (informelle E-Mail)',
      titel: '2 Lücken',
      anweisung: 'In der E-Mail an Freunde (~80 Wörter) erzählst du oft von früher und von Plänen. Ergänze obwohl, trotzdem, wenn oder als:',
      absaetze: [
        '„Liebe Anna, ich komme am Samstag, {1} ich gerade viel Arbeit habe. {2} ich das letzte Mal bei dir war, haben wir so viel gelacht!“',
      ],
      optionen: ['(1) Gegensatz + Verb am Ende', '(2) einmal in der Vergangenheit'],
      loesungLabel: 'Lösung',
      loesungen: [
        '{1} **obwohl** — Gegensatz, das Verb *habe* steht am Ende.',
        '{2} **Als** — das letzte Mal = einmal, Vergangenheit. ~~«wenn» sería un error clásico de hispanohablante.~~',
      ],
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'In der **Präsentation (Sprechen Teil 2)** erzählst du fast immer etwas von früher. Lern den Satzanfang auswendig: *„**Als ich ein Kind war**, …“* — er passt zu jedem Thema und zeigt sofort, dass du wenn/als beherrschst.',
    },

    { type: 'rule' },

    // ── Abschluss ─────────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Konnektor', 'Wann?', 'Verbposition'],
      zeilen: [
        ['obwohl', 'Gegensatz (aunque)', 'am Ende'],
        ['trotzdem', 'Gegensatz (aun así)', 'Inversion'],
        ['als', 'einmal / Zeitraum in der Vergangenheit', 'am Ende'],
        ['wenn', 'Wiederholung, Gegenwart, Zukunft, Bedingung', 'am Ende'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich drücke Gegensätze mit *obwohl* (Verb am Ende) und *trotzdem* (Inversion) aus.',
        'Ich wähle *als* für einmalige Vergangenheit und *wenn* für alles andere.',
        'Ich stelle das Verb im Nebensatz automatisch ans Ende.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Mit *als* erzählst du von der Vergangenheit — aber dafür brauchst du die richtige Verbform. Im Gespräch ist das das **Perfekt**: *ich habe gekauft, ich bin gegangen*. Wann **haben**, wann **sein**? Das klärt die nächste Lektion.',
    },
  ],
}
