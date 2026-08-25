// Lektion 37 · Gesundheit & Körper
//
// Bloque 3 (temático): partes del cuerpo, beim Arzt, pedir cita, farmacia.
// Falso amigo clave: constipado ≠ konstipiert → erkältet.

export default {
  spec: ['Bloque 3', 'Themenfelder & Wortschatz', 'Niveau A2', 'Prüfungsrelevanz: Sprechen & Schreiben'],
  h1: 'Gesundheit & Körper',
  lead: '~~Para ir al médico en Alemania necesitas tres frases:~~ **Mein Kopf tut weh. Ich habe Fieber. Ich möchte einen Termin.**',

  content: [
    // ── Lernziele ─────────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'sagen, was wehtut: *Mein Kopf tut weh.*',
        'einen Termin beim Arzt machen',
        'in der Apotheke etwas kaufen',
      ],
    },

    { type: 'rule' },

    // ── Kernwortschatz ────────────────────────────────────────────
    {
      type: 'wortschatz',
      eyebrow: 'Kernwortschatz — Körper & Arzt',
      items: [
        { wort: 'der Kopf', kollokation: 'Der Kopf tut weh.', es: 'la cabeza' },
        { wort: 'der Bauch', kollokation: 'Bauchschmerzen haben', es: 'la barriga, el vientre' },
        { wort: 'der Hals', kollokation: 'Halsschmerzen haben', es: 'la garganta, el cuello' },
        { wort: 'der Rücken', kollokation: 'Mein Rücken tut weh.', es: 'la espalda' },
        { wort: 'das Bein, -e', kollokation: 'das Bein tut weh', es: 'la pierna' },
        { wort: 'der Arm, -e', kollokation: 'der rechte Arm', es: 'el brazo' },
        { wort: 'der Arzt / die Ärztin', kollokation: 'zum Arzt gehen', es: 'el médico / la médica' },
        { wort: 'der Termin, -e', kollokation: 'einen Termin machen', es: 'la cita' },
        { wort: 'das Fieber', kollokation: 'Fieber haben', es: 'la fiebre' },
        { wort: 'erkältet', kollokation: 'Ich bin erkältet.', es: 'constipado, resfriado' },
        { wort: 'die Apotheke', kollokation: 'in die Apotheke gehen', es: 'la farmacia' },
        { wort: 'die Tablette, -n', kollokation: 'eine Tablette nehmen', es: 'la pastilla' },
      ],
      hinweis: '**Achtung, falscher Freund:** ~~«estoy constipado» NO es~~ *Ich bin konstipiert* ~~(¡eso significa estreñido!). Se dice:~~ **Ich bin erkältet.**',
    },

    { type: 'rule' },

    // ── Erklärung ─────────────────────────────────────────────────
    {
      type: 'steps',
      eyebrow: 'Erklärung — drei Situationen',
      steps: [
        {
          badge: 'weh tun',
          titel: 'Sagen, was wehtut',
          text: 'Zwei Formeln: __Mein Kopf **tut weh**.__ oder __Ich **habe** Kopf**schmerzen**.__ ~~(Schmerzen = dolores)~~\nPlural: __Meine Beine **tun** weh.__',
        },
        {
          badge: 'Termin',
          titel: 'Einen Termin machen',
          text: 'Am Telefon: __Ich möchte **einen Termin** machen.__ — __**Können Sie** am Montag um 9 Uhr **kommen**?__ — __Ja, das **passt**.__ ~~(me viene bien)~~',
        },
        {
          badge: 'Apotheke',
          titel: 'In der Apotheke',
          text: 'Du brauchst kein Rezept ~~(receta)~~ für alles: __Ich brauche **etwas gegen** Halsschmerzen.__\nDie Antwort: __**Nehmen Sie** die Tabletten **zweimal am Tag**.__ ~~(dos veces al día)~~',
        },
      ],
    },

    { type: 'rule' },

    // ── Beispiele ─────────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele',
      items: [
        { text: 'Mein Rücken **tut weh**.', gl: '' },
        { text: 'Ich **habe Fieber** und **Halsschmerzen**.', gl: '' },
        { text: 'Ich **bin erkältet** und bleibe im Bett.', gl: '— NO konstipiert' },
        { text: 'Ich möchte **einen Termin** für morgen.', gl: '' },
        { text: 'Haben Sie **etwas gegen** Kopfschmerzen?', gl: '— en la farmacia' },
      ],
    },
    {
      type: 'redemittel',
      eyebrow: 'Redemittel — beim Arzt',
      gruppen: [
        {
          fn: 'Beim Arzt & am Telefon',
          saetze: [
            { satz: 'Ich fühle mich nicht gut.', gloss: 'no me encuentro bien' },
            { satz: 'Mein Kopf tut weh. / Ich habe Bauchschmerzen.' },
            { satz: 'Ich möchte einen Termin machen. Geht es heute noch?' },
            { satz: 'Gute Besserung!', gloss: '¡que te mejores! — respuesta típica' },
          ],
        },
      ],
    },

    { type: 'rule' },

    // ── Übungen ───────────────────────────────────────────────────
    {
      type: 'uebung',
      eyebrow: 'Anwendung — Übung 1 · Körperteile',
      frage: 'Wie heißt das auf Deutsch? Mit Artikel!',
      loesungLabel: 'Lösung',
      aufgaben: [
        'la cabeza → ___',
        'la espalda → ___',
        'la garganta → ___',
        'la pierna → ___',
      ],
      loesungen: [
        'la cabeza → **der Kopf**',
        'la espalda → **der Rücken**',
        'la garganta → **der Hals**',
        'la pierna → **das Bein**',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 2 · Dialog ergänzen',
      frage: 'Ergänze: Termin · weh · erkältet · gegen.',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Mein Hals tut ___ .',
        'Ich habe Husten. Ich bin ___ .',
        'Ich möchte einen ___ für heute Nachmittag.',
        'Haben Sie etwas ___ Fieber?',
      ],
      loesungen: [
        'Mein Hals tut **weh**.',
        'Ich habe Husten. ~~(tos)~~ Ich bin **erkältet**.',
        'Ich möchte einen **Termin** für heute Nachmittag.',
        'Haben Sie etwas **gegen** Fieber?',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 3 · Produzieren',
      frage: 'Du bist krank. Schreib 4-5 Sätze (ca. 30 Wörter): Was hast du? Was machst du? Gehst du zum Arzt?',
      loesungLabel: 'Mögliche Lösung',
      loesung:
        'Ich bin erkältet und habe Fieber. Mein Kopf tut weh. Heute bleibe ich im Bett und trinke Tee. Morgen gehe ich zum Arzt. Ich habe schon einen Termin um 10 Uhr. ~~(Con „weh tun“ o „Schmerzen“ + una acción basta.)~~',
    },

    { type: 'rule' },

    // ── Prüfungsbezug ─────────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Schreiben · Teil 1 (Mitteilung)',
      titel: 'Absagen (~20-30 Wörter)',
      anweisung: 'Du bist krank und kannst nicht zum Deutschkurs kommen. Schreib deiner Lehrerin Frau Berg eine kurze Nachricht: Warum kommst du nicht? Bis wann bleibst du zu Hause?',
      absaetze: [
        'Eine **Mitteilung** ist kurz: Anrede, 2-3 Sätze, Gruß — fertig.',
      ],
      loesungLabel: 'Mögliche Lösung',
      loesungen: [
        'Liebe Frau Berg, ich kann heute leider nicht zum Kurs kommen. Ich bin erkältet und habe Fieber. Ich bleibe bis Donnerstag zu Hause. Viele Grüße, Pablo ~~(26 palabras — perfecto para Teil 1.)~~',
      ],
      kommentar: 'Der Grund mit **weil** geht auch: *…, weil ich krank bin.* Beide Antworten sind richtig.',
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Lern die Formel **„Ich kann leider nicht kommen, ich bin krank“** auswendig — Absagen ~~(cancelar/excusarse)~~ sind die häufigste Aufgabe im **Schreiben Teil 1**.',
    },

    { type: 'rule' },

    // ── Abschluss ─────────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Funktion', 'So sagst du es'],
      zeilen: [
        ['dolor', 'Mein Kopf tut weh. / Ich habe Kopfschmerzen.'],
        ['constipado', 'Ich bin **erkältet** (¡no *konstipiert*!)'],
        ['cita', 'Ich möchte einen Termin machen.'],
        ['farmacia', 'Ich brauche etwas gegen …'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich sage, was mir wehtut.',
        'Ich mache am Telefon einen Termin.',
        'Ich schreibe eine kurze Nachricht und sage ab.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Der Termin beim Arzt ist **um 10 Uhr** — aber wie sagt man eigentlich die Uhrzeit auf Deutsch? In der nächsten Lektion lernst du **Tagesablauf & Zeit**: die Uhr, die Wochentage und deinen Tag von *aufstehen* bis *schlafen gehen*.',
    },
  ],
}
