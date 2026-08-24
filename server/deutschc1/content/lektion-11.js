// Lektion 11 · Zweiteilige Konnektoren

export default {
  spec: ['Bloque 1', 'Sprachliche Konsolidierung', 'Niveau C1', 'Prüfungsrelevanz: Lesen Teil 2 · Schreiben · Sprechen'],
  h1: 'Zweiteilige Konnektoren',
  lead: 'Sowohl … als auch, je … desto, zwar … aber: Konnektorenpaare, die zwei Gedanken in eine Struktur spannen — mit Stellungsregeln, die man kennen muss.',

  content: [
    // ── 2. Lernziele ──────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'Am Ende kannst du die neun wichtigsten Konnektorenpaare nach ihrer Funktion einsetzen: Addition, Alternative, Einräumung, Proportion, Abwägung.',
        'Du beherrschst die Sonderstellung des Verbs bei *je … desto* und die Inversionsregeln bei *entweder … oder* und *einerseits … andererseits*.',
        'Du wählst bei *sowohl … als auch* und *weder … noch* die richtige Verbform (Singular/Plural).',
        'Du vermeidest die typischen Interferenzfehler des Spanischen: doppelte Verneinung bei *weder … noch* und die Wort-für-Wort-Übertragung von *cuanto más*.',
      ],
    },

    { type: 'rule' },

    // ── 3. Kernwortschatz ─────────────────────────────────────────
    {
      type: 'wortschatz',
      eyebrow: 'Kernwortschatz',
      items: [
        { wort: 'sowohl … als auch', kollokation: 'sowohl beruflich als auch privat', es: 'tanto … como' },
        { wort: 'nicht nur … sondern auch', kollokation: 'nicht nur teuer, sondern auch riskant', es: 'no solo … sino también' },
        { wort: 'weder … noch', kollokation: 'weder Zeit noch Geld haben', es: 'ni … ni' },
        { wort: 'entweder … oder', kollokation: 'entweder jetzt oder nie', es: 'o … o (bien)' },
        { wort: 'zwar … aber', kollokation: 'zwar verständlich, aber falsch', es: 'es cierto que … pero' },
        { wort: 'je … desto/umso', kollokation: 'je früher, desto besser', es: 'cuanto más … más' },
        { wort: 'einerseits … andererseits', kollokation: 'einerseits reizvoll, andererseits riskant', es: 'por un lado … por otro' },
        { wort: 'teils … teils', kollokation: 'teils aus Neugier, teils aus Pflicht', es: 'en parte … en parte' },
        { wort: 'mal … mal', kollokation: 'mal begeistert, mal gleichgültig', es: 'unas veces … otras' },
        { wort: 'die Abwägung', kollokation: 'eine sorgfältige Abwägung der Argumente', es: 'ponderación' },
        { wort: 'die Wechselwirkung', kollokation: 'die Wechselwirkung zweier Faktoren', es: 'interacción' },
        { wort: 'sich die Waage halten', kollokation: 'Vor- und Nachteile halten sich die Waage', es: 'estar equilibrados' },
      ],
      hinweis: 'Merke dir jedes Paar als **feste Einheit mit fester Reihenfolge**: *als auch* kann nie allein stehen, *desto* nie ohne *je*. Und: Beide Teile verbinden immer **gleichrangige** Elemente — zwei Subjekte, zwei Adjektive, zwei Sätze, nie Äpfel mit Birnen.',
    },

    { type: 'rule' },

    // ── 4. Erklärung ──────────────────────────────────────────────
    {
      type: 'prose',
      eyebrow: 'Erklärung',
      card: true,
      titel: 'Was zweiteilige Konnektoren leisten',
      absaetze: [
        'Ein einfacher Konnektor verbindet nachträglich; ein **zweiteiliger Konnektor kündigt an**. Wer *sowohl* liest, wartet auf *als auch*; wer *einerseits* hört, erwartet *andererseits*. Diese Erwartungsspannung macht Texte kohärent — und genau deshalb prüft der Lückentext in Lesen Teil 2 so gern den zweiten Teil eines Paares: Der erste Teil steht im Text und verrät die Lösung.',
        'Funktional decken die Paare fünf Bedeutungen ab: **Addition** (*sowohl … als auch*, *nicht nur … sondern auch*), **negative Addition** (*weder … noch*), **Alternative** (*entweder … oder*), **Einräumung mit Gegenzug** (*zwar … aber*) und **Proportion bzw. Verteilung** (*je … desto*, *einerseits … andererseits*, *teils … teils*, *mal … mal*).',
      ],
    },

    {
      type: 'tabelle',
      eyebrow: 'Erklärung — Syntax der Paare im Überblick',
      kopf: ['Paar', 'Verbindet', 'Verbstellung / Besonderheit'],
      zeilen: [
        ['sowohl … als auch', 'Satzglieder', 'Verb meist im **Plural**: Sowohl A als auch B **sind** …'],
        ['nicht nur … sondern auch', 'Satzglieder & Sätze', 'Verb richtet sich nach dem **näheren** Subjekt; bei Spitzenstellung Inversion: Nicht nur **ist** es teuer, sondern …'],
        ['weder … noch', 'Satzglieder & Sätze', 'schon verneint — **kein zusätzliches nicht/kein**; Verb bei zwei Singularen bevorzugt Singular'],
        ['entweder … oder', 'Satzglieder & Sätze', 'entweder in Position 1 → Inversion *oder* Position 0: Entweder **kommt** er mit, oder er bleibt.'],
        ['zwar … aber', 'Sätze', 'zwar ist Adverb im 1. Satz; aber verbindet in Position 0'],
        ['je … desto/umso', 'zwei Komparative', 'je + Komparativ + **Nebensatz (Verb Ende)**; desto + Komparativ + **Verb sofort**'],
        ['einerseits … andererseits', 'Sätze', 'beide Adverbien → Inversion in beiden Teilsätzen'],
        ['teils … teils / mal … mal', 'Satzglieder & Sätze', 'Adverbien; parallele, oft verkürzte Strukturen'],
      ],
    },

    {
      type: 'prose',
      card: true,
      titel: 'Die Königsstruktur: je … desto',
      absaetze: [
        'Kein Paar wird häufiger falsch gebaut. Die Regel ist streng: Der **je-Teil ist ein Nebensatz** — Komparativ direkt nach *je*, konjugiertes Verb ganz am Ende. Der **desto-Teil ist der Hauptsatz** — Komparativ direkt nach *desto*, und dann **sofort das konjugierte Verb**: __Je früher Sie buchen, desto günstiger wird der Flug.__',
        'Das spanische Muster verführt zu zwei Fehlern: ~~«Cuanto más estudias, más aprendes» no lleva verbo desplazado — de ahí el error típico *„Je mehr du lernst, desto mehr du verstehst“*.~~ Richtig: *Je mehr du lernst, **desto mehr verstehst du**.* Zweiter Fehler: Der Komparativ klebt am Konnektor. *Je Sie früher buchen* ist falsch — es heißt *je früher Sie buchen*. Statt *desto* geht auch **umso**, ohne Bedeutungsunterschied.',
      ],
    },

    {
      type: 'prose',
      card: true,
      titel: 'Verbkongruenz und Verneinung: die Detailfragen',
      absaetze: [
        '**sowohl … als auch:** Beide Elemente gelten als aufgezählt, daher steht das Verb überwiegend im **Plural**: *Sowohl der Bund als auch die Länder **sind** beteiligt.* Der Singular ist möglich, wenn beide Glieder Singular sind, wirkt aber markiert.',
        '**weder … noch:** Bei zwei singularischen Subjekten gilt der **Singular** als stilistisch sauber (*Weder der Preis noch die Qualität **überzeugt***), der Plural ist zulässig. Entscheidend ist etwas anderes: Das Paar ist **bereits negativ**. *~Ich habe nicht weder Zeit noch Lust~* ist ein direkter Kalk aus dem Spanischen — im Deutschen zerstört das zweite *nicht* den Satz.',
        '**nicht nur … sondern auch:** Das Verb richtet sich nach dem **näher stehenden** Subjekt: *Nicht nur der Preis, sondern auch die Lieferzeiten **sprechen** dagegen.* Und *nicht nur* steht **unmittelbar vor** dem Element, das es hervorhebt — nicht irgendwo im Satz.',
      ],
    },

    { type: 'rule' },

    // ── 5. Beispiele ──────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele — nach Funktion',
      kicker: 'additiv',
      titel: 'Hinzufügen und verneinen',
      items: [
        { text: '**Sowohl** die Anwohner **als auch** die Händler wurden in die Planung einbezogen.', gl: '— Verb im Plural' },
        { text: 'Das Konzept überzeugt **nicht nur** fachlich, **sondern auch** wirtschaftlich.' },
        { text: '**Nicht nur** die Kosten sind gestiegen, **sondern auch** die Erwartungen der Kunden haben sich verändert.', gl: '— verbindet hier zwei ganze Sätze' },
        { text: '**Weder** der Bericht **noch** die Stellungnahme enthält konkrete Zahlen.', gl: '— kein zusätzliches *nicht*!' },
        { text: 'Die Maßnahme ist **weder** wirksam **noch** bezahlbar.' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'alternativ · konzessiv',
      titel: 'Entweder-oder und Zwar-aber',
      items: [
        { text: '**Entweder** senken wir die Kosten, **oder** wir verlieren den Auftrag.', gl: '— entweder in Position 1 → Inversion' },
        { text: 'Sie können **entweder** telefonisch **oder** per E-Mail einen Termin vereinbaren.' },
        { text: '**Zwar** ist die Idee originell, **aber** sie lässt sich nicht finanzieren.', gl: '— zwar kündigt das aber schon an' },
        { text: 'Das Angebot ist **zwar** verlockend, ein näherer Blick offenbart **aber** erhebliche Mängel.' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'proportional',
      titel: 'Je … desto',
      items: [
        { text: '**Je früher** Sie sich anmelden, **desto größer** ist die Auswahl an Terminen.' },
        { text: '**Je komplexer** ein System wird, **umso anfälliger** ist es für Fehler.', gl: '— umso = desto' },
        { text: '**Je länger** die Debatte dauerte, **desto weniger** Zuhörer folgten ihr.', gl: '— auch mit *mehr/weniger* + Nomen' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'abwägend',
      titel: 'Einerseits … andererseits, teils … teils, mal … mal',
      items: [
        { text: '**Einerseits** entlastet das Homeoffice die Beschäftigten, **andererseits** erschwert es die Zusammenarbeit.', gl: '— Inversion in beiden Teilsätzen' },
        { text: 'Die Reaktionen fielen **teils** begeistert, **teils** ablehnend aus.' },
        { text: 'Die Bewerbungen kamen **teils** aus dem Inland, **teils** aus dem Ausland.' },
        { text: 'Er wirkt **mal** hochmotiviert, **mal** völlig abwesend.', gl: '— eher mündlich; in der Schriftsprache: *bald … bald*' },
      ],
    },

    { type: 'rule' },

    // ── 6. Übungen ────────────────────────────────────────────────
    {
      type: 'uebung',
      eyebrow: 'Anwendung — Übung 1 · Erkennen',
      frage: 'In jedem Satz steckt ein Fehler, der mit einem zweiteiligen Konnektor zusammenhängt. Finde und erkläre ihn.',
      aufgaben: [
        'Je mehr man übt, desto sicherer man wird.',
        'Ich habe weder nicht angerufen noch geschrieben.',
        'Sowohl der Direktor als auch anwesend war die Stellvertreterin.',
        'Entweder wir verschieben das Treffen, sondern wir kürzen die Tagesordnung.',
        'Das Hotel ist zwar günstig, desto liegt es weit vom Zentrum entfernt.',
      ],
      loesungen: [
        'Im desto-Teil fehlt die Inversion: *…, **desto sicherer wird man**.* Der desto-Teil ist der Hauptsatz — Verb sofort nach dem Komparativ.',
        '*weder … noch* ist bereits verneint: *Ich habe **weder** angerufen **noch** geschrieben.* ~~El calco de «no he llamado ni…» es el error número uno de los hispanohablantes aquí.~~',
        'Die Paare verbinden **parallele** Elemente: *Sowohl der Direktor als auch die Stellvertreterin **waren** anwesend.*',
        'Falscher Partner: *entweder* verlangt *oder*, nicht *sondern*: *Entweder verschieben wir das Treffen, **oder** wir kürzen die Tagesordnung.*',
        'Falscher Partner: *zwar* verlangt *aber* (oder *doch/jedoch*): *…, **aber** es liegt weit vom Zentrum entfernt.*',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 2 · Umformen',
      frage: 'Verbinde die beiden Aussagen mit dem Paar in Klammern. Achte auf Verbstellung und Kongruenz.',
      aufgaben: [
        'Die Miete ist hoch. Die Lage ist schlecht. *(nicht nur … sondern auch)*',
        'Man kann das Formular online ausfüllen. Man kann es per Post schicken. *(entweder … oder)*',
        'Die Werbung verspricht viel. Das Produkt hält wenig. *(je … desto — formuliere frei mit mehr/weniger)*',
        'Der Vorschlag hat Vorteile. Er hat auch Risiken. *(einerseits … andererseits)*',
        'Die Regierung hat nicht reagiert. Die Opposition hat nicht reagiert. *(weder … noch)*',
        'Das Konzert war gut besucht. Die Kritiken waren schlecht. *(zwar … aber)*',
      ],
      loesungen: [
        'Die Wohnung ist **nicht nur** teuer, **sondern auch** schlecht gelegen. — Oder als Satzverbindung: *Nicht nur ist die Miete hoch, sondern auch die Lage ist schlecht.*',
        'Sie können das Formular **entweder** online ausfüllen **oder** per Post schicken.',
        '**Je mehr** die Werbung verspricht, **desto weniger** hält das Produkt. — *umso weniger* ist gleichwertig.',
        '**Einerseits** hat der Vorschlag Vorteile, **andererseits** birgt er Risiken. — Inversion in beiden Teilen.',
        '**Weder** die Regierung **noch** die Opposition **hat** reagiert. — Singular bei zwei singularischen Subjekten; Plural wäre zulässig.',
        '**Zwar** war das Konzert gut besucht, **aber** die Kritiken fielen schlecht aus.',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 3 · Produzieren',
      frage: 'Schreibe die Abwägungspassage eines Diskussionsbeitrags zum Thema „Sollten Museen freien Eintritt anbieten?“ (4-6 Sätze). Verwende **drei verschiedene** Paare, darunter zwingend *je … desto*. Markiere die Paare.',
      aufgabe: '*Stichpunkte: kultureller Zugang für alle · Finanzierungslücke · Besucherzahlen · Qualität der Ausstellungen*',
      loesung: '**Mögliche Lösung** (jede Kombination aus drei Paaren mit korrekter Syntax ist richtig):\n***Einerseits** öffnet freier Eintritt die Museen für Menschen, die sich den Besuch bisher nicht leisten konnten, **andererseits** reißt er eine erhebliche Finanzierungslücke. Dabei gilt: **Je niedriger** die Eintrittsschwelle ist, **desto breiter** wird das Publikum — das zeigen die Erfahrungen aus Großbritannien. Freier Eintritt nützt also **nicht nur** den Besuchern, **sondern auch** dem gesellschaftlichen Auftrag der Häuser. Die Politik muss folglich **entweder** die Ausfälle vollständig ersetzen **oder** auf das Modell verzichten; eine halbherzige Lösung gefährdet die Qualität der Ausstellungen.*\n~~Observa que cada par une elementos paralelos: dos frases, dos comparativos, dos infinitivos. Ese paralelismo es lo que puntúa en «Strukturen».~~',
    },

    { type: 'rule' },

    // ── 7. Prüfungsbezug ──────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Lesen · Teil 2 · Lückentext',
      titel: 'Mini-Aufgabe · 6 Lücken',
      anweisung: 'Zweiteilige Konnektoren sind ein Klassiker des Lückentexts: Meist steht ein Teil des Paares im Text und der andere fehlt. Wähle für jede Lücke das passende Wort aus der Liste.',
      absaetze: [
        'Ehrenamtliches Engagement steht {1} bei Jüngeren {2} bei Älteren hoch im Kurs — die Motive freilich unterscheiden sich. Die einen engagieren sich {3} aus Überzeugung, teils aus dem Wunsch, Berufserfahrung zu sammeln. {4} bleibt die Zahl der Engagierten insgesamt stabil, doch die Bereiche verschieben sich: Klassische Vereine verlieren Mitglieder, digitale Initiativen {5} gewinnen stetig hinzu. Und je flexibler eine Organisation ihre Aufgaben zuschneidet, {6} leichter findet sie Freiwillige.',
      ],
      optionen: ['teils', 'desto', 'sowohl', 'hingegen', 'als auch', 'Zwar'],
      loesungen: [
        '{1} **sowohl** — der Partner *als auch* folgt in Lücke 2',
        '{2} **als auch** — vervollständigt das Paar',
        '{3} **teils** — das zweite *teils* steht bereits im Text und verrät die Lösung',
        '{4} **Zwar** — Adverb in Position 1 mit Inversion (*bleibt die Zahl …*); die Gegenwendung löst hier *doch* ein',
        '{5} **hingegen** — adversatives Adverb nach dem Subjekt (Lektion 10!)',
        '{6} **desto** — *je flexibler …* verlangt zwingend *desto/umso* + Komparativ + Verb',
      ],
      kommentar: 'Strategie: Bei Paaren gilt **„ein Teil verrät den anderen“**. Lies vor dem Einsetzen den ganzen Satz und suche nach *als auch, noch, oder, desto, andererseits, teils* — steht einer davon im Text, ist die Lücke fast schon gelöst.',
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Im **Sprechen** (Diskussion) ist *einerseits … andererseits* dein bestes Werkzeug, um eine Abwägung zu strukturieren, bevor du Stellung beziehst. Im **Schreiben** prüfe nach jedem Paar drei Dinge: Sind beide Teile da? Sind die verbundenen Elemente parallel? Stimmt die Verbstellung im desto-Teil? Diese drei Kontrollfragen fangen fast alle Punktabzüge ab.',
    },

    { type: 'rule' },

    // ── 8. Abschluss ──────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Das bleibt', 'Beispiel'],
      zeilen: [
        ['Paare verbinden Paralleles', 'sowohl der Bund als auch die Länder'],
        ['weder … noch ist schon negativ', 'kein zusätzliches nicht/kein'],
        ['je + Nebensatz · desto + Inversion', 'Je mehr du übst, desto sicherer wirst du.'],
        ['sowohl … als auch → Verb meist Plural', 'Sowohl A als auch B sind beteiligt.'],
        ['nicht nur … sondern auch → nahes Subjekt', 'Nicht nur der Preis, sondern auch die Fristen sprechen dagegen.'],
        ['einerseits … andererseits → 2× Inversion', 'Einerseits entlastet es, andererseits erschwert es …'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich kenne alle neun Paare mit Funktion und festem Partner.',
        'Ich baue *je … desto* mit Verbletztstellung im je-Teil und Inversion im desto-Teil.',
        'Ich verneine mit *weder … noch* ohne zusätzliches *nicht*.',
        'Ich strukturiere eine Abwägung mündlich und schriftlich mit *einerseits … andererseits* und *zwar … aber*.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Konnektoren verketten Sätze — doch C1-Texte verdichten Information auch **innerhalb** des Satzes: mit Relativsätzen, die Genitive, Präpositionen und ganze Aussagen aufnehmen können. In der nächsten Lektion lernst du *dessen* und *deren*, *worauf* und *wobei* — und wann ein Partizipialattribut die elegantere Wahl ist.',
    },
  ],
}
