// Übungsheft B1 — Lektion 28: Schreiben Teil 2 — Forumsbeitrag (Meinung)
export default {
  lektion: 28,
  titel: 'Übungsheft — Forumsbeitrag',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Hier übst du die Sprache der Meinung. Wähle oder ergänze das passende Wort.',
      items: [
        { typ: 'mc', frage: 'Ich finde, dass Online-Kurse sehr praktisch ___.', optionen: ['sein', 'ist', 'sind'], loesung: 2 },
        { typ: 'mc', frage: 'Du hast recht, Lea. Ich stimme ___ zu.', optionen: ['dich', 'dir', 'du'], loesung: 1 },
        { typ: 'mc', frage: 'Mit deinem Vorschlag bin ich ___.', optionen: ['zustimmen', 'gefunden', 'einverstanden'], loesung: 2 },
        {
          typ: 'luecke',
          text: 'Ein großer {1} von Online-Shopping ist, {2} man Zeit spart. Ein {3} ist aber, dass man Kleidung nicht anprobieren kann.',
          bank: ['Vorteil', 'dass', 'Nachteil', 'weil', 'Meinung'],
          loesungen: { 1: 'Vorteil', 2: 'dass', 3: 'Nachteil' },
        },
        {
          typ: 'luecke',
          text: 'Ich habe die {1} gemacht, dass Bücher auf dem Flohmarkt sehr {2} sind. {3} kaufe ich sie fast nie neu.',
          bank: ['Erfahrung', 'günstig', 'Deshalb', 'Trotzdem', 'Meinung'],
          loesungen: { 1: 'Erfahrung', 2: 'günstig', 3: 'Deshalb' },
        },
        {
          typ: 'zuordnen',
          links: ['Meiner Meinung nach …', '…, weil …', 'Zum Beispiel habe ich …', 'Trotzdem …', 'Insgesamt finde ich …'],
          rechts: ['Meinung', 'Grund', 'eigenes Beispiel', 'die andere Seite', 'Schluss'],
          loesung: {
            'Meiner Meinung nach …': 'Meinung',
            '…, weil …': 'Grund',
            'Zum Beispiel habe ich …': 'eigenes Beispiel',
            'Trotzdem …': 'die andere Seite',
            'Insgesamt finde ich …': 'Schluss',
          },
        },
        {
          typ: 'satzbau',
          woerter: ['gesund', 'finde', 'Radfahren', 'Ich', 'ist', 'dass'],
          loesung: 'Ich finde, dass Radfahren gesund ist.',
        },
        {
          typ: 'satzbau',
          woerter: ['kein', 'nach', 'braucht', 'Meiner', 'Auto', 'man', 'Meinung'],
          loesung: 'Meiner Meinung nach braucht man kein Auto.',
        },
        {
          typ: 'korrektur',
          optionen: ['Meiner Meinung nach, das ist eine gute Idee.', 'Meiner Meinung nach ist das eine gute Idee.'],
          loesung: 1,
          warum: '*Meiner Meinung nach* ocupa la posición 1: el verbo va justo detrás y **sin coma**. En español decimos «En mi opinión, esto es…», pero en alemán no.',
        },
        {
          typ: 'korrektur',
          optionen: ['Das Ticket ist teuer. Trotzdem fahre ich oft mit dem Bus.', 'Das Ticket ist teuer. Trotzdem ich fahre oft mit dem Bus.'],
          loesung: 0,
          warum: 'Tras **trotzdem** (y deshalb) viene directamente el verbo: *Trotzdem fahre ich*. No es un «sin embargo» con sujeto delante.',
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies den Forumsbeitrag. Löse dann die vier Aufgaben.',
      textTitel: 'Forum „Arbeiten von zu Hause“ — Beitrag von Farid, 34',
      text: 'Das Thema finde ich sehr wichtig, denn ich arbeite seit zwei Jahren drei Tage pro Woche im Homeoffice. Meiner Meinung nach hat das viele Vorteile. Ich spare jeden Tag eine Stunde Fahrzeit, und mein Mittagessen koche ich selbst. Das ist gesünder und auch günstiger als in der Kantine. Ich habe aber auch die Erfahrung gemacht, dass man zu Hause oft zu lange arbeitet. Letzten Winter habe ich manchmal bis zehn Uhr abends am Computer gesessen. Deshalb habe ich jetzt feste Arbeitszeiten. Ein Nachteil ist auch, dass ich meine Kollegen selten sehe. Trotzdem möchte ich nicht jeden Tag zurück ins Büro. Insgesamt finde ich: Zwei oder drei Tage zu Hause sind ideal.',
      items: [
        { typ: 'rf', aussage: 'Farid arbeitet jeden Tag zu Hause.', loesung: false },
        { typ: 'rf', aussage: 'Zu Hause isst Farid günstiger als in der Kantine.', loesung: true },
        {
          typ: 'mc',
          frage: 'Welche Erfahrung hat Farid gemacht?',
          optionen: ['Man spart zu Hause keine Zeit.', 'Man arbeitet zu Hause oft zu lange.', 'Man isst zu Hause ungesund.'],
          loesung: 1,
        },
        {
          typ: 'mc',
          frage: 'Was ist Farids Meinung am Ende?',
          optionen: ['Er möchte wieder jeden Tag ins Büro.', 'Homeoffice hat nur Nachteile.', 'Zwei oder drei Tage zu Hause sind am besten.'],
          loesung: 2,
        },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'formular',
      titel: 'Schreiben',
      anweisung: 'Lies den Forumsbeitrag. Ergänze dann die Notizen zum Bauplan.',
      quelle: 'Thema im Forum: „Braucht man auf dem Land ein Auto?“ — Lucía Ortega schreibt: Ich bin dafür. Ich wohne in einem kleinen Dorf, und der Bus fährt nur zweimal am Tag. Zum Beispiel habe ich letzten Monat den letzten Bus verpasst und musste ein Taxi nehmen. Das war sehr teuer. Insgesamt finde ich: Ohne Auto geht es auf dem Land nicht.',
      felder: [
        { id: 'name', label: 'Name', erwartet: ['Lucía Ortega', 'Ortega', 'Lucia Ortega', 'Lucía', 'Lucia'] },
        { id: 'thema', label: 'Thema', erwartet: ['Braucht man auf dem Land ein Auto?', 'Braucht man auf dem Land ein Auto', 'Auto auf dem Land', 'ein Auto auf dem Land', 'Auto'] },
        { id: 'meinung', label: 'Meinung: dafür oder dagegen?', erwartet: ['dafür', 'Dafür', 'Ich bin dafür'] },
        { id: 'grund', label: 'Grund: Wie oft fährt der Bus?', erwartet: ['zweimal am Tag', 'nur zweimal am Tag', 'zweimal', 'nur zweimal', 'zwei Mal am Tag', '2-mal am Tag', '2 Mal am Tag'] },
        { id: 'beispiel', label: 'Beispiel: Was musste sie nehmen?', erwartet: ['ein Taxi', 'Taxi', 'das Taxi'] },
      ],
    },
  ],
}
