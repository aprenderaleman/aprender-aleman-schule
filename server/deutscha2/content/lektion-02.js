// Lektion 02 · Das digitale Prüfungsformat (CBT)
//
// Bloque 0 «Einführung». Qué se hace con clic, el reloj, teclado con
// ä ö ü ß, cómo practicar. Prüfungsbezug: checklist del día del examen.

export default {
  spec: ['Bloque 0', 'Einführung', 'Niveau A2', 'Prüfungsrelevanz: alle Teile'],
  h1: 'Das digitale Prüfungsformat (CBT)',
  lead: '~~Cada vez más centros hacen el examen en ordenador.~~ Du liest, hörst und schreibst **am Computer** — ~~aquí ves qué cambia y cómo practicarlo~~.',

  content: [
    // ── Lernziele ─────────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'wissen, wie die digitale Prüfung am Computer funktioniert',
        'die Buchstaben ä, ö, ü und ß am Computer schreiben',
        'mit dem digitalen Modellsatz üben',
      ],
    },

    { type: 'rule' },

    // ── Kernwortschatz ────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Kernwortschatz — Am Computer',
      kopf: ['Wort', 'Beispiel', 'Bedeutung'],
      zeilen: [
        ['der Bildschirm', 'Der Text steht auf dem Bildschirm.', 'la pantalla'],
        ['die Maus', 'Ich klicke mit der Maus.', 'el ratón'],
        ['die Tastatur', 'Ich schreibe mit der Tastatur.', 'el teclado'],
        ['die Taste, -n', 'Wo ist die Taste für ß?', 'la tecla'],
        ['klicken (auf)', 'Klick auf die richtige Antwort.', 'hacer clic'],
        ['tippen', 'Ich tippe meine E-Mail.', 'teclear, escribir a máquina'],
        ['markieren', 'Markiere die Antwort a, b oder c.', 'marcar'],
        ['die Kopfhörer (Pl.)', 'Beim Hören trage ich Kopfhörer.', 'los auriculares'],
        ['die Zeit', 'Die Zeit läuft oben auf dem Bildschirm.', 'el tiempo'],
        ['weiter', 'Ich klicke auf „weiter“.', 'siguiente, continuar'],
      ],
    },

    { type: 'rule' },

    // ── Erklärung ─────────────────────────────────────────────────
    {
      type: 'steps',
      eyebrow: 'Erklärung — So funktioniert die Prüfung am Computer',
      steps: [
        {
          badge: 'klicken',
          titel: 'Lesen & Hören',
          text: 'Du liest den Text auf dem __Bildschirm__ und **klickst** die richtige Antwort an. Beim Hören trägst du __Kopfhörer__ — jeder hört für sich.',
        },
        {
          badge: 'tippen',
          titel: 'Schreiben',
          text: 'Deine Mitteilung und deine E-Mail **tippst** du mit der Tastatur. ~~No escribes a mano: practica teclear en alemán.~~',
        },
        {
          badge: 'Uhr',
          titel: 'Die Zeit',
          text: 'Auf dem Bildschirm siehst du eine **Uhr**. Sie zeigt, wie viel Zeit du noch hast. ~~Mírala de vez en cuando, sin obsesionarte.~~',
        },
        {
          badge: 'Sprechen',
          titel: 'Bleibt gleich',
          text: 'Das **Sprechen** machst du **nicht** am Computer: Du sprichst mit einem Partner und mit den Prüfern — wie auf Papier. ~~El oral es igual que en el formato en papel.~~',
        },
      ],
    },
    {
      type: 'prose',
      eyebrow: 'Erklärung — ä, ö, ü, ß am Computer',
      card: true,
      titel: 'Die deutschen Sonderzeichen',
      absaetze: [
        'Deine Tastatur hat kein ä, ö, ü oder ß? Kein Problem: In der digitalen Prüfung gibt es in der Regel **Buttons für die Sonderzeichen** ~~(botones en pantalla para los caracteres especiales)~~ — du klickst sie einfach an. Im digitalen Modellsatz siehst du genau, wie das aussieht.',
        'Trotzdem: **Übe die Sonderzeichen vorher.** Wörter wie *möchte*, *für*, *schön* oder *heißen* brauchst du in jeder E-Mail.',
      ],
    },
    {
      type: 'prose',
      eyebrow: 'Erklärung — So übst du das digitale Format',
      card: true,
      titel: 'Vor der Prüfung',
      absaetze: [
        'Auf der Website vom Prüfungsanbieter gibt es einen **digitalen Modellsatz** — eine Probe-Prüfung am Computer, gratis. Mach ihn mindestens einmal komplett. Und: Schreib deine Übungstexte **am Computer**, nicht nur auf Papier. ~~Así el día del examen nada te sorprende.~~',
      ],
    },

    { type: 'rule' },

    // ── Beispiele ─────────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Beispiele — Papier und Computer',
      kopf: ['Auf Papier', 'Am Computer'],
      zeilen: [
        ['Antwort ankreuzen', 'Antwort anklicken'],
        ['mit dem Stift schreiben', 'mit der Tastatur tippen'],
        ['alle hören zusammen (Lautsprecher)', 'jeder hört mit Kopfhörern'],
        ['Uhr im Prüfungsraum', 'Uhr auf dem Bildschirm'],
      ],
    },

    { type: 'rule' },

    // ── Mehr Beispiele ────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Mehr Beispiele',
      titel: 'Am Prüfungscomputer',
      items: [
        { text: 'Die Uhr auf dem **Bildschirm** zeigt noch 10 Minuten.', gl: '— El reloj de la pantalla marca que quedan 10 minutos.' },
        { text: 'Ich **markiere** Antwort b.', gl: '— Marco la respuesta b.' },
        { text: 'Wo ist die **Taste** für das ß? — Hier links.', gl: '— ¿Dónde está la tecla de la ß? — Aquí a la izquierda.' },
        { text: 'Ohne **Kopfhörer** hörst du nichts.', gl: '— Sin auriculares no oyes nada.' },
        { text: 'Zuerst kontrolliere ich, dann klicke ich auf „**weiter**“.', gl: '— Primero compruebo, luego hago clic en «siguiente».' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'tippen üben',
      titel: 'Sonderzeichen im Alltag',
      items: [
        { text: 'Ich **tippe** das Wort „möchte“ mit ö.', gl: '— Tecleo la palabra möchte con ö.' },
        { text: 'Das Wort „heißen“ schreibt man mit ß.', gl: '— La palabra heißen se escribe con ß.' },
        { text: 'Meine **Maus** funktioniert nicht. — Sag es der Aufsicht!', gl: '— Mi ratón no funciona. — ¡Díselo al supervisor!' },
        { text: 'Auf Papier schreibe ich mit dem Stift, am Computer **tippe** ich.', gl: '— En papel escribo con boli; en el ordenador, tecleo.' },
      ],
    },

    { type: 'rule' },

    // ── Prüfungsbezug ─────────────────────────────────────────────
    {
      type: 'steps',
      eyebrow: 'Prüfungsbezug — Checkliste für den Prüfungstag',
      steps: [
        { titel: 'Ausweis mitbringen', text: 'Ohne **Ausweis** ~~(documento de identidad)~~ keine Prüfung.' },
        { titel: 'Früh da sein', text: 'Komm **pünktlich** — besser 30 Minuten vorher.' },
        { titel: 'Technik testen', text: 'Kopfhörer auf, Ton testen. Etwas funktioniert nicht? **Sag es sofort** der Aufsicht.' },
        { titel: 'Uhr im Blick', text: 'Schau ab und zu auf die **Zeit** auf dem Bildschirm.' },
        { titel: 'Erst kontrollieren, dann weiter', text: 'Kontrolliere deine Antwort, **dann** klick auf „weiter“.' },
      ],
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Die Aufgaben sind auf Papier und am Computer **gleich** — nur die Technik ist anders. Wer den digitalen Modellsatz einmal gemacht hat, hat am Prüfungstag **keinen Stress** mit dem Computer.',
    },

    { type: 'rule' },

    // ── Abschluss ─────────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Teil', 'Am Computer'],
      zeilen: [
        ['Lesen', 'Antworten anklicken'],
        ['Hören', 'Kopfhörer + anklicken'],
        ['Schreiben', 'tippen, Buttons für ä ö ü ß'],
        ['Sprechen', 'ohne Computer — mit Partner und Prüfern'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich weiß, was ich am Computer klicke und was ich tippe.',
        'Ich kann ä, ö, ü und ß am Computer schreiben.',
        'Ich kenne meine Checkliste für den Prüfungstag.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Du kennst jetzt die Prüfung und den Computer. Aber **wo stehst du gerade**? In der nächsten Lektion machst du eine kleine Diagnose: drei Mini-Tests zeigen dir, was du schon kannst — und was du im Kurs noch lernst.',
    },
  ],
}
