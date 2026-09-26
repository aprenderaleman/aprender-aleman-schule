// Übungsheft C1 — Lektion 13: Modalverben in subjektiver Bedeutung
export default {
  lektion: 13,
  titel: 'Übungsheft — Modalverben subjektiv',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Löse die Aufgaben. Achte darauf, ob ein Modalverb objektiv oder subjektiv gebraucht wird, welchen Grad an Gewissheit der Kontext verlangt und ob sich eine Vermutung auf Gegenwärtiges oder Vergangenes bezieht.',
      items: [
        {
          typ: 'luecke',
          text: 'Der Angeklagte {1} zur Tatzeit bei seiner Schwester gewesen sein — so jedenfalls steht es in seiner eigenen Aussage. Nach Angaben der Polizei {2} er jedoch noch um Mitternacht vor dem Tatort gesehen worden sein.',
          bank: ['will', 'soll', 'darf', 'wollen'],
          loesungen: { 1: 'will', 2: 'soll' },
        },
        {
          typ: 'luecke',
          text: 'Die Akten sind spurlos verschwunden. Nach meiner {1} muss sie jemand versehentlich mit dem Altpapier entsorgt {2}.',
          bank: ['Einschätzung', 'Gewissheit', 'haben', 'hatte'],
          loesungen: { 1: 'Einschätzung', 2: 'haben' },
        },
        {
          typ: 'luecke',
          text: 'Wie die Zeitung unter Berufung auf eine verlässliche {1} berichtet, wurde der {2} Täter gestern festgenommen. Er {3} die Vorwürfe allerdings entschieden.',
          bank: ['Quelle', 'mutmaßliche', 'bestreitet', 'Behauptung', 'offenbar'],
          loesungen: { 1: 'Quelle', 2: 'mutmaßliche', 3: 'bestreitet' },
        },
        {
          typ: 'mc',
          frage: 'Welcher Satz drückt eine heutige Vermutung über einen vergangenen Sachverhalt aus?',
          optionen: ['Sie musste die Zahlen noch einmal prüfen.', 'Sie muss die Zahlen noch einmal geprüft haben.', 'Sie hat die Zahlen noch einmal prüfen müssen.'],
          loesung: 1,
        },
        {
          typ: 'mc',
          frage: 'Die Mieten ___ im kommenden Jahr weiter steigen — so lautet die übereinstimmende Prognose der Wirtschaftsforscher.',
          optionen: ['wollen', 'mögen', 'dürften'],
          loesung: 2,
        },
        {
          typ: 'mc',
          frage: 'Das Büro ist dunkel und abgeschlossen. Der Sprecher schließt aus, dass sein Kollege noch dort ist: „Er ___ mehr da sein.“',
          optionen: ['kann nicht', 'muss nicht', 'darf nicht'],
          loesung: 0,
        },
        {
          typ: 'korrektur',
          optionen: ['Er fehlte gestern unentschuldigt — er musste krank sein.', 'Er fehlte gestern unentschuldigt — er muss krank gewesen sein.'],
          loesung: 1,
          warum: 'Una suposición actual sobre el pasado se forma con el modal en **presente + Infinitiv II** (*muss krank gewesen sein*). *musste krank sein* es calco de «debía de estar enfermo» y solo puede leerse como obligación pasada.',
        },
        {
          typ: 'korrektur',
          optionen: ['Die Ermittlerin äußerte die Vermutung, dass es sich um Brandstiftung handle.', 'Die Ermittlerin sagte die Vermutung, dass es sich um Brandstiftung handle.'],
          loesung: 0,
          warum: 'La colocación es **eine Vermutung äußern**; *sagen* no admite *Vermutung* como complemento directo.',
        },
        {
          typ: 'korrektur',
          optionen: ['Das mag auf den ersten Blick überzeugen, deshalb hält es auch einer genauen Prüfung stand.', 'Das mag auf den ersten Blick überzeugen, hält einer genauen Prüfung aber nicht stand.'],
          loesung: 1,
          warum: 'El *mag* subjetivo es concesivo: admite algo para rebatirlo a continuación, por eso exige un **aber/doch** adversativo, nunca un *deshalb*.',
        },
        {
          typ: 'zuordnen',
          links: ['wie behauptet wird, ohne dass der Sprecher es glaubt', 'nach begründeter Annahme des Sprechers', 'wie der Augenschein deutlich nahelegt', 'unter Tatverdacht, aber noch nicht verurteilt', 'wie aus inoffiziellen Kreisen zu hören ist'],
          rechts: ['angeblich', 'vermutlich', 'offenbar', 'mutmaßlich', 'dem Vernehmen nach'],
          loesung: {
            'wie behauptet wird, ohne dass der Sprecher es glaubt': 'angeblich',
            'nach begründeter Annahme des Sprechers': 'vermutlich',
            'wie der Augenschein deutlich nahelegt': 'offenbar',
            'unter Tatverdacht, aber noch nicht verurteilt': 'mutmaßlich',
            'wie aus inoffiziellen Kreisen zu hören ist': 'dem Vernehmen nach',
          },
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies den Auszug aus einem Zeitungsbericht. Unterscheide genau, was als Tatsache dargestellt, was vermutet und was lediglich behauptet wird, und entscheide dann, welche Antwort dem Text entspricht bzw. ob die Aussage richtig oder falsch ist.',
      textTitel: 'Bericht: Rätsel um ein verschwundenes Gemälde',
      text: 'Seit vergangenem Freitag fehlt im Museum am Kanal in Lübeck ein kleines Ölgemälde aus dem 18. Jahrhundert. Fest steht bislang nur, dass das Bild am Donnerstagabend noch an seinem Platz hing; das belegen Fotos einer Besuchergruppe. Wie der Täter in das Gebäude gelangte, ist dagegen ungeklärt. Die Alarmanlage soll in der fraglichen Nacht zwei Stunden lang abgeschaltet gewesen sein — so schildern es jedenfalls mehrere Museumsmitarbeiter übereinstimmend. Der zuständige Wachdienst bestreitet das: Sein Mitarbeiter will die Anlage um 22 Uhr ordnungsgemäß überprüft haben.\nDie Ermittler halten sich mit Einschätzungen zurück. Dem Vernehmen nach gehen sie jedoch davon aus, dass sich der Täter im Haus auskannte; ein Fenster im Erdgeschoss wurde offenbar von innen geöffnet. Der Wert des Gemäldes dürfte bei rund 80 000 Euro liegen. Auf dem Kunstmarkt sei es praktisch unverkäuflich, betont die Museumsleiterin Katarina Nowak. „Wer das Bild genommen hat, muss es aus persönlichen Gründen gewollt haben“, vermutet sie. Das mag plausibel klingen, eine Gewissheit gibt es bislang jedoch nicht. Angeblich wurde in der Nacht ein Lieferwagen in der Nähe des Museums gesehen; eine offizielle Bestätigung steht noch aus.',
      items: [
        { typ: 'rf', aussage: 'Dass das Gemälde am Donnerstagabend noch im Museum hing, stellt der Text als gesichert dar.', loesung: true },
        {
          typ: 'mc',
          frage: 'Was geht aus dem Text über die Alarmanlage hervor?',
          optionen: ['Es ist erwiesen, dass sie zwei Stunden lang abgeschaltet war.', 'Museumsmitarbeiter behaupten, sie sei abgeschaltet gewesen; der Wachdienst widerspricht.', 'Der Wachmann räumt ein, die Anlage an jenem Abend nicht überprüft zu haben.'],
          loesung: 1,
        },
        {
          typ: 'mc',
          frage: 'Wie verhält sich der Autor zur Vermutung der Museumsleiterin?',
          optionen: ['Er hält sie für widerlegt, weil sich der Täter im Haus auskannte.', 'Er übernimmt sie als erwiesene Tatsache.', 'Er räumt ihre Plausibilität ein, betont aber, dass sie nicht gesichert ist.'],
          loesung: 2,
        },
        { typ: 'rf', aussage: 'Die Polizei hat offiziell bestätigt, dass in der Tatnacht ein Lieferwagen am Museum gesehen wurde.', loesung: false },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'text',
      titel: 'Schreiben',
      anweisung: 'Verfasse eine Stellungnahme (mindestens 80 Wörter). Kennzeichne sprachlich präzise, was gesichert, was vermutet und was lediglich behauptet ist.',
      aufgabe: 'In einem Onlineforum wird darüber diskutiert, ob Medien über Verdachtsfälle berichten sollten, bevor die Ermittlungen abgeschlossen sind. Nimm dazu Stellung.',
      punkte: [
        'Gib die Position der Befürworter einer frühen Berichterstattung wieder.',
        'Erläutere, welche Risiken Verdachtsberichte für die Betroffenen bergen können.',
        'Formuliere deine eigene Einschätzung und verwende dabei mindestens zwei subjektive Modalverben.',
      ],
      minWoerter: 80,
      beispielLoesung: 'Befürworter einer frühen Berichterstattung argumentieren, die Öffentlichkeit habe ein Recht darauf, von möglichen Missständen zu erfahren — gerade wenn einflussreiche Personen betroffen seien. Das mag zutreffen, doch die Risiken sind erheblich. Wer in der Presse als mutmaßlicher Täter erscheint, dürfte diesen Ruf kaum wieder loswerden, selbst wenn sich die Vorwürfe später als haltlos erweisen. Viele Leser überlesen zudem, dass jemand etwas getan haben soll, und halten die bloße Behauptung für eine Tatsache.\nNach meiner Einschätzung sollten Medien über Verdachtsfälle nur dann berichten, wenn sie sich auf mehrere verlässliche Quellen berufen können und die Betroffenen Gelegenheit zur Stellungnahme erhalten haben. Sprachliche Distanzierung allein genügt nicht: Wer die Vorwürfe bestreitet, muss ebenso ausführlich zu Wort kommen.',
    },
  ],
}
