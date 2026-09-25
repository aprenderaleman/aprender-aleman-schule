// Übungsheft A2 — Lektion 18: Modul Lesen — Überblick
export default {
  lektion: 18,
  titel: 'Übungsheft — Modul Lesen: Überblick',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Wähle oder ergänze das richtige Wort. ~~(Elige o completa la palabra correcta.)~~',
      items: [
        { typ: 'mc', frage: 'Lies zuerst die Aufgabe und ___ dann die Lösung an.', optionen: ['kreuze', 'kreuzt', 'kreuzen'], loesung: 0 },
        { typ: 'mc', frage: 'Welche Anzeige ___ zu Frau Berger?', optionen: ['passen', 'passt', 'passe'], loesung: 1 },
        { typ: 'mc', frage: 'Ordne die Anzeigen den Personen ___.', optionen: ['an', 'auf', 'zu'], loesung: 2 },
        {
          typ: 'luecke',
          text: 'Der Satz ist nicht richtig, er ist {1}. Nur eine Antwort ist richtig: Das ist die {2}.',
          bank: ['falsch', 'Lösung', 'Anzeige', 'richtig'],
          loesungen: { 1: 'falsch', 2: 'Lösung' },
        },
        {
          typ: 'luecke',
          text: 'Ich habe die Anzeige {1} und dann die Lösung {2}.',
          bank: ['gelesen', 'angekreuzt', 'ankreuzen', 'lesen'],
          loesungen: { 1: 'gelesen', 2: 'angekreuzt' },
        },
        { typ: 'satzbau', woerter: ['Aufgabe', 'zuerst', 'die', 'Lies'], loesung: 'Lies zuerst die Aufgabe.', alt: ['Lies die Aufgabe zuerst.'] },
        { typ: 'satzbau', woerter: ['leichter', 'die', 'ist', 'Beispiel', 'als', 'Aufgabe', 'Das'], loesung: 'Das Beispiel ist leichter als die Aufgabe.' },
        {
          typ: 'zuordnen',
          links: ['die Anzeige', 'das Schild', 'die Lösung', 'das Beispiel', 'ankreuzen'],
          rechts: ['el anuncio', 'el cartel', 'la solución', 'el ejemplo', 'marcar con una cruz'],
          loesung: { 'die Anzeige': 'el anuncio', 'das Schild': 'el cartel', 'die Lösung': 'la solución', 'das Beispiel': 'el ejemplo', 'ankreuzen': 'marcar con una cruz' },
        },
        {
          typ: 'korrektur',
          optionen: ['Kreuze die Lösung an.', 'Ankreuze die Lösung.'],
          loesung: 0,
          warum: '**ankreuzen** es un verbo separable: el prefijo **an** va al final. ~~(Kreuze … an, no *Ankreuze*.)~~',
        },
        {
          typ: 'korrektur',
          optionen: ['Zuerst ich lese die Aufgabe.', 'Zuerst lese ich die Aufgabe.'],
          loesung: 1,
          warum: 'El **Verb** va siempre en la **posición 2**: *Zuerst lese ich…* ~~(Si la frase empieza con «zuerst», el sujeto va detrás del verbo.)~~',
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies die Anzeigen. Richtig oder falsch? Wähle die richtige Antwort. ~~(Lee los anuncios. ¿Verdadero o falso? Elige la respuesta correcta.)~~',
      textTitel: 'Anzeigen im Supermarkt',
      text: 'Anzeige 1 — Zu verkaufen: Kinderfahrrad, rot, drei Jahre alt, nur 45 Euro. Ruf Familie Demir an: 0157 332 118. Anzeige 2 — Suche Hilfe im Garten, jeden Samstag von 10 bis 13 Uhr. Ich zahle 12 Euro pro Stunde. Herr Lindqvist, Rosenweg 4. Anzeige 3 — Deutschkurs am Abend! Du arbeitest am Tag? Kein Problem: Der Kurs ist montags und mittwochs von 18 bis 20 Uhr. Der erste Abend ist kostenlos. Melde dich bis Freitag an: Sprachschule Lindenhof, Tel. 0341 556 900.',
      items: [
        { typ: 'rf', aussage: 'Das Kinderfahrrad kostet 45 Euro.', loesung: true },
        { typ: 'rf', aussage: 'Herr Lindqvist sucht Hilfe am Sonntag.', loesung: false },
        {
          typ: 'mc',
          frage: 'Wann ist der Deutschkurs?',
          optionen: ['montags und mittwochs am Abend', 'jeden Samstag am Vormittag', 'jeden Tag von 18 bis 20 Uhr'],
          loesung: 0,
        },
        {
          typ: 'mc',
          frage: 'Lara hat am Samstag Zeit und braucht Geld. Welche Anzeige passt?',
          optionen: ['Anzeige 1', 'Anzeige 2', 'Anzeige 3'],
          loesung: 1,
        },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'formular',
      titel: 'Schreiben',
      anweisung: 'Lies den Text. Ergänze das Anmeldeformular. ~~(Lee el texto. Completa el formulario de inscripción.)~~',
      quelle: 'Hallo! Ich heiße Dilara Aksoy und ich suche einen Deutschkurs am Abend. Ich wohne in Leipzig, in der Bergstraße 12. Ich kann montags und mittwochs kommen. Meine E-Mail-Adresse ist dilara.aksoy@beispiel.de.',
      felder: [
        { id: 'vorname', label: 'Vorname', erwartet: ['Dilara'] },
        { id: 'nachname', label: 'Nachname', erwartet: ['Aksoy'] },
        { id: 'wohnort', label: 'Wohnort', erwartet: ['Leipzig'] },
        { id: 'kurstage', label: 'Kurstage', erwartet: ['montags und mittwochs', 'Montag und Mittwoch', 'montags, mittwochs', 'Montag, Mittwoch', 'Mo und Mi'] },
        { id: 'email', label: 'E-Mail', erwartet: ['dilara.aksoy@beispiel.de'] },
      ],
    },
  ],
}
