// Lektion 18 · Lesen: Satzeinsetzung (Teil 3)

export default {
  spec: ['Bloque 2', 'Prüfungsstrategie', 'Niveau C1', 'Modul Lesen · Teil 3 · Satzeinsetzung'],
  h1: 'Lesen: Die Satzeinsetzung',
  lead: 'Aus einem Text wurden Sätze herausgeschnitten — du setzt sie zurück. Gewonnen wird dieser Teil nicht über den Inhalt, sondern über die unsichtbaren Fäden der Kohäsion.',

  content: [
    // ── 2. Lernziele ──────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'Am Ende erkennst du die vier großen Kohäsionssignale: Pronomen, Konnektoren, bestimmter Artikel mit Wiederaufnahme und Themenprogression.',
        'Du liest jeden herausgelösten Satz als Bündel von Voraussetzungen: Was muss davor stehen, was danach?',
        'Du entlarvst die klassische Falle — den Satz, der thematisch passt, aber kohäsiv nicht anschließt.',
        'Du löst eine komplette Satzeinsetzung mit Begründung für jede Entscheidung.',
      ],
    },

    { type: 'rule' },

    // ── 3. Kernwortschatz ─────────────────────────────────────────
    {
      type: 'wortschatz',
      eyebrow: 'Kernwortschatz — Die Sprache der Textkohärenz',
      items: [
        { wort: 'die Kohärenz', kollokation: 'die inhaltliche Kohärenz eines Textes', es: 'coherencia (lógica del contenido)' },
        { wort: 'die Kohäsion', kollokation: 'Kohäsion durch Pronomen und Konnektoren', es: 'cohesión (enlaces gramaticales)' },
        { wort: 'das Bezugswort', kollokation: 'das Bezugswort eines Pronomens finden', es: 'antecedente, referente' },
        { wort: 'verweisen auf', kollokation: 'das Pronomen verweist auf den Vorsatz', es: 'remitir a, referirse a' },
        { wort: 'die Wiederaufnahme', kollokation: 'die Wiederaufnahme durch ein Synonym', es: 'retoma (de un elemento ya mencionado)' },
        { wort: 'anknüpfen an', kollokation: 'an den vorigen Gedanken anknüpfen', es: 'enlazar con' },
        { wort: 'der Anschluss', kollokation: 'ein logischer Anschluss an den Vorsatz', es: 'conexión, enganche' },
        { wort: 'die Themenprogression', kollokation: 'die Themenprogression vom Bekannten zum Neuen', es: 'progresión temática' },
        { wort: 'der rote Faden', kollokation: 'dem roten Faden des Textes folgen', es: 'hilo conductor' },
        { wort: 'vorangehend', kollokation: 'der vorangehende Absatz', es: 'precedente' },
        { wort: 'nachfolgend', kollokation: 'der nachfolgende Satz', es: 'siguiente, posterior' },
        { wort: 'einschieben', kollokation: 'einen Satz in den Text einschieben', es: 'insertar, intercalar' },
        { wort: 'voraussetzen', kollokation: 'dieser Satz setzt eine Erwähnung voraus', es: 'presuponer' },
        { wort: 'stimmig', kollokation: 'ein stimmiger Übergang', es: 'congruente, que encaja' },
      ],
      hinweis: 'Halte **Kohärenz** und **Kohäsion** auseinander: Kohärenz ist die Logik der Gedanken, Kohäsion sind ihre sichtbaren Verbindungen — Pronomen, Artikel, Konnektoren. ==Teil 3 prüft die Kohäsion== — genau deshalb reicht „passt thematisch“ nie als Begründung.',
    },

    { type: 'rule' },

    // ── 4. Erklärung ──────────────────────────────────────────────
    {
      type: 'prose',
      eyebrow: 'Erklärung',
      card: true,
      titel: 'Was Teil 3 testet — und warum Inhalt allein nicht reicht',
      absaetze: [
        'In Teil 3 liest du einen Text, aus dem **ganze Sätze entfernt** wurden; die herausgelösten Sätze stehen — durchmischt und mit überzähligen Distraktoren — daneben. Da alle Sätze aus demselben Text stammen, passen **alle thematisch überall ungefähr**. Wer nach Inhalt zuordnet, ordnet also im Nebel. Entschieden wird über etwas anderes: über die **grammatischen Fäden**, mit denen jeder Satz an seine Nachbarn gebunden ist.',
        'Der Schlüsselgedanke: Ein herausgelöster Satz ist ein **Bündel von Voraussetzungen**. Ein *sie* verlangt ein feminines oder plurales Bezugswort im Satz davor. Ein *dennoch* verlangt einen Gegensatz davor. Ein *diese Bedenken* verlangt, dass vorher Bedenken geäußert wurden. Und der Satz **nach** der Lücke verrät genauso viel: Beginnt er mit *Dazu kommt …*, muss die Lücke etwas enthalten, zu dem noch etwas hinzukommen kann.',
      ],
    },

    {
      type: 'tabelle',
      eyebrow: 'Erklärung — Die vier Kohäsionssignale',
      kopf: ['Signal', 'Was es voraussetzt', 'Beispiel'],
      zeilen: [
        ['Pronomen & Demonstrativa (er, sie, es, dies, dabei, dazu)', 'ein Bezugswort mit passendem Genus/Numerus im Vorsatz', '*Sie* lehnt das ab → davor muss eine weibliche Person oder ein feminines Nomen stehen'],
        ['Konnektoren (dennoch, allerdings, deshalb, zudem)', 'eine bestimmte logische Richtung des Vorsatzes', '*dennoch* → davor ein Gegensatz; *deshalb* → davor eine Ursache; *zudem* → davor ein erstes Argument'],
        ['bestimmter Artikel & Wiederaufnahme', 'das Nomen (oder ein Synonym) wurde bereits eingeführt', '*der Vorschlag* → vorher muss jemand etwas vorgeschlagen haben, auch mit anderen Worten'],
        ['Themenprogression', 'Bekanntes steht vorn, Neues hinten — der Satz führt weiter, was der Vorsatz neu eingeführt hat', 'Vorsatz endet mit *… ein neues Verfahren.* → Anschlusssatz beginnt: *Dieses Verfahren …*'],
      ],
    },

    {
      type: 'steps',
      eyebrow: 'Erklärung — Die Methode in fünf Schritten',
      steps: [
        {
          titel: 'Text zuerst ohne die Sätze lesen',
          text: 'Ein zügiger Durchgang über den Lückentext: Thema, Aufbau, __Argumentationsrichtung jedes Absatzes__. Notiere dir an jeder Lücke in zwei Wörtern, was davor und danach passiert.',
        },
        {
          titel: 'Die Kandidatensätze markieren',
          text: 'Unterstreiche in jedem herausgelösten Satz die __Kohäsionssignale__: Pronomen und Demonstrativa, Konnektoren am Satzanfang, Nomen mit bestimmtem Artikel. Das ist die Inventur der Voraussetzungen.',
        },
        {
          titel: 'Lücke für Lücke: vorwärts und rückwärts prüfen',
          text: 'Ein Kandidat muss __zweifach__ passen: an den Satz davor (erfüllt der Vorsatz die Voraussetzungen?) und an den Satz danach (schließt der Folgesatz an den Kandidaten an?). Ein Satz, der nur in eine Richtung passt, ist meistens der Distraktor.',
        },
        {
          titel: 'Sichere Lücken zuerst, Ausschluss danach',
          text: 'Beginne mit den Lücken, deren Umgebung die stärksten Signale liefert. Jede vergebene Lösung __verkleinert das Feld__ — die schwierigste Lücke löst sich oft von selbst.',
        },
        {
          titel: 'Die Kontrolle: laut im Kopf gegenlesen',
          text: 'Lies den vervollständigten Absatz flüssig durch. Ein falsch eingesetzter Satz erzeugt fast immer einen hörbaren __Bruch im roten Faden__ — ein Pronomen ohne Referenz, ein *deshalb* ohne Ursache.',
        },
      ],
    },

    {
      type: 'prose',
      card: true,
      titel: 'Die klassische Falle — und die spanische Interferenz',
      absaetze: [
        'Der gefährlichste Distraktor ist der Satz, der **semantisch glänzt und kohäsiv scheitert**: Er spricht exakt über das Thema des Absatzes, wiederholt sogar dessen Schlüsselwörter — aber sein *diese Kritik* findet im Vorsatz keine Kritik, oder sein *folglich* steht nach einem Satz, der gar keine Ursache nennt. Die Prüfung baut diese Sätze absichtlich: Sie belohnen den, der Voraussetzungen prüft, und bestrafen den, der Wortübereinstimmungen zählt.',
        'Für Hispanohablantes kommt eine Interferenz dazu: Das Spanische lässt Subjektpronomen weg (*Llegó tarde*), das Deutsche nicht — und baut seine Kohäsion massiv auf genau diesen Pronomen und auf Demonstrativa wie *dies, dabei, damit* auf. ~~Entrena la pregunta refleja: cada *sie/es/dies* del candidato, ¿a qué palabra exacta del Vorsatz apunta? Si no puedes señalarla con el dedo, el candidato no encaja.~~',
      ],
    },

    { type: 'rule' },

    // ── 5. Beispiele ──────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele — nach Kohäsionssignal',
      kicker: 'Pronomen',
      titel: 'Das Bezugswort entscheidet',
      items: [
        { text: 'Vorsatz: *Die Universität hat eine neue Lernplattform eingeführt.* → Anschluss: *==Sie== soll vor allem berufstätigen Studierenden entgegenkommen.* — *Sie* = die Plattform (feminin, Singular).', gl: '' },
        { text: 'Kandidat: *==Dabei== zeigte sich ein unerwartetes Problem.* — *dabei* verlangt einen Vorgang im Vorsatz (eine Untersuchung, ein Test, eine Umstellung), kein bloßes Objekt.', gl: '' },
        { text: 'Kandidat: *==Diese== halten viele Fachleute für überzogen.* — *diese* (Plural) braucht ein Bezugswort im Plural direkt davor: Erwartungen, Forderungen, Zahlen.', gl: '~~Si el Vorsatz solo ofrece un singular, este candidato queda descartado — sin discusión semántica.~~' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'Konnektor',
      titel: 'Die logische Richtung des Vorsatzes',
      items: [
        { text: 'Kandidat beginnt mit *==Dennoch== …* → Der Vorsatz muss etwas Positives oder ein starkes Argument enthalten, dem der Kandidat trotzt.', gl: '' },
        { text: 'Kandidat beginnt mit *==Deshalb== …* → Der Vorsatz muss eine Ursache liefern; steht dort selbst schon eine Folge, entsteht eine Doppelfolge — der Kandidat fällt raus.', gl: '' },
        { text: 'Kandidat beginnt mit *==Zudem== …* → Davor muss bereits ein gleichgerichtetes Argument stehen; *zudem* als erstes Argument einer Reihe ist unmöglich.', gl: '' },
        { text: 'Der Satz **nach** der Lücke beginnt mit *Ein weiterer Einwand …* → In der Lücke muss also ein **erster** Einwand stehen — der Folgesatz beweist rückwärts.', gl: '' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'Artikel & Wiederaufnahme',
      titel: 'Bestimmt heißt: schon bekannt',
      items: [
        { text: 'Kandidat: *==Das Verbot== stieß auf breite Zustimmung.* — Der bestimmte Artikel setzt voraus, dass vorher etwas verboten wurde — auch in anderen Worten (*untersagen, nicht mehr erlauben*).', gl: '' },
        { text: 'Vorsatz: *Die Stadt will Laubbläser aus Wohngebieten verbannen.* → Kandidat: *==Das Vorhaben== ist umstritten.* — *Vorhaben* nimmt den ganzen Plan als Synonym wieder auf.', gl: '— la retoma casi nunca repite la palabra: busca sinónimos y hiperónimos' },
        { text: 'Kandidat: *==Ein== solches Modell gibt es bislang nur in Skandinavien.* — Der unbestimmte Artikel + *solch* zeigt: Hier wird verglichen, nicht wiederaufgenommen; der Vorsatz muss ein Modell beschreiben.', gl: '' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'Progression',
      titel: 'Vom Bekannten zum Neuen',
      items: [
        { text: 'Vorsatz endet: *… setzt die Schule auf ==Tablets im Unterricht==.* → Stimmiger Anschluss: *==Diese Geräte== sind allerdings teuer in der Wartung.* — Das Neue von eben wird zum Bekannten von jetzt.', gl: '' },
        { text: 'Bruch der Progression: Vorsatz über Tablets, Kandidat beginnt: *Die Turnhalle wird ebenfalls saniert.* — Kein Faden, obwohl beides zur „Schule“ gehört: ==thematisch nah, kohäsiv beziehungslos==.', gl: '' },
        { text: 'Absatzanfang als Sonderfall: Ein Satz ohne jedes Rückverweissignal (*Ganz anders stellt sich die Lage in … dar.*) passt typischerweise an einen ==Absatzbeginn== — dort darf der Faden neu ansetzen.', gl: '' },
      ],
    },

    { type: 'rule' },

    // ── 6. Übungen ────────────────────────────────────────────────
    {
      type: 'uebung',
      eyebrow: 'Anwendung — Übung 1 · Erkennen',
      frage: 'Inventur der Voraussetzungen: Unterstreiche (gedanklich) die Kohäsionssignale des herausgelösten Satzes und formuliere, was im Text **davor** stehen muss.',
      aufgaben: [
        'Dennoch hält die Mehrheit der Befragten an dieser Gewohnheit fest.',
        'Sie warnen vor allem vor den langfristigen Folgen für die Innenstädte.',
        'Der Vergleich hinkt jedoch in einem entscheidenden Punkt.',
        'Dazu zählt etwa die Möglichkeit, Prüfungen online abzulegen.',
        'Ganz anders sieht es in ländlichen Regionen aus.',
      ],
      loesungen: [
        '*Dennoch* → davor ein Argument **gegen** die Gewohnheit; *dieser Gewohnheit* → die Gewohnheit muss bereits konkret benannt sein.',
        '*Sie warnen* → davor eine **Personengruppe im Plural** (Forscher, Händler, Kritiker), die als Warnende infrage kommt.',
        '*Der Vergleich* → davor muss tatsächlich **verglichen** worden sein (etwa: „X funktioniert wie Y“); *jedoch* kündigt die Einschränkung eines eben gemachten Punktes an.',
        '*Dazu zählt* → davor eine **Kategorie oder Aufzählung** (z. B. „digitale Angebote“), zu der das Beispiel gehören kann.',
        'Fast keine Rückverweise → der Satz eröffnet einen **Kontrast auf Absatzebene**; davor muss die Lage in Städten oder einem anderen Raum beschrieben sein.',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 2 · Anwenden',
      frage: 'Welcher der beiden Kandidaten gehört in die Lücke? Entscheide über die Kohäsion und benenne das Signal, an dem der andere scheitert.',
      aufgaben: [
        'Text: *Immer mehr Betriebe klagen über unbesetzte Ausbildungsplätze. [ … ] Die Gründe dafür sind vielfältig.* — Kandidat A: *Allein im Handwerk blieben zuletzt Zehntausende Stellen frei.* — Kandidat B: *Deshalb steigt die Zahl der Bewerbungen stetig.*',
        'Text: *Die Gemeinde hat ein Fahrverbot für den Marktplatz beschlossen. [ … ] Erst danach soll über eine dauerhafte Lösung entschieden werden.* — Kandidat A: *Die Regelung gilt zunächst für ein Jahr zur Probe.* — Kandidat B: *Viele Städte kämpfen mit zu viel Verkehr.*',
        'Text: *Kritiker bemängeln die hohen Kosten des Projekts. [ … ] Die Stadtverwaltung weist beide Vorwürfe zurück.* — Kandidat A: *Zudem bezweifeln sie den ökologischen Nutzen.* — Kandidat B: *Das Projekt wurde bereits 2019 angekündigt.*',
      ],
      loesungen: [
        '**A** — der Satz konkretisiert die Klage mit einer Zahl, und das ***dafür*** im Folgesatz (*die Gründe dafür*) findet in den unbesetzten Stellen seinen Bezug. B scheitert doppelt: *deshalb* ergibt nach einer Klage über **unbesetzte** Plätze keinen kausalen Sinn, und steigende Bewerbungen widersprechen dem Problem.',
        '**A** — *die Regelung* nimmt das Fahrverbot bestimmt wieder auf, und *erst danach* im Folgesatz braucht die Probezeit als Bezugspunkt. B ist die klassische Falle: thematisch passend, aber ohne jeden Faden zu *danach*.',
        '**A** — der Folgesatz spricht von *beiden Vorwürfen*: Es müssen also **zwei** sein — die Kosten plus der bezweifelte Nutzen; *zudem* reiht den zweiten an den ersten. B liefert keinen zweiten Vorwurf, das Zahlwort *beide* bliebe ohne Deckung.',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 3 · Produzieren',
      frage: 'Jetzt baust du die Brücke selbst: Schreibe für die Lücke einen passenden Verbindungssatz — mit mindestens **zwei** expliziten Kohäsionssignalen (Pronomen/Demonstrativum, Konnektor oder Wiederaufnahme).\n\n*Viele Museen experimentieren inzwischen mit virtuellen Rundgängen. [ … ] Ganz ersetzen lässt sich der Besuch vor Ort dadurch freilich nicht.*',
      loesung: '**Mögliche Lösung:** *Diese Angebote erreichen auch Menschen, die aus finanziellen oder gesundheitlichen Gründen nie ein Museum betreten würden.*\n**Warum sie funktioniert:** *Diese Angebote* nimmt die virtuellen Rundgänge als Synonym wieder auf (Wiederaufnahme + Demonstrativum); der Satz nennt einen Vorteil, an dem das *freilich nicht* des Folgesatzes seine Einschränkung festmachen kann — und *dadurch* im Folgesatz findet in den Angeboten sein Bezugswort.\n~~Otras variantes válidas: cualquier frase que (1) retome los recorridos virtuales con *sie/diese/solche Formate* y (2) aporte algo positivo que el *freilich nicht* pueda limitar. Inválida sería una frase sobre precios de entradas: tema cercano, cohesión cero.~~',
    },

    { type: 'rule' },

    // ── 7. Prüfungsbezug ──────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Lesen · Teil 3 · Satzeinsetzung',
      titel: 'Aufgabe im Prüfungsformat · 4 Lücken, 6 Sätze · 15 Minuten',
      anweisung: 'Lesen Sie den Text und setzen Sie die Sätze a-f in die Lücken {1}-{4} ein. Zwei Sätze bleiben übrig. Begründen Sie jede Entscheidung mit einem Kohäsionssignal — im Training laut, in der Prüfung im Kopf.',
      absaetze: [
        'Die Ganztagsschule galt lange als Königsweg zu mehr Bildungsgerechtigkeit. Kinder, deren Eltern sich keine Nachhilfe leisten können, sollten am Nachmittag gefördert werden, statt allein vor dem Bildschirm zu sitzen. {1} Der Rechtsanspruch auf einen Ganztagsplatz, der schrittweise eingeführt wird, erhöht den Druck zusätzlich.',
        'Die Praxis ernüchtert vielerorts. {2} Ohne sie schrumpft der Nachmittag zur bloßen Betreuung: Hausaufgaben unter Aufsicht, dazu ein wechselndes Freizeitprogramm. Von gezielter Förderung, wie sie das Konzept verspricht, kann dann keine Rede sein.',
        'Dabei zeigen einzelne Schulen, was möglich wäre. {3} Solche Beispiele machen deutlich, dass nicht die Idee gescheitert ist, sondern ihre Ausstattung. {4} Andernfalls droht die Ganztagsschule zu einem Versprechen zu werden, das den Familien mehr zusagt, als der Staat halten kann.',
      ],
      optionen: [
        'a · Wer den Anspruch ernst meint, muss deshalb in Personal und Räume investieren, bevor er weitere Plätze verspricht.',
        'b · Entsprechend groß ist die Nachfrage: In vielen Städten übersteigen die Anmeldungen das Angebot bei Weitem.',
        'c · Auch das gemeinsame Mittagessen hat sich vielerorts bewährt.',
        'd · Es fehlt vor allem an qualifizierten Fachkräften für den Nachmittag.',
        'e · Dort verzahnen engagierte Teams Unterricht und Nachmittagsangebote so eng, dass schwächere Schüler messbar aufholen.',
        'f · Kritiker bezweifeln allerdings, dass Kinder überhaupt gefördert werden wollen.',
      ],
      loesungen: [
        '{1} **b** — *Entsprechend groß ist die Nachfrage* knüpft an die Erwartungen der Eltern an (Progression: Versprechen → Nachfrage), und der Folgesatz (*erhöht den Druck **zusätzlich***) braucht einen bereits bestehenden Druck — den liefert die Übernachfrage.',
        '{2} **d** — der Folgesatz beginnt mit *Ohne **sie***: Das Pronomen verlangt ein feminines oder plurales Bezugswort, das fehlen kann — *die Fachkräfte*. Kein anderer Kandidat liefert dieses Bezugswort.',
        '{3} **e** — *Dort* im Kandidaten verweist auf *einzelne Schulen* im Vorsatz, und *solche Beispiele* im Folgesatz nimmt die geschilderte Praxis wieder auf. Doppelt verankert — die sicherste Lücke.',
        '{4} **a** — *deshalb* zieht die Folgerung aus der Diagnose „Ausstattung gescheitert“, und *Andernfalls* im Folgesatz braucht genau diese Forderung als Bezugspunkt: Wenn **nicht** investiert wird, droht …',
      ],
      kommentar: 'Die Distraktoren: **c** ist die semantische Falle — Ganztagsschule, Mittagessen, klingt passend, aber kein *sie*, kein *dort*, kein *solche* im Umfeld findet darin einen Anker. **f** scheitert an der Logik: Ein *allerdings*-Einwand gegen den Förderwillen der Kinder hat im Argumentationsgang (Ausstattung!) keinen Platz. Beachte auch die Reihenfolge deiner Lösungen: {2} und {3} haben die stärksten Signale — wer dort beginnt, hat für {1} und {4} nur noch je zwei Kandidaten.',
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Prüfe jede Lücke **in beide Richtungen**: Der Kandidat muss den Vorsatz aufnehmen **und** dem Folgesatz das liefern, was der voraussetzt — ein *dafür*, ein *beide*, ein *danach* im Folgesatz ist oft der stärkste Beweis. Und misstraue dem Satz, der die meisten Wörter des Absatzes wiederholt: ==Wortgleichheit ist Köder, Kohäsion ist Beleg==.',
    },

    { type: 'rule' },

    // ── 8. Abschluss ──────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Das bleibt', 'Konkret'],
      zeilen: [
        ['Jeder Satz ist ein Bündel von Voraussetzungen', 'sie/dies/dabei, dennoch/deshalb/zudem, der + Nomen'],
        ['Vier Signale', 'Pronomen · Konnektor · Artikel/Wiederaufnahme · Themenprogression'],
        ['In beide Richtungen prüfen', 'Vorsatz erfüllt die Voraussetzungen — Folgesatz schließt an'],
        ['Die Falle', 'thematisch passend, kohäsiv beziehungslos — Wortgleichheit ist Köder'],
        ['Reihenfolge', 'stärkste Signale zuerst; Ausschluss löst den Rest'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich unterstreiche in jedem herausgelösten Satz die Kohäsionssignale, bevor ich zuordne.',
        'Ich kann zu jedem Pronomen des Kandidaten das Bezugswort im Text mit dem Finger zeigen.',
        'Ich prüfe jede Lücke vorwärts und rückwärts — auch der Folgesatz muss anschließen.',
        'Ich erkenne den Distraktor, der thematisch passt, aber kohäsiv scheitert.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'In Teil 3 suchst du die Fäden **innerhalb** eines Textes — in Teil 4 vergleichst du **mehrere Texte** miteinander: Vier Autoren, eine Streitfrage, und du entscheidest, wer welche Aussage sinngemäß vertritt. Die nächste Lektion zeigt dir die Kunst der Paraphrase und die Sprache der Meinung: *befürworten, bezweifeln, einräumen*.',
    },
  ],
}
