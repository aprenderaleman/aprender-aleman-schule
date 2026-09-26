// Lektion 23 · Modul Hören — Überblick
//
// Bloque 2 — abre el módulo Hören (Lektionen 23-26). FIJA EL CANON INTERNO
// del módulo: ca. 40 Minuten, 4 Teile (T1 Gespräche & Ansagen, T2 Interview,
// T3 Diskussion, T4 Vortrag). Detalles finos (nº de ítems, veces que se
// escucha cada Teil) → siempre en genérico + remisión al Modellsatz.
// Instala además la metodología de práctica sin audio (Transkripte).

export default {
  spec: ['Bloque 2', 'Modul Hören', 'Niveau B2', 'Prüfungsrelevanz: Hören'],
  h1: 'Modul Hören — Überblick',
  lead: 'Ca. 40 Minuten, vier Teile — vom kurzen Alltagsgespräch bis zum Vortrag. Hier bekommst du die Landkarte des Moduls, die Grundstrategie und die Methode, mit der du in diesem Kurs auch ohne Audio prüfungsnah übst.',

  content: [
    // ── Lernziele ─────────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'die vier Teile des Moduls Hören und ihre typischen Aufgaben kennen',
        'die Aufgaben **vor** dem Hören lesen und den Inhalt antizipieren',
        'ruhig weiterarbeiten, wenn du den Faden verlierst',
        'mit Transkripten prüfungsnah trainieren — auch ohne Audio',
      ],
    },

    { type: 'rule' },

    // ── Kernwortschatz ────────────────────────────────────────────
    {
      type: 'wortschatz',
      eyebrow: 'Kernwortschatz — die Sprache der Aufgaben',
      items: [
        { wort: 'die Ansage, -n', kollokation: 'eine Ansage am Bahnhof hören', es: 'anuncio (por megafonía)' },
        { wort: 'die Durchsage, -n', kollokation: 'auf die Durchsage achten', es: 'aviso por altavoz' },
        { wort: 'das Gespräch, -e', kollokation: 'ein Gespräch zwischen zwei Personen', es: 'conversación' },
        { wort: 'die Aussage, -n', kollokation: 'Welche Aussage ist richtig?', es: 'afirmación, enunciado' },
        { wort: 'die Aufgabe, -n', kollokation: 'die Aufgaben vor dem Hören lesen', es: 'tarea, ítem' },
        { wort: 'ankreuzen', kollokation: 'die richtige Lösung ankreuzen', es: 'marcar (la casilla)' },
        { wort: 'zuordnen', kollokation: 'die Aussagen den Personen zuordnen', es: 'asignar, emparejar' },
        { wort: 'richtig / falsch', kollokation: 'richtig oder falsch ankreuzen', es: 'verdadero / falso' },
        { wort: 'der Sprecher, - / die Sprecherin, -nen', kollokation: 'Wie viele Sprecher hörst du?', es: 'hablante' },
        { wort: 'die Notiz, -en', kollokation: 'sich kurze Notizen machen', es: 'nota, apunte' },
        { wort: 'der Modellsatz, -sätze', kollokation: 'den offiziellen Modellsatz durcharbeiten', es: 'examen modelo' },
      ],
      hinweis: 'Vorsicht, ähnliche Wörter: die **Ansage** hörst du (megafonía), die **Aussage** liest du in der Aufgabe. ~~No confundas tampoco „ankreuzen“ (marcar) con „unterstreichen“ (subrayar).~~',
    },

    { type: 'rule' },

    // ── Erklärung ─────────────────────────────────────────────────
    {
      type: 'prose',
      eyebrow: 'Erklärung — das Modul auf einen Blick',
      absaetze: [
        'Das Modul Hören dauert **ca. 40 Minuten** und hat **vier Teile**. Vor jedem Teil bekommst du Zeit, die Aufgaben zu lesen — diese Sekunden entscheiden mehr als das Hören selbst. Wie viele Aufgaben jeder Teil hat und wie oft du jeden Text hörst, zeigt dir der **offizielle Modellsatz**; einige Texte laufen in der Regel nur **einmal** — trainiere deshalb von Anfang an das Hören ohne „Zurückspulen“.',
      ],
    },
    {
      type: 'tabelle',
      eyebrow: 'Erklärung — die vier Teile',
      kopf: ['Teil', 'Was du hörst', 'Typische Aufgabe'],
      zeilen: [
        ['Teil 1', 'kurze Gespräche & Ansagen aus dem Alltag', 'ein konkretes Detail erfassen (z. B. richtig/falsch, Auswahl)'],
        ['Teil 2', 'Interview (Moderator + Gast)', 'Kernaussagen des Gastes verstehen (Auswahl)'],
        ['Teil 3', 'Diskussion mit mehreren Personen', 'Wer sagt was? — Aussagen zuordnen'],
        ['Teil 4', 'Vortrag (eine Person, strukturiert)', 'der Argumentationslinie folgen (Auswahl)'],
      ],
    },
    {
      type: 'steps',
      eyebrow: 'Erklärung — die Grundstrategie',
      steps: [
        {
          titel: 'Vor dem Hören: Aufgaben lesen',
          text: 'Nutze jede Lesezeit und markiere in jeder Aufgabe das __Schlüsselwort__ (wer? wann? wo? was ändert sich?). So weißt du, **wonach** du hörst.',
        },
        {
          titel: 'Antizipieren',
          text: 'Aus der Situation kannst du viel vorhersagen: Bei „Bahnhofsdurchsage“ erwartest du __Gleis, Uhrzeit, Verspätung__. Wer erwartet, versteht schneller.',
        },
        {
          titel: 'Während des Hörens: nicht übersetzen',
          text: 'Folge dem Text global und notiere höchstens __Stichwörter und Zahlen__ — nie ganze Sätze. ~~Si intentas traducir al español mentalmente, el audio se te escapa.~~',
        },
        {
          titel: 'Faden verloren? Weiter!',
          text: 'Bleib **nie** an einer Aufgabe hängen: kreuze im Zweifel etwas an und steig bei der __nächsten Aufgabe__ neu ein. Falsche Antworten geben keinen Punktabzug — Raten lohnt sich immer, eine Lücke nie.',
        },
      ],
    },
    {
      type: 'prose',
      eyebrow: 'Erklärung — so übst du in diesem Kurs ohne Audio',
      card: true,
      titel: 'Die Transkript-Methode',
      absaetze: [
        'Dieser Kurs hat kein Audio — die Hörtexte stehen als **Transkripte** da, markiert mit ~~(en el examen: audio)~~. Drei Regeln, damit das Training echt bleibt: **(1)** Lies das Transkript nur **einmal**, in normalem Sprechtempo, ohne zurückzuspringen — oder lass es dir **vorlesen**. **(2)** Decke die Lösung ab, bis du geantwortet hast. **(3)** Ergänze dein Training regelmäßig mit den **offiziellen Modellsätzen** — kostenlos und mit echtem Audio. Transkript = Technik-Übung, Modellsatz = Generalprobe.',
      ],
    },

    { type: 'rule' },

    // ── Beispiele ─────────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele — Arbeitsanweisungen verstehen',
      kicker: 'Anweisungen',
      titel: 'Diese Sätze rahmen jeden Teil',
      items: [
        { text: '„**Lesen Sie zuerst die Aufgaben.** Dafür haben Sie etwas Zeit.“', gl: '— tu ventana para leer y anticipar' },
        { text: '„Sie hören den Text **einmal** / **zweimal**.“', gl: '— fíjate siempre en esta frase' },
        { text: '„**Wählen Sie** bei jeder Aufgabe die richtige Lösung.“' },
        { text: '„**Wer sagt was?** Ordnen Sie die Aussagen den Personen zu.“' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'Antizipation',
      titel: 'Von der Aufgabe zur Erwartung',
      items: [
        { text: 'Aufgabe: „Der Zug fährt später ab.“ → Du hörst auf **Uhrzeiten** und Wörter wie *Verspätung, verschoben*.' },
        { text: 'Aufgabe: „Die Expertin hält Homeoffice für produktiver.“ → Du hörst auf **Meinungsverben** und Vergleiche (*besser als, eher*).' },
        { text: 'Aufgabe: „Der Kurs findet in einem anderen Raum statt.“ → Du hörst auf **Ortsangaben** und *statt, nicht … sondern*.' },
      ],
    },

    { type: 'rule' },

    // ── Mehr Beispiele ────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Mehr Beispiele',
      titel: 'Rund um das Modul Hören',
      items: [
        { text: 'Vor jedem Teil hast du etwas Zeit, die **Aufgaben** zu lesen.', gl: '— aprovéchala para marcar las palabras clave' },
        { text: 'In Teil 3 **ordnest** du jede **Aussage** einer **Sprecherin** oder einem **Sprecher zu**.', gl: '— ¿quién dice qué?' },
        { text: 'Die **Durchsage** läuft nur einmal — mach dir sofort eine kurze **Notiz** zu Gleis und Uhrzeit.', gl: '' },
        { text: 'Wenn du unsicher bist, **kreuz** trotzdem eine Lösung **an**.', gl: '— una casilla vacía nunca puntúa' },
        { text: 'Im **Gespräch** widerspricht die Kundin dem Verkäufer — Aussage b ist also **falsch**.', gl: '' },
        { text: 'Einen kompletten **Modellsatz** solltest du vor der Prüfung mindestens einmal mit echtem Audio hören.', gl: '— la prueba general' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'Ansage oder Aussage?',
      titel: 'Ähnliche Wörter, andere Bedeutung',
      items: [
        { text: 'Die **Ansage** im Zug war kaum zu verstehen.', gl: '— lo que se oye por megafonía' },
        { text: 'Welche **Aussage** passt zum Text?', gl: '— lo que lees en la tarea' },
        { text: 'Nach der **Durchsage** liefen alle Reisenden zu Gleis 3.', gl: '— aviso por altavoz' },
        { text: 'Die Zeugin hat bei der Polizei eine **Aussage** gemacht.', gl: '— declaración: otro uso frecuente' },
      ],
    },

    { type: 'rule' },

    // ── Transkript zum Mitlesen ───────────────────────────────────
    {
      type: 'modell',
      eyebrow: 'Transkript — die Methode testen',
      thema: 'Lies die Durchsage nur einmal in normalem Tempo, ohne zurückzuspringen. ~~(En el examen es audio: entrénate a captar lo esencial a la primera.)~~',
      absaetze: [
        '==Durchsage im Kaufhaus:== „Liebe Kundinnen und Kunden, wegen einer technischen Störung schließt unser Kaufhaus heute bereits um 17 Uhr. Die Abholung bestellter Waren ist morgen ab 9.30 Uhr wieder möglich. Bitte bringen Sie dafür Ihre Abholnummer mit. Wir danken für Ihr Verständnis.“',
      ],
    },

    { type: 'rule' },

    // ── Prüfungsbezug ─────────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Modul Hören · Trainingsformat',
      titel: 'Eine Ansage, zwei Aufgaben',
      anweisung: 'Lies zuerst die beiden Aufgaben, dann das Transkript **einmal** in normalem Tempo ~~(en el examen: audio)~~. Kreuze an.',
      absaetze: [
        '„Herzlich willkommen zur Führung durch das Stadtmuseum. Wir beginnen in etwa zehn Minuten am Haupteingang. Bitte beachten Sie: Die Ausstellung im zweiten Stock ist heute wegen Umbauarbeiten geschlossen. Dafür zeigen wir Ihnen zusätzlich das neue Fotoarchiv im Erdgeschoss. Fotografieren ist in allen Räumen erlaubt, allerdings ohne Blitz.“',
      ],
      optionen: [
        '(1) Die Führung beginnt sofort am Haupteingang. — richtig / falsch',
        '(2) Was können die Besucher heute **nicht** sehen? a) das Fotoarchiv · b) die Ausstellung im zweiten Stock · c) das Erdgeschoss',
      ],
      loesungLabel: 'Lösung',
      loesungen: [
        '(1) **falsch** — sie beginnt „in etwa zehn Minuten“, nicht sofort.',
        '(2) **b)** — der zweite Stock ist wegen Umbauarbeiten geschlossen; das Fotoarchiv wird *zusätzlich* gezeigt.',
      ],
      kommentar: 'Typisch fürs Hören: Die Aufgabe **paraphrasiert** den Text („nicht sehen“ statt „geschlossen“). Wer nur auf identische Wörter wartet, verpasst die Lösung.',
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Im Examen läuft die Zeit mit dem Audio — du bestimmst das Tempo **nicht**. Simuliere das beim Üben: Transkript **einmal** lesen, nicht zurückspringen, Lösung erst danach aufdecken. Vor der Prüfung: mindestens ein kompletter **Modellsatz mit echtem Audio** als Generalprobe.',
    },

    { type: 'rule' },

    // ── Abschluss ─────────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Baustein', 'Das Wichtigste'],
      zeilen: [
        ['Format', 'ca. 40 Minuten, 4 Teile: Gespräche & Ansagen · Interview · Diskussion · Vortrag'],
        ['Vor dem Hören', 'Aufgaben lesen, Schlüsselwörter markieren, Inhalt antizipieren'],
        ['Während des Hörens', 'global folgen, nur Stichwörter/Zahlen notieren, nicht übersetzen'],
        ['Faden verloren', 'raten, abhaken, bei der nächsten Aufgabe neu einsteigen'],
        ['Üben ohne Audio', 'Transkript einmal in Echtzeit lesen, Lösung abdecken; Modellsatz mit Audio als Generalprobe'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich kenne die vier Teile des Moduls Hören und weiß, was mich in jedem erwartet.',
        'Ich lese die Aufgaben vor dem Hören und markiere die Schlüsselwörter.',
        'Wenn ich den Faden verliere, rate ich und steige bei der nächsten Aufgabe neu ein.',
        'Ich übe mit Transkripten in Echtzeit und nutze die Modellsätze fürs echte Audio.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Jetzt gehen wir die Teile einzeln durch. Den Anfang macht **Teil 1: Gespräche & Ansagen** — kurze Alltagstexte, in denen du ein konkretes Detail fangen musst: eine Uhrzeit, einen Ort, eine Planänderung. Genau dafür trainieren wir Zahlen und Daten „im Ohr“.',
    },
  ],
}
