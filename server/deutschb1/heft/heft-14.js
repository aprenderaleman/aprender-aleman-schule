// Übungsheft B1 — Lektion 14: Genitiv & Präpositionen mit Genitiv
export default {
  lektion: 14,
  titel: 'Übungsheft — Genitiv',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Frag dich: Wessen? Oder: Grund, Gegensatz, Zeit? Wähle dann die richtige Form.',
      items: [
        { typ: 'mc', frage: 'Das ist das Auto ___ Nachbarn.', optionen: ['des', 'dem', 'den'], loesung: 0 },
        { typ: 'mc', frage: 'Es regnet, aber wir gehen raus: ___ des Regens machen wir das Picknick.', optionen: ['Wegen', 'Trotz', 'Während'], loesung: 1 },
        { typ: 'mc', frage: 'Die Tasche ___ Lehrerin liegt auf dem Tisch.', optionen: ['des', 'den', 'der'], loesung: 2 },
        {
          typ: 'luecke',
          text: 'Der Eingang {1} Gebäudes ist links. Die Tür {2} Küche ist rechts.',
          bank: ['des', 'der', 'dem', 'den'],
          loesungen: { 1: 'des', 2: 'der' },
        },
        {
          typ: 'luecke',
          text: '{1} des Streiks fahren heute keine Busse. Es ist sehr kalt, aber {2} der Kälte gehen wir zu Fuß.',
          bank: ['Wegen', 'Trotz', 'Von', 'Mit'],
          loesungen: { 1: 'Wegen', 2: 'Trotz' },
        },
        {
          typ: 'luecke',
          text: 'Das Handy {1} Schwester ist kaputt. Das Fahrrad {2} Bruders ist ganz neu.',
          bank: ['meiner', 'meines', 'meinem', 'meine'],
          loesungen: { 1: 'meiner', 2: 'meines' },
        },
        {
          typ: 'zuordnen',
          links: ['das Büro des Chefs', 'die Tasche der Lehrerin', 'das Zimmer des Kindes', 'die Wohnung der Eltern', 'Marias Auto'],
          rechts: ['die Wohnung von den Eltern', 'das Auto von Maria', 'das Büro vom Chef', 'das Zimmer vom Kind', 'die Tasche von der Lehrerin'],
          loesung: {
            'das Büro des Chefs': 'das Büro vom Chef',
            'die Tasche der Lehrerin': 'die Tasche von der Lehrerin',
            'das Zimmer des Kindes': 'das Zimmer vom Kind',
            'die Wohnung der Eltern': 'die Wohnung von den Eltern',
            'Marias Auto': 'das Auto von Maria',
          },
        },
        { typ: 'satzbau', woerter: ['gesperrt', 'Unfalls', 'die', 'Wegen', 'Straße', 'ist', 'eines'], loesung: 'Wegen eines Unfalls ist die Straße gesperrt.' },
        {
          typ: 'korrektur',
          optionen: ['Wegen von dem Stau komme ich zu spät.', 'Wegen des Staus komme ich zu spät.'],
          loesung: 1,
          warum: 'Después de *wegen* y *trotz* **no va von**: el genitivo sigue directamente. En español dices «por culpa **del** atasco», pero en alemán no hay «de» extra.',
        },
        {
          typ: 'korrektur',
          optionen: ['Die Farbe des Autos gefällt mir.', 'Die Farbe des Auto gefällt mir.'],
          loesung: 0,
          warum: 'Masculino y neutro llevan **des + -s/-es en el sustantivo**: *des Autos, des Mannes*. Solo el femenino y el plural se quedan sin terminación.',
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies die Zeitungsnotiz. Löse dann die vier Aufgaben.',
      textTitel: 'Aus dem Stadtteil: Sommerfest findet statt',
      text: 'Das Sommerfest des Stadtteils Lindenau findet trotz der Bauarbeiten im Park statt. Das hat die Leiterin des Kulturamts, Frau Sommer, am Montag gesagt. Wegen der Bauarbeiten gibt es aber eine Änderung: Die Bühne steht dieses Jahr nicht am See, sondern auf dem Platz vor der Schule. Während des Festes sind die Straßen rund um den Park für Autos gesperrt. Die Organisatoren sagen deshalb: Kommen Sie am besten mit dem Bus oder mit dem Fahrrad! Die Kinder der Grundschule singen am Samstag um 15 Uhr. Am Abend spielt die Band eines Lehrers aus dem Stadtteil. Wegen des großen Interesses gibt es in diesem Jahr zum ersten Mal auch einen Flohmarkt. Der Eintritt ist frei.',
      items: [
        { typ: 'rf', aussage: 'Das Sommerfest fällt wegen der Bauarbeiten aus.', loesung: false },
        {
          typ: 'mc',
          frage: 'Wo steht die Bühne in diesem Jahr?',
          optionen: ['am See', 'auf dem Platz vor der Schule', 'im Park neben dem Spielplatz'],
          loesung: 1,
        },
        { typ: 'rf', aussage: 'Während des Festes können keine Autos um den Park fahren.', loesung: true },
        {
          typ: 'mc',
          frage: 'Warum gibt es dieses Jahr einen Flohmarkt?',
          optionen: ['wegen des großen Interesses', 'wegen der Bauarbeiten', 'wegen des schlechten Wetters'],
          loesung: 0,
        },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'formular',
      titel: 'Schreiben',
      anweisung: 'Lies die Nachricht an das Fundbüro. Ergänze dann die Verlustmeldung.',
      quelle: 'Guten Tag, mein Name ist Karim Haddad. Ich habe gestern im Bus der Linie 12 eine Tasche verloren. Es ist die Tasche meiner Frau, eine rote Ledertasche. Darin ist der Schlüssel unserer Wohnung. Wegen meiner Arbeit können Sie mich nur nach 18 Uhr anrufen. Vielen Dank!',
      felder: [
        { id: 'name', label: 'Name', erwartet: ['Karim Haddad', 'Haddad'] },
        { id: 'ort', label: 'Wo verloren?', erwartet: ['im Bus der Linie 12', 'Bus der Linie 12', 'Bus Linie 12', 'Linie 12', 'im Bus', 'Bus'] },
        { id: 'gegenstand', label: 'Was?', erwartet: ['eine rote Ledertasche', 'rote Ledertasche', 'Ledertasche', 'rote Tasche', 'Tasche'] },
        { id: 'besitzer', label: 'Wem gehört die Tasche?', erwartet: ['seiner Frau', 'meiner Frau', 'seine Frau', 'Frau', 'Ehefrau', 'der Frau von Karim Haddad'] },
        { id: 'anruf', label: 'Anruf möglich', erwartet: ['nach 18 Uhr', 'ab 18 Uhr', 'abends', '18 Uhr'] },
      ],
    },
  ],
}
