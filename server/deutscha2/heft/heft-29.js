// Übungsheft A2 — Lektion 29: Sprechen Teil 2 — Von sich erzählen
export default {
  lektion: 29,
  titel: 'Übungsheft — Von sich erzählen',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Wähle die richtige Antwort oder Form. ~~(Elige la respuesta o la forma correcta.)~~',
      items: [
        { typ: 'mc', frage: 'Ich ___ 32 Jahre alt.', optionen: ['habe', 'bin', 'bist'], loesung: 1 },
        { typ: 'mc', frage: 'Ich arbeite ___ Verkäufer in einem Supermarkt.', optionen: ['wie', 'für', 'als'], loesung: 2 },
        {
          typ: 'luecke',
          text: 'Am Wochenende {1} ich mit Freunden Fußball {2}. Das hat Spaß gemacht!',
          bank: ['habe', 'gespielt', 'bin', 'spielt'],
          loesungen: { 1: 'habe', 2: 'gespielt' },
        },
        {
          typ: 'luecke',
          text: 'Mein Tagesablauf ist immer gleich: Ich stehe um 7 Uhr {1}. Am {2} habe ich frei.',
          bank: ['auf', 'Wochenende', 'aus'],
          loesungen: { 1: 'auf', 2: 'Wochenende' },
        },
        { typ: 'satzbau', woerter: ['stehe', 'um', 'Ich', '6', 'Uhr', 'auf'], loesung: 'Ich stehe um 6 Uhr auf.' },
        { typ: 'satzbau', woerter: ['machst', 'du', 'Was', 'am', 'Wochenende'], loesung: 'Was machst du am Wochenende?' },
        {
          typ: 'zuordnen',
          links: ['Familie', 'Beruf', 'Hobby', 'Tagesablauf'],
          rechts: ['Ich habe zwei Brüder.', 'Ich arbeite als Köchin.', 'Ich spiele gern Gitarre.', 'Ich stehe um 6 Uhr auf.'],
          loesung: {
            'Familie': 'Ich habe zwei Brüder.',
            'Beruf': 'Ich arbeite als Köchin.',
            'Hobby': 'Ich spiele gern Gitarre.',
            'Tagesablauf': 'Ich stehe um 6 Uhr auf.',
          },
        },
        {
          typ: 'korrektur',
          optionen: ['Ich habe 30 Jahre.', 'Ich bin 30 Jahre alt.'],
          loesung: 1,
          warum: 'Das Alter geht mit **sein**: *Ich bin 30 Jahre alt.* ~~(«Tengo 30 años» no se traduce con haben.)~~',
        },
        {
          typ: 'korrektur',
          optionen: ['Ich arbeite als Kellnerin.', 'Ich arbeite als eine Kellnerin.'],
          loesung: 0,
          warum: '„arbeiten **als** + Beruf“ geht ohne Artikel. ~~(«Trabajo de camarera» — en alemán sin «una».)~~',
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies den Blog. Richtig oder falsch? Wähle bei den Fragen die richtige Antwort. ~~(Lee el blog. ¿Verdadero o falso? En las preguntas, elige la respuesta correcta.)~~',
      textTitel: 'Mein Blog: Über mich',
      text: 'Hallo! Ich heiße Renata und bin 27 Jahre alt. Ich komme aus Chile und wohne jetzt in Köln. Ich arbeite als Verkäuferin in einem Supermarkt. Ich bin verheiratet und habe eine Tochter. Mein Tagesablauf ist immer gleich: Ich stehe um 6 Uhr auf und arbeite von 8 bis 16 Uhr. Am Wochenende habe ich frei. Am Samstag habe ich mit meiner Familie gekocht. Das hat Spaß gemacht!',
      items: [
        { typ: 'rf', aussage: 'Renata kommt aus Chile.', loesung: true },
        { typ: 'rf', aussage: 'Renata arbeitet als Köchin.', loesung: false },
        {
          typ: 'mc',
          frage: 'Wann steht Renata auf?',
          optionen: ['um 8 Uhr', 'um 6 Uhr', 'um 16 Uhr'],
          loesung: 1,
        },
        { typ: 'rf', aussage: 'Am Samstag hat Renata mit ihrer Familie gekocht.', loesung: true },
      ],
    },
    {
      typ: 'hoeren',
      titel: 'Hören',
      anweisung: 'Ein Mann ist neu im Kurs. Hör zu. Löse die 3 Aufgaben. ~~(Un hombre es nuevo en el curso. Escucha. Resuelve las 3 tareas.)~~',
      audio: {
        transcript: 'Hallo zusammen! Ich bin neu im Kurs und möchte mich vorstellen. Ich heiße Karim und bin vierunddreißig Jahre alt. Ich komme aus Marokko und wohne seit drei Jahren in Bremen. Ich arbeite in einem Restaurant, aber nicht als Kellner, sondern als Koch. Ich bin verheiratet und habe zwei Kinder. In meiner Freizeit spiele ich gern Gitarre. Am Sonntag habe ich nicht gearbeitet. Ich bin mit meiner Familie an den See gefahren. Das hat Spaß gemacht!',
      },
      items: [
        { typ: 'rf', aussage: 'Karim wohnt seit drei Jahren in Bremen.', loesung: true },
        {
          typ: 'mc',
          frage: 'Was ist Karim von Beruf?',
          optionen: ['Kellner', 'Verkäufer', 'Koch'],
          loesung: 2,
        },
        {
          typ: 'mc',
          frage: 'Was hat Karim am Sonntag gemacht?',
          optionen: ['Er hat im Restaurant gearbeitet.', 'Er ist an den See gefahren.', 'Er hat Gitarre gespielt.'],
          loesung: 1,
        },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'text',
      titel: 'Schreiben',
      anweisung: 'Schreib einen kurzen Text über dich (ca. 25-35 Wörter). ~~(Escribe un texto corto sobre ti, de unas 25-35 palabras.)~~',
      aufgabe: 'Erzähl von dir — wie im Sprechen Teil 2, aber schriftlich.',
      punkte: [
        'Wer bist du? (Name, Alter, Wohnort) ~~(quién eres: nombre, edad, ciudad)~~',
        'Schreib zwei Sätze über deine Familie oder deine Arbeit. ~~(dos frases sobre tu familia o tu trabajo)~~',
        'Was hast du am Wochenende gemacht? Schreib einen Satz im Perfekt. ~~(qué hiciste el fin de semana: una frase en Perfekt)~~',
      ],
      minWoerter: 25,
      beispielLoesung:
        'Ich heiße Bruno und bin 31 Jahre alt. Ich komme aus Argentinien und wohne jetzt in Frankfurt. Ich arbeite als Kellner in einem Café. Ich bin nicht verheiratet und habe einen Bruder. Am Wochenende habe ich Fußball gespielt. Das hat Spaß gemacht!',
    },
    {
      typ: 'sprechen',
      titel: 'Sprechen',
      anweisung: 'Erzähl von deinem Tag und von deinen Hobbys. Sprich 60 Sekunden. ~~(Habla de tu día y de tus aficiones. Habla 60 segundos.)~~',
      aufgabe: 'Deine Themenkarte hat zwei Themen: „Tagesablauf“ und „Hobby“. Erzähl von dir.',
      punkte: [
        'dein Tagesablauf: aufstehen, arbeiten oder lernen',
        'deine Hobbys',
        'gestern Abend: Was hast du gemacht?',
      ],
      redemittel: ['Ich stehe um … Uhr auf.', 'Von … bis … arbeite ich als …', 'In meiner Freizeit … ich gern …', 'Gestern Abend habe ich …'],
      maxSekunden: 60,
      beispielLoesung: 'Ich erzähle von meinem Tag. Ich stehe um halb sieben auf und frühstücke mit meinem Mann. Von neun bis fünf arbeite ich als Verkäuferin in einem Geschäft. Am Abend koche ich oder ich lese ein Buch. In meiner Freizeit tanze ich gern und ich höre gern Musik. Am Samstag spiele ich oft Tennis mit einer Freundin. Gestern Abend habe ich einen Film gesehen. Der Film war sehr lustig.',
    },
  ],
}
