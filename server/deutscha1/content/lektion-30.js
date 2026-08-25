// Lektion 30 · Persönliche Angaben & Familie
//
// Bloque 3 (Themenfelder & Wortschatz): los datos personales del Formular
// (Schreiben Teil 1) y la familia básica, con los Possessivartikel de la 11.

export default {
  spec: ['Bloque 3', 'Themenfelder & Wortschatz', 'Niveau A1', 'Prüfungsrelevanz: Schreiben · Sprechen'],
  h1: 'Persönliche Angaben & Familie',
  lead: '~~Tus datos personales — los que pide todo formulario alemán — y tu familia:~~ **Name, Adresse, Geburtsdatum** ~~y~~ *meine Familie*.',

  content: [
    // ── Lernziele ─────────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'die Wörter im Formular verstehen (Name, Adresse, Geburtsdatum …)',
        'über die Familie sprechen: *meine Mutter, mein Bruder …*',
        'Fragen zur Person verstehen und beantworten',
      ],
    },

    { type: 'rule' },

    // ── Kernwortschatz ────────────────────────────────────────────
    {
      type: 'wortschatz',
      eyebrow: 'Kernwortschatz',
      items: [
        { wort: 'der Name', kollokation: 'Wie ist Ihr Name?', es: 'el nombre' },
        { wort: 'der Vorname', kollokation: 'Vorname: *Ana*', es: 'el nombre (de pila)' },
        { wort: 'der Familienname', kollokation: 'Familienname: *García*', es: 'el apellido' },
        { wort: 'die Adresse', kollokation: 'Meine Adresse ist …', es: 'la dirección' },
        { wort: 'der Wohnort', kollokation: 'Wohnort: *Berlin*', es: 'la ciudad donde vives' },
        { wort: 'das Geburtsdatum', kollokation: 'Geburtsdatum: *12.05.1995*', es: 'la fecha de nacimiento' },
        { wort: 'die Telefonnummer', kollokation: 'Meine Telefonnummer ist …', es: 'el número de teléfono' },
        { wort: 'die Familie', kollokation: 'meine Familie', es: 'la familia' },
        { wort: 'die Eltern (Plural)', kollokation: 'meine Eltern', es: 'los padres' },
        { wort: 'der Bruder / die Schwester', kollokation: 'mein Bruder, meine Schwester', es: 'el hermano / la hermana' },
        { wort: 'das Kind (die Kinder)', kollokation: 'Ich habe zwei Kinder.', es: 'el hijo, la hija' },
        { wort: 'verheiratet / ledig', kollokation: 'Ich bin verheiratet.', es: 'casado/a · soltero/a' },
      ],
      hinweis: '~~En alemán todos los sustantivos van con mayúscula:~~ der **N**ame, die **F**amilie.',
    },

    { type: 'rule' },

    // ── Erklärung ─────────────────────────────────────────────────
    {
      type: 'prose',
      eyebrow: 'Erklärung',
      card: true,
      kicker: 'Situation 1',
      titel: 'Das Formular',
      absaetze: [
        '~~En Alemania rellenas formularios constantemente — y en el examen también (Schreiben Teil 1). Los campos son siempre los mismos:~~ __Vorname__, __Familienname__, __Adresse__ (Straße + Hausnummer), __Wohnort__, __Land__, __Geburtsdatum__, __Telefonnummer__. ~~En el formulario no escribes frases: solo el dato.~~',
      ],
    },
    {
      type: 'prose',
      card: true,
      kicker: 'Situation 2',
      titel: 'Meine Familie',
      absaetze: [
        '~~Recuerda los Possessivartikel de la Lektion 11:~~ __mein__ Bruder, __mein__ Kind ~~(masculino y neutro)~~ · __meine__ Schwester, __meine__ Eltern ~~(femenino y plural)~~. *Das ist **meine** Mutter. Das sind **meine** Eltern.*',
      ],
    },
    {
      type: 'prose',
      card: true,
      kicker: 'Situation 3',
      titel: 'Fragen zur Person',
      absaetze: [
        '~~Las preguntas típicas — en la oficina, en el curso, en el examen:~~ __Wie heißen Sie?__ ~~(¿cómo se llama?)~~ · __Wo wohnen Sie?__ ~~(¿dónde vive?)~~ · __Sind Sie verheiratet?__ · __Haben Sie Kinder?__',
      ],
    },

    { type: 'rule' },

    // ── Beispiele ─────────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele',
      items: [
        { text: 'Mein **Name** ist Ana García.', gl: '— Mi nombre es Ana García.' },
        { text: 'Meine **Adresse** ist Gartenstraße 5, Berlin.', gl: '— Mi dirección es Gartenstraße 5, Berlín.' },
        { text: 'Mein **Geburtsdatum** ist der 12. Mai 1995.', gl: '— Mi fecha de nacimiento es el 12 de mayo de 1995.' },
        { text: 'Das ist **meine Familie**: meine Frau und meine zwei Kinder.', gl: '— Esta es mi familia: mi mujer y mis dos hijos.' },
        { text: 'Mein **Bruder** heißt Luis. Er wohnt in Madrid.', gl: '— Mi hermano se llama Luis. Vive en Madrid.' },
        { text: 'Ich bin **ledig** und habe keine Kinder.', gl: '— Soy soltero y no tengo hijos.' },
      ],
    },
    {
      type: 'redemittel',
      eyebrow: 'Redemittel — Über die Familie sprechen',
      gruppen: [
        {
          fn: 'So stellst du deine Familie vor',
          saetze: [
            { satz: 'Das ist mein Vater / meine Mutter.', gloss: 'Este es mi padre / mi madre.' },
            { satz: 'Ich habe einen Bruder und eine Schwester.', gloss: 'Tengo un hermano y una hermana.' },
            { satz: 'Meine Eltern wohnen in Spanien.', gloss: 'Mis padres viven en España.' },
            { satz: 'Ich bin verheiratet. / Ich bin ledig.', gloss: 'Estoy casado/a. / Soy soltero/a.' },
          ],
        },
      ],
    },

    { type: 'rule' },

    // ── Übungen ───────────────────────────────────────────────────
    {
      type: 'uebung',
      eyebrow: 'Anwendung — Übung 1 · Wortschatz',
      frage: 'Wie heißt das auf Deutsch? ~~(¿Cómo se dice en alemán? Con artículo.)~~',
      loesungLabel: 'Lösung',
      aufgaben: [
        'el apellido → ___',
        'la dirección → ___',
        'la fecha de nacimiento → ___',
        'los padres → ___',
      ],
      loesungen: [
        'el apellido → **der Familienname**',
        'la dirección → **die Adresse**',
        'la fecha de nacimiento → **das Geburtsdatum**',
        'los padres → **die Eltern**',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 2 · mein oder meine?',
      frage: 'Ergänze mein oder meine.',
      loesungLabel: 'Lösung',
      aufgaben: [
        '___ Bruder heißt Luis.',
        '___ Schwester wohnt in Lima.',
        '___ Eltern sind aus Peru.',
        '___ Kind ist drei Jahre alt.',
      ],
      loesungen: [
        '**Mein** Bruder heißt Luis. ~~(masculino)~~',
        '**Meine** Schwester wohnt in Lima. ~~(femenino)~~',
        '**Meine** Eltern sind aus Peru. ~~(plural)~~',
        '**Mein** Kind ist drei Jahre alt. ~~(neutro)~~',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 3 · Meine Familie',
      frage: 'Schreibe 4-5 Sätze über deine Familie (ca. 25 Wörter). ~~(Escribe 4-5 frases sobre tu familia.)~~',
      loesungLabel: 'Mögliche Lösung',
      loesung: '*Das ist meine Familie. Mein Vater heißt Juan und meine Mutter heißt Rosa. Ich habe eine Schwester. Sie wohnt in Bogotá. Ich bin ledig.* ~~(Vale cualquier texto con mein/meine + 2-3 datos: nombres, dónde viven, estado civil.)~~',
    },

    { type: 'rule' },

    // ── Prüfungsbezug ─────────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Schreiben · Teil 1',
      titel: 'Formular ausfüllen',
      anweisung: 'Im Schreiben Teil 1 füllst du ein Formular aus. Lies den Text und ergänze die drei Informationen. ~~(Lee el texto y completa el formulario.)~~',
      absaetze: [
        'María Gómez kommt aus Spanien. Sie wohnt jetzt in Hamburg, Bergstraße 12. Ihre Telefonnummer ist 040 555 213.',
        'Familienname: Gómez · Vorname: María · Land: {1} · Wohnort: {2} · Telefonnummer: {3}',
      ],
      loesungLabel: 'Lösung',
      loesungen: [
        '{1} Land: **Spanien**',
        '{2} Wohnort: **Hamburg**',
        '{3} Telefonnummer: **040 555 213**',
      ],
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Im Formular schreibst du **keine Sätze** — nur das Wort oder die Zahl. ~~En el Formular no escribas frases: solo el dato exacto (una palabra, un número). Lee bien qué campo falta.~~',
    },

    { type: 'rule' },

    // ── Abschluss ─────────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Thema', 'Das Wichtigste'],
      zeilen: [
        ['Formular', 'Vorname · Familienname · Adresse · Wohnort · Geburtsdatum'],
        ['Familie', 'die Eltern · der Bruder · die Schwester · die Kinder'],
        ['mein / meine', '**mein** Bruder, **mein** Kind · **meine** Schwester, **meine** Eltern'],
        ['Fragen', 'Wie heißen Sie? · Wo wohnen Sie? · Haben Sie Kinder?'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich verstehe die Wörter im Formular (Name, Adresse, Geburtsdatum …).',
        'Ich kann meine Familie vorstellen: mein Bruder, meine Eltern …',
        'Ich kann Fragen zur Person beantworten.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Telefonnummer, Geburtsdatum, Alter — **alles Zahlen!** In der nächsten Lektion trainierst du die Zahlen im Alltag: die **Uhrzeit**, einen **Termin** machen und nach dem **Preis** fragen.',
    },
  ],
}
