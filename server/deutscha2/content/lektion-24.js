// Lektion 24 · Modul Schreiben — Überblick & Bewertung
//
// Bloque 2 (Prüfungstraining) — abre el módulo Schreiben del Zertifikat A2.
// Canon (docs/deutscha2/KANON.md): ca. 30 min, 2 Teile — T1 kurze Mitteilung
// (~20-30 Wörter), T2 E-Mail/Einladung (~30-40 Wörter).

export default {
  spec: ['Bloque 2', 'Prüfungstraining — Schreiben', 'Niveau A2', 'Prüfungsrelevanz: Schreiben'],
  h1: 'Modul Schreiben — Überblick & Bewertung',
  lead: '~~Así es la parte escrita del examen:~~ **2 Aufgaben in ca. 30 Minuten**. ~~Aquí ves qué se evalúa de verdad y cómo revisar tu texto antes de entregarlo.~~',

  content: [
    // ── Lernziele ─────────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'die zwei Schreibaufgaben und die Zeit kennen',
        'wissen, was beim Schreiben wichtig ist',
        'deinen Text mit einer Checkliste kontrollieren',
        'typische Fehler in einer Mitteilung finden',
      ],
    },

    { type: 'rule' },

    // ── Kernwortschatz ────────────────────────────────────────────
    {
      type: 'wortschatz',
      eyebrow: 'Kernwortschatz',
      items: [
        { wort: 'die Mitteilung', kollokation: 'eine kurze Mitteilung schreiben', es: 'la nota / el mensaje breve' },
        { wort: 'die E-Mail', kollokation: 'eine E-Mail an einen Freund', es: 'el correo' },
        { wort: 'die Einladung', kollokation: 'Danke für die Einladung!', es: 'la invitación' },
        { wort: 'der Punkt', kollokation: 'alle drei Punkte', es: 'el punto (de la consigna)' },
        { wort: 'die Anrede', kollokation: 'die Anrede am Anfang', es: 'el saludo inicial' },
        { wort: 'der Gruß', kollokation: 'der Gruß am Ende', es: 'la despedida' },
        { wort: 'der Satz', kollokation: 'ein kurzer Satz', es: 'la frase' },
        { wort: 'das Wort, die Wörter', kollokation: 'ca. 30 Wörter', es: 'la palabra' },
        { wort: 'kontrollieren', kollokation: 'den Text kontrollieren', es: 'revisar' },
        { wort: 'der Fehler', kollokation: 'einen Fehler finden', es: 'el error' },
      ],
    },

    { type: 'rule' },

    // ── Erklärung ─────────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Erklärung — Die zwei Aufgaben',
      kopf: ['Teil', 'Aufgabe', 'Wörter'],
      zeilen: [
        ['Teil 1', 'kurze Mitteilung (SMS oder Notiz) an einen Freund oder Kollegen', 'ca. 20-30'],
        ['Teil 2', 'E-Mail oder Einladung — schreiben oder antworten', 'ca. 30-40'],
      ],
    },
    {
      type: 'prose',
      card: true,
      titel: 'Was ist wichtig?',
      absaetze: [
        'Du hast für beide Aufgaben zusammen **ca. 30 Minuten** Zeit. Die Prüfer fragen nur zwei Dinge: **Versteht man deinen Text?** Und: **Steht etwas zu allen Punkten der Aufgabe?**',
        'Dein Deutsch muss **nicht perfekt** sein. ~~No buscan frases bonitas ni gramática perfecta: buscan que se entienda y que respondas a todos los puntos de la consigna.~~',
      ],
    },
    {
      type: 'steps',
      eyebrow: 'Erklärung — Deine Checkliste',
      steps: [
        {
          badge: 'Punkte',
          titel: 'Alle Punkte?',
          text: 'Die Aufgabe hat immer Punkte ~~(normalmente tres)~~. Schreib zu **jedem Punkt** mindestens einen Satz.',
        },
        {
          badge: 'Groß',
          titel: 'Nomen groß',
          text: 'Alle Nomen groß: das __Auto__, die __Arbeit__, der __Freund__. ~~En alemán TODOS los sustantivos llevan mayúscula — el error más fácil de evitar.~~',
        },
        {
          badge: 'Verb',
          titel: 'Verb auf Position 2',
          text: 'Das Verb steht auf __Position 2__ ~~(segunda posición de la frase)~~.\n__Ich **komme** heute nicht.__ / __Heute **komme** ich nicht.__',
        },
        {
          badge: 'Rahmen',
          titel: 'Anrede und Gruß',
          text: 'Am Anfang eine __Anrede__ mit **Komma**: „Hallo Anna,“ ~~— nada de dos puntos como en «Hola Ana:»~~. Am Ende ein __Gruß__ + dein Name: „Viele Grüße“.',
        },
      ],
    },

    { type: 'rule' },

    // ── Beispiele ─────────────────────────────────────────────────
    {
      type: 'vergleich',
      eyebrow: 'Beispiele — richtig oder falsch?',
      titel: 'Die Anrede: Deutsch ≠ Spanisch',
      zeilen: [
        { satz: '„Hallo Anna, ich habe eine Frage.“', label: 'richtig — Komma nach der Anrede, danach klein weiter' },
        { satz: '„Hallo Anna: Ich habe eine Frage.“', label: 'falsch — Doppelpunkt wie im Spanischen' },
        { satz: '„Ich komme morgen nicht.“', label: 'richtig — Verb auf Position 2' },
        { satz: '„Ich morgen nicht komme.“', label: 'falsch — Verb am Ende' },
      ],
    },

    { type: 'rule' },

    // ── Übungen ───────────────────────────────────────────────────
    {
      type: 'uebung',
      eyebrow: 'Anwendung — Übung 1 · Teil 1 oder Teil 2?',
      frage: 'Welche Aufgabe ist das — Teil 1 oder Teil 2?',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Schreib deinem Kollegen eine SMS: Du kommst heute später.',
        'Lade deine Freundin per E-Mail zu deiner Party ein.',
        'Schreib eine kurze Notiz an deine Nachbarin (ca. 25 Wörter).',
        'Antworte auf die Einladung von Maria (ca. 35 Wörter).',
      ],
      loesungen: [
        '**Teil 1** — SMS, kurz',
        '**Teil 2** — E-Mail / Einladung',
        '**Teil 1** — Notiz, ca. 25 Wörter',
        '**Teil 2** — Antwort auf eine E-Mail',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 2 · Groß oder klein?',
      frage: 'Korrigiere die Großschreibung. ~~(corrige las mayúsculas)~~',
      loesungLabel: 'Lösung',
      aufgaben: [
        'ich fahre mit dem auto zur arbeit.',
        'meine schwester wohnt in berlin.',
        'hast du am samstag zeit?',
      ],
      loesungen: [
        '**I**ch fahre mit dem **A**uto zur **A**rbeit.',
        '**M**eine **S**chwester wohnt in **B**erlin.',
        '**H**ast du am **S**amstag **Z**eit?',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 3 · Verb auf Position 2',
      frage: 'Bilde den Satz. Das Verb steht auf Position 2.',
      loesungLabel: 'Lösung',
      aufgaben: [
        '(ich / heute / keine Zeit / habe)',
        '(wir / am Freitag / eine Party / machen)',
      ],
      loesungen: [
        'Ich **habe** heute keine Zeit. ~~(también: Heute habe ich keine Zeit.)~~',
        'Wir **machen** am Freitag eine Party.',
      ],
    },

    { type: 'rule' },

    // ── Prüfungsbezug ─────────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Schreiben · Teil 1',
      titel: 'Fehler finden',
      anweisung: 'Ein Schüler hat diese Mitteilung geschrieben. Finde die **4 Fehler** mit der Checkliste.',
      absaetze: [
        '„Hallo Anna: Ich heute nicht komme. Mein auto ist kaputt. wir sehen uns morgen.\nViele Grüße\nPedro“',
      ],
      loesungLabel: 'Lösung',
      loesungen: [
        '„Hallo Anna**:** Ich …“ → „Hallo Anna**,** ich …“ — Komma, kein Doppelpunkt, danach klein weiter ~~(interferencia del español: «Hola Ana:»)~~',
        '„ich heute nicht komme“ → „ich **komme** heute nicht“ — Verb auf Position 2',
        '„Mein **auto**“ → „Mein **Auto**“ — Nomen groß',
        '„**w**ir sehen uns“ → „**W**ir sehen uns“ — Satzanfang groß',
      ],
      kommentar: 'Anrede, Gruß und alle Punkte sind da — mit den 4 Korrekturen ist die Mitteilung gut.',
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Plane **5 Minuten am Ende** für die Checkliste: Punkte? Nomen groß? Verb auf Position 2? Anrede und Gruß? ~~Revisar con esta lista te salva puntos fáciles en las dos tareas.~~',
    },

    { type: 'rule' },

    // ── Abschluss ─────────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Check', 'Frage'],
      zeilen: [
        ['Punkte', 'Steht ein Satz zu jedem Punkt der Aufgabe?'],
        ['Groß', 'Sind alle Nomen groß? (das Auto, die Arbeit)'],
        ['Verb', 'Steht das Verb auf Position 2?'],
        ['Rahmen', 'Anrede mit Komma am Anfang, Gruß + Name am Ende?'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich kenne die zwei Schreibaufgaben und die Zeit (ca. 30 Minuten).',
        'Ich weiß: Mein Text muss verständlich sein und alle Punkte haben.',
        'Ich kontrolliere meinen Text mit der Checkliste.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Jetzt kennst du das Modul. In der nächsten Lektion trainierst du **Teil 1**: die kurze Mitteilung — mit Modelltext, Redemitteln und einer echten Prüfungsaufgabe.',
    },
  ],
}
