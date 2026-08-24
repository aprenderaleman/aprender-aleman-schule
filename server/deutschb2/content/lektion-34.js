// Lektion 34 · Bildung & Studium
//
// Bloque 3 (Themenfelder & Wortschatz): Schulsystem, Ausbildung vs. Studium
// (sistema dual explicado simple), Prüfungsstress, lebenslanges Lernen.
// Error clave del hispanohablante: Ausbildung ≠ educación.

export default {
  spec: ['Bloque 3', 'Themenfelder & Wortschatz', 'Niveau B2', 'Prüfungsrelevanz: alle Module'],
  h1: 'Bildung & Studium',
  lead: 'Schule, Ausbildung, Studium: der Wortschatz des deutschen Bildungswegs — und warum „Ausbildung“ nicht „educación“ bedeutet.',

  content: [
    // ── Lernziele ─────────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'den Kernwortschatz zu Schule, Ausbildung und Studium aktiv verwenden',
        'das duale System in einfachen Worten erklären',
        'Argumente für Ausbildung und für Studium abwägen und deine Meinung begründen',
        '*Ausbildung*, *Bildung* und *Studium* sicher unterscheiden',
      ],
    },

    { type: 'rule' },

    // ── Kernwortschatz ────────────────────────────────────────────
    {
      type: 'wortschatz',
      eyebrow: 'Kernwortschatz',
      items: [
        { wort: 'die Bildung (nur Sg.)', kollokation: 'Zugang zur Bildung haben', es: 'la educación (en general)' },
        { wort: 'die Ausbildung, -en', kollokation: 'eine Ausbildung machen', es: 'la formación profesional' },
        { wort: 'das Studium, Studien', kollokation: 'ein Studium beginnen / abschließen', es: 'los estudios universitarios' },
        { wort: 'der Abschluss, -schlüsse', kollokation: 'einen Abschluss machen', es: 'el título' },
        { wort: 'das Fach, Fächer', kollokation: 'ein Fach studieren', es: 'la asignatura, la carrera' },
        { wort: 'die Vorlesung, -en', kollokation: 'eine Vorlesung besuchen', es: 'la clase magistral' },
        { wort: 'die Prüfung, -en', kollokation: 'eine Prüfung bestehen / bei einer Prüfung durchfallen', es: 'el examen' },
        { wort: 'die Note, -n', kollokation: 'eine gute Note bekommen', es: 'la nota' },
        { wort: 'der/die Auszubildende, -n (der Azubi)', kollokation: 'als Azubi im Betrieb lernen', es: 'el/la aprendiz' },
        { wort: 'der Betrieb, -e', kollokation: 'die Praxis im Betrieb lernen', es: 'la empresa (formadora)' },
        { wort: 'die Berufsschule, -n', kollokation: 'an zwei Tagen in die Berufsschule gehen', es: 'la escuela de FP' },
        { wort: 'die Weiterbildung, -en', kollokation: 'eine Weiterbildung machen', es: 'la formación continua' },
      ],
      hinweis: '**Der falsche Freund der Lektion:** die Ausbildung ≠ educación. ~~«Educación» en general = **die Bildung**; **die Ausbildung** = la formación profesional. Y «estudiar una carrera» = **ein Fach studieren**, nunca *eine Karriere studieren* (die Karriere = la carrera profesional).~~',
    },

    { type: 'rule' },

    // ── Erklärung ─────────────────────────────────────────────────
    {
      type: 'prose',
      eyebrow: 'Erklärung — das duale System',
      card: true,
      titel: 'Zwei Wege nach der Schule',
      absaetze: [
        'Nach der Schule stehen in den deutschsprachigen Ländern zwei große Wege offen: das **Studium** an einer Universität oder Hochschule — und die **duale Ausbildung**, ein Modell, das es in Spanien und Lateinamerika so kaum gibt und das du in der Prüfung erklären können solltest.',
      ],
    },
    {
      type: 'steps',
      steps: [
        {
          titel: 'Zwei Lernorte',
          text: 'Der __Azubi__ lernt an zwei Orten gleichzeitig: die Praxis im __Betrieb__, die Theorie in der __Berufsschule__ — in der Regel an ein bis zwei Tagen pro Woche in der Berufsschule, den Rest der Woche im Betrieb.',
        },
        {
          titel: 'Geld von Anfang an',
          text: 'Anders als Studierende verdienen Auszubildende __vom ersten Tag an__ ein eigenes Gehalt, die sogenannte Ausbildungsvergütung.',
        },
        {
          titel: 'Ein anerkannter Abschluss',
          text: 'Am Ende steht eine Abschlussprüfung und ein __anerkannter Berufsabschluss__ — die Basis für eine Stelle oder für eine spätere Weiterbildung.',
        },
      ],
    },
    {
      type: 'prose',
      titel: 'Ausbildung oder Studium — die Debatte',
      absaetze: [
        '**Für das Studium** spricht: mehr Auswahl an Berufen, oft ein höheres Gehalt später und die Möglichkeit zu forschen. **Für die Ausbildung** spricht: Praxis statt Theorie, eigenes Geld von Anfang an und sehr gute Chancen, vom Betrieb übernommen zu werden. Und es gibt einen **Mittelweg**: das duale Studium, das Vorlesungen an der Hochschule mit Arbeit im Betrieb kombiniert.',
        'Zwei Ideen begleiten die Debatte: der **Prüfungsstress** — viele Studierende klagen über zu viele Prüfungen in kurzer Zeit — und das **lebenslange Lernen**: Berufe verändern sich, Weiterbildungen gehören heute zum normalen Berufsleben. ~~Dos ideas que reaparecen constantemente en los textos de Lesen y Hören.~~',
      ],
    },

    { type: 'rule' },

    // ── Beispiele ─────────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele — Sätze zum Mitnehmen',
      kicker: 'Bildungsweg',
      titel: 'Über den eigenen Weg sprechen',
      items: [
        { text: 'Nach der Schule habe ich eine **Ausbildung** als Mechatronikerin **gemacht**.' },
        { text: 'Mein Bruder **studiert** Informatik im dritten Semester.' },
        { text: 'Sie hat ihr **Studium** mit einer sehr guten **Note abgeschlossen**.' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'Prüfungsstress',
      titel: 'Über Druck und Prüfungen',
      items: [
        { text: 'Vor jeder **Prüfung** kann ich kaum schlafen.' },
        { text: 'Er ist zweimal **durchgefallen**, aber beim dritten Versuch hat er **bestanden**.' },
        { text: 'Viele Studierende stehen unter großem Druck, weil sie nebenbei arbeiten müssen.' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'Lebenslanges Lernen',
      titel: 'Lernen nach dem Abschluss',
      items: [
        { text: 'Meine Firma bezahlt mir eine **Weiterbildung** im Bereich Marketing.' },
        { text: 'Mit dem **Abschluss** hört das Lernen nicht auf — die Berufe verändern sich ständig.' },
        { text: 'Ich lerne Deutsch, weil ich mich beruflich **weiterentwickeln** möchte.' },
      ],
    },
    {
      type: 'redemittel',
      eyebrow: 'Redemittel — Meinung zum Thema Bildung',
      gruppen: [
        {
          fn: 'Vergleichen und abwägen',
          saetze: [
            { satz: 'Ein Studium bietet mehr Möglichkeiten, während eine Ausbildung schneller zum Beruf führt.' },
            { satz: 'Es kommt darauf an, was für ein Lerntyp man ist: Theorie oder Praxis.' },
          ],
        },
        {
          fn: 'Meinung begründen',
          saetze: [
            { satz: 'Ich bin der Meinung, dass beide Wege gleich viel wert sind.' },
            { satz: 'Aus meiner Sicht wird die Ausbildung oft unterschätzt, obwohl viele Betriebe dringend Fachkräfte suchen.' },
          ],
        },
        {
          fn: 'Das eigene Land einbringen',
          saetze: [
            { satz: 'In meinem Heimatland gibt es das duale System in dieser Form nicht.', gloss: '~~ideal para el punto «Situation in Ihrem Heimatland» del Vortrag~~' },
            { satz: 'Bei uns entscheiden sich die meisten jungen Leute für ein Studium.' },
          ],
        },
      ],
    },

    { type: 'rule' },

    // ── Übungen ───────────────────────────────────────────────────
    {
      type: 'uebung',
      eyebrow: 'Anwendung — Übung 1 · Wortschatz',
      frage: 'Bildung, Ausbildung oder Studium? Wähl das passende Wort.',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Nach der Schule hat er eine … als Koch gemacht.',
        'Sie hat ihr … in Medizin nach sechs Jahren abgeschlossen.',
        'Gute … ist die Basis für die Zukunft eines Landes.',
        'Ohne … keinen guten Beruf, sagt mein Vater — er meint Schule, Lehre oder Uni.',
      ],
      loesungen: [
        'eine **Ausbildung** als Koch ~~oficio concreto → Ausbildung~~',
        'ihr **Studium** in Medizin ~~universidad → Studium~~',
        'Gute **Bildung** ~~concepto general → Bildung~~',
        'Ohne **Bildung** — hier passt nur das allgemeine Wort.',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 2 · Kollokationen ergänzen',
      frage: 'Ergänze das passende Verb (bestehen · durchfallen · besuchen · machen).',
      loesungLabel: 'Lösung',
      aufgaben: [
        'eine Vorlesung …',
        'bei einer Prüfung …',
        'eine Weiterbildung …',
        'eine Prüfung …',
      ],
      loesungen: [
        'eine Vorlesung **besuchen**',
        'bei einer Prüfung **durchfallen**',
        'eine Weiterbildung **machen**',
        'eine Prüfung **bestehen**',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 3 · Produzieren',
      frage: 'Beschreib deinen eigenen Bildungsweg: Schule, Ausbildung oder Studium, und was du heute noch lernst. Schreib 80–100 Wörter.',
      loesungLabel: 'Mögliche Lösung',
      loesung: 'Ich habe in meinem Heimatland die Schule abgeschlossen und danach ein Studium im Fach Betriebswirtschaft begonnen. Das Studium war sehr theoretisch, deshalb habe ich nebenbei in einer kleinen Firma gearbeitet, um praktische Erfahrung zu sammeln. Vor zwei Jahren habe ich meinen Abschluss gemacht — darauf bin ich sehr stolz. Heute lerne ich Deutsch, weil ich mich beruflich weiterentwickeln möchte — für mich gehört das zum lebenslangen Lernen. Später möchte ich eine Weiterbildung im Bereich Online-Marketing machen, denn dort verändert sich alles sehr schnell. *(81 Wörter — dein echter Bildungsweg mit den Kollokationen der Lektion ist natürlich genauso richtig.)*',
    },

    { type: 'rule' },

    // ── Prüfungsbezug ─────────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Sprechen Teil 1 · Vortrag',
      titel: 'Ausbildung oder Studium?',
      anweisung: 'Im Sprechen Teil 1 hältst du einen Vortrag von ca. 4 Minuten. So könnte die Themenkarte aussehen — bereite eine Gliederung vor, wie du sie in den 15 Minuten Vorbereitungszeit notieren würdest.',
      absaetze: [
        '„**Ausbildung oder Studium — welcher Weg ist besser?** Beschreiben Sie die Situation in Ihrem Heimatland. Nennen Sie Vor- und Nachteile beider Wege. Sagen Sie Ihre Meinung und begründen Sie sie.“',
      ],
      loesungLabel: 'Modell-Gliederung',
      loesungen: [
        '**Einleitung:** „Ich möchte heute über die Frage sprechen, ob eine Ausbildung oder ein Studium der bessere Weg ist.“',
        '**Heimatland:** „In meinem Heimatland gibt es das duale System nicht — die meisten jungen Leute entscheiden sich für ein Studium, weil eine Berufsausbildung weniger Prestige hat.“',
        '**Vorteile / Nachteile:** Studium → mehr Auswahl, oft höheres Gehalt, aber theoretisch und lang. Ausbildung → Praxis, eigenes Geld von Anfang an, aber weniger flexibel beim Berufswechsel.',
        '**Meinung + Begründung:** „Aus meiner Sicht sind beide Wege gleich viel wert. Es kommt darauf an, was für ein Lerntyp man ist. Außerdem kann man heute beides kombinieren, zum Beispiel im dualen Studium.“',
        '**Schluss:** „Zusammenfassend würde ich sagen: Wichtiger als der Weg ist, dass man nach dem Abschluss weiterlernt. Vielen Dank — gibt es noch Fragen?“',
      ],
      kommentar: 'Die Gliederung deckt alle drei Punkte der Themenkarte ab. Lern Einleitung und Schluss als feste Formeln — sie funktionieren für jedes Vortragsthema.',
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Wenn im Examen das Wort **Ausbildung** fällt, geht es um die Berufsausbildung — nicht um Bildung allgemein. ~~Si traduces «Ausbildung» como «educación», entenderás mal la tarea entera — es EL error de comprensión típico del hispanohablante en este campo.~~',
    },

    { type: 'rule' },

    // ── Abschluss ─────────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Begriff', 'Bedeutung', 'Typische Kollokation'],
      zeilen: [
        ['die Bildung', 'educación en general', 'Zugang zur Bildung haben'],
        ['die Ausbildung', 'formación profesional (dual)', 'eine Ausbildung machen'],
        ['das Studium', 'estudios universitarios', 'ein Studium abschließen'],
        ['das duale System', 'Betrieb + Berufsschule', 'die Praxis im Betrieb lernen'],
        ['die Weiterbildung', 'formación continua', 'eine Weiterbildung machen'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich unterscheide *Bildung*, *Ausbildung* und *Studium* — und übersetze *Ausbildung* nie mit «educación».',
        'Ich kann das duale System in drei Sätzen erklären.',
        'Ich kann Argumente für Ausbildung und für Studium nennen und meine Meinung begründen.',
        'Ich sage *ein Fach studieren*, nicht *eine Karriere studieren*.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Vom Hörsaal in den Alltag: In der nächsten Lektion geht es um **Umwelt & Nachhaltigkeit** — Mülltrennung, das Pfand-System und die Frage, was jeder Einzelne im Alltag tun kann.',
    },
  ],
}
