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
        'wissen, was du machst, wenn **keine** Anzeige passt',
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
          text: 'Du liest kurze __Situationen__ (Personen suchen etwas) und mehrere __Anzeigen__. Zu jeder Person suchst du die passende Anzeige. Es gibt **mehr Anzeigen als Personen** — nicht alle passen. Wie viele es genau sind, zeigt dir der offizielle Modellsatz.',
        },
        {
          badge: 'Strategie',
          titel: 'Schlüsselwörter markieren',
          text: 'Markiere, **was die Person will** — meist zwei oder drei Bedingungen ~~(condiciones)~~: __was? wann? für wen?__ Die richtige Anzeige muss zu **allen** Bedingungen passen, nicht nur zu einer.',
        },
        {
          badge: 'Falle',
          titel: 'Die fast passende Anzeige',
          text: 'Oft gibt es **zwei Anzeigen zum gleichen Thema**. Eine passt, eine nicht: falscher Tag, falscher Preis, für Kinder statt für Erwachsene. ~~El anuncio parecido: mismo tema, pero un detalle no encaja.~~',
        },
        {
          badge: 'Null',
          titel: 'Wenn nichts passt',
          text: 'Manchmal passt für eine Person **keine** Anzeige. Dafür gibt es eine eigene Lösung — oft schreibt man dann „**0**“. Wie das auf dem Antwortblatt genau aussieht, siehst du im Modellsatz. ~~«0» = ningún anuncio encaja — también es una respuesta correcta.~~',
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

    // ── Übungen ───────────────────────────────────────────────────
    {
      type: 'uebung',
      eyebrow: 'Anwendung — Übung 1 · Schlüsselwörter finden',
      frage: 'Was sucht die Person? Markiere die Bedingungen: was? wann? für wen?',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Pedro sucht ein günstiges Fahrrad für seinen Sohn (8 Jahre).',
        'Frau Ruiz möchte am Wochenende einen Kochkurs machen.',
      ],
      loesungen: [
        '**Fahrrad** (was) · **günstig** (wie) · **für ein Kind** (für wen)',
        '**Kochkurs** (was) · **am Wochenende** (wann)',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 2 · Mini-Zuordnung',
      frage: 'Welche Anzeige passt? Eine Anzeige bleibt übrig.',
      aufgabe: '**a)** „Spanischkurs für Anfänger, montags 18 Uhr, Volkshochschule.“\n**b)** „Verkaufe Kinderfahrrad, fast neu, nur 45 Euro.“\n**c)** „Fahrradladen Meyer: neue Fahrräder ab 299 Euro.“',
      loesungLabel: 'Lösung',
      aufgaben: [
        '1. Pedro sucht ein günstiges Fahrrad für seinen Sohn. → Anzeige …?',
        '2. Ali möchte Spanisch lernen. → Anzeige …?',
      ],
      loesungen: [
        '1 → **b**: Kinderfahrrad + 45 Euro = günstig. Anzeige **c** ist die Falle: auch Fahrräder, aber neu und teuer.',
        '2 → **a**: Spanischkurs für Anfänger.',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 3 · Produzieren — deine Anzeige',
      frage: 'Schreibe selbst eine kleine Anzeige (10–15 Wörter): Du verkaufst deinen alten Tisch. So verstehst du, wie Anzeigen gebaut sind.',
      loesungLabel: 'Mögliche Lösung',
      aufgaben: [
        'Verkaufe … (Was? Wie? Preis? Kontakt?)',
      ],
      loesungen: [
        '„**Verkaufe** alten Tisch aus Holz, noch sehr gut, **nur 20 Euro**. Tel. 0176 123 456.“ ~~Vale cualquier anuncio con objeto + estado o precio + contacto.~~',
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
      text: 'Lies zuerst die **Situationen**, nicht die Anzeigen. Prüfe bei jeder Lösung alle Bedingungen: Thema richtig? Zeit richtig? Person richtig? Wenn **ein** Detail nicht passt, passt die Anzeige nicht — dann ist vielleicht „0“ die Lösung.',
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
        'Ich weiß: Wenn keine Anzeige passt, ist „0“ die Lösung.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Damit kennst du die beiden großen Aufgabentypen im Lesen — ~~módulo completado~~. Weiter geht es mit dem **Hören**: Durchsagen, Gespräche und die Frage, wie oft du jeden Text hörst. Das ist das Thema der nächsten Lektion.',
    },
  ],
}
