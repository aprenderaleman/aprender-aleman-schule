/**
 * Goethe-Zertifikat A1 — Schreiben
 *
 * Official structure (2 Teile, ~20 min, max 25 points, pass = 60% = 15):
 *   Teil 1: Formular ausfüllen — 5 Felder · 10 Punkte (deterministisch)
 *   Teil 2: Kurze Mitteilung schreiben (~30 Wörter) · 15 Punkte (AI-Bewertung)
 */

export const goetheA1SchreibenExams = [
  {
    id: 'goethe-a1-schreiben-modellsatz-1',
    provider: 'goethe',
    level: 'A1',
    module: 'schreiben',
    title: 'Goethe A1 — Schreiben · Modellsatz 1',
    description: 'Formular und kurze Mitteilung im offiziellen Goethe A1-Format.',
    durationMinutes: 20,
    maxScore: 25,
    passScore: 15,
    parts: [
      /* ─────────── TEIL 1 — FORMULAR ─────────── */
      {
        id: 'teil-1',
        title: 'Teil 1 — Formular',
        kind: 'formular',
        instructions:
          'Ihre Freundin Anna möchte im Sprachkurs „Deutsch für Anfänger“ in München teilnehmen. Sie hilft Anna beim Anmeldeformular. Schreiben Sie die fünf Informationen in das Formular.',
        sourceText:
          `Hallo!
Mein Name ist Anna Schneider. Ich bin am 12. März 1995 in Wien geboren und ich bin Österreicherin. Ich wohne jetzt in München, Goethestraße 18, 80336 München. Meine Telefonnummer ist 0176 22334455 und meine E-Mail-Adresse ist anna.schneider@web.de. Ich arbeite als Krankenschwester im Krankenhaus.
Bis bald,
Anna`,
        formTitle: 'Anmeldeformular — Sprachkurs „Deutsch für Anfänger“',
        fields: [
          { id: 'name', label: 'Familienname', expected: ['Schneider'], points: 2 },
          { id: 'geburtsdatum', label: 'Geburtsdatum', expected: ['12.03.1995', '12.3.1995', '12. März 1995'], points: 2 },
          { id: 'staatsangehoerigkeit', label: 'Staatsangehörigkeit', expected: ['Österreich', 'österreichisch', 'Österreicherin'], points: 2 },
          { id: 'plz_ort', label: 'PLZ / Wohnort', expected: ['80336 München'], points: 2 },
          { id: 'beruf', label: 'Beruf', expected: ['Krankenschwester'], points: 2 },
        ],
      },

      /* ─────────── TEIL 2 — MITTEILUNG ─────────── */
      {
        id: 'teil-2',
        title: 'Teil 2 — Kurze Mitteilung',
        kind: 'writing-task',
        instructions:
          'Ihre Deutschlehrerin Frau Wagner hat Geburtstag. Schreiben Sie eine kurze E-Mail. Schreiben Sie zu allen drei Punkten etwa 30 Wörter. Vergessen Sie Anrede und Gruß nicht.',
        taskType: 'E-Mail',
        taskPrompt: 'Schreiben Sie eine E-Mail an Ihre Deutschlehrerin Frau Wagner zu ihrem Geburtstag. Behandeln Sie alle drei Punkte.',
        bullets: [
          'Gratulieren Sie Frau Wagner zum Geburtstag.',
          'Schreiben Sie, was Sie ihr wünschen.',
          'Laden Sie sie in ein Café ein.',
        ],
        minWords: 30,
        maxScore: 15,
      },
    ],
  },
]
