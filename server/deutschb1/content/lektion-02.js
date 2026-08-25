// Lektion 02 · Das digitale Prüfungsformat (CBT)
//
// Bloque 0 «Einführung» — el examen por ordenador a nivel B1: navegación,
// marcar respuestas, reloj, teclado QWERTZ (ä ö ü ß), qué cambia respecto
// al papel y cómo entrenarlo en casa. Checklist del día del examen.

export default {
  spec: ['Bloque 0', 'Einführung', 'Niveau B1', 'Prüfungsrelevanz: Lesen · Hören · Schreiben'],
  h1: 'Das digitale Prüfungsformat (CBT)',
  lead: 'Lesen, Hören und Schreiben am Computer: klicken, markieren, tippen — und die Uhr im Blick behalten. ~~Que la técnica no te quite puntos.~~',

  content: [
    // ── Lernziele ─────────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'wissen, was am Computer anders ist — und was gleich bleibt',
        'Antworten anklicken, ändern und Aufgaben markieren',
        'ä, ö, ü und ß auf der deutschen Tastatur finden',
        'das digitale Format zu Hause trainieren',
      ],
    },

    { type: 'rule' },

    // ── Kernwortschatz ────────────────────────────────────────────
    {
      type: 'wortschatz',
      eyebrow: 'Kernwortschatz — am Bildschirm',
      items: [
        { wort: 'der Bildschirm, -e', kollokation: 'den Text am Bildschirm lesen', es: 'la pantalla' },
        { wort: 'die Tastatur, -en', kollokation: 'mit deutscher Tastatur tippen', es: 'el teclado' },
        { wort: 'die Maus, ·Mäuse', kollokation: 'mit der Maus klicken', es: 'el ratón' },
        { wort: 'anklicken', kollokation: 'die richtige Antwort anklicken', es: 'hacer clic, seleccionar' },
        { wort: 'markieren', kollokation: 'eine Aufgabe markieren', es: 'marcar, resaltar' },
        { wort: 'ändern', kollokation: 'die Antwort noch einmal ändern', es: 'cambiar' },
        { wort: 'tippen', kollokation: 'den Text schnell tippen', es: 'teclear, escribir a máquina' },
        { wort: 'der Kopfhörer, -', kollokation: 'das Audio über Kopfhörer hören', es: 'los auriculares' },
        { wort: 'die Restzeit', kollokation: 'die Restzeit oben rechts sehen', es: 'el tiempo restante' },
        { wort: 'scrollen', kollokation: 'im Text nach unten scrollen', es: 'desplazarse por la pantalla' },
        { wort: 'die Lautstärke', kollokation: 'die Lautstärke selbst einstellen', es: 'el volumen' },
      ],
      hinweis: '~~«Markieren» = resaltar texto o señalar una tarea para volver luego. «Elegir la respuesta» es «anklicken» — no los confundas.~~',
    },

    { type: 'rule' },

    // ── Erklärung ─────────────────────────────────────────────────
    {
      type: 'prose',
      eyebrow: 'Erklärung — was digital heißt',
      absaetze: [
        'CBT bedeutet „computer-based testing“: Du machst **Lesen, Hören und Schreiben am Computer**. Das Modul **Sprechen bleibt eine Paarprüfung** mit echten Prüfenden. Ganz wichtig: **Aufgaben, Zeit und Bewertung sind identisch** mit der Papierprüfung — nur das Medium ist neu.',
      ],
    },
    {
      type: 'steps',
      eyebrow: 'Erklärung — so funktioniert es',
      steps: [
        {
          titel: 'Klicken und ändern',
          text: 'Du wählst eine Antwort per __Klick__. Unsicher? Kein Problem: Du kannst sie **bis zum Ende der Zeit ändern**. ~~Nada es definitivo hasta que se acaba el tiempo.~~',
        },
        {
          titel: 'Markieren und zurückkommen',
          text: 'Schwere Aufgaben __markierst__ du und machst weiter. Am Ende des Moduls kommst du zurück — so verlierst du **keine Zeit**.',
        },
        {
          titel: 'Die Uhr läuft mit',
          text: 'Die __Restzeit__ steht immer auf dem Bildschirm. Nutze sie aktiv: pro Teil ein kleines **Zeitbudget** planen.',
        },
        {
          titel: 'Schreiben heißt tippen',
          text: 'Beim Modul Schreiben tippst du in ein Textfeld. Löschen und umstellen ist **viel leichter als auf Papier** — die Wörter zählt das System meist automatisch.',
        },
      ],
    },
    {
      type: 'tabelle',
      eyebrow: 'Erklärung — Papier vs. Computer',
      kopf: ['Bereich', 'Auf Papier', 'Am Computer'],
      zeilen: [
        ['Lesen', 'mit dem Stift unterstreichen', 'mit dem Werkzeug markieren'],
        ['Hören', 'Lautsprecher für alle', 'eigene Kopfhörer, Lautstärke selbst regeln'],
        ['Schreiben', 'Handschrift, Korrekturen chaotisch', 'tippen, sauber löschen und ändern'],
        ['Zeit & Aufgaben', 'identisch', 'identisch — die Uhr läuft am Bildschirm'],
      ],
    },
    {
      type: 'prose',
      card: true,
      titel: 'Die deutsche Tastatur: QWERTZ',
      absaetze: [
        'In der Prüfung tippst du auf einer **deutschen Tastatur (QWERTZ)**: __ä, ö, ü__ haben eigene Tasten rechts, __ß__ liegt neben der Null — und **y und z sind vertauscht**. ~~Si escribes «strasse» en vez de «Straße» o buscas la ß media hora, pierdes tiempo y nervios.~~ Stell zu Hause das deutsche Layout ein und tippe **jeden Tag 10 Minuten** deutsche Sätze.',
      ],
    },

    { type: 'rule' },

    // ── Beispiele ─────────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele — das liest du auf dem Bildschirm',
      kicker: 'Bildschirmsprache',
      titel: 'Typische Anweisungen',
      items: [
        { text: '„**Klicken Sie** die richtige Lösung **an**.“', gl: '— selecciona la respuesta' },
        { text: '„Sie können Ihre Antwort jederzeit **ändern**.“' },
        { text: '„**Markieren** Sie die Aufgabe, um später zurückzukehren.“', gl: '— señálala para revisarla luego' },
        { text: '„Die **verbleibende Zeit** sehen Sie oben rechts.“', gl: '— el reloj del examen' },
      ],
    },

    { type: 'rule' },

    // ── Übungen ───────────────────────────────────────────────────
    {
      type: 'uebung',
      eyebrow: 'Anwendung — Übung 1 · Erkennen',
      frage: 'Richtig oder falsch?',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Am Computer machst du auch das Modul Sprechen.',
        'Eine angeklickte Antwort kannst du bis zum Ende der Zeit ändern.',
        'Die digitale Prüfung ist kürzer als die Papierprüfung.',
        'Beim Hören hast du eigene Kopfhörer.',
      ],
      loesungen: [
        '**Falsch** — Sprechen bleibt eine Paarprüfung.',
        '**Richtig** — nichts ist sofort endgültig.',
        '**Falsch** — Zeit, Aufgaben und Bewertung sind identisch.',
        '**Richtig** — und die Lautstärke stellst du selbst ein.',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 2 · Anwenden',
      frage: 'Was machst du? Antworte mit einem Verb aus dem Kernwortschatz.',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Eine Aufgabe bei Lesen ist sehr schwer, und die Zeit läuft.',
        'Du willst eine wichtige Zahl im Text später schnell wiederfinden.',
        'Beim Schreiben passt dein letzter Satz besser an den Anfang.',
      ],
      loesungen: [
        'Die Aufgabe **markieren** und weiterarbeiten — am Ende zurückkommen.',
        'Die Stelle im Text **markieren** — wie Unterstreichen auf Papier.',
        'Den Satz löschen und oben neu **tippen** — genau das ist der Vorteil des Computers. ~~En papel sería un tachón; aquí, dos clics.~~',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 3 · Produzieren',
      frage: 'Tipptraining: Stell die deutsche Tastatur ein und tippe in 5 Minuten vier Sätze über deinen Tag. Jeder Satz braucht einen Umlaut (ä, ö, ü), mindestens einer ein ß.',
      loesungLabel: 'Mögliche Lösung',
      loesung: 'Ich stehe **früh** auf und **öffne** das Fenster. Zum **Frühstück** trinke ich Kaffee. Dann laufe ich durch die **Straßen** zur Arbeit. Abends bin ich oft **müde**, aber **zufrieden**. ~~El contenido da igual: el objetivo es encontrar ä, ö, ü y ß sin buscar las teclas. Repite hasta bajar de 5 minutos.~~',
    },

    { type: 'rule' },

    // ── Prüfungsbezug ─────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Prüfungsbezug — Checkliste für den Prüfungstag',
      kopf: ['Wann', 'Das steht auf deiner Liste'],
      zeilen: [
        ['Tage vorher', 'digitalen Modellsatz am Computer durchspielen · jeden Tag tippen (ä, ö, ü, ß) · Ausweis und Anmeldebestätigung bereitlegen'],
        ['Am Morgen', 'früh da sein · Ausweis mitnehmen · Handy und Notizen bleiben draußen'],
        ['Vor dem Start', 'Kopfhörer aufsetzen und Lautstärke testen · bei Fragen sofort die Aufsicht rufen'],
        ['Während der Prüfung', 'Restzeit im Blick behalten · markieren statt lange grübeln · am Ende die Antworten kontrollieren'],
      ],
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Mach **mindestens einmal alles komplett digital**: Modellsatz am Computer, mit Kopfhörern, mit laufender Uhr, Schreiben nur mit Tastatur. Dann hast du am Prüfungstag den Kopf frei **für die Sprache — nicht für die Technik**.',
    },

    { type: 'rule' },

    // ── Abschluss ─────────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Frage', 'Antwort'],
      zeilen: [
        ['Was ist digital?', 'Lesen, Hören, Schreiben — Sprechen bleibt Paarprüfung'],
        ['Was bleibt gleich?', 'Aufgaben, Zeit und Bewertung'],
        ['Statt unterstreichen?', 'markieren — Text hervorheben, Aufgaben für später merken'],
        ['Größter Vorteil', 'Kopfhörer beim Hören + saubere Korrekturen beim Tippen'],
        ['Größtes Risiko', 'langsames Tippen, fremde Tastatur → vorher trainieren'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich weiß, welche Module am Computer laufen und was gleich bleibt.',
        'Ich kann Antworten anklicken, ändern und Aufgaben markieren.',
        'Ich finde ä, ö, ü und ß auf der deutschen Tastatur.',
        'Ich habe einen Plan für mein Tipptraining zu Hause.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Du kennst jetzt die Prüfung und ihr Format. Bleibt die ehrliche Frage: **Wo stehst du gerade — A2 oder schon B1?** In der nächsten Lektion machst du drei Mini-Tests und findest heraus, welche Lektionen für dich am wichtigsten sind.',
    },
  ],
}
