// Übungsheft B1 — Lektion 32: Sprechen Teil 2 — Präsentation
export default {
  lektion: 32,
  titel: 'Übungsheft — Präsentation',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Hier übst du Sätze für die Präsentation. Wähle die richtige Form oder ergänze.',
      items: [
        { typ: 'mc', frage: 'Meiner Meinung nach ___ Fast Food ungesund.', optionen: ['ist', 'es ist', 'sind'], loesung: 0 },
        { typ: 'mc', frage: 'Ein Vorteil ist, dass man rund um die Uhr einkaufen ___.', optionen: ['können', 'kann', 'kannst'], loesung: 1 },
        { typ: 'mc', frage: 'Ich möchte heute ___ das Thema „Musik im Alltag“ sprechen.', optionen: ['mit', 'an', 'über'], loesung: 2 },
        {
          typ: 'luecke',
          text: 'Mit Onlineshopping habe ich gute {1} gemacht. Ein {2} ist aber, dass kleine Geschäfte Probleme bekommen.',
          bank: ['Erfahrungen', 'Nachteil', 'Vorteil', 'Meinung'],
          loesungen: { 1: 'Erfahrungen', 2: 'Nachteil' },
        },
        {
          typ: 'luecke',
          text: 'Zum {1} möchte ich sagen: Das Thema ist wichtig. Das war meine Präsentation. Danke fürs {2}!',
          bank: ['Schluss', 'Zuhören', 'Einleitung', 'Zuhörer'],
          loesungen: { 1: 'Schluss', 2: 'Zuhören' },
        },
        {
          typ: 'zuordnen',
          links: ['Ich möchte über das Thema „Sport“ sprechen.', 'Ich gehe zweimal pro Woche joggen.', 'Ein Nachteil ist, dass Fitnessstudios teuer sind.', 'Meiner Meinung nach ist Sport sehr wichtig.', 'Das war meine Präsentation.'],
          rechts: ['Einleitung', 'Erfahrungen', 'Heimatland: Pro & Contra', 'Meinung', 'Schluss'],
          loesung: {
            'Ich möchte über das Thema „Sport“ sprechen.': 'Einleitung',
            'Ich gehe zweimal pro Woche joggen.': 'Erfahrungen',
            'Ein Nachteil ist, dass Fitnessstudios teuer sind.': 'Heimatland: Pro & Contra',
            'Meiner Meinung nach ist Sport sehr wichtig.': 'Meinung',
            'Das war meine Präsentation.': 'Schluss',
          },
        },
        {
          typ: 'satzbau',
          woerter: ['ist', 'Handy', 'nach', 'Meiner', 'praktisch', 'das', 'Meinung', 'sehr'],
          loesung: 'Meiner Meinung nach ist das Handy sehr praktisch.',
          alt: ['Das Handy ist meiner Meinung nach sehr praktisch.'],
        },
        { typ: 'satzbau', woerter: ['billiger', 'dass', 'Ein', 'ist', 'oft', 'es', 'Vorteil', 'ist'], loesung: 'Ein Vorteil ist, dass es oft billiger ist.', alt: ['Ein Vorteil ist oft, dass es billiger ist.'] },
        {
          typ: 'korrektur',
          optionen: ['Meiner Meinung nach, das ist eine gute Idee.', 'Meiner Meinung nach ist das eine gute Idee.'],
          loesung: 1,
          warum: '*Meiner Meinung nach* ocupa la posición 1: el **verbo** va justo después, sin coma. No calques «En mi opinión, esto es…».',
        },
        {
          typ: 'korrektur',
          optionen: ['In meinem Heimatland essen die Leute sehr spät.', 'In meinem Heimatland die Leute essen sehr spät.'],
          loesung: 0,
          warum: 'Si la frase empieza con un complemento (*In meinem Heimatland*), el **verbo** va en 2.ª posición y el sujeto detrás.',
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies den Forumsbeitrag von Yusuf. Richtig oder falsch? Oder welche Lösung passt?',
      textTitel: 'Forum: Meine Tipps für die Präsentation',
      text: 'Hallo an alle, die bald die Prüfung machen!\nLetzten Monat hatte ich meine mündliche Prüfung, und die Präsentation hat super geklappt. Hier sind meine Tipps: Ich habe zu Hause zwei Themen vorbereitet und nur Stichwörter auf kleine Karten geschrieben. Ganze Sätze habe ich nicht auswendig gelernt, weil man dann schnell nervös wird. Jeden Abend habe ich zehn Minuten laut mit der Uhr geübt, oft vor meinem Mitbewohner. Er hat mir danach immer Fragen gestellt – das war ein gutes Training. Mein Thema in der Prüfung war „Selbst kochen oder essen gehen?“. Am meisten hat mir eine gute Einleitung geholfen: Wenn der erste Satz klappt, ist man viel ruhiger.\nViel Erfolg!\nYusuf',
      items: [
        { typ: 'rf', aussage: 'Yusuf hat für die Präsentation ganze Sätze auswendig gelernt.', loesung: false },
        { typ: 'rf', aussage: 'Yusufs Mitbewohner hat ihm beim Üben geholfen.', loesung: true },
        {
          typ: 'mc',
          frage: 'Wie hat Yusuf geübt?',
          optionen: ['nur am Wochenende im Kurs', 'jeden Abend laut mit der Uhr', 'einmal pro Woche mit einer Lehrerin'],
          loesung: 1,
        },
        {
          typ: 'mc',
          frage: 'Was hat Yusuf in der Prüfung am meisten geholfen?',
          optionen: ['seine Folien', 'die Fragen der Prüfer', 'ein guter Anfang'],
          loesung: 2,
        },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'formular',
      titel: 'Schreiben',
      anweisung: 'Lies die Nachricht. Füll dann die Anmeldung für den Präsentationsabend aus.',
      quelle: 'Hallo, ich heiße Dragan Petrović und komme aus Serbien. Ich möchte gern beim Präsentationsabend am 14. November mitmachen. Mein Thema ist „Mit dem Fahrrad durch die Stadt“. Für meine Folien brauche ich einen Beamer. Sie erreichen mich unter 0176 4455821.',
      felder: [
        { id: 'name', label: 'Vor- und Nachname', erwartet: ['Dragan Petrović', 'Petrović', 'Dragan Petrovic', 'Petrovic'] },
        { id: 'heimatland', label: 'Heimatland', erwartet: ['Serbien'] },
        { id: 'datum', label: 'Datum des Abends', erwartet: ['14. November', 'am 14. November', '14.11.', '14.11'] },
        { id: 'thema', label: 'Thema der Präsentation', erwartet: ['Mit dem Fahrrad durch die Stadt', '„Mit dem Fahrrad durch die Stadt“', 'Fahrrad fahren in der Stadt', 'mit dem Fahrrad durch die Stadt'] },
        { id: 'technik', label: 'Technik für die Präsentation', erwartet: ['Beamer', 'einen Beamer', 'ein Beamer'] },
      ],
    },
  ],
}
