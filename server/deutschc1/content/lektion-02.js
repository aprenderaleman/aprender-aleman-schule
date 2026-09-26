// Lektion 02 · Diagnose C1 — Standortbestimmung
//
// Bloque 0 · Einführung — Selbstdiagnose: Was unterscheidet B2 von C1,
// Diagnose im Übungsheft (Grammatik/Wortschatz, Lesen, Schreibprobe) mit
// Auswertungstabelle und Selbsteinschätzung pro Modul als Grundlage des
// Studienplans.

export default {
  spec: ['Bloque 0', 'Einführung', 'Niveau C1', 'Prüfungsrelevanz: Alle vier Module'],
  h1: 'Diagnose C1 — Standortbestimmung',
  lead: 'Bevor du losläufst, bestimme deinen Standort: Die Diagnose im Übungsheft und eine Selbsteinschätzung zeigen dir, was schon C1 ist, was noch B2 ist — und welche Lektionen du zuerst brauchst.',

  content: [
    // ── 2. Lernziele ──────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'Am Ende kannst du an konkreten sprachlichen Merkmalen erklären, was einen C1-Satz von einem B2-Satz unterscheidet.',
        'Du hast Grammatik, Wortschatz, Leseverstehen und Schreibfertigkeit mit der Diagnose im Übungsheft ehrlich überprüft.',
        'Du deutest deine Ergebnisse und weißt, welche Lektionen aus Block 1 du priorisierst.',
        'Du hast für jedes Prüfungsmodul eine erste Selbsteinschätzung nach Can-do-Kriterien notiert.',
      ],
    },

    { type: 'rule' },

    // ── 3. Kernwortschatz ─────────────────────────────────────────
    {
      type: 'wortschatz',
      eyebrow: 'Kernwortschatz — Über das eigene Lernen sprechen',
      items: [
        { wort: 'die Standortbestimmung', kollokation: 'eine ehrliche Standortbestimmung vornehmen', es: 'diagnóstico, punto de partida' },
        { wort: 'die Selbsteinschätzung', kollokation: 'zu einer realistischen Selbsteinschätzung kommen', es: 'autoevaluación' },
        { wort: 'einschätzen', kollokation: 'die eigene Leistung nüchtern einschätzen', es: 'evaluar, valorar' },
        { wort: 'die Stärke', kollokation: 'seine Stärken gezielt ausbauen', es: 'punto fuerte' },
        { wort: 'die Schwäche', kollokation: 'an einer Schwäche systematisch arbeiten', es: 'punto débil' },
        { wort: 'die Lücke', kollokation: 'eine Lücke im Wortschatz schließen', es: 'laguna' },
        { wort: 'die Anforderung', kollokation: 'den Anforderungen des Niveaus genügen', es: 'exigencia, requisito' },
        { wort: 'beherrschen', kollokation: 'eine Struktur sicher beherrschen', es: 'dominar' },
        { wort: 'das Spektrum', kollokation: 'ein breites Spektrum sprachlicher Mittel', es: 'abanico, repertorio' },
        { wort: 'die Kollokation', kollokation: 'die treffende Kollokation wählen', es: 'colocación (léxica)' },
        { wort: 'das Register', kollokation: 'mühelos das Register wechseln', es: 'registro (formal/coloquial)' },
        { wort: 'differenziert', kollokation: 'sich differenziert ausdrücken', es: 'con matices, matizado' },
        { wort: 'die Geläufigkeit', kollokation: 'etwas mit großer Geläufigkeit verwenden', es: 'soltura, fluidez' },
        { wort: 'der Handlungsbedarf', kollokation: 'dringenden Handlungsbedarf erkennen', es: 'necesidad de actuar' },
      ],
      hinweis: 'Achte auf die Verbfamilien hinter den Nomen: __einschätzen → die Einschätzung__, __bestimmen → die Bestimmung__, __anfordern → die Anforderung__. Genau dieses Muster — die **Nominalisierung** — ist das Thema von Lektion 3. ~~Fíjate: casi todo el vocabulario para hablar de tu nivel ya está en Nominalstil.~~',
    },

    { type: 'rule' },

    // ── 4. Erklärung ──────────────────────────────────────────────
    {
      type: 'prose',
      eyebrow: 'Erklärung',
      card: true,
      titel: 'C1 ist kein neues Deutsch',
      absaetze: [
        'Zwischen B2 und C1 liegt kein Katalog unbekannter Grammatik: Passiv, Konjunktiv und Relativsätze kennst du längst. Der Unterschied liegt in drei Dingen. Erstens **Verfügbarkeit**: Du erkennst die Strukturen nicht nur, du **produzierst** sie — spontan, korrekt, ohne Nachdenkpause. Zweitens **Präzision**: Statt *machen*, *gut* und *Sache* wählst du das treffende Verb, das differenzierende Adjektiv, die feste Kollokation. Drittens **Registerbewusstsein**: Du schreibst eine formelle Nachricht anders, als du mit Freunden sprichst — und zwar absichtlich, nicht zufällig.',
        'Der GER beschreibt C1 so: Du verstehst **implizite Bedeutungen**, drückst dich **spontan und fließend** aus, ohne öfter erkennbar nach Worten suchen zu müssen, und gebrauchst die Sprache **wirksam und flexibel**. Kurz: Auf B2 sagst du, *was* du meinst; auf C1 sagst du es **so, wie** du es meinst.',
      ],
    },

    {
      type: 'vergleich',
      eyebrow: 'Erklärung — Derselbe Gedanke, zwei Niveaus',
      titel: 'Meinung zum Homeoffice — einmal B2, einmal C1',
      zeilen: [
        { satz: 'Ich finde, dass Homeoffice gut ist, weil man Zeit spart und weil man zu Hause besser arbeiten kann.', label: 'B2 — korrekt, aber additiv: *gut*, zweimal *weil*, keine Verdichtung' },
        { satz: 'Meines Erachtens überwiegen beim Homeoffice die Vorteile: Der Wegfall des Arbeitswegs spart nicht nur Zeit, sondern ermöglicht vielen auch konzentrierteres Arbeiten.', label: 'C1 — Nominalisierung (*der Wegfall*), zweiteiliger Konnektor (*nicht nur … sondern auch*), präzises Adjektiv (*konzentrierter*)' },
        { satz: 'Ich schreibe Ihnen, weil das Zimmer nicht gut war und ich mein Geld zurückhaben will.', label: 'B2 — verständlich, aber im falschen Register für eine Beschwerde' },
        { satz: 'Ich wende mich an Sie, da der Zustand des Zimmers in keiner Weise der Beschreibung entsprach, und bitte Sie daher um eine angemessene Erstattung.', label: 'C1 — formelles Register: *sich wenden an*, *entsprechen* + Dativ, *um Erstattung bitten*' },
      ],
    },

    {
      type: 'tabelle',
      eyebrow: 'Erklärung — Woran man C1 erkennt',
      kopf: ['Dimension', 'Typisch B2', 'Typisch C1'],
      zeilen: [
        ['Wortschatz', 'Allerweltswörter: machen, sagen, gut, Sache', 'präzise Verben und Nomen: ergreifen, betonen, Maßnahme, Auffassung'],
        ['Kollokationen', 'frei (und oft falsch) kombiniert', 'feste Verbindungen sitzen: eine Entscheidung treffen, Kritik üben'],
        ['Strukturen', 'Nebensätze mit weil, dass, wenn', 'Nominalstil, Partizipialattribute, Passiversatz, Konjunktiv'],
        ['Textaufbau', 'Sätze gereiht: und, aber, dann', 'Konnektoren der Schriftsprache: allerdings, folglich, je … desto'],
        ['Register', 'ein Stil für alle Situationen', 'bewusster Wechsel zwischen formell und informell'],
        ['Fehler', 'auch Grundfehler (Kasus, Verbstellung)', 'nur noch Feinheiten — Grundfehler fallen sofort auf'],
      ],
    },

    {
      type: 'prose',
      card: true,
      titel: 'Die Spielregeln der Diagnose',
      absaetze: [
        'Die eigentliche Diagnose findest du im **Übungsheft** dieser Lektion: einen Grammatik- und Wortschatzteil, einen Lesetext und eine Schreibprobe. Damit sie etwas taugt, gelten drei Regeln. **Ohne Hilfsmittel** — kein Wörterbuch, keine Suchmaschine, keine KI. **Erst alles lösen, dann prüfen** — wer nach jeder Aufgabe in die Lösung schaut, misst sein Kurzzeitgedächtnis, nicht sein Deutsch. **Jede Unsicherheit notieren** — die Strukturen, bei denen du gezögert oder dich geirrt hast, sind nachher der Schlüssel zur Auswertungstabelle weiter unten.',
        'Und vor allem: Bewerte dich nicht wohlwollend. Eine geschönte Standortbestimmung fühlt sich heute besser an und kostet dich in drei Monaten Wochen. ~~Sé duro contigo hoy: cada fallo que maquilles ahora reaparecerá el día del examen.~~',
      ],
    },

    { type: 'rule' },

    // ── 5. Beispiele ──────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele — B2 und C1 nebeneinander',
      kicker: 'Wortschatz',
      titel: 'Vom Allerweltswort zum präzisen Ausdruck',
      items: [
        { text: 'B2: *Die Stadt hat viele Sachen gemacht, damit weniger Autos fahren.* → C1: **Die Stadt hat zahlreiche Maßnahmen ergriffen, um den Autoverkehr einzudämmen.**', gl: '— *Maßnahmen ergreifen*, *eindämmen*: konkret statt allgemein' },
        { text: 'B2: *Immer mehr Leute finden das wichtig.* → C1: **Diese Auffassung gewinnt zunehmend an Bedeutung.**', gl: '— Funktionsverbgefüge: *an Bedeutung gewinnen*' },
        { text: 'B2: *Das Problem ist in den letzten Jahren sehr groß geworden.* → C1: **Das Problem hat sich in den letzten Jahren deutlich verschärft.**', gl: '— *sich verschärfen*: ein Verb ersetzt vier Wörter' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'Strukturen',
      titel: 'Dieselbe Information, dichter verpackt',
      items: [
        { text: 'B2: *Weil die Mieten gestiegen sind, ziehen viele Familien weg.* → C1: **Aufgrund gestiegener Mieten ziehen viele Familien weg.**', gl: '— Nominalstil: Lektion 3' },
        { text: 'B2: *die Studie, die letztes Jahr veröffentlicht wurde* → C1: **die im vergangenen Jahr veröffentlichte Studie**', gl: '— erweitertes Partizipialattribut: Lektion 7' },
        { text: 'B2: *Man kann das Problem nicht schnell lösen.* → C1: **Das Problem lässt sich nicht kurzfristig lösen.**', gl: '— Passiversatz mit *sich lassen*: Lektion 4' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'Register',
      titel: 'Gesprochen und geschrieben sind zwei Sprachen',
      items: [
        { text: 'gesprochen: *Ich krieg das Geld einfach nicht zurück.* → formelle Nachricht: **Die zugesagte Erstattung ist bislang ausgeblieben.**', gl: '— *kriegen* existiert im formellen Schreiben nicht' },
        { text: 'gesprochen: *Können Sie mir sagen, was das kostet?* → formelle Nachricht: **Ich wäre Ihnen dankbar, wenn Sie mir die anfallenden Kosten mitteilen könnten.**' },
        { text: 'gesprochen: *Das geht so nicht.* → Diskussion: **Dieses Vorgehen halte ich für äußerst problematisch.**', gl: '— gleiche Kritik, prüfungstaugliches Register' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'Kollokationen',
      titel: 'Wo das Spanische hineinfunkt',
      items: [
        { text: 'nicht *eine Entscheidung nehmen*, sondern **eine Entscheidung treffen**', gl: '— calco de «tomar una decisión»' },
        { text: 'nicht *eine Frage machen*, sondern **eine Frage stellen**', gl: '— calco de «hacer una pregunta»' },
        { text: 'nicht *Kritik machen*, sondern **Kritik üben an** + Dativ', gl: '— calco de «hacer una crítica»' },
        { text: 'nicht *einen Vortrag geben*, sondern **einen Vortrag halten**', gl: '— calco de «dar una charla»; también: *eine Rede halten*' },
      ],
    },

    { type: 'rule' },

    // ── 6. Mehr Beispiele, Modelltext & Auswertung (Diagnose → Übungsheft) ──
    {
      type: 'beispiele',
      eyebrow: 'Mehr Beispiele',
      titel: 'Über den eigenen Lernstand sprechen',
      items: [
        { text: 'Eine ehrliche **Standortbestimmung** zeigt nicht nur **Lücken**, sondern auch **Stärken**, die man gezielt ausbauen kann.', gl: '— *nicht nur …, sondern auch*' },
        { text: 'Viele Lernende **schätzen** ihr Leseverstehen höher **ein** als ihre Fähigkeit, sich schriftlich **differenziert** auszudrücken.', gl: '— *etwas höher / realistisch einschätzen*' },
        { text: 'Wer die Strukturen der Mittelstufe sicher **beherrscht**, hat für C1 bereits ein solides Fundament.', gl: '— *beherrschen*: dominar, sin preposición' },
        { text: 'Erst ein breites **Spektrum** an **Kollokationen** verleiht einem Text jene Präzision, die das Niveau verlangt.', gl: '— *ein breites Spektrum an* + Dativ' },
        { text: 'In der Schreibprobe fiel mir auf, dass ich das **Register** kaum wechsle — hier sehe ich dringenden **Handlungsbedarf**.', gl: '— *Handlungsbedarf sehen / erkennen*' },
        { text: 'Um den **Anforderungen** der Prüfung zu genügen, muss man komplexe Strukturen mit einer gewissen **Geläufigkeit** verwenden.', gl: '— *den Anforderungen genügen* + Dativ' },
      ],
    },
    {
      type: 'modell',
      eyebrow: 'Modelltext — eine Stellungnahme auf C1-Niveau',
      thema: 'Sollte an Universitäten die Anwesenheitspflicht abgeschafft werden?',
      woerter: 'ca. 90 Wörter',
      absaetze: [
        'Meines Erachtens sollte die Anwesenheitspflicht weitgehend abgeschafft werden. Studierende sind Erwachsene, die selbst einschätzen können, welche Veranstaltungen ihrem Lernfortschritt dienen; durch die Aufzeichnung von Vorlesungen lässt sich der Stoff ohnehin flexibel nachholen. Allerdings halte ich Ausnahmen für sinnvoll: In Seminaren, die vom Austausch leben, ist Anwesenheit keine Formalität, sondern Voraussetzung für das Gelingen. Statt einer starren Pflicht wäre daher ein differenziertes Modell wünschenswert, das je nach Veranstaltungsform entscheidet. So würde die Eigenverantwortung gestärkt, ohne die Qualität der Lehre zu gefährden.',
      ],
      annotationen: [
        { tag: 'Position', text: 'Klare These, Begründung und eine Einschränkung (*Allerdings …*) — die Stellungnahme wirkt dadurch abgewogen statt einseitig.' },
        { tag: 'Konnektoren', text: 'Jenseits von *und*, *aber*, *weil*: *allerdings*, *daher*, *statt*, *ohne … zu*.' },
        { tag: 'Strukturen', text: 'Nominalisierung (*die Aufzeichnung von Vorlesungen*), Passiversatz (*lässt sich nachholen*), Konjunktiv II (*wäre wünschenswert*, *würde gestärkt*).' },
        { tag: 'Checkliste', text: 'Prüfe deine Schreibprobe aus dem Übungsheft an genau diesen Punkten: Position mit Begründung und Einschränkung · Konnektoren der Schriftsprache · mindestens eine Nominalisierung, ein Passiv oder ein *sich lassen* · präzise Verben statt *machen*, *sein*, *haben* · korrekter Kasus nach Präpositionen (*trotz des*, *mit dem*, *für die*). Jedes fehlende Merkmal ist kein Versagen, sondern ein Wegweiser.' },
      ],
    },
    {
      type: 'tabelle',
      eyebrow: 'Auswertung — von der Diagnose zum Lernplan',
      kopf: ['Unsicher im Übungsheft bei …', 'Baustelle', 'Zuerst dorthin'],
      zeilen: [
        ['*aufgrund* / *ungeachtet* + Genitiv, *sich lassen* + Infinitiv', 'Verdichtung, unpersönlicher Stil', 'Lektion 3 (Nominalstil) · Lektion 4 (Passiv)'],
        ['indirekter Rede (*sei*, *sprächen*), irrealem Bedingungssatz (*wäre gekommen*)', 'Konjunktiv', 'Lektion 5 (Konjunktiv I) · Lektion 6 (Konjunktiv II)'],
        ['Partizipialattribut (*der … veröffentlichten Studie*), *trotz* + Genitiv', 'Attribute und Genitiv', 'Lektion 7 (Partizipialattribute) · Lektion 9 (Genitivpräpositionen)'],
        ['*je … desto*, Relativsatz mit *woran*, Vermutung mit *dürfte* + Infinitiv Perfekt', 'Konnektoren, Satzgefüge, Modalverben', 'Lektion 11 (Zweiteilige Konnektoren) · Lektion 12 (Relativsätze komplex) · Lektion 13 (Modalverben subjektiv)'],
        ['festen Verbindungen (*eine Entscheidung treffen*)', 'Kollokationen, präzises Verb', 'Lektion 8 (Funktionsverbgefüge) · Lektion 15 (Wortbildung & Kollokationen)'],
        ['der Schreibprobe (Checkliste im Modelltext)', 'Textaufbau und Register', 'Lektion 10 (Konnektoren der Schriftsprache) · Lektionen 23–25 (Modul Schreiben)'],
      ],
    },

    { type: 'rule' },

    // ── 7. Prüfungsbezug ──────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Prüfungsbezug — Selbsteinschätzung pro Modul',
      kopf: ['Modul', 'Can-do-Kriterium auf C1 — bewerte: sicher / teils / noch nicht'],
      zeilen: [
        ['Lesen', 'Ich verstehe lange, komplexe Texte im Detail und erfasse auch implizit geäußerte Meinungen.'],
        ['Lesen', 'Ich erschließe unbekannte Wörter aus dem Kontext, ohne den Lesefluss zu verlieren.'],
        ['Hören', 'Ich folge einem längeren Vortrag oder einer Diskussion auch bei nur einmaligem Hören.'],
        ['Hören', 'Ich erkenne Standpunkte und Sprecherabsichten, auch wenn sie nur angedeutet werden.'],
        ['Schreiben', 'Ich strukturiere einen argumentativen Text klar und verbinde die Absätze flüssig.'],
        ['Schreiben', 'Ich passe Stil und Register der Textsorte an — ein Forumsbeitrag klingt anders als eine formelle Nachricht.'],
        ['Sprechen', 'Ich halte einen strukturierten Kurzvortrag und reagiere flexibel auf Nachfragen.'],
        ['Sprechen', 'Ich vertrete meinen Standpunkt in einer Diskussion differenziert, höflich und ohne lange Pausen.'],
      ],
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Notiere deine acht Bewertungen **schriftlich und mit Datum**. Mehr als ein „noch nicht“ in einem Modul heißt: Dieses Modul bekommt in Block 2 (Lektionen 16–28) deine meiste Übungszeit. Und rechne damit, dass Selbsteinschätzungen nach oben driften — vergleiche sie deshalb spätestens in der Prüfungssimulation (Lektion 39) mit deinen echten Ergebnissen und korrigiere den Plan.',
    },

    { type: 'rule' },

    // ── 8. Abschluss ──────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung — Dein Studienplan in fünf Blöcken',
      kopf: ['Block', 'Lektionen', 'Was du dort holst'],
      zeilen: [
        ['0 · Einführung', '1–2', 'Prüfungsformat kennen, Standort bestimmen — mit dieser Lektion erledigt'],
        ['1 · Sprachliche Konsolidierung', '3–15', 'die C1-Strukturen aus den Diagnose-Tests — in der Reihenfolge deiner Auswertungstabelle'],
        ['2 · Prüfungsstrategie', '16–28', 'Modul für Modul: Aufgabentypen, Strategien, Zeitmanagement'],
        ['3 · Themenfelder', '29–38', 'Wortschatz und Argumente zu den zehn häufigsten Prüfungsthemen'],
        ['4 · Prüfungssimulation', '39–40', 'zwei komplette Durchläufe unter Echtbedingungen — der Realitätscheck deiner Selbsteinschätzung'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich kann an konkreten Merkmalen erklären, was einen C1-Text von einem B2-Text unterscheidet.',
        'Ich habe die Diagnose im Übungsheft ehrlich und ohne Hilfsmittel bearbeitet und meine Unsicherheiten notiert.',
        'Ich weiß, welche zwei bis drei Lektionen aus Block 1 ich zuerst brauche.',
        'Ich habe für jedes Modul eine datierte Selbsteinschätzung, die ich später überprüfen kann.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Deine Standortbestimmung steht — jetzt beginnt die Arbeit. Block 1 startet dort, wo fast jede Diagnose Handlungsbedarf zeigt: beim Unterschied zwischen gesprochenem und geschriebenem Deutsch. In der nächsten Lektion lernst du mit dem **Nominalstil** die Verdichtungstechnik kennen, die Fachtexte und Berichte prägt — und die der Lückentext im Modul Lesen gezielt abfragt.',
    },
  ],
}
