// Lektion 01 · Das Goethe-Zertifikat A2 im Überblick
//
// Bloque 0 «Einführung». Qué certifica el A2, las 4 partes (canon KANON.md),
// examen único NO modular con aprobado al 60 %, de la Anmeldung al Zeugnis.

export default {
  spec: ['Bloque 0', 'Einführung', 'Niveau A2', 'Prüfungsrelevanz: alle Teile'],
  h1: 'Das Goethe-Zertifikat A2 im Überblick',
  lead: '~~Tu primer mapa del examen:~~ **vier Teile, eine Prüfung, 60 %**. ~~Qué certifica el A2 y cómo funciona, de la inscripción al certificado.~~',

  content: [
    // ── Lernziele ─────────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'wissen, was das Goethe-Zertifikat A2 ist und was es zertifiziert',
        'die vier Prüfungsteile kennen: Lesen, Hören, Schreiben, Sprechen',
        'den Weg von der Anmeldung bis zum Zeugnis verstehen',
      ],
    },

    { type: 'rule' },

    // ── Kernwortschatz ────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Kernwortschatz — Wörter rund um die Prüfung',
      kopf: ['Wort', 'Beispiel', 'Bedeutung'],
      zeilen: [
        ['die Prüfung', 'Ich mache die Prüfung.', 'el examen'],
        ['der Teil, -e', 'Die Prüfung hat vier Teile.', 'la parte'],
        ['die Anmeldung', 'Die Anmeldung ist online.', 'la inscripción'],
        ['die Aufgabe, -n', 'Lies die Aufgabe genau.', 'la tarea, el ejercicio'],
        ['die Antwort, -en', 'Nur eine Antwort ist richtig.', 'la respuesta'],
        ['der Punkt, -e', 'Du brauchst 60 % der Punkte.', 'el punto'],
        ['bestehen', 'Ich möchte die Prüfung bestehen.', 'aprobar'],
        ['das Ergebnis', 'Das Ergebnis kommt später.', 'el resultado'],
        ['das Zeugnis', 'Das Zeugnis ist offiziell.', 'el certificado'],
      ],
    },

    { type: 'rule' },

    // ── Erklärung ─────────────────────────────────────────────────
    {
      type: 'prose',
      eyebrow: 'Erklärung — Was zertifiziert das A2?',
      card: true,
      titel: 'Deutsch für den Alltag',
      absaetze: [
        'Das Goethe-Zertifikat A2 ist ein offizielles Zertifikat vom **Goethe-Institut**. Es zeigt: Du verstehst und sprichst __einfaches Deutsch für den Alltag__ ~~(alemán sencillo para el día a día)~~ — einkaufen, nach dem Weg fragen, über Familie und Arbeit sprechen. Das Niveau A2 kommt aus dem **GER** ~~(el Marco Común Europeo de Referencia)~~.',
        'Das Zertifikat ist international anerkannt. In einigen Ländern braucht man ein Deutsch-Zertifikat zum Beispiel für den **Familiennachzug** ~~(reagrupación familiar)~~ — die Regeln sind aber **je nach Land verschieden**. Informiere dich immer bei einer offiziellen Stelle.',
      ],
    },
    {
      type: 'tabelle',
      eyebrow: 'Erklärung — Die vier Teile',
      kopf: ['Teil', 'Zeit', 'Was machst du?'],
      zeilen: [
        ['Lesen', 'ca. 30 Min.', 'kurze Texte & E-Mails lesen, Anzeigen zuordnen'],
        ['Hören', 'ca. 30 Min.', 'kurze Texte & Durchsagen, Gespräche verstehen'],
        ['Schreiben', 'ca. 30 Min.', '2 Teile: kurze Mitteilung (~20-30 Wörter) + E-Mail/Einladung (~30-40 Wörter)'],
        ['Sprechen', 'ca. 15 Min.', 'Paarprüfung, 3 Teile: Fragen stellen & beantworten, von sich erzählen, gemeinsam planen'],
      ],
    },
    {
      type: 'prose',
      eyebrow: 'Erklärung — Eine Prüfung, keine Module',
      card: true,
      titel: 'Bestanden ab 60 %',
      absaetze: [
        'Wichtig: Anders als bei B1 oder C1 gibt es beim A2 **keine Module** ~~(no puedes examinarte de las partes por separado)~~. Du machst **eine Prüfung**: erst die schriftliche Prüfung (Lesen, Hören, Schreiben), dann die mündliche Prüfung (Sprechen). Du bestehst mit **60 % der Punkte insgesamt**.',
      ],
    },
    {
      type: 'steps',
      eyebrow: 'Erklärung — Von der Anmeldung zum Zeugnis',
      steps: [
        { titel: 'Anmeldung', text: 'Du meldest dich bei einem **Goethe-Institut** oder Prüfungszentrum an — meist online. ~~Reserva con tiempo: las plazas se agotan.~~' },
        { titel: 'Prüfungstag', text: 'Du kommst pünktlich und bringst deinen **Ausweis** mit ~~(tu documento de identidad)~~.' },
        { titel: 'Ergebnis', text: 'Nach einiger Zeit bekommst du dein **Ergebnis** — oft online.' },
        { titel: 'Zeugnis', text: 'Mit 60 % oder mehr bekommst du dein **Zeugnis**: dein offizielles A2-Zertifikat.' },
      ],
    },

    { type: 'rule' },

    // ── Beispiele ─────────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele — Das kannst du mit A2',
      items: [
        { text: 'Ich kann im Restaurant **bestellen und bezahlen**.', gl: '— Sprechen' },
        { text: 'Ich kann eine kurze **E-Mail** an eine Freundin schreiben.', gl: '— Schreiben' },
        { text: 'Ich kann eine **Anzeige** ~~(un anuncio)~~ verstehen.', gl: '— Lesen' },
        { text: 'Ich kann eine **Durchsage** am Bahnhof verstehen.', gl: '— Hören' },
      ],
    },

    { type: 'rule' },

    // ── Übungen ───────────────────────────────────────────────────
    {
      type: 'uebung',
      eyebrow: 'Anwendung — Übung 1 · Richtig oder falsch?',
      frage: 'Was stimmt? ~~(¿Qué es verdad?)~~',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Die A2-Prüfung hat Module wie B1.',
        'Man besteht die Prüfung mit 60 % der Punkte.',
        'Die Prüfung hat vier Teile.',
        'Sprechen dauert ca. 30 Minuten.',
      ],
      loesungen: [
        '**Falsch.** A2 hat keine Module — es ist eine Prüfung.',
        '**Richtig.**',
        '**Richtig.** Lesen, Hören, Schreiben, Sprechen.',
        '**Falsch.** Sprechen dauert ca. **15** Minuten.',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 2 · Wortschatz ergänzen',
      frage: 'Ergänze das Wort aus dem Kernwortschatz.',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Zuerst mache ich die ___ online.',
        'Ich brauche 60 % der Punkte. Dann ___ ich die Prüfung.',
        'Nach der Prüfung bekomme ich das ___.',
      ],
      loesungen: [
        'Zuerst mache ich die **Anmeldung** online.',
        'Dann **bestehe** ich die Prüfung.',
        'Nach der Prüfung bekomme ich das **Zeugnis**.',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 3 · Produzieren',
      frage: 'Warum machst du die A2-Prüfung? Schreib zwei Sätze.',
      loesungLabel: 'Mögliche Lösung',
      loesung: 'Ich mache die Prüfung, denn ich möchte in Deutschland arbeiten. Das Zeugnis ist wichtig für mich und meine Familie. ~~Vale cualquier motivo real — lo importante: dos frases completas con el verbo en posición 2.~~',
    },

    { type: 'rule' },

    // ── Prüfungsbezug ─────────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Alle Teile',
      titel: 'Mini-Zuordnung',
      anweisung: 'Welche Aufgabe gehört zu welchem Prüfungsteil? Ordne zu. ~~(Relaciona cada tarea con su parte.)~~',
      absaetze: [
        'a) Du schreibst eine kurze SMS an einen Freund.\nb) Du hörst eine Durchsage im Supermarkt.\nc) Du liest eine E-Mail und beantwortest Fragen.\nd) Du planst mit deiner Partnerin ein Picknick.',
      ],
      optionen: ['Lesen', 'Hören', 'Schreiben', 'Sprechen'],
      loesungLabel: 'Lösung',
      loesungen: [
        'a) → **Schreiben** (Teil 1: kurze Mitteilung)',
        'b) → **Hören**',
        'c) → **Lesen**',
        'd) → **Sprechen** (Teil 3: gemeinsam etwas planen)',
      ],
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Lade den offiziellen **Modellsatz** vom Goethe-Institut herunter ~~(el examen de muestra gratuito)~~. Dort siehst du die Prüfung genau so, wie sie am Prüfungstag ist.',
    },

    { type: 'rule' },

    // ── Abschluss ─────────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Frage', 'Antwort'],
      zeilen: [
        ['Was ist A2?', 'einfaches Deutsch für den Alltag (GER)'],
        ['Wie viele Teile?', 'vier: Lesen, Hören, Schreiben, Sprechen'],
        ['Module?', 'nein — eine Prüfung'],
        ['Bestanden?', 'ab 60 % der Punkte insgesamt'],
        ['Der Weg', 'Anmeldung → Prüfungstag → Ergebnis → Zeugnis'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich weiß, was das Goethe-Zertifikat A2 zertifiziert.',
        'Ich kenne die vier Prüfungsteile und ihre Zeiten.',
        'Ich weiß: eine Prüfung, keine Module, bestanden ab 60 %.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Viele Zentren bieten die Prüfung heute **am Computer** an: klicken, tippen, Kopfhörer. Wie das digitale Format funktioniert — und wie du ä, ö, ü, ß schreibst — siehst du in der nächsten Lektion.',
    },
  ],
}
