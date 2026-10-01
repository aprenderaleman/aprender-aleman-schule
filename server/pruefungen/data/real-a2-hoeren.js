/**
 * Deutsch A2 — Hören · Prüfung (pool «real»)
 *
 * Gleiche Struktur wie der Modellsatz (4 Teile, 20 Items, ~30 min, bestanden = 12 / 20):
 *   Teil 1: 5 kurze Hörtexte, MC, 2x hören
 *   Teil 2: 5 Durchsagen / kurze Texte, R/F, 1x hören
 *   Teil 3: 5 Mini-Dialoge, MC, 1x hören
 *   Teil 4: längeres Interview, R/F, 2x hören (5 Items)
 *
 * Kein audioUrl: Der Server erzeugt das Audio aus dem transcript.
 */

export const realA2HoerenExams = [
  {
    id: 'real-a2-hoeren-1',
    provider: 'goethe',
    level: 'A2',
    module: 'hoeren',
    pool: 'real',
    title: 'Deutsch A2 — Hören · Prüfung',
    description: 'Hörverstehens-Prüfung auf Niveau A2: vier Teile mit zwanzig Aufgaben.',
    durationMinutes: 30,
    maxScore: 20,
    passScore: 12,
    parts: [
      /* ─────────── TEIL 1 ─────────── */
      {
        id: 'teil-1',
        title: 'Teil 1',
        instructions: 'Du hörst fünf kurze Texte. Du hörst jeden Text zweimal. Wähle die richtige Lösung a, b oder c.',
        questions: [
          {
            id: 'ra2h1-1',
            type: 'multiple-choice',
            audio: {
              allowedPlays: 2,
              label: 'Aufgabe 1',
              transcript:
                'Anrufbeantworter: „Hallo Svenja, hier ist Tobias. Ich kann dich morgen leider nicht mit dem Auto abholen, es ist in der Werkstatt. Nimm bitte die S-Bahn bis zum Stadtpark. Ich warte dort am Ausgang auf dich. Bis morgen!“',
            },
            prompt: 'Wie kommt Svenja morgen zum Stadtpark?',
            options: [
              { id: 'a', text: 'Mit dem Auto von Tobias' },
              { id: 'b', text: 'Mit dem Bus' },
              { id: 'c', text: 'Mit der S-Bahn' },
            ],
            correct: 'c',
            points: 1,
          },
          {
            id: 'ra2h1-2',
            type: 'multiple-choice',
            audio: {
              allowedPlays: 2,
              label: 'Aufgabe 2',
              transcript:
                'Radiosprecherin: „Und jetzt noch ein Tipp für das Wochenende: Am Samstag findet auf dem Rathausplatz der große Flohmarkt statt, von acht bis sechzehn Uhr. Am Sonntag gibt es dort ab elf Uhr ein Konzert für Kinder.“',
            },
            prompt: 'Was kann man am Sonntag auf dem Rathausplatz machen?',
            options: [
              { id: 'a', text: 'Ein Konzert hören' },
              { id: 'b', text: 'Auf dem Flohmarkt einkaufen' },
              { id: 'c', text: 'Einen Film für Kinder sehen' },
            ],
            correct: 'a',
            points: 1,
          },
          {
            id: 'ra2h1-3',
            type: 'multiple-choice',
            audio: {
              allowedPlays: 2,
              label: 'Aufgabe 3',
              transcript:
                'Kunde: „Guten Tag, mein Laptop ist kaputt. Wie lange dauert die Reparatur?“\nMitarbeiterin: „Normalerweise eine Woche. Aber im Moment haben wir sehr viel Arbeit, deshalb brauchen wir zehn Tage.“\nKunde: „Gut, dann lasse ich ihn hier.“',
            },
            prompt: 'Wie lange dauert die Reparatur jetzt?',
            options: [
              { id: 'a', text: 'Eine Woche' },
              { id: 'b', text: 'Zehn Tage' },
              { id: 'c', text: 'Zwei Wochen' },
            ],
            correct: 'b',
            points: 1,
          },
          {
            id: 'ra2h1-4',
            type: 'multiple-choice',
            audio: {
              allowedPlays: 2,
              label: 'Aufgabe 4',
              transcript:
                'Kursleiterin: „Noch eine Information zu unserem Ausflug am Samstag: Wir treffen uns um neun Uhr am Busbahnhof. Bitte bringen Sie bequeme Schuhe und etwas zu trinken mit. Essen brauchen Sie nicht, wir essen mittags zusammen in einem Gasthaus.“',
            },
            prompt: 'Was sollen die Teilnehmer zum Ausflug mitbringen?',
            options: [
              { id: 'a', text: 'Etwas zu essen' },
              { id: 'b', text: 'Geld für die Busfahrkarte' },
              { id: 'c', text: 'Bequeme Schuhe und ein Getränk' },
            ],
            correct: 'c',
            points: 1,
          },
          {
            id: 'ra2h1-5',
            type: 'multiple-choice',
            audio: {
              allowedPlays: 2,
              label: 'Aufgabe 5',
              transcript:
                'Frau: „Guten Tag. Was kostet das Training bei Ihnen im Monat?“\nMitarbeiter: „Normalerweise fünfunddreißig Euro. Sind Sie Studentin?“\nFrau: „Ja, ich studiere hier an der Universität.“\nMitarbeiter: „Dann bezahlen Sie nur fünfundzwanzig Euro.“',
            },
            prompt: 'Wie viel bezahlt die Frau im Monat?',
            options: [
              { id: 'a', text: '25 Euro' },
              { id: 'b', text: '35 Euro' },
              { id: 'c', text: '45 Euro' },
            ],
            correct: 'a',
            points: 1,
          },
        ],
      },

      /* ─────────── TEIL 2 ─────────── */
      {
        id: 'teil-2',
        title: 'Teil 2',
        instructions: 'Du hörst fünf Durchsagen oder kurze Texte. Du hörst jeden Text einmal. Sind die Aussagen richtig oder falsch?',
        questions: [
          {
            id: 'ra2h2-1',
            type: 'true-false',
            audio: {
              allowedPlays: 1,
              label: 'Aufgabe 6 — Durchsage im Zug',
              transcript:
                '„Sehr geehrte Fahrgäste, wegen einer Störung hält unser Zug heute nicht in Göttingen. Reisende nach Göttingen steigen bitte in Kassel aus und nehmen dort den Regionalzug um sechzehn Uhr zehn von Gleis drei.“',
            },
            statement: 'Reisende nach Göttingen müssen in Kassel umsteigen.',
            correct: true,
            points: 1,
          },
          {
            id: 'ra2h2-2',
            type: 'true-false',
            audio: {
              allowedPlays: 1,
              label: 'Aufgabe 7 — Durchsage im Kaufhaus',
              transcript:
                '„Liebe Kundinnen und Kunden, in unserer Sportabteilung im dritten Stock bekommen Sie heute zwanzig Prozent Rabatt auf alle Jacken und Sportschuhe. Das Angebot gilt nur heute bis zwanzig Uhr.“',
            },
            statement: 'Das Angebot in der Sportabteilung gilt die ganze Woche.',
            correct: false,
            points: 1,
          },
          {
            id: 'ra2h2-3',
            type: 'true-false',
            audio: {
              allowedPlays: 1,
              label: 'Aufgabe 8 — Anrufbeantworter Sprachschule',
              transcript:
                '„Guten Tag, Sie sind mit der Sprachschule Lindner verbunden. Unser Büro ist im Moment nicht besetzt. Und noch eine wichtige Information. Der neue Abendkurs beginnt nicht am ersten März, sondern erst am achten März.“',
            },
            statement: 'Der neue Abendkurs beginnt am ersten März.',
            correct: false,
            points: 1,
          },
          {
            id: 'ra2h2-4',
            type: 'true-false',
            audio: {
              allowedPlays: 1,
              label: 'Aufgabe 9 — Durchsage am Flughafen',
              transcript:
                '„Achtung, eine Information für alle Passagiere nach Lissabon. Ihr Flug hat wegen des schlechten Wetters etwa vierzig Minuten Verspätung. Die neue Abflugzeit ist dreizehn Uhr fünfundzwanzig. Bitte bleiben Sie in der Nähe von Flugsteig sieben.“',
            },
            statement: 'Der Flug nach Lissabon startet später als geplant.',
            correct: true,
            points: 1,
          },
          {
            id: 'ra2h2-5',
            type: 'true-false',
            audio: {
              allowedPlays: 1,
              label: 'Aufgabe 10 — Durchsage im Supermarkt',
              transcript:
                '„Liebe Kundinnen und Kunden, der kleine Leon sucht seine Eltern. Er ist fünf Jahre alt und trägt eine blaue Jacke. Leon wartet an der Information neben dem Eingang auf Sie.“',
            },
            statement: 'Leon wartet an der Kasse auf seine Eltern.',
            correct: false,
            points: 1,
          },
        ],
      },

      /* ─────────── TEIL 3 ─────────── */
      {
        id: 'teil-3',
        title: 'Teil 3',
        instructions: 'Du hörst fünf kurze Gespräche. Du hörst jedes Gespräch einmal. Wähle die richtige Lösung a, b oder c.',
        questions: [
          {
            id: 'ra2h3-1',
            type: 'multiple-choice',
            audio: {
              allowedPlays: 1,
              label: 'Aufgabe 11',
              transcript:
                'Mann: „Was schenken wir Oma zum Geburtstag? Vielleicht Blumen?“\nFrau: „Blumen bekommt sie doch jedes Jahr. Sie liest so gern. Kaufen wir ihr lieber ein Buch.“\nMann: „Gute Idee, das machen wir.“',
            },
            prompt: 'Was schenken die beiden der Großmutter?',
            options: [
              { id: 'a', text: 'Blumen' },
              { id: 'b', text: 'Ein Buch' },
              { id: 'c', text: 'Schokolade' },
            ],
            correct: 'b',
            points: 1,
          },
          {
            id: 'ra2h3-2',
            type: 'multiple-choice',
            audio: {
              allowedPlays: 1,
              label: 'Aufgabe 12',
              transcript:
                'Mann: „Und, wie ist deine neue Wohnung?“\nFrau: „Sie ist viel heller als die alte, und ich bin in zehn Minuten im Büro. Nur die Miete ist leider höher.“',
            },
            prompt: 'Was gefällt der Frau an der neuen Wohnung nicht?',
            options: [
              { id: 'a', text: 'Die Wohnung ist zu dunkel.' },
              { id: 'b', text: 'Der Weg zum Büro ist zu lang.' },
              { id: 'c', text: 'Die Miete ist höher.' },
            ],
            correct: 'c',
            points: 1,
          },
          {
            id: 'ra2h3-3',
            type: 'multiple-choice',
            audio: {
              allowedPlays: 1,
              label: 'Aufgabe 13',
              transcript:
                'Kundin: „Ich habe seit drei Tagen Husten. Haben Sie etwas dagegen?“\nApotheker: „Ja, diesen Hustensaft. Nehmen Sie morgens und abends einen Löffel. Wenn es nach einer Woche nicht besser ist, gehen Sie bitte zum Arzt.“',
            },
            prompt: 'Wie oft soll die Frau den Hustensaft nehmen?',
            options: [
              { id: 'a', text: 'Zweimal am Tag' },
              { id: 'b', text: 'Dreimal am Tag' },
              { id: 'c', text: 'Einmal in der Woche' },
            ],
            correct: 'a',
            points: 1,
          },
          {
            id: 'ra2h3-4',
            type: 'multiple-choice',
            audio: {
              allowedPlays: 1,
              label: 'Aufgabe 14',
              transcript:
                'Mann: „Guten Tag, ich möchte dieses Paket abholen.“\nMitarbeiterin: „Gern. Haben Sie Ihren Ausweis dabei?“\nMann: „Nein, den habe ich zu Hause vergessen. Aber meinen Führerschein habe ich dabei.“\nMitarbeiterin: „Der Führerschein ist auch in Ordnung. Zeigen Sie ihn mir bitte.“',
            },
            prompt: 'Was zeigt der Mann der Mitarbeiterin?',
            options: [
              { id: 'a', text: 'Seinen Ausweis' },
              { id: 'b', text: 'Seinen Führerschein' },
              { id: 'c', text: 'Seine Bankkarte' },
            ],
            correct: 'b',
            points: 1,
          },
          {
            id: 'ra2h3-5',
            type: 'multiple-choice',
            audio: {
              allowedPlays: 1,
              label: 'Aufgabe 15',
              transcript:
                'Frau: „Wann beginnt das Fußballspiel am Samstagnachmittag?“\nMann: „Um halb vier. Aber treffen wir uns schon um drei vor dem Stadion, sonst bekommen wir keine guten Plätze.“\nFrau: „In Ordnung, um drei bin ich da.“',
            },
            prompt: 'Wann treffen sich die beiden vor dem Stadion?',
            options: [
              { id: 'a', text: 'Um 15:00 Uhr' },
              { id: 'b', text: 'Um 15:30 Uhr' },
              { id: 'c', text: 'Um 16:00 Uhr' },
            ],
            correct: 'a',
            points: 1,
          },
        ],
      },

      /* ─────────── TEIL 4 ─────────── */
      {
        id: 'teil-4',
        title: 'Teil 4',
        instructions: 'Du hörst ein Interview. Du hörst das Interview zweimal. Sind die Aussagen 16-20 richtig oder falsch?',
        context: {
          type: 'audio',
          allowedPlays: 2,
          label: 'Interview mit der Busfahrerin Nadine Krause',
          transcript:
            `Moderator: Guten Tag, Frau Krause. Sie fahren seit sechs Jahren Bus in Leipzig. Wollten Sie schon immer Busfahrerin werden?

Nadine Krause: Nein, gar nicht. Ich habe zuerst als Verkäuferin in einer Bäckerei gearbeitet. Aber ich bin schon immer gern Auto gefahren, und eine Freundin hat mir dann von diesem Beruf erzählt. Mit dreißig habe ich die Ausbildung gemacht.

Moderator: Was gefällt Ihnen an Ihrer Arbeit besonders?

Nadine Krause: Der Kontakt mit den Fahrgästen. Viele kenne ich schon lange, und wir begrüßen uns jeden Morgen. Was ich nicht so mag, ist der Verkehr in der Innenstadt. Da stehe ich oft im Stau.

Moderator: Wie sind Ihre Arbeitszeiten?

Nadine Krause: Ich arbeite meistens früh am Morgen. Ich stehe um vier Uhr auf und bin schon am frühen Nachmittag fertig. So habe ich Zeit für meine beiden Kinder. Am Wochenende muss ich nur einmal im Monat arbeiten.

Moderator: Und was machen Sie in Ihrer Freizeit? Fahren Sie dann auch viel Auto?

Nadine Krause: Nein, in der Freizeit bleibt das Auto zu Hause. Ich fahre lieber Fahrrad oder gehe mit meinem Hund spazieren.

Moderator: Vielen Dank für das Gespräch, Frau Krause!`,
        },
        questions: [
          { id: 'ra2h4-1', type: 'true-false', statement: 'Nadine Krause hat früher in einer Bäckerei gearbeitet.', correct: true, points: 1 },
          { id: 'ra2h4-2', type: 'true-false', statement: 'Die Ausbildung zur Busfahrerin hat sie mit zwanzig Jahren gemacht.', correct: false, points: 1 },
          { id: 'ra2h4-3', type: 'true-false', statement: 'Der Verkehr in der Innenstadt gefällt ihr nicht.', correct: true, points: 1 },
          { id: 'ra2h4-4', type: 'true-false', statement: 'Sie muss jedes Wochenende arbeiten.', correct: false, points: 1 },
          { id: 'ra2h4-5', type: 'true-false', statement: 'In ihrer Freizeit fährt sie gern Fahrrad.', correct: true, points: 1 },
        ],
      },
    ],
  },
]
