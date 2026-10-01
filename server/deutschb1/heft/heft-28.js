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
      typ: 'hoeren',
      titel: 'Hören',
      anweisung: 'Hör die Meinung einer Hörerin im Radio. Löse dann die vier Aufgaben.',
      audio: {
        transcript: 'Guten Morgen, hier spricht Ivana aus Leipzig. Ihr Thema heute finde ich sehr interessant: Braucht man wirklich ein Fitnessstudio? Meiner Meinung nach nicht. Ein Studio ist teuer, und viele Leute gehen nach ein paar Wochen nicht mehr hin. Ich habe selbst diese Erfahrung gemacht. Vor zwei Jahren habe ich jeden Monat vierzig Euro bezahlt, aber ich war insgesamt nur dreimal dort. Deshalb habe ich damit aufgehört. Jetzt laufe ich nicht mehr im Studio, sondern im Park, zweimal pro Woche mit einer Nachbarin. Das kostet nichts, und zu zweit macht es mehr Spaß. Ein Nachteil ist natürlich das Wetter: Im Winter ist es oft kalt und dunkel. Trotzdem finde ich insgesamt: Sport an der frischen Luft ist die bessere Lösung.',
      },
      items: [
        { typ: 'rf', aussage: 'Ivana findet, dass man ein Fitnessstudio braucht.', loesung: false },
        {
          typ: 'mc',
          frage: 'Wie oft war Ivana im Fitnessstudio?',
          optionen: ['dreimal', 'zweimal pro Woche', 'jeden Monat einmal'],
          loesung: 0,
        },
        {
          typ: 'mc',
          frage: 'Wo macht Ivana jetzt Sport?',
          optionen: ['zu Hause', 'im Studio', 'im Park'],
          loesung: 2,
        },
        { typ: 'rf', aussage: 'Ivana nennt auch einen Nachteil: das Wetter im Winter.', loesung: true },
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
    {
      typ: 'sprechen',
      titel: 'Sprechen',
      anweisung: 'Sag deine Meinung zu einem Vorschlag. Sprich höchstens 90 Sekunden.',
      aufgabe: 'In einem Forum liest du: „Kinder unter zwölf Jahren sollen kein eigenes Handy haben.“ Was denkst du darüber?',
      punkte: [
        'Sag klar deine Meinung.',
        'Nenne mindestens einen Grund.',
        'Gib ein Beispiel aus deiner Erfahrung.',
        'Beende deine Antwort mit einem Schlusssatz.',
      ],
      redemittel: ['Meiner Meinung nach …', 'Ich finde, dass …', 'Ich habe zum Beispiel …', 'Insgesamt finde ich: …'],
      maxSekunden: 90,
      beispielLoesung: 'Das Thema finde ich sehr wichtig, weil meine Nichte zehn Jahre alt ist und unbedingt ein Handy haben will. Meiner Meinung nach ist der Vorschlag richtig. Ich finde, dass Kinder unter zwölf Jahren noch kein eigenes Handy brauchen. Sie sitzen sonst zu lange vor dem Bildschirm und spielen weniger draußen. Ich habe zum Beispiel bei meinem Neffen gesehen, dass er mit dem Handy viel schlechter geschlafen hat. Deshalb haben seine Eltern es abends immer weggenommen. Natürlich hat ein Handy auch einen Vorteil: Die Eltern können ihr Kind immer anrufen. Aber dafür reicht ein einfaches Telefon ohne Internet. Insgesamt finde ich: Ein eigenes Handy ist erst ab zwölf Jahren sinnvoll.',
    },
  ],
}
