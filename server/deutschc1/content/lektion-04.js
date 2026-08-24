// Lektion 04 · Das Passiv & Passiversatzformen
//
// Estándar de 8 secciones — véase docs/deutschc1/FORMAT.md y lektion-03.js (modelo)

export default {
  spec: ['Bloque 1', 'Sprachliche Konsolidierung', 'Niveau C1', 'Prüfungsrelevanz: Lesen · Schreiben · Sprechen'],
  h1: 'Das Passiv & Passiversatzformen',
  lead: 'Die Handlung in den Vordergrund, den Handelnden in den Hintergrund — mit dem vollen Formeninventar und den Alternativen, an denen sich ein echtes C1 zeigt.',

  content: [
    // ── 2. Lernziele ──────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'Am Ende kannst du Vorgangs- und Zustandspassiv sicher unterscheiden und in allen Zeiten bilden — inklusive *worden* im Perfekt.',
        'Du beherrschst das Passiv mit Modalverben, auch im Perfekt und im Konjunktiv II (*hätte gelöst werden können*).',
        'Du verwendest das unpersönliche Passiv (*Es wird getanzt*) und erkennst subjektlose Passivsätze im Lesetext.',
        'Du variierst mit den Ersatzformen (*sich lassen*, *sein + zu*, *-bar*, *man*) je nach Register und Textsorte.',
      ],
    },

    { type: 'rule' },

    // ── 3. Kernwortschatz ─────────────────────────────────────────
    {
      type: 'wortschatz',
      eyebrow: 'Kernwortschatz',
      items: [
        { wort: 'der Vorgang', kollokation: 'einen Vorgang beschreiben', es: 'proceso, trámite' },
        { wort: 'der Zustand', kollokation: 'einen Zustand feststellen', es: 'estado' },
        { wort: 'der Urheber', kollokation: 'der Urheber einer Handlung', es: 'autor, agente' },
        { wort: 'die Maßnahme', kollokation: 'Maßnahmen werden ergriffen', es: 'medida' },
        { wort: 'beheben', kollokation: 'einen Fehler beheben', es: 'subsanar, corregir' },
        { wort: 'gewährleisten', kollokation: 'die Sicherheit gewährleisten', es: 'garantizar' },
        { wort: 'berücksichtigen', kollokation: 'alle Faktoren berücksichtigen', es: 'tener en cuenta' },
        { wort: 'vernachlässigen', kollokation: 'ein Problem vernachlässigen', es: 'descuidar' },
        { wort: 'verabschieden', kollokation: 'ein Gesetz verabschieden', es: 'aprobar (una ley)' },
        { wort: 'umsetzen', kollokation: 'eine Reform umsetzen', es: 'implementar, llevar a cabo' },
        { wort: 'durchführbar', kollokation: 'ein durchführbarer Plan', es: 'realizable, viable' },
        { wort: 'nachvollziehbar', kollokation: 'eine nachvollziehbare Entscheidung', es: 'comprensible' },
        { wort: 'unverzichtbar', kollokation: 'eine unverzichtbare Voraussetzung', es: 'imprescindible' },
      ],
      hinweis: 'Adjektive auf **-bar** entstehen fast nur aus **transitiven** Verben und bedeuten „kann … werden“: *lösbar = kann gelöst werden*. Lerne die Verben gleich mit ihrem typischen Passivkontext: *Maßnahmen **werden ergriffen***, *ein Gesetz **wird verabschiedet***.',
    },

    { type: 'rule' },

    // ── 4. Erklärung ──────────────────────────────────────────────
    {
      type: 'prose',
      eyebrow: 'Erklärung',
      card: true,
      titel: 'Wozu Passiv? Die Perspektive entscheidet',
      absaetze: [
        'Das Aktiv fragt: **Wer tut etwas?** Das Passiv fragt: **Was geschieht — und mit wem oder was?** Der Handelnde wird unwichtig, unbekannt oder absichtlich verschwiegen: *Die Ergebnisse werden derzeit ausgewertet.* Wer auswertet, spielt keine Rolle. Genau deshalb dominiert das Passiv in Berichten, Anleitungen, wissenschaftlichen Texten und Nachrichten.',
        'Soll der Urheber doch genannt werden: **von + Dativ** für den Handelnden (*Das Gesetz wurde **vom Parlament** verabschiedet*), **durch + Akkusativ** für Mittel oder Ursache (*Die Stadt wurde **durch ein Erdbeben** zerstört*).',
        'Für Hispanohablantes hilft ein Abgleich: ~~„ser + participio“ ≈ Vorgangspassiv (la ley fue aprobada), „estar + participio“ ≈ Zustandspassiv (la puerta está cerrada). Ojo: el „se“ pasivo español (aquí se venden pisos) NO se traduce con reflexivo — en alemán es Passiv o „man“: Hier werden Wohnungen verkauft.~~',
      ],
    },

    {
      type: 'steps',
      eyebrow: 'Erklärung — Die vier Grundformen',
      steps: [
        {
          badge: 'Vorgang',
          titel: 'Vorgangspassiv — werden + Partizip II',
          text: 'Der Prozess läuft. __Das Haus **wird gebaut**.__ Präteritum: *wurde gebaut*. Perfekt: *ist gebaut **worden*** — im Passiv-Perfekt heißt es immer **worden**, nie *geworden*. Plusquamperfekt: *war gebaut worden*.',
        },
        {
          badge: 'Zustand',
          titel: 'Zustandspassiv — sein + Partizip II',
          text: 'Das Ergebnis liegt vor. __Das Haus **ist gebaut**.__ Der Vorgang ist abgeschlossen, es zählt nur der erreichte Zustand: *Die Tür ist geschlossen*, *der Antrag ist gestellt*.',
        },
        {
          badge: '+ Modal',
          titel: 'Passiv mit Modalverb',
          text: 'Modalverb + Partizip II + __werden__ im Infinitiv: __Das Problem **muss gelöst werden**.__ Das Modalverb trägt Zeit und Modus, die Passivgruppe *gelöst werden* bleibt unverändert.',
        },
        {
          badge: 'unpersönlich',
          titel: 'Unpersönliches Passiv — Es wird getanzt',
          text: 'Auch intransitive Verben können ins Passiv, dann **ohne Subjekt**: __Es wird getanzt.__ Das *es* ist nur Platzhalter und verschwindet, sobald etwas anderes vorn steht: *Auf der Feier wurde getanzt.* Verben mit Dativ behalten ihn: *Den Betroffenen wurde geholfen.*',
        },
      ],
    },

    {
      type: 'tabelle',
      eyebrow: 'Erklärung — Passiv mit Modalverb in allen Zeiten',
      kopf: ['Zeit / Modus', 'Beispiel', 'Bauplan'],
      zeilen: [
        ['Präsens', 'Das Problem muss gelöst werden.', 'Modal + P II + werden'],
        ['Präteritum', 'Das Problem musste gelöst werden.', 'Modal im Präteritum'],
        ['Perfekt', 'Das Problem hat gelöst werden müssen.', 'haben + P II + werden + Modal-Infinitiv'],
        ['Plusquamperfekt', 'Das Problem hatte gelöst werden müssen.', 'hatte statt hat'],
        ['Konjunktiv II Gegenwart', 'Das Problem müsste gelöst werden.', 'Modal im Konj. II'],
        ['Konjunktiv II Vergangenheit', 'Das Problem hätte gelöst werden können.', 'hätte + P II + werden + Modal-Infinitiv'],
      ],
    },

    {
      type: 'prose',
      card: true,
      titel: 'Die Ersatzformen — und ihre Nuancen',
      absaetze: [
        'C1 heißt: nicht nur das Passiv bilden, sondern es **umschreiben** können. **sich lassen + Infinitiv** drückt Möglichkeit aus: *Das lässt sich lösen* = *kann gelöst werden*. **sein + zu + Infinitiv** bedeutet je nach Kontext Möglichkeit (*Der Gipfel ist von hier zu sehen*) oder — vor allem in Vorschriften — Notwendigkeit: *Der Antrag ist bis Freitag einzureichen* = *muss eingereicht werden*. Das Adjektiv auf **-bar** komprimiert die Möglichkeit in ein Wort: *lösbar, machbar, vermeidbar*. Und **man** ist die neutralste Umschreibung, im Mündlichen die häufigste.',
        'Register-Faustregel: *-bar* und *sein + zu* klingen schriftlich-formell, *sich lassen* ist überall einsetzbar, *man* tendiert zum Gesprochenen. Eine kleine Gruppe von Verben kennt außerdem das **mediale sich**: *Das Buch verkauft sich gut*, *der Text liest sich leicht*. ~~No generalices este „sich“ como el „se“ español: solo funciona con pocos verbos y casi siempre con un adverbio (gut, leicht, schnell).~~',
        'Für die Textarbeit heißt das: Wo im Satz schon ein *können* steckt, prüfe zuerst *sich lassen* oder *-bar* — das spart das schwerfällige *kann … werden*. Wo eine Vorschrift oder Anweisung formuliert wird, ist *sein + zu* die natürliche Wahl. Und wenn du merkst, dass drei Passivsätze aufeinanderfolgen, ersetze den mittleren durch eine Ersatzform — der Text gewinnt sofort an Rhythmus.',
      ],
    },

    {
      type: 'vergleich',
      eyebrow: 'Erklärung — Synonymie erkennen',
      titel: 'Eine Aussage, vier Formen',
      zeilen: [
        { satz: 'Das Problem kann gelöst werden.', label: 'Passiv + Modal' },
        { satz: 'Das Problem lässt sich lösen.', label: 'sich lassen' },
        { satz: 'Das Problem ist lösbar.', label: '-bar' },
        { satz: 'Das Problem ist zu lösen.', label: 'sein + zu + Inf.' },
      ],
    },

    { type: 'rule' },

    // ── 5. Beispiele ──────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele — nach Form',
      kicker: 'Vorgang · Zustand',
      titel: 'Prozess oder Ergebnis?',
      items: [
        { text: 'Die Ergebnisse **werden** derzeit **ausgewertet**.', gl: '— Vorgang: die Auswertung läuft' },
        { text: 'Die Ergebnisse **sind ausgewertet** — wir können beginnen.', gl: '— Zustand: die Auswertung ist abgeschlossen' },
        { text: 'Das Gesetz **wurde** 2023 **verabschiedet** und **ist** seitdem in Kraft.' },
        { text: 'Der Antrag **ist** bereits **gestellt worden**.', gl: '— Perfekt des Vorgangspassivs: *worden*, nie *geworden*' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'mit Modalverb',
      titel: 'Durch alle Zeiten',
      items: [
        { text: 'Die Frist **muss** unbedingt **eingehalten werden**.', gl: '— Präsens' },
        { text: 'Der Termin **konnte** nicht mehr **verschoben werden**.', gl: '— Präteritum' },
        { text: 'Die Daten **haben** komplett neu **erhoben werden müssen**.', gl: '— Perfekt: Modalverb als Infinitiv ganz am Ende' },
        { text: 'Der Fehler **hätte vermieden werden können**.', gl: '— Konj. II Vergangenheit: die Form für Kritik im Rückblick' },
        { text: 'Es ist ärgerlich, dass die Daten neu **haben erhoben werden müssen**.', gl: '— im Nebensatz rückt das finite Verb vor den Doppelinfinitiv' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'unpersönlich',
      titel: 'Passiv ohne Subjekt',
      items: [
        { text: '**Es wird** in Deutschland so viel **recycelt** wie kaum irgendwo sonst.' },
        { text: 'Hier **wird** noch **verhandelt** — bitte nicht stören.', gl: '— das *es* entfällt, sobald ein anderes Element vorn steht' },
        { text: 'Den Betroffenen **wurde** rasch **geholfen**.', gl: '— *helfen* + Dativ: der Dativ bleibt Dativ, es gibt kein Subjekt' },
        { text: 'Über den Vorschlag **ist** stundenlang **diskutiert worden**.' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'Ersatzformen',
      titel: 'Passiv, ohne Passiv zu sagen',
      items: [
        { text: 'Der plötzliche Anstieg **lässt sich** kaum **erklären**.', gl: '— Möglichkeit' },
        { text: 'Der Antrag **ist** bis Freitag vollständig **einzureichen**.', gl: '— Notwendigkeit: typisch für Vorschriften und formelle Nachrichten' },
        { text: 'Diese These ist empirisch **überprüfbar**.' },
        { text: 'In solchen Fällen greift **man** auf Rücklagen zurück.' },
        { text: 'Der neue Roman **verkauft sich** überraschend gut.', gl: '— mediales *sich*: nur bei wenigen Verben, fast immer mit Adverb' },
      ],
    },

    { type: 'rule' },

    // ── 6. Übungen ────────────────────────────────────────────────
    {
      type: 'uebung',
      eyebrow: 'Anwendung — Übung 1 · Erkennen',
      frage: 'Welche Form liegt vor: Vorgangspassiv, Zustandspassiv, unpersönliches Passiv oder Ersatzform? Benenne sie und gib die Bedeutung an.',
      aufgaben: [
        'Die Fenster sind geputzt.',
        'Die Fenster werden gerade geputzt.',
        'Das Formular ist vollständig auszufüllen.',
        'Es wurde lange über den Vorschlag gestritten.',
        'Der Text liest sich erstaunlich leicht.',
      ],
      loesungen: [
        '**Zustandspassiv** — *sein + P II*: das Ergebnis zählt, das Putzen ist vorbei.',
        '**Vorgangspassiv** — *werden + P II*: der Prozess läuft in diesem Moment.',
        '**Ersatzform** *sein + zu* — hier Notwendigkeit: *muss vollständig ausgefüllt werden*.',
        '**Unpersönliches Passiv** — *streiten* ist intransitiv, es gibt kein Subjekt; das *es* ist bloß Platzhalter.',
        '**Ersatzform** (mediales *sich*) — *kann leicht gelesen werden*. ~~No es un „se“ libre como en español: funciona porque lleva el adverbio *leicht*.~~',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 2 · Umformen',
      frage: 'Forme ins Passiv um. Behalte Zeit und Modalverb bei.',
      aufgaben: [
        'Man renoviert das Gebäude.',
        'Man musste die Sitzung verschieben.',
        'Man hat die Regel im letzten Jahr geändert.',
        'Man hätte die Anwohner rechtzeitig informieren müssen.',
        'Man kann dieses Verhalten nicht akzeptieren. (auch mit einer Ersatzform)',
        'Man half den Opfern sofort.',
      ],
      loesungen: [
        'Das Gebäude **wird renoviert**.',
        'Die Sitzung **musste verschoben werden**.',
        'Die Regel **ist** im letzten Jahr **geändert worden**. (*Die Regel wurde geändert* wäre Präteritum — die Aufgabe verlangt aber, das Perfekt beizubehalten.)',
        'Die Anwohner **hätten** rechtzeitig **informiert werden müssen**.',
        'Dieses Verhalten **kann nicht akzeptiert werden**. / … **lässt sich nicht akzeptieren**. / … **ist** nicht **akzeptabel**.',
        'Den Opfern **wurde** sofort **geholfen**. ~~Interferencia típica: *Die Opfer wurden geholfen* es agramatical — el dativo de *helfen* nunca se convierte en sujeto, a diferencia de „las víctimas fueron ayudadas“.~~',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 3 · Produzieren',
      frage: 'Formuliere die folgende Hausordnung neu: mindestens **ein Vorgangspassiv**, **einmal sein + zu** und **einmal sich lassen** — und höchstens ein einziges *man*.',
      aufgabe: '*Man trennt den Müll. Man muss die Haustür ab 22 Uhr abschließen. Man kann Fahrräder problemlos im Hof abstellen. Man reinigt das Treppenhaus jede Woche.*',
      loesung: '**Mögliche Lösung** (andere Kombinationen sind richtig, solange die drei geforderten Formen vorkommen):\n*Der Müll **wird getrennt**. Die Haustür **ist** ab 22 Uhr **abzuschließen**. Fahrräder **lassen sich** problemlos im Hof **abstellen**. Das Treppenhaus **wird** jede Woche **gereinigt**.*\nGültige Varianten: *Die Haustür **muss** ab 22 Uhr **abgeschlossen werden*** (Passiv + Modal) oder *Fahrräder **können** im Hof **abgestellt werden***. Entscheidend ist der Wechsel der Formen — genau diese Variation bewertet das Kriterium „Strukturen“.',
    },

    { type: 'rule' },

    // ── 7. Prüfungsbezug ──────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Lesen · Teil 2 · Lückentext',
      titel: 'Mini-Aufgabe · 6 Lücken',
      anweisung: 'Der Lückentext prüft Passivformen mit Vorliebe: Es fehlt fast nie das Partizip, sondern das kleine Formwort drumherum. Wähle für jede Lücke das passende Wort aus der Liste — jede Option wird genau einmal gebraucht.',
      absaetze: [
        'Viele Behördengänge können inzwischen online {1} werden. Die Formulare sind so gestaltet, dass sie sich ohne Vorkenntnisse {2} lassen. Dennoch {3} in vielen Ämtern weiterhin Papierakten geführt. Kritiker bemängeln, einfache Vorgänge {4} deutlich schneller bearbeitet werden. Bis 2030 {5} sämtliche Verwaltungsleistungen digital verfügbar sein. Ob dieses Ziel erreichbar {6}, wird sich in den kommenden Jahren zeigen.',
      ],
      optionen: ['ausfüllen', 'erledigt', 'ist', 'müssten', 'sollen', 'werden'],
      loesungen: [
        '{1} **erledigt** — *können + P II + werden*: Passiv mit Modalverb',
        '{2} **ausfüllen** — *sich + Infinitiv + lassen*: Ersatzform, daher Infinitiv, kein Partizip',
        '{3} **werden** — Vorgangspassiv Präsens Plural (*Papierakten*)',
        '{4} **müssten** — Konjunktiv II + Passivgruppe *bearbeitet werden*',
        '{5} **sollen** — Modalverb + *verfügbar sein*',
        '{6} **ist** — *erreichbar* (-bar-Ersatzform) verlangt nur noch *sein*',
      ],
      kommentar: 'Strategie: Bestimme zuerst, **welche Konstruktion der Satz schon angefangen hat**. Steht ein Partizip II in der Nähe, fehlt meist *werden/worden*; steht *sich … lassen*, muss ein **Infinitiv** in die Lücke; steht ein -bar-Adjektiv, reicht *sein*.',
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Im **Schreiben** hebt der Wechsel zwischen Passiv und Ersatzformen dein Strukturen-Profil — zweimal dieselbe Form hintereinander wirkt monoton. Im **Sprechen** ist *hätte … werden müssen/können* Gold wert, wenn du in der Diskussion Kritik übst. Und der Klassiker, der Punkte kostet: ***worden*, nicht *geworden*** im Passiv-Perfekt.',
    },

    { type: 'rule' },

    // ── 8. Abschluss ──────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Das bleibt', 'Beispiel'],
      zeilen: [
        ['Vorgang: werden + P II · Perfekt mit worden', 'Der Antrag ist gestellt worden.'],
        ['Zustand: sein + P II', 'Der Antrag ist gestellt.'],
        ['Modal: Modalverb trägt Zeit und Modus', 'hätte gelöst werden können'],
        ['Unpersönlich: es = Platzhalter, Dativ bleibt', 'Den Betroffenen wurde geholfen.'],
        ['Ersatz: sich lassen · sein + zu · -bar · man', 'lässt sich lösen = ist lösbar = ist zu lösen'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich kann Vorgangs- und Zustandspassiv in allen Zeiten bilden und weiß, wann *worden* steht.',
        'Ich bilde das Passiv mit Modalverb auch im Perfekt und im Konjunktiv II der Vergangenheit.',
        'Ich erkenne unpersönliche Passivsätze und lasse den Dativ dabei unangetastet.',
        'Ich kann eine Passivaussage mit mindestens zwei Ersatzformen umschreiben und wähle sie nach Register.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Das Passiv blendet den **Handelnden** aus — der Konjunktiv I blendet den **Sprecher** aus: Er gibt fremde Aussagen wieder, ohne sie zu unterschreiben. In der nächsten Lektion lernst du die indirekte Rede, das Werkzeug der Presse- und Berichtssprache — und damit den dritten Baustein des sachlich-distanzierten Stils nach Nominalstil und Passiv.',
    },
  ],
}
