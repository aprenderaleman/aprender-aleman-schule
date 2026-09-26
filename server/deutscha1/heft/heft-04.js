// Übungsheft A1 — Lektion 04: Personalpronomen & das Verb „sein"
// CUADERNO MODELO: los redactores copian esta factura.
export default {
  lektion: 4,
  titel: 'Übungsheft — Personalpronomen & „sein"',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Wähle die richtige Form. ~~(Elige la forma correcta.)~~',
      items: [
        { typ: 'mc', frage: 'Ich ___ María.', optionen: ['bin', 'bist', 'ist'], loesung: 0 },
        { typ: 'mc', frage: '___ du aus Spanien?', optionen: ['Bist', 'Bin', 'Seid'], loesung: 0 },
        {
          typ: 'luecke',
          text: 'Das ist Paul. Er {1} aus Berlin. Wir {2} Freunde. Ihr {3} sehr nett.',
          bank: ['ist', 'sind', 'seid', 'bist'],
          loesungen: { 1: 'ist', 2: 'sind', 3: 'seid' },
        },
        {
          typ: 'luecke',
          text: 'Frau Krüger, {1} Sie aus Berlin? — Ja, ich {2} aus Berlin.',
          bank: ['sind', 'bin', 'ist'],
          loesungen: { 1: 'sind', 2: 'bin' },
        },
        { typ: 'satzbau', woerter: ['müde', 'Ich', 'bin'], loesung: 'Ich bin müde.' },
        { typ: 'satzbau', woerter: ['ihr', 'Spanien', 'aus', 'Seid'], loesung: 'Seid ihr aus Spanien?' },
        {
          typ: 'zuordnen',
          links: ['ich', 'du', 'er / sie / es', 'wir', 'ihr', 'sie / Sie'],
          rechts: ['bin', 'bist', 'ist', 'sind', 'seid', 'sind'],
          loesung: { 'ich': 'bin', 'du': 'bist', 'er / sie / es': 'ist', 'wir': 'sind', 'ihr': 'seid', 'sie / Sie': 'sind' },
        },
        {
          typ: 'korrektur',
          optionen: ['Ich bin 25 Jahre alt.', 'Ich habe 25 Jahre.'],
          loesung: 0,
          warum: 'La edad en alemán va con **sein**: *Ich bin 25 Jahre alt*. ~~(«Tengo 25 años» no se traduce con haben.)~~',
        },
        {
          typ: 'korrektur',
          optionen: ['Bist du müde?', 'Du bist müde?'],
          loesung: 0,
          warum: 'La pregunta de sí/no empieza con el **Verb**: *Bist du…?* ~~(El verbo va primero en la pregunta.)~~',
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies den Text. Richtig oder falsch? ~~(Lee el texto. ¿Verdadero o falso?)~~',
      textTitel: 'Hallo aus Berlin!',
      text: 'Hallo! Ich bin Sara und ich bin 24 Jahre alt. Ich bin aus Valencia, aber ich wohne jetzt in Berlin. Mein Freund Tom ist aus England. Wir sind sehr glücklich hier. Und du? Bist du auch neu in Berlin?',
      items: [
        { typ: 'rf', aussage: 'Sara ist 24 Jahre alt.', loesung: true },
        { typ: 'rf', aussage: 'Sara wohnt in Valencia.', loesung: false },
        { typ: 'rf', aussage: 'Tom ist aus England.', loesung: true },
        {
          typ: 'mc',
          frage: 'Wie sind Sara und Tom in Berlin?',
          optionen: ['sehr glücklich', 'sehr müde', 'nicht glücklich'],
          loesung: 0,
        },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'formular',
      titel: 'Schreiben',
      anweisung: 'Lies den Text. Ergänze das Formular. ~~(Lee el texto. Completa el formulario.)~~',
      quelle: 'Guten Tag! Ich bin Luis Ortega. Ich bin 31 Jahre alt und ich bin aus Sevilla, Spanien. Ich wohne jetzt in Hamburg. Meine Telefonnummer ist 0176 5544332.',
      felder: [
        { id: 'name', label: 'Name', erwartet: ['Luis Ortega', 'Ortega'] },
        { id: 'alter', label: 'Alter', erwartet: ['31', '31 Jahre'] },
        { id: 'land', label: 'Land', erwartet: ['Spanien'] },
        { id: 'stadt', label: 'Stadt jetzt', erwartet: ['Hamburg'] },
        { id: 'telefon', label: 'Telefonnummer', erwartet: ['0176 5544332', '01765544332'] },
      ],
    },
  ],
}
