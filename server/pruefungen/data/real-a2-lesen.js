/**
 * Deutsch A2 — Lesen · Prüfung (pool «real»)
 *
 * Gleiche Struktur wie der Übungssatz (4 Teile, 20 Aufgaben, 30 Min., bestanden ab 12 / 20):
 *   Teil 1: 5 MC zu einer E-Mail
 *   Teil 2: 5 Zuordnungen (Personen → Anzeigen, eine Anzeige bleibt übrig)
 *   Teil 3: 5 Richtig/Falsch zu kurzen Aushängen und Informationen
 *   Teil 4: 5 MC zu einem längeren Zeitungstext
 *
 * Alle Texte und Aufgaben sind neu und kommen im Übungssatz nicht vor.
 */

export const realA2LesenExams = [
  {
    id: 'real-a2-lesen-1',
    provider: 'goethe',
    level: 'A2',
    module: 'lesen',
    pool: 'real',
    title: 'Deutsch A2 — Lesen · Prüfung',
    description: 'Vollständige Leseprüfung auf Niveau A2: vier Teile, 20 Aufgaben, 30 Minuten.',
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
              label: 'E-Mail von Daniela an ihren Bruder Tobias',
              text:
                `Lieber Tobias,

ich habe gute Nachrichten: Ich habe eine neue Stelle! Ab dem 1. März arbeite ich als Verkäuferin in einem Sportgeschäft in Freiburg. Im Büro hat es mir nicht mehr gefallen, weil ich dort den ganzen Tag allein am Computer gesessen habe.

Eine Wohnung in Freiburg habe ich auch schon gefunden. Sie liegt direkt am Park und ich brauche nur zehn Minuten zu Fuß zur Arbeit.

Der Umzug ist am letzten Samstag im Februar. Kannst du mir helfen? Papa leiht mir sein Auto, aber ich brauche noch jemanden, der die schweren Kartons trägt. Am Abend koche ich dann für uns.

Schreib mir bitte bis Mittwoch, ob du Zeit hast.

Liebe Grüße
Daniela`,
            },
          ],
        },
        questions: [
          {
            id: 'ra2l1-1',
            type: 'multiple-choice',
            prompt: 'Wo arbeitet Daniela ab März?',
            options: [
              { id: 'a', text: 'In einem Büro.' },
              { id: 'b', text: 'In einem Restaurant.' },
              { id: 'c', text: 'In einem Sportgeschäft.' },
            ],
            correct: 'c',
            points: 1,
          },
          {
            id: 'ra2l1-2',
            type: 'multiple-choice',
            prompt: 'Warum hat Daniela die Arbeit im Büro nicht mehr gefallen?',
            options: [
              { id: 'a', text: 'Weil sie dort immer allein am Computer war.' },
              { id: 'b', text: 'Weil sie zu wenig Geld verdient hat.' },
              { id: 'c', text: 'Weil der Weg zur Arbeit zu lang war.' },
            ],
            correct: 'a',
            points: 1,
          },
          {
            id: 'ra2l1-3',
            type: 'multiple-choice',
            prompt: 'Wie kommt Daniela in Freiburg zur Arbeit?',
            options: [
              { id: 'a', text: 'Mit dem Auto.' },
              { id: 'b', text: 'Zu Fuß.' },
              { id: 'c', text: 'Mit dem Bus.' },
            ],
            correct: 'b',
            points: 1,
          },
          {
            id: 'ra2l1-4',
            type: 'multiple-choice',
            prompt: 'Was soll Tobias beim Umzug machen?',
            options: [
              { id: 'a', text: 'Die schweren Kartons tragen.' },
              { id: 'b', text: 'Sein Auto mitbringen.' },
              { id: 'c', text: 'Das Abendessen kochen.' },
            ],
            correct: 'a',
            points: 1,
          },
          {
            id: 'ra2l1-5',
            type: 'multiple-choice',
            prompt: 'Was soll Tobias bis Mittwoch tun?',
            options: [
              { id: 'a', text: 'Daniela in Freiburg besuchen.' },
              { id: 'b', text: 'Den Vater anrufen.' },
              { id: 'c', text: 'Daniela eine Antwort schreiben.' },
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
            id: 'ra2l2',
            type: 'matching',
            instructions: 'Ordne jeder Person die passende Anzeige zu.',
            items: [
              { id: 'p1', text: 'Jana (27) möchte in ihrer Freizeit kochen lernen, am liebsten vegetarisch.' },
              { id: 'p2', text: 'Herr Albrecht (61) hat Probleme mit seinem Computer und braucht jemanden, der zu ihm kommt.' },
              { id: 'p3', text: 'Sofia (35) sucht für ihre Tochter (6) einen Musikkurs am Nachmittag.' },
              { id: 'p4', text: 'Ben (22) studiert und sucht ein günstiges Zimmer. Er möchte mit anderen Leuten zusammen wohnen.' },
              { id: 'p5', text: 'Frau Demir (45) will im Sommer eine Woche Urlaub am Meer machen und ihren Hund mitnehmen.' },
            ],
            targets: [
              { id: 'a', text: 'Ferienhaus „Dünenblick“ an der Ostsee — nur 200 Meter bis zum Strand. Hunde sind willkommen. Im Juli und August sind noch Wochen frei.' },
              { id: 'b', text: 'Stadtchor Harmonie — Wir suchen neue Sängerinnen und Sänger ab 18 Jahren. Probe jeden Donnerstag um 20 Uhr im Gemeindehaus.' },
              { id: 'c', text: 'Computer-Hilfe Wagner — Ihr PC ist langsam oder startet nicht mehr? Ich besuche Sie zu Hause und löse das Problem. 30 € pro Stunde.' },
              { id: 'd', text: 'WG im Stadtzentrum sucht Mitbewohner/in — Zimmer mit 14 m², nur 310 € im Monat inklusive Internet. Frei ab 1. Oktober.' },
              { id: 'e', text: 'Kochschule Löffel & Co. — Abend- und Wochenendkurse für Anfänger: Gerichte ohne Fleisch, Suppen, Brot backen. Ein Abend kostet 45 €.' },
              { id: 'f', text: 'Musikschule Klangwelt — Singen und erste Instrumente für Kinder von 5 bis 8 Jahren. Immer dienstags um 15:30 Uhr.' },
            ],
            correct: { p1: 'e', p2: 'c', p3: 'f', p4: 'd', p5: 'a' },
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
              label: 'Information an der Haltestelle',
              text: 'Liebe Fahrgäste, wegen Reparaturen an den Gleisen fährt die Straßenbahnlinie 4 vom 3. bis 14. April nicht zwischen Hauptbahnhof und Rathaus. Zwischen diesen Haltestellen fahren Busse der Linie 40. Ihre Fahrkarten gelten auch im Bus.',
            },
            {
              label: 'Aushang in der Sprachschule',
              text:
                `Liebe Kursteilnehmerinnen und Kursteilnehmer,

am Freitag, 22. November, zeigen wir um 18 Uhr in Raum 3 einen deutschen Film mit Untertiteln. Der Eintritt ist frei, aber es gibt nur 40 Plätze. Tragt euch deshalb bitte bis Mittwoch in die Liste im Sekretariat ein. Getränke könnt ihr an dem Abend bei uns kaufen.

Euer Schulteam`,
            },
            {
              label: 'Karte vom Paketdienst',
              text:
                'Wir haben Sie heute leider nicht angetroffen. Ihr Paket liegt ab morgen, 10 Uhr, im Schreibwarenladen Lenz, Gartenstraße 12. Sie können es dort sieben Tage lang abholen. Bitte bringen Sie Ihren Ausweis mit.',
            },
          ],
        },
        questions: [
          { id: 'ra2l3-1', type: 'true-false', statement: 'Vom 3. bis 14. April fahren zwischen Hauptbahnhof und Rathaus Busse.', correct: true, points: 1 },
          { id: 'ra2l3-2', type: 'true-false', statement: 'Für den Bus der Linie 40 muss man eine neue Fahrkarte kaufen.', correct: false, points: 1 },
          { id: 'ra2l3-3', type: 'true-false', statement: 'Zum Filmabend kann man ohne Anmeldung kommen.', correct: false, points: 1 },
          { id: 'ra2l3-4', type: 'true-false', statement: 'Das Paket kann man erst ab morgen abholen.', correct: true, points: 1 },
          { id: 'ra2l3-5', type: 'true-false', statement: 'Man hat eine Woche Zeit, um das Paket abzuholen.', correct: true, points: 1 },
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
              label: 'Zeitungsartikel: Ein Garten für alle in Kassel',
              text:
                `Mitten in Kassel, zwischen hohen Häusern und einer lauten Straße, liegt seit vier Jahren ein besonderer Garten. Früher war hier ein Parkplatz. Heute wachsen dort Tomaten, Salat, Kräuter und Blumen. Der Garten gehört nicht einer Person, sondern allen Nachbarn: Jeder darf mitmachen, und es kostet nichts.

Die Idee hatte Ruth Brenner (67). Die frühere Lehrerin wohnt gleich gegenüber. „Ich habe aus dem Fenster immer nur Autos gesehen. Das wollte ich ändern“, erzählt sie. Am Anfang haben nur sechs Leute geholfen, heute kommen regelmäßig über fünfzig — von Kindern bis zu Rentnern.

Besonders viel los ist am Samstagvormittag. Dann arbeiten alle zusammen im Garten. Danach kochen sie aus dem Gemüse eine Suppe und essen gemeinsam. „Viele kommen nicht wegen der Tomaten, sondern weil sie hier neue Leute kennenlernen“, sagt Ruth Brenner.

Es gibt aber auch Schwierigkeiten. Im Sommer fehlt oft Wasser, weil es im Garten keine Wasserleitung gibt. Die Nachbarn müssen das Wasser in Eimern aus ihren Wohnungen holen. Die Stadt hat jetzt Hilfe versprochen: Im nächsten Frühling bekommt der Garten eine eigene Wasserleitung und zwei neue Bänke.`,
            },
          ],
        },
        questions: [
          {
            id: 'ra2l4-1',
            type: 'multiple-choice',
            prompt: 'Was war früher an dem Ort, wo heute der Garten ist?',
            options: [
              { id: 'a', text: 'Ein Spielplatz.' },
              { id: 'b', text: 'Ein Parkplatz.' },
              { id: 'c', text: 'Eine Schule.' },
            ],
            correct: 'b',
            points: 1,
          },
          {
            id: 'ra2l4-2',
            type: 'multiple-choice',
            prompt: 'Warum hatte Ruth Brenner die Idee für den Garten?',
            options: [
              { id: 'a', text: 'Weil sie Gemüse verkaufen wollte.' },
              { id: 'b', text: 'Weil sie für ihre Schüler einen Garten brauchte.' },
              { id: 'c', text: 'Weil sie vor ihrem Fenster nicht mehr nur Autos sehen wollte.' },
            ],
            correct: 'c',
            points: 1,
          },
          {
            id: 'ra2l4-3',
            type: 'multiple-choice',
            prompt: 'Was machen die Leute am Samstag nach der Gartenarbeit?',
            options: [
              { id: 'a', text: 'Sie kochen und essen zusammen.' },
              { id: 'b', text: 'Sie verkaufen das Gemüse auf dem Markt.' },
              { id: 'c', text: 'Jeder nimmt sein Gemüse mit nach Hause.' },
            ],
            correct: 'a',
            points: 1,
          },
          {
            id: 'ra2l4-4',
            type: 'multiple-choice',
            prompt: 'Welches Problem gibt es im Sommer?',
            options: [
              { id: 'a', text: 'Es kommen zu wenige Helfer.' },
              { id: 'b', text: 'Es gibt nicht genug Wasser.' },
              { id: 'c', text: 'Es gibt zu wenig Platz für die Pflanzen.' },
            ],
            correct: 'b',
            points: 1,
          },
          {
            id: 'ra2l4-5',
            type: 'multiple-choice',
            prompt: 'Was hat die Stadt versprochen?',
            options: [
              { id: 'a', text: 'Eine Wasserleitung und neue Bänke.' },
              { id: 'b', text: 'Einen größeren Garten an einem anderen Ort.' },
              { id: 'c', text: 'Geld für neue Pflanzen.' },
            ],
            correct: 'a',
            points: 1,
          },
        ],
      },
    ],
  },
]
