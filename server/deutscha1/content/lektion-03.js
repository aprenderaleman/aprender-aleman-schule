// Lektion 03 · Diagnose A1 — Standortbestimmung
//
// Bloque 0 «Einführung» — mini-test suave con remisión a lecciones
// (títulos y bloques según server/deutscha1/blocks.js), plan de los
// 5 bloques y consejos de estudio para principiantes absolutos.

export default {
  spec: ['Bloque 0', 'Einführung', 'Niveau A1', 'Prüfungsrelevanz: Standortbestimmung'],
  h1: 'Diagnose A1 — Standortbestimmung',
  lead: '~~¿Ya sabes algo de alemán? Un mini-test suave para situarte — y el mapa completo del curso. Si aún no sabes nada: perfecto, este curso empieza de cero.~~',

  content: [
    // ── Lernziele ─────────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'wissen, was du schon kannst — und was noch nicht',
        'den Kursplan kennen: 5 Blöcke, 37 Lektionen',
        'einen Lernplan haben: jeden Tag ein bisschen',
      ],
    },

    { type: 'rule' },

    // ── Kernwortschatz ────────────────────────────────────────────
    {
      type: 'wortschatz',
      eyebrow: 'Kernwortschatz — Lernen',
      items: [
        { wort: 'lernen', kollokation: 'Deutsch lernen', es: 'aprender' },
        { wort: 'üben', kollokation: 'jeden Tag üben', es: 'practicar' },
        { wort: 'wiederholen', kollokation: 'die Lektion wiederholen', es: 'repasar' },
        { wort: 'verstehen', kollokation: 'Ich verstehe das.', es: 'entender' },
        { wort: 'die Lektion', kollokation: 'Lektion 4 machen', es: 'la lección' },
        { wort: 'der Block', kollokation: 'Block 1: Grammatik', es: 'el bloque' },
        { wort: 'der Test', kollokation: 'einen Test machen', es: 'el test' },
        { wort: 'der Plan', kollokation: 'einen Plan machen', es: 'el plan' },
        { wort: 'jeden Tag', kollokation: 'jeden Tag 20 Minuten', es: 'cada día' },
        { wort: 'ein bisschen', kollokation: 'ein bisschen Deutsch', es: 'un poco' },
      ],
      hinweis: '~~El vocabulario del «cómo estudiar» — lo usaremos en todas las lecciones.~~',
    },

    { type: 'rule' },

    // ── Erklärung ─────────────────────────────────────────────────
    {
      type: 'prose',
      eyebrow: 'Erklärung',
      card: true,
      titel: 'Das ist kein Examen',
      absaetze: [
        'Der Test heute ist eine **Standortbestimmung** ~~(«determinar dónde estás» — nadie te pone nota hoy)~~. Kennst du eine Antwort nicht? **Kein Problem — das ist normal.** Neben jeder Lösung steht die Lektion, ~~donde se aprende exactamente eso. Este curso está pensado para empezar desde cero.~~',
      ],
    },
    {
      type: 'tabelle',
      eyebrow: 'Erklärung — der Kursplan',
      kopf: ['Block', 'Lektionen', 'Was lernst du?'],
      zeilen: [
        ['Block 0 · Einführung', '1-3', '~~el examen, el formato en papel y este test~~'],
        ['Block 1 · Grammatik & Struktur', '4-16', '~~toda la gramática A1: sein, haben, artículos, preguntas, números…~~'],
        ['Block 2 · Prüfungsstrategie', '17-29', 'Hören · Lesen · Schreiben · Sprechen ~~(el examen, parte a parte)~~'],
        ['Block 3 · Themenfelder & Wortschatz', '30-35', '~~vocabulario por temas: familia, comida, casa, trabajo…~~'],
        ['Block 4 · Prüfungssimulation', '36-37', '~~dos simulacros completos con corrección y estrategias~~'],
      ],
    },
    {
      type: 'steps',
      eyebrow: 'Erklärung — so lernst du am besten',
      steps: [
        {
          badge: 'jeden Tag',
          titel: 'Wenig, aber jeden Tag',
          text: '__20 Minuten jeden Tag__ sind besser als 3 Stunden am Sonntag. ~~La constancia le gana siempre al atracón.~~',
        },
        {
          badge: 'laut',
          titel: 'Laut lesen',
          text: 'Lies die Beispiele __laut__ ~~(en voz alta)~~ — Deutsch ist auch Klang. ~~Y en el examen tendrás que hablar en grupo.~~',
        },
        {
          badge: 'wiederholen',
          titel: 'Wiederholen',
          text: 'Wiederhole alte Lektionen. ~~Volver atrás no es perder tiempo: así se fija un idioma.~~',
        },
      ],
    },

    { type: 'rule' },

    // ── Beispiele ─────────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele — dein Lernplan',
      items: [
        { text: 'Ich lerne **jeden Tag** ein bisschen.', gl: '— Aprendo un poco cada día.' },
        { text: 'Ich mache heute **Lektion 3**.', gl: '— Hoy hago la lección 3.' },
        { text: 'Ich **wiederhole** am Sonntag.', gl: '— El domingo repaso.' },
        { text: 'Ich **verstehe** das noch nicht — okay!', gl: '— Todavía no lo entiendo — ¡no pasa nada!' },
      ],
    },

    { type: 'rule' },

    // ── Übungen (la Diagnose) ─────────────────────────────────────
    {
      type: 'uebung',
      eyebrow: 'Anwendung — Diagnose Teil 1 · Verben',
      frage: 'Kennst du die Antwort? ~~Si no, no pasa nada: la solución te dice en qué lección se aprende.~~',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Ich ___ Ana. (sein)',
        'Ich ___ eine Frage. (haben)',
      ],
      loesungen: [
        'Ich **bin** Ana. ~~¿No lo sabes aún? → Lektion 4 (Personalpronomen & „sein“). Es normal.~~',
        'Ich **habe** eine Frage. ~~→ Lektion 5 („haben“ & Präsens).~~',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Diagnose Teil 2 · Artikel & Fragen',
      frage: 'Weiter geht es. ~~Recuerda: esto es un mapa, no una nota.~~',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Der, die oder das? — ___ Haus',
        '___ wohnst du? — In Madrid.',
      ],
      loesungen: [
        '**das** Haus ~~→ Lektion 8 (Artikel & Genus).~~',
        '**Wo** wohnst du? ~~→ Lektion 7 (W-Fragen).~~',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Diagnose Teil 3 · Alltag',
      frage: 'Die letzten zwei. ~~Últimas dos preguntas del test.~~',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Wie heißt die Zahl 20 auf Deutsch?',
        'Was möchtest du? — Ich ___ einen Kaffee.',
      ],
      loesungen: [
        '20 = **zwanzig** ~~→ Lektion 16 (Zahlen, Uhrzeit & Datum).~~',
        'Ich **möchte** einen Kaffee. ~~→ Lektion 12 (Modalverben).~~',
      ],
    },

    { type: 'rule' },

    // ── Prüfungsbezug ─────────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Lesen (Vorschau)',
      titel: 'Ein Schild verstehen',
      anweisung: 'So sieht eine echte Aufgabe im Lesen aus. Richtig oder falsch? ~~(Un anticipo del examen — sin presión.)~~',
      absaetze: [
        '**Schild an der Tür:** „Geöffnet: Montag bis Freitag, 9-18 Uhr“',
        'Aussage: *Das Geschäft ist am Samstag geöffnet.*',
      ],
      loesungLabel: 'Lösung',
      loesungen: [
        '**Falsch** — nur Montag bis Freitag. ~~Este tipo de tarea (Schilder & Aushänge) se entrena en la Lektion 22.~~',
      ],
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: '~~¿Has fallado todo el test?~~ Der Kurs beginnt **bei null** — ~~estás exactamente donde debes estar. ¿Has acertado varias? Haz igualmente las lecciones en orden: el A1 se construye pieza a pieza, y los huecos se pagan en el examen.~~',
    },

    { type: 'rule' },

    // ── Abschluss ─────────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Frage', 'Antwort'],
      zeilen: [
        ['Was war das heute?', 'eine **Standortbestimmung** — kein Examen'],
        ['Wie viele Lektionen?', '**37**, in **5 Blöcken** (0-4)'],
        ['Wie lernst du?', 'jeden Tag ein bisschen · laut lesen · wiederholen'],
        ['Antwort nicht gewusst?', '~~normal — la lección indicada lo enseña desde cero~~'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich weiß, was ich schon kann — und was noch nicht.',
        'Ich kenne den Kursplan: 5 Blöcke, 37 Lektionen.',
        'Ich habe einen Lernplan: jeden Tag ein bisschen.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Jetzt geht es richtig los! In der nächsten Lektion sagst du deinen **ersten Satz auf Deutsch**: „Ich bin …“ — mit den **Personalpronomen** und dem Verb **sein**. ~~Tu primera frase en alemán te espera.~~',
    },
  ],
}
