// Übungsheft C1 — Lektion 06: Konjunktiv II — irreale Sätze
export default {
  lektion: 6,
  titel: 'Übungsheft — Konjunktiv II & irreale Sätze',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Bearbeite die Aufgaben zum Konjunktiv II. Entscheide jeweils, ob Gegenwart oder Vergangenheit gemeint ist und ob die eigene Form oder die würde-Umschreibung angemessen ist.',
      items: [
        {
          typ: 'luecke',
          text: 'Wenn es in der Innenstadt mehr Grünflächen {1}, {2} sich die Hitze im Hochsommer deutlich besser ertragen.',
          bank: ['gäbe', 'ließe', 'würde', 'wäre'],
          loesungen: { 1: 'gäbe', 2: 'ließe' },
        },
        {
          typ: 'luecke',
          text: 'Hätte der Verein die Antragsfrist nicht {1}, {2} er die Förderung ohne Weiteres erhalten.',
          bank: ['versäumt', 'hätte', 'wäre', 'gescheitert'],
          loesungen: { 1: 'versäumt', 2: 'hätte' },
        },
        {
          typ: 'luecke',
          text: 'Die Verhandlungen {1} beinahe an einer bloßen Formalie gescheitert. Im Rückblick {2} man die Verträge wohl sorgfältiger prüfen müssen.',
          bank: ['wären', 'hätte', 'würden'],
          loesungen: { 1: 'wären', 2: 'hätte' },
        },
        {
          typ: 'mc',
          frage: 'An deiner Stelle ___ ich das Angebot nicht ohne Rücksprache annehmen.',
          optionen: ['werde', 'würde', 'hätte'],
          loesung: 1,
        },
        {
          typ: 'mc',
          frage: 'Er spricht über die Reform, ___ er sie ganz allein ausgearbeitet.',
          optionen: ['als ob', 'wie wenn', 'als hätte'],
          loesung: 2,
        },
        {
          typ: 'mc',
          frage: 'Ohne zusätzliche Fördermittel ___ die Umsetzung des Projekts schwierig werden.',
          optionen: ['dürfte', 'durfte', 'darf'],
          loesung: 0,
        },
        {
          typ: 'korrektur',
          optionen: ['Wenn ich mehr Zeit haben würde, würde ich öfter ins Theater gehen.', 'Wenn ich mehr Zeit hätte, würde ich öfter ins Theater gehen.'],
          loesung: 1,
          warum: 'En la oración con *wenn*, *haben* va siempre en su forma propia (**hätte**); *haben würde* equivale al error español «si tendría».',
        },
        {
          typ: 'korrektur',
          optionen: ['Fast hätte ich gestern den letzten Zug verpasst.', 'Fast verpasse ich gestern den letzten Zug.'],
          loesung: 0,
          warum: '«Casi pierdo el tren» va en presente en español, pero *fast/beinahe* exige **Konjunktiv II de pasado** (*hätte verpasst*): el hecho no llegó a ocurrir.',
        },
        {
          typ: 'korrektur',
          optionen: ['Viele meinen, dass man die Anwohner früher informieren müssen hätte.', 'Viele meinen, dass man die Anwohner früher hätte informieren müssen.'],
          loesung: 1,
          warum: 'Con doble infinitivo en la subordinada, el verbo conjugado se adelanta: **hätte informieren müssen**, nunca al final.',
        },
        {
          typ: 'zuordnen',
          links: ['eine Antragsfrist', 'an der Finanzierung', 'von einer falschen Annahme', 'gegebenenfalls Rücksprache', 'eine Entscheidung zutiefst'],
          rechts: ['versäumen', 'scheitern', 'ausgehen', 'halten', 'bedauern'],
          loesung: {
            'eine Antragsfrist': 'versäumen',
            'an der Finanzierung': 'scheitern',
            'von einer falschen Annahme': 'ausgehen',
            'gegebenenfalls Rücksprache': 'halten',
            'eine Entscheidung zutiefst': 'bedauern',
          },
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies das Essayfragment. Entscheide, welche Antwort dem Text entspricht bzw. ob die Aussage richtig oder falsch ist.',
      textTitel: 'Essayfragment: Das Leben, das wir nicht gelebt haben',
      text: 'Kaum ein Gedanke beschäftigt uns so hartnäckig wie der an das, was hätte sein können. Hätte ich damals das Stipendium in Wien angenommen, wäre ich heute vielleicht ein anderer Mensch. Wäre ich doch nur ein wenig mutiger gewesen! Solche Sätze kennen die meisten von uns, und sie haben etwas Tröstliches und Quälendes zugleich. Die Psychologie unterscheidet dabei zwei Richtungen des Rückblicks. Wer sich ausmalt, wie alles hätte besser laufen können, bereut meist das, was er versäumt hat, und nicht das, was er getan hat. Wer dagegen überlegt, wie alles noch schlimmer hätte kommen können, empfindet eher Erleichterung: Beinahe wäre ich an jenem Morgen mit dem Auto gefahren.\nBemerkenswert ist, dass die Reue über verpasste Gelegenheiten mit den Jahren eher zunimmt, während die über Fehlentscheidungen verblasst. Ein falscher Schritt lässt sich erklären, oft sogar korrigieren; eine nie ergriffene Chance dagegen bleibt offen, gleichsam unendlich. Man könnte daraus schließen, wir sollten öfter Ja sagen. Doch das wäre zu einfach. Denn jeder Rückblick beruht auf einer Annahme, die selten zutrifft: dass wir damals gewusst hätten, was wir heute wissen. Gerecht wäre es, dem jüngeren Ich jene Nachsicht zu gewähren, die wir jedem Fremden selbstverständlich zugestehen würden.',
      items: [
        { typ: 'rf', aussage: 'Dem Text zufolge bereuen Menschen häufiger, was sie unterlassen haben, als das, was sie getan haben.', loesung: true },
        {
          typ: 'mc',
          frage: 'Welche Wirkung hat die Vorstellung, wie alles noch schlimmer hätte kommen können?',
          optionen: ['Sie macht mutiger bei künftigen Entscheidungen.', 'Sie löst eher Erleichterung aus.', 'Sie verstärkt die Reue über frühere Fehlentscheidungen.'],
          loesung: 1,
        },
        {
          typ: 'mc',
          frage: 'Warum wiegt eine verpasste Chance laut Text mit der Zeit schwerer als ein Fehler?',
          optionen: ['Weil verpasste Chancen meist wichtigere Lebensbereiche betreffen.', 'Weil andere Menschen uns verpasste Chancen häufiger vorhalten.', 'Weil sich ein Fehler erklären lässt, eine nicht genutzte Chance aber offen bleibt.'],
          loesung: 2,
        },
        { typ: 'rf', aussage: 'Der Autor empfiehlt, grundsätzlich jede sich bietende Gelegenheit zu ergreifen.', loesung: false },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'text',
      titel: 'Schreiben',
      anweisung: 'Verfasse eine Stellungnahme mit mindestens 80 Wörtern. Setze den Konjunktiv II gezielt ein — für Hypothesen, für den Rückblick und für vorsichtige Einschätzungen.',
      aufgabe: 'In einem Online-Magazin wird das Essayfragment unter der Frage „Lieber etwas wagen als später etwas bereuen?“ diskutiert. Schreib einen Beitrag, in dem du Stellung nimmst.',
      punkte: [
        'Gib die zentrale These des Essayfragments knapp mit eigenen Worten wieder.',
        'Bezieh Stellung und stütze deine Position mit einem Beispiel, das eine irreale Bedingung in der Vergangenheit enthält.',
        'Formuliere eine vorsichtige Einschränkung deiner Position, etwa mit „dürfte“ oder „Man könnte einwenden, dass …“.',
      ],
      minWoerter: 80,
      beispielLoesung: 'Das Essayfragment vertritt die These, dass wir verpasste Gelegenheiten langfristig stärker bereuen als Fehlentscheidungen, warnt aber davor, daraus eine simple Lebensregel abzuleiten.\nIch teile diese Einschätzung weitgehend. Hätte ich mich mit zwanzig nicht getraut, für ein Jahr nach Leipzig zu gehen, würde ich heute kaum fließend Deutsch sprechen — und vermutlich würde ich mein Zögern bis heute bereuen. Wer nie etwas wagt, geht zwar kein Risiko ein, versäumt aber womöglich die wichtigsten Erfahrungen seines Lebens.\nMan könnte allerdings einwenden, dass sich nicht jeder Risiken leisten kann: Für jemanden mit Familie und wenig Rücklagen dürfte ein Neuanfang weit schwerer wiegen. Mut ist also wichtig — allerdings unter der Voraussetzung, dass man die möglichen Folgen realistisch abgewogen hat.',
    },
  ],
}
