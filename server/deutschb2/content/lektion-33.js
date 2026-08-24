// Lektion 33 · Arbeit & Beruf
//
// Bloque 3 (Themenfelder & Wortschatz): léxico, ideas y opiniones del campo
// «trabajo» — Bewerbung, Arbeitsalltag, Homeoffice, Work-Life-Balance.
// Estructura temática según encargo: Kernwortschatz amplio, debate con
// posturas, Beispiele por subtema, Redemittel, 3 Übungen, Prüfungsbezug real.

export default {
  spec: ['Bloque 3', 'Themenfelder & Wortschatz', 'Niveau B2', 'Prüfungsrelevanz: alle Module'],
  h1: 'Arbeit & Beruf',
  lead: 'Bewerbung, Arbeitsalltag, Homeoffice und Work-Life-Balance: der Wortschatz und die Argumente, mit denen du im Examen über Arbeit sprichst und schreibst.',

  content: [
    // ── Lernziele ─────────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'den Kernwortschatz zu Bewerbung, Arbeitsalltag und Homeoffice aktiv verwenden',
        'die typischen Argumente für und gegen das Homeoffice nennen und abwägen',
        'deine Meinung zum Thema Arbeit mit passenden Redemitteln äußern',
        'einen Forumsbeitrag zum Thema Arbeit auf B2-Niveau schreiben',
      ],
    },

    { type: 'rule' },

    // ── Kernwortschatz ────────────────────────────────────────────
    {
      type: 'wortschatz',
      eyebrow: 'Kernwortschatz',
      items: [
        { wort: 'die Bewerbung, -en', kollokation: 'eine Bewerbung abschicken', es: 'la candidatura' },
        { wort: 'der Lebenslauf, -läufe', kollokation: 'den Lebenslauf aktualisieren', es: 'el currículum' },
        { wort: 'das Vorstellungsgespräch, -e', kollokation: 'zum Vorstellungsgespräch einladen', es: 'la entrevista de trabajo' },
        { wort: 'die Stelle, -n', kollokation: 'sich um eine Stelle bewerben', es: 'el puesto de trabajo' },
        { wort: 'das Gehalt, Gehälter', kollokation: 'ein festes Gehalt bekommen', es: 'el sueldo' },
        { wort: 'die Erfahrung, -en', kollokation: 'Erfahrung sammeln', es: 'la experiencia' },
        { wort: 'der Kollege, -n / die Kollegin, -nen', kollokation: 'sich gut mit den Kollegen verstehen', es: 'el/la colega de trabajo' },
        { wort: 'die Besprechung, -en', kollokation: 'an einer Besprechung teilnehmen', es: 'la reunión (de trabajo)' },
        { wort: 'das Homeoffice (nur Sg.)', kollokation: 'im Homeoffice arbeiten', es: 'el teletrabajo' },
        { wort: 'die Teilzeit (nur Sg.)', kollokation: 'in Teilzeit arbeiten', es: 'la jornada parcial' },
        { wort: 'der Feierabend, -e', kollokation: 'Feierabend machen', es: 'el fin de la jornada laboral' },
        { wort: 'die Work-Life-Balance (nur Sg.)', kollokation: 'auf die Work-Life-Balance achten', es: 'el equilibrio entre trabajo y vida' },
      ],
      hinweis: 'sich bewerben **um** eine Stelle, **bei** einer Firma. ~~Y ojo: «trabajo como profesor» = Ich arbeite **als** Lehrer — nunca *wie*.~~',
    },

    { type: 'rule' },

    // ── Erklärung ─────────────────────────────────────────────────
    {
      type: 'prose',
      eyebrow: 'Erklärung — worüber diskutiert man?',
      card: true,
      titel: 'Arbeit als Prüfungsthema',
      absaetze: [
        'Arbeit ist eines der häufigsten Themen im Goethe-Zertifikat B2: ein Forumsbeitrag über das Homeoffice, eine Diskussion über die Work-Life-Balance, ein Vortrag über den Traumjob. Du brauchst dafür keine Fachbegriffe, sondern **klare Alltagsargumente** — und die Debatte um das Homeoffice liefert sie dir.',
      ],
    },
    {
      type: 'steps',
      steps: [
        {
          badge: 'Pro',
          titel: 'Für das Homeoffice',
          text: 'Man spart den __Arbeitsweg__, kann sich die Zeit flexibler einteilen und arbeitet oft konzentrierter. Für Eltern ist es leichter, Beruf und Familie zu verbinden.',
        },
        {
          badge: 'Contra',
          titel: 'Für das Büro',
          text: 'Zu Hause fehlt der direkte Kontakt zu den __Kollegen__, und die Grenze zwischen Arbeit und Freizeit __verschwimmt__: Viele schauen auch nach Feierabend noch E-Mails. Außerdem hat nicht jeder einen ruhigen Arbeitsplatz zu Hause.',
        },
        {
          badge: 'Mittelweg',
          titel: 'Das hybride Modell',
          text: 'Viele Firmen kombinieren beides: einige Tage im Büro für Besprechungen und Teamarbeit, den Rest im Homeoffice. Diese Position wirkt in der Prüfung besonders __ausgewogen__.',
        },
      ],
    },
    {
      type: 'prose',
      absaetze: [
        'Ein Kulturkonzept, das du kennen solltest: der **Feierabend**. In Deutschland, Österreich und der Schweiz gilt die Trennung von Arbeit und Freizeit als wichtig — nach Feierabend erwartet niemand eine Antwort auf berufliche E-Mails. Auch **Teilzeit** ist verbreitet und gesellschaftlich akzeptiert. ~~«Feierabend» no tiene traducción exacta: es el momento y el estado de haber terminado de trabajar.~~',
      ],
    },

    { type: 'rule' },

    // ── Beispiele ─────────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele — Sätze zum Mitnehmen',
      kicker: 'Bewerbung',
      titel: 'Von der Anzeige zum Gespräch',
      items: [
        { text: 'Ich habe mich **um** eine Stelle als Verkäuferin **beworben**.' },
        { text: 'Nächste Woche habe ich ein **Vorstellungsgespräch** bei einer kleinen Firma.' },
        { text: 'In meinem **Lebenslauf** stehen zwei Jahre **Erfahrung** im Kundenservice.' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'Arbeitsalltag',
      titel: 'Im Büro',
      items: [
        { text: 'Die **Besprechung** dauert heute leider länger als geplant.' },
        { text: 'Mit meinen **Kollegen** verstehe ich mich sehr gut — das ist mir wichtiger als das **Gehalt**.' },
        { text: 'Um fünf mache ich **Feierabend**, danach schaue ich keine E-Mails mehr.' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'Homeoffice & Balance',
      titel: 'Neue Arbeitsformen',
      items: [
        { text: 'Im **Homeoffice** spare ich jeden Tag über eine Stunde Arbeitsweg.' },
        { text: 'Seit sie **in Teilzeit** arbeitet, hat sie mehr Zeit für ihre Familie.' },
        { text: 'Eine gute **Work-Life-Balance** ist für mich wichtiger als eine schnelle Karriere.' },
      ],
    },
    {
      type: 'redemittel',
      eyebrow: 'Redemittel — Meinung zum Thema Arbeit',
      gruppen: [
        {
          fn: 'Meinung äußern',
          saetze: [
            { satz: 'Meiner Meinung nach hat das Homeoffice mehr Vorteile als Nachteile.' },
            { satz: 'Ich bin überzeugt, dass die Work-Life-Balance wichtiger ist als das Gehalt.' },
          ],
        },
        {
          fn: 'Vor- und Nachteile abwägen',
          saetze: [
            { satz: 'Einerseits spart man den Arbeitsweg, andererseits fehlt der Kontakt zu den Kollegen.' },
            { satz: 'Ein großer Vorteil ist, dass man sich die Zeit flexibel einteilen kann.' },
          ],
        },
        {
          fn: 'Eigene Erfahrung einbringen',
          saetze: [
            { satz: 'Aus eigener Erfahrung kann ich sagen, dass ich zu Hause konzentrierter arbeite.' },
            { satz: 'Bei uns ist es üblich, dass man auch am Nachmittag noch im Büro ist.', gloss: '~~útil para el punto «Situation in Ihrem Heimatland»~~' },
          ],
        },
      ],
    },

    { type: 'rule' },

    // ── Übungen ───────────────────────────────────────────────────
    {
      type: 'uebung',
      eyebrow: 'Anwendung — Übung 1 · Kollokationen',
      frage: 'Welches Verb passt? (abschicken · sammeln · teilnehmen · machen)',
      loesungLabel: 'Lösung',
      aufgaben: [
        'eine Bewerbung …',
        'Erfahrung …',
        'an einer Besprechung …',
        'Feierabend …',
      ],
      loesungen: [
        'eine Bewerbung **abschicken**',
        'Erfahrung **sammeln**',
        'an einer Besprechung **teilnehmen**',
        'Feierabend **machen**',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 2 · Sätze ergänzen',
      frage: 'Ergänze das passende Wort aus dem Kernwortschatz (oder die passende Präposition).',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Ich habe mich … eine Stelle als Kellner beworben.',
        'Das … ist nicht sehr hoch, aber die Arbeit macht mir Spaß.',
        'Zwei Tage pro Woche arbeite ich im … .',
        'Sie arbeitet … Erzieherin in einem Kindergarten.',
      ],
      loesungen: [
        'Ich habe mich **um** eine Stelle als Kellner beworben.',
        'Das **Gehalt** ist nicht sehr hoch, aber die Arbeit macht mir Spaß.',
        'Zwei Tage pro Woche arbeite ich im **Homeoffice**.',
        'Sie arbeitet **als** Erzieherin in einem Kindergarten. ~~Recuerda: als, no *wie*.~~',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 3 · Produzieren',
      frage: 'Was ist dir bei der Arbeit am wichtigsten: das Gehalt, die Kollegen oder die freie Zeit? Schreib 80–100 Wörter mit mindestens einem Konnektor (weil, deshalb, obwohl).',
      loesungLabel: 'Mögliche Lösung',
      loesung: 'Für mich sind die Kollegen am wichtigsten, denn wir verbringen jeden Tag viele Stunden zusammen. Wenn die Stimmung im Team gut ist, gehe ich gern zur Arbeit, obwohl das Gehalt vielleicht nicht das höchste ist. Natürlich spielt auch die freie Zeit eine Rolle: Ich möchte nach Feierabend wirklich abschalten und keine E-Mails mehr lesen. Deshalb suche ich eine Stelle mit klaren Arbeitszeiten und netten Kollegen. Ein hohes Gehalt ist angenehm, aber es macht mich nicht glücklich, wenn die Arbeitsatmosphäre schlecht ist. *(81 Wörter — auch eine andere Priorität ist natürlich richtig, solange du sie begründest.)*',
    },

    { type: 'rule' },

    // ── Prüfungsbezug ─────────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Schreiben Teil 1 · Forumsbeitrag',
      titel: 'Homeoffice — Arbeit der Zukunft?',
      anweisung: 'In einem Online-Forum wird diskutiert, ob das Homeoffice die normale Arbeitsform werden sollte. Schreib deinen Forumsbeitrag (ca. 150 Wörter): deine Meinung, Vorteile und Nachteile, ein Beispiel aus deiner Erfahrung.',
      absaetze: [
        '„Immer mehr Menschen arbeiten von zu Hause. Manche finden das ideal, andere vermissen das Büro. Wie sehen Sie das?“',
      ],
      loesungLabel: 'Modelllösung',
      loesungen: [
        'Meiner Meinung nach hat das Homeoffice viele Vorteile, aber es passt nicht zu jedem Beruf und nicht zu jedem Menschen.',
        'Ein großer Vorteil ist, dass man den Arbeitsweg spart und sich die Zeit flexibler einteilen kann. Aus eigener Erfahrung kann ich sagen, dass ich zu Hause oft konzentrierter arbeite, weil mich niemand unterbricht. Andererseits fehlt mir der Kontakt zu den Kollegen: Viele Ideen entstehen erst im Gespräch, und neue Mitarbeiter lernen im Büro schneller. Außerdem verschwimmt zu Hause die Grenze zwischen Arbeit und Freizeit, sodass manche Menschen am Ende sogar mehr arbeiten.',
        'Deshalb finde ich ein hybrides Modell am besten: einige Tage im Büro für Besprechungen und Teamarbeit, den Rest im Homeoffice. So hat man die Vorteile von beiden Arbeitsformen. Mich würde interessieren, wie die anderen hier im Forum das sehen — vielleicht hat ja jemand schon länger Erfahrung damit. *(139 Wörter)*',
      ],
      kommentar: 'Die Lösung erfüllt alle drei Punkte (Meinung, Vor- und Nachteile, Beispiel), nutzt Konnektoren (weil, andererseits, sodass, deshalb) und Redemittel aus dieser Lektion — genau das bewerten die Kriterien „Erfüllung“ und „Strukturen“.',
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Lern die Redemittel dieser Lektion als **feste Blöcke** — sie funktionieren im Forumsbeitrag und in der Diskussion für fast jedes Thema. Zum Wortschatz: Nomen immer **mit Artikel und Kollokation** lernen (*die Stelle → sich um eine Stelle bewerben*), nie als einzelnes Wort.',
    },

    { type: 'rule' },

    // ── Abschluss ─────────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Subthema', 'Kernwörter', 'Ein Satz, der immer passt'],
      zeilen: [
        ['Bewerbung', 'die Bewerbung, der Lebenslauf, das Vorstellungsgespräch', 'Ich habe mich um eine Stelle beworben.'],
        ['Arbeitsalltag', 'die Besprechung, die Kollegen, der Feierabend', 'Nach Feierabend schaue ich keine E-Mails mehr.'],
        ['Homeoffice', 'das Homeoffice, der Arbeitsweg, flexibel', 'Einerseits spart man Zeit, andererseits fehlt das Team.'],
        ['Balance', 'die Work-Life-Balance, die Teilzeit, das Gehalt', 'Die Balance ist mir wichtiger als das Gehalt.'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich kann über Bewerbung und Arbeitsalltag mit den richtigen Kollokationen sprechen.',
        'Ich kann zwei Argumente für und zwei gegen das Homeoffice nennen.',
        'Ich kann meine Meinung zum Thema Arbeit mit Redemitteln äußern und begründen.',
        'Ich sage *Ich arbeite als Lehrer* — nicht *wie Lehrer*.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Vom Beruf zur Frage, wie man dorthin kommt: In der nächsten Lektion geht es um **Bildung & Studium** — das deutsche Schulsystem, die Wahl zwischen Ausbildung und Studium und einen falschen Freund, der fast jeden Spanischsprachigen erwischt.',
    },
  ],
}
