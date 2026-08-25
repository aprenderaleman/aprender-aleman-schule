// Lektion 10 · Adjektivdeklination
//
// Bloque 1 · Grammatik & Struktur — sigue el estándar de lektion-08.js:
// 8 secciones (FORMAT.md), nivel B1, máximo apoyo en español.

export default {
  spec: ['Bloque 1', 'Grammatik & Struktur', 'Niveau B1', 'Prüfungsrelevanz: Schreiben & Sprechen'],
  h1: 'Adjektivdeklination',
  lead: 'Vor dem Nomen bekommt das Adjektiv eine Endung: der rot**e** Pullover, ein rot**er** Pullover. ~~La terminación depende del artículo que va delante.~~',

  content: [
    // ── Lernziele ─────────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'Adjektivendungen nach *der/die/das*, nach *ein/kein/mein* und ohne Artikel bilden',
        'die Endungen im Nominativ, Akkusativ und Dativ sicher verwenden',
        'den Trick kennen: **ein** Element zeigt immer den Kasus',
      ],
    },

    { type: 'rule' },

    // ── Kernwortschatz ────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Kernwortschatz',
      items: [
        { text: '**rot · klein · groß · neu · alt · schön · teuer · billig · warm · lecker · wichtig · interessant**', gl: '— adjetivos frecuentes para practicar' },
        { text: 'Nach *sein* keine Endung: Der Pullover **ist rot**.', gl: '~~Después de «sein» el adjetivo no cambia nunca.~~' },
      ],
    },

    { type: 'rule' },

    // ── Erklärung ─────────────────────────────────────────────────
    {
      type: 'steps',
      eyebrow: 'Erklärung — die goldene Regel',
      steps: [
        {
          badge: 'Signal',
          titel: 'Ein Element zeigt den Kasus',
          text: 'Irgendetwas muss __Genus und Kasus__ zeigen: **der**, **den**, **dem** … Zeigt es der Artikel, bleibt für das Adjektiv nur wenig Arbeit. ~~Solo un elemento lleva la «señal»; el resto se relaja.~~',
        },
        {
          badge: '-e / -en',
          titel: 'Nach der/die/das',
          text: 'Der Artikel zeigt schon alles → das Adjektiv hat nur __-e oder -en__.\n__der rot**e** Pullover · den rot**en** Pullover__',
        },
        {
          badge: 'Adjektiv = Artikel',
          titel: 'Ohne Artikel',
          text: 'Kein Artikel da → __das Adjektiv übernimmt das Signal__ (die Endung von der/die/das).\n__gut**er** Kaffee · kalt**es** Wasser · mit frisch**er** Milch__',
        },
      ],
    },
    {
      type: 'tabelle',
      eyebrow: 'Erklärung — Tabelle 1: nach der/die/das',
      kopf: ['', 'maskulin', 'feminin', 'neutral', 'Plural'],
      zeilen: [
        ['Nominativ', 'der -**e**', 'die -**e**', 'das -**e**', 'die -**en**'],
        ['Akkusativ', 'den -**en**', 'die -**e**', 'das -**e**', 'die -**en**'],
        ['Dativ', 'dem -**en**', 'der -**en**', 'dem -**en**', 'den -**en**'],
      ],
    },
    {
      type: 'prose',
      card: true,
      absaetze: [
        '**Der 5-e-Trick:** Nur **fünf** Felder haben -e (Nominativ Singular + Akkusativ feminin/neutral). ==Alles andere ist -en.== ~~Memoriza las 5 casillas con -e; el resto es -en y no hay que pensar.~~',
      ],
    },
    {
      type: 'tabelle',
      eyebrow: 'Erklärung — Tabelle 2: nach ein/kein/mein',
      kopf: ['', 'maskulin', 'feminin', 'neutral', 'Plural'],
      zeilen: [
        ['Nominativ', 'ein -**er**', 'eine -**e**', 'ein -**es**', 'keine -**en**'],
        ['Akkusativ', 'einen -**en**', 'eine -**e**', 'ein -**es**', 'keine -**en**'],
        ['Dativ', 'einem -**en**', 'einer -**en**', 'einem -**en**', 'keinen -**en**'],
      ],
    },
    {
      type: 'prose',
      card: true,
      absaetze: [
        'Fast wie Tabelle 1 — aber *ein* zeigt kein Genus. Darum übernimmt das Adjektiv: ein rot**er** Pullover ~~(-er como «der»)~~, ein rot**es** Hemd ~~(-es como «das»)~~.',
      ],
    },
    {
      type: 'tabelle',
      eyebrow: 'Erklärung — Tabelle 3: ohne Artikel',
      kopf: ['', 'maskulin', 'feminin', 'neutral', 'Plural'],
      zeilen: [
        ['Nominativ', '-**er**', '-**e**', '-**es**', '-**e**'],
        ['Akkusativ', '-**en**', '-**e**', '-**es**', '-**e**'],
        ['Dativ', '-**em**', '-**er**', '-**em**', '-**en**'],
      ],
    },
    {
      type: 'prose',
      absaetze: [
        'Es gibt auch einen **Genitiv** (des rot**en** Pullovers) — auf B1 musst du ihn nur erkennen, nicht aktiv bilden.',
      ],
    },

    { type: 'rule' },

    // ── Beispiele ─────────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele',
      items: [
        { text: 'Der klein**e** Hund schläft.', gl: '— Nom. mask. nach *der* → -e' },
        { text: 'Ich kaufe den schwarz**en** Mantel.', gl: '— Akk. mask. → -en' },
        { text: 'Wir haben ein klein**es** Problem.', gl: '— *ein* zeigt nichts → -es' },
        { text: 'Sie trinkt einen heiß**en** Tee.', gl: '— Akk. mask. nach *einen* → -en' },
        { text: 'Er fährt mit dem neu**en** Auto.', gl: '— Dativ → fast immer -en' },
        { text: 'Ich trinke gern kalt**es** Wasser.', gl: '— ohne Artikel → Adjektiv zeigt *das*' },
      ],
    },

    { type: 'rule' },

    // ── Übungen ───────────────────────────────────────────────────
    {
      type: 'uebung',
      eyebrow: 'Anwendung — Übung 1 · Erkennen',
      frage: 'Welche Tabelle? Und warum diese Endung?',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Die neue Kollegin ist nett.',
        'Er hat einen alten Computer.',
        'Ich trinke gern schwarzen Kaffee.',
      ],
      loesungen: [
        'Tabelle 1 ~~(nach *die*)~~ — Nom. fem. → neu**e**',
        'Tabelle 2 ~~(nach *einen*)~~ — Akk. mask. → alt**en**',
        'Tabelle 3 ~~(ohne Artikel)~~ — Akk. mask. → schwarz**en**',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 2 · Endungen einsetzen',
      frage: 'Welche Endung fehlt?',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Der grün___ Tee ist lecker.',
        'Ich suche eine günstig___ Wohnung.',
        'Er fährt mit dem alt___ Fahrrad zur Arbeit.',
        'Das ist ein interessant___ Buch.',
      ],
      loesungen: [
        'der grün**e** Tee ~~(Nom. mask. nach der → una de las 5 casillas con -e)~~',
        'eine günstig**e** Wohnung ~~(Akk. fem. → -e)~~',
        'mit dem alt**en** Fahrrad ~~(Dativ → -en)~~',
        'ein interessant**es** Buch ~~(ein zeigt nichts → -es como «das»)~~',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 3 · Selbst bilden',
      frage: 'Ein Satz mit Adjektiv …',
      loesungLabel: 'Lösung',
      aufgaben: [
        '… über deine Wohnung, mit **ein/eine**.',
        '… über dein Lieblingsessen, **ohne Artikel**.',
      ],
      loesungen: [
        'Ich habe eine klein**e**, hell**e** Wohnung. ~~Cualquier adjetivo vale; tras «eine» en Akk./Nom. fem. → -e.~~',
        'Ich esse gern frisch**es** Brot mit gut**em** Käse. ~~Sin artículo el adjetivo lleva la señal: -es (das), -em (dem).~~',
      ],
    },

    { type: 'rule' },

    // ── Prüfungsbezug ─────────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Schreiben Teil 2 · Forumsbeitrag',
      titel: '2 Lücken',
      anweisung: 'Im Forumsbeitrag beschreibst du oft deine Stadt oder deine Meinung. Ergänze die Endungen:',
      absaetze: [
        '„In meiner Stadt gibt es einen schön{1} Park und viele klein{2} Cafés.“',
      ],
      optionen: ['(1) nach „einen“ (Akkusativ maskulin)', '(2) nach „viele“ (Plural, ohne Artikel)'],
      loesungLabel: 'Lösung',
      loesungen: [
        '{1} schön**en** — Akkusativ maskulin nach *einen* → -en.',
        '{2} klein**e** — Plural ohne Artikel (nach *viele*) → -e.',
      ],
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Adjektive bringen Punkte beim Kriterium **Wortschatz** (Schreiben). Aber: lieber **ein** Adjektiv mit richtiger Endung als drei mit falscher. Im Zweifel hilft der 5-e-Trick — und Dativ ist fast immer **-en**.',
    },

    { type: 'rule' },

    // ── Abschluss ─────────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Situation', 'Regel'],
      zeilen: [
        ['nach der/die/das', 'nur **-e** oder **-en** (5-e-Trick)'],
        ['nach ein/kein/mein', 'wie oben, aber: ein rot**er** (m), ein rot**es** (n)'],
        ['ohne Artikel', 'Adjektiv übernimmt die Artikel-Endung: gut**er** Kaffee'],
        ['Dativ', 'fast immer **-en**'],
        ['nach *sein*', 'keine Endung: Der Pullover ist **rot**.'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich bilde die Adjektivendungen nach der/die/das mit dem 5-e-Trick.',
        'Ich weiß, wo das Adjektiv nach ein/kein/mein das Genus zeigt (-er, -es).',
        'Ich benutze ohne Artikel die Endungen von der/die/das am Adjektiv.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: '*Der rote Pullover ist schön* — aber welcher ist schön**er**? Und welcher am schön**sten**? Vergleichen mit **Komparativ und Superlativ** ist das Thema der nächsten Lektion.',
    },
  ],
}
