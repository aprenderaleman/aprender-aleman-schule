// Übungsheft C1 — Lektion 15: Wortbildung & Kollokationen
export default {
  lektion: 15,
  titel: 'Übungsheft — Wortbildung & Kollokationen',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Wähle jeweils das Verb, das mit dem Nomen eine feste Verbindung eingeht, bzw. die Form aus der Wortfamilie, die Wortart und Kontext verlangen. Erschließe Genus und Bedeutung über Suffix, Präfix und letztes Glied.',
      items: [
        {
          typ: 'luecke',
          text: 'Die Opposition {1} scharfe Kritik an dem Vorhaben und {2} den Zeitplan grundsätzlich in Frage.',
          bank: ['übte', 'stellte', 'machte', 'nahm'],
          loesungen: { 1: 'übte', 2: 'stellte' },
        },
        {
          typ: 'luecke',
          text: 'Digitale Kompetenzen {1} bei der Personalauswahl eine immer größere Rolle; wer sie mitbringt, kann einen wichtigen Beitrag zur Modernisierung der Verwaltung {2}.',
          bank: ['spielen', 'leisten', 'haben', 'geben'],
          loesungen: { 1: 'spielen', 2: 'leisten' },
        },
        {
          typ: 'luecke',
          text: 'Die {1} der neuen Verfahren ist inzwischen durch mehrere Studien belegt: Sie erweisen sich als deutlich {2} als die bisherigen.',
          bank: ['Wirksamkeit', 'wirksamer', 'Wirklichkeit', 'wirkend'],
          loesungen: { 1: 'Wirksamkeit', 2: 'wirksamer' },
        },
        {
          typ: 'luecke',
          text: 'Nach dem Skandal ist das Vertrauen in die Geschäftsführung nachhaltig {1}; viele Beschäftigte begegnen ihr inzwischen mit offenem {2}.',
          bank: ['zerstört', 'verstört', 'Misstrauen', 'Missverständnis'],
          loesungen: { 1: 'zerstört', 2: 'Misstrauen' },
        },
        {
          typ: 'mc',
          frage: '___ Erkenntnis, dass die Kosten aus dem Ruder laufen, kam für das Projekt zu spät.',
          optionen: ['Die', 'Das', 'Der'],
          loesung: 0,
        },
        {
          typ: 'mc',
          frage: 'Welcher Artikel gehört zu „Kundenzufriedenheitsumfrage“?',
          optionen: ['der', 'die', 'das'],
          loesung: 1,
        },
        {
          typ: 'mc',
          frage: 'Welche Schreibung entspricht der Norm?',
          optionen: ['Ein und Ausgänge', 'Ein-und Ausgänge', 'Ein- und Ausgänge'],
          loesung: 2,
        },
        {
          typ: 'korrektur',
          optionen: ['Der Vorstand zieht inzwischen auch einen Verkauf der Sparte in Betracht.', 'Der Vorstand nimmt inzwischen auch einen Verkauf der Sparte in Betracht.'],
          loesung: 0,
          warum: 'La colocación es **in Betracht ziehen**; *nehmen* es calco de «tomar en consideración».',
        },
        {
          typ: 'korrektur',
          optionen: ['Bei der Planung sollten wir mehr Rücksicht auf ältere Nutzer haben.', 'Bei der Planung sollten wir mehr Rücksicht auf ältere Nutzer nehmen.'],
          loesung: 1,
          warum: 'Se dice **Rücksicht nehmen auf** + acusativo; *haben* es calco de «tener consideración».',
        },
        {
          typ: 'zuordnen',
          links: ['die Verantwortung für das Scheitern', 'Einfluss auf eine Entscheidung', 'grundsätzliche Fragen', 'aus Fehlern Konsequenzen', 'jederzeit zur Verfügung'],
          rechts: ['übernehmen', 'nehmen', 'aufwerfen', 'ziehen', 'stehen'],
          loesung: {
            'die Verantwortung für das Scheitern': 'übernehmen',
            'Einfluss auf eine Entscheidung': 'nehmen',
            'grundsätzliche Fragen': 'aufwerfen',
            'aus Fehlern Konsequenzen': 'ziehen',
            'jederzeit zur Verfügung': 'stehen',
          },
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies die Rezension und entscheide, welche Antwort der Einschätzung des Rezensenten entspricht bzw. ob die Aussage richtig oder falsch ist.',
      textTitel: 'Rezension: „Das Wort als Baukasten“ von Miriam Hoxha',
      text: 'Mit „Das Wort als Baukasten“ legt die Grazer Sprachwissenschaftlerin Miriam Hoxha ein Buch vor, das einen bemerkenswerten Beitrag zur Sprachdidaktik leistet. Ihre These: Wer die Bausteine des Deutschen kennt — Präfixe, Suffixe, Fugenelemente —, muss unbekannte Wörter nicht nachschlagen, sondern kann sie erschließen. Überzeugend zeigt Hoxha, welche Rolle das letzte Glied eines Kompositums für Bedeutung und Genus spielt, und ihre Kapitel über die Präfixe ver-, zer- und ent- gehören zum Besten, was derzeit zu diesem Thema vorliegt.\nGanz ohne Schwächen ist das Buch allerdings nicht. An einigen Stellen übt die Autorin scharfe Kritik an herkömmlichen Lehrwerken, ohne ihre Vorwürfe zu belegen; das wirkt eher polemisch als erhellend. Zudem wirft das Kapitel über Kollokationen mehr Fragen auf, als es beantwortet. Hoxha räumt selbst ein, dass sich feste Wortverbindungen nicht aus Regeln ableiten lassen — warum sie ihnen dann nur zwölf Seiten widmet, bleibt offen. Wer Ausdrücke wie „Maßnahmen ergreifen“ oder „Rücksicht nehmen“ aktiv beherrschen möchte, sollte daher zusätzlich ein Kollokationswörterbuch in Betracht ziehen.\nUnterm Strich überwiegen die Stärken deutlich: ein anregendes, klug aufgebautes Buch für fortgeschrittene Lernende und Lehrkräfte.',
      items: [
        { typ: 'rf', aussage: 'Die Rezension hebt die Kapitel über die Präfixe besonders positiv hervor.', loesung: true },
        {
          typ: 'mc',
          frage: 'Was kritisiert der Rezensent an Hoxhas Umgang mit herkömmlichen Lehrwerken?',
          optionen: ['Sie übernehme deren Methoden, ohne die Quellen zu nennen.', 'Sie erhebe Vorwürfe gegen sie, ohne diese zu belegen.', 'Sie behandle sie so ausführlich, dass ihr eigentliches Thema zu kurz komme.'],
          loesung: 1,
        },
        {
          typ: 'mc',
          frage: 'Was bemängelt der Rezensent am Kapitel über Kollokationen?',
          optionen: ['Die Autorin stelle Regeln für Kollokationen auf, die sich in der Praxis nicht bewährten.', 'Die Autorin halte Kollokationen für nebensächlich und rate vom Auswendiglernen ab.', 'Obwohl Kollokationen nach Ansicht der Autorin nicht regelhaft ableitbar seien, behandle sie sie nur sehr knapp.'],
          loesung: 2,
        },
        { typ: 'rf', aussage: 'Der Rezensent rät insgesamt vom Kauf des Buches ab.', loesung: false },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'text',
      titel: 'Schreiben',
      anweisung: 'Verfasse ein formelles Schreiben (mindestens 80 Wörter). Verwende mindestens vier feste Nomen-Verb-Verbindungen, etwa eine Rolle spielen, in Betracht ziehen, Rücksicht nehmen oder zur Verfügung stehen.',
      aufgabe: 'Deine Sprachschule hat angekündigt, den Präsenzunterricht am Abend zu streichen und nur noch Onlinekurse anzubieten. Schreibe an die Schulleitung.',
      punkte: [
        'Beziehe dich auf die angekündigte Änderung und lege dar, welche Folgen sie für berufstätige Teilnehmende hätte.',
        'Schlage mindestens eine Alternative vor, die die Schule in Betracht ziehen könnte.',
        'Bitte um eine Stellungnahme und biete deine Unterstützung an.',
      ],
      minWoerter: 80,
      beispielLoesung: 'Sehr geehrte Damen und Herren,\nmit Bedauern habe ich erfahren, dass Sie den Präsenzunterricht am Abend ab dem kommenden Semester streichen und nur noch Onlinekurse anbieten möchten. Für berufstätige Teilnehmende wie mich hätte diese Entscheidung erhebliche Folgen: Gerade der persönliche Austausch im Kurs spielt für unseren Lernerfolg eine entscheidende Rolle.\nIch möchte Sie daher bitten, eine Alternative in Betracht zu ziehen. Denkbar wäre etwa ein Wechselmodell, bei dem sich Präsenz- und Onlinetermine abwechseln. So könnten Sie Kosten senken und zugleich Rücksicht auf die Bedürfnisse Ihrer Abendgruppen nehmen.\nÜber eine Stellungnahme würde ich mich sehr freuen. Für ein Gespräch stehe ich Ihnen jederzeit gern zur Verfügung.\nMit freundlichen Grüßen\nTomás Herrera',
    },
  ],
}
