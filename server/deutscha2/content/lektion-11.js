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
          text: 'Im Nominativ haben Possessivartikel die __Endungen von ein__: *mein Bruder, meine Mutter, mein Auto, meine Eltern*. ~~Igual que en el A1 — si dudas, ahí está la tabla completa.~~',
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

    // ── Übungen ───────────────────────────────────────────────────
    {
      type: 'uebung',
      eyebrow: 'Anwendung — Übung 1 · Endungen erkennen',
      frage: 'mein, meine oder meinen? Ergänze.',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Das ist ___ Schwester. (die Schwester)',
        'Das ist ___ Auto. (das Auto)',
        'Ich liebe ___ Bruder. (der Bruder, Akkusativ)',
        '___ Eltern wohnen in Madrid. (die Eltern, Plural)',
      ],
      loesungen: [
        'Das ist **meine** Schwester.',
        'Das ist **mein** Auto.',
        'Ich liebe **meinen** Bruder. ~~(Akkusativ maskulin)~~',
        '**Meine** Eltern wohnen in Madrid.',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 2 · Nominativ, Akkusativ oder Dativ?',
      frage: 'Ergänze den Possessivartikel in der richtigen Form. ~~(Tras mit, bei, von: Dativ.)~~',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Ich wohne noch bei ___ Eltern. (mein-)',
        'Kennst du ___ Bruder? (ihr-, de ella)',
        'Wir fahren mit ___ Auto. (unser-)',
        'Das ist ___ Lehrerin. (sein-)',
        'Anna telefoniert oft mit ___ Oma. (ihr-)',
      ],
      loesungen: [
        'Ich wohne noch bei **meinen** Eltern. ~~(Dativ Plural)~~',
        'Kennst du **ihren** Bruder? ~~(Akkusativ maskulin)~~',
        'Wir fahren mit **unserem** Auto. ~~(Dativ neutral)~~',
        'Das ist **seine** Lehrerin. ~~(Nominativ feminin)~~',
        'Anna telefoniert oft mit **ihrer** Oma. ~~(Dativ feminin)~~',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 3 · Über die Familie schreiben',
      frage: 'Schreibe drei Sätze über deine Familie — mit Nominativ, Akkusativ und Dativ.',
      loesungLabel: 'Mögliche Lösung',
      aufgaben: [
        '(Wer ist das? — Das ist …)',
        '(Wen besuchst du oft? — Ich besuche …)',
        '(Mit wem telefonierst du? — Ich telefoniere mit …)',
      ],
      loesungen: [
        'Das ist **meine** Mutter.',
        'Ich besuche oft **meinen** Opa. ~~(Akkusativ)~~',
        'Ich telefoniere mit **meiner** Schwester. ~~(Dativ — también correcto: mit meinem Bruder, mit meinen Eltern.)~~',
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
        'Denk an: **Anrede, alle drei Punkte, Gruß** — und auf die Possessivartikel achten!',
      ],
      loesungLabel: 'Mögliche Lösung',
      loesungen: [
        'Lieber Tom, am Samstag machen wir ein Fest bei **meinen** Eltern. **Meine** Schwester kommt mit **ihrem** Mann und **ihren** Kindern. Kommst du auch? Bring bitte **deinen** Fußball mit! Viele Grüße, Ana',
      ],
      kommentar: 'Drei Kasus in einer Mini-E-Mail: *bei meinen Eltern* (Dativ), *mit ihrem Mann* (Dativ), *deinen Fußball* (Akkusativ) — genau das zeigt dem Korrektor A2-Niveau.',
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Lern dir zwei **Anker-Sätze** auswendig: *Ich wohne bei **meinen** Eltern.* und *Ich fahre mit **meiner** Familie in den Urlaub.* ~~Con esas dos plantillas resuelves casi cualquier Dativ posesivo del Schreiben.~~',
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
      text: 'Statt *mein Bruder* immer zu wiederholen, sagst du einfach **er**, **ihn** oder **ihm**. ~~Los pronombres personales («lo veo», «le ayudo»)~~ — **mich, dich, ihn, mir, dir, ihm** — sind das Thema der nächsten Lektion. Die Endungen **-em, -er, -en** von heute siehst du dort wieder.',
    },
  ],
}
