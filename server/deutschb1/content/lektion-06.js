// Lektion 06 · Perfekt — haben oder sein
//
// Bloque 1 · Grammatik & Struktur — sigue el estándar de lektion-08.js:
// 8 secciones (FORMAT.md), nivel B1, máximo apoyo en español.
// Espiral: haben/sein + Satzklammer vienen del A2 (Lektion 4) y aquí solo
// se repasan. El núcleo B1: sistemática completa del Partizip II (be-/er-/
// ver- sin ge-, -ieren, trennbar), verbos de doble auxiliar (ist/hat
// gefahren) y Perfekt vs Präteritum al escribir (puente a Lektion 7).

export default {
  spec: ['Bloque 1', 'Grammatik & Struktur', 'Niveau B1', 'Prüfungsrelevanz: alle Module'],
  h1: 'Perfekt — haben oder sein',
  lead: 'Die A2-Basis sitzt — jetzt kommen die Partizipien **ohne ge-** (*besucht, verstanden*), Verben mit **zwei Auxiliaren** und die Frage: **Perfekt oder Präteritum** beim Schreiben?',

  content: [
    // ── Lernziele ─────────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'das Partizip II systematisch bilden — auch **ohne ge-** (besucht, erklärt, verstanden)',
        'Verben mit **zwei Auxiliaren** richtig benutzen (ist gefahren / hat das Auto gefahren)',
        'beim Schreiben zwischen **Perfekt und Präteritum** wählen (E-Mail vs. Erzähltext)',
      ],
    },

    { type: 'rule' },

    // ── Kernwortschatz ────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Kernwortschatz — Partizipien ohne und mit ge-',
      kopf: ['Infinitiv', 'Partizip II', 'Bedeutung'],
      zeilen: [
        ['besuchen', 'besucht', 'visitar'],
        ['bezahlen', 'bezahlt', 'pagar'],
        ['bekommen', '**bekommen**', 'recibir'],
        ['erklären', 'erklärt', 'explicar'],
        ['erzählen', 'erzählt', 'contar'],
        ['verstehen', '**verstanden**', 'entender'],
        ['vergessen', '**vergessen**', 'olvidar'],
        ['verlieren', '**verloren**', 'perder'],
        ['anfangen', 'an**ge**fangen', 'empezar'],
        ['aufhören', 'auf**ge**hört', 'dejar de'],
        ['reparieren', 'repariert', 'reparar'],
        ['passieren', 'passiert ~~(¡con sein!)~~', 'pasar, ocurrir'],
      ],
    },

    { type: 'rule' },

    // ── Erklärung ─────────────────────────────────────────────────
    {
      type: 'prose',
      eyebrow: 'Erklärung — das kennst du schon aus A2',
      card: true,
      absaetze: [
        '**Kurzes Update:** *haben* ist der Normalfall. **sein** nehmen Bewegung (*gehen, fahren, kommen*), Veränderung (*aufstehen, einschlafen*) und die Spezialfälle *bleiben, sein, passieren*. Satzklammer: Auxiliar auf Position 2, Partizip **am Satzende**. Und der Klassiker bleibt: ~~en español todo el pasado va con «haber» —~~ auf Deutsch nicht: *„ich habe gegangen“* ✗ → **ich bin gegangen** ✓. Neu ist jetzt alles ab hier.',
      ],
    },
    {
      type: 'tabelle',
      eyebrow: 'Erklärung — das Partizip-System komplett',
      kopf: ['Typ', 'Muster', 'Beispiel'],
      zeilen: [
        ['regelmäßig', 'ge…t', 'gemacht, gearbeitet'],
        ['unregelmäßig', 'ge…en, oft neuer Vokal', 'gesehen, getrunken'],
        ['trennbar', 'ge- in der **Mitte**', 'ein**ge**kauft, an**ge**fangen'],
        ['**be- / er- / ver-**', '**ohne ge-**', 'besucht, erklärt, verstanden'],
        ['-ieren', 'ohne ge-, immer -t', 'repariert, passiert'],
      ],
    },
    {
      type: 'prose',
      card: true,
      absaetze: [
        '**Warum ohne ge-?** Die Vorsilben *be-, er-, ver-* (auch *ent-, emp-, zer-*) sind **untrennbar und unbetont** — sie blockieren das ge-: be**sucht**, ver**standen**. Trennbare, betonte Vorsilben lassen es in die Mitte: *áufgehört*. ~~Truco: pronuncia el verbo. Acento en la raíz (besúchen) → sin ge-; acento en el prefijo (áufhören) → ge- en medio.~~',
      ],
    },
    {
      type: 'vergleich',
      titel: 'ist gefahren oder hat gefahren?',
      zeilen: [
        { satz: 'Ich **bin** nach Sevilla **gefahren**.', label: 'ohne Objekt: Bewegung → sein' },
        { satz: 'Ich **habe** das Auto in die Garage **gefahren**.', label: 'mit Akkusativ-Objekt → haben' },
      ],
    },
    {
      type: 'prose',
      card: true,
      absaetze: [
        '**Zwei Auxiliare:** *fahren* und *fliegen* wechseln zu **haben**, sobald ein Akkusativ-Objekt dabei ist: *Er hat den Bus gefahren. Sie hat die Maschine geflogen.* Ohne Objekt bleibt **sein**. ~~El mismo verbo cambia de auxiliar según lleve o no complemento directo.~~',
        '**Perfekt oder Präteritum beim Schreiben?** In der **E-Mail (Schreiben Teil 1)** erzählst du im **Perfekt** — so klingt persönliches Deutsch: *„Am Samstag sind wir an den See gefahren.“* Nur **war, hatte** und die Modalverben (*konnte, musste, wollte*) stehen auch dort im Präteritum. In **Erzähltexten und Zeitungen** liest du dagegen das volle Präteritum (*ging, kam, sah*) — das brauchst du fürs Lesen, und es ist das Thema der nächsten Lektion.',
      ],
    },

    { type: 'rule' },

    // ── Beispiele ─────────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele',
      kicker: 'ohne ge-',
      titel: 'Untrennbare Verben & -ieren',
      items: [
        { text: 'Ich habe am Sonntag meine Oma **besucht**.', gl: '— be- → ohne ge-' },
        { text: 'Er hat mir den Weg **erklärt**.', gl: '— er- → ohne ge-' },
        { text: 'Hast du die Frage **verstanden**?', gl: '— ver- + unregelmäßig' },
        { text: 'Wir haben die Waschmaschine **repariert**.', gl: '— -ieren' },
        { text: 'Was ist **passiert**?', gl: '— passieren → sein' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'zwei Auxiliare',
      titel: 'fahren & fliegen',
      items: [
        { text: 'Wir **sind** mit dem Zug nach Bern **gefahren**.', gl: '— kein Objekt → sein' },
        { text: 'Mein Vater **hat** mich zum Bahnhof **gefahren**.', gl: '— mich = Objekt → haben' },
        { text: 'Sie **ist** nach Kanada **geflogen**.', gl: '— Bewegung → sein' },
        { text: 'Der Pilot **hat** die Maschine selbst **geflogen**.', gl: '— Objekt → haben' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'Schreiben',
      titel: 'Perfekt & Präteritum gemischt — wie in der E-Mail',
      items: [
        { text: 'Am Wochenende **habe** ich viel **erlebt**: Wir **sind** gewandert, und das Wetter **war** super.', gl: '— Perfekt + war' },
        { text: 'Ich **konnte** leider nicht kommen, denn ich **hatte** Besuch.', gl: '— Modalverb & hatte: Präteritum' },
      ],
    },

    { type: 'rule' },

    // ── Übungen ───────────────────────────────────────────────────
    {
      type: 'uebung',
      eyebrow: 'Anwendung — Übung 1 · Erkennen',
      frage: 'Mit oder ohne ge-? Bilde das Partizip II.',
      loesungLabel: 'Lösung',
      aufgaben: [
        'verkaufen → ___',
        'einladen → ___',
        'bestellen → ___',
        'studieren → ___',
        'erzählen → ___',
      ],
      loesungen: [
        'verkaufen → **verkauft** ~~(ver- inseparable → sin ge-)~~',
        'einladen → **eingeladen** ~~(separable → ge- en medio)~~',
        'bestellen → **bestellt**',
        'studieren → **studiert** ~~(-ieren → sin ge-)~~',
        'erzählen → **erzählt**',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 2 · Auxiliar wählen',
      frage: 'haben oder sein?',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Wir ___ am Sonntag an die Küste gefahren.',
        'Ich ___ meinen Bruder zum Flughafen gefahren.',
        'Der Kurs ___ pünktlich angefangen.',
        'Sie ___ das Paket erst gestern bekommen.',
      ],
      loesungen: [
        '**sind** — fahren ohne Objekt: Bewegung → sein.',
        '**habe** — fahren mit Objekt (meinen Bruder) → haben.',
        '**hat** — anfangen geht mit haben: Der Kurs hat angefangen.',
        '**hat** — bekommen: mit Objekt, Partizip ohne ge-.',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 3 · Produzieren',
      frage: 'Schreib den Anfang einer E-Mail über dein Wochenende (3-4 Sätze): mindestens ein Partizip **ohne ge-** und einmal **war** oder **hatte**.',
      loesungLabel: 'Mögliche Lösung',
      aufgaben: [
        'Satz 1-2: Was hast du gemacht? · Satz 3: Wie war es?',
      ],
      loesungen: [
        '„Liebe Marta, danke für deine Nachricht! Am Samstag habe ich meine Tante **besucht**, und sie hat mir viel von früher **erzählt**. Danach sind wir ins Zentrum gefahren. Es **war** ein toller Tag.“ ~~Vale cualquier plan — comprueba: participios sin ge- bien formados, war/hatte en Präteritum y el participio al final de la frase.~~',
      ],
    },

    { type: 'rule' },

    // ── Prüfungsbezug ─────────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Schreiben Teil 1 · informelle E-Mail',
      titel: '3 Lücken',
      anweisung: 'In der E-Mail (~80 Wörter, empf. 20 Minuten) mischst du Perfekt und war/hatte. Ergänze:',
      absaetze: [
        '„Hallo Jonas, stell dir vor: Ich habe endlich eine Wohnung {1} (bekommen)! Der Makler hat mir alles genau {2} (erklären). Ich {3} (sein) am Anfang ziemlich nervös — aber jetzt ist alles perfekt.“',
      ],
      optionen: ['(1) bekommen → Partizip II?', '(2) erklären → Partizip II?', '(3) sein → Perfekt oder Präteritum?'],
      loesungLabel: 'Lösung',
      loesungen: [
        '{1} **bekommen** — be- untrennbar: Partizip ohne ge-, gleiche Form wie der Infinitiv.',
        '{2} **erklärt** — er- ohne ge-, regelmäßig mit -t.',
        '{3} **war** — bei *sein* schreibt man auch in der E-Mail Präteritum, nicht *bin gewesen*.',
      ],
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Faustregel für die ganze B1-Prüfung: **Sprechen und E-Mail → Perfekt**, aber *war, hatte, konnte, musste, wollte* immer im Präteritum. Wer *„ich bin gewesen“* schreibt, verliert keine Punkte — klingt aber steif. **„ich war“** ist kürzer und natürlicher.',
    },

    { type: 'rule' },

    // ── Abschluss ─────────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Frage', 'Antwort'],
      zeilen: [
        ['Partizip ohne ge-?', 'be-/er-/ver- (untrennbar) und -ieren: besucht, verstanden, repariert'],
        ['ge- in der Mitte?', 'trennbare Verben: eingekauft, angefangen'],
        ['zwei Auxiliare?', 'fahren/fliegen: mit Objekt → haben, ohne Objekt → sein'],
        ['Perfekt oder Präteritum?', 'E-Mail & Gespräch → Perfekt · war/hatte/Modalverben → Präteritum · Erzähltexte → Präteritum'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich bilde das Partizip II auch ohne ge- (besucht, verstanden, repariert).',
        'Ich wähle bei fahren und fliegen das Auxiliar nach dem Objekt.',
        'Ich schreibe die E-Mail im Perfekt — mit war und hatte im Präteritum.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Du weißt jetzt, dass *war* und *hatte* auch in der E-Mail Präteritum bleiben. In Geschichten und Zeitungstexten geht das Präteritum viel weiter: *ging, kam, sah, gab* … Diese **Erzählform** ist das Thema der nächsten Lektion.',
    },
  ],
}
