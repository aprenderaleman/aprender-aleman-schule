// Lektion 18 · Hören: Gespräche & Ansagen
//
// Bloque 2 «Prüfungsstrategie». Sigue el canon interno de Hören fijado en
// la Lektion 17 (ca. 20 min; Gespräche & Ansagen · Durchsagen; detalle fino
// → Modellsatz). Metodología sin audio: Transkripte que se leen UNA vez.
// Foco: la corrección en el diálogo («lieber um …») y los números al vuelo.

export default {
  spec: ['Bloque 2', 'Prüfungsstrategie', 'Niveau A1', 'Prüfungsrelevanz: Hören'],
  h1: 'Hören: Gespräche & Ansagen',
  lead: '~~Diálogos mínimos y mensajes de contestador. La trampa favorita del examen: la~~ **Korrektur** ~~— «¿a las siete? … mejor a las ocho». Gana la segunda información.~~',

  content: [
    // ── Lernziele ─────────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'kurze Gespräche verstehen: *Wann? Was? Wo?*',
        'die **Korrektur** erkennen: „lieber um acht“ — die zweite Information zählt',
        'Nachrichten auf dem **Anrufbeantworter** verstehen: Wer? Warum? Was tun?',
        'Zahlen und Uhrzeiten sofort notieren',
      ],
    },

    { type: 'rule' },

    // ── Kernwortschatz ────────────────────────────────────────────
    {
      type: 'wortschatz',
      eyebrow: 'Kernwortschatz — Gespräche & Ansagen',
      items: [
        { wort: 'der Termin', kollokation: 'einen Termin haben', es: 'la cita' },
        { wort: 'sich treffen', kollokation: 'Wann treffen wir uns?', es: 'quedar, encontrarse' },
        { wort: 'lieber', kollokation: 'lieber um acht', es: 'mejor, preferiblemente' },
        { wort: 'passen', kollokation: 'Das passt gut.', es: 'venir bien' },
        { wort: 'leider', kollokation: 'Das geht leider nicht.', es: 'por desgracia' },
        { wort: 'brauchen', kollokation: 'Wir brauchen Milch.', es: 'necesitar' },
        { wort: 'die Nachricht', kollokation: 'eine Nachricht hinterlassen', es: 'el mensaje' },
        { wort: 'zurückrufen', kollokation: 'Ruf mich bitte zurück!', es: 'devolver la llamada' },
      ],
    },

    { type: 'rule' },

    // ── Erklärung ─────────────────────────────────────────────────
    {
      type: 'steps',
      eyebrow: 'Erklärung — Die drei Regeln',
      steps: [
        {
          badge: 'Achtung Falle',
          titel: 'Die Korrektur: die zweite Information zählt',
          text: 'Im Gespräch sagt jemand eine Zeit — und **ändert** sie: __„Um sieben? — Nein, lieber um **acht**.“__ Die Lösung ist fast immer die **zweite** Information. ~~La primera cifra es el cebo; la corrección es la respuesta.~~ Signalwörter: **lieber**, **nein**, **leider**, **besser**.',
        },
        {
          badge: 'Zahlen',
          titel: 'Zahlen kommen schnell',
          text: 'Uhrzeiten, Preise, Telefonnummern kommen __im Flug__. **Schreib sie sofort auf!** ~~Apunta el número en cuanto suene; a los 10 segundos ya no está.~~',
        },
        {
          badge: 'Anrufbeantworter',
          titel: 'Die Struktur ist immer gleich',
          text: 'Eine Nachricht hat drei Teile: __Wer?__ („Hallo, hier ist Lena“) → __Warum?__ („der Termin geht leider nicht“) → __Was tun?__ („ruf mich zurück“). ~~Quién habla se dice al principio — no te lo pierdas.~~',
        },
      ],
    },

    { type: 'rule' },

    // ── Beispiele ─────────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele — So klingt die Korrektur',
      items: [
        { text: '„Treffen wir uns um sieben? — **Lieber um acht**.“', gl: '— Quedan a las 8, no a las 7.' },
        { text: '„Kaufst du Käse? — Käse haben wir. Ich kaufe **Milch und Brot**.“', gl: '— Compra leche y pan (queso no).' },
        { text: '„Hallo, **hier ist** Paul. Ruf mich bitte **zurück**!“', gl: '— Contestador: quién + qué hacer.' },
      ],
    },

    { type: 'rule' },

    // ── Übungen ───────────────────────────────────────────────────
    {
      type: 'uebung',
      eyebrow: 'Anwendung — Übung 1 · Das Gespräch',
      frage: 'Lies das Transkript **nur einmal** ~~(en el examen: audio)~~. Wann treffen sie sich?',
      aufgabe: 'Transkript: „— Hallo Tom! Gehen wir morgen ins Kino?\n— Ja, gern. Um sieben?\n— Hm, sieben ist zu früh. Lieber um acht.\n— Okay, um acht am Kino. Bis morgen!“',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Sie treffen sich … a) um 7 Uhr · b) um 8 Uhr · c) um 9 Uhr',
      ],
      loesungen: [
        '**b) um 8 Uhr.** „Sieben ist zu früh. **Lieber um acht**.“ — Die Korrektur gewinnt. ~~La primera hora era el cebo.~~',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 2 · Der Einkauf',
      frage: 'Lies das Transkript **nur einmal**. Was kauft er?',
      aufgabe: 'Transkript: „— Ich gehe in den Supermarkt. Brauchen wir etwas?\n— Ja, wir brauchen Milch und Brot.\n— Haben wir noch Käse?\n— Ja, Käse haben wir noch.\n— Gut, dann kaufe ich Milch und Brot.“',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Er kauft … a) Milch und Käse · b) Brot und Käse · c) Milch und Brot',
      ],
      loesungen: [
        '**c) Milch und Brot.** Käse haben sie **noch** ~~(todavía tienen — no hay que comprarlo)~~. Drei Wörter im Text, nur zwei sind die Lösung.',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 3 · Der Anrufbeantworter',
      frage: 'Lies die Nachricht **nur einmal**. Dann antworte: Wer? Wann? Was tun?',
      aufgabe: 'Transkript: „Hallo Frau Ruiz, hier ist die Zahnarztpraxis Doktor Wolf. Ihr Termin am Donnerstag um neun Uhr geht leider nicht. Können Sie am Freitag um elf Uhr kommen? Bitte rufen Sie uns zurück. Danke, auf Wiederhören!“',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Wer spricht?',
        'Der neue Termin ist am Freitag um ___ Uhr.',
        'Was soll Frau Ruiz tun?',
      ],
      loesungen: [
        'Die **Zahnarztpraxis Doktor Wolf** ~~(se dice al principio)~~.',
        'Um **11** Uhr. Donnerstag um 9 geht **leider nicht** — wieder die Korrektur!',
        'Sie soll **zurückrufen**.',
      ],
    },

    { type: 'rule' },

    // ── Prüfungsbezug ─────────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Hören',
      titel: 'Was ist richtig?',
      anweisung: 'Lies das Transkript einmal ~~(en el examen escuchas el audio)~~. Kreuze die richtige Lösung an.',
      absaetze: [
        '„— Guten Tag, ich möchte einen Termin. Geht Mittwoch um zehn?\n— Mittwoch ist leider voll. Geht auch Donnerstag um zehn?\n— Ja, Donnerstag passt gut. Danke!“',
      ],
      optionen: [
        '1. Der Termin ist am … a) Mittwoch · b) Donnerstag',
        '2. Der Termin ist um … a) 10 Uhr · b) 11 Uhr',
      ],
      loesungLabel: 'Lösung',
      loesungen: [
        '1. **b) Donnerstag** — „Mittwoch ist leider voll“ → Korrektur.',
        '2. **a) 10 Uhr** — die Uhrzeit bleibt gleich, nur der Tag ändert sich.',
      ],
      kommentar: 'Nicht immer ändert sich alles: hier nur der **Tag**. ~~Escucha hasta el final antes de marcar.~~',
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Warte immer bis zum **Ende** des Gesprächs, dann kreuze an — die erste Zahl ist oft eine Falle. ~~¿Te has perdido? Marca algo y pasa al siguiente ítem.~~',
    },

    { type: 'rule' },

    // ── Abschluss ─────────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Textsorte', 'Das hilft'],
      zeilen: [
        ['Gespräch', 'Korrektur! **lieber / nein / leider** → die zweite Information zählt'],
        ['Anrufbeantworter', 'Struktur: **Wer? → Warum? → Was tun?**'],
        ['Zahlen & Uhrzeiten', 'sofort notieren'],
        ['Immer', 'bis zum Ende hören, dann ankreuzen — nie leer lassen'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich verstehe kurze Gespräche: Wann? Was? Wo?',
        'Ich erkenne die Korrektur und nehme die zweite Information.',
        'Ich verstehe eine Nachricht auf dem Anrufbeantworter: Wer? Warum? Was tun?',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Gespräche kannst du jetzt. In der nächsten Lektion kommt die zweite Textsorte: **Durchsagen** — Bahnhof und Supermarkt, mit Gleis, Preis und der großen Uhrzeit-Falle: *halb zehn* ist **9.30 Uhr**!',
    },
  ],
}
