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
      typ: 'hoeren',
      titel: 'Hören',
      anweisung: 'Du hörst ein Telefongespräch mit einem Prüfungszentrum. Entscheide bei jeder Aufgabe, welche Lösung dem Gehörten entspricht.',
      audio: {
        transcript: 'Frau: Prüfungszentrum am Stadtpark, mein Name ist Lang, guten Tag.\nMann: Guten Tag, hier spricht Daniel Ferrer. Ich möchte mich für die B2-Prüfung anmelden, am liebsten für den Termin im Mai.\nFrau: Im Mai sind leider alle Plätze vergeben, Herr Ferrer. Der nächste freie Termin ist am vierzehnten Juni.\nMann: Schade. Dann nehme ich den Juni. Kann ich alle vier Module an einem Tag ablegen?\nFrau: Das geht, aber Sie können sie auch verteilen. Viele legen zuerst nur die schriftlichen Module ab und das Sprechen erst im Juli.\nMann: Das ist mir zu spät. Ich brauche das Zeugnis schon im August für meine Berufsanerkennung, deshalb mache ich lieber alles im Juni.\nFrau: In Ordnung. Das Gesamtpaket kostet zweihundertvierzig Euro. Auf unserer alten Webseite stand noch zweihundertvierzehn, aber dieser Preis gilt nicht mehr.\nMann: Gut. Und wann bekomme ich das Ergebnis?\nFrau: Nach etwa vier Wochen können Sie es online abrufen. Das Zeugnis kommt zwei Wochen später per Post.\nMann: Dann habe ich es rechtzeitig. Vielen Dank!',
      },
      items: [
        { typ: 'rf', aussage: 'Herr Ferrer bekommt einen Platz für den Prüfungstermin im Mai.', loesung: false },
        {
          typ: 'mc',
          frage: 'Wie möchte Herr Ferrer die Module ablegen?',
          optionen: ['die schriftlichen Module im Juni, das Sprechen im Juli', 'alle vier Module im Juni', 'zuerst nur das Modul Sprechen'],
          loesung: 1,
        },
        { typ: 'mc', frage: 'Wie viel kostet das Gesamtpaket aktuell?', optionen: ['204 Euro', '214 Euro', '240 Euro'], loesung: 2 },
        { typ: 'rf', aussage: 'Etwa vier Wochen nach der Prüfung kann Herr Ferrer sein Ergebnis im Internet sehen.', loesung: true },
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
    {
      typ: 'sprechen',
      titel: 'Sprechen',
      anweisung: 'Halte einen kurzen Vortrag. Sprich etwa 90 Sekunden frei und in ganzen Sätzen.',
      aufgabe: 'Ein Kollege möchte das Zertifikat B2 machen, weiß aber nicht, wie die Prüfung funktioniert. Erkläre ihm in einem kurzen Vortrag von etwa 90 Sekunden das Wichtigste.',
      punkte: [
        'Nenne die vier Module und sag, was man dort jeweils macht.',
        'Erkläre, wie viele Punkte man braucht und was passiert, wenn man in einem Modul durchfällt.',
        'Sag, ob du alle Module an einem Tag ablegen möchtest oder sie lieber verteilst, und begründe deine Entscheidung.',
      ],
      redemittel: ['Die Prüfung besteht aus …', 'Pro Modul kann man … erreichen.', 'Das Gute daran ist, dass …', 'Ich persönlich möchte …, weil …'],
      maxSekunden: 90,
      beispielLoesung: 'Also, die B2-Prüfung besteht aus vier Modulen: Lesen, Hören, Schreiben und Sprechen. Beim Lesen und Hören löst du Aufgaben zu Texten und Gesprächen, zum Beispiel zu einem Interview. Beim Schreiben verfasst du einen Forumsbeitrag und eine formelle Nachricht, und beim Sprechen hältst du einen kurzen Vortrag und diskutierst über ein Thema. Wichtig ist, dass jedes Modul einzeln bewertet wird. Pro Modul kannst du hundert Punkte erreichen, und ab sechzig Punkten hast du bestanden. Das Gute daran ist: Wenn du in einem Modul durchfällst, musst du nur dieses eine Modul wiederholen, die anderen Ergebnisse bleiben gültig. Ich persönlich möchte die Module auf zwei Termine verteilen, weil ich nach ein paar Stunden schnell müde werde. Zuerst lege ich Lesen und Hören ab und ein paar Wochen später Schreiben und Sprechen. So kann ich mich besser konzentrieren. Mein Tipp für dich: Melde dich früh an, denn die beliebten Termine sind schnell voll.',
    },
  ],
}
