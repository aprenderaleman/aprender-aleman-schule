// Geschichte 3 · Im Supermarkt
//
// Lectura graduada A1 — capítulo 3 de la saga de María (ver BIBLIA).
// Gramática: Bloques 0-3 (Akkusativ, W-Fragen, precios y compras — Themenfeld
// Essen & Einkaufen).

export default {
  spec: ['Geschichte 3', 'Lectura graduada', 'Niveau A1', 'Wortschatz: Bloque 0-3'],
  h1: 'Im Supermarkt',
  lead: 'María geht einkaufen: eine Liste, ein Angebot — und etwas fehlt. ~~María va de compras: una lista, una oferta… y algo se le olvida.~~',

  content: [
    // ── Vor dem Lesen ─────────────────────────────────────────────
    {
      type: 'wortschatz',
      eyebrow: 'Vor dem Lesen',
      titel: 'Neue Wörter',
      items: [
        { wort: 'einkaufen gehen', kollokation: 'María geht einkaufen', es: 'ir de compras' },
        { wort: 'bezahlen', kollokation: 'an der Kasse bezahlen', es: 'pagar' },
        { wort: 'die Tüte', kollokation: 'die Tüte ist schwer', es: 'la bolsa' },
        { wort: 'finden', kollokation: 'die Milch nicht finden', es: 'encontrar' },
        { wort: 'das Regal', kollokation: 'Regal sieben', es: 'el estante, la estantería' },
        { wort: 'die Butter', kollokation: 'Brot mit Butter', es: 'la mantequilla' },
        { wort: 'der Zucker', kollokation: 'Zucker für den Kaffee', es: 'el azúcar' },
        { wort: 'schwer', kollokation: 'sehr schwer', es: 'pesado/a' },
        { wort: 'vergessen', kollokation: 'den Kaffee vergessen', es: 'olvidar' },
      ],
      hinweis: '~~El resto del capítulo usa el vocabulario de Essen & Einkaufen (lección 32): Brot, Milch, Käse, Kasse, Angebot…~~',
    },

    { type: 'rule' },

    // ── Die Geschichte ────────────────────────────────────────────
    {
      type: 'prose',
      card: true,
      titel: 'Im Supermarkt',
      absaetze: [
        'Heute **geht** María **einkaufen**. ~~Hoy María va de compras.~~ An der Tür ist ein Schild: „Geöffnet von acht bis zwanzig Uhr“. Gut! María hat eine Liste: Brot, Milch, **Butter**, Käse, Äpfel und Kaffee — viel Kaffee! Sie hat kein Brot, keine Milch, keinen Kaffee. Sie hat nur Wasser. Und sie hat Hunger. ~~Y tiene hambre.~~',
        'Brot? Da. ~~¿Pan? Ahí está.~~ Äpfel? Da. Butter? Da. Aber wo ist die Milch? María **findet** die Milch nicht. ~~María no encuentra la leche.~~ Sie fragt einen Verkäufer: „Entschuldigung, wo ist die Milch, bitte?“ Der Verkäufer: „**Regal** sieben.“ María: „Danke!“ Und da ist auch ein **Angebot**: ~~una oferta~~ Der Käse kostet nur einen Euro neunzig. Billig! María kauft zwei. Sie braucht auch **Zucker** ~~(azúcar)~~ für den Kaffee — und sie hat Durst: Sie kauft noch Wasser. ~~tiene sed~~',
      ],
    },
    {
      type: 'prose',
      card: true,
      kicker: 'An der Kasse',
      absaetze: [
        'Dann kommt die Kasse. „Das macht zwölf Euro vierzig.“ ~~Son 12,40 euros.~~ María möchte **bezahlen**. Sie sucht das Geld … Die Frau an der Kasse wartet. „Haben Sie eine Karte?“ „Ja! … Nein. Einen Moment, bitte … da ist es!“ ~~¡ahí está!~~ María bezahlt, und alles kommt in die **Tüte**. Die Tüte ist **schwer** — sehr schwer.',
        'Auf der Straße wartet — Paul! „Hallo, María! Brauchst du Hilfe?“ ~~¿Necesitas ayuda?~~ „Ja, bitte. Die Tüte ist so schwer.“ In der Küche findet María die Liste: Brot, ja. Milch, ja. Käse, ja. Kaffee … María **vergisst** den Kaffee! ~~¡María ha olvidado el café!~~ Paul: „Kein Problem, ich habe Kaffee. Und du — was machst du am Sonntag?“ ~~¿Y tú qué haces el domingo?~~',
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
        'Was findet María nicht?',
        'Was kostet der Käse?',
        'Was vergisst María?',
        'Wer wartet auf der Straße?',
      ],
      loesungen: [
        'Die **Milch**. Sie fragt einen Verkäufer — die Milch ist in Regal sieben.',
        'Nur **1,90 Euro**. Der Käse ist im Angebot — billig! María kauft zwei.',
        'Den **Kaffee**. Aber kein Problem: Paul hat Kaffee.',
        '**Paul**. Er hilft — die Tüte ist sehr schwer. Und er hat eine Frage: „Was machst du am Sonntag?“',
      ],
    },

    { type: 'rule' },

    // ── Ausblick ──────────────────────────────────────────────────
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Am Sonntag: die Sonne, der Volkspark und ein Eis. Ein Tag mit Paul! ~~El domingo: sol, parque y un helado. ¡Un día con Paul!~~',
    },
  ],
}
