// Lektion 26 · Schreiben Teil 2 — E-Mail & Einladung
//
// Bloque 2 (Prüfungstraining — Schreiben). La E-Mail de ~30-40 Wörter:
// invitar, responder a una invitación, pedir algo. Anrede Liebe/Lieber,
// Gruß sin coma, «Ich möchte …» solo como fórmula. Modelo de 34 palabras
// y Mögliche Lösung de 32 (recuentos verificados). Cierra el módulo con
// la tabla-síntesis de los 2 Teile.

export default {
  spec: ['Bloque 2', 'Prüfungstraining — Schreiben', 'Niveau A2', 'Prüfungsrelevanz: Schreiben Teil 2'],
  h1: 'Schreiben Teil 2 — E-Mail & Einladung',
  lead: 'Die zweite Aufgabe: eine **E-Mail mit ca. 30-40 Wörtern** — ~~invitar, contestar a una invitación o pedir algo. Con la Anrede y el Gruß correctos ya tienes medio trabajo hecho.~~',

  content: [
    // ── Lernziele ─────────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'eine E-Mail mit ca. 30-40 Wörtern schreiben',
        'die Anrede *Liebe / Lieber* und den Gruß richtig benutzen',
        'einladen, auf eine Einladung antworten und um etwas bitten',
      ],
    },

    { type: 'rule' },

    // ── Kernwortschatz ────────────────────────────────────────────
    {
      type: 'wortschatz',
      eyebrow: 'Kernwortschatz',
      items: [
        { wort: 'einladen', kollokation: 'dich zur Party einladen', es: 'invitar' },
        { wort: 'die Party', kollokation: 'eine kleine Party machen', es: 'la fiesta' },
        { wort: 'der Geburtstag', kollokation: 'Ich habe Geburtstag.', es: 'el cumpleaños' },
        { wort: 'feiern', kollokation: 'bei mir zu Hause feiern', es: 'celebrar' },
        { wort: 'danken', kollokation: 'Vielen Dank für die Einladung!', es: 'dar las gracias' },
        { wort: 'gern(e)', kollokation: 'Ich komme gern.', es: 'con mucho gusto' },
        { wort: 'schade', kollokation: 'Schade, ich kann nicht.', es: 'qué pena' },
        { wort: 'mitbringen', kollokation: 'einen Salat mitbringen', es: 'traer (algo)' },
        { wort: 'sich freuen', kollokation: 'Ich freue mich!', es: 'alegrarse' },
        { wort: 'Ich möchte …', kollokation: 'Ich möchte dich einladen.', es: 'quisiera / me gustaría' },
      ],
    },

    { type: 'rule' },

    // ── Erklärung ─────────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Erklärung — Anrede & Gruß',
      kopf: ['Position', 'Formel', 'Achtung!'],
      zeilen: [
        ['Anrede', 'Liebe Anna, / Lieber Tom,', 'Liebe + Frau, Lieber + Mann — mit Komma, kein Doppelpunkt'],
        ['Gruß', 'Viele Grüße / Liebe Grüße', 'KEIN Komma und kein Punkt danach — neue Zeile, dann der Name'],
      ],
    },
    {
      type: 'steps',
      eyebrow: 'Erklärung — Der Bauplan',
      steps: [
        {
          badge: 'Anrede',
          titel: 'Liebe / Lieber + Name',
          text: '__Liebe Julia,__ ~~(mujer)~~ oder __Lieber Paul,__ ~~(hombre)~~ — nach dem Komma schreibst du **klein** weiter.',
        },
        {
          badge: 'Inhalt',
          titel: 'Ein bis zwei Sätze pro Punkt',
          text: 'Die Aufgabe hat drei Punkte. Schreib zu jedem Punkt __ein bis zwei kurze Sätze__. Eine Frage am Ende macht die E-Mail freundlich: __Kommst du? Was soll ich mitbringen?__',
        },
        {
          badge: 'Formel',
          titel: 'Ich möchte …',
          text: 'Die feste Formel für Einladungen und Bitten: __Ich **möchte** dich einladen.__ ~~Es «quisiera»: apréndela como fórmula fija, sin gramática nueva.~~',
        },
        {
          badge: 'Gruß',
          titel: 'Viele Grüße + Name',
          text: '__Viele Grüße__ — dann neue Zeile, dann der Name. **Ohne Komma!** ~~En español escribes «Un saludo,» con coma — en alemán no lleva nada.~~',
        },
      ],
    },

    { type: 'rule' },

    // ── Beispiele: Redemittel ─────────────────────────────────────
    {
      type: 'redemittel',
      eyebrow: 'Beispiele — Redemittel',
      gruppen: [
        {
          fn: 'einladen',
          saetze: [
            { satz: 'Ich möchte dich zu meiner Party einladen.' },
            { satz: 'Wir feiern am Samstag um 18 Uhr. Kommst du?' },
          ],
        },
        {
          fn: 'zusagen ~~(aceptar)~~',
          saetze: [
            { satz: 'Vielen Dank für die Einladung!' },
            { satz: 'Ich komme gern. Ich freue mich!' },
          ],
        },
        {
          fn: 'absagen',
          saetze: [
            { satz: 'Schade, ich kann leider nicht kommen.' },
            { satz: 'Ich muss am Samstag arbeiten.' },
          ],
        },
        {
          fn: 'bitten & fragen',
          saetze: [
            { satz: 'Kannst du einen Salat mitbringen?' },
            { satz: 'Was soll ich mitbringen?' },
          ],
        },
      ],
    },

    // ── Beispiele: Modelltext ─────────────────────────────────────
    {
      type: 'prose',
      card: true,
      titel: 'Die Aufgabe',
      absaetze: [
        'Du machst eine Geburtstagsparty. Schreib deiner Freundin Julia eine E-Mail: **Warum** feierst du? — **Wann und wo** ist die Party? — **Bitte** sie, etwas mitzubringen.',
      ],
    },
    {
      type: 'modell',
      eyebrow: 'Beispiele — Modelltext',
      thema: 'E-Mail: Einladung zur Geburtstagsparty',
      woerter: '34 Wörter',
      absaetze: [
        '==Liebe Julia,==\nam Samstag habe ich ==Geburtstag== und ich mache eine kleine Party. ==Ich möchte dich einladen!== Wir feiern ==um 18 Uhr bei mir zu Hause==. ==Kannst du einen Salat mitbringen?==\n==Viele Grüße==\nMiguel',
      ],
      annotationen: [
        { tag: 'Anrede', text: '„Liebe Julia,“ — Julia ist eine Frau → *Liebe*; danach klein: „am Samstag …“' },
        { tag: 'Punkt 1', text: 'warum: Geburtstag + Party' },
        { tag: 'Punkt 2', text: 'wann und wo: um 18 Uhr, bei mir zu Hause' },
        { tag: 'Punkt 3', text: 'die Bitte als Frage: „Kannst du … mitbringen?“' },
        { tag: 'Gruß', text: '„Viele Grüße“ ohne Komma — der Name steht in der neuen Zeile ~~(en español pondrías coma; en alemán no)~~' },
      ],
    },

    { type: 'rule' },

    // ── Übungen ───────────────────────────────────────────────────
    {
      type: 'uebung',
      eyebrow: 'Anwendung — Übung 1 · Liebe oder Lieber?',
      frage: 'Wie heißt die Anrede?',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Anna → …',
        'Tom → …',
        'deine Oma → …',
      ],
      loesungen: [
        '**Liebe Anna,** ~~(mujer → Liebe)~~',
        '**Lieber Tom,** ~~(hombre → Lieber)~~',
        '**Liebe Oma,**',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 2 · Zusagen oder absagen?',
      frage: 'Zusage ~~(sí)~~ oder Absage ~~(no)~~?',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Ich komme sehr gern!',
        'Schade, ich kann leider nicht.',
        'Danke, ich bin gern dabei.',
        'Ich muss leider arbeiten.',
      ],
      loesungen: [
        '**Zusage**',
        '**Absage**',
        '**Zusage**',
        '**Absage**',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 3 · Die E-Mail reparieren',
      frage: 'Zwei Stellen sind falsch. Korrigiere sie.',
      loesungLabel: 'Lösung',
      aufgaben: [
        '„Liebe Tom: ich möchte dich einladen.“',
        '„viele grüße, Anna“',
      ],
      loesungen: [
        '„**Lieber Tom,** ich möchte dich einladen.“ ~~(Tom es hombre → Lieber; coma, no dos puntos)~~',
        '„**Viele Grüße**\nAnna“ ~~(mayúsculas y sin coma tras el Gruß)~~',
      ],
    },

    { type: 'rule' },

    // ── Prüfungsbezug ─────────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Schreiben · Teil 2',
      titel: 'Antwort auf eine Einladung',
      anweisung: 'Dein Freund Paul hat dich zum Abendessen am Freitag eingeladen. Schreib eine Antwort (ca. 30-40 Wörter): Bedanke dich — sag zu — frag, was du mitbringen sollst.',
      absaetze: [
        'Denk an die Anrede *Lieber Paul,* und den Gruß ohne Komma.',
      ],
      loesungLabel: 'Mögliche Lösung',
      loesungen: [
        '„Lieber Paul,\nvielen Dank für deine Einladung zum Abendessen! Ich komme sehr gern am Freitag zu dir. Was soll ich mitbringen? Ich kann einen Nachtisch machen. Ich freue mich!\nViele Grüße\nSofia“ *(32 Wörter)*',
      ],
      kommentar: 'Alle drei Punkte sind da: danken, zusagen, fragen. Auch richtig: „Ich bringe gern etwas mit.“ oder „Soll ich einen Salat mitbringen?“',
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Lern **eine** Anrede (*Liebe/Lieber …,*) und **einen** Gruß (*Viele Grüße*) auswendig und benutz sie in jeder E-Mail. ~~El dos puntos tras la Anrede y la coma tras el Gruß son los dos errores típicos de hispanohablantes — evítalos y ganas puntos seguros.~~',
    },

    { type: 'rule' },

    // ── Abschluss ─────────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung — Die zwei Teile im Vergleich',
      kopf: ['', 'Teil 1', 'Teil 2'],
      zeilen: [
        ['Textsorte', 'SMS / Notiz', 'E-Mail / Einladung'],
        ['Wörter', 'ca. 20-30', 'ca. 30-40'],
        ['Anrede', 'Hallo Marco,', 'Liebe Julia, / Lieber Paul,'],
        ['Inhalt', 'ein Satz pro Punkt', '1-2 Sätze pro Punkt + Frage'],
        ['Gruß', 'Viele Grüße + Name', 'Viele Grüße + Name (ohne Komma)'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich schreibe eine E-Mail mit ca. 30-40 Wörtern und allen Punkten.',
        'Ich benutze Liebe/Lieber richtig und den Gruß ohne Komma.',
        'Ich kann einladen, zusagen, absagen und um etwas bitten.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Das Modul Schreiben ist komplett! In der nächsten Lektion beginnt das **Modul Sprechen**: die mündliche Prüfung — ca. 15 Minuten, zu zweit, drei Teile.',
    },
  ],
}
