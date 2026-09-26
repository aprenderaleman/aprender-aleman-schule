// Übungsheft B1 — Lektion 07: Präteritum — war, hatte & Erzählform
export default {
  lektion: 7,
  titel: 'Übungsheft — Präteritum: war, hatte & Erzählform',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Wähle die richtige Form im Präteritum oder ergänze die Sätze.',
      items: [
        { typ: 'mc', frage: 'Wo ___ du gestern Abend? — Ich war zu Hause.', optionen: ['hattest', 'warst', 'wart'], loesung: 1 },
        {
          typ: 'luecke',
          text: 'Letzte Woche {1} ich krank. Ich {2} Fieber und {3} nicht arbeiten.',
          bank: ['war', 'hatte', 'konnte', 'könnte', 'hat'],
          loesungen: { 1: 'war', 2: 'hatte', 3: 'konnte' },
        },
        {
          typ: 'luecke',
          text: '{1} ihr am Wochenende in Hamburg? — Ja, und wir {2} sehr viel Spaß.',
          bank: ['Wart', 'Waren', 'hatten', 'hattet'],
          loesungen: { 1: 'Wart', 2: 'hatten' },
        },
        { typ: 'mc', frage: 'Als Kind ___ ich nicht lange fernsehen.', optionen: ['dürfte', 'durfte', 'darfte'], loesung: 1 },
        { typ: 'mc', frage: 'Du ___ letzten Freitag Geburtstag, oder?', optionen: ['hattest', 'hattet', 'hatte'], loesung: 0 },
        {
          typ: 'zuordnen',
          links: ['ging', 'kam', 'sah', 'gab', 'wusste'],
          rechts: ['gehen', 'kommen', 'sehen', 'geben', 'wissen'],
          loesung: { 'ging': 'gehen', 'kam': 'kommen', 'sah': 'sehen', 'gab': 'geben', 'wusste': 'wissen' },
        },
        {
          typ: 'luecke',
          text: 'Wir {1} ins Kino gehen, aber wir {2} lange arbeiten. An diesem Tag {3} niemand früher gehen.',
          bank: ['wollten', 'mussten', 'durfte', 'müssten', 'wollen'],
          loesungen: { 1: 'wollten', 2: 'mussten', 3: 'durfte' },
        },
        { typ: 'satzbau', woerter: ['arbeiten', 'mussten', 'lange', 'Wir', 'gestern'], loesung: 'Wir mussten gestern lange arbeiten.' },
        { typ: 'satzbau', woerter: ['du', 'kommen', 'konntest', 'nicht', 'Warum'], loesung: 'Warum konntest du nicht kommen?' },
        {
          typ: 'korrektur',
          optionen: ['Gestern konnte ich nicht kommen.', 'Gestern könnte ich nicht kommen.'],
          loesung: 0,
          warum: 'Los modales en Präteritum van **sin diéresis**: *konnte, musste, durfte*. *Könnte* (con ö) significa «podría» y no encaja con *gestern*.',
        },
        {
          typ: 'korrektur',
          optionen: ['Es hatte viele Leute auf der Party.', 'Es gab viele Leute auf der Party.'],
          loesung: 1,
          warum: '«Había» se dice **es gab**, nunca *es hatte*. *Es gibt* → *es gab*.',
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies den Forumsbeitrag. Sind die Aussagen richtig oder falsch? Wähle bei Aufgabe 3 die richtige Antwort.',
      textTitel: 'Forum „Neu in Deutschland“ — Mein erster Winter',
      text: 'Vor zwei Jahren kam ich aus Santiago de Chile nach Leipzig. Am Anfang war alles schwer. Ich hatte keine Wohnung und wohnte drei Wochen bei einem Kollegen. Ich konnte nur wenig Deutsch, deshalb musste ich jeden Abend einen Kurs besuchen. Im Dezember sah ich zum ersten Mal Schnee. Es war sehr kalt, aber ich fand es wunderschön. An Weihnachten gab es bei meiner Nachbarin, Frau Böhm, Plätzchen und Tee. Sie wusste, dass ich allein war, und lud mich ein. Wir sprachen den ganzen Abend. Heute ist sie meine beste Freundin in Leipzig, und mein Deutsch ist viel besser. Wie war euer erster Winter hier? — Tomás, 31',
      items: [
        { typ: 'rf', aussage: 'Tomás hatte am Anfang keine eigene Wohnung.', loesung: true },
        { typ: 'rf', aussage: 'Tomás musste jeden Morgen einen Deutschkurs besuchen.', loesung: false },
        { typ: 'mc', frage: 'Was sah Tomás im Dezember zum ersten Mal?', optionen: ['Plätzchen', 'Schnee', 'seine Nachbarin'], loesung: 1 },
        { typ: 'rf', aussage: 'Frau Böhm hat Tomás an Weihnachten eingeladen.', loesung: true },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'text',
      titel: 'Schreiben',
      anweisung: 'Schreib eine E-Mail mit mindestens 40 Wörtern. Denk an Anrede und Gruß.',
      aufgabe: 'Du warst letzte Woche krank und konntest nicht zum Deutschkurs kommen. Schreib deiner Kursleiterin, Frau Hoffmann, eine E-Mail.',
      punkte: [
        'Entschuldige dich: Warum konntest du nicht kommen?',
        'Erzähl: Was hattest du? Was musstest du machen?',
        'Frag nach den Hausaufgaben.',
      ],
      minWoerter: 40,
      beispielLoesung: 'Liebe Frau Hoffmann, leider konnte ich letzte Woche nicht zum Kurs kommen. Ich war krank und hatte hohes Fieber. Ich musste zum Arzt gehen und durfte drei Tage nicht aus dem Haus. Jetzt geht es mir wieder besser. Welche Hausaufgaben hatten wir? Können Sie mir bitte die Seiten schicken? Viele Grüße, Irina Popescu',
    },
  ],
}
