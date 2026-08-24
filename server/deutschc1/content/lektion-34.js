// Lektion 34 · Themenfeld: Sprache & Gesellschaft

export default {
  spec: ['Bloque 3', 'Themenfelder', 'Niveau C1', 'Prüfungsrelevanz: Sprechen · Schreiben Teil 1 · Lesen'],
  h1: 'Sprache & Gesellschaft',
  lead: 'Wer über Anglizismen, Gendern oder Dialekte streitet, streitet in Wahrheit über Identität — dieses Themenfeld liefert dir das Lexikon und die Argumente dafür.',

  content: [
    // ── 2. Lernziele ──────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'Am Ende kannst du die großen Sprachdebatten im deutschsprachigen Raum (Anglizismen, gendergerechte Sprache, Dialekte, Mehrsprachigkeit) mit präzisem C1-Wortschatz darstellen.',
        'Du kannst zu jeder Streitfrage Pro- und Contra-Positionen ausgewogen referieren, ohne dich vorschnell festzulegen.',
        'Du verwendest die zentralen Kollokationen des Feldes (*eine Debatte auslösen*, *dem Sprachwandel unterliegen*, *einen Dialekt pflegen*) aktiv in Vortrag und Diskussionsbeitrag.',
        'Du kannst reale Institutionen und Fakten als Belege in deine Argumentation einbauen.',
      ],
    },

    { type: 'rule' },

    // ── 3. Kernwortschatz ─────────────────────────────────────────
    {
      type: 'wortschatz',
      eyebrow: 'Kernwortschatz',
      items: [
        { wort: 'die Mehrsprachigkeit', kollokation: 'Mehrsprachigkeit gezielt fördern', es: 'plurilingüismo' },
        { wort: 'der Anglizismus', kollokation: 'den Gebrauch von Anglizismen kritisieren', es: 'anglicismo' },
        { wort: 'der Sprachwandel', kollokation: 'dem natürlichen Sprachwandel unterliegen', es: 'cambio lingüístico' },
        { wort: 'die gendergerechte Sprache', kollokation: 'gendergerechte Sprache verwenden', es: 'lenguaje inclusivo' },
        { wort: 'das generische Maskulinum', kollokation: 'am generischen Maskulinum festhalten', es: 'masculino genérico' },
        { wort: 'der Dialekt', kollokation: 'einen Dialekt pflegen', es: 'dialecto' },
        { wort: 'die Standardsprache', kollokation: 'die Standardsprache sicher beherrschen', es: 'lengua estándar' },
        { wort: 'die Herkunftssprache', kollokation: 'die Herkunftssprache an die Kinder weitergeben', es: 'lengua de origen' },
        { wort: 'der Sprachgebrauch', kollokation: 'den öffentlichen Sprachgebrauch prägen', es: 'uso de la lengua' },
        { wort: 'die Sprachpflege', kollokation: 'sich der Sprachpflege verschreiben', es: 'cuidado del idioma' },
        { wort: 'die Verständigung', kollokation: 'die Verständigung erleichtern / erschweren', es: 'entendimiento, comunicación' },
        { wort: 'identitätsstiftend', kollokation: 'eine identitätsstiftende Funktion haben', es: 'que crea identidad' },
        { wort: 'aussterben', kollokation: 'Dialekte drohen auszusterben', es: 'extinguirse' },
        { wort: 'sich durchsetzen', kollokation: 'eine sprachliche Neuerung setzt sich durch', es: 'imponerse, consolidarse' },
      ],
      hinweis: 'Merke dir die festen Verbindungen: *eine Debatte **über** + Akk. führen*, *die Übersetzung **aus dem** Spanischen **ins** Deutsche*, *etwas **auf** Deutsch sagen*. ~~Ojo: „hablo el alemán“ no se calca — *Ich spreche Deutsch*, sin artículo.~~',
    },

    { type: 'rule' },

    // ── 4. Erklärung ──────────────────────────────────────────────
    {
      type: 'prose',
      eyebrow: 'Erklärung',
      card: true,
      titel: 'Warum Sprachdebatten Gesellschaftsdebatten sind',
      absaetze: [
        'Kaum ein Thema erhitzt die Gemüter im deutschsprachigen Raum so zuverlässig wie die eigene Sprache. Ob eine Behörde mit Genderstern schreibt, ob ein Konzern seine Kampagne auf Englisch führt oder ob ein Kind in der Schule Schwäbisch sprechen darf — hinter jeder dieser Fragen steht dieselbe Grundsatzfrage: **Wem gehört die Sprache, und wer darf über sie bestimmen?**',
        'Für die Prüfung ist das Feld doppelt wertvoll: Es taucht regelmäßig in Lesetexten und Vortragsthemen auf, und es lässt sich mit **wenigen, wiederverwendbaren Argumentmustern** bearbeiten — Sprachwandel vs. Sprachverfall, Freiheit vs. Norm, Identität vs. Verständigung. ~~Domina estos tres ejes y podrás improvisar sobre casi cualquier subtema.~~',
      ],
    },

    {
      type: 'tabelle',
      eyebrow: 'Erklärung — Die Streitfragen im Überblick',
      kopf: ['Streitfrage', 'Eine Seite argumentiert…', 'Die andere hält dagegen…'],
      zeilen: [
        ['Anglizismen', 'natürlicher Sprachwandel; Präzision in Fachsprachen; Zeichen einer offenen Gesellschaft', 'Verlust an Verständlichkeit; ältere Menschen werden ausgeschlossen; Bequemlichkeit statt Notwendigkeit'],
        ['Gendergerechte Sprache', 'Sprache prägt Denken; das generische Maskulinum macht Frauen unsichtbar; Institutionen sollen alle ansprechen', 'erschwerte Lesbarkeit; kein Teil des amtlichen Regelwerks; sprachliche Vorgaben „von oben“ erzeugen Widerstand'],
        ['Dialekte', 'identitätsstiftend; kulturelles Erbe; Studien zufolge begünstigt Dialekt eine Art innerer Mehrsprachigkeit', 'mögliche Nachteile in Schule und Beruf; Verständigungsprobleme über Regionen hinweg'],
        ['Mehrsprachigkeit', 'kognitive und berufliche Vorteile; Herkunftssprachen sind eine Ressource', 'ohne solide Deutschkenntnisse drohe geringere Teilhabe; Förderung koste Ressourcen'],
      ],
    },

    {
      type: 'prose',
      card: true,
      titel: 'Institutionen und Fakten, mit denen du argumentieren kannst',
      absaetze: [
        'Drei Referenzen genügen, um im Vortrag fundiert zu wirken. **Erstens:** Der __Rat für deutsche Rechtschreibung__, das maßgebliche Gremium für die amtliche Orthografie, hat Sonderzeichen wie den Genderstern **nicht in das amtliche Regelwerk aufgenommen**, beobachtet den Schreibgebrauch aber weiter — die Frage ist also offiziell ungeklärt. **Zweitens:** Das __Leibniz-Institut für Deutsche Sprache__ in Mannheim dokumentiert den Sprachwandel wissenschaftlich, während die __Gesellschaft für deutsche Sprache__ jedes Jahr das „Wort des Jahres“ kürt — ein Spiegel der gesellschaftlichen Debatten.',
        '**Drittens:** Die __Schweiz__ ist das beste Beispiel gegen die These, Vielfalt gefährde den Zusammenhalt: Sie hat **vier Landessprachen** (Deutsch, Französisch, Italienisch, Rätoromanisch), und in der Deutschschweiz existieren Mundart und Standardsprache in einer stabilen Arbeitsteilung — gesprochen wird weitgehend Dialekt, geschrieben Hochdeutsch. Dieses Nebeneinander zweier Varietäten nennt die Forschung __Diglossie__.',
      ],
    },

    {
      type: 'prose',
      card: true,
      titel: 'Sprache und Identität — der rote Faden',
      absaetze: [
        'Alle vier Streitfragen laufen auf denselben Punkt zu: Sprache ist nie nur ein Werkzeug der Verständigung, sondern immer auch ein **Ausweis der Zugehörigkeit**. Wer einen Dialekt spricht, zeigt Herkunft; wer gendert oder es bewusst unterlässt, positioniert sich; wer die Herkunftssprache an die Kinder weitergibt, hält eine Verbindung lebendig. In Ländern mit vielen eingewanderten Familien — in deutschen Großstädten wächst ein erheblicher Teil der Kinder mehrsprachig auf — ist das keine Randfrage, sondern Alltag von Schulen und Behörden.',
        'Für deine Prüfungstexte heißt das: Argumentiere **zweistufig**. Erst die praktische Ebene (Verständigung, Kosten, Lesbarkeit), dann die symbolische (Identität, Sichtbarkeit, Zugehörigkeit). Wer beide Ebenen trennt, wirkt sofort analytischer als jemand, der sie vermischt.',
      ],
    },

    { type: 'rule' },

    // ── 5. Beispiele ──────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele — Sätze fürs Examen',
      kicker: 'Anglizismen',
      titel: 'Sprachwandel oder Sprachverfall?',
      items: [
        { text: 'Puristen beklagen einen **Sprachverfall**, während Linguisten im Anglizismus lediglich einen **Beleg für natürlichen Sprachwandel** sehen.', gl: '— la oposición Verfall/Wandel estructura todo el debate' },
        { text: 'Viele Anglizismen füllen eine **Lücke im Wortschatz**; andere verdrängen jedoch etablierte deutsche Ausdrücke, ohne einen Mehrwert zu bieten.' },
        { text: 'Entscheidend ist nicht die Herkunft eines Wortes, sondern ob es **die Verständigung erleichtert oder erschwert**.' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'Gendern',
      titel: 'Gendergerechte Sprache — beide Lager formulieren',
      items: [
        { text: 'Befürworter machen geltend, dass das generische Maskulinum Frauen **sprachlich unsichtbar** mache und Sprache unser Denken **nachweislich präge**.' },
        { text: 'Kritiker wenden ein, gendergerechte Formen **beeinträchtigten die Lesbarkeit** und ließen sich nicht **per Verordnung durchsetzen**.', gl: '— *beeinträchtigten/ließen*: Konjunktiv II como sustituto del Konjunktiv I (que aquí coincidiría con el indicativo) — refieres la postura sin hacerla tuya'},
        { text: 'Solange der Rat für deutsche Rechtschreibung keine verbindliche Regelung trifft, bleibt das Gendern **eine Frage der freiwilligen Konvention**.' },
        { text: 'Vermittelnd ließe sich sagen: Wo alle gemeint sind, sollten sich auch **alle angesprochen fühlen** — auf welchem sprachlichen Weg, darüber lässt sich streiten.' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'Dialekte',
      titel: 'Mundart zwischen Stolz und Stigma',
      items: [
        { text: 'Während der Dialekt in der Deutschschweiz **hohes Prestige genießt**, haftet ihm in Teilen Deutschlands noch immer **das Etikett des Provinziellen** an.' },
        { text: 'Wer mit Mundart und Standardsprache aufwächst, beherrscht **zwei Register** — eine Kompetenz, die der Schule nützen könnte, statt ihr zu schaden.' },
        { text: 'Mit jedem Dialekt, der ausstirbt, geht **ein Stück immaterielles Kulturerbe** unwiederbringlich verloren.' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'Mehrsprachigkeit',
      titel: 'Herkunftssprachen als Ressource',
      items: [
        { text: 'Mehrsprachigkeit gilt in der Forschung längst **nicht mehr als Hindernis, sondern als Ressource** — kognitiv wie beruflich.' },
        { text: 'Wer die Herkunftssprache seiner Familie **systematisch ausbaut**, lernt erwiesenermaßen auch die Umgebungssprache leichter.' },
        { text: 'Eine Einwanderungsgesellschaft, die Herkunftssprachen **brachliegen lässt**, verschenkt Potenzial, das andernorts teuer eingekauft wird.', gl: '— *brachliegen lassen*: dejar sin aprovechar; colocación C1 muy rentable' },
        { text: 'Zugleich bleibt unbestritten, dass **eine sichere Beherrschung des Deutschen** die Voraussetzung für gesellschaftliche Teilhabe ist.' },
      ],
    },

    {
      type: 'redemittel',
      eyebrow: 'Redemittel — Position beziehen im Themenfeld',
      gruppen: [
        {
          fn: 'Differenziert Stellung nehmen',
          saetze: [
            { satz: 'In der Debatte um Anglizismen neige ich zu einer vermittelnden Position: Einerseits…, andererseits…' },
            { satz: 'Pauschale Urteile greifen hier meines Erachtens zu kurz — man muss zwischen Fachsprache und Alltagssprache unterscheiden.' },
          ],
        },
        {
          fn: 'Fremde Positionen referieren',
          saetze: [
            { satz: 'Befürworter des Genderns machen geltend, dass… — dem halten Kritiker entgegen, dass…', gloss: '~~Konjunktiv I en el examen: „dass Sprache das Denken präge“~~' },
            { satz: 'Nicht von der Hand zu weisen ist das Argument, dass…' },
          ],
        },
        {
          fn: 'Belege einbauen',
          saetze: [
            { satz: 'Ein Blick in die Schweiz zeigt, dass sprachliche Vielfalt und Zusammenhalt einander keineswegs ausschließen.' },
            { satz: 'Dass der Rat für deutsche Rechtschreibung bislang keine verbindliche Regelung getroffen hat, spricht dafür, die Entwicklung abzuwarten.' },
          ],
        },
        {
          fn: 'Zum Schluss kommen',
          saetze: [
            { satz: 'Unterm Strich scheint mir entscheidend, ob eine sprachliche Neuerung die Verständigung erleichtert — alles andere regelt der Sprachwandel von selbst.' },
          ],
        },
      ],
    },

    { type: 'rule' },

    // ── 6. Übungen ────────────────────────────────────────────────
    {
      type: 'uebung',
      eyebrow: 'Anwendung — Übung 1 · Wortschatz & Kollokationen',
      frage: 'Ergänze das passende Wort aus dem Kernwortschatz in der richtigen Form.',
      aufgaben: [
        'Ohne staatliche Förderung drohen kleine Dialekte innerhalb weniger Generationen ______.',
        'Der Duden dokumentiert den Sprachgebrauch — er schreibt ihn nicht vor: Auch das Wörterbuch unterliegt dem ______.',
        'Viele Familien geben ihre ______ bewusst an die Kinder weiter, damit die Verbindung zur Großelterngeneration nicht abreißt.',
        'Ob sich der Genderstern langfristig ______, wird nicht per Dekret entschieden, sondern im täglichen Schreibgebrauch.',
        'Für viele Bayern hat die Mundart eine ______ Funktion: Sie markiert Zugehörigkeit über die Sprache.',
      ],
      loesungen: [
        '… drohen kleine Dialekte **auszusterben**. (*drohen* + zu-Infinitiv)',
        '… unterliegt dem **Sprachwandel**. (*unterliegen* + Dat.)',
        '… geben ihre **Herkunftssprache** bewusst weiter.',
        'Ob sich der Genderstern langfristig **durchsetzt** … (*sich durchsetzen*)',
        '… eine **identitätsstiftende** Funktion. ~~Adjetivo compuesto: stiftet Identität → identitätsstiftend.~~',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 2 · Von B2 zu C1',
      frage: 'Hebe die Sätze auf C1-Niveau: Ersetze die einfachen Formulierungen durch Kernwortschatz und komplexere Strukturen dieser Lektion.',
      aufgaben: [
        'Viele Leute finden Anglizismen schlecht, aber Sprachwissenschaftler finden sie normal.',
        'Wenn man zwei Sprachen spricht, ist das gut für den Beruf.',
        'Manche wollen gendern, manche wollen nicht gendern. Beide haben Gründe.',
        'In der Schweiz sprechen die Leute Dialekt, aber sie schreiben Hochdeutsch.',
      ],
      loesungen: [
        '**Während Sprachpuristen im Anglizismus einen Sprachverfall sehen, gilt er der Linguistik als Beleg für natürlichen Sprachwandel.**',
        '**Mehrsprachigkeit verschafft nachweislich berufliche Vorteile und gilt in der Forschung längst als Ressource.**',
        '**In der Debatte um gendergerechte Sprache stehen sich zwei begründete Positionen gegenüber: das Anliegen sprachlicher Sichtbarkeit und die Sorge um Lesbarkeit und Sprachfreiheit.**',
        '**In der Deutschschweiz herrscht eine stabile Diglossie: Gesprochen wird weitgehend Mundart, geschrieben die Standardsprache.** ~~Fíjate en la pasiva con „wird“ + posición inicial del participio: registro escrito elegante.~~',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 3 · Produzieren',
      frage: 'Schreibe einen Absatz (80-100 Wörter) zur Frage: **„Sollten Dialekte in der Schule einen festen Platz haben?“** Verwende mindestens vier Wörter aus dem Kernwortschatz und stelle beide Positionen dar, bevor du Stellung nimmst.',
      loesung: '**Mögliche Lösung** (jede gut begründete Position ist richtig, solange beide Seiten vorkommen):\n*Ob Dialekte in die Schule gehören, ist umstritten. Kritiker befürchten, Mundart erschwere den Erwerb der Standardsprache und benachteilige Kinder später im Beruf. Dem lässt sich entgegenhalten, dass Dialekte eine identitätsstiftende Funktion haben und wie eine innere Mehrsprachigkeit wirken: Wer zwei Varietäten beherrscht, wechselt souverän zwischen den Registern. Da zudem viele Dialekte auszusterben drohen, spricht einiges dafür, sie im Unterricht zumindest zu thematisieren — nicht als Ersatz für die Standardsprache, sondern als Teil des kulturellen Erbes, das die Schule weitergeben sollte.*',
    },

    { type: 'rule' },

    // ── 7. Prüfungsbezug ──────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Sprechen · Teil 1 · Vortrag',
      titel: 'Vortrag: „Anglizismen im Deutschen — Bereicherung oder Bedrohung?“',
      anweisung: 'Im echten Sprechen Teil 1 hältst du einen Vortrag von ca. 4 Minuten zu einem vorbereiteten Thema: Einleitung, mehrere Aspekte mit Beispielen, eigene Bewertung, Schluss. Erstelle eine Gliederung mit Stichpunkten zu folgendem Thema.',
      absaetze: [
        '**Thema:** Anglizismen im Deutschen — Bereicherung oder Bedrohung?\n**Leitpunkte:** Beschreiben Sie die Situation. Nennen Sie Argumente beider Seiten mit Beispielen. Bewerten Sie die Entwicklung und ziehen Sie ein Fazit.',
      ],
      loesungLabel: 'Musterlösung (Gliederung)',
      loesungen: [
        '**Einleitung** — Einstieg über ein Alltagsbeispiel (*Meeting, Deadline, downloaden*): Anglizismen sind längst Teil des Sprachgebrauchs; die Frage ist, wie wir das bewerten.',
        '**Aspekt 1 · Bereicherung** — Anglizismen füllen Lücken im Wortschatz, schaffen Präzision in Fachsprachen (IT, Wirtschaft) und zeugen von einer offenen Gesellschaft; Sprachwandel hat es immer gegeben (früher: Latein, Französisch).',
        '**Aspekt 2 · Bedenken** — Verständigung leidet, wenn Anglizismen ohne Not etablierte Wörter verdrängen; ältere Menschen fühlen sich ausgeschlossen; Sprachpflegevereine warnen vor Bequemlichkeit statt Notwendigkeit.',
        '**Bewertung** — Maßstab sollte die Verständigung sein, nicht die Herkunft des Wortes; der Sprachgebrauch entscheidet am Ende selbst, was sich durchsetzt.',
        '**Fazit** — weder Bereicherung noch Bedrohung pauschal: Der Anglizismus ist ein Symptom des Sprachwandels — und der lässt sich dokumentieren, aber nicht verbieten.',
      ],
      kommentar: 'Bewertet werden Aufgabenbewältigung, Kohärenz, Wortschatz und Strukturen — **nicht deine Meinung**. Eine ausgewogene Gliederung mit klarem Fazit punktet mehr als eine leidenschaftliche einseitige Rede.',
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Lege dir für jedes Themenfeld **drei Belege** zurecht (hier: Rechtschreibrat, Leibniz-Institut, Schweizer Diglossie). Ein einziger konkreter Fakt im Vortrag wirkt stärker als drei allgemeine Behauptungen — und du gewinnst Zeit, weil du nicht improvisieren musst.',
    },

    { type: 'rule' },

    // ── 8. Abschluss ──────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Streitfrage', 'Argumentationsachse', 'Schlüsselwörter'],
      zeilen: [
        ['Anglizismen', 'Sprachwandel vs. Sprachverfall', 'sich durchsetzen · die Lücke füllen · verdrängen'],
        ['Gendern', 'Sichtbarkeit vs. Lesbarkeit', 'generisches Maskulinum · amtliches Regelwerk'],
        ['Dialekte', 'Identität vs. Chancengleichheit', 'identitätsstiftend · aussterben · Diglossie'],
        ['Mehrsprachigkeit', 'Ressource vs. Hürde', 'Herkunftssprache · Teilhabe · fördern'],
        ['Argumentieren', 'praktische + symbolische Ebene trennen', 'Verständigung ↔ Zugehörigkeit'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich kann zu Anglizismen, Gendern, Dialekten und Mehrsprachigkeit jeweils ein Pro- und ein Contra-Argument auf C1-Niveau formulieren.',
        'Ich referiere fremde Positionen mit *machen geltend* / *wenden ein* und Konjunktiv I, ohne sie mir zu eigen zu machen.',
        'Ich kenne drei reale Referenzen (Rechtschreibrat, Leibniz-Institut, Schweizer Sprachenvielfalt) und kann sie als Beleg einsetzen.',
        'Ich kann in fünf Minuten eine Vortragsgliederung zu einer Sprachfrage entwerfen.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Die Achse **Freiheit vs. Vorgabe**, die die Genderdebatte prägt, begegnet dir im nächsten Themenfeld sofort wieder: Darf der Staat vorschreiben, was wir essen — oder zumindest besteuern, was uns schadet? In der nächsten Lektion geht es um **Gesundheit & Ernährung**: das deutsche Gesundheitssystem, Prävention, vegane Ernährung und die Debatte um die Zuckersteuer.',
    },
  ],
}
