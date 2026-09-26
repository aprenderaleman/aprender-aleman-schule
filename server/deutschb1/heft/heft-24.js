// Übungsheft B1 — Lektion 24: Hören: Durchsagen & kurze Texte (Teil 1-2)
export default {
  lektion: 24,
  titel: 'Übungsheft — Durchsagen & kurze Texte',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'In Durchsagen zählen Zeit, Ort und Änderungen. Löse die Aufgaben.',
      items: [
        { typ: 'mc', frage: 'Der Deutschkurs ___ heute leider aus.', optionen: ['fällt', 'findet', 'ruft'], loesung: 0 },
        { typ: 'mc', frage: 'Das Fest wird wegen des Regens auf Sonntag ___.', optionen: ['verschiebt', 'verschoben', 'verschieben'], loesung: 1 },
        { typ: 'mc', frage: 'Du hörst „halb neun“. Welche Uhrzeit ist das?', optionen: ['9:30', '9:00', '8:30'], loesung: 2 },
        {
          typ: 'luecke',
          text: 'Der Zug nach Kassel hat 15 Minuten {1}. Er fährt heute nicht von Gleis 3, {2} von Gleis 8 ab. Die neue {3} ist um 11:20 Uhr.',
          bank: ['Verspätung', 'sondern', 'Abfahrt', 'aber', 'Angebot'],
          loesungen: { 1: 'Verspätung', 2: 'sondern', 3: 'Abfahrt' },
        },
        {
          typ: 'luecke',
          text: 'Hier ist die {1} Dr. Yılmaz. Wegen einer Fortbildung öffnen wir heute {2} um 14 Uhr. Bitte {3} Sie uns dann zurück.',
          bank: ['Praxis', 'erst', 'rufen', 'nur', 'Angebot'],
          loesungen: { 1: 'Praxis', 2: 'erst', 3: 'rufen' },
        },
        {
          typ: 'zuordnen',
          links: ['halb acht', 'Viertel vor neun', 'Viertel nach zwölf', 'halb drei (nachmittags)', 'kurz nach halb sechs (abends)'],
          rechts: ['7:30', '8:45', '12:15', '14:30', 'ca. 17:35'],
          loesung: {
            'halb acht': '7:30',
            'Viertel vor neun': '8:45',
            'Viertel nach zwölf': '12:15',
            'halb drei (nachmittags)': '14:30',
            'kurz nach halb sechs (abends)': 'ca. 17:35',
          },
        },
        {
          typ: 'satzbau',
          woerter: ['statt', 'Park', 'Samstag', 'Das', 'im', 'findet', 'Sommerfest', 'am'],
          loesung: 'Das Sommerfest findet am Samstag im Park statt.',
          alt: ['Das Sommerfest findet im Park am Samstag statt.'],
        },
        {
          typ: 'satzbau',
          woerter: ['halb', 'beginnt', 'Der', 'sieben', 'erst', 'Kurs', 'um'],
          loesung: 'Der Kurs beginnt erst um halb sieben.',
        },
        {
          typ: 'korrektur',
          optionen: ['Zurückrufen Sie mich bitte morgen.', 'Rufen Sie mich bitte morgen zurück.'],
          loesung: 1,
          warum: '*zurückrufen* es un verbo separable: en el imperativo el prefijo **zurück** va al **final** de la frase.',
        },
        {
          typ: 'korrektur',
          optionen: ['Der Bus hat Verspätung. Er kommt erst um 9 Uhr.', 'Der Bus hat Verspätung. Er kommt nur um 9 Uhr.'],
          loesung: 0,
          warum: '«Recién a las 9 / no antes de las 9» = **erst**. *nur* significa «solo» (cantidad). El español «solo a las 9» lleva a usar *nur* por error.',
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies das Transkript nur einmal, wie ein Audio. Löse dann die vier Aufgaben.',
      textTitel: 'Transkript: Radiotipps für das Wochenende',
      text: 'Und jetzt unsere Tipps für das Wochenende. Am Samstag findet im Stadtpark das Kinderfest statt. Es beginnt nicht wie geplant um zehn Uhr, sondern erst um halb elf. Der Eintritt ist frei, nur das Karussell kostet zwei Euro. Aber Achtung: Bei Regen wird das Fest auf den nächsten Samstag verschoben. Das Konzert im Rathaus am Sonntagabend fällt leider aus, weil die Sängerin krank ist. Das Geld für die Karten bekommen Sie zurück. Und für alle, die gern schwimmen: Das Hallenbad hat am Sonntag geänderte Öffnungszeiten. Es öffnet schon um sieben Uhr, schließt aber bereits um vierzehn Uhr statt um achtzehn Uhr. Wir wünschen Ihnen ein schönes Wochenende!',
      items: [
        {
          typ: 'mc',
          frage: 'Wann beginnt das Kinderfest?',
          optionen: ['um 10:00 Uhr', 'um 10:30 Uhr', 'um 11:30 Uhr'],
          loesung: 1,
        },
        { typ: 'rf', aussage: 'Bei Regen findet das Kinderfest am Sonntag statt.', loesung: false },
        { typ: 'rf', aussage: 'Das Konzert am Sonntagabend findet nicht statt.', loesung: true },
        {
          typ: 'mc',
          frage: 'Bis wann ist das Hallenbad am Sonntag geöffnet?',
          optionen: ['bis 14 Uhr', 'bis 18 Uhr', 'bis 19 Uhr'],
          loesung: 0,
        },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'formular',
      titel: 'Schreiben',
      anweisung: 'Lies die Nachricht auf dem Anrufbeantworter. Ergänze dann die Telefonnotiz.',
      quelle: 'Guten Tag, hier spricht Ana Ribeiro. Ich rufe wegen meines Termins am Mittwoch an. Leider kann ich am Mittwoch nicht kommen, weil ich arbeiten muss. Können wir den Termin auf Freitag verschieben? Am besten passt es mir um halb zehn. Bitte rufen Sie mich unter 0152 / 33 77 11 zurück. Vielen Dank!',
      felder: [
        { id: 'name', label: 'Anruferin', erwartet: ['Ana Ribeiro', 'Ribeiro', 'Frau Ribeiro'] },
        { id: 'alterTermin', label: 'Alter Termin (Tag)', erwartet: ['Mittwoch', 'am Mittwoch'] },
        { id: 'neuerTag', label: 'Neuer Termin (Tag)', erwartet: ['Freitag', 'am Freitag'] },
        { id: 'uhrzeit', label: 'Uhrzeit (in Ziffern)', erwartet: ['9:30', '9.30', '9:30 Uhr', '9.30 Uhr', '09:30', '09:30 Uhr'] },
        { id: 'telefon', label: 'Rückruf unter', erwartet: ['0152 / 33 77 11', '0152 337711', '0152/337711', '0152 33 77 11', '0152337711'] },
      ],
    },
  ],
}
