// Übungsheft B2 — Lektion 20: Lesen: Meinungen zuordnen
export default {
  lektion: 20,
  titel: 'Übungsheft — Meinungen zuordnen',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Meinungen ausdrücken und erkennen: Achte auf Rektion, Präpositionen und die Haltung der Sprechenden.',
      items: [
        {
          typ: 'luecke',
          text: 'Ich halte den Vorschlag {1} eine gute Idee, aber meine Kollegin ist {2} Ansicht, dass er zu teuer ist.',
          bank: ['für', 'der', 'als', 'die'],
          loesungen: { 1: 'für', 2: 'der' },
        },
        {
          typ: 'luecke',
          text: 'Ich stimme {1} in diesem Punkt zu, obwohl ich von deinem Plan noch nicht ganz {2} bin.',
          bank: ['dir', 'dich', 'überzeugt', 'skeptisch'],
          loesungen: { 1: 'dir', 2: 'überzeugt' },
        },
        {
          typ: 'mc',
          frage: 'Die Mehrheit der Eltern ___ die neue Regelung: 70 Prozent sind dafür.',
          optionen: ['befürwortet', 'bezweifelt', 'widerspricht'],
          loesung: 0,
        },
        {
          typ: 'mc',
          frage: 'Ich ___, dass sich durch die Reform wirklich etwas ändert — dafür fehlt einfach das Geld.',
          optionen: ['befürworte', 'bezweifle', 'stimme zu'],
          loesung: 1,
        },
        {
          typ: 'mc',
          frage: '„Grundsätzlich eine gute Sache, aber die Umsetzung überzeugt mich noch nicht.“ Welche Haltung hat die Person?',
          optionen: ['Sie ist klar dafür.', 'Sie ist klar dagegen.', 'Sie sieht Vor- und Nachteile.'],
          loesung: 2,
        },
        {
          typ: 'luecke',
          text: 'Ben findet die Idee eigentlich gut. Er ist also nicht grundsätzlich {1}, {2} für seinen Beruf hält er das Modell für unrealistisch.',
          bank: ['dagegen', 'dafür', 'aber', 'denn'],
          loesungen: { 1: 'dagegen', 2: 'aber' },
        },
        {
          typ: 'zuordnen',
          links: ['Ich halte das für sinnvoll.', 'Ich lehne das entschieden ab.', 'Ich habe da so meine Zweifel.', 'Einerseits praktisch, andererseits teuer.'],
          rechts: ['Zustimmung', 'klare Ablehnung', 'Skepsis', 'Vor- und Nachteile'],
          loesung: {
            'Ich halte das für sinnvoll.': 'Zustimmung',
            'Ich lehne das entschieden ab.': 'klare Ablehnung',
            'Ich habe da so meine Zweifel.': 'Skepsis',
            'Einerseits praktisch, andererseits teuer.': 'Vor- und Nachteile',
          },
        },
        {
          typ: 'korrektur',
          optionen: ['Ich stimme dich in diesem Punkt zu.', 'Ich stimme dir in diesem Punkt zu.'],
          loesung: 1,
          warum: '*Zustimmen* rige **dativo**: *Ich stimme dir zu*, aunque en español digas «te doy la razón».',
        },
        {
          typ: 'korrektur',
          optionen: ['Ich halte das für richtig.', 'Ich halte das als richtig.'],
          loesung: 0,
          warum: '*Halten* en el sentido de «considerar» va con **für** + acusativo, nunca con *als* (calco de «lo tengo como…»).',
        },
        {
          typ: 'satzbau',
          woerter: ['daran', 'Ich', 'ändert', 'dass', 'bezweifle', 'etwas', 'sich'],
          loesung: 'Ich bezweifle, dass sich daran etwas ändert.',
          alt: ['Ich bezweifle, dass sich etwas daran ändert.', 'Dass sich daran etwas ändert, bezweifle ich.', 'Dass sich etwas daran ändert, bezweifle ich.'],
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies die drei Meinungen und löse die Aufgaben. Achte auf die Haltung der Personen, nicht auf einzelne Wörter.',
      textTitel: 'Thema der Woche: Handyverbot an Schulen?',
      text: 'Marta, 44, Mutter: „Ich befürworte das Verbot ausdrücklich. Seit an der Schule meines Sohnes in den Pausen keine Handys mehr erlaubt sind, spielen die Kinder wieder draußen und reden miteinander. Aus meiner Sicht hätte man diese Regel schon viel früher einführen sollen.“ Herr Yilmaz, 58, Lehrer: „Einerseits verstehe ich die Eltern, andererseits halte ich ein komplettes Verbot für wenig sinnvoll. Die Jugendlichen müssen lernen, vernünftig mit dem Handy umzugehen — und das lernen sie nicht, wenn wir es einfach wegschließen. Im Unterricht nutzen wir die Geräte übrigens oft für Recherchen.“ Lina, 16, Schülerin: „Ich bin klar dagegen. Viele von uns haben einen langen Schulweg und wollen ihren Eltern Bescheid sagen können, wenn der Bus ausfällt. Außerdem bezweifle ich, dass wir uns ohne Handy besser konzentrieren. Wer im Unterricht nicht aufpassen will, findet immer eine Ablenkung.“',
      items: [
        {
          typ: 'mc',
          frage: 'Wer lehnt das Verbot eindeutig ab?',
          optionen: ['Marta', 'Herr Yilmaz', 'Lina'],
          loesung: 2,
        },
        { typ: 'rf', aussage: 'Herr Yilmaz ist der Ansicht, dass Jugendliche einen vernünftigen Umgang mit dem Handy lernen sollten.', loesung: true },
        {
          typ: 'mc',
          frage: 'Welche Aussage passt zu Marta?',
          optionen: [
            'Das Verbot ist ihrer Meinung nach zu spät gekommen.',
            'Sie bezweifelt, dass das Verbot etwas bringt.',
            'Sie möchte ihren Sohn nach der Schule anrufen können.',
          ],
          loesung: 0,
        },
        { typ: 'rf', aussage: 'Lina glaubt, dass sich die Schülerinnen und Schüler ohne Handy besser konzentrieren können.', loesung: false },
      ],
    },
    {
      typ: 'hoeren',
      titel: 'Hören',
      anweisung: 'Du hörst einen Ausschnitt aus einer Radiosendung, in der sich drei Personen zu einem Vorschlag äußern. Wer vertritt welche Position?',
      audio: {
        transcript: 'Moderatorin: Unser Thema heute: Sollen Geschäfte auch sonntags öffnen dürfen? Am Telefon ist Jonas, der selbst im Handel arbeitet. Jonas, was meinen Sie?\nJonas: Ich lehne das entschieden ab. Ich stehe schon jeden Samstag im Laden. Wenn auch noch der Sonntag wegfällt, sehe ich meine Kinder kaum noch.\nModeratorin: Danke. Jetzt zu Nina, die als Ärztin im Schichtdienst arbeitet.\nNina: Ich bin grundsätzlich dafür. Wer wie ich unregelmäßig arbeitet, schafft den Einkauf unter der Woche oft nicht. Allerdings dürfte niemand zur Sonntagsarbeit gezwungen werden, und sie müsste besser bezahlt sein. Sonst halte ich das für unfair.\nModeratorin: Und Martin, Sie führen eine kleine Buchhandlung.\nMartin: Richtig, und ich bin skeptisch. Einerseits wünschen sich das manche Kunden, andererseits bezweifle ich, dass die Leute dadurch mehr kaufen. Sie verteilen ihr Geld nur auf sieben Tage statt auf sechs, und meine Kosten steigen trotzdem.\nModeratorin: Drei Stimmen, drei Meinungen. Vielen Dank!',
      },
      items: [
        {
          typ: 'mc',
          frage: 'Wer lehnt die Sonntagsöffnung eindeutig ab?',
          optionen: ['Jonas', 'Nina', 'Martin'],
          loesung: 0,
        },
        { typ: 'rf', aussage: 'Nina kann ihre Einkäufe problemlos an den Werktagen erledigen.', loesung: false },
        {
          typ: 'mc',
          frage: 'Unter welcher Bedingung befürwortet Nina den Vorschlag?',
          optionen: [
            'Die Geschäfte öffnen sonntags nur für wenige Stunden.',
            'Die Arbeit am Sonntag ist freiwillig und wird besser bezahlt.',
            'Auch Arztpraxen haben sonntags geöffnet.',
          ],
          loesung: 1,
        },
        {
          typ: 'mc',
          frage: 'Was befürchtet Martin?',
          optionen: [
            'Seine Kunden bestellen sonntags lieber im Internet.',
            'Er findet kein Personal für den Sonntag.',
            'Seine Ausgaben steigen, ohne dass er mehr verkauft.',
          ],
          loesung: 2,
        },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'text',
      titel: 'Schreiben',
      anweisung: 'Schreib einen Forumsbeitrag mit mindestens 60 Wörtern und geh auf alle drei Punkte ein.',
      aufgabe: 'Auf der Website deiner Stadt wird darüber diskutiert, ob die Innenstadt am Wochenende autofrei werden soll. Schreib einen Beitrag und nimm Stellung.',
      punkte: [
        'Sag klar, ob du den Vorschlag befürwortest oder ablehnst.',
        'Begründe deine Meinung mit mindestens zwei Argumenten.',
        'Geh auf ein Gegenargument ein.',
      ],
      minWoerter: 60,
      beispielLoesung: 'Liebe Mitdiskutierende, ich befürworte den Vorschlag, die Innenstadt am Wochenende für Autos zu sperren. Aus meiner Sicht wird das Zentrum dadurch ruhiger und sicherer, vor allem für Familien mit Kindern. Außerdem würden die Cafés und Geschäfte profitieren, weil die Menschen länger bleiben und in Ruhe bummeln. Einerseits verstehe ich die Sorge vieler Händler, dass Kundschaft aus dem Umland wegbleibt. Andererseits könnte die Stadt am Wochenende mehr Busse einsetzen und Parkplätze am Stadtrand anbieten. Ich bin davon überzeugt, dass sich das lohnt. Viele Grüße, Farid',
    },
    {
      typ: 'sprechen',
      titel: 'Sprechen',
      anweisung: 'Gib zwei Meinungen mit eigenen Worten wieder und nimm selbst Stellung. Sprich etwa 100 Sekunden.',
      aufgabe: 'In einem Forum äußern sich zwei Personen zu der Frage, ob alle jungen Menschen nach der Schule ein soziales Jahr machen sollten. Carla: „Ein Pflichtjahr halte ich für sinnvoll. Man lernt Verantwortung und sieht, wie andere leben.“ Deniz: „Ich bezweifle, dass Zwang etwas bringt. Wer nicht will, hilft niemandem.“ Stell beide Meinungen in etwa 100 Sekunden mit eigenen Worten vor und sag, wie du selbst dazu stehst.',
      punkte: [
        'Gib die Meinung von Carla und die von Deniz wieder, ohne ihre Formulierungen zu wiederholen.',
        'Sag, wem du eher zustimmst, und begründe das mit einem Beispiel.',
        'Nenne einen Punkt, in dem die andere Person recht hat.',
      ],
      redemittel: ['Carla ist der Ansicht, dass …', 'Deniz dagegen ist skeptisch: …', 'Ich stimme eher … zu, weil …', 'In einem Punkt hat … allerdings recht: …'],
      maxSekunden: 100,
      beispielLoesung: 'Carla und Deniz sehen das soziale Jahr ganz unterschiedlich. Carla befürwortet ein Pflichtjahr. Aus ihrer Sicht werden junge Leute dadurch selbstständiger und lernen Menschen kennen, die ganz anders leben als sie selbst. Deniz dagegen ist skeptisch. Er glaubt nicht, dass man jemanden zum Helfen zwingen kann, und meint, dass unmotivierte Leute eher stören als nützen. Ich persönlich stimme eher Carla zu. Ich habe nach der Schule selbst ein halbes Jahr in einem Altenheim gearbeitet, und das war eine der wichtigsten Erfahrungen meines Lebens. Vorher wusste ich gar nicht, wie anstrengend Pflege ist. Trotzdem hat Deniz in einem Punkt recht: Wer überhaupt keine Lust hat, ist für die Einrichtung keine Hilfe. Deshalb halte ich es für wichtig, dass man wenigstens selbst wählen kann, wo man arbeitet, zum Beispiel im Krankenhaus, im Kindergarten oder im Umweltschutz. Dann finden die meisten etwas, das zu ihnen passt.',
    },
  ],
}
