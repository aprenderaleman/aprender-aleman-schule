// Übungsheft B1 — Lektion 06: Perfekt — haben oder sein
export default {
  lektion: 6,
  titel: 'Übungsheft — Perfekt: haben oder sein',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Wähle die richtige Form, ordne die Wörter und finde den Fehler.',
      items: [
        { typ: 'mc', frage: 'Ich habe am Wochenende meine Tante ___.', optionen: ['gebesucht', 'besucht', 'besuchen'], loesung: 1 },
        { typ: 'mc', frage: 'Wir ___ mit dem Zug nach Hamburg gefahren.', optionen: ['sind', 'haben', 'hatten'], loesung: 0 },
        { typ: 'mc', frage: 'Mein Bruder ___ mich zum Flughafen gefahren.', optionen: ['ist', 'war', 'hat'], loesung: 2 },
        {
          typ: 'luecke',
          text: 'Gestern ist etwas Dummes {1}: Ich habe meinen Schlüssel {2}. Zum Glück hat mein Nachbar ihn {3}.',
          bank: ['passiert', 'verloren', 'gefunden', 'geverloren', 'gepassiert'],
          loesungen: { 1: 'passiert', 2: 'verloren', 3: 'gefunden' },
        },
        {
          typ: 'luecke',
          text: 'Der Techniker hat die Heizung {1}. Danach hat er mir alles genau {2}.',
          bank: ['repariert', 'erklärt', 'gerepariert', 'geerklärt'],
          loesungen: { 1: 'repariert', 2: 'erklärt' },
        },
        {
          typ: 'zuordnen',
          links: ['verstehen', 'bekommen', 'aufhören', 'studieren', 'einladen', 'erzählen'],
          rechts: ['verstanden', 'bekommen', 'aufgehört', 'studiert', 'eingeladen', 'erzählt'],
          loesung: {
            'verstehen': 'verstanden',
            'bekommen': 'bekommen',
            'aufhören': 'aufgehört',
            'studieren': 'studiert',
            'einladen': 'eingeladen',
            'erzählen': 'erzählt',
          },
        },
        { typ: 'satzbau', woerter: ['gefahren', 'Küste', 'sind', 'an', 'Sonntag', 'Wir', 'die', 'am'], loesung: 'Wir sind am Sonntag an die Küste gefahren.', alt: ['Wir sind an die Küste am Sonntag gefahren.'] },
        { typ: 'satzbau', woerter: ['verstanden', 'die', 'du', 'Frage', 'Hast'], loesung: 'Hast du die Frage verstanden?' },
        {
          typ: 'korrektur',
          optionen: ['Ich habe nach Madrid gefahren.', 'Ich bin nach Madrid gefahren.'],
          loesung: 1,
          warum: 'Sin complemento directo, *fahren* expresa movimiento → **sein**: *ich bin gefahren*. En español todo va con «haber»; en alemán, no.',
        },
        {
          typ: 'korrektur',
          optionen: ['Er hat mir die Regeln erklärt.', 'Er hat mir die Regeln geerklärt.'],
          loesung: 0,
          warum: 'Los verbos con **be- / er- / ver-** forman el Partizip II **sin ge-**: *erklärt, besucht, verstanden*.',
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies die E-Mail. Sind die Aussagen richtig oder falsch? Wähle dann die richtige Antwort.',
      textTitel: 'Beschwerde: Waschmaschine',
      text: 'Sehr geehrte Damen und Herren, am 3. März habe ich bei Ihnen eine Waschmaschine bestellt und sofort bezahlt. Die Maschine ist erst nach drei Wochen gekommen, obwohl Sie eine Lieferung in fünf Tagen versprochen haben. Leider hat sie schon nach zwei Tagen nicht mehr funktioniert. Ihr Techniker war am Montag bei mir und hat sie repariert. Trotzdem ist gestern wieder Wasser aus der Maschine gelaufen. Ich habe Ihnen deshalb schon zweimal geschrieben, aber ich habe keine Antwort bekommen. Ich möchte jetzt keine Reparatur mehr. Bitte liefern Sie mir eine neue Maschine oder geben Sie mir mein Geld zurück. Mit freundlichen Grüßen, Farid Haddad',
      items: [
        { typ: 'rf', aussage: 'Herr Haddad hat die Waschmaschine sofort bezahlt.', loesung: true },
        { typ: 'rf', aussage: 'Die Maschine ist nach fünf Tagen gekommen.', loesung: false },
        {
          typ: 'mc',
          frage: 'Was ist gestern passiert?',
          optionen: ['Der Techniker ist gekommen.', 'Wasser ist aus der Maschine gelaufen.', 'Herr Haddad hat eine Antwort bekommen.'],
          loesung: 1,
        },
        {
          typ: 'mc',
          frage: 'Was möchte Herr Haddad jetzt?',
          optionen: ['eine zweite Reparatur', 'einen neuen Termin mit dem Techniker', 'eine neue Maschine oder sein Geld zurück'],
          loesung: 2,
        },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'formular',
      titel: 'Schreiben',
      anweisung: 'Lies die Nachricht. Füll dann die Verlustmeldung für das Fundbüro aus.',
      quelle: 'Guten Tag, ich heiße Ines Moreno. Ich habe gestern, am 12. Mai, meinen Rucksack verloren. Ich bin mit der Straßenbahn Linie 4 vom Hauptbahnhof nach Hause gefahren. Im Rucksack waren mein Laptop und ein Wörterbuch. Bitte rufen Sie mich an, wenn Sie ihn gefunden haben: 0160 7788990.',
      felder: [
        { id: 'name', label: 'Name', erwartet: ['Ines Moreno', 'Moreno'] },
        { id: 'datum', label: 'Wann verloren? (Datum)', erwartet: ['12. Mai', 'am 12. Mai', '12.05.', '12.5.'] },
        { id: 'gegenstand', label: 'Was verloren?', erwartet: ['Rucksack', 'meinen Rucksack', 'einen Rucksack'] },
        { id: 'ort', label: 'Wo verloren?', erwartet: ['Straßenbahn Linie 4', 'in der Straßenbahn Linie 4', 'Linie 4', 'in der Straßenbahn', 'Straßenbahn'] },
        { id: 'telefon', label: 'Telefon', erwartet: ['0160 7788990', '01607788990'] },
      ],
    },
  ],
}
