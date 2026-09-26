// Lektion 07 · Präteritum — war, hatte & Erzählform

export default {
  spec: ['Bloque 1', 'Grammatik & Struktur', 'Niveau B1', 'Prüfungsrelevanz: alle Module'],
  h1: 'Präteritum — war, hatte & Erzählform',
  lead: 'Im Gespräch brauchst du nur **war**, **hatte** und die Modalverben — in Texten liest du das ganze Präteritum. ~~El pasado escrito del alemán.~~',

  content: [
    // ── Lernziele ─────────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        '*war* und *hatte* in allen Personen benutzen',
        'die Modalverben im Präteritum anwenden (konnte, musste, wollte …)',
        'häufige Präteritum-Formen in Texten erkennen (ging, kam, sah, gab)',
      ],
    },

    { type: 'rule' },

    // ── Kernwortschatz ────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Kernwortschatz',
      kopf: ['Person', 'sein → war', 'haben → hatte'],
      zeilen: [
        ['ich / er / sie / es', 'war', 'hatte'],
        ['du', 'warst', 'hattest'],
        ['wir / sie / Sie', 'waren', 'hatten'],
        ['ihr', 'wart', 'hattet'],
      ],
    },
    {
      type: 'beispiele',
      titel: 'Die Modalverben im Präteritum',
      items: [
        { text: 'können → **konnte** · müssen → **musste** · dürfen → **durfte**', gl: '— sin diéresis' },
        { text: 'wollen → **wollte** · sollen → **sollte**' },
      ],
    },

    { type: 'rule' },

    // ── Erklärung ─────────────────────────────────────────────────
    {
      type: 'steps',
      eyebrow: 'Erklärung — zwei Vergangenheiten, zwei Welten',
      steps: [
        {
          badge: 'Sprechen',
          titel: 'war, hatte & Modalverben — immer Präteritum',
          text: 'Im Gespräch erzählst du im Perfekt — __außer__ bei *sein, haben* und den Modalverben. Da klingt nur das Präteritum natürlich.\n__Ich **war** krank, ich **hatte** Fieber und **konnte** nicht arbeiten.__ ~~Nadie dice «ich bin krank gewesen».~~',
        },
        {
          badge: 'Lesen',
          titel: 'Die Erzählform — Präteritum in Texten',
          text: 'Geschichten, Blogs über Vergangenes, Zeitungstexte, Märchen: alles im Präteritum. Diese Formen musst du __erkennen__, nicht alle selbst bilden.\n__Sie **ging** zum Bahnhof, aber der Zug **kam** nicht.__',
        },
        {
          badge: '-te',
          titel: 'Das Muster der Modalverben',
          text: 'Stamm + __-te__, ohne Umlaut: k**o**nnte, m**u**sste, d**u**rfte. ~~Ojo: könnte (con ö) existe, pero significa «podría» — otra cosa.~~\n__Ich **musste** gestern lange arbeiten.__',
        },
      ],
    },
    {
      type: 'tabelle',
      eyebrow: 'Erklärung — Formen, die du in Texten triffst',
      kopf: ['Infinitiv', 'Präteritum', 'Spanisch'],
      zeilen: [
        ['gehen', 'ging', 'fue / iba (a pie)'],
        ['kommen', 'kam', 'vino / venía'],
        ['sehen', 'sah', 'vio / veía'],
        ['geben', 'gab — **es gab**', 'había ~~(muy frecuente)~~'],
        ['sagen', 'sagte', 'dijo / decía'],
        ['wissen', 'wusste', 'sabía'],
      ],
    },
    {
      type: 'prose',
      card: true,
      absaetze: [
        '**Der typische Fehler:** ~~El español separa «fui / iba», «tuve / tenía» — el alemán B1 no.~~ **War** heißt beides ~~(fui y era)~~, **hatte** auch ~~(tuve y tenía)~~. Such nicht nach zwei Formen — es gibt nur eine.',
      ],
    },

    { type: 'rule' },

    // ── Beispiele ─────────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele',
      kicker: 'Gespräch',
      titel: 'So sprichst du',
      items: [
        { text: 'Wo **warst** du gestern? — Ich **war** beim Arzt.', gl: '— ¿dónde estuviste?' },
        { text: 'Ich **hatte** Kopfschmerzen und **konnte** nicht kommen.', gl: '— excusa perfecta B1' },
        { text: 'Wir **wollten** ins Kino, aber wir **mussten** arbeiten.', gl: '— queríamos / tuvimos que' },
        { text: 'Als ich ein Kind war, **durfte** ich nicht lange fernsehen.', gl: '— als + Präteritum' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'Erzählform',
      titel: 'So liest du es',
      items: [
        { text: 'Letzte Woche **kam** meine Schwester zu Besuch. Wir **gingen** zusammen essen.', gl: '— estilo blog / relato' },
        { text: 'Im Restaurant **gab es** nur noch einen freien Tisch.', gl: '— es gab = había' },
      ],
    },
    {
      type: 'vergleich',
      titel: 'Perfekt oder Präteritum? — dieselbe Geschichte',
      zeilen: [
        { satz: 'Ich bin nach Hause gegangen.', label: 'so sagst du es (Perfekt)' },
        { satz: 'Ich ging nach Hause.', label: 'so liest du es (Präteritum)' },
        { satz: 'Ich war müde und hatte Hunger.', label: 'war/hatte: immer Präteritum — auch im Gespräch' },
      ],
    },

    { type: 'rule' },

    // ── Mehr Beispiele ────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Mehr Beispiele',
      titel: 'war, hatte & Modalverben im Alltag',
      items: [
        { text: 'Am Montag **hatte** ich einen Termin beim Zahnarzt.', gl: '— hatte = tenía / tuve' },
        { text: '**Wart** ihr schon einmal in Wien? — Ja, letztes Jahr.', gl: '— ihr → wart' },
        { text: 'Der Zug **hatte** Verspätung, deshalb **musste** ich ein Taxi nehmen.', gl: '— hatte + musste' },
        { text: 'Früher **wollte** meine Tochter Ärztin werden.', gl: '— wollen → wollte' },
        { text: 'Du **solltest** mich gestern doch anrufen! Warum **konntest** du nicht?', gl: '— sollen / können en pretérito' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'Erzählform',
      titel: 'Kleine Geschichten',
      items: [
        { text: 'Um sieben Uhr **kam** der Bus, aber er **war** voll.', gl: '— kommen → kam' },
        { text: 'Jonas **sah** seine alte Lehrerin im Supermarkt.', gl: '— sehen → sah' },
        { text: 'Niemand **wusste**, wo der Schlüssel **war**.', gl: '— wissen → wusste' },
        { text: 'Nach dem Konzert **gab es** keine Busse mehr, also **gingen** wir zu Fuß.', gl: '— es gab · gehen → gingen' },
        { text: 'Meine Oma **sagte** immer: „Morgen ist auch noch ein Tag.“', gl: '— sagen → sagte' },
      ],
    },

    { type: 'rule' },

    // ── Prüfungsbezug ─────────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Lesen · Teil 1 (Blog)',
      titel: 'Richtig oder falsch?',
      anweisung: 'In Lesen Teil 1 liest du Blogs und E-Mails — oft in der Erzählform. Lies den Text und entscheide:',
      absaetze: [
        '„Letztes Wochenende war ich mit meiner Familie in München. Wir hatten nur einen Tag Zeit, deshalb mussten wir früh aufstehen. Zuerst gingen wir ins Technikmuseum, danach gab es ein Eis im Stadtpark.“',
      ],
      optionen: ['(1) Die Familie hatte viel Zeit in München.', '(2) Sie waren zuerst im Museum.'],
      loesungLabel: 'Lösung',
      loesungen: [
        '(1) **Falsch** — „Wir **hatten** nur einen Tag Zeit.“',
        '(2) **Richtig** — „Zuerst **gingen** wir ins Technikmuseum.“ ~~Si no reconoces «gingen» como gehen, pierdes el punto — por eso hay que saber leer estas formas.~~',
      ],
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Die perfekte Mischung fürs **Schreiben Teil 1**: Erzähl deine Erlebnisse im **Perfekt**, aber *sein, haben* und Modalverben im **Präteritum**: *„Wir **sind** ans Meer **gefahren**. Das Wetter **war** toll und wir **hatten** viel Spaß.“* Genau so klingt natürliches B1-Deutsch.',
    },

    { type: 'rule' },

    // ── Abschluss ─────────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Was?', 'Wie?'],
      zeilen: [
        ['sein / haben', 'war / hatte — auch im Gespräch immer Präteritum'],
        ['Modalverben', 'Stamm + -te, ohne Umlaut: konnte, musste, durfte'],
        ['Erzählform', 'in Texten (Lesen!): ging, kam, sah, es gab'],
        ['alle anderen Verben', 'im Gespräch → Perfekt (Lektion 6)'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich benutze *war* und *hatte* in allen Personen richtig.',
        'Ich bilde die Modalverben im Präteritum ohne Umlaut.',
        'Ich erkenne Formen wie *ging, kam, gab* in einem Lesetext.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Von der Zeit zurück in den Raum: *Ich **war** im Kino* — aber *ich gehe **ins** Kino*? Neun Präpositionen wechseln je nach Frage (**Wo?** oder **Wohin?**) zwischen Dativ und Akkusativ. Die **Wechselpräpositionen** sind das Thema der nächsten Lektion.',
    },
  ],
}
