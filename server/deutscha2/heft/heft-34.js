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
      typ: 'hoeren',
      titel: 'Hören',
      anweisung: 'Hör das Interview im Radio. Richtig oder falsch? Wähle bei der Frage die richtige Antwort. ~~(Escucha la entrevista en la radio. ¿Verdadero o falso? En la pregunta, elige la respuesta correcta.)~~',
      audio: {
        transcript: 'Moderator: Guten Morgen! Heute ist Frau Wagner bei uns im Radio. Frau Wagner, was sind Sie von Beruf?\nFrau: Ich bin Kellnerin und arbeite in einem Hotel in Leipzig.\nModerator: Haben Sie immer als Kellnerin gearbeitet?\nFrau: Nein, früher habe ich drei Jahre als Verkäuferin gearbeitet. Dann habe ich eine Ausbildung gemacht.\nModerator: Und wann arbeiten Sie?\nFrau: Von sechs bis vierzehn Uhr. Ich habe also früh Feierabend, das gefällt mir.\nModerator: Und wie sind Ihre Kollegen?\nFrau: Sie sind sehr nett. Nur der Chef ist ein bisschen streng.',
      },
      items: [
        { typ: 'mc', frage: 'Was ist Frau Wagner heute von Beruf?', optionen: ['Kellnerin', 'Verkäuferin', 'Köchin'], loesung: 0 },
        { typ: 'rf', aussage: 'Frau Wagner hat um 14 Uhr Feierabend.', loesung: true },
        { typ: 'rf', aussage: 'Der Chef von Frau Wagner ist sehr nett.', loesung: false },
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
    {
      typ: 'sprechen',
      titel: 'Sprechen',
      anweisung: 'Erzähl von deiner Arbeit. Sprich 60 Sekunden. ~~(Habla de tu trabajo. Habla 60 segundos.)~~',
      aufgabe: 'Erzähl von deiner Arbeit oder von deiner Ausbildung.',
      punkte: [
        'Was bist du von Beruf?',
        'Wo arbeitest du?',
        'deine Arbeitszeiten',
        'Was hast du früher gemacht?',
      ],
      redemittel: [
        'Ich bin … von Beruf.',
        'Ich arbeite als … bei / in …',
        'Ich arbeite von … bis … Uhr.',
        'Früher habe ich als … gearbeitet.',
      ],
      maxSekunden: 60,
      beispielLoesung:
        'Ich bin Verkäufer von Beruf. Ich arbeite bei einer kleinen Firma in Bilbao. Ich arbeite von Montag bis Freitag, von neun bis siebzehn Uhr. Am Wochenende habe ich frei. Früher habe ich zwei Jahre als Kellner in einem Café gearbeitet. Meine Arbeit gefällt mir, weil meine Kollegen sehr nett sind.',
    },
  ],
}
