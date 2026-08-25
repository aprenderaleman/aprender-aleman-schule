// Lektion 24 · Schreiben Teil 1 — Formular ausfüllen
//
// Bloque 2 (Prüfungstraining) · Die Technik: Situation lesen, Daten finden,
// Kästchen richtig füllen — Formate (Datum, PLZ) und die Regel „nicht erfinden“.

export default {
  spec: ['Bloque 2', 'Prüfungsstrategie', 'Niveau A1', 'Prüfungsrelevanz: Schreiben · Teil 1'],
  h1: 'Schreiben Teil 1 — Formular ausfüllen',
  lead: '~~Lees una situación breve y completas las casillas que faltan de un formulario. Cada dato está en el texto — tu trabajo es~~ **finden, nicht erfinden** ~~(encontrar, no inventar).~~',

  content: [
    // ── Lernziele ─────────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'die Daten für das Formular im Text finden',
        'Datum und PLZ im deutschen Format schreiben (TT.MM.JJJJ)',
        'die goldene Regel anwenden: ==nichts erfinden, kein Feld leer lassen==',
      ],
    },

    { type: 'rule' },

    // ── Kernwortschatz ────────────────────────────────────────────
    {
      type: 'wortschatz',
      eyebrow: 'Kernwortschatz — Anmeldung & Reservierung',
      items: [
        { wort: 'die Anmeldung', kollokation: 'die Anmeldung für den Kurs', es: 'la inscripción' },
        { wort: 'reservieren', kollokation: 'ein Zimmer reservieren', es: 'reservar' },
        { wort: 'das Einzelzimmer', kollokation: 'ein Einzelzimmer, bitte', es: 'la habitación individual' },
        { wort: 'das Doppelzimmer', kollokation: 'ein Doppelzimmer mit Bad', es: 'la habitación doble' },
        { wort: 'die Ankunft', kollokation: 'Ankunft: 12.10.', es: 'la llegada' },
        { wort: 'die Abreise', kollokation: 'Abreise: 15.10.', es: 'la salida' },
        { wort: 'geboren', kollokation: 'geboren am 03.05.1998', es: 'nacido/a' },
        { wort: 'die Hausnummer', kollokation: 'Straße und Hausnummer', es: 'el número (de la calle)' },
        { wort: 'die Telefonnummer', kollokation: 'Telefonnummer: 0176 …', es: 'el número de teléfono' },
        { wort: 'die E-Mail-Adresse', kollokation: 'E-Mail-Adresse: ana@…', es: 'la dirección de e-mail' },
        { wort: 'der Urlaub', kollokation: 'Urlaub in Hamburg machen', es: 'las vacaciones' },
      ],
    },

    { type: 'rule' },

    // ── Erklärung ─────────────────────────────────────────────────
    {
      type: 'steps',
      eyebrow: 'Erklärung — Die Technik in 4 Schritten',
      steps: [
        {
          titel: 'Lies die Situation',
          text: 'Ein kurzer Text: Wer? Woher? Was möchte die Person? ~~(Casi siempre ayudas a otra persona — un amigo, una amiga — a rellenar su formulario.)~~',
        },
        {
          titel: 'Schau auf die leeren Felder',
          text: 'Was fehlt? __Wohnort? Geburtsdatum? Zimmer?__ Die leeren Felder sind deine Fragen an den Text.',
        },
        {
          titel: 'Such die Daten im Text',
          text: 'Jede Antwort **steht im Text**. Steht sie nicht da, liest du noch einmal — ==du erfindest nie etwas==. ~~(Si inventas un dato, la casilla cuenta como error.)~~',
        },
        {
          titel: 'Schreib genau und komplett',
          text: 'Richtiges Format, große Anfangsbuchstaben bei Namen und __Substantiven__ ~~(sustantivos — ¡en alemán van con mayúscula!)~~, kein Feld bleibt leer.',
        },
      ],
    },
    {
      type: 'tabelle',
      eyebrow: 'Erklärung — Die Formate',
      kopf: ['Feld', 'So schreibst du es', '~~ojo~~'],
      zeilen: [
        ['Datum', '**12.10.2026** (Tag.Monat.Jahr)', '~~día.mes.año con puntos — no 10/12~~'],
        ['PLZ', '**20095** (5 Zahlen)', '~~el código postal alemán tiene 5 cifras~~'],
        ['Straße', '**Calle Mayor 12** (Straße + Hausnummer)', '~~calle primero, número después~~'],
        ['Zimmer', '**Einzelzimmer** ~~(con mayúscula: es sustantivo)~~', '~~marca o copia la palabra del texto~~'],
      ],
    },

    { type: 'rule' },

    // ── Beispiele ─────────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele — Vom Text ins Formular',
      items: [
        { text: '„Sie wohnt in Sevilla.“ → Wohnort: **Sevilla**', gl: '— vive en Sevilla → casilla «Wohnort»' },
        { text: '„Sie ist am 03.05.1998 geboren.“ → Geburtsdatum: **03.05.1998**', gl: '— nació el 3.5.1998' },
        { text: '„Calle Mayor 12“ → Straße, Hausnummer: **Calle Mayor 12**', gl: '— calle y número, juntos' },
        { text: '„… in 41001 Sevilla“ → PLZ: **41001**', gl: '— el número antes de la ciudad es el código postal' },
        { text: '„Sie möchte ein Einzelzimmer.“ → Zimmer: **Einzelzimmer**', gl: '— quiere una individual' },
      ],
    },

    { type: 'rule' },

    // ── Übungen ───────────────────────────────────────────────────
    {
      type: 'uebung',
      eyebrow: 'Anwendung — Übung 1 · Welches Feld?',
      frage: 'In welches Feld passt die Information? ~~(¿A qué casilla va?)~~',
      loesungLabel: 'Lösung',
      aufgaben: [
        '„Ich komme aus Portugal.“ → Feld: ___',
        '„Meine Nummer ist 0176 5533218.“ → Feld: ___',
        '„Ich bin am 15.08.1995 geboren.“ → Feld: ___',
      ],
      loesungen: [
        'Feld: **Land** (Portugal)',
        'Feld: **Telefonnummer** (0176 5533218)',
        'Feld: **Geburtsdatum** (15.08.1995)',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 2 · Was ist falsch?',
      frage: 'Korrigiere das Format. ~~(Corrige el formato.)~~',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Geburtsdatum: 3/5/1998',
        'PLZ: Hamburg',
        'Zimmer: einzelzimmer',
      ],
      loesungen: [
        'Geburtsdatum: **03.05.1998** ~~(con puntos, formato día.mes.año)~~',
        'PLZ: **20095** — ~~en «PLZ» va el número; la ciudad va en «Wohnort»~~',
        'Zimmer: **Einzelzimmer** ~~(sustantivo → mayúscula)~~',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 3 · Dein Mini-Formular',
      frage: 'Fülle aus mit deinen Daten: Name, Straße + Hausnummer, PLZ + Wohnort, Geburtsdatum.',
      loesungLabel: 'Muster',
      loesung: '*Name: Carlos Ruiz · Straße: Avenida Sur 4 · PLZ, Wohnort: 41001 Sevilla · Geburtsdatum: 21.03.2000*',
    },

    { type: 'rule' },

    // ── Prüfungsbezug ─────────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Schreiben · Teil 1',
      titel: 'Hotel-Anmeldung',
      anweisung: 'Lies die Situation und ergänze die 5 Felder im Formular.',
      absaetze: [
        'Ihre Freundin Marta Ruiz macht Urlaub in Hamburg. Sie wohnt in der Calle Mayor 12 in 41001 Sevilla, in Spanien. Sie kommt am 12.10. an und möchte bis zum 15.10. ein Einzelzimmer im Hotel Elbblick. Helfen Sie ihr mit dem Formular.',
        'Hotel Elbblick — Anmeldung\nFamilienname: Ruiz\nVorname: {1}\nStraße, Hausnummer: {2}\nPLZ, Wohnort: {3}\nLand: {4}\nAnkunft: {5}\nZimmer: Einzelzimmer',
      ],
      loesungLabel: 'Lösung',
      loesungen: [
        '{1} Vorname: **Marta** ~~(«Ruiz» ya está — falta el nombre de pila)~~',
        '{2} Straße, Hausnummer: **Calle Mayor 12**',
        '{3} PLZ, Wohnort: **41001 Sevilla**',
        '{4} Land: **Spanien**',
        '{5} Ankunft: **12.10.** ~~(llega el 12 — el 15.10. es la salida, no la confundas)~~',
      ],
      kommentar: 'Alle fünf Daten stehen im Text. Das Datum bei {5} ist die **Ankunft** — im Text stehen zwei Daten, du brauchst das richtige. ~~Leer la casilla con calma evita el error clásico de copiar el primer número que ves.~~',
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Du musst **nicht alles verstehen** — nur die Wörter neben den leeren Feldern. Und: ==lass kein Feld leer==. Ein leeres Feld ist sicher null Punkte; ein Versuch mit dem Datum aus dem Text kann richtig sein.',
    },

    { type: 'rule' },

    // ── Abschluss ─────────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Regel', 'Merken'],
      zeilen: [
        ['Quelle', 'Jede Antwort steht im Text — nichts erfinden'],
        ['Datum', 'Tag.Monat.Jahr mit Punkten: 12.10.2026'],
        ['PLZ', '5 Zahlen, vor dem Wohnort: 41001 Sevilla'],
        ['Substantive', 'groß schreiben: Einzelzimmer, Ankunft'],
        ['Strategie', 'kein Feld leer lassen'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich finde die Daten für das Formular im Situationstext.',
        'Ich schreibe Datum und PLZ im deutschen Format.',
        'Ich erfinde nichts und lasse kein Feld leer.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Teil 1 ist Präzision — Teil 2 ist dein erster **eigener Text auf Deutsch**: eine E-Mail oder Karte mit ca. 30 Wörtern. In der nächsten Lektion bekommst du die Bausteine: Anrede, Gruß und Sätze, die du immer wieder benutzen kannst.',
    },
  ],
}
