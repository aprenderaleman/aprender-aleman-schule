// Lektion 40 · Prüfungssimulation 2 + Strategien
//
// Bloque 4 «Prüfungssimulation» — segundo simulacro y CIERRE DEL CURSO A2.
// Las Übungen son el simulacro (Lesen: Anzeigen zuordnen · Sprechen Teil 2 ·
// Schreiben Teil 2); el Prüfungsbezug es el plan de los últimos 7 días +
// checklist del día del examen; el Abschluss es especial de fin de curso
// (Reparatur-Plan con números reales de blocks.js, Selbstcheck global,
// despedida con guiño al curso B1 en /deutschb1 — SIN lección siguiente).

export default {
  spec: ['Bloque 4', 'Prüfungssimulation', 'Niveau A2', 'Prüfungsrelevanz: die ganze Prüfung'],
  h1: 'Prüfungssimulation 2 + Strategien',
  lead: 'Die letzte Lektion: eine zweite Simulation — diesmal mit **Sprechen** —, der Plan für die letzten sieben Tage und die Checkliste für den Prüfungstag. ~~La recta final.~~',

  content: [
    // ── Lernziele ─────────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'die zweite Simulation machen: Anzeigen zuordnen, Sprechen, E-Mail',
        'in Sprechen Teil 2 von dir erzählen — mit einem Modelltext von 50 Wörtern',
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
        { wort: 'die Anmeldung, -en', kollokation: 'die Anmeldung früh machen', es: 'la inscripción' },
        { wort: 'der Ausweis, -e', kollokation: 'den Ausweis mitbringen', es: 'el documento de identidad' },
        { wort: 'die Aufsicht', kollokation: 'auf die Aufsicht hören', es: 'la persona que vigila el examen' },
        { wort: 'die Checkliste, -n', kollokation: 'die Checkliste am Abend vorher lesen', es: 'la lista de control' },
        { wort: 'sich ausruhen', kollokation: 'sich am Tag davor ausruhen', es: 'descansar' },
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
        'Diesmal übst du auch das **Sprechen** — laut, nicht im Kopf. Nimm dich mit dem Handy auf und höre die Aufnahme an. ~~Hablar en voz alta es el único entrenamiento que sirve para el examen oral.~~',
        'Der Ablauf: erst **Lesen und Schreiben am Stück** mit Timer, danach das **Sprechen** ohne Papier. Die Korrektur kommt am nächsten Tag — wieder mit den **drei Kontrollfragen** aus Lektion 39.',
      ],
    },

    { type: 'rule' },

    // ── Beispiele ─────────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele — wenn es klemmt',
      items: [
        { text: '**Ein Wort ist unbekannt?** → Weiterlesen. Keine Aufgabe hängt an einem einzigen Wort.' },
        { text: '**Ein Wort fehlt beim Sprechen?** → Beschreib es einfach: *das Ding für …* — und weiter im Satz.', gl: '— describe la palabra, no cambies al español' },
        { text: '**Frage nicht verstanden?** → „Können Sie das bitte wiederholen?“ — das kostet keine Punkte.' },
      ],
    },

    { type: 'rule' },

    // ── Übungen = die Simulation ──────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Anwendung — Übung 1 · Lesen',
      modul: 'Lesen · Anzeigen zuordnen (ca. 10 Minuten)',
      titel: 'Simulation · 3 Personen, 5 Anzeigen',
      anweisung: 'Welche Anzeige passt zu welcher Person? Jede Person passt zu **genau einer** Anzeige; zwei Anzeigen bleiben übrig. Timer auf 10 Minuten.',
      absaetze: [
        '**Die Personen:**\n1. Pedro sucht einen Tisch und vier Stühle. Er hat wenig Geld.\n2. Julia möchte am Samstag mit ihren Kindern etwas machen.\n3. Omar möchte schwimmen lernen.',
        '**Die Anzeigen:**\n**a)** Möbelhaus Meyer: neue Tische und Stühle ab 800 Euro — Lieferung kostenlos.\n**b)** Verkaufe Tisch und vier Stühle, gebraucht, guter Zustand — zusammen nur 40 Euro.\n**c)** Schwimmkurs für Erwachsene im Hallenbad — dienstags um 19 Uhr, Anfänger willkommen.\n**d)** Kinderfest im Stadtpark — Samstag ab 14 Uhr, Spiele und Musik, Eintritt frei.\n**e)** Fußballtraining für Kinder — montags und mittwochs um 17 Uhr.',
      ],
      optionen: [
        '1. Pedro → ?',
        '2. Julia → ?',
        '3. Omar → ?',
      ],
      loesungLabel: 'Lösung mit Begründung',
      loesungen: [
        '1. **b** — „gebraucht … zusammen nur 40 Euro“: billig. Falle a: neue Möbel „ab 800 Euro“ — zu teuer.',
        '2. **d** — „Samstag … Spiele und Musik, Eintritt frei“. Falle e: Das Training ist montags und mittwochs — nicht am Samstag.',
        '3. **c** — „Schwimmkurs für Erwachsene … Anfänger willkommen“.',
        'Übrig bleiben **a** und **e** — sie sehen ähnlich aus, aber ein Detail passt nicht: Preis oder Tag.',
      ],
      kommentar: 'Die Methode: Markiere in jeder Person das **Schlüsselwort** ~~(la palabra clave: barato, sábado, aprender a nadar)~~ und such in den Anzeigen das passende Detail.',
    },

    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Übung 2 · Sprechen',
      modul: 'Sprechen · Teil 2 · Von sich erzählen',
      titel: 'Simulation · Dein Text über dich',
      anweisung: 'In der Prüfung erzählst du zu Stichwörtern etwas über dich. Sprich deinen Text **laut und ohne Papier** — nimm dich mit dem Handy auf.',
      absaetze: [
        '**Deine Stichwörter:** Name? · Alter? · Land? · Wohnort? · Arbeit? · Familie? · Hobby?',
      ],
      loesungLabel: 'Modelltext (genau 50 Wörter) — ersetze die Infos durch deine',
      loesungen: [
        'Ich heiße Marta und ich bin 28 Jahre alt. Ich komme aus Spanien, aus Sevilla. Jetzt wohne ich in Hamburg. Ich arbeite in einem Restaurant. Die Arbeit macht Spaß. Meine Familie ist klein: meine Eltern und ein Bruder. Mein Hobby ist Musik. Am Wochenende koche ich gern für meine Freunde.',
      ],
      kommentar: 'Sprich langsam und in kurzen Sätzen. Achtung: **Ich bin 28 Jahre alt** — nicht *Ich habe 28 Jahre*. ~~«Tengo 28 años» no se traduce literal.~~',
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 2 · Sprechen — Fragen antizipieren',
      frage: 'Nach deinem Text stellt die Prüferin oft Fragen. Bereite je eine Antwort mit zwei Sätzen vor und sprich sie laut.',
      loesungLabel: 'Mögliche Antworten',
      aufgaben: [
        'Was machen Sie am Wochenende?',
        'Seit wann lernen Sie Deutsch?',
      ],
      loesungen: [
        '„Am Samstag koche ich für meine Freunde. Am Sonntag gehe ich schwimmen oder sehe einen Film.“',
        '„Ich lerne seit einem Jahr Deutsch. Ich brauche Deutsch für meine Arbeit.“',
      ],
    },

    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Übung 3 · Schreiben',
      modul: 'Schreiben · Teil 2 · E-Mail (~35 Wörter, ca. 15 Minuten)',
      titel: 'Simulation · Eine E-Mail an die Kursleiterin',
      anweisung: 'Schreib zu **allen drei Punkten** einen Satz. Denk an Anrede und Gruß. Korrigiere danach mit den drei Kontrollfragen aus Lektion 39.',
      absaetze: [
        'Deine Kursleiterin, Frau Berger, macht am Samstag ein Fest für den Deutschkurs. Schreib ihr eine E-Mail (ca. 35 Wörter): **Bedanke dich für die Einladung** · **sage zu** ~~(confirma que vas)~~ · **frage, was du mitbringen kannst**.',
      ],
      loesungLabel: 'Mögliche Lösung (genau 35 Wörter)',
      loesungen: [
        'Liebe Frau Berger,',
        'vielen Dank für die Einladung zum Kursfest! Ich komme sehr gern, weil ich alle aus dem Kurs sehen möchte. Was kann ich mitbringen? Ich mache gern einen frischen Salat.',
        'Viele Grüße\nMarta',
      ],
      kommentar: 'Andere Inhalte sind auch richtig. Wichtig: alle drei Punkte, ungefähr 35 Wörter — und die richtige Anrede: **Liebe Frau Berger**, nicht nur *Hallo*.',
    },

    { type: 'rule' },

    // ── Prüfungsbezug: die letzten 7 Tage + der Prüfungstag ───────
    {
      type: 'tabelle',
      eyebrow: 'Prüfungsbezug — die letzten sieben Tage',
      kopf: ['Tag', 'Das machst du'],
      zeilen: [
        ['Tag 7', 'diese Simulation komplett — mit Timer'],
        ['Tag 6', 'Korrektur mit den drei Kontrollfragen; Fehler notieren'],
        ['Tag 5', 'dein schwächster Teil: eine Lektion aus dem Plan unten wiederholen'],
        ['Tag 4', 'Schreiben: Teil 1 und Teil 2 noch einmal — in 30 Minuten'],
        ['Tag 3', 'Sprechen: deinen Text laut üben, aufnehmen, anhören'],
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
          text: '__Ausweis__, Anmeldebestätigung, Wasser, Snack. Den Weg zum Prüfungszentrum prüfen.',
        },
        {
          badge: 'Morgens',
          titel: 'Routine statt Panik',
          text: 'Normal frühstücken, __nichts Neues lernen__, früh losfahren.',
        },
        {
          badge: 'In der Prüfung',
          titel: 'Ruhig arbeiten',
          text: 'Auf die Aufsicht hören, die Zeit im Blick behalten — und __kein Feld leer lassen__.',
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
      text: 'Das Goethe-Zertifikat A2 ist **eine** Prüfung: Ein schwacher Teil ist kein Drama — die anderen Teile helfen dir. Du brauchst **60 Prozent, nicht die Perfektion**.',
    },

    { type: 'rule' },

    // ── Abschluss: Kursende ───────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung — dein Reparatur-Plan',
      kopf: ['Wenn dieser Fehler bleibt …', 'dann wiederhole …'],
      zeilen: [
        ['Perfekt: haben oder sein', 'Lektion 4'],
        ['war, hatte + Modalverben', 'Lektionen 5–6'],
        ['Akkusativ, Dativ, Wo?/Wohin?', 'Lektionen 8–10'],
        ['mein, dein … / mich, mir', 'Lektionen 11–12'],
        ['Verb nicht auf Position 2 · Verb nach weil nicht am Ende', 'Lektionen 14–15'],
        ['Lesen: zu langsam, Anzeigen-Fallen', 'Lektionen 18–20'],
        ['Hören: Details verpasst', 'Lektionen 21–23'],
        ['Schreiben: Punkte, Anrede, Wörterzahl', 'Lektionen 24–26'],
        ['Sprechen: fragen, erzählen, planen', 'Lektionen 27–30'],
        ['Wörter zu einem Thema fehlen', 'Lektionen 31–38'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck — der ganze Kurs',
      items: [
        'Lesen: Ich verstehe kurze Texte, E-Mails und Anzeigen.',
        'Hören: Ich verstehe Durchsagen und einfache Gespräche.',
        'Schreiben: Ich schreibe eine Mitteilung (~25 Wörter) und eine E-Mail (~35 Wörter) mit Anrede und Gruß.',
        'Sprechen: Ich stelle Fragen, erzähle von mir und plane etwas mit einem Partner.',
        'Ich weiß, welche Lektion ich bei welchem Fehler wiederhole.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick — zum Abschluss',
      text: 'Hier endet der Kurs — **40 Lektionen, ein Ziel: das Goethe-Zertifikat A2**. Herzlichen Glückwunsch! ~~¡Enhorabuena por llegar hasta aquí!~~ Melde dich jetzt zur Prüfung an, solange alles frisch ist. Und danach? Bleib jeden Tag ein bisschen beim Deutschen: ein Lied, eine Serie mit Untertiteln, ein kurzes Video. Der nächste Schritt ist das **Niveau B1** — damit kannst du in Deutschland arbeiten und leben. Auf Aprender-Aleman.de wartet unser **Deutsch-B1-Kurs** (unter /deutschb1) auf dich. **Viel Erfolg am Prüfungstag — du schaffst das!**',
    },
  ],
}
