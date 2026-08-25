// Lektion 27 · Schreiben Teil 1 — Informelle E-Mail
//
// Bloque 2 (Prüfungsstrategie) — der erste komplette Text: E-Mail an
// eine Freundin / einen Freund (~80 Wörter, empf. 20 Min.). Struktur
// reagieren → erzählen → vorschlagen/fragen, du-Register, Redemittel,
// kommentiertes Musterbeispiel (81 Wörter) und komplette Prüfungsaufgabe
// mit Möglicher Lösung (80 Wörter).

export default {
  spec: ['Bloque 2', 'Prüfungsstrategie', 'Niveau B1', 'Prüfungsrelevanz: Schreiben Teil 1 (~80 Wörter · 20 Min.)'],
  h1: 'Schreiben Teil 1 — Informelle E-Mail',
  lead: 'Eine E-Mail an eine Freundin oder einen Freund: **reagieren, erzählen, fragen** — im du-Ton und mit allen drei Punkten der Aufgabe.',

  content: [
    // ── Lernziele ─────────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'eine informelle E-Mail von ~80 Wörtern mit Anrede, drei Inhaltspunkten und Gruß schreiben',
        'informelle Anrede- und Grußformeln sicher verwenden (*Liebe/r …* → *Viele Grüße*)',
        'die Struktur reagieren → erzählen → vorschlagen/fragen anwenden',
      ],
    },

    { type: 'rule' },

    // ── Kernwortschatz ────────────────────────────────────────────
    {
      type: 'wortschatz',
      eyebrow: 'Kernwortschatz',
      items: [
        { wort: 'die Einladung', kollokation: 'danke für die Einladung', es: 'la invitación' },
        { wort: 'sich freuen über', kollokation: 'ich freue mich über deine E-Mail', es: 'alegrarse de' },
        { wort: 'die Neuigkeit', kollokation: 'bei mir gibt es Neuigkeiten', es: 'la novedad' },
        { wort: 'erzählen', kollokation: 'von der neuen Arbeit erzählen', es: 'contar' },
        { wort: 'mitbringen', kollokation: 'einen Kuchen mitbringen', es: 'llevar (algo a una fiesta)' },
        { wort: 'vorschlagen', kollokation: 'einen Termin vorschlagen', es: 'proponer' },
        { wort: 'Bescheid sagen', kollokation: 'sag mir bitte kurz Bescheid', es: 'avisar' },
        { wort: 'Lust haben', kollokation: 'Hast du Lust auf Kino?', es: 'tener ganas' },
        { wort: 'klappen', kollokation: 'hoffentlich klappt es am Samstag', es: 'salir bien, funcionar' },
        { wort: 'sich treffen', kollokation: 'wir treffen uns um sieben', es: 'quedar, verse' },
      ],
      hinweis: 'In der informellen E-Mail schreibst du **du, dich, dein klein** — groß ist nur das formelle *Sie*. ~~Y ojo: «llevar una tarta a la fiesta» es mitbringen, no *nehmen*.~~',
    },

    { type: 'rule' },

    // ── Erklärung ─────────────────────────────────────────────────
    {
      type: 'prose',
      eyebrow: 'Erklärung',
      card: true,
      titel: 'Das Aufgabenformat',
      absaetze: [
        'Du liest eine kurze Situation — eine Freundin lädt dich ein, ein Freund erzählt eine Neuigkeit — und die Aufgabe nennt **drei Punkte** für deine Antwort: auf die Nachricht __reagieren__, etwas von dir __erzählen__, etwas __vorschlagen oder fragen__. Ziel: **~80 Wörter in etwa 20 Minuten**. ~~Un punto olvidado = menos puntos en Erfüllung.~~',
      ],
    },
    {
      type: 'steps',
      eyebrow: 'Erklärung — die Struktur',
      steps: [
        {
          titel: 'Anrede',
          text: '__Liebe Anna,__ / __Lieber Paul,__ / __Hallo Marta,__ — mit **Komma**, danach **klein** weiterschreiben. ~~En español: «Querida Anna:» con dos puntos y mayúscula. En alemán: coma y minúscula.~~',
        },
        {
          titel: 'Reagieren',
          text: 'Danke + Emotion: *__Vielen Dank für deine E-Mail!__ Ich habe mich sehr gefreut.* Ein bis zwei Sätze genügen.',
        },
        {
          titel: 'Erzählen',
          text: 'Eine __Neuigkeit mit ein, zwei Details__: *Bei mir gibt es Neuigkeiten: Ich habe einen neuen Job gefunden.* Hier liegt die Mitte deiner 80 Wörter.',
        },
        {
          titel: 'Vorschlagen / Fragen',
          text: 'Ein Vorschlag oder eine Frage: *__Wie wäre es am Samstag?__ / __Soll ich etwas mitbringen?__*',
        },
        {
          titel: 'Gruß',
          text: '__Viele Grüße__ / __Liebe Grüße__ + Name in der nächsten Zeile — **ohne Komma** nach dem Gruß.',
        },
      ],
    },
    {
      type: 'redemittel',
      eyebrow: 'Redemittel für Teil 1',
      gruppen: [
        {
          fn: 'Reagieren',
          saetze: [
            { satz: 'Vielen Dank für deine E-Mail / deine Einladung!' },
            { satz: 'Ich habe mich sehr über deine Nachricht gefreut.' },
            { satz: 'Toll, dass du …! / Schade, dass du …' },
          ],
        },
        {
          fn: 'Erzählen',
          saetze: [
            { satz: 'Bei mir gibt es auch Neuigkeiten: …' },
            { satz: 'Stell dir vor: Ich habe …!', gloss: '~~el «¡imagínate!» alemán — perfecto para abrir la noticia~~' },
            { satz: 'Bei mir ist gerade viel los, weil …' },
          ],
        },
        {
          fn: 'Vorschlagen & Fragen',
          saetze: [
            { satz: 'Wie wäre es am Samstag?' },
            { satz: 'Hast du Lust, ins Kino zu gehen?' },
            { satz: 'Soll ich etwas mitbringen?' },
          ],
        },
        {
          fn: 'Schließen',
          saetze: [
            { satz: 'Sag mir einfach kurz Bescheid.' },
            { satz: 'Ich freue mich schon auf dich! / Bis bald!' },
            { satz: 'Viele Grüße / Liebe Grüße + Name' },
          ],
        },
      ],
    },

    { type: 'rule' },

    // ── Beispiele + Musterbeispiel ────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele — der richtige Ton',
      items: [
        { text: '**Formell:** *Könnten Sie mir bitte antworten?* → **Informell:** *Schreib mir einfach kurz!*' },
        { text: '**Zu trocken:** *Ich komme.* → **Besser:** *Klar komme ich — ich freue mich schon!*', gl: '— ein bisschen Emotion gehört in die informelle E-Mail' },
      ],
    },
    {
      type: 'modell',
      eyebrow: 'Musterbeispiel — kommentiert',
      thema: 'Antwort auf eine Einladung (Punkte: reagieren · erzählen · fragen)',
      woerter: '81 Wörter',
      absaetze: [
        '==Liebe Lena,==',
        '==vielen Dank für deine Einladung== zur Geburtstagsparty! Ich habe mich riesig gefreut, und natürlich komme ich am Samstag.',
        '==Bei mir gibt es auch Neuigkeiten:== Ich habe endlich einen neuen Job gefunden und arbeite seit Mai in einem kleinen Büro im Zentrum. Die Kollegen sind nett, und die Arbeit macht mir viel Spaß.',
        '==Soll ich etwas mitbringen,== zum Beispiel einen Salat oder einen Kuchen? Sag mir einfach kurz Bescheid.',
        'Ich freue mich schon sehr auf deine Party!',
        '==Viele Grüße==\nCarmen',
      ],
      annotationen: [
        { tag: 'Anrede', text: '*Liebe* + Name + Komma — danach klein weiter (*vielen…*). ~~Nada de dos puntos.~~' },
        { tag: 'Punkt 1', text: 'Reagieren: Dank + Emotion (*riesig gefreut*) + klare Antwort (*natürlich komme ich*).' },
        { tag: 'Punkt 2', text: 'Erzählen: eine Neuigkeit (*neuer Job*) mit zwei Details — der längste Absatz.' },
        { tag: 'Punkt 3', text: 'Fragen: *Soll ich …?* + *Sag mir Bescheid* — der Empfänger weiß, was er antworten soll.' },
        { tag: 'Gruß', text: '*Viele Grüße* + Name, ohne Komma. Insgesamt: 81 Wörter, alle drei Punkte, du-Ton.' },
      ],
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Markiere die **drei Punkte** in der Aufgabe und mache aus jedem **einen kleinen Absatz** — so sieht der Prüfer die Erfüllung auf einen Blick. Zähle nicht jedes Wort: 70 bis 90 Wörter sind völlig in Ordnung.',
    },

    { type: 'rule' },

    // ── Übungen ───────────────────────────────────────────────────
    {
      type: 'uebung',
      eyebrow: 'Anwendung — Übung 1 · Erkennen',
      frage: 'Informell oder formell?',
      loesungLabel: 'Lösung',
      aufgaben: [
        '„Sehr geehrte Frau Weber, …“',
        '„Hallo Marco, wie geht es dir?“',
        '„Sag mal, hast du am Sonntag Zeit?“',
      ],
      loesungen: [
        '**Formell** — die Anrede *Sehr geehrte* gehört zu Teil 3.',
        '**Informell** — *Hallo* + Vorname + du-Frage.',
        '**Informell** — *Sag mal* + du: perfekt für Teil 1.',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 2 · Ordnen',
      frage: 'Bring die fünf Teile in die richtige Reihenfolge einer E-Mail.',
      loesungLabel: 'Lösung',
      aufgaben: [
        '(a) Viele Grüße\nDiego',
        '(b) Liebe Julia,',
        '(c) Soll ich am Freitag etwas zum Essen mitbringen?',
        '(d) danke für deine E-Mail! Schön, dass es dir gut geht.',
        '(e) Bei mir ist viel passiert: Ich habe eine neue Wohnung gefunden.',
      ],
      loesung: '**b → d → e → c → a** — Anrede → reagieren → erzählen → fragen → Gruß. Beachte das kleine *danke* in (d): Nach dem Komma der Anrede geht es klein weiter.',
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 3 · Produzieren',
      frage: 'Schreib je einen Satz.',
      loesungLabel: 'Mögliche Lösung',
      aufgaben: [
        'Reagiere auf die Nachricht: „Ich habe die B1-Prüfung bestanden!“',
        'Erzähl eine Neuigkeit mit *Stell dir vor, …*',
        'Schlag ein Treffen am Wochenende vor.',
      ],
      loesungen: [
        '*Toll, dass du die Prüfung bestanden hast — herzlichen Glückwunsch!* ~~Vale cualquier reacción con emoción: Super! / Ich freue mich so für dich!~~',
        '*Stell dir vor, ich habe ein Fahrrad gekauft und fahre jetzt jeden Tag damit zur Arbeit.*',
        '*Wie wäre es am Sonntag? Wir könnten zusammen frühstücken.* ~~También válido: Hast du am Samstag Zeit?~~',
      ],
    },

    { type: 'rule' },

    // ── Prüfungsbezug ─────────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Schreiben · Teil 1 · komplette Aufgabe',
      titel: 'Informelle E-Mail „Besuch bei Paul“ · ca. 80 Wörter · 20 Minuten',
      anweisung: 'Bearbeite die Aufgabe unter Echtbedingungen (20 Minuten, alle drei Punkte) und vergleiche erst danach mit der Lösung.',
      absaetze: [
        'Dein Freund Paul ist in eine neue Wohnung umgezogen und hat dir geschrieben. Er lädt dich ein, ihn bald zu besuchen. Schreibe ihm eine E-Mail (ca. 80 Wörter):\n• Reagiere auf seine Nachricht.\n• Erzähl, was es bei dir Neues gibt.\n• Schlag einen Termin für einen Besuch vor.',
      ],
      loesungLabel: 'Mögliche Lösung (80 Wörter)',
      loesungen: [
        '*Lieber Paul,*',
        '*danke für deine E-Mail! Toll, dass du endlich eine neue Wohnung gefunden hast. Ich möchte sie unbedingt sehen.*',
        '*Bei mir ist gerade viel los: Ich mache einen Deutschkurs am Abend, weil ich im Herbst die B1-Prüfung machen will. Der Kurs ist anstrengend, aber er hilft mir sehr. Deshalb habe ich in der Woche leider wenig Zeit.*',
        '*Wie wäre es am nächsten Samstag? Ich könnte am Nachmittag kommen, dann zeigst du mir alles.*',
        '*Bis bald und viele Grüße\nJavier*',
      ],
      kommentar: 'Ein Absatz pro Punkt: reagieren (*Toll, dass…*) → erzählen (*Bei mir ist viel los…*) → vorschlagen (*Wie wäre es…?*). Die Verbindungswörter *weil, aber, deshalb, dann* bringen Punkte bei der **Kohärenz** — und alles bleibt im du-Register.',
    },

    { type: 'rule' },

    // ── Abschluss ─────────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Baustein', 'So geht es'],
      zeilen: [
        ['Anrede', 'Liebe/r + Name + Komma → klein weiter'],
        ['Struktur', 'reagieren → erzählen → vorschlagen/fragen'],
        ['Register', 'du, dich, dein (klein) · herzlicher Ton'],
        ['Gruß', 'Viele Grüße / Liebe Grüße + Name'],
        ['Rahmen', '~80 Wörter · 20 Minuten · 3 Punkte = 3 Absätze'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich schreibe eine informelle E-Mail mit Anrede, drei Absätzen und Gruß.',
        'Ich benutze die Struktur reagieren → erzählen → vorschlagen/fragen.',
        'Ich setze nach der Anrede ein Komma und schreibe klein weiter.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'In Teil 1 schreibst du **an eine Person** — in Teil 2 schreibst du **für alle**: einen Forumsbeitrag mit deiner Meinung zu einem Thema. Die nächste Lektion zeigt dir den Bauplan Meinung → Grund → Beispiel → Schluss und die wichtigsten Redemittel dafür.',
    },
  ],
}
