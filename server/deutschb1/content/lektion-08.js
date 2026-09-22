// Lektion 08 · Wechselpräpositionen — Wo? / Wohin?
//
// ═══ LECCIÓN MODELO del curso B1 — migrada de curso-b1.html ═══
// Fija el estándar para las otras 42: mismas 8 secciones (FORMAT.md),
// nivel B1 con máximo apoyo en español (glosas frecuentes, ejemplos
// cotidianos, metalenguaje simple).
// Espiral: la regla Wo/Wohin viene del A2 (Lektion 10) y aquí se repasa
// compacta. El núcleo B1: los pares de verbos en Perfekt y Präteritum
// (hängen fuerte/débil), Wechselpräposition vs rección fija del verbo
// (puente a Lektion 9) y usos figurados (in der Zeitung stehen).

export default {
  spec: ['Bloque 1', 'Grammatik & Struktur', 'Niveau B1', 'Prüfungsrelevanz: alle Module'],
  h1: 'Wechselpräpositionen',
  lead: 'Neun Präpositionen, zwei Fälle: **Wo?** → Dativ, **Wohin?** → Akkusativ — und auf B1: die Verbpaare in der Vergangenheit und Ausdrücke wie *in der Zeitung stehen*.',

  content: [
    // ── Lernziele ─────────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'sicher zwischen *Wo?* (Dativ) und *Wohin?* (Akkusativ) unterscheiden',
        'die Verbpaare stellen/stehen, legen/liegen, setzen/sitzen, hängen/hängen auch im **Perfekt und Präteritum** benutzen',
        'Wechselpräpositionen von **festen Verb-Präposition-Verbindungen** (*warten auf*) unterscheiden',
        'typische **feste Ausdrücke** verstehen (*in der Zeitung stehen, unter der Woche*)',
      ],
    },

    { type: 'rule' },

    // ── Kernwortschatz ────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Kernwortschatz',
      items: [
        { text: '**an · auf · hinter · in · neben · über · unter · vor · zwischen**', gl: '— las 9 Wechselpräpositionen' },
      ],
    },
    {
      type: 'tabelle',
      kopf: ['Aktion (Wohin? → Akk.)', 'Perfekt', 'Position (Wo? → Dat.)', 'Perfekt'],
      zeilen: [
        ['stellen (stellte)', 'hat gestellt', 'stehen (stand)', 'hat **gestanden**'],
        ['legen (legte)', 'hat gelegt', 'liegen (lag)', 'hat **gelegen**'],
        ['setzen (setzte)', 'hat gesetzt', 'sitzen (saß)', 'hat **gesessen**'],
        ['hängen (hängte)', 'hat gehängt', 'hängen (hing)', 'hat **gehangen**'],
      ],
    },

    { type: 'rule' },

    // ── Erklärung ─────────────────────────────────────────────────
    {
      type: 'steps',
      eyebrow: 'Erklärung — die goldene Regel (aus A2)',
      steps: [
        {
          badge: 'Wohin? → Akk',
          titel: 'Bewegung / Richtung',
          text: 'Bewegung __zu einem Ziel__ → Akkusativ. ~~¿movimiento hacia un sitio?~~\n__Ich gehe in **die** Schule.__ Verben: *legen, stellen, setzen, hängen, gehen, fahren*.',
        },
        {
          badge: 'Wo? → Dat',
          titel: 'Position / Ort',
          text: 'An __einem Ort__ sein → Dativ. ~~¿estás en un lugar?~~\n__Ich bin in **der** Schule.__ Verben: *liegen, stehen, sitzen, hängen, sein, bleiben*. Kurzformen: an/in + dem = **am/im**, an/in + das = **ans/ins**.',
        },
      ],
    },
    {
      type: 'prose',
      eyebrow: 'Erklärung — die Verbpaare in der Vergangenheit',
      card: true,
      absaetze: [
        '**Aktion = schwach, Position = stark.** Die Aktionsverben sind regelmäßig: *stellte, legte, setzte, hängte* → *hat gestellt, gelegt, gesetzt, gehängt*. Die Positionsverben sind unregelmäßig: *stand, lag, saß, hing* → *hat **gestanden**, **gelegen**, **gesessen**, **gehangen***. ~~Acción = regular, posición = irregular: una sola regla en vez de ocho verbos sueltos.~~',
        '**hängen — ein Verb, zwei Leben.** Aktion (Wohin? + Akk.): *Ich **hängte** das Bild an **die** Wand. Ich habe es an die Wand **gehängt**.* Position (Wo? + Dat.): *Das Bild **hing** an **der** Wand. Es hat dort **gehangen**.* ~~«colgar algo» y «estar colgado» son la misma palabra — pero con conjugación distinta.~~',
      ],
    },
    {
      type: 'vergleich',
      titel: 'Wechsel — oder fest ans Verb gebunden?',
      zeilen: [
        { satz: 'Ich lege das Handy **auf den** Tisch.', label: 'Wohin? → Akk. — die Frage entscheidet' },
        { satz: 'Ich warte **auf den** Bus.', label: 'keine Bewegung, trotzdem Akk. — das Verb entscheidet' },
      ],
    },
    {
      type: 'prose',
      card: true,
      absaetze: [
        '**Nicht jede Präposition spielt das Wo/Wohin-Spiel.** Bei *warten **auf** + Akk.*, *denken **an** + Akk.* gehört die Präposition **fest zum Verb** — die Frage Wo?/Wohin? hilft dort nicht. Der Test: Ergibt *Wo? oder Wohin?* keinen Sinn (*„Wohin wartest du?“* ✗), ist die Verbindung fest. Diese Verben sind das Thema der nächsten Lektion.',
      ],
    },

    { type: 'rule' },

    // ── Beispiele ─────────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele',
      kicker: 'Vergangenheit',
      titel: 'Die Paare im Perfekt & Präteritum',
      items: [
        { text: 'Ich habe das Bild an die Wand **gehängt**.', gl: '— Aktion → schwach' },
        { text: 'Das Bild hat jahrelang an der Wand **gehangen**.', gl: '— Position → stark' },
        { text: 'Er **stellte** die Flasche in den Kühlschrank.', gl: '— Präteritum, Aktion' },
        { text: 'Die Flasche **stand** im Kühlschrank.', gl: '— Präteritum, Position' },
        { text: 'Wir haben den ganzen Abend auf dem Sofa **gesessen**.', gl: '— hat gesessen' },
        { text: 'Der Schlüssel hat unter der Zeitung **gelegen**.' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'B1',
      titel: 'Feste Ausdrücke — nicht wörtlich übersetzen',
      items: [
        { text: 'Das stand gestern **in der Zeitung**.', gl: '~~«venía en el periódico» — el alemán usa stehen~~' },
        { text: 'Nach der Pause gehe ich wieder **an die Arbeit**.', gl: '— ponerse a trabajar: Wohin? → Akk.' },
        { text: '**Unter der Woche** habe ich wenig Zeit.', gl: '~~«entre semana» — aquí nada está debajo de nada~~' },
        { text: 'Auf dem Schild steht „Geschlossen“.', gl: '— stehen = estar escrito' },
      ],
    },

    { type: 'rule' },

    // ── Übungen ───────────────────────────────────────────────────
    {
      type: 'uebung',
      eyebrow: 'Anwendung — Übung 1 · Erkennen',
      frage: 'Welche Form ist richtig?',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Die Jacke (hängte / hing) im Schrank.',
        'Ich habe die Tasche auf den Stuhl (gestellt / gestanden).',
        'Wir haben zwei Stunden im Café (gesetzt / gesessen).',
        'Ich warte (auf dem / auf den) Bus.',
      ],
      loesungen: [
        '**hing** — Position (im Schrank → Wo?) → starke Form.',
        '**gestellt** — Aktion (auf **den** Stuhl → Wohin?) → schwaches Partizip.',
        '**gesessen** — Position → stark. ~~sich setzen sería la acción de sentarse.~~',
        '**auf den** — *warten auf* + Akkusativ: feste Verbindung, die Wo-Frage zählt hier nicht.',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 2 · Vergangenheit bilden',
      frage: 'Setze ins Perfekt — Auxiliar, Partizip und Artikel.',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Ich (hängen) das Poster über ___ Bett. ~~(das Bett)~~',
        'Der Brief (liegen) auf ___ Tisch. ~~(der Tisch)~~',
        'Sie (setzen) das Kind auf ___ Stuhl. ~~(der Stuhl)~~',
        'Das Fahrrad (stehen) hinter ___ Haus. ~~(das Haus)~~',
      ],
      loesungen: [
        'Ich **habe** das Poster über **das** Bett **gehängt**. ~~(acción → participio débil, Wohin? → Akk.)~~',
        'Der Brief **hat** auf **dem** Tisch **gelegen**. ~~(posición → participio fuerte, Wo? → Dat.)~~',
        'Sie **hat** das Kind auf **den** Stuhl **gesetzt**.',
        'Das Fahrrad **hat** hinter **dem** Haus **gestanden**.',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 3 · Produzieren',
      frage: 'Gestern hast du dein Zimmer umgeräumt. Schreib drei Sätze in der Vergangenheit.',
      loesungLabel: 'Mögliche Lösung',
      aufgaben: [
        'Satz 1: Wohin hast du etwas gestellt/gelegt/gehängt? · Satz 2: Wo stand/lag/hing es vorher? · Satz 3: ein fester Ausdruck (*an die Arbeit, unter der Woche* …)',
      ],
      loesungen: [
        'Ich habe den Schreibtisch **ans** Fenster **gestellt**. Vorher **stand** er neben **der** Tür. **Unter der Woche** habe ich keine Zeit für so etwas — also bin ich am Samstag **an die Arbeit** gegangen. ~~Vale cualquier mueble — comprueba: acción → participio débil + acusativo, posición → forma fuerte + dativo.~~',
      ],
    },

    { type: 'rule' },

    // ── Prüfungsbezug ─────────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Schreiben Teil 1 · informelle E-Mail',
      titel: '3 Lücken',
      anweisung: 'In der E-Mail (~80 Wörter) beschreibst du oft deine Wohnung — gern in der Vergangenheit. Ergänze:',
      absaetze: [
        '„Liebe Ana, wir haben endlich alles eingerichtet! Das Sofa steht jetzt {1} Fenster, und deine Fotos habe ich {2} die Wand {3}.“',
      ],
      optionen: ['(1) an / am / ans?', '(2) an + welcher Kasus?', '(3) gehängt oder gehangen?'],
      loesungLabel: 'Lösung',
      loesungen: [
        '{1} **am** Fenster — Wo? → Dativ (an + dem = am).',
        '{2} **an** die Wand — Wohin? → Akkusativ.',
        '{3} **gehängt** — Aktion → schwaches Partizip. *Gehangen* wäre Position.',
      ],
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Beim **Sprechen Teil 2 (Präsentation)** beschreibst du Orte und Gewohnheiten: *„**Unter der Woche** sitze ich viel **am** Schreibtisch.“* Frag dich immer: **Bewegung oder Position?** Und wenn die Frage keinen Sinn ergibt (*warten, denken*), ist die Präposition fest ans Verb gebunden — Kasus auswendig lernen.',
    },

    { type: 'rule' },

    // ── Abschluss ─────────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Typ', 'Regel', 'Beispiel'],
      zeilen: [
        ['Wohin? → Akk.', 'Aktion — schwache Verben', 'Ich habe das Bild an die Wand gehängt.'],
        ['Wo? → Dat.', 'Position — starke Verben', 'Das Bild hat an der Wand gehangen.'],
        ['Verb + feste Präp.', 'das Verb bestimmt den Kasus', 'Ich warte auf den Bus.'],
        ['feste Ausdrücke', 'nicht wörtlich übersetzen', 'in der Zeitung stehen · unter der Woche'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich unterscheide Wo? (Dativ) und Wohin? (Akkusativ).',
        'Ich benutze die Verbpaare auch im Perfekt und Präteritum — gehängt vs. gehangen.',
        'Ich erkenne, wann eine Präposition fest zum Verb gehört (warten auf).',
        'Ich verstehe feste Ausdrücke wie in der Zeitung stehen und unter der Woche.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Bei den Wechselpräpositionen entscheidet die Frage (Wo?/Wohin?) über den Kasus. Bei vielen Verben entscheidet dagegen **das Verb selbst**, welche Präposition und welcher Kasus folgen: *warten auf, sich freuen über* … Das ist das Thema der nächsten Lektion.',
    },
  ],
}
