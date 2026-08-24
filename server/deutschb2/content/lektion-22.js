// Lektion 22 · Lesen: formeller Regeltext (Teil 5)
//
// Bloque 2 «Prüfungsstrategie» — cierra el módulo Lesen (L18-L22).
// Sigue el canon fijado en lektion-18.js: Teil 5 = formeller Regeltext,
// zuordnen/ergänzen, ca. 8 Minuten. Cierre: síntesis de los 5 Teile.

export default {
  spec: ['Bloque 2', 'Prüfungsstrategie', 'Niveau B2', 'Prüfungsrelevanz: Lesen Teil 5'],
  h1: 'Lesen: formeller Regeltext',
  lead: 'Teil 5 des Moduls Lesen: Hausordnung, AGB, Vertrag — Amtsdeutsch entschlüsseln, die Struktur nutzen und das Modul Lesen komplett machen.',

  content: [
    // ── Lernziele ─────────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'juristisch-administratives Basisvokabular verstehen: untersagt, gestattet, haften …',
        'die Struktur formeller Regeltexte nutzen: ein Abschnitt = ein Thema',
        'Zuordnungs- und Ergänzungsaufgaben zu Regeltexten in ca. 8 Minuten lösen',
        'alle fünf Teile des Moduls Lesen im Zusammenhang sehen',
      ],
    },

    { type: 'rule' },

    // ── Kernwortschatz ────────────────────────────────────────────
    {
      type: 'wortschatz',
      eyebrow: 'Kernwortschatz — Amtsdeutsch für den Alltag',
      items: [
        { wort: 'untersagt', kollokation: 'Das Grillen auf dem Balkon ist untersagt.', es: 'prohibido (formal)' },
        { wort: 'gestattet', kollokation: 'Haustiere sind nur mit Erlaubnis gestattet.', es: 'permitido (formal)' },
        { wort: 'verpflichtet sein zu + Dat.', kollokation: 'Der Mieter ist zur Reinigung verpflichtet.', es: 'estar obligado a' },
        { wort: 'berechtigt sein zu + Dat.', kollokation: 'Der Vermieter ist zur Kündigung berechtigt.', es: 'tener derecho a' },
        { wort: 'haften für + Akk.', kollokation: 'Eltern haften für ihre Kinder.', es: 'responder de (los daños)' },
        { wort: 'der Mieter, - / der Vermieter, -', kollokation: 'Mieter und Vermieter unterschreiben den Vertrag.', es: 'inquilino / arrendador' },
        { wort: 'die Hausordnung, -en', kollokation: 'Die Hausordnung ist Teil des Mietvertrags.', es: 'las normas del edificio' },
        { wort: 'die Frist, -en', kollokation: 'eine Frist von drei Monaten einhalten', es: 'el plazo' },
        { wort: 'die Nutzung, -en', kollokation: 'die Nutzung der Waschküche regeln', es: 'el uso' },
        { wort: 'unverzüglich', kollokation: 'Schäden sind unverzüglich zu melden.', es: 'de inmediato (formal)' },
        { wort: 'in Kraft treten', kollokation: 'Die Regelung tritt am 1. Januar in Kraft.', es: 'entrar en vigor' },
        { wort: 'die Vorschrift, -en', kollokation: 'die geltenden Vorschriften beachten', es: 'la norma, el reglamento' },
      ],
      hinweis: '~~La estructura clave del Amtsdeutsch: *sein + zu + Infinitiv* expresa obligación, no finalidad: „Abfälle **sind zu trennen**" = *hay que separar la basura* (= müssen getrennt werden).~~',
    },

    { type: 'rule' },

    // ── Erklärung ─────────────────────────────────────────────────
    {
      type: 'prose',
      eyebrow: 'Erklärung — die Textsorte',
      absaetze: [
        'In Teil 5 liest du einen **formellen Regeltext**: eine Hausordnung, Allgemeine Geschäftsbedingungen (AGB), einen Ausschnitt aus einem Arbeitsvertrag oder eine Benutzungsordnung. Typische Aufgabe: den Abschnitten **Überschriften zuordnen** oder den Text gezielt **ergänzen** — das genaue Format zeigt dir der offizielle Modellsatz. Der Text klingt schwieriger, als er ist: Amtsdeutsch benutzt wenige, immer gleiche Formeln. Wer sie kennt, liest Teil 5 am schnellsten von allen.',
      ],
    },
    {
      type: 'tabelle',
      eyebrow: 'Erklärung — Amtsdeutsch übersetzen',
      kopf: ['Formell (im Text)', 'Einfach (gemeint ist)'],
      zeilen: [
        ['ist untersagt / ist nicht gestattet', 'ist verboten / man darf nicht'],
        ['ist gestattet / ist zulässig', 'ist erlaubt / man darf'],
        ['ist verpflichtet zu … / hat zu …', 'muss'],
        ['ist berechtigt zu …', 'darf / hat das Recht'],
        ['haftet für …', 'muss bezahlen, wenn etwas kaputtgeht'],
        ['ist unverzüglich zu melden', 'muss sofort gemeldet werden'],
      ],
    },
    {
      type: 'steps',
      eyebrow: 'Erklärung — die Methode für Teil 5',
      steps: [
        {
          titel: 'Die Struktur ist dein Freund',
          text: 'Regeltexte sind in nummerierte __Abschnitte__ gegliedert, und jeder Abschnitt behandelt genau __ein Thema__. Oft steht der Kern schon im ersten Satz.',
        },
        {
          titel: 'Erst die Aufgabe, dann gezielt suchen',
          text: 'Lies zuerst die Überschriften bzw. Aussagen. Dann __überfliege__ jeden Abschnitt nur so weit, bis du sein Thema kennst — Wort für Wort lesen kostet hier nur Zeit.',
        },
        {
          titel: 'Auf Bedingungen und Ausnahmen achten',
          text: 'Die Falle in Regeltexten sind kleine Wörter: __nur, außer, soweit, spätestens, ab__. „Nur mit Erlaubnis gestattet“ ist etwas ganz anderes als „gestattet“.',
        },
      ],
    },

    { type: 'rule' },

    // ── Beispiele ─────────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele — Formel und Bedeutung',
      kicker: 'Amtsdeutsch',
      titel: 'So klingt Teil 5',
      items: [
        { text: '„Das Abstellen von Fahrrädern im Hausflur **ist untersagt**.“', gl: '— prohibido dejar la bici en el portal' },
        { text: '„Der Mieter **ist verpflichtet**, Schäden **unverzüglich** zu melden.“', gl: '— obligación: avisar de inmediato' },
        { text: '„Die Kündigung **ist** spätestens drei Monate vorher **einzureichen**.“', gl: '— sein + zu + Inf.: hay que presentarla; *spätestens* = como muy tarde' },
        { text: '„Haustiere sind **nur** mit schriftlicher Zustimmung des Vermieters **gestattet**.“', gl: '— permitido, pero con condición: *nur mit …*' },
        { text: '„Für Wertsachen in der Garderobe **wird nicht gehaftet**.“', gl: '— si desaparece algo, no te lo pagan' },
      ],
    },

    { type: 'rule' },

    // ── Übungen ───────────────────────────────────────────────────
    {
      type: 'uebung',
      eyebrow: 'Anwendung — Übung 1 · Erkennen',
      frage: 'Sag es einfach: Was bedeutet die Regel in Alltagsdeutsch?',
      loesungLabel: 'Lösung',
      aufgaben: [
        '„Die Benutzung des Aufzugs ist Kindern unter zehn Jahren nur in Begleitung Erwachsener gestattet.“',
        '„Der Arbeitnehmer hat Arbeitsunfähigkeit unverzüglich anzuzeigen.“',
        '„Der Betreiber ist berechtigt, die Öffnungszeiten zu ändern.“',
        '„Für abgestellte Fahrzeuge wird keine Haftung übernommen.“',
      ],
      loesungen: [
        'Kinder unter zehn **dürfen nur mit** einem Erwachsenen Aufzug fahren.',
        'Wer krank ist, **muss sofort** Bescheid sagen. ~~*anzeigen* aquí = comunicar, no denunciar.~~',
        'Der Betreiber **darf** die Öffnungszeiten ändern.',
        'Wenn am geparkten Auto etwas passiert, **bezahlt der Betreiber nicht**.',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 2 · Anwenden',
      frage: 'Richtig oder falsch? Regel: „Das Musizieren ist werktags von 19 bis 8 Uhr sowie ganztägig an Sonn- und Feiertagen untersagt.“',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Am Dienstag um 15 Uhr darf man Klavier spielen.',
        'Am Sonntag um 15 Uhr darf man Klavier spielen.',
        'Am Mittwoch um 21 Uhr darf man Klavier spielen.',
      ],
      loesungen: [
        '**Richtig** — Dienstag ist ein Werktag, 15 Uhr liegt außerhalb der Verbotszeit (19–8 Uhr).',
        '**Falsch** — an Sonn- und Feiertagen gilt das Verbot *ganztägig*.',
        '**Falsch** — 21 Uhr liegt in der Verbotszeit ab 19 Uhr. Die kleinen Zeitangaben entscheiden alles.',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 3 · Produzieren',
      frage: 'Formuliere die zwei Alltagssätze als formelle Regeln im Stil einer Hausordnung.',
      loesungLabel: 'Mögliche Lösung',
      aufgaben: [
        'Man darf im Keller nicht rauchen.',
        'Wer etwas kaputt macht, muss es bezahlen.',
      ],
      loesungen: [
        '**Das Rauchen ist in den Kellerräumen untersagt.** — auch richtig: „… ist nicht gestattet.“',
        '**Für Schäden haftet die Person, die sie verursacht hat.** ~~Cualquier variante con *haften für* o *ist verpflichtet, … zu ersetzen* es válida, p. ej. „Der Verursacher ist verpflichtet, den Schaden zu ersetzen.“~~',
      ],
    },

    { type: 'rule' },

    // ── Prüfungsbezug ─────────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Modul Lesen · Teil 5',
      titel: 'Hausordnung: Überschriften zuordnen',
      anweisung: 'Lies die Hausordnung und ordne jedem Abschnitt (1–5) die passende Überschrift (A–G) zu. Zwei Überschriften bleiben übrig. Zeitlimit für die Übung: 8 Minuten.',
      absaetze: [
        '**Hausordnung der Wohnanlage Lindenhof — Auszug**',
        '**Abschnitt 1:** In der Zeit von 22 bis 6 Uhr sowie ganztägig an Sonn- und Feiertagen ist jede über das übliche Maß hinausgehende Lärmbelästigung zu vermeiden. Das Musizieren ist in diesen Zeiten untersagt. Waschmaschinen und Wäschetrockner dürfen zwischen 22 und 6 Uhr nicht betrieben werden.',
        '**Abschnitt 2:** Flure, Treppen und Hauseingänge sind aus Sicherheitsgründen von Gegenständen freizuhalten. Das Abstellen von Fahrrädern und Kinderwagen ist nur an den dafür vorgesehenen Plätzen gestattet. Die Reinigung des Treppenhauses erfolgt wöchentlich im Wechsel durch die Mietparteien, soweit kein Reinigungsdienst beauftragt ist.',
        '**Abschnitt 3:** Abfälle sind ausschließlich in die dafür vorgesehenen Behälter zu werfen und nach den geltenden Vorschriften zu trennen. Sperrmüll darf nicht im Hof gelagert werden; seine Abholung ist rechtzeitig bei der Stadtverwaltung anzumelden.',
        '**Abschnitt 4:** Schäden am Gebäude oder an gemeinschaftlichen Anlagen sind dem Vermieter unverzüglich zu melden. Für Schäden, die durch unsachgemäße Nutzung entstehen, haftet die verursachende Mietpartei.',
        '**Abschnitt 5:** Haus- und Kellertüren sind ab 22 Uhr geschlossen zu halten. Das Lagern leicht entzündlicher Stoffe in Keller- und Dachbodenräumen ist aus Gründen des Brandschutzes untersagt.',
      ],
      optionen: [
        'A — Ruhe im Haus',
        'B — Treppenhaus und gemeinsame Flächen',
        'C — Besuch und Übernachtungsgäste',
        'D — Mülltrennung und Sperrmüll',
        'E — Schäden und Haftung',
        'F — Türen und Brandschutz',
        'G — Haltung von Haustieren',
      ],
      loesungLabel: 'Lösung mit Begründung',
      loesungen: [
        'Abschnitt 1 → **A** — Lärmbelästigung, Musizieren, Maschinenzeiten: alles dreht sich um Ruhe. „Ruhe“ selbst kommt im Text nicht vor — die Überschrift ist die Paraphrase.',
        'Abschnitt 2 → **B** — Flure, Treppen, Hauseingänge, Reinigung = gemeinsame Flächen.',
        'Abschnitt 3 → **D** — Behälter, trennen, Sperrmüll.',
        'Abschnitt 4 → **E** — melden + *haften* = Schäden und Haftung.',
        'Abschnitt 5 → **F** — geschlossene Türen + Brandschutz.',
        'Übrig bleiben **C** und **G** — zu Besuch und Haustieren sagt dieser Auszug nichts. Wer „irgendwie passende“ Überschriften rät, statt Belege zu suchen, fällt genau hier hinein.',
      ],
      kommentar: 'Kontrolliere am Ende rückwärts: Zu jeder gewählten Überschrift muss es im Abschnitt **mindestens zwei konkrete Belege** geben. Die übrigen Überschriften sind Distraktoren über plausibles Weltwissen — die Technik kennst du schon aus Teil 1–2.',
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Teil 5 ist mit **ca. 8 Minuten** der kürzeste Teil — viele lösen ihn deshalb **zuerst** und sichern sich schnelle Punkte. Bei der digitalen Prüfung gilt wie immer: erst Aufgabe ansehen, dann den Text gezielt absuchen. Und unterschätze die kleinen Wörter nicht: *nur, außer, spätestens, ab* entscheiden über richtig und falsch.',
    },

    { type: 'rule' },

    // ── Abschluss: das ganze Modul ────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung — das Modul Lesen komplett',
      kopf: ['Teil', 'Textsorte & Aufgabe', 'Kernstrategie', 'Zeit'],
      zeilen: [
        ['Teil 1–2', 'Artikel · Auswahl a/b/c', 'unterstreichen → paraphrasieren → Distraktoren ausschließen', 'ca. 25 Min.'],
        ['Teil 3', 'Meinungen · zuordnen', 'pro Person: Haltung + Argument notieren, über Paraphrasen zuordnen', 'ca. 12 Min.'],
        ['Teil 4', 'Kommentar · Standpunkt', 'Wertungen markieren, Ironie erkennen, Schlussabsatz = Fazit', 'ca. 15 Min.'],
        ['Teil 5', 'Regeltext · zuordnen/ergänzen', 'Struktur nutzen, Amtsdeutsch-Formeln übersetzen, kleine Wörter prüfen', 'ca. 8 Min.'],
        ['Puffer', 'kontrollieren, übertragen, nichts leer lassen', '—', 'ca. 5 Min.'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich übersetze Amtsdeutsch-Formeln (*untersagt, verpflichtet, haften*) automatisch in Alltagssprache.',
        'Ich nutze die Abschnittsstruktur und lese Regeltexte gezielt statt komplett.',
        'Ich achte auf Bedingungswörter wie *nur, außer, spätestens*.',
        'Ich habe für alle fünf Teile des Moduls Lesen eine Strategie und einen Zeitplan.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Damit ist das Modul Lesen komplett — du kennst alle fünf Teile, ihre Fallen und deinen Zeitplan. In der nächsten Lektion wechseln wir den Kanal: das **Modul Hören** — ca. 40 Minuten, vier Teile, und eine ganz eigene Herausforderung: Der Text wartet nicht auf dich.',
    },
  ],
}
