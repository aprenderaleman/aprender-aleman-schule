// Übungsheft A2 — Lektion 15: Nebensätze — weil, dass, wenn
export default {
  lektion: 15,
  titel: 'Übungsheft — Nebensätze: weil, dass, wenn',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Wähle oder ergänze die richtige Form. Achte auf das Verb! ~~(Elige o completa la forma correcta. ¡Fíjate en el verbo!)~~',
      items: [
        {
          typ: 'mc',
          frage: 'Er kommt nicht zur Party, ___',
          optionen: ['weil er hat keine Zeit.', 'weil er keine Zeit hat.', 'weil hat er keine Zeit.'],
          loesung: 1,
        },
        { typ: 'mc', frage: 'Ich glaube, ___ der Kurs sehr gut ist.', optionen: ['weil', 'wenn', 'dass'], loesung: 2 },
        {
          typ: 'mc',
          frage: 'Wenn ich Zeit habe, ___',
          optionen: ['koche ich gern.', 'ich koche gern.', 'gern ich koche.'],
          loesung: 0,
        },
        {
          typ: 'luecke',
          text: 'Paul trinkt viel Kaffee, weil er immer müde {1}. Ich finde, dass er zu viel {2}.',
          bank: ['ist', 'arbeitet', 'bin', 'arbeite'],
          loesungen: { 1: 'ist', 2: 'arbeitet' },
        },
        {
          typ: 'luecke',
          text: 'Ich hoffe, {1} du am Samstag kommst. {2} du Lust hast, bring bitte einen Salat mit. Tom kommt nicht, {3} er arbeiten muss.',
          bank: ['dass', 'Wenn', 'weil', 'denn'],
          loesungen: { 1: 'dass', 2: 'Wenn', 3: 'weil' },
        },
        { typ: 'satzbau', woerter: ['weil', 'bin', 'zu', 'ich', 'Hause', 'müde', 'bleibe', 'Ich'], loesung: 'Ich bleibe zu Hause, weil ich müde bin.' },
        { typ: 'satzbau', woerter: ['nehme', 'regnet', 'den', 'es', 'Bus', 'Wenn', 'ich'], loesung: 'Wenn es regnet, nehme ich den Bus.' },
        {
          typ: 'zuordnen',
          links: ['Ich bleibe im Bett,', 'Ich glaube,', 'Wenn ich Hunger habe,', 'Wir fahren an den See,'],
          rechts: ['weil ich Fieber habe.', 'dass der Test leicht ist.', 'esse ich ein Brot.', 'wenn die Sonne scheint.'],
          loesung: {
            'Ich bleibe im Bett,': 'weil ich Fieber habe.',
            'Ich glaube,': 'dass der Test leicht ist.',
            'Wenn ich Hunger habe,': 'esse ich ein Brot.',
            'Wir fahren an den See,': 'wenn die Sonne scheint.',
          },
        },
        {
          typ: 'korrektur',
          optionen: ['Ich lerne Deutsch, weil ich arbeite in Berlin.', 'Ich lerne Deutsch, weil ich in Berlin arbeite.'],
          loesung: 1,
          warum: 'Después de **weil** el verbo conjugado va **al final**: *weil ich in Berlin arbeite*. ~~(En español el orden no cambia; en alemán sí.)~~',
        },
        {
          typ: 'korrektur',
          optionen: ['Wenn ich Zeit habe, gehe ich ins Kino.', 'Wenn ich Zeit habe, ich gehe ins Kino.'],
          loesung: 0,
          warum: 'Si la frase con **wenn** va delante, la principal empieza con el **verbo**: *…, gehe ich ins Kino*. ~~(verbo, coma, verbo)~~',
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies die E-Mail. Richtig oder falsch? Oder: Wähle die richtige Antwort. ~~(Lee el correo. ¿Verdadero o falso? O bien: elige la respuesta correcta.)~~',
      textTitel: 'E-Mail von Jonas',
      text: 'Liebe Mira, danke für deine Einladung! Leider kann ich am Samstag nicht kommen, weil meine Schwester Geburtstag hat. Wir feiern bei meinen Eltern in Köln. Ich finde, dass wir uns bald sehen müssen! Wenn du Zeit hast, gehen wir am Sonntag zusammen ins Café. Am Sonntag bin ich aber müde, weil die Feier sehr lange dauert. Deshalb schlage ich 15 Uhr vor. Ich hoffe, dass das für dich okay ist. Viele Grüße, Jonas',
      items: [
        { typ: 'rf', aussage: 'Jonas kommt am Samstag zu Mira.', loesung: false },
        {
          typ: 'mc',
          frage: 'Warum kann Jonas am Samstag nicht kommen?',
          optionen: ['Er muss arbeiten.', 'Er ist krank.', 'Seine Schwester hat Geburtstag.'],
          loesung: 2,
        },
        { typ: 'rf', aussage: 'Jonas möchte Mira am Sonntag im Café treffen.', loesung: true },
        {
          typ: 'mc',
          frage: 'Um wie viel Uhr möchte Jonas Mira am Sonntag treffen?',
          optionen: ['um 15 Uhr', 'am Morgen', 'um 5 Uhr'],
          loesung: 0,
        },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'text',
      titel: 'Schreiben',
      anweisung: 'Schreib eine E-Mail an deinen Freund Leon. ~~(Escribe un correo a tu amigo Leon.)~~',
      aufgabe: 'Leon lädt dich am Freitag zum Essen ein. Du kannst nicht kommen. Schreib zu allen drei Punkten.',
      punkte: [
        'Sag ab und nenne einen Grund mit weil.',
        'Schreib deine Meinung: Ich finde, dass …',
        'Mach einen neuen Vorschlag mit wenn.',
      ],
      minWoerter: 25,
      beispielLoesung: 'Lieber Leon, danke für die Einladung! Leider kann ich am Freitag nicht kommen, weil ich lange arbeiten muss. Ich finde, dass dein Essen immer super ist. Wenn du am Samstag Zeit hast, koche ich für dich. Ich hoffe, dass das passt. Viele Grüße, Elena',
    },
  ],
}
