/**
 * Goethe-Zertifikat C1 — Lesen (kompakte Version)
 *
 * Offiziell: 4 Teile, ~25 Items, 70 min, pass = 60%.
 * Wir verwenden eine kompakte Version mit 3 Teilen, 15 Items, pass bei 9.
 */

export const goetheC1LesenExams = [
  {
    id: 'goethe-c1-lesen-modellsatz-1',
    provider: 'goethe',
    level: 'C1',
    module: 'lesen',
    title: 'Goethe C1 — Lesen · Modellsatz 1',
    description: 'Anspruchsvolle Lesetexte mit MC, R/F und differenziertem Verstehen.',
    durationMinutes: 50,
    maxScore: 15,
    passScore: 9,
    parts: [
      {
        id: 'teil-1',
        title: 'Teil 1 — Anspruchsvoller Sachtext',
        instructions: 'Lies den Text aufmerksam und wähle die richtige Lösung a, b oder c.',
        context: {
          type: 'multi-text',
          content: [
            {
              label: 'Essay: Vom Verschwinden der Stille',
              text:
                `Stille ist in unserer modernen Welt zu einer raren Ressource geworden. Wer in einer Großstadt lebt, ist permanenten Geräuschen ausgesetzt: Verkehr, Baulärm, Stimmen, Hintergrundmusik in Geschäften, Klingeltöne von Smartphones. Die akustische Reizüberflutung ist so allgegenwärtig, dass wir sie meist gar nicht mehr als störend empfinden — bis wir das seltene Privileg echter Stille erleben und erkennen, wie sehr uns der ständige Lärm unbewusst belastet.

Lärm ist keineswegs harmlos. Zahlreiche medizinische Studien belegen, dass dauerhafte Lärmbelastung das Risiko für Bluthochdruck, Schlafstörungen und sogar Herzinfarkte signifikant erhöht. Besonders heimtückisch wirkt der nächtliche Verkehrslärm: Selbst wenn wir nicht aufwachen, registriert unser Gehirn die Geräusche und schüttet Stresshormone aus, die unsere Erholung beeinträchtigen.

Doch das Verschwinden der Stille hat nicht nur körperliche Folgen. Es verändert auch unser Denken. Stille ist die Voraussetzung für Konzentration, Reflexion und kreatives Denken. Viele große Künstler und Wissenschaftler haben immer wieder betont, wie wichtig stille Momente für ihre besten Ideen waren. Wenn diese Momente verloren gehen, droht uns nicht nur körperlicher, sondern auch geistiger Schaden.

Was tun? Einige Städte experimentieren mit „Ruhezonen“ in Parks, Bibliotheken und sogar in U-Bahnen. Manche Menschen entdecken die Natur als Rückzugsort wieder oder gönnen sich gezielte „digitale Auszeiten“. Eines scheint klar: Stille zu schützen ist keine nostalgische Spielerei, sondern eine Frage der öffentlichen Gesundheit.`,
            },
          ],
        },
        questions: [
          {
            id: 'c1l1-1',
            type: 'multiple-choice',
            prompt: 'Wie nehmen die meisten Menschen die ständige Geräuschkulisse wahr?',
            options: [
              { id: 'a', text: 'Sie empfinden sie meist als sehr störend.' },
              { id: 'b', text: 'Sie nehmen sie kaum noch bewusst wahr.' },
              { id: 'c', text: 'Sie meiden Großstädte deshalb.' },
            ],
            correct: 'b',
            points: 1,
          },
          {
            id: 'c1l1-2',
            type: 'multiple-choice',
            prompt: 'Welche Wirkung hat nächtlicher Verkehrslärm laut Text?',
            options: [
              { id: 'a', text: 'Er stört uns nur, wenn wir aufwachen.' },
              { id: 'b', text: 'Er führt direkt zum Herzinfarkt.' },
              { id: 'c', text: 'Er löst Stressreaktionen aus, auch wenn wir schlafen.' },
            ],
            correct: 'c',
            points: 1,
          },
          {
            id: 'c1l1-3',
            type: 'multiple-choice',
            prompt: 'Warum betrachtet der Autor das Verschwinden der Stille als geistiges Problem?',
            options: [
              { id: 'a', text: 'Weil Stille die Grundlage für Konzentration und Kreativität ist.' },
              { id: 'b', text: 'Weil ohne Stille niemand mehr Bücher liest.' },
              { id: 'c', text: 'Weil Stille Künstler inspiriert, das Internet zu verlassen.' },
            ],
            correct: 'a',
            points: 1,
          },
          {
            id: 'c1l1-4',
            type: 'multiple-choice',
            prompt: 'Welche Maßnahme erwähnt der Text NICHT?',
            options: [
              { id: 'a', text: 'Ruhezonen in öffentlichen Räumen' },
              { id: 'b', text: 'Strafen für laute Musik' },
              { id: 'c', text: 'Digitale Auszeiten' },
            ],
            correct: 'b',
            points: 1,
          },
          {
            id: 'c1l1-5',
            type: 'multiple-choice',
            prompt: 'Welcher Schluss zieht der Autor am Ende?',
            options: [
              { id: 'a', text: 'Stille zu schützen ist eine nostalgische Spielerei.' },
              { id: 'b', text: 'Stille zu schützen betrifft die öffentliche Gesundheit.' },
              { id: 'c', text: 'Nur in Parks ist echte Stille möglich.' },
            ],
            correct: 'b',
            points: 1,
          },
        ],
      },

      {
        id: 'teil-2',
        title: 'Teil 2 — Lückentext zum Verstehen',
        instructions: 'Lies den Text und entscheide, ob die Aussagen richtig oder falsch sind.',
        context: {
          type: 'multi-text',
          content: [
            {
              label: 'Artikel: Der Mythos vom „digitalen Eingeborenen“',
              text:
                `Lange Zeit galt es als Selbstverständlichkeit: Kinder und Jugendliche, die mit Smartphones, Tablets und Internet aufwachsen, seien automatisch „digitale Eingeborene“ — also Menschen, die digitale Werkzeuge intuitiv beherrschen. Doch eine neue Generation von Studien zeichnet ein differenzierteres Bild.

Es stimmt zwar, dass junge Menschen schneller mit neuen Apps umgehen können als ihre Eltern. Aber bedeutet das auch, dass sie die digitale Welt kompetent navigieren? Eine groß angelegte Untersuchung der OECD ergab, dass viele Jugendliche zwar souverän scrollen und liken, aber große Schwierigkeiten haben, Quellen zu prüfen, Falschmeldungen zu erkennen oder online ihre Privatsphäre zu schützen.

Die Bildungsforschung warnt vor zwei Trugschlüssen. Erstens: Schnelligkeit im Umgang mit der Oberfläche ist keine Garantie für tiefere Medienkompetenz. Zweitens: Wenn Schulen davon ausgehen, dass „die Jugend das schon kann“, vernachlässigen sie ihren Bildungsauftrag. Tatsächlich brauchen junge Menschen explizite Anleitung, um die Vor- und Nachteile digitaler Medien kritisch zu reflektieren.

Einige europäische Länder haben das erkannt und Medienkompetenz als Pflichtfach in den Lehrplan aufgenommen — von der Grundschule an. Erste Ergebnisse aus Finnland und Estland zeigen, dass Schüler dort nicht nur sicherer im Netz unterwegs sind, sondern auch besser in der Lage, Informationen kritisch einzuordnen.`,
            },
          ],
        },
        questions: [
          { id: 'c1l2-1', type: 'true-false', statement: 'Junge Menschen sind automatisch kompetent im Umgang mit der digitalen Welt.', correct: false, points: 1 },
          { id: 'c1l2-2', type: 'true-false', statement: 'Viele Jugendliche haben Schwierigkeiten, online ihre Privatsphäre zu schützen.', correct: true, points: 1 },
          { id: 'c1l2-3', type: 'true-false', statement: 'Schnelligkeit beim Bedienen einer App ist dasselbe wie Medienkompetenz.', correct: false, points: 1 },
          { id: 'c1l2-4', type: 'true-false', statement: 'In Finnland und Estland ist Medienkompetenz Teil des Lehrplans.', correct: true, points: 1 },
          { id: 'c1l2-5', type: 'true-false', statement: 'Schulen sollten davon ausgehen, dass die Jugend das schon kann.', correct: false, points: 1 },
        ],
      },

      {
        id: 'teil-3',
        title: 'Teil 3 — Meinungen aus einer Diskussion',
        instructions: 'Du liest fünf Aussagen aus einer Podiumsdiskussion zum Thema „Künstliche Intelligenz im Beruf“. Wer ist optimistisch (Ja), wer skeptisch (Nein)?',
        context: {
          type: 'multi-text',
          content: [
            {
              label: 'Podiumsdiskussion: KI im Berufsleben',
              text:
                `Prof. Dr. Martens, Wirtschaftsforscher:
„KI wird viele monotone Aufgaben übernehmen und uns dadurch Zeit für Wesentliches verschaffen. Das ist eine historische Chance, nicht eine Bedrohung.“

Frau Wolfsteiner, Gewerkschaftsvertreterin:
„Man darf nicht vergessen, dass KI auch Arbeitsplätze vernichten wird — vor allem in der mittleren Qualifikationsebene. Wir brauchen dringend politische Schutzmechanismen.“

Sarah Berg, Start-up-Gründerin:
„Ich nutze KI täglich in meinem Unternehmen und kann mir das Arbeiten ohne sie nicht mehr vorstellen. Wir sind viel produktiver geworden, ohne dass jemand entlassen wurde.“

Dr. Klein, Soziologe:
„Die soziale Schere wird sich weiter öffnen. Wer KI kompetent einsetzen kann, wird profitieren — alle anderen werden zurückbleiben. Das macht mir Sorgen.“

Frau Hofmann, Geschäftsführerin eines Logistikunternehmens:
„Wir testen seit einem Jahr KI-Systeme zur Routenplanung. Die Ergebnisse sind beeindruckend, und niemand bei uns hat seinen Job verloren. Im Gegenteil, wir konnten neue Stellen schaffen.“`,
            },
          ],
        },
        questions: [
          { id: 'c1l3-1', type: 'multiple-choice', prompt: 'Prof. Dr. Martens', options: [{ id: 'a', text: 'Optimistisch (Ja)' }, { id: 'b', text: 'Skeptisch (Nein)' }], correct: 'a', points: 1 },
          { id: 'c1l3-2', type: 'multiple-choice', prompt: 'Frau Wolfsteiner', options: [{ id: 'a', text: 'Optimistisch (Ja)' }, { id: 'b', text: 'Skeptisch (Nein)' }], correct: 'b', points: 1 },
          { id: 'c1l3-3', type: 'multiple-choice', prompt: 'Sarah Berg', options: [{ id: 'a', text: 'Optimistisch (Ja)' }, { id: 'b', text: 'Skeptisch (Nein)' }], correct: 'a', points: 1 },
          { id: 'c1l3-4', type: 'multiple-choice', prompt: 'Dr. Klein', options: [{ id: 'a', text: 'Optimistisch (Ja)' }, { id: 'b', text: 'Skeptisch (Nein)' }], correct: 'b', points: 1 },
          { id: 'c1l3-5', type: 'multiple-choice', prompt: 'Frau Hofmann', options: [{ id: 'a', text: 'Optimistisch (Ja)' }, { id: 'b', text: 'Skeptisch (Nein)' }], correct: 'a', points: 1 },
        ],
      },
    ],
  },
]
