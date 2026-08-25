// Lektion 14 · Genitiv & Präpositionen mit Genitiv

export default {
  spec: ['Bloque 1', 'Grammatik & Struktur', 'Niveau B1', 'Prüfungsrelevanz: Lesen & Schreiben'],
  h1: 'Genitiv & Präpositionen mit Genitiv',
  lead: 'Der vierte Fall: **des Mannes, der Frau** — und die Präpositionen **wegen** und **trotz**. ~~El «de» del alemán formal.~~',

  content: [
    // ── Lernziele ─────────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'Besitz mit dem Genitiv ausdrücken (*das Auto des Nachbarn*)',
        'die gesprochene Alternative mit **von + Dativ** benutzen',
        'die Präpositionen **wegen** und **trotz** verstehen und anwenden',
      ],
    },

    { type: 'rule' },

    // ── Kernwortschatz ────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Kernwortschatz',
      items: [
        { text: '**wegen** ~~(por, a causa de)~~ · **trotz** ~~(a pesar de)~~ · **während** ~~(durante)~~' },
      ],
    },
    {
      type: 'tabelle',
      kopf: ['', 'maskulin', 'neutral', 'feminin', 'Plural'],
      zeilen: [
        ['Genitiv', 'des Mannes', 'des Kindes', 'der Frau', 'der Eltern'],
        ['mit ein-', 'eines Mannes', 'eines Kindes', 'einer Frau', '—'],
        ['Endung am Nomen', '**-s / -es**', '**-s / -es**', 'keine', 'keine'],
      ],
    },
    {
      type: 'prose',
      card: true,
      absaetze: [
        '**Merke:** Nur __maskulin__ und __neutral__ bekommen **des** + die Endung **-s/-es** am Nomen. Feminin und Plural haben nur **der** — das Nomen ändert sich nicht. ~~Solo dos géneros «trabajan»; los otros dos solo cambian el artículo.~~ Einige maskuline Nomen (Personen) bekommen **-n** statt -s: des Nachbar**n**, des Kollege**n**, des Kunde**n**.',
      ],
    },

    { type: 'rule' },

    // ── Erklärung ─────────────────────────────────────────────────
    {
      type: 'steps',
      eyebrow: 'Erklärung — drei Situationen',
      steps: [
        {
          badge: 'Besitz',
          titel: 'Wessen? → Genitiv',
          text: 'Der Genitiv antwortet auf __Wessen?__ ~~(¿de quién?)~~ und steht __hinter__ dem Nomen:\n__das Auto **des Nachbarn** · die Tasche **der Lehrerin**__',
        },
        {
          badge: 'Gesprochen',
          titel: 'von + Dativ',
          text: 'Im Alltag sagt man meistens __von + Dativ__:\n__das Auto **vom** Nachbarn · die Tasche **von der** Lehrerin__\n~~En la calle oirás casi siempre «von»; el genitivo domina en textos escritos.~~',
        },
        {
          badge: 'Präpositionen',
          titel: 'wegen & trotz + Genitiv',
          text: '__**wegen** des Regens__ ~~(por la lluvia)~~ · __**trotz** des Regens__ ~~(a pesar de la lluvia)~~.\nBeide stehen oft in offiziellen Texten: Durchsagen, Schilder, Briefe.',
        },
      ],
    },
    {
      type: 'prose',
      card: true,
      absaetze: [
        '**Typischer Fehler:** ~~En español todo es «de»: el coche de Juan, por culpa del tráfico. La tentación es usar «von» siempre. Ojo:~~ nach *wegen* und *trotz* steht **kein von** — direkt der Genitiv: **wegen des Staus**, nicht *„wegen von dem Stau“*. Bei Namen einfach **-s**: *Marias Auto, Juans Wohnung* ~~(sin apóstrofo)~~.',
      ],
    },

    { type: 'rule' },

    // ── Beispiele ─────────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele',
      kicker: 'Besitz',
      titel: 'Genitiv ↔ von + Dativ',
      items: [
        { text: 'Das ist das Büro **des Chefs**.', gl: '= das Büro **vom** Chef ~~(hablado)~~' },
        { text: 'Die Farbe **des Autos** gefällt mir.', gl: '= die Farbe **von dem** Auto' },
        { text: 'Der Name **der Straße** ist neu.', gl: '— feminin: nur der Artikel ändert sich' },
        { text: 'Die Spielsachen **der Kinder** liegen überall.', gl: '— Plural: der' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'Präpositionen',
      titel: 'wegen & trotz',
      items: [
        { text: '**Wegen des Wetters** bleiben wir zu Hause.', gl: '~~por el tiempo~~' },
        { text: '**Wegen eines Unfalls** ist die Straße gesperrt.', gl: '— typische Durchsage' },
        { text: '**Trotz des Regens** machen wir das Picknick.', gl: '~~a pesar de la lluvia~~' },
        { text: '**Während der Pause** kannst du mich anrufen.', gl: '~~durante la pausa~~' },
      ],
    },

    { type: 'rule' },

    // ── Übungen ───────────────────────────────────────────────────
    {
      type: 'uebung',
      eyebrow: 'Anwendung — Übung 1 · Erkennen',
      frage: 'Wo steht ein Genitiv? Markiere ihn.',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Die Tür des Zimmers ist offen.',
        'Ich fahre mit dem Auto von meinem Bruder.',
        'Trotz der Kälte gehen wir spazieren.',
        'Das Handy meiner Schwester ist kaputt.',
      ],
      loesungen: [
        '**des Zimmers** — Genitiv neutral, Endung -s',
        'kein Genitiv — hier steht **von + Dativ** ~~(la alternativa hablada)~~',
        '**der Kälte** — Genitiv feminin nach *trotz*',
        '**meiner Schwester** — Genitiv feminin mit Possessivartikel',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 2 · Artikel einsetzen',
      frage: 'Ergänze den Genitiv.',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Der Eingang ___ ___ ist links. ~~(das Gebäude)~~',
        'Wegen ___ ___ fahren keine Busse. ~~(der Streik)~~',
        'Trotz ___ Hitze bleiben wir im Garten. ~~(die Hitze)~~',
      ],
      loesungen: [
        'der Eingang **des Gebäudes** ~~(neutral → des + -s)~~',
        'wegen **des Streiks** ~~(maskulin → des + -s)~~',
        'trotz **der** Hitze ~~(feminin → solo der)~~',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 3 · Selbst bilden',
      frage: 'Sag denselben Inhalt zweimal …',
      loesungLabel: 'Mögliche Lösung',
      aufgaben: [
        '… „la bicicleta de mi vecino es nueva" — einmal mit Genitiv, einmal mit *von*.',
        '… ein Satz mit **wegen** über deinen Alltag.',
      ],
      loesungen: [
        'Das Fahrrad **meines Nachbarn** ist neu. / Das Fahrrad **von meinem Nachbarn** ist neu. ~~Ambas correctas; la primera es más formal.~~',
        '**Wegen der Arbeit** stehe ich um sechs Uhr auf. ~~Vale cualquier causa real: wegen des Verkehrs, wegen meines Kurses…~~',
      ],
    },

    { type: 'rule' },

    // ── Prüfungsbezug ─────────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Lesen · Teil 4–5 (formelle Texte)',
      titel: 'Aushang verstehen',
      anweisung: 'Solche Sätze stehen oft auf Schildern und in offiziellen Mitteilungen. Lies den Aushang und beantworte die Frage:',
      absaetze: [
        '„**Wegen der Renovierung** bleibt die Bibliothek diese Woche geschlossen. **Trotz der Arbeiten** ist die Rückgabe **während der Öffnungszeiten** des Rathauses möglich.“',
        'Frage: Kann man diese Woche Bücher zurückgeben?',
      ],
      loesungLabel: 'Lösung',
      loesungen: [
        '**Ja** — trotz der Arbeiten ist die Rückgabe möglich, aber im Rathaus, nicht in der Bibliothek.',
        'Signalwörter: *wegen* = Grund ~~(por qué cierra)~~, *trotz* = Gegensatz ~~(aun así se puede)~~.',
      ],
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'In **Lesen Teil 4–5** (Anweisungen, formelle Texte) sind *wegen, trotz, während* Signalwörter: **wegen** nennt den Grund, **trotz** sagt „aber es geht doch“. Wer sie kennt, versteht Durchsagen und Aushänge doppelt so schnell.',
    },

    { type: 'rule' },

    // ── Abschluss ─────────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Was?', 'Form', 'Beispiel'],
      zeilen: [
        ['Genitiv mask./neutr.', 'des + Nomen-s/-es', 'das Auto des Mannes'],
        ['Genitiv fem./Plural', 'der (ohne Endung)', 'die Tasche der Frau'],
        ['gesprochen', 'von + Dativ', 'das Auto vom Mann'],
        ['Grund', 'wegen + Genitiv', 'wegen des Regens'],
        ['Gegensatz', 'trotz + Genitiv', 'trotz des Regens'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich kann Besitz mit dem Genitiv ausdrücken (des Mannes, der Frau).',
        'Ich kenne die gesprochene Alternative mit von + Dativ.',
        'Ich verstehe und benutze wegen und trotz mit Genitiv.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Mit *wegen* und *trotz* liest du offizielle Texte schon leichter. In genau diesen Texten steht noch eine zweite typische Struktur: **das Passiv** — *„Die Bibliothek **wird renoviert**.“* Wie das funktioniert, lernst du in der nächsten Lektion.',
    },
  ],
}
