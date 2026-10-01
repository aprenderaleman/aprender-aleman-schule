// Übungsheft A2 — Lektion 17: Reflexive Verben
export default {
  lektion: 17,
  titel: 'Übungsheft — Reflexive Verben',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Wähle oder ergänze die richtige Form. ~~(Elige o completa la forma correcta.)~~',
      items: [
        { typ: 'mc', frage: 'Ich freue ___ auf das Wochenende.', optionen: ['sich', 'mich', 'dich'], loesung: 1 },
        { typ: 'mc', frage: 'Wann ___ ihr euch mit Paul?', optionen: ['trefft', 'treffen', 'triffst'], loesung: 0 },
        { typ: 'mc', frage: 'Karim interessiert ___ für Fußball.', optionen: ['uns', 'euch', 'sich'], loesung: 2 },
        {
          typ: 'luecke',
          text: 'Wir ruhen {1} am Sonntag aus. Und du? Fühlst du {2} heute gut?',
          bank: ['uns', 'dich', 'mich', 'euch'],
          loesungen: { 1: 'uns', 2: 'dich' },
        },
        {
          typ: 'luecke',
          text: 'Svenja duscht {1} jeden Morgen. Kinder, beeilt {2}! Wir treffen {3} um acht am Bahnhof.',
          bank: ['sich', 'euch', 'uns', 'mich'],
          loesungen: { 1: 'sich', 2: 'euch', 3: 'uns' },
        },
        { typ: 'satzbau', woerter: ['uns', 'Wir', 'im', 'treffen', 'Café'], loesung: 'Wir treffen uns im Café.' },
        { typ: 'satzbau', woerter: ['mich', 'Ich', 'auf', 'freue', 'deinen', 'Besuch'], loesung: 'Ich freue mich auf deinen Besuch.' },
        {
          typ: 'zuordnen',
          links: ['ich', 'du', 'er / sie / es', 'wir', 'ihr'],
          rechts: ['mich', 'dich', 'sich', 'uns', 'euch'],
          loesung: { 'ich': 'mich', 'du': 'dich', 'er / sie / es': 'sich', 'wir': 'uns', 'ihr': 'euch' },
        },
        {
          typ: 'korrektur',
          optionen: ['Ich freue sich auf den Sommer.', 'Ich freue mich auf den Sommer.'],
          loesung: 1,
          warum: 'Con **ich** el pronombre es **mich**: *Ich freue mich*. ~~(«sich» solo va con er/sie/es y sie/Sie, no es un «se» para todo.)~~',
        },
        {
          typ: 'korrektur',
          optionen: ['Ich ziehe mich schnell an.', 'Ich mich ziehe schnell an.'],
          loesung: 0,
          warum: 'El pronombre va **detrás del verbo**: *Ich ziehe mich an*. ~~(En español «me visto» — en alemán el verbo va primero.)~~',
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies die E-Mail. Richtig oder falsch? Wähle die richtige Antwort. ~~(Lee el correo. ¿Verdadero o falso? Elige la respuesta correcta.)~~',
      textTitel: 'E-Mail von Tomasz',
      text: 'Hallo Jana, wie geht es dir? Ich fühle mich heute ein bisschen müde, denn die Woche war sehr lang. Am Freitag ruhe ich mich zu Hause aus. Aber am Samstag treffe ich mich mit Emre und Sofia im Park. Wir spielen Volleyball. Kommst du auch? Sofia interessiert sich sehr für Volleyball und spielt am besten von uns. Wir treffen uns um 14 Uhr am Eingang. Beeil dich nicht, wir warten auf dich! Ich freue mich auf deine Antwort. Viele Grüße, Tomasz',
      items: [
        { typ: 'rf', aussage: 'Tomasz fühlt sich heute sehr gut.', loesung: false },
        { typ: 'rf', aussage: 'Am Freitag bleibt Tomasz zu Hause.', loesung: true },
        {
          typ: 'mc',
          frage: 'Wer spielt am besten Volleyball?',
          optionen: ['Emre', 'Sofia', 'Tomasz'],
          loesung: 1,
        },
        {
          typ: 'mc',
          frage: 'Wann treffen sich die Freunde?',
          optionen: ['am Freitag um 14 Uhr', 'am Samstag um 4 Uhr', 'am Samstag um 14 Uhr'],
          loesung: 2,
        },
      ],
    },
    {
      typ: 'hoeren',
      titel: 'Hören',
      anweisung: 'Hör das Gespräch am Morgen. Was ist richtig? ~~(Escucha la conversación por la mañana. ¿Qué es correcto?)~~',
      audio: {
        transcript: 'Mutter: Leo, es ist schon Viertel nach sieben! Beeil dich bitte!\nSohn: Ja, Mama. Ich dusche mich nur schnell.\nMutter: Gut, aber zieh dich dann sofort an. Der Bus fährt um halb acht.\nSohn: Ich fühle mich heute nicht gut. Ich bin so müde.\nMutter: Heute Abend ruhst du dich aus.\nSohn: Nein, heute Abend treffe ich mich mit Paul. Wir gehen ins Kino. Ich freue mich schon so!\nMutter: Na gut. Aber um zehn bist du zu Hause.',
      },
      items: [
        {
          typ: 'mc',
          frage: 'Wann fährt der Bus?',
          optionen: ['um Viertel nach sieben', 'um halb acht', 'um zehn Uhr'],
          loesung: 1,
        },
        { typ: 'rf', aussage: 'Leo fühlt sich heute müde.', loesung: true },
        { typ: 'rf', aussage: 'Heute Abend ruht sich Leo zu Hause aus.', loesung: false },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'text',
      titel: 'Schreiben',
      anweisung: 'Schreib eine E-Mail an deinen Freund Jonas. ~~(Escribe un correo a tu amigo Jonas.)~~',
      aufgabe: 'Thema: dein Wochenende. Schreib zu allen drei Punkten. ~~(Tema: tu fin de semana. Escribe sobre los tres puntos.)~~',
      punkte: [
        'Wie fühlst du dich diese Woche?',
        'Wann und wo treffen wir uns am Samstag? Mach einen Vorschlag.',
        'Worauf freust du dich am Wochenende?',
      ],
      minWoerter: 25,
      beispielLoesung: 'Lieber Jonas, diese Woche fühle ich mich ein bisschen müde. Am Sonntag ruhe ich mich zu Hause aus. Aber am Samstag treffen wir uns um 15 Uhr im Café am Markt, okay? Ich freue mich auf den Kuchen und auf dich! Viele Grüße, Paula',
    },
    {
      typ: 'sprechen',
      titel: 'Sprechen',
      anweisung: 'Erzähl von deinem Tag. Sprich 60 Sekunden. ~~(Cuenta cómo es tu día. Habla 60 segundos.)~~',
      aufgabe: 'Thema: mein Tag. Erzähl von einem normalen Tag. Benutze reflexive Verben. Sprich zu allen drei Punkten.',
      punkte: [
        'Dein Morgen: Was machst du zuerst?',
        'Dein Abend: Wie ruhst du dich aus?',
        'Deine Freizeit: Wofür interessierst du dich? Mit wem triffst du dich?',
      ],
      redemittel: ['Am Morgen dusche ich mich und …', 'Ich muss mich beeilen, denn …', 'Am Abend ruhe ich mich … aus.', 'Ich interessiere mich für …'],
      maxSekunden: 60,
      beispielLoesung: 'Ich stehe um halb sieben auf. Zuerst dusche ich mich, dann ziehe ich mich an und trinke einen Kaffee. Ich muss mich immer beeilen, denn mein Bus fährt schon um Viertel nach sieben. Am Abend bin ich müde. Dann ruhe ich mich auf dem Sofa aus und höre Musik. Ich interessiere mich sehr für Musik und für Filme. Am Freitag treffe ich mich oft mit meinen Freunden. Ich freue mich immer auf den Freitag!',
    },
  ],
}
