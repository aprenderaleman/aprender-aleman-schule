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
      typ: 'hoeren',
      titel: 'Hören',
      anweisung: 'Hör das Gespräch — ohne Hilfe. Was ist richtig? ~~(Escucha la conversación, sin ayuda. ¿Qué es correcto?)~~',
      audio: {
        transcript: 'Lehrerin: Guten Morgen, Pablo! Wie ist dein Test?\nPablo: Nicht so gut. Ich habe sechs Fehler.\nLehrerin: Sechs Fehler sind kein Problem. Was kannst du schon gut?\nPablo: Lesen kann ich schon gut. Aber Hören kann ich noch nicht. Die Leute sprechen zu schnell.\nLehrerin: Hörst du zu Hause Deutsch?\nPablo: Ja, aber nicht jeden Tag, nur am Wochenende.\nLehrerin: Dann hör bitte jeden Tag zehn Minuten Radio. Und wiederhole am Freitag Lektion zwei.\nPablo: Gut, das mache ich. Danke!',
      },
      items: [
        { typ: 'mc', frage: 'Was kann Pablo noch nicht gut?', optionen: ['Hören', 'Lesen', 'Schreiben'], loesung: 0 },
        { typ: 'rf', aussage: 'Pablo hört jeden Tag Deutsch.', loesung: false },
        { typ: 'rf', aussage: 'Pablo wiederholt am Freitag Lektion zwei.', loesung: true },
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
    {
      typ: 'sprechen',
      titel: 'Sprechen',
      anweisung: 'Erzähl von dir — ohne Hilfe. Sprich 45 Sekunden. ~~(Habla de ti, sin ayuda. Habla 45 segundos.)~~',
      aufgabe: 'Wer bist du und wie ist dein Alltag? Erzähl.',
      punkte: [
        'deine Familie',
        'dein Tag: Wann und wo lernst du Deutsch?',
        'dein Wochenende: Was machst du gern?',
      ],
      redemittel: ['Meine Familie ist …', 'Deutsch lerne ich am … / im …', 'Am Wochenende … ich gern …'],
      maxSekunden: 45,
      beispielLoesung: 'Ich bin Carlos. Meine Familie ist nicht groß: Ich habe eine Frau und einen Sohn. Er ist vier Jahre alt. Ich arbeite von Montag bis Freitag. Deutsch lerne ich am Abend, zu Hause in der Küche. Ich übe zwanzig Minuten am Handy. Am Wochenende gehe ich gern mit meinem Sohn in den Park. Am Sonntag koche ich gern für meine Familie.',
    },
  ],
}
