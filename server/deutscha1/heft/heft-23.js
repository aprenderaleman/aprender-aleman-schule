// Übungsheft A1 — Lektion 23: Modul Schreiben — Überblick
// Bloque 2 (Prüfungsstrategie): Teil 1 = Training (Formular-Wörter + Fakten zum Modul).
export default {
  lektion: 23,
  titel: 'Übungsheft — Modul Schreiben: Überblick',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Training',
      anweisung: 'Trainiere die Formular-Wörter und das Modul. Lies und antworte. ~~(Entrena las palabras del formulario y el módulo. Lee y responde.)~~',
      items: [
        {
          typ: 'zuordnen',
          links: ['Vorname', 'Familienname', 'Wohnort', 'PLZ', 'Land'],
          rechts: ['Ana', 'López', 'Sevilla', '41001', 'Spanien'],
          loesung: {
            'Vorname': 'Ana',
            'Familienname': 'López',
            'Wohnort': 'Sevilla',
            'PLZ': '41001',
            'Land': 'Spanien',
          },
        },
        {
          typ: 'mc',
          frage: 'Feld „PLZ“ — Was schreibst du hier?',
          optionen: ['10115', 'Berlin', 'Ana'],
          loesung: 0,
        },
        {
          typ: 'mc',
          frage: 'Feld „Unterschrift“ — Was machst du hier?',
          optionen: ['Ich schreibe meinen Namen mit der Hand.', 'Ich schreibe meine Telefonnummer.'],
          loesung: 0,
        },
        {
          typ: 'mc',
          frage: 'Marta Ruiz — Was ist der Familienname?',
          optionen: ['Ruiz', 'Marta'],
          loesung: 0,
        },
        { typ: 'rf', aussage: 'Das Schreiben hat 2 Teile: Formular und kurzer Text.', loesung: true },
        { typ: 'rf', aussage: 'Du hast ca. 60 Minuten Zeit.', loesung: false },
        { typ: 'rf', aussage: 'In Teil 2 schreibst du ca. 30 Wörter.', loesung: true },
        { typ: 'rf', aussage: 'Ein Formular ohne Daten ist okay.', loesung: false },
        {
          typ: 'luecke',
          text: 'Bitte das Formular komplett {1}. Am Ende kommt deine {2}.',
          bank: ['ausfüllen', 'Unterschrift', 'ankreuzen'],
          loesungen: { 1: 'ausfüllen', 2: 'Unterschrift' },
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies den Text. Richtig oder falsch? ~~(Lee el texto. ¿Verdadero o falso?)~~',
      textTitel: 'E-Mail von Marco',
      text: 'Hallo Julia, ich mache jetzt einen Deutschkurs! Heute fülle ich das Formular für den Kurs aus. Es ist auf Deutsch: Vorname, Familienname, Wohnort, PLZ … Ein Wort verstehe ich nicht: „Unterschrift“. Meine Lehrerin sagt: Das ist mein Name — ich schreibe ihn mit der Hand. Jetzt ist das Formular komplett. Bis bald! Marco',
      items: [
        { typ: 'rf', aussage: 'Marco füllt ein Formular aus.', loesung: true },
        { typ: 'rf', aussage: 'Das Formular ist auf Spanisch.', loesung: false },
        {
          typ: 'mc',
          frage: 'Marco versteht ein Wort nicht. Das Wort ist …',
          optionen: ['Unterschrift', 'Vorname', 'Wohnort'],
          loesung: 0,
        },
        {
          typ: 'mc',
          frage: 'Was ist die Unterschrift?',
          optionen: ['der Name, mit der Hand geschrieben', 'die Telefonnummer', 'die PLZ'],
          loesung: 0,
        },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'text',
      titel: 'Schreiben',
      anweisung: 'Schreib 3 Sätze. ~~(Escribe 3 frases.)~~',
      aufgabe: 'Du möchtest einen Deutschkurs machen. Schreib an die Sprachschule.',
      punkte: [
        'Wie heißt du? (Vorname und Familienname)',
        'Woher kommst du? Wo wohnst du?',
        'Was möchtest du? (einen Kurs machen)',
      ],
      minWoerter: 15,
      beispielLoesung: 'Guten Tag! Ich heiße Paula Ríos und ich komme aus Chile. Ich wohne jetzt in Berlin. Ich möchte einen Deutschkurs am Abend machen.',
    },
  ],
}
