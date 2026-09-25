// Übungsheft A1 — Lektion 36: Prüfungssimulation 1 + Korrektur
// Gran repaso: Teil 1 'Training' mezcla los puntos clave de TODO el curso.
export default {
  lektion: 36,
  titel: 'Übungsheft — Prüfungssimulation 1',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Training',
      anweisung: 'Die Aufgaben kommen aus dem ganzen Kurs. Wähle die richtige Form. ~~(Los ejercicios repasan todo el curso. Elige la forma correcta.)~~',
      items: [
        { typ: 'mc', frage: '___ Wohnung ist klein, aber schön.', optionen: ['Die', 'Der', 'Das'], loesung: 0 },
        { typ: 'mc', frage: 'Ich habe ___ Bruder.', optionen: ['einen', 'ein', 'eine'], loesung: 0 },
        { typ: 'mc', frage: 'Ich ___ gut kochen.', optionen: ['kann', 'kannst', 'können'], loesung: 0 },
        {
          typ: 'luecke',
          text: 'Ich habe {1} Auto. Ich bin {2} müde.',
          bank: ['kein', 'nicht', 'keine'],
          loesungen: { 1: 'kein', 2: 'nicht' },
        },
        {
          typ: 'luecke',
          text: 'Er {1} in Berlin. Wir {2} Spanisch.',
          bank: ['wohnt', 'sprechen', 'wohnst'],
          loesungen: { 1: 'wohnt', 2: 'sprechen' },
        },
        { typ: 'satzbau', woerter: ['kann', 'Deutsch', 'ich', 'sprechen'], loesung: 'Ich kann Deutsch sprechen.' },
        { typ: 'satzbau', woerter: ['stehe', 'ich', 'um', '8', 'Uhr', 'auf'], loesung: 'Um 8 Uhr stehe ich auf.' },
        {
          typ: 'zuordnen',
          links: ['Wo wohnst du?', 'Wann stehst du auf?', 'Was isst du?', 'Wer ist das?'],
          rechts: ['In Berlin.', 'Um 7 Uhr.', 'Ein Brot.', 'Das ist Herr Braun.'],
          loesung: { 'Wo wohnst du?': 'In Berlin.', 'Wann stehst du auf?': 'Um 7 Uhr.', 'Was isst du?': 'Ein Brot.', 'Wer ist das?': 'Das ist Herr Braun.' },
        },
        {
          typ: 'korrektur',
          optionen: ['Ich bin 28 Jahre alt.', 'Ich habe 28 Jahre.'],
          loesung: 0,
          warum: 'La edad en alemán va con **sein**: *Ich bin 28 Jahre alt*. ~~(«Tengo 28 años» no se traduce con haben — Lektion 4.)~~',
        },
        {
          typ: 'korrektur',
          optionen: ['Ich bin Koch.', 'Bin Koch.'],
          loesung: 0,
          warum: 'En alemán el pronombre sujeto es OBLIGATORIO: ***Ich** bin Koch*. ~~(No se omite como en español «soy cocinero».)~~',
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies die Notiz. Richtig oder falsch? Wie in der Prüfung: Nichts nachschlagen! ~~(Lee la nota. ¿Verdadero o falso? Como en el examen: ¡sin diccionario!)~~',
      textTitel: 'Notiz von Marta',
      text: 'Hallo Paula, ich komme heute erst um 19 Uhr nach Hause. Bitte kauf Brot und ein Kilo Äpfel. Das Geld liegt auf dem Tisch in der Küche. Am Abend sehen wir zusammen fern. Bis später! Marta',
      items: [
        { typ: 'rf', aussage: 'Marta kommt um 19 Uhr nach Hause.', loesung: true },
        { typ: 'rf', aussage: 'Paula soll Milch kaufen.', loesung: false },
        { typ: 'rf', aussage: 'Das Geld liegt auf dem Bett.', loesung: false },
        { typ: 'rf', aussage: 'Marta und Paula sehen am Abend fern.', loesung: true },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'formular',
      titel: 'Schreiben',
      anweisung: 'Wie in der Prüfung: Lies den Text. Ergänze das Formular. Schreib nur Wörter, keine Sätze. ~~(Como en el examen: lee el texto y completa el formulario. Solo palabras, no frases.)~~',
      quelle: 'Guten Tag! Ich heiße Pablo Vega. Ich bin 26 Jahre alt und komme aus Peru. Ich wohne jetzt in der Blumenstraße 8 in München. Ich möchte einen Deutschkurs machen.',
      felder: [
        { id: 'familienname', label: 'Familienname', erwartet: ['Vega'] },
        { id: 'vorname', label: 'Vorname', erwartet: ['Pablo'] },
        { id: 'land', label: 'Land', erwartet: ['Peru'] },
        { id: 'strasse', label: 'Straße, Hausnummer', erwartet: ['Blumenstraße 8'] },
        { id: 'wohnort', label: 'Wohnort', erwartet: ['München'] },
      ],
    },
  ],
}
