// Lektion 22 · Hören: Kurze Texte & Durchsagen
//
// Bloque 2 (Prüfungstraining). Sigue el canon de la Lektion 21:
// Hören ca. 30 min; detalle fino genérico + Modellsatz.
// Práctica con 3 mini-Transkripte (~40-60 palabras) e ítems con solución.

export default {
  spec: ['Bloque 2', 'Prüfungstraining — Hören', 'Niveau A2', 'Prüfungsrelevanz: Hören'],
  h1: 'Hören: Kurze Texte & Durchsagen',
  lead: '~~Megafonía y avisos: captar hora, lugar y precio al vuelo.~~ **Achtung, der Klassiker:** *halb zehn* ist **9.30 Uhr** — nicht 10.30!',

  content: [
    // ── Lernziele ─────────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'Durchsagen am Bahnhof, im Supermarkt und am Telefon verstehen',
        'Uhrzeiten mit *halb* und *Viertel* richtig verstehen',
        'ähnliche Zahlen unterscheiden (14/40, 13/30)',
        'die wichtige Information (Zeit, Ort, Preis) schnell finden',
      ],
    },

    { type: 'rule' },

    // ── Kernwortschatz ────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Kernwortschatz — Durchsagen',
      kopf: ['Wort', 'Beispiel', 'Bedeutung'],
      zeilen: [
        ['das Gleis', 'von Gleis 7', 'andén, vía'],
        ['die Abfahrt', 'Abfahrt 10.15 Uhr', 'salida (tren, bus)'],
        ['die Verspätung', '20 Minuten Verspätung', 'retraso'],
        ['das Angebot', 'heute im Angebot', 'oferta'],
        ['geöffnet / geschlossen', 'bis 20 Uhr geöffnet', 'abierto / cerrado'],
        ['das Erdgeschoss', 'im Erdgeschoss', 'planta baja'],
        ['der Ausgang', 'am Ausgang warten', 'salida (puerta)'],
        ['günstig', 'sehr günstig', 'barato, económico'],
      ],
    },

    { type: 'rule' },

    // ── Erklärung ─────────────────────────────────────────────────
    {
      type: 'steps',
      eyebrow: 'Erklärung — Uhrzeiten: der Klassiker',
      steps: [
        {
          badge: 'halb',
          titel: 'halb zehn = 9.30 Uhr',
          text: '__halb__ + Stunde = **eine halbe Stunde VOR** dieser Stunde. ~~(¡media hora ANTES de las 10, no después! El error nº 1 de los hispanohablantes.)~~\n__halb acht = 7.30__ · __halb zwölf = 11.30__',
        },
        {
          badge: 'Viertel',
          titel: 'Viertel nach / Viertel vor',
          text: '__Viertel nach neun__ = 9.15 ~~(y cuarto)~~ · __Viertel vor zehn__ = 9.45 ~~(menos cuarto)~~.',
        },
        {
          badge: 'offiziell',
          titel: 'In Durchsagen oft offiziell',
          text: 'Am Bahnhof hörst du oft die offizielle Form: __„vierzehn Uhr dreißig“__ = 14.30 Uhr. Beide Formen musst du verstehen.',
        },
      ],
    },
    {
      type: 'tabelle',
      eyebrow: 'Erklärung — Zahlenfallen',
      kopf: ['-zehn (13-19)', '-zig (20-90)'],
      zeilen: [
        ['vierzehn = 14', 'vierzig = 40'],
        ['dreizehn = 13', 'dreißig = 30'],
        ['sechzehn = 16', 'sechzig = 60'],
      ],
    },
    {
      type: 'prose',
      eyebrow: 'Erklärung — Die Strategie',
      card: true,
      titel: 'Weißt du, was du suchst?',
      absaetze: [
        'Eine Durchsage ist kurz — du hast **eine Chance**. Lies die Aufgabe zuerst und frag dich: Suche ich eine **Uhrzeit**, einen **Ort** oder einen **Preis**? Dann warte genau auf diese Information. ~~(escucha selectiva: sabes qué dato viene, solo tienes que cazarlo)~~',
      ],
    },

    { type: 'rule' },

    // ── Beispiele ─────────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele — Uhrzeit, Ort, Preis',
      items: [
        { text: '„Der Zug nach Köln fährt um **halb acht**.“', gl: '— 7.30 Uhr ~~(¡no las 8.30!)~~' },
        { text: '„Heute alle Jacken für **vierzig** Euro.“', gl: '— 40 €, nicht 14 €' },
        { text: '„Die Bäckerei finden Sie im **Erdgeschoss**.“', gl: '— Ort: planta baja' },
        { text: '„Wir haben bis **20 Uhr** geöffnet.“', gl: '— abierto hasta las 20:00' },
      ],
    },

    { type: 'rule' },

    // ── Übungen ───────────────────────────────────────────────────
    {
      type: 'uebung',
      eyebrow: 'Anwendung — Übung 1 · Am Bahnhof',
      frage: 'Lies die Aufgaben, dann das Transkript **nur einmal**. ~~(en el examen: audio)~~ Richtig oder falsch?',
      aufgabe: '**Transkript — Durchsage am Bahnhof:**\n„Achtung an Gleis 5: Der Zug nach München, Abfahrt vierzehn Uhr dreißig, hat heute leider zwanzig Minuten Verspätung. Der Zug fährt heute auch nicht von Gleis 5, sondern von Gleis 15. Ich wiederhole: Der Zug nach München fährt heute von Gleis 15.“',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Der Zug fährt nach München.',
        'Der Zug hat 20 Minuten Verspätung.',
        'Der Zug fährt von Gleis 5.',
      ],
      loesungen: [
        '**Richtig.**',
        '**Richtig.**',
        '**Falsch** — er fährt von Gleis **15**. ~~(fünf/fünfzehn: escucha hasta el final de la palabra)~~',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 2 · Im Supermarkt',
      frage: 'Lies das Transkript einmal und beantworte die Fragen.',
      aufgabe: '**Transkript — Durchsage im Supermarkt:**\n„Liebe Kunden, heute im Angebot: ein Kilo Äpfel für nur einen Euro neunzig. Im Erdgeschoss finden Sie jetzt auch frisches Brot von unserer Bäckerei. Wir haben heute bis zwanzig Uhr geöffnet. Wir wünschen Ihnen einen schönen Einkauf!“',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Was kostet ein Kilo Äpfel?',
        'Wo gibt es frisches Brot?',
        'Bis wann ist der Supermarkt geöffnet?',
      ],
      loesungen: [
        '**1,90 €** („einen Euro neunzig“)',
        'Im **Erdgeschoss**.',
        'Bis **20 Uhr**.',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 3 · Anrufbeantworter',
      frage: 'Jetzt mit *halb* und Zahlenfallen. Lies einmal und notiere die Informationen.',
      aufgabe: '**Transkript — Anrufbeantworter:**\n„Hallo Frau Sánchez, hier ist die Praxis Dr. Klein. Ihr Termin morgen um halb zehn geht leider nicht. Können Sie um halb zwölf kommen? Bitte rufen Sie uns kurz an: null sechs neun — dreizehn — vierzig. Vielen Dank und auf Wiederhören!“',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Wann war der alte Termin?',
        'Wann ist der neue Termin?',
        'Wie ist die Telefonnummer?',
      ],
      loesungen: [
        'Um **halb zehn = 9.30 Uhr**. ~~(¡no las 10.30!)~~',
        'Um **halb zwölf = 11.30 Uhr**.',
        '**069 — 13 — 40** ~~(dreizehn = 13, vierzig = 40)~~',
      ],
    },

    { type: 'rule' },

    // ── Prüfungsbezug ─────────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Hören · Kurze Texte & Durchsagen',
      titel: 'Multiple Choice',
      anweisung: 'Lies zuerst die Frage, dann das Transkript **einmal**. ~~(en el examen: audio)~~ **Wann fährt der Bus zum Flughafen?**',
      absaetze: [
        '„Meine Damen und Herren, der Bus zum Flughafen fährt heute nicht um Viertel nach acht, sondern erst um halb neun. Wir bitten um Entschuldigung.“',
      ],
      optionen: ['a) um 8.15 Uhr', 'b) um 8.30 Uhr', 'c) um 9.30 Uhr'],
      loesungLabel: 'Lösung',
      loesungen: [
        '**b) um 8.30 Uhr** — „nicht um Viertel nach acht (8.15), **sondern** um **halb neun** (8.30)“.',
      ],
      kommentar: 'Typisch A2: Du hörst **beide** Uhrzeiten. Die richtige Antwort kommt nach „sondern“.',
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Sag Uhrzeiten jeden Tag **laut auf Deutsch**: 7.30 → „halb acht“, 16.45 → „Viertel vor fünf“. ~~Truco: con „halb X“ réstale siempre media hora a X.~~ Dann hast du im Hören keine Panik.',
    },

    { type: 'rule' },

    // ── Abschluss ─────────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Du hörst', 'Das bedeutet'],
      zeilen: [
        ['halb zehn', '9.30 Uhr'],
        ['Viertel nach neun', '9.15 Uhr'],
        ['Viertel vor zehn', '9.45 Uhr'],
        ['vierzehn / vierzig', '14 / 40 — genau hinhören!'],
        ['nicht …, sondern …', 'die zweite Information zählt'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich verstehe Durchsagen am Bahnhof und im Supermarkt.',
        'Ich weiß: halb zehn = 9.30 Uhr.',
        'Ich unterscheide 14/40 und 13/30.',
        'Ich suche gezielt nach Zeit, Ort oder Preis.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Durchsagen sind Monologe — **eine** Person spricht. In der nächsten Lektion hörst du **Gespräche**: zwei Personen planen etwas, kaufen ein, machen Termine. Wichtig dort: Oft **korrigiert** eine Person die andere — „Nein, lieber am Samstag!“',
    },
  ],
}
