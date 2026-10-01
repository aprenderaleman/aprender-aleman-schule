/**
 * Deutsch A1 — SCHREIBEN · Prüfung (pool «real»)
 *
 * Gleiche Struktur wie der Übungssatz (Modellsatz 1):
 *   Teil 1: Formular ausfüllen — 5 Felder · 10 Punkte (deterministisch)
 *   Teil 2: Kurze Mitteilung schreiben (~30 Wörter) · 15 Punkte (AI-Bewertung)
 *
 * 20 Minuten, max. 25 Punkte. Bestanden ab 15/25.
 * Alle Texte und Aufgaben sind neu und kommen im Übungssatz nicht vor.
 */

export const realA1SchreibenExams = [
  {
    id: 'real-a1-schreiben-1',
    provider: 'goethe',
    level: 'A1',
    module: 'schreiben',
    pool: 'real',
    title: 'Deutsch A1 — Schreiben · Prüfung',
    description: 'Ein Formular und eine kurze Mitteilung auf Niveau A1.',
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
          'Ihr Freund Mateo möchte Mitglied in einem Sportverein in Leipzig werden. Sie helfen Mateo beim Anmeldeformular. Schreiben Sie die fünf Informationen in das Formular.',
        sourceText:
          `Hallo!
Ich heiße Mateo Herrera und komme aus Spanien. Ich bin am 7. Oktober 1998 in Sevilla geboren. Seit einem Jahr wohne ich in Leipzig. Meine Adresse ist Lindenstraße 24, 04177 Leipzig. Ich bin Koch und arbeite in einem Restaurant. Am Samstag habe ich frei. Dann möchte ich im Verein schwimmen.
Viele Grüße
Mateo`,
        formTitle: 'Anmeldeformular — Sportverein „Aktiv am Park“',
        fields: [
          { id: 'name', label: 'Familienname', expected: ['Herrera'], points: 2 },
          { id: 'geburtsdatum', label: 'Geburtsdatum', expected: ['07.10.1998', '7.10.1998', '7. 10. 1998', '07. 10. 1998', '7. Oktober 1998', '07. Oktober 1998', '7.Oktober 1998', '7 Oktober 1998', '7. Okt. 1998', '7. Okt 1998', '07.10.98', '7.10.98', '07/10/1998', '7/10/1998', '07/10/98', '7/10/98', '07-10-1998', '7-10-1998', '07-10-98', '7-10-98', '1998-10-07'], points: 2 },
          { id: 'geburtsort', label: 'Geburtsort', expected: ['Sevilla'], points: 2 },
          { id: 'strasse', label: 'Straße / Hausnummer', expected: ['Lindenstraße 24', 'Lindenstrasse 24', 'Lindenstr. 24', 'Lindenstr 24', 'Lindenstr.24', 'Lindenstraße24', 'Lindenstrasse24', 'Linden Straße 24', 'Linden Strasse 24', 'Lindenstraße, 24', 'Lindenstrasse, 24', 'Lindenstr., 24', 'Lindenstraße Nr. 24', 'Lindenstrasse Nr. 24', 'Lindenstr. Nr. 24'], points: 2 },
          { id: 'sportart', label: 'Sportart', expected: ['Schwimmen'], points: 2 },
        ],
      },

      /* ─────────── TEIL 2 — MITTEILUNG ─────────── */
      {
        id: 'teil-2',
        title: 'Teil 2 — Kurze Mitteilung',
        kind: 'writing-task',
        instructions:
          'Sie fahren nächste Woche in den Urlaub. Schreiben Sie eine kurze E-Mail an Ihren Nachbarn Herrn Lehmann. Schreiben Sie zu allen drei Punkten etwa 30 Wörter. Vergessen Sie Anrede und Gruß nicht.',
        taskType: 'E-Mail',
        taskPrompt: 'Schreiben Sie eine E-Mail an Ihren Nachbarn Herrn Lehmann. Sie fahren in den Urlaub und brauchen Hilfe. Behandeln Sie alle drei Punkte.',
        bullets: [
          'Schreiben Sie, wie lange Sie im Urlaub sind.',
          'Bitten Sie Herrn Lehmann um Hilfe: Er soll Ihren Blumen Wasser geben.',
          'Schreiben Sie, wann Sie ihm den Schlüssel bringen.',
        ],
        minWords: 30,
        maxScore: 15,
      },
    ],
  },
]
