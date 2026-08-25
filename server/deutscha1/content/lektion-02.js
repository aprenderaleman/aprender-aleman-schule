// Lektion 02 · Prüfungsformat & Antwortbogen
//
// Bloque 0 «Einführung» — el examen en papel: la hoja de respuestas,
// transferir A TIEMPO, cómo marcar y corregir, qué llevar.

export default {
  spec: ['Bloque 0', 'Einführung', 'Niveau A1', 'Prüfungsrelevanz: alle Teile'],
  h1: 'Prüfungsformat & Antwortbogen',
  lead: '~~El A1 se hace en papel: solo cuenta la hoja de respuestas~~ (**Antwortbogen**). ~~Aprende a marcar, a corregir y — lo más importante — a transferir a tiempo.~~',

  content: [
    // ── Lernziele ─────────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'wissen: Nur der **Antwortbogen** zählt',
        'richtig ankreuzen und korrigieren',
        'wissen, was du am Prüfungstag mitbringst',
      ],
    },

    { type: 'rule' },

    // ── Kernwortschatz ────────────────────────────────────────────
    {
      type: 'wortschatz',
      eyebrow: 'Kernwortschatz — der Prüfungstag',
      items: [
        { wort: 'der Antwortbogen', kollokation: 'den Antwortbogen kontrollieren', es: 'la hoja de respuestas' },
        { wort: 'das Aufgabenblatt', kollokation: 'auf dem Aufgabenblatt notieren', es: 'el cuadernillo de tareas' },
        { wort: 'ankreuzen', kollokation: 'die Lösung ankreuzen', es: 'marcar con una cruz' },
        { wort: 'übertragen', kollokation: 'die Antworten übertragen', es: 'pasar, transferir' },
        { wort: 'korrigieren', kollokation: 'einen Fehler korrigieren', es: 'corregir' },
        { wort: 'der Kugelschreiber', kollokation: 'mit Kugelschreiber (Kuli) schreiben', es: 'el bolígrafo' },
        { wort: 'der Bleistift', kollokation: 'mit Bleistift markieren', es: 'el lápiz' },
        { wort: 'der Radiergummi', kollokation: 'einen Radiergummi mitbringen', es: 'la goma de borrar' },
        { wort: 'der Ausweis', kollokation: 'den Ausweis zeigen', es: 'el documento de identidad' },
        { wort: 'die Zeit', kollokation: 'genug Zeit haben', es: 'el tiempo' },
      ],
      hinweis: '~~«Kuli» es la forma corta y coloquial de Kugelschreiber — la oirás en el aula.~~',
    },

    { type: 'rule' },

    // ── Erklärung ─────────────────────────────────────────────────
    {
      type: 'prose',
      eyebrow: 'Erklärung',
      card: true,
      titel: 'Papier + Antwortbogen',
      absaetze: [
        'Die A1-Prüfung ist meistens eine **Papierprüfung**. Du bekommst **Aufgabenblätter** ~~(cuadernillos con las tareas)~~ und einen **Antwortbogen**. **Wichtig: Nur der Antwortbogen wird korrigiert!** ~~Lo que escribas en el cuadernillo no cuenta para la nota.~~',
        'An manchen Zentren gibt es die Prüfung auch **digital** am Computer — ~~una posibilidad cada vez más frecuente~~. Frag dein **Prüfungszentrum**, welches Format du hast.',
      ],
    },
    {
      type: 'steps',
      eyebrow: 'Erklärung — so funktioniert der Antwortbogen',
      steps: [
        {
          badge: 'ankreuzen',
          titel: 'Klar markieren',
          text: '__Ein Kreuz__ pro Aufgabe, klar und deutlich. ~~Una sola cruz por ítem — dos marcas cuentan como error.~~',
        },
        {
          badge: 'korrigieren',
          titel: 'Fehler? Kein Problem',
          text: 'Falsch angekreuzt? Male das falsche Feld __ganz aus__ und kreuze neu an. ~~Rellena por completo la casilla equivocada y marca la correcta.~~',
        },
        {
          badge: 'rechtzeitig',
          titel: 'Sofort übertragen',
          text: '__Übertrage deine Antworten sofort__, nicht erst am Ende! ~~El error clásico: se acaba el tiempo y las respuestas se quedan en el cuadernillo — cero puntos.~~',
        },
      ],
    },
    {
      type: 'tabelle',
      eyebrow: 'Erklärung — was nimmst du mit?',
      kopf: ['Mitbringen', 'Warum?'],
      zeilen: [
        ['den Ausweis / Pass', '~~te identifican antes de empezar~~'],
        ['die Einladung / Anmeldung', '~~la confirmación de tu centro examinador~~'],
        ['Kuli oder Bleistift + Radiergummi', '~~pregunta a tu centro qué prefiere~~'],
        ['**kein** Handy, **kein** Wörterbuch', '~~prohibidos en la sala de examen~~'],
      ],
    },

    { type: 'rule' },

    // ── Beispiele ─────────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele',
      items: [
        { text: 'Ich kreuze **a** an.', gl: '— Marco la a.' },
        { text: 'Ich übertrage die Antworten **sofort**.', gl: '— Paso las respuestas enseguida.' },
        { text: 'Hier ist mein **Ausweis**.', gl: '— Aquí está mi documento.' },
        { text: 'Wie viel **Zeit** haben wir noch?', gl: '— ¿Cuánto tiempo nos queda?' },
      ],
    },

    { type: 'rule' },

    // ── Übungen ───────────────────────────────────────────────────
    {
      type: 'uebung',
      eyebrow: 'Anwendung — Übung 1 · Wörter erkennen',
      frage: 'Ordne zu: Deutsch → Spanisch. ~~(Une cada palabra con su traducción.)~~',
      loesungLabel: 'Lösung',
      aufgaben: [
        'ankreuzen → ?',
        'übertragen → ?',
        'der Antwortbogen → ?',
        'der Radiergummi → ?',
      ],
      loesungen: [
        'ankreuzen → **marcar con una cruz**',
        'übertragen → **pasar, transferir**',
        'der Antwortbogen → **la hoja de respuestas**',
        'der Radiergummi → **la goma de borrar**',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 2 · Richtig oder falsch?',
      frage: 'Richtig (R) oder falsch (F)? ~~(¿Verdadero o falso?)~~',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Nur der Antwortbogen zählt.',
        'Ich übertrage alles in der letzten Minute.',
        'Ein Wörterbuch ist in der Prüfung okay.',
        'Ich kann einen Fehler korrigieren.',
      ],
      loesungen: [
        '**Richtig** — das Aufgabenblatt zählt nicht.',
        '**Falsch** — übertrage **sofort**, Teil für Teil.',
        '**Falsch** — kein Wörterbuch, kein Handy.',
        '**Richtig** — falsches Feld ausmalen, neu ankreuzen.',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 3 · Deine Checkliste',
      frage: 'Schreibe einen Satz: Was nimmst du zur Prüfung mit? (3 Dinge)',
      loesungLabel: 'Muster',
      loesung: '*Ich nehme meinen Ausweis, einen Kuli und einen Radiergummi mit.* ~~(También vale una lista simple: Ausweis, Kuli, Radiergummi.)~~',
    },

    { type: 'rule' },

    // ── Prüfungsbezug ─────────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Prüfungstag',
      titel: 'Die Checkliste',
      anweisung: 'Ergänze die Checkliste mit: **Antwortbogen · Ausweis · Kuli**. ~~(Completa los huecos.)~~',
      absaetze: [
        '„Ich zeige meinen {1}. Ich schreibe mit einem {2}. Am Ende kontrolliere ich meinen {3}: Ist alles übertragen?“',
      ],
      loesungLabel: 'Lösung',
      loesungen: [
        '{1} Ich zeige meinen **Ausweis**.',
        '{2} Ich schreibe mit einem **Kuli**.',
        '{3} Ich kontrolliere meinen **Antwortbogen**.',
      ],
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Bei **Hören** und **Lesen**: Übertrage deine Antworten **Teil für Teil** auf den Antwortbogen — nicht alles am Ende. ~~Quedarse sin transferir es el error más tonto y más frecuente del examen, y cuesta el aprobado.~~',
    },

    { type: 'rule' },

    // ── Abschluss ─────────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Frage', 'Antwort'],
      zeilen: [
        ['Format?', 'Papier + **Antwortbogen** ~~(digital: posibilidad creciente — pregunta a tu centro)~~'],
        ['Was zählt?', '**nur** der Antwortbogen'],
        ['Korrigieren?', 'falsches Feld ganz ausmalen, neu ankreuzen'],
        ['Mitbringen?', 'Ausweis, Kuli/Bleistift, Radiergummi — kein Handy'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich weiß: Nur der Antwortbogen zählt.',
        'Ich kann richtig ankreuzen und einen Fehler korrigieren.',
        'Ich weiß, was ich mitbringe — und dass ich rechtzeitig übertrage.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Kannst du schon **ein bisschen Deutsch**? In der nächsten Lektion machst du einen kleinen Test: Was kannst du schon, was lernst du in diesem Kurs? ~~Sin miedo: no saber todavía es exactamente lo normal.~~',
    },
  ],
}
