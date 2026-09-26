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
        'Die Prüfer bewerten u. a., ob du **die Aufgabe erfüllst**, wie du **mit deinem Partner sprichst und reagierst**, deinen **Wortschatz**, deine **Strukturen** — und deine **Aussprache**. Wie viele Punkte es für jeden Bereich gibt, siehst du im offiziellen Übungstest deiner Prüfung.',
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
      eyebrow: 'Beispiele — Hilfe, wenn du nicht weiterweißt',
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

    // ── Mehr Beispiele ────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Mehr Beispiele',
      kicker: 'Kernwortschatz',
      titel: 'Sätze rund um die Prüfung',
      items: [
        { text: 'Das Modul Sprechen ist eine **Paarprüfung**: Du sprichst mit einem Partner.' },
        { text: 'In der **Vorbereitungszeit** machst du dir kurze Notizen.', gl: '— Stichwörter, keine ganzen Sätze' },
        { text: 'Nach deiner **Präsentation** gibt dir dein Partner ein kurzes **Feedback**.' },
        { text: 'Die **Prüferin** hört genau zu und **bewertet** auch deine **Aussprache**.' },
        { text: '„Entschuldigung, können Sie die Frage bitte **wiederholen**?“', gl: '— höflich **nachfragen**' },
        { text: 'Sprich langsam und **deutlich** — und achte auf den **Wortakzent**: ver**ste**hen.' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'Aussprache',
      titel: 'Lang oder kurz, oben oder unten?',
      items: [
        { text: '**Stadt** (kurzes a) — **Staat** (langes a)', gl: '~~ciudad — Estado~~' },
        { text: '**bitten** (kurzes i) — **bieten** (langes i)', gl: '~~pedir — ofrecer; «ie» = i larga~~' },
        { text: '**Haus** — **aus**: Das h hörst du.', gl: '~~casa — fuera de / de~~' },
        { text: '**ein**kaufen, **Ar**beit — aber: ver**ste**hen, Stu**dent**', gl: '~~ver- nunca lleva el acento~~' },
        { text: 'Die **Satzmelodie**: „Hast du Zeit? ↗“ — „Wann hast du Zeit? ↘“', gl: '— Ja/Nein-Frage nach oben, W-Frage nach unten' },
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
      text: 'Sprich lieber **langsam und deutlich** als schnell und undeutlich. Eine kurze Pause ist kein Problem — ein langes Schweigen schon. Und: **Nachfragen ist eine Stärke**, kein Fehler.',
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
        'Ich weiß, dass auch die Aussprache bewertet wird, und kenne meine vier typischen Fehler.',
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
