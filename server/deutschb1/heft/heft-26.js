// Übungsheft B1 — Lektion 26: Modul Schreiben — Überblick & Bewertung
export default {
  lektion: 26,
  titel: 'Übungsheft — Modul Schreiben: Überblick',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Hier übst du die Punkte der Checkliste. Wähle die richtige Form oder ergänze.',
      items: [
        { typ: 'mc', frage: 'Ich glaube, dass ich am Samstag ___.', optionen: ['kann kommen', 'kommen kann', 'komme kann'], loesung: 1 },
        { typ: 'mc', frage: 'Am Ende ___ meinen Text noch einmal.', optionen: ['kontrolliere ich', 'ich kontrolliere', 'kontrolliert ich'], loesung: 0 },
        { typ: 'mc', frage: 'Welches Zeichen steht nach der Anrede? „Liebe Anna___ ich danke dir …“', optionen: [':', '.', ','], loesung: 2 },
        {
          typ: 'luecke',
          text: 'In der Aufgabe stehen drei {1}. Du musst alle behandeln. Denk auch an den {2}: Schreibst du einem Freund oder deinem Chef?',
          bank: ['Punkte', 'Punkten', 'Empfänger', 'Empfängern'],
          loesungen: { 1: 'Punkte', 2: 'Empfänger' },
        },
        {
          typ: 'luecke',
          text: 'Eine E-Mail beginnt mit der {1} und endet mit einer {2}. Vor „weil“ steht ein {3}.',
          bank: ['Anrede', 'Grußformel', 'Komma', 'Punkt', 'Bewertung'],
          loesungen: { 1: 'Anrede', 2: 'Grußformel', 3: 'Komma' },
        },
        {
          typ: 'zuordnen',
          links: ['Erfüllung', 'Kohärenz', 'Wortschatz', 'Strukturen'],
          rechts: [
            'Sind alle Punkte der Aufgabe im Text?',
            'Ist der Text logisch verbunden?',
            'Gibt es Abwechslung bei den Wörtern?',
            'Sind Verbposition und Endungen korrekt?',
          ],
          loesung: {
            'Erfüllung': 'Sind alle Punkte der Aufgabe im Text?',
            'Kohärenz': 'Ist der Text logisch verbunden?',
            'Wortschatz': 'Gibt es Abwechslung bei den Wörtern?',
            'Strukturen': 'Sind Verbposition und Endungen korrekt?',
          },
        },
        { typ: 'satzbau', woerter: ['du', 'weil', 'Ich', 'kommst', 'mich', 'freue'], loesung: 'Ich freue mich, weil du kommst.' },
        { typ: 'satzbau', woerter: ['keine', 'habe', 'Morgen', 'leider', 'Zeit', 'ich'], loesung: 'Morgen habe ich leider keine Zeit.' },
        {
          typ: 'korrektur',
          optionen: ['Ich schreibe eine E-Mail an meine Lehrerin.', 'Ich schreibe eine e-mail an meine lehrerin.'],
          loesung: 0,
          warum: 'Todos los sustantivos van con **mayúscula**: *die E-Mail, die Lehrerin*. Es el error n.º 1 del hispanohablante.',
        },
        {
          typ: 'korrektur',
          optionen: ['Ich komme nicht, weil ich bin krank.', 'Ich komme nicht, weil ich krank bin.'],
          loesung: 1,
          warum: 'Tras *weil* el verbo conjugado va **al final**: *…, weil ich krank **bin**.* En español el orden no cambia; en alemán sí.',
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies die E-Mail der Kursleiterin. Löse dann die vier Aufgaben.',
      textTitel: 'E-Mail: Probetest Schreiben',
      text: 'Liebe Kursteilnehmerinnen und Kursteilnehmer,\nam Samstag, dem 14. März, schreiben wir den Probetest im Modul Schreiben. Wir beginnen um 9:30 Uhr in Raum 12. Sie haben 60 Minuten für drei Texte, die Reihenfolge wählen Sie selbst. Bitte bringen Sie einen Kuli mit. Wörterbücher sind nicht erlaubt. Ich korrigiere Ihre Texte mit den vier Kriterien der Prüfung und schicke Ihnen die Bewertung eine Woche später per E-Mail. Am Dienstag danach besprechen wir die typischen Fehler gemeinsam im Kurs. Wer am Samstag nicht kommen kann, sagt mir bitte bis Donnerstag Bescheid. Dann bekommen Sie die Aufgaben per Post und können die Texte zu Hause schreiben.\nMit freundlichen Grüßen\nKatrin Vogel',
      items: [
        { typ: 'rf', aussage: 'Die Teilnehmer müssen die Texte in einer festen Reihenfolge schreiben.', loesung: false },
        { typ: 'rf', aussage: 'Im Probetest darf man kein Wörterbuch benutzen.', loesung: true },
        {
          typ: 'mc',
          frage: 'Wann bekommen die Teilnehmer ihre Bewertung?',
          optionen: ['direkt nach dem Test', 'eine Woche nach dem Test', 'am Donnerstag vor dem Test'],
          loesung: 1,
        },
        {
          typ: 'mc',
          frage: 'Was passiert, wenn jemand am Samstag keine Zeit hat?',
          optionen: ['Er schreibt den Test am Dienstag im Kurs.', 'Er kann den Test nicht machen.', 'Er schreibt die Texte zu Hause.'],
          loesung: 2,
        },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'formular',
      titel: 'Schreiben',
      anweisung: 'Lies die E-Mail von Rashid. Ergänze dann das Anmeldeformular für die Schreibwerkstatt.',
      quelle: 'Liebe Frau Vogel, mein Name ist Rashid Karimi. Ich möchte gern an der Schreibwerkstatt teilnehmen. Am schwierigsten ist für mich Teil 2, der Forumsbeitrag. Meine häufigsten Fehler sind Kommas und die Verbposition. Am besten passt mir der Termin am Mittwochabend. Viele Grüße, Rashid Karimi',
      felder: [
        { id: 'name', label: 'Name', erwartet: ['Rashid Karimi', 'Karimi'] },
        { id: 'empfaenger', label: 'Empfängerin der E-Mail', erwartet: ['Frau Vogel', 'Vogel', 'Katrin Vogel'] },
        { id: 'teil', label: 'Schwierigster Teil', erwartet: ['Teil 2', 'Teil 2, der Forumsbeitrag', 'Teil 2 (Forumsbeitrag)', 'der Forumsbeitrag', 'Forumsbeitrag'] },
        { id: 'fehler', label: 'Häufige Fehler', erwartet: ['Kommas und die Verbposition', 'Kommas und Verbposition', 'Kommas, Verbposition', 'Komma und Verbposition'] },
        { id: 'termin', label: 'Wunschtermin', erwartet: ['Mittwochabend', 'am Mittwochabend', 'Mittwoch', 'Mittwoch abend'] },
      ],
    },
  ],
}
