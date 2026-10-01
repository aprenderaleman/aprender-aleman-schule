// Übungsheft A1 — Lektion 31: Zahlen, Zeit & Termine
export default {
  lektion: 31,
  titel: 'Übungsheft — Zahlen, Zeit & Termine',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Wähle die richtige Form. ~~(Elige la forma correcta.)~~',
      items: [
        {
          typ: 'zuordnen',
          links: ['8:00', '7:30', '9:15', '10:45'],
          rechts: ['acht Uhr', 'halb acht', 'Viertel nach neun', 'Viertel vor elf'],
          loesung: {
            '8:00': 'acht Uhr',
            '7:30': 'halb acht',
            '9:15': 'Viertel nach neun',
            '10:45': 'Viertel vor elf',
          },
        },
        {
          typ: 'luecke',
          text: 'Ich möchte einen {1}, bitte. — Geht es {2} Montag {3} 9 Uhr? — Ja, das {4}.',
          bank: ['Termin', 'am', 'um', 'passt', 'im'],
          loesungen: { 1: 'Termin', 2: 'am', 3: 'um', 4: 'passt' },
        },
        { typ: 'mc', frage: 'Es ist halb acht. — Wie spät ist es?', optionen: ['7:30', '8:30', '7:45'], loesung: 0 },
        {
          typ: 'mc',
          frage: 'Das Buch kostet 3,50 €. — Es kostet ___',
          optionen: ['drei Euro fünfzig.', 'fünfzig Euro drei.', 'drei fünfzig Uhr.'],
          loesung: 0,
        },
        { typ: 'mc', frage: 'Wann hast du den Termin? — ___ Freitag.', optionen: ['Am', 'Um', 'Im'], loesung: 0 },
        {
          typ: 'mc',
          frage: 'Die Telefonnummer 030 sagst du: ___',
          optionen: ['null drei null', 'drei null null', 'dreißig null'],
          loesung: 0,
        },
        { typ: 'satzbau', woerter: ['das', 'kostet', 'Buch', 'Was'], loesung: 'Was kostet das Buch?' },
        { typ: 'satzbau', woerter: ['einen', 'bitte', 'Ich', 'Termin', 'möchte'], loesung: 'Ich möchte einen Termin, bitte.', alt: ['Ich möchte bitte einen Termin.'] },
        {
          typ: 'korrektur',
          optionen: ['Der Termin ist am Montag um 9 Uhr.', 'Der Termin ist im Montag um 9 Uhr.'],
          loesung: 0,
          warum: 'Der Tag steht mit **am**: *am Montag*. Die Uhrzeit mit **um**: *um 9 Uhr*. ~~(el día con am, la hora con um.)~~',
        },
        {
          typ: 'korrektur',
          optionen: ['Wie spät ist es?', 'Was Stunde ist es?'],
          loesung: 0,
          warum: 'Die Frage ist fix: **Wie spät ist es?** ~~(«¿Qué hora es?» no se traduce palabra por palabra.)~~',
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies den Aushang. Richtig oder falsch? ~~(Lee el cartel. ¿Verdadero o falso?)~~',
      textTitel: 'Aushang — Praxis Dr. Weber',
      text: 'Liebe Patienten,\ndie Praxis ist von Montag bis Freitag von 8 bis 12 Uhr offen. Am Montag und am Dienstag auch von 15 bis 18 Uhr. Am Samstag und am Sonntag ist die Praxis zu. Möchten Sie einen Termin? Telefon: 030 445 566.',
      items: [
        { typ: 'rf', aussage: 'Die Praxis ist am Samstag offen.', loesung: false },
        { typ: 'rf', aussage: 'Am Dienstag ist die Praxis auch von 15 bis 18 Uhr offen.', loesung: true },
        {
          typ: 'mc',
          frage: 'Wann ist die Praxis am Freitag offen?',
          optionen: ['von 8 bis 12 Uhr', 'von 15 bis 18 Uhr', 'von 8 bis 18 Uhr'],
          loesung: 0,
        },
        {
          typ: 'mc',
          frage: 'Sie möchten einen Termin. Was machen Sie?',
          optionen: ['Sie kommen am Sonntag.', 'Sie rufen 030 445 566 an.', 'Sie schreiben eine Karte.'],
          loesung: 1,
        },
      ],
    },
    {
      typ: 'hoeren',
      titel: 'Hören',
      anweisung: 'Hör das Gespräch. Was ist richtig? ~~(Escucha la conversación. ¿Qué es correcto?)~~',
      audio: {
        transcript: 'Mann: Hallo Sara! Wann treffen wir uns morgen?\nFrau: Um halb vier, Tom. Passt das?\nMann: Nein, das geht nicht. Ich arbeite bis vier Uhr.\nFrau: Dann um Viertel nach vier?\nMann: Ja, das passt.\nFrau: Gut. Ich habe auch das Buch für dich. Es kostet zwölf Euro fünfzig.',
      },
      items: [
        {
          typ: 'mc',
          frage: 'Wann treffen sich Sara und Tom?',
          optionen: ['um 3:30 Uhr', 'um 4:15 Uhr', 'um 4:45 Uhr'],
          loesung: 1,
        },
        { typ: 'rf', aussage: 'Tom hat um halb vier Zeit.', loesung: false },
        { typ: 'rf', aussage: 'Das Buch kostet 12,50 Euro.', loesung: true },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'text',
      titel: 'Schreiben',
      anweisung: 'Schreib einen Mini-Dialog am Telefon. ~~(Escribe un minidiálogo por teléfono.)~~',
      aufgabe: 'Du möchtest einen Termin beim Arzt. Schreib den Dialog mit der Praxis (4 Zeilen).',
      punkte: [
        'Begrüßung und Termin: Ich möchte …',
        'Tag mit „am“ und Uhrzeit mit „um“',
        'Antwort: Ja, das passt.',
      ],
      minWoerter: 18,
      beispielLoesung: '— Praxis Dr. Schmidt, guten Tag!\n— Guten Tag, ich möchte einen Termin, bitte.\n— Geht es am Dienstag um 10 Uhr?\n— Ja, das passt. Vielen Dank!',
    },
    {
      typ: 'sprechen',
      titel: 'Sprechen',
      anweisung: 'Sprich eine Nachricht für eine Freundin. Sprich 30 Sekunden. ~~(Deja un mensaje para una amiga. Habla 30 segundos.)~~',
      aufgabe: 'Du möchtest Anna am Wochenende treffen. Anna ist nicht da. Sprich eine Nachricht am Telefon. ~~(Quieres quedar con Anna el fin de semana. Anna no está. Deja un mensaje en el teléfono.)~~',
      punkte: [
        'der Tag: am …',
        'die Uhrzeit: um …',
        'deine Telefonnummer: Zahl für Zahl',
      ],
      redemittel: [
        'Hallo Anna, hier ist …',
        'Hast du am … Zeit?',
        'Geht es um … Uhr?',
        'Meine Telefonnummer ist …',
      ],
      maxSekunden: 30,
      beispielLoesung: 'Hallo Anna, hier ist Carlos. Hast du am Samstag Zeit? Wir trinken einen Kaffee. Geht es um halb vier? Meine Telefonnummer ist null eins sieben zwei, vier fünf, sechs eins. Tschüss!',
    },
  ],
}
