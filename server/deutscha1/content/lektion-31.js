// Lektion 31 · Zahlen, Zeit & Termine
//
// Bloque 3 (Themenfelder & Wortschatz): refuerzo aplicado de la 16 —
// pedir cita, quedar, precios y el teléfono deletreado.

export default {
  spec: ['Bloque 3', 'Themenfelder & Wortschatz', 'Niveau A1', 'Prüfungsrelevanz: Hören · Sprechen'],
  h1: 'Zahlen, Zeit & Termine',
  lead: '~~Los números en acción: pedir~~ **einen Termin** ~~(una cita), quedar a una hora y preguntar el precio —~~ *Was kostet das?*',

  content: [
    // ── Lernziele ─────────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'einen Termin machen: *Ich möchte einen Termin, bitte.*',
        'nach der Uhrzeit fragen: *Wann? Um wie viel Uhr?*',
        'nach dem Preis fragen und Telefonnummern verstehen',
      ],
    },

    { type: 'rule' },

    // ── Kernwortschatz ────────────────────────────────────────────
    {
      type: 'wortschatz',
      eyebrow: 'Kernwortschatz',
      items: [
        { wort: 'der Termin', kollokation: 'einen Termin machen', es: 'la cita (médico, oficina)' },
        { wort: 'der Arzt / die Ärztin', kollokation: 'beim Arzt', es: 'el médico / la médica' },
        { wort: 'die Praxis', kollokation: 'Praxis Dr. Weber, guten Tag!', es: 'la consulta (del médico)' },
        { wort: 'die Uhrzeit', kollokation: 'Wie spät ist es?', es: 'la hora' },
        { wort: 'die Stunde', kollokation: 'eine Stunde warten', es: 'la hora (60 minutos)' },
        { wort: 'die Minute', kollokation: 'fünf Minuten', es: 'el minuto' },
        { wort: 'der Tag', kollokation: 'Welcher Tag passt?', es: 'el día' },
        { wort: 'die Woche', kollokation: 'nächste Woche', es: 'la semana' },
        { wort: 'der Montag', kollokation: 'am Montag um 9 Uhr', es: 'el lunes' },
        { wort: 'die Telefonnummer', kollokation: 'Die Nummer ist 030 …', es: 'el número de teléfono' },
        { wort: 'der Preis', kollokation: 'Was kostet das?', es: 'el precio' },
        { wort: 'der Euro', kollokation: 'zehn Euro zwanzig (10,20 €)', es: 'el euro' },
      ],
      hinweis: '~~Repaso de la Lektion 16:~~ **um** 9 Uhr ~~(a las 9)~~ · **am** Montag ~~(el lunes)~~.',
    },

    { type: 'rule' },

    // ── Erklärung ─────────────────────────────────────────────────
    {
      type: 'prose',
      eyebrow: 'Erklärung',
      card: true,
      kicker: 'Situation 1',
      titel: 'Einen Termin machen (beim Arzt)',
      absaetze: [
        '~~El mini-diálogo estándar por teléfono:~~ __Ich möchte einen Termin, bitte.__ — __Geht es am Montag um 10 Uhr?__ — __Ja, das passt.__ ~~(sí, me viene bien)~~ ~~Siempre igual: día con~~ **am**, ~~hora con~~ **um**.',
      ],
    },
    {
      type: 'prose',
      card: true,
      kicker: 'Situation 2',
      titel: 'Sich verabreden — Wann?',
      absaetze: [
        '~~Para quedar preguntas:~~ __Wann treffen wir uns?__ ~~(¿cuándo quedamos?)~~ · __Um wie viel Uhr?__ ~~(¿a qué hora?)~~ Achtung! __halb acht__ = **7:30** ~~— no las 8:30: en alemán „media“ va ANTES de la hora siguiente. Error clásico.~~',
      ],
    },
    {
      type: 'prose',
      card: true,
      kicker: 'Situation 3',
      titel: 'Preise & Telefonnummern',
      absaetze: [
        '__Was kostet das?__ — __Das kostet drei Euro fünfzig (3,50 €).__ ~~Los teléfonos se dicen número a número:~~ 030 214 → __null drei null — zwei eins vier__. ~~Así los oirás en el examen (Hören).~~',
      ],
    },

    { type: 'rule' },

    // ── Beispiele ─────────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele',
      items: [
        { text: 'Ich möchte einen **Termin**, bitte.', gl: '— Quiero una cita, por favor.' },
        { text: 'Geht es **am Freitag um 9 Uhr**?', gl: '— ¿Puede ser el viernes a las 9?' },
        { text: 'Ja, das **passt**. Danke!', gl: '— Sí, me viene bien. ¡Gracias!' },
        { text: 'Wie spät ist es? — Es ist **halb drei**.', gl: '— ¿Qué hora es? — Son las dos y media (2:30).' },
        { text: '**Was kostet** das Buch? — Es kostet **12 Euro**.', gl: '— ¿Cuánto cuesta el libro? — Cuesta 12 euros.' },
        { text: 'Meine Telefonnummer ist **null eins sieben zwei …**', gl: '— Mi número de teléfono es 0172…' },
      ],
    },
    {
      type: 'redemittel',
      eyebrow: 'Redemittel — Termine & Preise',
      gruppen: [
        {
          fn: 'So machst du einen Termin',
          saetze: [
            { satz: 'Ich möchte einen Termin, bitte.', gloss: 'Quiero una cita, por favor.' },
            { satz: 'Haben Sie am Montag Zeit?', gloss: '¿Tiene tiempo el lunes?' },
            { satz: 'Geht es um 10 Uhr?', gloss: '¿Puede ser a las 10?' },
            { satz: 'Ja, das passt. / Nein, das geht nicht.', gloss: 'Sí, me va bien. / No, no puede ser.' },
            { satz: 'Was kostet das?', gloss: '¿Cuánto cuesta?' },
          ],
        },
      ],
    },

    { type: 'rule' },

    // ── Übungen ───────────────────────────────────────────────────
    {
      type: 'uebung',
      eyebrow: 'Anwendung — Übung 1 · Uhrzeiten',
      frage: 'Welche Uhrzeit ist das? Schreibe sie auf Deutsch. ~~(¿Qué hora es? Escríbela en alemán.)~~',
      loesungLabel: 'Lösung',
      aufgaben: [
        '8:00 → ___',
        '7:30 → ___',
        '9:15 → ___',
        '10:45 → ___',
      ],
      loesungen: [
        '8:00 → **acht Uhr**',
        '7:30 → **halb acht** ~~(¡media hora ANTES de las 8!)~~',
        '9:15 → **Viertel nach neun** ~~(las 9 y cuarto)~~',
        '10:45 → **Viertel vor elf** ~~(las 11 menos cuarto)~~',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 2 · Beim Arzt',
      frage: 'Ergänze: Termin · Uhr · passt.',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Guten Tag, ich möchte einen ___ , bitte.',
        'Geht es am Dienstag um 11 ___ ?',
        'Ja, das ___ . Vielen Dank!',
      ],
      loesungen: [
        'Guten Tag, ich möchte einen **Termin**, bitte.',
        'Geht es am Dienstag um 11 **Uhr**?',
        'Ja, das **passt**. Vielen Dank!',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 3 · Dein Termin',
      frage: 'Schreibe einen Mini-Dialog beim Arzt (ca. 20-30 Wörter): Begrüßung, Termin, Tag + Uhrzeit. ~~(Escribe un minidiálogo pidiendo cita.)~~',
      loesungLabel: 'Mögliche Lösung',
      loesung: '*— Praxis Dr. Weber, guten Tag!\n— Guten Tag, ich möchte einen Termin, bitte.\n— Geht es am Montag um 9 Uhr?\n— Ja, das passt. Danke, auf Wiederhören!* ~~(Vale cualquier diálogo con Termin + día con „am“ + hora con „um“.)~~',
    },

    { type: 'rule' },

    // ── Prüfungsbezug ─────────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Sprechen · Teil 2',
      titel: 'Fragen stellen & antworten',
      anweisung: 'Im Sprechen Teil 2 bekommst du Wortkarten und stellst Fragen. Ergänze die Fragen. ~~(Recibes tarjetas de palabra y formulas preguntas.)~~',
      absaetze: [
        'Wortkarte „Uhrzeit“: „{1} spät ist es?“ — „Es ist halb drei.“',
        'Wortkarte „Termin“: „{2} hast du einen Termin?“ — „Am Freitag um 10 Uhr.“',
      ],
      loesungLabel: 'Lösung',
      loesungen: [
        '{1} **Wie** spät ist es?',
        '{2} **Wann** hast du einen Termin? ~~(la respuesta „am Freitag“ pide la pregunta „Wann?“)~~',
      ],
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Im **Hören** kommen immer Zahlen vor: Uhrzeiten, Preise, Telefonnummern. ~~Practica dictado de números: escucha una hora o un teléfono y escríbelo. Es la forma más rápida de ganar puntos en Hören.~~',
    },

    { type: 'rule' },

    // ── Abschluss ─────────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Frage', 'Antwort'],
      zeilen: [
        ['Wie spät ist es?', 'Es ist halb drei. ~~(2:30)~~'],
        ['Wann? / Um wie viel Uhr?', '**Am** Montag **um** 9 Uhr.'],
        ['Was kostet das?', 'Das kostet 3 Euro 50.'],
        ['Ich möchte einen Termin.', 'Geht es am Freitag? — Ja, das passt.'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich kann einen Termin machen (beim Arzt, am Telefon).',
        'Ich verstehe Uhrzeiten — auch „halb acht“ (7:30!).',
        'Ich kann nach dem Preis fragen: Was kostet das?',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: '*Was kostet das?* ~~— esta pregunta la vas a usar sobre todo comprando.~~ In der nächsten Lektion gehst du **einkaufen**: in den Supermarkt und ins Café — *Ich möchte einen Kaffee, bitte!*',
    },
  ],
}
