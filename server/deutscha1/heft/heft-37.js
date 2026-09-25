// Übungsheft A1 — Lektion 37: Prüfungssimulation 2 + Strategien
// Gran repaso final: Teil 1 'Training' mezcla los puntos clave de TODO el curso.
export default {
  lektion: 37,
  titel: 'Übungsheft — Prüfungssimulation 2',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Training',
      anweisung: 'Die Aufgaben kommen aus dem ganzen Kurs. Wähle die richtige Form. ~~(Los ejercicios repasan todo el curso. Elige la forma correcta.)~~',
      items: [
        { typ: 'mc', frage: 'Was ___ Sie von Beruf?', optionen: ['sind', 'bist', 'seid'], loesung: 0 },
        { typ: 'mc', frage: 'ein Apfel — zwei ___', optionen: ['Äpfel', 'Apfels', 'Apfeln'], loesung: 0 },
        { typ: 'mc', frage: '___ Sie mir bitte ein Wasser!', optionen: ['Geben', 'Gibst', 'Gebt'], loesung: 0 },
        {
          typ: 'luecke',
          text: 'Das ist {1} Bruder. Und das ist {2} Schwester.',
          bank: ['mein', 'meine', 'meinen'],
          loesungen: { 1: 'mein', 2: 'meine' },
        },
        {
          typ: 'luecke',
          text: 'Ich {1} einen Kaffee, bitte. — Gern! {2} Sie noch etwas?',
          bank: ['möchte', 'Möchten', 'kann'],
          loesungen: { 1: 'möchte', 2: 'Möchten' },
        },
        { typ: 'satzbau', woerter: ['du', 'kommst', 'woher'], loesung: 'Woher kommst du?' },
        { typ: 'satzbau', woerter: ['möchte', 'Deutsch', 'ich', 'lernen'], loesung: 'Ich möchte Deutsch lernen.' },
        {
          typ: 'zuordnen',
          links: ['geöffnet', 'geschlossen', 'verboten', 'der Ausweis'],
          rechts: ['abierto', 'cerrado', 'prohibido', 'el documento de identidad'],
          loesung: { 'geöffnet': 'abierto', 'geschlossen': 'cerrado', 'verboten': 'prohibido', 'der Ausweis': 'el documento de identidad' },
        },
        {
          typ: 'korrektur',
          optionen: ['Am Montag arbeite ich nicht.', 'Am Montag ich arbeite nicht.'],
          loesung: 0,
          warum: 'El **Verb** siempre en 2ª posición: *Am Montag arbeite ich nicht*. ~~(Después de «Am Montag» viene el verbo, no el sujeto.)~~',
        },
        {
          typ: 'korrektur',
          optionen: ['Ich trinke gern Kaffee.', 'Ich gern trinke Kaffee.'],
          loesung: 0,
          warum: '**gern** va DESPUÉS del verbo: *Ich trinke gern Kaffee*. ~~(Nunca entre el sujeto y el verbo.)~~',
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies die zwei Schilder. Richtig oder falsch? Wie in der Prüfung: Nichts nachschlagen! ~~(Lee los dos letreros. ¿Verdadero o falso? Como en el examen: ¡sin diccionario!)~~',
      textTitel: 'Zwei Schilder',
      text: 'a) (an der Sprachschule) „Die Sprachschule ist vom 1. bis 15. August geschlossen. Ab 16. August sind wir wieder für Sie da.“ — b) (im Supermarkt) „Angebot heute: 1 Liter Milch nur 1 Euro. Der Supermarkt ist am Sonntag geschlossen.“',
      items: [
        { typ: 'rf', aussage: 'Die Sprachschule ist im August immer geöffnet.', loesung: false },
        { typ: 'rf', aussage: 'Ab 16. August ist die Sprachschule wieder geöffnet.', loesung: true },
        { typ: 'rf', aussage: 'Ein Liter Milch kostet heute einen Euro.', loesung: true },
        {
          typ: 'mc',
          frage: 'Wann ist der Supermarkt geschlossen?',
          optionen: ['am Sonntag', 'am Samstag', 'im August'],
          loesung: 0,
        },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'text',
      titel: 'Schreiben',
      anweisung: 'Wie in der Prüfung: Schreib eine kurze Nachricht (ca. 30 Wörter). Denk an Anrede und Gruß. ~~(Como en el examen: escribe un mensaje corto de unas 30 palabras. No olvides el saludo y la despedida.)~~',
      aufgabe: 'Du kochst am Samstag für deine Freunde. Schreib deinem Freund Ben eine Nachricht.',
      punkte: [
        'Lade Ben ein. ~~(Invita a Ben.)~~',
        'Sag: Wann ist das Essen? ~~(Di cuándo es la comida.)~~',
        'Frag: Was bringt er mit? ~~(Pregunta qué trae él.)~~',
      ],
      minWoerter: 25,
      beispielLoesung: 'Lieber Ben, ich koche am Samstag für meine Freunde. Wir essen um 19 Uhr bei mir. Kommst du auch? Bringst du bitte Wasser oder Brot mit? Viele Grüße, Ana',
    },
  ],
}
