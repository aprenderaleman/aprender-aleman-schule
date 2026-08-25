// Lektion 20 · Lesen Teil 2: Anzeigen zuordnen
//
// Bloque 2 «Prüfungsstrategie» — módulo Lesen (canon interno: Lektion 18).
// Teil 2: Personen → Anzeigen zuordnen, ca. 15 Min. Inkl. die Lösung «0».

export default {
  spec: ['Bloque 2', 'Prüfungsstrategie', 'Niveau B1', 'Prüfungsrelevanz: Lesen Teil 2'],
  h1: 'Lesen Teil 2: Anzeigen zuordnen',
  lead: 'Personen mit Wünschen, Anzeigen mit Angeboten: Wer findet was? Und Vorsicht — manchmal passt **keine** Anzeige. ~~El famoso «0».~~',

  content: [
    // ── Lernziele ─────────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'die Schlüsselwort-Methode anwenden: Was sucht die Person genau?',
        'Anzeigen schnell überfliegen und Bedingungen vergleichen',
        'die Falle der **fast richtigen** Anzeige erkennen',
        'wissen, wann die Lösung **„0“** ist: keine Anzeige passt',
      ],
    },

    { type: 'rule' },

    // ── Kernwortschatz ────────────────────────────────────────────
    {
      type: 'wortschatz',
      eyebrow: 'Kernwortschatz — die Sprache der Anzeigen',
      items: [
        { wort: 'die Anzeige, -n', kollokation: 'eine Anzeige aufgeben', es: 'el anuncio' },
        { wort: 'das Angebot, -e', kollokation: 'ein günstiges Angebot', es: 'la oferta' },
        { wort: 'günstig', kollokation: 'günstig kaufen', es: 'barato, económico' },
        { wort: 'gebraucht', kollokation: 'ein gebrauchtes Fahrrad', es: 'usado, de segunda mano' },
        { wort: 'kostenlos', kollokation: 'die erste Stunde ist kostenlos', es: 'gratuito' },
        { wort: 'die Ermäßigung, -en', kollokation: 'Ermäßigung für Studenten', es: 'el descuento' },
        { wort: 'der Anfänger, -', kollokation: 'ein Kurs für Anfänger', es: 'el principiante' },
        { wort: 'vermieten', kollokation: 'ein Zimmer vermieten', es: 'alquilar (el dueño)' },
        { wort: 'abholen', kollokation: 'das Sofa abholen', es: 'recoger' },
        { wort: 'sich melden bei + Dat.', kollokation: 'sich bei Frau Kern melden', es: 'ponerse en contacto con' },
        { wort: 'die Öffnungszeiten (Pl.)', kollokation: 'die Öffnungszeiten beachten', es: 'el horario de apertura' },
        { wort: 'pro', kollokation: '10 Euro pro Stunde', es: 'por (unidad)' },
      ],
      hinweis: 'Anzeigen sparen Wörter: „Fahrrad, gebraucht, 80 €, ab sofort“ — kurze Fragmente statt ganzer Sätze. ~~No busques frases completas: son telegramas.~~',
    },

    { type: 'rule' },

    // ── Erklärung ─────────────────────────────────────────────────
    {
      type: 'steps',
      eyebrow: 'Erklärung — die Schlüsselwort-Methode',
      steps: [
        {
          titel: 'Zuerst die Personen lesen',
          text: 'Was sucht die Person **genau**? Markiere 2–3 Schlüsselwörter: __Was?__ (z. B. Deutschkurs), __Wann?__ (z. B. abends), __Bedingung__ (z. B. maximal 100 Euro).',
        },
        {
          titel: 'Anzeigen überfliegen',
          text: 'Lies nur Überschriften und Kernwörter. Frag dich pro Anzeige: **Thema** — könnte das passen?',
        },
        {
          titel: 'Alle Bedingungen prüfen',
          text: 'Eine Anzeige passt nur, wenn **alle** Schlüsselwörter passen — nicht nur das Thema. Kurs ja, aber vormittags statt abends? → passt **nicht**.',
        },
        {
          titel: 'Nichts passt? Dann „0“',
          text: 'Wenn keine Anzeige zu 100 % passt, ist die Lösung **„0“**. Das ist keine Trick-Ausnahme, sondern ein normaler Teil der Aufgabe.',
        },
      ],
    },
    {
      type: 'prose',
      card: true,
      titel: 'Die Fast-richtig-Falle',
      absaetze: [
        'Die klassische Falle in Teil 2: eine Anzeige mit dem **richtigen Thema**, aber einem **falschen Detail** — abends statt vormittags, neu statt gebraucht, kaufen statt mieten, online statt vor Ort. ~~El anuncio «casi correcto» es la trampa clásica: comprueba siempre el detalle.~~',
        'Deshalb gilt: Nicht die erste Anzeige nehmen, die zum Thema passt — sondern die Anzeige, bei der **jede Bedingung** stimmt.',
      ],
    },

    { type: 'rule' },

    // ── Beispiele ─────────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele — Person gegen Anzeige',
      kicker: 'Schlüsselwörter',
      titel: 'Passt oder passt nicht?',
      items: [
        { text: 'Person: „sucht einen Yogakurs **am Wochenende**“ → Anzeige: „Yoga für alle — **dienstags** 19 Uhr“', gl: '— passt nicht: falscher Tag' },
        { text: 'Person: „möchte ein **gebrauchtes** Sofa, maximal 150 €“ → Anzeige: „Sofa, 2 Jahre alt, 120 €“', gl: '— passt: gebraucht + unter 150 €' },
        { text: 'Person: „sucht ein Zimmer **zur Miete**“ → Anzeige: „1-Zimmer-Wohnung **zu verkaufen**“', gl: '— passt nicht: mieten ≠ kaufen' },
      ],
    },
    {
      type: 'beispiele',
      titel: 'Achtung, falscher Freund',
      items: [
        { text: '„Nachhilfe für Schüler am **Gymnasium**“ = Nachhilfe für eine Schule', gl: '~~Gymnasium = instituto, no gimnasio. Un clásico en las Anzeigen.~~' },
      ],
    },

    { type: 'rule' },

    // ── Übungen ───────────────────────────────────────────────────
    {
      type: 'uebung',
      eyebrow: 'Anwendung — Übung 1 · Erkennen',
      frage: 'Welche 2–3 Schlüsselwörter markierst du bei diesen Personen?',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Ana möchte abends nach der Arbeit Gitarre lernen. Sie ist Anfängerin.',
        'Herr Weber sucht für seinen Sohn (10) einen Fußballverein in der Nähe.',
        'Carla braucht günstig einen Schreibtisch — sie kann ihn selbst abholen.',
      ],
      loesungen: [
        '**Gitarre** · **abends** · **Anfängerin** — drei Bedingungen, alle müssen passen.',
        '**Fußballverein** · **Kind (10 Jahre)** · **in der Nähe**.',
        '**Schreibtisch** · **günstig** · **selbst abholen**.',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 2 · Mini-Zuordnung',
      frage: 'Zwei Personen, drei Anzeigen — welche passt? (a, b, c oder 0)\n**a)** „Spanisch-Intensivkurs, Mo–Fr 9–12 Uhr“ · **b)** „Spanisch am Abend, für Anfänger, Di + Do 19 Uhr“ · **c)** „Nachhilfe Mathematik, alle Klassen“',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Tim arbeitet tagsüber und will als Anfänger Spanisch lernen.',
        'Frau Ortiz sucht für ihre Tochter Nachhilfe in Englisch.',
      ],
      loesungen: [
        '**b** — Abendkurs für Anfänger. Anzeige a hat das richtige Thema, aber die falsche Zeit ~~(la trampa del casi-correcto)~~.',
        '**0** — Anzeige c bietet Nachhilfe, aber in Mathematik, nicht in Englisch. Keine Anzeige passt.',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 3 · Produzieren',
      frage: 'Schreib selbst eine kurze Anzeige (Fragmente erlaubt!), die zu dieser Person passt:\n„Luis sucht einen ruhigen Lernplatz mit WLAN, kostenlos, auch am Sonntag geöffnet.“',
      loesungLabel: 'Mögliche Lösung',
      aufgaben: [
        'Deine Anzeige:',
      ],
      loesungen: [
        '„**Stadtbibliothek am Park** — Lernplätze mit WLAN, Eintritt frei. Geöffnet täglich 9–20 Uhr, auch sonntags.“ ~~Vale cualquier anuncio con las tres condiciones: gratis + WLAN + domingo.~~',
      ],
    },

    { type: 'rule' },

    // ── Prüfungsbezug ─────────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Lesen · Teil 2',
      titel: 'Komplette Übung: 4 Personen, 6 Anzeigen',
      anweisung: 'Welche Anzeige (a–f) passt zu welcher Person (1–4)? Jede Anzeige passt nur einmal. Für eine Person gibt es keine passende Anzeige: Schreibe dann 0. Zeit: ca. 15 Minuten.',
      absaetze: [
        '**Die Personen**',
        '**1. Marta** arbeitet bis 17:30 Uhr und möchte danach einen Deutschkurs besuchen.\n**2. Jonas** sucht ein gebrauchtes Fahrrad für die Stadt — er kann maximal 100 Euro ausgeben.\n**3. Familie Roca** sucht für Samstag einen Ausflug, der auch ihren zwei kleinen Kindern Spaß macht.\n**4. Sofía** möchte am Wochenende einen Schwimmkurs für Erwachsene machen.',
        '**Die Anzeigen**',
        '**a) Deutsch am Abend!** Sprachschule Lingua, Kurse Mo–Do 18:30–20:00 Uhr, alle Niveaus. Jetzt anmelden!\n**b) Schwimmen für Erwachsene** — Anfängerkurs im Hallenbad Nord, dienstags 9–10 Uhr. Ermäßigung für Senioren.\n**c) E-Bike zu verkaufen**, ein Jahr alt, fast neu, 1.200 €. Nur Selbstabholung.\n**d) Herbstfest auf dem Bauernhof Lindenhof** — Samstag ab 11 Uhr: Ponyreiten, Spiele für Kinder, Kuchen. Eintritt frei!\n**e) Fahrrad abzugeben**, 3 Jahre alt, guter Zustand, neue Bremsen, 80 €. Abholung in der Innenstadt.\n**f) Deutsch intensiv** — Vormittagskurse Mo–Fr 9–13 Uhr, kleine Gruppen, Prüfungsvorbereitung.',
      ],
      optionen: [
        '(1) Marta → ?',
        '(2) Jonas → ?',
        '(3) Familie Roca → ?',
        '(4) Sofía → ?',
      ],
      loesungLabel: 'Lösung mit Begründung',
      loesungen: [
        '(1) **a** — Deutschkurs **am Abend** (18:30, nach der Arbeit). Anzeige f ist die Falle: richtiges Thema, aber **vormittags**.',
        '(2) **e** — Fahrrad, **gebraucht** (3 Jahre alt), **80 € ≤ 100 €**. Anzeige c ist die Falle: ein Fahrrad, aber fast neu und viel zu teuer.',
        '(3) **d** — **Samstag** + „Spiele für Kinder“ + Eintritt frei: alle Bedingungen passen.',
        '(4) **0** — Anzeige b bietet zwar Schwimmen für Erwachsene, aber **dienstags vormittags** — Sofía kann nur am **Wochenende**. Keine Anzeige passt. ~~El detalle (el día) decide: casi-correcto = incorrecto.~~',
      ],
      kommentar: 'Sieh dir die Fallen an: f und c passen beim Thema, aber nicht im Detail — und bei Sofía führt genau so eine Anzeige zur Lösung „0“. Hier bleiben drei Anzeigen übrig (b, c, f) — das ist normal: Es gibt immer mehr Anzeigen als Personen.',
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Arbeite mit **Ausschluss**: Wenn eine Anzeige sicher vergeben ist, streiche sie (auf Papier) oder merke sie dir als „weg“ (am Computer). So wird die Auswahl mit jeder Person kleiner.',
    },

    { type: 'rule' },

    // ── Abschluss ─────────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Schritt', 'So machst du es'],
      zeilen: [
        ['Person lesen', '2–3 Schlüsselwörter markieren: Was? Wann? Bedingung?'],
        ['Anzeigen überfliegen', 'nur Überschriften und Kernwörter'],
        ['Vergleichen', 'ALLE Bedingungen müssen passen, nicht nur das Thema'],
        ['Falle', 'fast richtig = falsch (Zeit, Preis, neu/gebraucht …)'],
        ['Nichts passt', 'Lösung „0“ — ganz normal'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich markiere bei jeder Person die Schlüsselwörter, bevor ich die Anzeigen lese.',
        'Ich prüfe alle Bedingungen — eine fast richtige Anzeige nehme ich nicht.',
        'Ich weiß, dass „0“ eine mögliche und normale Lösung ist.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'In Teil 2 suchst du Fakten: Preis, Zeit, Ort. In **Teil 3** suchst du etwas anderes — **Meinungen**: Ist die Person dafür oder dagegen? Dafür lernst du in der nächsten Lektion die Sprache der Meinung: *finden, glauben, für/gegen sein*.',
    },
  ],
}
