// Lektion 33 · Sprechen Teil 3 — Feedback geben & Fragen
//
// Bloque 2 · Modul Sprechen. Auf die Präsentation des Partners reagieren
// (danken, loben, fragen) und selbst auf Fragen antworten. Cierra el
// Bloque 2: tabla-síntesis estratégica de los 4 módulos (65/40/60/15).

export default {
  spec: ['Bloque 2', 'Prüfungsstrategie', 'Niveau B1', 'Prüfungsrelevanz: Sprechen'],
  h1: 'Sprechen Teil 3 — Feedback geben & Fragen',
  lead: 'Danken, etwas Positives sagen, eine Frage stellen — und ruhig antworten, wenn du dran bist. ~~El Teil más corto del examen: tres frases bien dichas bastan.~~',

  content: [
    // ── Lernziele ─────────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'mich für die Präsentation bedanken und etwas Positives sagen',
        'eine einfache Frage zur Präsentation stellen',
        'auf Fragen zu meiner eigenen Präsentation ruhig antworten',
        'meine Strategie für alle vier Module kennen',
      ],
    },

    { type: 'rule' },

    // ── Kernwortschatz ────────────────────────────────────────────
    {
      type: 'wortschatz',
      eyebrow: 'Kernwortschatz',
      items: [
        { wort: 'sich bedanken', kollokation: 'sich für die Präsentation bedanken', es: 'dar las gracias' },
        { wort: 'das Feedback', kollokation: 'kurzes Feedback geben', es: 'valoración, comentario' },
        { wort: 'interessant', kollokation: 'Das war sehr interessant.', es: 'interesante' },
        { wort: 'spannend', kollokation: 'ein spannendes Thema', es: 'muy interesante, fascinante' },
        { wort: 'gefallen', kollokation: 'Mir hat gefallen, dass …', es: 'gustar' },
        { wort: 'die Frage, -n', kollokation: 'eine Frage stellen', es: 'pregunta' },
        { wort: 'beantworten', kollokation: 'eine Frage beantworten', es: 'responder (a algo)' },
        { wort: 'erklären', kollokation: 'Kannst du das genauer erklären?', es: 'explicar' },
        { wort: 'genau', kollokation: 'Das weiß ich nicht genau.', es: 'exactamente' },
        { wort: 'ehrlich gesagt', kollokation: 'Ehrlich gesagt esse ich selten Fast Food.', es: 'sinceramente, la verdad' },
        { wort: 'glauben', kollokation: 'Ich glaube, das stimmt.', es: 'creer' },
        { wort: 'recht haben', kollokation: 'Da hast du recht.', es: 'tener razón' },
      ],
    },

    { type: 'rule' },

    // ── Erklärung ─────────────────────────────────────────────────
    {
      type: 'steps',
      eyebrow: 'Erklärung — die Formel für Teil 3',
      steps: [
        {
          titel: 'Danken',
          text: '__„Danke für deine Präsentation!“__ — der einfachste Einstieg, immer richtig.',
        },
        {
          titel: 'Etwas Positives sagen',
          text: '__„Das war sehr interessant.“__ Oder konkreter: __„Mir hat gefallen, dass du ein Beispiel erzählt hast.“__ ~~ojo: tras «Mir hat gefallen, dass …» el verbo va al final.~~',
        },
        {
          titel: 'Eine Frage stellen',
          text: '**Eine** einfache Frage reicht: eine W-Frage (__„Wie oft …?“__) oder eine Ja/Nein-Frage (__„Kaufst du auch …?“__). Nimm ein Detail aus der Präsentation.',
        },
      ],
    },
    {
      type: 'prose',
      card: true,
      titel: 'Wenn du gefragt wirst',
      absaetze: [
        'Auch die Prüfer können dir Fragen stellen. Kurze, ehrliche Antworten reichen völlig: **zwei bis drei Sätze**. Wenn du etwas nicht weißt: **„Das weiß ich nicht genau, aber ich glaube …“** — das ist eine perfekte B1-Antwort. ~~No hay respuestas «incorrectas»: evalúan tu alemán, no tus conocimientos.~~',
      ],
    },

    { type: 'rule' },

    // ── Beispiele / Redemittel + Modell ───────────────────────────
    {
      type: 'redemittel',
      eyebrow: 'Beispiele — Redemittel für Teil 3',
      gruppen: [
        {
          fn: 'Danken & etwas Positives sagen',
          saetze: [
            { satz: 'Danke für deine Präsentation!' },
            { satz: 'Das war sehr interessant / ein spannendes Thema.' },
            { satz: 'Mir hat gefallen, dass du so viele Beispiele genannt hast.' },
          ],
        },
        {
          fn: 'Eine Frage stellen',
          saetze: [
            { satz: 'Ich habe eine Frage: …?' },
            { satz: 'Du hast gesagt, dass … Warum ist das so?' },
            { satz: 'Kannst du das genauer erklären?' },
          ],
        },
        {
          fn: 'Auf Fragen antworten',
          saetze: [
            { satz: 'Danke für die Frage!' },
            { satz: 'Das ist eine gute Frage. Ich denke, …' },
            { satz: 'Ehrlich gesagt …' },
            { satz: 'Das weiß ich nicht genau, aber ich glaube, …', gloss: '~~tu salida de emergencia para cualquier pregunta difícil~~' },
          ],
        },
      ],
    },
    {
      type: 'modell',
      eyebrow: 'Beispiele — Modell',
      thema: 'Nach der Präsentation „Einkaufen im Internet“',
      woerter: 'zwei Mini-Dialoge',
      absaetze: [
        '**Partnerin:** Danke für deine Präsentation, das war sehr interessant! Mir hat gefallen, dass du ein Beispiel erzählt hast. Ich habe eine Frage: Wie oft bestellst du etwas im Internet?\n**Du:** Danke für die Frage! Ich glaube, zwei- oder dreimal im Monat — meistens Bücher.',
        '**Prüfer:** Sie haben gesagt, dass kleine Geschäfte Probleme bekommen. Ist das in Ihrem Heimatland auch so?\n**Du:** Das ist eine gute Frage. Das weiß ich nicht genau, aber ich glaube ja — in meiner Stadt haben einige kleine Läden geschlossen.',
      ],
      annotationen: [
        { tag: 'Formel', text: 'Danken + ein Kompliment + **eine** Frage — mehr verlangt Teil 3 nicht.' },
        { tag: 'Notausgang', text: '„Das weiß ich nicht genau, aber ich glaube …“ rettet dich bei jeder schweren Frage.' },
        { tag: 'du / Sie', text: 'Mit deinem Partner sprichst du in der Regel **du**, mit den Prüfern immer **Sie**.' },
      ],
    },

    { type: 'rule' },

    // ── Übungen ───────────────────────────────────────────────────
    {
      type: 'uebung',
      eyebrow: 'Anwendung — Übung 1 · Erkennen',
      frage: 'Feedback, Frage oder Antwort?',
      loesungLabel: 'Lösung',
      aufgaben: [
        '„Mir hat gefallen, dass du über deine Familie gesprochen hast.“',
        '„Kannst du das genauer erklären?“',
        '„Ehrlich gesagt weiß ich das nicht genau.“',
        '„Das war ein spannendes Thema!“',
      ],
      loesungen: [
        '**Feedback** — ein konkretes Kompliment.',
        '**Frage** — bittet um mehr Details.',
        '**Antwort** — ehrlich und völlig okay auf B1.',
        '**Feedback** — allgemeines Lob.',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 2 · Reagieren',
      frage: 'Dein Partner hat über „Fast Food“ präsentiert. Reagiere.',
      loesungLabel: 'Mögliche Lösung',
      aufgaben: [
        'Bedanke dich und sag etwas Positives.',
        'Stell eine einfache Frage zu seinem Alltag.',
      ],
      loesungen: [
        '„Danke für deine Präsentation! Das war sehr interessant — mir hat gefallen, dass du ehrlich über deine Gewohnheiten gesprochen hast.“',
        '„Ich habe eine Frage: Wie oft isst du Fast Food?“ ~~una W-Frage simple es suficiente~~',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 3 · Produzieren',
      frage: 'Jetzt wirst du gefragt. Antworte in zwei bis drei Sätzen.',
      loesungLabel: 'Mögliche Lösung',
      aufgaben: [
        '„Du hast gesagt, dass Musik dir beim Lernen hilft. Welche Musik hörst du dann?“',
        '„Ist Onlineshopping in Ihrem Heimatland teurer als in Deutschland?“ ~~no conoces los precios exactos — usa la salida de emergencia~~',
      ],
      loesungen: [
        '„Danke für die Frage! Beim Lernen höre ich ruhige Musik ohne Text, meistens Klaviermusik. Mit Text kann ich mich nicht konzentrieren.“',
        '„Das ist eine gute Frage. Das weiß ich nicht genau, aber ich glaube, einige Produkte sind billiger und andere teurer.“',
      ],
    },

    { type: 'rule' },

    // ── Prüfungsbezug ─────────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Sprechen · Teil 3',
      titel: 'Feedback & Fragen',
      anweisung: 'Deine Partnerin hat über „Sport im Alltag“ präsentiert. Ergänze deine Reaktion:',
      absaetze: [
        '**Du:** „{1} deine Präsentation! Das war sehr interessant. {2}, dass du jeden Tag mit dem Fahrrad fährst. Ich habe eine Frage: {3}?“',
      ],
      optionen: ['(1) danken', '(2) etwas Positives sagen', '(3) eine einfache Frage stellen'],
      loesungLabel: 'Lösung',
      loesungen: [
        '{1} **Danke für** deine Präsentation!',
        '{2} **Mir hat gefallen** — danach kommt der „dass“-Satz mit dem Verb am Ende.',
        '{3} z. B. **Fährst du auch im Winter mit dem Fahrrad** — jede einfache Frage zum Thema ist richtig.',
      ],
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Hör bei der Präsentation deines Partners **aktiv zu** und merk dir **ein Detail** — daraus machst du dein Kompliment und deine Frage. So wirkt dein Feedback echt, und du musst nichts erfinden.',
    },

    { type: 'rule' },

    // ── Abschluss — cierre del Bloque 2 ───────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung — deine Strategie für die vier Module',
      kopf: ['Modul', 'Zeit', 'Deine wichtigste Strategie'],
      zeilen: [
        ['Lesen', '65 Min.', 'Erst die Aufgabe, dann den Text lesen — die Zeit pro Teil im Blick behalten'],
        ['Hören', 'ca. 40 Min.', 'Vor dem Hören die Aufgaben lesen; ein Audio verpasst? Abhaken und weiter'],
        ['Schreiben', '60 Min.', '20/25/15 Minuten für die drei Teile — immer alle Inhaltspunkte abarbeiten'],
        ['Sprechen', 'ca. 15 Min.', 'Gerüste & Redemittel benutzen; nachfragen statt schweigen'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich reagiere auf eine Präsentation mit Dank, einem Kompliment und einer Frage.',
        'Ich antworte ruhig — auch wenn ich etwas nicht genau weiß.',
        'Ich kenne für jedes der vier Module meine wichtigste Strategie.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Damit ist dein Werkzeugkasten komplett: Du kennst alle vier Module und ihre Strategien. Jetzt kommt der Stoff, mit dem du sie füllst — die **Themenfelder der Prüfung**. Los geht es in der nächsten Lektion mit „Arbeit & Beruf“: Wortschatz und Redemittel für eines der häufigsten Prüfungsthemen.',
    },
  ],
}
