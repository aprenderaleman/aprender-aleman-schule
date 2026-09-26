// Übungsheft A1 — Lektion 10: Negation — nicht & kein
export default {
  lektion: 10,
  titel: 'Übungsheft — nicht & kein',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Wähle, ergänze oder ordne. ~~(Elige, completa u ordena.)~~',
      items: [
        { typ: 'mc', frage: 'Ich habe ___ Auto.', optionen: ['kein', 'nicht', 'keine'], loesung: 0 },
        { typ: 'mc', frage: 'Er wohnt ___ in Berlin.', optionen: ['nicht', 'kein', 'keinen'], loesung: 0 },
        {
          typ: 'luecke',
          text: 'Ich habe {1} Hund und {2} Katze. Und ich habe leider {3} Zeit.',
          bank: ['keinen', 'keine', 'kein'],
          loesungen: { 1: 'keinen', 2: 'keine', 3: 'keine' },
        },
        {
          typ: 'luecke',
          text: 'Das Hotel ist {1} teuer, aber es hat {2} Restaurant.',
          bank: ['nicht', 'kein', 'keine'],
          loesungen: { 1: 'nicht', 2: 'kein' },
        },
        { typ: 'satzbau', woerter: ['keine', 'Ich', 'Zeit', 'habe'], loesung: 'Ich habe keine Zeit.' },
        { typ: 'satzbau', woerter: ['nicht', 'komme', 'Ich', 'heute'], loesung: 'Ich komme heute nicht.', alt: ['Heute komme ich nicht.'] },
        {
          typ: 'zuordnen',
          links: ['Hast du einen Hund?', 'Kommst du morgen?', 'Haben Sie Kinder?', 'Ist der Film gut?'],
          rechts: ['Nein, ich habe keinen Hund.', 'Nein, ich komme morgen nicht.', 'Nein, ich habe keine Kinder.', 'Nein, er ist nicht gut.'],
          loesung: {
            'Hast du einen Hund?': 'Nein, ich habe keinen Hund.',
            'Kommst du morgen?': 'Nein, ich komme morgen nicht.',
            'Haben Sie Kinder?': 'Nein, ich habe keine Kinder.',
            'Ist der Film gut?': 'Nein, er ist nicht gut.',
          },
        },
        {
          typ: 'korrektur',
          optionen: ['Ich habe kein Geld.', 'Ich habe nicht Geld.'],
          loesung: 0,
          warum: 'Delante de un sustantivo va **kein**: *kein Geld, keine Zeit*. ~~(¿Hay sustantivo? → kein. ¿No? → nicht.)~~',
        },
        {
          typ: 'korrektur',
          optionen: ['Ich verstehe nichts.', 'Ich verstehe nicht nichts.'],
          loesung: 0,
          warum: 'En alemán solo hay **una** negación por frase. ~~(«No entiendo nada» = Ich verstehe nichts — sin doble negación.)~~',
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies die E-Mail. Richtig oder falsch? ~~(Lee el correo. ¿Verdadero o falso?)~~',
      textTitel: 'E-Mail von Carlos',
      text: 'Liebe Anna, die Party am Samstag ist ein Problem: Ich komme leider nicht. Ich habe keine Zeit — ich arbeite. Am Sonntag arbeite ich nicht, aber ich habe kein Auto. Kein Problem: Ich komme am Montag! Ich trinke keinen Kaffee — aber ein Wasser ist super. Viele Grüße, Carlos',
      items: [
        { typ: 'rf', aussage: 'Carlos kommt am Samstag.', loesung: false },
        { typ: 'rf', aussage: 'Am Sonntag arbeitet Carlos nicht.', loesung: true },
        {
          typ: 'mc',
          frage: 'Am Sonntag hat Carlos ein Problem. Was?',
          optionen: ['Er hat kein Auto.', 'Er arbeitet.', 'Er hat keine Zeit.'],
          loesung: 0,
        },
        { typ: 'rf', aussage: 'Carlos trinkt keinen Kaffee.', loesung: true },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'formular',
      titel: 'Schreiben',
      anweisung: 'Lies den Text. Ergänze das Formular. ~~(Lee el texto. Completa el formulario.)~~',
      quelle: 'Guten Tag! Ich heiße Marta Ruiz. Ich bin 28 Jahre alt und komme aus Chile. Ich wohne jetzt in Köln. Ich habe kein Telefon, aber eine E-Mail-Adresse: marta.ruiz@post.de.',
      felder: [
        { id: 'name', label: 'Name', erwartet: ['Marta Ruiz', 'Ruiz'] },
        { id: 'alter', label: 'Alter', erwartet: ['28', '28 Jahre'] },
        { id: 'land', label: 'Land', erwartet: ['Chile'] },
        { id: 'stadt', label: 'Stadt jetzt', erwartet: ['Köln'] },
        { id: 'email', label: 'E-Mail', erwartet: ['marta.ruiz@post.de'] },
      ],
    },
  ],
}
