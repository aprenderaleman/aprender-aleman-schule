// Lektion 11 · Komparativ & Superlativ
//
// Bloque 1 · Grammatik & Struktur — sigue el estándar de lektion-08.js:
// 8 secciones (FORMAT.md), nivel B1, máximo apoyo en español.
// Espiral: la formación básica (-er / am -sten, als/wie) viene del A2
// (Lektion 13) y aquí solo se repasa. El núcleo B1: formas atributivas
// con declinación (enlace con Lektion 10), je … desto, immer + Komparativ,
// superlativo como sustantivo y Redemittel para el Forumsbeitrag.

export default {
  spec: ['Bloque 1', 'Grammatik & Struktur', 'Niveau B1', 'Prüfungsrelevanz: Schreiben & Sprechen'],
  h1: 'Komparativ & Superlativ',
  lead: 'Die Formen kennst du aus A2 — jetzt vergleichst du **vor dem Nomen** (*ein schnellerer Zug*), mit **je … desto** und mit **das Beste ist …**',

  content: [
    // ── Lernziele ─────────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'Komparativ und Superlativ **vor dem Nomen** mit der richtigen Endung benutzen (ein schnellerer Zug, die schönste Stadt)',
        'Sätze mit **je … desto/umso** und mit **immer + Komparativ** bilden',
        'den Superlativ als Nomen verwenden (das Beste, das Wichtigste)',
        'im Forumsbeitrag (Schreiben Teil 2) mit Vergleichen argumentieren',
      ],
    },

    { type: 'rule' },

    // ── Kernwortschatz ────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Kernwortschatz — die Formen, die du brauchst',
      kopf: ['Grundform', 'Komparativ', 'Superlativ'],
      zeilen: [
        ['alt', '**ä**lter', 'am **ä**ltesten'],
        ['groß', 'gr**ö**ßer', 'am gr**ö**ßten'],
        ['hoch', 'h**ö**her', 'am h**ö**chsten'],
        ['teuer', 'teurer', 'am teuersten'],
        ['nah', 'n**ä**her', 'am n**ä**chsten'],
        ['gut', '**besser**', 'am **besten**'],
        ['gern', '**lieber**', 'am **liebsten**'],
        ['viel', '**mehr**', 'am **meisten**'],
      ],
    },

    { type: 'rule' },

    // ── Erklärung ─────────────────────────────────────────────────
    {
      type: 'prose',
      eyebrow: 'Erklärung — das kennst du schon aus A2',
      card: true,
      absaetze: [
        '**Kurzes Update:** Komparativ = Adjektiv + **-er** (nie *mehr schnell*), Superlativ = **am -sten**, kurze Adjektive mit a/o/u → Umlaut (*älter, größer*). Unterschied → Komparativ + **als**, Gleichheit → **so … wie**. Und *„größer **wie** ich“* bleibt auch auf B1 **falsch** — nach dem Komparativ steht immer ==als==. ~~Si algo no te suena, repasa antes la lección de comparativos del A2.~~ Alles Neue kommt jetzt.',
      ],
    },
    {
      type: 'steps',
      eyebrow: 'Erklärung — die B1-Stufe',
      steps: [
        {
          badge: 'vor dem Nomen',
          titel: 'ein schnellerer Zug',
          text: 'Vor dem Nomen bekommt der Komparativ die __Adjektivendung aus Lektion 10__ — direkt nach dem -er: ein schneller**er** Zug, eine besser**e** Idee, mit einem älter**en** Kollegen. ~~Dos sufijos seguidos: primero -er, luego la terminación de la Lektion 10.~~',
        },
        {
          badge: 'der -ste',
          titel: 'die schönste Stadt',
          text: 'Superlativ vor dem Nomen: __Artikel + -st + Endung__ — die schönst**e** Stadt, der wichtigst**e** Grund, mit dem best**en** Freund. **am -sten** steht nur nach dem Verb: *Diese Stadt ist am schönsten.*',
        },
        {
          badge: 'je … desto',
          titel: 'Der doppelte Komparativ',
          text: 'Zwei Komparative, ein Zusammenhang: __je__ + Komparativ + Nebensatz (Verb am **Ende**), dann __desto/umso__ + Komparativ + Verb **sofort danach**: *Je mehr ich übe, desto sicherer werde ich.* ~~«cuanto más…, más…» — ojo con la posición del verbo en cada mitad.~~',
        },
        {
          badge: 'immer + Komp.',
          titel: 'Entwicklungen beschreiben',
          text: '__immer + Komparativ__ = etwas verändert sich Schritt für Schritt: *Die Mieten werden **immer teurer**. Mein Deutsch wird **immer besser**.* ~~«cada vez más caro» — nunca «immer mehr teuer».~~',
        },
      ],
    },
    {
      type: 'vergleich',
      titel: 'am schnellsten oder der schnellste?',
      zeilen: [
        { satz: 'Der ICE fährt **am schnellsten**.', label: 'nach dem Verb → am -sten' },
        { satz: 'Der ICE ist der **schnellste** Zug in Deutschland.', label: 'vor dem Nomen → Artikel + -ste' },
      ],
    },
    {
      type: 'prose',
      card: true,
      absaetze: [
        '**Der Superlativ als Nomen** — mit Artikel und **großem** Anfangsbuchstaben: **das Beste**, **das Wichtigste**, **das Schönste**. *Das Beste an Berlin sind die Parks.* Sehr stark am Satzanfang deiner Meinung: *Am wichtigsten ist für mich, dass …* ~~«lo mejor», «lo más importante»: el alemán lo dice con das + superlativo en mayúscula.~~',
      ],
    },

    { type: 'rule' },

    // ── Beispiele ─────────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele',
      kicker: 'Deklination',
      titel: 'Vor dem Nomen',
      items: [
        { text: 'Ich suche eine größer**e** Wohnung.', gl: '— Akkusativ feminin: -e' },
        { text: 'Gibt es keinen billiger**en** Tarif?', gl: '— Akkusativ maskulin: -en' },
        { text: 'Das war der schönst**e** Tag des Jahres.', gl: '— Superlativ + -e' },
        { text: 'Ich fahre mit dem nächst**en** Zug.', gl: '— Dativ: -en' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'Strukturen',
      titel: 'je … desto · immer · als Nomen',
      items: [
        { text: '**Je** früher du buchst, **desto** billiger ist das Ticket.', gl: '— Verb: Ende / sofort' },
        { text: '**Je** mehr Leute mitmachen, **umso** besser wird das Fest.', gl: '— umso = desto' },
        { text: 'Das Wetter wird **immer schlechter**.', gl: '— Entwicklung' },
        { text: '**Das Beste** an meinem Job sind die Kollegen.' },
        { text: '**Am wichtigsten** ist mir, dass die Wohnung zentral liegt.' },
      ],
    },
    {
      type: 'redemittel',
      eyebrow: 'Beispiele — Redemittel für den Forumsbeitrag',
      gruppen: [
        {
          fn: 'Meinung mit Vergleich',
          saetze: [
            { satz: 'Meiner Meinung nach ist das Fahrrad die **bessere** Wahl.', gloss: '~~entre dos opciones → comparativo, no superlativo~~' },
            { satz: 'Ein noch **größeres** Problem ist für mich der Preis.' },
          ],
        },
        {
          fn: 'Argument auf den Punkt bringen',
          saetze: [
            { satz: 'Je mehr Autos in der Stadt fahren, desto schlechter wird die Luft.' },
            { satz: 'Das Wichtigste ist für mich, dass alle mitmachen können.' },
          ],
        },
      ],
    },

    { type: 'rule' },

    // ── Übungen ───────────────────────────────────────────────────
    {
      type: 'uebung',
      eyebrow: 'Anwendung — Übung 1 · Erkennen',
      frage: 'Richtig oder falsch?',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Ich habe einen neueren Computer gekauft.',
        'Je billiger das Hotel ist, desto ich bin zufriedener.',
        'Das ist die schönste Stadt, die ich kenne.',
        'Mein Deutsch wird immer mehr besser.',
      ],
      loesungen: [
        '**Richtig** — Komparativ + Endung -en (Akkusativ maskulin).',
        '**Falsch** → … **desto zufriedener bin ich**. Nach *desto* kommen Komparativ und dann sofort das Verb.',
        '**Richtig** — Superlativ vor dem Nomen: die schönst**e** Stadt.',
        '**Falsch** → … wird **immer besser**. Nie *mehr* + Komparativ.',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 2 · Umformen',
      frage: 'Bilde die Struktur in Klammern.',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Meine Wohnung ist klein. Ich suche eine andere. ~~(comparativo delante del sustantivo)~~',
        'viel üben → gut sprechen (je … desto)',
        'Die Mieten steigen jedes Jahr. (immer + Komparativ)',
        'Ich fahre mit (mein gut Freund) in den Urlaub. (Superlativ + Endung)',
      ],
      loesungen: [
        'Ich suche eine **größere** Wohnung. ~~(-er + terminación -e de acusativo femenino)~~',
        '**Je** mehr ich übe, **desto** besser spreche ich. ~~(también correcto: umso besser)~~',
        'Die Mieten werden **immer höher**. ~~(o: immer teurer)~~',
        'Ich fahre mit meinem **besten** Freund in den Urlaub. — Dativ → -en.',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 3 · Produzieren',
      frage: 'Forumsthema: „Leben in der Stadt oder auf dem Land?“ Schreib drei Sätze.',
      loesungLabel: 'Mögliche Lösung',
      aufgaben: [
        'Satz 1: ein Vergleich **vor dem Nomen** · Satz 2: **je … desto** · Satz 3: **Das Wichtigste ist …**',
      ],
      loesungen: [
        'Auf dem Land findet man **günstigere** Wohnungen und eine **ruhigere** Umgebung. **Je** größer die Stadt ist, **desto** teurer sind die Mieten. **Das Wichtigste** ist für mich, dass ich schnell zur Arbeit komme. ~~Valen otras ideas — comprueba: terminación tras -er, verbo al final tras je, verbo justo tras el comparativo con desto.~~',
      ],
    },

    { type: 'rule' },

    // ── Prüfungsbezug ─────────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Schreiben Teil 2 · Forumsbeitrag',
      titel: '3 Lücken',
      anweisung: 'Im Forumsbeitrag (~80 Wörter) begründest du deine Meinung — mit Vergleichen sammelst du Punkte beim Kriterium Strukturen. Ergänze:',
      absaetze: [
        '„Ich kaufe lieber im {1} (klein) Laden um die Ecke als im Supermarkt. Je freundlicher die Bedienung ist, {2} lieber komme ich wieder. {3} (wichtig) ist für mich aber die Qualität.“',
      ],
      optionen: ['(1) klein → Komparativ + Endung (Dativ)', '(2) je …, ___?', '(3) wichtig → Superlativ als Nomen'],
      loesungLabel: 'Lösung',
      loesungen: [
        '{1} im **kleineren** Laden — Komparativ + Dativ-Endung -en (Lektion 10).',
        '{2} **desto** (oder *umso*) — danach Komparativ + Verb: desto lieber komme ich wieder.',
        '{3} **Das Wichtigste** — Superlativ als Nomen, großgeschrieben.',
      ],
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Beim **Sprechen Teil 1 (Gemeinsam etwas planen)** überzeugst du mit B1-Vergleichen: *„Das ist die **bessere** Idee — **je früher** wir anfangen, **desto mehr** schaffen wir.“* Genau solche Strukturen zählen bei den Kriterien unter **Strukturen** — da liegen die B1-Punkte, nicht bei *größer als*.',
    },

    { type: 'rule' },

    // ── Abschluss ─────────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Struktur', 'Regel', 'Beispiel'],
      zeilen: [
        ['vor dem Nomen', 'Komparativ/Superlativ + Adjektivendung', 'ein schneller**er** Zug · die schönst**e** Stadt'],
        ['nach dem Verb', 'am -sten', 'Der Zug ist am schnellsten.'],
        ['je … desto/umso', 'je + Komp. (Verb Ende) · desto + Komp. + Verb', 'Je mehr ich übe, desto besser spreche ich.'],
        ['immer + Komp.', 'Entwicklung', 'immer teurer, immer besser'],
        ['als Nomen', 'Artikel + Superlativ, groß', 'das Beste · das Wichtigste'],
        ['aus A2', 'Unterschied → als · Gleichheit → so … wie', 'größer als · so alt wie'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich benutze Komparativ und Superlativ vor dem Nomen mit der richtigen Endung.',
        'Ich bilde Sätze mit je … desto und immer + Komparativ — mit der richtigen Verbposition.',
        'Ich verwende das Beste und das Wichtigste als Nomen.',
        'Ich argumentiere im Forumsbeitrag mit Vergleichen.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: '*Die schönste Stadt, **die** ich kenne …* — für solche Sätze brauchst du einen Nebensatz, der ein Nomen genauer beschreibt: den **Relativsatz**. Das ist das Thema der nächsten Lektion.',
    },
  ],
}
