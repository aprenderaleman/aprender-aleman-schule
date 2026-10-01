/**
 * Deutsch B1 — Lesen · Prüfung (Pool «real»)
 *
 * Gleiche Struktur wie der Modellsatz (5 Teile, 25 Items, 50 min, Pass bei 15):
 *   Teil 1: 5 Aufgaben, R/F zu einem Blogeintrag
 *   Teil 2: 5 Aufgaben, MC zu einem Zeitungsartikel
 *   Teil 3: 5 Aufgaben, Matching (Personen ↔ Anzeigen, 6 Anzeigen)
 *   Teil 4: 5 Aufgaben, Meinungen (Ja / Nein)
 *   Teil 5: 5 Aufgaben, MC zu einem informativen Text (Benutzungsordnung)
 *
 * Inhalte komplett neu — keine Überschneidung mit dem Übungssatz.
 */

export const realB1LesenExams = [
  {
    id: 'real-b1-lesen-1',
    provider: 'goethe',
    level: 'B1',
    module: 'lesen',
    pool: 'real',
    title: 'Deutsch B1 — Lesen · Prüfung',
    description: 'Vollständige B1-Leseprüfung mit allen 5 Teilen.',
    durationMinutes: 50,
    maxScore: 25,
    passScore: 15,
    parts: [
      /* ─────────── TEIL 1 ─────────── */
      {
        id: 'teil-1',
        title: 'Teil 1',
        instructions: 'Du liest einen Blogeintrag. Sind die Aussagen 1-5 richtig oder falsch?',
        context: {
          type: 'multi-text',
          content: [
            {
              label: 'Noras Blog',
              text:
                `Mein erstes Jahr als Auszubildende

Im letzten September habe ich meine Ausbildung zur Tischlerin in Hannover begonnen. Eigentlich wollte ich nach dem Abitur Architektur studieren, aber nach einem Praktikum in einer Werkstatt war mir klar: Ich möchte lieber mit den Händen arbeiten. Deshalb habe ich mich gegen die Universität entschieden.

Die ersten Wochen waren anstrengend. Ich musste jeden Morgen um halb sechs aufstehen, weil die Arbeit schon um sieben Uhr beginnt. Abends war ich oft so müde, dass ich sofort ins Bett gegangen bin. Inzwischen habe ich mich daran gewöhnt, und das frühe Aufstehen stört mich nicht mehr.

In unserem Betrieb arbeiten acht Personen. Ich bin die einzige Frau, aber das ist kein Problem — meine Kollegen sind sehr hilfsbereit und erklären mir alles geduldig. Im Frühling durfte ich zum ersten Mal ganz allein ein Regal für eine Kundin bauen. Darauf war ich wirklich stolz!

Zwei Tage pro Woche gehe ich in die Berufsschule. Dort haben wir Fächer wie Mathematik und Technisches Zeichnen. Die Theorie gefällt mir ehrlich gesagt weniger als die Arbeit in der Werkstatt, aber ich weiß, dass sie wichtig ist.

Nur das Geld ist ein Problem: Als Auszubildende verdiene ich nicht viel, deshalb wohne ich noch bei meinen Eltern. Nach der Ausbildung möchte ich aber in eine eigene Wohnung ziehen.

Mein Tipp für alle, die noch keinen Beruf gefunden haben: Macht unbedingt zuerst ein Praktikum! Nur so merkt ihr, was wirklich zu euch passt.`,
            },
          ],
        },
        questions: [
          { id: 'rb1l1-1', type: 'true-false', statement: 'Nora hat nach dem Abitur zuerst Architektur studiert.', correct: false, points: 1 },
          { id: 'rb1l1-2', type: 'true-false', statement: 'Das frühe Aufstehen ist für Nora heute kein Problem mehr.', correct: true, points: 1 },
          { id: 'rb1l1-3', type: 'true-false', statement: 'Nora hat schon einmal ohne Hilfe ein Möbelstück für eine Kundin gebaut.', correct: true, points: 1 },
          { id: 'rb1l1-4', type: 'true-false', statement: 'Der Unterricht in der Berufsschule gefällt Nora besser als die Arbeit in der Werkstatt.', correct: false, points: 1 },
          { id: 'rb1l1-5', type: 'true-false', statement: 'Nora lebt im Moment noch bei ihren Eltern.', correct: true, points: 1 },
        ],
      },

      /* ─────────── TEIL 2 ─────────── */
      {
        id: 'teil-2',
        title: 'Teil 2',
        instructions: 'Du liest einen Zeitungsartikel. Wähle bei den Aufgaben 6-10 die richtige Lösung a, b oder c.',
        context: {
          type: 'multi-text',
          content: [
            {
              label: 'Artikel: Reparieren statt wegwerfen',
              text:
                `Kaputte Geräte landen in Deutschland immer seltener sofort im Müll. Das zeigt eine aktuelle Umfrage unter 2.000 Erwachsenen: 44 Prozent der Befragten haben im letzten Jahr mindestens ein Gerät repariert oder reparieren lassen. Vor fünf Jahren waren es erst 29 Prozent.

Der wichtigste Grund ist das Geld. „Neue Geräte sind deutlich teurer geworden. Da überlegen viele Menschen zweimal, ob sie etwas wegwerfen“, erklärt die Umweltforscherin Dr. Petra Lindner, die die Umfrage geleitet hat. Aber auch der Umweltschutz spielt eine Rolle: 58 Prozent der Befragten sagten, dass sie weniger Müll produzieren möchten.

Besonders beliebt sind sogenannte Reparaturtreffs. Dort helfen freiwillige Fachleute den Besuchern kostenlos, ihre Toaster, Lampen oder Fahrräder wieder in Ordnung zu bringen. Die Besucher bezahlen nur die Ersatzteile. In Dortmund gibt es inzwischen sieben solche Treffpunkte, vor fünf Jahren war es nur einer.

Nicht alle freuen sich über diese Entwicklung. Viele Elektrogeschäfte verkaufen weniger neue Geräte als früher. „Das merken wir deutlich“, sagt der Händler Uwe Brandt. Er hat deshalb in seinem Geschäft eine kleine Werkstatt eingerichtet, in der er die Geräte seiner Kunden repariert.

Allerdings lohnt sich eine Reparatur nicht immer. Bei Handys und Tablets ist sie oft kompliziert und teuer. „Mein Handy war nach drei Jahren kaputt, aber die Reparatur hätte fast so viel gekostet wie ein neues Gerät“, erzählt die 31-jährige Miriam aus Dortmund. „Da habe ich mir doch lieber ein neues gekauft.“`,
            },
          ],
        },
        questions: [
          {
            id: 'rb1l2-1',
            type: 'multiple-choice',
            prompt: 'Wie viele Befragte haben vor fünf Jahren ein Gerät repariert oder reparieren lassen?',
            options: [
              { id: 'a', text: '44 Prozent' },
              { id: 'b', text: '58 Prozent' },
              { id: 'c', text: '29 Prozent' },
            ],
            correct: 'c',
            points: 1,
          },
          {
            id: 'rb1l2-2',
            type: 'multiple-choice',
            prompt: 'Was ist laut Text der wichtigste Grund dafür, dass mehr repariert wird?',
            options: [
              { id: 'a', text: 'Neue Geräte kosten mehr als früher.' },
              { id: 'b', text: 'Die Menschen haben mehr Freizeit.' },
              { id: 'c', text: 'Alte Geräte haben eine bessere Qualität.' },
            ],
            correct: 'a',
            points: 1,
          },
          {
            id: 'rb1l2-3',
            type: 'multiple-choice',
            prompt: 'Was müssen die Besucher in einem Reparaturtreff bezahlen?',
            options: [
              { id: 'a', text: 'Die Arbeit der Fachleute.' },
              { id: 'b', text: 'Nur die Ersatzteile.' },
              { id: 'c', text: 'Gar nichts.' },
            ],
            correct: 'b',
            points: 1,
          },
          {
            id: 'rb1l2-4',
            type: 'multiple-choice',
            prompt: 'Wie hat der Händler Uwe Brandt auf die Entwicklung reagiert?',
            options: [
              { id: 'a', text: 'Er hat sein Geschäft geschlossen.' },
              { id: 'b', text: 'Er verkauft seine Geräte jetzt billiger.' },
              { id: 'c', text: 'Er bietet in seinem Geschäft jetzt auch Reparaturen an.' },
            ],
            correct: 'c',
            points: 1,
          },
          {
            id: 'rb1l2-5',
            type: 'multiple-choice',
            prompt: 'Warum hat Miriam ihr Handy nicht reparieren lassen?',
            options: [
              { id: 'a', text: 'Weil die Reparatur fast so teuer wie ein neues Handy gewesen wäre.' },
              { id: 'b', text: 'Weil es in ihrer Stadt keinen Reparaturtreff gibt.' },
              { id: 'c', text: 'Weil die Reparatur zu lange gedauert hätte.' },
            ],
            correct: 'a',
            points: 1,
          },
        ],
      },

      /* ─────────── TEIL 3 ─────────── */
      {
        id: 'teil-3',
        title: 'Teil 3',
        instructions:
          'Fünf Personen suchen im Internet eine passende Unterkunft für ihren Urlaub. Lies die Texte und die Anzeigen. Welche Anzeige passt zu welcher Person?',
        questions: [
          {
            id: 'rb1l3',
            type: 'matching',
            instructions: 'Ordne jeder Person die passende Anzeige zu.',
            items: [
              { id: 'p1', text: 'Familie Schubert möchte mit ihren zwei kleinen Kindern Urlaub auf dem Land machen. Die Kinder lieben Tiere.' },
              { id: 'p2', text: 'Herr Demir (58) will in Ruhe wandern und sucht ein Zimmer mit Frühstück in den Bergen.' },
              { id: 'p3', text: 'Carla und Ben (beide 22) möchten eine Großstadt besichtigen. Sie haben wenig Geld und wollen zentral wohnen.' },
              { id: 'p4', text: 'Frau Nowak (41) reist mit ihrem Hund und möchte ganz in der Nähe vom Meer wohnen.' },
              { id: 'p5', text: 'Ole (30) möchte seinen Geburtstag ein Wochenende lang mit sieben Freunden feiern. Sie wollen zusammen wohnen und selbst kochen.' },
            ],
            targets: [
              { id: 'a', text: 'Hostel Mitte in Hamburg — Betten im Mehrbettzimmer ab 19 Euro pro Nacht. Mitten im Zentrum, alle Sehenswürdigkeiten in der Nähe.' },
              { id: 'b', text: 'Ferienhof Lindenau — Urlaub auf dem Bauernhof! Wohnungen für Familien. Kinder dürfen jeden Tag die Ponys und Hasen füttern.' },
              { id: 'c', text: 'Hotel Seeschloss — Elegantes Hotel am See mit Schwimmbad, Sauna und feinem Restaurant. Doppelzimmer ab 240 Euro pro Nacht.' },
              { id: 'd', text: 'Gruppenhaus Waldmühle — Ein ganzes Haus für bis zu zwölf Personen, mit großer Küche zum Selberkochen. Ideal für Feiern am Wochenende.' },
              { id: 'e', text: 'Pension Bergblick im Allgäu — Ruhige Einzel- und Doppelzimmer mit Frühstück. Die Wanderwege beginnen direkt vor der Tür. Haustiere sind leider nicht erlaubt.' },
              { id: 'f', text: 'Strandhaus Dünenweg an der Ostsee — Ferienwohnung für zwei Personen, nur 50 Meter bis zum Strand. Hunde sind bei uns herzlich willkommen.' },
            ],
            correct: { p1: 'b', p2: 'e', p3: 'a', p4: 'f', p5: 'd' },
            pointsPerItem: 1,
          },
        ],
      },

      /* ─────────── TEIL 4 ─────────── */
      {
        id: 'teil-4',
        title: 'Teil 4',
        instructions:
          'Du liest fünf Meinungen zum Thema „Geöffnete Geschäfte am Sonntag“. Sind die Personen dafür (Ja) oder dagegen (Nein)?',
        context: {
          type: 'multi-text',
          content: [
            {
              label: 'Leserkommentare',
              text:
                `Sabine, 34, Krankenpflegerin:
„Ich arbeite im Schichtdienst und habe unter der Woche kaum Zeit zum Einkaufen. Wenn die Läden auch sonntags geöffnet wären, könnte ich endlich in Ruhe einkaufen gehen. Das wäre für mich eine große Hilfe.“

Herr Petrov, 51, Verkäufer:
„Ich stehe schon an sechs Tagen pro Woche im Geschäft. Der Sonntag ist der einzige Tag, an dem ich etwas mit meiner Familie unternehmen kann. Diesen Tag möchte ich nicht auch noch verlieren.“

Elif, 20, Studentin:
„Natürlich wäre es praktisch, sonntags einkaufen zu gehen. Trotzdem finde ich, dass ein Tag in der Woche ruhig bleiben sollte. Man kann doch an den anderen sechs Tagen einkaufen — das reicht völlig.“

Herr Wagner, 45, Besitzer eines Schuhgeschäfts:
„Im Internet kann man rund um die Uhr bestellen, auch am Sonntag. Kleine Läden wie meiner verlieren dadurch viele Kunden. Wenn wir sonntags öffnen dürften, hätten wir endlich die gleichen Chancen.“

Frau Lorenz, 67, Rentnerin:
„Früher waren die Sonntage ruhig, und die Familien haben Zeit miteinander verbracht. Die Geschäfte haben heute sowieso schon bis spät abends auf. Noch längere Öffnungszeiten braucht wirklich niemand.“`,
            },
          ],
        },
        questions: [
          { id: 'rb1l4-1', type: 'multiple-choice', prompt: 'Sabine (Krankenpflegerin)', options: [{ id: 'a', text: 'Ja, dafür' }, { id: 'b', text: 'Nein, dagegen' }], correct: 'a', points: 1 },
          { id: 'rb1l4-2', type: 'multiple-choice', prompt: 'Herr Petrov (Verkäufer)', options: [{ id: 'a', text: 'Ja, dafür' }, { id: 'b', text: 'Nein, dagegen' }], correct: 'b', points: 1 },
          { id: 'rb1l4-3', type: 'multiple-choice', prompt: 'Elif (Studentin)', options: [{ id: 'a', text: 'Ja, dafür' }, { id: 'b', text: 'Nein, dagegen' }], correct: 'b', points: 1 },
          { id: 'rb1l4-4', type: 'multiple-choice', prompt: 'Herr Wagner (Geschäftsbesitzer)', options: [{ id: 'a', text: 'Ja, dafür' }, { id: 'b', text: 'Nein, dagegen' }], correct: 'a', points: 1 },
          { id: 'rb1l4-5', type: 'multiple-choice', prompt: 'Frau Lorenz (Rentnerin)', options: [{ id: 'a', text: 'Ja, dafür' }, { id: 'b', text: 'Nein, dagegen' }], correct: 'b', points: 1 },
        ],
      },

      /* ─────────── TEIL 5 ─────────── */
      {
        id: 'teil-5',
        title: 'Teil 5',
        instructions: 'Du liest die Benutzungsordnung einer Bibliothek. Wähle bei den Aufgaben 21-25 die richtige Lösung a, b oder c.',
        context: {
          type: 'multi-text',
          content: [
            {
              label: 'Benutzungsordnung — Stadtbibliothek am Lindenplatz',
              text:
                `1. Anmeldung
Für die Ausleihe braucht man einen Bibliotheksausweis. Er kostet für Erwachsene 15 Euro pro Jahr. Für Kinder und Jugendliche unter 18 Jahren ist der Ausweis kostenlos.

2. Leihfristen
Die Leihfrist beträgt für Bücher vier Wochen, für Filme und Spiele zwei Wochen. Sie kann zweimal verlängert werden, wenn kein anderer Benutzer das Medium reserviert hat.

3. Verspätete Rückgabe
Wer Medien zu spät zurückgibt, zahlt pro Medium und Woche eine Gebühr von 1 Euro.

4. Verlust
Verlorene oder beschädigte Medien müssen vom Benutzer ersetzt werden. Der Verlust des Ausweises ist sofort zu melden; ein neuer Ausweis kostet 5 Euro.

5. Verhalten im Lesesaal
Im Lesesaal ist Telefonieren nicht gestattet. Getränke in verschließbaren Flaschen dürfen in den Lesesaal mitgenommen werden. Essen ist dort verboten und nur im Café im Erdgeschoss möglich.

Wer wiederholt gegen die Benutzungsordnung verstößt, kann für sechs Monate von der Ausleihe ausgeschlossen werden.`,
            },
          ],
        },
        questions: [
          {
            id: 'rb1l5-1',
            type: 'multiple-choice',
            prompt: 'Wer bekommt den Bibliotheksausweis kostenlos?',
            options: [
              { id: 'a', text: 'Alle Einwohner der Stadt.' },
              { id: 'b', text: 'Personen unter 18 Jahren.' },
              { id: 'c', text: 'Erwachsene im ersten Jahr.' },
            ],
            correct: 'b',
            points: 1,
          },
          {
            id: 'rb1l5-2',
            type: 'multiple-choice',
            prompt: 'Wie lang ist die Leihfrist für Filme?',
            options: [
              { id: 'a', text: 'Eine Woche.' },
              { id: 'b', text: 'Vier Wochen.' },
              { id: 'c', text: 'Zwei Wochen.' },
            ],
            correct: 'c',
            points: 1,
          },
          {
            id: 'rb1l5-3',
            type: 'multiple-choice',
            prompt: 'Wann kann man die Leihfrist nicht verlängern?',
            options: [
              { id: 'a', text: 'Wenn eine andere Person das Medium reserviert hat.' },
              { id: 'b', text: 'Wenn man die Leihfrist schon einmal verlängert hat.' },
              { id: 'c', text: 'Wenn man ein Spiel ausgeliehen hat.' },
            ],
            correct: 'a',
            points: 1,
          },
          {
            id: 'rb1l5-4',
            type: 'multiple-choice',
            prompt: 'Was muss man tun, wenn man ein ausgeliehenes Buch verloren hat?',
            options: [
              { id: 'a', text: 'Man muss eine Gebühr von 5 Euro zahlen.' },
              { id: 'b', text: 'Man muss einen neuen Ausweis beantragen.' },
              { id: 'c', text: 'Man muss das Buch ersetzen.' },
            ],
            correct: 'c',
            points: 1,
          },
          {
            id: 'rb1l5-5',
            type: 'multiple-choice',
            prompt: 'Was ist im Lesesaal erlaubt?',
            options: [
              { id: 'a', text: 'Kurz telefonieren.' },
              { id: 'b', text: 'Aus einer verschließbaren Flasche trinken.' },
              { id: 'c', text: 'Ein mitgebrachtes Brot essen.' },
            ],
            correct: 'b',
            points: 1,
          },
        ],
      },
    ],
  },
]
