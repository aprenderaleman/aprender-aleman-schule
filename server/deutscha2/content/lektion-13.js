// Lektion 13 · Komparativ & Superlativ
//
// Bloque 1 · Grammatik & Struktur — comparar en A2: -er / am -sten,
// los irregulares imprescindibles (gut, gern, viel) y als vs. so…wie.

export default {
  spec: ['Bloque 1', 'Grammatik & Struktur', 'Niveau A2', 'Prüfungsrelevanz: Sprechen & Schreiben'],
  h1: 'Komparativ & Superlativ',
  lead: '~~Así se compara en alemán:~~ **schnell → schneller → am schnellsten**. ~~Y ojo: nunca se dice~~ *mehr schnell*.',

  content: [
    // ── Lernziele ─────────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'den Komparativ mit *-er* und den Superlativ mit *am -sten* bilden',
        'die wichtigsten unregelmäßigen Formen kennen: *gut, gern, viel*',
        'vergleichen mit **als** und **so … wie**',
      ],
    },

    { type: 'rule' },

    // ── Kernwortschatz ────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Kernwortschatz — Vergleichsformen',
      kopf: ['Adjektiv', 'Komparativ', 'Superlativ', 'Bedeutung'],
      zeilen: [
        ['klein', 'kleiner', 'am kleinsten', 'pequeño'],
        ['schnell', 'schneller', 'am schnellsten', 'rápido'],
        ['schön', 'schöner', 'am schönsten', 'bonito'],
        ['alt', 'älter', 'am ältesten', 'viejo'],
        ['groß', 'größer', 'am größten', 'grande'],
        ['jung', 'jünger', 'am jüngsten', 'joven'],
        ['gut', 'besser', 'am besten', 'bueno / bien'],
        ['gern', 'lieber', 'am liebsten', 'con gusto ~~(me gusta)~~'],
        ['viel', 'mehr', 'am meisten', 'mucho'],
      ],
    },

    { type: 'rule' },

    // ── Erklärung ─────────────────────────────────────────────────
    {
      type: 'steps',
      eyebrow: 'Erklärung — so vergleichst du',
      steps: [
        {
          badge: '-er',
          titel: 'Komparativ',
          text: 'Adjektiv + __-er__. ~~En español dices «más rápido» (dos palabras) — en alemán es UNA palabra:~~ *schnell* → **schneller**. Kurze Adjektive mit *a, o, u* bekommen oft einen Umlaut: *alt* → **älter**, *groß* → **größer**.\n**Achtung:** *mehr schnell* ist **falsch**. ~~No traduzcas «más» con mehr delante del adjetivo.~~',
        },
        {
          badge: 'am -sten',
          titel: 'Superlativ',
          text: '__am__ + Adjektiv + __-sten__. ~~«el más rápido» →~~ **am schnellsten**.\n__Das Flugzeug ist **am schnellsten**.__',
        },
        {
          badge: 'als / wie',
          titel: 'Vergleichen',
          text: 'Komparativ + __als__ ~~(= que)~~: *Ich bin größer **als** du.*\n__so__ + Adjektiv + __wie__ ~~(= tan … como)~~: *Ich bin **so** alt **wie** du.*',
        },
      ],
    },

    { type: 'rule' },

    // ── Beispiele ─────────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele',
      items: [
        { text: 'Mein Bruder ist **älter als** ich.', gl: '— mayor que yo' },
        { text: 'Kaffee schmeckt mir **besser als** Tee.', gl: '— gut → besser' },
        { text: 'Ich trinke **lieber** Wasser.', gl: '— gern → lieber (prefiero)' },
        { text: 'Anna ist **so groß wie** ihre Mutter.', gl: '— tan … como' },
        { text: 'Am Wochenende schlafe ich **am liebsten** lange.', gl: '— lo que más me gusta' },
        { text: 'Im Sommer arbeite ich **mehr** als im Winter.', gl: '— viel → mehr' },
        { text: 'Welches Café findest du **am schönsten**?', gl: '— superlativo en pregunta' },
      ],
    },

    { type: 'rule' },

    // ── Mehr Beispiele ────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Mehr Beispiele',
      titel: 'Komparativ mit als',
      items: [
        { text: 'Meine Schwester ist **jünger als** ich.', gl: '— jung → jünger (con Umlaut)' },
        { text: 'Das Hotel am Markt ist **schöner als** das Hotel am Bahnhof.', gl: '— schön → schöner' },
        { text: 'Mein Vater ist **älter als** meine Mutter.', gl: '— alt → älter' },
        { text: 'Im Zug schlafe ich **besser als** im Auto.', gl: '— gut → besser' },
        { text: 'Heute gibt es **mehr** Sonne **als** gestern.', gl: '— viel → mehr' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'am -sten',
      titel: 'Superlativ & so … wie',
      items: [
        { text: 'Das Café am Park finde ich **am schönsten**.', gl: '— superlativo con am' },
        { text: 'Ich trinke **am liebsten** Wasser mit Zitrone.', gl: '— gern → am liebsten' },
        { text: 'Samstag ist für mich **am besten**.', gl: '— gut → am besten' },
        { text: 'Mein Bruder isst **am meisten** — er ist **so groß wie** Papa!', gl: '— viel → am meisten · so … wie' },
        { text: 'Laura ist **so alt wie** ich.', gl: '— igualdad: so … wie' },
      ],
    },

    { type: 'rule' },

    // ── Prüfungsbezug ─────────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Schreiben · E-Mail',
      titel: 'Vergleiche in der E-Mail',
      anweisung: 'In der E-Mail (Teil 2, ~30-40 Wörter) vergleichst du oft. Ergänze die richtige Form:',
      absaetze: [
        '„Liebe Carla, ich finde den Sommer {1} (schön) als den Winter. {2} (gern) schwimme ich im See. Kommst du mit?“',
      ],
      optionen: ['(1) schön → Komparativ', '(2) gern → Superlativ'],
      loesungLabel: 'Lösung',
      loesungen: [
        '{1} … den Sommer **schöner** als den Winter.',
        '{2} **Am liebsten** schwimme ich im See.',
      ],
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Beim **Sprechen (Von sich erzählen)** kommen Fragen wie „Was isst du **am liebsten**?“. Lerne die drei Reihen **gut–besser–am besten**, **gern–lieber–am liebsten**, **viel–mehr–am meisten** auswendig — ~~son las que más aparecen en el examen.~~',
    },

    { type: 'rule' },

    // ── Abschluss ─────────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Form', 'Regel', 'Beispiel'],
      zeilen: [
        ['Komparativ', 'Adjektiv + -er (oft Umlaut)', 'älter, größer'],
        ['Superlativ', 'am + -sten', 'am schnellsten'],
        ['als', 'Komparativ + als (= que)', 'größer als du'],
        ['so … wie', 'gleich (= tan … como)', 'so alt wie du'],
        ['Unregelmäßig', 'gut/gern/viel', 'besser · lieber · mehr'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich bilde den Komparativ mit -er und den Superlativ mit am -sten.',
        'Ich kenne besser, lieber und mehr.',
        'Ich vergleiche richtig mit als und so … wie.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Vergleichen kannst du jetzt. Im nächsten Schritt verbindest du deine Sätze: **und, oder, aber, denn, deshalb** — die Konnektoren. So klingen deine E-Mails sofort natürlicher.',
    },
  ],
}
