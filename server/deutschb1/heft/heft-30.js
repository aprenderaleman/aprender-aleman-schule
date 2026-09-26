// Übungsheft B1 — Lektion 30: Modul Sprechen — Überblick & Bewertung
export default {
  lektion: 30,
  titel: 'Übungsheft — Modul Sprechen',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Hier übst du die Wörter rund um die mündliche Prüfung. Wähle oder ergänze das passende Wort.',
      items: [
        { typ: 'mc', frage: 'Ich habe Sie nicht verstanden. Können Sie die Frage bitte ___?', optionen: ['bewerten', 'wiederholen', 'nachfragen'], loesung: 1 },
        { typ: 'mc', frage: 'Im zweiten Teil hältst du eine ___ über ein Alltagsthema.', optionen: ['Präsentation', 'Paarprüfung', 'Aussprache'], loesung: 0 },
        { typ: 'mc', frage: 'Sprich bitte langsam und ___, dann verstehen dich alle.', optionen: ['dringend', 'günstig', 'deutlich'], loesung: 2 },
        {
          typ: 'luecke',
          text: 'Das Modul Sprechen ist eine {1}: Du sprichst mit einem Partner. Vor dem Gespräch hast du etwas {2}: Du kannst dir Notizen machen. Die {3} hören genau zu und {4} dein Deutsch.',
          bank: ['Paarprüfung', 'Vorbereitungszeit', 'Prüfer', 'bewerten', 'wiederholen', 'Präsentation'],
          loesungen: { 1: 'Paarprüfung', 2: 'Vorbereitungszeit', 3: 'Prüfer', 4: 'bewerten' },
        },
        {
          typ: 'luecke',
          text: 'Bei Ja/Nein-Fragen geht die {1} am Ende nach oben. Bei „Arbeit“ liegt der {2} auf der ersten Silbe. Nach der Präsentation gibt dir dein Partner ein kurzes {3}.',
          bank: ['Satzmelodie', 'Wortakzent', 'Feedback', 'Aussprache'],
          loesungen: { 1: 'Satzmelodie', 2: 'Wortakzent', 3: 'Feedback' },
        },
        {
          typ: 'zuordnen',
          links: ['Die Prüferin spricht zu schnell.', 'Du hast die Frage nicht verstanden.', 'Dir fehlt ein Wort.', 'Du brauchst Zeit zum Denken.', 'Dein Partner hat seine Präsentation beendet.'],
          rechts: ['Können Sie bitte langsamer sprechen?', 'Können Sie die Frage bitte wiederholen?', 'Wie sagt man das auf Deutsch?', 'Einen Moment, bitte.', 'Danke für deine Präsentation!'],
          loesung: {
            'Die Prüferin spricht zu schnell.': 'Können Sie bitte langsamer sprechen?',
            'Du hast die Frage nicht verstanden.': 'Können Sie die Frage bitte wiederholen?',
            'Dir fehlt ein Wort.': 'Wie sagt man das auf Deutsch?',
            'Du brauchst Zeit zum Denken.': 'Einen Moment, bitte.',
            'Dein Partner hat seine Präsentation beendet.': 'Danke für deine Präsentation!',
          },
        },
        {
          typ: 'satzbau',
          woerter: ['das', 'sagen', 'Können', 'langsamer', 'bitte', 'Sie'],
          loesung: 'Können Sie das bitte langsamer sagen?',
        },
        {
          typ: 'satzbau',
          woerter: ['nach', 'Frage', 'ich', 'verstehe', 'weil', 'Ich', 'die', 'nicht', 'frage'],
          loesung: 'Ich frage nach, weil ich die Frage nicht verstehe.',
        },
        {
          typ: 'korrektur',
          optionen: ['Können Sie das bitte repetieren?', 'Können Sie das bitte wiederholen?'],
          loesung: 1,
          warum: '«Repetir» = **wiederholen**. *Repetieren* no se usa para pedir que alguien repita una frase.',
        },
        {
          typ: 'korrektur',
          optionen: ['Danke für deine Präsentation! Ich habe eine Frage an dich.', 'Danke für deine Präsentation! Ich habe eine Frage für dich.'],
          loesung: 0,
          warum: '«Tengo una pregunta **para** ti» = *eine Frage **an** dich* (an + Akkusativ). *für* es el calco del español.',
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies den Forumsbeitrag. Löse dann die vier Aufgaben.',
      textTitel: 'Forum „Deutsch lernen“ — Beitrag von Amira, 27',
      text: 'Letzte Woche hatte ich meine mündliche Prüfung, und ich möchte euch von meiner Erfahrung erzählen. Die Paarprüfung hat ungefähr fünfzehn Minuten gedauert. Mein Partner war ein junger Mann aus Brasilien, sehr nett und ruhig. Zuerst haben wir zusammen einen Ausflug geplant. Das war einfach, weil wir beide gern wandern. Dann habe ich meine Präsentation gehalten. Mein Thema war „Sport im Alltag“. In der Vorbereitungszeit habe ich nur Stichwörter notiert, keine ganzen Sätze. Das war ein guter Tipp! Am Ende hat mir die Prüferin eine Frage gestellt, aber sie hat sehr schnell gesprochen. Ich habe höflich nachgefragt, und sie hat die Frage wiederholt. Mein Rat: Sprecht langsam und deutlich und habt keine Angst vor Fehlern!',
      items: [
        { typ: 'rf', aussage: 'Amira und ihr Partner haben zusammen eine Party geplant.', loesung: false },
        { typ: 'rf', aussage: 'In der Vorbereitungszeit hat Amira nur Stichwörter notiert.', loesung: true },
        {
          typ: 'mc',
          frage: 'Warum hat Amira nachgefragt?',
          optionen: ['Die Frage war zu schwierig.', 'Die Prüferin hat sehr schnell gesprochen.', 'Sie kannte ein Wort nicht.'],
          loesung: 1,
        },
        {
          typ: 'mc',
          frage: 'Welchen Rat gibt Amira?',
          optionen: ['Man soll ganze Sätze notieren.', 'Man soll möglichst schnell sprechen.', 'Man soll langsam und deutlich sprechen.'],
          loesung: 2,
        },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'formular',
      titel: 'Schreiben',
      anweisung: 'Lies die Nachricht. Ergänze dann die Anmeldung für den Übungstag.',
      quelle: 'Hallo, ich heiße Tomás Herrera und möchte am Übungstag für das Modul Sprechen teilnehmen. Am liebsten komme ich am Samstag, den 12. Oktober, vormittags. Ich übe mit meiner Freundin Ewa Nowak, sie ist meine Partnerin für die Paarprüfung. Das Thema meiner Präsentation ist „Einkaufen im Internet“.',
      felder: [
        { id: 'name', label: 'Name', erwartet: ['Tomás Herrera', 'Herrera', 'Tomas Herrera', 'Tomás', 'Tomas'] },
        { id: 'tag', label: 'Tag', erwartet: ['Samstag, den 12. Oktober', 'Samstag, 12. Oktober', '12. Oktober', 'Samstag', 'am Samstag', '12.10.', '12.10'] },
        { id: 'zeit', label: 'Vormittags oder nachmittags?', erwartet: ['vormittags', 'Vormittags', 'am Vormittag', 'Vormittag'] },
        { id: 'partner', label: 'Partner/in für die Paarprüfung', erwartet: ['Ewa Nowak', 'Nowak', 'Ewa'] },
        { id: 'thema', label: 'Thema der Präsentation', erwartet: ['Einkaufen im Internet', '„Einkaufen im Internet“', 'Einkaufen im Internet.'] },
      ],
    },
  ],
}
