/**
 * Goethe-Zertifikat B2 — Sprechen
 *
 * Offiziell: 2 Teile, ~15 min, Paarprüfung.
 *   Teil 1: Vortrag (4 min)
 *   Teil 2: Diskussion / Aushandeln
 *
 * Kompakte monologische Version: Vortrag + Stellungnahme.
 */

export const goetheB2SprechenExams = [
  {
    id: 'goethe-b2-sprechen-modellsatz-1',
    provider: 'goethe',
    level: 'B2',
    module: 'sprechen',
    title: 'Goethe B2 — Sprechen · Modellsatz 1',
    description: 'Vortrag und Diskussionsbeitrag zu einem aktuellen Thema.',
    durationMinutes: 12,
    maxScore: 50,
    passScore: 30,
    parts: [
      {
        id: 'teil-1',
        title: 'Teil 1 — Vortrag',
        kind: 'speaking-task',
        instructions:
          'Halte einen strukturierten Vortrag zum Thema. Du hast 90 Sekunden Vorbereitungszeit und bis zu 4 Minuten zum Sprechen.',
        taskType: 'Monolog: Vortrag',
        taskPrompt:
          'Vortrag zum Thema „Vor- und Nachteile des Lebens in der Großstadt". Strukturiere deinen Vortrag klar (Einleitung, Hauptteil, Schluss). Behandle dabei folgende Punkte:',
        bullets: [
          'Führe in das Thema ein und erkläre seine Relevanz.',
          'Stelle mindestens zwei Vorteile mit Beispielen vor.',
          'Stelle mindestens zwei Nachteile mit Beispielen vor.',
          'Beschreibe deine eigene Erfahrung oder die in deinem Land.',
          'Formuliere ein begründetes Fazit.',
        ],
        preparationSeconds: 90,
        maxRecordSeconds: 240,
        maxScore: 25,
      },
      {
        id: 'teil-2',
        title: 'Teil 2 — Diskussionsbeitrag',
        kind: 'speaking-task',
        instructions:
          'Reagiere auf den folgenden Diskussionspunkt. Du hast 60 Sekunden Vorbereitungszeit und bis zu 2,5 Minuten zum Sprechen.',
        taskType: 'Monolog: Diskussionsbeitrag',
        taskPrompt:
          'Diskussionspunkt: „Junge Menschen sollten nach der Schule erst ein Jahr arbeiten oder reisen, bevor sie studieren." Nimm Stellung und reagiere auf mögliche Gegenargumente.',
        bullets: [
          'Erkläre kurz deinen Standpunkt.',
          'Nenne zwei starke Argumente.',
          'Reagiere auf ein mögliches Gegenargument.',
          'Gib ein konkretes Beispiel.',
          'Schließe mit einer klaren Empfehlung.',
        ],
        preparationSeconds: 60,
        maxRecordSeconds: 150,
        maxScore: 25,
      },
    ],
  },
]
