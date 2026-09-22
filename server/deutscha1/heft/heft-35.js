// Übungsheft A1 — Lektion 35: Beruf & Alltag
export default {
  lektion: 35,
  titel: 'Übungsheft — Beruf & Alltag',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Wähle oder schreibe die richtige Form. ~~(Elige o escribe la forma correcta.)~~',
      items: [
        { typ: 'mc', frage: 'Ich bin ___ .', optionen: ['Lehrerin', 'eine Lehrerin'], loesung: 0 },
        { typ: 'mc', frage: 'Ich arbeite ___ Kellner.', optionen: ['als', 'wie', 'von'], loesung: 0 },
        {
          typ: 'luecke',
          text: 'Was sind Sie von {1}? — Ich bin {2}. Ich arbeite {3} Büro.',
          bank: ['Beruf', 'Ingenieurin', 'im', 'als'],
          loesungen: { 1: 'Beruf', 2: 'Ingenieurin', 3: 'im' },
        },
        {
          typ: 'luecke',
          text: 'Der Mann ist Lehrer. Die Frau ist {1}. Er ist Arzt. Sie ist {2}.',
          bank: ['Lehrerin', 'Ärztin', 'Studentin'],
          loesungen: { 1: 'Lehrerin', 2: 'Ärztin' },
        },
        { typ: 'satzbau', woerter: ['als', 'arbeite', 'Kellnerin', 'ich'], loesung: 'Ich arbeite als Kellnerin.' },
        { typ: 'satzbau', woerter: ['Sie', 'was', 'von', 'sind', 'Beruf'], loesung: 'Was sind Sie von Beruf?' },
        {
          typ: 'zuordnen',
          links: ['der Lehrer', 'der Arzt', 'der Verkäufer', 'der Student'],
          rechts: ['die Lehrerin', 'die Ärztin', 'die Verkäuferin', 'die Studentin'],
          loesung: { 'der Lehrer': 'die Lehrerin', 'der Arzt': 'die Ärztin', 'der Verkäufer': 'die Verkäuferin', 'der Student': 'die Studentin' },
        },
        {
          typ: 'korrektur',
          optionen: ['Ich bin Lehrer.', 'Ich bin ein Lehrer.'],
          loesung: 0,
          warum: 'La profesión va SIN artículo: *Ich bin Lehrer*. ~~(Como en español «soy profesor» — nunca «ein Lehrer».)~~',
        },
        {
          typ: 'korrektur',
          optionen: ['Ich arbeite als Verkäufer.', 'Ich arbeite wie Verkäufer.'],
          loesung: 0,
          warum: '«Trabajo de/como camarero» = *arbeiten **als***. ~~(«wie» compara — aquí es un calco falso de «como».)~~',
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies die Anzeige. Richtig oder falsch? ~~(Lee el anuncio. ¿Verdadero o falso?)~~',
      textTitel: 'Anzeige: Restaurant Sonne',
      text: 'Das Restaurant Sonne in Bonn sucht einen Kellner oder eine Kellnerin. Sie arbeiten von Dienstag bis Samstag, von 17 bis 23 Uhr. Die Kollegen sind nett. Sie sprechen ein bisschen Deutsch? Dann rufen Sie an: 0228 445566.',
      items: [
        { typ: 'rf', aussage: 'Das Restaurant sucht einen Koch.', loesung: false },
        { typ: 'rf', aussage: 'Die Kollegen sind nett.', loesung: true },
        {
          typ: 'mc',
          frage: 'Wann arbeitet der Kellner?',
          optionen: ['von 17 bis 23 Uhr', 'von 9 bis 17 Uhr', 'am Vormittag'],
          loesung: 0,
        },
        { typ: 'rf', aussage: 'Man arbeitet auch am Montag.', loesung: false },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'text',
      titel: 'Schreiben',
      anweisung: 'Schreib deine Vorstellung: 4-5 Sätze. ~~(Escribe tu presentación: 4-5 frases.)~~',
      aufgabe: 'Stell dich komplett vor — wie in der Prüfung.',
      punkte: [
        'Name und Land ~~(nombre y país)~~',
        'Beruf und Arbeit: als …, im Büro, im Geschäft … ~~(profesión y trabajo)~~',
        'Ein Hobby mit *gern* ~~(un hobby con «gern»)~~',
      ],
      minWoerter: 20,
      beispielLoesung: 'Ich heiße Laura. Ich komme aus Mexiko und wohne in Frankfurt. Ich bin Verkäuferin und arbeite in einem Geschäft. Am Abend höre ich gern Musik.',
    },
  ],
}
