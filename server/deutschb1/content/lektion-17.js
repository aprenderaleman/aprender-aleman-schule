// Lektion 17 · Reflexive Verben & Verben mit Kasus
//
// Abschluss des Grammatik-Blocks: die Modell-E-Mail am Ende bündelt
// die Strukturen der Lektionen 13–17.

export default {
  spec: ['Bloque 1', 'Grammatik & Struktur', 'Niveau B1', 'Prüfungsrelevanz: Schreiben & Sprechen'],
  h1: 'Reflexive Verben & Verben mit Kasus',
  lead: '*Ich freue **mich**, ich helfe **dir**.* ~~Verbos con «se» — y verbos que piden dativo aunque el español diga otra cosa.~~',

  content: [
    // ── Lernziele ─────────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'reflexive Verben mit Akkusativ benutzen (*ich freue mich*)',
        'das Reflexivpronomen im Dativ erkennen (*ich wasche mir die Hände*)',
        'die Dativ-Verben **helfen, danken, gefallen, gehören** richtig verwenden',
      ],
    },

    { type: 'rule' },

    // ── Kernwortschatz ────────────────────────────────────────────
    {
      type: 'wortschatz',
      eyebrow: 'Kernwortschatz',
      items: [
        { wort: 'sich freuen auf', kollokation: 'Ich freue mich auf das Wochenende.', es: 'tener ilusión por (algo futuro)' },
        { wort: 'sich freuen über', kollokation: 'Ich freue mich über das Geschenk.', es: 'alegrarse de (algo presente)' },
        { wort: 'sich treffen mit', kollokation: 'Wir treffen uns mit Freunden.', es: 'quedar con' },
        { wort: 'sich interessieren für', kollokation: 'Er interessiert sich für Musik.', es: 'interesarse por' },
        { wort: 'sich anmelden', kollokation: 'Ich melde mich für den Kurs an.', es: 'inscribirse' },
        { wort: 'sich beeilen', kollokation: 'Beeil dich, der Bus kommt!', es: 'darse prisa' },
        { wort: 'helfen + Dat.', kollokation: 'Ich helfe dir gern.', es: 'ayudar a alguien' },
        { wort: 'danken + Dat.', kollokation: 'Ich danke Ihnen.', es: 'dar las gracias a' },
        { wort: 'gefallen + Dat.', kollokation: 'Der Film gefällt mir.', es: 'gustar' },
        { wort: 'gehören + Dat.', kollokation: 'Das Buch gehört mir.', es: 'pertenecer a' },
      ],
      hinweis: 'Lern das Verb immer **mit** seinem *sich* und seiner Präposition — als ein Paket.',
    },

    { type: 'rule' },

    // ── Erklärung ─────────────────────────────────────────────────
    {
      type: 'steps',
      eyebrow: 'Erklärung — drei Gruppen',
      steps: [
        {
          badge: 'Gruppe 1',
          titel: 'Reflexiv mit Akkusativ',
          text: 'Das Normale: __mich, dich, sich, uns, euch, sich__.\n__Ich freue **mich**. · Er duscht **sich**.__ ~~Como el «me/te/se» español.~~',
        },
        {
          badge: 'Gruppe 2',
          titel: 'Reflexiv mit Dativ',
          text: 'Wenn der Satz __schon ein Akkusativ-Objekt__ hat, steht das Pronomen im Dativ — nur *ich* und *du* ändern sich: __**mir**, **dir**__.\n__Ich wasche **mir** die Hände.__ ~~(las manos ya son el acusativo)~~',
        },
        {
          badge: 'Gruppe 3',
          titel: 'Verben mit festem Dativ',
          text: 'Einige Verben nehmen __immer Dativ__: __helfen, danken, gefallen, gehören, antworten, gratulieren__.\n__Ich helfe **dir**. · Das Auto gehört **meinem** Bruder.__',
        },
      ],
    },
    {
      type: 'prose',
      card: true,
      absaetze: [
        '**Typischer Fehler:** ~~«Ayudar A alguien» suena a objeto directo, y por eso todos dicen~~ ~~*Ich helfe dich*~~. Falsch! *helfen* will den Dativ: **Ich helfe dir.** ~~Igual con «gustar»: en «me gusta el libro», el libro es el sujeto:~~ *Das Buch gefällt **mir*** — das Buch ist das Subjekt, du bist im Dativ.',
      ],
    },

    { type: 'rule' },

    // ── Beispiele ─────────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele',
      kicker: 'Gruppe 1',
      titel: 'Reflexiv (Akkusativ)',
      items: [
        { text: 'Ich **freue mich auf** deinen Besuch.', gl: '~~auf = ilusión por lo que viene~~' },
        { text: 'Wir **treffen uns** um acht vor dem Kino.' },
        { text: '**Interessierst du dich für** Fußball?' },
        { text: 'Sie **meldet sich** für den B1-Kurs **an**.' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'Gruppe 2',
      titel: 'Reflexiv (Dativ)',
      items: [
        { text: 'Ich wasche **mir** die Hände.', gl: '— die Hände = Akk., mir = Dat.' },
        { text: 'Putz **dir** die Zähne!' },
        { text: 'Ich kaufe **mir** ein neues Handy.', gl: '~~me compro = mir kaufen~~' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'Gruppe 3',
      titel: 'Verben mit Dativ',
      items: [
        { text: 'Kannst du **mir** kurz **helfen**?' },
        { text: 'Ich **danke Ihnen** für die Antwort.', gl: '— typisch in formellen E-Mails' },
        { text: 'Deine neue Wohnung **gefällt mir** sehr.' },
        { text: '**Wem gehört** diese Jacke?', gl: '~~¿de quién es? — Wem = Dativ~~' },
      ],
    },

    { type: 'rule' },

    // ── Übungen ───────────────────────────────────────────────────
    {
      type: 'uebung',
      eyebrow: 'Anwendung — Übung 1 · Erkennen',
      frage: 'Akkusativ oder Dativ? Warum?',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Ich ziehe mich an.',
        'Ich ziehe mir die Schuhe an.',
        'Ich danke dir für die Hilfe.',
        'Er interessiert sich für Autos.',
      ],
      loesungen: [
        '**mich** = Akkusativ — kein anderes Objekt im Satz',
        '**mir** = Dativ — *die Schuhe* ist schon der Akkusativ',
        '**dir** = Dativ — *danken* ist ein Dativ-Verb',
        '**sich** = Akkusativ — reflexives Verb mit Präposition *für*',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 2 · Pronomen einsetzen',
      frage: 'mich, mir, dich oder dir?',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Ich freue ___ auf die Party.',
        'Kann ich ___ helfen?',
        'Kauf ___ doch ein Eis! ~~(cómprate)~~',
        'Beeil ___, wir sind spät!',
      ],
      loesungen: [
        'Ich freue **mich** auf die Party. ~~(reflexivo, Akk.)~~',
        'Kann ich **dir** helfen? ~~(helfen + Dativ — nunca «dich»)~~',
        'Kauf **dir** doch ein Eis! ~~(ein Eis = Akk. → tú en Dativ)~~',
        'Beeil **dich**, wir sind spät! ~~(reflexivo, Akk.)~~',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 3 · Selbst bilden',
      frage: 'Antworte mit einem ganzen Satz.',
      loesungLabel: 'Mögliche Lösung',
      aufgaben: [
        'Worauf freust du dich diese Woche?',
        'Wem hilfst du manchmal — und wobei?',
      ],
      loesungen: [
        'Ich freue **mich auf** das Wochenende, weil ich **mich mit** Freunden treffe. ~~Vale cualquier plan real; lo importante: mich + auf + Akkusativ.~~',
        'Ich helfe **meiner Nachbarin** beim Einkaufen. ~~Persona en dativo: meinem Bruder, meinen Eltern…~~',
      ],
    },

    { type: 'rule' },

    // ── Prüfungsbezug — Synthese des Blocks ───────────────────────
    {
      type: 'modell',
      eyebrow: 'Prüfungsbezug — Schreiben Teil 1 (informelle E-Mail)',
      thema: 'Antwort auf eine Einladung — mit der Grammatik der Lektionen 13–17',
      woerter: '~80 Wörter',
      absaetze: [
        'Liebe Anna,',
        'danke für deine Einladung — ich **freue mich** sehr **auf** deine Party! Leider **wurde** mein Zug **wegen eines Streiks** gestrichen. Ich nehme deshalb den Bus, **um** pünktlich **zu sein**. Der Bus braucht zwar länger, aber so schaffe ich es sicher. **Könntest du mir** kurz schreiben, wie ich vom Bahnhof zu dir komme?',
        'Soll ich einen Kuchen mitbringen? Dein Apfelkuchen **hat mir** letztes Mal super **gefallen**! Sag mir einfach Bescheid, was du noch brauchst.',
        'Bis Samstag — liebe Grüße\nCarla',
      ],
      annotationen: [
        { tag: 'L17', text: '*ich freue mich auf* — reflexiv + Akkusativ; *hat mir gefallen* — gefallen + Dativ' },
        { tag: 'L15', text: '*wurde … gestrichen* — Passiv Präteritum' },
        { tag: 'L14', text: '*wegen eines Streiks* — wegen + Genitiv' },
        { tag: 'L13', text: '*Könntest du …?* — höfliche Bitte im Konjunktiv II' },
        { tag: 'L16', text: '*um pünktlich zu sein* — Zweck mit um … zu' },
      ],
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'In **Schreiben Teil 1** (informelle E-Mail, ~80 Wörter, empfohlen 20 Minuten) bringt dir genau diese Mischung Punkte: ein *Könntest du …?*, ein *ich freue mich auf …*, ein *um … zu*. Die Prüfer bewerten **Strukturen** als eigenes Kriterium — zeig, was du aus diesem Block kannst.',
    },

    { type: 'rule' },

    // ── Abschluss ─────────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Gruppe', 'Regel', 'Beispiel'],
      zeilen: [
        ['reflexiv + Akk.', 'mich, dich, sich …', 'Ich freue mich.'],
        ['reflexiv + Dat.', 'mir/dir, wenn Akk.-Objekt da ist', 'Ich wasche mir die Hände.'],
        ['Dativ-Verben', 'helfen, danken, gefallen, gehören', 'Ich helfe dir.'],
        ['mit Präposition', 'als Paket lernen', 'sich freuen auf + Akk.'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich benutze reflexive Verben mit dem richtigen Pronomen (mich/mir).',
        'Ich sage *Ich helfe dir* — nie *Ich helfe dich*.',
        'Ich kann *gefallen* und *gehören* mit Dativ verwenden.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Damit ist der Grammatik-Block komplett: Konjunktiv II, Genitiv, Passiv, zu-Infinitiv und die Verben mit Kasus — alles zusammen hast du in der Modell-E-Mail gesehen. Ab der nächsten Lektion wechseln wir die Perspektive: **Modul Lesen** — nicht mehr *wie funktioniert die Sprache*, sondern *wie knackst du die Prüfung*: die fünf Teile, die Zeit, die Strategien.',
    },
  ],
}
