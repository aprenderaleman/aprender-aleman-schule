// Geschichte 4 · Der Deutschkurs
//
// Lectura graduada A2 — canon: A1 completo + Bloques 0-3 del A2.
// Con el Bloque 3 entran Familie, Feierabend, Haltestelle, Freizeit …
// Aparece Carla (ver BIBLIA: compañera del Deutschkurs, luego WG en B1).

export default {
  spec: ['Geschichte 4', 'Lectura graduada', 'Niveau A2', 'Wortschatz: Bloque 0-3'],
  h1: 'Der Deutschkurs',
  lead: 'Zweimal pro Woche Deutsch am Abend — und neben María sitzt eine neue Freundin aus Mexiko. ~~Casi todo el vocabulario de este capítulo ya es canon: disfruta.~~',

  content: [
    // ── Vor dem Lesen ─────────────────────────────────────────────
    {
      type: 'wortschatz',
      eyebrow: 'Vor dem Lesen',
      items: [
        { wort: 'der Deutschkurs', kollokation: 'einen Deutschkurs machen', es: 'el curso de alemán' },
        { wort: 'der Unterricht', kollokation: 'Der Unterricht beginnt um sechs.', es: 'la clase' },
        { wort: 'beginnen', kollokation: 'Der Kurs beginnt.', es: 'empezar' },
        { wort: 'die Pause, -n', kollokation: 'in der Pause', es: 'la pausa, el descanso' },
        { wort: 'zusammen', kollokation: 'zusammen lernen', es: 'juntos/as' },
        { wort: 'die Tafel', kollokation: 'Beispiele an der Tafel', es: 'la pizarra' },
        { wort: 'das Beispiel, -e', kollokation: 'ein Beispiel geben', es: 'el ejemplo' },
        { wort: 'erklären', kollokation: 'Die Lehrerin erklärt die Grammatik.', es: 'explicar' },
        { wort: 'die Grammatik', kollokation: 'Grammatik üben', es: 'la gramática' },
        { wort: 'lustig', kollokation: 'Carla ist lustig.', es: 'divertido/a, gracioso/a' },
      ],
    },

    { type: 'rule' },

    // ── Geschichte ────────────────────────────────────────────────
    {
      type: 'prose',
      eyebrow: 'Geschichte',
      card: true,
      titel: 'Der Deutschkurs',
      absaetze: [
        'Am Dienstag hat María um fünf Feierabend. Um sechs **beginnt** ihr **Deutschkurs** — zweimal pro Woche ~~(dos veces por semana)~~, nicht weit von der Gartenstraße. Im Kurs sind zwölf Menschen aus acht Ländern. Die Lehrerin heißt Frau Sommer. Sie schreibt viele **Beispiele** an die **Tafel** und **erklärt** die **Grammatik** langsam und klar ~~(claro)~~. „Fehler sind okay“, sagt sie am Anfang ~~(al principio)~~. „Ohne Fehler lernt man nichts.“',
        'Neben María sitzt eine junge ~~(joven)~~ Frau. „Hola — äh, hallo!“, sagt sie und lacht ~~(se ríe)~~. „Ich bin Carla, aus Mexiko.“ María lacht auch: „Ich bin María, aus Valencia!“ Sie möchten sofort Spanisch sprechen — aber im Kurs sprechen alle Deutsch, weil alle üben müssen.',
      ],
    },
    {
      type: 'prose',
      card: true,
      absaetze: [
        'Das Thema heute ist „Meine Familie“. Carla erzählt ~~(cuenta)~~ von ihren drei Geschwistern und von ihren Großeltern in Mexiko. María erzählt von ihrer Mutter und ihrer Schwester in Valencia. „Und dein Vater?“, fragt Carla. „Mein Vater kocht am Sonntag immer Paella — das ist sein Hobby“, sagt María. Der ganze Kurs lacht. ~~(Toda la clase se ríe.)~~',
        'In der **Pause** trinken María und Carla einen Kaffee. Carla wohnt erst zwei Monate in Berlin und arbeitet am Vormittag in einem kleinen Geschäft. „Ich habe hier noch nicht viele Freunde“, sagt sie. „Am Wochenende sitze ich nur in meinem Zimmer und lerne Wörter.“ — „Dann komm am Samstag ins Café Sonne!“, sagt María. „Der Kaffee ist gut, und die Kollegen sind **lustig**.“ Carla freut sich: „Wirklich? ~~(¿de verdad?)~~ Gern!“',
      ],
    },
    {
      type: 'prose',
      card: true,
      absaetze: [
        'Nach dem **Unterricht** fahren die zwei **zusammen** mit dem Bus. Sie sprechen über die Arbeit, über Berlin und über die Prüfung im Sommer ~~(verano)~~. „Hast du Angst vor der Prüfung? ~~(¿te da miedo el examen?)~~“, fragt Carla. „Ein bisschen“, sagt María. „Das Hören ist schwer ~~(difícil)~~, weil alle so schnell sprechen.“ — „Dann üben wir das Hören zusammen“, sagt Carla. „Wenn wir zusammen lernen, ist die Grammatik nur halb so schlimm ~~(la mitad de terrible)~~. Und das Hören auch.“',
        'An der Haltestelle sagt María: „Du, Carla … Paul hat bald Geburtstag. Ich mache eine Party — eine Überraschung ~~(una sorpresa)~~. Hilfst du mir?“ Carla freut sich: „Klar! ~~(¡claro!)~~ Ich liebe Partys.“',
      ],
    },

    { type: 'rule' },

    // ── Nach dem Lesen ────────────────────────────────────────────
    {
      type: 'uebung',
      eyebrow: 'Nach dem Lesen',
      frage: 'Beantworte die Fragen. ~~(Usa weil y wenn donde puedas — como en la historia.)~~',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Wann und wie oft hat María Deutschkurs?',
        'Wer ist Carla?',
        'Warum sprechen María und Carla im Kurs kein Spanisch?',
        'Was fragt María an der Haltestelle?',
      ],
      loesungen: [
        'Am Abend **um sechs**, **zweimal pro Woche** — nach dem Feierabend.',
        'Eine junge Frau **aus Mexiko**. Sie sitzt im Kurs neben María und wohnt erst **zwei Monate** in Berlin.',
        '**Weil alle Deutsch üben müssen.**',
        'Paul hat bald **Geburtstag**. María macht eine **Überraschungsparty** und fragt: „**Hilfst du mir?**“',
      ],
    },

    { type: 'rule' },

    // ── Ausblick ──────────────────────────────────────────────────
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Eine Party für Paul — aber psst, es ist eine Überraschung! In **Geschichte 5** feiern alle zusammen: María, Deniz, Carla … und sogar ~~(incluso)~~ Frau Krüger. Es ist das große Finale des A2-Kurses.',
    },
  ],
}
