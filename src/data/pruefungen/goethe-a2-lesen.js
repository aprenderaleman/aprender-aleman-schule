/**
 * Goethe-Zertifikat A2 — Lesen
 *
 * Official structure (4 Teile, 20 items, 30 min, pass = 12 / 20):
 *   Teil 1: 5 MC zu kurzen Texten (z. B. E-Mail / Brief)
 *   Teil 2: 5 Matching (Personen → Anzeigen, eine Anzeige bleibt übrig)
 *   Teil 3: 5 Richtig/Falsch zu kurzen Anzeigen / Schildern
 *   Teil 4: 5 MC zu einem längeren Sachtext
 */

export const goetheA2LesenExams = [
  {
    id: 'goethe-a2-lesen-modellsatz-1',
    provider: 'goethe',
    level: 'A2',
    module: 'lesen',
    title: 'Goethe A2 — Lesen · Modellsatz 1',
    description: 'Vollständiger Leseverstehen-Test im offiziellen Goethe A2-Format.',
    durationMinutes: 30,
    maxScore: 20,
    passScore: 12,
    parts: [
      /* ─────────── TEIL 1 ─────────── */
      {
        id: 'teil-1',
        title: 'Teil 1',
        instructions: 'Lies den Text und die Aufgaben 1-5. Wähle für jede Aufgabe die richtige Lösung a, b oder c.',
        context: {
          type: 'multi-text',
          content: [
            {
              label: 'E-Mail von Sabine an ihre Freundin Eva',
              text:
                `Liebe Eva,

vielen Dank für deine Einladung zu deinem Geburtstag am Samstag! Ich komme sehr gerne. Leider kann ich erst um halb acht da sein, weil ich bis 18 Uhr arbeiten muss.

Ich bringe einen Schokoladenkuchen mit — ich weiß, dass du Schokolade liebst. Du musst also keinen Nachtisch vorbereiten.

Eine Frage noch: Soll ich auch meinen neuen Freund Markus mitbringen? Er würde dich gerne kennenlernen. Wenn das für dich okay ist, schreib mir bitte kurz zurück.

Wir treffen uns bei dir zu Hause, oder? Ich nehme die U-Bahn bis Marienplatz, dann sind es nur noch fünf Minuten zu Fuß.

Bis Samstag!
Sabine`,
            },
          ],
        },
        questions: [
          {
            id: 'a2l1-1',
            type: 'multiple-choice',
            prompt: 'Warum kommt Sabine später?',
            options: [
              { id: 'a', text: 'Weil die U-Bahn nicht früher fährt.' },
              { id: 'b', text: 'Weil sie bis 18 Uhr arbeiten muss.' },
              { id: 'c', text: 'Weil sie noch einen Kuchen backen muss.' },
            ],
            correct: 'b',
            points: 1,
          },
          {
            id: 'a2l1-2',
            type: 'multiple-choice',
            prompt: 'Was bringt Sabine mit?',
            options: [
              { id: 'a', text: 'Ein Geschenk' },
              { id: 'b', text: 'Einen Schokoladenkuchen' },
              { id: 'c', text: 'Eine Flasche Wein' },
            ],
            correct: 'b',
            points: 1,
          },
          {
            id: 'a2l1-3',
            type: 'multiple-choice',
            prompt: 'Was möchte Sabine wissen?',
            options: [
              { id: 'a', text: 'Wo Eva wohnt.' },
              { id: 'b', text: 'Ob sie ihren Freund mitbringen darf.' },
              { id: 'c', text: 'Was Eva sich zum Geburtstag wünscht.' },
            ],
            correct: 'b',
            points: 1,
          },
          {
            id: 'a2l1-4',
            type: 'multiple-choice',
            prompt: 'Wo findet die Feier statt?',
            options: [
              { id: 'a', text: 'In einem Restaurant.' },
              { id: 'b', text: 'Bei Eva zu Hause.' },
              { id: 'c', text: 'Im Park am Marienplatz.' },
            ],
            correct: 'b',
            points: 1,
          },
          {
            id: 'a2l1-5',
            type: 'multiple-choice',
            prompt: 'Wie kommt Sabine zur Feier?',
            options: [
              { id: 'a', text: 'Mit dem Auto.' },
              { id: 'b', text: 'Mit dem Fahrrad.' },
              { id: 'c', text: 'Mit der U-Bahn und zu Fuß.' },
            ],
            correct: 'c',
            points: 1,
          },
        ],
      },

      /* ─────────── TEIL 2 ─────────── */
      {
        id: 'teil-2',
        title: 'Teil 2',
        instructions:
          'Fünf Personen suchen im Internet etwas. Lies die Texte 6-10 und die Anzeigen a-f. Welche Anzeige passt zu welcher Person? Eine Anzeige passt nicht.',
        questions: [
          {
            id: 'a2l2',
            type: 'matching',
            instructions: 'Ordne jeder Person die passende Anzeige zu.',
            items: [
              { id: 'p1', text: 'Petra (32) sucht eine Sportart, die sie nach der Arbeit am Abend in der Stadt machen kann.' },
              { id: 'p2', text: 'Karl (55) möchte am Wochenende einen Tagesausflug in die Berge mit der Familie machen.' },
              { id: 'p3', text: 'Marie (24) sucht günstige Möbel für ihre erste eigene Wohnung.' },
              { id: 'p4', text: 'Tom (40) möchte sein Französisch verbessern, hat aber nur abends Zeit.' },
              { id: 'p5', text: 'Lisa (19) sucht einen Nebenjob am Wochenende, ohne Vorkenntnisse.' },
            ],
            targets: [
              { id: 'a', text: 'Yoga-Studio Sonnenblume — Kurse jeden Werktag von 18:30 bis 20:00 Uhr im Stadtzentrum. Erste Probestunde gratis.' },
              { id: 'b', text: 'Möbel-Flohmarkt Halle 7 — Sofas, Tische, Stühle ab 10 €. Jeden Sonntag von 9 bis 16 Uhr. Lieferung möglich.' },
              { id: 'c', text: 'Sprachschule Lingua — Kleingruppen Französisch, Englisch, Spanisch. Abendkurse 19-21 Uhr, ab 95 € im Monat.' },
              { id: 'd', text: 'Buchhandlung Blume — Wir suchen einen erfahrenen Buchhändler für Vollzeit. Mindestens 3 Jahre Berufserfahrung erforderlich.' },
              { id: 'e', text: 'Café Mokka — Wir suchen freundliche Bedienung für Samstag und Sonntag. Keine Erfahrung nötig, wir lernen dich an. 12 €/Stunde.' },
              { id: 'f', text: 'Wanderverein Alpenfreunde — Geführte Tagestouren in den Bayerischen Alpen, jeden Samstag. Familien willkommen. 25 € pro Person.' },
            ],
            correct: { p1: 'a', p2: 'f', p3: 'b', p4: 'c', p5: 'e' },
            pointsPerItem: 1,
          },
        ],
      },

      /* ─────────── TEIL 3 ─────────── */
      {
        id: 'teil-3',
        title: 'Teil 3',
        instructions:
          'Lies die Texte und die Aufgaben 11-15. Sind die Aussagen richtig oder falsch?',
        context: {
          type: 'multi-text',
          content: [
            {
              label: 'Anzeige im Supermarkt',
              text: 'AKTION DER WOCHE: Frische Erdbeeren aus Deutschland — 500 g für nur 2,99 € (statt 3,99 €). Nur am Freitag und Samstag, solange der Vorrat reicht.',
            },
            {
              label: 'Aushang im Sportverein',
              text:
                `Liebe Mitglieder,

unser Sommerfest findet am Samstag, 15. Juli, ab 14 Uhr im Vereinsheim statt. Es gibt Grillen, Spiele für die Kinder und am Abend Live-Musik.

Anmeldung bitte bis Mittwoch, 12. Juli, beim Trainer oder per E-Mail an info@svblau.de. Bringt eure Familien und Freunde mit!

Der Vorstand`,
            },
            {
              label: 'Information vom Reisebüro',
              text:
                'Achtung: Wegen Bauarbeiten am Münchner Flughafen kommt es im Juni und Juli zu längeren Wartezeiten. Wir empfehlen, mindestens 2,5 Stunden vor Abflug am Flughafen zu sein. Bei Inlandsflügen reichen 2 Stunden.',
            },
          ],
        },
        questions: [
          { id: 'a2l3-1', type: 'true-false', statement: 'Die Erdbeeren kosten am Donnerstag 2,99 €.', correct: false, points: 1 },
          { id: 'a2l3-2', type: 'true-false', statement: 'Beim Sommerfest gibt es Live-Musik am Abend.', correct: true, points: 1 },
          { id: 'a2l3-3', type: 'true-false', statement: 'Man kann sich nur per E-Mail anmelden.', correct: false, points: 1 },
          { id: 'a2l3-4', type: 'true-false', statement: 'Im Juli soll man früher zum Flughafen kommen.', correct: true, points: 1 },
          { id: 'a2l3-5', type: 'true-false', statement: 'Bei Inlandsflügen muss man 2,5 Stunden vorher da sein.', correct: false, points: 1 },
        ],
      },

      /* ─────────── TEIL 4 ─────────── */
      {
        id: 'teil-4',
        title: 'Teil 4',
        instructions:
          'Lies den Text und die Aufgaben 16-20. Wähle für jede Aufgabe die richtige Lösung a, b oder c.',
        context: {
          type: 'multi-text',
          content: [
            {
              label: 'Zeitungsartikel: Fahrrad statt Auto in Münster',
              text:
                `Münster ist die Fahrradhauptstadt Deutschlands. Über 40 Prozent aller Wege werden hier mit dem Fahrrad gemacht — mehr als in jeder anderen deutschen Stadt. Die Stadt hat in den letzten 20 Jahren viel Geld für Radwege ausgegeben, und das macht sich jetzt bezahlt.

Anna Klein (29) wohnt seit fünf Jahren in Münster. Sie hat kein Auto und vermisst auch keines. „Mit dem Fahrrad bin ich überall in 15 Minuten. Im Auto bräuchte ich genauso lange, weil es so viel Verkehr gibt“, sagt sie. Auch im Winter fährt sie Rad — nur bei viel Schnee nimmt sie den Bus.

Das Fahrrad ist nicht nur schneller, sondern auch billiger und gesünder. Eine neue Studie zeigt, dass Menschen, die täglich mit dem Rad fahren, seltener krank sind und länger leben. Trotzdem gibt es auch Probleme: An der Universität gibt es zu wenig Stellplätze für die vielen Studierendenfahrräder, und manchmal werden Räder gestohlen.

Der Bürgermeister von Münster möchte deshalb noch mehr in die Fahrradinfrastruktur investieren. „Wir bauen jedes Jahr neue Radwege und wollen bis 2030 die fahrradfreundlichste Stadt Europas werden“, erklärt er. Bis dahin sollen auch 5.000 zusätzliche Fahrradstellplätze entstehen.`,
            },
          ],
        },
        questions: [
          {
            id: 'a2l4-1',
            type: 'multiple-choice',
            prompt: 'Was ist das Besondere an Münster?',
            options: [
              { id: 'a', text: 'Es ist die größte Stadt Deutschlands.' },
              { id: 'b', text: 'Es ist die Fahrradhauptstadt Deutschlands.' },
              { id: 'c', text: 'Es hat das beste U-Bahn-Netz.' },
            ],
            correct: 'b',
            points: 1,
          },
          {
            id: 'a2l4-2',
            type: 'multiple-choice',
            prompt: 'Warum hat Anna kein Auto?',
            options: [
              { id: 'a', text: 'Weil sie keinen Führerschein hat.' },
              { id: 'b', text: 'Weil sie mit dem Rad genauso schnell ist.' },
              { id: 'c', text: 'Weil ein Auto zu teuer wäre.' },
            ],
            correct: 'b',
            points: 1,
          },
          {
            id: 'a2l4-3',
            type: 'multiple-choice',
            prompt: 'Was macht Anna im Winter, wenn viel Schnee liegt?',
            options: [
              { id: 'a', text: 'Sie fährt trotzdem mit dem Rad.' },
              { id: 'b', text: 'Sie nimmt den Bus.' },
              { id: 'c', text: 'Sie geht zu Fuß.' },
            ],
            correct: 'b',
            points: 1,
          },
          {
            id: 'a2l4-4',
            type: 'multiple-choice',
            prompt: 'Welches Problem gibt es an der Universität?',
            options: [
              { id: 'a', text: 'Die Studierenden haben keine Räder.' },
              { id: 'b', text: 'Es gibt nicht genug Stellplätze für Fahrräder.' },
              { id: 'c', text: 'Die Radwege sind zu schmal.' },
            ],
            correct: 'b',
            points: 1,
          },
          {
            id: 'a2l4-5',
            type: 'multiple-choice',
            prompt: 'Was plant der Bürgermeister?',
            options: [
              { id: 'a', text: 'Er möchte die Autos in der Stadt verbieten.' },
              { id: 'b', text: 'Er möchte 5.000 neue Stellplätze und mehr Radwege bauen.' },
              { id: 'c', text: 'Er möchte eine neue U-Bahn-Linie eröffnen.' },
            ],
            correct: 'b',
            points: 1,
          },
        ],
      },
    ],
  },
]
