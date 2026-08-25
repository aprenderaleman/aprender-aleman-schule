// Lektion 31 · Familie & Freunde
//
// Bloque 3 (temático): presentar a la familia con Possessivartikel (→ Lektion 11),
// estado civil, describir personas — el tema nº 1 de Sprechen Teil 2.

export default {
  spec: ['Bloque 3', 'Themenfelder & Wortschatz', 'Niveau A2', 'Prüfungsrelevanz: Sprechen & Schreiben'],
  h1: 'Familie & Freunde',
  lead: '~~El tema nº 1 del examen oral:~~ **Erzählen Sie von Ihrer Familie!** — ~~aquí tienes las palabras y frases para responder.~~',

  content: [
    // ── Lernziele ─────────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'die Familie vorstellen: *Das ist meine Mutter.*',
        'den Familienstand nennen: *ledig, verheiratet* ~~(el estado civil)~~',
        'Personen einfach beschreiben: *Er ist nett und lustig.*',
      ],
    },

    { type: 'rule' },

    // ── Kernwortschatz ────────────────────────────────────────────
    {
      type: 'wortschatz',
      eyebrow: 'Kernwortschatz — Familie',
      items: [
        { wort: 'die Familie', kollokation: 'meine Familie ist groß', es: 'la familia' },
        { wort: 'die Eltern (Plural)', kollokation: 'Meine Eltern wohnen in Spanien.', es: 'los padres' },
        { wort: 'der Vater', kollokation: 'mein Vater', es: 'el padre' },
        { wort: 'die Mutter', kollokation: 'meine Mutter', es: 'la madre' },
        { wort: 'der Bruder', kollokation: 'Ich habe einen Bruder.', es: 'el hermano' },
        { wort: 'die Schwester', kollokation: 'meine kleine Schwester', es: 'la hermana' },
        { wort: 'die Geschwister (Plural)', kollokation: 'Hast du Geschwister?', es: 'los hermanos (chicos y chicas)' },
        { wort: 'die Großeltern (Plural)', kollokation: 'Oma und Opa', es: 'los abuelos' },
        { wort: 'das Kind, -er', kollokation: 'Wir haben zwei Kinder.', es: 'el hijo, el niño' },
        { wort: 'der Mann / die Frau', kollokation: 'mein Mann / meine Frau', es: 'el marido / la esposa' },
        { wort: 'der Freund / die Freundin', kollokation: 'mein bester Freund', es: 'el amigo / la amiga' },
        { wort: 'verheiratet', kollokation: 'Ich bin verheiratet.', es: 'casado/a' },
      ],
      hinweis: '~~Ojo: mein Freund / meine Freundin (con posesivo) suele significar novio/novia. «Un amigo» = ein Freund von mir.~~',
    },

    { type: 'rule' },

    // ── Erklärung ─────────────────────────────────────────────────
    {
      type: 'steps',
      eyebrow: 'Erklärung — drei Situationen',
      steps: [
        {
          badge: 'mein',
          titel: 'Die Familie vorstellen',
          text: 'Mit den __Possessivartikeln__ ~~(Lektion 11)~~ stellst du deine Familie vor: __Das ist **meine** Mutter. **Mein** Bruder heißt Luis.__ Im Akkusativ maskulin: __Ich besuche **meinen** Opa.__',
        },
        {
          badge: 'Stand',
          titel: 'Der Familienstand',
          text: 'In Formularen und in der Prüfung: __ledig__ ~~(soltero)~~, __verheiratet__ ~~(casado)~~, __geschieden__ ~~(divorciado)~~.\n__Ich bin verheiratet und habe zwei Kinder.__',
        },
        {
          badge: 'nett',
          titel: 'Personen beschreiben',
          text: '__sein__ + Adjektiv: __Mein Bruder **ist** sehr **nett**.__ Nützlich: *nett, lustig, sympathisch, groß, klein, jung, alt*. Das Alter: __Er **ist** 25 (Jahre alt).__ ~~(«tiene 25 años» — con sein, no con haben)~~',
        },
      ],
    },

    { type: 'rule' },

    // ── Beispiele ─────────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele',
      items: [
        { text: 'Meine Familie ist nicht groß: meine Eltern, meine Schwester und ich.', gl: '' },
        { text: 'Ich habe zwei Geschwister: **einen** Bruder und **eine** Schwester.', gl: '— Akkusativ: einen Bruder' },
        { text: 'Mein Vater ist 58 Jahre alt und arbeitet noch.', gl: '' },
        { text: 'Meine Schwester ist verheiratet und hat ein Kind.', gl: '' },
        { text: 'Das ist Anna und das ist **ihr** Mann.', gl: '— «su» de ella → ihr' },
      ],
    },
    {
      type: 'redemittel',
      eyebrow: 'Redemittel — von der Familie erzählen',
      gruppen: [
        {
          fn: 'Über die Familie sprechen',
          saetze: [
            { satz: 'Ich habe einen Bruder und eine Schwester.' },
            { satz: 'Meine Eltern wohnen in Madrid.' },
            { satz: 'Ich bin ledig. / Ich bin verheiratet.', gloss: 'soltero / casado' },
            { satz: 'Wir verstehen uns sehr gut.', gloss: 'nos llevamos muy bien' },
          ],
        },
      ],
    },

    { type: 'rule' },

    // ── Übungen ───────────────────────────────────────────────────
    {
      type: 'uebung',
      eyebrow: 'Anwendung — Übung 1 · Wie heißt das Wort?',
      frage: 'Ergänze das Familienwort.',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Mutter und Vater sind die ___.',
        'Bruder und Schwester sind die ___.',
        'Oma und Opa sind die ___.',
        'Ich bin nicht verheiratet, ich bin ___.',
      ],
      loesungen: [
        'Mutter und Vater sind die **Eltern**.',
        'Bruder und Schwester sind die **Geschwister**.',
        'Oma und Opa sind die **Großeltern**.',
        'Ich bin nicht verheiratet, ich bin **ledig**.',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 2 · mein, meine oder meinen?',
      frage: 'Ergänze den richtigen Possessivartikel.',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Das ist ___ Vater.',
        'Das ist ___ Mutter.',
        '___ Eltern wohnen in Sevilla.',
        'Am Sonntag besuche ich ___ Bruder.',
      ],
      loesungen: [
        'Das ist **mein** Vater.',
        'Das ist **meine** Mutter.',
        '**Meine** Eltern wohnen in Sevilla.',
        'Am Sonntag besuche ich **meinen** Bruder. ~~(Akkusativ maskulin → -en)~~',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 3 · Produzieren',
      frage: 'Schreib 4-5 Sätze über deine Familie (ca. 30 Wörter): Wie groß ist sie? Wer gehört dazu? Wie sind die Personen?',
      loesungLabel: 'Mögliche Lösung',
      loesung:
        'Meine Familie ist klein. Ich habe einen Bruder, er heißt Pablo und ist sehr lustig. Meine Eltern wohnen in Valencia. Ich bin ledig. Am Wochenende besuche ich oft meine Großeltern. ~~(Vale cualquier texto con posesivos correctos y 1-2 adjetivos.)~~',
    },

    { type: 'rule' },

    // ── Prüfungsbezug ─────────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Sprechen · Teil 2',
      titel: 'Von sich erzählen: Familie',
      anweisung: 'Erzähl von deiner Familie. Sprich über 3-4 Punkte: Wie groß ist sie? Wer gehört dazu? Familienstand? Wie sind die Personen?',
      absaetze: [
        'Stichwort: **Familie**.',
      ],
      loesungLabel: 'Mögliche Lösung',
      loesungen: [
        'Meine Familie ist groß. Ich habe drei Geschwister: zwei Brüder und eine Schwester.',
        'Meine Eltern wohnen in Spanien. Mein Vater ist 60 und sehr sympathisch.',
        'Ich bin verheiratet. Mein Mann heißt David und arbeitet viel.',
        'Wir sehen uns oft am Wochenende.',
      ],
      kommentar: 'Vier kurze Sätze reichen. Wichtig: Possessivartikel richtig (*meine Mutter, mein Vater*) und ein Adjektiv pro Person.',
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Der Prüfer fragt oft: **Haben Sie Geschwister?** Bereite die Antwort mit Akkusativ vor: *Ja, ich habe **einen** Bruder und **eine** Schwester.* Oder: *Nein, ich bin Einzelkind.* ~~(hijo único)~~',
    },

    { type: 'rule' },

    // ── Abschluss ─────────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Funktion', 'So sagst du es'],
      zeilen: [
        ['vorstellen', 'Das ist meine Mutter / mein Vater.'],
        ['Geschwister', 'Ich habe einen Bruder und eine Schwester.'],
        ['Familienstand', 'Ich bin ledig / verheiratet / geschieden.'],
        ['beschreiben', 'Er ist nett. Sie ist 30 (Jahre alt).'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich stelle meine Familie mit mein/meine vor.',
        'Ich nenne meinen Familienstand.',
        'Ich beschreibe eine Person mit zwei Adjektiven.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Deine Familie kennst du jetzt — aber **wo wohnt sie**? In der nächsten Lektion lernst du **Wohnen & Möbel**: die Wohnung, die Zimmer und wo die Möbel stehen.',
    },
  ],
}
