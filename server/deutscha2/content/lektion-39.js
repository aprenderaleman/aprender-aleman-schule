// Lektion 39 · Prüfungssimulation 1 + Korrektur
//
// Bloque 4 «Prüfungssimulation» — primer simulacro A2 autocorregible.
// Las tres «Übungen» SON el simulacro (Lesen · Hören · Schreiben Teil 1);
// el Prüfungsbezug enseña la autocorrección con 3 preguntas de control y
// un texto de alumno con 4 errores A2 típicos comentados.

export default {
  spec: ['Bloque 4', 'Prüfungssimulation', 'Niveau A2', 'Prüfungsrelevanz: die ganze Prüfung'],
  h1: 'Prüfungssimulation 1 + Korrektur',
  lead: 'Deine erste Generalprobe ~~(tu ensayo general)~~: drei Aufgaben wie in der Prüfung — **Lesen, Hören, Schreiben**. Danach korrigierst du dich selbst.',

  content: [
    // ── Lernziele ─────────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'eine kleine Simulation zu Hause machen: mit Timer, ohne Wörterbuch',
        'je eine Aufgabe aus Lesen, Hören und Schreiben lösen',
        'deine Mitteilung mit drei Kontrollfragen selbst korrigieren',
        'vier typische Fehler von Spanischsprechern erkennen',
      ],
    },

    { type: 'rule' },

    // ── Kernwortschatz ────────────────────────────────────────────
    {
      type: 'wortschatz',
      eyebrow: 'Kernwortschatz — die Simulation',
      items: [
        { wort: 'die Generalprobe', kollokation: 'eine Generalprobe zu Hause machen', es: 'el ensayo general' },
        { wort: 'der Timer', kollokation: 'den Timer auf 30 Minuten stellen', es: 'el temporizador' },
        { wort: 'ankreuzen', kollokation: 'die richtige Antwort ankreuzen', es: 'marcar (con una cruz)' },
        { wort: 'die Lösung, -en', kollokation: 'die Lösung erst am Ende lesen', es: 'la solución' },
        { wort: 'der Fehler, -', kollokation: 'einen Fehler finden und korrigieren', es: 'el error' },
        { wort: 'die Korrektur', kollokation: 'die Korrektur am nächsten Tag machen', es: 'la corrección' },
      ],
      hinweis: 'Es gibt **keine Minuspunkte** ~~(no restan puntos por fallar)~~ — kreuze immer etwas an. Ein leeres Feld ist null Punkte.',
    },

    { type: 'rule' },

    // ── Erklärung ─────────────────────────────────────────────────
    {
      type: 'prose',
      eyebrow: 'Erklärung — die Simulation zu Hause',
      card: true,
      titel: 'Wie in der Prüfung — sonst hilft es nicht',
      absaetze: [
        'Heute lernst du nichts Neues — du testest, was du schon kannst. Die Bedingungen müssen **ehrlich** sein ~~(sin trucos, o la nota te engaña)~~: Timer sichtbar, kein Wörterbuch, kein Handy. Die Lösungen liest du erst am Ende.',
        'Wichtig: Das Zertifikat A2 ist **eine** Prüfung — nicht modular wie das B1. Du bestehst ab **60 Prozent von der ganzen Prüfung**. Ein schwacher Teil ist also kein Drama.',
      ],
    },
    {
      type: 'tabelle',
      eyebrow: 'Erklärung — die vier Teile und ihre Zeit',
      kopf: ['Teil', 'Zeit', 'So übst du zu Hause'],
      zeilen: [
        ['Lesen', 'ca. 30 Min.', 'Timer stellen, nichts nachschlagen'],
        ['Hören', 'ca. 30 Min.', 'mit Kopfhörern; Transkripte vorlesen lassen oder aufnehmen'],
        ['Schreiben', 'ca. 30 Min.', 'Teil 1 (~25 Wörter) + Teil 2 (~35 Wörter), ohne Pause'],
        ['Sprechen', 'ca. 15 Min.', 'laut, mit Partner oder Handy — kommt in Lektion 40'],
      ],
    },

    { type: 'rule' },

    // ── Beispiele ─────────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele — Fehler, die Punkte kosten',
      items: [
        { text: '*Ich ==habe== 25 Jahre.* → *Ich **bin** 25 Jahre **alt**.*', gl: '— «tengo 25 años» no se traduce con haben' },
        { text: '*Der Film ==gefällt ich==.* → *Der Film **gefällt mir**.*', gl: '— «me gusta» = gefällt + Dativ (Lektion 12)' },
        { text: '*Ich habe ==nicht== Auto.* → *Ich habe **kein** Auto.*', gl: '— kein delante de sustantivo' },
      ],
    },

    { type: 'rule' },

    // ── Übungen = die Simulation ──────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Anwendung — Übung 1 · Lesen',
      modul: 'Lesen · E-Mail, richtig oder falsch (ca. 10 Minuten)',
      titel: 'Simulation · Eine E-Mail, vier Aufgaben',
      anweisung: 'Lies die E-Mail. Dann kreuze an: **richtig oder falsch**? Timer auf 10 Minuten, nichts nachschlagen.',
      absaetze: [
        '**Sofias E-Mail** *(ca. 90 Wörter)*',
        'Liebe Carmen,\ndanke für deine E-Mail! Endlich habe ich Zeit für eine Antwort. Seit zwei Wochen habe ich einen neuen Job in einem kleinen Supermarkt. Ich arbeite am Vormittag, von acht bis eins. Die Arbeit ist okay, aber ich muss sehr früh aufstehen. Meine Kollegen sind nett, und meine Chefin hilft mir oft, weil mein Deutsch noch nicht perfekt ist.\nAm Samstag habe ich frei. Willst du mit mir ins Schwimmbad gehen? Danach können wir bei mir Pizza essen und Musik hören. Antworte mir bitte bis Freitag!\nLiebe Grüße\nSofia',
      ],
      optionen: [
        '1. Sofia arbeitet am Nachmittag.',
        '2. Sofia muss sehr früh aufstehen.',
        '3. Die Chefin ist unfreundlich zu Sofia.',
        '4. Sofia möchte am Samstag ins Schwimmbad gehen.',
      ],
      loesungLabel: 'Lösung mit Textstelle',
      loesungen: [
        '1. **Falsch** — „Ich arbeite am **Vormittag**, von acht bis eins.“',
        '2. **Richtig** — „ich muss sehr früh aufstehen“.',
        '3. **Falsch** — „meine Chefin **hilft mir oft**“ — das Gegenteil.',
        '4. **Richtig** — „Am Samstag habe ich frei. Willst du mit mir ins Schwimmbad gehen?“',
      ],
      kommentar: 'Entscheide immer mit der **Textstelle**, nie mit dem Gefühl. ~~Busca la frase exacta en el texto antes de marcar.~~',
    },

    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Übung 2 · Hören',
      modul: 'Hören · Durchsage (ca. 5 Minuten)',
      titel: 'Simulation · Eine Durchsage, drei Aufgaben',
      anweisung: 'Lies **zuerst** die drei Aufgaben. Dann lass dir das Transkript vorlesen — oder nimm es auf und höre es mit Kopfhörern. Kreuze an: a, b oder c.',
      absaetze: [
        '**Transkript** ~~(en el examen: audio)~~ *(ca. 60 Wörter)*: Liebe Kundinnen und Kunden, herzlich willkommen! Heute haben wir ein besonderes Angebot: Alle Getränke kosten nur die Hälfte. Sie finden das Angebot im ersten Stock, direkt neben der Kasse. Unsere Bäckerei ist heute bis 20 Uhr geöffnet. Brot und Kuchen bekommen Sie im Erdgeschoss. Und denken Sie daran: Am Sonntag bleibt unser Geschäft geschlossen. Wir wünschen Ihnen einen schönen Einkauf!',
      ],
      optionen: [
        '1. Was ist heute billiger? — a) Brot · b) Getränke · c) Kuchen',
        '2. Die Bäckerei ist heute … geöffnet. — a) bis 18 Uhr · b) bis 20 Uhr · c) nur am Vormittag',
        '3. Am Sonntag ist das Geschäft … — a) geöffnet · b) nur am Vormittag geöffnet · c) geschlossen',
      ],
      loesungLabel: 'Lösung mit Begründung',
      loesungen: [
        '1. **b** — „Alle **Getränke** kosten nur die Hälfte.“',
        '2. **b** — „Unsere Bäckerei ist heute **bis 20 Uhr** geöffnet.“',
        '3. **c** — „Am Sonntag bleibt unser Geschäft **geschlossen**.“',
      ],
      kommentar: 'Kleine Wörter entscheiden: **nur**, **bis**, **geschlossen**. Markiere vor dem Hören, worauf du hören musst: Was? Wann? Wo?',
    },

    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Übung 3 · Schreiben',
      modul: 'Schreiben · Teil 1 · Kurze Mitteilung (~25 Wörter, ca. 12 Minuten)',
      titel: 'Simulation · Eine Mitteilung an Paulo',
      anweisung: 'Schreib zu **allen drei Punkten** einen Satz. Denk an Anrede und Gruß ~~(saludo y despedida)~~.',
      absaetze: [
        'Du kannst heute nicht zum Fußballtraining kommen. Schreib deinem Freund Paulo eine kurze Mitteilung (ca. 25 Wörter): **Entschuldige dich** · **nenne den Grund** · **schlage einen neuen Tag vor**.',
      ],
      loesungLabel: 'Mögliche Lösung (genau 25 Wörter)',
      loesungen: [
        'Hallo Paulo,',
        'leider kann ich heute nicht zum Training kommen, weil ich sehr krank bin. Können wir vielleicht am Samstag zusammen üben?',
        'Bis bald\nLuis',
      ],
      kommentar: 'Andere Inhalte sind auch richtig — wichtig: **alle drei Punkte**, Anrede, Gruß, ca. 25 Wörter.',
    },

    { type: 'rule' },

    // ── Prüfungsbezug: die Selbstkorrektur ────────────────────────
    {
      type: 'steps',
      eyebrow: 'Prüfungsbezug — deine drei Kontrollfragen',
      steps: [
        {
          titel: 'Versteht man alles?',
          text: 'Lies deinen Text langsam. __Kurze Sätze__ sind besser als lange Sätze mit Fehlern.',
        },
        {
          titel: 'Sind alle Punkte da?',
          text: 'Zu jedem Punkt der Aufgabe __ein Satz__ — plus Anrede und Gruß.',
        },
        {
          titel: 'Stimmt die Form?',
          text: '__Verb auf Position 2__ ~~(el verbo en segunda posición)~~, Nomen groß, Punkt am Satzende.',
        },
      ],
    },
    {
      type: 'modell',
      eyebrow: 'Prüfungsbezug — korrigierter Lernertext',
      thema: 'Eine Mitteilung zum selben Thema — mit vier typischen Fehlern von Spanischsprechern',
      woerter: 'ca. 30 Wörter · Fehler ==markiert==, darunter korrigiert',
      absaetze: [
        'Hallo Paulo, ==heute ich kann== nicht zum Training kommen. Ich bin krank und habe ==fieber==. Ist ==der Training== am Samstag okay? Ich ==habe== zu Hause ==geblieben==. Bis bald, Luis',
      ],
      annotationen: [
        { tag: 'Verb auf Position 2', text: 'Nach *heute* kommt sofort das Verb: **„Heute kann ich nicht zum Training kommen.“** ~~En español el orden no cambia; en alemán, siempre.~~' },
        { tag: 'Großschreibung', text: 'Nomen schreibt man groß ~~(los sustantivos siempre con mayúscula)~~: **„Ich habe Fieber.“**' },
        { tag: 'Genus', text: '*das Training* ist neutral: **„Ist das Training am Samstag okay?“** Lern den Artikel immer mit dem Wort.' },
        { tag: 'Perfekt mit sein', text: '*bleiben* bildet das Perfekt mit *sein*: **„Ich bin zu Hause geblieben.“** (Lektion 4)' },
      ],
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Reserviere beim Schreiben die **letzten zwei Minuten** für die drei Kontrollfragen. Zwei korrigierte Fehler können den Unterschied machen.',
    },

    { type: 'rule' },

    // ── Abschluss ─────────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Das bleibt', 'Konkret'],
      zeilen: [
        ['Ehrliche Simulation', 'Timer, kein Wörterbuch, kein Handy'],
        ['Eine Prüfung', 'nicht modular — bestanden ab 60 Prozent vom Ganzen'],
        ['Kein Feld bleibt leer', 'immer ankreuzen: Es gibt keine Minuspunkte'],
        ['Drei Kontrollfragen', 'Versteht man alles? Alle Punkte? Position 2 + Großschreibung?'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich habe die drei Aufgaben mit Timer und ohne Wörterbuch gelöst.',
        'Ich habe meine Mitteilung mit den drei Kontrollfragen geprüft.',
        'Ich erkenne die vier typischen Fehler: Position 2, Großschreibung, Genus, Perfekt mit sein.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Jetzt weißt du, wo du stehst. In der letzten Lektion kommt **Simulation 2**: Anzeigen zuordnen, das Sprechen über dich und die E-Mail aus Schreiben Teil 2 — plus der Plan für die letzten sieben Tage und die Checkliste für den Prüfungstag.',
    },
  ],
}
