// Lektion 26 · Modul Sprechen — Überblick
//
// Bloque 2 (Prüfungstraining) — primera de las cuatro lecciones de Sprechen.
// Canon (KANON.md): Sprechen A1 ca. 15 min, IN DER GRUPPE (única parte grupal
// del catálogo), 3 Teile. Detalle fino en genérico + remisión al Modellsatz.

export default {
  spec: ['Bloque 2', 'Prüfungsstrategie', 'Niveau A1', 'Prüfungsrelevanz: Sprechen'],
  h1: 'Modul Sprechen — Überblick',
  lead: '~~La parte oral del~~ **Zertifikat A1**~~: ca. 15 minutos, en grupo, 3 partes. Hoy la ves entera — y le pierdes el miedo.~~',

  content: [
    // ── Lernziele ─────────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'das Format kennen: ca. 15 Minuten, **in der Gruppe**, 3 Teile',
        'wissen, was du in Teil 1, 2 und 3 machst',
        'Notfallsätze benutzen: *Wie bitte? Noch einmal, bitte.*',
        'W, Z, „ei“ und „ie“ richtig aussprechen',
      ],
    },

    { type: 'rule' },

    // ── Kernwortschatz ────────────────────────────────────────────
    {
      type: 'wortschatz',
      eyebrow: 'Kernwortschatz — Die Prüfung',
      items: [
        { wort: 'die Gruppe', kollokation: 'wir sprechen in der Gruppe', es: 'el grupo' },
        { wort: 'der Teil, -e', kollokation: 'Teil 1, 2 und 3', es: 'la parte' },
        { wort: 'die Karte, -n', kollokation: 'ich ziehe eine Karte', es: 'la tarjeta' },
        { wort: 'die Frage, -n', kollokation: 'eine Frage stellen', es: 'la pregunta' },
        { wort: 'die Antwort, -en', kollokation: 'eine Antwort geben', es: 'la respuesta' },
        { wort: 'die Bitte, -n', kollokation: 'eine Bitte formulieren', es: 'la petición' },
        { wort: 'sprechen', kollokation: 'ich spreche Deutsch', es: 'hablar' },
        { wort: 'fragen', kollokation: 'ich frage dich', es: 'preguntar' },
        { wort: 'antworten', kollokation: 'du antwortest kurz', es: 'responder' },
        { wort: 'wiederholen', kollokation: 'Noch einmal, bitte!', es: 'repetir' },
      ],
      hinweis: '„Eine Frage **stellen**“ ~~= hacer una pregunta (no se «hace», se «pone»).~~',
    },

    { type: 'rule' },

    // ── Erklärung ─────────────────────────────────────────────────
    {
      type: 'prose',
      eyebrow: 'Erklärung',
      card: true,
      titel: 'Keine Angst vor der Gruppe!',
      absaetze: [
        'Das Sprechen A1 machst du **nicht allein**: Du sitzt mit anderen Kandidaten zusammen. ~~Es la única parte en grupo de todo el examen — y es una ventaja, no una amenaza:~~ Du konkurrierst **nicht** mit den anderen. Jeder bekommt seine eigenen Punkte.',
        'Und noch besser: Du **hörst die Fragen der anderen** — so hast du Zeit und viele Modelle, bevor du selbst sprichst. ~~Mientras esperas tu turno, escuchas ejemplos.~~',
      ],
    },
    {
      type: 'tabelle',
      eyebrow: 'Erklärung — Die 3 Teile',
      kopf: ['Teil', 'Aufgabe', 'Material'],
      zeilen: [
        ['Teil 1', 'sich vorstellen ~~(presentarte)~~', 'kein Material — nur du'],
        ['Teil 2', 'Fragen stellen & antworten', 'Wortkarten (Thema + Wort)'],
        ['Teil 3', 'Bitten formulieren ~~(pedir algo)~~', 'Bildkarten ~~(tarjetas de imagen)~~'],
      ],
    },
    {
      type: 'tabelle',
      eyebrow: 'Erklärung — Aussprache-Minimum',
      kopf: ['Buchstabe(n)', 'So klingt es', 'Beispiel'],
      zeilen: [
        ['**W**', '~~como una v suave~~ /v/', '**W**asser, **w**ohnen, **w**ie'],
        ['**Z**', '/ts/ ~~(«ts», nunca como la z española)~~', '**z**wei, **z**ehn, **Z**eit'],
        ['**ei**', '~~«ai»~~', 'n**ei**n, m**ei**n, h**ei**ßen'],
        ['**ie**', '~~«i» larga~~', 's**ie**ben, w**ie**, B**ie**r'],
      ],
    },
    {
      type: 'redemittel',
      eyebrow: 'Erklärung — Notfallsätze',
      gruppen: [
        {
          fn: 'Du verstehst etwas nicht',
          saetze: [
            { satz: 'Wie bitte?', gloss: '¿Cómo? / ¿Perdón?' },
            { satz: 'Noch einmal, bitte.', gloss: 'Otra vez, por favor.' },
            { satz: 'Ich verstehe nicht.', gloss: 'No entiendo.' },
            { satz: 'Langsamer, bitte.', gloss: 'Más despacio, por favor.' },
          ],
        },
      ],
    },

    { type: 'rule' },

    // ── Beispiele ─────────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele — So klingt es',
      items: [
        { text: '**W**ie heißt du?', gl: '— suena «vi haist du» — ¿Cómo te llamas?' },
        { text: '**Z**wei Kaffee, bitte.', gl: '— suena «tsvai» — Dos cafés, por favor.' },
        { text: 'N**ei**n, danke.', gl: '— suena «nain» — No, gracias.' },
        { text: 'S**ie**ben Uhr.', gl: '— suena «síi-ben» — Las siete.' },
        { text: 'Wie bitte? Noch einmal, bitte.', gl: '— ¿Cómo? Otra vez, por favor. ~~Tu frase salvavidas.~~' },
      ],
    },

    { type: 'rule' },

    // ── Übungen ───────────────────────────────────────────────────
    {
      type: 'uebung',
      eyebrow: 'Anwendung — Übung 1 · Welcher Teil?',
      frage: 'Teil 1, 2 oder 3? ~~¿A qué parte pertenece cada frase?~~',
      loesungLabel: 'Lösung',
      aufgaben: [
        '„Ich heiße Ana und komme aus Peru.“',
        '„Was isst du zum Frühstück?“',
        '„Gib mir bitte den Stift.“',
      ],
      loesungen: [
        '**Teil 1** — sich vorstellen',
        '**Teil 2** — Fragen stellen',
        '**Teil 3** — Bitten formulieren',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 2 · Aussprache',
      frage: 'Wie klingt das? ~~Elige: v, ts, ai o i larga.~~',
      loesungLabel: 'Lösung',
      aufgaben: [
        '**w**ir',
        '**z**ehn',
        'm**ei**n Name',
        'v**ie**r',
      ],
      loesungen: [
        'wir — **/v/** ~~(«vir»)~~',
        'zehn — **/ts/** ~~(«tsen»)~~',
        'mein — **«ai»** ~~(«main»)~~',
        'vier — **«i» larga** ~~(«fíir»)~~',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 3 · Produzieren — Notfallsätze',
      frage: 'Was sagst du? ~~¿Qué dices en cada situación?~~ (a) Du verstehst die Frage nicht. (b) Der Prüfer spricht sehr schnell.',
      loesungLabel: 'Mögliche Lösung',
      loesung: '(a) *Wie bitte?* / *Noch einmal, bitte.* — (b) *Langsamer, bitte.* ~~Cualquier frase de emergencia correcta vale — lo importante es no quedarte callado.~~',
    },

    { type: 'rule' },

    // ── Prüfungsbezug ─────────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Sprechen · Überblick',
      titel: 'Kennst du das Format?',
      anweisung: 'Richtig oder falsch? ~~¿Verdadero o falso?~~',
      absaetze: [
        '{1} Ich spreche allein mit dem Prüfer.',
        '{2} Das Sprechen hat 3 Teile.',
        '{3} In Teil 2 gibt es Wortkarten, in Teil 3 Bildkarten.',
      ],
      loesungLabel: 'Lösung',
      loesungen: [
        '{1} **Falsch** — du sprichst **in der Gruppe**, mit anderen Kandidaten.',
        '{2} **Richtig.**',
        '{3} **Richtig.**',
      ],
      kommentar: 'Wie viele Karten und Punkte genau? Das zeigt dir der **offizielle Modellsatz**. ~~Haz al menos un Modellsatz oficial antes del examen.~~',
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Die Gruppe ist dein **Vorteil**: Bevor du sprichst, hörst du die anderen. ~~Escucha con atención las preguntas de los demás — cuando llegue tu turno, ya habrás oído varios modelos.~~',
    },

    { type: 'rule' },

    // ── Abschluss ─────────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Was?', 'Wie?'],
      zeilen: [
        ['Format', 'ca. 15 Minuten · **in der Gruppe** · 3 Teile'],
        ['Teil 1', 'sich vorstellen'],
        ['Teil 2', 'Fragen stellen & antworten (Wortkarten)'],
        ['Teil 3', 'Bitten formulieren (Bildkarten)'],
        ['Notfall', '*Wie bitte? Noch einmal, bitte. Ich verstehe nicht.*'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich kenne das Format: ca. 15 Minuten, in der Gruppe, 3 Teile.',
        'Ich weiß, was ich in Teil 1, 2 und 3 mache.',
        'Ich kenne die Notfallsätze und die Aussprache von W, Z, „ei“ und „ie“.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Jetzt kennst du die Landkarte — ab jetzt trainieren wir Teil für Teil. In der nächsten Lektion: **Teil 1 — sich vorstellen**. ~~Tu presentación completa, memorizada y a prueba de nervios.~~',
    },
  ],
}
