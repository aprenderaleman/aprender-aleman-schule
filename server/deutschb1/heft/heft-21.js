// Übungsheft B1 — Lektion 21: Lesen Teil 3: Meinungen & Kommentare
export default {
  lektion: 21,
  titel: 'Übungsheft — Lesen Teil 3',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Hier übst du die Sprache der Meinung. Wähle oder ergänze das passende Wort.',
      items: [
        { typ: 'mc', frage: '___ Meinung nach ist das eine gute Idee.', optionen: ['Meine', 'Meiner', 'Mein'], loesung: 1 },
        { typ: 'mc', frage: '„Klar, das ist bequem, aber ich brauche es wirklich nicht.“ Die Person ist …', optionen: ['dagegen', 'dafür', 'teils-teils'], loesung: 0 },
        {
          typ: 'luecke',
          text: '{1} spart das Homeoffice Zeit, {2} fehlt mir der Kontakt zu den Kollegen.',
          bank: ['Einerseits', 'andererseits', 'trotzdem', 'dafür'],
          loesungen: { 1: 'Einerseits', 2: 'andererseits' },
        },
        {
          typ: 'luecke',
          text: 'Ein {1} ist, dass das Ticket sehr günstig ist. Ein {2} ist, dass die Busse oft zu spät kommen.',
          bank: ['Vorteil', 'Nachteil', 'Meinung', 'Angebot'],
          loesungen: { 1: 'Vorteil', 2: 'Nachteil' },
        },
        {
          typ: 'luecke',
          text: 'Ich {1}, das bringt überhaupt nichts. Ich bin total {2}.',
          bank: ['glaube', 'stimme', 'dagegen', 'dafür'],
          loesungen: { 1: 'glaube', 2: 'dagegen' },
        },
        {
          typ: 'zuordnen',
          links: ['Ich bin dafür.', 'Ich bin dagegen.', 'Es kommt darauf an.', 'Ich stimme dir zu.', 'meiner Meinung nach'],
          rechts: ['Ich finde die Idee gut.', 'Ich finde die Idee schlecht.', 'Das hängt von der Situation ab.', 'Du hast recht.', 'ich denke'],
          loesung: {
            'Ich bin dafür.': 'Ich finde die Idee gut.',
            'Ich bin dagegen.': 'Ich finde die Idee schlecht.',
            'Es kommt darauf an.': 'Das hängt von der Situation ab.',
            'Ich stimme dir zu.': 'Du hast recht.',
            'meiner Meinung nach': 'ich denke',
          },
        },
        { typ: 'satzbau', woerter: ['dass', 'gut', 'Ich', 'Idee', 'finde', 'ist', 'die'], loesung: 'Ich finde, dass die Idee gut ist.' },
        { typ: 'satzbau', woerter: ['gegen', 'ich', 'Verbot', 'Trotzdem', 'das', 'bin'], loesung: 'Trotzdem bin ich gegen das Verbot.' },
        {
          typ: 'korrektur',
          optionen: ['Ich stimme dir zu.', 'Ich stimme mit dir zu.'],
          loesung: 0,
          warum: '**zustimmen** lleva **Dativ sin preposición**: *Ich stimme dir zu.* El error típico es traducir «estar de acuerdo **con**» → *mit*.',
        },
        {
          typ: 'korrektur',
          optionen: ['Ich bin dafür, weil es ist billiger.', 'Ich bin dafür, weil es billiger ist.'],
          loesung: 1,
          warum: 'Después de **weil** el verbo conjugado va **al final**. En español el orden no cambia; en alemán sí.',
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies die Kommentare im Forum. Löse dann die vier Aufgaben. Lies jeden Kommentar bis zum Ende.',
      textTitel: 'Forum: Soll unsere Innenstadt autofrei werden?',
      text: 'Paula, 27: Ich bin total dafür! Ohne Autos ist die Luft besser, und Kinder können sicher spielen. Ich fahre sowieso nur mit dem Rad. — Herr Kowalski, 58: Ich habe ein kleines Geschäft in der Altstadt. Die Idee klingt schön, aber viele meiner Kunden kommen mit dem Auto. Wenn sie nicht mehr parken können, kaufen sie woanders ein. Deshalb bin ich dagegen. — Nadia, 41: Einerseits finde ich weniger Verkehr gut. Andererseits muss ich meine Mutter jede Woche zum Arzt in der Innenstadt bringen, und sie kann nicht weit laufen. Es kommt darauf an: Mit guten Busverbindungen wäre ich dafür. — Tobi, 19: Ich stimme Paula zu. Die Busse sind billig, und in der Stadt braucht man wirklich kein Auto.',
      items: [
        { typ: 'rf', aussage: 'Paula ist gegen eine autofreie Innenstadt.', loesung: false },
        {
          typ: 'mc',
          frage: 'Warum ist Herr Kowalski dagegen?',
          optionen: ['Er fährt nicht gern Rad.', 'Er hat Angst, Kunden zu verlieren.', 'Er findet die Luft in der Stadt gut.'],
          loesung: 1,
        },
        {
          typ: 'mc',
          frage: 'Wie ist Nadias Meinung?',
          optionen: ['dafür', 'dagegen', 'teils-teils'],
          loesung: 2,
        },
        { typ: 'rf', aussage: 'Tobi hat die gleiche Meinung wie Paula.', loesung: true },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'text',
      titel: 'Schreiben',
      anweisung: 'Schreib einen Forumsbeitrag mit mindestens 40 Wörtern. Benutze Meinungssprache.',
      aufgabe: 'In einem Online-Forum diskutieren die Leute: „Sollen Handys in der Schule verboten werden?“ Schreib deine Meinung.',
      punkte: ['Sag deine Meinung: dafür, dagegen oder teils-teils?', 'Nenne einen Vorteil und einen Nachteil.', 'Schreib am Ende einen klaren Schlusssatz.'],
      minWoerter: 40,
      beispielLoesung: 'Meiner Meinung nach ist das eine schwierige Frage. Einerseits ist ein Verbot gut, weil die Schüler im Unterricht besser aufpassen. Andererseits braucht man das Handy manchmal, zum Beispiel für einen Anruf bei den Eltern. Trotzdem bin ich am Ende dafür: In den Pausen sollen die Kinder lieber miteinander sprechen.',
    },
  ],
}
