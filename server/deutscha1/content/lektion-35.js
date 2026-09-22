// Lektion 35 · Beruf & Alltag
//
// Bloque 3 (Themen & Wortschatz) — profesiones básicas (masc./fem.),
// «Ich bin / arbeite als» SIN artículo, im Büro / im Geschäft. Cierre del
// bloque temático: todo cabe en la presentación personal.

export default {
  spec: ['Bloque 3', 'Themenfelder & Wortschatz', 'Niveau A1', 'Prüfungsrelevanz: Sprechen · Schreiben'],
  h1: 'Beruf & Alltag',
  lead: '~~¿A qué te dedicas?~~ **„Ich bin Lehrerin.“** ~~Las profesiones básicas, el trabajo de cada día — y el cierre del bloque: todo cabe ya en tu presentación personal.~~',

  content: [
    // ── Lernziele ─────────────────────────────────────────────────
    {
      type: 'lernziele',
      eyebrow: 'Lernziele',
      items: [
        'Berufe nennen — maskulin und feminin: der Lehrer / die Lehrerin',
        'den Beruf sagen: *Ich bin Ärztin.* · *Ich arbeite als Kellner.* — ohne Artikel!',
        'über die Arbeit sprechen: im Büro, im Geschäft',
        'die komplette Vorstellung: Name, Land, Wohnung, Tag, Beruf, Hobby',
      ],
    },

    { type: 'rule' },

    // ── Kernwortschatz ────────────────────────────────────────────
    {
      type: 'wortschatz',
      eyebrow: 'Kernwortschatz — Berufe & Arbeit',
      items: [
        { wort: 'der Beruf', kollokation: 'Was sind Sie von Beruf?', es: 'la profesión' },
        { wort: 'der Lehrer / die Lehrerin', kollokation: 'Lehrerin an einer Schule', es: 'el profesor / la profesora' },
        { wort: 'der Arzt / die Ärztin', kollokation: 'Ärztin im Krankenhaus', es: 'el médico / la médica' },
        { wort: 'der Verkäufer / die Verkäuferin', kollokation: 'Verkäufer im Geschäft', es: 'el dependiente / la dependienta' },
        { wort: 'der Kellner / die Kellnerin', kollokation: 'Kellner im Restaurant', es: 'el camarero / la camarera' },
        { wort: 'der Student / die Studentin', kollokation: 'Studentin an der Universität', es: 'el/la estudiante' },
        { wort: 'der Ingenieur / die Ingenieurin', kollokation: 'Ingenieur bei einer Firma', es: 'el ingeniero / la ingeniera' },
        { wort: 'die Arbeit', kollokation: 'zur Arbeit gehen', es: 'el trabajo' },
        { wort: 'arbeiten als', kollokation: 'als Kellner arbeiten', es: 'trabajar de/como' },
        { wort: 'das Büro', kollokation: 'im Büro arbeiten', es: 'la oficina' },
        { wort: 'das Geschäft', kollokation: 'im Geschäft arbeiten', es: 'la tienda' },
        { wort: 'der Kollege / die Kollegin', kollokation: 'nette Kollegen', es: 'el/la colega (de trabajo)' },
      ],
      hinweis: 'Frau + Beruf → fast immer **-in**: Lehrer → Lehrer**in**, Arzt → **Ä**rzt**in** ~~(¡a veces con Umlaut!)~~, Verkäufer → Verkäufer**in**.',
    },

    { type: 'rule' },

    // ── Erklärung ─────────────────────────────────────────────────
    {
      type: 'prose',
      eyebrow: 'Erklärung',
      card: true,
      kicker: 'Situation 1',
      titel: 'Ich bin Lehrer — ohne Artikel!',
      absaetze: [
        'Der Beruf steht **ohne Artikel**: **Ich bin Lehrer.** · **Sie ist Ärztin.** ~~Como en español «soy profesor» — nunca digas «Ich bin EIN Lehrer».~~',
      ],
    },
    {
      type: 'prose',
      card: true,
      kicker: 'Situation 2',
      titel: 'arbeiten als / arbeiten in',
      absaetze: [
        'Ich **arbeite als** Kellner. ~~(trabajo DE camarero — también sin artículo)~~ · Ich arbeite **im Büro** / **im Geschäft** / **bei** einer Firma. ~~«bei» + empresa: bei Siemens.~~',
      ],
    },
    {
      type: 'prose',
      card: true,
      kicker: 'Situation 3',
      titel: 'Die Frage nach dem Beruf',
      absaetze: [
        '**Was sind Sie von Beruf?** ~~(¿a qué se dedica usted?)~~ — Ich bin Ingenieurin. · **Was machst du?** — Ich bin Student. Ich studiere in Berlin.',
      ],
    },

    { type: 'rule' },

    // ── Beispiele ─────────────────────────────────────────────────
    {
      type: 'beispiele',
      eyebrow: 'Beispiele',
      items: [
        { text: 'Ich **bin** Lehrerin.', gl: '— Soy profesora. (sin artículo)' },
        { text: 'Was sind Sie **von Beruf**?', gl: '— ¿Cuál es su profesión?' },
        { text: 'Ich **arbeite als** Kellner in einem Restaurant.', gl: '— Trabajo de camarero en un restaurante.' },
        { text: 'Er arbeitet **im Büro**.', gl: '— Él trabaja en la oficina.' },
        { text: 'Maria ist Verkäuferin **im Geschäft**.', gl: '— María es dependienta en la tienda.' },
        { text: 'Meine Kollegen sind nett.', gl: '— Mis compañeros de trabajo son majos.' },
      ],
    },
    {
      type: 'redemittel',
      eyebrow: 'Redemittel',
      gruppen: [
        {
          fn: 'Über den Beruf sprechen',
          saetze: [
            { satz: 'Ich bin … (von Beruf).', gloss: 'Soy … (de profesión).' },
            { satz: 'Ich arbeite als … / im Büro / bei …', gloss: 'Trabajo de … / en la oficina / en (empresa).' },
            { satz: 'Ich bin Student. Ich studiere …', gloss: 'Soy estudiante. Estudio …' },
          ],
        },
        {
          fn: 'Die komplette Vorstellung — Block 3 in 5 Sätzen',
          saetze: [
            { satz: 'Ich heiße Ana und komme aus Spanien.', gloss: 'Me llamo Ana y soy de España.' },
            { satz: 'Ich wohne in einer Wohnung in Berlin.', gloss: 'Vivo en un piso en Berlín. (Lektion 33)' },
            { satz: 'Ich stehe um 7 Uhr auf und arbeite im Büro.', gloss: 'Me levanto a las 7 y trabajo en la oficina. (Lektion 34)' },
            { satz: 'Ich bin Ingenieurin von Beruf.', gloss: 'Soy ingeniera de profesión.' },
            { satz: 'Mein Hobby ist Schwimmen.', gloss: 'Mi hobby es nadar.' },
          ],
        },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'maskulin → feminin',
      titel: 'Der Beruf und die -in-Form',
      items: [
        { text: 'der Lehrer → die **Lehrerin**', gl: '— profesor → profesora' },
        { text: 'der Verkäufer → die **Verkäuferin**', gl: '— dependiente → dependienta' },
        { text: 'der Arzt → die **Ärztin**', gl: '— ¡con Umlaut!' },
        { text: 'der Student → die **Studentin**', gl: '— estudiante (m/f)' },
        { text: 'der Kellner → die **Kellnerin**', gl: '— camarero → camarera' },
      ],
    },
    {
      type: 'beispiele',
      kicker: 'Wer arbeitet wo?',
      titel: 'Fünf Berufe, fünf Orte',
      items: [
        { text: 'Die **Ärztin** arbeitet im Krankenhaus.', gl: '— la médica, en el hospital' },
        { text: 'Der **Kellner** arbeitet in einem Restaurant.', gl: '— el camarero, en un restaurante' },
        { text: 'Die **Verkäuferin** arbeitet im **Geschäft**.', gl: '— la dependienta, en la tienda' },
        { text: 'Der **Ingenieur** arbeitet **bei** einer Firma.', gl: '— «bei» + empresa' },
        { text: 'Die **Studentin** studiert an der Universität.', gl: '— la estudiante, en la universidad' },
      ],
    },

    { type: 'rule' },

    // ── Prüfungsbezug ─────────────────────────────────────────────
    {
      type: 'pruefungsaufgabe',
      eyebrow: 'Prüfungsbezug',
      modul: 'Sprechen · Teil 1',
      titel: 'Sich vorstellen — jetzt komplett',
      anweisung: 'Im Sprechen Teil 1 stellst du dich der Gruppe vor. Mit Block 3 ist deine Vorstellung komplett. Ergänze:',
      absaetze: [
        '„Ich heiße Carmen Ruiz. Ich komme aus Spanien. Ich wohne in einer {1} in Frankfurt. Ich bin {2} und arbeite in einem Geschäft. Um 7 Uhr {3} ich auf. Mein {4} ist Schwimmen.“',
      ],
      loesungLabel: 'Lösung',
      loesungen: [
        '{1} **Wohnung**',
        '{2} **Verkäuferin**',
        '{3} **stehe**',
        '{4} **Hobby**',
      ],
      kommentar: 'Wohnung (Lektion 33) + Tagesablauf und Hobby (Lektion 34) + Beruf (Lektion 35) — der ganze Block in einer Vorstellung.',
    },
    {
      type: 'tipp',
      label: 'Prüfungstipp',
      text: 'Das Sprechen im A1 ist **in der Gruppe** — du stellst dich mehreren Kandidaten vor. Lerne deine Vorstellung **auswendig**: Name, Land, Wohnort, Beruf, Hobby. ~~Es lo primero del oral: recítala hasta que salga sola.~~',
    },

    { type: 'rule' },

    // ── Abschluss ─────────────────────────────────────────────────
    {
      type: 'tabelle',
      eyebrow: 'Zusammenfassung',
      kopf: ['Regel', 'Beispiel'],
      zeilen: [
        ['Beruf ohne Artikel', 'Ich bin **Lehrer**. ~~(nunca «ein Lehrer»)~~'],
        ['arbeiten als / in / bei', 'Ich arbeite **als** Kellner · **im** Büro · **bei** einer Firma.'],
        ['die feminine Form: -in', 'die Lehrer**in** · die **Ä**rzt**in** · die Verkäufer**in**'],
        ['die Vorstellung', 'Name · Land · Wohnung · Tag · Beruf · Hobby'],
      ],
    },
    {
      type: 'selbstcheck',
      eyebrow: 'Selbstcheck',
      items: [
        'Ich kenne die Berufe — maskulin und feminin: Lehrer/Lehrerin, Arzt/Ärztin.',
        'Ich sage meinen Beruf ohne Artikel: „Ich bin Kellnerin.“ / „Ich arbeite als Kellner.“',
        'Ich kann über die Arbeit sprechen: im Büro, im Geschäft, bei einer Firma.',
        'Ich kann mich komplett vorstellen: Name, Land, Wohnung, Tag, Beruf, Hobby.',
      ],
    },
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Block 3 ist fertig: Wohnung, Tagesablauf, Beruf — deine Vorstellung steht. In der nächsten Lektion testest du alles zusammen: **Prüfungssimulation 1** — eine komplette Übungsrunde wie in der echten Prüfung.',
    },
  ],
}
