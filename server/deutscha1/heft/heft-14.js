// Übungsheft A1 — Lektion 14: Imperativ
export default {
  lektion: 14,
  titel: 'Übungsheft — Imperativ',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Wähle, ergänze oder ordne. ~~(Elige, completa u ordena.)~~',
      items: [
        { typ: 'mc', frage: 'du kommst → ___!', optionen: ['Komm', 'Kommst', 'Komme du'], loesung: 0 },
        { typ: 'mc', frage: 'warten (Sie) → ___!', optionen: ['Warten Sie bitte', 'Warte Sie bitte', 'Sie warten bitte'], loesung: 0 },
        {
          typ: 'luecke',
          text: '{1} Sie bitte den Text! Anna, {2} bitte die Antworten!',
          bank: ['Lesen', 'schreib', 'liest'],
          loesungen: { 1: 'Lesen', 2: 'schreib' },
        },
        {
          typ: 'luecke',
          text: 'Anna, {1} bitte einen Moment — ich telefoniere. Dann {2} bitte mit!',
          bank: ['warte', 'komm', 'wartet'],
          loesungen: { 1: 'warte', 2: 'komm' },
        },
        { typ: 'satzbau', woerter: ['mir', 'Helfen', 'bitte', 'Sie'], loesung: 'Helfen Sie mir bitte!' },
        { typ: 'satzbau', woerter: ['auf', 'Steh', 'bitte'], loesung: 'Steh bitte auf!' },
        {
          typ: 'zuordnen',
          links: ['Kreuzen Sie an!', 'Schreiben Sie!', 'Lesen Sie!', 'Hören Sie!', 'Ergänzen Sie!'],
          rechts: ['¡Marque con una cruz!', '¡Escriba!', '¡Lea!', '¡Escuche!', '¡Complete!'],
          loesung: {
            'Kreuzen Sie an!': '¡Marque con una cruz!',
            'Schreiben Sie!': '¡Escriba!',
            'Lesen Sie!': '¡Lea!',
            'Hören Sie!': '¡Escuche!',
            'Ergänzen Sie!': '¡Complete!',
          },
        },
        {
          typ: 'korrektur',
          optionen: ['Komm bitte!', 'Kommst bitte!'],
          loesung: 0,
          warum: 'El imperativo con du pierde el pronombre y la terminación **-st**: *du kommst → **Komm!*** ~~(Komm, no Kommst.)~~',
        },
        {
          typ: 'korrektur',
          optionen: ['Kreuzen Sie an!', 'Ankreuzen Sie!'],
          loesung: 0,
          warum: 'También en el imperativo el prefijo va **al final**: *Kreuzen Sie **an**!* ~~(Como en los verbos separables.)~~',
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies die E-Mail. Richtig oder falsch? ~~(Lee el correo. ¿Verdadero o falso?)~~',
      textTitel: 'E-Mail von Frau Roth',
      text: 'Liebe Klasse, am Freitag ist der Test. Kommen Sie bitte um 9 Uhr! Lesen Sie zuerst die Aufgaben und schreiben Sie dann die Antworten. Kreuzen Sie an: richtig oder falsch. Haben Sie eine Frage? Rufen Sie mich an oder schreiben Sie eine E-Mail. Viele Grüße, Klara Roth',
      items: [
        { typ: 'rf', aussage: 'Der Test ist am Freitag.', loesung: true },
        { typ: 'rf', aussage: 'Der Test beginnt um 8 Uhr.', loesung: false },
        {
          typ: 'mc',
          frage: 'Was lesen Sie zuerst?',
          optionen: ['die Aufgaben', 'die Antworten', 'die E-Mail'],
          loesung: 0,
        },
        { typ: 'rf', aussage: 'Sie können Frau Roth anrufen.', loesung: true },
      ],
    },
    {
      typ: 'hoeren',
      titel: 'Hören',
      anweisung: 'Hör das Gespräch im Deutschkurs. Was ist richtig? ~~(Escucha la conversación en el curso de alemán. ¿Qué es correcto?)~~',
      audio: {
        transcript: 'Lehrerin: Guten Morgen, Pablo! Komm bitte, der Kurs fängt an.\nPablo: Entschuldigen Sie, Frau Lang! Der Bus kommt heute nicht.\nLehrerin: Kein Problem. Lies bitte Text drei.\nPablo: Text zwei?\nLehrerin: Nein, Text drei. Schreib dann die Antworten.\nPablo: Gut. Helfen Sie mir bitte! Ich habe keinen Stift.\nLehrerin: Warte einen Moment. Hier, nimm meinen Stift!',
      },
      items: [
        { typ: 'rf', aussage: 'Pablo liest Text zwei.', loesung: false },
        { typ: 'mc', frage: 'Was hat Pablo nicht?', optionen: ['ein Buch', 'einen Stift', 'einen Text'], loesung: 1 },
        { typ: 'rf', aussage: 'Der Bus kommt heute nicht.', loesung: true },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'formular',
      titel: 'Schreiben',
      anweisung: 'Lies den Text. Ergänze das Formular. ~~(Lee el texto. Completa el formulario.)~~',
      quelle: 'Guten Tag! Mein Name ist Elena Castro. Ich bin 42 Jahre alt und komme aus Argentinien. Ich wohne in Bonn. Ich mache den Test am Freitag um 9 Uhr. Meine E-Mail-Adresse ist elena.castro@post.de.',
      felder: [
        { id: 'name', label: 'Name', erwartet: ['Elena Castro', 'Castro'] },
        { id: 'alter', label: 'Alter', erwartet: ['42', '42 Jahre'] },
        { id: 'stadt', label: 'Stadt', erwartet: ['Bonn'] },
        { id: 'tag', label: 'Test am', erwartet: ['Freitag', 'am Freitag'] },
        { id: 'email', label: 'E-Mail', erwartet: ['elena.castro@post.de'] },
      ],
    },
    {
      typ: 'sprechen',
      titel: 'Sprechen',
      anweisung: 'Sprich 30 Sekunden. Benutze den Imperativ mit du. ~~(Habla 30 segundos. Usa el imperativo con du.)~~',
      aufgabe: 'Dein Freund Leo ist neu im Deutschkurs. Sag Leo vier Sätze mit Imperativ. ~~(Tu amigo Leo es nuevo en el curso de alemán. Dile cuatro frases en imperativo.)~~',
      punkte: ['kommen', 'einen Moment warten', 'den Text lesen', 'die Antworten schreiben'],
      redemittel: ['Komm bitte …', 'Warte …', 'Lies bitte …', 'Schreib bitte …'],
      maxSekunden: 30,
      beispielLoesung: 'Hallo Leo! Komm bitte, der Kurs fängt an. Warte einen Moment — hier ist dein Buch. Lies bitte den Text. Und schreib dann die Antworten!',
    },
  ],
}
