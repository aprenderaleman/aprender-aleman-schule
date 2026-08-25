// Lektion 23 · Modul Schreiben — Überblick
//
// Bloque 2 (Prüfungstraining) · Öffnet den Schreiben-Block: die 2 Teile
// des Kanons, was bewertet wird, und das Lexikon der deutschen Formulare.

export default {
  spec: ['Bloque 2', 'Prüfungsstrategie', 'Niveau A1', 'Prüfungsrelevanz: Schreiben'],
  h1: 'Modul Schreiben — Überblick',
  lead: '~~La parte escrita del examen dura solo~~ **ca. 20 Minuten** ~~y tiene 2 tareas: completar un formulario y escribir un texto de ~30 palabras. Aquí ves el mapa completo.~~',

  content: [
    // ── Lernziele ─────────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'die 2 Teile vom Schreiben kennen: Formular + kurzer Text',
        'wissen, was zählt: ==Versteht man den Text? Sind alle Daten da?==',
        'die Wörter der deutschen Formulare verstehen (Vorname, PLZ, Unterschrift …)',
      ],
    },

    { type: 'rule' },

    // ── Kernwortschatz ────────────────────────────────────────────
    {
      type: 'wortschatz',
      eyebrow: 'Kernwortschatz — das Formular',
      items: [
        { wort: 'das Formular', kollokation: 'ein Formular ausfüllen', es: 'el formulario' },
        { wort: 'der Vorname', kollokation: 'Vorname: Ana', es: 'el nombre (de pila)' },
        { wort: 'der Familienname', kollokation: 'Familienname: López', es: 'el apellido' },
        { wort: 'der Wohnort', kollokation: 'Wohnort: Sevilla', es: 'la ciudad donde vives' },
        { wort: 'die Straße', kollokation: 'Straße: Gartenstraße 5', es: 'la calle' },
        { wort: 'die Postleitzahl (PLZ)', kollokation: 'PLZ: 10115', es: 'el código postal' },
        { wort: 'das Geburtsdatum', kollokation: 'Geburtsdatum: 03.05.1998', es: 'la fecha de nacimiento' },
        { wort: 'das Land', kollokation: 'Land: Spanien', es: 'el país' },
        { wort: 'die Unterschrift', kollokation: 'Ihre Unterschrift, bitte!', es: 'la firma' },
        { wort: 'ausfüllen', kollokation: 'bitte alles ausfüllen', es: 'rellenar' },
        { wort: 'ankreuzen', kollokation: 'bitte ankreuzen: ja / nein', es: 'marcar con una cruz' },
      ],
      hinweis: '~~Ojo, falso amigo:~~ __der Vorname__ ~~es el nombre de pila;~~ __der Name / Familienname__ ~~suele ser el apellido. ¡No los confundas en el examen!~~',
    },

    { type: 'rule' },

    // ── Erklärung ─────────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Erklärung — So ist das Schreiben',
      kopf: ['Teil', 'Aufgabe', '~~qué haces~~'],
      zeilen: [
        ['Teil 1', 'Formular ausfüllen', '~~completar los datos que faltan en un formulario~~'],
        ['Teil 2', 'kurzer persönlicher Text (~30 Wörter)', '~~escribir un e-mail o una postal breve~~'],
        ['Zeit', 'ca. 20 Minuten', '~~para las dos tareas juntas~~'],
      ],
    },
    {
      type: 'prose',
      card: true,
      titel: 'Was zählt? Zwei Fragen.',
      absaetze: [
        'Die Prüfer fragen nur: **1. Versteht man den Text?** und **2. Sind alle Daten und Punkte da?** ~~(¿Se entiende? ¿Está toda la información pedida?)~~',
        'Kleine Fehler sind okay. Ein Formular ohne Daten oder ein Text ohne die Punkte der Aufgabe — das ist das Problem. ==Komplett ist wichtiger als perfekt.== Das genaue Punkteschema siehst du im offiziellen Modellsatz.',
      ],
    },
    {
      type: 'steps',
      steps: [
        {
          badge: 'Teil 1',
          titel: 'Formular = Wörter kennen',
          text: 'In Teil 1 liest du eine kurze Situation und ergänzt die Daten, die im Formular fehlen. __Wer die Formular-Wörter kennt, hat die halbe Aufgabe.__ ~~(el léxico de arriba ES media tarea)~~',
        },
        {
          badge: 'Teil 2',
          titel: 'Text = 3 Punkte',
          text: 'In Teil 2 schreibst du ca. **30 Wörter** an eine Person: du informierst, fragst oder entschuldigst dich — immer mit den Punkten aus der Aufgabe.',
        },
      ],
    },

    { type: 'rule' },

    // ── Beispiele ─────────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele — Ein Formular auf Deutsch',
      items: [
        { text: 'Vorname: **Ana** · Familienname: **López**', gl: '— nombre: Ana · apellido: López' },
        { text: 'Straße: **Gartenstraße 5** · Wohnort: **Berlin**', gl: '— calle y número · ciudad' },
        { text: 'PLZ: **10115**', gl: '— código postal: en Alemania siempre 5 cifras' },
        { text: 'Geburtsdatum: **03.05.1998**', gl: '— fecha: día.mes.año, con puntos' },
        { text: 'Unterschrift: *Ana López*', gl: '— la firma, escrita a mano' },
      ],
    },

    { type: 'rule' },

    // ── Übungen ───────────────────────────────────────────────────
    {
      type: 'uebung',
      eyebrow: 'Anwendung — Übung 1 · Welches Wort passt?',
      frage: 'Vorname, PLZ, Wohnort oder Land? ~~(¿Qué casilla es?)~~',
      loesungLabel: 'Lösung',
      aufgaben: [
        '___ : 28001',
        '___ : Madrid',
        '___ : Pablo',
        '___ : Spanien',
      ],
      loesungen: [
        '**PLZ**: 28001',
        '**Wohnort**: Madrid',
        '**Vorname**: Pablo',
        '**Land**: Spanien',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 2 · Richtig oder falsch?',
      frage: 'Was stimmt über das Schreiben? ~~(¿Verdadero o falso?)~~',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Das Schreiben hat 2 Teile.',
        'Du hast ca. 60 Minuten Zeit.',
        'In Teil 2 schreibst du ca. 100 Wörter.',
      ],
      loesungen: [
        '**Richtig** — Teil 1 Formular, Teil 2 kurzer Text.',
        '**Falsch** — du hast ca. **20 Minuten**.',
        '**Falsch** — nur ca. **30 Wörter**.',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 3 · Dein Formular',
      frage: 'Fülle aus mit deinen Daten: Vorname, Familienname, Wohnort, Land.',
      loesungLabel: 'Muster',
      loesung: '*Vorname: María · Familienname: García · Wohnort: Lima · Land: Peru*',
    },

    { type: 'rule' },

    // ── Prüfungsbezug ─────────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Schreiben · Teil 1',
      titel: 'Mini-Formular',
      anweisung: 'Lies den Text und ergänze das Formular. ~~(Lee el texto y completa el formulario — todos los datos están en el texto.)~~',
      absaetze: [
        'Luis Pérez kommt aus Spanien und möchte einen Deutschkurs machen. Er ist am 21.03.2000 geboren. Er wohnt in der Avenida del Puerto 8 in 46021 Valencia.',
        'Sprachschule Hansa — Anmeldung\nFamilienname: Pérez\nVorname: {1}\nWohnort: {2}\nPLZ: {3}\nGeburtsdatum: {4}',
      ],
      loesungLabel: 'Lösung',
      loesungen: [
        '{1} Vorname: **Luis**',
        '{2} Wohnort: **Valencia**',
        '{3} PLZ: **46021**',
        '{4} Geburtsdatum: **21.03.2000**',
      ],
      kommentar: 'Alle vier Antworten stehen im Text — du musst **nichts erfinden**. ~~En el examen real faltan varias casillas; el formato exacto lo ves en el Modellsatz oficial.~~',
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Lerne die Formular-Wörter **auswendig**: Vorname, Familienname, Wohnort, PLZ, Geburtsdatum, Unterschrift. ~~Este léxico es literalmente media tarea del Teil 1 — y lo vas a rellenar toda tu vida en Alemania.~~',
    },

    { type: 'rule' },

    // ── Abschluss ─────────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Punkt', 'Merken'],
      zeilen: [
        ['Teile', 'Teil 1 Formular · Teil 2 kurzer Text (~30 Wörter)'],
        ['Zeit', 'ca. 20 Minuten für beide Teile'],
        ['Bewertung', 'Versteht man den Text? Sind alle Daten/Punkte da?'],
        ['Lexikon', 'Vorname · Familienname · Wohnort · PLZ · Geburtsdatum · Unterschrift'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich kenne die 2 Teile vom Schreiben und die Zeit (ca. 20 Minuten).',
        'Ich weiß, was bewertet wird: verständlich + komplett.',
        'Ich verstehe die Wörter eines deutschen Formulars.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Jetzt kennst du die Landkarte. In der nächsten Lektion trainierst du **Teil 1 komplett**: eine Situation lesen, die Daten finden und das Formular richtig ausfüllen — mit Datum, PLZ und ohne Erfindungen.',
    },
  ],
}
