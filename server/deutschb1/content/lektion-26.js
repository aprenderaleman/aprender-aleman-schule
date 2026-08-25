// Lektion 26 · Modul Schreiben — Überblick & Bewertung
//
// Bloque 2 (Prüfungsstrategie) — Auftakt des Schreib-Moduls: die drei
// Aufgaben mit Zeitplan (20/25/15), die vier Bewertungskriterien mit
// B1-Beispielen und die Selbstkorrektur-Checkliste. Prüfungsbezug:
// Fehlersuche in einer Schüler-E-Mail. Lektion 27-29 vertiefen die Teile.

export default {
  spec: ['Bloque 2', 'Prüfungsstrategie', 'Niveau B1', 'Prüfungsrelevanz: Schreiben (alle drei Teile)'],
  h1: 'Modul Schreiben — Überblick & Bewertung',
  lead: 'Drei Texte in 60 Minuten: eine E-Mail an einen Freund, eine Meinung fürs Forum und eine kurze formelle E-Mail. ~~Hoy aprendes el mapa del módulo; las tres próximas lecciones entran en cada texto.~~',

  content: [
    // ── Lernziele ─────────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'die drei Aufgaben des Moduls Schreiben und den Zeitplan (20/25/15 Minuten) kennen',
        'verstehen, was die vier Bewertungskriterien konkret bedeuten',
        'mit einer Checkliste typische Fehler im eigenen Text selbst finden',
      ],
    },

    { type: 'rule' },

    // ── Kernwortschatz ────────────────────────────────────────────
    {
      type: 'wortschatz',
      eyebrow: 'Kernwortschatz',
      items: [
        { wort: 'die Aufgabe', kollokation: 'die Aufgabe genau lesen', es: 'la tarea, la consigna' },
        { wort: 'der Punkt', kollokation: 'alle drei Punkte behandeln', es: 'el punto (de la consigna)' },
        { wort: 'der Empfänger', kollokation: 'an den richtigen Empfänger denken', es: 'el destinatario' },
        { wort: 'die Anrede', kollokation: 'mit der Anrede beginnen', es: 'el saludo inicial' },
        { wort: 'die Grußformel', kollokation: 'mit einer Grußformel enden', es: 'la despedida' },
        { wort: 'der Forumsbeitrag', kollokation: 'einen Forumsbeitrag schreiben', es: 'la entrada de foro' },
        { wort: 'die Meinung', kollokation: 'seine Meinung begründen', es: 'la opinión' },
        { wort: 'die Bewertung', kollokation: 'die Bewertung verstehen', es: 'la evaluación' },
        { wort: 'der Fehler', kollokation: 'Fehler suchen und korrigieren', es: 'el error' },
        { wort: 'kontrollieren', kollokation: 'den Text am Ende kontrollieren', es: 'revisar, repasar' },
        { wort: 'die Zeit', kollokation: 'sich die Zeit gut einteilen', es: 'administrar(se) el tiempo' },
        { wort: 'das Komma', kollokation: 'ein Komma vor „dass“ setzen', es: 'la coma' },
      ],
    },

    { type: 'rule' },

    // ── Erklärung ─────────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Erklärung — die drei Aufgaben',
      kopf: ['Teil', 'Text', 'Wörter', 'Zeit'],
      zeilen: [
        ['Teil 1', 'informelle E-Mail an eine Freundin / einen Freund', '~80', 'empf. 20 Min.'],
        ['Teil 2', 'Forumsbeitrag: deine Meinung zu einem Thema', '~80', 'empf. 25 Min.'],
        ['Teil 3', 'formelle E-Mail (z. B. an eine Lehrerin, einen Chef)', '~40', 'empf. 15 Min.'],
      ],
    },
    {
      type: 'prose',
      card: true,
      absaetze: [
        'Du hast **60 Minuten für alle drei Texte zusammen** — die Reihenfolge wählst du selbst. Jeder Teil wird einzeln bewertet, also gilt: **Lieber drei einfache, komplette Texte** als einen perfekten und zwei halbe. ~~No hay descanso entre tareas: el reparto 20/25/15 lo gestionas tú.~~',
      ],
    },
    {
      type: 'tabelle',
      eyebrow: 'Erklärung — die vier Kriterien',
      kopf: ['Kriterium', 'Die Frage dahinter', 'B1-Beispiel'],
      zeilen: [
        ['Erfüllung', 'Alle Punkte der Aufgabe? Richtiges Register (du/Sie)?', 'Drei Punkte in der Aufgabe → drei Punkte im Text'],
        ['Kohärenz', 'Ist der Text logisch verbunden?', 'und, aber, weil, deshalb, dann, trotzdem'],
        ['Wortschatz', 'Passen die Wörter? Gibt es Abwechslung?', 'statt dreimal *gut*: toll, interessant, praktisch'],
        ['Strukturen', 'Verbposition, Zeiten, Endungen korrekt?', 'Ich glaube, **dass** ich kommen **kann**.'],
      ],
    },
    {
      type: 'steps',
      eyebrow: 'Erklärung — die Checkliste zum Kontrollieren',
      steps: [
        {
          titel: 'Großschreibung',
          text: 'Alle __Nomen__ groß: *die Einladung, der Termin, das Wochenende*. ~~En español van en minúscula — es el error número uno del hispanohablante.~~',
        },
        {
          titel: 'Verb auf Position 2',
          text: 'Im Hauptsatz steht das __Verb immer an zweiter Stelle__: *Am Samstag **komme** ich.* — nicht *Am Samstag ich komme.*',
        },
        {
          titel: 'Komma vor dass / weil',
          text: 'Vor __dass__ und __weil__ steht ein Komma, und das Verb geht ans Ende: *Ich freue mich**,** weil du kommst.* ~~En español la coma ante «porque» es opcional; en alemán es obligatoria.~~',
        },
        {
          titel: 'Artikel und Genus',
          text: 'Der, die oder das? Prüfe die __häufigen Wörter__: **die** E-Mail, **der** Termin, **das** Problem, **die** Arbeit.',
        },
      ],
    },

    { type: 'rule' },

    // ── Beispiele ─────────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele — so sehen die Kriterien im Text aus',
      items: [
        { text: '**Erfüllung:** Die Aufgabe nennt drei Punkte → dein Text braucht **drei kleine Absätze**.', gl: '— ein fehlender Punkt kostet sofort Punkte' },
        { text: '**Kohärenz:** *Ich komme gern. **Aber** ich habe erst um 18 Uhr Zeit, **weil** ich arbeite.*', gl: '— Verbindungswörter machen den Text logisch' },
        { text: '**Wortschatz:** *Das Fest war **toll**, das Essen **lecker**, das Wetter **super**.*', gl: '— Abwechslung statt dreimal *gut*' },
        { text: '**Strukturen:** *Ich glaube, dass ich am Samstag kommen **kann**.*', gl: '— nach „dass“ geht das Verb ans Ende' },
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
        'Du schreibst deiner Freundin, warum du nicht zu ihrer Party kommen kannst.',
        '„Sollten Kinder ein Handy haben?“ — Schreib deine Meinung dazu.',
        'Du schreibst deiner Lehrerin, dass du morgen nicht zum Kurs kommen kannst.',
        'Du erzählst einem Freund von deinem Umzug und lädst ihn ein.',
      ],
      loesungen: [
        '**Teil 1** — informelle E-Mail an eine Freundin (du-Register).',
        '**Teil 2** — Forumsbeitrag mit Meinung.',
        '**Teil 3** — formelle E-Mail an die Lehrerin (Sie-Register).',
        '**Teil 1** — informelle E-Mail an einen Freund.',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 2 · Kriterium zuordnen',
      frage: 'Welches Kriterium ist hier das Problem — Erfüllung, Kohärenz, Wortschatz oder Strukturen?',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Die Aufgabe hat drei Punkte, aber die E-Mail behandelt nur einen.',
        '„Ich komme nicht. Ich bin krank. Ich habe Fieber. Ich bleibe zu Hause.“ ~~(frases sueltas, sin conectores)~~',
        '„Das Essen war gut, das Wetter war gut, der Film war gut.“',
        '„Ich glaube, dass ich kann kommen.“',
      ],
      loesungen: [
        '**Erfüllung** — zwei Punkte fehlen.',
        '**Kohärenz** — keine Verbindungswörter: *Ich komme nicht, **weil** ich krank bin und Fieber habe. **Deshalb** bleibe ich zu Hause.*',
        '**Wortschatz** — dreimal *gut*: besser *lecker, schön, spannend*.',
        '**Strukturen** — nach „dass“ Verb ans Ende: *…, dass ich kommen **kann**.*',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 3 · Korrigieren',
      frage: 'Korrigiere mit der Checkliste. Jeder Satz hat genau einen Fehler.',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Ich danke dir für deine einladung.',
        'Am Samstag ich komme zu deiner Party.',
        'Ich freue mich weil wir uns lange nicht gesehen haben.',
      ],
      loesungen: [
        'Ich danke dir für deine **Einladung**. ~~mayúscula: los sustantivos siempre~~',
        'Am Samstag **komme ich** zu deiner Party. ~~verbo en posición 2~~',
        'Ich freue mich**,** weil wir uns lange nicht gesehen haben. ~~coma obligatoria ante weil~~',
      ],
    },

    { type: 'rule' },

    // ── Prüfungsbezug ─────────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Schreiben · Fehlersuche',
      titel: 'Fünf Fehler in einer Schüler-E-Mail',
      anweisung: 'Ein B1-Schüler hat diese kurze E-Mail geschrieben — mit fünf typischen Fehlern. Finde und korrigiere sie mit der Checkliste.',
      absaetze: [
        '„Liebe Anna:\nich danke dir für deine einladung. Ich glaube, dass ich kann am Samstag kommen. Ich freue mich weil wir haben uns lange nicht gesehen.\nViele Grüße\nSofía“',
      ],
      loesungLabel: 'Lösung',
      loesungen: [
        '**Liebe Anna,** — nach der Anrede steht ein **Komma**, kein Doppelpunkt. ~~«Querida Anna:» es español; en alemán, coma.~~',
        'deine **Einladung** — Nomen groß.',
        '…, dass ich am Samstag **kommen kann** — nach „dass“ geht das Verb ans Ende.',
        'Ich freue mich**,** weil… — Komma vor „weil“.',
        '…, weil wir uns lange nicht **gesehen haben** — auch nach „weil“ Verb ans Ende.',
      ],
      kommentar: 'Korrekt ist übrigens das kleine *ich* nach der Anrede: Nach dem Komma schreibt man **klein** weiter. Die korrigierte E-Mail: *„Liebe Anna,\nich danke dir für deine Einladung. Ich glaube, dass ich am Samstag kommen kann. Ich freue mich, weil wir uns lange nicht gesehen haben.\nViele Grüße\nSofía“*',
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Beginne mit dem Teil, der dir am leichtesten fällt — die Reihenfolge ist frei. Und reserviere pro Text **2-3 Minuten am Ende** nur für die Checkliste: Großschreibung, Verb, Komma, Artikel. Diese Minuten bringen mehr Punkte als drei zusätzliche Sätze.',
    },

    { type: 'rule' },

    // ── Abschluss ─────────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Baustein', 'Das Wichtigste'],
      zeilen: [
        ['Teil 1', 'informelle E-Mail (du) · ~80 Wörter · 20 Min.'],
        ['Teil 2', 'Forumsbeitrag mit Meinung · ~80 Wörter · 25 Min.'],
        ['Teil 3', 'formelle E-Mail (Sie) · ~40 Wörter · 15 Min.'],
        ['Bewertung', 'Erfüllung · Kohärenz · Wortschatz · Strukturen'],
        ['Checkliste', 'Großschreibung · Verb Position 2 · Komma vor dass/weil · Artikel'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich kenne die drei Aufgaben des Moduls Schreiben und den Zeitplan 20/25/15.',
        'Ich weiß, was die vier Kriterien bedeuten, und erkenne sie in Beispielen.',
        'Ich finde mit der Checkliste die häufigsten Fehler in einem Text.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Jetzt kennst du die Landkarte des Moduls. In der nächsten Lektion schreibst du den ersten Text komplett: die **informelle E-Mail an einen Freund** (Teil 1) — mit der Struktur reagieren → erzählen → fragen und einem kommentierten Musterbeispiel.',
    },
  ],
}
