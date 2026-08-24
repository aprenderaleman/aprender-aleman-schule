// Lektion 37 · Themenfeld: Wissenschaft & Forschung

export default {
  spec: ['Bloque 3', 'Themenfelder', 'Niveau C1', 'Prüfungsrelevanz: Sprechen · Lesen · Hören'],
  h1: 'Wissenschaft & Forschung',
  lead: 'Wer über Gentechnik, Tierversuche oder Forschungsgelder mitreden will, braucht das Vokabular des Belegens und Bezweifelns — das Kernwerkzeug jeder C1-Argumentation.',

  content: [
    // ── 2. Lernziele ──────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'Am Ende kannst du die deutsche Forschungslandschaft (DFG, Max-Planck, Fraunhofer) skizzieren und den Unterschied zwischen Grundlagen- und angewandter Forschung erklären.',
        'Du argumentierst zu ethischen Streitfragen (Gentechnik, Tierversuche) mit dem Dreischritt Nutzen — Risiko — Alternativen.',
        'Du beherrschst das Verbfeld des wissenschaftlichen Argumentierens: *belegen, widerlegen, nahelegen, infrage stellen*.',
        'Du kannst über Wissenschaftskommunikation und Vertrauensverlust sprechen, ohne in Schwarz-Weiß-Muster zu verfallen.',
      ],
    },

    { type: 'rule' },

    // ── 3. Kernwortschatz ─────────────────────────────────────────
    {
      type: 'wortschatz',
      eyebrow: 'Kernwortschatz',
      items: [
        { wort: 'die Forschungsförderung', kollokation: 'die staatliche Forschungsförderung ausbauen', es: 'financiación de la investigación' },
        { wort: 'die Grundlagenforschung', kollokation: 'in die Grundlagenforschung investieren', es: 'investigación básica' },
        { wort: 'die angewandte Forschung', kollokation: 'Ergebnisse der angewandten Forschung vermarkten', es: 'investigación aplicada' },
        { wort: 'die Erkenntnis', kollokation: 'neue Erkenntnisse gewinnen', es: 'hallazgo, conocimiento' },
        { wort: 'das Gutachten', kollokation: 'ein unabhängiges Gutachten einholen', es: 'dictamen, informe pericial' },
        { wort: 'die Wissenschaftskommunikation', kollokation: 'verständliche Wissenschaftskommunikation betreiben', es: 'divulgación científica' },
        { wort: 'der Tierversuch', kollokation: 'Tierversuche schrittweise ersetzen', es: 'experimentación animal' },
        { wort: 'die Gentechnik', kollokation: 'den Einsatz von Gentechnik streng regulieren', es: 'ingeniería genética' },
        { wort: 'der Eingriff', kollokation: 'ein Eingriff ins menschliche Erbgut', es: 'intervención' },
        { wort: 'die Ethikkommission', kollokation: 'ein Vorhaben von der Ethikkommission genehmigen lassen', es: 'comité de ética' },
        { wort: 'die Glaubwürdigkeit', kollokation: 'die Glaubwürdigkeit der Wissenschaft wahren', es: 'credibilidad' },
        { wort: 'die Skepsis', kollokation: 'wachsender Skepsis mit Transparenz begegnen', es: 'escepticismo' },
        { wort: 'belegen', kollokation: 'eine These empirisch belegen', es: 'probar, respaldar (con datos)' },
        { wort: 'widerlegen', kollokation: 'eine Hypothese widerlegen', es: 'refutar' },
      ],
      hinweis: '**Wissenschaft** umfasst im Deutschen auch die Geistes- und Sozialwissenschaften — der Begriff ist breiter als „ciencia“. ~~Y el falso amigo clave: „evidencia“ cotidiana es *der Beleg/der Beweis*; *die Evidenz* existe, pero solo en jerga científica (evidenzbasiert).~~',
    },

    { type: 'rule' },

    // ── 4. Erklärung ──────────────────────────────────────────────
    {
      type: 'prose',
      eyebrow: 'Erklärung',
      card: true,
      titel: 'Die Forschungslandschaft — wer forscht, wer zahlt?',
      absaetze: [
        'Deutschland gehört zu den Ländern, die **über drei Prozent ihrer Wirtschaftsleistung** in Forschung und Entwicklung investieren — getragen von einem arbeitsteiligen System: Die __Deutsche Forschungsgemeinschaft__ (DFG) ist der zentrale Förderer der Forschung an Hochschulen und vergibt ihre Mittel im **Wettbewerb nach Begutachtung**. Die __Max-Planck-Gesellschaft__ betreibt erkenntnisgetriebene __Grundlagenforschung__ — mit einer beeindruckenden Bilanz an Nobelpreisen —, während die __Fraunhofer-Gesellschaft__ auf __angewandte Forschung__ im Auftrag der Industrie spezialisiert ist.',
        'Die Dauerdebatte des Feldes: Soll Förderung **zweckfrei** sein (Grundlagenforschung zahlt sich oft erst Jahrzehnte später aus — ohne sie gäbe es weder Laser noch mRNA-Impfstoffe) oder **nutzenorientiert** (Steuergeld müsse sichtbare Probleme lösen)? Wer beide Logiken kennt, kann fast jede Frage zur Forschungspolitik strukturieren. ~~Par clave: erkenntnisgetrieben ↔ anwendungsorientiert.~~',
      ],
    },

    {
      type: 'tabelle',
      eyebrow: 'Erklärung — Ethische Streitfragen im Überblick',
      kopf: ['Streitfrage', 'Dafür wird angeführt…', 'Dagegen wird eingewandt…'],
      zeilen: [
        ['Gentechnik / Genschere', 'Heilung von Erbkrankheiten; widerstandsfähigere Nutzpflanzen; Präzision moderner Verfahren', 'Eingriffe ins Erbgut sind teils unumkehrbar; Langzeitfolgen unklar; Gefahr der „Designer“-Anwendungen jenseits der Medizin'],
        ['Tierversuche', 'in der Grundlagen- und Medikamentenforschung bislang teils unersetzlich; streng genehmigungspflichtig', 'ethisch fragwürdig; Übertragbarkeit auf den Menschen begrenzt; Alternativen (Zellkulturen, Organchips, Simulationen) sind förderwürdig'],
        ['Forschungsfreiheit', 'im Grundgesetz geschützt; Erkenntnis darf nicht vorab politisch gefiltert werden', 'Freiheit endet, wo Menschenwürde und Sicherheit berührt sind; Ethikkommissionen als notwendiges Korrektiv'],
        ['Vertrauen in die Wissenschaft', 'Umfragen zeigen stabil hohes Grundvertrauen; Transparenz stärkt es', 'lautstarke Minderheiten misstrauen der Forschung; vorläufige Ergebnisse werden als Widersprüche missverstanden'],
      ],
    },

    {
      type: 'prose',
      card: true,
      titel: 'Fakten für deine Argumentation',
      absaetze: [
        '**Erstens:** In der EU sind **Tierversuche für Kosmetik seit 2013 verboten** — ein Beleg dafür, dass ethische Grenzziehungen möglich sind, ohne die Forschung insgesamt zu lähmen. Zugleich gilt das **3R-Prinzip** (*Replace, Reduce, Refine*): ersetzen, verringern, verbessern — der international anerkannte Rahmen für den schrittweisen Ausstieg. **Zweitens:** Eingriffe in die menschliche Keimbahn sind in Deutschland durch das __Embryonenschutzgesetz__ untersagt; jede klinische Studie muss von einer __Ethikkommission__ genehmigt werden.',
        '**Drittens:** Das __Wissenschaftsbarometer__, eine regelmäßige Umfrage der Initiative „Wissenschaft im Dialog“, misst das Vertrauen der Bevölkerung in die Forschung — es liegt stabil auf hohem Niveau, mit einer lautstarken skeptischen Minderheit. Daraus folgt das zentrale Argument des Feldes: Nicht das Vertrauen ist kollabiert, sondern die **Kommunikation über Unsicherheit** muss besser werden. Wissenschaft liefert keine ewigen Wahrheiten, sondern **den jeweils besten Stand des Irrtums** — wer das erklärt, nimmt der Skepsis ihren Nährboden.',
      ],
    },

    {
      type: 'steps',
      eyebrow: 'Erklärung — Der ethische Dreischritt für jede Streitfrage',
      steps: [
        { badge: 'Nutzen', titel: 'Was steht zu gewinnen?', text: 'Konkret benennen: Heilungschancen, Erkenntnisgewinn, wirtschaftlicher Transfer. Ohne benannten Nutzen wirkt jede Abwägung schief.' },
        { badge: 'Risiko', titel: 'Was steht auf dem Spiel?', text: 'Unumkehrbarkeit, Langzeitfolgen, Missbrauchspotenzial, Leid. Präzise trennen: Was ist belegt, was befürchtet?' },
        { badge: 'Alternativen', titel: 'Geht es auch anders?', text: 'Erst die Alternativenprüfung macht ein Urteil glaubwürdig: Zellkulturen statt Tierversuch, strenge Auflagen statt Verbot, Moratorium statt Freigabe.' },
      ],
    },

    { type: 'rule' },

    // ── 5. Beispiele ──────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele — Sätze fürs Examen',
      kicker: 'Förderung',
      titel: 'Grundlagen- oder angewandte Forschung?',
      items: [
        { text: 'Grundlagenforschung **zahlt sich selten sofort aus** — doch ohne sie hätte es weder den Laser noch die mRNA-Impfstoffe je gegeben.', gl: '— el ejemplo histórico sustituye a diez argumentos abstractos' },
        { text: 'Wer Förderung **allein am kurzfristigen Nutzen ausrichtet**, schneidet der Wissenschaft die Wurzeln ab.' },
        { text: 'Die Vergabe von Fördermitteln **im Wettbewerb nach unabhängiger Begutachtung** gilt als bester Schutz vor politischer Einflussnahme.' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'Ethik',
      titel: 'Gentechnik und Tierversuche abwägen',
      items: [
        { text: 'Die Genschere eröffnet **Heilungschancen bei Erbkrankheiten** — zugleich wären Eingriffe in die Keimbahn **unumkehrbar** und beträfen kommende Generationen.' },
        { text: 'Tierversuche sind in Deutschland **streng genehmigungspflichtig**; nach dem 3R-Prinzip sollen sie ersetzt, verringert und verbessert werden.' },
        { text: 'Dass die EU Tierversuche für Kosmetik verboten hat, **belegt**, dass ethische Grenzziehungen die Forschung nicht lähmen müssen.' },
        { text: 'Ein pauschales Verbot **würde der Komplexität des Problems ebenso wenig gerecht wie eine pauschale Freigabe** — es kommt auf Zweck, Auflagen und Alternativen an.', gl: '— la doble negación equilibrada: fórmula estrella para no tomar partido' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'Vertrauen',
      titel: 'Wissenschaftskommunikation und Skepsis',
      items: [
        { text: 'Umfragen wie das Wissenschaftsbarometer zeigen: Das Vertrauen in die Forschung ist **stabiler, als die öffentliche Debatte vermuten lässt**.' },
        { text: 'Wissenschaft liefert keine endgültigen Wahrheiten, sondern **den jeweils besten Stand des Wissens** — wer das verschweigt, produziert Enttäuschung.' },
        { text: 'Wenn sich Empfehlungen ändern, ist das **kein Beleg für Beliebigkeit, sondern für einen funktionierenden Erkenntnisprozess**.' },
        { text: 'Verständliche Wissenschaftskommunikation ist **keine Nebensache, sondern eine Bringschuld** öffentlich finanzierter Forschung.' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'Argumentieren',
      titel: 'Das Verbfeld des Belegens',
      items: [
        { text: 'Die Daten **belegen** einen Zusammenhang, **beweisen** aber keine Ursache — Korrelation ist keine Kausalität.' },
        { text: 'Neuere Studien **legen nahe**, dass die Wirkung überschätzt wurde; die ursprüngliche Hypothese gilt inzwischen als **widerlegt**.', gl: '— *nahelegen*: sugerir (los datos), más débil que *belegen*' },
        { text: 'Einzelne Befunde **stellen das Modell infrage**, ohne es schon zu **entkräften**.' },
      ],
    },

    {
      type: 'redemittel',
      eyebrow: 'Redemittel — mit wissenschaftlicher Vorsicht Stellung nehmen',
      gruppen: [
        {
          fn: 'Befunde referieren',
          saetze: [
            { satz: 'Der Studienlage zufolge überwiegt der Nutzen — wenngleich Langzeitdaten noch ausstehen.' },
            { satz: 'Nach derzeitigem Stand des Wissens spricht wenig dafür, dass…', gloss: '~~„nach derzeitigem Stand“: la reserva epistémica que todo C1 debe dominar~~' },
          ],
        },
        {
          fn: 'Abwägen',
          saetze: [
            { satz: 'Hier stehen zwei Güter gegeneinander: die Freiheit der Forschung und der Schutz künftiger Generationen.' },
            { satz: 'So groß die Chancen sind, so wenig lassen sich die Risiken derzeit seriös beziffern.' },
          ],
        },
        {
          fn: 'Bedingungen formulieren',
          saetze: [
            { satz: 'Vertretbar erscheint mir der Einsatz nur unter strengen Auflagen — etwa der Genehmigung durch eine unabhängige Ethikkommission.' },
            { satz: 'Solange belastbare Alternativen fehlen, wäre ein sofortiges Verbot verfrüht; ein verbindlicher Ausstiegsplan wäre der ehrlichere Weg.' },
          ],
        },
        {
          fn: 'Schließen',
          saetze: [
            { satz: 'Entscheidend ist letztlich nicht, ob wir forschen, sondern unter welchen Bedingungen — und wer darüber wacht.' },
          ],
        },
      ],
    },

    { type: 'rule' },

    // ── 6. Übungen ────────────────────────────────────────────────
    {
      type: 'uebung',
      eyebrow: 'Anwendung — Übung 1 · Wortschatz & Kollokationen',
      frage: 'Belegen, beweisen, widerlegen, nahelegen oder infrage stellen? Ergänze das präziseste Verb in der richtigen Form.',
      aufgaben: [
        'Die Messergebnisse ______ die Hypothese eindeutig — sie ist damit vom Tisch.',
        'Mehrere Studien ______, dass ein Zusammenhang bestehen könnte; sicher ist das aber nicht.',
        'Der Skandal um gefälschte Daten ______ die Glaubwürdigkeit des gesamten Fachgebiets ______.',
        'Mit Laborexperimenten lässt sich die These zwar ______, ein mathematischer Beweis ist das jedoch nicht.',
        'Ein einziges Gegenbeispiel genügt, um eine Allaussage zu ______.',
      ],
      loesungen: [
        '… **widerlegen** die Hypothese eindeutig. (refutada = eliminada)',
        '… **legen nahe**, dass … (sugieren: el grado más débil de certeza)',
        '… **stellt** die Glaubwürdigkeit … **infrage**. (*etwas infrage stellen*)',
        '… lässt sich die These zwar **belegen** … ~~belegen = respaldar con datos; beweisen = demostrar de forma concluyente. En ciencias empíricas casi siempre belegen.~~',
        '… um eine Allaussage zu **widerlegen**.',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 2 · Von B2 zu C1',
      frage: 'Hebe die Sätze mit dem Kernwortschatz und der Reservesprache dieser Lektion auf C1-Niveau.',
      aufgaben: [
        'Der Staat gibt viel Geld für Forschung aus. Das ist gut, weil man später neue Sachen erfindet.',
        'Viele Leute sind gegen Tierversuche, aber Forscher sagen, sie brauchen sie noch.',
        'Manche Menschen glauben der Wissenschaft nicht mehr.',
        'Gentechnik kann Krankheiten heilen, aber sie ist auch gefährlich.',
      ],
      loesungen: [
        '**Dass Deutschland über drei Prozent seiner Wirtschaftsleistung in Forschung investiert, zahlt sich langfristig aus: Aus zweckfreier Grundlagenforschung sind Durchbrüche wie der Laser hervorgegangen.**',
        '**Während Tierschützer ein rasches Verbot fordern, verweist die Forschung darauf, dass Tierversuche in Teilen der Medikamentenentwicklung bislang unersetzlich seien — Konsens besteht immerhin über das 3R-Prinzip.** ~~„seien“: Konjunktiv I — refieres la postura de la ciencia sin afirmarla tú.~~',
        '**Einer lautstarken Minderheit gilt die Wissenschaft als unglaubwürdig — den Umfragen zufolge ist das Grundvertrauen der Bevölkerung jedoch bemerkenswert stabil.**',
        '**Die Gentechnik eröffnet Heilungschancen bei Erbkrankheiten, wirft aber zugleich die Frage auf, wie sich unumkehrbare Eingriffe ins Erbgut verantworten lassen.**',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 3 · Produzieren',
      frage: 'Wende den ethischen Dreischritt (Nutzen — Risiko — Alternativen) schriftlich an: ein Absatz (90-110 Wörter) zur Frage **„Sollten Tierversuche in der Grundlagenforschung weiterhin erlaubt sein?“** Ende mit einer bedingten Stellungnahme (*vertretbar erscheint mir … nur, wenn …*).',
      loesung: '**Mögliche Lösung** (auch eine strengere oder liberalere Gewichtung ist vertretbar, solange alle drei Schritte vorkommen):\n*Der Nutzen von Tierversuchen liegt in Erkenntnissen, die sich derzeit weder an Zellkulturen noch am Computer vollständig gewinnen lassen — von der Krebs- bis zur Impfstoffforschung. Dem steht das Leid empfindungsfähiger Tiere gegenüber, zumal die Übertragbarkeit der Ergebnisse auf den Menschen begrenzt ist. Alternativen wie Organchips und Simulationen sind vielversprechend, ersetzen den Tierversuch aber erst in Teilbereichen. Vertretbar erscheint mir die Fortführung daher nur unter drei Bedingungen: strenge Genehmigungspflicht im Einzelfall, konsequente Anwendung des 3R-Prinzips und eine massive Förderung der Alternativmethoden — mit dem erklärten Ziel des Ausstiegs.*',
    },

    { type: 'rule' },

    // ── 7. Prüfungsbezug ──────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Sprechen · Teil 1 · Vortrag',
      titel: 'Vortrag: „Sollte sich die Wissenschaft stärker in öffentliche Debatten einmischen?“',
      anweisung: 'Erstelle für den ca. vierminütigen Vortrag eine Gliederung mit Stichpunkten: Einleitung, mehrere Aspekte mit Beispielen, Bewertung, Fazit. Sprich die Gliederung anschließend laut durch und stoppe die Zeit.',
      absaetze: [
        '**Thema:** Sollten sich Wissenschaftlerinnen und Wissenschaftler stärker in öffentliche Debatten einmischen?\n**Leitpunkte:** Beschreiben Sie die Ausgangslage. Erörtern Sie Chancen und Risiken mit Beispielen. Nehmen Sie begründet Stellung.',
      ],
      loesungLabel: 'Musterlösung (Gliederung)',
      loesungen: [
        '**Einleitung** — Ausgangslage: Bei Klima, Pandemien oder Gentechnik wird Fachwissen öffentlich gebraucht wie nie — zugleich wächst bei einer Minderheit die Skepsis.',
        '**Aspekt 1 · Chancen** — Fachleute versachlichen Debatten und widerlegen Falschinformationen; verständliche Wissenschaftskommunikation ist eine Bringschuld öffentlich finanzierter Forschung; Formate wie das Wissenschaftsbarometer zeigen stabiles Grundvertrauen, auf dem sich aufbauen lässt.',
        '**Aspekt 2 · Risiken** — Wer sich politisch positioniert, riskiert die Glaubwürdigkeit als neutraler Gutachter; vorläufige Erkenntnisse können als endgültige Wahrheiten missverstanden werden; die Grenze zwischen Befund und Meinung verschwimmt.',
        '**Bewertung** — Entscheidend ist die Rollentrennung: Befunde offensiv erklären (einschließlich ihrer Unsicherheit), politische Schlussfolgerungen aber als solche kennzeichnen.',
        '**Fazit** — Einmischung ja — aber als Übersetzer des Wissensstands, nicht als Partei. Wissenschaft, die schweigt, überlässt die Bühne denen, die weniger wissen und mehr behaupten.',
      ],
      kommentar: 'Der Schlusssatz ist bewusst pointiert: Ein einprägsames Fazit hebt den Eindruck von Kohärenz. Achte darauf, in Aspekt 1 und 2 je **ein konkretes Beispiel** zu nennen — das verlangt die Aufgabenstellung ausdrücklich.',
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Das Verbfeld *belegen — nahelegen — widerlegen — infrage stellen* ist in **allen Modulen** Gold wert: Im Hören markieren diese Verben die Haltung des Sprechers, im Lesen die Argumentstruktur, im Schreiben ersetzen sie das ewige *zeigen*. Lerne sie als Skala der Gewissheit, nicht als Synonyme.',
    },

    { type: 'rule' },

    // ── 8. Abschluss ──────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Streitfrage', 'Argumentationsachse', 'Schlüsselwörter'],
      zeilen: [
        ['Förderung', 'erkenntnisgetrieben vs. nutzenorientiert', 'Grundlagenforschung · sich auszahlen'],
        ['Gentechnik', 'Heilungschancen vs. Unumkehrbarkeit', 'Eingriff ins Erbgut · Ethikkommission'],
        ['Tierversuche', 'Unersetzlichkeit vs. Tierleid', '3R-Prinzip · ersetzen, verringern, verbessern'],
        ['Vertrauen', 'stabile Mehrheit vs. laute Skepsis', 'Wissenschaftsbarometer · Stand des Wissens'],
        ['Argumentieren', 'Skala der Gewissheit', 'belegen > nahelegen · widerlegen · infrage stellen'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich kann DFG, Max-Planck- und Fraunhofer-Gesellschaft ihren Rollen zuordnen und den Förderstreit (zweckfrei vs. nutzenorientiert) darstellen.',
        'Ich wende auf jede ethische Streitfrage den Dreischritt Nutzen — Risiko — Alternativen an.',
        'Ich benutze *belegen, nahelegen, widerlegen, infrage stellen* als Gewissheitsskala, nicht als Synonyme.',
        'Ich kann eine bedingte Stellungnahme formulieren (*vertretbar nur, wenn…*), statt pauschal zu urteilen.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Forschung kostet Geld — und wer es verdient, entscheidet der Weltmarkt. Im letzten Themenfeld des Blocks geht es um **Globalisierung & Wirtschaft**: Lieferketten, Freihandel, soziale Ungleichheit und Konsumkritik. Dort ziehen wir außerdem Bilanz: wie du Wortschatz und Argumente **zwischen allen fünf Feldern recycelst** — denn die Prüfungsthemen halten sich nicht an Kapitelgrenzen.',
    },
  ],
}
