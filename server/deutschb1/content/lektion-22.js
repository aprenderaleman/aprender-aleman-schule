// Lektion 22 · Lesen Teil 4–5: Anweisungen & formelle Texte
//
// Bloque 2 «Prüfungsstrategie» — módulo Lesen (canon interno: Lektion 18).
// Teil 4 (Anweisungen, richtig/falsch) + Teil 5 (formelle Texte, Auswahl),
// zusammen ca. 25 Min. Cierre del módulo: tabla-síntesis de los 5 Teile.

export default {
  spec: ['Bloque 2', 'Prüfungsstrategie', 'Niveau B1', 'Prüfungsrelevanz: Lesen Teil 4–5'],
  h1: 'Lesen Teil 4–5: Anweisungen & formelle Texte',
  lead: 'Hausordnung, Aushang, Brief vom Amt: Offizielle Texte klingen streng — aber sie folgen **festen Mustern**, die du knacken kannst. ~~El alemán oficial tiene fórmulas fijas.~~',

  content: [
    // ── Lernziele ─────────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'formelle Kurztexte verstehen: Hausordnung, Aushang, Mitteilung vom Amt',
        'die Struktur **sein + zu + Infinitiv** entschlüsseln (*ist zu trennen* = man muss trennen)',
        'Verbots- und Erlaubnis-Wortschatz erkennen (*gestattet, verboten, erlaubt*)',
        'alle fünf Teile des Moduls Lesen im Überblick wiederholen',
      ],
    },

    { type: 'rule' },

    // ── Kernwortschatz ────────────────────────────────────────────
    {
      type: 'wortschatz',
      eyebrow: 'Kernwortschatz — Amts- und Hausordnungsdeutsch',
      items: [
        { wort: 'die Hausordnung, -en', kollokation: 'die Hausordnung beachten', es: 'las normas de la comunidad' },
        { wort: 'der Aushang, -hänge', kollokation: 'der Aushang im Treppenhaus', es: 'el aviso (colgado)' },
        { wort: 'das Amt, Ämter', kollokation: 'ein Brief vom Amt', es: 'la oficina pública' },
        { wort: 'das Formular, -e', kollokation: 'das Formular ausfüllen', es: 'el formulario' },
        { wort: 'der Antrag, Anträge', kollokation: 'einen Antrag stellen', es: 'la solicitud' },
        { wort: 'die Frist, -en', kollokation: 'die Frist einhalten', es: 'el plazo' },
        { wort: 'die Gebühr, -en', kollokation: 'eine Gebühr bezahlen', es: 'la tasa' },
        { wort: 'der Termin, -e', kollokation: 'einen Termin vereinbaren', es: 'la cita ~~(¡no «término»!)~~' },
        { wort: '(nicht) gestattet', kollokation: 'Rauchen ist nicht gestattet.', es: '(no) permitido' },
        { wort: 'verboten', kollokation: 'Parken verboten', es: 'prohibido' },
        { wort: 'beachten', kollokation: 'Bitte beachten Sie …', es: 'tener en cuenta, observar' },
        { wort: 'sich wenden an + Akk.', kollokation: 'sich an die Verwaltung wenden', es: 'dirigirse a' },
      ],
      hinweis: 'Formelle Texte lieben Nomen: „**vor der Benutzung**“ = bevor man etwas benutzt. ~~Donde el español pondría un verbo, el alemán oficial pone un sustantivo.~~',
    },

    { type: 'rule' },

    // ── Erklärung ─────────────────────────────────────────────────
    {
      type: 'steps',
      eyebrow: 'Erklärung — offizielle Sprache entschlüsseln',
      steps: [
        {
          badge: 'sein + zu',
          titel: 'Die wichtigste Struktur',
          text: '__sein + zu + Infinitiv__ = müssen (oder nicht dürfen):\n„Der Müll **ist zu trennen**.“ = Man **muss** den Müll trennen.\n„Das Tor **ist geschlossen zu halten**.“ = Man **muss** es geschlossen halten.',
        },
        {
          badge: 'erlaubt?',
          titel: 'Verbot oder Erlaubnis?',
          text: '__nicht gestattet / verboten / untersagt__ = man darf nicht.\n__gestattet / erlaubt / möglich__ = man darf. ~~«gestattet» y «untersagt» son la versión formal de «erlaubt» y «verboten».~~',
        },
        {
          titel: 'Frage an den Text stellen',
          text: 'Bei jeder Regel frag dich: **Wer** muss **was** tun — und **wann**? Mehr brauchst du nicht.',
        },
      ],
    },
    {
      type: 'tabelle',
      eyebrow: 'Erklärung — formell und einfach',
      kopf: ['Formell (im Text)', 'Einfach (Bedeutung)'],
      zeilen: [
        ['Der Müll ist zu trennen.', 'Man muss den Müll trennen.'],
        ['Rauchen ist nicht gestattet.', 'Man darf hier nicht rauchen.'],
        ['Die Frist ist einzuhalten.', 'Man muss pünktlich sein (vor dem Datum).'],
        ['Bei Fragen wenden Sie sich an …', 'Wenn Sie Fragen haben, kontaktieren Sie …'],
      ],
    },

    { type: 'rule' },

    // ── Beispiele ─────────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele — vom Amtsdeutsch ins Klare',
      kicker: 'sein + zu',
      titel: 'So übersetzt du die Struktur im Kopf',
      items: [
        { text: '„Der Antrag **ist bis zum 31. Mai einzureichen**.“', gl: '— man muss ihn vor dem 1. Juni abgeben' },
        { text: '„Fahrräder **sind im Fahrradkeller abzustellen**.“', gl: '— Fahrräder gehören in den Keller, nirgendwo sonst' },
        { text: '„Die Waschküche **ist nach der Benutzung zu reinigen**.“', gl: '— danach sauber machen: Pflicht' },
        { text: '„Haustiere **sind** in der Anlage **nicht gestattet**.“', gl: '— verboten, formell gesagt' },
      ],
    },

    { type: 'rule' },

    // ── Übungen ───────────────────────────────────────────────────
    {
      type: 'uebung',
      eyebrow: 'Anwendung — Übung 1 · Erkennen',
      frage: 'Pflicht (muss) oder Verbot (darf nicht)?',
      loesungLabel: 'Lösung',
      aufgaben: [
        '„Das Treppenhaus ist frei zu halten.“',
        '„Grillen auf dem Balkon ist nicht gestattet.“',
        '„Der Schlüssel ist bei der Verwaltung abzugeben.“',
      ],
      loesungen: [
        '**Pflicht** — man muss das Treppenhaus frei halten (nichts abstellen).',
        '**Verbot** — man darf auf dem Balkon nicht grillen.',
        '**Pflicht** — man muss den Schlüssel dort abgeben.',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 2 · Umformen',
      frage: 'Sag es einfach — mit *müssen* oder *dürfen*.',
      loesungLabel: 'Lösung',
      aufgaben: [
        '„Die Mülltonnen sind montags an die Straße zu stellen.“',
        '„Das Füttern der Tauben ist untersagt.“',
        '„Reparaturen sind der Hausverwaltung zu melden.“',
      ],
      loesungen: [
        'Man **muss** die Mülltonnen montags an die Straße stellen.',
        'Man **darf** die Tauben **nicht** füttern. ~~«untersagt» = «verboten» en formal.~~',
        'Man **muss** Reparaturen der Hausverwaltung melden.',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 3 · Produzieren',
      frage: 'Schreib zwei Regeln für die Hausordnung einer Sprachschule — formell, mit **sein + zu** oder **(nicht) gestattet**.',
      loesungLabel: 'Mögliche Lösung',
      aufgaben: [
        'Regel 1 (Pflicht):',
        'Regel 2 (Verbot):',
      ],
      loesungen: [
        '„Die Kursräume **sind** nach dem Unterricht **aufzuräumen**.“ ~~Vale cualquier obligación con sein + zu.~~',
        '„Essen **ist** in der Bibliothek **nicht gestattet**.“',
      ],
    },

    { type: 'rule' },

    // ── Prüfungsbezug ─────────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Lesen · Teil 4–5',
      titel: 'Komplette Übung: Hausordnung + 5 Aufgaben',
      anweisung: 'Lies die Hausordnung. Sind die Aussagen 1–4 richtig oder falsch? Kreuze bei Aufgabe 5 die richtige Lösung an. Zeit für Teil 4 und 5 zusammen: ca. 25 Minuten.',
      absaetze: [
        '**Hausordnung — Wohnanlage Gartenstraße 12**',
        'Liebe Mieterinnen und Mieter, wir bitten um Beachtung der folgenden Regeln:',
        '**Ruhezeiten:** Von 22 bis 7 Uhr sowie von 13 bis 15 Uhr ist Lärm zu vermeiden. Musik ist in dieser Zeit nur in Zimmerlautstärke gestattet.',
        '**Treppenhaus:** Das Treppenhaus ist aus Sicherheitsgründen frei zu halten. Kinderwagen und Fahrräder sind im Keller abzustellen; das Abstellen im Hof ist nicht gestattet.',
        '**Müll:** Der Müll ist zu trennen (Papier, Glas, Restmüll). Sperrmüll — zum Beispiel alte Möbel — ist vorher beim Hausmeister, Herrn Kowalski, anzumelden.',
        '**Waschküche:** Die Benutzung ist täglich von 8 bis 20 Uhr möglich. Bitte tragen Sie sich in den Plan an der Tür ein. Nach der Benutzung ist der Raum zu reinigen.',
        'Bei Fragen zur Hausordnung wenden Sie sich bitte an die Hausverwaltung Meier (Tel. 040 / 55 66 77, Mo–Fr 9–12 Uhr). — Ihre Hausverwaltung',
      ],
      optionen: [
        '(1) Nach 22 Uhr muss es in der Wohnanlage leise sein. — richtig / falsch',
        '(2) Fahrräder darf man im Hof abstellen. — richtig / falsch',
        '(3) Die Waschküche kann man rund um die Uhr benutzen. — richtig / falsch',
        '(4) Alte Möbel muss man vorher beim Hausmeister anmelden. — richtig / falsch',
        '(5) Sie haben eine Frage zur Hausordnung. Was tun Sie? — a) Sie rufen Herrn Kowalski an. · b) Sie rufen die Hausverwaltung Meier an. · c) Sie tragen sich in den Plan an der Tür ein.',
      ],
      loesungLabel: 'Lösung mit Begründung',
      loesungen: [
        '(1) **Richtig.** „Von 22 bis 7 Uhr … ist Lärm zu vermeiden“ — sein + zu = Pflicht: leise sein.',
        '(2) **Falsch.** „das Abstellen im Hof ist **nicht gestattet**“ — Fahrräder gehören in den Keller.',
        '(3) **Falsch.** „Die Benutzung ist täglich **von 8 bis 20 Uhr** möglich“ — nicht rund um die Uhr.',
        '(4) **Richtig.** „Sperrmüll … ist vorher beim Hausmeister … **anzumelden**“ — anmelden = Pflicht. ~~«ist anzumelden» = hay que avisar antes.~~',
        '(5) **b.** „Bei Fragen **zur Hausordnung** wenden Sie sich … an die **Hausverwaltung**.“ Der Hausmeister ist nur für Sperrmüll zuständig (Falle a), der Plan nur für die Waschküche (Falle c).',
      ],
      kommentar: 'Typisch Teil 4–5: Jede Falle benutzt eine echte Information des Textes (Hausmeister, Plan an der Tür) — aber am falschen Ort. Frag immer: **Wer** ist **wofür** zuständig?',
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Wenn du ein formelles Wort nicht kennst: Übersetze die **Struktur**, nicht das Wort. *ist zu + Infinitiv* = müssen, *nicht gestattet* = verboten. Damit löst du die meisten Aufgaben — auch ohne Wörterbuch im Kopf.',
    },

    { type: 'rule' },

    // ── Abschluss ─────────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung — das ganze Modul Lesen',
      kopf: ['Teil', 'Text', 'Aufgabe', 'Deine Strategie'],
      zeilen: [
        ['Teil 1', 'Blog / E-Mail', 'richtig/falsch + Auswahl', 'Zeitwörter beachten: früher, inzwischen'],
        ['Teil 2', 'Anzeigen', 'zuordnen (auch „0“)', 'Schlüsselwörter — alle Bedingungen prüfen'],
        ['Teil 3', 'Meinungen', 'dafür / dagegen / teils-teils', 'bis zum Ende lesen — „aber“ entscheidet'],
        ['Teil 4', 'Anweisungen', 'richtig/falsch', 'sein + zu = müssen; nicht gestattet = verboten'],
        ['Teil 5', 'formelle Texte', 'Auswahl (a/b/c)', 'Wer ist wofür zuständig?'],
        ['Gesamt', '65 Minuten', 'Zeitplan 10·15·15·15·10 Min.', 'alles ankreuzen — keine Minuspunkte'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich verstehe eine Hausordnung und einen Brief vom Amt in den Grundzügen.',
        'Ich entschlüssle sein + zu + Infinitiv als Pflicht („ist zu trennen“ = man muss trennen).',
        'Ich erkenne Verbote auch in formeller Form (nicht gestattet, untersagt).',
        'Ich habe für alle fünf Teile des Moduls Lesen eine Strategie.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Damit ist das Modul Lesen komplett — du hast für jeden der fünf Teile eine Methode. Als Nächstes kommt das **Modul Hören**: ca. 40 Minuten, 4 Teile — von der Durchsage am Bahnhof bis zur Diskussion im Radio. Die nächste Lektion gibt dir den Überblick.',
    },
  ],
}
