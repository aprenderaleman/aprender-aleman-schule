// Übungsheft C1 — Lektion 08: Funktionsverbgefüge
export default {
  lektion: 8,
  titel: 'Übungsheft — Funktionsverbgefüge',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Bearbeite die Aufgaben zu den Funktionsverbgefügen. Geh vom Nomen und seiner Präposition aus und entscheide, ob das Gefüge ein Bewirken oder ein Geschehen ausdrückt.',
      items: [
        {
          typ: 'luecke',
          text: 'Die Geschäftsführung {1} den Beschäftigten ab Mai zusätzliche Weiterbildungstage zur Verfügung. Wer sie in Anspruch {2} möchte, muss sich bis Ende April anmelden.',
          bank: ['stellt', 'steht', 'nehmen', 'treffen'],
          loesungen: { 1: 'stellt', 2: 'nehmen' },
        },
        {
          typ: 'luecke',
          text: 'Die neue Verordnung {1} am 1. Januar in Kraft; bis dahin {2} die bisherigen Regeln weiterhin Anwendung.',
          bank: ['tritt', 'setzt', 'finden', 'nehmen'],
          loesungen: { 1: 'tritt', 2: 'finden' },
        },
        {
          typ: 'luecke',
          text: 'Der Prüfbericht {1} die bisherige Strategie offen in Frage. Für die Leitung des Projekts {2} daher nur noch externe Fachleute in Frage.',
          bank: ['stellt', 'kommen', 'ziehen', 'bringt'],
          loesungen: { 1: 'stellt', 2: 'kommen' },
        },
        {
          typ: 'mc',
          frage: 'Die Vorsitzende ___ ihre Bedenken gegenüber dem Entwurf unmissverständlich zum Ausdruck.',
          optionen: ['kam', 'brachte', 'stellte'],
          loesung: 1,
        },
        {
          typ: 'mc',
          frage: 'Zahlreiche Anwohnerinnen und Anwohner ___ auf der Versammlung scharfe Kritik an der geplanten Umgehungsstraße.',
          optionen: ['machten', 'nahmen', 'übten'],
          loesung: 2,
        },
        {
          typ: 'korrektur',
          optionen: ['Der Ausschuss hat nach langer Debatte eine Entscheidung genommen.', 'Der Ausschuss hat nach langer Debatte eine Entscheidung getroffen.'],
          loesung: 1,
          warum: '«Tomar una decisión» es *eine Entscheidung **treffen***; calcar el verbo español (*nehmen*) es uno de los errores más marcados.',
        },
        {
          typ: 'korrektur',
          optionen: ['Bitte nehmen Sie Rücksicht auf die Nachbarn.', 'Bitte nehmen Sie Rücksicht mit den Nachbarn.'],
          loesung: 0,
          warum: 'La preposición es fija: *Rücksicht nehmen **auf** + Akk.*, aunque en español digas «tener consideración **con**».',
        },
        {
          typ: 'korrektur',
          optionen: ['Das Gesetz wird im Januar in Kraft getreten.', 'Das Gesetz tritt im Januar in Kraft.'],
          loesung: 1,
          warum: '*in Kraft treten* ya expresa por sí mismo el sentido pasivo; no admite otra pasiva (y *treten* aquí es intransitivo).',
        },
        {
          typ: 'zuordnen',
          links: ['einen wesentlichen Beitrag', 'in der Debatte das Wort', 'die Anwohner rechtzeitig in Kenntnis', 'eine Kündigung ernsthaft in Erwägung', 'nach langem Zögern eine Entscheidung'],
          rechts: ['leisten', 'ergreifen', 'setzen', 'ziehen', 'treffen'],
          loesung: {
            'einen wesentlichen Beitrag': 'leisten',
            'in der Debatte das Wort': 'ergreifen',
            'die Anwohner rechtzeitig in Kenntnis': 'setzen',
            'eine Kündigung ernsthaft in Erwägung': 'ziehen',
            'nach langem Zögern eine Entscheidung': 'treffen',
          },
        },
        {
          typ: 'satzbau',
          woerter: ['zieht', 'Betracht', 'ein', 'Die', 'in', 'ernsthaft', 'Kommission', 'Verbot'],
          loesung: 'Die Kommission zieht ein Verbot ernsthaft in Betracht.',
          alt: ['Die Kommission zieht ernsthaft ein Verbot in Betracht.'],
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies den Bericht. Entscheide, welche Antwort dem Text entspricht bzw. ob die Aussage richtig oder falsch ist.',
      textTitel: 'Bericht: Ein Jahr Viertagewoche im Rathaus',
      text: 'Seit einem Jahr erprobt die Stadtverwaltung von Lüneburg die Viertagewoche. Nun liegt der Abschlussbericht vor, und er fällt überwiegend positiv aus. Die rund 300 beteiligten Beschäftigten arbeiten bei vollem Gehalt 36 statt 39 Stunden, verteilt auf vier Tage. Krankheitsbedingte Ausfälle gingen im Vergleich zum Vorjahr um knapp ein Fünftel zurück; zugleich wurden deutlich weniger Überstunden angeordnet.\nGanz ohne Probleme verlief der Versuch allerdings nicht. Vor allem in den Bürgerbüros kam es anfangs zu längeren Wartezeiten, weil die Öffnungszeiten neu geregelt werden mussten. Mehrere Bürgerinitiativen übten daraufhin öffentlich Kritik an dem Projekt. Die Verwaltung reagierte, indem sie zusätzliche Online-Termine zur Verfügung stellte; seither sind die Beschwerden stark zurückgegangen.\nDer Personalrat bringt in seiner Stellungnahme zum Ausdruck, das Modell habe die Stadt als Arbeitgeberin spürbar attraktiver gemacht. Tatsächlich stieg die Zahl der Bewerbungen auf offene Stellen um rund 30 Prozent. Eine endgültige Entscheidung über die Fortsetzung will der Stadtrat im Herbst treffen. Eine Ausweitung auf die städtischen Kitas zieht man bislang nicht in Betracht, da dort die Betreuungszeiten verbindlich festgelegt sind.',
      items: [
        { typ: 'rf', aussage: 'Für die Viertagewoche verzichten die Beschäftigten auf einen Teil ihres Gehalts.', loesung: false },
        {
          typ: 'mc',
          frage: 'Wie reagierte die Verwaltung auf die anfänglichen Beschwerden?',
          optionen: ['Sie verlängerte die Öffnungszeiten der Bürgerbüros.', 'Sie bot zusätzliche Termine im Internet an.', 'Sie stellte weiteres Personal für die Bürgerbüros ein.'],
          loesung: 1,
        },
        {
          typ: 'mc',
          frage: 'Was geht aus dem Bericht über die Zukunft des Modells hervor?',
          optionen: ['Der Stadtrat hat die Fortsetzung bereits beschlossen.', 'Eine Übertragung auf die Kitas wird derzeit geprüft.', 'Über die Fortsetzung wird erst im Herbst entschieden.'],
          loesung: 2,
        },
        { typ: 'rf', aussage: 'Seit Beginn des Versuchs bewerben sich mehr Menschen auf offene Stellen bei der Stadt.', loesung: true },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'text',
      titel: 'Schreiben',
      anweisung: 'Verfasse eine formelle E-Mail von mindestens 80 Wörtern. Setze zwei bis drei Funktionsverbgefüge gezielt ein, ohne dass der Text bürokratisch wirkt.',
      aufgabe: 'Vor seiner Entscheidung im Herbst bittet der Stadtrat die Bürgerinnen und Bürger um Rückmeldungen zur Viertagewoche in der Verwaltung. Schreib als Einwohnerin oder Einwohner eine E-Mail an den Stadtrat.',
      punkte: [
        'Bring deine Haltung zur Fortsetzung des Modells klar zum Ausdruck und begründe sie.',
        'Geh auf die Erfahrungen mit den Bürgerbüros ein und schlag eine Verbesserung vor.',
        'Bitte darum, über die Entscheidung rechtzeitig in Kenntnis gesetzt zu werden.',
      ],
      minWoerter: 80,
      beispielLoesung: 'Sehr geehrte Damen und Herren,\nmit Interesse habe ich den Abschlussbericht zur Viertagewoche gelesen und möchte meine Unterstützung für eine Fortsetzung des Modells zum Ausdruck bringen. Weniger Krankheitstage und deutlich mehr Bewerbungen sprechen aus meiner Sicht eindeutig für das Projekt.\nAllerdings habe ich selbst erlebt, wie lang die Wartezeiten in den Bürgerbüros anfangs waren. Die zusätzlichen Online-Termine haben die Lage verbessert; ich rege jedoch an, auch älteren Menschen ohne Internetzugang eine telefonische Terminvergabe zur Verfügung zu stellen.\nIch wäre Ihnen dankbar, wenn Sie mich über Ihre Entscheidung rechtzeitig in Kenntnis setzen könnten.\nMit freundlichen Grüßen\nTomás Ferreira',
    },
  ],
}
