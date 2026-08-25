// Lektion 17 · Modul Hören — Überblick
//
// ═══ FIJA EL CANON INTERNO de Hören (Bloque 2) ═══
// Hören: ca. 20 min · Gespräche & Ansagen · Durchsagen (textos muy breves).
// Número exacto de Teile, ítems, veces de escucha y puntos → SIEMPRE
// genérico + remisión al Modellsatz oficial.
// Instala la METODOLOGÍA SIN AUDIO del curso: Transkripte que se leen una
// sola vez (o alguien los lee en voz alta) + Modellsatz del Prüfungszentrum
// para practicar con audio real, gratis.

export default {
  spec: ['Bloque 2', 'Prüfungsstrategie', 'Niveau A1', 'Prüfungsrelevanz: Hören'],
  h1: 'Modul Hören — Überblick',
  lead: '~~El examen empieza aquí:~~ **Hören, ca. 20 Minuten**. ~~Conversaciones cortas, avisos, contestador — y una regla de oro: no hay que entenderlo todo.~~',

  content: [
    // ── Lernziele ─────────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'wissen, was du im Hören hörst (Gespräche, Ansagen, Durchsagen)',
        'die Strategie kennen: **zuerst die Aufgaben lesen**, dann hören',
        'Zahlen, Uhrzeiten und Namen im Text finden',
        'wissen: **immer ankreuzen** — am Ende auf den Antwortbogen',
      ],
    },

    { type: 'rule' },

    // ── Kernwortschatz ────────────────────────────────────────────
    {
      type: 'wortschatz',
      eyebrow: 'Kernwortschatz — Hören',
      items: [
        { wort: 'das Gespräch', kollokation: 'ein kurzes Gespräch', es: 'la conversación' },
        { wort: 'die Ansage', kollokation: 'eine Ansage am Telefon', es: 'el aviso, la locución' },
        { wort: 'die Durchsage', kollokation: 'eine Durchsage am Bahnhof', es: 'el aviso por megafonía' },
        { wort: 'der Anrufbeantworter', kollokation: 'eine Nachricht auf dem Anrufbeantworter', es: 'el contestador' },
        { wort: 'ankreuzen', kollokation: 'die Lösung ankreuzen', es: 'marcar (con una cruz)' },
        { wort: 'der Antwortbogen', kollokation: 'auf den Antwortbogen übertragen', es: 'la hoja de respuestas' },
      ],
    },

    { type: 'rule' },

    // ── Erklärung ─────────────────────────────────────────────────
    {
      type: 'steps',
      eyebrow: 'Erklärung — So funktioniert Hören',
      steps: [
        {
          badge: 'ca. 20 Minuten',
          titel: 'Was hörst du?',
          text: 'Du hörst __sehr kurze Texte__: **Gespräche** aus dem Alltag, **Ansagen** am Telefon und auf dem Anrufbeantworter, **Durchsagen** ~~(megafonía: estación, supermercado)~~. ~~¿Cuántas partes, ítems y escuchas? Eso, en el Modellsatz oficial — aquí va lo que no cambia.~~',
        },
        {
          badge: 'Strategie',
          titel: 'Zuerst lesen, dann hören',
          text: 'Vor jedem Text hast du Zeit: __Lies zuerst die Aufgaben__. Dann weißt du: Ich suche eine **Uhrzeit**? Eine **Zahl**? Einen **Namen**? ~~Con la pregunta en la cabeza, el oído sabe qué cazar.~~',
        },
        {
          badge: 'ganz normal',
          titel: 'Nicht alles verstehen',
          text: 'Auf Niveau A1 verstehst du __nicht jedes Wort__ — das ist **normal**. Du brauchst nur die **eine Information** für die Aufgabe.',
        },
        {
          badge: 'immer ankreuzen',
          titel: 'Nie leer lassen',
          text: 'Es gibt __keine Minuspunkte__. Nicht sicher? **Kreuze trotzdem an!** ~~Casilla vacía = 0 seguro; una cruz puede ser punto.~~ Am Ende kommt alles auf den **Antwortbogen** ~~(→ Lektion 2)~~.',
        },
      ],
    },
    {
      type: 'prose',
      eyebrow: 'Erklärung — So übst du hier (ohne Audio)',
      card: true,
      titel: 'Transkript statt Audio',
      absaetze: [
        'In diesem Kurs steht jeder Hörtext als **Transkript** ~~(el texto de lo que se oye)~~. Lies es __nur einmal__, in normalem Tempo, **ohne zurückzugehen** — oder jemand liest es dir **laut vor**. ~~Una sola pasada: así simulas la escucha.~~',
        'Echtes Audio gibt es **gratis** im offiziellen **Modellsatz** ~~(examen de muestra oficial, con soluciones)~~. Mach ihn einmal vor der Prüfung.',
      ],
    },

    { type: 'rule' },

    // ── Beispiele ─────────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele — So klingen die Texte',
      items: [
        { text: '„Treffen wir uns **um sieben**?“', gl: '— ¿Quedamos a las siete? (Gespräch)' },
        { text: '„Hallo, hier ist Paul. Ruf mich bitte **zurück**!“', gl: '— Soy Paul. ¡Llámame! (Anrufbeantworter)' },
        { text: '„Der Zug nach Berlin fährt von **Gleis 7**.“', gl: '— El tren a Berlín sale de la vía 7. (Durchsage)' },
      ],
    },

    { type: 'rule' },

    // ── Übungen ───────────────────────────────────────────────────
    {
      type: 'uebung',
      eyebrow: 'Anwendung — Übung 1 · Wo hörst du das?',
      frage: 'Gespräch, Anrufbeantworter oder Durchsage?',
      loesungLabel: 'Lösung',
      aufgaben: [
        '„Achtung am Gleis 3: Der Zug hat 10 Minuten Verspätung.“',
        '„Hallo Anna, hier ist Marta. Kommst du morgen? Ruf mich an!“',
        '„— Was möchten Sie trinken? — Einen Kaffee, bitte.“',
      ],
      loesungen: [
        '**Durchsage** ~~(megafonía, en la estación)~~.',
        '**Anrufbeantworter** — eine Nachricht.',
        '**Gespräch** — zwei Personen, im Café.',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 2 · Was suchst du?',
      frage: 'Lies die Aufgabe. Was musst du hören: eine **Zahl**, eine **Uhrzeit** oder einen **Namen**?',
      loesungLabel: 'Lösung',
      aufgaben: [
        '„Wann beginnt der Film?“',
        '„Wie ist die Telefonnummer?“',
        '„Wie heißt die Lehrerin?“',
      ],
      loesungen: [
        'eine **Uhrzeit** ~~(wann? = ¿cuándo?)~~.',
        'eine **Zahl** — die Telefonnummer.',
        'einen **Namen** ~~(wie heißt…? = ¿cómo se llama?)~~.',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 3 · Dein erstes Transkript',
      frage: 'Lies das Transkript **nur einmal** ~~(en el examen: esto lo oyes, no lo lees)~~. Dann kreuze an.',
      aufgabe: 'Transkript: „Hallo Herr Weber, hier ist die Praxis Doktor Klein. Ihr Termin ist am **Montag um 10 Uhr**. Bis Montag, auf Wiederhören!“',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Der Termin ist am Montag. — richtig oder falsch?',
        'Der Termin ist um 11 Uhr. — richtig oder falsch?',
      ],
      loesungen: [
        '**Richtig.** „Ihr Termin ist am **Montag** …“',
        '**Falsch.** Um **10** Uhr, nicht um 11.',
      ],
    },

    { type: 'rule' },

    // ── Prüfungsbezug ─────────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Hören',
      titel: 'Richtig oder falsch?',
      anweisung: 'Lies das Transkript einmal ~~(en el examen escuchas el audio)~~. Kreuze an: richtig oder falsch?',
      absaetze: [
        '„Liebe Kundinnen und Kunden, wir schließen heute um **18 Uhr**. Morgen sind wir wieder ab **9 Uhr** für Sie da. Vielen Dank!“',
      ],
      optionen: [
        '1. Das Geschäft schließt heute um 18 Uhr. — richtig / falsch',
        '2. Morgen öffnet das Geschäft um 8 Uhr. — richtig / falsch',
      ],
      loesungLabel: 'Lösung',
      loesungen: [
        '1. **Richtig** — „wir schließen heute um 18 Uhr“.',
        '2. **Falsch** — morgen ab **9** Uhr, nicht um 8.',
      ],
      kommentar: 'Zwei Uhrzeiten im Text — jede Aufgabe fragt nur nach **einer**. ~~Caza SU dato, ignora el resto.~~',
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Wie oft du jeden Text hörst, sagt dir die **Anweisung** in der Prüfung. Übe das einmal real: Der **Modellsatz** vom Prüfungsanbieter ist gratis, mit echtem Audio.',
    },

    { type: 'rule' },

    // ── Abschluss ─────────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Hören', 'Das Wichtigste'],
      zeilen: [
        ['Was?', 'Gespräche & Ansagen · Durchsagen — sehr kurze Texte'],
        ['Zeit', 'ca. 20 Minuten ~~(detalles: Modellsatz)~~'],
        ['Strategie', '**zuerst** Aufgaben lesen — dann Zahlen, Uhrzeiten, Namen jagen'],
        ['Regel', 'immer ankreuzen — nie leer lassen'],
        ['Am Ende', 'alles auf den **Antwortbogen**'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich weiß, was im Hören kommt: Gespräche, Ansagen, Durchsagen.',
        'Ich lese zuerst die Aufgaben und suche dann die eine Information.',
        'Ich kreuze immer an und übertrage am Ende auf den Antwortbogen.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Jetzt hast du den Überblick. In der nächsten Lektion übst du die erste Textsorte richtig: **Gespräche und Ansagen** — mit Transkripten, Aufgaben und der Lieblingsfalle der Prüfung: der Korrektur („lieber um acht“).',
    },
  ],
}
