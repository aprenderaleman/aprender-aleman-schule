// Übungsheft B1 — Lektion 01: Das Zertifikat B1 im Überblick
export default {
  lektion: 1,
  titel: 'Übungsheft — Die Prüfung im Überblick',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Wähle die richtige Form oder ergänze die Lücken.',
      items: [
        { typ: 'mc', frage: 'Ich habe alle vier Module ___.', optionen: ['bestehen', 'bestanden', 'bestand'], loesung: 1 },
        {
          typ: 'luecke',
          text: 'Die {1} für die Prüfung mache ich online. Dann wähle ich einen {2} im Juni.',
          bank: ['Anmeldung', 'Termin', 'Zeugnis', 'Ergebnis'],
          loesungen: { 1: 'Anmeldung', 2: 'Termin' },
        },
        {
          typ: 'luecke',
          text: 'Nach sechs Wochen sehe ich mein {1} online. Danach hole ich das {2} im Prüfungszentrum ab.',
          bank: ['Ergebnis', 'Zeugnis', 'Modul', 'Aufgabe'],
          loesungen: { 1: 'Ergebnis', 2: 'Zeugnis' },
        },
        { typ: 'mc', frage: 'Ein Modul ist bestanden, ___ du mindestens 60 Punkte hast.', optionen: ['denn', 'aber', 'wenn'], loesung: 2 },
        {
          typ: 'mc',
          frage: 'Ich habe das Modul Schreiben nicht bestanden. ___ wiederhole ich es im Herbst.',
          optionen: ['Weil', 'Deshalb', 'Denn'],
          loesung: 1,
        },
        { typ: 'satzbau', woerter: ['ab', 'Modul', 'im', 'Ich', 'Sprechen', 'Mai', 'lege', 'das'], loesung: 'Ich lege das Modul Sprechen im Mai ab.', alt: ['Ich lege im Mai das Modul Sprechen ab.'] },
        { typ: 'satzbau', woerter: ['in', 'Prüfungszentrum', 'suchen', 'Nähe', 'ein', 'der', 'Wir'], loesung: 'Wir suchen ein Prüfungszentrum in der Nähe.', alt: ['Wir suchen in der Nähe ein Prüfungszentrum.'] },
        {
          typ: 'zuordnen',
          links: ['Lesen', 'Hören', 'Schreiben', 'Sprechen'],
          rechts: ['Anzeigen und E-Mails verstehen', 'eine Durchsage verstehen', 'eine E-Mail mit ca. 80 Wörtern schreiben', 'mit einem Partner etwas planen'],
          loesung: {
            'Lesen': 'Anzeigen und E-Mails verstehen',
            'Hören': 'eine Durchsage verstehen',
            'Schreiben': 'eine E-Mail mit ca. 80 Wörtern schreiben',
            'Sprechen': 'mit einem Partner etwas planen',
          },
        },
        {
          typ: 'korrektur',
          optionen: ['Deshalb ich lerne jeden Tag.', 'Deshalb lerne ich jeden Tag.'],
          loesung: 1,
          warum: 'Después de **deshalb** viene el **verbo** y luego el sujeto: *Deshalb lerne ich…* ~~(deshalb ocupa la posición 1; el verbo sigue en la 2.)~~',
        },
        {
          typ: 'korrektur',
          optionen: ['Ich mache die Prüfung, weil ich in Deutschland arbeiten will.', 'Ich mache die Prüfung, weil ich will in Deutschland arbeiten.'],
          loesung: 0,
          warum: 'Con **weil** el verbo conjugado va **al final**: *…weil ich in Deutschland arbeiten **will**.* En español no cambia el orden; en alemán sí.',
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies den Beitrag im Forum und löse die Aufgaben.',
      textTitel: 'Forum „Deutsch lernen“ — Beitrag von Tomás',
      text: 'Hallo zusammen! Ich habe letzte Woche mein Ergebnis bekommen und bin sehr glücklich. Lesen, Hören und Sprechen habe ich bestanden. Nur im Modul Schreiben hatte ich 52 Punkte – das sind acht Punkte zu wenig. Zuerst war ich traurig. Aber dann habe ich gelesen, dass ich nur dieses eine Modul wiederholen muss. Die Anmeldung habe ich schon online gemacht, und der neue Termin ist im Oktober. Bis dahin schreibe ich jede Woche zwei E-Mails und zeige sie meiner Lehrerin. Mein Tipp für euch: Lest jede Aufgabe genau! Ich habe in Teil 3 die Anrede vergessen. Wenn ich im Oktober bestehe, bekomme ich endlich mein Zeugnis. Drückt mir die Daumen! Tomás',
      items: [
        { typ: 'rf', aussage: 'Tomás hat drei Module bestanden.', loesung: true },
        { typ: 'rf', aussage: 'Tomás muss die ganze Prüfung wiederholen.', loesung: false },
        {
          typ: 'mc',
          frage: 'Wann macht Tomás das Modul Schreiben noch einmal?',
          optionen: ['nächste Woche', 'im Oktober', 'im Juni'],
          loesung: 1,
        },
        {
          typ: 'mc',
          frage: 'Welchen Fehler hat Tomás gemacht?',
          optionen: ['Er hat zu langsam getippt.', 'Er hat die Anmeldung vergessen.', 'Er hat die Anrede vergessen.'],
          loesung: 2,
        },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'text',
      titel: 'Schreiben',
      anweisung: 'Schreib eine E-Mail mit mindestens 40 Wörtern. Denk an Anrede und Gruß.',
      aufgabe: 'Deine Freundin Lucía möchte auch die B1-Prüfung machen. Sie bittet dich um Informationen. Schreib ihr eine E-Mail.',
      punkte: [
        'Wie viele Module hat die Prüfung, und wann besteht man ein Modul?',
        'Wie funktioniert die Anmeldung?',
        'Gib ihr einen Tipp für die Prüfung.',
      ],
      minWoerter: 40,
      beispielLoesung: 'Liebe Lucía,\ntoll, dass du auch die Prüfung machen willst! Sie hat vier Module: Lesen, Hören, Schreiben und Sprechen. Ein Modul bestehst du ab 60 von 100 Punkten. Die Anmeldung machst du online: Du wählst die Module und einen Termin. Mein Tipp: Lies jede Aufgabe genau, denn so machst du weniger Fehler.\nViele Grüße\nAhmed',
    },
  ],
}
