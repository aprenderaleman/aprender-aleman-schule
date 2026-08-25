// Lektion 24 · Hören: Durchsagen & kurze Texte (Teil 1-2)
//
// Segunda lección del bloque Hören (23-25). Práctica intensiva de T1-2
// con 4 mini-Transkripte (~50-70 palabras) según la metodología de la 23:
// leer una sola vez en tiempo real, tapar la solución. Fallen: halb zehn,
// -zehn/-zig, nicht…sondern, Paraphrase.

export default {
  spec: ['Bloque 2', 'Prüfungsstrategie', 'Niveau B1', 'Prüfungsrelevanz: Hören Teil 1-2'],
  h1: 'Hören: Durchsagen & kurze Texte (Teil 1-2)',
  lead: 'Bahnhof, Anrufbeantworter, Radio: In Teil 1 und 2 zählen **Fakten** — Wann? Wo? Was ist neu? ~~Aquí se cazan datos concretos, no ideas.~~',

  content: [
    // ── Lernziele ─────────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'in Durchsagen Ort, Zeit und Änderungen heraushören',
        'Uhrzeiten wie *halb zehn* sofort richtig verstehen',
        'die Falle *nicht … sondern* erkennen',
        'Aufgaben zu kurzen Texten unter Zeitdruck lösen',
      ],
    },

    { type: 'rule' },

    // ── Kernwortschatz ────────────────────────────────────────────
    {
      type: 'wortschatz',
      eyebrow: 'Kernwortschatz — die Sprache der Durchsagen',
      items: [
        { wort: 'das Gleis', kollokation: 'der Zug fährt von Gleis 9 ab', es: 'la vía, el andén' },
        { wort: 'die Verspätung', kollokation: 'zehn Minuten Verspätung haben', es: 'el retraso' },
        { wort: 'die Abfahrt', kollokation: 'kurz vor der Abfahrt', es: 'la salida (tren, bus)' },
        { wort: 'ausfallen', kollokation: 'der Kurs fällt heute aus', es: 'cancelarse, suspenderse' },
        { wort: 'verschieben', kollokation: 'der Termin wird verschoben', es: 'aplazar' },
        { wort: 'stattfinden', kollokation: 'das Fest findet am Samstag statt', es: 'tener lugar, celebrarse' },
        { wort: 'die Öffnungszeiten (Pl.)', kollokation: 'geänderte Öffnungszeiten', es: 'el horario de apertura' },
        { wort: 'der Anrufbeantworter', kollokation: 'eine Nachricht auf dem Anrufbeantworter', es: 'el contestador' },
        { wort: 'zurückrufen', kollokation: 'Rufen Sie uns bitte zurück!', es: 'devolver la llamada' },
        { wort: 'die Praxis', kollokation: 'die Praxis bleibt geschlossen', es: 'la consulta (médica)' },
        { wort: 'das Angebot', kollokation: 'heute im Angebot', es: 'la oferta' },
        { wort: 'erst', kollokation: 'erst um 17 Uhr', es: 'no antes de, recién (a las 17)' },
      ],
    },

    { type: 'rule' },

    // ── Erklärung ─────────────────────────────────────────────────
    {
      type: 'steps',
      eyebrow: 'Erklärung — drei Fallen, drei Regeln',
      steps: [
        {
          badge: 'Falle 1',
          titel: 'Uhrzeiten: „halb“ vor der Stunde',
          text: '__halb zehn = 9:30__ — nicht 10:30! ~~En alemán es «media hora ANTES de las diez», no «diez y media».~~ Auch: *Viertel nach neun* = 9:15, *Viertel vor zehn* = 9:45.',
        },
        {
          badge: 'Falle 2',
          titel: 'Zahlen im Vorbeiflug',
          text: 'Gleise, Preise, Telefonnummern: sofort __in Ziffern notieren__. Und genau hinhören: *vier**zehn*** (14) und *vier**zig*** (40) klingen fast gleich. ~~14 y 40 se distinguen solo por la terminación.~~',
        },
        {
          badge: 'Falle 3',
          titel: 'nicht … sondern',
          text: 'Die erste Information ist oft die falsche: __„nicht um 15 Uhr, sondern erst um 17 Uhr“__. Warnsignale: *nicht … sondern*, *leider*, *statt*, *eigentlich … aber*.',
        },
      ],
    },
    {
      type: 'tabelle',
      eyebrow: 'Erklärung — Uhrzeiten gesprochen',
      kopf: ['Du hörst …', 'Das heißt'],
      zeilen: [
        ['halb zehn', '9:30'],
        ['Viertel nach acht', '8:15'],
        ['Viertel vor sieben', '6:45'],
        ['kurz nach elf', 'ca. 11:05'],
        ['gegen 14 Uhr', 'ungefähr um 14 Uhr'],
      ],
    },
    {
      type: 'prose',
      card: true,
      absaetze: [
        '**Die Paraphrase-Falle:** In der Aufgabe steht selten dasselbe Wort wie im Audio. Aufgabe: *„Das Geschäft ist samstags geöffnet.“* — Audio: *„Wir haben am Samstag für Sie auf.“* Höre auf die **Bedeutung**, nicht auf das Wort. ~~No busques la palabra exacta: busca el significado.~~',
      ],
    },

    { type: 'rule' },

    // ── Beispiele ─────────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele',
      kicker: 'Typische Sätze',
      titel: 'So klingen Teil 1 und 2',
      items: [
        { text: 'Der Zug hat leider zehn Minuten **Verspätung**.' },
        { text: 'Die Sprechstunde **fällt** heute **aus**.', gl: '— hoy no hay consulta' },
        { text: 'Der Kurs beginnt **nicht** um 18 Uhr, **sondern** erst um **halb sieben**.', gl: '— also: 18:30' },
        { text: 'Unsere Filiale ist heute **bis** 22 Uhr geöffnet.' },
        { text: 'Bitte **rufen** Sie uns **zurück** — unter der Nummer 030 …' },
      ],
    },

    { type: 'rule' },

    // ── Übungen ───────────────────────────────────────────────────
    {
      type: 'uebung',
      eyebrow: 'Anwendung — Übung 1 · Erkennen',
      frage: 'Welche Uhrzeit ist das? Schreib sie in Ziffern.',
      loesungLabel: 'Lösung',
      aufgaben: [
        'halb acht (morgens)',
        'Viertel vor neun',
        'Viertel nach zwölf',
        'kurz nach halb sechs (abends)',
      ],
      loesungen: [
        '**7:30** ~~(no 8:30 — media hora antes de las ocho)~~',
        '**8:45**',
        '**12:15**',
        'ca. **17:35** — *halb sechs* = 17:30, *kurz nach* = ein paar Minuten später',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 2 · Transkripte 1-2 — richtig oder falsch?',
      frage: 'Lies jedes Transkript **nur einmal** in normalem Tempo ~~(en el examen: audio)~~ und entscheide mit abgedeckter Lösung: richtig oder falsch?',
      aufgabe: '**Transkript 1 · Durchsage am Bahnhof:** „Achtung an Gleis 7: Der Regionalexpress nach Leipzig, Abfahrt 10:46 Uhr, fährt heute nicht von Gleis 7, sondern von Gleis 4 ab. Reisende nach Halle steigen bitte in Bitterfeld um. Wir danken für Ihr Verständnis.“\n**Transkript 2 · Anrufbeantworter:** „Guten Tag, hier ist die Praxis Dr. Weber. Sie rufen außerhalb unserer Sprechzeiten an. Unsere Praxis ist montags bis freitags von 8 bis 12 Uhr geöffnet, donnerstags auch von 15 bis 18 Uhr. Am kommenden Montag bleibt die Praxis wegen einer Fortbildung geschlossen. In dringenden Fällen wählen Sie bitte die 116 117.“',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Der Zug nach Leipzig fährt heute von Gleis 7 ab.',
        'Wer nach Halle will, muss umsteigen.',
        'Die Praxis ist am Donnerstagnachmittag geöffnet.',
        'Am kommenden Montag ist die Praxis wie immer geöffnet.',
      ],
      loesungen: [
        '**Falsch** — „**nicht** von Gleis 7, **sondern** von Gleis 4“. Die klassische Falle.',
        '**Richtig** — „Reisende nach Halle steigen bitte in Bitterfeld um.“',
        '**Richtig** — „donnerstags auch von 15 bis 18 Uhr“.',
        '**Falsch** — sie bleibt „wegen einer Fortbildung **geschlossen**“.',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 3 · Transkript 3 — Produzieren',
      frage: 'Wieder nur einmal lesen. Beantworte danach die drei W-Fragen in ganzen Sätzen.',
      aufgabe: '**Transkript 3 · Radiobeitrag:** „Und hier noch ein Tipp für das Wochenende: Am Samstag findet auf dem Marktplatz das Sommerfest statt — mit Livemusik, internationalem Essen und einem großen Flohmarkt. Beginn ist um halb elf, der Eintritt ist frei. Aber Achtung: Bei Regen wird das Fest auf Sonntag verschoben. Alle Informationen finden Sie auf der Webseite der Stadt.“',
      loesungLabel: 'Mögliche Lösung',
      aufgaben: [
        'Wann beginnt das Fest?',
        'Was kostet der Eintritt?',
        'Was passiert bei Regen?',
      ],
      loesungen: [
        'Das Fest beginnt um **10:30 Uhr** — *halb elf*, eine halbe Stunde vor elf.',
        'Der Eintritt kostet **nichts** — er ist frei.',
        'Bei Regen wird das Fest **auf Sonntag verschoben**. — Auch richtig: „Es findet dann am Sonntag statt.“',
      ],
    },

    { type: 'rule' },

    // ── Prüfungsbezug ─────────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Hören · Teil 1',
      titel: 'Transkript 4 — im Prüfungsformat',
      anweisung: 'Wie im Examen: erst die Aufgaben lesen, dann das Transkript **einmal** in Echtzeit ~~(en el examen: audio)~~ — und ankreuzen.',
      absaetze: [
        '„Liebe Kundinnen und Kunden, heute im Angebot: frische Erdbeeren aus der Region — 500 Gramm für nur 1,99 Euro. An unserer Käsetheke bekommen Sie außerdem alle Käsesorten zwanzig Prozent günstiger. Und bitte beachten Sie: Unser Markt schließt heute bereits um 18 Uhr statt um 20 Uhr. Wir wünschen Ihnen einen schönen Einkauf.“',
      ],
      optionen: [
        '(1) Was ist heute billiger? a) Erdbeeren und Käse · b) nur Erdbeeren · c) alles im Markt',
        '(2) Der Markt schließt heute um … a) 18 Uhr · b) 20 Uhr · c) 22 Uhr',
      ],
      loesungLabel: 'Lösung',
      loesungen: [
        '(1) **a** — Erdbeeren im Angebot **und** Käse zwanzig Prozent günstiger.',
        '(2) **a** — „bereits um 18 Uhr **statt** um 20 Uhr“: *statt* funktioniert wie *nicht … sondern*.',
      ],
      kommentar: 'Beide Zahlen (18 und 20) kommen im Text vor — genau deshalb hilft nur die Struktur: Was ist die **neue** Information?',
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Notiere beim Hören **jede Zahl in Ziffern** an den Rand — Uhrzeit, Gleis, Preis. Am Ende des Textes hast du dann alle Kandidaten vor dir und kannst in Ruhe ankreuzen.',
    },

    { type: 'rule' },

    // ── Abschluss ─────────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Falle', 'Beispiel', 'Merke'],
      zeilen: [
        ['halb + Stunde', 'halb zehn', '9:30 — eine halbe Stunde **vor** der vollen Stunde'],
        ['nicht … sondern / statt', 'nicht Gleis 7, sondern Gleis 4', 'die **zweite** Information zählt'],
        ['-zehn / -zig', 'vierzehn / vierzig', 'auf die Endung hören, Zahl notieren'],
        ['Paraphrase', '„geöffnet“ ↔ „wir haben auf“', 'Bedeutung suchen, nicht das Wort'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich verstehe gesprochene Uhrzeiten wie *halb zehn* sofort.',
        'Ich erkenne Änderungen mit *nicht … sondern* und *statt*.',
        'Ich notiere beim Hören Ort, Zeit und Preis in Ziffern.',
        'Ich habe die vier Transkripte nach der Einmal-Regel geübt.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Von Fakten zu Meinungen: In **Teil 3 und 4** hörst du Gespräche und Diskussionen. Dort zählt nicht die Uhrzeit, sondern **wer was sagt** — und kleine Wörter wie *also*, *na ja* und *eigentlich* verraten dir die Meinung. Das ist das Thema der nächsten Lektion.',
    },
  ],
}
