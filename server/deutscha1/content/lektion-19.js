// Lektion 19 · Hören: Durchsagen
//
// Bloque 2 «Prüfungsstrategie». Cierra el módulo Hören (canon de la 17:
// ca. 20 min; Gespräche & Ansagen · Durchsagen; detalle fino → Modellsatz).
// Foco: megafonía (Bahnhof, Supermarkt) — Uhrzeit/Gleis/Preis, la trampa
// «halb zehn» = 9.30 y las decenas invertidas. Cierre con tabla-síntesis
// del módulo. Ausblick → Lektion 20 «Modul Lesen».

export default {
  spec: ['Bloque 2', 'Prüfungsstrategie', 'Niveau A1', 'Prüfungsrelevanz: Hören'],
  h1: 'Hören: Durchsagen',
  lead: '~~Megafonía: estación y supermercado. Tres datos mandan —~~ **Uhrzeit, Gleis, Preis** ~~— y la trampa estrella:~~ „halb zehn“ ~~son las 9:30, no las 10:30.~~',

  content: [
    // ── Lernziele ─────────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'Durchsagen am Bahnhof und im Supermarkt verstehen',
        'Uhrzeiten richtig verstehen: **halb zehn = 9.30 Uhr**',
        'deutsche Zahlen sicher hören: **einundzwanzig = 21** (¡al revés!)',
        'Gleis, Preis und Uhrzeit im Text finden',
      ],
    },

    { type: 'rule' },

    // ── Kernwortschatz ────────────────────────────────────────────
    {
      type: 'wortschatz',
      eyebrow: 'Kernwortschatz — Durchsagen',
      items: [
        { wort: 'die Durchsage', kollokation: 'eine Durchsage hören', es: 'el aviso por megafonía' },
        { wort: 'der Bahnhof', kollokation: 'am Bahnhof', es: 'la estación' },
        { wort: 'der Zug', kollokation: 'der Zug nach Berlin', es: 'el tren' },
        { wort: 'das Gleis', kollokation: 'von Gleis 7', es: 'la vía, el andén' },
        { wort: 'abfahren', kollokation: 'Der Zug fährt ab.', es: 'salir (un tren)' },
        { wort: 'die Verspätung', kollokation: '10 Minuten Verspätung', es: 'el retraso' },
        { wort: 'das Angebot', kollokation: 'heute im Angebot', es: 'la oferta' },
        { wort: 'der Preis', kollokation: 'ein guter Preis', es: 'el precio' },
        { wort: 'geöffnet', kollokation: 'geöffnet bis 20 Uhr', es: 'abierto' },
        { wort: 'die Kasse', kollokation: 'an der Kasse', es: 'la caja' },
      ],
    },

    { type: 'rule' },

    // ── Erklärung ─────────────────────────────────────────────────
    {
      type: 'steps',
      eyebrow: 'Erklärung — Die drei Zahlen-Fallen',
      steps: [
        {
          badge: 'halb = ½ VOR',
          titel: 'halb zehn = 9.30 Uhr',
          text: '__halb zehn__ ist **9.30 Uhr** — eine halbe Stunde **vor** zehn! ~~El alemán dice «media hacia las 10», no «las 9 y media» — la trampa nº 1 del examen.~~ Also: *halb acht* = 7.30, *halb zwölf* = 11.30.',
        },
        {
          badge: 'umgekehrt',
          titel: 'Zahlen: Einer zuerst',
          text: 'Deutsche Zahlen sind __umgekehrt__: **einundzwanzig** = 21 ~~(lit. «uno-y-veinte»)~~, **fünfundvierzig** = 45. ~~Espera la palabra completa antes de escribir.~~',
        },
        {
          badge: 'Struktur',
          titel: 'Durchsagen sind immer gleich gebaut',
          text: '__Bahnhof__: Zug → Ziel → **Gleis** → Zeit / Verspätung. __Supermarkt__: Produkt → **Preis** → Öffnungszeit. Die Aufgabe fragt nur nach **einer** Zahl — jage nur diese. Oft hörst du die offizielle Zeit: *„vierzehn Uhr dreißig“* = 14.30 Uhr ~~(las 2:30 de la tarde)~~.',
        },
      ],
    },

    { type: 'rule' },

    // ── Beispiele ─────────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele — So klingen Durchsagen',
      items: [
        { text: '„Der Zug nach Hamburg fährt von **Gleis 5** ab.“', gl: '— El tren a Hamburgo sale de la vía 5.' },
        { text: '„Der Zug hat circa **20 Minuten** Verspätung.“', gl: '— Lleva unos 20 minutos de retraso.' },
        { text: '„Tomaten heute im Angebot: nur **ein Euro neunzig**.“', gl: '— Tomates en oferta: 1,90 €.' },
        { text: '„Der Bus fährt um **halb neun**.“', gl: '— El bus sale a las 8:30 (¡no a las 9:30!).' },
      ],
    },

    { type: 'rule' },

    // ── Übungen ───────────────────────────────────────────────────
    {
      type: 'uebung',
      eyebrow: 'Anwendung — Übung 1 · Am Bahnhof',
      frage: 'Lies die Durchsage **nur einmal** ~~(en el examen: audio)~~. Dann kreuze an.',
      aufgabe: 'Transkript: „Achtung am Gleis 3: Der Zug nach München, Abfahrt zehn Uhr fünfzehn, hat heute circa zwanzig Minuten Verspätung. Der Zug fährt heute von Gleis 5 ab. Wir bitten um Entschuldigung.“',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Der Zug nach München fährt heute von … a) Gleis 3 · b) Gleis 5',
        'Der Zug hat … Minuten Verspätung. a) 15 · b) 20',
      ],
      loesungen: [
        '**b) Gleis 5.** „Der Zug fährt **heute von Gleis 5** ab.“ ~~También aquí gana la información nueva.~~',
        '**b) 20 Minuten.** „Zehn Uhr fünfzehn“ ist die Abfahrtszeit — zwei Zahlen, nur eine ist die Lösung.',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 2 · Im Supermarkt',
      frage: 'Lies die Durchsage **nur einmal**. Was kostet ein Kilo Äpfel?',
      aufgabe: 'Transkript: „Liebe Kundinnen und Kunden, heute im Angebot: Äpfel, das Kilo nur zwei Euro fünfundvierzig. Und an der Kasse: Schokolade für einen Euro. Wir haben heute bis zwanzig Uhr geöffnet.“',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Ein Kilo Äpfel kostet … a) 2,45 € · b) 2,54 € · c) 1,00 €',
      ],
      loesungen: [
        '**a) 2,45 €.** „Fünfundvierzig“ = 45 ~~(cinco-y-cuarenta, no 54)~~. Der eine Euro ist die Schokolade — falsche Zahl für diese Aufgabe.',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 3 · Uhrzeiten-Training',
      frage: 'Schreibe die Uhrzeit in Zahlen. ~~(Escribe la hora en cifras.)~~',
      loesungLabel: 'Lösung',
      aufgaben: [
        'halb acht',
        'vierzehn Uhr dreißig',
        'einundzwanzig Uhr',
      ],
      loesungen: [
        '**7.30 Uhr** — eine halbe Stunde vor acht.',
        '**14.30 Uhr** ~~(las 2:30 de la tarde)~~.',
        '**21.00 Uhr** — einundzwanzig = 21.',
      ],
    },

    { type: 'rule' },

    // ── Prüfungsbezug ─────────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Hören',
      titel: 'Richtig oder falsch?',
      anweisung: 'Lies die Durchsage einmal ~~(en el examen escuchas el audio)~~. Kreuze an: richtig oder falsch?',
      absaetze: [
        '„Information am Bahnhof: Der Zug nach Köln fährt um halb neun von Gleis 12 ab. Der Zug hat heute keine Verspätung.“',
      ],
      optionen: [
        '1. Der Zug fährt um 9.30 Uhr ab. — richtig / falsch',
        '2. Der Zug fährt von Gleis 12 ab. — richtig / falsch',
      ],
      loesungLabel: 'Lösung',
      loesungen: [
        '1. **Falsch** — „halb neun“ = **8.30** Uhr, nicht 9.30. ~~La trampa «halb» en estado puro.~~',
        '2. **Richtig** — „von Gleis 12“.',
      ],
      kommentar: 'Die Aufgabe übersetzt „halb neun“ in Zahlen — genau da liegt die Falle. Rechne: **halb neun = eine halbe Stunde vor neun = 8.30 Uhr**.',
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'In einer Durchsage hörst du **viele Zahlen** — die Aufgabe fragt nur nach **einer**: **Gleis? Preis? Uhrzeit?** Jage nur diese Zahl. ~~Durchsagen reales, con audio: Modellsatz oficial, gratis.~~',
    },

    { type: 'rule' },

    // ── Abschluss: Synthese des ganzen Moduls ─────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung — Das ganze Modul Hören',
      kopf: ['Hören', 'Das Wichtigste'],
      zeilen: [
        ['Textsorten', 'Gespräche & Ansagen (L18) · Durchsagen (L19)'],
        ['Zeit', 'ca. 20 Minuten ~~(detalles: Modellsatz)~~'],
        ['Strategie', 'zuerst die Aufgaben lesen — dann die eine Information jagen'],
        ['Falle 1', 'die Korrektur: „lieber um acht“ → die zweite Information zählt'],
        ['Falle 2', '**halb zehn = 9.30** · Zahlen umgekehrt: einundzwanzig = 21'],
        ['Regel', 'immer ankreuzen · am Ende alles auf den **Antwortbogen**'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich verstehe Durchsagen am Bahnhof und im Supermarkt.',
        'Ich weiß: halb zehn = 9.30 Uhr, einundzwanzig = 21.',
        'Ich finde Gleis, Preis und Uhrzeit — und ignoriere die anderen Zahlen.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Das Modul **Hören** ist komplett — Überblick, Gespräche, Durchsagen. Weiter geht es mit dem zweiten Prüfungsteil: **Lesen**. In der nächsten Lektion bekommst du den Überblick: Notizen, Anzeigen, Schilder — und die Strategie dafür.',
    },
  ],
}
