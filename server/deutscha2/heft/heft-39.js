// Übungsheft A2 — Lektion 39: Prüfungssimulation 1 + Korrektur
// Repaso mezclado de todo el curso A2 (simulacro).
export default {
  lektion: 39,
  titel: 'Übungsheft — Prüfungssimulation 1',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Große Wiederholung: Löse die Aufgaben. ~~(Gran repaso: resuelve los ejercicios.)~~',
      items: [
        { typ: 'mc', frage: 'Gestern ___ ich zu Hause geblieben.', optionen: ['habe', 'bin', 'war'], loesung: 1 },
        { typ: 'mc', frage: 'Der Film gefällt ___ .', optionen: ['mich', 'ich', 'mir'], loesung: 2 },
        { typ: 'mc', frage: 'Ich habe ___ Auto.', optionen: ['kein', 'nicht', 'keine'], loesung: 0 },
        {
          typ: 'luecke',
          text: 'Früher {1} ich keine Zeit. Heute lerne ich jeden Tag Deutsch, {2} ich die Prüfung machen will.',
          bank: ['hatte', 'weil', 'war'],
          loesungen: { 1: 'hatte', 2: 'weil' },
        },
        {
          typ: 'luecke',
          text: 'Ich fahre {1} dem Bus zur Arbeit. Am Wochenende gehe ich {2} Kino.',
          bank: ['mit', 'ins', 'im'],
          loesungen: { 1: 'mit', 2: 'ins' },
        },
        { typ: 'satzbau', woerter: ['kann', 'Heute', 'ich', 'zum', 'nicht', 'Training', 'kommen'], loesung: 'Heute kann ich nicht zum Training kommen.' },
        { typ: 'satzbau', woerter: ['Jahre', 'Ich', '30', 'alt', 'bin'], loesung: 'Ich bin 30 Jahre alt.' },
        {
          typ: 'zuordnen',
          links: ['gehen', 'spielen', 'essen', 'bleiben', 'lesen'],
          rechts: ['ist gegangen', 'hat gespielt', 'hat gegessen', 'ist geblieben', 'hat gelesen'],
          loesung: { 'gehen': 'ist gegangen', 'spielen': 'hat gespielt', 'essen': 'hat gegessen', 'bleiben': 'ist geblieben', 'lesen': 'hat gelesen' },
        },
        {
          typ: 'korrektur',
          optionen: ['Ich habe 25 Jahre.', 'Ich bin 25 Jahre alt.'],
          loesung: 1,
          warum: 'La edad va con **sein**: *Ich bin 25 Jahre alt*. ~~(«Tengo 25 años» no se traduce con haben.)~~',
        },
        {
          typ: 'korrektur',
          optionen: ['Ich bleibe zu Hause, weil ich krank bin.', 'Ich bleibe zu Hause, weil ich bin krank.'],
          loesung: 0,
          warum: 'Tras **weil** el verbo va **al final**: *…, weil ich krank **bin**.* ~~(En español el orden no cambia; en alemán, sí.)~~',
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies den Text. Löse die vier Aufgaben. ~~(Lee el texto. Resuelve las cuatro tareas.)~~',
      textTitel: 'E-Mail von Karim',
      text: 'Liebe Verónica, wie geht es dir? Ich habe jetzt einen neuen Job in einem Büro. Ich muss um halb acht anfangen, darum stehe ich sehr früh auf. Die Kollegen sind nett, aber die Arbeit ist manchmal langweilig. Letzte Woche war ich krank. Ich hatte Fieber und bin drei Tage zu Hause geblieben. Jetzt geht es mir wieder gut. Hast du im Oktober Zeit? Ich möchte dich besuchen, weil ich Berlin sehen will. Wir können ins Museum gehen! Liebe Grüße, Karim',
      items: [
        { typ: 'rf', aussage: 'Karim beginnt die Arbeit um 8:30 Uhr.', loesung: false },
        { typ: 'rf', aussage: 'Die Kollegen von Karim sind nett.', loesung: true },
        {
          typ: 'mc',
          frage: 'Warum war Karim drei Tage zu Hause?',
          optionen: ['Er war krank.', 'Er hatte Urlaub.', 'Die Arbeit war langweilig.'],
          loesung: 0,
        },
        { typ: 'rf', aussage: 'Karim möchte Verónica im Oktober besuchen.', loesung: true },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'text',
      titel: 'Schreiben',
      anweisung: 'Schreib eine kurze Mitteilung (ca. 25 Wörter). Denk an Anrede und Gruß. ~~(Escribe una nota corta de unas 25 palabras. Recuerda el saludo y la despedida.)~~',
      aufgabe: 'Du kannst am Samstag nicht zum Kursfest kommen. Schreib deiner Freundin Elena eine kurze Nachricht.',
      punkte: [
        'Entschuldige dich. ~~(Discúlpate.)~~',
        'Nenne den Grund. ~~(Di el motivo.)~~',
        'Schlage einen neuen Termin vor. ~~(Propón otra fecha.)~~',
      ],
      minWoerter: 25,
      beispielLoesung: 'Liebe Elena, es tut mir leid, aber ich kann am Samstag nicht zum Fest kommen. Meine Eltern besuchen mich am Wochenende. Können wir nächste Woche zusammen essen gehen? Viele Grüße, Iván',
    },
  ],
}
