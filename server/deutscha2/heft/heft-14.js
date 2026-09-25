// Übungsheft A2 — Lektion 14: Konnektoren — und, oder, aber, denn, deshalb
export default {
  lektion: 14,
  titel: 'Übungsheft — Konnektoren',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Wähle oder ergänze den richtigen Konnektor. ~~(Elige o completa el conector correcto.)~~',
      items: [
        { typ: 'mc', frage: 'Das Kleid ist schön, ___ es ist zu teuer.', optionen: ['aber', 'oder', 'und'], loesung: 0 },
        { typ: 'mc', frage: 'Wir nehmen den Bus, ___ das Auto ist kaputt.', optionen: ['deshalb', 'denn', 'oder'], loesung: 1 },
        { typ: 'mc', frage: 'Ich bin müde, ___ gehe ich früh ins Bett.', optionen: ['denn', 'aber', 'deshalb'], loesung: 2 },
        {
          typ: 'luecke',
          text: 'Möchtest du Wasser {1} Saft? — Wasser, bitte, {2} Saft ist zu süß für mich.',
          bank: ['oder', 'denn', 'und'],
          loesungen: { 1: 'oder', 2: 'denn' },
        },
        {
          typ: 'luecke',
          text: 'Es regnet, {1} bleiben wir zu Hause {2} wir sehen einen Film.',
          bank: ['deshalb', 'und', 'aber'],
          loesungen: { 1: 'deshalb', 2: 'und' },
        },
        { typ: 'satzbau', woerter: ['deshalb', 'regnet', 'Es', 'bleibe', 'ich', 'zu', 'Hause'], loesung: 'Es regnet, deshalb bleibe ich zu Hause.' },
        { typ: 'satzbau', woerter: ['aber', 'Ich', 'komme', 'gern', 'mein', 'Bruder', 'hat', 'keine', 'Zeit'], loesung: 'Ich komme gern, aber mein Bruder hat keine Zeit.' },
        {
          typ: 'zuordnen',
          links: ['und', 'aber', 'denn', 'deshalb'],
          rechts: ['y (Addition)', 'pero (Kontrast)', 'porque (Grund)', 'por eso (Folge)'],
          loesung: { 'und': 'y (Addition)', 'aber': 'pero (Kontrast)', 'denn': 'porque (Grund)', 'deshalb': 'por eso (Folge)' },
        },
        {
          typ: 'korrektur',
          optionen: ['Ich bin krank, deshalb ich bleibe zu Hause.', 'Ich bin krank, deshalb bleibe ich zu Hause.'],
          loesung: 1,
          warum: 'Tras **deshalb** el verbo va PRIMERO: *deshalb bleibe ich*. ~~(«por eso yo me quedo» no funciona — inversión obligatoria.)~~',
        },
        {
          typ: 'korrektur',
          optionen: ['Ich lerne Deutsch, denn ich arbeite in Berlin.', 'Ich lerne Deutsch, denn arbeite ich in Berlin.'],
          loesung: 0,
          warum: 'Tras **denn** el orden es normal: Subjekt + Verb. ~~(denn está en «posición 0», como «pues» en español.)~~',
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies den Text. Richtig oder falsch? ~~(Lee el texto. ¿Verdadero o falso?)~~',
      textTitel: 'Zettel im Hausflur',
      text: 'Liebe Nachbarn! Am Samstag feiern wir ein Sommerfest im Hof, denn unsere Tochter Aylin wird zehn Jahre alt. Wir grillen und es gibt Kuchen und Musik. Es ist vielleicht ein bisschen laut, aber um 22 Uhr machen wir Schluss. Unser Auto steht am Samstag auf der Straße, deshalb ist der Hof frei. Kommen Sie gern vorbei — mit Kindern oder ohne! Familie Demir, Wohnung 4',
      items: [
        { typ: 'rf', aussage: 'Familie Demir feiert am Samstag ein Sommerfest.', loesung: true },
        {
          typ: 'mc',
          frage: 'Warum feiert die Familie?',
          optionen: ['Sie hat eine neue Wohnung.', 'Aylin hat eine Prüfung.', 'Aylin wird zehn Jahre alt.'],
          loesung: 2,
        },
        { typ: 'rf', aussage: 'Die Musik spielt bis 24 Uhr.', loesung: false },
        {
          typ: 'mc',
          frage: 'Warum ist der Hof am Samstag frei?',
          optionen: ['Das Auto steht auf der Straße.', 'Der Hof ist zu klein.', 'Die Nachbarn haben kein Auto.'],
          loesung: 0,
        },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'formular',
      titel: 'Schreiben',
      anweisung: 'Lies den Text. Ergänze das Formular. ~~(Lee el texto. Completa el formulario.)~~',
      quelle: 'Guten Tag! Ich heiße Óscar Fuentes. Ich möchte einen Kochkurs machen, denn ich koche sehr gern. Ich arbeite bis 17 Uhr, deshalb nehme ich den Abendkurs am Freitag um 18 Uhr. Ich esse kein Fleisch. Meine Telefonnummer ist 0176 909090.',
      felder: [
        { id: 'name', label: 'Name', erwartet: ['Óscar Fuentes', 'Fuentes', 'Oscar Fuentes'] },
        { id: 'kurs', label: 'Kurs', erwartet: ['Kochkurs', 'einen Kochkurs', 'Abendkurs (Kochkurs)'] },
        { id: 'tag', label: 'Kurstag', erwartet: ['Freitag', 'am Freitag'] },
        { id: 'uhrzeit', label: 'Uhrzeit', erwartet: ['18 Uhr', 'um 18 Uhr'] },
        { id: 'essen', label: 'Er isst kein …', erwartet: ['Fleisch', 'kein Fleisch'] },
      ],
    },
  ],
}
