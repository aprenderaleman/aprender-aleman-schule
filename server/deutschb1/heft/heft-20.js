// Übungsheft B1 — Lektion 20: Lesen Teil 2: Anzeigen zuordnen
export default {
  lektion: 20,
  titel: 'Übungsheft — Lesen Teil 2',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Hier übst du die Sprache der Anzeigen. Wähle oder ergänze das passende Wort.',
      items: [
        { typ: 'mc', frage: 'Ich möchte ein ___ Fahrrad kaufen, kein neues.', optionen: ['gebrauchtes', 'gebrauchten', 'gebrauchter'], loesung: 0 },
        { typ: 'mc', frage: 'Bei Fragen melden Sie sich bitte ___ Herrn Brandt.', optionen: ['an', 'bei', 'zu'], loesung: 1 },
        { typ: 'mc', frage: 'Studenten bezahlen weniger: Es gibt eine ___.', optionen: ['Anzeige', 'Öffnungszeit', 'Ermäßigung'], loesung: 2 },
        {
          typ: 'luecke',
          text: 'Schönes Zimmer zu {1}: 15 m², 350 € {2} Monat, Internet {3}. Bitte {4} Sie sich bei Frau Kern.',
          bank: ['vermieten', 'pro', 'kostenlos', 'melden', 'abholen', 'Anfänger'],
          loesungen: { 1: 'vermieten', 2: 'pro', 3: 'kostenlos', 4: 'melden' },
        },
        {
          typ: 'luecke',
          text: 'Gitarrenkurs für {1}! Die erste Stunde ist {2}. {3} der Musikschule: Mo–Fr 10–18 Uhr.',
          bank: ['Anfänger', 'kostenlos', 'Öffnungszeiten', 'gebraucht', 'Ermäßigung'],
          loesungen: { 1: 'Anfänger', 2: 'kostenlos', 3: 'Öffnungszeiten' },
        },
        {
          typ: 'zuordnen',
          links: ['kostenlos', 'gebraucht', 'Ermäßigung', 'ab sofort', 'Selbstabholung'],
          rechts: ['Man muss nichts bezahlen.', 'Es ist nicht neu.', 'Man bezahlt weniger.', 'schon jetzt, ab heute', 'Der Käufer holt es selbst.'],
          loesung: {
            'kostenlos': 'Man muss nichts bezahlen.',
            'gebraucht': 'Es ist nicht neu.',
            'Ermäßigung': 'Man bezahlt weniger.',
            'ab sofort': 'schon jetzt, ab heute',
            'Selbstabholung': 'Der Käufer holt es selbst.',
          },
        },
        {
          typ: 'satzbau',
          woerter: ['Anfänger', 'suche', 'am', 'einen', 'Ich', 'Abend', 'für', 'Kurs'],
          loesung: 'Ich suche einen Kurs für Anfänger am Abend.',
          alt: ['Ich suche einen Kurs am Abend für Anfänger.'],
        },
        {
          typ: 'satzbau',
          woerter: ['abholen', 'Samstag', 'das', 'Sie', 'am', 'Sofa', 'können'],
          loesung: 'Sie können das Sofa am Samstag abholen.',
          alt: ['Sie können am Samstag das Sofa abholen.'],
        },
        {
          typ: 'korrektur',
          optionen: ['Ich suche ein Zimmer. Ich möchte es vermieten.', 'Ich suche ein Zimmer. Ich möchte es mieten.'],
          loesung: 1,
          warum: '**mieten** = alquilar como inquilino; **vermieten** = alquilar como dueño. En español es el mismo verbo «alquilar».',
        },
        {
          typ: 'korrektur',
          optionen: ['Der Kurs kostet 10 Euro pro Stunde.', 'Der Kurs kostet 10 Euro für Stunde.'],
          loesung: 0,
          warum: 'Para precios por unidad se usa **pro** sin artículo: *10 Euro pro Stunde*. «por hora» no se traduce con *für*.',
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies die Anzeigen. Löse dann die vier Aufgaben. Prüf immer alle Details.',
      textTitel: 'Schwarzes Brett im Stadtteilzentrum',
      text: 'A) Spanisch für Anfänger: kleine Gruppe, mittwochs 18:30–20 Uhr, 12 Euro pro Termin. Die erste Stunde ist kostenlos. Für Studenten gibt es eine Ermäßigung. Bitte melden Sie sich bei Frau Ruiz. — B) Kinderwagen abzugeben: gebraucht, aber in gutem Zustand, 60 Euro. Nur Selbstabholung am Wochenende. — C) Wir vermieten ab 1. November ein möbliertes Zimmer in unserer WG: 18 m², 390 Euro im Monat inklusive Internet. Haustiere sind leider nicht erlaubt. — D) Das Reparatur-Café hat neue Öffnungszeiten: jeden ersten Samstag im Monat von 10 bis 15 Uhr. Hier reparieren Freiwillige kostenlos Lampen, Toaster und Fahrräder. Nur die Ersatzteile müssen Sie selbst bezahlen.',
      items: [
        { typ: 'rf', aussage: 'Die erste Stunde im Spanischkurs kostet nichts.', loesung: true },
        { typ: 'rf', aussage: 'Der Verkäufer bringt den Kinderwagen nach Hause.', loesung: false },
        {
          typ: 'mc',
          frage: 'Was ist im WG-Zimmer nicht erlaubt?',
          optionen: ['Internet', 'eigene Möbel', 'Haustiere'],
          loesung: 2,
        },
        {
          typ: 'mc',
          frage: 'Was muss man im Reparatur-Café bezahlen?',
          optionen: ['die Reparatur', 'nur die Ersatzteile', 'nichts, alles ist kostenlos'],
          loesung: 1,
        },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'formular',
      titel: 'Schreiben',
      anweisung: 'Lies die Nachricht. Ergänze dann das Formular für die Anzeige.',
      quelle: 'Hallo, ich heiße Kemal Aydın und möchte eine Anzeige aufgeben. Ich verkaufe meinen Schreibtisch aus Holz. Er ist fünf Jahre alt, also gebraucht, aber noch sehr stabil. Der Preis ist 45 Euro. Ich kann nicht liefern: Man muss ihn selbst abholen.',
      felder: [
        { id: 'name', label: 'Name', erwartet: ['Kemal Aydın', 'Aydın', 'Kemal Aydin', 'Aydin'] },
        { id: 'gegenstand', label: 'Was verkaufen Sie?', erwartet: ['Schreibtisch', 'einen Schreibtisch', 'ein Schreibtisch', 'Schreibtisch aus Holz', 'einen Schreibtisch aus Holz', 'meinen Schreibtisch'] },
        { id: 'zustand', label: 'Neu oder gebraucht?', erwartet: ['gebraucht'] },
        { id: 'preis', label: 'Preis', erwartet: ['45 Euro', '45 €', '45', '45 EUR', '45,00 €'] },
        { id: 'abholung', label: 'Lieferung oder Selbstabholung?', erwartet: ['Selbstabholung', 'selbst abholen', 'Abholung'] },
      ],
    },
  ],
}
