/**
 * Goethe-Zertifikat B1 — Lesen
 *
 * Official structure (5 Teile, 30 items, 65 min, pass = 60% = 18 / 30):
 *   Teil 1: 6 Aufgaben, R/F zu Blogeinträgen / E-Mails
 *   Teil 2: 6 Aufgaben, MC zu Zeitungsartikeln
 *   Teil 3: 7 Aufgaben, Matching (Personen ↔ Anzeigen)
 *   Teil 4: 7 Aufgaben, Pro/Contra Meinungen zuordnen
 *   Teil 5: 4 Aufgaben, MC zu einem informativen Text (z. B. Hausordnung)
 *
 * Hinweis: Wir verwenden eine etwas reduzierte Version mit insgesamt
 * 25 Items (alle 5 Teile vertreten), Pass bei 15.
 */

export const goetheB1LesenExams = [
  {
    id: 'goethe-b1-lesen-modellsatz-1',
    provider: 'goethe',
    level: 'B1',
    module: 'lesen',
    title: 'Goethe B1 — Lesen · Modellsatz 1',
    description: 'Vollständiger B1-Lesetest mit allen 5 Teilen.',
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
              label: 'Reise-Blog von Julia',
              text:
                `Mein Auslandssemester in Spanien

Vor sechs Monaten bin ich für ein Auslandssemester nach Salamanca gegangen. Salamanca liegt im Westen Spaniens und ist eine relativ kleine Stadt mit einer der ältesten Universitäten Europas.

Am Anfang war alles sehr aufregend, aber auch ein bisschen schwierig. Mein Spanisch war damals noch nicht besonders gut, und in den ersten Wochen habe ich oft nicht verstanden, was die Leute zu mir sagten. Zum Glück habe ich schnell Freunde gefunden — vor allem in meiner WG, wo ich mit zwei Spanierinnen und einer Italienerin wohne. Wir reden zu Hause nur Spanisch, und das hat mir wirklich geholfen.

An der Uni besuche ich vier Kurse: spanische Literatur, Geschichte Spaniens, Wirtschaftsspanisch und einen Sportkurs (Flamenco!). Die Vorlesungen sind anders als in Deutschland — viel diskutierender und freier. Anfangs war das ungewohnt, aber jetzt mag ich es sehr.

Was ich nicht so mag, ist das Wetter im Winter. Viele Leute denken, dass es in Spanien immer warm ist, aber in Salamanca kann es im Januar wirklich kalt werden. Im Sommer ist es dann allerdings sehr heiß — über 35 Grad.

Mein größter Tipp für andere Studenten: Wenn ihr ein Auslandssemester macht, wohnt nicht mit Deutschen zusammen! Sucht euch eine WG mit Einheimischen, dann lernt ihr die Sprache viel schneller.`,
            },
          ],
        },
        questions: [
          { id: 'b1l1-1', type: 'true-false', statement: 'Julia ist seit einem halben Jahr in Salamanca.', correct: true, points: 1 },
          { id: 'b1l1-2', type: 'true-false', statement: 'Sie konnte schon vor der Reise sehr gut Spanisch.', correct: false, points: 1 },
          { id: 'b1l1-3', type: 'true-false', statement: 'In ihrer WG sprechen alle nur Englisch.', correct: false, points: 1 },
          { id: 'b1l1-4', type: 'true-false', statement: 'Im Winter ist es in Salamanca kalt.', correct: true, points: 1 },
          { id: 'b1l1-5', type: 'true-false', statement: 'Julia empfiehlt, mit anderen Deutschen zusammenzuwohnen.', correct: false, points: 1 },
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
              label: 'Artikel: Junge Menschen kaufen weniger Autos',
              text:
                `Das eigene Auto verliert bei jungen Menschen in Deutschland an Bedeutung. Eine neue Studie der Universität Köln zeigt: Nur noch 38 Prozent der 18- bis 29-Jährigen besitzen ein eigenes Auto. Vor zehn Jahren waren es noch 56 Prozent.

Die Gründe sind vielfältig. „Junge Menschen leben heute häufiger in Großstädten, wo der öffentliche Nahverkehr gut ausgebaut ist“, erklärt der Studienleiter Prof. Müller. „Außerdem sind Autos teuer geworden — viele junge Erwachsene können sich gar kein eigenes Fahrzeug mehr leisten.“

Hinzu kommt das wachsende Umweltbewusstsein. In der Studie gaben 67 Prozent der jungen Leute an, dass sie aus Klimaschutzgründen auf ein Auto verzichten. Stattdessen nutzen sie das Fahrrad, öffentliche Verkehrsmittel oder Carsharing-Angebote.

Diese Entwicklung gefällt nicht allen. Vor allem die Autoindustrie ist besorgt. „Wenn dieser Trend anhält, müssen wir uns als Branche grundlegend ändern“, sagt Hans Krüger vom Verband der Automobilindustrie. Einige Hersteller bieten deshalb inzwischen eigene Carsharing-Dienste an.

Doch nicht alle jungen Leute wollen aufs Auto verzichten. Auf dem Land ist ein eigenes Auto oft unverzichtbar — dort haben 72 Prozent der jungen Erwachsenen ein Fahrzeug. „Ohne Auto komme ich hier nirgendwo hin“, sagt die 24-jährige Lisa aus einem Dorf bei Münster. „Der nächste Bus fährt zweimal am Tag.“`,
            },
          ],
        },
        questions: [
          {
            id: 'b1l2-1',
            type: 'multiple-choice',
            prompt: 'Wie viele junge Menschen hatten vor zehn Jahren ein Auto?',
            options: [
              { id: 'a', text: '38 Prozent' },
              { id: 'b', text: '56 Prozent' },
              { id: 'c', text: '72 Prozent' },
            ],
            correct: 'b',
            points: 1,
          },
          {
            id: 'b1l2-2',
            type: 'multiple-choice',
            prompt: 'Welcher Grund wird im Text NICHT genannt?',
            options: [
              { id: 'a', text: 'Autos sind zu teuer geworden.' },
              { id: 'b', text: 'Junge Leute haben keinen Führerschein mehr.' },
              { id: 'c', text: 'Die Stadtbewohner nutzen öffentliche Verkehrsmittel.' },
            ],
            correct: 'b',
            points: 1,
          },
          {
            id: 'b1l2-3',
            type: 'multiple-choice',
            prompt: 'Was sagen die jungen Leute über das Klima?',
            options: [
              { id: 'a', text: 'Sie verzichten zum Schutz des Klimas auf ein Auto.' },
              { id: 'b', text: 'Sie kaufen umweltfreundliche Elektroautos.' },
              { id: 'c', text: 'Klimaschutz spielt für sie keine Rolle.' },
            ],
            correct: 'a',
            points: 1,
          },
          {
            id: 'b1l2-4',
            type: 'multiple-choice',
            prompt: 'Wie reagiert die Autoindustrie auf den Trend?',
            options: [
              { id: 'a', text: 'Sie ignoriert die Entwicklung.' },
              { id: 'b', text: 'Einige Hersteller bieten Carsharing an.' },
              { id: 'c', text: 'Sie produziert nur noch Sportwagen.' },
            ],
            correct: 'b',
            points: 1,
          },
          {
            id: 'b1l2-5',
            type: 'multiple-choice',
            prompt: 'Warum braucht Lisa auf dem Land ein Auto?',
            options: [
              { id: 'a', text: 'Weil ihr Auto sehr günstig war.' },
              { id: 'b', text: 'Weil der Bus nur zweimal am Tag fährt.' },
              { id: 'c', text: 'Weil sie eine lange Strecke zur Arbeit hat.' },
            ],
            correct: 'b',
            points: 1,
          },
        ],
      },

      /* ─────────── TEIL 3 ─────────── */
      {
        id: 'teil-3',
        title: 'Teil 3',
        instructions:
          'Fünf Personen suchen im Internet einen passenden Sportkurs. Lies die Texte und die Anzeigen. Welche Anzeige passt zu welcher Person?',
        questions: [
          {
            id: 'b1l3',
            type: 'matching',
            instructions: 'Ordne jeder Person die passende Anzeige zu.',
            items: [
              { id: 'p1', text: 'Markus (45) hat Rückenprobleme und sucht einen sanften Sport zur Stärkung der Muskulatur.' },
              { id: 'p2', text: 'Anja (28) möchte ihre Ausdauer verbessern und gleichzeitig in der Natur sein.' },
              { id: 'p3', text: 'Tim (16) will einen Mannschaftssport machen, hat aber nur dienstags und donnerstags Zeit.' },
              { id: 'p4', text: 'Helga (62) sucht eine Aktivität in der Gruppe, die ihr Gleichgewicht und ihre Beweglichkeit verbessert.' },
              { id: 'p5', text: 'Sofia (35) möchte abnehmen und gleichzeitig Stress abbauen, am liebsten am Abend nach der Arbeit.' },
            ],
            targets: [
              { id: 'a', text: 'Lauftreff Wald & Wiesen — Wir treffen uns dreimal pro Woche im Stadtpark zum gemeinsamen Joggen. Alle Niveaus willkommen!' },
              { id: 'b', text: 'Tai-Chi für Senioren — Sanfte Bewegungsübungen in der Gruppe, ideal für Gleichgewicht und Mobilität. Donnerstags 10:00 Uhr.' },
              { id: 'c', text: 'Rückenschule Plus — Spezielles Trainingsprogramm zur Stärkung der Rückenmuskulatur. Kleine Gruppen mit Physiotherapeut. Mittwochs 18 Uhr.' },
              { id: 'd', text: 'Krafttraining im Studio Power — Modernste Geräte, individuelle Pläne mit Trainer. 7 Tage/Woche von 6 bis 23 Uhr geöffnet.' },
              { id: 'e', text: 'Volleyball-Verein Blau-Weiß — Jugendmannschaft sucht neue Spieler! Training Dienstag und Donnerstag von 17 bis 19 Uhr.' },
              { id: 'f', text: 'Power-Yoga am Abend — Dynamisches Yoga zur Fettverbrennung und Entspannung. Mo-Fr von 19 bis 20:30 Uhr.' },
            ],
            correct: { p1: 'c', p2: 'a', p3: 'e', p4: 'b', p5: 'f' },
            pointsPerItem: 1,
          },
        ],
      },

      /* ─────────── TEIL 4 ─────────── */
      {
        id: 'teil-4',
        title: 'Teil 4',
        instructions:
          'Du liest fünf Meinungen zum Thema „Smartphones in der Schule“. Sind die Personen dafür (Ja) oder dagegen (Nein)?',
        context: {
          type: 'multi-text',
          content: [
            {
              label: 'Forum-Diskussion',
              text:
                `Markus, 47, Lehrer:
„Ich finde Handys in der Schule problematisch. Die Schüler sind ständig abgelenkt und können sich nicht auf den Unterricht konzentrieren. Bei uns sind sie verboten — und das ist gut so.“

Anna, 16, Schülerin:
„Mein Handy hilft mir beim Lernen! Ich kann schnell etwas nachschlagen, eine Übersetzung suchen oder ein Lernvideo anschauen. Ohne Handy wäre die Schule schwieriger für mich.“

Frau Berger, 52, Mutter:
„Ich habe meiner Tochter ein Handy gegeben, damit sie mich erreichen kann, wenn etwas passiert. Aber ich bin der Meinung, dass es im Unterricht nichts zu suchen hat. Es lenkt nur ab.“

Jonas, 19, Student:
„In meiner Schulzeit habe ich oft mit dem Handy gelernt. Es gibt so viele tolle Apps, die beim Lernen helfen. Schulen sollten Smartphones erlauben und ihren sinnvollen Gebrauch lehren.“

Frau Krüger, 38, Schulleiterin:
„Wir haben das Handyverbot bei uns aufgehoben und neue Regeln eingeführt: Im Unterricht nur mit Erlaubnis. Es funktioniert sehr gut, und die Schüler lernen Verantwortung.“`,
            },
          ],
        },
        questions: [
          { id: 'b1l4-1', type: 'multiple-choice', prompt: 'Markus (Lehrer)', options: [{ id: 'a', text: 'Ja, dafür' }, { id: 'b', text: 'Nein, dagegen' }], correct: 'b', points: 1 },
          { id: 'b1l4-2', type: 'multiple-choice', prompt: 'Anna (Schülerin)', options: [{ id: 'a', text: 'Ja, dafür' }, { id: 'b', text: 'Nein, dagegen' }], correct: 'a', points: 1 },
          { id: 'b1l4-3', type: 'multiple-choice', prompt: 'Frau Berger (Mutter)', options: [{ id: 'a', text: 'Ja, dafür' }, { id: 'b', text: 'Nein, dagegen' }], correct: 'b', points: 1 },
          { id: 'b1l4-4', type: 'multiple-choice', prompt: 'Jonas (Student)', options: [{ id: 'a', text: 'Ja, dafür' }, { id: 'b', text: 'Nein, dagegen' }], correct: 'a', points: 1 },
          { id: 'b1l4-5', type: 'multiple-choice', prompt: 'Frau Krüger (Schulleiterin)', options: [{ id: 'a', text: 'Ja, dafür' }, { id: 'b', text: 'Nein, dagegen' }], correct: 'a', points: 1 },
        ],
      },

      /* ─────────── TEIL 5 ─────────── */
      {
        id: 'teil-5',
        title: 'Teil 5',
        instructions: 'Du liest eine Hausordnung. Wähle bei den Aufgaben 21-25 die richtige Lösung a, b oder c.',
        context: {
          type: 'multi-text',
          content: [
            {
              label: 'Hausordnung — Studentenwohnheim Sonnenhof',
              text:
                `1. Ruhezeiten
Von 22:00 bis 7:00 Uhr und sonntags ist Ruhe einzuhalten. In dieser Zeit sind laute Musik, Partys und Lärm verboten.

2. Müll und Sauberkeit
Jeder Bewohner ist für die Sauberkeit seines Zimmers selbst verantwortlich. Die Gemeinschaftsräume (Küche, Bad) müssen nach jeder Benutzung sauber hinterlassen werden. Müll wird zweimal pro Woche (Montag und Donnerstag) abgeholt.

3. Besucher
Besuch ist erlaubt, muss aber an der Rezeption angemeldet werden. Besucher dürfen maximal eine Nacht bleiben. Längere Aufenthalte müssen mindestens 3 Tage im Voraus mit der Verwaltung besprochen werden.

4. Haustiere
Im Wohnheim sind keine Haustiere erlaubt. Ausnahmen gibt es nur für Blindenhunde (mit ärztlichem Attest).

5. Fahrräder
Fahrräder gehören in den Fahrradkeller. Im Hof oder im Treppenhaus dürfen keine Räder abgestellt werden.

Bei Verstößen gegen die Hausordnung erfolgt zunächst eine schriftliche Verwarnung. Nach drei Verwarnungen kann die Verwaltung den Mietvertrag kündigen.`,
            },
          ],
        },
        questions: [
          {
            id: 'b1l5-1',
            type: 'multiple-choice',
            prompt: 'Wann gilt die Ruhezeit?',
            options: [
              { id: 'a', text: 'Nur nachts ab 22 Uhr.' },
              { id: 'b', text: 'Nachts ab 22 Uhr und den ganzen Sonntag.' },
              { id: 'c', text: 'Nur sonntags.' },
            ],
            correct: 'b',
            points: 1,
          },
          {
            id: 'b1l5-2',
            type: 'multiple-choice',
            prompt: 'Wer ist für die Sauberkeit der Küche verantwortlich?',
            options: [
              { id: 'a', text: 'Die Putzfrau des Wohnheims.' },
              { id: 'b', text: 'Die Bewohner nach jeder Benutzung.' },
              { id: 'c', text: 'Niemand, die Küche wird selten benutzt.' },
            ],
            correct: 'b',
            points: 1,
          },
          {
            id: 'b1l5-3',
            type: 'multiple-choice',
            prompt: 'Was muss man tun, wenn ein Freund mehrere Tage übernachten möchte?',
            options: [
              { id: 'a', text: 'Nichts, das ist immer erlaubt.' },
              { id: 'b', text: 'Mindestens 3 Tage vorher mit der Verwaltung sprechen.' },
              { id: 'c', text: 'Eine zusätzliche Miete bezahlen.' },
            ],
            correct: 'b',
            points: 1,
          },
          {
            id: 'b1l5-4',
            type: 'multiple-choice',
            prompt: 'Welche Tiere sind im Wohnheim erlaubt?',
            options: [
              { id: 'a', text: 'Kleine Katzen und Hunde.' },
              { id: 'b', text: 'Blindenhunde mit ärztlichem Attest.' },
              { id: 'c', text: 'Alle Haustiere.' },
            ],
            correct: 'b',
            points: 1,
          },
          {
            id: 'b1l5-5',
            type: 'multiple-choice',
            prompt: 'Was passiert nach drei Verwarnungen?',
            options: [
              { id: 'a', text: 'Der Mieter bekommt eine Geldstrafe.' },
              { id: 'b', text: 'Der Mietvertrag kann gekündigt werden.' },
              { id: 'c', text: 'Es passiert nichts.' },
            ],
            correct: 'b',
            points: 1,
          },
        ],
      },
    ],
  },
]
