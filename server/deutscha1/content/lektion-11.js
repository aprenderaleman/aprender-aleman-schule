// Lektion 11 · Possessivartikel
//
// Bloque 1 — Grammatik & Struktur. Estándar de la lección modelo 04.
// mein/dein/sein/ihr/unser/euer/Ihr + la -e de femenino/plural.
// Trampa central: sein (de él) vs. ihr (de ella). Contexto: la familia.

export default {
  spec: ['Bloque 1', 'Grammatik & Struktur', 'Niveau A1', 'Prüfungsrelevanz: Sprechen · Schreiben'],
  h1: 'Possessivartikel',
  lead: '**mein** ~~(mi)~~, **dein** ~~(tu)~~, **sein** ~~(de él)~~, **ihr** ~~(de ella)~~ … ~~Las palabras para hablar de tu familia:~~ *mein Bruder, meine Mutter*.',

  content: [
    // ── Lernziele ─────────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'die Possessivartikel kennen (mein, dein, sein, ihr, unser, euer, Ihr)',
        'die Endung **-e** bei feminin und Plural benutzen (*meine Mutter*)',
        '**sein** ~~(de él)~~ und **ihr** ~~(de ella)~~ richtig unterscheiden',
        'über deine Familie sprechen',
      ],
    },

    { type: 'rule' },

    // ── Kernwortschatz ────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Kernwortschatz — Possessivartikel',
      kopf: ['Pronomen', 'Possessiv', 'Bedeutung'],
      zeilen: [
        ['ich', '**mein/meine**', 'mi'],
        ['du', '**dein/deine**', 'tu'],
        ['er / es', '**sein/seine**', 'su (de él)'],
        ['sie ~~(ella)~~', '**ihr/ihre**', 'su (de ella)'],
        ['wir', '**unser/unsere**', 'nuestro/a'],
        ['ihr ~~(vosotros)~~', '**euer/eure**', 'vuestro/a'],
        ['sie ~~(ellos, ellas)~~', '**ihr/ihre**', 'su (de ellos/as)'],
        ['Sie ~~(usted)~~', '**Ihr/Ihre**', 'su (de usted)'],
      ],
    },
    {
      type: 'wortschatz',
      eyebrow: 'Kernwortschatz — die Familie',
      items: [
        { wort: 'der Vater / die Mutter', kollokation: 'mein Vater, meine Mutter', es: 'el padre / la madre' },
        { wort: 'der Bruder / die Schwester', kollokation: 'mein Bruder, meine Schwester', es: 'el hermano / la hermana' },
        { wort: 'der Mann / die Frau', kollokation: 'mein Mann, meine Frau', es: 'el marido / la mujer' },
        { wort: 'das Kind (die Kinder)', kollokation: 'meine Kinder', es: 'el hijo, niño' },
        { wort: 'die Eltern (Pl.)', kollokation: 'meine Eltern', es: 'los padres' },
        { wort: 'die Familie', kollokation: 'meine Familie', es: 'la familia' },
      ],
      hinweis: '~~Falso amigo:~~ __die Eltern__ ~~= los padres (papá y mamá);~~ __die Väter__ ~~sería «los padres» solo como plural de padre.~~',
    },

    { type: 'rule' },

    // ── Erklärung ─────────────────────────────────────────────────
    {
      type: 'steps',
      eyebrow: 'Erklärung',
      steps: [
        {
          badge: 'wie ein',
          titel: 'Possessiv + Nomen',
          text: 'Der Possessivartikel steht vor dem Nomen — wie *ein*: __**mein** Bruder__, __**dein** Auto__. ~~Sustituye a der/die/das/ein.~~',
        },
        {
          badge: 'Endung -e',
          titel: 'feminin & Plural: -e',
          text: 'Bei *die*-Wörtern und im Plural kommt ein __-e__: __mein**e** Mutter__, __mein**e** Eltern__. ~~Masculino y neutro: sin terminación (mein Vater, mein Kind).~~',
        },
        {
          badge: '¡trampa!',
          titel: 'sein oder ihr?',
          text: '~~En español «su» vale para todo. En alemán depende del DUEÑO:~~ er → __sein__ ~~(de él)~~, sie → __ihr__ ~~(de ella)~~. *Das ist Paul. **Sein** Auto ist neu.* · *Das ist Anna. **Ihr** Auto ist alt.*',
        },
      ],
    },

    { type: 'rule' },

    // ── Beispiele ─────────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele',
      items: [
        { text: '**Mein** Bruder heißt Luis.', gl: '— Mi hermano se llama Luis.' },
        { text: '**Meine** Mutter ist Lehrerin.', gl: '— Mi madre es profesora.' },
        { text: 'Wie heißt **dein** Vater?', gl: '— ¿Cómo se llama tu padre?' },
        { text: 'Das ist Paul. **Seine** Schwester wohnt in Berlin.', gl: '— Su hermana (de él) vive en Berlín.' },
        { text: 'Das ist Anna. **Ihr** Mann kommt aus Chile.', gl: '— Su marido (de ella) es de Chile.' },
        { text: '**Unsere** Kinder sind klein.', gl: '— Nuestros hijos son pequeños.' },
        { text: 'Wie ist **Ihr** Name?', gl: '— ¿Cuál es su nombre (de usted)? — típico en formularios.' },
      ],
    },

    { type: 'rule' },

    // ── Übungen ───────────────────────────────────────────────────
    {
      type: 'uebung',
      eyebrow: 'Anwendung — Übung 1 · mein oder meine?',
      frage: 'Ergänze die Endung: mit oder ohne -e? ~~(die-Wort o plural → -e)~~',
      loesungLabel: 'Lösung',
      aufgaben: [
        'mein___ Vater (der Vater)',
        'mein___ Schwester (die Schwester)',
        'dein___ Auto (das Auto)',
        'unser___ Eltern (Plural)',
      ],
      loesungen: [
        '**mein** Vater',
        '**meine** Schwester',
        '**dein** Auto',
        '**unsere** Eltern',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 2 · sein oder ihr?',
      frage: 'Wer ist der Besitzer? ~~(¿Quién es el dueño? él → sein, ella → ihr)~~ Ergänze.',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Das ist Marco. ___ Frau heißt Julia.',
        'Das ist Sofia. ___ Bruder wohnt in Lima.',
        'Das ist Herr Braun. ___ Kinder sind groß.',
        'Das ist Frau Klein. ___ Auto ist rot.',
      ],
      loesungen: [
        'Das ist Marco. **Seine** Frau heißt Julia. ~~(de él + die Frau → -e)~~',
        'Das ist Sofia. **Ihr** Bruder wohnt in Lima. ~~(de ella + der Bruder → sin -e)~~',
        'Das ist Herr Braun. **Seine** Kinder sind groß.',
        'Das ist Frau Klein. **Ihr** Auto ist rot.',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 3 · Deine Familie',
      frage: 'Schreibe 3 Sätze über deine Familie. ~~(3 frases sobre tu familia con mein/meine.)~~',
      loesungLabel: 'Muster',
      loesung: '*Meine Mutter heißt Carmen. Mein Bruder ist 20 Jahre alt. Meine Eltern wohnen in Bogotá.* ~~Vale cualquier familiar — revisa solo la -e en femenino y plural.~~',
    },

    { type: 'rule' },

    // ── Prüfungsbezug ─────────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Sprechen · Teil 2',
      titel: 'Fragen stellen & antworten — Thema „Familie“',
      anweisung: 'Im Sprechen Teil 2 ist „Familie“ ein typisches Thema auf den Wortkarten. Ergänze Frage und Antwort:',
      absaetze: [
        '„Wie heißt {1} Bruder?“ — „{2} Bruder heißt Diego.“',
        '„Wo wohnen {3} Eltern?“ — „{4} Eltern wohnen in Sevilla.“',
      ],
      loesungLabel: 'Lösung',
      loesungen: [
        '{1} Wie heißt **dein** Bruder?',
        '{2} **Mein** Bruder heißt Diego.',
        '{3} Wo wohnen **deine** Eltern?',
        '{4} **Meine** Eltern wohnen in Sevilla.',
      ],
      kommentar: '~~Con el examinador o desconocidos usarías «Ihr/Ihre» (de usted); entre candidatos, «dein/deine».~~',
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Im Formular (Schreiben Teil 1) und in E-Mails siehst du oft **Ihr/Ihre** groß geschrieben: *Ihr Name, Ihre Adresse* — das ist **usted**. ~~No lo confundas con «ihr» minúscula (de ella / vosotros).~~',
    },

    { type: 'rule' },

    // ── Abschluss ─────────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Regel', 'Beispiel'],
      zeilen: [
        ['ich → mein · du → dein · wir → unser', '**mein** Bruder, **dein** Vater, **unser** Kind'],
        ['er → **sein** ~~(de él)~~ · sie → **ihr** ~~(de ella)~~', 'Paul: **sein** Auto · Anna: **ihr** Auto'],
        ['feminin & Plural → Endung **-e**', 'mein**e** Mutter, mein**e** Eltern'],
        ['Sie ~~(usted)~~ → **Ihr/Ihre** (groß!)', 'Wie ist **Ihr** Name?'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich kenne die Possessivartikel (mein, dein, sein, ihr, unser, euer, Ihr).',
        'Ich benutze die Endung -e bei feminin und Plural.',
        'Ich unterscheide sein (de él) und ihr (de ella).',
        'Ich kann über meine Familie sprechen.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Du sprichst schon über deine Familie. In der nächsten Lektion lernst du drei Superverben: **können, möchten, müssen** — was du kannst, was du möchtest, was du musst. *Ich möchte einen Kaffee, bitte!* — deine höflichste Waffe für die Prüfung.',
    },
  ],
}
