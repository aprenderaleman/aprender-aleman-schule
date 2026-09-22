// Lektion 08 · Artikel & Genus (der/die/das)
//
// Bloque 1 «Grammatik & Struktur». Sigue la lección modelo lektion-04.js:
// 8 secciones, frases mínimas, traducción casi constante.

export default {
  spec: ['Bloque 1', 'Grammatik & Struktur', 'Niveau A1', 'Prüfungsrelevanz: Schreiben · Lesen'],
  h1: 'Artikel & Genus: der, die, das',
  lead: '~~En alemán cada sustantivo tiene género:~~ **der** ~~(masculino),~~ **die** ~~(femenino),~~ **das** ~~(neutro) — y NO coincide con el español.~~',

  content: [
    // ── Lernziele ─────────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'die drei Artikel kennen: der, die, das',
        'ein / eine richtig benutzen',
        'jedes neue Wort **mit** Artikel lernen',
      ],
    },

    { type: 'rule' },

    // ── Kernwortschatz ────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Kernwortschatz — Nomen mit Artikel',
      kopf: ['Artikel', 'Nomen', 'Bedeutung'],
      zeilen: [
        ['der (maskulin)', 'der Mann · der Tisch · der Lehrer', 'el hombre · la mesa (!) · el profesor'],
        ['die (feminin)', 'die Frau · die Lampe · die Tür', 'la mujer · la lámpara · la puerta'],
        ['das (neutral)', 'das Kind · das Haus · das Mädchen', 'el niño · la casa · la chica (!)'],
      ],
    },

    { type: 'rule' },

    // ── Erklärung ─────────────────────────────────────────────────
    {
      type: 'steps',
      eyebrow: 'Erklärung',
      steps: [
        {
          badge: '3 Genera',
          titel: 'Drei Artikel — nicht zwei',
          text: 'Deutsch hat drei: __der__ (maskulin), __die__ (feminin), __das__ (neutral). ~~(el español tiene dos géneros; el alemán añade un tercero, el neutro „das“)~~',
        },
        {
          badge: '⚠ Achtung',
          titel: 'Das Genus ist NICHT wie im Spanischen',
          text: '__der Tisch__ ~~(la mesa — ¡masculino en alemán!)~~ · __das Mädchen__ ~~(la chica — ¡neutro!)~~ · __die Sonne__ ~~(el sol — femenino)~~. Deshalb: nicht „Tisch“ lernen, sondern __**der** Tisch__.',
        },
        {
          badge: 'Tricks',
          titel: 'Kleine Hilfen (nicht 100 %)',
          text: 'Wörter auf __-e__ → meistens **die** (die Lampe, die Frage) · Personen auf __-er__ → oft **der** (der Lehrer) ~~(trucos suaves, con excepciones — el artículo seguro te lo da solo el diccionario)~~',
        },
        {
          badge: 'ein / eine',
          titel: 'Der unbestimmte Artikel',
          text: '**ein** Mann, **ein** Kind ~~(un)~~ · **eine** Frau ~~(una)~~. Die Regel: __der / das → ein__ · __die → eine__.',
        },
        {
          badge: 'ABC',
          titel: 'Nomen schreibt man groß',
          text: 'Alle Nomen beginnen mit Großbuchstaben: der **T**isch, die **F**rage, das **H**aus. ~~(todos los sustantivos van con mayúscula — siempre, no solo los nombres propios)~~',
        },
      ],
    },

    { type: 'rule' },

    // ── Beispiele ─────────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele',
      items: [
        { text: 'Das ist **der** Tisch.', gl: '— Esta es la mesa.' },
        { text: '**Die** Lampe ist neu.', gl: '— La lámpara es nueva.' },
        { text: '**Das** Mädchen heißt Lena.', gl: '— La chica se llama Lena.' },
        { text: 'Ich habe **eine** Frage.', gl: '— Tengo una pregunta.' },
        { text: 'Das ist **ein** Foto.', gl: '— Esto es una foto.' },
        { text: '**Der** Lehrer kommt aus Wien.', gl: '— El profesor es de Viena.' },
      ],
    },

    { type: 'rule' },

    // ── Mehr Beispiele ────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Mehr Beispiele',
      titel: 'der, die, das im Satz',
      items: [
        { text: '**Der** Mann ist nett.', gl: '— El hombre es simpático.' },
        { text: '**Die** Frau heißt Petra.', gl: '— La mujer se llama Petra.' },
        { text: '**Das** Haus ist groß.', gl: '— La casa es grande.' },
        { text: '**Das** Kind schläft.', gl: '— El niño duerme.' },
        { text: 'Wo ist **die** Tür?', gl: '— ¿Dónde está la puerta?' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'ein / eine',
      titel: 'Der unbestimmte Artikel im Satz',
      items: [
        { text: 'Das ist **ein** Mann und das ist **eine** Frau.', gl: '— Este es un hombre y esta es una mujer.' },
        { text: 'Das ist **ein** Tisch.', gl: '— Esto es una mesa. (¡masculino en alemán!)' },
        { text: 'Hast du **eine** Frage? — Ja, ich habe **eine** Frage.', gl: '— ¿Tienes una pregunta? — Sí, tengo una pregunta.' },
        { text: 'Ist das **eine** Lampe? — Nein, das ist **ein** Foto.', gl: '— ¿Es una lámpara? — No, es una foto.' },
        { text: 'Das ist **ein** Mädchen.', gl: '— Esta es una chica. (neutro: das Mädchen)' },
      ],
    },

    { type: 'rule' },

    // ── Prüfungsbezug ─────────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Schreiben · Teil 2',
      titel: 'Kurzer Text mit Artikeln',
      anweisung: 'Im Schreiben Teil 2 schreibst du einen kurzen persönlichen Text (~30 Wörter). Artikel-Fehler kosten Punkte. Ergänze:',
      absaetze: [
        '„Das ist {1} Foto von meiner Familie. {2} Frau hier ist meine Mutter. Und {3} Mädchen ist meine Schwester.“',
      ],
      loesungLabel: 'Lösung',
      loesungen: [
        '{1} Das ist **ein** Foto. (das Foto)',
        '{2} **Die** Frau hier ist meine Mutter.',
        '{3} Und **das** Mädchen ist meine Schwester. ~~(neutro — aunque sea „la chica“)~~',
      ],
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Lerne von heute an jedes Nomen **mit Artikel und Farbe**: der = blau, die = rot, das = grün. ~~Truco clásico: apunta cada palabra nueva con su artículo y un color por género — memorizar „Tisch“ solo es memorizar media palabra.~~',
    },

    { type: 'rule' },

    // ── Abschluss ─────────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Artikel', 'ein / eine', 'Beispiel'],
      zeilen: [
        ['der (maskulin)', 'ein', 'der Tisch → ein Tisch'],
        ['die (feminin)', 'eine', 'die Lampe → eine Lampe'],
        ['das (neutral)', 'ein', 'das Haus → ein Haus'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich kenne die drei Artikel: der, die, das.',
        'Ich weiß: Das Genus ist nicht wie im Spanischen (der Tisch, das Mädchen).',
        'Ich benutze ein und eine richtig.',
        'Ich lerne jedes neue Nomen mit Artikel.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Der, die, das begleiten dich ab jetzt in **jeder** Lektion — jedes neue Wort kommt mit Artikel. In der nächsten Lektion lernst du den ersten Trick damit: Nach Verben wie *haben* und *kaufen* wird **der → den** und **ein → einen**: *Ich kaufe **einen** Apfel.* Das ist der Akkusativ — und nur **der/ein** ändern sich. ~~(solo cambia el masculino — die y das quedan igual)~~',
    },
  ],
}
