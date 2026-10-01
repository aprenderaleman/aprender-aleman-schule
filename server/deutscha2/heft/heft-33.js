// Übungsheft A2 — Lektion 33: Essen & Einkaufen
export default {
  lektion: 33,
  titel: 'Übungsheft — Essen & Einkaufen',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Wähle die richtige Form. ~~(Elige la forma correcta.)~~',
      items: [
        { typ: 'mc', frage: 'Ich kaufe eine ___ Nudeln.', optionen: ['Dose', 'Flasche', 'Packung'], loesung: 2 },
        { typ: 'mc', frage: 'Auf dem Markt ist das Obst ___ als im Supermarkt.', optionen: ['frisch', 'frischer', 'am frischsten'], loesung: 1 },
        {
          typ: 'luecke',
          text: 'Ich {1} gern eine Flasche Öl und ein {2} Kartoffeln.',
          bank: ['hätte', 'Kilo', 'habe'],
          loesungen: { 1: 'hätte', 2: 'Kilo' },
        },
        {
          typ: 'luecke',
          text: 'Die Jacke ist zu klein. Ich möchte sie {1}. Hier ist der {2}.',
          bank: ['umtauschen', 'Kassenbon', 'Rechnung'],
          loesungen: { 1: 'umtauschen', 2: 'Kassenbon' },
        },
        { typ: 'satzbau', woerter: ['einen', 'Ich', 'Tisch', 'möchte', 'reservieren'], loesung: 'Ich möchte einen Tisch reservieren.' },
        { typ: 'satzbau', woerter: ['Sie', 'den', 'Haben', 'Kassenbon'], loesung: 'Haben Sie den Kassenbon?' },
        {
          typ: 'zuordnen',
          links: ['einen Tisch reservieren', 'im Restaurant bestellen', 'bezahlen', 'reklamieren'],
          rechts: ['Ich möchte einen Tisch für zwei Personen.', 'Ich hätte gern das Schnitzel.', 'Die Rechnung, bitte!', 'Entschuldigung, die Suppe ist kalt.'],
          loesung: {
            'einen Tisch reservieren': 'Ich möchte einen Tisch für zwei Personen.',
            'im Restaurant bestellen': 'Ich hätte gern das Schnitzel.',
            'bezahlen': 'Die Rechnung, bitte!',
            'reklamieren': 'Entschuldigung, die Suppe ist kalt.',
          },
        },
        {
          typ: 'korrektur',
          optionen: ['eine Packung von Nudeln', 'eine Packung Nudeln'],
          loesung: 1,
          warum: 'Menge + Nomen geht **ohne „von“**: *eine Packung Nudeln*. ~~(«Un paquete DE pasta» — en alemán la cantidad va sin «de».)~~',
        },
        {
          typ: 'korrektur',
          optionen: ['Ich tausche die Jacke um.', 'Ich umtausche die Jacke.'],
          loesung: 0,
          warum: '*umtauschen* ist **trennbar**: Das Präfix geht ans Ende. ~~(Verbo separable: el prefijo um- va al final de la frase.)~~',
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies die E-Mail. Richtig oder falsch? Wähle bei den Fragen die richtige Antwort. ~~(Lee el correo. ¿Verdadero o falso? En las preguntas, elige la respuesta correcta.)~~',
      textTitel: 'E-Mail von Paula',
      text: 'Hallo Andrés, am Samstag koche ich für unsere Freunde und du hilfst mir, super! Kaufst du bitte ein? Wir brauchen eine Packung Reis, zwei Dosen Tomaten, eine Flasche Öl und ein Kilo Zwiebeln. Kauf bitte auf dem Markt: Das Gemüse ist dort frischer als im Supermarkt. Der Käse ist diese Woche im Angebot, nur 2,99 Euro. Ich komme um 17 Uhr nach Hause. Danke dir! Liebe Grüße, Paula',
      items: [
        { typ: 'rf', aussage: 'Paula kocht am Samstag für Freunde.', loesung: true },
        {
          typ: 'mc',
          frage: 'Was soll Andrés kaufen?',
          optionen: ['eine Packung Nudeln', 'eine Packung Reis', 'ein Kilo Reis'],
          loesung: 1,
        },
        { typ: 'rf', aussage: 'Das Gemüse ist im Supermarkt frischer.', loesung: false },
        {
          typ: 'mc',
          frage: 'Was ist im Angebot?',
          optionen: ['der Käse', 'die Tomaten', 'das Öl'],
          loesung: 0,
        },
      ],
    },
    {
      typ: 'hoeren',
      titel: 'Hören',
      anweisung: 'Hör die Durchsage im Supermarkt. Richtig oder falsch? Wähle bei der Frage die richtige Antwort. ~~(Escucha el aviso en el supermercado. ¿Verdadero o falso? En la pregunta, elige la respuesta correcta.)~~',
      audio: {
        transcript: 'Liebe Kundinnen und Kunden, herzlich willkommen in unserem Supermarkt! Heute haben wir viele Angebote für Sie. Äpfel kosten heute nur einen Euro neunundneunzig das Kilo. Eine Packung Kaffee ist diese Woche billiger. Sie kostet nicht fünf Euro fünfzig, sondern nur vier Euro fünfzig. Frisches Brot finden Sie direkt neben der Kasse. Und noch eine Information für Sie. Heute schließen wir schon um neunzehn Uhr. Wir wünschen Ihnen einen schönen Einkauf!',
      },
      items: [
        { typ: 'mc', frage: 'Was kostet heute ein Kilo Äpfel?', optionen: ['1,90 Euro', '1,99 Euro', '9,19 Euro'], loesung: 1 },
        { typ: 'rf', aussage: 'Eine Packung Kaffee kostet diese Woche 5,50 Euro.', loesung: false },
        { typ: 'rf', aussage: 'Der Supermarkt schließt heute um 19 Uhr.', loesung: true },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'text',
      titel: 'Schreiben',
      anweisung: 'Schreib einen kurzen Text. ~~(Escribe un texto corto.)~~',
      aufgabe: 'Du kochst am Sonntag für deine Familie. Erzähl von deinem Einkauf.',
      punkte: [
        'Was kochst du?',
        'Was kaufst du ein? Nenn zwei Mengen (eine Packung …, ein Kilo …).',
        'Wo kaufst du ein — und warum?',
      ],
      minWoerter: 25,
      beispielLoesung:
        'Am Sonntag koche ich für meine Familie Nudeln mit Tomatensoße. Ich kaufe eine Packung Nudeln, zwei Dosen Tomaten und ein Kilo Zwiebeln. Ich kaufe auf dem Markt ein, weil das Gemüse dort frischer ist. Der Käse ist im Supermarkt billiger.',
    },
    {
      typ: 'sprechen',
      titel: 'Sprechen',
      anweisung: 'Sprich auf den Anrufbeantworter. Sprich 45 Sekunden. ~~(Deja un mensaje en el contestador. Habla 45 segundos.)~~',
      aufgabe: 'Du möchtest am Samstag mit Freunden essen gehen. Du rufst im Restaurant an, aber es ist noch geschlossen. Sprich auf den Anrufbeantworter. Reservier einen Tisch.',
      punkte: [
        'Tag und Uhrzeit',
        'Wie viele Personen?',
        'Stell eine Frage zum Essen.',
        'dein Name und deine Telefonnummer',
      ],
      redemittel: [
        'Guten Tag, mein Name ist …',
        'Ich möchte einen Tisch für … Personen reservieren.',
        'Wir kommen am … um … Uhr.',
        'Meine Telefonnummer ist …',
      ],
      maxSekunden: 45,
      beispielLoesung:
        'Guten Tag, mein Name ist Laura Gómez. Ich möchte einen Tisch reservieren, für Samstag um 20 Uhr. Wir sind vier Personen. Haben Sie einen Tisch am Fenster? Und ich habe noch eine Frage: Haben Sie auch Essen ohne Fleisch? Meine Telefonnummer ist 0176 4455667. Vielen Dank und auf Wiederhören!',
    },
  ],
}
