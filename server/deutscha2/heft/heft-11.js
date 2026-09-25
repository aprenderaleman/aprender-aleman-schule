// Übungsheft A2 — Lektion 11: Possessivartikel
export default {
  lektion: 11,
  titel: 'Übungsheft — Possessivartikel',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Wähle oder ergänze die richtige Form. ~~(Elige o completa la forma correcta.)~~',
      items: [
        { typ: 'mc', frage: 'Ich besuche am Sonntag ___ Opa.', optionen: ['mein', 'meinen', 'meinem'], loesung: 1 },
        { typ: 'mc', frage: 'Wir fahren mit ___ Auto nach Bilbao.', optionen: ['unserem', 'unseren', 'unser'], loesung: 0 },
        { typ: 'mc', frage: 'Wo ist ___ Mutter, Kinder?', optionen: ['euer', 'eure', 'eurem'], loesung: 1 },
        {
          typ: 'luecke',
          text: 'Ana wohnt bei {1} Eltern. Sie telefoniert oft mit {2} Oma.',
          bank: ['ihren', 'ihrer', 'ihre'],
          loesungen: { 1: 'ihren', 2: 'ihrer' },
        },
        {
          typ: 'luecke',
          text: 'Paul besucht {1} Schwester und {2} Bruder.',
          bank: ['seine', 'seinen', 'seinem'],
          loesungen: { 1: 'seine', 2: 'seinen' },
        },
        { typ: 'satzbau', woerter: ['bei', 'wohne', 'meinen', 'Ich', 'Eltern'], loesung: 'Ich wohne bei meinen Eltern.' },
        { typ: 'satzbau', woerter: ['ihren', 'du', 'Kennst', 'Bruder'], loesung: 'Kennst du ihren Bruder?' },
        {
          typ: 'zuordnen',
          links: ['er', 'sie (ella)', 'wir', 'ihr (vosotros)'],
          rechts: ['sein', 'ihr', 'unser', 'euer'],
          loesung: { 'er': 'sein', 'sie (ella)': 'ihr', 'wir': 'unser', 'ihr (vosotros)': 'euer' },
        },
        {
          typ: 'korrektur',
          optionen: ['Ich fahre mit meinem Bruder.', 'Ich fahre mit meinen Bruder.'],
          loesung: 0,
          warum: '**mit** + Dativ maskulin → mein**em**: *mit meinem Bruder*. ~~(mit, bei, von, zu piden dativo — Lektion 9.)~~',
        },
        {
          typ: 'korrektur',
          optionen: ['Das ist Marta und sein Mann.', 'Das ist Marta und ihr Mann.'],
          loesung: 1,
          warum: 'La dueña es Marta (mujer) → **ihr** Mann. ~~(«su» no distingue en español; en alemán sein = de él, ihr = de ella.)~~',
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies den Text. Richtig oder falsch? ~~(Lee el texto. ¿Verdadero o falso?)~~',
      textTitel: 'Blog: Meine Familie in zwei Ländern',
      text: 'Ich heiße Facundo und komme aus Argentinien. Seit zwei Jahren wohne ich mit meiner Frau in Köln. Unsere Tochter geht hier in den Kindergarten. Meine Eltern und mein Bruder leben noch in Buenos Aires. Ich telefoniere jeden Sonntag mit meiner Mutter. Im Sommer besuchen wir unsere Familie: Ich sehe dann meinen Bruder, seine Frau und ihre Kinder. Und eure Familie? Wohnt ihr auch in zwei Ländern? Schreibt einen Kommentar!',
      items: [
        { typ: 'rf', aussage: 'Facundo wohnt seit zwei Jahren in Köln.', loesung: true },
        { typ: 'rf', aussage: 'Seine Tochter geht in die Schule.', loesung: false },
        {
          typ: 'mc',
          frage: 'Mit wem telefoniert Facundo jeden Sonntag?',
          optionen: ['mit seinem Bruder', 'mit seiner Mutter', 'mit seinen Kindern'],
          loesung: 1,
        },
        {
          typ: 'mc',
          frage: 'Wann besucht Facundo seine Familie in Argentinien?',
          optionen: ['im Winter', 'jeden Sonntag', 'im Sommer'],
          loesung: 2,
        },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'text',
      titel: 'Schreiben',
      anweisung: 'Schreib einen kurzen Text über deine Familie. ~~(Escribe un texto corto sobre tu familia.)~~',
      aufgabe: 'Stell deine Familie vor. Schreib zu allen drei Punkten.',
      punkte: [
        'Wer ist in deiner Familie?',
        'Wen besuchst du oft?',
        'Mit wem telefonierst du viel?',
      ],
      minWoerter: 25,
      beispielLoesung: 'Meine Familie ist klein: meine Mutter, mein Vater und meine Schwester. Meine Schwester wohnt mit ihrem Mann in Valencia. Am Sonntag besuche ich oft meinen Opa. Ich telefoniere jeden Tag mit meiner Mutter.',
    },
  ],
}
