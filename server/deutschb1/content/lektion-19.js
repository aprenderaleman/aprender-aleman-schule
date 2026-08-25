// Lektion 19 · Lesen Teil 1: Blogs & E-Mails
//
// Bloque 2 «Prüfungsstrategie» — módulo Lesen (canon interno: Lektion 18).
// Teil 1: persönlicher Text (Blog/E-Mail), richtig/falsch + Auswahl, ca. 10 Min.

export default {
  spec: ['Bloque 2', 'Prüfungsstrategie', 'Niveau B1', 'Prüfungsrelevanz: Lesen Teil 1'],
  h1: 'Lesen Teil 1: Blogs & E-Mails',
  lead: 'Ein persönlicher Text — ein Blog oder eine E-Mail — und die Frage: **richtig oder falsch?** Hier lernst du, die typischen Fallen zu erkennen. ~~Diez minutos, un texto personal.~~',

  content: [
    // ── Lernziele ─────────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'persönliche Texte (Blog, E-Mail) schnell global verstehen',
        'Aussagen gegen den Text prüfen: richtig oder falsch?',
        'Zeit- und Signalwörter erkennen, die die Bedeutung ändern (*früher, nicht mehr, leider*)',
        'Teil 1 in ca. 10 Minuten lösen',
      ],
    },

    { type: 'rule' },

    // ── Kernwortschatz ────────────────────────────────────────────
    {
      type: 'wortschatz',
      eyebrow: 'Kernwortschatz — persönliche Texte',
      items: [
        { wort: 'der Blogeintrag, -träge', kollokation: 'einen Blogeintrag schreiben', es: 'la entrada de blog' },
        { wort: 'der Betreff', kollokation: 'der Betreff der E-Mail', es: 'el asunto (del correo)' },
        { wort: 'berichten über + Akk.', kollokation: 'über den Umzug berichten', es: 'contar, informar sobre' },
        { wort: 'umziehen', kollokation: 'nach Hamburg umziehen', es: 'mudarse' },
        { wort: 'die Erfahrung, -en', kollokation: 'gute Erfahrungen machen', es: 'la experiencia' },
        { wort: 'sich freuen über + Akk.', kollokation: 'sich über den Besuch freuen', es: 'alegrarse de (algo presente)' },
        { wort: 'sich freuen auf + Akk.', kollokation: 'sich auf das Wochenende freuen', es: 'tener ganas de (algo futuro)' },
        { wort: 'vermissen', kollokation: 'die Familie vermissen', es: 'echar de menos' },
        { wort: 'empfehlen', kollokation: 'einen Kurs empfehlen', es: 'recomendar' },
        { wort: 'inzwischen', kollokation: 'inzwischen geht es besser', es: 'entretanto, a estas alturas' },
      ],
      hinweis: '„Ich bin **seit** drei Monaten in Hamburg“ steht im Präsens. ~~En español dirías «llevo tres meses»: seit + presente = duración que continúa.~~',
    },

    { type: 'rule' },

    // ── Erklärung ─────────────────────────────────────────────────
    {
      type: 'steps',
      eyebrow: 'Erklärung — die Methode für Teil 1',
      steps: [
        {
          titel: 'Aufgaben zuerst',
          text: 'Lies die Aussagen **vor** dem Text und unterstreiche das Schlüsselwort. ~~Así sabes qué buscar.~~',
        },
        {
          titel: 'Einmal überfliegen',
          text: '**Wer** schreibt? **Worüber**? Ist die Stimmung positiv oder negativ?',
        },
        {
          titel: 'Stelle finden, Aussage prüfen',
          text: 'Die Aufgaben folgen in der Regel der **Reihenfolge des Textes**. Suche die Stelle und vergleiche: Sagt der Text das wirklich?',
        },
        {
          titel: 'Auf kleine Wörter achten',
          text: '__früher, nicht mehr, noch nicht, leider, nur__ — ein kleines Wort dreht die ganze Aussage.',
        },
      ],
    },
    {
      type: 'prose',
      card: true,
      titel: 'Die typische Falle: gleiches Wort, falsche Aussage',
      absaetze: [
        'Im Text steht: „**Früher** habe ich in München gewohnt.“ Die Aussage lautet: „Sie wohnt in München.“ → **Falsch!** Das Wort *München* steht im Text, aber die Zeit stimmt nicht. ~~Ojo con «früher», «inzwischen», «nicht mehr»: cambian todo el sentido.~~',
        'Merke: Ein bekanntes Wort in der Aussage ist **kein Beweis** — entscheidend ist die ganze Bedeutung.',
      ],
    },

    { type: 'rule' },

    // ── Beispiele ─────────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele — kleine Wörter, große Wirkung',
      kicker: 'Signalwörter',
      titel: 'So drehen sie die Bedeutung',
      items: [
        { text: '„Ich gehe **nicht mehr** ins Fitnessstudio.“', gl: '— früher ja, jetzt nein' },
        { text: '„Ich habe **noch keinen** Job gefunden.“', gl: '— sie sucht weiter' },
        { text: '„**Leider** war das Wetter schlecht.“', gl: '— negative Bewertung' },
        { text: '„Ich arbeite **nur** am Vormittag.“', gl: '— nachmittags nicht' },
      ],
    },
    { type: 'rule' },

    // ── Übungen ───────────────────────────────────────────────────
    {
      type: 'uebung',
      eyebrow: 'Anwendung — Übung 1 · Erkennen',
      frage: 'Richtig oder falsch? Prüfe die Aussage gegen den Satz.',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Satz: „Wir haben früher oft zusammen gekocht.“ — Aussage: „Sie kochen oft zusammen.“',
        'Satz: „Der Kurs war teurer, als ich dachte.“ — Aussage: „Der Kurs war günstig.“',
        'Satz: „Ich freue mich schon auf den Besuch meiner Eltern.“ — Aussage: „Ihre Eltern kommen sie besuchen.“',
      ],
      loesungen: [
        '**Falsch** — „früher“: heute nicht mehr (oder wir wissen es nicht aus dem Satz).',
        '**Falsch** — „teurer, als ich dachte“ = eher teuer, nicht günstig.',
        '**Richtig** — „sich freuen **auf**“ = der Besuch kommt noch. ~~Futuro planeado.~~',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 2 · Paraphrase wählen',
      frage: 'Welche Option sagt dasselbe wie der Text? a oder b?',
      loesungLabel: 'Lösung',
      aufgaben: [
        '„Die Arbeit macht mir viel mehr Spaß als mein alter Job.“ — a) Sie mag ihre neue Arbeit. b) Sie möchte ihren alten Job zurück.',
        '„Die Mieten in der Stadt sind für mich zu hoch.“ — a) Sie kann sich eine Wohnung in der Stadt nicht leisten. b) Sie wohnt gern in der Stadt.',
      ],
      loesungen: [
        '**a** — „mehr Spaß als der alte Job“ = die neue Arbeit gefällt ihr.',
        '**a** — „zu hoch“ = sie kann es nicht bezahlen. ~~«zu + adjetivo» siempre es negativo: demasiado.~~',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 3 · Produzieren',
      frage: 'Lies den Mini-Text und schreibe selbst zwei Aussagen: eine richtige und eine falsche.\n„Seit Januar mache ich einen Kochkurs. Am Anfang habe ich viel verbrannt, aber inzwischen klappt fast alles. Nächsten Monat koche ich zum ersten Mal für meine Freunde.“',
      loesungLabel: 'Mögliche Lösung',
      aufgaben: [
        'Eine **richtige** Aussage:',
        'Eine **falsche** Aussage:',
      ],
      loesungen: [
        '„Der Kochkurs läuft seit Januar.“ ~~También vale: «Inzwischen kocht er/sie besser».~~',
        '„Er/Sie hat schon für seine/ihre Freunde gekocht.“ — falsch, denn das passiert erst **nächsten Monat**.',
      ],
    },

    { type: 'rule' },

    // ── Prüfungsbezug ─────────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Lesen · Teil 1',
      titel: 'Komplette Übung: Blog (ca. 180 Wörter) + 5 Aufgaben',
      anweisung: 'Lies den Blog. Sind die Aussagen 1–4 richtig oder falsch? Kreuze bei Aufgabe 5 die richtige Lösung an. Zeit: ca. 10 Minuten.',
      absaetze: [
        '**Mein neues Leben in Hamburg — Blog von Laura**',
        'Hallo ihr Lieben! Seit sechs Monaten wohne ich jetzt in Hamburg — Zeit für einen kleinen Bericht. Ich bin für meine neue Stelle in einer Werbeagentur hierhergezogen, und die Arbeit gefällt mir wirklich gut.',
        'Der Anfang war trotzdem nicht leicht. Das Wetter! Es hat fast jeden Tag geregnet, und ich habe die Sonne von Valencia sehr vermisst. Auch die Sprache war ein Problem: Im Büro sprechen alle sehr schnell, und am Anfang habe ich in Meetings oft nur die Hälfte verstanden. Zum Glück haben meine Kolleginnen und Kollegen viel Geduld mit mir.',
        'Inzwischen ist vieles besser. Zweimal pro Woche treffe ich mich mit meiner Tandempartnerin Merle: Sie lernt Spanisch, ich übe Deutsch. Und samstags gehe ich auf den Wochenmarkt am Hafen — mein Lieblingsort in der Stadt! Dort kaufe ich Obst, Fisch und Blumen, und danach trinke ich einen Kaffee am Wasser.',
        'Natürlich vermisse ich meine Familie. Aber im Dezember kommt meine Schwester mich endlich besuchen. Mein Tipp für alle, die neu in einer Stadt sind: Sucht euch einen Tandempartner. So lernt ihr die Sprache — und nette Leute.',
      ],
      optionen: [
        '(1) Laura ist wegen der Arbeit nach Hamburg gezogen. — richtig / falsch',
        '(2) Das Wetter in Hamburg hat ihr von Anfang an gut gefallen. — richtig / falsch',
        '(3) Laura versteht in Meetings immer noch nur die Hälfte. — richtig / falsch',
        '(4) Ihre Schwester hat sie in Hamburg schon besucht. — richtig / falsch',
        '(5) Was empfiehlt Laura ihren Leserinnen und Lesern? — a) samstags auf den Markt gehen · b) einen Tandempartner suchen · c) in eine Werbeagentur gehen',
      ],
      loesungLabel: 'Lösung mit Begründung',
      loesungen: [
        '(1) **Richtig.** „Ich bin für meine neue Stelle … hierhergezogen“ — *Stelle* = Arbeit. ~~Paráfrasis: «wegen der Arbeit» no aparece literal.~~',
        '(2) **Falsch.** „Es hat fast jeden Tag geregnet, und ich habe die Sonne … vermisst“ — das Gegenteil.',
        '(3) **Falsch.** „**Am Anfang** … oft nur die Hälfte verstanden“ + „**Inzwischen** ist vieles besser“ — die Zeitwörter entscheiden.',
        '(4) **Falsch.** „Im Dezember **kommt** meine Schwester mich **endlich** besuchen“ — der Besuch liegt in der Zukunft.',
        '(5) **b.** „Mein Tipp …: Sucht euch einen Tandempartner.“ — Der Markt ist Lauras Lieblingsort, aber kein Tipp (Falle a).',
      ],
      kommentar: 'Typisch Teil 1: Alle falschen Aussagen benutzen **Wörter aus dem Text** (Wetter, Meetings, Schwester) — aber Zeit oder Bedeutung stimmen nicht. Genau das ist die Falle.',
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Entscheide **nur mit dem Text**, nie mit deinem Weltwissen. „Hamburg ist schön“ mag stimmen — wenn es nicht im Text steht, ist die Aussage in der Prüfung **falsch**.',
    },

    { type: 'rule' },

    // ── Abschluss ─────────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Schritt', 'So machst du es'],
      zeilen: [
        ['Vorbereiten', 'Aussagen zuerst lesen, Schlüsselwörter unterstreichen'],
        ['Überfliegen', 'Wer schreibt? Worüber? Positiv oder negativ?'],
        ['Prüfen', 'Textstelle suchen — Aufgaben folgen der Textreihenfolge'],
        ['Aufpassen', 'früher / inzwischen / nicht mehr / nur drehen die Bedeutung'],
        ['Zeit', 'ca. 10 Minuten für Teil 1'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich verstehe einen Blog oder eine E-Mail global, ohne jedes Wort zu kennen.',
        'Ich prüfe Aussagen gegen den Text — nicht gegen mein Weltwissen.',
        'Ich achte auf Zeit- und Signalwörter wie *früher*, *inzwischen*, *nicht mehr*.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'In Teil 1 liest du **einen** langen Text genau. In **Teil 2** ist es umgekehrt: viele kurze Anzeigen, wenig Zeit pro Text. Dafür brauchst du eine neue Technik — die Schlüsselwort-Methode. Das ist das Thema der nächsten Lektion.',
    },
  ],
}
