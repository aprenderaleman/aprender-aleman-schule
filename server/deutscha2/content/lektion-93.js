// Geschichte 3 · Ein Termin beim Arzt
//
// Lectura graduada A2 — canon: A1 completo + Bloques 0-2 del A2.
// El vocabulario de citas y mensajes del Bloque 2 (Termin, absagen, leider,
// warten, krank …) entra en acción. El léxico del cuerpo (Bloque 3) aún no
// es canon → va en «Vor dem Lesen».

export default {
  spec: ['Geschichte 3', 'Lectura graduada', 'Niveau A2', 'Wortschatz: Bloque 0-2'],
  h1: 'Ein Termin beim Arzt',
  lead: 'Nach dem kalten Zug tut Marías Hals weh — sie muss im Café absagen und braucht einen Termin. ~~Aquí ves el vocabulario del Bloque 2 en la vida real.~~',

  content: [
    // ── Vor dem Lesen ─────────────────────────────────────────────
    {
      type: 'wortschatz',
      eyebrow: 'Vor dem Lesen',
      items: [
        { wort: 'der Hals', kollokation: 'Mein Hals tut weh.', es: 'la garganta' },
        { wort: 'wehtun', kollokation: 'Der Kopf tut weh.', es: 'doler' },
        { wort: 'der Kopf', kollokation: 'der Kopf tut auch weh', es: 'la cabeza' },
        { wort: 'der Husten', kollokation: 'Husten haben', es: 'la tos' },
        { wort: 'das Fieber', kollokation: 'ein bisschen Fieber haben', es: 'la fiebre' },
        { wort: 'erkältet', kollokation: 'erkältet sein', es: 'resfriado/a' },
        { wort: 'das Wartezimmer', kollokation: 'im Wartezimmer sitzen', es: 'la sala de espera' },
        { wort: 'das Rezept, -e', kollokation: 'ein Rezept bekommen', es: 'la receta (médica)' },
        { wort: 'die Apotheke', kollokation: 'in die Apotheke gehen', es: 'la farmacia' },
        { wort: 'die Tablette, -n', kollokation: 'dreimal am Tag eine Tablette', es: 'la pastilla' },
      ],
      hinweis: '~~Este léxico del cuerpo y la salud vuelve a fondo en la Lektion 37 — aquí lo conoces por primera vez.~~',
    },

    { type: 'rule' },

    // ── Geschichte ────────────────────────────────────────────────
    {
      type: 'prose',
      eyebrow: 'Geschichte',
      card: true,
      titel: 'Ein Termin beim Arzt',
      absaetze: [
        'Am Montag um sieben klingelt der Wecker ~~(suena el despertador)~~. María möchte aufstehen — aber sie kann nicht. Der **Hals** **tut weh**, der **Kopf** tut auch weh, und sie hat **Husten**. Der Ausflug war schön, aber der kalte Zug war keine gute Idee ~~(idea)~~. „Oh nein“, denkt sie ~~(piensa)~~, „heute ist Arbeit!“ Sie ruft im Café an. „Deniz? Ich bin krank. Ich kann heute leider nicht kommen. Ich muss absagen.“ Deniz sagt: „Kein Problem, María. Gute Besserung! ~~(¡que te mejores!)~~“',
        'Dann ruft María in der Praxis an. Die Frau am Telefon sagt: „Kommen Sie heute um elf Uhr dreißig. Und bringen Sie Ihre Karte mit!“ María schreibt den Termin auf einen Zettel ~~(un papelito)~~, denn ihr Kopf ist heute nicht gut.',
      ],
    },
    {
      type: 'prose',
      card: true,
      absaetze: [
        'Im **Wartezimmer** sitzen viele Menschen ~~(gente)~~. Ein Kind spielt laut ~~(hace ruido jugando)~~, ein Mann hustet ~~(tose)~~, eine Frau liest. María wartet fast eine Stunde und liest die Wörter an der Wand ~~(pared)~~: „Bitte Handy aus!“ ~~(¡apaga el móvil!)~~ Endlich ~~(por fin)~~ ist sie dran ~~(le toca)~~. Die Ärztin ist freundlich. „Na, was fehlt Ihnen? ~~(¿qué le pasa?)~~“, fragt sie. „Mein Hals tut weh, und ich habe Husten“, sagt María. Die Ärztin schaut in den Hals ~~(le mira la garganta)~~ und sagt: „Sie sind **erkältet**, und Sie haben ein bisschen **Fieber**. Das ist nicht schlimm ~~(grave)~~. Bleiben Sie drei Tage zu Hause.“',
        'María bekommt ~~(recibe)~~ ein **Rezept**. In der **Apotheke** kauft sie die **Tabletten**. „Dreimal am Tag eine Tablette“, sagt der Mann in der Apotheke. „Und trinken Sie viel!“',
      ],
    },
    {
      type: 'prose',
      card: true,
      absaetze: [
        'Zu Hause nimmt María eine Tablette, trinkt Wasser und schläft den ganzen Nachmittag ~~(toda la tarde)~~. Um sechs ruft Deniz an: „Na, wie geht es dir? Die alte Frau hat heute nach dir gefragt — ihr Milchkaffee war ohne dich nur halb so gut ~~(la mitad de bueno)~~.“ María muss lachen ~~(reírse)~~, und das tut ein bisschen weh.',
        'Am Abend klingelt es an der Tür ~~(llaman a la puerta)~~. Frau Krüger steht dort — mit Tee ~~(té)~~ und einer Suppe ~~(sopa)~~. „Sie sind krank, das habe ich gehört. Essen Sie die Suppe, Kind.“ María muss lächeln ~~(no puede evitar sonreír)~~. Frau Krüger ist streng ~~(estricta)~~, aber sie hat ein gutes Herz ~~(un gran corazón)~~.',
        'Nach drei Tagen geht es María wieder gut. Aber sie denkt an die Praxis: Die Ärztin hat schnell gesprochen, und María hat nicht alles verstanden. „Mein Deutsch muss besser werden ~~(tiene que mejorar)~~“, sagt sie. „Ich brauche einen Deutschkurs.“',
      ],
    },

    { type: 'rule' },

    // ── Nach dem Lesen ────────────────────────────────────────────
    {
      type: 'uebung',
      eyebrow: 'Nach dem Lesen',
      frage: 'Beantworte die Fragen. ~~(Fíjate: absagen, Termin y warten son vocabulario del Bloque 2.)~~',
      loesungLabel: 'Lösung',
      aufgaben: [
        'Warum kann María am Montag nicht arbeiten?',
        'Was sagt die Ärztin?',
        'Wer kommt am Abend, und was bringt sie mit?',
        'Was möchte María am Ende machen — und warum?',
      ],
      loesungen: [
        'Sie ist **krank**: Der Hals tut weh, sie hat Husten. Sie ruft im Café an und **sagt ab**.',
        'María ist **erkältet** und hat ein bisschen **Fieber**. Sie soll **drei Tage zu Hause bleiben**.',
        '**Frau Krüger**. Sie bringt **Tee und eine Suppe** mit.',
        'Sie möchte einen **Deutschkurs** machen, **weil** sie in der Praxis nicht alles verstanden hat.',
      ],
    },

    { type: 'rule' },

    // ── Ausblick ──────────────────────────────────────────────────
    {
      type: 'ausblick',
      eyebrow: 'Ausblick',
      text: 'Gesund und mit einem Plan: In **Geschichte 4** beginnt María ihren **Deutschkurs** — und dort wartet eine neue Freundin. Dann liest du auch den großen Themen-Wortschatz aus Block 3 (Familie, Freizeit, Tagesablauf) in der Geschichte.',
    },
  ],
}
