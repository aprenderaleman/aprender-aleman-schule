// Übungsheft A2 — Lektion 34: Arbeit & Beruf
export default {
  lektion: 34,
  titel: 'Übungsheft — Arbeit & Beruf',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Wähle die richtige Form. ~~(Elige la forma correcta.)~~',
      items: [
        { typ: 'mc', frage: 'Ich bin ___ von Beruf.', optionen: ['Lehrerin', 'eine Lehrerin', 'die Lehrerin'], loesung: 0 },
        { typ: 'mc', frage: 'Er arbeitet ___ einer großen Firma.', optionen: ['als', 'bei', 'für'], loesung: 1 },
        {
          typ: 'luecke',
          text: 'Ich arbeite {1} 9 {2} 17 Uhr. Dann habe ich {3}.',
          bank: ['von', 'bis', 'Feierabend', 'um'],
          loesungen: { 1: 'von', 2: 'bis', 3: 'Feierabend' },
        },
        {
          typ: 'luecke',
          text: 'Früher {1} ich als Kellner {2}. Jetzt suche ich eine neue {3}.',
          bank: ['habe', 'gearbeitet', 'Stelle', 'bin'],
          loesungen: { 1: 'habe', 2: 'gearbeitet', 3: 'Stelle' },
        },
        { typ: 'satzbau', woerter: ['arbeite', 'als', 'Ich', 'Köchin'], loesung: 'Ich arbeite als Köchin.' },
        { typ: 'satzbau', woerter: ['sind', 'Sie', 'von', 'Was', 'Beruf'], loesung: 'Was sind Sie von Beruf?' },
        {
          typ: 'zuordnen',
          links: ['der Lehrer', 'der Arzt', 'der Koch', 'der Verkäufer', 'der Kollege'],
          rechts: ['die Lehrerin', 'die Ärztin', 'die Köchin', 'die Verkäuferin', 'die Kollegin'],
          loesung: {
            'der Lehrer': 'die Lehrerin',
            'der Arzt': 'die Ärztin',
            'der Koch': 'die Köchin',
            'der Verkäufer': 'die Verkäuferin',
            'der Kollege': 'die Kollegin',
          },
        },
        {
          typ: 'korrektur',
          optionen: ['Ich bin ein Lehrer.', 'Ich bin Lehrer.'],
          loesung: 1,
          warum: 'Der Beruf geht **ohne Artikel**: *Ich bin Lehrer.* ~~(«Soy profesor» — en alemán la profesión va sin «un».)~~',
        },
        {
          typ: 'korrektur',
          optionen: ['Ich habe zwei Jahre in einem Café gearbeitet.', 'Ich habe gearbeitet zwei Jahre in einem Café.'],
          loesung: 0,
          warum: 'Im Perfekt geht das **Partizip ans Ende**: *… in einem Café gearbeitet.* ~~(No copies el orden del español: «he trabajado dos años» — el participio cierra la frase.)~~',
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies den Blog. Richtig oder falsch? Wähle bei den Fragen die richtige Antwort. ~~(Lee el blog. ¿Verdadero o falso? En las preguntas, elige la respuesta correcta.)~~',
      textTitel: 'Mein Blog: Meine Arbeit',
      text: 'Ich heiße Tarik und bin Koch von Beruf. Ich habe in Hamburg eine Ausbildung gemacht. Danach habe ich zwei Jahre als Kellner gearbeitet. Heute arbeite ich in einem kleinen Restaurant in Bremen. Ich arbeite von Dienstag bis Samstag, von 15 bis 23 Uhr. Am Montag habe ich frei. Meine Kollegen sind super und meine Chefin ist sehr nett. Die Arbeit gefällt mir, weil ich gern koche.',
      items: [
        { typ: 'rf', aussage: 'Tarik ist Kellner von Beruf.', loesung: false },
        { typ: 'rf', aussage: 'Er hat in Hamburg eine Ausbildung gemacht.', loesung: true },
        {
          typ: 'mc',
          frage: 'Wann hat Tarik frei?',
          optionen: ['am Samstag', 'am Montag', 'am Dienstag'],
          loesung: 1,
        },
        {
          typ: 'mc',
          frage: 'Wo arbeitet er heute?',
          optionen: ['in einem Restaurant in Bremen', 'in einem Café in Hamburg', 'in einem Hotel'],
          loesung: 0,
        },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'formular',
      titel: 'Schreiben',
      anweisung: 'Lies den Text. Ergänze das Formular. ~~(Lee el texto. Completa el formulario.)~~',
      quelle: 'Guten Tag! Ich heiße Lucía Fernández. Ich bin Verkäuferin von Beruf und arbeite bei der Firma Möbel Braun in Stuttgart. Ich arbeite von Montag bis Freitag, von 9 bis 17 Uhr. Früher habe ich als Kellnerin gearbeitet.',
      felder: [
        { id: 'name', label: 'Name', erwartet: ['Lucía Fernández', 'Lucia Fernandez', 'Fernández'] },
        { id: 'beruf', label: 'Beruf', erwartet: ['Verkäuferin'] },
        { id: 'firma', label: 'Firma', erwartet: ['Möbel Braun', 'Firma Möbel Braun'] },
        { id: 'stadt', label: 'Stadt', erwartet: ['Stuttgart'] },
        { id: 'arbeitszeit', label: 'Arbeitszeit', erwartet: ['von 9 bis 17 Uhr', '9 bis 17 Uhr', '9-17 Uhr', 'von 9 bis 17'] },
      ],
    },
  ],
}
