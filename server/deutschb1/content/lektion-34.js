// Lektion 34 · Arbeit & Beruf
//
// Bloque 3 (Themenfelder & Wortschatz): léxico del trabajo, Termine,
// Arbeitsalltag y la Krankmeldung. Error típico: *arbeiten als* (no wie).

export default {
  spec: ['Bloque 3', 'Themenfelder & Wortschatz', 'Niveau B1', 'Prüfungsrelevanz: Schreiben Teil 3 · Sprechen · Hören'],
  h1: 'Arbeit & Beruf',
  lead: 'Berufe, Termine, Arbeitsalltag — und die wichtigste E-Mail im Berufsleben: die **Krankmeldung**. ~~El vocabulario del trabajo cae seguro en el examen.~~',

  content: [
    // ── Lernziele ─────────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'über deinen Beruf und deinen Arbeitsalltag sprechen',
        'Termine vereinbaren und verschieben',
        'dich krankmelden — am Telefon und per E-Mail',
      ],
    },

    { type: 'rule' },

    // ── Kernwortschatz ────────────────────────────────────────────
    {
      type: 'wortschatz',
      eyebrow: 'Kernwortschatz',
      items: [
        { wort: 'der Beruf, -e', kollokation: 'einen Beruf lernen', es: 'la profesión' },
        { wort: 'die Stelle, -n', kollokation: 'eine Stelle suchen / finden', es: 'el puesto de trabajo' },
        { wort: 'der Kollege, -n / die Kollegin', kollokation: 'nette Kollegen haben', es: 'el/la compañero/a de trabajo' },
        { wort: 'der Chef, -s / die Chefin', kollokation: 'mit dem Chef sprechen', es: 'el/la jefe/a' },
        { wort: 'der Termin, -e', kollokation: 'einen Termin vereinbaren', es: 'la cita' },
        { wort: 'die Besprechung, -en', kollokation: 'in einer Besprechung sein', es: 'la reunión' },
        { wort: 'die Überstunde, -n', kollokation: 'Überstunden machen', es: 'la hora extra' },
        { wort: 'der Feierabend', kollokation: 'Feierabend machen', es: 'el fin de la jornada' },
        { wort: 'das Gehalt, Gehälter', kollokation: 'ein gutes Gehalt bekommen', es: 'el sueldo' },
        { wort: 'verdienen', kollokation: 'gut / wenig verdienen', es: 'ganar (dinero)' },
        { wort: 'sich bewerben', kollokation: 'sich um eine Stelle bewerben', es: 'solicitar (un puesto)' },
        { wort: 'die Krankmeldung, -en', kollokation: 'eine Krankmeldung schicken', es: 'el aviso de baja por enfermedad' },
      ],
      hinweis: '**Ich arbeite als Kellner.** — mit *als* und ohne Artikel. ~~«Trabajo como camarero» → **als**, nunca *wie*. Y sin artículo: no se dice „als ein Kellner“.~~',
    },

    { type: 'rule' },

    // ── Erklärung ─────────────────────────────────────────────────
    {
      type: 'prose',
      eyebrow: 'Erklärung — Arbeit im deutschen Alltag',
      card: true,
      titel: 'Termine sind heilig',
      absaetze: [
        'In deutschen Firmen ist ein __Termin__ fest: Man kommt pünktlich — besser fünf Minuten zu früh. Wenn du nicht kannst, sagst du **vorher** Bescheid und schlägst einen neuen Termin vor: *„Können wir den Termin auf Donnerstag verschieben?“* ~~Cancelar sin avisar se considera muy poco profesional.~~',
      ],
    },
    {
      type: 'prose',
      card: true,
      titel: 'Der Feierabend',
      absaetze: [
        'Nach der Arbeit beginnt der __Feierabend__ — die freie Zeit am Abend. Arbeit und Privatleben sind klar getrennt: Nach Feierabend liest man oft keine Arbeits-E-Mails mehr. Der Gruß *„Schönen Feierabend!“* ist im Büro so normal wie *„Tschüss“*.',
      ],
    },
    {
      type: 'prose',
      card: true,
      titel: 'Krank? Sofort Bescheid geben',
      absaetze: [
        'Wenn du krank bist, informierst du die Firma **am ersten Tag morgens** — kurz per Telefon oder E-Mail. Dauert es länger, brauchst du eine __Krankschreibung__ vom Arzt und schickst sie an den Arbeitgeber. ~~El papel del médico es obligatorio; solo «avisar» no basta si faltas varios días.~~',
      ],
    },

    { type: 'rule' },

    // ── Beispiele ─────────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele',
      kicker: 'Subthema 1',
      titel: 'Beruf & Stelle',
      items: [
        { text: 'Was sind Sie **von Beruf**?' },
        { text: 'Ich arbeite **als** Krankenpfleger in einem Krankenhaus.', gl: '— als + Beruf, ohne Artikel' },
        { text: 'Meine Frau ist Lehrerin und verdient gut.' },
        { text: 'Ich habe mich **um** eine neue Stelle **beworben**.' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'Subthema 2',
      titel: 'Arbeitsalltag & Termine',
      items: [
        { text: 'Ich fange um 8 Uhr an und mache um 17 Uhr **Feierabend**.' },
        { text: 'Heute muss ich leider **Überstunden machen**.' },
        { text: 'Um 10 Uhr habe ich eine **Besprechung** mit meiner Chefin.' },
        { text: 'Können wir den Termin **auf** Freitag **verschieben**?', gl: '— verschieben auf + Akk.' },
      ],
    },

    { type: 'rule' },

    // ── Redemittel ────────────────────────────────────────────────
    {
      type: 'redemittel',
      eyebrow: 'Redemittel — sich krankmelden & Termine',
      gruppen: [
        {
          fn: 'sich krankmelden (Telefon / E-Mail)',
          saetze: [
            { satz: 'Ich kann heute leider nicht zur Arbeit kommen.' },
            { satz: 'Ich bin krank und bleibe heute zu Hause.' },
            { satz: 'Ich gehe zum Arzt und schicke Ihnen die Krankschreibung.', gloss: '~~aviso + justificante: las dos piezas de la Krankmeldung~~' },
          ],
        },
        {
          fn: 'Termine vereinbaren & verschieben',
          saetze: [
            { satz: 'Passt es Ihnen am Montag um 14 Uhr?' },
            { satz: 'Leider muss ich unseren Termin verschieben.' },
            { satz: 'Könnten wir den Termin auf nächste Woche legen?' },
          ],
        },
      ],
    },

    { type: 'rule' },

    // ── Übungen ───────────────────────────────────────────────────
    {
      type: 'uebung',
      eyebrow: 'Anwendung — Übung 1 · Wortschatz',
      frage: 'Welches Wort passt?',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Das Geld, das man jeden Monat für die Arbeit bekommt: ___',
        'Die freie Zeit nach der Arbeit: ___',
        'Eine Person, mit der man zusammenarbeitet: ___',
        'Extra-Stunden, die man arbeitet: ___',
      ],
      loesungen: [
        '**das Gehalt**',
        '**der Feierabend**',
        '**der Kollege / die Kollegin**',
        '**die Überstunden**',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 2 · Sätze ergänzen',
      frage: 'Welche Präposition oder welches Wort fehlt?',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Ich arbeite ___ Verkäufer in einem Supermarkt. ~~(¿als o wie?)~~',
        'Ich möchte mich ___ die Stelle bewerben.',
        'Können wir die Besprechung ___ Montag verschieben?',
        'Um 17 Uhr mache ich ___.',
      ],
      loesungen: [
        'Ich arbeite **als** Verkäufer. ~~(als, nunca wie — y sin artículo)~~',
        'sich bewerben **um** + Akkusativ',
        'verschieben **auf** Montag ~~(auf + Akk.)~~',
        '**Feierabend** machen',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 3 · Produzieren',
      frage: 'Dein Arbeitstag: Schreib 60–80 Wörter. ~~(profesión, horario, compañeros, Feierabend)~~',
      loesungLabel: 'Mögliche Lösung',
      loesung: 'Ich arbeite als Verkäuferin in einem kleinen Geschäft. Mein Arbeitstag beginnt um 9 Uhr. Zuerst spreche ich kurz mit meinen Kollegen, dann öffnen wir das Geschäft. Mittags habe ich eine Stunde Pause. Manchmal muss ich Überstunden machen, aber normalerweise mache ich um 18 Uhr Feierabend. Meine Kollegen sind sehr nett, und meine Chefin hilft mir oft. Die Arbeit macht mir Spaß, aber ich möchte später mehr verdienen. *(~70 Wörter — dein Text darf natürlich anders sein: wichtig sind Beruf mit „als“, Zeiten und 1–2 Wörter aus dem Kernwortschatz.)*',
    },

    { type: 'rule' },

    // ── Prüfungsbezug ─────────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Schreiben · Teil 3 (formelle E-Mail, ~40 Wörter)',
      titel: 'Die Krankmeldung',
      anweisung: 'Sie sind krank und können heute nicht zur Arbeit kommen. Schreiben Sie eine E-Mail an Ihre Chefin, Frau Weber: Entschuldigen Sie sich höflich, nennen Sie den Grund und sagen Sie, was Sie jetzt machen.',
      absaetze: [
        'Denk an die drei Bausteine der formellen E-Mail: **Anrede** — **Inhalt in Sie-Form** — **Gruß**.',
      ],
      loesungLabel: 'Mögliche Lösung',
      loesungen: [
        'Sehr geehrte Frau Weber,\nleider kann ich heute nicht zur Arbeit kommen, weil ich krank bin. Ich gehe heute Vormittag zum Arzt und schicke Ihnen danach die Krankschreibung. Ich hoffe, dass ich bald wieder gesund bin.\nMit freundlichen Grüßen\nAna López *(~40 Wörter)*',
      ],
      kommentar: 'Alle drei Punkte sind erfüllt: Entschuldigung + Grund (*weil ich krank bin*) + Information (*Arzt, Krankschreibung*). Anrede und Gruß sind bei Teil 3 Pflicht — ohne sie verlierst du Punkte.',
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'In **Sprechen Teil 2 (Präsentation)** ist „Mein Beruf / Arbeit in meinem Land“ ein typisches Thema. Mit dem Wortschatz dieser Lektion (*als … arbeiten, Feierabend, Überstunden, Gehalt*) hast du schon die halbe Präsentation.',
    },

    { type: 'rule' },

    // ── Abschluss ─────────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Ausdruck', 'So benutzt du ihn'],
      zeilen: [
        ['arbeiten als', 'Ich arbeite **als** Kellner. — ohne Artikel, nie *wie*'],
        ['sich bewerben um', 'Ich bewerbe mich **um** die Stelle. (+ Akk.)'],
        ['verschieben auf', 'den Termin **auf** Freitag verschieben (+ Akk.)'],
        ['Feierabend machen', 'Um 17 Uhr mache ich Feierabend.'],
        ['die Krankmeldung', 'morgens Bescheid geben + Krankschreibung vom Arzt schicken'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich kann sagen, als was ich arbeite und wie mein Arbeitstag aussieht.',
        'Ich kann einen Termin vereinbaren und höflich verschieben.',
        'Ich kann eine kurze formelle Krankmeldung schreiben.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Nach der Arbeit kommt der Feierabend — und der findet meistens **zu Hause** statt. In der nächsten Lektion geht es um Wohnung, Möbel, Nachbarn und den Umzug: **Wohnen & Alltag**.',
    },
  ],
}
