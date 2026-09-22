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

    // ── Mehr Beispiele ────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Mehr Beispiele',
      titel: 'Meine Familie',
      items: [
        { text: '**Meine** Familie ist groß.', gl: '— Mi familia es grande.' },
        { text: '**Mein** Vater arbeitet in Quito.', gl: '— Mi padre trabaja en Quito.' },
        { text: '**Meine** Schwester lernt auch Deutsch.', gl: '— Mi hermana también aprende alemán.' },
        { text: '**Meine** Eltern haben ein Haus.', gl: '— Mis padres tienen una casa.' },
        { text: 'Wie heißt **deine** Mutter? — **Meine** Mutter heißt Rosa.', gl: '— ¿Cómo se llama tu madre? — Mi madre se llama Rosa.' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'sein oder ihr?',
      titel: 'Der Besitzer entscheidet',
      items: [
        { text: 'Das ist Marco. **Seine** Frau heißt Julia.', gl: '— Su mujer (de él) se llama Julia.' },
        { text: 'Das ist Sofia. **Ihr** Bruder wohnt in Lima.', gl: '— Su hermano (de ella) vive en Lima.' },
        { text: 'Herr Braun und **seine** Kinder wohnen hier.', gl: '— El Sr. Braun y sus hijos viven aquí.' },
        { text: 'Frau Klein sucht **ihr** Auto.', gl: '— La Sra. Klein busca su coche.' },
        { text: '**Unser** Kind und **euer** Kind sind Freunde.', gl: '— Nuestro hijo y vuestro hijo son amigos.' },
      ],
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
