// Übungsheft A1 — Lektion 24: Schreiben Teil 1 — Formular ausfüllen
// Bloque 2 (Prüfungsstrategie): Teil 1 = Training (Formate + „finden, nicht erfinden“).
export default {
  lektion: 24,
  titel: 'Übungsheft — Schreiben Teil 1: Formular',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Training',
      anweisung: 'Trainiere die Formate und die Regeln. Lies und antworte. ~~(Entrena los formatos y las reglas. Lee y responde.)~~',
      items: [
        {
          typ: 'mc',
          frage: 'Feld „Geburtsdatum“ — Was ist richtig?',
          optionen: ['03.05.1998', '3/5/1998', '1998.05.03'],
          loesung: 0,
        },
        {
          typ: 'mc',
          frage: 'Feld „PLZ“ — Was ist richtig?',
          optionen: ['20095', 'Hamburg', 'Gartenstraße 5'],
          loesung: 0,
        },
        {
          typ: 'mc',
          frage: 'Feld „Zimmer“ — Was ist richtig?',
          optionen: ['Einzelzimmer', 'einzelzimmer'],
          loesung: 0,
        },
        {
          typ: 'zuordnen',
          links: ['„Ich komme aus Portugal.“', '„Meine Nummer ist 0176 55 33 218.“', '„Ich bin am 15.08.1995 geboren.“', '„Ich wohne in Sevilla.“'],
          rechts: ['Land', 'Telefonnummer', 'Geburtsdatum', 'Wohnort'],
          loesung: {
            '„Ich komme aus Portugal.“': 'Land',
            '„Meine Nummer ist 0176 55 33 218.“': 'Telefonnummer',
            '„Ich bin am 15.08.1995 geboren.“': 'Geburtsdatum',
            '„Ich wohne in Sevilla.“': 'Wohnort',
          },
        },
        {
          typ: 'mc',
          frage: 'Text: „Sie kommt am 12.10. an und bleibt bis zum 15.10.“ — Feld „Ankunft“: Was schreibst du?',
          optionen: ['12.10.', '15.10.'],
          loesung: 0,
        },
        { typ: 'rf', aussage: 'Die PLZ in Deutschland hat 5 Zahlen.', loesung: true },
        { typ: 'rf', aussage: 'Du kannst ein Feld leer lassen.', loesung: false },
        { typ: 'rf', aussage: 'Jede Antwort für das Formular steht im Text — du erfindest nichts.', loesung: true },
        {
          typ: 'luecke',
          text: 'Marta möchte ein Zimmer für eine Person — ein {1}. Sie kommt am 12.10. an: Das ist die {2}.',
          bank: ['Einzelzimmer', 'Ankunft', 'Abreise'],
          loesungen: { 1: 'Einzelzimmer', 2: 'Ankunft' },
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies die E-Mail. Richtig oder falsch? ~~(Lee el correo. ¿Verdadero o falso?)~~',
      textTitel: 'E-Mail an das Hotel',
      text: 'Liebe Frau Braun, ich möchte ein Zimmer in Ihrem Hotel reservieren — ein Doppelzimmer mit Bad. Wir machen Urlaub in Hamburg: Ankunft am 12. Oktober, Abreise am 16. Oktober. Meine Telefonnummer ist 0176 88 99 321. Vielen Dank! Jorge Salas',
      items: [
        { typ: 'rf', aussage: 'Jorge möchte ein Einzelzimmer.', loesung: false },
        { typ: 'rf', aussage: 'Die Ankunft ist am 12. Oktober.', loesung: true },
        {
          typ: 'mc',
          frage: 'Wann ist die Abreise?',
          optionen: ['am 16. Oktober', 'am 12. Oktober', 'am 21. Oktober'],
          loesung: 0,
        },
        {
          typ: 'mc',
          frage: 'Wo machen sie Urlaub?',
          optionen: ['in Hamburg', 'in Bremen'],
          loesung: 0,
        },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'formular',
      titel: 'Schreiben',
      anweisung: 'Lies die Situation. Ergänze das Formular. ~~(Lee la situación. Completa el formulario.)~~',
      quelle: 'Ihr Freund Daniel Vega macht Urlaub in München. Er wohnt in der Calle Norte 7 in 08001 Barcelona, in Spanien. Er ist am 30.11.1997 geboren. Er kommt am 03.08. an und möchte bis zum 07.08. ein Einzelzimmer. Helfen Sie ihm mit dem Formular vom Hotel Alpenblick. Familienname: Vega.',
      felder: [
        { id: 'vorname', label: 'Vorname', erwartet: ['Daniel'] },
        { id: 'plzwohnort', label: 'PLZ, Wohnort', erwartet: ['08001 Barcelona', 'Barcelona 08001'] },
        { id: 'geburtsdatum', label: 'Geburtsdatum', erwartet: ['30.11.1997'] },
        { id: 'ankunft', label: 'Ankunft', erwartet: ['03.08.', '03.08', '3.8.'] },
        { id: 'zimmer', label: 'Zimmer', erwartet: ['Einzelzimmer', 'ein Einzelzimmer'] },
      ],
    },
  ],
}
