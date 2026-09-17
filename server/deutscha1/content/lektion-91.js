// Geschichte 1 · Hallo, Berlin!
//
// Lectura graduada A1 — capítulo 1 de la saga de María (ver BIBLIA).
// Gramática: solo presente de sein/haben + frases mínimas (Bloques 0-1).

export default {
  spec: ['Geschichte 1', 'Lectura graduada', 'Niveau A1', 'Wortschatz: Bloque 0-1'],
  h1: 'Hallo, Berlin!',
  lead: 'María kommt in Berlin an. ~~María llega a Berlín: dos maletas, un plan — y sus primeras frases en alemán.~~',

  content: [
    // ── Vor dem Lesen ─────────────────────────────────────────────
    {
      type: 'wortschatz',
      eyebrow: 'Vor dem Lesen',
      titel: 'Neue Wörter',
      items: [
        { wort: 'der Koffer', kollokation: 'zwei Koffer haben', es: 'la maleta' },
        { wort: 'die Straße', kollokation: 'die Gartenstraße 12', es: 'la calle' },
        { wort: 'wohnen', kollokation: 'in Berlin wohnen', es: 'vivir (en un lugar)' },
        { wort: 'der Nachbar', kollokation: 'Paul ist der Nachbar', es: 'el vecino' },
        { wort: 'die Vermieterin', kollokation: 'Frau Krüger, die Vermieterin', es: 'la casera' },
        { wort: 'der Schlüssel', kollokation: 'den Schlüssel haben', es: 'la llave' },
        { wort: 'müde', kollokation: 'müde sein', es: 'cansado/a' },
        { wort: 'nett', kollokation: 'Paul ist sehr nett', es: 'simpático/a, amable' },
        { wort: 'neu', kollokation: 'alles ist neu', es: 'nuevo/a' },
        { wort: 'groß', kollokation: 'Berlin ist groß', es: 'grande' },
        { wort: 'willkommen', kollokation: 'Willkommen in Berlin!', es: 'bienvenido/a' },
      ],
      hinweis: '~~Lee primero estas palabras: son las únicas del capítulo que aún no conoces del curso.~~',
    },

    { type: 'rule' },

    // ── Die Geschichte ────────────────────────────────────────────
    {
      type: 'prose',
      card: true,
      titel: 'Hallo, Berlin!',
      absaetze: [
        'María ist aus Valencia. Sie ist 26 Jahre alt. Heute ist sie in Berlin. ~~Hoy está en Berlín.~~ Alles ist **neu**: die Sprache ~~(el idioma)~~, die **Straßen**, die Namen. Berlin ist **groß** — sehr groß. María hat zwei **Koffer** ~~(dos maletas)~~ und einen Plan: Deutsch lernen, ein bisschen jeden Tag. In Valencia ist die Familie: die Mutter, der Vater, eine Schwester. Und María? María ist jetzt hier.',
        'Das Taxi kommt. „Die Gartenstraße 12, bitte!“ Der Mann im Taxi: „Sind Sie neu in Berlin?“ „Ja. Sehr neu!“ María **wohnt** jetzt in der Gartenstraße 12. ~~María vive ahora en la Gartenstraße 12.~~ Sie ist **müde**, aber das ist okay. Berlin ist interessant.',
      ],
    },
    {
      type: 'prose',
      card: true,
      kicker: 'Gartenstraße 12',
      absaetze: [
        'Eine Frau wartet. „Guten Tag! Ich bin Frau Krüger, die **Vermieterin**.“ ~~(la casera)~~ Frau Krüger ist 68 Jahre alt. Sie hat den **Schlüssel**. ~~Ella tiene la llave.~~ „**Willkommen**, Frau Vega! Hier ist der Schlüssel. Und bitte: keine Musik nach zehn Uhr!“ ~~¡Y por favor: nada de música después de las diez!~~ María versteht nur „Musik“. „Äh … ja. Danke!“',
        'Ein Mann kommt. „Hallo! Ich bin Paul, dein **Nachbar**.“ ~~(tu vecino)~~ Paul ist aus Berlin. Er ist 29 Jahre alt und sehr nett. „Ich bin María. Ich bin aus Spanien. Ich … äh … ich habe kein Deutsch … nein! Ich **lerne** Deutsch!“ Paul: „Super! Dein Deutsch ist okay.“ ~~Tu alemán está bien.~~ María: „Ich kann Spanisch, Englisch und ein bisschen Deutsch.“ Paul: „Und ich kann Deutsch, Englisch — und null Spanisch!“',
        'Der erste Tag in Berlin: eine Vermieterin, ein Nachbar, zwei Koffer — und ein Plan. Ein bisschen Deutsch, **jeden Tag**. ~~Un poco de alemán, cada día.~~ Das ist der Plan.',
      ],
    },

    { type: 'rule' },

    // ── Nach dem Lesen ────────────────────────────────────────────
    {
      type: 'uebung',
      eyebrow: 'Nach dem Lesen',
      frage: 'Richtig oder falsch? ~~¿Verdadero o falso? Responde y comprueba.~~',
      loesungLabel: 'Lösung',
      aufgaben: [
        'María ist aus Valencia.',
        'Paul ist die Vermieterin.',
        'Frau Krüger hat den Schlüssel.',
        'María lernt jeden Tag ein bisschen Deutsch.',
      ],
      loesungen: [
        '**Richtig.** María ist aus Valencia, in Spanien.',
        '**Falsch.** Paul ist der **Nachbar**. Die Vermieterin ist Frau Krüger.',
        '**Richtig.** Sie hat den Schlüssel — und eine Regel: keine Musik nach zehn Uhr! ~~una norma~~',
        '**Richtig.** Das ist der Plan: ein bisschen Deutsch, jeden Tag.',
      ],
    },

    { type: 'rule' },

    // ── Ausblick ──────────────────────────────────────────────────
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Die Wohnung in der Gartenstraße 12 wartet. Wie ist sie? Und hat María ein Bett? ~~¿Y tiene María una cama? Lo verás en el capítulo 2.~~',
    },
  ],
}
