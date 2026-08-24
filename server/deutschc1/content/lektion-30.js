// Lektion 30 · Themenfeld: Umwelt & Klimawandel
//
// Bloque 3 «Themenfelder» — Energiewende, erneuerbare Energien, Verkehrswende,
// Konsumverhalten, Klimapolitik (Verbote vs. Anreize).

export default {
  spec: ['Bloque 3', 'Themenfelder', 'Niveau C1', 'Prüfungsrelevanz: Schreiben Teil 1 · Sprechen Teil 2'],
  h1: 'Umwelt & Klimawandel',
  lead: 'Energiewende, Verkehrswende, Verbote oder Anreize: das Themenfeld, das in kaum einer C1-Prüfung fehlt — mit dem Wortschatz und den Argumenten der deutschen Klimadebatte.',

  content: [
    // ── 2. Lernziele ──────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'Am Ende kannst du die Grundbegriffe der deutschen Klimadebatte — Energiewende, Verkehrswende, CO₂-Bepreisung — sicher verwenden.',
        'Du beherrschst 14 Schlüsselwörter des Themenfelds mit ihren typischen Kollokationen.',
        'Du argumentierst differenziert in der Streitfrage „Verbote oder Anreize?“ und zwischen individueller und politischer Verantwortung.',
        'Du schreibst einen Diskussionsbeitrag zum Klimathema nach dem Format von Schreiben Teil 1.',
      ],
    },

    { type: 'rule' },

    // ── 3. Kernwortschatz ─────────────────────────────────────────
    {
      type: 'wortschatz',
      eyebrow: 'Kernwortschatz',
      items: [
        { wort: 'die Energiewende', kollokation: 'die Energiewende vorantreiben', es: 'transición energética' },
        { wort: 'die erneuerbaren Energien (Pl.)', kollokation: 'der Ausbau der erneuerbaren Energien', es: 'energías renovables' },
        { wort: 'der Ausstoß', kollokation: 'den Ausstoß von Treibhausgasen senken', es: 'emisión (de gases)' },
        { wort: 'die Nachhaltigkeit', kollokation: 'auf Nachhaltigkeit setzen', es: 'sostenibilidad' },
        { wort: 'das Konsumverhalten', kollokation: 'das eigene Konsumverhalten hinterfragen', es: 'hábitos de consumo' },
        { wort: 'die Verkehrswende', kollokation: 'die Verkehrswende einleiten', es: 'transición del modelo de transporte' },
        { wort: 'das Verbot', kollokation: 'ein Verbot verhängen bzw. lockern', es: 'prohibición' },
        { wort: 'der Anreiz', kollokation: 'finanzielle Anreize schaffen', es: 'incentivo' },
        { wort: 'die CO₂-Bepreisung', kollokation: 'eine wirksame CO₂-Bepreisung einführen', es: 'fijación de precio al CO₂' },
        { wort: 'der Verzicht', kollokation: 'der Verzicht auf Flugreisen', es: 'renuncia (a algo)' },
        { wort: 'die Maßnahme', kollokation: 'Maßnahmen ergreifen bzw. umsetzen', es: 'medida' },
        { wort: 'klimaneutral', kollokation: 'bis zu einem Stichjahr klimaneutral werden', es: 'climáticamente neutro' },
        { wort: 'die Ressource', kollokation: 'schonend mit Ressourcen umgehen', es: 'recurso (natural)' },
        { wort: 'zumutbar', kollokation: 'sozial zumutbare Klimapolitik', es: 'exigible, razonable (que se puede pedir)' },
      ],
      hinweis: 'Achtung, Genus: **die Umwelt** ist feminin ~~aunque «el medio ambiente» sea masculino — el calco *der Umwelt* como nominativo es un error típico de hispanohablantes~~. Und merke dir die Präpositionen: *der Verzicht **auf** + Akk.*, *der Ausstoß **von** + Dat.*',
    },

    { type: 'rule' },

    // ── 4. Erklärung ──────────────────────────────────────────────
    {
      type: 'prose',
      eyebrow: 'Erklärung',
      card: true,
      titel: 'Die deutsche Klimadebatte — das Spielfeld',
      absaetze: [
        'Deutschland hat sich mit dem __Bundes-Klimaschutzgesetz__ verpflichtet, klimaneutral zu werden, und international das __Pariser Klimaabkommen__ unterzeichnet. Bemerkenswert für jede Diskussion: Das __Bundesverfassungsgericht__ hat in seinem Klimabeschluss festgestellt, dass unzureichender Klimaschutz die **Freiheitsrechte künftiger Generationen** verletzt — Klimapolitik ist damit auch eine Frage der Generationengerechtigkeit.',
        'Die zwei großen Baustellen heißen **Energiewende** — der Umstieg von Kohle, Öl und Atomkraft auf erneuerbare Energien, gefördert seit dem __Erneuerbare-Energien-Gesetz (EEG)__ — und **Verkehrswende**: weniger Autoverkehr, mehr Bahn, Rad und öffentlicher Nahverkehr. Dass ausgerechnet das Autoland Deutschland als eines der wenigen Länder **kein generelles Tempolimit** auf Autobahnen kennt, ist der Klassiker unter den Diskussionsthemen.',
      ],
    },

    {
      type: 'steps',
      eyebrow: 'Erklärung — Die Streitfrage: Verbote oder Anreize?',
      steps: [
        {
          badge: 'Verbote',
          titel: 'Ordnungsrecht: verbieten und vorschreiben',
          text: 'Beispiele: Tempolimit, Verbrenner-Aus, Werbeverbote. **Pro:** Verbote wirken sofort, gelten für alle und sind sozial gerecht, weil sie nicht vom Geldbeutel abhängen. **Contra:** Sie greifen in die Freiheit ein, erzeugen Widerstand und laden zum Ausweichen ein — Stichwort **Verbotspolitik**.',
        },
        {
          badge: 'Anreize',
          titel: 'Marktinstrumente: belohnen und bepreisen',
          text: 'Beispiele: CO₂-Bepreisung, Kaufprämien, vergünstigte Nahverkehrstickets. **Pro:** Sie lassen die Wahl beim Einzelnen und lenken über den Preis dorthin, wo Vermeidung am günstigsten ist. **Contra:** Sie wirken langsam und belasten Geringverdiener stärker — es sei denn, die Einnahmen werden als **Klimageld** zurückverteilt.',
        },
        {
          badge: 'Ebenen',
          titel: 'Individuum oder System?',
          text: 'Die zweite Konfliktlinie: Reicht es, wenn jeder sein __Konsumverhalten__ ändert — weniger fliegen, weniger Fleisch, regional einkaufen —, oder ist das eine Verschiebung der Verantwortung? Die C1-Antwort ist fast immer die vermittelnde: Individueller **Verzicht** ist glaubwürdig, aber ohne strukturelle **Maßnahmen** bleibt er ein Tropfen auf den heißen Stein.',
        },
      ],
    },

    {
      type: 'tabelle',
      eyebrow: 'Erklärung — Konzepte im Überblick',
      kopf: ['Begriff', 'Was dahintersteckt'],
      zeilen: [
        ['Energiewende', 'Ausstieg aus Kohle und Atomkraft, Ausbau von Wind- und Solarenergie'],
        ['Verkehrswende', 'Vorrang für Bahn, Rad und ÖPNV statt Auto und Kurzstreckenflug'],
        ['CO₂-Bepreisung', 'Emissionen bekommen einen Preis — Vermeidung wird wirtschaftlich attraktiv'],
        ['Klimabeschluss', 'Bundesverfassungsgericht: Klimaschutz schützt die Freiheit künftiger Generationen'],
        ['Pariser Abkommen', 'völkerrechtliches Ziel, die Erderwärmung deutlich zu begrenzen'],
      ],
    },

    { type: 'rule' },

    // ── 5. Beispiele ──────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele — Sätze zum Übernehmen',
      kicker: 'Energie & Verkehr',
      titel: 'Über die großen Wenden sprechen',
      items: [
        { text: 'Der zügige **Ausbau der erneuerbaren Energien** gilt als Schlüssel dazu, die Abhängigkeit von fossilen Brennstoffen zu verringern.' },
        { text: 'Ohne eine konsequente **Verkehrswende** — also massive Investitionen in Bahn und Nahverkehr — bleiben die Klimaziele im Verkehrssektor unerreichbar.', gl: '— *also* + reformulación: técnica C1 para definir un término sobre la marcha' },
        { text: 'Dass Deutschland als eines der wenigen Länder auf ein generelles **Tempolimit** verzichtet, stößt international auf Unverständnis.', gl: '— *auf Unverständnis stoßen*: colocación periodística' },
        { text: 'Wer den **Ausstoß** von Treibhausgasen wirksam senken will, kommt um den Verkehrs- und den Gebäudesektor nicht herum.' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'Politik',
      titel: 'Verbote, Anreize, Gerechtigkeit',
      items: [
        { text: 'Kritiker sprechen schnell von **Verbotspolitik**; dabei zeigt gerade das Ordnungsrecht, dass klare Regeln oft schneller wirken als jeder Appell.' },
        { text: 'Eine **CO₂-Bepreisung** entfaltet ihre Lenkungswirkung nur dann, wenn der Preis spürbar ist und die Einnahmen sozial gerecht zurückverteilt werden.', gl: '— *die Lenkungswirkung entfalten*: léxico de política climática' },
        { text: 'Klimapolitik muss **sozial zumutbar** bleiben, sonst verliert sie die Zustimmung derjenigen, die sie am stärksten trifft.' },
        { text: 'Finanzielle **Anreize** wie vergünstigte Nahverkehrstickets senken die Hürde, das eigene Verhalten tatsächlich zu ändern.' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'Konsum',
      titel: 'Individuelle Verantwortung',
      items: [
        { text: 'Der **Verzicht auf** Kurzstreckenflüge ist ein sichtbares Zeichen — an den Gesamtemissionen ändert er allerdings nur wenig.', gl: '— *der Verzicht auf + Akk.*: no calques «renunciar a» con Dativ' },
        { text: 'Wer sein **Konsumverhalten** ernsthaft hinterfragt, stellt schnell fest, dass die nachhaltige Wahl oft die teurere ist.' },
        { text: 'Die Verantwortung allein auf den Einzelnen abzuwälzen, lenkt von den strukturellen Ursachen der Erderwärmung ab.', gl: '— *die Verantwortung abwälzen auf*: fórmula clave del debate' },
        { text: 'Nachhaltiger Konsum darf kein Privileg derjenigen sein, die ihn sich leisten können.' },
      ],
    },

    {
      type: 'redemittel',
      eyebrow: 'Redemittel — Meinung äußern im Themenfeld Klima',
      gruppen: [
        {
          fn: 'Dringlichkeit betonen',
          saetze: [
            { satz: 'Es lässt sich nicht von der Hand weisen, dass die bisherigen Maßnahmen hinter den selbst gesteckten Zielen zurückbleiben.' },
            { satz: 'Angesichts der wissenschaftlichen Befunde erscheint mir Abwarten keine vertretbare Option zu sein.' },
          ],
        },
        {
          fn: 'Abwägen und einräumen',
          saetze: [
            { satz: 'So wirksam Verbote im Einzelfall sein mögen, so sehr gefährden sie die gesellschaftliche Akzeptanz der Klimapolitik.' },
            { satz: 'Zwar liegt die Hauptverantwortung bei Politik und Industrie, doch entbindet uns das nicht von der eigenen.', gloss: '— *jemanden von etwas entbinden*: eximir a alguien de algo' },
          ],
        },
        {
          fn: 'Fordern und schließen',
          saetze: [
            { satz: 'Entscheidend ist meines Erachtens eine Kombination aus klaren Regeln und sozial gerechten Anreizen.' },
            { satz: 'Unterm Strich führt an einer ambitionierten Klimapolitik kein Weg vorbei — die Frage ist nur, wie sie gerecht gestaltet wird.' },
          ],
        },
      ],
    },

    { type: 'rule' },

    // ── 6. Übungen ────────────────────────────────────────────────
    {
      type: 'uebung',
      eyebrow: 'Anwendung — Übung 1 · Wortschatz & Kollokationen',
      frage: 'Ergänze das passende Wort aus dem Kernwortschatz. Achte auf die Kollokation.',
      aufgaben: [
        'den … von Treibhausgasen deutlich senken',
        'finanzielle … schaffen, statt alles zu verbieten',
        'die Energiewende entschlossen …',
        'der … auf das eigene Auto (Präposition!)',
        'wirksame Maßnahmen … und konsequent umsetzen',
        'schonend mit natürlichen … umgehen',
      ],
      loesungen: [
        'den **Ausstoß** von Treibhausgasen deutlich senken',
        'finanzielle **Anreize** schaffen, statt alles zu verbieten',
        'die Energiewende entschlossen **vorantreiben**',
        'der **Verzicht auf** das eigene Auto — *auf* + Akkusativ ~~no «Verzicht an»: interferencia típica de «renunciar a»~~',
        'wirksame Maßnahmen **ergreifen** und konsequent umsetzen',
        'schonend mit natürlichen **Ressourcen** umgehen',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 2 · Von B2 zu C1',
      frage: 'Forme die einfachen Sätze in C1-Sätze um. Nutze das angegebene Wort aus dem Kernwortschatz.',
      aufgaben: [
        'Wir sollten mehr Windräder und Solaranlagen bauen. (der Ausbau)',
        'Wenn CO₂ mehr kostet, verbrauchen die Leute weniger. (die CO₂-Bepreisung)',
        'Jeder sollte darüber nachdenken, was er kauft. (das Konsumverhalten)',
        'Die Politik darf arme Familien nicht überfordern. (zumutbar)',
        'Deutschland will irgendwann kein CO₂ mehr ausstoßen. (klimaneutral)',
      ],
      loesungen: [
        'Der **Ausbau** der erneuerbaren Energien muss deutlich beschleunigt werden.',
        'Eine wirksame **CO₂-Bepreisung** setzt Anreize, den eigenen Verbrauch zu senken. ~~Nominalización + verbo preciso: la receta B2→C1 de siempre.~~',
        'Jeder Einzelne ist gefordert, das eigene **Konsumverhalten** kritisch zu hinterfragen.',
        'Klimapolitik muss auch für einkommensschwache Haushalte **zumutbar** bleiben.',
        'Deutschland hat sich verpflichtet, **klimaneutral** zu werden.',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 3 · Produzieren',
      frage: 'Schreibe einen argumentativen Absatz (80-100 Wörter) zur Frage „Sind Verbote oder Anreize der bessere Weg in der Klimapolitik?“. Verwende mindestens vier Kernwörter und ein einräumendes Redemittel (zwar … doch / so … so).',
      loesung: '**Mögliche Lösung** (auch die Gegenposition oder ein klares Entweder-oder ist gültig, solange die Struktur stimmt):\n*Zwar wirken Verbote unmittelbar und gelten für alle gleichermaßen, doch gefährden sie auf Dauer die gesellschaftliche Akzeptanz der Klimapolitik. Finanzielle Anreize wie eine sozial abgefederte CO₂-Bepreisung erscheinen mir daher vielversprechender: Sie belohnen klimafreundliches Verhalten, statt den Verzicht zu erzwingen, und lassen dem Einzelnen die Wahl. Entscheidend ist allerdings, dass die Maßnahmen für alle zumutbar bleiben und die Einnahmen an die Haushalte zurückverteilt werden. Unterm Strich plädiere ich deshalb für eine Kombination: klare Regeln dort, wo es schnell gehen muss, Anreize überall sonst.*',
    },

    { type: 'rule' },

    // ── 7. Prüfungsbezug ──────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Schreiben · Teil 1 · Diskussionsbeitrag (~230 Wörter, 40 Min. empfohlen)',
      titel: 'Thema: „Sollte der Staat klimaschädliches Verhalten verbieten?“',
      anweisung: 'Im echten Teil 1 schreibst du einen Diskussionsbeitrag für ein Online-Forum: Einleitung mit Bezug zur Fragestellung, Argumente für beide Seiten, eigene Position, Schluss. Analysiere die Modelllösung und markiere die vier Bausteine.',
      absaetze: [
        'Ob Tempolimit, Verbrenner-Aus oder teurere Flugtickets — kaum eine Frage wird in Deutschland derzeit so hitzig diskutiert wie die, ob der Staat klimaschädliches Verhalten schlicht verbieten sollte. Auf den ersten Blick spricht einiges dafür: Verbote wirken sofort, gelten für alle und hängen nicht vom Geldbeutel ab. Gerade beim Tempolimit zeigt sich, dass eine einfache Regel Emissionen senken könnte, ohne irgendjemanden finanziell zu belasten.',
        'Dem lässt sich entgegenhalten, dass eine reine Verbotspolitik Widerstand erzeugt und die gesellschaftliche Zustimmung zum Klimaschutz aufs Spiel setzt. Wer sich bevormundet fühlt, sucht Schlupflöcher, statt sein Konsumverhalten zu überdenken. Zudem trifft ein pauschales Verbot auch jene, die auf das Auto oder den Flug angewiesen sind. Anreize wie eine sozial gerechte CO₂-Bepreisung erscheinen vielen daher als der klügere Weg.',
        'Meines Erachtens schließen sich beide Instrumente nicht aus. Dort, wo es schnell gehen muss und Alternativen bestehen, sind Verbote legitim; überall sonst sollte der Staat Anreize schaffen und die Einnahmen zurückverteilen — etwa in Form eines Klimageldes. Entscheidend ist, dass die Maßnahmen sozial zumutbar bleiben — sonst scheitert die beste Klimapolitik am Widerstand derer, die sie tragen sollen. (~180 Wörter — in der Prüfung ergänzt du ein Beispiel aus deinem Heimatland, um auf ~230 zu kommen.)',
      ],
      loesungen: [
        '**Einleitung:** aktueller Aufhänger + Fragestellung („Ob Tempolimit … kaum eine Frage wird so hitzig diskutiert“)',
        '**Pro-Block:** Verbote wirken sofort, gelten für alle, sind sozial gerecht — mit dem Beispiel Tempolimit',
        '**Contra-Block:** eingeleitet mit „Dem lässt sich entgegenhalten“ — Akzeptanz, Bevormundung, Anreize als Alternative',
        '**Position + Schluss:** vermittelnde These („schließen sich nicht aus“) + Bedingung („sozial zumutbar“) als pointierter Schlussgedanke',
      ],
      kommentar: 'Beachte die Gelenkstellen: *Auf den ersten Blick spricht einiges dafür* → *Dem lässt sich entgegenhalten* → *Meines Erachtens*. Diese drei Scharniere strukturieren fast jeden Diskussionsbeitrag — egal zu welchem Thema.',
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Beim Klimathema verführt die Empörung zu Pauschalsätzen („Die Politik tut nichts!“). Das kostet Punkte beim Kriterium **Differenziertheit**. Sicherer ist das Muster **einräumen + entkräften**: *Zwar …, doch …* — damit zeigst du in einem einzigen Satz Wortschatz, Struktur und Urteilsvermögen.',
    },

    { type: 'rule' },

    // ── 8. Abschluss ──────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Das bleibt', 'Merksatz'],
      zeilen: [
        ['Energiewende', 'raus aus Kohle und Atom, rein in Wind und Sonne (EEG)'],
        ['Verkehrswende', 'Bahn, Rad, ÖPNV statt Auto — Tempolimit als Dauerstreit'],
        ['Verbote vs. Anreize', 'sofortige Wirkung vs. Akzeptanz — die C1-Antwort kombiniert beides'],
        ['Gerechtigkeit', 'Klimapolitik muss sozial zumutbar sein (Klimabeschluss: Rechte künftiger Generationen)'],
        ['Kollokationen', 'Maßnahmen ergreifen · den Ausstoß senken · Verzicht auf + Akk.'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich kann Energiewende und Verkehrswende mit je zwei Sätzen präzise erklären.',
        'Ich verwende die 14 Kernwörter mit der richtigen Kollokation — inklusive *Verzicht auf* + Akkusativ.',
        'Ich kann die Debatte „Verbote vs. Anreize“ von beiden Seiten führen und begründet Position beziehen.',
        'Ich kenne die vier Bausteine des Diskussionsbeitrags und ihre Gelenkstellen.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Von der Energiewende zur digitalen Revolution: Das nächste Themenfeld ist **Digitalisierung & künstliche Intelligenz** — Datenschutz, Automatisierung, Chancen und Risiken. Das Abwägungsmuster von heute wirst du dort ständig brauchen, denn kaum ein Thema verlangt so sehr nach dem Blick auf beide Seiten.',
    },
  ],
}
