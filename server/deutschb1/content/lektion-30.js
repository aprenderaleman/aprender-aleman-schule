// Lektion 30 · Modul Sprechen — Überblick & Bewertung
//
// Bloque 2 · Modul Sprechen. Öffnet den Sprechen-Block: Format (3 Teile,
// Paarprüfung, ca. 15 Min.), Bewertung inkl. Aussprache (Fokus: typische
// Fehler spanischer Muttersprachler), Notstrategien gegen Blockaden.

export default {
  spec: ['Bloque 2', 'Prüfungsstrategie', 'Niveau B1', 'Prüfungsrelevanz: Sprechen'],
  h1: 'Modul Sprechen — Überblick & Bewertung',
  lead: 'Ca. **15 Minuten** zu zweit, **drei Teile** — und die Aussprache zählt mit. ~~El mapa completo del examen oral, antes de entrenar cada parte.~~',

  content: [
    // ── Lernziele ─────────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'das Format kennen: Paarprüfung, drei Teile, ca. 15 Minuten',
        'wissen, was bewertet wird — auch die **Aussprache**',
        'die vier typischen Aussprachefehler spanischer Muttersprachler vermeiden',
        'höflich nachfragen, wenn du etwas nicht verstehst',
      ],
    },

    { type: 'rule' },

    // ── Kernwortschatz ────────────────────────────────────────────
    {
      type: 'wortschatz',
      eyebrow: 'Kernwortschatz',
      items: [
        { wort: 'die Paarprüfung', kollokation: 'Sprechen ist eine Paarprüfung', es: 'examen oral en pareja' },
        { wort: 'der Prüfer / die Prüferin', kollokation: 'die Prüfer stellen Fragen', es: 'examinador/a' },
        { wort: 'die Vorbereitungszeit', kollokation: 'die Vorbereitungszeit gut nutzen', es: 'tiempo de preparación' },
        { wort: 'die Präsentation, -en', kollokation: 'eine Präsentation halten', es: 'presentación' },
        { wort: 'das Feedback', kollokation: 'kurzes Feedback geben', es: 'valoración, comentario' },
        { wort: 'die Aussprache', kollokation: 'an der Aussprache arbeiten', es: 'pronunciación' },
        { wort: 'der Wortakzent', kollokation: 'den Wortakzent richtig setzen', es: 'acento de la palabra' },
        { wort: 'die Satzmelodie', kollokation: 'Die Satzmelodie geht nach oben.', es: 'entonación' },
        { wort: 'deutlich', kollokation: 'langsam und deutlich sprechen', es: 'claro, con claridad' },
        { wort: 'nachfragen', kollokation: 'höflich nachfragen', es: 'volver a preguntar' },
        { wort: 'wiederholen', kollokation: 'Können Sie das wiederholen?', es: 'repetir' },
        { wort: 'bewerten', kollokation: 'Die Prüfer bewerten dein Deutsch.', es: 'evaluar' },
      ],
    },

    { type: 'rule' },

    // ── Erklärung ─────────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Erklärung — das Format',
      kopf: ['Teil', 'Was machst du?', 'Wie lange?'],
      zeilen: [
        ['Teil 1', 'Mit deinem Partner **gemeinsam etwas planen** (z. B. eine Party, einen Ausflug)', 'ein Gespräch zu zweit'],
        ['Teil 2', 'Eine **Präsentation** über ein Alltagsthema halten', 'ca. 3 Minuten'],
        ['Teil 3', 'Auf die Präsentation des Partners reagieren: **Feedback geben & Fragen**', 'eine kurze Reaktion'],
      ],
    },
    {
      type: 'prose',
      card: true,
      titel: 'Was wird bewertet?',
      absaetze: [
        'Die Prüfer bewerten u. a., ob du **die Aufgabe erfüllst**, wie du **mit deinem Partner interagierst**, deinen **Wortschatz**, deine **Strukturen** — und deine **Aussprache**. Die genaue Punktverteilung siehst du im offiziellen Modellsatz des Goethe-Instituts.',
        'Wichtig für B1: **Fehler sind normal.** Du musst nicht perfekt sprechen, sondern verständlich. ~~Comunicar vale más que la perfección: un error de gramática pesa menos que un silencio largo.~~',
      ],
    },
    {
      type: 'steps',
      eyebrow: 'Erklärung — Aussprache: die vier typischen Fehler',
      steps: [
        {
          badge: 'Vokale',
          titel: 'Lange und kurze Vokale',
          text: 'Die Vokallänge ändert die Bedeutung: __Stadt__ ~~(a corta)~~ ≠ __Staat__ ~~(a larga)~~, __bitten__ ≠ __bieten__. ~~En español todas las vocales suenan «medias» — en alemán la longitud distingue palabras.~~',
        },
        {
          badge: 'h',
          titel: 'Das h wird gesprochen',
          text: 'Am Wortanfang wird das __h__ gehaucht: **H**aus, **h**eute, **h**aben. ~~En español la h es muda — en alemán se aspira: «aus» y «Haus» son palabras distintas.~~',
        },
        {
          badge: 'Akzent',
          titel: 'Wortakzent',
          text: 'Meist liegt der Akzent auf der **ersten Silbe**: __**Ar**beit__, __**ein**kaufen__. Aber: __ver**ste**hen__, __Stu**dent**__. Sprich die betonte Silbe klar und etwas länger.',
        },
        {
          badge: 'Melodie',
          titel: 'Frageintonation',
          text: 'Bei Ja/Nein-Fragen geht die Stimme am Ende **nach oben**: „Kommst du mit? ↗“ Bei W-Fragen geht sie **nach unten**: „Wo wohnst du? ↘“ ~~Si la voz no sube, tu pregunta suena a afirmación.~~',
        },
      ],
    },

    { type: 'rule' },

    // ── Beispiele / Redemittel ────────────────────────────────────
    {
      type: 'redemittel',
      eyebrow: 'Beispiele — Notstrategien gegen Blockaden',
      gruppen: [
        {
          fn: 'Du hast etwas nicht verstanden',
          saetze: [
            { satz: 'Wie bitte?' },
            { satz: 'Können Sie das bitte wiederholen?' },
            { satz: 'Können Sie das bitte langsamer sagen?', gloss: '~~pedir repetición no resta puntos~~' },
          ],
        },
        {
          fn: 'Dir fehlt ein Wort',
          saetze: [
            { satz: 'Wie sagt man das auf Deutsch? Ich meine …' },
            { satz: 'Ich kenne das Wort nicht, aber es ist so ähnlich wie …', gloss: '~~parafrasea: describe la palabra~~' },
          ],
        },
        {
          fn: 'Du brauchst Zeit zum Denken',
          saetze: [
            { satz: 'Das ist eine gute Frage.' },
            { satz: 'Einen Moment, bitte.', gloss: '~~gana dos segundos sin quedarte en silencio~~' },
          ],
        },
      ],
    },

    { type: 'rule' },

    // ── Übungen ───────────────────────────────────────────────────
    {
      type: 'uebung',
      eyebrow: 'Anwendung — Übung 1 · Erkennen',
      frage: 'Teil 1, Teil 2 oder Teil 3?',
      loesungLabel: 'Lösung',
      aufgaben: [
        '„Wollen wir am Samstag zusammen kochen?“',
        '„Mein Thema ist: Einkaufen im Internet.“',
        '„Danke für deine Präsentation! Ich habe eine Frage …“',
        '„Das ist eine gute Idee, aber Samstag kann ich nicht.“',
      ],
      loesungen: [
        '**Teil 1** — ein Vorschlag beim gemeinsamen Planen.',
        '**Teil 2** — die Einleitung der Präsentation.',
        '**Teil 3** — Feedback und Frage nach der Präsentation.',
        '**Teil 1** — höfliche Ablehnung im Planungsgespräch.',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 2 · Aussprache',
      frage: 'Langer oder kurzer Vokal? Wo liegt der Akzent?',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Stadt — Staat: Welches Wort hat das lange a?',
        'bitten — bieten: Welches Wort hat das lange i?',
        'Wo liegt der Wortakzent: *einkaufen*?',
        'Wo liegt der Wortakzent: *verstehen*?',
      ],
      loesungen: [
        '**Staat** — langes a. ~~Stadt = a corta~~',
        '**bieten** — langes i. ~~«ie» se lee como i larga~~',
        '**EIN**kaufen — erste Silbe.',
        'ver**STE**hen — zweite Silbe ~~(ver- nunca lleva el acento)~~.',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 3 · Produzieren',
      frage: 'Was sagst du in dieser Situation?',
      loesungLabel: 'Mögliche Lösung',
      aufgaben: [
        'Die Prüferin stellt eine Frage. Du hast sie akustisch nicht verstanden.',
        'Dir fehlt das Wort „Rabatt“. Du willst die Idee trotzdem erklären.',
      ],
      loesungen: [
        '„Wie bitte? Können Sie die Frage bitte wiederholen?“ ~~también vale: Können Sie das langsamer sagen?~~',
        '„Ich kenne das Wort nicht genau — ich meine: Man bezahlt weniger, es ist billiger.“',
      ],
    },

    { type: 'rule' },

    // ── Prüfungsbezug ─────────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Sprechen · Strategie',
      titel: 'Nachfragen im Prüfungsgespräch',
      anweisung: 'Nach deiner Präsentation stellt die Prüferin eine Frage. Du verstehst sie nicht. Ergänze die passenden Sätze:',
      absaetze: [
        '**Prüferin:** „Welche Rolle spielt das in Ihrem Heimatland?“\n**Du:** „{1}“\n**Prüferin:** „Ist das in Ihrem Heimatland auch so?“\n**Du:** „Ach so! {2} In meinem Heimatland ist das ähnlich …“',
      ],
      optionen: ['(1) höflich nachfragen', '(2) Zeit zum Nachdenken gewinnen'],
      loesungLabel: 'Lösung',
      loesungen: [
        '{1} **Wie bitte? Können Sie die Frage bitte wiederholen?** — Nachfragen ist erlaubt und kostet keine Punkte.',
        '{2} **Das ist eine gute Frage.** — So gewinnst du zwei Sekunden zum Nachdenken.',
      ],
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Sprich lieber **langsam und deutlich** als schnell und undeutlich. Eine kurze Pause ist kein Problem — ein langes Schweigen schon. Und: **Nachfragen ist eine Kompetenz**, kein Fehler.',
    },

    { type: 'rule' },

    // ── Abschluss ─────────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Teil', 'Aufgabe', 'Deine Strategie'],
      zeilen: [
        ['Teil 1', 'gemeinsam etwas planen', 'Vorschläge machen & reagieren → Lektion 31'],
        ['Teil 2', 'Präsentation (ca. 3 Min.)', 'festes Gerüst in fünf Schritten → Lektion 32'],
        ['Teil 3', 'Feedback geben & Fragen', 'danken, loben, fragen → Lektion 33'],
        ['Bewertung', 'u. a. Wortschatz, Strukturen, Aussprache', 'deutlich sprechen, nachfragen statt schweigen'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich kenne die drei Teile des Moduls Sprechen und ihre Aufgaben.',
        'Ich weiß, dass auch die Aussprache bewertet wird, und kenne meine vier Risiko-Punkte.',
        'Ich kann höflich nachfragen, wenn ich etwas nicht verstehe.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Jetzt kennst du das Spielfeld. In der nächsten Lektion trainierst du **Teil 1**: mit deinem Partner etwas planen — Vorschläge machen, freundlich reagieren und dich am Ende einigen.',
    },
  ],
}
