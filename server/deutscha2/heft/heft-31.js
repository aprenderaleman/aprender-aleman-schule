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
      typ: 'hoeren',
      titel: 'Hören',
      anweisung: 'Hör das Gespräch. Richtig oder falsch? Wähle bei der Frage die richtige Antwort. ~~(Escucha la conversación. ¿Verdadero o falso? En la pregunta, elige la respuesta correcta.)~~',
      audio: {
        transcript: 'Frau: Tom, ist das ein Foto von deiner Familie?\nMann: Ja, Lena. Das sind meine Eltern und das ist mein Bruder Jonas.\nFrau: Ist Jonas verheiratet?\nMann: Nein, er ist ledig. Aber meine Schwester ist verheiratet und hat zwei Kinder.\nFrau: Und dein Bruder, ist er fünfundzwanzig?\nMann: Nein, er ist nicht fünfundzwanzig, sondern schon achtundzwanzig. Er ist sehr lustig.\nFrau: Wohnt deine Familie auch hier in Köln?\nMann: Nein, meine Eltern wohnen in Hamburg. Ich besuche sie oft am Wochenende.',
      },
      items: [
        { typ: 'rf', aussage: 'Der Bruder von Tom ist verheiratet.', loesung: false },
        { typ: 'mc', frage: 'Wie alt ist Jonas?', optionen: ['22 Jahre', '25 Jahre', '28 Jahre'], loesung: 2 },
        { typ: 'rf', aussage: 'Die Eltern von Tom wohnen in Hamburg.', loesung: true },
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
    {
      typ: 'sprechen',
      titel: 'Sprechen',
      anweisung: 'Erzähl von einer Person. Sprich 45 Sekunden. ~~(Habla de una persona. Habla 45 segundos.)~~',
      aufgabe: 'Erzähl von deinem besten Freund oder von deiner besten Freundin.',
      punkte: [
        'Name und Alter',
        'Wo wohnt er oder sie?',
        'Wie ist er oder sie? Nenn zwei Adjektive.',
        'Was macht ihr zusammen?',
      ],
      redemittel: [
        'Mein bester Freund / Meine beste Freundin heißt …',
        'Er / Sie ist … Jahre alt und wohnt in …',
        'Er / Sie ist sehr … und …',
        'Wir verstehen uns …',
      ],
      maxSekunden: 45,
      beispielLoesung:
        'Mein bester Freund heißt Diego. Er ist 30 Jahre alt und wohnt in Valencia. Er ist verheiratet und hat eine kleine Tochter. Diego ist sehr lustig und sympathisch. Wir verstehen uns super. Wir telefonieren jeden Sonntag. Im Sommer besuche ich ihn, dann gehen wir zusammen essen.',
    },
  ],
}
