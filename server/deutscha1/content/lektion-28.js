// Lektion 28 · Sprechen Teil 2 — Fragen stellen & antworten
//
// Bloque 2 (Prüfungstraining — Sprechen). Con una tarjeta de palabra
// (Thema + Wort, p. ej. «Essen: Frühstück») formular una pregunta Y responder
// a la de otro candidato. Patrones: W-Fragen y Ja/Nein-Fragen (Lektion 7).

export default {
  spec: ['Bloque 2', 'Prüfungsstrategie', 'Niveau A1', 'Prüfungsrelevanz: Sprechen'],
  h1: 'Sprechen Teil 2 — Fragen stellen & antworten',
  lead: '~~Sacas una tarjeta con un tema y una palabra («Essen: Frühstück»), haces UNA pregunta con ella — y respondes a la pregunta de otro candidato.~~',

  content: [
    // ── Lernziele ─────────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'mit einer Wortkarte (Thema + Wort) eine Frage bilden',
        '**W-Fragen** und **Ja/Nein-Fragen** benutzen',
        'kurz und korrekt auf Fragen antworten',
      ],
    },

    { type: 'rule' },

    // ── Kernwortschatz ────────────────────────────────────────────
    {
      type: 'wortschatz',
      eyebrow: 'Kernwortschatz — Fragewörter & Karten',
      items: [
        { wort: 'was', kollokation: 'Was isst du?', es: 'qué' },
        { wort: 'wo', kollokation: 'Wo wohnst du?', es: 'dónde' },
        { wort: 'wann', kollokation: 'Wann stehst du auf?', es: 'cuándo' },
        { wort: 'wie', kollokation: 'Wie heißt du?', es: 'cómo' },
        { wort: 'das Thema, Themen', kollokation: 'Thema: Essen', es: 'el tema' },
        { wort: 'das Wort, Wörter', kollokation: 'Wort: Frühstück', es: 'la palabra' },
        { wort: 'das Frühstück', kollokation: 'Was isst du zum Frühstück?', es: 'el desayuno' },
        { wort: 'die Freizeit', kollokation: 'Was machst du in der Freizeit?', es: 'el tiempo libre' },
        { wort: 'der Tagesablauf', kollokation: 'Wann arbeitest du?', es: 'la rutina diaria' },
      ],
    },

    { type: 'rule' },

    // ── Erklärung ─────────────────────────────────────────────────
    {
      type: 'steps',
      eyebrow: 'Erklärung — In 3 Schritten',
      steps: [
        {
          badge: 'Karte',
          titel: 'Die Karte lesen',
          text: 'Auf der Karte stehen ein **Thema** und ein **Wort**, zum Beispiel: __Essen: Frühstück__. Mit dem Wort machst du **eine** Frage. ~~Una sola pregunta — corta y correcta.~~',
        },
        {
          badge: 'W- oder Ja/Nein',
          titel: 'Zwei Frage-Muster (Lektion 7)',
          text: '**W-Frage**: W-Wort + Verb + du → __**Was** isst du zum Frühstück?__ · **Ja/Nein-Frage**: Verb zuerst → __**Trinkst** du Kaffee?__ ~~El verbo primero = pregunta de sí o no.~~',
        },
        {
          badge: 'Antwort',
          titel: 'Kurz antworten',
          text: 'Eine kurze Antwort ist genug: __Ich esse Brot und trinke Kaffee.__ Bei Ja/Nein-Fragen: __Ja, …__ / __Nein, …__ ~~No hace falta un discurso — una frase completa basta.~~',
        },
      ],
    },
    {
      type: 'redemittel',
      eyebrow: 'Erklärung — Frage-Muster',
      gruppen: [
        {
          fn: 'W-Fragen',
          saetze: [
            { satz: 'Was isst / trinkst / machst du …?', gloss: '¿Qué comes / bebes / haces…?' },
            { satz: 'Wo wohnst / arbeitest / kaufst du …?', gloss: '¿Dónde vives / trabajas / compras…?' },
            { satz: 'Wann stehst du auf?', gloss: '¿Cuándo te levantas?' },
          ],
        },
        {
          fn: 'Ja/Nein-Fragen',
          saetze: [
            { satz: 'Trinkst du gern Kaffee?', gloss: '¿Te gusta el café? (lit. ¿bebes con gusto?)' },
            { satz: 'Hast du ein Hobby?', gloss: '¿Tienes un hobby?' },
          ],
        },
        {
          fn: 'Antworten',
          saetze: [
            { satz: 'Ich esse Brot. / Ich wohne in …', gloss: 'Frase completa y corta.' },
            { satz: 'Ja, gern. / Nein, nicht so gern.', gloss: 'Sí, mucho. / No, no mucho.' },
          ],
        },
      ],
    },

    { type: 'rule' },

    // ── Beispiele ─────────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele — Mini-Dialoge nach Thema',
      kicker: 'Typische Karten',
      titel: 'Frage und Antwort',
      items: [
        { text: 'Karte „Essen: Frühstück“ — **Was** isst du zum Frühstück? — Ich esse Brot und trinke Kaffee.', gl: '— ¿Qué desayunas? — Pan, y bebo café.' },
        { text: 'Karte „Freizeit: Wochenende“ — **Was** machst du am Wochenende? — Ich spiele Fußball.', gl: '— ¿Qué haces el finde? — Juego al fútbol.' },
        { text: 'Karte „Wohnen: Stadt“ — **Wo** wohnst du? — Ich wohne in Berlin.', gl: '— ¿Dónde vives? — Vivo en Berlín.' },
        { text: 'Karte „Einkaufen: Obst“ — **Wo** kaufst du Obst? — Auf dem Markt.', gl: '— ¿Dónde compras fruta? — En el mercado.' },
        { text: 'Karte „Freizeit: Hobby“ — **Hast** du ein Hobby? — Ja, ich schwimme gern.', gl: '— ¿Tienes un hobby? — Sí, me gusta nadar.' },
      ],
    },

    { type: 'rule' },

    // ── Übungen ───────────────────────────────────────────────────
    {
      type: 'uebung',
      eyebrow: 'Anwendung — Übung 1 · Fragetyp erkennen',
      frage: 'W-Frage oder Ja/Nein-Frage?',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Wo arbeitest du?',
        'Trinkst du Tee?',
        'Wann isst du zu Mittag?',
        'Hast du Kinder?',
      ],
      loesungen: [
        'Wo arbeitest du? — **W-Frage**',
        'Trinkst du Tee? — **Ja/Nein-Frage** ~~(verbo primero)~~',
        'Wann isst du zu Mittag? — **W-Frage**',
        'Hast du Kinder? — **Ja/Nein-Frage**',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 2 · Fragen aus Karten bilden',
      frage: 'Bilde eine Frage mit der Karte. ~~Haz una pregunta con cada tarjeta.~~',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Karte „Essen: Pizza“ (Ja/Nein-Frage)',
        'Karte „Wohnen: Wohnung“ (W-Frage mit *wo*)',
        'Karte „Tagesablauf: Arbeit“ (W-Frage mit *wann*)',
      ],
      loesungen: [
        '**Isst** du gern Pizza? ~~(también vale: Magst du Pizza?)~~',
        '**Wo** ist deine Wohnung? ~~(o: Wie ist deine Wohnung?)~~',
        '**Wann** gehst du zur Arbeit? ~~(o: Wann arbeitest du?)~~',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 3 · Produzieren — Frage UND Antwort',
      frage: 'Karte „Freizeit: Musik“. Schreibe eine Frage **und** eine Antwort. ~~En el examen haces las dos cosas: preguntar y responder.~~',
      loesungLabel: 'Mögliche Lösung',
      loesung: '*— Hörst du gern Musik? — Ja, ich höre gern Musik.* ~~También valen: „Was für Musik hörst du?“, „Machst du Musik?“ — cualquier pregunta correcta con la palabra de la tarjeta.~~',
    },

    { type: 'rule' },

    // ── Prüfungsbezug ─────────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Sprechen · Teil 2',
      titel: 'Die Runde in der Gruppe',
      anweisung: 'So läuft Teil 2: Du fragst einen Kandidaten — ein anderer fragt dich. Ergänze.',
      absaetze: [
        'Deine Karte: „Essen: Abendessen“. Du fragst: „{1}“',
        'Ein Kandidat fragt dich: „Was trinkst du zum Frühstück?“ Du antwortest: „{2}“',
      ],
      loesungLabel: 'Mögliche Lösung',
      loesungen: [
        '{1} **Was isst du zum Abendessen?** ~~(o cualquier pregunta correcta con „Abendessen“)~~',
        '{2} **Ich trinke Kaffee mit Milch.** ~~(cualquier respuesta corta y completa)~~',
      ],
      kommentar: 'Wie viele Karten pro Person? Das siehst du im **offiziellen Modellsatz**. ~~El mecanismo es siempre el mismo: una tarjeta → una pregunta → una respuesta.~~',
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Bereite pro Thema (Essen, Freizeit, Wohnen, Tagesablauf, Einkaufen) **zwei Frage-Muster** vor. Eine **einfache, korrekte** Frage ist besser als eine komplizierte mit Fehlern. ~~Y escucha bien la pregunta que te hacen antes de responder.~~',
    },

    { type: 'rule' },

    // ── Abschluss ─────────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Muster', 'Beispiel'],
      zeilen: [
        ['W-Frage: **W-Wort + Verb + du**', 'Was isst du zum Frühstück?'],
        ['Ja/Nein-Frage: **Verb zuerst**', 'Trinkst du Kaffee?'],
        ['Antwort: **kurz + komplett**', 'Ich esse Brot. / Ja, gern.'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich kann mit einer Wortkarte eine Frage bilden.',
        'Ich kenne die zwei Muster: W-Frage und Ja/Nein-Frage.',
        'Ich kann kurz und komplett antworten.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'In **Teil 3** gibt es keine Wörter mehr — nur Bilder: Du siehst eine Bildkarte und **formulierst eine Bitte**. ~~Cómo pedir algo con cortesía y cómo reaccionar — en la próxima lección, la última del bloque de examen.~~',
    },
  ],
}
