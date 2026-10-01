// Übungsheft A1 — Lektion 34: Tagesablauf & Hobbys
export default {
  lektion: 34,
  titel: 'Übungsheft — Tagesablauf & Hobbys',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Wähle die richtige Form. ~~(Elige la forma correcta.)~~',
      items: [
        { typ: 'mc', frage: 'Ich ___ um 7 Uhr auf.', optionen: ['stehe', 'aufstehe', 'stehst'], loesung: 0 },
        { typ: 'mc', frage: 'Um 8 Uhr ___ .', optionen: ['frühstücke ich', 'ich frühstücke'], loesung: 0 },
        {
          typ: 'luecke',
          text: 'Am Abend {1} ich {2}. Ich höre auch {3} Musik.',
          bank: ['sehe', 'fern', 'gern', 'auf'],
          loesungen: { 1: 'sehe', 2: 'fern', 3: 'gern' },
        },
        {
          typ: 'luecke',
          text: 'Um 10 Uhr {1} ich im Supermarkt {2}.',
          bank: ['kaufe', 'ein', 'esse'],
          loesungen: { 1: 'kaufe', 2: 'ein' },
        },
        { typ: 'satzbau', woerter: ['stehe', 'ich', 'Um', '7', 'Uhr', 'auf'], loesung: 'Um 7 Uhr stehe ich auf.', alt: ['Ich stehe um 7 Uhr auf.'] },
        { typ: 'satzbau', woerter: ['gern', 'Ich', 'Fußball', 'spiele'], loesung: 'Ich spiele gern Fußball.' },
        {
          typ: 'zuordnen',
          links: ['aufstehen', 'einkaufen', 'fernsehen', 'frühstücken'],
          rechts: ['Ich stehe auf.', 'Ich kaufe ein.', 'Ich sehe fern.', 'Ich frühstücke.'],
          loesung: { 'aufstehen': 'Ich stehe auf.', 'einkaufen': 'Ich kaufe ein.', 'fernsehen': 'Ich sehe fern.', 'frühstücken': 'Ich frühstücke.' },
        },
        {
          typ: 'korrektur',
          optionen: ['Um 7 Uhr stehe ich auf.', 'Um 7 Uhr ich stehe auf.'],
          loesung: 0,
          warum: 'La hora al principio → el **Verb** va inmediatamente después (2ª posición) y el sujeto detrás: *Um 7 Uhr stehe ich auf*. ~~(¡Inversión!)~~',
        },
        {
          typ: 'korrektur',
          optionen: ['Ich sehe am Abend fern.', 'Ich fernsehe am Abend.'],
          loesung: 0,
          warum: '**fernsehen** es un verbo separable: el prefijo *fern* se va al FINAL de la frase. ~~(Ich sehe … fern.)~~',
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies die E-Mail. Richtig oder falsch? ~~(Lee el correo. ¿Verdadero o falso?)~~',
      textTitel: 'E-Mail von Timo',
      text: 'Hallo Marco, am Sonntag stehe ich um 9 Uhr auf. Dann frühstücke ich und lese ein Buch. Am Nachmittag spiele ich gern Fußball im Park. Am Abend koche ich für meine Familie und sehe fern. Und du? Was machst du am Sonntag? Viele Grüße, Timo',
      items: [
        { typ: 'rf', aussage: 'Timo steht am Sonntag um 9 Uhr auf.', loesung: true },
        { typ: 'rf', aussage: 'Am Nachmittag kauft Timo ein.', loesung: false },
        { typ: 'rf', aussage: 'Am Abend sieht Timo fern.', loesung: true },
        {
          typ: 'mc',
          frage: 'Was macht Timo gern?',
          optionen: ['Fußball spielen', 'Musik hören', 'schwimmen'],
          loesung: 0,
        },
      ],
    },
    {
      typ: 'hoeren',
      titel: 'Hören',
      anweisung: 'Hör das Gespräch. Was ist richtig? ~~(Escucha la conversación. ¿Qué es correcto?)~~',
      audio: {
        transcript: 'Mann: Hallo Sofia! Wann stehst du am Montag auf?\nFrau: Um halb sieben. Dann frühstücke ich. Von acht bis sechzehn Uhr arbeite ich.\nMann: Und am Abend? Siehst du fern?\nFrau: Nein, am Abend koche ich und höre Musik.\nMann: Was machst du gern am Samstag?\nFrau: Am Samstag schwimme ich gern.',
      },
      items: [
        { typ: 'mc', frage: 'Wann steht Sofia am Montag auf?', optionen: ['um 6.30 Uhr', 'um 7.30 Uhr', 'um 7 Uhr'], loesung: 0 },
        { typ: 'rf', aussage: 'Am Abend kocht Sofia.', loesung: true },
        { typ: 'rf', aussage: 'Am Samstag spielt Sofia Fußball.', loesung: false },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'formular',
      titel: 'Schreiben',
      anweisung: 'Lies den Text. Ergänze das Formular. ~~(Lee el texto. Completa el formulario.)~~',
      quelle: 'Das ist Nico Lang. Er steht um 6 Uhr auf. Von 8 bis 16 Uhr arbeitet er im Büro. Sein Hobby ist Tennis. Um 23 Uhr geht er schlafen.',
      felder: [
        { id: 'name', label: 'Name', erwartet: ['Nico Lang', 'Lang'] },
        { id: 'aufstehen', label: 'Aufstehen (Uhrzeit)', erwartet: ['6 Uhr', 'um 6 Uhr', '6'] },
        { id: 'arbeit', label: 'Arbeit (von … bis …)', erwartet: ['von 8 bis 16 Uhr', '8 bis 16 Uhr', '8-16 Uhr'] },
        { id: 'hobby', label: 'Hobby', erwartet: ['Tennis'] },
        { id: 'schlafen', label: 'Schlafen (Uhrzeit)', erwartet: ['23 Uhr', 'um 23 Uhr', '23'] },
      ],
    },
    {
      typ: 'sprechen',
      titel: 'Sprechen',
      anweisung: 'Wie ist dein Tag? Sprich 40 Sekunden. ~~(¿Cómo es tu día? Habla 40 segundos.)~~',
      aufgabe: 'Beschreibe deinen Tag und dein Hobby. ~~(Describe tu día y tu hobby.)~~',
      punkte: [
        'Wann stehst du auf? ~~(¿Cuándo te levantas?)~~',
        'Was machst du am Nachmittag und am Abend? ~~(¿Qué haces por la tarde y por la noche?)~~',
        'Was machst du gern? ~~(¿Qué te gusta hacer?)~~',
      ],
      redemittel: ['Ich stehe um … Uhr auf.', 'Von … bis … Uhr arbeite ich.', 'Am Abend …', 'Ich … gern …'],
      maxSekunden: 40,
      beispielLoesung: 'Ich stehe um sieben Uhr auf. Dann frühstücke ich. Von neun bis siebzehn Uhr arbeite ich. Am Nachmittag kaufe ich ein. Am Abend koche ich und sehe fern. Mein Hobby ist Musik. Ich höre gern Musik und ich lese gern Bücher.',
    },
  ],
}
