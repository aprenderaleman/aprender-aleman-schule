// Lektion 31 · Themenfeld: Digitalisierung & KI
//
// Bloque 3 «Themenfelder» — künstliche Intelligenz im Alltag und Beruf,
// Datenschutz (DSGVO), Automatisierung, digitale Bildung, Chancen/Risiken.

export default {
  spec: ['Bloque 3', 'Themenfelder', 'Niveau C1', 'Prüfungsrelevanz: Lesen Teil 2 · Sprechen Teil 2'],
  h1: 'Digitalisierung & KI',
  lead: 'Künstliche Intelligenz, Datenschutz, Automatisierung: das Zukunftsthema der Prüfung — mit dem Wortschatz, den Institutionen und dem Chancen-Risiken-Gerüst, das jede Diskussion trägt.',

  content: [
    // ── 2. Lernziele ──────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'Am Ende kannst du über künstliche Intelligenz in Alltag und Beruf differenziert sprechen — jenseits von Science-Fiction und Panik.',
        'Du beherrschst 14 Schlüsselwörter des Themenfelds mit ihren typischen Kollokationen.',
        'Du kennst die europäische Regulierungslandschaft (DSGVO, KI-Verordnung) und setzt sie als Argument ein.',
        'Du strukturierst jede Digitalisierungsfrage mit dem Chancen-Risiken-Gerüst und löst einen thematischen Lückentext im Prüfungsformat.',
      ],
    },

    { type: 'rule' },

    // ── 3. Kernwortschatz ─────────────────────────────────────────
    {
      type: 'wortschatz',
      eyebrow: 'Kernwortschatz',
      items: [
        { wort: 'die künstliche Intelligenz (KI)', kollokation: 'künstliche Intelligenz einsetzen', es: 'inteligencia artificial' },
        { wort: 'die Digitalisierung', kollokation: 'die Digitalisierung der Verwaltung vorantreiben', es: 'digitalización' },
        { wort: 'der Datenschutz', kollokation: 'gegen den Datenschutz verstoßen', es: 'protección de datos' },
        { wort: 'die Automatisierung', kollokation: 'von der Automatisierung betroffen sein', es: 'automatización' },
        { wort: 'der Algorithmus', kollokation: 'einen Algorithmus trainieren', es: 'algoritmo' },
        { wort: 'die Daten (Pl.)', kollokation: 'personenbezogene Daten verarbeiten', es: 'datos (¡solo plural!)' },
        { wort: 'die Überwachung', kollokation: 'eine lückenlose Überwachung befürchten', es: 'vigilancia' },
        { wort: 'ersetzen', kollokation: 'menschliche Arbeitskraft durch Maschinen ersetzen', es: 'sustituir, reemplazar' },
        { wort: 'die Anwendung', kollokation: 'praktische Anwendungen entwickeln', es: 'aplicación (uso y programa)' },
        { wort: 'die Effizienz', kollokation: 'die Effizienz erheblich steigern', es: 'eficiencia' },
        { wort: 'die Transparenz', kollokation: 'Transparenz bei automatisierten Entscheidungen fordern', es: 'transparencia' },
        { wort: 'die Haftung', kollokation: 'die Frage der Haftung klären', es: 'responsabilidad (jurídica)' },
        { wort: 'die digitale Kluft', kollokation: 'die digitale Kluft überwinden', es: 'brecha digital' },
        { wort: 'verantwortungsvoll', kollokation: 'einen verantwortungsvollen Umgang mit KI fördern', es: 'responsable (con criterio)' },
      ],
      hinweis: '**Die Daten** sind im Deutschen immer Plural: *die Daten werden verarbeitet*. Und Vorsicht mit **eventuell**: Es bedeutet *vielleicht* ~~y no «finalmente» (la interferencia viene del inglés *eventually*): «finalmente/al final» es *schließlich* o *letztlich*. En un texto sobre riesgos, confundirlos cambia el sentido por completo~~.',
    },

    { type: 'rule' },

    // ── 4. Erklärung ──────────────────────────────────────────────
    {
      type: 'prose',
      eyebrow: 'Erklärung',
      card: true,
      titel: 'Die Debatte im deutschsprachigen Raum — das Spielfeld',
      absaetze: [
        'Kaum ein Thema verbindet Alltag und Grundsatzfragen so direkt: KI-Systeme schreiben Texte, filtern Bewerbungen, stellen Diagnosen — und werfen dabei die Fragen auf, die in der Prüfung fallen: Wer **haftet**, wenn der Algorithmus irrt? Wie viel **Überwachung** verträgt eine freie Gesellschaft? Ersetzt die **Automatisierung** Arbeitsplätze oder schafft sie neue?',
        'Europa antwortet darauf mit Regulierung — dein stärkstes Faktenargument. Die __Datenschutz-Grundverordnung (DSGVO)__ gibt jedem das Recht zu erfahren, welche personenbezogenen Daten über ihn verarbeitet werden, und gilt als weltweit strengster Rahmen ihrer Art. Die __KI-Verordnung der EU__ (der „AI Act“) reguliert KI-Systeme nach Risikostufen: je größer das Risiko einer Anwendung, desto strenger die Auflagen. In Deutschland wacht unter anderem das __Bundesamt für Sicherheit in der Informationstechnik (BSI)__ über die IT-Sicherheit. In der Debatte steht dabei stets dieselbe Abwägung im Raum: **Schutz der Grundrechte** gegen die Sorge, Europa könnte durch Überregulierung den technologischen Anschluss verlieren.',
      ],
    },

    {
      type: 'steps',
      eyebrow: 'Erklärung — Das Chancen-Risiken-Gerüst',
      steps: [
        {
          badge: 'Chancen',
          titel: 'Was für die Technologie spricht',
          text: 'KI **entlastet** von Routineaufgaben und steigert die __Effizienz__; in der Medizin verbessert sie Diagnosen, in der Verwaltung verkürzt die Digitalisierung Wartezeiten. Historisches Argument: Bisher hat technischer Wandel langfristig mehr Arbeitsplätze geschaffen als vernichtet — sie wurden nur andere.',
        },
        {
          badge: 'Risiken',
          titel: 'Was dagegen vorgebracht wird',
          text: 'Algorithmen übernehmen die **Verzerrungen** ihrer Trainingsdaten und können diskriminieren, ohne dass es jemand bemerkt — deshalb die Forderung nach __Transparenz__. Dazu kommen Datenmissbrauch, Überwachung, Desinformation und die Sorge, dass die __Automatisierung__ diesmal auch qualifizierte Tätigkeiten erfasst.',
        },
        {
          badge: 'Bildung',
          titel: 'Die Querschnittsfrage: digitale Kompetenz',
          text: 'Beide Seiten treffen sich bei der __digitalen Bildung__: Wer Technologie weder bedienen noch beurteilen kann, landet auf der falschen Seite der __digitalen Kluft__ — zwischen Generationen, Regionen und sozialen Schichten. Der Ausbau digitaler Kompetenzen in der Schule ist der seltene Konsens der Debatte.',
        },
      ],
    },

    {
      type: 'tabelle',
      eyebrow: 'Erklärung — Institutionen und Regelwerke',
      kopf: ['Begriff', 'Was dahintersteckt'],
      zeilen: [
        ['DSGVO', 'EU-Datenschutzrecht: Auskunftsrecht, Zweckbindung, empfindliche Bußgelder'],
        ['KI-Verordnung (AI Act)', 'EU-Regulierung von KI nach Risikostufen — je riskanter, desto strenger'],
        ['BSI', 'deutsches Bundesamt für Sicherheit in der Informationstechnik'],
        ['personenbezogene Daten', 'alle Angaben, die eine Person identifizierbar machen — der Schlüsselbegriff der DSGVO'],
        ['digitale Kluft', 'ungleicher Zugang zu Technik und Kompetenz — sozial, regional, generationell'],
      ],
    },

    { type: 'rule' },

    // ── 5. Beispiele ──────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele — Sätze zum Übernehmen',
      kicker: 'Alltag & Beruf',
      titel: 'KI konkret beschreiben',
      items: [
        { text: 'Künstliche Intelligenz ist längst im Alltag angekommen: Sie sortiert unsere Suchergebnisse, übersetzt Texte und schlägt uns vor, was wir als Nächstes ansehen sollen.', gl: '— *längst angekommen sein*: buen arranque de Vortrag' },
        { text: 'In vielen Unternehmen übernimmt KI inzwischen die Vorauswahl von Bewerbungen — mit allen Chancen und Verzerrungen, die das mit sich bringt.' },
        { text: 'Repetitive Tätigkeiten lassen sich zunehmend **automatisieren**, wodurch Beschäftigte Zeit für anspruchsvollere Aufgaben gewinnen.' },
        { text: 'Ob die **Automatisierung** Arbeitsplätze vernichtet oder verlagert, hängt entscheidend davon ab, wie konsequent in Weiterbildung investiert wird.', gl: '— enlaza con la lección 29: lebenslanges Lernen como respuesta' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'Datenschutz',
      titel: 'Über Daten und Kontrolle sprechen',
      items: [
        { text: 'Die DSGVO verpflichtet Unternehmen dazu, **personenbezogene Daten** nur für klar benannte Zwecke zu **verarbeiten**.' },
        { text: 'Wer gegen den **Datenschutz** verstößt, riskiert nicht nur Bußgelder, sondern vor allem das Vertrauen seiner Kundschaft.' },
        { text: 'Ohne **Transparenz** darüber, nach welchen Kriterien ein Algorithmus entscheidet, lässt sich Diskriminierung weder erkennen noch beweisen.' },
        { text: 'Zwischen berechtigter Strafverfolgung und flächendeckender **Überwachung** verläuft ein schmaler Grat.', gl: '— *ein schmaler Grat*: «una línea muy fina», fórmula de matiz' },
        { text: 'Viele Nutzer willigen in die Verarbeitung ihrer Daten ein, ohne die Bedingungen auch nur überflogen zu haben.', gl: '— *einwilligen in + Akk.*: el verbo jurídico del consentimiento' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'Bewertung',
      titel: 'Chancen und Risiken abwägen',
      items: [
        { text: 'Die Frage ist nicht, **ob** wir KI einsetzen, sondern **wie** — und wer über die Spielregeln entscheidet.' },
        { text: 'Solange ungeklärt ist, wer bei Fehlentscheidungen einer KI **haftet**, bleibt ihr Einsatz in sensiblen Bereichen heikel.' },
        { text: 'Ein **verantwortungsvoller Umgang** mit KI setzt voraus, dass Nutzer verstehen, was die Systeme können — und was nicht.' },
        { text: 'Wird die **digitale Kluft** nicht geschlossen, droht die Digitalisierung bestehende Ungleichheiten weiter zu vertiefen.', gl: '— *droht … zu + Inf.*: «amenaza con», estructura C1' },
      ],
    },

    {
      type: 'redemittel',
      eyebrow: 'Redemittel — Meinung äußern im Themenfeld Digitalisierung',
      gruppen: [
        {
          fn: 'Chancen betonen',
          saetze: [
            { satz: 'Man kann der Technologie kritisch gegenüberstehen — ihr Potenzial in Medizin und Bildung lässt sich jedoch kaum bestreiten.' },
            { satz: 'Richtig eingesetzt, entlastet KI den Menschen von Routinearbeit, statt ihn zu ersetzen.' },
          ],
        },
        {
          fn: 'Risiken benennen',
          saetze: [
            { satz: 'Bedenklich stimmt mich vor allem, dass automatisierte Entscheidungen kaum nachvollziehbar sind.', gloss: '— *bedenklich stimmen*: «preocupar, inquietar» (*das stimmt mich bedenklich* = eso me preocupa)' },
            { satz: 'Wir sollten uns nicht der Illusion hingeben, dass sich diese Entwicklung von selbst zum Guten wendet.' },
          ],
        },
        {
          fn: 'Bedingungen formulieren',
          saetze: [
            { satz: 'Entscheidend wird sein, ob es gelingt, Innovation und Grundrechtsschutz miteinander zu vereinbaren.' },
            { satz: 'Ich halte den Einsatz von KI für vertretbar, sofern Transparenz und Haftung eindeutig geregelt sind.', gloss: '— *sofern*: «siempre y cuando», más elegante que *wenn*' },
          ],
        },
      ],
    },

    { type: 'rule' },

    // ── 6. Modelltext · Mehr Beispiele ────────────────────────────
    {
      type: 'modell',
      eyebrow: 'Modelltext — Mini-Vortrag: KI in der Schule',
      thema: '„KI in der Schule — Hilfsmittel oder Gefahr?“ Der Mini-Vortrag folgt dem Chancen-Risiken-Gerüst: Einstieg → Chance → Risiko → Bedingung → Fazit.',
      absaetze: [
        '**Künstliche Intelligenz** ist längst in den Klassenzimmern angekommen — die Frage ist, wie Schulen damit umgehen sollten. Einerseits kann KI Lernende individuell fördern und Lehrkräfte von Routineaufgaben entlasten, was die **Effizienz** des Unterrichts steigert. Andererseits besteht die Gefahr, dass Schüler das kritische Denken an den **Algorithmus** abgeben und dabei **personenbezogene Daten** preisgeben. Vertretbar erscheint mir der Einsatz daher nur, sofern der **Datenschutz** gewährleistet ist und ein **verantwortungsvoller** Umgang ausdrücklich unterrichtet wird. Alles in allem überwiegen die Chancen — aber nur mit klaren Spielregeln.',
      ],
      annotationen: [
        { tag: 'Gerüst', text: 'Jeder Satz erfüllt eine Funktion: Einstieg → Chance (*einerseits*) → Risiko (*andererseits*) → Bedingung (*sofern*) → Fazit. ~~Cualquier postura es válida mientras el esquema sea reconocible.~~' },
      ],
    },
    {
      type: 'beispiele',
      eyebrow: 'Mehr Beispiele',
      titel: 'Den Kernwortschatz im Zusammenhang verwenden',
      items: [
        { text: 'Die **Digitalisierung** der Verwaltung soll Behördengänge überflüssig machen, doch vielerorts scheitert sie noch an veralteter Technik.' },
        { text: 'Kliniken **setzen** künstliche Intelligenz zunehmend bei der Auswertung von Röntgenbildern **ein**, die endgültige Diagnose stellt jedoch weiterhin ein Arzt.', gl: '— *KI einsetzen*: el verbo estándar para «emplear» una tecnología' },
        { text: 'Ältere Menschen ohne Internetzugang sind von der **digitalen Kluft** besonders betroffen, seit immer mehr Dienstleistungen nur noch online angeboten werden.' },
        { text: 'Die **Daten**, die der Sprachassistent aufzeichnet, werden nach Angaben des Herstellers nach dreißig Tagen gelöscht.', gl: '— *die Daten … werden*: siempre plural' },
        { text: 'Selbst die ausgefeilteste **Anwendung** kann menschliches Urteilsvermögen nicht vollständig **ersetzen**.' },
        { text: 'Kritiker befürchten, dass die flächendeckende Videoanalyse im öffentlichen Raum den Weg zu lückenloser **Überwachung** ebnet.', gl: '— *den Weg zu etwas ebnen*: allanar el camino' },
      ],
    },

    { type: 'rule' },

    // ── 7. Prüfungsbezug ──────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Lesen · Teil 2 · Lückentext',
      titel: 'Mini-Aufgabe · 6 Lücken · Thema Digitalisierung',
      anweisung: 'Im echten Teil 2 fehlen in einem Sachtext Wörter, die du aus einer Liste einsetzt. Thementexte über Digitalisierung sind dafür beliebt, weil sie Fachwortschatz und Nominalstil verbinden. Wähle für jede Lücke das passende Wort.',
      absaetze: [
        'Kaum eine Technologie verändert die Arbeitswelt derzeit so grundlegend wie die künstliche Intelligenz. Während Befürworter auf eine deutliche Steigerung der {1} verweisen, warnen Kritiker vor einer schleichenden {2} des Arbeitsalltags durch Systeme, deren Entscheidungen kaum nachvollziehbar sind. Die EU hat darauf mit einer Verordnung reagiert, die KI-Anwendungen nach {3} einstuft: Je größer die Gefahr für Grundrechte, desto strenger die Auflagen. Unternehmen, die personenbezogene Daten {4}, unterliegen zudem der Datenschutz-Grundverordnung. Ungeklärt bleibt vielerorts die Frage der {5}, wenn ein System fehlerhafte Entscheidungen trifft. Einig sind sich die meisten Beobachter nur in einem Punkt: Ohne massive Investitionen in digitale {6} wird der Wandel die Gesellschaft weiter spalten.',
      ],
      optionen: ['Haftung', 'Effizienz', 'Bildung', 'verarbeiten', 'Überwachung', 'Risikostufen'],
      loesungen: [
        '{1} **Effizienz** — *die Steigerung der Effizienz*: Genitiv nach Nominalisierung',
        '{2} **Überwachung** — *eine schleichende Überwachung*: das Warn-Argument der Kritiker',
        '{3} **Risikostufen** — *nach Risikostufen einstufen*: das Prinzip der KI-Verordnung',
        '{4} **verarbeiten** — die feste DSGVO-Kollokation: *personenbezogene Daten verarbeiten*',
        '{5} **Haftung** — *die Frage der Haftung*: Genitivattribut',
        '{6} **Bildung** — *digitale Bildung*: der Konsens der Debatte',
      ],
      kommentar: 'Zwei Signale führen fast immer zur Lösung: der **Kasus** nach der Lücke (Genitive wie *der Effizienz* verraten eine Nominalisierung davor) und die **feste Kollokation** (*Daten verarbeiten*, *Frage der Haftung*). Wer die Kollokationen des Themenfelds kennt, löst solche Texte doppelt so schnell.',
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'In **Sprechen Teil 2** (Diskussion) ist Digitalisierung ein Dauergast. Lerne die drei Scharniere dieser Lektion auswendig: *Richtig eingesetzt, …* (Chance), *Bedenklich stimmt mich, dass …* (Risiko), *…, sofern … geregelt ist* (Bedingung). Mit diesen drei Sätzen kannst du auf jeden Impuls deines Prüfungspartners differenziert reagieren.',
    },

    { type: 'rule' },

    // ── 8. Abschluss ──────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Das bleibt', 'Merksatz'],
      zeilen: [
        ['Chancen-Risiken-Gerüst', 'Entlastung und Effizienz vs. Überwachung, Verzerrung, Haftung'],
        ['DSGVO', 'personenbezogene Daten verarbeiten — nur mit Zweck und Auskunftsrecht'],
        ['KI-Verordnung', 'Regulierung nach Risikostufen: je riskanter, desto strenger'],
        ['digitale Kluft', 'Zugang und Kompetenz entscheiden — digitale Bildung als Konsens'],
        ['Kollokationen', 'Daten verarbeiten · gegen den Datenschutz verstoßen · ersetzen durch'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich kann Chancen und Risiken der KI mit je zwei konkreten Beispielen belegen.',
        'Ich verwende die 14 Kernwörter mit der richtigen Kollokation — *die Daten* immer im Plural.',
        'Ich kann DSGVO und KI-Verordnung in einem Satz erklären und als Faktenargument einsetzen.',
        'Ich reagiere in einer Diskussion mit dem Dreischritt Chance → Risiko → Bedingung.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Die Automatisierung hat dich schon mitten hineingeführt: Das nächste Themenfeld ist die **Arbeitswelt** — Homeoffice, Fachkräftemangel, Vier-Tage-Woche und die Frage, wie viel Arbeit ein gutes Leben verträgt. Den Wortschatz der Digitalisierung wirst du dort laufend wiederverwenden.',
    },
  ],
}
