// Übungsheft A2 — Lektion 23: Hören: Gespräche
export default {
  lektion: 23,
  titel: 'Übungsheft — Hören: Gespräche',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Wähle die richtige Antwort oder Form. ~~(Elige la respuesta o la forma correcta.)~~',
      items: [
        {
          typ: 'mc',
          frage: '„— Kommst du um drei, Anna? — Um drei geht es nicht, aber um vier.“ — Wann kommt Anna?',
          optionen: ['um drei', 'um vier', 'gar nicht'],
          loesung: 1,
        },
        {
          typ: 'mc',
          frage: 'Tom sagt: „Ich kaufe nicht am Montag ein, sondern am Dienstag.“ — Wann kauft Tom ein?',
          optionen: ['am Montag', 'am Montag und am Dienstag', 'am Dienstag'],
          loesung: 2,
        },
        {
          typ: 'luecke',
          text: 'Wann treffen wir {1}? — Am Freitag kann ich {2} nicht. {3} am Samstag!',
          bank: ['uns', 'leider', 'Lieber', 'gern'],
          loesungen: { 1: 'uns', 2: 'leider', 3: 'Lieber' },
        },
        {
          typ: 'luecke',
          text: 'Ich gehe heute {1}. Und du? Was {2} du zur Party mit? — Einen Salat. Ich {3} dich später an.',
          bank: ['einkaufen', 'bringst', 'rufe', 'kaufst'],
          loesungen: { 1: 'einkaufen', 2: 'bringst', 3: 'rufe' },
        },
        {
          typ: 'satzbau',
          woerter: ['dir', 'passt', 'Uhr', 'es', 'Um', 'wie', 'viel'],
          loesung: 'Um wie viel Uhr passt es dir?',
        },
        {
          typ: 'satzbau',
          woerter: ['treffen', 'Wo', 'uns', 'wir', 'morgen'],
          loesung: 'Wo treffen wir uns morgen?',
        },
        {
          typ: 'zuordnen',
          links: ['Wollen wir ins Kino gehen?', 'Kaufst du Brot?', 'Wann rufst du mich an?', 'Was bringst du mit?'],
          rechts: ['Gute Idee!', 'Nein, Brot haben wir noch.', 'Heute Abend.', 'Einen Salat.'],
          loesung: {
            'Wollen wir ins Kino gehen?': 'Gute Idee!',
            'Kaufst du Brot?': 'Nein, Brot haben wir noch.',
            'Wann rufst du mich an?': 'Heute Abend.',
            'Was bringst du mit?': 'Einen Salat.',
          },
        },
        {
          typ: 'korrektur',
          optionen: ['Ich rufe dich morgen an.', 'Ich anrufe dich morgen.'],
          loesung: 0,
          warum: '*anrufen* es un **verbo separable**: el prefijo *an* va al final: *Ich rufe dich … an.* ~~(«te llamo mañana» — el verbo se parte en dos)~~',
        },
        {
          typ: 'korrektur',
          optionen: ['Das Konzert ist nicht am Montag, aber am Dienstag.', 'Das Konzert ist nicht am Montag, sondern am Dienstag.'],
          loesung: 1,
          warum: 'Tras una negación, la corrección va con **sondern**, no con *aber*. ~~(«sino» = sondern — el falso amigo clásico del hispanohablante)~~',
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies den Text. Löse die 4 Aufgaben. ~~(Lee el texto. Resuelve las 4 tareas.)~~',
      textTitel: 'E-Mail von Nadia',
      text: 'Hallo Ben, danke für deine E-Mail! Am Samstag kann ich leider nicht ins Schwimmbad kommen, denn ich besuche meine Tante in Bonn. Aber am Sonntag habe ich Zeit. Treffen wir uns um Viertel nach zehn am Eingang? Ich bringe Sandwiches mit. Kannst du bitte die Getränke kaufen? Nach dem Schwimmbad können wir bei mir Pizza essen. Meine Schwester kommt auch. Ruf mich heute Abend kurz an! Viele Grüße Nadia',
      items: [
        { typ: 'rf', aussage: 'Nadia besucht am Samstag ihre Tante.', loesung: true },
        { typ: 'rf', aussage: 'Sie treffen sich um 10.45 Uhr.', loesung: false },
        {
          typ: 'mc',
          frage: 'Was bringt Nadia mit?',
          optionen: ['die Getränke', 'Sandwiches', 'Pizza'],
          loesung: 1,
        },
        {
          typ: 'mc',
          frage: 'Was machen sie nach dem Schwimmbad?',
          optionen: ['Sie essen Pizza bei Nadia.', 'Sie kaufen Getränke.', 'Sie fahren nach Bonn.'],
          loesung: 0,
        },
      ],
    },
    {
      typ: 'hoeren',
      titel: 'Hören',
      anweisung: 'Lies zuerst die 3 Aufgaben. Hör dann das Gespräch bis zum Ende. ~~(Lee primero las 3 tareas. Después escucha la conversación hasta el final.)~~',
      audio: {
        transcript: 'Jonas: Hallo Anna! Kochen wir am Freitag zusammen?\nAnna: Hallo Jonas! Am Freitag kann ich leider nicht, da arbeite ich lange. Lieber am Samstag.\nJonas: Gut, dann am Samstag. Passt es dir um sechs?\nAnna: Besser um sieben. Ich gehe vorher noch einkaufen.\nJonas: Okay. Was brauchen wir? Reis und Gemüse?\nAnna: Reis habe ich noch zu Hause. Ich kaufe Gemüse und Fisch.\nJonas: Super, und ich bringe einen Kuchen mit.\nAnna: Gute Idee! Bis Samstag um sieben bei mir.',
      },
      items: [
        {
          typ: 'mc',
          frage: 'Wann kochen Anna und Jonas zusammen?',
          optionen: ['am Freitag', 'am Samstag', 'am Sonntag'],
          loesung: 1,
        },
        { typ: 'rf', aussage: 'Anna und Jonas treffen sich um sechs Uhr.', loesung: false },
        {
          typ: 'mc',
          frage: 'Was kauft Anna?',
          optionen: ['Reis und Gemüse', 'Reis und Fisch', 'Gemüse und Fisch'],
          loesung: 2,
        },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'text',
      titel: 'Schreiben',
      anweisung: 'Schreib eine Nachricht (ca. 25-35 Wörter). ~~(Escribe un mensaje de unas 25-35 palabras.)~~',
      aufgabe: 'Dein Freund Luca möchte am Samstag mit dir schwimmen gehen. Du kannst nicht. Schreib ihm eine Nachricht.',
      punkte: [
        'Sag ab und schreib den Grund. ~~(cancela y escribe el motivo)~~',
        'Schlag den Sonntag und eine Uhrzeit vor. ~~(propón el domingo y una hora)~~',
        'Frag: Was bringt Luca mit? ~~(pregunta qué trae Luca)~~',
      ],
      minWoerter: 25,
      beispielLoesung: 'Hallo Luca, am Samstag kann ich leider nicht, denn ich muss arbeiten. Aber am Sonntag habe ich Zeit. Treffen wir uns um halb drei am Schwimmbad? Bringst du Getränke mit?\nViele Grüße\nMarta',
    },
    {
      typ: 'sprechen',
      titel: 'Sprechen',
      anweisung: 'Erzähl von deinem Plan. Du hast 60 Sekunden. ~~(Cuenta tu plan. Tienes 60 segundos.)~~',
      aufgabe: 'Du machst am Samstag eine kleine Party mit Freunden. Erzähl von deinem Plan.',
      punkte: [
        'Wann und wo trefft ihr euch?',
        'Was kaufst du ein?',
        'Was bringen deine Freunde mit?',
      ],
      redemittel: ['Am Samstag mache ich …', 'Wir treffen uns um … bei …', 'Ich kaufe … ein.', '… bringt … mit.'],
      maxSekunden: 60,
      beispielLoesung: 'Am Samstag mache ich eine kleine Party. Wir treffen uns um sieben Uhr bei mir zu Hause. Im Park feiern wir lieber nicht, denn am Samstag regnet es leider. Am Freitag gehe ich einkaufen. Ich kaufe Brot, Käse und Getränke ein. Meine Freundin Laura bringt einen Salat mit, und Tom bringt Musik mit. Heute Abend rufe ich noch meinen Bruder an. Vielleicht kommt er auch. Ich freue mich schon!',
    },
  ],
}
