// Übungsheft B1 — Lektion 43: Prüfungssimulation 2 + Strategien
export default {
  lektion: 43,
  titel: 'Übungsheft — Wiederholung B1 (2)',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Letzte Wiederholung vor der Prüfung: Wähle die richtige Form.',
      items: [
        { typ: 'mc', frage: 'Wegen ___ Streiks kommt der Zug heute zu spät.', optionen: ['dem', 'des', 'der'], loesung: 1 },
        { typ: 'mc', frage: 'Es regnet stark. ___ gehen wir spazieren.', optionen: ['Obwohl', 'Weil', 'Trotzdem'], loesung: 2 },
        {
          typ: 'luecke',
          text: 'Das ist das Auto {1} Bruders. Am Ende {2} Woche fährt er damit nach Wien. Während {3} Ferien besucht er dort unsere Tante.',
          bank: ['meines', 'meinem', 'der', 'dem'],
          loesungen: { 1: 'meines', 2: 'der', 3: 'der' },
        },
        {
          typ: 'luecke',
          text: 'Das alte Rathaus {1} 1890 gebaut. Heute {2} es jedes Jahr von vielen Touristen besucht.',
          bank: ['wurde', 'wird', 'ist', 'hat'],
          loesungen: { 1: 'wurde', 2: 'wird' },
        },
        {
          typ: 'luecke',
          text: 'Ich habe leider wenig Zeit. Wenn ich mehr Zeit {1}, {2} ich öfter Sport machen.',
          bank: ['hätte', 'hatte', 'würde', 'wurde'],
          loesungen: { 1: 'hätte', 2: 'würde' },
        },
        {
          typ: 'luecke',
          text: 'Ich hoffe, {1} du bald kommst. Gestern habe ich vergessen, dich {2}. Ich weiß nicht, {3} du meine Nachricht bekommen hast.',
          bank: ['dass', 'ob', 'anzurufen', 'anrufen', 'wenn'],
          loesungen: { 1: 'dass', 2: 'anzurufen', 3: 'ob' },
        },
        {
          typ: 'zuordnen',
          links: ['sich interessieren', 'warten', 'teilnehmen', 'Angst haben', 'sich ärgern'],
          rechts: ['für', 'auf', 'an', 'vor', 'über'],
          loesung: {
            'sich interessieren': 'für',
            'warten': 'auf',
            'teilnehmen': 'an',
            'Angst haben': 'vor',
            'sich ärgern': 'über',
          },
        },
        {
          typ: 'satzbau',
          woerter: ['wohnt', 'die', 'neben', 'ist', 'Das', 'Frau', 'uns', 'die'],
          loesung: 'Das ist die Frau, die neben uns wohnt.',
        },
        {
          typ: 'korrektur',
          optionen: ['Ich wohne in einer kleinen Wohnung.', 'Ich wohne in einer kleine Wohnung.'],
          loesung: 0,
          warum: 'Después de **in** (¿dónde?) va Dativ: *einer* + adjetivo en **-en**. El error típico es dejar la terminación del nominativo.',
        },
        {
          typ: 'korrektur',
          optionen: ['Ich habe das Buch auf dem Tisch gelegt.', 'Ich habe das Buch auf den Tisch gelegt.'],
          loesung: 1,
          warum: '**legen** expresa movimiento (¿adónde?) → Wechselpräposition con **Akkusativ**: *auf den Tisch*. Con *liegen* (¿dónde?) sería Dativ.',
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies die Anzeige. Löse dann die vier Aufgaben.',
      textTitel: 'Anzeige: Tandempartner gesucht!',
      text: 'Hallo! Ich heiße Jonas, bin 31 Jahre alt und arbeite als Krankenpfleger in Mannheim. Seit einem halben Jahr lerne ich Spanisch, weil ich im nächsten Sommer drei Monate in Chile arbeiten möchte. Leider spreche ich noch nicht sehr gut, denn im Kurs haben wir wenig Zeit zum Sprechen. Deshalb suche ich eine Person, die Spanisch als Muttersprache spricht und Deutsch lernen möchte. Wir könnten uns einmal pro Woche treffen, zum Beispiel in einem Café in der Innenstadt. Dann sprechen wir eine Stunde Deutsch und eine Stunde Spanisch. Wegen meiner Schichtarbeit kann ich nicht an jedem Abend, aber am Wochenende habe ich meistens Zeit. Interessiert? Dann schreib mir eine Nachricht!',
      items: [
        { typ: 'rf', aussage: 'Jonas lernt Spanisch für seine Arbeit in Mannheim.', loesung: false },
        {
          typ: 'mc',
          frage: 'Warum spricht Jonas noch nicht gut Spanisch?',
          optionen: ['Er lernt erst seit zwei Wochen.', 'Im Kurs gibt es wenig Zeit zum Sprechen.', 'Er hat keine Zeit für einen Kurs.'],
          loesung: 1,
        },
        {
          typ: 'mc',
          frage: 'Wann hat Jonas meistens Zeit?',
          optionen: ['jeden Abend', 'montags', 'am Wochenende'],
          loesung: 2,
        },
        { typ: 'rf', aussage: 'Der Tandempartner soll Spanisch als Muttersprache sprechen.', loesung: true },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'text',
      titel: 'Schreiben',
      anweisung: 'Schreib eine Antwort mit mindestens 40 Wörtern. Denk an Anrede und Gruß.',
      aufgabe: 'Du hast die Anzeige von Jonas gelesen und möchtest seine Tandempartnerin oder sein Tandempartner werden. Schreib ihm eine Nachricht.',
      punkte: [
        'Stell dich kurz vor.',
        'Schreib, warum du Deutsch lernst.',
        'Mach einen Vorschlag für das erste Treffen.',
      ],
      minWoerter: 40,
      beispielLoesung: 'Hallo Jonas,\nich habe deine Anzeige gelesen und hätte großes Interesse an einem Tandem. Ich heiße Carmen, komme aus Bogotá und wohne seit einem Jahr in Mannheim. Ich lerne Deutsch, weil ich hier als Ingenieurin arbeiten möchte. Hättest du am Samstagnachmittag Zeit? Wir könnten uns um 15 Uhr in einem Café am Marktplatz treffen.\nViele Grüße\nCarmen',
    },
  ],
}
