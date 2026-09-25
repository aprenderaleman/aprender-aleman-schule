// Lektion 11 · Possessivartikel
//
// Bloque 1 — Grammatik & Struktur. Diferencia frente al A1 (Lektion 11 allí):
// el Nominativ es solo repaso compacto; el núcleo A2 es el DATIV
// (meinem/meiner/meinen + n — coherente con Lektion 9) y el Akkusativ
// bien desarrollado, más euer → eure. Prüfungsbezug: Schreiben Teil 2.

export default {
  spec: ['Bloque 1', 'Grammatik & Struktur', 'Niveau A2', 'Prüfungsrelevanz: alle Module'],
  h1: 'Possessivartikel — mein, dein, sein …',
  lead: '~~Los posesivos ya los conoces del A1. Lo nuevo en A2 son sus terminaciones en~~ **Akkusativ** ~~y sobre todo en~~ **Dativ**: *mit meinem Bruder, bei meiner Familie*.',

  content: [
    // ── Lernziele ─────────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'die Possessivartikel im Nominativ wiederholen ~~(repaso del A1)~~',
        'den Akkusativ sicher benutzen: *Ich besuche meinen Bruder.*',
        'NEU: den Dativ benutzen: *mit meinem Bruder, bei meiner Familie*',
        '*euer* richtig kürzen: *eure, euren, eurem*',
      ],
    },

    { type: 'rule' },

    // ── Kernwortschatz ────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Kernwortschatz — Wiederholung: die Possessivartikel',
      kopf: ['Person', 'Possessivartikel', 'Bedeutung'],
      zeilen: [
        ['ich / du', 'mein / dein', 'mi / tu'],
        ['er, es / sie', '**sein** / **ihr**', 'su (de él) / su (de ella)'],
        ['wir / ihr', 'unser / euer', 'nuestro / vuestro'],
        ['sie (Plural) / Sie', 'ihr / Ihr', 'su (de ellos) / su (de usted)'],
      ],
    },
    {
      type: 'prose',
      absaetze: ['~~Repaso del A1 — incluida la trampa~~ **sein** ~~(de él)~~ / **ihr** ~~(de ella): mira al dueño, no al sustantivo. Lo nuevo de hoy: las terminaciones según el caso.~~'],
    },

    { type: 'rule' },

    // ── Erklärung ─────────────────────────────────────────────────
    {
      type: 'steps',
      eyebrow: 'Erklärung — die Endungen nach Kasus',
      steps: [
        {
          badge: 'Nom.',
          titel: 'Wiederholung: wie ein',
          text: 'Im Nominativ haben Possessivartikel die __Endungen von ein__: *mein Bruder, meine Mutter, mein Auto, meine Eltern*. ~~Igual que en el A1; la tabla completa viene después de estos pasos.~~',
        },
        {
          badge: 'Akk.',
          titel: 'Akkusativ: -en beim Maskulinum',
          text: 'Nur maskulin ändert sich: __meinen, deinen, seinen, unseren__ … ~~(como einen)~~\n__Ich besuche **meinen** Bruder.__ · __Wir fragen **unseren** Lehrer.__ Feminin, neutral, Plural: wie im Nominativ.',
        },
        {
          badge: 'Dat. NEU',
          titel: 'Dativ: meinem, meiner, meinen + n',
          text: 'Nach den Dativ-Präpositionen ~~(Lektion 9)~~ __mit, bei, von, zu__: maskulin/neutral → __mein**em**__, feminin → __mein**er**__, Plural → __mein**en**__ + **-n** am Nomen.\n__mit **meinem** Bruder__ · __bei **meiner** Familie__ · __von **unseren** Eltern__ · __mit **meinen** Freunde**n**__ ~~(ojo: en plural también el sustantivo añade -n)~~',
        },
        {
          badge: 'euer',
          titel: 'Achtung: euer → eure',
          text: 'Mit Endung verliert *euer* das zweite e: __eure__ Mutter, __euren__ Bruder (Akk.), __eurem__ Kind (Dat.) ~~(no *euere*)~~.',
        },
      ],
    },
    {
      type: 'tabelle',
      eyebrow: 'Erklärung — die Endungen im Überblick',
      kopf: ['Kasus', 'maskulin', 'feminin', 'neutral', 'Plural'],
      zeilen: [
        ['Nominativ', 'mein', 'meine', 'mein', 'meine'],
        ['Akkusativ', '**meinen**', 'meine', 'mein', 'meine'],
        ['Dativ', '**meinem**', '**meiner**', '**meinem**', '**meinen** + n'],
      ],
    },

    { type: 'rule' },

    // ── Beispiele ─────────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele',
      items: [
        { text: 'Das ist **meine** Schwester und das ist **ihr** Mann.', gl: '— Nominativ, wie im A1' },
        { text: 'Ich besuche am Sonntag **meinen** Opa.', gl: '— Akkusativ maskulin: -en' },
        { text: 'Ich wohne noch bei **meiner** Familie.', gl: '— bei + Dativ, feminin' },
        { text: 'Wir fahren mit **unserem** Auto nach Valencia.', gl: '— mit + Dativ, neutral' },
        { text: 'Das Geschenk ist von **unseren** Eltern.', gl: '— von + Dativ, Plural' },
        { text: 'Paul spielt mit **seinen** Kindern im Park.', gl: '— Plural + -n: Kindern' },
      ],
    },

    { type: 'rule' },

    // ── Mehr Beispiele ────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Mehr Beispiele',
      titel: 'Akkusativ: meinen, deinen, ihren …',
      items: [
        { text: 'Ich rufe **meinen** Chef an.', gl: '— Akkusativ maskulin: -en' },
        { text: 'Besuchst du am Sonntag **deine** Tante?', gl: '— feminin: sin cambio' },
        { text: 'Elena sucht **ihren** Schlüssel.', gl: '— ihr (de ella) + -en' },
        { text: 'Habt ihr **euren** Hund gefunden?', gl: '— euer → euren' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'mit · bei · von · zu',
      titel: 'Dativ mit Possessivartikel',
      items: [
        { text: 'Ich lerne **mit meiner** Freundin für die Prüfung.', gl: '— mit + Dativ feminin' },
        { text: 'Diego wohnt noch **bei seinen** Eltern.', gl: '— bei + Dativ Plural' },
        { text: 'Das Fahrrad ist **von meinem** Onkel.', gl: '— von + Dativ maskulin' },
        { text: 'Fährst du am Samstag **zu deiner** Schwester?', gl: '— zu + Dativ feminin' },
        { text: 'Sie kocht gern **mit ihrer** Tochter.', gl: '— mit + Dativ feminin' },
      ],
    },

    { type: 'rule' },

    // ── Prüfungsbezug ─────────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Schreiben · Teil 2',
      titel: 'E-Mail: Einladung zum Familienfest',
      anweisung: 'In Teil 2 schreibst du eine kurze E-Mail (ca. 30-40 Wörter). Aufgabe: Deine Familie macht am Samstag ein Fest. Lade deinen Freund Tom ein. Schreib: Wo ist das Fest? Wer kommt? Was soll Tom mitbringen?',
      absaetze: [
        'Denk an: **Anrede, alle drei Punkte, Gruß**. Und achte auf die Possessivartikel!',
      ],
      loesungLabel: 'Mögliche Lösung',
      loesungen: [
        'Lieber Tom, am Samstag machen wir ein Fest bei **meinen** Eltern. **Meine** Schwester kommt mit **ihrem** Mann und **ihren** Kindern. Kommst du auch? Bring bitte **deinen** Fußball mit! Viele Grüße, Ana',
      ],
      kommentar: 'Zwei Kasus in einer Mini-E-Mail: *bei meinen Eltern* (Dativ), *mit ihrem Mann* (Dativ), *deinen Fußball* (Akkusativ). Genau das zeigt dem Prüfer A2-Niveau.',
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Lern zwei **Sätze** auswendig: *Ich wohne bei **meinen** Eltern.* und *Ich fahre mit **meiner** Familie in den Urlaub.* ~~Con esas dos plantillas resuelves casi cualquier Dativ posesivo del Schreiben.~~',
    },

    { type: 'rule' },

    // ── Abschluss ─────────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Regel', 'Beispiel'],
      zeilen: [
        ['Nominativ: wie ein/eine (A1)', 'mein Bruder, meine Mutter, mein Auto'],
        ['Akkusativ maskulin: -en', 'Ich besuche meinen Opa.'],
        ['Dativ: -em / -er / -en + n', 'mit meinem Bruder · bei meiner Familie · von unseren Eltern'],
        ['euer + Endung = eur-', 'eure Mutter, euren Bruder, eurem Kind'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich kenne die Possessivartikel im Nominativ (Wiederholung aus dem A1).',
        'Ich benutze den Akkusativ: Ich besuche meinen Bruder.',
        'Ich benutze den Dativ: mit meinem Bruder, bei meiner Familie.',
        'Ich weiß: Dativ Plural → meinen Eltern, meinen Freunden (+ -n).',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Du musst nicht immer *mein Bruder* sagen. Sag einfach **er**, **ihn** oder **ihm**. ~~Los pronombres personales («lo veo», «le ayudo»)~~ — **mich, dich, ihn, mir, dir, ihm** — sind das Thema von Lektion 12. Die Endungen **-em, -er, -en** von heute siehst du dort wieder.',
    },
  ],
}
