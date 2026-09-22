// Lektion 34 · Tagesablauf & Hobbys
//
// Bloque 3 (Themen & Wortschatz) — mi día con los trennbare Verben de la
// Lektion 13, la hora aplicada (Um 7 Uhr stehe ich auf — ¡inversión!) y
// los hobbys con «gern». Tema estrella del vorstellen.

export default {
  spec: ['Bloque 3', 'Themenfelder & Wortschatz', 'Niveau A1', 'Prüfungsrelevanz: Sprechen · Schreiben'],
  h1: 'Tagesablauf & Hobbys',
  lead: '~~Tu día en alemán, de la mañana a la noche:~~ **„Um 7 Uhr stehe ich auf.“** ~~Los verbos separables en acción, la hora aplicada y tus hobbys con~~ *gern*.',

  content: [
    // ── Lernziele ─────────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'den Tagesablauf beschreiben: aufstehen, arbeiten, einkaufen',
        'Sätze mit der Uhrzeit beginnen: *Um 7 Uhr stehe ich auf.*',
        'über Hobbys sprechen: *Ich spiele gern Fußball.*',
      ],
    },

    { type: 'rule' },

    // ── Kernwortschatz ────────────────────────────────────────────
    {
      type: 'wortschatz',
      eyebrow: 'Kernwortschatz — Mein Tag',
      items: [
        { wort: 'aufstehen', kollokation: 'um 7 Uhr aufstehen', es: 'levantarse' },
        { wort: 'frühstücken', kollokation: 'um 8 Uhr frühstücken', es: 'desayunar' },
        { wort: 'arbeiten', kollokation: 'von 9 bis 17 Uhr arbeiten', es: 'trabajar' },
        { wort: 'einkaufen', kollokation: 'im Supermarkt einkaufen', es: 'hacer la compra' },
        { wort: 'kochen', kollokation: 'das Abendessen kochen', es: 'cocinar' },
        { wort: 'fernsehen', kollokation: 'am Abend fernsehen', es: 'ver la tele' },
        { wort: 'schlafen', kollokation: 'um 23 Uhr schlafen gehen', es: 'dormir' },
        { wort: 'das Hobby', kollokation: 'Mein Hobby ist Musik.', es: 'el hobby, la afición' },
        { wort: 'Fußball spielen', kollokation: 'gern Fußball spielen', es: 'jugar al fútbol' },
        { wort: 'Musik hören', kollokation: 'gern Musik hören', es: 'escuchar música' },
        { wort: 'lesen', kollokation: 'ein Buch lesen', es: 'leer' },
        { wort: 'schwimmen', kollokation: 'im Sommer schwimmen', es: 'nadar' },
      ],
      hinweis: '**aufstehen, einkaufen, fernsehen** sind trennbare Verben ~~(verbos separables, Lektion 13)~~: das Präfix geht ans Ende — *Ich stehe auf.*',
    },

    { type: 'rule' },

    // ── Erklärung ─────────────────────────────────────────────────
    {
      type: 'prose',
      eyebrow: 'Erklärung',
      card: true,
      kicker: 'Situation 1',
      titel: 'Trennbare Verben: das Präfix ans Ende',
      absaetze: [
        '__aufstehen__ → Ich **stehe** um 7 Uhr **auf**. · __einkaufen__ → Ich **kaufe** im Supermarkt **ein**. · __fernsehen__ → Ich **sehe** am Abend **fern**. ~~(el prefijo se separa y se va al FINAL de la frase)~~',
      ],
    },
    {
      type: 'prose',
      card: true,
      kicker: 'Situation 2',
      titel: 'Um 7 Uhr … — Inversion!',
      absaetze: [
        'Beginnt der Satz mit der Uhrzeit, kommt **sofort das Verb** (Position 2 ~~— 2ª posición~~) und dann *ich*: **Um 7 Uhr stehe ich auf.** ~~Error típico: «Um 7 Uhr ich stehe auf» — el sujeto salta DETRÁS del verbo.~~',
      ],
    },
    {
      type: 'prose',
      card: true,
      kicker: 'Situation 3',
      titel: 'Hobbys mit gern',
      absaetze: [
        '__gern__ steht nach dem Verb: Ich spiele **gern** Fußball. · Ich höre **gern** Musik. ~~«gern» = «me gusta», pero es un adverbio: literalmente «juego con gusto al fútbol».~~',
      ],
    },

    { type: 'rule' },

    // ── Beispiele ─────────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele',
      items: [
        { text: 'Ich **stehe** um 7 Uhr **auf**.', gl: '— Me levanto a las 7.' },
        { text: '**Um 8 Uhr frühstücke ich.**', gl: '— A las 8 desayuno. (¡verbo en 2ª posición!)' },
        { text: 'Von 9 bis 17 Uhr arbeite ich.', gl: '— Trabajo de 9 a 17.' },
        { text: 'Am Nachmittag **kaufe** ich **ein**.', gl: '— Por la tarde hago la compra.' },
        { text: 'Am Abend **sehe** ich **fern**.', gl: '— Por la noche veo la tele.' },
        { text: 'Ich lese **gern** Bücher.', gl: '— Me gusta leer libros.' },
      ],
    },
    {
      type: 'redemittel',
      eyebrow: 'Redemittel',
      gruppen: [
        {
          fn: 'Mein Tag',
          saetze: [
            { satz: 'Ich stehe um … Uhr auf.', gloss: 'Me levanto a las …' },
            { satz: 'Von … bis … Uhr arbeite ich.', gloss: 'Trabajo de … a …' },
            { satz: 'Am Abend koche ich.', gloss: 'Por la noche cocino.' },
          ],
        },
        {
          fn: 'Meine Hobbys',
          saetze: [
            { satz: 'Mein Hobby ist Schwimmen.', gloss: 'Mi hobby es nadar.' },
            { satz: 'Ich spiele gern Fußball.', gloss: 'Me gusta jugar al fútbol.' },
            { satz: 'Ich höre gern Musik.', gloss: 'Me gusta escuchar música.' },
          ],
        },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'Noch ein Tag',
      titel: 'Marias Tag — in der 3. Person',
      items: [
        { text: 'Um 6 Uhr **steht** Maria **auf**.', gl: '— ella se levanta: steht … auf' },
        { text: 'Um 7 Uhr **frühstückt** sie.', gl: '— desayuna a las 7' },
        { text: 'Von 8 bis 16 Uhr **arbeitet** sie.', gl: '— trabaja de 8 a 16' },
        { text: 'Am Nachmittag **kauft** sie im Supermarkt **ein**.', gl: '— por la tarde hace la compra' },
        { text: 'Am Abend **kocht** sie und **sieht fern**.', gl: '— cocina y ve la tele' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'gern',
      titel: 'Hobbys — immer mit gern',
      items: [
        { text: 'Ich **schwimme gern** im Sommer.', gl: '— me gusta nadar en verano' },
        { text: 'Ich **lese gern** Bücher.', gl: '— me gusta leer libros' },
        { text: 'Ich **spiele gern** Fußball. Mein Hobby ist Fußball.', gl: '— dos formas de decir tu hobby' },
        { text: 'Am Abend **höre** ich **gern** Musik.', gl: '— gern va después del verbo' },
      ],
    },

    { type: 'rule' },

    // ── Prüfungsbezug ─────────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Schreiben · Teil 2',
      titel: 'Ein kurzer Text über deinen Tag',
      anweisung: 'Im Schreiben Teil 2 schreibst du einen kurzen persönlichen Text (ca. 30 Wörter) — zum Beispiel über deinen Sonntag. Ergänze den Mustertext:',
      absaetze: [
        '„Liebe Eva,\nam Sonntag {1} ich um 9 Uhr {2}. Ich frühstücke und lese. Am Nachmittag spiele ich {3} Fußball im Park. Und du?\nViele Grüße\nAna“',
      ],
      loesungLabel: 'Lösung',
      loesungen: [
        '{1} **stehe**',
        '{2} **auf**',
        '{3} **gern**',
      ],
      kommentar: 'Der Text hat ca. 30 Wörter — genau das Format der Prüfung. ~~Fíjate: saludo, tres frases sobre el día, pregunta y despedida.~~',
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Im Schreiben Teil 2 gibt die Aufgabe **drei Punkte** vor — beantworte **alle drei** und schreib ca. 30 Wörter. Anrede und Gruß nicht vergessen! ~~(saludo al principio, despedida al final — puntúan)~~',
    },

    { type: 'rule' },

    // ── Abschluss ─────────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Regel', 'Beispiel'],
      zeilen: [
        ['trennbares Verb', 'Ich **stehe** um 7 Uhr **auf**. ~~(prefijo al final)~~'],
        ['Uhrzeit zuerst → Inversion', '**Um 7 Uhr stehe ich** auf.'],
        ['Hobby mit gern', 'Ich spiele **gern** Fußball.'],
        ['der Tag', 'am Morgen · am Nachmittag · am Abend'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich kann meinen Tag beschreiben: aufstehen, arbeiten, einkaufen, fernsehen.',
        'Ich kann Sätze mit der Uhrzeit beginnen: „Um 7 Uhr stehe ich auf.“',
        'Ich kann über meine Hobbys sprechen: „Ich spiele gern Fußball.“',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Aufstehen, arbeiten, einkaufen — aber **als was** arbeitest du? In der nächsten Lektion kommen die **Berufe**: *Ich bin Lehrerin. Ich arbeite im Büro.* Damit ist deine Vorstellung komplett.',
    },
  ],
}
