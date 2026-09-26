// Übungsheft B1 — Lektion 37: Reisen & Verkehr
export default {
  lektion: 37,
  titel: 'Übungsheft — Reisen & Verkehr',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Achte auf die Präpositionen: mit dem Zug, zum Bahnhof, nach Berlin. Löse dann die Aufgaben.',
      items: [
        { typ: 'mc', frage: 'Ich fahre jeden Morgen ___ Bus zur Arbeit.', optionen: ['in', 'mit der', 'mit dem'], loesung: 2 },
        { typ: 'mc', frage: 'Entschuldigung, wie komme ich ___ Bahnhof?', optionen: ['zum', 'nach', 'zur'], loesung: 0 },
        {
          typ: 'luecke',
          text: 'Der Zug {1} Hamburg fährt heute von {2} 4 ab. In Hannover musst du {3}.',
          bank: ['nach', 'zu', 'Gleis', 'Rezeption', 'umsteigen'],
          loesungen: { 1: 'nach', 2: 'Gleis', 3: 'umsteigen' },
        },
        {
          typ: 'luecke',
          text: 'Wir haben online ein {1} für zwei Personen {2}. Die Schlüssel bekommen wir an der {3}.',
          bank: ['Doppelzimmer', 'Fahrkarte', 'gebucht', 'gefahren', 'Rezeption'],
          loesungen: { 1: 'Doppelzimmer', 2: 'gebucht', 3: 'Rezeption' },
        },
        {
          typ: 'luecke',
          text: 'Herr Kaya {1} sich an der Rezeption {2} den Lärm. Er möchte ein {3} Zimmer.',
          bank: ['beschwert', 'über', 'auf', 'anderes', 'anderen'],
          loesungen: { 1: 'beschwert', 2: 'über', 3: 'anderes' },
        },
        {
          typ: 'zuordnen',
          links: ['Der Zug fällt aus.', 'umsteigen', 'die Haltestelle', 'die Rezeption', 'die Verspätung'],
          rechts: ['Er fährt heute gar nicht.', 'den Zug wechseln', 'Hier wartet man auf den Bus.', 'Hier checkt man im Hotel ein.', 'Der Zug kommt später an.'],
          loesung: {
            'Der Zug fällt aus.': 'Er fährt heute gar nicht.',
            'umsteigen': 'den Zug wechseln',
            'die Haltestelle': 'Hier wartet man auf den Bus.',
            'die Rezeption': 'Hier checkt man im Hotel ein.',
            'die Verspätung': 'Der Zug kommt später an.',
          },
        },
        {
          typ: 'satzbau',
          woerter: ['Zug', 'fahre', 'dem', 'Ich', 'nach', 'mit', 'Berlin'],
          loesung: 'Ich fahre mit dem Zug nach Berlin.',
        },
        {
          typ: 'satzbau',
          woerter: ['ein', 'Könnte', 'Zimmer', 'ich', 'anderes', 'bitte', 'bekommen'],
          loesung: 'Könnte ich bitte ein anderes Zimmer bekommen?',
        },
        {
          typ: 'korrektur',
          optionen: ['Ich fahre in Zug nach Madrid.', 'Ich fahre mit dem Zug nach Madrid.'],
          loesung: 1,
          warum: 'Medio de transporte = **mit + Dativ**: *mit dem Zug*. El calco de «en tren» (*in Zug*) es el error típico.',
        },
        {
          typ: 'korrektur',
          optionen: ['Ich beschwere mich über das laute Zimmer.', 'Ich beschwere über das laute Zimmer.'],
          loesung: 0,
          warum: '**sich beschweren** es reflexivo, como «quejar**se**»: no olvides el *mich*. Y la preposición es **über + Akk.**',
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies den Forumsbeitrag. Löse dann die vier Aufgaben.',
      textTitel: 'Forum „Unterwegs“: Meine Reise nach Freiburg',
      text: 'Letzte Woche bin ich mit dem Zug von Hamburg nach Freiburg gefahren. Die Fahrkarte hatte ich schon vor einem Monat online gekauft, deshalb war sie ziemlich günstig. Leider hatte der Zug schon in Hamburg 25 Minuten Verspätung. In Frankfurt sollte ich umsteigen, aber mein Anschlusszug war natürlich schon weg. Ich musste eine Stunde warten und habe im Bahnhof einen Kaffee getrunken. In Freiburg habe ich dann in einem kleinen Hotel gewohnt. Mein Zimmer lag direkt über einer Bar und war sehr laut. Ich habe mich an der Rezeption beschwert, und die Frau dort war sehr freundlich: Ich habe sofort ein ruhiges Zimmer im vierten Stock bekommen. Mein Tipp: Nehmt immer einen früheren Zug, wenn ihr umsteigen müsst! Ines',
      items: [
        { typ: 'rf', aussage: 'Ines hat die Fahrkarte kurz vor der Fahrt gekauft.', loesung: false },
        {
          typ: 'mc',
          frage: 'Wo musste Ines umsteigen?',
          optionen: ['in Hamburg', 'in Frankfurt', 'in Freiburg'],
          loesung: 1,
        },
        { typ: 'rf', aussage: 'Ines hat in Frankfurt eine Stunde gewartet.', loesung: true },
        {
          typ: 'mc',
          frage: 'Warum hat sich Ines an der Rezeption beschwert?',
          optionen: ['Das Zimmer war zu teuer.', 'Das Frühstück war schlecht.', 'Das Zimmer war zu laut.'],
          loesung: 2,
        },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'text',
      titel: 'Schreiben',
      anweisung: 'Schreib eine E-Mail mit mindestens 40 Wörtern. Denk an Anrede und Gruß.',
      aufgabe: 'Du hast zwei Nächte im Hotel „Am Stadtpark“ gewohnt. In deinem Zimmer hat die Heizung nicht funktioniert. Schreib dem Hotel eine höfliche E-Mail.',
      punkte: [
        'Beschreib das Problem.',
        'Schreib, was an der Rezeption passiert ist.',
        'Bitte um eine Lösung, zum Beispiel einen günstigeren Preis.',
      ],
      minWoerter: 40,
      beispielLoesung: 'Sehr geehrte Damen und Herren,\nich habe vom 3. bis zum 5. März in Ihrem Hotel gewohnt. Leider hat die Heizung in meinem Zimmer nicht funktioniert, und es war nachts sehr kalt. Ich habe mich an der Rezeption beschwert, aber niemand hat die Heizung repariert. Könnten Sie mir bitte einen Teil des Preises zurückzahlen?\nMit freundlichen Grüßen\nLukas Brenner',
    },
  ],
}
