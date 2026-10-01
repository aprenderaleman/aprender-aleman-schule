// Übungsheft A2 — Lektion 01: Das Zertifikat A2 im Überblick
export default {
  lektion: 1,
  titel: 'Übungsheft — Das Zertifikat A2',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Wähle die richtige Form. ~~(Elige la forma correcta.)~~',
      items: [
        { typ: 'mc', frage: 'Die Prüfung hat vier ___ : Lesen, Hören, Schreiben, Sprechen.', optionen: ['Teile', 'Punkte', 'Zeugnisse'], loesung: 0 },
        { typ: 'mc', frage: 'Du brauchst 60 % der ___ .', optionen: ['Zeugnisse', 'Punkte', 'Prüfungen'], loesung: 1 },
        {
          typ: 'luecke',
          text: 'Zuerst mache ich die {1} online. Dann lerne ich viel. Am Ende bekomme ich das {2}.',
          bank: ['Anmeldung', 'Zeugnis', 'Antwort'],
          loesungen: { 1: 'Anmeldung', 2: 'Zeugnis' },
        },
        {
          typ: 'luecke',
          text: 'Rosa {1} die Prüfung mit 82 % der Punkte. Sie {2} sehr glücklich.',
          bank: ['besteht', 'ist', 'hat'],
          loesungen: { 1: 'besteht', 2: 'ist' },
        },
        { typ: 'satzbau', woerter: ['Die', 'Prüfung', 'hat', 'vier', 'Teile'], loesung: 'Die Prüfung hat vier Teile.' },
        { typ: 'satzbau', woerter: ['machst', 'Prüfung', 'Wann', 'du', 'die'], loesung: 'Wann machst du die Prüfung?' },
        {
          typ: 'zuordnen',
          links: ['Lesen', 'Hören', 'Schreiben', 'Sprechen'],
          rechts: ['kurze Texte und E-Mails verstehen', 'Durchsagen und Gespräche verstehen', 'eine Mitteilung und eine E-Mail schreiben', 'mit einem Partner etwas planen'],
          loesung: {
            'Lesen': 'kurze Texte und E-Mails verstehen',
            'Hören': 'Durchsagen und Gespräche verstehen',
            'Schreiben': 'eine Mitteilung und eine E-Mail schreiben',
            'Sprechen': 'mit einem Partner etwas planen',
          },
        },
        {
          typ: 'korrektur',
          optionen: ['Ich präsentiere im Juni die Prüfung.', 'Ich mache im Juni die Prüfung.'],
          loesung: 1,
          warum: '«Presentarse a un examen» = **eine Prüfung machen**. ~~(*präsentieren* es presentar algo a un público — falso amigo.)~~',
        },
        {
          typ: 'korrektur',
          optionen: ['Die Antwort ist richtig.', 'Die Antwort ist richtige.'],
          loesung: 0,
          warum: 'Después de **sein** el adjetivo va **sin terminación**: Die Antwort ist **richtig**. ~~(No copies la -a de «correcta».)~~',
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies die E-Mail. Richtig oder falsch? ~~(Lee el correo. ¿Verdadero o falso?)~~',
      textTitel: 'E-Mail von Karim',
      text: 'Hallo Sofía! Gute Nachrichten: Ich habe einen Termin für das Zertifikat A2. Die Prüfung ist am 12. April in einem Prüfungszentrum in Bogotá. Die Anmeldung ist ganz einfach — alles online. Die Prüfung hat vier Teile: Lesen, Hören, Schreiben und Sprechen. Ich lerne jetzt jeden Tag eine Stunde Deutsch. Ich brauche 60 % der Punkte, dann bekomme ich das Zeugnis. Machst du die Prüfung auch? Liebe Grüße, Karim',
      items: [
        { typ: 'rf', aussage: 'Die Prüfung ist im Mai.', loesung: false },
        { typ: 'rf', aussage: 'Die Anmeldung ist online.', loesung: true },
        { typ: 'mc', frage: 'Wie viele Teile hat die Prüfung?', optionen: ['drei', 'vier', 'fünf'], loesung: 1 },
        { typ: 'rf', aussage: 'Karim braucht 60 % der Punkte.', loesung: true },
      ],
    },
    {
      typ: 'hoeren',
      titel: 'Hören',
      anweisung: 'Hör die Nachricht. Was ist richtig? ~~(Escucha el mensaje. ¿Qué es correcto?)~~',
      audio: {
        transcript: 'Guten Tag, Frau Navarro. Hier ist das Prüfungszentrum in Köln. Ihre Anmeldung für das Zertifikat A2 ist jetzt komplett. Die Prüfung ist nicht am neunten Mai, sondern am sechzehnten Mai. Sie beginnt um neun Uhr. Bitte kommen Sie schon um halb neun. Sie brauchen Ihren Ausweis. Der Teil Sprechen ist am Nachmittag um vierzehn Uhr. Das Ergebnis bekommen Sie nach drei Wochen per E-Mail. Vielen Dank und auf Wiederhören.',
      },
      items: [
        { typ: 'mc', frage: 'Wann ist die Prüfung?', optionen: ['am 9. Mai', 'am 16. Mai', 'am 6. Mai'], loesung: 1 },
        { typ: 'rf', aussage: 'Frau Navarro muss schon um halb neun da sein.', loesung: true },
        { typ: 'rf', aussage: 'Der Teil Sprechen ist am Vormittag.', loesung: false },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'text',
      titel: 'Schreiben',
      anweisung: 'Schreib 25-35 Wörter. ~~(Escribe 25-35 palabras.)~~',
      aufgabe: 'Du machst bald das Zertifikat A2. Schreib einer Freundin eine kurze E-Mail.',
      punkte: [
        'Warum lernst du Deutsch?',
        'Wann machst du die Prüfung?',
        'Wie lernst du? ~~(¿Cómo estudias?)~~',
      ],
      minWoerter: 25,
      beispielLoesung: 'Liebe Ana, ich lerne Deutsch. Ich möchte in Berlin arbeiten. Ich mache die Prüfung im Juni in einem Prüfungszentrum. Ich lerne jeden Tag mit meinem Kurs. Liebe Grüße, Paula',
    },
    {
      typ: 'sprechen',
      titel: 'Sprechen',
      anweisung: 'Stell dich vor. Sprich 45 Sekunden. ~~(Preséntate. Habla 45 segundos.)~~',
      aufgabe: 'Du bist neu im A2-Kurs. Stell dich der Gruppe vor.',
      punkte: [
        'dein Name und dein Land',
        'deine Stadt und deine Arbeit',
        'Welcher Prüfungsteil ist leicht für dich?',
        'Welcher Prüfungsteil ist schwer für dich?',
      ],
      redemittel: ['Ich heiße … und komme aus …', 'Ich wohne in … und arbeite als …', 'Der Teil … ist leicht für mich.', 'Der Teil … ist schwer für mich.'],
      maxSekunden: 45,
      beispielLoesung: 'Hallo! Ich heiße Daniela und ich komme aus Mexiko. Ich wohne jetzt in Leipzig und arbeite als Köchin in einem Restaurant. Bald mache ich das Zertifikat A2. Der Teil Lesen ist leicht für mich, ich lese gern auf Deutsch. Aber der Teil Hören ist schwer für mich. Die Leute sprechen so schnell! Also höre ich jetzt jeden Tag ein bisschen Radio.',
    },
  ],
}
