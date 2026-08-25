// Lektion 08 · Wechselpräpositionen — Wo? / Wohin?
//
// ═══ LECCIÓN MODELO del curso B1 — migrada de curso-b1.html ═══
// Fija el estándar para las otras 42: mismas 8 secciones (FORMAT.md),
// nivel B1 con máximo apoyo en español (glosas frecuentes, ejemplos
// cotidianos, metalenguaje simple).

export default {
  spec: ['Bloque 1', 'Grammatik & Struktur', 'Niveau B1', 'Prüfungsrelevanz: alle Module'],
  h1: 'Wechselpräpositionen',
  lead: 'Neun Präpositionen, zwei Fälle: **Wo?** → Dativ, **Wohin?** → Akkusativ. ~~La clave está en el movimiento.~~',

  content: [
    // ── Lernziele ─────────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'die neun Wechselpräpositionen kennen',
        'zwischen *Wo?* (Dativ) und *Wohin?* (Akkusativ) unterscheiden',
        'die passenden Verben (legen/liegen …) richtig verwenden',
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
      kopf: ['Wohin? (Bewegung → Akk.)', 'Wo? (Position → Dat.)'],
      zeilen: [
        ['legen', 'liegen'],
        ['stellen', 'stehen'],
        ['setzen', 'sitzen'],
        ['hängen (hängte)', 'hängen (hing)'],
      ],
    },

    { type: 'rule' },

    // ── Erklärung ─────────────────────────────────────────────────
    {
      type: 'steps',
      eyebrow: 'Erklärung — die goldene Regel',
      steps: [
        {
          badge: 'Wohin? → Akk',
          titel: 'Bewegung / Richtung',
          text: 'Bewegung __zu einem Ziel__ → Akkusativ. ~~¿movimiento hacia un sitio?~~\n__Ich gehe in **die** Schule.__',
        },
        {
          badge: 'Wo? → Dat',
          titel: 'Position / Ort',
          text: 'An __einem Ort__ sein → Dativ. ~~¿estás en un lugar?~~\n__Ich bin in **der** Schule.__',
        },
      ],
    },
    {
      type: 'prose',
      card: true,
      absaetze: [
        '**Die Verben verraten es:** *legen, stellen, setzen, gehen, fahren* → Bewegung (Akk.); *liegen, stehen, sitzen, sein, bleiben* → Position (Dat.). ~~El verbo te dice si hay movimiento.~~',
      ],
    },

    { type: 'rule' },

    // ── Beispiele ─────────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele',
      items: [
        { text: 'Ich hänge das Bild **an die** Wand.', gl: '— Wohin? → Akk.' },
        { text: 'Das Bild hängt **an der** Wand.', gl: '— Wo? → Dat.' },
        { text: 'Ich lege das Buch **auf den** Tisch.', gl: '— Wohin? → Akk.' },
        { text: 'Das Buch liegt **auf dem** Tisch.', gl: '— Wo? → Dat.' },
      ],
    },
    {
      type: 'beispiele',
      titel: 'Kontraktionen',
      items: [
        { text: 'an + das = **ans** · an + dem = **am**' },
        { text: 'in + das = **ins** · in + dem = **im**' },
      ],
    },

    { type: 'rule' },

    // ── Übungen ───────────────────────────────────────────────────
    {
      type: 'uebung',
      eyebrow: 'Anwendung — Übung 1 · Erkennen',
      frage: 'Wo? oder Wohin?',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Die Katze schläft unter dem Bett.',
        'Ich stelle die Flasche in den Kühlschrank.',
        'Wir sitzen auf dem Sofa.',
        'Häng die Jacke an den Haken!',
      ],
      loesungen: [
        '**Wo?** → Dativ (unter dem Bett)',
        '**Wohin?** → Akkusativ (in den Kühlschrank)',
        '**Wo?** → Dativ (auf dem Sofa)',
        '**Wohin?** → Akkusativ (an den Haken)',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 2 · Artikel einsetzen',
      frage: 'Akkusativ oder Dativ?',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Das Auto steht vor ___ Haus. ~~(das Haus)~~',
        'Ich hänge das Foto über ___ Sofa. ~~(das Sofa)~~',
        'Die Schuhe stehen neben ___ Tür. ~~(die Tür)~~',
      ],
      loesungen: [
        'vor **dem** Haus ~~(Wo? → Dat.)~~',
        'über **das** Sofa ~~(Wohin? → Akk.)~~',
        'neben **der** Tür ~~(Wo? → Dat.)~~',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 3 · Selbst bilden',
      frage: 'Ein Satz mit „in“ …',
      loesungLabel: 'Lösung',
      aufgaben: [
        '… als Antwort auf **Wohin gehst du?**',
        '… als Antwort auf **Wo bist du?**',
      ],
      loesungen: [
        'Ich gehe **in die** Stadt. ~~(Wohin? → Akk.)~~',
        'Ich bin **in der** Stadt. ~~(Wo? → Dat.)~~',
      ],
    },

    { type: 'rule' },

    // ── Prüfungsbezug ─────────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Schreiben · E-Mail',
      titel: '2 Lücken',
      anweisung: 'In der E-Mail (Schreiben) beschreibst du oft, wo etwas ist oder wohin du gehst. Ergänze:',
      absaetze: [
        '„Wir treffen uns {1} der Stadt und gehen dann {2} Kino.“',
      ],
      optionen: ['(1) in + der Stadt', '(2) in + das Kino'],
      loesungLabel: 'Lösung',
      loesungen: [
        '{1} **in der** Stadt — Wo? → Dativ.',
        '{2} **ins** Kino — Wohin? → Akkusativ (in + das = ins).',
      ],
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Beim **Sprechen Teil 1 (Gemeinsam etwas planen)** brauchst du diese Präpositionen ständig: *„Wir könnten uns **am** Bahnhof treffen und **ins** Café gehen.“* Frag dich immer: **Bewegung oder Position?**',
    },

    { type: 'rule' },

    // ── Abschluss ─────────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Frage', 'Kasus', 'Verben'],
      zeilen: [
        ['Wohin?', 'Akkusativ', 'legen, stellen, setzen, gehen, fahren'],
        ['Wo?', 'Dativ', 'liegen, stehen, sitzen, sein, bleiben'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich erkenne, ob ein Satz Bewegung (Wohin?) oder Position (Wo?) ausdrückt.',
        'Ich benutze bei Bewegung den Akkusativ, bei Position den Dativ.',
        'Ich kenne die Verbpaare legen/liegen, stellen/stehen, setzen/sitzen.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Bei den Wechselpräpositionen entscheidet die Frage (Wo?/Wohin?) über den Kasus. Bei vielen Verben entscheidet dagegen **das Verb selbst**, welche Präposition und welcher Kasus folgen: *warten auf, sich freuen über* … Das ist das Thema der nächsten Lektion.',
    },
  ],
}
