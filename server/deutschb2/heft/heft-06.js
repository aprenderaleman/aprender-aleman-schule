// Übungsheft B2 — Lektion 06: Zweiteilige Konnektoren
export default {
  lektion: 6,
  titel: 'Übungsheft — Zweiteilige Konnektoren',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Ergänze das passende Konnektorenpaar. Achte auf die Bedeutung und bei je … desto auf die Verbstellung.',
      items: [
        {
          typ: 'luecke',
          text: 'Die neue Stelle ist ideal für mich: Sie bietet {1} ein gutes Gehalt {2} flexible Arbeitszeiten. In meiner alten Firma dagegen hatte ich {3} Aufstiegschancen {4} die Möglichkeit, im Homeoffice zu arbeiten.',
          bank: ['sowohl', 'als auch', 'weder', 'noch', 'entweder', 'oder'],
          loesungen: { 1: 'sowohl', 2: 'als auch', 3: 'weder', 4: 'noch' },
        },
        {
          typ: 'luecke',
          text: 'Die Wohnung ist {1} teuer, {2} die Lage ist perfekt. {3} früher wir den Vertrag unterschreiben, {4} schneller können wir einziehen.',
          bank: ['zwar', 'aber', 'Je', 'desto', 'weder', 'sondern'],
          loesungen: { 1: 'zwar', 2: 'aber', 3: 'Je', 4: 'desto' },
        },
        {
          typ: 'luecke',
          text: 'Homeoffice hat zwei Seiten: {1} spart man den Arbeitsweg, {2} fehlt der Austausch mit dem Team. Für unsere Abteilung war der Wechsel {3} eine organisatorische, {4} auch eine kulturelle Herausforderung.',
          bank: ['Einerseits', 'andererseits', 'nicht nur', 'sondern', 'sowohl', 'weder'],
          loesungen: { 1: 'Einerseits', 2: 'andererseits', 3: 'nicht nur', 4: 'sondern' },
        },
        { typ: 'mc', frage: 'Die Veranstaltung richtet sich ___ an Anfänger als auch an Fortgeschrittene.', optionen: ['weder', 'nicht nur', 'sowohl'], loesung: 2 },
        {
          typ: 'mc',
          frage: 'Je mehr Menschen mit dem Rad fahren, …',
          optionen: ['desto weniger Staus es gibt.', 'desto weniger Staus gibt es.', 'desto es gibt weniger Staus.'],
          loesung: 1,
        },
        {
          typ: 'mc',
          frage: '___ wir nehmen den letzten Zug, ___ wir übernachten bei meiner Schwester — beides zusammen geht nicht.',
          optionen: ['Entweder … oder', 'Sowohl … als auch', 'Weder … noch'],
          loesung: 0,
        },
        {
          typ: 'korrektur',
          optionen: ['Ich habe weder Zeit noch kein Geld.', 'Ich habe weder Zeit noch Geld.'],
          loesung: 1,
          warum: '*weder … noch* ya es negativo: no se añade *kein* ni *nicht*. En español sí se dice «no tengo ni tiempo ni dinero».',
        },
        {
          typ: 'korrektur',
          optionen: ['Je mehr ich lese, desto besser verstehe ich die Grammatik.', 'Je mehr ich lese, desto besser ich verstehe die Grammatik.'],
          loesung: 0,
          warum: 'Tras *desto* + comparativo viene **enseguida el verbo** (inversión). En español «cuanto más leo, mejor entiendo» no marca este orden.',
        },
        {
          typ: 'korrektur',
          optionen: ['Er spricht nicht nur Englisch, aber auch Französisch.', 'Er spricht nicht nur Englisch, sondern auch Französisch.'],
          loesung: 1,
          warum: '*nicht nur* se cierra siempre con **sondern auch** («sino también»), nunca con *aber auch*.',
        },
        {
          typ: 'satzbau',
          woerter: ['wird', 'Je', 'dein', 'liest', 'desto', 'du', 'größer', 'Wortschatz', 'mehr'],
          loesung: 'Je mehr du liest, desto größer wird dein Wortschatz.',
          alt: ['Dein Wortschatz wird desto größer, je mehr du liest.'],
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies den Leserbrief und löse die vier Aufgaben.',
      textTitel: 'Leserbrief: Handyverbot an Schulen?',
      text: 'Zu Ihrem Artikel „Schulen sollen handyfrei werden“ möchte ich als Mutter zweier Schulkinder Stellung nehmen. Ein Verbot hat zwar gute Gründe, aber es löst das Problem nicht. Einerseits lenken Smartphones im Unterricht ab, andererseits gehören sie längst zum Alltag der Jugendlichen. An der Schule meiner Tochter sind Handys sowohl im Unterricht als auch in den Pausen verboten. Das Ergebnis: Die Kinder lernen weder einen verantwortungsvollen Umgang mit den Geräten, noch sprechen sie offen über Probleme wie Cybermobbing. Je strenger die Regeln sind, desto heimlicher nutzen sie ihre Handys. Mein Sohn besucht dagegen eine Schule, an der die Geräte nicht nur erlaubt sind, sondern auch gezielt im Unterricht eingesetzt werden, etwa für Recherchen. Dort legen Lehrkräfte und Klassen die Regeln gemeinsam fest. Entweder wir bringen unseren Kindern bei, vernünftig mit dem Smartphone umzugehen, oder wir überlassen diese Aufgabe den sozialen Netzwerken. Ich spreche mich klar für den ersten Weg aus. (Miriam Hoffmann)',
      items: [
        {
          typ: 'mc',
          frage: 'Welche Position vertritt Miriam Hoffmann?',
          optionen: [
            'Sie fordert ein komplettes Handyverbot an allen Schulen.',
            'Sie ist gegen ein Verbot und möchte, dass Kinder den Umgang mit dem Handy lernen.',
            'Sie findet, dass Handys im Unterricht keine Rolle spielen sollten.',
          ],
          loesung: 1,
        },
        { typ: 'rf', aussage: 'An der Schule der Tochter dürfen die Kinder ihr Handy in den Pausen benutzen.', loesung: false },
        { typ: 'rf', aussage: 'An der Schule des Sohnes bestimmen Lehrkräfte und Klassen die Regeln gemeinsam.', loesung: true },
        {
          typ: 'mc',
          frage: 'Was passiert laut Miriam Hoffmann, wenn die Regeln sehr streng sind?',
          optionen: ['Die Kinder benutzen ihr Handy heimlich.', 'Die Kinder sprechen offener über Cybermobbing.', 'Die Kinder konzentrieren sich besser im Unterricht.'],
          loesung: 0,
        },
      ],
    },
    {
      typ: 'hoeren',
      titel: 'Hören',
      anweisung: 'Du hörst einen kurzen Vortrag über ein Projekt in der Stadt. Entscheide bei jeder Aufgabe, welche Lösung dem Gehörten entspricht.',
      audio: {
        transcript: 'Guten Abend, meine Damen und Herren. Ich möchte Ihnen heute unseren Gemeinschaftsgarten in Leipzig vorstellen. Vor sechs Jahren war das Grundstück weder ein Park noch ein Spielplatz, sondern ein leerer Parkplatz. Heute pflanzen dort rund neunzig Menschen sowohl Gemüse als auch Blumen an. Der Garten ist nicht nur ein Ort für Hobbygärtner, sondern auch ein Treffpunkt für die Nachbarschaft. Einerseits kommen Familien mit Kindern, andererseits viele ältere Menschen, die allein leben. Zwar gehört das Grundstück der Stadt, aber wir zahlen keine Miete. Dafür pflegen wir die Fläche selbst und halten sie für alle offen. Dabei haben wir etwas Interessantes beobachtet. Je mehr Menschen mitmachen, desto weniger wird im Garten zerstört oder gestohlen. Ein Problem bleibt allerdings das Wasser. Im Sommer reicht der Regen nicht, deshalb brauchen wir einen eigenen Brunnen. Entweder wir sammeln bis zum Herbst genug Spenden, oder wir müssen die Zahl der Beete verringern. Wenn Sie uns unterstützen möchten, sprechen Sie mich gern nach dem Vortrag an.',
      },
      items: [
        { typ: 'mc', frage: 'Was befand sich früher auf dem Grundstück?', optionen: ['ein Park', 'ein Spielplatz', 'ein Parkplatz'], loesung: 2 },
        { typ: 'rf', aussage: 'Im Garten machen ungefähr neunzehn Personen mit.', loesung: false },
        { typ: 'rf', aussage: 'Für das Grundstück müssen die Gärtnerinnen und Gärtner keine Miete zahlen.', loesung: true },
        {
          typ: 'mc',
          frage: 'Was passiert, wenn bis zum Herbst nicht genug Spenden zusammenkommen?',
          optionen: ['Der Garten muss schließen.', 'Es gibt in Zukunft weniger Beete.', 'Die Stadt bezahlt den Brunnen.'],
          loesung: 1,
        },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'text',
      titel: 'Schreiben',
      anweisung: 'Schreib eine Beschwerde-E-Mail mit mindestens 60 Wörtern. Verwende mindestens drei verschiedene zweiteilige Konnektoren.',
      aufgabe: 'In deinem Wohnhaus gibt es seit Wochen Probleme mit dem Aufzug und der Heizung. Mehrere Anrufe bei der Hausverwaltung Kranich & Partner haben nichts geändert. Schreib der Hausverwaltung eine Beschwerde.',
      punkte: [
        'Beschreibe die Probleme (weder … noch oder nicht nur … sondern auch).',
        'Erkläre die Folgen für dich und deine Nachbarn (je … desto).',
        'Fordere eine Lösung und nenne eine Frist (entweder … oder).',
      ],
      minWoerter: 60,
      beispielLoesung: 'Sehr geehrte Damen und Herren, ich wohne seit drei Jahren in der Gartenstraße 14 und muss mich leider über den Zustand des Hauses beschweren. Seit Anfang November funktionieren weder der Aufzug noch die Heizung zuverlässig. Das ist nicht nur unangenehm, sondern auch gefährlich, denn eine ältere Nachbarin kann die Treppen kaum noch steigen. Je länger die Reparatur dauert, desto mehr Bewohner werden krank. Ich habe Sie bereits zweimal telefonisch informiert, bisher ohne Ergebnis. Entweder Sie schicken bis zum 20. November einen Techniker, oder ich werde die Miete mindern. Mit freundlichen Grüßen, Elif Demir',
    },
    {
      typ: 'sprechen',
      titel: 'Sprechen',
      anweisung: 'Nimm in einem Diskussionsbeitrag Stellung zu der These. Sprich etwa zwei Minuten und verwende zweiteilige Konnektoren.',
      aufgabe: 'In einer Diskussionsrunde lautet die These: „Wer online einkauft, schadet der eigenen Stadt.“ Formuliere deinen Diskussionsbeitrag von etwa zwei Minuten: Wäge beide Seiten ab und vertritt am Ende einen klaren Standpunkt. Verwende dabei zweiteilige Konnektoren wie einerseits … andererseits, zwar … aber oder je … desto.',
      punkte: [
        'Stell die zwei Seiten des Themas gegenüber (einerseits … andererseits oder zwar … aber).',
        'Nenne ein Argument und geh auf ein Gegenargument ein (nicht nur … sondern auch, sowohl … als auch oder weder … noch).',
        'Formuliere deinen Standpunkt (je … desto oder entweder … oder).',
      ],
      redemittel: ['Einerseits …, andererseits …', 'Das ist zwar richtig, aber …', 'Je mehr …, desto …', 'Ich stimme der These also … zu.'],
      maxSekunden: 120,
      beispielLoesung: 'Zu dieser These habe ich eine klare Meinung, aber ich möchte zuerst beide Seiten zeigen. Einerseits ist das Einkaufen im Internet sehr bequem, andererseits verlieren die Geschäfte in der Innenstadt immer mehr Kunden. Online findet man nicht nur eine größere Auswahl, sondern oft auch niedrigere Preise. Das ist zwar ein starkes Argument, aber es hat Folgen. Wenn ein Laden schließt, verschwinden sowohl Arbeitsplätze als auch ein Stück Leben in der Stadt. In meinem Viertel gibt es inzwischen weder eine Buchhandlung noch ein Schuhgeschäft. Natürlich kann man dagegen sagen, dass Menschen auf dem Land oder mit wenig Zeit auf Onlineshops angewiesen sind. Das stimmt, und niemand muss ganz darauf verzichten. Trotzdem glaube ich: Je mehr wir online bestellen, desto leerer werden unsere Innenstädte. Entweder wir kaufen wenigstens einen Teil unserer Sachen vor Ort, oder wir müssen akzeptieren, dass die Geschäfte verschwinden. Ich stimme der These also weitgehend zu und kaufe Bücher und Kleidung deshalb bewusst im Laden.',
    },
  ],
}
