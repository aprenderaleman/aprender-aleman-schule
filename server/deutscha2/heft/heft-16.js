// Übungsheft A2 — Lektion 16: Der Imperativ
export default {
  lektion: 16,
  titel: 'Übungsheft — Der Imperativ',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Wähle oder ergänze den Imperativ. ~~(Elige o completa el imperativo.)~~',
      items: [
        { typ: 'mc', frage: '___ bitte langsam, Tim!', optionen: ['Sprichst', 'Sprich', 'Sprechen'], loesung: 1 },
        { typ: 'mc', frage: 'Herr Braun, ___ bitte hier!', optionen: ['warten Sie', 'wartet', 'warte'], loesung: 0 },
        { typ: 'mc', frage: 'Kinder, ___ jetzt eure Hausaufgaben!', optionen: ['mach', 'machen', 'macht'], loesung: 2 },
        {
          typ: 'luecke',
          text: 'Anna, {1} dein Brot und {2} deine Milch!',
          bank: ['iss', 'trink', 'isst', 'trinkst'],
          loesungen: { 1: 'iss', 2: 'trink' },
        },
        {
          typ: 'luecke',
          text: 'Entschuldigung, wo ist der Bahnhof? — {1} Sie geradeaus und {2} Sie dann die erste Straße rechts.',
          bank: ['Gehen', 'nehmen', 'Geh', 'nimm'],
          loesungen: { 1: 'Gehen', 2: 'nehmen' },
        },
        { typ: 'satzbau', woerter: ['Bus', 'zum', 'Nimm', 'Bahnhof', 'den'], loesung: 'Nimm den Bus zum Bahnhof!' },
        { typ: 'satzbau', woerter: ['um', 'Sie', 'Uhr', 'morgen', 'neun', 'Kommen'], loesung: 'Kommen Sie morgen um neun Uhr!' },
        {
          typ: 'zuordnen',
          links: ['nehmen', 'essen', 'lesen', 'sprechen', 'warten'],
          rechts: ['Nimm!', 'Iss!', 'Lies!', 'Sprich!', 'Warte!'],
          loesung: { 'nehmen': 'Nimm!', 'essen': 'Iss!', 'lesen': 'Lies!', 'sprechen': 'Sprich!', 'warten': 'Warte!' },
        },
        {
          typ: 'korrektur',
          optionen: ['Kommst bitte morgen!', 'Komm bitte morgen!'],
          loesung: 1,
          warum: 'En la forma **du** se quitan el pronombre y la terminación **-st**: *du kommst* → **Komm!** ~~(nunca «Kommst!»)~~',
        },
        {
          typ: 'korrektur',
          optionen: ['Nimm den Schirm mit!', 'Nehm den Schirm mit!'],
          loesung: 0,
          warum: 'Los verbos con cambio **e → i** lo mantienen en el imperativo: *du nimmst* → **Nimm!** ~~(no «Nehm!»)~~',
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies den Blog. Richtig oder falsch? Oder: Wähle die richtige Antwort. ~~(Lee el blog. ¿Verdadero o falso? O bien: elige la respuesta correcta.)~~',
      textTitel: 'Blog von Carla: Tipps zum Deutschlernen',
      text: 'Hallo Leute! Ihr lernt Deutsch und habt wenig Zeit? Hier sind meine Tipps. Lest jeden Tag zehn Minuten, zum Beispiel eine kurze Geschichte. Hört deutsche Musik und singt mit! Sprecht im Kurs viel, auch mit Fehlern. Das ist nicht schlimm. Schreibt neue Wörter auf kleine Zettel und klebt sie an den Kühlschrank. Und ganz wichtig: Macht Pausen! Trinkt einen Tee oder geht spazieren. Mein Lehrer sagt immer: „Lernen Sie langsam, aber jeden Tag!“ Viel Spaß! Eure Carla',
      items: [
        { typ: 'rf', aussage: 'Carla gibt Tipps zum Deutschlernen.', loesung: true },
        {
          typ: 'mc',
          frage: 'Wie lange soll man jeden Tag lesen?',
          optionen: ['eine Stunde', 'zehn Minuten', 'zwei Minuten'],
          loesung: 1,
        },
        { typ: 'rf', aussage: 'Im Kurs soll man nur ohne Fehler sprechen.', loesung: false },
        {
          typ: 'mc',
          frage: 'Wohin klebt man die Zettel?',
          optionen: ['an den Kühlschrank', 'an die Tür', 'in das Heft'],
          loesung: 0,
        },
      ],
    },
    {
      typ: 'hoeren',
      titel: 'Hören',
      anweisung: 'Hör die Durchsage am Bahnhof. Was ist richtig? ~~(Escucha el aviso en la estación. ¿Qué es correcto?)~~',
      audio: {
        transcript: 'Achtung, eine Durchsage für die Fahrgäste nach Hamburg. Ihr Zug fährt heute nicht von Gleis vier, sondern von Gleis neun. Gehen Sie bitte jetzt zu Gleis neun. Der Zug hat zwanzig Minuten Verspätung und fährt um vierzehn Uhr fünfunddreißig ab. Steigen Sie bitte nur vorne ein, denn die Türen hinten sind kaputt. Haben Sie Fragen? Dann kommen Sie bitte zur Information in der Halle. Vielen Dank und gute Reise!',
      },
      items: [
        {
          typ: 'mc',
          frage: 'Von welchem Gleis fährt der Zug nach Hamburg?',
          optionen: ['von Gleis 4', 'von Gleis 9', 'von Gleis 14'],
          loesung: 1,
        },
        { typ: 'rf', aussage: 'Der Zug fährt um 14 Uhr 35 ab.', loesung: true },
        { typ: 'rf', aussage: 'Die Fahrgäste sollen hinten einsteigen.', loesung: false },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'formular',
      titel: 'Schreiben',
      anweisung: 'Lies den Text. Ergänze das Formular. ~~(Lee el texto. Completa el formulario.)~~',
      quelle: 'Liebe Frau Özdemir, ich bin vom 3. bis 10. Mai im Urlaub. Gießen Sie bitte meine Blumen, zweimal pro Woche! Nehmen Sie bitte auch meine Post mit. Der Schlüssel liegt bei Familie Weber im 2. Stock. Rufen Sie mich bitte bei Problemen an: 0151 2233445. Vielen Dank! Ihr Karl Brandt',
      felder: [
        { id: 'name', label: 'Name', erwartet: ['Karl Brandt', 'Brandt'] },
        { id: 'urlaub', label: 'Urlaub (von – bis)', erwartet: ['vom 3. bis 10. Mai', '3. bis 10. Mai', '3.–10. Mai', '3.-10. Mai', '3. – 10. Mai'] },
        { id: 'blumen', label: 'Blumen gießen: wie oft?', erwartet: ['zweimal pro Woche', 'zweimal', '2-mal pro Woche', '2 mal pro Woche', '2x pro Woche'] },
        { id: 'schluessel', label: 'Schlüssel bei', erwartet: ['Familie Weber', 'Weber', 'Familie Weber im 2. Stock'] },
        { id: 'telefon', label: 'Telefon', erwartet: ['0151 2233445', '01512233445'] },
      ],
    },
    {
      typ: 'sprechen',
      titel: 'Sprechen',
      anweisung: 'Gib Tipps im Imperativ. Sprich 45 Sekunden. ~~(Da consejos en imperativo. Habla 45 segundos.)~~',
      aufgabe: 'Dein Freund Tim ist krank. Du besuchst ihn. Gib ihm Tipps im Imperativ mit du.',
      punkte: [
        'Was soll Tim essen und trinken?',
        'Was soll er zu Hause machen?',
        'Was soll er nicht machen?',
      ],
      redemittel: ['Trink bitte viel …', 'Iss … / Nimm …', 'Bleib … / Schlaf …', 'Geh bitte nicht …'],
      maxSekunden: 45,
      beispielLoesung: 'Hallo Tim! Du bist krank, das tut mir leid! Trink bitte viel Tee und iss eine warme Suppe. Bleib heute im Bett und schlaf viel. Nimm deine Tabletten und mach das Fenster kurz auf. Geh bitte nicht zur Arbeit und mach keinen Sport! Hast du morgen noch Fieber? Dann geh zum Arzt. Und ruf mich an, ich bringe dir Obst. Gute Besserung!',
    },
  ],
}
