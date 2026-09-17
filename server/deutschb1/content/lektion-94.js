// Geschichte 4 · Die Reise nach Hamburg
//
// Lectura graduada B1 — la saga de María (ver BIBLIA de la saga).
// Gramática: bloques 0-3 (Reisen & Verkehr: Zug, Gleis, Verspätung,
// ausfallen, umsteigen, buchen, Rezeption, sich beschweren).
// El «giro inesperado»: la llamada de Herr Lindström en el puerto.

export default {
  spec: ['Geschichte 4', 'Lectura graduada', 'Niveau B1', 'Wortschatz: Bloque 0-3'],
  h1: 'Die Reise nach Hamburg',
  lead: 'Ein Wochenende am Wasser: Zugchaos, ein Hostel-Problem — und ein Anruf, der alles verändert. ~~El giro llega con las gaviotas.~~',

  content: [
    // ── Vor dem Lesen ─────────────────────────────────────────────
    {
      type: 'wortschatz',
      eyebrow: 'Vor dem Lesen',
      items: [
        { wort: 'der Hafen, ·Häfen', kollokation: 'am Hafen spazieren gehen', es: 'el puerto' },
        { wort: 'die Fähre, -n', kollokation: 'mit der Fähre fahren', es: 'el ferry' },
        { wort: 'die Möwe, -n', kollokation: 'die Möwen schreien', es: 'la gaviota' },
        { wort: 'übernachten', kollokation: 'in einem Hostel übernachten', es: 'pasar la noche, alojarse' },
        { wort: 'die Aussicht', kollokation: 'ein Zimmer mit Aussicht', es: 'la vista, las vistas' },
        { wort: 'der Anruf, -e', kollokation: 'einen wichtigen Anruf bekommen', es: 'la llamada' },
        { wort: 'annehmen', kollokation: 'einen Anruf / ein Angebot annehmen', es: 'aceptar, atender (una llamada)' },
        { wort: 'die Bedenkzeit', kollokation: 'um Bedenkzeit bitten', es: 'el tiempo para pensárselo' },
      ],
      hinweis: 'Ojo: **die Aussicht** es la vista desde un lugar (*ein Zimmer mit Aussicht*) — y también «la perspectiva» (*die Aussicht auf eine Stelle*). No la confundas con **die Ansicht** (la opinión).',
    },

    { type: 'rule' },

    // ── Die Geschichte ────────────────────────────────────────────
    {
      type: 'prose',
      card: true,
      titel: 'Ein Wochenende am Wasser — fast',
      absaetze: [
        'Am ersten Maiwochenende fuhren María, Carla und Paul nach Hamburg. Paul kam mit, „weil er die Stadt gut kennt" — das erklärte er zweimal, obwohl niemand gefragt hatte. Carla grinste ~~(sonrió con picardía)~~ und sagte nichts.',
        'Die Reise begann klassisch: Der **Zug** hatte vierzig Minuten **Verspätung**, dann **fiel** er ganz **aus**. Die **Durchsage** war lang, die Information kurz. Sie nahmen einen späteren Zug, mussten zweimal **umsteigen** und standen eine halbe Stunde auf einem kalten **Gleis** irgendwo im Nirgendwo ~~(en medio de la nada)~~. „Kein Problem", sagte Paul ruhig. „So sieht man mehr vom Land."',
        'In Hamburg regnete es. Natürlich. Im Hostel kam das nächste Problem: Sie hatten ein Zimmer für drei **gebucht** — die **Rezeption** fand nur eine Buchung für zwei. María holte tief Luft, blieb höflich und **beschwerte sich** so ruhig und so klar, dass der Mann an der Rezeption am Ende sagte: „Sie bekommen unser letztes Zimmer. Mit **Aussicht**." Carla flüsterte: „Seit wann kannst du SO gut Deutsch?"',
      ],
    },
    {
      type: 'prose',
      card: true,
      absaetze: [
        'Der Samstag war grau und wunderbar. Sie fuhren mit der **Fähre** über das Wasser, die **Möwen** schrien, und der **Hafen** roch nach Fisch und nach großer, weiter Welt. Paul erklärte die Schiffe, Carla fotografierte alles, sogar die Mülleimer ~~(papeleras)~~, und eine Möwe stahl ~~(robó)~~ einem Touristen das halbe Brötchen aus der Hand. María stand vorne im Wind und dachte an nichts. Zum ersten Mal seit Wochen — seit dem Vorstellungsgespräch, um genau zu sein — dachte sie wirklich an nichts.',
        'Und genau in diesem Moment klingelte ihr **Handy**. Eine Berliner Nummer. María **nahm** den **Anruf** **an** und hielt sich das andere Ohr zu. „Frau Vega? Lindström. Es hat länger gedauert als versprochen — ich mache es kurz: Die **Stelle** ist Ihre, wenn Sie wollen. Anfang Juni. Sagen Sie mir bis Montag **Bescheid**."',
        'María sagte „Ja", dann „Danke", dann noch einmal „Ja" — aber das letzte Ja war nur die Antwort auf „Haben Sie mich verstanden?". Dann war das Gespräch zu Ende. Sie stand im Wind, das Handy in der Hand, und die Möwen schrien weiter, als wäre nichts passiert.',
      ],
    },
    {
      type: 'prose',
      card: true,
      absaetze: [
        '„Was ist los?", rief Carla gegen den Wind. „Ich habe das **Angebot**", sagte María langsam. „Der Verlag. Die Stelle. Bis Montag habe ich **Bedenkzeit**." Carla schrie vor Freude lauter als alle Möwen zusammen. Paul sagte nur leise: „Ich wusste es." Und sein Lächeln war das größte von allen dreien.',
        'Aber am Abend, im Zimmer mit Aussicht, lag María wach. Eine Zusage ist keine einfache Sache, wenn man schon ein Leben hat: das Café, Deniz, die Stammgäste, den Geruch von Kaffee am Morgen. Irgendwann verstand sie: Das Problem war nicht die neue Tür. Das Problem war die alte.',
        'Auf der Rückfahrt am Sonntag funktionierte ausnahmsweise ~~(excepcionalmente)~~ alles: kein Ausfall, keine Verspätung, sogar die Sonne kam. „Siehst du", sagte Carla, „Hamburg war eine gute Idee." María sah aus dem Fenster und antwortete nicht. In ihrem Kopf fuhren zwei Züge in zwei verschiedene Richtungen — und der Montag kam näher.',
      ],
    },

    { type: 'rule' },

    // ── Nach dem Lesen ────────────────────────────────────────────
    {
      type: 'uebung',
      eyebrow: 'Nach dem Lesen',
      frage: 'Beantworte die Fragen zur Geschichte.',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Welche Probleme gibt es auf der Hinfahrt und im Hostel — und wie löst María das Problem an der Rezeption?',
        'Was sagt Herr Lindström am Telefon, und bis wann muss María antworten?',
        'Richtig oder falsch? María nimmt das Angebot noch am Hafen an.',
        '**Interpretation:** „Das Problem war nicht die neue Tür. Das Problem war die alte." Was bedeutet dieser Satz?',
      ],
      loesungen: [
        'Der Zug hat Verspätung und fällt dann aus; sie müssen zweimal umsteigen. Im Hostel fehlt die Buchung für die dritte Person. María beschwert sich ruhig, höflich und klar — und bekommt das letzte Zimmer, mit Aussicht.',
        'Die Stelle im Verlag Morgenlicht ist ihre, Anfang Juni geht es los. Sie muss ihm bis Montag Bescheid sagen.',
        '**Falsch.** Ihr letztes „Ja" am Telefon ist nur die Antwort auf „Haben Sie mich verstanden?". Sie hat bis Montag Bedenkzeit — und am Abend liegt sie noch wach und überlegt.',
        'Mögliche Antwort: María hat keine Angst vor der neuen Stelle (der neuen Tür) — sie freut sich darauf. Schwer ist der Abschied von ihrem alten Leben im Café: von Deniz, den Stammgästen, der Routine. Nicht das Neue macht die Entscheidung schwer, sondern das, was man dafür loslassen muss. ~~Lo difícil no es empezar, es soltar.~~',
      ],
    },

    { type: 'rule' },

    // ── Ausblick ──────────────────────────────────────────────────
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Montag um acht muss María im Verlag anrufen. Café Sonne oder Verlag Morgenlicht — bleiben oder springen? Die Antwort (und ein Abend am See, der alles ein bisschen verändert) steht in **Geschichte 5 — Eine wichtige Entscheidung**.',
    },
  ],
}
