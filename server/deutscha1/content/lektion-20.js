// Lektion 20 · Modul Lesen — Überblick
//
// ═══ FIJA EL CANON INTERNO de Lesen (Bloque 2) ═══
// Lesen: ca. 25 min · Notizen & Anzeigen · Schilder & Aushänge.
// Número exacto de Teile, ítems y puntos → SIEMPRE genérico + Modellsatz.

export default {
  spec: ['Bloque 2', 'Prüfungsstrategie', 'Niveau A1', 'Prüfungsrelevanz: Lesen'],
  h1: 'Modul Lesen — Überblick',
  lead: '~~Empieza la parte de lectura del examen:~~ **Lesen, ca. 25 Minuten**. ~~Textos muy cortos, respuestas de~~ richtig/falsch ~~— aquí ves cómo funciona todo.~~',

  content: [
    // ── Lernziele ─────────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'die Texte im Lesen kennen: Notizen, E-Mails, Anzeigen, Schilder',
        'die Strategie kennen: nicht alles verstehen — **die Information suchen**',
        '*richtig* oder *falsch* ankreuzen und den Antwortbogen benutzen',
      ],
    },

    { type: 'rule' },

    // ── Kernwortschatz ────────────────────────────────────────────
    {
      type: 'wortschatz',
      eyebrow: 'Kernwortschatz — Lesen',
      items: [
        { wort: 'der Text', kollokation: 'den Text lesen', es: 'el texto' },
        { wort: 'die Notiz', kollokation: 'eine Notiz schreiben', es: 'la nota' },
        { wort: 'die E-Mail', kollokation: 'eine kurze E-Mail', es: 'el correo' },
        { wort: 'die Anzeige', kollokation: 'eine Anzeige lesen', es: 'el anuncio' },
        { wort: 'das Schild', kollokation: 'das Schild an der Tür', es: 'el letrero' },
        { wort: 'der Aushang', kollokation: 'der Aushang im Haus', es: 'el aviso (colgado)' },
        { wort: 'richtig', kollokation: 'Das ist richtig.', es: 'correcto, verdadero' },
        { wort: 'falsch', kollokation: 'Das ist falsch.', es: 'falso' },
        { wort: 'ankreuzen', kollokation: 'die Lösung ankreuzen', es: 'marcar (con una cruz)' },
        { wort: 'der Antwortbogen', kollokation: 'auf dem Antwortbogen markieren', es: 'la hoja de respuestas' },
      ],
    },

    { type: 'rule' },

    // ── Erklärung ─────────────────────────────────────────────────
    {
      type: 'steps',
      eyebrow: 'Erklärung — So funktioniert Lesen',
      steps: [
        {
          badge: 'ca. 25 Minuten',
          titel: 'Sehr kurze Texte',
          text: 'Im Lesen liest du __sehr kurze Texte__ (20-60 Wörter): **Notizen**, kurze **E-Mails**, kleine **Anzeigen**, **Schilder** und **Aushänge**. ~~¿Cuántas partes y puntos exactamente? Míralo en el Modellsatz oficial — aquí aprendes lo que no cambia.~~',
        },
        {
          badge: 'Strategie',
          titel: 'Nicht alles verstehen!',
          text: 'Du musst __nicht jedes Wort__ verstehen. Du suchst **eine Information**: *Wann? Wo? Wie viel?* ~~Busca el dato concreto — el resto del texto no importa.~~',
        },
        {
          badge: 'richtig / falsch',
          titel: 'Lies zuerst die Aufgabe',
          text: 'Lies __zuerst die Aufgabe__, dann den Text. Steht das im Text? → **richtig**. Steht etwas anderes im Text? → **falsch**.',
        },
        {
          badge: 'Antwortbogen',
          titel: 'Am Ende übertragen',
          text: 'Deine Lösungen kommen am Ende auf den __Antwortbogen__. ~~Solo se corrige la hoja de respuestas — no olvides pasar tus cruces.~~',
        },
      ],
    },

    { type: 'rule' },

    // ── Beispiele ─────────────────────────────────────────────────
    {
      type: 'prose',
      eyebrow: 'Beispiele — Eine Notiz',
      card: true,
      kicker: 'Text',
      titel: 'Notiz an der Tür',
      absaetze: [
        '„Hallo Tom, ich komme heute um **18 Uhr**. Der Deutschkurs ist im **Raum 2**, nicht im Raum 5. Bis später! Ana“',
      ],
    },
    {
      type: 'beispiele',
      kicker: 'Strategie',
      titel: 'Die Information finden',
      items: [
        { text: 'Frage: *Wann kommt Ana?* → **um 18 Uhr**', gl: '— ¿Cuándo viene Ana? El dato es la hora.' },
        { text: 'Frage: *Wo ist der Kurs?* → **im Raum 2**', gl: '— ¿Dónde es el curso? Ojo: hay dos números de sala.' },
        { text: 'Aufgabe: „Der Kurs ist im Raum 5.“ → **falsch**', gl: '— El texto dice „nicht im Raum 5“.' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'Textsorten',
      titel: 'Welcher Text ist das?',
      items: [
        { text: '„Zu verkaufen: Fahrrad, nur 50 Euro. Tel. 030 44 55 66“ → Das ist eine **Anzeige**.', gl: '— un anuncio: algo se vende' },
        { text: '„Heute geschlossen“ → Das ist ein **Schild**.', gl: '— un letrero en una puerta' },
        { text: '„Hallo Lisa, ich komme um 8 Uhr. Bis morgen!“ → Das ist eine **Notiz**.', gl: '— una nota personal' },
        { text: '„Am Montag kein Wasser im Haus.“ → Das ist ein **Aushang**.', gl: '— un aviso colgado en el portal' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'Modell',
      titel: 'Eine Anzeige, zwei Informationen',
      items: [
        { text: 'Anzeige: „Deutschkurs am Abend, montags 19-21 Uhr, 40 Euro pro Monat.“', gl: '— el anuncio completo: 20 palabras' },
        { text: 'Frage: *Wie viel kostet der Kurs?* → **40 Euro pro Monat**', gl: '— busca el precio: el número con „Euro“' },
        { text: 'Frage: *Wann ist der Kurs?* → **montags von 19 bis 21 Uhr**', gl: '— busca el día y la hora' },
        { text: 'Aufgabe: „Der Kurs ist am Morgen.“ → **falsch** — im Text steht „am Abend“.', gl: '— la palabra «Kurs» está, pero la frase es falsa' },
        { text: 'Am Ende: die Lösung auf dem **Antwortbogen** ankreuzen.', gl: '— y pasa tu cruz a la hoja de respuestas' },
      ],
    },

    { type: 'rule' },

    // ── Prüfungsbezug ─────────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Lesen',
      titel: 'Anzeige lesen — richtig oder falsch?',
      anweisung: 'Lies die Anzeige. Sind die Sätze richtig oder falsch? Kreuze an.',
      absaetze: [
        '„**Wohnung frei!** 2 Zimmer, Küche, Bad. 450 Euro pro Monat. Die Wohnung ist ab **1. Oktober** frei. Tel. 0176 23 45 67“',
      ],
      optionen: [
        'a) Die Wohnung hat zwei Zimmer. — richtig / falsch',
        'b) Die Wohnung ist ab September frei. — richtig / falsch',
      ],
      loesungLabel: 'Lösung',
      loesungen: [
        'a) **Richtig.** Im Text steht: „2 Zimmer“.',
        'b) **Falsch.** Im Text steht: „ab 1. Oktober“, nicht September.',
      ],
      kommentar: 'So sehen die Aufgaben im Lesen aus: kurzer Text, Satz lesen, richtig oder falsch ankreuzen. ~~Practica el formato real con el Modellsatz oficial del Zertifikat A1.~~',
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Keine Antwort leer lassen! **Kreuze immer etwas an** — richtig oder falsch. ~~Nunca dejes un ítem en blanco: una respuesta marcada siempre puede sumar, una vacía nunca.~~ Und plane 2-3 Minuten für den **Antwortbogen** ein.',
    },

    { type: 'rule' },

    // ── Abschluss ─────────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Textsorte', 'Beispiel'],
      zeilen: [
        ['die Notiz', '„Ich komme um 18 Uhr.“ ~~(nota personal)~~'],
        ['die Anzeige', '„Fahrrad, nur 50 Euro.“ ~~(anuncio)~~'],
        ['das Schild', '„Geschlossen“ ~~(letrero)~~'],
        ['der Aushang', '„Am Montag kein Wasser.“ ~~(aviso colgado)~~'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich kenne die Texte im Lesen: sehr kurze Texte, ca. 25 Minuten.',
        'Ich suche die Information — ich muss nicht jedes Wort verstehen.',
        'Ich kreuze richtig/falsch an und übertrage alles auf den Antwortbogen.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Jetzt kennst du das Modul. In der nächsten Lektion trainierst du die erste Textgruppe: **Notizen & Anzeigen** — wer, wann, wo und wie viel?',
    },
  ],
}
