// Lektion 27 · Sprechen Teil 1 — Sich vorstellen
//
// Bloque 2 (Prüfungstraining — Sprechen). La presentación completa memorizada:
// Name, Alter, Land, Wohnort, Sprachen, Beruf, Hobby (enlaza con Lektion 4).
// El Prüfer puede pedir deletrear el nombre y un número de teléfono.

export default {
  spec: ['Bloque 2', 'Prüfungsstrategie', 'Niveau A1', 'Prüfungsrelevanz: Sprechen'],
  h1: 'Sprechen Teil 1 — Sich vorstellen',
  lead: '~~Lo primero que dices en el examen oral: tu presentación. Siete datos, unas 40 palabras — memorizada, ensayada, automática.~~',

  content: [
    // ── Lernziele ─────────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'dich komplett vorstellen: **Name, Alter, Land, Wohnort, Sprachen, Beruf, Hobby**',
        'deinen Namen buchstabieren ~~(deletrear)~~',
        'deine Telefonnummer sagen',
      ],
    },

    { type: 'rule' },

    // ── Kernwortschatz ────────────────────────────────────────────
    {
      type: 'wortschatz',
      eyebrow: 'Kernwortschatz — Die 7 Punkte',
      items: [
        { wort: 'der Name', kollokation: 'Mein Name ist López.', es: 'el nombre' },
        { wort: 'das Alter', kollokation: 'Ich bin 28 Jahre alt.', es: 'la edad' },
        { wort: 'das Land', kollokation: 'Ich komme aus Spanien.', es: 'el país' },
        { wort: 'der Wohnort', kollokation: 'Ich wohne in Sevilla.', es: 'el lugar donde vives' },
        { wort: 'die Sprache, -n', kollokation: 'Ich spreche Spanisch.', es: 'el idioma' },
        { wort: 'der Beruf', kollokation: 'Ich bin Kellner von Beruf.', es: 'la profesión' },
        { wort: 'das Hobby, -s', kollokation: 'Mein Hobby ist Musik.', es: 'el hobby' },
        { wort: 'buchstabieren', kollokation: 'A-N-A — Buchstabieren Sie bitte!', es: 'deletrear' },
        { wort: 'die Telefonnummer', kollokation: 'Meine Telefonnummer ist …', es: 'el número de teléfono' },
      ],
    },

    { type: 'rule' },

    // ── Erklärung ─────────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Erklärung — Ein Satz pro Punkt',
      kopf: ['Punkt', 'Dein Satz'],
      zeilen: [
        ['Name', 'Ich **heiße** … / Mein Name **ist** …'],
        ['Alter', 'Ich **bin** … Jahre alt.'],
        ['Land', 'Ich **komme** aus …'],
        ['Wohnort', 'Ich **wohne** in …'],
        ['Sprachen', 'Ich **spreche** … und ein bisschen Deutsch.'],
        ['Beruf', 'Ich **bin** … (von Beruf).'],
        ['Hobby', 'Mein Hobby **ist** … / Ich … **gern**.'],
      ],
    },
    {
      type: 'prose',
      eyebrow: 'Erklärung — Danach fragt der Prüfer nach',
      card: true,
      titel: 'Buchstabieren & Telefonnummer',
      absaetze: [
        'Nach deiner Vorstellung kommt oft eine **Nachfrage**: __„Buchstabieren Sie bitte Ihren Namen.“__ ~~(Deletree su nombre.)~~ Oder: __„Wie ist Ihre Telefonnummer?“__ — Also: **das Alphabet** und die **Zahlen** wiederholen! ~~Practica deletrear TU nombre y TU apellido con las letras alemanas hasta que salga solo.~~',
        'Die Telefonnummer sagst du **Zahl für Zahl**: 0176 = *null — eins — sieben — sechs*.',
      ],
    },

    { type: 'rule' },

    // ── Beispiele ─────────────────────────────────────────────────
    {
      type: 'modell',
      eyebrow: 'Beispiele — Modell-Vorstellung',
      thema: 'Sich vorstellen (Teil 1)',
      woerter: '~40 Wörter',
      absaetze: [
        'Ich heiße Carmen López. Ich bin 28 Jahre alt. Ich komme aus Spanien. Ich wohne in Sevilla. Ich spreche Spanisch und ein bisschen Deutsch. Ich bin Krankenschwester von Beruf. Mein Hobby ist Schwimmen. Ich lerne Deutsch für die Arbeit.',
      ],
      annotationen: [
        { tag: 'Reihenfolge', text: 'Immer die gleiche Ordnung: Name → Alter → Land → Wohnort → Sprachen → Beruf → Hobby. ~~El mismo orden siempre — así no se te olvida nada, ni con nervios.~~' },
        { tag: 'sein', text: '„Ich **bin** 28 Jahre **alt**.“ — ~~nunca «ich habe 28 Jahre»: en alemán la edad va con „sein“ (lección 4).~~' },
        { tag: 'Beruf', text: '„Ich bin Krankenschwester.“ — **ohne Artikel**! ~~«Soy enfermera», sin „eine“.~~' },
      ],
    },
    {
      type: 'redemittel',
      eyebrow: 'Beispiele — Die Nachfrage',
      gruppen: [
        {
          fn: 'Der Prüfer fragt — du antwortest',
          saetze: [
            { satz: 'Buchstabieren Sie bitte Ihren Namen. — L-Ó-P-E-Z.', gloss: 'Deletree su nombre. — Letra por letra, despacio.' },
            { satz: 'Wie ist Ihre Telefonnummer? — Null — eins — sieben — sechs — drei — vier …', gloss: 'Cifra por cifra.' },
            { satz: 'Wie bitte? Noch einmal, bitte.', gloss: 'Si no entiendes la pregunta — pide repetir (lección 26).' },
          ],
        },
      ],
    },

    { type: 'rule' },

    // ── Übungen ───────────────────────────────────────────────────
    {
      type: 'uebung',
      eyebrow: 'Anwendung — Übung 1 · Das richtige Verb',
      frage: 'Ergänze: bin, heiße, komme, wohne, spreche.',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Ich ___ Pablo Ruiz.',
        'Ich ___ aus Chile.',
        'Ich ___ in Berlin.',
        'Ich ___ Spanisch und Englisch.',
        'Ich ___ 35 Jahre alt.',
      ],
      loesungen: [
        'Ich **heiße** Pablo Ruiz.',
        'Ich **komme** aus Chile.',
        'Ich **wohne** in Berlin.',
        'Ich **spreche** Spanisch und Englisch.',
        'Ich **bin** 35 Jahre alt.',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 2 · Fehler korrigieren',
      frage: 'Typische Fehler ~~de hispanohablantes~~ — korrigiere.',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Ich habe 25 Jahre.',
        'Ich bin eine Lehrerin.',
        'Komme aus Peru.',
      ],
      loesungen: [
        'Ich **bin** 25 Jahre **alt**. ~~(«tengo 25 años» → con sein + alt)~~',
        'Ich bin Lehrerin. ~~(profesión sin artículo)~~',
        '**Ich** komme aus Peru. ~~(el pronombre sujeto es obligatorio en alemán)~~',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 3 · Produzieren — Deine Vorstellung',
      frage: 'Schreibe **deine** Vorstellung mit allen 7 Punkten. Dann: laut lesen und auswendig lernen! ~~Escríbela, léela en voz alta y memorízala.~~',
      loesungLabel: 'Muster',
      loesung: '*Ich heiße … Ich bin … Jahre alt. Ich komme aus … Ich wohne in … Ich spreche … und ein bisschen Deutsch. Ich bin … von Beruf. Mein Hobby ist …* ~~Rellena con tus datos — esta plantilla vale tal cual en el examen.~~',
    },

    { type: 'rule' },

    // ── Prüfungsbezug ─────────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Sprechen · Teil 1',
      titel: 'Vorstellung mit Nachfrage',
      anweisung: 'Ergänze die Vorstellung. Danach fragt der Prüfer nach.',
      absaetze: [
        '„Ich {1} Pablo. Ich {2} aus Mexiko. Ich {3} in Köln. Ich {4} Spanisch und Englisch.“',
        'Prüfer: „Buchstabieren Sie bitte Ihren Namen.“ — „{5}“',
      ],
      loesungLabel: 'Lösung',
      loesungen: [
        '{1} Ich **heiße** Pablo.',
        '{2} Ich **komme** aus Mexiko.',
        '{3} Ich **wohne** in Köln.',
        '{4} Ich **spreche** Spanisch und Englisch.',
        '{5} **P-A-B-L-O** ~~(despacio, letra por letra, con la pronunciación alemana)~~',
      ],
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Teil 1 ist ein **Geschenk**: Du weißt heute schon jede Frage. Lerne deine Vorstellung **auswendig** und übe sie **laut** — jeden Tag zwei Minuten. ~~Es la única parte del examen que puedes preparar al 100 % — que te salga sola.~~',
    },

    { type: 'rule' },

    // ── Abschluss ─────────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Punkt', 'Satzanfang'],
      zeilen: [
        ['Name', 'Ich heiße …'],
        ['Alter', 'Ich bin … Jahre alt.'],
        ['Land · Wohnort', 'Ich komme aus … · Ich wohne in …'],
        ['Sprachen', 'Ich spreche …'],
        ['Beruf', 'Ich bin … (ohne Artikel!)'],
        ['Hobby', 'Mein Hobby ist …'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich kann mich mit allen 7 Punkten vorstellen — auswendig.',
        'Ich kann meinen Namen buchstabieren.',
        'Ich kann meine Telefonnummer Zahl für Zahl sagen.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Nach der Vorstellung kommen die Karten: In **Teil 2** ziehst du eine Wortkarte und stellst eine Frage — und du antwortest auf die Frage von einem anderen Kandidaten. ~~Los patrones de pregunta, en la próxima lección.~~',
    },
  ],
}
