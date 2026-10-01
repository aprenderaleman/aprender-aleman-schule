// Übungsheft A2 — Lektion 27: Modul Sprechen — Überblick & Bewertung
export default {
  lektion: 27,
  titel: 'Übungsheft — Modul Sprechen: Überblick',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Wähle die richtige Antwort oder Form. ~~(Elige la respuesta o la forma correcta.)~~',
      items: [
        {
          typ: 'mc',
          frage: 'Wie lange dauert die mündliche Prüfung?',
          optionen: ['ca. 15 Minuten', 'ca. 30 Minuten', 'ca. 60 Minuten'],
          loesung: 0,
        },
        {
          typ: 'mc',
          frage: 'Welches Wort hat einen langen Vokal?',
          optionen: ['Stadt', 'Staat', 'bitte'],
          loesung: 1,
        },
        {
          typ: 'mc',
          frage: 'Wo liegt der Akzent bei „Arbeit“?',
          optionen: ['AR-beit', 'ar-BEIT'],
          loesung: 0,
        },
        {
          typ: 'luecke',
          text: 'Ich verstehe die Frage nicht. Ich sage: „Wie {1}? Können Sie das bitte {2}?“',
          bank: ['bitte', 'wiederholen', 'planen'],
          loesungen: { 1: 'bitte', 2: 'wiederholen' },
        },
        {
          typ: 'luecke',
          text: 'In Teil 2 {1} ich von meiner Familie. In Teil 3 {2} wir zusammen etwas.',
          bank: ['erzähle', 'planen', 'wiederhole'],
          loesungen: { 1: 'erzähle', 2: 'planen' },
        },
        {
          typ: 'satzbau',
          woerter: ['sprechen', 'Können', 'Sie', 'langsamer'],
          loesung: 'Können Sie langsamer sprechen?',
        },
        {
          typ: 'satzbau',
          woerter: ['deiner', 'Frage', 'stellst', 'Welche', 'du', 'Partnerin'],
          loesung: 'Welche Frage stellst du deiner Partnerin?',
        },
        {
          typ: 'zuordnen',
          links: ['Teil 1', 'Teil 2', 'Teil 3', 'Notfall-Satz'],
          rechts: ['Fragen stellen und beantworten', 'von sich erzählen', 'zusammen etwas planen', '„Wie bitte?“'],
          loesung: {
            'Teil 1': 'Fragen stellen und beantworten',
            'Teil 2': 'von sich erzählen',
            'Teil 3': 'zusammen etwas planen',
            'Notfall-Satz': '„Wie bitte?“',
          },
        },
        {
          typ: 'korrektur',
          optionen: ['Ich spreche mit meiner Partnerin.', 'Ich spreche mit meine Partnerin.'],
          loesung: 0,
          warum: 'Tras **mit** viene siempre Dativ: *mit mein**er** Partnerin*. ~~(mit + dativo — sin excepciones)~~',
        },
        {
          typ: 'korrektur',
          optionen: ['Sie können das bitte wiederholen?', 'Können Sie das bitte wiederholen?'],
          loesung: 1,
          warum: 'La pregunta de sí/no empieza con el **verbo**: *Können Sie …?* ~~(en español solo cambia la entonación; en alemán el verbo salta al principio. Hablando se oye a veces «Sie können …?», pero en el examen usa la forma estándar.)~~',
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies den Text. Löse die 4 Aufgaben. ~~(Lee el texto. Resuelve las 4 tareas.)~~',
      textTitel: 'Anzeige: Sprechtraining A2',
      text: 'Machst du bald die Prüfung „das Zertifikat A2“? In unserem Kurs trainierst du das Sprechen: Fragen stellen, von dir erzählen und zusammen etwas planen. Wir üben auch die Aussprache und die Notfall-Sätze für die Prüfung. Der Kurs ist jeden Mittwoch von 18 bis 19.30 Uhr in der Sprachschule am Markt, Raum 3. Er kostet 40 Euro im Monat. Die erste Stunde ist gratis! Anmeldung im Büro, Raum 1.',
      items: [
        { typ: 'rf', aussage: 'Im Kurs trainierst du das Schreiben.', loesung: false },
        { typ: 'rf', aussage: 'Der Kurs ist einmal pro Woche.', loesung: true },
        {
          typ: 'mc',
          frage: 'Was kostet die erste Stunde?',
          optionen: ['40 Euro', 'nichts', '18 Euro'],
          loesung: 1,
        },
        {
          typ: 'mc',
          frage: 'Wann beginnt der Kurs am Mittwoch?',
          optionen: ['um 18 Uhr', 'um 19.30 Uhr', 'um 15 Uhr'],
          loesung: 0,
        },
      ],
    },
    {
      typ: 'hoeren',
      titel: 'Hören',
      anweisung: 'Hör die Durchsage im Prüfungszentrum. Löse die 3 Aufgaben. ~~(Escucha el aviso en el centro de exámenes. Resuelve las 3 tareas.)~~',
      audio: {
        transcript: 'Guten Morgen und herzlich willkommen im Prüfungszentrum! Die mündliche Prüfung beginnt heute nicht um neun Uhr, sondern um halb zehn. Sie ist in Raum fünf. Sie sprechen mit einem Partner oder einer Partnerin. Die Prüfung dauert fünfzehn Minuten. Bitte warten Sie nicht vor dem Raum, sondern im Café im Erdgeschoss. Machen Sie dort bitte Ihr Handy aus. Sie brauchen auch Ihren Pass. Haben Sie noch eine Frage? Dann kommen Sie bitte ins Büro in Raum eins. Viel Erfolg!',
      },
      items: [
        {
          typ: 'mc',
          frage: 'Wann beginnt die mündliche Prüfung?',
          optionen: ['um neun Uhr', 'um halb zehn', 'um zehn Uhr'],
          loesung: 1,
        },
        { typ: 'rf', aussage: 'Die Prüfung ist in Raum fünfzehn.', loesung: false },
        {
          typ: 'mc',
          frage: 'Wo warten die Teilnehmer?',
          optionen: ['vor dem Raum', 'im Büro', 'im Café'],
          loesung: 2,
        },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'text',
      titel: 'Schreiben',
      anweisung: 'Schreib einen kurzen Text über dich (ca. 25-35 Wörter). ~~(Escribe un texto breve sobre ti, de unas 25-35 palabras.)~~',
      aufgabe: 'Dein Deutschkurs macht eine Webseite. Jeder Schüler schreibt einen kurzen Text über sich. Schreib deinen Text.',
      punkte: [
        'Wie heißt du und woher kommst du? ~~(nombre y origen)~~',
        'Was machst du? ~~(trabajo o estudios)~~',
        'Warum lernst du Deutsch? ~~(tu motivo para aprender alemán)~~',
      ],
      minWoerter: 25,
      beispielLoesung: 'Hallo! Ich heiße Valeria und ich komme aus Kolumbien. Ich wohne jetzt in Frankfurt und arbeite in einem Café. Ich lerne Deutsch, denn ich möchte hier studieren. Im Juni mache ich die Prüfung.',
    },
    {
      typ: 'sprechen',
      titel: 'Sprechen',
      anweisung: 'Erzähl von deinem Deutschlernen. Sprich 60 Sekunden. ~~(Cuenta cómo aprendes alemán. Habla 60 segundos.)~~',
      aufgabe: 'Das Thema ist „Deutsch lernen“. Erzähl von dir. Sprich langsam und deutlich.',
      punkte: [
        'Wo und wann lernst du Deutsch?',
        'Was ist für dich leicht? Was ist schwer?',
        'Du verstehst eine Frage nicht. Was sagst du dann?',
      ],
      redemittel: ['Ich lerne seit … Deutsch.', '… ist für mich leicht.', '… ist für mich schwer.', 'Dann sage ich: …'],
      maxSekunden: 60,
      beispielLoesung: 'Ich lerne seit einem Jahr Deutsch. Ich habe jeden Dienstag und Donnerstag Kurs, immer am Abend. Zu Hause lerne ich auch mit dem Handy. Lesen ist für mich leicht. Aber das Sprechen ist schwer, und die langen Wörter auch. Manchmal verstehe ich eine Frage nicht. Dann sage ich: Wie bitte? Können Sie das bitte wiederholen? Das hilft immer.',
    },
  ],
}
