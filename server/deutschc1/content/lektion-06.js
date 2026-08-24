// Lektion 06 · Konjunktiv II — irreale Sätze
//
// Estándar de 8 secciones — véase docs/deutschc1/FORMAT.md y lektion-03.js (modelo)

export default {
  spec: ['Bloque 1', 'Sprachliche Konsolidierung', 'Niveau C1', 'Prüfungsrelevanz: Schreiben · Sprechen'],
  h1: 'Konjunktiv II — irreale Sätze',
  lead: 'Hypothese, Wunsch, Höflichkeit und das knapp Verpasste: die Grammatik der Gegenwelten — und einer der sichersten C1-Marker in Schreiben und Sprechen.',

  content: [
    // ── 2. Lernziele ──────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'Am Ende kannst du den Konjunktiv II der Gegenwart und der Vergangenheit sicher bilden — und weißt, wann die eigene Form und wann *würde* angemessen ist.',
        'Du formulierst irreale Bedingungen, Wünsche und Vergleiche (*als ob*) in beiden Zeitstufen.',
        'Du setzt den Konjunktiv II für Höflichkeit und vorsichtige Einschätzungen ein (*Das dürfte schwierig werden*).',
        'Du beherrschst *beinahe/fast* + Konjunktiv II der Vergangenheit und die Modalverb-Konstruktion *hätte … müssen/können*.',
      ],
    },

    { type: 'rule' },

    // ── 3. Kernwortschatz ─────────────────────────────────────────
    {
      type: 'wortschatz',
      eyebrow: 'Kernwortschatz',
      items: [
        { wort: 'die Annahme', kollokation: 'von einer falschen Annahme ausgehen', es: 'suposición' },
        { wort: 'angenommen', kollokation: 'angenommen, es käme zum Streik', es: 'suponiendo que' },
        { wort: 'die Voraussetzung', kollokation: 'unter der Voraussetzung, dass …', es: 'requisito, condición previa' },
        { wort: 'bedauern', kollokation: 'eine Entscheidung zutiefst bedauern', es: 'lamentar' },
        { wort: 'bereuen', kollokation: 'nichts zu bereuen haben', es: 'arrepentirse de' },
        { wort: 'versäumen', kollokation: 'eine Frist versäumen', es: 'dejar pasar, incumplir' },
        { wort: 'die Gelegenheit', kollokation: 'eine einmalige Gelegenheit verpassen', es: 'ocasión, oportunidad' },
        { wort: 'scheitern', kollokation: 'an der Finanzierung scheitern', es: 'fracasar (por algo)' },
        { wort: 'andernfalls', kollokation: 'andernfalls droht eine Strafe', es: 'de lo contrario' },
        { wort: 'gegebenenfalls', kollokation: 'gegebenenfalls Rücksprache halten', es: 'dado el caso, si procede' },
        { wort: 'an jemandes Stelle', kollokation: 'an deiner Stelle würde ich ablehnen', es: 'en el lugar de alguien' },
        { wort: 'beinahe / fast', kollokation: 'beinahe wäre alles schiefgegangen', es: 'por poco, casi' },
        { wort: 'der Rückblick', kollokation: 'im Rückblick klüger sein', es: 'retrospectiva' },
      ],
      hinweis: 'Viele dieser Wörter sind **Konjunktiv-Auslöser**: Nach *angenommen*, *an deiner Stelle* und *beinahe* ist der Konjunktiv II praktisch obligatorisch. Lerne sie als Signalwörter — sie sagen dir im Text, welche Verbform kommen muss.',
    },

    { type: 'rule' },

    // ── 4. Erklärung ──────────────────────────────────────────────
    {
      type: 'prose',
      eyebrow: 'Erklärung',
      card: true,
      titel: 'Zwei Zeitstufen, ein Prinzip',
      absaetze: [
        'Der Konjunktiv II kennt nur **zwei Zeitstufen**. **Gegenwart/Zukunft:** aus dem Präteritum abgeleitet, bei starken Verben mit Umlaut (*war → wäre*, *kam → käme*) — oder mit **würde + Infinitiv**. **Vergangenheit:** immer **hätte/wäre + Partizip II** (*hätte gewusst*, *wäre gekommen*). Ob das Original Präteritum, Perfekt oder Plusquamperfekt war, ist egal — es gibt nur diese eine Vergangenheitsform.',
        'Das deckt sich gut mit dem Spanischen (*haría / habría hecho*), mit zwei Stolperfallen: ~~1) „habría tenido“ se construye con *hätte*, nunca con *würde haben*. 2) En la frase con *wenn* el alemán escrito evita *würde* si el verbo tiene forma propia — el equivalente del error „si tendría“.~~',
      ],
    },

    {
      type: 'tabelle',
      eyebrow: 'Erklärung — Eigene Form oder würde?',
      kopf: ['Verbgruppe', 'Konjunktiv II Gegenwart', 'Empfehlung'],
      zeilen: [
        ['sein · haben', 'wäre · hätte', 'immer eigene Form'],
        ['Modalverben', 'könnte · müsste · dürfte · sollte · wollte', 'immer eigene Form'],
        ['wissen · werden', 'wüsste · würde', 'immer eigene Form'],
        ['gängige starke Verben', 'käme · ginge · gäbe · ließe · fände · bliebe', 'im Schriftlichen bevorzugt'],
        ['brauchen', 'bräuchte', 'üblich, auch standardsprachlich akzeptiert'],
        ['regelmäßige Verben', 'würde arbeiten (denn *arbeitete* = Präteritum)', 'immer würde-Form'],
      ],
    },

    {
      type: 'steps',
      eyebrow: 'Erklärung — Die fünf Funktionen',
      steps: [
        {
          badge: 'Bedingung',
          titel: 'Irreale Bedingungssätze',
          text: 'Gegenwart: __Wenn ich Zeit hätte, käme ich.__ Vergangenheit: __Wenn ich das gewusst hätte, wäre ich gekommen.__ Elegante Variante ohne *wenn* — das Verb rückt an Position 1: __Hätte ich das gewusst, wäre ich gekommen.__ Diese Inversion ist ein starker Schriftsprache-Marker.',
        },
        {
          badge: 'Wunsch',
          titel: 'Irreale Wunschsätze',
          text: 'Mit *wenn* oder mit Verb vorn, fast immer mit Partikel __doch / nur / bloß__: *Wenn ich das **doch nur** früher erfahren hätte!* / *Wäre er **bloß** vorsichtiger gefahren!* Ohne Partikel klingt der Wunschsatz unvollständig.',
        },
        {
          badge: 'Vergleich',
          titel: 'Irreale Vergleiche — als ob / als',
          text: '__als ob__ + Verb am Ende: *Er tut so, als ob er alles **wüsste**.* Gehobener: __als__ + Verb sofort danach: *Er tut so, als **wüsste** er alles.* Bezieht sich der Vergleich auf Vorzeitiges: *als ob er es **geahnt hätte***.',
        },
        {
          badge: 'Höflichkeit',
          titel: 'Distanz und Diplomatie',
          text: '*__Könnten__ Sie …? / Ich __hätte__ eine Frage. / __Wäre__ es möglich, …?* Auch für vorsichtige Einschätzungen: *Das __dürfte__ schwierig werden* (= ist wahrscheinlich schwierig). Pflichtregister für die formelle Nachricht im Schreiben.',
        },
        {
          badge: 'beinahe',
          titel: 'Das knapp Verpasste',
          text: '__beinahe / fast__ + Konjunktiv II der **Vergangenheit**: *Beinahe **hätte** ich den Zug **verpasst**.* Das Ereignis ist gerade noch ausgeblieben — deshalb irreal. ~~El español dice „casi pierdo el tren“ en presente; el alemán exige K II de pasado. „Fast verpasse ich den Zug“ es un calco agramatical.~~',
        },
      ],
    },

    {
      type: 'prose',
      card: true,
      titel: 'Die Königsdisziplin: Vergangenheit mit Modalverb',
      absaetze: [
        'Kritik im Rückblick ist eine C1-Kernkompetenz: **hätte + Infinitiv + Modalverb-Infinitiv**. *Man **hätte** die Bürger früher **informieren müssen**.* / *Der Unfall **hätte verhindert werden können**.* — hier verbindet sich der Konjunktiv II mit dem Passiv aus Lektion 4.',
        'Vorsicht im Nebensatz: Das finite Verb steht **vor** dem Doppelinfinitiv, nicht am Ende: *Ich glaube, dass man die Bürger früher **hätte informieren müssen**.* Wer diese Stellung beherrscht, spielt grammatisch in der obersten Liga.',
      ],
    },

    { type: 'rule' },

    // ── 5. Beispiele ──────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele — nach Funktion',
      kicker: 'Bedingung',
      titel: 'Gegenwart und Vergangenheit',
      items: [
        { text: 'Wenn es mehr sichere Radwege **gäbe**, **würden** mehr Menschen aufs Auto **verzichten**.', gl: '— Gegenwart: eigene Form (*gäbe*) im wenn-Satz, würde im Hauptsatz' },
        { text: '**Gäbe** es strengere Kontrollen, **wäre** das Problem kleiner.', gl: '— Inversion statt wenn: gehobener Stil' },
        { text: 'Wenn man früher **reagiert hätte**, **wäre** der Schaden geringer **ausgefallen**.', gl: '— Vergangenheit: hätte/wäre + Partizip II' },
        { text: '**Hätte** ich davon gewusst, **hätte** ich dich selbstverständlich gewarnt.' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'Wunsch',
      titel: 'Was nicht ist — aber sein sollte',
      items: [
        { text: 'Wenn ich **doch nur** mehr Zeit für meine Familie **hätte**!' },
        { text: '**Hätte** ich **bloß** früher mit dem Deutschlernen **angefangen**!', gl: '— Wunsch über die Vergangenheit: nicht mehr zu ändern' },
        { text: '**Wäre** der Sommer **doch** nie zu Ende!' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'Vergleich',
      titel: 'als ob — die Welt, die nur so tut',
      items: [
        { text: 'Er redet über das Projekt, **als ob** er es allein gestemmt **hätte**.', gl: '— Vorzeitigkeit: hätte + Partizip II' },
        { text: 'Sie sah mich an, **als hätte** ich etwas Ungeheuerliches gesagt.', gl: '— als + Verb sofort: die elegante Kurzform' },
        { text: 'Die Firma tut so, **als wäre** nichts geschehen.' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'Höflichkeit · beinahe',
      titel: 'Diplomatie und knappes Glück',
      items: [
        { text: '**Wären** Sie so freundlich, mir die Unterlagen bis Freitag zuzusenden?', gl: '— Standardformel der formellen Nachricht' },
        { text: 'Ich **hätte** da noch einen Vorschlag: Man **könnte** die Sitzung verkürzen.' },
        { text: 'Der neue Ansatz **dürfte** auf Widerstand stoßen.', gl: '— dürfte = vorsichtige Vermutung, sehr C1' },
        { text: 'Es **wäre** zu überlegen, ob eine Übergangsfrist nicht sinnvoller **wäre**.', gl: '— doppelte Abschwächung: die diplomatischste Form des Widerspruchs' },
        { text: '**Fast wäre** das Projekt an den Kosten **gescheitert** — in letzter Minute kam die Förderung.' },
        { text: 'Beinahe **hätte** ich den Abgabetermin **vergessen**.' },
      ],
    },

    { type: 'rule' },

    // ── 6. Übungen ────────────────────────────────────────────────
    {
      type: 'uebung',
      eyebrow: 'Anwendung — Übung 1 · Erkennen',
      frage: 'Bestimme Funktion (Bedingung, Wunsch, Vergleich, Höflichkeit, beinahe) und Zeitstufe (Gegenwart oder Vergangenheit).',
      aufgaben: [
        'An Ihrer Stelle würde ich das Angebot annehmen.',
        'Beinahe wäre die Rede ins Wasser gefallen.',
        'Er verhält sich, als ob ihn das alles nichts anginge.',
        'Hätten wir doch auf die Experten gehört!',
        'Dürfte ich Sie kurz unterbrechen?',
      ],
      loesungen: [
        '**Bedingung, Gegenwart** — die Bedingung steckt in *an Ihrer Stelle* (= wenn ich Sie wäre).',
        '**beinahe, Vergangenheit** — *wäre gefallen*: Es ist gerade noch gut gegangen.',
        '**Vergleich, Gegenwart** — *als ob + anginge* (K II von *angehen*): Er tut nur so.',
        '**Wunsch, Vergangenheit** — Inversion + *doch*: nicht mehr zu ändern, daher Bedauern.',
        '**Höflichkeit, Gegenwart** — *dürfte* macht die Unterbrechung diplomatisch.',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 2 · Umformen',
      frage: 'Mache aus der realen Aussage einen irrealen Satz. Die Klammer sagt dir, welche Form gefragt ist.',
      aufgaben: [
        'Ich habe kein Auto, deshalb fahre ich mit dem Zug. (Bedingung, Gegenwart)',
        'Man hat die Warnungen ignoriert, deshalb kam es zum Datenleck. (Bedingung, Vergangenheit)',
        'Er ist kein Fachmann, aber er redet so. (Vergleich mit als ob)',
        'Die Behörde hat die Anwohner nicht informiert. (Kritik im Rückblick mit Modalverb)',
        'Ich habe die Gelegenheit verpasst. Das bedaure ich. (Wunschsatz)',
        'Geben Sie mir bitte Bescheid. (höfliche Bitte mit Konjunktiv II)',
      ],
      loesungen: [
        'Wenn ich ein Auto **hätte**, **würde** ich nicht mit dem Zug **fahren**. / …, **führe** ich nicht mit dem Zug.',
        '**Hätte** man die Warnungen nicht **ignoriert**, **wäre** es nicht zum Datenleck **gekommen**.',
        'Er redet, **als ob** er ein Fachmann **wäre**. / Er redet, **als wäre** er ein Fachmann.',
        'Die Behörde **hätte** die Anwohner **informieren müssen**. ~~La forma estrella para criticar en la Diskussion: „habría que haber…“ en una sola construcción.~~',
        '**Hätte** ich die Gelegenheit **doch nur genutzt**! / Wenn ich die Gelegenheit **doch nicht verpasst hätte**!',
        '**Würden** Sie mir bitte Bescheid **geben**? / **Könnten** Sie mir Bescheid geben?',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 3 · Produzieren',
      frage: 'Thema: **„Was wäre, wenn es kein Smartphone gäbe?“** Schreibe vier Sätze: eine irreale Bedingung in der Gegenwart, eine in der Vergangenheit, einen Vergleich mit *als ob* und eine vorsichtige Einschätzung mit *dürfte*.',
      aufgabe: 'Nutze mindestens zwei eigene Konjunktivformen (*gäbe, wäre, hätte, käme, müsste* …) — nicht nur *würde*.',
      loesung: '**Mögliche Lösung** (Inhalt frei, die vier Funktionen müssen erkennbar sein):\n*Gäbe es kein Smartphone, **müssten** wir uns wieder feste Verabredungen merken — und **würden** vermutlich pünktlicher sein. Ohne Smartphones **hätten** sich viele Freundschaften über große Entfernungen nie **entwickelt**. Manche Menschen behandeln ihr Gerät, **als ob** es ein Körperteil **wäre**. Ein Alltag ganz ohne Smartphone **dürfte** für die meisten von uns kaum noch vorstellbar sein.*\nGültig sind alle inhaltlichen Varianten; prüfe nur: wenn-Satz oder Inversion? *hätte/wäre* + Partizip II für die Vergangenheit? *als ob* mit Verb am Ende?',
    },

    { type: 'rule' },

    // ── 7. Prüfungsbezug ──────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Lesen · Teil 2 · Lückentext',
      titel: 'Mini-Aufgabe · 6 Lücken',
      anweisung: 'Kommentartexte kombinieren gern Konjunktiv II, Passiv und indirekte Rede — genau diese Mischung prüft der Lückentext. Wähle für jede Lücke das passende Wort — jede Option wird genau einmal gebraucht.',
      absaetze: [
        'Vieles {1} anders gekommen, hätte die Stadt schon vor zwanzig Jahren in den Nahverkehr investiert. Die täglichen Staus {2} sich vermeiden lassen, und die Luft wäre messbar sauberer. Die Verwaltung wendet ein, das Projekt {3} damals schlicht nicht finanzierbar gewesen. Doch selbst wenn das stimmte: Man {4} zumindest mit der Planung beginnen können. Beinahe wäre das Vorhaben übrigens beschlossen {5} — es scheiterte an einer einzigen Stimme. Heute {6} kaum noch jemand, dass die Investition nötig gewesen wäre.',
      ],
      optionen: ['bestreitet', 'hätte', 'hätten', 'sei', 'wäre', 'worden'],
      loesungen: [
        '{1} **wäre** — K II Vergangenheit von *kommen*: *wäre gekommen*',
        '{2} **hätten** — *Die Staus hätten sich vermeiden lassen*: K II Vergangenheit + Ersatzform *sich lassen*',
        '{3} **sei** — Konjunktiv I: Die Verwaltung wird zitiert (indirekte Rede aus Lektion 5!)',
        '{4} **hätte** — *hätte beginnen können*: Kritik im Rückblick mit Modalverb',
        '{5} **worden** — *wäre beschlossen worden*: K II Vergangenheit im Passiv',
        '{6} **bestreitet** — Indikativ: Hier stellt der Autor selbst einen Fakt fest',
      ],
      kommentar: 'Strategie: Kläre bei jeder Lücke zuerst die **Sprechinstanz** — zitiert der Text jemanden (→ Konjunktiv I), baut er eine Gegenwelt (→ Konjunktiv II) oder behauptet der Autor (→ Indikativ)? Erst danach die Form wählen.',
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Im **Schreiben** gehören *Wäre es möglich, …* und *Ich wäre Ihnen dankbar, wenn …* in jede formelle Nachricht; im Diskussionsbeitrag glänzt du mit einer Rückblick-Kritik (*Man hätte früher … müssen*). Im **Sprechen** öffnet *Man könnte einwenden, dass …* elegant die Gegenposition. Die zwei Fehler, die am meisten kosten: *würde haben* statt **hätte** — und *würde* im wenn-Satz, wo *wäre/hätte/gäbe* stehen muss.',
    },

    { type: 'rule' },

    // ── 8. Abschluss ──────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Das bleibt', 'Beispiel'],
      zeilen: [
        ['Gegenwart: eigene Form oder würde', 'käme · gäbe · würde arbeiten'],
        ['Vergangenheit: nur hätte/wäre + P II', 'hätte gewusst · wäre gekommen'],
        ['Bedingung auch ohne wenn: Inversion', 'Hätte ich das gewusst, …'],
        ['als ob + Verbende · als + Verb sofort', 'als ob er es wüsste · als wüsste er es'],
        ['beinahe/fast → K II Vergangenheit', 'Beinahe hätte ich den Zug verpasst.'],
        ['Rückblick-Kritik: hätte + Inf. + Modal', 'Man hätte reagieren müssen.'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich bilde beide Zeitstufen des Konjunktivs II und wähle bewusst zwischen eigener Form und *würde*.',
        'Ich formuliere irreale Bedingungen, Wünsche und *als ob*-Vergleiche in Gegenwart und Vergangenheit.',
        'Ich nutze *könnte/dürfte/wäre* für Höflichkeit und vorsichtige Einschätzungen.',
        'Ich beherrsche *beinahe* + K II Vergangenheit und *hätte … müssen/können* — auch im Nebensatz.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Mit Passiv, Konjunktiv I und Konjunktiv II steht dein Verbsystem auf C1-Niveau. Die nächste Lektion wechselt die Baustelle: **erweiterte Partizipialattribute** — jene kompakten Konstruktionen vor dem Nomen (*der von vielen Experten kritisierte Bericht*), die dichte Lesetexte so schwer machen. Du lernst, sie blitzschnell in Relativsätze zurückzuverwandeln.',
    },
  ],
}
