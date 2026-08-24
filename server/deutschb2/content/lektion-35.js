// Lektion 35 · Umwelt & Nachhaltigkeit
//
// Bloque 3 (Themenfelder & Wortschatz): Mülltrennung (¡el Pfand!), Energie
// sparen, Verkehr, Konsum bewusst — el día a día «verde» de los países
// germanohablantes, sin politizar.

export default {
  spec: ['Bloque 3', 'Themenfelder & Wortschatz', 'Niveau B2', 'Prüfungsrelevanz: alle Module'],
  h1: 'Umwelt & Nachhaltigkeit',
  lead: 'Mülltrennung, Pfand, Energie sparen und bewusster Konsum: der Alltagswortschatz, mit dem du im Examen über Umweltthemen sprichst.',

  content: [
    // ── Lernziele ─────────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'den Kernwortschatz zu Müll, Energie, Verkehr und Konsum aktiv verwenden',
        'Mülltrennung und das Pfand-System in einfachen Worten erklären',
        'verschiedene Positionen zum Umweltschutz im Alltag wiedergeben und bewerten',
        'Meinungen zu Umweltthemen erkennen und zuordnen (wie in Lesen Teil 3)',
      ],
    },

    { type: 'rule' },

    // ── Kernwortschatz ────────────────────────────────────────────
    {
      type: 'wortschatz',
      eyebrow: 'Kernwortschatz',
      items: [
        { wort: 'die Umwelt (nur Sg.)', kollokation: 'die Umwelt schützen', es: 'el medio ambiente' },
        { wort: 'die Nachhaltigkeit (nur Sg.)', kollokation: 'auf Nachhaltigkeit achten', es: 'la sostenibilidad' },
        { wort: 'die Mülltrennung (nur Sg.)', kollokation: 'die Mülltrennung ernst nehmen', es: 'la separación de residuos' },
        { wort: 'die Tonne, -n', kollokation: 'Papier in die blaue Tonne werfen', es: 'el contenedor' },
        { wort: 'das Pfand (nur Sg.)', kollokation: 'das Pfand zurückbekommen', es: 'el depósito por envase' },
        { wort: 'die Mehrwegflasche, -n', kollokation: 'Mehrwegflaschen zurückbringen', es: 'la botella retornable' },
        { wort: 'die Verpackung, -en', kollokation: 'auf unnötige Verpackung verzichten', es: 'el envase, el embalaje' },
        { wort: 'der Strom (nur Sg.)', kollokation: 'Strom sparen', es: 'la electricidad' },
        { wort: 'der Verbrauch (nur Sg.)', kollokation: 'den Verbrauch senken', es: 'el consumo (de energía, agua…)' },
        { wort: 'die öffentlichen Verkehrsmittel (Pl.)', kollokation: 'mit öffentlichen Verkehrsmitteln fahren', es: 'el transporte público' },
        { wort: 'die Verschmutzung (nur Sg.)', kollokation: 'die Verschmutzung verringern', es: 'la contaminación' },
        { wort: 'die Gewohnheit, -en', kollokation: 'eine Gewohnheit ändern', es: 'el hábito, la costumbre' },
      ],
      hinweis: '~~«Contaminación» = **die Verschmutzung** (o die Luftverschmutzung); *die Kontamination* existe, pero es un tecnicismo médico-químico — en el examen suena raro. Y «reciclar» = **recyceln**, con participio *recycelt*.~~',
    },

    { type: 'rule' },

    // ── Erklärung ─────────────────────────────────────────────────
    {
      type: 'prose',
      eyebrow: 'Erklärung — der grüne Alltag',
      card: true,
      titel: 'Mülltrennung — fast ein nationales Hobby',
      absaetze: [
        'Wer neu in Deutschland, Österreich oder der Schweiz ist, wundert sich oft zuerst über den Müll: Es gibt nicht eine Tonne, sondern mehrere. **Papier** kommt in die blaue Tonne, **Verpackungen** aus Plastik und Metall in die gelbe, **Bioabfall** in die braune und der Rest in den **Restmüll**. Glas bringt man nach Farben getrennt zum Container. Die Nachbarn achten durchaus darauf, dass alle mitmachen. ~~No es un cliché: separar mal la basura puede dar lugar a notas de la comunidad de vecinos.~~',
      ],
    },
    {
      type: 'prose',
      titel: 'Das Pfand — Flaschen sind Geld wert',
      absaetze: [
        'Auf den meisten Flaschen und Dosen liegt ein **Pfand**: Man bezahlt an der Kasse einen kleinen Betrag extra und bekommt ihn zurück, wenn man die Flasche zum **Pfandautomaten** im Supermarkt zurückbringt. **Mehrwegflaschen** werden gereinigt und neu befüllt, Einwegflaschen recycelt. Deshalb sieht man in deutschen Küchen oft eine Ecke voller leerer Flaschen — das ist kein Müll, das ist Geld.',
      ],
    },
    {
      type: 'steps',
      steps: [
        {
          badge: 'Engagiert',
          titel: 'Jeder Einzelne zählt',
          text: 'Viele Menschen ändern bewusst ihre __Gewohnheiten__: Sie fahren Rad oder mit öffentlichen Verkehrsmitteln, sparen Strom, kaufen regionale Produkte und verzichten auf unnötige Verpackung.',
        },
        {
          badge: 'Skeptisch',
          titel: 'Zu teuer, zu aufwendig',
          text: 'Andere finden: Nachhaltige Produkte kosten mehr, und der Alltag ist schon stressig genug. Solange große Firmen nichts ändern, bringe der einzelne Haushalt __wenig__.',
        },
        {
          badge: 'Pragmatisch',
          titel: 'Kleine Schritte',
          text: 'Die Mittelposition: Niemand muss perfekt sein — aber kleine Schritte wie die Stofftasche, das Fahrrad oder die Mehrwegflasche __kosten fast nichts__ und summieren sich. Diese Position lässt sich in der Prüfung am leichtesten verteidigen.',
        },
      ],
    },

    { type: 'rule' },

    // ── Beispiele ─────────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele — Sätze zum Mitnehmen',
      kicker: 'Müll & Pfand',
      titel: 'Trennen und zurückbringen',
      items: [
        { text: 'Bei uns im Haus wird der Müll streng **getrennt**.' },
        { text: 'Vergiss nicht, die leeren Flaschen zum **Pfandautomaten** zu bringen.' },
        { text: 'Ich versuche, Produkte mit weniger **Verpackung** zu kaufen.' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'Energie & Verkehr',
      titel: 'Sparen und umsteigen',
      items: [
        { text: 'Wir haben unseren **Stromverbrauch** deutlich **gesenkt**.' },
        { text: 'Ich fahre mit **öffentlichen Verkehrsmitteln** zur Arbeit, weil Parkplätze teuer sind.' },
        { text: 'Für kurze Strecken nehme ich das **Fahrrad** statt des Autos.' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'Bewusster Konsum',
      titel: 'Anders einkaufen',
      items: [
        { text: 'Ich kaufe lieber **regionale Produkte**, auch wenn sie etwas teurer sind.' },
        { text: 'Es fällt schwer, alte **Gewohnheiten** zu **ändern** — aber es lohnt sich.' },
        { text: 'Man muss nicht perfekt sein: Schon kleine Schritte **schützen die Umwelt**.' },
      ],
    },
    {
      type: 'redemittel',
      eyebrow: 'Redemittel — Meinung zum Thema Umwelt',
      gruppen: [
        {
          fn: 'Meinung äußern',
          saetze: [
            { satz: 'Ich finde, dass jeder Einzelne etwas für die Umwelt tun kann.' },
            { satz: 'Meiner Meinung nach ist das Pfand-System eine sehr gute Idee.' },
          ],
        },
        {
          fn: 'Einräumen und widersprechen',
          saetze: [
            { satz: 'Es stimmt zwar, dass nachhaltige Produkte oft teurer sind, aber viele Alternativen kosten gar nichts.' },
            { satz: 'Ich verstehe dieses Argument, trotzdem glaube ich, dass kleine Schritte sich summieren.' },
          ],
        },
        {
          fn: 'Vorschläge machen',
          saetze: [
            { satz: 'Man könnte zum Beispiel öfter das Fahrrad nehmen statt des Autos.' },
            { satz: 'Ein erster Schritt wäre, auf unnötige Verpackung zu verzichten.', gloss: '~~«wäre» + Infinitiv con zu: fórmula elegante para propuestas~~' },
          ],
        },
      ],
    },

    { type: 'rule' },

    // ── Übungen ───────────────────────────────────────────────────
    {
      type: 'uebung',
      eyebrow: 'Anwendung — Übung 1 · Kollokationen',
      frage: 'Welches Verb passt? (trennen · senken · zurückbringen · verzichten)',
      loesungLabel: 'Lösung',
      aufgaben: [
        'den Müll …',
        'den Verbrauch …',
        'die Pfandflaschen …',
        'auf unnötige Verpackung …',
      ],
      loesungen: [
        'den Müll **trennen**',
        'den Verbrauch **senken**',
        'die Pfandflaschen **zurückbringen**',
        'auf unnötige Verpackung **verzichten** ~~verzichten auf + Akkusativ~~',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 2 · Sätze ergänzen',
      frage: 'Ergänze das passende Wort aus dem Kernwortschatz.',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Papier kommt in die blaue … .',
        'An der Kasse bezahlst du … , das du beim Zurückbringen der Flasche wiederbekommst.',
        'Die … in den Großstädten ist ein Problem für die Gesundheit.',
        'Es ist schwer, alte … zu ändern.',
      ],
      loesungen: [
        'in die blaue **Tonne**',
        'bezahlst du **Pfand**',
        'Die **Verschmutzung** ~~no *Kontamination*~~',
        'alte **Gewohnheiten** zu ändern',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 3 · Produzieren',
      frage: 'Was machst du im Alltag für die Umwelt — und was (noch) nicht? Schreib 80–100 Wörter und nutze mindestens ein Redemittel der Lektion.',
      loesungLabel: 'Mögliche Lösung',
      loesung: 'Ich finde, dass jeder Einzelne etwas für die Umwelt tun kann, auch ohne perfekt zu sein. Bei mir zu Hause trennen wir den Müll, und zum Einkaufen nehme ich immer eine Stofftasche mit, weil ich unnötige Verpackung vermeiden möchte. Außerdem fahre ich fast immer mit öffentlichen Verkehrsmitteln zur Arbeit. Ehrlich gesagt könnte ich aber noch mehr tun: Ich kaufe selten regionale Produkte, denn sie sind oft teurer. Ein erster Schritt wäre, einmal pro Woche auf dem Markt einzukaufen. Kleine Schritte summieren sich — davon bin ich überzeugt. *(86 Wörter)*',
    },

    { type: 'rule' },

    // ── Prüfungsbezug ─────────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Lesen Teil 3 · Meinungen zuordnen',
      titel: 'Umweltschutz im Alltag',
      anweisung: 'In Lesen Teil 3 ordnest du Meinungen den passenden Fragen zu. Mini-Version: Drei Personen äußern sich in einem Online-Forum. Wer sagt was? Ordne a–c zu.',
      absaetze: [
        '**a) Lena:** Ich trenne den Müll und bringe mein Pfand zurück, klar. Aber im Bioladen einkaufen? Das kann ich mir mit meinem Gehalt einfach nicht leisten. Umweltschutz darf keine Frage des Geldbeutels sein.',
        '**b) Murat:** Seit ich mein Auto verkauft habe, fahre ich alles mit dem Rad oder mit Bus und Bahn. Das war die beste Entscheidung seit Jahren — ich spare Geld und bin sogar schneller in der Stadt.',
        '**c) Sofia:** Ich finde es falsch, immer nur auf die Haushalte zu zeigen. Solange Produkte dreifach verpackt im Regal liegen, sollten zuerst die Hersteller ihre Verpackungen reduzieren — nicht die Kunden ein schlechtes Gewissen haben.',
      ],
      optionen: [
        '(1) Wer findet umweltfreundliches Einkaufen zu teuer?',
        '(2) Wer sieht vor allem die Firmen in der Verantwortung?',
        '(3) Wer hat seine Mobilität komplett geändert?',
      ],
      loesungLabel: 'Lösung',
      loesungen: [
        '{1} **a) Lena** — „kann ich mir … nicht leisten“, „keine Frage des Geldbeutels“ = zu teuer.',
        '{2} **c) Sofia** — „sollten zuerst die Hersteller …“ = die Firmen sind verantwortlich.',
        '{3} **b) Murat** — „Auto verkauft“, „alles mit dem Rad oder mit Bus und Bahn“ = Mobilität geändert.',
      ],
      kommentar: 'Strategie wie in Lektion 20: Die Fragen benutzen andere Wörter als die Texte (*zu teuer* ↔ „nicht leisten“, *Firmen* ↔ „Hersteller“). Such die **Paraphrase**, nicht das gleiche Wort.',
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Umweltthemen sind Dauergäste in allen vier Modulen. Halte deine Meinung **konkret und alltagsnah** (Pfand, Fahrrad, Verpackung) — das wirkt überzeugender als große abstrakte Sätze und braucht nur Wortschatz, den du wirklich beherrschst.',
    },

    { type: 'rule' },

    // ── Abschluss ─────────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Subthema', 'Kernwörter', 'Ein Satz, der immer passt'],
      zeilen: [
        ['Müll', 'die Mülltrennung, die Tonne, das Recycling', 'Bei uns wird der Müll streng getrennt.'],
        ['Pfand', 'das Pfand, die Mehrwegflasche, der Automat', 'Leere Flaschen bringt man zum Pfandautomaten.'],
        ['Energie & Verkehr', 'der Strom, der Verbrauch, die Verkehrsmittel', 'Ich fahre öfter Rad, um Strom und Benzin zu sparen.'],
        ['Konsum', 'die Verpackung, die Gewohnheit, regional', 'Kleine Schritte summieren sich.'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich kann Mülltrennung und Pfand-System in einfachen Worten erklären.',
        'Ich kann drei Positionen zum Umweltschutz im Alltag wiedergeben.',
        'Ich sage *die Verschmutzung* — nicht *die Kontamination*.',
        'Ich erkenne in Meinungstexten die Paraphrase statt des gleichen Wortes.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Vom bewussten Konsum zum bewussten Leben: In der nächsten Lektion geht es um **Gesundheit & Ernährung** — den Weg durch das deutsche Gesundheitssystem (Krankenkasse, Termin, Überweisung) und die Debatte um gesunde Ernährung und Stress.',
    },
  ],
}
