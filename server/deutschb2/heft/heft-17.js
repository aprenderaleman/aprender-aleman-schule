// Übungsheft B2 — Lektion 17: Präpositionen mit Genitiv
export default {
  lektion: 17,
  titel: 'Übungsheft — Präpositionen mit Genitiv',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Grund, Gegengrund, Zeitraum, Frist oder Ersatz? Wähle die passende Präposition und schreib den Genitiv so, wie er in der Prüfung verlangt wird.',
      items: [
        {
          typ: 'luecke',
          text: 'Wir haben {1} des schlechten Wetters einen langen Spaziergang gemacht. {2} des Spaziergangs hat es dann tatsächlich angefangen zu regnen.',
          bank: ['trotz', 'Während', 'wegen', 'Statt'],
          loesungen: { 1: 'trotz', 2: 'Während' },
        },
        {
          typ: 'luecke',
          text: 'Trotz {1} hohen Kosten hat die Stadt das Hallenbad renoviert. Wegen {2} großen Andrangs öffnet es jetzt schon um sieben Uhr.',
          bank: ['der', 'des', 'dem', 'die'],
          loesungen: { 1: 'der', 2: 'des' },
        },
        {
          typ: 'luecke',
          text: 'Bitte überweisen Sie den Betrag {1} von 14 Tagen. {2} der Öffnungszeiten erreichen Sie uns nur per E-Mail.',
          bank: ['innerhalb', 'Außerhalb', 'statt', 'Innerhalb', 'aufgrund'],
          loesungen: { 1: 'innerhalb', 2: 'Außerhalb' },
        },
        { typ: 'mc', frage: '___ eines Taxis haben wir den letzten Nachtbus genommen, um Geld zu sparen.', optionen: ['Statt', 'Trotz', 'Innerhalb'], loesung: 0 },
        { typ: 'mc', frage: 'Aufgrund ___ Bauarbeiten bleibt die Bibliothek bis Montag geschlossen.', optionen: ['die', 'den', 'der'], loesung: 2 },
        {
          typ: 'mc',
          frage: '„Obwohl er erkältet war, ist Jonas zur Arbeit gegangen.“ Welcher Satz hat dieselbe Bedeutung?',
          optionen: [
            'Wegen seiner Erkältung ist Jonas zur Arbeit gegangen.',
            'Trotz seiner Erkältung ist Jonas zur Arbeit gegangen.',
            'Statt seiner Erkältung ist Jonas zur Arbeit gegangen.',
          ],
          loesung: 1,
        },
        {
          typ: 'korrektur',
          optionen: ['Wegen des Unfalls war die Autobahn gesperrt.', 'Wegen dem Unfall war die Autobahn gesperrt.'],
          loesung: 0,
          warum: '*Wegen dem* se oye mucho, pero es coloquial. Por escrito (y en el examen) va **Genitiv**: *wegen des Unfalls*.',
        },
        {
          typ: 'korrektur',
          optionen: ['Trotz dass es regnete, sind wir spazieren gegangen.', 'Obwohl es regnete, sind wir spazieren gegangen.'],
          loesung: 1,
          warum: '*Trotz* es preposición y va con un Nomen (*trotz des Regens*). «A pesar de que + oración» se dice con **obwohl**.',
        },
        {
          typ: 'korrektur',
          optionen: ['Während des Studiums hat Selin in einer Buchhandlung gejobbt.', 'Während des Studium hat Selin in einer Buchhandlung gejobbt.'],
          loesung: 0,
          warum: 'En el Genitiv masculino y neutro el Nomen lleva **-s/-es**: *des Studium**s***. El español no marca el caso en el sustantivo, por eso se olvida.',
        },
        {
          typ: 'zuordnen',
          links: ['weil es stark schneite', 'obwohl es stark schneite', 'während es stark schneite', 'anstatt mit dem Auto zu fahren', 'da die Nachfrage zurzeit groß ist'],
          rechts: ['statt einer Autofahrt', 'aufgrund der großen Nachfrage', 'trotz des starken Schneefalls', 'während des starken Schneefalls', 'wegen des starken Schneefalls'],
          loesung: {
            'weil es stark schneite': 'wegen des starken Schneefalls',
            'obwohl es stark schneite': 'trotz des starken Schneefalls',
            'während es stark schneite': 'während des starken Schneefalls',
            'anstatt mit dem Auto zu fahren': 'statt einer Autofahrt',
            'da die Nachfrage zurzeit groß ist': 'aufgrund der großen Nachfrage',
          },
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies den Kommentar. Entscheide, welche Aussage dem Text entspricht.',
      textTitel: 'Kommentar: Die Vier-Tage-Woche im Rathaus',
      text: 'Seit Januar testet unsere Stadtverwaltung die Vier-Tage-Woche: Die Mitarbeitenden arbeiten weiterhin 38 Stunden, verteilen sie aber auf vier Tage. Trotz anfänglicher Skepsis ziehen viele Beschäftigte nach sechs Monaten eine positive Bilanz. Wegen der längeren Arbeitstage sind zwar manche abends erschöpft, doch der freie Freitag gleicht das für die meisten aus. Weniger begeistert sind die Bürgerinnen und Bürger: Die Ämter sind freitags geschlossen, und außerhalb der neuen Öffnungszeiten ist niemand erreichbar. Statt eines persönlichen Termins bekommt man dann nur den Hinweis auf das Online-Portal. Ich halte den Versuch trotzdem für richtig. Aufgrund des Fachkräftemangels muss die Verwaltung als Arbeitgeber attraktiver werden, und innerhalb eines Jahres lässt sich gut prüfen, ob das Modell funktioniert. Allerdings sollte die Stadt während der Testphase wenigstens am Freitagvormittag eine telefonische Sprechstunde anbieten. Sonst verliert sie das Vertrauen der Menschen, für die sie eigentlich da ist. Tobias Engel',
      items: [
        { typ: 'rf', aussage: 'Im Test arbeiten die Mitarbeitenden insgesamt weniger Stunden pro Woche.', loesung: false },
        {
          typ: 'mc',
          frage: 'Wie bewerten viele Beschäftigte den Versuch bisher?',
          optionen: [
            'überwiegend positiv',
            'eher skeptisch, wie am Anfang',
            'negativ, weil sie abends zu müde sind',
          ],
          loesung: 0,
        },
        { typ: 'rf', aussage: 'Wer freitags ein Anliegen hat, wird auf das Online-Portal verwiesen.', loesung: true },
        {
          typ: 'mc',
          frage: 'Was fordert der Autor?',
          optionen: [
            'den Versuch nach sechs Monaten zu beenden',
            'längere Öffnungszeiten von Montag bis Donnerstag',
            'eine telefonische Sprechstunde am Freitag',
          ],
          loesung: 2,
        },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'text',
      titel: 'Schreiben',
      anweisung: 'Schreib einen Forumsbeitrag mit mindestens 60 Wörtern. Verwende mindestens zwei Präpositionen mit Genitiv (z. B. wegen, trotz, während, statt, innerhalb).',
      aufgabe: 'In einem Onlineforum wird diskutiert: „Homeoffice — Fluch oder Segen?“ Schreib einen Beitrag und bring deine Meinung ein.',
      punkte: [
        'Berichte kurz von deinen eigenen Erfahrungen oder von Erfahrungen aus deinem Umfeld.',
        'Nenne einen Vorteil und einen Nachteil des Homeoffice.',
        'Formuliere deine Meinung und einen Vorschlag für Arbeitgeber.',
      ],
      minWoerter: 60,
      beispielLoesung: 'Hallo zusammen, ich arbeite seit zwei Jahren überwiegend im Homeoffice und möchte meine Erfahrungen teilen. Ein großer Vorteil ist die Zeit: Statt einer Stunde im Stau beginne ich den Tag mit einem Kaffee am Schreibtisch. Trotz dieser Flexibilität gibt es aber auch Nachteile. Während der ersten Monate habe ich mich oft einsam gefühlt, weil der Kontakt zu den Kollegen fehlte. Meiner Meinung nach ist eine Mischung ideal. Arbeitgeber sollten deshalb feste Bürotage einführen, damit das Team sich regelmäßig sieht. Viele Grüße, Noah',
    },
  ],
}
