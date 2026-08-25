// Lektion 42 · Prüfungssimulation 1 + Korrektur
//
// Bloque 4 «Prüfungssimulation» — primer simulacro B1 autocorregible.
// Esqueleto de 8 secciones adaptado: las tres «Übungen» SON el simulacro
// (Lesen · Hören · Schreiben Teil 1); el Prüfungsbezug enseña a corregirse
// con los 4 criterios en rúbrica simple y un texto de alumno comentado.

export default {
  spec: ['Bloque 4', 'Prüfungssimulation', 'Niveau B1', 'Prüfungsrelevanz: alle vier Module'],
  h1: 'Prüfungssimulation 1 + Korrektur',
  lead: 'Die erste Generalprobe: drei Aufgaben wie in der Prüfung — und danach der wichtigste Schritt: deine eigene Korrektur. ~~Hoy no aprendes nada nuevo: hoy compruebas lo que ya sabes.~~',

  content: [
    // ── Lernziele ─────────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'eine Simulation zu Hause unter realen Bedingungen machen: mit Timer, ohne Wörterbuch, wenn möglich digital',
        'je eine Aufgabe aus Lesen, Hören und Schreiben unter Zeitdruck lösen',
        'die eigene E-Mail mit den vier Kriterien bewerten',
        'typische Fehler von Spanischsprechern erkennen und eine Fehlerliste anlegen',
      ],
    },

    { type: 'rule' },

    // ── Kernwortschatz: die Sprache der Korrektur ─────────────────
    {
      type: 'wortschatz',
      eyebrow: 'Kernwortschatz — über Fehler sprechen',
      items: [
        { wort: 'die Generalprobe', kollokation: 'eine Generalprobe vor der Prüfung machen', es: 'el ensayo general' },
        { wort: 'die Bedingung, -en', kollokation: 'unter realen Bedingungen üben', es: 'la condición' },
        { wort: 'der Timer', kollokation: 'den Timer auf 20 Minuten stellen', es: 'el temporizador' },
        { wort: 'die Selbstkorrektur', kollokation: 'Zeit für die Selbstkorrektur einplanen', es: 'la autocorrección' },
        { wort: 'das Kriterium, -ien', kollokation: 'die vier Kriterien kennen', es: 'el criterio' },
        { wort: 'der Fehler, -', kollokation: 'einen Fehler finden und korrigieren', es: 'el error' },
        { wort: 'die Fehlerliste', kollokation: 'eine eigene Fehlerliste führen', es: 'la lista de errores propios' },
        { wort: 'die Verbstellung', kollokation: 'die Verbstellung prüfen', es: 'la posición del verbo' },
        { wort: 'das Genus', kollokation: 'das Genus mit dem Wort lernen: der, die, das', es: 'el género gramatical' },
        { wort: 'die Endung, -en', kollokation: 'die richtige Endung wählen', es: 'la terminación' },
        { wort: 'der falsche Freund', kollokation: 'auf falsche Freunde achten', es: 'el falso amigo' },
      ],
      hinweis: 'Wer seinen Fehler **benennen** kann ~~(«verbo al final tras weil», «género equivocado»)~~, korrigiert ihn schneller — und macht ihn seltener wieder.',
    },

    { type: 'rule' },

    // ── Erklärung: die Simulation zu Hause ────────────────────────
    {
      type: 'prose',
      eyebrow: 'Erklärung — die Generalprobe zu Hause',
      card: true,
      titel: 'Reale Bedingungen — sonst lügt die Note',
      absaetze: [
        'Eine Simulation zeigt dir, was einzelne Übungen verstecken: **Zeitnot** beim Lesen, ein Konzentrationsloch beim Hören, eine E-Mail ohne Schluss. Dafür müssen die Bedingungen **ehrlich** sein: ohne Wörterbuch, ohne Pause nach Lust und Laune, ohne Blick auf die Lösung. ~~Un simulacro «blando» te da una nota falsa.~~',
        'Und wenn möglich: **digital**, wie in Lektion 2 — am Bildschirm lesen, mit Kopfhörern hören, mit der Tastatur tippen und die **Rechtschreibkorrektur ausschalten**. So übst du das Format, in dem du wahrscheinlich geprüft wirst.',
      ],
    },
    {
      type: 'tabelle',
      eyebrow: 'Erklärung — die Module unter realen Bedingungen',
      kopf: ['Modul', 'Zeit', 'So simulierst du es'],
      zeilen: [
        ['Lesen', '65 Min. · 5 Teile', 'Timer sichtbar, Antworten notieren, nichts nachschlagen'],
        ['Hören', 'ca. 40 Min. · 4 Teile', 'mit Kopfhörern; jeden Text nur so oft hören wie erlaubt'],
        ['Schreiben', '60 Min. · 3 Teile', 'empfohlen: 20 + 25 + 15 Min. — tippen, ohne Rechtschreibkorrektur'],
        ['Sprechen', 'ca. 15 Min. · Paarprüfung', 'mit Partner oder Handy-Aufnahme — kommt in Lektion 43'],
      ],
    },
    {
      type: 'steps',
      eyebrow: 'Erklärung — drei Spielregeln',
      steps: [
        {
          titel: 'Zeit blocken, Handy aus',
          text: 'Reserviere einen ruhigen Vormittag. __Timer sichtbar__ auf dem Tisch, Tür zu.',
        },
        {
          titel: 'Kein Feld bleibt leer',
          text: 'Was du nicht weißt, kreuzt du trotzdem an — __ein leeres Feld ist immer null Punkte__, eine Vermutung nicht.',
        },
        {
          titel: 'Heute abgeben, morgen korrigieren',
          text: 'Nach der Simulation alles weglegen. Die Korrektur kommt __am nächsten Tag__ — mit frischem Blick, wie ein Prüfer.',
        },
      ],
    },

    { type: 'rule' },

    // ── Beispiele: typische B1-Fehler ─────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele — Fehler, die dich Punkte kosten',
      kicker: 'Wortstellung',
      titel: 'Das Verb an der falschen Stelle',
      items: [
        { text: '*Gestern ==ich habe== gearbeitet.* → *Gestern **habe ich** gearbeitet.*', gl: '— Verb auf Position 2, immer' },
        { text: '*…, weil ich ==habe== keine Zeit.* → *…, weil ich keine Zeit **habe**.*', gl: '— nach *weil, dass, wenn* geht das Verb ans Ende (Lektionen 4–5)' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'Typisch Spanisch',
      titel: 'Calcos und falsche Formen',
      items: [
        { text: '*Ich ==habe== 30 Jahre.* → *Ich **bin** 30 Jahre **alt**.*', gl: '— «tener años» no se traduce literal' },
        { text: '*Ich ==habe== nach Berlin ==gefahren==.* → *Ich **bin** nach Berlin gefahren.*', gl: '— Bewegung → Perfekt mit *sein* (Lektion 6)' },
        { text: '*Ich bin ==in die== Schule.* → *Ich bin **in der** Schule.*', gl: '— Wo? → Dativ (Lektion 8)' },
      ],
    },

    { type: 'rule' },

    // ── Übungen = die Simulation ──────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Anwendung — Übung 1 · Lesen',
      modul: 'Lesen · Blog, Stil Teil 1 (empfohlen: 10 Minuten)',
      titel: 'Simulation · Blog mit 5 Aufgaben',
      anweisung: 'Lies den Blog und entscheide bei jeder Aussage: **richtig oder falsch**? Timer auf 10 Minuten, nichts nachschlagen.',
      absaetze: [
        '**Mein Nebenjob im Café** ~~(blog de Sofia, ca. 180 palabras)~~',
        'Seit drei Monaten arbeite ich samstags in einem kleinen Café in unserem Viertel. Das Café ist klein und gemütlich, aber am Wochenende immer voll. Eigentlich wollte ich nur ein bisschen Geld für den Führerschein verdienen, aber inzwischen macht mir die Arbeit richtig Spaß. Am Anfang war ich sehr nervös, weil ich die Bestellungen auf Deutsch aufnehmen musste. In der ersten Woche habe ich zweimal den falschen Kuchen gebracht! Die Chefin, Frau Krüger, war aber immer geduldig mit mir.',
        'Das Beste an dem Job sind die Stammgäste. Ein älterer Herr kommt jeden Samstag um zehn Uhr, trinkt einen Kaffee und erzählt mir etwas über die Geschichte unseres Viertels. So lerne ich nicht nur Deutsch, sondern auch die Stadt besser kennen. Auch meine Freunde besuchen mich manchmal am Samstagnachmittag.',
        'Natürlich ist nicht alles perfekt: Ich muss früh aufstehen, und nach acht Stunden tun mir die Füße weh. Trotzdem möchte ich den Job behalten, auch wenn ich den Führerschein bald bezahlt habe. Nächsten Monat darf ich zum ersten Mal allein an der Kasse arbeiten — ich bin schon ein bisschen aufgeregt!',
      ],
      optionen: [
        '1. Sofia arbeitet jeden Tag im Café.',
        '2. Am Anfang hat Sofia Fehler bei den Bestellungen gemacht.',
        '3. Die Chefin war oft unfreundlich zu ihr.',
        '4. Durch einen Stammgast lernt Sofia die Stadt besser kennen.',
        '5. Sofia will aufhören, sobald der Führerschein bezahlt ist.',
      ],
      loesungLabel: 'Lösung mit Begründung',
      loesungen: [
        '1. **Falsch** — „Seit drei Monaten arbeite ich **samstags**“, also nur einmal pro Woche.',
        '2. **Richtig** — „habe ich zweimal den falschen Kuchen gebracht“.',
        '3. **Falsch** — sie „war aber immer **geduldig** mit mir“ — das Gegenteil.',
        '4. **Richtig** — der ältere Herr „erzählt mir etwas über die Geschichte unseres Viertels“: „So lerne ich … die Stadt besser kennen.“',
        '5. **Falsch** — sie möchte den Job „**behalten**, auch wenn ich den Führerschein bald bezahlt habe“.',
      ],
      kommentar: 'Die Methode: Entscheide immer mit der **Textstelle**, nie mit dem Gefühl. Die falschen Aussagen klingen logisch — aber im Text steht etwas anderes ~~(cada respuesta tiene su frase exacta en el texto; búscala antes de marcar)~~.',
    },

    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Übung 2 · Hören',
      modul: 'Hören · Durchsage, Stil Teil 1 (empfohlen: 6 Minuten)',
      titel: 'Simulation · Radio-Ansage mit 4 Aufgaben',
      anweisung: 'Lass dir das Transkript **in normalem Tempo vorlesen** oder nimm es mit dem Handy auf und höre es später mit Kopfhörern. Lies die vier Aufgaben **vor** dem Hören und wähle danach: a, b oder c.',
      absaetze: [
        '**Transkript** ~~(en el examen: audio)~~ *(ca. 120 Wörter)*: Und hier noch eine Information für alle in Lindenfeld: Am kommenden Wochenende feiert unsere Stadt das Sommerfest — aber Achtung, dieses Jahr nicht wie immer auf dem Marktplatz! Wegen der Bauarbeiten findet das Fest im Stadtpark statt. Los geht es am Samstag um 14 Uhr mit Musik und Spielen für Kinder. Der Eintritt ist frei; nur das Konzert am Abend kostet fünf Euro. Wichtig für alle Autofahrer: Die Parkplätze am Park sind gesperrt. Kommen Sie am besten mit dem Bus — die Linien 3 und 7 fahren am Samstag bis Mitternacht. Am Sonntag ist das Fest von 11 bis 18 Uhr geöffnet. Bei schlechtem Wetter wird das Konzert in die Stadthalle verlegt. Alle Informationen finden Sie auf der Webseite der Stadt.',
      ],
      optionen: [
        '1. Das Sommerfest findet dieses Jahr … statt. — a) auf dem Marktplatz · b) im Stadtpark · c) in der Stadthalle',
        '2. Das Fest beginnt … — a) am Samstag um 14 Uhr · b) am Samstagabend · c) am Sonntag',
        '3. Der Eintritt … — a) kostet für alle fünf Euro · b) ist frei, nur das Konzert kostet etwas · c) ist überall frei',
        '4. Die Besucher sollen am besten … kommen. — a) mit dem Auto · b) mit dem Bus · c) zu Fuß',
      ],
      loesungLabel: 'Lösung mit Begründung',
      loesungen: [
        '1. **b** — „findet das Fest im Stadtpark statt“. Falle c: Die Stadthalle ist nur der Plan **bei schlechtem Wetter** — und nur für das Konzert.',
        '2. **a** — „Los geht es am Samstag um 14 Uhr“.',
        '3. **b** — „Der Eintritt ist frei; **nur das Konzert** … kostet fünf Euro.“',
        '4. **b** — „Kommen Sie am besten mit dem Bus“ — die Parkplätze sind gesperrt, also ist a falsch.',
      ],
      kommentar: 'Beim Hören entscheiden **kleine Wörter**: *nur*, *nicht wie immer*, *bei schlechtem Wetter*. Lies die Aufgaben vorher und markiere, worauf du hören musst: Ort, Zeit, Preis.',
    },

    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Übung 3 · Schreiben',
      modul: 'Schreiben · Teil 1 · Informelle E-Mail (~80 Wörter, empfohlen: 20 Minuten)',
      titel: 'Simulation · E-Mail an einen Freund',
      anweisung: 'Tippe am Computer (ohne Rechtschreibkorrektur), Timer auf 20 Minuten. Schreibe zu **allen drei Punkten** etwas und vergiss Anrede und Gruß nicht. Vergleiche erst **nach** deiner eigenen Korrektur (siehe unten).',
      absaetze: [
        'Dein Freund Marco hat dir am Wochenende beim **Umzug** geholfen. Schreib ihm eine E-Mail (ca. 80 Wörter): **Bedanke dich für die Hilfe** · **beschreibe deine neue Wohnung** · **lade ihn zu deiner Party ein**.',
      ],
      loesungLabel: 'Mögliche Lösung (genau 80 Wörter)',
      loesungen: [
        'Lieber Marco,',
        'vielen Dank für deine Hilfe beim Umzug! Ohne dich hätten wir das nie an einem Tag geschafft.',
        'Die neue Wohnung ist hell und ruhig. Mein Lieblingsplatz ist der kleine Balkon, weil man von dort den Park sehen kann. Nur das Wohnzimmer ist noch voller Kartons.',
        'Am Samstag in zwei Wochen machen wir eine kleine Party in der neuen Wohnung. Hast du da Zeit? Es gibt Pizza, Musik und natürlich kalte Getränke.',
        'Antworte mir bitte bald!',
        'Liebe Grüße\nAna',
      ],
      kommentar: 'Auch ganz andere Inhalte sind gültig — bewertet werden **Erfüllung, Kohärenz, Wortschatz und Strukturen**, nicht deine Wohnung. Prüfe vor der Abgabe: alle drei Punkte? Anrede und Gruß? Ungefähr 80 Wörter?',
    },

    { type: 'rule' },

    // ── Prüfungsbezug: die Selbstkorrektur ────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Prüfungsbezug — deine einfache Rubrik',
      kopf: ['Kriterium', 'Leitfrage', 'Warnsignal'],
      zeilen: [
        ['Erfüllung', 'Habe ich zu allen Punkten etwas geschrieben — mit Anrede und Gruß?', 'ein Punkt fehlt · viel zu kurz · keine Anrede'],
        ['Kohärenz', 'Verbinden Wörter wie *weil, deshalb, und, aber* meine Sätze?', 'jeder Satz beginnt mit *Ich* · keine Konnektoren'],
        ['Wortschatz', 'Passen die Wörter zum Thema — und wiederhole ich mich nicht?', 'dreimal *gut* und *schön* · wörtliche Übersetzungen aus dem Spanischen'],
        ['Strukturen', 'Stimmen Verbstellung, Perfekt und Endungen?', 'Verb nach *weil* nicht am Ende · *habe gefahren* statt *bin gefahren*'],
      ],
    },
    {
      type: 'modell',
      eyebrow: 'Prüfungsbezug — korrigierter Lernertext',
      thema: 'Auszug aus einer E-Mail zum selben Thema — mit fünf typischen Fehlern spanischsprachiger B1-Kandidaten',
      woerter: 'Auszug, ca. 50 Wörter · Fehler markiert, darunter korrigiert und kommentiert',
      absaetze: [
        'Lieber Marco, danke für deine Hilfe beim Umzug! ==Gestern ich habe== die letzten Kartons ausgepackt. Die Wohnung ist schön, aber ==der== Küche ist noch leer. Meine Eltern ==haben== am Sonntag zu Besuch ==gekommen==. Ich bin müde, weil ich ==habe viel gearbeitet==. Am Samstag mache ich eine Party. ==Ich warte deine Antwort==!',
      ],
      annotationen: [
        { tag: 'Verb auf Position 2', text: 'Nach *Gestern* kommt sofort das Verb: **„Gestern habe ich die letzten Kartons ausgepackt.“** ~~En español el orden no cambia; en alemán, siempre.~~' },
        { tag: 'Genus', text: '*die Küche* ist feminin: **„aber die Küche ist noch leer“**. Lern das Genus immer mit dem Wort.' },
        { tag: 'Perfekt mit sein', text: '*kommen* ist Bewegung: **„Meine Eltern sind am Sonntag zu Besuch gekommen.“** (Lektion 6)' },
        { tag: 'Verb ans Ende', text: 'Nach *weil* steht das Verb am Ende: **„weil ich viel gearbeitet habe“** (Lektion 4).' },
        { tag: 'Verb + Präposition · Calco', text: '*esperar tu respuesta* geht nicht wörtlich: *warten* braucht **auf** — **„Ich warte auf deine Antwort!“** (Lektion 9)' },
      ],
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Reserviere in der Prüfung die **letzten drei Minuten** jeder Schreibaufgabe für eine Mini-Korrektur — und such dann nur nach deinen **zwei häufigsten Fehlern** von der Fehlerliste, z. B. Verbstellung und Perfekt mit *sein*. Zwei korrigierte Fehler können beim Kriterium „Strukturen“ den Unterschied machen.',
    },

    { type: 'rule' },

    // ── Abschluss ─────────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Das bleibt', 'Konkret'],
      zeilen: [
        ['Simulation = reale Bedingungen', 'Timer, kein Wörterbuch, möglichst digital'],
        ['Kein Feld bleibt leer', 'eine Vermutung ist besser als null Punkte'],
        ['Korrektur am nächsten Tag', 'mit frischem Blick — wie ein Prüfer'],
        ['Vier Kriterien', 'Erfüllung · Kohärenz · Wortschatz · Strukturen'],
        ['Fehler bekommen Namen', 'Verbstellung, Genus, Endung, falscher Freund — auf die Fehlerliste'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich habe die drei Aufgaben mit Timer und ohne Hilfsmittel bearbeitet.',
        'Ich habe meine E-Mail mit den vier Kriterien bewertet.',
        'Ich kann meine Fehler benennen: Verbstellung, Genus, Endung …',
        'Meine Fehlerliste ist angelegt — mit meinen zwei häufigsten Fehlern ganz oben.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Die erste Generalprobe zeigt dir, **wo** du stehst; die Fehlerliste zeigt dir, **woran** du arbeitest. In der letzten Lektion folgt die zweite Simulation: Anzeigen zuordnen, deine Präsentation fürs Sprechen und die formelle E-Mail. Dazu bekommst du den Plan für die letzten sieben Tage und die Checkliste für den Prüfungstag.',
    },
  ],
}
