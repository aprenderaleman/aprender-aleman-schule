// Übungsheft B2 — Lektion 23: Modul Hören — Überblick
export default {
  lektion: 23,
  titel: 'Übungsheft — Modul Hören im Überblick',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Die Sprache der Hörprüfung: Arbeitsanweisungen, Signalwörter und Paraphrasen. Ergänze, wähle und ordne.',
      items: [
        {
          typ: 'luecke',
          text: 'Lesen Sie zuerst die Aufgaben und {1} Sie bei jeder Aufgabe die richtige Lösung an. {2} Sie danach die Aussagen den Personen zu.',
          bank: ['kreuzen', 'Ordnen', 'Lesen', 'Notieren'],
          loesungen: { 1: 'kreuzen', 2: 'Ordnen' },
        },
        {
          typ: 'luecke',
          text: 'Die {1} aus dem Lautsprecher war wegen des Lärms kaum zu hören. In der Aufgabe steht die {2}: „Der Zug fährt später ab.“',
          bank: ['Durchsage', 'Aussage', 'Notiz'],
          loesungen: { 1: 'Durchsage', 2: 'Aussage' },
        },
        {
          typ: 'luecke',
          text: 'Die Expertin hält Homeoffice {1} für produktiver, {2} sie sieht auch Risiken für das Teamgefühl.',
          bank: ['zwar', 'aber', 'denn', 'sondern'],
          loesungen: { 1: 'zwar', 2: 'aber' },
        },
        { typ: 'mc', frage: 'Der Redner sieht viele Vorteile in der neuen Technologie. ___ warnt er vor den hohen Kosten.', optionen: ['Deshalb', 'Allerdings', 'Nämlich'], loesung: 1 },
        { typ: 'mc', frage: 'Sie hören den Text ___. Es gibt also keine zweite Chance.', optionen: ['einmal', 'zweimal', 'mehrmals'], loesung: 0 },
        {
          typ: 'zuordnen',
          links: [
            'Die Ausstellung ist heute geschlossen.',
            'Die Führung beginnt in zehn Minuten.',
            'Der Kurs fällt aus.',
            'Fotografieren ohne Blitz ist erlaubt.',
            'Wir haben samstags bis 14 Uhr auf.',
          ],
          rechts: [
            'Er findet nicht statt.',
            'Man darf Fotos machen.',
            'Man kann sie heute nicht besuchen.',
            'Samstags ist bis 14 Uhr geöffnet.',
            'Sie fängt nicht sofort an.',
          ],
          loesung: {
            'Die Ausstellung ist heute geschlossen.': 'Man kann sie heute nicht besuchen.',
            'Die Führung beginnt in zehn Minuten.': 'Sie fängt nicht sofort an.',
            'Der Kurs fällt aus.': 'Er findet nicht statt.',
            'Fotografieren ohne Blitz ist erlaubt.': 'Man darf Fotos machen.',
            'Wir haben samstags bis 14 Uhr auf.': 'Samstags ist bis 14 Uhr geöffnet.',
          },
        },
        {
          typ: 'korrektur',
          optionen: ['Während des Hörens habe ich Notizen genommen.', 'Während des Hörens habe ich mir Notizen gemacht.'],
          loesung: 1,
          warum: '«Tomar notas» es **sich Notizen machen**; *Notizen nehmen* es un calco del español.',
        },
        {
          typ: 'korrektur',
          optionen: ['Ich habe die Prüfung beim ersten Versuch bestanden.', 'Ich habe die Prüfung beim ersten Versuch passiert.'],
          loesung: 0,
          warum: '«Aprobar un examen» es **bestehen**; *passieren* significa «ocurrir».',
        },
        {
          typ: 'satzbau',
          woerter: ['oft', 'Text', 'Ich', 'hören', 'nicht', 'wir', 'wie', 'den', 'weiß'],
          loesung: 'Ich weiß nicht, wie oft wir den Text hören.',
        },
        {
          typ: 'satzbau',
          woerter: ['verlierst', 'einfach', 'du', 'Faden', 'rate', 'den', 'Wenn'],
          loesung: 'Wenn du den Faden verlierst, rate einfach.',
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies den Forumsbeitrag. Entscheide, welche Aussage dem Text entspricht.',
      textTitel: 'Forumsbeitrag: So habe ich mich auf das Hören vorbereitet',
      text: 'Hallo zusammen, letzte Woche habe ich die Prüfung für das Zertifikat B2 abgelegt, und viele von euch haben nach dem Modul Hören gefragt. Am Anfang war das mein schwächster Teil: Bei jeder Durchsage wollte ich jedes Wort verstehen und habe dabei die eigentliche Information verpasst. Geholfen hat mir vor allem eine Gewohnheit: Ich lese die Aufgaben vorher sehr genau und markiere in jeder Aussage ein Schlüsselwort. Beim Hören notiere ich nur Zahlen und Stichwörter, nie ganze Sätze. Am schwierigsten fand ich Teil 3, die Diskussion, weil man die Sprecher manchmal kaum unterscheiden kann. Mein Tipp dafür: Schreibt euch vor dem Hören die Namen auf und achtet darauf, wie die Personen einander ansprechen. Geübt habe ich drei Monate lang mit Transkripten, zum Schluss aber zwei komplette Modellsätze mit Audio gemacht — das war für mich die wichtigste Generalprobe. Und wer den Faden verliert, sollte nicht in Panik geraten: einfach etwas ankreuzen und bei der nächsten Aufgabe weitermachen. Viel Erfolg! Tomás',
      items: [
        {
          typ: 'mc',
          frage: 'Was war am Anfang das Problem von Tomás?',
          optionen: [
            'Er wollte alles verstehen und hat dabei das Wichtige verpasst.',
            'Er konnte die Aufgaben nicht rechtzeitig lesen.',
            'Er hat in Durchsagen oft die Zahlen verwechselt.',
          ],
          loesung: 0,
        },
        { typ: 'rf', aussage: 'Tomás schreibt beim Hören ganze Sätze mit.', loesung: false },
        {
          typ: 'mc',
          frage: 'Warum fand Tomás Teil 3 besonders schwierig?',
          optionen: ['weil der Text nur einmal läuft', 'weil die Aufgaben sehr lang sind', 'weil man die Sprecher schwer auseinanderhalten kann'],
          loesung: 2,
        },
        { typ: 'rf', aussage: 'Am Ende seiner Vorbereitung hat Tomás mit echtem Audio geübt.', loesung: true },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'text',
      titel: 'Schreiben',
      anweisung: 'Schreib einen Forumsbeitrag mit mindestens 60 Wörtern.',
      aufgabe: 'In einem Forum für Deutschlernende wird diskutiert: „Sollte man in Sprachprüfungen jeden Hörtext zweimal hören dürfen?“ Schreib einen Beitrag und nimm Stellung.',
      punkte: [
        'Sag klar, welche Position du vertrittst.',
        'Begründe deine Meinung mit einem Beispiel aus dem Alltag.',
        'Gib anderen Lernenden einen Tipp für das Hörtraining.',
      ],
      minWoerter: 60,
      beispielLoesung: 'Hallo zusammen, ich finde, dass nicht jeder Hörtext zweimal laufen muss. Im Alltag hört man eine Durchsage am Bahnhof oder eine Nachricht im Radio schließlich auch nur einmal, und trotzdem muss man die wichtigen Informationen verstehen. Eine Prüfung sollte genau diese Fähigkeit testen. Allerdings verstehe ich, dass lange Vorträge beim ersten Hören schwierig sein können — dort wäre ein zweites Hören vielleicht fair. Mein Tipp: Lest vor jedem Text die Aufgaben genau, markiert die Schlüsselwörter und notiert beim Hören nur Zahlen und Stichwörter. So verliert ihr den Faden viel seltener. Viele Grüße, Nadia',
    },
  ],
}
