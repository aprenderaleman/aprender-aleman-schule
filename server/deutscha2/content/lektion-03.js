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
        'Mach die drei Mini-Tests im **Übungsheft** zu dieser Lektion **ohne Hilfe** — kein Wörterbuch, kein Internet. Kontrolliere dann die Lösungen. Die Tabelle unten bei „Prüfungsbezug“ zeigt dir die passende Lektion zu jedem Thema. ~~¿Fallaste algo? Perfecto: ya sabes qué lección del curso lo va a arreglar. La diagnosis no se aprueba ni se suspende.~~',
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

    // ── Mehr Beispiele ────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Mehr Beispiele',
      titel: 'So sprichst du über dein Lernen',
      items: [
        { text: 'Zahlen und Farben kann ich **schon**.', gl: '— Los números y los colores ya me los sé.' },
        { text: 'Die Vergangenheit kann ich **noch nicht** — das kommt in Block 1.', gl: '— El pasado todavía no — llega en el bloque 1.' },
        { text: 'Ein **Fehler** zeigt mir: Das muss ich **wiederholen**.', gl: '— Un error me enseña qué tengo que repasar.' },
        { text: 'Ich **übe** morgens, mit einem Kaffee.', gl: '— Practico por la mañana, con un café.' },
        { text: 'Zuerst der **Test**, dann die **Lösung** — so lernst du mehr.', gl: '— Primero el test, luego la solución: así aprendes más.' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'A1 → A2',
      titel: 'Ein Satz, zwei Niveaus',
      items: [
        { text: 'A1: Ich trinke Kaffee. → A2: Gestern **habe** ich zu viel Kaffee **getrunken**.', gl: '— El A2 añade el pasado.' },
        { text: 'A1: Das Haus ist groß. → A2: Das Haus ist **größer als** die Wohnung.', gl: '— El A2 compara.' },
        { text: 'A1: Ich lerne Deutsch. → A2: Ich lerne Deutsch, **weil** ich in Wien arbeite.', gl: '— El A2 explica el porqué con weil.' },
        { text: 'A1: Er kocht. → A2: Er **hat** gestern für zehn Personen **gekocht**.', gl: '— Más detalle, más pasado.' },
      ],
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
