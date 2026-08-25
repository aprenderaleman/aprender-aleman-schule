// Lektion 30 · Sprechen Teil 3 — Gemeinsam etwas planen
//
// Bloque 2 (examen) — cierra la miniserie de Sprechen y el bloque 2:
// proponer / aceptar / rechazar suave, diálogo modelo que llega a un
// plan, y tabla-síntesis de las 4 partes del examen (30/30/30/15).

export default {
  spec: ['Bloque 2', 'Modul Sprechen', 'Niveau A2', 'Prüfungsrelevanz: Sprechen Teil 3'],
  h1: 'Sprechen Teil 3 — Gemeinsam etwas planen',
  lead: '~~En el Teil 3 planeáis algo juntos — cine, cocinar, una excursión.~~ Vorschlagen, annehmen, ablehnen — und am Ende steht **ein Plan**.',

  content: [
    // ── Lernziele ─────────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'einen Vorschlag machen: *Wollen wir …?* ~~(proponer)~~',
        'annehmen oder **freundlich** ablehnen und einen Gegenvorschlag machen',
        'am Ende einen konkreten Plan haben: Tag, Uhrzeit, Treffpunkt',
      ],
    },

    { type: 'rule' },

    // ── Kernwortschatz ────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Kernwortschatz — etwas planen',
      kopf: ['Deutsch', 'Beispiel', 'Bedeutung'],
      zeilen: [
        ['der Vorschlag', 'Ich habe einen Vorschlag.', 'la propuesta'],
        ['Zeit haben', 'Hast du am Samstag Zeit?', 'tener tiempo'],
        ['ins Kino gehen', 'Wollen wir ins Kino gehen?', 'ir al cine'],
        ['zusammen kochen', 'Wir kochen zusammen.', 'cocinar juntos'],
        ['sich treffen', 'Wir treffen uns um 19 Uhr.', 'quedar, encontrarse'],
        ['der Treffpunkt', 'Der Treffpunkt ist der Bahnhof.', 'el punto de encuentro'],
        ['passen', 'Samstag passt mir gut.', 'venir bien'],
        ['leider', 'Leider kann ich nicht.', 'por desgracia'],
      ],
    },

    { type: 'rule' },

    // ── Erklärung ─────────────────────────────────────────────────
    {
      type: 'steps',
      eyebrow: 'Erklärung — so kommt ihr zum Plan',
      steps: [
        {
          badge: 'Schritt 1',
          titel: 'Vorschlagen',
          text: 'Mach einen Vorschlag mit __Wollen wir …?__ ~~(¿quedamos para…?)~~\n__Wollen wir am Samstag **ins Kino gehen**?__',
        },
        {
          badge: 'Schritt 2',
          titel: 'Annehmen oder freundlich ablehnen',
          text: 'Ja: __Gute Idee!__ Nein: nie nur „Nein“ — sag __Leider kann ich nicht__ und mach einen **Gegenvorschlag**: __**Lieber am** Sonntag.__ ~~Rechazo suave: «leider» + alternativa.~~',
        },
        {
          badge: 'Schritt 3',
          titel: 'Plan festmachen',
          text: 'Klärt __Tag, Uhrzeit und Treffpunkt__ und bestätigt den Plan: __Also, Sonntag um 18 Uhr am Kino. Bis dann!__ ~~Sin plan concreto al final, el Teil 3 no está completo.~~',
        },
      ],
    },

    { type: 'rule' },

    // ── Redemittel + Modell ───────────────────────────────────────
    {
      type: 'redemittel',
      eyebrow: 'Redemittel — planen',
      gruppen: [
        {
          fn: 'Vorschlagen',
          saetze: [
            { satz: 'Wollen wir zusammen kochen?', gloss: '¿cocinamos juntos?' },
            { satz: 'Hast du am Freitag Zeit?' },
            { satz: 'Wie ist es am Samstag?', gloss: '¿qué tal el sábado?' },
          ],
        },
        {
          fn: 'Annehmen',
          saetze: [
            { satz: 'Gute Idee!' },
            { satz: 'Ja, das passt mir gut.' },
          ],
        },
        {
          fn: 'Freundlich ablehnen + Gegenvorschlag',
          saetze: [
            { satz: 'Leider kann ich am Freitag nicht.' },
            { satz: 'Lieber am Sonntag. Geht das?', gloss: 'mejor el domingo' },
          ],
        },
      ],
    },
    {
      type: 'modell',
      eyebrow: 'Beispiele — Modell-Dialog',
      thema: 'Zusammen ins Kino gehen',
      woerter: 44,
      absaetze: [
        'A: „**Wollen wir** am Samstag ins Kino gehen?“\nB: „**Leider** kann ich am Samstag nicht. **Lieber am** Sonntag.“\nA: „Okay, Sonntag **passt mir gut**. Um wie viel Uhr?“\nB: „Um 18 Uhr? Wir treffen uns am Kino.“\nA: „**Gute Idee!** Also, Sonntag um 18 Uhr am Kino. Bis dann!“',
      ],
      annotationen: [
        { tag: 'Wollen wir …?', text: 'Der Vorschlag — Modalverb vorne, Infinitiv am Ende.' },
        { tag: 'Leider + lieber', text: 'Freundlich ablehnen ~~(no un «nein» seco)~~ und sofort einen Gegenvorschlag machen.' },
        { tag: 'Also, …', text: 'Am Ende den Plan **wiederholen**: Tag + Uhrzeit + Treffpunkt. So sehen die Prüfer: Ziel erreicht.' },
      ],
    },

    { type: 'rule' },

    // ── Übungen ───────────────────────────────────────────────────
    {
      type: 'uebung',
      eyebrow: 'Anwendung — Übung 1 · Vorschlag, Ja oder Nein?',
      frage: 'Ist das ein Vorschlag (V), eine Zustimmung (J) oder eine Ablehnung (N)?',
      loesungLabel: 'Lösung',
      aufgaben: [
        '„Leider habe ich am Montag keine Zeit.“',
        '„Wollen wir eine Pizza machen?“',
        '„Ja, das passt mir gut!“',
      ],
      loesungen: [
        '**N** — Ablehnung ~~(fíjate en «leider»)~~',
        '**V** — Vorschlag',
        '**J** — Zustimmung',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 2 · Den Dialog ergänzen',
      frage: 'Ergänze: Gute Idee / Wollen wir / Lieber',
      loesungLabel: 'Lösung',
      aufgaben: [
        'A: „___ am Freitag zusammen kochen?“',
        'B: „Am Freitag kann ich nicht. ___ am Samstag.“',
        'A: „___! Um 19 Uhr bei mir?“',
      ],
      loesungen: [
        '„**Wollen wir** am Freitag zusammen kochen?“',
        '„… **Lieber** am Samstag.“',
        '„**Gute Idee!** Um 19 Uhr bei mir?“',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 3 · Produzieren — dein Plan',
      frage: 'Plant einen Ausflug an den See: Mach einen Vorschlag, lehn einmal freundlich ab und macht den Plan fest (Tag + Uhrzeit + Treffpunkt). Sprich beide Rollen laut!',
      loesungLabel: 'Mögliche Lösung',
      loesung: 'A: „Wollen wir am Samstag an den See fahren?“ — B: „Leider kann ich am Samstag nicht. Lieber am Sonntag.“ — A: „Okay! Wir treffen uns um 10 Uhr am Bahnhof.“ — B: „Gute Idee. Also, Sonntag um 10 Uhr. Bis dann!“ ~~Válida cualquier variante con los tres pasos: proponer → rechazar suave + alternativa → plan concreto.~~',
    },

    { type: 'rule' },

    // ── Prüfungsbezug ─────────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Sprechen · Teil 3',
      titel: 'Etwas aushandeln',
      anweisung: 'In der Regel bekommt ihr eine Aufgabe wie: „Planen Sie zusammen ein Abendessen.“ Dein Partner sagt: „Wollen wir am Mittwoch kochen?“ — aber du hast am Mittwoch einen Deutschkurs. Was sagst du?',
      absaetze: [
        'Du: „{1}“',
      ],
      loesungLabel: 'Mögliche Lösung',
      loesungen: [
        '{1} **„Leider kann ich am Mittwoch nicht, ich habe einen Deutschkurs. Lieber am Donnerstag. Geht das?“** ~~Rechazo + motivo + contrapropuesta: la respuesta perfecta del Teil 3.~~',
      ],
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Sag im Teil 3 nie nur „Ja, okay“ zu allem. Die Prüfer wollen sehen, dass du **verhandeln** kannst ~~(negociar)~~: lehn **einmal** freundlich ab und mach einen Gegenvorschlag.',
    },

    { type: 'rule' },

    // ── Abschluss: cierre del Bloque 2 ────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung — die ganze Prüfung im Überblick',
      kopf: ['Prüfungsteil', 'Zeit', 'Das machst du'],
      zeilen: [
        ['Lesen', 'ca. 30 Min.', 'kurze Texte, E-Mails und Anzeigen verstehen'],
        ['Hören', 'ca. 30 Min.', 'kurze Texte, Durchsagen und Gespräche verstehen'],
        ['Schreiben', 'ca. 30 Min.', 'kurze Mitteilung + E-Mail/Einladung schreiben'],
        ['Sprechen', 'ca. 15 Min.', 'Fragen & Antworten · von sich erzählen · planen'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich mache einen Vorschlag mit „Wollen wir …?“.',
        'Ich lehne freundlich ab und mache einen Gegenvorschlag.',
        'Ich mache am Ende einen konkreten Plan: Tag, Uhrzeit, Treffpunkt.',
        'Ich kenne alle vier Teile der Prüfung im Überblick.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Damit ist der **Prüfungsblock komplett**: Du kennst Lesen, Hören, Schreiben und Sprechen. Ab jetzt trainieren wir die **Themen** des Alltags — los geht es mit **Familie & Freunde**.',
    },
  ],
}
