// Lektion 39 · Bildung & Lernen

export default {
  spec: ['Bloque 3', 'Themenfelder & Wortschatz', 'Niveau B1', 'Prüfungsrelevanz: Schreiben & Lesen'],
  h1: 'Bildung & Lernen',
  lead: 'Schule, Kurse und dein eigener Weg zum B1: der Wortschatz über das Lernen. ~~Incluye el léxico para hablar de tu propio examen.~~',

  content: [
    // ── Lernziele ─────────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'über Schule, Kurse und Prüfungen sprechen',
        'den Wortschatz für dein eigenes Deutschlernen benutzen',
        'dich schriftlich für einen Kurs anmelden',
      ],
    },

    { type: 'rule' },

    // ── Kernwortschatz ────────────────────────────────────────────
    {
      type: 'wortschatz',
      eyebrow: 'Kernwortschatz',
      items: [
        { wort: 'die Schule, -n', kollokation: 'in die Schule gehen', es: 'el colegio, la escuela' },
        { wort: 'der Unterricht', kollokation: 'der Unterricht beginnt um acht', es: 'la clase' },
        { wort: 'der Kurs, -e', kollokation: 'einen Kurs besuchen', es: 'el curso' },
        { wort: 'die VHS (Volkshochschule)', kollokation: 'einen Kurs an der VHS machen', es: 'la escuela pública de adultos' },
        { wort: 'der Lehrer / die Lehrerin', kollokation: 'die Lehrerin fragen', es: 'el profesor / la profesora' },
        { wort: 'lernen', kollokation: 'Deutsch lernen', es: 'aprender; estudiar (un idioma)' },
        { wort: 'üben', kollokation: 'jeden Tag üben', es: 'practicar' },
        { wort: 'der Fehler, -', kollokation: 'einen Fehler machen', es: 'el error' },
        { wort: 'die Prüfung, -en', kollokation: 'eine Prüfung machen', es: 'el examen' },
        { wort: 'bestehen', kollokation: 'die Prüfung bestehen', es: 'aprobar' },
        { wort: 'die Note, -n', kollokation: 'eine gute Note bekommen', es: 'la nota (calificación)' },
        { wort: 'sich anmelden', kollokation: 'sich für einen Kurs anmelden', es: 'inscribirse, matricularse' },
      ],
      hinweis: '**lernen** oder **studieren**? ~~En español «estudias alemán»; en alemán solo studieren si es tu carrera universitaria.~~ Sprache, Kurs, Prüfung → **lernen**. Universität → **studieren**: *Ich lerne Deutsch und studiere Medizin.*',
    },

    { type: 'rule' },

    // ── Erklärung ─────────────────────────────────────────────────
    {
      type: 'prose',
      eyebrow: 'Erklärung — Lernen in Deutschland',
      card: true,
      kicker: 'Alltag 1',
      titel: 'Die VHS',
      absaetze: [
        'Fast jede Stadt hat eine __Volkshochschule (VHS)__. Dort gibt es günstige Kurse für alle: Sprachen, Computer, Kochen, Yoga. Für viele ist die VHS der erste Ort, um Deutsch zu lernen — und an vielen kann man auch offizielle Prüfungen ablegen.',
      ],
    },
    {
      type: 'prose',
      card: true,
      kicker: 'Alltag 2',
      titel: 'Niveaus und Prüfungen',
      absaetze: [
        'Sprachkurse sind in Niveaus organisiert: __A1 bis C2__. Nach dem Kurs kommt oft eine Prüfung, zum Beispiel das Goethe-Zertifikat B1. Wer besteht, bekommt ein Zertifikat — wichtig für Arbeit, Studium oder Einbürgerung.',
      ],
    },
    {
      type: 'prose',
      card: true,
      kicker: 'Alltag 3',
      titel: 'Fehler sind normal',
      absaetze: [
        'In deutschen Kursen gilt: __Aus Fehlern lernt man.__ Sprich viel, auch mit Fehlern. Sehr beliebt: ein **Tandempartner** — ihr sprecht eine Stunde Deutsch, eine Stunde Spanisch. Das kostet nichts, und du übst echtes Sprechen.',
      ],
    },

    { type: 'rule' },

    // ── Beispiele ─────────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele',
      kicker: 'Subthema 1',
      titel: 'Schule & Kurse',
      items: [
        { text: 'Meine Tochter geht hier **in die** Schule.' },
        { text: 'Ich besuche zweimal pro Woche einen Deutschkurs.' },
        { text: 'Der Unterricht beginnt um 18 Uhr.' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'Subthema 2',
      titel: 'Eine Sprache lernen',
      items: [
        { text: 'Ich **lerne** seit einem Jahr Deutsch.' },
        { text: 'Ich übe jeden Tag zwanzig Minuten.' },
        { text: 'Ich mache noch viele Fehler, aber ich verstehe schon viel.' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'Subthema 3',
      titel: 'Anmeldung & Prüfung',
      items: [
        { text: 'Ich habe mich **für den** B1-Kurs angemeldet.' },
        { text: 'Im Juni mache ich die Prüfung.' },
        { text: 'Sie hat die Prüfung beim ersten Mal **bestanden**.', gl: '~~aprobó~~' },
      ],
    },

    { type: 'rule' },

    // ── Redemittel ────────────────────────────────────────────────
    {
      type: 'redemittel',
      eyebrow: 'Redemittel — sich für einen Kurs anmelden (formell)',
      gruppen: [
        {
          fn: 'Anmelden',
          saetze: [
            { satz: 'Ich möchte mich für den Kurs B1 anmelden.' },
            { satz: 'Ich interessiere mich für den Abendkurs.' },
          ],
        },
        {
          fn: 'Fragen stellen',
          saetze: [
            { satz: 'Könnten Sie mir Informationen zum Kurs schicken?' },
            { satz: 'Was kostet der Kurs?' },
            { satz: 'Wann beginnt der Unterricht?' },
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
        'Du machst sie am Ende des Kurses: die ___',
        'die Prüfung schaffen = die Prüfung ___',
        'Etwas ist falsch — du hast einen ___ gemacht.',
        'die günstige Schule für Erwachsene in fast jeder Stadt: die ___',
      ],
      loesungen: [
        'die **Prüfung**',
        'die Prüfung **bestehen**',
        'einen **Fehler**',
        'die **VHS** (Volkshochschule)',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 2 · Ergänzen',
      frage: 'lernen, studieren, anmelden oder üben?',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Ich ___ Deutsch an der VHS.',
        'Mein Bruder ___ Informatik in Valencia.',
        'Ich habe mich für den Kurs ___.',
        'Vor der Prüfung muss ich das Hören noch viel ___.',
      ],
      loesungen: [
        'Ich **lerne** Deutsch an der VHS. ~~(idioma → lernen, nunca studieren)~~',
        'Mein Bruder **studiert** Informatik in Valencia.',
        'Ich habe mich für den Kurs **angemeldet**.',
        'muss ich das Hören noch viel **üben**.',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 3 · Produzieren',
      frage: 'Schreib 60-80 Wörter: Wie lernst du Deutsch?',
      aufgabe: 'Seit wann lernst du? Wie oft übst du? Was findest du schwer? Was ist dein Ziel?',
      loesungLabel: 'Mögliche Lösung',
      loesung: 'Ich lerne seit zwei Jahren Deutsch. Zweimal pro Woche besuche ich einen Kurs an der VHS, und zu Hause übe ich fast jeden Tag mit einer App. Die Grammatik finde ich schwer, und beim Sprechen mache ich noch Fehler. Aber meine Lehrerin sagt, das ist normal. Mein Ziel ist das Goethe-Zertifikat B1: Ich habe mich schon für die Prüfung im Juni angemeldet. ~~Cuenta tu caso real — es exactamente lo que te preguntarán en la Präsentation del examen.~~',
    },

    { type: 'rule' },

    // ── Prüfungsbezug ─────────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Schreiben · Teil 3 (formelle E-Mail, ~40 Wörter)',
      titel: 'Anmeldung bei der VHS',
      anweisung: 'Du möchtest einen B1-Kurs an der VHS machen, kannst aber am Montag nicht zum Infoabend kommen. Schreib an Frau Berger: Entschuldigung mit Grund + Anmeldung + eine höfliche Bitte (~40 Wörter).',
      absaetze: [
        'Denk an das Schema der formellen E-Mail: **Anrede → Grund → Bitte → Gruß**.',
      ],
      loesungLabel: 'Mögliche Lösung',
      loesungen: [
        'Sehr geehrte Frau Berger,\nleider kann ich am Montag nicht zum Infoabend kommen, weil ich arbeiten muss. Ich möchte mich trotzdem für den B1-Kurs anmelden. Könnten Sie mir die Informationen bitte per E-Mail schicken? Vielen Dank im Voraus.\nMit freundlichen Grüßen\nLaura Pérez *(~40 Wörter)*',
      ],
      kommentar: 'Das ist genau das Schema aus der Lektion zur formellen E-Mail — hier mit dem Wortschatz dieser Lektion gefüllt: *sich anmelden, der Kurs, der Infoabend*.',
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Dieser Wortschatz ist doppelt nützlich: Im **Lesen Teil 2** musst du oft Kursanzeigen zuordnen, und im **Schreiben Teil 3** ist eine Anmeldung oder Absage ein Klassiker. Markiere in Anzeigen immer: *Niveau, Preis, Termin, Anmeldung*.',
    },

    { type: 'rule' },

    // ── Abschluss ─────────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Situation', 'Das brauchst du'],
      zeilen: [
        ['über das Lernen sprechen', 'Deutsch lernen · jeden Tag üben · Fehler machen'],
        ['Kurs & Prüfung', 'einen Kurs besuchen · die Prüfung machen / bestehen'],
        ['sich anmelden', 'Ich möchte mich für … anmelden.'],
        ['lernen vs. studieren', 'Sprache → lernen · Universität → studieren'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich kann über Schule, Kurse und Prüfungen sprechen.',
        'Ich kann erzählen, wie ich Deutsch lerne — mit *lernen, üben, Fehler, bestehen*.',
        'Ich kann mich schriftlich und formell für einen Kurs anmelden.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Nach dem Kurs noch schnell in den Supermarkt? In der nächsten Lektion geht es ums **Einkaufen & Konsum**: im Geschäft und online, nach Preisen fragen, umtauschen und reklamieren.',
    },
  ],
}
