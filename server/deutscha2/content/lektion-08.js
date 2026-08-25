// Lektion 08 · Akkusativ & Akkusativpräpositionen
//
// Bloque 1 «Grammatik & Struktur». Sigue el estándar de lektion-04.js:
// 8 secciones (FORMAT.md), nivel A2, máximo apoyo en español.

export default {
  spec: ['Bloque 1', 'Grammatik & Struktur', 'Niveau A2', 'Prüfungsrelevanz: alle Module'],
  h1: 'Der Akkusativ',
  lead: '~~El «caso» del objeto directo:~~ __Ich sehe **den** Mann.__ ~~La buena noticia:~~ nur Maskulin ändert sich — **der → den, ein → einen**.',

  content: [
    // ── Lernziele ─────────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'den Akkusativ ~~(acusativo = objeto directo)~~ erkennen: der → den, ein → einen',
        'wichtige Verben mit Akkusativ benutzen',
        'die Präpositionen *für, gegen, ohne, um, durch* mit Akkusativ verwenden',
      ],
    },

    { type: 'rule' },

    // ── Kernwortschatz ────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Kernwortschatz — Verben mit Akkusativ',
      kopf: ['Verb', 'Beispiel', 'Bedeutung'],
      zeilen: [
        ['haben', 'Ich habe einen Hund.', 'tener'],
        ['brauchen', 'Ich brauche einen Stift.', 'necesitar'],
        ['kaufen', 'Er kauft einen Tisch.', 'comprar'],
        ['suchen', 'Wir suchen den Bahnhof.', 'buscar'],
        ['sehen', 'Siehst du den Mann?', 'ver'],
        ['essen', 'Sie isst einen Apfel.', 'comer'],
        ['trinken', 'Ich trinke einen Saft.', 'beber'],
        ['es gibt', 'Es gibt einen Park.', 'hay'],
      ],
    },

    { type: 'rule' },

    // ── Erklärung ─────────────────────────────────────────────────
    {
      type: 'steps',
      eyebrow: 'Erklärung — nur Maskulin ändert sich',
      steps: [
        {
          badge: 'Regel',
          titel: 'Subjekt und Objekt',
          text: 'Das Subjekt ~~(quien hace la acción)~~ steht im __Nominativ__, das direkte Objekt ~~(lo que recibe la acción)~~ im __Akkusativ__.\n__**Der** Mann kauft **den** Käse.__ ~~(el hombre = sujeto, el queso = objeto)~~',
        },
        {
          badge: 'der→den',
          titel: 'Nur Maskulin!',
          text: 'Feminin, Neutrum und Plural bleiben **gleich**. Nur bei Maskulin: __der → **den**__, __ein → **einen**__, __kein → **keinen**__. ~~(un solo cambio que memorizar: -en)~~',
        },
        {
          badge: 'Achtung',
          titel: '«Veo el hombre» → den Mann',
          text: '~~En español el artículo nunca cambia: «veo EL hombre». En alemán sí:~~ __Ich sehe **den** Mann.__ ~~*Ich sehe der Mann* es el error más típico del hispanohablante.~~ Frage dich: wer macht etwas? ~~(→ Nominativ)~~ Was/wen sehe ich? ~~(→ Akkusativ)~~',
        },
        {
          badge: 'Präposition',
          titel: 'für, gegen, ohne, um, durch',
          text: 'Nach diesen fünf Präpositionen steht **immer** Akkusativ: __**für** meinen Bruder__, __**ohne** den Schlüssel__, __**durch** die Stadt__. ~~Memoriza la lista como una cancioncilla: für-gegen-ohne-um-durch.~~',
        },
      ],
    },
    {
      type: 'tabelle',
      eyebrow: 'Erklärung — Nominativ vs. Akkusativ',
      kopf: ['Genus', 'Nominativ', 'Akkusativ'],
      zeilen: [
        ['Maskulin', 'der / ein / kein', '**den / einen / keinen**'],
        ['Feminin', 'die / eine / keine', 'die / eine / keine ~~(igual)~~'],
        ['Neutrum', 'das / ein / kein', 'das / ein / kein ~~(igual)~~'],
        ['Plural', 'die / — / keine', 'die / — / keine ~~(igual)~~'],
      ],
    },

    { type: 'rule' },

    // ── Beispiele ─────────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele',
      items: [
        { text: 'Ich sehe **den** Bus.', gl: '— maskulin: der → den' },
        { text: 'Er hat **keinen** Führerschein.', gl: '— kein → keinen' },
        { text: 'Wir suchen **die** Apotheke.', gl: '— feminin: sin cambio' },
        { text: 'Das Geschenk ist **für meinen** Vater.', gl: '— für + Akkusativ' },
        { text: '**Ohne** Ticket darfst du nicht fahren.', gl: '— ohne + Akkusativ' },
        { text: 'Der Bus fährt **durch die** Stadt.', gl: '— durch + Akkusativ' },
      ],
    },

    { type: 'rule' },

    // ── Übungen ───────────────────────────────────────────────────
    {
      type: 'uebung',
      eyebrow: 'Anwendung — Übung 1 · der, die, das → Akkusativ',
      frage: 'Ergänze den Artikel im Akkusativ. ~~Solo el masculino cambia.~~',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Ich sehe ___ Mann. (der Mann)',
        'Wir kaufen ___ Lampe. (die Lampe)',
        'Er isst ___ Brot. (das Brot)',
        'Sie sucht ___ Schlüssel. (der Schlüssel)',
      ],
      loesungen: [
        'Ich sehe **den** Mann. ~~(¡no *der Mann*!)~~',
        'Wir kaufen **die** Lampe. ~~(feminin: igual)~~',
        'Er isst **das** Brot. ~~(neutrum: igual)~~',
        'Sie sucht **den** Schlüssel.',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 2 · einen, eine, ein — oder keinen?',
      frage: 'Ergänze ein/eine/einen oder kein/keine/keinen.',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Ich habe ___ Hund. (der Hund, +)',
        'Sie hat ___ Auto. (das Auto, −)',
        'Brauchst du ___ Tasche? (die Tasche, +)',
        'Er trinkt ___ Kaffee. (der Kaffee, −)',
      ],
      loesungen: [
        'Ich habe **einen** Hund.',
        'Sie hat **kein** Auto.',
        'Brauchst du **eine** Tasche?',
        'Er trinkt **keinen** Kaffee.',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 3 · Präpositionen mit Akkusativ',
      frage: 'Ergänze die Präposition und den Artikel.',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Das Geschenk ist ___ ___ Bruder. (para / der Bruder)',
        '___ ___ Stadtplan finde ich das Hotel nicht. (sin / der Stadtplan)',
        'Wir gehen ___ ___ Park. (a través de / der Park)',
      ],
      loesungen: [
        'Das Geschenk ist **für den** Bruder.',
        '**Ohne den** Stadtplan finde ich das Hotel nicht.',
        'Wir gehen **durch den** Park.',
      ],
    },

    { type: 'rule' },

    // ── Prüfungsbezug ─────────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Schreiben · E-Mail',
      titel: 'Eine Einladung',
      anweisung: 'In Schreiben Teil 2 lädst du oft jemanden ein. Ergänze die Artikel im Akkusativ:',
      absaetze: [
        '„Liebe Ana, ich mache am Samstag {1} Ausflug an den See. Ich habe {2} Kuchen für dich. Bring bitte {3} Ball mit!“',
      ],
      optionen: ['(1) ein Ausflug → ?', '(2) ein Kuchen → ?', '(3) ein Ball → ?'],
      loesungLabel: 'Lösung',
      loesungen: [
        '{1} ich mache **einen** Ausflug ~~(der Ausflug → einen)~~',
        '{2} Ich habe **einen** Kuchen für dich.',
        '{3} Bring bitte **einen** Ball mit! ~~(mitbringen: verbo separable, Lektion 7)~~',
      ],
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Im **Lesen** stehen in Anzeigen oft Akkusativ-Formen: „Wir suchen **einen** Mitarbeiter“, „Familie sucht **eine** Wohnung“. Wer sucht was? — Das ist oft genau die Prüfungsfrage. ~~Si dudas con un artículo, piensa primero el género: der/die/das.~~',
    },

    { type: 'rule' },

    // ── Abschluss ─────────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Was?', 'Regel', 'Beispiel'],
      zeilen: [
        ['Maskulin', 'der → den, ein → einen, kein → keinen', 'Ich sehe den Mann.'],
        ['Feminin / Neutrum / Plural', 'keine Änderung', 'Ich sehe die Frau / das Kind.'],
        ['für, gegen, ohne, um, durch', 'immer + Akkusativ', 'für meinen Vater'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich weiß: nur Maskulin ändert sich (den, einen, keinen).',
        'Ich benutze haben, brauchen, suchen, sehen … mit Akkusativ.',
        'Ich kenne die fünf Präpositionen für, gegen, ohne, um, durch.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Nach dem Akkusativ kommt der zweite wichtige Fall: der **Dativ** — __Ich helfe **dem** Mann.__ ~~(el caso del objeto indirecto, y del famoso «gefällt mir»)~~ Das lernst du in der nächsten Lektion.',
    },
  ],
}
