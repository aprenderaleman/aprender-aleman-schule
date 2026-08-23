// Lektion 01 · Das Goethe-Zertifikat C1 im Überblick

export default {
  spec: ['Bloque 0', 'Einführung', 'Niveau C1', 'Alle vier Module'],
  h1: 'Das Goethe-Zertifikat C1 im Überblick',
  lead: 'Bevor wir mit der Vorbereitung beginnen: Wie ist die Prüfung aufgebaut, wie wird bewertet — und wie plant man den Weg zum Bestehen?',

  content: [
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'den Aufbau der Prüfung und die vier Module kennen',
        'Punktevergabe, Bestehensgrenze und das modulare System verstehen',
        'die eigene Vorbereitung sinnvoll und gezielt planen',
      ],
    },

    { type: 'rule' },

    {
      type: 'prose',
      eyebrow: 'Worum geht es?',
      card: true,
      absaetze: [
        'Das Goethe-Zertifikat C1 weist eine **selbstständige, souveräne Sprachverwendung** nach (Stufe C1 des GER). Es wird häufig für ein Studium an deutschsprachigen Hochschulen oder für qualifizierte Berufe verlangt. Geprüft werden **vier Fertigkeiten getrennt**: Lesen, Hören, Schreiben und Sprechen. ~~(cuatro competencias, evaluadas por separado)~~',
      ],
    },

    {
      type: 'tabelle',
      eyebrow: 'Die vier Module',
      kopf: ['Modul', 'Zeit', 'Format'],
      zeilen: [
        ['Lesen', '65 Min', '4 Teile — Artikel, Kommentare, Meinungstexte; Lückentext, Satzeinsetzung, Zuordnung'],
        ['Hören', 'ca. 40 Min', '4 Teile — Podcast, Interview, Diskussion, Vortrag (meist einmaliges Hören)'],
        ['Schreiben', '75 Min', '2 Aufgaben — Diskussionsbeitrag (~230 W.) + formelle Nachricht (~120 W.)'],
        ['Sprechen', 'ca. 15 Min', 'Paarprüfung — Vortrag mit Nachfragen + Diskussion mit dem Partner'],
      ],
    },

    {
      type: 'steps',
      eyebrow: 'Das Bewertungssystem',
      steps: [
        {
          badge: '100 / 60',
          titel: 'Punkte pro Modul',
          text: 'Jedes Modul zählt __100 Punkte__; bestanden ist es ab __60 Punkten__ (60 %).',
        },
        {
          badge: 'modular',
          titel: 'Module einzeln',
          text: 'Die vier Module lassen sich __getrennt ablegen und einzeln wiederholen__ — man muss nicht alles auf einmal bestehen.',
        },
        {
          badge: 'digital',
          titel: 'Digitale Prüfung',
          text: 'Die Prüfung wird zunehmend __am Computer__ abgelegt; nur das Sprechen bleibt ein persönliches Gespräch.',
        },
      ],
    },

    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Nutze die **Modularität** strategisch: Konzentriere dich zuerst auf dein schwächstes Modul und plane **rückwärts vom Prüfungstermin**. ~~No tienes que aprobar los cuatro a la vez — repite solo el que falle.~~',
    },

    { type: 'rule' },

    {
      type: 'uebung',
      eyebrow: 'Anwendung — Selbsttest',
      frage: 'Beantworte aus dem Gedächtnis.',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Wie viele Punkte braucht man pro Modul zum Bestehen?',
        'Welche zwei Textsorten schreibt man im Modul Schreiben?',
        'Wie lange dauert das Modul Lesen?',
        'Was bedeutet „modulare“ Prüfung?',
      ],
      loesungen: [
        '**60 von 100** Punkten (60 %).',
        'Ein **Diskussionsbeitrag** (~230 Wörter) und eine **formelle Nachricht** (~120 Wörter).',
        '**65 Minuten.**',
        'Die vier Module sind **einzeln ablegbar und wiederholbar**.',
      ],
    },
  ],
}
