// Übungsheft A2 — Lektion 12: Personalpronomen — Akkusativ & Dativ
export default {
  lektion: 12,
  titel: 'Übungsheft — Personalpronomen',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Wähle oder ergänze das richtige Pronomen. ~~(Elige o completa el pronombre correcto.)~~',
      items: [
        { typ: 'mc', frage: 'Kennst du Herrn Braun? — Ja, ich kenne ___ gut.', optionen: ['ihm', 'ihn', 'er'], loesung: 1 },
        { typ: 'mc', frage: 'Kannst du ___ helfen?', optionen: ['mir', 'mich', 'ich'], loesung: 0 },
        { typ: 'mc', frage: 'Wie findest du den Film? — Ich finde ___ super.', optionen: ['es', 'ihn', 'ihm'], loesung: 1 },
        {
          typ: 'luecke',
          text: 'Meine Oma ist krank. Ich besuche {1} und helfe {2}.',
          bank: ['sie', 'ihr', 'ihn'],
          loesungen: { 1: 'sie', 2: 'ihr' },
        },
        {
          typ: 'luecke',
          text: 'Kommst du mit {1} ins Kino? Ich lade {2} ein.',
          bank: ['mir', 'dich', 'dir'],
          loesungen: { 1: 'mir', 2: 'dich' },
        },
        { typ: 'satzbau', woerter: ['ihm', 'gehört', 'Das', 'Auto'], loesung: 'Das Auto gehört ihm.' },
        { typ: 'satzbau', woerter: ['mich', 'Ruf', 'bitte', 'an'], loesung: 'Ruf mich bitte an!' },
        {
          typ: 'zuordnen',
          links: ['ich', 'du', 'er', 'sie (ella)', 'wir'],
          rechts: ['mir', 'dir', 'ihm', 'ihr', 'uns'],
          loesung: { 'ich': 'mir', 'du': 'dir', 'er': 'ihm', 'sie (ella)': 'ihr', 'wir': 'uns' },
        },
        {
          typ: 'korrektur',
          optionen: ['Ich sehe ihm morgen.', 'Ich sehe ihn morgen.'],
          loesung: 1,
          warum: '**sehen** + Akkusativ → **ihn**. ~~(«LO veo» = objeto directo → acusativo.)~~',
        },
        {
          typ: 'korrektur',
          optionen: ['Das Kleid gefällt ihr.', 'Das Kleid gefällt sie.'],
          loesung: 0,
          warum: '**gefallen** + Dativ → **ihr**. ~~(«le gusta A ella» → dativo, no acusativo.)~~',
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies den Text. Richtig oder falsch? ~~(Lee el texto. ¿Verdadero o falso?)~~',
      textTitel: 'E-Mail von Teresa',
      text: 'Hallo Iker! Danke für deine Nachricht — sie hat mich sehr gefreut. Am Freitag kommt mein Cousin Dario nach Bremen. Kennst du ihn noch? Ich hole ihn um 17 Uhr ab. Danach kochen wir zusammen — komm doch auch! Dario kocht super, seine Paella schmeckt mir immer. Hilfst du uns beim Einkaufen? Ruf mich bitte heute Abend an! Liebe Grüße, Teresa',
      items: [
        { typ: 'rf', aussage: 'Dario kommt am Freitag nach Bremen.', loesung: true },
        {
          typ: 'mc',
          frage: 'Wann holt Teresa Dario ab?',
          optionen: ['um 7 Uhr', 'um 17 Uhr', 'um 15 Uhr'],
          loesung: 1,
        },
        { typ: 'rf', aussage: 'Die Paella von Dario schmeckt Teresa nicht.', loesung: false },
        {
          typ: 'mc',
          frage: 'Was soll Iker heute Abend machen?',
          optionen: ['Teresa anrufen', 'Paella kochen', 'nach Bremen fahren'],
          loesung: 0,
        },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'formular',
      titel: 'Schreiben',
      anweisung: 'Lies den Text. Ergänze das Formular. ~~(Lee el texto. Completa el formulario.)~~',
      quelle: 'Hallo! Ich heiße Sofía Márquez und ich bin 29 Jahre alt. Ich möchte den Fotokurs am Dienstagabend machen. Der Kurs beginnt um 19 Uhr. Meine E-Mail-Adresse ist sofia29@post.es.',
      felder: [
        { id: 'name', label: 'Name', erwartet: ['Sofía Márquez', 'Márquez', 'Sofia Marquez'] },
        { id: 'alter', label: 'Alter', erwartet: ['29', '29 Jahre'] },
        { id: 'kurs', label: 'Kurs', erwartet: ['Fotokurs', 'den Fotokurs'] },
        { id: 'beginn', label: 'Kursbeginn (Uhrzeit)', erwartet: ['19 Uhr', 'um 19 Uhr'] },
        { id: 'email', label: 'E-Mail-Adresse', erwartet: ['sofia29@post.es'] },
      ],
    },
  ],
}
