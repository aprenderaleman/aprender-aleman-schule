// Übungsheft C1 — Lektion 34: Sprache & Gesellschaft
export default {
  lektion: 34,
  titel: 'Übungsheft — Sprache & Gesellschaft',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Ergänze die festen Verbindungen des Themenfelds Sprache bzw. wähle die Form, die Kollokation, Rektion und Kontext verlangen. Achte besonders auf Lehnübersetzungen aus dem Spanischen.',
      items: [
        {
          typ: 'luecke',
          text: 'Ohne gezielte Förderung drohen viele kleine Dialekte {1}; wie jede lebendige Sprache {2} auch die Mundart dem Sprachwandel.',
          bank: ['auszusterben', 'unterliegt', 'aussterben', 'unterläuft'],
          loesungen: { 1: 'auszusterben', 2: 'unterliegt' },
        },
        {
          typ: 'luecke',
          text: 'Ob sich eine sprachliche Neuerung {1}, entscheidet am Ende der alltägliche {2} — keine Kommission.',
          bank: ['durchsetzt', 'Sprachgebrauch', 'durchsetzen', 'Sprachgefühl'],
          loesungen: { 1: 'durchsetzt', 2: 'Sprachgebrauch' },
        },
        {
          typ: 'luecke',
          text: 'Für viele eingewanderte Familien hat die {1} eine {2} Funktion: Sie hält die Verbindung zur Großelterngeneration lebendig.',
          bank: ['Herkunftssprache', 'identitätsstiftende', 'Fachsprache', 'identitätsstiftend'],
          loesungen: { 1: 'Herkunftssprache', 2: 'identitätsstiftende' },
        },
        {
          typ: 'mc',
          frage: 'Wer die Standardsprache sicher ___, hat in Schule und Beruf bessere Chancen.',
          optionen: ['dominiert', 'beherrscht', 'bewältigt'],
          loesung: 1,
          warum: 'Una lengua se **beherrscht**; *dominieren* calca «dominar un idioma» y *bewältigen* se dice de tareas o dificultades.',
        },
        {
          typ: 'mc',
          frage: 'Der Vorschlag, Formulare der Stadtverwaltung künftig durchgängig zu gendern, hat eine heftige Debatte ___.',
          optionen: ['ausgelöst', 'ausgeführt', 'aufgelöst'],
          loesung: 0,
        },
        {
          typ: 'korrektur',
          optionen: ['Meine Kollegin spricht fließend das Deutsche und das Portugiesische.', 'Meine Kollegin spricht fließend Deutsch und Portugiesisch.'],
          loesung: 1,
          warum: 'Con *sprechen* el nombre de la lengua va **sin artículo**: *Ich spreche Deutsch* (no «hablo el alemán»).',
        },
        {
          typ: 'korrektur',
          optionen: ['Der Roman wurde aus dem Spanischen ins Deutsche übersetzt.', 'Der Roman wurde vom Spanischen zum Deutschen übersetzt.'],
          loesung: 0,
          warum: 'La construcción fija es **aus dem** + lengua de origen, **ins** + lengua de destino; *vom … zum* calca «del … al».',
        },
        {
          typ: 'korrektur',
          optionen: ['Im Stadtrat wurde eine hitzige Debatte über Anglizismen in der Verwaltung gemacht.', 'Im Stadtrat wurde eine hitzige Debatte über Anglizismen in der Verwaltung geführt.'],
          loesung: 1,
          warum: 'Un debate se **führt** (*eine Debatte über + Akk. führen*); *machen* calca «hacer un debate».',
        },
        {
          typ: 'zuordnen',
          links: ['Mehrsprachigkeit gezielt', 'am generischen Maskulinum', 'den öffentlichen Sprachgebrauch', 'sich der Sprachpflege', 'die Herkunftssprache an die Kinder'],
          rechts: ['fördern', 'festhalten', 'prägen', 'verschreiben', 'weitergeben'],
          loesung: {
            'Mehrsprachigkeit gezielt': 'fördern',
            'am generischen Maskulinum': 'festhalten',
            'den öffentlichen Sprachgebrauch': 'prägen',
            'sich der Sprachpflege': 'verschreiben',
            'die Herkunftssprache an die Kinder': 'weitergeben',
          },
        },
        {
          typ: 'satzbau',
          woerter: ['wird', 'Dialekt', 'in', 'Gesprochen', 'meist', 'der', 'Deutschschweiz'],
          loesung: 'Gesprochen wird in der Deutschschweiz meist Dialekt.',
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies den Essayauszug und entscheide, welche Antwort der Position der Autorin entspricht bzw. ob die Aussage richtig oder falsch ist.',
      textTitel: 'Essay: „Wem gehört die Sprache?“ von Nadja Petrović (Auszug)',
      text: 'Alle paar Jahre flammt sie wieder auf, die Klage über den Verfall des Deutschen. Mal sind es die Anglizismen, die die Sprache angeblich überfluten, mal ist es die gendergerechte Sprache, die sie angeblich verunstaltet. Wer genauer hinsieht, erkennt ein wiederkehrendes Muster: Beklagt wird selten die Sprache selbst, sondern der Wandel der Gesellschaft, die sie spricht.\nDenn Sprachwandel ist kein Unfall, sondern der Normalfall. Im 18. Jahrhundert galt das Französische als Sprache der Gebildeten, und Wörter wie „Balkon“ oder „Friseur“ empörten damals manche Sprachhüter — heute nimmt sie niemand mehr als fremd wahr. Was sich durchsetzt, entscheidet kein Gremium, sondern der alltägliche Sprachgebrauch von Millionen.\nDas heißt nicht, dass jede Neuerung gleichermaßen willkommen sein muss. Wo Anglizismen ohne Not verständliche Wörter verdrängen, erschweren sie die Verständigung, und das trifft vor allem jene, die kein Englisch sprechen. Der Maßstab sollte daher nicht die Herkunft eines Wortes sein, sondern seine Leistung: Füllt es eine Lücke, oder schmückt es nur? Sprachpflege im besten Sinne hieße dann, nicht Verbote zu erlassen, sondern Bewusstsein zu schaffen.',
      items: [
        {
          typ: 'mc',
          frage: 'Welches Muster erkennt die Autorin in den wiederkehrenden Klagen über den Sprachverfall?',
          optionen: ['Die Klagen gingen meist von der Sprachwissenschaft aus.', 'Die Klagen beträfen fast ausschließlich den Wortschatz der Jugend.', 'Die Klagen richteten sich eigentlich gegen gesellschaftliche Veränderungen.'],
          loesung: 2,
        },
        { typ: 'rf', aussage: 'Laut dem Text wurden französische Lehnwörter im 18. Jahrhundert allgemein begrüßt.', loesung: false },
        {
          typ: 'mc',
          frage: 'Welchen Maßstab schlägt die Autorin für die Bewertung von Anglizismen vor?',
          optionen: ['Ob das Wort aus einer angesehenen Kultursprache stammt.', 'Ob das Wort eine Lücke im Wortschatz schließt oder bloß schmückt.', 'Ob ein Fachgremium das Wort offiziell anerkannt hat.'],
          loesung: 1,
        },
        { typ: 'rf', aussage: 'Die Autorin räumt ein, dass bestimmte Anglizismen die Verständigung erschweren können.', loesung: true },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'text',
      titel: 'Schreiben',
      anweisung: 'Verfasse ein formelles Schreiben (mindestens 80 Wörter). Verwende mindestens vier Begriffe aus dem Kernwortschatz, etwa Mehrsprachigkeit, Herkunftssprache, Verständigung oder Standardsprache.',
      aufgabe: 'Die Schule deines Kindes plant, auf dem Pausenhof nur noch Deutsch zuzulassen. Schreibe als Mutter oder Vater an die Schulleitung.',
      punkte: [
        'Beziehe dich auf das geplante Vorhaben und zeige Verständnis für das Anliegen der Schule.',
        'Lege dar, warum die Regel aus deiner Sicht problematisch ist.',
        'Schlage eine Alternative vor und bitte um ein Gespräch.',
      ],
      minWoerter: 80,
      beispielLoesung: 'Sehr geehrte Frau Dr. Lindqvist,\naus dem letzten Elternbrief habe ich erfahren, dass auf dem Pausenhof künftig nur noch Deutsch gesprochen werden soll. Ihr Anliegen kann ich durchaus nachvollziehen: Eine sichere Beherrschung der Standardsprache ist die Voraussetzung für schulischen Erfolg, und die Verständigung zwischen allen Kindern muss gewährleistet sein.\nDennoch halte ich ein Verbot für problematisch. Viele Kinder erleben ihre Herkunftssprache als identitätsstiftend; wer sie ihnen in der Pause untersagt, vermittelt, Mehrsprachigkeit sei ein Makel statt einer Ressource.\nKönnten Sie stattdessen in Betracht ziehen, Deutsch im Unterricht verbindlich vorzuschreiben, die Pausen aber frei zu lassen? Über ein persönliches Gespräch würde ich mich sehr freuen.\nMit freundlichen Grüßen\nAmira Haddad',
    },
  ],
}
