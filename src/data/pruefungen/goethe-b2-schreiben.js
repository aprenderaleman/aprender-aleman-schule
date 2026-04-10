/**
 * Goethe-Zertifikat B2 — Schreiben (kompakte Version)
 *
 * Offiziell: 2 Teile, 75 min, max 100 Punkte, pass = 60.
 *   Teil 1: Forumsbeitrag oder Stellungnahme (~150 Wörter)
 *   Teil 2: Halbformelle/formelle Mitteilung (~100 Wörter)
 */

export const goetheB2SchreibenExams = [
  {
    id: 'goethe-b2-schreiben-modellsatz-1',
    provider: 'goethe',
    level: 'B2',
    module: 'schreiben',
    title: 'Goethe B2 — Schreiben · Modellsatz 1',
    description: 'Stellungnahme + formelle Beschwerde-E-Mail im B2-Format.',
    durationMinutes: 75,
    maxScore: 50,
    passScore: 30,
    parts: [
      {
        id: 'teil-1',
        title: 'Teil 1 — Stellungnahme',
        kind: 'writing-task',
        instructions:
          'In einem Online-Forum wird über das Thema „Sollte das Studium an deutschen Universitäten kostenpflichtig sein?“ diskutiert. Schreibe einen Forumsbeitrag, in dem du deine Meinung äußerst und begründest. Schreibe etwa 150 Wörter.',
        taskType: 'Forumsbeitrag mit Stellungnahme',
        taskPrompt:
          'Schreibe einen Beitrag für das Forum „Bildungspolitik aktuell“, in dem du Stellung zur Frage „Studiengebühren ja oder nein?“ nimmst. Behandle alle Punkte ausführlich.',
        bullets: [
          'Erkläre, welche Position du vertrittst (für oder gegen Studiengebühren).',
          'Nenne mindestens zwei Argumente, die deine Position stützen.',
          'Gehe auf einen möglichen Gegenbar einwand ein und entkräfte ihn.',
          'Schließe mit einem konstruktiven Vorschlag oder einer abschließenden These.',
        ],
        minWords: 150,
        maxScore: 25,
      },
      {
        id: 'teil-2',
        title: 'Teil 2 — Formelle Beschwerde',
        kind: 'writing-task',
        instructions:
          'Du hast vor zwei Wochen einen Laptop online bestellt. Das Gerät ist beschädigt angekommen und der Kundendienst hat bisher nicht auf deine E-Mail geantwortet. Schreibe eine formelle Beschwerde-E-Mail an das Unternehmen TechShop GmbH. Schreibe etwa 100 Wörter.',
        taskType: 'Formelle Beschwerde-E-Mail',
        taskPrompt: 'Schreibe eine Beschwerde-E-Mail an den Kundendienst der TechShop GmbH. Behandle alle Punkte und achte auf einen formellen Stil.',
        bullets: [
          'Beschreibe die Bestellung kurz (Datum, Bestellnummer, Produkt).',
          'Erkläre, was das Problem ist.',
          'Beschreibe deine bisherigen Kontaktversuche.',
          'Fordere eine konkrete Lösung (z. B. Ersatz oder Rückerstattung).',
        ],
        minWords: 100,
        maxScore: 25,
      },
    ],
  },
]
