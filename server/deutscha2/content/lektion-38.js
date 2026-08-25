// Lektion 38 · Tagesablauf & Zeit
//
// Bloque 3 (temático), cierre del bloque: la hora (¡halb zehn = 9:30!),
// partes del día, rutina con trennbare Verben (→ Lektion 7), días y meses.

export default {
  spec: ['Bloque 3', 'Themenfelder & Wortschatz', 'Niveau A2', 'Prüfungsrelevanz: alle Module'],
  h1: 'Tagesablauf & Zeit',
  lead: '~~La hora, los días y tu rutina — y la trampa nº 1 del alemán:~~ **halb zehn** ~~NO son las diez y media, son las 9:30.~~',

  content: [
    // ── Lernziele ─────────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'die Uhrzeit sagen: *um halb acht, Viertel nach neun*',
        'den Tagesablauf mit trennbaren Verben erzählen',
        'Wochentage, Tageszeiten und Monate mit *am, um, im* benutzen',
      ],
    },

    { type: 'rule' },

    // ── Kernwortschatz ────────────────────────────────────────────
    {
      type: 'wortschatz',
      eyebrow: 'Kernwortschatz — Zeit & Alltag',
      items: [
        { wort: 'die Uhr', kollokation: 'Wie viel Uhr ist es?', es: 'el reloj / la hora' },
        { wort: 'halb', kollokation: 'halb zehn (= 9:30!)', es: 'y media (¡de la hora SIGUIENTE!)' },
        { wort: 'das Viertel', kollokation: 'Viertel nach neun (9:15)', es: 'el cuarto' },
        { wort: 'der Morgen', kollokation: 'am Morgen', es: 'la mañana (temprano)' },
        { wort: 'der Vormittag', kollokation: 'am Vormittag', es: 'la mañana (hasta las 12)' },
        { wort: 'der Nachmittag', kollokation: 'am Nachmittag', es: 'la tarde' },
        { wort: 'der Abend', kollokation: 'am Abend', es: 'la noche (temprano), la tarde-noche' },
        { wort: 'aufstehen', kollokation: 'Ich stehe um 7 Uhr auf.', es: 'levantarse' },
        { wort: 'frühstücken', kollokation: 'Wir frühstücken um 8.', es: 'desayunar' },
        { wort: 'einkaufen', kollokation: 'Ich kaufe im Supermarkt ein.', es: 'hacer la compra' },
        { wort: 'der Montag', kollokation: 'am Montag', es: 'el lunes' },
        { wort: 'der Monat, -e', kollokation: 'im Januar, im August', es: 'el mes (im + mes)' },
      ],
      hinweis: '~~Los días y meses son TODOS masculinos: der Montag, der Januar…~~',
    },

    { type: 'rule' },

    // ── Erklärung ─────────────────────────────────────────────────
    {
      type: 'steps',
      eyebrow: 'Erklärung — drei Situationen',
      steps: [
        {
          badge: 'Uhrzeit',
          titel: 'Wie spät ist es?',
          text: '__um 9 Uhr__ ~~(a las 9)~~ · __Viertel nach neun__ = 9:15 · __Viertel vor zehn__ = 9:45.\n**Achtung:** __**halb zehn** = 9:30__ ~~— «la mitad DE camino a las diez». El error clásico del hispanohablante.~~',
        },
        {
          badge: 'trennbar',
          titel: 'Deine Routine',
          text: 'Viele Alltagsverben sind __trennbar__ ~~(separables, Lektion 7)~~: das Präfix geht **ans Ende**.\n__Ich **stehe** um 7 Uhr **auf**.__ · __Ich **kaufe** am Samstag **ein**.__',
        },
        {
          badge: 'am · um · im',
          titel: 'Die drei Präpositionen der Zeit',
          text: '__**um** + Uhrzeit__ (*um halb acht*) · __**am** + Tag/Tageszeit__ (*am Montag, am Abend*) · __**im** + Monat__ (*im August*).\n~~Excepción:~~ __**in der** Nacht__.',
        },
      ],
    },

    { type: 'rule' },

    // ── Beispiele ─────────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele',
      items: [
        { text: 'Es ist **halb acht**.', gl: '— 7:30, ¡no 8:30!' },
        { text: 'Ich **stehe** jeden Tag um 6 Uhr **auf**.', gl: '— trennbar' },
        { text: '**Am Vormittag** arbeite ich, **am Nachmittag** lerne ich Deutsch.', gl: '' },
        { text: '**Am Samstag** kaufe ich **ein**.', gl: '' },
        { text: '**Im Juli** habe ich Urlaub.', gl: '— im + mes' },
      ],
    },
    {
      type: 'redemittel',
      eyebrow: 'Redemittel — über den Tag sprechen',
      gruppen: [
        {
          fn: 'Deinen Tag erzählen',
          saetze: [
            { satz: 'Zuerst stehe ich auf und frühstücke.', gloss: 'primero' },
            { satz: 'Dann fahre ich zur Arbeit.', gloss: 'después' },
            { satz: 'Am Abend koche ich und sehe fern.' },
            { satz: 'Um elf Uhr gehe ich schlafen.' },
          ],
        },
      ],
    },

    { type: 'rule' },

    // ── Übungen ───────────────────────────────────────────────────
    {
      type: 'uebung',
      eyebrow: 'Anwendung — Übung 1 · Wie spät ist es?',
      frage: 'Schreib die Uhrzeit auf Deutsch.',
      loesungLabel: 'Lösung',
      aufgaben: [
        '9:30 → ___',
        '8:15 → ___',
        '7:45 → ___',
        '14:00 → ___',
      ],
      loesungen: [
        '9:30 → **halb zehn** ~~(¡la trampa! media hora ANTES de las diez)~~',
        '8:15 → **Viertel nach acht**',
        '7:45 → **Viertel vor acht**',
        '14:00 → **zwei Uhr** (nachmittags) / vierzehn Uhr',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 2 · am, um oder im?',
      frage: 'Ergänze am, um oder im — und stell das Verb richtig.',
      loesungLabel: 'Lösung',
      aufgaben: [
        '___ Montag stehe ich ___ 6 Uhr auf.',
        '___ August fahre ich nach Spanien.',
        '___ Abend sehe ich fern.',
        'Ich (einkaufen) ___ Samstag ___ .',
      ],
      loesungen: [
        '**Am** Montag stehe ich **um** 6 Uhr auf.',
        '**Im** August fahre ich nach Spanien.',
        '**Am** Abend sehe ich fern.',
        'Ich **kaufe** **am** Samstag **ein**. ~~(trennbar: el prefijo al final)~~',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 3 · Produzieren',
      frage: 'Schreib deinen Tagesablauf in 4-5 Sätzen (ca. 30 Wörter): Wann stehst du auf? Was machst du am Vormittag, am Nachmittag, am Abend?',
      loesungLabel: 'Mögliche Lösung',
      loesung:
        'Ich stehe um halb sieben auf und frühstücke. Am Vormittag arbeite ich im Büro. Am Nachmittag kaufe ich ein und lerne Deutsch. Am Abend koche ich. Um elf Uhr gehe ich schlafen. ~~(Con „zuerst / dann / danach“ suena aún mejor.)~~',
    },

    { type: 'rule' },

    // ── Prüfungsbezug ─────────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Sprechen · Teil 2',
      titel: 'Von sich erzählen: „Mein Tag“',
      anweisung: 'Im Sprechen Teil 2 erzählst du von dir. Ein typisches Thema ist dein Tagesablauf. Sprich 5-6 kurze Sätze.',
      absaetze: [
        'Hilfsfragen: **Wann stehst du auf? Was machst du am Vormittag? Was machst du am Abend?**',
      ],
      loesungLabel: 'Mögliche Lösung',
      loesungen: [
        'Ich stehe um sieben Uhr auf. Dann frühstücke ich und fahre mit dem Bus zur Arbeit. Am Nachmittag treffe ich Freunde oder kaufe ein. Am Abend koche ich und höre Musik. Um halb zwölf gehe ich schlafen.',
      ],
      kommentar: 'Verb auf **Position 2**: *Am Abend **koche** ich* — nicht *Am Abend ich koche*. ~~(el calco del español pierde puntos)~~',
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Uhrzeiten hörst du in **jedem Hörtext**. Trainiere besonders **halb**: Wenn du *halb zehn* hörst, schreib **9:30** — nie 10:30!',
    },

    { type: 'rule' },

    // ── Abschluss ─────────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Funktion', 'So sagst du es'],
      zeilen: [
        ['9:30', 'halb **zehn** (¡media hora antes de las 10!)'],
        ['a las…', 'um 7 Uhr / um Viertel nach acht'],
        ['día / mes', 'am Montag, am Abend / im Januar'],
        ['rutina', 'Ich stehe auf … / Ich kaufe ein … (trennbar)'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich sage die Uhrzeit — und weiß: halb zehn = 9:30.',
        'Ich erzähle meinen Tag mit trennbaren Verben.',
        'Ich benutze *um, am, im* richtig.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Damit ist der Themenblock komplett: Freizeit, Reisen, Gesundheit und dein Alltag — die vier großen Themen des Zertifikats A2. In der nächsten Lektion testest du alles zusammen: die **Prüfungssimulation 1** wartet auf dich.',
    },
  ],
}
