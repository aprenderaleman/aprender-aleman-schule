// Übungsheft A1 — Lektion 02: Prüfungsformat & Antwortbogen
export default {
  lektion: 2,
  titel: 'Übungsheft — Format & Antwortbogen',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Wissen',
      anweisung: 'Was weißt du über den Prüfungstag? Wähle die richtige Antwort. ~~(¿Qué sabes del día del examen? Elige la respuesta correcta.)~~',
      items: [
        {
          typ: 'mc',
          frage: 'Was zählt in der Prüfung?',
          optionen: ['nur der Antwortbogen', 'nur das Aufgabenblatt'],
          loesung: 0,
        },
        {
          typ: 'mc',
          frage: 'Wann überträgst du die Antworten?',
          optionen: ['sofort, Teil für Teil', 'am Ende, in der letzten Minute'],
          loesung: 0,
        },
        {
          typ: 'mc',
          frage: 'Ein Kreuz ist falsch. Was machst du?',
          optionen: ['Ich male das Feld ganz aus und kreuze neu an.', 'Ich mache zwei Kreuze.'],
          loesung: 0,
        },
        {
          typ: 'mc',
          frage: 'Was bringst du mit?',
          optionen: ['Ausweis und Kuli', 'Handy und Wörterbuch'],
          loesung: 0,
        },
        { typ: 'rf', aussage: 'Ein Handy ist in der Prüfung okay.', loesung: false },
        { typ: 'rf', aussage: 'Ich zeige am Prüfungstag meinen Ausweis.', loesung: true },
        { typ: 'rf', aussage: 'Ich mache ein Kreuz pro Aufgabe.', loesung: true },
        {
          typ: 'zuordnen',
          links: ['ankreuzen', 'übertragen', 'der Radiergummi', 'der Ausweis'],
          rechts: ['marcar con una cruz', 'pasar, transferir', 'la goma de borrar', 'el documento de identidad'],
          loesung: {
            'ankreuzen': 'marcar con una cruz',
            'übertragen': 'pasar, transferir',
            'der Radiergummi': 'la goma de borrar',
            'der Ausweis': 'el documento de identidad',
          },
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies den Text. Richtig oder falsch? ~~(Lee el texto. ¿Verdadero o falso?)~~',
      textTitel: 'Aushang im Prüfungszentrum',
      text: 'Liebe Teilnehmer! Die Prüfung beginnt um 9 Uhr. Bitte zeigen Sie Ihren Ausweis. Sie schreiben mit Kugelschreiber. Handys und Wörterbücher sind verboten. Wichtig: Nur der Antwortbogen zählt! Übertragen Sie Ihre Antworten sofort, Teil für Teil. Viel Erfolg! Ihr Team vom Prüfungszentrum.',
      items: [
        { typ: 'rf', aussage: 'Die Prüfung beginnt um 9 Uhr.', loesung: true },
        { typ: 'rf', aussage: 'Ein Handy ist okay.', loesung: false },
        {
          typ: 'mc',
          frage: 'Du schreibst mit ___.',
          optionen: ['Kugelschreiber', 'Bleistift'],
          loesung: 0,
        },
        { typ: 'rf', aussage: 'Du überträgst die Antworten am Ende.', loesung: false },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'formular',
      titel: 'Schreiben',
      anweisung: 'Lies den Text. Ergänze das Formular. ~~(Lee el texto. Completa el formulario.)~~',
      quelle: 'Guten Tag! Ich bin Marta Ríos. Ich bin aus Kolumbien und ich wohne jetzt in Hamburg. Meine Prüfung ist am 12. Mai. Meine Telefonnummer ist 0157 3344221.',
      felder: [
        { id: 'name', label: 'Name', erwartet: ['Marta Ríos', 'Ríos'] },
        { id: 'land', label: 'Land', erwartet: ['Kolumbien'] },
        { id: 'stadt', label: 'Stadt jetzt', erwartet: ['Hamburg'] },
        { id: 'datum', label: 'Datum der Prüfung', erwartet: ['12. Mai', 'am 12. Mai', '12 Mai'] },
        { id: 'telefon', label: 'Telefonnummer', erwartet: ['0157 3344221', '01573344221'] },
      ],
    },
  ],
}
