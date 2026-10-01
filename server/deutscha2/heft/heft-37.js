// Übungsheft A2 — Lektion 37: Gesundheit & Körper
export default {
  lektion: 37,
  titel: 'Übungsheft — Gesundheit & Körper',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Löse die Aufgaben. ~~(Resuelve los ejercicios.)~~',
      items: [
        { typ: 'mc', frage: 'Mein Kopf tut ___ .', optionen: ['weh', 'Schmerzen', 'krank'], loesung: 0 },
        { typ: 'mc', frage: 'Ich habe Husten. Ich bin ___ .', optionen: ['konstipiert', 'erkältet', 'Fieber'], loesung: 1 },
        {
          typ: 'luecke',
          text: 'Guten Tag, ich möchte einen {1} machen. — Können Sie am Freitag um 10 Uhr kommen? — Ja, das {2} gut.',
          bank: ['Termin', 'passt', 'Fieber'],
          loesungen: { 1: 'Termin', 2: 'passt' },
        },
        {
          typ: 'luecke',
          text: 'Mein {1} tut weh. Ich gehe in die {2} und kaufe Tabletten.',
          bank: ['Rücken', 'Apotheke', 'Tablette'],
          loesungen: { 1: 'Rücken', 2: 'Apotheke' },
        },
        { typ: 'satzbau', woerter: ['weh', 'meine', 'tun', 'Beine'], loesung: 'Meine Beine tun weh.' },
        { typ: 'satzbau', woerter: ['gegen', 'Sie', 'Halsschmerzen', 'Haben', 'etwas'], loesung: 'Haben Sie etwas gegen Halsschmerzen?' },
        {
          typ: 'zuordnen',
          links: ['la cabeza', 'la espalda', 'la garganta', 'la pierna', 'el brazo'],
          rechts: ['der Kopf', 'der Rücken', 'der Hals', 'das Bein', 'der Arm'],
          loesung: { 'la cabeza': 'der Kopf', 'la espalda': 'der Rücken', 'la garganta': 'der Hals', 'la pierna': 'das Bein', 'el brazo': 'der Arm' },
        },
        {
          typ: 'korrektur',
          optionen: ['Ich bin konstipiert.', 'Ich bin erkältet.'],
          loesung: 1,
          warum: 'Falso amigo: *konstipiert* significa estreñido. «Estoy constipado» = **Ich bin erkältet**. ~~(¡El clásico!)~~',
        },
        {
          typ: 'korrektur',
          optionen: ['Ich habe Fieber.', 'Ich bin Fieber.'],
          loesung: 0,
          warum: 'La fiebre va con **haben**: *Ich habe Fieber*. ~~(«Estoy con fiebre» no se dice con sein.)~~',
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies den Text. Löse die vier Aufgaben. ~~(Lee el texto. Resuelve las cuatro tareas.)~~',
      textTitel: 'Ein Zettel für die Familie',
      text: 'Hallo Kinder, ich bin um 15 Uhr beim Arzt — mein Rücken tut seit Montag weh. Danach gehe ich noch in die Apotheke und kaufe Tabletten für Oma. Sie ist erkältet und bleibt heute im Bett. Papa kommt um 18 Uhr nach Hause und kocht Suppe. Luca, bitte mach deine Hausaufgaben! Und Marie: Heute gibt es kein Fußballtraining — deine Trainerin hat Fieber. Bis später! Mama',
      items: [
        { typ: 'rf', aussage: 'Mama ist um 15 Uhr beim Arzt.', loesung: true },
        { typ: 'rf', aussage: 'Die Tabletten sind für Luca.', loesung: false },
        {
          typ: 'mc',
          frage: 'Wer kocht heute?',
          optionen: ['Mama', 'Papa', 'Oma'],
          loesung: 1,
        },
        { typ: 'rf', aussage: 'Marie hat heute Fußballtraining.', loesung: false },
      ],
    },
    {
      typ: 'hoeren',
      titel: 'Hören',
      anweisung: 'Hör das Gespräch am Telefon. Löse die drei Aufgaben. ~~(Escucha la conversación por teléfono. Resuelve las tres tareas.)~~',
      audio: {
        transcript: 'Frau: Praxis Doktor Winter, guten Tag.\nMann: Guten Tag, hier ist Jonas Keller. Ich möchte einen Termin machen. Ich habe seit drei Tagen Halsschmerzen und Fieber.\nFrau: Können Sie morgen um neun Uhr kommen, Herr Keller?\nMann: Nein, am Vormittag muss ich leider arbeiten. Geht es auch am Nachmittag?\nFrau: Ja, morgen um sechzehn Uhr ist noch ein Termin frei.\nMann: Das passt gut. Vielen Dank!\nFrau: Bleiben Sie heute im Bett und trinken Sie viel Tee. Gute Besserung!',
      },
      items: [
        { typ: 'rf', aussage: 'Herr Keller hat Bauchschmerzen.', loesung: false },
        {
          typ: 'mc',
          frage: 'Wann ist der Termin?',
          optionen: ['morgen um 9 Uhr', 'morgen um 16 Uhr', 'heute um 16 Uhr'],
          loesung: 1,
        },
        { typ: 'rf', aussage: 'Herr Keller muss morgen am Vormittag arbeiten.', loesung: true },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'text',
      titel: 'Schreiben',
      anweisung: 'Schreib eine kurze Nachricht (ca. 25 Wörter). ~~(Escribe un mensaje corto de unas 25 palabras.)~~',
      aufgabe: 'Du bist krank und kannst nicht zur Arbeit kommen. Schreib deiner Chefin Frau Lang eine Nachricht.',
      punkte: [
        'Sag ab: Du kannst nicht kommen.',
        'Nenne den Grund: Was hast du?',
        'Sag: Wann kommst du wieder?',
      ],
      minWoerter: 25,
      beispielLoesung: 'Liebe Frau Lang, ich kann heute leider nicht zur Arbeit kommen. Ich bin erkältet und habe Fieber. Ich bleibe zwei Tage zu Hause. Am Donnerstag komme ich wieder. Viele Grüße, Teresa',
    },
    {
      typ: 'sprechen',
      titel: 'Sprechen',
      anweisung: 'Sprich eine Nachricht für die Arztpraxis. Sprich 45 Sekunden. ~~(Deja un mensaje de voz para la consulta médica. Habla 45 segundos.)~~',
      aufgabe: 'Du bist krank. Die Arztpraxis ist heute schon geschlossen. Sprich eine Nachricht auf den Anrufbeantworter.',
      punkte: [
        'Sag deinen Namen.',
        'Was tut weh? Seit wann?',
        'Du möchtest einen Termin. Wann kannst du kommen?',
      ],
      redemittel: ['Guten Tag, hier ist …', 'Mein … tut weh.', 'Ich habe seit … Schmerzen.', 'Ich möchte einen Termin machen.'],
      maxSekunden: 45,
      beispielLoesung: 'Guten Tag, hier ist Diego Marín. Ich fühle mich nicht gut. Mein Kopf tut weh und ich habe seit gestern Fieber. Ich bin auch erkältet. Ich möchte bitte einen Termin machen. Morgen am Vormittag kann ich kommen. Bitte rufen Sie mich an. Vielen Dank und auf Wiederhören!',
    },
  ],
}
