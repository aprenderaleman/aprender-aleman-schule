// Übungsheft B1 — Lektion 04: Konnektoren I — weil, denn, deshalb
export default {
  lektion: 4,
  titel: 'Übungsheft — weil, denn, deshalb',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Wähle den richtigen Konnektor, ordne die Wörter und finde den Fehler.',
      items: [
        { typ: 'mc', frage: 'Ich bleibe heute zu Hause, ___ ich bin krank.', optionen: ['weil', 'denn', 'deshalb'], loesung: 1 },
        { typ: 'mc', frage: 'Es regnet, ___ nehme ich den Schirm mit.', optionen: ['denn', 'weil', 'deshalb'], loesung: 2 },
        {
          typ: 'luecke',
          text: 'Tom kann heute nicht kommen, {1} er einen Termin beim Arzt hat. Morgen hat er mehr Zeit, {2} ruft er uns dann an.',
          bank: ['weil', 'deshalb', 'denn'],
          loesungen: { 1: 'weil', 2: 'deshalb' },
        },
        {
          typ: 'luecke',
          text: 'Ich gehe früh ins Bett, {1} ich bin sehr müde. Ich muss morgen um sechs arbeiten, {2} trinke ich abends keinen Kaffee.',
          bank: ['denn', 'darum', 'weil'],
          loesungen: { 1: 'denn', 2: 'darum' },
        },
        { typ: 'satzbau', woerter: ['bleibt', 'keine', 'deshalb', 'Hause', 'sie', 'zu', 'hat', 'Lust', 'Sie'], loesung: 'Sie hat keine Lust, deshalb bleibt sie zu Hause.' },
        { typ: 'satzbau', woerter: ['habe', 'Tee', 'weil', 'Halsschmerzen', 'ich', 'trinke', 'Ich'], loesung: 'Ich trinke Tee, weil ich Halsschmerzen habe.' },
        {
          typ: 'zuordnen',
          links: ['Ich habe Hunger,', 'Wir nehmen ein Taxi,', 'Lena trägt heute eine Jacke,', 'Mein Handy ist kaputt,', 'Paul kommt nicht ins Büro,'],
          rechts: ['deshalb koche ich jetzt Nudeln.', 'weil wir es eilig haben.', 'denn es ist sehr kalt.', 'deswegen kaufe ich ein neues.', 'weil er krank ist.'],
          loesung: {
            'Ich habe Hunger,': 'deshalb koche ich jetzt Nudeln.',
            'Wir nehmen ein Taxi,': 'weil wir es eilig haben.',
            'Lena trägt heute eine Jacke,': 'denn es ist sehr kalt.',
            'Mein Handy ist kaputt,': 'deswegen kaufe ich ein neues.',
            'Paul kommt nicht ins Büro,': 'weil er krank ist.',
          },
        },
        {
          typ: 'korrektur',
          optionen: ['Ich lerne Deutsch, weil ich in Berlin arbeite.', 'Ich lerne Deutsch, weil ich arbeite in Berlin.'],
          loesung: 0,
          warum: 'Tras **weil** el verbo conjugado va al final: *weil ich in Berlin **arbeite***. En español el orden no cambia; en alemán, sí.',
        },
        {
          typ: 'korrektur',
          optionen: ['Es regnet, deshalb ich bleibe zu Hause.', 'Es regnet, deshalb bleibe ich zu Hause.'],
          loesung: 1,
          warum: 'Después de **deshalb** viene enseguida el verbo y luego el sujeto (inversión): *deshalb **bleibe ich***. No copies el orden de «por eso yo me quedo».',
        },
        {
          typ: 'korrektur',
          optionen: ['Denn ich bin krank, ich bleibe zu Hause.', 'Ich bleibe zu Hause, denn ich bin krank.'],
          loesung: 1,
          warum: 'Una frase con **denn** nunca abre la oración: primero la idea principal, después *denn* + causa. Si quieres empezar con la causa, usa **weil**: *Weil ich krank bin, bleibe ich zu Hause.*',
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies den Forumsbeitrag. Sind die Aussagen richtig oder falsch? Wähle dann die richtige Antwort.',
      textTitel: 'Forum „Stadtleben“ — Mit dem Fahrrad zur Arbeit?',
      text: 'Hallo zusammen! Ich bin Jonas und arbeite in einem Büro in Leipzig. Seit einem Jahr fahre ich mit dem Fahrrad zur Arbeit. Warum? Mit dem Auto war ich jeden Morgen fast 45 Minuten unterwegs, denn die Straßen waren immer voll. Heute brauche ich nur 20 Minuten. Außerdem fühle ich mich fitter, weil ich mich jeden Tag bewege. Nur im Winter ist es manchmal zu kalt, deshalb nehme ich dann die Straßenbahn. Meine Kollegin Aylin findet meine Idee gut. Sie wohnt aber 25 Kilometer von der Stadt weg, deswegen fährt sie weiter mit dem Auto. Und ihr? Fahrt ihr auch mit dem Rad zur Arbeit, oder habt ihr keine Lust auf Regen und Wind?',
      items: [
        { typ: 'rf', aussage: 'Jonas fährt seit einem Jahr mit dem Fahrrad ins Büro.', loesung: true },
        { typ: 'rf', aussage: 'Mit dem Auto war Jonas schneller.', loesung: false },
        {
          typ: 'mc',
          frage: 'Was macht Jonas im Winter manchmal?',
          optionen: ['Er fährt mit dem Auto.', 'Er nimmt die Straßenbahn.', 'Er arbeitet zu Hause.'],
          loesung: 1,
        },
        {
          typ: 'mc',
          frage: 'Warum fährt Aylin weiter mit dem Auto?',
          optionen: ['Weil sie kein Fahrrad hat.', 'Weil sie keine Lust auf Regen hat.', 'Weil sie weit weg wohnt.'],
          loesung: 2,
        },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'formular',
      titel: 'Schreiben',
      anweisung: 'Lies die E-Mail. Ergänze dann das Anmeldeformular für den Abendkurs.',
      quelle: 'Guten Tag, ich heiße Marisol Castro und möchte mich für den Abendkurs Deutsch B1 anmelden. Ich kann nur abends, weil ich tagsüber im Krankenhaus arbeite. Im September bin ich im Urlaub, deshalb möchte ich im Oktober beginnen. Ich wohne in der Gartenstraße 12 in Leipzig. Sie erreichen mich unter 0157 2233441.',
      felder: [
        { id: 'name', label: 'Vor- und Nachname', erwartet: ['Marisol Castro', 'Castro'] },
        { id: 'arbeit', label: 'Arbeitsplatz', erwartet: ['im Krankenhaus', 'Krankenhaus'] },
        { id: 'beginn', label: 'Kursbeginn (Monat)', erwartet: ['Oktober', 'im Oktober'] },
        { id: 'strasse', label: 'Straße und Hausnummer', erwartet: ['Gartenstraße 12', 'Gartenstr. 12'] },
        { id: 'telefon', label: 'Telefon', erwartet: ['0157 2233441', '01572233441'] },
      ],
    },
  ],
}
