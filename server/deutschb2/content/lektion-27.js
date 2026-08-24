// Lektion 27 · Modul Schreiben — Überblick & Bewertung
//
// Bloque 2 · Auftakt des Schreib-Moduls: die zwei Aufgaben, der Zeitplan
// 50/25, die vier Bewertungskriterien mit Hebt/Drückt-Beispielen und der
// Schluss-Check für Spanischsprachige. Prüfungsbezug: Fehlerjagd in einem
// kurzen Lernertext. Ausblick → Lektion 28 (Forumsbeitrag).

export default {
  spec: ['Bloque 2', 'Prüfungsstrategie', 'Niveau B2', 'Prüfungsrelevanz: Modul Schreiben (75 Min · 2 Aufgaben)'],
  h1: 'Modul Schreiben — Überblick & Bewertung',
  lead: 'Zwei Texte in 75 Minuten: was genau verlangt wird, wonach die Prüfer deine Punkte vergeben — und mit welchem Schluss-Check du die typischen Spanisch-Fehler selbst findest.',

  content: [
    // ── Lernziele ─────────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'Am Ende kennst du die beiden Schreibaufgaben und teilst die 75 Minuten sinnvoll ein: ca. 50 für den Forumsbeitrag, ca. 25 für die formelle Nachricht.',
        'Du verstehst die vier Bewertungskriterien und weißt konkret, was Punkte bringt und was Punkte kostet.',
        'Du wendest den Schluss-Check für Spanischsprachige an: Artikel, Verbposition, Komma vor dass/weil, Großschreibung.',
        'Du findest typische Fehler in einem fremden Text — die beste Übung, um sie im eigenen zu sehen.',
      ],
    },

    { type: 'rule' },

    // ── Kernwortschatz ────────────────────────────────────────────
    {
      type: 'wortschatz',
      eyebrow: 'Kernwortschatz — über das Schreiben sprechen',
      items: [
        { wort: 'die Aufgabenstellung', kollokation: 'die Aufgabenstellung genau lesen', es: 'la consigna' },
        { wort: 'der Inhaltspunkt', kollokation: 'auf alle Inhaltspunkte eingehen', es: 'punto de contenido (de la consigna)' },
        { wort: 'die Textsorte', kollokation: 'die passende Textsorte treffen', es: 'tipo de texto' },
        { wort: 'das Register', kollokation: 'im richtigen Register schreiben', es: 'registro (formal / informal)' },
        { wort: 'die Bewertung', kollokation: 'die Bewertung nach vier Kriterien', es: 'evaluación, corrección' },
        { wort: 'die Kohärenz', kollokation: 'für Kohärenz sorgen', es: 'coherencia, cohesión del texto' },
        { wort: 'der Absatz', kollokation: 'den Text in Absätze gliedern', es: 'párrafo' },
        { wort: 'verknüpfen', kollokation: 'Sätze mit Konnektoren verknüpfen', es: 'enlazar, conectar' },
        { wort: 'der Ausdruck', kollokation: 'einen treffenden Ausdruck wählen', es: 'expresión, forma de decirlo' },
        { wort: 'überarbeiten', kollokation: 'den Text am Ende überarbeiten', es: 'revisar, retocar' },
        { wort: 'der Flüchtigkeitsfehler', kollokation: 'Flüchtigkeitsfehler streichen', es: 'error por descuido' },
      ],
      hinweis: 'Zwei Verben, die du hier ständig brauchst: **die Prüfung bestehen** heißt „aprobar el examen“ und **durchfallen** „suspender“. ~~Ojo: *suspendieren* significa apartar a alguien de su cargo, no suspender un examen.~~',
    },

    { type: 'rule' },

    // ── Erklärung ─────────────────────────────────────────────────
    {
      type: 'prose',
      eyebrow: 'Erklärung',
      card: true,
      titel: 'Das Modul auf einen Blick',
      absaetze: [
        'Das Modul Schreiben dauert **75 Minuten** und besteht aus **zwei Aufgaben**, die du frei einteilen kannst. In der digitalen Prüfung tippst du beide Texte **mit der Tastatur** — das macht das Überarbeiten am Ende leicht.',
        'Wie jedes Modul bringt Schreiben **100 Punkte**, bestanden bist du **ab 60**. Beide Texte werden nach denselben **vier Kriterien** bewertet: Erfüllung, Kohärenz, Wortschatz, Strukturen. Das heißt: Ein fehlerfreier Text, der die Aufgabe verfehlt, fällt genauso durch wie ein inhaltlich perfekter Text voller Grammatikfehler — du brauchst **beides**.',
      ],
    },

    {
      type: 'tabelle',
      eyebrow: 'Erklärung — Die zwei Aufgaben',
      kopf: ['Teil', 'Textsorte', 'Umfang', 'Empfohlene Zeit', 'Register'],
      zeilen: [
        ['Teil 1', 'Forumsbeitrag (Meinung zu einem Alltagsthema)', '~150 Wörter', 'ca. 50 Min', 'freundlich-neutral, ich-Form'],
        ['Teil 2', 'formelle Nachricht (an Vorgesetzte, Vermieterin, Kursleitung …)', '~100 Wörter', 'ca. 25 Min', 'formell, Sie-Form'],
      ],
    },

    {
      type: 'tabelle',
      eyebrow: 'Erklärung — Die vier Kriterien',
      kopf: ['Kriterium', 'Leitfrage der Prüfer', 'Das hebt die Bewertung', 'Das drückt die Bewertung'],
      zeilen: [
        ['Erfüllung', 'Sind alle Inhaltspunkte da — in der richtigen Textsorte?', 'jeder Punkt der Aufgabe erkennbar behandelt, passendes Register', 'ein Inhaltspunkt fehlt, Thema verfehlt, *du* statt *Sie*'],
        ['Kohärenz', 'Ist der Text logisch aufgebaut und verbunden?', 'klare Absätze, Konnektoren (*deshalb, trotzdem, außerdem*)', 'lose Sätze ohne Verbindung, Gedankensprünge, kein Aufbau'],
        ['Wortschatz', 'Ist der Wortschatz passend und abwechslungsreich?', 'treffende Wörter, Umschreibung statt Lücke', 'ständig *gut*, *machen*, *Sache*; falsche Freunde'],
        ['Strukturen', 'Sind die Sätze korrekt und variiert?', 'Nebensätze, Konjunktiv II, korrekte Verbstellung', 'Verb an falscher Position, Artikel- und Endungsfehler in Serie'],
      ],
    },

    {
      type: 'steps',
      eyebrow: 'Erklärung — Der Schluss-Check (letzte 5 Minuten)',
      steps: [
        {
          badge: 'der/die/das',
          titel: 'Genus & Endungen',
          text: 'Prüfe die Artikel deiner Schlüsselwörter: __das Problem, das Thema, die Firma__. ~~El género alemán no se deduce del español: «el problema» es *das* Problem.~~',
        },
        {
          badge: 'Verb 2',
          titel: 'Verbposition',
          text: 'Im Hauptsatz steht das Verb **immer an Position 2** — auch wenn der Satz mit *gestern* oder *deshalb* beginnt: __Gestern **habe** ich …__ Nach *weil, dass, obwohl* wandert es ans Ende.',
        },
        {
          badge: 'Komma',
          titel: 'Komma vor dass & weil',
          text: 'Vor jedem Nebensatz steht ein Komma: __Ich glaube**,** dass …__ ~~En español esa coma no existe; en alemán es obligatoria — y los correctores la buscan.~~',
        },
        {
          badge: 'Groß',
          titel: 'Großschreibung',
          text: 'Alle **Nomen groß**: die Arbeit, das Leben, meine Meinung. In der formellen Nachricht zusätzlich: __Sie, Ihnen, Ihr__ immer groß.',
        },
      ],
    },

    { type: 'rule' },

    // ── Beispiele ─────────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele — Was die Prüfer sehen wollen',
      kicker: 'Punkte gewinnen',
      titel: 'Drei Sätze, die die Bewertung heben',
      items: [
        { text: '**Obwohl** ich das Argument verstehe, **sehe** ich das anders.', gl: '— Nebensatz + Inversion: Kriterium „Strukturen“' },
        { text: '**Einerseits** spart man Zeit, **andererseits** fehlt der Kontakt zu den Kollegen.', gl: '— zweiteiliger Konnektor: Kriterium „Kohärenz“' },
        { text: 'Ich **schlage vor**, die Besprechung zu **verschieben**.', gl: '— treffende Verben statt *machen*: Kriterium „Wortschatz“' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'Punkte verlieren',
      titel: 'Drei typische Spanisch-Fallen',
      items: [
        { text: '*Gestern ich habe die E-Mail geschrieben.* → **Gestern habe ich** die E-Mail geschrieben.', gl: '— el verbo va SIEMPRE en 2.ª posición' },
        { text: '*Ich hoffe dass Sie mir helfen können.* → Ich hoffe**,** dass Sie mir helfen können.', gl: '— coma obligatoria ante dass/weil/wenn' },
        { text: '*Ich möchte an dem Kurs assistieren.* → Ich möchte an dem Kurs **teilnehmen**.', gl: '— «asistir a» = teilnehmen an; *assistieren* = ayudar como asistente' },
      ],
    },

    { type: 'rule' },

    // ── Übungen ───────────────────────────────────────────────────
    {
      type: 'uebung',
      eyebrow: 'Anwendung — Übung 1 · Erkennen',
      frage: 'Welches Kriterium ist jeweils betroffen — Erfüllung, Kohärenz, Wortschatz oder Strukturen?',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Der Beitrag ist praktisch fehlerfrei, aber ein Inhaltspunkt der Aufgabe fehlt komplett.',
        'Alle Sätze sind korrekt, stehen aber unverbunden nebeneinander — ohne Absätze, ohne Konnektoren.',
        'Der Text benutzt achtmal *gut* und sechsmal *machen*.',
        'Der Text besteht nur aus kurzen Hauptsätzen, und nach *weil* steht das Verb an Position 2.',
      ],
      loesungen: [
        '**Erfüllung** — die Aufgabe ist nicht vollständig bearbeitet; das kostet auch bei perfekter Sprache Punkte.',
        '**Kohärenz** — es fehlen Gliederung und Verknüpfung.',
        '**Wortschatz** — zu wenig Variation; treffendere Wörter wählen (*hilfreich, praktisch; erledigen, organisieren*).',
        '**Strukturen** — keine Satzvariation und ein Verbstellungsfehler nach *weil*.',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 2 · Korrigieren',
      frage: 'In jedem Satz steckt genau ein typischer Fehler. Finde und korrigiere ihn.',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Ich habe eine Problem mit meinem Vertrag.',
        'Am Montag ich kann leider nicht kommen.',
        'Ich glaube dass die Idee sehr gut ist.',
        'Meine schwester sucht eine neue Wohnung.',
        'Ich bin sehr müde, weil ich habe schlecht geschlafen.',
      ],
      loesungen: [
        'Ich habe **ein Problem** mit meinem Vertrag. — *das* Problem. ~~No calques «el problema».~~',
        '**Am Montag kann ich** leider nicht kommen. — Verb an Position 2, danach das Subjekt.',
        'Ich glaube**,** dass die Idee sehr gut ist. — Komma vor *dass*.',
        'Meine **Schwester** sucht eine neue Wohnung. — Nomen groß.',
        '… weil ich schlecht **geschlafen habe**. — nach *weil* Verb ans Ende.',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 3 · Überarbeiten',
      frage: 'Verbessere den Mini-Absatz: verbinde die Sätze mit Konnektoren und gliedere die Gedanken. „Ich finde Online-Kurse gut. Man kann zu Hause lernen. Man braucht Disziplin. Viele Leute machen den Kurs nicht fertig.“',
      loesungLabel: 'Mögliche Lösung',
      loesung: '*Ich finde Online-Kurse praktisch, **weil** man zu Hause lernen kann. **Allerdings** braucht man viel Disziplin — **deshalb** machen viele Leute den Kurs nicht fertig.*\nAuch gut: *denn* statt *weil* (Verb bleibt an Position 2) oder *darum/daher* statt *deshalb*. Wichtig ist, dass die logische Verbindung sichtbar wird und die Verbstellung zum Konnektor passt.',
    },

    { type: 'rule' },

    // ── Prüfungsbezug ─────────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Schreiben · Bewertung',
      titel: 'Fehlerjagd: sechs Fehler in einem Lernertext',
      anweisung: 'Dieser Ausschnitt aus einem Forumsbeitrag enthält sechs typische Fehler von Spanischsprachigen. Finde alle sechs, bevor du die Lösung liest — genau das machst du am Prüfungstag mit deinem eigenen Text.',
      absaetze: [
        'Meiner Meinung nach das Homeoffice hat viele Vorteile. Ich spare jeden Tag fast zwei Stunden, weil ich muss nicht ins Büro fahren. Das ist eine große Vorteil, denn ich habe mehr Zeit für meine familie. Ich denke dass auch die Firma profitiert. Trotzdem assistiere ich einmal pro Woche an einer Besprechung, weil der Kontakt zu den Kollegen wichtig ist.',
      ],
      loesungLabel: 'Lösung',
      loesungen: [
        '**„nach das Homeoffice hat“** → *Meiner Meinung nach **hat das Homeoffice** …* — Verb an Position 2.',
        '**„weil ich muss nicht … fahren“** → *weil ich nicht ins Büro **fahren muss*** — Verb ans Ende.',
        '**„eine große Vorteil“** → ***ein großer** Vorteil* — der Vorteil ist maskulin.',
        '**„meine familie“** → *meine **Familie*** — Nomen groß.',
        '**„Ich denke dass“** → *Ich denke**,** dass* — Komma vor dem Nebensatz.',
        '**„assistiere … an einer Besprechung“** → ***nehme** … an einer Besprechung **teil*** — falscher Freund: «asistir» = teilnehmen.',
      ],
      kommentar: 'Genau diese sechs Fehlertypen prüft der Schluss-Check. Der letzte Satz zeigt, dass der Autor die Regel eigentlich kennt (*… wichtig **ist***): Flüchtigkeitsfehler verschwinden nicht durch Wissen, sondern durch **Kontrolle**.',
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Plane für **jede** der beiden Aufgaben drei Phasen: Aufgabenstellung lesen und Stichwörter zu jedem Inhaltspunkt notieren — schreiben — **5 Minuten Schluss-Check**. Ein gefundener Kommafehler kostet dich zehn Sekunden, ein übersehener kostet dich Punkte in „Strukturen“.',
    },

    { type: 'rule' },

    // ── Abschluss ─────────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Das bleibt', 'Konkret'],
      zeilen: [
        ['Zwei Aufgaben', 'T1 Forumsbeitrag ~150 Wörter (ca. 50 Min) · T2 formelle Nachricht ~100 Wörter (ca. 25 Min)'],
        ['Vier Kriterien', 'Erfüllung · Kohärenz · Wortschatz · Strukturen — für beide Texte'],
        ['Punkte', '100 pro Modul, bestanden ab 60'],
        ['Schluss-Check', 'Artikel · Verb an Position 2 · Komma vor dass/weil · Nomen groß'],
        ['Goldene Regel', 'Alle Inhaltspunkte + richtiges Register schlagen jeden schönen Einzelsatz'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich kenne beide Schreibaufgaben mit Umfang, Zeit und Register.',
        'Ich kann zu jedem der vier Kriterien sagen, was Punkte bringt und was Punkte kostet.',
        'Ich gehe meinen Text am Ende mit dem Schluss-Check durch: Artikel, Verb 2, Komma, Großschreibung.',
        'Ich finde die sechs typischen Spanisch-Fehler in einem fremden Text.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Jetzt kennst du die Spielregeln — als Nächstes kommt das Spiel: In der nächsten Lektion trainierst du **Teil 1, den Forumsbeitrag**, Schritt für Schritt: die Struktur vom Einstieg bis zum Fazit, Redemittel für jede Funktion und ein kommentiertes Muster mit genau 150 Wörtern.',
    },
  ],
}
