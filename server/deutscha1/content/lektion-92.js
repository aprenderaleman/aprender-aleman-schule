// Geschichte 2 · Die Wohnung in der Gartenstraße
//
// Lectura graduada A1 — capítulo 2 de la saga de María (ver BIBLIA).
// Gramática: Bloques 0-2 (negación kein/nicht, Modalverben, trennbare Verben,
// Formular/Anmeldung del examen).

export default {
  spec: ['Geschichte 2', 'Lectura graduada', 'Niveau A1', 'Wortschatz: Bloque 0-2'],
  h1: 'Die Wohnung in der Gartenstraße',
  lead: 'Frau Krüger macht die Tür auf: die neue Wohnung! ~~Frau Krüger abre la puerta: el nuevo piso de María — pequeño, bonito y con un problema.~~',

  content: [
    // ── Vor dem Lesen ─────────────────────────────────────────────
    {
      type: 'wortschatz',
      eyebrow: 'Vor dem Lesen',
      titel: 'Neue Wörter',
      items: [
        { wort: 'die Wohnung', kollokation: 'die Wohnung ist klein', es: 'el piso, la vivienda' },
        { wort: 'das Zimmer', kollokation: 'ein Zimmer haben', es: 'la habitación' },
        { wort: 'die Küche', kollokation: 'in der Küche', es: 'la cocina' },
        { wort: 'das Bad', kollokation: 'ein kleines Bad', es: 'el (cuarto de) baño' },
        { wort: 'das Bett', kollokation: 'kein Bett haben', es: 'la cama' },
        { wort: 'der Tisch', kollokation: 'ein Tisch und zwei Stühle', es: 'la mesa' },
        { wort: 'der Stuhl', kollokation: 'die Stühle (Plural)', es: 'la silla' },
        { wort: 'die Tür', kollokation: 'die Tür aufmachen', es: 'la puerta' },
        { wort: 'klein', kollokation: 'klein, aber schön', es: 'pequeño/a' },
        { wort: 'schön', kollokation: 'die Wohnung ist schön', es: 'bonito/a' },
      ],
      hinweis: '~~Estas palabras vuelven en la lección 33 (Wohnung & Möbel) — aquí las ves primero en la historia.~~',
    },

    { type: 'rule' },

    // ── Die Geschichte ────────────────────────────────────────────
    {
      type: 'prose',
      card: true,
      titel: 'Die Wohnung in der Gartenstraße',
      absaetze: [
        'Frau Krüger macht die **Tür** auf. ~~Frau Krüger abre la puerta.~~ „Bitte, Frau Vega!“ Die **Wohnung** ist **klein**, aber **schön**. Es gibt ein **Zimmer**, eine **Küche** und ein **Bad**. ~~Hay una habitación, una cocina y un baño.~~ In der Küche gibt es einen **Tisch** und zwei **Stühle**. Aber es gibt ein Problem: María hat kein **Bett**! ~~¡María no tiene cama!~~ María möchte ein Bett kaufen. Aber ein Bett kostet viel Geld, und leider hat María nicht viel Geld.',
        '„Eine Frage, Frau Vega: Haben Sie Zeit? Sie müssen ein Formular ausfüllen. ~~Tiene que rellenar un formulario.~~ Die Anmeldung!“ María schreibt: Vorname: *María*. Familienname: *Vega*. Wohnort: *Berlin*. Berlin! Das ist jetzt richtig. ~~¡Ahora eso ya es verdad!~~ Frau Krüger: „Und Musik ist nach zehn Uhr verboten.“ María: „Kein Problem. Ich habe keine Musik. Ich habe auch kein Bett.“ Frau Krüger: „Hm. Hier ist meine Telefonnummer. Haben Sie einen Kugelschreiber?“ María schreibt die Nummer. ~~María apunta el número.~~',
      ],
    },
    {
      type: 'prose',
      card: true,
      kicker: 'Der Nachbar hilft',
      absaetze: [
        'Um acht Uhr kommt Paul. Er möchte helfen. „Du hast kein Bett? Kein Problem! Ich habe ein Sofa. Mein Sofa ist dein Sofa!“ ~~¡Mi sofá es tu sofá!~~ Paul und María machen die Tür auf, und das Sofa kommt in das Zimmer. Das Sofa ist zehn Jahre alt. Aber es ist okay — nein, es ist super!',
        'María: „Danke, Paul! Möchtest du einen Kaffee?“ Paul: „Gern! … Du hast keinen Kaffee, oder?“ ~~No tienes café, ¿verdad?~~ María: „Nein. Ich habe nur Wasser. Aber morgen kaufe ich Kaffee. Morgen kaufe ich **alles**!“ ~~¡Mañana lo compro todo!~~',
      ],
    },

    { type: 'rule' },

    // ── Nach dem Lesen ────────────────────────────────────────────
    {
      type: 'uebung',
      eyebrow: 'Nach dem Lesen',
      frage: 'Beantworte die Fragen. ~~Responde a las preguntas y comprueba.~~',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Was gibt es in der Wohnung?',
        'Was hat María nicht?',
        'Was muss María ausfüllen?',
        'Was ist nach zehn Uhr verboten?',
      ],
      loesungen: [
        'Es gibt ein **Zimmer**, eine **Küche** und ein **Bad** — und einen Tisch und zwei Stühle.',
        'Sie hat **kein Bett** und **keinen Kaffee**. Aber Paul hat ein Sofa!',
        'Ein **Formular** — die Anmeldung: Vorname, Familienname, Wohnort. ~~Como en el examen, Schreiben Teil 1.~~',
        '**Musik**. Das ist die Regel von Frau Krüger. ~~la norma~~',
      ],
    },

    { type: 'rule' },

    // ── Ausblick ──────────────────────────────────────────────────
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Morgen kauft María alles: Kaffee, Brot, Milch. Der Supermarkt wartet — und ein kleines Problem an der Kasse. ~~El supermercado la espera, y un pequeño problema en la caja.~~',
    },
  ],
}
