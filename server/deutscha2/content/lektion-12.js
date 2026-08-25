// Lektion 12 · Personalpronomen — Akkusativ & Dativ

export default {
  spec: ['Bloque 1', 'Grammatik & Struktur', 'Niveau A2', 'Prüfungsrelevanz: alle Module'],
  h1: 'Personalpronomen — mich, dich, ihn / mir, dir, ihm',
  lead: '~~«Lo veo» →~~ __Ich sehe **ihn**.__ ~~«Me ayuda» →~~ __Er hilft **mir**.__ ~~Los pronombres personales en acusativo y dativo.~~',

  content: [
    // ── Lernziele ─────────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'die Akkusativpronomen *mich, dich, ihn, sie, es, uns, euch* benutzen',
        'die Dativpronomen *mir, dir, ihm, ihr, uns, euch, ihnen* benutzen',
        'wissen, wann Akkusativ und wann Dativ',
      ],
    },

    { type: 'rule' },

    // ── Kernwortschatz ────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Kernwortschatz — die Pronomen',
      kopf: ['Nominativ', 'Akkusativ ~~(lo/la/me/te)~~', 'Dativ ~~(le/me/te)~~'],
      zeilen: [
        ['ich', 'mich', 'mir'],
        ['du', 'dich', 'dir'],
        ['er', '**ihn**', '**ihm**'],
        ['sie', 'sie', '**ihr**'],
        ['es', 'es', 'ihm'],
        ['wir', 'uns', 'uns'],
        ['ihr', 'euch', 'euch'],
        ['sie / Sie (Pl.)', 'sie / Sie', 'ihnen / Ihnen'],
      ],
    },
    {
      type: 'prose',
      absaetze: ['~~uns y euch son iguales en los dos casos — dos formas menos que aprender.~~'],
    },

    { type: 'rule' },

    // ── Erklärung ─────────────────────────────────────────────────
    {
      type: 'steps',
      eyebrow: 'Erklärung — wann welches Pronomen?',
      steps: [
        {
          badge: 'Akk.',
          titel: 'Akkusativ: das direkte Objekt',
          text: 'Nach den meisten Verben (*sehen, kennen, lieben, besuchen, anrufen*) → __Akkusativ__. ~~(el complemento directo: lo, la, me, te)~~\n__Ich sehe **ihn**. Sie liebt **mich**.__',
        },
        {
          badge: 'Dat.',
          titel: 'Dativ: die Dativverben',
          text: 'Nach *helfen, danken, gefallen, gehören, antworten* (Lektion 9!) → __Dativ__. ~~(le, me, te — «a alguien»)~~\n__Ich helfe **ihm**. Das Kleid gefällt **ihr**.__',
        },
        {
          badge: 'Präp.',
          titel: 'Nach Präpositionen',
          text: 'Auch nach Präpositionen: *für, ohne* → Akkusativ, *mit, von, bei, zu* → Dativ.\n__Das Geschenk ist **für dich**. Kommst du **mit mir**?__',
        },
        {
          badge: 'ihn!',
          titel: 'Der typische Fehler',
          text: '~~«Lo veo» NO es *Ich sehe es* si hablas de una persona o de un sustantivo maskulin:~~ der Film → __Ich sehe **ihn**__. ~~En alemán «lo» maskulin = ihn, no es.~~',
        },
      ],
    },

    { type: 'rule' },

    // ── Beispiele ─────────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele',
      items: [
        { text: 'Kennst du Herrn Weber? — Ja, ich kenne **ihn** gut.', gl: '— Akkusativ (lo conozco)' },
        { text: 'Wo ist Anna? Ich rufe **sie** an.', gl: '— Akkusativ (la llamo)' },
        { text: 'Mein Bruder hat Probleme. Ich helfe **ihm**.', gl: '— helfen + Dativ (le ayudo)' },
        { text: 'Wie findest du die Jacke? — Sie gefällt **mir**.', gl: '— gefallen + Dativ (me gusta)' },
        { text: 'Besucht ihr **uns** am Wochenende?', gl: '— Akkusativ' },
        { text: 'Ich danke **euch** für die Einladung.', gl: '— danken + Dativ' },
      ],
    },

    { type: 'rule' },

    // ── Übungen ───────────────────────────────────────────────────
    {
      type: 'uebung',
      eyebrow: 'Anwendung — Übung 1 · Akkusativ erkennen',
      frage: 'Ersetze das Nomen durch ein Pronomen. ~~(Sustituye por el pronombre.)~~',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Ich sehe den Film. → Ich sehe ___.',
        'Er besucht seine Oma. → Er besucht ___.',
        'Wir kaufen das Brot. → Wir kaufen ___.',
        'Sie ruft ihre Eltern an. → Sie ruft ___ an.',
      ],
      loesungen: [
        'Ich sehe **ihn**. ~~(der Film → maskulin → ihn)~~',
        'Er besucht **sie**.',
        'Wir kaufen **es**.',
        'Sie ruft **sie** an. ~~(Plural)~~',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 2 · Akkusativ oder Dativ?',
      frage: 'Wähle das richtige Pronomen.',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Ich liebe (dich / dir).',
        'Kannst du (mich / mir) helfen?',
        'Das Auto gehört (ihn / ihm).',
        'Wir sehen (sie / ihr) morgen.',
      ],
      loesungen: [
        'Ich liebe **dich**. ~~(lieben + Akkusativ)~~',
        'Kannst du **mir** helfen? ~~(helfen + Dativ)~~',
        'Das Auto gehört **ihm**. ~~(gehören + Dativ)~~',
        'Wir sehen **sie** morgen. ~~(sehen + Akkusativ)~~',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 3 · Antworten produzieren',
      frage: 'Antworte mit einem Pronomen.',
      loesungLabel: 'Mögliche Lösung',
      aufgaben: [
        'Kennst du meinen Bruder? — Ja, …',
        'Gefällt dir die Musik? — Ja, …',
        'Hilfst du deiner Mutter? — Ja, …',
      ],
      loesungen: [
        'Ja, ich kenne **ihn**. ~~(meinen Bruder → ihn)~~',
        'Ja, sie gefällt **mir**.',
        'Ja, ich helfe **ihr**. ~~(die Mutter → Dativ → ihr)~~',
      ],
    },

    { type: 'rule' },

    // ── Prüfungsbezug ─────────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Schreiben · Kurze Mitteilung',
      titel: 'SMS an einen Freund',
      anweisung: 'In Teil 1 schreibst du eine kurze Nachricht. Ergänze die Pronomen:',
      absaetze: [
        '„Hallo Leo! Ich habe zwei Kinokarten. Kommst du mit {1}? Der Film ist super — alle finden {2} toll. Ruf {3} bitte an!“',
      ],
      optionen: ['(1) ich', '(2) der Film', '(3) ich'],
      loesungLabel: 'Lösung',
      loesungen: [
        '{1} Kommst du mit **mir**? ~~(mit + Dativ)~~',
        '{2} alle finden **ihn** toll. ~~(der Film → ihn)~~',
        '{3} Ruf **mich** bitte an! ~~(anrufen + Akkusativ)~~',
      ],
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Merke dir die drei Prüfungs-Klassiker: **Ruf mich an!**, **Das gefällt mir** und **Kommst du mit mir?** ~~Frases hechas que valen puntos en Schreiben y Sprechen — apréndelas como bloques completos.~~',
    },

    { type: 'rule' },

    // ── Abschluss ─────────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Regel', 'Beispiel'],
      zeilen: [
        ['Die meisten Verben → Akkusativ', 'Ich sehe ihn. Sie liebt mich.'],
        ['helfen, danken, gefallen, gehören → Dativ', 'Ich helfe ihm. Das gefällt mir.'],
        ['für, ohne → Akk. · mit, von, bei, zu → Dat.', 'für dich · mit mir'],
        ['der Film / der Mann → ihn (Akk.), ihm (Dat.)', 'Ich sehe ihn. Ich danke ihm.'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich benutze mich, dich, ihn, sie, es, uns, euch richtig.',
        'Ich benutze mir, dir, ihm, ihr, uns, euch, ihnen richtig.',
        'Ich weiß: nach helfen, danken, gefallen, gehören steht der Dativ.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Du kannst jetzt über Personen und Dinge sprechen. Jetzt lernst du zu vergleichen: **größer, besser, am liebsten** — der **Komparativ und Superlativ**. ~~(«más grande que», «el mejor», «lo que más me gusta» — imprescindible para hablar de tus gustos en el examen.)~~ Das ist das Thema der nächsten Lektion.',
    },
  ],
}
