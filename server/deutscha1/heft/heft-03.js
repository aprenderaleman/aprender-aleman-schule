// Übungsheft A1 — Lektion 03: Diagnose A1 — Standortbestimmung
export default {
  lektion: 3,
  titel: 'Übungsheft — Diagnose & Lernplan',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Wissen',
      anweisung: 'Was weißt du über den Kurs? Wähle die richtige Antwort. ~~(¿Qué sabes del curso? Elige la respuesta correcta.)~~',
      items: [
        {
          typ: 'mc',
          frage: 'Wie viele Lektionen hat der Kurs?',
          optionen: ['37', '20', '50'],
          loesung: 0,
        },
        {
          typ: 'mc',
          frage: 'Wie viele Blöcke hat der Kurs?',
          optionen: ['5', '3', '10'],
          loesung: 0,
        },
        {
          typ: 'mc',
          frage: 'Wie lernst du am besten?',
          optionen: ['jeden Tag ein bisschen', '3 Stunden am Sonntag'],
          loesung: 0,
        },
        { typ: 'rf', aussage: 'Der Test in Lektion 3 ist ein Examen mit Note.', loesung: false },
        { typ: 'rf', aussage: 'Wiederholen ist gut.', loesung: true },
        { typ: 'rf', aussage: 'Du brauchst schon viel Deutsch für diesen Kurs.', loesung: false },
        {
          typ: 'zuordnen',
          links: ['lernen', 'üben', 'wiederholen', 'verstehen'],
          rechts: ['aprender', 'practicar', 'repasar', 'entender'],
          loesung: {
            'lernen': 'aprender',
            'üben': 'practicar',
            'wiederholen': 'repasar',
            'verstehen': 'entender',
          },
        },
        {
          typ: 'zuordnen',
          links: ['Block 1', 'Block 2', 'Block 3', 'Block 4'],
          rechts: ['Grammatik & Struktur', 'Prüfungsstrategie', 'Themenfelder & Wortschatz', 'Prüfungssimulation'],
          loesung: {
            'Block 1': 'Grammatik & Struktur',
            'Block 2': 'Prüfungsstrategie',
            'Block 3': 'Themenfelder & Wortschatz',
            'Block 4': 'Prüfungssimulation',
          },
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies den Text. Richtig oder falsch? ~~(Lee el texto. ¿Verdadero o falso?)~~',
      textTitel: 'E-Mail von Carlos',
      text: 'Hallo Ana! Ich lerne jetzt Deutsch. Der Kurs hat 37 Lektionen und 5 Blöcke. Ich mache jeden Tag eine Lektion — 20 Minuten, das ist mein Plan. Ich verstehe noch nicht alles, aber das ist okay. Am Sonntag wiederhole ich. Heute mache ich Lektion 3, einen kleinen Test. Und du? Lernst du auch Deutsch? Viele Grüße, Carlos',
      items: [
        { typ: 'rf', aussage: 'Carlos lernt jeden Tag 20 Minuten.', loesung: true },
        { typ: 'rf', aussage: 'Carlos versteht schon alles.', loesung: false },
        { typ: 'rf', aussage: 'Am Sonntag wiederholt Carlos.', loesung: true },
        {
          typ: 'mc',
          frage: 'Was macht Carlos heute?',
          optionen: ['Lektion 3 — einen kleinen Test', 'Lektion 5', 'die Prüfung A1'],
          loesung: 0,
        },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'text',
      titel: 'Schreiben',
      anweisung: 'Schreib 3 Sätze. ~~(Escribe 3 frases.)~~',
      aufgabe: 'Dein Lernplan: Wann lernst du? Wie viele Minuten? Wann wiederholst du? ~~(Tu plan de estudio: ¿cuándo estudias? ¿cuántos minutos? ¿cuándo repasas?)~~',
      punkte: [
        'Wann lernst du? (jeden Tag …)',
        'Wie viele Minuten? (20 Minuten …)',
        'Wann wiederholst du? (am Sonntag …)',
      ],
      minWoerter: 12,
      beispielLoesung: 'Ich lerne jeden Tag ein bisschen — 20 Minuten. Heute mache ich Lektion 3. Am Sonntag wiederhole ich alles.',
    },
  ],
}
