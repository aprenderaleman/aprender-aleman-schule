// Lektion 09 · Der Akkusativ (den/einen)
//
// Bloque 1 — Grammatik & Struktur. Sigue el estándar de la lección modelo 04:
// 8 secciones, frases mínimas, traducción casi constante. Sin teoría de casos:
// solo «después de estos verbos, der → den y ein → einen».

export default {
  spec: ['Bloque 1', 'Grammatik & Struktur', 'Niveau A1', 'Prüfungsrelevanz: Sprechen · Schreiben'],
  h1: 'Der Akkusativ (den/einen)',
  lead: '~~Después de verbos como~~ *haben* ~~o~~ *kaufen*, ~~solo cambia una cosa:~~ **der → den**, **ein → einen**. ~~Todo lo demás queda igual.~~',

  content: [
    // ── Lernziele ─────────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'nach *haben, kaufen, brauchen …* die Form **den/einen** benutzen',
        'wissen: *die* und *das* ändern sich **nicht**',
        'Sätze mit *es gibt* bilden',
      ],
    },

    { type: 'rule' },

    // ── Kernwortschatz ────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Kernwortschatz — der wird den',
      kopf: ['Genus', 'Wörterbuch ~~(diccionario)~~', 'nach haben, kaufen …'],
      zeilen: [
        ['maskulin', 'der / ein Apfel', '**den / einen** Apfel ~~← solo aquí hay cambio~~'],
        ['feminin', 'die / eine Banane', 'die / eine Banane ~~(igual)~~'],
        ['neutral', 'das / ein Brot', 'das / ein Brot ~~(igual)~~'],
        ['Plural', 'die Äpfel', 'die Äpfel ~~(igual)~~'],
      ],
    },
    {
      type: 'wortschatz',
      eyebrow: 'Kernwortschatz — Verben mit den/einen',
      items: [
        { wort: 'haben', kollokation: 'Ich habe einen Hund.', es: 'tener' },
        { wort: 'brauchen', kollokation: 'Ich brauche einen Stift.', es: 'necesitar' },
        { wort: 'kaufen', kollokation: 'Ich kaufe einen Apfel.', es: 'comprar' },
        { wort: 'suchen', kollokation: 'Ich suche einen Supermarkt.', es: 'buscar' },
        { wort: 'trinken', kollokation: 'Ich trinke einen Kaffee.', es: 'beber' },
        { wort: 'essen', kollokation: 'Ich esse einen Salat.', es: 'comer' },
        { wort: 'es gibt', kollokation: 'Es gibt einen Park.', es: 'hay' },
      ],
      hinweis: '~~Con~~ *sein* ~~no hay cambio:~~ __Das ist **der** Lehrer.__ ~~Pero:~~ __Ich sehe **den** Lehrer.__ ~~(veo al profesor)~~',
    },

    { type: 'rule' },

    // ── Erklärung ─────────────────────────────────────────────────
    {
      type: 'steps',
      eyebrow: 'Erklärung',
      steps: [
        {
          badge: 'nur maskulin',
          titel: 'Nur der ändert sich',
          text: 'Nach Verben wie *haben, kaufen, trinken* wird __der → **den**__ und __ein → **einen**__. ~~Solo el masculino cambia — es la única regla de hoy.~~',
        },
        {
          badge: 'die / das',
          titel: 'die und das bleiben gleich',
          text: '__Ich kaufe **die** Banane.__ · __Ich esse **das** Brot.__ ~~Femenino, neutro y plural: exactamente igual que siempre.~~',
        },
        {
          badge: 'es gibt',
          titel: 'es gibt + den/einen',
          text: '__Es gibt **einen** Supermarkt.__ ~~(hay un supermercado)~~ — nach *es gibt* auch __einen__ beim Maskulinum.',
        },
      ],
    },

    { type: 'rule' },

    // ── Beispiele ─────────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele',
      items: [
        { text: 'Ich habe **einen** Bruder.', gl: '— Tengo un hermano.' },
        { text: 'Ich trinke **einen** Kaffee.', gl: '— Bebo un café.' },
        { text: 'Wir kaufen **den** Käse.', gl: '— Compramos el queso.' },
        { text: 'Ich brauche **eine** Tasche.', gl: '— Necesito un bolso. (die → sin cambio)' },
        { text: 'Er isst **ein** Brötchen.', gl: '— Él come un panecillo. (das → sin cambio)' },
        { text: 'Es gibt hier **einen** Bahnhof.', gl: '— Aquí hay una estación.' },
      ],
    },

    { type: 'rule' },

    // ── Übungen ───────────────────────────────────────────────────
    {
      type: 'uebung',
      eyebrow: 'Anwendung — Übung 1 · den oder der?',
      frage: 'Wähle die richtige Form. ~~(Elige la forma correcta.)~~',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Ich kaufe der/den Apfel.',
        'Das ist der/den Lehrer.',
        'Ich suche der/den Bahnhof.',
        'Sie trinkt die/den Milch.',
      ],
      loesungen: [
        'Ich kaufe **den** Apfel. ~~(después de kaufen)~~',
        'Das ist **der** Lehrer. ~~(con sein no hay cambio)~~',
        'Ich suche **den** Bahnhof.',
        'Sie trinkt **die** Milch. ~~(femenino: igual)~~',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 2 · ein, eine oder einen?',
      frage: 'Ergänze ein, eine oder einen.',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Ich habe ___ Hund. (der Hund)',
        'Ich brauche ___ Lampe. (die Lampe)',
        'Er kauft ___ Auto. (das Auto)',
        'Es gibt hier ___ Supermarkt. (der Supermarkt)',
      ],
      loesungen: [
        'Ich habe **einen** Hund.',
        'Ich brauche **eine** Lampe.',
        'Er kauft **ein** Auto.',
        'Es gibt hier **einen** Supermarkt.',
      ],
    },
    {
      type: 'uebung',
      eyebrow: 'Übung 3 · Was kaufst du?',
      frage: 'Schreibe 3 Sätze: Was kaufst, trinkst und isst du? ~~(¿Qué compras, bebes y comes?)~~',
      loesungLabel: 'Muster',
      loesung: '*Ich kaufe einen Apfel und eine Banane. Ich trinke einen Tee. Ich esse ein Brötchen.* ~~Vale cualquier comida — revisa solo el masculino: ¿einen?~~',
    },

    { type: 'rule' },

    // ── Prüfungsbezug ─────────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Sprechen · Teil 2',
      titel: 'Fragen stellen & antworten',
      anweisung: 'Im Sprechen Teil 2 bekommst du Wortkarten, z. B. „Essen“ oder „Trinken“. Du fragst und antwortest. Ergänze:',
      absaetze: [
        '„Was trinkst du?“ — „Ich trinke {1} Kaffee.“ ~~(der Kaffee)~~',
        '„Was isst du?“ — „Ich esse {2} Salat.“ ~~(der Salat)~~',
      ],
      loesungLabel: 'Lösung',
      loesungen: [
        '{1} Ich trinke **einen** Kaffee.',
        '{2} Ich esse **einen** Salat.',
      ],
      kommentar: '~~Ojo: con «gern» (hábito) el alemán suele quitar el artículo: „Ich trinke gern Kaffee.“ El «einen» aparece cuando hablas de UN café concreto, como aquí.~~',
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Lerne jedes Nomen **mit Artikel**: *der Apfel, die Banane, das Brot*. Nur so weißt du in der Prüfung, wann **einen** kommt. ~~Sin saber el género no puedes acertar el «einen» — apréndelos siempre juntos.~~',
    },

    { type: 'rule' },

    // ── Abschluss ─────────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Regel', 'Beispiel'],
      zeilen: [
        ['maskulin: der → **den**, ein → **einen**', 'Ich kaufe **den/einen** Apfel.'],
        ['die, das, Plural: **kein Wechsel** ~~(sin cambio)~~', 'Ich kaufe die Banane / das Brot.'],
        ['nach *es gibt*: auch **einen**', 'Es gibt **einen** Park.'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich benutze nach haben, kaufen, brauchen … die Form den/einen.',
        'Ich weiß: die und das ändern sich nicht.',
        'Ich kann Sätze mit „es gibt“ bilden.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Du kannst jetzt sagen, **was du hast**: *Ich habe einen Hund.* In der nächsten Lektion lernst du das Gegenteil — **nein sagen**: *Ich habe **keinen** Hund. Ich komme **nicht**.* Die Negation mit *nicht* und *kein*.',
    },
  ],
}
