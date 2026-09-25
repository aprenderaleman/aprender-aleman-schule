// Übungsheft A2 — Lektion 26: Schreiben Teil 2 — E-Mail & Einladung
export default {
  lektion: 26,
  titel: 'Übungsheft — Schreiben Teil 2: E-Mail & Einladung',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Wähle die richtige Antwort oder Form. ~~(Elige la respuesta o la forma correcta.)~~',
      items: [
        {
          typ: 'mc',
          frage: 'Die E-Mail geht an eine Frau. Welche Anrede ist richtig?',
          optionen: ['Lieber Carla,', 'Liebe Carla,', 'Liebe Carla:'],
          loesung: 1,
        },
        {
          typ: 'mc',
          frage: 'Was steht nach dem Gruß „Viele Grüße“?',
          optionen: ['ein Komma', 'ein Punkt', 'nichts — nur dein Name in der neuen Zeile'],
          loesung: 2,
        },
        {
          typ: 'mc',
          frage: '„Schade, ich kann leider nicht.“ — Was ist das?',
          optionen: ['eine Zusage', 'eine Absage', 'eine Einladung'],
          loesung: 1,
        },
        {
          typ: 'luecke',
          text: 'Ich möchte dich zu meiner {1} einladen. Wir {2} am Samstag meinen {3}.',
          bank: ['Party', 'feiern', 'Geburtstag', 'Einladung'],
          loesungen: { 1: 'Party', 2: 'feiern', 3: 'Geburtstag' },
        },
        {
          typ: 'luecke',
          text: 'Vielen Dank für die {1}! Ich komme sehr {2}. Ich {3} mich!',
          bank: ['Einladung', 'gern', 'freue', 'schade'],
          loesungen: { 1: 'Einladung', 2: 'gern', 3: 'freue' },
        },
        {
          typ: 'satzbau',
          woerter: ['meiner', 'du', 'Party', 'Kommst', 'zu'],
          loesung: 'Kommst du zu meiner Party?',
        },
        {
          typ: 'satzbau',
          woerter: ['ich', 'mitbringen', 'Was', 'soll'],
          loesung: 'Was soll ich mitbringen?',
        },
        {
          typ: 'zuordnen',
          links: ['einladen', 'zusagen', 'absagen', 'bitten'],
          rechts: ['Kommst du zu meiner Party?', 'Ich komme sehr gern!', 'Schade, ich kann leider nicht.', 'Kannst du einen Salat mitbringen?'],
          loesung: {
            'einladen': 'Kommst du zu meiner Party?',
            'zusagen': 'Ich komme sehr gern!',
            'absagen': 'Schade, ich kann leider nicht.',
            'bitten': 'Kannst du einen Salat mitbringen?',
          },
        },
        {
          typ: 'korrektur',
          optionen: ['Lieber Tom, ich möchte dich einladen.', 'Liebe Tom, ich möchte dich einladen.'],
          loesung: 0,
          warum: 'Tom es un hombre → **Lieber** Tom. ~~(Liebe + mujer, Lieber + hombre — la -r marca el masculino)~~',
        },
        {
          typ: 'korrektur',
          optionen: ['Ich freue auf die Party.', 'Ich freue mich auf die Party.'],
          loesung: 1,
          warum: '*sich freuen* es reflexivo: **Ich freue mich**. ~~(«me alegro» — no olvides el mich)~~',
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies den Text. Löse die 4 Aufgaben. ~~(Lee el texto. Resuelve las 4 tareas.)~~',
      textTitel: 'E-Mail von Ricardo',
      text: 'Liebe Sandra, am Freitag habe ich Geburtstag und ich möchte mit meinen Freunden feiern. Die Party ist am Samstag um 19 Uhr bei mir zu Hause, in der Gartenstraße 5. Ich koche Spaghetti und mache einen Salat. Kannst du bitte einen Nachtisch mitbringen? Meine Schwester bringt die Getränke mit. Bitte antworte bis Donnerstag — ich muss noch einkaufen! Ich freue mich sehr.\nViele Grüße\nRicardo',
      items: [
        { typ: 'rf', aussage: 'Ricardo hat am Samstag Geburtstag.', loesung: false },
        { typ: 'rf', aussage: 'Die Party ist bei Ricardo zu Hause.', loesung: true },
        {
          typ: 'mc',
          frage: 'Was soll Sandra mitbringen?',
          optionen: ['die Getränke', 'einen Salat', 'einen Nachtisch'],
          loesung: 2,
        },
        {
          typ: 'mc',
          frage: 'Bis wann soll Sandra antworten?',
          optionen: ['bis Donnerstag', 'bis Freitag', 'bis Samstag'],
          loesung: 0,
        },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'formular',
      titel: 'Schreiben',
      anweisung: 'Lies die Antwort-E-Mail. Ergänze das Formular. ~~(Lee el correo de respuesta. Completa el formulario.)~~',
      quelle: 'Lieber Ricardo, vielen Dank für deine Einladung! Ich komme sehr gern zu deiner Party. Ich bringe einen Schokoladenkuchen mit. Meine Freundin Paula kommt auch, okay? Wir sind um 19.30 Uhr da. Ich freue mich!\nViele Grüße\nSandra',
      felder: [
        { id: 'von', label: 'Die E-Mail ist von', erwartet: ['Sandra'] },
        { id: 'antwort', label: 'Zusage oder Absage?', erwartet: ['Zusage'] },
        { id: 'mitbringen', label: 'Sandra bringt mit:', erwartet: ['einen Schokoladenkuchen', 'Schokoladenkuchen', 'einen Kuchen', 'Kuchen'] },
        { id: 'person', label: 'Wer kommt auch?', erwartet: ['Paula', 'ihre Freundin Paula', 'die Freundin Paula', 'meine Freundin Paula'] },
        { id: 'uhrzeit', label: 'Sie sind da um', erwartet: ['19.30 Uhr', '19.30', '19:30', '19:30 Uhr', 'halb acht'] },
      ],
    },
  ],
}
