// Übungsheft A1 — Lektion 08: Artikel & Genus (der/die/das)
export default {
  lektion: 8,
  titel: 'Übungsheft — Artikel: der, die, das',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Wähle die richtige Form. ~~(Elige la forma correcta.)~~',
      items: [
        { typ: 'mc', frage: '___ Tisch', optionen: ['der', 'die', 'das'], loesung: 0 },
        { typ: 'mc', frage: '___ Mädchen', optionen: ['das', 'die', 'der'], loesung: 0 },
        {
          typ: 'luecke',
          text: '{1} Frau ist nett. {2} Kind schläft. {3} Mann liest.',
          bank: ['Die', 'Das', 'Der'],
          loesungen: { 1: 'Die', 2: 'Das', 3: 'Der' },
        },
        {
          typ: 'luecke',
          text: 'Ich habe {1} Frage. Das ist {2} Haus.',
          bank: ['eine', 'ein'],
          loesungen: { 1: 'eine', 2: 'ein' },
        },
        { typ: 'satzbau', woerter: ['ist', 'Das', 'Tisch', 'der'], loesung: 'Das ist der Tisch.' },
        { typ: 'satzbau', woerter: ['Lampe', 'ist', 'Die', 'neu'], loesung: 'Die Lampe ist neu.' },
        {
          typ: 'zuordnen',
          links: ['Mann', 'Frau', 'Kind', 'Tür', 'Haus', 'Lehrer'],
          rechts: ['der', 'die', 'das', 'die', 'das', 'der'],
          loesung: { 'Mann': 'der', 'Frau': 'die', 'Kind': 'das', 'Tür': 'die', 'Haus': 'das', 'Lehrer': 'der' },
        },
        {
          typ: 'korrektur',
          optionen: ['Das Mädchen heißt Lena.', 'Die Mädchen heißt Lena.'],
          loesung: 0,
          warum: '**das** Mädchen es neutro en alemán. ~~(Aunque en español sea «la chica» — el género no coincide.)~~',
        },
        {
          typ: 'korrektur',
          optionen: ['Ich habe eine Frage.', 'Ich habe ein Frage.'],
          loesung: 0,
          warum: '**die** Frage → **eine** Frage. ~~(La regla: der/das → ein · die → eine.)~~',
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies den Text. Richtig oder falsch? ~~(Lee el texto. ¿Verdadero o falso?)~~',
      textTitel: 'Anzeige: Tisch und Lampe',
      text: 'Zu verkaufen: ein Tisch und eine Lampe. Der Tisch ist groß und neu — 40 Euro. Die Lampe ist klein — 10 Euro. Wo? In Bonn, Gartenstraße 12. Die Frau heißt Anna Berger. Sie ist Lehrerin. Telefon: 0228 334455.',
      items: [
        { typ: 'rf', aussage: 'Der Tisch ist neu.', loesung: true },
        { typ: 'rf', aussage: 'Die Lampe kostet 40 Euro.', loesung: false },
        {
          typ: 'mc',
          frage: 'Wo sind der Tisch und die Lampe?',
          optionen: ['in Bonn', 'in Berlin', 'in Wien'],
          loesung: 0,
        },
        { typ: 'rf', aussage: 'Anna Berger ist Lehrerin.', loesung: true },
      ],
    },
    {
      typ: 'hoeren',
      titel: 'Hören',
      anweisung: 'Hör das Gespräch. Was ist richtig? ~~(Escucha la conversación. ¿Qué es correcto?)~~',
      audio: {
        transcript: 'Frau: Hallo Jonas! Was ist das? Ein Foto?\nMann: Ja. Das ist ein Haus in Graz. Das Haus ist groß, aber alt.\nFrau: Und wer ist die Frau?\nMann: Die Frau heißt Petra.\nFrau: Und der Mann?\nMann: Der Mann ist Lehrer. Er kommt aus Wien.\nFrau: Und das Mädchen?\nMann: Das Mädchen heißt Lena. Lena ist acht Jahre alt.',
      },
      items: [
        { typ: 'rf', aussage: 'Das Haus ist neu.', loesung: false },
        { typ: 'mc', frage: 'Wo ist das Haus?', optionen: ['in Wien', 'in Bonn', 'in Graz'], loesung: 2 },
        { typ: 'rf', aussage: 'Das Mädchen ist acht Jahre alt.', loesung: true },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'formular',
      titel: 'Schreiben',
      anweisung: 'Lies den Text. Ergänze das Formular. ~~(Lee el texto. Completa el formulario.)~~',
      quelle: 'Guten Tag! Ich bin Emil Krause. Ich bin 40 Jahre alt. Ich bin Lehrer. Ich bin aus Österreich und ich wohne jetzt in Bonn. Meine Telefonnummer ist 0159 776655.',
      felder: [
        { id: 'name', label: 'Name', erwartet: ['Emil Krause', 'Krause'] },
        { id: 'alter', label: 'Alter', erwartet: ['40', '40 Jahre'] },
        { id: 'land', label: 'Land', erwartet: ['Österreich'] },
        { id: 'stadt', label: 'Stadt jetzt', erwartet: ['Bonn'] },
        { id: 'telefon', label: 'Telefonnummer', erwartet: ['0159 776655', '0159776655'] },
      ],
    },
    {
      typ: 'sprechen',
      titel: 'Sprechen',
      anweisung: 'Sprich 30 Sekunden. ~~(Habla 30 segundos.)~~',
      aufgabe: 'Wie ist dein Haus? Sag vier Sätze mit der, die oder das. ~~(¿Cómo es tu casa? Di cuatro frases con der, die o das.)~~',
      punkte: ['das Haus: groß oder klein?', 'der Tisch: neu oder alt?', 'die Lampe', 'die Tür'],
      redemittel: ['Das Haus ist …', 'Der Tisch ist …', 'Die Lampe ist …', 'Die Tür ist …'],
      maxSekunden: 30,
      beispielLoesung: 'Das Haus ist klein und alt. Der Tisch ist groß und neu. Die Lampe ist auch neu. Und die Tür ist alt.',
    },
  ],
}
