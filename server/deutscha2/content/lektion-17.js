// Lektion 17 · Reflexive Verben
//
// Bloque 1 · Grammatik & Struktur — sich freuen, sich duschen, sich treffen:
// mich/dich/sich. Cierra el bloque con una E-Mail modelo anotada.

export default {
  spec: ['Bloque 1', 'Grammatik & Struktur', 'Niveau A2', 'Prüfungsrelevanz: Schreiben & Sprechen'],
  h1: 'Reflexive Verben',
  lead: '~~«Me ducho, me alegro, quedamos»:~~ **Ich dusche mich, ich freue mich, wir treffen uns.** ~~Igual que en español — pero el pronombre cambia distinto.~~',

  content: [
    // ── Lernziele ─────────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'die Reflexivpronomen benutzen: *mich, dich, sich, uns, euch, sich*',
        'die wichtigsten reflexiven Verben des Alltags kennen',
        'die Strukturen aus Block 1 in einer E-Mail wiedererkennen',
      ],
    },

    { type: 'rule' },

    // ── Kernwortschatz ────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Kernwortschatz — reflexive Verben',
      kopf: ['Verb', 'Beispiel', 'Bedeutung'],
      zeilen: [
        ['sich freuen (auf)', 'Ich freue mich auf das Fest.', 'alegrarse / tener ganas de'],
        ['sich duschen', 'Ich dusche mich morgens.', 'ducharse'],
        ['sich treffen (mit)', 'Wir treffen uns um 8.', 'quedar / encontrarse'],
        ['sich anziehen', 'Er zieht sich an.', 'vestirse'],
        ['sich beeilen', 'Beeil dich!', 'darse prisa'],
        ['sich ausruhen', 'Ich ruhe mich aus.', 'descansar'],
        ['sich fühlen', 'Ich fühle mich gut.', 'sentirse'],
        ['sich interessieren (für)', 'Sie interessiert sich für Musik.', 'interesarse por'],
      ],
    },

    { type: 'rule' },

    // ── Erklärung ─────────────────────────────────────────────────
    {
      type: 'steps',
      eyebrow: 'Erklärung — mich, dich, sich',
      steps: [
        {
          badge: 'Pronomen',
          titel: 'Für jede Person eins',
          text: 'ich → __mich__ · du → __dich__ · er/sie/es → __sich__ · wir → __uns__ · ihr → __euch__ · sie/Sie → __sich__.\n**Achtung:** __sich__ nur in der 3. Person! ~~El error típico: *ich freue sich* ❌ — «sich» NO es como el «se» universal del español.~~ ✓ __Ich freue **mich**.__',
        },
        {
          badge: 'Position',
          titel: 'Direkt nach dem Verb',
          text: 'Das Verb bleibt auf __Position 2__, das Pronomen kommt direkt danach:\n__Ich **freue mich** auf das Wochenende.__ · __Wir **treffen uns** im Café.__',
        },
        {
          badge: 'wie Spanisch',
          titel: 'Bekannte Idee, neue Form',
          text: '~~La idea la conoces del español (ducharse, alegrarse). La diferencia: en alemán el pronombre va DETRÁS del verbo, no delante:~~ *me ducho* → __Ich dusche **mich**__ ~~(no: *mich dusche*)~~.',
        },
      ],
    },

    { type: 'rule' },

    // ── Beispiele ─────────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele',
      items: [
        { text: 'Ich **freue mich** auf deinen Besuch.', gl: '— tengo ganas de tu visita' },
        { text: '**Duschst du dich** morgens oder abends?', gl: '— ¿te duchas…?' },
        { text: 'Er **fühlt sich** heute nicht gut.', gl: '— 3ª persona: sich' },
        { text: 'Wir **treffen uns** am Samstag um drei.', gl: '— quedamos' },
        { text: '**Beeilt euch**, der Bus kommt!', gl: '— Imperativ + euch (¡daos prisa!)' },
        { text: 'Ich **interessiere mich** für deutsche Filme.', gl: '— me intereso por' },
      ],
    },

    { type: 'rule' },

    // ── Übungen ───────────────────────────────────────────────────
    {
      type: 'uebung',
      eyebrow: 'Anwendung — Übung 1 · Welches Pronomen?',
      frage: 'Ergänze mich, dich, sich, uns oder euch.',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Ich freue ___ auf den Sommer.',
        'Wann triffst du ___ mit Anna?',
        'Sie duscht ___ nach dem Sport.',
        'Wir ruhen ___ am Sonntag aus.',
      ],
      loesungen: [
        'Ich freue **mich** auf den Sommer. ~~(ich → mich, nunca sich)~~',
        'Wann triffst du **dich** mit Anna?',
        'Sie duscht **sich** nach dem Sport. ~~(3ª persona → sich)~~',
        'Wir ruhen **uns** am Sonntag aus.',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 2 · Sätze bauen',
      frage: 'Bilde Sätze mit dem reflexiven Verb.',
      loesungLabel: 'Lösung',
      aufgaben: [
        '(ich / sich freuen auf / das Wochenende)',
        '(wir / sich treffen / um 19 Uhr / im Restaurant)',
        '(er / sich fühlen / heute / besser)',
      ],
      loesungen: [
        'Ich **freue mich auf** das Wochenende.',
        'Wir **treffen uns** um 19 Uhr im Restaurant.',
        'Er **fühlt sich** heute **besser**. ~~(¡y con Komparativ de la Lektion 13!)~~',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 3 · Über deinen Morgen schreiben',
      frage: 'Schreibe drei Sätze über deinen Morgen mit reflexiven Verben.',
      loesungLabel: 'Mögliche Lösung',
      aufgaben: [
        'Was machst du morgens? (sich duschen, sich anziehen, sich beeilen …)',
      ],
      loesungen: [
        'Ich **dusche mich** um 7 Uhr. Dann **ziehe ich mich an**. Ich **beeile mich**, weil der Bus um 8 Uhr **fährt**. ~~(cualquier rutina real vale — verbo en posición 2, pronombre detrás)~~',
      ],
    },

    { type: 'rule' },

    // ── Prüfungsbezug ─────────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Schreiben · E-Mail',
      titel: 'Reflexiv in der Einladung',
      anweisung: 'In der E-Mail (Teil 2, ~30-40 Wörter) sind sich freuen und sich treffen Gold wert. Ergänze:',
      absaetze: [
        '„Liebe Julia, ich {1} (sich freuen) auf deinen Besuch! {2} (sich treffen / wir) am Samstag um drei am Bahnhof?“',
      ],
      loesungLabel: 'Lösung',
      loesungen: [
        '{1} ich **freue mich** auf deinen Besuch!',
        '{2} **Treffen wir uns** am Samstag um drei am Bahnhof?',
      ],
    },
    {
      type: 'modell',
      eyebrow: 'Prüfungsbezug — Modelltext',
      thema: 'E-Mail: Einladung zum Samstag — mit allen Strukturen aus Block 1',
      woerter: '~35 Wörter',
      absaetze: [
        '„Liebe Anna, ich **freue mich** auf Samstag! **Komm** bitte um drei, **denn** wir wollen zuerst Kaffee trinken. **Wenn** es regnet, **bleiben** wir zu Hause — das ist **besser als** Kino. Bis bald! Deine Marta“',
      ],
      annotationen: [
        { tag: 'Reflexiv', text: '*ich freue mich auf* — Reflexivpronomen nach dem Verb (Lektion 17)' },
        { tag: 'Imperativ', text: '*Komm bitte* — du-Form ohne -st, mit bitte (Lektion 16)' },
        { tag: 'Konnektor', text: '*denn* — Position 0, Wortstellung bleibt normal (Lektion 14)' },
        { tag: 'Nebensatz', text: '*Wenn es regnet, bleiben wir* — Verb am Ende, dann Verb zuerst (Lektion 15)' },
        { tag: 'Komparativ', text: '*besser als* — der irreguläre Komparativ von gut (Lektion 13)' },
      ],
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: '„**Ich freue mich auf deine Antwort.**“ ist der perfekte letzte Satz für **jede** E-Mail in der Prüfung. ~~Apréndetela como fórmula fija — cierra la carta y demuestra que dominas los reflexivos.~~',
    },

    { type: 'rule' },

    // ── Abschluss ─────────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Person', 'Pronomen', 'Beispiel'],
      zeilen: [
        ['ich', 'mich', 'Ich dusche mich.'],
        ['du', 'dich', 'Du freust dich.'],
        ['er/sie/es', 'sich', 'Sie fühlt sich gut.'],
        ['wir', 'uns', 'Wir treffen uns.'],
        ['ihr', 'euch', 'Beeilt euch!'],
        ['sie/Sie', 'sich', 'Sie treffen sich.'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich benutze mich, dich, sich, uns, euch richtig.',
        'Ich stelle das Reflexivpronomen direkt hinter das Verb.',
        'Ich erkenne die Strukturen aus Block 1 in einem Text wieder.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: '**Geschafft!** Die Grammatik-Basis von Block 1 ist komplett: Perfekt, Vergleiche, Konnektoren, Nebensätze, Imperativ und reflexive Verben. Ab der nächsten Lektion wechselst du den Modus: Im **Modul Lesen** trainierst du Strategien für die Prüfung — nicht mehr neue Grammatik, sondern wie du Texte knackst.',
    },
  ],
}
