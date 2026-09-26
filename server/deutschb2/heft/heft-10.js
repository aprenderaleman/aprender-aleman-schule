// Übungsheft B2 — Lektion 10: Vorgangs- & Zustandspassiv
export default {
  lektion: 10,
  titel: 'Übungsheft — Vorgangs- & Zustandspassiv',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Prozess oder Resultat? Entscheide dich für das passende Passiv und achte auf die Zeitform.',
      items: [
        {
          typ: 'luecke',
          text: 'Die alte Brücke am Stadtrand {1} letztes Jahr abgerissen. Seit März {2} dort eine neue gebaut, die im Herbst fertig sein soll.',
          bank: ['wurde', 'wird', 'hat', 'ist'],
          loesungen: { 1: 'wurde', 2: 'wird' },
        },
        {
          typ: 'luecke',
          text: 'Der Vertrag ist gestern vom Chef unterschrieben {1}. Heute Nachmittag {2} er an die Kundin geschickt.',
          bank: ['worden', 'geworden', 'wird', 'hat'],
          loesungen: { 1: 'worden', 2: 'wird' },
        },
        {
          typ: 'luecke',
          text: 'Das Dorf wurde {1} das Hochwasser schwer beschädigt. Die Aufräumarbeiten werden {2} der Feuerwehr koordiniert.',
          bank: ['durch', 'von', 'mit', 'vom'],
          loesungen: { 1: 'durch', 2: 'von' },
        },
        { typ: 'mc', frage: 'Die Kantine ___ wegen Renovierung noch bis Ende Mai geschlossen.', optionen: ['wird', 'ist', 'wurde'], loesung: 1 },
        { typ: 'mc', frage: 'In diesem Restaurant ___ nur mit Karte bezahlt.', optionen: ['wird', 'ist', 'hat'], loesung: 0 },
        { typ: 'mc', frage: 'Die Mitarbeitenden ___ gestern über die neuen Regeln informiert.', optionen: ['werden', 'sind', 'wurden'], loesung: 2 },
        {
          typ: 'korrektur',
          optionen: ['In dieser Praxis spricht sich auch Spanisch.', 'In dieser Praxis wird auch Spanisch gesprochen.'],
          loesung: 1,
          warum: 'El «se» impersonal («aquí se habla…») se traduce con **Passiv** o con *man*, nunca con *sich*.',
        },
        {
          typ: 'korrektur',
          optionen: ['Das Rathaus ist 1990 renoviert worden.', 'Das Rathaus ist 1990 renoviert geworden.'],
          loesung: 0,
          warum: 'En el Perfekt del Vorgangspassiv el participio de *werden* es **worden**; *geworden* solo existe con el significado de «llegar a ser».',
        },
        {
          typ: 'korrektur',
          optionen: ['Meine Schwester wurde geboren 1995 in Spanien.', 'Meine Schwester wurde 1995 in Spanien geboren.'],
          loesung: 1,
          warum: 'El participio cierra la **Satzklammer** y va al final, aunque en español digas «nació en 1995 en España».',
        },
        {
          typ: 'satzbau',
          woerter: ['bezahlt', 'Ich', 'Rechnung', 'ist', 'nicht', 'ob', 'worden', 'die', 'weiß'],
          loesung: 'Ich weiß nicht, ob die Rechnung bezahlt worden ist.',
          alt: ['Ob die Rechnung bezahlt worden ist, weiß ich nicht.'],
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies den Forumsbeitrag. Entscheide, welche Aussage dem Text entspricht.',
      textTitel: 'Forumsbeitrag: Baustelle vor der Haustür',
      text: 'Seit drei Monaten wird unser Wohnhaus in der Lindenstraße saniert, und ich möchte hier meine Erfahrungen teilen. Im Februar wurden wir per Brief informiert, dass die Fenster ausgetauscht und die Fassade gedämmt werden. Was nicht im Brief stand: Die Arbeiten beginnen jeden Morgen um sieben Uhr. Inzwischen sind alle Fenster eingebaut, und die Wohnung ist tatsächlich viel wärmer. Das Treppenhaus dagegen wird erst im Sommer gestrichen. Ärgerlich war vor allem der Wasserschaden im April: Durch ein Loch im Dach ist Regenwasser in zwei Wohnungen gelaufen. Der Schaden ist zwar inzwischen repariert worden, aber die betroffenen Familien mussten eine Woche im Hotel wohnen. Die Hotelkosten wurden von der Hausverwaltung übernommen. Mein Tipp für alle, bei denen eine Sanierung geplant ist: Fragt früh nach einem genauen Zeitplan und dokumentiert Schäden sofort mit Fotos. In unserem Haus soll übrigens auch die Miete steigen — darüber wird beim nächsten Mieterabend diskutiert. Jonas, Lindenstraße 12',
      items: [
        { typ: 'rf', aussage: 'Im Brief wurde mitgeteilt, dass die Arbeiten jeden Morgen um sieben Uhr beginnen.', loesung: false },
        {
          typ: 'mc',
          frage: 'Was gilt für die Fenster?',
          optionen: ['Sie werden erst im Sommer ausgetauscht.', 'Sie sind bereits alle eingebaut.', 'Sie wurden durch den Regen beschädigt.'],
          loesung: 1,
        },
        { typ: 'rf', aussage: 'Die Hausverwaltung hat die Hotelkosten der betroffenen Familien bezahlt.', loesung: true },
        {
          typ: 'mc',
          frage: 'Worüber wird beim nächsten Mieterabend gesprochen?',
          optionen: ['über den Zeitplan der Arbeiten', 'über den Wasserschaden im April', 'über die geplante Mieterhöhung'],
          loesung: 2,
        },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'text',
      titel: 'Schreiben',
      anweisung: 'Schreib eine Beschwerde mit mindestens 60 Wörtern. Denk an Betreff, Anrede und Gruß.',
      aufgabe: 'In deinem Wohnhaus wird seit zwei Monaten renoviert. Die Hausverwaltung Brandt hatte versprochen, dass die Arbeiten Ende Mai abgeschlossen sein werden. Schreib der Hausverwaltung eine E-Mail und beschwere dich.',
      punkte: [
        'Beschreibe, was bis jetzt erledigt und was noch nicht gemacht worden ist.',
        'Nenne ein konkretes Problem, das durch die Arbeiten entstanden ist.',
        'Fordere eine Lösung und einen verbindlichen Termin.',
      ],
      minWoerter: 60,
      beispielLoesung: 'Betreff: Verzögerung der Renovierungsarbeiten in der Gartenstraße 8 — Sehr geehrte Damen und Herren, seit zwei Monaten wird unser Haus renoviert. Laut Ihrem Schreiben sollten die Arbeiten Ende Mai abgeschlossen sein. Inzwischen ist zwar das Dach repariert, aber die Fenster sind noch nicht ausgetauscht worden, und der Aufzug ist seit drei Wochen gesperrt. Außerdem wurde mein Balkon durch herabfallenden Putz beschädigt, und bis heute wurde der Schaden nicht begutachtet. Ich bitte Sie daher, den Schaden umgehend prüfen zu lassen und mir bis Ende der Woche einen verbindlichen Termin für den Abschluss der Arbeiten zu nennen. Mit freundlichen Grüßen, Leonie Hartmann',
    },
  ],
}
