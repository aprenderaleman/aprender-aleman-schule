// Übungsheft A2 — Lektion 24: Modul Schreiben — Überblick & Bewertung
export default {
  lektion: 24,
  titel: 'Übungsheft — Modul Schreiben: Überblick',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Wähle die richtige Antwort oder Form. ~~(Elige la respuesta o la forma correcta.)~~',
      items: [
        {
          typ: 'mc',
          frage: 'Eine Mitteilung beginnt mit …',
          optionen: ['der Anrede', 'dem Gruß', 'deinem Namen'],
          loesung: 0,
        },
        {
          typ: 'mc',
          frage: 'Wie viele Wörter hat die Mitteilung in Teil 1?',
          optionen: ['ca. 100', 'ca. 20-30', 'ca. 50-60'],
          loesung: 1,
        },
        {
          typ: 'mc',
          frage: 'Wo steht das Verb im Aussagesatz? ~~(en la frase enunciativa)~~',
          optionen: ['auf Position 1', 'auf Position 2', 'am Ende'],
          loesung: 1,
        },
        {
          typ: 'luecke',
          text: 'Am Anfang steht die {1}. Am Ende stehen der {2} (z. B. „Viele Grüße“) und dein {3}.',
          bank: ['Anrede', 'Gruß', 'Name', 'Fehler'],
          loesungen: { 1: 'Anrede', 2: 'Gruß', 3: 'Name' },
        },
        {
          typ: 'korrektur',
          optionen: ['Ich fahre mit dem auto zur arbeit.', 'Ich fahre mit dem Auto zur Arbeit.'],
          loesung: 1,
          warum: 'Todos los sustantivos van con **mayúscula**: *das Auto, die Arbeit*. ~~(el error más fácil de evitar)~~',
        },
        {
          typ: 'satzbau',
          woerter: ['du', 'Zeit', 'Wann', 'hast'],
          loesung: 'Wann hast du Zeit?',
        },
        {
          typ: 'satzbau',
          woerter: ['machst', 'Freitag', 'du', 'Was', 'am'],
          loesung: 'Was machst du am Freitag?',
        },
        {
          typ: 'zuordnen',
          links: ['die Anrede', 'der Inhalt', 'der Gruß', 'der Name'],
          rechts: ['Hallo Anna,', 'Ich komme heute später.', 'Viele Grüße', 'Pedro'],
          loesung: {
            'die Anrede': 'Hallo Anna,',
            'der Inhalt': 'Ich komme heute später.',
            'der Gruß': 'Viele Grüße',
            'der Name': 'Pedro',
          },
        },
        {
          typ: 'korrektur',
          optionen: ['Hallo Anna, ich habe eine Frage.', 'Hallo Anna: Ich habe eine Frage.'],
          loesung: 0,
          warum: 'Tras la Anrede va **coma** y se sigue en minúscula. ~~(el «Hola Ana:» con dos puntos es interferencia del español)~~',
        },
        {
          typ: 'korrektur',
          optionen: ['Ich morgen nicht komme.', 'Ich komme morgen nicht.'],
          loesung: 1,
          warum: 'El verbo va en **Position 2**: *Ich **komme** morgen nicht.* ~~(no lo dejes al final como en «yo mañana no vengo»)~~',
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies den Text. Löse die 4 Aufgaben. ~~(Lee el texto. Resuelve las 4 tareas.)~~',
      textTitel: 'Notiz im Hausflur',
      text: 'Liebe Nachbarn, am Donnerstag kommt ein Techniker und repariert den Aufzug. Der Aufzug ist seit Montag kaputt. Am Donnerstag können Sie den Aufzug von 9 bis 16 Uhr nicht benutzen. Bitte nehmen Sie die Treppe. Am Freitag ist wieder alles normal. Haben Sie Fragen? Ich bin bis 18 Uhr zu Hause, Wohnung 12. Sie können mich auch anrufen: 0157 3348892. Vielen Dank und viele Grüße\nSelin Yilmaz',
      items: [
        { typ: 'rf', aussage: 'Der Techniker kommt am Donnerstag.', loesung: true },
        {
          typ: 'mc',
          frage: 'Wann können die Nachbarn den Aufzug am Donnerstag nicht benutzen?',
          optionen: ['von 9 bis 16 Uhr', 'von 9 bis 18 Uhr', 'bis Freitag um 16 Uhr'],
          loesung: 0,
        },
        { typ: 'rf', aussage: 'Frau Yilmaz wohnt in Wohnung 12.', loesung: true },
        { typ: 'rf', aussage: 'Die Nachbarn sollen am Donnerstag den Aufzug nehmen.', loesung: false },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'formular',
      titel: 'Schreiben',
      anweisung: 'Lies die Mitteilung. Ergänze das Formular. ~~(Lee la nota. Completa el formulario.)~~',
      quelle: 'Hallo Jonas, unser Deutschkurs beginnt am Montag nicht um 18 Uhr, sondern um halb sieben. Wir sind auch nicht im Raum 204, sondern im Raum 108, im Erdgeschoss. Bring bitte dein Buch mit! Viele Grüße Elif',
      felder: [
        { id: 'tag', label: 'Tag', erwartet: ['Montag', 'am Montag'] },
        { id: 'uhrzeit', label: 'Der Kurs beginnt um', erwartet: ['halb sieben', '18.30', '18.30 Uhr', '18:30', '18:30 Uhr'] },
        { id: 'raum', label: 'Raum', erwartet: ['108', 'Raum 108'] },
        { id: 'mitbringen', label: 'Jonas bringt mit:', erwartet: ['das Buch', 'Buch', 'sein Buch', 'dein Buch'] },
        { id: 'von', label: 'Die Mitteilung ist von', erwartet: ['Elif'] },
      ],
    },
  ],
}
