// Lektion 38 · Freizeit & Medien

export default {
  spec: ['Bloque 3', 'Themenfelder & Wortschatz', 'Niveau B1', 'Prüfungsrelevanz: Sprechen & Hören'],
  h1: 'Freizeit & Medien',
  lead: 'Hobbys, Verabredungen, Serien und das Handy: der Wortschatz für deine freie Zeit. ~~El tema estrella del examen oral.~~',

  content: [
    // ── Lernziele ─────────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'über Hobbys und Freizeit sprechen',
        'dich mit Freunden verabreden ~~(quedar con alguien)~~',
        'über Fernsehen, Streaming und das Handy im Alltag sprechen',
      ],
    },

    { type: 'rule' },

    // ── Kernwortschatz ────────────────────────────────────────────
    {
      type: 'wortschatz',
      eyebrow: 'Kernwortschatz',
      items: [
        { wort: 'die Freizeit', kollokation: 'in der Freizeit', es: 'el tiempo libre' },
        { wort: 'das Hobby, -s', kollokation: 'ein Hobby haben', es: 'el hobby, la afición' },
        { wort: 'sich treffen', kollokation: 'sich mit Freunden treffen', es: 'quedar, encontrarse' },
        { wort: 'sich verabreden', kollokation: 'sich fürs Wochenende verabreden', es: 'quedar (fijar una cita)' },
        { wort: 'die Verabredung, -en', kollokation: 'eine Verabredung haben', es: 'la cita (con amigos)' },
        { wort: 'vorschlagen', kollokation: 'einen Termin vorschlagen', es: 'proponer' },
        { wort: 'unternehmen', kollokation: 'etwas zusammen unternehmen', es: 'hacer (planes, actividades)' },
        { wort: 'der Verein, -e', kollokation: 'im Verein Fußball spielen', es: 'el club, la asociación' },
        { wort: 'fernsehen', kollokation: 'abends fernsehen', es: 'ver la tele' },
        { wort: 'die Serie, -n', kollokation: 'eine Serie streamen', es: 'la serie' },
        { wort: 'das Handy, -s', kollokation: 'aufs Handy schauen', es: 'el móvil' },
        { wort: 'die Nachricht, -en', kollokation: 'eine Nachricht schicken', es: 'el mensaje' },
      ],
      hinweis: '**fernsehen** ist EIN Verb ~~(en español son dos palabras: «ver la tele»)~~ und trennbar: *Ich sehe abends fern.* Aber das Gerät heißt **der Fernseher** ~~(el televisor)~~.',
    },

    { type: 'rule' },

    // ── Erklärung ─────────────────────────────────────────────────
    {
      type: 'prose',
      eyebrow: 'Erklärung — Freizeit auf Deutsch',
      card: true,
      kicker: 'Alltag 1',
      titel: 'Der Verein',
      absaetze: [
        'Viele Menschen in Deutschland organisieren ihre Hobbys __im Verein__: Sportverein, Musikverein, Wanderverein. Dort trainiert man regelmäßig und lernt Leute kennen. Wer neu in einer Stadt ist, findet über einen Verein am schnellsten Kontakte.',
      ],
    },
    {
      type: 'prose',
      card: true,
      kicker: 'Alltag 2',
      titel: 'Die Verabredung',
      absaetze: [
        'Spontan treffen? Eher selten. Man verabredet sich oft __Tage vorher__ — mit konkretem Tag, Ort und Uhrzeit — und kommt dann pünktlich. ~~En Alemania «quedar» se planifica; el «ya nos vemos» abierto no funciona.~~ Absagen ist okay, aber bitte rechtzeitig, per Nachricht oder Anruf.',
      ],
    },
    {
      type: 'prose',
      card: true,
      kicker: 'Alltag 3',
      titel: 'Medien im Alltag',
      absaetze: [
        'Klassisches Fernsehen gibt es noch, aber viele Menschen __streamen__ Serien und Filme. Und das Handy ist immer dabei: Nachrichten schreiben, Musik hören, Fotos machen. In der Bahn schauen fast alle aufs Handy.',
      ],
    },

    { type: 'rule' },

    // ── Beispiele ─────────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele',
      kicker: 'Subthema 1',
      titel: 'Hobbys',
      items: [
        { text: 'Ich spiele **in einem Verein** Fußball.' },
        { text: 'In meiner Freizeit lese ich oder gehe schwimmen.' },
        { text: 'Mein Hobby ist Kochen — am Wochenende probiere ich neue Rezepte.' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'Subthema 2',
      titel: 'Verabredungen',
      items: [
        { text: 'Wollen wir uns **am Samstag** treffen?' },
        { text: 'Ich habe morgen eine Verabredung mit Ana.' },
        { text: 'Wir unternehmen oft etwas zusammen.' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'Subthema 3',
      titel: 'Fernsehen & Handy',
      items: [
        { text: 'Abends **sehe** ich meistens **fern**.', gl: '— trennbar!' },
        { text: 'Ich habe die neue Serie schon gesehen.' },
        { text: 'Schick mir eine Nachricht, wenn du da bist.' },
      ],
    },

    { type: 'rule' },

    // ── Redemittel ────────────────────────────────────────────────
    {
      type: 'redemittel',
      eyebrow: 'Redemittel — sich verabreden',
      gruppen: [
        {
          fn: 'Vorschlagen',
          saetze: [
            { satz: 'Hast du am Samstag Zeit?' },
            { satz: 'Wollen wir ins Kino gehen?' },
            { satz: 'Wie wäre es mit Sonntag?', gloss: '~~¿qué tal el domingo?~~' },
          ],
        },
        {
          fn: 'Reagieren',
          saetze: [
            { satz: 'Gute Idee! Da habe ich Zeit.' },
            { satz: 'Da kann ich leider nicht.' },
            { satz: 'Einverstanden, bis dann!' },
          ],
        },
      ],
    },

    { type: 'rule' },

    // ── Übungen ───────────────────────────────────────────────────
    {
      type: 'uebung',
      eyebrow: 'Anwendung — Übung 1 · Wortschatz',
      frage: 'Welches Wort passt?',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Man sieht sie im Fernsehen oder streamt sie: die ___',
        'Damit schreibst du unterwegs Nachrichten: das ___',
        'Dort spielt man mit anderen zusammen Sport: der ___',
        '„Quedar con amigos“ auf Deutsch: sich ___',
      ],
      loesungen: [
        'die **Serie**',
        'das **Handy**',
        'der **Verein**',
        'sich **treffen** ~~(o: sich verabreden, si se fija día y hora)~~',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 2 · Dialog ergänzen',
      frage: 'Zwei Freunde verabreden sich. Ergänze die Lücken.',
      loesungLabel: 'Lösung',
      aufgaben: [
        '● Hast du am Freitag ___?',
        '○ Ja! Wollen wir etwas zusammen ___?',
        '● Gern. Wie ___ es mit Kino?',
        '○ Gute Idee! Schick mir vorher eine ___.',
      ],
      loesungen: [
        'Hast du am Freitag **Zeit**?',
        'Wollen wir etwas zusammen **unternehmen**? ~~(o: machen)~~',
        'Wie **wäre** es mit Kino?',
        'Schick mir vorher eine **Nachricht**.',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 3 · Produzieren',
      frage: 'Schreib 60-80 Wörter: Was machst du in deiner Freizeit?',
      aufgabe: 'Nenne dein Hobby, wie oft du es machst und mit wem. Schreib auch einen Satz über Fernsehen oder Handy.',
      loesungLabel: 'Mögliche Lösung',
      loesung: 'In meiner Freizeit spiele ich Fußball in einem Verein. Wir trainieren zweimal pro Woche, und am Samstag haben wir oft ein Spiel. Danach treffe ich mich mit Freunden — wir essen zusammen oder sehen einen Film. Abends schaue ich gern Serien auf dem Handy, manchmal sehe ich auch fern. Am Sonntag unternehme ich etwas mit meiner Familie, zum Beispiel machen wir einen Spaziergang im Park. ~~Vale cualquier texto con tu hobby real — lo importante: verbo en posición 2 y el léxico de la lección.~~',
    },

    { type: 'rule' },

    // ── Prüfungsbezug ─────────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Sprechen · Teil 1 (Gemeinsam etwas planen)',
      titel: 'Einen Filmabend planen',
      anweisung: 'Ihr wollt zusammen einen Filmabend machen. Plant zu zweit — macht Vorschläge und reagiert:',
      absaetze: [
        '**Wann** trefft ihr euch? · **Wo** — bei wem zu Hause? · **Was** seht ihr? · **Wer** bringt was mit?',
      ],
      loesungLabel: 'Mögliche Lösung',
      loesungen: [
        '● **Wollen wir** am Freitag einen Filmabend machen? — ○ Gute Idee! **Wie wäre es** bei mir zu Hause?',
        '● Einverstanden. Und was sehen wir? — ○ **Ich schlage vor**, wir sehen eine Komödie.',
        '● Okay. Ich bringe eine Pizza mit. — ○ Super, dann kaufe ich die Getränke. **Bis Freitag!**',
      ],
      kommentar: 'Die Prüfer bewerten vor allem die **Interaktion**: Vorschlag machen, reagieren, gemeinsam entscheiden. Ein kleiner Grammatikfehler ist weniger schlimm als Schweigen.',
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Lern die Redemittel oben auswendig — sie funktionieren für **jedes** Planungsthema in Sprechen Teil 1: Filmabend, Ausflug, Party, Geschenk für den Kurs. Nur der Wortschatz drumherum ändert sich.',
    },

    { type: 'rule' },

    // ── Abschluss ─────────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Situation', 'Das brauchst du'],
      zeilen: [
        ['über Hobbys sprechen', 'in der Freizeit · mein Hobby ist … · im Verein'],
        ['sich verabreden', 'Hast du Zeit? · Wollen wir …? · Wie wäre es mit …?'],
        ['reagieren', 'Gute Idee! · Da kann ich leider nicht.'],
        ['Medien', 'fernsehen (trennbar) · eine Serie streamen · eine Nachricht schicken'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich kann über meine Hobbys und meine Freizeit sprechen.',
        'Ich kann mich verabreden: vorschlagen, reagieren, absagen.',
        'Ich kann über Fernsehen, Serien und das Handy sprechen.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Viele Menschen lernen in ihrer Freizeit etwas Neues: einen Kochkurs, einen Sprachkurs. Genau darum geht es in der nächsten Lektion: **Bildung & Lernen** — mit dem Wortschatz für Schule, Kurse und deine eigene B1-Prüfung.',
    },
  ],
}
