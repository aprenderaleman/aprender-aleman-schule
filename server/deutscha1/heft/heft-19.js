// Übungsheft A1 — Lektion 19: Hören: Durchsagen
// Bloque 2 (Prüfungsstrategie): Teil 1 = Training der Zahlen-Fallen (halb, umgekehrte Zahlen).
export default {
  lektion: 19,
  titel: 'Übungsheft — Hören: Durchsagen',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Training',
      anweisung: 'Trainiere die Zahlen-Fallen. Lies und antworte. ~~(Entrena las trampas de los números. Lee y responde.)~~',
      items: [
        {
          typ: 'mc',
          frage: '„Der Bus fährt um halb neun.“ — Wann fährt der Bus?',
          optionen: ['um 8.30 Uhr', 'um 9.30 Uhr'],
          loesung: 0,
        },
        {
          typ: 'mc',
          frage: '„Der Film beginnt um halb acht.“ — Das ist …',
          optionen: ['19.30 Uhr', '20.30 Uhr', '18.30 Uhr'],
          loesung: 0,
        },
        {
          typ: 'mc',
          frage: 'Du hörst: „fünfundvierzig“. Welche Zahl ist das?',
          optionen: ['45', '54'],
          loesung: 0,
        },
        {
          typ: 'zuordnen',
          links: ['halb sieben', 'vierzehn Uhr dreißig', 'einundzwanzig Uhr', 'halb zwölf'],
          rechts: ['6.30 Uhr', '14.30 Uhr', '21.00 Uhr', '11.30 Uhr'],
          loesung: {
            'halb sieben': '6.30 Uhr',
            'vierzehn Uhr dreißig': '14.30 Uhr',
            'einundzwanzig Uhr': '21.00 Uhr',
            'halb zwölf': '11.30 Uhr',
          },
        },
        {
          typ: 'mc',
          frage: 'Transkript: „Der Zug nach Kiel, Abfahrt neun Uhr fünfzehn, fährt heute von Gleis 8 ab.“ — Der Zug fährt heute von …',
          optionen: ['Gleis 8', 'Gleis 9', 'Gleis 15'],
          loesung: 0,
        },
        {
          typ: 'rf',
          aussage: 'Transkript: „Liebe Kundinnen und Kunden, Tomaten heute im Angebot: ein Kilo nur zwei Euro zwanzig.“ — Ein Kilo Tomaten kostet 2,20 Euro.',
          loesung: true,
        },
        { typ: 'rf', aussage: '„Halb zehn“ ist 10.30 Uhr.', loesung: false },
        { typ: 'rf', aussage: 'In einer Durchsage hörst du viele Zahlen. Die Aufgabe fragt nur nach einer Zahl.', loesung: true },
        {
          typ: 'luecke',
          text: 'Am Bahnhof: Der Zug nach Köln fährt von {1} 5 ab. Er hat heute 10 Minuten {2}.',
          bank: ['Gleis', 'Verspätung', 'Kasse'],
          loesungen: { 1: 'Gleis', 2: 'Verspätung' },
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies den Text. Richtig oder falsch? ~~(Lee el texto. ¿Verdadero o falso?)~~',
      textTitel: 'Aushang im Supermarkt',
      text: 'Liebe Kundinnen und Kunden! Heute im Angebot: Äpfel — das Kilo nur 1,90 Euro. Und an der Kasse: Schokolade für einen Euro. Unser Supermarkt ist heute bis 20 Uhr geöffnet. Morgen sind wir ab 9 Uhr wieder für Sie da. Vielen Dank!',
      items: [
        { typ: 'rf', aussage: 'Ein Kilo Äpfel kostet heute 1,90 Euro.', loesung: true },
        { typ: 'rf', aussage: 'Der Supermarkt ist heute bis 21 Uhr geöffnet.', loesung: false },
        {
          typ: 'mc',
          frage: 'Was kostet die Schokolade?',
          optionen: ['einen Euro', '1,90 Euro', '9 Euro'],
          loesung: 0,
        },
        {
          typ: 'mc',
          frage: 'Morgen öffnet der Supermarkt um …',
          optionen: ['9 Uhr', '20 Uhr'],
          loesung: 0,
        },
      ],
    },
    {
      typ: 'hoeren',
      titel: 'Hören',
      anweisung: 'Hör die Durchsage am Bahnhof. Was ist richtig? ~~(Escucha el aviso de megafonía en la estación. ¿Qué es correcto?)~~',
      audio: {
        transcript: 'Achtung am Gleis vier! Der Zug nach Leipzig, Abfahrt vierzehn Uhr dreißig, hat heute circa fünfundzwanzig Minuten Verspätung. Der Zug fährt heute von Gleis neun ab, nicht von Gleis vier. Wir bitten um Entschuldigung.',
      },
      items: [
        { typ: 'rf', aussage: 'Der Zug fährt nach Leipzig.', loesung: true },
        { typ: 'mc', frage: 'Der Zug fährt heute von Gleis … ab.', optionen: ['4', '9', '14'], loesung: 1 },
        { typ: 'rf', aussage: 'Der Zug hat 52 Minuten Verspätung.', loesung: false },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'text',
      titel: 'Schreiben',
      anweisung: 'Schreib eine kurze Nachricht. ~~(Escribe un mensaje corto.)~~',
      aufgabe: 'Du bist am Bahnhof. Dein Zug hat 20 Minuten Verspätung. Schreib eine Nachricht an deine Freundin Eva.',
      punkte: [
        'Wo bist du?',
        'Was ist das Problem? (die Verspätung)',
        'Wann kommst du?',
      ],
      minWoerter: 15,
      beispielLoesung: 'Hallo Eva, ich bin am Bahnhof. Mein Zug hat 20 Minuten Verspätung. Ich komme um halb sieben. Bis später!',
    },
    {
      typ: 'sprechen',
      titel: 'Sprechen',
      anweisung: 'Mach eine Durchsage. Sprich 40 Sekunden. ~~(Haz un aviso por megafonía. Habla 40 segundos.)~~',
      aufgabe: 'Du arbeitest im Supermarkt. Sprich eine Durchsage für die Kunden. ~~(Trabajas en el supermercado. Di un aviso para los clientes.)~~',
      punkte: ['ein Angebot', 'der Preis', 'geöffnet bis … Uhr'],
      redemittel: ['Liebe Kundinnen und Kunden!', 'Heute im Angebot: …', 'Das Kilo kostet nur …', 'Wir haben heute bis … Uhr geöffnet.'],
      maxSekunden: 40,
      beispielLoesung: 'Liebe Kundinnen und Kunden! Heute im Angebot: Bananen. Das Kilo kostet nur zwei Euro zwanzig. An der Kasse haben wir Schokolade für drei Euro. Wir haben heute bis einundzwanzig Uhr geöffnet. Vielen Dank!',
    },
  ],
}
