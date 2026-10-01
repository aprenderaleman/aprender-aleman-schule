/**
 * Deutsch C1 — Lesen · Prüfung (Pool «real»)
 *
 * Gleiche Struktur wie der Modellsatz (goethe-c1-lesen.js):
 * 3 Teile, 15 Items, 50 min, bestanden ab 9 Punkten.
 * Inhalte vollständig neu — im Übungsmodus nicht sichtbar.
 */

export const realC1LesenExams = [
  {
    id: 'real-c1-lesen-1',
    provider: 'goethe',
    level: 'C1',
    module: 'lesen',
    pool: 'real',
    title: 'Deutsch C1 — Lesen · Prüfung',
    description: 'Anspruchsvolle Lesetexte mit Auswahlaufgaben, Richtig/Falsch und der Einordnung von Meinungen.',
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
              label: 'Essay: Die verlorene Nacht',
              text:
                `Wer heute in einer europäischen Großstadt zum Himmel blickt, erkennt statt einiger tausend Sterne bestenfalls ein paar Dutzend. Straßenlaternen, Leuchtreklamen und angestrahlte Fassaden haben die Nacht so gründlich aufgehellt, dass echte Dunkelheit zur Ausnahme geworden ist. Die wenigsten empfinden das als Verlust: Licht steht für Sicherheit und Fortschritt, und was man nie gesehen hat, vermisst man nicht.

Dabei ist das Dauerlicht alles andere als folgenlos. Unzählige Insekten umkreisen nachts die Lampen, bis sie erschöpft verenden; Zugvögel verlieren die Orientierung. Auch der Mensch bleibt nicht verschont: Künstliches Licht am Abend hemmt die Ausschüttung des Hormons Melatonin und bringt so den Schlaf-wach-Rhythmus durcheinander — selbst dann, wenn wir die Helligkeit gar nicht als störend wahrnehmen.

Doch es geht um mehr als um Ökologie und Medizin. Der Sternenhimmel hat den Menschen über Jahrtausende Orientierung gegeben und Kalender, Mythen und Wissenschaft hervorgebracht. Mit dem Blick in die Tiefe des Alls schwindet eine Erfahrung, die uns die eigene Kleinheit vor Augen führte — und damit ein Stück Demut.

Inzwischen beginnt ein Umdenken. Manche Gemeinden schalten ihre Laternen nach Mitternacht ab oder dimmen sie; neue Leuchten strahlen nur noch nach unten. Eines wird dabei deutlich: Die Dunkelheit zu bewahren ist keine romantische Schwärmerei, sondern eine Frage der Verantwortung gegenüber der Natur — und gegenüber uns selbst.`,
            },
          ],
        },
        questions: [
          {
            id: 'rc1l1-1',
            type: 'multiple-choice',
            prompt: 'Warum empfinden die meisten Menschen den aufgehellten Nachthimmel laut Text nicht als Verlust?',
            options: [
              { id: 'a', text: 'Weil in den Städten nach wie vor genügend Sterne zu sehen sind.' },
              { id: 'b', text: 'Weil sie sich nachts ohnehin kaum im Freien aufhalten.' },
              { id: 'c', text: 'Weil sie Licht positiv bewerten und echte Dunkelheit gar nicht kennen.' },
            ],
            correct: 'c',
            points: 1,
          },
          {
            id: 'rc1l1-2',
            type: 'multiple-choice',
            prompt: 'Wie wirkt sich künstliches Licht am Abend laut Text auf den Menschen aus?',
            options: [
              { id: 'a', text: 'Es stört den Schlaf-wach-Rhythmus, auch wenn man es nicht bemerkt.' },
              { id: 'b', text: 'Es schadet nur denjenigen, die sich von der Helligkeit gestört fühlen.' },
              { id: 'c', text: 'Es regt die Ausschüttung von Melatonin an.' },
            ],
            correct: 'a',
            points: 1,
          },
          {
            id: 'rc1l1-3',
            type: 'multiple-choice',
            prompt: 'Welchen Verlust beklagt der Autor über Ökologie und Medizin hinaus?',
            options: [
              { id: 'a', text: 'Dass die Wissenschaft keine neuen Erkenntnisse über das All mehr gewinnt.' },
              { id: 'b', text: 'Dass eine Erfahrung verschwindet, die den Menschen Bescheidenheit lehrte.' },
              { id: 'c', text: 'Dass alte Kalender und Mythen in Vergessenheit geraten.' },
            ],
            correct: 'b',
            points: 1,
          },
          {
            id: 'rc1l1-4',
            type: 'multiple-choice',
            prompt: 'Welche Gegenmaßnahme wird im Text genannt?',
            options: [
              { id: 'a', text: 'Leuchtreklamen werden gesetzlich verboten.' },
              { id: 'b', text: 'Beleuchtete Fassaden werden besteuert.' },
              { id: 'c', text: 'Straßenlaternen werden nachts zeitweise abgeschaltet oder gedimmt.' },
            ],
            correct: 'c',
            points: 1,
          },
          {
            id: 'rc1l1-5',
            type: 'multiple-choice',
            prompt: 'Wie bewertet der Autor am Schluss den Schutz der Dunkelheit?',
            options: [
              { id: 'a', text: 'Als Ausdruck von Verantwortung gegenüber Natur und Mensch.' },
              { id: 'b', text: 'Als romantische Schwärmerei einiger Sternfreunde.' },
              { id: 'c', text: 'Als Aufgabe, die allein die Gemeinden lösen können.' },
            ],
            correct: 'a',
            points: 1,
          },
        ],
      },

      {
        id: 'teil-2',
        title: 'Teil 2 — Aussagen zum Text (Richtig/Falsch)',
        instructions: 'Lies den Text und entscheide, ob die Aussagen richtig oder falsch sind.',
        context: {
          type: 'multi-text',
          content: [
            {
              label: 'Artikel: Zwei Sprachen von klein auf',
              text:
                `Noch vor wenigen Jahrzehnten rieten Kinderärzte und Lehrkräfte Eltern häufig davon ab, mit ihren Kindern zu Hause eine andere Sprache als die der Umgebung zu sprechen. Man befürchtete, zwei Sprachen würden das Kind verwirren und seine Entwicklung verzögern. Diese Sorge gilt in der Sprachforschung inzwischen als überholt.

Zwar beginnen manche mehrsprachig aufwachsenden Kinder etwas später zu sprechen, und ihr Wortschatz ist in jeder einzelnen Sprache anfangs oft kleiner als der von einsprachigen Gleichaltrigen. Rechnet man jedoch beide Sprachen zusammen, verfügen sie über mindestens ebenso viele Wörter. Auch das Mischen der Sprachen innerhalb eines Satzes, das viele Eltern beunruhigt, ist kein Zeichen von Verwirrung, sondern eine normale Phase — und häufig sogar ein Hinweis auf sprachliche Kreativität.

Vor überzogenen Erwartungen warnen Fachleute allerdings ebenfalls. Die weit verbreitete Behauptung, zweisprachige Kinder seien grundsätzlich intelligenter oder konzentrierter, ließ sich in neueren, sorgfältig angelegten Untersuchungen nicht eindeutig bestätigen.

Für Familien bedeutet das vor allem eines: Eltern sollten mit ihren Kindern in der Sprache sprechen, in der sie sich selbst am wohlsten fühlen. Wer aus falsch verstandener Rücksicht auf die Schule eine Sprache verwendet, die er nur unsicher beherrscht, gibt weder ein gutes sprachliches Vorbild ab noch die emotionale Nähe weiter, die Kinder für das Lernen brauchen.`,
            },
          ],
        },
        questions: [
          { id: 'rc1l2-1', type: 'true-false', statement: 'Die Sprachforschung rät Eltern heute davon ab, zu Hause eine andere Sprache als die der Umgebung zu sprechen.', correct: false, points: 1 },
          { id: 'rc1l2-2', type: 'true-false', statement: 'In einer einzelnen Sprache kennen mehrsprachige Kinder zu Beginn oft weniger Wörter als einsprachige Kinder.', correct: true, points: 1 },
          { id: 'rc1l2-3', type: 'true-false', statement: 'Dass Kinder in einem Satz zwei Sprachen mischen, ist laut Text eine gewöhnliche Entwicklungsphase.', correct: true, points: 1 },
          { id: 'rc1l2-4', type: 'true-false', statement: 'Neuere Untersuchungen haben klar bewiesen, dass zweisprachige Kinder intelligenter sind.', correct: false, points: 1 },
          { id: 'rc1l2-5', type: 'true-false', statement: 'Der Text empfiehlt Eltern, bei der Sprache zu bleiben, die ihnen selbst am vertrautesten ist.', correct: true, points: 1 },
        ],
      },

      {
        id: 'teil-3',
        title: 'Teil 3 — Meinungen aus einer Diskussion',
        instructions: 'Du liest fünf Aussagen aus einer Podiumsdiskussion zum Thema „Ein soziales Pflichtjahr für junge Erwachsene“. Wer ist dafür (Ja), wer dagegen (Nein)?',
        context: {
          type: 'multi-text',
          content: [
            {
              label: 'Podiumsdiskussion: Ein soziales Pflichtjahr für alle?',
              text:
                `Herr Brandstetter, Inhaber eines Handwerksbetriebs:
„Uns fehlen schon heute überall Auszubildende. Wer die jungen Leute ein weiteres Jahr vom Arbeitsmarkt fernhält, verschärft den Fachkräftemangel — das können wir uns schlicht nicht leisten.“

Dr. Yıldız, Soziologin:
„Unsere Gesellschaft zerfällt in Gruppen, die einander kaum noch begegnen. Ein gemeinsames Jahr im Dienst anderer brächte Menschen zusammen, die sonst nie ein Wort wechseln würden. Diese Chance sollten wir nutzen.“

Frau Oltmanns, Leiterin eines Pflegeheims:
„Zusätzliche Hände könnten wir gut gebrauchen. Aber wer nur widerwillig erscheint, ist für unsere Bewohner keine Hilfe, sondern eine Belastung. Auf Zwang lässt sich Zuwendung nicht gründen.“

Jonas Reuter, Student:
„Dass ausgerechnet diejenigen über ein Jahr unserer Lebenszeit verfügen wollen, die selbst nie einen solchen Dienst geleistet haben, empfinde ich als Zumutung.“

Frau Lindqvist, ehemalige Rettungssanitäterin:
„Mein Jahr im Rettungsdienst hat mich mehr gelehrt als manches Semester. Hätte man mir damals die Wahl gelassen, wäre ich allerdings nie hingegangen. Gerade deshalb halte ich eine Verpflichtung für richtig.“`,
            },
          ],
        },
        questions: [
          { id: 'rc1l3-1', type: 'multiple-choice', prompt: 'Herr Brandstetter', options: [{ id: 'a', text: 'Dafür (Ja)' }, { id: 'b', text: 'Dagegen (Nein)' }], correct: 'b', points: 1 },
          { id: 'rc1l3-2', type: 'multiple-choice', prompt: 'Dr. Yıldız', options: [{ id: 'a', text: 'Dafür (Ja)' }, { id: 'b', text: 'Dagegen (Nein)' }], correct: 'a', points: 1 },
          { id: 'rc1l3-3', type: 'multiple-choice', prompt: 'Frau Oltmanns', options: [{ id: 'a', text: 'Dafür (Ja)' }, { id: 'b', text: 'Dagegen (Nein)' }], correct: 'b', points: 1 },
          { id: 'rc1l3-4', type: 'multiple-choice', prompt: 'Jonas Reuter', options: [{ id: 'a', text: 'Dafür (Ja)' }, { id: 'b', text: 'Dagegen (Nein)' }], correct: 'b', points: 1 },
          { id: 'rc1l3-5', type: 'multiple-choice', prompt: 'Frau Lindqvist', options: [{ id: 'a', text: 'Dafür (Ja)' }, { id: 'b', text: 'Dagegen (Nein)' }], correct: 'a', points: 1 },
        ],
      },
    ],
  },
]
