// Übungsheft A2 — Lektion 07: Trennbare Verben
export default {
  lektion: 7,
  titel: 'Übungsheft — Trennbare Verben',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Wähle die richtige Form. ~~(Elige la forma correcta.)~~',
      items: [
        { typ: 'mc', frage: 'Der Film ___ um 20 Uhr an.', optionen: ['fängt', 'fangt', 'anfängt'], loesung: 0 },
        { typ: 'mc', frage: 'Ich ___ dich morgen an.', optionen: ['rufst', 'rufe', 'anrufe'], loesung: 1 },
        { typ: 'mc', frage: 'Wir haben im Supermarkt ___ .', optionen: ['geeinkauft', 'einkaufen', 'eingekauft'], loesung: 2 },
        {
          typ: 'luecke',
          text: 'Ich stehe um 6 Uhr {1}. Dann kaufe ich {2} und rufe meine Mutter {3}.',
          bank: ['auf', 'ein', 'an', 'mit'],
          loesungen: { 1: 'auf', 2: 'ein', 3: 'an' },
        },
        {
          typ: 'luecke',
          text: 'Gestern bin ich spät {1}. Heute muss ich früh {2}.',
          bank: ['aufgestanden', 'aufstehen', 'angerufen'],
          loesungen: { 1: 'aufgestanden', 2: 'aufstehen' },
        },
        { typ: 'satzbau', woerter: ['Ich', 'rufe', 'meine', 'Mutter', 'heute', 'an'], loesung: 'Ich rufe meine Mutter heute an.', alt: ['Ich rufe heute meine Mutter an.'] },
        { typ: 'satzbau', woerter: ['Kommst', 'du', 'am', 'Samstag', 'mit'], loesung: 'Kommst du am Samstag mit?' },
        {
          typ: 'zuordnen',
          links: ['aufstehen', 'anrufen', 'einkaufen', 'fernsehen', 'zurückkommen'],
          rechts: ['levantarse', 'llamar por teléfono', 'hacer la compra', 'ver la tele', 'volver'],
          loesung: {
            'aufstehen': 'levantarse',
            'anrufen': 'llamar por teléfono',
            'einkaufen': 'hacer la compra',
            'fernsehen': 'ver la tele',
            'zurückkommen': 'volver',
          },
        },
        {
          typ: 'korrektur',
          optionen: ['Ich muss früh stehen auf.', 'Ich muss früh aufstehen.'],
          loesung: 1,
          warum: 'Con un modal, el infinitivo va **entero** al final: Ich muss früh **aufstehen**. ~~(El prefijo no se separa cuando hay verbo modal.)~~',
        },
        {
          typ: 'korrektur',
          optionen: ['Der Kurs fängt um 9 Uhr an.', 'Der Kurs fängt um 9 Uhr.'],
          loesung: 0,
          warum: 'El prefijo **an** cierra la frase: Der Kurs fängt um 9 Uhr **an**. ~~(Sin el *an* del final, la frase queda incompleta.)~~',
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies die Notiz. Richtig oder falsch? ~~(Lee la nota. ¿Verdadero o falso?)~~',
      textTitel: 'Notiz von Papa',
      text: 'Hallo Kinder! Ich komme heute erst um 19 Uhr zurück — im Büro fängt um 17 Uhr noch ein Meeting an. Ich mache dann das Abendessen. Bitte kauft im Supermarkt ein: Brot, Milch und Obst. Die Liste hängt am Kühlschrank. Lena, ruf bitte Oma an — sie hat heute Geburtstag! Ihr dürft heute Abend fernsehen, aber nur bis 21 Uhr. Bis später! Papa',
      items: [
        { typ: 'rf', aussage: 'Papa kommt um 17 Uhr zurück.', loesung: false },
        { typ: 'rf', aussage: 'Die Kinder sollen im Supermarkt einkaufen.', loesung: true },
        { typ: 'rf', aussage: 'Oma hat heute Geburtstag.', loesung: true },
        { typ: 'mc', frage: 'Wie lange dürfen die Kinder fernsehen?', optionen: ['bis 21 Uhr', 'bis 19 Uhr', 'bis 17 Uhr'], loesung: 0 },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'text',
      titel: 'Schreiben',
      anweisung: 'Schreib 25-35 Wörter. ~~(Escribe 25-35 palabras.)~~',
      aufgabe: 'Dein Tag: Schreib einen kurzen Text mit trennbaren Verben.',
      punkte: [
        'Wann stehst du auf?',
        'Wann kaufst du ein?',
        'Was machst du am Abend?',
      ],
      minWoerter: 25,
      beispielLoesung: 'Ich stehe jeden Tag um halb sieben auf. Nach der Arbeit kaufe ich im Supermarkt ein. Am Abend rufe ich oft meine Schwester an und wir sehen zusammen fern. Um elf Uhr bin ich müde.',
    },
  ],
}
