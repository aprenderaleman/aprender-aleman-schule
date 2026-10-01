/**
 * Deutsch B2 — Lesen · Prüfung (pool «real»)
 *
 * Gleiche Struktur wie der Modellsatz (goethe-b2-lesen.js):
 * 4 Teile, 20 Items, 50 min, bestanden ab 12 Punkten.
 * Inhalte komplett neu — werden im Übungsmodus nie gezeigt.
 */

export const realB2LesenExams = [
  {
    id: 'real-b2-lesen-1',
    provider: 'goethe',
    level: 'B2',
    module: 'lesen',
    pool: 'real',
    title: 'Deutsch B2 — Lesen · Prüfung',
    description: 'B2-Leseprüfung mit Sachtexten, Meinungsforum und Teilnahmebedingungen.',
    durationMinutes: 50,
    maxScore: 20,
    passScore: 12,
    parts: [
      {
        id: 'teil-1',
        title: 'Teil 1 — Sachtext',
        instructions: 'Lies den Text und wähle die richtige Lösung a, b oder c.',
        context: {
          type: 'multi-text',
          content: [
            {
              label: 'Artikel: Der Dorfladen kehrt zurück',
              text:
                `In vielen kleinen Gemeinden Deutschlands hat in den letzten Jahrzehnten das letzte Lebensmittelgeschäft geschlossen. Wer kein Auto besitzt, ist seitdem beim Einkaufen auf Nachbarn, Verwandte oder seltene Busverbindungen angewiesen. Immer mehr Dörfer wollen das nicht länger hinnehmen und gründen einen eigenen Laden, der den Einwohnern selbst gehört: Sie kaufen Anteile, oft schon ab 100 Euro, und entscheiden gemeinsam über Sortiment und Öffnungszeiten.

Reich wird mit einem solchen Bürgerladen niemand. Die meisten Geschäfte erwirtschaften gerade genug, um Miete, Waren und einige Teilzeitkräfte zu bezahlen. Den Betreibern geht es allerdings um mehr als den Verkauf von Brot und Milch: Häufig gehört eine Kaffee-Ecke dazu, in der man sich trifft — für viele ältere Bewohner der wichtigste Kontakt des Tages.

Die Preise liegen meist etwas über denen der großen Supermärkte, weil kleine Läden ihre Waren zu schlechteren Bedingungen einkaufen. Viele gleichen das mit Produkten von Bauern aus der Umgebung aus, die es im Supermarkt nicht gibt.

Fachleute warnen jedoch vor zu großen Erwartungen. Ein Dorfladen überlebe nur, wenn die Einwohner dort regelmäßig einkauften und nicht bloß das holten, was sie beim Großeinkauf in der Stadt vergessen hätten. Manche Bürgerläden mussten deshalb nach wenigen Jahren wieder schließen.`,
            },
          ],
        },
        questions: [
          {
            id: 'rb2l1-1',
            type: 'multiple-choice',
            prompt: 'Wem gehört ein Bürgerladen?',
            options: [
              { id: 'a', text: 'Der Gemeinde, die ihn aus Steuern finanziert.' },
              { id: 'b', text: 'Einer Supermarktkette, die kleine Filialen eröffnet.' },
              { id: 'c', text: 'Den Einwohnern, die Anteile daran gekauft haben.' },
            ],
            correct: 'c',
            points: 1,
          },
          {
            id: 'rb2l1-2',
            type: 'multiple-choice',
            prompt: 'Was erfährt man über die wirtschaftliche Lage der Läden?',
            options: [
              { id: 'a', text: 'Sie verdienen meist nur knapp genug, um ihre Kosten zu decken.' },
              { id: 'b', text: 'Sie bringen den Anteilseignern hohe Gewinne.' },
              { id: 'c', text: 'Sie kommen ohne bezahltes Personal aus.' },
            ],
            correct: 'a',
            points: 1,
          },
          {
            id: 'rb2l1-3',
            type: 'multiple-choice',
            prompt: 'Welche Bedeutung hat der Laden für viele ältere Bewohner?',
            options: [
              { id: 'a', text: 'Sie finden dort eine bezahlte Arbeit.' },
              { id: 'b', text: 'Er ist für sie ein wichtiger Treffpunkt.' },
              { id: 'c', text: 'Sie kaufen dort günstiger ein als anderswo.' },
            ],
            correct: 'b',
            points: 1,
          },
          {
            id: 'rb2l1-4',
            type: 'multiple-choice',
            prompt: 'Warum sind die Waren oft teurer als im Supermarkt?',
            options: [
              { id: 'a', text: 'Weil die Betreiber hohe Gewinne erzielen wollen.' },
              { id: 'b', text: 'Weil ausschließlich Produkte aus der Umgebung verkauft werden.' },
              { id: 'c', text: 'Weil kleine Läden beim Einkauf schlechtere Bedingungen bekommen.' },
            ],
            correct: 'c',
            points: 1,
          },
          {
            id: 'rb2l1-5',
            type: 'multiple-choice',
            prompt: 'Wovon hängt es laut den Fachleuten ab, ob ein Dorfladen überlebt?',
            options: [
              { id: 'a', text: 'Davon, dass die Einwohner regelmäßig dort einkaufen.' },
              { id: 'b', text: 'Davon, dass der Staat die Läden finanziell unterstützt.' },
              { id: 'c', text: 'Davon, dass die Preise niedriger sind als im Supermarkt.' },
            ],
            correct: 'a',
            points: 1,
          },
        ],
      },

      {
        id: 'teil-2',
        title: 'Teil 2 — Meinungsforum',
        instructions: 'Du liest fünf Meinungen aus einem Online-Forum zum Thema „Autofreie Innenstadt“. Sind die Personen dafür (Ja) oder dagegen (Nein)?',
        context: {
          type: 'multi-text',
          content: [
            {
              label: 'Forumsbeiträge',
              text:
                `Jutta, 58, Buchhändlerin:
„Am Anfang hatte ich Angst um meinen Umsatz. Seit unsere Straße für Autos gesperrt ist, bleiben die Leute aber länger und schauen öfter bei mir herein. Ich möchte nicht mehr zurück.“

Mehmet, 43, Installateur:
„Wie soll ich denn mit meinem Werkzeug und einer neuen Badewanne zum Kunden kommen — mit der Straßenbahn? Von solchen Plänen halte ich überhaupt nichts.“

Lena, 26, Studentin:
„Saubere Luft und weniger Lärm klingen verlockend. Aber meine Großmutter kann kaum noch laufen und wird von uns mit dem Auto zum Arzt in die Altstadt gefahren. Deshalb kann ich dem Vorschlag nicht zustimmen.“

Herr Brandt, 67, Rentner:
„Früher bin ich überallhin mit dem Auto gefahren. Heute genieße ich es, in Ruhe über den Marktplatz zu spazieren. Meinetwegen könnte man die Zone ruhig noch vergrößern.“

Carla, 35, Kinderärztin:
„In meiner Praxis sehe ich täglich Kinder mit Atemwegsproblemen. Rettungsdienste müssen natürlich weiter hineinfahren dürfen, aber der private Autoverkehr hat im Zentrum nichts zu suchen.“`,
            },
          ],
        },
        questions: [
          { id: 'rb2l2-1', type: 'multiple-choice', prompt: 'Jutta (Buchhändlerin)', options: [{ id: 'a', text: 'Ja, dafür' }, { id: 'b', text: 'Nein, dagegen' }], correct: 'a', points: 1 },
          { id: 'rb2l2-2', type: 'multiple-choice', prompt: 'Mehmet (Installateur)', options: [{ id: 'a', text: 'Ja, dafür' }, { id: 'b', text: 'Nein, dagegen' }], correct: 'b', points: 1 },
          { id: 'rb2l2-3', type: 'multiple-choice', prompt: 'Lena (Studentin)', options: [{ id: 'a', text: 'Ja, dafür' }, { id: 'b', text: 'Nein, dagegen' }], correct: 'b', points: 1 },
          { id: 'rb2l2-4', type: 'multiple-choice', prompt: 'Herr Brandt (Rentner)', options: [{ id: 'a', text: 'Ja, dafür' }, { id: 'b', text: 'Nein, dagegen' }], correct: 'a', points: 1 },
          { id: 'rb2l2-5', type: 'multiple-choice', prompt: 'Carla (Kinderärztin)', options: [{ id: 'a', text: 'Ja, dafür' }, { id: 'b', text: 'Nein, dagegen' }], correct: 'a', points: 1 },
        ],
      },

      {
        id: 'teil-3',
        title: 'Teil 3 — Wissenschaftlicher Text',
        instructions: 'Lies den Text und entscheide, ob die Aussagen richtig oder falsch sind.',
        context: {
          type: 'multi-text',
          content: [
            {
              label: 'Artikel: Mit der Hand schreiben oder tippen?',
              text:
                `Ein Forschungsteam aus Graz hat untersucht, ob es für das Lernen einen Unterschied macht, ob man Notizen mit der Hand oder am Laptop macht. Rund 300 Studierende hörten denselben Vortrag; die eine Hälfte schrieb mit Stift und Papier mit, die andere tippte. Eine Woche später wurden alle zum Inhalt des Vortrags befragt.

Bei reinen Faktenfragen, etwa nach Jahreszahlen oder Namen, schnitten beide Gruppen ähnlich gut ab. Sollten dagegen Zusammenhänge erklärt werden, waren diejenigen, die mit der Hand geschrieben hatten, klar im Vorteil. Die Forschenden erklären das so: Am Laptop kann man einen Vortrag fast Wort für Wort mittippen, ohne viel nachzudenken. Wer mit der Hand schreibt, ist langsamer und muss deshalb auswählen und in eigenen Worten zusammenfassen — und genau dabei wird der Stoff bereits verarbeitet.

Trotzdem raten die Forschenden nicht dazu, Laptops aus den Hörsälen zu verbannen. Sie empfehlen vielmehr, auch am Computer bewusst zusammenzufassen, statt alles mitzuschreiben. Offen bleibt allerdings, ob sich die Ergebnisse auf Schulkinder übertragen lassen, denn untersucht wurden ausschließlich Erwachsene.`,
            },
          ],
        },
        questions: [
          { id: 'rb2l3-1', type: 'true-false', statement: 'Die Teilnehmenden wurden direkt nach dem Vortrag zum Inhalt befragt.', correct: false, points: 1 },
          { id: 'rb2l3-2', type: 'true-false', statement: 'Bei Fragen nach einzelnen Fakten gab es zwischen den beiden Gruppen kaum Unterschiede.', correct: true, points: 1 },
          { id: 'rb2l3-3', type: 'true-false', statement: 'Wer mit der Hand schreibt, muss den Inhalt stärker in eigenen Worten zusammenfassen.', correct: true, points: 1 },
          { id: 'rb2l3-4', type: 'true-false', statement: 'Die Forschenden empfehlen, Laptops in Vorlesungen zu verbieten.', correct: false, points: 1 },
          { id: 'rb2l3-5', type: 'true-false', statement: 'Ob die Ergebnisse auch für Kinder gelten, ist noch nicht geklärt.', correct: true, points: 1 },
        ],
      },

      {
        id: 'teil-4',
        title: 'Teil 4 — Anweisungstext',
        instructions: 'Lies die Teilnahmebedingungen und beantworte die Fragen.',
        context: {
          type: 'multi-text',
          content: [
            {
              label: 'Teilnahmebedingungen — Fotowettbewerb „Mein Viertel“',
              text:
                `1. Teilnahme
Teilnehmen können alle Personen ab 16 Jahren, die in Leipzig wohnen. Berufsfotografinnen und Berufsfotografen sind von der Teilnahme ausgeschlossen.

2. Einsendung
Pro Person dürfen höchstens drei Fotos eingereicht werden. Die Bilder müssen bis spätestens 15. Mai über das Formular auf unserer Internetseite hochgeladen werden. Einsendungen per E-Mail oder auf Papier werden nicht berücksichtigt.

3. Anforderungen an die Fotos
Die Aufnahmen dürfen noch nicht veröffentlicht worden sein. Kleinere Korrekturen von Helligkeit und Farbe sind erlaubt, Fotomontagen dagegen nicht.

4. Auswahl und Preise
Eine Jury wählt im Juni die zehn besten Bilder aus. Diese werden im September im Rathaus ausgestellt. Der erste Preis ist mit 500 Euro dotiert.

5. Rechte
Die Rechte an den Bildern bleiben bei den Fotografinnen und Fotografen. Der Veranstalter darf die Fotos jedoch im Zusammenhang mit dem Wettbewerb kostenlos veröffentlichen.`,
            },
          ],
        },
        questions: [
          {
            id: 'rb2l4-1',
            type: 'multiple-choice',
            prompt: 'Wer darf am Wettbewerb teilnehmen?',
            options: [
              { id: 'a', text: 'Jugendliche unter 16 Jahren aus Leipzig' },
              { id: 'b', text: 'Hobbyfotografen ab 16 Jahren aus Leipzig' },
              { id: 'c', text: 'Berufsfotografen aus ganz Deutschland' },
            ],
            correct: 'b',
            points: 1,
          },
          {
            id: 'rb2l4-2',
            type: 'multiple-choice',
            prompt: 'Wie reicht man die Fotos ein?',
            options: [
              { id: 'a', text: 'Per E-Mail an die Redaktion' },
              { id: 'b', text: 'Als Papierabzug per Post' },
              { id: 'c', text: 'Über ein Formular auf der Internetseite' },
            ],
            correct: 'c',
            points: 1,
          },
          {
            id: 'rb2l4-3',
            type: 'multiple-choice',
            prompt: 'Was ist bei den Fotos erlaubt?',
            options: [
              { id: 'a', text: 'Die Helligkeit leicht zu korrigieren' },
              { id: 'b', text: 'Eine Fotomontage einzusenden' },
              { id: 'c', text: 'Bereits veröffentlichte Bilder einzusenden' },
            ],
            correct: 'a',
            points: 1,
          },
          {
            id: 'rb2l4-4',
            type: 'multiple-choice',
            prompt: 'Was passiert im September?',
            options: [
              { id: 'a', text: 'Die Jury wählt die besten Bilder aus.' },
              { id: 'b', text: 'Die Frist für die Einsendung endet.' },
              { id: 'c', text: 'Die ausgewählten Fotos werden im Rathaus gezeigt.' },
            ],
            correct: 'c',
            points: 1,
          },
          {
            id: 'rb2l4-5',
            type: 'multiple-choice',
            prompt: 'Was gilt für die Rechte an den Bildern?',
            options: [
              { id: 'a', text: 'Sie gehen an den Veranstalter über.' },
              { id: 'b', text: 'Der Veranstalter darf die Bilder für den Wettbewerb kostenlos veröffentlichen.' },
              { id: 'c', text: 'Der Veranstalter zahlt für jede Veröffentlichung ein Honorar.' },
            ],
            correct: 'b',
            points: 1,
          },
        ],
      },
    ],
  },
]
