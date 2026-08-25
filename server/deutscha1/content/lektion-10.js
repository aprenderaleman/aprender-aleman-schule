// Lektion 10 · Negation — nicht & kein
//
// Bloque 1 — Grammatik & Struktur. Estándar de la lección modelo 04.
// Regla de dos vías: kein/keine/keinen para sustantivos, nicht para el resto.
// Error clave del hispanohablante: la doble negación («no tengo nada»).

export default {
  spec: ['Bloque 1', 'Grammatik & Struktur', 'Niveau A1', 'Prüfungsrelevanz: Schreiben · Sprechen'],
  h1: 'Negation — nicht & kein',
  lead: '~~Decir «no» en alemán tiene dos palabras:~~ **kein** ~~para sustantivos~~ (*Ich habe kein Auto*) ~~y~~ **nicht** ~~para todo lo demás~~ (*Ich komme nicht*).',

  content: [
    // ── Lernziele ─────────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'Nomen mit **kein/keine/keinen** verneinen',
        'Verben und Adjektive mit **nicht** verneinen',
        'wissen: im Deutschen gibt es **nur eine** Negation pro Satz',
      ],
    },

    { type: 'rule' },

    // ── Kernwortschatz ────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Kernwortschatz — kein wie ein',
      kopf: ['Genus', 'ja ~~(afirmativo)~~', 'nein ~~(negado)~~'],
      zeilen: [
        ['maskulin', 'Ich habe einen Hund.', 'Ich habe **keinen** Hund.'],
        ['feminin', 'Ich habe eine Katze.', 'Ich habe **keine** Katze.'],
        ['neutral', 'Ich habe ein Auto.', 'Ich habe **kein** Auto.'],
        ['Plural', 'Ich habe Kinder.', 'Ich habe **keine** Kinder.'],
      ],
    },
    {
      type: 'wortschatz',
      eyebrow: 'Kernwortschatz — kleine Wörter zum Neinsagen',
      items: [
        { wort: 'nein', kollokation: 'Nein, danke.', es: 'no (respuesta)' },
        { wort: 'nicht', kollokation: 'Ich komme nicht.', es: 'no (niega el verbo)' },
        { wort: 'kein/keine/keinen', kollokation: 'Ich habe kein Geld.', es: 'ningún/ninguna' },
        { wort: 'leider', kollokation: 'Leider habe ich keine Zeit.', es: 'por desgracia' },
        { wort: 'die Zeit', kollokation: 'keine Zeit haben', es: 'el tiempo' },
        { wort: 'das Geld', kollokation: 'kein Geld haben', es: 'el dinero' },
      ],
      hinweis: '~~Ojo:~~ __nein__ ~~responde una pregunta,~~ __nicht__ ~~niega dentro de la frase. En español los dos son «no».~~',
    },

    { type: 'rule' },

    // ── Erklärung ─────────────────────────────────────────────────
    {
      type: 'steps',
      eyebrow: 'Erklärung',
      steps: [
        {
          badge: 'kein',
          titel: 'kein + Nomen',
          text: 'Vor einem Nomen ~~(sustantivo)~~ steht __kein__: *Ich habe **kein** Auto. Das ist **keine** Banane.* Es funktioniert wie *ein* — maskulin nach *haben* usw.: __keinen__.',
        },
        {
          badge: 'nicht',
          titel: 'nicht für den Rest',
          text: 'Verben, Adjektive, Orte: __nicht__. *Ich komme **nicht**. Das ist **nicht** teuer. Er wohnt **nicht** in Berlin.* ~~Posición simple: al final o justo antes de lo que niegas.~~',
        },
        {
          badge: '¡solo una!',
          titel: 'Nur eine Negation',
          text: '~~En español decimos «**no** tengo **nada**» — dos negaciones. En alemán solo una:~~ __Ich habe **nichts**.__ ~~(nunca «Ich habe nicht nichts»).~~ Auch: *Ich habe **keine** Zeit* — ohne extra *nicht*.',
        },
      ],
    },

    { type: 'rule' },

    // ── Beispiele ─────────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele',
      items: [
        { text: 'Ich habe **keinen** Bruder.', gl: '— No tengo hermano.' },
        { text: 'Wir haben **keine** Zeit.', gl: '— No tenemos tiempo.' },
        { text: 'Das ist **kein** Problem.', gl: '— No hay problema. (lit. eso no es problema)' },
        { text: 'Ich komme heute **nicht**.', gl: '— Hoy no vengo.' },
        { text: 'Der Kaffee ist **nicht** gut.', gl: '— El café no está bueno.' },
        { text: 'Nein, ich arbeite **nicht** am Sonntag.', gl: '— No, no trabajo el domingo.' },
      ],
    },

    { type: 'rule' },

    // ── Übungen ───────────────────────────────────────────────────
    {
      type: 'uebung',
      eyebrow: 'Anwendung — Übung 1 · nicht oder kein?',
      frage: 'Wähle: nicht oder kein-? ~~(¿Hay un sustantivo? → kein. ¿No? → nicht.)~~',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Ich habe ___ Auto.',
        'Ich wohne ___ in Madrid.',
        'Er hat ___ Zeit.',
        'Das Hotel ist ___ teuer.',
      ],
      loesungen: [
        'Ich habe **kein** Auto. ~~(das Auto → sustantivo)~~',
        'Ich wohne **nicht** in Madrid. ~~(niega el verbo/lugar)~~',
        'Er hat **keine** Zeit.',
        'Das Hotel ist **nicht** teuer. ~~(adjetivo)~~',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 2 · Antworte mit Nein',
      frage: 'Antworte negativ. ~~(Responde en negativo, frase completa.)~~',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Hast du einen Hund? — Nein, …',
        'Kommst du morgen? — Nein, …',
        'Haben Sie Kinder? — Nein, …',
      ],
      loesungen: [
        'Nein, ich habe **keinen** Hund.',
        'Nein, ich komme morgen **nicht**.',
        'Nein, ich habe **keine** Kinder.',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 3 · Schreibe über dich',
      frage: 'Schreibe 3 negative Sätze über dich: 1× mit kein-, 1× mit nicht, 1× frei. ~~(3 frases negativas sobre ti.)~~',
      loesungLabel: 'Muster',
      loesung: '*Ich habe kein Auto. Ich arbeite nicht am Wochenende. Ich trinke keinen Kaffee.* ~~Cualquier variante vale si hay UNA sola negación por frase.~~',
    },

    { type: 'rule' },

    // ── Prüfungsbezug ─────────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Schreiben · Teil 2',
      titel: 'Kurzer persönlicher Text — absagen',
      anweisung: 'Im Schreiben Teil 2 schreibst du einen kurzen Text (ca. 30 Wörter), z. B. eine Absage ~~(cancelar una cita)~~. Ergänze:',
      absaetze: [
        '„Liebe Anna, ich komme am Samstag leider {1}. Ich habe {2} Zeit — ich arbeite. Viele Grüße, Carlos“',
      ],
      loesungLabel: 'Lösung',
      loesungen: [
        '{1} ich komme am Samstag leider **nicht**',
        '{2} Ich habe **keine** Zeit.',
      ],
      kommentar: '~~«Leider» (por desgracia) suaviza la negativa — úsalo siempre que canceles algo por escrito.~~',
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Der schnelle Test in der Prüfung: **Nomen? → kein.** **Kein Nomen? → nicht.** ~~Y recuerda: nunca dos negaciones — «no…nada» del español no se traduce doble.~~',
    },

    { type: 'rule' },

    // ── Abschluss ─────────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Regel', 'Beispiel'],
      zeilen: [
        ['Nomen → **kein/keine/keinen**', 'Ich habe **keinen** Hund / **keine** Zeit / **kein** Geld.'],
        ['Verb, Adjektiv, Ort → **nicht**', 'Ich komme **nicht**. Es ist **nicht** teuer.'],
        ['nur **eine** Negation pro Satz', 'Ich habe nichts. ~~(no «nicht nichts»)~~'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich verneine Nomen mit kein/keine/keinen.',
        'Ich verneine Verben und Adjektive mit nicht.',
        'Ich benutze nur eine Negation pro Satz.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Du kannst sagen, was du hast — und was **nicht**. In der nächsten Lektion sagst du, **wem** etwas gehört: *mein Bruder, deine Mutter, sein Auto*. Die Possessivartikel — perfekt, um über deine **Familie** zu sprechen.',
    },
  ],
}
