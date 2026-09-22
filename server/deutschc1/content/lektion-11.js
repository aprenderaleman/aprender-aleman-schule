// Lektion 11 · Zweiteilige Konnektoren

export default {
  spec: ['Bloque 1', 'Sprachliche Konsolidierung', 'Niveau C1', 'Prüfungsrelevanz: Schreiben · Sprechen · Lesen Teil 2'],
  h1: 'Zweiteilige Konnektoren',
  lead: 'Die sieben Paare kennst du aus B2 — auf C1 entscheiden Verbkongruenz, stilistische Inversion und gehobene Varianten wie bald … bald darüber, ob ein Text nur korrekt ist oder geschrieben klingt.',

  content: [
    // ── 2. Lernziele ──────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'Am Ende wählst du bei *sowohl … als auch*, *nicht nur … sondern auch*, *entweder … oder* und *weder … noch* die korrekte Verbform — auch in den echten Zweifelsfällen.',
        'Du setzt die stilistische Inversion der Schriftsprache gezielt ein: *Nicht nur ist die Lage ernst, …* — *Weder war er informiert, noch …*',
        'Du ordnest die gehobenen Paare *bald … bald*, *halb … halb* und *teils … teils* auf der Registerskala richtig ein.',
        'Du kombinierst Konnektorenpaare mit den Adverbien aus Lektion 10 (*gleichwohl, folglich, hingegen*) zu einem kohärenten Argumentationsabsatz.',
      ],
    },

    { type: 'rule' },

    // ── 3. Kernwortschatz ─────────────────────────────────────────
    {
      type: 'wortschatz',
      eyebrow: 'Kernwortschatz',
      items: [
        { wort: 'bald … bald', kollokation: 'bald euphorisch, bald resigniert reagieren', es: 'ya … ya, tan pronto … como' },
        { wort: 'halb … halb', kollokation: 'halb aus Neugier, halb aus Pflichtgefühl', es: 'mitad … mitad' },
        { wort: 'teils … teils', kollokation: 'teils aus Überzeugung, teils aus Kalkül', es: 'en parte … en parte' },
        { wort: 'mal … mal', kollokation: 'mal begeistert, mal gleichgültig', es: 'unas veces … otras (coloquial)' },
        { wort: 'die Kongruenz', kollokation: 'die Kongruenz zwischen Subjekt und Verb', es: 'concordancia' },
        { wort: 'die Spitzenstellung', kollokation: 'nicht nur in Spitzenstellung', es: 'posición inicial' },
        { wort: 'gleichrangig', kollokation: 'zwei gleichrangige Elemente verbinden', es: 'del mismo rango' },
        { wort: 'markiert', kollokation: 'eine stilistisch markierte Wortstellung', es: 'marcado (estilísticamente)' },
        { wort: 'schwanken', kollokation: 'zwischen zwei Extremen schwanken', es: 'oscilar' },
        { wort: 'sich die Waage halten', kollokation: 'Vor- und Nachteile halten sich die Waage', es: 'estar equilibrados' },
      ],
      hinweis: 'Jedes Paar ist eine **feste Einheit** und verbindet immer **gleichrangige** Elemente: zwei Subjekte, zwei Adjektive, zwei Sätze.',
    },

    { type: 'rule' },

    // ── 4. Erklärung ──────────────────────────────────────────────
    {
      type: 'prose',
      eyebrow: 'Erklärung',
      card: true,
      titel: 'Vom B2-Repertoire zu den C1-Fragen',
      absaetze: [
        'Das Repertoire kennst du aus B2 — hier die Kurzform in der Tabelle, mehr braucht es nicht. Neu sind drei Fragen, die ein anspruchsvoller Text stellt: **Welche Verbform** verlangt ein doppeltes Subjekt? **Welche Wortstellung** hebt das Register? Und **welche Paare** kennt die Schriftsprache über die Klassiker hinaus?',
        'Ein Paar richtig zu wählen ist B2 — es **kongruent** zu bauen und im **passenden Register** einzusetzen ist C1: genau das bewertet das Kriterium „Strukturen“.',
      ],
    },

    {
      type: 'tabelle',
      eyebrow: 'Erklärung — Kurzform: das Repertoire aus B2',
      kopf: ['Paar', 'Funktion', 'Merkregel'],
      zeilen: [
        ['sowohl … als auch', 'beides', 'verbindet Gleichrangiges'],
        ['nicht nur … sondern auch', 'beides + Steigerung', 'Komma vor *sondern*'],
        ['weder … noch', 'keins von beiden', 'schon negativ — kein extra *nicht/kein*'],
        ['entweder … oder', 'nur eins', '*entweder* in Position 1 oder 0'],
        ['zwar … aber', 'Einräumung + Gegenzug', '*zwar* in Position 1 → Inversion'],
        ['je … desto/umso', 'Proportion', 'je + Nebensatz · desto + Komparativ + Verb'],
        ['einerseits … andererseits', 'Abwägung', 'beide Adverbien → zweimal Inversion'],
      ],
    },

    {
      type: 'prose',
      card: true,
      titel: 'Kernfrage 1 · Verbkongruenz: Welche Verbform bei zwei Subjekten?',
      absaetze: [
        '**sowohl … als auch** zählt beide Subjekte zusammen — das Verb steht im **Plural**: *Sowohl die Geschäftsführung als auch der Betriebsrat **waren** informiert.* Der Singular wäre nur markiert. **weder … noch** bevorzugt dagegen bei zwei Singularen den **Singular** (*Weder der Antrag noch die Begründung **überzeugt***); der Plural ist zulässig.',
        '**nicht nur … sondern auch** und **entweder … oder** richten das Verb nach dem **näher stehenden Subjekt** — die Reihenfolge entscheidet mit: *Nicht nur der Preis, sondern auch die Lieferzeiten **sprechen** dagegen*, gedreht aber: *… sondern auch der Preis **spricht** dagegen.* Ebenso: *Entweder der Verlag oder die Autorin **trägt** die Kosten.*',
        'Der echte Zweifelsfall: kollidierende **Personen**. *Entweder du oder ich* — *muss? musst?* Grammatisch gilt das nähere Subjekt, doch das klingt schief. Die elegante Lösung: das Verb **doppelt setzen** — *Entweder fährst du, oder ich fahre.* ~~En español el conflicto ni se nota («o tú o yo tenemos que ir»); en alemán la salida limpia es repetir el verbo.~~',
      ],
    },

    {
      type: 'steps',
      eyebrow: 'Erklärung — Kernfrage 2 · Die stilistische Inversion',
      steps: [
        {
          badge: 'nicht nur',
          titel: 'Nicht nur in Spitzenstellung',
          text: 'In der gehobenen Schriftsprache eröffnet *nicht nur* den Satz, das konjugierte Verb folgt sofort: __Nicht nur **ist** die Lage ernst, sondern es **fehlt** auch an Zeit.__ *auch* wandert hinter das Verb des zweiten Teilsatzes — das Markenzeichen von Kommentar und Essay.',
        },
        {
          badge: 'weder … noch',
          titel: 'Weder … noch als Satzpaar',
          text: '*weder* und *noch* können je einen Satz eröffnen — mit Inversion in **beiden** Hälften: __**Weder** war die Behörde informiert, **noch** hatte sie zugestimmt.__ — schärfer als *nicht … und auch nicht*.',
        },
        {
          badge: 'entweder',
          titel: 'Entweder mit Inversion',
          text: 'Position 0 ohne Folgen (*Entweder wir senken …*) oder Position 1 mit Inversion: __**Entweder** senken wir die Kosten, oder wir verlieren den Auftrag.__ Die invertierte Variante ist die schriftsprachliche — sie gibt der Alternative etwas Ultimatives.',
        },
      ],
    },

    {
      type: 'prose',
      card: true,
      titel: 'Kernfrage 3 · Die Paare der Schriftsprache',
      absaetze: [
        'Für den Wechsel zwischen zwei Zuständen gibt es eine **Registerskala**: *mal … mal* (mündlich) → *teils … teils* (neutral-schriftlich) → **bald … bald** (gehoben, journalistisch-literarisch). Inhaltlich gleich, im Ton verschieden: *Er wirkt mal motiviert, mal abwesend* sagt man; *Die Märkte reagierten **bald** euphorisch, **bald** panisch* schreibt man.',
        '**halb … halb** mischt zwei Anteile in einem Zustand oder Motiv, oft mit *aus* + Dativ: *Sie sagte zu — **halb** aus Überzeugung, **halb** aus Pflichtgefühl.* **teils … teils** verteilt eine Menge auf zwei Gruppen und taugt sogar als eigenständige Antwort. ~~Ojo con el registro: *bald … bald* en una charla informal suena tan raro como «ora … ora» en un bar.~~',
      ],
    },

    { type: 'rule' },

    // ── 5. Beispiele ──────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele — nach Kernfrage',
      kicker: 'Kongruenz',
      titel: 'Welche Verbform?',
      items: [
        { text: '**Sowohl** der Senat **als auch** die Bezirke **sind** für die Schulen zuständig.', gl: '— Addition → Plural' },
        { text: '**Nicht nur** die Miete, **sondern auch** die Nebenkosten **steigen**.', gl: '— näheres Subjekt im Plural' },
        { text: '**Nicht nur** die Nebenkosten, **sondern auch** die Miete **steigt**.', gl: '— gedreht → Singular' },
        { text: '**Entweder** die Agentur **oder** der Verlag **übernimmt** die Korrektur.', gl: '— näheres Subjekt entscheidet' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'Inversion',
      titel: 'Die gehobene Spitzenstellung',
      items: [
        { text: '**Nicht nur** ist die Studienlage dünn, **sondern** die wenigen Daten widersprechen sich **auch**.', gl: '— Verb sofort nach *nicht nur*' },
        { text: '**Weder** war die Ministerin informiert, **noch** hatte ihr Haus den Bericht gesehen.', gl: '— Inversion in beiden Hälften' },
        { text: '**Weder** lässt sich der Termin halten, **noch** gibt es einen Ersatzplan.' },
        { text: '**Entweder** gelingt der Umbau in diesem Jahrzehnt, **oder** er gelingt gar nicht.', gl: '— das Ultimative der invertierten Variante' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'gehoben',
      titel: 'Bald … bald, halb … halb, teils … teils',
      items: [
        { text: 'Die Kritik fiel **bald** wohlwollend, **bald** vernichtend aus.', gl: '— gehobener Wechsel' },
        { text: 'Er verfolgte die Debatte **halb** fasziniert, **halb** beunruhigt.', gl: '— zwei Anteile eines Zustands' },
        { text: 'Die Bewerbungen kamen **teils** aus dem Inland, **teils** aus dem Ausland.', gl: '— neutral-schriftlich' },
        { text: '„Überzeugt Sie das Konzept?“ — „**Teils, teils**.“', gl: '— als eigenständige Antwort' },
      ],
    },
    {
      type: 'modell',
      eyebrow: 'Beispiele — Modellabsatz, kommentiert',
      thema: 'Diskussionsbeitrag „Sollten Innenstädte autofrei werden?“ — Paare + Adverbien aus Lektion 10',
      woerter: '~75 Wörter',
      absaetze: [
        '**Sowohl** der Handel **als auch** die Anwohner **sind** von der Verkehrswende unmittelbar betroffen — ihre Interessen halten sich freilich nicht immer die Waage. **Nicht nur** ist die Luftbelastung in den Zentren zu hoch, **sondern** der Durchgangsverkehr verdrängt **auch** den Fußverkehr. **Gleichwohl** wäre ein sofortiges Verbot verfehlt, denn **je** abrupter der Umbau erfolgt, **desto** größer ist der Widerstand. **Folglich** empfiehlt sich ein Stufenplan: **Entweder** gelingt der Umstieg mit Übergangsfristen, **oder** er gelingt gar nicht.',
      ],
      annotationen: [
        { tag: 'Kongruenz', text: '*Sowohl … als auch* mit zwei Subjekten → Verb im Plural (*sind*).' },
        { tag: 'Inversion', text: '*Nicht nur ist …* hebt das Register; *auch* rückt hinter das Verb des zweiten Teilsatzes.' },
        { tag: 'Lektion 10', text: '*Gleichwohl* und *folglich* rahmen die Paare — je ein Adverb pro Gedankenschritt.' },
        { tag: 'Paar + Paar', text: '*je … desto* trägt die Begründung, das invertierte *entweder … oder* die Schlussfolgerung.' },
      ],
    },

    { type: 'rule' },

    // ── 6. Übungen ────────────────────────────────────────────────
    {
      type: 'uebung',
      eyebrow: 'Anwendung — Übung 1 · Erkennen',
      frage: 'Kongruenz-Fehlerjagd: Prüfe in jedem Satz die Verbform. Korrigiere, wo nötig — zwei Sätze sind bereits korrekt.',
      aufgaben: [
        'Sowohl die Geschäftsführung als auch der Betriebsrat war über die Pläne informiert.',
        'Nicht nur die Kosten, sondern auch der Zeitplan sprechen gegen das Projekt.',
        'Weder die Ministerin noch ihr Sprecher wollte sich äußern.',
        'Entweder der Verlag oder die Autorin tragen die Korrekturkosten.',
        'Sowohl der Bericht als auch die Stellungnahme fehlen noch.',
      ],
      loesungen: [
        'Korrektur: *… **waren** informiert.* — *sowohl … als auch* addiert die Subjekte → Plural.',
        'Korrektur: *… sondern auch der Zeitplan **spricht** …* — das nähere Subjekt ist Singular.',
        '**Korrekt.** Zwei Singulare → Singular (*wollte*) ist die saubere Wahl; Plural wäre zulässig.',
        'Korrektur: *… oder die Autorin **trägt** …* — auch hier entscheidet das nähere Subjekt.',
        '**Korrekt.** Plural *fehlen* ist bei *sowohl … als auch* der Standard.',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 2 · Umformen',
      frage: 'Vom Neutralen ins Gehobene: Forme jeden Satz um — mit stilistischer Inversion oder dem Paar in Klammern.',
      aufgaben: [
        'Die Lage ist nicht nur ernst, sondern sie verschlechtert sich auch täglich. *(nicht nur in Spitzenstellung)*',
        'Er war nicht informiert und hatte auch nicht zugestimmt. *(weder … noch als Satzpaar)*',
        'Wir senken die Kosten, oder wir verlieren den Auftrag. *(entweder mit Inversion)*',
        'Ihre Stimmung schwankte: mal war sie euphorisch, mal völlig resigniert. *(bald … bald)*',
        'Er hat teilweise aus Neugier zugesagt und teilweise aus Pflichtgefühl. *(halb … halb)*',
      ],
      loesungen: [
        '**Nicht nur ist** die Lage ernst, **sondern** sie verschlechtert sich **auch** täglich. — Verb direkt nach *nicht nur*; *auch* hinter das Verb des zweiten Teils.',
        '**Weder war** er informiert, **noch hatte** er zugestimmt. — Inversion in beiden Hälften.',
        '**Entweder senken** wir die Kosten, **oder** wir verlieren den Auftrag. — *entweder* besetzt Position 1, das Verb folgt sofort.',
        'Ihre Stimmung schwankte: **bald** war sie euphorisch, **bald** völlig resigniert. — Gehobenes Register; das zweite Verb darf elliptisch entfallen.',
        'Er hat **halb** aus Neugier, **halb** aus Pflichtgefühl zugesagt. — *teils … teils* wäre die neutrale Alternative.',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 3 · Produzieren',
      frage: 'Schreibe den Kernabsatz eines Diskussionsbeitrags zum Thema „Brauchen Ehrenamtliche eine finanzielle Anerkennung?“ (4-6 Sätze). Verwende **zwei verschiedene Paare** — davon **eines mit stilistischer Inversion** — und **mindestens ein Konnektoradverb aus Lektion 10**. Markiere alles.',
      aufgabe: '*Stichpunkte: Nachwuchsmangel in den Vereinen · Motivation ist nicht käuflich · Wertschätzung signalisieren · leere öffentliche Kassen*',
      loesung: '**Mögliche Lösung** (jede Kombination aus zwei Paaren, einer Inversion und einem Adverb ist richtig):\n***Nicht nur ist** der Nachwuchsmangel in den Vereinen unübersehbar, **sondern auch** die Zahl der langjährig Engagierten geht zurück. **Einerseits** lässt sich Motivation nicht kaufen, **andererseits** signalisiert eine Aufwandspauschale echte Wertschätzung. **Gleichwohl** darf das Ehrenamt kein verdeckter Niedriglohnsektor werden — und die öffentlichen Kassen sind leer. **Folglich** wäre eine steuerfreie Pauschale der richtige Mittelweg: Sie honoriert den Einsatz, ohne ihn zum Job zu machen.*\n~~Una sola inversión estilística por texto — más sería recargar; y cada par une elementos paralelos: eso puntúa en «Strukturen».~~',
    },

    { type: 'rule' },

    // ── 7. Prüfungsbezug ──────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Lesen · Teil 2 · Lückentext',
      titel: 'Mini-Aufgabe · 6 Lücken',
      anweisung: 'Bei Konnektorenpaaren testet der Lückentext fast immer den zweiten Teil — der erste steht im Text und verrät die Lösung. Wähle für jede Lücke das passende Wort.',
      absaetze: [
        'Weder die Kommunen {1} der Bund fühlen sich allein zuständig — die Finanzierung der Bibliotheken bleibt {2} ein Dauerthema. Dabei gilt: Je vielfältiger das Angebot ist, {3} mehr Menschen nutzen es. Nicht nur steigen die Ausleihzahlen wieder, {4} auch als Lernorte werden die Häuser neu entdeckt. Die Stimmung vor Ort ist geteilt: {5} überwiegt der Stolz auf das eigene Haus, bald die Sorge um den Etat. Sowohl die Politik {6} die Träger müssen folglich verlässlich planen.',
      ],
      optionen: ['noch', 'gleichwohl', 'desto', 'sondern', 'bald', 'als auch'],
      loesungen: [
        '{1} **noch** — *weder* im Text verlangt seinen festen Partner; *fühlen* steht im Plural (*die Kommunen*).',
        '{2} **gleichwohl** — konzessives Adverb im Mittelfeld (Lektion 10); nichts kündigt hier einen zweiten Teil an.',
        '{3} **desto** — *je vielfältiger …* verlangt *desto/umso* + Komparativ + Verb.',
        '{4} **sondern** — *nicht nur* steht invertiert am Satzanfang (*steigen die Ausleihzahlen*); der zweite Teilsatz bringt *sondern … auch*.',
        '{5} **bald** — das zweite *bald* steht bereits im Text: das gehobene Paar für den Stimmungswechsel.',
        '{6} **als auch** — vervollständigt *sowohl*; Addition → Verb im Plural (*müssen*).',
      ],
      kommentar: 'Strategie: Suche zuerst nach **halben Paaren** im Text (*weder, je, nicht nur, sowohl, bald*) — jedes löst eine Lücke fast von selbst; Einzeladverbien wie *gleichwohl* kommen zuletzt.',
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Im **Schreiben** gilt die Dreierprobe nach jedem Paar: Beide Teile da? Elemente parallel? **Verbform korrekt**? Die stilistische Inversion ist ein Gewürz: **eine** pro Text, beim stärksten Argument. In der **Diskussion** strukturiert *einerseits … andererseits* die Abwägung — mündlich aber ohne *bald … bald*, das gehört der Schriftsprache.',
    },

    { type: 'rule' },

    // ── 8. Abschluss ──────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Das bleibt', 'Beispiel'],
      zeilen: [
        ['sowohl … als auch → Verb im Plural', 'Sowohl A als auch B sind beteiligt.'],
        ['nicht nur / entweder → näheres Subjekt', 'Entweder der Verlag oder die Autorin trägt …'],
        ['weder … noch → Singular bevorzugt', 'Weder der Antrag noch die Begründung überzeugt.'],
        ['Inversion = gehobenes Register', 'Nicht nur ist … · Weder war …, noch …'],
        ['Registerskala des Wechsels', 'mal … mal → teils … teils → bald … bald'],
        ['Paare + Adverbien mischen, dosieren', 'gleichwohl/folglich rahmen — 1 Inversion pro Text'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich wähle bei den kritischen Paaren die korrekte Verbform und kenne den Ausweg beim Personenkonflikt (*Entweder fährst du, oder ich fahre*).',
        'Ich bilde die stilistische Inversion mit *nicht nur*, *weder … noch* und *entweder* — höchstens einmal pro Text.',
        'Ich ordne *mal … mal*, *teils … teils*, *halb … halb* und *bald … bald* dem richtigen Register zu.',
        'Ich verbinde Konnektorenpaare und Adverbien aus Lektion 10 zu einem kohärenten Argumentationsabsatz.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Konnektoren verketten Sätze — doch C1-Texte verdichten Information auch **innerhalb** des Satzes: mit Relativsätzen, die Genitive, Präpositionen und ganze Aussagen aufnehmen können. In der nächsten Lektion lernst du *dessen* und *deren*, *worauf* und *wobei* — und wann ein Partizipialattribut die elegantere Wahl ist.',
    },
  ],
}
