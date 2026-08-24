// Lektion 29 · Themenfeld: Bildung & Ausbildung
//
// Bloque 3 «Themenfelder» — lecciones temáticas: léxico, ideas y argumentos
// de los campos que caen en el examen. Estructura de 8 secciones adaptada:
// Kernwortschatz amplio (14) · Erklärung = panorama del debate · Beispiele =
// frases C1 por subtema · Redemittel · Übungen (léxico → B2→C1 → producción)
// · Prüfungsbezug con tarea real y solución modelo.

export default {
  spec: ['Bloque 3', 'Themenfelder', 'Niveau C1', 'Prüfungsrelevanz: Sprechen Teil 1 · Schreiben Teil 1'],
  h1: 'Bildung & Ausbildung',
  lead: 'Duales System, Numerus clausus, Chancengleichheit: das Vokabular, die Fakten und die Argumente für eines der häufigsten Prüfungsthemen überhaupt.',

  content: [
    // ── 2. Lernziele ──────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'Am Ende kannst du das deutsche Bildungssystem — duales System, Föderalismus, Numerus clausus — präzise und mit dem richtigen Fachwortschatz beschreiben.',
        'Du beherrschst 14 Schlüsselbegriffe des Themenfelds mit ihren typischen Kollokationen.',
        'Du führst die Debatten um Studiengebühren, Chancengleichheit und lebenslanges Lernen mit differenzierten Pro- und Contra-Argumenten.',
        'Du strukturierst einen Vortrag zum Thema Bildung genau nach dem Format von Sprechen Teil 1.',
      ],
    },

    { type: 'rule' },

    // ── 3. Kernwortschatz ─────────────────────────────────────────
    {
      type: 'wortschatz',
      eyebrow: 'Kernwortschatz',
      items: [
        { wort: 'die Bildung', kollokation: 'Zugang zu Bildung ermöglichen', es: 'educación, formación (en general)' },
        { wort: 'die Ausbildung', kollokation: 'eine Ausbildung absolvieren', es: 'formación profesional' },
        { wort: 'das duale System', kollokation: 'im dualen System ausgebildet werden', es: 'sistema dual (empresa + escuela)' },
        { wort: 'die Chancengleichheit', kollokation: 'die Chancengleichheit im Bildungswesen fördern', es: 'igualdad de oportunidades' },
        { wort: 'der Bildungsabschluss', kollokation: 'einen höheren Bildungsabschluss erwerben', es: 'título académico' },
        { wort: 'die Weiterbildung', kollokation: 'an einer beruflichen Weiterbildung teilnehmen', es: 'formación continua' },
        { wort: 'das lebenslange Lernen', kollokation: 'das lebenslange Lernen zur Selbstverständlichkeit machen', es: 'aprendizaje permanente' },
        { wort: 'der Numerus clausus', kollokation: 'am Numerus clausus scheitern', es: 'nota de corte' },
        { wort: 'die Studiengebühren (Pl.)', kollokation: 'Studiengebühren erheben bzw. abschaffen', es: 'tasas universitarias' },
        { wort: 'die Durchlässigkeit', kollokation: 'die Durchlässigkeit des Bildungssystems erhöhen', es: 'permeabilidad (entre vías educativas)' },
        { wort: 'die soziale Herkunft', kollokation: 'unabhängig von der sozialen Herkunft', es: 'origen social' },
        { wort: 'benachteiligen', kollokation: 'Kinder aus bildungsfernen Familien benachteiligen', es: 'desfavorecer, perjudicar' },
        { wort: 'die Akademisierung', kollokation: 'die zunehmende Akademisierung der Berufswelt', es: 'academización' },
        { wort: 'die Förderung', kollokation: 'frühkindliche Förderung ausbauen', es: 'fomento, apoyo (educativo)' },
      ],
      hinweis: 'Achtung, falscher Freund: **die Ausbildung** ist die *formación profesional*, nicht die Bildung insgesamt. ~~Y *absolvieren* significa «completar/cursar», no «absolver»: *ein Studium absolvieren* = terminar la carrera.~~ Merke dir außerdem: *scheitern **an** + Dat.*, *teilnehmen **an** + Dat.*',
    },

    { type: 'rule' },

    // ── 4. Erklärung ──────────────────────────────────────────────
    {
      type: 'prose',
      eyebrow: 'Erklärung',
      card: true,
      titel: 'Das deutsche Bildungssystem — was du wissen musst',
      absaetze: [
        'Bildung ist in Deutschland **Ländersache**: Jedes Bundesland regelt Schulen und Hochschulen selbst; die __Kultusministerkonferenz (KMK)__ koordiniert lediglich. Daraus folgt das, was in jeder Diskussion fällt: der **Flickenteppich** — sechzehn Schulsysteme, unterschiedliche Abiturstandards, erschwerte Umzüge für Familien.',
        'Das zweite Alleinstellungsmerkmal ist das __duale System__: Auszubildende lernen parallel im Betrieb und in der Berufsschule und werden dabei vergütet. International gilt es als Exportschlager und als ein Grund für die vergleichsweise niedrige Jugendarbeitslosigkeit. Der Hochschulzugang wiederum wird in gefragten Fächern wie Medizin durch den __Numerus clausus__ beschränkt; staatliche Unterstützung für Studierende aus einkommensschwachen Familien leistet das __BAföG__ (Bundesausbildungsförderungsgesetz).',
      ],
    },

    {
      type: 'steps',
      eyebrow: 'Erklärung — Die drei Debattenfelder',
      steps: [
        {
          badge: 'Debatte 1',
          titel: 'Studiengebühren — erheben oder nicht?',
          text: 'Mehrere Bundesländer führten allgemeine Studiengebühren ein und schafften sie nach Protesten wieder ab; heute ist das Erststudium an staatlichen Hochschulen im Regelfall gebührenfrei. **Pro:** bessere Finanzierung der Hochschulen, bewusstere Studienwahl, internationale Normalität. **Contra:** soziale Selektion, Verschuldung junger Menschen, Bildung als öffentliches Gut, das allen offenstehen muss.',
        },
        {
          badge: 'Debatte 2',
          titel: 'Chancengleichheit — das wunde Thema',
          text: 'Die __PISA-Studien__ der OECD belegen seit ihrer ersten Runde denselben Befund: In kaum einem vergleichbaren Land hängt der Bildungserfolg so stark von der **sozialen Herkunft** ab wie in Deutschland. Kritiker machen die frühe Aufteilung auf verschiedene Schulformen dafür verantwortlich; als Gegenmittel gelten frühkindliche Förderung, Ganztagsschulen und eine höhere **Durchlässigkeit** zwischen den Bildungswegen.',
        },
        {
          badge: 'Debatte 3',
          titel: 'Akademisierung vs. berufliche Bildung',
          text: 'Immer mehr Schulabgänger studieren, während dem Handwerk die Auszubildenden fehlen — Stichwort **Akademisierungswahn** gegen **Fachkräftemangel**. Die Gegenposition betont: Eine duale Ausbildung ist kein Bildungsweg zweiter Klasse, und die Durchlässigkeit — vom Gesellenbrief über die Meisterprüfung bis ins Studium — war nie größer.',
        },
      ],
    },

    {
      type: 'tabelle',
      eyebrow: 'Erklärung — Institutionen und Konzepte im Überblick',
      kopf: ['Begriff', 'Was dahintersteckt'],
      zeilen: [
        ['KMK', 'Kultusministerkonferenz — koordiniert die Bildungspolitik der sechzehn Länder'],
        ['BAföG', 'staatliche Ausbildungsförderung, teils Zuschuss, teils zinsloses Darlehen'],
        ['PISA', 'internationale Schulleistungsstudie der OECD, Auslöser des „PISA-Schocks“'],
        ['Numerus clausus', 'Zulassungsbeschränkung über die Abiturnote, v. a. in Medizin'],
        ['duales System', 'Ausbildung im Betrieb + Berufsschule, mit Vergütung'],
      ],
    },

    { type: 'rule' },

    // ── 5. Beispiele ──────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele — Sätze zum Übernehmen',
      kicker: 'System beschreiben',
      titel: 'Das Bildungssystem charakterisieren',
      items: [
        { text: 'Da Bildung in Deutschland **Ländersache** ist, unterscheiden sich Lehrpläne und Abschlussprüfungen von Bundesland zu Bundesland erheblich.', gl: '— *Ländersache sein*: fórmula fija para el federalismo' },
        { text: 'Das **duale System** gilt international als Erfolgsmodell, weil es Theorie und Praxis von Anfang an miteinander verzahnt.', gl: '— *miteinander verzahnen*: colocación C1 muy rentable' },
        { text: 'Wer am **Numerus clausus** scheitert, weicht häufig auf verwandte Studiengänge oder auf ein Studium im Ausland aus.' },
        { text: 'In meinem Heimatland ist die berufliche Bildung deutlich schwächer institutionalisiert als in den deutschsprachigen Ländern.', gl: '— frase puente perfecta para el Vortrag (comparación con tu país)' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'Chancengleichheit',
      titel: 'Über Bildungsgerechtigkeit sprechen',
      items: [
        { text: 'Zahlreiche Studien belegen, dass der Bildungserfolg hierzulande nach wie vor eng an die **soziale Herkunft** gekoppelt ist.' },
        { text: 'Kinder aus **bildungsfernen Familien** werden durch die frühe Aufteilung auf verschiedene Schulformen strukturell benachteiligt.', gl: '— *bildungsfern*: eufemismo técnico, mejor que *arm* en este contexto' },
        { text: 'Um echte **Chancengleichheit** herzustellen, müsste die Förderung bereits im Kindergartenalter ansetzen.' },
        { text: 'Eine höhere **Durchlässigkeit** des Systems würde es ermöglichen, einen einmal verpassten Abschluss später nachzuholen.' },
        { text: 'Ganztagsschulen gelten als wirksames Instrument, um Nachteile des Elternhauses zumindest teilweise auszugleichen.' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'Debatte',
      titel: 'Studiengebühren und lebenslanges Lernen',
      items: [
        { text: 'Befürworter von **Studiengebühren** argumentieren, ein kostenpflichtiges Studium werde bewusster gewählt und seltener abgebrochen.' },
        { text: 'Dem lässt sich entgegenhalten, dass Gebühren gerade jene abschrecken, die ohnehin über wenig finanzielle Rücklagen verfügen.', gl: '— *Dem lässt sich entgegenhalten, dass…*: réplica elegante' },
        { text: 'Angesichts des rasanten technologischen Wandels ist **lebenslanges Lernen** längst keine Option mehr, sondern eine Notwendigkeit.' },
        { text: 'Arbeitgeber stehen in der Pflicht, ihren Beschäftigten regelmäßige **Weiterbildungen** nicht nur anzubieten, sondern auch zeitlich zu ermöglichen.', gl: '— *in der Pflicht stehen*: registro periodístico' },
      ],
    },

    {
      type: 'vergleich',
      eyebrow: 'Beispiele — Register im Vergleich',
      titel: 'Derselbe Gedanke, zwei Register',
      zeilen: [
        { satz: 'Viele Kinder aus armen Familien schaffen das Abitur nicht.', label: 'B2 — verständlich, aber flach' },
        { satz: 'Kindern aus einkommensschwachen Familien bleibt der Weg zum Abitur überproportional häufig verwehrt.', label: 'C1 — präzise, nominal, distanziert' },
        { satz: 'Man muss heute immer weiter lernen, um einen Job zu finden.', label: 'B2' },
        { satz: 'Wer beruflich bestehen will, kommt um kontinuierliche Weiterbildung nicht herum.', label: 'C1 — *um etwas nicht herumkommen*' },
      ],
    },

    {
      type: 'redemittel',
      eyebrow: 'Redemittel — Meinung äußern im Themenfeld Bildung',
      gruppen: [
        {
          fn: 'Position beziehen',
          saetze: [
            { satz: 'Ich bin der festen Überzeugung, dass Bildung eine öffentliche Aufgabe ist und bleiben muss.' },
            { satz: 'Aus meiner Sicht spricht vieles dafür, die berufliche Bildung gegenüber dem Studium aufzuwerten.' },
          ],
        },
        {
          fn: 'Abwägen',
          saetze: [
            { satz: 'Einerseits entlasten Studiengebühren die öffentlichen Haushalte, andererseits verschärfen sie die soziale Auslese.', gloss: '— *die soziale Auslese*: la selección social' },
            { satz: 'So berechtigt die Kritik am Föderalismus ist, so unrealistisch erscheint eine vollständige Zentralisierung.' },
          ],
        },
        {
          fn: 'Beispiel und Beleg anführen',
          saetze: [
            { satz: 'Wie die PISA-Studien wiederholt gezeigt haben, entscheidet häufig das Elternhaus über den Bildungsweg.' },
            { satz: 'Ein Blick auf mein Heimatland zeigt, wohin es führt, wenn die berufliche Bildung an Ansehen verliert.' },
          ],
        },
      ],
    },

    { type: 'rule' },

    // ── 6. Übungen ────────────────────────────────────────────────
    {
      type: 'uebung',
      eyebrow: 'Anwendung — Übung 1 · Wortschatz & Kollokationen',
      frage: 'Welches Verb passt? Ergänze die typische Kollokation aus dem Kernwortschatz.',
      aufgaben: [
        'eine Ausbildung … (beenden? machen? Welches Verb ist C1?)',
        'Studiengebühren … / wieder …',
        'einen höheren Bildungsabschluss …',
        'die Durchlässigkeit des Systems …',
        'am Numerus clausus …',
        'an einer beruflichen Weiterbildung …',
      ],
      loesungen: [
        'eine Ausbildung **absolvieren** — ~~«hacer una FP»; *machen* es B1, *absolvieren* es el registro C1~~',
        'Studiengebühren **erheben** / wieder **abschaffen**',
        'einen höheren Bildungsabschluss **erwerben**',
        'die Durchlässigkeit des Systems **erhöhen**',
        'am Numerus clausus **scheitern**',
        'an einer beruflichen Weiterbildung **teilnehmen**',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 2 · Von B2 zu C1',
      frage: 'Forme die einfachen Sätze in C1-Sätze um. Nutze das angegebene Wort aus dem Kernwortschatz.',
      aufgaben: [
        'Arme Kinder haben es in der Schule schwerer. (benachteiligen)',
        'Alle sollen die gleichen Chancen haben, egal woher sie kommen. (die soziale Herkunft)',
        'Man muss sein ganzes Leben lang lernen. (das lebenslange Lernen)',
        'Immer mehr junge Leute studieren, und das ist ein Problem für das Handwerk. (die Akademisierung)',
        'Der Staat sollte kleine Kinder besser fördern. (die Förderung)',
      ],
      loesungen: [
        'Kinder aus einkommensschwachen Familien werden im Bildungssystem strukturell **benachteiligt**.',
        'Der Bildungserfolg darf nicht von der **sozialen Herkunft** abhängen.',
        'Das **lebenslange Lernen** ist angesichts des technologischen Wandels zur Notwendigkeit geworden.',
        'Die zunehmende **Akademisierung** verschärft den Nachwuchsmangel im Handwerk.',
        'Die frühkindliche **Förderung** müsste deutlich ausgebaut werden. ~~Fíjate: el paso B2→C1 casi siempre pasa por la nominalización + un verbo preciso.~~',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 3 · Produzieren',
      frage: 'Schreibe einen argumentativen Absatz (80-100 Wörter) zur Frage „Sollte das Erststudium gebührenfrei bleiben?“. Verwende mindestens vier Wörter aus dem Kernwortschatz und ein Redemittel des Abwägens.',
      loesung: '**Mögliche Lösung** (jede gut begründete Position ist richtig):\n*Einerseits würden Studiengebühren die chronisch unterfinanzierten Hochschulen spürbar entlasten, andererseits träfen sie vor allem Studierende aus einkommensschwachen Familien. Da der Bildungserfolg in Deutschland ohnehin stark von der sozialen Herkunft abhängt, würde eine Gebührenpflicht die Chancengleichheit weiter untergraben: Wer keine finanziellen Rücklagen hat, würde eher auf ein Studium verzichten oder es vorzeitig abbrechen. Ich bin daher der festen Überzeugung, dass das Erststudium auch künftig gebührenfrei bleiben muss — Bildung ist ein öffentliches Gut, und die Durchlässigkeit des Systems darf nicht vom Geldbeutel abhängen.*\nGültige Varianten: die Pro-Position mit *bewusstere Studienwahl* und *internationale Normalität*, oder ein Kompromiss (nachgelagerte, einkommensabhängige Gebühren).',
    },

    { type: 'rule' },

    // ── 7. Prüfungsbezug ──────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Sprechen · Teil 1 · Vortrag (ca. 4 Minuten)',
      titel: 'Vortragsthema: „Lebenslanges Lernen — Notwendigkeit oder Modewort?“',
      anweisung: 'Im echten Teil 1 hältst du einen Vortrag zu einem vorgegebenen Thema. Du sollst: das Thema vorstellen, die Situation in deinem Heimatland beschreiben, Vor- und Nachteile abwägen und eine begründete Meinung formulieren. Skizziere deinen Vortrag — hier eine Modellgliederung mit ausformulierten Kernsätzen.',
      absaetze: [
        'Bereite die vier Bausteine vor: **Einstieg**, **Situation im Heimatland**, **Abwägung**, **Fazit**. Formuliere zu jedem Baustein ein bis zwei vollständige C1-Sätze und lerne die Gelenkstellen auswendig.',
      ],
      loesungen: [
        '**Einstieg:** „In meinem Vortrag geht es um die Frage, ob lebenslanges Lernen tatsächlich eine Notwendigkeit ist oder lediglich ein Schlagwort. Dieses Thema betrifft uns alle, denn kaum ein Berufsbild bleibt vom technologischen Wandel unberührt.“',
        '**Heimatland:** „In meinem Heimatland wird Weiterbildung bislang vor allem als Privatsache betrachtet; wer sich fortbilden will, muss dies meist selbst finanzieren und in der Freizeit organisieren.“',
        '**Abwägung:** „Einerseits eröffnet ständige Weiterbildung neue berufliche Perspektiven und schützt vor dem Verlust des Arbeitsplatzes. Andererseits darf sie nicht zum Dauerdruck werden, der Beschäftigte über die Belastungsgrenze hinaus fordert.“',
        '**Fazit:** „Alles in allem überwiegen für mich die Vorteile deutlich — vorausgesetzt, Arbeitgeber und Staat stellen dafür Zeit und Mittel bereit, statt die Verantwortung allein dem Einzelnen aufzubürden.“',
      ],
      kommentar: 'Die Prüfenden bewerten Struktur, Flüssigkeit und Differenziertheit — nicht deine tatsächliche Meinung. Ein klarer Vier-Schritt mit Gelenkstellen („Zunächst…“, „Was mein Heimatland betrifft…“, „Alles in allem…“) bringt mehr Punkte als spektakuläre Argumente ohne roten Faden.',
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Bildung ist ein Dauerbrenner in **Sprechen Teil 1** und im **Diskussionsbeitrag**. Lege dir für dieses Themenfeld drei vorformulierte Bausteine zurecht: einen Satz zum dualen System, einen zur Chancengleichheit, einen zur Situation in deinem Heimatland. Sie passen auf fast jede Bildungsfrage — und nehmen dir in der Prüfung den Druck der ersten Minute.',
    },

    { type: 'rule' },

    // ── 8. Abschluss ──────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Das bleibt', 'Merksatz'],
      zeilen: [
        ['Bildung ist Ländersache', 'KMK koordiniert — der „Flickenteppich“ ist das Standardargument'],
        ['duales System', 'Betrieb + Berufsschule, international bewundert'],
        ['Chancengleichheit', 'Bildungserfolg hängt stark von der sozialen Herkunft ab (PISA)'],
        ['Studiengebühren-Debatte', 'Finanzierung vs. soziale Auslese — Erststudium heute gebührenfrei'],
        ['Kollokationen', 'eine Ausbildung absolvieren · einen Abschluss erwerben · Gebühren erheben'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich kann das deutsche Bildungssystem mit seinen Besonderheiten in fünf Sätzen beschreiben.',
        'Ich verwende die 14 Kernwörter mit der richtigen Kollokation und Präposition.',
        'Ich kann zu Studiengebühren und Chancengleichheit je zwei Pro- und Contra-Argumente ausformulieren.',
        'Ich habe eine Vier-Schritt-Gliederung für einen Bildungs-Vortrag parat.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Vom Klassenzimmer in die Klimapolitik: Das nächste Themenfeld ist **Umwelt & Klimawandel** — mit dem Wortschatz der Energiewende, der Verkehrswende und der großen Streitfrage, ob Verbote oder Anreize mehr bewirken. Die Argumentationsmuster von heute (abwägen, belegen, Position beziehen) nimmst du direkt mit.',
    },
  ],
}
