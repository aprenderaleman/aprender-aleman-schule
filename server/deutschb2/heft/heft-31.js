// Übungsheft B2 — Lektion 31: Sprechen Teil 1 — Vortrag + Nachfragen
export default {
  lektion: 31,
  titel: 'Übungsheft — Vortrag + Nachfragen',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Signalwörter, feste Verbindungen und Satzbau im Vortrag: Wähle die passende Lösung.',
      items: [
        {
          typ: 'luecke',
          text: 'Zum Schluss möchte ich ein kurzes Fazit {1}. Zusammenfassend kann man sagen, {2} beide Lösungen Vorteile haben.',
          bank: ['ziehen', 'machen', 'dass', 'ob'],
          loesungen: { 1: 'ziehen', 2: 'dass' },
        },
        {
          typ: 'luecke',
          text: 'Ich komme jetzt {1} nächsten Punkt. Danach gehe ich kurz {2} die Nachteile ein.',
          bank: ['zum', 'im', 'auf', 'über'],
          loesungen: { 1: 'zum', 2: 'auf' },
        },
        {
          typ: 'luecke',
          text: 'Gute Frage! Wenn ich dich richtig {1}, fragst du, {2} ich jeden Tag Sport mache.',
          bank: ['verstehe', 'kenne', 'ob', 'dass'],
          loesungen: { 1: 'verstehe', 2: 'ob' },
        },
        {
          typ: 'mc',
          frage: 'Darf ich Ihnen zu Ihrem Vortrag noch eine Frage ___?',
          optionen: ['machen', 'stellen', 'geben'],
          loesung: 1,
        },
        {
          typ: 'mc',
          frage: '___ ist das Leben in der Stadt praktisch, andererseits ist es oft laut und teuer.',
          optionen: ['Einerseits', 'Sowohl', 'Entweder'],
          loesung: 0,
        },
        {
          typ: 'mc',
          frage: 'Mit welchem Satz leitest du am Ende des Vortrags zu den Nachfragen über?',
          optionen: ['Ich möchte heute über dieses Thema sprechen.', 'Ich komme jetzt zum nächsten Punkt.', 'Vielen Dank — gibt es noch Fragen?'],
          loesung: 2,
        },
        {
          typ: 'zuordnen',
          links: ['Ich möchte heute über … sprechen.', 'Ein Beispiel dafür ist …', 'Ich komme jetzt zum nächsten Punkt.', 'Zusammenfassend kann man sagen, …', 'Wie ist das eigentlich bei dir?'],
          rechts: ['Einleitung', 'eigene Erfahrung', 'Übergang', 'Fazit', 'Frage zurückgeben'],
          loesung: {
            'Ich möchte heute über … sprechen.': 'Einleitung',
            'Ein Beispiel dafür ist …': 'eigene Erfahrung',
            'Ich komme jetzt zum nächsten Punkt.': 'Übergang',
            'Zusammenfassend kann man sagen, …': 'Fazit',
            'Wie ist das eigentlich bei dir?': 'Frage zurückgeben',
          },
        },
        {
          typ: 'korrektur',
          optionen: ['Meiner Meinung nach das Einkaufen online ist bequemer.', 'Meiner Meinung nach ist das Einkaufen online bequemer.'],
          loesung: 1,
          warum: '*Meiner Meinung nach* ocupa la posición 1: el verbo conjugado va **justo después** (inversión).',
        },
        {
          typ: 'korrektur',
          optionen: ['Ich habe damit letzten Monat eine gute Erfahrung gemacht.', 'Ich habe damit letzten Monat eine gute Erfahrung gehabt.'],
          loesung: 0,
          warum: '«Tener una experiencia» se dice **eine Erfahrung machen**, no *haben*.',
        },
        {
          typ: 'satzbau',
          woerter: ['davon', 'man', 'Es', 'Zeit', 'ab', 'hat', 'wie', 'hängt', 'viel'],
          loesung: 'Es hängt davon ab, wie viel Zeit man hat.',
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies den Forumsbeitrag und löse die Aufgaben.',
      textTitel: 'Forum „Deutsch lernen“: Mein Vortrag in der mündlichen Prüfung',
      text: 'Letzte Woche hatte ich meine mündliche B2-Prüfung, und ich möchte kurz von meinen Erfahrungen berichten. Mein Thema war „Homeoffice — Vor- und Nachteile“. In der Vorbereitung habe ich leider den Fehler gemacht, ganze Sätze auf meinen Zettel zu schreiben. Als ich angefangen habe, habe ich deshalb fast nur abgelesen und kaum Blickkontakt gehalten. Nach etwa einer Minute habe ich das gemerkt, den Zettel zur Seite gelegt und frei weitergesprochen. Das hat überraschend gut funktioniert, denn die Struktur hatte ich im Kopf: Einleitung, Vorteile, Nachteile, Fazit. Am meisten geholfen haben mir aber meine eigenen Beispiele. Ich arbeite seit zwei Jahren zweimal pro Woche zu Hause und konnte viel aus eigener Erfahrung erzählen. Bei den Nachfragen war ich zuerst nervös, doch mit einem ruhigen „Gute Frage!“ habe ich Zeit gewonnen. Mein Tipp für alle: Schreibt nur Stichwörter auf und übt den Vortrag mehrmals laut mit Timer. — Kemal',
      items: [
        {
          typ: 'mc',
          frage: 'Welchen Fehler hat Kemal bei der Vorbereitung gemacht?',
          optionen: ['Er hat zu wenige Beispiele gesammelt.', 'Er hat ganze Sätze auf den Zettel geschrieben.', 'Er hat das Thema falsch verstanden.'],
          loesung: 1,
        },
        { typ: 'rf', aussage: 'Kemal hat den ganzen Vortrag vom Zettel abgelesen.', loesung: false },
        {
          typ: 'mc',
          frage: 'Was hat Kemal laut Beitrag am meisten geholfen?',
          optionen: ['die Fragen seines Partners', 'ein Vortragskurs vor der Prüfung', 'seine eigenen Beispiele aus dem Arbeitsalltag'],
          loesung: 2,
        },
        { typ: 'rf', aussage: 'Kemal empfiehlt, den Vortrag mehrmals laut zu üben.', loesung: true },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'text',
      titel: 'Schreiben',
      anweisung: 'Schreib einen Forumsbeitrag mit mindestens 60 Wörtern und geh auf alle drei Punkte ein.',
      aufgabe: 'In einem Forum für Deutschlernende schreibt Valentina: „Ich habe große Angst vor dem Vortrag in der mündlichen Prüfung. Wie bereitet ihr euch darauf vor?“ Antworte ihr.',
      punkte: [
        'Beschreibe, wie du deinen Vortrag aufbaust.',
        'Berichte von einer eigenen Erfahrung mit einer Präsentation.',
        'Gib Valentina einen konkreten Tipp für die Nachfragen.',
      ],
      minWoerter: 60,
      beispielLoesung: 'Hallo Valentina, ich kenne das Gefühl gut! Ich baue meinen Vortrag immer gleich auf: eine kurze Einleitung mit dem Plan, dann zwei Punkte mit je einem Beispiel und am Ende ein Fazit. Letztes Jahr habe ich im Sprachkurs eine Präsentation über das Wohnen in der Stadt gehalten. Zuerst war ich sehr nervös, aber weil ich nur Stichwörter auf dem Zettel hatte, konnte ich frei sprechen und Blickkontakt halten. Mein Tipp für die Nachfragen: Sag zuerst „Gute Frage!“, dann hast du ein paar Sekunden Zeit. Antworte kurz und stell am Ende eine Gegenfrage. Viel Erfolg! Liebe Grüße, Hamid',
    },
  ],
}
