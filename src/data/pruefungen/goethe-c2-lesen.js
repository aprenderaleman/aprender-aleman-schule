/**
 * Goethe-Zertifikat C2 — Lesen (kompakte Version)
 *
 * Offiziell: 4 Teile, 80 min, pass = 60%.
 * Wir verwenden eine kompakte Version mit 2 Teilen, 10 Items, pass bei 6.
 */

export const goetheC2LesenExams = [
  {
    id: 'goethe-c2-lesen-modellsatz-1',
    provider: 'goethe',
    level: 'C2',
    module: 'lesen',
    title: 'Goethe C2 — Lesen · Modellsatz 1',
    description: 'Anspruchsvolles Leseverstehen mit literarischem und essayistischem Text.',
    durationMinutes: 50,
    maxScore: 10,
    passScore: 6,
    parts: [
      {
        id: 'teil-1',
        title: 'Teil 1 — Essay',
        instructions: 'Lies den Essay aufmerksam und wähle die richtige Lösung.',
        context: {
          type: 'multi-text',
          content: [
            {
              label: 'Essay: Die Tyrannei der Optimierung',
              text:
                `Es gibt kaum einen Lebensbereich, der sich heute der Logik der Optimierung entziehen könnte. Schlaf, Ernährung, Sport, Beziehungen — alles wird gemessen, verglichen, perfektioniert. Selbsthilfe-Apps, Smartwatches und Social-Media-Algorithmen versprechen uns, dass wir mit den richtigen Daten und Disziplin ein besseres Selbst werden können. Was zunächst wie eine emanzipatorische Verheißung klingt, entpuppt sich bei näherem Hinsehen als eine subtile Form der Selbstüberforderung.

Die Soziologin Eva Illouz hat darauf hingewiesen, dass die Sprache der Optimierung tief in unsere intime Sphäre eingedrungen ist. Wir sprechen davon, „in eine Beziehung zu investieren“, die „Rentabilität“ einer Freundschaft zu prüfen oder unsere Kinder „bestmöglich zu fördern“. Das ökonomische Vokabular hat das Vokabular des Glücks ersetzt — und mit ihm einen Maßstab installiert, an dem wir unweigerlich scheitern müssen, weil es kein „Genug“ mehr gibt.

Besonders perfide wirkt diese Tyrannei dort, wo sie sich als persönliche Wahl tarnt. Wer sich gegen Selbstoptimierung entscheidet, wird nicht etwa als Rebell wahrgenommen, sondern als jemand, der „aufgegeben“ hat. Der gesellschaftliche Druck ist so internalisiert, dass die meisten Menschen ihn gar nicht mehr als äußere Zumutung erkennen. Sie empfinden ihre Erschöpfung als individuelles Versagen.

Vielleicht braucht es eine neue Form der Verweigerung — nicht aus Bequemlichkeit, sondern als bewusste politische Geste. Eine Pause, die nicht als „Recovery“ gerechtfertigt wird. Ein Buch, das man nicht zum Lernen liest. Ein Spaziergang ohne Schritte zu zählen. Die Wiederentdeckung des Zwecklosen könnte das radikalste sein, was wir uns heute leisten können.`,
            },
          ],
        },
        questions: [
          {
            id: 'c2l1-1',
            type: 'multiple-choice',
            prompt: 'Wie bewertet die Autorin/der Autor die Logik der Optimierung?',
            options: [
              { id: 'a', text: 'Als befreiend und emanzipatorisch.' },
              { id: 'b', text: 'Als subtile Form der Selbstüberforderung.' },
              { id: 'c', text: 'Als unvermeidlich und alternativlos.' },
            ],
            correct: 'b',
            points: 1,
          },
          {
            id: 'c2l1-2',
            type: 'multiple-choice',
            prompt: 'Was verbindet sich laut Eva Illouz mit dem Vokabular der Optimierung?',
            options: [
              { id: 'a', text: 'Eine Sprache des Glücks und der Verbundenheit.' },
              { id: 'b', text: 'Ökonomische Begriffe, die das Glücksvokabular ersetzen.' },
              { id: 'c', text: 'Klare Maßstäbe, die uns Orientierung geben.' },
            ],
            correct: 'b',
            points: 1,
          },
          {
            id: 'c2l1-3',
            type: 'multiple-choice',
            prompt: 'Warum wird der Druck zur Optimierung als „perfide“ beschrieben?',
            options: [
              { id: 'a', text: 'Weil er offen autoritär durchgesetzt wird.' },
              { id: 'b', text: 'Weil die Menschen ihre Erschöpfung als persönliches Versagen empfinden.' },
              { id: 'c', text: 'Weil er nur Reiche betrifft.' },
            ],
            correct: 'b',
            points: 1,
          },
          {
            id: 'c2l1-4',
            type: 'multiple-choice',
            prompt: 'Welche Haltung empfiehlt der Text zum Schluss?',
            options: [
              { id: 'a', text: 'Konsequente Selbstoptimierung mit besseren Tools.' },
              { id: 'b', text: 'Eine bewusste Verweigerung als politische Geste.' },
              { id: 'c', text: 'Den Rückzug ins Privatleben.' },
            ],
            correct: 'b',
            points: 1,
          },
          {
            id: 'c2l1-5',
            type: 'multiple-choice',
            prompt: 'Welche Beispiele nennt der Text für „Verweigerung“?',
            options: [
              { id: 'a', text: 'Eine Pause, die nicht als Recovery gerechtfertigt wird, ein Buch ohne Lernzweck, ein Spaziergang ohne Schrittzähler.' },
              { id: 'b', text: 'Berufliche Auszeit, Therapie und Yoga-Retreat.' },
              { id: 'c', text: 'Anti-Soziale-Medien-Kampagnen.' },
            ],
            correct: 'a',
            points: 1,
          },
        ],
      },

      {
        id: 'teil-2',
        title: 'Teil 2 — Sachtext',
        instructions: 'Lies den Text und entscheide, ob die Aussagen richtig oder falsch sind.',
        context: {
          type: 'multi-text',
          content: [
            {
              label: 'Artikel: Demokratie im digitalen Zeitalter',
              text:
                `Die Idee der Demokratie ist eng verbunden mit dem Konzept eines informierten Bürgers, der auf Grundlage zuverlässiger Informationen Entscheidungen treffen kann. Die digitale Revolution hat dieses Fundament jedoch in einer Weise erschüttert, die noch vor wenigen Jahrzehnten kaum vorstellbar war.

Soziale Netzwerke versprachen ursprünglich eine Demokratisierung des Diskurses: Jeder solle die Möglichkeit haben, gehört zu werden. Die Realität sieht jedoch anders aus. Algorithmen bevorzugen Inhalte, die Aufmerksamkeit erzeugen — und das sind häufig polarisierende, emotionale oder schlicht falsche Botschaften. Sachliche, differenzierte Beiträge gehen im Lärm unter.

Hinzu kommt die wachsende Macht weniger Tech-Konzerne, die de facto die Spielregeln des öffentlichen Diskurses bestimmen. Welche Beiträge sichtbar sind, welche zensiert oder gefördert werden — all dies geschieht weitgehend ohne demokratische Kontrolle. Politikwissenschaftler sprechen von einer „algorithmischen Öffentlichkeit“, die sich der traditionellen Pressefreiheit entzieht.

Die Lösungsvorschläge sind so vielfältig wie umstritten. Manche fordern strengere Regulierung der Plattformen, andere setzen auf Medienbildung in den Schulen oder unterstützen den Aufbau alternativer, gemeinnütziger Plattformen. Gemeinsam ist all diesen Ansätzen jedoch die Erkenntnis: Wenn wir die Demokratie bewahren wollen, müssen wir die digitalen Räume aktiv mitgestalten, statt sie privaten Konzernen zu überlassen.`,
            },
          ],
        },
        questions: [
          { id: 'c2l2-1', type: 'true-false', statement: 'Die Demokratie braucht informierte Bürger, die auf zuverlässige Informationen zurückgreifen können.', correct: true, points: 1 },
          { id: 'c2l2-2', type: 'true-false', statement: 'Algorithmen bevorzugen sachliche, differenzierte Inhalte.', correct: false, points: 1 },
          { id: 'c2l2-3', type: 'true-false', statement: 'Die Tech-Konzerne unterliegen weitgehend traditioneller Pressefreiheit.', correct: false, points: 1 },
          { id: 'c2l2-4', type: 'true-false', statement: 'Es gibt nur einen einzigen Lösungsvorschlag für das Problem.', correct: false, points: 1 },
          { id: 'c2l2-5', type: 'true-false', statement: 'Der Text plädiert dafür, digitale Räume aktiv mitzugestalten.', correct: true, points: 1 },
        ],
      },
    ],
  },
]
