// Übungsheft B1 — Lektion 13: Konjunktiv II — höfliche Bitten & Wünsche
export default {
  lektion: 13,
  titel: 'Übungsheft — Konjunktiv II',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Sprich höflich! Wähle die richtige Form: würde, hätte, wäre oder könnte.',
      items: [
        { typ: 'mc', frage: '___ Sie mir bitte kurz helfen?', optionen: ['Konnten', 'Könnten', 'Kannst'], loesung: 1 },
        { typ: 'mc', frage: 'Ich ___ gern einen Tee mit Milch.', optionen: ['hätte', 'würde', 'wäre'], loesung: 0 },
        { typ: 'mc', frage: 'Du ___ jetzt sicher auch gern am Meer, oder?', optionen: ['würdest', 'hättest', 'wärst'], loesung: 2 },
        {
          typ: 'luecke',
          text: 'Entschuldigung, {1} Sie einen Moment Zeit? {2} es möglich, den Termin auf Freitag zu verschieben?',
          bank: ['Hätten', 'Wären', 'Wäre', 'Würde'],
          loesungen: { 1: 'Hätten', 2: 'Wäre' },
        },
        {
          typ: 'luecke',
          text: 'Wir {1} am Wochenende gern an den See fahren. {2} ihr auch Lust? In unserem Auto {3} noch zwei Plätze frei.',
          bank: ['würden', 'Hättet', 'wären', 'Wärt', 'würdet'],
          loesungen: { 1: 'würden', 2: 'Hättet', 3: 'wären' },
        },
        {
          typ: 'luecke',
          text: 'Lieber Tom, {1} du mir am Samstag beim Umzug helfen? Das {2} super! Ich {3} dich danach gern zum Essen einladen.',
          bank: ['könntest', 'wäre', 'würde', 'hättest'],
          loesungen: { 1: 'könntest', 2: 'wäre', 3: 'würde' },
        },
        {
          typ: 'zuordnen',
          links: ['Hilf mir!', 'Ich will ein Zimmer.', 'Mach die Musik leiser!', 'Ist das möglich?', 'Ich will lieber zu Hause bleiben.'],
          rechts: ['Würdest du die Musik leiser machen?', 'Wäre das möglich?', 'Könntest du mir helfen?', 'Ich würde lieber zu Hause bleiben.', 'Ich hätte gern ein Zimmer.'],
          loesung: {
            'Hilf mir!': 'Könntest du mir helfen?',
            'Ich will ein Zimmer.': 'Ich hätte gern ein Zimmer.',
            'Mach die Musik leiser!': 'Würdest du die Musik leiser machen?',
            'Ist das möglich?': 'Wäre das möglich?',
            'Ich will lieber zu Hause bleiben.': 'Ich würde lieber zu Hause bleiben.',
          },
        },
        { typ: 'satzbau', woerter: ['wiederholen', 'Sie', 'noch', 'bitte', 'Könnten', 'einmal', 'das'], loesung: 'Könnten Sie das bitte noch einmal wiederholen?', alt: ['Könnten Sie bitte das noch einmal wiederholen?'] },
        {
          typ: 'korrektur',
          optionen: ['Ich würde eine Frage haben.', 'Ich hätte eine Frage.'],
          loesung: 1,
          warum: '*haben, sein, können* usan su forma corta: **hätte, wäre, könnte**. *Würde haben* suena a traducción literal de «tendría».',
        },
        {
          typ: 'korrektur',
          optionen: ['Ich würde dich gern am Sonntag besuchen.', 'Ich würde gern besuchen dich am Sonntag.'],
          loesung: 0,
          warum: '*würde* va en posición 2 y el **infinitivo al final** de la frase, como con los verbos modales. En español el verbo va junto: «me gustaría visitarte».',
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies die E-Mail an die Sprachschule. Löse dann die vier Aufgaben.',
      textTitel: 'E-Mail an die Sprachschule Lindner',
      text: 'Sehr geehrte Frau Albers, ich besuche seit März Ihren Deutschkurs am Dienstagabend. Leider muss ich ab Oktober länger arbeiten. Deshalb hätte ich eine Bitte: Könnte ich in den Kurs am Donnerstagvormittag wechseln? Ich weiß, dass dieser Kurs schon fast voll ist. Wäre es trotzdem möglich? Ich würde auch gern die Prüfung im Dezember machen. Könnten Sie mir sagen, wann die Anmeldung beginnt und wie viel sie kostet? Außerdem hätte ich gern das neue Kursbuch. Kann ich es direkt bei Ihnen im Büro kaufen? Ich wäre Ihnen für eine kurze Antwort sehr dankbar. Mit freundlichen Grüßen, Tomás Rivera',
      items: [
        { typ: 'rf', aussage: 'Tomás möchte den Kurs wechseln, weil er ab Oktober länger arbeiten muss.', loesung: true },
        { typ: 'rf', aussage: 'Im Kurs am Donnerstagvormittag gibt es noch viele freie Plätze.', loesung: false },
        {
          typ: 'mc',
          frage: 'Was möchte Tomás über die Prüfung wissen?',
          optionen: ['wie schwer die Prüfung ist', 'wann die Anmeldung beginnt und was sie kostet', 'wer die Prüfung korrigiert'],
          loesung: 1,
        },
        {
          typ: 'mc',
          frage: 'Was möchte Tomás im Büro kaufen?',
          optionen: ['das neue Kursbuch', 'ein Wörterbuch', 'eine Karte für die Prüfung'],
          loesung: 0,
        },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'text',
      titel: 'Schreiben',
      anweisung: 'Schreib eine Nachricht mit mindestens 40 Wörtern. Benutze höfliche Formen und denk an Anrede und Gruß.',
      aufgabe: 'Du fährst nächste Woche für fünf Tage weg. Deine Nachbarin, Frau Kaya, wohnt direkt neben dir. Schreib ihr eine höfliche Nachricht.',
      punkte: [
        'Bitte sie höflich um Hilfe: Könnte sie deine Blumen gießen?',
        'Frag, ob sie auch deine Post aus dem Briefkasten nehmen würde.',
        'Mach einen Vorschlag: Wann könntest du ihr den Schlüssel bringen?',
      ],
      minWoerter: 40,
      beispielLoesung: 'Liebe Frau Kaya, ich fahre nächste Woche für fünf Tage zu meiner Familie nach Köln. Hätten Sie vielleicht Zeit für eine kleine Hilfe? Könnten Sie meine Blumen gießen? Würden Sie auch meine Post aus dem Briefkasten nehmen? Ich wäre Ihnen sehr dankbar. Ich könnte Ihnen den Schlüssel am Sonntagabend bringen. Wäre das in Ordnung? Viele Grüße, Julia Brandt',
    },
  ],
}
