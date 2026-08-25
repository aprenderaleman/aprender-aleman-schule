// Lektion 29 · Sprechen Teil 2 — Von sich erzählen
//
// Bloque 2 (examen) — hablar de ti con guía (Familie, Beruf, Hobbys,
// Tagesablauf): frases plantilla, Perfekt (Lektion 4) para el pasado,
// monólogo modelo (~60 palabras) comentado.

export default {
  spec: ['Bloque 2', 'Modul Sprechen', 'Niveau A2', 'Prüfungsrelevanz: Sprechen Teil 2'],
  h1: 'Sprechen Teil 2 — Von sich erzählen',
  lead: '~~En el Teil 2 hablas tú solo un minuto — sobre ti.~~ Mit **festen Satz-Bausteinen** ist das der einfachste Teil der Prüfung.',

  content: [
    // ── Lernziele ─────────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'mit Satz-Bausteinen von dir erzählen ~~(frases plantilla)~~',
        'über Familie, Beruf, Hobbys und Tagesablauf sprechen',
        'mit dem **Perfekt** (Lektion 4) etwas Vergangenes erzählen',
      ],
    },

    { type: 'rule' },

    // ── Kernwortschatz ────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Kernwortschatz — über mich',
      kopf: ['Deutsch', 'Beispiel', 'Bedeutung'],
      zeilen: [
        ['die Familie', 'Meine Familie ist groß.', 'la familia'],
        ['verheiratet', 'Ich bin verheiratet.', 'casado/a'],
        ['der Beruf', 'Mein Beruf ist interessant.', 'la profesión'],
        ['arbeiten als', 'Ich arbeite als Köchin.', 'trabajar de'],
        ['das Hobby, -s', 'Meine Hobbys sind Musik und Sport.', 'el hobby'],
        ['der Tagesablauf', 'Mein Tagesablauf ist immer gleich.', 'la rutina diaria'],
        ['aufstehen', 'Ich stehe um 7 Uhr auf.', 'levantarse'],
        ['das Wochenende', 'Am Wochenende habe ich frei.', 'el fin de semana'],
      ],
    },

    { type: 'rule' },

    // ── Erklärung ─────────────────────────────────────────────────
    {
      type: 'steps',
      eyebrow: 'Erklärung — dein Monolog in drei Schritten',
      steps: [
        {
          badge: 'Start',
          titel: 'Wer bin ich?',
          text: 'Beginn immer gleich: __Ich heiße … / Ich bin … Jahre alt. / Ich komme aus … / Ich wohne in …__ ~~Ojo: «tengo 30 años» = *Ich **bin** 30 Jahre alt* — con sein, no con haben.~~',
        },
        {
          badge: 'Themen',
          titel: 'Zwei, drei Themen',
          text: 'Nimm 2-3 Themen und sag zu jedem 1-2 Sätze: __Familie__ (*Ich habe …*), __Beruf__ (*Ich arbeite als …*), __Hobbys__ (*Ich spiele gern …*), __Tagesablauf__ (*Ich stehe um … auf.*).',
        },
        {
          badge: 'Perfekt',
          titel: 'Etwas Vergangenes',
          text: 'Ein Satz im __Perfekt__ macht deinen Monolog besser: __Am Wochenende **habe** ich Fußball **gespielt**.__ ~~Repasa la Lektion 4: haben/sein + Partizip II al final.~~',
        },
      ],
    },

    { type: 'rule' },

    // ── Redemittel + Modell ───────────────────────────────────────
    {
      type: 'redemittel',
      eyebrow: 'Redemittel — Satz-Bausteine',
      gruppen: [
        {
          fn: 'Über mich',
          saetze: [
            { satz: 'Ich heiße … und bin … Jahre alt.' },
            { satz: 'Ich komme aus … und wohne in …' },
            { satz: 'Ich arbeite als … / Ich bin Student(in).', gloss: 'trabajo de… / soy estudiante' },
          ],
        },
        {
          fn: 'Familie & Hobbys',
          saetze: [
            { satz: 'Ich habe … Geschwister / … Kinder.' },
            { satz: 'In meiner Freizeit … / Am Wochenende …', gloss: 'en mi tiempo libre' },
            { satz: 'Ich spiele gern … / Ich höre gern Musik.' },
          ],
        },
      ],
    },
    {
      type: 'modell',
      eyebrow: 'Beispiele — Modell-Monolog',
      thema: 'Von sich erzählen',
      woerter: 60,
      absaetze: [
        '„Ich heiße Carmen und **bin** 29 Jahre alt. Ich komme aus Sevilla und wohne jetzt in Berlin. Ich arbeite **als** Köchin in einem Restaurant. Ich bin verheiratet und habe keine Kinder. Meine Familie ist groß: Ich habe drei Geschwister. In meiner Freizeit höre ich Musik und koche gern. **Am Wochenende habe ich** mit Freunden Fußball **gespielt**. Das hat Spaß gemacht!“',
      ],
      annotationen: [
        { tag: 'bin 29', text: '~~«Tengo 29 años» → *Ich bin 29* — error clásico de hispanohablantes.~~' },
        { tag: 'als Köchin', text: '„arbeiten **als** + Beruf“ — ohne Artikel. ~~(trabajo DE cocinera, sin «una»)~~' },
        { tag: 'Perfekt', text: '„habe … gespielt“ — ein Satz über die Vergangenheit. Das bringt Punkte!' },
        { tag: 'kurze Sätze', text: 'Acht kurze Sätze, alle mit Verb auf Position 2. Genau richtig für A2.' },
      ],
    },

    { type: 'rule' },

    // ── Übungen ───────────────────────────────────────────────────
    {
      type: 'uebung',
      eyebrow: 'Anwendung — Übung 1 · Welches Thema?',
      frage: 'Familie, Beruf, Hobbys oder Tagesablauf?',
      loesungLabel: 'Lösung',
      aufgaben: [
        '„Ich stehe um 6 Uhr auf und frühstücke.“',
        '„Ich arbeite als Verkäufer in einem Supermarkt.“',
        '„Ich habe zwei Brüder und eine Schwester.“',
      ],
      loesungen: [
        '**Tagesablauf**',
        '**Beruf**',
        '**Familie**',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 2 · Bausteine ergänzen',
      frage: 'Ergänze das richtige Wort.',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Ich ___ 25 Jahre alt. (bin / habe)',
        'Ich arbeite ___ Kellnerin. (als / wie)',
        'Am Wochenende ___ ich einen Film gesehen. (habe / bin)',
      ],
      loesungen: [
        'Ich **bin** 25 Jahre alt. ~~(nunca *ich habe 25 Jahre*)~~',
        'Ich arbeite **als** Kellnerin.',
        'Am Wochenende **habe** ich einen Film gesehen. ~~(sehen → haben)~~',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 3 · Produzieren — dein Monolog',
      frage: 'Erzähl von dir: Name + Wohnort, ein Thema (Familie oder Beruf), ein Hobby und ein Satz im Perfekt. Sprich eine Minute laut!',
      loesungLabel: 'Mögliche Lösung',
      loesung: '„Ich heiße Pablo und wohne in Buenos Aires. Ich bin Student. Ich habe eine kleine Schwester. Mein Hobby ist Kino. **Gestern habe ich einen Film gesehen.**“ ~~Vale cualquier versión con tus datos — lo importante: frases cortas, verbo en posición 2, un Perfekt.~~',
    },

    { type: 'rule' },

    // ── Prüfungsbezug ─────────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Sprechen · Teil 2',
      titel: 'Themenkarte „Ich“',
      anweisung: 'In der Regel bekommst du eine Karte mit Stichpunkten ~~(palabras guía)~~. Sag zu jedem Punkt einen Satz: Name? — Wohnort? — Beruf? — Hobby?',
      absaetze: [
        'Name: „{1}“ · Wohnort: „{2}“ · Beruf: „{3}“ · Hobby: „{4}“',
      ],
      loesungLabel: 'Mögliche Lösung',
      loesungen: [
        '{1} **Ich heiße Ana García.**',
        '{2} **Ich wohne in Barcelona.**',
        '{3} **Ich arbeite als Lehrerin.**',
        '{4} **Ich schwimme gern.** ~~Un punto de la guía = una frase. No hace falta más.~~',
      ],
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Schreib deinen Monolog **einmal auf** (60-70 Wörter), lern ihn und sprich ihn **jeden Tag laut** — vor dem Spiegel oder als Sprachnachricht. In der Prüfung kommt er dann automatisch.',
    },

    { type: 'rule' },

    // ── Abschluss ─────────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Schritt', 'Baustein'],
      zeilen: [
        ['Start', 'Ich heiße … / Ich bin … Jahre alt. / Ich wohne in …'],
        ['Themen', 'Familie · Beruf (arbeiten als) · Hobbys · Tagesablauf'],
        ['Vergangenheit', 'Am Wochenende habe ich … gemacht. (Perfekt)'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich erzähle mit Satz-Bausteinen von mir.',
        'Ich sage zu 2-3 Themen je ein, zwei Sätze.',
        'Ich benutze einen Satz im Perfekt für die Vergangenheit.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Allein sprechen kannst du jetzt. Im letzten Teil sprichst du **mit** deinem Partner: **gemeinsam etwas planen** — Vorschläge machen, annehmen, ablehnen. Das ist das Thema der nächsten Lektion.',
    },
  ],
}
