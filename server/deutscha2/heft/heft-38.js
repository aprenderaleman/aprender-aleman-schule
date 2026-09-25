// Übungsheft A2 — Lektion 38: Tagesablauf & Zeit
export default {
  lektion: 38,
  titel: 'Übungsheft — Tagesablauf & Zeit',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Löse die Aufgaben. ~~(Resuelve los ejercicios.)~~',
      items: [
        { typ: 'mc', frage: 'Es ist 9:30 Uhr. Auf Deutsch: Es ist ___ .', optionen: ['halb neun', 'halb zehn', 'zehn Uhr'], loesung: 1 },
        { typ: 'mc', frage: '___ Montag stehe ich um 6 Uhr auf.', optionen: ['Im', 'Um', 'Am'], loesung: 2 },
        { typ: 'mc', frage: '___ August habe ich Urlaub.', optionen: ['Im', 'Am', 'Um'], loesung: 0 },
        {
          typ: 'luecke',
          text: 'Ich stehe um 7 Uhr {1}. Dann {2} ich und fahre zur Arbeit.',
          bank: ['auf', 'frühstücke', 'ein'],
          loesungen: { 1: 'auf', 2: 'frühstücke' },
        },
        {
          typ: 'luecke',
          text: 'Am Samstag {1} ich im Supermarkt {2}.',
          bank: ['kaufe', 'ein', 'gehe'],
          loesungen: { 1: 'kaufe', 2: 'ein' },
        },
        { typ: 'satzbau', woerter: ['fern', 'ich', 'Am', 'Abend', 'sehe'], loesung: 'Am Abend sehe ich fern.' },
        { typ: 'satzbau', woerter: ['dein', 'an', 'Kurs', 'wann', 'fängt'], loesung: 'Wann fängt dein Kurs an?' },
        {
          typ: 'zuordnen',
          links: ['9:30', '8:15', '7:45', '14:00'],
          rechts: ['halb zehn', 'Viertel nach acht', 'Viertel vor acht', 'vierzehn Uhr'],
          loesung: { '9:30': 'halb zehn', '8:15': 'Viertel nach acht', '7:45': 'Viertel vor acht', '14:00': 'vierzehn Uhr' },
        },
        {
          typ: 'korrektur',
          optionen: ['Am Nachmittag lerne ich Deutsch.', 'Am Nachmittag ich lerne Deutsch.'],
          loesung: 0,
          warum: 'El verbo va en **Position 2**: *Am Nachmittag **lerne** ich …* ~~(El orden del español pierde puntos en alemán.)~~',
        },
        {
          typ: 'korrektur',
          optionen: ['Der Kurs beginnt um halb acht, also um 7:30 Uhr.', 'Der Kurs beginnt um halb acht, also um 8:30 Uhr.'],
          loesung: 0,
          warum: '**halb acht = 7:30** — media hora ANTES de las ocho. ~~(La trampa nº 1 de la hora alemana.)~~',
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies die Anzeige. Löse die vier Aufgaben. ~~(Lee el anuncio. Resuelve las cuatro tareas.)~~',
      textTitel: 'Anzeige — Sprachschule Sonnenberg',
      text: 'Deutsch lernen am Vormittag! Unsere Sprachschule hat neue Kurse ab dem 5. Oktober. Der Kurs A2 ist von Montag bis Freitag, von halb neun bis zwölf Uhr. Am Nachmittag gibt es einen Kurs für Anfänger: dienstags und donnerstags um 16 Uhr. Im August bleibt die Schule geschlossen. Die Anmeldung ist im Büro möglich: Montag bis Freitag von 9 bis 17 Uhr. Der Kurs kostet 120 Euro im Monat. Wir freuen uns auf Sie!',
      items: [
        {
          typ: 'mc',
          frage: 'Wann beginnt der A2-Kurs am Vormittag?',
          optionen: ['um 8:30 Uhr', 'um 9:30 Uhr', 'um 12 Uhr'],
          loesung: 0,
        },
        { typ: 'rf', aussage: 'Der Kurs für Anfänger ist am Vormittag.', loesung: false },
        { typ: 'rf', aussage: 'Im August ist die Schule geschlossen.', loesung: true },
        {
          typ: 'mc',
          frage: 'Was kostet der Kurs im Monat?',
          optionen: ['107 Euro', '120 Euro', '170 Euro'],
          loesung: 1,
        },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'formular',
      titel: 'Schreiben',
      anweisung: 'Lies den Text. Ergänze das Formular. ~~(Lee el texto. Completa el formulario.)~~',
      quelle: 'Hallo! Ich heiße Damian Kowalski. Ich möchte den Deutschkurs am Vormittag machen. Ich kann von Montag bis Freitag kommen. Meine E-Mail-Adresse ist damian.k@post-beispiel.de. Meine Telefonnummer ist 0163 2255781.',
      felder: [
        { id: 'name', label: 'Name', erwartet: ['Damian Kowalski', 'Kowalski'] },
        { id: 'kurs', label: 'Kurs', erwartet: ['Deutschkurs am Vormittag', 'am Vormittag', 'Vormittag', 'Deutsch am Vormittag'] },
        { id: 'tage', label: 'Tage', erwartet: ['Montag bis Freitag', 'von Montag bis Freitag', 'Mo-Fr'] },
        { id: 'email', label: 'E-Mail', erwartet: ['damian.k@post-beispiel.de'] },
        { id: 'telefon', label: 'Telefonnummer', erwartet: ['0163 2255781', '01632255781'] },
      ],
    },
  ],
}
