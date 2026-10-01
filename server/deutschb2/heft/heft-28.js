// Übungsheft B2 — Lektion 28: Schreiben Teil 1 — Der Forumsbeitrag
export default {
  lektion: 28,
  titel: 'Übungsheft — Der Forumsbeitrag',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Redemittel, Konnektoren und Forum-Register: Wähle jeweils die passende Lösung für einen gelungenen Forumsbeitrag.',
      items: [
        {
          typ: 'luecke',
          text: 'Ich bin der {1}, dass das Homeoffice viele {2} hat: Man spart Zeit, Geld und Nerven.',
          bank: ['Ansicht', 'Vorteile', 'Nachteile', 'Fazit'],
          loesungen: { 1: 'Ansicht', 2: 'Vorteile' },
        },
        {
          typ: 'luecke',
          text: 'Ich stimme {1} völlig zu, Jana: Das Thema {2} uns alle, nicht nur die Pendler.',
          bank: ['dir', 'dich', 'betrifft', 'betreffen'],
          loesungen: { 1: 'dir', 2: 'betrifft' },
        },
        {
          typ: 'luecke',
          text: 'Natürlich stimmt es, {1} Online-Shopping bequem ist. {2} kaufe ich Lebensmittel bewusst im Laden, {3} ich die Geschäfte in meinem Viertel unterstützen möchte.',
          bank: ['dass', 'Trotzdem', 'Deshalb', 'weil', 'denn'],
          loesungen: { 1: 'dass', 2: 'Trotzdem', 3: 'weil' },
        },
        {
          typ: 'mc',
          frage: 'Wie geht der Satz korrekt weiter? „Meiner Meinung nach …“',
          optionen: [
            'klare Regeln sind besser als ein Verbot.',
            'klare Regeln besser als ein Verbot sind.',
            'sind klare Regeln besser als ein Verbot.',
          ],
          loesung: 2,
        },
        {
          typ: 'mc',
          frage: 'Welcher Satz eignet sich als Einstieg in einen Forumsbeitrag?',
          optionen: [
            'Sehr geehrte Damen und Herren, hiermit nehme ich zu Ihrer Frage Stellung.',
            'Das Thema betrifft mich persönlich, denn ich pendle jeden Tag zwei Stunden.',
            'Hey Leute, voll krasses Thema!!!',
          ],
          loesung: 1,
        },
        {
          typ: 'mc',
          frage: '„Ich gebe zu, dass Carsharing auf dem Land kaum funktioniert.“ Welche Funktion hat dieser Satz im Beitrag?',
          optionen: ['eine Einräumung', 'ein Fazit', 'ein Einstieg mit Themenbezug'],
          loesung: 0,
        },
        {
          typ: 'zuordnen',
          links: [
            'Diese Frage kommt für mich genau zur richtigen Zeit.',
            'Meiner Meinung nach …',
            'Ich spreche aus eigener Erfahrung: …',
            'Natürlich stimmt es, dass …',
            'Alles in allem …',
          ],
          rechts: ['Bezug zum Thema herstellen', 'Meinung äußern', 'ein Beispiel geben', 'einräumen', 'zusammenfassen'],
          loesung: {
            'Diese Frage kommt für mich genau zur richtigen Zeit.': 'Bezug zum Thema herstellen',
            'Meiner Meinung nach …': 'Meinung äußern',
            'Ich spreche aus eigener Erfahrung: …': 'ein Beispiel geben',
            'Natürlich stimmt es, dass …': 'einräumen',
            'Alles in allem …': 'zusammenfassen',
          },
        },
        {
          typ: 'korrektur',
          optionen: ['Ich stimme mit dir zu.', 'Ich stimme dir zu.'],
          loesung: 1,
          warum: '**zustimmen** va con dativo y **sin** *mit*: «estar de acuerdo con» empuja a un *mit* que en alemán sobra.',
        },
        {
          typ: 'korrektur',
          optionen: ['Meiner Meinung nach ist das Homeoffice praktisch.', 'In meiner Meinung ist das Homeoffice praktisch.'],
          loesung: 0,
          warum: '«En mi opinión» no se traduce con *in*: se dice **meiner Meinung nach** (dativo + *nach* pospuesto), y después el verbo va en posición 2.',
        },
        {
          typ: 'satzbau',
          woerter: ['bestätigen', 'eigener', 'kann', 'Aus', 'nur', 'ich', 'Erfahrung', 'das'],
          loesung: 'Aus eigener Erfahrung kann ich das nur bestätigen.',
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies den Forumsbeitrag und löse die Aufgaben. Achte darauf, wo der Verfasser seine Meinung äußert und wo er der Gegenseite recht gibt.',
      textTitel: 'Forum „Stadtleben“: Sollen Supermärkte auch sonntags öffnen? — Beitrag von Tomasz',
      text: 'Das Thema betrifft mich ganz persönlich, denn ich arbeite selbst als Verkäufer in einem Supermarkt. Viele hier im Forum wünschen sich, dass die Geschäfte auch am Sonntag öffnen. Ich verstehe diesen Wunsch, bin aber anderer Ansicht. Meiner Meinung nach braucht die Gesellschaft einen gemeinsamen freien Tag. Ich spreche aus eigener Erfahrung: Schon jetzt arbeite ich oft bis 22 Uhr und jeden zweiten Samstag. Der Sonntag ist der einzige Tag, an dem ich mit meiner Familie frühstücken und meine Freunde treffen kann. Natürlich stimmt es, dass Berufstätige unter der Woche wenig Zeit zum Einkaufen haben. Ein überzeugendes Argument für Sonntagsöffnungen ist das für mich trotzdem nicht: Die meisten Supermärkte haben montags bis samstags bis 22 Uhr geöffnet, und im Notfall gibt es Tankstellen und kleine Läden im Bahnhof. Mein Fazit: Lasst uns den Sonntag als Ruhetag behalten — für die Kunden und für die Menschen hinter der Kasse.',
      items: [
        {
          typ: 'mc',
          frage: 'Warum betrifft das Thema Tomasz persönlich?',
          optionen: [
            'Er kauft fast nur am Sonntag ein.',
            'Er arbeitet selbst in einem Supermarkt.',
            'Er wohnt direkt neben einer Tankstelle.',
          ],
          loesung: 1,
        },
        { typ: 'rf', aussage: 'Tomasz spricht sich dafür aus, dass Supermärkte auch am Sonntag öffnen.', loesung: false },
        {
          typ: 'mc',
          frage: 'Welches Argument der Gegenseite räumt Tomasz ein?',
          optionen: [
            'Berufstätige haben unter der Woche wenig Zeit zum Einkaufen.',
            'Supermärkte verdienen am Sonntag mehr Geld.',
            'Tankstellen sind am Sonntag zu teuer.',
          ],
          loesung: 0,
        },
        { typ: 'rf', aussage: 'Laut Tomasz haben die meisten Supermärkte von Montag bis Samstag bis 22 Uhr geöffnet.', loesung: true },
      ],
    },
    {
      typ: 'hoeren',
      titel: 'Hören',
      anweisung: 'Du hörst einen Radiobeitrag über eine Umfrage. Löse die Aufgaben.',
      audio: {
        transcript: 'Bar oder mit Karte? Diese Frage haben wir gestern Menschen auf dem Wochenmarkt in Leipzig gestellt, und die Antworten waren überraschend. Von den sechzig Befragten zahlen nur noch siebzehn am liebsten bar. Eine Rentnerin erklärte uns, dass sie mit Scheinen und Münzen einfach besser sehe, wie viel sie ausgibt. Die meisten anderen bevorzugen die Karte oder das Handy, vor allem die Jüngeren. Ein Student meinte, er habe seit Monaten kein Bargeld mehr in der Tasche gehabt. Trotzdem ist er der Ansicht, dass man das Bargeld nicht abschaffen sollte, denn bei einem Stromausfall funktioniere keine einzige Karte. Interessant war auch die Meinung der Händler. Ein Gemüsehändler sagte uns, er nehme inzwischen gern Karten an, obwohl er für jede Zahlung eine kleine Gebühr zahlen müsse. Dafür habe er abends weniger Arbeit mit dem Zählen der Kasse. Unser Fazit lautet also, dass die Karte zwar immer beliebter wird, ganz auf Bargeld verzichten möchte aber fast niemand.',
      },
      items: [
        {
          typ: 'mc',
          frage: 'Wie viele der Befragten zahlen am liebsten bar?',
          optionen: ['siebzehn', 'siebzig', 'sechzig'],
          loesung: 0,
        },
        { typ: 'rf', aussage: 'Die Rentnerin zahlt lieber bar, weil sie so ihre Ausgaben besser im Blick hat.', loesung: true },
        { typ: 'rf', aussage: 'Der Student ist dafür, das Bargeld abzuschaffen.', loesung: false },
        {
          typ: 'mc',
          frage: 'Welchen Vorteil der Kartenzahlung nennt der Gemüsehändler?',
          optionen: [
            'Er muss keine Gebühren mehr zahlen.',
            'Seine Kunden kaufen mehr ein als früher.',
            'Er hat abends weniger Arbeit mit der Kasse.',
          ],
          loesung: 2,
        },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'text',
      titel: 'Schreiben',
      anweisung: 'Schreib einen Forumsbeitrag mit mindestens 60 Wörtern und geh auf alle drei Punkte ein. Achte auf das Forum-Register: ich-Form, freundlich-neutral, ohne Anrede und ohne Grußformel.',
      aufgabe: 'Im Forum eines Stadtmagazins wird diskutiert: „Sollte die Innenstadt für Autos gesperrt werden?“ Schreib deinen Beitrag.',
      punkte: [
        'Äußere deine Meinung mit einem passenden Redemittel.',
        'Beleg deine Meinung mit einem konkreten Beispiel aus deinem Alltag.',
        'Räume ein Argument der Gegenseite ein und zieh ein Fazit.',
      ],
      minWoerter: 60,
      beispielLoesung: 'Das Thema betrifft mich direkt, denn ich wohne mitten in der Altstadt. Meiner Meinung nach sollte die Innenstadt weitgehend autofrei werden. Ein Beispiel aus meinem Alltag: Wenn ich morgens mit dem Fahrrad zur Arbeit fahre, stehen die Autos oft im Stau, und die Luft ist schlecht. Seit unsere Straße am Wochenende gesperrt ist, spielen dort Kinder, und die Cafés sind voll. Natürlich stimmt es, dass ältere Menschen und Handwerker auf das Auto angewiesen sind. Für sie braucht es klare Ausnahmen. Insgesamt bin ich aber davon überzeugt, dass eine autofreie Innenstadt die Lebensqualität für alle verbessert.',
    },
    {
      typ: 'sprechen',
      titel: 'Sprechen',
      anweisung: 'Sprich einen Hörerbeitrag für eine Radiosendung auf. Sprich etwa 90 Sekunden.',
      aufgabe: 'Eine Radiosendung sammelt Hörermeinungen zum Thema „Urlaub: in die Ferne fliegen oder in der Nähe bleiben?“. Sprich einen Beitrag von etwa 90 Sekunden auf die Mailbox der Redaktion.',
      punkte: [
        'Nenne einen Vorteil und einen Nachteil von Fernreisen.',
        'Erzähl von einer eigenen Reiseerfahrung.',
        'Zieh am Ende dein persönliches Fazit.',
      ],
      redemittel: [
        'Das Thema betrifft mich persönlich, denn …',
        'Ein großer Vorteil ist, dass … / Ein Nachteil ist allerdings, dass …',
        'Aus eigener Erfahrung weiß ich, dass …',
        'Mein Fazit: …',
      ],
      maxSekunden: 90,
      beispielLoesung: 'Guten Tag, mein Name ist Elena, und das Thema betrifft mich persönlich, denn ich plane gerade meinen Sommerurlaub. Ein großer Vorteil von Fernreisen ist natürlich, dass man etwas völlig Neues kennenlernt: eine andere Kultur, anderes Essen, eine andere Landschaft. Ein Nachteil ist allerdings, dass so eine Reise teuer ist und dass der lange Flug der Umwelt schadet. Aus eigener Erfahrung weiß ich, dass man gar nicht weit fahren muss, um sich zu erholen. Vor zwei Jahren bin ich nach Thailand geflogen. Es war wunderschön, aber nach der Rückreise war ich eine Woche lang müde. Letzten Sommer bin ich dagegen mit dem Zug an die Ostsee gefahren. Schon nach drei Stunden saß ich am Strand, und ich habe mich viel besser erholt. Mein Fazit: Ich bin überzeugt, dass ein Urlaub in der Nähe oft die bessere Wahl ist. Eine Fernreise gönne ich mir trotzdem ab und zu, aber nicht jedes Jahr.',
    },
  ],
}
