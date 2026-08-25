// Lektion 18 · Modul Lesen — Überblick
//
// Bloque 2 «Prüfungsstrategie» — abre el módulo Lesen (L18-L22).
// FIJA EL CANON INTERNO del módulo: 5 Teile según docs/deutschb2/KANON.md,
// reparto 25 + 12 + 15 + 8 min + 5 de colchón = 65 min.
// Las lecciones 19-22 respetan lo que aquí se establece.

export default {
  spec: ['Bloque 2', 'Prüfungsstrategie', 'Niveau B2', 'Prüfungsrelevanz: Modul Lesen'],
  h1: 'Modul Lesen — Überblick',
  lead: 'Die fünf Teile des Moduls Lesen kennen, die 65 Minuten klug verteilen — und verstehen, warum die Prüfung Paraphrasen testet, nicht Wörter.',

  content: [
    // ── Lernziele ─────────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'die fünf Teile des Moduls Lesen benennen und wissen, was jeder Teil misst',
        'die 65 Minuten realistisch auf die Teile verteilen',
        'globale Strategien anwenden: überfliegen, gezielt suchen, Paraphrasen erkennen',
        'die klassischen Fehler im Modul Lesen vermeiden',
      ],
    },

    { type: 'rule' },

    // ── Kernwortschatz ────────────────────────────────────────────
    {
      type: 'wortschatz',
      eyebrow: 'Kernwortschatz — die Sprache der Anweisungen',
      items: [
        { wort: 'die Aussage, -n', kollokation: 'Welche Aussage passt zum Text?', es: 'la afirmación' },
        { wort: 'zuordnen', kollokation: 'Ordnen Sie die Aussagen den Personen zu.', es: 'asignar, emparejar' },
        { wort: 'ankreuzen', kollokation: 'Kreuzen Sie die richtige Lösung an.', es: 'marcar (la casilla)' },
        { wort: 'der Abschnitt, -e', kollokation: 'im zweiten Abschnitt des Textes', es: 'el párrafo, el apartado' },
        { wort: 'die Überschrift, -en', kollokation: 'eine passende Überschrift finden', es: 'el título, el encabezado' },
        { wort: 'die Anweisung, -en', kollokation: 'die Anweisung genau lesen', es: 'la consigna, la instrucción' },
        { wort: 'überfliegen', kollokation: 'den Text zuerst überfliegen', es: 'leer por encima' },
        { wort: 'die Paraphrase, -n', kollokation: 'die Paraphrase im Text erkennen', es: 'la paráfrasis' },
        { wort: 'übereinstimmen mit', kollokation: 'Die Aussage stimmt mit dem Text überein.', es: 'coincidir con' },
        { wort: 'der Verfasser, -', kollokation: 'die Meinung des Verfassers erkennen', es: 'el autor (del texto)' },
        { wort: 'entnehmen + Dat.', kollokation: 'Dem Text ist zu entnehmen, dass …', es: 'extraer, deducir (del texto)' },
        { wort: 'lösen', kollokation: 'eine Aufgabe in acht Minuten lösen', es: 'resolver' },
      ],
      hinweis: 'Diese Wörter stehen in jeder Anweisung der Prüfung. Wer sie kennt, spart in jedem Teil wertvolle Sekunden. ~~Ojo: *die Anweisung* es la consigna del examen; *der Hinweis* es solo una indicación.~~',
    },

    { type: 'rule' },

    // ── Erklärung ─────────────────────────────────────────────────
    {
      type: 'prose',
      eyebrow: 'Erklärung — das Modul im Überblick',
      absaetze: [
        'Das Modul Lesen dauert **65 Minuten** und besteht aus **fünf Teilen** mit insgesamt 100 Punkten — bestanden hast du ab 60. Jeder Teil hat eine eigene Textsorte und misst eine andere Lesekompetenz. Die genaue Zahl der Items pro Teil prüfst du am besten im **offiziellen Modellsatz**; hier zählt zuerst das System dahinter.',
      ],
    },
    {
      type: 'tabelle',
      eyebrow: 'Erklärung — die fünf Teile',
      kopf: ['Teil', 'Textsorte & Aufgabe', 'Was wird gemessen?', 'Zeit'],
      zeilen: [
        ['Teil 1–2', 'Artikel aus Zeitung oder Zeitschrift · Auswahl a/b/c', 'Haupt- und Detailverständnis', 'ca. 25 Min.'],
        ['Teil 3', 'mehrere Personen äußern ihre Meinung · Aussagen zuordnen', 'Meinungen erkennen und unterscheiden', 'ca. 12 Min.'],
        ['Teil 4', 'Kommentar · Fragen zum Standpunkt', 'die Position des Verfassers verstehen', 'ca. 15 Min.'],
        ['Teil 5', 'formeller Regeltext (Hausordnung, AGB …) · zuordnen/ergänzen', 'gezieltes Suchen in strukturierten Texten', 'ca. 8 Min.'],
        ['Puffer', 'kontrollieren, Antworten übertragen', '—', 'ca. 5 Min.'],
      ],
    },
    {
      type: 'steps',
      eyebrow: 'Erklärung — Reihenfolge & Zeitmanagement',
      steps: [
        {
          titel: 'Mit deiner Stärke beginnen',
          text: 'Die Teile müssen __nicht der Reihe nach__ gelöst werden. Viele beginnen mit Teil 5 (kurz, klar strukturiert) und Teil 3, um Punkte zu sichern, bevor die langen Artikel kommen.',
        },
        {
          titel: 'Die Uhr pro Teil im Blick behalten',
          text: 'Plane die Zeit __pro Teil__, nicht global: 25 + 12 + 15 + 8 Minuten. Wenn die Zeit für einen Teil um ist, geh weiter — eine offene Frage darf nie zwei andere Aufgaben kosten.',
        },
        {
          titel: 'Nie ein Feld leer lassen',
          text: 'Falsche Antworten geben __keinen Punktabzug__. Wenn du eine Lösung nicht findest: eine Option ausschließen, dann ankreuzen. Ein leeres Feld bringt sicher null Punkte.',
        },
      ],
    },
    {
      type: 'prose',
      eyebrow: 'Erklärung — die zentrale Strategie: Paraphrasen',
      card: true,
      titel: 'Nicht Wort für Wort lesen',
      absaetze: [
        'Die Prüfung testet fast nie, ob du ein Wort wiederfindest — sie testet, ob du erkennst, dass **zwei Formulierungen dasselbe bedeuten**. Die richtige Lösung ist fast immer eine ==Paraphrase== des Textes; die falsche wiederholt oft wörtlich ein Wort aus dem Text, sagt aber etwas anderes.',
        'Daraus folgen die klassischen Fehler: (1) eine Antwort wählen, **nur weil ein Wort aus dem Text darin vorkommt**; (2) mit dem eigenen Weltwissen antworten statt mit dem Text; (3) an einer schweren Frage hängen bleiben und die Zeit für die leichten verlieren. ~~El error típico del hispanohablante: traducir frase por frase mentalmente — a ese ritmo no se termina el examen. Lee por ideas, no por palabras.~~',
      ],
    },

    { type: 'rule' },

    // ── Beispiele ─────────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele — so sehen Paraphrasen aus',
      kicker: 'Text ↔ Aussage',
      titel: 'Dasselbe mit anderen Wörtern',
      items: [
        { text: 'Text: „Die Zahl der Radfahrer hat sich in zehn Jahren **verdoppelt**.“ → Aussage: „Heute fahren **deutlich mehr** Menschen Rad als früher.“', gl: '— paráfrasis correcta: verdoppelt ≈ deutlich mehr' },
        { text: 'Text: „Das Angebot gilt **nur für Mitglieder**.“ → Aussage: „**Nicht alle** können das Angebot nutzen.“', gl: '— la afirmación reformula la restricción' },
        { text: 'Text: „Der Kurs war schnell **ausgebucht**.“ → Aussage: „Es gab **großes Interesse** am Kurs.“', gl: '— la paráfrasis nombra la consecuencia lógica' },
        { text: 'Text: „Viele **kritisieren** die neue Regel.“ → Falsche Aussage: „Die neue Regel wird von allen **kritisiert**.“', gl: '— ¡trampa! misma palabra, pero *viele* ≠ *alle*' },
      ],
    },

    { type: 'rule' },

    // ── Übungen ───────────────────────────────────────────────────
    {
      type: 'uebung',
      eyebrow: 'Anwendung — Übung 1 · Erkennen',
      frage: 'Zu welchem Teil des Moduls passt die Anweisung? (Teil 1–2, 3, 4 oder 5)',
      loesungLabel: 'Lösung',
      aufgaben: [
        '„Ordnen Sie den Abschnitten der Hausordnung die passenden Überschriften zu.“',
        '„Welche Aussage entspricht der Meinung des Verfassers? Kreuzen Sie an: a, b oder c.“',
        '„Wer sagt was? Ordnen Sie die Aussagen den vier Personen zu.“',
        '„Lesen Sie den Artikel und kreuzen Sie bei jeder Frage die richtige Lösung an.“',
      ],
      loesungen: [
        '**Teil 5** — formeller Regeltext, Überschriften zuordnen.',
        '**Teil 4** — Kommentar, Standpunkt des Verfassers.',
        '**Teil 3** — Meinungen mehrerer Personen zuordnen.',
        '**Teil 1–2** — Artikel mit Auswahlaufgaben a/b/c.',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 2 · Paraphrasen prüfen',
      frage: 'Sagt die Aussage dasselbe wie der Text? Ja oder nein — mit Begründung.',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Text: „Die Bibliothek ist außer montags täglich geöffnet.“ — Aussage: „Die Bibliothek ist jeden Tag geöffnet.“',
        'Text: „Immer mehr Firmen bieten flexible Arbeitszeiten an.“ — Aussage: „Die Zahl der Firmen mit flexiblen Arbeitszeiten steigt.“',
        'Text: „Das Konzert wurde wegen des Wetters verschoben.“ — Aussage: „Das Konzert fällt aus.“',
      ],
      loesungen: [
        '**Nein** — „außer montags“ bedeutet: an einem Tag geschlossen; „jeden Tag“ ist falsch.',
        '**Ja** — „immer mehr“ = „die Zahl steigt“; klassische korrekte Paraphrase.',
        '**Nein** — „verschoben“ (findet später statt) ist nicht „fällt aus“ (findet nicht statt).',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 3 · Produzieren',
      frage: 'Schreibe zu jedem Satz eine Paraphrase mit anderen Wörtern.',
      loesungLabel: 'Mögliche Lösung',
      aufgaben: [
        'Die Miete in Großstädten ist in den letzten Jahren stark gestiegen.',
        'Nur wenige Teilnehmer haben den Kurs abgebrochen.',
      ],
      loesungen: [
        '**Wohnen in Großstädten ist heute deutlich teurer als früher.** ~~Vale cualquier variante que exprese la subida sin usar *steigen*.~~',
        '**Fast alle Teilnehmer haben den Kurs zu Ende gemacht.** — auch richtig: „Die meisten blieben bis zum Schluss dabei.“',
      ],
    },

    { type: 'rule' },

    // ── Prüfungsbezug ─────────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Modul Lesen · Mini-Durchlauf',
      titel: 'Kurztext mit 3 Auswahlaufgaben',
      anweisung: 'Lies den Text und kreuze bei jeder Aufgabe die richtige Lösung an: a, b oder c. Arbeite mit der Paraphrasen-Strategie — nicht mit einzelnen Wörtern.',
      absaetze: [
        '**Gebraucht statt neu**\nSecondhand boomt: Immer mehr Menschen in Deutschland kaufen gebrauchte Kleidung, Möbel oder Elektronik. Nach einer aktuellen Umfrage hat mehr als die Hälfte der Befragten im letzten Jahr mindestens einen gebrauchten Artikel gekauft — vor zehn Jahren war es nur ein Drittel. Die Gründe sind unterschiedlich: Viele wollen Geld sparen, andere denken an die Umwelt, denn jedes weiterverkaufte Produkt muss nicht neu produziert werden. Besonders beliebt ist der Kauf über Apps und Online-Plattformen, weil er bequem von zu Hause funktioniert. Kritiker weisen allerdings darauf hin, dass gerade sehr billige Secondhand-Mode manche Käufer dazu bringt, noch mehr zu bestellen als vorher. Vom Trend profitieren auch die Innenstädte: Dort eröffnen neue Secondhand-Läden, während klassische Modegeschäfte Kunden verlieren.',
      ],
      optionen: [
        '(1) Der Kauf gebrauchter Artikel … — a) ist heute verbreiteter als früher · b) interessiert nur ein Drittel der Menschen · c) ist in den letzten Jahren zurückgegangen',
        '(2) Viele kaufen gebraucht, … — a) weil neue Produkte schwer zu finden sind · b) aus finanziellen oder ökologischen Gründen · c) weil die Qualität besser ist',
        '(3) Die Kritiker meinen, … — a) Secondhand-Läden zerstören die Innenstädte · b) Apps funktionieren nicht gut · c) billige Gebrauchtware kann zu mehr Konsum führen',
      ],
      loesungLabel: 'Lösung',
      loesungen: [
        '(1) **a** — „mehr als die Hälfte … vor zehn Jahren nur ein Drittel“ = heute verbreiteter. Die Zahl „ein Drittel“ in b ist die Wortfalle: sie beschreibt die Vergangenheit.',
        '(2) **b** — „Geld sparen“ + „an die Umwelt denken“ = finanzielle oder ökologische Gründe. Reine Paraphrase; a und c stehen nicht im Text.',
        '(3) **c** — „bringt manche Käufer dazu, noch mehr zu bestellen“ = mehr Konsum. In a steckt zwar das Wort „Innenstädte“, aber der Text sagt das Gegenteil: sie **profitieren**.',
      ],
      kommentar: 'Merkst du das Muster? Die richtige Lösung benutzt **andere Wörter** als der Text; die Distraktoren benutzen oft **dieselben Wörter** mit anderer Bedeutung. Genau darum geht es in Lektion 19 im Detail.',
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Lies vor jedem Teil zuerst die **Anweisung** und die **Fragen**, dann den Text. So weißt du beim Lesen schon, wonach du suchst — und musst den Text nicht zweimal komplett lesen. Bei der digitalen Prüfung (CBT) gilt dasselbe: erst die Aufgabe auf dem Bildschirm, dann der Text.',
    },

    { type: 'rule' },

    // ── Abschluss ─────────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Teil', 'Aufgabe', 'Schlüsselstrategie'],
      zeilen: [
        ['Teil 1–2', 'Artikel, Auswahl a/b/c', 'Fragen zuerst lesen, Paraphrasen suchen'],
        ['Teil 3', 'Meinungen zuordnen', 'Kernaussage jeder Person notieren'],
        ['Teil 4', 'Kommentar, Standpunkt', 'Wertungen und Ironie erkennen'],
        ['Teil 5', 'Regeltext', 'Struktur nutzen, gezielt suchen'],
        ['Immer', '65 Min., 100 Punkte', 'Zeit pro Teil planen, nichts leer lassen'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich kann die fünf Teile des Moduls Lesen benennen und weiß, was jeder misst.',
        'Ich habe einen Zeitplan: 25 + 12 + 15 + 8 Minuten plus Puffer.',
        'Ich erkenne, ob eine Aussage eine Paraphrase des Textes ist — oder nur ein Wort wiederholt.',
        'Ich lasse in der Prüfung kein Antwortfeld leer.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Jetzt kennst du die Landkarte des Moduls. In der nächsten Lektion steigen wir in **Teil 1–2** ein: lange Artikel mit Auswahlaufgaben — und die Kunst, die drei Sorten von Distraktoren zu durchschauen.',
    },
  ],
}
