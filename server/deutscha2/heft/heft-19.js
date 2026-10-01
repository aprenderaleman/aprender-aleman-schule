// Übungsheft A2 — Lektion 19: Lesen: Kurze Texte & E-Mails
export default {
  lektion: 19,
  titel: 'Übungsheft — Lesen: Kurze Texte & E-Mails',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Wähle die richtige Antwort oder Form. ~~(Elige la respuesta o la forma correcta.)~~',
      items: [
        {
          typ: 'mc',
          frage: 'Das Sommerfest ___ am Samstag im Park statt.',
          optionen: ['findet', 'finden', 'stattfindet'],
          loesung: 0,
        },
        {
          typ: 'mc',
          frage: '„Ich kann leider nicht kommen.“ — Welcher Satz sagt das Gleiche?',
          optionen: ['Ich komme gern.', 'Ich sage ab.', 'Ich komme später.'],
          loesung: 1,
        },
        {
          typ: 'mc',
          frage: '„Das Konzert beginnt um 21 Uhr.“ — Welcher Satz sagt das Gleiche?',
          optionen: ['Das Konzert ist am Morgen.', 'Das Konzert ist am Mittag.', 'Das Konzert ist am Abend.'],
          loesung: 2,
        },
        {
          typ: 'luecke',
          text: 'Liebe Jana, ich {1} dich zu meiner Party ein. Sie {2} am Freitag um 20 Uhr statt. Bitte {3} einen Salat mit! Viele {4}, Tom',
          bank: ['lade', 'findet', 'bring', 'Grüße', 'Gruß'],
          loesungen: { 1: 'lade', 2: 'findet', 3: 'bring', 4: 'Grüße' },
        },
        {
          typ: 'luecke',
          text: 'Hallo Ben, morgen kann ich {1} nicht kommen. Ich habe einen {2} beim Zahnarzt. Sag mir bitte {3}: Wann treffen wir uns?',
          bank: ['leider', 'Termin', 'Bescheid', 'Nachricht'],
          loesungen: { 1: 'leider', 2: 'Termin', 3: 'Bescheid' },
        },
        {
          typ: 'satzbau',
          woerter: ['mitbringen', 'du', 'Kuchen', 'einen', 'Kannst'],
          loesung: 'Kannst du einen Kuchen mitbringen?',
        },
        {
          typ: 'satzbau',
          woerter: ['ab', 'mich', 'Bahnhof', 'du', 'am', 'Holst'],
          loesung: 'Holst du mich am Bahnhof ab?',
        },
        {
          typ: 'zuordnen',
          links: ['Ich sage ab.', 'Das Fest findet am Samstag statt.', 'Sag mir Bescheid!', 'Der Kurs kostet nichts.', 'Ich hole dich ab.'],
          rechts: ['Ich komme nicht.', 'Das Fest ist am Samstag.', 'Gib mir eine Antwort!', 'Der Kurs ist kostenlos.', 'Ich komme zu dir, dann gehen wir zusammen.'],
          loesung: {
            'Ich sage ab.': 'Ich komme nicht.',
            'Das Fest findet am Samstag statt.': 'Das Fest ist am Samstag.',
            'Sag mir Bescheid!': 'Gib mir eine Antwort!',
            'Der Kurs kostet nichts.': 'Der Kurs ist kostenlos.',
            'Ich hole dich ab.': 'Ich komme zu dir, dann gehen wir zusammen.',
          },
        },
        {
          typ: 'korrektur',
          optionen: ['Ich lade dich zu meiner Party ein.', 'Ich einlade dich zu meiner Party.'],
          loesung: 0,
          warum: '**einladen** es un verbo separable: *ein* va al final de la frase. ~~(Ich lade … ein — nunca «ich einlade»)~~',
        },
        {
          typ: 'korrektur',
          optionen: ['Das Konzert hat am Sonntag Platz.', 'Das Konzert findet am Sonntag statt.'],
          loesung: 1,
          warum: '«Tener lugar» se dice **stattfinden**: *Das Konzert findet … statt*. ~~(no se calca «tiene lugar» con haben + Platz)~~',
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies die E-Mail. Löse die 4 Aufgaben. ~~(Lee el e-mail. Resuelve las 4 tareas.)~~',
      textTitel: 'E-Mail von Aylin',
      text: 'Hallo Jonas, danke für deine Nachricht! Leider kann ich am Samstag nicht zu deinem Geburtstag kommen. Meine Schwester heiratet, und das Fest findet in Köln statt. Aber am Sonntag habe ich Zeit. Ich lade dich zum Frühstück ein, um zehn Uhr bei mir. Ich hole dich gern am Bahnhof ab. Kannst du Brötchen mitbringen? Den Kaffee mache ich. Sag mir bitte bis Freitag Bescheid! Viele Grüße, Aylin',
      items: [
        { typ: 'rf', aussage: 'Aylin kommt am Samstag zu Jonas.', loesung: false },
        { typ: 'rf', aussage: 'Die Schwester von Aylin heiratet in Köln.', loesung: true },
        {
          typ: 'mc',
          frage: 'Was soll Jonas mitbringen?',
          optionen: ['Kaffee', 'Brötchen', 'einen Kuchen'],
          loesung: 1,
        },
        {
          typ: 'mc',
          frage: 'Bis wann soll Jonas Bescheid sagen?',
          optionen: ['bis Freitag', 'bis Samstag', 'bis Sonntag'],
          loesung: 0,
        },
      ],
    },
    {
      typ: 'hoeren',
      titel: 'Hören',
      anweisung: 'Hör die Nachricht am Telefon. Löse die 3 Aufgaben. ~~(Escucha el mensaje de voz. Resuelve las 3 tareas.)~~',
      audio: {
        transcript: 'Hallo Miriam, hier ist Felix. Ich habe eine wichtige Information für dich. Unser Grillfest findet nicht am Freitag statt, sondern am Samstag um sechs Uhr abends. Am Freitag regnet es leider. Wir feiern im Garten von meinem Bruder. Kannst du einen Salat mitbringen? Getränke habe ich schon gekauft. Ich hole dich um halb sechs mit dem Auto ab. Sag mir bitte bis morgen Bescheid. Viele Grüße und bis bald!',
      },
      items: [
        { typ: 'rf', aussage: 'Das Grillfest findet am Freitag statt.', loesung: false },
        {
          typ: 'mc',
          frage: 'Was soll Miriam mitbringen?',
          optionen: ['Getränke', 'einen Salat', 'einen Kuchen'],
          loesung: 1,
        },
        { typ: 'rf', aussage: 'Miriam soll Felix bis morgen antworten.', loesung: true },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'text',
      titel: 'Schreiben',
      anweisung: 'Schreib eine Nachricht (ca. 25-35 Wörter). ~~(Escribe un mensaje de unas 25-35 palabras.)~~',
      aufgabe: 'Du machst am Freitag ein Fest. Lade deinen Kollegen Tarek ein. Schreib ihm eine Nachricht.',
      punkte: [
        'Wann und wo findet das Fest statt? ~~(¿cuándo y dónde es la fiesta?)~~',
        'Was soll Tarek mitbringen? ~~(¿qué debe traer Tarek?)~~',
        'Tarek soll dir Bescheid sagen. Bis wann? ~~(Tarek debe avisarte. ¿Hasta cuándo?)~~',
      ],
      minWoerter: 25,
      beispielLoesung: 'Hallo Tarek, am Freitag mache ich ein Fest und ich lade dich ein! Es findet um 19 Uhr bei mir in der Gartenstraße 4 statt. Bringst du bitte Musik mit? Sag mir bitte bis Mittwoch Bescheid.\nViele Grüße\nElena',
    },
    {
      typ: 'sprechen',
      titel: 'Sprechen',
      anweisung: 'Sprich eine Nachricht für deine Freundin. Du hast 45 Sekunden. ~~(Graba un mensaje de voz para tu amiga. Tienes 45 segundos.)~~',
      aufgabe: 'Deine Freundin Lea hat dich für Samstag zum Essen eingeladen. Du kannst leider nicht kommen. Sprich eine Nachricht für Lea.',
      punkte: [
        'Sag danke für die Einladung.',
        'Sag ab. Warum kannst du nicht kommen?',
        'Wann hast du Zeit? Sag einen neuen Tag.',
      ],
      redemittel: ['Danke für …', 'Leider kann ich am … nicht kommen.', 'Ich muss …', 'Hast du am … Zeit?'],
      maxSekunden: 45,
      beispielLoesung: 'Hallo Lea, hier ist Marco. Danke für deine Einladung! Leider kann ich am Samstag nicht kommen. Meine Eltern besuchen mich am Wochenende, und ich hole sie am Samstagabend am Bahnhof ab. Das tut mir wirklich leid. Aber nächste Woche habe ich Zeit. Hast du am Mittwoch Zeit? Dann lade ich dich zum Essen ein. Sag mir bitte Bescheid. Viele Grüße und bis bald!',
    },
  ],
}
