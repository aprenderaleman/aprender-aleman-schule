// Übungsheft A1 — Lektion 21: Lesen: Notizen & Anzeigen
// Bloque 2 (Prüfungsstrategie): Teil 1 = Training (W-Fragen + Zahlen-Falle).
export default {
  lektion: 21,
  titel: 'Übungsheft — Lesen: Notizen & Anzeigen',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Training',
      anweisung: 'Trainiere die Strategie: Wer? Wann? Wo? Wie viel? Lies und antworte. ~~(Entrena la estrategia: ¿quién, cuándo, dónde, cuánto? Lee y responde.)~~',
      items: [
        {
          typ: 'zuordnen',
          links: ['Wann?', 'Wo?', 'Wie viel?', 'Wer?'],
          rechts: ['um 18 Uhr', 'im Café am Bahnhof', '80 Euro', 'Lena'],
          loesung: {
            'Wann?': 'um 18 Uhr',
            'Wo?': 'im Café am Bahnhof',
            'Wie viel?': '80 Euro',
            'Wer?': 'Lena',
          },
        },
        {
          typ: 'mc',
          frage: 'Notiz: „Der Termin ist nicht um 9 Uhr, sondern um 10 Uhr.“ — Wann ist der Termin?',
          optionen: ['um 10 Uhr', 'um 9 Uhr'],
          loesung: 0,
        },
        {
          typ: 'mc',
          frage: 'Anzeige: „Fahrrad zu verkaufen! Fast neu, nur 60 Euro. Bitte am Abend anrufen.“ — Wann soll man anrufen?',
          optionen: ['am Abend', 'am Morgen'],
          loesung: 0,
        },
        {
          typ: 'rf',
          aussage: 'Notiz: „Die Party ist am Samstag um 20 Uhr.“ — Die Party ist am Sonntag.',
          loesung: false,
        },
        {
          typ: 'rf',
          aussage: 'Anzeige: „Deutschkurs, 35 Euro pro Monat.“ — Der Kurs kostet 35 Euro pro Monat.',
          loesung: true,
        },
        {
          typ: 'rf',
          aussage: 'Ein Wort aus der Aufgabe steht im Text. Die Aufgabe ist dann immer richtig.',
          loesung: false,
        },
        {
          typ: 'rf',
          aussage: 'Zwei Zahlen im Text? Lies den ganzen Satz — nur eine Zahl ist richtig.',
          loesung: true,
        },
        {
          typ: 'mc',
          frage: 'Notiz: „Bring bitte Brot und Käse mit!“ — Was soll man mitbringen?',
          optionen: ['Brot und Käse', 'nur Brot', 'Käse und Milch'],
          loesung: 0,
        },
        {
          typ: 'luecke',
          text: 'Der Tisch kostet nur 20 Euro — das ist sehr {1}. Das Auto kostet 9.000 Euro — das ist {2}.',
          bank: ['billig', 'teuer', 'neu'],
          loesungen: { 1: 'billig', 2: 'teuer' },
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies die Notiz. Richtig oder falsch? ~~(Lee la nota. ¿Verdadero o falso?)~~',
      textTitel: 'Notiz von Karin',
      text: 'Hallo Pablo, wir machen am Sonntag ein Picknick im Park. Wir treffen uns nicht um 12 Uhr, sondern erst um 13 Uhr. Ich kaufe Brot, Käse und Saft. Bring bitte deine Gitarre mit! Meine neue Telefonnummer: 0176 44 55 218. Bis Sonntag! Karin',
      items: [
        { typ: 'rf', aussage: 'Das Picknick ist am Sonntag.', loesung: true },
        { typ: 'rf', aussage: 'Sie treffen sich um 12 Uhr.', loesung: false },
        {
          typ: 'mc',
          frage: 'Was soll Pablo mitbringen?',
          optionen: ['seine Gitarre', 'Brot und Käse', 'Saft'],
          loesung: 0,
        },
        {
          typ: 'mc',
          frage: 'Wer kauft den Saft?',
          optionen: ['Karin', 'Pablo'],
          loesung: 0,
        },
      ],
    },
    {
      typ: 'hoeren',
      titel: 'Hören',
      anweisung: 'Hör die Nachricht. Was ist richtig? ~~(Escucha el mensaje. ¿Qué es correcto?)~~',
      audio: {
        transcript: 'Hallo Sofia, hier ist Jan. Ich verkaufe meinen Tisch. Er ist fast neu und kostet nur 40 Euro. Das ist billig! Möchtest du den Tisch kaufen? Dann komm bitte morgen. Aber nicht um 17 Uhr, sondern um 18 Uhr. Ich wohne in der Bahnhofstraße 5. Ruf mich bitte an! Tschüs!',
      },
      items: [
        { typ: 'rf', aussage: 'Jan verkauft einen Tisch.', loesung: true },
        { typ: 'rf', aussage: 'Der Tisch kostet 14 Euro.', loesung: false },
        { typ: 'mc', frage: 'Jan sagt: Komm morgen um …', optionen: ['17 Uhr', '18 Uhr', '8 Uhr'], loesung: 1 },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'text',
      titel: 'Schreiben',
      anweisung: 'Schreib eine Notiz. ~~(Escribe una nota.)~~',
      aufgabe: 'Schreib eine kleine Notiz an deinen Freund Diego.',
      punkte: [
        'Wann kommst du?',
        'Wo bist du?',
        'Was soll Diego mitbringen?',
      ],
      minWoerter: 12,
      beispielLoesung: 'Hallo Diego, ich komme um 17 Uhr. Ich bin im Café am Markt. Bring bitte das Buch mit!',
    },
    {
      typ: 'sprechen',
      titel: 'Sprechen',
      anweisung: 'Sprich 30 Sekunden. ~~(Habla 30 segundos.)~~',
      aufgabe: 'Du verkaufst dein Fahrrad. Sprich eine Nachricht für deinen Freund Leo. ~~(Vendes tu bicicleta. Deja un mensaje de voz a tu amigo Leo.)~~',
      punkte: ['Was verkaufst du?', 'Wie ist das Fahrrad?', 'Wie viel kostet es?', 'Wann kann Leo anrufen?'],
      redemittel: ['Ich verkaufe …', 'Es ist …', 'Es kostet nur …', 'Ruf mich bitte … an.'],
      maxSekunden: 30,
      beispielLoesung: 'Hallo Leo! Ich verkaufe mein Fahrrad. Es ist fast neu und sehr gut. Es kostet nur 70 Euro. Möchtest du das Fahrrad kaufen? Dann ruf mich bitte heute Abend an. Tschüs!',
    },
  ],
}
