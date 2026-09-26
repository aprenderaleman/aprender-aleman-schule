// Übungsheft B2 — Lektion 01: Das Zertifikat B2 im Überblick
export default {
  lektion: 1,
  titel: 'Übungsheft — Die B2-Prüfung',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Hier übst du die Sprache rund um die Prüfung. Wähle die passende Lösung oder ergänze die Lücken.',
      items: [
        { typ: 'mc', frage: 'Wer in einem Modul ___, muss nur dieses Modul wiederholen.', optionen: ['besteht', 'durchfällt', 'ablegt'], loesung: 1 },
        { typ: 'mc', frage: 'Ich habe mich gestern ___ den Prüfungstermin im Juni angemeldet.', optionen: ['an', 'auf', 'für'], loesung: 2 },
        {
          typ: 'luecke',
          text: 'Im Mai hat Lina alle vier Module {1}. Drei Module hat sie {2}, aber im Modul Hören ist sie leider {3}. Jetzt muss sie nur dieses eine Modul {4}.',
          bank: ['abgelegt', 'bestanden', 'durchgefallen', 'wiederholen', 'angemeldet'],
          loesungen: { 1: 'abgelegt', 2: 'bestanden', 3: 'durchgefallen', 4: 'wiederholen' },
        },
        {
          typ: 'luecke',
          text: 'Die {1} zur Prüfung läuft online. Das {2} kannst du nach einigen Wochen im Internet abrufen, das {3} mit Stempel und Unterschrift kommt später per Post.',
          bank: ['Anmeldung', 'Ergebnis', 'Zeugnis', 'Punktzahl', 'Modul'],
          loesungen: { 1: 'Anmeldung', 2: 'Ergebnis', 3: 'Zeugnis' },
        },
        {
          typ: 'zuordnen',
          links: ['eine Prüfung', 'die nötige Punktzahl', 'das Ergebnis online', 'den Modellsatz', 'sich für einen Termin'],
          rechts: ['ablegen', 'erreichen', 'abrufen', 'durcharbeiten', 'anmelden'],
          loesung: {
            'eine Prüfung': 'ablegen',
            'die nötige Punktzahl': 'erreichen',
            'das Ergebnis online': 'abrufen',
            'den Modellsatz': 'durcharbeiten',
            'sich für einen Termin': 'anmelden',
          },
        },
        { typ: 'mc', frage: 'Ich melde mich früh an, ___ die beliebten Termine schnell voll sind.', optionen: ['weil', 'deshalb', 'obwohl'], loesung: 0 },
        {
          typ: 'satzbau',
          woerter: ['bestanden', 'ob', 'Ich', 'das', 'weiß', 'habe', 'ich', 'Modul', 'nicht'],
          loesung: 'Ich weiß nicht, ob ich das Modul bestanden habe.',
          alt: ['Ob ich das Modul bestanden habe, weiß ich nicht.'],
        },
        {
          typ: 'satzbau',
          woerter: ['an', 'mich', 'Hören', 'Deshalb', 'nur', 'ich', 'für', 'melde'],
          loesung: 'Deshalb melde ich mich nur für Hören an.',
        },
        {
          typ: 'korrektur',
          optionen: ['Leider habe ich das Modul Schreiben suspendiert.', 'Leider bin ich im Modul Schreiben durchgefallen.'],
          loesung: 1,
          warum: '«Suspender un examen» = **durchfallen** (con *sein*). *Suspendieren* significa «suspender a alguien de su cargo»: falso amigo.',
        },
        {
          typ: 'korrektur',
          optionen: ['Im März habe ich die Prüfung abgelegt.', 'Im März habe ich mich zur Prüfung präsentiert.'],
          loesung: 0,
          warum: '«Presentarse a un examen» = **eine Prüfung ablegen** (o *machen*). *Sich präsentieren* es «mostrarse, presentarse ante un público».',
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies den Forumsbeitrag. Entscheide dann, welche Lösung dem Text entspricht.',
      textTitel: 'Forumsbeitrag: Meine Erfahrung mit der B2-Prüfung',
      text: 'Hallo zusammen, ich möchte euch kurz von meiner Prüfung erzählen, weil viele hier gerade unsicher sind. Ich habe mich im Januar angemeldet und im März alle vier Module an einem Tag abgelegt. Das war anstrengend, aber ich wollte es schnell hinter mich bringen. Vorher habe ich zwei Modellsätze durchgearbeitet. Das hat mir sehr geholfen, weil ich das Format dadurch genau kannte und keine Zeit mit den Anweisungen verloren habe. Nach fünf Wochen konnte ich die Ergebnisse online abrufen: Lesen, Schreiben und Sprechen habe ich bestanden, im Modul Hören bin ich mit 54 Punkten durchgefallen. Zuerst war ich ziemlich enttäuscht. Dann habe ich aber verstanden, dass ich nur dieses eine Modul wiederholen muss, denn die anderen Ergebnisse bleiben gültig. Jetzt höre ich jeden Tag Podcasts und Nachrichten, und im Juni lege ich Hören noch einmal ab. Mein Tipp: Verteilt die Module lieber auf zwei Termine, wenn ihr schnell müde werdet. Viele Grüße, Tomás',
      items: [
        { typ: 'rf', aussage: 'Tomás hat alle vier Module am selben Tag abgelegt.', loesung: true },
        { typ: 'rf', aussage: 'Tomás muss die ganze Prüfung noch einmal machen.', loesung: false },
        {
          typ: 'mc',
          frage: 'Warum haben die Modellsätze Tomás geholfen?',
          optionen: ['Sie waren leichter als die echte Prüfung.', 'Er kannte dadurch das Format genau.', 'Ein Lehrer hat sie mit ihm korrigiert.'],
          loesung: 1,
        },
        {
          typ: 'mc',
          frage: 'Was empfiehlt Tomás den anderen im Forum?',
          optionen: ['sich erst im Juni anzumelden', 'jeden Tag Nachrichten zu lesen', 'die Module auf zwei Termine zu verteilen, wenn man schnell müde wird'],
          loesung: 2,
        },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'text',
      titel: 'Schreiben',
      anweisung: 'Schreib eine formelle E-Mail mit mindestens 60 Wörtern. Achte auf Anrede, Gruß und einen höflichen Ton.',
      aufgabe: 'Du hast an einer Sprachschule die B2-Prüfung abgelegt und ein Modul nicht bestanden. Schreib eine E-Mail an Frau Kaya vom Sekretariat.',
      punkte: [
        'Nenne dein Ergebnis und das Modul, das du wiederholen möchtest.',
        'Frag nach dem nächsten Termin und nach der Gebühr.',
        'Bitte um Informationen zur Anmeldung.',
      ],
      minWoerter: 60,
      beispielLoesung: 'Sehr geehrte Frau Kaya,\nim April habe ich an Ihrer Schule die B2-Prüfung abgelegt. Lesen, Hören und Sprechen habe ich bestanden, im Modul Schreiben bin ich aber mit 55 Punkten leider durchgefallen. Deshalb möchte ich dieses Modul so bald wie möglich wiederholen. Könnten Sie mir bitte mitteilen, wann der nächste Termin stattfindet und wie hoch die Gebühr für ein einzelnes Modul ist? Außerdem wüsste ich gern, ob ich mich online anmelden kann oder persönlich vorbeikommen muss.\nVielen Dank im Voraus für Ihre Antwort.\nMit freundlichen Grüßen\nRafael Ortega',
    },
  ],
}
