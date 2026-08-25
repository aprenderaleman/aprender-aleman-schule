// Lektion 37 · Prüfungssimulation 2 + Strategien
//
// Bloque 4 «Prüfungssimulation» — segundo simulacro y CIERRE DEL CURSO A1.
// Las Übungen son el simulacro (Lesen: Schilder · Sprechen Teil 1 ·
// Schreiben Teil 1 Formular); el Prüfungsbezug es el plan de los últimos
// 7 días + checklist del día del examen (con el Antwortbogen); el Abschluss
// es especial de fin de curso (Reparatur-Plan con números reales de
// blocks.js, Selbstcheck global, despedida con guiño al curso A2 en
// /deutscha2 — SIN lección siguiente).

export default {
  spec: ['Bloque 4', 'Prüfungssimulation', 'Niveau A1', 'Prüfungsrelevanz: die ganze Prüfung'],
  h1: 'Prüfungssimulation 2 + Strategien',
  lead: 'Die letzte Lektion ~~(la última lección del curso)~~: eine zweite Simulation — diesmal mit **Sprechen** —, der Plan für die letzten sieben Tage und die Checkliste für den Prüfungstag.',

  content: [
    // ── Lernziele ─────────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'die zweite Simulation machen: Schilder, Sprechen, Formular',
        'deine Vorstellung komplett vorbereiten — mit einem Modelltext von 40 Wörtern',
        'die letzten sieben Tage vor der Prüfung planen',
        'wissen, welche Lektion du bei welchem Fehler wiederholst',
      ],
    },

    { type: 'rule' },

    // ── Kernwortschatz ────────────────────────────────────────────
    {
      type: 'wortschatz',
      eyebrow: 'Kernwortschatz — der Prüfungstag',
      items: [
        { wort: 'der Ausweis, -e', kollokation: 'den Ausweis mitbringen', es: 'el documento de identidad' },
        { wort: 'das Schild, -er', kollokation: 'das Schild an der Tür lesen', es: 'el letrero' },
        { wort: 'das Formular, -e', kollokation: 'das Formular ausfüllen', es: 'el formulario' },
        { wort: 'die Gruppe, -n', kollokation: 'in der Gruppe sprechen', es: 'el grupo' },
        { wort: 'schaffen', kollokation: 'Du schaffst das!', es: 'conseguirlo, lograrlo' },
      ],
      hinweis: 'Die wichtigste Zahl: **60 Prozent** von der ganzen Prüfung. ~~No necesitas la perfección: puedes fallar y aun así aprobar.~~',
    },

    { type: 'rule' },

    // ── Erklärung ─────────────────────────────────────────────────
    {
      type: 'prose',
      eyebrow: 'Erklärung — was diesmal anders ist',
      card: true,
      titel: 'Die Generalprobe Nummer zwei',
      absaetze: [
        'Diesmal übst du auch das **Sprechen** — laut, nicht im Kopf. ~~Hablar en voz alta es el único entrenamiento que sirve para el examen oral.~~ Nimm dich mit dem Handy auf.',
        'Das Sprechen im A1 ist **in der Gruppe** — mehrere Kandidaten zusammen. Der Anfang ist immer deine **Vorstellung**: Die kannst du zu 100 Prozent vorbereiten.',
      ],
    },

    { type: 'rule' },

    // ── Beispiele ─────────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele — wenn es klemmt',
      items: [
        { text: '**Ein Wort ist unbekannt?** → Weiterlesen. Keine Aufgabe hängt an einem einzigen Wort.', gl: '— sigue leyendo, no te bloquees' },
        { text: '**Frage nicht verstanden?** → „Wie bitte? Können Sie das wiederholen?“ — das kostet keine Punkte.' },
        { text: '**Beim Sprechen:** langsam und in kurzen Sätzen — nicht auf Spanisch wechseln.' },
      ],
    },

    { type: 'rule' },

    // ── Übungen = die Simulation ──────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Anwendung — Übung 1 · Lesen',
      modul: 'Lesen · Schilder & Aushänge (ca. 8 Minuten)',
      titel: 'Simulation · Vier Schilder, vier Aufgaben',
      anweisung: 'Lies die vier Schilder. Dann kreuze an: **richtig oder falsch**? Timer auf 8 Minuten.',
      absaetze: [
        '**a)** *(an einer Tür)* „Geöffnet: Montag bis Freitag, 9–18 Uhr. Samstag geschlossen.“\n**b)** *(im Park)* „Fahrrad fahren verboten.“\n**c)** *(im Supermarkt)* „Heute: Äpfel, 1 Kilo nur 2 Euro.“\n**d)** *(am Bahnhof)* „Der Zug nach Berlin fährt heute von Gleis 5.“',
      ],
      optionen: [
        '1. Das Geschäft ist am Samstag geöffnet.',
        '2. Im Park darf man Fahrrad fahren.',
        '3. Ein Kilo Äpfel kostet heute zwei Euro.',
        '4. Der Zug nach Berlin fährt von Gleis 15.',
      ],
      loesungLabel: 'Lösung mit Textstelle',
      loesungen: [
        '1. **Falsch** — „Samstag **geschlossen**“.',
        '2. **Falsch** — „Fahrrad fahren **verboten**“.',
        '3. **Richtig** — „1 Kilo **nur 2 Euro**“.',
        '4. **Falsch** — „von Gleis **5**“ — nicht 15. ~~Ojo con los números parecidos: fünf / fünfzehn.~~',
      ],
      kommentar: 'Die kleinen Wörter entscheiden: **geschlossen**, **verboten**, **nur**.',
    },

    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Übung 2 · Sprechen',
      modul: 'Sprechen · Teil 1 · Sich vorstellen (in der Gruppe)',
      titel: 'Simulation · Deine Vorstellung',
      anweisung: 'In der Prüfung stellst du dich mit Stichwörtern vor ~~(te presentas siguiendo palabras clave)~~. Sprich deinen Text **laut und ohne Papier** — nimm dich mit dem Handy auf.',
      absaetze: [
        '**Deine Stichwörter:** Name? · Alter? · Land? · Wohnort? · Sprachen? · Beruf? · Hobby?',
      ],
      loesungLabel: 'Modelltext (genau 40 Wörter) — ersetze die Infos durch deine',
      loesungen: [
        'Ich heiße Diego. Ich bin 30 Jahre alt und komme aus Chile. Jetzt wohne ich in Berlin. Ich spreche Spanisch und ein bisschen Deutsch. Ich arbeite als Koch. Mein Hobby ist Fußball. Am Wochenende spiele ich mit Freunden im Park.',
      ],
      kommentar: 'Achtung: **Ich bin 30 Jahre alt** — nicht *Ich habe 30 Jahre*. Übe auch das **Buchstabieren** von deinem Namen und deine **Telefonnummer** — danach fragt die Prüferin oft.',
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 2 · Sprechen — Fragen aus der Gruppe',
      frage: 'Nach der Vorstellung stellen die anderen Kandidaten oft Fragen. Bereite je eine Antwort mit zwei Sätzen vor und sprich sie laut.',
      loesungLabel: 'Mögliche Antworten',
      aufgaben: [
        'Wo arbeitest du?',
        'Was machst du am Wochenende?',
      ],
      loesungen: [
        '„Ich arbeite in einem Restaurant in Berlin. Die Arbeit macht Spaß.“',
        '„Am Samstag spiele ich Fußball im Park. Am Sonntag koche ich für meine Familie.“',
      ],
    },

    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Übung 3 · Schreiben',
      modul: 'Schreiben · Teil 1 · Formular ausfüllen (ca. 8 Minuten)',
      titel: 'Simulation · Ein Formular für Ana',
      anweisung: 'Lies die Situation und ergänze die **fünf Informationen** im Formular. Schreib nur Wörter, keine Sätze.',
      absaetze: [
        '**Situation:** Deine Freundin **Ana Torres** möchte einen Deutschkurs machen. Sie kommt aus Spanien und wohnt jetzt in der Gartenstraße 12 in Köln. Sie arbeitet am Vormittag — sie möchte den Kurs am Abend machen. Hilf ihr mit dem Formular.',
        '**Anmeldung — Sprachschule Köln**\nFamilienname: {1}\nVorname: {2}\nLand: {3}\nStraße: Gartenstraße 12\nWohnort: {4}\nKurszeit (Vormittag / Abend): {5}',
      ],
      loesungLabel: 'Lösung',
      loesungen: [
        '{1} **Torres**',
        '{2} **Ana**',
        '{3} **Spanien**',
        '{4} **Köln** — der Wohnort ist die Stadt, nicht die Straße ~~(Wohnort = ciudad)~~',
        '{5} **Abend** — „sie möchte den Kurs am Abend machen“',
      ],
      kommentar: 'Alle Infos stehen im Text — du musst nichts erfinden. Am Ende kontrollieren: Steht in jedem Feld etwas?',
    },

    { type: 'rule' },

    // ── Prüfungsbezug: die letzten 7 Tage + der Prüfungstag ───────
    {
      type: 'tabelle',
      eyebrow: 'Prüfungsbezug — die letzten sieben Tage',
      kopf: ['Tag', 'Das machst du'],
      zeilen: [
        ['Tag 7', 'diese Simulation komplett — mit Timer'],
        ['Tag 6', 'Korrektur mit den drei Kontrollfragen (Lektion 36); Fehler notieren'],
        ['Tag 5', 'dein schwächster Teil: eine Lektion aus dem Plan unten wiederholen'],
        ['Tag 4', 'Schreiben: Formular + kurzer Text (~30 Wörter) in 20 Minuten'],
        ['Tag 3', 'Sprechen: deine Vorstellung laut üben, aufnehmen, anhören'],
        ['Tag 2', 'nur Wiederholung: Wortschatz, Fehlerliste — nichts Neues lernen'],
        ['Tag 1', 'ausruhen, Ausweis bereitlegen, früh schlafen'],
      ],
    },
    {
      type: 'steps',
      eyebrow: 'Prüfungsbezug — Checkliste für den Prüfungstag',
      steps: [
        {
          badge: 'Vorabend',
          titel: 'Alles bereitlegen',
          text: '__Ausweis__, Anmeldebestätigung, Stifte, Wasser. Den Weg zum Prüfungszentrum prüfen.',
        },
        {
          badge: 'Morgens',
          titel: 'Routine statt Panik',
          text: 'Normal frühstücken, __nichts Neues lernen__, früh losfahren.',
        },
        {
          badge: 'In der Prüfung',
          titel: 'Ruhig arbeiten',
          text: 'Auf die Aufsicht hören ~~(sigue las instrucciones del examinador)~~, __kein Feld leer lassen__ — und die Antworten rechtzeitig auf den __Antwortbogen__ übertragen.',
        },
        {
          badge: 'Danach',
          titel: 'Loslassen',
          text: 'Nicht grübeln ~~(no le des más vueltas)~~: Bestanden bist du ab __60 Prozent von der ganzen Prüfung__.',
        },
      ],
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Das Goethe-Zertifikat A1 ist **eine** Prüfung: Ein schwacher Teil ist kein Drama — die anderen Teile helfen dir. Du brauchst **60 Prozent, nicht die Perfektion**.',
    },

    { type: 'rule' },

    // ── Abschluss: Kursende ───────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung — dein Reparatur-Plan',
      kopf: ['Wenn dieser Fehler bleibt …', 'dann wiederhole …'],
      zeilen: [
        ['sein, haben, Verben im Präsens · Fragen stellen', 'Lektionen 4–7'],
        ['der/die/das · den/einen · nicht/kein · mein/dein', 'Lektionen 8–11'],
        ['können, möchten, müssen · trennbare Verben', 'Lektionen 12–13'],
        ['Imperativ · Plural · Zahlen, Uhrzeit, Datum', 'Lektionen 14–16'],
        ['Hören: Gespräche, Ansagen, Durchsagen', 'Lektionen 17–19'],
        ['Lesen: Notizen, Anzeigen, Schilder', 'Lektionen 20–22'],
        ['Schreiben: Formular + kurzer Text', 'Lektionen 23–25'],
        ['Sprechen: vorstellen, fragen, bitten', 'Lektionen 26–29'],
        ['Wörter zu einem Thema fehlen', 'Lektionen 30–35'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck — der ganze Kurs',
      items: [
        'Hören: Ich verstehe kurze Gespräche, Ansagen und Durchsagen.',
        'Lesen: Ich verstehe Notizen, Anzeigen und Schilder.',
        'Schreiben: Ich fülle ein Formular aus und schreibe einen kurzen Text (~30 Wörter) mit Anrede und Gruß.',
        'Sprechen: Ich stelle mich vor, stelle Fragen und formuliere Bitten — in der Gruppe.',
        'Ich weiß, welche Lektion ich bei welchem Fehler wiederhole.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick — zum Abschluss',
      text: 'Hier endet der Kurs — **37 Lektionen, ein Ziel: das Goethe-Zertifikat A1**, dein **erstes Zertifikat auf Deutsch**. Herzlichen Glückwunsch! ~~¡Enhorabuena — tu primer certificado de alemán!~~ Vor ein paar Wochen konntest du kein Wort — heute stellst du dich vor, schreibst Nachrichten und verstehst Schilder. Melde dich jetzt zur Prüfung an, solange alles frisch ist. Der nächste Schritt ist das **Niveau A2** — mit Perfekt, Dativ und viel mehr Alltag. Auf Aprender-Aleman.de wartet unser **Deutsch-A2-Kurs** (unter /deutscha2) auf dich. **Viel Erfolg am Prüfungstag — du schaffst das!**',
    },
  ],
}
