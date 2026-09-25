// Lektion 20 · Lesen: Anzeigen zuordnen
//
// Bloque 2 «Prüfungsstrategie». Personas → anuncios: palabras clave, la
// trampa del anuncio parecido y el «0». Práctica con 3 personas + 5
// Anzeigen. Cierre del módulo Lesen con tabla-síntesis. Respeta el canon
// interno fijado en la lección 18 (detalles exactos → Modellsatz).

export default {
  spec: ['Bloque 2', 'Prüfungsstrategie', 'Niveau A2', 'Prüfungsrelevanz: Lesen'],
  h1: 'Lesen: Anzeigen zuordnen',
  lead: 'Wer braucht was? ~~Hoy entrenas el segundo gran tipo de tarea del Lesen:~~ Personen und **Anzeigen** richtig **zuordnen**.',

  content: [
    // ── Lernziele ─────────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'Schlüsselwörter in Situationen und Anzeigen finden',
        'die passende Anzeige wählen — und die „fast passende“ erkennen',
        'die Lösung „0“ kennen: **keine** Anzeige passt',
      ],
    },

    { type: 'rule' },

    // ── Kernwortschatz ────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Kernwortschatz — Anzeigen',
      kopf: ['Wort', 'Beispiel', 'Bedeutung'],
      zeilen: [
        ['das Angebot, -e', 'ein günstiges Angebot', 'la oferta'],
        ['günstig', 'günstig kaufen', 'barato, económico'],
        ['gebraucht', 'ein gebrauchtes Fahrrad', 'usado, de segunda mano'],
        ['vermieten', 'Zimmer zu vermieten', 'alquilar (el dueño)'],
        ['verkaufen', 'Ich verkaufe mein Sofa.', 'vender'],
        ['suchen', 'Wir suchen einen Babysitter.', 'buscar'],
        ['anbieten', 'Wir bieten Kurse an.', 'ofrecer'],
        ['kostenlos', 'Der Eintritt ist kostenlos.', 'gratis'],
        ['der Verein, -e', 'ein Sportverein', 'el club, la asociación'],
        ['sich melden', 'Melden Sie sich bei uns!', 'contactar, apuntarse'],
      ],
    },

    { type: 'rule' },

    // ── Erklärung ─────────────────────────────────────────────────
    {
      type: 'steps',
      eyebrow: 'Erklärung — So ordnest du richtig zu',
      steps: [
        {
          badge: 'Aufgabe',
          titel: 'So funktioniert das Zuordnen',
          text: 'Du liest kurze __Situationen__ (Personen suchen etwas) und mehrere __Anzeigen__. Zu jeder Person suchst du die passende Anzeige. Es gibt **mehr Anzeigen als Personen** — nicht alle passen. Die genaue Zahl zeigt dir der offizielle Modellsatz.',
        },
        {
          badge: 'Strategie',
          titel: 'Schlüsselwörter markieren',
          text: '**Was will die Person?** Markiere die Bedingungen — meist zwei oder drei ~~(condiciones)~~: __was? wann? für wen?__ Die richtige Anzeige muss zu **allen** Bedingungen passen, nicht nur zu einer.',
        },
        {
          badge: 'Falle',
          titel: 'Die fast passende Anzeige',
          text: 'Oft gibt es **zwei Anzeigen zum gleichen Thema**. Eine passt, eine nicht: falscher Tag, falscher Preis, für Kinder statt für Erwachsene. ~~El anuncio parecido: mismo tema, pero un detalle no encaja.~~',
        },
        {
          badge: 'Null',
          titel: 'Wenn nichts passt',
          text: 'Manchmal passt für eine Person **keine** Anzeige. Dafür gibt es eine eigene Lösung — oft schreibt man dann „**0**“. Das genaue Format auf dem Antwortblatt siehst du im Modellsatz. ~~«0» = ningún anuncio encaja — también es una respuesta correcta.~~',
        },
      ],
    },

    { type: 'rule' },

    // ── Beispiele ─────────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele — Schlüsselwörter in Aktion',
      items: [
        { text: '**Situation:** „Lena (25) möchte abends Gitarre lernen.“', gl: '— Schlüsselwörter: **Gitarre · lernen · abends**' },
        { text: '**Anzeige A:** „Gitarrenkurs für Anfänger, dienstags 19–20.30 Uhr.“', gl: '— passt: Gitarre + lernen + am Abend' },
        { text: '**Anzeige B:** „Gitarrenkurs für Kinder, samstags 10 Uhr.“', gl: '— passt nicht: für Kinder, am Vormittag ~~(el anuncio parecido)~~' },
      ],
    },

    { type: 'rule' },

    // ── Mehr Beispiele ────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Mehr Beispiele',
      titel: 'Kleine Anzeigen',
      items: [
        { text: '**Verkaufe** Kinderwagen, gebraucht, aber sehr gut — nur 40 Euro.', gl: '— estilo de anuncio: sin «ich»' },
        { text: 'Schönes Zimmer im Zentrum zu **vermieten**, 380 Euro im Monat.', gl: '— vermieten: lo alquila el dueño' },
        { text: 'Der Tennisverein **bietet** im Sommer Kurse **an** — der erste Kurs ist **kostenlos**.', gl: '— anbieten es separable' },
        { text: 'Familie Weber **sucht** eine Babysitterin für Freitagabend.', gl: '— suchen + Akkusativ' },
        { text: 'Das Sofa ist **gebraucht**, aber sehr **günstig**: nur 30 Euro.', gl: '— usado, pero barato' },
        { text: 'Interesse? Dann **melden Sie sich** bitte per E-Mail!', gl: '— sich melden = contactar' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'Zuordnen',
      titel: 'Passt die Anzeige?',
      items: [
        { text: '**Situation:** Karim sucht ein günstiges Fahrrad. → „Verkaufe altes Fahrrad, 35 Euro.“', gl: '— **passt**: Fahrrad + günstig' },
        { text: '**Situation:** Karim sucht ein günstiges Fahrrad. → „Neue Fahrräder ab 400 Euro!“', gl: '— **passt nicht**: zu teuer ~~(el anuncio parecido)~~' },
        { text: '**Situation:** Eva (40) möchte im Verein schwimmen. → „Schwimmverein sucht Kinder von 6 bis 12 Jahren.“', gl: '— **passt nicht**: nur für Kinder' },
        { text: '**Situation:** Paolo möchte Klavier lernen. → Es gibt nur Anzeigen für Gitarrenkurse.', gl: '— keine Anzeige passt. Lösung: **0**' },
      ],
    },

    { type: 'rule' },

    // ── Prüfungsbezug ─────────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Lesen · Anzeigen',
      titel: 'Drei Personen, fünf Anzeigen',
      anweisung: 'Welche Anzeige (a–e) passt zu welcher Person (1–3)? Für eine Person passt keine Anzeige — dann schreibe „0“.',
      absaetze: [
        '**1.** Maria sucht eine Wohnung mit zwei Zimmern im Zentrum.\n**2.** Herr Sanz möchte am Abend Deutsch lernen.\n**3.** Tim (16) sucht einen Fußballverein für Jugendliche.',
        '**a)** „Sprachschule Aktiv: Deutschkurse A1–B1, montags und mittwochs 18.30–20 Uhr. Jetzt anmelden!“\n**b)** „2-Zimmer-Wohnung im Stadtzentrum zu vermieten, 3. Stock, ab sofort. 650 Euro.“\n**c)** „Deutschkurs für Kinder (6–10 Jahre), samstags am Vormittag.“\n**d)** „FC Blau-Weiß sucht Spieler für die Männermannschaft (ab 18 Jahren). Training dienstags.“\n**e)** „Verkaufe Fußballschuhe, Größe 42, wenig getragen, 25 Euro.“',
      ],
      loesungLabel: 'Lösung mit Begründung',
      loesungen: [
        '1 → **b**: zwei Zimmer + Stadtzentrum. Beide Bedingungen passen.',
        '2 → **a**: Deutsch + am Abend (18.30 Uhr). Anzeige **c** ist die Falle: auch Deutsch, aber für Kinder und am Vormittag.',
        '3 → **0**: Keine Anzeige passt. Anzeige **d** ist Fußball, aber nur ab 18 Jahren — Tim ist 16. Anzeige **e** verkauft Schuhe, keinen Verein. ~~Todas las condiciones deben encajar, no solo el tema.~~',
      ],
      kommentar: 'Das Thema allein reicht nie: Fußball steht in **zwei** Anzeigen, und trotzdem ist die Lösung „0“. Prüfe immer **jede** Bedingung.',
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Lies zuerst die **Situationen**, nicht die Anzeigen. Prüfe bei jeder Lösung alle Bedingungen: Thema richtig? Zeit richtig? Person richtig? Passt **ein** Detail nicht? Dann passt die Anzeige nicht — vielleicht ist „0“ die Lösung.',
    },

    { type: 'rule' },

    // ── Abschluss ─────────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung — das ganze Lesen auf einen Blick',
      kopf: ['Aufgabentyp', 'Texte', 'Strategie'],
      zeilen: [
        ['richtig / falsch', 'E-Mails, kurze Texte, Schilder', 'Sätze zuerst lesen · Paraphrasen suchen · Details prüfen'],
        ['Anzeigen zuordnen', 'Situationen + Anzeigen', 'Schlüsselwörter markieren · alle Bedingungen prüfen · an „0“ denken'],
        ['Auswahl (a, b, c)', 'kurze Alltagstexte', 'Information suchen, nicht jedes Wort verstehen'],
        ['immer', 'ca. 30 Minuten', 'immer ankreuzen · vorher den Modellsatz üben'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich markiere Schlüsselwörter in Situationen und Anzeigen.',
        'Ich erkenne die fast passende Anzeige und prüfe alle Bedingungen.',
        'Ich weiß: Keine Anzeige passt? Dann ist „0“ die Lösung.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Damit kennst du die beiden großen Aufgabentypen im Lesen — ~~módulo completado~~. Weiter geht es mit dem **Hören**: Durchsagen und Gespräche. Und: Wie oft hörst du jeden Text? Das lernst du in Lektion 21.',
    },
  ],
}
