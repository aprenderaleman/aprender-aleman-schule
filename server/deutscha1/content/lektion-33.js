// Lektion 33 · Wohnung & Möbel
//
// Bloque 3 (Themen & Wortschatz) — la casa mínima: habitaciones, muebles
// básicos, «Meine Wohnung hat drei Zimmer» y la dirección (Formular).

export default {
  spec: ['Bloque 3', 'Themenfelder & Wortschatz', 'Niveau A1', 'Prüfungsrelevanz: Schreiben · Sprechen'],
  h1: 'Wohnung & Möbel',
  lead: '~~Tu casa en alemán:~~ **„Meine Wohnung hat drei Zimmer.“** ~~Las habitaciones, los muebles básicos y tu dirección — la pieza que siempre pide el Formular del examen.~~',

  content: [
    // ── Lernziele ─────────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'die Zimmer benennen: Küche, Bad, Schlafzimmer, Wohnzimmer',
        'Möbel benennen: Tisch, Stuhl, Bett, Schrank',
        'über die Wohnung sprechen: *Meine Wohnung hat drei Zimmer.*',
        'die Adresse sagen und schreiben — für das Formular',
      ],
    },

    { type: 'rule' },

    // ── Kernwortschatz ────────────────────────────────────────────
    {
      type: 'wortschatz',
      eyebrow: 'Kernwortschatz — Wohnung & Möbel',
      items: [
        { wort: 'die Wohnung', kollokation: 'eine kleine Wohnung', es: 'el piso, la vivienda' },
        { wort: 'das Haus', kollokation: 'ein großes Haus', es: 'la casa' },
        { wort: 'das Zimmer', kollokation: 'drei Zimmer haben', es: 'la habitación, el cuarto' },
        { wort: 'die Küche', kollokation: 'in der Küche kochen', es: 'la cocina' },
        { wort: 'das Bad', kollokation: 'das Bad ist klein', es: 'el (cuarto de) baño' },
        { wort: 'das Schlafzimmer', kollokation: 'im Schlafzimmer schlafen', es: 'el dormitorio' },
        { wort: 'das Wohnzimmer', kollokation: 'im Wohnzimmer fernsehen', es: 'el salón' },
        { wort: 'der Tisch', kollokation: 'am Tisch essen', es: 'la mesa' },
        { wort: 'der Stuhl', kollokation: 'der Stuhl ist neu', es: 'la silla' },
        { wort: 'das Bett', kollokation: 'im Bett lesen', es: 'la cama' },
        { wort: 'der Schrank', kollokation: 'im Schrank', es: 'el armario' },
        { wort: 'die Adresse', kollokation: 'die Adresse schreiben', es: 'la dirección' },
      ],
      hinweis: 'Die Adresse = **die Straße** ~~(la calle)~~ + die Hausnummer + die Stadt: *Gartenstraße 12, Berlin*. ~~Ojo: en alemán el número va DESPUÉS del nombre de la calle.~~',
    },

    { type: 'rule' },

    // ── Erklärung ─────────────────────────────────────────────────
    {
      type: 'prose',
      eyebrow: 'Erklärung',
      card: true,
      kicker: 'Situation 1',
      titel: 'Meine Wohnung',
      absaetze: [
        'Du beschreibst deine Wohnung mit __haben__ und __sein__: **Meine Wohnung hat drei Zimmer.** · **Die Wohnung ist klein, aber schön.** ~~(mi piso tiene tres habitaciones / el piso es pequeño pero bonito)~~',
      ],
    },
    {
      type: 'prose',
      card: true,
      kicker: 'Situation 2',
      titel: 'Wo? — in der Küche, im Bad',
      absaetze: [
        'Auf die Frage __Wo?__ ~~(¿dónde?)~~ antwortest du mit **in**: Ich koche **in der Küche**. · Ich schlafe **im Schlafzimmer**. ~~«im» = «in dem» — con palabras en «der» y «das»: im Bad (das), im Supermarkt (der); con «die» se dice «in der»: in der Küche.~~',
      ],
    },
    {
      type: 'prose',
      card: true,
      kicker: 'Situation 3',
      titel: 'Die Adresse',
      absaetze: [
        'Ich wohne **in der Gartenstraße 12**. · Meine Adresse **ist** Gartenstraße 12, Berlin. ~~En el examen escribes la dirección tal cual: calle + número, luego la ciudad — sin «calle de».~~',
      ],
    },

    { type: 'rule' },

    // ── Beispiele ─────────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele',
      items: [
        { text: 'Meine Wohnung **hat** drei Zimmer.', gl: '— Mi piso tiene tres habitaciones.' },
        { text: 'Die Küche **ist** klein, aber schön.', gl: '— La cocina es pequeña, pero bonita.' },
        { text: 'Das Bett ist **im** Schlafzimmer.', gl: '— La cama está en el dormitorio.' },
        { text: 'Der Tisch und die Stühle sind neu.', gl: '— La mesa y las sillas son nuevas.' },
        { text: 'Ich wohne **in der** Hauptstraße 5.', gl: '— Vivo en la Hauptstraße 5.' },
        { text: 'Wie ist deine **Adresse**?', gl: '— ¿Cuál es tu dirección?' },
      ],
    },
    {
      type: 'redemittel',
      eyebrow: 'Redemittel',
      gruppen: [
        {
          fn: 'Über die Wohnung sprechen',
          saetze: [
            { satz: 'Ich wohne in einer Wohnung / in einem Haus.', gloss: 'Vivo en un piso / en una casa.' },
            { satz: 'Meine Wohnung hat … Zimmer.', gloss: 'Mi piso tiene … habitaciones.' },
            { satz: 'Die Wohnung ist groß / klein / schön.', gloss: 'El piso es grande / pequeño / bonito.' },
          ],
        },
        {
          fn: 'Die Adresse',
          saetze: [
            { satz: 'Meine Adresse ist Gartenstraße 12, Berlin.', gloss: 'Mi dirección es …' },
            { satz: 'Ich wohne in Berlin.', gloss: 'Vivo en Berlín.' },
          ],
        },
      ],
    },

    { type: 'rule' },

    // ── Übungen ───────────────────────────────────────────────────
    {
      type: 'uebung',
      eyebrow: 'Anwendung — Übung 1 · der, die oder das?',
      frage: 'Ergänze den Artikel. ~~(Completa el artículo.)~~',
      loesungLabel: 'Lösung',
      aufgaben: [
        '___ Küche ~~(la cocina)~~',
        '___ Bett ~~(la cama)~~',
        '___ Tisch ~~(la mesa)~~',
        '___ Wohnung ~~(el piso)~~',
      ],
      loesungen: [
        '**die** Küche',
        '**das** Bett',
        '**der** Tisch',
        '**die** Wohnung',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 2 · Sätze ergänzen',
      frage: 'Ergänze das Wort. ~~(Completa la palabra.)~~',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Meine Wohnung ___ drei Zimmer. (haben)',
        'Ich schlafe im ___. ~~(dormitorio)~~',
        'Der Schrank ist ___ Schlafzimmer. (im / am)',
        'Wie ist deine ___? ~~(dirección)~~',
      ],
      loesungen: [
        'Meine Wohnung **hat** drei Zimmer.',
        'Ich schlafe im **Schlafzimmer**.',
        'Der Schrank ist **im** Schlafzimmer.',
        'Wie ist deine **Adresse**?',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 3 · Deine Wohnung',
      frage: 'Beschreibe deine Wohnung: Zimmer, ein Möbelstück, deine Stadt (3-4 Sätze, ca. 25 Wörter).',
      loesungLabel: 'Mögliche Lösung',
      loesung: '*Ich wohne in einer kleinen Wohnung in Valencia. Meine Wohnung hat zwei Zimmer, eine Küche und ein Bad. Das Wohnzimmer ist schön. Das Bett ist neu.* ~~También vale con «Haus», con otros muebles o con tu dirección real.~~',
    },

    { type: 'rule' },

    // ── Prüfungsbezug ─────────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Schreiben · Teil 1',
      titel: 'Formular ausfüllen',
      anweisung: 'Im Schreiben Teil 1 füllst du ein Formular mit fehlenden Daten aus. Lies den Text und ergänze das Formular:',
      absaetze: [
        '„Pedro Santos kommt aus Sevilla. Er wohnt jetzt in Deutschland: in der Bergstraße 7 in Köln.“',
        'Familienname: {1}\nVorname: {2}\nStraße, Hausnummer: {3}\nStadt: {4}',
      ],
      loesungLabel: 'Lösung',
      loesungen: [
        '{1} **Santos**',
        '{2} **Pedro**',
        '{3} **Bergstraße 7**',
        '{4} **Köln**',
      ],
      kommentar: 'Familienname = ~~apellido~~ · Vorname = ~~nombre~~ · Wohnort oder Stadt = ~~ciudad~~. Das genaue Formular zeigt dir der offizielle Modellsatz.',
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Das Formular fragt fast immer nach der **Adresse**. Lerne die Formular-Wörter auswendig: *Name, Vorname, Straße, Hausnummer, Wohnort, Land*. ~~Son siempre las mismas — reconocerlas ya es media tarea.~~',
    },

    { type: 'rule' },

    // ── Abschluss ─────────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Thema', 'So sagst du es'],
      zeilen: [
        ['die Zimmer', 'die Küche · das Bad · das Schlafzimmer · das Wohnzimmer'],
        ['die Möbel', 'der Tisch · der Stuhl · das Bett · der Schrank'],
        ['die Wohnung', 'Meine Wohnung **hat** drei Zimmer.'],
        ['die Adresse', 'Gartenstraße 12, Berlin ~~(calle + número, luego ciudad)~~'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich kenne die Zimmer: Küche, Bad, Schlafzimmer, Wohnzimmer.',
        'Ich kenne die Möbel: Tisch, Stuhl, Bett, Schrank.',
        'Ich kann meine Wohnung beschreiben: „Meine Wohnung hat … Zimmer.“',
        'Ich kann meine Adresse sagen und in ein Formular schreiben.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Du hast jetzt eine Wohnung — und was machst du dort den ganzen Tag? In der nächsten Lektion beschreibst du deinen **Tagesablauf** mit den trennbaren Verben: *Um 7 Uhr stehe ich auf.* Und deine **Hobbys** mit *gern*.',
    },
  ],
}
