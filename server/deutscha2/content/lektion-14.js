// Lektion 14 · Konnektoren — und, oder, aber, denn, deshalb
//
// Bloque 1 · Grammatik & Struktur — unir frases sin cambiar el orden
// (Position 0) frente a deshalb (inversión). Muy visual.

export default {
  spec: ['Bloque 1', 'Grammatik & Struktur', 'Niveau A2', 'Prüfungsrelevanz: Schreiben & Sprechen'],
  h1: 'Konnektoren: und, oder, aber, denn, deshalb',
  lead: '~~Con cinco palabritas unes tus frases:~~ **und, oder, aber, denn** ~~no cambian nada; solo~~ **deshalb** ~~cambia el orden.~~',

  content: [
    // ── Lernziele ─────────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'Sätze verbinden mit *und, oder, aber, denn*',
        'wissen: nach diesen vier Wörtern bleibt die Wortstellung normal (Position 0)',
        'mit *deshalb* eine Folge ~~(consecuencia)~~ ausdrücken — Verb direkt danach',
      ],
    },

    { type: 'rule' },

    // ── Kernwortschatz ────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Kernwortschatz — die 5 Konnektoren',
      kopf: ['Konnektor', 'Funktion', 'Bedeutung'],
      zeilen: [
        ['und', 'Addition', 'y'],
        ['oder', 'Alternative', 'o'],
        ['aber', 'Kontrast', 'pero'],
        ['denn', 'Grund', 'porque / pues'],
        ['deshalb', 'Folge', 'por eso'],
      ],
    },

    { type: 'rule' },

    // ── Erklärung ─────────────────────────────────────────────────
    {
      type: 'steps',
      eyebrow: 'Erklärung — Position 0 oder Inversion?',
      steps: [
        {
          badge: 'Position 0',
          titel: 'und, oder, aber, denn',
          text: 'Diese vier Wörter stehen auf __Position 0__ ~~(fuera de la frase, como en español)~~. Danach kommt ein ganz normaler Satz: **Subjekt + Verb**.\n__Ich lerne Deutsch, **denn** ich **arbeite** in Berlin.__',
        },
        {
          badge: 'deshalb',
          titel: 'Folge mit Inversion',
          text: '__deshalb__ steht auf Position 1 — das Verb muss auf __Position 2__ bleiben. ~~Resultado: el sujeto salta detrás del verbo (inversión).~~\n__Ich bin müde, **deshalb gehe ich** ins Bett.__ ~~(NO: *deshalb ich gehe*)~~',
        },
        {
          badge: 'Komma',
          titel: 'Das Komma',
          text: 'Vor __aber__, __denn__ und __deshalb__ steht ein Komma. Vor *und* und *oder* meistens nicht.\n__Ich komme gern, **aber** ich habe wenig Zeit.__',
        },
      ],
    },
    {
      type: 'vergleich',
      eyebrow: 'Erklärung — der Vergleich',
      titel: 'denn oder deshalb?',
      zeilen: [
        { satz: 'Ich bleibe zu Hause, **denn** ich **bin** krank.', label: 'Grund ~~(porque)~~ — Wortstellung normal: Subjekt + Verb' },
        { satz: 'Ich bin krank, **deshalb** **bleibe** ich zu Hause.', label: 'Folge ~~(por eso)~~ — Verb direkt nach deshalb' },
      ],
    },

    { type: 'rule' },

    // ── Beispiele ─────────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele',
      items: [
        { text: 'Ich trinke Kaffee **und** ich esse ein Brötchen.', gl: '— y' },
        { text: 'Kommst du mit **oder** bleibst du zu Hause?', gl: '— o' },
        { text: 'Das Hotel ist schön, **aber** es ist teuer.', gl: '— pero' },
        { text: 'Wir nehmen den Bus, **denn** das Auto ist kaputt.', gl: '— porque (orden normal)' },
        { text: 'Das Auto ist kaputt, **deshalb** nehmen wir den Bus.', gl: '— por eso (¡verbo justo después!)' },
        { text: 'Ich habe keine Zeit, **aber** ich helfe dir kurz.', gl: '— contraste con negación' },
        { text: 'Sara ist müde, **denn** sie hat schlecht geschlafen.', gl: '— denn: el verbo no se mueve' },
      ],
    },

    { type: 'rule' },

    // ── Mehr Beispiele ────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Mehr Beispiele',
      titel: 'und, oder, aber, denn',
      items: [
        { text: 'Paula liest ein Buch **und** Jonas hört Musik.', gl: '— y (dos sujetos, sin coma)' },
        { text: 'Fahren wir mit dem Rad **oder** nehmen wir die U-Bahn?', gl: '— o (en una pregunta)' },
        { text: 'Die Wohnung ist klein, **aber** sie ist sehr hell.', gl: '— pero (con coma)' },
        { text: 'Herr Yilmaz trinkt am Abend keinen Kaffee, **denn** er **schläft** sonst schlecht.', gl: '— denn + sujeto + verbo' },
        { text: 'Ich rufe dich an, **denn** ich **habe** eine Frage.', gl: '— porque (orden normal)' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'deshalb',
      titel: 'Folge mit Inversion',
      items: [
        { text: 'Es ist kalt, **deshalb trage ich** eine Jacke.', gl: '— deshalb + verbo + sujeto' },
        { text: 'Mira hat morgen Geburtstag, **deshalb backen wir** einen Kuchen.', gl: '— por eso hacemos un pastel' },
        { text: 'Der Bus kommt nicht, **deshalb gehen wir** zu Fuß.', gl: '— el verbo va justo después' },
        { text: 'Ich habe heute frei, **deshalb schlafe ich** lange.', gl: '— NO: *deshalb ich schlafe*' },
        { text: 'Das Museum ist am Montag zu, **deshalb besuchen wir** es am Dienstag.', gl: '— consecuencia lógica' },
      ],
    },

    { type: 'rule' },

    // ── Prüfungsbezug ─────────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Schreiben · E-Mail',
      titel: 'Konnektoren einsetzen',
      anweisung: 'Mit Konnektoren ist deine E-Mail (Teil 2) sofort besser. Ergänze denn, aber, deshalb: ~~(Con conectores tu correo mejora enseguida. Completa con denn, aber, deshalb.)~~',
      absaetze: [
        '„Hallo Jan, ich komme am Freitag, {1} ich habe frei. Ich bringe Kuchen mit, {2} ich habe keine Getränke. Mein Auto ist kaputt, {3} komme ich mit dem Zug.“',
      ],
      loesungLabel: 'Lösung',
      loesungen: [
        '{1} **denn** ich habe frei. ~~(razón, orden normal)~~',
        '{2} **aber** ich habe keine Getränke.',
        '{3} **deshalb** komme **ich** mit dem Zug. ~~(inversión)~~',
      ],
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Im **Schreiben** ist das wichtig: Verbinde deine Sätze! Zwei kurze Sätze + ein **denn** oder **deshalb** — das reicht schon für einen guten Text. ~~Truco: memoriza «…, deshalb + verbo + yo» como bloque fijo.~~',
    },

    { type: 'rule' },

    // ── Abschluss ─────────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Konnektor', 'Wortstellung danach', 'Beispiel'],
      zeilen: [
        ['und / oder / aber / denn', 'normal: Subjekt + Verb', '…, denn ich bin krank.'],
        ['deshalb', 'Inversion: Verb + Subjekt', '…, deshalb bleibe ich hier.'],
        ['Komma', 'vor aber, denn, deshalb', 'schön, aber teuer'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich verbinde Sätze mit und, oder, aber, denn. Die Wortstellung bleibt normal.',
        'Nach deshalb kommt bei mir sofort das Verb.',
        'Ich setze das Komma richtig.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Mit **denn** gibst du einen Grund — und die Wortstellung bleibt normal. Es gibt noch ein Wort für „porque“: **weil**. Aber Achtung: nach *weil* steht das Verb **am Ende**! Das ist die wichtigste Regel in Lektion 15.',
    },
  ],
}
