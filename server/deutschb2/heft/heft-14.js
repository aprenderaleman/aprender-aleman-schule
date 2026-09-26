// Übungsheft B2 — Lektion 14: Infinitivsätze mit zu
export default {
  lektion: 14,
  titel: 'Übungsheft — Infinitivsätze mit zu',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Mit zu oder ohne zu? Achte auf trennbare Verben und entscheide bei Zielangaben zwischen um … zu und damit.',
      items: [
        {
          typ: 'luecke',
          text: 'Wir haben beschlossen, im Sommer aufs Land {1}. Vergiss bitte nicht, den alten Mietvertrag rechtzeitig {2}. Die Möbel lassen wir von einer Umzugsfirma {3}.',
          bank: ['umzuziehen', 'zu umziehen', 'zu kündigen', 'kündigen', 'transportieren'],
          loesungen: { 1: 'umzuziehen', 2: 'zu kündigen', 3: 'transportieren' },
        },
        {
          typ: 'luecke',
          text: 'Marek ist losgefahren, {1} vorher auf die Karte zu schauen. {2} umzukehren, ist er einfach weitergefahren und kam zwei Stunden zu spät an. Nächstes Mal nimmt er das Navi mit, {3} sich nicht wieder zu verfahren.',
          bank: ['ohne', 'Anstatt', 'um', 'damit'],
          loesungen: { 1: 'ohne', 2: 'Anstatt', 3: 'um' },
        },
        {
          typ: 'luecke',
          text: 'Frau Yilmaz erklärt die neue Regel zweimal, {1} alle Teilnehmenden sie verstehen. Die Teilnehmenden machen sich Notizen, {2} die Regel zu Hause noch einmal zu wiederholen.',
          bank: ['damit', 'um', 'dass', 'für'],
          loesungen: { 1: 'damit', 2: 'um' },
        },
        {
          typ: 'mc',
          frage: 'Hast du Lust, am Sonntag mit uns ___?',
          optionen: ['wandern zu gehen', 'zu wandern gehen', 'wandern gehen'],
          loesung: 0,
        },
        {
          typ: 'mc',
          frage: 'Nächste Woche kann ich leider nicht ___.',
          optionen: ['zu kommen', 'kommen', 'um zu kommen'],
          loesung: 1,
        },
        {
          typ: 'mc',
          frage: 'Es ist wichtig, alle Unterlagen vollständig ___.',
          optionen: ['einreichen', 'zu einreichen', 'einzureichen'],
          loesung: 2,
        },
        {
          typ: 'korrektur',
          optionen: ['Ich lerne Deutsch für in Deutschland zu arbeiten.', 'Ich lerne Deutsch, um in Deutschland zu arbeiten.'],
          loesung: 1,
          warum: '«para + infinitivo» es **um … zu**; *für … zu* es el calco más frecuente de «para» y no existe.',
        },
        {
          typ: 'korrektur',
          optionen: ['Wir gehen morgen früh einkaufen.', 'Wir gehen morgen früh zu einkaufen.'],
          loesung: 0,
          warum: 'Tras **gehen** + actividad el infinitivo va **sin zu**: *einkaufen gehen*. No traduzcas la «a» de «ir a comprar».',
        },
        {
          typ: 'korrektur',
          optionen: ['Er hat versprochen, am Samstag zu mitkommen.', 'Er hat versprochen, am Samstag mitzukommen.'],
          loesung: 1,
          warum: 'Con verbos separables **zu** va entre el prefijo y el verbo, en una sola palabra: *mit**zu**kommen*.',
        },
        {
          typ: 'satzbau',
          woerter: ['ohne', 'gegangen', 'Er', 'zu', 'sich', 'ist', 'verabschieden'],
          loesung: 'Er ist gegangen, ohne sich zu verabschieden.',
          alt: ['Ohne sich zu verabschieden, ist er gegangen.'],
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies den Forumsbeitrag. Entscheide, welche Aussage dem Text entspricht.',
      textTitel: 'Forumsbeitrag: Ein Jahr ohne Auto — mein Fazit',
      text: 'Vor einem Jahr haben mein Mann und ich beschlossen, unser Auto zu verkaufen. Ehrlich gesagt hatte ich damals Angst, den Alltag ohne Auto nicht zu schaffen. Heute kann ich sagen: Es war eine unserer besten Entscheidungen. Am Anfang haben wir versucht, wirklich alles mit dem Fahrrad zu erledigen. Im Winter war das allerdings ziemlich mühsam. Inzwischen fahren wir öfter mit Bus und Bahn und haben die Möglichkeit, bei Bedarf ein Carsharing-Auto zu mieten, zum Beispiel für den Wocheneinkauf. Das Beste: Wir sparen jeden Monat rund 250 Euro, ohne auf etwas Wichtiges verzichten zu müssen. Unsere Kinder haben angefangen, allein mit dem Rad zur Schule zu fahren, und sind richtig stolz. Wer vorhat, sein Auto abzuschaffen, dem empfehle ich, das Leben ohne Auto erst einmal drei Monate lang zu testen, anstatt es sofort zu verkaufen. Nur eines vermisse ich manchmal: spontane Ausflüge aufs Land. Aber auch dafür findet man mit etwas Planung eine Lösung. — Mia',
      items: [
        { typ: 'rf', aussage: 'Mia hatte anfangs Zweifel, ob der Alltag ohne Auto funktionieren würde.', loesung: true },
        {
          typ: 'mc',
          frage: 'Wofür nutzt die Familie manchmal ein Carsharing-Auto?',
          optionen: ['für den Weg zur Schule', 'für den Wocheneinkauf', 'für die tägliche Fahrt zur Arbeit'],
          loesung: 1,
        },
        { typ: 'rf', aussage: 'Mia rät, das eigene Auto möglichst schnell zu verkaufen.', loesung: false },
        {
          typ: 'mc',
          frage: 'Was fehlt Mia gelegentlich?',
          optionen: ['spontane Ausflüge aufs Land', 'das Radfahren im Winter', 'mehr Geld für die Familie'],
          loesung: 0,
        },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'text',
      titel: 'Schreiben',
      anweisung: 'Schreib eine Beschwerde per E-Mail mit mindestens 60 Wörtern. Verwende mindestens drei Infinitivsätze und denk an Betreff, Anrede und Gruß.',
      aufgabe: 'Der Handwerksbetrieb Kessler & Sohn hat dir versprochen, deine defekte Heizung innerhalb von drei Tagen zu reparieren. Nach zwei Wochen ist noch niemand gekommen. Schreib dem Betrieb eine Beschwerde.',
      punkte: [
        'Beschreibe, was vereinbart war und was tatsächlich passiert ist.',
        'Erkläre, welche Folgen die Verzögerung für dich hat.',
        'Fordere eine konkrete Lösung und nenne eine Frist.',
      ],
      minWoerter: 60,
      beispielLoesung: 'Betreff: Beschwerde — ausstehende Reparatur meiner Heizung — Sehr geehrte Damen und Herren, am 3. November hat mir Ihr Mitarbeiter versprochen, meine defekte Heizung innerhalb von drei Tagen zu reparieren. Inzwischen sind zwei Wochen vergangen, ohne dass sich jemand gemeldet hat. Ich habe mehrmals versucht, Sie telefonisch zu erreichen, leider ohne Erfolg. Da es nachts schon sehr kalt ist, musste ich ein Heizgerät kaufen, um die Wohnung einigermaßen warm zu halten. Ich fordere Sie daher auf, die Reparatur bis spätestens Freitag durchzuführen. Andernfalls sehe ich mich gezwungen, einen anderen Betrieb zu beauftragen und Ihnen die Mehrkosten in Rechnung zu stellen. Mit freundlichen Grüßen, Daniel Sørensen',
    },
  ],
}
