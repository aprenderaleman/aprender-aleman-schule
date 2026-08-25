// Lektion 04 · Konnektoren I — weil, denn, deshalb

export default {
  spec: ['Bloque 1', 'Grammatik & Struktur', 'Niveau B1', 'Prüfungsrelevanz: alle Module'],
  h1: 'Konnektoren I — weil, denn, deshalb',
  lead: 'Warum? Drei Antworten: **weil** (Verb am Ende), **denn** (Verb auf Position 2), **deshalb** (Inversion). ~~Tres formas de decir «porque / por eso».~~',

  content: [
    // ── Lernziele ─────────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'Gründe mit *weil* und *denn* nennen',
        'Folgen mit *deshalb* ausdrücken',
        'die drei Verbpositionen sicher unterscheiden',
      ],
    },

    { type: 'rule' },

    // ── Kernwortschatz ────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Kernwortschatz',
      kopf: ['Konnektor', 'Spanisch', 'Verb'],
      zeilen: [
        ['weil', 'porque', 'am Ende'],
        ['denn', 'porque / pues', 'Position 2'],
        ['deshalb', 'por eso', 'Inversion: Verb vor Subjekt'],
        ['deswegen / darum', 'por eso ~~(= deshalb)~~', 'Inversion'],
      ],
    },
    {
      type: 'beispiele',
      titel: 'Typische Gründe im Alltag',
      items: [
        { text: '**krank sein** · **müde sein** · **keine Zeit haben** · **keine Lust haben**' },
        { text: '**im Stau stehen** ~~(estar en un atasco)~~ · **einen Termin haben** · **das Wetter**' },
      ],
    },

    { type: 'rule' },

    // ── Erklärung ─────────────────────────────────────────────────
    {
      type: 'steps',
      eyebrow: 'Erklärung — drei Wörter, drei Positionen',
      steps: [
        {
          badge: 'Verb Ende',
          titel: 'weil — der Grund (Nebensatz)',
          text: '*Weil* schickt das Verb __ans Ende__. ~~En español el verbo nunca se mueve — aquí sí.~~\n__Ich bleibe zu Hause, weil ich krank **bin**.__',
        },
        {
          badge: 'Verb 2',
          titel: 'denn — der Grund (Hauptsatz)',
          text: 'Nach *denn* bleibt alles normal: Subjekt + Verb auf __Position 2__. Ein *denn*-Satz steht nie am Anfang.\n__Ich bleibe zu Hause, denn ich **bin** krank.__',
        },
        {
          badge: 'Inversion',
          titel: 'deshalb — die Folge',
          text: '*Deshalb* steht auf Position 1 → danach kommt __sofort das Verb__, dann das Subjekt. ~~Ojo: primero la causa, luego «deshalb» + consecuencia.~~\n__Ich bin krank, deshalb **bleibe ich** zu Hause.__',
        },
      ],
    },
    {
      type: 'prose',
      card: true,
      absaetze: [
        '**Der typische Fehler:** *„weil ich bin krank“* ✗ — das ist spanische Wortstellung ~~(«porque estoy enfermo»)~~. Nach **weil** wandert das Verb immer ans Ende: **weil ich krank bin** ✓.',
        'Merke auch die Logik: **weil/denn** + Grund ~~(la causa)~~, **deshalb** + Folge ~~(la consecuencia)~~. Die Sätze drehen sich um: *Ich lerne Deutsch, weil ich in Berlin arbeite.* = *Ich arbeite in Berlin, deshalb lerne ich Deutsch.*',
      ],
    },

    { type: 'rule' },

    // ── Beispiele ─────────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele',
      items: [
        { text: 'Ich nehme den Bus, **weil** mein Auto kaputt **ist**.', gl: '— weil → verbo al final' },
        { text: 'Wir kommen später, **denn** wir **stehen** im Stau.', gl: '— denn → verbo en posición 2' },
        { text: 'Es regnet, **deshalb nehme** ich den Schirm mit.', gl: '— deshalb → inversión' },
        { text: 'Sie hat einen Termin, **deswegen kann** sie nicht kommen.', gl: '— deswegen = deshalb' },
        { text: '**Warum** lernst du Deutsch? — **Weil** ich in Deutschland **arbeite**.', gl: '— respuesta corta a Warum?' },
      ],
    },
    {
      type: 'vergleich',
      titel: 'Dieselbe Idee — drei Strukturen',
      zeilen: [
        { satz: 'Ich gehe früh ins Bett, weil ich morgen arbeiten muss.', label: 'weil → Verb am Ende' },
        { satz: 'Ich gehe früh ins Bett, denn ich muss morgen arbeiten.', label: 'denn → Verb Position 2' },
        { satz: 'Ich muss morgen arbeiten, deshalb gehe ich früh ins Bett.', label: 'deshalb → Inversion' },
      ],
    },

    { type: 'rule' },

    // ── Übungen ───────────────────────────────────────────────────
    {
      type: 'uebung',
      eyebrow: 'Anwendung — Übung 1 · Erkennen',
      frage: 'Grund oder Folge? Und wo steht das Verb?',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Ich trinke Tee, weil ich Halsschmerzen habe.',
        'Der Zug hat Verspätung, deshalb warten wir am Gleis.',
        'Wir bleiben drinnen, denn es ist zu kalt.',
      ],
      loesungen: [
        '**Grund** (weil) → Verb am Ende: *habe*.',
        '**Folge** (deshalb) → Inversion: *warten wir*.',
        '**Grund** (denn) → Verb auf Position 2: *ist*.',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 2 · Sätze verbinden',
      frage: 'Verbinde die zwei Sätze mit dem Konnektor in Klammern.',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Ich kaufe online ein. Es ist billiger. ~~(weil)~~',
        'Anna ist müde. Sie geht früh schlafen. ~~(deshalb)~~',
        'Wir nehmen ein Taxi. Der Bus kommt nicht. ~~(denn)~~',
      ],
      loesungen: [
        'Ich kaufe online ein, **weil** es billiger **ist**.',
        'Anna ist müde, **deshalb geht sie** früh schlafen.',
        'Wir nehmen ein Taxi, **denn** der Bus **kommt** nicht.',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 3 · Selbst antworten',
      frage: 'Antworte in einem ganzen Satz.',
      loesungLabel: 'Mögliche Lösung',
      aufgaben: [
        'Warum lernst du Deutsch? ~~(weil)~~',
        'Du hast keine Zeit. Was ist die Folge? ~~(deshalb)~~',
      ],
      loesungen: [
        'Ich lerne Deutsch, **weil** ich die B1-Prüfung machen **möchte**. ~~Vale cualquier motivo — el verbo debe ir al final.~~',
        'Ich habe keine Zeit, **deshalb komme** ich morgen. ~~Vale cualquier consecuencia — tras deshalb, primero el verbo.~~',
      ],
    },

    { type: 'rule' },

    // ── Prüfungsbezug ─────────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Schreiben · Teil 2 (Forumsbeitrag)',
      titel: '2 Lücken',
      anweisung: 'Im Forumsbeitrag (deine Meinung, ~80 Wörter) musst du deine Meinung **begründen**. Ergänze weil, denn oder deshalb:',
      absaetze: [
        '„Ich kaufe oft online ein, {1} es schneller ist. Die Geschäfte in meiner Stadt schließen früh, {2} bestelle ich abends im Internet.“',
      ],
      optionen: ['(1) das Verb steht am Ende: ist', '(2) danach kommt sofort das Verb: bestelle'],
      loesungLabel: 'Lösung',
      loesungen: [
        '{1} **weil** — das Verb *ist* steht am Ende → Nebensatz.',
        '{2} **deshalb** — danach folgt sofort *bestelle ich* → Inversion. ~~«denn» no funciona: el verbo iría detrás del sujeto.~~',
      ],
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Die Prüfer bewerten im **Schreiben** deine *Strukturen*. Ein Satz mit **weil** oder **deshalb** zeigt sofort B1-Niveau. Und im **Sprechen Teil 3** begründest du dein Feedback: *„Deine Präsentation war interessant, **weil** du viele Beispiele genannt **hast**.“*',
    },

    { type: 'rule' },

    // ── Abschluss ─────────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Konnektor', 'Bedeutung', 'Verbposition'],
      zeilen: [
        ['weil', 'Grund (porque)', 'am Ende'],
        ['denn', 'Grund (porque)', 'Position 2 — nie am Satzanfang'],
        ['deshalb', 'Folge (por eso)', 'Inversion: Verb + Subjekt'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich nenne Gründe mit *weil* — und stelle das Verb ans Ende.',
        'Ich benutze *denn* mit normaler Wortstellung (Verb auf Position 2).',
        'Ich drücke Folgen mit *deshalb* + Inversion aus.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Grund und Folge kannst du jetzt. Aber was, wenn etwas **trotz** eines Grundes passiert? Dafür gibt es **obwohl** und **trotzdem** — und dazu das klassische Problem *wenn* oder *als* ~~(«cuando» tiene dos traducciones)~~. Das ist das Thema der nächsten Lektion.',
    },
  ],
}
