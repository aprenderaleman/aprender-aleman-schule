// Geschichte 1 · Der erste Arbeitstag
//
// Lectura graduada A2 — la saga de María continúa (ver BIBLIA de la saga).
// Canon: todo el A1 + Bloque 0 del A2. Gramática: solo lo del A1 (Präsens,
// Modalverben, trennbare Verben) — todavía SIN Perfekt (llega en el Bloque 1).

export default {
  spec: ['Geschichte 1', 'Lectura graduada', 'Niveau A2', 'Wortschatz: Bloque 0'],
  h1: 'Der erste Arbeitstag',
  lead: 'María beginnt heute im **Café Sonne**. ~~Primer capítulo: todo en presente — con el vocabulario del A1 lo entiendes entero.~~',

  content: [
    // ── Vor dem Lesen ─────────────────────────────────────────────
    {
      type: 'wortschatz',
      eyebrow: 'Vor dem Lesen',
      items: [
        { wort: 'der Arbeitstag', kollokation: 'mein erster Arbeitstag', es: 'el día de trabajo' },
        { wort: 'nervös', kollokation: 'nervös sein', es: 'nervioso/a' },
        { wort: 'der Gast, die Gäste', kollokation: 'die Gäste im Café', es: 'el cliente (de un café)' },
        { wort: 'die Bestellung, -en', kollokation: 'eine Bestellung nehmen', es: 'el pedido, la comanda' },
        { wort: 'das Tablett', kollokation: 'das Tablett ist schwer', es: 'la bandeja' },
        { wort: 'tragen', kollokation: 'ein Tablett tragen', es: 'llevar (en las manos)' },
        { wort: 'die Schürze', kollokation: 'die Schürze ist weiß', es: 'el delantal' },
        { wort: 'zeigen', kollokation: 'Deniz zeigt María alles', es: 'enseñar, mostrar' },
        { wort: 'bringen', kollokation: 'den Kaffee bringen', es: 'llevar, traer (algo a alguien)' },
        { wort: 'müde', kollokation: 'sehr müde sein', es: 'cansado/a' },
      ],
      hinweis: '~~Estas palabras salen en la historia y aún no están en tu canon: léelas dos veces antes de empezar.~~',
    },

    { type: 'rule' },

    // ── Geschichte ────────────────────────────────────────────────
    {
      type: 'prose',
      eyebrow: 'Geschichte',
      card: true,
      titel: 'Der erste Arbeitstag',
      absaetze: [
        'Es ist sechs Uhr. María steht auf, trinkt schnell einen Kaffee und isst ein Brot mit Käse. Heute ist ihr erster **Arbeitstag** im Café Sonne, und sie ist sehr **nervös**. Sie sagt laut ~~(en voz alta)~~: „Ich kann das!“ Dann geht sie los ~~(sale, se pone en camino)~~. Die Straße ist noch leer ~~(vacía)~~, aber im Café Sonne ist schon Licht ~~(luz)~~.',
        '„Guten Morgen! Du bist María, oder?“ Ein Mann steht an der Kasse. „Ich bin Deniz. Willkommen im Café Sonne!“ Deniz arbeitet schon drei Jahre hier. Er **zeigt** María alles: die Küche, die Kasse, die Tische. „Und hier ist deine **Schürze**“, sagt er. Die Schürze ist weiß und ein bisschen groß. Deniz lächelt ~~(sonríe)~~: „Kein Problem. Das passt schon.“',
      ],
    },
    {
      type: 'prose',
      card: true,
      absaetze: [
        'Um acht Uhr kommen die ersten **Gäste**. María nimmt die **Bestellungen**: zwei Kaffee, ein Wasser, ein Brot mit Käse. Sie **trägt** das **Tablett** sehr langsam und denkt ~~(piensa)~~: „Bitte nicht fallen, bitte nicht fallen …“ ~~(«que no se caiga»)~~ Um zwölf Uhr ist das Café voll ~~(lleno)~~. María schreibt, trägt, bringt — und lernt schnell. Eine alte Frau kommt an die Kasse. „Sie sind neu ~~(nueva)~~, oder?“, fragt sie. „Ich trinke jeden Tag um zwölf einen Milchkaffee. Jeden Tag!“ María sagt: „Dann bis morgen um zwölf!“ Die alte Frau ist zufrieden ~~(satisfecha)~~.',
        'Dann **bringt** María einen Kaffee an Tisch drei. Aber der Mann an Tisch drei sagt: „Entschuldigung, ich möchte keinen Kaffee. Ich möchte ein Wasser.“ Oh nein — der Kaffee ist für Tisch vier! „Entschuldigung!“, sagt María und bringt schnell das Wasser. Der Gast lächelt: „Kein Problem.“ Deniz sagt leise ~~(en voz baja)~~: „Der erste Tag ist immer so. Du machst das gut.“',
      ],
    },
    {
      type: 'prose',
      card: true,
      absaetze: [
        'Um zwei Uhr machen María und Deniz Pause ~~(pausa)~~ und essen in der Küche. „Und, wie ist Berlin für dich?“, fragt Deniz. „Groß“, sagt María. „Und kalt. Aber ich mag die Stadt ~~(me gusta la ciudad)~~ — und heute mag ich auch das Café.“ Deniz nickt ~~(asiente)~~: „Das Café Sonne ist klein, aber die Gäste kommen immer wieder ~~(vuelven siempre)~~.“',
        'Um vier Uhr ist die Arbeit zu Ende ~~(termina)~~. María ist sehr **müde**, aber auch glücklich ~~(feliz)~~. Sie hat jetzt Arbeit in Berlin — echte Arbeit ~~(trabajo de verdad)~~: Kollegen, Gäste und eine weiße Schürze.',
        'Zu Hause in der Gartenstraße wartet Paul. „Na, wie ist die Arbeit?“, fragt er. „Super!“, sagt María. „Deniz ist nett, die Gäste sind nett — aber meine Beine ~~(piernas)~~ …!“ Paul lacht ~~(se ríe)~~. „Ich koche heute. Du musst nur essen.“ María sagt: „Danke, Paul.“ Um neun Uhr schläft sie schon.',
      ],
    },

    { type: 'rule' },

    // ── Nach dem Lesen ────────────────────────────────────────────
    {
      type: 'uebung',
      eyebrow: 'Nach dem Lesen',
      frage: 'Beantworte die Fragen. ~~(Responde con frases sencillas en alemán.)~~',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Warum ist María nervös?',
        'Wer ist Deniz?',
        'Was ist das Problem an Tisch drei?',
        'Wie ist María am Abend?',
      ],
      loesungen: [
        'Heute ist ihr **erster Arbeitstag** im Café Sonne.',
        'Deniz ist ein **Kollege**. Er arbeitet schon **drei Jahre** im Café Sonne und zeigt María alles.',
        'Der Mann möchte **keinen Kaffee**, er möchte ein Wasser — der Kaffee ist für **Tisch vier**.',
        'Sie ist sehr **müde**, aber auch **glücklich**.',
      ],
    },

    { type: 'rule' },

    // ── Ausblick ──────────────────────────────────────────────────
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'María hat jetzt Arbeit — aber was macht sie am Wochenende? In **Geschichte 2** fahren María und Paul nach **Potsdam**, und du siehst das **Perfekt** aus Block 1 in Aktion: „Wir **sind gefahren**, wir **haben gemacht** …“',
    },
  ],
}
