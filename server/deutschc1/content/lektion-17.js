// Lektion 17 · Lesen: Der Lückentext (Teil 2)

export default {
  spec: ['Bloque 2', 'Prüfungsstrategie', 'Niveau C1', 'Modul Lesen · Teil 2 · Lückentext'],
  h1: 'Lesen: Der Lückentext',
  lead: 'Teil 2 prüft keine Lesekunst, sondern Grammatik im Tarnanzug: Wer jede Lücke erst grammatisch klassifiziert, löst den Teil in zehn Minuten — mit System statt Gefühl.',

  content: [
    // ── 2. Lernziele ──────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'Am Ende weißt du, was der Lückentext wirklich testet: Konnektoren, Präpositionen, Nominalisierungen und Kollokationen — nicht Textverständnis im engeren Sinn.',
        'Du klassifizierst jede Lücke grammatisch (Wortart, Kasus, Verbstellung), bevor du an die Bedeutung denkst.',
        'Du wendest das Ausschlussverfahren an und dünnst die Wortliste systematisch aus.',
        'Du löst einen kompletten Lückentext im Prüfungsformat innerhalb des Zeitbudgets von zehn Minuten.',
      ],
    },

    { type: 'rule' },

    // ── 3. Kernwortschatz ─────────────────────────────────────────
    {
      type: 'wortschatz',
      eyebrow: 'Kernwortschatz — Werkzeuge für Teil 2',
      items: [
        { wort: 'der Lückentext', kollokation: 'einen Lückentext vervollständigen', es: 'texto con huecos' },
        { wort: 'die Wortliste', kollokation: 'ein Wort aus der Wortliste wählen', es: 'lista de palabras' },
        { wort: 'einsetzen', kollokation: 'das passende Wort einsetzen', es: 'insertar, colocar' },
        { wort: 'die Wortart', kollokation: 'die Wortart der Lücke bestimmen', es: 'categoría gramatical' },
        { wort: 'der Kasus', kollokation: 'der Kasus des folgenden Nomens', es: 'caso gramatical' },
        { wort: 'die Verbstellung', kollokation: 'auf die Verbstellung achten', es: 'posición del verbo' },
        { wort: 'die Rektion', kollokation: 'die Rektion des Verbs prüfen', es: 'régimen (preposición/caso que exige una palabra)' },
        { wort: 'die Kollokation', kollokation: 'eine feste Kollokation erkennen', es: 'colocación léxica' },
        { wort: 'ausschließen', kollokation: 'zwei Kandidaten ausschließen', es: 'descartar' },
        { wort: 'das Ausschlussverfahren', kollokation: 'im Ausschlussverfahren vorgehen', es: 'método de descarte' },
        { wort: 'infrage kommen', kollokation: 'nur zwei Wörter kommen infrage', es: 'ser candidato posible' },
        { wort: 'übrig bleiben', kollokation: 'zwei Wörter bleiben übrig', es: 'sobrar, quedar' },
        { wort: 'das Bezugswort', kollokation: 'das Bezugswort der Präposition finden', es: 'palabra de referencia' },
        { wort: 'der Zusammenhang', kollokation: 'aus dem Zusammenhang erschließen', es: 'contexto' },
      ],
      hinweis: 'Merke dir das Verb **einsetzen** mit seiner Umgebung: *ein Wort **in** die Lücke einsetzen*. ~~Y ojo con *infrage kommen*: no es «venir a la pregunta», sino «ser una opción posible».~~',
    },

    { type: 'rule' },

    // ── 4. Erklärung ──────────────────────────────────────────────
    {
      type: 'prose',
      eyebrow: 'Erklärung',
      card: true,
      titel: 'Was Teil 2 wirklich testet',
      absaetze: [
        'Im Lückentext fehlen in einem Sachtext einzelne Wörter; du wählst sie aus einer **Wortliste, die mehr Wörter enthält als Lücken**. Auf den ersten Blick sieht das nach Leseverstehen aus — tatsächlich ist es die Prüfungsform von vier Dingen, die du in diesem Kurs bereits trainiert hast: **Konnektoren** (Lektion 10), **Präpositionen und ihre Rektion** (Lektion 9), **Nominalisierungen** (Lektion 3) und **Kollokationen** (Lektion 15).',
        'Daraus folgt die zentrale Strategie: **Die Grammatik entscheidet vor der Bedeutung.** Von zwölf Wörtern der Liste passen in eine konkrete Lücke meist nur zwei oder drei überhaupt grammatisch — Wortart, Kasus, Verbstellung sortieren den Rest aus, bevor du auch nur über den Inhalt nachdenkst. Wer umgekehrt zuerst semantisch rät, vergleicht zwölf Kandidaten statt drei und verliert Zeit und Punkte.',
      ],
    },

    {
      type: 'steps',
      eyebrow: 'Erklärung — Die Methode in fünf Schritten',
      steps: [
        {
          titel: 'Text komplett lesen — ohne die Lücken zu füllen',
          text: 'Ein Durchgang in 60-90 Sekunden: Thema, Haltung des Autors, Argumentationslinie. __Wer sofort füllt, füllt blind__ — viele Lücken hängen von Informationen ab, die erst später im Text stehen.',
        },
        {
          titel: 'Die Lücke grammatisch klassifizieren',
          text: 'Frage bei jeder Lücke: Welche __Wortart__ fehlt? Steht danach ein Nomen — in welchem __Kasus__? Wie ist die __Verbstellung__ im Satz? Ein Genitiv nach der Lücke verrät eine Genitivpräposition; ein Verb am Satzende verrät eine Subjunktion.',
        },
        {
          titel: 'Die Wortliste filtern',
          text: 'Streiche alle Wörter der falschen Wortart und der falschen Rektion. Aus zwölf Kandidaten werden so __zwei bis drei__ — erst jetzt beginnt die inhaltliche Entscheidung.',
        },
        {
          titel: 'Semantisch entscheiden: Logik und Kollokation',
          text: 'Passt die Bedeutung zur Argumentationsrichtung (Gegensatz? Folge? Beispiel?)? Bildet das Wort mit seiner Umgebung eine __feste Kollokation__ (*eine Rolle spielen*, *zur Verfügung stehen*)? Kollokationen schlagen Einzelbedeutungen.',
        },
        {
          titel: 'Ausschlussverfahren und Schlusskontrolle',
          text: 'Löse zuerst die sicheren Lücken — jede vergebene Lösung __verkleinert die Liste__ für die schweren. Am Ende: den vollständigen Text einmal flüssig gegenlesen. Was beim Lesen holpert, ist meistens falsch.',
        },
      ],
    },

    {
      type: 'tabelle',
      eyebrow: 'Erklärung — Lückentypen und ihre Erkennungszeichen',
      kopf: ['Lückentyp', 'Woran du ihn erkennst', 'Wo gelernt'],
      zeilen: [
        ['Konnektor', 'Position am Satzanfang oder nach Komma; die Verbstellung im Satz entscheidet: Verb am Ende → Subjunktion, Verb direkt danach → Adverb', 'Lektion 10'],
        ['Präposition', 'nach der Lücke steht eine Nominalphrase; ihr Kasus filtert die Kandidaten', 'Lektion 9'],
        ['Nominalisierung', 'vor der Lücke Artikel oder Präposition, nach der Lücke oft ein Genitiv', 'Lektion 3'],
        ['Kollokationsverb', 'ein Nomen im Satz „wartet“ auf sein festes Verb (*Kritik üben, Maßnahmen ergreifen*)', 'Lektion 15'],
        ['Adverb / Partikel', 'der Satz ist grammatisch komplett; die Lücke steuert nur die Nuance (*jedoch, zunehmend, kaum*)', 'Lektion 10'],
      ],
    },

    {
      type: 'prose',
      card: true,
      titel: 'Die typischen Fallen — und die spanische Interferenz',
      absaetze: [
        'Die Liste enthält fast immer **zwei Wörter derselben Wortart mit ähnlicher Bedeutung** — etwa *trotzdem* und *obwohl*. Beide sind konzessiv; aber *obwohl* schickt das Verb ans Satzende, *trotzdem* nicht. Wer nur die Bedeutung prüft, tappt hinein; wer die Verbstellung prüft, nicht. Zweite Falle: Ein Wort **passt semantisch, aber die Rektion ist falsch** — *teilnehmen* verlangt *an*, *sich interessieren* verlangt *für*; steht die falsche Präposition im Satz, ist der Kandidat raus.',
        'Für Hispanohablantes lauert die Interferenz bei den Präpositionen: *asistir a* verführt zu einem falschen __zu__ statt __an + Dativ__ (*an einer Konferenz teilnehmen*), *soñar con* zu einem falschen __mit__ statt __von__ (*von etwas träumen*), *interesarse por* zu __über__ oder __por__-Kalques statt __für__. ~~No traduzcas la preposición: apréndela como parte del verbo, igual que hiciste en la Lektion 9.~~',
      ],
    },

    { type: 'rule' },

    // ── 5. Beispiele ──────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele — nach Lückentyp',
      kicker: 'Konnektor',
      titel: 'Die Verbstellung verrät die Lösung',
      items: [
        { text: '*[ … ] die Kosten stiegen, hielt die Stadt am Projekt fest.* — Das Verb *stiegen* steht am Ende des ersten Teilsatzes → Subjunktion: **Obwohl**. *Dennoch* wäre semantisch gleich, ist aber grammatisch unmöglich.', gl: '' },
        { text: '*Die Studie ist klein; [ … ] liefert sie wertvolle Hinweise.* — Nach der Lücke folgt sofort das Verb *liefert* → Konnektor auf Position 1: **dennoch** / **gleichwohl**.', gl: '— la posición del verbo decide antes que el significado' },
        { text: '*Die Nachfrage sank, [ … ] die Preise gestiegen waren.* — Verb am Ende, Bedeutung kausal mit Vergangenheitsbezug: **weil** / **da**.', gl: '' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'Präposition',
      titel: 'Der Kasus filtert die Kandidaten',
      items: [
        { text: '*[ … ] des schlechten Wetters fand das Festival statt.* — Genitiv nach der Lücke → nur Genitivpräpositionen kommen infrage; konzessive Bedeutung → **Trotz** (nicht *wegen*: das Festival fand ja statt).', gl: '' },
        { text: '*Immer mehr Beschäftigte nehmen [ … ] Weiterbildungen teil.* — *teilnehmen* verlangt **an** + Dativ. Die Rektion des Verbs entscheidet, nicht das Gefühl.', gl: '' },
        { text: '*[ … ] der Digitalisierung sind viele Abläufe schneller geworden.* — Genitiv + kausale Logik: **Infolge** / **Aufgrund**. *Durch* scheitert am Kasus: Es verlangt den Akkusativ.', gl: '' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'Nominalisierung',
      titel: 'Artikel und Genitiv als Indizien',
      items: [
        { text: '*Nach der [ … ] des Gesetzes gingen die Beschwerden zurück.* — Artikel *der* (feminin) + Genitiv danach → Nominalisierung auf *-ung*: **Verabschiedung** / **Einführung**.', gl: '' },
        { text: '*Bei [ … ] aller Unterlagen wird der Antrag bearbeitet.* — *bei* + Nominalisierung + Genitiv: **Vorliegen** — das Muster aus Lektion 3 in Reinform.', gl: '' },
        { text: '*Der [ … ] der Verkaufszahlen beunruhigt die Branche.* — Maskuliner Artikel + Genitiv: **Rückgang**. *Abnahme* wäre semantisch denkbar, scheitert aber am Artikel *der*.', gl: '~~El artículo delante del hueco elimina candidatos: úsalo siempre.~~' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'Kollokation',
      titel: 'Das Nomen wartet auf sein Verb',
      items: [
        { text: '*Die Kommission hat scharfe Kritik an dem Vorhaben [ … ].* — *Kritik* + **geübt**. *Gemacht* oder *gesagt* sind auf C1 keine Optionen.', gl: '' },
        { text: '*Erneuerbare Energien spielen eine zentrale [ … ].* — *eine Rolle* **spielen** — die Kollokation ist fest; kein anderes Nomen der Liste verbindet sich mit *spielen*.', gl: '' },
        { text: '*Die Regierung hat Maßnahmen [ … ], um die Inflation zu bremsen.* — *Maßnahmen* + **ergriffen**. Kollokationswissen ersetzt hier jede Grammatikanalyse.', gl: '' },
      ],
    },

    { type: 'rule' },

    // ── 6. Übungen ────────────────────────────────────────────────
    {
      type: 'uebung',
      eyebrow: 'Anwendung — Übung 1 · Erkennen',
      frage: 'Klassifiziere die Lücke [ … ] grammatisch, bevor du an ein konkretes Wort denkst: Welche Wortart fehlt, und welches Indiz im Satz beweist es?',
      aufgaben: [
        'Die Zahl der Studierenden ist [ … ] gestiegen, obwohl die Mieten in den Universitätsstädten steigen.',
        '[ … ] der hohen Nachfrage wurden zusätzliche Kurse eingerichtet.',
        'Das Unternehmen hat auf die Vorwürfe bislang nicht [ … ].',
        'Viele Kommunen setzen [ … ] auf digitale Bürgerdienste, sondern auch auf persönliche Beratung.',
        'Die [ … ] neuer Software erfordert Schulungen für das gesamte Personal.',
      ],
      loesungen: [
        '**Adverb** — der Satz ist grammatisch vollständig (*ist gestiegen*); die Lücke steuert eine Nuance: *deutlich, stetig, zuletzt*.',
        '**Präposition (+ Genitiv)** — nach der Lücke steht *der hohen Nachfrage* im Genitiv; kausale Logik: *aufgrund, wegen, infolge*.',
        '**Partizip II eines Verbs** — *hat … nicht [ … ]* verlangt ein Partizip; die Rektion *auf + Akkusativ* passt zu *reagiert*.',
        '**Konnektor (zweiteilig)** — das spätere *sondern auch* beweist **nicht nur**: Zweiteilige Konnektoren erkennst du an ihrem Partner im Satz.',
        '**Nominalisierung (feminin)** — Artikel *die* + Objekt im Genitivmuster: *die Einführung neuer Software*.',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 2 · Anwenden',
      frage: 'Zwei Kandidaten, eine Lücke: Entscheide dich und begründe grammatisch oder über die Kollokation — nicht nur über das Gefühl.',
      aufgaben: [
        '*[ Obwohl / Dennoch ] die Ergebnisse vorläufig sind, sorgen sie für Diskussionen.*',
        '*[ Trotz / Wegen ] der Proteste hielt der Stadtrat an dem Bauprojekt fest.*',
        '*Das Institut hat eine umfassende Studie [ durchgeführt / gemacht ].*',
        '*Immer mehr Firmen interessieren sich [ für / an ] flexible Arbeitsmodelle.*',
        '*Die Debatte hat an Schärfe [ gewonnen / bekommen ].*',
      ],
      loesungen: [
        '**Obwohl** — das Verb *sind* steht am Ende des Nebensatzes; nach *dennoch* müsste es direkt folgen (*Dennoch sorgen sie …*).',
        '**Trotz** — die Logik ist konzessiv: Die Proteste sprachen *gegen* das Projekt, der Rat hielt daran fest. *Wegen* würde die Kausalität umkehren.',
        '**durchgeführt** — *eine Studie durchführen* ist die C1-Kollokation; *machen* ist auf diesem Niveau ein Registerfehler.',
        '**für** — *sich interessieren für* + Akkusativ. ~~Interferencia clásica: «interesarse por» empuja hacia una preposición falsa.~~',
        '**gewonnen** — *an etwas gewinnen / verlieren* (an Bedeutung, an Schärfe) ist ein festes Muster mit Dativ.',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 3 · Produzieren',
      frage: 'Der komplette Durchlauf mit der Fünf-Schritte-Methode, Zeitlimit **8 Minuten**: Lies den Text, klassifiziere jede Lücke [1]-[8], filtere die Liste, entscheide. Wortliste (zwei Wörter bleiben übrig): **allerdings · an · Begrünung · beitragen · ergriffen · infolge · obwohl · steht · trotz · zur**',
      aufgabe: '*Immer mehr Städte setzen auf die [1] von Dächern und Fassaden, um sich an den Klimawandel anzupassen. [2] steigender Sommertemperaturen heizen sich dicht bebaute Viertel besonders stark auf; begrünte Flächen können [3] Senkung der Temperatur messbar [4]. Zahlreiche Kommunen haben deshalb Maßnahmen [5] und Förderprogramme aufgelegt, die Hausbesitzer bei der Umgestaltung unterstützen. [6] die Vorteile gut belegt sind, kommt die Umsetzung vielerorts nur langsam voran. Das liegt [7] nicht nur am Geld: Vielen Eigentümern fehlt schlicht die Information, welche Unterstützung ihnen zur Verfügung [8].*',
      loesung: '**Lösung mit Begründung** (übrig bleiben *an* und *trotz*):\n[1] **Begrünung** — Artikel *die* + Anschluss *von Dächern*: Es fehlt eine feminine Nominalisierung.\n[2] **Infolge** — Genitiv nach der Lücke (*steigender Sommertemperaturen*) + kausale Logik. *Trotz* scheitert am Sinn: Die Hitze ist ja die Ursache.\n[3] **zur** — die Rektion von *beitragen* verlangt *zu*: *zur Senkung beitragen*.\n[4] **beitragen** — Infinitiv nach *können*; bildet mit [3] das feste Paar *zu etwas beitragen*.\n[5] **ergriffen** — Kollokation *Maßnahmen ergreifen*; grammatisch war ein Partizip nach *haben* gefordert.\n[6] **Obwohl** — das Verb *sind* steht am Ende des Nebensatzes → Subjunktion. *Allerdings* würde das Verb direkt nach sich verlangen.\n[7] **allerdings** — Adverb; der Satz ist grammatisch komplett, die Lücke steuert nur die einschränkende Nuance.\n[8] **steht** — die Wendung *jemandem zur Verfügung stehen*; im Nebensatz mit *welche* wandert das Verb ans Ende.\n~~Fíjate en cómo [3] y [4] se resuelven en pareja: en cuanto reconoces *beitragen*, la preposición viene sola. Y el Restcheck final: cuenta — ocho huecos, ocho palabras usadas, dos sobrantes (*an*, *trotz*). Si una palabra te sale dos veces, hay un error anterior.~~',
    },

    { type: 'rule' },

    // ── 7. Prüfungsbezug ──────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Lesen · Teil 2 · Lückentext',
      titel: 'Aufgabe im Prüfungsformat · 8 Lücken · 10 Minuten',
      anweisung: 'Lesen Sie den Text und wählen Sie für jede Lücke das passende Wort aus der Liste. Zwei Wörter bleiben übrig. Arbeiten Sie nach der Methode: erst lesen, dann klassifizieren, dann filtern.',
      absaetze: [
        'Lebenslanges Lernen galt lange als Schlagwort aus Sonntagsreden — inzwischen ist es {1} des digitalen Wandels zu einer handfesten Notwendigkeit geworden. Wer heute eine Ausbildung abschließt, wird im Laufe des Berufslebens mehrfach umlernen müssen, {2} ganze Tätigkeitsfelder durch Automatisierung verschwinden oder sich grundlegend verändern. Doch viele Beschäftigte stehen dieser Aussicht {3} skeptisch gegenüber: Sie fürchten weniger das Lernen selbst als die Doppelbelastung aus Beruf und Weiterbildung. Unternehmen tragen hier eine Mitverantwortung. Wer von seinen Mitarbeitern Flexibilität erwartet, muss ihnen auch Zeit und Mittel {4} Verfügung stellen. Einige Betriebe haben bereits Konsequenzen {5} und feste Lernzeiten während der Arbeitswoche eingeführt. Die {6} solcher Modelle zeigt, dass sich die Investition rechnet: Die Produktivität steigt, und die Fluktuation sinkt. {7} bleibt die Frage, wie kleinere Firmen ohne eigene Weiterbildungsabteilung mithalten sollen — {8} sie beschäftigen die Mehrheit aller Arbeitnehmer.',
      ],
      optionen: ['Auswertung', 'da', 'denn', 'dennoch', 'gezogen', 'infolge', 'obwohl', 'trotz', 'zur', 'zunehmend'],
      loesungen: [
        '{1} **infolge** — Genitiv (*des digitalen Wandels*) + kausale Logik; *trotz* würde die Aussage ins Absurde kehren.',
        '{2} **da** — das Verb steht am Satzende (*verschwinden … verändern*) → Subjunktion; kausale Bedeutung. *Denn* scheitert an der Verbstellung.',
        '{3} **zunehmend** — Adverb, der Satz ist komplett (*stehen … gegenüber*); die Nuance „mehr und mehr“ passt zur Entwicklung. *Dennoch* scheidet aus: Neben dem adversativen *Doch* am Satzanfang wäre es redundant.',
        '{4} **zur** — feste Wendung *jemandem etwas zur Verfügung stellen*; die Kollokation entscheidet in einer Sekunde.',
        '{5} **gezogen** — Kollokation *Konsequenzen ziehen*; ein Partizip nach *haben* war grammatisch gefordert.',
        '{6} **Auswertung** — Artikel *die* + Genitiv (*solcher Modelle*): Nominalisierung auf *-ung*.',
        '{7} **Dennoch** — Adverb mit Verb direkt danach (*bleibt*); es räumt die positive Bilanz des Vorsatzes ein und leitet die offene Frage ein. *Obwohl* würde das Verb ans Satzende schicken und ist damit grammatisch unmöglich.',
        '{8} **denn** — nach der Lücke steht das Verb auf Position 2 (*sie beschäftigen*) → Konjunktion, keine Subjunktion; *da* ist bereits vergeben, *obwohl* passt semantisch nicht. Übrig bleiben **trotz** und **obwohl**.',
      ],
      kommentar: 'Sieh dir an, wie {7} und {8} sich gegenseitig lösen: Das Ausschlussverfahren arbeitet für dich, wenn du die sicheren Lücken zuerst vergibst. Und zähle am Schluss nach — jedes Wort der Liste darf nur einmal verwendet werden, zwei müssen übrig bleiben.',
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Trainiere für Teil 2 einen **Dreisekundenblick**: Verb am Ende? Genitiv nach der Lücke? Fester Partner im Satz (*nicht nur, zur Verfügung, Konsequenzen*)? Wer diese drei Fragen automatisiert hat, braucht pro Lücke unter einer Minute — und der ganze Teil kostet zehn. Die gesparte Zeit gehört Teil 1.',
    },

    { type: 'rule' },

    // ── 8. Abschluss ──────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Das bleibt', 'Konkret'],
      zeilen: [
        ['Grammatik vor Bedeutung', 'erst Wortart, Kasus, Verbstellung — dann Inhalt'],
        ['Verbstellung entscheidet bei Konnektoren', 'Verb am Ende → obwohl/da · Verb danach → dennoch/jedoch'],
        ['Kasus entscheidet bei Präpositionen', 'Genitiv nach der Lücke → trotz, infolge, aufgrund'],
        ['Kollokationen schlagen Einzelwörter', 'Kritik üben · Konsequenzen ziehen · zur Verfügung stehen'],
        ['Ausschlussverfahren + Restcheck', 'sichere Lücken zuerst; am Ende flüssig gegenlesen'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich weiß, dass Teil 2 Konnektoren, Präpositionen, Nominalisierungen und Kollokationen testet — und wo ich sie in diesem Kurs gelernt habe.',
        'Ich klassifiziere jede Lücke grammatisch, bevor ich über die Bedeutung nachdenke.',
        'Ich filtere die Wortliste über Wortart, Kasus und Verbstellung auf zwei bis drei Kandidaten.',
        'Ich löse einen kompletten Lückentext in zehn Minuten und mache am Ende den Restcheck.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Im Lückentext fehlen Wörter — im nächsten Teil fehlen **ganze Sätze**. Die Satzeinsetzung prüft, ob du die unsichtbaren Fäden eines Textes siehst: Pronomen, Konnektoren, bestimmte Artikel, Themenprogression. In der nächsten Lektion lernst du, diese Kohäsionssignale zu lesen wie eine Landkarte.',
    },
  ],
}
