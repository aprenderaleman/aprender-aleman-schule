// Lektion 36 · Prüfungssimulation 1 + Korrektur
//
// Bloque 4 «Prüfungssimulation» — primer simulacro A1 autocorregible.
// Las tres «Übungen» SON el simulacro (Hören · Lesen · Schreiben Teil 2);
// el Prüfungsbezug enseña la autocorrección mínima (3 preguntas de control)
// y un texto de alumno con 3 errores A1 típicos comentados.

export default {
  spec: ['Bloque 4', 'Prüfungssimulation', 'Niveau A1', 'Prüfungsrelevanz: die ganze Prüfung'],
  h1: 'Prüfungssimulation 1 + Korrektur',
  lead: 'Deine erste Generalprobe ~~(tu primer ensayo general)~~: drei kleine Aufgaben wie in der Prüfung — **Hören, Lesen, Schreiben**. Danach korrigierst du dich selbst.',

  content: [
    // ── Lernziele ─────────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'eine Mini-Simulation zu Hause machen: mit Timer, ohne Wörterbuch',
        'je eine Aufgabe aus Hören, Lesen und Schreiben lösen',
        'deinen Text mit drei Kontrollfragen selbst korrigieren',
        'drei typische Fehler von Spanischsprechern erkennen',
      ],
    },

    { type: 'rule' },

    // ── Kernwortschatz ────────────────────────────────────────────
    {
      type: 'wortschatz',
      eyebrow: 'Kernwortschatz — die Simulation',
      items: [
        { wort: 'der Timer', kollokation: 'den Timer auf 20 Minuten stellen', es: 'el temporizador' },
        { wort: 'ankreuzen', kollokation: 'richtig oder falsch ankreuzen', es: 'marcar (con una cruz)' },
        { wort: 'die Lösung, -en', kollokation: 'die Lösung erst am Ende lesen', es: 'la solución' },
        { wort: 'der Fehler, -', kollokation: 'einen Fehler finden und korrigieren', es: 'el error' },
        { wort: 'der Antwortbogen', kollokation: 'die Antworten auf den Antwortbogen schreiben', es: 'la hoja de respuestas' },
      ],
      hinweis: 'Es gibt **keine Minuspunkte** ~~(no restan puntos por fallar)~~ — kreuze immer etwas an.',
    },

    { type: 'rule' },

    // ── Erklärung ─────────────────────────────────────────────────
    {
      type: 'prose',
      eyebrow: 'Erklärung — die Simulation zu Hause',
      card: true,
      titel: 'Wie in der Prüfung — sonst hilft es nicht',
      absaetze: [
        'Heute lernst du nichts Neues — du testest, was du schon kannst. Die Bedingungen: **ehrlich** ~~(sin trucos, o la nota te engaña)~~ — Timer sichtbar, kein Wörterbuch, kein Handy. Die Lösungen liest du erst am Ende.',
        'Und denk an Lektion 2: Nur der **Antwortbogen** zählt ~~(solo cuenta la hoja de respuestas)~~. Übertrage deine Antworten **rechtzeitig**. Die genaue Zahl der Aufgaben zeigt dir der offizielle Modellsatz.',
      ],
    },
    {
      type: 'tabelle',
      eyebrow: 'Erklärung — die vier Teile und ihre Zeit',
      kopf: ['Teil', 'Zeit', 'So übst du zu Hause'],
      zeilen: [
        ['Hören', 'ca. 20 Min.', 'mit Kopfhörern; Transkripte vorlesen lassen oder aufnehmen'],
        ['Lesen', 'ca. 25 Min.', 'Timer stellen, nichts nachschlagen'],
        ['Schreiben', 'ca. 20 Min.', 'Teil 1 (Formular) + Teil 2 (~30 Wörter), ohne Pause'],
        ['Sprechen', 'ca. 15 Min.', 'in der Gruppe — kommt in Lektion 37'],
      ],
    },

    { type: 'rule' },

    // ── Beispiele ─────────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele — Fehler, die Punkte kosten',
      items: [
        { text: '*Ich ==habe== 30 Jahre.* → *Ich **bin** 30 Jahre **alt**.*', gl: '— «tengo 30 años» no se traduce con haben (Lektion 4)' },
        { text: '*==Bin== Lehrer.* → ***Ich** bin Lehrer.*', gl: '— en alemán el pronombre sujeto es obligatorio' },
        { text: '*Ich trinke ==kaffee==.* → *Ich trinke **Kaffee**.*', gl: '— los sustantivos siempre con mayúscula' },
      ],
    },

    { type: 'rule' },

    // ── Übungen = die Simulation ──────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Anwendung — Übung 1 · Hören',
      modul: 'Hören · Ansage am Telefon (ca. 5 Minuten)',
      titel: 'Simulation · Eine Ansage, drei Aufgaben',
      anweisung: 'Lies **zuerst** die drei Aufgaben. Dann lass dir das Transkript vorlesen — oder nimm es auf und höre es mit Kopfhörern. Kreuze an: a, b oder c.',
      absaetze: [
        '**Transkript** ~~(en el examen: audio)~~ *(ca. 40 Wörter)*: Guten Tag! Hier ist die Praxis von Doktor Weber. Unsere Praxis ist heute leider geschlossen. Sie erreichen uns morgen ab neun Uhr. Am Freitag ist die Praxis nur bis zwölf Uhr geöffnet. Vielen Dank für Ihren Anruf und auf Wiederhören!',
      ],
      optionen: [
        '1. Die Praxis ist heute … — a) geöffnet · b) geschlossen · c) nur am Vormittag geöffnet',
        '2. Morgen erreichen Sie die Praxis ab … — a) neun Uhr · b) zehn Uhr · c) zwölf Uhr',
        '3. Am Freitag ist die Praxis … geöffnet. — a) den ganzen Tag · b) nicht · c) nur bis zwölf Uhr',
      ],
      loesungLabel: 'Lösung mit Begründung',
      loesungen: [
        '1. **b** — „Unsere Praxis ist heute leider **geschlossen**.“',
        '2. **a** — „Sie erreichen uns morgen **ab neun Uhr**.“',
        '3. **c** — „Am Freitag ist die Praxis **nur bis zwölf Uhr** geöffnet.“',
      ],
      kommentar: 'Kleine Wörter entscheiden: **heute**, **morgen**, **nur bis**. Lies die Aufgaben **vor** dem Hören.',
    },

    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Übung 2 · Lesen',
      modul: 'Lesen · Notiz, richtig oder falsch (ca. 8 Minuten)',
      titel: 'Simulation · Eine Notiz, drei Aufgaben',
      anweisung: 'Lies die Notiz auf dem Küchentisch. Dann kreuze an: **richtig oder falsch**? Nichts nachschlagen.',
      absaetze: [
        '**Lenas Notiz** *(ca. 35 Wörter)*',
        'Hallo Maria,\nich bin bis 18 Uhr im Sprachkurs. Bitte kauf im Supermarkt Brot und Milch. Das Geld liegt auf dem Tisch. Am Abend kochen wir zusammen. Kommt deine Schwester auch?\nLiebe Grüße\nLena',
      ],
      optionen: [
        '1. Lena ist am Nachmittag zu Hause.',
        '2. Maria soll Brot und Milch kaufen.',
        '3. Das Geld liegt auf dem Stuhl.',
      ],
      loesungLabel: 'Lösung mit Textstelle',
      loesungen: [
        '1. **Falsch** — „ich bin **bis 18 Uhr im Sprachkurs**“ — sie ist nicht zu Hause.',
        '2. **Richtig** — „Bitte kauf im Supermarkt **Brot und Milch**.“',
        '3. **Falsch** — „Das Geld liegt auf dem **Tisch**“ — nicht auf dem Stuhl.',
      ],
      kommentar: 'Entscheide immer mit der **Textstelle**, nie mit dem Gefühl. ~~Busca la frase exacta en el texto antes de marcar.~~',
    },

    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Übung 3 · Schreiben',
      modul: 'Schreiben · Teil 2 · Kurzer persönlicher Text (~30 Wörter, ca. 12 Minuten)',
      titel: 'Simulation · Eine Nachricht an Sara',
      anweisung: 'Schreib zu **allen drei Punkten** einen Satz. Denk an Anrede und Gruß ~~(saludo y despedida)~~.',
      absaetze: [
        'Du machst am Samstag ein Picknick. Schreib deiner Freundin Sara eine kurze Nachricht (ca. 30 Wörter): **Lade Sara ein** · **sag, wann und wo** ~~(cuándo y dónde)~~ · **bitte sie: Sie soll etwas mitbringen**.',
      ],
      loesungLabel: 'Mögliche Lösung (genau 30 Wörter)',
      loesungen: [
        'Liebe Sara,',
        'ich mache am Samstag ein Picknick im Stadtpark. Wir essen zusammen um zwölf Uhr. Kommst du auch? Bringst du bitte einen Salat und Brot mit?',
        'Viele Grüße\nAna',
      ],
      kommentar: 'Andere Inhalte sind auch richtig — wichtig: **alle drei Punkte**, Anrede, Gruß, ca. 30 Wörter.',
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
          titel: 'Sind alle drei Punkte da?',
          text: 'Zu jedem Punkt der Aufgabe __ein Satz__ — plus Anrede und Gruß.',
        },
        {
          titel: 'Großschreibung?',
          text: '__Nomen schreibt man groß__ ~~(los sustantivos con mayúscula)~~, das Verb steht auf Position 2, am Satzende steht ein Punkt.',
        },
      ],
    },
    {
      type: 'modell',
      eyebrow: 'Prüfungsbezug — korrigierter Lernertext',
      thema: 'Eine Nachricht zum selben Thema — mit drei typischen Fehlern von Spanischsprechern',
      woerter: 'ca. 25 Wörter · Fehler ==markiert==, darunter korrigiert',
      absaetze: [
        'Hallo Sara, ==am Samstag ich mache== ein Picknick. ==Essen== um zwölf Uhr im Stadtpark. Kommst du auch? Bringst du bitte einen ==salat== mit? Viele Grüße Lucía',
      ],
      annotationen: [
        { tag: 'Verb auf Position 2', text: 'Nach *am Samstag* kommt sofort das Verb: **„Am Samstag mache ich ein Picknick.“** ~~En alemán el verbo siempre va en 2ª posición.~~ (Lektion 4)' },
        { tag: 'Pronomen ist Pflicht', text: '~~En alemán no se omite el sujeto:~~ **„Wir essen um zwölf Uhr im Stadtpark.“**' },
        { tag: 'Großschreibung', text: 'Nomen schreibt man groß: **„Bringst du bitte einen Salat mit?“** (Lektion 8)' },
      ],
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Reserviere beim Schreiben die **letzten zwei Minuten** für die drei Kontrollfragen — und vergiss den **Antwortbogen** nicht: Nur er zählt.',
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
        ['Der Antwortbogen', 'nur er zählt — Zeit zum Übertragen einplanen (Lektion 2)'],
        ['Drei Kontrollfragen', 'Versteht man alles? Alle Punkte? Großschreibung?'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich habe die drei Aufgaben mit Timer und ohne Wörterbuch gelöst.',
        'Ich habe meinen Text mit den drei Kontrollfragen geprüft.',
        'Ich erkenne die drei typischen Fehler: Position 2, Pronomen, Großschreibung.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Jetzt weißt du, wo du stehst. In der letzten Lektion kommt **Simulation 2**: Schilder, deine Vorstellung für das Sprechen in der Gruppe und das Formular aus Schreiben Teil 1 — plus der Plan für die letzten sieben Tage.',
    },
  ],
}
