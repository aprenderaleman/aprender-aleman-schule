// Geschichte 2 · Das Vorstellungsgespräch
//
// Lectura graduada B1 — la saga de María (ver BIBLIA de la saga).
// Gramática: bloques 0-2 (además: Redemittel de opinión, Termin-Sprache).
// Herr Lindström habla en frases cortas (canon del personaje).

export default {
  spec: ['Geschichte 2', 'Lectura graduada', 'Niveau B1', 'Wortschatz: Bloque 0-2'],
  h1: 'Das Vorstellungsgespräch',
  lead: 'Donnerstag, zehn Uhr, Verlag Morgenlicht: María sitzt vor Herrn Lindström — und sagt einmal zu oft „äh". ~~O quizá exactamente las veces necesarias.~~',

  content: [
    // ── Vor dem Lesen ─────────────────────────────────────────────
    {
      type: 'wortschatz',
      eyebrow: 'Vor dem Lesen',
      items: [
        { wort: 'das Vorstellungsgespräch, -e', kollokation: 'zu einem Vorstellungsgespräch einladen', es: 'la entrevista de trabajo' },
        { wort: 'sich vorstellen', kollokation: 'sich kurz vorstellen', es: 'presentarse' },
        { wort: 'der Eindruck, ·drücke', kollokation: 'einen guten Eindruck machen', es: 'la impresión' },
        { wort: 'der Chef, -s / die Chefin, -nen', kollokation: 'mit dem Chef sprechen', es: 'el/la jefe/a' },
        { wort: 'nervös', kollokation: 'vor dem Gespräch nervös sein', es: 'nervioso/a' },
        { wort: 'die Zusage, -n', kollokation: 'auf eine Zusage warten', es: 'la respuesta positiva, el sí' },
        { wort: 'die Absage, -n', kollokation: 'eine Absage bekommen', es: 'la negativa, el no' },
        { wort: 'einstellen', kollokation: 'neue Leute einstellen', es: 'contratar' },
        { wort: 'die Daumen drücken', kollokation: 'jemandem die Daumen drücken', es: 'cruzar los dedos (por alguien)' },
      ],
      hinweis: 'Ojo: **einen guten Eindruck machen** = causar buena impresión. No confundas **der Eindruck** (la impresión que causas) con **der Ausdruck** (la expresión) ni con **drucken** (imprimir).',
    },

    { type: 'rule' },

    // ── Die Geschichte ────────────────────────────────────────────
    {
      type: 'prose',
      card: true,
      titel: 'Drei Tage Spiegel, ein Rat von Deniz',
      absaetze: [
        'Die **Einladung** kam an einem Montag, das **Gespräch** war am Donnerstag um zehn. Drei Tage lang übte María Antworten vor dem Spiegel: „Ich heiße María Vega, ich komme aus Valencia …" Es klang jedes Mal falscher.',
        'Am Mittwochabend stellte Deniz ihr im Café einen Kakao hin und sagte: „Hör auf zu üben. Du bist am besten, wenn du normal redest. Und zieh dich nicht zu elegant an — du willst in einem Verlag arbeiten, nicht in einer Bank." María lachte zum ersten Mal seit Montag.',
        'Am Donnerstag stand sie viel zu früh auf. Sie war so **nervös**, dass sie fast ihre Fahrkarte vergaß. Im Treppenhaus traf sie Frau Krüger, die sie von oben bis unten ansah und sagte: „Sie sehen ordentlich aus, Kind. Wo müssen Sie hin?" — „Zu einem wichtigen **Termin**." — „Dann kommen Sie nicht zu spät. In Deutschland ist pünktlich schon fast zu spät." María war vierzig Minuten zu früh da und trank zwei Tassen Tee in einer Bäckerei um die Ecke. Der Verlag Morgenlicht lag in einem alten Haus im Hinterhof ~~(patio interior)~~: drei Räume, überall Bücher, und es roch nach Papier und Kaffee.',
      ],
    },
    {
      type: 'prose',
      card: true,
      absaetze: [
        'Herr Lindström war ein großer, ruhiger Mann von fünfundfünfzig Jahren. Er sprach in kurzen Sätzen. „Frau Vega. Setzen Sie sich. Kaffee?" — „Ja, gern." — „Gut. Erzählen Sie."',
        'María erzählte. Zuerst zu schnell, dann normal. Vom Café Sonne, von den Büchern, von ihrem Deutsch, das jeden Monat besser wurde. Herr Lindström fragte: „Ihre **Stärke**?" — „Ich gebe nicht auf." ~~(no me rindo)~~ — „Ihre **Schwäche**?" — „Ich bin manchmal ungeduldig ~~(impaciente)~~. Und wenn ich nervös bin, sage ich zu oft ‚äh‘. Äh — wie jetzt." Herr Lindström lächelte. Zum ersten Mal.',
        'Dann zeigte er ihr den Verlag: den Raum mit den neuen Büchern, den langen Tisch, an dem das Team jeden Morgen sprach. „Die Arbeit ist viel", sagte er. „E-Mails, **Termine**, Post, Kaffee. Aber wer hier arbeitet, lernt, wie man Bücher macht." Er fragte noch, warum ausgerechnet ~~(precisamente)~~ dieser Verlag, und María antwortete ehrlich: „Weil in der Anzeige ‚Bücher mit Herz‘ stand. Und weil ich das verstanden habe — nicht nur die Wörter." Herr Lindström schrieb etwas auf. María sah die vollen Regale an und dachte: Hier möchte ich bleiben.',
      ],
    },
    {
      type: 'prose',
      card: true,
      absaetze: [
        'Am Ende gab Herr Lindström ihr die Hand. „Danke, Frau Vega. Wir sprechen noch mit zwei anderen. Wir **melden uns** in drei Wochen." Drei Wochen! María nickte und sagte etwas Höfliches — auf der Straße wusste sie schon nicht mehr, was.',
        'Im Café Sonne warteten Deniz und Paul. Paul war „ganz zufällig" da ~~(por pura casualidad, dice él)~~. „Und?", fragten beide gleichzeitig. „Ich habe ‚äh‘ gesagt, und er hat gelächelt", sagte María. „Also bekomme ich **entweder** eine **Zusage** **oder** eine sehr freundliche **Absage**." Deniz stellte drei Tassen auf den Tisch. „Wir **drücken die Daumen**. Und wenn es nicht **klappt**, wirst du hier Chefin. Das ist mein **Angebot**."',
        'In dieser Nacht schrieb María in ihr Heft: „Ich habe einen guten **Eindruck** gemacht. Glaube ich. Vielleicht." Dann malte sie ein kleines Buch daneben und schlief sofort ein.',
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
        'Welchen Rat gibt Deniz María vor dem Gespräch?',
        'Wie antwortet María auf die Frage nach ihrer Schwäche — und wie reagiert Herr Lindström?',
        'Richtig oder falsch? María bekommt am Ende des Gesprächs sofort eine Zusage.',
        '**Interpretation:** Warum lächelt Herr Lindström, als María „äh" sagt?',
      ],
      loesungen: [
        'Nicht mehr üben, normal reden — und sich nicht zu elegant anziehen: „Du willst in einem Verlag arbeiten, nicht in einer Bank."',
        'Sie ist ehrlich: Sie ist manchmal ungeduldig und sagt zu oft „äh", wenn sie nervös ist — und im selben Moment passiert es. Herr Lindström lächelt zum ersten Mal.',
        '**Falsch.** Der Verlag spricht noch mit zwei anderen und meldet sich erst in drei Wochen.',
        'Mögliche Antwort: Marías Antwort ist ehrlich und sympathisch. Sie nennt ihre Schwäche nicht nur — sie zeigt sie und lacht über sich selbst. Genau diese Ehrlichkeit macht einen guten Eindruck. ~~La honestidad con humor vale más que la respuesta perfecta.~~',
      ],
    },

    { type: 'rule' },

    // ── Ausblick ──────────────────────────────────────────────────
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Drei Wochen warten — das ist lang. Zum Glück hat María bald keine Zeit zum Warten: Carla zieht bei ihr ein, und das Zusammenleben wird … interessant. Mehr davon in **Geschichte 3 — Ärger in der WG**.',
    },
  ],
}
