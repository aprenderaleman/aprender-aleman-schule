// Lektion 36 · Gesundheit & Körper
//
// Bloque 3 (Themenfelder & Wortschatz): Körperteile, beim Arzt, Symptome
// beschreiben, einen Termin absagen. Falso amigo: constipado ≠ konstipiert.

export default {
  spec: ['Bloque 3', 'Themenfelder & Wortschatz', 'Niveau B1', 'Prüfungsrelevanz: Schreiben Teil 1 · Hören Teil 1 · Sprechen'],
  h1: 'Gesundheit & Körper',
  lead: 'Körperteile, Symptome, ein Termin in der **Praxis** — und was du sagst, wenn du erkältet bist. ~~Ojo: «constipado» no es *konstipiert*.~~',

  content: [
    // ── Lernziele ─────────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'Körperteile benennen und Symptome beschreiben',
        'einen Arzttermin vereinbaren und absagen',
        'verstehen, was in der Praxis und in der Apotheke passiert',
      ],
    },

    { type: 'rule' },

    // ── Kernwortschatz ────────────────────────────────────────────
    {
      type: 'wortschatz',
      eyebrow: 'Kernwortschatz',
      items: [
        { wort: 'der Kopf, Köpfe', kollokation: 'Kopfschmerzen haben', es: 'la cabeza' },
        { wort: 'der Bauch, Bäuche', kollokation: 'Bauchschmerzen haben', es: 'la barriga' },
        { wort: 'der Hals, Hälse', kollokation: 'Halsschmerzen haben', es: 'la garganta, el cuello' },
        { wort: 'das Fieber', kollokation: 'Fieber haben / messen', es: 'la fiebre' },
        { wort: 'der Husten', kollokation: 'starken Husten haben', es: 'la tos' },
        { wort: 'die Erkältung, -en', kollokation: 'eine Erkältung haben', es: 'el resfriado' },
        { wort: 'weh tun', kollokation: 'Mein Rücken tut weh.', es: 'doler' },
        { wort: 'der Arzt, Ärzte / die Ärztin', kollokation: 'zum Arzt gehen', es: 'el/la médico/a' },
        { wort: 'die Praxis, Praxen', kollokation: 'in der Praxis anrufen', es: 'la consulta (médica)' },
        { wort: 'der Termin, -e', kollokation: 'einen Termin absagen', es: 'la cita (médica)' },
        { wort: 'das Rezept, -e', kollokation: 'ein Rezept bekommen', es: 'la receta' },
        { wort: 'die Apotheke, -n', kollokation: 'Medikamente in der Apotheke holen', es: 'la farmacia' },
      ],
      hinweis: '*Ich bin **erkältet*** = estoy resfriado. ~~«Constipado» NO es *konstipiert*: konstipiert/verstopft significa **estreñido**. Este falso amigo provoca caras raras en la Praxis.~~',
    },

    { type: 'rule' },

    // ── Erklärung ─────────────────────────────────────────────────
    {
      type: 'prose',
      eyebrow: 'Erklärung — krank sein in Deutschland',
      card: true,
      titel: 'Der Weg zum Arzt',
      absaetze: [
        'Ohne __Termin__ läuft in der Praxis wenig: Du rufst an, beschreibst kurz das Problem und bekommst einen Termin. Zum Termin bringst du deine **Gesundheitskarte** mit. Danach heißt es: Wartezimmer — auch mit Termin wartet man oft ein bisschen.',
      ],
    },
    {
      type: 'prose',
      card: true,
      titel: 'Rezept & Apotheke',
      absaetze: [
        'Viele Medikamente bekommst du nur mit einem __Rezept__ vom Arzt — damit gehst du in die **Apotheke**. Einfache Mittel gegen Erkältung oder Kopfschmerzen sind **rezeptfrei**: Da hilft dir das Apothekenteam direkt. ~~En Alemania los medicamentos solo se venden en la Apotheke, no en el supermercado.~~',
      ],
    },
    {
      type: 'prose',
      card: true,
      titel: 'Krank und die Arbeit?',
      absaetze: [
        'Wenn du wegen der Krankheit nicht arbeiten kannst, kennst du das Programm schon aus **Lektion 34**: morgens in der Firma Bescheid geben, zum Arzt gehen und die __Krankschreibung__ schicken. Arzttermin und Krankmeldung gehören im deutschen Alltag zusammen.',
      ],
    },

    { type: 'rule' },

    // ── Beispiele ─────────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele',
      kicker: 'Subthema 1',
      titel: 'Symptome beschreiben',
      items: [
        { text: 'Mein Kopf **tut weh**. / Meine Beine **tun weh**.', gl: '— weh tun + Dativ-Person möglich: Mir tut der Kopf weh.' },
        { text: 'Ich habe Fieber und starken Husten.' },
        { text: 'Ich bin seit gestern **erkältet**.' },
        { text: '**Mir ist schlecht.**', gl: '~~«me encuentro mal / tengo náuseas» — con Dativ~~' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'Subthema 2',
      titel: 'Beim Arzt',
      items: [
        { text: 'Wo tut es denn weh?' },
        { text: 'Ich verschreibe Ihnen ein Medikament **gegen** den Husten.', gl: '— ein Mittel gegen + Akk.' },
        { text: 'Bleiben Sie drei Tage im Bett und trinken Sie viel Tee.' },
        { text: 'Sie bekommen ein Rezept und eine Krankschreibung für die Arbeit.' },
      ],
    },

    { type: 'rule' },

    // ── Redemittel ────────────────────────────────────────────────
    {
      type: 'redemittel',
      eyebrow: 'Redemittel — Termine in der Praxis',
      gruppen: [
        {
          fn: 'einen Termin vereinbaren (am Telefon)',
          saetze: [
            { satz: 'Ich hätte gern einen Termin bei Frau Dr. Klein.', gloss: '~~ich hätte gern: el Konjunktiv II cortés de la Lektion 13~~' },
            { satz: 'Haben Sie diese Woche noch etwas frei?' },
            { satz: 'Es ist dringend — ich habe starke Schmerzen.' },
          ],
        },
        {
          fn: 'einen Termin absagen',
          saetze: [
            { satz: 'Ich muss meinen Termin am Freitag leider absagen.' },
            { satz: 'Könnten wir den Termin auf nächste Woche verschieben?' },
            { satz: 'Es tut mir leid, dass ich so kurzfristig absage.' },
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
        'Der Arzt schreibt es, die Apotheke liest es: ___',
        '38,5 Grad — du hast ___',
        'Schnupfen, Husten und Halsschmerzen zusammen: ___',
        'Der Ort, wo die Ärztin arbeitet: ___',
      ],
      loesungen: [
        '**das Rezept**',
        '**Fieber**',
        '**die Erkältung**',
        '**die Praxis**',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 2 · Sätze ergänzen',
      frage: 'Welches Wort oder welche Form fehlt?',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Mein Rücken ___ seit zwei Tagen ___. ~~(weh tun)~~',
        'Ich habe starke ___schmerzen. ~~(cabeza)~~',
        'Ich bin ___ — ich brauche Taschentücher und Tee. ~~(¿constipado?)~~',
        'Ich kann am Montag nicht kommen. Ich möchte den Termin ___.',
      ],
      loesungen: [
        'Mein Rücken **tut** seit zwei Tagen **weh**.',
        '**Kopf**schmerzen',
        'Ich bin **erkältet**. ~~(no *konstipiert* — eso es estreñido)~~',
        'den Termin **absagen**',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 3 · Produzieren',
      frage: 'Du bist krank. Beschreib in 60–80 Wörtern: Symptome, seit wann, was du machst. ~~(¿médico? ¿farmacia? ¿cama?)~~',
      loesungLabel: 'Mögliche Lösung',
      loesung: 'Seit Montag geht es mir nicht gut. Ich bin erkältet: Ich habe Husten, Halsschmerzen und ein bisschen Fieber. Mein Kopf tut auch weh. Gestern habe ich in der Praxis angerufen und einen Termin bekommen. Die Ärztin hat mir ein Medikament gegen den Husten verschrieben, und ich habe es in der Apotheke geholt. Jetzt bleibe ich zwei Tage im Bett, trinke viel Tee und schlafe viel. Hoffentlich bin ich am Wochenende wieder gesund. *(~75 Wörter — nota el Perfekt de la Lektion 6 para contar lo que ya pasó.)*',
    },

    { type: 'rule' },

    // ── Prüfungsbezug ─────────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Schreiben · Teil 1 (informelle E-Mail, ~80 Wörter)',
      titel: 'Absagen — weil du krank bist',
      anweisung: 'Ihre Freundin Julia feiert am Samstag ihren Geburtstag. Sie sind krank und können nicht kommen. Schreiben Sie eine E-Mail (~80 Wörter): Entschuldigen Sie sich, beschreiben Sie kurz, was Sie haben, und schlagen Sie ein neues Treffen vor.',
      absaetze: [
        'Informell heißt: **du-Form**, Anrede *Liebe/Lieber …*, Gruß *Liebe Grüße*.',
      ],
      loesungLabel: 'Mögliche Lösung',
      loesungen: [
        'Liebe Julia,\nvielen Dank für die Einladung zu deinem Geburtstag! Leider kann ich am Samstag nicht kommen, weil ich krank bin. Ich bin stark erkältet, habe Fieber und muss im Bett bleiben. Die Ärztin hat gesagt, dass ich mich ausruhen soll. Es tut mir wirklich leid — ich hätte dich so gern gesehen! Können wir uns nächste Woche treffen? Dann bringe ich dein Geschenk mit und wir trinken zusammen Kaffee.\nFeier schön und liebe Grüße\nCarmen *(~75 Wörter)*',
      ],
      kommentar: 'Alle drei Leitpunkte sind da: Entschuldigung + Grund (*weil ich krank bin*), Symptome (*erkältet, Fieber*), neuer Vorschlag (*nächste Woche*). Du-Form und informelle Grußformel — bei Teil 1 Pflicht.',
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'In **Hören Teil 1** kommen oft Ansagen vom Anrufbeantworter einer Praxis vor: Öffnungszeiten, geänderte Termine, Vertretung. Trainiere, **Zahlen und Uhrzeiten** beim ersten Hören zu notieren — genau danach wird gefragt.',
    },

    { type: 'rule' },

    // ── Abschluss ─────────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Ausdruck', 'So benutzt du ihn'],
      zeilen: [
        ['weh tun', 'Mein Kopf tut weh. / Meine Beine tun weh. / Mir tut der Bauch weh.'],
        ['Ich habe …', '… Fieber / Husten / Kopfschmerzen / eine Erkältung'],
        ['erkältet sein', 'Ich bin erkältet. — ~~≠ konstipiert (estreñido)~~'],
        ['der Termin', 'einen Termin vereinbaren · verschieben · **absagen**'],
        ['Rezept → Apotheke', 'Der Arzt verschreibt, die Apotheke gibt das Medikament.'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich kann meine Symptome beschreiben (weh tun, Ich habe …, erkältet sein).',
        'Ich kann telefonisch einen Arzttermin vereinbaren und absagen.',
        'Ich weiß, wie Praxis, Rezept und Apotheke zusammenhängen.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Wieder gesund? Dann kannst du endlich verreisen. In der nächsten Lektion geht es um Züge und Busse, Fahrkarten, Wegbeschreibungen und das Hotel: **Reisen & Verkehr**.',
    },
  ],
}
