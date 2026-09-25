// Übungsheft A2 — Lektion 22: Hören: Kurze Texte & Durchsagen
export default {
  lektion: 22,
  titel: 'Übungsheft — Hören: Kurze Texte & Durchsagen',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Wähle die richtige Antwort oder Form. ~~(Elige la respuesta o la forma correcta.)~~',
      items: [
        {
          typ: 'mc',
          frage: '„Der Zug fährt um halb acht.“ — Wie spät ist das?',
          optionen: ['7.30 Uhr', '8.30 Uhr', '7.15 Uhr'],
          loesung: 0,
        },
        {
          typ: 'mc',
          frage: '„Viertel vor zehn“ — Wie spät ist das?',
          optionen: ['10.15 Uhr', '9.45 Uhr', '9.15 Uhr'],
          loesung: 1,
        },
        {
          typ: 'mc',
          frage: 'Du hörst: „Die Jacke kostet vierzig Euro.“ — Was kostet sie?',
          optionen: ['14 Euro', '40 Euro'],
          loesung: 1,
        },
        {
          typ: 'luecke',
          text: 'Der Zug nach Bremen fährt von {1} 9. Er hat 15 Minuten {2}. Die {3} ist jetzt um 11.45 Uhr.',
          bank: ['Gleis', 'Verspätung', 'Abfahrt', 'Ausgang'],
          loesungen: { 1: 'Gleis', 2: 'Verspätung', 3: 'Abfahrt' },
        },
        {
          typ: 'luecke',
          text: 'Der Supermarkt ist heute von 8 bis 20 Uhr {1}. Die Äpfel sind heute im {2} — sie sind sehr {3}!',
          bank: ['geöffnet', 'Angebot', 'günstig', 'geschlossen'],
          loesungen: { 1: 'geöffnet', 2: 'Angebot', 3: 'günstig' },
        },
        {
          typ: 'satzbau',
          woerter: ['finde', 'Brot', 'ich', 'das', 'Wo'],
          loesung: 'Wo finde ich das Brot?',
        },
        {
          typ: 'satzbau',
          woerter: ['Flughafen', 'fährt', 'zum', 'Bus', 'Wann', 'der'],
          loesung: 'Wann fährt der Bus zum Flughafen?',
        },
        {
          typ: 'zuordnen',
          links: ['halb sieben', 'Viertel nach sieben', 'Viertel vor acht', 'sieben Uhr'],
          rechts: ['6.30 Uhr', '7.15 Uhr', '7.45 Uhr', '7.00 Uhr'],
          loesung: {
            'halb sieben': '6.30 Uhr',
            'Viertel nach sieben': '7.15 Uhr',
            'Viertel vor acht': '7.45 Uhr',
            'sieben Uhr': '7.00 Uhr',
          },
        },
        {
          typ: 'korrektur',
          optionen: ['Der Film beginnt um acht Uhr.', 'Der Film beginnt an acht Uhr.'],
          loesung: 0,
          warum: 'La hora va con **um**: *um acht Uhr*. ~~(«a las ocho» no se traduce con an — con horas siempre um)~~',
        },
        {
          typ: 'korrektur',
          optionen: ['Der Zug ist 20 Minuten spät.', 'Der Zug hat 20 Minuten Verspätung.'],
          loesung: 1,
          warum: 'El retraso se dice con **haben**: *Der Zug hat Verspätung*. ~~(«el tren va tarde» no se calca — en alemán el tren «tiene» retraso)~~',
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies den Text. Löse die 4 Aufgaben. ~~(Lee el texto. Resuelve las 4 tareas.)~~',
      textTitel: 'Anzeige: Neu im Kaufhaus Sonne',
      text: 'Neu im Kaufhaus Sonne! Ab Montag finden Sie unsere Bäckerei im Erdgeschoss, direkt am Ausgang West. Jeden Morgen gibt es frisches Brot und Brötchen. Zur Eröffnung haben wir ein Angebot: Ein Kaffee und ein Brötchen kosten zusammen nur zwei Euro fünfzig. Das ist wirklich günstig! Wir sind von Montag bis Samstag von halb sieben bis 20 Uhr geöffnet. Am Sonntag ist die Bäckerei geschlossen. Wir freuen uns auf Sie!',
      items: [
        { typ: 'rf', aussage: 'Die Bäckerei ist im Erdgeschoss.', loesung: true },
        { typ: 'rf', aussage: 'Am Sonntag ist die Bäckerei geöffnet.', loesung: false },
        {
          typ: 'mc',
          frage: 'Was kostet das Angebot (Kaffee + Brötchen)?',
          optionen: ['2,50 Euro', '2,15 Euro', '5,20 Euro'],
          loesung: 0,
        },
        {
          typ: 'mc',
          frage: 'Wann öffnet die Bäckerei am Montag?',
          optionen: ['um 20 Uhr', 'um 7.30 Uhr', 'um 6.30 Uhr'],
          loesung: 2,
        },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'formular',
      titel: 'Schreiben',
      anweisung: 'Lies die Durchsage. Ergänze das Formular. ~~(Lee el aviso. Completa el formulario.)~~',
      quelle: '„Achtung am Gleis 3: Der Zug nach Leipzig, Abfahrt 15.40 Uhr, hat heute 25 Minuten Verspätung. Der Zug fährt heute auch nicht von Gleis 3, sondern von Gleis 11. Wir bitten um Entschuldigung.“',
      felder: [
        { id: 'ziel', label: 'Der Zug fährt nach', erwartet: ['Leipzig'] },
        { id: 'abfahrt', label: 'Abfahrt', erwartet: ['15.40 Uhr', '15.40', '15:40', '15:40 Uhr'] },
        { id: 'verspaetung', label: 'Verspätung', erwartet: ['25 Minuten', '25'] },
        { id: 'gleis', label: 'Gleis heute', erwartet: ['11', 'Gleis 11'] },
      ],
    },
  ],
}
