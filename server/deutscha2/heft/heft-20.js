// Übungsheft A2 — Lektion 20: Lesen: Anzeigen zuordnen
export default {
  lektion: 20,
  titel: 'Übungsheft — Lesen: Anzeigen zuordnen',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Wähle die richtige Antwort oder Form. ~~(Elige la respuesta o la forma correcta.)~~',
      items: [
        {
          typ: 'mc',
          frage: 'Ich ___ mein altes Fahrrad. Es kostet nur 40 Euro.',
          optionen: ['verkaufe', 'kaufe', 'suche'],
          loesung: 0,
        },
        {
          typ: 'mc',
          frage: 'Das Zimmer kostet 350 Euro im Monat. Frau Brandt ___ das Zimmer an eine Studentin.',
          optionen: ['kauft', 'vermietet', 'sucht'],
          loesung: 1,
        },
        {
          typ: 'mc',
          frage: 'Der Eintritt kostet nichts. Er ist ___.',
          optionen: ['günstig', 'gebraucht', 'kostenlos'],
          loesung: 2,
        },
        {
          typ: 'luecke',
          text: 'Der Sportverein {1} Yogakurse an. Der Kurs ist sehr {2}: nur 3 Euro pro Stunde. {3} Sie sich bei Frau Kaya!',
          bank: ['bietet', 'günstig', 'Melden', 'gebraucht', 'Suchen'],
          loesungen: { 1: 'bietet', 2: 'günstig', 3: 'Melden' },
        },
        {
          typ: 'luecke',
          text: 'Ich {1} mein Fahrrad. Wer will es kaufen? Es ist {2}, aber noch sehr gut. Es kostet nur 30 Euro — ein tolles {3}!',
          bank: ['gebraucht', 'Angebot', 'verkaufe', 'vermiete', 'Verein'],
          loesungen: { 1: 'verkaufe', 2: 'gebraucht', 3: 'Angebot' },
        },
        {
          typ: 'satzbau',
          woerter: ['an', 'Kurse', 'Sie', 'für', 'Bieten', 'auch', 'Kinder'],
          loesung: 'Bieten Sie auch Kurse für Kinder an?',
          alt: ['Bieten Sie Kurse auch für Kinder an?'],
        },
        {
          typ: 'satzbau',
          woerter: ['Fahrrad', 'ansehen', 'am', 'ich', 'das', 'Kann', 'Samstag'],
          loesung: 'Kann ich das Fahrrad am Samstag ansehen?',
          alt: ['Kann ich am Samstag das Fahrrad ansehen?'],
        },
        {
          typ: 'zuordnen',
          links: ['Olga sucht ein Zimmer.', 'Ben (30) möchte Fußball spielen.', 'Familie Roth braucht einen Babysitter.', 'Herr Ito will billig ein Sofa kaufen.'],
          rechts: ['Zimmer zu vermieten, 300 Euro', 'Sportverein sucht Spieler ab 18', 'Studentin sucht Arbeit als Babysitterin', 'Verkaufe gebrauchtes Sofa, 50 Euro'],
          loesung: {
            'Olga sucht ein Zimmer.': 'Zimmer zu vermieten, 300 Euro',
            'Ben (30) möchte Fußball spielen.': 'Sportverein sucht Spieler ab 18',
            'Familie Roth braucht einen Babysitter.': 'Studentin sucht Arbeit als Babysitterin',
            'Herr Ito will billig ein Sofa kaufen.': 'Verkaufe gebrauchtes Sofa, 50 Euro',
          },
        },
        {
          typ: 'korrektur',
          optionen: ['Wir anbieten Deutschkurse.', 'Wir bieten Deutschkurse an.'],
          loesung: 1,
          warum: '**anbieten** es separable: *an* va al final. ~~(Wir bieten … an — nunca «wir anbieten»)~~',
        },
        {
          typ: 'korrektur',
          optionen: ['Melden Sie sich bei uns!', 'Melden Sie bei uns!'],
          loesung: 0,
          warum: '**sich melden** es reflexivo: el *sich* no se omite. ~~(«contacte con nosotros» — en alemán hace falta sich)~~',
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies die Anzeige. Löse die 4 Aufgaben. ~~(Lee el anuncio. Resuelve las 4 tareas.)~~',
      textTitel: 'Anzeige: Sportverein Grün-Rot',
      text: 'Der Sportverein Grün-Rot sucht neue Mitglieder! Wir bieten Kurse für Kinder und Erwachsene an: Fußball, Tennis und Yoga. Der Yogakurs für Erwachsene findet dienstags um 19 Uhr statt. Das Fußballtraining für Kinder (8–12 Jahre) ist samstags um 10 Uhr. Die erste Stunde ist kostenlos! Danach kostet ein Kurs nur 15 Euro im Monat — ein günstiges Angebot. Wir verkaufen auch gebrauchte Tennisschläger für 10 Euro. Haben Sie Fragen? Melden Sie sich bei Frau Özdemir: Tel. 0341 55678.',
      items: [
        { typ: 'rf', aussage: 'Der Yogakurs ist am Dienstagabend.', loesung: true },
        { typ: 'rf', aussage: 'Das Fußballtraining ist für Erwachsene.', loesung: false },
        {
          typ: 'mc',
          frage: 'Was kostet die erste Stunde?',
          optionen: ['15 Euro', 'nichts', '10 Euro'],
          loesung: 1,
        },
        {
          typ: 'mc',
          frage: 'Was verkauft der Verein?',
          optionen: ['Fußbälle', 'Yogamatten', 'Tennisschläger'],
          loesung: 2,
        },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'formular',
      titel: 'Schreiben',
      anweisung: 'Lies die Anzeige. Ergänze das Formular. ~~(Lee el anuncio. Completa el formulario.)~~',
      quelle: 'Verkaufe mein Damenfahrrad, gebraucht, aber sehr gut. Das Fahrrad ist drei Jahre alt. Preis: nur 90 Euro! Sie können es in Leipzig ansehen. Melden Sie sich bei Julia Brenner: Tel. 0176 2234511, abends ab 18 Uhr.',
      felder: [
        { id: 'angebot', label: 'Angebot', erwartet: ['Damenfahrrad', 'ein Damenfahrrad', 'Fahrrad'] },
        { id: 'preis', label: 'Preis', erwartet: ['90 Euro', '90', '90 €', '90,00 Euro'] },
        { id: 'ort', label: 'Ort', erwartet: ['Leipzig', 'in Leipzig'] },
        { id: 'name', label: 'Kontakt (Name)', erwartet: ['Julia Brenner', 'Brenner', 'Frau Brenner'] },
        { id: 'telefon', label: 'Telefon', erwartet: ['0176 2234511', '01762234511'] },
      ],
    },
  ],
}
