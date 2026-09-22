// Übungsheft A1 — Lektion 27: Sprechen Teil 1 — Sich vorstellen
export default {
  lektion: 27,
  titel: 'Übungsheft — Sprechen Teil 1',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Training',
      anweisung: 'Trainiere die Vorstellung. Wähle oder ergänze die richtige Form. ~~(Entrena la presentación. Elige o completa la forma correcta.)~~',
      items: [
        {
          typ: 'luecke',
          text: 'Ich {1} Diego Torres. Ich {2} aus Argentinien. Ich {3} in Wien.',
          bank: ['heiße', 'komme', 'wohne', 'spreche'],
          loesungen: { 1: 'heiße', 2: 'komme', 3: 'wohne' },
        },
        {
          typ: 'luecke',
          text: 'Ich {1} 32 Jahre alt. Ich {2} Spanisch und ein bisschen Deutsch.',
          bank: ['bin', 'spreche', 'habe'],
          loesungen: { 1: 'bin', 2: 'spreche' },
        },
        { typ: 'mc', frage: 'Ich bin Kellnerin ___ Beruf.', optionen: ['von', 'aus', 'mit'], loesung: 0 },
        {
          typ: 'mc',
          frage: '„Buchstabieren Sie bitte Ihren Namen.“ — Was machst du?',
          optionen: ['Ich sage: R-U-I-Z.', 'Ich sage meine Telefonnummer.', 'Ich sage mein Alter.'],
          loesung: 0,
        },
        { typ: 'satzbau', woerter: ['Jahre', 'ich', '28', 'alt', 'bin'], loesung: 'Ich bin 28 Jahre alt.' },
        { typ: 'satzbau', woerter: ['ist', 'Hobby', 'Schwimmen', 'mein'], loesung: 'Mein Hobby ist Schwimmen.' },
        {
          typ: 'zuordnen',
          links: ['Name', 'Land', 'Wohnort', 'Beruf', 'Hobby'],
          rechts: ['Ich heiße Paula.', 'Ich komme aus Chile.', 'Ich wohne in Köln.', 'Ich bin Köchin.', 'Ich tanze gern.'],
          loesung: {
            'Name': 'Ich heiße Paula.',
            'Land': 'Ich komme aus Chile.',
            'Wohnort': 'Ich wohne in Köln.',
            'Beruf': 'Ich bin Köchin.',
            'Hobby': 'Ich tanze gern.',
          },
        },
        {
          typ: 'korrektur',
          optionen: ['Ich bin Lehrerin.', 'Ich bin eine Lehrerin.'],
          loesung: 0,
          warum: 'Der Beruf steht **ohne Artikel**: *Ich bin Lehrerin.* ~~(«Soy profesora» — en alemán la profesión va sin artículo.)~~',
        },
        {
          typ: 'korrektur',
          optionen: ['Ich komme aus Peru.', 'Komme aus Peru.'],
          loesung: 0,
          warum: 'Das Subjekt ist Pflicht: **Ich** komme … ~~(En alemán el pronombre sujeto es obligatorio — no se omite como en español.)~~',
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies den Text. Richtig oder falsch? ~~(Lee el texto. ¿Verdadero o falso?)~~',
      textTitel: 'Hallo, ich bin neu im Kurs!',
      text: 'Hallo! Ich heiße Valeria Rossi und bin 26 Jahre alt. Ich komme aus Italien und wohne jetzt in Stuttgart. Ich spreche Italienisch, Englisch und ein bisschen Deutsch. Ich bin Friseurin von Beruf. Mein Hobby ist Kochen. Und wer bist du?',
      items: [
        { typ: 'rf', aussage: 'Valeria ist 26 Jahre alt.', loesung: true },
        { typ: 'rf', aussage: 'Valeria wohnt in Italien.', loesung: false },
        {
          typ: 'mc',
          frage: 'Was ist Valeria von Beruf?',
          optionen: ['Lehrerin', 'Friseurin', 'Köchin'],
          loesung: 1,
        },
        {
          typ: 'mc',
          frage: 'Was ist ihr Hobby?',
          optionen: ['Kochen', 'Schwimmen', 'Musik'],
          loesung: 0,
        },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'text',
      titel: 'Schreiben',
      anweisung: 'Schreib deine Vorstellung für Sprechen Teil 1. ~~(Escribe tu presentación para la parte 1 del examen oral.)~~',
      aufgabe: 'Schreib 5-6 Sätze über dich. Dann: laut lesen und auswendig lernen!',
      punkte: [
        'Name, Alter, Land',
        'Wohnort und Sprachen',
        'Beruf oder Hobby',
      ],
      minWoerter: 20,
      beispielLoesung: 'Ich heiße Marta Silva. Ich bin 30 Jahre alt und komme aus Ecuador. Ich wohne in Berlin. Ich spreche Spanisch und ein bisschen Deutsch. Ich bin Verkäuferin von Beruf. Mein Hobby ist Musik.',
    },
  ],
}
