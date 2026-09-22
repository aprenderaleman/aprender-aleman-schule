// Lektion 22 · Lesen: Schilder & Aushänge
//
// Bloque 2 (Lesen). Cierra el módulo con la tabla-síntesis.
// Sigue el canon fijado en la Lektion 20: Lesen ca. 25 min ·
// detalle fino → Modellsatz oficial.

export default {
  spec: ['Bloque 2', 'Prüfungsstrategie', 'Niveau A1', 'Prüfungsrelevanz: Lesen'],
  h1: 'Lesen: Schilder & Aushänge',
  lead: '~~Letreros y avisos de la vida diaria:~~ **Geöffnet, Ziehen, Ausgang** ~~— pocas palabras, un mensaje claro. Con esto cierras el módulo Lesen.~~',

  content: [
    // ── Lernziele ─────────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'die wichtigsten Schilder verstehen (*Geöffnet*, *Ziehen*, *Ausgang*, *Kasse* …)',
        'die Kernbotschaft finden: **Was soll ich tun? Was darf ich nicht?**',
        'das ganze Modul Lesen im Überblick haben',
      ],
    },

    { type: 'rule' },

    // ── Kernwortschatz ────────────────────────────────────────────
    {
      type: 'wortschatz',
      eyebrow: 'Kernwortschatz — Schilder & Aushänge',
      items: [
        { wort: 'geöffnet', kollokation: 'Mo-Fr geöffnet', es: 'abierto' },
        { wort: 'geschlossen', kollokation: 'heute geschlossen', es: 'cerrado' },
        { wort: 'ziehen', kollokation: 'Ziehen! (an der Tür)', es: 'tirar (de la puerta)' },
        { wort: 'drücken', kollokation: 'Drücken! (an der Tür)', es: 'empujar' },
        { wort: 'der Eingang', kollokation: 'Eingang B benutzen', es: 'la entrada' },
        { wort: 'der Ausgang', kollokation: 'zum Ausgang gehen', es: 'la salida' },
        { wort: 'die Kasse', kollokation: 'an der Kasse zahlen', es: 'la caja' },
        { wort: 'verboten', kollokation: 'Rauchen verboten', es: 'prohibido' },
        { wort: 'kein / keine', kollokation: 'kein Eingang', es: 'ningún, no hay' },
        { wort: 'die Öffnungszeiten', kollokation: 'die Öffnungszeiten lesen', es: 'el horario de apertura' },
      ],
    },

    { type: 'rule' },

    // ── Erklärung ─────────────────────────────────────────────────
    {
      type: 'steps',
      eyebrow: 'Erklärung — So liest du Schilder',
      steps: [
        {
          badge: 'überall',
          titel: 'Wenig Wörter, klare Botschaft',
          text: 'Schilder stehen __an Türen, im Supermarkt, am Bahnhof__. Sie haben oft nur 1-5 Wörter — aber **eine klare Botschaft**. ~~No hay frases completas: solo el mensaje esencial.~~',
        },
        {
          badge: 'Kernbotschaft',
          titel: 'Frag dich: Was soll ich tun?',
          text: '__Ziehen__ = an der Tür ziehen ~~(tira)~~. __Drücken__ = die Tür drücken ~~(empuja)~~. __Kasse 2 geschlossen__ = geh zu einer anderen Kasse. Die Frage ist immer: **Was mache ich jetzt?**',
        },
        {
          badge: 'kein / verboten',
          titel: 'Kleine Wörter ändern alles',
          text: '__kein Eingang__ = hier NICHT hineingehen. __Rauchen verboten__ = hier NICHT rauchen. ~~Igual que en la Lektion 21: la palabra clave puede venir negada — „Eingang“ con „kein“ delante es lo contrario.~~',
        },
      ],
    },

    { type: 'rule' },

    // ── Beispiele ─────────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele',
      kicker: 'Schilder',
      titel: 'Fünf Schilder aus dem Alltag',
      items: [
        { text: '„**Geöffnet**: Mo-Fr 9-18 Uhr, Sa 9-13 Uhr“', gl: '— Abierto de lunes a viernes 9-18, sábado 9-13.' },
        { text: '„**Ziehen**“ (an der Tür)', gl: '— Tira de la puerta.' },
        { text: '„Kasse 2 **geschlossen** — bitte Kasse 1 benutzen“', gl: '— Caja 2 cerrada, usa la caja 1.' },
        { text: '„**Kein Eingang** — bitte Eingang B benutzen“', gl: '— Por aquí no se entra: usa la entrada B.' },
        { text: '„Rauchen **verboten**“', gl: '— Prohibido fumar.' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'Botschaft',
      titel: 'Das Schild und die Antwort',
      items: [
        { text: '„Drücken“ → Die Tür **drücken**, nicht ziehen.', gl: '— empuja, no tires' },
        { text: '„Heute geschlossen“ → Das Geschäft ist heute **zu**. Komm an einem anderen Tag.', gl: '— hoy está cerrado' },
        { text: '„Ausgang →“ → Hier geht es **nach draußen**.', gl: '— la salida está en esa dirección' },
        { text: '„Eintritt frei“ → Der Eintritt kostet **nichts**.', gl: '— „frei“ aquí = gratis, no „libre“' },
        { text: '„Fahrräder verboten“ → Hier fährt man **kein** Fahrrad.', gl: '— prohibido el paso a bicicletas' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'Modell',
      titel: 'Aushänge mit den Öffnungszeiten',
      items: [
        { text: '„Supermarkt Mayer — Sonntag geschlossen“ → Am Sonntag kauft man hier **nicht** ein.', gl: '— el domingo no se compra: geschlossen' },
        { text: '„Kein Eingang — bitte Eingang am Parkplatz benutzen“ → Der Eingang ist **am Parkplatz**.', gl: '— «Eingang» aparece dos veces: solo uno vale' },
        { text: '„Kasse 3 geöffnet“ → An Kasse 3 kann man **bezahlen**.', gl: '— esa caja está abierta' },
        { text: '„Museum: Heute geschlossen — Mittwoch bis Sonntag geöffnet“ → Heute ist Montag. Ich komme **am Mittwoch** wieder.', gl: '— lee el horario y decide qué haces' },
      ],
    },

    { type: 'rule' },

    // ── Prüfungsbezug ─────────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Lesen',
      titel: 'Aushang lesen — richtig oder falsch?',
      anweisung: 'Lies den Aushang im Haus. Sind die Sätze richtig oder falsch? Kreuze an.',
      absaetze: [
        '„**Information für alle Mieter:** Am Montag gibt es von 8 bis 12 Uhr **kein Wasser**. Ab 12 Uhr ist alles wieder normal. Bei Fragen: Hausmeister Krause, Tel. 030 99 88 77“',
      ],
      optionen: [
        'a) Am Montag gibt es den ganzen Tag kein Wasser. — richtig / falsch',
        'b) Bei Fragen kann man Herrn Krause anrufen. — richtig / falsch',
      ],
      loesungLabel: 'Lösung',
      loesungen: [
        'a) **Falsch.** Nur von 8 bis 12 Uhr — „ab 12 Uhr ist alles wieder normal“. ~~„todo el día“ es más que lo que dice el texto → falsch.~~',
        'b) **Richtig.** Im Text steht: „Bei Fragen: Hausmeister Krause“ mit Telefonnummer.',
      ],
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Lerne die Schilder-Wörter **als Paare**: *geöffnet ↔ geschlossen*, *Ziehen ↔ Drücken*, *Eingang ↔ Ausgang*. ~~En el examen la respuesta falsa suele ser exactamente la pareja contraria.~~ Übe das Format mit dem offiziellen **Modellsatz**.',
    },

    { type: 'rule' },

    // ── Abschluss ─────────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung — Das Modul Lesen komplett',
      kopf: ['Lesen', 'Das Wichtigste'],
      zeilen: [
        ['Zeit', 'ca. **25 Minuten** ~~(detalles exactos: Modellsatz oficial)~~'],
        ['Texte', 'Notizen & Anzeigen · Schilder & Aushänge (20-60 Wörter)'],
        ['Strategie', 'die Information suchen: **Wer? Wann? Wo? Wie viel?**'],
        ['Fallen', 'zwei Zahlen im Text · *nicht / kein / verboten* · Gegensatz-Paare'],
        ['Antwort', '**richtig/falsch** ankreuzen → auf den **Antwortbogen** übertragen'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich verstehe die wichtigsten Schilder: geöffnet, geschlossen, Ziehen, Drücken, Ausgang.',
        'Ich sehe kleine Wörter wie kein und verboten — sie ändern die Botschaft.',
        'Ich habe das ganze Modul Lesen im Überblick: Texte, Strategie, Antwortbogen.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Das Modul Lesen ist geschafft! Jetzt drehst du die Rolle um: Du liest nicht mehr — **du schreibst selbst**. In der nächsten Lektion beginnt das **Modul Schreiben**: ein Formular ausfüllen und einen kurzen Text schreiben.',
    },
  ],
}
