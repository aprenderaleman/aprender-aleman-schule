/**
 * Deutsch B1 — Schreiben · Prüfung (Pool «real»)
 *
 * Gleiche Struktur wie der Modellsatz (3 Teile, 60 min):
 *   Teil 1: Persönliche E-Mail (~80 Wörter)
 *   Teil 2: Forumsbeitrag / Meinungstext (~80 Wörter)
 *   Teil 3: Halbformelle Mitteilung (~40 Wörter)
 */

export const realB1SchreibenExams = [
  {
    id: 'real-b1-schreiben-1',
    provider: 'goethe',
    level: 'B1',
    module: 'schreiben',
    pool: 'real',
    title: 'Deutsch B1 — Schreiben · Prüfung',
    description: 'Drei Schreibaufgaben: persönliche E-Mail, Forumsbeitrag und halbformelle Nachricht.',
    durationMinutes: 60,
    maxScore: 60,
    passScore: 36,
    parts: [
      {
        id: 'teil-1',
        title: 'Teil 1 — Persönliche E-Mail',
        kind: 'writing-task',
        instructions:
          'Du warst letzten Samstag auf einem Konzert. Deine Freundin Carla wollte mitkommen, musste aber arbeiten. Schreibe ihr eine E-Mail. Behandle alle drei Punkte. Schreibe etwa 80 Wörter. Vergiss Anrede, Einleitung und Gruß nicht.',
        taskType: 'Persönliche E-Mail an eine Freundin',
        taskPrompt:
          'Schreibe deiner Freundin Carla eine E-Mail über das Konzert. Behandle alle drei Punkte ausführlich.',
        bullets: [
          'Beschreibe, wie das Konzert war.',
          'Erzähle, was dir am besten gefallen hat, und begründe es.',
          'Schlage vor, was ihr bald zusammen unternehmen könnt.',
        ],
        minWords: 80,
        maxScore: 25,
      },
      {
        id: 'teil-2',
        title: 'Teil 2 — Forumsbeitrag',
        kind: 'writing-task',
        instructions:
          'Im Online-Forum deiner Stadt wird darüber diskutiert, ob Geschäfte auch am Sonntag geöffnet sein sollten. Schreibe einen Beitrag mit deiner Meinung zu diesem Thema. Schreibe etwa 80 Wörter. Begründe deine Meinung mit Beispielen.',
        taskType: 'Forumsbeitrag',
        taskPrompt:
          'Schreibe einen Forumsbeitrag, in dem du deine Meinung zum Thema „Einkaufen am Sonntag – ja oder nein?“ äußerst. Behandle die folgenden Punkte.',
        bullets: [
          'Schreibe, ob du geöffnete Geschäfte am Sonntag gut oder schlecht findest.',
          'Begründe deine Meinung mit mindestens zwei Argumenten.',
          'Berichte von einer eigenen Erfahrung, zum Beispiel aus deinem Heimatland.',
        ],
        minWords: 80,
        maxScore: 25,
      },
      {
        id: 'teil-3',
        title: 'Teil 3 — Halbformelle Nachricht',
        kind: 'writing-task',
        instructions:
          'In deiner Wohnung funktioniert seit zwei Tagen die Heizung nicht. Schreibe eine halbformelle Nachricht an deinen Vermieter Herrn Krüger. Schreibe etwa 40 Wörter. Vergiss Anrede und Gruß nicht.',
        taskType: 'Halbformelle E-Mail an einen Vermieter',
        taskPrompt: 'Schreibe Herrn Krüger eine kurze E-Mail. Behandle die folgenden Punkte.',
        bullets: [
          'Beschreibe kurz das Problem mit der Heizung.',
          'Bitte Herrn Krüger, möglichst bald einen Handwerker zu schicken.',
          'Teile ihm mit, wann du zu Hause bist.',
        ],
        minWords: 40,
        maxScore: 10,
      },
    ],
  },
]
