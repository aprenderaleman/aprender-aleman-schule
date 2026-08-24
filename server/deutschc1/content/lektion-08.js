// Lektion 08 · Funktionsverbgefüge
//
// Estándar de 8 secciones — véase docs/deutschc1/FORMAT.md y lektion-03.js (modelo)

export default {
  spec: ['Bloque 1', 'Sprachliche Konsolidierung', 'Niveau C1', 'Prüfungsrelevanz: Lesen Teil 2 · Schreiben'],
  h1: 'Funktionsverbgefüge',
  lead: 'Eine Entscheidung treffen, zur Verfügung stellen, in Betracht ziehen: feste Verb-Nomen-Verbindungen, die formelle Texte prägen — und die der Lückentext Wort für Wort abfragt.',

  content: [
    // ── 2. Lernziele ──────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'Am Ende kennst du die rund 25 rentabelsten Funktionsverbgefüge, geordnet nach ihrem Funktionsverb.',
        'Du wandelst zwischen Gefüge und einfachem Verb um (*Kritik üben ↔ kritisieren*) und wählst nach Register.',
        'Du unterscheidest die Aktiv- und die Passivvariante (*zur Verfügung **stellen** vs. **stehen***, *zum Ausdruck **bringen** vs. **kommen***).',
        'Du erkennst die grammatischen Eigenheiten der Gefüge: fester Artikel, feste Präposition, Nomen im Endfeld.',
      ],
    },

    { type: 'rule' },

    // ── 3. Kernwortschatz ─────────────────────────────────────────
    {
      type: 'wortschatz',
      eyebrow: 'Kernwortschatz',
      items: [
        { wort: 'die Entscheidung', kollokation: 'eine Entscheidung treffen', es: 'tomar una decisión' },
        { wort: 'die Maßnahme', kollokation: 'Maßnahmen ergreifen', es: 'tomar medidas' },
        { wort: 'die Verfügung', kollokation: 'zur Verfügung stellen / stehen', es: 'poner / estar a disposición' },
        { wort: 'die Rücksicht', kollokation: 'Rücksicht nehmen auf + Akk.', es: 'tener consideración con' },
        { wort: 'der Anspruch', kollokation: 'etwas in Anspruch nehmen', es: 'hacer uso de, recurrir a' },
        { wort: 'die Kritik', kollokation: 'Kritik üben an + Dat.', es: 'criticar' },
        { wort: 'der Einfluss', kollokation: 'Einfluss nehmen auf + Akk.', es: 'influir en' },
        { wort: 'die Kenntnis', kollokation: 'etwas zur Kenntnis nehmen', es: 'tomar nota de' },
        { wort: 'der Ausdruck', kollokation: 'zum Ausdruck bringen / kommen', es: 'expresar(se), manifestarse' },
        { wort: 'die Erwägung', kollokation: 'etwas in Erwägung ziehen', es: 'considerar, sopesar' },
        { wort: 'der Beitrag', kollokation: 'einen Beitrag leisten zu + Dat.', es: 'contribuir a' },
        { wort: 'die Kraft', kollokation: 'in Kraft treten / setzen', es: 'entrar en vigor / poner en vigor' },
        { wort: 'die Anwendung', kollokation: 'Anwendung finden', es: 'aplicarse' },
        { wort: 'der Druck', kollokation: 'jemanden unter Druck setzen', es: 'presionar' },
      ],
      hinweis: 'Lerne jedes Gefüge **als Ganzes**: Verb, Artikel (oder Artikellosigkeit!) und Präposition sind fest. ~~No traduzcas el verbo español: „tomar una decisión“ es *eine Entscheidung **treffen*** (no *nehmen*), „hacer una pregunta“ es *eine Frage **stellen*** (no *machen*).~~',
    },

    { type: 'rule' },

    // ── 4. Erklärung ──────────────────────────────────────────────
    {
      type: 'prose',
      eyebrow: 'Erklärung',
      card: true,
      titel: 'Verb + Nomen = neue Einheit',
      absaetze: [
        'In einem **Funktionsverbgefüge** gibt das Verb seine eigene Bedeutung fast vollständig ab — die Bedeutung trägt das Nomen. In *eine Entscheidung **treffen*** wird nichts „getroffen“; das Gefüge bedeutet schlicht *entscheiden*. Das Funktionsverb liefert nur noch Grammatik: Person, Zeit, Modus — und oft eine feine Nuance wie Beginn (*in Gang kommen*), Verursachung (*in Gang setzen*) oder Dauer (*in Verbindung stehen*).',
        'Warum der Aufwand? **Register**: Die Gefüge gehören zur Verwaltungs-, Wissenschafts- und Pressesprache — sie sind das verbale Gegenstück zum Nominalstil aus Lektion 3. **Präzision**: *zur Sprache bringen* (etwas ansprechen) und *zur Sprache kommen* (angesprochen werden) unterscheiden Perspektiven, die ein einfaches Verb verschluckt. **Aspekt**: *in Gang kommen* markiert den Beginn, *in Gang halten* die Dauer, *zum Abschluss bringen* das Ende — Nuancen, für die das einfache Verb drei verschiedene Wörter bräuchte. Und ganz praktisch: Der Lückentext fragt fast in jeder Prüfung mindestens ein Funktionsverb ab.',
      ],
    },

    {
      type: 'tabelle',
      eyebrow: 'Erklärung — Die rentabelsten Gefüge nach Funktionsverb',
      kopf: ['Funktionsverb', 'Gefüge', 'einfaches Verb'],
      zeilen: [
        ['treffen', 'eine Entscheidung / Vorkehrungen / eine Auswahl treffen', 'entscheiden · vorsorgen · auswählen'],
        ['ziehen', 'in Betracht / in Erwägung / in Zweifel ziehen', 'erwägen · anzweifeln'],
        ['stellen', 'eine Frage stellen · zur Verfügung stellen · in Frage stellen · unter Beweis stellen', 'fragen · bereitstellen · anzweifeln · beweisen'],
        ['nehmen', 'in Anspruch / Rücksicht / Einfluss / zur Kenntnis / Abschied nehmen', 'beanspruchen · berücksichtigen · beeinflussen'],
        ['kommen', 'zum Einsatz / zur Sprache / zum Ausdruck / in Frage kommen', 'eingesetzt / besprochen / ausgedrückt werden'],
        ['bringen', 'zum Ausdruck / zum Abschluss / in Ordnung / zur Sprache bringen', 'ausdrücken · abschließen · ansprechen'],
        ['setzen', 'in Kraft / in Gang / unter Druck / in Kenntnis setzen', 'starten · informieren · Druck ausüben'],
        ['leisten', 'einen Beitrag / Widerstand / Hilfe leisten', 'beitragen · sich widersetzen · helfen'],
        ['üben', 'Kritik üben an + Dat.', 'kritisieren'],
        ['finden', 'Anwendung / Beachtung / Verwendung finden', 'angewendet / beachtet / verwendet werden'],
        ['ergreifen', 'Maßnahmen / die Initiative / das Wort ergreifen', 'handeln · initiativ werden'],
        ['treten', 'in Kraft / in Verbindung / in den Streik treten', 'gültig werden · Kontakt aufnehmen · streiken'],
      ],
    },

    {
      type: 'prose',
      card: true,
      titel: 'Aktiv oder Passiv? Das System hinter den Verbpaaren',
      absaetze: [
        'Viele Gefüge existieren als **Paar**: Mit *bringen, setzen, stellen* **bewirkt** jemand etwas (aktiv-kausativ); mit *kommen, stehen, treten, geraten, finden* **geschieht** es — ohne genannten Urheber. *Die Regierung **setzt** das Gesetz in Kraft* → *Das Gesetz **tritt** in Kraft.* *Wir **stellen** Ihnen den Wagen zur Verfügung* → *Der Wagen **steht** Ihnen zur Verfügung.*',
        'Die zweite Reihe ist also ein verstecktes **Passiv** — die fünfte Passiv-Ersatzform nach Lektion 4: *Die Methode **findet** Anwendung* = *wird angewendet*. Wer das im Lesen erkennt, entschlüsselt Behördentexte doppelt so schnell. Achtung Bedeutungssprung: *in Frage **stellen*** = anzweifeln, aber *in Frage **kommen*** = eine Option sein — nicht jedes Paar ist symmetrisch.',
      ],
    },

    {
      type: 'prose',
      card: true,
      titel: 'Grammatische Eigenheiten',
      absaetze: [
        'Erstens: **Alles ist fest.** Artikel (*zur Verfügung*, aber *in Frage* ohne Artikel), Präposition und Numerus des Nomens lassen sich nicht verändern; das Nomen ist kaum erweiterbar und nicht durch ein Pronomen ersetzbar. Zweitens: Das Nomen verhält sich wie ein **trennbares Präfix** — es wandert ans Satzende: *Die Kommission **zieht** eine Verschärfung der Regeln ernsthaft **in Betracht**.*',
        'Drittens: Die **passivischen** Gefüge (*in Kraft treten*, *Anwendung finden*, *zur Verfügung stehen*) lassen sich nicht noch einmal ins Passiv setzen — sie leisten das Passiv ja bereits selbst. Die kausativen Gefüge dagegen können durchaus im Passiv stehen (*Es wurde scharfe Kritik geübt*); oft ist aber der passivische Partner oder ein eigenes Verb die elegantere Wahl: *Die Entscheidung **fällt** im Herbst* statt *wird getroffen*.',
      ],
    },

    { type: 'rule' },

    // ── 5. Beispiele ──────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele — nach Verbfamilie',
      kicker: 'stellen · stehen',
      titel: 'Bewirken vs. Bestehen',
      items: [
        { text: 'Die Universität **stellt** allen Studierenden Arbeitsplätze **zur Verfügung**.', gl: '— aktiv: jemand bewirkt es' },
        { text: 'Die Arbeitsplätze **stehen** rund um die Uhr **zur Verfügung**.', gl: '— passivisch: der Zustand besteht' },
        { text: 'Der Bericht **stellt** die bisherige Strategie offen **in Frage**.' },
        { text: 'Drei Standorte **stehen zur Diskussion** — entschieden ist nichts.' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'bringen · kommen',
      titel: 'Verursachen vs. Geschehen',
      items: [
        { text: 'Die Vorsitzende **brachte** ihre Zweifel deutlich **zum Ausdruck**.' },
        { text: 'In den Umfragen **kommt** wachsende Unzufriedenheit **zum Ausdruck**.', gl: '— dieselbe Sache, ohne Handelnden: verstecktes Passiv' },
        { text: 'Das Thema Gehalt **kam** in dem Gespräch nicht **zur Sprache**.' },
        { text: 'Für diese Aufgabe **kommen** nur erfahrene Kräfte **in Frage**.', gl: '— in Frage kommen = eine Option sein, ≠ in Frage stellen' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'nehmen · treffen · ziehen',
      titel: 'Die Arbeitspferde der Formalsprache',
      items: [
        { text: 'Immer mehr Eltern **nehmen** Beratungsangebote **in Anspruch**.' },
        { text: 'Der Aufsichtsrat **traf** die Entscheidung erst nach langer Debatte.' },
        { text: 'Die Kommission **zieht** auch ein vollständiges Verbot **in Betracht**.' },
        { text: 'Bitte **setzen** Sie uns rechtzeitig **in Kenntnis**, falls sich Ihre Pläne ändern.', gl: '— in Kenntnis setzen = informieren; Standard in formellen Nachrichten' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'Register',
      titel: 'Einfaches Verb vs. Gefüge',
      items: [
        { text: 'Viele **kritisieren** das Vorhaben. → An dem Vorhaben **wird** vielfach **Kritik geübt**.', gl: '— das Gefüge hebt das Register und entpersonalisiert' },
        { text: 'Die App **wird** in Kliniken **angewendet**. → Die App **findet** in Kliniken **Anwendung**.' },
        { text: 'Das Gesetz **gilt** ab Januar. → Das Gesetz **tritt** im Januar **in Kraft**.', gl: '— *in Kraft treten* betont den Moment des Wirksamwerdens' },
        { text: 'Die Gewerkschaft **drohte** mit Streik. → Die Gewerkschaft **stellte** einen Streik **in Aussicht**.', gl: '— in Aussicht stellen: ankündigen, ohne sich festzulegen' },
      ],
    },

    { type: 'rule' },

    // ── 6. Übungen ────────────────────────────────────────────────
    {
      type: 'uebung',
      eyebrow: 'Anwendung — Übung 1 · Erkennen',
      frage: 'Finde das Funktionsverbgefüge, gib das einfache Verb an und entscheide: aktive oder passivische Bedeutung?',
      aufgaben: [
        'Die neue Verordnung tritt am 1. März in Kraft.',
        'Der Betriebsrat übte scharfe Kritik an den Plänen.',
        'Solche Argumente finden in der Debatte kaum noch Beachtung.',
        'Die Bürgermeisterin ergriff noch am Abend das Wort.',
        'Der Vorschlag wurde von allen Fraktionen in Zweifel gezogen.',
      ],
      loesungen: [
        '*in Kraft treten* = **gültig werden** — passivische Bedeutung: niemand wird genannt, es geschieht.',
        '*Kritik üben an* = **kritisieren** — aktiv: der Betriebsrat handelt.',
        '*Beachtung finden* = **beachtet werden** — passivisch: verstecktes Passiv mit *finden*.',
        '*das Wort ergreifen* = **zu sprechen beginnen** — aktiv.',
        '*in Zweifel ziehen* = **anzweifeln** — aktiv, hier zusätzlich im echten Passiv (*wurde … gezogen*).',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 2 · Umformen',
      frage: 'Ersetze das einfache Verb durch das passende Funktionsverbgefüge — der Satz soll formeller klingen.',
      aufgaben: [
        'Die Stadt entschied erst nach Monaten.',
        'Der Verein hat wesentlich zum Erfolg des Projekts beigetragen.',
        'Die Behörde informierte die Anwohner nicht rechtzeitig.',
        'Immer mehr Patienten nutzen die Online-Sprechstunde.',
        'Das alte Verfahren wird kaum noch angewendet.',
        'Wir erwägen, den Vertrag zu kündigen.',
      ],
      loesungen: [
        'Die Stadt **traf** erst nach Monaten **eine Entscheidung**.',
        'Der Verein **hat** einen wesentlichen **Beitrag zum** Erfolg des Projekts **geleistet**.',
        'Die Behörde **setzte** die Anwohner nicht rechtzeitig **in Kenntnis**.',
        'Immer mehr Patienten **nehmen** die Online-Sprechstunde **in Anspruch**. ~~„Usar“ ≠ *benutzen* en registro formal: para servicios y prestaciones, *in Anspruch nehmen*.~~',
        'Das alte Verfahren **findet** kaum noch **Anwendung**.',
        'Wir **ziehen in Erwägung**, den Vertrag zu kündigen. / Wir **ziehen** eine Kündigung des Vertrags **in Erwägung**.',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 3 · Produzieren',
      frage: 'Schreibe die vier Stichpunkte als kurzen formellen Bericht (4-5 Sätze). Verwende mindestens **vier** verschiedene Funktionsverbgefüge, davon eines mit passivischer Bedeutung.',
      aufgabe: '*Stichpunkte einer Bürgerversammlung: — Verkehrsberuhigung: viele Anwohner dafür — Kritik: Parkplatzmangel — Stadt: prüft Tiefgarage — neue Regeln: gültig ab Sommer*',
      loesung: '**Mögliche Lösung** (andere Gefüge sind gültig, solange vier verschiedene vorkommen):\n*Auf der Bürgerversammlung **brachten** zahlreiche Anwohner ihre Unterstützung für die Verkehrsberuhigung **zum Ausdruck**. Zugleich **wurde** am Mangel an Parkplätzen deutliche **Kritik geübt**. Die Stadtverwaltung erklärte, sie **ziehe** den Bau einer Tiefgarage **in Betracht**. Die neuen Regelungen **treten** im Sommer **in Kraft**; bis dahin **steht** der bisherige Parkraum weiterhin **zur Verfügung**.*\nPassivische Bedeutung tragen hier *in Kraft treten* und *zur Verfügung stehen*. Beachte auch den Konjunktiv I (*ziehe*) — die Lektionen greifen ineinander.',
    },

    { type: 'rule' },

    // ── 7. Prüfungsbezug ──────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Lesen · Teil 2 · Lückentext',
      titel: 'Mini-Aufgabe · 6 Lücken',
      anweisung: 'Im Lückentext fehlt fast immer das Funktionsverb — das Nomen mit seiner Präposition bleibt stehen und verrät die Lösung. Wähle für jede Lücke das passende Wort — jede Option wird genau einmal gebraucht.',
      absaetze: [
        'Die neue Software {1} bereits in mehreren Abteilungen zum Einsatz. Wer sie nutzen möchte, kann eine kostenlose Schulung in Anspruch {2}. Der Betriebsrat hatte zunächst Kritik an dem Projekt {3}, zog seine Einwände jedoch zurück, nachdem die Geschäftsführung zusätzliche Mittel zur Verfügung {4} hatte. Eine Ausweitung auf weitere Standorte wird derzeit in Erwägung {5}. Die endgültige Entscheidung {6} der Vorstand voraussichtlich im Herbst.',
      ],
      optionen: ['gestellt', 'gezogen', 'geübt', 'kommt', 'nehmen', 'trifft'],
      loesungen: [
        '{1} **kommt** — *zum Einsatz kommen* = eingesetzt werden',
        '{2} **nehmen** — *in Anspruch nehmen*; nach *kann* steht der Infinitiv',
        '{3} **geübt** — *Kritik üben an + Dat.*; Plusquamperfekt: *hatte geübt*',
        '{4} **gestellt** — *zur Verfügung stellen*: die Geschäftsführung bewirkt es (aktiv)',
        '{5} **gezogen** — *in Erwägung ziehen*, hier im Passiv: *wird gezogen*',
        '{6} **trifft** — *eine Entscheidung treffen*; Subjekt ist *der Vorstand*',
      ],
      kommentar: 'Strategie: Lies vom **Nomen mit Präposition** aus rückwärts — *zum Einsatz …*, *in Anspruch …*, *zur Verfügung …* haben jeweils nur ein oder zwei mögliche Verben. Prüfe dann nur noch die Form: Infinitiv nach Modalverb, Partizip nach *haben/werden*.',
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Baue dir eine persönliche **Top-10-Liste** und wiederhole sie mit Artikel und Präposition (*Rücksicht nehmen **auf** + Akk., Kritik üben **an** + Dat.*). Im **Schreiben** heben zwei, drei Gefüge dein Register sofort — mehr wirken bürokratisch. Und im **Lesen** übersetze *finden/kommen/stehen/treten*-Gefüge innerlich ins Passiv: *findet Anwendung = wird angewendet* — so fällt die Synonymie-Falle der Aufgaben in sich zusammen.',
    },

    { type: 'rule' },

    // ── 8. Abschluss ──────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Das bleibt', 'Beispiel'],
      zeilen: [
        ['Bedeutung im Nomen, Grammatik im Verb', 'eine Entscheidung treffen = entscheiden'],
        ['bringen/setzen/stellen = aktiv-kausativ', 'in Kraft setzen · zur Verfügung stellen'],
        ['kommen/stehen/treten/finden = passivisch', 'in Kraft treten · Anwendung finden'],
        ['Alles fest: Artikel, Präposition, Numerus', 'zur Kenntnis nehmen · in Frage kommen'],
        ['Nomen wandert ans Satzende', 'zieht eine Verschärfung ernsthaft in Betracht'],
        ['Nie Wort für Wort übersetzen', 'tomar una decisión → treffen, nicht nehmen'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich kenne zu jedem großen Funktionsverb (treffen, ziehen, stellen, nehmen, kommen, bringen, setzen) die wichtigsten Gefüge.',
        'Ich wandle zwischen Gefüge und einfachem Verb um und wähle bewusst nach Register.',
        'Ich unterscheide Aktiv- und Passivvariante eines Paars und erkenne das versteckte Passiv im Lesetext.',
        'Ich verwende Artikel und Präposition jedes Gefüges korrekt — auswendig, nicht geraten.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Funktionsverbgefüge hängen ihr Nomen oft an eine feste Präposition — und Präpositionen sind auch das Thema der nächsten Lektion: die **Genitivpräpositionen** der Schriftsprache (*aufgrund, angesichts, hinsichtlich, zwecks* …). Sie sind das Rückgrat des Nominalstils aus Lektion 3 und der letzte Baustein, bevor wir uns den Konnektoren widmen.',
    },
  ],
}
