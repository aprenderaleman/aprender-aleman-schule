// Übungsheft A2 — Lektion 30: Sprechen Teil 3 — Gemeinsam etwas planen
export default {
  lektion: 30,
  titel: 'Übungsheft — Gemeinsam etwas planen',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Wähle die richtige Antwort oder Form. ~~(Elige la respuesta o la forma correcta.)~~',
      items: [
        { typ: 'mc', frage: '___ wir am Samstag ins Kino gehen?', optionen: ['Wollen', 'Willst', 'Wollt'], loesung: 0 },
        { typ: 'mc', frage: 'Leider ___ ich am Freitag nicht.', optionen: ['kannst', 'kann', 'können'], loesung: 1 },
        {
          typ: 'luecke',
          text: 'A: Hast du am Samstag {1}? — B: Ja! Wollen wir zusammen {2}? — A: Gute Idee! Wir {3} uns um 18 Uhr.',
          bank: ['Zeit', 'kochen', 'treffen', 'passt'],
          loesungen: { 1: 'Zeit', 2: 'kochen', 3: 'treffen' },
        },
        {
          typ: 'luecke',
          text: 'Samstag {1} mir gut. Der {2} ist der Bahnhof.',
          bank: ['passt', 'Treffpunkt', 'Vorschlag'],
          loesungen: { 1: 'passt', 2: 'Treffpunkt' },
        },
        { typ: 'satzbau', woerter: ['zusammen', 'Wollen', 'wir', 'kochen'], loesung: 'Wollen wir zusammen kochen?' },
        { typ: 'satzbau', woerter: ['kann', 'ich', 'Leider', 'am', 'Freitag', 'nicht'], loesung: 'Leider kann ich am Freitag nicht.' },
        {
          typ: 'zuordnen',
          links: ['Vorschlag', 'Zustimmung', 'Ablehnung', 'Gegenvorschlag'],
          rechts: ['Wollen wir ins Kino gehen?', 'Ja, das passt mir gut.', 'Leider kann ich nicht.', 'Lieber am Sonntag.'],
          loesung: {
            'Vorschlag': 'Wollen wir ins Kino gehen?',
            'Zustimmung': 'Ja, das passt mir gut.',
            'Ablehnung': 'Leider kann ich nicht.',
            'Gegenvorschlag': 'Lieber am Sonntag.',
          },
        },
        {
          typ: 'korrektur',
          optionen: ['Wollen wir am Samstag gehen ins Kino?', 'Wollen wir am Samstag ins Kino gehen?'],
          loesung: 1,
          warum: 'Nach dem Modalverb geht der **Infinitiv ans Ende**. ~~(No copies el orden del español: «ir al cine» va al final de la frase.)~~',
        },
        {
          typ: 'korrektur',
          optionen: ['Leider kann ich nicht. Lieber am Sonntag.', 'Nein, ich will nicht.'],
          loesung: 0,
          warum: 'In der Prüfung lehnst du **freundlich** ab: „leider“ + Gegenvorschlag. ~~(Un «no» seco resta puntos en el Teil 3.)~~',
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies die E-Mail. Richtig oder falsch? Wähle bei den Fragen die richtige Antwort. ~~(Lee el correo. ¿Verdadero o falso? En las preguntas, elige la respuesta correcta.)~~',
      textTitel: 'E-Mail von Jonas',
      text: 'Hallo Marta, hast du am Samstag Zeit? Ich habe einen Vorschlag: Wollen wir zusammen ins Kino gehen? Der Film beginnt um 20 Uhr. Das Kino ist nicht teuer. Oder wollen wir lieber bei mir kochen? Meine Küche ist groß. Leider kann ich am Sonntag nicht, ich arbeite. Der Treffpunkt ist die Bushaltestelle am Markt. Passt dir das? Schreib mir bitte heute.\nViele Grüße\nJonas',
      items: [
        { typ: 'rf', aussage: 'Jonas hat am Sonntag Zeit.', loesung: false },
        {
          typ: 'mc',
          frage: 'Was möchte Jonas am Samstag machen?',
          optionen: ['ins Kino gehen oder kochen', 'nur arbeiten', 'an den See fahren'],
          loesung: 0,
        },
        { typ: 'rf', aussage: 'Der Film beginnt um 20 Uhr.', loesung: true },
        {
          typ: 'mc',
          frage: 'Wo ist der Treffpunkt?',
          optionen: ['am Kino', 'an der Bushaltestelle am Markt', 'bei Marta'],
          loesung: 1,
        },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'formular',
      titel: 'Schreiben',
      anweisung: 'Lies die Nachricht. Ergänze den Plan. ~~(Lee el mensaje. Completa el plan.)~~',
      quelle: 'Hallo Team! Am Sonntag fahren wir zusammen an den See. Wir treffen uns um 10 Uhr am Bahnhof. Jeder bringt etwas zu essen mit. Bei Fragen: Ruft Emre an, seine Nummer ist 0157 8833221.',
      felder: [
        { id: 'aktivitaet', label: 'Aktivität', erwartet: ['an den See fahren', 'See', 'an den See', 'Ausflug an den See'] },
        { id: 'tag', label: 'Tag', erwartet: ['Sonntag', 'am Sonntag'] },
        { id: 'uhrzeit', label: 'Uhrzeit', erwartet: ['10 Uhr', 'um 10 Uhr', '10'] },
        { id: 'treffpunkt', label: 'Treffpunkt', erwartet: ['Bahnhof', 'am Bahnhof', 'der Bahnhof'] },
        { id: 'telefon', label: 'Telefonnummer', erwartet: ['0157 8833221', '01578833221'] },
      ],
    },
  ],
}
