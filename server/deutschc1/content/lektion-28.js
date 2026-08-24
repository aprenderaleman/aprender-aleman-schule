// Lektion 28 · Sprechen Teil 2 — Die Diskussion
//
// Bloque 2 «Prüfungsstrategie», última lección: Interaktion in der
// Paarprüfung + mini-síntesis de la estrategia global de los 4 módulos.
// Ausblick → 29 «Bildung & Ausbildung» (inicio de los campos temáticos).

export default {
  spec: ['Bloque 2', 'Prüfungsstrategie', 'Niveau C1', 'Prüfungsrelevanz: Sprechen Teil 2 (Diskussion mit Partner)'],
  h1: 'Sprechen Teil 2 — Die Diskussion',
  lead: 'Kein zweiter Monolog, sondern ein echtes Gespräch: Wer zuhört, anknüpft und mit Nuancen widerspricht, sammelt hier die Interaktionspunkte.',

  content: [
    // ── 2. Lernziele ──────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'Am Ende kannst du in einer Diskussion höflich das Wort ergreifen, abgeben und deinen Partner ausreden lassen — und trotzdem präsent bleiben.',
        'Du knüpfst explizit an die Beiträge deines Partners an, statt vorbereitete Sätze abzuspulen.',
        'Du stimmst zu und widersprichst mit Nuancen — von voller Zustimmung bis zum klaren, aber höflichen Widerspruch.',
        'Du überblickst die Prüfungsstrategie aller vier Module und weißt, wie du deine verbleibende Vorbereitungszeit verteilst.',
      ],
    },

    { type: 'rule' },

    // ── 3. Kernwortschatz ─────────────────────────────────────────
    {
      type: 'wortschatz',
      eyebrow: 'Kernwortschatz — die Sprache der Interaktion',
      items: [
        { wort: 'zustimmen', kollokation: 'jemandem in einem Punkt zustimmen', es: 'estar de acuerdo (con alguien)' },
        { wort: 'widersprechen', kollokation: 'da muss ich Ihnen widersprechen', es: 'contradecir, discrepar' },
        { wort: 'einräumen', kollokation: 'einen berechtigten Punkt einräumen', es: 'admitir, conceder' },
        { wort: 'anknüpfen an', kollokation: 'an das Gesagte anknüpfen', es: 'enlazar con, retomar' },
        { wort: 'aufgreifen', kollokation: 'ein Argument aufgreifen', es: 'retomar, recoger (una idea)' },
        { wort: 'der Einwand', kollokation: 'einen Einwand vorbringen', es: 'objeción' },
        { wort: 'entgegnen', kollokation: 'darauf lässt sich entgegnen, dass…', es: 'replicar' },
        { wort: 'nachvollziehen', kollokation: 'ich kann Ihren Standpunkt gut nachvollziehen', es: 'comprender (la lógica de algo)' },
        { wort: 'die Meinung teilen', kollokation: 'diese Meinung teile ich nur bedingt', es: 'compartir la opinión' },
        { wort: 'unterbrechen', kollokation: 'darf ich Sie kurz unterbrechen?', es: 'interrumpir' },
        { wort: 'sich einigen auf', kollokation: 'sich auf einen Kompromiss einigen', es: 'ponerse de acuerdo en' },
        { wort: 'der Kompromiss', kollokation: 'einen Kompromiss aushandeln', es: 'compromiso ~~= acuerdo mutuo, no «compromiso» de obligación~~' },
        { wort: 'überzeugend', kollokation: 'ein überzeugendes Argument', es: 'convincente' },
        { wort: 'bedingt', kollokation: 'dem stimme ich nur bedingt zu', es: 'con reservas, parcialmente' },
      ],
      hinweis: 'Falscher Freund mit Sprengkraft: **der Kompromiss** ist die Einigung in der Mitte — ~~el «compromiso» español (obligación, cita) es *die Verpflichtung* o *der Termin*~~. Und **widersprechen** verlangt den Dativ: *Ich widerspreche **Ihnen*** — nicht *Sie*.',
    },

    { type: 'rule' },

    // ── 4. Erklärung ──────────────────────────────────────────────
    {
      type: 'prose',
      eyebrow: 'Erklärung',
      card: true,
      titel: 'Was Teil 2 wirklich prüft',
      absaetze: [
        'Ihr erhaltet eine **Streitfrage** — oft mit zwei gegensätzlichen Positionen als Anstoß — und diskutiert **etwa fünf Minuten miteinander**. Bewertet wird neben Sprache und Inhalt vor allem die __Interaktion__: aufeinander eingehen, das Gespräch gemeinsam entwickeln, zu einem Ergebnis oder Kompromiss finden.',
        'Der häufigste Fehler ist der **Parallelmonolog**: Beide sagen abwechselnd ihre vorbereitete Meinung auf, keiner reagiert auf den anderen. Das kostet genau die Punkte, die Teil 2 vergibt. Die Faustregel lautet: **Jeder deiner Beiträge beginnt beim Partner** — mit einem Aufgreifen, einer Bewertung oder einer Rückfrage — **und endet mit einem Angebot**: einer Frage, einer offenen These, einem halben Kompromiss, an dem der Partner weiterbauen kann.',
      ],
    },

    {
      type: 'steps',
      eyebrow: 'Erklärung — Der Dreischritt eines guten Redebeitrags',
      steps: [
        {
          badge: '1',
          titel: 'Beim Partner andocken',
          text: 'Nimm auf, was gesagt wurde — wörtlich oder sinngemäß: *Sie haben eben gesagt, dass… / Ihr Punkt mit den Kosten…* Das beweist Zuhören und erzeugt Kohärenz über die Sprecherwechsel hinweg.',
        },
        {
          badge: '2',
          titel: 'Position beziehen — mit Nuance',
          text: 'Volle Zustimmung, teilweise Zustimmung oder Widerspruch — aber begründet: *Da stimme ich Ihnen nur bedingt zu, denn…* Die Nuance (*bedingt, teilweise, im Kern*) ist das C1-Signal schlechthin.',
        },
        {
          badge: '3',
          titel: 'Dem Partner einen Ball zuspielen',
          text: 'Ende offen: *Wie sehen Sie das? / Wäre das nicht auch ein Weg…?* So entsteht ein Gespräch statt einer Rednerliste — und du zeigst Gesprächsführung, die extra bewertet wird.',
        },
      ],
    },

    {
      type: 'tabelle',
      eyebrow: 'Erklärung — Die Skala der Zustimmung',
      kopf: ['Grad', 'Redemittel', 'Wirkung'],
      zeilen: [
        ['volle Zustimmung', 'Da bin ich ganz Ihrer Meinung. / Genau das sehe ich auch so.', 'verbindet — aber allein zu wenig: ergänze ein eigenes Argument'],
        ['Zustimmung + Ergänzung', 'Dem stimme ich zu — und ich würde noch ergänzen, dass…', 'die produktivste Form: Konsens plus neuer Inhalt'],
        ['teilweise Zustimmung', 'Im Kern haben Sie recht, allerdings…', 'die C1-Königsform: einräumen und differenzieren'],
        ['höflicher Widerspruch', 'Da bin ich anderer Meinung, denn… / Das sehe ich etwas anders.', 'völlig legitim — Begründung ist Pflicht'],
        ['klarer Widerspruch', 'Da muss ich Ihnen entschieden widersprechen.', 'sparsam einsetzen, nie ohne Begründung, nie persönlich'],
      ],
    },

    {
      type: 'prose',
      card: true,
      titel: 'Streiten ohne Streit',
      absaetze: [
        'Eine Prüfungsdiskussion ist kein Duell: **Du musst nicht gewinnen, du musst interagieren.** Widerspruch richtet sich immer gegen das Argument, nie gegen die Person — *Das Argument überzeugt mich nicht ganz* statt *Da liegen Sie falsch*. Und wenn ihr euch zu schnell einig seid, entsteht das umgekehrte Problem: nichts zu verhandeln. Dann eröffne selbst eine Differenz: *Einverstanden — aber beim Punkt der Finanzierung sehe ich es anders als Sie.*',
        'Gegen Ende lohnt der Blick aufs Ergebnis: *Vielleicht können wir uns darauf einigen, dass…* Ein gemeinsam formulierter Kompromiss ist der eleganteste Schlusspunkt, den Teil 2 kennt. ~~En español la discusión vehemente es señal de interés; en el examen alemán, la señal de nivel es la discrepancia serena y bien argumentada.~~',
      ],
    },

    {
      type: 'redemittel',
      eyebrow: 'Redemittel — Interaktion',
      gruppen: [
        {
          fn: 'Das Wort ergreifen / höflich unterbrechen',
          saetze: [
            { satz: 'Darf ich da kurz einhaken?' },
            { satz: 'Wenn ich an dieser Stelle etwas ergänzen darf: …' },
            { satz: 'Entschuldigung, dass ich unterbreche — aber genau dazu habe ich einen Punkt.' },
          ],
        },
        {
          fn: 'Sich auf den Partner beziehen',
          saetze: [
            { satz: 'Sie haben eben gesagt, dass… — das finde ich bemerkenswert, weil…' },
            { satz: 'Da möchte ich an Ihren Punkt anknüpfen.' },
            { satz: 'Ihr Beispiel zeigt sehr gut, dass…' },
          ],
        },
        {
          fn: 'Nuanciert zustimmen',
          saetze: [
            { satz: 'Im Kern stimme ich Ihnen zu, allerdings…' },
            { satz: 'Das sehe ich im Prinzip genauso — mit einer Einschränkung: …' },
          ],
        },
        {
          fn: 'Höflich widersprechen',
          saetze: [
            { satz: 'Da bin ich anderer Meinung, denn…' },
            { satz: 'Ich kann Ihren Standpunkt gut nachvollziehen, teile ihn aber nicht, weil…' },
            { satz: 'Ist es nicht eher so, dass…?', gloss: '~~la objeción disfrazada de pregunta: suave y muy eficaz~~' },
          ],
        },
        {
          fn: 'Das Wort abgeben / zum Ergebnis kommen',
          saetze: [
            { satz: 'Wie sehen Sie das?' },
            { satz: 'Vielleicht können wir uns darauf einigen, dass…' },
            { satz: 'Ich glaube, in einem Punkt sind wir uns einig: …' },
          ],
        },
      ],
    },

    { type: 'rule' },

    // ── 5. Beispiele + Modell ─────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele — Reaktionen mit Niveau',
      kicker: 'Anknüpfen',
      titel: 'Jeder Beitrag beginnt beim Partner',
      items: [
        { text: '**Schwach:** *Ich finde, Autos sollten aus der Innenstadt verschwinden.* → **Stark:** ***Sie haben die Händler erwähnt** — gerade deren Kunden kämen aber entspannter in eine autofreie Innenstadt.*', gl: '— dasselbe Argument, aber am Partnerbeitrag festgemacht' },
        { text: '**Schwach:** *Ja. Und außerdem ist da noch das Klima.* → **Stark:** ***Ihr Punkt überzeugt mich** — und er wiegt noch schwerer, wenn man das Klima dazunimmt.*' },
        { text: '**Schwach:** *(Schweigen, Nicken)* → **Stark:** *Da haben Sie etwas Wichtiges angesprochen. **Heißt das aus Ihrer Sicht**, dass die Stadt investieren müsste?*', gl: '— aktives Zuhören hörbar machen: bewerten + rückfragen' },
      ],
    },

    {
      type: 'modell',
      eyebrow: 'Diskussionsmodell — kommentiert',
      thema: 'Streitfrage: Sollten Innenstädte autofrei werden?',
      woerter: 'Ausschnitt · ca. 2 Minuten Gesprächszeit',
      absaetze: [
        '**A:** Für mich überwiegen die Vorteile klar: weniger Lärm, bessere Luft, mehr Platz für Menschen statt für parkende Autos. ==Wie sehen Sie das?==',
        '**B:** ==Im Kern stimme ich Ihnen zu, allerdings== blenden Sie eine Gruppe aus: Menschen mit eingeschränkter Mobilität und Familien mit kleinen Kindern sind auf das Auto oft angewiesen. Für die ist „autofrei“ schnell „zugangsfrei“.',
        '**A:** ==Das ist ein berechtigter Einwand, den ich gern aufgreife.== Nur: Muss die Antwort darauf wirklich der Privatwagen sein? Barrierefreie Busse und Lieferzonen könnten genau diese Gruppen sogar besser bedienen als der heutige Parkplatzsuchverkehr.',
        '**B:** ==Da bin ich anderer Meinung, denn== der Nahverkehr müsste dafür erst massiv ausgebaut werden — und das dauert Jahre. ==Ist es nicht eher so, dass== ein sofortiges Verbot die Schwächsten träfe, während die Alternative noch gar nicht existiert?',
        '**A:** ==Ihr Punkt mit der Reihenfolge überzeugt mich.== Dann lassen Sie uns die Bedingung festhalten: erst der Ausbau, dann die Sperrung — Zone für Zone statt von heute auf morgen.',
        '**B:** ==Ich glaube, da sind wir uns einig:== autofrei ja, aber schrittweise und mit Ausnahmen für die, die das Auto wirklich brauchen.',
      ],
      annotationen: [
        { tag: 'Ball zuspielen', text: 'A endet mit einer offenen Frage — das Gespräch kann gar nicht zum Monolog werden.' },
        { tag: 'Nuancierte Zustimmung', text: 'B räumt den Kern ein (*im Kern … allerdings*) und bringt eine neue Perspektive: die Königsform.' },
        { tag: 'Einwand aufgreifen', text: 'A benennt den Einwand ausdrücklich als berechtigt, bevor er entgegnet — Widerspruch ohne Konfrontation.' },
        { tag: 'Frage als Einwand', text: 'B verpackt den Widerspruch in *Ist es nicht eher so, dass…?* — weich in der Form, hart in der Sache.' },
        { tag: 'Kompromiss', text: 'Beide formulieren das Ergebnis gemeinsam: der eleganteste Schluss, den Teil 2 kennt.' },
      ],
    },

    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Zwei bis drei Redebeiträge von je **drei, vier Sätzen** sind besser als ein einziger langer: Die Interaktion wird pro Sprecherwechsel sichtbar, nicht pro Minute Redezeit. Und gib deinem Partner nie das Gefühl, verhört zu werden — **eine** Rückfrage pro Beitrag genügt.',
    },

    { type: 'rule' },

    // ── 6. Übungen ────────────────────────────────────────────────
    {
      type: 'uebung',
      eyebrow: 'Anwendung — Übung 1 · Erkennen',
      frage: 'Welche Interaktionsfunktion erfüllt jede Äußerung: Wort ergreifen, anknüpfen, nuanciert zustimmen, höflich widersprechen oder Kompromiss anbahnen?',
      aufgaben: [
        '„Vielleicht können wir uns darauf einigen, dass beides nötig ist: Verbote und Anreize.“',
        '„Darf ich da kurz einhaken? Genau bei den Kosten sehe ich das Problem.“',
        '„Ich kann Ihren Standpunkt gut nachvollziehen, teile ihn aber nicht, weil die Zahlen dagegen sprechen.“',
        '„Ihr Beispiel mit den Schulkantinen zeigt sehr gut, worum es eigentlich geht.“',
        '„Das sehe ich im Prinzip genauso — mit einer Einschränkung, was die Finanzierung betrifft.“',
      ],
      loesungen: [
        '**Kompromiss anbahnen** — gemeinsames Ergebnis wird vorgeschlagen.',
        '**Wort ergreifen** — höfliche Unterbrechung mit sofortiger inhaltlicher Rechtfertigung.',
        '**Höflich widersprechen** — Verständnis zeigen (*nachvollziehen*), dann begründet ablehnen.',
        '**Anknüpfen** — der Beitrag des Partners wird ausdrücklich gewürdigt und weitergeführt.',
        '**Nuanciert zustimmen** — Zustimmung mit benannter Einschränkung.',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 2 · Anwenden',
      frage: 'Dein Partner sagt in der Diskussion die folgenden Sätze. Reagiere jeweils mit dem Dreischritt: andocken → Position mit Nuance → Ball zurückspielen.',
      aufgaben: [
        '„Streaming hat das Kino überflüssig gemacht — wer geht denn noch ins Kino?“',
        '„Ohne Noten würden Schüler doch gar nichts mehr lernen.“',
        '„Künstliche Intelligenz wird mehr Arbeitsplätze schaffen als vernichten.“',
      ],
      loesungen: [
        '*Sie sprechen einen echten Wandel an — die Zahlen geben Ihnen ja teilweise recht. Allerdings erlebt das Kino gerade bei Großproduktionen ein Comeback, weil das Gemeinschaftserlebnis zu Hause fehlt. Oder sehen Sie das als vorübergehende Nostalgie?*',
        '*Ich verstehe den Gedanken dahinter: Noten schaffen Verbindlichkeit. Da stimme ich Ihnen aber nur bedingt zu, denn Motivation entsteht nachweislich eher durch Rückmeldung als durch Ziffern. Wäre ein Mittelweg — Noten erst ab der Oberstufe — für Sie denkbar?*',
        '*Das ist eine optimistische These, die ich gern aufgreife. Im Kern mag sie stimmen, allerdings trifft der Übergang genau die, die sich am schwersten umschulen lassen. Müsste man also nicht zuerst über Weiterbildung sprechen, bevor man Entwarnung gibt?* ~~Fíjate: las tres respuestas acaban en pregunta — el balón siempre vuelve al compañero.~~',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 3 · Produzieren',
      frage: 'Schreibe ein Diskussions-Skript von sechs Redebeiträgen (A–B–A–B–A–B) zur Streitfrage „Sollte Werbung für ungesunde Lebensmittel verboten werden?“ — A ist dafür, B dagegen, am Ende steht ein Kompromiss. Lies es anschließend laut mit verteilten Rollen oder nimm beide Stimmen selbst auf.',
      aufgabe: 'Pflicht: mindestens ein *Im Kern … allerdings*, eine Frage als Einwand (*Ist es nicht eher so…?*) und ein gemeinsam formulierter Kompromiss.',
      loesung: '**Mögliche Lösung** (gekürzt — dein Skript darf länger sein):\n*A: Werbung für Zucker und Fast Food zielt gezielt auf Kinder — ein Verbot wäre überfällig. Wie sehen Sie das?*\n*B: Im Kern verstehe ich die Sorge, allerdings halte ich Verbote für den falschen Weg: Aufklärung wirkt nachhaltiger als Bevormundung.*\n*A: Da knüpfe ich gern an — nur: Aufklärung und Werbemilliarden kämpfen nicht mit gleichen Waffen. Ist es nicht eher so, dass Kinder Werbung gar nicht kritisch einordnen können?*\n*B: Bei Kindern gebe ich Ihnen recht, das räume ich ein. Bei Erwachsenen aber sollte der Staat nicht entscheiden, was auf den Teller kommt.*\n*A: Dann liegt der Kompromiss ja fast auf dem Tisch: ein Verbot nur für Werbung, die sich an Kinder richtet.*\n*B: Darauf können wir uns einigen — Kinderwerbung verbieten, Erwachsene aufklären.*',
    },

    { type: 'rule' },

    // ── 7. Prüfungsbezug ──────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Sprechen · Teil 2 · komplette Aufgabe',
      titel: 'Diskussion „Vier-Tage-Woche“ · ca. 5 Minuten',
      anweisung: 'Simuliere die Diskussion mit einem Lernpartner — oder allein mit verteilten Rollen. Nutzt die Positionen als Startpunkt, entwickelt das Gespräch mit dem Dreischritt und findet am Ende einen Kompromiss. Das Thema kennst du aus Lektion 24 — genau so ein Wiedersehen ist in der Prüfung wahrscheinlich: Schreib- und Sprechthemen stammen aus denselben Feldern.',
      absaetze: [
        '**Aufgabenblatt:** „Diskutieren Sie miteinander: Sollten Unternehmen die Vier-Tage-Woche einführen?\nPosition 1: Die Vier-Tage-Woche macht Beschäftigte gesünder und produktiver.\nPosition 2: Die Vier-Tage-Woche ist ein Privileg für Büroberufe und spaltet die Arbeitswelt.“',
      ],
      loesungen: [
        '**Möglicher Einstieg (A):** *Ich übernehme gern Position 1: Die Pilotprojekte zeigen weniger Krankmeldungen bei gleicher Leistung. Überzeugt Sie das nicht auch?*',
        '**Mögliche Reaktion (B):** *Im Kern schon — allerdings stammen diese Zahlen fast nur aus Büroberufen. Sie haben die Produktivität erwähnt: Wie soll eine Pflegekraft dieselbe Arbeit in vier Tagen schaffen?*',
        '**Fortführung (A):** *Ein berechtigter Einwand. Vielleicht ist die Antwort dort keine Verdichtung, sondern mehr Personal — finanziert durch die Einsparungen bei den Krankheitskosten. Wäre das für Sie ein gangbarer Weg?*',
        '**Möglicher Kompromiss (beide):** *Wir sind uns einig, dass die Vier-Tage-Woche dort eingeführt werden sollte, wo sie erprobt ist, während andere Branchen zuerst andere Entlastungen brauchen — Pauschallösungen helfen niemandem.*',
      ],
      loesungLabel: 'Mögliche Lösung (Gesprächsverlauf)',
      kommentar: 'Achte in deiner Simulation auf die drei bewerteten Bewegungen: **aufgreifen** (Bezug auf das Gesagte), **differenzieren** (Zustimmung/Widerspruch mit Nuance), **einigen** (gemeinsames Ergebnis). Wer alle drei zeigt, hat die Interaktionspunkte sicher — unabhängig davon, welche Position „gewinnt“.',
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Nimm in der Diskussion notfalls die Position, die **nicht** deine eigene ist, wenn dir dazu mehr einfällt — bewertet wird deine Sprache, nicht deine Überzeugung. Und wenn der Partner deine geplanten Argumente „wegnimmt“: perfekt. Zustimmen, ergänzen, differenzieren — das ist mehr wert als jedes Originalargument.',
    },

    { type: 'rule' },

    // ── 8. Abschluss ──────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung — Deine Strategie für alle vier Module',
      kopf: ['Modul', 'Format', 'Der eine entscheidende Hebel'],
      zeilen: [
        ['Lesen', '65 Min · 4 Teile', 'Zeit pro Teil deckeln; Nominalphrasen als versteckte Nebensätze lesen'],
        ['Hören', 'ca. 40 Min · 4 Teile', 'vor dem Hören die Aufgaben lesen — hören, was gefragt ist'],
        ['Schreiben', '75 Min · 2 Aufgaben', '40/30/5, alle Leitpunkte abhaken, letzte 5 Min Fehlerjagd (Genus · Komma · Verb)'],
        ['Sprechen', 'ca. 15 Min · Paarprüfung', 'Vortrag: Gerüst + feste Klammer · Diskussion: andocken → Nuance → Ball zurück'],
        ['Alle Module', '100 Punkte · ab 60 bestanden', 'erst die Aufgabe erfüllen, dann glänzen — in jedem Modul'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich kann in einer Diskussion höflich das Wort ergreifen, abgeben und meinen Partner einbinden.',
        'Jeder meiner Redebeiträge dockt beim Partner an und endet mit einem Angebot an ihn.',
        'Ich beherrsche die Skala von voller Zustimmung bis zu klarem Widerspruch — immer mit Begründung.',
        'Ich kann für jedes der vier Prüfungsmodule meinen wichtigsten strategischen Hebel benennen.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Damit ist der Strategie-Block abgeschlossen: Du kennst jedes Modul, jedes Format und jeden Bewertungshebel. Ab der nächsten Lektion wechselt der Kurs die Perspektive — von der Form zum Inhalt. Den Auftakt der Themenfelder macht **„Bildung & Ausbildung“**: der Wortschatz, die Debatten und die Textsorten rund um Schule, Studium und lebenslanges Lernen, mit denen die Prüfung ihre Aufgaben am liebsten füllt.',
    },
  ],
}
