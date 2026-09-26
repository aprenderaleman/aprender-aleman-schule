// Übungsheft B2 — Lektion 30: Modul Sprechen — Überblick & Bewertung
export default {
  lektion: 30,
  titel: 'Übungsheft — Modul Sprechen',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Ablauf, Bewertung und Aussprache der Sprechprüfung: Wähle jeweils die passende Lösung.',
      items: [
        {
          typ: 'luecke',
          text: 'In der {1} schreibe ich nur {2} auf meinen Zettel, keine ganzen Sätze.',
          bank: ['Vorbereitungszeit', 'Stichwörter', 'Nachfrage', 'Satzmelodie'],
          loesungen: { 1: 'Vorbereitungszeit', 2: 'Stichwörter' },
        },
        {
          typ: 'luecke',
          text: 'Nach meinem {1} haben mir die Prüfenden noch eine {2} zu meinem Beispiel gestellt.',
          bank: ['Vortrag', 'Vortrags', 'Nachfrage', 'Aussprache'],
          loesungen: { 1: 'Vortrag', 2: 'Nachfrage' },
        },
        {
          typ: 'luecke',
          text: 'Bei trennbaren Verben wie „einkaufen“ wird das Präfix {1}, bei untrennbaren Verben wie „bezahlen“ bleibt es {2}.',
          bank: ['betont', 'unbetont', 'flüssig'],
          loesungen: { 1: 'betont', 2: 'unbetont' },
        },
        {
          typ: 'mc',
          frage: 'Welches Wortpaar unterscheidet sich nur durch die Länge des Vokals?',
          optionen: ['Haus – aus', 'fahren – sehen', 'Stadt – Staat'],
          loesung: 2,
        },
        {
          typ: 'mc',
          frage: 'Was passiert mit der Stimme am Ende einer normalen Aussage wie „Ich arbeite gern im Team.“?',
          optionen: ['Sie steigt.', 'Sie fällt.', 'Sie bleibt gleich hoch.'],
          loesung: 1,
        },
        {
          typ: 'mc',
          frage: 'Dir fällt in der Prüfung das Wort „Dosenöffner“ nicht ein. Was ist die beste Strategie?',
          optionen: [
            'Du umschreibst es: „das Gerät, mit dem man Dosen öffnet“.',
            'Du schweigst, bis dir das Wort wieder einfällt.',
            'Du sagst das Wort einfach auf Spanisch.',
          ],
          loesung: 0,
        },
        {
          typ: 'zuordnen',
          links: [
            'Du brauchst einen Moment zum Nachdenken.',
            'Du hast die Frage akustisch nicht verstanden.',
            'Du weißt nicht, was dein Partner genau meint.',
            'Du möchtest deinen Partner einbeziehen.',
            'Dir fehlt ein Wort.',
          ],
          rechts: [
            'Das ist eine interessante Frage. Ich überlege kurz.',
            'Könntest du das bitte wiederholen?',
            'Was meinst du genau damit?',
            'Wie siehst du das?',
            'Ich meine so etwas wie …',
          ],
          loesung: {
            'Du brauchst einen Moment zum Nachdenken.': 'Das ist eine interessante Frage. Ich überlege kurz.',
            'Du hast die Frage akustisch nicht verstanden.': 'Könntest du das bitte wiederholen?',
            'Du weißt nicht, was dein Partner genau meint.': 'Was meinst du genau damit?',
            'Du möchtest deinen Partner einbeziehen.': 'Wie siehst du das?',
            'Dir fehlt ein Wort.': 'Ich meine so etwas wie …',
          },
        },
        {
          typ: 'korrektur',
          optionen: ['Ich möchte über meine Erfahrung sprechen.', 'Ich möchte sprechen über meine Erfahrung.'],
          loesung: 0,
          warum: 'Con verbo modal, el **infinitivo va al final** de la frase: *Ich möchte … sprechen*. «Quiero hablar sobre …» es un calco del orden español.',
        },
        {
          typ: 'korrektur',
          optionen: ['Ich habe die mündliche Prüfung approbiert.', 'Ich habe die mündliche Prüfung bestanden.'],
          loesung: 1,
          warum: '«Aprobar un examen» se dice **eine Prüfung bestehen**; *approbieren* no se usa para exámenes.',
        },
        {
          typ: 'satzbau',
          woerter: ['Zettel', 'lese', 'ab', 'Ich', 'nicht', 'meinen', 'vom', 'Vortrag'],
          loesung: 'Ich lese meinen Vortrag nicht vom Zettel ab.',
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies den Forumsbeitrag und löse die Aufgaben.',
      textTitel: 'Forum „Deutsch lernen“: Meine mündliche Prüfung — Beitrag von Dimitra',
      text: 'Letzte Woche hatte ich meine mündliche Prüfung, und weil hier viele danach fragen, teile ich gern meine Erfahrung. In der Vorbereitungszeit habe ich den Fehler gemacht, meinen Vortrag fast komplett auszuformulieren. Nach zwölf Minuten war mein Zettel voll — aber für die Diskussion hatte ich überhaupt nichts notiert. In der Prüfung habe ich dann die ersten Sätze abgelesen, bis mich eine der Prüfenden freundlich unterbrochen und gebeten hat, frei zu sprechen. Ab da lief es besser: Ich habe nur noch kurz auf den Zettel geschaut, frei weitergesprochen und die Nachfragen ruhig beantwortet. In der Diskussion hat mir mein Partner sehr geholfen, weil er mich immer wieder gefragt hat, wie ich das sehe. Am Ende habe ich bestanden, bei der Aussprache aber weniger Punkte bekommen als erwartet — vor allem wegen der Satzmelodie. Mein Tipp: Schreibt nur Stichwörter und plant Zeit für beide Teile ein. Und übt laut, nicht nur im Kopf!',
      items: [
        {
          typ: 'mc',
          frage: 'Welchen Fehler hat Dimitra in der Vorbereitungszeit gemacht?',
          optionen: [
            'Sie hat nur die Aufgabe für Teil 2 gelesen.',
            'Sie hat ihren Vortrag fast vollständig ausformuliert.',
            'Sie hat überhaupt keine Notizen gemacht.',
          ],
          loesung: 1,
        },
        { typ: 'rf', aussage: 'Während ihres Vortrags wurde Dimitra gebeten, frei zu sprechen.', loesung: true },
        {
          typ: 'mc',
          frage: 'Wie hat Dimitras Partner ihr in der Diskussion geholfen?',
          optionen: [
            'Er hat sie immer wieder nach ihrer Meinung gefragt.',
            'Er hat ihr seinen Stichwortzettel gegeben.',
            'Er hat die meisten Nachfragen für sie beantwortet.',
          ],
          loesung: 0,
        },
        { typ: 'rf', aussage: 'Bei der Aussprache hat Dimitra mehr Punkte bekommen, als sie erwartet hatte.', loesung: false },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'text',
      titel: 'Schreiben',
      anweisung: 'Schreib einen Forumsbeitrag mit mindestens 60 Wörtern und geh auf alle drei Punkte ein. Achte auf das Forum-Register: ich-Form, freundlich-neutral, ohne Anrede und ohne Grußformel.',
      aufgabe: 'Im Forum einer Lernplattform wird diskutiert: „Paarprüfung oder Einzelprüfung — was ist fairer?“ Schreib deinen Beitrag.',
      punkte: [
        'Äußere deine Meinung zur Paarprüfung.',
        'Nenne einen Vorteil und einen Nachteil der Prüfung zu zweit.',
        'Gib den anderen Nutzern einen Tipp für die Vorbereitungszeit.',
      ],
      minWoerter: 60,
      beispielLoesung: 'Die Frage interessiert mich sehr, denn ich habe meine mündliche Prüfung in drei Wochen. Meiner Meinung nach ist die Paarprüfung fairer, als viele denken. Ein großer Vorteil ist, dass man in der Diskussion ein echtes Gespräch führt und nicht nur die Fragen der Prüfenden beantwortet. Natürlich gibt es auch einen Nachteil: Wenn der Partner sehr dominant ist, kommt man selbst weniger zu Wort. Mein Tipp für die Vorbereitungszeit: Schreibt nur Stichwörter auf euren Zettel und notiert euch auch ein paar Redemittel für die Diskussion. Insgesamt finde ich das Format gut, weil es der Realität näher ist als ein reines Interview.',
    },
  ],
}
