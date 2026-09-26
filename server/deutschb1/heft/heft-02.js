// Übungsheft B1 — Lektion 02: Das digitale Prüfungsformat (CBT)
export default {
  lektion: 2,
  titel: 'Übungsheft — Prüfung am Computer',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Wähle die richtige Form oder ergänze die Lücken.',
      items: [
        { typ: 'mc', frage: 'Klick die richtige Antwort ___.', optionen: ['an', 'ab', 'auf'], loesung: 0 },
        { typ: 'mc', frage: 'Ich habe die Antwort schon ___.', optionen: ['geanklickt', 'anklickt', 'angeklickt'], loesung: 2 },
        { typ: 'mc', frage: 'Ich tippe den Text ___ deutschen Tastatur.', optionen: ['mit die', 'mit der', 'mit den'], loesung: 1 },
        {
          typ: 'luecke',
          text: 'Beim Hören trägst du {1}. Die {2} stellst du selbst ein – nicht zu laut und nicht zu leise.',
          bank: ['Kopfhörer', 'Lautstärke', 'Tastatur', 'Restzeit'],
          loesungen: { 1: 'Kopfhörer', 2: 'Lautstärke' },
        },
        {
          typ: 'luecke',
          text: 'Die {1} siehst du oben rechts auf dem {2}. Der Text ist lang, deshalb musst du nach unten {3}.',
          bank: ['Restzeit', 'Bildschirm', 'scrollen', 'tippen', 'Maus'],
          loesungen: { 1: 'Restzeit', 2: 'Bildschirm', 3: 'scrollen' },
        },
        { typ: 'satzbau', woerter: ['noch', 'Antwort', 'Du', 'ändern', 'deine', 'kannst'], loesung: 'Du kannst deine Antwort noch ändern.', alt: ['Du kannst noch deine Antwort ändern.'] },
        { typ: 'satzbau', woerter: ['weiter', 'die', 'Markiere', 'mach', 'Aufgabe', 'und', 'schwere'], loesung: 'Markiere die schwere Aufgabe und mach weiter.' },
        {
          typ: 'zuordnen',
          links: ['anklicken', 'markieren', 'tippen', 'scrollen', 'ändern'],
          rechts: ['eine Antwort mit der Maus wählen', 'sich eine Aufgabe für später merken', 'mit der Tastatur schreiben', 'im Text nach unten gehen', 'etwas anders machen'],
          loesung: {
            'anklicken': 'eine Antwort mit der Maus wählen',
            'markieren': 'sich eine Aufgabe für später merken',
            'tippen': 'mit der Tastatur schreiben',
            'scrollen': 'im Text nach unten gehen',
            'ändern': 'etwas anders machen',
          },
        },
        {
          typ: 'korrektur',
          optionen: ['Am Ende kontrolliere ich die Antworten.', 'Am Ende ich kontrolliere die Antworten.'],
          loesung: 0,
          warum: 'Si la frase empieza con otra cosa (*Am Ende*), el **verbo** sigue en la posición 2 y el sujeto va detrás: *Am Ende **kontrolliere ich**…*',
        },
        {
          typ: 'korrektur',
          optionen: ['Wenn eine Aufgabe schwer ist, ich markiere sie.', 'Wenn eine Aufgabe schwer ist, markiere ich sie.'],
          loesung: 1,
          warum: 'La frase con **wenn** ocupa la posición 1. Por eso la frase principal empieza con el **verbo**: *…, **markiere ich** sie.*',
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies die E-Mail und löse die Aufgaben.',
      textTitel: 'E-Mail: Ihre digitale Prüfung am 14. März',
      text: 'Sehr geehrte Frau Nowak,\nvielen Dank für Ihre Anmeldung. Ihre Prüfung findet am 14. März am Computer statt. Bitte seien Sie um 8:30 Uhr da und bringen Sie Ihren Ausweis mit. Handys und Notizen bleiben in einem Schrank vor dem Raum. Das Modul Lesen beginnt um 9 Uhr. Beim Hören bekommen Sie eigene Kopfhörer, und die Lautstärke stellen Sie selbst ein. Die Restzeit sehen Sie immer oben rechts auf dem Bildschirm. Ihre Antworten können Sie bis zum Ende der Zeit ändern. Das Modul Sprechen machen Sie am Nachmittag mit einer Partnerin oder einem Partner – nicht am Computer. Bei Fragen rufen Sie uns gern an.\nMit freundlichen Grüßen\nJan Petersen, Prüfungszentrum Nord',
      items: [
        { typ: 'rf', aussage: 'Frau Nowak soll um 9 Uhr kommen.', loesung: false },
        { typ: 'rf', aussage: 'Beim Hören stellt Frau Nowak die Lautstärke selbst ein.', loesung: true },
        {
          typ: 'mc',
          frage: 'Wo sieht Frau Nowak die Restzeit?',
          optionen: ['unten links', 'oben rechts', 'auf einem Blatt Papier'],
          loesung: 1,
        },
        {
          typ: 'mc',
          frage: 'Welches Modul macht Frau Nowak nicht am Computer?',
          optionen: ['das Modul Lesen', 'das Modul Hören', 'das Modul Sprechen'],
          loesung: 2,
        },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'formular',
      titel: 'Schreiben',
      anweisung: 'Lies die Nachricht von Diego. Ergänze dann das Anmeldeformular.',
      quelle: 'Guten Tag, ich heiße Diego Fernández und möchte mich für die digitale Prüfung anmelden. Schreiben und Sprechen habe ich schon bestanden, deshalb mache ich nur noch Lesen und Hören. Am liebsten nehme ich den Termin am 22. Mai. Ich bin am 3. April 1995 in Lima geboren. Sie erreichen mich unter diego.fernandez@beispiel.de.',
      felder: [
        { id: 'name', label: 'Name', erwartet: ['Diego Fernández', 'Fernández', 'Diego Fernandez', 'Fernandez'] },
        { id: 'geburtsdatum', label: 'Geburtsdatum', erwartet: ['3. April 1995', '03.04.1995', '3.4.1995', '03.04.95'] },
        { id: 'module', label: 'Module', erwartet: ['Lesen und Hören', 'Lesen, Hören', 'Lesen + Hören', 'Lesen & Hören', 'Hören und Lesen'] },
        { id: 'termin', label: 'Termin', erwartet: ['22. Mai', '22.05.', '22.5.'] },
        { id: 'email', label: 'E-Mail', erwartet: ['diego.fernandez@beispiel.de'] },
      ],
    },
  ],
}
