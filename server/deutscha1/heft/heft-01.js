// Übungsheft A1 — Lektion 01: Das Zertifikat A1 im Überblick
export default {
  lektion: 1,
  titel: 'Übungsheft — Das Zertifikat A1',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Wissen',
      anweisung: 'Was weißt du über die Prüfung? Wähle die richtige Antwort. ~~(¿Qué sabes del examen? Elige la respuesta correcta.)~~',
      items: [
        {
          typ: 'mc',
          frage: 'Wie viele Teile hat die A1-Prüfung?',
          optionen: ['vier', 'zwei', 'drei'],
          loesung: 0,
        },
        {
          typ: 'mc',
          frage: 'Du bestehst die Prüfung mit ___.',
          optionen: ['60 % der Punkte', '100 % der Punkte', '30 % der Punkte'],
          loesung: 0,
        },
        {
          typ: 'mc',
          frage: 'Sprechen ist ___.',
          optionen: ['in der Gruppe', 'allein mit dem Prüfer'],
          loesung: 0,
        },
        {
          typ: 'mc',
          frage: 'Was kommt zuerst?',
          optionen: ['die Anmeldung', 'das Zeugnis', 'das Ergebnis'],
          loesung: 0,
        },
        { typ: 'rf', aussage: 'Die Prüfung beginnt mit Hören.', loesung: true },
        { typ: 'rf', aussage: 'Man kann die vier Teile einzeln bestehen.', loesung: false },
        { typ: 'rf', aussage: 'Das Zertifikat A1 ist die erste Stufe.', loesung: true },
        {
          typ: 'zuordnen',
          links: ['Hören', 'Lesen', 'Schreiben', 'Sprechen'],
          rechts: ['eine Durchsage verstehen', 'ein Schild verstehen', 'ein Formular ausfüllen', 'sich vorstellen'],
          loesung: {
            'Hören': 'eine Durchsage verstehen',
            'Lesen': 'ein Schild verstehen',
            'Schreiben': 'ein Formular ausfüllen',
            'Sprechen': 'sich vorstellen',
          },
        },
        {
          typ: 'zuordnen',
          links: ['die Prüfung', 'das Zeugnis', 'die Anmeldung', 'bestehen'],
          rechts: ['el examen', 'el diploma', 'la inscripción', 'aprobar'],
          loesung: {
            'die Prüfung': 'el examen',
            'das Zeugnis': 'el diploma',
            'die Anmeldung': 'la inscripción',
            'bestehen': 'aprobar',
          },
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies den Text. Richtig oder falsch? ~~(Lee el texto. ¿Verdadero o falso?)~~',
      textTitel: 'Notiz von Ana',
      text: 'Hallo! Ich bin Ana aus Sevilla. Ich lerne Deutsch. Ich mache die Prüfung im Juni. Die Prüfung hat vier Teile: Hören, Lesen, Schreiben und Sprechen. Sprechen ist in der Gruppe. Ich brauche das Zertifikat für das Visum. Mein Ziel: 60 Prozent — dann bekomme ich das Zeugnis!',
      items: [
        { typ: 'rf', aussage: 'Ana macht die Prüfung im Mai.', loesung: false },
        { typ: 'rf', aussage: 'Die Prüfung hat vier Teile.', loesung: true },
        { typ: 'rf', aussage: 'Ana braucht das Zertifikat für das Visum.', loesung: true },
        {
          typ: 'mc',
          frage: 'Was bekommt Ana mit 60 Prozent?',
          optionen: ['das Zeugnis', 'das Visum', 'die Anmeldung'],
          loesung: 0,
        },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'text',
      titel: 'Schreiben',
      anweisung: 'Schreib 3 Sätze über deine Prüfung. ~~(Escribe 3 frases sobre tu examen.)~~',
      aufgabe: 'Dein Prüfungsplan: Wann machst du die Prüfung? Warum brauchst du das Zertifikat? Ein Satz über die Prüfung. ~~(Tu plan de examen: ¿cuándo lo haces? ¿por qué necesitas el certificado? Y una frase sobre el examen.)~~',
      punkte: [
        'Wann? (im Mai, im Juni …)',
        'Warum? (für das Visum, für die Arbeit …)',
        'Ein Satz über die Prüfung (vier Teile, 60 %)',
      ],
      minWoerter: 12,
      beispielLoesung: 'Ich mache die Prüfung im Juni. Ich brauche das Zertifikat für das Visum. Die Prüfung hat vier Teile. Mein Ziel: 60 Prozent!',
    },
  ],
}
