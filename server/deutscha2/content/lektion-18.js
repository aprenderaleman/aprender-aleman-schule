// Lektion 18 · Modul Lesen — Überblick
//
// Bloque 2 «Prüfungsstrategie». Primera lección del módulo Lesen.
// FIJA EL CANON INTERNO de Lesen: ca. 30 min; tipos: kurze Texte & E-Mails,
// Anzeigen zuordnen; número de Teile/ítems SIEMPRE en genérico con remisión
// al Modellsatz (regla de prudencia reforzada del A2).

export default {
  spec: ['Bloque 2', 'Prüfungsstrategie', 'Niveau A2', 'Prüfungsrelevanz: Lesen'],
  h1: 'Modul Lesen — Überblick',
  lead: '~~Empezamos con la parte de lectura del examen:~~ ca. **30 Minuten**, kurze Texte aus dem Alltag. ~~Hoy ves qué textos salen y cuál es la estrategia base.~~',

  content: [
    // ── Lernziele ─────────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'die Texte im Lesen kennen: E-Mails, Anzeigen, Schilder, Pläne',
        'die Aufgabentypen kennen: richtig/falsch, Auswahl, zuordnen',
        'die Basis-Strategie anwenden: Informationen **suchen**, nicht jedes Wort verstehen',
      ],
    },

    { type: 'rule' },

    // ── Kernwortschatz ────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Kernwortschatz — Wörter aus den Aufgaben',
      kopf: ['Wort', 'Beispiel', 'Bedeutung'],
      zeilen: [
        ['die Aufgabe, -n', 'Lies die Aufgabe.', 'la tarea, el ítem'],
        ['ankreuzen', 'Kreuze an: a, b oder c?', 'marcar con una cruz'],
        ['richtig', 'Der Satz ist richtig.', 'correcto'],
        ['falsch', 'Der Satz ist falsch.', 'falso, incorrecto'],
        ['die Anzeige, -n', 'eine Anzeige lesen', 'el anuncio'],
        ['zuordnen', 'Ordne die Anzeigen zu.', 'emparejar, asignar'],
        ['passen', 'Welche Anzeige passt?', 'encajar, corresponder'],
        ['die Lösung, -en', 'die richtige Lösung', 'la solución'],
        ['das Beispiel, -e', 'das Beispiel am Anfang', 'el ejemplo'],
        ['markieren', 'Markiere die Lösung.', 'marcar'],
      ],
    },

    { type: 'rule' },

    // ── Erklärung ─────────────────────────────────────────────────
    {
      type: 'steps',
      eyebrow: 'Erklärung — So funktioniert das Lesen',
      steps: [
        {
          badge: 'Texte',
          titel: 'Was liest du?',
          text: 'Kurze Alltagstexte: __E-Mails__ und Mitteilungen, __Anzeigen__ ~~(anuncios)~~, __Schilder__ ~~(carteles)~~, Öffnungszeiten und Pläne ~~(horarios)~~. Alles ist kurz und praktisch — wie im echten Leben.',
        },
        {
          badge: 'Aufgaben',
          titel: 'Was machst du?',
          text: 'Du kreuzt **richtig oder falsch** an, du **wählst** eine Antwort (a, b, c) oder du **ordnest Anzeigen zu**. Das Lesen hat mehrere kurze Teile. Wie viele Aufgaben genau? Das siehst du im offiziellen __Modellsatz__.',
        },
        {
          badge: 'Strategie',
          titel: 'Die goldene Regel',
          text: 'Du musst **nicht jedes Wort verstehen**. ~~No traduzcas todo:~~ Lies zuerst die Aufgabe, dann **suche die Information** im Text. Namen, Zahlen, Uhrzeiten und Orte helfen dir.',
        },
      ],
    },
    {
      type: 'prose',
      card: true,
      titel: 'Ein Teil von einer Prüfung',
      absaetze: [
        'Die A2-Prüfung ist **eine** Prüfung mit vier Teilen: Lesen, Hören, Schreiben, Sprechen. Für das Lesen hast du **ca. 30 Minuten**. Wichtig: Es gibt **keine Minuspunkte** — kreuze also immer etwas an. ~~Nunca dejes un ítem en blanco.~~',
      ],
    },

    { type: 'rule' },

    // ── Beispiele ─────────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele — kleine Texte, große Punkte',
      items: [
        { text: '„**Praxis Dr. Weber** — heute geschlossen. Morgen ab 9 Uhr geöffnet.“', gl: '— Schild an der Tür' },
        { text: '„**Zu verkaufen:** Fahrrad, 2 Jahre alt, nur 80 Euro. Tel. 0176 445 221“', gl: '— Anzeige' },
        { text: '„Hallo Tom, das Kino beginnt um 20 Uhr. Bis später! Lena“', gl: '— kurze Nachricht' },
        { text: '„Bus 42 fährt Montag bis Freitag alle 10 Minuten.“', gl: '— Fahrplan-Information' },
      ],
    },

    { type: 'rule' },

    // ── Mehr Beispiele ────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Mehr Beispiele',
      titel: 'Wörter aus den Aufgaben',
      items: [
        { text: '**Lies** die Aufgabe und **kreuze** dann **an**: a, b oder c.', gl: '— ankreuzen: «an» va al final' },
        { text: '**Ordne** die Anzeigen den Personen **zu**.', gl: '— zuordnen: emparejar' },
        { text: 'Welche **Anzeige passt** zu Herrn Novak?', gl: '— passen zu: ¿qué anuncio encaja?' },
        { text: 'Das **Beispiel** am Anfang zeigt dir die Aufgabe.', gl: '— el ejemplo ya está resuelto' },
        { text: '**Markiere** Namen, Zahlen und Uhrzeiten im Text.', gl: '— marca los datos clave' },
        { text: 'Der Satz ist **falsch** — die richtige **Lösung** ist b.', gl: '— falso / la solución' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'Alltagstexte',
      titel: 'Noch mehr kleine Texte',
      items: [
        { text: '„**Bitte leise!** Hier lernen Kinder.“', gl: '— Schild (cartel)' },
        { text: '„**Suche** Babysitter für Freitagabend, 10 Euro pro Stunde. Tel. 0152 887 340“', gl: '— Anzeige (alguien busca algo)' },
        { text: '„Hallo Jonas, ich bin heute krank. Kannst du mir die Hausaufgaben schicken? Danke! Mia“', gl: '— kurze Nachricht' },
        { text: '„**Bäckerei Sommer:** Montag bis Samstag 6–18 Uhr, Sonntag geschlossen.“', gl: '— Öffnungszeiten (horario)' },
      ],
    },

    { type: 'rule' },

    // ── Prüfungsbezug ─────────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Lesen',
      titel: 'So sieht die Aufgabe aus',
      anweisung: 'Lies den Text. Sind die Sätze richtig oder falsch? Genau so arbeitest du in der Prüfung. ~~(Lee el texto. ¿Las frases son verdaderas o falsas? Así trabajas en el examen.)~~',
      absaetze: [
        '„Liebe Nachbarn, am Samstag, dem 14. Juni, feiern wir ab 15 Uhr ein Sommerfest im Hof. Jeder bringt etwas zu essen mit. Getränke kaufen wir zusammen. Bitte sagen Sie uns bis Donnerstag Bescheid. Familie Öztürk (2. Stock)“',
      ],
      optionen: [
        '1. Das Fest ist am Sonntag.',
        '2. Das Essen bringen die Nachbarn mit.',
      ],
      loesungLabel: 'Lösung',
      loesungen: [
        '1. **falsch** — das Fest ist am **Samstag**.',
        '2. **richtig** — „Jeder bringt etwas zu essen mit.“',
      ],
      kommentar: 'Die Antwort steht **immer im Text** — du musst nichts raten und nichts über die Welt wissen. ~~La respuesta siempre está en el texto.~~',
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Lies **zuerst die Aufgaben, dann den Text**. So weißt du genau: Diese Information suche ich. Und du sparst Zeit. Übe vorher mit dem offiziellen **Modellsatz**: Dann kennst du am Prüfungstag jede Aufgabe schon.',
    },

    { type: 'rule' },

    // ── Abschluss ─────────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Frage', 'Antwort'],
      zeilen: [
        ['Wie lange?', 'ca. 30 Minuten'],
        ['Welche Texte?', 'E-Mails, Anzeigen, Schilder, Pläne'],
        ['Welche Aufgaben?', 'richtig/falsch · Auswahl (a, b, c) · zuordnen'],
        ['Wie viele Teile?', 'mehrere kurze Teile — siehe Modellsatz'],
        ['Strategie', 'Aufgabe zuerst lesen, dann die Information suchen'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich kenne die Texte im Lesen.',
        'Ich kenne die Aufgabentypen: richtig/falsch, Auswahl, zuordnen.',
        'Ich lese zuerst die Aufgabe und suche dann die Information.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'In der nächsten Lektion trainieren wir den ersten großen Aufgabentyp: **kurze Texte und E-Mails** mit richtig/falsch. Du lernst die wichtigste Falle kennen — ~~la frase que parece igual al texto, pero no lo es~~.',
    },
  ],
}
