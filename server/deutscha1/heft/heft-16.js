// Übungsheft A1 — Lektion 16: Zahlen, Uhrzeit & Datum
export default {
  lektion: 16,
  titel: 'Übungsheft — Zahlen, Uhrzeit & Datum',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Wähle, ergänze oder ordne. ~~(Elige, completa u ordena.)~~',
      items: [
        { typ: 'mc', frage: '21 = ?', optionen: ['einundzwanzig', 'zwanzigeins', 'zweiundzehn'], loesung: 0 },
        { typ: 'mc', frage: 'halb zehn = ?', optionen: ['9:30', '10:30', '9:15'], loesung: 0 },
        { typ: 'mc', frage: 'Du hörst: „fünfundvierzig“. Was schreibst du?', optionen: ['45', '54', '40'], loesung: 0 },
        {
          typ: 'luecke',
          text: '{1} Montag habe ich Deutschkurs. Der Kurs beginnt {2} 8 Uhr. {3} Mai mache ich die Prüfung.',
          bank: ['Am', 'um', 'Im', 'in'],
          loesungen: { 1: 'Am', 2: 'um', 3: 'Im' },
        },
        {
          typ: 'luecke',
          text: 'Ich bin {1} (32) Jahre alt. Mein Bruder ist {2} (17).',
          bank: ['zweiunddreißig', 'siebzehn', 'dreiundzwanzig'],
          loesungen: { 1: 'zweiunddreißig', 2: 'siebzehn' },
        },
        { typ: 'satzbau', woerter: ['um', 'Der', 'halb', 'beginnt', 'Kurs', 'neun'], loesung: 'Der Kurs beginnt um halb neun.', alt: ['Um halb neun beginnt der Kurs.'] },
        { typ: 'satzbau', woerter: ['mache', 'Im', 'die', 'August', 'ich', 'Prüfung'], loesung: 'Im August mache ich die Prüfung.', alt: ['Ich mache im August die Prüfung.', 'Ich mache die Prüfung im August.'] },
        {
          typ: 'zuordnen',
          links: ['9:30', '9:15', '9:45', '21:00'],
          rechts: ['halb zehn', 'Viertel nach neun', 'Viertel vor zehn', 'einundzwanzig Uhr'],
          loesung: {
            '9:30': 'halb zehn',
            '9:15': 'Viertel nach neun',
            '9:45': 'Viertel vor zehn',
            '21:00': 'einundzwanzig Uhr',
          },
        },
        {
          typ: 'korrektur',
          optionen: ['Es ist halb drei. Das ist 2:30.', 'Es ist halb drei. Das ist 3:30.'],
          loesung: 0,
          warum: '**halb** = media hora HACIA la hora siguiente: *halb drei* = **2:30**. ~~(No es «tres y media».)~~',
        },
        {
          typ: 'korrektur',
          optionen: ['Ich habe am Montag einen Termin.', 'Ich habe im Montag einen Termin.'],
          loesung: 0,
          warum: 'El trío es **am** + día, **im** + mes, **um** + hora: *am Montag, im Mai, um 8 Uhr*. ~~(Memoriza am/im/um.)~~',
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies die Anzeige. Richtig oder falsch? ~~(Lee el anuncio. ¿Verdadero o falso?)~~',
      textTitel: 'Anzeige — Sport im Park',
      text: 'Sport im Park — neu! Der Kurs ist am Dienstag und am Donnerstag. Er beginnt um halb sieben und geht bis acht Uhr. Ein Monat kostet fünfundzwanzig Euro. Im August machen wir Pause. Möchten Sie mitkommen? Sie können uns anrufen: 0163 44 55 66.',
      items: [
        { typ: 'rf', aussage: 'Der Kurs ist am Montag und am Dienstag.', loesung: false },
        { typ: 'rf', aussage: 'Der Kurs beginnt um 6:30.', loesung: true },
        {
          typ: 'mc',
          frage: 'Was kostet ein Monat?',
          optionen: ['25 Euro', '35 Euro', '52 Euro'],
          loesung: 0,
        },
        { typ: 'rf', aussage: 'Im August machen sie Pause.', loesung: true },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'formular',
      titel: 'Schreiben',
      anweisung: 'Lies den Text. Ergänze das Formular. ~~(Lee el texto. Completa el formulario.)~~',
      quelle: 'Hallo! Ich heiße Nuria Blanco und bin vierunddreißig Jahre alt. Mein Deutschkurs ist am Montag und am Mittwoch. Er beginnt um halb sieben. Meine Telefonnummer ist 0176 889922.',
      felder: [
        { id: 'name', label: 'Name', erwartet: ['Nuria Blanco', 'Blanco'] },
        { id: 'alter', label: 'Alter', erwartet: ['34', '34 Jahre', 'vierunddreißig'] },
        { id: 'tage', label: 'Kurs am', erwartet: ['Montag und Mittwoch', 'am Montag und am Mittwoch'] },
        { id: 'uhrzeit', label: 'Kurs um', erwartet: ['halb sieben', 'um halb sieben', '6:30', '18:30'] },
        { id: 'telefon', label: 'Telefonnummer', erwartet: ['0176 889922', '0176889922'] },
      ],
    },
  ],
}
