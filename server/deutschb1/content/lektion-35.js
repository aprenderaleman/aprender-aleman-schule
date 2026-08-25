// Lektion 35 · Wohnen & Alltag
//
// Bloque 3 (Themenfelder & Wortschatz): Wohnung, Möbel (enlace con las
// Wechselpräpositionen de la Lektion 8), Nachbarn, Hausarbeit, umziehen.

export default {
  spec: ['Bloque 3', 'Themenfelder & Wortschatz', 'Niveau B1', 'Prüfungsrelevanz: Schreiben Teil 2 · Lesen Teil 2 · Sprechen'],
  h1: 'Wohnen & Alltag',
  lead: 'Wohnung, Möbel, Nachbarn, Hausarbeit — und was passiert, wenn du **umziehst**. ~~En Alemania se vive de alquiler, y eso tiene su propio vocabulario.~~',

  content: [
    // ── Lernziele ─────────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'deine Wohnung beschreiben — mit den Wechselpräpositionen aus Lektion 8',
        'über Miete, Nachbarn und Hausarbeit sprechen',
        'über einen Umzug sprechen und ein Wohnungsproblem melden',
      ],
    },

    { type: 'rule' },

    // ── Kernwortschatz ────────────────────────────────────────────
    {
      type: 'wortschatz',
      eyebrow: 'Kernwortschatz',
      items: [
        { wort: 'die Wohnung, -en', kollokation: 'eine Wohnung mieten', es: 'el piso' },
        { wort: 'das Zimmer, -', kollokation: 'ein helles Zimmer', es: 'la habitación' },
        { wort: 'die Miete, -n', kollokation: 'die Miete bezahlen', es: 'el alquiler' },
        { wort: 'der Vermieter, - / die Vermieterin', kollokation: 'dem Vermieter schreiben', es: 'el/la casero/a' },
        { wort: 'der Nachbar, -n / die Nachbarin', kollokation: 'nette Nachbarn haben', es: 'el/la vecino/a' },
        { wort: 'die Möbel (Pl.)', kollokation: 'Möbel aufbauen', es: 'los muebles' },
        { wort: 'der Schrank, Schränke', kollokation: 'den Schrank ins Schlafzimmer stellen', es: 'el armario' },
        { wort: 'der Balkon, -e', kollokation: 'auf dem Balkon sitzen', es: 'el balcón' },
        { wort: 'die Hausordnung', kollokation: 'die Hausordnung beachten', es: 'las normas de la comunidad' },
        { wort: 'umziehen', kollokation: 'in eine neue Wohnung umziehen', es: 'mudarse' },
        { wort: 'aufräumen', kollokation: 'die Wohnung aufräumen', es: 'ordenar, recoger' },
        { wort: 'der Haushalt', kollokation: 'den Haushalt machen', es: 'las tareas de casa' },
      ],
      hinweis: '**zu Hause** (Wo?) ↔ **nach Hause** (Wohin?): *Ich bin zu Hause.* / *Ich gehe nach Hause.* ~~«Estoy en casa» y «voy a casa» son dos formas fijas distintas — el clásico Wo/Wohin de la Lektion 8.~~',
    },

    { type: 'rule' },

    // ── Erklärung ─────────────────────────────────────────────────
    {
      type: 'prose',
      eyebrow: 'Erklärung — Wohnen im deutschen Alltag',
      card: true,
      titel: 'Mieten ist normal',
      absaetze: [
        'In Deutschland wohnen sehr viele Menschen __zur Miete__. Wichtig sind zwei Zahlen: die **Kaltmiete** (nur die Wohnung) und die **Nebenkosten** (Heizung, Wasser, Müll) — zusammen die **Warmmiete**. Am Anfang zahlt man außerdem eine **Kaution**. ~~La fianza suelen ser dos o tres mensualidades — planifícalo.~~',
      ],
    },
    {
      type: 'prose',
      card: true,
      titel: 'Nachbarn & Hausordnung',
      absaetze: [
        'Im Mietshaus regelt die __Hausordnung__ das Zusammenleben: **Ruhezeiten** am Abend und oft am Sonntag, das Treppenhaus, den Müll. Man grüßt die Nachbarn im Haus — und bei Problemen spricht man **zuerst freundlich** miteinander, bevor man dem Vermieter schreibt.',
      ],
    },
    {
      type: 'prose',
      card: true,
      titel: 'Der Umzug',
      absaetze: [
        'Eine Wohnung findet man über __Anzeigen__ — genau der Texttyp aus **Lesen Teil 2**! Danach kommt der Besichtigungstermin, dann der Umzug: Freunde helfen beim Tragen, und danach gibt es traditionell Pizza für alle Helfer. ~~Mudarse con amigos + pizza: un pequeño ritual alemán.~~',
      ],
    },

    { type: 'rule' },

    // ── Beispiele ─────────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele',
      kicker: 'Subthema 1',
      titel: 'Die Wohnung beschreiben (Lektion 8!)',
      items: [
        { text: 'Meine Wohnung hat drei Zimmer, eine Küche und einen Balkon.' },
        { text: 'Wir stellen das Sofa **ins** Wohnzimmer.', gl: '— Wohin? → Akk.' },
        { text: 'Der Schreibtisch steht **neben dem** Fenster.', gl: '— Wo? → Dat.' },
        { text: 'Ich wohne im dritten Stock, leider ohne Aufzug.' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'Subthema 2',
      titel: 'Nachbarn & Hausarbeit',
      items: [
        { text: 'Unsere Nachbarn sind sehr freundlich und helfen uns oft.' },
        { text: 'Die Musik ist zu laut — denken Sie bitte an die **Ruhezeiten**.' },
        { text: 'Am Samstag räume ich die Wohnung auf und wasche die Wäsche.' },
        { text: 'Bei uns machen alle zusammen den **Haushalt**.' },
      ],
    },

    { type: 'rule' },

    // ── Redemittel ────────────────────────────────────────────────
    {
      type: 'redemittel',
      eyebrow: 'Redemittel — Probleme & Umzug',
      gruppen: [
        {
          fn: 'ein Problem melden (Vermieter / Nachbarn)',
          saetze: [
            { satz: 'Die Heizung funktioniert leider nicht.' },
            { satz: 'Ich möchte ein Problem in der Wohnung melden.' },
            { satz: 'Könnten Sie bitte die Musik leiser machen?', gloss: '~~Konjunktiv II (Lektion 13) = queja educada~~' },
          ],
        },
        {
          fn: 'über den Umzug sprechen',
          saetze: [
            { satz: 'Wir ziehen nächsten Monat um.' },
            { satz: 'Kannst du mir am Samstag beim Umzug helfen?' },
            { satz: 'Die neue Wohnung ist größer und hat einen Balkon.' },
          ],
        },
      ],
    },

    { type: 'rule' },

    // ── Übungen ───────────────────────────────────────────────────
    {
      type: 'uebung',
      eyebrow: 'Anwendung — Übung 1 · Wortschatz',
      frage: 'Welches Verb passt?',
      loesungLabel: 'Lösung',
      aufgaben: [
        'die Miete ___ ~~(bezahlen / aufräumen)~~',
        'die Wohnung ___ ~~(bezahlen / aufräumen)~~',
        'neue Möbel ___ ~~(aufbauen / umziehen)~~',
        'in eine neue Wohnung ___ ~~(aufbauen / umziehen)~~',
      ],
      loesungen: [
        'die Miete **bezahlen**',
        'die Wohnung **aufräumen**',
        'Möbel **aufbauen**',
        'in eine neue Wohnung **umziehen** ~~(verbo separable: ich ziehe … um)~~',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 2 · Sätze ergänzen',
      frage: 'Wechselpräposition oder feste Form?',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Ich stelle die Lampe ___ ___ Schreibtisch. ~~(auf, der Schreibtisch)~~',
        'Das Bett steht ___ Schlafzimmer. ~~(in, das Schlafzimmer)~~',
        'Es ist spät — ich gehe jetzt ___ Hause.',
        'Bleibst du heute Abend ___ Hause?',
      ],
      loesungen: [
        'auf **den** Schreibtisch ~~(Wohin? → Akk.)~~',
        '**im** Schlafzimmer ~~(Wo? → Dat., in + dem = im)~~',
        '**nach** Hause ~~(Wohin?)~~',
        '**zu** Hause ~~(Wo?)~~',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 3 · Produzieren',
      frage: 'Deine Wohnung (oder deine Traumwohnung): Schreib 60–80 Wörter. ~~(habitaciones, muebles, qué te gusta)~~',
      loesungLabel: 'Mögliche Lösung',
      loesung: 'Ich wohne in einer kleinen Wohnung im zweiten Stock. Sie hat zwei Zimmer, eine Küche und ein Bad. Im Wohnzimmer stehen ein Sofa und ein großer Schrank, und an der Wand hängen viele Fotos. Am besten gefällt mir der Balkon: Im Sommer sitze ich dort und trinke Kaffee. Die Miete ist nicht billig, aber die Nachbarn sind nett und ruhig. Nächstes Jahr möchte ich vielleicht in eine größere Wohnung umziehen. *(~70 Wörter — wichtig: mindestens ein Satz mit stellen/stehen/hängen wie in Lektion 8.)*',
    },

    { type: 'rule' },

    // ── Prüfungsbezug ─────────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Schreiben · Teil 2 (Forumsbeitrag, ~80 Wörter)',
      titel: 'Wohnen in der Stadt oder auf dem Land?',
      anweisung: 'In einem Forum diskutieren die Leser über das Thema „Wohnen in der Stadt oder auf dem Land?“. Schreiben Sie Ihre Meinung (~80 Wörter): Was finden Sie besser und warum? Nennen Sie ein Beispiel aus Ihrer Erfahrung.',
      absaetze: [
        'Struktur des Forumsbeitrags: **Meinung** → **Begründung/Beispiel** → **kurzer Schluss**.',
      ],
      loesungLabel: 'Mögliche Lösung',
      loesungen: [
        'Ich finde das Leben in der Stadt besser. In der Stadt gibt es Busse und Bahnen, viele Geschäfte und man findet leichter Arbeit. Ich wohne seit zwei Jahren in einer Stadtwohnung mit Balkon, und ich brauche kein Auto — das spart Geld. Natürlich ist die Miete in der Stadt höher und es ist manchmal laut. Trotzdem möchte ich nicht auf dem Land wohnen, weil dort weniger los ist. Für mich ist die Stadt einfach die beste Wahl. *(~75 Wörter)*',
      ],
      kommentar: 'Meinung (*Ich finde …*), Begründung (*weil …*), eigenes Beispiel (*Ich wohne seit …*) und ein Konnektor aus Lektion 5 (*trotzdem*) — genau das erwarten die Prüfer bei Teil 2.',
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'In **Lesen Teil 2** sind Wohnungsanzeigen ein Klassiker. Lern die Abkürzungen: **3 ZKB** = 3 Zimmer, Küche, Bad · **NK** = Nebenkosten · **KM** = Kaltmiete. ~~Sin estas siglas, los anuncios parecen jeroglíficos.~~',
    },

    { type: 'rule' },

    // ── Abschluss ─────────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Ausdruck', 'So benutzt du ihn'],
      zeilen: [
        ['die Miete', 'Kaltmiete + Nebenkosten = Warmmiete; am Anfang: Kaution'],
        ['umziehen', 'trennbar: Wir ziehen nächsten Monat **um**.'],
        ['zu / nach Hause', 'Ich bin **zu** Hause. / Ich gehe **nach** Hause.'],
        ['die Hausordnung', 'Ruhezeiten beachten, Probleme freundlich ansprechen'],
        ['Möbel + Lektion 8', 'Ich stelle den Schrank **ins** Zimmer. / Er steht **im** Zimmer.'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich kann meine Wohnung mit Zimmern und Möbeln beschreiben.',
        'Ich kann über Miete, Nachbarn und Hausarbeit sprechen.',
        'Ich kann ein Wohnungsproblem höflich melden und über einen Umzug sprechen.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Zu Hause fühlst du dich wohl — aber was ist, wenn du dich **nicht wohl fühlst**? In der nächsten Lektion lernst du, Symptome zu beschreiben und einen Arzttermin zu machen: **Gesundheit & Körper**.',
    },
  ],
}
