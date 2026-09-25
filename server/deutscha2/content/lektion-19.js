// Lektion 19 · Lesen: Kurze Texte & E-Mails
//
// Bloque 2 «Prüfungsstrategie». Richtig/falsch: la paráfrasis simple y la
// trampa del casi-igual. Práctica completa con una E-Mail (~90 palabras)
// y 4 ítems con solución razonada. Respeta el canon interno de Lesen
// fijado en la lección 18 (regla de prudencia: ítems en genérico).

export default {
  spec: ['Bloque 2', 'Prüfungsstrategie', 'Niveau A2', 'Prüfungsrelevanz: Lesen'],
  h1: 'Lesen: Kurze Texte & E-Mails',
  lead: 'Richtig oder falsch? ~~Hoy entrenas el tipo de tarea más frecuente del Lesen:~~ E-Mails und kurze Mitteilungen **genau verstehen**.',

  content: [
    // ── Lernziele ─────────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'kurze E-Mails und Mitteilungen verstehen',
        'Paraphrasen erkennen — ~~la misma idea con otras palabras~~',
        'die Falle „fast gleich“ erkennen und vermeiden',
      ],
    },

    { type: 'rule' },

    // ── Kernwortschatz ────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Kernwortschatz — E-Mails & Mitteilungen',
      kopf: ['Wort', 'Beispiel', 'Bedeutung'],
      zeilen: [
        ['die Nachricht, -en', 'eine Nachricht schreiben', 'el mensaje'],
        ['einladen', 'Ich lade dich ein.', 'invitar'],
        ['absagen', 'Ich muss leider absagen.', 'cancelar, decir que no'],
        ['mitbringen', 'Bring einen Salat mit!', 'traer (consigo)'],
        ['abholen', 'Ich hole dich um 8 Uhr ab.', 'recoger (a alguien)'],
        ['der Termin, -e', 'einen Termin haben', 'la cita, la hora'],
        ['stattfinden', 'Das Fest findet am Samstag statt.', 'tener lugar'],
        ['leider', 'Ich kann leider nicht kommen.', 'lamentablemente'],
        ['Bescheid sagen', 'Sag mir bitte Bescheid.', 'avisar'],
        ['der Gruß, die Grüße', 'Viele Grüße, Ana', 'el saludo'],
      ],
    },

    { type: 'rule' },

    // ── Erklärung ─────────────────────────────────────────────────
    {
      type: 'steps',
      eyebrow: 'Erklärung — Richtig/falsch ohne Stress',
      steps: [
        {
          badge: 'Schritt 1',
          titel: 'Erst die Sätze, dann der Text',
          text: 'Lies zuerst die Sätze in der Aufgabe und markiere das wichtigste Wort: Tag? Uhrzeit? Person? Dann suche die Stelle im Text. ~~(los ítems suelen ir en el orden del texto)~~',
        },
        {
          badge: 'Paraphrase',
          titel: 'Der Text sagt es anders',
          text: 'Die Aufgabe benutzt oft **andere Wörter** als der Text. Text: __„Das Konzert beginnt um 20 Uhr.“__ → Aufgabe: __„Das Konzert ist am Abend.“__ = **richtig**. Vergleiche die **Idee**, nicht das gleiche Wort. ~~(parafrasear = decir lo mismo con otras palabras)~~',
        },
        {
          badge: 'Falle',
          titel: 'Fast gleich ist nicht gleich',
          text: 'Manchmal nimmt die Aufgabe **Wörter aus dem Text**, aber **ein Detail ist anders**: der Tag, die Uhrzeit, die Person oder eine Negation. Text: __„Ich komme am Freitag.“__ → Aufgabe: __„Sie kommt am Samstag.“__ = **falsch**. ~~Cuidado con la frase casi igual: una sola palabra lo cambia todo.~~',
        },
      ],
    },

    { type: 'rule' },

    // ── Beispiele ─────────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele — Paraphrase oder Falle?',
      items: [
        { text: '**Text:** „Der Kurs kostet nichts.“ → **Aufgabe:** „Der Kurs ist kostenlos.“', gl: '— **richtig**: gleiche Idee, andere Wörter' },
        { text: '**Text:** „Anna kommt mit dem Zug.“ → **Aufgabe:** „Anna kommt mit dem Auto.“', gl: '— **falsch**: ein Detail ist anders' },
        { text: '**Text:** „Wir treffen uns am Freitagabend.“ → **Aufgabe:** „Sie treffen sich am Freitagmorgen.“', gl: '— **falsch** ~~(casi igual — pero cambia la parte del día)~~' },
      ],
    },

    { type: 'rule' },

    // ── Mehr Beispiele ────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Mehr Beispiele',
      titel: 'Kurze Mitteilungen',
      items: [
        { text: 'Ich lade dich am Samstag zum Essen **ein**.', gl: '— einladen: el prefijo va al final' },
        { text: 'Das Konzert **findet** im Park **statt**.', gl: '— stattfinden = tener lugar' },
        { text: 'Ich muss den Termin **leider absagen**.', gl: '— cancelar con cortesía' },
        { text: '**Holst** du mich um 7 Uhr am Bahnhof **ab**?', gl: '— abholen en una pregunta' },
        { text: 'Bringt bitte etwas zu trinken **mit**!', gl: '— mitbringen en imperativo (ihr)' },
        { text: 'Sag mir bitte bis Donnerstag **Bescheid**.', gl: '— avisar' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'Paraphrase',
      titel: 'Gleiche Idee, andere Wörter?',
      items: [
        { text: '„Ich kann **leider nicht** kommen.“ = „Ich **sage ab**.“', gl: '— misma idea: **richtig**' },
        { text: '„Das Fest **findet** am Sonntag **statt**.“ = „Das Fest ist am Sonntag.“', gl: '— misma idea: **richtig**' },
        { text: '„Der Termin ist um 20 Uhr.“ = „Der Termin ist **am Abend**.“', gl: '— la hora se parafrasea: **richtig**' },
        { text: '„**Ich** hole **dich** ab.“ ≠ „**Du** holst **mich** ab.“', gl: '— cambia la persona: **falsch**' },
        { text: '„Wir treffen uns **nicht** am Montag.“ ≠ „Wir treffen uns am Montag.“', gl: '— la negación lo cambia todo: **falsch**' },
      ],
    },

    { type: 'rule' },

    // ── Prüfungsbezug ─────────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Lesen · E-Mail',
      titel: 'Richtig oder falsch? (komplette Praxis)',
      anweisung: 'Lies die E-Mail. Sind die Sätze 1–4 richtig oder falsch?',
      absaetze: [
        '„Liebe Sofia, endlich habe ich Zeit und schreibe dir! Seit März wohne ich in Leipzig. Die Stadt gefällt mir sehr gut. Die Wohnung ist klein, aber sie liegt im Zentrum, und die Miete ist nicht teuer. Am Vormittag arbeite ich in einem Café, am Nachmittag besuche ich einen Deutschkurs. Der Kurs macht Spaß, aber die Grammatik finde ich schwer. Am Wochenende habe ich frei. Willst du mich nicht besuchen? Im Juli habe ich Urlaub. Du kannst bei mir schlafen, das Sofa ist ganz bequem. Antworte mir bald! Deine Marta“',
      ],
      optionen: [
        '1. Marta wohnt seit März in Leipzig.',
        '2. Die Wohnung kostet viel Geld.',
        '3. Marta arbeitet am Nachmittag im Café.',
        '4. Sofia kann im Juli bei Marta übernachten.',
      ],
      loesungLabel: 'Lösung mit Begründung',
      loesungen: [
        '1. **richtig** — steht direkt im Text: „Seit März wohne ich in Leipzig.“',
        '2. **falsch** — Paraphrase mit Negation: „die Miete ist **nicht teuer**“ = die Wohnung kostet **nicht** viel Geld.',
        '3. **falsch** — die Falle „fast gleich“: Café und Arbeit stehen im Text, aber am **Vormittag**. Am Nachmittag ist der Deutschkurs.',
        '4. **richtig** — Paraphrase: „Du kannst bei mir **schlafen**“ = übernachten, und „im Juli habe ich Urlaub“.',
      ],
      kommentar: 'Alle Typen in einer Aufgabe: direkte Information (1), Paraphrase (2, 4), Falle „fast gleich“ (3). ~~Una buena mezcla para entrenar.~~',
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Markiere in jedem Aufgabensatz das **Schlüsselwort** (Tag, Uhrzeit, Person, Ort) und vergleiche genau diese Stelle im Text. Klingt der Satz **fast wie der Text**? Dann sei besonders vorsichtig — prüfe jedes Detail.',
    },

    { type: 'rule' },

    // ── Abschluss ─────────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Situation', 'Strategie'],
      zeilen: [
        ['Aufgabe mit anderen Wörtern', 'Idee vergleichen — Paraphrase kann richtig sein'],
        ['Aufgabe fast wie der Text', 'Details prüfen: Tag? Uhrzeit? Person? Negation?'],
        ['unbekanntes Wort im Text', 'weiterlesen — nicht jedes Wort zählt'],
        ['keine Antwort gefunden', 'trotzdem ankreuzen — keine Minuspunkte'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich verstehe kurze E-Mails und Mitteilungen.',
        'Ich erkenne Paraphrasen: gleiche Idee, andere Wörter.',
        'Ich prüfe bei „fast gleichen“ Sätzen jedes Detail.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'In der nächsten Lektion kommt der zweite große Aufgabentyp: Personen suchen etwas — du findest die passende **Anzeige**. ~~Y aprenderás qué hacer cuando ningún anuncio encaje.~~',
    },
  ],
}
