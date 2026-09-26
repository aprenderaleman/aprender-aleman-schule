// Übungsheft B1 — Lektion 25: Hören: Gespräch & Diskussion (Teil 3-4)
export default {
  lektion: 25,
  titel: 'Übungsheft — Hören: Gespräch & Diskussion',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Hier übst du die Sprache der Meinungen. Wähle die richtige Form oder ergänze.',
      items: [
        { typ: 'mc', frage: 'Da bin ich ganz deiner Meinung. Ich stimme ___ zu.', optionen: ['dich', 'dir', 'du'], loesung: 1 },
        { typ: 'mc', frage: 'Meiner ___ nach ist der Vorschlag zu teuer.', optionen: ['Meinung', 'Meinungen', 'Meinen'], loesung: 0 },
        { typ: 'mc', frage: 'Nach einer langen Diskussion haben wir uns auf Freitag ___.', optionen: ['einigt', 'geeinigen', 'geeinigt'], loesung: 2 },
        {
          typ: 'luecke',
          text: 'Ich bin noch nicht {1}, dass das funktioniert. Aber du hast {2}: Die Idee hat auch Vorteile.',
          bank: ['überzeugt', 'überzeugen', 'Recht', 'Richtig'],
          loesungen: { 1: 'überzeugt', 2: 'Recht' },
        },
        {
          typ: 'luecke',
          text: 'Frau Kern findet die Idee super, sie ist {1}. Herr Roth findet sie schlecht, er ist {2}. Die Moderatorin {3} ihn kurz.',
          bank: ['dafür', 'dagegen', 'unterbricht', 'unterbrecht', 'darauf'],
          loesungen: { 1: 'dafür', 2: 'dagegen', 3: 'unterbricht' },
        },
        {
          typ: 'zuordnen',
          links: ['also', 'na ja', 'eigentlich', 'genau', 'ach so'],
          rechts: [
            'Jetzt kommt meine Meinung.',
            'Ich habe Zweifel.',
            'Gleich kommt ein Aber.',
            'Ich stimme zu.',
            'Jetzt verstehe ich es.',
          ],
          loesung: {
            'also': 'Jetzt kommt meine Meinung.',
            'na ja': 'Ich habe Zweifel.',
            'eigentlich': 'Gleich kommt ein Aber.',
            'genau': 'Ich stimme zu.',
            'ach so': 'Jetzt verstehe ich es.',
          },
        },
        { typ: 'satzbau', woerter: ['recht', 'dass', 'Ich', 'hat', 'glaube', 'sie'], loesung: 'Ich glaube, dass sie recht hat.' },
        {
          typ: 'satzbau',
          woerter: ['teuer', 'weil', 'Er', 'zu', 'dagegen', 'es', 'ist', 'ist'],
          loesung: 'Er ist dagegen, weil es zu teuer ist.',
        },
        {
          typ: 'korrektur',
          optionen: ['Ich stimme mit dir zu.', 'Ich stimme dir zu.'],
          loesung: 1,
          warum: '*Zustimmen* lleva **dativo sin preposición**: *Ich stimme **dir** zu.* El *mit* viene del español «estoy de acuerdo **con**tigo».',
        },
        {
          typ: 'korrektur',
          optionen: ['Die Idee ist gut. Ich bin dafür.', 'Die Idee ist gut. Ich bin für.'],
          loesung: 0,
          warum: 'Sin complemento, *für* no puede quedarse solo: usa el adverbio pronominal **dafür** (a favor) / **dagegen** (en contra).',
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies den Forumsbeitrag. Achte darauf, wer was sagt.',
      textTitel: 'Hausforum Lindenstraße 12: Grillplatz im Hof?',
      text: 'Gestern hatten wir in unserem Haus eine Versammlung. Die Hausverwalterin, Frau Yıldız, hat die Diskussion moderiert. Das Thema: Soll es im Hof einen Grillplatz geben? Herr Albers war sofort dafür. Seiner Meinung nach ist der Hof im Sommer leer, und ein Grillplatz bringt die Nachbarn zusammen. Frau Novak war dagegen, weil ihr Schlafzimmer direkt über dem Hof liegt. Sie hatte Angst vor Lärm und Rauch. Ich selbst war zuerst unentschieden. Dann hat Herr Albers einen Vorschlag gemacht: Man darf nur am Wochenende grillen, und nur bis 22 Uhr. Das hat auch Frau Novak überzeugt. Am Ende haben wir uns geeinigt: Im Mai bauen wir den Grillplatz, aber zuerst nur als Test für drei Monate. — Paula, 3. Stock',
      items: [
        { typ: 'rf', aussage: 'Frau Yıldız hat die Versammlung geleitet.', loesung: true },
        { typ: 'rf', aussage: 'Paula war von Anfang an für den Grillplatz.', loesung: false },
        {
          typ: 'mc',
          frage: 'Warum war Frau Novak zuerst dagegen?',
          optionen: ['Sie isst kein Fleisch.', 'Der Grillplatz kostet zu viel.', 'Sie befürchtet Lärm und Rauch.'],
          loesung: 2,
        },
        {
          typ: 'mc',
          frage: 'Was haben die Nachbarn am Ende beschlossen?',
          optionen: ['Der Grillplatz kommt sofort und für immer.', 'Sie testen den Grillplatz ab Mai drei Monate lang.', 'Man darf jeden Abend bis 22 Uhr grillen.'],
          loesung: 1,
        },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'text',
      titel: 'Schreiben',
      anweisung: 'Schreib einen Forumsbeitrag mit mindestens 40 Wörtern. Denk an Anrede und Gruß.',
      aufgabe: 'Paula hat im Hausforum über den Grillplatz geschrieben. Antworte ihr: Was ist deine Meinung dazu?',
      punkte: [
        'Bist du dafür oder dagegen? Warum?',
        'Nenne einen Vorteil und einen Nachteil.',
        'Mach einen eigenen Vorschlag.',
      ],
      minWoerter: 40,
      beispielLoesung: 'Hallo Paula,\ndanke für deinen Bericht! Ich bin eigentlich dafür, weil ein Grillplatz die Nachbarn zusammenbringt. Das ist ein großer Vorteil. Ein Nachteil ist natürlich der Rauch, besonders für Frau Novak. Mein Vorschlag: Wir hängen einen Plan mit den Grillzeiten auf und räumen danach immer gemeinsam auf.\nViele Grüße\nTimo, 1. Stock',
    },
  ],
}
