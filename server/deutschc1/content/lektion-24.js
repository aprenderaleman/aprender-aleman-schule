// Lektion 24 · Schreiben Teil 1 — Der Diskussionsbeitrag
//
// Versión del curso-c1.html de referencia (condensada). La versión larga
// anterior — con las secciones "Das Aufgabenformat" y "Zusammenfassung" —
// queda en el historial de git, en el commit 235cefe.

export default {
  spec: ['Modul Schreiben', 'Teil 1', 'ca. 230 Wörter', 'Teil des 75-Min-Moduls', 'Bewertung A–E'],
  h1: 'Der Diskussionsbeitrag',
  lead: 'Einen Standpunkt in einem Online-Forum abwägen, begründen und überzeugend formulieren.',

  content: [
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'einen strukturierten Diskussionsbeitrag für ein Internetforum verfassen',
        'Argumente und Gegenargumente abwägen und einen Standpunkt begründen',
        'Redemittel und schriftsprachliche Konnektoren sicher einsetzen',
        'die vier Bewertungskriterien gezielt erfüllen',
      ],
    },

    { type: 'rule' },

    {
      type: 'steps',
      eyebrow: 'Die Struktur',
      steps: [
        { titel: 'Einleitung', text: '__Bezug zum Thema__ + Streitfrage benennen. *„In letzter Zeit wird häufig diskutiert, ob…“*' },
        { titel: 'Hauptteil — Pro & Contra', text: 'Mindestens __ein Argument dafür und eines dagegen__, je mit Beispiel. Das Abwägen ist der Kern.' },
        { titel: 'Eigene Position', text: 'Einen __begründeten Standpunkt__ beziehen.' },
        { titel: 'Schluss', text: '__Fazit__ + Ausblick oder Appell.' },
      ],
    },

    {
      type: 'redemittel',
      eyebrow: 'Redemittel nach Funktion',
      gruppen: [
        { fn: 'Einleiten', saetze: [{ satz: 'In letzter Zeit wird häufig darüber diskutiert, ob…' }] },
        { fn: 'Argument + Beispiel', saetze: [{ satz: 'Ein gewichtiges Argument dafür ist… / Das zeigt sich daran, dass…' }] },
        { fn: 'Gegenargument', saetze: [{ satz: 'Dem ist jedoch entgegenzuhalten, dass… / Kritiker wenden ein, dass…' }] },
        { fn: 'Position & Schluss', saetze: [{ satz: 'Meiner Ansicht nach… / Zusammenfassend lässt sich sagen, dass…' }] },
      ],
    },

    {
      type: 'modell',
      eyebrow: 'Musterbeispiel — kommentiert',
      thema: 'Thema: Smartphone-Verbot an Schulen',
      woerter: '211 Wörter',
      absaetze: [
        '==In vielen Ländern wird derzeit intensiv darüber diskutiert, ob== Smartphones an Schulen verboten werden sollten.',
        '==Ein gewichtiges Argument für== ein Verbot ist die Konzentration der Lernenden. Studien zeigen, dass ständige Benachrichtigungen die Aufmerksamkeit beeinträchtigen.',
        '==Dem ist jedoch entgegenzuhalten, dass== Smartphones ein wertvolles Lernwerkzeug sein können, ==zumal== digitale Kompetenzen zunehmend unverzichtbar werden.',
        '==Meiner Ansicht nach== sollte man einen Mittelweg wählen: Handys bleiben im Unterricht ausgeschaltet, dürfen aber für konkrete Lernaufgaben eingesetzt werden.',
        '==Zusammenfassend lässt sich sagen, dass== weder ein striktes Verbot noch uneingeschränkte Nutzung die beste Lösung ist. Entscheidend ist der verantwortungsvolle Umgang mit digitalen Medien.',
      ],
      annotationen: [
        { tag: 'Einleitung', text: 'Bezug + Streitfrage, ohne die Meinung vorwegzunehmen.' },
        { tag: 'Pro + Beispiel', text: 'Argument mit Studie/Beispiel gestützt.' },
        { tag: 'Contra', text: 'Gegenargument mit dem C1-Konnektor *zumal*.' },
        { tag: 'Position + Schluss', text: 'Begründeter Mittelweg, Fazit mit Ausblick.' },
      ],
    },

    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Plane für Teil 1 etwa **40 der 75 Minuten**. Baue sichtbar **ein Gegenargument** ein — fehlt das Abwägen, sinkt „Erfüllung der Aufgabe“. Und halte die Wortzahl.',
    },

    { type: 'rule' },

    {
      type: 'uebung',
      eyebrow: 'Übung',
      frage: 'Thema: „Sollte ehrenamtliches Engagement für Jugendliche verpflichtend sein?“',
      aufgabe: 'Schreibe eine **Einleitung** + **ein Pro-Argument mit Beispiel** (ca. 60 Wörter).',
      loesung: '*In jüngster Zeit wird zunehmend diskutiert, ob ehrenamtliches Engagement für Jugendliche verpflichtend sein sollte. Ein wichtiges Argument dafür ist der soziale Zusammenhalt: Wer früh Verantwortung übernimmt, entwickelt Empathie. Das zeigt sich daran, dass Jugendliche mit ehrenamtlicher Erfahrung ein stärkeres Verantwortungsbewusstsein aufweisen.*',
    },
  ],
}
