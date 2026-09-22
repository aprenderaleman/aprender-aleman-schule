// Lektion 21 · Lesen: Notizen & Anzeigen
//
// Bloque 2 (Lesen). Sigue el canon fijado en la Lektion 20:
// Lesen ca. 25 min · detalle fino → Modellsatz oficial.

export default {
  spec: ['Bloque 2', 'Prüfungsstrategie', 'Niveau A1', 'Prüfungsrelevanz: Lesen'],
  h1: 'Lesen: Notizen & Anzeigen',
  lead: '~~Notas personales y anuncios pequeños: aprende a encontrar~~ **wer, wann, wo, wie viel** ~~— los cuatro datos que pregunta el examen.~~',

  content: [
    // ── Lernziele ─────────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'Notizen verstehen: **Wer? Wann? Wo?**',
        'kleine Anzeigen lesen: **Was? Wie viel?**',
        'die Zahlen-Falle erkennen und *richtig/falsch* sicher ankreuzen',
      ],
    },

    { type: 'rule' },

    // ── Kernwortschatz ────────────────────────────────────────────
    {
      type: 'wortschatz',
      eyebrow: 'Kernwortschatz — Notizen & Anzeigen',
      items: [
        { wort: 'der Termin', kollokation: 'einen Termin haben', es: 'la cita' },
        { wort: 'um … Uhr', kollokation: 'um 18 Uhr', es: 'a las …' },
        { wort: 'heute / morgen', kollokation: 'heute Abend', es: 'hoy / mañana' },
        { wort: 'verkaufen', kollokation: 'ein Fahrrad verkaufen', es: 'vender' },
        { wort: 'kaufen', kollokation: 'einen Tisch kaufen', es: 'comprar' },
        { wort: 'kosten', kollokation: 'Das kostet 50 Euro.', es: 'costar' },
        { wort: 'der Preis', kollokation: 'ein guter Preis', es: 'el precio' },
        { wort: 'billig / teuer', kollokation: 'sehr billig', es: 'barato / caro' },
        { wort: 'die Telefonnummer', kollokation: 'die Telefonnummer notieren', es: 'el número de teléfono' },
        { wort: 'anrufen', kollokation: 'Bitte anrufen!', es: 'llamar por teléfono' },
      ],
    },

    { type: 'rule' },

    // ── Erklärung ─────────────────────────────────────────────────
    {
      type: 'steps',
      eyebrow: 'Erklärung — So liest du Notizen & Anzeigen',
      steps: [
        {
          badge: 'W-Fragen',
          titel: 'Vier Fragen, vier Antworten',
          text: 'In einer Notiz oder Anzeige suchst du: __Wer? Wann? Wo? Wie viel?__ Die Antwort ist fast immer **ein Name, eine Zeit, ein Ort oder ein Preis**.',
        },
        {
          badge: 'Zahlen zuerst',
          titel: 'Zahlen springen ins Auge',
          text: 'Zeiten (*um 18 Uhr*), Preise (*50 Euro*), Tage (*am Montag*) — __lies die Zahlen zuerst__. ~~Los números se ven sin leer: localízalos primero.~~',
        },
        {
          badge: 'Vorsicht, Falle!',
          titel: 'Oft stehen zwei Zahlen im Text',
          text: '__„Nicht um 9 Uhr, sondern um 10 Uhr.“__ Zwei Zahlen — nur eine ist richtig! **nicht … sondern** ~~(no … sino)~~ ändert alles.',
        },
      ],
    },

    { type: 'rule' },

    // ── Beispiele ─────────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele',
      kicker: 'Mini-Texte',
      titel: 'Typische Sätze aus Notizen & Anzeigen',
      items: [
        { text: '„Ich komme **morgen um 10 Uhr**.“', gl: '— Vengo mañana a las 10. (Wann?)' },
        { text: '„Der Termin ist **nicht** um 9, **sondern** um 10 Uhr.“', gl: '— La cita no es a las 9, sino a las 10. ¡La trampa clásica!' },
        { text: '„Tisch zu verkaufen, **nur 20 Euro**.“', gl: '— Se vende mesa, solo 20 euros. (Wie viel?)' },
        { text: '„Wir sind **im Café am Bahnhof**.“', gl: '— Estamos en el café de la estación. (Wo?)' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'Modell',
      titel: 'Eine Notiz komplett lesen',
      items: [
        { text: 'Notiz: „Hallo Miguel, die Party bei Sara ist **am Samstag**, aber nicht um 19 Uhr — wir kommen erst um **20 Uhr**. Bring bitte Brot und Käse mit. Sara wohnt in der **Gartenstraße 12**. Bis dann! Lena“', gl: '— la nota completa, como en el examen' },
        { text: '*Wann ist die Party?* → am Samstag **um 20 Uhr** — nicht um 19 Uhr!', gl: '— dos horas en el texto: la primera es la trampa' },
        { text: '*Wo ist die Party?* → bei Sara, **in der Gartenstraße 12**', gl: '— el lugar: nombre + calle' },
        { text: '*Was soll Miguel mitbringen?* → **Brot und Käse**', gl: '— la señal es „Bring bitte … mit“' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'Modell',
      titel: 'Zwei Anzeigen, vier Antworten',
      items: [
        { text: 'Anzeige A: „Fahrrad zu verkaufen! Fast neu, nur **80 Euro**. Bitte am Abend anrufen: 030 12 34 56“', gl: '— anuncio de venta: precio + teléfono' },
        { text: 'Anzeige B: „Deutschkurs für Anfänger. **Dienstag und Donnerstag**, 18-20 Uhr. Der Kurs kostet **35 Euro pro Monat**.“', gl: '— anuncio de curso: días + precio' },
        { text: '*Wie viel kostet das Fahrrad?* → **80 Euro** — das ist billig, und das Fahrrad ist fast neu.', gl: '— «nur» delante del precio = es una ganga' },
        { text: '*Wann soll man anrufen?* → **am Abend** — die Telefonnummer ist 030 12 34 56.', gl: '— no por la mañana: el texto dice „am Abend“' },
        { text: 'Aufgabe: „Der Deutschkurs ist am Montag.“ → **falsch** — im Text stehen Dienstag und Donnerstag.', gl: '— comprueba el día exacto antes de marcar' },
      ],
    },

    { type: 'rule' },

    // ── Prüfungsbezug ─────────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Lesen',
      titel: 'Notiz lesen — richtig oder falsch?',
      anweisung: 'Lies den Text. Sind die Sätze richtig oder falsch? Kreuze an.',
      absaetze: [
        '„Hallo Herr Weber, Ihr Termin bei Dr. Kern ist **nicht am Montag**. Die Praxis ist am Montag geschlossen. Bitte kommen Sie **am Mittwoch um 9.30 Uhr**. Bitte bringen Sie Ihre Karte mit. Praxis Dr. Kern“',
      ],
      optionen: [
        'a) Der Termin ist am Montag. — richtig / falsch',
        'b) Herr Weber soll seine Karte mitbringen. — richtig / falsch',
      ],
      loesungLabel: 'Lösung',
      loesungen: [
        'a) **Falsch.** „Montag“ steht im Text — aber mit **nicht**: der Termin ist am Mittwoch. ~~El examen ama esta trampa: la palabra está, la frase es falsa.~~',
        'b) **Richtig.** Im Text steht: „Bitte bringen Sie Ihre Karte mit“.',
      ],
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Ein Wort aus der Aufgabe steht im Text? **Das ist noch keine Antwort!** Lies den ganzen Satz — oft steht davor *nicht* oder *kein*. ~~Que aparezca la palabra no significa que la frase sea „richtig“.~~',
    },

    { type: 'rule' },

    // ── Abschluss ─────────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['W-Frage', 'Signal im Text'],
      zeilen: [
        ['Wann?', 'um 18 Uhr · am Montag · heute, morgen'],
        ['Wo?', 'im Café · in der Gartenstraße 12 · bei Sara'],
        ['Wie viel?', '80 Euro · 35 Euro pro Monat · nur …'],
        ['Wer?', 'Namen: Lena, Herr Weber, Dr. Kern'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich finde in Notizen die Antworten auf Wer, Wann, Wo.',
        'Ich finde in Anzeigen den Preis und die Zeit.',
        'Ich kenne die Zahlen-Falle: nicht um 9, sondern um 10.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Notizen und Anzeigen kannst du jetzt. Die zweite Textgruppe im Lesen sind **Schilder & Aushänge**: *Geöffnet*, *Ziehen*, *Ausgang* — kleine Wörter, große Wirkung. Das trainierst du in der nächsten Lektion.',
    },
  ],
}
