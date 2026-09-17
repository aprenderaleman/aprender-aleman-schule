// Geschichte 2 · Das Wochenende in Potsdam
//
// Lectura graduada A2 — canon: A1 completo + Bloques 0-1 del A2.
// Gramática nueva en acción: Perfekt, war/hatte, weil/dass/wenn, deshalb,
// Komparativ, Präpositionen (Bloque 1 completo).

export default {
  spec: ['Geschichte 2', 'Lectura graduada', 'Niveau A2', 'Wortschatz: Bloque 0-1'],
  h1: 'Das Wochenende in Potsdam',
  lead: 'Ein Samstag, ein Zug, ein altes Schloss: der erste Ausflug. ~~Este capítulo ya narra en Perfekt y usa weil, dass y wenn — todo del Bloque 1.~~',

  content: [
    // ── Vor dem Lesen ─────────────────────────────────────────────
    {
      type: 'wortschatz',
      eyebrow: 'Vor dem Lesen',
      items: [
        { wort: 'der Ausflug', kollokation: 'einen Ausflug machen', es: 'la excursión' },
        { wort: 'das Schloss', kollokation: 'ein altes Schloss', es: 'el palacio, el castillo' },
        { wort: 'besichtigen', kollokation: 'das Schloss besichtigen', es: 'visitar (un monumento)' },
        { wort: 'der Park', kollokation: 'durch den Park gehen', es: 'el parque' },
        { wort: 'das Wetter', kollokation: 'Das Wetter war super.', es: 'el tiempo (meteorológico)' },
        { wort: 'die Sonne', kollokation: 'Die Sonne scheint.', es: 'el sol' },
        { wort: 'scheinen', kollokation: 'Die Sonne hat geschienen.', es: 'brillar (el sol)' },
        { wort: 'der See, -n', kollokation: 'am See sitzen', es: 'el lago' },
        { wort: 'das Eis', kollokation: 'ein Eis essen', es: 'el helado' },
        { wort: 'das Foto, -s', kollokation: 'Fotos machen', es: 'la foto' },
      ],
      hinweis: '~~Fíjate al leer: besichtigen y scheinen aparecen en Perfekt (hat besichtigt, hat geschienen).~~',
    },

    { type: 'rule' },

    // ── Geschichte ────────────────────────────────────────────────
    {
      type: 'prose',
      eyebrow: 'Geschichte',
      card: true,
      titel: 'Das Wochenende in Potsdam',
      absaetze: [
        'Am Freitagabend hat Paul an Marías Tür geklopft ~~(ha llamado a la puerta)~~. „Du arbeitest so viel“, hat er gesagt. „Ich glaube, dass du eine Pause ~~(un descanso)~~ brauchst. Warst du schon in Potsdam?“ María war noch nie ~~(todavía nunca)~~ dort. „Dann fahren wir morgen!“',
        'Am Samstag sind sie um neun Uhr mit dem Zug gefahren. Die Fahrkarten ~~(los billetes)~~ waren nicht teuer, und der Zug hat nur vierzig Minuten gebraucht. Das **Wetter** war perfekt ~~(perfecto)~~: Die **Sonne** hat **geschienen**, und der Himmel ~~(el cielo)~~ war blau.',
      ],
    },
    {
      type: 'prose',
      card: true,
      absaetze: [
        'In Potsdam haben sie zuerst ein altes **Schloss** **besichtigt**. „Hier hat früher ein König gewohnt ~~(aquí vivía antes un rey)~~“, hat Paul gesagt. María hat viele **Fotos** gemacht: das Schloss, den Garten ~~(el jardín)~~, Paul vor dem Schloss. Im Schloss waren viele Menschen ~~(gente)~~, deshalb sind sie langsam von Zimmer zu Zimmer gegangen. „So viele Betten, so viele Tische — aber keine Küche!“, hat María gesagt. „Doch ~~(sí que la hay)~~“, hat Paul geantwortet, „aber die Küche war für den König nicht interessant.“',
        'Danach sind sie durch den **Park** gegangen. Der Park war sehr groß. „Dieser Park ist schöner als der Volkspark!“, hat María gesagt. „Ja“, hat Paul geantwortet, „aber der Volkspark ist näher ~~(está más cerca)~~.“ Um eins hatten sie Hunger. An einem kleinen Stand ~~(puesto)~~ hat María Äpfel gekauft, denn sie waren billiger als im Supermarkt. Nach zwei Stunden waren sie müde ~~(cansados)~~, deshalb haben sie am **See** Pause gemacht — mit einem **Eis**, natürlich.',
      ],
    },
    {
      type: 'prose',
      card: true,
      absaetze: [
        'Am See hat María von der Arbeit erzählt ~~(ha contado)~~: vom Café, von den Gästen und von Deniz. „Die Arbeit ist gut, weil die Kollegen nett sind“, hat sie gesagt. „Aber die Gäste sprechen so schnell! Ich möchte besser Deutsch sprechen.“ Paul hat geantwortet: „Dein Deutsch ist schon viel besser als im Frühling ~~(primavera)~~. Und wenn du willst, üben wir zusammen ~~(juntos)~~.“',
        'Um sechs sind sie zum Bahnhof gegangen. Der Zug hatte zehn Minuten Verspätung, deshalb haben sie am Gleis gewartet und noch mehr Fotos gemacht. Am Abend sind sie nach Berlin zurückgefahren ~~(han vuelto)~~. Im Zug war es kalt, und María hatte keine Jacke ~~(chaqueta)~~. „Das war ein super Tag. Danke, Paul!“, hat sie gesagt. Dann hat sie zweimal geniest ~~(ha estornudado dos veces)~~. „Oh, oh“, hat Paul gesagt.',
      ],
    },

    { type: 'rule' },

    // ── Nach dem Lesen ────────────────────────────────────────────
    {
      type: 'uebung',
      eyebrow: 'Nach dem Lesen',
      frage: 'Beantworte die Fragen. ~~(Intenta responder en Perfekt, como en la historia.)~~',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Warum fahren María und Paul nach Potsdam?',
        'Was haben sie in Potsdam zuerst gemacht?',
        'Warum findet María die Arbeit gut?',
        'Was ist im Zug nach Berlin passiert?',
      ],
      loesungen: [
        'Paul glaubt, **dass María eine Pause braucht** — sie arbeitet viel und war noch nie in Potsdam.',
        'Sie haben ein altes **Schloss besichtigt** und viele **Fotos gemacht**.',
        '**Weil die Kollegen nett sind.** ~~(weil manda el verbo al final)~~',
        'Es **war kalt**, María **hatte keine Jacke**, und sie **hat zweimal geniest**.',
      ],
    },

    { type: 'rule' },

    // ── Ausblick ──────────────────────────────────────────────────
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Zweimal niesen ist kein gutes Zeichen ~~(señal)~~ … In **Geschichte 3** ist María krank und braucht einen **Termin beim Arzt**. Der Wortschatz aus Block 2 — *Termin, absagen, leider* — hilft dir beim Lesen.',
    },
  ],
}
