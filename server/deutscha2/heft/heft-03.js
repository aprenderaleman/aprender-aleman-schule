// Übungsheft A2 — Lektion 03: Diagnose A2 — Standortbestimmung
// Los tres Teile funcionan como los «drei Mini-Tests» de la diagnosis
// (solo material A1 + vocabulario de la lección — el A2 nuevo llega en Block 1).
export default {
  lektion: 3,
  titel: 'Übungsheft — Diagnose & Lernen',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Mini-Test 1: Wähle die richtige Form — ohne Hilfe. ~~(Mini-test 1: elige la forma correcta, sin ayuda.)~~',
      items: [
        { typ: 'mc', frage: 'Zahlen und Farben kann ich ___ . Das ist leicht für mich.', optionen: ['schon', 'noch nicht', 'kein'], loesung: 0 },
        { typ: 'mc', frage: 'Ich mache den Test und kontrolliere dann die ___ .', optionen: ['Tastatur', 'Lösung', 'Pause'], loesung: 1 },
        {
          typ: 'luecke',
          text: 'Ich {1} jeden Tag Deutsch. Lektion 4 verstehe ich nicht gut — ich {2} sie am Wochenende noch einmal.',
          bank: ['übe', 'wiederhole', 'bestehe'],
          loesungen: { 1: 'übe', 2: 'wiederhole' },
        },
        {
          typ: 'luecke',
          text: 'Marco {1} aus Italien. Er {2} in Zürich und {3} zwei Kinder.',
          bank: ['kommt', 'wohnt', 'hat', 'heißt'],
          loesungen: { 1: 'kommt', 2: 'wohnt', 3: 'hat' },
        },
        { typ: 'satzbau', woerter: ['übst', 'Wie', 'Deutsch', 'oft', 'du'], loesung: 'Wie oft übst du Deutsch?' },
        { typ: 'satzbau', woerter: ['Fehler', 'hast', 'Wie', 'du', 'viele'], loesung: 'Wie viele Fehler hast du?' },
        {
          typ: 'zuordnen',
          links: ['schon', 'noch nicht', 'der Fehler', 'die Lösung'],
          rechts: ['ya', 'todavía no', 'el error', 'la solución'],
          loesung: {
            'schon': 'ya',
            'noch nicht': 'todavía no',
            'der Fehler': 'el error',
            'die Lösung': 'la solución',
          },
        },
        {
          typ: 'korrektur',
          optionen: ['Ich übe jeden Tag Deutsch.', 'Ich praktiziere jeden Tag Deutsch.'],
          loesung: 0,
          warum: '«Practicar alemán» = Deutsch **üben**. ~~(*praktizieren* se usa para médicos y abogados, no para idiomas.)~~',
        },
        {
          typ: 'korrektur',
          optionen: ['Jeden Tag ich übe Deutsch.', 'Jeden Tag übe ich Deutsch.'],
          loesung: 1,
          warum: 'El verbo va en **Position 2**: Jeden Tag **übe** ich … ~~(Si la frase no empieza con el sujeto, el sujeto salta detrás del verbo.)~~',
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Mini-Test 2: Lies den Zettel. Richtig oder falsch? ~~(Mini-test 2: lee la nota. ¿Verdadero o falso?)~~',
      textTitel: 'Zettel von Lucía',
      text: 'Hallo Miguel! Der Diagnose-Test ist fertig — ich habe vier Fehler, aber das ist kein Problem. Wortschatz kann ich schon gut, die Vergangenheit kann ich noch nicht. Mein Plan: Ich übe jeden Tag dreißig Minuten und wiederhole am Sonntag Lektion 4 und 5. Der Kurs hat 40 Lektionen und fünf Blöcke — Block 1 ist Grammatik. Üben wir zusammen? Ich habe am Samstag Zeit. Schreib mir! Lucía',
      items: [
        { typ: 'rf', aussage: 'Lucía hat vier Fehler.', loesung: true },
        { typ: 'rf', aussage: 'Wortschatz kann Lucía noch nicht.', loesung: false },
        { typ: 'rf', aussage: 'Lucía übt jeden Tag dreißig Minuten.', loesung: true },
        { typ: 'mc', frage: 'Wann hat Lucía Zeit?', optionen: ['am Samstag', 'am Sonntag', 'am Montag'], loesung: 0 },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'text',
      titel: 'Schreiben',
      anweisung: 'Mini-Test 3: Schreib 25-35 Wörter. ~~(Mini-test 3: escribe 25-35 palabras.)~~',
      aufgabe: 'Wie lernst du Deutsch? Schreib einen kurzen Text über dein Lernen.',
      punkte: [
        'Was kannst du schon gut?',
        'Was kannst du noch nicht?',
        'Wie oft übst du?',
      ],
      minWoerter: 25,
      beispielLoesung: 'Ich lerne schon ein Jahr Deutsch. Wortschatz kann ich schon gut, aber die Vergangenheit kann ich noch nicht. Ich übe jeden Tag zwanzig Minuten am Handy und wiederhole am Wochenende die Lektionen.',
    },
  ],
}
