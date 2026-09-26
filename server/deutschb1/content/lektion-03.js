// Lektion 03 · Diagnose B1 — Standortbestimmung
//
// Bloque 0 «Einführung» — qué distingue A2 de B1, tres mini-tests
// (gramática con remisión a las Lektionen 4-17, léxico, producción escrita)
// más el Kann-Check por módulo y el plan de los 5 bloques del curso.

export default {
  spec: ['Bloque 0', 'Einführung', 'Niveau B1', 'Prüfungsrelevanz: alle Module'],
  h1: 'Diagnose B1 — Standortbestimmung',
  lead: 'Drei Mini-Tests zeigen dir ehrlich, wo du stehst — und welche Lektionen du besonders brauchst. ~~Tu punto de partida, sin engañarte.~~',

  content: [
    // ── Lernziele ─────────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'den Unterschied zwischen A2 und B1 an konkreten Sätzen erkennen',
        'mit drei Mini-Tests im Übungsheft deine Stärken und Schwächen finden',
        'wissen, welche Lektion dir bei welchem Fehler hilft',
        'den Plan des Kurses (fünf Blöcke) kennen',
      ],
    },

    { type: 'rule' },

    // ── Kernwortschatz ────────────────────────────────────────────
    {
      type: 'wortschatz',
      eyebrow: 'Kernwortschatz — über das Lernen sprechen',
      items: [
        { wort: 'die Stärke, -n', kollokation: 'meine Stärken kennen', es: 'el punto fuerte' },
        { wort: 'die Schwäche, -n', kollokation: 'an meinen Schwächen arbeiten', es: 'el punto débil' },
        { wort: 'der Fehler, -', kollokation: 'einen Fehler machen — und daraus lernen', es: 'el error' },
        { wort: 'üben', kollokation: 'jeden Tag ein bisschen üben', es: 'practicar' },
        { wort: 'wiederholen', kollokation: 'die Regel noch einmal wiederholen', es: 'repasar' },
        { wort: 'verbessern', kollokation: 'mein Schreiben verbessern', es: 'mejorar' },
        { wort: 'das Ziel, -e', kollokation: 'ein klares Ziel haben', es: 'el objetivo, la meta' },
        { wort: 'der Plan, ·Pläne', kollokation: 'einen Lernplan machen', es: 'el plan' },
        { wort: 'der Fortschritt, -e', kollokation: 'Fortschritte sehen', es: 'el progreso' },
        { wort: 'einschätzen', kollokation: 'mein Niveau realistisch einschätzen', es: 'valorar, autoevaluar(se)' },
        { wort: 'das Ergebnis, -se', kollokation: 'das Ergebnis vom Test notieren', es: 'el resultado' },
      ],
      hinweis: '~~«Üben» (practicar) no es «probar» (probieren/versuchen) — falso amigo típico al empezar B1.~~',
    },

    { type: 'rule' },

    // ── Erklärung ─────────────────────────────────────────────────
    {
      type: 'prose',
      eyebrow: 'Erklärung — A2 oder B1?',
      absaetze: [
        'Auf **A2** sprichst du in **kurzen Hauptsätzen** über Konkretes: Familie, Einkaufen, Alltag. Auf **B1** verbindest du Sätze mit __weil, obwohl, dass__, erzählst über die **Vergangenheit**, sagst deine **Meinung mit Begründung** und bittest **höflich** um etwas. ~~La diferencia no es saber más palabras, sino conectar ideas y justificar opiniones.~~',
      ],
    },
    {
      type: 'vergleich',
      eyebrow: 'Erklärung — so klingt der Unterschied',
      titel: 'Derselbe Inhalt, zwei Niveaus',
      zeilen: [
        { satz: 'Ich lerne Deutsch. Ich will in Deutschland arbeiten.', label: 'A2 — zwei einfache Sätze' },
        { satz: 'Ich lerne Deutsch, **weil** ich in Deutschland arbeiten möchte.', label: 'B1 — Nebensatz mit weil' },
        { satz: 'Das Zimmer war klein. Das Hotel war gut.', label: 'A2 — ohne Verbindung' },
        { satz: 'Das Hotel hat mir gefallen, **obwohl** das Zimmer klein war.', label: 'B1 — Kontrast mit obwohl' },
        { satz: 'Geben Sie mir bitte Wasser.', label: 'A2 — direkt' },
        { satz: '**Könnten** Sie mir bitte ein Glas Wasser bringen?', label: 'B1 — höflich mit Konjunktiv II' },
      ],
    },
    {
      type: 'prose',
      card: true,
      titel: 'So funktioniert die Diagnose',
      absaetze: [
        'Die **drei Mini-Tests** findest du im **Übungsheft** zu dieser Lektion: Grammatik & Wortschatz, Lesen und Schreiben. Mach sie **ohne Hilfe** und notiere deine Fehler. Bei den Korrekturen steht, **welche Lektion** dir hilft — so wird aus dem Test dein **persönlicher Lernplan**. Fehlen dir Alltagswörter wie *Miete* oder *Bewerbung*? Dann hilft dir Block 3 (Lektionen 34–41). ~~No pasa nada por fallar: para eso está el diagnóstico.~~',
      ],
    },

    { type: 'rule' },

    // ── Mehr Beispiele ────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Mehr Beispiele',
      titel: 'Über das Lernen sprechen',
      items: [
        { text: 'Meine **Stärke** ist Lesen, meine **Schwäche** ist noch die Aussprache.', gl: '— punto fuerte · punto débil' },
        { text: 'Aus jedem **Fehler** lerne ich etwas — deshalb notiere ich ihn.', gl: '— deshalb + verbo en posición 2' },
        { text: 'Ich **übe** jeden Tag, **weil** ich mein Sprechen **verbessern** möchte.', gl: '— weil: verbo conjugado al final' },
        { text: 'Vor der Prüfung **wiederhole** ich die Regeln zum Perfekt.', gl: '— repasar' },
        { text: 'Farida hat ein klares **Ziel**: B1 im Dezember.', gl: '— la meta' },
        { text: 'Nach einem Monat sieht Jonas schon große **Fortschritte**.', gl: '— el progreso' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'Selbst einschätzen',
      titel: 'Ehrlich mit dir selbst',
      items: [
        { text: 'Ich **schätze** mein Niveau realistisch **ein**: Hören ist fast B1, Schreiben noch A2.', gl: '— einschätzen es separable' },
        { text: 'Das **Ergebnis** vom Mini-Test notiere ich in meinem Heft.', gl: '— el resultado' },
        { text: 'Mein **Plan**: montags Grammatik, mittwochs Wortschatz, freitags Schreiben.', gl: '— el plan semanal' },
        { text: 'Wenn ich einen Fehler finde, **verbessere** ich ihn sofort.', gl: '— tras la frase con wenn: verbo + sujeto' },
      ],
    },

    { type: 'rule' },

    // ── Prüfungsbezug ─────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Prüfungsbezug — Kann-Check pro Modul',
      kopf: ['Modul', 'Kannst du das schon?'],
      zeilen: [
        ['Lesen', 'die Hauptidee eines Blogs oder einer E-Mail verstehen, ohne jedes Wort zu kennen'],
        ['Hören', 'eine Durchsage am Bahnhof verstehen und die wichtige Information notieren'],
        ['Schreiben', 'eine E-Mail mit ca. 80 Wörtern schreiben — mit Anrede, Gruß und Begründungen'],
        ['Sprechen', 'mit einem Partner etwas planen und deine Meinung höflich sagen'],
      ],
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Kreuze ehrlich an: **„kann ich“ / „kann ich halb“ / „kann ich noch nicht“**. Notiere dein Ergebnis von heute — und wiederhole die drei Mini-Tests im Übungsheft **nach Block 1**. Fortschritt sehen ist die beste Motivation.',
    },

    { type: 'rule' },

    // ── Abschluss ─────────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung — dein Kursplan',
      kopf: ['Block', 'Lektionen', 'Inhalt'],
      zeilen: [
        ['0 · Einführung', '1–3', 'Prüfung, digitales Format, Diagnose — hier bist du jetzt'],
        ['1 · Grammatik & Struktur', '4–17', 'die B1-Grammatik von Konnektoren bis reflexive Verben'],
        ['2 · Prüfungsstrategie', '18–33', 'jedes Modul Teil für Teil: Lesen, Hören, Schreiben, Sprechen'],
        ['3 · Themenfelder & Wortschatz', '34–41', 'Arbeit, Wohnen, Gesundheit, Reisen und mehr'],
        ['4 · Prüfungssimulation', '42–43', 'zwei komplette Simulationen mit Korrektur und Strategien'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich kann an einem Satz erkennen, ob er A2 oder B1 ist.',
        'Ich habe die drei Mini-Tests im Übungsheft gemacht und meine Fehler notiert.',
        'Ich weiß, welche Lektionen für mich am wichtigsten sind.',
        'Ich kenne den Plan der fünf Blöcke.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Jetzt startet Block 1 mit dem wichtigsten B1-Werkzeug: **Sätze verbinden**. In der nächsten Lektion lernst du *weil, denn* und *deshalb* — drei Wörter, mit denen du ab sofort jede Meinung begründen kannst.',
    },
  ],
}
