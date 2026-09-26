// Übungsheft C1 — Lektion 12: Relativsätze komplex
export default {
  lektion: 12,
  titel: 'Übungsheft — Relativsätze komplex',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Bearbeite die Aufgaben zu den komplexen Relativsätzen. Bestimme jeweils zuerst das Bezugswort — ein Nomen, ein unbestimmtes Pronomen oder den ganzen vorangehenden Satz — und prüfe, welche Präposition das Verb verlangt.',
      items: [
        {
          typ: 'luecke',
          text: 'Die Architektin, {1} Entwürfe mehrfach ausgezeichnet wurden, übernimmt nun die Leitung des Projekts. Der Verein, {2} Mitglieder überwiegend im Ruhestand sind, sucht dringend Nachwuchs.',
          bank: ['deren', 'dessen', 'denen', 'die'],
          loesungen: { 1: 'deren', 2: 'dessen' },
        },
        {
          typ: 'luecke',
          text: 'Es gibt noch vieles, {1} wir vor der Abstimmung sprechen müssen. Die Kollegin, {2} ich mich jederzeit verlassen konnte, wechselt in eine andere Abteilung.',
          bank: ['worüber', 'auf die', 'worauf', 'über die'],
          loesungen: { 1: 'worüber', 2: 'auf die' },
        },
        {
          typ: 'luecke',
          text: 'Der Prüfbericht wurde am Montag veröffentlicht, {1} die Ministerin noch am selben Abend vor die Presse trat. Die Behörde senkte zudem die Gebühren, {2} bei den Antragstellern auf breite Zustimmung stieß.',
          bank: ['woraufhin', 'was', 'wobei', 'wodurch'],
          loesungen: { 1: 'woraufhin', 2: 'was' },
        },
        {
          typ: 'mc',
          frage: 'Eine Methode, ___ Hilfe sich Fehler frühzeitig erkennen lassen, spart erhebliche Kosten.',
          optionen: ['mit dessen', 'mit der', 'mit deren'],
          loesung: 2,
        },
        {
          typ: 'mc',
          frage: 'Wem die Entscheidung nicht zusagt, ___ kann innerhalb eines Monats Widerspruch einlegen.',
          optionen: ['der', 'dem', 'wer'],
          loesung: 0,
        },
        {
          typ: 'mc',
          frage: 'Der Referent erläuterte das Konzept ausführlich, ___ er die Kostenfrage allerdings aussparte.',
          optionen: ['woraufhin', 'wobei', 'wodurch'],
          loesung: 1,
        },
        {
          typ: 'korrektur',
          optionen: ['Die Stiftung, dessen Vorsitz seit Jahren vakant ist, sucht eine neue Leitung.', 'Die Stiftung, deren Vorsitz seit Jahren vakant ist, sucht eine neue Leitung.'],
          loesung: 1,
          warum: 'A diferencia de «cuyo», **dessen/deren** concuerda con el antecedente (*die Stiftung* → deren), no con el sustantivo que sigue (*der Vorsitz*).',
        },
        {
          typ: 'korrektur',
          optionen: ['Der Forscher, dessen Thesen umstritten sind, hält den Eröffnungsvortrag.', 'Der Forscher, dessen die Thesen umstritten sind, hält den Eröffnungsvortrag.'],
          loesung: 0,
          warum: 'Tras *dessen/deren* el sustantivo va **sin artículo**: *dessen Thesen*, igual que «cuyas tesis».',
        },
        {
          typ: 'korrektur',
          optionen: ['Die Mittel, die die Stadt verfügt, reichen bei Weitem nicht aus.', 'Die Mittel, über die die Stadt verfügt, reichen bei Weitem nicht aus.'],
          loesung: 1,
          warum: '*Verfügen* rige **über** + acusativo; la preposición se antepone al relativo: *über die*. Es el mismo caso que «de los que dispone».',
        },
        {
          typ: 'zuordnen',
          links: ['eine Maßnahme', 'einen Sachverhalt', 'eine Voraussetzung', 'zu der Erkenntnis', 'auf einem Missverständnis'],
          rechts: ['ergreifen', 'schildern', 'erfüllen', 'gelangen', 'beruhen'],
          loesung: {
            'eine Maßnahme': 'ergreifen',
            'einen Sachverhalt': 'schildern',
            'eine Voraussetzung': 'erfüllen',
            'zu der Erkenntnis': 'gelangen',
            'auf einem Missverständnis': 'beruhen',
          },
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies den Bericht. Entscheide, welche Antwort dem Text entspricht bzw. ob die Aussage richtig oder falsch ist.',
      textTitel: 'Bericht: Ein Jahr Reparaturtreff im Stadtteilzentrum',
      text: 'Vor einem Jahr eröffnete im Kasseler Stadtteil Wehlheiden ein Reparaturtreff, dessen Idee auf eine Gruppe pensionierter Handwerker zurückgeht. Jeden zweiten Samstag bringen Anwohnerinnen und Anwohner defekte Geräte mit, deren Reparatur sich in einem Fachbetrieb kaum lohnen würde: Toaster, Lampen, Fahrräder, gelegentlich auch Laptops. Wer etwas reparieren lassen möchte, muss allerdings selbst mit anpacken — eine Regel, auf deren Einhaltung die Organisatoren großen Wert legen. Denn der Treff versteht sich nicht als kostenloser Dienstleister, sondern als Ort, an dem Wissen weitergegeben wird.\nDie Bilanz, die der Trägerverein nun vorgelegt hat, fällt positiv aus. Von rund 900 Gegenständen konnten fast zwei Drittel wieder instand gesetzt werden, wodurch nach Schätzung des Vereins mehrere Tonnen Elektroschrott vermieden wurden. Bemerkenswert ist ein Umstand, mit dem anfangs niemand gerechnet hatte: Ein Großteil der Besucher kommt inzwischen weniger wegen der Geräte als wegen der Gespräche. Ein Problem bleibt jedoch der Nachwuchs. Die meisten Ehrenamtlichen sind über siebzig, und junge Menschen, die über das nötige Fachwissen verfügen, fehlen bislang. Der Verein will deshalb im Herbst Kurse anbieten, in denen Jugendliche die Grundlagen der Elektronik erlernen können.',
      items: [
        { typ: 'rf', aussage: 'Die Idee zum Reparaturtreff stammt von einer Gruppe Studierender.', loesung: false },
        {
          typ: 'mc',
          frage: 'Welche Regel gilt für alle, die ein Gerät reparieren lassen möchten?',
          optionen: ['Sie entrichten einen geringen Unkostenbeitrag.', 'Sie helfen bei der Reparatur selbst mit.', 'Sie bringen höchstens ein Gerät pro Termin mit.'],
          loesung: 1,
        },
        {
          typ: 'mc',
          frage: 'Womit hatte beim Start des Projekts niemand gerechnet?',
          optionen: ['dass viele Besucher inzwischen vor allem wegen des Austauschs kommen', 'dass sich nahezu alle mitgebrachten Geräte reparieren lassen', 'dass besonders häufig Laptops zur Reparatur gebracht werden'],
          loesung: 0,
        },
        { typ: 'rf', aussage: 'Der Verein plant, Jugendlichen Grundkenntnisse der Elektronik zu vermitteln.', loesung: true },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'text',
      titel: 'Schreiben',
      anweisung: 'Verfasse eine formelle E-Mail mit mindestens 80 Wörtern. Verwende mindestens einen Genitiv-Relativsatz mit dessen oder deren und einen Relativanschluss mit Präposition oder wo(r)-Form.',
      aufgabe: 'Du engagierst dich im Reparaturtreff aus dem Bericht. Schreib im Namen des Trägervereins an das Kulturamt der Stadt und bitte um finanzielle Unterstützung für die geplanten Elektronikkurse für Jugendliche.',
      punkte: [
        'Stelle den Reparaturtreff und seine bisherige Bilanz knapp vor.',
        'Erläutere, wofür die Mittel verwendet werden sollen und welche Voraussetzungen bereits erfüllt sind.',
        'Bitte um einen Gesprächstermin und schließe die E-Mail angemessen ab.',
      ],
      minWoerter: 80,
      beispielLoesung: 'Sehr geehrte Damen und Herren,\nich wende mich im Namen des Trägervereins des Reparaturtreffs Wehlheiden an Sie, dessen Arbeit Sie vielleicht aus der Lokalpresse kennen. Im ersten Jahr haben unsere Ehrenamtlichen rund 600 Geräte instand gesetzt, wodurch mehrere Tonnen Elektroschrott vermieden wurden.\nDa die meisten unserer Helfer über siebzig sind, möchten wir im Herbst Kurse anbieten, in denen Jugendliche die Grundlagen der Elektronik erlernen. Die wichtigsten Voraussetzungen sind bereits erfüllt: Räume und erfahrene Kursleiter stehen zur Verfügung. Was uns fehlt, sind Mittel für Werkzeug und Material, über die ein kleiner Verein wie unserer nicht verfügt.\nÜber die Gelegenheit, Ihnen unser Vorhaben in einem persönlichen Gespräch vorzustellen, würden wir uns sehr freuen.\nMit freundlichen Grüßen\nTobias Engel',
    },
  ],
}
