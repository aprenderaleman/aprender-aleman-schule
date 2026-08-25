// Lektion 21 · Modul Hören — Überblick
//
// Bloque 2 (Prüfungstraining). Esta lección FIJA EL CANON INTERNO de Hören:
// ca. 30 Minuten; Texttypen: kurze Texte & Durchsagen + Gespräche.
// Detalle fino (Teile, ítems, escuchas, puntos) SIEMPRE genérico + Modellsatz.
// Instala la metodología sin audio del curso (Transkripte + Modellsatz).

export default {
  spec: ['Bloque 2', 'Prüfungstraining — Hören', 'Niveau A2', 'Prüfungsrelevanz: Hören'],
  h1: 'Das Modul Hören — Überblick',
  lead: '~~Qué vas a escuchar en el examen y con qué estrategia:~~ **ca. 30 Minuten** — kurze Texte, Durchsagen und Gespräche. ~~Y cómo entrenamos en este curso sin audio.~~',

  content: [
    // ── Lernziele ─────────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'wissen, was du im Modul Hören hörst',
        'die Aufgaben **vor** dem Hören lesen',
        'auf Zahlen, Uhrzeiten und Orte achten',
        'ruhig bleiben, wenn du ein Wort nicht verstehst',
      ],
    },

    { type: 'rule' },

    // ── Kernwortschatz ────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Kernwortschatz — Hören',
      kopf: ['Wort', 'Beispiel', 'Bedeutung'],
      zeilen: [
        ['die Durchsage', '„Achtung, eine Durchsage!“', 'anuncio por megafonía'],
        ['der Anrufbeantworter', '„Sprechen Sie nach dem Ton.“', 'contestador'],
        ['die Ansage', 'eine Ansage im Radio', 'aviso, mensaje'],
        ['das Gespräch', 'ein Gespräch hören', 'conversación'],
        ['die Uhrzeit', '„Um wie viel Uhr?“', 'la hora'],
        ['das Gleis', 'Gleis 7', 'andén, vía'],
        ['der Termin', 'einen Termin haben', 'cita'],
        ['richtig / falsch', 'Das ist richtig.', 'verdadero / falso'],
      ],
    },

    { type: 'rule' },

    // ── Erklärung ─────────────────────────────────────────────────
    {
      type: 'prose',
      eyebrow: 'Erklärung — Was hörst du?',
      card: true,
      titel: 'Zwei Arten von Texten',
      absaetze: [
        'Das Modul Hören dauert **ca. 30 Minuten**. Du hörst kurze Texte aus dem Alltag: __Durchsagen__ ~~(megafonía)~~ am Bahnhof oder im Supermarkt, Nachrichten auf dem __Anrufbeantworter__, kurze Texte im Radio — und __Gespräche__ zwischen zwei Personen.',
        'In der Regel gibt es also zwei große Gruppen: **kurze Texte & Durchsagen** und **Gespräche**. Wie viele Teile und Aufgaben es genau sind und wie oft du jeden Text hörst, siehst du im offiziellen **Modellsatz** des Goethe-Instituts.',
      ],
    },
    {
      type: 'steps',
      eyebrow: 'Erklärung — Die Strategie',
      steps: [
        {
          titel: 'Vor dem Hören: Aufgaben lesen',
          text: 'Lies **zuerst** die Aufgaben. ~~(lee los ítems ANTES de escuchar)~~ Dann weißt du: Ich suche eine **Uhrzeit**, einen **Ort** oder einen **Preis**.',
        },
        {
          titel: 'Beim Hören: Zahlen sind der Schlüssel',
          text: 'Im A2 fragt man sehr oft: **Wann? Wo? Wie viel?** Achte auf __Zahlen und Uhrzeiten__ — sie sind fast immer die Antwort.',
        },
        {
          titel: 'Nicht blockieren!',
          text: 'Du verstehst ein Wort nicht? **Kein Problem.** Du musst nicht alles verstehen — nur die Antwort auf die Frage. Weiter zur nächsten Aufgabe! ~~(no te bloquees: sigue)~~',
        },
      ],
    },
    {
      type: 'prose',
      eyebrow: 'Erklärung — So übst du ohne Audio',
      card: true,
      titel: 'Die Methode in diesem Kurs',
      absaetze: [
        'Dieser Kurs hat kein Audio. Wir üben mit **Transkripten** ~~(el texto escrito de lo que se oye)~~. So geht es: Lies die Aufgaben. Dann lies das Transkript **nur einmal**, in normalem Tempo, ohne zurückzugehen — genau wie beim Hören. Noch besser: **Eine andere Person liest dir das Transkript vor.**',
        'Für echtes Audio: Der **Modellsatz** des Goethe-Instituts ist kostenlos online — mit echten Prüfungsstimmen. Übe damit vor der Prüfung.',
      ],
    },

    { type: 'rule' },

    // ── Beispiele ─────────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele — So klingt die Prüfung',
      items: [
        { text: '„Der Zug nach Hamburg fährt heute von **Gleis 9**.“', gl: '— Durchsage am Bahnhof' },
        { text: '„Hier ist die Praxis Dr. Weber. Ihr Termin ist am **Montag um 10 Uhr**.“', gl: '— Anrufbeantworter' },
        { text: '„Und jetzt das Wetter: Morgen wird es **sonnig**.“', gl: '— Radio' },
        { text: '„— Gehen wir am Freitag ins Kino? — Ja, gern!“', gl: '— Gespräch' },
      ],
    },

    { type: 'rule' },

    // ── Übungen ───────────────────────────────────────────────────
    {
      type: 'uebung',
      eyebrow: 'Anwendung — Übung 1 · Erkennen',
      frage: 'Wo hörst du das? Bahnhof, Supermarkt, Anrufbeantworter oder Radio?',
      loesungLabel: 'Lösung',
      aufgaben: [
        '„Sprechen Sie bitte nach dem Ton.“',
        '„Der Zug hat 10 Minuten Verspätung.“',
        '„Heute Äpfel im Angebot — nur 1 Euro!“',
        '„Und jetzt die Nachrichten.“',
      ],
      loesungen: [
        '**Anrufbeantworter** ~~(contestador)~~',
        '**Bahnhof**',
        '**Supermarkt**',
        '**Radio**',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 2 · Aufgabe zuerst lesen',
      frage: 'Lies zuerst die Aufgabe. Dann lies das Transkript **einmal**. ~~(en el examen: audio)~~ Richtig oder falsch?',
      aufgabe: '**Aufgabe:** „Der Deutschkurs beginnt um 9 Uhr.“\n**Transkript:** „Liebe Teilnehmer, der Deutschkurs beginnt heute nicht um 9 Uhr, sondern erst um 9.30 Uhr. Bitte warten Sie im Raum 12.“',
      loesungLabel: 'Lösung',
      loesungen: [
        '**Falsch** — der Kurs beginnt um **9.30 Uhr**. „Nicht …, **sondern** …“ — die zweite Information zählt!',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 3 · Zahlen-Training',
      frage: 'Lies laut und schreib die Zahl. ~~(escucha mental: escribe la cifra)~~',
      loesungLabel: 'Lösung',
      aufgaben: [
        '„Das Ticket kostet siebzehn Euro.“ → ___ €',
        '„Der Bus kommt um vierzehn Uhr.“ → ___ Uhr',
        '„Meine Nummer ist null — eins — fünf — neun.“ → ___',
      ],
      loesungen: [
        '**17 €**',
        '**14 Uhr** ~~(vierzehn = 14, vierzig = 40 — ¡ojo!)~~',
        '**0159**',
      ],
    },

    { type: 'rule' },

    // ── Prüfungsbezug ─────────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Hören · Durchsage',
      titel: 'Richtig oder falsch?',
      anweisung: 'Lies die Aufgabe, dann das Transkript **einmal** in normalem Tempo. ~~(en el examen: audio)~~ Aufgabe: „Das Geschäft ist morgen geschlossen.“',
      absaetze: [
        '„Liebe Kunden, unser Geschäft schließt heute schon um 18 Uhr. Morgen sind wir wieder ab 9 Uhr für Sie da. Vielen Dank für Ihren Besuch!“',
      ],
      loesungLabel: 'Lösung',
      loesungen: [
        '**Falsch** — morgen ist das Geschäft **ab 9 Uhr geöffnet** („wir sind wieder für Sie da“).',
      ],
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Lade den offiziellen **Modellsatz** des Goethe-Instituts herunter — kostenlos und mit echtem Audio. In der Regel hörst du jeden Text **ein- oder zweimal**; die Details siehst du dort. Übe **einmal komplett unter Prüfungsbedingungen**.',
    },

    { type: 'rule' },

    // ── Abschluss ─────────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Frage', 'Antwort'],
      zeilen: [
        ['Wie lange?', 'ca. 30 Minuten'],
        ['Was hörst du?', 'kurze Texte & Durchsagen · Gespräche'],
        ['Strategie', 'Aufgaben vorher lesen · auf Zahlen & Uhrzeiten achten'],
        ['Ohne Audio üben', 'Transkript nur einmal lesen (oder vorlesen lassen) + Modellsatz'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich weiß, welche Texte im Modul Hören vorkommen.',
        'Ich lese die Aufgaben vor dem Hören.',
        'Ich achte auf Zahlen, Uhrzeiten und Orte.',
        'Ich bleibe ruhig, wenn ich ein Wort nicht verstehe.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'In der nächsten Lektion trainieren wir den ersten Texttyp: **kurze Texte & Durchsagen** — Bahnhof, Supermarkt, Anrufbeantworter. Dort wartet der Klassiker: *halb zehn* ist **9.30 Uhr** — nicht 10.30!',
    },
  ],
}
