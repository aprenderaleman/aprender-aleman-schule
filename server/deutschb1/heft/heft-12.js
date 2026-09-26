// Übungsheft B1 — Lektion 12: Relativsätze
export default {
  lektion: 12,
  titel: 'Übungsheft — Relativsätze',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Welches Relativpronomen passt? Frag dich: Welches Nomen? Welche Rolle im Nebensatz?',
      items: [
        { typ: 'mc', frage: 'Das ist der Lehrer, ___ sehr gut erklärt.', optionen: ['den', 'der', 'dem'], loesung: 1 },
        { typ: 'mc', frage: 'Wie heißt der Film, ___ du mir empfohlen hast?', optionen: ['der', 'dem', 'den'], loesung: 2 },
        { typ: 'mc', frage: 'Das sind die Nachbarn, ___ ich oft beim Einkaufen helfe.', optionen: ['denen', 'die', 'den'], loesung: 0 },
        {
          typ: 'luecke',
          text: 'Die Frau, {1} neben mir wohnt, heißt Frau Brandt. Die Blumen, {2} sie im Garten hat, sind wunderschön. Ihr Hund, {3} ich manchmal Futter gebe, ist sehr lieb.',
          bank: ['die', 'der', 'dem', 'den'],
          loesungen: { 1: 'die', 2: 'die', 3: 'dem' },
        },
        {
          typ: 'luecke',
          text: 'Das ist das Café, {1} wir uns zum ersten Mal getroffen haben. Der Kellner, {2} dort arbeitet, kennt uns schon. Das Buch, {3} ich dort gelesen habe, war spannend.',
          bank: ['wo', 'der', 'das', 'dem', 'den'],
          loesungen: { 1: 'wo', 2: 'der', 3: 'das' },
        },
        {
          typ: 'zuordnen',
          links: ['der Mann, ___ ich jeden Tag sehe', 'die Kollegin, ___ ich helfe', 'das Kind, ___ dort spielt', 'die Leute, ___ ich schreibe', 'die Stadt, ___ ich wohne'],
          rechts: ['den', 'der', 'das', 'denen', 'wo'],
          loesung: {
            'der Mann, ___ ich jeden Tag sehe': 'den',
            'die Kollegin, ___ ich helfe': 'der',
            'das Kind, ___ dort spielt': 'das',
            'die Leute, ___ ich schreibe': 'denen',
            'die Stadt, ___ ich wohne': 'wo',
          },
        },
        { typ: 'satzbau', woerter: ['ist', 'der', 'Chef', 'dort', 'Mann', 'steht', 'mein', 'Der'], loesung: 'Der Mann, der dort steht, ist mein Chef.', alt: ['Der Chef, der dort steht, ist mein Mann.'] },
        {
          typ: 'korrektur',
          optionen: ['Das ist die Stadt, wo ich geboren bin.', 'Das ist die Stadt, wo ich bin geboren.'],
          loesung: 0,
          warum: 'El relativo es una subordinada: el verbo conjugado va **al final** (*geboren **bin***), no en segunda posición.',
        },
        {
          typ: 'korrektur',
          optionen: ['Der Film, der wir gesehen haben, war super.', 'Der Film, den wir gesehen haben, war super.'],
          loesung: 1,
          warum: 'En español «que» no cambia. En alemán el pronombre sigue su **función**: *wir* es el sujeto, el film es objeto → **Akkusativ: den**.',
        },
        {
          typ: 'korrektur',
          optionen: ['Ich habe einen Kuchen gebacken, der sehr gut schmeckt.', 'Ich habe einen Kuchen gebacken der sehr gut schmeckt.'],
          loesung: 0,
          warum: 'Antes del relativo la **coma es obligatoria** en alemán, aunque en español a menudo no se ponga.',
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies die Zeitungsnotiz. Löse dann die vier Aufgaben.',
      textTitel: 'Neues Leben im alten Bahnhof',
      text: 'Das Café „Gleis 3“, das zwei Jahre lang geschlossen war, öffnet am 1. Mai wieder. Die neuen Besitzer sind Sofia und Karim Haddad, die vorher ein kleines Restaurant in Kassel hatten. Sie haben das alte Gebäude, das der Stadt gehört, zusammen mit Freunden renoviert. Im Café gibt es Kuchen, den Sofia selbst backt, und Kaffee aus einer kleinen Rösterei in der Region. Einmal im Monat organisieren die beiden einen Abend für Menschen, die neu in der Stadt sind. Dort können sie andere Leute kennenlernen, denen es genauso geht. Karim sagt: „Wir wollen einen Ort, wo alle willkommen sind.“ Das Café ist von Dienstag bis Sonntag von 9 bis 18 Uhr geöffnet. Montags bleibt es geschlossen.',
      items: [
        { typ: 'rf', aussage: 'Das Café war zwei Jahre lang geschlossen.', loesung: true },
        {
          typ: 'mc',
          frage: 'Wer backt den Kuchen im Café?',
          optionen: ['Karim', 'Sofia', 'Freunde von Sofia und Karim'],
          loesung: 1,
        },
        {
          typ: 'mc',
          frage: 'Für wen ist der Abend einmal im Monat?',
          optionen: ['für Menschen, die neu in der Stadt sind', 'für Freunde aus Kassel', 'für Leute, die Kaffee rösten'],
          loesung: 0,
        },
        { typ: 'rf', aussage: 'Am Montag kann man im Café frühstücken.', loesung: false },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'formular',
      titel: 'Schreiben',
      anweisung: 'Lies die Nachricht. Ergänze dann das Formular für die Tandembörse.',
      quelle: 'Hallo! Ich heiße Valentina Rossi und komme aus Italien. Meine Muttersprache ist Italienisch. Ich suche eine Tandempartnerin, die Deutsch als Muttersprache spricht und Italienisch lernen möchte. Am liebsten treffe ich mich am Mittwochabend in einem ruhigen Café. Ich wohne in Bremen-Neustadt, wo es viele schöne Cafés gibt.',
      felder: [
        { id: 'name', label: 'Name', erwartet: ['Valentina Rossi', 'Rossi'] },
        { id: 'muttersprache', label: 'Muttersprache', erwartet: ['Italienisch'] },
        { id: 'lernsprache', label: 'Ich möchte lernen', erwartet: ['Deutsch'] },
        { id: 'termin', label: 'Treffen — wann?', erwartet: ['Mittwochabend', 'am Mittwochabend', 'mittwochabends', 'Mittwoch', 'mittwochs'] },
        { id: 'wohnort', label: 'Wohnort', erwartet: ['Bremen-Neustadt', 'Bremen Neustadt', 'Bremen'] },
      ],
    },
  ],
}
