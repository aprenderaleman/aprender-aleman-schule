// Übungsheft A1 — Lektion 25: Schreiben Teil 2 — Kurzer persönlicher Text
export default {
  lektion: 25,
  titel: 'Übungsheft — Schreiben Teil 2',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Training',
      anweisung: 'So schreibst du die E-Mail. Wähle, ergänze und ordne. ~~(Así se escribe el e-mail: elige, completa y ordena.)~~',
      items: [
        { typ: 'mc', frage: 'E-Mail an eine Frau: „___ Anna,“', optionen: ['Liebe', 'Lieber', 'Liebes'], loesung: 0 },
        { typ: 'mc', frage: 'E-Mail an einen Mann: „___ Tom,“', optionen: ['Lieber', 'Liebe', 'Liebes'], loesung: 0 },
        {
          typ: 'zuordnen',
          links: ['Anrede', 'Text', 'Gruß', 'Name'],
          rechts: ['Liebe Anna,', 'ich komme am Samstag nach Berlin.', 'Viele Grüße', 'Paco'],
          loesung: { 'Anrede': 'Liebe Anna,', 'Text': 'ich komme am Samstag nach Berlin.', 'Gruß': 'Viele Grüße', 'Name': 'Paco' },
        },
        {
          typ: 'luecke',
          text: 'Ich kann {1} nicht zum Kurs kommen. Ich bin {2}.',
          bank: ['leider', 'krank', 'gern'],
          loesungen: { 1: 'leider', 2: 'krank' },
        },
        {
          typ: 'luecke',
          text: 'Was sind die {1}? Können Sie mir bitte eine {2} schreiben?',
          bank: ['Hausaufgaben', 'E-Mail', 'Gruß'],
          loesungen: { 1: 'Hausaufgaben', 2: 'E-Mail' },
        },
        { typ: 'satzbau', woerter: ['leider', 'kann', 'ich', 'kommen', 'nicht'], loesung: 'Ich kann leider nicht kommen.' },
        { typ: 'satzbau', woerter: ['mich', 'möchtest', 'besuchen', 'du'], loesung: 'Möchtest du mich besuchen?' },
        {
          typ: 'korrektur',
          optionen: ['Liebe Anna, ich komme am Samstag.', 'Liebe Anna: Ich komme am Samstag.'],
          loesung: 0,
          warum: 'Nach der Anrede: **Komma** — und dann klein weiter. ~~(En alemán: coma tras el saludo y minúscula después — nunca dos puntos.)~~',
        },
        {
          typ: 'korrektur',
          optionen: ['Viele Grüße\nMarta', 'Viele grüße, Marta'],
          loesung: 0,
          warum: '**Grüße** ist ein Nomen — groß! Und vor dem Namen: kein Komma. ~~(«Grüße» es sustantivo → mayúscula; sin coma antes del nombre.)~~',
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies die E-Mail. Richtig oder falsch? ~~(Lee el e-mail. ¿Verdadero o falso?)~~',
      textTitel: 'E-Mail von Lucía',
      text: 'Liebe Marta,\nich bin jetzt in München und mache einen Deutschkurs. Der Kurs ist gut, aber heute bin ich krank. Ich kann leider nicht zum Kurs gehen. Und du? Möchtest du mich im Oktober besuchen? Ich lade dich ein!\nViele Grüße\nLucía',
      items: [
        { typ: 'rf', aussage: 'Lucía macht einen Deutschkurs in München.', loesung: true },
        { typ: 'rf', aussage: 'Lucía geht heute zum Kurs.', loesung: false },
        {
          typ: 'mc',
          frage: 'Warum geht Lucía heute nicht zum Kurs?',
          optionen: ['Sie ist krank.', 'Sie ist in Spanien.', 'Der Kurs ist schlecht.'],
          loesung: 0,
        },
        {
          typ: 'mc',
          frage: 'Was möchte Lucía?',
          optionen: ['Marta schreibt eine Karte.', 'Marta besucht sie im Oktober.', 'Marta macht einen Deutschkurs.'],
          loesung: 1,
        },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'text',
      titel: 'Schreiben',
      anweisung: 'Schreib eine E-Mail (ca. 30 Wörter). Schreib zu allen 3 Punkten. ~~(Escribe un e-mail de unas 30 palabras. Trata los 3 puntos.)~~',
      aufgabe: 'Du machst einen Deutschkurs in Hamburg. Schreib eine E-Mail an deinen Freund Pablo.',
      punkte: [
        'Was machst du in Hamburg?',
        'Wie ist die Stadt?',
        'Lade Pablo ein.',
      ],
      minWoerter: 20,
      beispielLoesung: 'Lieber Pablo,\nich mache einen Deutschkurs in Hamburg. Der Kurs ist super und die Stadt ist sehr schön. Möchtest du mich im Sommer besuchen?\nViele Grüße\nAna',
    },
  ],
}
