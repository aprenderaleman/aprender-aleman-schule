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
      titel: 'Was suchst du — Zeit, Ort oder Preis?',
      absaetze: [
        'Eine Durchsage ist kurz — die Information kommt **schnell**. Lies die Aufgabe zuerst und frag dich: Suche ich eine **Uhrzeit**, einen **Ort** oder einen **Preis**? Dann warte genau auf diese Information. ~~(escucha selectiva: sabes qué dato viene, solo tienes que cazarlo)~~',
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

    // ── Mehr Beispiele ────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Mehr Beispiele',
      titel: 'Uhrzeiten hören',
      items: [
        { text: '„Der Bus fährt um **halb sieben**.“', gl: '— 6.30 Uhr, ¡no las 7.30!' },
        { text: '„Der Kurs beginnt um **Viertel nach sechs**.“', gl: '— 18.15: las seis y cuarto' },
        { text: '„Die Praxis öffnet um **Viertel vor neun**.“', gl: '— 8.45: las nueve menos cuarto' },
        { text: '„Abfahrt: **sechzehn Uhr fünfzehn**.“', gl: '— 16.15, la forma oficial de las estaciones' },
        { text: '„Wir schließen um **halb neun**.“', gl: '— 20.30 Uhr' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'Zahlen & Orte',
      titel: 'Durchsagen verstehen',
      items: [
        { text: '„Der Zug nach Dresden fährt heute von **Gleis 13**.“', gl: '— dreizehn = 13, no 30' },
        { text: '„Der Zug hat **zwanzig Minuten Verspätung**.“', gl: '— 20 minutos de retraso' },
        { text: '„Heute im **Angebot**: Käse für **drei Euro sechzig**.“', gl: '— 3,60 € — sechzig = 60' },
        { text: '„Die Bäckerei ist im **Erdgeschoss**, am **Ausgang** West.“', gl: '— planta baja, salida oeste' },
        { text: '„Wir haben heute bis **achtzehn Uhr geöffnet**.“', gl: '— abierto hasta las 18:00' },
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
