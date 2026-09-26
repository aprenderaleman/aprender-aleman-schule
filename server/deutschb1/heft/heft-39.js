// Übungsheft B1 — Lektion 39: Bildung & Lernen
export default {
  lektion: 39,
  titel: 'Übungsheft — Bildung & Lernen',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Achte auf lernen oder studieren und auf die Präpositionen. Löse dann die Aufgaben.',
      items: [
        { typ: 'mc', frage: 'Ich ___ seit einem Jahr Deutsch.', optionen: ['studiere', 'lerne', 'besuche'], loesung: 1 },
        { typ: 'mc', frage: 'Sie hat die Prüfung leider nicht ___. Jetzt muss sie sie wiederholen.', optionen: ['bestanden', 'gelernt', 'besucht'], loesung: 0 },
        { typ: 'mc', frage: 'Ich möchte mich ___ den Abendkurs anmelden.', optionen: ['zu', 'auf', 'für'], loesung: 2 },
        {
          typ: 'luecke',
          text: 'Mein Bruder {1} Medizin in Sevilla. Ich {2} Deutsch an der VHS. Beim Sprechen mache ich noch viele {3}.',
          bank: ['studiert', 'lernt', 'lerne', 'Fehler', 'Noten'],
          loesungen: { 1: 'studiert', 2: 'lerne', 3: 'Fehler' },
        },
        {
          typ: 'luecke',
          text: 'Der {1} beginnt um 18 Uhr. Am Ende des Kurses machen wir eine {2}. Wer sie {3}, bekommt ein Zertifikat.',
          bank: ['Unterricht', 'Prüfung', 'Note', 'besteht', 'bestehen'],
          loesungen: { 1: 'Unterricht', 2: 'Prüfung', 3: 'besteht' },
        },
        {
          typ: 'luecke',
          text: 'Meine Tochter geht {1} die Schule. Gestern hat sie in Mathe eine gute {2} bekommen. Sie hat nur einen kleinen {3} gemacht.',
          bank: ['in', 'zu', 'Note', 'Prüfung', 'Fehler'],
          loesungen: { 1: 'in', 2: 'Note', 3: 'Fehler' },
        },
        {
          typ: 'zuordnen',
          links: ['bestehen', 'üben', 'sich anmelden', 'die Note', 'der Unterricht'],
          rechts: ['eine Prüfung schaffen', 'etwas oft machen, bis man es kann', 'sagen: Ich mache beim Kurs mit.', 'zum Beispiel eine 1 oder eine 2 in Mathe', 'die Stunden im Kurs oder in der Schule'],
          loesung: {
            'bestehen': 'eine Prüfung schaffen',
            'üben': 'etwas oft machen, bis man es kann',
            'sich anmelden': 'sagen: Ich mache beim Kurs mit.',
            'die Note': 'zum Beispiel eine 1 oder eine 2 in Mathe',
            'der Unterricht': 'die Stunden im Kurs oder in der Schule',
          },
        },
        { typ: 'satzbau', woerter: ['mich', 'für', 'Ich', 'den', 'habe', 'Kurs', 'angemeldet'], loesung: 'Ich habe mich für den Kurs angemeldet.' },
        { typ: 'satzbau', woerter: ['viel', 'weil', 'Ich', 'übe', 'Prüfung', 'die', 'ich', 'bestehen', 'will'], loesung: 'Ich übe viel, weil ich die Prüfung bestehen will.' },
        {
          typ: 'korrektur',
          optionen: ['Ich studiere Deutsch an der VHS.', 'Ich lerne Deutsch an der VHS.'],
          loesung: 1,
          warum: 'Un idioma en un curso se **lernt**. *studieren* solo para la carrera universitaria: *Ich studiere Medizin.*',
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies die E-Mail der Sprachschule. Löse dann die vier Aufgaben.',
      textTitel: 'E-Mail: Ihre Anfrage zum Deutschkurs B1',
      text: 'Sehr geehrte Frau Nguyen, vielen Dank für Ihr Interesse an unseren Deutschkursen. Der nächste Kurs auf Niveau B1 beginnt am 4. November. Der Unterricht findet immer dienstags und donnerstags von 18 bis 20:15 Uhr statt. Der Kurs dauert zwölf Wochen und kostet 290 Euro. Das Lehrbuch ist nicht im Preis enthalten. Vor dem Kurs machen Sie bitte bei uns einen kurzen Test, damit wir wissen, ob das Niveau passt. Der Test ist kostenlos und dauert etwa 30 Minuten. Am Ende des Kurses können Sie eine Prüfung machen, aber dafür müssen Sie sich extra anmelden. Für den Kurs können Sie sich bis zum 20. Oktober online oder bei uns im Büro anmelden. Mit freundlichen Grüßen, Stefan Albrecht, Sprachschule am Markt',
      items: [
        { typ: 'rf', aussage: 'Der Kurs findet zweimal pro Woche statt.', loesung: true },
        {
          typ: 'mc',
          frage: 'Was ist im Preis von 290 Euro nicht dabei?',
          optionen: ['der Test', 'das Lehrbuch', 'der Unterricht'],
          loesung: 1,
        },
        { typ: 'rf', aussage: 'Für den Test vor dem Kurs muss Frau Nguyen bezahlen.', loesung: false },
        {
          typ: 'mc',
          frage: 'Bis wann kann sich Frau Nguyen für den Kurs anmelden?',
          optionen: ['bis zum 4. November', 'bis zum Ende des Kurses', 'bis zum 20. Oktober'],
          loesung: 2,
        },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'text',
      titel: 'Schreiben',
      anweisung: 'Schreib eine Nachricht mit mindestens 40 Wörtern. Denk an Anrede und Gruß.',
      aufgabe: 'Deine Freundin Sofia möchte auch Deutsch lernen. Sie fragt dich nach Tipps. Schreib ihr eine Nachricht.',
      punkte: [
        'Erzähl, wo und seit wann du Deutsch lernst.',
        'Schreib, wie du zu Hause übst.',
        'Gib ihr einen Tipp für den Anfang.',
      ],
      minWoerter: 40,
      beispielLoesung: 'Liebe Sofia,\nschön, dass du auch Deutsch lernen möchtest! Ich lerne seit zwei Jahren Deutsch und besuche zweimal pro Woche einen Abendkurs. Zu Hause übe ich jeden Tag zwanzig Minuten Vokabeln und höre Podcasts. Mein Tipp: Hab keine Angst vor Fehlern und sprich so viel wie möglich. Aus Fehlern lernt man!\nViele Grüße\nPaula',
    },
  ],
}
