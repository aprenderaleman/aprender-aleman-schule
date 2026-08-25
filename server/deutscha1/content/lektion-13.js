// Lektion 13 · Trennbare Verben
//
// Bloque 1 · Grammatik & Struktur — los verbos separables del día a día:
// el prefijo va al final de la frase; con möchten, el infinitivo entero al final.

export default {
  spec: ['Bloque 1', 'Grammatik & Struktur', 'Niveau A1', 'Prüfungsrelevanz: Sprechen · Schreiben'],
  h1: 'Trennbare Verben',
  lead: '~~Verbos que se parten en dos:~~ **Ich stehe um 7 Uhr auf.** ~~El prefijo se va al final de la frase — así hablas de tu día a día.~~',

  content: [
    // ── Lernziele ─────────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'die wichtigsten trennbaren Verben kennen (aufstehen, einkaufen, anrufen …)',
        'das Präfix ans Ende stellen: *Ich stehe auf.*',
        'trennbare Verben mit *möchten* benutzen',
      ],
    },

    { type: 'rule' },

    // ── Kernwortschatz ────────────────────────────────────────────
    {
      type: 'wortschatz',
      eyebrow: 'Kernwortschatz — trennbare Verben',
      items: [
        { wort: 'aufstehen', kollokation: 'Ich stehe um 7 Uhr auf.', es: 'levantarse' },
        { wort: 'einkaufen', kollokation: 'Ich kaufe im Supermarkt ein.', es: 'hacer la compra' },
        { wort: 'anrufen', kollokation: 'Ich rufe meine Mutter an.', es: 'llamar por teléfono' },
        { wort: 'fernsehen', kollokation: 'Ich sehe am Abend fern.', es: 'ver la tele' },
        { wort: 'mitkommen', kollokation: 'Kommst du mit?', es: 'venir (con alguien), acompañar' },
        { wort: 'anfangen', kollokation: 'Der Kurs fängt um 9 Uhr an.', es: 'empezar' },
        { wort: 'aufmachen', kollokation: 'Ich mache das Fenster auf.', es: 'abrir' },
        { wort: 'zumachen', kollokation: 'Ich mache die Tür zu.', es: 'cerrar' },
      ],
      hinweis: '~~El acento cae siempre en el prefijo:~~ **AUF**stehen, **EIN**kaufen, **AN**rufen.',
    },

    { type: 'rule' },

    // ── Erklärung ─────────────────────────────────────────────────
    {
      type: 'steps',
      eyebrow: 'Erklärung',
      steps: [
        {
          badge: 'zwei Teile',
          titel: 'Präfix + Verb',
          text: 'Ein trennbares Verb hat zwei Teile: __auf + stehen__, __ein + kaufen__, __an + rufen__. ~~(prefijo + verbo — en la frase se separan)~~',
        },
        {
          badge: 'Präfix am Ende',
          titel: 'Das Präfix geht ans Ende',
          text: 'Das Verb steht auf Position 2, __das Präfix steht ganz am Ende__: *Ich **stehe** um 7 Uhr **auf**.* ~~(el verbo en 2ª posición, el prefijo al final — la frase queda „abrazada“)~~',
        },
        {
          badge: 'auch in Fragen',
          titel: 'In Fragen genauso',
          text: '*Wann **stehst** du **auf**?* · *Kommst du **mit**?* ~~(también en preguntas: el prefijo cierra la frase)~~',
        },
        {
          badge: 'mit möchten',
          titel: 'Mit möchten bleibt das Verb zusammen',
          text: 'Mit *möchten* steht das Verb __komplett am Ende__: *Ich **möchte** heute **einkaufen**.* ~~(con möchten el infinitivo NO se separa: va entero al final)~~',
        },
      ],
    },

    { type: 'rule' },

    // ── Beispiele ─────────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele',
      items: [
        { text: 'Ich **stehe** um 7 Uhr **auf**.', gl: '— Me levanto a las 7.' },
        { text: 'Ich **kaufe** am Samstag **ein**.', gl: '— Hago la compra el sábado.' },
        { text: 'Ich **rufe** dich morgen **an**.', gl: '— Te llamo mañana.' },
        { text: 'Am Abend **sehe** ich **fern**.', gl: '— Por la noche veo la tele.' },
        { text: '**Kommst** du **mit**?', gl: '— ¿Vienes (conmigo)?' },
        { text: 'Der Film **fängt** um 20 Uhr **an**.', gl: '— La película empieza a las 20 h.' },
        { text: 'Ich **möchte** heute Abend **fernsehen**.', gl: '— Quiero ver la tele esta noche. (con möchten: entero al final)' },
      ],
    },

    { type: 'rule' },

    // ── Übungen ───────────────────────────────────────────────────
    {
      type: 'uebung',
      eyebrow: 'Anwendung — Übung 1 · Das Präfix finden',
      frage: 'Ergänze das Präfix am Ende. ~~(Completa el prefijo al final.)~~',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Ich stehe um 6 Uhr ___ . (aufstehen)',
        'Wir kaufen im Supermarkt ___ . (einkaufen)',
        'Er ruft seine Freundin ___ . (anrufen)',
        'Der Kurs fängt um 9 Uhr ___ . (anfangen)',
      ],
      loesungen: [
        'Ich stehe um 6 Uhr **auf**.',
        'Wir kaufen im Supermarkt **ein**.',
        'Er ruft seine Freundin **an**.',
        'Der Kurs fängt um 9 Uhr **an**.',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 2 · Sätze bauen',
      frage: 'Bilde Sätze. ~~(Construye frases — verbo en posición 2, prefijo al final.)~~',
      loesungLabel: 'Lösung',
      aufgaben: [
        'ich – aufstehen – um 8 Uhr',
        'du – mitkommen – ? (Frage)',
        'ich – möchten – einkaufen – heute',
      ],
      loesungen: [
        'Ich **stehe** um 8 Uhr **auf**.',
        '**Kommst** du **mit**?',
        'Ich **möchte** heute **einkaufen**. ~~(con möchten: infinitivo entero al final)~~',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 3 · Dein Tag',
      frage: 'Schreibe 3 Sätze über deinen Tag mit trennbaren Verben. ~~(Escribe 3 frases sobre tu día.)~~',
      loesungLabel: 'Muster',
      loesung: '*Ich stehe um 7 Uhr auf. Am Nachmittag kaufe ich ein. Am Abend sehe ich fern.* ~~También vale con otros verbos u horas — lo importante: prefijo al final.~~',
    },

    { type: 'rule' },

    // ── Prüfungsbezug ─────────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Sprechen · Teil 2',
      titel: 'Fragen stellen und antworten',
      anweisung: 'Im Sprechen Teil 2 bekommst du Wortkarten und stellst Fragen. Thema: „Tagesablauf“, Karte: „aufstehen“. Ergänze:',
      absaetze: [
        '„Wann {1} du {2}?“ — „Ich {3} um 7 Uhr {4}.“',
      ],
      loesungLabel: 'Lösung',
      loesungen: [
        '{1} Wann **stehst** du …?',
        '{2} … du **auf**?',
        '{3} Ich **stehe** um 7 Uhr …',
        '{4} … um 7 Uhr **auf**.',
      ],
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Auf den Wortkarten im Sprechen stehen oft trennbare Verben: **aufstehen, einkaufen, fernsehen**. Übe die Frage und die Antwort zusammen — und __vergiss das Präfix am Ende nicht__. ~~El error típico es olvidar el prefijo: „Ich stehe um 7 Uhr“ está incompleto.~~',
    },

    { type: 'rule' },

    // ── Abschluss ─────────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Satz', 'Muster'],
      zeilen: [
        ['Aussage', 'Ich **stehe** um 7 Uhr **auf**.'],
        ['Frage', '**Kommst** du **mit**?'],
        ['mit möchten', 'Ich **möchte** heute **einkaufen**.'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich kenne die wichtigsten trennbaren Verben (aufstehen, einkaufen, anrufen, fernsehen, mitkommen).',
        'Ich stelle das Präfix ans Ende: „Ich stehe um 7 Uhr auf.“',
        'Mit „möchten“ lasse ich das Verb zusammen: „Ich möchte heute einkaufen.“',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Du kannst jetzt sagen, was du machst: *Ich stehe auf.* In der nächsten Lektion sagst du anderen, **was sie machen sollen**: der **Imperativ** — *Steh auf! Kommen Sie bitte!* Damit verstehst du auch die Anweisungen in der Prüfung.',
    },
  ],
}
