// Übungsheft A2 — Lektion 10: Wechselpräpositionen — Wo? / Wohin?
export default {
  lektion: 10,
  titel: 'Übungsheft — Wechselpräpositionen',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Wähle oder ergänze die richtige Form. ~~(Elige o completa la forma correcta.)~~',
      items: [
        { typ: 'mc', frage: 'Die Lampe steht auf ___ Tisch.', optionen: ['den', 'dem', 'der'], loesung: 1 },
        { typ: 'mc', frage: 'Ich hänge das Bild an ___ Wand.', optionen: ['die', 'der', 'das'], loesung: 0 },
        { typ: 'mc', frage: 'Wir gehen heute Abend ___ Kino.', optionen: ['im', 'ins', 'in der'], loesung: 1 },
        {
          typ: 'luecke',
          text: 'Die Katze liegt {1} dem Sofa. Jetzt läuft sie {2} die Küche.',
          bank: ['auf', 'in', 'zwischen'],
          loesungen: { 1: 'auf', 2: 'in' },
        },
        {
          typ: 'luecke',
          text: 'Ich stelle den Saft {1} den Kühlschrank. Die Milch steht schon {2} Kühlschrank.',
          bank: ['in', 'im', 'ins'],
          loesungen: { 1: 'in', 2: 'im' },
        },
        { typ: 'satzbau', woerter: ['auf', 'liegt', 'Das', 'dem', 'Buch', 'Tisch'], loesung: 'Das Buch liegt auf dem Tisch.' },
        { typ: 'satzbau', woerter: ['im', 'fahrt', 'Wohin', 'ihr', 'Sommer'], loesung: 'Wohin fahrt ihr im Sommer?' },
        {
          typ: 'zuordnen',
          links: ['an + dem', 'in + dem', 'an + das', 'in + das'],
          rechts: ['am', 'im', 'ans', 'ins'],
          loesung: { 'an + dem': 'am', 'in + dem': 'im', 'an + das': 'ans', 'in + das': 'ins' },
        },
        {
          typ: 'korrektur',
          optionen: ['Ich war gestern ins Kino.', 'Ich war gestern im Kino.'],
          loesung: 1,
          warum: 'Con *war* preguntas **Wo?** → Dativ: **im** Kino. ~~(«estuve EN el cine» = posición, no movimiento.)~~',
        },
        {
          typ: 'korrektur',
          optionen: ['Er legt das Handy auf den Tisch.', 'Er legt das Handy auf dem Tisch.'],
          loesung: 0,
          warum: '**legen** = acción → **Wohin?** → Akkusativ: *auf den Tisch*. ~~(liegen = posición + Dativ · legen = poner + Akkusativ.)~~',
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies den Text. Richtig oder falsch? ~~(Lee el texto. ¿Verdadero o falso?)~~',
      textTitel: 'Notiz von Miriam',
      text: 'Hallo Diego! Ich bin bis 18 Uhr im Büro. Dein Essen steht im Kühlschrank, die Pizza liegt auf dem Tisch. Der Schlüssel für den Keller hängt neben der Tür. Bitte stell die Flaschen in den Keller und leg die Post auf meinen Schreibtisch. Die Katze war heute schon im Garten. Um 19 Uhr gehen wir zusammen ins Restaurant. Bis später! Miriam',
      items: [
        { typ: 'rf', aussage: 'Miriam ist bis 18 Uhr im Büro.', loesung: true },
        {
          typ: 'mc',
          frage: 'Wo liegt die Pizza?',
          optionen: ['im Kühlschrank', 'auf dem Tisch', 'im Keller'],
          loesung: 1,
        },
        { typ: 'rf', aussage: 'Der Schlüssel hängt neben dem Fenster.', loesung: false },
        {
          typ: 'mc',
          frage: 'Wohin kommen die Flaschen?',
          optionen: ['auf den Schreibtisch', 'in den Garten', 'in den Keller'],
          loesung: 2,
        },
      ],
    },
    {
      typ: 'hoeren',
      titel: 'Hören',
      anweisung: 'Hör das Gespräch in der neuen Wohnung. Was ist richtig? ~~(Escucha la conversación en el piso nuevo. ¿Qué es correcto?)~~',
      audio: {
        transcript: 'Mann: Hallo Lena! Wohin stelle ich den Karton mit den Büchern?\nFrau: Ins Wohnzimmer, bitte. Stell den Karton neben das Sofa.\nMann: Und die Lampe? Kommt sie auf den Tisch?\nFrau: Nein, nicht auf den Tisch, sondern auf das Regal im Schlafzimmer.\nMann: Gut. Und wo ist mein Handy? Ich finde es nicht.\nFrau: Es liegt im Flur auf dem Stuhl, unter der Jacke.\nMann: Danke! Jetzt hänge ich noch das Bild über das Bett.',
      },
      items: [
        { typ: 'mc', frage: 'Wohin kommt der Karton mit den Büchern?', optionen: ['auf den Tisch', 'in den Flur', 'neben das Sofa'], loesung: 2 },
        { typ: 'rf', aussage: 'Die Lampe kommt auf den Tisch.', loesung: false },
        { typ: 'rf', aussage: 'Das Handy liegt im Flur auf dem Stuhl.', loesung: true },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'formular',
      titel: 'Schreiben',
      anweisung: 'Lies den Text. Ergänze das Formular. ~~(Lee el texto. Completa el formulario.)~~',
      quelle: 'Guten Tag, mein Name ist Karim Said. Ich habe heute meine Tasche im Bus vergessen, Linie 12. Die Tasche ist blau. In der Tasche sind ein Buch und eine Brille. Meine Telefonnummer ist 0163 778899.',
      felder: [
        { id: 'name', label: 'Name', erwartet: ['Karim Said', 'Said'] },
        { id: 'sache', label: 'Vergessene Sache', erwartet: ['eine Tasche', 'die Tasche', 'Tasche'] },
        { id: 'wo', label: 'Wo?', erwartet: ['im Bus', 'Bus', 'im Bus, Linie 12', 'im Bus Linie 12', 'Bus (Linie 12)'] },
        { id: 'farbe', label: 'Farbe', erwartet: ['blau'] },
        { id: 'telefon', label: 'Telefonnummer', erwartet: ['0163 778899', '0163778899'] },
      ],
    },
    {
      typ: 'sprechen',
      titel: 'Sprechen',
      anweisung: 'Sprich 60 Sekunden über dein Zimmer. ~~(Habla 60 segundos sobre tu habitación.)~~',
      aufgabe: 'Beschreib dein Zimmer. Wo sind deine Sachen?',
      punkte: [
        'Was steht im Zimmer? Wo?',
        'Was hängt an der Wand?',
        'Wohin legst du am Abend dein Handy?',
      ],
      redemittel: ['… steht neben / vor / zwischen …', '… liegt auf / unter …', 'An der Wand hängt …', 'Ich lege mein Handy auf / in …'],
      maxSekunden: 60,
      beispielLoesung: 'Mein Zimmer ist nicht groß. Das Bett steht neben dem Fenster. Vor dem Bett liegt ein Teppich. Der Schreibtisch steht zwischen dem Schrank und der Tür. Auf dem Schreibtisch steht mein Computer. An der Wand hängt ein Bild von Madrid. Am Abend lege ich mein Handy auf den Schreibtisch, nicht ins Bett.',
    },
  ],
}
