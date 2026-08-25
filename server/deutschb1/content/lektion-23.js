// Lektion 23 · Modul Hören — Überblick
//
// Öffnet den Hören-Block (23-25). Fija el canon interno del módulo:
// ca. 40 Min., 4 Teile — T1-2 Durchsagen & kurze Texte, T3-4 Gespräch
// & Diskussion. Instala la metodología sin audio del curso: Transkripte
// una sola vez en tiempo real, solución tapada, Modellsatz para audio real.

export default {
  spec: ['Bloque 2', 'Prüfungsstrategie', 'Niveau B1', 'Prüfungsrelevanz: Modul Hören'],
  h1: 'Modul Hören — Überblick',
  lead: 'Ca. **40 Minuten**, **vier Teile**, 100 Punkte: So funktioniert das Modul Hören — und so trainierst du es auch ohne Audio. ~~Tu mapa del módulo y tu método de entrenamiento.~~',

  content: [
    // ── Lernziele ─────────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'die vier Teile des Moduls Hören kennen',
        'die Aufgaben **vor** dem Hören lesen und Antworten voraussagen',
        'bei einem unbekannten Wort ruhig weiterhören — ohne zu blockieren',
        'mit Transkripten und dem Modellsatz selbstständig trainieren',
      ],
    },

    { type: 'rule' },

    // ── Kernwortschatz ────────────────────────────────────────────
    {
      type: 'wortschatz',
      eyebrow: 'Kernwortschatz — Wörter aus den Aufgaben',
      items: [
        { wort: 'die Durchsage', kollokation: 'eine Durchsage am Bahnhof', es: 'el aviso por megafonía' },
        { wort: 'die Ansage', kollokation: 'die Ansage auf dem Anrufbeantworter', es: 'el mensaje grabado' },
        { wort: 'die Nachricht', kollokation: 'eine Nachricht hinterlassen', es: 'el mensaje, el recado' },
        { wort: 'das Gespräch', kollokation: 'ein Gespräch zwischen zwei Personen', es: 'la conversación' },
        { wort: 'die Diskussion', kollokation: 'eine Diskussion im Radio', es: 'el debate' },
        { wort: 'die Aussage', kollokation: 'Ist die Aussage richtig oder falsch?', es: 'la afirmación' },
        { wort: 'ankreuzen', kollokation: 'die richtige Lösung ankreuzen', es: 'marcar (con una cruz)' },
        { wort: 'zuordnen', kollokation: 'die Aussagen den Personen zuordnen', es: 'asignar, emparejar' },
        { wort: 'der Sprecher / die Sprecherin', kollokation: 'Wer sagt was?', es: 'el/la hablante' },
        { wort: 'die Meinung', kollokation: 'seine Meinung sagen', es: 'la opinión' },
        { wort: 'die Lösung', kollokation: 'nur eine Lösung ist richtig', es: 'la solución, la respuesta' },
        { wort: 'der Modellsatz', kollokation: 'den Modellsatz vom Goethe-Institut üben', es: 'el examen modelo' },
      ],
      hinweis: 'Diese Wörter stehen in den **Anweisungen** der Prüfung. Wer sie kennt, verliert am Prüfungstag keine Zeit.',
    },

    { type: 'rule' },

    // ── Erklärung ─────────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Erklärung — die vier Teile',
      kopf: ['Teil', 'Was hörst du?', 'Was machst du?'],
      zeilen: [
        ['Teil 1', 'kurze Durchsagen & Ansagen (Bahnhof, Anrufbeantworter …)', 'richtig/falsch und Lösung ankreuzen'],
        ['Teil 2', 'kurze Texte mit Informationen (z. B. aus dem Radio)', 'die richtige Lösung ankreuzen'],
        ['Teil 3', 'ein Alltagsgespräch zwischen zwei Personen', 'Aussagen prüfen: richtig oder falsch?'],
        ['Teil 4', 'eine Diskussion mit mehreren Personen', 'zuordnen: **Wer sagt was?**'],
      ],
    },
    {
      type: 'prose',
      card: true,
      absaetze: [
        'Teil 1 und 2 fragen nach **Fakten** (Ort, Zeit, Preis), Teil 3 und 4 nach **Personen und Meinungen**. Manche Texte hörst du einmal, manche zweimal — das steht **vor jedem Teil auf dem Aufgabenblatt** und im offiziellen Modellsatz. ~~Léelo siempre: no lo des por supuesto.~~',
      ],
    },
    {
      type: 'steps',
      eyebrow: 'Erklärung — die Drei-Schritt-Strategie',
      steps: [
        {
          titel: 'Vor dem Hören: lesen & voraussagen',
          text: 'Lies die Aufgaben und markiere __Schlüsselwörter__. Frag dich: Welche Wörter erwarte ich gleich? ~~Anticipar es media respuesta.~~',
        },
        {
          titel: 'Beim Hören: nur auf das Ziel achten',
          text: 'Du musst nicht alles verstehen — nur die Antwort auf die Aufgabe. Kreuze __sofort__ an, der nächste Text wartet nicht.',
        },
        {
          titel: 'Nie blockieren, immer antworten',
          text: 'Ein unbekanntes Wort? Weiterhören! Und am Ende: lieber __raten__ als leer lassen — falsche Antworten geben keine Minuspunkte.',
        },
      ],
    },
    {
      type: 'prose',
      eyebrow: 'Erklärung — so trainierst du ohne Audio',
      card: true,
      titel: 'Die Transkript-Methode dieses Kurses',
      absaetze: [
        'In den Lektionen 24 und 25 übst du mit **Transkripten** ~~(en el examen: audio)~~. Die Regel: Lies das Transkript **nur einmal**, in normalem Tempo, ohne zurückzuspringen — oder lass es dir von jemandem vorlesen. Decke die Lösung ab, löse die Aufgaben, kontrolliere erst danach. ~~Leer una sola vez simula el audio; tapar la solución simula el examen.~~',
        'Für echtes Audio: der kostenlose **Modellsatz** des Goethe-Instituts (goethe.de). Höre ihn unter Prüfungsbedingungen — jeder Text nur so oft, wie es die Anweisung erlaubt.',
      ],
    },

    { type: 'rule' },

    // ── Beispiele ─────────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele',
      kicker: 'Anweisungen',
      titel: 'So klingen die Aufgaben in der Prüfung',
      items: [
        { text: '„Sie hören nun eine **Durchsage**.“', gl: '— Teil 1: kurz und faktisch' },
        { text: '„Sie hören jeden Text **zweimal**.“', gl: '— lies genau: einmal oder zweimal?' },
        { text: '„**Kreuzen Sie an**: richtig oder falsch?“' },
        { text: '„**Wählen Sie** die richtige Lösung.“' },
        { text: '„**Ordnen Sie zu**: Wer sagt was?“', gl: '— Teil 4: Meinungen und Personen' },
      ],
    },

    { type: 'rule' },

    // ── Übungen ───────────────────────────────────────────────────
    {
      type: 'uebung',
      eyebrow: 'Anwendung — Übung 1 · Erkennen',
      frage: 'Welcher Teil des Moduls ist das?',
      loesungLabel: 'Lösung',
      aufgaben: [
        '„Achtung an Gleis 3, der Zug nach Köln …“',
        'Zwei Freunde sprechen über den Umzug in eine neue Wohnung.',
        'Drei Personen diskutieren im Radio über Homeoffice.',
        'Ein kurzer Radiobeitrag informiert über ein Stadtfest.',
      ],
      loesungen: [
        '**Teil 1** — eine Durchsage am Bahnhof.',
        '**Teil 3** — ein Alltagsgespräch zwischen zwei Personen.',
        '**Teil 4** — eine Diskussion mit mehreren Personen.',
        '**Teil 2** — ein kurzer Text mit Informationen.',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 2 · Strategie prüfen',
      frage: 'Richtig oder falsch?',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Ich lese die Aufgaben erst **nach** dem Hören.',
        'Bei einem unbekannten Wort höre ich einfach weiter.',
        'Wenn ich nicht sicher bin, lasse ich die Aufgabe leer.',
        'Vor dem Hören markiere ich Schlüsselwörter in den Aufgaben.',
      ],
      loesungen: [
        '**Falsch** — immer vorher lesen und voraussagen.',
        '**Richtig** — blockieren kostet die nächste Antwort.',
        '**Falsch** — immer ankreuzen: Raten gibt keine Minuspunkte.',
        '**Richtig** — so weißt du, worauf du hören musst.',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 3 · Produzieren',
      frage: 'Voraussagen üben: Du liest diese Aufgabe **vor** dem Hören. Welche Wörter erwartest du im Audio? Notiere je 3-4.',
      loesungLabel: 'Mögliche Lösung',
      aufgaben: [
        'Aufgabe: „Der Zug fährt heute von Gleis 7 ab.“ — richtig/falsch',
        'Aufgabe: „Das Museum ist montags geschlossen.“ — richtig/falsch',
      ],
      loesungen: [
        'z. B. *Zug, Gleis, Abfahrt, eine Zahl* — und Vorsicht: vielleicht „**nicht** von Gleis 7, **sondern** …“',
        'z. B. *Museum, Montag, geöffnet/geschlossen, Öffnungszeiten* — auch andere Wörter mit derselben Bedeutung sind gut vorausgesagt.',
      ],
    },

    { type: 'rule' },

    // ── Prüfungsbezug ─────────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Hören · Teil 1',
      titel: 'Eine Durchsage, zwei Aufgaben',
      anweisung: 'Trainiere mit der Transkript-Methode: Lies den Text **nur einmal** in normalem Tempo ~~(en el examen: audio)~~, decke die Lösung ab und kreuze an.',
      absaetze: [
        '„Liebe Fahrgäste, der ICE 726 nach Hamburg, planmäßige Abfahrt 14:32 Uhr, fährt heute nicht von Gleis 5, sondern von Gleis 9 ab. Bitte beachten Sie außerdem: Der Zug hält heute nicht in Göttingen. Wir bitten um Entschuldigung.“',
      ],
      optionen: [
        '(1) Der Zug fährt heute von Gleis 5 ab. — richtig/falsch',
        '(2) Der Zug … a) hält zusätzlich in Göttingen · b) hält heute nicht in Göttingen · c) endet in Göttingen',
      ],
      loesungLabel: 'Lösung',
      loesungen: [
        '(1) **Falsch** — „nicht von Gleis 5, **sondern** von Gleis 9“.',
        '(2) **b** — „der Zug hält heute **nicht** in Göttingen“.',
      ],
      kommentar: 'Die Falle *nicht … sondern* ist der Klassiker von Teil 1 — in der nächsten Lektion übst du sie systematisch.',
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Übe den Modellsatz **unter echten Bedingungen**: Audio nur so oft abspielen, wie die Anweisung erlaubt, keine Pause-Taste. Zehn ehrliche Minuten bringen mehr als eine Stunde mit Stopps.',
    },

    { type: 'rule' },

    // ── Abschluss ─────────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Baustein', 'Das Wichtigste'],
      zeilen: [
        ['Teil 1-2', 'Durchsagen & kurze Texte → Fakten: Ort, Zeit, Änderung'],
        ['Teil 3-4', 'Gespräch & Diskussion → Meinungen: Wer sagt was?'],
        ['Strategie', 'vorher lesen · voraussagen · nie blockieren · immer ankreuzen'],
        ['Training', 'Transkripte nur einmal lesen + Modellsatz mit echtem Audio'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich kenne die vier Teile des Moduls Hören und weiß, was ich dort tun muss.',
        'Ich lese die Aufgaben vor dem Hören und sage Antworten voraus.',
        'Ich höre bei einem unbekannten Wort ruhig weiter und kreuze immer etwas an.',
        'Ich weiß, wie ich mit Transkripten und dem Modellsatz trainiere.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Jetzt hast du die Landkarte des Moduls. In der nächsten Lektion steigst du in **Teil 1 und 2** ein: Durchsagen, Anrufbeantworter und Radio — mit den klassischen Fallen bei Uhrzeiten (*halb zehn* = 9:30!) und Planänderungen.',
    },
  ],
}
