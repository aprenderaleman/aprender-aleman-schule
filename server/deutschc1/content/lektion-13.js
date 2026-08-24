// Lektion 13 · Modalverben subjektiv

export default {
  spec: ['Bloque 1', 'Sprachliche Konsolidierung', 'Niveau C1', 'Prüfungsrelevanz: Hören · Lesen Teil 1'],
  h1: 'Modalverben in subjektiver Bedeutung',
  lead: 'Er muss es gewusst haben, sie will nichts gehört haben: dieselben Modalverben, neu belegt — als Skala der Vermutung und als Werkzeug der Distanzierung.',

  content: [
    // ── 2. Lernziele ──────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'Am Ende kannst du objektive und subjektive Verwendung der Modalverben sicher unterscheiden — an Form und Kontext.',
        'Du beherrschst die Vermutungsskala von *muss* (fast sicher) bis *mag* (bloß eingeräumt) und wählst den passenden Grad.',
        'Du gibst mit *sollen* und *wollen* fremde Behauptungen wieder und erkennst die eingebaute Distanz.',
        'Du bildest die Vergangenheitsformen korrekt: *muss gewesen sein* (Vermutung heute über gestern) vs. *musste sein* (damalige Pflicht).',
      ],
    },

    { type: 'rule' },

    // ── 3. Kernwortschatz ─────────────────────────────────────────
    {
      type: 'wortschatz',
      eyebrow: 'Kernwortschatz',
      items: [
        { wort: 'die Vermutung', kollokation: 'eine Vermutung äußern', es: 'suposición' },
        { wort: 'die Gewissheit', kollokation: 'mit an Sicherheit grenzender Gewissheit', es: 'certeza' },
        { wort: 'die Behauptung', kollokation: 'eine Behauptung aufstellen', es: 'afirmación' },
        { wort: 'die Einschätzung', kollokation: 'nach meiner Einschätzung', es: 'valoración, apreciación' },
        { wort: 'die Distanzierung', kollokation: 'sprachliche Distanzierung vom Gesagten', es: 'distanciamiento' },
        { wort: 'angeblich', kollokation: 'ein angeblich sicheres Verfahren', es: 'supuestamente (dicen)' },
        { wort: 'vermutlich', kollokation: 'vermutlich schon heute', es: 'probablemente' },
        { wort: 'offenbar', kollokation: 'offenbar ein Missverständnis', es: 'por lo visto' },
        { wort: 'mutmaßlich', kollokation: 'der mutmaßliche Täter', es: 'presunto' },
        { wort: 'dem Vernehmen nach', kollokation: 'dem Vernehmen nach steht der Deal bevor', es: 'según se dice' },
        { wort: 'die Quelle', kollokation: 'sich auf verlässliche Quellen berufen', es: 'fuente' },
        { wort: 'bestreiten', kollokation: 'die Vorwürfe entschieden bestreiten', es: 'negar, desmentir' },
      ],
      hinweis: 'Diese Adverbien sind die **Prosaversion** der subjektiven Modalverben: *angeblich* ≈ *soll*, *vermutlich* ≈ *dürfte*, *offenbar* ≈ *muss wohl*. In Nachrichtentexten wechseln beide Systeme ständig — wer beide liest, versteht die Haltung des Autors.',
    },

    { type: 'rule' },

    // ── 4. Erklärung ──────────────────────────────────────────────
    {
      type: 'prose',
      eyebrow: 'Erklärung',
      card: true,
      titel: 'Objektiv vs. subjektiv: ein Verb, zwei Systeme',
      absaetze: [
        '**Objektiv** beschreibt das Modalverb die Welt: Pflicht, Fähigkeit, Erlaubnis. *Sie muss um acht im Büro sein* = sie ist dazu verpflichtet. **Subjektiv** beschreibt es den **Sprecher**: seine Einschätzung, wie wahrscheinlich etwas ist. *Sie muss im Büro sein — ihr Mantel hängt da* = ich schließe es aus Indizien.',
        'In der Gegenwart sind beide Lesarten formgleich; erst der Kontext entscheidet. **Eindeutig wird es in der Vergangenheit**: Die subjektive Form nimmt den Infinitiv II (*muss gewesen sein*), die objektive das Präteritum (*musste sein*). Genau diese Zweideutigkeit der Gegenwartsformen testen Hörtexte gern.',
      ],
    },

    {
      type: 'steps',
      eyebrow: 'Erklärung — Die Vermutungsskala',
      steps: [
        {
          badge: '~99 %',
          titel: 'muss — der logische Schluss',
          text: 'Der Sprecher hält die Aussage für zwingend: __Das Licht brennt — er muss zu Hause sein.__ Verneint mit *kann nicht*: __Das kann nicht stimmen.__ (*muss nicht* wäre objektiv: „braucht nicht“.)',
        },
        {
          badge: '~90 %',
          titel: 'müsste — der berechnete Schluss',
          text: 'Fast sicher, aber aus Berechnung statt Beweis: __Das Paket müsste morgen ankommen.__ Konjunktiv II macht den Schluss vorsichtiger als *muss*.',
        },
        {
          badge: '~75 %',
          titel: 'dürfte — die begründete Annahme',
          text: 'Die klassische Prognoseform der Nachrichtensprache: __Die Preise dürften weiter steigen.__ ~~Equivale al «debe de» o al futuro de probabilidad: «serán las ocho» → es dürfte acht Uhr sein.~~',
        },
        {
          badge: '~50 %',
          titel: 'könnte / kann — die offene Möglichkeit',
          text: '__Das könnte ein Irrtum sein__ — möglich, mehr nicht. *kann* klingt etwas fester als *könnte*: __Das kann durchaus passieren.__',
        },
        {
          badge: 'einräumend',
          titel: 'mag — das Zugeständnis',
          text: 'Räumt etwas ein, um es zu entwerten: __Das mag stimmen, ändert aber nichts.__ Fast immer mit einem *aber* im Schlepptau — ein rhetorisches Werkzeug, kein Wahrscheinlichkeitsgrad.',
        },
      ],
    },

    {
      type: 'prose',
      card: true,
      titel: 'sollen und wollen: fremde Stimmen im Satz',
      absaetze: [
        '**sollen** gibt wieder, was **andere** behaupten: __Der Minister soll von den Zahlungen gewusst haben__ = Medien oder Dritte sagen das; der Sprecher übernimmt keine Gewähr. Das ist die Standardform des Nachrichtendeutschen — eine ganze Schlagzeile in einem Verb.',
        '**wollen** gibt wieder, was jemand **über sich selbst** behauptet — mit hörbarem Zweifel: __Der Zeuge will nichts gesehen haben__ = das sagt er, aber der Sprecher glaubt es eher nicht. ~~No confundas con «querer»: aquí wollen no expresa voluntad, sino «pretende haber…».~~',
        'Beide Formen sind **Distanzierungssignale**. Wer im Lesen oder Hören *soll* und *will* überliest, hält Behauptungen für Fakten — und kreuzt in Teil 1 die falsche Antwort an.',
      ],
    },

    {
      type: 'tabelle',
      eyebrow: 'Erklärung — Formen der Vergangenheit',
      kopf: ['Bedeutung', 'Form', 'Beispiel'],
      zeilen: [
        ['subjektiv, Vermutung heute über früher', 'Modalverb Präsens + Infinitiv II', 'Er muss den Brief gelesen haben.'],
        ['subjektiv, vorsichtiger', 'Konjunktiv II + Infinitiv II', 'Sie dürfte damals überfordert gewesen sein.'],
        ['Behauptung Dritter über früher', 'soll + Infinitiv II', 'Die Firma soll Steuern hinterzogen haben.'],
        ['Eigenbehauptung über früher', 'will + Infinitiv II', 'Er will davon nichts gewusst haben.'],
        ['objektiv, damalige Pflicht/Möglichkeit', 'Präteritum + Infinitiv I', 'Er musste den Brief lesen. (= war verpflichtet)'],
      ],
    },

    {
      type: 'vergleich',
      eyebrow: 'Erklärung — Kontrast',
      titel: 'Ein Verb, vier Aussagen',
      zeilen: [
        { satz: 'Sie musste die Rede halten.', label: 'objektiv — damalige Pflicht: jemand hat es ihr auferlegt' },
        { satz: 'Sie muss die Rede gehalten haben.', label: 'subjektiv — heutige Vermutung über gestern, fast sicher' },
        { satz: 'Sie soll die Rede gehalten haben.', label: 'Behauptung Dritter — der Sprecher verbürgt sich nicht' },
        { satz: 'Sie will die Rede gehalten haben.', label: 'Eigenbehauptung — sie sagt es, der Sprecher zweifelt' },
      ],
    },

    { type: 'rule' },

    // ── 5. Beispiele ──────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele — nach Funktion',
      kicker: 'Skala',
      titel: 'Vermutungsgrade in der Gegenwart',
      items: [
        { text: 'Das Büro ist abgeschlossen — die Kollegen **müssen** schon weg **sein**.', gl: '— zwingender Schluss aus Indizien' },
        { text: 'Der Zug **müsste** laut Plan in zehn Minuten **kommen**.' },
        { text: 'Die Verhandlungen **dürften** sich bis in den Herbst **hinziehen**.', gl: '— Prognoseform der Presse' },
        { text: 'Es **könnte** sich auch um einen Messfehler **handeln**.' },
        { text: 'Das **mag** auf dem Papier überzeugen, in der Praxis scheitert es.', gl: '— Zugeständnis vor dem Gegenschlag' },
        { text: 'So schnell **kann** die Entscheidung gar nicht gefallen sein — der Ausschuss tagt noch.', gl: '— *kann nicht*: der subjektive Gegenpol zu *muss*' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'Vergangenheit',
      titel: 'Vermutungen über Früheres',
      items: [
        { text: 'Die Tür war aufgebrochen — die Einbrecher **müssen** Werkzeug benutzt **haben**.' },
        { text: 'Sie hat nicht geantwortet; sie **dürfte** die E-Mail übersehen **haben**.' },
        { text: 'Der Fehler **kann** nur in der Buchhaltung passiert **sein**.' },
        { text: '**Vergleiche:** Er **musste** damals jeden Bericht selbst **schreiben**. ↔ Er **muss** den Bericht selbst geschrieben **haben** — niemand sonst kannte die Details.', gl: '— objektive Pflicht vs. heutige Vermutung' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'sollen · wollen',
      titel: 'Wiedergegebene Behauptungen',
      items: [
        { text: 'Der Konzern **soll** jahrelang Abgaswerte manipuliert **haben**.', gl: '— das behaupten Dritte; der Autor distanziert sich' },
        { text: 'Die Ministerin **soll** noch diese Woche zurücktreten.', gl: '— Gerücht über die Zukunft' },
        { text: 'Der Fahrer **will** die Ampel bei Grün überquert **haben**.', gl: '— Eigenaussage, hörbar bezweifelt' },
        { text: 'Beide Zeugen **wollen** zur Tatzeit zu Hause gewesen **sein**.' },
      ],
    },

    { type: 'rule' },

    // ── 6. Übungen ────────────────────────────────────────────────
    {
      type: 'uebung',
      eyebrow: 'Anwendung — Übung 1 · Erkennen',
      frage: 'Objektiv oder subjektiv? Bestimme die Lesart und formuliere die Bedeutung mit eigenen Worten.',
      aufgaben: [
        'Besucher müssen sich am Empfang anmelden.',
        'Das muss ein Missverständnis sein.',
        'Der Angeklagte will das Opfer nie getroffen haben.',
        'Als Praktikantin durfte sie an keiner Vorstandssitzung teilnehmen.',
        'Der neue Flughafen soll 2030 eröffnet werden — sagt zumindest die Betreibergesellschaft.',
      ],
      loesungen: [
        '**Objektiv** — Vorschrift: Es besteht die Pflicht, sich anzumelden.',
        '**Subjektiv** — Schlussfolgerung des Sprechers: Ich bin fast sicher, dass es ein Missverständnis ist.',
        '**Subjektiv** — Eigenbehauptung mit Distanz: Er behauptet es, der Sprecher zweifelt. ~~No es «quiere no haberlo conocido» — wollen aquí = «pretende que».~~',
        '**Objektiv** — fehlende Erlaubnis in der Vergangenheit: Präteritum + Infinitiv I.',
        '**Subjektiv** — wiedergegebene Ankündigung Dritter; der Nebensatz macht die Quelle explizit.',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 2 · Umformen',
      frage: 'Drücke die Einschätzung in Klammern mit einem subjektiven Modalverb aus. Achte bei Vergangenem auf den Infinitiv II.',
      aufgaben: [
        'Der Chef ist nicht im Haus. *(fast sicher — sein Wagen ist weg)*',
        'Die Aktie steigt nächste Woche. *(begründete Annahme)*',
        'Der Bewerber hat seine Zeugnisse gefälscht. *(Behauptung der Presse)*',
        'Die Zeugin hat den Streit nicht mitbekommen. *(ihre eigene, zweifelhafte Aussage)*',
        'Das Projekt ist an der Finanzierung gescheitert. *(offene Möglichkeit)*',
        'Die Unterlagen sind gestern angekommen. *(Berechnung: so lange dauert die Post)*',
      ],
      loesungen: [
        'Der Chef **muss** außer Haus **sein** — sein Wagen ist weg.',
        'Die Aktie **dürfte** nächste Woche **steigen**.',
        'Der Bewerber **soll** seine Zeugnisse gefälscht **haben**.',
        'Die Zeugin **will** den Streit nicht mitbekommen **haben**.',
        'Das Projekt **könnte** an der Finanzierung gescheitert **sein**.',
        'Die Unterlagen **müssten** gestern angekommen **sein**.',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 3 · Produzieren',
      frage: 'Ein Serverausfall hat deine Firma einen Tag Arbeit gekostet; die Ursache ist ungeklärt. Schreibe vier Sätze einer internen Einschätzung mit **vier verschiedenen** Vermutungsgraden bzw. Wiedergabeformen (z. B. muss, dürfte, könnte, soll). Markiere die Modalverben.',
      aufgabe: '*Indizien: Update in der Nacht · Techniker bestreitet einen Fehler · ähnlicher Vorfall beim Mutterkonzern · Stromschwankungen gemeldet*',
      loesung: '**Mögliche Lösung** (andere Zuordnungen sind richtig, wenn Grad und Form stimmen):\n*Der Ausfall **muss** mit dem nächtlichen Update zusammenhängen — er begann exakt danach. Der zuständige Techniker **will** dabei keinen Fehler gemacht **haben**. Beim Mutterkonzern **soll** es im Frühjahr einen ähnlichen Vorfall gegeben **haben**. Es **könnte** allerdings auch an den gemeldeten Stromschwankungen gelegen **haben**; endgültige Klarheit **dürfte** erst der Prüfbericht **bringen**.*\n~~Fíjate en la forma: todo lo referido al pasado lleva Infinitiv II (gemacht haben, gegeben haben, gelegen haben) — nunca «musste» para una suposición actual.~~',
    },

    { type: 'rule' },

    // ── 7. Prüfungsbezug ──────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Hören/Lesen · Sprecherhaltung erkennen',
      titel: 'Mini-Aufgabe · Fakt, Vermutung oder fremde Behauptung?',
      anweisung: 'In Hören und Lesen Teil 1 entscheidet oft ein einziges Modalverb, ob eine Aussage als Tatsache oder als Behauptung markiert ist. Lies den Kurzbericht und ordne jede Aussage {1}-{4} ein: **A** gesicherte Information, **B** Vermutung des Autors, **C** wiedergegebene Behauptung.',
      absaetze: [
        'Nach dem Brand in der Lagerhalle hat die Polizei die Ermittlungen aufgenommen. {1} Das Feuer brach gegen drei Uhr morgens aus. {2} Es dürfte sich um Brandstiftung handeln, da an zwei Stellen zugleich Flammen gemeldet wurden. {3} Der Wachmann will während seiner Runde nichts Ungewöhnliches bemerkt haben. {4} Der Eigentümer soll die Halle erst kürzlich deutlich höher versichert haben.',
      ],
      loesungen: [
        '{1} **A** — Indikativ ohne Modalverb: als Fakt berichtet',
        '{2} **B** — *dürfte* + Begründung: Einschätzung des Autors/der Ermittler',
        '{3} **C** — *will … bemerkt haben*: Eigenaussage des Wachmanns, mit Zweifel wiedergegeben',
        '{4} **C** — *soll … versichert haben*: Behauptung Dritter, vom Autor nicht verbürgt — und ein deutlicher Verdacht zwischen den Zeilen',
      ],
      kommentar: 'Genau solche Nuancen fragt die Prüfung ab: „Was steht wirklich im Text?“ Eine Aussage mit *soll* darfst du nie als bestätigte Tatsache ankreuzen.',
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Im **Hören** signalisieren *soll* und *will* fast immer, dass gleich eine zweite Perspektive kommt — bleib aufmerksam, die Auflösung folgt oft im nächsten Satz. Im **Schreiben und Sprechen** ersetzt *dürfte* das ewige *wahrscheinlich*: „Die Kosten dürften steigen“ klingt eine ganze Registerstufe höher als „Die Kosten steigen wahrscheinlich“.',
    },

    { type: 'rule' },

    // ── 8. Abschluss ──────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Das bleibt', 'Beispiel'],
      zeilen: [
        ['Skala der Sicherheit', 'muss > müsste > dürfte > könnte/kann > mag'],
        ['Verneinung von muss (subjektiv)', 'Das kann nicht stimmen.'],
        ['sollen = Behauptung Dritter', 'Er soll gewusst haben …'],
        ['wollen = Eigenbehauptung + Zweifel', 'Sie will nichts gesehen haben.'],
        ['Vergangenheit subjektiv = Infinitiv II', 'muss gewesen sein ≠ musste sein'],
        ['mag = Zugeständnis vor dem aber', 'Das mag stimmen, aber …'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich unterscheide objektive und subjektive Lesart — im Zweifel über die Vergangenheitsform.',
        'Ich wähle auf der Skala von *muss* bis *mag* den Grad, der zu meinen Indizien passt.',
        'Ich erkenne in Nachrichten *soll* und *will* als Distanzsignale und kreuze entsprechend an.',
        'Ich bilde *muss/dürfte/soll/will + Infinitiv II* fehlerfrei für Vermutungen über die Vergangenheit.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Modalverben färben die **Einschätzung** einer Aussage. Noch feiner arbeiten die **Modalpartikeln**: *doch, ja, wohl, eben* verändern nicht den Inhalt, sondern den Ton — Erstaunen, Ungeduld, Beschwichtigung. In der nächsten Lektion lernst du die kleinen Wörter kennen, die gesprochenes Deutsch natürlich klingen lassen und im Hören die Haltung des Sprechers verraten.',
    },
  ],
}
