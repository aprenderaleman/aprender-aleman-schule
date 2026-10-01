// Übungsheft A2 — Lektion 08: Akkusativ & Akkusativpräpositionen
export default {
  lektion: 8,
  titel: 'Übungsheft — Der Akkusativ',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Wähle oder ergänze die richtige Form. ~~(Elige o completa la forma correcta.)~~',
      items: [
        { typ: 'mc', frage: 'Siehst du ___ Mann?', optionen: ['der', 'den', 'das'], loesung: 1 },
        { typ: 'mc', frage: 'Es gibt hier ___ Supermarkt.', optionen: ['einen', 'ein', 'eine'], loesung: 0 },
        {
          typ: 'luecke',
          text: 'Ich brauche {1} Stift und {2} Lampe. Der Stift ist für {3} Bruder.',
          bank: ['einen', 'eine', 'meinen', 'ein'],
          loesungen: { 1: 'einen', 2: 'eine', 3: 'meinen' },
        },
        {
          typ: 'luecke',
          text: 'Rita hat Hunger und isst {1} Apfel. Sie hat {2} Auto und nimmt den Bus.',
          bank: ['einen', 'kein', 'keinen'],
          loesungen: { 1: 'einen', 2: 'kein' },
        },
        { typ: 'satzbau', woerter: ['den', 'suchen', 'Wir', 'Bahnhof'], loesung: 'Wir suchen den Bahnhof.' },
        { typ: 'satzbau', woerter: ['durch', 'Zug', 'den', 'fährt', 'Der', 'Tunnel'], loesung: 'Der Zug fährt durch den Tunnel.' },
        {
          typ: 'zuordnen',
          links: ['der (maskulin)', 'die (feminin)', 'das (neutral)', 'ein (maskulin)'],
          rechts: ['den', 'die', 'das', 'einen'],
          loesung: { 'der (maskulin)': 'den', 'die (feminin)': 'die', 'das (neutral)': 'das', 'ein (maskulin)': 'einen' },
        },
        {
          typ: 'korrektur',
          optionen: ['Ich habe ein Hund.', 'Ich habe einen Hund.'],
          loesung: 1,
          warum: 'Objeto directo maskulin → **einen**: *Ich habe einen Hund*. ~~(En español «un» nunca cambia; en alemán ein → einen.)~~',
        },
        {
          typ: 'korrektur',
          optionen: ['Der Kuchen ist für den Opa.', 'Der Kuchen ist für der Opa.'],
          loesung: 0,
          warum: 'Después de **für** va SIEMPRE Akkusativ: *für den Opa*. ~~(für, gegen, ohne, um, durch + acusativo.)~~',
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies den Text. Richtig oder falsch? ~~(Lee el texto. ¿Verdadero o falso?)~~',
      textTitel: 'E-Mail von Nuria',
      text: 'Hallo Jonas! Am Samstag mache ich ein Fest. Ich habe schon einen Kuchen gebacken und Saft gekauft. Aber ich brauche noch einen Tisch und Stühle — hast du einen Tisch? Mein Bruder bringt eine Gitarre mit, es gibt also Musik. Das Fest beginnt um sechs Uhr und endet um elf Uhr. Bring bitte einen Ball mit, wir spielen Fußball. Viele Grüße, Nuria',
      items: [
        { typ: 'rf', aussage: 'Nuria macht am Sonntag ein Fest.', loesung: false },
        { typ: 'rf', aussage: 'Nuria hat schon einen Kuchen gebacken.', loesung: true },
        {
          typ: 'mc',
          frage: 'Was braucht Nuria noch?',
          optionen: ['einen Tisch und Stühle', 'eine Gitarre', 'einen Kuchen'],
          loesung: 0,
        },
        {
          typ: 'mc',
          frage: 'Wann beginnt das Fest?',
          optionen: ['um elf Uhr', 'um sechs Uhr', 'am Sonntag'],
          loesung: 1,
        },
      ],
    },
    {
      typ: 'hoeren',
      titel: 'Hören',
      anweisung: 'Hör die Durchsage im Kaufhaus. Was ist richtig? ~~(Escucha el aviso en los grandes almacenes. ¿Qué es correcto?)~~',
      audio: {
        transcript: 'Liebe Kundinnen und Kunden! Brauchen Sie einen Tisch oder einen Stuhl für den Garten? Heute haben wir im zweiten Stock ein Angebot für Sie. Einen Gartentisch bekommen Sie für neunundvierzig Euro, einen Stuhl für nur fünfzehn Euro. Das Angebot gibt es nicht bis Samstag, sondern nur heute bis zwanzig Uhr. Haben Sie Hunger? Im Café im Erdgeschoss gibt es einen Kaffee und ein Stück Kuchen zusammen für vier Euro fünfzig.',
      },
      items: [
        { typ: 'mc', frage: 'Was kostet ein Stuhl?', optionen: ['15 Euro', '49 Euro', '50 Euro'], loesung: 0 },
        { typ: 'rf', aussage: 'Das Angebot gibt es bis Samstag.', loesung: false },
        { typ: 'rf', aussage: 'Im Café gibt es Kaffee und Kuchen für 4,50 Euro.', loesung: true },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'formular',
      titel: 'Schreiben',
      anweisung: 'Lies den Text. Ergänze das Formular. ~~(Lee el texto. Completa el formulario.)~~',
      quelle: 'Guten Tag! Ich heiße Marta Vidal und ich wohne in Leipzig. Ich suche einen Tisch für die Küche. Ich kann 60 Euro bezahlen. Meine Telefonnummer ist 0157 2233448.',
      felder: [
        { id: 'name', label: 'Name', erwartet: ['Marta Vidal', 'Vidal'] },
        { id: 'stadt', label: 'Stadt', erwartet: ['Leipzig'] },
        { id: 'produkt', label: 'Sie sucht', erwartet: ['einen Tisch', 'Tisch', 'einen Tisch für die Küche'] },
        { id: 'preis', label: 'Preis (maximal)', erwartet: ['60 Euro', '60'] },
        { id: 'telefon', label: 'Telefonnummer', erwartet: ['0157 2233448', '01572233448'] },
      ],
    },
    {
      typ: 'sprechen',
      titel: 'Sprechen',
      anweisung: 'Sprich 45 Sekunden über deinen Einkauf. ~~(Habla 45 segundos sobre tu compra.)~~',
      aufgabe: 'Du gehst heute in die Stadt einkaufen. Was ist dein Plan? Benutze den Akkusativ.',
      punkte: [
        'Was brauchst du?',
        'Was kaufst du für deine Familie oder für einen Freund?',
        'Was kaufst du heute nicht?',
      ],
      redemittel: ['Ich brauche einen … / eine … / ein …', 'Für … kaufe ich …', 'Ich suche auch …', 'Ich kaufe keinen … / keine … / kein …'],
      maxSekunden: 45,
      beispielLoesung: 'Heute gehe ich in die Stadt einkaufen. Ich brauche einen Rucksack und eine Jacke für den Winter. Für meinen Bruder kaufe ich ein Buch, er hat am Freitag Geburtstag. Ich suche auch einen Kalender für die Küche. Schuhe kaufe ich heute nicht, ich habe kein Geld mehr. Danach trinke ich noch einen Kaffee.',
    },
  ],
}
