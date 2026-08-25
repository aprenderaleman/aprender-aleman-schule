// Lektion 01 · Das Goethe-Zertifikat A1 im Überblick
//
// Bloque 0 «Einführung» — qué certifica el A1, las 4 partes, el 60 %,
// de la Anmeldung al Zeugnis. Canon: docs/deutscha1/KANON.md.

export default {
  spec: ['Bloque 0', 'Einführung', 'Niveau A1', 'Prüfungsrelevanz: alle Teile'],
  h1: 'Das Goethe-Zertifikat A1 im Überblick',
  lead: '~~Tu primer examen de alemán: qué certifica, cómo son sus 4 partes y el camino de la~~ **Anmeldung** ~~(inscripción) al~~ **Zeugnis** ~~(diploma).~~',

  content: [
    // ── Lernziele ─────────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'wissen, was das Goethe-Zertifikat A1 ist',
        'die 4 Teile der Prüfung kennen (Hören, Lesen, Schreiben, Sprechen)',
        'den Weg kennen: Anmeldung → Prüfung → Zeugnis',
      ],
    },

    { type: 'rule' },

    // ── Kernwortschatz ────────────────────────────────────────────
    {
      type: 'wortschatz',
      eyebrow: 'Kernwortschatz — die Prüfung',
      items: [
        { wort: 'die Prüfung', kollokation: 'die Prüfung machen', es: 'el examen' },
        { wort: 'das Zertifikat', kollokation: 'das Zertifikat A1', es: 'el certificado' },
        { wort: 'die Anmeldung', kollokation: 'die Anmeldung online', es: 'la inscripción' },
        { wort: 'das Zeugnis', kollokation: 'das Zeugnis bekommen', es: 'el diploma' },
        { wort: 'hören', kollokation: 'einen Dialog hören', es: 'escuchar, oír' },
        { wort: 'lesen', kollokation: 'einen Text lesen', es: 'leer' },
        { wort: 'schreiben', kollokation: 'einen kurzen Text schreiben', es: 'escribir' },
        { wort: 'sprechen', kollokation: 'in der Gruppe sprechen', es: 'hablar' },
        { wort: 'die Punkte', kollokation: '60 % der Punkte', es: 'los puntos' },
        { wort: 'bestehen', kollokation: 'die Prüfung bestehen', es: 'aprobar' },
      ],
      hinweis: '~~Estas diez palabras salen en todo el curso — apréndelas desde hoy.~~',
    },

    { type: 'rule' },

    // ── Erklärung ─────────────────────────────────────────────────
    {
      type: 'prose',
      eyebrow: 'Erklärung',
      card: true,
      titel: 'Was ist das A1?',
      absaetze: [
        'Das **Goethe-Zertifikat A1 (Start Deutsch 1)** ist die **erste Stufe** ~~(el primer nivel oficial del MCER, el marco europeo)~~. Es zeigt: Du verstehst und benutzt **ganz einfache Sätze** — Name, Familie, Einkaufen, Arbeit.',
        'Viele Menschen brauchen das A1 für das **Visum zum Familiennachzug** ~~(el visado de reagrupación familiar en Alemania)~~. **Achtung:** Die Regeln sind **je nach Land anders** — ~~pregunta siempre en la embajada alemana de tu país.~~',
      ],
    },
    {
      type: 'tabelle',
      eyebrow: 'Erklärung — die 4 Teile',
      kopf: ['Teil', 'Zeit', 'Was machst du?'],
      zeilen: [
        ['Hören', 'ca. 20 Min.', 'Gespräche & Ansagen · Durchsagen ~~(textos muy breves)~~'],
        ['Lesen', 'ca. 25 Min.', 'Notizen & Anzeigen · Schilder & Aushänge'],
        ['Schreiben', 'ca. 20 Min.', 'ein Formular ausfüllen + einen kurzen Text schreiben (~30 Wörter)'],
        ['Sprechen', 'ca. 15 Min.', '**in der Gruppe**: sich vorstellen · Fragen · Bitten'],
      ],
    },
    {
      type: 'prose',
      absaetze: [
        'Das A1 ist **eine** Prüfung ~~(no es modular: no se aprueban las partes por separado)~~. Du bestehst mit **60 %** der Punkte insgesamt. Die Prüfung beginnt mit **Hören**; **Sprechen** ist **in der Gruppe** — ~~varios candidatos juntos, no a solas con el examinador.~~ Die genauen Punkte pro Teil: siehe den offiziellen **Modellsatz**.',
      ],
    },
    {
      type: 'steps',
      eyebrow: 'Erklärung — von der Anmeldung zum Zeugnis',
      steps: [
        {
          titel: 'Die Anmeldung',
          text: 'Du meldest dich an — online oder im **Prüfungszentrum** ~~(Goethe-Institut o centro examinador de tu ciudad)~~. Melde dich **früh** an!',
        },
        {
          titel: 'Der Prüfungstag',
          text: 'Zuerst die schriftliche Prüfung: **Hören, Lesen, Schreiben**. Dann **Sprechen** in der Gruppe.',
        },
        {
          titel: 'Das Ergebnis & das Zeugnis',
          text: 'Du bekommst dein **Ergebnis** ~~(resultado)~~ und dann dein **Zeugnis**. ~~Con él ya puedes ir a la embajada — o seguir al A2.~~',
        },
      ],
    },

    { type: 'rule' },

    // ── Beispiele ─────────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele',
      items: [
        { text: 'Ich mache die **Prüfung** im Mai.', gl: '— Hago el examen en mayo.' },
        { text: 'Die Prüfung hat **vier Teile**.', gl: '— El examen tiene cuatro partes.' },
        { text: 'Wir **sprechen** in der Gruppe.', gl: '— Hablamos en grupo.' },
        { text: 'Ich **bestehe** die Prüfung mit 60 Prozent.', gl: '— Apruebo el examen con el 60 %.' },
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
        'die Prüfung → ?',
        'bestehen → ?',
        'die Anmeldung → ?',
        'das Zeugnis → ?',
      ],
      loesungen: [
        'die Prüfung → **el examen**',
        'bestehen → **aprobar**',
        'die Anmeldung → **la inscripción**',
        'das Zeugnis → **el diploma**',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 2 · Richtig oder falsch?',
      frage: 'Richtig (R) oder falsch (F)? ~~(¿Verdadero o falso?)~~',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Das A1 hat vier Teile.',
        'Sprechen ist allein mit dem Prüfer.',
        'Du bestehst mit 60 % der Punkte.',
        'Man kann die Teile einzeln bestehen.',
      ],
      loesungen: [
        '**Richtig** — Hören, Lesen, Schreiben, Sprechen.',
        '**Falsch** — Sprechen ist **in der Gruppe**.',
        '**Richtig** — 60 % insgesamt.',
        '**Falsch** — das A1 ist **eine** Prüfung. ~~(No es modular.)~~',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 3 · Dein Plan',
      frage: 'Schreibe 2 Sätze: Wann machst du die Prüfung? Warum? ~~(Lo importante es el plan.)~~',
      loesungLabel: 'Muster',
      loesung: '*Ich mache die Prüfung im Juni. Ich brauche das Zertifikat für das Visum.*',
    },

    { type: 'rule' },

    // ── Prüfungsbezug ─────────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Alle Teile',
      titel: 'Welcher Teil ist das?',
      anweisung: 'Ordne die Aufgabe dem Prüfungsteil zu: Hören, Lesen, Schreiben oder Sprechen? ~~(¿A qué parte del examen pertenece cada tarea?)~~',
      absaetze: [
        'a) Ein Formular ausfüllen ~~(rellenar un formulario)~~',
        'b) Eine Durchsage am Bahnhof verstehen ~~(un aviso por megafonía)~~',
        'c) Ein Schild an der Tür lesen',
        'd) Sich vorstellen: „Ich bin Ana …“',
      ],
      loesungLabel: 'Lösung',
      loesungen: [
        'a) → **Schreiben** (Teil 1)',
        'b) → **Hören**',
        'c) → **Lesen**',
        'd) → **Sprechen** (Teil 1)',
      ],
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Lade den offiziellen **Modellsatz** vom Goethe-Institut herunter — er ist **gratis**. So siehst du die echte Prüfung. ~~En este curso practicamos cada parte paso a paso — hoy no necesitas entenderlo todo.~~',
    },

    { type: 'rule' },

    // ── Abschluss ─────────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Frage', 'Antwort'],
      zeilen: [
        ['Was ist das A1?', 'die **erste Stufe** ~~(primer nivel del MCER)~~ — Start Deutsch 1'],
        ['Wie viele Teile?', '4: Hören · Lesen · Schreiben · Sprechen (**in der Gruppe**)'],
        ['Wann bestehst du?', 'mit **60 %** der Punkte — **eine** Prüfung, nicht modular'],
        ['Der Weg', 'Anmeldung → Prüfungstag → Ergebnis & Zeugnis'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich weiß, was das Goethe-Zertifikat A1 ist und wofür ich es brauche.',
        'Ich kenne die 4 Teile der Prüfung — und: Sprechen ist in der Gruppe.',
        'Ich kenne den Weg: Anmeldung → Prüfung → Zeugnis.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Die A1-Prüfung ist auf **Papier** — mit einem **Antwortbogen** ~~(hoja de respuestas)~~. In der nächsten Lektion lernst du das Format genau kennen: wie du markierst, korrigierst und deine Antworten **rechtzeitig überträgst**.',
    },
  ],
}
