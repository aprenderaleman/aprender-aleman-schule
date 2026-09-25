// Übungsheft A2 — Lektion 28: Sprechen Teil 1 — Fragen stellen & beantworten
export default {
  lektion: 28,
  titel: 'Übungsheft — Sprechen Teil 1: Fragen & Antworten',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Wähle die richtige Antwort oder Form. ~~(Elige la respuesta o la forma correcta.)~~',
      items: [
        {
          typ: 'mc',
          frage: '„___ wohnst du?“ — „In Köln.“',
          optionen: ['Wo', 'Woher', 'Wann'],
          loesung: 0,
        },
        {
          typ: 'mc',
          frage: '„___ kommst du?“ — „Aus Chile.“',
          optionen: ['Wo', 'Wann', 'Woher'],
          loesung: 2,
        },
        {
          typ: 'mc',
          frage: 'Dein Partner fragt: „Hast du Kinder?“ — Welche Antwort passt?',
          optionen: ['Ja, ich habe zwei Kinder.', 'In Berlin.', 'Um 8 Uhr.'],
          loesung: 0,
        },
        {
          typ: 'luecke',
          text: '{1} stehst du auf? — Um 6 Uhr. {2} machst du am Wochenende? — Ich lese. {3} Geschwister hast du? — Zwei.',
          bank: ['Wann', 'Was', 'Wie viele', 'Warum'],
          loesungen: { 1: 'Wann', 2: 'Was', 3: 'Wie viele' },
        },
        {
          typ: 'luecke',
          text: '„{1} heißt du?“ — „Ich heiße Omar.“ „{2} ist das?“ — „Das ist mein Bruder.“',
          bank: ['Wie', 'Wer', 'Was'],
          loesungen: { 1: 'Wie', 2: 'Wer' },
        },
        {
          typ: 'satzbau',
          woerter: ['du', 'zum', 'isst', 'Was', 'Frühstück'],
          loesung: 'Was isst du zum Frühstück?',
        },
        {
          typ: 'satzbau',
          woerter: ['gern', 'du', 'Kaffee', 'Trinkst'],
          loesung: 'Trinkst du gern Kaffee?',
          alt: ['Trinkst du Kaffee gern?'],
        },
        {
          typ: 'zuordnen',
          links: ['Wo arbeitest du?', 'Wann stehst du auf?', 'Hast du ein Hobby?', 'Woher kommst du?'],
          rechts: ['In einem Büro.', 'Um 7 Uhr.', 'Ja, ich spiele Fußball.', 'Aus Argentinien.'],
          loesung: {
            'Wo arbeitest du?': 'In einem Büro.',
            'Wann stehst du auf?': 'Um 7 Uhr.',
            'Hast du ein Hobby?': 'Ja, ich spiele Fußball.',
            'Woher kommst du?': 'Aus Argentinien.',
          },
        },
        {
          typ: 'korrektur',
          optionen: ['Woher kommst du?', 'Von wo kommst du?'],
          loesung: 0,
          warum: 'El origen tiene su propia palabra: **Woher?** ~~(«¿de dónde?» — no digas «von wo» en la prueba)~~',
        },
        {
          typ: 'korrektur',
          optionen: ['Du trinkst Kaffee?', 'Trinkst du Kaffee?'],
          loesung: 1,
          warum: 'La pregunta de sí/no empieza con el **verbo**: *Trinkst du …?* ~~(en español basta la entonación; en alemán el verbo va primero. «Du trinkst Kaffee?» solo expresa sorpresa en el habla; la pregunta normal es con el verbo delante.)~~',
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies den Text. Löse die 4 Aufgaben. ~~(Lee el texto. Resuelve las 4 tareas.)~~',
      textTitel: 'Blog: Mein Tag in Hamburg',
      text: 'Viele Leser fragen: Wie ist ein normaler Tag bei mir? Hier ist die Antwort! Ich stehe um halb sieben auf und frühstücke Brot mit Käse. Um acht Uhr fahre ich mit dem Fahrrad zur Arbeit — ich arbeite in einem kleinen Büro im Zentrum. Am Nachmittag spiele ich Fußball im Park oder ich höre Musik. Am Abend koche ich mit meiner Frau. Und du? Was machst du am Nachmittag? Schreib es in die Kommentare! Jonas',
      items: [
        { typ: 'rf', aussage: 'Jonas steht um 7.30 Uhr auf.', loesung: false },
        {
          typ: 'mc',
          frage: 'Wie fährt er zur Arbeit?',
          optionen: ['mit dem Bus', 'mit dem Fahrrad', 'mit dem Auto'],
          loesung: 1,
        },
        { typ: 'rf', aussage: 'Er arbeitet in einem Büro im Zentrum.', loesung: true },
        {
          typ: 'mc',
          frage: 'Was macht er am Abend?',
          optionen: ['Er spielt Fußball.', 'Er hört Musik.', 'Er kocht mit seiner Frau.'],
          loesung: 2,
        },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'formular',
      titel: 'Schreiben',
      anweisung: 'Lies den Text. Ergänze das Formular. ~~(Lee el texto. Completa el formulario.)~~',
      quelle: 'Das ist Diego. Er kommt aus Mexiko und wohnt jetzt in Stuttgart. Er arbeitet in einem Restaurant. Er steht um 10 Uhr auf, denn er arbeitet am Abend. Sein Hobby ist Musik: Er spielt Gitarre.',
      felder: [
        { id: 'land', label: 'Land', erwartet: ['Mexiko'] },
        { id: 'stadt', label: 'Stadt jetzt', erwartet: ['Stuttgart'] },
        { id: 'arbeit', label: 'Arbeit', erwartet: ['in einem Restaurant', 'Restaurant', 'im Restaurant'] },
        { id: 'aufstehen', label: 'Aufstehen', erwartet: ['10 Uhr', '10', 'um 10 Uhr', '10.00 Uhr'] },
        { id: 'hobby', label: 'Hobby', erwartet: ['Musik', 'Gitarre', 'Gitarre spielen', 'Musik / Gitarre'] },
      ],
    },
  ],
}
