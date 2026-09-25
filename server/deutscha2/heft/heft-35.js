// Übungsheft A2 — Lektion 35: Freizeit & Hobbys
export default {
  lektion: 35,
  titel: 'Übungsheft — Freizeit & Hobbys',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Löse die Aufgaben. ~~(Resuelve los ejercicios.)~~',
      items: [
        { typ: 'mc', frage: 'Ich höre ___ Musik.', optionen: ['möchte', 'viel gern', 'gern'], loesung: 2 },
        { typ: 'mc', frage: 'Am Sonntag ___ ich ins Schwimmbad gegangen.', optionen: ['habe', 'bin', 'ist'], loesung: 1 },
        {
          typ: 'luecke',
          text: 'Was machst du in deiner {1}? — Ich lese viel und ich {2} gern Freunde.',
          bank: ['Freizeit', 'treffe', 'spiele'],
          loesungen: { 1: 'Freizeit', 2: 'treffe' },
        },
        {
          typ: 'luecke',
          text: '{1} wir am Freitag ins Kino gehen? — Ja, gute {2}!',
          bank: ['Wollen', 'Idee', 'Wochenende'],
          loesungen: { 1: 'Wollen', 2: 'Idee' },
        },
        { typ: 'satzbau', woerter: ['gern', 'Fahrrad', 'Ich', 'fahre'], loesung: 'Ich fahre gern Fahrrad.' },
        { typ: 'satzbau', woerter: ['Fußball', 'habe', 'Am', 'Samstag', 'ich', 'gespielt'], loesung: 'Am Samstag habe ich Fußball gespielt.' },
        {
          typ: 'zuordnen',
          links: ['Musik', 'Fußball', 'Fahrrad', 'ein Buch', 'ins Kino'],
          rechts: ['hören', 'spielen', 'fahren', 'lesen', 'gehen'],
          loesung: { 'Musik': 'hören', 'Fußball': 'spielen', 'Fahrrad': 'fahren', 'ein Buch': 'lesen', 'ins Kino': 'gehen' },
        },
        {
          typ: 'korrektur',
          optionen: ['Ich mag spielen Fußball.', 'Ich spiele gern Fußball.'],
          loesung: 1,
          warum: '«Me gusta jugar» no se calca: en alemán es **Verb + gern**. ~~(gern va después del verbo conjugado.)~~',
        },
        {
          typ: 'korrektur',
          optionen: ['Am Sonntag bin ich schwimmen gegangen.', 'Am Sonntag habe ich schwimmen gegangen.'],
          loesung: 0,
          warum: '*gehen* forma el Perfekt con **sein**: *ich bin gegangen*. ~~(Movimiento → sein, no haben.)~~',
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies den Text. Löse die vier Aufgaben. ~~(Lee el texto. Resuelve las cuatro tareas.)~~',
      textTitel: 'Blog von Nuria — Mein Wochenende',
      text: 'Endlich Wochenende! Am Samstagvormittag habe ich lange geschlafen. Dann bin ich mit meiner Freundin Ana ins Schwimmbad gegangen. Wir schwimmen beide gern. Am Abend haben wir bei mir Pizza gegessen und Musik gehört. Am Sonntag bin ich mit dem Fahrrad in den Park gefahren. Dort habe ich ein Buch gelesen. Mein neues Hobby ist Lesen — ich finde es super! Und nächstes Wochenende? Da wollen Ana und ich ins Kino gehen. Was macht ihr am Wochenende gern?',
      items: [
        { typ: 'rf', aussage: 'Nuria ist am Samstag ins Kino gegangen.', loesung: false },
        { typ: 'rf', aussage: 'Nuria und Ana schwimmen gern.', loesung: true },
        {
          typ: 'mc',
          frage: 'Was hat Nuria am Sonntag gemacht?',
          optionen: ['Sie hat Pizza gegessen.', 'Sie ist ins Schwimmbad gegangen.', 'Sie hat im Park ein Buch gelesen.'],
          loesung: 2,
        },
        { typ: 'rf', aussage: 'Nuria findet ihr neues Hobby langweilig.', loesung: false },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'text',
      titel: 'Schreiben',
      anweisung: 'Schreib einen kurzen Text (ca. 25 Wörter). ~~(Escribe un texto corto de unas 25 palabras.)~~',
      aufgabe: 'Dein letztes Wochenende: Was hast du gemacht? Erzähl!',
      punkte: [
        'Was hast du am Samstag gemacht?',
        'Was hast du am Sonntag gemacht?',
        'Was machst du am Wochenende gern?',
      ],
      minWoerter: 25,
      beispielLoesung: 'Am Samstag habe ich Fußball gespielt und Freunde getroffen. Am Sonntag bin ich ins Schwimmbad gegangen. Ich schwimme gern. Musik höre ich auch sehr gern.',
    },
  ],
}
