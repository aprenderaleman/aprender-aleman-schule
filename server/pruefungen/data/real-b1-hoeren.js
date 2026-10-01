/**
 * Deutsch B1 — Hören · Prüfung (Pool «real»)
 *
 * Gleiche Struktur wie der Modellsatz (kompakte Version, 20 Items, 4 Teile):
 *   Teil 1: 5 kurze Texte, MC a/b/c, 1x hören (Audio pro Aufgabe)
 *   Teil 2: eine Führung, 5 MC a/b/c, 1x hören
 *   Teil 3: informelles Gespräch, 5 R/F, 2x hören
 *   Teil 4: Diskussion zwischen 2 Personen, 5 Zuordnungen (Person 1 / Person 2 / beide), 2x hören
 *
 * Kein audioUrl: Der Server erzeugt das Audio aus dem Transcript.
 */

export const realB1HoerenExams = [
  {
    id: 'real-b1-hoeren-1',
    provider: 'goethe',
    level: 'B1',
    module: 'hoeren',
    pool: 'real',
    title: 'Deutsch B1 — Hören · Prüfung',
    description: 'B1-Hörverstehen: Prüfung mit allen 4 Teilen.',
    durationMinutes: 35,
    maxScore: 20,
    passScore: 12,
    parts: [
      /* ─────────── TEIL 1 ─────────── */
      {
        id: 'teil-1',
        title: 'Teil 1',
        instructions: 'Du hörst fünf kurze Texte. Du hörst jeden Text einmal. Wähle die richtige Lösung a, b oder c.',
        questions: [
          {
            id: 'rb1h1-1',
            type: 'multiple-choice',
            audio: {
              allowedPlays: 1,
              label: 'Aufgabe 1 — Anrufbeantworter',
              transcript:
                '„Guten Tag, Herr Brandt, hier ist die Fahrradwerkstatt am Marktplatz. Ihr Fahrrad ist fertig. Abholen können Sie es leider nicht mehr heute, sondern erst morgen ab 10 Uhr, weil wir heute Nachmittag geschlossen haben. Auf Wiederhören!“',
            },
            prompt: 'Wann kann Herr Brandt sein Fahrrad abholen?',
            options: [
              { id: 'a', text: 'Heute Nachmittag.' },
              { id: 'b', text: 'Morgen früh um 8 Uhr.' },
              { id: 'c', text: 'Morgen ab 10 Uhr.' },
            ],
            correct: 'c',
            points: 1,
          },
          {
            id: 'rb1h1-2',
            type: 'multiple-choice',
            audio: {
              allowedPlays: 1,
              label: 'Aufgabe 2 — Veranstaltungstipp im Radio',
              transcript:
                '„Und hier noch ein Tipp für das Wochenende. Am Samstag findet im Stadtpark wieder der große Flohmarkt statt. Los geht es um 9 Uhr. Wer selbst etwas verkaufen möchte, muss sich bis Donnerstag im Internet anmelden. Ein Stand kostet 12 Euro.“',
            },
            prompt: 'Was müssen Personen tun, die auf dem Flohmarkt etwas verkaufen möchten?',
            options: [
              { id: 'a', text: 'Sich bis Donnerstag online anmelden.' },
              { id: 'b', text: 'Sich am Samstag direkt im Stadtpark anmelden.' },
              { id: 'c', text: 'Bis Donnerstag 12 Euro im Rathaus bezahlen.' },
            ],
            correct: 'a',
            points: 1,
          },
          {
            id: 'rb1h1-3',
            type: 'multiple-choice',
            audio: {
              allowedPlays: 1,
              label: 'Aufgabe 3 — Durchsage im Schwimmbad',
              transcript:
                '„Liebe Badegäste, wegen eines Gewitters müssen wir das Außenbecken sofort schließen. Bitte verlassen Sie dort das Wasser und auch die Liegewiese. Das Hallenbad und die Sauna bleiben wie gewohnt bis 21 Uhr geöffnet. Vielen Dank für Ihr Verständnis!“',
            },
            prompt: 'Was sollen die Badegäste tun?',
            options: [
              { id: 'a', text: 'Das ganze Schwimmbad sofort verlassen.' },
              { id: 'b', text: 'Aus dem Außenbecken kommen.' },
              { id: 'c', text: 'Bis 21 Uhr in der Sauna warten.' },
            ],
            correct: 'b',
            points: 1,
          },
          {
            id: 'rb1h1-4',
            type: 'multiple-choice',
            audio: {
              allowedPlays: 1,
              label: 'Aufgabe 4 — Durchsage im Fernbus',
              transcript:
                '„Liebe Fahrgäste, wegen einer Baustelle auf der Autobahn erreichen wir München heute nicht wie geplant um 17 Uhr, sondern voraussichtlich erst gegen 17 Uhr 40. In etwa zehn Minuten machen wir an der Raststätte eine Pause von einer Viertelstunde.“',
            },
            prompt: 'Was erfahren die Fahrgäste?',
            options: [
              { id: 'a', text: 'Der Bus kommt später in München an.' },
              { id: 'b', text: 'Der Bus fährt heute nicht bis München.' },
              { id: 'c', text: 'Die Pause fällt wegen der Baustelle aus.' },
            ],
            correct: 'a',
            points: 1,
          },
          {
            id: 'rb1h1-5',
            type: 'multiple-choice',
            audio: {
              allowedPlays: 1,
              label: 'Aufgabe 5 — Sprachnachricht',
              transcript:
                '„Hallo Miriam, hier ist Jonas. Am Samstag muss ich länger arbeiten und schaffe es nicht bis sieben zu dir. Ich komme direkt zum Restaurant. Ruf dort bitte an und reservier den Tisch erst für acht Uhr. Das Geschenk für Paula habe ich schon gekauft.“',
            },
            prompt: 'Worum bittet Jonas seine Freundin Miriam?',
            options: [
              { id: 'a', text: 'Sie soll das Geschenk für Paula kaufen.' },
              { id: 'b', text: 'Sie soll ihn um sieben Uhr von der Arbeit abholen.' },
              { id: 'c', text: 'Sie soll die Reservierung im Restaurant ändern.' },
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
        instructions: 'Du hörst eine Führung durch eine Schokoladenmanufaktur. Du hörst den Text einmal. Wähle bei den Aufgaben 6-10 die richtige Lösung a, b oder c.',
        context: {
          type: 'audio',
          allowedPlays: 1,
          label: 'Führung durch eine Schokoladenmanufaktur in Erfurt',
          transcript:
            `Liebe Besucherinnen und Besucher, herzlich willkommen in der Schokoladenmanufaktur Tannwald hier in Erfurt! Mein Name ist Katrin, und ich zeige Ihnen heute unseren Betrieb.

Unsere Manufaktur ist ein Familienbetrieb. Gegründet wurde sie im Jahr neunzehnhundertzweiundfünfzig von Otto Tannwald, damals noch als kleine Bäckerei. Schokolade stellen wir erst seit neunzehnhundertachtundsiebzig her. Heute leitet seine Enkelin die Firma, und bei uns arbeiten ungefähr vierzig Personen.

Zuerst gehen wir in die Produktionshalle. Dort sehen Sie, wie aus Kakaobohnen Schokolade wird. Die Bohnen werden bei uns geröstet, gemahlen und dann drei Tage lang gerührt — so wird die Schokolade besonders fein. Bitte beachten Sie, dass Sie in der Halle nicht fotografieren dürfen. Außerdem müssen alle aus hygienischen Gründen eine Haube und einen Kittel tragen. Beides bekommen Sie gleich am Eingang von mir.

Danach kommt der Teil, auf den sich die meisten freuen. In unserer Werkstatt gießt jeder seine eigene Tafel Schokolade und verziert sie mit Nüssen oder getrockneten Früchten. Die Tafel muss ungefähr eine halbe Stunde kühlen. In dieser Zeit können Sie in unserem Café verschiedene Sorten kostenlos probieren.

Zum Schluss noch ein Hinweis. In unserem Laden erhalten Sie heute mit Ihrer Eintrittskarte zehn Prozent Rabatt auf alle Produkte. Der Laden schließt allerdings schon um 17 Uhr, nicht wie das Café um 18 Uhr.

Die Führung dauert insgesamt etwa anderthalb Stunden. Wenn Sie etwas wissen möchten, fragen Sie mich einfach. Und jetzt folgen Sie mir bitte!`,
        },
        questions: [
          { id: 'rb1h2-1', type: 'multiple-choice', prompt: 'Seit wann wird in der Manufaktur Schokolade hergestellt?', options: [{ id: 'a', text: 'Seit 1952' }, { id: 'b', text: 'Seit 1978' }, { id: 'c', text: 'Seit 1987' }], correct: 'b', points: 1 },
          { id: 'rb1h2-2', type: 'multiple-choice', prompt: 'Was müssen die Besucher in der Produktionshalle tun?', options: [{ id: 'a', text: 'Eine Haube und einen Kittel tragen' }, { id: 'b', text: 'Eigene Schutzkleidung mitbringen' }, { id: 'c', text: 'Ihre Kamera am Eingang abgeben' }], correct: 'a', points: 1 },
          { id: 'rb1h2-3', type: 'multiple-choice', prompt: 'Was machen die Besucher in der Werkstatt?', options: [{ id: 'a', text: 'Sie rösten Kakaobohnen.' }, { id: 'b', text: 'Sie probieren verschiedene Sorten.' }, { id: 'c', text: 'Sie stellen ihre eigene Tafel Schokolade her.' }], correct: 'c', points: 1 },
          { id: 'rb1h2-4', type: 'multiple-choice', prompt: 'Was bekommen die Besucher heute im Laden?', options: [{ id: 'a', text: 'Eine Tafel Schokolade als Geschenk' }, { id: 'b', text: 'Einen Rabatt von zehn Prozent' }, { id: 'c', text: 'Eine neue Eintrittskarte' }], correct: 'b', points: 1 },
          { id: 'rb1h2-5', type: 'multiple-choice', prompt: 'Wann schließt der Laden?', options: [{ id: 'a', text: 'Um 17 Uhr' }, { id: 'b', text: 'Um 18 Uhr' }, { id: 'c', text: 'Um 19 Uhr' }], correct: 'a', points: 1 },
        ],
      },

      /* ─────────── TEIL 3 ─────────── */
      {
        id: 'teil-3',
        title: 'Teil 3',
        instructions: 'Du hörst ein Gespräch zwischen zwei Freunden. Du hörst das Gespräch zweimal. Sind die Aussagen 11-15 richtig oder falsch?',
        context: {
          type: 'audio',
          allowedPlays: 2,
          label: 'Gespräch zwischen Nele und Jakob über die neue Wohnung',
          transcript:
            `Nele: Hallo Jakob! Ich habe gehört, du bist umgezogen. Wie ist die neue Wohnung?

Jakob: Hallo Nele! Ja, seit drei Wochen wohne ich jetzt in Köln. Die Wohnung ist toll: zwei Zimmer, ein kleiner Balkon und alles ganz hell.

Nele: War es schwer, etwas zu finden?

Jakob: Ziemlich. Ich habe fast vier Monate gesucht. Im Internet hatte ich kein Glück. Am Ende hat mir eine Kollegin geholfen: Ihre Nachbarin ist ausgezogen, und so habe ich die Wohnung bekommen.

Nele: Und wie ist die Miete? Köln ist ja nicht gerade billig.

Jakob: Das stimmt. Ich zahle jetzt 780 Euro, das ist mehr als früher. Dafür brauche ich kein Auto mehr. Zur Arbeit fahre ich jetzt mit dem Fahrrad.

Nele: Praktisch! Hast du den Umzug allein gemacht?

Jakob: Nein, zum Glück nicht. Eigentlich wollte ich eine Umzugsfirma bestellen, aber die war mir zu teuer. Mein Bruder und zwei Freunde haben mir geholfen, und wir haben einen Transporter gemietet.

Nele: Und, ist schon alles eingerichtet?

Jakob: Noch nicht ganz. Die Küche ist fertig, aber im Wohnzimmer fehlen noch ein Sofa und ein paar Lampen.

Nele: Dann machst du deine Einweihungsparty wohl später?

Jakob: Genau, ich feiere erst im Mai, wenn es wärmer ist. Du bist natürlich eingeladen!

Nele: Super, ich komme gern!`,
        },
        questions: [
          { id: 'rb1h3-1', type: 'true-false', statement: 'Jakob wohnt seit drei Wochen in Köln.', correct: true, points: 1 },
          { id: 'rb1h3-2', type: 'true-false', statement: 'Jakob hat seine Wohnung über eine Anzeige im Internet gefunden.', correct: false, points: 1 },
          { id: 'rb1h3-3', type: 'true-false', statement: 'Jakob zahlt jetzt weniger Miete als früher.', correct: false, points: 1 },
          { id: 'rb1h3-4', type: 'true-false', statement: 'Beim Umzug haben Jakob sein Bruder und Freunde geholfen.', correct: true, points: 1 },
          { id: 'rb1h3-5', type: 'true-false', statement: 'Jakob will seine Einweihungsparty im Mai feiern.', correct: true, points: 1 },
        ],
      },

      /* ─────────── TEIL 4 ─────────── */
      {
        id: 'teil-4',
        title: 'Teil 4',
        instructions:
          'Du hörst eine Diskussion zwischen Jana und Felix über das Thema „Einkaufen im Internet“. Wer sagt was? Wähle für jede Aussage Jana (j), Felix (f) oder beide (b).',
        context: {
          type: 'audio',
          allowedPlays: 2,
          label: 'Diskussion: Einkaufen im Internet — pro und contra',
          transcript:
            `Moderator: Heute diskutieren Jana und Felix über das Einkaufen im Internet.

Jana: Ich bestelle fast alles online, sogar Lebensmittel. Das ist einfach bequem. Ich kann abends um zehn auf dem Sofa einkaufen, wenn die Geschäfte längst geschlossen sind.

Felix: Da hast du recht, Jana. Dass man rund um die Uhr bestellen kann, ist wirklich praktisch. Trotzdem gehe ich lieber ins Geschäft. Eine Hose oder Schuhe will ich anprobieren, bevor ich sie kaufe.

Jana: Das brauche ich nicht, Felix. Wenn etwas nicht passt, schicke ich es eben zurück.

Felix: Genau das ist das Problem. Die vielen Pakete sind schlecht für die Umwelt.

Jana: Das sehe ich anders. Wenn jeder mit dem Auto in die Stadt fährt, ist das auch nicht besser. Außerdem kann ich im Internet die Preise ganz schnell vergleichen.

Felix: Dafür werde ich im Geschäft persönlich beraten. Das ist mir sehr wichtig.

Jana: Eine persönliche Beratung ist mir auch wichtig, zum Beispiel bei einem neuen Computer. So etwas Teures würde ich nie online bestellen.

Felix: Siehst du! Dann sind wir uns ja auch in diesem Punkt einig.`,
        },
        questions: [
          {
            id: 'rb1h4-1',
            type: 'multiple-choice',
            prompt: '„Es ist praktisch, dass man im Internet zu jeder Uhrzeit einkaufen kann.“',
            options: [
              { id: 'j', text: 'Jana' },
              { id: 'f', text: 'Felix' },
              { id: 'b', text: 'Beide' },
            ],
            correct: 'b',
            points: 1,
          },
          {
            id: 'rb1h4-2',
            type: 'multiple-choice',
            prompt: '„Kleidung möchte ich vor dem Kauf anprobieren.“',
            options: [
              { id: 'j', text: 'Jana' },
              { id: 'f', text: 'Felix' },
              { id: 'b', text: 'Beide' },
            ],
            correct: 'f',
            points: 1,
          },
          {
            id: 'rb1h4-3',
            type: 'multiple-choice',
            prompt: '„Die vielen Pakete schaden der Umwelt.“',
            options: [
              { id: 'j', text: 'Jana' },
              { id: 'f', text: 'Felix' },
              { id: 'b', text: 'Beide' },
            ],
            correct: 'f',
            points: 1,
          },
          {
            id: 'rb1h4-4',
            type: 'multiple-choice',
            prompt: '„Im Internet kann man die Preise schnell vergleichen.“',
            options: [
              { id: 'j', text: 'Jana' },
              { id: 'f', text: 'Felix' },
              { id: 'b', text: 'Beide' },
            ],
            correct: 'j',
            points: 1,
          },
          {
            id: 'rb1h4-5',
            type: 'multiple-choice',
            prompt: '„Eine persönliche Beratung ist mir wichtig.“',
            options: [
              { id: 'j', text: 'Jana' },
              { id: 'f', text: 'Felix' },
              { id: 'b', text: 'Beide' },
            ],
            correct: 'b',
            points: 1,
          },
        ],
      },
    ],
  },
]
