// Übungsheft B1 — Lektion 23: Modul Hören — Überblick
export default {
  lektion: 23,
  titel: 'Übungsheft — Modul Hören',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Diese Wörter und Sätze hörst und liest du im Modul Hören. Löse die Aufgaben.',
      items: [
        {
          typ: 'mc',
          frage: 'Ich habe dir eine Nachricht auf dem Anrufbeantworter ___.',
          optionen: ['hinterlassen', 'gelassen', 'verlassen'],
          loesung: 0,
        },
        { typ: 'mc', frage: 'Bitte ___ Sie die richtige Lösung an.', optionen: ['wählen', 'ordnen', 'kreuzen'], loesung: 2 },
        { typ: 'mc', frage: 'Die Sprecherin ist ___ Meinung, dass Homeoffice gut ist.', optionen: ['den', 'der', 'die'], loesung: 1 },
        {
          typ: 'luecke',
          text: 'In Teil 4 hörst du eine {1} im Radio. Du musst die Aussagen den Personen {2}. Jede Person sagt ihre {3}.',
          bank: ['Diskussion', 'zuordnen', 'Meinung', 'Durchsage', 'ankreuzen'],
          loesungen: { 1: 'Diskussion', 2: 'zuordnen', 3: 'Meinung' },
        },
        {
          typ: 'luecke',
          text: 'Ich lese die Aufgaben, {1} der Text beginnt. {2} ich ein Wort nicht kenne, höre ich weiter. Ich kreuze immer etwas an, {3} es keine Minuspunkte gibt.',
          bank: ['bevor', 'Wenn', 'weil', 'denn', 'trotzdem'],
          loesungen: { 1: 'bevor', 2: 'Wenn', 3: 'weil' },
        },
        {
          typ: 'zuordnen',
          links: [
            'Der Zug nach Bremen hat 20 Minuten Verspätung.',
            'Die Praxis ist bis zum 5. August geschlossen.',
            'Morgen wird es sonnig und warm.',
            'Unser Geschäft schließt in zehn Minuten.',
            'Bitte schnallen Sie sich jetzt an.',
          ],
          rechts: ['am Bahnhof', 'auf dem Anrufbeantworter', 'im Radio', 'im Kaufhaus', 'im Flugzeug'],
          loesung: {
            'Der Zug nach Bremen hat 20 Minuten Verspätung.': 'am Bahnhof',
            'Die Praxis ist bis zum 5. August geschlossen.': 'auf dem Anrufbeantworter',
            'Morgen wird es sonnig und warm.': 'im Radio',
            'Unser Geschäft schließt in zehn Minuten.': 'im Kaufhaus',
            'Bitte schnallen Sie sich jetzt an.': 'im Flugzeug',
          },
        },
        {
          typ: 'satzbau',
          woerter: ['nicht', 'Durchsage', 'Ich', 'verstanden', 'leider', 'die', 'habe'],
          loesung: 'Ich habe die Durchsage leider nicht verstanden.',
          alt: ['Ich habe leider die Durchsage nicht verstanden.'],
        },
        {
          typ: 'satzbau',
          woerter: ['du', 'Aufgaben', 'hörst', 'Lies', 'Text', 'bevor', 'den', 'die'],
          loesung: 'Lies die Aufgaben, bevor du den Text hörst.',
        },
        {
          typ: 'korrektur',
          optionen: ['Der Zug fährt nicht um acht, aber um neun.', 'Der Zug fährt nicht um acht, sondern um neun.'],
          loesung: 1,
          warum: 'Después de una negación, «sino» es **sondern**. *aber* significa «pero». Es la trampa clásica de las Durchsagen.',
        },
        {
          typ: 'korrektur',
          optionen: ['Ich höre der Sprecherin genau zu.', 'Ich höre die Sprecherin genau zu.'],
          loesung: 0,
          warum: '*zuhören* va con **Dativ**: *jemandem zuhören*. «Escuchar **a** alguien» lleva a muchos hispanohablantes al Akkusativ.',
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies den Forumsbeitrag. Löse dann die vier Aufgaben.',
      textTitel: 'Forum: Wie übt ihr Hören?',
      text: 'Hallo zusammen, in sechs Wochen habe ich meine B1-Prüfung, und Hören ist mein größtes Problem. Am Anfang habe ich jeden Tag Radio gehört, aber ich habe fast nichts verstanden. Deshalb habe ich meine Methode geändert. Jetzt lese ich zuerst die Aufgaben und markiere die Schlüsselwörter. Dann höre ich den Text nur einmal, ohne Pause. Wenn ich ein Wort nicht kenne, höre ich einfach weiter. Erst danach kontrolliere ich die Lösungen. Am schwierigsten finde ich Teil 4, die Diskussion, weil drei Personen sprechen und ihre Meinungen oft ähnlich sind. Bei den Durchsagen in Teil 1 mache ich dagegen kaum noch Fehler. Habt ihr Tipps für die Diskussion? Viele Grüße, Duc',
      items: [
        { typ: 'rf', aussage: 'Am Anfang hat Duc beim Radiohören viel verstanden.', loesung: false },
        {
          typ: 'mc',
          frage: 'Was macht Duc jetzt vor dem Hören?',
          optionen: ['Er hört den Text zweimal.', 'Er liest die Aufgaben und markiert Schlüsselwörter.', 'Er sucht unbekannte Wörter im Wörterbuch.'],
          loesung: 1,
        },
        { typ: 'rf', aussage: 'Teil 4 ist für Duc am schwierigsten.', loesung: true },
        {
          typ: 'mc',
          frage: 'Warum ist die Diskussion für Duc schwierig?',
          optionen: ['Die Personen sprechen sehr leise.', 'Er darf den Text nicht hören.', 'Die Meinungen der Personen sind oft ähnlich.'],
          loesung: 2,
        },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'text',
      titel: 'Schreiben',
      anweisung: 'Schreib eine Antwort mit mindestens 40 Wörtern. Denk an Anrede und Gruß.',
      aufgabe: 'Duc sucht im Forum Tipps für das Modul Hören. Schreib ihm eine Antwort.',
      punkte: [
        'Erzähl: Wie übst du Hören?',
        'Gib Duc einen Tipp für Teil 4, die Diskussion.',
        'Wünsch ihm Glück für die Prüfung.',
      ],
      minWoerter: 40,
      beispielLoesung: 'Hallo Duc, ich habe das gleiche Problem! Ich höre jeden Abend eine kurze Diskussion im Radio und notiere, wer was sagt. Mein Tipp für Teil 4: Achte auf Wörter wie „ich finde“, „ich bin dagegen“ oder „aber“. Oft sagt eine Person zuerst Ja und am Ende doch Nein. Hör also immer bis zum Schluss zu! Viel Glück bei der Prüfung! Liebe Grüße, Marta',
    },
  ],
}
