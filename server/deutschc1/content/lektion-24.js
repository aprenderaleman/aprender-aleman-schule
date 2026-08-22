// Lektion 24 · Schreiben Teil 1 — Der Diskussionsbeitrag
//
// Musterlektion: la única desarrollada al 100%. Sirve de plantilla para las
// otras 39 — copia este archivo, cambia el contenido y registra el id en
// server/deutschc1/content/index.js.
//
// Marcado inline permitido dentro de los strings
// (ver src/components/DeutschC1/inline.jsx):
//   **negrita**  *cursiva*  ==resaltado==  ~atenuado~  __término alemán__

export default {
  // Cabecera: "coordenadas de examen". El primer elemento va en dorado.
  spec: ['Modul Schreiben', 'Teil 1', 'ca. 230 Wörter', 'Teil des 75-Min-Moduls', 'Bewertung A–E'],
  h1: 'Der Diskussionsbeitrag',
  lead: 'Einen Standpunkt in einem Online-Forum abwägen, begründen und überzeugend formulieren — die erste der beiden Schreibaufgaben.',

  content: [
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'einen strukturierten Diskussionsbeitrag für ein Internetforum verfassen',
        'Argumente und Gegenargumente abwägen und einen eigenen Standpunkt begründen',
        'Redemittel und schriftsprachliche Konnektoren der Argumentation sicher einsetzen',
        'die vier Bewertungskriterien des Goethe-Instituts gezielt erfüllen',
      ],
    },

    { type: 'rule' },

    {
      type: 'prose',
      eyebrow: 'Das Aufgabenformat',
      card: true,
      absaetze: [
        'Du reagierst auf einen kurzen Impulstext (z. B. einen Forumsbeitrag) und verfasst einen eigenen **Diskussionsbeitrag von ca. 230 Wörtern**. Die Aufgabe nennt meist Leitpunkte, auf die du eingehen sollst. Bewertet wird in vier Kriterien: **Erfüllung der Aufgabe**, **Kohärenz**, **Wortschatz** und **Strukturen** ~(los cuatro criterios oficiales, en niveles A–E)~.',
      ],
    },

    { type: 'rule' },

    {
      type: 'steps',
      eyebrow: 'Die Struktur',
      steps: [
        {
          titel: 'Einleitung',
          text: '__Bezug zum Thema__ herstellen und die Streitfrage benennen. *„In letzter Zeit wird häufig diskutiert, ob…“*',
        },
        {
          titel: 'Hauptteil — Pro & Contra',
          text: 'Mindestens __ein Argument dafür__ und __eines dagegen__, jeweils mit einem Beispiel. Das Abwägen ist der Kern der Aufgabe.',
        },
        {
          titel: 'Eigene Position',
          text: 'Einen __begründeten Standpunkt__ beziehen — nicht nur behaupten, sondern stützen.',
        },
        {
          titel: 'Schluss',
          text: '__Fazit__ ziehen und mit einem Ausblick oder Appell schließen.',
        },
      ],
    },

    { type: 'rule' },

    {
      type: 'redemittel',
      eyebrow: 'Redemittel nach Funktion',
      gruppen: [
        {
          fn: 'Einleiten',
          saetze: [
            { satz: 'In letzter Zeit wird häufig darüber diskutiert, ob…' },
            { satz: 'Die Frage, ob…, beschäftigt derzeit viele Menschen.' },
          ],
        },
        {
          fn: 'Argument + Beispiel',
          saetze: [
            { satz: 'Ein gewichtiges Argument dafür ist…' },
            { satz: 'Das zeigt sich etwa daran, dass…' },
          ],
        },
        {
          fn: 'Gegenargument',
          saetze: [
            { satz: 'Dem ist jedoch entgegenzuhalten, dass…' },
            { satz: 'Kritiker wenden hingegen ein, dass…' },
          ],
        },
        {
          fn: 'Abwägen & Position',
          saetze: [
            { satz: 'Zwar…, dennoch…', gloss: '— si bien…, no obstante…' },
            { satz: 'Meiner Ansicht nach / Ich bin der Überzeugung, dass…' },
          ],
        },
        {
          fn: 'Schließen',
          saetze: [
            { satz: 'Zusammenfassend lässt sich sagen, dass…' },
            { satz: 'Abschließend bleibt festzuhalten, dass…' },
          ],
        },
      ],
    },

    { type: 'rule' },

    {
      type: 'modell',
      eyebrow: 'Musterbeispiel — kommentiert',
      thema: 'Thema: Smartphone-Verbot an Schulen',
      woerter: '211 Wörter',
      absaetze: [
        '==In vielen Ländern wird derzeit intensiv darüber diskutiert, ob== Smartphones an Schulen verboten werden sollten. Diese Frage berührt sowohl pädagogische als auch gesellschaftliche Aspekte.',
        '==Ein gewichtiges Argument für== ein Verbot ist die Konzentration der Lernenden. Studien zeigen, dass ständige Benachrichtigungen die Aufmerksamkeit erheblich beeinträchtigen. Ein Beispiel hierfür ist der Leistungsrückgang in Klassen, in denen Handys uneingeschränkt erlaubt sind.',
        '==Dem ist jedoch entgegenzuhalten, dass== Smartphones auch ein wertvolles Lernwerkzeug sein können. Zahlreiche Anwendungen ermöglichen einen schnellen Zugang zu Informationen, ==zumal== digitale Kompetenzen im Berufsleben zunehmend unverzichtbar werden.',
        '==Meiner Ansicht nach== sollte man einen Mittelweg wählen. Anstatt eines vollständigen Verbots erscheint eine klare Regelung sinnvoller: Handys bleiben während des Unterrichts ausgeschaltet, dürfen aber für konkrete Lernaufgaben gezielt eingesetzt werden.',
        '==Zusammenfassend lässt sich sagen, dass== weder ein striktes Verbot noch eine uneingeschränkte Nutzung die beste Lösung darstellt. Entscheidend ist vielmehr, den verantwortungsvollen Umgang mit digitalen Medien zu fördern.',
      ],
      annotationen: [
        { tag: 'Einleitung', text: 'Bezug zum Thema + Streitfrage, ohne die eigene Meinung vorwegzunehmen.' },
        { tag: 'Pro + Beispiel', text: 'Argument, mit Studie und konkretem Beispiel gestützt — nicht nur behauptet.' },
        { tag: 'Contra', text: 'Gegenargument mit dem C1-Konnektor *zumal* ~(refuerza el motivo)~.' },
        { tag: 'Position', text: 'Klarer, begründeter Standpunkt: der Mittelweg wird hergeleitet.' },
        { tag: 'Schluss', text: 'Fazit + Ausblick (*vielmehr…*), rundet den Beitrag ab.' },
      ],
    },

    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Plane für Teil 1 etwa **40 der 75 Minuten**. Baue sichtbar **ein Gegenargument** ein — fehlt das Abwägen, sinkt sofort das Kriterium „Erfüllung der Aufgabe“. Und halte die Wortzahl: deutlich unter 230 Wörter kostet Punkte.',
    },

    { type: 'rule' },

    {
      type: 'uebung',
      eyebrow: 'Übung',
      frage: 'Thema: „Sollte ehrenamtliches Engagement für Jugendliche verpflichtend sein?“',
      aufgabe: 'Schreibe eine **Einleitung** und **ein Pro-Argument mit Beispiel** (ca. 60 Wörter).',
      loesung: '*In jüngster Zeit wird zunehmend darüber diskutiert, ob ehrenamtliches Engagement für Jugendliche verpflichtend sein sollte. Ein wichtiges Argument dafür ist der soziale Zusammenhalt: Wer früh Verantwortung übernimmt, entwickelt Empathie und Gemeinsinn. Das zeigt sich etwa daran, dass Schülerinnen und Schüler mit ehrenamtlicher Erfahrung häufig ein stärkeres Verantwortungsbewusstsein aufweisen.*',
    },

    { type: 'rule' },

    {
      type: 'prose',
      eyebrow: 'Zusammenfassung',
      card: true,
      absaetze: [
        'Der Diskussionsbeitrag folgt vier Schritten — **Einleitung → Pro/Contra → eigene Position → Schluss** — und lebt vom **Abwägen**. Mit festen Redemitteln pro Funktion und schriftsprachlichen Konnektoren (*zumal, dennoch, hingegen, vielmehr*) erfüllst du die Kriterien Kohärenz, Wortschatz und Strukturen zuverlässig.',
      ],
    },
  ],
}
