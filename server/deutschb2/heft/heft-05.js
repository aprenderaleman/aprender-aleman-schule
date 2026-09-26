// Übungsheft B2 — Lektion 05: Konnektoren II — final, temporal, konditional
export default {
  lektion: 5,
  titel: 'Übungsheft — Konnektoren II',
  teile: [
    {
      typ: 'grammatik',
      titel: 'Grammatik',
      anweisung: 'Zweck, Zeit oder Bedingung? Ergänze den passenden Konnektor und achte bei nachdem auf die Zeitenfolge.',
      items: [
        {
          typ: 'luecke',
          text: 'Tarek besucht einen Abendkurs, {1} seine Chancen auf dem Arbeitsmarkt zu verbessern. Seine Frau bringt abends die Kinder ins Bett, {2} er in Ruhe lernen kann.',
          bank: ['um', 'damit', 'obwohl', 'bis'],
          loesungen: { 1: 'um', 2: 'damit' },
        },
        {
          typ: 'luecke',
          text: 'Nachdem die letzten Gäste {1}, räumten wir gemeinsam die Küche auf. — Nachdem ich die Unterlagen {2}, schicke ich sie Ihnen per E-Mail zu.',
          bank: ['gegangen waren', 'gegangen sind', 'geprüft habe', 'geprüft hatte'],
          loesungen: { 1: 'gegangen waren', 2: 'geprüft habe' },
        },
        {
          typ: 'luecke',
          text: 'Sofia fährt jeden Morgen mit dem Rad zur Arbeit. {1} sie unterwegs ist, hört sie Podcasts auf Deutsch. {2} sie im Büro ankommt, holt sie sich noch schnell einen Kaffee beim Bäcker. Dieses Ritual will sie beibehalten, {3} sie fließend Deutsch spricht.',
          bank: ['Während', 'Bevor', 'bis', 'seitdem', 'Nachdem'],
          loesungen: { 1: 'Während', 2: 'Bevor', 3: 'bis' },
        },
        { typ: 'mc', frage: '___ du Fragen hast, melde dich bitte jederzeit bei mir.', optionen: ['Falls', 'Bis', 'Damit'], loesung: 0 },
        { typ: 'mc', frage: '___ alle Teilnehmenden einverstanden sind, verschieben wir die Sitzung auf Donnerstag.', optionen: ['Bevor', 'Seitdem', 'Sofern'], loesung: 2 },
        { typ: 'mc', frage: 'Er spart jeden Monat Geld, ___ sich im Sommer ein neues Fahrrad zu kaufen.', optionen: ['damit', 'um', 'für'], loesung: 1 },
        {
          typ: 'korrektur',
          optionen: ['Ich lerne jeden Abend, für die Prüfung zu bestehen.', 'Ich lerne jeden Abend, um die Prüfung zu bestehen.'],
          loesung: 1,
          warum: '«para + infinitivo» es **um … zu**, nunca *für … zu* (calco de «para»).',
        },
        {
          typ: 'korrektur',
          optionen: ['Ich spreche langsam, damit du mich verstehst.', 'Ich spreche langsam, um du mich zu verstehen.'],
          loesung: 0,
          warum: 'Con dos sujetos distintos (*ich* / *du*) solo vale **damit**; *um … zu* no admite sujeto propio. Y tras *damit* va indicativo, no hay subjuntivo como en «para que me entiendas».',
        },
        {
          typ: 'korrektur',
          optionen: ['Seit ich auf dem Land gewohnt habe, gehe ich oft wandern.', 'Seit ich auf dem Land wohne, gehe ich oft wandern.'],
          loesung: 1,
          warum: 'Si la situación dura hasta hoy, *seit* va con **presente**: *seit ich hier wohne*. No lo pongas en pasado por influencia de «desde que me mudé».',
        },
        {
          typ: 'satzbau',
          woerter: ['das', 'gehst', 'aus', 'Bevor', 'bitte', 'du', 'Licht', 'mach'],
          loesung: 'Bevor du gehst, mach bitte das Licht aus.',
          alt: ['Bevor du gehst, mach das Licht bitte aus.', 'Mach bitte das Licht aus, bevor du gehst.', 'Mach das Licht bitte aus, bevor du gehst.', 'Bitte mach das Licht aus, bevor du gehst.'],
        },
      ],
    },
    {
      typ: 'lesen',
      titel: 'Lesen',
      anweisung: 'Lies den Auszug aus einem Zeitungsartikel. Entscheide, welche Aussage dem Text entspricht.',
      textTitel: 'Artikelauszug: Plaudern ohne Notendruck',
      text: 'Jeden Donnerstagabend verwandelt sich der Lesesaal der Stadtbibliothek Ahlfeld in ein Sprachcafé. Die Idee stammt von der pensionierten Lehrerin Renate Kowalski. Nachdem sie jahrelang Deutschkurse für Zugewanderte gegeben hatte, wollte sie einen Ort schaffen, an dem man ohne Notendruck üben kann. Seit das Café vor zwei Jahren eröffnet wurde, kommen regelmäßig bis zu vierzig Gäste. Während die einen über Alltagsthemen plaudern, bereiten sich andere gezielt auf Vorstellungsgespräche vor. Damit niemand allein am Tisch sitzt, begrüßen Ehrenamtliche jeden neuen Gast persönlich. Die Teilnahme ist kostenlos. Einen festen Platz hat man aber nur, sofern man sich vorher auf der Webseite der Bibliothek anmeldet. Wer spontan vorbeikommt, bekommt nur einen Platz, falls noch Stühle frei sind. Bevor die Sommerferien beginnen, plant Kowalski ein großes Fest mit Musik und Gerichten aus den Herkunftsländern der Gäste. Bis dahin sucht das Team noch Freiwillige, die einmal im Monat einen Abend leiten.',
      items: [
        { typ: 'rf', aussage: 'Renate Kowalski hat früher selbst Deutsch unterrichtet.', loesung: true },
        {
          typ: 'mc',
          frage: 'Was muss man tun, um sicher einen Platz zu bekommen?',
          optionen: ['einen kleinen Beitrag bezahlen', 'möglichst früh am Abend kommen', 'sich vorher auf der Webseite anmelden'],
          loesung: 2,
        },
        { typ: 'rf', aussage: 'Im Sprachcafé sprechen alle Gäste über dieselben Themen.', loesung: false },
        {
          typ: 'mc',
          frage: 'Wofür sucht das Team Freiwillige?',
          optionen: ['für die Organisation des Sommerfests', 'um einmal im Monat einen Abend zu leiten', 'um Deutschkurse für Zugewanderte zu geben'],
          loesung: 1,
        },
      ],
    },
    {
      typ: 'schreiben',
      variante: 'text',
      titel: 'Schreiben',
      anweisung: 'Schreib eine formelle E-Mail mit mindestens 60 Wörtern. Denk an Betreff, Anrede und Gruß.',
      aufgabe: 'Die Bildungsakademie Nordstern bietet im Oktober einen Wochenendkurs „Präsentieren im Beruf“ an. Du möchtest teilnehmen. Schreib der Akademie eine E-Mail, um dich anzumelden.',
      punkte: [
        'Erkläre, wozu du den Kurs besuchen möchtest (um … zu oder damit).',
        'Frag, was passiert, falls du einen Termin verpasst.',
        'Erkundige dich, was du erledigen musst, bevor der Kurs beginnt.',
      ],
      minWoerter: 60,
      beispielLoesung: 'Betreff: Anmeldung zum Kurs „Präsentieren im Beruf“ — Sehr geehrte Damen und Herren, hiermit möchte ich mich für Ihren Wochenendkurs „Präsentieren im Beruf“ im Oktober anmelden. Ich besuche den Kurs, um sicherer vor Kunden zu sprechen, denn in meiner neuen Stelle muss ich regelmäßig Projekte vorstellen. Außerdem habe ich eine Frage: Was passiert, falls ich wegen einer Dienstreise einen Termin verpasse? Kann ich ihn dann nachholen? Bitte teilen Sie mir auch mit, was ich erledigen muss, bevor der Kurs beginnt. Muss ich die Gebühr vorher überweisen? Ich würde mich über eine kurze Rückmeldung freuen. Mit freundlichen Grüßen, Paula Richter',
    },
  ],
}
