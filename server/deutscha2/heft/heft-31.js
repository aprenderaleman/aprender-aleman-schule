// Übungsheft A2 — Lektion 31: Familie & Freunde
export default {
  lektion: 31,
  titel: 'Übungsheft — Familie & Freunde',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Wähle die richtige Form. ~~(Elige la forma correcta.)~~',
      items: [
        { typ: 'mc', frage: 'Das ist ___ Mutter.', optionen: ['mein', 'meine', 'meinen'], loesung: 1 },
        { typ: 'mc', frage: 'Am Sonntag besuche ich ___ Opa.', optionen: ['mein', 'meine', 'meinen'], loesung: 2 },
        {
          typ: 'luecke',
          text: 'Ich habe zwei Geschwister: {1} Bruder und {2} Schwester.',
          bank: ['einen', 'eine', 'ein'],
          loesungen: { 1: 'einen', 2: 'eine' },
        },
        {
          typ: 'luecke',
          text: 'Mutter und Vater sind die {1}. Oma und Opa sind die {2}.',
          bank: ['Eltern', 'Großeltern', 'Geschwister'],
          loesungen: { 1: 'Eltern', 2: 'Großeltern' },
        },
        { typ: 'satzbau', woerter: ['wohnen', 'Meine', 'Eltern', 'in', 'Madrid'], loesung: 'Meine Eltern wohnen in Madrid.' },
        { typ: 'satzbau', woerter: ['du', 'Geschwister', 'Hast'], loesung: 'Hast du Geschwister?' },
        {
          typ: 'zuordnen',
          links: ['der Bruder', 'die Eltern', 'die Großeltern', 'ledig', 'verheiratet'],
          rechts: ['el hermano', 'los padres', 'los abuelos', 'soltero/a', 'casado/a'],
          loesung: {
            'der Bruder': 'el hermano',
            'die Eltern': 'los padres',
            'die Großeltern': 'los abuelos',
            'ledig': 'soltero/a',
            'verheiratet': 'casado/a',
          },
        },
        {
          typ: 'korrektur',
          optionen: ['Ich habe einen Bruder.', 'Ich habe ein Bruder.'],
          loesung: 0,
          warum: 'Nach *haben* kommt der **Akkusativ**: maskulin → ein**en** Bruder. ~~(«Tengo un hermano» — el masculino tras haben lleva -en.)~~',
        },
        {
          typ: 'korrektur',
          optionen: ['Meine Schwester ist sehr nette.', 'Meine Schwester ist sehr nett.'],
          loesung: 1,
          warum: 'Nach **sein** hat das Adjektiv keine Endung: *Sie ist nett.* ~~(«Es simpática» — no añadas -e al adjetivo tras el verbo ser.)~~',
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies den Zettel. Richtig oder falsch? Wähle bei den Fragen die richtige Antwort. ~~(Lee la nota. ¿Verdadero o falso? En las preguntas, elige la respuesta correcta.)~~',
      textTitel: 'Zettel von Oma Rosa',
      text: 'Liebe Valeria, ich besuche euch am Freitag! Dein Opa kommt nicht mit, er ist leider krank. Ich komme um 15 Uhr mit dem Bus. Ich bleibe bis Sonntag, wir haben viel Zeit. Kochst du für uns? Deine Mutter sagt, deine Wohnung ist sehr schön. Ich bringe Fotos von der Familie mit: dein Onkel, deine Tante und ihre Kinder. Bis Freitag! Deine Oma Rosa',
      items: [
        { typ: 'rf', aussage: 'Oma Rosa kommt am Freitag.', loesung: true },
        { typ: 'rf', aussage: 'Der Opa kommt auch mit.', loesung: false },
        {
          typ: 'mc',
          frage: 'Wie kommt Oma Rosa?',
          optionen: ['mit dem Bus', 'mit dem Auto', 'mit dem Zug'],
          loesung: 0,
        },
        {
          typ: 'mc',
          frage: 'Was bringt sie mit?',
          optionen: ['Essen', 'Fotos von der Familie', 'Bücher'],
          loesung: 1,
        },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'text',
      titel: 'Schreiben',
      anweisung: 'Schreib einen kurzen Text über deine Familie. ~~(Escribe un texto corto sobre tu familia.)~~',
      aufgabe: 'Erzähl von deiner Familie — wie im Sprechen Teil 2.',
      punkte: [
        'Wie groß ist deine Familie? Wer gehört dazu?',
        'Nenn deinen Familienstand: ledig, verheiratet …',
        'Beschreib eine Person mit zwei Adjektiven.',
      ],
      minWoerter: 25,
      beispielLoesung:
        'Meine Familie ist klein. Ich habe eine Schwester, sie heißt Carla. Meine Eltern wohnen in Bogotá. Mein Vater ist 62 Jahre alt, sehr nett und lustig. Ich bin ledig und wohne allein in Hamburg. Am Wochenende besuche ich oft meine Großeltern.',
    },
  ],
}
