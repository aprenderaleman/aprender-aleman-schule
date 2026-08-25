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

    { type: 'rule' },

    // ── Übungen ───────────────────────────────────────────────────
    {
      type: 'prose',
      eyebrow: 'Anwendung — Die Notiz',
      card: true,
      kicker: 'Text 1',
      titel: 'Notiz in der Küche',
      absaetze: [
        '„Hallo Miguel, die Party bei Sara ist **am Samstag**, aber nicht um 19 Uhr — wir kommen erst um **20 Uhr**. Bring bitte Brot und Käse mit. Sara wohnt in der **Gartenstraße 12**. Bis dann! Lena“',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 1 · Richtig oder falsch?',
      frage: 'Lies die Notiz von Lena. Richtig oder falsch?',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Die Party ist am Samstag.',
        'Die Party ist um 19 Uhr.',
        'Miguel soll Brot und Käse mitbringen.',
      ],
      loesungen: [
        '**Richtig.** Im Text steht: „die Party … ist am Samstag“.',
        '**Falsch.** Im Text stehen zwei Zeiten: „nicht um 19 Uhr — wir kommen erst um **20 Uhr**“. ~~La primera hora es la trampa.~~',
        '**Richtig.** Im Text steht: „Bring bitte Brot und Käse mit“.',
      ],
    },
    {
      type: 'prose',
      eyebrow: 'Übung 2 · Die Anzeigen',
      card: true,
      kicker: 'Text 2 und Text 3',
      titel: 'Zwei kleine Anzeigen',
      absaetze: [
        '**A)** „Fahrrad zu verkaufen! Fast neu, nur **80 Euro**. Bitte am Abend anrufen: 030 12 34 56“',
        '**B)** „Deutschkurs für Anfänger. **Dienstag und Donnerstag**, 18-20 Uhr. Der Kurs kostet **35 Euro pro Monat**.“',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 2 · Richtig oder falsch?',
      frage: 'Lies die Anzeigen A und B. Richtig oder falsch?',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Das Fahrrad kostet 80 Euro.',
        'Man soll am Morgen anrufen.',
        'Der Deutschkurs ist am Montag.',
        'Der Kurs kostet 35 Euro pro Monat.',
      ],
      loesungen: [
        '**Richtig.** In Anzeige A steht: „nur 80 Euro“.',
        '**Falsch.** In Anzeige A steht: „Bitte **am Abend** anrufen“.',
        '**Falsch.** In Anzeige B steht: „Dienstag und Donnerstag“, nicht Montag.',
        '**Richtig.** In Anzeige B steht: „35 Euro pro Monat“.',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 3 · Schreib eine Notiz',
      frage: 'Schreibe eine kleine Notiz (3 Sätze): Wann kommst du? Wo bist du? Was soll die Person mitbringen?',
      loesungLabel: 'Muster',
      loesung: '*Hallo Paula, ich komme um 17 Uhr. Ich bin im Café am Markt. Bring bitte das Buch mit!* ~~Vale cualquier hora, lugar y objeto — lo importante: Wann, Wo, Was.~~',
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
