// Lektion 03 · Diagnose A2 — Standortbestimmung
//
// Bloque 0 «Einführung». A1 vs. A2 con ejemplos, 3 mini-tests con remisión
// «¿fallaste? → Lektion N» (blocks.js), tabla can-do y plan de los 5 bloques.

export default {
  spec: ['Bloque 0', 'Einführung', 'Niveau A2', 'Prüfungsrelevanz: alle Teile'],
  h1: 'Diagnose A2 — Standortbestimmung',
  lead: '~~¿Dónde estás ahora mismo?~~ Drei Mini-Tests zeigen dir, **was du schon kannst** — ~~y qué lección repasar si algo falla~~.',

  content: [
    // ── Lernziele ─────────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'den Unterschied zwischen A1 und A2 verstehen',
        'mit drei Mini-Tests deinen Stand prüfen ~~(comprobar tu nivel)~~',
        'den Plan des Kurses kennen: 5 Blöcke, 40 Lektionen',
      ],
    },

    { type: 'rule' },

    // ── Kernwortschatz ────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Kernwortschatz — Wörter zum Lernen',
      kopf: ['Wort', 'Beispiel', 'Bedeutung'],
      zeilen: [
        ['der Test, -s', 'Mach den Test ohne Hilfe.', 'el test, la prueba'],
        ['der Fehler, -', 'Ein Fehler ist kein Problem.', 'el error'],
        ['die Lösung, -en', 'Kontrolliere die Lösung.', 'la solución'],
        ['wiederholen', 'Ich wiederhole Lektion 4.', 'repasar, repetir'],
        ['üben', 'Ich übe jeden Tag.', 'practicar'],
        ['der Block, -¨e', 'Block 1 ist Grammatik.', 'el bloque'],
        ['schon', 'Das kann ich schon.', 'ya'],
        ['noch nicht', 'Das kann ich noch nicht.', 'todavía no'],
      ],
    },

    { type: 'rule' },

    // ── Erklärung ─────────────────────────────────────────────────
    {
      type: 'prose',
      eyebrow: 'Erklärung — Was ist neu im A2?',
      card: true,
      titel: 'Von A1 zu A2',
      absaetze: [
        'Auf A1 sprichst du in kurzen, einfachen Sätzen über das Hier und Jetzt. Auf **A2** kommt viel Neues dazu: die **Vergangenheit** (Perfekt: *ich habe gemacht*), **Nebensätze** mit *weil, dass, wenn* ~~(las subordinadas: «porque», «que», «cuando/si»)~~, **Vergleiche** (*besser als*) — und mehr Wortschatz, insgesamt etwa **1.300 Wörter**.',
      ],
    },
    {
      type: 'prose',
      eyebrow: 'Erklärung — So funktioniert die Diagnose',
      card: true,
      titel: 'Drei Mini-Tests',
      absaetze: [
        'Mach die drei Mini-Tests unten **ohne Hilfe** — kein Wörterbuch, kein Google. Kontrolliere dann die Lösungen. Bei jeder Lösung steht, **welche Lektion** das Thema erklärt. ~~¿Fallaste algo? Perfecto: ya sabes qué lección del curso lo va a arreglar. La diagnosis no se aprueba ni se suspende.~~',
      ],
    },

    { type: 'rule' },

    // ── Beispiele ─────────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Beispiele — A1 oder A2?',
      kopf: ['So klingt A1', 'So klingt A2'],
      zeilen: [
        ['Ich wohne in Madrid.', 'Ich wohne seit zwei Jahren in Madrid, weil ich hier arbeite.'],
        ['Ich esse Pizza.', 'Gestern habe ich Pizza gegessen.'],
        ['Das Auto ist gut.', 'Das Auto ist besser als das Fahrrad.'],
        ['Ich stehe auf.', 'Ich bin heute um sechs Uhr aufgestanden.'],
      ],
    },

    { type: 'rule' },

    // ── Übungen (= Mini-Tests) ────────────────────────────────────
    {
      type: 'uebung',
      eyebrow: 'Anwendung — Übung 1 · Mini-Test Grammatik',
      frage: 'Ergänze das richtige Wort. ~~En cada solución ves a qué lección ir si fallas.~~',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Gestern ___ ich ins Kino gegangen. (habe / bin)',
        'Als Kind ___ ich viel Zeit. (hatte / habe)',
        'Ich ___ heute leider nicht kommen. (kann / können)',
        'Der Zug fährt um 8 Uhr ___. (ab / auf)',
        'Ich sehe ___ Mann. (der / den)',
        'Ich fahre mit ___ Bus. (dem / den)',
        'Berlin ist ___ als Bonn. (groß / größer)',
        'Ich bleibe zu Hause, ___ ich krank bin. (weil / denn)',
      ],
      loesungen: [
        'Gestern **bin** ich ins Kino gegangen. ~~¿Fallaste? → Lektion 4 (Perfekt)~~',
        'Als Kind **hatte** ich viel Zeit. ~~¿Fallaste? → Lektion 5 (Präteritum)~~',
        'Ich **kann** heute leider nicht kommen. ~~¿Fallaste? → Lektion 6 (Modalverben)~~',
        'Der Zug fährt um 8 Uhr **ab**. ~~¿Fallaste? → Lektion 7 (trennbare Verben)~~',
        'Ich sehe **den** Mann. ~~¿Fallaste? → Lektion 8 (Akkusativ)~~',
        'Ich fahre mit **dem** Bus. ~~¿Fallaste? → Lektion 9 (Dativ)~~',
        'Berlin ist **größer** als Bonn. ~~¿Fallaste? → Lektion 13 (Komparativ)~~',
        'Ich bleibe zu Hause, **weil** ich krank bin. ~~¿Fallaste? → Lektion 15 (Nebensätze)~~',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 2 · Mini-Test Wortschatz',
      frage: 'Welches Wort passt nicht? ~~(¿Qué palabra no encaja en el grupo?)~~',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Apfel – Brot – Stuhl – Käse',
        'Bus – Küche – Zug – Fahrrad',
        'Kopf – Arm – Miete – Bein',
        'Bruder – Bahnhof – Schwester – Mutter',
      ],
      loesungen: [
        '**Stuhl** ~~(silla — el resto es comida; → Lektion 33, Essen & Einkaufen)~~',
        '**Küche** ~~(cocina — el resto es transporte; → Lektion 36, Reisen & Verkehr)~~',
        '**Miete** ~~(alquiler — el resto es el cuerpo; → Lektion 37, Gesundheit & Körper)~~',
        '**Bahnhof** ~~(estación — el resto es familia; → Lektion 31, Familie & Freunde)~~',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 3 · Mini-Test Schreiben',
      frage: 'Schreib 25-35 Wörter: Was hast du am Wochenende gemacht? (Wo? Mit wem? Wie war es?)',
      loesungLabel: 'Mögliche Lösung',
      loesung: 'Am Samstag habe ich mit meiner Familie einen Ausflug gemacht. Wir sind an den See gefahren und haben ein Picknick gemacht. Das Wetter war super und wir hatten viel Spaß. ~~(30 palabras.) Otras actividades valen igual — lo importante: Perfekt (habe … gemacht / bin … gefahren) y war/hatte. ¿Difícil? → Lektionen 4-5.~~',
    },

    { type: 'rule' },

    // ── Prüfungsbezug ─────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Prüfungsbezug — Kannst du das schon?',
      kopf: ['Ich kann …', 'Prüfungsteil', 'Hilfe im Kurs'],
      zeilen: [
        ['über mein Wochenende erzählen', 'Sprechen', 'Lektion 4-5, 29'],
        ['eine kurze Mitteilung schreiben', 'Schreiben', 'Lektion 25'],
        ['eine Anzeige verstehen', 'Lesen', 'Lektion 20'],
        ['eine Durchsage verstehen', 'Hören', 'Lektion 22'],
        ['mit jemandem etwas planen', 'Sprechen', 'Lektion 30'],
      ],
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Zähl deine Fehler nicht zu streng. Die Diagnose ist **keine Prüfung** — sie zeigt nur deinen **Startpunkt**. ~~Todo lo que hoy falles lo cubre una lección concreta del curso.~~',
    },

    { type: 'rule' },

    // ── Abschluss ─────────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung — Dein Weg durch den Kurs',
      kopf: ['Block', 'Lektionen', 'Thema'],
      zeilen: [
        ['0 · Einführung', '1-3', 'Prüfung kennen, Diagnose'],
        ['1 · Grammatik & Struktur', '4-17', 'Perfekt, Fälle, Nebensätze …'],
        ['2 · Prüfungsstrategie', '18-30', 'Lesen, Hören, Schreiben, Sprechen — Teil für Teil'],
        ['3 · Themenfelder & Wortschatz', '31-38', 'Familie, Essen, Reisen, Gesundheit …'],
        ['4 · Prüfungssimulation', '39-40', 'zwei komplette Simulationen'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich weiß, was auf A2 neu ist: Perfekt, Nebensätze, Vergleiche.',
        'Ich habe die drei Mini-Tests gemacht und kenne meinen Startpunkt.',
        'Ich kenne die 5 Blöcke des Kurses.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Jetzt geht es richtig los: **das Perfekt** — die wichtigste Form für die Vergangenheit. Ab der nächsten Lektion lernst du Schritt für Schritt die A2-Grammatik: immer mit Beispielen, Übungen und Prüfungsbezug.',
    },
  ],
}
