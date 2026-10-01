// Übungsheft B2 — Lektion 26: Hören Teil 4: Vortrag
export default {
  lektion: 26,
  titel: 'Übungsheft — Vortrag',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Signalwörter und Gliederung eines Vortrags: Wähle die passende Lösung und achte auf die Funktion jedes Satzes.',
      items: [
        {
          typ: 'luecke',
          text: 'In meinem Vortrag möchte ich auf drei Punkte {1}. {2} beschreibe ich das Problem, danach erkläre ich die Ursachen.',
          bank: ['eingehen', 'Zunächst', 'Abschließend', 'beziehen'],
          loesungen: { 1: 'eingehen', 2: 'Zunächst' },
        },
        {
          typ: 'luecke',
          text: 'Carsharing ist {1} praktisch, {2} aber auch ziemlich teuer.',
          bank: ['einerseits', 'andererseits', 'darüber hinaus'],
          loesungen: { 1: 'einerseits', 2: 'andererseits' },
        },
        {
          typ: 'luecke',
          text: 'Eine aktuelle {1} zeigt, dass immer mehr junge Menschen ehrenamtlich arbeiten. Ein weiterer {2} ist die Frage der Finanzierung.',
          bank: ['Studie', 'Aspekt', 'Fazit', 'Faden'],
          loesungen: { 1: 'Studie', 2: 'Aspekt' },
        },
        {
          typ: 'mc',
          frage: 'Mit welchem Satz leitet eine Sprecherin ihr Fazit ein?',
          optionen: [
            'Zunächst zum Ausmaß des Problems.',
            'Ein Beispiel dafür ist die Reparaturwerkstatt im Jugendzentrum.',
            'Zusammenfassend lässt sich sagen, dass wir schneller handeln müssen.',
          ],
          loesung: 2,
        },
        {
          typ: 'mc',
          frage: '„Eine Studie aus dem letzten Jahr zeigt, dass gute Radwege mehr Menschen aufs Rad bringen.“ Welche Funktion hat dieser Satz im Vortrag?',
          optionen: ['Er leitet einen neuen Punkt ein.', 'Er belegt den vorherigen Punkt.', 'Er fasst den ganzen Vortrag zusammen.'],
          loesung: 1,
        },
        {
          typ: 'mc',
          frage: 'Wer sich die Gliederung notiert, verliert auch in einem langen Vortrag nicht den roten ___.',
          optionen: ['Faden', 'Aspekt', 'Punkt'],
          loesung: 0,
        },
        {
          typ: 'zuordnen',
          links: ['zunächst', 'darüber hinaus', 'zum Beispiel', 'zusammenfassend', 'einerseits … andererseits'],
          rechts: ['erster Punkt', 'weiterer Punkt', 'Beleg', 'Fazit', 'Gegenüberstellung'],
          loesung: {
            zunächst: 'erster Punkt',
            'darüber hinaus': 'weiterer Punkt',
            'zum Beispiel': 'Beleg',
            zusammenfassend: 'Fazit',
            'einerseits … andererseits': 'Gegenüberstellung',
          },
        },
        {
          typ: 'korrektur',
          optionen: ['Außerdem man muss die Kosten beachten.', 'Außerdem muss man die Kosten beachten.'],
          loesung: 1,
          warum: 'Tras un adverbio en posición 1 (*außerdem, zunächst, abschließend*) el verbo conjugado va **en segunda posición**: inversión, no «además uno debe».',
        },
        {
          typ: 'korrektur',
          optionen: ['Ich möchte auf drei Punkte eingehen.', 'Ich möchte in drei Punkte eingehen.'],
          loesung: 0,
          warum: '«Abordar, tratar» un tema es **eingehen auf** + acusativo; *in* es un calco de «entrar en».',
        },
        {
          typ: 'satzbau',
          woerter: ['sich', 'gesund', 'Zusammenfassend', 'sagen', 'ist', 'lässt', 'dass', 'Radfahren'],
          loesung: 'Zusammenfassend lässt sich sagen, dass Radfahren gesund ist.',
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies den Bericht über einen Vortrag und löse die Aufgaben. Achte auf die Gliederung und auf das Fazit der Referentin.',
      textTitel: 'Artikelauszug: Warum wir schlecht schlafen',
      text: 'Warum schlafen so viele Menschen schlecht? Dieser Frage ging die Schlafforscherin Dr. Miriam Hoffmann am Donnerstag in der Volkshochschule nach. Gleich zu Beginn kündigte sie an, auf drei Punkte einzugehen: die Ursachen, die Folgen und einfache Gegenmittel. Zunächst räumte sie mit einem verbreiteten Irrtum auf: Nicht der Kaffee am Nachmittag sei der Hauptgrund für schlaflose Nächte, sondern Stress und unregelmäßige Schlafzeiten. Darüber hinaus spiele das Licht von Bildschirmen eine Rolle. Eine Studie mit 2000 Teilnehmenden zeige, dass Menschen, die abends lange am Handy sind, im Durchschnitt eine halbe Stunde später einschlafen. Die Folgen seien deutlich: Wer dauerhaft zu wenig schläft, wird häufiger krank und macht mehr Fehler bei der Arbeit. Ihr Fazit fiel trotzdem optimistisch aus: Schon kleine Änderungen helfen, etwa feste Schlafenszeiten und eine Stunde ohne Bildschirm vor dem Zubettgehen. Schlaftabletten empfahl sie ausdrücklich nicht. Viele Zuhörerinnen und Zuhörer blieben nach dem Vortrag noch lange, um Fragen zu stellen.',
      items: [
        {
          typ: 'mc',
          frage: 'Was ist laut Dr. Hoffmann der Hauptgrund für schlechten Schlaf?',
          optionen: ['Stress und unregelmäßige Schlafzeiten', 'Kaffee am Nachmittag', 'zu wenig Bewegung am Tag'],
          loesung: 0,
        },
        { typ: 'rf', aussage: 'Laut der Studie schlafen Menschen, die abends lange am Handy sind, später ein.', loesung: true },
        {
          typ: 'mc',
          frage: 'Wie fällt das Fazit der Referentin aus?',
          optionen: [
            'Ohne Schlaftabletten lässt sich das Problem kaum lösen.',
            'Gegen schlechten Schlaf kann man nur wenig tun.',
            'Schon kleine Veränderungen im Alltag können helfen.',
          ],
          loesung: 2,
        },
        { typ: 'rf', aussage: 'Die Referentin ging ausschließlich auf die Ursachen von Schlafproblemen ein.', loesung: false },
      ],
    },
    {
      typ: 'hoeren',
      titel: 'Hören',
      anweisung: 'Du hörst einen kurzen Vortrag. Löse die Aufgaben. Die Aufgaben folgen der Gliederung des Vortrags.',
      audio: {
        transcript: 'Meine Damen und Herren, in meinem Vortrag geht es um Lärm in der Stadt. Ich möchte dabei auf drei Punkte eingehen, nämlich auf die Ursachen, die Folgen für die Gesundheit und mögliche Lösungen. Zunächst zu den Ursachen. Viele denken zuerst an Flugzeuge oder Baustellen. Die wichtigste Lärmquelle ist aber nicht der Flugverkehr, sondern der Straßenverkehr direkt vor unserer Haustür. Außerdem sollten wir über die Folgen sprechen. Eine aktuelle Studie mit viertausend Teilnehmenden zeigt, dass Menschen an lauten Straßen schlechter schlafen und häufiger krank werden. Das Gefährliche daran ist, dass man sich scheinbar an den Lärm gewöhnt, der Körper jedoch weiter mit Stress reagiert. Ein weiterer Aspekt sind die Kosten, denn Wohnungen an ruhigen Straßen sind deutlich teurer. Ruhe wird also zu einer Frage des Geldes. Abschließend zu den Lösungen. Einerseits helfen technische Maßnahmen wie leiserer Asphalt, andererseits ist Tempo dreißig in der Nacht wirksamer und billiger. Zusammenfassend lässt sich sagen, dass Lärm kein Luxusproblem ist, sondern eine Gesundheitsfrage, die die Politik ernster nehmen muss.',
      },
      items: [
        {
          typ: 'mc',
          frage: 'Woran denken laut dem Vortrag viele Menschen zuerst, wenn es um Lärm in der Stadt geht?',
          optionen: ['an den Straßenverkehr vor der eigenen Haustür', 'an Flugzeuge und Baustellen', 'an laute Nachbarn'],
          loesung: 1,
        },
        { typ: 'rf', aussage: 'Laut dem Vortrag reagiert der Körper auch dann mit Stress, wenn man glaubt, sich an den Lärm gewöhnt zu haben.', loesung: true },
        { typ: 'rf', aussage: 'Leiserer Asphalt wird im Vortrag als wirksamer und billiger bezeichnet als Tempo dreißig in der Nacht.', loesung: false },
        {
          typ: 'mc',
          frage: 'Was ist die Kernaussage am Schluss des Vortrags?',
          optionen: [
            'Lärm ist eine Gesundheitsfrage, die die Politik ernster nehmen muss.',
            'Lärm ist vor allem ein Problem von Menschen mit wenig Geld.',
            'An Lärm kann man sich mit der Zeit gewöhnen.',
          ],
          loesung: 0,
        },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'text',
      titel: 'Schreiben',
      anweisung: 'Schreib eine formelle E-Mail mit mindestens 60 Wörtern und geh auf alle drei Punkte ein.',
      aufgabe: 'Du hast an der Volkshochschule einen Vortrag über gesunden Schlaf besucht. Leider funktionierte die Tonanlage schlecht, und den Schluss des Vortrags hast du kaum verstanden. Schreib an die Leitung der Volkshochschule.',
      punkte: [
        'Bedank dich kurz und nenne einen Aspekt, der dich interessiert hat.',
        'Beschreibe das Problem während des Vortrags.',
        'Bitte um die Folien oder eine kurze Zusammenfassung des Fazits.',
      ],
      minWoerter: 60,
      beispielLoesung: 'Sehr geehrte Damen und Herren, am Donnerstag habe ich den Vortrag von Dr. Hoffmann über gesunden Schlaf besucht. Zunächst möchte ich mich für die interessante Veranstaltung bedanken; besonders die Studie zur Handynutzung am Abend fand ich spannend. Leider funktionierte die Tonanlage nicht richtig, sodass ich im hinteren Teil des Saals vor allem das Fazit kaum verstehen konnte. Deshalb möchte ich Sie bitten, mir die Folien oder eine kurze Zusammenfassung per E-Mail zu schicken. Außerdem wäre es schön, wenn Sie die Technik vor dem nächsten Vortrag überprüfen könnten. Mit freundlichen Grüßen, Carmen Álvarez',
    },
    {
      typ: 'sprechen',
      titel: 'Sprechen',
      anweisung: 'Halte einen kurzen, klar gegliederten Vortrag. Sprich etwa zwei Minuten.',
      aufgabe: 'Du sollst in deinem Sprachkurs einen Kurzvortrag von etwa zwei Minuten zum Thema „Zu viel Verpackungsmüll im Alltag“ halten. Kündige am Anfang deine Gliederung an und mach die Struktur mit Signalwörtern hörbar.',
      punkte: [
        'Beschreibe zunächst das Problem.',
        'Geh auf zwei Ursachen ein.',
        'Stell mögliche Lösungen vor und zieh ein Fazit.',
      ],
      redemittel: [
        'In meinem Vortrag geht es um …',
        'Dabei möchte ich auf drei Punkte eingehen: …',
        'Zunächst … / Außerdem … / Ein weiterer Aspekt ist …',
        'Zusammenfassend lässt sich sagen, dass …',
      ],
      maxSekunden: 120,
      beispielLoesung: 'In meinem Vortrag geht es um das Thema Verpackungsmüll im Alltag. Dabei möchte ich auf drei Punkte eingehen: das Problem, die Ursachen und mögliche Lösungen. Zunächst zum Problem. Wenn ich nach dem Einkaufen meine Tasche auspacke, bleibt ein ganzer Berg Plastik und Karton übrig. Bei uns zu Hause ist die Mülltonne schon nach wenigen Tagen voll. Außerdem möchte ich auf die Ursachen eingehen. Einerseits kaufen wir immer mehr im Internet, und jedes Paket bringt zusätzliches Verpackungsmaterial mit. Andererseits sind im Supermarkt sogar Obst und Gemüse oft in Plastik verpackt, obwohl das gar nicht nötig wäre. Ein weiterer Aspekt ist unsere Bequemlichkeit: Der Kaffee zum Mitnehmen ist einfach praktisch. Abschließend zu den Lösungen. Jeder kann etwas tun, zum Beispiel eine eigene Tasche mitnehmen, auf dem Markt einkaufen oder Leitungswasser trinken. Darüber hinaus müsste aber auch die Politik handeln und unnötige Verpackungen verbieten. Zusammenfassend lässt sich sagen, dass wir das Problem nur gemeinsam lösen können: Die Verbraucher müssen ihr Verhalten ändern, und die Hersteller müssen weniger verpacken. Vielen Dank für Ihre Aufmerksamkeit.',
    },
  ],
}
