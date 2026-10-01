// Übungsheft A1 — Lektion 32: Essen & Einkaufen
export default {
  lektion: 32,
  titel: 'Übungsheft — Essen & Einkaufen',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Wähle die richtige Form. ~~(Elige la forma correcta.)~~',
      items: [
        { typ: 'mc', frage: 'Ich ___ Hunger. Ich esse eine Pizza.', optionen: ['habe', 'bin', 'möchte'], loesung: 0 },
        { typ: 'mc', frage: 'Ich möchte ___ Kaffee, bitte.', optionen: ['einen', 'ein', 'eine'], loesung: 0 },
        {
          typ: 'luecke',
          text: 'Ich habe {1}. Ich esse ein Brot. Ich habe {2}. Ich trinke ein Wasser.',
          bank: ['Hunger', 'Durst', 'Rechnung'],
          loesungen: { 1: 'Hunger', 2: 'Durst' },
        },
        {
          typ: 'luecke',
          text: 'Im Supermarkt kaufe ich einen Liter {1} und ein Kilo {2}. Im Café möchte ich zahlen: „Die {3}, bitte!“',
          bank: ['Milch', 'Äpfel', 'Rechnung', 'Durst'],
          loesungen: { 1: 'Milch', 2: 'Äpfel', 3: 'Rechnung' },
        },
        { typ: 'satzbau', woerter: ['möchte', 'einen', 'Ich', 'bitte', 'Kaffee'], loesung: 'Ich möchte einen Kaffee, bitte.', alt: ['Ich möchte bitte einen Kaffee.'] },
        { typ: 'satzbau', woerter: ['kostet', 'das', 'Was', 'Brot'], loesung: 'Was kostet das Brot?' },
        {
          typ: 'zuordnen',
          links: ['Brot', 'Milch', 'Kaffee', 'Käse', 'Rechnung'],
          rechts: ['das', 'die', 'der', 'der', 'die'],
          loesung: { 'Brot': 'das', 'Milch': 'die', 'Kaffee': 'der', 'Käse': 'der', 'Rechnung': 'die' },
        },
        {
          typ: 'korrektur',
          optionen: ['Ich habe Hunger.', 'Ich bin Hunger.'],
          loesung: 0,
          warum: 'El hambre en alemán se tiene, con **haben** y sin artículo: *Ich habe Hunger*. ~~(Nunca con sein.)~~',
        },
        {
          typ: 'korrektur',
          optionen: ['Ich kaufe ein Kilo Äpfel.', 'Ich kaufe ein Kilo von Äpfel.'],
          loesung: 0,
          warum: 'Las cantidades van directas, sin «de»: *ein Kilo Äpfel*, *ein Liter Milch*. ~~(Ese «von» es un calco del español.)~~',
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies den Text. Richtig oder falsch? ~~(Lee el texto. ¿Verdadero o falso?)~~',
      textTitel: 'Im Supermarkt: Angebote am Montag',
      text: 'Supermarkt Kirsch — unsere Angebote am Montag: Ein Kilo Äpfel kostet nur 2 Euro. 100 Gramm Käse kosten 1 Euro 50. Eine Flasche Wasser kostet 40 Cent. Neu: Unser Café hat jetzt auch Kaffee — nur 2 Euro! Der Supermarkt ist von 8 bis 20 Uhr geöffnet.',
      items: [
        { typ: 'rf', aussage: 'Ein Kilo Äpfel kostet 2 Euro.', loesung: true },
        { typ: 'rf', aussage: '100 Gramm Käse kosten 1 Euro.', loesung: false },
        {
          typ: 'mc',
          frage: 'Wann ist der Supermarkt geöffnet?',
          optionen: ['von 8 bis 20 Uhr', 'von 8 bis 12 Uhr', 'von 9 bis 18 Uhr'],
          loesung: 0,
        },
        { typ: 'rf', aussage: 'Der Kaffee im Café kostet 4 Euro.', loesung: false },
      ],
    },
    {
      typ: 'hoeren',
      titel: 'Hören',
      anweisung: 'Hör das Gespräch. Was ist richtig? ~~(Escucha la conversación. ¿Qué es correcto?)~~',
      audio: {
        transcript: 'Frau: Tom, ich habe Hunger. Haben wir Brot?\nMann: Nein. Wir haben kein Brot und auch keinen Käse.\nFrau: Dann kaufe ich jetzt im Supermarkt ein. Brauchen wir auch Milch?\nMann: Ja, einen Liter Milch, bitte. Und ein Kilo Äpfel.\nFrau: Die Äpfel sind heute billig. Ich kaufe zwei Kilo.\nMann: Sehr gut. Danke, Lena!',
      },
      items: [
        { typ: 'rf', aussage: 'Die Frau hat Hunger.', loesung: true },
        { typ: 'mc', frage: 'Wie viel Milch brauchen Tom und Lena?', optionen: ['zwei Liter', 'einen Liter', 'drei Liter'], loesung: 1 },
        { typ: 'rf', aussage: 'Die Frau kauft ein Kilo Äpfel.', loesung: false },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'formular',
      titel: 'Schreiben',
      anweisung: 'Lies den Text. Ergänze das Formular. ~~(Lee el texto. Completa el formulario.)~~',
      quelle: 'Hallo! Ich bin Jonas Beck. Am Samstag mache ich eine Party. Ich kaufe im Supermarkt ein: zwei Kilo Äpfel, drei Flaschen Wasser und 200 Gramm Käse. Das macht 12 Euro 50.',
      felder: [
        { id: 'name', label: 'Name', erwartet: ['Jonas Beck', 'Beck'] },
        { id: 'tag', label: 'Tag der Party', erwartet: ['Samstag', 'am Samstag'] },
        { id: 'aepfel', label: 'Äpfel (wie viel?)', erwartet: ['zwei Kilo', '2 Kilo'] },
        { id: 'wasser', label: 'Wasser (wie viel?)', erwartet: ['drei Flaschen', '3 Flaschen'] },
        { id: 'preis', label: 'Preis', erwartet: ['12 Euro 50', '12,50 Euro', '12,50 €'] },
      ],
    },
    {
      typ: 'sprechen',
      titel: 'Sprechen',
      anweisung: 'Du bist im Café. Sprich 30 Sekunden. ~~(Estás en la cafetería. Habla 30 segundos.)~~',
      aufgabe: 'Du hast Hunger und Durst. Bestell im Café und bezahl. ~~(Tienes hambre y sed. Pide en la cafetería y paga.)~~',
      punkte: [
        'Hunger und Durst ~~(hambre y sed)~~',
        'Was möchtest du? ~~(¿Qué quieres pedir?)~~',
        'der Preis ~~(el precio)~~',
        'die Rechnung ~~(la cuenta)~~',
      ],
      redemittel: ['Ich habe …', 'Ich möchte … , bitte.', 'Was kostet …?', 'Die Rechnung, …'],
      maxSekunden: 30,
      beispielLoesung: 'Guten Tag! Ich habe Hunger und Durst. Ich möchte ein Brot mit Käse und einen Kaffee mit Milch, bitte. Was kostet das? Danke! Die Rechnung, bitte!',
    },
  ],
}
