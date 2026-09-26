// Übungsheft B1 — Lektion 16: Infinitiv mit zu / um … zu
export default {
  lektion: 16,
  titel: 'Übungsheft — Infinitiv mit zu / um … zu',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Mit zu, ohne zu oder um … zu? Wähle die richtige Form.',
      items: [
        { typ: 'mc', frage: 'Ich habe heute keine Lust, ___.', optionen: ['kochen', 'zu kochen', 'um zu kochen'], loesung: 1 },
        { typ: 'mc', frage: 'Vergiss bitte nicht, deine Oma ___!', optionen: ['anzurufen', 'zu anrufen', 'anrufen'], loesung: 0 },
        {
          typ: 'luecke',
          text: 'Ich habe vor, im Sommer nach Wien {1} fahren. Dort {2} ich meine Tante besuchen.',
          bank: ['zu', 'um', 'möchte', 'versuche'],
          loesungen: { 1: 'zu', 2: 'möchte' },
        },
        {
          typ: 'luecke',
          text: 'Tomasz macht einen Kurs, {1} bessere Chancen {2} haben. Am Montag hat er {3}, jeden Abend zu lernen.',
          bank: ['um', 'zu', 'angefangen', 'gegangen', 'für'],
          loesungen: { 1: 'um', 2: 'zu', 3: 'angefangen' },
        },
        {
          typ: 'luecke',
          text: 'Es ist wichtig, pünktlich {1}. Deshalb versuche ich, jeden Tag früh {2}.',
          bank: ['zu sein', 'sein', 'aufzustehen', 'zu aufstehen'],
          loesungen: { 1: 'zu sein', 2: 'aufzustehen' },
        },
        {
          typ: 'zuordnen',
          links: ['Ich spare Geld,', 'Hast du Zeit,', 'Er hört auf,', 'Wir gehen heute', 'Vergiss nicht,'],
          rechts: ['um ein Fahrrad zu kaufen.', 'mir kurz zu helfen?', 'abends zu rauchen.', 'im See schwimmen.', 'die Tür abzuschließen!'],
          loesung: {
            'Ich spare Geld,': 'um ein Fahrrad zu kaufen.',
            'Hast du Zeit,': 'mir kurz zu helfen?',
            'Er hört auf,': 'abends zu rauchen.',
            'Wir gehen heute': 'im See schwimmen.',
            'Vergiss nicht,': 'die Tür abzuschließen!',
          },
        },
        { typ: 'satzbau', woerter: ['Kino', 'keine', 'zu', 'Ich', 'gehen', 'habe', 'ins', 'Zeit'], loesung: 'Ich habe keine Zeit, ins Kino zu gehen.' },
        { typ: 'satzbau', woerter: ['arbeiten', 'Wien', 'lernt', 'um', 'Sie', 'zu', 'Deutsch', 'in'], loesung: 'Sie lernt Deutsch, um in Wien zu arbeiten.' },
        {
          typ: 'korrektur',
          optionen: ['Ich lerne Deutsch für in Berlin zu studieren.', 'Ich lerne Deutsch, um in Berlin zu studieren.'],
          loesung: 1,
          warum: '«Para + infinitivo» se dice **um … zu**, nunca *für … zu*. *Für* solo va con sustantivo: *für die Prüfung*.',
        },
        {
          typ: 'korrektur',
          optionen: ['Ich möchte heute Abend tanzen.', 'Ich möchte heute Abend zu tanzen.'],
          loesung: 0,
          warum: 'Después de **möchten** y de los verbos modales el infinitivo va **sin zu**.',
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies den Forumsbeitrag. Löse dann die vier Aufgaben.',
      textTitel: 'Forum „Deutsch im Alltag“ — Lernen neben der Arbeit',
      text: 'Hallo zusammen! Ich bin Emre, 34, und arbeite als Koch in Graz. Letztes Jahr habe ich angefangen, jeden Tag Deutsch zu lernen. Das war nicht leicht: Nach der Arbeit hatte ich oft keine Lust, noch Vokabeln zu wiederholen. Deshalb lerne ich jetzt morgens zwanzig Minuten, denn dann bin ich noch fit. Am Wochenende gehe ich mit meinem Kollegen Felix schwimmen, und wir sprechen dabei nur Deutsch. Mein Tipp: Es ist wichtig, kleine Ziele zu haben. Versucht nicht, alles an einem Tag zu schaffen! Im Herbst habe ich vor, einen B1-Kurs am Abend zu besuchen, um später eine Stelle als Küchenchef zu finden. Was macht ihr, um motiviert zu bleiben? — Emre',
      items: [
        { typ: 'rf', aussage: 'Emre lernt jetzt abends nach der Arbeit.', loesung: false },
        {
          typ: 'mc',
          frage: 'Warum lernt Emre morgens?',
          optionen: ['Weil er abends einen Kurs hat.', 'Weil er dann noch fit ist.', 'Weil Felix morgens Zeit hat.'],
          loesung: 1,
        },
        { typ: 'rf', aussage: 'Mit Felix spricht Emre am Wochenende Deutsch.', loesung: true },
        {
          typ: 'mc',
          frage: 'Warum möchte Emre im Herbst einen Kurs besuchen?',
          optionen: ['um eine Stelle als Küchenchef zu finden', 'um in Graz eine Wohnung zu finden', 'um besser schwimmen zu lernen'],
          loesung: 0,
        },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'formular',
      titel: 'Schreiben',
      anweisung: 'Lies die Nachricht von Mariana. Ergänze dann das Formular für das Sprachtandem.',
      quelle: 'Hallo, ich heiße Mariana Costa und komme aus Porto. Ich habe vor, im März mit einem Sprachtandem anzufangen, um mein Deutsch zu verbessern. Leider habe ich nur am Dienstagabend Zeit, jemanden zu treffen. Meine Muttersprache ist Portugiesisch, und ich helfe gern beim Lernen. Ihr erreicht mich unter mariana.costa@beispiel.de.',
      felder: [
        { id: 'name', label: 'Name', erwartet: ['Mariana Costa', 'Costa'] },
        { id: 'beginn', label: 'Beginn', erwartet: ['im März', 'März', 'ab März'] },
        { id: 'zeit', label: 'Wann hast du Zeit?', erwartet: ['am Dienstagabend', 'Dienstagabend', 'dienstagabends', 'am Dienstag', 'Dienstag', 'dienstags'] },
        { id: 'sprache', label: 'Muttersprache', erwartet: ['Portugiesisch'] },
        { id: 'email', label: 'E-Mail', erwartet: ['mariana.costa@beispiel.de'] },
      ],
    },
  ],
}
