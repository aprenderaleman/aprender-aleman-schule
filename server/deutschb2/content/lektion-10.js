// Lektion 10 · Vorgangs- & Zustandspassiv
//
// Bloque 1 «Grammatik & Struktur». Sigue el estándar de la lección
// modelo 04 (docs/deutschb2/KANON.md + docs/deutschc1/FORMAT.md).

export default {
  spec: ['Bloque 1', 'Grammatik & Struktur', 'Niveau B2', 'Prüfungsrelevanz: alle Module'],
  h1: 'Vorgangs- & Zustandspassiv',
  lead: 'Die Wohnung wird renoviert oder ist renoviert? Prozess und Resultat, werden und sein — und warum das deutsche Passiv oft da steht, wo das Spanische „se“ sagt.',

  content: [
    // ── Lernziele ─────────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'das Vorgangspassiv mit *werden + Partizip II* in Präsens, Präteritum und Perfekt bilden',
        'Vorgangspassiv (Prozess) und Zustandspassiv (Resultat) sicher unterscheiden',
        '*von* und *durch* korrekt einsetzen und das spanische „se“ richtig ins Deutsche übertragen',
      ],
    },

    { type: 'rule' },

    // ── Kernwortschatz ────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Kernwortschatz',
      kopf: ['Form', 'Beispiel', 'Bedeutung'],
      zeilen: [
        ['Präsens: wird + P II', 'Das Haus wird gebaut.', 'se construye / se está construyendo'],
        ['Präteritum: wurde + P II', 'Das Haus wurde gebaut.', 'se construyó'],
        ['Perfekt: ist + P II + worden', 'Das Haus ist gebaut worden.', 'se ha construido'],
        ['Zustandspassiv: ist + P II', 'Das Haus ist gebaut.', 'está construido (resultado)'],
        ['von + Dativ', 'von der Firma Müller', 'por (agente: persona, institución)'],
        ['durch + Akkusativ', 'durch den Sturm', 'por (medio, causa)'],
        ['man + Aktiv', 'Man baut hier viel.', '«se» impersonal — la alternativa'],
      ],
    },

    { type: 'rule' },

    // ── Erklärung ─────────────────────────────────────────────────
    {
      type: 'prose',
      eyebrow: 'Erklärung — der Vorgang zählt, nicht der Täter',
      absaetze: [
        'Das Passiv rückt die **Handlung** in den Mittelpunkt; wer handelt, ist unwichtig oder unbekannt. Genau dafür benutzt das Spanische oft „se“: ~~*Hier wird Deutsch gesprochen* = «aquí se habla alemán». Regla práctica: donde dirías «se + verbo» sin sujeto concreto, el alemán suele usar Passiv (o *man*). No traduzcas «se» con *sich*: *sich spricht Deutsch* no existe.~~',
      ],
    },
    {
      type: 'steps',
      steps: [
        {
          badge: 'Vorgang',
          titel: 'Vorgangspassiv: werden + Partizip II',
          text: 'Der **Prozess** läuft: __Die Wohnung wird renoviert.__ Zeiten: Präsens __wird renoviert__, Präteritum __wurde renoviert__, Perfekt __ist renoviert **worden**__ — im Passiv-Perfekt heißt es **worden**, nicht *geworden*. Das Akkusativobjekt des Aktivsatzes wird zum Subjekt: *Man renoviert die Wohnung → Die Wohnung wird renoviert.*',
        },
        {
          badge: 'Zustand',
          titel: 'Zustandspassiv: sein + Partizip II',
          text: 'Der Prozess ist **fertig**, es zählt das Resultat: __Die Wohnung ist renoviert.__ ~~Ojo con el cognado: *sein* («ser») funciona aquí como «estar»: *wird renoviert* ≈ «se está renovando / es renovada», *ist renoviert* ≈ «está renovada». Si en español dirías «está + participio», usa sein.~~',
        },
        {
          badge: 'von/durch',
          titel: 'Wer oder was? — von und durch',
          text: 'Der Täter (Agens) steht mit __von + Dativ__: *Der Vertrag wurde **vom Chef** unterschrieben.* Mittel oder Ursache mit __durch + Akkusativ__: *Das Dorf wurde **durch das Hochwasser** zerstört.* Meist fehlt das Agens ganz — das ist der Sinn des Passivs.',
        },
      ],
    },

    { type: 'rule' },

    // ── Beispiele ─────────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele — Vorgangspassiv in drei Zeiten',
      kicker: 'Vorgang',
      titel: 'werden + Partizip II',
      items: [
        { text: 'Die E-Mails **werden** jeden Morgen **beantwortet**.', gl: '— Präsens' },
        { text: 'Das Büro **wurde** letztes Jahr **modernisiert**.', gl: '— Präteritum' },
        { text: 'Der Fehler **ist** schnell **behoben worden**.', gl: '— Perfekt: worden, ¡no geworden!' },
        { text: 'In der Schweiz **werden** vier Sprachen **gesprochen**.', gl: '— «se hablan cuatro lenguas»' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'Zustand',
      titel: 'sein + Partizip II — das Resultat',
      items: [
        { text: 'Der Supermarkt **ist** sonntags **geschlossen**.', gl: '— está cerrado' },
        { text: 'Der Tisch **ist** schon **reserviert**.', gl: '' },
        { text: 'Die Formulare **sind** bereits **ausgefüllt**.', gl: '' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'von / durch',
      titel: 'Agens und Ursache',
      items: [
        { text: 'Der Antrag wurde **von der Mitarbeiterin** bearbeitet.', gl: '— persona → von' },
        { text: 'Der Flug wurde **durch den Streik** verzögert.', gl: '— causa → durch' },
        { text: 'Die Pakete werden **durch einen Kurierdienst** zugestellt.', gl: '— medio → durch' },
      ],
    },
    {
      type: 'vergleich',
      titel: 'wird geöffnet oder ist geöffnet? — Prozess vs. Resultat',
      zeilen: [
        { satz: 'Die Tür wird um 8 Uhr geöffnet.', label: 'Vorgang: alguien la abre a las 8 — proceso' },
        { satz: 'Die Tür ist geöffnet.', label: 'Zustand: ya está abierta — resultado' },
        { satz: 'Die Tür ist geöffnet worden.', label: 'Perfekt del Vorgangspassiv: alguien la ha abierto' },
      ],
    },

    { type: 'rule' },

    // ── Übungen ───────────────────────────────────────────────────
    {
      type: 'uebung',
      eyebrow: 'Anwendung — Übung 1 · Erkennen',
      frage: 'Vorgangspassiv oder Zustandspassiv? Und in welcher Zeit?',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Die Rechnung ist schon bezahlt.',
        'Die Straße wurde gestern gesperrt.',
        'Das Paket ist heute Morgen geliefert worden.',
        'Hier wird eine neue Schule gebaut.',
      ],
      loesungen: [
        '**Zustandspassiv** (sein + P II) — Resultat. ~~«está pagada»~~',
        '**Vorgangspassiv, Präteritum** (wurde + P II).',
        '**Vorgangspassiv, Perfekt** (ist + P II + worden).',
        '**Vorgangspassiv, Präsens** (wird + P II).',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 2 · Umformen',
      frage: 'Bilde das Passiv in der angegebenen Zeit.',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Man kontrolliert die Tickets am Eingang. ~~(Präsens)~~',
        'Die Firma entließ zwanzig Mitarbeiter. ~~(Präteritum)~~',
        'Man hat das Problem endlich gelöst. ~~(Perfekt)~~',
      ],
      loesungen: [
        'Die Tickets **werden** am Eingang **kontrolliert**.',
        'Zwanzig Mitarbeiter **wurden** (von der Firma) **entlassen**.',
        'Das Problem **ist** endlich **gelöst worden**.',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 3 · Produzieren',
      frage: 'Sag es auf Deutsch — mit Passiv oder *man*. ~~(Las tres frases usan «se» en español.)~~',
      loesungLabel: 'Mögliche Lösung',
      aufgaben: [
        '«Se venden bicicletas de segunda mano.» ~~(verkaufen, gebrauchte Fahrräder)~~',
        '«Aquí no se puede fumar.» ~~(rauchen … dürfen)~~',
        '«El informe se envió ayer.» ~~(der Bericht, schicken)~~',
      ],
      loesungen: [
        'Gebrauchte Fahrräder **werden verkauft**. ~~(también: Man verkauft gebrauchte Fahrräder. / Gebrauchte Fahrräder zu verkaufen.)~~',
        'Hier **darf** nicht **geraucht werden**. ~~(o simplemente: Hier darf man nicht rauchen. — el Passiv con Modalverb llega en la Lektion 11)~~',
        'Der Bericht **wurde** gestern **geschickt**.',
      ],
    },

    { type: 'rule' },

    // ── Prüfungsbezug ─────────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Prüfungsformat · Auswahlaufgabe',
      titel: '3 Lücken',
      anweisung: 'Formelle Texte (Hausordnungen, Regeln — wie in Lesen Teil 5) stehen voller Passivformen. Wähle die richtige.',
      absaetze: [
        'Information für alle Mieterinnen und Mieter: Das Treppenhaus {1} zurzeit renoviert. Die Handwerker {2} bereits letzte Woche mit der Arbeit begonnen. Der Keller bleibt geschlossen, bis alle Materialien {3} worden sind.',
      ],
      optionen: [
        '(1) a) ist · b) wird · c) hat',
        '(2) a) wurden · b) sind · c) haben',
        '(3) a) entfernt · b) entfernen · c) entfernte',
      ],
      loesungLabel: 'Lösung',
      loesungen: [
        '{1} **b) wird** — der Vorgang läuft gerade: *wird renoviert*.',
        '{2} **c) haben** — Achtung, Aktiv! *Die Handwerker haben mit der Arbeit begonnen* — die Handwerker handeln selbst, hier ist kein Passiv möglich.',
        '{3} **a) entfernt** — Perfekt Passiv im Nebensatz: *… entfernt worden sind*.',
      ],
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'In der **formellen Nachricht** wirkt Passiv professionell: *Mir wurde mitgeteilt, dass …* / *Das Problem wurde bis heute nicht behoben.* Zwei Stolperfallen: im Perfekt **worden** (nicht *geworden*) und die Wahl ~~ser/estar~~ — Prozess → *werden*, Resultat → *sein*.',
    },

    { type: 'rule' },

    // ── Abschluss ─────────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Form', 'Struktur', 'Beispiel'],
      zeilen: [
        ['Vorgang · Präsens', 'wird + P II', 'Das Haus wird gebaut.'],
        ['Vorgang · Präteritum', 'wurde + P II', 'Das Haus wurde gebaut.'],
        ['Vorgang · Perfekt', 'ist + P II + worden', 'Das Haus ist gebaut worden.'],
        ['Zustand', 'ist + P II', 'Das Haus ist gebaut.'],
        ['Agens / Ursache', 'von + Dat. · durch + Akk.', 'vom Chef · durch den Sturm'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich bilde das Vorgangspassiv in drei Zeiten — im Perfekt mit *worden*.',
        'Ich unterscheide *wird renoviert* (Prozess) und *ist renoviert* (Resultat).',
        'Ich übertrage das spanische „se“ mit Passiv oder *man* — nie mit *sich*.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Was ist mit *muss gemacht werden* und *lässt sich machen*? Die nächste Lektion kombiniert das Passiv mit **Modalverben** und zeigt die **Passiversatzformen** — die Strukturen, die formelle B2-Texte prägen.',
    },
  ],
}
