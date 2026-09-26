// Übungsheft B1 — Lektion 35: Wohnen & Alltag
export default {
  lektion: 35,
  titel: 'Übungsheft — Wohnen & Alltag',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Übe den Wortschatz rund ums Wohnen. Denk an Wo? (Dativ) und Wohin? (Akkusativ).',
      items: [
        { typ: 'mc', frage: 'Wir stellen den Schrank ___ Schlafzimmer.', optionen: ['im', 'ins', 'in der'], loesung: 1 },
        { typ: 'mc', frage: 'Der Schrank steht jetzt ___ Schlafzimmer.', optionen: ['ins', 'in die', 'im'], loesung: 2 },
        {
          typ: 'luecke',
          text: 'Es ist schon spät. Ich gehe jetzt {1} Hause. Morgen bleibe ich den ganzen Tag {2} Hause.',
          bank: ['nach', 'zu', 'in', 'bei'],
          loesungen: { 1: 'nach', 2: 'zu' },
        },
        {
          typ: 'zuordnen',
          links: ['3 ZKB', 'NK', 'KM', 'Kaltmiete + Nebenkosten', 'Geld am Anfang als Sicherheit'],
          rechts: ['3 Zimmer, Küche, Bad', 'die Nebenkosten', 'die Kaltmiete', 'die Warmmiete', 'die Kaution'],
          loesung: {
            '3 ZKB': '3 Zimmer, Küche, Bad',
            'NK': 'die Nebenkosten',
            'KM': 'die Kaltmiete',
            'Kaltmiete + Nebenkosten': 'die Warmmiete',
            'Geld am Anfang als Sicherheit': 'die Kaution',
          },
        },
        {
          typ: 'luecke',
          text: 'Am Ersten des Monats {1} wir die Miete. Nächsten Monat {2} wir in eine größere Wohnung {3}.',
          bank: ['bezahlen', 'ziehen', 'um', 'auf', 'räumen'],
          loesungen: { 1: 'bezahlen', 2: 'ziehen', 3: 'um' },
        },
        { typ: 'mc', frage: 'Die Heizung ist kaputt. Ich schreibe ___ eine E-Mail.', optionen: ['dem Vermieter', 'den Vermieter', 'der Vermieter'], loesung: 0 },
        { typ: 'satzbau', woerter: ['ziehen', 'Monat', 'Wir', 'um', 'größere', 'in', 'nächsten', 'Wohnung', 'eine'], loesung: 'Wir ziehen nächsten Monat in eine größere Wohnung um.' },
        {
          typ: 'korrektur',
          optionen: ['Ich gehe zu Hause.', 'Ich gehe nach Hause.'],
          loesung: 1,
          warum: 'Con movimiento (**Wohin?**) se dice **nach Hause**; *zu Hause* es solo «estar en casa» (**Wo?**). En español ambos son «casa».',
        },
        { typ: 'satzbau', woerter: ['Musik', 'bitte', 'Könnten', 'leiser', 'die', 'Sie', 'machen'], loesung: 'Könnten Sie bitte die Musik leiser machen?', alt: ['Könnten Sie die Musik bitte leiser machen?'] },
        {
          typ: 'korrektur',
          optionen: ['Ich lege das Buch auf den Tisch.', 'Ich lege das Buch auf dem Tisch.'],
          loesung: 0,
          warum: '*legen* expresa movimiento (**Wohin?**) → **Akkusativ: auf den Tisch**. El dativo va con *liegen*: *Das Buch liegt auf dem Tisch.*',
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies den Forumsbeitrag. Löse dann die vier Aufgaben.',
      textTitel: 'Forum „Wohnen“: Ärger mit den Nachbarn?',
      text: 'Beitrag von Milena, 29: Vor drei Monaten bin ich in eine Zweizimmerwohnung im vierten Stock umgezogen. Die Wohnung ist hell und hat einen kleinen Balkon, und die Miete ist für die Stadt nicht zu hoch. Leider gibt es ein Problem: Der Nachbar unter mir spielt fast jeden Abend bis Mitternacht laute Musik. Nach der Hausordnung beginnt die Ruhezeit aber schon um 22 Uhr. Zuerst habe ich einen freundlichen Zettel an seine Tür gehängt, aber das hat nichts geändert. Letzte Woche habe ich dann im Treppenhaus mit ihm gesprochen. Er war überrascht und hat gesagt, dass er die Musik ab jetzt leiser macht. Seitdem ist es wirklich ruhiger. Mein Tipp: Sprecht zuerst mit euren Nachbarn, bevor ihr dem Vermieter schreibt!',
      items: [
        { typ: 'rf', aussage: 'Milena wohnt schon seit vielen Jahren in dieser Wohnung.', loesung: false },
        {
          typ: 'mc',
          frage: 'Was ist Milenas Problem?',
          optionen: ['Die Miete ist zu hoch.', 'Der Nachbar ist abends zu laut.', 'Die Wohnung hat keinen Balkon.'],
          loesung: 1,
        },
        {
          typ: 'mc',
          frage: 'Was hat Milena zuerst gemacht?',
          optionen: ['Sie hat dem Vermieter geschrieben.', 'Sie hat im Treppenhaus mit dem Nachbarn gesprochen.', 'Sie hat einen Zettel an seine Tür gehängt.'],
          loesung: 2,
        },
        { typ: 'rf', aussage: 'Nach dem Gespräch ist es im Haus ruhiger.', loesung: true },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'text',
      titel: 'Schreiben',
      anweisung: 'Schreib eine E-Mail mit mindestens 40 Wörtern. Denk an Anrede und Gruß.',
      aufgabe: 'Du ziehst nächsten Monat um. Schreib deinem Freund Jonas und bitte ihn um Hilfe beim Umzug.',
      punkte: [
        'Wann ziehst du um, und wohin?',
        'Wie ist die neue Wohnung?',
        'Wobei soll Jonas helfen, und was bekommt er dafür?',
      ],
      minWoerter: 40,
      beispielLoesung: 'Lieber Jonas,\nich habe endlich eine neue Wohnung gefunden! Am 15. Mai ziehe ich nach Lindenau um. Die Wohnung hat drei Zimmer, eine große Küche und einen Balkon. Leider liegt sie im dritten Stock, und es gibt keinen Aufzug. Kannst du mir am Samstag beim Tragen helfen? Wir müssen auch den Schrank im Schlafzimmer aufbauen. Danach gibt es natürlich Pizza für alle!\nLiebe Grüße\nFatima',
    },
  ],
}
