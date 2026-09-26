// Lektion 12 · Relativsätze komplex

export default {
  spec: ['Bloque 1', 'Sprachliche Konsolidierung', 'Niveau C1', 'Prüfungsrelevanz: Lesen Teil 1-2 · Schreiben'],
  h1: 'Relativsätze komplex',
  lead: 'Dessen und deren, worauf und wobei, wer und was: die Relativstrukturen, die dichte C1-Texte tragen — und ihre elegante Alternative, das Partizipialattribut.',

  content: [
    // ── 2. Lernziele ──────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'Am Ende kannst du Genitiv-Relativsätze mit *dessen/deren* bilden — auch nach Präposition (*an dessen Ende*, *mit deren Hilfe*).',
        'Du wählst korrekt zwischen Präposition + Relativpronomen (*mit dem*) und *wo(r)*-Formen (*womit*), je nach Bezugswort.',
        'Du verwendest *was* nach *alles, etwas, nichts* und nach ganzen Sätzen sowie *wer* als freies Relativpronomen.',
        'Du erkennst, wann ein Partizipialattribut (Lektion 7) den Relativsatz eleganter ersetzt — und formst in beide Richtungen um.',
      ],
    },

    { type: 'rule' },

    // ── 3. Kernwortschatz ─────────────────────────────────────────
    {
      type: 'wortschatz',
      eyebrow: 'Kernwortschatz',
      items: [
        { wort: 'das Bezugswort', kollokation: 'das Bezugswort des Relativpronomens', es: 'antecedente' },
        { wort: 'dessen / deren', kollokation: 'der Autor, dessen Werk preisgekrönt ist', es: 'cuyo/cuya' },
        { wort: 'wobei', kollokation: 'Er erläuterte den Plan, wobei er Details ausließ.', es: 'y al hacerlo; si bien' },
        { wort: 'wodurch', kollokation: 'Die Kosten sanken, wodurch Spielraum entstand.', es: 'por lo cual, con lo que' },
        { wort: 'woraufhin', kollokation: 'Der Skandal wurde publik, woraufhin er zurücktrat.', es: 'tras lo cual' },
        { wort: 'derjenige, der', kollokation: 'derjenige, der zuletzt geht', es: 'aquel que' },
        { wort: 'die Maßnahme', kollokation: 'eine Maßnahme ergreifen', es: 'medida' },
        { wort: 'der Sachverhalt', kollokation: 'einen Sachverhalt schildern', es: 'hechos, situación' },
        { wort: 'die Voraussetzung', kollokation: 'eine Voraussetzung erfüllen', es: 'requisito' },
        { wort: 'der Umstand', kollokation: 'ein Umstand, der zu denken gibt', es: 'circunstancia' },
        { wort: 'die Erkenntnis', kollokation: 'zu der Erkenntnis gelangen, dass …', es: 'conclusión, hallazgo' },
        { wort: 'verfügen über', kollokation: 'über Erfahrung verfügen', es: 'disponer de' },
        { wort: 'beruhen auf', kollokation: 'auf einem Missverständnis beruhen', es: 'basarse en' },
      ],
      hinweis: 'Relativsätze hängen an **Verben mit fester Präposition**: *verfügen über → die Mittel, **über die** die Stadt verfügt*. Wer die Verbpräpositionen nicht kennt, kann keinen komplexen Relativsatz bauen — wiederhole sie parallel zu dieser Lektion.',
    },

    { type: 'rule' },

    // ── 4. Erklärung ──────────────────────────────────────────────
    {
      type: 'prose',
      eyebrow: 'Erklärung',
      card: true,
      titel: 'Der Genitiv: dessen und deren',
      absaetze: [
        'Für „cuyo“ hat das Deutsche zwei Formen: **dessen** nach maskulinem und neutralem Bezugswort, **deren** nach femininem und pluralischem. Entscheidend ist eine Regel, die dem Spanischen genau entgegenläuft: *dessen/deren* richtet sich **nach dem Bezugswort davor**, nicht nach dem Nomen danach. ~~«Cuyo» concuerda con lo poseído (el autor cuya obra); dessen/deren concuerda con el poseedor (der Autor, dessen Werk). Es la interferencia central de esta lección.~~',
        'Also: *der Autor, **dessen** Romane* (Bezugswort maskulin — egal, dass *Romane* Plural ist), *die Firma, **deren** Gründer* (Bezugswort feminin — egal, dass *Gründer* maskulin ist). Nach *dessen/deren* folgt das Nomen **ohne Artikel**: *~dessen die Romane~* ist falsch.',
        'Elegant wird es mit **Präposition davor**: *ein Prozess, **an dessen Ende** eine Entscheidung steht*; *eine Methode, **mit deren Hilfe** man Zeit spart*. Die Präposition gehört zum folgenden Nomen, der Genitiv bleibt unverändert — diese Struktur ist ein Markenzeichen wissenschaftlicher Prosa.',
      ],
    },

    {
      type: 'steps',
      eyebrow: 'Erklärung — Relativanschluss mit Präposition',
      steps: [
        {
          badge: 'Präp. + Pron.',
          titel: 'Konkretes Bezugswort → Präposition + Relativpronomen',
          text: 'Bei Personen und konkreten Nomen: __der Kollege, **mit dem** ich das Projekt leite__; __die Frage, **über die** wir diskutieren__. Die Präposition liefert das Verb (*leiten mit*, *diskutieren über*), den Kasus bestimmt die Präposition.',
        },
        {
          badge: 'wo(r)-',
          titel: 'Unbestimmtes/neutrales Bezugswort → wo(r) + Präposition',
          text: 'Nach *alles, etwas, nichts, das* und ähnlich Unbestimmtem verschmilzt die Präposition: __alles, **worauf** es ankommt__; __etwas, **womit** niemand gerechnet hatte__. Vor Vokal tritt das -r- ein: wo**r**auf, wo**r**über, wo**r**an.',
        },
        {
          badge: 'Satzbezug',
          titel: 'Ganzer Satz als Bezugswort → was / wo(r)-',
          text: 'Bezieht sich der Relativsatz auf die **gesamte Aussage**, steht *was* oder eine wo(r)-Form: __Er sagte kurzfristig ab, **was** alle überraschte__; __Die Firma meldete Insolvenz an, **woraufhin** die Aktie einbrach__. Hier wäre *das* oder *die* falsch — es gibt ja kein einzelnes Nomen als Anker.',
        },
        {
          badge: 'wer',
          titel: 'Freier Relativsatz → wer (= derjenige, der)',
          text: 'Ohne Bezugswort, verallgemeinernd: __**Wer** die Prüfung bestehen will, muss planen.__ Im Hauptsatz nimmt *der* die Person wieder auf, wenn der Kasus wechselt: __**Wen** die Jury auswählt, **der** erhält das Stipendium.__',
        },
      ],
    },

    {
      type: 'tabelle',
      eyebrow: 'Erklärung — Welcher Anschluss wofür?',
      kopf: ['Bezugswort', 'Anschluss', 'Beispiel'],
      zeilen: [
        ['Person / konkretes Nomen', 'Präp. + der/die/das', 'der Partner, auf den wir zählen'],
        ['Genitivbesitz', 'dessen / deren', 'die Stadt, deren Haushalt defizitär ist'],
        ['Genitiv nach Präposition', 'Präp. + dessen/deren + Nomen', 'ein Vertrag, in dessen Anhang die Fristen stehen'],
        ['alles, etwas, nichts, das …', 'was / wo(r)+Präp.', 'nichts, wofür man sich schämen müsste'],
        ['ganzer Satz', 'was / wobei / wodurch / woraufhin', 'Der Kurs fiel aus, was viele ärgerte.'],
        ['kein Bezugswort (Person)', 'wer / wen / wem', 'Wer zu spät kommt, den bestraft das Leben.'],
      ],
    },

    {
      type: 'prose',
      card: true,
      titel: 'Die Alternative: das Partizipialattribut',
      absaetze: [
        'Aus Lektion 7 kennst du das erweiterte Partizipialattribut: __die **im letzten Jahr eingeführten** Regeln__ = *die Regeln, die im letzten Jahr eingeführt wurden*. Beide Formen sind korrekt; sie unterscheiden sich im **Register**. Der Relativsatz ist neutral und mündlich wie schriftlich möglich; das Partizipialattribut ist reine Schriftsprache und verdichtet stärker.',
        'Faustregel für dein Schreiben: **Kurze Zusatzinformation → Partizipialattribut** (*die steigenden Kosten*), **längere oder mehrgliedrige Information → Relativsatz** (*die Kosten, die seit Jahren schneller steigen als die Löhne*). Und niemals beides stapeln: Ein Satz mit zwei Partizipialattributen und zwei Relativsätzen ist keine C1-Leistung, sondern eine Zumutung für den Leser.',
      ],
    },

    { type: 'rule' },

    // ── 5. Beispiele ──────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele — nach Struktur',
      kicker: 'Genitiv',
      titel: 'dessen und deren',
      items: [
        { text: 'Der Konzern, **dessen** Gewinne sich verdoppelt haben, baut dennoch Stellen ab.', gl: '— Bezugswort maskulin → dessen, obwohl *Gewinne* Plural ist' },
        { text: 'Die Studie, **deren** Ergebnisse morgen erscheinen, sorgt schon jetzt für Debatten.' },
        { text: 'Forscher, **deren** Projekte gefördert werden, müssen jährlich berichten.', gl: '— Plural → deren' },
        { text: 'Ein Prozess, **an dessen Ende** ein Kompromiss stehen soll, braucht Zeit.', gl: '— Präposition + dessen: Kennzeichen der Wissenschaftssprache' },
        { text: 'Eine Software, **mit deren Hilfe** sich Texte automatisch prüfen lassen, spart Korrekturzeit.' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'Präposition',
      titel: 'Präposition + Pronomen vs. wo(r)-Form',
      items: [
        { text: 'Die Kollegin, **auf die** wir uns verlassen, kündigt zum Monatsende.', gl: '— Person → Präposition + Pronomen, nie *worauf*' },
        { text: 'Das Thema, **über das** am längsten gestritten wurde, fehlte am Ende im Protokoll.' },
        { text: 'Es gibt vieles, **worüber** wir noch sprechen müssen.', gl: '— unbestimmtes Bezugswort → wo(r)-Form' },
        { text: 'Das ist etwas, **womit** niemand gerechnet hatte.' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'Satzbezug',
      titel: 'was, wobei, woraufhin',
      items: [
        { text: 'Die Sitzung wurde um zwei Stunden verlängert, **was** niemanden freute.', gl: '— Bezug: der ganze vorangehende Satz' },
        { text: 'Das Unternehmen verlegte seinen Sitz ins Ausland, **wodurch** hunderte Arbeitsplätze wegfielen.' },
        { text: 'Der Minister widersprach dem Bericht, **woraufhin** die Zeitung ihre Quellen offenlegte.' },
        { text: 'Alles, **was** Sie einreichen, wird vertraulich behandelt. — Nichts, **was** hier gesagt wurde, verlässt den Raum.', gl: '— nach alles/nichts immer *was*' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'frei · Alternative',
      titel: 'wer und das Partizipialattribut',
      items: [
        { text: '**Wer** über gute Deutschkenntnisse **verfügt**, hat auf dem Arbeitsmarkt klare Vorteile.' },
        { text: '**Wem** die Entscheidung nicht passt, **der** kann Widerspruch einlegen.', gl: '— Kasuswechsel: wem (Dativ) → der (Nominativ)' },
        { text: 'Die Regeln, **die 2024 eingeführt wurden** → die **2024 eingeführten** Regeln.', gl: '— Relativsatz ↔ Partizipialattribut (Lektion 7)' },
        { text: 'Ein Antrag, **der den Anforderungen nicht entspricht** → ein **den Anforderungen nicht entsprechender** Antrag.', gl: '— Partizip I für Aktiv/Gleichzeitigkeit' },
      ],
    },

    { type: 'rule' },

    // ── 6. Mehr Beispiele ─────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Mehr Beispiele',
      titel: 'Relativanschlüsse mit dem Kernwortschatz',
      items: [
        { text: 'Die Stadt ergriff eine **Maßnahme**, **deren** Wirkung erst Jahre später sichtbar wurde.', gl: '— *eine Maßnahme ergreifen*; Bezugswort feminin → deren' },
        { text: 'Der Gutachter schilderte einen **Sachverhalt**, **an dessen** Richtigkeit niemand zweifelte.', gl: '— *zweifeln an* + dessen + Nomen' },
        { text: 'Die Behörde prüft, ob die **Voraussetzungen**, **von denen** die Förderung abhängt, erfüllt sind.', gl: '— *abhängen von* → von denen' },
        { text: 'Die Kommission gelangte zu der **Erkenntnis**, dass der Streit auf einem Missverständnis **beruhte**, **woraufhin** beide Seiten einlenkten.', gl: '— *woraufhin* bezieht sich auf den ganzen Satz' },
        { text: '**Wer** über langjährige Erfahrung **verfügt**, wird bei der Auswahl bevorzugt.', gl: '— freier Relativsatz ohne Bezugswort' },
        { text: 'Ein **Umstand**, **der** oft übersehen wird → ein oft **übersehener** Umstand.', gl: '— kurz und schriftsprachlich: Partizipialattribut' },
      ],
    },

    { type: 'rule' },

    // ── Modelltext ────────────────────────────────────────────────
    {
      type: 'modell',
      eyebrow: 'Modelltext — drei Relativstrukturen in zwei Sätzen',
      thema: 'Kurzporträt eines Unternehmens: Genitiv-Relativsatz, Satzbezug und freier Relativsatz',
      absaetze: [
        'Das Unternehmen, **dessen** Produkte in über fünfzig Ländern verkauft werden, hat seinen Hauptsitz überraschend verlegt, **was** in der Belegschaft für erhebliche Unruhe sorgte. **Wer** dort seit Jahren arbeitet, **der** fragt sich nun, wie sicher der eigene Arbeitsplatz noch ist.',
      ],
      annotationen: [
        { tag: 'Strukturen', text: 'Genitiv-Relativsatz (*dessen Produkte*), Satzbezug (*was* bezieht sich auf die ganze Verlegung), freier Relativsatz mit Wiederaufnahme (*Wer …, der …*).' },
        { tag: 'Varianten', text: 'Ebenso möglich: *woraufhin* statt *was* — und *deren* bei einem femininen Bezugswort (*die Firma, deren Produkte*). ~~Lo que no puede fallar: dessen/deren según el antecedente, no según el sustantivo siguiente.~~' },
      ],
    },

    { type: 'rule' },

    // ── 7. Prüfungsbezug ──────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Lesen · Teil 2 · Lückentext',
      titel: 'Mini-Aufgabe · 6 Lücken',
      anweisung: 'Relativanschlüsse gehören zu den beliebtesten Lücken in Teil 2, weil Bezugswort und Verbpräposition die Lösung eindeutig machen. Wähle für jede Lücke das passende Wort.',
      absaetze: [
        'Die Landesbibliothek, {1} Bestand mehr als vier Millionen Medien umfasst, sammelt alles, {2} im Bundesland veröffentlicht wird. Seit einigen Jahren gehören dazu auch digitale Publikationen, {3} sich die Sammelpraxis grundlegend verändert hat. Jeder Verlag, {4} Titel im Land erscheinen, ist zur Abgabe zweier Exemplare verpflichtet — eine Regel, {5} deren Einhaltung die Bibliothek genau achtet. {6} die Bestände nutzen möchte, benötigt lediglich einen Ausweis.',
      ],
      optionen: ['auf', 'deren', 'Wer', 'wodurch', 'was', 'dessen'],
      loesungen: [
        '{1} **deren** — Bezugswort *die Landesbibliothek* (feminin); das folgende *Bestand* (maskulin) ist irrelevant',
        '{2} **was** — nach *alles* steht immer *was*',
        '{3} **wodurch** — Bezug auf den ganzen vorangehenden Satz',
        '{4} **dessen** — Bezugswort *jeder Verlag* (maskulin); das pluralische *Titel* danach ist irrelevant',
        '{5} **auf** — *achten auf*: Präposition + deren + Nomen (*auf deren Einhaltung*)',
        '{6} **Wer** — freier Relativsatz ohne Bezugswort',
      ],
      kommentar: 'Strategie: Bei einer Lücke vor einem artikellosen Nomen prüfe zuerst, ob **dessen/deren** passt — und bestimme das Genus des **Bezugsworts davor**, nie des Nomens danach.',
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Im **Lesen** sind lange Sätze fast immer Relativ-Ketten: Unterstreiche Bezugswort und Pronomen, dann zerfällt der Satz von selbst. Im **Schreiben** hebt ein einziges *an dessen Ende* oder *mit deren Hilfe* dein Strukturen-Niveau spürbar — aber prüfe dreimal das Genus des Bezugsworts. Ein falsches *dessen* fällt Prüfern sofort auf, gerade weil die Struktur anspruchsvoll ist.',
    },

    { type: 'rule' },

    // ── 8. Abschluss ──────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Das bleibt', 'Beispiel'],
      zeilen: [
        ['dessen/deren richtet sich nach dem Bezugswort', 'der Autor, dessen Romane · die Firma, deren Gründer'],
        ['nach dessen/deren kein Artikel', 'dessen Bücher (nie: dessen die Bücher)'],
        ['Person → Präp. + Pronomen', 'die Kollegin, auf die ich zähle'],
        ['alles/etwas/nichts → was', 'nichts, was mich überrascht'],
        ['ganzer Satz → was/wodurch/woraufhin', 'Er sagte ab, was alle überraschte.'],
        ['kurz → Partizipialattribut, lang → Relativsatz', 'die 2024 eingeführten Regeln'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich bilde Genitiv-Relativsätze mit *dessen/deren* — auch mit Präposition (*an dessen Ende*).',
        'Ich unterscheide sicher zwischen *auf die* (Person/Konkretes) und *worauf* (Unbestimmtes/Satz).',
        'Ich verwende *was* nach *alles/etwas/nichts* und nach ganzen Sätzen sowie *wer* ohne Bezugswort.',
        'Ich kann einen Relativsatz in ein Partizipialattribut umformen und weiß, wann sich das lohnt.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Mit Konnektoren und Relativsätzen beherrschst du die Architektur des Satzes. Die nächste Lektion wechselt die Ebene: **Modalverben in subjektiver Bedeutung** — *er muss es gewusst haben*, *sie will davon nichts gehört haben*. Dieselben Verben, die du seit A1 kennst, drücken auf C1 Vermutungsgrade und Distanz aus — eine Schlüsselkompetenz für Hören und Lesen.',
    },
  ],
}
