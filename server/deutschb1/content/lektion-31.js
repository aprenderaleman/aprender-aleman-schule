// Lektion 31 · Sprechen Teil 1 — Gemeinsam etwas planen
//
// Bloque 2 · Modul Sprechen. Vorschlagen, zustimmen, höflich ablehnen,
// sich einigen. Modelldialog (Party planen) mit Kommentar. Enlace explícito
// con las Wechselpräpositionen de la Lektion 8 (am Bahnhof / ins Café).

export default {
  spec: ['Bloque 2', 'Prüfungsstrategie', 'Niveau B1', 'Prüfungsrelevanz: Sprechen'],
  h1: 'Sprechen Teil 1 — Gemeinsam etwas planen',
  lead: 'Vorschlagen, freundlich reagieren, sich einigen: Zu zweit plant ihr etwas Konkretes. ~~La clave: es un diálogo, no dos monólogos.~~',

  content: [
    // ── Lernziele ─────────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'Vorschläge machen: *Wollen wir …?*, *Wie wäre es mit …?*',
        'zustimmen und höflich ablehnen — immer mit Alternative',
        'am Ende einen konkreten Plan zusammenfassen',
      ],
    },

    { type: 'rule' },

    // ── Kernwortschatz ────────────────────────────────────────────
    {
      type: 'wortschatz',
      eyebrow: 'Kernwortschatz',
      items: [
        { wort: 'der Vorschlag, -schläge', kollokation: 'einen Vorschlag machen', es: 'propuesta' },
        { wort: 'vorschlagen', kollokation: 'Ich schlage vor, dass …', es: 'proponer' },
        { wort: 'sich treffen', kollokation: 'Wir treffen uns am Bahnhof.', es: 'quedar, encontrarse' },
        { wort: 'der Ausflug, -flüge', kollokation: 'einen Ausflug machen', es: 'excursión' },
        { wort: 'mitbringen', kollokation: 'Ich bringe einen Kuchen mit.', es: 'traer (consigo)' },
        { wort: 'sich kümmern um', kollokation: 'Ich kümmere mich um die Getränke.', es: 'encargarse de' },
        { wort: 'einladen', kollokation: 'Wen laden wir ein?', es: 'invitar' },
        { wort: 'einverstanden', kollokation: 'Einverstanden!', es: 'de acuerdo' },
        { wort: 'passen', kollokation: 'Samstag passt mir gut.', es: 'venir bien' },
        { wort: 'klappen', kollokation: 'Das klappt leider nicht.', es: 'funcionar, salir bien' },
        { wort: 'verschieben', kollokation: 'die Party auf Sonntag verschieben', es: 'aplazar' },
        { wort: 'sich einigen', kollokation: 'Wir einigen uns auf Sonntag.', es: 'ponerse de acuerdo' },
      ],
    },

    { type: 'rule' },

    // ── Erklärung ─────────────────────────────────────────────────
    {
      type: 'steps',
      eyebrow: 'Erklärung — so läuft Teil 1',
      steps: [
        {
          titel: 'Vorschlagen',
          text: 'Eröffne mit einer Frage: __Wollen wir …?__, __Wie wäre es mit …?__, __Wir könnten …__ ~~Una pregunta invita al partner a reaccionar — eso es interacción.~~',
        },
        {
          titel: 'Reagieren',
          text: 'Zustimmen: __Gute Idee!__ Oder ablehnen — aber nie nur „Nein“: Nenn immer eine **Alternative**. __„Das ist eine gute Idee, **aber** Samstag kann ich nicht. **Wie wäre es mit** Sonntag?“__',
        },
        {
          titel: 'Sich einigen',
          text: 'Fasst am Ende den Plan zusammen: **Wann? Wo? Wer macht was?** Genau diese Zusammenfassung wollen die Prüfer hören.',
        },
      ],
    },
    {
      type: 'prose',
      card: true,
      absaetze: [
        '**Erinnerst du dich an Lektion 8?** Beim Planen brauchst du ständig die **Wechselpräpositionen**: „Wir treffen uns **am** Bahnhof“ ~~(Wo? → Dativ)~~, „Danach gehen wir **ins** Café“ ~~(Wohin? → Akkusativ)~~. Frag dich wieder: **Bewegung oder Position?**',
      ],
    },

    { type: 'rule' },

    // ── Beispiele / Redemittel + Modell ───────────────────────────
    {
      type: 'redemittel',
      eyebrow: 'Beispiele — Redemittel für Teil 1',
      gruppen: [
        {
          fn: 'Vorschlagen',
          saetze: [
            { satz: 'Wollen wir …?' },
            { satz: 'Wie wäre es mit …?' },
            { satz: 'Wir könnten …' },
            { satz: 'Hast du Lust auf …?' },
          ],
        },
        {
          fn: 'Zustimmen',
          saetze: [
            { satz: 'Das ist eine gute Idee!' },
            { satz: 'Einverstanden.' },
            { satz: 'Ja, das passt mir gut.' },
          ],
        },
        {
          fn: 'Höflich ablehnen',
          saetze: [
            { satz: 'Das ist eine gute Idee, aber …' },
            { satz: 'Da kann ich leider nicht.' },
            { satz: 'Hm, ich weiß nicht. Vielleicht lieber …?', gloss: '~~rechaza suave y ofrece alternativa~~' },
          ],
        },
        {
          fn: 'Sich einigen',
          saetze: [
            { satz: 'Also gut, dann machen wir das so.' },
            { satz: 'Dann treffen wir uns um fünf am Bahnhof.' },
            { satz: 'Super, das ist ein Plan!' },
          ],
        },
      ],
    },
    {
      type: 'modell',
      eyebrow: 'Beispiele — Modelldialog',
      thema: 'Teil 1 · Eine Party für Miguel planen',
      woerter: 'Gespräch zu zweit',
      absaetze: [
        '**A:** Du, Miguel hat nächste Woche Geburtstag. Wollen wir eine kleine Party für ihn organisieren?\n**B:** Ja, gern! Wie wäre es mit Samstagabend bei mir zu Hause?\n**A:** Das ist eine gute Idee, aber am Samstag arbeite ich bis zehn. Können wir die Party auf Sonntag verschieben?\n**B:** Klar, Sonntag passt mir auch. Und wenn das Wetter schön ist, feiern wir im Park.',
        '**A:** Super! Wer kümmert sich um das Essen?\n**B:** Ich kann einen Kuchen backen. Bringst du die Getränke mit?\n**A:** Einverstanden. Ich kaufe sie im Supermarkt neben dem Park. Und wen laden wir ein?\n**B:** Die ganze Gruppe aus dem Deutschkurs, oder?\n**A:** Perfekt. Also: Sonntag um fünf im Park, du machst den Kuchen, ich bringe die Getränke mit.\n**B:** Genau, das ist ein Plan!',
      ],
      annotationen: [
        { tag: 'Vorschlag', text: '„Wollen wir …?“ eröffnet das Gespräch — direkt und freundlich.' },
        { tag: 'Ablehnung + Alternative', text: 'Nie nur „Nein“: erst loben („gute Idee“), dann das Problem, dann die Alternative.' },
        { tag: 'Wechselpräpositionen', text: '**bei mir zu Hause · im Park · neben dem Park** — Lektion 8 in Aktion.' },
        { tag: 'Einigung', text: 'Der Plan wird am Ende **zusammengefasst**: Tag, Uhrzeit, Ort, Aufgaben.' },
      ],
    },

    { type: 'rule' },

    // ── Übungen ───────────────────────────────────────────────────
    {
      type: 'uebung',
      eyebrow: 'Anwendung — Übung 1 · Erkennen',
      frage: 'Vorschlag, Zustimmung oder Ablehnung?',
      loesungLabel: 'Lösung',
      aufgaben: [
        '„Wie wäre es mit einem Picknick?“',
        '„Hm, ich weiß nicht. Vielleicht lieber ins Kino?“',
        '„Ja, das passt mir gut.“',
        '„Wollen wir uns um sieben treffen?“',
      ],
      loesungen: [
        '**Vorschlag.**',
        '**Höfliche Ablehnung** — mit neuem Vorschlag als Alternative.',
        '**Zustimmung.**',
        '**Vorschlag** (als Ja/Nein-Frage — die Stimme geht nach oben!).',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 2 · Reagieren',
      frage: 'Antworte höflich: erst zustimmen oder ablehnen, dann weiterplanen.',
      loesungLabel: 'Mögliche Lösung',
      aufgaben: [
        '„Wollen wir am Freitag ins Schwimmbad gehen?“ — Du kannst am Freitag nicht.',
        '„Ich schlage vor, dass jeder etwas zu essen mitbringt.“ — Du findest die Idee gut.',
        '„Treffen wir uns im Café?“ — Du möchtest lieber in den Park.',
      ],
      loesungen: [
        '„Das ist eine gute Idee, aber am Freitag kann ich leider nicht. Wie wäre es mit Samstag?“',
        '„Einverstanden! Ich bringe einen Salat mit.“',
        '„Hm, im Café ist es oft voll. Können wir lieber in den Park gehen?“ ~~fíjate: im Café (Wo?) / in den Park (Wohin?) — Lektion 8~~',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 3 · Produzieren',
      frage: 'Plant zu zweit einen Ausflug am Wochenende. Schreib vier Repliken: Vorschlag → Ablehnung mit Alternative → Zustimmung → Plan.',
      aufgabe: 'Sprecht über diese Punkte: Wohin? Wann? Wie fahrt ihr? Was nehmt ihr mit?',
      loesungLabel: 'Mögliche Lösung',
      loesung: '**A:** „Wollen wir am Samstag einen Ausflug an den See machen?“\n**B:** „Gute Idee, aber am Samstag soll es regnen. Wie wäre es mit Sonntag?“\n**A:** „Einverstanden, dann Sonntag. Wir könnten mit dem Zug fahren, das ist billiger.“\n**B:** „Perfekt. Also: Sonntag um neun am Bahnhof, ich bringe Brote mit und du die Getränke.“ ~~Cualquier variante vale si propone, reacciona y cierra con un plan concreto.~~',
    },

    { type: 'rule' },

    // ── Prüfungsbezug ─────────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Sprechen · Teil 1',
      titel: 'Gemeinsam etwas planen',
      anweisung: 'So sieht die Aufgabe im Examen aus. Sprecht über die Punkte und einigt euch:',
      absaetze: [
        '**Aufgabe:** Eine Freundin aus eurem Deutschkurs hat die B1-Prüfung bestanden. Ihr möchtet mit ihr feiern. Plant die Feier.\n• Wann?\n• Wo?\n• Was mitbringen?\n• Wen einladen?',
      ],
      loesungLabel: 'So gehst du vor',
      loesungen: [
        'Es gibt keine einzige „richtige“ Lösung — wichtig ist: auf **jeden Punkt** eingehen, auf den Partner **reagieren** und euch am Ende **einigen**.',
        'Gerüst: Vorschlag („Wollen wir am Freitag …?“) → Reaktion („Gute Idee, aber …“) → nächster Punkt → Zusammenfassung („Also: Freitag um sieben bei dir, ich bringe den Kuchen mit …“).',
      ],
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Teil 1 ist ein **Dialog**: Die Prüfer bewerten auch die **Interaktion**. Stell deinem Partner Fragen („Und du? Was meinst du?“) und reagiere auf seine Ideen — wer nur den eigenen Plan durchzieht, verschenkt Punkte.',
    },

    { type: 'rule' },

    // ── Abschluss ─────────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Funktion', 'Redemittel'],
      zeilen: [
        ['Vorschlagen', 'Wollen wir …? · Wie wäre es mit …? · Wir könnten …'],
        ['Zustimmen', 'Das ist eine gute Idee! · Einverstanden. · Das passt mir gut.'],
        ['Ablehnen + Alternative', 'Gute Idee, aber … · Vielleicht lieber …?'],
        ['Sich einigen', 'Also gut, dann machen wir das so. · Das ist ein Plan!'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich kann einen Vorschlag machen und auf Vorschläge reagieren.',
        'Ich lehne höflich ab und nenne immer eine Alternative.',
        'Ich fasse am Ende den Plan zusammen: Wann? Wo? Wer macht was?',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Nach dem gemeinsamen Planen kommt dein Solo: In **Teil 2** hältst du eine kleine Präsentation von ca. drei Minuten. Mit einem festen Gerüst aus fünf Schritten ist das kein Sprung ins kalte Wasser — das trainierst du in der nächsten Lektion.',
    },
  ],
}
