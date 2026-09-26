// Übungsheft B1 — Lektion 36: Gesundheit & Körper
export default {
  lektion: 36,
  titel: 'Übungsheft — Gesundheit & Körper',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Übe den Wortschatz rund um Gesundheit. Achte auf das Verb wehtun, den Dativ und feste Verbindungen.',
      items: [
        { typ: 'mc', frage: 'Meine Beine ___ weh.', optionen: ['tut', 'tun', 'sind'], loesung: 1 },
        {
          typ: 'luecke',
          text: 'Seit gestern habe ich starke {1} und einen trockenen {2}. Ich messe gleich {3}.',
          bank: ['Halsschmerzen', 'Husten', 'Fieber', 'Rezept', 'Apotheke'],
          loesungen: { 1: 'Halsschmerzen', 2: 'Husten', 3: 'Fieber' },
        },
        { typ: 'mc', frage: '___ tut der Bauch weh.', optionen: ['Mich', 'Ich', 'Mir'], loesung: 2 },
        {
          typ: 'zuordnen',
          links: ['38,5 Grad', 'Schnupfen, Husten und Halsschmerzen', 'Hier arbeitet die Ärztin.', 'Hier holst du Medikamente.', 'das Papier vom Arzt für die Apotheke'],
          rechts: ['das Fieber', 'die Erkältung', 'die Praxis', 'die Apotheke', 'das Rezept'],
          loesung: {
            '38,5 Grad': 'das Fieber',
            'Schnupfen, Husten und Halsschmerzen': 'die Erkältung',
            'Hier arbeitet die Ärztin.': 'die Praxis',
            'Hier holst du Medikamente.': 'die Apotheke',
            'das Papier vom Arzt für die Apotheke': 'das Rezept',
          },
        },
        {
          typ: 'luecke',
          text: 'Mit dem {1} von der Ärztin gehe ich in die {2}. Dort bekomme ich ein Medikament {3} den Husten.',
          bank: ['Rezept', 'Apotheke', 'gegen', 'mit', 'Praxis'],
          loesungen: { 1: 'Rezept', 2: 'Apotheke', 3: 'gegen' },
        },
        { typ: 'mc', frage: 'Ich kann morgen nicht zum Arzt. Ich muss den Termin leider ___.', optionen: ['absagen', 'ausfallen', 'aufräumen'], loesung: 0 },
        { typ: 'satzbau', woerter: ['noch', 'Woche', 'Haben', 'frei', 'einen', 'Sie', 'diese', 'Termin'], loesung: 'Haben Sie diese Woche noch einen Termin frei?', alt: ['Haben Sie noch diese Woche einen Termin frei?'] },
        {
          typ: 'korrektur',
          optionen: ['Ich bin konstipiert, ich brauche Taschentücher.', 'Ich bin erkältet, ich brauche Taschentücher.'],
          loesung: 1,
          warum: '«Estoy constipado» = **Ich bin erkältet**. *Konstipiert* es un falso amigo: significa **estreñido**.',
        },
        { typ: 'satzbau', woerter: ['sage', 'krank', 'Ich', 'ab', 'Termin', 'weil', 'den', 'ich', 'bin'], loesung: 'Ich sage den Termin ab, weil ich krank bin.' },
        {
          typ: 'korrektur',
          optionen: ['Mir ist kalt.', 'Ich habe kalt.'],
          loesung: 0,
          warum: '«Tengo frío» = **Mir ist kalt** (Dativ + *sein*), igual que *Mir ist schlecht*. *Ich habe kalt* no existe en alemán.',
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies die Zeitungsnotiz. Löse dann die vier Aufgaben.',
      textTitel: 'Zeitungsnotiz: Viele Erkältungen — volle Praxen',
      text: 'In diesen Wochen sind besonders viele Menschen erkältet. „Jeden Morgen rufen über hundert Patienten bei uns an“, sagt die Hausärztin Dr. Renate Faber aus Neustadt. Ihr Rat: Wer nur Schnupfen und leichte Halsschmerzen hat, muss nicht sofort in die Praxis kommen. Viel Tee trinken, genug schlafen und ein paar Tage zu Hause bleiben hilft oft schon. Einfache Mittel gegen Husten gibt es ohne Rezept in der Apotheke. Wer aber länger als drei Tage hohes Fieber hat, soll unbedingt einen Termin machen. Wichtig für Berufstätige: Ab dem vierten Krankheitstag braucht man meistens eine Krankschreibung vom Arzt. Die Praxis Faber hat deshalb im Januar auch samstags von 9 bis 12 Uhr geöffnet.',
      items: [
        { typ: 'rf', aussage: 'Im Moment rufen nur wenige Patienten in der Praxis an.', loesung: false },
        {
          typ: 'mc',
          frage: 'Was rät Dr. Faber bei Schnupfen und leichten Halsschmerzen?',
          optionen: ['sofort in die Praxis kommen', 'zu Hause bleiben, Tee trinken und viel schlafen', 'ein Rezept für die Apotheke holen'],
          loesung: 1,
        },
        {
          typ: 'mc',
          frage: 'Wann soll man unbedingt einen Termin machen?',
          optionen: ['bei hohem Fieber, das länger als drei Tage dauert', 'bei leichtem Husten', 'bei leichten Halsschmerzen'],
          loesung: 0,
        },
        { typ: 'rf', aussage: 'Im Januar kann man auch am Samstagvormittag in die Praxis gehen.', loesung: true },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'formular',
      titel: 'Schreiben',
      anweisung: 'Lies die Nachricht auf dem Anrufbeantworter der Praxis. Ergänze dann das Formular.',
      quelle: 'Guten Tag, hier spricht Irina Petrova. Ich hätte gern einen Termin bei Frau Dr. Faber. Ich habe seit Dienstag starke Rückenschmerzen, und mein Nacken tut auch weh. Am besten passt mir Donnerstagnachmittag, weil ich vormittags arbeite. Bitte rufen Sie mich zurück. Vielen Dank!',
      felder: [
        { id: 'name', label: 'Name', erwartet: ['Irina Petrova', 'Petrova'] },
        { id: 'aerztin', label: 'Termin bei', erwartet: ['Frau Dr. Faber', 'Dr. Faber', 'Frau Faber', 'Faber'] },
        { id: 'beschwerden', label: 'Beschwerden', erwartet: ['starke Rückenschmerzen', 'Rückenschmerzen', 'Rücken', 'Rückenschmerzen und Nacken', 'Rückenschmerzen und Nackenschmerzen', 'Rücken und Nacken'] },
        { id: 'seit', label: 'Seit wann?', erwartet: ['seit Dienstag', 'Dienstag'] },
        { id: 'wunsch', label: 'Wunschtermin', erwartet: ['Donnerstagnachmittag', 'Donnerstag nachmittag', 'Donnerstag Nachmittag', 'am Donnerstagnachmittag', 'Donnerstag'] },
      ],
    },
  ],
}
