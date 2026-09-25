// Lektion 34 · Arbeit & Beruf
//
// Bloque 3 (temático): profesiones (masc./fem.), mi trabajo, horarios.
// Error clave: Beruf SIN artículo (Ich bin Lehrer / Ich arbeite als Kellnerin).
// Capa A2 frente al A1 (Lektion 35 allí): el Berufsweg im Perfekt
// (Ausbildung gemacht, als … gearbeitet, eine Stelle gefunden → Lektion 4).

export default {
  spec: ['Bloque 3', 'Themenfelder & Wortschatz', 'Niveau A2', 'Prüfungsrelevanz: Sprechen & Schreiben'],
  h1: 'Arbeit & Beruf',
  lead: '~~En el examen SIEMPRE preguntan:~~ **Was sind Sie von Beruf?** — ~~y aquí está la trampa: en alemán la profesión va SIN artículo.~~',

  content: [
    // ── Lernziele ─────────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'den Beruf nennen: *Ich bin Lehrerin.* — ohne Artikel',
        'über die Arbeit sprechen: Firma, Kollegen, Büro',
        'Arbeitszeiten nennen: *von 9 bis 17 Uhr*',
      ],
    },

    { type: 'rule' },

    // ── Kernwortschatz ────────────────────────────────────────────
    {
      type: 'wortschatz',
      eyebrow: 'Kernwortschatz — Arbeit & Berufe',
      items: [
        { wort: 'der Beruf', kollokation: 'Was sind Sie von Beruf?', es: 'la profesión' },
        { wort: 'die Arbeit', kollokation: 'zur Arbeit gehen', es: 'el trabajo' },
        { wort: 'die Firma', kollokation: 'bei einer Firma arbeiten', es: 'la empresa' },
        { wort: 'das Büro', kollokation: 'im Büro arbeiten', es: 'la oficina' },
        { wort: 'der Kollege / die Kollegin', kollokation: 'nette Kollegen', es: 'el/la compañero/a de trabajo' },
        { wort: 'der Chef / die Chefin', kollokation: 'Mein Chef ist nett.', es: 'el/la jefe/a' },
        { wort: 'der Lehrer / die Lehrerin', kollokation: 'Ich bin Lehrerin.', es: 'el profesor / la profesora' },
        { wort: 'der Arzt / die Ärztin', kollokation: 'Sie ist Ärztin.', es: 'el médico / la médica' },
        { wort: 'der Verkäufer / die Verkäuferin', kollokation: 'Verkäuferin im Supermarkt', es: 'el/la dependiente/a' },
        { wort: 'der Kellner / die Kellnerin', kollokation: 'Der Kellner bringt die Rechnung.', es: 'el camarero / la camarera' },
        { wort: 'der Koch / die Köchin', kollokation: 'Koch in einem Restaurant', es: 'el cocinero / la cocinera' },
        { wort: 'der Feierabend', kollokation: 'Um 17 Uhr habe ich Feierabend.', es: 'el fin de la jornada laboral' },
        { wort: 'die Ausbildung', kollokation: 'eine Ausbildung machen', es: 'la formación profesional' },
        { wort: 'die Stelle, -n', kollokation: 'eine neue Stelle suchen', es: 'el puesto de trabajo' },
      ],
      hinweis: '~~El femenino casi siempre es + -in (Lehrerin), a veces con Umlaut: Arzt → Ärztin, Koch → Köchin.~~',
    },

    { type: 'rule' },

    // ── Erklärung ─────────────────────────────────────────────────
    {
      type: 'steps',
      eyebrow: 'Erklärung — vier Situationen',
      steps: [
        {
          badge: 'ohne ein',
          titel: 'Beruf nennen — ohne Artikel',
          text: '~~«Soy profesor» en alemán va SIN artículo:~~ __Ich **bin** Lehrer.__ ~~Error típico:~~ *Ich bin ein Lehrer*. Auch mit __als__: __Ich arbeite **als** Kellnerin.__ ~~(no *als eine Kellnerin*)~~',
        },
        {
          badge: 'bei',
          titel: 'Wo arbeitest du?',
          text: '__Ich arbeite **bei** Möbel Braun / bei einer kleinen Firma.__ ~~(bei + empresa)~~ __Ich arbeite **im** Büro / **in** einem Restaurant.__ Die Frage dazu: __Was sind Sie **von Beruf**?__',
        },
        {
          badge: 'Zeit',
          titel: 'Arbeitszeiten',
          text: '__Ich arbeite **von** 9 **bis** 17 Uhr.__ __Am Wochenende habe ich **frei**.__ ~~(libro, no trabajo)~~ Und das schönste deutsche Wort: __**Feierabend**!__ — __Um 18 Uhr habe ich Feierabend.__',
        },
        {
          badge: 'Perfekt',
          titel: 'Früher — dein Berufsweg im Perfekt',
          text: 'Mit dem __Perfekt__ ~~(Lektion 4)~~ erzählst du deinen Weg: __Ich **habe** eine Ausbildung **gemacht**.__ · __Ich **habe** zwei Jahre als Kellnerin **gearbeitet**.__ · __Jetzt suche ich eine neue **Stelle**.__',
        },
      ],
    },

    { type: 'rule' },

    // ── Beispiele ─────────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele',
      items: [
        { text: 'Ich bin **Verkäuferin** von Beruf.', gl: '— sin artículo' },
        { text: 'Mein Bruder arbeitet **als Koch** in einem Restaurant.', gl: '' },
        { text: 'Meine Kollegen sind sehr nett, aber der Chef ist streng.', gl: '— streng = estricto' },
        { text: 'Ich arbeite von Montag bis Freitag, am Wochenende habe ich frei.', gl: '' },
        { text: 'Früher **habe** ich als Verkäufer **gearbeitet**, jetzt bin ich Koch.', gl: '— Perfekt' },
        { text: 'Marta ist **arbeitslos** und sucht eine neue **Stelle**.', gl: '— Stelle = puesto' },
      ],
    },
    {
      type: 'redemittel',
      eyebrow: 'Redemittel — über die Arbeit sprechen',
      gruppen: [
        {
          fn: 'Über die Arbeit sprechen',
          saetze: [
            { satz: 'Ich bin Lehrer / Lehrerin von Beruf.' },
            { satz: 'Ich arbeite als Kellnerin in einem Café.' },
            { satz: 'Ich arbeite von 8 bis 16 Uhr.' },
            { satz: 'Meine Arbeit gefällt mir, weil die Kollegen nett sind.', gloss: 'me gusta mi trabajo' },
          ],
        },
      ],
    },

    { type: 'rule' },

    // ── Mehr Beispiele ────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Mehr Beispiele',
      titel: 'Arbeit im Alltag',
      items: [
        { text: 'Meine Schwester ist **Ärztin** von Beruf.', gl: '— femenino con Umlaut: Arzt → Ärztin.' },
        { text: 'Ich arbeite **bei** einer kleinen Firma in Bilbao.', gl: '— bei + empresa.' },
        { text: 'Unsere Chefin ist streng, aber fair.', gl: '' },
        { text: 'Ich habe eine **Ausbildung** als Koch **gemacht**.', gl: '— Perfekt: el participio cierra la frase.' },
        { text: 'Um 16 Uhr habe ich **Feierabend**.', gl: '' },
        { text: 'Mein Kollege sucht eine neue **Stelle**.', gl: '— Stelle = puesto de trabajo.' },
      ],
    },

    { type: 'rule' },

    // ── Prüfungsbezug ─────────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Sprechen · Teil 2',
      titel: 'Von sich erzählen: Arbeit',
      anweisung: 'Erzähl von deiner Arbeit. Sprich über 3-4 Punkte: Beruf? Wo arbeitest du? Arbeitszeiten? Wie findest du die Arbeit?',
      absaetze: [
        'Stichwort: **Arbeit**.',
      ],
      loesungLabel: 'Mögliche Lösung',
      loesungen: [
        'Ich bin Lehrerin von Beruf und arbeite an einer Schule in Sevilla.',
        'Ich habe in Spanien eine Ausbildung gemacht und zwei Jahre in Madrid gearbeitet.',
        'Ich arbeite von Montag bis Freitag, von 8 bis 14 Uhr.',
        'Meine Arbeit gefällt mir, weil die Kinder sehr lustig sind.',
      ],
      kommentar: '**Beruf ohne Artikel** + ein Satz im **Perfekt** über früher + ein Satz mit *weil* — damit zeigst du alles, was A2 verlangt.',
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Auch wenn du nicht arbeitest, brauchst du einen Satz: *Ich bin Student / Studentin.* / *Ich suche Arbeit.* / *Ich bin zu Hause bei den Kindern.* Bereite **deinen** Satz vor — die Frage kommt sicher.',
    },

    { type: 'rule' },

    // ── Abschluss ─────────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Funktion', 'So sagst du es'],
      zeilen: [
        ['profesión', 'Ich bin Lehrer(in). — ohne Artikel'],
        ['als / bei', 'Ich arbeite als Köchin. / Ich arbeite bei Möbel Braun.'],
        ['horario', 'von 9 bis 17 Uhr · am Wochenende frei'],
        ['fin de jornada', 'Um 17 Uhr habe ich Feierabend.'],
        ['antes (Perfekt)', 'Ich habe als Kellner gearbeitet.'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich nenne meinen Beruf ohne Artikel.',
        'Ich sage, wo und wann ich arbeite.',
        'Ich erzähle im Perfekt, was ich früher gemacht habe.',
        'Ich kenne 6 Berufe in beiden Formen (Lehrer / Lehrerin).',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Nach der Arbeit kommt der **Feierabend** — und dann? In der nächsten Lektion geht es um **Freizeit & Hobbys**: sagen, was du gern machst, und mit Freunden etwas planen.',
    },
  ],
}
