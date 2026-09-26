// Übungsheft C1 — Lektion 31: Digitalisierung & KI
export default {
  lektion: 31,
  titel: 'Übungsheft — Digitalisierung & KI',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Ergänze die festen Verbindungen des Themenfelds Digitalisierung, achte auf Rektion, Numerus und Konnektoren und erkenne typische Fehlübertragungen aus dem Spanischen.',
      items: [
        {
          typ: 'zuordnen',
          links: ['personenbezogene Daten', 'die Effizienz erheblich', 'die digitale Kluft', 'die Frage der Haftung', 'einen Algorithmus mit Beispieldaten'],
          rechts: ['verarbeiten', 'steigern', 'überwinden', 'klären', 'trainieren'],
          loesung: {
            'personenbezogene Daten': 'verarbeiten',
            'die Effizienz erheblich': 'steigern',
            'die digitale Kluft': 'überwinden',
            'die Frage der Haftung': 'klären',
            'einen Algorithmus mit Beispieldaten': 'trainieren',
          },
        },
        {
          typ: 'luecke',
          text: 'Viele Unternehmen ersetzen menschliche Arbeitskraft zunehmend {1} Maschinen; besonders stark {2} der Automatisierung betroffen sind Routinetätigkeiten.',
          bank: ['durch', 'von', 'mit', 'an'],
          loesungen: { 1: 'durch', 2: 'von' },
        },
        {
          typ: 'luecke',
          text: 'Die erhobenen Daten {1} ausschließlich zu dem Zweck verarbeitet {2}, dem die Nutzerinnen und Nutzer ausdrücklich zugestimmt haben.',
          bank: ['dürfen', 'werden', 'darf', 'wird'],
          loesungen: { 1: 'dürfen', 2: 'werden' },
        },
        {
          typ: 'luecke',
          text: '{1} ungeklärt ist, wer bei Fehlentscheidungen einer KI haftet, bleibt ihr Einsatz in sensiblen Bereichen heikel; {2} fordern Fachleute seit Langem klare gesetzliche Regeln.',
          bank: ['Solange', 'deshalb', 'Sobald', 'dennoch'],
          loesungen: { 1: 'Solange', 2: 'deshalb' },
        },
        {
          typ: 'mc',
          frage: 'Nach wochenlangen Tests und zähen Verhandlungen wurde die Software im März ___ zugelassen — ein Durchbruch für das gesamte Projekt.',
          optionen: ['eventuell', 'schließlich', 'womöglich'],
          loesung: 1,
        },
        {
          typ: 'mc',
          frage: 'Welche Formulierung gibt „Man muss noch klären, wer haftet.“ korrekt im Nominalstil wieder?',
          optionen: ['Die Haftungsfrage bedarf noch eine Klärung.', 'Die Haftungsfrage bedarf noch von einer Klärung.', 'Die Haftungsfrage bedarf noch einer Klärung.'],
          loesung: 2,
        },
        {
          typ: 'korrektur',
          optionen: ['Die Software nimmt Entscheidungen, die kein Mensch mehr nachvollziehen kann.', 'Die Software trifft Entscheidungen, die kein Mensch mehr nachvollziehen kann.'],
          loesung: 1,
          warum: '«Tomar una decisión» es **eine Entscheidung treffen**; *nehmen* es un calco.',
        },
        {
          typ: 'korrektur',
          optionen: ['Viele Nutzer willigen der Verarbeitung ihrer Daten ein, ohne die Bedingungen zu lesen.', 'Viele Nutzer willigen in die Verarbeitung ihrer Daten ein, ohne die Bedingungen zu lesen.'],
          loesung: 1,
          warum: '**einwilligen in** + Akk.; el dativo sin preposición corresponde a *zustimmen* (*der Verarbeitung zustimmen*).',
        },
        {
          typ: 'korrektur',
          optionen: ['Das Unternehmen hat mehrfach gegen den Datenschutz verstoßen.', 'Das Unternehmen hat den Datenschutz mehrfach verstoßen.'],
          loesung: 0,
          warum: '*verstoßen* rige **gegen** + Akk.; no admite objeto directo como «infringir algo».',
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies die Rezension und entscheide, welche Antwort der Einschätzung des Rezensenten entspricht bzw. ob die Aussage richtig oder falsch ist.',
      textTitel: 'Rezension: „Die geliehene Urteilskraft“ von Samuel Okafor',
      text: 'In seinem neuen Buch „Die geliehene Urteilskraft“ geht der Zürcher Informatiker Samuel Okafor der Frage nach, was geschieht, wenn wir immer mehr Entscheidungen an Algorithmen delegieren. Anders als viele Autoren des Genres verzichtet er auf apokalyptische Szenarien. Künstliche Intelligenz, so seine These, sei weder Heilsbringer noch Bedrohung, sondern ein Werkzeug, dessen Wirkung von den Regeln abhänge, die wir ihm setzen.\nStark ist das Buch vor allem dort, wo Okafor konkrete Anwendungen seziert — etwa die automatisierte Vorauswahl von Bewerbungen, bei der Algorithmen die Verzerrungen ihrer Trainingsdaten unbemerkt übernehmen. Überzeugend legt er dar, dass mehr Transparenz allein nicht genügt: Solange die Frage der Haftung ungeklärt bleibe, werde sich niemand für Fehlentscheidungen verantwortlich fühlen.\nWeniger gelungen ist das Schlusskapitel über digitale Bildung. Hier bleibt Okafor merkwürdig vage; seine Forderung, die digitale Kluft durch „mehr Kompetenz für alle“ zu überwinden, ist so richtig wie folgenlos. Wer konkrete Vorschläge erwartet, wird enttäuscht.\nDennoch: Wer eine nüchterne, gut lesbare Einführung in die ethischen Grundfragen der Digitalisierung sucht, kommt an diesem Buch kaum vorbei.',
      items: [
        { typ: 'rf', aussage: 'Okafor warnt in seinem Buch vor einer bevorstehenden Katastrophe durch künstliche Intelligenz.', loesung: false },
        {
          typ: 'mc',
          frage: 'Welchen Zusammenhang stellt Okafor zwischen Transparenz und Haftung her?',
          optionen: ['Transparenz mache eine gesetzliche Haftungsregelung auf Dauer überflüssig.', 'Haftungsregeln seien erst dann sinnvoll, wenn Algorithmen vollständig transparent arbeiteten.', 'Ohne geklärte Haftung reiche Transparenz nicht aus, damit jemand Verantwortung übernehme.'],
          loesung: 2,
        },
        {
          typ: 'mc',
          frage: 'Was bemängelt der Rezensent am Schlusskapitel?',
          optionen: ['Okafors Forderung sei zwar zutreffend, bleibe aber ohne konkrete Konsequenzen.', 'Das Kapitel überschätze die Bedeutung digitaler Kompetenzen für die Gesellschaft.', 'Okafor widerspreche darin seiner eigenen These vom Werkzeugcharakter der KI.'],
          loesung: 0,
        },
        { typ: 'rf', aussage: 'Der Rezensent empfiehlt das Buch trotz seiner Schwächen.', loesung: true },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'text',
      titel: 'Schreiben',
      anweisung: 'Verfasse ein formelles Schreiben (mindestens 80 Wörter). Verwende mindestens vier Begriffe aus dem Kernwortschatz der Lektion, etwa Transparenz, Haftung, personenbezogene Daten oder verantwortungsvoll.',
      aufgabe: 'Deine Stadtverwaltung kündigt an, Anträge auf Wohngeld künftig von einem KI-System vorprüfen zu lassen. Schreibe an die zuständige Wohngeldstelle.',
      punkte: [
        'Beziehe dich auf die Ankündigung und erkenne mögliche Vorteile an.',
        'Lege deine Bedenken hinsichtlich Transparenz, Datenschutz oder Haftung dar.',
        'Bitte um konkrete Auskünfte und schlage eine Schutzvorkehrung vor.',
      ],
      minWoerter: 80,
      beispielLoesung: 'Sehr geehrte Damen und Herren,\nmit Interesse habe ich Ihrer Ankündigung entnommen, dass Anträge auf Wohngeld künftig von einem KI-System vorgeprüft werden sollen. Dass sich dadurch die Bearbeitungszeiten verkürzen und die Effizienz der Verwaltung steigt, begrüße ich ausdrücklich.\nZugleich habe ich Bedenken. Die Anträge enthalten hochsensible personenbezogene Daten; mir ist nicht klar, wo und wie lange diese verarbeitet werden. Zudem fehlt es an Transparenz darüber, nach welchen Kriterien der Algorithmus entscheidet — und wer haftet, wenn ein Antrag zu Unrecht abgelehnt wird.\nIch bitte Sie daher um Auskunft zu diesen Punkten. Darüber hinaus schlage ich vor, jede ablehnende Empfehlung des Systems von einer Sachbearbeiterin oder einem Sachbearbeiter überprüfen zu lassen. Nur so ist ein verantwortungsvoller Einsatz der Technologie gewährleistet.\nMit freundlichen Grüßen\nAmira Haddad',
    },
  ],
}
