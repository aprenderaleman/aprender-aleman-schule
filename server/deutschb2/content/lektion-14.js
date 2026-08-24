// Lektion 14 · Infinitivsätze mit zu
//
// Bloque 1 «Grammatik & Struktur». Wann zu, wann nicht (Modalverben,
// lassen, gehen …), Verben mit Infinitivsatz, um/ohne/anstatt + zu,
// Komma. Kernfehler: *para + infinitivo* → um…zu vs. damit.
// Ausblick → Lektion 15.

export default {
  spec: ['Bloque 1', 'Grammatik & Struktur', 'Niveau B2', 'Prüfungsrelevanz: Schreiben & Sprechen'],
  h1: 'Infinitivsätze mit zu',
  lead: 'Wann steht zu vor dem Infinitiv, wann nicht — und wie um zu, ohne zu und anstatt zu deine Sätze eleganter machen als jede wenn-dann-Kette.',

  content: [
    // ── Lernziele ─────────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'entscheiden, wann der Infinitiv mit und wann ohne zu steht',
        'die wichtigsten Verben mit Infinitivsatz aktiv verwenden',
        'Sätze mit um zu, ohne zu und anstatt zu bilden — mit Komma',
        'um … zu von damit unterscheiden (der „para“-Fehler)',
      ],
    },

    { type: 'rule' },

    // ── Kernwortschatz ────────────────────────────────────────────
    {
      type: 'wortschatz',
      eyebrow: 'Kernwortschatz — Verben & Ausdrücke mit Infinitivsatz',
      items: [
        { wort: 'vorhaben', kollokation: 'Ich habe vor, mich zu bewerben.', es: 'tener previsto' },
        { wort: 'versuchen', kollokation: 'Er versucht, weniger zu arbeiten.', es: 'intentar' },
        { wort: 'beschließen', kollokation: 'Wir haben beschlossen, umzuziehen.', es: 'decidir' },
        { wort: 'vergessen', kollokation: 'Sie hat vergessen, den Termin abzusagen.', es: 'olvidar' },
        { wort: 'anfangen', kollokation: 'Er fängt an, Deutsch zu lernen.', es: 'empezar (a)' },
        { wort: 'aufhören', kollokation: 'Sie hört auf, zu rauchen.', es: 'dejar de' },
        { wort: 'sich freuen', kollokation: 'Ich freue mich, Sie kennenzulernen.', es: 'alegrarse (de)' },
        { wort: 'empfehlen', kollokation: 'Ich empfehle Ihnen, früh zu buchen.', es: 'recomendar' },
        { wort: 'versprechen', kollokation: 'Er verspricht, pünktlich zu sein.', es: 'prometer' },
        { wort: 'Es ist wichtig', kollokation: 'Es ist wichtig, regelmäßig zu üben.', es: 'es importante' },
        { wort: 'Lust haben', kollokation: 'Hast du Lust, mitzukommen?', es: 'tener ganas de' },
        { wort: 'die Möglichkeit haben', kollokation: 'Sie hat die Möglichkeit, im Ausland zu arbeiten.', es: 'tener la posibilidad de' },
      ],
      hinweis: 'Bei trennbaren Verben rutscht zu in die Mitte: umzuziehen, abzusagen, mitzukommen, kennenzulernen.',
    },

    { type: 'rule' },

    // ── Erklärung ─────────────────────────────────────────────────
    {
      type: 'prose',
      eyebrow: 'Erklärung — die Grundregel',
      card: true,
      absaetze: [
        'Ein Infinitivsatz hat **kein eigenes Subjekt** — es ist dasselbe wie im Hauptsatz (oder das Objekt: *Ich empfehle **dir**, früher **zu** gehen*). Der Infinitiv mit __zu__ steht **am Ende**: *Ich habe vor, im Sommer in Deutschland **zu arbeiten**.* Ein Komma ist bei um/ohne/anstatt Pflicht und sonst fast immer die beste Wahl — in diesem Kurs setzen wir es konsequent.',
      ],
    },
    {
      type: 'steps',
      steps: [
        {
          badge: 'ohne zu',
          titel: 'Wann OHNE zu?',
          text: 'Nach __Modalverben__ (*Ich muss gehen*), nach __werden__ (Futur), __lassen__ (*Ich lasse das Auto reparieren*), __bleiben__ (*Er bleibt sitzen*), __gehen/fahren__ (*Wir gehen einkaufen*) und __sehen/hören__ (*Ich höre sie singen*). ~~Ojo: «ir a + infinitivo» de plan es simplemente Präsens o werden, nunca *gehen zu*.~~',
        },
        {
          badge: 'mit zu',
          titel: 'Wann MIT zu?',
          text: 'Nach fast allen anderen Verben (siehe Kernwortschatz), nach Ausdrücken mit __Es ist + Adjektiv__ (*Es ist wichtig, …*) und mit __Nomen + haben__ (*Lust, Zeit, Angst, die Möglichkeit haben*).',
        },
        {
          badge: 'um zu',
          titel: 'um / ohne / anstatt + zu',
          text: '__um … zu__ = Ziel (*para*), __ohne … zu__ = *sin + infinitivo*, __anstatt … zu__ = *en vez de*: *Er ging, **ohne** sich **zu verabschieden**.* Alle drei mit Komma, Infinitiv am Ende.',
        },
        {
          badge: 'damit',
          titel: 'Der „para“-Fehler: um … zu vs. damit',
          text: '**Gleiches Subjekt → um … zu**: *Ich lerne Deutsch, **um** in Wien **zu studieren**.* **Verschiedene Subjekte → damit** (Nebensatz mit eigenem Subjekt): *Ich arbeite viel, **damit meine Kinder** studieren können.* ~~En español ambos son «para (que)» — en alemán la elección es obligatoria.~~',
        },
      ],
    },

    { type: 'rule' },

    // ── Beispiele ─────────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele — mit oder ohne zu',
      kicker: 'Kontrast',
      titel: 'Dieselbe Situation, zwei Strukturen',
      items: [
        { text: 'Ich **will** heute früher **gehen**.', gl: '— Modalverb → ohne zu' },
        { text: 'Ich **habe vor**, heute früher **zu gehen**.', gl: '— Vollverb → mit zu' },
        { text: 'Wir **lassen** die Heizung **reparieren**.', gl: '— lassen → ohne zu' },
        { text: 'Wir **haben beschlossen**, die Heizung reparieren **zu lassen**.', gl: '— beschließen → mit zu' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'um / ohne / anstatt',
      titel: 'Die drei mit Komma',
      items: [
        { text: 'Sie macht ein Praktikum, **um** Erfahrung **zu sammeln**.', gl: '— finalidad, mismo sujeto' },
        { text: 'Er hat den Vertrag unterschrieben, **ohne** ihn **zu lesen**.', gl: '— sin leerlo' },
        { text: '**Anstatt** sich **zu beschweren**, sollte er mit dem Chef sprechen.', gl: '— en vez de quejarse' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'trennbar & Perfekt',
      titel: 'Die Formsachen',
      items: [
        { text: 'Vergiss nicht, die Tür **abzuschließen**.', gl: '— zu dentro del verbo separable' },
        { text: 'Ich freue mich, Sie bald **kennenzulernen**.', gl: '— fórmula de la formelle Nachricht' },
        { text: 'Es ist schwierig, in dieser Stadt eine Wohnung **zu finden**.', gl: '— Es ist + Adj. + Infinitivsatz' },
      ],
    },
    {
      type: 'vergleich',
      titel: 'um … zu oder damit? Die Subjekt-Frage entscheidet',
      zeilen: [
        { satz: 'Ich spare, um mir ein Auto zu kaufen.', label: 'ich spare + ich kaufe → um … zu' },
        { satz: 'Ich spare, damit meine Tochter studieren kann.', label: 'ich spare + die Tochter studiert → damit' },
        { satz: 'Ich spare, damit ich mir ein Auto kaufen kann.', label: 'grammatisch korrekt — aber um … zu ist hier eleganter' },
      ],
    },

    { type: 'rule' },

    // ── Übungen ───────────────────────────────────────────────────
    {
      type: 'uebung',
      eyebrow: 'Anwendung — Übung 1 · Erkennen',
      frage: 'Mit zu oder ohne zu?',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Er versucht, jeden Tag Sport ___ (machen).',
        'Sie kann heute leider nicht ___ (kommen).',
        'Wir gehen am Samstag ___ (einkaufen).',
        'Hast du Zeit, mir kurz ___ (helfen)?',
        'Ich lasse mir die Haare ___ (schneiden).',
      ],
      loesungen: [
        'Sport **zu machen** — versuchen + Infinitivsatz.',
        'nicht **kommen** — Modalverb kann → ohne zu.',
        '**einkaufen** — gehen + Aktivität → ohne zu.',
        'mir kurz **zu helfen** — Zeit haben + Infinitivsatz.',
        '**schneiden** — lassen → ohne zu.',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 2 · Verbinden',
      frage: 'um … zu oder damit? Verbinde die Sätze.',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Ich mache einen Sprachkurs. Ich will die B2-Prüfung bestehen.',
        'Die Firma bietet Homeoffice an. Die Mitarbeiter sollen flexibler arbeiten können.',
        'Er nimmt ein Taxi. Er will den Zug nicht verpassen.',
      ],
      loesungen: [
        'Ich mache einen Sprachkurs, **um** die B2-Prüfung **zu bestehen**. ~~Mismo sujeto.~~',
        'Die Firma bietet Homeoffice an, **damit die Mitarbeiter** flexibler arbeiten können. ~~Sujetos distintos → damit obligatorio.~~',
        'Er nimmt ein Taxi, **um** den Zug nicht **zu verpassen**.',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 3 · Produzieren',
      frage: 'Deine Pläne für die Prüfung: Schreib drei Sätze mit vorhaben, um … zu und ohne … zu.',
      loesungLabel: 'Mögliche Lösung',
      loesungen: [
        'Ich habe vor, jeden Tag eine Lektion **zu wiederholen**.',
        'Ich löse alte Modellsätze, **um** das Prüfungsformat besser **kennenzulernen**.',
        'Ich gehe nicht in die Prüfung, **ohne** vorher gut geschlafen **zu haben**. ~~Vale cualquier contenido; lo evaluable es: coma, zu, infinitivo al final.~~',
      ],
    },

    { type: 'rule' },

    // ── Prüfungsbezug ─────────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Prüfungsformat · Auswahlaufgabe',
      titel: '3 Lücken',
      anweisung: 'So könnte ein Forumsbeitrag im Schreiben aussehen — wähle die korrekte Struktur.',
      absaetze: [
        'Viele junge Leute ziehen in die Großstadt, {1} dort bessere Jobs zu finden. Manche unterschreiben einen Mietvertrag, {2} die Wohnung vorher gesehen zu haben. Ich empfehle deshalb allen, {3} — auch wenn das Zeit kostet.',
      ],
      optionen: [
        '(1) a) um · b) damit · c) für',
        '(2) a) anstatt · b) ohne · c) um',
        '(3) a) mehrere Angebote vergleichen · b) mehrere Angebote zu vergleichen · c) dass sie vergleichen mehrere Angebote',
      ],
      loesungLabel: 'Lösung',
      loesungen: [
        '{1} **a) um** — Ziel, gleiches Subjekt. ~~«für + infinitivo» no existe: es el calco número uno de «para».~~',
        '{2} **b) ohne** — sin haberla visto.',
        '{3} **b)** — empfehlen + Infinitivsatz, zu + Infinitiv am Ende.',
      ],
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Im **Sprechen** (Vortrag) und im **Forumsbeitrag** sind *um … zu*, *ohne … zu* und *anstatt … zu* Struktur-Punkte, die sich fast automatisch einbauen lassen: Ziel deines Vortrags (*um zu zeigen, dass …*), Kritik (*ohne nachzudenken*), Alternative (*anstatt zu verbieten*). Kontrolliere immer die Reihenfolge: **Komma → … → zu + Infinitiv am Ende.**',
    },

    { type: 'rule' },

    // ── Abschluss ─────────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Struktur', 'Regel', 'Beispiel'],
      zeilen: [
        ['ohne zu', 'Modalverben, werden, lassen, bleiben, gehen, sehen/hören', 'Ich muss gehen.'],
        ['mit zu', 'Vollverben, Es ist + Adj., Nomen + haben', 'Ich habe vor, zu gehen.'],
        ['trennbar', 'zu in der Mitte', 'abzusagen, mitzukommen'],
        ['um … zu', 'Ziel, gleiches Subjekt', 'um zu studieren'],
        ['damit', 'Ziel, anderes Subjekt', 'damit die Kinder studieren'],
        ['ohne/anstatt zu', 'sin / en vez de + infinitivo', 'ohne zu fragen'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich weiß, nach welchen Verben der Infinitiv ohne zu steht.',
        'Ich bilde Infinitivsätze mit Komma und zu + Infinitiv am Ende.',
        'Ich wähle zwischen um … zu und damit nach dem Subjekt.',
        'Ich setze zu bei trennbaren Verben an die richtige Stelle.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Viele Verben verlangen nicht nur einen Infinitivsatz, sondern zuerst eine **feste Präposition**: *sich freuen **auf**, warten **auf**, denken **an***. Die nächste Lektion bringt die 20 wichtigsten B2-Verben mit Präposition — und die kleinen Wörter *darauf, daran, worüber*, die daraus komplette Sätze machen.',
    },
  ],
}
