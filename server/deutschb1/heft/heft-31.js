// Übungsheft B1 — Lektion 31: Sprechen Teil 1 — Gemeinsam etwas planen
export default {
  lektion: 31,
  titel: 'Übungsheft — Gemeinsam etwas planen',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Hier übst du Sätze zum gemeinsamen Planen. Wähle die richtige Form oder ergänze.',
      items: [
        { typ: 'mc', frage: 'Wollen wir am Samstag einen Ausflug ___?', optionen: ['machen', 'zu machen', 'macht'], loesung: 0 },
        { typ: 'mc', frage: 'Ich kümmere mich ___ die Getränke.', optionen: ['für', 'um', 'auf'], loesung: 1 },
        { typ: 'mc', frage: 'Nach langer Diskussion einigen wir uns ___ Sonntag.', optionen: ['mit', 'für', 'auf'], loesung: 2 },
        {
          typ: 'luecke',
          text: 'Wir treffen uns um fünf vor {1} Kino. Danach gehen wir in {2} Park.',
          bank: ['dem', 'den', 'das', 'der'],
          loesungen: { 1: 'dem', 2: 'den' },
        },
        {
          typ: 'luecke',
          text: 'Samstag {1} mir leider nicht. Können wir die Party auf Sonntag {2}? — {3}, dann machen wir das so!',
          bank: ['passt', 'verschieben', 'Einverstanden', 'klappen', 'einladen'],
          loesungen: { 1: 'passt', 2: 'verschieben', 3: 'Einverstanden' },
        },
        {
          typ: 'zuordnen',
          links: ['Wie wäre es mit einem Picknick?', 'Ja, das passt mir gut.', 'Gute Idee, aber Freitag kann ich nicht. Vielleicht Samstag?', 'Und du? Was meinst du?', 'Also: Sonntag um fünf im Park.'],
          rechts: ['Vorschlag', 'Zustimmung', 'Ablehnung mit Alternative', 'den Partner fragen', 'Einigung'],
          loesung: {
            'Wie wäre es mit einem Picknick?': 'Vorschlag',
            'Ja, das passt mir gut.': 'Zustimmung',
            'Gute Idee, aber Freitag kann ich nicht. Vielleicht Samstag?': 'Ablehnung mit Alternative',
            'Und du? Was meinst du?': 'den Partner fragen',
            'Also: Sonntag um fünf im Park.': 'Einigung',
          },
        },
        { typ: 'satzbau', woerter: ['mit', 'See', 'es', 'Wie', 'an', 'einem', 'den', 'wäre', 'Ausflug'], loesung: 'Wie wäre es mit einem Ausflug an den See?' },
        { typ: 'satzbau', woerter: ['jeder', 'vor', 'Ich', 'mitbringt', 'dass', 'schlage', 'etwas'], loesung: 'Ich schlage vor, dass jeder etwas mitbringt.' },
        {
          typ: 'korrektur',
          optionen: ['Wir treffen uns am Samstag um acht.', 'Wir treffen am Samstag um acht.'],
          loesung: 0,
          warum: '«Quedar» = **sich treffen**: el pronombre reflexivo es obligatorio: *Wir treffen **uns** …*',
        },
        {
          typ: 'korrektur',
          optionen: ['Danach gehen wir im Park.', 'Danach gehen wir in den Park.'],
          loesung: 1,
          warum: '*gehen* indica movimiento (Wohin?) → **Akkusativ**: *in den Park*. *Im Park* responde a Wo?',
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies die E-Mail von Karim an seinen Deutschkurs. Richtig oder falsch? Oder welche Lösung passt?',
      textTitel: 'E-Mail an die Kursgruppe',
      text: 'Hallo zusammen,\nunsere Kursleiterin Frau Brandt geht Ende Juni in Rente. Deshalb möchte ich eine kleine Abschiedsfeier für sie organisieren. Mein Vorschlag: Wir treffen uns am letzten Kurstag, also am 27. Juni, um 18 Uhr im Kursraum. Leider ist der Raum nur bis 20 Uhr frei. Danach könnten wir noch ins Restaurant gegenüber gehen. Ich kümmere mich um das Geschenk: einen Gutschein für eine Schifffahrt, weil Frau Brandt so gern auf dem Wasser ist. Jeder zahlt zehn Euro dazu. Wer kann einen Kuchen oder einen Salat mitbringen? Und wer hat Zeit, den Raum zu dekorieren? Schreibt mir bitte bis Freitag, ob euch der Termin passt. Wenn er nicht klappt, verschieben wir die Feier.\nViele Grüße\nKarim',
      items: [
        { typ: 'rf', aussage: 'Die Feier beginnt im Kursraum.', loesung: true },
        { typ: 'rf', aussage: 'Karim bezahlt das Geschenk allein.', loesung: false },
        {
          typ: 'mc',
          frage: 'Warum schenkt die Gruppe eine Schifffahrt?',
          optionen: ['Weil der Gutschein sehr billig ist.', 'Weil Karim ein Schiff hat.', 'Weil Frau Brandt gern auf dem Wasser ist.'],
          loesung: 2,
        },
        {
          typ: 'mc',
          frage: 'Was sollen die anderen bis Freitag machen?',
          optionen: ['Karim sagen, ob der Termin passt', 'den Raum dekorieren', 'einen Tisch im Restaurant reservieren'],
          loesung: 0,
        },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'text',
      titel: 'Schreiben',
      anweisung: 'Schreib eine Nachricht mit mindestens 40 Wörtern. Denk an Anrede und Gruß.',
      aufgabe: 'Deine Freundin Lea schreibt dir: „Wollen wir am Samstag zusammen einen Ausflug machen?“ Am Samstag kannst du leider nicht. Antworte ihr.',
      punkte: [
        'Bedank dich für die Idee.',
        'Erklär, warum Samstag nicht passt, und mach einen anderen Vorschlag.',
        'Schlag vor, wer was mitbringt.',
      ],
      minWoerter: 40,
      beispielLoesung: 'Liebe Lea,\ndanke für deine Nachricht, das ist eine tolle Idee! Leider kann ich am Samstag nicht, weil ich bis zum Abend arbeiten muss. Wie wäre es mit Sonntag? Wir könnten mit dem Fahrrad an den See fahren. Ich kümmere mich um das Essen und bringe Brote mit. Bringst du die Getränke mit?\nSag mir kurz Bescheid, ob dir Sonntag passt.\nViele Grüße\nPablo',
    },
  ],
}
