// Übungsheft A2 — Lektion 36: Reisen & Verkehr
export default {
  lektion: 36,
  titel: 'Übungsheft — Reisen & Verkehr',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Löse die Aufgaben. ~~(Resuelve los ejercicios.)~~',
      items: [
        { typ: 'mc', frage: 'Ich fahre ___ Zug nach Berlin.', optionen: ['mit dem', 'mit der', 'in dem'], loesung: 0 },
        { typ: 'mc', frage: 'Der Zug fährt auf ___ 7 ab.', optionen: ['Haltestelle', 'Gleis', 'Bahnhof'], loesung: 1 },
        {
          typ: 'luecke',
          text: 'Eine {1} nach Hamburg, bitte. — Einfach oder hin und {2}? — Hin und zurück, bitte.',
          bank: ['Fahrkarte', 'zurück', 'Gleis'],
          loesungen: { 1: 'Fahrkarte', 2: 'zurück' },
        },
        {
          typ: 'luecke',
          text: 'Wir fliegen {1} dem Flugzeug nach Mallorca. Sie müssen in Köln {2}.',
          bank: ['mit', 'umsteigen', 'ohne'],
          loesungen: { 1: 'mit', 2: 'umsteigen' },
        },
        { typ: 'satzbau', woerter: ['zum', 'komme', 'wie', 'Bahnhof', 'ich'], loesung: 'Wie komme ich zum Bahnhof?' },
        { typ: 'satzbau', woerter: ['reserviert', 'Ich', 'ein', 'habe', 'Zimmer'], loesung: 'Ich habe ein Zimmer reserviert.' },
        {
          typ: 'zuordnen',
          links: ['eine Reise', 'eine Fahrkarte', 'ein Zimmer', 'mit dem Zug', 'in Köln'],
          rechts: ['machen', 'kaufen', 'reservieren', 'fahren', 'umsteigen'],
          loesung: { 'eine Reise': 'machen', 'eine Fahrkarte': 'kaufen', 'ein Zimmer': 'reservieren', 'mit dem Zug': 'fahren', 'in Köln': 'umsteigen' },
        },
        {
          typ: 'korrektur',
          optionen: ['Ich fahre in Zug nach München.', 'Ich fahre mit dem Zug nach München.'],
          loesung: 1,
          warum: '«En tren» = **mit dem Zug** (mit + Dativ). ~~(El calco *in Zug* no existe en alemán.)~~',
        },
        {
          typ: 'korrektur',
          optionen: ['Wo ist der Bahnhof, bitte?', 'Wo ist die Bahnhof, bitte?'],
          loesung: 0,
          warum: '*Bahnhof* es masculino: **der Bahnhof**. ~~(«La estación» te empuja a „die“ — aprende cada palabra con su artículo.)~~',
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies den Text. Löse die vier Aufgaben. ~~(Lee el texto. Resuelve las cuatro tareas.)~~',
      textTitel: 'E-Mail von Ricardo',
      text: 'Hallo Miguel, ich habe gute Nachrichten: Am Freitag komme ich nach Leipzig! Ich fahre mit dem Zug, das Flugzeug ist mir zu teuer. Der Zug kommt um 18:30 Uhr an, ich muss in Frankfurt umsteigen. Kannst du zum Bahnhof kommen? Ich habe schon ein Hotel gefunden, das Zimmer kostet nur 45 Euro. Am Samstag können wir die Stadt sehen und am Abend zusammen essen gehen. Ich freue mich! Viele Grüße, Ricardo',
      items: [
        { typ: 'rf', aussage: 'Ricardo fliegt mit dem Flugzeug nach Leipzig.', loesung: false },
        {
          typ: 'mc',
          frage: 'Wann kommt der Zug an?',
          optionen: ['um 18:30 Uhr', 'um 8:30 Uhr', 'um 15:30 Uhr'],
          loesung: 0,
        },
        { typ: 'rf', aussage: 'Ricardo muss in Frankfurt umsteigen.', loesung: true },
        {
          typ: 'mc',
          frage: 'Was kostet das Hotelzimmer?',
          optionen: ['54 Euro', '45 Euro', '40 Euro'],
          loesung: 1,
        },
      ],
    },
    {
      typ: 'hoeren',
      titel: 'Hören',
      anweisung: 'Hör die Durchsage am Bahnhof. Richtig oder falsch? Wähle bei der Frage die richtige Antwort. ~~(Escucha el aviso en la estación. ¿Verdadero o falso? En la pregunta, elige la respuesta correcta.)~~',
      audio: {
        transcript: 'Achtung, liebe Fahrgäste! Der Zug nach München fährt heute nicht um vierzehn Uhr zwanzig, sondern erst um vierzehn Uhr vierzig. Er hat zwanzig Minuten Verspätung. Der Zug fährt heute auch nicht von Gleis fünf, sondern von Gleis acht. Möchten Sie nach Salzburg fahren? Dann müssen Sie in München umsteigen. Fahrkarten können Sie am Schalter neben dem Eingang kaufen. Wir wünschen Ihnen eine gute Reise!',
      },
      items: [
        { typ: 'mc', frage: 'Wann fährt der Zug nach München heute?', optionen: ['um 14:40 Uhr', 'um 14:20 Uhr', 'um 14:04 Uhr'], loesung: 0 },
        { typ: 'rf', aussage: 'Der Zug fährt heute von Gleis 5 ab.', loesung: false },
        { typ: 'rf', aussage: 'Nach Salzburg muss man in München umsteigen.', loesung: true },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'formular',
      titel: 'Schreiben',
      anweisung: 'Lies den Text. Ergänze das Formular. ~~(Lee el texto. Completa el formulario.)~~',
      quelle: 'Guten Tag! Mein Name ist Carla Jiménez. Ich möchte ein Zimmer für zwei Nächte reservieren, vom 12. bis zum 14. Mai. Ich komme mit dem Zug und bin um 17 Uhr im Hotel. Meine Telefonnummer ist 0157 8833421.',
      felder: [
        { id: 'name', label: 'Name', erwartet: ['Carla Jiménez', 'Jiménez'] },
        { id: 'naechte', label: 'Nächte', erwartet: ['2', 'zwei', '2 Nächte', 'zwei Nächte'] },
        { id: 'anreise', label: 'Anreise am', erwartet: ['12. Mai', '12.05.', '12.5.', 'am 12. Mai'] },
        { id: 'ankunft', label: 'Ankunft im Hotel (Uhrzeit)', erwartet: ['17 Uhr', 'um 17 Uhr', '17:00'] },
        { id: 'telefon', label: 'Telefonnummer', erwartet: ['0157 8833421', '01578833421'] },
      ],
    },
    {
      typ: 'sprechen',
      titel: 'Sprechen',
      anweisung: 'Erzähl von einer Reise. Sprich 60 Sekunden. ~~(Cuenta un viaje. Habla 60 segundos.)~~',
      aufgabe: 'Erzähl von deiner letzten Reise oder von deinem letzten Urlaub.',
      punkte: [
        'Wohin bist du gefahren? Wann?',
        'Wie bist du gefahren? Mit dem Zug, mit dem Flugzeug …?',
        'Wo hast du geschlafen?',
        'Was hast du dort gemacht?',
      ],
      redemittel: [
        'Im Sommer / Im Mai bin ich nach … gefahren.',
        'Ich bin mit dem … gefahren / geflogen.',
        'Ich habe in einem Hotel / bei Freunden geschlafen.',
        'Dort habe ich …',
      ],
      maxSekunden: 60,
      beispielLoesung:
        'Im August habe ich eine Reise nach Wien gemacht. Ich bin mit dem Zug gefahren, das Flugzeug war mir zu teuer. Ich bin in München umgestiegen. In Wien habe ich drei Nächte in einem kleinen Hotel geschlafen. Das Zimmer war ruhig und nicht teuer. Ich habe die Stadt gesehen und viel Kaffee getrunken. Die Reise hat mir sehr gut gefallen.',
    },
  ],
}
